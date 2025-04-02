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
    "2TPrdzAXPcEYWB2X652294KSiGd1XgwANfSS3a8XJjmcpc92dLzf1rH6gSsA4Gj8XRkw1pVvUkqFYFsqtxQYBwf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X7svuYWS2td5t85Bd6mAYjXXwiMuwandsoQ7wvGBMMYrTA7pN9SjrXb9ZJEkn9EpCLNTRPakEcWxmQuMnxLXyxF",
  "key1": "35uDqDT7aeG1bYKzxqeiiJkjdFrmKTYqDqPhEVtcQHbGrtigdZCfNpMZzKZqLTkbZNKTaKYag2dC9nrFPx9BJPrD",
  "key2": "5E6ENjycrPdhqchwcXuUYrjpobAgZ2iy8gtQtm6yyPzxauQw817tkPxB9cSgawT9j6ni7j3hWTBvkPentWdptXaa",
  "key3": "KF9BmDYQxv8T5QF1Jz5fDeg7FyP4ocd1W8U15tnNs6Zhpqm6Yci2F16GoiwmASCZmpPcMV5d2SyrUhy9tADB3or",
  "key4": "2jQtm7wLfV6FYHw8anro7d5PW6PUXFiUoXHxcZsz71iMMyoT91SpDyWdUfDwJZuEZWcUGmjuwq3cym5BkBMH8UkX",
  "key5": "4zRE5JNbvfrozdZcWCzdda4tNk3D9bvD48UeX91fb2GrYQ8FAkEFYVnFUUMNmTFFac8fWDHpKyHXKTrg3ytNxSye",
  "key6": "2vMY4VTwjtFe6TKSm3UoUQWPyxaqsAbsAnXmEMcwqkYVXk4NRoMeoCQW9nHeHjm3PrypQ4QUp86MjXsZCT6QgJjP",
  "key7": "28n5XDZLmvmNh5rNyFhRymFcyTciLKb7kcKTDGoZqwE34C9kZZULipqfHkKisFXG6s6m7pkK5zJkZTyEm19jj5Tb",
  "key8": "ho1hRtoXPEd8Tc4Rzk3doi6kSX7jTBwH1ZC3x1XyZmni6SEPkHmG63Lo6eMWz3n8yMXk6fQkXDQgecLR6KdwxWG",
  "key9": "2wcaWAXpXG1vtWQG347WMPG9E6tpyUSmVqDjBcuVGiEwUtgJtANDn3KQzAZ6EdQjcSNgdaCBWZm6ogsQrXDJdLXW",
  "key10": "5kaH8V2psZLQXJKuUzwqcab26GgnZq4kZBC37YSVZmdS1ag7kkbd68CqoZHHNHF7qsUjhk44KgFzDwQHML2NEvee",
  "key11": "jE8ViGtNy4yi6egwufLvL9day1yhu16mWneT9NC2JPK7eXP2fjAPo5ux6Yw7NGMMjjq8EQcf6jYduJm4Grt24hP",
  "key12": "67LUn2gsbZKtQN16NZJBdtMYDSzGRnMhLkwtve9ttPPdmNHLHkzJJDAwTgbe2VVpbzPKtzeN3zbngqdzUQS1fKhz",
  "key13": "2ZmS9QWcSpkQnPCs2Mhwt1bAYnnQHPgn7fWsToazYxu8DXWVnT6vQpYN5oWjdJ2Lqwt1bRYgFcqsWrDLghLTzVWT",
  "key14": "3eiNu6TzNRUx3EHboLg82RjN39cMMwtgLhG5fgCvE3nTWinXcL4xEZ8qFwWXekmsdkbTN8sd4ZeaoRqR29sV946t",
  "key15": "gwKWQeuyBQ6RnaZkxdWTFehn7VX3woPAufPmRJ1UBzaCFXndMfagVwzgMxS6xsgBLgMNxPpTtCBNWMrqWPutYaQ",
  "key16": "vx8zFbLKrbsHAb9cBqEcGt6tveQB53LJjHQ32pve3qN1PgPo5Qmbr5DdN98TeTT6mWdpVTHUcswjw86femmARro",
  "key17": "5smUzKrD4Gfdn4so1qvviFETMubatmXgizGRN1w53tC5XvaYDHTUFaD54absLyT538BvDU38qhrkUW1yeRuBQgGB",
  "key18": "3476uTCCVkA12oAbUep1KGm1biPc3enbhyGycYi3KgbXepUwNzi82YH5xcCCDuFesNmCfbZLzrQTdPK88885mCh4",
  "key19": "5GDLk2f11Gj1uc5G81qnRnJk5xYFTfYUDBnxv85vhYaeeZJtykWofQHro5GJ8SXcvGvuwGfheVePEFzQonPNghdo",
  "key20": "22iH4voaEUpYYK6A4TPf38cZt7bJbTsfuFRWjLX8KbJYpYP9peuiWSaJFh27sFf9fVtJVzEsAmR8tqvH5fB9nuqp",
  "key21": "5CrU959vJZxuB8zH1pjFHYJb3vFewUWFisiUqMSJoP5Z97nkn2daGTLzT273wsUvP337D1pcEcWJLAUdxVJGFhcb",
  "key22": "2MsyZhRP6yKtjmfuEYYLViG2aq6MDBf81qBLbD3mPDqwgK2emQ4FvA8Np18T8FJ6B4hZjzr8qQMEFy9TFnFB4gBa",
  "key23": "43bsP3WhA1DcfcysporpJzGxUmt27mMy5e79kPaLR4UZiieaPxZxo3mbJ7dvLoURDg2UDRp4bEQXyfMt9Sjkzhik",
  "key24": "t6eYq3tGNEhWH4HvPE531eiG6A2YUGRQphabVasfgaArGjbaMgjYff3auVtkE3djsGG4Dpo2M2mkC7hzj1erMi3",
  "key25": "3nZZvhYpWRx5be1gtt4yGUjuEhdh1xHAC5nHD8VWAj9SDGZgQjjErMPVJr1zbX53pSeX5HoPYdqLek6LeHnBakiv",
  "key26": "3nR6tYmUBeLq7v4FSavfG52cMJqdCbgi5EGtcxLFufaMU2baF6FLho2oRUV3Rwj8ZBiEdPvz6wnUvUgTTaRFkwrE",
  "key27": "5k9LcH6HJkyEshqyHvD4CnLRbyoZdysZbeyDdpyQaDzQvZ47csided5sWKoPmXUdVQYxR4WSWcEw9fVQD8FvZLBF",
  "key28": "46sib4uxSRfw8GsqjiKLEiLVvMwouSr9QNaxwYegotY8ECDQ4cyez8DDMGa1uMfv4PkBzu8BEAQAzSjB7YvfQU8V",
  "key29": "4JB34rDHjaGfskppemK6npeZkRKbVcnmpB4Y4nJpgxSLgsropf98vjRYQ3tyFiFNUSZa779p1uJcYVTF8H5NizaC",
  "key30": "3DxtJLzpiwxiqnqAu1P1WAxi7jNjm5nVLXD1JyBXsvkR97TAp5dSb1JjTtZ4y5CbejtiqxjcmvS8mMDR6dzwfgjP",
  "key31": "3qTX7iJjNLj7K8xBWmFNfgmNbNvvdL7VMSnABzRSAVxUJzDj71NQ8SWocBP5vBq4DgFW9ERj6GaPyjCBZqRSattN",
  "key32": "5tv3KqaUDqPEmJNkPiVtTLXX2AWM3KJPXrWqSW9MiEZ3WznqTojSQnMELtMBrbrG58oRLmN9iSqYxdZ99SXDQNco",
  "key33": "2JsNBWAJsnp1N4t6uH7cJK5HGwc4gWjztLkenAtg8XYKhoMAyCW1Q3H6W7NSGRZ8CPkdePfrqkQFBMBd9q3zZxon",
  "key34": "2t5RbRE9zg3UiQCT8tBkWbtCS1j8QBe9ypbzArfSXxNxHLEaHYcVRzg1ZZK9n7RwUusQY4i8h4nDU2env1tij3or",
  "key35": "4utPjjBZ2Aa6f5DvKEmwMd88N41fwuGL6LGaPhJMY1SGqADxxjFwNrFajFtRoYRPmKsE4vcLyNck6jfAAmpHXZZW",
  "key36": "2hg6vi9CnYNEgWLp1aPhZLbk7FHiicM7ttvz6HNrf7SVRU5hfgQC24qcR7dRaB5PyxpZmEHc1Jc1ycmVoBXd12Qt",
  "key37": "knvRczuvHEQT2spnSvyaRSsWRzxVxLRNZ8EQ3oTBU3zUR6ntvrBwnkZkGdyduano8b9oMHP3FFE96FdDZJEBs6q",
  "key38": "5JgJc2hnyR5dz8crgVn7ciVesQAX4eCZH4yxXa69XsKvn5AuCNKe68p2YrTkr7HtV3BjWDzwfqRdazJVDdQcmSJ8",
  "key39": "3C4nPGjfumKuc7yZUucpbE56pu9YB5EqCQqyAyyD19o6kTPzcjizAVLe23bvB8TUctV6W72tLQCkH1pVRJLEC2yQ"
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
