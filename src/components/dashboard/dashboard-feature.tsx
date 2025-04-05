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
    "4Cw3P7HfvGZvmM7CttPaVJuUvSKijQs1iJgANTwx58zF3Hf1L4y64Aki3Ve3oZSvNYrk2nF3BzeX99Qt8ytym2v3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CtNT6Umwi8meAhwKVaTDqCcQFvZAPrHVZoD8UWwErrdh7ayzPR4dLFYa9pPSEo49CxZdcEcCHtNfQPdEpMAtChe",
  "key1": "26UngokNAXGRSGSJb9PvUrQwf9yga5GUt7QNkYWk9rWtadw6tkBNQCx89em2p7t3yziWg8Z6s2oAdZymik4hZdgA",
  "key2": "4uvAgYnpik8WG2h1Z6RCcAwLm1V31z7Zo3pb5EY1cViQE9vNqAvBEy98XHb6j2Qzi9Ev3k9zCQk3yYm3nD2AejPd",
  "key3": "2kGxgZJ7Kez6dfDBw9Ree47Z9fT1Py2ArZBKT7nTyQhMmBczYatbgZ2ciHzih2E6eoL79RGGoa5frPkkYyRYcgnQ",
  "key4": "4pUpB6DhMXjie8WZTvq22UjLaNbPgqmK18MJxErpB1cMBwVcDrrj9QKEYNB9BTe2fNjQ1RDZg2CoKrV5rdzDaZSY",
  "key5": "2SSyQDJ6QFseXVPArhFUPwrpjh4LgwhrazgLedpfqJ7aHX11xQupoyM4bNepUTcpfNFiTVHgyrFVCvKbSqqyiPwM",
  "key6": "LbphAmwpAyQbDKosRkB6Bu8UDLhZocCcpVVUHqsbimd6TPDj9LeADjJiwBwddouBURd926auu3JYjk53dVBzn21",
  "key7": "3dcxdc42gmEAXkSDkoga8HAcie1Enj23L6qy6txK5ZkKVqJ7Zn1rPbFKPNLiaF2HR5GLbagvSKabM3AeSXuyYjHL",
  "key8": "4qxSdC2VkvgpeN671ETemLB4DNX3Rejf72B1Zgp8M7G615yCsd1mYyTaob94twFyjjeWJ2zt12iy8BXpLiX7TeR6",
  "key9": "bMZmqRAeW1qLX44kRkbBUWz25neJ8Z8W3vYpBcJdBme3pse8BpJTkeLctZdayQPrHbnL4X7zjj5t5Jw1Zp6WgRh",
  "key10": "2uQs14j4SCVSzWfL2zcKeFh2R1PcJAA9ThQp7FHi4zhkSjAeCx4zYwc62oeBqyLD5fTF71Gx4gU9TTFAnMo5fUZW",
  "key11": "2wAjJxE9ECb1PtjTbC431tB8VVSmnXKArehs9nVUHCE1GFxfhUZvdnyjFUiYJZpcNHHpYA2VuJ3dDyqCGhsR1zVa",
  "key12": "5nUtTaUyb2yUDaujJSjXopGRVQxHSVAvdZ51YbJ8CR9xEniqWGWpN5SkYN9GwJJbaygFHRZjA6YCFANK1eHdfEzA",
  "key13": "5ZqL8wEri9cn87Fr597ybNhuP3ADXuhzHFseawYHu1D1joiusYiRoh4ZEnRePeeAvCeHNTiQY43GN55Zpxzi9HQz",
  "key14": "3Gkk2zfgifn5G2vyQ6ixoXGQxWfpY6F8XEhVB5sWLtuZe4GwtrajeBA6V8ss7uqnNicoepq6EEoLcYRyB7MEKaLn",
  "key15": "5qaJYsXvrPh8cuJcy7YtRifACuubuAA6wfVUQHB6kbJ1Bv53vxPc1U9nzsFRVEX1xeViq3B8P9GkccbXS36wYR5G",
  "key16": "t4aHBSGs9gMnpCsy6ArA9gKNBVUTtoZ7PwAYFR3f6mu1f4HDyad8X5SrrTgrJ9su5HZYh4Ff3M8RYGcJmDQDxru",
  "key17": "2R51x9oB345HkXoor3SoWp35sJUCHLFW9tzH76GUU3dUFH3sAePdsC7f4KJyJehTYqfPLakWzSFhLA14LbxPk9ng",
  "key18": "3TzrTdWSTmN9yfZrj6Q3wCnAacWDwcHWhJMenvGLpFnU5LRDwHdfWm6fRub37CK65wEGHPuPh9aj7ZCx2hkEDfTa",
  "key19": "43PQJt9FWbF9BPi5e1u7h9Ap8AMbhYDEj5AGoLD5673FdktByufXeKKyXXKjAPT4pPnXraDVUejyovSXyUU1wJsQ",
  "key20": "2ZsidiwcQHKurCoNgpjtLWdJexptfMkwfPk3dp1Daar8xGmYbCBpkrhmMcRG2QBgRPoZob2AbExiNPSRW7Z3ebCB",
  "key21": "3n6c2YMzGiqvCVGpK8RSeMNZivSzoi9EWeUv1Y5XaR7G3m5Tru44cfqtMQQc7fDYy6acAQYYvYvaTW5rZ4LSiGon",
  "key22": "5X1Qt9jK6djFm8ysFwuXfgvi9JY6Vp3gBSifTQKYDJ7rePxHddShVAg83hpiAeNsCMNLfGnnM8eJWSeWcz61c5rk",
  "key23": "3HwNyF295gdBgRPcpWP5MLGK8vfTwj5UPaHR1ouAJkWMvzmPWXDEJT1mSj8Vx96j5GLEybcjJyAMXafz5TezQwMq",
  "key24": "4JpTpuogQqjJYTXiB6bsft4CZavqyTTBbhYqwo8xuBpetACbuCRXfu9B4rNpGkiSwc4uewUaEEpuLumj9PckoW3r",
  "key25": "oV1dqmMucojMw4os17ThKJCDSwjAdHXmBMAi99ZZmZfzVJawgSEYtPBwZhgtnokA8NfP9iat8Aq7ZnhrerTDNYx",
  "key26": "5egPpvaQRn78TmXJ7fuE3cVvcadsMw61LVXtDV6tQCZgfuasyrcC4AEXngAkNTeETD1JSi1ttt6V6bndppCz8rFz",
  "key27": "5YZ3HfaUWCqVnibJjuboCBZ9XikuY4PxK8FsaGLeqvdDWEjGerF1C5PnbiYWKxX33RxB7vChdLXCz4usnKPwDyt1",
  "key28": "357yLA26r6fxpQXLHqThVx8GLUnM4YB1ydrCrGFhaYXbzHwZyKJtGaiTnJ3BZx4zogZdZjgMes1NQhixDP9a9YV9",
  "key29": "5SDqrPEwMXQ33FUvoBKLp2HgEnaH3e4xk2Z4koy8JdUt4cRGpPpjB5iU9chmFg8oLfVocawH8mu57jTUR9RvU3b8",
  "key30": "57HKFzQ19s5nFDLy7CHYnTuF2PNdPvM4KQnhKNezAuXdpCCQsneoEKLpDqrGG4KEad61JnA6vbi4Sao4dRz35GV1",
  "key31": "4ZGAeqfD6LbWsk7QPNAipe4yJJ4f5ed1Ko8pzYmz19XD3hBXRXJTH1Pn87QVVcUSLUPTPpjx7wJRC3yfQ5mUuCyW",
  "key32": "3EHd5xNiqjMNtfjgp3Rrcw23zQ8VXDHdXtJdpovw7rQCBDyBRsoTJjCHEYn4gCaPPs5afzBVDV2A8s2nELsoh5w5",
  "key33": "3cwBRTzDEHCK2uF249mfickC7MyrD2sLojtnChqj3txzmEYQsv6nGgpZAStrUPgNBUhEV6t7hngi92hvKR7C6EZd",
  "key34": "5HsTjzpJpJEp6mPgNT5XLiowoi12TqkPCDd7UmV4BSc9DHCfhhehwHd76Q7Kh6hMbBKUPD6sMrQuuhxsQnXzviyd",
  "key35": "3EcJPztDQDAmfzHVkiCR1FsxUt5KTHCYDvXbavkJrRwWDZPo1CWNwhRDYA462zq6sjfAut8VUegqAsyumKpVU2JV",
  "key36": "2TiLVqdJ8rERzzyVeso8oAJcDotjRgaETRXFXa7efNyzTSTLcoNg3XUcpZuBDWrqATrMqxFjkmaVFNBExQ8cVXAz",
  "key37": "5cH62RXniGtsh1T4tR9DrDR5QfBhBAtz9bb7d3BDXUuuWjvWCSpBha5GucBXECbwp4HJpHtUKckNpZ9ob6Kox2tD"
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
