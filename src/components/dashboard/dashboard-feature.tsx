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
    "59NvPRY4EZFvvQJVMizWZAHefSTL3uEffWhvNsFMCDLFGTJc4zfXebiAvkjWyUVhXRo2vsdNd38UJm4SEDAAgmb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aJburcGoQ85xuQTJpGuWV36pV8wtMw6pLw9P4qC4ybJeGqwSZx3ASv3ch13jZLvGwD7CMe3VyzLsTcUGunymvcv",
  "key1": "3bWHuzvFKNsu5bk99WD1TQtTtLPgkYxDRUeKL82Q2aAfeLJJJ2UeH45kwxnNXiHsLuJkLZMBTHcRsEj52DWE6y2q",
  "key2": "4FSydR7j7d2vzM3jpXdA5nvnUFkRtCHj6Qng5Jj8ErmdFhGxwLKKejdLWn5a56yJ8iU8WEZCSY5nMXHp24w5hTnD",
  "key3": "4KqC1WiXbECBWmFEop7HfpS8JTtzT9G5ZyoTivLF4h6w2mMadTotc9uTXaXNzvxQ6hp7VGRAumbbFGjHtjfn2s7G",
  "key4": "3L8kqpjomGYrmXLG3CH7R29trYnhA5yprM4YZGxWcUu138M3fBps4eqtRpxZMQbYfR873nJCRqo2vDKat5DAgVae",
  "key5": "5By6ZhAEw7XpAW53SLk8vES9xd8k1uMGLnZpiV57vSBVUAtDVXTqJrcrXUP4wu9PTTARGBcQbmpcDoSUBxkEvDn8",
  "key6": "5AEedjqW55izJK4UdJs2wa6TJM1tUWdYNkhk9Cr8Buc2Eb5CQaUCokQq4w51ToKRBzC8k1ZCERnovqz5KbpvJiRc",
  "key7": "22msJiEVkgK4KcLg1VH3LEkPi1XUwDzLazf4ZD3nZkJB2e8QnBPuKibZbrYmGAgdePnR5wPANBZUrsNYxNkyoNLT",
  "key8": "63ZHfPA2JgGasmzHofoGt6cDZR127WQ5kZMSxqDzeTs3SRWfaLHFtuehNntNwjWz9Y6FA2KhaRSXLEkXnJ44v4wr",
  "key9": "5SXjfJWdK4VCpb1bYqUC7uqabf3jbPDgmGWrsa2DtYWCWaEjeEBXs5VSj5VGG5sCZfKNBH4hPutQA8g5tym3EmrN",
  "key10": "5vFRbJiMJhNK9n7Efw6V2qNccTCv47PdNzc8RZNzBwXVtTLKEQ5EgHsRPftbMNsFfVwjoqVhTeDSXVJM2fWQB572",
  "key11": "2LfnusnfBVKBiTva6wxJWuqn4RSt9faQtnttNtZ8xPKcJSL1B3CpBiT5E76AGzvNrCbrow44HfJRLy34YZevJLYV",
  "key12": "QXWALQaFtCFFSPvNpaF2sof4QaSk2xesidhzBuPDJpPxBSA2zvAb62tJh4kPTcTjPdKa3ugpMF2MnB4aq5TSJer",
  "key13": "5eKUL9eYtiU96CCb2werDXw7sz76NVBDpS1YwCRpFR1bGnaWecu216iikQYGqEYT2BjiaPyH57tbonZjTngbex8B",
  "key14": "37vAMmKYaMweMRfyc7hXABKvLWXGza7pP2gzPowoyxymfpTxWdbaPnfstDUpEDw5ZKQLzyGJ4gMMjCaTQo25zRx7",
  "key15": "bx8zhGMpx64UoTnJgTr97NH9J28CtLacB2pijZZYrj9xoVhBrB7WTd9zZZ9aYw2QS465WwGMVmLUzUJUn5pbdDh",
  "key16": "3SberMpPGEAzMiNo5o9YsPYkJdGmeqLdDSPU9JrxauN8hdfQJtoZex8BcCzcrRVuxumZgH3E5Nc68Zzc8UApcN7Q",
  "key17": "3GaAdjbUKdCdEryfzsGfDU5e771AD2qPm3JSufjj6g88Adsm64TZad2s39GtLpAyG9bZSC7KJ8rGfxfdTb2V5vYK",
  "key18": "41z3FEBSXfuvHPKUacgYcXyP2qBSQy3Ehg1iURsLsp667dSX2aqawRG84yhoTcM1RaXTdu41swrdW7JUaKHRswFy",
  "key19": "5G86ZGXYyDhyLGwhxKQJKYwTGNN3kkNuW7tL3DhQnTgGfDduGF3zALwN6m65fB67nRypuXWrF3xq35BoZEaQggJw",
  "key20": "5jHG69cn2khGxA1NrsrdQdteHt9e3v3HPmroqrk1fvGZ1aTpGzaVSM54VoAh4zTwhRbsGzXhqQdrrXtxMFtrZSY4",
  "key21": "4h5rg7eLLphMABXDZpJMNXa8yD5dtNGCUStmUqBC5JSdGVCpqSRAsPgU4gXqs7g5fkVrHHDsfp87ny5ckgdqCbNk",
  "key22": "57MuWmP12ViPu5xuuhPco1ZQZgLbMdeL8Zz39QDXeTf79iRW2MPKkJkvLfaXEUpb7cyQ5WohfPCGG4UJzsFaG5mL",
  "key23": "4hfjskvhB1f1DVxxV6Ri4UicwnkCDPLpjCzx7MTVx7cNr7b9TMojFoFNZ444322hPm4A4ucxqYEF5n6CNRLeR6ps",
  "key24": "4BjAf1rgpqwTA7L5CmZxsFBUTh9NKMSF15hHQPrMuQKxXPnTYZyhj6y5Xe9YZgHakG4gDw98czARvmpquTQQgCSe",
  "key25": "5fcPz1xsQ4tVsf9ooNdtMMubU9qaiHcBkYthzsBMQRq3rmchx6JM2Eppe4xcM6KNcmBjhf3u3JMsygM2tr3FiJnh",
  "key26": "4k197PMPmfYeHfBAoZ9rakxqw4jbEpTgPVZMDV57MhUB9sucd3FwE8SKBGTGbLrVNsYowCqb1FBfpEDhWv8iGQC6",
  "key27": "5eiPBjVqvkdtyUKbif2JjYWHZzSGJVwrcNPRARyEm4CTqnue6FFLhGwJGPYsjjvsgtboVNohmePK52JE9QhF99zf",
  "key28": "5i6F1jqbM84AxkeEsEvD7rVDr9wNr6KKeMG3taauFeLccxo64As5Q4fJta7nBh8S9933xc8h62ewk6GUonVfZMr4",
  "key29": "2DCiA3Zq7f6g3BDKmqspYqbY5fGRk1xuEmuhDcNWgHKCMk2GwkqXox93thPZDo9HQ1QZavczwpse2j8z7ZwMSaBF",
  "key30": "2T9DTY8yXzLjSwLbHNSGXwrKnwWDJdVhmhEQ7PaH9FDJyqht7H7mPYsPS16FVci1xoXpqykctdpnTVzFwnKd6uGQ",
  "key31": "5PZfk8f8fJXJf8S7ShMAspxrdfgcxee6KbwHTPNQNnWen8HV1pFGjh4LrnaZDUHCoFHNqHaCRvhEczTtyGhi1B34",
  "key32": "383bENhK6hTLpSUV1iaQMn4fUSkqkd6Eh7bwg3uaFPQDZ4suxM8Cb1hv88NhJuPZ9YVFn614UALjcx9JZHmVQPn7",
  "key33": "35Jrj6Bu3YS2qDaHwnQTEoXUpuQUpzGoJbcC56mut9iH7cVu76naAg8RZYWgdpCfeFr8nBNxTnzpM3TyfHoKcWTR",
  "key34": "3rPjFzzq4m9fb815BjfJEDG9AxL2rLXUnGzW99rchj2BD6C8CDKWVFeCyNeeNbbBrAJ921xXtWFjX6zi7zSzaedG",
  "key35": "3C66ia8oiM6KTmcT4cWhoUv8YfqTuA2d7gDXg289W92xi3frqMxBQEUHBjQKdSDgVHanLxjDDmjcWzAWbU79CRR1",
  "key36": "5RxfmF9qcLJ5YV5BpCkQaKpkDZ217tJ15pnfuhfZ2DAJ3d3dmskB5nWLAK9dsjMf2rZzhfmipRVLVbb3YefR1PQZ",
  "key37": "2wVKrheeV1xvHff2oK9BBHqLjAYadyT9iA12e3GirJr2x8KgDEuNoQ22W8NhVDF1njCxVNy3ms3xNZu2UFu9TVwn",
  "key38": "5GPJ7dAuJ5NQrjrrsZauveibpdwmeUFTU511DEfJKn4VrpHvL4QrDe3WdMcRqQ1ZgULUhnR7ywV4T7gntkrTCTsF",
  "key39": "5xeG4d6ChKWhfED4QBvc5Fiw6WGm53MajhNnFoVX62iCfsVgmSb9EM7zxrPL9bKdx9hPzpXkf1ckBUZvJbAnYqXj",
  "key40": "3NE6XT3p7m7TrXu4BC3sxoujagTXoh3dGWaTCaBUbmjDLqsgNxza6ZoL6Jb75rLxE8ftRJBdXr3HAv44kB1TL2h4",
  "key41": "3oCX1EBgpS3hRGZkAKpT1328E442sxwapk3hmsiSkmgnfU7myoFA36h8qF8VoDib2Q1SzBsbcxTcdnVeXjKK3CJN"
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
