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
    "3wvcM5CFBRpgdQWZWuHGAX8phKNqqXAWPa6hKKV93NgdDZHmncMGzmcn84bAyjw2HcNoorC7oeMnJajYVzbPmmqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zfzsmnBHEzUDLA12fELAHQLVedph8mqnXd8UC4SuT3Qcxzaqh1fu2uXTJDQqrhbLvTDPuZjCMU7jmMRHCBpRhTq",
  "key1": "5tYhMxy47WbJ6bfw9bhejvc41cZbkbPrw9xuPGnaUQmDuErP4kkoW2a144Lcg3HM7RupGk664Ny1aqADbu1tffBN",
  "key2": "JNuKYAUbANLNpiFbxVKdAdVHNG8hgfRoFZthHjiUwyUjLQZb2DvNmUaUGEEuVqyBpHmFBx5wQM7kzWe5MU2Tz3z",
  "key3": "3KWANqPZus3iqR1oVChaugibQx8mDLt641K5R7boupdtsY1r3YCHrZZeewQUT9sHKbYD6MnVC5rYhXdacjFpuZup",
  "key4": "4Uu51rTRDF2TLDbSKv2Ewpxy7fpZP7mbU5yw8VjT9bNMB4MWdVzAu69yNZjc3DxDPMfsWFrngyEgMMdtJFJqLtPY",
  "key5": "3dWkQ1RL4JuzpQtefPLQhuV4LBvSXgn8NDaScT4Eer8BHWi2BAb9Twnd2q9Q8LZkg3PuJ8paG5hFG2UdHgFPVrNv",
  "key6": "3Rz5M1mv7Vetkf3HKbeHhA8NMDGT7pQUhhoPhkBhBxPoYjQmzQVXGMn8wBaMjKwUdJGMS7q4P1pS1dckSL56NQ3v",
  "key7": "4SkgWqCimc86QruaxeM6XejPAqCCKCTWw49cdhSdsmtB3VM9NqNzNqFgMxETJRF7vGJS2mFgUcSFXNn6DCpyw7xr",
  "key8": "3UBHXqR3j23eS9PYdiNRzEML4ZjfgvG2M7gnub6woqHU9DYMRocSbd2414BBBpFF9hu4ix7qywkQkTdDugCCiRJf",
  "key9": "5mGz2bkVW6saB7GKyox11KoqsoTbBL5VFWgQwYAEwxFheGDsnvM1Fp17JdVqX5bC6ZdXY87dJDbZHot7eZTM5rvN",
  "key10": "4Sd6tGhwQM9CVihPb12qUJishD2g1dp1fHLqDhHNZ3L29n8fGZkoAXA5JCiBgLxH29GBZ6gAu8oMYyULVCFYXot1",
  "key11": "3FQ8JRKFcKJCp8EcTpZo4yTMoVfZFMYNTEm5LuB51sj2oZ8oB6xw2P8dV4LDgFxBbZzB2K8tRjKEWRTdDh41crik",
  "key12": "5iY8oCtsfr1tDJuZM2HyoojkzLJGa4qucMgiNgeDMTYSkKcaVtoGMzRAkkRVkZn7zXftAcaG9PJQ7RnSkfDosnw4",
  "key13": "5U2RvKj2HLh2NWokvGwv5t51jwk5QRjjarHRy4uTgJ6yJoXY5mpKpDu3iMoejmg4nnpV7e2rhx77vp7BLumSLbPq",
  "key14": "4pgmAVytXW4ZTfd9zvzsvsC3fokedxauR6g1e7cY18TnvNdcfkd2TQz948pXkDJMqdGErV9y6wKVs4zxpdxqPPZP",
  "key15": "5yWpSHniVzYXNzhrUqMcSwwwBYMa9kBHxq4b9xHMNQvCQzy6sgBk4zVPEC7j5UsvmeU6pGdZGMyNcVSRWicDfBEC",
  "key16": "3pwi7d6SLeq8gU7oMAnEi1JoGcxu8qy9idvTEbq3WRRnNgJjBG7HPn28Po86entgTLW2eeQnEyVXVyk2We8bnCZy",
  "key17": "5vX1NRF9xCohL6zTW3FFRDoe8pNw28jhMsc1DwQZyAYf36SaxBU3PezSm6mNUtgRW7Seh6bB8rGpvinoHjyY6LYi",
  "key18": "29j2hh7Lu7raKXpt1dPpnuJRDhFyiNg3JsxynwvabSoJvEPXHZJdxFiNkMMRw8bCykaF7rZmgq9jiqrhmWKLboo6",
  "key19": "3L3VXv8XSpKacmZRkWZyjzwAshsv2eJerMevTDDJMhJvpB6KyYY1xXY5zNphqK2ku1787LuCwSmZ49zkrE1Cb7rR",
  "key20": "i2Nv6En2e4oDPQCjFG898f9JtudX6MjW4V1sAkGbiJsQP3FMMtFawwNvxU5Pq4d5y6fK5s4iiB7veE4u8BC5nyR",
  "key21": "5MzFxJCZ1nwa2VW8668t7GVdUhSaLMi1QWdXaZt8bBPZ4N18ggah7c9iznsf2SATRFF2yM24aEvVCALhVsgFBAoJ",
  "key22": "4nnnaHWR1bjW1CZF1wocZqYK38UV8kd85zpt754R3zh1eyQnKL3r2GtTPyP7UfWLKpqXzeujHteHezYGSLNVTRA1",
  "key23": "21E2w9Wk6vz9phjkwuvtU6oMuDTAqcMttU94DnK87rwrzdc4iHMN94EWHx4vVSRZMPr9iWFtGMBEEUvUrKU2rumS",
  "key24": "3k3LLjHNKGTUBe5GtEzuXyoGL2qUz7SrcaTakJtiTZHm3iH7QsxQPtTaMviWnzDBh36R8outGyR9v9xRsgkEvkxd",
  "key25": "4hNvK1kGM86MEDQa9HCacT8v6XL31EX9JERR9rbnCQguuq1XUmyq3QSfMZwintHBj5zfG7Z6Q2ek4NZhkkVUxZNB",
  "key26": "59pMCerbLJdvzQvXvLxboB8Z69qRM91md1FB9akZY15kA2bcWzBCfdP6uZJ6PKtvgHzohPFd5WZh8oYuYL8VBRwE",
  "key27": "3JRYiHCMaDoEPkPQMCeGHaeCUHw5ANoDGo6Mi9YdW97JQCNgNZSBFs2S5aAVsbeWcdH92qh5TfrofPjziRMxGYo1",
  "key28": "2rn5aJYJ9M1efMMcjgEMhyBCjQEd5W6FKzheKva2Ew5AKoZPuoM1ZgUPQ1GW3t3oMDsGNHoYwupXTmJboKxgXkap",
  "key29": "2e4bRrTSW5RNeCXyABYVmLGBDUYiNEpssrCyyfqBRhSEb9ytiuzhzK3mZjfAVCgNgdEcpSHfezBHG7Si6XhzXVQr",
  "key30": "hGDWA1KazXpb5XfZSWo8bhJbphJ5XbD1fVBZp5L1uNQF9bJ6Zngt6guqc1PzsHNtmy7vhPf39fVhhdwDiu5fKZj"
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
