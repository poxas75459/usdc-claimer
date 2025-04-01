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
    "3r1wmCPmWVpmsakPZenKnA4F8etXjbiuSa5Lb4cEKKc4frNDLnuZpYS5CNbxRPVBqaKGCXQB6Zr9mMfkjxuMiett"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LYnSi6uND7UDzsbFdza87WeUGTLt7zj8rPhVVmE2cLn4rxLRCEWCRjwhpJ2n4QaasacKDMA4EZgqctiJk5mpw5",
  "key1": "8ZSJa1t6EFnjCP3YpSRdAo7aLTtLn8z845KiunVrmESwUWCCoZmPua61e7yDbnXzBvzaW8ZoSfHVatoBWCewrAw",
  "key2": "31KeBxGYydaNQeHi1nvC7Sbu9BZGyZj6vzLrtm7J3WeenVyJP9BKpb7h55QehTKC9nMAfWPE68AjmcJ7pFs7wQv",
  "key3": "5XMkS4HzdS8RnWwqBmuRaSLf8mjoxMQPNKdhFVUCWxtEQytJdEvY5sXResnFrVYRtRo66dJSRWE9ZA7S4MWpwifT",
  "key4": "5Ma8nGMDewikJR4iE1xUW7MEk5Xr2gUj5xGRcH4vk8scYBhHGUdhAzjbcGJyNrgCGhLQY9nWj8i8dwrpQjrAkzf2",
  "key5": "35F8zcEGk4SGHa4vKvsQC2ysjX9c6yRapvQqSKHZ2bJJ7uAiRR8hE7TUinjix6PNbQW7ycZTRW7Wt8F4MgTmreSR",
  "key6": "43L4F1hf7v6STNViysftpAHP1MwSY8uHBCDJNLm2cmCCnoZkoP1Pd86TKUv89KX9uszS97zpDtjX2SdxNawRh4Tt",
  "key7": "kMdbDxDUGEwaMUET72JZM95ydEoB8eFgf9qsBbRWthikUadZGuXHPGdu7dvF6Y5YvCEELWkeeHBn3Wi68aXBkNs",
  "key8": "vaU1DhUy42viAHKUfz47zV6Jxwnvs7j7avhY2e3c4gvc3iet6w1hR1z4o6XsuozoStxTPxo82ThGZhczz5BE5eY",
  "key9": "3gLFM4UyTp2ftWav9H8HwAqcy4BTiVMxpzBdd8oGJz32jwo1GfXTxSdzfngnBMjyZQZLbhfG6vi12ddCtWnEvWCy",
  "key10": "49sFzbiG1bwg3g2cbH54hwQNcNd9yUTHpqZFeXRUcqXpsLiwUUxvZSAxzKZSoK42fRV2g38hpTW67Jt462GtQNxY",
  "key11": "4Fuf627kPDukRcRYZDnSQCvHmcBBohcwCjXNXULU6sruBPVKdf1pbVd5gBaSSJodMEz7eHbE1whm9UH8NMQnfpyx",
  "key12": "5wzGRSbc9wMpH4w7NT1TFtWarooatTFrY4dwPKLmngdDZdp1nDCbCd7J7vsthuw8xQCSAkEd5Ct17JFP2xhkvVzH",
  "key13": "BpNKRz4VGhPTxmDp7p8L7BDF92mMW43xGfn1AkXuXnruM6zAdy2gGUyL732DqZtCTcmPefm8E3ztJ8uQ4UbaKrH",
  "key14": "2XvQWyoYGkdteAbzV8GAAuT8c5GtAEDp1YHzWbng8kF163Kn5pShKtsZC8b8BmyYvBGbxcGS35ZAT23vDYqZ6orH",
  "key15": "3JvjAnf8sXshBxpf4hrD9HTZuP7dnspuEJGp4LB3ba4LiN7LEpSoUycmcypF2Zgd2iecS2E22hN5Rf5xrXXqicCZ",
  "key16": "2xC87jfn1VRj8FZr9xfKVtf3M2t4VvjP8AgSmvkdhkJk3PrDBRwVLaz935fx7qCQjhYwf1wjosKsqjk5QKx8BhiW",
  "key17": "5MXHY52EcZ2VoYKBvkpFb9b8dE3K4aB5njDjqu9ii2d1PEGV2X1q2WU58KqjHB4AJT3qA77db3QP864BwA3Fhjda",
  "key18": "55BkwBHwwXxEvzdeM2wPLh8LBQfbcPaJ7NQ3jroTGT6A8fehpzgWtMwibCEhN6mscTUdNPJY51gFu3jD8u8AgCvm",
  "key19": "37aM16RCzwUtTRCFGHULK2DrooCyKcDCWoJMH5qJNX1gxBKCpL4hYhQ3qMNewbqQWnpyCn2EKwqfpiJRx4x6mToJ",
  "key20": "CbqwsS75jqYcpuEadg1raRNAvLDrrqUjM5QQnCYE7q4CoDQyugCvjVDrydoVw5pSZdjqsK74jWoU8kwiTzBumkp",
  "key21": "3rNqSRmA9W3qiifbXAPMrikFhNH7Gix53bgvH7SBw663gTy4QHGLx1tTZe72LKvngkdfeoqR3wURv1nxAWCDQnns",
  "key22": "SwUdYJm4D2CJuposeRD7mBnLeKtnJz7p9y5LDuWwWtiR5ehbXJJMXG1rC2c51cdYnaYe7MUu4BD5fhpmVYmKj2i",
  "key23": "5iu4EisWedia9SQqPKqbSLkoDesdkZR2ctDiBirbrEBHKqGbgNcuw46nrk7jBbEQ2rKrz1utXMxh5BSVUxxBm6KZ",
  "key24": "3ef116VAA1yoURimjiSnBxeUMmS8QgXeSnccKAByVMjW71e1pfz8HdBhVBo9NMYizM9rECQSQHMXn2BpMUJDN4GA",
  "key25": "222ndadDiqwYyNoH9mzcTziN4TGnKd5WXAgCf6dnAgitazPazizEeAFXgquJUXcqnJZjcxpHBSe5ycFVqzY5XBrA",
  "key26": "4uK3jXW5rSmmUJdae7Eg5fkH9Dmdi6ae4vaWUVn7qkHjgWoJNgcTHU7FeYqQ3cywYPJUGAycNkT1WnAWpvaxKBwr",
  "key27": "TrdDd6LDnqh62hsqNnVq9sCVnvE6wQiFGpTQHRUFNvZhkwFXPcGgwEsLJnR9y7mAiA25UXLG8zatLj5TnA9bxcH",
  "key28": "5QS63UenWxrw4FqyFrTskytC2oKggr6knJYGSoUkufGEmmrMsLBd8quWaU3FSoRjr5VanuVt9SWzeodmUMrAWdsY",
  "key29": "RBS2zmbiCiLiVJ7XXrebaGAPag6U7HmGd8cytA8NcuTMg7wvrwdRZhrqNWTXDrMuFgLP7QBquwbqwnCeZJat7gj",
  "key30": "3fzQfULc1kmCdxj1nNUsbJtUSZ6QuhJuSRyzUGoe3u4AumPztRjPucuF44FWbD3EQPy5BMrrJaH8u3AE3MikT4ag",
  "key31": "2iqy8rHWyQLc96U79Xp4Mhjdg4Y5ajK9XGJkrPBArdrLpZ7gxcbbSCinHgXJ89MKr1ajHu6BCHWDuxtwruwE5xKB",
  "key32": "66Ger8KhHrkbhfWoDbxC8gG69Fw7ftAV6KCqjPY2TsSUJ5ig5s6hXyF25F3Ff24hTN2VqRDt78RXMYt4Jje7dVmR",
  "key33": "N1gE5EzYKjgtU3GiHKf4qBseksxfe4Mbbhuk3sq7NReZqE4g1cBsxh86Ds72PpJ3ZyZ8K3jWSuE3iJ41n7U3frw",
  "key34": "5yudBSHbyrSgvUoCLQ3RPvoLRt18JDM2YZHiJgJLoDiaaZV1Ubw7G99xgrLeBk5FLuhwjc6PRVJyCivAHj7DRodh",
  "key35": "5dyZUQkf1495fNQNu1jXCRvjVULnpwZPjk5VjniN7v2GdrUwDQq1n3QvnSkKXXnk6JjJS4Dka15fcHqF26KMHheH",
  "key36": "4yM21AA6RC3df8rhL5ivkzoJyAEizAwCCcPDm8VWt7FrxRnqYAiKtHs6GsX4G7s4NkbR9cUWsXBr1sDbwCKMmpQh",
  "key37": "3VrsBXNEHB6sSXK8tp3Go5BmpEqa4J79EBnV69ZqzUjoJ8Qn4uV2b4kvMU9E3HBWUsQ2HfGCda1fbfpqCSokGxP",
  "key38": "dszX7uRStGqeFPR5PX5Vzs5JDqR8sJrK4CizX9JPeff47EcuT4Z78YsXfyv11K5LypEouc5AFjeMuBa4QGCtJVM",
  "key39": "2F4xwPjJHH1wPYxSz2KXeCkwJs6Ypz8qLxq2H6yPCjn83a1UjK3hs2MggeWFLEquw6ex1XmVC89zttQvJQkNmaSH",
  "key40": "43wW2r6MNztkcqvjTSnTQKhY6ZDv5ib9eYWpK1AwZcf1QkpZ4GBEFbctik2sRQhkYZVn6pghvtTuqypRmf92m67N",
  "key41": "fdou2sbLDtrJ99f2ZuXjosmHnvHyG5ZNRq8bT4UATkVHv2uo5CkkyNMeTesxZQzAZBY6L4DskpJaAHXUVyrX8NW",
  "key42": "4pZFufEcw2zsk4w6E15iShwt8NRwHhzUDsg3aXvgg3Lr7Ex15uKg4pRvSpDpEPDRKyGFPaKtjLhVE5AJpAz5b9SQ",
  "key43": "22vWvP5aUQLspN5beFeck2rgRubQVm6HZzHokrgu8jQ5SNFQ3f7qp4LiFhtXxBueNzuikoRVpmXk8jj25NGpT39z"
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
