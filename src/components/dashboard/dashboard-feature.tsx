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
    "BiFgLMfwd18wz5myL2aQZkBzUFbVV4xEiFKdYyfwtS9ayBScrjoPvPhkHEPAwVyPMxujd1dqnRdDNMZ4ATVRJeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qgEjN7EJXsepFtF7vwn1JHzPiDf8kCk2WHNZNFq3X4kbQ4GsRge4faWGyt8MmzhBeDPoTCZLkuwStUFRgNJFjRZ",
  "key1": "5vX63YyZmQ1S8frPDivFY6rZGzFNQUwzmhUueShsZCU48VAvY7dmxCRiQvGzdgVYCBW3xVM7CYya3ToTqHGzWRsr",
  "key2": "2uAnbxgjujBdmDRxjyAozihy7bprrRHxnj2cjAV7GZovv1GcnxGTrH3nBf7amjsAwJGeEmtj33j8Zcc4NLJ1eQTE",
  "key3": "4EVndqg1sEnCPCEYE72bSbp49ZvnoWEj9dWS1J4Rwb4vBvdJSQff4vUFb8Z5YZJMbqG87bVuDnbSpXYkKLCVsunP",
  "key4": "5XuJ25ZEz6nG14WYkpQ7zypQLtz9P7UFsZ9GGCUwURGzP6dR4Umg8RRTBpcv7CeqnpLJ2vf5cBcEiF7R2K3mcCQU",
  "key5": "3AigNWqLyW53yseV3vgACYf5BmBMdobsL212f9yQx3KEBAuWPwaLxDgx9N8cVXWZU26R69fWAghkzA2xhTJt1k7d",
  "key6": "5AkL3KjfEkHNy927oCvBEU5ceuVJhpnWykRWSaXreeiaTiPg29b3BdHMvBgmYtrrk2NMNCg9bUZnCDHPDYVNR3Dj",
  "key7": "3YbkXjSJLikirVr17vxo4U6hVw3kvTKthQ8EDAdEVSBcMhZDnYJnHidQBLpDzCoM47CsBhejYuhZHSdQP2cqAVVa",
  "key8": "5VtUQYKsJzwbTYHF9uRkA4supNtovdv7YNVtSxQfEGfSgEmTd3KfqZPAhxn4H7jgoERrFTGnBGDbe6B6f17dWbau",
  "key9": "217iFWKPwNZtQkJDiRCY5prPJmnyBSHfWf4ud27gSWjZy27hyUJ2sFLZuvngVmcHAroeozDZQ6v1XK3Wsw91Rhz7",
  "key10": "5XxJvCj2Li5NkXbRYoKTTxpmzg9MmiwPzujs3FxpYNHshKqnDVj2ivpZbS31gSFDaj67FNpKxGBQ12yE6AVZwKz5",
  "key11": "UQeeYFfrc8N3LZ2XZFbGGwJR9QAwZsG5ke4SsANnGAJp8MRfcedQJ6CQmJjd3tty8zKrbFoiPbJ8NC7BCNfEsXU",
  "key12": "2WqpVRSJiJno5K3MGyHFSyBZFGRQPiVS6g55zZ3ELfxm7AiD4SP6zuUob63qfvTC2vdpvckNtwqGyQTreEoHcLgC",
  "key13": "4QG4L7QpmvzpmSkKrNwxPZZaj4dvk6jA5bKLepktJbiRFaigDdAQH6UECi52FaXkoyzsKPw8zcLpYFcf2oDk6osC",
  "key14": "xyEGuzPVssFC8WLxiGsTKag7kFoeVEQK9T1ugXHgPQkV45X2iqFQfcwBwopUjzpz9R1QH2iSBAkcTZfGcChjfsQ",
  "key15": "3WhxUTTVoHETaA53x4qSVXi2KBJJGfXa6useBjmBrqyrSZQeYSs84pf8vNRPvr2rbH98QEFHihvRnJhSP7jkryzi",
  "key16": "5zMSB9GBAENkgiTBxzrjTv7B3KqdH9hPSFTxSFpkakToqMPFCAyqMsjWhcZxbi1LDvmnsGzWf2zQguRBQpo49xqP",
  "key17": "2LwGTLipFT8BsdLiWtcPrSJt5rrswVpptjT1sutCKmmuEGiS64cJJouZeYmzQjrA8eqq6E98wiiAbAafJ2TzDtGD",
  "key18": "2LpNDy4LkkvxYiA2g5JhsbYRBKwrwTVafY9Q7gt1i8UyXiqZBbjYeLrEN1BKyfxFBqTtT9ZGhyLGnMUScNbw72Uq",
  "key19": "4RRNT2PEUnKYxXKB6XoSWPsgqfAAWKDef3EyeaTu9Z5GntGLbCqpdfgoY4w4MUG4eU62FufRwvwgdJQLgt8oKcUz",
  "key20": "nyjJA9e1gtgncPLVWkLQqEivq5HtM3VG9atNPJRNgn9wTv3yEr6LjuLdd3c3wZiPVEWCQrpQ9THwvVFPnwk1KX6",
  "key21": "4nNCCDFTHvHL7K34H6UdgFcWjuZD79ytefEXyuFqXPRGkdavFpTfQcQkawuVeFHnkVSwUJWbxiNGkkKpWtbYBTFo",
  "key22": "5skr8kc493Y9agSzC8pHKpBnWi5QLCtJ48rTR8bVx8J4WZRdt7GvfpRfNuLkE6SmeV7rC8oFPmfSxTq91zS35nek",
  "key23": "5eH3nnDPTNKwiVLC5Pi7F279KXUYDsDhCSi53VPGW4WE9dwapQjNk8zcwjxfagRpC5FweaKyaXTNB5oyVTzLXeXE",
  "key24": "5NSNcRPVD1gUhuPsGWECQ26HXgQhCtNYTg9Rqsmhed4euc4QwbEx1RZTgoo7u2FvRSrXJi8h6wo4jBxXuRT5R3Gh",
  "key25": "5B5mUWeUAzZztXCt3ojoX9jmskshAwpBeBXigUMvsb6MfDs9ZLmhXNM7EPpUcvgKD9yuHK3apKziNNijpWhwFhpd",
  "key26": "eGShWD6nDYnZwUEZmH85f9Fdu6LbvY1TDiqAvXSjzqrETSVnvXhtSmGUKwC8DX9auUeGoFg4TxTWXDx5LWsTs8f",
  "key27": "3ubG2p7m8r5iKxy1GsJeQr3XRS7UK31iQzby5Qnmrbdkc21u25PubiGjXkhS34XQybmiE1r14nhjmsUW1nrjYW51",
  "key28": "yvdAhspsTkWoc6g7xA1QpEkkNP1ycsJzxYLZpfpAY46PFqrm8A3L6p2PTdg6BRvLL9yXTGVF6SHxHcwWdm8gVin",
  "key29": "3u1Bqeuo4bnehUwjcdK82eF2xM9UqbLmYGsvhZzh3w5kEdk8hbZ7FQMQGqqAkJxmJLwZHkqf4QdkLrMxXto5Dep9",
  "key30": "5g2iCgPQHYrPbVA8doyyXPbFTAchrEavhhb9HDHXeGBBYNWEbAgEQyppxcYYpPDAgFkAtVuu5vohoj4U2FrKGDwh",
  "key31": "61x6YzBQZwYV9W8gfMrwa3L745rUVy5p4V8FFNmeW6afVrn1SF8UW8n2QD3tDoreq5g2JzSZ9hxS83YXDh6unbPB",
  "key32": "3gdsH1qvCynAnNcqYniamWdUpr2d7vUzcbRjQNtpXiHjY5DJgtZnzTkFGPesmfaxoHtvhkPESNDwL2XSJskztPtS",
  "key33": "2zz7bzZKS8ounmdRMeaQ7DTNBcknw22CSssyzzH3q7rF774c9ApY69Suf1qCrYPHXwjdhy1zzUM4fiXn6fVEX8Pb",
  "key34": "oZd6hibMTBrTJ1WvmfccFZC7HQU8KJSstmGdiVmbyVBrGdPekzbRaWuzw5QCim7pbyy9ahNxYSo23eQRJLy2uw7",
  "key35": "64tLKsWecVc7LJMMAXemJLBBRkMaL1WDG9gC3MGBBrNPVbpLWn4HXoH7NbWCDsmwzmUNpMi9nPcUMxcE824pj6qB",
  "key36": "5VAumzcoAwBffbdFEDtTgRMirPX9NgjSwm9ymFysXKKNqdRANMsaYY9mmRsSzwFcSbcfZThx4dpGuPgLku29fXL",
  "key37": "9Gd3ZNV971iYhR6nJmoyzoq8fUqmngwRB6vjELWN1eHnxxkWZ3Qo8qRp7wnLqiLKf3MVbCV7ggi1eiKHL33BTK8",
  "key38": "61rti1gxqVfvKAGyr23W1zb2xH1jFfK8vhkE7snBVTi5CkBxhpnqg5k4ws1M5Zer3JdSsCwrhhobufbPnc2VJb4q",
  "key39": "5xK9VdczJXvk1c8u9WwCXPvpv9vAVWsVadY2pDBVHan7GYiSF8NDnD5J2kxUGhpbiCXqgKfs2HGNxBxBJgFBaTRW",
  "key40": "46NbnmtbuFABPjhxAWf2Uvjr9sYvzrZeMVo7sU3kKXA8bB1FuusPArRZn9xrmgvjr9UFfAf25xNACsMaGWsad1he",
  "key41": "2TBNZwNGiVSb4DcC8QsQBvTzLTi3DXSLgvosi6P2rcgcdytNJ3S4F2EP1EdB2kurC3DvxGPHLbKyY3SnVYQaXBMm"
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
