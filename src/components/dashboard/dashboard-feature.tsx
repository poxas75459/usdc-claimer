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
    "4d3cwfTNmoqAFbXHbzWArVvB9DQGF51uvKNYmnPXtTDEBvP7bXrJgZSUD9UUtPF81xh92zfzKcVeJqJHvg7bM8kC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NPmCwM74bmB32FtNAExQky9TstQyy7ySLVqGRKWgmc67RLCY58NP3emg2ZnuBpnH5B5UJoENBxKMxHvzBktSGMH",
  "key1": "3ZjaP1SYar37V778xEnMFQuSdDZ9N9V9JDuN5VNovxgBMssPAf7wMcDsa1nrN1tMjoZh28apyEojesGxMfPxgkST",
  "key2": "2DUmCU2VERq132HuHmMUpJJdYn4oEMPH6nXgS9BvyvV2kDaWRb7bGqVcTLBruAWAk74nzf6otGtTArEH36xpquuJ",
  "key3": "3wM6m8dRQzWdE6EGskWXZeVY67xozSAUuLKBJp8Uhe4JM1eDMpMJfRuysdMga2Ti7xcZdFtHNqzTsSGQQFBWCT7j",
  "key4": "4k4jvNKNSDyV3MPqKYGnp5AKHFJGFBVebT7NKy6hEAnSYaAZbVF4HHbopYmBUsmYLvbUwEo6FtMYtsaZFZVJi6x3",
  "key5": "5gBH2BBQiTkxCV2odgppwFf9XxeGP7dUXD1oQwgTxBhgnHojk5Q6PWHTwwpBH5TsdFgPcRb77n4nPogwXShbtNAH",
  "key6": "2Hpeg2QuM6WyYx1ewq6BVifTMdZSCdM8GGRF8gqdBQ9DrNeu4DvJdnNjPc26ZSQ1HwXCStsjA3WeoyUcxh9Uprxm",
  "key7": "3d2U8txno7iVTA4Je6DC4qs2tnsvgnUULe4dVDgYFr67F4qwiePSQf7dW8rJ7rm6LDfwpuaSqy99WA8vyR2QQJXF",
  "key8": "26jYyJX75LRz81yc3isd7gkUBDN2WpoJTbkLhj6wePr35729FyZNZkLgGLwzcxgs1ZTSBbYgsxpMuzUjQA2pDTCL",
  "key9": "3ZyiMipsF3seBjAUeKGXaFnpP3YN2maYkXVueWoabTP4Na4WbUSaN15opoWuiMCKdarbmYes1bLeYv5dvMYg4q41",
  "key10": "3Ng6Lgxug7cwDrabJEMM3nwNqoGuetohGpWVPqNdToGSpUC3sJ4PvaQvZWdy65vST53VojYWZ8TPFhjeiah5WpYA",
  "key11": "2TuoRyVknTnHUGhZqc49jEANpPdqX4eBJKhuGFeDgXqzhyfLmLpK2bL7nyCCU7uAFsZF73Dv8sPGmHcdfwMCPtui",
  "key12": "3e9H61bXfxtF3aa2xFdm4NPoc8eofJzjUwh65vGzicWjvmJmfrojZyod2Qn7GM8J2dWPSY4h8bQWhmZCtvH8EpUd",
  "key13": "4onk6cb8stNkBkhuBRgdooex3MzcQzrve5RqBVL89hwgo2XkY9VHpwWfh8BEHTBk1HPFxneUerCm5CdpLcYXPdBH",
  "key14": "2E8iLgDumfLEk385f5eiLRzbsgCDDD7qX1LMqUTmeMHTJhdhmnyjxo4Ytf9LgsDcDETEYEnrgBSyHtudEPjYzK4g",
  "key15": "3skRZ3Ycj8Y1QL42qBi1RLquJzSoT86iaVrUi4sovogaLMyZ5rvjPCs9mwsKSEP2aMND7CW5uuiptdqmnLupB9Xb",
  "key16": "5ExgcmvTVZD2n3yXFXSSPGJjVpPBbEDcuKHovdCGDfCXph1A6wrykqdxVAd1rVqPdUnpZrCKXSxn1mBNkPjfek42",
  "key17": "4poWST82hiNBaPYNYxkHNMf6Wq2h4XMoUF9oHFRXu8zzak789i4FWLTpyJ8DQtjBsKYbZiMqgMftCYe2Vsqs9BHt",
  "key18": "5B7JSjF8j2qpWME8z1wnDsBesQv8ytMwVXJ7DFaCm98poHuUkBBbu3iZraY9icmXMNYzVuUcyUNTE1QVYqeaaTg2",
  "key19": "KzeHbiKVaXZqnxYHY7RSB6Hc1zsF8WhvBqv6uMn2m7Qk5AwbvkakUZjp7crD9SNEpJGh4sm57SsRpdriY4QivLT",
  "key20": "41CY8fsbeRRFtEu8W8DJT9YV3naTMKoEwGmSke4wGBuHqcmsWqx1bR4R2AugbouYxwGiEE9VPiUXj7eFBejVHeW7",
  "key21": "2pPNfP3miY62qh54WeUwz2LAXg12ARJZxUmjDkgBMxcddp81Tz8t2WCG9ZuLnETUPL97fE99mAGXafH5bKfPTLCE",
  "key22": "511sqqTfYWcgKtMAyTHYGfoFE9QjfdqwsNviDNp4GKrZQLBLUTedwncSjtN4czkuCBXmSSk4nUysg6JvByLRDRMp",
  "key23": "B6Kju757yknGYpQebmjPZgGsCBjyhg8M9wU2WZavg33VHxdNDLLQXqfohy5mKFeHv26iUmgmFNDAscYNshEkrxF",
  "key24": "3mWjjcwEixJK3Ln4jhkCjidVEVg44UZsnthDRtA9wCUuNLCCXkUXNAWs1vCc5m3i3qbkTQXh1o9VJsdDtWD3vPse",
  "key25": "tGBZXnBV7JXdkdnqnhkPVwGphp3zzp1rBPAUpqtWJTA2SSkscdNwMDAvAiE44e2GQcKi1p1rHXzATzbgEfyJb6f",
  "key26": "4WtJepv6PPqtduH9AcHLo8WngSCt7U8h5abYaXkn22b2N1pHtEvTW6nHcnUKbafrCZnuYCm9JGuS9mo4XHnfcLkQ",
  "key27": "4sVvtKtv2T71PGW2ZdyjjR71HsPGvg9fCnRZ3QN4Znb73A3qoNLFzDWAi8ogDQkpW5vwn443phPC61jKd23ftv7e",
  "key28": "2oPgDwCB7hsYnFnUS9ySkPsxm3PsXoapZuvKB8oMWuG7yh52ckqa6c5iZkKFgMqobo3owsWvM7bt9PmsuKK8Qfnv",
  "key29": "4psufMCH6vfr5kyN1EtyG3x59m964Vi5KB6NGoVjHwm4zxr84SYmKTqfa6BzNtxcHnEDFyQUhFTuYm8dwhX3Snuz",
  "key30": "5fcYd9pd6F8wpg44DcpatC2fYakbiwZi45n8SueiVhXwivt3oz6WZgKphh7Y3oKJ53TfiFR3VuJAzvwX4a452oHx",
  "key31": "2qTLD5GDSbNnUrqZ3j8YsvdDWDFsKugnC7PX9MmkGnFhtD7ZMxtc7PDUoEZ3qXxqjg1kHGhviRaS369w5mgPBBQF",
  "key32": "5r8SqTfHJJPn9s2P6ACJGT3y9gxwUDMZnvjFgqGtuBJnqGjMYfYptNUCUyo9U3zJENTEmQdFHpSchSxtXXZ8gGmN",
  "key33": "PGiSTzfxV12NboNimrJXmCwFWZBRiF42oAwjt4uspSSUFQSQAVfmvAK5XsUdEWMyntYfa1fpvUdL5c5Foo4zn3r",
  "key34": "5UMbEVKpuqWUbi3VLawcBEXSVPSh15HpbrQADQH85ccKi37xpoWiMp8y5T5RigfqgH4myaDomEJigPSYJ9zPK96e",
  "key35": "2uTmcEbzusAZANqFB7dapdQRVn9s7Rn6eqA3JQErYoFQN1hM9Y6CK397onyJwMNtSb2NRtWEAsJFR6aZeCdCsip5",
  "key36": "55wcr92L5jtPTh6i58n3a3LJdqRqG76pVDj9JZUPaV6i4QM1SRTFLFpuQMjS4mciGfEN499wqNjXGVkEy6PnfRXy",
  "key37": "2fNP6wKVg3XrNoazZTMmEWGt9DghAYthsFTHETWPkf66dcTNvYWvUv8YSdWy6b3aGeDtcCDwCtD481MokHmXmqPy",
  "key38": "3XApjhwS9CMDA6BB4sNZSfLBTtJdhErM5YM5P2RaD47VKHZttjsSn7XafLMnoTj3AYeqeanQNgJnP2piYiFQwZg4",
  "key39": "4jaJjzkPuiWYouHqtzXh1i4d6T3QRWK5rzJKbTUpWLVYsZEpxgh5i6KGnFhtheUfyyYvXwn84w3WHkQXKYFConLf",
  "key40": "4LPtM7qtMXu4qESqvqYUmKwtQyhWf9H7F2q6Q6UeCSQcDoKQh3tD9p3M9bwtogC7ityMQoZ86FNwWeLGSub2xRo6"
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
