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
    "2nvs6ewVSZYktXzQPoKBwBfM2sSHtgqk7tnfYenWnYobAyzjZGC3XVCkHLQ2Tangayi7GKGypNeQmXoTvYgySU6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sdRZ7XVCcBiNcy2UgAYd3ZHUBR6KNjumttYnj54nZJGWLfJWRM14o3f54fPFs3MHLAPoYes5xJfFSSrxutfjUFD",
  "key1": "4xzSMMCyRHC38JHARdWxGMTeifBnk7yJdjHMbgDsPxjwMzorQiZUAGv6jW46cDP3haeHjxSJp4VDAUsjKnMRrpnf",
  "key2": "Dr7NFK9BnCMCjSoWrTRxKJq6K1Nmppt2wExW8KkQC5PzqzTgUNyJdQpnJFW2LNDfMh8HDE5SLbhMYTyqRX5ML5X",
  "key3": "4VCZjza4P3DqAqzUhgBHrCtTg9Gf1F9xyFpLcFdt7GAJM9rJrabLhqZu2Ea9Ua65aeHyKsrNVUkEBqBSFAH4p2Kg",
  "key4": "37Zy6fcR4nwirhgz1eidUiZKFUVmh3BKQf222eUmbSAedPUcD33XJZyBjoF6mN3xkF3z8ikHx3J6FJpSC4Sxqh77",
  "key5": "4VuiJ4xYADLkA64Pi7aPaHGuWJq3XZvcdAtpKKnajHjrT7BE65ddLzvPBWRyC5Py89UVLBMUzviHNQYHVe36DbFY",
  "key6": "5QexpUtkXgQA6VcR1LY2SLZCdxajdW37m43cMW3jZkNvvVDKvQtNQyWzWXqvqMcJqUmgBSJZxrCmz3KRAeanduFe",
  "key7": "4nSVwU5ZgB2NoSDu9CE1VjxES5VA5QyuciKfojJpWL5yVWPptmKTsJf8zTt4MLmDFeYjdVD2Ch3m2eoGDU8ySCn3",
  "key8": "4pVrMf6w8v3D7ChoLjFkTjYV2ApMNoG26mcZjNrocB1FNM3Mg6gbDWARYQ1M9ELMizrZsTMTcmEdG3rKVt5weJcS",
  "key9": "21EDsnyYi4nQfnnFqW7AsCxmWefp9MoZVWZbaCASQyfmXEyH2Su1hmWV8pWFdkKK9Jvh4k9iVTVsgk1C2QDc9kmc",
  "key10": "4M8i95MoezN7b2a58sGeVdFGBtHAfhtQaqzMLNYfHAeXmjZXGHmkyx8JdisgwEVbGETdpWuEZyKhJTu2M4Gr9nCQ",
  "key11": "35bKJLXoBZJkBTgFVAfQngejQCSUPg8fATtxe437cNCBe4aHCrqMpH1NJhUEAdaYNbAVLntErsiqUvkas1BseHwP",
  "key12": "3GBbo4CvMtukGXR6TUZvRkw7TSifJuhhmgFqh267iN4AN3HBqXZBACo6uotjhZsh9hhpAKdZ64Mz6eRF2M3JCwe5",
  "key13": "2Fnhj8GRk4grHWbMZjEHJtXG76MovWg42U71R9LwuDtj4biwJNnTcRHSZKz9JM962Sri5NpX7HkiSTg5BXi7nGTR",
  "key14": "5Mz8MF4YsvqfpdK1RJCjhKvXvmmEdFL3yKF9ukKJcRBxZuh6aDrAaGKXepkj4gAD4s9pxGTn39NUJjDRSNZptp9s",
  "key15": "3mw9q8iFhSrX7xeKypqJ8KWtNv6y9csB8n1c3zRGKmKCoHqCwuNthtainaJ2zLdqEfL99aYpRkNGdfiMFCPVd4wV",
  "key16": "uvRt4ASiEB9FXwShfwKNU5LcGjr7opcFNzPg36a3SWoC7f1JkQghRyM1dbRPgcbTVduEJpnKam6suYZZjMNSCbw",
  "key17": "4EVLzW5jXC3EFQvWkMyAfuAXcTXeKX4PZvzimLbpawRHT2Fzdp1gLgjJFwz52LoEhCkTC9WZZAJwEpVUqZc6HtYu",
  "key18": "3UxJw5jyKejA4A4noKZpTagXQjxhqQMAZVSDFnkhkzETrMpzNxMsDZnF8wKko9Tb1UHurN1szM19QH7VW4WKSQ4n",
  "key19": "3oLRG3Cp2etsg4bGpG45bWxDGieVciUwVyCd6sf2CnYbJyCbqd5w55r8TjREfjNXG7tPNt123v8SDbGmoNVoiXBa",
  "key20": "EJYwSStprcXxrdhHU1nRpPc7LuhxP5GwPP39WE92sJTcf8RNzLLKJEQwSBeH4ThrvgNeMAkDpFhPA2kzd7BLWQw",
  "key21": "57wmjhc3rGLcL8x343uB96eGprsDkeMwktcuTiP5sny61hubdXL4rPnWLkSdeGZNmGvnyP51bZ6Ys88mkw58Tjdn",
  "key22": "4Jft7GUYWrET5nYAGVCR8B9PbF3cfqmL8Zpm7Qa5KufUXRuxMDWLcVoyHDFx6MGWFUqs4zTUr2NiKnHHfKh352EH",
  "key23": "2iCVnMnNojPZgJ45PE3DfVhrmhEU73PA8a4yTgDJpvfNCc6H2mjm4bxewXj5b547VDeyR5vHAMtXZbgMYnRp458",
  "key24": "3hMKrPxcbvBdciBRcx8CvGanuXrZpMiNotVZNtny5xqwBZQ41CiSkTMKjz4pWxGfkYYEmeGPz75nvZ4r3YCtnDDj",
  "key25": "2dmJHrvkcX5DawtSnzZ52TzNqgZP4f31NmbcSQdS5hcApfCMh7iQH9ZHmvinHQiUrc5L7m6JL9bEx8upLM2X31ox",
  "key26": "4DLFiXc6h82L9hxDBCoWviAGKFiLigWGcCihb374TiTnRH7N9FsmWymxjzaKeaaTL7nYJFFtAkh5aCFwnEhGzkJj",
  "key27": "5fP1etDkSsp62RyrNd2VbDVLuUiMej68pzDE5FKA1db6db5Zg8GPwUngGCJE48JoSR7FLSuRbXQ33DMasVyPbBGG",
  "key28": "2AH4J3NmtzpjpRXrEEpy5TDCLeZ3hyBSGPzXE1UQF4SeeLtCV3HVBf8VW1eK6fVZz5UNdSEakfs4JKHhX1NFzZzv",
  "key29": "2WXXXCuoaeYE5Jj1tesQ1fqHXfTN3Ynock3iL751RnecPhmHeivAuTkE3K2edKiURwiAdNyHiuiq8NuvUJqMdSDU",
  "key30": "3CxzcUPfMkpph3j5xTkCDdxNZptaLCKVzoF3ADafLDiazkBwy8GqiU3Wt1T2eCBQNbnpVN75H6HbiMvu5jjCrLUz",
  "key31": "3nPoixufRJkUqU9d6TC1NeMJTK8zFh9L74cU5sdEiQZ2n6FStFbTodjPWZWRCyWdKgHuUXsNK7rMVyx2v29A1Hj6"
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
