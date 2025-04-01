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
    "2S8aRArDqJ42NuucReWoJYVZioxvodx3BkZ6nUqWLLRk7qALG3PYpJ4CLKgRm1sPeMQXDsgaw9iN4yDG4hApipdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AYHWXW8UvurxxuQ38AnnAGknfMHdERnRnXKqAcus8h2xWd7JQBfUe4biHNd3TmCu8ggXE5MdsxaSw1UAkEH4aZd",
  "key1": "5wUK3DD9ssD7VxrZiAi3cx63Ux2ZfhFcSVw5svEF3nFqprWcwmzCxSrJaPRLx7sdDFk6932ZhQaRYFxpu7pSt5zo",
  "key2": "2t9qeGV3GR8UeDRwfp5aVowFDhhHooCBsEBxayYX2y91LFmQkYWVk477k5JuAPy1pPKv1xDgwtxwkBRyon6GvwRR",
  "key3": "3q31Movcm7jTrqNcAYp1gbGMs1uefecpHRbrqw8vFix4iWKLKDM9nhXs1rDovJUXVmRo5PjZ7ARd3scAegMuAkQi",
  "key4": "29U64WYiAUjsEV1AuRC7a8ayj73UKYmMVjH84M441UHJfkuzC2xWPzz7u2Ys8TqDSpYgK3o1zz984sKBgVZVA1WU",
  "key5": "5LTmHUSwmDoYzsD33eT16aSQjBvsmyffxB92s1FAW57fC1RQXmcZcLVuB7vjPN664Z1uDdhBnsBXJUp4oqnxvvBv",
  "key6": "3KCrT5zZDVeWPzoeRBnZk6EQWdC5XbGUNdX2xujtKaXHUKJanFiojgHwQkjcnCRnp7zRK4Xc9n3NxAswkswu4R9T",
  "key7": "3fpsJtzXLCY4PGaZVszP5o1bjCBQJs8iWyhMYnw7SaRFfCavuXAukcB6bhhiyP19tJ3MEFZqDPdvxuAScshysNmL",
  "key8": "3QXfZj278o9pRQUqevJtdTV7ff4Lwey5HYjad8NxKek8Dbs7VhWVj8JwqFH9SoURTE8aocmeJKN8AhAQwMyGNFiP",
  "key9": "5qopXdCQQySgw1Lr19GYojUYt5MYF8ZwgCu8QC4bAzL4WfdF4xQ3XpvtthTKRHwe5kcLDbN1NehbkM5tvmvs9HTj",
  "key10": "43C3Eht1a5uqMhqj6qaJMGMesgdBQ7zwCMeJNxgCCEJFyepFQPw7yY7c5wLHmei3kf26jFR8tNR6ybRD1Rp3tHJh",
  "key11": "4pZPpQcJPC6TryA1oaFo8KeRmeJYdFJmZmpoiRzNd4ExqLTvYKTAvrDRjtsCjwWJYjkzxCYvLg5g1t1iDTEsdxpx",
  "key12": "4Ww89aj7FPnmUtrKTAz637wdVVzpBdMoSdWueje3wQK5YNHW1v7XPGA1oK2MQ7jMgYwxcbAVDBR63H2MJFjEJMQr",
  "key13": "4wK5mapbUP8Zb2Lu5qHj6W5PpaGe2QtdV6ijr3BaCV3Wgt1zbVtDLhEsb3Mxmdgi8bcQRfCkoLxjFDM4LwcEVtDg",
  "key14": "26bc8obhq969wm3AjEic2notBqehnCEfasdcbbCRF4iNW1GQm5LkpJUTPhmP7xkSyNzDKWePme4De7xbyoG9SdnS",
  "key15": "57dykGrmwzrd3mLgVuKJ1rxXe54oCGhLEFg4u3pPHX16Nf1jpZ5bGbVRzF27j1HWuBAwvzngUcM13jigTPLZ3W4A",
  "key16": "4kP7auKegYYwTSnQ4LYgiBUdXLfAoNT82zspvePWZt7Tpey6RCXfaa2UDnWJ7jDNZ3tWgcWYPMNrKKQcoiLCfTqR",
  "key17": "4ym8XbzNphsfoTUeFBozujcTPHGQsraWqJTFq192LAvZ9JZB4yNPDGC8tQAxTvAekRMiwqraUJf3wsWYdgoX22b3",
  "key18": "5SPWGNwoBDo7V3sAQRYduttE8WAv3tEBvUNj2UdETNj96EJhftUFk6Dcb4W4u1N4h5S4BKHhKpYgR2aYE8S9n2E2",
  "key19": "4ww9XEtSyb9GgdiQMGeDrCQBbkyqcim4NK3ymP5MHmr6qpY5kPruWZ4ZnFe4csUNnz5EGxYhNn7UmLEfNdyu9gMk",
  "key20": "21dYRVWuyG3bAs8aZyNDmyfk4U3zmj6GoUmZXHrChuyN1u4jmvTUzAH2wRkdsr23B9epxrWvWar9ZskBmEdzV4Y7",
  "key21": "2HwEsxH7rmw3nH7is7SDsiXS5JvV3bQuGRs4j4Z99T2RXgCJGZoNbam2Vtt8NwkW2kPK8zAaDwQk1Bt7fURPcnC1",
  "key22": "BgAafeo7wvARYE8sMKZuXnmoe2Ni7rdoE9MyAhhVZ3YYpCGAggheNWvh3Voa5RbR7G6d2w5gxyPSCRjsXhJzhTe",
  "key23": "4M5pKXT6rRf6XcCabsgJigNRhLtDqJdzZx7uqcTWkwKYyjGPG3WqpkpnPFTs1fnkoiTThE4U74xxYkZicGSPW1Ud",
  "key24": "2jgJHQRAhQP94v7cg8gqKkTVpNByqHFVDUE8MLEK8zNbPc7yteUg9bNEMi8h4r4cbLDZzhabowcDghTePckuxBtj"
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
