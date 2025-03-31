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
    "2wdnZGUzWct5hLX9Ba2e8WU3exj9LhsLykpKjRC3heYsBg3sGkUJ4BACpxaRZETPYS3e1MUqi6tZroGxUxHNtV9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aJFeR8m9eCt319kFfKmGBGnjS776mgRkcmgGNNm2S7Sdje1sPxpW2pBXtd67WcuWZHboYWvnupFUA5g9xMvGzCq",
  "key1": "51p5p9LfmzFbPS5Yvsx3qR6834vHV88FfD7Uaqi5Da7XTGxX51HRkR8MkzEdCztwSe5KvCL8VMGty2YqcQByJTV1",
  "key2": "3hjdzsMDc4CtmVprhc1YRmxcVm5kbowkj12Xp2V2VWp6X68uL7GeSLH6CRbQ9CNSWCTYj4XT5D2XFSEjfF347Ryc",
  "key3": "4Cnhr4afcGjuoCst2upCFcpTA5kXdR9we3hMyBst1QJVzwaMeJWXKYhBuXdwNXv3RDPfjmVsrhPm3UT7J6Pqk7F4",
  "key4": "z4brsMGqeLaSo9wNmcG3qayFKLAZzUpbDbguxfhxSoWfn7cAb6bZepoG8KyyRvonztR6HHT69NV3PyiFbwQw7hK",
  "key5": "mrJzDo1UEA6WBk2oFCAMarwULmScgLry3hLBG1nkkLanTAJWycXB9nEph4xMZnw2bBPhVRKPJ77FPjWyxHKFdKB",
  "key6": "8otV5EEn2QtLPG2UbggggBNsYRTLZnPYHgEQCQjNw7QRj5fcdtK5uuGjEbmgfyZgQfXXdvkfsMauXbxKyZt8h8r",
  "key7": "4ys68pS1ek6YemNK5nas4QdLUz7BeTdkgVnQ5pksV6vPunFVj3aavpF4nRgRWQP9mXFJAbTeR8jFBZMgrhJpkakj",
  "key8": "3BPSYnxUgHJPzZH8spAcPGfSbJZ8qTGusZHfwvfeSdSV8QQW1WU7sRr2tvsMd4mfNH81tTh9W9Db86Vi51CAuEcn",
  "key9": "5TmJEV16ca6YKiuCAZJvVTqL3Y7NXeAn2yBwYyaVM6dv946w72ZR5g4vefvjifsgkpoze9h5rZtPvztuDxjFMzSh",
  "key10": "2ft3wSc4hPgb3n9YSEFQG6HWa4gm9MiywhcYcP92FZd6cHvSTXjdYBkwqigb5a7HvstKcDkZo623VDKAPLbuugND",
  "key11": "xnvGoh3YFZJVm4bsWMXSJZgqf5VeiUo99RcAMecdham1UHoYz2x1FSHh13JW5YPNp1brnbUJMsMd2HEVRoqpvYs",
  "key12": "3QCWfVYztxxBk1H6f4cZMjqrU7NHCBTd1wgcrahGRFYqphk2wY19KTzskdDtNiRxEeYV1caEqxusN8qE3LkTytGn",
  "key13": "32xuNztuNn3zZka7Z5GAiqcnA2sxmXrGy2fPaBw7WUkLDrTQ4tCSQtjU2jcprrUqV42nKCdEWNCxDiDYxUGHbDFm",
  "key14": "2kFm1ovKQfkDa3MdkF5DWKfbvm4ZQzWRhn8giwUZEqH7G4yS6nsih5P8CsyamvWmN2s7uEbMnBXbFnJ6tegZpQMq",
  "key15": "4FfrdcNj2qLxzbtywU3o6Kqtm5WAzwbjqAHbyThRnMzMvYFotUDRQHxne8x4PLmUuv9Gn8nsEoZUoqk3sJN1ipZJ",
  "key16": "4E6zbjfjbT9T6r3aaPkyP9kQCkaZwF3mSsE8DbWPStZmqgksXsxtheKK7E4mRD9Zka9VkSueubAaJ866Jx4gEvEX",
  "key17": "3CjFfe2wFe9Nhuwcqgjy35q8K2Cdo4dNo1fvqU6mUGHT9j5ARTGVcQk8Cfx52j1TuXftYB6dQ4Br1mz9X45qUdjh",
  "key18": "4ex5gdotPeseG3k4zNQ4bC85WfNLYk6s2Zvvg3tbxDJsvRD5UruRJBYAktRqcJwrCTM4tKixxobPtzKtdk1tXJbf",
  "key19": "2K3EkW3Q477edRVhjHW7WfuwBBZFTbQWrXMHWaQYziE3fVQ99mm1bRATLfoULuSnuqqank6HowtZaNB3XJU1rSBz",
  "key20": "44tT7Hx65T2T2C9JaqXZ2uhta2LDdF176oWUfGAW8aHdk9LaX8xVKPiPPyTvSRr9rgvUdN5SG45kCGHCxuScgjBs",
  "key21": "5PCE637TqBcsRN2nevgQ65oYMPb857vNgfDG6hbrnPeXETke1boyGj2rMekPfNBpb3xEfr5BmU4HmL4mA1Epmrae",
  "key22": "4tnjdmUkYSWKw7XcutWGq6eJKjx6qw961C8joZtKr2GtoRHPs5PkANGvWUW2mbiVhvaYMbUBV1qkH34jWLSZHXnK",
  "key23": "4pVUcMJBq4fiXrUSqd8EBZvmhU7H2U3X45k7hNXyx7yHVPVNW1X7RWRtS1BtNkLQZsiGGQzj4UAivDY93WiG5Tzz",
  "key24": "3DKFSefqtBcZc4Gs6Q2GaoTwqLVgzx9eEzfqQDQFyHzX9fhXpgzXKrE8AnETPjzMevw9UV9WVv9WuLdNsmeXEkCf",
  "key25": "2AhcSrYGe1wnq8oqER5Vr3hUBycUjrLkfBTykvW8iYzgy3sopUwwr9voNrJvyUFxk5C5ko6SfbuSc6zkZiD3p3Hh",
  "key26": "4k7fDKSReU6U4AGsKNc7LAvCAHJfPgpW5PgQetfwpAPvHKxfRb6qTozSu5QyWGEhycj8qHfhA7xEgyQMCpNps5HE",
  "key27": "4WGTAn9XFYUi6cZHGeAHgB8uwJA9c3nf8x4Z68i7YFmV7Uza9PJxAuUdXvHxgHoN5AjvxMXcZRsUdvHTjCweq9YC",
  "key28": "22coxAhKPA5MiZnZx1Pt4Bs6Xf5CJcq12AQnYn2DJgQSytvtYqTD7fkeHBSwYhF6FMGPUDSBJ88reXx6cAY1jJhH",
  "key29": "24yg3x6JwG5qStiMmYqW52q2ohuB4yhqzC2FchcJzca9pVpeQLY7MvojtJHeZyDAqvWAzswctEQQqEqYMRCskMug",
  "key30": "2YBEmdkcY6rCT8gR2c3ZA7djPNgopUtfXX6hp26hsjSE5NrYVKZAgGHxtsx6gff1pj47ZAKvVeWHVmsUfiwS3Zwi",
  "key31": "5TzCUWdiWzQfdR1wyDwkEX7vqnmhmrbTQaWXdmqU4HRm8JvQhWhgynaaLCHNCL96nc1WSk9J8joAECiEpu5u2DVt",
  "key32": "sCNEKadegPk4kg288NB94PY3FgJzESJoi8KVX7ru9pkBrpNLisJ47RseyKyw7vqyFyhqTvAkNXAJrkCXbtAnGci",
  "key33": "5sWL4X4WcrJh7Pb8BBwJbjHi38ZUfeo2MGR618mnwTaZuuyS8kDS1TsXXY8DccuG8bWDubQTwat6humivzjPP3oe",
  "key34": "22jHGVvfA6PhKU7ZqimLiFjR4kLM9guBvv2ppeZQWkk11hJ9khQSrU9g9NEANnWBVD9G25T24URpvSM2ZxjfmyWU",
  "key35": "53Ty6CEuZHti8b3nCvuDbscE6sXPw2hS6xHfbVYA5Z8r7FCdNivjsq3VpTbWka539w6YCMBfykodbNLp3UTCJoGA",
  "key36": "5XFqvFaHbAMpVEtKvbrWkZjJtyhyXtyTpqy85YQygEa6z2Nqpqr76vFEbA1xwwHTPfppUtVVqvNxHWw3VaD41ngF",
  "key37": "4UU6k8jzWaQz3hUbppR6bR3PAMSmC3WZiAEpNcH2F91CbL6QFZjtzCUHExyQNQmmtWJZgwfQJaCtEdtJh2ZWRSRd",
  "key38": "5iSqYEp1BGzL1S8MqiP7XeJ3ZQTQ4abptURnaiXpV8wmJyzqKBECss7R2XhkWtZrnDBhdyWWPQM7YdspjP3RubEX",
  "key39": "4zNsqbL9zYziuVwPa6DtdTxGQ82Wu1CEYBXXkCS4aWx9YUgjuM3MM1nKNZ1FeEjwjhUPyyydzg2PfJpx3x1mt4M",
  "key40": "VaEAamfXEFZXjiDxZgW8zX9KK5hXx5Zrg4kxiwUfjZCj23VuWsao8UXK2hy6ZcM8fAEswRcckjqGDBjv2y3s8zB",
  "key41": "2y5UzShLo7ZUv1JJckz1EUBsmagqndyq8BmuAoJ4PFbQ6RrunVqnscUVFmtV59ingPyZEM9Wbi9uHwwH568WVmdA",
  "key42": "bsxqcR4zBiQgbvxfrALpnKTwnmT7tcAhzLsYRKBcz822A9Vqo7WJYPQqKThYMQeHS7y3RubfJkNV6bM2KZNMDqZ",
  "key43": "4J91a5FDuLXsTsaF7uh87kpYNDK63KoPDMMHuo4UiuVegQeZWHpUTHQPjiF5X2yu1NsqjqdMx43g97Yqhvz8uPPU",
  "key44": "4WRYtshjSjacNzFbVwbzzHjAnCo5psjocCRmdJt9S2FKBBBZ4MzV8sFNTBAoRdTjH6zXtKURAh2z4Yq7pa3fB2UC",
  "key45": "nXNf4FLHr9dTsZqpK4nV1fq3kQjxJuqXNRXLsXiyh6zXPK8VB5MD1GfzX6QaopdrcqmJimPPzqTHJMHXvVddik1",
  "key46": "5eSb6mRhCJ1eEBoJGSwRrARPqi286SadeUkSwuHHuExzYRV6nusq4as7hrLZzwiUcrC5jU6mceG7tDtiZpYXGwtY",
  "key47": "2ibqpMtJvyJSf8HL5R55cBFrpX88Qmm2QoZ8jbmhBeMUuWAJ8DkCHSg9bvSrKc6N3EXKCM8DnLmgWNAgmeEF2bPw",
  "key48": "5kNVsVdULRcMrTeLYXYpHrLmwKrJzGn2upnrGzhntKJV1KsikQqL2e2GTT2rpBGSWGexxJNTmEwimHQFAKDhuW2a",
  "key49": "3EHc69oqvJVL2yD2fdM3TxUKkydtXnRGj7oaoC3h2Q3VLkAZryagqwq76d9Rr4UDXbQFJvKEzMaBAhauGE1KyD3d"
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
