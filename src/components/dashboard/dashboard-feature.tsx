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
    "FmVbQe7WQhe67fc5aLVauMAyidruJggVDwXZJb1xhbmc4aQBQDR3VzXXP5ZGiBNW81RaVZtmSSsfZk778LjobS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2heHUEfPAMKTUw1impYpo8k8XKFKJoSmusbkyJkEEUNMq3ELbWiz2bgEHepNnThDPRU1RmMmD6REP6Baf8XGnaC9",
  "key1": "DYDU1LhJgRiEaEx5QXjGJGb95LdrKqNwYkzLnQEYtLrbTnvua2dHw3EkWbe16QM6cmkqZAXSnhUMTcv5tDjXFgH",
  "key2": "26rHLKRtW591x9CdVt94Ebq8zkExHDDscrD4TfQqamvxe2sJjgo9J1agjxTDs18etgfVA4csiHinac5oHnRETcJ1",
  "key3": "27ZuFCqoLRAuKkvzM2RjonhchmP5zN5gdrWGv9eXcpaPFnKn5PHmpvs4iuooEKS65U1NFPN8te4F6AdAioPMgF3A",
  "key4": "mY5PmCzv1JujS7QBQyka8PdsXeL3TtidTzoyCDotLe5ocvwPdYkudaHRfV4j9f7piqQKZokJxFpihENfmJAP528",
  "key5": "38MZ6GsaUEhXnBnrYoD3GUUgsp1gpSHbv4rqSn5nuPRnF3eYyWuaZAKvyZpfa6NpYqFTZBSp67uHgbZ56hGcRbZF",
  "key6": "Nboiu3fLUPaJ1VAwQQsXC7mNE2v1ZfaSRUAASqQUdLDtzSVH5WmPbcf8aHz1Aav8cVV1apQgHr13dU7zkpFJxps",
  "key7": "UPEZQsXk2f2MPKEmruDsVPV9KDuPD3AiQPodXE8SzQkdfAsurLRS24fuacKd3mWFkZEDNa16Twf6M3Rm61N2BwD",
  "key8": "5KeNjUoVNsgMUgE4mHThGqZoExy1Ta7appiL8XgdqhqGYd9qc8xXFqXUySa1FA21bzJfNMwrfCXTKqtvzkTNLyf3",
  "key9": "kpBWGujHGvx7f7dAcNbXctTsoA6kDqNMWRJsRwzo58DhYcte1PzrwNqfHow62dceXtKnnuHcPuNpzg2BV3GUR6h",
  "key10": "3xtuDqNHhEazhfRHHWkAS4wyaQNBiGnfjViK4E6nddfpNhsVCEkJ68uU5sovbnHdDegyCC8XMXCz6HMvuMmKBKJk",
  "key11": "3BS2B1P8sSM3zztiVQxwCya1TNy5Y9R1mNkyPgPExeNqhPWDfZMoYohUq97WSWgMd2x2ACjQRsr8hmhqewb9kV5a",
  "key12": "2cYypeDABvhCFWfu1nrAdCQPjRBtRLSS1sQe3e4yUx4Lfq545EN5gedXZca22MeXPCrM3ovsFaWrSyVLxyQPDMJ7",
  "key13": "62VYJY7g8XmoHj8PTjoPYvkxp5trCrN4PgN8Z8CWX5GkBjM1q5RGKKugaK8nNYkmXKFndbUKuMPqpEbTkV9vmQZM",
  "key14": "2D5FZzscCBbN4JwLuzDjph8VZSLt3hWbfoFvZAaqMje8991VJXfUGg4i4gCCxZq8vUA7u7TbwUYoJkXksg4KSymB",
  "key15": "2oM8PCLumzkH7xxcyHiiQfC8AhuAVEsN4RztyDwcwAu5uh1UaNWtN4vp78T7VyrZBfP2FFrteiZyBJpYEQSBjXve",
  "key16": "reLfWkx7JgwU2dKTpg3d2pCsYvuiauP3g3garoSSWvWVHg7D4wnGBehHCmjd4BNvXUmrru5DWHECAPDDVQFEpsn",
  "key17": "3qt2mfThQaJ432fUgTAZJZPveutwd7ihuF1ffXzLQZAXHnLk4NqKoKVueSU3UiKxRst969mqiukFQu5qrtoejhd6",
  "key18": "5dCCnXNkFrHhs42Mv1dr8nF8yy77gDpdpwfx42qrZRCJdwHiiGDz7QqhqshbsVEo28EKzboyWSdmEqMNGfayQbCA",
  "key19": "45oph2pkAAkvKwKVqDomu5xqmCRws35ESb4jqTdPYkycmyLuzbZiQkJzHVcksbtCwYAwvbqNH6ZoQgrTqaCTRtHx",
  "key20": "ajBTV7tyxYJ7GZUuGnNn4yyNG2MxZLD2hEVpVj8SjimW85KyDACxHqUdkbYjZwd7WbSXpqjSsj7wJPMY874rcfd",
  "key21": "D4N2WcHZHGT85gVn2FNTqM4sVgj6qEYSayBnpF7VzuGSxtceDhdcRb49EWNWeEL4KPaeQ5TxxTqFMeSvvr6y2Wt",
  "key22": "5i8Y3hNmFi65zsDcxG373NRG4ZMCWqCB5YDmUvEFVRdyPY4RK4t4K7Du5m8vgkeBiBx6dGR1MA3sYGDBo88qkP8u",
  "key23": "3gbB1mLBHhPs8aksYdP5nTNL5g9wYkaDH2e44jU5rCpe1purh39DKVAX1uYdzE9cWY5C99qsU8W5urRvHhLuJjoz",
  "key24": "4HLsBkie4RAfiVd8NiPB8gDFdBQ46BN2B3kZCT4bKjSpnw8PEKaoVLkX5n3UV8NeX17WA1FUzNEKjEBq4Ygjh3j8",
  "key25": "2xyBDe9GvTiN9qpTZC2eU961YCyz4gEgMTxdjS4aVAeky91phtEMCYVGnxzmCygFYJoNn9nxCTJCegKWMgKnTtEu",
  "key26": "4ssqVj7MXgmK4LSAv7ogx11wLEm7FBBhA2kG94mCxgW2YNrw6QkL1qR2xcrNCdABFbPiCVEnKRj1tDotEPWTJJKW",
  "key27": "2p8y8BtbbTtgvNQcFaECsFbfRAhfiTQcqyxfBaQjxm9FgGi7WeFSQPmHq5iecfgxVbbA4z3qfYsh8A7jzcHTpyhc",
  "key28": "3TaYuR7Nf6yhQix5de5BEqSpk3MYvkeVy7CNLJBkNWBqtT5VgjuW5S2VLDwP863nbfUE2X8kUYpSB2hzms5Xr4UA",
  "key29": "5gk1kWJbfDwWg7p95dmxW1jcnqhHjCJi3oYPWRwogZxXsDTLM146MBWc3YQWwKRDNAUVN7d61XHcAvDSey343QjK",
  "key30": "3LQwKKwrrmCu7526ws7nPu1FkKVJuYCMCfcvSsEvsnHLecabdihV4KdUCULEg45EVQY71cEs2sNvFSzt5DZziUgN",
  "key31": "3udLN6Zt9SP4T9c7P4Ry6SbWJ8iE6iDf16DuB1ZCUcLr9RMy5vf1aADXwwgie6h1u5ErYuM8b94mt75eZh64Wqdm",
  "key32": "5UmWZt9BV26e47vPRCzoSYwQttb3AGZfJmrp6TFe6WbB2BaG9Y6dyZNNJttAF8tDnh2z6pFG1HRaQoeYb2ZDju7w",
  "key33": "26cfTpKZCL3YQX1EQn5gaZrZxUJ4Pq82VgYuT9BruAnK37qaXMGYdeKWHui3ueKeqNYXkpp1M4eHMkKZ9R4JKVC5",
  "key34": "5WdAhjZnoS8m33JAJL1mBS7CUK1kktF4oKZ7tcCJghCxRAR6SfhHSEj9DikBPZDof6i6szDE1dpdc5uGcoGQz6hm",
  "key35": "2x2h3HPBt7CUgP4MYtxLGwU4YupBn8f5afmqxfkpYhXgVFjMCgsDF69Jzbd1pVKrrhL2vVdoSEMmBA2CKpq2Cg8A",
  "key36": "3zTNtLuNEzywGAfqTcLKjiEbeLDqnCE1D9DRP5MjFYrEhgryekUZbrHcY3zQHN5oK4BMdT1gMs5ddBM7rwxgrkgY",
  "key37": "4E3PkH9zgmVMvTEoDAL4MNVwdH6SCdWNpi7uWpJWAVT8yxPMM7cUVCZbqQuxbhaqFNK2zkhcsZxa3U4LiCGQUNoW",
  "key38": "41yKwpfJqaqV9jYy2Z4g5HN1xKivK3wuJATJzV22CqDfg76BKEsbWt1xN1jesAL4wo3Exswitg7wWLYFbr5oz4tp",
  "key39": "26LS4tXyZ5B9jvdAYf1Vx66AEcjawdmZ9veR79YexhNfXr1cGBYudTgN32SAFCGBjE2FeG5qz85WAP29oBnE8wme",
  "key40": "iD8iroDBD4P4NCUFeqXzb5zQngQmCy7ts3hNiu1B7qzbp6u5QosTLhLAoKdv6qHr1seA5m7Tmh7kSu66FECBkKJ",
  "key41": "5v62YKk2Apvc3wy8vRjCNTAGuszxEvBjybdnkLgRV59iKh4mgJY2HzwSrwFPP6brbuqdMc6gmmYvvBVNobUzJjWF"
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
