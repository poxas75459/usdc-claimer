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
    "3hvyckUaMcoohDugGGctXyXJ67pNBcU4DdngBpNaFt9kFAZQu4QnyU4HLEVWiRMeeczGjUro74tC53avz8tnzEv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NN5wVk6ovnEtFmUBW8sqtiPJHML1hzsKFKSynC9RXj1xgi5pDUWK7CAADRUC7NzgnRdp63oDnKSUqf56ecudCHH",
  "key1": "3njLfo9ATTVP2yMRRiCcjR5kzzyESsc39964j4cz2Y5YiTAzGXsPkNpkYjDR9tQRtsdPL7bwN1HYcvuRKhAAie4L",
  "key2": "2C7Sxxq7faNQ8VhiwNjmXzjTi8ABJtxSfCU23zYMXLaiqCxGjH2h2w8AtSWVYDWbYwL3eeRGYGGqu5fVxcQ3d6zE",
  "key3": "2v5jcop3NA9UK7AZVxUc6LjCoEnVLEKdXLXhxLCN37ehaxgTPZy1wAHo28TZ59JdZfxom3pcNhSMJo2WM5Rqrb9J",
  "key4": "2Z3rMDDtmTLyn6ok2A5ujhDHqGNygamCru4hbMojYxocqNMjLvk1opkR4X5zxiLBPF8SFwJaroNuKE6ogovxbjLf",
  "key5": "47aRAAJJR2NxJsLvGsDE2Q1HW51SGeA8QMEZMaveeBaagFLT6bMTirGcH91DwT2Vt3NyN1K2wti3q5TypenBYBmb",
  "key6": "PkX7srfSukqNJVcybACC9w5o1DZJZoyoukZ72m6YEoEZP1q4f4yGbnBCpez8iC9GMoSLtXz1WHBZvjM3GeXpHG3",
  "key7": "5TnZQB5jjfDSZGJnhZSdNy75cuawM8bBgazmETCcVk6QAYsowyq1DhxvX7eRX8iXgg2v5fKcLfAALkWh78ASJgqU",
  "key8": "5Me6dzcZUmyLYqdoGA8CV3t4WHHcW8evXB13ctGXR1vc1DMxwt5zkmWn87sfvi7ge1uFsAbTQmU6aw3oD6v1925s",
  "key9": "5Dz2KbLtjKX873E2DEWfaNsvcSBrADAqRfNGqYLiY93c3Kf2QpoWLTFS9QV7qApL7rVr8obtgDh5kogR8ZadQZkP",
  "key10": "7nLGbTpRZcC7gkNzFvwbkm6ZXvtXiLLRPZq9m8v7aJL5sPxCfzuxTXfHLXQUxQY6QTjJ73A6Yo1HtUNKfUrrjtT",
  "key11": "4S12PFx6Ys4kf8gpXMBvZwyh1bbnP4xBfW54m6ftNxgpNfqM4Ad29KD41vKkWzvPRvrjUj5AnDomAa7q3yGxXQmk",
  "key12": "5SMUWKQ1DPfmqSeQ9rd1W76YMpVuZc9UqEdbHXfSKjRexz5d8LihJwMMSznpkBBpc8PPRGR1Q1vag42EyXiXMkM2",
  "key13": "2PDRnRXxoe9ZJsYT1y6j3WmkUos8pYFSgbqDTTurRLD9z31o5cTokAjpbWBpRFGP7UM5fJjCVCpHpNBcFkR7JHmr",
  "key14": "3sF6fGhUzwtq3ynLVp5Vg7VQq6QT6g47hGQegzQ1vyGCrS9qvboyGjbUndnHag3Br3tycsfJZKPt6pBCsTKuc52p",
  "key15": "5i6WUu9JkGMFVbiqJCoXM2zr14oc5Q45BAxJBXL5Zs54hGKG6yPZhovMBMKXH1bNnnyFKuFVvm5uZA7xhVdK1HC2",
  "key16": "3K34otNBgKasmNq5AQWFtQQqJ5RP1ttAh4ymoFwmVDUKEmP4KRBEWbs4ZmMmsG2PZoQaix9eHCfFu5Xay2Y5oUnc",
  "key17": "ACBJXiUzcq3cGWJaK4MFpqiAFM2WgmaLZoA4ZpjxHyeSaXrTR9Zg8iseiPLobJbcfZH3jCjpxn13rbevSrpLveS",
  "key18": "Uf59FB3BDgfvoFKkWiptxJGs8jz7JNsT3P7FxunCX6WCBQb9P1Stw6U2NQVWUXdeiiRdau5MdTzV5qcibxqegE6",
  "key19": "3fgjGqoK8N44GjzB7yw8N386A4KZRAnV916xDrqQi45SEvHFKKLb1M1Q5USn4uN6M3zFbarc5NhvJxnrwxDUxagN",
  "key20": "2UtTDecFar6iaZ54kMyucz2qgPJcxeZ1tqrUSAzysAr3NJECqigD1z34YUVT6EbBfVUSvPh6N6TF4mQLwvARRV4q",
  "key21": "4qVBGhbBVkhw2XautkwhcmzYeLcUGYGbLN4eR4xVt29bBS1gLU47ajRBHNUwmwHYq7Xko6bYvMaEhJqfzyT3yJvR",
  "key22": "R4skLihgjcK9RWVWpZAiGC74hEjqRJbU6H9EomieRxpLJEP273jZGwLGAbNFjVBvCPUHnSWE53gNjod8LNPPm3s",
  "key23": "2zZbaXztuUx998nT4EtP9VsqYfKLB4rhpAX514EEPKNWDZVN6Rnc3XWdpnmCqRP2XMWXezCa4Zt5Jh8wpKLRXVE7",
  "key24": "5WXsGFqpzPBR4AZEgCtYxpSAfcvFWNVSoZuKxQLHTZSPa7ckGPi1gDAFnKBH5E8hYPozEJyBpSWrf5TiTSQqHgDj",
  "key25": "632wcJGD8gmTcMCT6yG4jGFkm7xHmeiZueYd9QYcpSvJY2WNhy2fGmh65mqYVdzX1ZQx5WPMnMf6RhDiSxGTzCTK",
  "key26": "wzcYygGgmxtzsm8dmBBBHFqjd1GPmjg6kwqETNfb5aqfcqVtVE42jGCEP1o4MTwUqCk9nXchS1Zwztx2Lh7qeAm",
  "key27": "3aL6at4qR9P8tLGC2HpeZoP3ZEwexYGrGujx3t1mhseP2h1cVXmGbad3AYiK71vRbq3H2QK7kWTcnJv2tbyGUGAE",
  "key28": "2oJnP6zipVJgLA2T3bGJzaPaaCBARp5fzaiQuWgN8fKQNoxWuX3AE3wGHXLbmpT4CfsPAdqZP8ZkzG5WnE4C269Q"
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
