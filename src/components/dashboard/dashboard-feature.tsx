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
    "4Ht1yjqMcKdGWggCT9m7VHhpuycjVpwqaKMUFcLgVnbiWGmKuXVJDXtLmJC5XWnhEGTKobsC6Z5rh9tY5g5JEyHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "589NX97s5HPKg6wJb3uNGuJq4ainySURpqZCQcLNX5dFCmQL5t85aEXAgd5x1kJLvdqAkLVTrcKzq7S1xxenzg6d",
  "key1": "2o4Nh559WRjjLiq9wqdb9GwrkTK7ZsFmx4Kfn5F8ENtjshqJw1mC7ATyxvSPSp9fhuXoHWLobygTrcvhwaKmmEUe",
  "key2": "4JAuDgtfCZ1pitBncpwrZVbNhy6x2g8BnYE4N8VrhH9qeZggrxmK72x262Vto9KyJeaHFNC2YtA5W7DRDSji5E4H",
  "key3": "2A6qR9uwUGanRpkxKPHmmVv3QZfy2afmLth31aSBtHWsiKqjrDr8RnrH4NNCUHPMog3ZjU9S9ybdokcaf5B2YkT6",
  "key4": "3G2EF6d91Kr7ompdi7w6Qq4WfpVukJFU1CuGk2NTGph2GLoBjgE5c8m7aajskqzSdNeiqx2XZGF9mc8Ni7gPd5Az",
  "key5": "pmsRcC13eTEuGwpLZLZC3EqVrByWVbVkiBf3SKKNr9CwESNyomqjHZJzm4zCXe7TxN6Ca8ZkN3xkFzAdYEE9ubY",
  "key6": "3Yks9hBtHemj2ZM5AE1j8Xn77GhQNkU79BqxiSf6i8no1nF7qJNCfUhY3FLK1ecNpmtLwLzWi1gbMwjCgobCFeTb",
  "key7": "4snktZF7h5wajipSYiGFiA1WoPWaym6wucDE3B381XGQsxyFgoErU7d5sbkpVBjmiLXM5TdSrr1xczRK1denYYK7",
  "key8": "3iS5bhbMoP1GHLZxyfneY4dH3vuwag9qLL6bvMjPmoLUAQDGZoxdrFYrsffZKXWiKw5uGQDVBoB2w4TRkY5DPTXk",
  "key9": "5BHuchw25KHb12kmaoq7reTuDi9yFnhxZprRYFVQD6v6dtATD1kQ65CSFZAf3AHoF2WJkp6KdDiWYXsCNoSJi8JZ",
  "key10": "3AcxGpWFaHE7ZETjAwDcLX4MyH1ZNmPDFn8o9LuA2YGcAN9RsXKeqfwfhGNyJmyAnNhuXXXy8VfqgpfbFJADFbBn",
  "key11": "5R5rfPbPuBLayaaPA4ZpJSFqAxHXsLX8o9Wgp8KaER5aBkZxk9BixaiuabD1YQD3hWz8QJSgQcPunDZHQsw1VXpP",
  "key12": "NnRBSvV6Cjcm6FrAeEazY3CvABMAox3hYQmiqgVs9N2EheKBRxA2W98zBDnXTHv5ddmkX48Z2vVqANs9wck9bP2",
  "key13": "tbuCBCFFtDpHCKPWdvFmHWGwkcb3zWZSN37BspjwCPGh2j5uP1CuUgLYMVC6gb9SAXFFwoh3wBtP7kMD3CqFD5f",
  "key14": "5Z98itrtvozmfXspCnrvJXfZn9wMErVjCQ32wXudVzNDvJSMLL7JL1ZE6YJcbcUPXNQuL7EMkcG6C7Pz4m1PV4LU",
  "key15": "4a7AE2fRqYtHeHAQU8nqfx6sRF1B1WRNtodYLE9WvBSnBJDwnQeWh3fcpEXK1iqp3m99JQk9ngFdcMcBuRdUAHMy",
  "key16": "5bkm6fkKV9SxgE7Sz3vFjZPXrBkwsGPnKf4BnP5stzHu6CwuSrCmWuLmzz7DTopL7znGApRoHbMXsLw3YxxcxeqM",
  "key17": "3ScmMJ1FnRWkKA94XmUxBwcZBMPzsUwisqxYCnBrtCzbqsnb8uh5rNVVEHK7ajuqdYMeG3KXxcHZd1KzR5Xj2ttY",
  "key18": "5TTePNgj2oBeoazVhz4iFm3ttT1T1nEPeBHNXrnqH69sNt3vnjRKECzrD6X9pAzwp4fToh6hs9WJhSr5F1QVk93d",
  "key19": "BvmP3fRMrWY6qXQQ2cGsyfJXf6hPyzD7rgW1tjPDbrWp8qY4n1nd5webgKMQCo6gYpU1aJi4FBXJ4ckcwPEo4bJ",
  "key20": "VtnEGFXuwnsiVc5BaHKi1BDfcqMjeUK76oonmqfKD8iww1GMY4JfidJFwffp5kzpKevtvPuU8TKiG9bocFeSeZK",
  "key21": "3H6UGVqv47BDztkg86aTKaChTntxkKyaZ9PNYeAm2MaADmLDfnRVGfH5JWq4qeFTH1FR7Cs1g9BidDXYVoR7FAzx",
  "key22": "2x781UDBGjxUnbQbU6oAMYTdKEiYhi9kcBkhV2PTRujvsZWp3SXKZe7genZ6bzLkTU2p3pu6ECkPCEbhJ1PJ6Na",
  "key23": "4ab2hfahLpeFawwVr6MLukfzhJ6ATznebxvwQLbhcNYw6WgLgirdN86C98wMatpLm8kZDdDWevp6kq1pm9ghmBKw",
  "key24": "4oyD517upYqMnHP6kmHtxqTQ5LXLxcqqGNrs5JHwZf84wGMeTwbarVCGAkWJji3sAvgSTCJ5Najze47gtSyCbZxF",
  "key25": "4bco8cseedm9WYR9hDUyxKec9SSdH2GVm4HtN4bvnWyoGPg8wGiL37Y3obhSU9P1FQHtJLmuSxpaWKz2TZfKLgrs",
  "key26": "iHDKBPaGW5zPnEuj7GZ9y9UFFUeKH1kzFcS9qLe4soTdJQuttSSXY82qHgw5iBiKWim3uUQsP7ujSn2Ws1F7D1Y",
  "key27": "3zFKXxY1ePdeV6ZMsbgJp9hgBFwL1zq9m9guHiHGaDv4mh5BbYs94vh8mjpXPLqQ2EjwYkMzPkSnreJXWGjFTDN2",
  "key28": "2esnKWHunAAu2mu1NRM8qnnGYy6vdRWUF1yLpvBhduCX45PoDknb7EgXCFFqwEnEWRvFiwHJmyaMXQC25C5jYmMe",
  "key29": "Njnf93kzYprKSGdCFpsdMnrpQGV1rV54QE7q7MxC5Je9seHQSD5xWak3PJmp4gHWdKQ5fDZyWoB19ELfg5248Jq",
  "key30": "2xpe6wV5M6UF18kGfzwdn4V7jhErsGRqaeBstTUfXo53knzwBie1GGvs3GwzqGGu3J8yYzCELwvppZ4UERf4542D",
  "key31": "5z73xovvVShW8AoXyAxiVRiZqM5wpEYngk7beZjL2nXninpc5G2NZkVZUmAjnH2Ag5JxauH7JMGHPq3BveXF2LrR",
  "key32": "5agfX73kvxhua1HaMN73SfrvFBfhaSmBUq2knVKUxiVi31S9RjxBkJXmUG9WCjKbqC3tVzaBz1hpQiz77566gmBe",
  "key33": "3SsiJp4VigLVS3yRpNPG5JevUfVgHKSjjLjir1zW2mj6MPo4p4gxggQ1dgSHRboVf6xzBq7iBvgQGNH2wcbND1Cr",
  "key34": "4oL4uz6hCSRnu4KCLuHxENBHWahDdXXWG2yaKgKYZnEx1cyKCwztxHqHVzhTbAwscZWZk3EpDjFRnYRfdSErVcRi",
  "key35": "3eQqXf42e2zFYbEyAUcxZPin5Y7CMv82Z5vdUNMeq2qjzvY437MZRzgkrWv1Xi7MbRqhkSoDyn4Yq4oXdFxgG5r2",
  "key36": "51gP1fhrM88iLTPgPdP3jjEMaUzriftf6uPZ7WB7NNXLMuBhCvdcCQwUst4RXZAeL2Z7nkn71PyXHZahxJUpkPxh",
  "key37": "4yf1FQisSY8xpgKxQYfErRh5i5QEg8ePAPEqx2fB2JV9gpzp2QbiMS8t2eFAhSCEskgAGZGqgwhm2c4sfq8SJbnr",
  "key38": "5oYBL4f7p183gDrfizpXn6Zc92vrnSMHh8rSDViUW2pBZW34mG9TUdMu6Jvph4ue6J27iLYnB7p8FNyjfqpLyFxj",
  "key39": "2qkdWPXn6aPodBRXd5BxdS4Q9JHEofAabgjecDDtrTD9JZGjktPyYX7242upzX6KpBjHT8PKvuVpC1BqfKdwqpvm",
  "key40": "3eTWUJcuBLiJWAbCEiwviu4KVvZszDfkYCipphkmpbfnj5YBGfQT3XivpTQJTnjmvAhVAWAJsJB51CTc8Fu4gNrr",
  "key41": "254A5UrWhtbpUNVoG9EhrxCFvrrrCEZxudYWG4tFV4k5YK3ChR8CCeLA1yYsmhGxbtyqGDCXgz1ZE65Jq7oP3PKN",
  "key42": "NBMVC1MZxJ8xrLLEZwXAfiYbrU9qAEoktrTGGh23hV9HoXyanbiwF771o1ajzn2FXFs72YHvpeGZ5yMtVV7fuwN",
  "key43": "24wkRi7jZrr4ejyCBhXydogAxmQdPPAwP8WAs6t3nce7RbPryd2quk2PnxCt2UfPH1xVVoTCVx5afp1nUcVQsvU4",
  "key44": "4LPAG5oLLC9n6Bzip4SfBaJKtLQcTHHJf8YZU7CQbgXJ74qym5QtJiu3udXW4zPzvW5Dx7DwtidiZzA5MAVPxkdX",
  "key45": "5gWdw6gxkMugvqUqAoMNVD9n9422KCfp9VEBZQaMn39JfbsEpf4iSwQDcyQRV79CkChLkCmSJj38sgY3zmevvBGz",
  "key46": "WdozgXT5evnPGAW73Wb9YjKLpj7LHYNseWYN1XGwdmjbRuSJkzT3Ttrfdss4ENFpyKcpbE2irBqXMiiEk6dKf4G",
  "key47": "4dUfwmCmvU61NLooaW3ccL4kG2kp3C2FumHBc3JzYyi6xpD2Nk6PpEcp7XUkcF2Z6ofc5WvdPs9DkKFL8m3LUdYi"
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
