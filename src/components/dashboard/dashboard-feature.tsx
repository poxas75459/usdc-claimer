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
    "Sd4H69kdjEXGPyjTHsKa5bgdMwW6jEnZPuomXzHCDNfg3fCSWJ6cXRkM6SzBTPkys85q8W8CVgnr8gR5kYF2d3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qp4J3vJZWNYn8MCy1gyXYMGewVPXUppjGBhWXwARR1cGc56RHyN9WxwcoiCaKkAMmiSnD4wCAfsC94KZmJtpSAt",
  "key1": "4fGLxQyJ1g5S637p6xzMQBdhNfRsgjQt7sNdEuwHDFq8UtcujRgxZWFTqCgGr4uT8RMwzEitcSnY9uLbR7Ph9WVF",
  "key2": "4pyYzhv1DW6LP98NHtw6iJU7WsfCNcf6ateCHBJtqmwszdd3wYfaGRxepvR31U8zi81i6pcZo5vGmkFvVczMNSaF",
  "key3": "MDxeov2BDjgefofRaQzsyJigDkaWCjL6uKFnDnBQdCPL8EjREnsMkWqHtSpXbsd6i9TtzaeadJ2y9QyvLWLmKP7",
  "key4": "412b7RDXjCKs7g5UZzwAaiAcgijPcfoaUJYYTikYyYXJMbNKiADesxzPWNrj6vbuDS8UavbGjeCWm3M8NLLvUxaK",
  "key5": "G72CV8BCKUcvo1VqHFm85xe8NSa2QpD1qKu1x8x9eD5v63tLjPK9tajyc8M8EUHSco5bgRsx2cTRTbG7EDQSdbj",
  "key6": "5xvz8FLMYpaaXMQph1QKnL1F5uMAksvWwfgWDBfCRQrkRs8RfeDxw7KCRgYLMPfcXCPikB8fdChvpE9KKcxNLp49",
  "key7": "2fA8BmJYPYydUmNEReFSMX9PDjsgjUkcMihjsyQieDjfd8a7FdYiHyuzJYXTesd59ddqjohFcaYSgZQFj2bVJwd5",
  "key8": "2a3Hyi9JM5GF7UtdTH72LcmvyfsT9rzorP2KBKVGNWc61h6dR18Laoaa7i8na4QYvNbXFQAzW3tvmiiEfy46rjV",
  "key9": "57ddC4WrMUvAvKLL6CEdhmYxugZ3TUxHocpiMmHwLvGPVNryhLhurdLF4K2hBZn2yQp2rHA6LDt6oERZatDGvTLF",
  "key10": "2mmgjFZxoKYT3bJBq3LwckdnNxRGwSVYsoLKNCVq54vKtRTRhkEwHqF4PNjFfif4BAVdZHMpmc1MQzahMmNNSpMD",
  "key11": "spb9kWqeSntjZgLeeyweL6DThfQq7HMkb1iVYUXtsaAftMY7jo9tXRRdhiu5AggJ3zUt5JpKgwdu1mhrbQfxDwf",
  "key12": "4i1KeJtjEQLVYdndVNrSgm4HzShaYZoB2zLP9F6cSXBKDfuPfS7DvFWNxLrwEwT2n6SYuYXEF1EJYMQ84MNMGMpz",
  "key13": "5w8CcJL4e6fGig12GB1akbRBzHQwYgfkhvpcnZK9zVC6RCZ8EiV5Go2pkb7GPpAghym7Ubf7gUqhsCPsDCXjeyZ",
  "key14": "3s8PdazfBDM2cfvknifzV8fVrhWPjd5woiZhynWENL4QVYUiwpbHe4CDK1kne7zJvVj1LqkXoqWiH7xhZyft5erA",
  "key15": "42ZaUtN4NthyPudY1cppyNTZxJtYFVRxVJX1RLjxWfFMp1i2qkTSL8ov5V3TdjjjTCqKLDdXx9zdcJetPRjsqLXY",
  "key16": "676SfQJW88e2rxpWyCuzyfb2YkvQbPaxFR8EB1NsQqwzyNP8LcZKLYs2mTefaygkXp8DJySfP29VYj7RXm4zqD4S",
  "key17": "5KXb59U9WVeCaPcrYmmEnV4dgx2bD4TBxX8ePdBt8ocJJ39QaaZQLC18ttVr97Qspvysm9xaAsDcY4ERnC74z6ew",
  "key18": "q3sRJhHphHoMbrbZedgjCZmhD99hRFNRAxFhyPvMzqoWt7PxrNkyKNh9YjLBaVQxzxadWT3STS8X6GAVsBtf4VU",
  "key19": "39o8nd6ckQQ91zwgL2SVqbyD9ECKgsxj8iVJ3T73LrzHhyYbtXGxBFmjA5m2mLRyPjCE68BZ9cp3uVXCRM7RdUYJ",
  "key20": "5798bEBLsghELe6H9umeccDroAWc48syqysBmhk2N81RTTbEQvAWSfLnZTEKE3YBBqPT5R5rGM7MXnGNKCRgK97C",
  "key21": "LhDcxdCFF4TdgLJAhkAWm6V8jSGykezKjoTdNBQXPeoeCG5JZEBvmFYbmbKAUQBBBaRrWHM22HRL6irwXNudZUE",
  "key22": "4Uftd6PGFnyj2CtAy9NxMkec6kvYbK8pGh883TaBW3dTooMQQ9C7Vxyc5Yr3phBE1ZHX9UihLwK5PXwYJ45bRfSU",
  "key23": "26RWdaR2HSQjNZJrzgbwLWHgRMzd4aXhtCewub3hE8wmHfAyc2bVrWHxBKNpwut9RDNnyFEQgzYB6tbdV73JCybw",
  "key24": "5XkHzPf6jdrsuQR52ZM9k971HbopFY7qXm1PPFAf43zHfWsS12XMhGeNUsj2sBM6Nmm8ykzoug8hHQFGgHXqmd5V",
  "key25": "5LnwXrGoCN68aCynZcwtiuyKU2YiVaacKsY5XAk3X964M1muqH3dFc25CUArFoAhazuQLrU7BKccajczp26BiYPk",
  "key26": "D6Vh2sTioqmGTkdsuKQcztkB2KakkzKmYeunAVKGyAe1NUrNXLJN1JLtkzehDk9QECidi2oEfP41aCTCEZBWFFm"
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
