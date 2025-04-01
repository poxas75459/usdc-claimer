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
    "3B4WEGnQnBLcGmuacw4xZwZvex754yEc2U8fwyaTP85cjJxMRf4c2XssQhpAk6rzGQMPYCPSF6AyYoCUuzfk3Xch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WVWPcarNJqTi4p9h21fimZxS7xPE8fB58YCU1dAeC5TV1scUn64LQL1wpShHNc4f89Fn9JGqxuLpTTnysRmsVgz",
  "key1": "47mieGAzb37A2sjJgkTFfJtJCyggTDmEKo1qYyygnj4KFfvvvz37CgfmPs2G4bEumwdA6iGaF3UK8WDKAVz13oVr",
  "key2": "4cEyUt4SBkjJV7dkeUv4Ci8riZS1uf7SvXknuhgvuoEn22bm1C6mTbGHF9i6h3zbN8715D6hWHjEi7QGNrEPboyw",
  "key3": "4QvBA7upU6NKgSAKSmS2iH8SMpjHnsHaxzMv3FR2LydBV8ywimZp241VRPiGL3xYDtFu66PYVoc8j6WMC4KYu8EU",
  "key4": "3kTmEwtRYhvC2ZCgmeWbanJLde2bxXYxgF9Qtc3kbFtQfLnojDVpMkfzxnEpiF9PDtCEWEzSRWKLRpcnB3i4pdPn",
  "key5": "WZTRcxmaScURR6cSyghKo4gYa2CHXBZVrs1pfuahm4rgsh8cDoyU197AvvnydLRBerZx9aJiuiv1vQT9jCWfbnT",
  "key6": "5H2TF58ESCLYdEizif7KkGE1zcTVMPMTgxPjuinyD4e3ccPp89unNK6CKEAT5Pz3dMQBm6KzM5oLNn4KaJ3jrhQE",
  "key7": "kdF6F8k7SpiaiYDRoyDxGpoApo482oAEtb9HfPAhnn8S78e5ssVcFwjiN5PWLQHdM51rSvBHAgrjs8h4rrNonZg",
  "key8": "rzZ6bYn31kn34DPDc667QKdekQGi4tAPLJvQehFN7j1fdEuSsLRmk5kCZWhWvp5ZsN2YGVDVH69oep2sdBseLnE",
  "key9": "2BxZDXa43qyoTVzp12Fk7A1Wrn2Tc1AFiDtTT7ZsppvcEkx95g8whUc2jop1MgSsdGUm1nLB7NqB57URGj4wq7xM",
  "key10": "5RDcER8AeVT1q2bg6mM7G32ZtUjr6WZhRaVCc1yGYzh2VF3HGX6TGHECJ312mCuoqQiqkM54FoVVkG4GGBYLwwHN",
  "key11": "5avKT4JzGbjiEgCvJGmg1CiicmPju6DjMCrEvPffw4rz3jrmbyiSodPu9LGqz8Furebz4UTvpoXTv9M5sfD7UApV",
  "key12": "4iRJqmauXgBLw8TabrF67F9gXhVhHURFUUdPxxYpGCMdts7346MFhc4KrWBjg5vXc6CH8puncEHnQv8VJNCzuhyJ",
  "key13": "4bARbZ83WtjGguT4Ey3EnkZBTCknuwaQTHJZAS5gsxnpQexrJSe7LsXY8ryBcsKCpvvKfajhoV6kVn5DitMYKVkj",
  "key14": "2Cpu2tNvfrgaL3Jvrtv7zRGCAkzxFbSDpH2keRfH71RfV71vy7CksQyLDh7hzjLFnEzcv3VP5eNMFSbPJbqqJ4CR",
  "key15": "464RXCSucZWCqn488KjUMu3iAmvUZPmB8Y54cw8zt6uosnQfC1cBVeeqRuNqTWnkEJUPrxTSucUkhdnN23DjARt5",
  "key16": "3wXaSa4BEEEtXG2Li2q8UzPgPLYCz1MCircspeGeqUg7yn1ff2e4ygWBt26Kr11vNYem3bBfjCYpR6WLxpLmdWf6",
  "key17": "3Rbua7kXZ5xeHKBL7pWRweuS7FvUTDi8gh76zaGZRg8bx5aMfvJkLf74Y3X47uSMfeKyatRvZGwHw8DmdTGP4xqc",
  "key18": "3TJYfrTJHqkv6zTgSaFDhRZKH2dPSZUTsY1CPyRJuM2qDcZXVyzGPfMKLjV3KPZN1QiRuYU82DCCpcegmwMLiE51",
  "key19": "5yr5XMwdvtkpKVT3QxACorXHfpSkVJUwubJThK1tWb1SYx5XvpegmsgAk74mMhHJKyv3JqxpGoa8g3ai6cnCKLKY",
  "key20": "2bu1Q8iFmkYAFJrjsWj1bdLb7JVgBDAqo3A9eicNJdrFU7s19nYJXyuwvbW8nj5N2KN6mH2dZ9GUYQtqTiha6F38",
  "key21": "bfWbwcFC8XjqV5S4QqGwaA9SG8BuQ2PFhu4QEUhf4d2kFdunqJ4sQeiusHBcRSTn3FkN7qR3yVY8FkoB3y6FVBw",
  "key22": "5PbGzoc7RuV5EZntTs6YfzfPoi5siwoZfKxbKh3LzVTWATnn2CgF58Ki2bte6fq6DCGPsh1gqniPdo1meCVFR8Ya",
  "key23": "5ajt7hKToffD4KjreVEEYe1fpqP8Cx3LD9JpeD7vm7RJ8hs4KJRCcxNnvHQuVtmkpJZ32CK5AvFor79LUksPjBeT",
  "key24": "3Q9tniXQGVEhr48sp1yj4AHieAdLwvVc2YDeS89JjoNaYcM7SYr6Gd9dXvqydWHYEtr3cr6V2YRpT2PmeVk4NiTM",
  "key25": "2AuiNq7HtBruHiinT1oQqW2YppW54zbCnAqR1iveCB244ELmzKsBtGnkoMQzD7KP9VFXYgTwZczagTd8MaB7NKw1",
  "key26": "3RihHdUmSE3Xb5pqEGGV7DYSxyfJHubuhyJFuidTmUquaYUU6jq5NPjjAQfNUh1Zhayz9oJaQ5htmSzFBDufvHzp",
  "key27": "5TS1v8zHJbw56p7McU6Raca2Hn8HZS1hS9kWkgUQBqX9v7F5BxfZDuXpUQq4Zg5CnXJACXLaKzG3H5q1u3ZvBr97",
  "key28": "3NZrxFPUQBZVBznLEfqZbfDh8XFNSPALQCiSrGrAGPQj47XVWp3aiCgfU6FrL56VLmotJyauJtWo8uKPLVLVNxxc",
  "key29": "2qVeQ94h2M63r3djQuzR81dUn19RDhFTCnsimsfiUziJmf5ucCddhbB2hfpHkKJdjmfSpduMnYu9CuKyZkmRR3Bc"
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
