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
    "61E3oDMn15geY9RmuSgVPLGZEsNapE5Q7Sr6jTyQ9V2XzURDAxJkkPkc3wyaWXZJnNrLYH2sBYVhbukd4DELZwRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4118ymCgtapipNNA6hEXR5RvGjJXd8TfdJVGN4BVSuuuBRrbkM8WMGKaYHaX14deoBa61gv7oAqmShSC98SyX2pB",
  "key1": "3JxATff1nBD6XiZh9VGHwyQWvt3MJLUitjspeFwBvdjCwARfcCFvdPKpuDLZFg7u9BRBuus7GgmxKpg8unkC4maE",
  "key2": "5vspCUNAseswV9v6J7j7QvGJRAr7fSnYx5UVMThEA1aF3YEUbXmoTgFSsaSCuCutBV52BS98TRVFrtfsVjVvGneK",
  "key3": "2XGyav5i5c9TvBrYzisC2NQ8ZUhdJTMt4iHwg9h4Q8k8VhZHit3W7mCUr3Dr2LnaGqBibg4vQKCNFCN2owuEh1vA",
  "key4": "21aak3T4Q2K9HUoyGvahM9My5kh8MMv7RHjkmm7vqKFAYhWf37VGecQDapd3W5d8Wnh31pS1p66KfwzKFnfthsp7",
  "key5": "287exymQpdQi1XJBoHKfbBqoSA1D9ckT5RErvBJcbCofTRj1qCFL8RGTHWtEBEbssxqqMdKepBD8Ka4ZSztR9FCJ",
  "key6": "2hxhpVzW3sATbh5WUmu5kGBYE2gNpi9D5BmBFnkgT6GUQmLEhn5YE3EH7PpynsdXmahQ1FEJx468M4EMadotxAuE",
  "key7": "ZWmCikSUnAc5rLNPteCKtLeg3FnvdKFhJDgF3gpMNfJ5EbS6cgeFg4RHFfqdTUCcAGxKaUrHfo9rxvArGeZrNzA",
  "key8": "2CNQ8bzw4nTiW8w1tmVkMx6wHKDCLTbACWAhyMaqTVprZeYMiVpFkxxKX1JSTPJiWgKaP7ykr492Hct39piiACcm",
  "key9": "3sLnnszvjYGF74SKBjmP1opNiZZpuvuze84a6zrXdgHcM1qygRd9m6ehgJmzEb5SNEoBdG46QyRGZhwESRytqHDH",
  "key10": "M2z8qwEFnQx9QsjWsGW643GxhEwVcAjhxzGR3VNJwrsAFkAkHHWeRyZnTBxTUhgvrpnC6DXQ5fxBcNL6ge3PXBy",
  "key11": "2hy5EoiDN7PPhMHzriyoareKogHLjEjC9kaPFeTMvjXdKDpGC1qUYmt6ixf4nhecQfFsEbCAfyKz1qZRrZVu6HEY",
  "key12": "5DpCUSXHBbJD9o4WefRBL9SpivaNNgvRxB9zncr9nnQfp6Jtxo4QiJdBffna5gHo67Q1J42nRLF9tJABNxe9u228",
  "key13": "2ZZ2dcmqxbF8Z7rKnNPJ65zVkwszqNJkhVd3Gsm3a9C2ZiydQdKLgR8ZR7SpHL5KRPTXktjJjGer57Uoh5A17KP8",
  "key14": "FjJnUCAoeWoXV2GFuXiTpdbfs7uyiTLk61yLSmEzX6NNJJVwdhDfHeWdyPf6ehLzZuYAQACy4CDGLsxKs5agoZv",
  "key15": "2KJRkKqJuUa8oruqW2RwfwCWUwcCtXU4LXpzFWAwYmDi3QVBYdcSE6RGDrQspt6t7vPw5kmViCk7438J8n1NLye6",
  "key16": "3SAGhB13YdvsVMdVT6WjPyJo5pF4DCSYqjYx74bFhzgzUPXjm5c1oBi1M8XHoVG1MNbPNmMxtgQVhrePtyxaRW6Q",
  "key17": "2b2rd2svhMpBvrTHUssPaucJfdTFmWUdMFcxckKqpyXjfYb1FEPzDCTFM7bGBVL9b8faB3fRewa8erQGjRg99tRi",
  "key18": "59wrVb9FTY26J8VePRjMHhRqnz2KkEi2Kz5HEo8qDvbDMNo5RrTskJmdAcGsncbXjFUhCdTDJrMHFSyxNyeTNwvC",
  "key19": "tqLDnxGJMnM71g4qjGbdUiCVjj4tM8myK2TZ7JgjZcn5Gape1zQrniham2mo1gGuQUbykYiYZi3EZpdvS3haer3",
  "key20": "3iCMN11foPFdJ4ypVeqRjFvCE1YviNfUnhPV6hz5W1F7kX6zEh44aSpu183eNNwHvuKMW8Q1ie3v42f8Uqb2mivD",
  "key21": "ZWKK8Pf6JmZ9TRkEUeXahwieoqYjUVYfX7jG7GRqBDNF871uYr6DpawRRKFJECnjb82VnfpPfmAq13c2YB8o17h",
  "key22": "4QninepeEwwT5S7aG3MotpyATRffJHS7oSAGvWRwpdRZYrsZnoAsnTtCLbxgcukwhrbMu6rXWbmwaFU3FFvoEdsQ",
  "key23": "3ZQCQ3EBZDQStCSziXQsxcJ7Ci2VpcBKMhzrQnXKbqUgUzGV3F7TADxixeMVD8UJNyDXHvKN2cZFnXW3ZpPyfiyi",
  "key24": "2q89usq3gq23sCZConyDXT8UdSVbzDZnWmAtbp7XrRHAmEDd3LuvYB2C9t8Ai1HhAk8EUpF1N2jYnnb3R3sTGWxn",
  "key25": "3hVSePMyD1PhkNxtiXc2EBfrwLQQ2DoSh88cEtu4TztQEU6kmYobzrrzsk4r3QyfMFUwzkDSRRnHjkks5P1XHMu1",
  "key26": "EvRHbj6nsCezzEGURPm1gATuid7AGP1bbcSmcEo63dRU4vWTkodwZKxm7Lh4LTuhaNMdp2dwyPgeGeZjDfVqHMz",
  "key27": "2WtnbX6xWbQaXFbarFYiQizJhdk5EAVZHj1EH7BtmedZMKvUA7jy3VdX3zV86pqciqDuB3PKQzBhVneX4ch7tdUo",
  "key28": "2vqsr2Qzf4CZMyjjJriz5qm6Z4qWeqbFk8gNENoKRjZWyXbaveRxUbw8dKEmKkbKGa3VGsXGj2JxY7RomLYAg9dx",
  "key29": "232VmSRwVHjNbEULNjjNnzGhUCP67hcRyYjjoA7cR9m3jKLwcGdR6iXmgtWRbLQdrj9at1qr9UJ53h2UK4nMMkjm",
  "key30": "4QC39QKzYE2mzvJ1HSu9mTnotvCN62HHgf6FRGb9fAQEgup4hws2r7pYbAaZLkGXtBEpbNjWNZ5Zq6B8MWAkTPaY",
  "key31": "Wun887TdQDwvhMn2D7cKrUypdEVEh9XygGecAKq1E1W9fepd2rGjhKpQYVmYMR62pky3fLy8264vdmwnaucoi1S",
  "key32": "3TeAvKoEnMnmhQQ8CdgtV4himqQTqmGCaqsepCjUyzmtg4XqJes1u6F8v8rMVDPHcfn7nHmc54LJ9LLZifs55GxE",
  "key33": "5EUmnioMjkbuEsxgdHBgdS7kuUWYkogSePNd3HuVBVyNTNQd5Xo5szyyB7KzXv8t5WEcBLsfeNtbK8iYpMwmqkDS",
  "key34": "2tznh3pEuWf8veVHN7n4qv8cuCmxyKgipvNk7kkcrXdpVA9j2xPnnLXaaiHjV63dCTv2gs1kqmiqQcGcDMNrQuaC",
  "key35": "Ri4sVyng5PCXgHjXq4Ef1jQUsPKcLGF1USHSZ44mCLei8ZSwpKpq8QVyUvM9BuVXDYmdkNdKTcwMGhkX1q8Hkf9",
  "key36": "5TdsFcZkqUKS3qsTk77ianXbBUeJvsw2vZyUteZpdFQ8e7GCXBw7uEEkB6Zno8pVKPGEdKNUx5ijFThPQojktbie",
  "key37": "3Qf9aXd2V67dse3jqkG4TCVrc2u8YVGAUqCHwpSCZ5hVHELNF3nkwUcEk4Cg7R9jn5Qr3N9j3ijfuW5xrxxvyJHn",
  "key38": "2fApfUMCH1DvWXnp9mjLzgdApPpYNshk5LPnaiBMXhphQLV9ugfZ1Q3KAG1g5oGKFgfTCPHbN4Y6Dqjufo18PvBE",
  "key39": "3vHcBeb2e9BdnGsJT6ZB7CAiW9po9p3NRE3WVHq9JVzV8cQ7UQ4AGfc2Ke4CinDaPkePvVyxREXKPKUyr7reNara",
  "key40": "jEx33Pwhg8NU4nWZGPfitoiMQnDbJ4ddgGKL5tjfZaP7z1eFtPStqLhTYTkPo7u6mn6rKn2KVCtLHN1GSe1outL",
  "key41": "H1qzTUapijE6ZV2iHufjnGUuch6LRu5FacwN2jA49GcrNpFAyXSVRNcVPLXQ5YJpaZvzaPzueUU1fKjPnqoQNEF",
  "key42": "27f3mGFmA1dwSXeuLECKNKHAndRG87Q6EDKdmZkKqZCkTUCao1mhA7kuRCGp2RgbeqPVKuxRAQDe2UhVFMwvFfCX",
  "key43": "5A3WdwzCuyJXZRcKjdh2MoydYv7ouZr6kJ4NYDv93Pqmoj6RKpKZ5TAoUJXpQoEXFd4pHiXPCbDQyxKza3ZEbp6M",
  "key44": "5jnvWx1JW3n7Bq6276R7MyKr5KaZmca1FckwGFtnmvAZJ9cPKo124mG2HwmaHXJ7cy7w9Ntym7ZZckViytuTU9xm",
  "key45": "65bE9dC1sRwiQah9rs5U7P7tkfQYYWGFfTJ2TSnW8wt4MMbJopKtkvPgeGW5kfkAfVfmy6up1N8huQgy4MMXj3WC"
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
