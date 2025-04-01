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
    "MNesZkbQADVNS9VnhHEHBSKUCr2VVFrVyR7Tgv9z1Dbjj6jmQYmVJCg5GAZUyCbCK537nbCFE7kiLRNLgydRVQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N3NSCepHf2as39ReNiW9ABAxpxUfJsvfDU6R97stX5v4SGnvEuJRRRWndTYtpMbNkYe3GcBSdVTh48qRbHoKwTq",
  "key1": "4xeK9ZDT2RGsS1GydfxQE5SFN6ABBzUwCZHPmB7jVbcnp5QmxSSsa9CD5MUETMVLLiBqs87aPJwdevHAMSTkLKAo",
  "key2": "4hNsXgMjMUrCGa8HRrc74uF3yiwEoEsPpp9DNurahvko5irAGR3hKxB6R1T14gJDRXk9gJEYfnofQK86qCNzUNVN",
  "key3": "2jVSZ8qUfFJejK9zp5Vupn2DxaSSVgCpNK2ufJHnRGKEzfkBH7mVy2DHRABuqouYwmYQeviEAKVQKWy4dDUwvE1u",
  "key4": "4bG7FLKaGQzQtht4v7w3xvpm8ZZwMrhUk47uxcYQRasRg1tcwHsMeAa2x6r7meTkitVT5mtp4n3FDj1ayjyKJ6NA",
  "key5": "3RSzuUUdLZwqFFqKYDKXutV7AGcYdEFKTc45mKxVBTFmDhtL2wZ5pNc8vyd2bPfeSCUwVeib41X7VCNjcVSGwAma",
  "key6": "2mfu5UtHoKkKiAnTUGLCwNicgkFti3bb3td12Zs3MQBDYZUsHtHY84YQcotuAPj4PcURcGrUUBnmwKQ5MvYX6WmA",
  "key7": "2qJgVqKEDYcmp2WC2serE6zf4Kqfj8n9c8wdTN55icioEpLMWsSxqDPi4AwaDFAr3s8M8A6P6sMop1QtoMPN5URd",
  "key8": "2WS76f5Sfiqnx1uv2522RVrMNPH1zSqtTwSWRzbgNqG89vPRfEDWdeKBRmcgxHki9qyvtLCqSBMkHuCuy5t261Fb",
  "key9": "21W2APnqLJGcWUWZbzujky6NuLVhnyDoiekSfSUmuGwd7X7tYq745TjHxN5pc6MScDj3LyZskQ2jwGTuT4etsSt6",
  "key10": "NbChzFcLRdyeCeg1zJVRMCGVW5nFhKibZktvxa693NUHtnVsBh5tVyV9EfoCtGKL6GDGJsxWmVKkh2VCJ6ynToL",
  "key11": "4oXMH6apAVvzg89EZsQVJquDAVyuhFGDYXeEM5v7RRWnRLkLbaa2AVpsx1NjPXGwz9WWxoeyz4dHLJNTp42EzWYx",
  "key12": "2go7GJME9mSLp1FkLWcRu3ERfRVizKpjYjv3Kd6BTBPaY94dfraiiBBbQP2Q74AcVvCK6hL4JuD34VYbLFPwyo3D",
  "key13": "kvnckrqPjmqPbeq2SzaasThRvfRMnup18oW7z59Abw2H3gAGm89pVDo5vmk9T8jiLptyfk9KCuZjQ1NXNVqiiMA",
  "key14": "4ZoCUFGbbenKXytv255PvTGmsVj3YwJL3d42k7Kpq5mxPgsqpwT1u9MRi3KLq5WkdQjaF491eqzYAHxJmz3i32zP",
  "key15": "5Ks9UhgGn7ncYVAZS3cP9X6mU7oghhYxeJPSbwQ8bNovp8yyCbeUhvnHggVbVrQCVN9N42MGyZGHfppcMhJMfcnx",
  "key16": "2ivyhPtqofmRgtrtC5JxZogM8kyAJjqEDgMPTtVQvw9cZGCZeGHFYL8b5tz7UgZs8vRUBbe2nr4Zn6yPVZyfUbqT",
  "key17": "w2jUZhfLYmak3suYdfQ4YWr5LhiTi6tVPJ6evpMY6AgzXi57hM4GuBzjTEffrc4cEEJtZyuq4PrEe58cA3Gftog",
  "key18": "4x1UitbefLDXkRaLJtyKhXCKkYxbFS9hDyd1P2Z7ocEwoGTdzN37Qz1TpdWiajFKCN1gXEKc3NtRB8Uk1kfcrLJW",
  "key19": "4K4WbyVstKmeGLZijVHtx4CoiRvPEG1XUZ3eLayrzBMBzrURjMi1sawxaN6rmem6iBTywxrDNdKxaAnt9cXefubQ",
  "key20": "2ajUBDrhrsxv75QQrHMcHe2A9d3EBWjUFPsFT34gh86FYXC2sNTwLKQHKbmwaPnn2Got5cGmjWaa9trRS7sFTjUS",
  "key21": "5MGjpAGGmCaAoyF4gacXXgG2guXbC24VrU35aetKDH9tMSyzFsvappPqorxyD1nTnAQryakcxHpxc5JQLz6Ru5jA",
  "key22": "zC2v7xRGXTtwqEgvRiap3vsRd3ovQQ1V85eHawZdJGqisv27PNmzAbLt9puNkkeU24oSXFmEs9yt6kqzQKCjViN",
  "key23": "51FcvQaismwkg6JX1wYr2W8dRKJEsZwomVNzutaGDYpjZAzX8fvpLaTGzAsyTz2dwxbcrcamGqEQ9yPUdJE5yxyN",
  "key24": "2SAEFqdkgeejg1Qw16KuyiAaiPiHfjSabizJBFHZrX5RUu79ruBgUpyJ4bivKVZXiRdaMrbyEnPuPhTyVkA9GjPh",
  "key25": "2kb1ukXCNchKt669Ruoj9RxtMTxHmDxyYaB5fY5snX6V4fnFMMB5Aji2b4PPZau1XTZPSLiQ5aXNhn6HbK2zPhka",
  "key26": "5p5ypebeWL9mYZbdikW5qMHgo4K268RFrNQy7aoc9ohZPE4puT7FfP47MDqjrdBQRsxnkijthcEiwvQsEKU5CCmM",
  "key27": "27yzeR38F2U4rtiSDFeWJDXjhjCtHXKkd2qhGC6mihCtpQYFAMwe9MBfTDtmDe5oGwNSAwQwEVWYMCMBK2Jh6KyT",
  "key28": "4hdd44BTGpbadgHjzmU1ANWfdLTvohmKFqE5WrE9n7uxSUVoYRreME3CGaQFdhgcN5vjhyhcUAAAXiJKhnY7eNyT",
  "key29": "3x6JqWb3pTThw3WdGwLLdvFFCL8uFoX7tze2vnvL8JN3ensCbQJ6pBEZB5V4VqJs9SfNkkBs5C4GK3dGEcqYgtpk",
  "key30": "7rcMTboEY1N4GUweQp9fDN7eVZKsaoXSt985U1TRMKGUXeCUPtGZe1ubQ684SJL2vCrqdEMFaXeVaN57moYrh6B"
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
