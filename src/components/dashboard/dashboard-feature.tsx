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
    "3GWknJ7hdZejE3P5akADLLsD58MCQTFSAuKsxFGkir9qzqgAPGZ2Hd39x8DvUKCYfeZekZGeyXQwD22LYEuZcmof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S92GERVNGJZTyT5QgeUqwFKCtRkqov5bqLfUvqkHJWS8VWEaaG3iaPfxdx7TtTe1q2V2VDRxkM1JAtXFDjUXzek",
  "key1": "2gGQgry2Vxgij6irJz2ibJM2b4nhSHsoR2f8jJecwQfBise2wWTPdoEpM541yiReLr52VCV22PAL5zaKPj2d9vv4",
  "key2": "5RSYAmq3KnCX6jiyBUsz9eGNdruHnwKymZZrQNMqVffz64VL1fvYkP6Fq27d3qr4q8XeZK5e96qNFUzsujUY7m8s",
  "key3": "55U8y84xH6vviCNyujgn39vEjGMFF9j2WZhmTxaKj3r1DKB6dzL4bMcYvgqo8oJmAzVcRhecv8b9K4YXQhK4qAaw",
  "key4": "bFBhfju9YbZ34GcjedXmTzBgkngiqGN1LDGipUbNJCNXymdCDk17NB2tM3xBWuXXdPeoyNHS5ryF1Rt5Nd6aymE",
  "key5": "7566vsW28XpP2dke1S6c9HMHcMBySTd7XvWKg94YbnxgAezeFNCoz15YkK6Md6arhbSG5dB1EeEHaxyvf9VapNR",
  "key6": "bBq3vWGUvvB7sLuhaiW6LfgyAUCtqRaPoVxpxj5SHPjGRAT9RHDkpPybFpRJ4ZpJNnKPhSkpGkGxfnkFHAMAFjV",
  "key7": "4YTpjUijpXEXfyRHrH82zX66zDHjBjjfZvYM6PVBTke4fD4n9Xf1upK7f8vivxkQCt86ho8dC4kK6Hr5v4E6nNTe",
  "key8": "5bSrmJm1E7encMYREU9cWdTa8wMPJikMRNQmZGzQVMJGPoQwjBoef2MTa9ag76DBc6KCLnCMzDXNZd24HRmccc6o",
  "key9": "XKfS66Ftrh5XnkhxqLDs1WbDm8y474gPPWY7PVbbnuBv82qRnZ4BeD4cC4WHKHMRjddLnrKEgCW5AyWkLt1NCWL",
  "key10": "3rQJ8qYDjPxatu5FdtzF9EZuGneNhNT7EswpVEz1Ah4TNUhZ1GgdT23ctbRHpVi8LrGQaB7B4bqj6idr2EGVNB2q",
  "key11": "3CmZ7BwJMaHEfMRkP11FiEwb8BQB4B9Geyqq4y9VPajnQ2V3pQ8pQYwxWAMLA1pMydRo1zt1CN6Bv8DqXUmbR17D",
  "key12": "3A1Fi8b8cKE5zmeAmQ9NajEAoX6wHLuw8doL1MPiC8GSFrcoLCtdBh9tAcF6cTVWx45xzHqG1b6Dmqx5nNFPqcQt",
  "key13": "qYRhwwpNrBpFBeNM7sKCsD3oWfLZr9T9wUuBfjqqidjpbPAQUkEqJieZHFFBdvcRS6U2LcWD448oipicBEMWUSD",
  "key14": "3mjL7hf7gBooYWwcNdSat1ALMADdygrnVcYoMMX9MRkC9ivoizqzT4Bro2wr2YPZ3ouRJCYdo7PmZ3bKqvmSYqfX",
  "key15": "3dcNqcf9HXnL75Kj956moDz2WkonpayXEmSdBtT8ctFUqtCx2PZLQBHrj5GoJioYqxMjjJQ1vrdvcNWcTsg9iGLR",
  "key16": "4WvVk29H1MfYBGcfFRsD2sFXMJ49JWpLVwK3iPqr9dq8FoRFeB6dtA3kVSsgA4zb56N36Uq3hm6rpHD4eDvNSFXs",
  "key17": "2cnDMW8RREeffAVEGuoJ8DicRzEarm5udsuZLxuWyuPHG5dPFyaADib4ieoDextzFqj4CN2EZxkCXXJXwDpyYumQ",
  "key18": "4Syr6tpUs4Nbbc9RRMzzn1d9XgExebbyAMg7ePykkXcSkgJCEUogqw2Ci9ixSWeXqV54B1UnrwY19FAeQcqbSQSQ",
  "key19": "yAJJGpySFRedGSLUVbsPjtR3Y1Vr7Qi7cnng5rurjK88NcJrsS4DfdSP7YCDpW8Aw4j9nfdsgQkY54YS3kWobfQ",
  "key20": "3XULQkPsua2RSbN6MaENPBjZKLfDh54fTcUS1DACQ8a5C4Xfnf9QcGu1Zkb167K26i6cGwSdJfp2zyvnBVVJAFev",
  "key21": "37mnqNbfcE9ZgqgkxcuN3yFjVkUdjQv4yD9c2EJyiMAcdbdUQF3uh53iaEnuL4v66naCUZFgfksD8NPv34vPR9bW",
  "key22": "4so43EznZR2jCc2vNaywdUMu2vZzAdqmF7dvoU2WqBRaM7mdmKbQPA92izRPRrPZTbuGSw8cd6JWPn5XVSJQYt6t",
  "key23": "gUR26a2qEPRKN45F22kZGSR6n1zfcZJvPWKoC54KiX245xYkeb9L49w5R5MjKqbwV4v9jBfNsisKpiLoj2vjRYK",
  "key24": "4DPpfvVhZRpgL9fzKQQ9LCi4979MCGXR63Ri7W88jKNW9JByuCuPT6msWUakH3TLUjM5Mei7EXQSEo8MnsaZvPLW",
  "key25": "5pkz3sSJq5yTCNXB12H1sz6zeYPyEfwH2abUaEZJfVbv1CCDxxuaghVEjqXYeUbSLk3VyMp6cmACEvn8N9wArKCL",
  "key26": "3vgdn6PuCGSHC6i9KsW3PBRabPDNjRnYpwjAhbWocPHtWf8f9V5SCadLdijEU3LcifGQDCJNsNrmUK3DRpcRuTtG",
  "key27": "2yQbT3EYgf6PKv4GwKVrwbHW9DsbPm3t9ZcZyGLN5A7KK4MTmQvp6LDWsBJfh8urG2EjjaVXMLBcLENi2BNfMMft",
  "key28": "4nGhymfjVcfRPDxhyVbWs3v3RXm2SW84CuLkHP5NrBuKvgWa6T3RZbcFpbRTcG1eLVbuTYmx2TRCXrQSWiVcJgb7",
  "key29": "4YLqW98YuaDqNUiPFDXpQ1SBh6ZWEGQa3NtzMT3Uzsi2HyTTJCXhuDtfWuJyq1Q15dEGJiiXZtSAitorVg7pd59e",
  "key30": "3ZzpdfbtcjQM92uzRvg16XSFzDMuTcdM4MnN8jUTL4HQLcdSng95FcDigDcdazdLE41cTPatFDm3hXgPuTjL7U3G",
  "key31": "2VqQi48SGKCLiPQZNLP4Br3wc7vBxYuJzVgxzXamEeT5A6UQcFHmGDMfvwD8myRGHin9f2XC3k5WCtU2BqBu2AdZ",
  "key32": "2N8RFMpQZqW2Dukk8DaM7NxJfLEejr6XnpDWeaBA1uMfiwY9njPUkFU92yGE4C5YtRSeJmDi3XzpAwb53N2dWfJa",
  "key33": "22MvHxXgudPNVbEK1VoXYojFcuq14mNi6Jq365nmcMKg49eat8sjKazYs1u1A9ctEb3iioQuCkq7ZWUHh7HSoNHP",
  "key34": "3HgRZiZSWoGuHEQhUBB9vuyTXi19nnBSBxS62aYa5CFzb66QNRsFCVY63Gvxs4CVc3bH6o6dAtgSgqeCdvpknydm",
  "key35": "5fmZNGBVJRh7uL279SgnCuLPWvJaDxpcWmsRHwTeaTPUP6fewWQ1bexkiGcnyWsAnRHGDMGqHnv5CNjbh3b1RC9i",
  "key36": "5h6zuFHm9E5ezhbxahtqr3UKyyxLZf7St7CXNAmXnM5mem2Fd6oaZRVNEd54osjnhYNq2xHykfzh1pdTbxr7SAMb",
  "key37": "2p6FtkCWdTuQHKJwvaWdLkZpu3qYTrxiHh2rFPasDNWsfA8a9iJvU3b33Ri7wBXHrWXe9FKA749TCKckhBfsSJhL",
  "key38": "JngGL1uPpmN56AxEfdDZc7FLhjcRhSDi8Vv46rMV5MrmebV1HU8Yw6mQj3kv7KyMFYkspF4zMukrw74WHrgT9z4",
  "key39": "2zW74R6CFiye5Q48CAzGWEz55KyfRD9zJrNqR1jpFQ49AJDciEGGPbv7RLDdH8QV8BunzcffuqVnTkHwAsLN1N4M",
  "key40": "2uX4SriVu3BWq2MYaF7n5BqH73EsbKxez4UY3SDE4HAQgFS6iJCu7F27cGNSCHCFak5SBe7CkLyFXSB4hR4Dujj"
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
