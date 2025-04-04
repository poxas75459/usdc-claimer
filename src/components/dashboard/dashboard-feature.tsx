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
    "5E6PNfvXBX1uxJs6JQRc7MgAQL6y4wN8dmo3JqLBcN6BMBiio57w9yLJNBynBbb7Tn9383Kni25uYKpitoTixPXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hKnDK2DrHrBdf828yMMbEFPKLAkXxsJuxCwhinWwSEwgqSJ7v8YdUotzqT2T6pj3efLPpZugjTXhWPyLeGyW9bw",
  "key1": "4pxWNyLHzNsSjbmFXVvs977h1vheYJiWG1VXppt31dpmKuoKCgRmnit1WL17wfpZxVpLkAT94RKbptsJB4uXs517",
  "key2": "RyuC6wAgF7QxRfcF3NqeZWPGbeQFemjDMBdk2G7MyFp6dFBoAm3UYCaMLoQQ8Lf7kmmZxpLqprgPQHKAho8wg19",
  "key3": "335N2rQn1M9zmQD4N5MgCYBbGRftwLBRRMZMWoeHj3YxwuhLWw9eJiGdzsJkiVbFYzo981LkZgwvx2YWRm4wxAdj",
  "key4": "3tp5WwBX97Rd2VcQR69bVqYe7Am5v1mtTTGJE7kAwKGa71k9u9We2MQmqd29srcJ4W8p4aoYne9LUibLtc9UFw38",
  "key5": "3DNJLKbgaYCL2vs8EyCceX9GtMSDjqLevd11dwLbkEJBpjSKcLnUQdjcSedo9CKSod9L5emELemWM3vXp6QrP2cc",
  "key6": "21VtzumrA742it2M86qSee4PzHaANnHwKXFHsNQniGnqpCev9Gzb3p3LE6FWLWEZwbnXnn8pGytm8V3JJX13bkd3",
  "key7": "5KctYTfndD3otF3Xe2EfgpQB3nkNptYxkZyd8upyQKAa5cpPU8nUsEXx5c7MSP7L9A7o6yhb1AZvP6MLJ4AF93wr",
  "key8": "2rfqSpzYtQJ1Wr6Prwp1nqQUyENqH64N79JmH7fKeqhqSm2yhzKdDFLRbe7F54vzr1u2YqQNkLGHKi2iLkncDNXr",
  "key9": "AaKY2s9Yb9rBsSrGcLWAFus53SVuABAKMcB27TRUULoSjhbq2K1PpuhfoQpigDpAYhkzjg6umSM9jVTWNyaW6xN",
  "key10": "4M2B6c3ehKZiwNHBWC1kYKbwADkMPEDLLB6eL31b6Nd8PC6MtGRthiDsqQZrLmKvVVPtq1dFM8wnnNLyg85P3Mxd",
  "key11": "5QY2EhzSoEyBrfQvxfZZBXFbncsCG9P7a71ePKqKkeBcFxSTkUBi24U5CkcDugPZdZ2YSNBnvugeEARNSY3Asc3V",
  "key12": "SpxNLdKn3yJASht9aWPrxQc8dEPjibsZj5LkrfyaqWCTY2Ht5tK21ne7W9EyKtuqfVcfb25BfACxLp13cS4ByXu",
  "key13": "5zjupGKMCd7RNNwnjzwogL61oXCmDfLkn5fhDGSX1jkxbSQBhd9cSGQfzsQ81HDTN2ZNJkMbWTtH3mLLt3LaDvyu",
  "key14": "5Q4o4TGxs8RRVxwqcsqJTNrBx6Yd9Z34QgZQBVcaozQM1W26BCisYMSAxAS1eE8HpkBCQerESmvtUsqC6dLWSySa",
  "key15": "5b5u3najV5Ydha8ZfiG2pmii6BWuZntknk8wmQWEJjhsXJASVXUdxZ1WRtkNmKCqbn2FASssuCHZwrnf3YbDfBEV",
  "key16": "2d2ckeyQmPN4X81Mbu1uEfs6PhpwJeup3tRhmZVBneTj6MsQ19YG3cCHzyGeRpMrCqruJhH4ynLFKU4hBBTH4M3y",
  "key17": "5TUmJq6apg4PPCBznYdUDFw5MTeTniLjQdMgTT5Twonk74zmEMjU97TdBteHayP3ihwfYwboayxWAsmzX3wFwWy",
  "key18": "53XAD1uoc9PHUdkRbU1wb9W3XGjKgFGHrD4Za715PynbLv24tKNZkSnGCnTfrdnopbC5A2cwkRinS3avFhuZ7z7Z",
  "key19": "44WbEa1ykY9dSy49MjFtGv3qaQStBVyDo6BHb3TYHj2QgqHz3AzXQeatPouJdhYJ158RcrQcooKRKfFAXc5NTTz7",
  "key20": "4C2Qq4wqNyrxeXpzLw7mFbYLbNpdWv1DWaLXjE7w3PJaT6mcSa3uCEGRmeY9o2EeDxqByVyxGNuYC4EGkrwN8okn",
  "key21": "5e17SdNMw1VRzjiiKLY3xhVrJeDVeYW6pubXUZy2tz1b9vypu2FuySrjFHiNpGpTrWXSSnZka7dAcCygRBsYokRv",
  "key22": "7GSF7nvxnYg8nmtgPfyWTbxsiwraoohXnbR1h3tRf9QU1LF5sPf2GMydYHi7YzvbcV3mijwHrwaNCc7QM9dehog",
  "key23": "2jYmYfrSkyYdMgKQYgj9qjxicXswfpgd6wzWAfQxgNQmmxxxiEX9q9YhEUwmjGUhexWxiT2mton8q9hj4dHFkVP3",
  "key24": "2W9ZDyrmsv57qSUNYs7Sm8dFqNqf4QfhgoqgXqfSBSJUbjMnhD5oHsZZixhaFNf6kXxxLfSKn428WHread1zE2RQ",
  "key25": "5nM4GjWntVEx9E45TpEJs165pyqMyKEVDcErcUDusRj3knupQgTZmJWz4zQhwNetQvdXe6pH31iAma9bYGJkYbuN",
  "key26": "2ynBAqkcpaBBrc3N28BhnD6cyT2pajHjieXiYuaQcXGx4o8GpVyFCofmo2zW5gHzoCr2ACzr8tjAsKZGG7yA83jv",
  "key27": "5KXWG1dbaos8DJsVWMS7CaUqdvEbhtn2gsLa7yTDAyXevTbEfuPwp77iiW6Z8STiNkSA47wVaHqBeZt68iewXXUj"
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
