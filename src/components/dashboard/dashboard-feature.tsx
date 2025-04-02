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
    "4d3SdMa8gVVi5UbpjgEj9tZoq1qj4Sgri6znzEmwenBbHA9cQnahjbjM9WvRYM5Hc42QTPDmjyusM6WhWW6aqWmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nVczfQzmiKBTKLq69ccrnEkLf2jhjiWaTRzAMsfEayQoGrzvBpYiEg6PiFXjex7C941pqE87AgwERfL4whWKqSS",
  "key1": "2NNZg5pLPafYGU7PjqXY6wu8qHp8SFysMM1wL2rWWvoWLqoDVJVA5rUJaJ9er3nKVdNcmqZzFF5hbgneDHLTXC7t",
  "key2": "4x6H8B9HtrRfPFmpLWqQAySAjuBGyocLBVxYiqRNCKR4NEa7NR77Gwjo1XNuc75ZjH7xqw5Wo3EVQ2zD4ChUoTz3",
  "key3": "5F3wt4PVcipELKhKWxZpU3GPzivFXschgRjdEfy3rAobjevwPV8WCUckWrP71ehpisUbVRyas7VgfvDm9H288UwD",
  "key4": "2yHgmjVyPNSz5zBiMEqQi6PEREdZkfibzZ6B3xjT8PSVaoktkHCwNBXWYKYctoCiQGsgCkX7mw6dbnaoPbk5WjWm",
  "key5": "wLwXQreXqCMXydN753fRNWPovFBLGrKA9Q2VUaApoQqoMetQf1uf5cSi2nB7nQTpJS4ZaBnnUWLDq8EQkp1wvJK",
  "key6": "3Myd7L8zckzj4nqrggSt7utHar2zxjgsSjyybgwUw9zDJkYJcNsEFktV8k4qPa1m2og3kdito9ENWJtaz5koWVAZ",
  "key7": "5ChEuuW3aKSXdX9QSMSH26VGwhhqhy8SmJo2D3ns4sqfy9jPjL8BA9vLMAF2EfsCRiPtCHGx6EjY4d4i5douHz2L",
  "key8": "2ikkjMmTPh7W8CkbY8qhEyfW9XHLT8TUwYkQcLaygSKtibBQyZ1BzCkzPtd9C6SVvf48G9pEQdwXXAuzRzCtLhmz",
  "key9": "VG1ZHvTmyP4isaL4PGewnRv7uL1NvMfJw25TaFdSLsPiYm6EqLkbxZFm3hkrx9QFfXM4zxGhXoTT1uE2K7dh1KS",
  "key10": "57yqTfwpYodpLiRRWZAjoYfKpGwv3fmne4BeEkkkReFpdzeQ1M8SGbgWEQvjfbAK817CXZp1pTcHrEJPMszix3SX",
  "key11": "2pmKtKJzwa2gNWtQqCZyymBFJ1Kw5aAPH7pETyCpMmEpSpvH5E6vJvaag6NrwREYE1GBL4UQB8XbeBdETyKTj4dT",
  "key12": "2B2ycoJPCXoWqvyjE3akZKrN4FrfgNSeby1E6Cm37fUmqnYS2T9CsKLLCCAGqJ1hNTTVfDhJfPQS8oE8zjBBgVGz",
  "key13": "35pk1Ex4UhM9krWqBBWCFE5jJAM2pvRWHzZMmxnhotguwNBpsFzRz2piQvWhc8AXaNaXMPiosBrvEYjFyhMNKkS9",
  "key14": "yYUDypMMfBqMfrRwqkjyH2MavVGDkjbux6b8s7NbGyz3Wf8jBgsBnLpFdeUEdm6pVtPxyvThXqPcCFbBPZ4sb1J",
  "key15": "3JB6qEhLwEke9mRQZoPsjALqZq7WhsawkCPeRhr47NqXgdbsR8dEXPR9QcTMAD2N32tKH2usAeozuPpJFGzYmtLE",
  "key16": "33rv15Q6kKqqQMqXmmkwaXycfjEJBExLtVdBnVhfwzG6iag8PWxRbAAGACumLXY8wupYwdSZ9LbLgQExzT7PEM68",
  "key17": "3SWqdfhS9KDaadGswDgiMiXARKfG8EGck3q18tBypN2Npa8d7bkJhMpzAsHTmtFb27KsB9ddRHJaRVq8kEKex3nU",
  "key18": "3nhWBT7Z2f8Fgy4R4D9d1ogUUG859LVMDf8KdgMwTnTgpe8zwDEAFt5xjYMnkV8HgzpQs1TvbNsAeiSvTsGvf4D3",
  "key19": "3aaJ9oKwJ3e8RKuCPu1Ewnnxfuc5fqAFo5AowgQnYU1vYxdVeFuywnV6764zDVMAkNbZpDZ439QnYZaZX62N4Msb",
  "key20": "5x4ZFjw1Y726XM1wu6n4BNJY22QabdXWjF7NKMdQp8aaFfJtNtL4jp1hmPvdgrCaer8FAoazeyUmXmoWXmZz9eX3",
  "key21": "2vdfcB6obDf91R4dzA2W1d7Cw5w9qbzpsJx6r8toXKh9KXwBMG3nogwqHtZLCSjbEnQrC5Q9GtorJ2QBE2s7Etho",
  "key22": "2dzqp6DoEuNATbGBbNWMdXsVnSsFFHzxLZv9xvwjwNAyrmWVP5qgX144fGSz4xssAni8G7EhWEJonaxQ8Ucqt5gv",
  "key23": "4WWsNAzrAQzApbmERhCVqgu44mQjfUQDBkCyds6vGV9ofYGc9sJwYpq2k1QtAtv5Gt8GXHn4A819cq73LpB74r82",
  "key24": "45CGqSnhiEjs7PCfXGmdYP9ziq3qmWXhQTHcNECgfuyWrpB3nfUVaH3w9LukrUB11sPv6Ge3sF9x1MqsKBrd9jTY",
  "key25": "5rQUFxx4fAoP5nfQxhKxnJTcneBgqxYAPh7NasC7UvF5brpDnDv7xXDFfu1o15w5xMMgtGPUQmYW7BqGgiD2YnP5",
  "key26": "4zpzsHGRj91dbGHDwD8mZggP4gjJhH2YnXESo244oKtx3WXRA7m8AwXPJJtp5icitSu7Eb1b7yviXWJry5Hmq92K",
  "key27": "5p2nLTo8JoMEhzAT1GJS45KT9STCxoy5sYmveynP5x24pHvL1xHmtoA59pgKMp61anAeQHQU5FaMwoRJbJKUiWsf",
  "key28": "SURiCDBPRtotehrTCEvuCdNbwgPUNfdewbpH1dZ6qGdvvcVL27BKoVeuSfzEtzCwwpCgBzGsvncAEHmX5oMjfeK",
  "key29": "3ERy8JXUWje5PbMJGJondRECJhLBFpxBZGUXkTbWrxUrsqgrtLpmkkQy4RAG4Bc9JaMwYFQy91vpEgUMgYEHKazs",
  "key30": "2DasPjzT6Db1NTwBuL2J4QbqeQYk8VJyaLwrUSeDeTHS4YR9akqxB1ELQUuzRCr7HELbCRMAcXqDYuPaZTSWYjJd",
  "key31": "2MmfFAJcsNDUaJgzt5dcDvYJwPFnmbpzCB3KxThet1r7U1mn89wDJ5i13dWjvMDKEhoX1rNdFKWg6eusjU9g1cy",
  "key32": "4aYB8mYkjYwpKGNvvZ6trw6jSkXDLgXZzF5adLBHDQ9hUm1C6xUqr3EMJq5oVjXjRV1Jgbn3bzkb3tRiUmWE6WbF",
  "key33": "2MQ4Dk2Qiq9CqVSdhAwneatbbbBfGbPfMH9LD9PGjjixvBkEVbtWF9Xd52fzfu8ohgBT2BUqKh2BALyUpxCJvZQy",
  "key34": "2mHt2xjBbSeKkuVbKDSd2o5vWNFYZayFw1HZdLNVoWgQeLKPi3qPxHo2rLXTz44xVPLsYrZ2MhHKzr4bmVKRdn3o",
  "key35": "5QH8s1uzXdfhUZi1wDTFDFQCDxCwf1irtAgeQgYSWZAvfxvbaRu3iH7WFkzLr4CpigJK4V9MopZVP5TXHXc3vFXt",
  "key36": "dFRKduiowYj2RBj8V4HrtLycHZBZfJNP9zNF5yd8aKRBPPqomJjWvLFSqmQTbMkRNHssiZUxFQzStoniWiGE21g",
  "key37": "26c2v2pG2wKsHzTiEztfoVvnr9msrESHWT1uipwVjsGjDnBNPpUSof6EyXWuu1kgWRN6yFvGFhQQjqqbpgyoVHkU",
  "key38": "rFwmeWQ5Ezjy59diSX8h6MNtaGmoSHudDHzDToCrdNGWFpnnVAYumtJdT2UFbSqs7UNK2S8KGhU4eFTpPpMobkr",
  "key39": "NLKeNbe6F9wwTUayLDKwz8cikxBTxd2KTvvDUWgrhxVBE9QabvH55FyWSKJnWQpR1b4ZnrQndaGH8pVEexkVsa5",
  "key40": "Zc2GfZSc8MFi2zbzT4tpGT5VdiBzYAzsQcYx5ufkzjy3iH3oe899BqGAtEpRC9t6wjRt1GqxBoWocZFL2swq5z6",
  "key41": "3g5MLyvWayXFz53p7m66tAnPpmCEUzSbyGN7YdpWdriu3dNqdoac5oa4Z591KNDcKMCvuwbRA1FizVg5e9Hxfm91",
  "key42": "4UngeRxE4P17mvuSa9fcAbMy7zxZxhAfXQ9Cg2j1You4V6zia8m39ZZSNsXQe94zZYxBANmsM9WZXLRWovZWKPeZ"
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
