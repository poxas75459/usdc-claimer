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
    "VHjtdVcF6vzigPh17936a89sR3hrbzKRjqXJq1Sh3eXrzNLu4KcXY8cSe3WewKevetSVyj7qFidnVUPFVv6ataE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VkNqntu6yQbUtdJHpjsg9gd9DHEsDjpXMihWBFUDqfAVPwGj8CsA8Yv3a89upsiWsocXz1QYN4PZdtbgh7wqW1c",
  "key1": "4LWH5UhpFuW4mLK4XFAQJbAG3b4gVF6HuvLcd4NmjzpnZKASvkYKW4PW2ZyAXixxUF8A3Dvojq2dZzJvavQa95MU",
  "key2": "2WhCRzDuZAQosYGaXPffpSCfTQcEJLaWNhdbCp4cWzHWBkH1H4qJ2pQ6NGZTirMJNAmVZVjDExSBCTWpqe3LvmCq",
  "key3": "5CiCiH7SE3ZS7aTe1YaceABipeWs4dYeJUHhCqLCV867ioWFJTGLcqjCWJxubwVzufr3b9CnYTHeitNLiAxj6omz",
  "key4": "66JizqegGgr46QKHt7KHt7NRazgxjFQh8rDg4sjbbPQQFTugZjhThUGFds1TBf6stunCuuuP6DDsfNfwHcpv2zg6",
  "key5": "5AtLW3m3GLjBaQZbSakjSfdcKfS2d3J1n1SMbtPMr6YaztjuzRT51wbxvSSfmKRRN6SpEpPTVFTup6UXGKbvY4M9",
  "key6": "Z5uSQkVs3sBe7Qri4zAexCCy4DtJzZSgZn8UmqWNjXX9EXmRFag2frD3TLzBVeZMhFRh6BxK5pRH1qvjJpRHnju",
  "key7": "6f7KjHhYVTctsjDJo9xeeeakFqgE6zVagmzPEGax2TziXxXVVbyBFY7qtcys2psntvrV3J3FGXeYC4FAt6DMqUY",
  "key8": "3JVuDHgyEKSuMckAAEiWaSpy6pkac2WEDQzigfoyjmbxa5N1nTr6FZBum4DvMreEgcR4Rv64oQor7pabQYJAHS5x",
  "key9": "2HozjzG58NjryKemzas9Jm2XURHF4mFUEiyYrzdkjDc4GJNgN4jquUbXgRpoKPWrtTsWdCo3KVxJSw9rGtdLapAf",
  "key10": "3CBVbhrgAr6nGW7Y5Xpbrk3nja3TbkuTxpBSJoUpsGkotAVy8A7y7Fk5Ru3cpRXx1FK6h2JPKFjzDgHfECapuMic",
  "key11": "36dd72xzFDr9Bo1ELausuMK1u5ENtoPj1Ya2247nYMm4g2f531388CD7dRekfQGjLzcZabLeBaQRDZBMXv4X4R3V",
  "key12": "y9Jx6LZuf8p76hvUHHJJjYLZK2Cs7q5LBLKStLwXZQFgtwdpsHNzbCuv6GfSFLv4nQTFL1jfjFWqnCrN2qNF6DC",
  "key13": "JgqgV21poRYGMwFoViHJCUgQ89naaRtVHT4XMiW2RLXy2bi37pnE9vTL8skKH3E4FdVZ5bxgtz6RsGzSbBfW4xt",
  "key14": "3JuNqgBainTnQX57HzAaZFKZhgMGk9Ji28TmiXCy9ncR54Gwq2G8zV16UD3GWZQJyqypDP3j3UCe4oHYyaXyDtpX",
  "key15": "4REYY6jnxkXRZgxd5q6ummnjQPePnB56otVTJYV4A7Kckjc3iJirz4qidrqWSP9FgV3Ng936g2N6J7KE8jLxN9V2",
  "key16": "3AyoLrwGAug4fF4Ee1d6qT7knvWpgVTTB9XMypjjsz7urcp4eznNGWfyPBFN14MQN1M88pq9Q3ASHJfMyTESx1GV",
  "key17": "mLZMu9DMJizCFf3433ByAQTEKFeqMpjp7wDwiDUPpkJbchVwmoejSkz2yehXGqAg6xXB7rer5Qk2Bxg4qhkfwpU",
  "key18": "MXsUvqFxFNubeKMwKaphcnd2YEJ36xjVn6o4qLLmw3nZqN5n58VFoKkMsKr2hYe7xcXUr3m7MggsjMFMiupo6pP",
  "key19": "2LxDntonvKpSXGQwjqDT2mNnogBFtNtZw687VxmBZ3z5sjuVB9LZU9ezx1f2xbre4kka9E2bmu9m6pNeC7N7u79J",
  "key20": "672sse6Q68VvZnJA8pEi1n5cFZw1agCpLxyEyFykWtodPM6wMSWg9tiXvATujbD8GRLxYBwKrJEo6qxzingZQMph",
  "key21": "3mhgWTCWFM3RnT4RLsCHLBWyi4YRU56j7i4L7SxhKGVKJRdRbmFnrtGLzc6fhDziszGSiC2uHibAUqdSFGJ1RYZg",
  "key22": "2X6LguYfmWLhLRMJh6dw5ggCRcZo5ot5MQmakaX9JxJd7orzTowgvSFDizHzY7NHQXL6t21EhwXoJWnwPuAKVvAx",
  "key23": "3t2sGtcp9KfgxbUuxzN8GkUUAk8wRkH2EToBuBYjmKeh4KfgXrcpNzUjauZKnB98bDgyE24H31nshef5yAuAEJ1h",
  "key24": "8ayLDuvAfQTtRQVewMQmNuugubMFkp7DJg7MJsysn61Cu43XUu3YURV29VhcJH2cPAKToF2b2i8KGo6kGPDSztj",
  "key25": "4mkf18tY3wcUabShgZN4u5LLvqKWRH35fg7srVs3XJEp258vxFM2yW1p6LrrYW4JDsLWn6K3a2PhdEipArueA8R6",
  "key26": "57nrnk6es1Ny16eycnRk3Br7Pe7wrBTi5pNeKbhRJG1Hpex8UfpyYDKm43GaHCeKHqUeRfRE3mYPg282QUKisop3",
  "key27": "3TAjwz9jFehpbv1bJrzWzKLvJesfvB5e8PSoSxWFZoWSKfx7MEF9C6374igvuFwjsbKjNLi4L8ivJWXHuaFxvF2B",
  "key28": "5Viv72huhNGkaXDQwNAaUzW4bzHe6YT49JZWxPADYzJiUDkbk78LjBkEhS299Yy5hHinLQJj7eZxau7b81TPvuFy",
  "key29": "4YZQCd1pBwjf3mHmA3ezQHQva7H3yX6Dk3iqwAYBxuiMD8vsyGvNDuNMFbEYhcifGfEQa8fXDmd29RFzXSQ72jCd",
  "key30": "3Y51ydvhi8HbWbMwqRoNi4PGEpdqhnvJyib9iHUyurYDTEuwFsW4db4RcrkbNPK4NrrMLa1TTr9zY9xVnctaby4t",
  "key31": "34rd7g9TXrxVtwNp9p28fgptrM85qgzuxpwqzuD61xMhoAmGaoJBcNoQmyLMdXb24D3pZvdiTF6ZgjFYBCZ22ZHf",
  "key32": "5aazHZQWJPXsXFDFzgN2nmkK2ijfoh8wiycZrMdHWSv8kzkE7ST5xvoH21bLyemXzQaUXb5xB2zxoR6udbQGwq8Q",
  "key33": "5Cot4zekMVNunoTTFT3xuonnLgaMnkG5MeL5L1fLNnoTjzGwooUzgt1RpZWBKH4wsoGbLte2vtUoDbtL6RE3U1si",
  "key34": "3oM5WFitwHPFHCifR32Ef4De38VD3hjF7V6RzswZKFLrDDKUbVetHeP9TNeUVbhTyCWyJbxQwc2FQGC8rtunZ6N1",
  "key35": "5uNmzSTDRFJQs3T1nEXN4RdNk68aCbcXchVDrk3JgTVFxFirTbccto2fE3nPjr89g2P36giTKUgWwoo1BRLEQMpo",
  "key36": "2Pp27DjNBMkp8CxZ9xGaiM38bgsL1EBB19shKWdciqtJrPtRZxqj6YQLnKxkHXmesB4KyFX4usMGqpwKxtTz7TGo",
  "key37": "Ze9TRRusTBQrxZgS3EC1hdxJGQYQiVSTBkiGWwokct3DkjWNrBLQ1SUck4Ci9M2yWK3frhyDz9QBvSEZAAVvih9"
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
