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
    "ZUc4VbZqGwnprSKRut6TUkZ8VqGNJ2dLGzfCBoEYm5y5F5gMeGxmzoig3RS8ZqayFf3eGe2vk2Uziyzc8rcvJVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vP4g4btnUWtNGVonUGU8CxLkUuDVSbnB4qrLzGatWscT1tWMLLjup3CeGBhSroVEDP3ezGWWabaRGK2wkrRSS6M",
  "key1": "ahVLUoXFozowb272r7g6wPV6FsmA1UY8Ed7KCarpqAdhYNA7wHGDxqqZdPN5zQD5FTtQyD5BZ4g8shSsSAzkrde",
  "key2": "3PBmq8j4WfQAcvdgdM56CUkTHj9hzcrVq393Gk9rhVFLKauKVfrx6qywPK3oYuaRow3UcqGrqyTZRANEwfEFGFmP",
  "key3": "2hyxSfwnKY9t7gTJxNLLK2GKNEQrqD9Vq8or98GKNgA3nqfTKoM2EGKvaMrk9bvDm2Bhvip6uobg46CLW3UKwG7n",
  "key4": "45ir5WuBBwLBdFdAaaNyyapsaKCZUhRd3m9kNSRXogUMpshvaFMoZYL1z9yDWMu46u8HvJkmzy4qyXFRPiBctHyc",
  "key5": "3tPr2cHirtAZSy8Kfp72TVFL1eiUmRQuJw5vPfQKJJ7282fwEqxpaiTZUWndGKdJ7iuFfxvSZf4cB7eYebV93iGj",
  "key6": "2PCmg4rwKMoneM1aoazAhkYvuunhLNr9dJwVABwfSN1Md1vDF93EscPW2DXc9eYPHK4F48sCe6B5EtAZoPxCwqYP",
  "key7": "548d1cxYb1wYAcbW5PF1ugtatAiwiH29t2ne5i5m5U9LNvKp3Two2HaMmpZ6B3G5HP6eJaiM8RRPZhAFY4RXke12",
  "key8": "2AWEMWEaB32wN4yANAEZ63Ja1P5PgzsucmCsZPWNSwaPoszH9kqpmZMdCHsvqaCA3DqMp2FQEKLXcGPCRfNjmXWG",
  "key9": "52MXLVaFnyiPwns1BZKxP37rKneANoj1dSxhc1kiqZva6a8kT6Xh75xAPG28jPhw4AL5ERXJYuxKomqjY59M5D3H",
  "key10": "43BUEfAYRjACLvt4Zdb8xkdx8m38pRf3SGFyWHWB9TtrKnzAiEyP72x6a3AwLdCDkmxbJuTYQaek2VfxwfW5gsrF",
  "key11": "5Kn8iUkHELGtSRzkvn5nffGBgcfrbDufJdvTLd2W28RtQCjKkpx1akGqBsEV9PMVVD99AXckkUL6U3J8WLCPJdzE",
  "key12": "4NkZ3NTnEucKA5sjm7ZANmfdaU3ymhsDaDqk2CiYWe86Sr7BTVkH9Z8qNzroM6LTpLmmJVYKfrueYBmuGyHGxRRH",
  "key13": "27Zyxn65DfiR85EFnNX1inaQcQdB3VbAqVFXnZAmDg4tM16iRrvb96WFAJMshBB1NDe4xro949QV1AHTf9sJHMRn",
  "key14": "2M69bLkxT2mGVNeHQ7HdrYKMBEweFKWtUTY5VS6934ofRb9UNSvPpqNS2Mr1QHEN5za63df9oJKvBEaaEzK1zoba",
  "key15": "5is9LChdmQxK8TTyZ1VAsxFBUBKtpD41hLT7KgzitWxqCR56PiBW1RjQCSHUmRJJvgD8J9BtjzWMCXJ45Gt6EQtR",
  "key16": "4M9KtTkRmpJZR9GGVRcr2eWUoKyudRLATeWXdhWi258uv6FSMbvoN376eUj9wVgEjJLDq3evZrpvoZWCLZNaBaM4",
  "key17": "5vAEraepbPEBUkw2apdK9rYMpkvuskwx2PDwhMBe9Ak3Fz38tyRebM1VSgVGEMqJPNYGjpKWrugVu5mpeXxYy7ay",
  "key18": "2YNXokpWUZ7Spv4XF8dRgxFBdU9fH9VqdmFfC4oG7GmjUXRjoq8uPFsHuW1wjwxDC37F4igEaVMGJEeJBxHMQcTk",
  "key19": "4eYZHqZwajSLHej7wBAJivQNtRorWbzm14hv6AiWjbvr4BFoWKGDnugNxp5AucCwHxEQJafpt4pMEoxAiNVqkn8Z",
  "key20": "4Jp4qPbHSNYcw86f3uFC8ESnrpUaEpaTeHhfgCGgmMhMmWA33o9Gmg7NRr9ttEDj1ERUckW8uk7JAHfGzExYC1vv",
  "key21": "4KjWfkxUXwM1kpKy8q7JrvG6xPHqHCFSLcQR7ByVx2wotRxqVbvmYNBG65TQEdzEPvEvtZTjUg8QQWfX8DQuikUg",
  "key22": "Co5riBhx51sK22BrpKmTyrScPxmeBZ1m85WJD14FpwMC37koSfHKo5fL2kDG1SFTAiGb2qtTeYvmy9tviRX3PdZ",
  "key23": "317xZJc8EYwE546MT9B3xtyvCr8D3JWNYxFqmD6D8aGUfVNkLrQsXa7Y3tpnxYpadiBEyznuPVTNe5XpqbyGiAoz",
  "key24": "3Rkuwt17L9tg4iauEAcSK7zyu1jQRT434wS49YURhpFtEpotfqfoTpC5vLEBdRTpRgeE2h9L5MBtun1spxjsSjXV",
  "key25": "9P7uYUo5vv3cyQ4dSSLv7tKoWg7NyxaNoABPvPf1dPU8zq6b3CsiWGS748usNa2mAgyHohpzARQsajJf4Kdzp8K",
  "key26": "et7DR87vDGo8S5eePDHUPTpvBZPyfXESZHqEu5EMxAiYeyZj9kk8s3GzitqDmfJNSiXntJ2J9j73hivFLrUrM5e",
  "key27": "byhy1Dxk4sQK9n9ebbcGHwQ8XhdED9MJRKeHCQDBDnhc4Vv5fUVBgFT7yxbqDLMisWkHgWAS8ZXWHivrU1KY2Ri",
  "key28": "2WpQq73RDgqZi21nRoTSb74cAtcZnDcRXyC8smFsEnr524uQdf5FmUzJuDs8JSrw77c8js2KCKwduUtfy6tNpHhF",
  "key29": "3oTkjdF4ZAHW2emwt6BGaYKAAS4Nk7sS51V4zXdiZ65oUwpdFZrBJVYDGhsERWeSrzWStEHSJ7fwhUTpCsesJy4Z",
  "key30": "8UxdndN7GEzyw7vAX9nghgx5XX1Znu5mpgKgi7QgQ5Nxr2PqPawmo7Xu8htLXjzL8G9gxHUB5dfQhZcSMJonVJL",
  "key31": "3UAXbptsVKUg64qLhehkuTpdBKRVQp3B3LageAtXyGxDTC6AYqZNKgPFjBuvbUXLgu6XY8XLY72vcTtYP2wuJ6Ui",
  "key32": "4Nze6aiDX97XLbxrExfUMwruZ2SLFReEGgyw7XPYX2nMu7pmwVcbH4oNYzVc9wYgy8qHAM2VrF6CmzhrHijToKK",
  "key33": "iJN9obNkNXPNZByc1tmjNr57VXmfPV9B7Wjy1eHtd2V9eTLz3uTNNwneWy1j5Pd59tZgD538Lp3mNFXUc6QEci3",
  "key34": "2NnRLtjeQWVyjsJiYx7385xQR37cGtdmsqhnootSigwQBSpYF7A7eHShHg5mxuzq9qBf7UR6u8fSX2ZGnktMsbGX",
  "key35": "2tvz51jAVU6pD5WsMYxzrve71yfy68N333AAobuytCSi1JfH83y6zzgNiDcUxD753T85WiThaphZKFqDSiH2wAmL",
  "key36": "TE2yuKVtzNP7FoCEKRLE6fbgYxKFWKfsSN55WRKJkeUoViDRaspWZy9MNep9eS4qTRwTDPUdDo3xir2own9DXTv",
  "key37": "3QK7ZPDP4XoDbQdPnDNaKvsoQNhHbwLcy5MXzVumN61uHUcUbxHG8C34QE9mFwXAfMEze2qmzzXVi8DV2a6v4VU3"
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
