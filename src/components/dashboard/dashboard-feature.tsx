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
    "4rJMk66SfuRPjya68Z4WjNpwPD1cvyGmw46doJPA6zLHvLhfF2AFGoQjLGwGoFz3uKdra6QPBqhdLbZQcWbfhgDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MEhaRi8uLfQ3sWftW1Ne5CFYTLhCZutaWCRWLyUvduWqXivLf5FiMwkySKEeRaSQY6CSeAs2ULtqsHG3TiUFsmu",
  "key1": "2nbmbxW8SMWGVvCEqgmk1imz9YDGD6TaPZaAC3ZpsFbKNyFWwYi3fas5m9eEgwTtzwiNu6tnuw9iHdZ5uZLXxpec",
  "key2": "2vgrLVfqpooJCBxV9acW3rzTEeHH1VqnEex2W5z2JCk59wejaV736GvKotjrDaVYQvu66DyXCK8WNmbqB1wexLdv",
  "key3": "3ozEw1Dk7DqLXTvFc69q4xnJBX3LbHPrc6U69q58mKextP3LjwGq9n7Zs8mwgWkQPavcTnmG9V72ct5yPaqMsXRU",
  "key4": "2XLbbvtextQTqnQQmZhrf3fSPXEuNrNuKTAjfNfYBqnWzMpRavfNpKGB93V54nX5V59tBJNanwH5wYRkmC51Mg8m",
  "key5": "3gK7CbjgpuPHW77sk36XoGqE4g47zYXpfUd4YKCsGk7zctzJLmP2oE63WczuG9J7nKLLj1MPqmBVDygT1DfgGMTT",
  "key6": "3mxL6WNJSuxF33SFozTeAcFz5LTcK4HxF1iU6PHxzUpWVLM9ocihEM9TkMQgSFoC4vK1JSXTT3FcR4MUAkZxn2bQ",
  "key7": "3vayBGkwULVou8mBGKFeN5246TT2D5uCjXxkwuu6sK2yCJZxSB2EA1oBhdn3VgD7qUTAbrTaD737oqaaxzBsVaAU",
  "key8": "5BM5k38NyDTUPpBqK73HWLwzpR2vfrtky7M917yMWi5PA4guseZWVjipFk2FKJmksn3gyrtjhhs9tgTSm2qbMaf1",
  "key9": "5No2MNRGftVY9zPLxAhyjUJG5i3Gpq9WcwTvWr2Eo9VBxdNi2KsJzsdiVtSd2mzSDorzhAj5fBrUCvnWo1d5kGAB",
  "key10": "RGDjzFJyBcmeTA1CPEvcANyQne5EeiJLKe8PbXyNuZDVgmn8C34mqU3RnEA7WTeSCATWdfqScFzRuUADZwa78L2",
  "key11": "5dTn8muLWjvdn9ox8QVh2h9zkWNGkjym9Vh3KpqdFKYp8H85NNX1Hm6EJagMT4ANHaNdiS4LDnYAD5kgQjHct5eL",
  "key12": "zrWYwXCh6C4FRLmRjCW8PfQMuYjE5c54MnVvWaRqiS6smGzzFEaaK7LArQvVtjqzR8YBKT81tRFzhnFpXK7DMiT",
  "key13": "wPGAjyp1zkF845qPzEmVtZgJFuobQx6AtwBvUFvwJ4PGqtnToqQRgEUKPoSfZ6JD6Pwhv8wHzPBrrFVCUAPGNtZ",
  "key14": "54nTeiLJ9VBWn7ensnQXGxbr2pMsALggcH45acqXiot18uUZ7oSPoRwpJtz3JVXgoczzgsrEBxMvoiP6LyhzrEAX",
  "key15": "526oJJEyKyZ1UALRAnaGHvArMJMzWPPvqv79fa7HZhoCq5xtysbptZ4RFKtxQDkuXv2UdU19KkHoaiujg81o6pY1",
  "key16": "3M33xR87Zy2GzYpDmAWd5CQatvgKSKxP9XqkbPo2PDWJH3ZJosgibvuDQ1kB7jqFBtE9jrGwhAM6x9KJgjgW959K",
  "key17": "5QeeQyRbZa9nigAEKKLxQYamx3QgJHYcQATM1GkphbWF5jySLB9avTWmpf8yuCaAUvBLHJZPkjYL1nxsg6bk6192",
  "key18": "5XUKvfwepX6TbebpbAMJbu2eoQvABcqHo9vHfMMAA2iCtLnr3MiZzU9Sr9sqDKQQfhsKHx21R3Lw15J8wntNS14g",
  "key19": "222Dji9d1MzC34cRNWaVGBL5zqiqKU6gq1CyDvgp2Qc2veo1Nw5WKmyVVYG7TymuhYUWQNsjUNva4YsjwHn2HiSn",
  "key20": "3pXvzeYVge7vS4AkjsjY1HEc7XMoBr34cMWrV7WPqiHhBKHRGeFZgcFphRpwr6iXYDhDWphvpkMGJ1SodzaXcfcS",
  "key21": "3iP1WC4SNc7m8Wkvpem3s2JJAPehSBmfuCSBPSswHSqTsKBgfcjrS73YubbHSLKLqT8vDw9Hp5rbKWF3eK45PbA1",
  "key22": "34CS81LKMwKbLj4i7X1dwLScZkydpNGN98BCV4YSe3mfotrstiG7BfScJxCFoCqySrqt3eZMN6TgBB7d2KmeSFvY",
  "key23": "hePhL4oUauoutmVRuSazFfgzfhnBsAyKEdCjVmVVR6rT7V6frkUoceDUNqnREBXmqbW6HcEZSWMmeCka33FbvVP",
  "key24": "eMxcM7rVcgRJAKohRH4Wr9nSd71SXweoAxyoG1p5kvBkqwHpLtMjA5xgtSRtuxCAdy5SySjGBLa229cgUcaBsXX",
  "key25": "dXndJkjuKx341EsYoG2hy3WBZnJxmxkLG2g2aNNNXRRvtQ7imr1RQ6uTke1SRpdo9YJgY2XLDc3FZAFVx7g9Bjs",
  "key26": "5kC8WtB8WPoRMr5pRNXvinD4PPYYCwpHp9vjeG7qQV8nnWw52hZu1tczCmTaTpPTjS8xrngLv4KVxUFhCmDdSoid"
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
