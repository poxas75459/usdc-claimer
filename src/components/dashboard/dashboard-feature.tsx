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
    "3zDkS24nxWENXFtuumaSFa6kfcAJMUYvv6K3L9zq8hchrDR7W4GYCa2UgmN8gZBCrhHn76NqcZCHcAtK3p9fWofP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BWWCBaM4zjoC8EA7fELDqedbMfDpLeV7vBDVoMCE1WczCU4syjYdTJyg2mhbhUA3h3zmDDmptzWf4Zi23xtmFBQ",
  "key1": "5ZcGoa5y4mjyMxmpRzgqwXeRXYuqtJEsVg6JqujDbicUddXLS3T5Ku8e1Z8TyBVs2wEQQAEj97qCQn2XnVVMjrJu",
  "key2": "2dCeEYKQjtSoR7zm4Ug1viyayEdyL8PQWsjCsduMbAP5CZ4AnCccHh2SL7WQ9hV8ydC489oDQa9sAbuUeakrc6kY",
  "key3": "3jspLHbHSiuNZKAg5M6eFHYovGdsQ37Qrp1GQhYUuCbvuvi8ZUhupmugh94htzJturhMBQspHkN3dN1YjCdvGWmZ",
  "key4": "3zYe1iTL2pKhkxG61ALECNUW4CECGHtVXLmrCFXrtPSShMQMQXY1c5LrFfLhmChJtivvaBeuDFUwLT6awgfMLzRM",
  "key5": "4Yo3rsG48SStKfVXKoMwufBqEyPrUNaMztQGUMkDiPWbD47npHYJPgfY8knuQdR5f4G2oSiKu4Ge7uPFWynEDmUB",
  "key6": "389VpBJoRR9fLfsja14AGNtvZ3PFGiQ7BwmrHzh7CoAuURToveD92oHwdxv9czhRwNhgpCtGQ1dMnEtXiRViq4bc",
  "key7": "MepxKv5nRYkF1H3tJAygD2xSSweGKryHd8PCLiCSV7jABQxRHv3LBQG7LoTzWsJnWJpn6kUHvA8zD6E77AiVBwd",
  "key8": "2tW1qd8REq6YtErLYeSX115K5wHQEKKyVUQvrD5ro13bBL6nfsYWtHP88cko1bcYC99fiu9SWtsuiEMsYAiTN8qq",
  "key9": "2m9drF9xiV2tw9dQ3Qb2eemuiChv1Ypc3GsgzRZHAusZ5NqBtC8ehbTDvVKBtmwGNV8q2c3vcMUnZs9K21TuMNgu",
  "key10": "4wkxjT1VCrDe6Uu8wR82HwFBxd36qWZVwHNZsYFa5wtsbN2MGYNwNZhLqsHizosehiJRmJXkSBfNjqvZxBadoUtG",
  "key11": "5Qpq5PY4WqmwLUXCZmeQvHwXJr29gnyoKhXLtmXMvLqQuG8cxTE6oc78huXPVENxDekuZiVyVbpWJiNDMY1ZeBdy",
  "key12": "2B2DCB6M3ADCAgpR1jUjxXqxGqHESyiCy6n5bTNedHiJehqQwqEMYTE8MHCvT2YLBbMwWAxiKGWgcoY3BaTpRfEF",
  "key13": "2PPdAAPddaXri43bsFWS5ss854mestW1wRSwn2wAZ4AWYTYPRiW5u4mdGFHTmLU4Lk6k62n3g8DTwvtLWc8VPHg8",
  "key14": "55fkDsgYQmC8DF9GWLLBPEAag8qFJj8z3R2mVZ6ekUXoqM3M94CrjywwtUQEVomMWYupT15vvGAwo34krq6HP4sA",
  "key15": "3nAwtezrcfdjc2BGYaHCrjVMdcBNWk5c6BuoNk9EGUUC5ApE6jcTxAV1EABYABhRcacLm6Uh8Pg1TDmXw3HXtR3",
  "key16": "29YtouEVeGasWjagCdns3hAJXacZ9ETLDAivLNcyYMHzZG13Qh1GMMnEZhpdwW2bUAyyeczSCdwrFz5dkttiTRgM",
  "key17": "x8GtdYVbjjb8PPFcaLmETKBmPa9ESwgt7nWhV7cqcpnUJTRhFQhku7tp6M7x7xuRCvjb3YZgsZS7EK4zHQmgJtY",
  "key18": "2eChXrD3DRSZUTvk8Ywn8AYdyQaMggK88Nmw59HWYe756idgX1p2WuERE4LKx9uSRMF9zY1sEkuGEoyua2eur7Pm",
  "key19": "VcVbEcZ3qGb7iTLMapSqm6RLKL1YSLtiVSiDs5CdZt4ojzyRmez19ue7jou4fB1x6Kf2V3yihbHka7aahpRC2Aj",
  "key20": "4PJ2FiLgDNL32JjcVrKGzCn1hcJp4JsBWVMUZ8bYcCAyUupYBM54m1b9ppSrVKKN64JSg9jMSqTqPZCWtFtYq7wF",
  "key21": "xhbg831rWvHmv7WaYxhaAcJyvhEHdQyhESQMLK8BRkLrTnc2fALbmhUJRxd3rtv94KHsoj5Ebq2SgQU8xVyqscA",
  "key22": "3LXri2xGpdvYUK8QrbuWVPBHe1pLpSChyM73qSdYbJgdAk7GGrKArsbvHKNAhi5MtvMQ7JX5d1wL2pVuFWdCNo9p",
  "key23": "5NVLnAZkNoQb1ZnKYAyKyAj1ZTg1khLZwezccc4yYDk5LfX4fdM1ENDzxSGw5Dt8LVzNd46bH7J1XEYSJtEuBxTw",
  "key24": "3meaSwirt2vUw7LNEyQe2J6VyK7Wum4NM1S6Mue52vPB2HQFysXEjo2G5ZfWmheZnhDk57skUSzgNQsxedwgC61P",
  "key25": "1fQiwmuxoJf6iRSzye9GCixwKuF7CmMVKQUsTVTKTQD5tp3NridRFuwXdgcvngjDt62Gd4xbWMeMo3gdbc2b2rn",
  "key26": "2QeRLJDueVfYTkqtwRoyG8oxhRKHLgy9Fjk1pNvoMqQELRLs3BzJg13oE5eg7A6jHQiCdg9j5FJkyiub5MR5KveP",
  "key27": "35ReL34ZvNd4smk1jKDbtWELtrwdJhJZKqEYppDkj5TJ3XdFzkqXNYnCnkkH3GQFLwqCMF9P3RZq75M5fEE39Ppu",
  "key28": "4v9VJSKNJ9ieDnycVNSjRE9mCf5KS8bdT4tjbkAjoECmX9vFAsySnnRzbsKGWWdrcBCtVyxnmULhJDdB8BXEj4zs",
  "key29": "4JVjWkKWXSr1BgXStdoaPA9Kp7SadkXq5psPMtNdEN1nDvL4VugUaPzsNGJLpqLRUVW3MW1hhHMebWzbL1RBK58s",
  "key30": "2aFotoNis8VxzSdrhNVvTJkokozf4bvLYGh3U6yVPfGKBnYfG4nNQXNomoZdHUHxXzxXotDB4Z7sm3Ak3CgiqkQ2",
  "key31": "2P7KCqUyqQbe1Pqg3SBGC9rdmhhrcjExyw8dFFDP98mweup95DACrSns7kGh8qqX8ac5deHukzk14xBUpLMfrVsk",
  "key32": "4jeeYpxTLRa5mgD7QBeKMivHXcLxo1zwNHveopwWfdXnCFM7TcMgx3rSJiKqBMWnZELygupzoniPfvh8PpB6vJqi",
  "key33": "3aGuDLC9g2VB2afJwfYJ6BAiTgMpDjyb77Fm55WbJ9qNfbVtwdtqxDzgrNFP9dEK64nEx4NQGsJqazLb9uSKHuND",
  "key34": "4gsV63bMnyymYa8btsxeNRAzGxo1XVKkGnZZtimcgndtKdWNZv1sS9RBNoQTDfykYiiETvEQ7UQUm6Xa5bqPvf2H",
  "key35": "3p6YvEes4NfMbMD9F42rsfX8ZRd56YMfrAaECXF1BD9rshrQMqwwq88cgXxQbH8iBdMcGzGs8Q9bH5a8avtV1ta8",
  "key36": "RAwxyY1GV7wrtcFZ6BRGTAeByX7ZZce7XGtCC62m8cxZ7TxMhvVXpivTJoYKufkgthvGmPcQx7DoUJgQERTRx95",
  "key37": "4dsqXJAPqgRJ2V6LpXBPv6oBtcWpzGXECijZ9XAaCAZ9EG16mbQccwb8oLbo6i1kMEsHiECKangRAahPSPNRSL9o",
  "key38": "5zdyZNJ6RJZxdTLXUj1rBuFCyfV3mzeEeued1cVBGuAbhtfQDkTPXqGTPsocKiZLBueETJC6ce2hW4Uvs9yVReL1",
  "key39": "44bDeSjPQq9S4hS8KN7Erno8mBGiWpuBy4eH1CpkZeoQC7v5pWBMR9FVLKv5ASitxJCDEoi8mc3MrhFvEUM7TPPS",
  "key40": "3y6cpjhUde3V3YUbZiEezeNaR7zP4AYaYBepuCQijtnGm4tMsvVUkih7HSnb7pBLjexgBMfKLped8F5fdYkR82Po",
  "key41": "3Edbe12JuHk8EnTE9ARPuM7Sp6V6ZPxMwqRta7aXPcApyXuPF8z9NPhxftAtkxHbrrSzsHVvsioR8BBNzY4Lg1yD",
  "key42": "3jZ2XFnDwg2vZubaaDhLg115ZNvRZK1YM2nHZwwv32QCZtNCtkoJjyeskseFxP5EhMiXsF4u1maKBfx5u8r9uuNv",
  "key43": "4T9wduHZ8XbR4ewjcmzFtF77WRm5fW63Xvy3vSmWM2gjZ3yYKxWkwxpjGXEVfVwM4gA3XkzGn6ZkB1abYkPYmpTc",
  "key44": "56mZPn5hu2WpofxoFQYbkoeeEPsGEc7zRAyxydkQHLtHABA6AbWyTiudHCmWohokFX9HXVx3Rmx4CGkMw95xhfH8"
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
