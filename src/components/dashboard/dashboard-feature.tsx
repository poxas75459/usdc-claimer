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
    "2bg8T48Tb6EPWULD7dFPeN8XRFVP67U2ur6z4dZAsT3AsN1twM1jB8UaBii6Ln4huMcXPrqoPUbdrBkRxCV8fNkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xKh7ZxArpo38Yt66ixFs6aB3P8HgEfSFkoJuGVH8qnqHeW9G95ea3Ez5oL5KMhhgdAfV6U1t63nZvmawZ62nuGu",
  "key1": "59eqRxvSfjXvikFy7gYTMWDfxR7Hzw2CU9RPeuct3P5ALsWRCyngv2gmiK2A9nxcvU9hULjWqMggU59H1MFgVLyq",
  "key2": "2tQ7wzuzkdZYAFb4kL9Wbf5kWK961rCwqQh7dqRFb2SVn9WuW68oeaaz9ebTp2tR2kgHDGrnZmew6y45uXrzh1Bc",
  "key3": "2PvNcRMDwi2JDUzVCFWq9b1Kma7923HyU9qZ7Q5EuBgMReGY65AC2zsvBcimQzEXY8uht1G6XUPfo7YfKvXyHtAc",
  "key4": "2gYUgb71sCghxszbQhztM5MCQm1eLtBLsFDh4yrFxzdxXXeafT7L34NKz1KYSSgFYecDM9vKkwE1YNmUwwTN6m6q",
  "key5": "Rp1YNX1FkbPCVLQgTfHSrndxackjazq3w35ebiqtne6Gd952TbxTwN2v92YK5nMnMknRDzrRuNoFhjN7C3TSuKf",
  "key6": "5rk5pWEp9Avq5rAMaEmXR4UHna1FcFM7NADzithats9S8xdezCqajFX4ukMrBktVt1LouoJ6k8GksgFpuxKs1QdC",
  "key7": "5kQLeEH3kC6Q2zsRG8sxEkHFhz1PHvnGriz7PHZwJBAsMyPuWcGwd6wHjTysAceXa2zdo3yW6EXdaJRqPxLnnK7X",
  "key8": "2ohpTzWKrg3n9d6DGhxp3CvKqzzb2NKzBEprU6aYYDhF6LDHWeCH6Qo6StsDnXMDAVLJAv8JBNFXDF1bbS5Rv8rC",
  "key9": "66zSNZzyAWH2M2ysqDoE9papVSBauXt9aHStHzE4G8tLaKJTut9FifKAwAvGBk9P23PUwaAqV8VKHCJ1QkFbh3Nc",
  "key10": "hb1t5ZqekgsXMrkbZcU77AWuavYJ1RJ5X3LkRcYvrH6UpPrvmnbxr88MjxfzSACTUuCqvaA6ouejyfCQEQ59N8j",
  "key11": "4nizdMfB5r77376GW7EzhPAJtWF3WBva8EApVH33Vr7H7fnVaMJk2mYia5EoAXtw45SmDquD8Vv29AjQMv4DMYku",
  "key12": "4swStypRpHjrQXwomv3rt2oJV5i522ZJGKQYpCPQ6BejRKnGMDoW2X5dZHVGTrSrGpXpyuFe993HnkVoYeLCChh8",
  "key13": "5RhbikTYv9ons7Y3W5CdD5Sn63WrzRgFXGJaumSFZSj3kL6yapETcvkCDyW2mnnH9HkYGFZKcPCnTUt2VhXo7xES",
  "key14": "57cUCy1gtQ7UhRKNj85Gk36JmFZhU4gPSsa4222ahELj95FHqCHukYFcw9jrUcZu8tgTAwbLemSF2cTnYehmBfSB",
  "key15": "JPEVLgBUGVT4FU6RaYevtrrpPwQT8g5qKqokCaUXmv6UvfRsarwRsyupwCw7yTBGaBjvmveXk8EZ8SiLWH9usbu",
  "key16": "5aoQosPpL53wZ7L4kL9roXhSrcnGwieYgziydurzQs94SUGABZQrXnWrt67Q6Wc6WXLZdEU6wGnV8bML9cHqxeLD",
  "key17": "2ksiUb67hoEF1JieaoDsHnc5DLWqEsyvaHwJMUSgQUEghoWLGfdck4JsAk9FBD7FsJWSck7CCLXFR1cNyYF2KELh",
  "key18": "5huUA56NLyPsN4x7Vhy92BdkNUiggLceyM5Rc7bAbvKhXs5snUpomwsZfhTikvwuyziAYs7YH8EMNBZLArHM7kuL",
  "key19": "2aVsXGR5ZnEN1QMsQhf8CVDEn6aZxhyxtrtUY6vbzibxaoo1gAABfT5Ze8bAQYa4knZwhD9nPBNN7Ca8jHc9ZbdX",
  "key20": "5qQ2Gtzw54QvAT3cHEMDsMb6zdAa69HocMfgpgyUp8L493n69ntDWQgS2jS9CDc9LBM8RohWinL19XtEhVZ9kuXP",
  "key21": "4t2j21A9cFyCTwvKNkkt71aqQofCDKxbYEbEfFNvUGeiFFvBqR9xdYYR34YAyerk2PPGHYwfhbcHszhAP4KKswLz",
  "key22": "3Kmv9LeXMXenm7mkU1XGLUB58cZpki91PZoKSJ822hyLe8yxv9hk45t2EMPNAzJ4gZcGAeSSHaAwGpx42iuE2V8B",
  "key23": "gpdSGDU3KfjGjMRksuySCa3zMhhQ3U5ftWjqWaozE2rGX7Sf2awxwBiv8BBDibL1stmWXKwZPF8mbBESsEB5QoL",
  "key24": "24X95QCUC379jT75PrwTZ9QKaAPrGjtuJjF98NFVRyresVwGLCXTK4py1z6PGRjQxmzy7w5ERtdGMvTHnTtxp46s",
  "key25": "5iXyhpvoT674hNms7k1ZnRAmPTfujdiD4yC6YENywaZpRBaPZLjPiZ1YafvR5KWsZxFjRX4VmygQxoZYRpfJurjY",
  "key26": "41CN6fH4LU7JLdzF8RNWkFHvYybcZD98UdMR5Bv39cKhqjCVMpSLKiSnY1iKo6wCK5JTN5uyNSi7dTTHSkReow61",
  "key27": "3JsQ59fX4b6FszrTAyubx5kYHRSSC8zuZ6fGyV1MsNuhqKsaeSdk7SaRC7js1vZd9YBViAwjaok6nXZBiNQwrBVy",
  "key28": "mZrrrJLqmyjn4enap7cMw58qMdzTxKC73AgNmpsn5W6rw1v7JgEUvVn46vHayVfDtFoSZ6LGtMRq2VtDkyScFKR",
  "key29": "3DC92QZcjFJLBNtdQHUVMkbf7gv5TrsuXnk6YSGScq8egjcnxu4ubX3gv7naYi89smbn6xcL94MkR7kAF5nZ2FnX",
  "key30": "W63EneVE8KMqSsGevyk1ybY24PoMkXS3rF1HdKmQRmjFp1pgauJEfa4fuXtEVAEG46bgGPDJvcn5DLoc9ndETjx",
  "key31": "3NZ87bPMiBGrrmRr2JcQyNH7h2J8ZohejLi95UqFcMFVKhuCmgMebPpALh35vSqKcPioKYrkyf7jfMqcnFSNR4LP",
  "key32": "43ecrmvUeoN4BohVfzB4hvoRcTKTMr5LQRHpSYufExNmGWDg1mostLjWyhZ9b6Tvu1tCx6xVvq1B5K8QRfY3a2Rp",
  "key33": "5uD4KLxXPkUrmspRGYo4uH8b7NgSCptwamkD3T3DumLHcR3JLbsQWCaKh8eMwAsqfjLvdS3qeNfFvKtW5ixbebJ5",
  "key34": "5Z3WF9a3cqRzukNyPGSaSYHNvpsW3xfdKjNETFVfQif7qaFaKJWyQmAKF6u2UyNCRQevXutqntSRqJoDH7YfeGzx",
  "key35": "3Yp5J1uo1zFawaSve2r7y8gVt3PM9SvUtqs38Kb5kCUA4wyC6bgJ5Lbcw4aMfrBA8pdgp2S1aDkiM2D7XZ9iGxvy",
  "key36": "2YF6Ebs6agjTbGgTTWL146jeP4xirkyQXdGgCA9ZZgQRB6mQVemNWV3b74pEj3pyBD5agMpRPaiWFhuDNyKKxFDB",
  "key37": "3q1dUBvPuHBD36vKU919B3kNXvvxAN3yc134cFRxNJ16by6kan5KTqXk1yioPhNMK91LDs4hiZU9Qe7JebDRoU5h",
  "key38": "3U44yzzqjnr4c9EUnvDG8QmTSrsV1m1RRoQaZDP1jQcmVxjWSmzpNQFRza54GwU3kukZs4W9XwB8RHa2qmCSKTDH",
  "key39": "61PsQtiDoQakqBs5JHQ7NDeg9C1jat99AaY4qY2kydgJ6ZxVibXE55qauwt3woeDhTiG9eTRSEu3G8vBB7fCNQD8",
  "key40": "33GRR3GUQ3kXrCHSabYzirY87GMTnrRjNUZyR2kuUGjgdEnw3sygEpHPAFTxjPu6nujL4zEycjp77hWwSctitAM"
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
