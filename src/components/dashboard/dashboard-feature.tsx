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
    "2FmQoaoWaVJHnnvcDD328ULcCua9F35iVs1KVHNPti5eqboM2Z9Gc6mFTVycE35G6NRJQUEWNeyC9h3FkkSNRR8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JCmFgzodjyyck9AqtuptuVmvNVqFirMprv4LvRFGx665iawesacdvV45WER6dG2P69kZGtW6DqvTrADbdW52jUd",
  "key1": "VwhBcmiKG4PrvXwa3gx6HFmFDw7JLErF1Vbfv6J3WRs9zi1kSAMhfEai6vUF8e1m4PX6o6Y1mcMkxKhNCfz2bda",
  "key2": "5S6utK3G9gdZWj2VUbZjA5GJn4V7fZGSXFfqM4GkvuUus3BwJ38eeEANmfSBocwUq6exxk9pgwwsL58XYb7XUjFb",
  "key3": "5Vr6dBdy67saGHezsTnpzQmGz2Ch2NxKm4cchxo5wbwdiQG3pUUiP2mkrGRwDNuWpLkH5u4atwJj3TNEhw2HQL79",
  "key4": "3LaGJKbyYgA1yZQ4gkQU8WNs2UnJj9he7T5Nv1Pvtz8CPpT7C38Qre8bYy7q4V12FhCapqvGZohYQjz6pnxWguvc",
  "key5": "5cCZQkdNmzDjGnokLw6rSBfJ6E7BPT5KJ933tsD8cumJSWoaSdc4XNEgeXN6VVFovJy1nxzKynuUxnkSwWaACg5u",
  "key6": "5LwECQP7EJy6HkpetXDRjuGmBHv1DpWp357Vs2gYqmA4iLEjXxCZx9Evfjug7UGe4x8sp6JVeZmB3emnaUHJNkMT",
  "key7": "3ep2poeuStCaXHmi4JLUSCgwYCCuW4DH2yK1sLW4JYPUwLs9KAhZVG13H8UXDbJdbUZCjVHuZpjtTysnPtuvgGdS",
  "key8": "E2fDGFaX3sQ8XodymM4FpbYmCgYYH8AfwSa6nQ3gWmrWETMk981Kre9zXnJEbPQuK6iVyYyhJ6uywfsNGbPdMvy",
  "key9": "2yV6j1LMeFpwkc6fdTZ6PAH3utTTDjKpam55Uq4EL6HTGvLYC1Xyz9SrrU6boy12C5TKTHqMJyYS1K61Mwvr2TPh",
  "key10": "5EGHJgQQoy8LnRRTT3Duq2s9QUNvu4Nv11irHtVSNKnvaHEKwi6cMUCSVKVPGXKUEMpg5gY4LxEX3A3JVvQ5LewB",
  "key11": "4ZcZ2QZmAkUTS3ZMVdF56Beyy31VkeUakgmUvdE8v5LTgmnF8YBgALaLRAzuprGxXHqtNogVKaA9tPueGMWLvQxu",
  "key12": "4hBw7xrd1FDnwADmuhLYcw6RVxAEHySkphQDLJCuyhcR9N6z3WTAdza1R27qNLwHRtW7Wb3GYxHBDUgR2tiwYzwx",
  "key13": "4Yy5k3wEGtXSS1SiZZroQP1ovbw1grqcdGTMRd4NMTkGDeaaUQnTCggzN9YSP4Mq3Ug6PFUg8LdZjNAKuQcMvJw",
  "key14": "5F63M3JRiVeGf8UgQU87FL7Jmkp96rWexTL54Pa4WVWVtvJqcxzmCK5a3cpLHb8ioVbEMrejHzeBw9CX15c4mvLt",
  "key15": "3DNhasnfb1XVP7jqsuTdNftQPzYLnoc1aVufkjWkTNAb1YkEGvdNUVfboNEYXbrvmcr7bWhxSoje8aWzvhEURxc8",
  "key16": "2e2dDNBrg656XYAKVdw2pH8qJVJr3rsBdJBAe6XdQydAEEnxB8EiYuJnbyDD5C5p2Rq1DhVSnaFba14cVYRvRS2v",
  "key17": "2JX6Puecj9PmmMnzmL4yTYD33rqQz2ucuZAAxpmzoJ1wLara4VReWKF3AsW56Sp1PgXDyykJes8wnxQBDrwH6hAn",
  "key18": "2CnGn43XeRyTXGrCaTor59bDtVBHWvbS9j2m62vRmciPtbB891nYtQwBuLkpyeuDAYTKMTnbajqLMsCGzbYKX12L",
  "key19": "2b2fsYFnT1MjmjDEz855AfLMoWpqWfpcpqpsVEWkP9FUVaTLbxZnFtyjGwG65XSXeyqmF7c6VfeueSGFJqPyW5bn",
  "key20": "3pJFxR6BoMFm5Sp4madX8SX1uNhzwRru5EFWCTeLZiuKNw9AdLjgHv5ZdMLSYkSRE4QQrb5HyoHcP4mU4hk2KsF5",
  "key21": "4rRNMSTuRFyCmbRriYLpann8wZVCCNprFkeDSRGXUcXNeEvrmyVU1vzrtbcmTPDiEouDAyD9j16NWc5GbfdYbDuy",
  "key22": "5AJ671EC9PHAa21iKj6uKf7iwCPiWpktVo3vuM3UEEUZSgotKcukmBxoTJnGcvdGT9BPPLVRjyaP9Ch8pWyUsDZZ",
  "key23": "2cuaAbgd7gNaU27goxW85u1zxcJ1v6JSyLPjmwiJdc1kvmDES97or2HGTNMLrk5vZpz7bPkrZrmutwGatGdFKwGE",
  "key24": "5y6NhAeQDh5655okyxmmtjxn1s2JwYno5mo75KsFpAifVmMazLGnupoNXKd1U1bACx4xpyhKqagtjHvopKafjHeE",
  "key25": "eHugVHAmEAEYnvjf5gYvFnF7MqULwFHTmrvDCq5sjmaCjuCKBGukz3cXnuNThBWhKU1e7FGcKgPzBBReSqtFJvB",
  "key26": "gwNrvunGCogwcXbEEvAfFTjBauMAHrcQVNpKM1VAohSLcXxZaoBhWYhnCbW4cWaTtgZDEKmnmG64muDHCZYEixq",
  "key27": "VoTjT9GMErDkrMdWjyjQwfVP5v8bEmuidi6o1QYZfwUGfwDSU3B67iDa6NX9s4zcpjyz6GFXYw7Lv8ekXnP2NcN",
  "key28": "5Vo9LUyocbD7mogmVBnHYiWbFG1LRpDx6UDZqgJ6d29sEDwUGpHssnfiT6nPkeDQdjb3P599N8esdUhQN5ongqc",
  "key29": "3NSLPQHkHTg82Cx75CnqqKLhTnVjc956oUmdkBnqbSCQWkh2xSLPuz3t1Gi4w6dBmAFgEiEAUA2TBBniTWvVBD2J",
  "key30": "5tagVpZWpxQEzPwE2Fs1mnhK9DE3K4iRHKS5CUkDuuHtHnoCvtHJuK3Wj2e78jsoNdX2c1nJCtknfR3u8xqLZ6LZ",
  "key31": "TaSjLmx6dSa9qX9aULBx9MyKzHB7bytUzL3LFsbcn1wwNGsfmKPCyisPqD7gPUrEoUuUAJx458hfGKeWrbtCxGe",
  "key32": "5Poxo1YFkzVBqyvEeYrcJALy9szE9yipWx2Mnuu2v9dn8H3kC5NKH961ioNW2wobHU51fLfg5s861ZcrYaqrPJLJ",
  "key33": "P7KawgpoSy8pXcjEzAgms3UksiDK3SQMYPxQegQGUXvif9oSEhbadqydFuCYrhKf4Y117aEuWZdW1YFMCesPz7U",
  "key34": "oWG6B5RG2QiqDUBFb3Uq4iCsKkns5cSA5Z1ckiMm2S21pL5Jxt1cLAjBjpDaL6cquCb4QS8ZtRauNRCv4jcawDL",
  "key35": "5HvBsqZVGzLYsYHiSdA5HxUToabTAbkJyawSaHqzo7UA1MyVNkDF2QGHgWFZnHtVDJtNRpBfZJCrcFY2XP1myyi6",
  "key36": "463rHdvt11r6mmU8wgRAbP8BwkGRSaBcG4QEAurVkvMEpmxFGShhtxZizCUcMxVbEWYrcm6FCQZ8Uz1rCwL7rZEj",
  "key37": "53XtdmCb5rvA5Nc9XjdatLg8Fb9roJ7qk6BMjxaipJrwdPgJzQr7dZdefNRt1x2RSGmfJ9SnquBnoPzbHmnfkWjm",
  "key38": "5VA6vvHNKr8XwPeW23BiiKh9qRrjk9tPeWkRDhjZKBuUPCRmW4JmqanP5i5aUhMv8oYYrhemMaqTTgfqcNDpfPuE",
  "key39": "3wBRyxLmWSMUR4ste5QHo7Hqre8Nwizmyt6LPBbDThpDeUZiF1aGmaWn6gADuaA5ZTq2Uu6T1LSn6LJtfPT7FqsG",
  "key40": "2tepCLPerwSiH9tppbyaCbkocUHbmu7UGq86S4MBPgwk3Ej4j3ZYGWjtcCJjGybYLaCL244fAf2ApC6BZScYLSdy",
  "key41": "4Ld3CzAm55FnYv5NnntcrcHQbEDRJ24AqHtCGHAxg8yTcUPJi6D46jLap3ExeEdA7o5KzuRTAX2QnMyD9Ngk8EFj",
  "key42": "3PCcpaTygbpsMcQ4EJpw26vQS1soXsoU2bHyDnrsym2KC9erTFnB8z7Cm6hc8qLRrx9q3Sj52PpQhcdouoi6cPtA",
  "key43": "5X4PFvA5b7vqhVMBd3TFWRqKHgnhLC6h7YdLqPuynzFSKZbRt8as5DojxMaFkR6sKw9EyFThNVzzzR7XbM8ge8WT",
  "key44": "4U3nAHMtt8pAUSrhb4XrQDPGeSzk3iQ4xfn7gBu3pp4HKXy9iUgkqv1U8wR7JC1jamF98ePYU2HAozvqwrXFKXrK",
  "key45": "43XMhUTiQ4jNQkVRAGUHGpQszyBvdVSNrFsSoAgxtQSfcURyNJiyGY5omNHmzVKfGFdnToMvie2ivQWE4BtEnbwM",
  "key46": "4NVCZ8hCLdLHCxgwpnK4M6CqmHr54V1WQvFbnzGk7f3dmLDzAvuvvmY7Raxw2kHLKrxFLydWSFW7QRuG3prVsNP2",
  "key47": "2x6ZR4yZmdaMjzqMHdGUJqCLGpWyzuW71xwMQpTtuBfPVnukjwJKWp7D6gfjvBcywzGsz6ddPw73eMwep48gxpD4",
  "key48": "Ji3N7tw2Xw35X3Rw7z2pZiQQ1hBEtP7CvFTfgxDSKp66BCPLahd4p4A3LcAvmv1vjjdxdLFkZvXGjRnqf9CZXLg"
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
