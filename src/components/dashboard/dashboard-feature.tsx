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
    "yweu3mZsTBTnu1BLM8X49wKLvZpV6BKAy9R2wL4sXFfvU7DYJVwVXoLXkdy7P49BKpAFvmD5fg3M2JgpssAkyjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iF4LkbVssZK1nojj5g33PN5UepFwtprCWbVCSaBaetwHg5Uz5zr1NLeBNQnZyW5gQd5dnMEB6Lds3f19oWRKkpA",
  "key1": "4dMqUoPB2327cPMNsRxdGEG2tp7cpmkCEhP8VYsJr48HjSfMzKzgWbRcEGxdAZwmuxV5oXNRDbRKAFm566CjB4qC",
  "key2": "5rGb7TiGTk5qeRP3QoKAGG7uNpNW7UCw87Htd94h8YvCEqZnCLYwoSC6Ea7YEBdaAfXxCm58ULcMFk86wPBrBxGL",
  "key3": "3HfuGGpfpJDVVRKR4vi2wxh2xzeoxwuxe8dna9i1nwXqP3VgHiE7Bnv8zq7pWsEbAHqchVPtFdZ8B9odtdyUg6hE",
  "key4": "2SJiGCv74x6Fie1VxZnEBte4RUKodSMjQeyV9XLqFjYLkionV8toSJp9A6ogCeFGGBaXbbdsxMtjQxLYfaWka8EC",
  "key5": "5ZoNaPyqMfXw9TcGpHhMkFoJixsdb1dUaNBbs1LeCupusBaocTT3SrRXQonyZzzyPZNgBBPx5WzVAdQkzRybYWcD",
  "key6": "5nv3HkEL1mKPpXRQu731yD8co6SqSvYqtiCUrZ7h9uMh5H7wcSrFLJfhzmN3M93VRQKi1uriDn1QCNmwZSTK4j15",
  "key7": "2G5juH8BWUoeNcJkzikv4WDoNP9MYRgtyLzYZqhAQXfUjAdSsLxLFrkob8akgBzNpM41QUkaJBXb8nXjxULT4UbH",
  "key8": "5KwUA71euUjdTv5ifwshW8qqSVxDgzaqQ8UbBVqv4roMWqCLWUUmQmH6P5akManwLHyZuVV9gKXQXFxeqLA49Q3y",
  "key9": "2DnectcE6NwMERgFBECTJLXuvWWE14StetQjkbwJ6Hi2jdT1UnNkc6fPwZ7LJ8Z4j4k84HNewybmb1BVRfaYVovL",
  "key10": "4UxDRqZD4cmdTGBse8am7V3FCht5KZ8jR8PAqtCw5d66vjpG1DrUKTzTfBSUUnbeX89EiFox4H8VrMCZVMZiAPfk",
  "key11": "2cyXNgUVx3HvGx3XvmNZbMxFTy3KNrC3zCPK5gaZkRCaT1PCBf1SCJiog1RR3F3KDwzmdSBJccPoQ2ouu7QegK2Y",
  "key12": "5Zko9YHzQW7cBQz2zUPofcabTSCX5EJAHW8AhU4jP2paBZjQbhgeD2mDLifKXGPeUsKRbqQ3eGP842idxSWFweYu",
  "key13": "333hhujo1PcrgpzZVy2GFACsXHnq4C3hentTkiNGHcRqU6yTMzRfWWDE1kYZa1sZ8YF7pkPMotzTsRYvRPH4Uyuk",
  "key14": "5L6stfgx8WJvRooy5haTaJBvoCseuBMSSQgTBZMuyVsSsomvyvA9kd5C38NQxGwZoFDj8AZDV4MZT7ZxPu2zYyxy",
  "key15": "4nYLTFGaQrwC1tB2SHLB5Qn5kTHtpLg54AsTCe66zSFC66iFKDKzMANHMM9MFvMhNiJiuj2wdKUnfy7sqkn29opr",
  "key16": "4b1mmFk28i5hMSkefKJW9fwgDviPzfEQn8EPohArvewHEbcg6SeXWLcVsWkuJd5429pfbevhYpFNb7rfnBQcQE4",
  "key17": "4A2FGvunHirpdV48ebLTbgH94srBzT4jTkNdzCraC3Ubtqpncbfe6jnreWBPpicQhZYoQJJaF217UmFg9Uw3uZM2",
  "key18": "2U2k1xWBamB6ajcNtQTTqkuv81CPGLHLakTBfdkZdWNgeJ7EnqptH7cxwquJTzKVktmv2NLadY6xjRDoVXbmjm3o",
  "key19": "5iyvgNmKgaQ9DJq6VWEoNyCaxKosfbaHgC9CJHXmXLz3aiwqV5dBPsJHDU8QZxyuCwpHBwQLMuMkEdmbLs8qmDyE",
  "key20": "3JbjU34L5juLg3SsaVH7Bp9hijtgLNRPQ3e6NkmMfVoz5bfPeeD4cDW9pzMaYqDRk1BTcbVDZVzCts7kxdgnaD3j",
  "key21": "5x65ow1fAUcy66DDyZ6KZzRi19L1qqXgcBwd5BUicvzs2t9MCKWgXXfr9DczufY9Zk11bsrKirYDz3HDsdJ9M4yu",
  "key22": "2sDnaiWsKs3YK2sRnRkH5oGfnBFZA2KkKsNGhajxNchRJDvwABuf1FJmrb2s5DVjPptJisAh2Gy3EUirqZqV4Z5B",
  "key23": "4Pk876yWSoJur2iWdnGn5oUxmEyRrEHg4eLuTfTyohgJbDzBFhZCtdGdrbsuxpWWwi9w44txrwUBpk6dRhHkoFcT",
  "key24": "4v4gJJuGHW2NfDfeco4TDUEa31jhegm34oeJnfgk8oWwsLSDvbmwCoEk6iwdjijTQj2RnQkk4ceAS4Ecsjh76vYN",
  "key25": "2hQDxirSMDUFR9rRZne8GZfjXKW1WjxoEcMbGB3qKdrTtNEkPs8NQwriwQCggfxV79Rv89FereUa1uRzEhs7x25U",
  "key26": "4X8iwmwHzQxgGpSsSNi3i745ZKEAyBkP54eu96M3ScWWEpiSn4JS7HRsAoqXHuW4YPy9YNkGog41udob6VevpVwf",
  "key27": "2qAU4uK5mtgAtrTXZtYYrfuEUeM6wv2aBWAEPXNuoSKP958GfiuH3n6uQBhwA314LZiuAFCDdKuvtEZQuc15KMHg",
  "key28": "4dkR4N8bpqHWuT37wyUwdapmZSQ4ejstQBdmW4xsRGh59MpytoRfKepiMWrKojnJpsU9j94rd84pvkin4faAr7m9",
  "key29": "2GTt8XyLXHR1UZrQh7FEwYD3cmvZfLyZ5yjG6hZqaiHmBNBaPPQmJCj6Wd7Kk1PFSgDaLSD8dxPs2kENmu5yhgAU",
  "key30": "3gp1fFVtQefTkAqTXBCyBK8gLQdCqFCF7YukZipBgA6kkbQkWA57ZSyHu2VbSSjJAjJdyKaKoGz4RqMznesxwEvW",
  "key31": "4Cbf51UkHhcfFRrRqsWA4TfK7VkAJQKC2ptRXg3fi5AA4SH5985wdXRdR6yww7m2FNd5r7anWudbBAkzvwFF7EE4",
  "key32": "5fnYZK4LahsTAukKq7RRstmPbk2uj7Kq7DMKpAHrRpybuZ7mokpYQHMA5WBkNJCnDZBoNuc7oaJetspZ7ArEjPXP",
  "key33": "U1aSWPBcQL3UwLtoyChf6oSkZha8W6S7N9CT3Ma4Uiy6SN1Cd2bP4wtbCoBGcW3jR8UHocDDz3HpXoVQLzmbcSH",
  "key34": "4ntFuLq2vv4omW9bq46XB3Ex3xH9UU6xceSUtnnuVUJ3tDKqUhGGhMtFfMqxTFLeLaPY2aXkia6m7qbCv6BNNvBA",
  "key35": "4G5b64EruGz1rCdpBVBwshi7EzD5HytmfvNSWZWauoEsXgUp3cWtxKGR873qotbXN4Qs2j7H1BRn93qPBWofTXwj",
  "key36": "2d79QozEULHWktq2GAGKpKAq9aYiKBuPb4e3AYikUngHfDxyX4MNXyEREay5uLMF2xxrEfzTVHXwTxkfMWcevaVQ",
  "key37": "3J6TKceV4UfEhqwTNiLwFvYKZm2Ym4k5WdeuBjJiRFuFY98JoJvrSZormMxUGU5KY61v5Ebhf4erNyd83nWZqPqU",
  "key38": "ftTLrJCp5eBxz8euFDGPTHkRGC2ozYypPcCpAmMsJx18kEA9zQ4tbLKtL8PbA9fjA1z1eCLXWCicVhiFuGk43Uw",
  "key39": "3Hrn7EhFNrQjZ1v1KTypShR96LNHC9upzDBeqv5pLEoaFnwVQP74TpUon75sPSWDNkyMGrWt91pJJZQT5pSGioDa",
  "key40": "4VWQayJr2urS6PfgUSVpeN6zhjhxAcwShiANiKKmUJ3tM6uA6ErXmYMfSrgtRGvUQPFVhwmgTcM3QoicNkerTk7F",
  "key41": "n8hq19CRQssBDzz9XxESCcEprYFrNgkhdP8RycvQCsSCage4Zw6orB3XdHFQFhP1UNkb9iYQJ3yQE616zRsjP5N"
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
