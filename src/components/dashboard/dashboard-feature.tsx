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
    "2eLxtcazViAMYkHbyUibxgZYd9mKAotECBxgZ4kqqTttF5TFDoHVqrzr1BHmVB1v1YcQWDGWCYrPkSBgK4wJTUNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iQq8NCzUVUg4jwJP5EGJWeuKqojZZKap2C8zZGN9xL35LxTWagCfDaCrXn99SfeGTKLj4duFoA6nKHME5Fp19Ho",
  "key1": "4xd4fbsZR5pUDQoPW1yJDUoAsAGc6vf4ptHyEAZxC9r9tEz1q4jXHpnNYbGw7eixE6SWnydDr8LNEuFLiNqLxtHF",
  "key2": "4t1xDEzuFDz5dth4GDivK1Syj9a3tA4kyFzxsakNjrApZhcMNa9LQRUC7JErvQFexX15oyHAZJzYgqttGmn3N2ea",
  "key3": "4Rwh9gU7F7eGuhZUq7FjxvdnY9esPpDyHNzNTzhsAUThjo4vhYi5zsNCGsuycbH2Kmf1DGrf2vFrcrnReMmKYDBg",
  "key4": "5FQdKqaZvB62kXDm4Fr5HnL3t5uEYnEDWahbVbShPvKstQCdk7QdjWvxADpBc14DsQuWBaVM695n4PSk38puqnDX",
  "key5": "4kcwps67pwNvYAVNUYMGgX39h2LYf7tM88qLhmgKdiUi29FRqP7eM322xdNvVeze74p2NNMKGVND3oQTwd28AjMV",
  "key6": "2zNBVxL9pXfyFoEwX3pY5HkwKgC5Hnzwd4E7e5wGqp7XhQprGezxRL8rBjFcdGreGHLVGS3KgUewHuUHmvGdovgV",
  "key7": "3MbtsNePPi6r3Vr2rBRqhUwq6VbgmdPiBaddqw3wXoHGCk9YBoH6ca9kPHAS8fLb5kBAxS1fCFkVju4YyfL3ERdY",
  "key8": "3p4sQnzP3hVaoQQSfRyfmYtMDtgscxrg33EpuQckQKVVKk6VuisWXG9fQXQps5znzmsYVFAW1UKm19Hc1XemvLYV",
  "key9": "35suMwhStVMbWr2xQwC96bZbAputqDC4swWfKYw19azxMe5RbMKJoYJRyWFoFE3tUif4vSaPpC1RmTM5P7jUkTbv",
  "key10": "4hpTxuhsGCjaF6R52j22B7vuy3oKC4GSNvZ1RQHSLS2omudJR9t5fCYhxqr35iE4yCuoTmYfid3D6sQvEKSY128B",
  "key11": "2mBcBAcs4yFFhgPdkJyRgpvCZxEwo2oPokiZ6n2cuva6TMa8xwj3EFwi7E1qPUVS7Dfag2kaQCkhopf8A9m2x2if",
  "key12": "2fAwY3pPmTfN7UxawhvwqWaQxoLS8EyscjavDZEbF1fQ3naN9T4NSZkdiTbTaBELFbzbi2rEzARSmPUR3RQa86yL",
  "key13": "2DwknPwxrDhSeir7xF34nH6QbvEaMQsyt48TCzyhFaCTFPDrEvpjxC4gEs6sokLoUZEXUMUX2oYWYfvBvuCphJBi",
  "key14": "TnwTQqMhR17fPEVnozhzwK5P4qPvPWTTMU3Lxom7XfKQHbCLuaHtbw84UNEpHkFdr2tfTGUjJtPWzikhMJgJwL4",
  "key15": "pnrG2EgLfd7QRgDtcXpRSp4C9MwLH7Fh5SnbdsN816vCSVxaT7GUTi8YBDbQznJwZae9hQYfg1L2wqVc93yhF58",
  "key16": "33JuS5i2wopdixCg3SSRUvLLJbDgcu8UxyvPUCAaGW22Uxu7b5kd3AEp8254gF3QPccD33e51NVYLs5BG5uzXzKn",
  "key17": "3VtUsuSKq3x58VjZHET9rsj4add4uW6EyMcaeg9K7Nhs2TS7iHcidPCrpbhSEUxC8csNfPh4caNyMzxYy6kf8qCM",
  "key18": "128XzsBCZc3fQajJwz58x27ZXwhiv8RhW8Cqfw4xf8y8BDzrzKr6hJdd3N7Weu6NPK8tXLJLvKmE9FPEpxAQe93R",
  "key19": "5omw5kFkfpHAQpU6HBPtLq3e48Zb8bAjQGcwqRhJgrL8Gy1TBamraiR7BYGbwtonDhgd8eQNtVgM2XMMviXE58Bz",
  "key20": "2y7isu1BH3MpGx2uBGJRDqDxtyLqk4a88UeXfETqEHCajSJPfC6w6uSBiUYJ9y5jmMJ2RtTpZjbQTR3NEWQRfMSz",
  "key21": "3ryJTzQ6fDL3aWbjRLTxUZ4ndpYtgbwoMF25hmxrNsi8MQmfi4yu3fvb4puABFM667Cvmhhr28qMEwRHV67eJbYK",
  "key22": "cULpbQpVT5xyzeVKn4rZ5sH5t2Vur25ZmShiJdP2gZUGxxEPpnkCuJkB2K7Y6cKwjMtVwRtgupEyauZuLPv9ox2",
  "key23": "3Vv4BA5DW15aKdfETG8v9u9772BxnL9wetMj6G6NWrsSMJWicenqotagZyvTazAnnfYLtnfmGCrHdVF8ps6P6w2h",
  "key24": "3FAY6qg3fy6Fo5ATY9WjKUKgxX1hZp5PXaPLEdskAwf856YL7H5jDiUuRso8ZP3pP4MvjLrUSdgXTmASUDKx7Qg1",
  "key25": "aUeReqhePCAjwMjV84kdVDL7kas4GTnQ2pVTBnGxBMBvtdseCPumtqrbpnHT1UmD6M5TYzAZkSdCuZfcfkYoZuG",
  "key26": "3BjDf5HGPK2HLZhy9V6A9wFfFpu7QZbkcu1o1c45hEiuimHyD7wPUpg76Rqcp56Re7fLxZ8YoNatdwosmMXUUaze",
  "key27": "4cJWpqvDT2gjLhunab3uAgu3TwDroxzfziN7RGtZWx4xW8bjxok8KHPdmKnFdYu2nCk5qrV9a8u8x7VHfyycxGDM",
  "key28": "cZjntMn43gm57FtpYN777pQoyUunPo8PghauqnR9cfzn1PbNhVBYwxjmxgJuzBtW2wdMWdNwMZiKXAUi2RuuaJD",
  "key29": "5bSm9aVyXF2rvcAfAMwyvhmcMZUyQL3mVAVh4HEDoSksXK1BDt2YWwjchpLJ7KVv9KWntJZw88ckFVvcWoLSDhSC",
  "key30": "VoUGR1NJfXfkFYRH6kDScb3X16Xg8Uxayv3VJmzWpcZuFAvhQX6rtZr9xYKbUFjjSpT599brzF1x8qEhSin27xd",
  "key31": "55aftsnbczJgcHeXiqsspncjS59fTYVv2jDgbE7DbTHiUCBUY6s1PjoeK6jktyo3FJDPDVpvyoZoH6SU2kksXNt5",
  "key32": "3jysBFqENU8V3KpxJdVsiXTsyoBnLxRVYs4dQpcQ1TJoEq9JSo9pWjb2sP6vAifaBdddKoZ48i9qQcwKZ53XTe2L",
  "key33": "PM3sKTk5446YDAU8KAG1A6gv9mrXcvmb5K2HTPm3aS3Jmqnbmk5MzzdeXeizBr6A5Rw2WSJgCGKD3QwAk75Lgfn",
  "key34": "5vCRCxhFCvyEvGD1EwP6oXszHf13FQeyXkxbGvdroVrv8DZyEvVkbypb86wvhP7HxLGtCtpBPCVUrSpHfWZ7M2Cj",
  "key35": "3rgbLcnomM3Y7nseuBLi8FYkyLptUGRg8cezP67mnJ4Ja8nMRYPuaGd2CNDCodK7MV78ZQii6zcyw5nrUDap48yS",
  "key36": "14v3XpjC2ukBuiC2zh2vcrVZaqSiPmEdHiS8aQLMQkeHyv2D2MD8Fr3c1LxNYNkoGVm6iLFL3UtUfC8r725kQ7C",
  "key37": "3mTZFskEtgQZ1j4UsBTBti6W5eGvjyJUn3B4asCheaWTspkA7NWX7nxpVkbcAwiLbeBPamKQkchGEF5FMgdz7sXa",
  "key38": "5YQ2diXrW9vm1geZ3QNr5kocHXbg4i5CXLeSNi8Uwwugdj3QbMHdba2gxwgUnNiCyCzsWTZbGafFQP8xKaDLy5Pf",
  "key39": "2PLJmjxhwLJuZepjzuePfHd6yvw3Mn8tTithYCqzCwcGr7XpdQPzniLhBuehefp4DPit4GWCtkdnQLR4p7M9qXyG",
  "key40": "2op838TMMdfko55QYV5A7CTsb8NFZ4WAhrMWLsfU8jLDVdcVh2t6q93Gef2q8SbsRYWsLJe73R7VXjwzGfSxJQ4o",
  "key41": "4oYCfZm2k3oHoSxQjxHZDzjueKxqPZ2dzfZfCkkYd1ibe4xKmYpezv3rGFRqZfW43PJsx8axZPvM4xh9GbN4pU8q",
  "key42": "2xHGVpbupFd3im8diYDEmXN8hkB1tZGkNgqLsTQipYxLwTmLHUctmaJQ8hrFJHWjUyUMcCazZ25ocfH4LqQsTNHi",
  "key43": "2zPSWmJMoCPMLa8QjKArAWFR58iN1eHHu8yoNUz2nz6dER2tKCwqugpCmihU5VatFoMqqvkg6ktGGG7osLV4eWnk",
  "key44": "5e6eGCT6bVAVo2tAvumFiVHboCrCEXhAzVqTPJGa8SvHksafob6bzoX5D3M3n8Z1DmyYmXRihv7y9Kti5P9JJtp",
  "key45": "3FFyz1wLh4aoHscC6xECf4kxxQmJ2U8vz8YEcuLzeYXNgkaaAeS8b6kHZ4Vm9nbpkaxP6hkTsX5QHtfBE48kcEHs",
  "key46": "4QawhtAFWBDVo2Yg7CSC8DPX9BjXJF4X9TefsmT7zbjkTMMSy7PQ1oyTeyGYse5z1dq7p8QWrRhJdb7y7wz5gW67"
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
