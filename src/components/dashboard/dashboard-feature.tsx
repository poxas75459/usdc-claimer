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
    "37PuMQmSHm2MMKztbBABqBY2gLi4gb5Ypv37ij7u7H4ktMd2hQ3Wu3acruFKdaW2jHdPvdfv2MsZfgPoMcSEgfGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29pvSjmMHg9ArkE9GXHjg1RSi26yMonJFd1rcuij2WC9Ran2fPu4e9kE5a4VRPNL7rAWk9kbqW9qCxu8HDLhTEEa",
  "key1": "2DwoG9XJ2m4DR1AzmbNUHrdybtrKP9Jd218NwEjDXGigi5FQgnQbfeNGLn1qAmCZEgbsbxKBGcycH6Aou6KpUK4F",
  "key2": "jWcCJy6qzs9uajQKqon83EumiDc1AgUNPnCXLDoJVQB16qHAfm9D5256V6zWVhE8QigN6e8h6TnjtdcRkvSRTkz",
  "key3": "571F7xvYJtzJ4GaN7VS6EzPyJaL7gDcXBbjFG78g24yArJQB1HWswG7uSTLtcWqqgedTWPgQwZ3JuuJ879X7SJrh",
  "key4": "59PsEBjQb3273DTrftkJPnSh2BH9J36K2Dg27QJGnVGZDjJekRukDvALtEXT23FPxiCJ6vciDVYj9muqwHjwgGCR",
  "key5": "5SGrLqrPBp9hUQr3D2bux7fTWnF1CLEpe3EG9KzU5xb2QTL9Tp8nPerPupb1pXFdRPeFBB3jgajPcwqfEjoFP5DJ",
  "key6": "3qiwFf7wQJxZdsYqMxj3HoaFHk6zTbPrFPM6ssEQkJdhx3VbrHwQe6FrbGbyPJy8Bo5gEyaYQRzpoh795o2388rz",
  "key7": "4zanKoimG37JbGaMoujuphzjQWrgq76v6ophX5Kqbnt8y2FGeZmrLJmDQ5fFNUHER5YuqbLdWAPh2c7LbCfy55Hg",
  "key8": "37F1jLcNACATHN49RAfCZw4kyUx275aaqpGVWSWZBufK1DbzSGsPpvHoCGYud2v72WNRJUgJT51gwdwVztZoBaC2",
  "key9": "46eqEmcqefVb7uagpC1vKPVSvLVJe4cZZnqvtPmuhSn44T5jZ2z3B57RohpuAdq9cntv7rP29VrxDDkVK3or58rf",
  "key10": "2kst2VCrwKWpJ4jGGo2a2v3WXCC82aEA3xWVhWAPetBN6BdwekPWjnx9i39hMAjstNL9vLXcZZ6ZASYxKXnjqvWi",
  "key11": "ChAgA4uW7dUrt4n4NADQad4zMSxaqbe4NRwEmgW419UVA7n36bpop6ATgDNQnviKxV87Ajr8LrUVnyHcQ7NK19h",
  "key12": "4ABE3xAeZBjbKhXyZp2nAQcTXY3JVRrJbwnRevzWsFFiwgAgtMAf3MFuKr49XJTnznfaQy8qW56erCHwCYqkbjZk",
  "key13": "32KRchJBL67dei7FrQBuw4kwqYRDgbyAZj2Pg2vkLz31vFwGZbNiZSmt77mUDU3v7kkYEoE4DoyBy2xJnJMRGhAs",
  "key14": "yFMVUmNuP6NSZP1E9CnjRrUt4QP7F6mteFXnBkM2QBpEPNynrL7XdKb6Kh7HwoMYocxdJF6sTaLLL4RofQrGcVs",
  "key15": "5gi4U5o5bERj2pg1TAWVKxxJCAa8FZosdJYt1b2uYssWw8Ma3mUUEwafc9Hpix3doGCyVHAJUV5VpDXvyxFRiuVq",
  "key16": "2oCqNb2tYd8vL8eSvntsypsZ3LmrnUqciFFxDQoECc6VFmvzTAAdMUQLDiAHBe35GnBTu4rnq2t2cH4rySLQVQrW",
  "key17": "33a18viDUctBBEtXDhTRXqyvyte2cbMEeg1Tdmw25berxS74XjYwQwYAUn4ukFJ945tnPGsaVwRjgxctmyC1529k",
  "key18": "55jcRmp6Py6nE7cSqyiCi2gPaWKf9WkXoVAEYSeyqb3QcT6vjWTsYRbmjMCHvQmpDSiGQVehPdn9XT24UwLNUPHV",
  "key19": "39Suf6AAsyn1BVvGxNUEPwtoBctqJPjDwm7BEhCzZp18J3TpaGjJYah3VUBPGyYnbXpiR8GC6ToDsTHLy1LoRUGc",
  "key20": "DHinCmTRDHAw1dBkWsaoBg9korgDZR3p7b3krvcBeR1VvieXGWp7VjAih6rsn6eRgWg3P6Qe5qN6pUFjZ1RobVN",
  "key21": "5wL3A1nvALcfkyiNVcK5mLiTQH6C5C3jCcwS6HL45T9SroTDNXbAKA3YnmxryWQUGCXmehRWyqgUEGjT9FcZDfbV",
  "key22": "3kV6eVcE6Jns34ZeEixfwdZthvGTHvoUsomg567whuwN187ubjoqRjKk9DH5tZ9X6GaivYtfnGWSqwnbiPrWx1bE",
  "key23": "wjyBE251L5hF2uvNC9ip9GuTrLEQ9GxxmsiUu35m6N6h1PczVhBuT7i2KRang52wYHxeewPwB9DZF98WSNhfuqi",
  "key24": "3mRgmkNwczGgDU4uZxvTFLtVGriMw62hmxJ98Qt6eQPD1CthrS1MANt8AMdJfZw3SyTHdLFAP8jFdVt3rJEwSwUx",
  "key25": "5NQeVwvTR4ECjqNouL47ZzrvZWpUZ3NJ8LJa4xwSuYPBjnU4xGUrePGSYkYhKLT5eBCQKLxUoY2zJEsMXUh4Jj1",
  "key26": "531ZD7dMHe39AGTLfmSyiBReUXXnqcn8sATWcyMUkikk6RqsB2qkBNYorDCY81Yb9VS3BoRVYqxyV1VW8NnVim3d",
  "key27": "ymDEqn5W3nBsjaR1gTriwmGvBrJWhpZ2fSbdz6nG9fG2szzvjdA4qCuq6i4Cosm9AkhshCESvoAERGPa2w4F3JA",
  "key28": "4KajX5cKD7YrnYKj5PvgACeMxfe4eHE7SBpV8koih7XAc6pcEG9nkYbTgc8KoWKK55BK6o9WRgRuxM4kB7XZHHDW",
  "key29": "4QLJWBvU9wDu2rzhJLk2mUyFkXEmbjmELR3oH2UL2eZQ78cRu2imLxsdQy8U8TUrF5kyHjDGMCz8UCQw8KWmAZQa",
  "key30": "RTbfWuqANminhkrS8NVa3ShdT7GJ15vX2LPDn5PUPEFJnPmTUu6kpwy7nAMWRZdqMXL53RV6Txp5pAG5YT9iEkq",
  "key31": "5TFdDwGUL4FNkytxu7TTfp8MemjF2suRztQv9Q1wMwRCZ3PGS4kfM5rri59sFVWfCakUvaeddXoQuoEv85jNPs5J",
  "key32": "52HT8rTXfMJuVmZgsr1Vm9hJet8wAgv58sWqLGfvPrLi1VPKDFrbihScfeWN4QeUxcoMKbYdiegVTZUdVsEpi1AD",
  "key33": "n3uraoCdcQTGCrpBe8dnmJLwiyH7bzrrYU21FAcFUJRRG4LmqQD1jrc387cwH2pkqfkgQPi26prG8JSQFgagzNJ",
  "key34": "5AtcLF6SwbZi3JdYHCsaGnHJYbeMNVe7fizCZ8VBUwy9ty5d1sxYxoyZNo2Pp2rwUXPZRVQai3Q4635yK8B5pcAz",
  "key35": "4xBRysJbxaqB3mYj3oL31kd7AE92S5EbLDJErHfxNBa3kcKAmBbVxEDvLAZy1ECiXc5otnxZ9vfDN3B5PKds1778",
  "key36": "5mDMPZ4ZY3v5RaxbkpGTiw6K2tDkj5BobHKw4iuKfWM695A8pBCubrnVPfWp8CvGcwwpFDLdJd5b7DwtUf95Pi21",
  "key37": "4kJFUYcofBWxpWC8MMKoNNKdxH63Mv4PgvXmMhhCoEoyDaFTFZCqkkWEQ8ixcphg48RBd8qB7kbs7braMQj6HuVH",
  "key38": "5EvQvmaUnfmy8qtJ6U6Ak975EAa66JbvMtKZbKeDpkvtH1pZcUVAjxDrJtu2TSF2BjSr6fjApYfPJn149sfUuoRB",
  "key39": "3YDNmgKv3J448jWcYFHuw71Zcr4moHADhKb8rgjiDwHc4QWstKeZq1i1M85fjRFoyStWceDoJc5cafwhM1xBgY13",
  "key40": "7QR8Jep1Si9AubRuYn1TVEp5buVCRB25k1Xi7rZ686WefqLr6JVgKq1qaHTmE9XKj3ZrghS7uBNYegCdk935Crd",
  "key41": "39FejiydEpohos3hCwPtwg4NkmegMVzd2mrGDVzYNBYWcxoGa9BVWsQzSJATCu6qetmyvq4wVccngVo7AY3ymbWu",
  "key42": "2RCAN4J4xJ6hU889LPk1ZYMe4Ft3vsxytKAz4XSGD4JqEV1c3egaRbDJNkJ6X7F9Nx77f8vFwa4P5QhX7wo6Rm7H",
  "key43": "5pBXtiHUvsVQ1Dwf6GQdPn9WDiotrU4tkCgUdVuGddADPqLFUV4qqAkMZcNMHTLnUxyi1122n9uK5b8KnUwzPpHm",
  "key44": "3AU6duUJqPdppa5Uh9kvhW5gL2X17Ttu45FH8tQ9cATPYDhnUEnvkccPBrXnC3pTGEQWc2MJHqWndeS2Avwzwpap",
  "key45": "2yrSnbfD2o3E4qVPvwuo2fs9bwhPmsNJWr1CNRmsPbdEisw9oVJRUvyMta7qHjUxHQh5FdHCFamXAGRW8aeRPLZ4",
  "key46": "oHZG1AF975HawgfrBtDXoKATFDPxsvaLm1ccgVX36fK57Nn2j934qbkdVknd9D6oDnRSGWyQFqkPjjSChV6yNAZ",
  "key47": "3wng3Nu6DSUtAcAbua9Z1isUTwtAU2D8SxAak6R4D8FSs9HKxYy8uRquvJGEBVw4kajUB1PUjFbqrvBNwU4ecoN9"
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
