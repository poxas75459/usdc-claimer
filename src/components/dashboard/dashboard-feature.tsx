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
    "3mHxmjGdFJ3aepmDmw11p4w6PnPWBFBGEPpnH1wqDDUMk3PBZVU5pejtWCt5mpEtUdsz4rtZbVZq3afDZNsgCTrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66D4ZBLXN4w8gFnpcr6sjcaEKDWTd8SaxHgaeSCaKqGx7RwJy51A7td4G4fFcpwi2Bw5BhzKFt4stKT7MRCwKZoY",
  "key1": "39RX9FzYgH3C1yB6xNG4cFBSSz13C6nDMtCguSSpJm66ihLBzRtNUkPo4E5i2EYPenzxcy6azriSnfPpZzDAtFpu",
  "key2": "2zuMS3amjZykurhgn5bVisVVkj1QNDkz9Pc35HNzsJxSp2mWiG9wTiMsJDEAUVZxV6Jjrj3PMZFH6E3h6PLEuPBo",
  "key3": "51y8FNh3ZfDMvsuWjsP8QXwTtziXhcCdSPf23iBVYtVjZEsURNn2LbzZf1gGBXBTzZ1EXFXCsd7tT7TfUgzDPkSF",
  "key4": "2MPK8rAzzAYLtxMnfjtUaWTd6ofNyXdS7yN9xgMQiSNS9LFGKeM7Ew9EVna2btL83fYxF9qxUWysZQa11PBLmGW",
  "key5": "2xA27UTLjhfXCP5kjA3WzethqJrsyrNTpZ9De9q7iavFYmLPioQDLoaq2WgSRHwqbQQTZfq3pRAKya88Udh2HGvY",
  "key6": "4YxL8myFdLVCNYFS1wQFQq4ZHDbhncaLXPiZyDSigFDvh3FspqXVzqSCfG2TTQBKXcW2u259KSWnx9tdmkAPEaF",
  "key7": "4CfNHohGfmxEmZ3pouttdkohJRtpdqTNZHMUGYEwF7tGnT3h31bj2A1GtFbTyCtpoRuPeAjKfwtLmteimgmNN3cN",
  "key8": "8ueKanZN7UfEDhhU4ZqayzH2L94zdFZxAL9E2crse7sSzmBpPkqa79TmGEJ6PJNp7otZSwqxqnSH3TB4Wq8Gntd",
  "key9": "669Rr9ZXDYUZC2K8qodvnrbjxt3Uq3EeeQQi5WWmjXsaeiCqEhgu1mP1rK5spgRDN22fwxoogWAA3FUQtjxYa9As",
  "key10": "5kQZfePz2qrVPadidkzYCSg9ihU1Kp7ZNzKAieFfN78v3o7coc2MbKccMivUkA1maD7c4DWrVpUA8vnxyaegVhkh",
  "key11": "2qE8cFDDDUKUghEvGys7ufxhaohGWZi8wtqb6nzqj9rzTF7yMcqRTj7YZ9PynuGdASbQ4doD6pB61Dg7us7zj56R",
  "key12": "4VmzH2LMxJLw5N48o2mCjNzGm5dRVtR26vx8vARwk2mVAPqinKQy545q2erLnghLponXd2A2wwn7LB4mW5zUdSR7",
  "key13": "3rPi2Cr6GetnaoTKCXAsfGunNFFUsLDXTs6hqLKHbLiSCMYtZK3jYF18aQYYVJzMTptcsB2A7TmYu47KjQ5gMxAM",
  "key14": "2w7ozNgKNxQUnxyjWt54uZ9SuEzyxQ4TwgBCcwPQ7podUw1DS9tFwLqQzRCGo7bJCd2EgV1Z3FQxZZECnQ4BVvWk",
  "key15": "3sag7FyNJzXe3Hetkq5TUaJYsckLpKkiC9ouW8XocvkzmZeu8LJF79rahTzbchiC76H5pP8XKLMjgDCaSMVrsEAk",
  "key16": "5RDkGZd5TKGodQMJQLbLkND7JZhVhGuX1EtP1u5PSJD2q5NUAVhprSwMsXU7upKThNBiz5iEmSFAHFbC34FNQxdc",
  "key17": "FPhw75JDzDQeESMTu6AwLFLbs9CtNVSgmU5c4P9bBzaL7jysZn9BTyfv5tpndFGurkfwPMPE65yrB6TCXo1iqS3",
  "key18": "4EiqQ2GzYSnReYCdZYzt7o4tPZVRkLHJXM5PedGmQbVgFRFGMaKTJJC5rHhePrES3tcDMdeXEAZqDPWwyaht59Rj",
  "key19": "2LAj9HHiFAgFWAembv4iMKEKcZnHjCPXixEkLCwXVc4HYEMRTMTeCv4EjQJuRnPCRTV9dgDJDmdiXvVxs7RsW3ZE",
  "key20": "8vDKYNWnrt6NYWAZ1dKVQ9t4yYnYLJ6ZuLgZfWhcQ6FQNtE8KENDkxZX7HtEHGivJAZvDgRz6f5azjDy2ZLtTFh",
  "key21": "8d4uFP1EN3jd4dp4x3sAEU7J1vUkjyTzjBdnzpHRysrWUSvdrt6A7n1K6NNMdHtrUjxRiE3wNqZt9adTfbzrUcv",
  "key22": "44DSEaUTPNbFoLRSDr6BbHb4U75jJLiv5e8tjKGFXvt5SXZGt1YpiETmXfuCE8A9ZatdE53PmDdFDi5nR1BX7W5b",
  "key23": "5H8yaD1HogQ3hyoaAR2N1N5mnihPt3jHwMTquNT6pBgWPQd3wATuxddi9jdxStJ1wvEy5btWkLACxAETRZ3R7K8w",
  "key24": "nnjRN437exGSy4wuV7z9wRDL8EDjHcFJTMtjiJ8bUZt9ium3tmqrrp5uaoFgtrCQ2epLm3ygZe5uDPLeQuCTPvF",
  "key25": "2YskRyiG7dbUmsdLkp3uqRGcr5Fs7fmp4ek91dty1epo8Di6pQoRJDcZ8yhyXeBDJ27dZAd16GTNeHvkzVsgVtZb",
  "key26": "4XdJzTRynKPkvEfqGALrh19zNCBRPURoAEpBF8dqvaWVKVCXk4EqPMEu7eYPzvaoCXEigVDn2ATP3kFcC5VscepW",
  "key27": "58PrVy2ZFMrTAzC63EGbTyHsq47KsMBuivGDypSs2bh1vyFwfpGoiwH9BBzD8TR97RqjCa47yVLYiTeTdcgYQhnJ",
  "key28": "8wkAwRiu9LmCuzc9vyNorESZUSjt7Mz661VENFMSrxbksT9xbWPcjUwrcdgQBZ1WFSw2XQuAPPamqjv9f8nbHae",
  "key29": "63i7f9vwE4fR6xRZ4CzBkbFhWaSHRw63KnSJA4iVDK2VEuSYo2xGWky9JTHtKxU4wWG6pdxqAwTGLJG3xPVMAyTn",
  "key30": "3fjKbMAoRVrAS2vp82GKqLXYjjoTYqmHV4ywctQku72tSU1YFfhvDNupgJPykhMx8D7V5uuDdxyydvtaeyK8pzX1",
  "key31": "5axUVAKs8J8j5zfVVa4deojCEaU2MzNNdmAuWqxxRwUX4Gc8vPd4xig7wps8tDLfvmukkZNmD5oFu7mvr4PTKKVi",
  "key32": "5pLibpuHCuG644D5yGxfbjhVndh1a4Bmeyf9VCzcvaM3kPZ4CnJZajxrhbTgz7M1tvHQfFkDFKkahvk5zq8yuG8i",
  "key33": "5J5RpV4orRRGVhZhx3SVseX3rSe9NhLkKvThwdPEQWkepU9L1R5xeK4Do7C7HefLAZdMKysiHDkiFaxWvFezCqqa",
  "key34": "45FhdxMqke2AQKhicS8U5sDonCqCDcUmahuQXdQFLuy3ECjPXbPqs8YQAdhFpPtUWYoAPUCwpXDvtTLXp6zMRBGs",
  "key35": "BYaW1pJMuiC8ZvtkWyXtByjfPK94QYyiNnce1L5yxNwPkHuhJQs5a85CRVKEevohBmpq2DUXQWPBVHKcWZdwrtP",
  "key36": "4tpjbMfsVDGrWiVpNqUEqkGuBVueDVzb9ph5d9xdgLg7xKqrAK5Mmcn6NySdN3Lt6JJD1xFS1KFDhKeCxLRGqjpt",
  "key37": "2etYetVzJKVkh6Sy23w5k2Z3ZuiihK2y7Asn7eWDFc6phoXyrzogQ6LDQgHAGrpX6LATPXvMx6PybqQnghdwaTDu",
  "key38": "NTqcUNDk7PreW5LNXgiJPFMHBX5GUstwt3tyBWZ5tNtJ8CugnUaGibEgCbTqL4YWPGfC293eCUAYys43VEM4YBM",
  "key39": "5AqSPn8MaoEz2LuuSuB7rSzRgUAVZD6KVWcPdXkF7NebxpdZhCZ82WypHfT4TvWtdE7zP3v14xKcFSnUj768MW6D",
  "key40": "5kNiKhN2YmNq3Co3KwhdCXzUYfw1feAJjw1APx9mjsUukZAAhJSi6ARK6rVMUtsh7GG2eC92yUcc6XJMdCbExKSU",
  "key41": "3Lb4o7FyExQcAPEad9oPbmutEyEmvmMHPquxmhuxm7ibi151EADGcWoLtafqu3ZDXoX7vT8e7iVmXx6dZ9J5xCqP",
  "key42": "3GK6NcuxfebSYEFiME1mr8tPcnaQw65SxTR8tXJyxHPQjsqDCGcDTmg4nUB1xqkRrZAfbWR3BbkcR5qXS6rpXAgN",
  "key43": "2p9ZGG7Sa5TAqYaULeADPaqmna48tTYvJBhKbQm4mt7WYynYY6h9R3HKGsJ78ASFxorzY9gcFsYcS2vXF8g4SGXV",
  "key44": "49gcQQvfFUMPQwphoBaTnXmake2vbpFZs2Q6fLTmenibxUnNtEjgTVcUH1hntUpEAB6fWYwYtXYU1eQDbXZ4zRtU",
  "key45": "2MkVCRgG9KSirwmy5Y9Zk88WNv81QV1bwrmwSD3K2vByrfjdZoQhwWGHbKEHNpy3J8FAdDpEkP1gPyoLB32tfKbC",
  "key46": "4MSDWVJ7AXKLxFPM88BPVtdDmYDmdw1jmanDQH8bhDy3tQexREHD6yJ2QtSEkkuAoq3fNBjhVL5iw5ZwTMcZ7UA6",
  "key47": "N16r98s78mh9cGpoERvdni18ymSX1oXg2adYEfPUpxeJxvoim4WWdoUGUFbyChZWG1Yz9mseN1xAqDJ58CFTonK"
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
