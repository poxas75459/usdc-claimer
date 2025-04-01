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
    "2xS1Q19EJ2eJKNPyJ6ZbbQEPeE8FANs2SmAcqfPK5dDo833xvtPyuKmTHbWg5BcLEPZnAZKB9uLrBA42ta4MXuEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z8K9CRVs3zPUpePvrW7cac3L3TxvEzHUom4v63PyyeBDfZywAgBB998Ks69FwdJn4un8v5zJsLCFBQEoUBQMoXG",
  "key1": "3cVKGqZoN3LDorqfT4EoTjZPJpkM9bGXGb9mgkdYEoDRWPSoaCU4vJcSsZF3aVsHXJLtK65Gg6DGB5BDHdvLk57P",
  "key2": "4XoqPW2YWJnwVtxCQVBR76cVRzSbt3kHTm2xLzxFjFaZsrsDbDjePRYa7V6txsP5UFJR9y1WS6FqJJRK5jXPyUJG",
  "key3": "4X1biWcp3PiYL1wHbArA9ZrAmG47w26qjUuEZw4pC58XDGriA4GDcYoXCdL7ZamNYQYDAx62NdsegR9gFUfopFLw",
  "key4": "3wJ9jpffJ9yDLY63Nc42JiNzFrVUZHDFCBAg7zguaaWbWZncVHieRK6dYNrjM5P85WRdgoxRX47Q4bx3kBS11bZf",
  "key5": "5VyzvNv7ALZSMVz6Hu27NJZBVHYNR9tEy3cPgXdjQbXydUJAHg22UqVsdniuwSafa8Uw1X2knt4Ai5N1d4FHg16A",
  "key6": "2KNRPRdXxtbFS2jBr1NpFcuaS8r3GBazc2XWqee6m5iiSrY4QPnYD5A37JnkPdx3YjV1wThkrAXALnLUsRhUYfT2",
  "key7": "UC5qPFUa22TQ7zHkcFf55QKWmWPEZ3a7GdSmGarVQQ9k7BfdgHVghgMroCDVxzdLpZyJaKcnzE9MFUZf8j6UKyG",
  "key8": "2aac4R9BeNLzMPp8hFNghGZWV8Fxr2RYLZywQPpigCXpYGh6KEsN5mfxa11PUPe6zC8EdeWihH1wbLkn6PMxxA7U",
  "key9": "GbcLaHHkYgZ73BFH7cGkGsFkpL55ha6ajUqVboAPMQBRyE7SFdqqHDNDNq4AXDmVPUavZbhqCzSJwE7H1bAHU6s",
  "key10": "5mM4SAC7nU8nt67VZMSxYvqXf5q6jnMogfX8LMUetcMjJVp8SBgTDSHqPWzQp3TzJMJQy8xsP9RYitcvQNZ2U74j",
  "key11": "5wBVPxYcaZBFELmpP8eKDJSURVErQ5VBGofQu85XREav8iNePLMH2pFgwehM4rri4dxrZxVjdoBqT6j6i1b32nw9",
  "key12": "xq4jdA1187BEqUVVnczfPMhrLgsx67cmZosw2iEW1roYwPRqXxQWUnje71pVi2BVhUcbvBC13DodjWWmF8FPa69",
  "key13": "24ViiH4zsgWtQj3DWwFDqsdADSmZ5WmCjH2VrLyeUuNMoRsSwQ3nfwyyxaEurFYCLH8oRmY1RnnD25kJ1m1RpNwh",
  "key14": "QaeZk2L176Y1AcBRtyVb2FpfZGvyLen9hnwcLA9THtXYiNhRp8NRfKTZkws7TArHQLeLaR7YfdgvCKEwWhwQ1Gb",
  "key15": "3mWNCEDtmnSueq38mtjUNUEoYnDZSZn9aXM5dZ41CcuPktKtkr71ofH25oQ2ixBMCQ4AM1tVQwFqwUXbccZesdCz",
  "key16": "4ng2eUMa27uQohEejodE5dqR3Foym7VXhdQMfoWAsue7syGVBEJVSh9DkV2k5vqVRwVbvpXWt4ZsswqV3nUt8TLj",
  "key17": "5FNTm6Q2syTC8kCBJainHzxUNUFcvr5zZJhLyc5Poxdjg9KnzM2rWyurwSUJxRnqvy4zsHivXrBweyFtGWNAJpx6",
  "key18": "PQvbY9knTpfdYvvCrzChCboWf4UbLi1kZ374gf47wbSRkPdjwGrJgAaWCP2pwPm1aGviicefDnjGmVVmNwtvgJW",
  "key19": "4Efh7VZsRdr3kMS8A6fmZ1BrfQ9L8oZ2HZtGitmEkbrEmM11Pv2NzARUMdm8GkNSbwtknDVPHWUqTs6uz9dvFEsm",
  "key20": "215v3QXYhCbU7mmf1XPPYuUmD2RyVXH616nYbtVGMHXPVSF8JURY5xpGWQ5aqyNyVtQ5TKJvQSK5CwYWsanBG4zD",
  "key21": "5khQY9eC8ezp5FcoDtZzM42PoLof8JUTojyk2s6EtxpJH3MkTA5A8JuMdNxTakMqkaLCDtLiD4r6aRpNUNC6dZHZ",
  "key22": "5vCaVf8nUnYs7G7JcDjRRMeWtxmdHTTMo5THhQkfVminj1xChxwod8RE1Lhmr7eCqozt8wF6AfKhy3YZg7rt249r",
  "key23": "5XPjaZqYWDYU3VwzAuhxjctSNR8wxLUHHcwqUpwh4naR7Num3ix1t4fcLKJRWP1c5wnWgzrS3Z11bsTMRgn3B2WP",
  "key24": "4i1PdZE7kjmmATF99gAPCpYgpm1PmdcrwcYgBiwDARS8zsjLh7mgBx33ApbR9c8FnL3hNLMAa1iYGTkgUNfbSoS2",
  "key25": "31SHuXy94sDdz7AZbLJmTmbbTrXDZQMQjdEptMwbmn31vFc9LGSbHkQN2mx1zJAk3VbVTzWX67KkNpnjNKrkUZnq",
  "key26": "3NNMwuum4LdwD8rCqffBcbNJ117kSR4Meoh5YEk8EWJqUQtEQVdYQRja2AcktEvWvaCWMBq7k1rHnUz6MuWKUQZQ",
  "key27": "4rRUCE3J38PNuj5KjckAQWWzA5yCphFSkYR12nbJTunBUR4WXb63LdEt2T9ypSquWgvUBYbbNYoLEds5mtfzZZW9"
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
