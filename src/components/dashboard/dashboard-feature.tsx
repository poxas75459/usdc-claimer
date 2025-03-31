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
    "3m1p7tm8dy2Cbt3rCpJq8CyJjhXTDxX6ENfN5rKWuBBDcuzctBdJMQvdoB8rY3XRZ4D3DsAJQp5tVXzXefEDueJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UpcdyPPP1FNEq69VCK83pShvVCsv75vPsQm2D3LVh4Su37XuMqpZXDV4H3YzWmG412bNzEvVN58y5j8hMi2u5wv",
  "key1": "4Tng2DhEoySo6H48xWA8RpUiiJMNHC5DvXDS4tUSSez88TsNpPJhQpmQDxkTbN77X5zaY6u2xsPiEgWKUndRVKj2",
  "key2": "g7BLqMdotwQHX4wfxT4ofmq3Kdg884hh5Aarc18Sr98dRGWH84CzMgUQ6AGFHDjRtecnyNCsTHL6vEaigk7NaaF",
  "key3": "3DK2YsTNTSo8pVMWdDenyreQtb9Tbg9xzBt5muuj6BK7xh7WZ5Uv1jmP8CUqUks5d2Yt9g2BuGipbXZDLR7cUmuR",
  "key4": "WXnzKruKPss1yMGUvksfspjj9dTL8NBRfdz8XbrrxbCQyvdn4jw224wMqdGmGbmPxea5uURD8bsEhxY2Fpbwg2Y",
  "key5": "3TQQ7NZRmiruwRhkXiCLeXaEup42zws58fkJBEeXbdmEtg2WjE4vByWg56Q7gB2iWJjX2bMa1B3KuQaWzAXuZ2gb",
  "key6": "573uovhpMcgNtNJNAWgxsMaG1msVUKjVxMeMqtDi9vieRUeK7yuB4rV8sQMroQaAFizooVDkJRiH5ttpeASe51Ut",
  "key7": "TdxTSBU2DxsjZCxafWcygdPmMtWDjdJ7Erv2n7hRpQJViGXrWx4ET62DX2PXV8nf1KnDSW1QUvVVFjgofhihStu",
  "key8": "4BBABTFkYVRUKDPEMKEnAhR4ATj9YBoy1p3vJ68i8cKGkqY7Yv4zTZVewFEphnFkzvu2XjRYEwzePm2g3CvGCsZS",
  "key9": "3F4WAixNmZQKtQzaNTvQ1AJSnRa4j3eKBuKcrarV3XFZqt3LHEhnFix2KEneRstxhgvVTdX2Zj5JxPzSAmJBHptx",
  "key10": "2RmKqwLgJdNpNAveGByKqX686hnFDYzwVYANhC9uFKPdtizoaqk7hoSDN6igqbCeNSKTHLptC9MpNg6631RLVypm",
  "key11": "dn3fu4iAXAFWMwdG6S5d8Wammy4Qrfsckfn1gGHokGBy3jwb31zuPrMhNjUBx3cENuVHmenV95A2LYtNnmgrsnR",
  "key12": "vriAJ8eX7kk2nWDGTDrmSneXmZKn4Wm44H8aFc8mHMSAgkcQFT29LS9mE22efFKj4hn7GVGfU3jcAeFWT22ftCv",
  "key13": "5dRj31mcjmkAHaie3AAVjQMqZDg5dSV2Kevhi4XJr5y92vQuW4yFMVRKNAbLCthZyCdpycPnT4xCZF4PkHqGkywP",
  "key14": "5i37BpXvZa4Fxv8RKbQhPHbq6F38tcTmdoNaYcSVDp8f3L47Lm7M55MFMVmb8gv5aNwY78a5Uq5MRebo5Vcihtxm",
  "key15": "4RQPSSXofPMZbRsoejT7JR74LHTLR74n5sVWcoC3EbDR4Hg6EizSuDt7WUjmCAXSYKuTZtzCcXe2kHSCNxWseFKY",
  "key16": "2abfEESZoPfvQN6HExqSe9RBg9NmqFdYsU6BGJezefYF1BU3q4gwN3bjoXP8hx5m4y9peH2EnBSofHNw9dMjF3dc",
  "key17": "2vBP5HWEaxyKWny2Ugh565FXTaGuxthy7qytgnVeKyz89oUyiPqjSJT1cciMrYv9fQrmsJn3McEKp1syoikL7evc",
  "key18": "4VwqQPDyWFcBYXTL4eqDJwya5Vd6F9LxMPZyhVKvnmEjBma1VCfs7Q9EaxCNwFm1R2RcqDNJ4SWR3DHwHrqkFY3d",
  "key19": "5oRZxvcVWt4GmaPQSC4HVzDCsLuW3rgNHAX5P1n35sJzCigv3wfFqE3G5pyjB5N3MYkw7NNTW2aKjJA2gTgNBGhQ",
  "key20": "2dY2viJ3jDodz2bHq4SFadxNvyxsjMtVz67jFGXtSmkFGJmLZNcyDLxVfnBxQuT1zwSmfbQR4cF1vZdweV6ikmTe",
  "key21": "3ynqaQgdu4dMuqgF6HUJKFwyuJeDyJPv7mECNi46BMeRUCckA9QXsQLeboJrAiFAXd7HsGdqEug5RPwMK6stqHhn",
  "key22": "34YFH6oHV8mWSdR2sm6uawpc8HcFuaDTT3YD1g4yYDufTEnwwCppsaZCopQz6EuU9gTYbQhm2j9JUPaTcy8b8wrV",
  "key23": "5KF8GD5H9LQ9yuSuN4pE4Eo2jH3biTJoDKZwiVZ6BG6KZQq7cH7rm25yDeXHj5YiAf7BKxSZ1ueypMV7fZE9V4W7",
  "key24": "4MdctRwVhK31s79gPrcnPcdwnazNkFgmoRtQkqZiAr8umnU2pEv5xvLJ2tWMyhhSBxxau8ZPtpyRXyr2eNVqevTb",
  "key25": "aZGNE1qLJ9hB79cL9oFP2FRmNtyaxiP7qqdum7TGtdcLfnTBdQRxwcHGjAqNxYs7UfE2msKYtMCMupFWW4WEcFg",
  "key26": "3R5G5ePZMWE5UupaNtLLk4SMSUqf567cJmeqDJo1ANqFXqGohR6tdB384RCDC1WzFMdmQ1QeFwfKfcN6BkSEtXg8",
  "key27": "5tz2Mj1F7jzidZoJ1NZc4Zx3zNJ9uj1h4ynbseXGuiVCLnSVS2F7b6M4t6h1MPnMf5u8q7dUwigXYDegqNdTVDGM",
  "key28": "3aBALaEP9dHHqymY3CmSVTr8rFvHL5XvD8d6S3SQ3fnrq8HJT68foMdhQRSVdPTLcbApojvEU2a7JXtvifkPjHYM",
  "key29": "isXgEF9B9BH8rq7nvKpsSUoX5guqbswqkGhEewgNxH6WE5KCAWWA3qQq1SXt9EVLTV2YGQQy4DqARshJs1WkkTe",
  "key30": "3GYwarBSxxXjdFZ5X62vuFUGBmJwidiSheH5HFVipVSzpAibE29YzV22a96VuPgNPAE42zc8P6SFBdxuZrUrrHFH",
  "key31": "5EVH5s7y5fy94ne5npzMVKwm5TXe8F86j5MuYLKMPiChxkvUdLXDbJrWZqiaQN6b7R8tyoykcGvasi6rprdw4fYv",
  "key32": "479gNgaANsQkjBYRDcG3vWyKRRKCK6dUG5SKUPXDSAHCHVncYh8aU5SipfWfZQLg1iuk7hLLrsZb4nkiYDmynv8H",
  "key33": "3e5Wht7cVuK9dst4E96XMKJJ97a5J424BqDK2gk81Zhb66rAmWZG7mLUB8VjaCF6hwkSW8F4cuzH2AtuoWPJ98na",
  "key34": "3eZE4iw11pkxqmzf3cBPPNQimVeBP3mxCHXgkPExrjVxJ17vfNFCcffAmAX8Cu8qUDNXovdBeyhbsS5S7WAggw1g",
  "key35": "5HiXq7cHjfN4EPYdU6ZfiGFYZKQpEnjakErdqoeAJ6A9zfxsT7zfEubTnkLXeene63UNazkNeX6GRggtBxih3djW",
  "key36": "3tEAV8dNrcw3wBk9sAawWNrpmY5es46dTpXB47X9x4oV9CHuYh3V8hFUEcUDjeBByd59KF6B2zuvDPNGhwzqbv8d",
  "key37": "5BddfSWzdToWSDytUKK2GwRzPHorwXDtgM7H3MHStpTJTjj2PYRQDGBadzqeeLJWKSzpik4KPzKgLpRWg7wo5C7m",
  "key38": "31iUPgnWKuEXGfG8EEPs5Qea9RUAZdRKerQPfJJg8gmw66DPkwh6h188yEwQzuNPD6HQrXBosuommsge8YhtPs7w",
  "key39": "2zN13xK9SqNPeWpNNYzd6GLLPH8rZabSfCJzbiAiRBZaZxFEUtHNSuRRbe2X3KYWwwgpVnNYstukKygh8NVzijyz",
  "key40": "2AHiwQURs81xxwEdqPGarm67ne1ubRuoMZWgLAGmtX1fa2GFkhbKgDNMuSvBVKbE6Db77VwtbcnDNhCv7rfi5HXt",
  "key41": "5FsReRSnHGprEsx7XQ8nRYuKqbgSb4XhzBVME6m3kkQCHCyCdp8cVUCbiDGAKms9tD9KgxKMG699Ep6bedkgrFFS"
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
