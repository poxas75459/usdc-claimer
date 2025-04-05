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
    "2dnQJq7W5CkLKwbDZJHns4RsnxZAFWLn5E4SwGnL4BWmPaP3CPy5x1zigr5j4o3NZ3yF7GXJKuwZADPmPZg6tCoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MoK413pLP52jKkmcigjsVGYcHU6FA8NGLDhK2Mrw4rU64QsW1tsLieZNNZW7V2BSAoUrNV3a8b27YFVrQyCeQsm",
  "key1": "2oUdJb6qAX45uPmu31QYKQshJmQMrfbxbd5sb7dS3vMMUM8Q66SneQoooDZCHSBpDEHVvbscERpQJGa57vi9HzUY",
  "key2": "46Tu2UPJpPU7Ws1jofvtp2atLWL9nQQXfRePxxbz5zW8pi9DaecNYV5kcJrv9w45WhBy1HVkx6qtoBa6SrNFDzDX",
  "key3": "2JVNwSv4ZdPgRKAuEhiLV2d8P9eYzMPAiBP7g6uNk44V8u1Ksj9Q8ajNRrxMrYnjUsz27TndKJsDmPjkWNFvHHQW",
  "key4": "fpLg2QF6ghPofPrPogqgZqA5FCa965m38k1HYx8sckJgPW7amnqbDDGyqkMNWuBKwqhjoYCniV8i7DHmaYw693v",
  "key5": "5pXeCpMoxgsLiFv3QsiV8hB1nkuuvemAUyoSm23gEBdbXdm2waxb87d3B3KwZr4DNCXtmkKyTTCzL31BWVtT51sr",
  "key6": "4om4vVhphcQodzW8SYKupqabuhxYrBmfwo2VhL8QLgRkeY4PUp831W9VuZRWPxHUQdhKCFsXRwrgPMvXyYJTDmVb",
  "key7": "5LDp9ugYirsu4MyDmTkZECUM9xLDfTygrqUnXGpAQZ4AnsD3qApsqphiksJDtykyYq8RwfC4WySLueqR6cLwEgHC",
  "key8": "T1FYAe1cQF6Q4Eg2MaMQ47jKru4q7rRk3zrecYB1LynMMcbkzvkhfBo9Jd3aMvW122XypGz4tb7DhktFneotU4P",
  "key9": "3ypvCgbWWwHxgkbMjpA9QBzk8H98issXdCgFV7c95K1SbnAAprZ4VLcoKttb9YE63ft8ysKSt1oVedNX9Eg7XwtZ",
  "key10": "4uphonU65BtFDQL68Pw1wwhWUENqurkMgNoBFvNZFqjyFnmsFQ78cUDfWyB221vmPCEDKPJuFUp2AXMD6GhzLU1H",
  "key11": "2NzL5BrGcUvGc14jsSXiUMMUqABWzUquzJntNqCVJUjpxW1kTLJkFjRRHoiK2YemkBUstXGysZ12dU4mKzHy6zzr",
  "key12": "33VZua67GvPiXNCYtkG4sRmB3HpaHM8ytWpC9jQ5zBhduCvJLySBYSwH877rY3BxSKSNkeGwrXFkvRELKFw2fZfw",
  "key13": "3tXCEkyeAKEoWHHr1y5aGokgHGJvYJDKQLj4WpTshcSFhBevUP8sDecu57WL4A3ZyoHBn8u26xk4qfPJ11akxD8e",
  "key14": "58HVUPofebcyMDDeXPJzECi2qfTnCNTeZe56xDQkpiAdrc883vBHAMn22qKmyyGEZQp1zVzKThCD1JGAvUpgk94N",
  "key15": "4BxXHJEdEFsKpWrYvHQsfKTLDvgWLpi84UJN937Hc1HZf5yLUbm92JAr6jhXzx7Dd9AhacXX4fD1e9dn32z8PyDY",
  "key16": "4ZgfpH3gnvx1kaM5MbAzezpqUjoSozjT4g4ViTsuU6KotUavy5M7c3JSJe7bc7ZWauFFywF8DS2uMEnn9dBw6weN",
  "key17": "3wBS3Mx3toMbXUGG8a5fxjNWFzadNSMgKs5pevgdwrVCzRJVy4LcvRYb5j6wbiPd8XCsWpy2c21ACUgVUheKFyxT",
  "key18": "KX2euLVYhBCA5mAz2m18kAVKaGemNtdxUYpXWuMN5u3YRxtmwqXexsqEQGok4vMfcHyzJXuA4H9tx8gEW8Jzhgd",
  "key19": "bGgjVRAUCnpaBnJvnQhennDya7FRPMvdKjs583YdbmgEf1Qc27AhCwdEaFVB9mRoBEEXzUyd7ps3Ru1SgxUKX5G",
  "key20": "5zk8TihtHad526M9rH9xjvqfwcYWyVJCUENa3n9XcunZb2Ng767YVpbJp4ipQ623CYi8ut2mPBrFgk6ZwZah33ZR",
  "key21": "5T88LvFX8ucrgwQeW4PUwjmSRaLT21ygZuFGMvv7XDQZgyVhNNrqg3wbahUF7FkrLPDCKEuBwheQR6t9AKCPtrYG",
  "key22": "3H2LChWKfjfZeKwqcSfe58cCZV6gQE6DrByqD5fiYUZnEQzXpZcZfYombo9fSDmyN6VTthMRPtco6L7Z9RkZ6GeV",
  "key23": "czCmhKFePEwsRZynkqzZqaFKeKqYDVbtPsCSwzGJ6kudyNPwoHc5LnHsf7Ta6fwPejSZg8gmZweyZryhfVVCLzt",
  "key24": "3cC4o9q5hwdN8HmVCwBYYPpRko1c4kZ73ue2NVDDSd9eqeMCGq5ucXsVfZRUZN5R42ecTLEUj4aBmd61SnFmLBy",
  "key25": "3jJtdj3kBeTxiHQKa7fnjfNbKWmxkLxAC4s7fHmFPaNVjxHLJFiDRw7ZuzGWH1ueDESVgXrcPuVwwRXRNLJYKa9P",
  "key26": "35KyyGdoahw9fmaRa343uGXEssuR4qzhUVpuRyFW3dJ3zBfUQD1zbz6Ngcb2z8DmfEWKUzwv8o3DKZVDmzWuUcNN",
  "key27": "SQQrAzEavoheNmThyhjUxDcMgtGWDNgoyCxCYsDDECUYsAdSWgmESXvwYNnnWJ6DrdvrdS41QT8BvcJNqNtJB3D",
  "key28": "nZ1Pt5YRMyX8ECnMbSTnTpynn6TX4xYWkhVZ7uSbadMHr39hBU4kRuYASR4m9g5rVj3D6cipt2kbaZMZ2jzRykq",
  "key29": "4Mv43KW3YRjq12PfwatFHEBLwixhCNtCV58FkUpPiV43fXXDEdqAwwV2vJbyo1ShAQiN3urhjrLGZNZn6m4z5DyA",
  "key30": "4dm4fvtbRYe8XEaPCneXoUd1JFZujriAYHyPhKeG4ofPNPH2ZPnCqWXYQp9J3R2SRJrdb6d72pLG2axi6rndkAJ3",
  "key31": "277NoQPzu5r7JZ5TdnXqhZQS2AkaAjh6TE4C6zx22qk2WDwFhbwEgBhfG95KFuPYpNYq89AUNZejTtGUZf4zW5U5",
  "key32": "2JmptV2n5ykfEospDVAcop8ujwhev4gDPipivBqNRaeVKe8QA7yQgdAAyVK5tgZhHjTWcc6vYxEwDhP3EfRDUZQG",
  "key33": "5fLRB93xomMzCiLVVrs1xrvPK8EWgTdeXZ5HDc57REe2UrgCG7tWoT4F2UEu7eQUf1fdV1Y9jJ18nfyZSDZdcFTn",
  "key34": "4RxnJ7ATgLoc9k1rFA4GNaZNx7KbQA8TKoVXzjbYv5mf4YskxPWSVTigexkt1FhSguWQqCoXzrMomvz2XxgEy4zA",
  "key35": "2hZn1iStDDPQ8pjKcvGQdTTsoJ8QF2S65VqruZCWEUxHh9qSPaCZzH5Pxp1qBr64zWEx4ajuj53DyH9zaLJvD2pB",
  "key36": "5yov4EeFDwPLc4CH77x19gFpLbYEhuYccDZnSE6MhW1VEmyxHVhiSdzi7xsfUGjBkyJ1pt1F382W3qpRvtefibis",
  "key37": "5bvhErHbKqWMbqx5A4v1sRAkm9VpejTHqTWKmu93f185Ymw8nNETjKSzsortPJqSRf9mqSTKoSzt9TnwbBd3j18F",
  "key38": "5TnovfgSLmQEygknJy9EHaZKk2tm6ZbXa5aSGQSchf9svN2EfA3R17S4vy2hyrqZ7JLNfz8M5XnS4V4Hjsp6karq",
  "key39": "qUVpotGak4HqwkmKC3hPkaegAxcxaYnQAnJ3sKzcUCQpvMdBXRgxwHDrJjMtKop6CC5KqninHGdjYWK41HUAgt9",
  "key40": "5svFmWzWFdcuXZXVmbksWDCypUK7ZRB4FLZwbd43E2zLubbxroLkRkJSqDjkXLw9hmezgT4MoCjMh4CRMBhPEJQw",
  "key41": "4dQHVPCkiSZPHhKsBHthBrqaiRodMXc599cJwDLu71dzM4Cfb8W4gM8FJQSycoop9bGTc2UQ6fpGyTmSSpS24AgC",
  "key42": "2EVvaRvsMXcSGiNXthJ1nCNQgTs5CoTqt4kLrpkeKpRWU8gZ6QXGQMAXgfcAqqjCJE9jV35oGneuwJBQThfs6cM7"
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
