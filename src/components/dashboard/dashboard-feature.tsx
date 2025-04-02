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
    "5EwAm5rYCkK4uhCN1vqdbRzgMZRtqwCc5FqDUGGpyocrjYFVS6b1j4yTzgVnUfkD9z2LWUEHGjRyY32Fi9atCfbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t7EGVFKZMKkdZh4igTqje3RnkmPaVVL5XoasQsU7ZSPiRhwmAyf88mLgK5h6KeWA5G6S3EoHC2iE52dNcve3aBz",
  "key1": "2KFucyfcqAKcXKLEoviTsx2xf91S1Dq7WCpFHUryA8PZvJ16CLFpiZmCUdvpRnD6BWtMdWceqsNDfHGMAKcvgHDn",
  "key2": "2koUrAYdR9LRkBsoSfN1174GnbkjbTp6xkZkT6WhqzLKe9oRMUAZmZ4mhynLBP5VHJiLbc4AvJGFLx8eCv4PJZvg",
  "key3": "5oWZZbHcgdXKb4gtukYW5pACHnuGB6rn1zdbvgVfZVKc53BSJ1HM3oNcsbsbZMNFJoVoDK7hXCrwDiQNXo2a9SRb",
  "key4": "4HrsMUnnKM7xnUcnTCt3KXTmPBvhc6mcK3DKJPEciFcDAtRPhkmGNAcJ3cxhqcg27pNEqry5vmXvFcK5vWTubRX6",
  "key5": "4pPvgaDAyH64BQx8vSZTYfchqAU2YpYPjN6KZ9GVHcGSxzhXq41zeZobmoMLsjLo2iAEhKBXZSFD4PdMGytJcaS1",
  "key6": "4CU5F8RD6mzGny3YYPV1Ht41XQ7U41T5NwZUGVSPUZjdJLrT3LYVnBVN6b3b41zkjRNJ9ZCa59bcfk8yFyLfBMVR",
  "key7": "2fwPtEQwXaGd2imxWb6nUoZin8UXnyXyDXz9xEMFqzWyv1Dmv3qHcPJ7U81ytVEnkG43G2TW9d2qEGgm4RPuxhce",
  "key8": "5Vgtz32VCNCoVdais9gF5H6bhqSgk7BbPULAjTqvspQ8AJ8GR9725kqdyrLnajXZjKTQavvKf6tVNU1n9aLNAa3s",
  "key9": "3cDBEmLvm6TeN5zwuC4K7fac9Tcs1f4tQX8aFxZ4PLvHq2DxPAsvvdYw9Xrc4YdrgsmZYrEMvDrKVCSQ9MnvsQMa",
  "key10": "2JjkwVhSQs2paYJ39uVtNHHFeJvfYnf7zB4B5WFa2hxiek4KzfskRzLZ35EdBQxAExpnpJ13GXuyztPfCfPix3u",
  "key11": "5fjuYcY9mkMPPpYch1UcVgAc6qjLz8a6t5bvYVe2wc4y2PL9KVp6ArTEoeTxgLGUrA6u5KxMmmV7Jj9RmVLwHkVD",
  "key12": "5QWRJ17k5BJUz2KxU7hvgQ9EfBMA2T3saFcbn2hDAsyzM7WWDbYLEdk2jZq5tRJX18krYYWCnW5tetBQrSQaK8za",
  "key13": "4hb7HH14N9Ct83R3kYiTJaSZbFouL1tdjXGooKzRTP1cjBGr1RZfGvmUgkhyFLsjVWBYq2MjQN7NTyawB93v4MNJ",
  "key14": "mpirXf4YRv8fbafu7fqtN28NrewvBTMDUzgFp6VxMkhNy8ATnbMXziuaZcrx1XFbQnQBhQBgwRtyfbYax98UGcX",
  "key15": "53hc9q2YUh773jGeCzXAsWf2HGYXNwZTKqu8TynTs6vjFwmm5fXXWuJC8pa41g6iTaXvEYzk3S9W4hSKc1nzqdFX",
  "key16": "RbZ2G77RGFdNVw8sHdfyHY29fUyRuA3cLPVNZrpCpxzVBi5SShRhZHpvCGxZAnUmGRHaneuXYxwtwKoEfBCrtdL",
  "key17": "XTerro9zE5xVxe79pJzhCMBQt8B1o1uZC5JgCr4oLnxUxk5jgddpwn72BLCsDdsXEG3HwjwYi7EY5LMYp4ZP2hj",
  "key18": "vA4eKCu71dDjNVAUsheSFiXyvN9rXmPa5WBAadQxgsKU7u99yoWevWWRmLnBnkFxeFeNZZJVa5HMoWLWdPE5c38",
  "key19": "MghkS8JgcYMbKkCsZrvodNMZKzdBD5DaiWEDXoSXEiCiJq8DVBJZNEoBNsMy39M7ARLH3byHEerjL7ebK2NWjVh",
  "key20": "5i3Kac64QP1b2gVx8a5miK3sZQbtQigSJuBnCKXFhzvdZuE85kUfkMD22d5v46ooFMCakNij9bhRbtgS1ZqWStEG",
  "key21": "4wW8ubBG6z3SwkhYdzcxnav1Z3QvqnZZ1Q2mQztAcPsL8x7BP5hY1v7NFDYY5QpGo6o3sxbT3FBhkvwQpnipujNR",
  "key22": "2hMKywiN8CbSYbhiL2gLFXAWvhMpE5tT364oHnTZ7QjK848zsws2xWW21W5qSfvZMGZiWr17tCmSRE7hqGNBffGJ",
  "key23": "5ddMgqKmY2vhHj15BhBew43mHtCqocWfirMjnAYb8uKdqgN6uGmMFuLTD83TZdGSNPZeMcz9oFe9qsuXt6KZTzfB",
  "key24": "3EsZ5doXNQcWN8UiZFgR9SF2X22jyWRMM3WyRfHmRiMkFG9S6tTpvv25CYcdA9w3QLecGA2cv31DzYHiPQ8WvQ11",
  "key25": "4szEyYjaCveGNRNq9GtiDiGnbDLAeHJedS5VXC1e2DqbgBPhY2RmSLBgZESNYsFmyjWGPcHZyAw7KG1tJhfHcC26",
  "key26": "5vq8WV1qQ9cvzBPdoS57vQgjX24S6oUjVxCuqzPhZz65tyeqUkrxf2m3ejisydTW63RtYyLyRAMbjsYEn35tPfqV",
  "key27": "27CgmyQ7ydsSTf5NuQetEvCMfwbgdDzyyQcy7QEwmq33sRobQo1TquF8pHJuEv8vsL5FvVR5GgsrZawn1gdTtN4R",
  "key28": "2YnKLBvenS1tMR76WLvrNyKwMM92y2aFavakuufbjgZwHCAg2xmXrPEgcNPRha4bTjDn2NVjoyoCPfgYoSBKYjYD",
  "key29": "XwBkxcFxwewwDHdaJX2L6CBtEo4AvA5iwXHhsng5ha48RaoSBZoSnJpa5t7fb4kTgaQvihmGMnm4saUBZRarKXQ",
  "key30": "w7exq7aqG6sz3ZEdAKsWDE4tqHPa2TyaqzUU97r3yncN2smbCA8VeT138kMEBe1SPyirarGpLcKG5N6ydt6Knxh",
  "key31": "HRFkqZo5BF6uGMWRhkKsCJ3UaNu1o1AJefwa6oosHtA4zBD5UFwah8XZg4jr48BR28NRE7SnAWYzD1s6LngGDKW",
  "key32": "66dBSa5ZF2x22PKy11wPWMdagaamrwLW7srYf3d8pi3CKVsqDYLB9FgqJACE2bGsVQWT8aVx418DpLjdPSeAATg7"
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
