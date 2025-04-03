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
    "ckBA8y9HSgZfpWRoJT68mXpPVrfp838byiJKaGQcUGtEM8JQuaB4gKhJEEze2sxi1AriYwqjCqQFdT9TcshTSZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NrnHR6kgAvLGvsxZsLfoFP6P3NhRTGWHPKo9v1PU7sJARcDknLAu3MgteSFpPXBqe9RBia65m1N6T539JahAvn5",
  "key1": "2ceEUybANwbdkJWsd8NpUCEKfZ9AT9HEkXJxBhD5nZE5N4D1hwF3evYtGjHzSPgFMjD5XRN5C2Fo5YCPNihEmv4S",
  "key2": "2jdVUKUTrEwMTANqrJETSejHrfpDUydjLnNDo4vaMsASjHQbkYa6GrvNC1f4eMgnhFFkJdaMp9QYh2WtvP6ifqpC",
  "key3": "3s17k3NkCDFamJjGUPpMypmSuDobeG6vgKWrY3EbCnDYNBQYrrtT7uGuiNMosydxAqx4mVP7G57DvD31RxAgSyRH",
  "key4": "2WPmkoMaEjXzALzjugSAEqKitrD1LY7Auq2u4efArfbsRSWw4QaLJuf7ecrUEvLXsjJ3Dd8qrRLr27skExpF2mYS",
  "key5": "GiyBudTx4SqpkSLqCgLBgbLyoEU4o6edvBF1cEWjSQ1UWZb7LkpKL9u5xmp6GqGnvUjMZGEvcMeuhKnF9tLZpDv",
  "key6": "igsNKWEVpY5f8CgofumRd1z4wAmeCSzuwNqNYZGftbVjpups2e7UP8teVQ3xDgHJz4DUnS1z5gr4sXZrmWoVKno",
  "key7": "2Gr66gDzBNM2CXUtPrT2LLKZxEPhULV2C1KpSkVwmpot7dCbnVqQZfV7M6Q7eDKZVeF2Q5UsT4TaiCxSp1UabKXk",
  "key8": "jzcr16qJSVbf5CdMCYeFiuLFtuPXTK9JNEBBNKMsBDaKbE5dxZ2Y89M9s84UnYTFHeE11xrbjm3eN5VgkqFZMRV",
  "key9": "4jvHG73zfod7ur8z8sxjLTYjNZfxiFVsHjcaFhDbhsQmsNP2NtpmsrFHVBG6f9dvPXQg8J61HDPHCChVEUZMQKTN",
  "key10": "5uABSwkEwhUDEsBEo7pFvWucc5g2V3NZEtUCjUt3kM1S4dgesNsnPKrLuKu62b14gxfuTALic9WuRNC4K5kiv1FL",
  "key11": "4yveBxXv7AfVEhB5KNwqhkpjQAyEhJDZxfcUCYhUR3Sr4YTjbVGEbVpbcA8QA4HYRc4hkv5KuZp1vRxvs5vqgSKd",
  "key12": "47hxh85x17KFnj2p4dfq9U1uJVQ5EbdqB9ATXBguXkR3rXSem1ei5y6avDucSvgast8CJxwmxSc9mPoLvw2bBkKS",
  "key13": "5vdkaTzpHCRRBhLHshTuVQR8QmajQAddgtyEWgbKp2H7uaiu1xcwRSrS2sz237NqJgXQ4f8tqVLgrsZiigjP8ywD",
  "key14": "EU5GHmokLVCGmkDW8TyyN72ihupHt5vcfTYA2M5Qzj8Fk2o8XZPa5td7tjhNQzbugAuQqswKHLdMz9NEzinhLDi",
  "key15": "2DnYhA5C5fqbuDLDTRdrGwrV3E3gDdaH7f96yixiMMswoL85uBPtsTbZ5HLc1iG7ennTEH993ovUWNxEoyypwzPr",
  "key16": "BP3x3UsYgRS5jJJcZoDMa1BRntyrpm4j9hbYqrEupCRUEdNgwifizsigRK2Peg5BYYuGtoWb8qbC1kYzxSgFCK5",
  "key17": "3uCi49xG3iyRtiKrnriLh6i9w8n4twkQsWshq6WrHHzggQ2ZZMkeHmAHSCY5j57cQmYarSmicVUkMvsLJ7bVX1aG",
  "key18": "5VYkiwv7Xcy1HnaZng1MbfCKQPHud3qErNCQ4pRS1kxZo2k7Ju761Hag68mni3PWqKq8bmTVXjdC3JUjp5NsVPMq",
  "key19": "29qrBw5wSTnEUnQhsKXqDiMt7BkQJhkFxhie1gVoXT7MFYi4T3Czy2Qj8zmARaqTz484jHGhxLe5cPmZYV4Lje9x",
  "key20": "2zPRm66LS85uTnU72EV1RXHE9o5CoZf2ZKUn1Z76WeKGci7S7WJK8vtbq5bHfdk2ekN1NqpWL2TWDyC9mvVFhFg4",
  "key21": "5qEcM1TZrjxiJXjABDbzScZXJDB5FDtJgFtBL8PUkx2c5YnKjNtzkp84LoCyoNdVfYqT8aiXfLskSMmBK6Ee6jz7",
  "key22": "5hqnQBerfFNHj2RcxmmWdfPQ7CU8PvDxPxZdqnzN2CKRugySaiZm5CbneEfernewBsL7Wt3Nfs7UhRsJVL95eELP",
  "key23": "2ZTcBWNuTWZbTYJhTCxSNWYwDonNBJtMbkGdAAnH9bJh5EPAHDf2YneWa4J3e9yHyR4o7wDpzxZDF2vuR2htykJ9",
  "key24": "31So9V8H2iwiPShxcnojb37bhyvJzhr72wcXaBVqF249VQSWeacYrE4GG5QnkE1DMUrkHjscsStyAF3jrXJfxiio",
  "key25": "3JtYrG7HT9m9zsXchohfWMmsWP1LU8KsQwpiKRciXaWKan1U1F2uWwcBZA6LvKFPME1FR13MJb7EuP4hcxLmoUQS",
  "key26": "4huSzWnBzjXsCcH8392a366DEKA2RyDUJnioEGiS2LfpyoA2ojfE1Gk6GwLmxr1wigLa51THDHhvjSK7gYvmeUVs",
  "key27": "gez3qtKpHK3v3Fp7YZJRQAQpyk6ijGrFQkpiBCYGrQXGq9sT69H92zL3epymV35bTkQLeVThnEZA7v9P4NXrodn",
  "key28": "4qRtBukZpEhgGUGTTJybpQmcnkNJjEJTZstCyCzCGuNXtvaL5Zi53xBtfyzbze6cqUcn43rPbPq8XP15GdXHwvNK",
  "key29": "3bfkXhDZQwx8oaKuDQW3X1D27aYVukphJx8WM6zLkq8q3iRXhonHzwcce7kN7VTKAHUZGki5GrzY5zNW8zSZJ8iX",
  "key30": "4uVJUp2yzKDcxmPXdUhVCgyBFaMAKXicpvwoWgkqcxuApXYsTewNeApy5RiertxFgZu5HA6fa76mAwkopJFDmZFX",
  "key31": "5PhBMseWWghBcWHLEU2DxUvyyLX4248tARtckCCghnXYMQ9KQMv7hwVAKvEXtjjippbYCny6aRGyyevYHRvh9jQf",
  "key32": "3K5V48Lx17qGGWViMLagGkFVee44Gs2haHF8Vf32MCn4TZ5c3qtRjQpwgDvdbxXBtMF9RcW5g58MNYCXk5L4okk2",
  "key33": "2ecPCD8QLRpLH8my1iG97fybeN8LTUAkdW19CtoHpsBQhHQKhCJR8uXRvVCsepQwv7uhyspkac7LVxUxPgzZLp9S",
  "key34": "5ZcVqtP74Mp4JtssfGSoYFw2AdzuFmPSDPBPyXEMgaMKfbqiZCLdJo3jQ1NAVmUPcbdqnNTmKwpW5Wj9L9Att6Xd",
  "key35": "4ej3yPHPCZ49vaFAB9bVBk4HZ16QnuaHvj8nshoDmdVysvfVFaNdFiNr8Jnmnc8PwjiMUBhXDombDAU4hccvCAVs",
  "key36": "3XN4cDoVLafmezTFrHys5NcLDhp1MJwQJsdzGiUGNQt1WGW4awcgVA5AAq9W9HAy5UGWVsUCM1NmmXGYobf12XRQ",
  "key37": "5xDayk5bUgYeo4mw48HMLYUyefj1hAWR952uAjiz3RHfodFrKYpANu5doUBeepjcfZpn86i5uCZzh6NsZJqum9pJ",
  "key38": "4xNVSTJqjyeTjNKkZmJm1tBzq3AJE2eCvcrizSTeMZnFjbPNMh9k5kf1A7oXLm3krGUzcP1F8LFN8PLRa5Yh38iG",
  "key39": "3kiY9mGzUQ327BgDPLJh2muuxQeUSrp3jsjHEFwa8pMQgAUmRSy6QYL8iG5zMCPN8V9o3nHepo9siZuYeLMCMmAr",
  "key40": "2n9Dgiz3umHBg4nDuahe9C87emxowvBJsowqFo3xJwwZ9KDg3hMz5nW2JrHu9UnBQjvfpqQUesEznFacm13wZPhN",
  "key41": "4B4jDyU1dDJ1RCcgTSaiF7oaR78K1Wu6GcnJwygrT5bZkfNvmM2afN2538KeC3fePYQ3kponeB9uD6WRfMueUyur",
  "key42": "4qBS1JnPQupqmBiBZ5Npr3M9boPfhkio764P3V3bHqzoLcQUyqkY4HX3Lx3QrowBWP5PVewYarkc7dLi6pWZhAsm",
  "key43": "3hmjTzDGqC8UivtPW7Y6PvQHLCa2eH6AoDsg2TqCnnkWTuYCqwzr5NATdQ7JgeSHQbGe5wTwP7k1Hgh9xa2XRY8R",
  "key44": "Q9SpyzetTxMhb7iEwRXGEMyb9PKc1Z2Pzg6UBp5Bi7yK3Pj3FdD244VuvX4UYYqshpvj3mvh3doj68D8UQukqYC"
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
