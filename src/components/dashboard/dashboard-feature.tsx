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
    "4NS8M7AKrM1ZJpdDtsVJ3QNifUeSZCBj7hkps2YWGhQibpFhwwWmrPiY49WDGqx3tw79ASnJgGVB6uH5RxkqCf7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iUsU25svvbydcJzL71beAVCUpJZHKwVk9gXD8uBot2nvyeQfR3k1Muhu3QU5rHt5RFS2ARwMkeTr3YYSdER1Tpk",
  "key1": "4S7BCddsLzQ6ojypHfxkjeXH6C8aQPvbtUsrFLe7xLucsw9ATEFg9bdzxuJqnW371CtJVottA2xM4tmyALn7z7zb",
  "key2": "4XRajhbCZda56d2b9bCK9WfkkN7i14sFUMYZZbFXamUqdiYgqbWZNxQHCLANUYZ4X6GvFcD8dJGxXeUr6WT1eRLy",
  "key3": "41XKinsmqdBxE5JuHUuh2YX93b6R2HFj3E3rY2Be8RnXJH3jgSFXqzcGRardTuaq9wNufoJvNkKseYUtJbSKajMx",
  "key4": "5htQZ7doimSwhAMtbcYqCgVqnGjuY5ob9j2tTexR94b383DiHCHCpNEGg34cjFhySQrw8LHA9Y4esPmXGoa93xtv",
  "key5": "5A7qSCpzUcEBFJr8d2jfYjoDyNksQfFXPhexyp3e7d1bVYLVGLgnikKfxM599PBVN52krkzdYrSnxcFULTTWBfze",
  "key6": "2bkWjYGUF3mChiJUCR3Me5anpE4GmqQwLKxy8i9AUCAUtDRxk9fqWNbWhBrrnMnb3uVEAdHKYVZSrfqrSxzd4nVs",
  "key7": "3wVihMaVraY7LcihtRWGvSnMrFZCFVipLujerJVm9wcicyEYCxzzrY1RnCMaWTVdUgGipz2Co2ES5ABsoNR1LjNp",
  "key8": "2jfj7ffD692CJmEW24mJRYjY85M8JvHFxpCPBTbqvy3DBZhrYLL6cMTugTxR4LSrGY171bfVrWrvNSXULsSz4BQp",
  "key9": "44NfAmPR5ZpdoEWXbMHUaRKyhEwe1fN3FeEQBa67xWKkcKkFV6RFLG2zrKztutpKMsMyJnS1ouWt3JscCp8bbo6E",
  "key10": "5Fu34TMS56jwSyDv7oRwfC6e6kHyiAnpi5sPs8oyRsMWrwWwevgZjnbGCWMn4bQucAKMfGWps6Eu1g4zuHYLeNu4",
  "key11": "62xKYzgtAprxBq8PVNmjhDeZGXydv4AfS1WHPtoNtmVjV4tocifXvLHFYVPphAH6y7AWY5oWN8WC18j73yZP7pZV",
  "key12": "qkcNFVYz2FRje1uoAS57QNdB7vR5hFtMTFboeXBmfJkxgtySfgARVz2zzhqWBpYFh1dZnsFkLHGB5hwK6YXygQh",
  "key13": "3129csjigHvwuaRtWKaGmQYQdAPhaMEM6AErkB92cSySTQYp6dko2S2sTa2MJMUqKBQLjVBVYPZqezJ9jF6Xnc2f",
  "key14": "4yXbvNVtdcT4NVSYFMrNPziAZg8U7pp1Nv92YEGtsPQ7x5aAw8wLcngBYmTTSZsqSBpBA9MHQrWqRjLD9oXUon3Z",
  "key15": "5NEpdJSe2hmsgt71LkASBJ6Cx7nS7ivHhwaDnALJfDQcRHNSoikkLNPvGSoRrkxQEo7hVoDoRm3eK9g3EiaLLeR4",
  "key16": "4BMPPhT3qaefycirvy4tAx342viBRsLM4ULv1vNNHantSx8zBWCgyD2kUvVrMYCaMuWcPDEUdGs6vV2BHcnk62aU",
  "key17": "5E7N5gNs7JejqjK7QZjiNpXkAGTSdA4djvdnyKGjB3iiyRESp3AaqVnjwiULfMfAJUzHCmxbDZtuwARBU1kQJMSW",
  "key18": "3NgjBgokEJPThuA1BuHx189Vh4MTRaGU1eabzgCDtsz9oac6bi7Ftny22zyqk1Jth44beQVwQcCL1AyxrRzHKNwR",
  "key19": "25h2KXmSYknVjaffy8HVvruUPXaExBXe7hRU72ENzv4HdV7aGm8AxT4sH2ukSjLPzRpSJkoVMZehNdmazBQE7j4X",
  "key20": "moDrXTvRTqe2HWpfhbizmSFC6ZZZUf2vHHw6zW56kzDvPTew9JvXxbbDH45GkLoZoBCdhuBMrexReBdbc8BU1K5",
  "key21": "FvHUDLsGPNcVkmTqU2mB8i2PY7wp8rF7CqsdNx9boPzWoPqGWzpVCaqrQ1NfExERNyQ7pUj4o6nUSe671sd2xne",
  "key22": "5iM6oto28Zoe91wKqrm11oXQNSA18nZYUdF7xNT8d5Yn6x2szGD2bxJ7W6Dy9TT2vYcurhJa8xiHSvSStW9i6Xaa",
  "key23": "2bCJneHgZ5Rhpq5wG2FZLnKHfmvWYFZHNypSG7MoHeqj8cdKtQBJxJnktoxkPh3n85VEsAC5PkRbib89girfiVDb",
  "key24": "4uozxEiqRZSLnJxvRKKmvRu7s8vt5Bzv856fWK3hw3bamvG3Q72misCXMxnXXub4aP8WBxXND3cZDMSZUrSg9Mtv",
  "key25": "62e77YbVtLScdb2YgjgCfivVHHfG2yHGx4HY1kJEuyQKg4HZEN4Ey4x4UcDqFgEKUk59kVdgpocxYKdHJKHBwLfK",
  "key26": "2LjpScEGyNMkG6gvPA36HcTrN3Dcf5Qh5UGoShzEkKa47GtHyn1PGSo9ZNWN4QUiQnAv9mHL5JAqCSfKEc5qD6gn",
  "key27": "5jQHBJsnaW3GfJddKpUYf9v34cBUSH6DSR9eQohU9XNRyXkHS5VYnuQ8JPLdY7bWhMUjftuZRSehn5tWQzDuCsFF",
  "key28": "5enZvDmmwZd4bBXksTDbyFQGTXbYA8YHRbMY6xV6QZooQZZxjZoP5KY7pFpBBNYY4AfroUPr4sH4FcQLQmxL2gC4",
  "key29": "4KoPvL4djq2zMCdszTP9PvtJj9umreY3vNoqA3MtX4KfGdKphnL8tDHN65LCkyDzVehCw5eEdosJGZUw1dPjNcfe",
  "key30": "3MBgbPQaFEGH1xJR89gY1jzPmWR9LTztZtJj5W1KNmSjTmWazcaC2xPnDKv48uJ9X5cbvgxk3FpdC57Zwtuze4SA",
  "key31": "sUEtqFjmpkGqmvo6ZuZgjD23SvecP5eyqMdzZ2tpMvc6Yo8sc4NWf6SoM42VqBdMKxhBQTUEEbvy4Z2Gu5JS8QM",
  "key32": "3XdzdhRe8a7qSEGPphnf3jPk19jGffkYX7KvkHSGvtYagWNf3h2X5UKoBSjnvUnNM3JkBXaqoeM3a8HwEorboHUr",
  "key33": "3zCK8UMDdDLnhB68CXDP9NrbG9QWnPkpwdTx87L3yZq3BdwAybAxmVtiz28gTqbSwMyCQEPJBRzGSHpAmsAr173T",
  "key34": "35w2eMmKJHTSz1D59KjpVWQBtL3w8YeJJ78VYQmDQZabfqbQCUD46p5YujVBiRZiWNdFAhnsDvW886xhFGND5gdH",
  "key35": "48n3zT3QVXQWCDb7E5dfrncngKuBKJnyutp9X8qGjChBQ97cmzNxqnGZEMAfKJokpi3xYpqjkWrpMuWmnRpmT1PV",
  "key36": "3N8aMJA5CxfsVSe1r9FbCYYyWvFaUUmAXJiwWC5UNs9mxLTkQvaWH2MZZ33Q4uUVvntPux68kooMA25Ruh774wgw",
  "key37": "2PNjF6gFeKQ2AS2R4sxFhwhnkVReVfxt4EvpXY7PwqJg1JWba4e2xXmfNPNUZdH2Ttu7i6QQHeCnmYpjwpCEtHU9",
  "key38": "5EfjiknLNvZce1NAzuVpCULnguEsV1mJAQGGwNsE6vLUuwQea1G2LzdodCTBHHK5YiuAvMaexQVeQxJic17sNgLu",
  "key39": "2YcAxZCsey45wiZm47H9cRNrY11VzRKtMHJ8czEmhLLGpMEkt7qEDgCJC4yqa3kWX4pg8ovUWsHA1482HPjPsmBr"
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
