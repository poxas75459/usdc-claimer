/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3Vr3wjYdWQ8t3i1UkVqcE7BXUHZeHXrK8FajJthiQksev9uo5PFfpbwzQgV486JvFPxVCRf62f239MZrd6Mx5JHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JGsn5zoG1QTGZ4y3G1bXT2Uaprh22y9o94YoukyGmmu8XTdrn5zP6oYXAtmCEDWWjo2vL96x1NGbJ7fXqn6aNtw",
  "key1": "3CMqbZZqqJxmnQTUCRFnjU3ijTPaYfAsK8AgtVhPvE3jcTS9ie8q7Kn6g7nrYP3VQPchpm5bya82R6RZtSiW3ULK",
  "key2": "YohehNsVU1mLzgdUgAFK8si5CPCMxgy2xaMQ2qTAUPiM3ELQhxc11AcZniygUdcPewHMRYbfHEEbbii5e5kHXBu",
  "key3": "2w6i2EZ2oFWeA381e7MGuv4eup6MTULMwAq49VNk4V21DBwpPMCQUVwnYxBFaTWujDyuSXTtBNVNj75ZcB9VDMEa",
  "key4": "2VottJS73Lh5idk3WJVcsB27yqVYwHaNGmJiVqwbwDQGhDSNYrWe98L8HiGbwmXc2gVVYnMDdmwWPnNmN1r4V2za",
  "key5": "22nvwhxyUqQ2oK5jfNZ3tpMUW6juBPteUC8sPyzGxXsyPQqtZJ3bUC1XATcQtQUsPfXePXi8wgbQj1P1sJLBFp8u",
  "key6": "zYbe9Z3VDk1icZDL9evDzg77wXEKdKCSuzjVBvAMU5EyLY34moV6d3qj6Gd5xhnh7wvnpkZz9ShUGNnvfgHvXZb",
  "key7": "5nuVLoeU6Y9v3yaAjPhpqJpE23JgwUijbqYRX5XgY243nC1PALQdb7QwX4Zbr4GGebxxQ6nXzoZNQzJVsN2GwZhA",
  "key8": "oWYs6ve2Pco5XbkPuUY5GJg1B5c2aX6dEHFPoN9v7DEetQDbuD5KWr27QK2ZyPdBpjXmd4uSGS67Hianr9a39Qi",
  "key9": "5Nk5ZfqKcJtvNoRvb8BNT8uo36wtpP2gcJ94XYa5wUEhpLcNC8EcvUhak2QWa6EVAy4aFK3G1M13c1Wthg83xRdU",
  "key10": "5MPRjww1oxZmpXWcaibm63h7w2k4S2Q9oUQftiGx8QP6CCmXh24FwpmbmouFcvmKTV8wGCNDadyybwHSKf73EiCE",
  "key11": "C4vW8VoiYH5DT8Haos7qTZVTrhBwRo7Qc4PSYjbjSEh5ANNTZYgoNc3v5GE568kBpzecz4eVwotpr2D7KntCgWr",
  "key12": "4w8WmWTWKZWcVAKahoatBZ77Wrp3xMTk8NasbiVSTAmaSRt54KuuyydWCyYkTKSimSXJxodsMxbXP5mWHfBQ5S6",
  "key13": "4ZQyFW9C4yGDV116L6T7kR1ZGogn4dbfi2zawhyGDbM5aNCG6yM8pYLBQYZ3Nbg6XjvYKXsHyx5UGC4CwsXRW7F",
  "key14": "3vvCUac1ybWjrhFotDJ1myhb8TFQ5HCEKYvWJiBQaw2raeaWFF3dcraAiZ9SR1pFAkUuA4P7E4db1JawCbMqphEB",
  "key15": "2jazBj6p3VfUCZ9P7QJpzCG2kiawSSczm1RR35LKZMdSXSycqCKxrxFYrjGKuReujhosBFrK174Hh9gvp2CGAYwT",
  "key16": "5EVnEQu94sqapGac4GwFYQ2czsK54ow8tRGSxXcNypLyiJASCjc4WBJGxeZGL8KrJ3EQ1vLXuT4trB8yLSNKuqHj",
  "key17": "4PYxwyUokTh5vm3n9MUPQX96tZhxLscMataQzKu7eYj28HBnrCKmfxaJD9zU19N3T71BU1MUM9WKBTR8RWzMo9Bd",
  "key18": "2EShHPvxe9tTVGhD7Ws8BCyGuHbN9chhZxi5NzbihcrneC71zPVt3yc914H4wWHF1GXzL1FeWryKq1VNL7KaAPCR",
  "key19": "2tcSg9E21wLC74quYHiGhr8PrDoEmGvENCAFhLh6FjARUSMFwf2ASGxPHNyY6ssviX2yrnvzjXkuKG8vxcDSCs1X",
  "key20": "2Z1cLMLSe8XchEGq39NmEFJCo6nacYTKsb5EYPKE3nJRcmkHGfwDc237JpT4Tt28dMCTJjD8ZwXg3K1vszibBbrK",
  "key21": "4hfXZUNAMJJBq2UvUiVxDKDYJDJDMS6uLFw4cjcSqmNKbGP6YZTZrR2cmUr8nf48FNQ7VAQTkUWw9aEMx4Tgqigp",
  "key22": "3JdQj4YKKLCPDaiRMLnrifh6UauzCrCfVzXwNrGQW6XrCmFpBJjty8f2VUsuWnEM47bZmNWhLQdwNrTtVyuRgXZ8",
  "key23": "joWPEgKXJZyTMqX3bYGbdLGM2VdWLfcViCHo9CkfGrMbPvXEwpm7qm8r3tdzSAtKJVCVKViLEeDbSnp4mRLiytW",
  "key24": "21qPw6fUZGRMhxT41Rq7JNxZcBXu6d4r6XwoN3sPBmdbDCn7KACbrt7wQQYZKCbdvqrb1RWqczsXk8JXLiMdsQuh",
  "key25": "4xFQy36cDwNMPZeZBt9Hrrp781gfwQyFPMT89okhpV3KdSLCGqa4JzmZoW4v42iDTnchDsSzwiD4MBvw5BtyYb1y",
  "key26": "52GKxzacAq1zSHhhjXB65VKdQpdD8WAcw9yXYWQ8fnMCr9Uf4gemSp58S4BAfXNZRPkwaanAiEryQGKCN89yV25b",
  "key27": "4CQUTW5qyEVgTwDgRSTi7DBUfqEEMJ7nFt2XwenRAGHz8e4oButeLgCPbcFFfhH9vvTCpNcVr3fAXfw6yyVVQaz2",
  "key28": "4rZwe5iew8Z8kJMEpUhBSZzPFNvMhKSRP1MF4cqrgZ94As2GpxCYP6FRdbTbywHRx4QhpR2jANfU39PULoDVrWov",
  "key29": "3HPYMLJSMMMjY1jYyfAkDskAjKTLQFGEB5QJWoe59BwG8WUFcCSRkuyXfBFMK1N357gu8hay3ttYSsgj6D937omL",
  "key30": "5au1hp9S2invT6ENoJx7UeV7a1SyGA4VJ257BagscS6FVZhfa4nyvB1mKrQgjjVXwHfBs4wsTYdKzPC4cJXbUxiq",
  "key31": "4vP7MmZvomTaDKGkNrKMRuYEGBxEEK6xxjfGDptRm8f9QZ2QiQ9Bi3ffBwJSENRhrByVZpTi2Xqv6kXG2LAMme3V",
  "key32": "4gUpmvyH7xQ4e3S2RiTo6Eg9h5JcwtznAQDPf5kQtA3QhwjoYAY3uraC5hor7HVapupNk9VmLysyuP9EsS9WoU5Q"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
