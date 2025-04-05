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
    "4CUSt6qQr51iLUvfKPG8c9xPkZ7khkWZTWPocsqMEy9pAaX8pkTADowcrL7cs8GnpMHqKCEqiSvQjGYQ7DaGWpJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sR7CEadjeYeGQACXDGkBXbLm95HhySnmqW7bN1RjzRwcQhQzDuxtRVtkrD2ZgWwkfLKkLaJCjLCQmaLLuapWRfx",
  "key1": "24z2RRfL36rnrbAdX8yjTrGeXgf2zdZWLf4GwcaQoUDxjDk9G9tuLE2JSCfDc5Hq1EwoRCjMfM4w2DtTsSzyY1fF",
  "key2": "3PJxHZuZytq398zVt2z71PFZCEbhU6QBHzjfMbroWt1FWhizBjoWNbHnzMy1mE3nHz15eHgQmZQYHsVAxNSCR6cq",
  "key3": "5Bn8an9StwfQ7vm89dBguySCSUfvYgPu27to4E9MJuWsFWcAiH6A2CVswUb7wUmPrmeygKgVuzDndMK4vJnJLBWh",
  "key4": "2GnBGSwhUSuJDatpYCbmyqyujfBRY1d8d1TxQEieNRwmXNDjGdjF1PdBxJv5LbPRBLPE1sD7avYsvKuF1gd4RJhb",
  "key5": "4KEWzrU2pn1Kk374X1c9PPdm3DUn1GMwkHLNfaEUZc8xvNjUdFFxmFJTAiQSCASDhT4nAnNXv3E3A3SbowW3wgZr",
  "key6": "4QAU8A2NikA2yzuuaQxsmhiUtaWjMryzkreWASoF7PDbQSvgXF9UL2REBExEdbLos2kpPtovZds2UgNMLBDhkCh6",
  "key7": "34FubywXEejWcmmLx24HHgD6PJk82vJPuuAQwUdcxHb16DRG8bvzT4wfoaDYM1CUUG5YrGXEj6Maf2cWYhmfXn98",
  "key8": "5GkoQjWzcv9iicZVkxC6eeL5Hd5Wh79s5ccHxyrGmVMhMkjcUjHXva1m3Uod6thjC6ncV2ZAbfoyr43gMHoUC87G",
  "key9": "4Po216VP2AKi3ZQnadQrV7kDxg83zHBVLVKqK2EsBQygaB5CPa7as3zYfMA3LoZw7UKf4FrqKm4okTkVvefmZ5ia",
  "key10": "3Jc9GKPPoEnfWQ8AmitTRrthqYW2WxbPCmCRy1VtoTAuZsGKm26irbZ1oH77c5JzdWZzwrdTDMmx1zvexVeuKNUm",
  "key11": "657FyNAP92N2Cm3TXx7wabLrweNBo1xZYJEDif7nGRSSVJDiVccgvi7JBK1bfjTW5tPWgSMwxcvxfE5ASH2918kk",
  "key12": "DQz6fdCAhEMyv3Hrp6PQrgdBC7NTJBe8faXs4cBmKKYym3ckCbW8QarXD1Ex4JLz2oy3nyEVqAc3QTduSL8gz2m",
  "key13": "3RHFkuzojPw6BR3vruprznDm9NRDkKKYiyULNjAjnbC3YCLVF7NdmCwfcWrAmZrEtZF7aLa2GLj3yHkknAtNeMzP",
  "key14": "2FoAMbcCBwJpWwew1zMzPMewhAXdxGW3jQrVGLqnEkUVe9rtZsyLW4ZM7GQJKGoMf4nYnwbtbBXJ3AoNwwK2mT6h",
  "key15": "3vUqRRVxePGBiYJKYNbFm8VNHWPoJjD6AzY8XaBcUmLbvBTPafEsjCYiP9MnG4XMukMrQsEKD5t6pWdDZkLy5o4e",
  "key16": "56cHnD9bKZTSyMyZE5fU7hccFuY6qcbJTNFVY16SuvEbFLxVrRasZmx7CkWkuNfP6GMpKLDdtZBPKupzpC2543CR",
  "key17": "48i24DR3q87tmfZAvN7rj3TdJyWaS3NpA3V7WjRyFhXan19MZNcy4EJGXZ7ZNqDhzaXeBYs6H5ScVRdw5uTjYseu",
  "key18": "gnfiJN9GUrwDMWB4KD45XFsPmKQpBrUsLeL2vGVjBa3jNnhLzgFC6s5mFZRYatncHjgu7DB1ujH576agNZbD49o",
  "key19": "56duJRneaqnQH6yjaMeLZkjnPd1gVPG51aE5vQoentbNxW1knL1T71ZpPQJzcvXyNZm4SrwuAeXPkxdwsurxACF4",
  "key20": "3WRFCkrE9oprT4gdCbWYMp8qvNt36j42TjgDenfxRtiVxpfT4FTJ3ymkxHZvP5Lfa6RbvLio1Q7YapVnaJdK6XAS",
  "key21": "53VsHuJgfrBeg2SdHBrYqQU7qJUqLPTTdmTGSi29GD2p7uVnhz9kkYcnbZvZQXv2t6i43eNUrzMWUQQYc62b9eud",
  "key22": "gXDo12C372oLnQcKZu3yCEesWTr5HQH9yvjn2rrjLDNTcKBEpS1CYCniT9Fp2YYub1E65ZvfieKJuJ32WLaSpfr",
  "key23": "2BAvDMypFSp3A4tDR2d2RNKuUZherri9mHpDB5yw7LTszaFLsHv6C1soaLNMg2GJ85d5TF78YngdjxB4WVkQhcxC",
  "key24": "4zhkDjNtp1sde6wAh5PtQzmpx3gSojhuBzieSr3gzRKRoMQDdaMXYcN4CgDV6Gs9MpsKJqv1eX9FVvbtr5okxSaN",
  "key25": "4bM2zQHcquW6JhqEBdduSfurP6r9TUE7W7NSP2EjVa93DUcAgmc8pLexU4KAX3FQbVGJs5cnhjurG1XANYwost1c",
  "key26": "vxcjoTyCurMjysXRYXyWek9GaBda2weJAMbtk3SxqLKbxZj6kaNhWfj8Ny4KhcYyBgTvuvMERUQ8W5634xvrsmH",
  "key27": "4zm8MNEwXgoFC9b5qoSSYgDoD8x7F6ECP1rDvzwang1qVBzHuWa8KLLv19tPw5PnRtDDT25dgq1vkAKAWvt8uUm7",
  "key28": "67m7WWqG4yF4bqshQoWHVTqPCifqnoGqQJMkeHeiKhcUWVhZMxuZFYZDcbTnatatbDh44WeXhsaM7RKkseBU8R55",
  "key29": "4vbnGNj4KMY75ns6UrALDjzMSCJehEAPvKkv4TXsXBVt7gY56G4XH5eLUykqzo4LvNBhmLYqdqEpsM6WnRU4hx3u",
  "key30": "2NBkjkZxdcwekZs46JYdVNjHPkqke8vdQEmc38Xh4RpD7mWkEDQRq38ehDs6o8tiCD6ggapVMU7BLSGEFYStJ3GD",
  "key31": "AZoZVndjBTKP12rNMVqHiCF7PeHGnCD81h9TaqMRWyUMJT85JmKNVBszpc7gZVnf6HguDG3QXnqkCfLvLwQjzk2",
  "key32": "ukwnBHrm5KjxXynryZtmyBiNmwq9dsYELZ17KBzAgWW7YFbUuVaMYvbC8aS5eAKLTLCkTmqcmR2R7H78aGQs74Z",
  "key33": "5vTvthgHW9MT53WRdBASo1b4LkDVAUX8HW7mBXKQkorQNBzsMBcRV9ebQHRefcuEnVs8bE53GCoSJYJxGrpZDnum",
  "key34": "3dE2uaXRNcDf4CBfEU5KszRFFFNpzeUuMuborMgB3LHi72F8cSH8AoyEh9znjvdgUPTcj3ydPoX7Nh5B6eZ5XETV",
  "key35": "5bkzLJaRgkpPu4hopDzN86E8PdPYcY2CQUYusrNaBFCFKC91jCBZ4CAFB3MUK7u9vSEcCobtiozRkJ2554vH39nd",
  "key36": "37vULbT4JA3N7h4ssJ3sYYheWfVUB4dYVsiU2UxGCPFU7hfaBSVuhp7kkrXUgYKGeYuugv4wiJr4oQASfRrS5jZt",
  "key37": "2dht7vYp1AJK4kg6L7wfedrz88zRtozE8zFXZyEZd7TtmpmxWUFmvNhwZV7XcgiF4E8sboHv9HfW72z4HkfzoxiD",
  "key38": "LFzT6u6yqVqiDqi2mLW24tRixDwST9dhn2SaCyeH6mc4eBNWx1Gb2eGFhMhLa8dj2cReHP2jUPKfc4LGv55wj3g",
  "key39": "3pYYmeMfUtSeCtenrCh8nSwgseHBoTXqyV2sNwpFAE2okju9R78VCvGFxNVBrhZ7Y6R5iQfdTnWE1yJqXzxR8eah",
  "key40": "3KBSXcy9oY3SRohThRsrx3h824JF2JjsYij9VbM8AnFhWZdYLTsMonpWMs2PWaM781GfzvShxvSkXobyhVqbUa7w",
  "key41": "4vjsjvY4yKNmpe5kd8Zeh21RHf7iGw6MaZNu2rLYH5PxhG7yGZF3Xp3H8HSkiN2nF5uiwTnn6QVsT7R84jEMdz2e",
  "key42": "5aUDvn3UihtY7dh4t7tTxfFerZaSd8rpopLJUzGATgz7M5FjHK7GBm7exvVVtHHfRCzvgWqopC2nHUFeyfkCBXR9",
  "key43": "2EB66A8GKt2CxdxASpgbP5J8rRTCaG2X6YUnjUSVGnETeu5JeoJCdjcuRYTNensnGawd5AY1wtQBMyhP587nyhcP",
  "key44": "4W6fmAEWyRbcUuXh9R33kb8dDQtCxPGbd94UindSGaVWZ94zgWJsjb4yimKey2vbFsHHDQBZL8z1aGujYgWHgcZ2",
  "key45": "3CvLoCuPd3d5RvQUh3bmb2G6fSFrn8dACQNZ61LN86BpdVd4srm4WuhsSVTbaAcszRi3mHjSLCR8j4HAnwYNA7Jv"
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
