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
    "WDyzMwrE2Ff5g4zev6F7884aYv6G4pHsMdgVsJ7Q228fKEeDXjLPjRDy1iyDMzCngW7Ey21LHFpV94UDacc1Qda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KYycjR3rYhvVLePzvcZixmcAxgeJn1J8mAgUXktEXUiRbaHR3Lb4Ri4Ck4BWzTUJiYGS1to93dU85miWCy7zgJG",
  "key1": "3BNVhhquKZDyrQmePRDW1k3H2dRfpE7QXgLKRoQfXrW69arLg65yFBAa3YkcdQ3hmHQv9QSLUmq4SFxNre5CPGv5",
  "key2": "2GseRqircdxcJ9NzYryxgiZXmEGiL5Z2gEfvFCA9gZbc5c5PG7ntHEwjpavFFJpMSgnR4QeBpqPk3go3xiSYfnGX",
  "key3": "3uHmSkSuLH8nHeut9GKTMCC1eNJQHhFQcJ96sMYdg2CwrDXeRRonNW2jYtYaDQkF72h8GDWmEgJGijSGMVESN7NN",
  "key4": "4SLHGWY43rkiipiadse77TNGhRDJzbPCgsMVgmkf33QUM93VXuVX7mvqXSrYkRXJ23yc99rcusV7f8gZbAmFMXYB",
  "key5": "xC1ZPn1zEM4oq4gzfM8jRxq6FgRvCw9zRosBxhew1LPZuWB1AjFHJHZXQmBGvufnQRnNTnbGUTeqBYp3G8absRF",
  "key6": "iTMZEZiiuxfaopqgAC4ARVwzeBePM5xEzuXrPQ2AnBuzGnko425GVAJi6TNTkUeH7DCQ6cTojDgor6ZKfkmWxqq",
  "key7": "5aWpyuD48Ruu4YUSQkwLJHtrsWQNpeu1T5DP2jfGviT75YFMXRhjL4V3wmgC9N95CFZQAnjosF13kdzcGDmsJNux",
  "key8": "5iBM2C7D9ohz1VywFUgPiZprz3mm6zQyuEnNjRa3Sg4DkjSPcpvM2S6vdxqQrd31Cz4AcsucjNaavYi3dGEf3uBC",
  "key9": "s5axNTXB97BZbFh8c749Cir7JscKFgq3ju7ndXgGQVrxzEwbdTADoFBqBEFcpPR5JYwT5khmWPo8eXcPGgXFm6G",
  "key10": "4uCmfoPmQoUBFcCp9G3MBw7yFwHBdjW9ntoYJfj1wNaqbhJ9q4xVv5YFDsB1QcXAXrZTJit8D5yCweqJJyPQA2oo",
  "key11": "2xa87kt9QXJrYM6yaKUFnavHMvwYDmFP23QkYVAxtytjtivcC2RyfE2bT4jebD4oiK1MERfPYn5vLQfe52rhjZ3a",
  "key12": "3C48Rr34Mskmr3iBvhXM6CixdsjDpXG31qu9q1R7rLDUHz7sTPasKFE9Aa9oqombrZyjihJ21nQcQeYkjHtNJG75",
  "key13": "3KD8BWBSbiEhtGQoExLoieL11jX8urBBkyqjRzvTupRPveZUaXnSVWLUSuTRzeVsa9GyQWHdb5MBGiFVkZe6kFjf",
  "key14": "3rs9kqVPLe6tN869r5pPNUjBCfFXtFP6VujvX9xDLYVv5kLtcFXWMFn987FcWvUnW1a7bWz73C1CXMeKv4tDbj8o",
  "key15": "38urJwApUvLFQaXau1eXrZgdk99oxRSA8rFL5oJcm8AK8ivYarahuCxdVDPBrtbvCNPrUHLuhoD7X2QBTt9x42SH",
  "key16": "4VKbEvNrFXAZBG68BZgRccE31oFWPmNMkezGEK421BY5noXGUwopuXTreUnVdFX75crumYPPGYYTvwtZCkuSong3",
  "key17": "35rxJaDYr18wvEdH1rVpUF5SMAxMWy3aYGXisUMwiohvSTcMtpoNAK6hMG6Ai8WojMxerQ5CVAeeVdBuGbeU2Kyt",
  "key18": "5NSU61HYycVJHGw9wggxCTjcE8GrdEPiKu1q3AgVrKKhJGY2QyT8KZyj3DpC8csMRkT4KcEw7SAUze6BNZFkHrqa",
  "key19": "286QrYnf3E6qCDuwUME2Uw5VqvEehuoHXbjtMnLttdMtYxzsH3tySsbJ8mrGf2iaQ369j1QZRJ4oQQF5HWcTUmYH",
  "key20": "2Z8HYTHzYa2rdDweqesuPPyp5RjVMBjSMt2xDNTfc5QTMf9WDxUXkHcRiaRdDvSMtcBtgg1D4yeuUxWMwLLCi2MZ",
  "key21": "5VnhrhUaCCjiDkNbvCuGzMA3mWSAqaajyuBuo4qnHEjTSKm6N6VsHwkXRrqBLiRokgoahyKx5ut1NVjyFJUGaaWK",
  "key22": "3fmX7cbfu7XgXef1EEDuttWkPFBKuQHXLbnyizoECrjoscBk267FWz4ejgCd5CSjcaCkYWMkQVGQ92reLXNXFtqi",
  "key23": "2bSrHVH7DY4f87A7LMigVXmxMdZKS57WN2HXUinPiidZWXWfMMzTriefu1xvFVDkXc5hY7wZSZ2Z7qr89fYjNc9R",
  "key24": "xcMoSs3StfSA4Z6Dri5eqPxPgunkHE1U67qF21sGEd5skXa2d8dP5Qz98vV1eZiFaMKNyFWTafXMmaiVMFnYz5F",
  "key25": "3PsVYbhWVfUQdWbXgBHJuvXPw6TWKaPyfSydkATBL4yDNyhqJMBLsEN6vctC9fPDp7p8qucywA4Sr9Jj8sEs8YfK",
  "key26": "4FnrPwrY3t5WtyE6vNMQKV3Jsyriia3qC2iWUE9k5FfyKBuG3sbnX8z7ePrUfufTr83HkDgGWffeTnYdvFESBQtA",
  "key27": "5iQK7VgwBpyRTwyeC6gfuTBHGn8nA5YU55AKD4BXH3cPxBXHVAroZjHkBr3Mgha4hktHgHjEkN28h3HPxYXWJmGV",
  "key28": "2mpWRc9avs4RwJreVnEcS3KgGburZLTExnWhkbXUbAKj43XeuyK8wUeaDLLR4nTA1xs6Znq6bBetbWDho8JRdddB",
  "key29": "2bgY3n3idHwkdifKZqAxq4hnE7urSMEYUXhtgLqkJfHnShPh62dSLEaacTwCaBaqRQsu82XhZnFnCXwjDULKEUZw",
  "key30": "hDVhh3TsdgpPNas8h5Park1vry93SfgEyP5nbwGojGo8zvtAksdynTxQfF9tAcTjCNed6yDMZbd1x1yJHgwWqW7",
  "key31": "xyob8WGwAUc6qd1Nw2hF1x7honfy2Sr7Jt5PPavveqanmi48GTX2eiUaDnfHgrWwQHYpqZrfybrc1T2hwXtReyP",
  "key32": "2ziEXxTQe7RNgR1byWyJ3JMx3SNrFbEXDyru416hT3qrtPzJmc47AYaFumDxnJzBHg1rD9MbGLZpnNNWxeYxckaH",
  "key33": "3zuGkuDcmhWnSFw7oiPCKntx72sxaw3VkRenvcYgdX9znBZQZHPXibkVTzpaUY5woe3cCx3AQTSVSKsoihSwsM6g",
  "key34": "523wwN1RuMdtU9FpMf56BYRvQcgrBNvpajUDtWsMx6Xz9axJ8A7B5Xwb5bTYnTkD6w6tcoDhKDogtznM4dWAFiL5"
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
