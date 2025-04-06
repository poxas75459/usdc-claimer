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
    "52V1G7niDNStqrX3z7DDodiDjtjt6H3pyGpk29urAL4Aoo5u4dYpYsnA9GyA8QtG2pc71dCb2QFM6uT4pTUYYkPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r28SXh8HFr4TjrNR7YUMxcLqFjWqBkf4aENH3eNiwRR6tDQenfZnyooopW5TZLuLXTGobjd9BHGwWKVndPZaZHs",
  "key1": "3XgqiCdmjMUcGn73pe6MSEDKSXR2Hr5AxVLcTaukbynJAzBYtVr5raZJDm2Zp1JjS4Qd2Wfj7BX2wXXbjwSJxEsu",
  "key2": "5H3k3CwT1gYSHRyH3AGUkdcVb2SLVB8W82qFCaTTiWJZNHsHKqRXTfeaVwiVSc16Z1KnRNN32Ub7cvEat3CctjcT",
  "key3": "3j3ViNnYPAq7BUAPwYbxJMfLH2w9wKinm3hoLNs2fvsranP5XNJ3rZAEMHyUaBwwXehPSEBxssZGrMyb51nZHGtB",
  "key4": "zzGYfs9GGJ5qLrgjqDbcrr9Qgv1uPDo2VruAZZppaq9VQnvhATmVEcBXwsfdN8VPVaQ43j4GP9G5ownMYq6bA93",
  "key5": "3AgmmF8tyZzCLhbGy33ztNxRVn8SPtyp4AyK8tLtenUeSyvkkLDUBBZxdJLVkjydtppxo8oLWyzXcHkrzD7rpQCn",
  "key6": "3uZeXrFoZXxeoyQLraVGJUVP9u4ACQAqDLEsSoChQ2afuHjNMaTrf1uZk51JBkZYAdvTSni71Nn3QcFBbmRgyCqV",
  "key7": "4Z6hDEMUCNZbi2KFUtcqYSzdgLeyhDStwb1HnMBY9DujfstQ38gzaoXHo6nHjzsNUx862ZKcvBm2NX4sVQ3eyWom",
  "key8": "4yWL6UAP4HJxFS6PwL5q5PLmmemjy5SgW2VqXAAW9opaVuwaGkxmXmJ5hbHwXoiXLtKg2BZ47nkCk9xR7j7Gbzwg",
  "key9": "yCjUQXTLAzpnQj3Hj1Wp9VEQ1zezprg4HoveWGDJEi9qgLhrZEiLFSVcDt4zggqLMoLREFWRcqB2ADbD5wcWUL5",
  "key10": "4Bip2jva5YEQ9JgBq1vkjGCiDzHqvW9Lvb2SHk3k7aqARLEniwegYo5pb44Q776FJLzCHKzhiJppgmPBdQf3PPGt",
  "key11": "4xG7KvjkzzdvzGnK3LRG9Hkx3NfcD1eJwS889AkRNMThbgf1Ms4BRq3WSXANrnfgH3g4wQmyPDDbntxtydNwBuiB",
  "key12": "2ztCWRsfki5Ga4BgeSTnmLQdvezPBsU8avJLByrrzM4y4BnWnUEKnxtMmfbQjhriFZvKRMBzupXN7QZwsBTuqxt",
  "key13": "GUc9YYWXfxHAuxVynivgEeyj5hkyyAcgmco28NASymBypU221Wot1WMC2Xps9gtnvqfic4AYj3GqmmjHX1Pteqt",
  "key14": "5U4UsPY5NPLznbPdMpB6V62PfpGPex4fCjzLg98JgXeAkgcWF2JQwSNsa9w4Rdxf5vTxXVwrQooNaCvi4Kw6YUe9",
  "key15": "5W5FDmj5pCwqXaQyRBM3xhsCut96CgVx7Tj4MXX8x9uWckj76L3XDyei7aRrMv9VB4VsCNjoJZRGLtV4H3aCkm8T",
  "key16": "4BZzJk7pkbgP8Q1UiPWXzHqmrQ5vfLgY1trms7UZ89BwuXNVUvsLxgX91GBbAaBvA5QJVqUU1qH4YpkFz6nCkekq",
  "key17": "4nis9x7axmMm6dKWnt3Db7jM9c6gji7pJD6CxLSUaANXAD4erwV3CKCpigZKr2A4P8djzFDZEzTNbbwS91ox4jZj",
  "key18": "2utch76zwn9MZuDkFJKfhCesHdVJnV5ZTskmGFgCXcaEGNTY8YBYvTji6xAzTohVqCJXSnwxNtoQfE1zmQsP7vaw",
  "key19": "61ccXP56GyHvNamcgYBfQLV7HSgAwrxLjdZBG6a5XXAASzqNTaYykNmAesR7j2dyxjFu6kxWfB2J2zjjbjSr2iCt",
  "key20": "5V2uoHLhm6u3ptREgydk47VvZBusipvEiTjfrdCfafQz6Ymw31xZpMbK8EeZjK4te4nZxpbEQjjxg8BHWCcFM72j",
  "key21": "aZBBZg7sPc962Q6egLtjTuYdBf8V8htshahmepckzDEfsDTRuCjLAhcgBerEH1oo4BGc4p1i1NVXZgKNN59PyE3",
  "key22": "5XRmrLQWhpM2VCrrguqEb8se1YoAzd6z8d2XiBb5PBhBacKskw9h4r94jACx6fSoeCES7vsALBTC8oC5TexVjPAk",
  "key23": "hCeB9wL8NVB4G6ksXYCPYzQwckmFTPew92oAWU4YLyTrTyoU4U48X2h16EqWfoWQCYz68i5v5hgyGVS8phG78VV",
  "key24": "55r5MfJB77SfhaxhxoQWFCfNHFnNC5yKA4DeMatm1sh6bMaFEqWCcwMeLiM2kgEdQGG5ahwo6KbXvBsFhUQLMjei",
  "key25": "3Uo7CcNHKhMx3zruTv2zW9PKAxCHBuQMEdJ5sUFASaDSzgBDtsR4d85nVdSKW3yeY7M9hDydst6ULyHgJu7R1DA6",
  "key26": "2Vt4ALPDHK25feHuyWYVbG5hCuLfN7NBb5pRMr71fM7kWXeGiWaGhznA9fzDdEX6cE4FPKFPP9bDQ4RPLPJaTLpc",
  "key27": "2g8xmzPNsBchFufttsFsu9AHgxkWn4nWMrY3v1JEGBanmWCiZX9KZRWPgxTjouA47oyKvJk8rwmBuFCpjsXpK9QG",
  "key28": "3o2RjhC2ExtdcWJgSh9H8egnAbfamYMSJcR2xhXCabtL6gakHuvWMZabyHxtZC62tkMXHCAoCDsRCwLGTD8FfzZJ",
  "key29": "5iptSD3o81HC74233s4yXd5PTATmM4oxGEnYTQ7nFytV68xcD5wctdDt8cHSheCCvNYhinZqFkn2VBXJo7PGb4iy",
  "key30": "5mJDMRWj3UzxEu45vsTatCcFkqwExKztDbsLvN2w89edwpFU6sjfmSTXFLV4PRvE8ek7fUCvD3nfCBMGCbThZ8cw",
  "key31": "2DRi4mV8bpcycXJUiFwx4UHTK3yJuM8G7hhdqLU7ChLtrtenGjB5irGPjHyKqFU26hDUZ2vgvW5h9Zu1sfTbKyS1",
  "key32": "2cgDnKkhxkvPW8HzNUrFkD4BGk16TqFFmPkBCPqvR5FHAMnrUVC17CL76LhCmzLaC1bEsBKj42JcjU6wZs1Gnjd3",
  "key33": "5duX8hMh3dMHBqJxmwsKd7LdBB39en6ZagEZRgoN3aWiyZ9qQ9FTVk8aBFHF4w9k9AJv424p1rcSTaJ8A18DBqUf",
  "key34": "3R2evMwJDgVt3KJZfbm7zZn8dVAi93hUA2GLnrto2uFFoWhr8egqVwu47w2tpqpuQhr8Viuk9jJSb7ideQ6ugtmh",
  "key35": "39PByr5yBYE2fDxFs2y5biSruDYTMBriFx7V2wo8yop7KHg7znh6G5nAyE6uQ9mcmqRJx4hdMHyx9d46mUjEgabD",
  "key36": "4MAMFkHKoxemRz6YwPQaexYGmi9pzTuTyLeEcJq4ZVmXaK4QXhpGZhr8RgK5XhEqdkCNGqGjSJxGwkwvtCkJk5wo",
  "key37": "5K6vhSfapaDZQBUpw2RgfxVV7sd67A5FVKF6rW5xir1d2y6P43SsZaXqgXa2j2ERyrovxd5vDDVgvidcDZ2LeCco",
  "key38": "5fX9emLpodhdiQUAete3SQWoEXX4LgH3Tgn4gRb2n4sEtfbqXsowTgdacspykGCM47JERqcsWmbNiPqjz9DdK1NQ",
  "key39": "4CzfoTyaySM9fsZYru5ixdf1734YarLV4K2dc3Fm8uw3G1u7CXbzfdypFts4xjdqfY5aajjcP1siLmAajTSoLk2V",
  "key40": "2SVh2sYH5qhetmaPPg6VJTx7z2eTP3yKDLrTndsyAMUvrFNoeQ1U6eJkUwd4VMKJMCnp2QdQcFbgH8FQbyP2fbB4",
  "key41": "43Frfp4KAQrqq9W7VbHwwAMjCXzBPDWG3DZP2KrczQPmr5vYJEsbawoK4mkVtzbSYYB1wGnQVGNWPtqEkjjVuFA5",
  "key42": "4asK7BQm6WbNQVMWahE7432gdwxPHt54SzYtqAqmPxDbUYzbA7dWvtziNrGXj7Br9xaGdByGG63ST8DuHgoDPKmh",
  "key43": "NXn24mb6YyisddEQpKozAha2Au9FmJgysLLm3Gin22boqVGn7XMX27YtusvJ4ky8ySudW5GB61xHzd2hKBozyzW",
  "key44": "5hSCc3hTiMDP86B1W6JV17rYEpAAHgauSg5evR4JVN6DfGi9f4DS7GiKaGCX3oJznAYx7qehU7naabhExf4rtb5S",
  "key45": "3EGxrXVmeoVR7Q5vztPz1aDRJWHAfzktQ1XZPPVRC7V31BiuZGdswA6AcSfBqrrwLWUnQb1HuK8Nf7FxWZonYmXv",
  "key46": "3vkuFcth9MsJUvf9ifDvspxqSVLLVkfwmLaX2thJExsHWcYtoV2gnap8vy6nfjGeyYPaWYk1WGa8niPgau4eMZCA"
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
