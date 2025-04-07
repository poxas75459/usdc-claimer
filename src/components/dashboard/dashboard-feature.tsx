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
    "5iowdUpcjReaApeE8LYoozJdEs5Cq2tncczzDAEasKdcWBKBKjdyJVwRyrZ82mTPPNZVxPXDiUyfuqVGHTEfoJZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53mXcqNBRY3LLkZz32N1mg8C53UHUtTbXPcTUJ3v2VFGv8Fqzzr7WERbE5QTJWmEnRecYx8c6TPN81q5sDSYQotG",
  "key1": "5R7oomGvue7dZbPoL6UPPMq9GdWp5NAKZ6x1agGG4iU5sK1ohLUBDu2Y6UQj5rpPXWWPZPzcj1nb9PqQQ6KRnghc",
  "key2": "G6w2acvzePUiNzUTcZuhHAHX5QEVZgx6DxJnQzexLiDoz959xDYoER3UckTcaniGJ4qwhHyubizdJPAN8DKeFGg",
  "key3": "3Uu2su5q44GGAjZEoiuLayWp8EhvSLjtbKi7gR2tPgRuHrSBq3Cg9rvDrNB8sU3s3Uivrjbk6yLEM9jwLL4u7r56",
  "key4": "5xkg1Q41MomAc1GJWxEN52y9126b1urYoYDTEDVDjQkWypc6a9WS1Dbth7XQyJiwFy91ogeyNbfEzr5cfLEQRmrM",
  "key5": "4AX3TdNYBAfvWmfxBTkyMomKwD62QkMHUbx9FQJAGozJEDmJkxotZLu4gTr1vepKR2ivFe1QaNBmeUGDSZtHBFtU",
  "key6": "2MpDmzPuueeCeFLcnndu7xkFBL3nWvfRACD5xCD5tDuxNXkoGyczWGkQGAyVLW3hNbBqu9VSQ87PAtwTXvsaZXve",
  "key7": "5Q63roJTrfCqzyPpPZi76mohuJBt2xLHjd72M7aa5VUbi91jpv5Rrw12WgJEAhntZuFZrrYTZMwF1NHvnejtUZZr",
  "key8": "5cNXFD6XMwBafAfvrpa3TRpvF3DWp4SxgEnojphv453u2TDepWiMYLu4UgFw53fLSqQhuUwL6QKy4Ed752s5kewD",
  "key9": "67ZpvNbY16Jwi3AtkpVW2Z76siSdbU7ChqVqCLqd2WKX7hzyAqcxVoCpjxLvQ2NnDJzsxckkHA9esusTy2B6yaeg",
  "key10": "2LNsPJo4r9CmLzDw73ZMZRB6T8FeEaSmQW5NcXZsAJEgSn5hFFWRoRGaqprpfXo9SmCDPHLzxm2nKwAzQXdajbxX",
  "key11": "3U3dKXmMHWZed7vLCuiNPZjuLBbPdRBhQPMWFQpzrD8a2XDZBfrtARSBYuhWHkpX9eci8Km27Ser43qGvtLHPEzp",
  "key12": "5uSighsUd6rJP4vuxz9fU7JxaYovwhgZDPEcVtvkBWX5UJG7TTGFjgM8THSw6D8JfKFKLcFd6mUwVmjRLkzNhJsa",
  "key13": "5NmVkU52iSqcPjieFPotvFodsMR94eYmDfmpw1TS2aw5TAb2FLTVHiHyPzsT3abJVvZ7JkVcMz2HJVwMyP5jc3N4",
  "key14": "39BEeAmjPWRF8WzQndd5z1jpLRBwEgtcxqVZYZUV1fMY3VMUHUfBP1bQxDh4tjG9fCuECurY3bCYMqZtHVgSVBrM",
  "key15": "59QD9aFgUxM9U6nQm6XHUB7MGqoiXViML34i8MJkM7kNw77uwGAmBqjXzyo1bxnY32FqRq9sQ3p2h8monm9C8zCh",
  "key16": "5CCS4vRe48rbcH1mvZdvbPMG21mZnCuFizZpcesuh3ApqjriyhEVtp6Na1NBBaFtqsjfXKwhXcdLZyxweEQpEkUy",
  "key17": "3CJwe1rLkAwJS4R47B9p17N3RQZw6Ve79KsCext3CmngfseXBjoWzh1WMxuJRsbxNSr1A1puTAMjXd8ETEZjvxE7",
  "key18": "2HLGMhCbtq9TLWdbvrVYipLbE5cNzJ2mJTeQcX7Akz8X2XdD9nTvCJndWBPnLQcj9V5fSfCSEpKz4gGcWVhhPQdR",
  "key19": "5vioVSS4Kfo7TcMyZz4wts4WNRs7DYV9dpGyJNCD29s6wwR5BhsMg4WmzeZEgpKogu5LKd4X6My3rnj9LrQMnW8w",
  "key20": "3CVdhXGbEEyephABYjasXc4Nzf1eSgg4cawBNVF7xaMFT7JdeRfUJ1ESmqWZgFMWK2uBMXaVThR3oQWQf5yjBY9p",
  "key21": "5AUygbVGC2GxHtiAFUk7ANGniNtJWFnvs9MqWwjdD8WiCvrk3QUtFiPxCLshAJoggNAw992i5fZAxfvXXmpK63Q9",
  "key22": "3T4JqpHX1q8LpFaEUA7eth1wj1ZDWZpEeeytbKL22VrFcus2bvdB3Q7jB4naNW1MwB9VMYCqYVbBcTZ9NJFwZ44J",
  "key23": "3WPTxYzV3gMemfAXbrTUHcy6Kq42PQekWQUQexonUUH7y15zcyTsyoGNZoEe1hGjDPDSxMNeSE31rybWwB8H4HKR",
  "key24": "4FsjKKtD6WKkaXWxBKMPMPyBfJf6xYMJqAcrfzHpWfm52T6AVdzLpCnpVxjQshBGCmrJF2qE6xKn5MfTmeEc7vNs",
  "key25": "1WSSJdmhSzCqwGL9S3tHbaJz4S2p5PcnPmbLrg1RZTNapMywE6DGJ759tphy1D1jubomNyVAqKQ6HM87qixuZ7Y",
  "key26": "34NpW3y3HKb3BMXp7Xw36kXm6ZMJz4JaDUqf4rZZNbo4JAHdJsgr4cT8hLiY3Rb9zmHsuW4WnJBJXWib86ZVphe2",
  "key27": "4qsvc4z9TihP34djwLuKLcx5sWJkjCvVA9Vi8Hj26P2MSR3No5E4uMLFfkiKjt7A61HbLLR2ma91ZTxZTKpwrJg",
  "key28": "3axUBgTEuSL67PB76W6aN3vfdanXpjB5YNwFTNxjQkyDeNY6gfJUkFSMjiHwUNRdXfMcppsmoFKQ9tHWVXrNb28j",
  "key29": "2KMEf5zkZnzwP9YBvncdu3KjYDK2WBSMWqpi8RaPxGNvWKKQ8GsRipRcPfk74LYPwm3Nfeht3JisYMXuhYu3vbNS",
  "key30": "2xWVaei6R2gPLeLVRKfvPZMTPr3GzteFeytbL62saRzuv8B7z54qLa7R9gbSohQVaRsubPonQETLHA8HPZVQhoHa",
  "key31": "3cE1NnHfv937TGZbP6oYS5AaN53eQYYrFXk8DUbFUR2XHXPZpEiEBsSTCpAwXSoNYfwupgA7n1huWGfTy6noTfVy",
  "key32": "5g9bfzpxoD4RJtPLY7qdBkHUd7h2rjEeZMvYDUDD2n4uY2SHuttqqqQkSiQfWHNfLAUWAHvQ8hKxsTyxXZCqFuLS",
  "key33": "3AKek4p7PEiUgXwKFHWHWVdCdQHMVp9Ptk2mHwU6LW5qBqabpMKTZtN4RPKwMeqQNWJH85Uaevo7xzneH2MJNm7v",
  "key34": "3yGWi9WskThZ1zFL62SV5w2hoNMMkJe2RYfe3bsGAKxrbqg1HjzZ47V3JsB1ChTYXxyvFASXdimUvYkBZ3w7PT7t",
  "key35": "2AqmyC7LftGXSR2Ky1HHjzdsES6ML9CRVyY7X1topAYs2ANiRCXM4R63Mja4NVgGo5TxEdg7z1EjrAhoAm2Qvf8n",
  "key36": "2Hims13mpZvRkoJKipTobkWZQWXTmjNRHHDoTjMqCqFZHTwBAGn3LquV7Uwg4sQMQCWM9E1PLwoDv4HzJaUuDYE5",
  "key37": "57k5CBnH7M73k419hEgXkdK5vFRZ58e9MdAuamHpLH1odYTgM4s54CwrfvZDbjnWN5xLZQ53976JdWQBgYPb8dNt",
  "key38": "5RpDRucipMxuk3Mx6ZTqJp6Mt9hYdbC8nL5PqPds5zxFMJwYj8XHkjqdMBmCFn9gYWnwHxDaD86vZHmp6ohowBsm",
  "key39": "2fS8bfmnVmaVH6VRVTF5fnnikofjz995eLVZPwpZ3uYhbpYXAoYZuTdQSh4XjSFyNEtp8K8i1Z5u7UXJrcfLkSwx",
  "key40": "492x7y76SWwBiY8gLg7HiyGVo9cwmQJ5mbRinQ4g8v4TzWQuzHkHFFvbiMQDCfZZNLrAXj3d3XxZ9Df7728ZfhbB",
  "key41": "ss2RYrPTbUUgtS2EsTNUc8QSGzZBDyUPD3HD46rAjQHEZjbDP79ArbYqDmsBbB6wyGqcDnj1rH9H2jy8YZ9anC6"
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
