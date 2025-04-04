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
    "4GqA4gbwCBJXX6yowhboGhdFhzGtL7HCvEY9wqv2VZk6YW5fmysfoS5eK1QdvCgCjusv1AVqGNSSnJXK3sE6TEts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WjGXM2qVQACp6ZzLuLbV7nUA6n5NKZTrAnr92aHac8xspGqYuadhA5Nqy2W6Y9DyaZrFrYsXMxL5gNYKhTR2bvq",
  "key1": "3bhcBqZMhwe24tghTckfNQVddcv8SQKe7h5cvMK7jXtXJsdGpxhyB8pN7XRdWro2HJ9hn4WMUgVEHkh4Mx6rJgXE",
  "key2": "4MoKMZMVEENhHCiWKZ9RiDKGHd12k2WCscBQV8vFzEHHECkXX53pv8BfZntT2KgVMdu7pzUfwUfzyfP2pLfZQ9cz",
  "key3": "nB63Kd69aPkwd9NNb9XX1DJ9PZLjpmvimrvNS9wsbpXTaxdBHd5cRHVPUVQihEpkLZ92wCp1nE8XkGunZsEVwNu",
  "key4": "5zWgVfZmXWVaPF6QVP8NTE94Eg83nhLe16zSb2CkoJw8gdZeBUJMPQ3m5zvvNZXjW3M2u9Fr1VuhxkwiDnFQ6vb9",
  "key5": "5qNdySnncsbfs8iRAtCRtiGx8nUG7rA3EjLRQD736ifGhjpWjZxXuUCnZi8TR7Rm4Cny4wzNVZBJTChLs7F7JfNk",
  "key6": "3nxi8EG7LTyhwjH2gi9e2BVfb8Ksg5o8xR32t2EruH7oFKznddPYfvnBGECJyrDxUJaZRnNRf3wzCH7fRoBddUjc",
  "key7": "3LPq2asec5d4Lja31WnUQZ8iav3NTt2qhW6A4dobYH5nGD9MG8EFREszue36gEU3fjoy4GjPiCjGyCc1jJ8CqEZP",
  "key8": "3fBYtvq69f2Huh2TKdQ9JWMmnPxZce8p6j5V3ZwN3Er5WJYSXATMEjJC6BVMB5zsM5wYtZE4KWm2GW4SmCENzPnH",
  "key9": "3mLGdmkUMssvpM5gbq6X8AaZu3hzTN8rKiQkYugEZHs7xET4v4SifpvWg4f9XSvQj6bJh6WebyzugAY1GsXmsKbj",
  "key10": "3i9oPEA3EddmapeLDE7QJeuhggiFGA45HGoesfTTfkCudsBGaJCWZAXkBgzypQBpN7p7178ZzLZ69huNxosWvpoJ",
  "key11": "4LHUcTqJX3b3469JqgRo25JWoG89euvvaz3nJ9ZwBP3Ya35CqG3HxMNABYJ3T2dCGgC8tvS66VHaPriLjDxe3bcr",
  "key12": "2oMkV8PKJEQBcbaap3qAm7LZETso5Zyt28yv51trqhDecqEKZJxWUS91ZcZjBZfjopEXpf4TyvmVFKWAk5LhYxHN",
  "key13": "4Q3r2Pn7KhxyjFHhboS6b4eVCRc6xABYsqPw8cn1AShGmTRFacQMgfRX4uN1bWqhfr6aj8YixsicdAAv7nVmFiMc",
  "key14": "nAYN1dp5m8w6ZBPpLrFAci3YfdDcvAbzarMR5tKhoSwbEPHxV24MLSwMZ3coQ7jfA4g3AX7Tg7htryqRvjKvBjE",
  "key15": "4kxNTAgqPYyHpPag185Q1NPX1SRk2G6A69mtEaoA8VpzWaaMTXLqaTUFg97PABXTLQXsn3Bmibo4r1kLJcpWQZ6Y",
  "key16": "58HTkDJs2J5KWiPiQ9oSJ9xoXKkGR6CBjYXby9jsSoFuRkddYFSKc6nAR1iAU3TqmohsWnt9gJGsLsTYrCzWVu9d",
  "key17": "3QVWm425YprQ99W3pRZDViLfgbNcPHpKLr223tkLXWGGCwCukALQK8XTdMg9kLRPhGqi1ZeHba4ZxcZ8mp1jEeDq",
  "key18": "2jgZUkkCTfwuAbxNAjeGoFE6th6AiHQtzuc3mRyEcXvRHdstUM1ac3MtwUHzsiSiSc4S6mCpwSEkDwNH5LCARNXZ",
  "key19": "49xFjPo1htW2vvgTUd243T6ngsR5Q9qVQcZ3BZXRjzTU4hzHKo2AuasAFnvYvo7uRov4L3P3UTavNcJCB4kU6RYC",
  "key20": "54XpqB6KyDu8zL7UNrYyBgUiXDWMbxGLPb9HdBUFpYnN4RffgPX4oQeCARa1M8f42h7v7qs2T9G6eB56Mb5VqpDN",
  "key21": "34HQDo41CH7DyhTHkQxNkqDuPJV32h5gQQET7CHSkxYCx3whBPEu6viq6t2dmuKU8AgsSVsx2RXoHmZtv6v67mJy",
  "key22": "46RZL9gyQuzLnZhNMNRSZqqvuJJAU8BaP9pf5Pgs1AUVPEWoN52CYGFGS72U23sKCF824QpzvfagzQAZNjwicuhk",
  "key23": "xhGWiA8PcvG3u8usQkG25NngKiLW7Fk9JgsheaJF3xKjZY6kuw8LTJFNhAnyjsmssVqkP3mkSdeRsX1g7mH3Qih",
  "key24": "cjpUCqx3jGkF3xxswhLup3cvYZCLaaiiVqUuthkUq9AmKLwym6QLQ2Qq76575nCw2k1rYWzbsUxUqQkCsoEabYf",
  "key25": "4vpTWt1T2mVGRaRLGAik1ViNezGLLFAhcaq1XRVrDYHAQmLbEzatsC1XsbaKLrxcbxBPfH3aXvP7A5hsgyfp9Jqs",
  "key26": "232hv45AbrvUMZgvBSHYTcbbysAYuH8YsFABTYdKZZPmm2KUXHTx4eTzqjUGX1f5kPAQwsHSoU2iEPYmbXF39Lrf",
  "key27": "3c6vDER8avbw6qRjsanzQ3rhX2phHTDQu5iEN4Ebi9zbCjQVgM6dJUKoxBv19whfpHS4PpGpvk9B5SP8oBxD93JB",
  "key28": "3XPYC4kvRFyPfgapeUHSMCrmxjct5DMG87D3sTrriCuX1X5dJNt2zsPXkTe8iUrTKdmYvbFwN7c85rv2KZAnUq2J",
  "key29": "5gSiTp3nFhrPsL3F8vkRZr56HoE5BvULj9uLNUF9EUpiXjaepsuLX6BNR7wAUxKbDKLsQh6hwyVY5xduFoCsdMBd"
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
