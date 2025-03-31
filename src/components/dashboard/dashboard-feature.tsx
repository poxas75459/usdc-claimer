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
    "NJzutDLodgb8sGcgkc1GdWoejvBbhRcbSyvojHJD4enoDjA8ALwfERDytsymGK3Sr73FxmAD8KUTtvFLTUpvgqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vd9grbHqEuxMK4j8EgQNv9ycz3HZQ8XjFTGnTNbudPLcUKcRwRCLfX95q3hy5JiA6kbJLahaHCDWytmvqPAwgwL",
  "key1": "2WEkCdXb76HJSZTGR27Q9q2HZL95sY58gxQPLjUCrZG3h9PV33SdWxRA48gLHn9c5qx2H1KywQWMy44Sit2pmYzw",
  "key2": "2BR2EF4Crt73Xt4f7nfGV7kT8gomA8P6C5cTi2F4dXyBmJ3Qu94AQb5WqDnMyA3J4Mpb4zBBQCRL5jFHNrgF9543",
  "key3": "2mfykox19QAkxEbGJPKrCLpzTL2wosh2tYAxwqNBJML7qJkugfL8fFye7MQr56PdmjdFszVs23eSFZZtCbN6g1vZ",
  "key4": "5mSbBeixFDjBmLCZhSdaJXT8XNTw1FEC6sH5DxsJcnwe351pQh4QQdqSPsFf8Dq8Gnay4DQqsZ9t2FHHAd66WY8P",
  "key5": "3BWvhE1FGV6qfGdMCgzJQAcnAV99yQXtJzM89oCZTGVKrMDU6n7Bzr5Bdd2FP1Stet4tQKUPBYGVCai6pqcxMmXj",
  "key6": "ZjZcUPHBy6bb6sP6uS7vgA8QS4EmQGu7dg7icThBjHEbeM82vJ9FrBvN35ww8W3hWVzyVKWFPz4G2UheDiFjs3b",
  "key7": "4wDU7qAE2eqHxJzRsfdPpH9h8aARte4n4pRFBjdrZ4gDomhnNzSCp8WbU2xHBAT25wxmxefedXuJ4iHisa533RcZ",
  "key8": "4TVgDTpHJPz5qHv7D1dQsEghLTc3P6hUNQ6mcwQYRYvBBo2Wht1JKvYdgkdndrHTZoxTEaVZsHU7d9e7cqum7AYV",
  "key9": "L9LgrVujKHKggHfsJofKKxYbipGM9SqqjcYDW6yRXRfKcXcvzQmLcQ2raNCDQbTCKNYRUZZxQwHD43Nx2P9Esx2",
  "key10": "52j3qi5fnunCpP9eRsVACiMUXWh8MFCvMJTdqpJ4EPKuRueVY841eJtVg5WbWbPcqukZUtTQJmewNiMZd2g1deFS",
  "key11": "3CUHYLU9sbLn8fMMuFDDnXY3SLidAUC9H9PDqQqPdzLHHuTFiDAUtiSnx8r9WTZkqXdYmLc1W86ucwGe9YQCGtRz",
  "key12": "BdVQCbsAugEPiU4Xz25yEQq8w2rso2K1bN6J5goMGywoQ4Hg5DvMF5p3ZogrNkR6hMtxipDwrZxny1n6FEDQGPR",
  "key13": "4EzBToqUUn822ejYYXERYvyqEzzQbZL6SdexcNXgqXMDPyhqTRrUVEadcoWms64wp7f47TuQ18WCVPFLvLUXWSxa",
  "key14": "46DijhhrJo3trT9T3PziXfFmY9McAAFbooWwVc8higJX5DaStZZ8TH9oH7Ra7wC5Gs6HrbQxefstfSfhBe8N1KRR",
  "key15": "5D6nVB55k7f6RTANuUVjoHydGDiCqZYkUzFE3WRNDawTM3d85VUHunTsDvTmUvjvBTQd4ZB6dTCPtawcZMVHtEcs",
  "key16": "3BaE9fCcH9zphq2NcDPa9GPxZXUkfdJvBpwzTVQei4ZMcK9DdUszwwreZH8xRjEzzsyVmKbU2aiHtNuWZKvYoiBC",
  "key17": "5g5GJR9YnCbXbWiUExnzSjDUPAAUZDi3ANyBG2KDftK1hRb7uyngjRwRQTv76UBoSrpDZDBtF8CwpGe6LEA8Sg1t",
  "key18": "64tV1upPNLXKWa9vt2CqF9KkxfdWWyk77xt98ukHWevr9jn4qSRAXndYC9yjvPbHPNDnGebBeSbaYvEiCHzMudJX",
  "key19": "3DuS62GwvCenvHKZ7GWG66co82KUpiAjcfTRrxh53B4cjHFsfum6HmYW84ALETyTfgHF8HsCRgGhhPZ8igG2gGJA",
  "key20": "sZ4qPWGT59NuKND1SgzKSxT9rzPrbSJYL2fLaqGmxWTG2ZzE9uwpqZUWAbgojPKebMbF813CX8TGQZXPQCLQCnd",
  "key21": "5Nxxqmif4R6XhZxtiPvWWaijnvcw1VuRPgEGxG5U4d4kMxvdv64M8cH8dhVP1xigBg34KBADUZbvtThdc1GvGvAm",
  "key22": "3PmimLEVANC53Xv2BfQH26ZmgWgTuXkz2KrBjmqXhEoJ3cvrquZRkKRhDi129w5wZcuNYpK4kvtMBjNQ288b45Uk",
  "key23": "xPwaoe5tj7PJAQwmgCnVQ311ufFQ4y2eaNBLhHKpKTpUDjrzwTsRrPv6RrxgGr3an5gmkNKCja5bZ8gaZCe3qtJ",
  "key24": "45P2TvBpjdNzquZEvM1nVpVDswjkRZyqXLnG9fs8wcvUC8BgsL3Amcvxnj8Vw8kni7Ae44WLgHMz3jNfAEMuWcMR",
  "key25": "631tT8P6iV3QhMA1eBexCVpiKVAExf2ocQYnGX1Wosj9Qb8tg1KeTkXuT6Lgjj6nJu58CY1ANhgxebp9EZdWtDKW",
  "key26": "5wBmhq6jR7X4zqnx2M5XoN9fH2kZcqJN7PeoU5YpwK3E45vS7wxnNvLepopB8Hoh7ZuNowLXfGvRD29K4TrMgCY1",
  "key27": "VPayGeZ6XvG6JYEYZ5iFpy64zGYnyzVjVdYnbx68zLsWR1wffgNSj8LiyiDSDxp2GBximAKrBbmhHEy388tLTbn",
  "key28": "3N1ytxFPwjcrkDtEGJpovgxUVcSnpAMUUyWY7uCoaqkGfsB8H4afumBgPwArFNENsLQuqcJiMYdCCooQ1wLbXjN2",
  "key29": "fdAbVHb7de3xkm2t49UuoWxA1eGgeVw8p9JeaF7JFiFhe1wnuweAS8wtERt7u5g5M4FJZBQwzeL15wFaYLWvseE",
  "key30": "46TmY3Hu3o4YAWA1ULxmnujrqhn3dxgWwSG2sAJnZKve9Trmy659aA3J6Jkx6egRRywYt1B1KRHwAyek13b7KtBy",
  "key31": "2uGyCAyoZbZgt1MC2fbcX8Y3WFCXtYgmkDpF61UbyraFwYY7sY68qzgKxf6RSDfKfH6euhTHYENWztjSE7Bjfh3Q",
  "key32": "3dFaEEZRjZ4zb3eYATuNFLfNhmqgSom75vyJe3D6sZr7RWCoS1ZU5aj6TAwfMmBZFmLJsxq7QCZrKeM4HmWPD2dJ",
  "key33": "3bUmFgTtfZ5SbNhovvtGQPxnGdKgRRzqXQahAzZVfzXdD5WnFc5bsqsXq8vdsNWqKTYDyE6fAhghuQrV9dWnHYjJ"
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
