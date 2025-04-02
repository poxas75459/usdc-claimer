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
    "3EaEmaL81wjxMsfmjagdTr5NPfyBXWmQ8NeCB4H8kVDA9WMLajeQ7Br1KUgmc8SzzegUSDuLnzj5ED2myGMjSGJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HWQKHepvdvcR4De9GDauhMUxG59i7A87sWxDrr1dwXfUqHDGPPVsRi5sg9VNJ6RCB3ufhWKte3TFrB4HR8tjo13",
  "key1": "2GAqrEp1zEUpUSPu8Q2WvP2G2pzAwYvd5WnMZWhhRANMKXXTnpQbUnWJV8RmSFKEESJtPwcBRAj4sMLwyaCEDipZ",
  "key2": "2jKKeVC6tEibRMboo9b9iaLkRQnsQr2pvQLJi7aGQZjxzuycszZ74FAf3AWPaWJTYkGuEtSB7Tb4LYnTnbhDbV2C",
  "key3": "4FabBdQGfTaxvD1LbRsFRKNFcVPSXff8Hrr6jxjQPCNah5v3PasUSTVwQWPSx9WzwXeW7QtvDNFSsNHyKdKnncWZ",
  "key4": "5f5qhi9ostpZy25TbddE9a4V6N1bdpcVodzDxYUXcG6nT2qi83jwJ2UWHSAK9dNE2oKqyJS5QoSMa1HMabkcfJ2R",
  "key5": "3LWY5SWQvcmRVt21XA6wNq5YBoWEEoYiKWcf7ac8o4jZhrRpKkqLzdgPkEo3WUpN6ZnSxhszUNMwccaS5idfT4am",
  "key6": "4DXd1T831yHGwKpD4vUko87cgypLpsJ6isopfvtEQLHAXzocZEPdTEJy8ub78Am9gvnHynosQTEFDbrH1ucCwrF3",
  "key7": "4oxDQfyhZ1D5drWpRtJLYaz8BH8bGAtYRwgxT6hCuPPNkfcbW6EejjLmFwTsmJspUt7g7us2Ey5JYPjeyLrBaECj",
  "key8": "9RX8uwKyxJUEks3CJMkMjX7rMPt2cHg9qXyzDhkdQyzDUNTqRadFs7BZqszY4HVYbRvrREqv66sTFRQRBZfyQQ7",
  "key9": "3oriRhH1EFdNKs6bJvBwpMSYqM14kpDH2hmcNzA8GKTvv8oWebFKVvxj1wyxX7vyZKsqCoz3HNS47M7k7HUChNKv",
  "key10": "S26T9GsABdyqH4W7LNc25wS7E9sEn4gB1uioTzQmnc4kfdxsuVSQtjCHjiUWL3nXc4sLBnuHWbjEjv2n2WvTzXf",
  "key11": "4ezwXAUZbAZPNfuRHTP6Sv1eUN7CaorQvoZB4WErKGv5v4VqhZy9THDjdgZ3n6i84UrXRw53oe87NG63hW4XBGGA",
  "key12": "3bfvfcD5tR2EsrxCUXmbXNmMx9C5mtEi7r3P1ojAUVKwAixd2aj6qMkRBrHPvBfbvRtm3U9ECR6VJgdT7tCRc7d",
  "key13": "5NAS8wMaTmUncg8ssryui7Skj1uyXbvAp8epCGYBLaFTE4m54jzP3AiKXU2fSo9Z4eHSz9eNzjtoqNABrwd3GxQU",
  "key14": "61MqLPmYkbqunBYsLv7wzXGJnyrbacm8Y1qKSK8VDqt58acNDyLvAC5SiXkGFGhLaEWYkDWt1D8cJ5NxvBt8aJ2j",
  "key15": "4TeH2S5tHaMcjP9X8LdStjZtpGKCfGTyQZiuqt5keZxx2RbWB5AFBiQMwWzpb6BWVwvPiyjJrFLDmMKuCB4L6vRV",
  "key16": "5CHdbcMdUHG4tP47kPvq6d6cmn2yVxWj36gYceKjcYS3fg3xHrRp9z7eszRYT65WfMw9kFS3D1TF5nVqup9MrNLf",
  "key17": "2VCzD72TyEVW8tCJWFLopjGUjMHJNgfrXzshrZYz6xYkXPZavnmKZngYAQw2HrXqV5vcAagKowQWsEivHaoRLHsy",
  "key18": "561DSLqSo6MwrrrnGACesrk4tQfypK76k7B9VtoM3kMuktKxdp2QmYQSJwcxJzG52cS9igHBVgYHJ141uVbeZQ6B",
  "key19": "4zSW1R1zfeZxgbNCJnjiW4wSnhjaNW4iN7KWBRyX3kJNaKtT1rJVNogzDAtsBVV9xkwdnqR8sqzyu434zUD7pgt5",
  "key20": "2MdXjw1yEhDUyv2rygPy2BwavubJbeV971sWbHcutJ3miKJY98PKadAfuR3VsuyFnJ72Z7Hn8bnawrrUfNnJE12U",
  "key21": "658fLPqJKRDxdbkKrxQoHv5RQzz2AQwQnJ2RnZzhxiyik9syVLPpZr83g16nJ79gDfJBFgKNpsG4Qq6yeMz6gN7r",
  "key22": "3RUV7pgZ3RCDvJGnfV3QQ9vLB4xKGGhWizkiue52J2Cn6waQPDCgag3EXvCzj11p7Guog1PDNFpT7866vYbXMZNt",
  "key23": "5XntQtx4swVfGujuFRzUQdru2iVf4oszimuHQvFkgSMiZRw6Q8QxftYXAvzFUUG8RXiSAJyRM9boaTce7DL6Nn9E",
  "key24": "EWNsbweQbKWqKFZZXvZDDJLcCjqvbHQcPnKzfHwiufwVXgCVoVUH2TW9vaHR7DuNZLdZ4iKa5s5wLNjRFogRxJV",
  "key25": "5vhYqiBr8mcMfGm769ytFwYKgSezrhPGVoC6FREMcv9r1Z9sBXvd1nDq4bkBqYfjpqi4gK6SWC7q4oNsUEwwywEc",
  "key26": "2KvahW5mqtQmqYKyus51hbkrb9sJ3iJSZDWq7FhYGZ96BSeWKj22mmZx64z6aEYpkv6Wmf1mHugSa81av18x6bnd",
  "key27": "zcPaEgaYmARUU2qKVpWn84BME1iovJan8zFsWGFwBCMXS4STwpKcyesh9Bwqzrq5SecTxS7mPqFfoxK8tQm6weE",
  "key28": "5nCUfwjkfhQVDcZbtfy6GscSDjnNBjML7Q8HUpuT7yoWsbHiqyMZewUjDjCKvGeZNnsv141EnkPFoB7ZnvVknFyM",
  "key29": "5fBDx6Tv3HCgmpcLCDiDkY77MxKjSnUyFWqwzhhNi6wLjNeHdxbooeV7Vf6HLDXTdVbLCns15UhJCceXX3eusSvS",
  "key30": "zikwQeT582YFGDqosdiQ8ByCU6pXEnntR1Latzxdn3Yd7ryswXvAMcqbXtsK2vArHmoKFcx9Bogmnyvp7ktaDMF",
  "key31": "5vUP5FYqp7vhPbdjiumKZ7qYje4NMxCe9hbqTnVr499fSLWyNaRbHPbpKyELKXQ8ZXZnMd4fsN5xGR1VEoaPd4cp",
  "key32": "AsqBetPCq9WEPW6n7jZvmMTHPQWjzzsVpnHCXTDeYHcGW3gGvUuDsXFWdBuxjFgPK1ivP1nGxZYoVUrozPxiQh2",
  "key33": "LKYZ4Rgx6NnAT7oq5hNwEup2Fhc6YM5Ms7kLdSeGfSJ217Bt6hsoS4tZHiBAUSd8ttnotuDtEo5ZEC9Kei85q7n",
  "key34": "5A6bgKUpUt3hDSWZeVe24nUfcCVyB9tS2QZiPMPft5U7pW9kgH299wcPE1Z62wNeqqnriTLjZjJL5bn5hb44P8PC",
  "key35": "59QPwyCx3HegupsowsukMrsq7YPuAjeHcR1jU9wRD7g4RWCk24eyd3STwEspmoLpPu2oMcsbFyWibL5sj3bmivZv",
  "key36": "3bagc3xxPVrmv69WsuD3MuqjjtRosHUL8smZXcxiCG9skJqkrdGNRV7aF49GMAnGy3GbmwEX3T2URn9vi19vjf1a",
  "key37": "2ufgAW89Re5sJZDjwLRRsdtYKth4NNS6KAoegEW6z1XZAKbvmrpAsarfuDxMeypXrC5TV7MXcrsvPhcmrHCZd4ev",
  "key38": "2kJ9zAkhT3hbMKCLdXhsHjkmyvfJzULmQoRHyYVDhMG78Y3jf3r7L2qwrNASNR4736VSV9MWRwC2xaiFYgtv6Wen",
  "key39": "5UAprC7aACUY7z8PmNVvTBxNd1XWDxZ6uLRExX1PXTAy39LQKRyuHYHpQZDwsj2uH4aMFrv6q4VXnmGJog7y6scg",
  "key40": "bxEAqc3W2eHZzdtPHDMnGnF2WuNj1vkEw1fZ3XozwXQ8ahXY6tHvPvE7muhy1HeW1ZXF3oTrViiRpLpibmk3P4P",
  "key41": "2jkEj8B5sD9MZDwS5pHC5EoXKoqiQdymBEk5tcHSY1tSP8EnzK4JEMeCHhkxXMXwyadEAmfFocmszg7MXSaqMF2w",
  "key42": "eVZ2NuoHBDFkBY3VubZsfc6DNfaYEqk7zaCtQN2wL3FEygSqKSz17CrvyujhqB654jnAAGQaetkP2Qw1K87oiA6",
  "key43": "6548CG27i6mqb7VLvgGBxo8aVnfTFQ61SLxHatrbDouWf26hKNEpkz1sdwC8AtGsuBHdRiyqGz1BzxCPgot3YGzJ",
  "key44": "2jKp1zTuUr5kqfkRb7thHfCBQoF8r3y4YrvojcFrtUMGCckZyCk3RzHZRXnJKtjiNh5n5ahxs6fG1EoEuwQ1MG3L",
  "key45": "Z7iKWXjTfPU4K8hmeXxA5pzPLYAmqGjq8Ei7yy2veepwZiq7Lf8epLoUeBkiXEJ8ciKv3HkoA8BZGMwbxYcFZWP",
  "key46": "3YcCwwr3q4jdd73DoL8aV7h13XnEEK5pL6fa1dajCP6bz5hgGXAJmoZ5P5mDmCbiAgEkFwypxeswCikQ1gUb3ypq",
  "key47": "5Nmgtxvsha7W6mUEmeA3UAnacprkq3PLYL1xLJiMva6tjR4PtzAFkob542HED1sLCpv4hxm8ZQAiJvqp4fyBhjM3",
  "key48": "4xgBcB2DguU1EKtobdJuSkRUZEvqvdD7G5csjHqSUNDQ9oxCYf7dYqRAUg236opCM9a8fZDMdFfsYRDyXaGBTN7R",
  "key49": "5HB5itX7Dszd7AVTdRp8XjbfyFybc9Xb6wa1XhQnbh4kMtfm9H9gCumZ6ZV9vA98JsDJFf11ZxqUjMxUD1MuY5jr"
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
