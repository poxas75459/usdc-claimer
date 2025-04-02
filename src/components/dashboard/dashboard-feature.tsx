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
    "qmZXpzP92v7bfWcFywrzrNsE4XfUN6WMvmtVPRdafEWwoqjDKMSYMXHRBSPus4TY15GTk61XCKyiZwLmDbb3Mpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45bBRmabphe3n9kHdZU5X77JqBLwjCk2bcR3u2CjisTWAoojkkgsnFxm6Mv3qTsuEZ1Y1jVJPJBx5oMLmCGfASpH",
  "key1": "5jwMEW9pP6AiRLTdx7UYtY6wM4quCVNMM2rmXXBhPtxncu5FCnB8nKsmxFZSchf2m8riTofAej7a8LWDBDvSt5L6",
  "key2": "5HoEj3EPLUzgFEaQbreAB4NfukJjJuPARTfNYTWSeQPvUTCh31CTy5ooeTWA7AtSeVxQhASeV5UrDx95LzJVSPoP",
  "key3": "c5LkhN8evt6gChQtXMAfbRByYTeL3ajmSBHPqYvL6LasNas2cuw2v92QkHJz9C9rpAD2Eh93vLsHWpGzRjRWsjx",
  "key4": "5Gq4ASg7DwobBzqVDhyoqaFUnDSbGAD2ZLLzrqKXSvUjs1VMf3Be9n6MgdkDLyQVhJ9T9miYPuZCD23qp9hiUWEA",
  "key5": "2krGcbnembGgyeYCvk9Lqk4tVErw2Wi7vekFYVWCF69BQA2XfiQxTX9uPfPkNebf1oLu9MoSWXZRX8YyricTDsNw",
  "key6": "YRHDjsWCHTptFUfUFGCHPkZnPKJLMMeetPrgo11aUM9D2xcSqKgU8Lr6yvizoTdP5BJ7UKzuQcohKyWsNHxLkTy",
  "key7": "3xd1ixNPkntbLDnmXjCymEu4DhCoXLK6Jo4KUcauGYK8mjVGB52iidkbKeGyzBKBszruSwyPfmJGm65ENas3hv4T",
  "key8": "3pYb7Xc1qnDYPq7V5Y7MpgDBrmFfVpdUHMZydauMgg91PLmMRGCenh4idnDabPVDSd1R2B5UDoCNC1aFYWdkGsnq",
  "key9": "4bwrzYmHqVeWRJo9t36ZXtYyYZHPtjefCYUs269dTjniTfiVVK7v5hVPjj3AHnNMD2t2xNkWg5btQemcQ1grS9Za",
  "key10": "516XaFhu2iWXVinr9kmAZRc4219pRkgwMSbnXhpz2DVzPrr5QJcNycyjkL6eqZevtqYP85pp8fk4Z8hT4ypVvnGF",
  "key11": "4q8a94HL8gtySF1r5yts9EYXpvmZ2vzpxXyMJ2Ac53gqTu51NqkWvJBUrKrzTharK9udt6LHm5Pf4X1e9dGaD19",
  "key12": "5vpDLrKVwN3AyHY9fzBaBDVrDeDAexahnHqQ9SRDC8adQpQx5h1UmzouDK7WyaH5PUPwsJToA2rRBxELZyg8YVpD",
  "key13": "49cMxaSC4GEL7Hs8YTtCTRPyUx4FBmLXhs8Uu5g5nA2h6byoeemsKi6Ebc55woBjLtWBS81rrALvN11MDydxbEjB",
  "key14": "5nL6KHat5V544wij8FzYe7hM32dfzRhZJdQFP9qmnT7WaSQzqG429vUHfivuTJW49qxktgUvXb94TPf7c4YhnJjU",
  "key15": "3sU7GTJUvwmCfZHX1aktWJvFCsz2mbPm2oyFKQuZSg9kMRuRHvMnN6cTCGYbfdR5vHGZfFv3VuRRRJhXJV4vediy",
  "key16": "Axe8BCn9puuMBrm1YhVTyVE1jjA5QfNNDU2zHQv5UUJKySqUD8ph72h4uLZ6TH9H4EuXSv1oJZgU5xBRTvFkESd",
  "key17": "nwfGm4K2GPBUQ5EUkPEwjfD6fFBufiRLfFtKAukb38mQiTPez32Cvo9sZEFN5sLcBUNRC5TkH8ads5kxVwhLJ2i",
  "key18": "5duuXhRyWLJ8q4moh54e6rd5PMAzsGc9oWa1uSm18KKNvWBCzefb8gzVF2Da9ga5X87vb59rL35oj37NuUa1wF77",
  "key19": "2zeH2uniQDLTgwGTWBopBtXU48BR6PWNWKtCcCwVc2wz83SgExSh3J5G3TNMQTXo1iyWBbRn424w6KSYJ5Ez7khp",
  "key20": "2jNcfzJvQuPwU1FWPBYeYbXb2PF4ZHTHHEAp2mqtx3qupA9zuh7UetM2gikvFE4V3QZ6VYQEE2zRCQHPeTJxMsiK",
  "key21": "5WSAFqNgWHntP2r3gcRqEonVSWky36AgD1z5pim6s1KNCQwdrH9UoBL8hCCN8Xy3HffkXkdmhsWuS6WdroAdjY52",
  "key22": "3wLXr4D9b9YJCx83pPN9HHuxMWamhRXREYh8HLeGN4GZBQbzosHFMQ8LtiHVWKkZNuaKy71Wqxce2Mu4UqcAZXmP",
  "key23": "5NjWuo1gDfP9oqBQXJDDEuzvXUvWvTPy9TuHf4UCbjYUVKzXGYuT2qtfrDnCk9AY1HVSUVYdQ6ReV2Zs2rtokimx",
  "key24": "XVfHUY5egfZTrUukkzow3cX3gEPtCrZidvWgyyGviCtkE72SdDawWrSie8h4sYHRLZ2moR2pvPx63fHhQTga5Cp",
  "key25": "8dCPsNSxnEDdnhVG3LkwoRW1U34MTLxx8MJzLJGvmyjSZhLZHNd68GHqXXjWcuftPPQo3esEeXtkhZxtUbE2MWP",
  "key26": "3qUTKXTpRa2W5wQrUciqYhE5STcmWBDmeV33LzWVjRhQNxiB26ac9Xw3TJadNVfpghWCEXQiPKL8YjPNj27wRxxk",
  "key27": "212gWmHAY73THPN5L843HpTR51fpQthHtTQQJNkXyRRibnH1UwVE4WLVSUyzij1dQRr7Zg9fHz8EyN6329j5cW1h",
  "key28": "27qPfTBzaCWbdbBY32UxLK1nz1dyf1bqLT9SSenDzRkgWZMf8pxeVCarRDadqyph9APuLggd5ML715aEmRsqsZjo",
  "key29": "BUn3vQfwQfrjLCcftuR3oHB7Yj3NCABDt4DGXARqKkXsgUD72beFnxgsrGvC7EbDkHRxw9mLfhZEYQ4UxAUzGbS",
  "key30": "1rTCEPVrpGMh8tTP2FSrQfBkrHMxapFXbQv8GkgdoWzJUdAum4HbJ8wzBSkNa1SkcLrdX6vhAn7moGeW91dqu5v",
  "key31": "5SbpvoqbGRmehsJ457pEF4o8CUUADCjazCPBEQDDFFfLNZdrGYLmrBMUtYKT5RCXPXi4DF79jGRpD5vZLAYAoa9J",
  "key32": "4zR4dBZPjNwCVp3zujPQDviRiUayqKZUVAFUEJLpqExgpT4T8vAqoVqrXatVDmuVssFEGkudKNqivXgPAULVf4gZ",
  "key33": "31YxQ3UM5yEaPC1PEvowuhJY8CCnNehVuLiFamm2VMQ3cakaEHzoMat7qCoonGCBzLRQENXXMVGHd9uTBtHkVr6o",
  "key34": "22mKzT19pXmqVgwr5aicwtEpjAS3Mk8vwjvaNdStuMKDZ44jH2PWJtdgZQmNLydqFHuh5yL5mSWi8jWLC61TYUua",
  "key35": "4BHipyZEDK5VcRiYX85RVMWA1e5Fro15aQgtzCXMFgssWnRdQ4U7DoYppKw7DEBYDnQBMQrX8sDSiiTTjQRLAGyj",
  "key36": "42ywRS3NWy6fY1pHCE4ay6WwJfzQ8SJQWygk81RHzbsjTn1SFADsJUVbjn9cjLF3MbF4FXhXZneeE4pyf5kypgus",
  "key37": "3N2JcagywQicH4bqby9vrg61bS6A3CWqkoZMP3eRE9JXSJ5UGzdfvXw1PqeTQfUx3MxYzBDxgh7DwAM8WFhTLSct",
  "key38": "41PhH1dNbBo9QBrUKwnpWu7EbwgqqMX6NdTEs294GngkquezLKJBPuMB1k8uazqdya3MoCYpppaT4xh4pXTmYW62",
  "key39": "4KYUsXnLxKwM4QeUKgjYUyjbPMas3cDui8G4uQD9PMtptaGSiH48VngHeEi2i8FkvNSBkksUErzqqC66xc1C2JEV",
  "key40": "3cFkuNW9EpkEACFDT4fMhqTTDQQmsJZzFZtJACHBjXCjdzMinUdHZBdE3EFsRxRtPfiPwNrWLQMq7A73L5y3qCCj",
  "key41": "33FCKXh3At4yaAubVzzCqkocP2uthDBkZug6iZPg4r1VjMEAVoQPA739jtxMBFcUSaK92FRFPXqXZDVf4HSQXi4L",
  "key42": "6C99BVYPwpMB5oTuitxcGgSoQzRKfisnqyK4ht3KtULFmabMSJnSm92aNPsrrhoQm1ou8XoPuBZcrCHeWBiERBM",
  "key43": "4yfrvgG8GsurGTQCddWwCiPrYddrpM9uudFDibM7QmnCXx3Rh6hbJYXjyzXrg499k8zqt1FXudox2BPqPfcwC9SA",
  "key44": "5e8XUiTWRLcyEZwXYehmHn73HkT18vD4uBSRvhdku4gKt52D7a3YZABgViMqE2GBSyXtgJSyzSWAd3KLXxRWdFy2",
  "key45": "2QhgmPrVuQV5unLTuqBhdm1FnUbSWRabbLWjh8JUa9JnWvgQjAD31QhBFiTAjQRYv1j94FNMvgHaVCyLnGsFi5NF",
  "key46": "3Wp28tRVcUoNt2QKyJEib7HyPQ3xSeGUX9tw58dfnboR8YBzjWtFu1h6tfwZZdqNCmfRXcPH1kzn1kYGhFdpFCpA",
  "key47": "3UbiMpnqiTsJbw8CBRWwb3cnE3XkU8GVrTzLPM4HLHxSZ7m9W5QiibyrVhTUVrRc8i1GmpSyJCJe3kpRWiRTb8Me",
  "key48": "5qBSKFWYYFScpRsHqsqTyrkc8F6XU3Usykhd9DPBVhxJcZwasM9n16nh1Y6kGo2ZdgaCZJMnSt8pTC3gBPKCW3dE"
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
