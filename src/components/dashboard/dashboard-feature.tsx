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
    "37GoZYaJWe9A4snDuebdYad2eCUY8f31Z3HK55ayajxudGvCuhuypYetfNPZuKDb3A53XzdJnZ2wLEQ6ek6emShn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i1KEs1hboFpB2t1gasef4XjTBJTqTkfaEzQm4ZghUdFYzNjLf2258XWwuG3pAtChgRxHpxpGrViVTxRzNf2foSM",
  "key1": "2tnk4NHbg9j5xo4SgBqausG9DYj2q8qbkDbs3p1PUqinhMc8DGJSMCANbDewJQkQR85BtdU3NT8vfRKKA4bjngE",
  "key2": "2bGrjNHA5QCeTAApSgnengXUbhTo43QHa6SthkfoPpxrXaqhMRuYihHvJPmdkYVn8A1yxDmchM4bh74tbDJff6JD",
  "key3": "hMDTeAGZe9kU5kFaJVTPHEhqN6wKGpyWNQdzcihuwwRWSufvCP9Va3jPeJd5bwrC5PFS3N9h3LtV8eoYi3GmzLc",
  "key4": "4SoV16JdwvDM45jHKvt2by8TPtjSEUbfFDtu9dHimJ6RsqqMRWATXP8Yk4BrHsU9a7fxAXaT5wjEDH7rYnDn16pM",
  "key5": "5W1yw32h9r4E3L1nabW4YFqkLoK9F5xwpFaU22qnJZcLiB3SjPosNXWPHqR8TrNRvWLf2ATQar44WwJ6cFh5K2d4",
  "key6": "4E645pDoWqsBKn1tJ8fQCcnKkCzrBC2g7TitmepjXuL1S8f58HNsKeLcDMHowavEQQ4cTFVvNkXPSaBDtTz9b3BX",
  "key7": "21Kutje9FWSqsFU4dR3uSF1MoKTeyiYR8duSzQPdPJMWK3wa3LbmSi3EbJbKxbqfr36vcmDHM69K9QZDMRgc7Enb",
  "key8": "vDkXyXKgYjR89dKrHdyuTpSaeuRt1XnaUaytCgPTGJeWMCRdnDfFVLvCYhLxCECnYeaJFKanFtF9B6qJ6biDu15",
  "key9": "3sx9nFneksCDh8gm515PUaPkaLN5YbM4PYakadLwhXkYE1QcMqsN5TgkKrWr4nxEMG8KCDQb9ERuu5jRT6B6Hk4J",
  "key10": "kZ6LsvuBAy37Wr1EcVHBhGF6LYbVSzu4HMgz6WK7c6g9vuXkqfbqLY5pHu9mgi1fyMbiqfvrwWuzxPesmDVogqa",
  "key11": "3RBmr3T24MuCqAHoR9sTA7kM2AsvXJQJJJRcPNwqetyNQWzSyeMenUNPR35T33ovNogRJdMf1hbhT3hTLJDMt25F",
  "key12": "4NjgvvANRPep7UkkepwHUwcVs4nyyGXrYCbyquZutY2TxCkikGCp29nzGJEQZSY8uJyWwwEn5gjfq55vxNqivFxD",
  "key13": "48hqfJZZnqBEcJr4tmLosHrYSpc8WEKTBEWTbDDjgs9qxzrYZFu1nB6vWsousw1u4fgQJNSUF9cwFeznagLw1bgc",
  "key14": "4NxELLeZkGetxeYArTjzhgTSwx6nyDarsbEKrRoCJikZMD9NjK1euwzYz1NAF3YT8XMdr4nR37UsXoKpQ6JufPAv",
  "key15": "3DP52qJcBkoem28JN1QbJFUvYTMPVkGsVyCTkBLBZhjN48hrzc6Btao79YWdFP19LFg8w74HV8P3cVC2XJyhE8Nu",
  "key16": "2KNqyF8ts9FCPXC3ejNMuUMdX8Pe9ZwNvESNAH6ao3vuRgkhVzVFUmhz7GtSAgz74guTPfoMgVBuw5Pjdiv4NA6f",
  "key17": "53q9rn1JXbgCwnjAgkq8UoBsrjRZotW54KFHiordR94PFBZcvdD8JaEeDgqLcvKs68SUbGg8uPDLBjk16dn3jvY6",
  "key18": "5mM55RdMNm1beAETNJSN2joLeEbmwccZHhUTwmzUtGgjisV5R5DRWsmefE63j59kYM9RaVrtq3M8qvHMLSZMZ8fW",
  "key19": "3mUcwGirnRhU53JchKZHqhyBFa5uqn6gXt32iCMvuKkU6YxghwmC7oANjDqqMtUPguRqYmjkDUKPD2xh11m5C8Ju",
  "key20": "2rXdDsjsaCP3UeK3spzRwydNTGg7KnsVqg7Fhn7Rwjs6x83a8nLgchSLhVqU6tpXWELRRmMxLEgjmkZeANAGbJqE",
  "key21": "5hYwfALPxUL7KufXjFRyBrcuZ8ihwjcHW1Y1y1k1Yv8YUMoYEWVu3MxkDJgbG8ddWrGM2c7oaeAs6keqmWrRuLBh",
  "key22": "4fCSzYLo4zwbkmCD1hUBSChu3iD53hVx39knVVhLoYFtdnGfgRYEtPUTsbUy2zpGU9YCRRLiQqSK4Zw71q3r7oaS",
  "key23": "45n6CUswxdkN84WiScemqKbQoC83gKRPPzaRQKE9cB3AeLFQK992C5HDps3TFayndwNyNffEJFVfSHxS5zRczU7x",
  "key24": "5kUdqK6pzcTEWAbW7XxpGaZFm7zyshVY3qv1twAfjiSAxCLQthv1LogRm85Yxj5YNXggCJK1yG1N6ASmV93Uotg3",
  "key25": "2A9GKQe4JnCC723SEy8Hxr96zuaTf6vbcosM3Gx8nwwMvoigphigAZm5yjoFcjVxsqopptRnoewgcdjfHSPKFmFg",
  "key26": "51ZmDWZsvgvDFToEUpR843GELDzTKoirwUBnhjGjfzoRxk9kc4XKcPD28ifHZvT2xgb8otfRaXVqBqYxoozed7vr",
  "key27": "56yV3BVvjiGZU4ASdmmtWPNiEE73CxnptQ35f9T2AKWYSp6if3ErfxrgGeDp3X8bSYHN1ciMbLPHQRtcaAr5t2Gd",
  "key28": "4aAPJV7tvCnivdMERnE4upvujAuoFZ7RC4BCnMebKHz9uAa1FQhAR8KDiXBsXMRB8AbYRudxM4WRwTq3UUhqKow2",
  "key29": "hzJQBeo23m9y1rArxvWeTrnqtyEAJ8zCLzRuqwsUHrmWmjxYvo7cGPdoQbYiunXFujSjFescAJ7AXbspDDFE9sD",
  "key30": "3Uh4PTsXMPMfNKJ1y3hioqHercVpJaXrjzBT7LzLLfXAiSSzkx4PyBMARv1jaZfef2HSsLkTQxjmySj86g8nQ9wG",
  "key31": "5LVSQgG9VfVMXFPTeznhUw5kPNzY6MipaSa6tNEr4qxVbZEdbdas5RmG8XULcMUeHhb9CpkTUhWKinMufqDtQcep",
  "key32": "3Uidf7VXuxJBaC88MYGoHdp92wvNU2DEZX5hxzRqwyqSmHsFv94X9raiq5kfkn28X1VpDthiZ9D3mHeNP1rSJHdg",
  "key33": "r5ri44c58EndxSJpRm2UTCeM2677G2oR6Xuz2KKCrQ3CPAcDcRv8rUp2SXSTmmEvnpuNBZRQBJXBqnDavDM5KU7",
  "key34": "5WaWEJa3rDoWUoek1n91mDPAsuTocJto9Cxz7rdFjBY6U2dqgmkDGCJv5gK2EqdXWrgQ96JqcRiHt6AeciVRSsGr",
  "key35": "3Zc7Wjw1Tgnt5AB97RhrZG7hyFkrq7iBpeHFJBtnr145NNRBUdwReZPAqHt1qdDYBJ1YBDVCds9yvH5JSbrCE5FW",
  "key36": "28wMyKUoPzrPtkZGgHoNHKYJb3taGTLuYx6VdJbVBg31BZQqxrQkRGBSh4pNyUFJPGQv2vyTjCDVG2MD5W7gighs",
  "key37": "5D95L6ErEwm8n2KTPZyZ8CJePrEZpZu42hWt1G7JScircF1afsWFTut6Xk1nhaoJQfvw2cJgLMYUXUWTGNHWqUnD",
  "key38": "33nx9detcKVpKHUjQGEobFXp3hjRGFFA8xSzR1ked6WCcs4MisG4xa673foEGzxqFKJbVNXgdShgpgeKGeDDUteR",
  "key39": "5jgN6XdCvgDJvV38t9DD73NW8kSa82yKDLNtYvc9BrkKHzxCt495v3uYhJjahh23u5XyWSAMb6PhYnqio2nPKAPj",
  "key40": "2G3UYeav7Fczh1cbTM5fjM7kmQBHWhVBovuuRF1y5vLD72fHXEGDbEdbfLnSKbu9cT3wdoUeS6by4GwCqbF8yzdm",
  "key41": "4bQL6CzWyV47kai6Lz4rPNKAszoJKNuHVBiceZQocrKfnozvMDouZoh1ST2Wdt1Jw5aGkhSmXHa9jdX3NmYrGTrQ",
  "key42": "46K7Fdkn2mY2VNhnerNy6VK4T92XvS7jGEnJdGvsQcorjoF5uk6UfWdJtC3pHaMC4wX3ATbCv7E1w7mzK9g99V7r",
  "key43": "43Giab4KJ3NPEqyD63dX6gQyrfsChkbzqSR1WAi9RuvCxHff2TKppErUZkHrViuEUyDJzyCiye7ZEVYUAMnGb5W7",
  "key44": "n1yVStWQQZ6DYJfkmjTtymRvZgwNgcRitVhKYEkxpM9q7bv9d8B5SHWt7zhKXqjPnURPFWUHEfhwszUQ3G6Q5pV",
  "key45": "4cGebXaLY1keC8SuLUb63PCBchu2Re5hTuaTV51HTx7TponFuRKz3FeXDUButykuKmWoSnuauqeeZn8CVNHiqtzf",
  "key46": "2FCy5tsfahPjqzmY9MLyavpptcxWcpGhmLCbMUGntPM64UdxJeq1uTAMzCQozdj7CJ3yYr72KDT22ec5RthYuaJh",
  "key47": "sa4gGGYGATMCbgEFKkmooSU5htAoEm7dQ8jttkUhVhzWGywJEz6oBMuGLpsXQ17GwckSLfawaiLbyEouNrK8EzS",
  "key48": "5H3PRWF6huNTAs5ACATSg5qECaqfxHnYbT9WxpZDZqqoRb8Aw8m1wrkapLJC9kLjieCg68em9cJHBBVa8dEiTAPt"
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
