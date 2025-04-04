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
    "WZgdGjzgXqfuVL5Xgztuj1QxgkJgVyqewfvVeFkeVZkT5yzt1M1teD6xxa9uyjdzLFESXNESQBQ9PSuKW3nyq6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WHmHTJYms6JH858wh13xNyL7zx2wxdBvMT7L2iM3sEbgyHm96UW9unqYc41jYQyvZPZsucCPEBVcFU2tdJEufuA",
  "key1": "24Nus8jn7KRqVTHyxgVn3SevwKKq5HRf9eY3Nyg6EA6WZrjnfmdvymVz291BmcvJu75S5zAG5WTn8Fk17jJYrupc",
  "key2": "5f7ReHEce3sgd4uYTBorYm3kYyNZMosqVEYj96oUS7ygmxnahX2UyogPDnPpVxt6XJpy4ZMdcw1EWBC4FVuK2HKS",
  "key3": "22xksVcLsY6j6Zq5PPYGFacPsNDWJwXRXqxDpJkYBfAxBcaBe2t1dDWQSDFMc4Hvp5b7gR2RafgFxn6MzD6hNVna",
  "key4": "5BHuWkPrMP33hRcFjzvs4GsUtRJUHemes1hnUfoVE3fK23NsAF1RqPgzC8vp4cdaD2kmZAU1aDTmVgQvGJp5kEn7",
  "key5": "2146aRkn6XpVUdEiS94rMFeYEkzPceQyf9JYjWupo8HdgAEAGfiKAoite87uQS6dc1B7pPNTm2s68EjpeSE8MGU6",
  "key6": "7qWpebhA8Gmgden9cwawkP79nXxR7DTKP14VhxwwsXXjQFszuGZ8zzFo3fZU3GyB7sP32gqFucahLpuxNBxqLz3",
  "key7": "5mXjgJ5g3zNNSdifA2aYftbvm2RcMZK9vuHuzXWoKbqitVpwxouBkdjGNVL283W4bik4jpVXyQ2ZyThi6qmbwuwq",
  "key8": "Qh5YR8M5GRGoQhJEbVdVFpgWZR743L76wRJAC47XVXmYAy2HQcAC1WLpWSy6w1Atfkvp2x4mheqAzDLSdFejyCW",
  "key9": "ArCR3mm17NZU2M8oE8jQveMSyaocjGVf4DUYoZARC7mubmEjvAU2FgzeDJF9fv7cvc5bmP6qgFguqHZ9cDrWAiK",
  "key10": "5fAMQ3NDMS3rGyvKqZhA8WExnxQbCY2G1xF378HrpDGzhaDXWetmN7kcMG7TxBzfLR3DKyCsSKemWeEtekXqM2QG",
  "key11": "5RuGfPJYtPtvtWbun4TYEZvNWNFJ4tH5m8939Ldsuq3AznVENv6FbZfLoLNXV4VyhoU63KDjyyeH1GEbhEzV4uqs",
  "key12": "7hmmCKas6kSyjQiQAG5XaQPPFdsj5LAFvcX4uAQ9iNaeQkdKvRP54u4fKWpcGGXCqCzP2ra5GKpiaYmBfmA8wKj",
  "key13": "421LMyLdqgzAyPrQoKUZivGf2FHkgkFMsLHLkivmWNPWhPaH8S49V4SfuptXHZTxBER5KqNjQGR7NkfH7SaBbJDo",
  "key14": "2qSTqByPh2khBHjxxZ9xJCAVC2SP82jt7ktymgcTr4mMSdtFMGenvn79aaincYMYW4bAgYPDk1HVtj4WSD6A11My",
  "key15": "2ezLY93X2uVtCStLg1sb9cQkCD2WgiKXDw92wbQLfocJ6x6chunGWeVeZDRz9wUegYnKmF3paof8xdvQ6FDvqG5u",
  "key16": "3oE14aTCAK22HXYbed2CUDjyNL65eYbhSmngVdRkoXWfEunE7Cb4hJu5wZjVZWYf6qCmL7DnYJFcZ4TcEFpfRNSb",
  "key17": "26RzRiXxRaxUA2mdTcsVFDpD6p2Xxtb1dHeNFGxTQwsDGe1iymfhouk1fyYbxhg5dfD3oGjbauM5gk73Pq8ZGgKe",
  "key18": "5a9Xxva2sY58y1S5icKisPosPaMyMBk6q2vjrzDK4cDs3tHp4AWRH36aJRRqJfr6cSciLkMPafZw12PUwW4HTi71",
  "key19": "3WSzH6PtRs96cidfgx8FRXtK3tqUhKAghULRiPFd4ZXNjnTJfeoZui7VEN12n17UobJzkSgw4PHu44xquwY4nNG2",
  "key20": "2hcCsBSrZas7Ch74SvCwcBDdmJ29AnhftCvCy6wfEH1mCXjXrjohEbYJHfXrAbYVLYvNo313RqGz7ZYv7rYkuoDu",
  "key21": "5sawgTdKQx8ngLVbcAka1MpCpUqK7NTbzSpZvTUFhVdtxkK6k5avBbjuz6rS4XnL6ZsTziFBoiLNu1cGa6CTmeQ3",
  "key22": "E7SxRL2Cq8idUjTVGscYar5Hw88x4bzVHqsa1d3pYwKQZMZyvzhkcB1cDKSSeNLXK1XivbV94Jgws4g8gHzWyL9",
  "key23": "2gAnWsabXoyoh6repUTeNqNiQVJ7aaLY57aqauciptF77hsdQ4wYRjVseWZXt6vQJkrimNYVSexdQw35rkV8hT4t",
  "key24": "2oRHZ9hCyk5korxrDdSmYC2pCSzVgzAKuPDi4L1LfGpRFvNJNbqz91Z54ramTs6tAkyQz8z15Lg2tQbviAXp4gHc",
  "key25": "2fUeaPEEV7E3eSf7XDW1Y4KYr3ZUGLiK2RCbL71VbC48bD5KW6YpYL9whP7Ask5NjW25FgbFkcZAo8pUbN4sU9WV",
  "key26": "3asUwVAyRcDg6KqEVADBzvS5Ngd28hQnFDLk52uFfekEphXSQ51gBHPKwXhySUS5sjRiDZ51GZVKW9pC1UqVbvMD",
  "key27": "3WxD9jhyJoFngT1dikVZFfVNNBNEYfHf7cCQhtXnDZosKqpjCGv7em2U9vj2pY5ZtEaUhWasHu49ZXsNNmPUVDaL",
  "key28": "5c9G2W1NJ4vREeZVStPptsTVnb9LBcshgkiLRkmn8pPXjbz6FPh5ieVBJfHLQFjuTv5msbM6BxNG5Dw263KbHmLW",
  "key29": "2Jfas2gvXfifpSoiQNaQmUDZ5phqxTDTTbfqrgrTbL9knYW2a4f6oNPAdiVoyEBityHvbU3eFi3AHFYKRCdx9cJH",
  "key30": "2YrxbQTSFzJD9DNAS6D8xKNdFUb4Yq8aBuCEoDNc42RMN8hdafF3eTZANzQPrdsrXwpjuxPZK1zt9B34jtBPNHoA",
  "key31": "4NLdEagbakUNhuZUMqiUSaGzLthFkoWnafdCYVNV4Qhi8nG1GEbe4XJgsfyXXCiFA7KH3ALSdeemCLCeHbRudP9N",
  "key32": "2cvPphsdpxLMvn6Suzahha738NEaz1Tx5Xhh4aUWnP7Fy13HWECr7cRApTRtxyf48MMZosWQtLgbVszAoVEqo6XW",
  "key33": "4KmaMKQNaZGQkYcXAtS1L1jSZMDocmMKMhxWnMdwdGNfhSU3p1RK2K2nSfdfYNGqMncsEzBsizBVCTv2LB5494XC",
  "key34": "2kVFBikvSQnU59qjNt5MY9QwUJH8yjDa4XZsn1jdfGPJUgxSPwmjLMCak9Q8xhei5yczT7dxxFHpvNQnkBkq8XSN",
  "key35": "46L9wq5LpMMgSdcJKMnH2HLKNysnQiEWHYTmgBaZhUuB7bECk8P5zFC7EgWvETapX4aoW69cjxwbPkJUTtw98uZr"
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
