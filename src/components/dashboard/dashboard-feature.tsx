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
    "4fGvjnEVtJQGNreCpQYA4tRKSvHcqpr6awMgvvxbrPzgiaPaZjjPRb73VLPNRuHroNezgxx857ZNsyCJmg7do7GQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TYt4MCYfT9miHat6doyXDn4DNBNWvqjFLuFzKPwk4s5anLoM78ZnV3aYCb7ruYS6JYdmgooWGRQvfNjWFNbwWsa",
  "key1": "4fgyYvTjeF1oTpeSPPe9KA43oKwYhyUXEX4XDYYsJCPs6qHne7mTGi2cgU2pQ4qSMwHZhh94QC5TmKUB8KaGp3Yh",
  "key2": "43NJT3MwejQJwgFKMbYNfsZ7yFZhMSWZxPmSYuNcMYVxXaaFDLxRpAqaVCWQyZGB4pUhhHNt3ZLVibMiwRVpGi56",
  "key3": "2oYYg3ZudjnNuGhn2JyVm5aEa3NYJWGmtEiaqUgQeG9UPHFwdCBoEuEJQKJZTWNUjjnaimZjAphpD5ogbHKtWz73",
  "key4": "5ufM6kW68ct11fL95oNK2Kask7JQeasa3ZobWhkvjxsL4xUb5FzNfYHG3mybqeEffaZ4uWtTCKPmaBtWLQ1viYqT",
  "key5": "2eJzCTwZ9zArSi7nLv8poaEqBUK951s4kCmpL18QCAXhYYDNAFhAuDVR3keG3MWUXh8fSzh8j8s8bs65PZ4eLB8G",
  "key6": "gy1qSzjg7LA9Ypd166kmq64GyVCtfoc4dF1HtKZhFJEbiGGTWjUBgYtJoFaUvKVceK5dugoFnSGCoTFszR1HkDn",
  "key7": "66vPm83U9wugq4XUFjxpi71ruVpf1255Ma8G9HkVSkotaaLWet3Q2CKfRXgTGJPgu29UjVDnSwYX1cMqqLkSXhxE",
  "key8": "YzeLz9tXUVF2k9Kh9AhmL2RH4QHy5DCryWvTPXyxNgHr9LRKqAq9BGSt842Po9ehiQCtp8jJ9BtT7rBioEbmKhP",
  "key9": "vLYdUuem4mUQsY39s4zn9yzcv1cWWwixJg1Ym2VQ4if9PewEUrZjErTxriYzgHqNzU6fS2ciqa8HxJUDFhuGpT7",
  "key10": "4jcBmMPkgZaojy2FcbHVGD8krM1UHRxkvXiwbMWM8GB9Acx2SQ7GnLdM2hPpZMUPSaQiS1CjSSXkKojbBUmCkKQn",
  "key11": "T1V7PD4RAr2i2DyekhEiU9SKihnJqr4fbFNa5dTCcmjet4akh41xCRgJzHj1YhtSCDAd53szTrbhvKpaVPuJQZh",
  "key12": "5HyaLzPQv3vGpESPY5kxCmGGvpMwgXCESRXcvXkgzd2MVxvEjm9AEjZmbWJwbA8osyn16cptSEtkXbRtoMCcgJRf",
  "key13": "32Ggp7FPKy4wjhTJzvZx4yrk7nEMQHWvbCUSqeiifTVC6wusJgShLQ76J3QHPCwyLm6H55QmGw8qFTjgBS6Vzsud",
  "key14": "62GKNC5HW5wefsy5xyD1yiLkTDo15a56CeK9iCRq4ZZDEpqmNsv7YqZNbynstZLSvBc6xGcuNzw9iZ3HXKjhWUDX",
  "key15": "3JCmBxy67bcYzr9yhk6XhN8LWZanBiV39AXMnVE5b7A9Gw6kieRBjug3zFaLsAwb4o749eU8bK3zu9ciMwvYwme6",
  "key16": "2Btj5ZCQLCuDcJeM2kJHrBgZFLjgnTXkYFhdd4K82gwRVwMK19ticNuaExgwPidetyZezjKyZUt1ZmRJYRJhUqqN",
  "key17": "Go3iBMzpyod14XrALJ1iPfQ8RUT87LEGkWcuY2fi1Xpz2HiE6oVhXe3mbFVo7dokat1qahtSbk1s3A4r4Dywt8Y",
  "key18": "4h9tTA4Eqriytsua2UpT3oBwAerRemgc3N7Dc6rEF48oVnfXTiXVai8EEDUq8X7Ee1fkKeeP3dptuG6fqXVToAAZ",
  "key19": "2MLWUfYKVuB1ymQGEgmVf6iXYWnRGyoSTW1NmqKhbShKQUER8AxWAenGQSCXsomAeXPiD5XSZY7hPieQEoSgNwS5",
  "key20": "3jDouEvsVwJZsTkMAfytSfi539b4xaDp3HpfBvCrgZdBQHsZcTKUrAWedupVwUYUKKzyHC5uGtRMQ8dQVnX9caV1",
  "key21": "4NJeAqSSddmJKDJ2KTypRtqNJj3UmUem3FhNArDcR248swXenysu6MS5ms6mkX1r2sgsj8eVHUTnmgVS7P5uXm7Z",
  "key22": "2VNFJP49LiX4tNDEw9s2YvRDELykkgfs6rbiLyeg9XxWFxgTr7Seq77NvVzMXJRVE1RnkDVyJVvZvMrRUAjWDV3i",
  "key23": "61uSJXLXog8P9upogxwnhkuHp74poYAVWu6x1Tde21nGckdi4f5aeb1SA2zGvsdfswyQS4jKfrRSRoCa3bmMijd",
  "key24": "4gxUWhskNni1Aum9FCShfZkvwP5djG6ZHSc3xCmyjQ1LGPBiJpkzTcFyWTHD8Vo6eggQd4HWVn3vaUpiJbyeHvEc",
  "key25": "4n8ycXW6RthLY9i8uPPScEybGt4wJ69xK4PJAqKAxb7YXgJUMrc63VCaFn1LserQDmaAbkNanJy52yK8B4UFkU8t",
  "key26": "5RA6pgLfhz3ytJ9s8ZZXbxX4eHvE8yWBu8Ke4mwitiDXaUH9dcg8Mqamf7vfzgpjEbp3QVJ2LvCEanBDoASKXHgu",
  "key27": "4e8KLc2iUd4GrR8W6PAkBsr7QM1UyFB64AzT33vwZuPsbcbDH7MKq3BsE3pgAfR953sXf6QaaDR7MBNQhpAB3H6P",
  "key28": "23uP95qTX6fatAJpYVvSVvYKwcVThH3q8nHPfGqMCr8dQUDtBqtTpckKxvTWJ6KJ17YbkNFkE6pBN1k5U299DNYA",
  "key29": "3msp2nMiuYbz6XpnRnBQB3mEy2DUKRU7qsySzs978WNib55muAofD3HKiUgHgYY4fTPk2vBQiA8w825HwyHhRLB8",
  "key30": "3KA6RCqCykddG71CNhLbJxW2rb6fjWAWf9TV6GjtW3XSVTM1x3H9nmyrPKF3K3WHDSX16GC6qzZU6LfyGehUWVXf",
  "key31": "62ey9ifMtWb5owavfbHFLG7xApUUC1XWAuTJFUFxjSg2ViZQzNFPYHqijCQeZfhnWoEGDNAL2o6kQwaa7kJgvN5t",
  "key32": "3hRzhnB2xds5akR5cLsHoTJroGqGkP2zUuVwHLnHtkZCHNDwXDduDD9jx5sGEa38s4isnYTmAvF7NvPWJWMk1f8v",
  "key33": "HNiqL7bExyQjLbTguTh75NwR2imKPjkQ6jpbzCCF7r5kxa2Sp9VkzapX452jqDECGwL6ay9Wz2SgVFLax3vX8ZT",
  "key34": "2waAFHiu8ymhnrujG9u3JAWsPKvBY1FKS98zEqp4v6xGCthJCyUxkCVteFqAGjGpFvpfCCk5mh277UScpyn8YjHu",
  "key35": "3a94Tx1gNF8Z5VVer1s49n3VSFaURdBcBdbuHh7hjJnPVA5eM2x1qpf1HLqj7Fy28ozCqC4Z3bqRDUYY7agCnRXV",
  "key36": "4wm9HjGSSdibkn1gKbSKBMKHNMUbFT6ERx5Q2368rfSaF61bzojHQaZv7J5WHs3dAe67QvpD1DV9PiUg9RDCCBMf",
  "key37": "4MKCsX6ysE7gmaQUt6StdNXLp8sR5pRVLvz69d5dCBsJJmUTxP1tmcT9aLhz1foM5insSHUd8NFAqVqhCWqb71bx",
  "key38": "2xdAhb5jwZ8n5BTEj1a7kRuPmkEyfWeCUcdbxEqnJJuPpmCKdYUwPL5gwLJB4aEAqSXBNxzkvxqqWG2qJDJSJUFw",
  "key39": "45ARXUpe9zCDGRDRP3GegdJXtnWTXRjD8DW7v4bRdAxSQjLDhf8cuJN8Y89G9pfSMC3V4DRV1eZPrYh79FD68Sib",
  "key40": "4sAPnyfa86LijJmgzCkkizt4m9oQ7F97BLoVEj7raJbTEaWjVPtGdzU2WQPSqyWAgq46p26zDj9qvF8N6RgKJ1bY",
  "key41": "i3fbNskzpTWQNRNMi7wJLWSc1AbrcUpLRLczxwywinsHFko7aggDnML3c5R2SQ3nx74YjNkj9jyyDFmvemNN78Q"
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
