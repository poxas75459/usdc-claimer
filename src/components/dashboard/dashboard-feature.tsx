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
    "4wQu3nHkowbH5JF5TJKzUGJohN6MnDmhaSkimbJfquFuQ1PLuY6GmPZPCsCd4XNj2uDNNyGjsp6JGvnj2P7FX541"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gF36pPpvdMCsykAiXDouoHamrFypwAsbYwr6yvhpabmN6jfE3bEhSzxJJ5BNwZsEw5emVjEuqAM1J1pp6iooZTc",
  "key1": "5fZid8vuW3irtftCk6wkwYh3rxCZNF6WBTunPFN7DXuzsXYsnQiKUarfWRYFJDwjdfWexsNFg9NXf6hFaaiUdGRp",
  "key2": "yGCjVuQUitagDM3JQy6cvLjVkraHJzX2mhYR5Em4QgARg4D2ekvdar8CvbEsTPXuAMu6cwdY8Ba2aXbrUfUziQz",
  "key3": "2H118bBptW8xLPm7pY3YJyaX8ioGATMfrnKhnMKq326VD4GUhgRmh2xGu3QtQDaXqGCuN9iortC3fWPvg4BjQwth",
  "key4": "44WK3xb7jukYDkb5rDfJoBA4ah9ScHJmqgFy1MS7ct9sqPhQN7Es1rBiRba86DvwuEbLndyQZZBQqSJ9HV8h1BNH",
  "key5": "2yNEAS3WiqmByBcfrNUvBAfLyQktWimCkQq7UdcDwonVNUArBNNfhSRkT2XkT8Tg2sv4ueoqX8PMq1AcZeKppyPz",
  "key6": "41TE8VR9Myyxp7xrbYvBotish9tVG4v5JCd8cuir9Qy1TyDm3v2pz7aA2S2SyZe7fHv7UUnoiBx6RZG4SfNPnWa",
  "key7": "EL7i8jqL36UgmzNjvDbnLuXnmacFaxKBRRpmaNZb73yyhdtcUH5s1Q2hYziawaAroh65quXFYbQRa5qyJHKg5Z8",
  "key8": "LGSCFaBEjddzFr4n33fkQgEqSdmk4p8AtzVxqzdSyBJqXhjqqcQDf9bSDxQHKgdqGLX1sx7TQsesWPPzLw8CnMn",
  "key9": "5Hy3rURzpJC6SgVdLAR96RCxBVvA8vjvVX9FqEk2rBGSKtYWWkum2xEqd9c5a4P5zNk78CHXoUNhfPFQAVdRk7dd",
  "key10": "4KFKdUU6gDzJpazVU1NkiGk9uhBgFDWo4e5fVSGchPbTP8Fmf3HpFGEScrnw38HKRaVftnrWj29RHnnoxA1VuZqT",
  "key11": "5ZPoTEZurrhFB2fN4aqd6yfeXrdZLQnP33fmE6fjN9JkfY8iKHzP1FrWPCowTrXaYJFT2Y5PtX2QZbcMmwPvPk92",
  "key12": "5ve865txGRVUUQq8rPzTtzHoxC11yiTwF4Y9Chdy3YZ8vn4fAC8nyjJqfBHQfw7HtHo6U5RjWtQpyddDmVxnEfnP",
  "key13": "2RWXcXpjzyodEh2d62Y6VbkQGB71MonEYDvpTNqyqDkFZ82XmHLkV8dV6Q11ouegWtLMyxscNYuwCWghnwbd3taL",
  "key14": "32UqfMYR6dD3gouD7g3exBqjKJm6BsCUAcwoCxtS3Cb8d5ECVx7ShAeDr5XV9gApwkrmbfQpDvEXCg23w9Jg47EC",
  "key15": "5w2EvmxgMvVeyY17Saz22jKfhUdJRikUL48XSTLEqDj4icdZB242FRaU8aQSHT8bs1ZVSMUoCQCNHZVAECzLX7XQ",
  "key16": "rvWDW1AzbE1KokFwT2aVZfChFL6YZXAa2jnnBL2pTHXrvjXasMFxCmhLLjoSrQbjHEJrKFd3PHWqeLeLP6tN3Vu",
  "key17": "Vp5K3Mgnq3dD1wAz5dhQiy9PPsxHCaLwSpmN8HAtxi3WgAbSRoKjy3UiAEZHiY7nMYQaVxKhBAX3k93k2d6f4N5",
  "key18": "2jTJFdk8AvhijdXgM58sYDue1N6CBTa7VY62KFcgAWJYaoMYMjaDpPtD1hmyWoEaA75Dm8N9aLTMwR5Hq3GjpSFi",
  "key19": "eZREuM18ekhb4MmykmjZNPXrup4MYYzNjK6YVrHNGkQ6xVHffoBaVaNZ2kvSFGBKDoKNtLrp17eiLEBuShYq4aM",
  "key20": "3nr1jnbMxKe24maWmdrp975Gdd3WCLKLgWSCZHG2sNBDgNSHrJRLKaAeGJQZZRQo96CFSiUsMmgJfDjviYcDMucn",
  "key21": "xCK1tTprS6kN6cVGTKQLpdo5kW1MVyEVFC1S8b9qGuj2R6d25Wcae8nJbedKM2KprzBKJHToMSVEPtwwViAUiEe",
  "key22": "Vk7hASE9SiLJYPEkgqstzi8AZv6TXsgV9Eay1K7cea4cQ7HK519pfwzk5hapdfCbiU4wRovRJnnFc8mEXj4bii9",
  "key23": "3LrsJbK9ayrYDXU5uvXuZQEeN3Rh1atRNPHDXJYQw58BsnQqE7ZcanUeHXDrXQ2EjJFf5rRSx73yMgx9UXm5xUw5",
  "key24": "3bbMW5N6wcpsnsa1aMkrivDu4XdzBPH9aDQQzDPBy4XdFR8UCGPkxCqnCnZfm1TMrrg78iHcboE3gwu5g1GNCevm",
  "key25": "2vnpPy86Rhb8ATnecZzHTeLLUYacoQUYuEfEQvW7JNzHSqKa6EtmzET81rkrw2Gv4bQc9wCg5bb3prShKJhjKFZN",
  "key26": "ka5nm45g93DuZEUaBTvZCjVRqzx3psZh52bfJGjjxGBGuz6gi1BEtyX7YKmGW7epEBEWGA4Bu2ASKXP8Znz2def",
  "key27": "5gd1WD4Tf5SkV392fTmJAkUANYnBrzLdVrqaJNpDHwoejD4dcMkKKKrXvPZejPErQ5hsYwpqJqf3FNwQeqdwo4Hm",
  "key28": "8ma2qWSQYo7Zu5gMnKMijpWFqj4PQtK8hyKyg5Pvv2wCVhzRUd9Z3L8P3XBi6f6E7eM9XQ5vVVhA5waaibA4dah",
  "key29": "Wnkk9YKfcJUudc6jJbiTfisrEjvmkyi1VwKa4EzAG2tm8UFzmB7VYTHubtFpdGCNq1oq2KWDDm5wdEVCzLV1bYk",
  "key30": "ztW4p8PKhxBe45ZxZPW8Hg2ruADjzb9w6AmW5qH9LXueg1bUCCZ4Saxrw8K4cjrza149c1iahqBaazZeujaQdDM",
  "key31": "21Etr48bFLmsPBoFabFLpGYR4syEvMxiBYmHGBLXwWgwQ1VXLHV1wNcmkRhiKLnYQT1rGHtphPSM6oULznoJYxgS",
  "key32": "5bcYcA9AYJhiqnFTuzjmt32EvwxLog51ej6eZYqNFhfU5kgyPr2rva6rqMWJWxbYPj6GiCDfB6kKS8cEW8CS7tGz",
  "key33": "5gEiJZeHMnMmUC6bmS2t56tjxmRJhy2xBG6KANAdAaqPyc9q2hcuDh2BxMBbYwpuEbg13FrVMTp8PyV7Rh1dF6aq",
  "key34": "36sriAuMAwPABdn4vRQ23QBtBgBYoW5QwZHgJgmGZBDCiqnvuyAZsGUgt85doxnMHDDPCcxgsQN7Ddupv9ACWRBX",
  "key35": "4J757Gqy7yETSXvLSihdxFMqjzugZX84fBMZZbPQUJHLpsCBaUAqCsLGM4gdWCKzw6nkzq5XyaBcAW6j3qzPxtAf",
  "key36": "5pqPTobi7KPMngP9hmMWRcyNkNfVWEkpvY2RseD6FBFGrXduPbAj3mShUjrEVZsasuM5svuPx7MuQrkBU5Z3EHgC"
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
