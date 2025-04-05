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
    "D3egAAuLdQhjSPWYmpti66GFoEomXwRsJ4N6oPVzGgk1yLmWmWeMtM3r3ALvV8otrXKhFFwRLYgJuofDGMWtmdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fwCS4PfmMhaNdLinia6pYGi2wuBC3qJjWWQizdw8ipz9jzRwEz4JY1GSVZobwpPoGS2WDjDjU45LAGC11yhv13V",
  "key1": "4p2Y9XoCVU9j5A7Ybiggn74LxvMSSdseducvjnaDFrX3uQ3iTT4ecpNTq7VzpW9ws6L6XtgtNPV9czAH1UvfjELH",
  "key2": "4dVqiC2VanK8LsHQntmg8LtdQnXwbs95QCwgYNWJb6wdDeTPXzEkQNCnVMSwMMVwXX5Yad6VchQPzh3P6JkHNmJM",
  "key3": "56KWhAJBHGNrePM8MF3x16SCW8dn93t8UHDssr3vnkqUtXttNnZyBwM1SgoahhaG9K8Wd3wcxGBbUgoa9n9pHzfQ",
  "key4": "Qv6A2VDukfrvb8yASnij39jHUM55AvzjfZNFUUejN6LM995VPSoYB64Q5iSr5UAnMtTK88DcLcqNzt4fSkhc9kc",
  "key5": "65LoxV6txSHz3NQteA71pSBinKVaGrKoVDQK7ud1NwKC94tDRDZDdGADMdHyeTZ9KD7TYW9VHA9ePWcW96RM9QKT",
  "key6": "UmnuDTfiM8pJfbPn5eX1VwfnAZkRviN8VEBdAnqBigcU5sy3QTuQqMLCYbZxPwu8qztA2RzSkK5Nb5muJPZJiD6",
  "key7": "4W1GC29gh3Bd1aUAXcr7PkAhepdaEDArcKTUtDDddS9goSecfvFDGhfSgKgidGUhQodpYCNe8FtQS87sTcJinLCH",
  "key8": "2C9exLbhneUnzsJKUyPJMH9z4icgLQ68H6eKAhgYuN7Yv4gavYwXM9LzXMxffvRZWAHwvygVfK6bL1yhifr7dz9b",
  "key9": "2LWK6PvmsuGJQUUchC3k3RJ6FkXtsXpEDXofs8cT18HuG3uJdwbrJzvEqoyZ9GK12cYFPEQVjtx3HGQKKoA4tqXW",
  "key10": "2CZo2VTG6AFvGfez5pWop5bi6om3qBvjqXTW76FcJzog5AUtf8g9LrSizaDmdKR2GLPbLzspJwfAEXnA5JGAe9pt",
  "key11": "2bgmisbA5mSAmw7T9piSRzTPEsaKwFSjVb9ZrApZ6N4M7pQTwiHXJriaBQJycnG4XfPXAY3FhRP7QWe6gJfvDiVb",
  "key12": "3Ujdmtswdtb2FLBCAdvJ2s2RL6RyJE4dWV4KU2DYPyPVNnYE6aFtC29vNayZChejVZPZQ3fFDqHPCzqFDKQrdaLg",
  "key13": "4xDhT8vfdpuoFSQK9sGQzvQ8krcteT4GbyWuLKTb9bgaH2Vn728PyrxPTCp2gfsv7iyybSFw5h8wVhc87WZDESVk",
  "key14": "vBAN1rdp1mqMoxAsqG2ZGvnu61iao26yyx1xNGX69PANVQ6X1vVFHHPQ71kmmuLTvH6xGkgEiGY3nfHLoqyMzzP",
  "key15": "3UAMX1ayN3KgjfaBHvbUr3Lh3UBjgpCcEZbxomm2aMHzyRqfnWFNfCNP8U3U9UCo6rKsULuwz2JSYkjgLr879VZ6",
  "key16": "5sjkWC48XVyCkoJ537neyakTpfzhHXgy9QW8DB2JVRtajHN9bcccs8LEc1oWZvRa3XmPsqe4tnS5vPREVKiasRKp",
  "key17": "2WbYe7Ryiy7L4ueiRVuprAPN97vX4EMySoLJqsKyzDmusz9A12hTxfN4H8SkHtx8vPArjKB9oUf3GttfRM5R8cq7",
  "key18": "3wxKLDCiZuFWD18uPKqkUvQM38W68RiDgtEJrK6rzzR9JJkunXgzDRhgpY5o53qQZQZg5t4DXvS2qSTB7QV9QZ42",
  "key19": "5VFupVpB6sK4pcdefKduKQwVmEfDGJtQ7bk4XKLp1LN8wc8SoVbSvi8Adh3ciX8KahcGDNA92vLP4HmYaHPwBbnt",
  "key20": "wtkCTY5CSPfiQzHZozFwtVjzgqpmrdLsLHKsHtaLSvetumScJ2CPAT7CqKoKDhBLP8ZUetASV19x7f9mmnztWdD",
  "key21": "5hwJcApRTTNJwmgBcsoAZ8aimBfWWx1kT3fCoGMvoyjXwShwSXeZtUE7pc4MxqUFfgUd6LLSeKEErMHXvmE2yKji",
  "key22": "3YSayjRQcrwX7wFWhrdKG3pzLPHmPX6PGgM5JgqPgQaGrfng9nGJTSw97eA57AWcnTa81ffBmJN4zNiN9LgNr4X9",
  "key23": "3VxMfVVZjJqsKeAsmDmSQDWybvWrjZchsiQxxhEqCGRuEDKwxEwshQrdue7rdWHcp5adkomkj3ndZBP8JHQ8RHWZ",
  "key24": "39Dz9bPnxhpLHM7HyuSLkQWZFbvvw2QP2FJasmM2hoVcw8JZwa4Bah7gsNdkUoPVs5TXTq3UbQAWw3X7vUQPv11f",
  "key25": "4TX4rdEcmQMoRNjcY53pgVwkYzaWJAzHGnztp3kXpFMvc8AmWd4sM6oZU9EwFP3pQPmiki4dw6F8iwczqaz29eqq",
  "key26": "5KAniFMegxvQVowvoGxinFxwTTK9onHmbidQKBLx1ZzKLZPCFAvCmtEJHojqPfTMjcq3kJ3x8vNmtxDtp2E63tL2",
  "key27": "PP1Aj4tbf16vReNLF13EonzQUMi8uLPPBq7jtt7NV8YRGMGnVkiujPcfKmS17WoJdWCpozw9os3PXTUpUmALNn8",
  "key28": "3KQNzwqPgvGP4AkdHHndDaxGrim3CXZqfNsb2md2WRpyDTyv8XQ6co2AtuF6pJT44aVobDkZvq1yNr9M4csuJCBS",
  "key29": "3q6XxTy1gTm8AEAj4PXiQdhNF9CxEyB4W4YmWW4YcqjHWe5d3rdD15fzREzwqj9vr5syZPVyzvqMNkr9QihXkCNp",
  "key30": "2wca1ZYPZe3tMcNU6wchGczy2ZnGm6UB2qa3pNDR1Tza36TP7KGjzNXKHbhmyvn2cR4Su2Nqb3FTPy65QtNFsmQ",
  "key31": "thXqRV2vPz9k3N1NqeRQUQd8CeWETLGEv1AXkXQrQ4eRSVPzH7rPgeEVgyoSZMU71Jccx25b6jDWv67NHkGABxc",
  "key32": "5ZYuRpu3cUC8eycYqosWfp4JKve23qTUwJxYeNKoNnF5BrphiSA1DMcHTgA7JKy7Yd2KjcA9hrGxG4DrMGq5aH7k",
  "key33": "5rJJc1f7SoYfQfDmozSZmKmNrCKfyjf5yXyAG4Zt5wuLqHMNdp2SWBi4aN2YNPjEC4fzJf42YEer6mCzgoHzw8fX",
  "key34": "676NgFaViVdVcHhwnRbi8nMEP7xK2Z9wzEQGjvSJs2msfqMYzUws9QJj7BQw9xazeALyvTHwJitRVrz7AhgGg13E",
  "key35": "4TythSaFxsHMmxPyTHbj7hrPrkMZ9oacuthWFBEjuGASb66fWophyXpJH55gKenJLxFJupayHZ79CPeEpqeCipC9"
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
