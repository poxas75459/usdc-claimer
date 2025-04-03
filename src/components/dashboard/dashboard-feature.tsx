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
    "5CvDRYVfF6JqJvLmXaQp2qajaksxpos3xiqRJMp4gcoEhKqQiSUcbU2ZNJMXwx63A8EBrjMag9DSXr27JGinDkV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J8C6ynTqU4J8avbpsPLAc2NiZS9VticDR7JCQhtTj9L8TPJMcCkxCEVG6g9EQdfBeonT9coHPnz4oCSE9Gt2dHA",
  "key1": "5SW8PSMZ8NwndusEtdN1EzTzz24wE2LWKLGyCVqJy4Wt2LYoa1toDVm1qNSHF81vVBcQF9D3j5arnJuDGa67vNy9",
  "key2": "GDYKt1XuJyTCSomCU8KhZ9WEbLFeKvv6ztV3HUmkhMUXAYBm5jo8QbyaVabdhijw7CNbP4HSPwxtvmUKD2t3PCD",
  "key3": "2nrgRCowkrECzC66F749mh3CdCtGU1TXbXyiGCCWAj6u223N2pkaJA7vMQDnUaiwwVRpb5CpC7sguMPrtbX17R2H",
  "key4": "3qDKPPoRhSTVkdkcM6JRCQkbX1dpiwBB8pu6eie4V7pdp5BpfkmGcLFz36zx794ozuEGZJSXyex8WhxVVTD4nU5n",
  "key5": "2CnTLVBajM2R7D2jPHe958YAuMumKzGTicQofq8nPuxwvtpqy27kCh5MxY9MAdytEXYQmirPLb2tYHnuVJx6QxnG",
  "key6": "3z4eskZGT2isghBUmhkGc9Ka6c4pJeYGeGH1vVCyjnPxFGKNgdoeDQSx2u9FCDcGr5KBtXsCfJUuDGEoNe1ESyRs",
  "key7": "4CmzB72uApPPwq2TLBpS4TruewJqfnKHCYUJKG4TNMcqRaHinv8UZRCtVjG311wGaw5QapT2iD9MQFTqYhYzeufv",
  "key8": "54TNJViwJcfLKDUnXX6pmtYMXPsJp3o6FLKEsHZNrgAyu6rY1kvVuTxf3b2KokFn2SXmtLsL6JydANLtWv4gN1Tt",
  "key9": "5qotPG2d2wpbf9VGRD7U6oyH6pXfGiXdzL65gu6pAQ1B4b2MYF4bH217zTBAMcDvMvG57EWvmRk7pX7sxrnbzF9d",
  "key10": "3daEN5qR1NrHcrK7NdnN2947Gw1twek8PC9LQqKxH3c7p7NKwYsG2z5obLGPSdxM7SnvWQafmXJFEz1HPBCYoR5Q",
  "key11": "4ddEus33Dv59jxsS2Q31KuDTaVpF3XiMdp84TW3Vnxoo5zFZSUpGMEvDskeuDwmcuY54gQMKoiXWktsgwdg8qsss",
  "key12": "5FpZeqnhRipSjhaD1efd6wLcMgZpHe57mVcY3aqBaC7zZLyvi3UDWrrJfr7xeR7fAEsdeSdcmUQrZ1W4iwA4oVeH",
  "key13": "5KofBxJt8wZ8LuzCvme1s2NUaxchQA9c9DMVknKN6EMycPag2mGJssJ5hr8DAx4wSYoeumQvPbp7c9eLYs7WSFx4",
  "key14": "3UcvJazPKvZvJH8QSPg7RMu2hFmRy4DWFsb2nUyPriZMzW2nZwoKUFo2NfAPL2m7PMDAUvdFhyDfVA76iPeowLoo",
  "key15": "4npNUyxQmnkQLjtjehvajCsudaD6uSjJg7JFQ2e2uz6SpqvRz6kVwAam422EiZkbkjycWaEBP2zigpUCWhqzwe7e",
  "key16": "Cjf9YtEP9Go3Cu8MhnvmsrkgvH351MeEDCQx4UTP75PX3EWFqZvS9pJijZgE4fzzKcirLuTkdcxA9WNng1n6Eo2",
  "key17": "4R2vnuqdvMaYVwPhcnexyJa6v62i3fW8MvaYGLVy5rJ67zSvQVb76C9sgL9Ls7v5yhwjk9nsiSpS2yVr1V2AzZfc",
  "key18": "3KTXhFch2ezVk6fFaBPdfjEUsYmDZv3QeDeSicfGHRtezksp23Y8tJyhZbkpQqX5JEnyi6SXUFDBmA2dmATf9XCU",
  "key19": "5WzfMMVhXN5B56bqAYzAzRAuyxYox366M6teTMwq5o3oDNcuLK8iAi4cGU3z4kRHh8i2cn18hiYpeTyPfUrAejSc",
  "key20": "5qJ2aEGnmX3bR2u9v3Mi2dRbF8edy9PFN2D7ffJnVPYmAwXQotRhWy5D5QHmw3Kgdx2TWebfWma742X3isX8dgb7",
  "key21": "5DGnokZCbwizTevSBc1aRNo6bKANpjr6khxXMHjhLGE8d5SAQsn9qrYWuDNJS5gDi4NTwg22vCgfBi89o7SgC2Ky",
  "key22": "4QAwww6vskyGFDnKY6ctKPoYsBY2GhtHgKZR64S9c9EYkZCu7va5izZ8HaVh4t7BeH3C1MPJde6sN1gF8nCNXHhs",
  "key23": "2dgV7EVuP94jzd9gVLPmorPcQTviCqUi8HatgYB7mQ8uAryzfG8BsozSicWsz7T9a75RVFA3YuA2nkqnzesUYzMd",
  "key24": "4S2BpQnQ6AtqpMn1nKfeJaoG1L6gxUFf4NwMzv5Pvf7WmpJH6bwvpnE9BGiZNSkTJ5SYdo6MLRogAufBdDjFjaLr",
  "key25": "KRsT1XvvUsPMo1VB8ZYWPZkapaCFJEw8stXg2fTGx3amX66cnqVAfp7arwsLcwMu2Bwh7DT3MT2xkiPV46Y8TYj",
  "key26": "vBRgoMq8xo9Euy3fJVNGMxSinZZuXqczWwmK8ujr8ee68CLkT9c58ef3VbHhNoAGKjYTFpK8SYLrdhuAEvo6CVM",
  "key27": "2qafk8oAp2jBp2LjGAtbt5nJdxK7CVWGgnhcUuwqR1wZEdWhct7RRpu3Bj3vKTzJYKExan4Sw1TPup1qsYX7ZGg9",
  "key28": "MWw73T4N99NgXPyg3hXkWutvAFAJFwwxX58MJPQLyHnJjRmK4rsUfem9SHMghDXyq7wYzXiuGPA2XumPpNizWwf",
  "key29": "289fdpWyiRjMEyVwVr7UufNbqot9YShpNGbcVh4wjjXma2MRbtadcKCYgqAac5aNjDjoQJ9rzXm8EDXgyBUz1yqR",
  "key30": "4j5pJ9iokhJkFXAEaSibn9Lc8KVaStVw9LFXUX6WuSrma3iFETFScrYHwZqUkTMZUbdV2YHGfPyhJ3r47e4j9Rge",
  "key31": "5gTi6J9pfzChkmqERqfHwmreWASDLFf9LzoZ3mj76AyWgprDwfbgSDUZeDo7v7ezuxCmePqGDjpKzR6qpgEbQ3r1",
  "key32": "5VaNwGPUmRihHEpCGXwuUt5Bu6aKzW3BkZSGRTKkzWF3Foum7b1zoPQ9B38ciiz6T6Nw49du9ZpGXArEJaLEgx3r",
  "key33": "4f6vMCDSkxfmmYw5Qqn2xNxs3LbBJE3H9UBRLbGnqBzV5YrvYzFogCJMZnBwq2iFyVc5MntrXRqTDFJcEHaTMgCf",
  "key34": "29NnKFKxNNwuTw44E8K5awyxF3JyDNL1vpbSwzU9xhM3GSYJ6gdoAYUgmkCsQ431RKdHLoTR54sdxCWzQNdNqYup"
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
