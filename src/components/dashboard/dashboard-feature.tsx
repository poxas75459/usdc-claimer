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
    "55seJSHZ5cy8YX222RAwn2UGKbNkcqFwocuDWCuTMxmmmYcMx1pAHnyPxHhcskeMEw1LCwnJVa6sDCSQwvVyX3Fi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FJKKsXsJFMMNEbv49hFspUHNkfvT2KX4EvbvR9V7Fn1neoiCyCdvQZBPBKzJ1EMr3rQAkENw6oUahUNpR41DM1i",
  "key1": "4ea52XHndU8YCwdMY5q3kZXxT7DMkJPphqLdFPk3xL2LHTr1WnfE6pSeJLCVQoGDzJhXLW9AkDDakXLyAB7Nkeub",
  "key2": "5ZYx9P7vnh5pJ2NBspyVn5fc4Rdn4oPHSyGngd5Q8f95MzGAJrqQ9pK74nti9SF4zDrS7mSfKEvNdwhvg1jmEfJu",
  "key3": "jtHgLAKDQf7KhuEdvcv1Ubvt1JkbPujq2d9uTvSzWpMej9CmawhaEQQ9DnG5XbiPvTr8Nw62i7UVLUL4zLeem9X",
  "key4": "9jBzLkwDUvodEpaXbAEwvx2pozYzqG5PjYkNFqrZQAakaZxF5ZCc1V46V2ya6b6E4YAaZNrWPhAPgenRKAEp8Gj",
  "key5": "5iYMSwMXB2CRXi4uBxdxE8njKP2ou43x5PStN6kmCyQguiFy3LSoXYzCERH3xsHeXGw928HKAmkhXpGuby5Tdhmz",
  "key6": "62LPCRtqftpaTgssp7KXdAEpeZ7Wc1UAt6fETe2W6er6GTgM84vs2hjhoVb52UKAkgGCTSBiy61kFsVkUVqLtdCe",
  "key7": "4N7f54WwXZEquVbFnAtFtJe1Xd6MN72eRfmQLXRGtcMaUNfbtRs9dK4xW9vGr6kp9PBCFtki5TrdpzzJAo52ubUA",
  "key8": "4RNfH49CJtVzsxZ9Qv8TkYaykxJTiWyk7aitR1FLSEhKf9c78jbSvwfRHpAavLrmWYg8ULWRUEmeLY8A6rnUQ7QB",
  "key9": "45zzrMzJPmdaaDwpgCZUf35BG94NupZC3QTVeea8wcAeAdgjyVAmz2wwxQZyUGgcnfLvbiWmPZEqYoQDTcDRRLWU",
  "key10": "416ZEEmfijj2HrBewxD34RvQ9YYpF14wnqZWWk6derJyNfMw4Z2Tu5TZrGKXvrL23GXXQWmUDjS6r2Pi7GGmkBxL",
  "key11": "4oBnL8zL6boWrwZDRZukrcAU1pNaZCGUcLPxaJwoTGkJVSiTq9H6oJVDBiaDSNWbG7MD11iNx7qHUjFokv36qkAK",
  "key12": "5p7WscY5U6i9wYVnaBM1sgTwj7ou5GHArQtakfxgR93P9gLWW1dXSiLwrntAWYwj5CWEvdJQmQvkDNXYpgiaLmm3",
  "key13": "3f9gv9kSsGLW9mhpMEvzzHb1ybHtiYe3jvpsECC6jqrtRr7D1sHvp6JkSYJggvsWY3x2tmQ8adcWDwvQGeVWzrmh",
  "key14": "fNJksuHJG6ifgDgczn7LcBi29aLJJNvE2P4XDkvvNEGiwHCw41HeY65aB2bBsFHc7AvZbbicKUUAk9joq2irfLx",
  "key15": "Bn8k7urbanwYc4Ttahj9fvh6Ans3BKLMt5zUWTewyUqFjCyYWnfd1oUdXXA4AGAQFV4DGprg8mjqEoGWoF2Z62X",
  "key16": "2Dy6poXHgGp3AqsmjGSgPgShEbc24JqhueLjMzDS6FcQfynGrAMcieLiHoCYWvVhCPiZBDFYWwsmEwpytz6d95dW",
  "key17": "46j6LXxWshkYd1jrozrgEDJYjzTBeN2C3j2WGYqAZ9hUvy7NtDMHFfJxhcM4kcp9LjLUXZ5hSCQ1gqVbL5i4MdPz",
  "key18": "3sKBPnudNMJWZkiYZ49tQ4R5c66vZdR4VpvcdhUvPMJ59v51umBP11uWz4nLcaBc7apBa9Pzhm5met3WrGrXW5M6",
  "key19": "2LRxPY6fW4SinttSudE5Dwtd2oh6rpfUpW29TDxGqKaUpVofBPqXAQJyZtoTS5FjGVi1NNjP2wzPbo8ffTtokMER",
  "key20": "4DyJcCfuatjXdKgHfznE4G4ikqoQU4Jvf1qJDK8pur8R17zYqQwEhEqBMBQBV5nxEWRs9uXMnjjVi4NxJwX25hGt",
  "key21": "w6eX33MLXtmUHYN7doHKs1Rhoz4yuMLhX1JNyzJybMLV9KnPoc6cfo6DExgqRbYuvbtHzyYPo5CoBAxNou6DBk9",
  "key22": "RwtqmJNkk5brRTeapdTaCrBeRzVchfrL5w4ZVCGKZSmyGMX8Lpk5h5W2Z9Y4JLo6UffEjhHhebZwtRef2m5v9x2",
  "key23": "4DEaupYXtjbmWVpUqfbjxJ3BikUu7ST9sGEY5rNA7VCMdGiUYRtRvrHDYcaPrhn44XUvukdwCjyVnefqydwLF3Ej",
  "key24": "45JumLNvFGhMeQqrQ8QF9gbsk8NsNALR9AAm6WXdB4tAESbCcRMe9uitzfRK5b5jwbjtobtd4utbpiinT6kBj5b7",
  "key25": "2uktVPkJaEqoyUsMRW6oJU7WC9Rgvw8bZ5b48Bj55JKUiZDaPMP73UiBCidM5GQaWJNessTrnBmFF9BL9dWCU1nx",
  "key26": "47o7XHvxwZyZ8aFcdLSxopDn7PsAiKC8ZJxFWBdgysoC22HzuygXKyuCHkuG7CUD19P1Bf33GK4HLM5kwotNJjYw",
  "key27": "44yfhe98PPR84uZhDeXxPcCnxLdNWz6sYYqBTgSG4pvFANnVnf7KdGKGjUoRC9BuTMSrMRcSqzYe3ECV1xHbHFoW",
  "key28": "33gwyoQfUHvSCxq8CfGi2ePMFW8WTKwwQmsY9hqQjJE3dsR81kFwLjJQVVNC5ua5oLbcMKxLcsSZWM9GcSCusvgS",
  "key29": "3gQcuW6xYXpBaH9KqJnPTbbDSH7qFd3q62LEvHjnLruofFMoS5LzJqEThozmhx2yLw4Jr5hCtK7wVfZLeYWTnfSq",
  "key30": "2HFeasPRqMtZZqEEAw14v3EtM3G9tik2RdPE7fJFATTGjb8Jmd3JJZQ966KN5qVyzcpPZ51FkwVNXbdDNzVx3vLW",
  "key31": "2LNbSWoYDUbE49LXri8T8uRYwBre3r2ZKLNjyAcxfPVDZK3WksLGEzLzrmMa3rHaw4eXLpWkw4HK3pzjmdQgNAVb",
  "key32": "5fW2uQ4s8yFqSUH1iwuWbPeut8k9Dtg2Uwbi5HKKPX7p1EKBhPzo24iP8W1b7z9ZNxYiBdQVk6HDZRzBtpd2LeAP",
  "key33": "2C117akUS7buNy9HJ7VAxu4i4h39hMe3KL7cBLPvbRaZvtnLBDXzxYUVY868EZwdY2xTiV7CmKffYSCLzMGbQFXy",
  "key34": "5nVUtKHdipfv8a3bLcVzCy3x3ogzQLxWbtprkTwa7AwW2gv85BwUcNVUSjvuBnAN311nS4N1Lgshnpsuh3dWNhgo",
  "key35": "2x717YVvYG6PAJQ98pCe9Vp7BG3uYZKd8rcjiy9nzPNB3mFyfy22QqGMHi4Q17RiZDNDPmBJzY2ekm4eqpSApC2K",
  "key36": "4Wo1rBzGAWHr1PCHhGRg9emi9fVn5AVWuh1FNjbX4bVTKQNqkQuHBxpFWQy521PNbuhoiNawnSAwFeJdeUjDiZwY",
  "key37": "4tY7zbL4e39j911KHYRRKMDwtA6Qu8qtSMqb4WrKbVggCMHw7rR7enQEF92qMYPcpGQUrQXu5xwDfGQa6Mx2mrqr",
  "key38": "4xAUt7LVQw8Pb66bfEGjbZ8rAvNvp6tFHU8wbULajuTAYuzXgr3eyNY4xmg4Mxv3eTRDiKUhVQRcRM9YfFbArk9P",
  "key39": "5mZJhnSzqzzFhFtRRxqXZDcjcN6Hhjh8eEkqDu7CtLGCUPdTibtwgfChMsHj6Kwj8w1p5YnPc3HG2i473N135YTg",
  "key40": "5bvBU9EjMVSUjgFEZgNL6GbEV1XPHNEXfJtgueepxrQNmZNQZih9DK8JTvQV9UPsk12zVV9m5HVcfivwQqQJxPBf",
  "key41": "5TaaCPL2iSNGPq6PTcnaYjfoy8dJyj6bBhp4GX5scb9Xto2EPi6jrQ7baSTcHE1QQw5Xz487ut8KxviXjeTS2oQ3",
  "key42": "2EBpYvXfuVmyHAnwdBtRJ2uHVQAsKT1P8A9vDQv7tQf88q7JsSa1VhaSCXLDciD9kRaXyQ1Mn6G1vwyNBupU6TF6"
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
