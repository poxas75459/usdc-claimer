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
    "2fUrhs5PntMDwUBs5w1DF2W6Hc1K9Uxcc5qydhhRPGjRaQeU2dwjtUQaMQnuSnJHYkvsXkf759Xsq4xu8uAri9Az"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "366K9mr3ERk9rTzR9imbZaT5LXEC1BDAVrS86cUm1tAU7FNtJ9yrN8pQBpkouCjtagRLAnYCjVeEbvBFA6rWAV2D",
  "key1": "41fBHezKUB9kdQwhs4x86967YaNDLMp4VRnQKXvisAFvcjBszCGfDdtz5fNgT6Yb2JEvQiQ7aMyuQcahWjdNikf5",
  "key2": "3tka5eRXH5mZuSZS1piFduupVEESo77rJpQ77MYrCtTRyA5W4baP7uLcDzGxoogLmF4wHqtgrdiipsFNjF8MnWFL",
  "key3": "56G3ooywhP3TSxc8dJQfQS77YsRxnSLNkF3mQ7krtG8Q6LPrwZ24C7SJCxktrASG9jUkKdPP5WWb3VYqb5kX9xtF",
  "key4": "4mxYaxw81ALYb9vFaQJE9yGtdEjBtXNLbBkWanLPUsoemZ3ipanVLNk9azJKt9reSAafZ21oP9Ahp58RdaGCA4hZ",
  "key5": "uXYoahQDjsuy2uA1JiELbpFgs86BBkSqbNbwyi3QkuX7jR9QGCnjJuUhNPHETjZ3kwakZWN2one6oCEX8r3p1hg",
  "key6": "5eQBXVpzLgxdZVKVaWifyu1en2BkZtWe9gUeDuouP2WtcgECsCx1jU32JHkP9u6as1BeExFxmvNXA645j4A9VmYc",
  "key7": "5fjE3TSro8oaoRzVHH7o8UfZE9ZAvGT3WxMZ2T3aDs1pihNbuQaExAHYeSwYXRZqSQVRftioB2WrUtwnVDpT5gmA",
  "key8": "5FysL7obgZU2cgPiC2hjKZshHg26Ses7aExLipF7NnGzxbN3WwqyQwq3hh4uM1KPcdspgFWVzkKLjCdXar61GjiK",
  "key9": "4dMxPHY8tuQNp4ew4wVpaXt2s8ZYC4hjMEBsScBQmt3g3q2A2Q3jrFoHi85xcW1PfjnAssTAX6yMTRbHfoP1bEXf",
  "key10": "2gsP62dDiaFT3brbrr1GhTnVibfCkzmTJ1M2DG4XUJFWr2N2zwnQhQTUbzcELtw7TGhetNWSMUMe7AgZZhrJTx3A",
  "key11": "5LZh5Zvyho5ep3ePiEPkRnEEV42jSF5sdVbNqz3tsHRTk5NJc9yxZghiodNip7Mk8V6zcuvdCxjdSzkoSn6iszie",
  "key12": "4NAVq9bwdPVa1ynxGAYpMdMSabEqYbvG8f97P3LLeETTkCpvBAMK6AUdRXWswKxGbznw4xGLAgrcmWteu1CyzESH",
  "key13": "4Vj82u3puCrMCrL15avD2UADNe8XrwZTBnajZhR6ZsmF1eKV3DsNbaHzFssHEPChzkmEfWZgHgryp3GpyYxonGZA",
  "key14": "4BxwEkqBL8ZarAAEk2Jw2cmcAJzyqyLBq85EwhydcQRU3Bqe86zAZFzDcPLYFhvLa5NNzqDyD5hsvNqEYQHfHrzV",
  "key15": "YtZg3k9HuYr2ACcYqivKsF9rG6SCdAHrSUnWQnbHFauu9ru2jWtD3q9X5w6ovkTrz2ERvFe716FQWTcPY1uYm2s",
  "key16": "5u5PDtmBBx8tGtyvAjZYKNQdU4fdMDHYaa4dFsg4FK5MqvWXmWXXHNm3R4hxFmFHaX5dUYdfsfNB2aHLnxYaD1c5",
  "key17": "oWoTAGSRnJ4r7QrPDe3StTZBcmXohvXu9co4898wJE1xe2kwv47qvcF3bEi8RN4zC8ULvnWcBEXATsabBaNgicE",
  "key18": "5EgWpLUTxPnmSftD4Fv6m7RbzPNt3eZRtj44HZEpaLTnWLULQjc1NBKMyJ6a8CTvppX1wSPXuNzR9wn2EmsE5NAz",
  "key19": "wgtRzThXMjDPvE4YKGMY5yE7vqHhTt7TC6MxrEFUcn3yrdzwZ1QmUGAux5GBpxbvSjzAXmADNo5s6Jzmj4pM81i",
  "key20": "Ty2i35Ygu2uxx53GX9Vq6ySJaAppYoBcELYS4Lsmd73mFDQxWRToW2ZYVrnGveoTFaabDpZrkcUTXgrrsyKqd8t",
  "key21": "2jvKN9bGPYmejwMQBKoueTKKo31ZTdsHDBQ3KbMbkeKJbhukeuSwWjniYfY4mV6AH496Uhv7fkx7cFcxZGvMtMNJ",
  "key22": "51SyBFzPKr8iGB1qsZen9zu1Lu88HnYwsVkNXPL8iiKiLS4YkBDZEeYPcRiogJqJ31PrxDzbdoHqDF91nbJoFfvX",
  "key23": "jRmsBTE1Ndd6R9fiNsXAVYdx4PFw8u6YezvsEaREf7ZVQPvZfwPmSTqEE6Tj18fjc7aQPJ37ccRfRxte8Tq4JAV",
  "key24": "3imQZpFJR2qcaSGoG7U5TdtJJdvnKc1Pxfe1jVQK3KKj9U2TKf71u1rcqMBnwXHse5TysQXyWaQh3MpLXBPgM1ho",
  "key25": "5uB28kLcthF6s8BFLh4a7pdWtNezmga7ptf95wAMEtfLR4e65SxARXwR2kYNLuukSPwTHGkHAHueV3pxruw9r7wL",
  "key26": "3GLM4HJPqgrxzK5psmrBXBxBhHFjc44NsP7o2mXtvjHFGvwZ3UzuTR1C7gdWUZdD5eK82ibaSftAc7gpYjRRxFCA",
  "key27": "5mLskZoEnSo3tv1CoTfTZAp7pPNXjpntCg1jvNFAtPkmbpM6FxkojwveD4fM7nh2pdG7qmQYDggEAPfLqSfX7m98",
  "key28": "2omqwZfbqJoRA2XXUVDLPvQotiHjUj8hvjnYbjMdSe8FnT7grGEiNSjdrtYoALHeoPka6JeMaDbGghepQEMoZXYB",
  "key29": "GAud7eifhyzzoMjmLguxUK78LJP1jaVyv2wWaNT5zxdUtEHFpxArZuFvwN73qhoGr9yv1TvhZC5srqcJ62U36Xm",
  "key30": "5V4jqqigfJaXzUho6WQjZAi8STk1WapuWYkAogbRySbxPs8xMvxxarSBa2Swjcw11DVqeuQwB5WoFEt37N8PSPMN",
  "key31": "4PEDtuEE58xbkgyaDSM4FpUqFMDouh3Kwi7MoRrou54QrvVtRk4hrzWEfRcXVUwpv2WHLEmdY4BUrNnNTzyCj6Vs",
  "key32": "5a6c13s6B5cKsALJUa298z9v6JsvACF1oJzxKE1WNGy6zdubFcazxMyDfkjvWQRMiQest55ZWG6NpZ27yFawbwct"
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
