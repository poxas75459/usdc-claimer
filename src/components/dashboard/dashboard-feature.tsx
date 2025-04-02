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
    "hB31WpwaP3Gw7HuFEgyaN2ZT8fBwxbj68joUGLABrUCtEwvzZBpSbbmznAxoNV4Zje3dUyw4hbRDmMLGpAAzQRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qm2MDvcNzTh3GK5oC4SDd8LqTiBPpBY7CHyaYZyrF9n4Q8cjPj8DzrG7vwQ6Ui4BEvw9TFJYvnHXeqUoTktuYwx",
  "key1": "2kTPzfSuPSLV4cMZYSW25RBp8GaoenWMgsVdreWF8Woz8b1S4ZrYCAqUVcp6icYATY9eo8dGkjN9KWeUTptdsNtw",
  "key2": "2ReWEDrMk9vu63HHZ6v22q3xb1NzvNHJHq4cVVCLFkt9r7ZocoawPi46VdAxEopxj7ECsaXsAnJCTvU2wknMjmXm",
  "key3": "3cbqQBiMs4t5xKT2RtPfqt5Bsgvf9j2W2JcJXUinezEZKaUQ2k4HwuYCk4eA9A9sYtdxDvBkLhhXD4ZKeTpqgMr2",
  "key4": "3W11CHwdwz3FhRENXpazFLxZGBgGSfB4KEpuqaGmZiJbXbqWsCo3yCGhi2QF2xzf6V1295ghET5Z5uYAYWKTDHdh",
  "key5": "51ii64abh1CwakkThTp9pacB3A8iwz73p5WJbbfBihtxJktxYnakjG8N77zqoBgsUg318cNcz6H5uXuPf1yr8htj",
  "key6": "5wbmxw4o7WKQ3kPYWfKjitHduJMCaWpiC9quGg3uuXrywPYDti29x6Xzbf3cNySe7x9Z9SvJj8vqg9cD62gVfMwo",
  "key7": "5EhNToviZn542DmqsBJrTdniasRd5M3b5KX4ZgPiHSAvnX42E9RbrziWgJuLVhjuKjDZWubzpyHkCDrQZe3Xpr3d",
  "key8": "3z2MrKZqPRX4ovqhhcJCY5MEQwMQsChnLQLYF3S8x2X14xNtD7yFb7fCzQ6iEgBDUSUMpZVGjSfKtSk387xz8eLf",
  "key9": "4A3EWizC2GSZgZ1cAxdX388idaCSMW4kqeZ7nZaP9B3Tnv1AFj8a93XJwAAPiSq4orxnRp6tQ7AEgfRWbVgnZRJE",
  "key10": "41fdjPJV1TffAEAFHt9QKpEPXRwNBYBTdQ5MEnZh2dQXhFB3HDEYLc4ucrT8NrFQYbo65c47JMYae153LF4giaPg",
  "key11": "22ZA1nuhfs6ereqRquDMoW7rep2hWZ3qedcAWf9NhmVM9z4DdTavfBcTe8rhkZ1KT4Moy49HKaFZ9VYx7aT1cG8F",
  "key12": "48UkS4TdRbh5thsGK87kSDTDmgjrQyz2CpW9GX4my65GRCVSZBeG27RCQWXenUymAu8EG7ie1iRJCkSFQURkQytK",
  "key13": "47FYeyk4xceuwtcPg3w9C46DanTuZGeS742bnm7v7pm25dAYsowT4rE4GpsU7apUkuEh2bLXf45ZMdYFzYVDpEBb",
  "key14": "2QtBzewZGYSBWE3QEyJ43HvfFKv3b4XNRWZCq9th9nPDz2JWYpfdekSYmC7PmXHNtmoXrEA3DheE1NxXrXRvvzpp",
  "key15": "65bHynCgNdp9UWpbGNGaiDdQAbgSnBUjYZeNiWfi5VHUuSZNLJBuFjZUs8YKK2yKZfGegVNq4wmdLXTYurM2iR6m",
  "key16": "2HhCSt5jB1uXM5PFNPGzrL9M1xrWQHd8DsgaSUetPJcEy44sUaezvHfiuiprKjinVfxHGprVZWBfXc15DkKwMc1f",
  "key17": "2z6f9WbsAwUgsNgg2c6pa3JCeepMFjZjPwg5R4mXWM4zwVhcqPGReNqoTg2bFtht1LZx4h2iq8jiPV1sk1bJjups",
  "key18": "faH7gAyx1rGmMZZ9qSbt3KcZg7xVwq4pNcbRJd9EpGnmEn6MJf8bPigq7MjDfZat2AENocmysswK8hzqfHpB556",
  "key19": "FkGP9Z1Lpkna2dSXYVSw3t6yrBKarWWCmJ4iHFze7Ta8BcfzbHBmhafLNR6i737xN6RmasGdtciUcF3aiP1kAjd",
  "key20": "5gbfVWJ9hVCucxPytLHS34kKzqAhNXapzeZd8JQ6bacNUM46wHTFdXgKkNgf3Q8BHy9k9oFr3pbnPL7L6XSzpr4X",
  "key21": "36FmzTn3BMPo3z7Hh479iNEkCRqJt3cV4Yob2ZqGuvcBHCkpfWTaWAApF5fHNJraFaN5oDXAoL53rEM9z1Y1PGCz",
  "key22": "46Ma9GD1XrQoy9cCytdJwuHiSS9TN41jkuzxbgm7SznR93pXReRxhMC2Vn3PpdmYKnHXU4QyKPHY1VtSFEJnk5EQ",
  "key23": "3aGEYZgBxCbhFF56cDTXzc2Wzqd8XYg5dw3jKFMkb2vTKkmxNSVJodBtiAxKaiYCPdpShjQRier6ysyghGx7AQ5f",
  "key24": "9UBTjEJfvGL4rPnJF378qTLoE7G9qAfSnSuQb45HCthwHNHhZcnVMrKkA5Yvkh1rGN8s9UsfL53ZowxVMTpiau6",
  "key25": "3HqxBG5hGjAvr4AV6PDnsMEoPmBmXfZC7eGxHHKsTEywv2EHC8F2cxH8G5pygWGu3GpBppE2pWR2KsHnQ5uTeix",
  "key26": "4ydFBrpCPL4MxnddAurGF348svAk5jvXX7CqvLkHxcDbNqLtWC3ruFCB9AyfogyGycbn6yo2mz4J8Kf4HJKCDaNo",
  "key27": "32MKuWoKSH9TmfhvxCh6QmdTYyuYSp2V8AUX2FYRHAkJ5FMBLbXW8x3RAqFELkRVGQyxtoeXCKA5Fm9a4gAcokkx",
  "key28": "62pUwXCSaP5UyAyiYfuPLikdJ3Vk3jxXQcCHihXR4VQf5AbWA4So5piFJMczhWXQo8cDBBCBM5mskoEtzD4keqm1",
  "key29": "2jMfGVGutYyTkx9NSmmGhk5NmmZ1dZ2rCZkBEeF4E1rF7Jmxj9gABptwbTagYeAPXMHZA6CSet2FmAdcz5bkYAqD",
  "key30": "2JDFZPW4h8wX67YEEC1MU3y5oZRmGHvFCALKiUMjP5VyoQH9pD7Ks7R492rYbyR4HyK2Mu2qZpkFa58gHA2J18Wg",
  "key31": "2NbrwuJqBTTB935QRbLsdrk8kuLJABYJq69K94wtD88ewcxTLeipGWxWxsYxUqH6fsVJF7f3zWsSckqzNWtJx7kW",
  "key32": "3NYrAFVX3Gq6o5krGEJrTdWRcaNoBqs37AmuLxBsukV1yDQZ4oMaNfRppkDD165wKgR9mAQ6RjHyx1kxGLnZjj4a",
  "key33": "668dxtt5YzSJQaNGYdCKNHNYFqPx1ZWSaYauXGtzzZWEsZ1NM6QN2LYYZa6UEwgyqHGLC8bcTiqsKcc9jE4Ybnb6",
  "key34": "wwcNwGChQ45eRWEmHC7A7ofokaviySMzvyTcHLDPB8Q8poDLKYvjG5RKzxCLUsjGLAFBLkMswPWuUdwFZ6K22cb",
  "key35": "2jyY3d4Ay4em99RbFefyiLK25BAyiAR2sYQXGzNxT6dEuDweg7pkvd6ayEZAUWCm2qiWVkUgxJE6dnNLz2pzp3gr",
  "key36": "3KWyAdKdrffhc5eQQCCCmsth4i62KLNtSyhBvs29FFQv3BG2i4WmtVbB5tHv6GFx5pF4695sA7jgwztuJ2dNt2CU",
  "key37": "2P8GqTRD3SvwR5khfgFjpvfd6b3jScCJZJDLzcv1ChdRKvuD72P6bLqPcpmy2zbcXE9VpS55G7ELc2vMCpmGQdfn",
  "key38": "5BvAHj8rQvoYiQXbeLDBAtMfUKu4cfyBtqVhFwBU8Eh6nnJPDis918qs5zrBsGe7VMChvTGrPqEehxQepV8Bs3RE",
  "key39": "4am4Qhp8Mb5st2dCMLVkA1TZPwu4CyGLTXjHtonsotRJbB8oQZW9hXmxUBziwinQ265xdTzYfG3RSg6oXPZpHCv9",
  "key40": "3CM86WHc4dtxRCxTrmMxwU8Mjn4Q9V16XFADmjsquD36ZGt3PihuzFQYDGvuHLLcWieb4HEQnNnAzG4oRuN7fxqU",
  "key41": "3JdZRzWCNB6XRZZHH5gQXCgZTkbUtW3VvqWdjoko37As8jKfzARAX9KiA6mEV1PuNy8MYDdxTid5DAL6eeMsVRBW",
  "key42": "5A8pQxeNyYroULGWETqgRpVcjmUEzfEAvM475d9TFv5y2GyRe3qPBteL53Edvg8C5bus5hTU8sKP4WH8KzuYNy2j",
  "key43": "5gjijb6rwGUzK3LVwMMYwBBuxkys8XMfQhMhkymmQrfpyptfw8hGoRPeKuvF6zjEVcC4EsAXJbuGdN6UUnsrUepj",
  "key44": "4qFG6cR6htkLXCqJbG6h2He3HrGrkjuQz9A7SLdPFVSwtDET8MfvaMi8dxfpwCmU5kd9vcQviE6oCb1msQgMBXvT",
  "key45": "2YCqykawKRvjq5s8yVyKDhTLv8U65MQEpshzNuJfBNMfV7gVnojSCtXP8RGCSfmAVzcsfLAdpAeKTz3z2FfnRcy5",
  "key46": "3vVX9CiR4oDGecvnVqbsbV5Cdrwc4HFUsn2fLDxsmCPtmgi3GD7otrs4MrnKeKHbHcqWmZngG14hQ6djzfyqHj41",
  "key47": "5QD73GA38dTnkY1f9TKY1SwZ9ZNMdkjTVYwCAtwoSYVKMWn1hmcVoDjeiGp8GaMY6UaaNCrtywNgvZ8HUPL82QJJ",
  "key48": "5kpXsTSv3A3NVEsWM3Tcz93WuThKaxGyu3jkTfbNCQPv4c7vQAYt76v5SRGwqAxSyv7iED9bXvvVKY7961VPqa3M",
  "key49": "hJR1ET9Wjsjsms5ZGR29fZARKLPBCA5Cub9uG2RnsJmcdBDdwv39zHt2bSzT32qbzVQ2dvyvkaLnHJrqTYKd3E2"
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
