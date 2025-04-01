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
    "THn59KWmFv3faAP51gz851REFXMwhjk62tUUtpZqrG9RRXdC4uZmaXQgfrJkXAvT8eG6gmwLHVoqZRsz93z69VR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BZsKBQXUCfXTi536YcyzmQf7NHjEMAKPJX3JaWgDnKD3DimrsLsF4oFPsVT3ZGAKrgRfGQGGakoT4bqecNCMXgz",
  "key1": "4eJrcg2b97Kf5HAuMjnjh14ddRXe337yUWBKMBqt8R2XGUpUZ2ERW3wskXYWwwo1yXby9pGfrpMpAsT3u1QbgygN",
  "key2": "5GC5QVjo9yDu41stdrZEJbHKzHdsjDamjWK3Rykf3iMAT7kk9MbwkYfD9WxGBbiRjQiRi78w3A5gnMuccQo7uKqE",
  "key3": "53c5SToKtKiqTqDYX8Mj4g5v5hA4fjZL3kwub5jLtpe3dLSFK8tiu6icG7XNHbHrSfZ4CtnB8bcMb3HoTa7KHMZ1",
  "key4": "9gHw7XTpKAhRNqvvMVAFtNFTza358wumrE4jbv7SuJU5DwANsmJaBEQfDUVYrjzD6EeSEDBvwdpRJa5DecRq5yg",
  "key5": "AD5LnN9NMo2qxeLiXNrHuJVvAGmGgdLe9pwrTFBUYVE3ERYdcCTc8c5V5EtCQKUbUinLDCxUU8a4iiopgzhBDVh",
  "key6": "5qEiFqvPmjtHXRqEq2A5oXH87zSrHiMbtcYHqVpYRDSZzxQEH6J3gLrJXMxzd3vBtPQpwQ4cbXG3JAFTyRALMkmz",
  "key7": "2JPTVSqxKtYqu7J92YPDMWrXiST31bfQqqRW5APyfciTR5as6CZbB8Wzq8KK9F9PyLU8fwcY9poGzqPGL41ratWP",
  "key8": "56ALwaAmmYjwuXvJHXbfr1qDH5iAkujKqoexyZUqbco2ZMvr38wuXERSt5bXxcTnCANd6qQ3M6kQmJYRh718iqcD",
  "key9": "34cEVJRPQMMvqMFEBmzBjcJsZSx14C2pogL4F9ZemHqP41b8A17jeCispcpRUcNVGWxHPgK17BW3FVueRno5fqP8",
  "key10": "yrgiL88tb2nGJLgvESBLwB1FHWwaigt53doJZwKbwjKaaJS1d1xQ9cfwp2APU8BXSwUGP4wBMsteTacS7QsmLnp",
  "key11": "5pN7MDAGFtuydLdC5TeGjqRQ82ZrJDacHj1r85cb8aCSR1TSsh25mKiLW4RwQYwqnMqXZUYAPASwsPmbGKR9VBNH",
  "key12": "3P9oirwyvdcRmW7UdEJbvmMTX9o6AP5Qtr8U8KpVZr4MzWuKwKQYCgTTN47f4aCXrDrZdXzNKeooFYnTaPZ7eNhY",
  "key13": "3ZjCGihyzhvoXUauipKbEfDAPFZg3jEwcZxDq8hbmsAhwCXFrqAQGzPU8gEbxxZ1hVHZ6eQcz7nefJnKgPia4zpC",
  "key14": "3tW5rUEhqK53fdszhwB2NHg2YLpC7K3fhT4vYiFoNZ6Sc6B4MffLv2QyzTXJNHaFPLMY2P9hAd73PyMoYdzT2h5F",
  "key15": "4yncEmPvMyz1eb1KTUbcYqppsY4fzJAa2WwfXGx2DZvqmjMuzTzyTGytPDAszLWQKg7J63FC8QzcE4No3os2FfEe",
  "key16": "d77z6VB6AtoLccXaEZ4Ns16dG2i9s8j2oJJU1vCjE9aiG57soiavgrae6vXh7EW1XEogTnMXzNKYjUEKzajFsQV",
  "key17": "2DF8seZ14AjHHvAi6mW5KG1mEbrNDDLwjupiWMd35rs6oUHBaUEntZqrWcDiL5QJffj9t2qrCmaTsLKLDqJGxvnk",
  "key18": "55Jxy6Jhh8aGnQtgKtnU5DkbwNmAr4FdtKUsFVuYpuJonFz3NN1PWsPMrTZGu7MWyjvr1h7SZTbWMbtst9q5KThX",
  "key19": "4hQgdeVXeh1KUg6rYaCWp84o1zNrpf5gy3Pqty7sdLRwEbfe4gEaSErR9bLwdrJRZja5GJPDfMVSaXVPoC1rbqve",
  "key20": "439B8Qspfk7T1kHZukEawRPAnQga4Po4LNncYV9qe4Tjg99p3KwpeASoEuJf8CXeZLvZULqPfNA3RUegvcbwWS2H",
  "key21": "3NwppoJgZyeWATbHWYYvgU5qbNcjQYxBaiL75iKg3LeZTeh8D8TRHRGUFQGY3gvz5qd4eyQeNTo57UsnohGFEQeY",
  "key22": "3reTUSE9uGynjxvRVbLCk2AU7hhd5tnEdBs6ZvrdbxQ2K6nRabftkoFnnB1tWm86UJDMjoc9Rhvo56Vi4mHN6xn6",
  "key23": "2469emxTkcobHHeRcZGiAeSrcQdbsM1PqWsJJGJd7am5ZsRGp3yLBhwx9scBawjBQzVzwAe8Qo7Sz9bPTkhQ3K2w",
  "key24": "3RwjDqvT3CU7ipMqsW4yupPyedRpsnhKbxQ8gonfCiABhi9YpQcqmq2vPv7yzTSaJ5RUtFKUFTvuWRipGFE3KQYu",
  "key25": "2FR8GrEyuPNawZbQ8F16UwCEgaFU6Nr5qE6pUd8PGmtuoR2A72MQsqpZ86PR4PZvTw8WWWLiP3Lgdw6fAqzf2Rpv",
  "key26": "47kHJBr98VqiQMjor9RQyjkWno5eoV9ms9w7DMLC6dr1H89x8YfDK5nZ73VHXkyRce8FkBshsi4bVJfJJHda61Mx",
  "key27": "oEzK61UeuZcpGx5X4yrcNWnxfDocqv4JGHirxsjceZnpWxq9Atinx9FZ3oxK9FpRv5KjCy7Vhi42nppMpVP8VuZ",
  "key28": "4JGTLqdDPFaWCraCrhEZPCqNKqD2dyh7739uHMW6fRVjyEwx4sf2i4PgdsYhwBjenUe5pWNqQRt2Yrqus6kiDAnx",
  "key29": "2QFjUHCcozbHDXheExQVYYYY5YLdjq3Z4hVJwJ8BdW7tJsm9ZZDsbeoPW1Tmzi4RpzG9yWP412gwwoBiqssnezN9",
  "key30": "2Skyqv8qh8v1AnwK5NQe8GXV3YauKHnATEdZ1aaGa6xgH5yJfDsRRkUZBLTKFw87Ey99tgS9w9bwFCYNzJmh5VDu",
  "key31": "5y9VUJ9CmaqpMqJ9QSqKGfFMLPwQs6w1smwv1ioJHcp2umP6AWyXUVbKbQozhHYVfcUA4zHWSEJqdDnZP2acJC93",
  "key32": "3Hy458ND2bGyNxWopAans6FzSqxZAUhA6e1zMzFGXnetkqxPN5LJVUn3U732JYo9Rrf8CvTzomeTihMTH7Mv8bxk",
  "key33": "3KyzPe5vjcbNEV8qoA57CM9ruhVwvaAbw9YStdC5YSKuNoAMZ66ddv81ZigjTwfxSWukCUfDyaafux329TkSdEoT",
  "key34": "3Ybep5bGWqWCYxZ1fKr33csyGJwtaBgb46YM7CqeqdJTr9b1BCdqUqRtYQxZZKndqYhJ5Jy8ocLsxk91WMbGiooY",
  "key35": "5qqRmwLfYP4uYMhiCvd2jBhDfqfSjwUqorxosngkNJCwG3SqneXgnqmgXHfkS5VBMgQ8mNqPCAjhfqCDBTgGqiKF",
  "key36": "58qZRoH7hxswkguZ91N1q1nB6zcoT9eaTj5scDC2XGm547w5xB9RQoztcSvZDVPHa4McdNKjaXiPqsxZawpjusX5",
  "key37": "3CKf5nBNbtdwLY2qStaRFngTSh7iPmhYzmYLkWtf8MdANo7NucmhBak6giQbMa9Gmn47bHjQ1oCBKv1rv8oa73rv",
  "key38": "jeDGc6FpUEA1ekm2qxjFcrksX3gtTP3Qdcsn8n98mZ6V3RMiJCP4dwakMSXZYz1oPLJoEU1k2ovMc1a7MiaG38g",
  "key39": "4gaitH9jJYZNJfgqnmVQUWyuvye8VcNMkFsi2AVHV2H83VRLE9dmcmKTBCwpbRtwYxQTECePzR3J85fnHSC5ESad",
  "key40": "71wQJWX311EHbiXHwTozKst469cysg8akX9fpaHXSx1XWMQZGn2g2husZ1xnsUzjXuhayQELBEt3HxvUBBuNRwR",
  "key41": "5jFeW34jM2vP1MPHUHvCPyGJCf8vz5nh7hKvSkc4keKxUoFkKbRaAnrZwZ7ZVByzdKpyoez8UqkBPRTBorhxWfLU",
  "key42": "fxrPxAaxphVovH3g1YFmNq7VveX3v2gbk3qm2B9K7oZWxoYhi7hsdkEckiTNF41yybNAqZsvJNfPw2ksqGG6Cho",
  "key43": "3NpFFr1PwVTbMRjkYzDauoGQvKK73GfuZgWUykvZ4CfKyLwgBxfohEZKQpP39NKQcFm4sefrjBsKAD2GRCvC16iz",
  "key44": "3mNSzEuUokyu3fnUA8sVHdSSZjdBUgPizmSDYDxzHks1vXGvpjvVwy9ExVHqxuGL9jq9yapECAtmRTfyeiDuaHuV",
  "key45": "6xntzS7zLzRg3XzVgo4iyrZRYHHVbtEZgKEF9dqMYUk67yYT7Y1D5ejfJUzc2Mq5fJHvytZPEWz7ERfwwZRSS4j",
  "key46": "4HUKBGnTpN9g3riH7j2oXFQxG8RPWMCN79DWN5eL488Kiu47VBAz9pAnrLGjtvHJN9jGjwUXjjbM3xdx46J1f2LR",
  "key47": "2k7fiEjarhaSN6G9wS5BfmcQ3uFnLSA8K7jZ1KpsWSVoTd2suZxK3xDnTLMJ4sVcJzi6J4CvXd2trExSn2itRBRE",
  "key48": "epRoMwgoV2MtuUWrdxkVr16sgS5G422EqiiCFY6NqZpBbPSnjphGZsn4m7abiebhvfXk2gEvwj5gjnnVPLDZukV"
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
