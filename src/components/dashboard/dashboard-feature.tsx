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
    "4fCS2mh48cvTSuL9vVU12SafRyHSFVj9HP3vGKa1HUw7ybt2bK36DDJk4eW77RakFp5Y7LHxBkDTrUL3bYTd8MnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jZGrfLvTQ8ERWEwM5SX8hu5koPhWNQHby4iN4ad3n2cyfCEDih9xD7wgLHsmn4hSXyEmayR72a8YpJ4EMbmA7NY",
  "key1": "2LRt9CFcbNCJmVgcJde33D12oeYYFfR4BFDH3Ahooe9Z17FjcBFhSJ4SSuoYoC9ZZCpQM1YSyyLHfBZnRxgTZUzs",
  "key2": "2UvoWr6LYtdZuHkmDrPiKFf8eyD4Pb3zGtvWQRn8u4HWLe3DmQVE9zS338H8fRAdrsFoKXrZmHTNJUcmWdoAokGY",
  "key3": "5WztuwKY1mLchqc1Lx8b4ixadYgXASdQ8Pq2NdwTbcrVQkxodoXRKhv1tar2q8MEMHtnAEGvSBarsiZNJBUK9jgL",
  "key4": "5UXvjqTJ9NA6Z6eo9zEHGUpmy9Jo3FQEuWEHXLp7dVrSJaGd3aDEmKd4nLo9SNez6fPf46biQQWXGPtpHo3bc8UH",
  "key5": "5DGc7pZvSkcpw22DKoKMAgfoAGcVYeRNqqmwKg4hnx4wpkzCDyUkQV6QwvWLVQjaFguLKMtpxMpWQUSx1B8HmdYm",
  "key6": "2NxdWrpjfvZUsFBcv58mknRo6aohG9nH198aVYyYys3Xy2ir8QiqADxBudWNMMZBtfHrsWsbj37CfWQZmJecpCe",
  "key7": "5A3KHEtb39kVgrVYU3dSTEfFezyP54839uRcKiZZXk6ypALKswNpmy3jts3qjttcdYWfbj8UfaCK7YDFE9u6SRoF",
  "key8": "5Ano76TuL7rytqrFLEAPUhDstj4te9LUw769XvDEbZe1pVuvtWrGZ5sNjMZuZ52o2SdtDCxYFjqH8DnMaAnf3Ljd",
  "key9": "5rP7ZPbmqvVQheqKAKT19dvALZtTbae1MUxgkvKPY6jWQ4fHjPdVTfCQmZKG3Wi99fcfLk4yL98XpVStf482wnGR",
  "key10": "2waAMXS2qAzj4i9JnqKVUcRqvWxpBLN9dDLCpZto1Y5fRDBDowcMqGa2msW3zmh3FjaXRL3VM4R4pTCYTbkQfHiE",
  "key11": "3EDCFJN56VZsTMoPRSoQeb5HTd6oM2CwzPGpwAHnxov4J21tze9MAkSfxDb3XK2kWdqfKZgVGjuKEystSqBadXzg",
  "key12": "58vqVGxTZ4kFGw6SJfRYxymiazKUWqDR5ttt69roA4PZHzyeVGdsgbccAXuv9rvP6FJXJ2sRXnbLdQL4n5iuYKiM",
  "key13": "3nGnwNdyTPdN6cw3sLVvUNYPNm2eW4DNNaJDjnwESVA7Q5eUeArfPyCEqSrYn5LJoFCQZdqomLjZ6Lu51U64BLmd",
  "key14": "2C8WcnLKaUCBsp8o4qc1dSAqy3MNDNobsWPVN45ZsBmu74TBW9RZC23YzMRVNKLUMqxJS6XVLWyc21kuJSjydBj3",
  "key15": "VMeMrv4iGsdQXhkF2PXiBbb979ghrPcH1PtkuHXZLBPkLsDMmLcZyLiouhbLk79XYdB6YHWaET49rW5RYdJgNs2",
  "key16": "5WzUpdpU4LFcQLeabafW6QSwiphFqHMtvrUran7BrzQZsGF3y4hWyaHUNRSgBTYtVvDA8LHfECj6Xj9ymdRLSBdn",
  "key17": "3r1QRULSKNTAEitv6WVJvLcT8jboLpHf8TLx6FH1oVqH4sxs4h8D84kiZNXVMX5vkwiDGU7ywykgAKBqbEWp98uA",
  "key18": "2EdMCN4ib7dejkRuwwuTxxXWUr3u1esgh1UyazrgELmodjaDFr6Di5UvyVZBtvcRpbYU2t4ybQJSnNMiye841tZR",
  "key19": "5eHNQfFDxf471UuAC7Uxiszk1y6TLhFwinTjR2zXyhp1AcoxFbnzhZo5KzioZMpeMd621LuD5eKmYky9rTcFKBaj",
  "key20": "4VYjSMxUdKJ4oDWcEoRFQ5jU2Q6jiEFJAHh6eEisxx7h5mocFKKFDAxuHa5TLjrpboAh1aiHWdT4AwzWRYfyyejx",
  "key21": "f3C9RJNLRBvJJLBBfJonQeV8eFW3d4LMh2RMiefDd3tMGAoZPHDfhy1Zk351dmG2cuGNAmFh9ApBspLmzymEnuN",
  "key22": "4FcmvhdipYBNXLdxAXuRfeEd3Bv7TLPwwnZHBDA1FPugExdRSPEUHBYu3iQwhy51Di8n7YTJYaJ3qEBrXsW6JGdy",
  "key23": "59omK1QjWaa5G2LzKkUDK1zkzXBLHa3xpY9nKp4tniWrsBC7i69jzf2gBcqfjr1e1p5BwBdAUbPhym3P9VtaK9dX",
  "key24": "3TeJZqyxmYZhEHWgRjozZTtQqeekDAoTkfowAiq7LQzGV9Fck86HcQGvGTM6MbWfTGm3Duerde73m24T1jkiVeS4"
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
