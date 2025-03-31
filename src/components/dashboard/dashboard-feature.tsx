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
    "wYAwtMfpmW92kwEodot5QFmEKHyAdXHRVDqc7MncL4iyrcHyCXv1dRyhc8s7VmagYe9uAAPApJQ8ZBvW2kx5HJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2chHqmMk9CPz45sGpoZki5BNDy7TbjnthVyJpJ3r1LzZUwLB9phdzmWhm2ApQHixv9UV44mxccvvNCsxZRvu3jZL",
  "key1": "4CYVye2tMsbKxRpg44AphGLFYctr8PGCWb4VJaLY8AW1d3wKNjmXxj9GsdcSSnUJmamLHPea75L48x4MusHsAF7B",
  "key2": "29YxkGPNojSWYti8nSeBybbNBQvvksfUiCiTW1BMkTTvXfaVpzem7ytHBDze9sNG2rRtmZNkqFH9KdzHKkiGWkKU",
  "key3": "2QCWAEimTtezSfocYcF45KHaUf7JR7ZwnRKG2Aa9vXd5ano8ssoMJq9KnUJz7qqbWAodRde2w6PSDXba224ZjZkZ",
  "key4": "G7MAmP7mXwmPTgPPrBCP5dzJg1KH29WUnchnntP1TBvoTcGA8eogumwnLdn5NBQQ1uxLziBFs1ECwqCGcBDQnRn",
  "key5": "M8tNKhiPxmtVkQfBxaxSihJNoKaZQy71M73AJeXqpuZfRe1cjJjvbRWzkZ3N7ZcvvYASNEhqVjE5L8e8s1eCcyf",
  "key6": "yjw9YHYNnmW2iBUQ5hoYuv4oMc8r23mxzpSU4yYMc1cdwwnwUtra4HVn75G6GwUQ33QdHqEqqpzYUmVFHgjYJXB",
  "key7": "5E6BHH9aNc5Ee1LpcJcPAdSarV31gosPqyrp1xDAiCJfECt7MpFFFWDQb3cw9GTwEJSUmJT3f4nW6HmEYJrWaVyp",
  "key8": "2M5CnJutyvrkv9UwyLebV6tKipNB6KVoegVcNnotsfXLWVp644ExCd6TEhZhzmmVmJuoPLZEQfwa2xEsgbWBjs4w",
  "key9": "3JvqWoVz8NnJ73XrdxKFav8m7Vd5aYUPxgGb524wRxfXJN71Yqe4nQ4RDVuksy5sc3RDcv1WaFs7YMtrfjuPrrS1",
  "key10": "6TJ5PWYByzkMiGy3DXvxquGqWjMGb2uuW8RjpxhXfqCBbgHG2yHJ6tC9xGwb8diqcpdSEGnfGttzuZj8TtvsVnp",
  "key11": "iN3mvtorxjEma39FAbV6BsQtfFzjAEtbQNHUDs8rc9B2w2PE6to7Q4t3Z5fdQqaPmpiupyrWSnJA9ykAMRQfh4Y",
  "key12": "3xrF7jVwyPgtKWnauezkKj7AwEkEfTbfy85xaQ6wTUDpZ5BuU37uygfkykLZasEhTVnC4Te3QfmRjWA2NqRRXzuu",
  "key13": "2FKiovpb2J2PWZ6d7pkB9FPYhMxyz6rDpmywFjpAmh5qUHLwDD9nMpKkWPvAcRSHcj8r7D25fPYLD8xQCEiMwznm",
  "key14": "2fsnhw1UmezCpsk3MRT46KdH3Q7rvvoVbXcYA7kADyQniLd5pcgYgA5iPzc4QABmAvALu4Rq32Vf6wETyw4vFK4u",
  "key15": "4EK9ar4ojFUPYk6jzAUBhndyPeDWtnAATmMFKBjze2oP1my4fSkz4YqdobsfFQ1zworbStKKeUs13nc9VZjkgtAv",
  "key16": "4aCiBvWyzh46LkRMLzCELGQXoUNGvY9bdXgSFinDNHDLAJBTmKhbTKZsat86WkaDjMGQdzAFG2rS43GyM1p5V4WW",
  "key17": "61DNT7F1jrfdavpeii79MWbVo9T7b73Yzu57DwuuBQeDDXhZmrJM8rFZfc4gv5399fPejWEU3xXFASr7vhD2Lb9X",
  "key18": "3p5fXofm7yb94yVa9XbD6aW7EcmJ1BDdSqBuXmWXG32y8p7Dus8NLnJErSD2Qwuhe1Y7Us5tNAXo6nWuDhmVkNEB",
  "key19": "4MVvss5y7tvyZS2oJg9uey4BWeZ6jHCgtTd5DZ9FM2zSxeHH319PkpYw1a5HPqygmEUyzBYPzzCb5k6rmKfFZnn5",
  "key20": "3Y2G6RCtkXrPZYCf8cGqVVnDAoN7BgobQXZo6VcpopLFf4vfR6gkdkc8Wef6wLs5GZQ3dqwyM1nDCzqXGJEBqc8L",
  "key21": "u6WxLT6Cj588jCib4bD6RpM5THt7EMgqr1v1gKXXwzViLCnzrQE6Ks7wYLdcZmRTyMfgYjGW7XNCz7NZXgrtmxW",
  "key22": "LgDvQ6NhFSHe4WtqoEj1KDUqy4MWaqx4gLsZV9yzU2Nx8f8SKsSUsKpkXES98UBTubMR8JuFp6k7VuNpYTWYs2d",
  "key23": "GvP2EiHPxSShbgDfqrNCZKrdL2BmDL8nVUJTb4wftBPC7DQDqjfDxx9cwcnAPygdX4F2Ur89PUbTsqFJtwvcMtj",
  "key24": "4ncP8ZL2ND5bodRwaCj9c8imV1baFXC1VgjEg6RGq1PHBUFcc3i3SXo3MN5HuvHCQHCh9U3EhR1mFr4vpRPh8atk",
  "key25": "5ztoma1dqE8tBgJb6ZQpRHfnMUwaTHAV84UzHxn1PusNhJcQHDRespdvkdWEskH2eDmX6PnjjBApwu7pZ33dQtt3",
  "key26": "2Hbbo23XQjXZtq3jqCn4W7pzkmPk7JuhYdAtk3darbQXp5Br4GHnq72efVBMrvDYjAjvtrK2A1GfNhJFoZTbQZ7y",
  "key27": "5NS41WixHF12d7M1mJHkjc5wGmCKxArjisPJuUSFanfK6i2YLzT5RpL6L26TxMuB9ptDb4gZQmUTHtbX7VNeFvxT",
  "key28": "j931iicWdmjEZMJMgoVUMhauJs1q9dcr672rdM25q7VWWg2AY11Qdwvz3PHZZS44JRmpmxacAcvRKbUBebWqseM",
  "key29": "58bqGE3FrHXCUcJmcNoBQygaLFJhHFmUTchGYmzHSimMAjxRATsoBqoVQmgtpZRtEFktxPqDPmsLUN4jRugqMup7",
  "key30": "29A6X2FKrEFmR36nkjQYE9dDFaNFnpboLn9qYMv2xk7C1ZzobcQhQHoKJSMKRcxHz3BxFXvoPYbEyGx8DpF9sYES",
  "key31": "3Abnjx61rsU9qvVuhNWRH8pbHUu66VdGo6kfTx5ZadouNmvmvUE77YtdKJVXEDko2TvoF9y9QNKCFfQ3PruoVXnx"
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
