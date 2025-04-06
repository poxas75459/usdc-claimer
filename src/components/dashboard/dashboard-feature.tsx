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
    "Aa5GgyXgoYo6X5yK4yhRPERyW8bcVtdyiGznEF2N28MDu5hQdzU85iQxLFHctz3XT833UeJW2SWk65vyLiqKBaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ytEZ9WbGYGUtcyywZG3oZcnjtzucmhgzsdhr3joeZhrYos23pxLaW54NmV7Xnn2RmDSAEKQqF1Ps9vT3tft8RTH",
  "key1": "3nNdc4iXhBbmRYH6LaCcgh2ztU2hheDEaUvfjcQSqjo5tyh66DtDa9LbiZtVtEooq45cev6pGTHa9axZuBMxjsWU",
  "key2": "6622PRKr7SSR3JGM9nAZq68DGa8BbAubNpRq88sgNdZs3w68DT3iWNntcEsbsF3pagtGNfHH2ecykyJA8GuA1ywr",
  "key3": "28At9K5tuQpZ8e6HojRvrxVcFepxjqVdB9ZH4CgRyfm92GZBBmPLtau66U2WjCgv62FfikiNV5o7bVEe4Tda5tV1",
  "key4": "5GgTT6YQ7gRywRLrKCa9hTYRSjyZooBFHE91N28zPUKRfgFykzmXtPpREyJjLEfL5DnVCNzqHW5PatNCe5Acznvp",
  "key5": "5adaVofoFaPLeevWwdYpKk4s3GhZ2MeAkaWayKUErGZeMTu9Lw9PnNJ9Y2HU2V2Gd96XEcfNyhB7X225SHvWu3u6",
  "key6": "4bE4s9fofxgEx2NhVTUEQ1VDCsicLnVgKzL18xbdMbC64AE1wBgsEc2VuCBfnBtqkuKVeTBXvr5suvrdWb55fgrb",
  "key7": "38PRbiTy6jn5EDZc7nuXMiXpAkXBzsYhGY7bbXkhMa73R299h7NEv11xgDb9MMwqA7Gedua7b1QgC2SqrTweCkwy",
  "key8": "5GR44XmxszCCvMQXemdc4cKr314MZwHyDndhwNWpJHKFgV6tnf7ugmGHERGEqqh8rm5ro2Hy4R1x6NG9YdjLsMxb",
  "key9": "2iSR9VC37V9mr93BN9inv7W2cHD5ZH4m8ojZQHi27pNJqLHJ9LvvoMfEhymaY71GF6vCDuLwVoQLt9LckrZACkep",
  "key10": "219ZSSnfiarhiXGtQmEh2JAggK3WxAcDhr7UbPZ2s9qcXUvWLK199d9hfTXG2V31fHipxfBgg5sDNuo9zeP2YT4d",
  "key11": "6fmDxx5jQwKY1TFiqep4eEhQk98Ab8gocaMpXwgywNH9RCXvNmgjvH7zxrt3JpiWLayt8k55Vi2RZWVxHzGQFxX",
  "key12": "4RpKEcogYLuC4GDKkq9qKPSXtkiMXXDrtedXBJdnX6hkW5bbsvxyphe1xDAMxhPyWBiLSZSmAZwra69qKwaYVuaX",
  "key13": "kzZHPyiJ7w4YADCdkXqCEgT9dmPHSybc2qKie4E49fnXupjYypZ1wz4Hmp2w653QPxJ2T4KpMdFdUTkLqqun7MV",
  "key14": "2A56EEB7L7N93WMxHXfb7SBFLx7hAfbPqkhyjXELs7PFjmHpp4VGKnB4pmvNhTnGhZttDZE4UJW4QGJ3XxwkkTcz",
  "key15": "37ahYNHnwwy7w3jvGnopWoVWhUw9P9qYd7M7uaRRSHnDMZDr6CmzrZjvSn6wLWrpoVXSPW6fXas8NaioHEkMmgmu",
  "key16": "4HdT7ZB3e13J198nCWYYk2mo4qZcUc482o9jfDrw4iSuSpjsSQKAEo2hivb9Q7YH14BoZk2j9343pvywjZDergZc",
  "key17": "26pegXTKeCSzspUstrsZR1D4aYPSffGjS4mg3kUY9JTrDbX3kRysfxSCtMjrKBke3bc36owcjxtLdHbZHEuCtFr6",
  "key18": "3vt9HAymMJnHV7Hyy7HCPUdty1ycGjRHNkNFAS8uHfVGbCKZgBJdNEt4sriQuttVfJiBvdUWomrUpA49J4NCzdrw",
  "key19": "5i7GwqNQsDZdAHiyAgsqaMc2dXTYtu9YpMbAECZZrLe4C53crFE2J8iEL5Q5bA5p72DE3PKB3NVwxtcndpb4eqoY",
  "key20": "4RBhbD5vJE8vqf35GQ5q6rc7pkrZXH5iKxHTvAsywSky8nFcqkcmYrwrkA9SjQLkmV6hHjX5wrYhtZN2fJV4myRt",
  "key21": "5EywMuuuNBGXNxmhTHku8BqKG9kqjteDR8o6ggB9irQg9Y9HVp4PEHEeXizDAKkiSWVS8SuDGhL4PKYt36a8oG5K",
  "key22": "Yad2T7yuu9gSmTeK6BpAX6sii3VvwmHKnDVhvWpvtp26rqT87dAi5HP3VieX2BqN76uQqBDGNnQ53haDBxvqXg5",
  "key23": "5f5jZt1D4wanimYoDSncUQiHYc1UBp9ybENsG1gv6h2egCUMuwgMfvCEy1M5c9PXvGdvSeAVGJrxFgZpEYRjtYq",
  "key24": "5bwE4ML3smsEFzpfQHuGEhJvbNvNhnpsHNLK6VnJPJYfW7A4DgFCYxLEEVrjkDguqBqk6Dm78rMLzXhGeTH9ehoa",
  "key25": "2msHovYbyzYH7U1NBHCspE71SWPiB5PqrxwcpsA25bU7UdWYkVf6YgMCVpVvYqVSwnjHCt3bRmmtHjqPmXJ9m8EM",
  "key26": "2HXrFXuWWGveE9VQCK8tugfMnWE95zyQAQh5xmQYDBe5GgKMSx2LRyXaGgJHdGKt1T5JYEwh1aZxoRJQ7JECjzSr",
  "key27": "5vKrcBxQCyoLYjW8aQg1VqZBkTUxDo6P7sT3KUygomWFAavTRDCyNhNp36E7ZqN4VrsMKXatRgchnfxC2Jx3A2m3",
  "key28": "xWXgyL4wvJc7CjmKL31PyW75a4HjAxWwuxMVLksa1XZtAM8jAM7XqRgQ7JXDo94pt7vtjbXCusRF81vmCpzCm4f",
  "key29": "2425RAazqTWt4gMMTVaEeQvZuLXu7YsZKVptWGce4oLZX52gNcwUeqmRZUm6NnNsyDC9Z8fbjRaqVRVAseyhgwC9",
  "key30": "3js9jcis9NWdqQ9FxdCVG37g13ifUFtCYKBUuT2AsgHGRdAFgxM51J87mk4k3bdbhHzfmKWqBCkUT3jqyLWqpuB7",
  "key31": "oE9Nyed2C4cAFxEKuUeXynwaue3mCXxh4UUTwQBau5Gg5CvYsG2Aw6y4DH844Qq6hN8cZPZeuzGt6jhmyWEDwNe",
  "key32": "5mdbVUmnEEWzM5C3RAapgr6oHT98sPGE4VLDYxXwHf7F9BSoP2WZmqetYPrinELXHasmzgorvmbGYNQQhf9kBQ38",
  "key33": "26ZMdDHcUwtKbNAZyvuEX6JvXmnSgAcJwugApAbFW7JPsP4gdZ4mfTtWrz8ok8K2u9ebWUZnvuxHCVQANkfsNsZZ",
  "key34": "3Xw6frQ5mgE7pszjuuaaM6mah536r2hJ18L6GZbbTdSMSoTow6Uw3ygoyTHs3n6zwQ9rCra2m2a4PVBviRFssWrN",
  "key35": "65m3yZiDw1XgUKLuxbgPJKsmCtaG6Smyoab1audcitsm9UdevK9cDbvW4u59uMKMuUTfqNxcMLu8YqZynYy91T6f",
  "key36": "5NH1jdvqKLvZRiDs9VuWqSYPAT7CxthC8uFt2hNvpdGqtEmnqMuBwocdA7QyYANMh2juPaR2k8NzGpBa9eGR7cJf",
  "key37": "3vcTK8SwPytS86vMBasyJ9bL29QLFrCq6DXU5K8apCjUXQ24LbvxjFF31hqeEopSt3eVbZirYSbWsNu5kHV6XoDR",
  "key38": "iz3VR89E9h8gVXsf7xpjSrTvs4G5TjqegPW1sQQFytoLTVKykDGAkwwEnwm81JFVSWvb9AgK3CrGpocEtPb9zye",
  "key39": "3K4nbxerWnUgDFJ7b7SumJrx3A1CHKVcL5tdVBM8es15ekrLviWkUhatJUMKxa5sE9nNVPSkpDAo6XPoNsVPdCeb",
  "key40": "4pvKX17ZrEgazEJhVPPuFeUDaptk2VP35b4KytuoXCaexHMG5a32oN8AsPFaGyK4sagyCECCGbr4cBDZ6yXKufVM",
  "key41": "36DuznxjWU2W9gieKPUPeZY26KEUeGnRDzGXFEmUvmJM6KbdjbiowyryYzcp37E2neswJNdtNLw1CFSb2CExzywL",
  "key42": "aus6FJzcBpWBQJvhshwsEqRZurf4pomNdxrpEd4FyX1YJinFfXbuojpoXvQagxU8cCBDb7SZQfRBmkdvxgChwru",
  "key43": "3gjEAFqXbFL242vy7qr6LaNNvnik9K7Rc3y5YNXZG8R9e36YyLXYjpgNJv4t5AKV76dih11PcBAHJxUZu6uybwzv",
  "key44": "gCJk6DDZrB4oF3v7XEJA6ZyhYyxErwuZnk5UroADEpZ1LTK9DcfuDdv4ar1iiqGvPrjZdfqVPYGKicehUh8wnMD",
  "key45": "2xAQTMs4omamoaxDojbW7DsQuw1aAcubLkQ7zPKcpEt7jnpvSdL8fzFDB6ny17eufWnwtbYihtt7yyRb2iJC9fk4"
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
