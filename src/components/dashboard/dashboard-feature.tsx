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
    "3AoVouUaa9zhpMMRU15p3sw7AnNsnyZD1s9m3kWKHk9xxDnx88oJzYGqR25n46bq2xuSXAtDxAUyjf7BXshb6MdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m9KoAZW9Qo9JJ71dVSmYFfRoNd38yf91st2ZoW5GRkpxphUYn3CnoGdZz5ykxn32hw52f13Q6HfUYPc7E7Luxas",
  "key1": "35fH7iqBjBJN7BKZWqX7TMBbi9iGSsnqecDNLq8qdefUAPj1jZxSmhBKhQByQGgSBMogjWLbcQLFuznGWF5BCrXo",
  "key2": "64UiJwvW7WtZeRz7RYL2VCSt6zsH6yr1qSe6brHQFwLWXaxFYXYPKhGmkxQVcYeT2K64Jk8Tus9Jyhywmp5Rh3o2",
  "key3": "5NugGRe7LX48TQdKBGCd3fFwRLpLHGxbtHVJxF1YEsbuNoZqrE2JCBTYZW5KQ8wkWhn6fsEwPAYQTPyyRoVn5cic",
  "key4": "4ut9nAf5iGrjXhmuDfLXibKfjs8viBtNSnVEr9bHSUSsgTFSw6FpPFfNiAJR61WAz6stYDfeHHoHpzdh1nX9sJ3t",
  "key5": "4jG8chiWDCPec3k6v2GcdFFCfBB8vmvRVZpCdbGfrAj4khnymKoJypynJyQG2y41Vqud9pzHUUPUHbjSE9wKjavt",
  "key6": "sZqN8VYn7iLajoAbHfmDEnVGmTKPm34Jv2DEZcTLecLvo5SrVTagVprH1yvdEPq3hnZ1HSrGPBNGsS1M5NVKow7",
  "key7": "3J3WY5DzRPPzsrExJkpRB55PyPAKfidsUf4AYVVkEZkVHaodea2fNQXjptceEBPjJ7ndHSFTuWnTmyXEtcNztUFE",
  "key8": "3hN2ULmFSNNjomUo3yPRFzf6xT2vzaRP5NkYFgHNEowMhvikWbLhuU5ACmBYrTNzyQaaDGnZbTxovdyHRWo2QfKW",
  "key9": "4y94anUK8rxQhLwduik9S5Vo2jHyY8jFCfaB6sruSKs5yfcvSieW6eRyH1yCjLuxXAn7Y1bZ3NJ4Mb8ZysT9y1Zq",
  "key10": "4nwzDtZhrz7g5XFrSR9TjfxncSpgGBFKyPwoKNzmA5ihG8EnuuqnJKiBnYfVN2FUjD1Kh84sUsy4N6qUX4QXREuG",
  "key11": "5NXzRyFa8rjYUampeYow2WYkcHNgqPEhFFhVMk49DizZq3bnFWFzW1CyZEqpeK3ZEy5uzrz8Nb9vA3qKJepHdDNd",
  "key12": "48zY8JS6FNJUz47u8vDH752pTxTttJz2Gdd4fJBUynBXyJhr5MihQcijcH1EQ7UZRQYfJvDWe5mEZBGx7LtMpjcV",
  "key13": "2hnWWrFf2m9TZwmy7qeQgRCDHAnkKPHuZGo7k69XTsbGFCAa1ExxPChTMYrfb1rDyGi2PRTLg8educUPGCsRvykz",
  "key14": "3BMPAvvQA9qDhgVQte6TYjwrnFeTxPfcKksf3aBepX9Jn9BkWkyBoy3QEdU5NGgXnR3YS52w4RrfaFbuA6MTvcq",
  "key15": "53aNo1oARaJeJHmnQjiGNZkyo4twTHnSuYTkyEWL6txkGV8KZe34cofRouWRQEEc5MJLvHfT294WwcTZjH1tk2zM",
  "key16": "5EFVAiksJmojWLAYXsTWMT642fvsRnD1sjbjPa1hrs51SYC1MfMFEHJvmvQF7KwZXpzPG6Bd8barSZiW4Zs97WfV",
  "key17": "51oyrSfRD53Zmww7djfZsBfrPWK5PCkLBhzhYzR3rVGiNiqgZPkC6oHpzVwxneAZVG1Ne8HnzjrdkrrzgQ21yrH1",
  "key18": "2ZVTGAzabQWei8UZZcC2ErP7JodVSCHpBANVzJAngK6nx6Kpsn6DFHgK7GZfViDMwFdoYNLGpuzoNdJF4kEa3kZV",
  "key19": "5GSUqZCzMksFyzecPZmihHVcXqeF5QKEAiERdAKUkKQohipNua2NATZ1DoDU3pVFQk4uyurNrPpqmcJuPuq8ieU3",
  "key20": "2mnCDRtRhAmPEYzyUD7P4qSQgraDfP45AdqtFw8GKUfNiYF3DRkVyXpeq9PGocNKVrxBqg78c9uw57jShsGBA75R",
  "key21": "rAXYi63SmwBDGKp8DH3bgHGX3Ti5K4XsH3w2AXT4s7HEhvQbf9be1MjARo6729CoxHJVP59XxvQz8vf6T9dhuzp",
  "key22": "5oiEQX5tMMhW8Guu6nw7ntegLTt9qV63BaZU6gHTTKb9SEuUEYicuUutJN9bQ73XXi3CvthGGZWUd9MbDej8SXPS",
  "key23": "4fGXTGbPjTKybWTNHGiGhoT4w9DWyS3viu6tpfx2mH97nmfYWU1KFN4QmVKJS5s7WjMMpWRv5tv8vuzpdENfFa1S",
  "key24": "5tpWLhWF7uQFmJZF4WgCB1oEBxfvaDhQzPJ86tjvSXEs2WFG77EW9xn3cfUfTLDxARpdpXoYRfKrk6DUqGG65XBx",
  "key25": "brssSi3n9okDCE61H36cgPXtoNkcLE4HhJ7SE4DBkTTFWYztmZAPdBtuGfuVLM5JQGbqb8DQDdHoyjNDQDzz6cb",
  "key26": "5cmBT2adnyKq4in9RDMXsg2bfitn4dsJhrKHbhPsgV6KgcibF6f8SrAwCUKbqrfGaubtb6Y1fNhTZNDFA5bcBX8N",
  "key27": "4w3as5HUfkw1KSs62r4cu8Rf5WRQgNxWCbNouxdShkviArQUyNeidwTWCucGRfcHwGJRc5bHyiqQpzU6FD7BzrEj",
  "key28": "12B7g5Pg39dLv5tFTvs4GU2aBFEXVbE8UbvxNRUjePjpL4znAYivmQVz2LpfSGLf7o494fdTuRzLopRWj7VCdz7",
  "key29": "3txJhWDDtXoWNpWLcn2crpN4wnoYK47rE74F2ViFjeQJmx5o6Ye4C8FxEmSPs471PxBhoxjU9Nt88P7UydAENTDG",
  "key30": "5Snh1E3RmnkcrsPUyrnWHDq57NqBk7S5C52p3STXFQumzco2WkFVhPemXCg3mN86sk5nNArYzohVaH3TRZQ8b6UD",
  "key31": "3MZ955UrnD33zZLkfvnMCwckAcQEJqngLMEYD26cUNXyxQ9qHHpmtSbnKfK3HLqPVv1F8qSCbmzoSGyJjC57pTcM",
  "key32": "kGBW4eJQcTYMaxBjYULB1q2FS3XBWxnysoKHGqDjQo4XgNdJeD68y1pwUuFhdgpmXMAJQKiUE48A1gWrg5c9iqD",
  "key33": "2esrnaxnhJRLBKmHYPBfpG6tmMGXYJsAZgngGBSp653uqgFNpuDyxMWi9fKE1UUc6N24H5TEzydTUxUFPNFQvX2Q",
  "key34": "5bQ912YvxAQyf23XfMUzBWyfRbERWtYGsE8YSmsyFziGP7ctnhc166kzBHiLg6Q8Ymq2KsXsMqLEFuvoZSZSSqHZ",
  "key35": "4cQvdTKgETR5wZo2Xt5y5PNWXgaxkEmkzUDwzEZv631b9SQx9Y3jrERwtn29XyQme1n1AkhCk4Qr97VPYLTa6vDH",
  "key36": "33kASGBoyS4zx24nyfmZfcwA9V5tNQ39ArgFp6hhTypZzPcoNMUnGsAWa2cDeDNZTcPRNqb3yKzTQGndkoy8HCeh",
  "key37": "5fqt1GeXePmhDbFGcBtBP1Z741EDB4Ag7vSuePgn3MqPj1TPj4PjgUNYpTkEwQNvZnFgS7LiSxnfEtHBGZckmMtf",
  "key38": "2J3ZNyjY3wgt2BojgGpbHqozGqc2EdGkDaKt86tLTjDoB14CwCpXT8cXEX8tzRzqVcZDbxZrq9NwdkEu1hVxXSiS",
  "key39": "5oZEVUGXsSV8Xqck1UzSF7278PvxNzu7jwTL94NxEbgdwHPx1Vc4YXd2bfuzoxDq95bXcyPmvAeVR1tyLyZKzwbM",
  "key40": "3QZxsQ6PU5dc92nDDt6rBz1hSpwNi5itpu4zLm8nXdzF7Rutsw43EQVyNvv3ALcbUACJFqqFaHcCzaid7ivz718Y",
  "key41": "qGiu2FKD2QeNGAtttq3TDF2fqK4UcZvKv32zdqFk9UHtsNdGdNkY6GeTnnmXQ8XPLboSvh6qsXBVjzF4GZdbv1Q",
  "key42": "5SERNuzo5ZPhqbP4ZSZuwo58QjKZU6exghuYTEtvsXyGNMde8t5MWTArCM5PzxCd1ZRqLMaxms5fXEBAfmQpnpyt",
  "key43": "43tC4vMUbKP7xBP5LsD8c3pnp8ygHrWtqG15mmayLfkpr5QPPTmZncm5PnEf6NYyttz54VEprr1s4yfkz19rqxqp",
  "key44": "2JitdidcKr2NmDe2nihYQnQ5ybMSTeZqG5F5UjZzwqWb6kb5K1SHBfkeTWkBx7edNdh7M5UZPU8qw6t5aXdmswuu"
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
