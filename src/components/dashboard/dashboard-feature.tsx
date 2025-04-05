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
    "2SCzQTsEX5z6TLSijoBrLAW5pPUa4ZjCmhXdUHo6T3rRa2kLzP55vzs6Cv43cz1YbAJCyP8bVKpTsFJdMLx7CTKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vshsjeua789PTs8RCbsCHNvpzV27CaZJQL5XZsLH7nhUtHH4vu4LLpDSNhzUq9kk3VYEEs6ieoe8W1DSfjh2gye",
  "key1": "3E1ejyYhRYZ3efReRpHuXHmkUumEJeWb6ERZXNuDssTjMN9feqMYi3baMUVxfmPAqjGMP29Yqane1Mm9aUUmAtAo",
  "key2": "61R2RPznDzrS5ipJ5VVzmkWHmxZWCbParTEZQFJYYitDiAmbptKgFJsaxyCeNaCw6M4zN1zt1PqnAn7nHNrAKCsi",
  "key3": "4b6LARZhkWSAsNuxdPwfkDwEqYHrQ2TpoczoEVARKvYaZhQqmUQxVkmZ314p2KjizBLk9qneCY7D4JW3LvBUU87y",
  "key4": "4Dc3CoL9ZgLJ2DTwpMWD5StTYLSe6VbJpiHcsYjFU9oCgrU1UPzXNtL39QgvYQ9D1GnYXCv5SqA21dNjDct1YK9E",
  "key5": "2ciecXcpkn5hrXRV5s2dpfR8SjbUPFg68j24by9fWnX3beyN4Uo3u2FciK7kbnpp4fLYFgVW9KybMFqkMsnUqT3x",
  "key6": "22QpEWZYTxi6tn52mbw4pVs5sN8DBVxZmLPfJatm7tGBHNednj1SCcUVfi1dhXbaFg4bTVrEFTdxMAhZUNAjXz6Y",
  "key7": "4BubT88iGZBaWoeqtDkp9e51DNVrBSGzNuniZNwLfkzZPy7FLtfKH81Wvh4UnhndNCCAAf49yh4xxZitENXMY6tj",
  "key8": "65Ubhm3koyT5YGWmvLDHxoWvjVH3SvwGVMH7GTHnF7qirQ8t5wncbmNEArB9yPwRE1Yo9s3HBY7PhmDNrndMCw3X",
  "key9": "5AkxPGzuyyE2aPHzf5TUgUocxsMjNCWENLGAYrWEDGAdkZZBTz2oEsKmBeeGn5wxExiu2LXyKL3X31DSkGMtdUzk",
  "key10": "2hKknq8qbrftSjMMoXvAJi9Pguw7vjibLNGEQPjKx2z8mH7ySh7S59yFyLTQnmjQCPUrwYXgT1UfLAVvnz2MCd5U",
  "key11": "237N6paheH1t6UR1mBXU122NFboVX5hUmWxD8XVf7EkzwWwke3ezvwJQa2HA9Lqui67VTw9dVJ4RbimoH7SRvZh2",
  "key12": "4K7Yy3DRb48JPuacrLps9JyZo8tnomTkgPFMKs3KcXjVfq8rQMgJLRUrzXfxEjF2ig6v657Gdu9U9exZRgMwcxEM",
  "key13": "45BSeeBjsxzNf5aW1sz8UWAKjk3LgtAdawjyHC9Cv5kfNLUpSscgKyBRqoZPE9bmJSMHCMDzFeFSf6MxdNP9A5dS",
  "key14": "4UWNUPkgjrXvXmLqEAv9tKwbAh4ZSZ3x2dxz5xuEVtSxsaezTYhuvpMHTA3q2XYiz8QpUjQLccdsw8i9344MyUvp",
  "key15": "5mkMUjBWhXRvFXJd5yRY8Shf1n7LSpEKdypKjne7J14j7tVptXK2jFZtQDstu83RcVhzHqh2Spqz833FYUFYBGDn",
  "key16": "5ZwDbp2WdGcCm5iDrQrUJKoM8ndWGuQkxLF6z4LSHuwzeMvDpMpZyPpXSvTRnUpbpPuttEGtm1Qec8sRccF1cx5H",
  "key17": "4YMfGJ4YWH3G2zBm7KGxWmEJbELytrMvm8RXkCtFGWtnUCe6Y7TrUx9Go8U1fQCShZzH3jjAqXLWy1tBYgQcXVFw",
  "key18": "4uexZg53N4hEizrmx4xpLUvZr1AdFbNRjnETZMk7i2i7ykLS2G3Us8wpDwt64iuC4usMkrY73hcEaTvQioFvmkoy",
  "key19": "23jumnGdWu6SAixPuFPaLf5LKoVLNp7xgmMpPT2xNyFV91G1skX5JbGyRUQKRN4zH3WAKQeRoqs5i8iz218SMtRp",
  "key20": "5Ax1rT1DyYmLADQRgvX4VamTYqdtyYqPT1AfkKcp8i3xGX7kzupBrv2PftTqeREx2Y8bQV1FQyq1HjD57DZkzUXc",
  "key21": "51xnJy8dFsyufkFGoLuZnxAr1Pqm43iuVCBa5KbomGKu6B8wPZeE6WcFVmsENmixSQFXz2sjg5rjMsERm7Jo1ReT",
  "key22": "3FcD5hW2hhvtxua1RXpo2UkX7PbQ9oicj2t4ZnaKi1cNdKcFxxUfhLNU3Jz3oH3j3i9QCnhnuNqzfLR3cMRWqExC",
  "key23": "2QkQ4SxRjxGVYVw3kDwWSqc2fCTJgM7ssQjxfhrNk6ttH9qA1Dvd5xoeYVDaLJb3HgBHeEZnWGvQZv4yS5wiVuvh",
  "key24": "kW4pQfSwXdqFRcTcEBJRYWdmbPyHHF81EVZoBBNvv2CmVTHhR2djMmCNETE8AavAwAZDyKab7kTNKXiqeu7Ra1B",
  "key25": "2bjqLXsfYrp1LHATVeQP964Boeguy31cMkPoSE2nLd28mqUhRD7VtmJzF5s1L6sKUBzKMQMJdArQATiLLoimzXZx",
  "key26": "tMSzCDpJzwHeGaka28rkNybEx4SdXYZWgP61yGoDc49VPZjhTENE5vf2WpC6wrthjCTviznP54MYTqCufGmG4Es",
  "key27": "4KnpTBpUHz1btUYJiQjPGK2DdhjfYuJphM2pdJqDTHiT4TCeVmKgCZ7U3i6NR6soAJUMViqhs5k9RKzqBtTQ1YAC",
  "key28": "5rP1GukSB8K8CcqXoxU8qSD7Ybobb1SvDG79URAYMW43mUWsED2FNyjapxeHXyyin7Q8ErmA5Ak8FqfNoFZhfgNQ",
  "key29": "28BiF7owmnfUG2UgDY8qbcnkpFc4Vuf6jtHcRQwwjRZmR6cjqav98jFcxd43wey7hueL6eivo5KL6SUAJaze2tTx",
  "key30": "64uSqFVk8Vhn2GGCPXq9cc4mx4fAUUzjaFhX43yDiuCU4HsKqsBSkMcUTdb5iU3ZtbArHUYTHjXkv8j7UeWC6vyf",
  "key31": "36RyzA6nouekm3vkw1Vd1mas9KgDzEEiPMSim6GWHSvQiND7EDfxqYq2M3CLV3zfcnhEW9huJxyzxqzmsxDLEuVi",
  "key32": "2jBUQbDoEYz7EEhA8Ed71dZxutdMLGWbK2sdgNF3GzuJfP2sjZEqDy9BGEMGULejno7J8PA64VgQjG8Zo9pCu5Th",
  "key33": "6698m4q1K7gM1XydxN2upGNhNtKPiPBB3FJ29EvmJcFhsBjAprzUeCwEPYcgHuEpxMfN7CiJ48DQG9SimDBjiJEQ",
  "key34": "5bWSgJUCYej6wCzZZDgXXAwniKHpnRKBLn7VcghdwfygYzZtwmBLq7ueggY3AfXpgFPkR6zUFqdbB5S5wExp4Coy",
  "key35": "61y2p48MgzheBKQsytVtkT4Vhk7iivPjTGkLufRe9FGHcaaW9xb3jZCddCZZ5FcdhkdJz3ALNTxpzqheT7psGmPh",
  "key36": "43jD2Dh7nf2SspJWSAmtggyDHVeAgBnaP6J7m2ammNnL3f5p7DLrrAo5B7eVy2Wimyt8XnwrdXgfdYX7N1Vm94wU",
  "key37": "5YkELHKM7zxTBUc3DY2un3gbPch7aot145o8Ua3E8PxdCKP4DbP79ZSEaMNzeMrbEeNEWvUweFMKwiLC7NoqpPWh",
  "key38": "3tKeTYErhGnTQ2Ve4hbNjZ2Ejyjb8gpeQ5YuyePXqRn5dZ3N2dHztgZMVvZaKgJ82TxFgDUcASRUvhhU6yLhAjFx",
  "key39": "3g4tKiBMYL34r9uSjNaCkzcixzy5ohApVvCXJJWRFYcdfzFpKGdbMFERUBnttEAEsLMnoTPSfKt7EApJuL2MBLwF",
  "key40": "2xG2SC8EWJAr2GUDE5kYMi6J6NZQ9itHiqQJKQ7H7Xayk7Z7TjxwcDsUe3DrSPCSELh6vawD6zyCNVMYgG4mEfNP",
  "key41": "3bsKV458MjDTZNzsL3QVpPM3943VG8VucP1bdsYHVrFyu81uZaEKAj6fMnPuvVZFDCPq9egNTZtERjDJNSMzfq67",
  "key42": "4SBMBniaci7MpT3rUdqzp7Bywg2Tj79gPaDV7wFcL5XGsm6rQbJcrWQHdpj4GCXhC5nZU5otD1xUCzMTVS76YPYj",
  "key43": "5CyQvNHcdo9GnzULSDwgUssFxh3Bf5K9d6UxvVQ3Ca9FHRb2svhRdFfP8pSXR2PG3oZDVcRP7Ub9KtEWE4AYtnL9"
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
