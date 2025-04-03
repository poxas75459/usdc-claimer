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
    "5uaKoVGKYt5kMuWowMFbSoTXEXCoyp6J3HFa5t6toyWGYZHMtPa9gHgymPDdhVTvYm9M6j8nYxBcik9ycAsvFcTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62FyXWiPGmNaALfYz9Br2ZZj5KFQ9LMiREKv1pweGB3EG2vmZ7HBPaErdo1KkGR7vKoRQsqowH5eTFAXcTX4kG8B",
  "key1": "3XGoiWtMPDCgWpeKaka9jMUem3uFL837FHYNkr8AGbwvShPoyU4qJyVcKdKwieJZaTMEM1tG4vRrZpMddKoYwXSW",
  "key2": "4R2NFaekEgxYtwNGXaneRJPqYxUssCrkaS5dRgUcoBbMo6wkumjUyvJaVjqj4fhb2LAAYawdWW8dvMK1xGKcss7u",
  "key3": "4xLcd9VUwNpLuyq9Zb9E3EfozQMVjizYPmyUnP3C8pgLMsrzWguMa1ZSmVR7PbCEK1sK4k2RQmb7qFbZ1K4BWHXe",
  "key4": "enipVs7eGu1khGnYNAgFdpgN2dR5JSczxB24syuCfPdr8YBdVHfakSFA8HEbvpdhqimvmtkqcxoaPjnnRiuTHhq",
  "key5": "3zAms6kG3WHeo12tLvQbQ6MQNqdZ2AdXfbEr1YAjvs29nMVd9GgFmaqZb4NJXEkUSCXvKEajfuDcNrKbVGf9N4gA",
  "key6": "2qVvKKtNmqVpGD52pkAsXkagRSHW9QwpV1JdmA1aww9xVrpzXJEKaqG3MctbksQKJngTeD2W7iNFetJYJRqoDeBs",
  "key7": "cbBvR72gAszezZSoae5gMhVQZswgCYDJ8BMs9UZU9UcCKSfNmZo61n5G5on76N7gjbM5zuCSBKhnRnv9tvSPaBv",
  "key8": "eHT7AtEtPi7hBGDnArHrdE2pa9FiwK5bDD2AE6Ztigg4xBFvBvWdBphrQAZmydnM7EJYD9tGBqmqXcmLPsvR6RR",
  "key9": "2MweQ3Swrpx1tYNeHDqfFQuzBYuJTTqumTEQdY8VjxTmGVDUJb6ME5iWu3exmx549rF82dUqZWwzKFzTNVDXuU7A",
  "key10": "8SJXvhNnZNmiLc3NhguQKdP6ZmuVdQATntGZAe6fRVQBig7hmAdRVHCv6iVKcy4bhS6QtLRC3Yh57n3WDbRHVuE",
  "key11": "4RwfseFzStR2s8H2LZcjrjX4CwNahXt2xiv5n79yfLjPZn1pKKCbu1nHJZ9JQBnyupbuyLtgZ5gNHyKka5u1zwku",
  "key12": "27JML2tt6rwiGbNQvbRxbqwsCdnyZUan75UKtLqCeoG4d1BTmhraj99vFQDNuoku1Pjy6dabBs2xCzeXpmVnRZwW",
  "key13": "62Vg25xwaCGUVMEm1v3mwKAGzFVneF64U5p7Qb859sKUP5L7WSdD1iiizPDtGTGVaE9YQH5BzNqGmkSoHdiHEDJM",
  "key14": "3KGetzS7Uo9fzXncJFEybKwKfs1htJDkmeMejJpkpMPeedNwaXyaQXJ87bPo82Ly1sPbXBC5jxNcyz6GKT9BiyKy",
  "key15": "9GqiEmEX92CZeib9WGtxeZaLkp7dNjvZFKmxXsuGC2GNHWzCDaxFs9L7xsZQrv7xvggUuHg56R7zXRWXAoMDD39",
  "key16": "52eCxgh7BZXXTE416WnFaWuX8ifG6MSyTAZ2hHZe2xcSzo5Dx5ek2zW2YbgkL8cAHVNe43NFFJWaohnT4YyHs3oX",
  "key17": "VeUh4N42DLETwq4JHMr4V72WXc1kShd65L5LCbLCMKxC9nHBMudodHvdKNYFSQxfaVggzsAtAuQexnKpd83ncR2",
  "key18": "2aPCWqkoQkQJ7hBYqUxeyWHy2YD28sogGoZeu3QPBMpX3m1Xw6tXEFy3S97mx5GFdtzjNWkZNFSoNnZguSYQg3aZ",
  "key19": "5zpoECW3kbHsxCPWkmWBMJT98W5VoS7CWEVE2B9EXSCnN7JiqZW2r7m4F1XRDMMNmY1XT9Je8e66wYYMqT2dEpGf",
  "key20": "GSMxppoUsfjMAxEkExu4Ts3FGtZWUWWXoRykt9K7HyaWnrqgAWE33PG6KamoWbSBf4bJXh55jZTLh9B8hDjvv62",
  "key21": "wv5Si6mvm3YchW2HFYtin1cYAsNGbHWXJo4nB6hkpkX4kescVsN3h7GnmMqTtJxZycMvCJAnCtcDBohLEJQgtK6",
  "key22": "51vmmAbbjAnZXngmfK41HbDqCYB34UzY8Cy5ZFoFPgRg4Hjd8FBftYUtzpRMioLDQXM3uY3tW6sGSZxQpADwERQ7",
  "key23": "2oDKozWBnT7sMvnYt2eftyF63ZtxMWyzNsbZfPo4aphHAh1jAhn945ckz7dQwVKozxcY54vCpUmC1eX7sJYRX5uX",
  "key24": "2X6xdRMS9n59cLViTpZoV9eXi6zT9PJ8bFqkmSUbkmz3jNB2FcbsphsLv2jDpTQYWgWWvqnfoBV8xGZhD4Rh8ruH",
  "key25": "4CgffuJLVw2jXqUXHpfK33tCUrLiLrN96Q5twFxox6zTnfqJs3Lwj4obvvD65dnkQiveoSS81SK2LtXBmVHE2Z4r",
  "key26": "2XJ1v1svpU8tPocGkymcvGjntYhP6HFwXfXb3sw7wMRzcURktg3a8zE4E8sFfDTY1CZqKNxM6jnCEaGNZcaKQN6r",
  "key27": "5ScgCCGPnAA3sjziKqW79n1iUWP8tfVqmVtQeVPGo2VByBKpBDxcgQuv1WwT38F8DiLBCQMURzco8h8YWDjKbD58",
  "key28": "mwNwSWfhUC3y8Sg5bQ57dJbhzKadG2oa7ARE1KDRVJX2jKW1bhxrTvPmk21r3Ev643yWwbA43E1odZ95KEz8n5w",
  "key29": "4zFvbZ8j9WoGukRqv76DdCRkAipgPK5nVAci8NCEH7nbXg6geVn6jtEfiNmUPL83n3y2YnkQxquf3zBiCngvo2Hv",
  "key30": "m7W76aJBgrHpkKNXgARsoxuTqAsuTjVdqzcpSsucSM8SxQcgsY9ipeTxnb2xnbGF9SMxShDkK76xLzjQYMXwAqo",
  "key31": "3m3oCnLzpXW2KwWqG8Jqj7EqhCSQK4gCwuYQZFCkJuBQjPqJvoRSiYxnQ87wpHeAndWas46YQZrJ57HvmJiDvDZs",
  "key32": "3zuiPvYQ8uJLWB6QrY5Hw8RFJjjup24N8WNbyG6xmHEPZrCtmHik7poJUTpFgCSWNmdJKy6DzUawvLLS8FTa3her",
  "key33": "3b6XaJjhxaqyKj2TjvNGszs8gX3Geom8K7pK7SNZMRnVkX85sZJMVC1CURExEsSk1tDDJNjGjWiAPZtCSkm5sZFT",
  "key34": "Ew6Z6WSLfceNcSC4mRYmMbG9gjBiTrsP4AQihzzEqgQY1obsUFjhXnJ3CWrCSEmhVKg6sLHXi1EW3WyM8BF3Cww",
  "key35": "KcmVJbVsgMX2TmZLU8fiLRRtahMkNaFCXB3dYYwRnf6C6v7w4CLdy2aobVNeyuNzayCbyWGPUpV6MnVsT54yAhk",
  "key36": "4Q2N2ZX1u8uE4fdocFvACXspuCQfmTyHUkoSASoiRnrrbmMucW2kjUkjHJ2xbM3qfzeDKoPCPf9qv6c54koVRhTB",
  "key37": "49wrkDsAtWZBFatcLuGEBTFZWKwL7XZywxQ7HJLfF8fcwufy9zxMFX4dJYrXKFnsco3UdcvDCEuSer9fbGUEA7Lx",
  "key38": "5KvRexNbFV7KgBtWrxXaWWh3xUA92mmTuv94Lj1bMhbk87aPNec278D4TXPcufiQjqJd4XC2iFJ2U5H994GCPEft",
  "key39": "3CbjZJ75QMcFNByvgX9PTNyMEW5J4gLbq8SHHn5usXz4oTPqPjdF4nLYDaasRbbbQZbBxXnLuDgeAUN4if22AvcM",
  "key40": "5Zv28BwsepBiPXj1KZaPt6EWCeabhNiSQ1eWuHnEEyAWmEQWnD9gSmobB8YpE2jfbCioKbVk7bahHUBW3mXcVMdU",
  "key41": "Lp3zs3RXFzRDuA6NJyfoVWGaWbLjxDXGg4oap94qxqpSxREMWVeucS132iRKvZhiwKjgg4N7YEquTjkKvufHfFR",
  "key42": "31NHHoyuk95ysUG6nmr9oKvKDeRofoKamqwPNVHv1CQxEELVabCGMtxuEiHzH76xW8GSREnd7etrjJDsp7dKd5zo",
  "key43": "3CF9jPJ1KmuZsAjJY1CEGi3wUasV7LPkwYLro5GrRg7aM77FfCGpHkVBbobnw6YTCY43bLMfinqa14Be62uPrrk9",
  "key44": "2UUjvSbJR3LG1yyA8pCtKU9Ex53b7qac3cUZq7nmBRN87bSiF8LvNMHYopknfLjobF8JQLNqP5vCJoW55ozoyr3Y",
  "key45": "2R16AiP1Btf2DCNWncD9mL2vTNybRRJHZpKpPmoCNqiFuNiuyGJDUSrEirEofNNFajCYNVeAKS5Gf1butWD2iyws",
  "key46": "2SJAdYD35c6TC8ELuBmr2WEHapUAK1GSmP8ExSugSLkimAy8HSoaMHdwYB7vcBMiJzfVQW31JeqdKY3XsM9cVcJg",
  "key47": "3c2vmK5Z8wSLGb1tjrGrYJQ9kXBFzRaZCHBXdXP4DH2RWWSu6muzcyvSVqEmSyLf69DJBHW5jkygJQgmFkYBWB8x"
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
