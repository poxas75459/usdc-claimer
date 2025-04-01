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
    "4zqKEVNZjLZichZcPwvk46Tfyy1EQW6Mqik318ZDWLgxdXhvmxo1AYuca3Q7VkUNt8Trn6iuXbxepAo94ibCXnCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jiZXwu2CFHWegVLH23qa2XcWok4ef26PpJWxsbVPeCRh5x11UAxjPExT4GSJjPXop3vCxFX2KU31U6vaEGVXYki",
  "key1": "4WQJmNY5n9rtX53PxjmpkAFG2Vp1ZwGeyEad2auuwnpz1TwPDttqwopU4hwmkVvsm2f8KA8Eh3QqZf437jovTpe2",
  "key2": "5FGtmBMe7oTsR9hMYvBVRwMznfHGadBakMx3mM62eQmrDTcHafEGEEd2fvUeeyBu85pDySXthaMAqomj8MwCTWBE",
  "key3": "bd8DccPCR63RHkXqgXDMYAUq5PmYJQo9YPmGZMP7HExNnMWh7L8KHJZY1R8ufMFCkzKmErDGg6ghXhF2ES1iiw8",
  "key4": "3ymgtzsY5oeHsN6KbtAMJJouLDNPrYV5yeVtTwPx9uP5FFqiyMYFkyBEsvGn7KjctnmAAcevKKrQ2vp2KrLYXPRB",
  "key5": "3Pq2sWpo9uWc8tw3GnbJ9iBHugNW79zVd9a9FaidEsEagyiDrkcZgcfiU8kP8syaJH9xvPvWqz7yLr8wywHNhzci",
  "key6": "5kr8VpLaojaHWgWXag4g8oxtgAEkFnoThT5DSEJGMz4scrP9DYRxkbVpXmuNwxPARwcWC7DVkmMKZi6ufCcyWp4p",
  "key7": "4KbNtgSK3PUip2Vi7yoEmAU7oo4zssDz4QsfhM1tjUguvznNPgDX4SKqtUG2FNb2Jkmx4WNjpVevybbqzTPDgrEg",
  "key8": "3kU4nKPBNisripU2JAMeTG98hpAfWx3Fc2k6i4fsarxAi2BD8eKTMPqHsMKs361W49ggaYeBtD2TubmW4khhPrrQ",
  "key9": "39JBB3mkuky5wfhKsGHW1cfMms1aLFcLqRY11hCkR2gc9wGkZNRxXM1dzjFcBwfWKXsUn6w2Dq6RTaF3qJmD8Fui",
  "key10": "4E7om8qAFKPoJMwc9Gk1mnX7DHkt3sUMkdv22JRT8XhJES3tx639Tb1a5A9qGhB85qyciMw4P3xSXXDZtqpq5DuS",
  "key11": "NAMqYRsXZ1ZqGThT5edhp4JAQv9Z6VSBubU2M9mPjUAhB56cC7mC9nAyvrEmV7uwdE2dNKFKmDSERMNGdYJLiWR",
  "key12": "3xGM23zaEkFuWz5KnJVrJCUASr7oqThQFvmKGw1bm14oRmV7H4VZByH2aFgvdqypM5s91sh8UNzLPYYTf7EStY2g",
  "key13": "41L9DqCaYFGiYWRiXDwEY4WDtzAwzTzx8bq7NEFso24dcZzw9m7kEUJqvzjp7wE6fyVUf37XDaCX8ySztUxuNxP5",
  "key14": "5w72Bq6ugh1dRAiYFeF5hV7n8mdRg7tux5YHzUirHDKE9yBADTCbwthAtPuu6t4AAkzxdBEk9GmovT7vn9xN5sb1",
  "key15": "3yxLeSNLL6Ptxhr3m4nEkT5zmGXbNPACaEWSWomuCTXNgmV9BmcaSi3KNap1zXZjSN33vbJfsaNAgh68fEcfjSsg",
  "key16": "P5yJyxVasMdy7DGnwg2NXzRRzukD4gByER5Tvvcc4rSzN8b49kqaX9Baw7Mx2uZKaPqX4vKGBoz1CkMhjVJMuiX",
  "key17": "63yoxLqz9Cxq9soS8ZU1MAYU2rz3Mcc7UXZ4uqHwEJ8eoUmVTN3u9XhrfVnK1X53AcQYfGhw6PX9ouB7hyqFzNxe",
  "key18": "2jz4xebKbo1eDaCigqKuYMhX9MX4GSoGEGTSxGPqkZyChKLqJXASZHDWswqQ673NqPn76PQQfe524b9NwGFazmvd",
  "key19": "49stwYVrb4nTS11FFAXdfXKxtiUBZfbtad8ctkwET94QerpQmEQc6zzP9qSUHzuqWQrxVMG4kAeP3MfrDD8UDJsC",
  "key20": "nPf53MtCr2nNEP2mqcKC7ef12m49oFYL8YoJ7QenySzoen1jUw84DydtNnQDyJDsqFKBi3jFFW66WQdirEyRqbH",
  "key21": "2qpy13smoZM3E8TVp2acsjUBFmedYkxXRGuFKSp2ULNt6siDjfbxNXdyR4e86AojX4uemBYkKR2APgLCYdoFT2Tk",
  "key22": "55xmdHYv3nzaMd8eJy21dNSmK5vYB2osCKVy1b3bP6DaHTxH8Svw7E2hYhYtCvQYt8hnnUiaAb8PDGMCbnyk3ZsC",
  "key23": "5A6oXB94x8sfPDx5UVAFTsESpiS8WTMB6jvLVUnPWoLvWpXjTc7vv23Y9nxRA1SRpKGAgeGiPKf9MaPdRRo2664P",
  "key24": "BMtZawaadzN1Xr3xAH5FdzQ8vJhizCwLAz5iFA2UZgpjinnHgKDdBByaPvRakQYNA74mt1NBK572LuGu1HHirud",
  "key25": "3zBgGfihi6FE925bh17hLhtLPmt889j4qRxVFTvHNnGCPpAdXkM8HqfXSqoE57Tcj4mRHzpZ4zv98kSMAhPhXf3s",
  "key26": "4Pt3qFMbwLw6UcAByWNKLEUahXrBmKjAqFrPhs3wvaGeDmvscoxSCvzBGrMQF8So1aYikEL1t8ZKrAi6s8qBV2fM",
  "key27": "5LgKG9YdY1RxKxWD1Fp37PpQ2NvVJymezgQhEnexVTU7ibqhye6gx4KmfBrreQoqXxVJHKRbsdw58uYTrSh9UDVQ",
  "key28": "4nwCtdCB7HbXq9awLNtgbbfR6t4m9FGWnN7pKi32FN49pru2K6CwW1ydWAm7VjjKvtTuypkbT1m62pZSSkEEsM8",
  "key29": "3gy9qdUP7qFCnAZprzUeNups5bkpSNsyqvBq5JEd5e9Xm9awrQzcwkFPLvLP9w3YX4nnKDZFhwweZBRz9rSZ15Gi",
  "key30": "22rHUp7w1fnMzwWiQzt839ptLsM91GMhYuW9URpy4vgZ7rnF2oqa8DMjq8zC2h1WDnjKzYTNTKnsqcpBPEDNtf1E",
  "key31": "36oPRzKtG5E18jeDMTx9PNPwmQ9LuFYfrsf8VFAYbSdfXiwbYJM4e2gg7hVhnEKoCrutZCtNiRfrmm4KfEL14ADx",
  "key32": "2miBrtg1FhNg2vKk6EB3sUjC7hz2Bd4JDYLwu1LxpBoBV5r5frxcBF56LQkiBgpKJYnyGe3Ks7Emsh2oX4udM6FT",
  "key33": "4LYXueTbGBUxkCJPDqaGWttaua2PdYziZeaQb3Cg8XFc3P5BnzSAqdkfpuJyZ8yPY4qZkjchj5n3p5qSbkuymTGK",
  "key34": "3NEnzoPG9XeQk8wn1tfmKDLmai9Xk5mseiWQaTczuDAGSinNyLsecwwYgHdmEXc6uFfWdZtzr4s8mt3yz1fom4PM",
  "key35": "3aFraiTiACVomgSZeRRhPL5qshhjN5Kov5uEmAC6LPawUdYHgXiqkfgNwaeVjWXayhjmWw4ZDXrowdJQjsobdvRh",
  "key36": "5ppSiwUtUUPZVut9yg6WVJiyRWajSKMnSGzpr92igzXDtLELTynsu91rHi2ZgCCPPfmFcvNniZEMrveX3RBRseFQ",
  "key37": "5mBYovMpU3J76fSakLz9Q4LxEs11ytQZhkf7JhpX7qct9KpQpsk8SKiUzgZHMC5u5UmqBLZDJWJXEh3bqxuTYEW5",
  "key38": "5tAULjWAjnkcUu34yiJVCppZ25sQ7EcvNnA3xsVSjmLkjSPBrGF4XRabfRrMeFHLhpPqRtS77W5ozSMffdx9VYZC",
  "key39": "2rTNPWFhmw8Pkp3FSfBCYH5DRkarzT6Cf5wLcPBVv7hz3yndLDkyFgeAtWqQE4UZ7pvqPx7Atrw5wQkcvNAHMFpp",
  "key40": "4gVAVu3XxySBiQsAhppD9Z7X1AKZa5WKz9DvjEHPTbxojLkgZrwFqUaYJy5hmReXsktqZ72xjTPYXVvHxcy4caQz",
  "key41": "2vG1pWXSbiGG8Ns6dMLoCRKfwNwm5ZjQa64TMwLG8kRjqPhk4kJaGPf7RxrNUHJyNWZ49Bh6DAXAmkegWHen2UUB"
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
