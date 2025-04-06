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
    "3cgoDz6CQTCGk9ixbWRdqdbNGizFTYj8BgugZLmDmac1DdWHqG2xm5H8Tyx5Qa47jRZUXhpCsUGqZ2QYtFtE3nLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a6NJpsyrr99koa7FjguhJLfUS1Q51u7vfE58cdEsPGSqRfYdJGUzqH1oWKWVAFmkmGBAGUDZ6ThqY6ZiN1tXgUV",
  "key1": "53pZ92kx3JgGp53ns5e7EYi5jAADtsMB9YLMjbLaR8xhPwAwvp3TxCLkxMz3cLJUTJXBVDmGRjpUPqQLpf5HLTng",
  "key2": "3HH79UqR4kEpKXhxgU3DisWPVt8Ri7iKvNP8UtCcMjQYHRHr6GGRokitvCLjypkpjMmymvh9ujihiA3Vopr54NH6",
  "key3": "3FwbdZUdQUbF2gfU5RTTcbNWB9yhitGrgD16GKTBNdD7ssZrZQnD3hm3mRH8Lpu2WjQLAjwvz7ZT8HzV6hSbWpSi",
  "key4": "3giAfghijKCJ5D9wVVWa2YVfXJL17hg6AV4nw7MDRvf4Tt3wTNQ21ABBu2yNJokZzXEfEq95PjtkVu7cHiP6QNaP",
  "key5": "2DNptNc6LocMDqzPh5gGJnuXJYKxG7GmoBgL1nj8EMigDKYWRQseGWv8YjCda9RDApxqRMDGGjkMpGHoeNavAymQ",
  "key6": "5ygX4e1iMq438EHRRu6AgFk5175zNafJguC5i1xUBewC5jwd4ZCtNqhckA8ZZD9Qyp3d7HAnrPM7t4gz5pUdDAvS",
  "key7": "4HAvCF2gn1UT9poteAmdUGrtPjxaSZRT5WkehGEusgNTnZ8MwyR6UtsXyiZTvTxUFATpfmnuXqhZAYoyvFDufYBC",
  "key8": "oT8NzUTj9uGpMmjMRyLqzqMLxAG4NHkU9J3pbDvbP3aawR7qqcUxHSxUrpe2oiLW11XKTsPK7HR4e2w2yjLXHBr",
  "key9": "5NAPnWp1MXv6eSGQ4NFHtGiZmft18GT5muVoSMxqbDyHrGkiuwWo98CvVEFgFT1Y1iwFphNKmb6eEvgs1ArqEV6L",
  "key10": "8sNHaWqVW5VLVKq88UFouYxLtAHYsq6nkVmN9DpMG9hdNssJR1uaX6MZbQnMkn14RiU8CrcRXLdwGVcpT2Sddh2",
  "key11": "2wNqkK4H1CzWa1z3ev27wDmwewWDq31FK8txZ4hgSaiHbwy6My3FrD91YL7jxGBNmgcwAaRG49Js9SpTEtDFzbgr",
  "key12": "3iCeyhEhLeqh6icv7De9mSCT2fEAYKP85oaTJbzRdA5qMPq2crngnDbpFYpppEEnvAyBJhn6U79BbUy4jPJD9Mjb",
  "key13": "3tSEUC1ZHy2oTbvyT2jFPoHcenDGu4K4BhxWPAnu7SfXgFCsYSHLMFv7ttGKuv15Dc9N8Wr88iby2dniQouh6bSY",
  "key14": "7txEmsEstmVJikxV2ZT99UEgwUshcwnQzDoynfEgxSjmbKB7YYH66uKYuLgDNCjrheeBULnEQuzdH66dJWtQ3TY",
  "key15": "5USm76mb1hShYXeKqJNoskCYWmtR4KKUzx1TnQS9u2ARQjB3C56frQrzj99y6Tyvrr18eLYzPf5VoEBfoYRWBG7Z",
  "key16": "MhwPoX7wrrZiQHGYLMzxkD9yFjf4eahsfd32Gk2z3G4pa8LjMSwC2j5aTUanT5V4Cz2RyNodKN3Qvq4PBRfnkf9",
  "key17": "3vrLkAPoJU5msmLs7dNpP2o8Pjd9YSk7mtjYNGdyJrAHe2GFcRUnHVvCDmJpcC69LkXuT6xjidFFKUdWeQchM7z6",
  "key18": "4GXBgyUEvgeFnKGxVXJ1iB1RmNXWpifeGHuLQ84ZGSd35LAV1jAGntqP6zgc7tHfZ62s7kUgh3RSanuFqqaCyaN9",
  "key19": "2ykjax5bo7gGshEEWbeSPkh63opTTsmoQ79g5LDJK1SeTK2BrqZEHVEgX3uLqSgwPCCMP7D9ajy2EZcfUoZrZDZx",
  "key20": "CD8y1ajcWCmyPhHmNHZ6mm7yRVFyFymg5gjEf86PXKskqDvSmPbvwPQnKn1npVbnNh1wH5MK3DgAhvzLG5Jw8kr",
  "key21": "52GqTbC5kmnZNJEusJ57sLB4BuaX4wK2zJj9eNvZFuKbSHWXLcLieCT8eexnf2nqJmcBTMcYwr648gnEd6ccpXjZ",
  "key22": "4Uy5vwDuqFgB46VDNHrsHcNHQmUWyA8y7L6mz2pyMiSrf2v6S5Hs3WSc7YHXnL2WVWhj99nWfckJmESopRaL5At8",
  "key23": "4rm4w6NfbBCqycUhCTSxQuZusFZPYGQfxLD7a2HbixmNAL4yqb7MRuQdbEsMWU9w5t86Bvv2ceZnFYeZ41UtVKVh",
  "key24": "38W8PcyhBVHhmZWbXRTxmLM1nVi5w1a9EEhW9erb8A65zLfuGWHFBY4XUGGdBdPN8d5gqAE1nKjEvkCqAwy2AH7H",
  "key25": "HV2JrXV7S5mirjnds1LisgRrEocGnfWM5ywy3LdX6sBy77qNmtUfdcz2ZxDcskMgXVQ8gGxYLR1bSmw1rzFk3uZ",
  "key26": "4CGnwpHLGFadUXfkSMsWK3fqrKZjVnmdbUBrvEaBAh1HVi9ePynT9oRhggsx7qg9d373c2s4D6ngWvJyzJW4xe3d",
  "key27": "5BfuDeoLjbbWyromFpwbfyBotEfpPL5qudWsEHe6GgsihPuXYiXs74pq8WSrcp57JPvDnBNQStor41NSH7jWKm82",
  "key28": "4wcb1ojzXZFKAjnY6C4vTyhLzbjzVAWwN83CRz1LqPjrcyK3JuZw8XbRFqV7TEqCqg6ZjWRDP4j5jPmLpm5CyKEW",
  "key29": "4XPzS42Q4zZ3HzPYSrQeFKKxFC9aFhRWvEd5FzbzQD3U85txQ8kivRuPZd5Kz62Mj5kwhQNAvqbbexZLD6HBT3g6",
  "key30": "5ic6GzvhUSsw5rK5HtewEzXK5ry8jhtfQNkLJQ7jherK1nWHTzEWGhyEaS7mHFK5NXY8ghHP5npe6J37RGqgSD6i",
  "key31": "2QLr9V8vRVwYG25eeUbnypx49GYo6wxonLY5GSeJxVy78y94uPsP6tvX7uUHhaRc3anJUHRDDVi1E4HDQAr2i2dL",
  "key32": "3bTK8QhB4bRDxSnH44hvHVrUuB68N7PfUff4F6m94LTwFVtoMJokrpMsFiWF6zqMWT9W2fMz1PjgepZ21Uu7crdv",
  "key33": "5Hejatu7wP2EbatGfniWzPxf3LZhoGTqkB7cWgV6CpKYf1vSU7fBfpeCrdnN2YRJLSp7uvHr2dGdQvubGRfDd1Bg",
  "key34": "tRUMb457JqKAVjV5QPEQKts1dgfmZwB32Qm2CHYhFf4P61BJUPD7wFxihFYL1Q3LfxfUy2pH1MDAsv6qLXj3kBk",
  "key35": "4WCcNqx83BiXkYEzAtrbhAVHrLddqRYujrejWYxBUE8bhES47zFvfgWbYnUrnVBXB4Ue9YGJrimU288aNzpwbATw",
  "key36": "WUx3yVRxQmbpYJytgSY9a9VnriJ74ZtmpMw2GP8CQfKmR6caLBdFwKzjSDDUsfg57FMcX5r36WPpkzXHJqCLKYc",
  "key37": "5bGYwYneHcPZMZXCujnpHbY9G9XWa5upK4yuv37zsoUYSCSbdJJCQfTziTf1XUSNB1yRYGsC7TQQtU5WTv1UCxEs",
  "key38": "2YFRcLaiTW8kfHaohdVycjAFed7UCGFuZ95A1e26i4t9SyqMoawbzGAGBZTPTzSKuHGrxUPtM4uCBZ9U3ryzZm8B",
  "key39": "5RjNKrf3pfofHLXdtwXLEmkykLqM7xzSmLRzsrWbz4LjnRXSu38g86LUoXN2n2Q8yqnnLvhnpiK7HEdBE5jc6ffN"
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
