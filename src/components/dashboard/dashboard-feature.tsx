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
    "4vC2sAC8ZxYbCv7NWDEh5gCxfchUDA8buoGuvo8Dv7ksWyxpqDThdJEeSvAL7hRkmE7quE1WUn93rDSaGBuQTMXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x5upFN7GXw4wLCGkXzTXdWSWRi7ktEZW8pwbAEFpvb4HwEDnXpuyoLcJZ4YrBLVFEeC2dsidy98EZNgRG6hvVkc",
  "key1": "3mzwLG6CoMoBFvGEMMnMg7BjMjFuS5WDKEmcmVppkS5ZWoQU989YjSXEv1r5EN3KSY5mS5rsgDwgcAo4UbGv9NSm",
  "key2": "fy7dhMEzt2DJB7QYBUaw8zQ1oXbjUJZuYMnFwsu9hHnjJPdQgTuPFGvakVSD8RF1DHU5v8qaL6LuyidnnkmYMrh",
  "key3": "3Jqq8rk4a6Toejey9oRfzjYP5UzaU56cQWEWvnfHPvmW1vQE9nTCdUfg8PGgUfdF4MiQoLWJGR3R1Wz6euSreAMK",
  "key4": "598cWLkaHGKRpEhA1BotbQqKHzcz1tgz2MApYAHTktzhQkTW37GaHibwRBmztuHn46uuVMtns7LTaeCFCrMSB8fT",
  "key5": "48JEYSfBVLtCbqSpUBC1FWPeENVhRDFSL9scoEGGs5ctG84tLkQVfcUfxvbsioinYMMhAvbdQLXgpyCdTjBsshKD",
  "key6": "5fYKxht35gu6J8RTU9XaPXFwCPBDHM3NAoicWZ9TYv35e6p3iGVzAjfi8miw6mAPV7VvPJRphEDJh2LWzfQqoAie",
  "key7": "5JHLV3tfykFHCGietK3XBjRK9Ka2tGtkNqxEdEAeTU8NVPJc1Bm9hVRM2BTheMvn1SiPjpwu6iaKYUGETdd3cwzG",
  "key8": "diGQ7LhGL4Z4M2AKtqc1ejKiSNCii1KA4MzJha1P5XLuFbMpW3r5ziCVHG3qK3zprCzCK2Bzqig56e5B4uSaHtx",
  "key9": "dwgGz3YgZJKftybsJW8nyV9irsFz3e56YPiQURSbc7jp8hNFrgCp56ZTYpyBurcfGdJTW75ijEu4zxYhipCiHoF",
  "key10": "5S1HG4GQXTJDGpFJkFbNP9Pv69SsDRbacDSsRQJBANHQNYx2jXruzJrD9faKEWr2xn8imY7eEhwn5hFW8DE6ceNj",
  "key11": "4e8ngGjAjKUc1g5dbGacHN9AXmDyGbrhwHEvMWZRmoytBc1tyMHW3W926PG39Leede5NSMtCBnbevHVvcenLubWC",
  "key12": "2oTYVSqubZ5hVhjeTV67qi5gHdASok9iRCTPk2xVnXW4h5L7PVduH18PyZqX1DYJRTQP6w9B9fsKC2WCpKEoRLXV",
  "key13": "5LocAioLHV6ociWWcThhP3aAVpknzQzoh5xew6cuQBcZrLAdw9qwkwkAwhVytgLRngfqVjBEq6hUBwHJupXMmQjZ",
  "key14": "3bAcdht3FxFeGkrQyrV36p2CM8TvJF1G5zq7MP3zj2YMbmdkxHHN4XsrnGcTyak1JjcM5G7svQdo7LJZdk1hmceV",
  "key15": "4g5TkpcjuXAzJp9BPo27xoL2ztwbfGLGBHYTqKLHGrutQv6AdKaQgvJUPjCBcWVYcEiRN6Ug4dDW2j5SyRkriQjB",
  "key16": "2tm8JTxezatnaKPzEae2Jf3HA3kVxnrZVu5LLt9PyV3NuE14PJjmxdW61UJfR9UZMwR9fBmgrY3mb2MQ3qwghtiu",
  "key17": "41Hv3HA44x7BkDuZVpU5P3YwQwdWbe8V2hGTfjSJpT8HUJfDEG83tVosXcoRAsXwnpt4yz1BmHDkK4m2MfTp5Yxe",
  "key18": "4WMQ1bibPJqXT8bKFdQ3cQpguv9odeHBcgMxbQWQYjYcZRegwYCjeicFJBpsfkmh7iVbM5R6xZLM7jgve8n1VcM6",
  "key19": "2iH3WeCXpDKd45CTBmnHNpduN4Xy9zMeJK85YxUWkQ3XnFBdUxvALswD5vrkqdXGQViLsjJomX18cDD9rKeyA2eN",
  "key20": "43XAPoKEMQegXnQhJoa9zCUJVcv1Kw4kY8hJwjYuoVkgmK41b7hJ76Ez2EViqa5BxcZdZN463kjqW6pux3q7G9Jr",
  "key21": "5QhD3n9YEavVmwa6Hzf82sMG6XKJHwx81Fha5vpf4iZcDUfTPZ6M6a9wnm8FtmGVXBicYkjndgqc3fbVDSLzUyuD",
  "key22": "34brvxDe3Vj8rrnPrbYHfKycKr6eNP4vLkyvBzdt5HFMRqjLhD2kTAXyiVroo7PHbmX4G4SdG1598ssr8qqUwTXZ",
  "key23": "FD7vh99HsWTyV3oLHYimsmJZAY6Qk5JRqF6waMgFD8jMkADYeEH8DNEKK91hYWfB7x1WnEcdwgAfHyTCVTMVUM8",
  "key24": "uijoiyN9XyD99kdQKsEi8LvrhtdzrzysENC1hn4BfoZTuKU4SDqcxSSu7BQGXCvwJTzvRREeg5sdePtCmBK7joV",
  "key25": "3BZzwf9NDfiVFHn2vVvXpctD8HJRChT5Lbs27aJStbpGktPjcBC9yu4NEKKNdqW9NxK4oKeT8BrkuCgQzAbicAVX",
  "key26": "31RSHcpvsyPfQxahBEchyr8CxzM7tYGUFK3SZXqvp1q68atsiHuK3pvsLSgqTMbSfFTntJ3muRSfzFkD137x636Q",
  "key27": "59Y1ER7oQHLkNojGCv1o9SMimfxzRjSXszpRg34NfbHr6zWYM3LLSa8Yj9gi2RSsozN8s3D9DFVDRvJj2oUPWbKQ",
  "key28": "qixvxPsCxSBoV77EBQ25S9yFcn6ZXt25BMaELWMZ6UEHB6V2dkC614esdfCamFPEUC6jnFgrJHtYG5VVtmW6YYY",
  "key29": "x7445bik7xduWLuzchUfnqiY3sRCWDjAuEVrkjbZqZaFvUFmRS6UqACDBSFyPkcrSf5gyyiTREpVRK26HpjJduM",
  "key30": "4XKJ97tghcTVXRnBMwaHQKbUe9aZ7f3NnYbTfCZUWf2MMBcV6Zgo82KPkJzNaAGznB8wR4XxhuGqJcRq3ZSaCnRs",
  "key31": "4RgFguz73ZT9fxJLSBKYyAULxXt4ckzowCeoecwSNU541erx9FqQYz7tbXt1SR1JL51zswMJobjN8xAu4j8ChYE5",
  "key32": "4grBUVpuEugykyEPC8bRSsnM4b4H1xYSacGsZMTNDAjU9T4Z645EbxNutuTXAVfG29jZcL9XgK7zVLGWGFZsJiJc",
  "key33": "2DVScDaNbqzGcLnnWctGar8CW76A39Hsp6aBYtr6Y8bFx9GozfeL26PdkAMdthG2ARoqLSm8B1jkqJy5ATxuTM4M",
  "key34": "2KBtSJYLCJoXw8Ns6YgnZbR3rzUUbxvuwhZX8TbXDi1cAaBBDik6NmjEj99ay1N9T4tnFR2hpvtPhP28qSDcHbod",
  "key35": "3wgGBWkZPY4X9D6d4MviJEuWooMpsdUATMouUYzWKLy6fFjbwfYnBn9TFgeL5CTRtPUGeXNMxJVMbCidtqTg5Lqa",
  "key36": "5idKa1MxSLmbqeY8fAxwyrsaozWGEJoW47nULLcy78LANK2Gk1FVML9tEpXd65XbiitrbPfqmKkv7hV26sZEvEEy",
  "key37": "4RvtNF9YXxHBTsXYitDg2yqaQBXKCAroZF9NuvSwwuZVoTCqFHPyMLZT5h1DCwHhQGGtMJJwzvgjAC7jt4EC91ag",
  "key38": "29DckNRtZrhySaGStH19pNwkD4vyytGMRxswxAT3TbJNNarAMPjNZ32g6CZ6k9ahfzFjP1ywUfWts6myVFXzACrd",
  "key39": "3gTCp4TSTrgBZSgLroMpqh2mm8KpKqeuB5y8Z7woXkHTEShhaP5ZgojSqpL1V5NrcfXSNnyLJPR7tmQJcYuDF4Kn",
  "key40": "2QpGktY6ZnzzqFCCsV65D27AFe4taisRrNPd9hwH2i8hU4R9PjGJzkQ3KNS3Q22NpxEmCPcthGdeMue5UPoPbyse",
  "key41": "2fTPsJKn4Vhryg6VhXafcvaVKS7P8jEPQKS4BfNiVpzjTjo76jJmaSyJDPG49q8ebReWmi26mArYT8ENTXkjH6KP",
  "key42": "52wyZaVwxM1igk8zpJu4JNQkE2Ws2767tpqfjMp475uSB7ctHwvyCiXfYBk4krA4cQ7bsu9x1wCAJh1ZVdARMxPb",
  "key43": "3ZSHPuH9Cp7DPAcgQATwcDYHNCdHe9de384xkZGZnekkUADYBE7RjnCQc4rU5R79fZw58Vj9vmVQBbjHWwo8WoaY",
  "key44": "2BfE3d5wzTqCFZvrQZfGnc42id3jcMREjsfRe1nScXGy3i4GBZhSMAg3c6Z9seRwwNwCixoemYeSzxWLQZ8zKQfo",
  "key45": "282fLzHVtHB7aezN8tWPMrbWUsetYuESF6P5r74haBpZiRMtWYmz246WXTHupa1n13Q2kTTKHjfpLqqCbLsewZ3Z",
  "key46": "3ggLqEyERhsDY3G5DQ1jNFNQH6z2JW5JUhFWHBZpaPgBXFo6dzTXyZYY4rpZroCDMretEzAL5zEbKc84fxSBmGzQ",
  "key47": "3aTFjUvQB33Q8aNTChKepVbL4cGRTmXPGdDBUCKP9CMCdu8EWPcD1enQW4PNk7f4U4yXpGYpyqNV9dgv8Xgy6w1S",
  "key48": "24Q9RHxHadde91HAv5FhRybSPxN44hMeaCgXaJ6ghKTugtmhdc6dcK8y4tEYjBX5NUSTeusV3nbyAWRLtPaiDtfG"
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
