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
    "2rT8qVDuY8prYe9gWmNujSmRNtMvnWgY9KTyCFcJWb1FNSTwUrXYvR3SMKBncWyRHTc5y6w3HXnS2BJ6d4E9Mvnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PSMcry7PTvsKutAejNNnHXu2Uw1ZrXgb2sDYdfY1JMmnyPREAqdfDvT3wZnuxJK3F6r7WTBBXXedatWRFYQY2Sr",
  "key1": "5L3dYyFcJ7Qu7X1QUayKCVoLrYpivvEHqnvLyaA6Yegnqbse2NDhwBUBM7muETNMDbSyvFSJcJLAGAjd3jX49ScV",
  "key2": "3e2jLdYJR5C2k9kEzScd2iC6LxDDqUsANShKKtFRJ9mDXECUoLvuATPZ595uASXzSLZknxwyUMsLjLDouCKkc2zR",
  "key3": "4C8zubcHTkAycg3K9kxYf7sFP5j17N8H33ubhvCuWxuwHYis2dqdLU9bQD6ZUJMh5gy8uNpMk85xWymiXBGYBoXs",
  "key4": "2sCbMNCs4gQRPapym8roJ8vgeKhnhpXeVPwmhrXk82yAqofuDvNvcLkMX57H8SDPaaanACfM51XYuyDwpNKhidFU",
  "key5": "3S7Wb8b1gCxXQQuj3Y1XHccVQBddncD9Kyp1ZymDVzSBLR9C3YnxANt6oZzUJiD8omhL23YibL43oKVE3zX9Kjkf",
  "key6": "4vjXEZq6eUr5aaau5jcjhEMjHFW4cdLE38o7x6NyEC5nHLqei4a8tG6C1xZ33Z2cTKBvD2psZicC93iHGrnHLqcs",
  "key7": "T67Eivj46o1AwM9G1sqZXuf3RpJ9A2frU6f6kAexUu3n5J3aAWf53YbZAsv8Hnd2K8rZi6guvdxM8KZ4BP5gEiZ",
  "key8": "5RnuanrMnxVWFUXv73hKLpxe68pXNdHGhsuXQRtDBTzKvegZTVXGULrDYBd18JLPoxiMD5x1AycsykvSdDYUzgtP",
  "key9": "5MeU3hvSFJQGaLgdVzxZiFtjLcPMs17QM2VgNhQDaP3Ymbx2qE3t1ujkci4EQMKwZsLN3Kn9vhHvaLCN1jHcd9WE",
  "key10": "2PhitnDbpqcju1Vc2K2GNQLs96NBLxUE53taCccAMmUxQQ4XuneykJiKCe9DGyLP47Cda41rweUjccnCtT5GuDpZ",
  "key11": "HqqNkTd44DEwgLhnAEGcscY6NdjEJxPPUTwrxoam4mWEk6NAYBMVURpYTLe3HAViLwN7yXstLMvfc4yeLE4CmVc",
  "key12": "3LmHPzKMfJrw34jRixoxNc5RiiR96xcSQRXG4LX9yk8mfDyndVKMw2bMMDwBbd7PNdTKJfNnRqBCheG5pU6VqFLY",
  "key13": "2sL2e8gfnws3GP3mp531RV5S3cdUk8g2gvBra9hbeFBSEmd3gi8yYjFAHkvwZRCUiN7hxYRYaW1jNuugmEK9R1n",
  "key14": "3VmyuDKcFAmZHbnZNHqecQyWHnr2xtYp1UjYHVThYe4sjbCbZ23KnhmzmgQtnVUjbjdRvG17ViAE21ayEYtAfpGT",
  "key15": "2Q6EpG4ZqLy2g6aaEWubP9wsjYAT7z8ct5kY12hMxX1Ugavj5vZaBw5LYN9NpFR69bi6P1DZxmV9oF4WehUZbkWw",
  "key16": "4Vd5bgkTEc7mB9SB6tdbpg149AvkvugYeTfz3MH21nCFvdaty7nLRN7ob5Jd2UQMWZwGNZJGnDtjpK5DEhL7mRVr",
  "key17": "xPzkfPiCEMs6eY1WPkrJfpLMXK6psF6AXmnq8EJsAZfPVWo4dBFisdzCiDMgYyWUdmZHw8F23XxXDigWxNoebLM",
  "key18": "2Zzj7ZsPnxDGDMZwH98H5Z2R1AfGAWzBdVUDWkwp3EsZxiFNH5XzmM2g1HtrpG6cevfDvZ5sL8vyJWgg1mw3a2S5",
  "key19": "RrFEEnNGetJXPrbWwpP52BTeviwcvUGpTb6kgSNzsKo2eTXr3MiHkLGqfrtnYeJhq1twb5entR3TpywSZUtC76Z",
  "key20": "5Nq7g8vZKAJks83G6RtCYSGreRbSagkfcZJKeXkxQQJUFxybeeNRGqGRKNpWrQTriAoDVmh71TrwFYCMHP9QjRKV",
  "key21": "3gqoimKKNWYyPYiwxf8Mgum1zpH4rkFAjTw1Y6CC3y1NzVvMUSF8ZWaeEXR736eitAeM5jrLVcxn9pPJSmdvpwkH",
  "key22": "2N9zrTdDSb5m331Cjny9ueV13HDJGNpU1vPQEda4bVz6d5raL5PaGsjV3zfbTGXPcLE9q1rhYPGUrvF17Mt2fxJx",
  "key23": "4QJaXBs2PFD1Mp1gmWx4yfKjuYYuR2YzncGyNUmAhLUnQYqq7UKNnSsmSMg5zqrY4R3tGCHVaWibRYSjZTDR3NWD",
  "key24": "5UAdVAJPQi9xKXUXJtpR8sM6YM1kuk62eXhZBhpY3ipMoW3isRx5oTRMPgZue76TKHYaaH1TZbTnT5GPvNrRBoXA",
  "key25": "4baNrnyM2AYRjKVN4Xga7c1hT7phavMVddR3amGpQRCK4veqZ55stjDZAzV69X4mzgk6HHz5Yh9AvJnS9trcTZQy",
  "key26": "ZaH9N1N7FDXkDkJAQX4u1znjgtPJJrPbvpQSAGFmDaidywkqDPqiuRTCoTCyRTSywzjtZsZdHw189xf5sn1MrkU",
  "key27": "3EPTrgGC1sakoGWJLRpoxZc14pZuJfiarDcQW4NZW1y2h8wXtH2HHfrE1P7ktno4Fo32NL5jfPMK8aDQCe2xQFM9",
  "key28": "4LnfxVRr2abUpcME4g8gDhaVYihR35Z8tVb2ALa5eRFeLj8sKqRQ1wAntZ7HSnzyxy7xaXX83yKAA3gNhiYLG38X",
  "key29": "37mhFFiby9rmDS68gw9WpBe8aTuMXrR7w2TyoXV6usVpXmdVnSpRCEmhguJdaECwqLq57yN7vmCCUxkN43jNFhvU",
  "key30": "25ojMs13URaZqgV2N2eY6jLRDPjF1ejfSGpRfUiRQPcSimjDicmbdTo4GTQ9sQ2V9eQemQjUJa7QyY1njBg1EMUL"
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
