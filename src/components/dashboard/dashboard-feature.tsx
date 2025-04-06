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
    "4HHuRwbfgWxNL2jMMpjkrPHshL1SqJei81ffAeFrZTmGF31iKoUr6yLJFuGm81nJGKjcyF2CuomSuWtFAbbDtrWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mie5P8MQHQKwcxBgV9nkcHZQSwtdqzUcSKo8Ctw8f25FyJiVWHWryd9smoPBMxjbH5Esb9pyn5dfLedNWut1cXY",
  "key1": "2Fmj8FTnFBmVFqLLcrra78fZ3mjLdbNAMFP1FrRVkFJ5D4dCcvQrJGov9vaKK9pHnhC5mSZ39jjv3d2TzMvfPKqo",
  "key2": "5rcNiyj2U7mNANjRgwA8fxF9Vi1pRxopaHy2zhpwYk1BWbYpwMQc35LLe46qrF8bai7WUdPZe2pZ5jhK2HZKCFzz",
  "key3": "5srAYpdFPWPRiENC5R9qK32HfR7XbrSVEQYsCmhMaxHQKRGrYFktbaKE8QQ1rLFyufcA6QY5LyZ49zQgbKEuRHna",
  "key4": "5KwWDa3u3iBXyJnyKT1yp3qza3V2PHCwmzzsrc7k8A39c2XGCGLP79EpDn4SvcH1NTg2hzZLyDynf9CUYvKKkQJb",
  "key5": "4HTNMg21YGZyvTE1FZsfnHxEFswiREWhMysbvdjZxiSDzYtdY7N7SCdRdmjt5XWgHrPFS2QqQP5jgqSwJ5PSVkuD",
  "key6": "4ocXXnALwyqqpDugDQETWvPiMhvBVC11e8RmfmS1iTLmf1TheNVKmJGSyGWuZuUrSVkYPFTJJMRMzSzxSB1kjXLu",
  "key7": "3pFzmDZNKfRTvbGYyAn9KzKH3yPsiJ4V8JhmiNu6UaJ4B3Spmh4f5y37HCMBDSCWEidruhA7ogGNUrRWpeAcxyxQ",
  "key8": "31pqMbWkHLkoX3V8bU2i2iL8jeJPLVt7o8svf3RRiJpqZSihpApCFKNHKCoLTBQQaChKimX6TAeASSWBGDyvoVUu",
  "key9": "42Z3hMmHdPELsDADY7jk49LZBVPTCJRaAwN14KsWpvqeBYfmkRr5TvpDdmVTRXZjiuUM52QVP22hnxDUZxcTrBGU",
  "key10": "4eA1GDPUxQ25cSq4WqMtfsC9FyhSTnUJzAGbobRBCyrJgCtcWCoGQ7aaFxUKzH2uvSwgS3KjU8JUep6aKcJcfofC",
  "key11": "b6MpzH7oYBdmtGbd9zxTwTMdBdCKmK4PbLbYf4Ebq3eC1r8Nj3vftDCbMXE17WvkqxMwRZnzow73n51fHi99xA8",
  "key12": "2wvZBPP9ZwAc8ndEwUMmQyEAsP2GaWP3MvSVG4XhogrhuV2nkbCQwWgLtXd4czZtYGL2K8XdLExZb5gRdoqP7ddv",
  "key13": "41dMWQ3DpPp8AZwHLGxWwf7xh4B3o79JkptT2zGhiHwhwidqG3WFGKgx8bn9s4NXqWdZo46Qz9csMdmH8YFExCaw",
  "key14": "JR7awwqZsXjog8tcGVyuqJbAUR3EajjPWo3HvHSRiejdSVZTwi9dGEHA3XTakxxadY8B5azNi8geHYphrMqyxe3",
  "key15": "4uVwQTeNsxXUH7s7hykW2j29NUuMcGqZgNNsmQNHWAQNaKRn7YLDns4LLZYXg4JdaNiFqgZ4Df84JdnE5BHFnHqd",
  "key16": "Eqo4phPy4WtFCcFZxU53v27JN5WSTzDTcbJhu83jcV6WwQQwUZ2sujmyGNQtAgwvHoZbQqtx4kwHDjsfQ6kMUgY",
  "key17": "5QiBEBVPK2UTjqrmh3dCavcCy7sJCDm6fZJCNnYR1zAVWDBncUgVTp6AfpT2FA9uCLS5WAaxJ1HV7Wk7uqUPim7E",
  "key18": "3j1Hq9oQNNL3QWSXeNY9ewUKLctj2QQ3fHJh94gKvS7for6VSwiRZF1NqcL4tGDcTB6x7c2KgPaEDfTDZ5q8p7mm",
  "key19": "5qnERsJSsPFRBcRTX7NmY5KTwgjLnPtqkbTuSdwECnYZcGQmMnFZG3sx9wTHeDWYGytMivANbiZkxHVWTR7VuPat",
  "key20": "3dKjqxwEgFnEGRJ11GUwyGns98qqJkypSUbELWYVEzLL6zXLRFogNGJTeTxdTLf1afcfo9Yb3e9gnPwksEHvSX9R",
  "key21": "59PoPAZqW1popEjCpyvj137CVXVpf95aMCn8msjoPcaZL2gXgeYrqtSrE5b5bu7rPCnd1tM93RJNvCv5FoKqpQBC",
  "key22": "46Hz1xQ8XniHnZNLoNTV19RXgdb5KjZNsZEEhC57xQ9Cfjs9DHRB9PTxtrrCw1qt7r3ex2L3bhn617bZKfWontJN",
  "key23": "46xDCRt1Rnajs5373jqGhK9G9o4EuTEo1caAPgbfDPEeT5bhCuCA3pqjBPDiVh43UrjAJ3Qr7PKFM5qAhVBD4rfQ",
  "key24": "WbJ7cwycjFmaahyCDr8qusWJLqmeSUVXXCK8yKZnJAR4hawGzunVbtYtcseV7xc9kxaBZfwjuknEeRbbkFLfyYF",
  "key25": "xwGc4CGur3YGwq6JK4o42qnNVJYz5E5ycEnwqqUnF9o1rMH6i36fHWUhHQGpsKq7Q38CTh5pXPkB8wntCQspX24",
  "key26": "2Scatwq4eNxsNKUnpxoMnFiHRAGjguhPnLqity3FPmkxgTtcNq4pGqqmxySP2Nqy4H3rojZpbamfc5xJcwsmwgCV",
  "key27": "4JnQC2AcwcLFJBT499ZDvqNtQcgNpd9RWYTJD28uHWne7aHvqabb8zKjuecSudmx9dw8JNATcFdUhD3wUMjMWfGR",
  "key28": "3B6v4ZMXUoJ8GUo8gwZDYbhB3nMQHiC4rSBNqHMohDyc6psEEN3BuT9AkdS8YVcezdbC3JQREBhfHiG7BZMDt11e",
  "key29": "HqpYCUPMQCAMtK5r4bPAwEw49QKtcJLKQcs7DjNAUquAkbffjoT5UAzCeW5Z7CXJP8NHfappsugXXC4ZAgtu3Az",
  "key30": "5JcrCDw4VkQ3LwEE928Sgy1g9waYBCFRj4fPQuDReAMjxHThA6EQcmT6HQt76rGgUD5dALvD9juQeXxjKjh4xVh3",
  "key31": "2WbgRpzBCkqAMcJvaY1qpyuRPjPedqwwpyvETJdMtjEiPPPWN8EWTo74LTbGXDNNAwsnY8HoXXc3MRWayuKkQUD8",
  "key32": "2PkDk9Zy2HoYd9PUgjGz7AChKkUhkRiaaoVwfPbS6VtL36j7pzFfGD5B2iJ5YJuqEnBwhLWt5421Uqp8ZzcSiwSo",
  "key33": "F1hSpP7oNkmkBbrhrF6KFuYXZtFk8ko6fa1T1ceYZrEbcBLPEsyVufDN18EQc4Rje3kCGxJ7FgwpL8BB5jr656j",
  "key34": "66dK7Pa7gFHR3k24bnSvycEXiZCUwjLQwaDbsrQWS8ndovykUqbDtxii1wRDmRCvTDgBisHqVDWTFSGqCUmX1qMU",
  "key35": "2t3Fec2oaHRJSGsmTs1JaW5Mm55hb5C2bkkGo6yu7x5aKmwmfUEo9zZyjNQeK9s2vFTLhQ3MBH51JrdEhKywfVz2",
  "key36": "55P2t8DwYo7iPWVdY3duJCiUSd7Q4xGFFrKK6WkLyH6qPPwKJp2JgiHhiGom4S8iwkCPdqsQyHtLasanRNKT8ZTQ",
  "key37": "oWqYZwD3Pd7mLqCpHPWdTtWZoW8ZGegyiHAvsaN2TZdZ1RPGQFJhsUramZbcoiJZdziFgBhW9ZFF1RCLihQoMBQ",
  "key38": "2cGyUeGm6M3BQA6yzXhUeShV5ajnjTzge6d9XHiaVBhCWwynLwnbVfq5b4nTqshshE9dwSkFiKDb3yap5zzURHiK",
  "key39": "3fLsmjACuPzYyUBxjM4pPZypsdg91QwnwE2DkafnkGQ4hq5zAyVwQLghRgYecMXv6G37GHZwfNKRBut77qthPyAz",
  "key40": "4zpm3kHg2Ve3Nz2vd9YaMYvtb6qgaCUKp7doNe6Mq5YAkSqNRWdtqWmHnrGYabJEDqRYKYMiYz7uUAiWXpzdXC6b",
  "key41": "4NsxsXYJFFghenfPsw9Ex9Gvvx6m6C832ZHLrt5QDYMymWmqRNHHM84o6Tc9UuNLCviqnJ557bZNvMJhHpLk9vNb",
  "key42": "5ifJqx1fK99va3Tt28JCHLkMb7ernYer6sgpZ2pPM9G61jEo2dvmncYo5UDFAgv289Y2rqSBBdJvFfFQSpmhzh9M",
  "key43": "5489oGGAXh2bjeKkuPrcw8cbm2HZrcAhppVRL3FJWD33xGZ9mpFaFwXS27P1YGjMAC275wsUhwYSZJUtzEm5u6CJ",
  "key44": "318469U8znfWE3F7zzMJ8Nv6wbKDbFPPkSrqSpX3KnqynZV3Mr9WcURwMoQa1MpjSUxEqGET3RPYJaqxUPBNUNtB"
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
