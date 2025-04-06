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
    "64ZQ4mYGb1KBmynzyjewzcdUhyrxU2wdBpYPCkNBGW2xuqBRU8RJxKD1a77w4Wv39cxTT1rR1AjfbxfYVPtJvjBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tL3uSjZfyUhd6uX2GBtwcYkVcKBGNWheRaAYHRSpszQBnuLeCJrTSesojUrEt9ph2AcEq11NkCzSEqH8RMiriNT",
  "key1": "5QJge3uoeBFvGYGHFDvWUL6NrDD2j7BcfY6kaSRZwupFM9cDcfTVwrrqwQYkCmqYnuVVsmFHov92ekZwVmV6Gjde",
  "key2": "f4A9xuMgh1EzGnzZBtjppVfDXeFeYqWN9TYL8Z2g6Vm6cRE21XTpGo5KpgfAei1yXvHwpZJxyPwtJqUDFCQMe4n",
  "key3": "2rSeojdS8v8wj4kQS3Z3XseFncXN4pfnmcQmbepk9PZ3LTQimJMf1LExPo7V9CX8GRYHdvk5Ctn6dMkTc6b1sffG",
  "key4": "3dDfHQZNM7FDPrPoMyrvEb13PWkkqx4fSfywgWvCpRT9nP8eLqUBWTpB7araiicKB21G7hSwC5EfEKNHxUL66vdT",
  "key5": "Fwd6KZZt8hWoP1wVqyr5QcrPxP5vb5Ugw4z97JouYAkjEMz4ttUeudKzHtu5t6FedW8ghwQbUZCB5wNi2Lw19EK",
  "key6": "3PwXCbe5wCCziyVti9CNqc4KM2jWdK7DjtFCFko7vkTKcmrbAEuC5fzv7tsbo6rsRomgFkmQ9r6XdhA1QPZ3BzUA",
  "key7": "483SsfsSShh29SDUY3uDnK69pTB1RU8Hf7AJjQyi1FqHgrfchfvKuUKyTFtsL6VgzLqAdqBma8do24vPEqKbw8nq",
  "key8": "37jRHR9Eed9m19HbJ6sbSTSd9dfQPJ3Jv7SZ4p6VV366yRz3r3FVgzv4Qx8dJkLb7j5aXgeEzfo5agDF1o9FmcZ2",
  "key9": "61gfH6E5RrHD5yB5M4S6V8pdkVuvPuuBE7Q5enZaEXA2U6KKfAGrZYRSExTtMM9fh6oRgc8itGYtrMBFpjhB73Ny",
  "key10": "4jBpRR9zp5cwshtWBdKLT6YKNqqnEjq6ruUbsV91ppK2YangKLAddpMkhcjp74tcBCuYLeeBHyVJhzt9C3BVcPB",
  "key11": "2SsKCuzy4odQzuhRjeJGVfEDoMT5DMrS4oUeRNF8r5tczLMk7T8xnKChgieRRwAdPomJUaETKeuhrms3fo1yCEwG",
  "key12": "5vVPFvuNpfVxYiXV27uVEssWVhd6SWWMy958XoZF6KsVtQ1bzokVLvihD9Zza6JVkhbbYbZVdYnvDsQ63SmddLc3",
  "key13": "2ugi3CioK6YZy5w8NpRVkB1869RfUSnv4xZr2VANmaHe1mPRLY7qV2C7PECyS3XuCPfYBX3xSWrQLQ5Unif3GvAK",
  "key14": "2iF8pNB9kccMoX3WoQRvMEqLv8mtLfg4mw9YXRcBHekSSkh1ibHFYij1h8KgJUmKTNg6632PWAVF9r1Kkyaf1LCp",
  "key15": "4HTkuxJbXtXiJjfv9LFC2fVvqewRKz5ZxHAMFBYG43SzvwMKGkruerXtKQtmj4sZm15VYrpV5JiLQuoLVTEeGukf",
  "key16": "3jauxtSasaQAaYgNLi2Lf5yvrkLvffJd7238GKtshHGNhqLpAnx73v6KT3GXdzwLXRwsTaJb6mVA5HabF2Japscc",
  "key17": "2CX36QcdBSCwsAD5L88jLBrwdomMFjYAfvqq76khMZ8Vts6TkLmPT3cRwqDqgudj4kaY35UUkjagwVMiiVziqZT8",
  "key18": "2J4x1pWEQdXmyJ5wScepvECGQepcMVv6NGGuueaqZ5oPUzzXYMEK5FjC5EGHgLq1PXbWaBK5Kzpa1KhnpcPcqsCQ",
  "key19": "4bkMJL8gC313DbRXVbv3GmWWjQBjv5HMnAYprf89fcjeAKCHQ8GjfuDFtrXAMTku4M6wvjh6EQGsMdixq2AZT3qS",
  "key20": "3mWiSPV1XRRQyynsPSoQFRdNqbvhVpfmWkaSuG9hvBKp3GZfFf2LqQ661JEQG3oY7Zzz4V31XMh1QKikSTXbJSV1",
  "key21": "kABaDAkUUQyMRNTwJ8JYG1gtz5Ngj91bD7NpAhBTVNHJKnaDqcYiYBNPWBp92doK24xkYEkmogCWEVKm4yRFAYT",
  "key22": "4aJ79bzxy5UmqATNzBDoTkpYqSLdc7LZf4F3TtbPvBDB7cXR9UnaztMf4dyUaeSP3UdKE88jeiWFE23ndCmFWhr1",
  "key23": "37pQTxAm6pYmufsCsxCyzyyvAoGjdMKLGRGyYxRML2jygNmGRK4cic3uHtGVNaiBo3vpDWtiaLxRwsxuCNcFmkTt",
  "key24": "4y8ZXXsi4CeMp4CMQui2PG4YzaVEb1SchDJtRGnNSeTqZzZ8wrnjGSYY1R37QthvAMAhsFEsxRm63YWqBWuU1yVK",
  "key25": "3YeMY7apBDewvekxKYTZsoEqn8rYXEjcesiF1Nm9jfbdxbYZ6y78sxKfSxTSz3aTjbPjuZp2wMVuryfVASugSPJG",
  "key26": "nSTsZSx2oXUeCt3SyH61RAFWKL76eSTiaL7RAgFKtNBFvyqDsmwP67HhnTkHSA5AdmqjKH3sCKTQaAiK2JFFSUs",
  "key27": "52TQkxT6UPgLuS6coa3BXLTv11oWyBb641TdFFmwfWs6akgocWfvz9yfVhC88p7dh1AzuhcmiCoYjyhfm2Xpf8eh",
  "key28": "rY1ADRjEqVFYkjqumLcL9jaPpcUfhjzJks9UeNqdrDcuXRe5Q9UYm1w5D7fbqkHaWrRvh8YrgQXo1fvoovxyRUm",
  "key29": "5q1vemPRpK9f4bg2Qtkfxjmg6mtSYJ3iDdCDwbZdiURqHiAzyvW4DmKBoXTa5Feb1Lxc2a5VEqNQwSR2BPmWJyoU",
  "key30": "49ViJ4JfZsMLqy1FU9SqQbNcMc6PyewLadF6jDQxo3izf3PjDb6cc9fsYcvxYNC8qDEb9m9bBVrtpVaLPHyoBbdU",
  "key31": "2zj8ydUZeDh2BqkQNBPt57NrSM32CwQhCaaQJGhH4hiWU3w2PnAJGEEDiodCJomytngNyyYsgd8XPibwTgqZTsc1",
  "key32": "epoiaPrk56ZVYtQqQEJswD4Z2VCXJg4Ei1M8SZYR2DNKV37i2sR3Vx5gx8FRwAjBi3F9kuiAt6yFhFTfQL3gRbB",
  "key33": "5FBQeLMG8AUtriCWVyjyEqUAHvaLTXvqytLjmtz4ZvU6iWXd8eCTJ7VvMJ43MEzzezbCeeKMvrNWD4PAMZT4bXq2",
  "key34": "3zkJDrUMeg3WPhBGhxL12Af8PminxobgYyZenTpDyNHnYCX97xiqEADnxLknLUEeP6JUUozutQmxsfWotTJJfzWz",
  "key35": "4rYsthx61mCDhyhMgJtjYrUh2YPWvA6UF7RHntuvgVqbszvhQ2HXfTUQFe5rQxQX4yghuJQ84UePzpc4q2Y2GhSs",
  "key36": "2KjgK8Zf6n4q4WchdBqXL6QxY3yCjbvRMhWMBmf5XqufCt2iwjMo6dTuo2pDcpNLyuAtDrgutND8bhUQBodwCdhQ",
  "key37": "3a15f4ieKX6hnYsRzG2zJyWS98wd5CCj4CNZawNm25wTG4zQYjEmwetoticfMFQWGwsBRX19NctdBJgNyFW1mN42",
  "key38": "495whNJs3obuxCaDUrXxFHBRFT1bvz4KPEUyPdqYuEqMx8YJtgTQBfK6FgCko1pqnEtTyVWZUQ2uGcSznu8m35jH"
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
