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
    "3GiwHp7C4HDGut8AwngZfwMk6E5uiWS8WAK5MVvwZCve4VyQHxun593SMemTRw8yosXCwYMQ59YGD2cBe4h9S7RV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uhbxzcua2NYySPf9BYqkN5c7tKmMw18uqKn1hPhirSMLXzBv3j8CHDhv6oZyGfVWRuhDK8LcxH9M4jhysVreXha",
  "key1": "4c1FFMsKNFkx9Ru3dHXpboePBGSRtqrkhxoWBXPXkKqGaWSQiseRRJHHcbbGKzdxkKbYLsnn4veouETkdPbzTWgs",
  "key2": "3zGmkkHseVD9fHA8fAiKgtLQf41tTqViGs5bWSNkfZycobn9TBvzJMLgu8MqnUoCh2xTgucjsi7EViNhLhNoDtKr",
  "key3": "3VMCN4R61xj5GBxwf2hPgw3qUUixyZ6QQ21w9fbCk28Gzb4sjrDznkNRqW1GJCmcyG5qDfGgnUUChqMCE15R4BJa",
  "key4": "2aFy1b6wvYEHLZHuXnvNhs5aSrbMPnhGDtSumS7RxXRWK81YiGxiLEYY5JVZA8vGmwE3JEmSMdMeizQUUUjPnRVj",
  "key5": "3jn3gTesHka6pLNgbbxxtvUqs2D4hr24B4Uv7aY1PRadzbEJPcoLBu7cHc4NfykRQfebbU1SzdodG2R5JkBFZo9S",
  "key6": "2WitFQ2LALJGm5et1Xv5VRLCgX1dSDJpQsmfdEy5ccSSurgkeaHdpmPEM7XscKwwNEETTE3js2C4upmeqeZW6D2k",
  "key7": "44MnVA2Css3cZpUkPeeQdQW9zEdsFji3moB7GnVKDfTbDa4Ty3CD5t9xCncQ8py93pyWMBBQAy111ijHzDYc7Per",
  "key8": "3AGA23qKAjVqQs3EEkY43rvB2FWDXG762dxhKTy6vzwmy5eiGw6UTSugZSj6pW1iazoLUWKLtKU5an4S1fd2YQi5",
  "key9": "5r9s87dXnnpiEGgVVLA1bTRyghAAfp4s3Y9Tmgd8afX81B8F5tkJTfE1cQgYA8bY1ZHNCstzVaNj6Awiq2FcBhsa",
  "key10": "57z9TwkfVsYrGxnfJpb9RAACA5MD6vFhNA1fXhvFwvBdffwmXxDCPW2aaxnZUxJyjHQZuMtF8mEfShNgsHZ9iv2A",
  "key11": "4ZLQrgmnN3WwvvvuJn5As58a51Kf3dS2SoRfuRdNHFWJozT1fkxeLxwtLsnJzhy1QiR2syZHKhu2FAxCtppDdKx2",
  "key12": "4Q9MYpZyB3VZmwkJC8CxoFEHwoNuEq6CEs89dQV5hJe69EFEVnRPL3NqX7DREfvfsLjQ3t3xy19cBCaG1zdS5Mo5",
  "key13": "48Vt7GZ5djYFsKaEbnXTfZzU6Cz9nhji8RAtEUbUZH6sji4uQW2QS1K1vN9WSYiyXXgRzW2T2rJQTvjdcLT7R6tR",
  "key14": "5kD2SJck7TicLxZ1fTid6tCN6GV4iBPjF8DafNCeFFzhpWJGEvpLDXociUAa2gSL622QJubDQSWWDszQB7Y5FstU",
  "key15": "DbBQixj2aYnPuffrqXjDNLY94gE7ejNaJCujh29WrksdV2yTXBzs5fJHJt7bgvVTWBmwVN2pU38YyyQ34ysf1Uj",
  "key16": "5BG51R9svQhqmjkLKN8YxbiJXLWNBu1rLN7F3EettE8Bkcmxp48PYKvqzDxFRoXQ2npSgDpyr3W1CTNQ6SfSkCJ4",
  "key17": "4bxNmbcmKYo5pmej9GHCC5tturyoHADbSimUwhShsvExnS1xxndZyuZaaXgqqbcWNQuAUeSsRj6zY7F4hr5QxRPQ",
  "key18": "47AvKrPpqwP4PScgbSv9jmpnw1USx7ME5fyrpfUW5dsfk2ZKb2cHGDHEgKe6ZNhEpmvm6B2WhMu2CJtvMgTgMUha",
  "key19": "4RcHq6B6skqdkTxFfgxBtNtGcnHSQZZfUaLRu46mV1crP9EdtqV6HXon86LGz66WRSnAu7avyq27dvpCzTREUjua",
  "key20": "Cje3wqsgLj6vAw6mGGe1ZjzpVuP1mSDP8CcoGtC1dzrjPsFiHUpxk2fiV7eXWwzFXZoG6P63gNhK6ASTTVKWQbR",
  "key21": "4taubMcBFpknrdLaX2NCAaJRoXGXiX86WAu7Xf76HJajuoKLxGBcZq2ZPLvSF6NwX25RVBoq4FDhgQ1jg6u643Xz",
  "key22": "4PsyHUBXeAeeH7Dspw482KwSxJ69Nqugkm2be9K1mq9WfiLHbxekeyCStg9eXfesR1aHvNHev7PXJXFB8ms1G9Qq",
  "key23": "5F7MTpqa2J4LUZJhGsLWAcsKcm9yqm3Unsk4DBZ5gPN5DUmk4sNx8Azdm4hw15cT3BGyxSUE3MgotchpsJPYBK62",
  "key24": "GRm6uiqXQPzHa9KbQyWn1SpDZdix7Y4wL6pYC35PFe98NBDFykVPhF6EFyAN6NV7D9SSgVEkiiUfN22vH9tELCZ",
  "key25": "2B8A4xFy5wHaBq48ML7tzitsmb5Vmic7sur2eLL8DNSppzkQzVtkB8pAjzZJunVor4bVUfERz5kmZiJA6CsNbCRa",
  "key26": "3NJmA8UFPBrehKgnzdQJnxn6fUA8oJ44123zCdvrfED99isMLmhY5aKGZ1e7NYkYcqYcSGgmKEtVZNFG7S8xVxvA",
  "key27": "4NEi4i3Ann8ALAn622jNfEs1ERS96PYqLAdahTJoxn9JMr1fdUsm3kTPpPLLX7twJn5ShmbMft2Zz7QxF7k9CowH",
  "key28": "4hfBB2HEBzQBHn2QsAL5u8doiECLGrdPGc7Ji7NhMfD95T3jHrhwURBN54THiX9Dsu5AS86PUjjaZXu4AoWhnxvS",
  "key29": "4uXgADV1xT7bPEBnjwndbg7ZsobHMvRbiuhGkguj6skGLSLz7XWGQjpD9fhp42pusGVwQ2V4tW4Eqf84x7b5yp6N",
  "key30": "46f1BkRiVo24pYdQ6fV5jrEcC69QxfCFaeNRUkfx73sfbHjrFJbo1KNWKWtqkTrykeVHyFXx4zNkDoVcNdggtx67",
  "key31": "4DC5fGxhky1zuk9wFDLhPQbo5hidt9idYJgvaQxByGzTBV8NxAtPRSAKmbWKn9fydp8J27z2aJefaJHHyxyQEUNG",
  "key32": "zwSwkv3YtgXjZQTj5wCSNg87e3Sfp9sYE5mjf6MkJfGJ6LdEsVYVafERfiMHGpkFnBEREB5HqL5aJ19rv5Gcr88",
  "key33": "zViJqMGg2Vop45L8tfELyK8VVbm6PLTiojMgGtGthuXkL3UaAnwiAwTsHXApdUPfn6tuG8ZxGHDgH1o6eAyu4Am",
  "key34": "2aibHj86kRD4LTyi1vMSbBQqN1jHeT2Woy1rnN73M1X1k253CfaXEJsyEHbXdvWpCZkmkY9uDN4WeSxCm9ikbWrU",
  "key35": "5D7ezbieULGShxq3aLPsqvgXBxzNJL7AMdADbirsoZgkqiN6cDKZ5bgGJNCkdvceSPNnDqoc1EnGUvNyguE4EEzu",
  "key36": "4GmSQM7fVrxXsHAJHNXKHABsvXigGJxDBKCd5ZvESQjiRMEaqMRc3Je4Ri9E875u3CDB7M83caVkZJuAg4GTcvBi",
  "key37": "3yzKFfU7c7dg35BkZkCMsXPx9xUS3X4ku3ZaTCnQxH4wUitjejAa9LwLEh3Zzzg1vJ3KZjGXWbs3YpBr3qnDJ5d2",
  "key38": "41kSnCeHybPe4JcjS2m6Fc4swFjUDRUWj69ydeU5uJFxcuZuij7fAf3XUgXkyeJrB74DHp1g5B5qmhwisX8maMfW",
  "key39": "2a3HY6BYJvva8nypRTX5ZQw2K59H29Bh3SRYK5tQv1yu8dvS7yjKwPB9hMckY7k8Bz89TWkqeUYVBRFPUJKVX8ME",
  "key40": "2M5W4MwCffK5anGVixiRG2g9CxLLKidia1kHMJyJSRUh722GUhj1UXmh6UKBoGjARkgHTRUuZKSTdwt6XJdrM39",
  "key41": "tUQsfUoMLBMPjhLjW1s8b3M6ut92jbCjeJoqzdvNZnedJkw3kTqCy189HBQLAfFR4nJcE5is9aMntyCYTHJe32K",
  "key42": "2YCJy55Aqq9uLzwwtRTUiMjuAEv44zNHvFCD5hKWEYPztTsqGVXiZdPERnfRDFbKS211BLQgqWQfcGHnF7GPqHJT",
  "key43": "5WwxSsXWevepTH7BuwAjhLjc76QDL8aRGgf3N8CtjA42ZF7fx1f7dUCpkzwQScKwzqMggNTqFeUnZp6R1K75UhvM",
  "key44": "54SPbqW9wga4xKGiqwAHKxWuThr4ZNCiK71LxCZ8mEXiHkEwJZKir16C24TbrU1LqCzn1MYySAAxhVgdbSM3g1Tp",
  "key45": "3M9PyV4NZ1ewoVABn5JBw7xdz2y1tWBLxdo6Jj5S8EjsMPfZ1NpcBJLqYmGq1E3NuXaVPJZADPtcWBurJ6xTZyfK",
  "key46": "45fJ5WcZR1EKLE6e8TWa9J3ZkV6mKCTrKFHGtdUngsiFXsbe2p7ZWKxmLKcL4dtjPQnSyxKnmuT51NJeJP5DnfQ9",
  "key47": "2pW8DQAqXeYHQ8wofYRrx4WC8yStRznD24y5UMXnjsQVe6aqgH5veAqz85KhFBpZR5cyEADemDT56E1Vw2CwAZA6"
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
