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
    "2NSGHQrbaKExBFWs1SCCiDMeJR4FVQcXm6uNaEM5vmqRKdcyoXcay1C2cJTvCziXv3Cc8sDgDqoD77nHBEKgywE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sZbsdxhbHhV6V25zHoTERapzdVvbJf8MYULMVrEmgftH8K6ptQxanp6xyDWg3wQxMvZ3wt1FASFT7KJDvW8tbDE",
  "key1": "57w4jianUf9tTgMyXbjj93JBfnJXJTXzuMTG3tuczYarvgZdhV4Y7pgVSVMnLmfWaVhQAYN8JuKpFytJoeXLsVsM",
  "key2": "4Fb89weXGYQ5LenDuLJkKTLiKWCXHoiVFYhbBSs4GJtXSxAbM1jx3QSjpu2uqAkaCgi4q31FDsLvrGHFrK8S5pNu",
  "key3": "3J4CjayLoYBTiZVbF5CM6DTbrwvFy5DBoHPHKG15HWeY4v8xvkBEYsU5SjZZC7LstLSmreo8Ai6KSFn13ttSh4fy",
  "key4": "3YQTuLuntDJaT1r77Rhrc4mC3zUjHyMBnrukY6sqAuLxAunEpyZRbqgKPQCPvZKJnTwG6rhk1AiJEPKYmhEXj5rn",
  "key5": "3es4V2hnL7CFVqcCxSWAM8rJ5jmaxXGpdCAqHXApxA2GZNvtgZVseDvaWt6xAkpyu1dHpEmpAkaaLsXb4ThZ45P1",
  "key6": "4HfW4fnShx6NvyXVBRVLRuwjnMPe1ZPQshTfqJ7BfgWvYJak1YVK5tFcQVBcFaMM8aoWAos4AphzkJqfpAWx4JsB",
  "key7": "3Rm69ey7sWmQG84udR8vLtPL1j6Z9yNMbLFi3d4mJs8MaCnuvfHLPJzWskQPNPnykkD8AQBT63DP5Vjqk9M5wYuS",
  "key8": "MLx1Wim7fYFV9q8GCjubzksnT3vDN5hTujLP6PQLD4P77dgNr92KXSeHKS2ZAT3Fa4S7xiG4rCJgm8dWEY51kMG",
  "key9": "3ET33Ubn9gchMAkWduG5h5Kq3ViX18wVZaN2GLc8Chj3qpcVte5W479VE9ennSTwxZJqnNtCfyovmgQ7LuPSVGtd",
  "key10": "46bwY595zkVTYBKwnGnkaprRC8PAsWh7S9JzR3Go3f8FjF3FkkjEKMyqAJ8xB4tKduCWaCMePso4KKGpZYBQbgtY",
  "key11": "2FjNT2EjoRjPPJ9Uc62XdetqcJVVevhxV2LJhhLzrJMz6PD8UoxD9veKA95Pk6ygH3Lf8gbPZvEwMtVB91FdDf7j",
  "key12": "3TyYB2ygVkGvUviuGWhtNJNYZUPsMjqUaEcH9kiMJzjkzHJ21zmaxzN1KoZxgd6MZhEKYwp6fXCAQATPhnWcBMaD",
  "key13": "27aBV76mu92uvJChkEVbL5snprCF2Mf3opfWnzGToykhay2rieQYDsJ57VRyPiTSswiLFDdQWX7soTvcnrxYLhje",
  "key14": "2cJmmXPfUPP2U1KyBBKzZaKWffcEse5eruYnsZDMNK9eEq3BsvzmESNVdB2oTqtYQKtNFi5Gkugvn14yGXtT1Fvh",
  "key15": "2SmeTXUmnF1mirLHuqvJvgSAKDahZVharT6y8G3f2gM5W3BpYRuWU8HsCF8HGwNG7gEDtwNVk7p6EgVzkpnLbKif",
  "key16": "GuJpJ7HYwJJ3RTAUnjRDibkW8JucAo3qvSXJQfYNFywBaVrS1y1aKeUjnyShrQYCnxbwpVUGPkyUFD9byu6C2EW",
  "key17": "3EjVt7AuNJx64zeUo9XPgncxWn99ABCakFWEBDLY2bZe3w15Vd4zg5236djuNpPxdjS6Wqe25DRy8fB2K9zWkTgV",
  "key18": "4JZDNFKsRRmhq4U7qX74z6rQ1KN6kAkUZUsv43gU34mDFsgPAbR1eD2kSKT6BuPt2UGNZWjxv33rDLwWbRtEqCKp",
  "key19": "tr5Wxybd6kr1hSf85kMTsRE8PppeuY73HkfoagFiDCfAnuwkDVC5MTgTjzX7pr9fre4CX5DgYmth8tjZSr8g5ai",
  "key20": "1291Pp2hyBuP31SF98rhCcvUJEHUKGD8Z9E2Um8EpAbyzyKnBevzfnYv5faAGf2JJUKHzNVpYPxQab2MZSuCL97G",
  "key21": "31DMG4Wf7J1k9ngf5nz7n5wsAwoNmMZZ2cBaLwbikGRv6PcRTC8cVyipTFRuKxSE3BpCJU9rKHvuZmHGsRC9Poh8",
  "key22": "5JseC4nHxUBnZ4Cj6mkYdbBEQHZpsZaGQHX8yfqpR88LuKtcDkGeNbsx5iQGUmQWD9KfMvHivC4tsrGiwp3quwzq",
  "key23": "2aAk2LbTANznpHCwFcgM2XA3jNpac1XepKbrkpXoLLVLmKwtJaq6GSKAfy37F8WuGFiNCqoiBrzqNMjaXnhAN33B",
  "key24": "4GKqcRnToDoNesWJTmE3ka6qudnC4387vg4n8hwtZAcG3ZTbaPZtdf2kbzCAnGv5r72s4WAUKN1QvmbgCC2KWhtU",
  "key25": "3e8Yd7Se4CXp1LoHvv4hiMEgdmEcLfwfkv1usFL7Pu88Ki3qFjW5225od37mFF8WewLQiv1V6z688uE7hzShbwAB",
  "key26": "3Y5e26SqtQ4NNMZVApBytB495E1PGdJ1LESoyDFyjGooiqeDsagRNv1nf5MLHWtFck66gzkaMJn52MKPew5fyCDv",
  "key27": "3SRak1x2HBRC1xjdnuewuLtqx1DEmpPhm5uZus4wkqnfTLKLPWerk9dcQsm6k7nWvfkUbLyNyEYjoxdpCfuXoRCn",
  "key28": "5MzjndfPRAX5oELTHKeD8FNZJKf9BfNNQLmWkeadjtbPR8GsPAbBJiMfAL1k4gZM1vfHyVYbypooCzehrPEqN6Rd",
  "key29": "5W9SV5ucSmMK7mX8gieEAd8FooiAZxyZ5jvUTcru1tM85mAtq6Hfa2rfMEeEj9cV3hFddjRJvbnGiumZxU68toJc",
  "key30": "ae71RTVtYA6U3HR9R9QGyYKv2ozQACgoe5q9rpCHpRUaZoYJzU1mRupumaFY5jcc514d2u2eCyyGHKTUFqonFLs",
  "key31": "51m7UX7NeXQvQD2ohexQYx6p3QYLjPzfxNTbYutkSWZaLXCYNJSW5rG7S6vb7Ykcz1hwyh4J3LvNixeBiFKx59ji",
  "key32": "4oUAfrYgWi56C4bUbwHRAaTVUPQs9dq684uCn2te4qod2MD2A3nh8Rdg2K4fcG8qS3CCWxwTtm9eArJXcTG6SSTW",
  "key33": "2e7biWMTWdTsP7w3rZveui7ZkU6roSCj44U6qKzm9tch2S481uTrRpeh4XDGuyboELY6FwZbarrD5mzGBCshNzSp",
  "key34": "4aJkcsUscpsJ7RqYxaVdTrvKQcR2UNqF1S4cmyisaVKMNgtvCGCFDPzbbYvmkkmPtCRM34WrBGMmYcMoMus9fGGd",
  "key35": "61ueVFRk8K8fzqwRr5FwnKgDghqUPgP21DG8zTFZ4DLiSZZC7tD5tZhmg4wWKE9d5KH4epp6KeJSiGjiGJjqtFLa",
  "key36": "41buBg2f6bCJbQUSjBiGgM3Ywimja8TPuRwGmvtAYN51xJsBF5gpsFrJxcQLaDLVpt7i6ms8qStrfgzX18LuXo65",
  "key37": "53JWSLuAGa7W4XTPQCPxJQTLWbddHZUdCZM65GJ4F8kjojNrQCbZTasNAQ7eejefgVo1mmK15pVUZES3BzEJZUXz"
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
