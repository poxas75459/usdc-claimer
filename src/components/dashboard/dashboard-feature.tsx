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
    "2rJuMbtfYPc2taXpfs5AzNckv8AUbtnfRTndzaCy3rXz7wuCRSEjKuxyb2YYi8ZcwFwwUQ8qNuxcBjRW4mM6QVLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w7GQAZX3WbpMhyvkEuWyKNaHANWv8W6YovJLuaxSM2YVurNpdRoE4BDfXg8GHfwKbfQj1B9wQUiC7Wi4L2v2u7V",
  "key1": "5mUKC2tv1fSKTYhrVPRLdCxjZ8gu5ZQG5e12jJ5m49nyR73aEebfrEeRcbVLsdENTvceDnK86KLTAyCDXmdM8w9j",
  "key2": "3Ewd8tHbubEsZzreubBxm18hSTwxbfLUtb3kGPdXMWS5sG7cnwNHmtbXgiSj9hTnnmtBaZcZr5insLzjDg6g8r8n",
  "key3": "5Z5KE9zVCWGTLFUWcMKSY4Lth46jZ747mf2hshDbuAvbtgXaaFQb2w4axRAzrbvCJgeGGQToQbjefaHEBcnd6fnA",
  "key4": "4m5tvoVJeH9jHeCAT56MKhinfdxBcEcQQ1VNYh5zY3hQwhxJxeTiEyQrGvkjh4FDK3jLig9XM6PAGW1nAhYKZ9SV",
  "key5": "54QYMBhMvkfkZvXVft2JFMmmMdPzC815QeFFx8neEh8QxHjFD8DKmiFyyt3CqzLPou9o2awYCHvDfvgB7sYDr6wj",
  "key6": "5q3Xfx4xdsckJaYF6EjUhzaszdyFKkTJiYzJVJWWNucu3ZHKTRnBXa1mpbyUxgofHv7KggatZUa68DEKpFLDfxEo",
  "key7": "2r8XALkRysnF3esaZkKWvw2YYppjKtnaMcSBqBXtw2BFggkaMpn6JqnLio8b5YHmzwXtTZgKRz3mvcyZ7zT7stdd",
  "key8": "2c9wxj4zkYig4ddZMgWY7956NeHsBn87hA5Tq17zEpA4CpA6Z8dR9ienMaYdudNYgrinhaazgtAyMMqdq5r7666P",
  "key9": "szYcn1vX7cPFnB3TtvzqZdATHF38kvtrfnSFh1cNNMbMvyyvdfM4CUDDLoap2zDWwG9ZSstYsERTbPreD1MJAnq",
  "key10": "5saZsjEKqMfFjzKC5fRtSkDH8pwCMmSDa8dmWU6DwgPYMw8eThkydd9vnjjPHv8LPBV56KTVT7he5yyznCyx53gx",
  "key11": "3ww1xJ2XLM1QdwHvpnGLmxFHtLukEN4VJCJRYBWieBof3JcyreNdAk7sncfo5wAWetDptemfmJywam7N2JWPiubY",
  "key12": "4BqGdZA9bLwXnmFVAXReAgrL85VC3HL7tPncAfU858VvLxfM6NnxgcoSJ4yKq982NQqh7wMSpFzECL9F23evsG62",
  "key13": "2v8WqYTqZNcJQ4kTEBcagx8NmAwQUtqVgYHWEHjtAp27cQBywPMiv8YhQQCZ4ywwQH9mE58bMbL727JNDBJPPDHc",
  "key14": "4BNsB2SSFngrZpf95b83F9rYhmSuNzGb9XTXTYvyej1EEjjESKyQt7YuV1La2m3TV5YEciqyDFsjmHtfqZGsZ9b5",
  "key15": "2ambLSWXXkgF7jjJU5mvJ7dRRVJHDURSgEcknmZbuLuFcXEBSVmPxDsqG1wojDbAZkGLUkBfvRAeV7DxAZNcocad",
  "key16": "2vRU6v3mxBbPyn7NNSnekSfqNXaAAyAscGvGijzi3eKSVQLh1HNSN7u3nnctgsy1HzWEzADKGVPnn3CJYNiAxgB6",
  "key17": "4SFrm23ey4PBMZBimdfaXmYBwiT2XE848KE4ztX34EZuKqdyyZRbTkM5k9oWFkpJQipKZWVx4nteVKrrTcHyS2Nj",
  "key18": "4gr4Cs3xGQwfutdhVkBtUDg8GxdWabrjRiFtFgSeuqq8tTA7NHojaXkz2igbNy5yUGsEApVBcT5tBrQBAFwUvfPR",
  "key19": "264gFJeaeWntCzdXMuaPBYV1J97a3CU5mWpBQALNH7SyN4KSV77KHepMG7oR8BgJx98e4oixhMLzqVi3KFU2xgtj",
  "key20": "4n4wgXNYrwjnRxMnT7ah6suZFJVYsFYEoMkxXj6EjUDoAGqhJVFuQJCJTt1jrt17saquMHzHyJBhyc9LsetYqSgN",
  "key21": "6RAToRxMf7kHWiUxgvixsTNZtEn2kbqhEb1P2cvRPCQ6MfbbS2rG4GC7gBhDxFyxzyL4aBS44GZQZzDoueRMWMa",
  "key22": "4zBgyY3vfPs8Gsx4Mp4rMB3sqf6aoo1psCyBKoX7tft9vki9eKpm8cixbM6DUWs6VeZJXtyQnjVk2sNkqNhaqcyB",
  "key23": "2gWjJDHQ2urAWd74b4hz38qhKsw6S5jhMkdWVPdXJCnq8bppkKdUvyZf3yw9LJDm2zym1VemwzMMp2eQqFTPgESE",
  "key24": "5TW2zjjReUd4VyDUbGTwhVqB52DFWUPzBGm8uNeDR5FyWfGQrgET9pbFr8DV9Sk27CAH494E4rkF6REhyZ68TTSz",
  "key25": "2Ntowpftw7wVjP36npK4ZbVfveZGHdCBt4wYakRAH9xZE2G3r4tCMXFycahE9M63SUBroA5JS3QAZcGrwLVMAPzX",
  "key26": "4MZD2pUCbmEWAQUyUKdSx6ruBzBMhhHonAazcYLu5a2r2ayzKUaR1aAevixhnZ1q1E5ZCmtoRfdgaf9hjCmXLadi",
  "key27": "3CGQQSG7FQaKjW8fM2JVuHr5ZSrYqj3xgHTns6kb5VbTxQ5ZNtpgbnDbVfLgbZFgrHoaN1Cskj36HGBCbh4aU1Hi",
  "key28": "2bUbJ4xkRsUygzU122T6UiqxxBHNtuPmPmFB6zydgkFttdauxsjagGMnfAbvxx7naLmRP5oJ4emJMAYk9onG693U",
  "key29": "3Rc7P9ki1peotbUn94qiqHEwaCrtQJ2iyJZTSjGBdG2upYMTodYwyq449Rj2GbMcs9GzMNG6naQxShTXaErbg45P",
  "key30": "5koMJfX7QiUNj84BvPgzmitWvYavjsesw6jV2s2xn9jbkirWGZYMmvcAJ2tPJhaDXdNBRHdA3g7523Mit7kpg7qZ",
  "key31": "3QpPwjbcrs4MesZGGDjumfA6AFFeWLzVftbG1yG6vTe5CvbQ2RZwEiJ8NtyAGopoGjpMmwvwZ1cAQQsNtBkSjNED",
  "key32": "3EFi9z2xhzp2vTbY6RnDq8Bj9fL3XCrxvr626nZGCWodm8g9RrKYEZ8tKLNBZ52CQvCyZmVfeWVRrJZxMdGV9f8H",
  "key33": "3keCqum2ZNSXSfHHCHaoKHCcjF19jjuRjrSDJGA7G2d2fhueZ2LVPKs8Swx71twAVA22vZUBeCdSsw9rrV2iDacJ",
  "key34": "25JunVtc1225iqJpaTN6sJA4rjnVav6ZsMhikLbhAKUqcSyF7omQ9UpMFSChAXPVfVxZEty5DnPjNrodzJqwfziR"
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
