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
    "23Agsb6WmRzERWpyGV4SJudQMTyvgZuzniz5aGynbdj9ZtmJqAiebK5WmpcBcV3petLoXiXJJuJYBwPpjCC3mHC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u1pgUj7jNMauEQUKjecK2rxzX3AozPaVsJNJZZ4Zesh6Zuc1Cjb6JY9UWkKugem63BaUvu9ybbSH26Zsc6HW6WC",
  "key1": "5u4RoG1oGUM5rnRujEbTtebE46XooVDNtmiRbRiGrxWmaCGutaQDAKSVAySYeh6Hm8KA242ydEQqHKgBnYVo4Z9T",
  "key2": "5bwwodmYqAy8TAWE1thH3grXRquvsUtkKjztPY296eVeE8PW1Y8sUA1Ttv2mZNzK6vMmvHD3fyHcgJLRsvSbg4Lw",
  "key3": "55WZ97uq1h1xVtmMAcF2xjeGZywxFs3xF9AJ1Q7tRH4gAVvjkCbNqLHBufoWouieN99fMD79P9geFiunnGnkstiz",
  "key4": "giA2chxSHfJK4dgW5Z9zzkyfTcNPgLPXEMceuHx7DR1Q6ww4ZBfeEs491zfErUbb6Z86X7fZt83rpGf3bnfPJoM",
  "key5": "33NkadoAWPDEG64gVNLRyzRykFPaJPC2xcgh8ApjCLE1nXS3DsYcAm9oi3Zn9qybGY7HaujcKUkeVydcET2cZezW",
  "key6": "4sgHLEk8GEzQSMuMwdoLqoa5hRy35VPvheBszJAZop6KmZmfrxfoUrm89ZB9WxiuJYzEmC8zF8AV4Pz2WxXj5YWa",
  "key7": "2LNah8KJSRRs3J7hycS2MRs5qioUNKp8SuQqUSPNQkEjXzieM1QofRPTePWB5YtdJgegQgU4ZfFZnifHrEKbk8vV",
  "key8": "58rvFq9Pjf3sMemDK13DEutwEuC1AWD2RPzyb4AKjgmmu4VedJwqw5tmgrH5qkk3tb5H1LSZjuj9mx5AkF3vBrkF",
  "key9": "27wqFxN6GZjZNBJq1YPJHwnodoahMcoc51Vs8LtrBugWNEqQdcYZuLZwP3Ss59q42xrwVEeZnpd4KFRzJA3j4xkw",
  "key10": "2e5NnGC1iVRBEhsAJjGfyx44iARUE86Pfsk7gf6WyN52NkY3vZbjNTjExdu8JH9hRTKr6SVq9xLqLZgipv1YX5QP",
  "key11": "5BBuKPmiTRuBimc1WGgyQUv2ZbLT1yKVNwMGWpkf3GJAhcgKM1BR4Kzho5pKZAPXZfTh2zpbdB3di2AEaBKz9et3",
  "key12": "TbRWQgWnotMkMxR3WVZZ16aGZZkcs2Jgo7uRSox6Bovwh2nFyvMAsNkE1bve8DnBK9F4N9YkYXJWD2QMS5UguHA",
  "key13": "2to1zTB8zDkdc1Za7aWoZWPq4XBoyqhT6JC4NtcfiM4sCPbCu4e1GjBJGbUQ5b51yaWymtojLH1iZfE7XboenjuD",
  "key14": "jwfxvrTxhX4qA1WuYUEJp5joUP4eAejdPAewW9qDzQ1Yd2KUu7T9Y5CYmBfWASC9Dbgeg5SLoaLT6Z6ADjzzHw7",
  "key15": "2696j2JZFutMuk5kxXmpgMVr15uhK7jK2nLHnGpLrtukdsPyz3DVta3ZQCTzNzTxo9Vmw8XLtTE1a2S2qdbhYfBw",
  "key16": "xsbuVw8cLriNJkADYVGgu54PrvwFMj1RCm56FcXW2ViKEPEesJYHoJA7tnTgy5hgv7XAkSWdVsJqviWQG9WQ8yV",
  "key17": "5gG68iEcZTLhqDB6gC1s1A1spnpMn85DXHNeQgcLrwH85kq9VgEz1ZGgJuLDRL1SyiuCKdvH4hpASXmWMJxYhTBR",
  "key18": "4fMPxEh1zJdAJFRT6xJJSYTxXmPQzSgTDMyAsr1pkppE9NNmVdM7MZz8APXAkHKX4H1EbNYhdsE1H9KDzuewqzUF",
  "key19": "3pxdk64FwsCxQcEJYPTm7h4vmM1nChL74RXsPKd1b8ciHSL9dN8W9FkL1UKSU3LkCoPUbdP5n32k71xYJxDc93Pq",
  "key20": "wtDDctXWwfz8NHTT8S4rJ2oShZB7KmxH6U2vYKHN1wqTTzLhnMcfDxiqpmdQR4NVbWXa9X48j7ujVfbg5fpS5Ss",
  "key21": "454BZhT1JEWrquUWHQFp93qvFaA82JwdZusq4rkY4A9TtpkqrXCya33s9q11MF9MnTkafjStwkARpCRPDBXrUBVU",
  "key22": "ctSrgsR4hani9YsWDHHzhSUCV926syrcGyRsxebX9dSG9KgXbDzgmikebcN3GCCSRbQ17ho5wFyt9uLLMHzjSYP",
  "key23": "4G9QtH7K5CJjd11FfTDix3JLFWGZPLf8GcFBRMzVux9vHNfDjcucXXn9M1yszpsxStJtC4ceVufcV9p3dhmhrka1",
  "key24": "WNurN8yDZc5esCpWA2XSppU7tBBijNAMVC5KnknL4hsHv6qcseqxgUjwaPffJErmo2Some7fUKxLGcAu6dvRgxt",
  "key25": "4orPpNUReiniCrdchhUvWfJ8UTY4EXBTX1sCbbS4MAVrTwgmtVSoDrkq47qM5qzC7AZbvd31qjofhxigKzYMBQaV",
  "key26": "2yoPtg8ZBQZjMN14yEofo3pkcDtTnXsXNAg8KBGfhNavAj3K6jvHcYyKouz4jtw8EmwsqQQ4JrMkfQg3EUUfUvMh",
  "key27": "2gKzZuCtPKtRngjPtAYkWkEy7wsYVtuiBMAa5FzHFk9uLC8M3bmgyX2Q334CCpo7igE5xZFziS6MKU7euFLN6FW8",
  "key28": "4FRg8evChcoS7RP3NHcksY8E37FDBkRmqtsZqJsMyK2MeXc17ZuKwog3UKo3tYDBVvqqzWLZy4Wi1U2Jfk7NZCWE",
  "key29": "4nf9LZy8DXoKoqkN9TVZoa8f1kTqCsi2w7oKe1AzGwZUXi3ENACknzGR7h1wpktJidMiaNQ3KEbAvnDznuFvRynQ",
  "key30": "4v9Fj6hXjdyjAsHhpfEsFtnL1aCthjZAQ3YoANp4WJMozfzG9fLqj98Sn7BJebAfApt5fvaXwrP1w9AVjSUMJgAc",
  "key31": "33xiJjoNGV6MLCsi7XNtCA5zoAqkU996bsisEZnLdbqDb6QLRtnPQvYZrj6UowZE2Uzux228gtmRabZ1ZMu8bnL7",
  "key32": "26qPpt2LDKjAmXefJWWrDhTJyMxHa4fYe8RPDqztmxereM8GfdQ38ALNNS8GWT2JwE3Ebvtnz3D9aHHif4BtHDqz",
  "key33": "2kwB3A7dRNfNhxEvXk6TCuSaxyanmE7LUMgeo2v3FwsYxypemYB4LrL7kNJSifsyDZFPFD4YBEdGzvP2QJUXhvhv",
  "key34": "3n9rQvxdohn4VQMeD2KYgCVAg2mcS9vRZVJj5cA55eVRKUkqPvr6Ay66a81EavcXb8JyzpehKVijDNB9uquzek8K",
  "key35": "41oZcgZE6Yw7dywJvcH46GwNwCSHfJZkcXm4tYqF7ARJWknAy963uh4kVQbdag4DpC8aF7fRHeEa7tFL1yZKDsq6",
  "key36": "MSC8q4d5TQNDZ7SjADT747RTRoMFC8zASkzsu7Ag8kXLgHuQHLqRuAh6BSvMHfaKmzEdBgF1ZkFFwFz9yYkzDoo",
  "key37": "3MM14RGxkiivQnmKWAfva9USBtxpJ9Zt7JEfK7vd8prmRGySf3hUdBwUTcAAHa72L4GQ4R6BECq39ewESc8WzFsB",
  "key38": "4SgEW9FXCidyLfGHAApnqBWPsDsqR49CLcB7FdNyoxtk6KJN65Q4Y3HzwqsxvtyPcQcBXHf5HQzwExgmTHVkPA2D",
  "key39": "65kNHJShU7jYNtGjyFAdrDm3phR5voH2Dd298s2ubLPpKKPHNS3pKoopWrU8cbzDXCYK3hrFfFTFgsRycwtYBw2f"
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
