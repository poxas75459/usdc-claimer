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
    "4w6ejh1k364i98gjuQ9949j97PuefF4nnjHvqdC3Udw6rkhVjTbywqMaXo9b4hvWLYXLd5mgbJpnPuvETSHEi1Nz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NYozUqmDA11cG7UjeehF2B8q4XwbQdPBAZ2fhEzb7VLKH3UxRWZ6Db61w3nr7QxCNJRozKoL36Ldh1aaaLZRDNg",
  "key1": "3fz22zD7tenXyFucsKrSK8nJFxkQkELZNWcCmKT2Q7i96wTCViE8iD6yoW2tropUqekRbJQaNAzmUnx3KApzBoxF",
  "key2": "8hs8kQrpVhXuVos8hYzoL1ZxgY4CYFDJ6TpTV89nKsHjZnmybzg1DXGqGFhwpmWa1RkgdAx5KuiAieA92mfwiKA",
  "key3": "3nXTVztpGjNnhcBxZo4bm3suqpdQ4VULVUqdkoqHH1gpSy34n63qEqpUefwgBC4nPD1rFycEqDyDtgkuCArQVBmL",
  "key4": "5QdQBH2bzKkhPk1uwNz68roFd63KFwD2g2cfVtwDBxkExP4siFkNnfYYzkCeCRvqQyyi8Es9NLimzGjSy3yVoyou",
  "key5": "5LvJdFeNirUhWk6B2ygUNqJK7t8suZBjjPxMNjaamFbJme5qbGJbF1KyMLwpuVqvk9UpNyLZGH5cHE75ec2oZ5QZ",
  "key6": "4Q7YdXRrao2SQeunzZoiz5Mx5Uu4ybmSyaWvbaY24wDarJ3faxwhFT96TnAvLtkDWZqkeqAFn72mR7xeytueRhMm",
  "key7": "276a62nuLQp3xxy1pzb2kmUcPZSEUjKBQ835AhRekBgsaiNSzXkxHvAt94ZRkvnZrhEzQWpeD7h9Hi3UgSKf2YeU",
  "key8": "4Qeax18P1B38HKfNAVw8uAA5MLuhNnQcUHWotRWbHaNmK4vd7dGNE9bcgfHTtjmkm2WuPupwZHda3ikgFoxye4FL",
  "key9": "2mmxts5f13PFaYXr2diNwPtb6S8Ermx3KqqkvgBKJxz4nwhVH4ZNoiwQwcKKwaPVXL6PNNc4RRyV7aFx3kTdKKnG",
  "key10": "3i9WLDGB6PH8MBuaCiuhEwjoZj1zDQ6WGTubwcbKAevJoHRXf256kegMLHDAYsAfQTNiM5HfHV8F6DHQetcRaBnK",
  "key11": "2fPfDfsqvJhHtdjoUYzPYVfeNxXPPTTfvhzCqYWBq4Ne6CrrDxDYXig9BqcEiD9JUnmE62APdqCYeBzyTysfQDAS",
  "key12": "2U3DL6VvUUoPc42SDBMgW7QiswpX688K7VfZqZP6qqGE4VsY2cvDGUbqfsdbs826dVzm6PAgc9nzfw9NxVwAVE61",
  "key13": "3ezoG9yqKN9MkEKyM2x6bop6zizJGH91rtjFKPWyHoUTvNdYJHSpejQYeUGhzqnXZ6y571pgXAeKFfckT9teknwr",
  "key14": "3wdYVrjffY1t9vWpd5btXcZtqPk8Rpo4vZJA7SRy8pdwmBWW3xX4Tbh1HjJhJVswwVvwBqFVitun4zju63Pt6Xfp",
  "key15": "475T1NmQBKLCb2xLzTLkZYsqajBsASMn7dYtnZCgby2K45gskKMHSJ5rZJ6reJBkcHY67XcHGe6te1BpJUYRKUEf",
  "key16": "VrPjSrbidDvkU1rUUR521KnVk7Q6hfxXNQRSaQTvt9eFP9WGQCNkE65ArWNVpNM7pVr2mxdJekwfvsRF4zL3h5z",
  "key17": "48NFAdjAZwW43ZxVNpvf8xvy8N11aYpKTXm8zUQmGZzrAkr6E9NaQQhLdRTGtEzKcCQUHCXEwDDKVFmN3zzeWKj",
  "key18": "49DdjMB2hFKYD3ARAEAridFE1cyoK4g5gXaJd4zvw58gkpqfRgmfiK74gZhJuisj8XaYR3XttKpvhtedL7gsWQar",
  "key19": "KPdvdDFFUpLHL25SatQnLPcadcoHeD8TVvtAt6EPuJM81zWzo5qFkbUcfSMJEwxdydfPD8ksgrgx4ZwmNhGM7A5",
  "key20": "mbm1tH627HTsHZnSKipETQCs3AaviSxhaheaLBs3PKk8BkBdtN8C6uqdq34NLNBgbrnhWixiKvcw5QAMN8tFcCF",
  "key21": "3io5btzJ9iaf1BKn4DyyjCLAFwqBwbicaFoh38sYwAYpm8gRmVSwdfaeungkT2KhQryNetaSVDu3TeTCmSiM4djm",
  "key22": "7HsU4GPZYnuNgDpWDS9SdGC8V2wsFwZPhpUDVmkG851cTroKRuv4vrVeTN6Fc3iqR1Wc9xq6qrkzdsdGGfPyZ7N",
  "key23": "2aAn1pALDEHa2m7dmVomMkPQp3wgd4AGNiJ6BnkzXuHrrmjfkadwkLEXbLysBRu5Vg9t5QX1W6AeQmy5JBu5PBaX",
  "key24": "4qTAZ5btxWQrkjJQpf1o1mUuiAoRThBk3xrcK8ZJ7CDQsewEytJsgRs7Sw2ELUQmHkNEacm1PMxKsUDv5LSAQic9",
  "key25": "2GhEczQoeoFtykycNiKbTw3mCvpaU59YuTto6spJnLpGsFpxuhfrzL92hayX7GrczaMhLGgkLWfdixwXBX93hkWS",
  "key26": "2MYyY2yLFBYveRvBq33GTY6kU4Ga2YHvssZayS149DyGHq8TScBtT84XNWcpJNHwkhe7VxLDqXmrNpp72x8S6uAm",
  "key27": "TLLC3VAZzAeqDZxtPVTiGpS4wF8hqy1nZ4TddCBCw39VERv5BuE8RunX2ZUdhaVyHmLBverv9F8wVcq3SZKcB9j",
  "key28": "2oSMwqGp2KUzN9xgainebw6P4mUW9K51zGxtb8V3GigLTjphtrXYo3ayYLqCpZdb8HYMcp1mBtZzCAa5CdcfUvE6"
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
