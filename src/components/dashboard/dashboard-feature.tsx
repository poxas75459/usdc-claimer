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
    "5cLhtwdgKkeHBUTa6dhquymWcxHP3VJ4oXPDfmDdcbvEkEa7jZyRM9FDLgQt4pTVWDtaZjJmjJFyC67RcVhZS8Yq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dsLZsijq7wxbggjENaNTQS86TYKPHacw5e6K8sfF47QdM8K4hw7JF8bV2naFyRgEXKZYcBuusEZ1wEdxHYKiMSm",
  "key1": "1JyTKLwwe6vn47o94qzbT9U757KyWNeLBmY5XT5seVFyNPz8isf7jA4PDvkABzrd7VF7knhFMViUovn3zvpX75q",
  "key2": "24wCbmRj8Nnczehuk8wfvHX2Hg1MLbbtndYbAgANCr2zm7vges3vHeYYktAmXPR4Ev3JxRsrQgaG5E8JJymUfEEd",
  "key3": "z3QaqgZzFGUrHtLaceN6eHi3aMakEQAzniv4ZbDuQjxCFSdaRBFkakG9VARN9PdpgWMtrGqSp8scgL32qVWZ52H",
  "key4": "52VD8oc9UjeJ2rQAxR6xmLJBimJicMryNjgjdRXd8SsWsmw8boZdhavMc54kCQF6aBi6FT1KVSGgajHWXTAsJRUn",
  "key5": "3MqBKKiwvaUUzQLyvCJneZnHeNJxC5wHwxsiZAUxHw4D4cC5TkaQVjLeg8N9WdzhnxMVEtJttSBdgiitUtLKFTWZ",
  "key6": "3HWDNhYS5nBGimKf35aTRQUowPKHpvafJfu7GfrYeK8BHNH9vVCsPskJV8WFb7rLoVp4axTWnRZZYsXkn8dnZbNU",
  "key7": "3hABY1grEAA4ZTPDs4Dv9KAqMaVw99V4tf5py7YPkKBaS7Vk2oC6e692Pp2JEARrCgf8RvtvnkP5m2VacnVhqH7M",
  "key8": "3ohnS7P3PiWNBygtvLuWP4m6XGdYr66wVkmM9MCqXTjUVCZq8EcxJVcNQEzXiUcKot5YA24PyhAWzMjiDdWYKwD7",
  "key9": "Luzi1jDLT8eNxBTVbpix7c6aKoCY9ADpwiaaUT9r1Btx17Vq6o9ruCxmfgFsuB2uMkoK1eqkLEn6S7Gx43uhRZy",
  "key10": "4x2AAw5SwduTUJKhrjxvFS6aupbDAzKzgtDbjevi4JveVGK6bEbH9GXnmuWdQw1H4SAW4bnf9s99gEUWkyDTNLMq",
  "key11": "47MUc9bMQvJDTPCRusV8TEgSvcGAWtq2EUyJGTip9QJVHLb5cEr8uA6bvdpofZbcE1vB9uWes8u1rTuob6HW3KKK",
  "key12": "2wZuBzmGbiTTQHx2DG3UtyZfUBixqKQnRMKQrBifQKtJJPXX8T2yt2nsSAahuqLWhpjYV54CaVmiHHyfF14kvchW",
  "key13": "3otQ1HDtgBoxwFvF4KEeKKDXt6DeZegxBSRCZwy7pYSddP6aDC6PAu4uc714mMqic7DmRHq6TE7qmyE1kXWWBjzU",
  "key14": "45nGGVTAYcG46SwKvd1UBMLwXVvvmaz1UewDgTnWmPVAPwP556AEh8twZ5AwudYjGAo8VcXAd3CaMBbCYU6w6gFi",
  "key15": "HDHk7pmqY1k9djz6iD4kjqnz1fUwi6sq7tcsexe27VxgfHSuUmMnnXqvRurk8j67djr2s5YLFiQRzroyTzPDA7j",
  "key16": "2XCvz8mU2JrvD8QYapLN4NLbWPovaUsKmitDcu97rpWWZ2zbzu55Q3BQsWGHMSJcZDKiUk3EfdSqwh9v2LdyQn4U",
  "key17": "5vxvkw7zwnyEGa8691VzmuKKZ8HsmFWiunREtryzYsNTk3wmUNgfjbk4aBKXCttAuSitYnSvZZknHiFEaCC7BHFe",
  "key18": "4CpEfU9G2kcmPzvjxhBwqF985qZENA5pnuREQwurB9qcC7J4Vo4r89BLF44Wg3ZnsEtcELuxwAkxPt1pdXeMYRh5",
  "key19": "4WSn4HFDateieTGAZLJEG2hNGCjtsvDH7KJGKeUMeYKHxCNX5mSRUj6bbqPncuXUurKbTWboUZRsM51T8yCo9hu3",
  "key20": "3outKyUHZQkxVbUs2VU5SBGK6ftTcrS9GYeEnrjyFWDUw5r2d5VzVM5U5hswqkfqxDyQgjJUi796dMnH8sjrsr34",
  "key21": "4F1gxUEyJmqG4qYB3dcWvnoMnwHsy1JrALiAa2S3H4657HwWWaewv5mYijqgisdqzFi9dAPbo7dASpcueUeUpDCX",
  "key22": "4cUQSYV6fyZJNLuqCyAHBPzmZEGhnDYKWtsG4WYGsYJEcBteZ58jXEAVMiQeVo3p19tbE3vsPvhprnbiDifXHvHr",
  "key23": "24uuyFUoNo7AcZLYLeTd2Bju34k5ijqMMyVHkRgFaSmQ1jP1Ao1b4XvksS3ctZNoboahELUztVK1Qfy1PazkGuDc",
  "key24": "4zQL5QfBH9ycV52WEGVbgyY46HS4at5UZL4CCkSLzFxfgELf2VVCYQcKi4VvuhLGqQuaN8cugjBGmj9pzmcA4ZxT",
  "key25": "3jGeh2x7bgpkeftaUdAmdaYi9KmkYYsjZBY5heEVAQiZ87W4f2ZyYpbPVxy2H7GQAFNQjorqMcjFC78grnLiLSnS",
  "key26": "2uNYDTkLDmwsFZwwAAieevq14YrJ9cw5RfTgpY871VWnGdNpa8mwU2x9tQQVUfoQP6NV4Feop44Qfrxivs8BfZAt",
  "key27": "55zXATTjqDEAkM7AKiitx1gsp8X96vXyNXFumgtvcHCv5uE4UsXLoKwZaNi9xh6YR3DWFiTAMLe1jT2huH2WifDh",
  "key28": "5QC2QHThztpqU3qGP8aRuXTiGVjPTjFSFTyxWikujDdvv143atitefyv7ccJaNgiPjVJ9rcbTKeDGnX7kpEHkH5Q",
  "key29": "3GUQKY2tcQTLXFgLV3KQsYAu8cYzd2xtkcoa3DryfYmhWeqbgVupwMCcu2bnLNWuQQx4Lur9DnxN9xPbAxFtm9Da",
  "key30": "3L9CSJQdHMkGwsT3TASkL9cbvrzWpE3BMFNkYmSTaqUv2fQdxSMNXj1tedMFKP1wSGoFYem4z3LDNrFHSZUCoVPq",
  "key31": "ryCvWQKeoqoRas9BvTJjCKM9Yprb2mt8E74o4AbAXPX5LfVLW2b8szY2UZJFtmyRYFGv3Fab6TDEvawvcwJHWD8",
  "key32": "rWcNMQqueLV6iBS4fta2UAwJhb1sGAKU6sS4PRDibz2GEi862ApqFSr7ciF7HzLxyhCG6GgSan1jJJw3FDhj45p",
  "key33": "3bqxb2rq8qWCEymHUphF9zXxsLZjNEXyyPqdwKMW8pCVddrsj67k2NR37QNugLg6ntxzNcBXQFVT7CcsdXfEqBxB",
  "key34": "3RLojHcwtb7WDphSKvTC2cZy4NNBNnfER7Z9Y2N6eLeNpSspFvXNTFgqFJGQq4MBXwhMEAXRm9RCdr3Sw3kqyHgq",
  "key35": "3BXXYn9dXMY7TucqaXLhwiphKpreo3ksqLKtmsMykrvCqoCXShRZQuad1AYEGYtgQANuwgEP9hkzDLHFNYUf7sRC",
  "key36": "3jyXb3ToJ5tePgbYn7srncZvGbKtM8tEw7E5mnWKLgGZ8A8ux3ZfVMAsxSmj4LAQxT4mUaXaTGUECrD4LdYmMNUZ",
  "key37": "2NhHoYdW2X4Safdc5Yz5Hou3NwDaJxWXTA1ZCwqLznxiR9kbTu4qyvDB9tY77nvTEVxbn6K45muevzvc3XnC65uY",
  "key38": "3mqbSWC5rxEUpCzV5DvP4XZMWPiV2zFAsSWUb1ohAiuYePeXTH2LcGWs6tUucHMvQvMzZgJh59gJAetx2hqNmK3g",
  "key39": "2wafNdYW528mCZgxt77iop4JBqQQmqGryYBVzk4fHSniazFPVAi3EqHWstkXBgEfUxRfBLT4aLM91YKGHWHc3M7P",
  "key40": "4fiQG5uyvLbDKBHJ4rHiUjdf7PtGAnxWKyRfxdE9QFFndCUkofC89jaR57sjCLyKb96r8JKGGNrM7CoJDJ8R2nZ1",
  "key41": "5vRBvCb87BCLPTKoXJPPu7gWMc92QZbDvZBCt6FBSKmiKx8AJHUoRwC3LQmQkYY12cJF18sdQ5kHx85pzbDruPrm",
  "key42": "58nKwYnqCR8pyv2ATQtFSec6tkyfZTR3hGn9dcy3BW5fLEinvgMwGpAhmnAgujRWQcgaofi1adtWvPAAdMJ3D1H5",
  "key43": "3d7FAMbU6vbrqCf6JLw7vSzHcBYf5BVhn1CJ29SXXz62PBdVrrAw1WYr3m4eUZoPYxVBofoKrpB1A4UfgXeFtNGQ",
  "key44": "SfJsHz9NUd2E7B9uT9S3w9gRqNT4hA5sZmMcHteEhyiYxL7UynZRqRysTfmowMUEjZthUcbJoP18aMuko9yYjd3",
  "key45": "5ACch68v4UtDgkvxPnxbr619Dm6D9YEYt758PfHj362vPg9xbDhThqVSkv1PCbt5qP87TBkfBWrJqfYNJ3GQM9uW",
  "key46": "4d2Z5YBtY8NRiPAAt1HmcTthuU7ra8AWYcFJcUMfpVDLGzJvgDZa27eBVrP1d84t59qNW2RdxXkBkzYBmPXz1qXr",
  "key47": "LTcWnBoGZ64tvHCzknbmT9NKUKqTw4wuf41v1egXyRnn99s9MGdMybgER9eNvVH8kgQRSxPhM3QY5HgNwYoZ7bo",
  "key48": "5dGUEz2qUcPpRMAfLtcUFK4ipMHYqv6c9WSZfHQisiE7FbtA8dafUhXzTtXvtrzPMWQU3yTuxkLHjNdm546XrgEW",
  "key49": "3CBfwcUS19S68QXutLoPwHhcs53HuBRx6kfZeHAykRWX4p6xM6EBkajS2moS7GtLgkH6dNHRs22ShDU9npsUjm2o"
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
