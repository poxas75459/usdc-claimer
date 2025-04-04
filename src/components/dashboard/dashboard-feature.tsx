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
    "2tWx2dKxKUeY9RY89PTzvuTKr4v6woZZCHcyqmppAZaCThd9pdRqqi8unjLRre1sG65gn45Bpuxwfyr8RdtbFbq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UrKyFjKKkxEuqr796fVGkQhUHfdCbFimA5RZpQ6PskngZTB4UB9EHLvuP5TRfohWAQeF8e6hxBS13en2Ba6bHtd",
  "key1": "3uzXeX77N3VMe1WquDa1hqgwEjHBb666deWmdCkAAm1TwzdWkk2a35Ni9SQkzZS1AhBm35YJMocwSbNWd8NwLtWP",
  "key2": "42JgpbNEVUazDHWvki9jSt95ykecTBybTs854AHCWXQZN4AAadxSgZL2NLHDgtKNTUCEuyRgcD2FSRR2G2PFnG3u",
  "key3": "QuR5NPYP1f4URCqSA8Cvcc6bFy3fFquUcywXAc4Ae8Q3zkAVjeZHV5nfCobmPA3sXyAvrfLAysfipSnaa8CMRQk",
  "key4": "5bbuWMFQYZUf2fAPYyJFi2414MTW77bsSZo948gfGx75LNdA8sivv2vJzabKee7xmRaJQmefKp1vLpwXy2ijNTkL",
  "key5": "2eJG52iAV5EDtfVTi5yJLXDr6a9s4nw72XNfTEa1vY4g9b6nQ81FU93CAXbtZ9JDT5hHFX77wvncdpTEF7kyqbWx",
  "key6": "2oKTGETAYsfhNmP15iKEfJZLErYvmMWr5mwCPSRHvJ3LDjbWpzxuFD3XQ48TUfXwYAtrudr7Dz6g5XBwconSBPNi",
  "key7": "56dgETVmxWgqp1RdVHBAw7YoQgGgKdc5RDbzaKTSyie5b4X6NXTekjxPsU5d4j256V2DXDRgBxfftV1c7K6DpWXr",
  "key8": "4dz4tVDg1oBXTqNVgtuacoH4B9KZhLe3PEbU1t7B1toh2Dnoo239N8qGfg9SSboLcR93TtQyrsnEt262AXjhb7iy",
  "key9": "67PhRyGfd3o3WEwfqFAeNKJChiN7p1GFBTLmACxTyTMp1y4g2MWtiaNXWKKnp2KfJM5THTc4BaL8cShSxpHnNJ34",
  "key10": "3fWpuEYUkoj9k1cxmQ4NB9jLfFutyVBMCAnwsd3CZXH77S9u6KvGGNDExpqMyrXnPqoZPVZt8fFpcrHkTq5YjkoC",
  "key11": "4DMNorT8Zoch5bRneuwkNaB59RgowRHgazzrBAmaGCp3uMbYvhe5pe368h1w1V3tQeGRJFyb4vwSFPFazGwmEySU",
  "key12": "3qe8NqfsM5x1Z6zJhtxR2dC2ZEvFH8NrwLf2wrT3jdEyMXH6SbA3du1fNRYkKYfEUC4FYqWQkhymbevYsLeT82Zv",
  "key13": "3oAeQjfMN6a11cXykpUDzJQtvfm5vp1k3oVPMkrbqRun9ZS74HbVbBKkvq9CwULdSVXE7xvP1UtwDhmfW3P6pUh1",
  "key14": "4KC3WAC72XkdNXwq9wTMhrJYNWN6CV6vp2fmC8d5NLpCwT8i6Q4dHBZBJUjxd6MStSEnttemRo8YYjnbNnphyHnq",
  "key15": "41AP8z3GuJXJwQuNuMYnCGTAsewHJGvqWVcmWrvrBv5h1MX2BEsAna4U4A88ktoLpYqqwt75QpCPnwqAzCgGT5uA",
  "key16": "WW8YZhbN2zMySBLe71Uveo1sUkwrJo2DGidsJ4wcTcUwnn39yoR7rrx11Ax4t42o8oRbgHAyK9HqFq5ZoK2jg51",
  "key17": "5iCGxwiQubL2MhbTg28dufsppNhx3QkchHRg6mhYfPgjjBKFN2TqxoM4gj2VbQLRVt9rkZ2wpREQBwDaYJNLfUJT",
  "key18": "3wnJuuDaTwVb9BRDtCzT3347aHe1Q9g3R5RFx9CyEBqS8NGRu71hNTz851mnECKFeH4sEcojTbvx4worwFz6yNFr",
  "key19": "5LVm4Fg6KEXUsiFkyhag399HuggTgHaaacFAbLfrPBkLRzy3CrvWviRq24HLmYw9zsrAQ4NekxGU3h31VbZqHxEy",
  "key20": "3RwF6Rnh9g2z9Mh68y3tuRLwZVGaLP5oYidJXec7UQ4RMN7LwoXGaLD4JPcKayRzZza9YSrASbvSWiaHZzUyB5Mw",
  "key21": "2JP4kDSGefDyXyuyD3Eir8cDhaQJLCC9KeZt7VvV9ogZEnGuAD3mgckg3MEdP8PYpzBUmfeWm5wVar1WHgWRacx",
  "key22": "4j7LTTzSQkEbTMnzLBcSDsycmPhPkPMi7dLo2RbSS5RTL3MrCfPQwnuYUan7JKpjCx4A3ycCNUuPetVn4tu5EdCb",
  "key23": "5cQaQgyoJCJDLLYGCb5zn5y7huYzWu58PdCckNpe8J4yeJbymdA8jQthgxjpW1gLjmbi6LzEmKvgu2BsXDW5q9GK",
  "key24": "2FaEP65kwvVQ2YGcWDtWxCnfWr93wEtTYsVdihwJBVQ3SgEthNGobPMVUs1HXSBY9QDmf2TyFSVWWbwYmKgYQ4iC",
  "key25": "2XjTvCuixd1UyKUeMBzvjGnpft7VyM7CAW64ohdQjZTYY5Ux6kM9FgQbjhYeUWZ2WU1QHyyoqdsygfPXRMSfT1sY",
  "key26": "65FWhbu6arafcoJLt3cCPMwhDwVew1resU45LwRwXAbkLJRS9mXEf86vLyPHGCPWfcg2PQ9AcKb7ACVFNZsamQ6B",
  "key27": "3i7zsJuLd2bPWbZE9kArvpC3YvUHgjuy215uavDwRwxUKrbFS9aTsGj3vsP3cQR9tj7SFj5VyoxAZ1GDraPL4xx4",
  "key28": "2aaHh2mZvCCxPQPcoRmTPRj6mDgVA4tmyxf66r7DgZ256Y1VvHw9obJnwR3fQ22hYLRk7o1Qi7qyANB3ij5gy2HF",
  "key29": "4PdmiAdxcbr1uj2QFdfeRR1j1Mx6cbmUDDKEsrCWroz43a5fMa9qL856vewDKhSHs24ed1Nfq9uJCAs9BHNNLvw4",
  "key30": "4Msdi3LHce7SUuAyxA5EvUDRCNqVHVw342qH5PwuPmvAXawGzfwKPsei1QnR1cxJwVuoBgvheP1D9kUJk2wbYZPi",
  "key31": "36kasd6EbuLNCMQVWnjmpHpkB5T1Sh9EeUPGFJX8HmrBFuCgEWjjLaN5Vy19929j12ZkpyErXAXNjooyR2TLGE72",
  "key32": "5JgGWr824cDwaELd7V3F57QmNcAzT9cqr4ghFHe1quhPhAH5rF6rrwJsHyZN9Ra37RYkeThqmMkR31zW34nT11QN",
  "key33": "2DtJtjefyTU4asyA3UeLMVcyjBHKh4V3Q2eQn2DNDFTQ4jxbTNmYodmqou3K5xysbLDKLoiuSH8VY4Ntmavx5Lpk",
  "key34": "37XqaKnfdZEu3DyR1kVq2DPKhmqHHbxseJ9G24JhHBEK2hA3p3rJstbKLgE8oVc8kjihFzReiysCWPJdDowjwi6",
  "key35": "4ALyMQE4Zi2mDfzPue9XhTCBdqvAaiaEY9d4s8UUA4wS1WfngmKenVgkXC6y3YeB7doH4jEWFf985EKMBJMHW61x",
  "key36": "5iQh5toTAd8KhMca9CSbt1JjWLtUpb2JLx95VfY6A6vneanNpnS7fjdKCuAEc5Mw1YnHNv2HN3mw3PNHWMCzew7k",
  "key37": "3wRYfSvLDmpy8YsadezXK5dpa1MzZy4mbc96MGhWi4rPCFiXqPqCqcY3QaYbje8o8GSa38eJibB2y9ppvZK5aTmd",
  "key38": "3zqKRPa5bfdmBErUS8Q1PXjVLfSd3iXmCN3Ner5jRRA6FoETMEv1zMrPThaWQtm3KPNKqYnuvCayNyozPuLNk6t2",
  "key39": "5pzoNbSDNMqDgjRoaAW2R5dh5qaJJwhAkXdaeEbseYY7qRsZqE4555tMPZsBWaN73BSiGXwrvX2PiozLDjSaFfSe",
  "key40": "5vZkxqfijMXTQBHuHriwZPXEhSQswUhNkQPZDL4mQfNkatmEqpAnMeYjhdHMGT7aRGyfxyvGaRtexycVFAF5ukNM",
  "key41": "4xkGXTE4tqYggUC183G8RW6ccogUsY9fQu4mwWk7nK6vvzKXLpj25frABqxP1Lxh8QaQvCqwwnrU3goxhXqG2EqE"
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
