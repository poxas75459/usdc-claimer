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
    "5dPyhLY87oUEe9YYriFyN6aEQZiYBCGFw23dWmjQ9UAe4SVvPW2LFaz14HbmoBsnsrN6X45goZpqtz3okwecD81y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HhaRyZPrqkzZUa7girY3cDdimHwZSEqK1Tnfrre3Z1MD6WFgBLVMCa8G2gtF1LDJx3EFSVnUk2WJdJ1oqQirqW3",
  "key1": "3CpbkZjrKv4kiBckXF1xtFgwJp3Gbb3AQBioP9Bd5QXthX5pxuTaz2AfRE3GbxBzg8GaYxJqqjpvUpvQePBchoTA",
  "key2": "2PtwvQn4QSQ7Z9v5QsqbDafLsHbxy559SGp6WuBNzzhALRT8bC8wEKZKcUcjfLGhtDwz7CU2CsEmYmjQhUenAFqG",
  "key3": "4tCbx7bK8udjvaFoTDh4cuEyKK8KK14w8SxqYuK2KxPJLdYgE2SFXbdnYghz5VGd7WcLKXqW6wUQhhiTYKY2eEwm",
  "key4": "goGWVUJZzNWrCzDFoXrac8CMfeBzXMxXRwCPSoj7FjoN9dKF17CUt6KH3utVnkDyCy691Ykm6aq8hAHmjgdFzFL",
  "key5": "3uiyKMwNENivGM9unQn4AzQQb3cqHJnukNbEFfNdWnu8TTvduuCQim1owEg7u6Rg8kik1DYkjUgXxNAfKtskxrvo",
  "key6": "gvbDiPjC7bg8CueNJkqtWSyCMWL7aLVNmyn9cW9g48JnYXfEURcmRHLGDrpMDE5cdVdq1H9qkyksK2f6YKyH9iM",
  "key7": "2aGZ8M5XGW7u9Tw1GC7SSsBAXdq3wiGSrVymWCLGXFx4s9HkjuVu7kUq4mLEWAzdXzXrB4phimZ3HiC5dTsg2boy",
  "key8": "3WsagnsM4xAbb7tYyhMHfnNvZy5iEkSNM29VEE2pCRCwEWMNtDEG5wiaxvRtt7nd57m5BMxiceok3hEQyPM1KDRT",
  "key9": "5vPvJBMRkmZufE7diR9P7i6uj5WLuj7GfFnaKwCbr4qj9dafygPhHYYngcpHwWYSkqr2Em58PkRc13REskdxuSrz",
  "key10": "58AV6hDrjDMj7JZV3E9oaC1LhYH6igYMXqjNWgwEJt9kP9VVExdSiyXXaS8gR3EzVYGASRE4Mx7tTXneqDkBuXx1",
  "key11": "24YhfMsLDHkNCfbKoZdK4nF5Z2MDcg3WgfjmeSfT9oYZk7u2g447P4kjQN1Pc2oXE5Fx8cTpSMxgB5qsxipZjb1m",
  "key12": "3FgqoZujjUHGR3TrUxd8mrzUfyVjFvRzipMek8khJieNyeVM8iUGRnH1z4Lr2bzRbUGHx6uGXRa68SwVH4qmx1D2",
  "key13": "62yUacgLRKvcR3iyhga6EWgkpv8FeXVGTvsgbPrxJV28wy8i1SANbXLN8zT2wG6hhmqZUUthAdhkymHtTYnaYjJX",
  "key14": "K2FYEXZatZhK3WTqurudeTrANcR6GxDc6SF52QzKNFuGoVgZz2RUfmH5odqYwsxF6F6sS8hyzxsEBUCC1DBujfS",
  "key15": "uXbTJtJGqovBwnaDzPXjw9iDnQ3bkUQfDSFTADGzmFXGjEJ7UiCB7KqcWiddxzwnyiYKtMwRgxvALVbZC8rfbgU",
  "key16": "5kFyULHUVf5mJt1NzLDWWZrTiRz3SSnBEsTGsLaLcg1nuAsZgvUGJGdYWnDt9Mpo8dwu4CeHSUN9yLRGxCjdzNnZ",
  "key17": "214zYUATNjJZcW2t3AXVM9nwdVVHmdGArofSQVFcCMyTnEYDyWKeY6Pi5KANZzmS1tm8et5sTVVxrNrLg21J1oPX",
  "key18": "21vXYLGLrogwFrWoLGKxXSGGRUhMqNgRPiv8qXc4ighShgXmpERFwFrZp5EEeqVYAHDzhZqKpy9g7mtSovegmZ81",
  "key19": "4CcRUhmQtLWYubXQxtt7GyZNj15rkbAgVyeMt87GYgU2EEHXbdFtqm6TcoiT1WwEHGrtruT1ZYe5Wou6Y2JtVM3P",
  "key20": "4SqztAjvRVQJGVKJBefmd6UN4KK6PTTiJxhdgNu1tfU29FGo7bMVrURg3rfWHCGfKZmGrPTnZsWJ8sBPN1GzBc4h",
  "key21": "Ac5Q2KfgiTvditC9jW4MPQxdRRpvAnzCXAWY4WxC8p6DoAYdFApNnYb55JvZRVmCMLvjAxQkpyvY3sz8ZttACux",
  "key22": "YmfxVbbQD3LLz5LgHGUXqqs8x3UYQzUgo32c5vNhn2NdZJU9dFobVFT5pSgDXHtARF2QL4Txj8fJf6p6WNwECZf",
  "key23": "38QP4otrZBdBPPSsnp6p3puwi2ryWJCiwGD8XWHTxTUxSH85UiPHD64diMv2NoHLGht44khiXUQErULzkV2VNUpU",
  "key24": "5n5HLBuzRBzrwjngrKtWCrZ2xgoSGi2cSRkyruQWUhijq4RS3AWrRRhfze9w1jPyCUhkQ7VtW182hdk9LSEtzPjH",
  "key25": "61w9WiGaeUxMPTGBVSEShf7TSoHsHMF8agcmc5GuH6D1eBbugrYKMdBGdHpU1UthvHNt27UV3RmsayuT7k1u9e4b",
  "key26": "5Ym2vJe3mmmE1FWTPrfW546Gs9Qm4wbFJqdE8hgSWuRxxUqMBdZUZnLbN6WS2oqRTgkRPmoY7wPwH9onxCxtmDiz",
  "key27": "kk4Lf4HaGMQJxaeMUzETYKHvEGWCo3mLa4kyNMnEkTkMHdB4n4cYncc7fFXuWt3H2ZN6DGHS5V6Efj8japbewTZ",
  "key28": "2AnzvtdT9s5jSqEzEWK2gpHiyqTCrRxSrMqF4GZ5AvCeTaDnQ8Wzmywuy1mMmDz2kkXqbj5pp6mf2mFbHMkuaNdr",
  "key29": "526pNWwY3QS4bLsJYwknfycm6S6tsHg3VK3yB79w18BejKsFpsLAi1c7q8DD8jdjVjDT5Y83jX7FM2JJvUVTAaBX",
  "key30": "gEe19cj84WgFzFGDQVqUDUbCSWvSBACRMMk41b6KVJ8KeTuAHnyM8v6LsQQLvucuvW2BHJawehfc2SvC8jJ3YNk",
  "key31": "2Hja8vLZWkuULHM9PwxTH72J5NEi7AWCmphCBuDq4sa3zwUvK3PAmADLQqSwcUTKk3Q8kWb8VPwc5fQyP33CcPti",
  "key32": "2tQiccBKvtqiPVqKJ4ATqQMEeKkKyWNMCTtT61PNfJJN1DTKBBJmqFAGtM6Yw9tdUiXxpmRvpAnpJ7JWKpdFj5ru",
  "key33": "5V45sqA5MAWTu8MWitsG6VpMx7bU74639bKNe72iGgoMMWmwtDGnZvJvQfW6shVoPtRY4VM4uN2RLsYrJU2pAUzR",
  "key34": "4JbPXwXjdc4Y3XdRzRG5Jijmcf1bYdjx4G1Z2qSrixBWGC5C5mkb4akH7GSv1fhLkCG37FbW2fB9XWXLUZYvv6TV",
  "key35": "4YRuuqWNU53vmzHLdXXi8hqux2RXbyfbspJXPSGTXuh1G3vVHdqvrQa7Q2UHwZaeyfYs7T87vhY1kMGtvaNdWL2E",
  "key36": "zZ4PDaBGb2ZgNP3zw2B61EyfLH2TT2RtvDDBPJjcSAapi5fyqeQ5xQiVQGLirRfJ9hdgwqMrqE52he7ju4wy7Qe",
  "key37": "3RQEhS5igM7VQJAWEKHmJNoh45UyxPPGVk55dxdzMjomgcneZU1biFr58EEMeW9UXrEwJJQeea2oK3TkHhncxgGg",
  "key38": "3P8fhPnpJED79rRuc68kANG1STho2bcY1Kg8SNdYzyMXbH4Vq2wozDMPceZgoHH6DssuHVDPHhwMVf8GvTHNGFop",
  "key39": "31YCzjuJyVJQsXYCh4iruEU22juU6CX8X3rfEaL16E6EuiWY6GFpXeKq5x94NWxM1k44Nq2nMS29GyvGGDsYoXF8",
  "key40": "2jH3ZnhqPbLA3Ys6Kadck2ZGfY9iC8SASvthxGTjhwXJj2wpF9Zejtv4mmzdPvay4T8ro2wA8qG4CGuuHcbyhJhA",
  "key41": "216CNvxw5Uj8TAf5giVd7K3sa7yi88fUnkvw3HnFbhLjzeNT8wnegV1umRHkWcwFAWLADQiL9quaqdNF7MNMToXy",
  "key42": "4KntzmmzcqHkYqhLttY1otd4kvEdSvkckVH74M5Cg7g9k6EJqEeG41oNmq7jcRddrHd7Y8FciCfNwmWySpuGF2hE",
  "key43": "3fkJ15wuPM5Sg1FLkLf1gmS43CAp4pFcYy9uzPK7xT6EVY8kg22PaDcMsyLGbFBGHxWQphv19iMJpq83ykG9HcnB"
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
