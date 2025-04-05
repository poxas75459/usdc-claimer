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
    "4KwTj7UkVQJFxdLYS474yos8KnCaK95wtVpRGLWhbQ6Xx6zpcec5wvvpfA2kgbJ3WiVaL1Z6Z4qvnJPWRCq8okjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mQyawW4msuTR1zhPvvbyijvapGgTZJjew63e1BY84FkKrwZbAtp1RiZbbbtRfN1NEpcbFGCvK2nDP3H7qBjf79n",
  "key1": "4yQG3WkxZ4HyvntPpxfGoUPTy4AzfSWRUcTpWdpzyPiR6nDYZYWDuj6H4eVyGrdH1rXbQphfMY8XE55nPWSj3VnK",
  "key2": "3TyRK2cnRhCd3kkV6tVqm7MxNt1PDfDwAZ1uHz68Sqdi1fBTHQNzSYogWvsGTumWpLmy1WgTnxXBFAtMXMTg8jYk",
  "key3": "3o6PwP6ZFYsS1j57jMaGmUWT2a7WKAkVHqoSkZmN6CtFAvK9HkmjmLwajvqPVUeFCebX5oWzD9oreRvBYR8q1DpG",
  "key4": "3cvib1BFjeGXKq2gob9kgq4WzpeostxcqBezF52MtPMq8qeL9RtQSro7PdMZsV43tYwYD4mTsXBVgRbjDr6Cg42C",
  "key5": "3f3b8SLBWY7YPrgq1tousKBsjkuLX1ZEBFTBQrABMz18vpSGGsYNMJggwVB9qxxPjZcW4BKUgc5HEMAxttVqLbzC",
  "key6": "5x7ZbEbdvAeZo92jiJDBQ345a6p9TqFrA24YF2QvJ8d9KgrUKn7mjwsTzU4fvLrh1pDENjzLjL33353mabLEFcCE",
  "key7": "Zgsmf7WxHrAcr93viv4SMsry5iPr1y1k4QihW5yEDKgthR54akLdnnwoYbsk6dYP1N5Qm2KRoWaGueJStgJbUM9",
  "key8": "3WkjW9nE18K8jwv5yU9wBim32nyD4nscY43cdHZyNtDG5syiceytJSsVwbtDMYCqHjUXHGYywE1nfbg9MxEnWxk5",
  "key9": "4ak9jkSsKp7e1Kdfw5nh76XmY2Rct1HazC5wm5Ycg6TqkFFZZLJ2LgWUfitrnqgP2e79L5fgY4YdRXNav28cL9Ax",
  "key10": "5mGAwvFju2qb5NTWwvKiJzu6SNuszySVRSaVxtgYrzpDkgJ54dqGM9opfM1M3X2TErWK63cBbYvMYkn3zhkd3w1r",
  "key11": "SaevVmChZ4c2PhZYf9CBGPBoGhCnPzg751Bqe3Dc4Uqn3cnKBqtocTPwVYwfuzDWFE3pEsxMm89TjGrPUyM2qs1",
  "key12": "aFhgzGV14NvGzjqTpuiA974Q2QcTT7r1b8wf8iFcYF2X1WPp11GRU6yvPsYAzmpZJj9EdFetFPQdgkGokj5Sa5J",
  "key13": "2M4sSezkoEaE9vye5P6aqv7fx3nt8RksiohU5aQQHukJTcuhi9jtbm4tUyratzM4CpJWUgrtHRG2ovo6NgLxZkZP",
  "key14": "2zYtmf93VSFS8YaYxfsWwWS4KBzgEfFSz6SbSpR3rU2xjDJD3puMqVfw2AdP11T8NjqXNZoVsgfPK4m4Wopu6W6F",
  "key15": "2vx8ZzgXRYGHmv2QpeeQ1MgxQYAqxshBrG2McG1mVmUXEevX51LdRcVqDsyeeosFPW8urecEZ9GxSkCmKeR7SCnF",
  "key16": "1V5pKw3p5DHTZmxY6d8dGqokXNWLQGSfxv7gHWQwzQYw66NU7m2SWYsio38H1fumtDVvwe4kWrHGb8Tif4Mzwy1",
  "key17": "4CrNZWE3UUoD943n6sPnPYBTnTk2scQKQ8HKafSfpAvaAp12uKv3LXTgX3qaMQ8BCnKzCavtmZPX6BbyHH5HLU6j",
  "key18": "2tQiTM15GYyCNgUwS9n6FFBJuwQS7EU7rK7SGyvSDgoF4aanLzQ8fPDkQjp5VHhYw6VWbQbJYvPbZfD7CaLRteCg",
  "key19": "42P4nGCwuRhGobdCoRPvJNbQeUZfjyiGtRFHu746odwVhDnNyJti8NJ1fC6632xDR73WaHoMdVogwLJCHsfUaL9y",
  "key20": "4v11355qn8kggxZ2n5iVpFTzJvJKwFtjcrxbVSdhm8pEUL8weYcCtUhbsAQXtMeHtrSM5ryhDqKNazwhvjdY8Z7i",
  "key21": "5AMxprBC4vMg5VzJTgZhyfq8qWhT2yRkbADTgrc2cEuC8D9x1cRVi4yvCeZKV1MkwMvfXE4gRiRqXchQr88eW4k1",
  "key22": "4kDxxsS3uHpF5yBTwqQvBHkW8HPM7rq56s9qzfqQ9L9FgCvGGqCzHKBJkxrnNzFUzrNNdMr5DDPDC9SQDonbtdJb",
  "key23": "4NUKhVW1rE9dsPjgwUeJknQSLQQFRNhp3dQjQm4zgvywn9RusdTaneg1AGL4iCqBPxn8GhYDPNYdJgooctRbvtKB",
  "key24": "wbSufSGTsYs4x63JR8N3moRaB29THbUqRmEAWd9u8HXeXp22V4vH7JKGjsEsttM7xgRVa3yHjoAs2pPLzRHey3M",
  "key25": "2hqq5CQbdJZHThD6m8VRxscETRzeqEfZWJb45A19F9h4e7MA3TqkbkYDguZJcbiXFphp3KM6VmREXD24L5vxpyjw",
  "key26": "4Q8QwgxMBHxuRbtCFATBs4Tjns5Hzs1JSXb9GA83sUxjurm5TJKC6vcGU4MAJZRs5h6hiiUpb9Y3EzGAP8pMHdxH",
  "key27": "595ZHMLGzMZKVu3Yhg9kkoM7BqYDz9J4sAVbx2MpGtXgogYMnPM74Hufy8LqJXyfuXxSWAzRBsHcwsncQ4G2htXD",
  "key28": "5at3mwJ9Ma9pQyULXnxNGCFtzK5tg5dPnH4jroNv7tb82W2yF1Dsj13KAQWZbMDgcfWhe9pyXPkUSkwuWeJFgmDg",
  "key29": "3DxgEVLaRt5dra78id9LcJZ7rVidrfsuFkLV5gDJU6ccUhjJnSV5RGXBcGnfNnyP5GFRsrqFxmB4ok2xiGC5P95j",
  "key30": "4yu5gtLo55j1KA6sZ3uPF4eG9s8TzWr42GFsCv5h85G7Kv7dtLaYDPNHPGtiLqYyVDbd5yeHLNTnk2P8qjPHffZo",
  "key31": "3uGBTtZYZJxagC5xxJEJWLZJfaaNTdVoiDphs2ETfkePsXKUAvEKnjnspaXbudNQrsVRjLxDYNmpNfco4QDw6sXh",
  "key32": "2C4HjMh9S6Sa5iTfKtnnvuuabFxDqxCn1ngvwf2Bd7XbLmVSBHVKxrXBwsPUVnyHEn5NpgNsgNDXK6hniAGkgmVP",
  "key33": "2qSpzjTLYYK3xuhpTubaDcr4RVX4UGKLphbHTdwBZwmAQGF54cAic8kWYHe5e3dQzViqJNGiDneQpe35nxdPpjaA",
  "key34": "4bx2xmVTZ6QbskfsQNYNmmcqKDBq1UqRq2tmbZ9grA8WCjXFRx6ypMBsN8hVaVjXSjAP1BYi2UT2XXnfo9gmYZHE",
  "key35": "2gN4R1Ck4jL9T4E5AVtqfm3iTw43u5zuhmw9WDBmqM6i3ZbMdT6HKPdtnD2BDn49LSKLnRGRLMwFYZTp4ij2882V",
  "key36": "5MVPdCw5yQjCTtDNUvZT2wGeqgnYC5Cnz2L67pSkd5fuPHzaJen89x8Ar83i212QRok1ketKqxsH82RH8hB5fpxL",
  "key37": "2BiomijnexEaAzwy74r6To4ZC2CqgNUKSjvZHYVEu3FpLK46QE2yU9PPVcAJXeupNknqREU7QDXqGZwqcd5voCJh",
  "key38": "2H7jS8Vi49WwEowbGLFsZMYFgUPQboaKqaFsoYgeeXCKRz9517xoXji66H3pBQxNF1H8JvBBr66PSPCZRsyfQr9C",
  "key39": "5A6kgKKqPMJjTZRr2mQGmA8i3qUmT2ipPapqGX1V6dNXZuqkryLUGAZv7Zq9Mu8wqEz3UGkVseqQAzi3iPeJHqHa",
  "key40": "cNGqMniH3tR4mP1ckj2J4aVQb8bypTEw75Ararngp9Gz5vbUMo2qfwYuKh3rwWfHwiwK4iADAUeeSyADLs1w9yq",
  "key41": "5Tf2EbRMdK5xYbdruHxhrtCFwHohfpENG3N8fUW2Lmvv6jR9a2wj9QS4ntVGmXcmixpBrAwnvkWeoVBDiRCAW8hz",
  "key42": "5eVxaKvx6YA4ptH1UxUF9zSoJ441MTD28hb5REHVTHLbL3thykdr1qMsqXyEQMNVEtWNyvjtifbRN4euscjriJqN",
  "key43": "hU7Bg2UMTwTL9gEDTXBDSYsfisJidkGjYxEMCXiQMS1oWNz8WQo3Wuk1FY1TCmvRLH5J9fLJu3aC3ziQGfcZkWi",
  "key44": "BSQEd1vSA5kHounF5xhhU8MAVQprkEwZeyEBXDiCMVGehBjKs6rTxVuzzdyq5eaSj5QBDqa9jV2Rr6o2vZKDVZa",
  "key45": "5pBqLi32t7QZ3LouQZmRr1fUnfaPSYpCHCW7JzJiYu7a94KBMcS76PNrKDrKWzARBWvjgM1AtPYQ2V5YF4J2U9R9"
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
