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
    "5Fr4PEmtQRybqZtyL8w3yUQcA8FoDxYHt2b5Vu1JnAdR7Jw5G4pnoGg9z98YXAmBkkFtD5dunFTEvDi1X5nBCDiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fU9L2JAhzYkbpGutGSvvgtkH5hnNTUE9cHTAYzjyBNGJyczhLUEBNLNyGuU8Sf28TW5Lf138wz2pEZ2nDFquoAu",
  "key1": "533WudPP32Yxg8vFBy1j86y2rPVFxvMVNXDqxE3q8F2uFNXnWGGrS6k1A91b1wK3Dr1H4DrRTAQhQy6TDJ1vLgLx",
  "key2": "52NANRAr5gjf7DRAJ3fdFQvzyqrvb1ko1qRTcxzj1jT7wDtxceKUHRzQupoqSsfpDL4U5RM16MeWep8bocKgLw2H",
  "key3": "46ef2PDGWPRkYX3cQx7x81pFrLuD7yMvwff4TGbNnaQi7cXh1DBXCRjPHx59UqedW1aF3vyB4RqQuuvxMJNEg1XQ",
  "key4": "4nquWgmzqg1Vp7duC6gVJ1TDDCPZYD2taMhSVgSieAuukucYYp2JW414bSKjoW2a4NyFT8y9yiHLSfyG2mHG9iiQ",
  "key5": "62Zp6EUdZ1mMkZyv1MTBJApRHmzyv4wX6tKG96yGU8E6a4L7jw6PffjjrAeTSoycmvQso89SFdNuJ11mF5LYrr7r",
  "key6": "3ftutZxFzPyeZuNwuKeK6mJ3bzSKPksqGEpkaLMdL6oM39bZMWRiidMuW3USmQPZekxsVCUTrLRZF4uZS8MUMwx7",
  "key7": "53RwShK6yxPh9eLer4Y5Nzu2zdjHUkGsqZLmcuhhur6SEpWVvie1X1S6LpxL2cZgaRVPHooJVeNxFn3BN4DK98d3",
  "key8": "4jpEnNHiVHqZnS3nSExA469BpK4e377UDCxb2xb5q8LDYGkQJ3ve28ecRKePSyeYgxfUX11bDMVkjCgbT5XE7NyW",
  "key9": "25AHXhEEZfGNECc1rmy9kbemdkbzDHcxomMKmRNYiXx1mN1nkpoDK4uZLXCWWE8Qmg4uB3J5YhBdv7Nv6xzCvd2k",
  "key10": "wxTEfAbfhmZuPc1uy164h3r8KnjCnUDogfm5oohn7KqC446zkovfwMifUQ2Lt9Jms26xFdjSkdWEnkxp29C7GYU",
  "key11": "36GxCvg3SxSHRFKJJz4HRQuFeAEvw5KrhcJaGPrj29FkGoPWJyxanoUoXEeYqG8isZPM44oQht1CMsGjPFodwr2V",
  "key12": "2gd6eXkNKw2TqTemppgnzbFqTRJTzFEEK3oR5wbmUVpbdRUhbwkECuJmTRV9Ad3USt9iHmKnfXoSqeG1p7utFuXm",
  "key13": "4Kj5BP2qDCBoSxC19TGg4oz7GbzAjg2odtJRQeJmyuaG2Qni8Fvmpg4Gk8TYPdVPVsVAC1m4UEiawxQYnVdV9nDG",
  "key14": "vmNt1XQn5FiYFL8qaVi7XB4fFZQCCiGGnGQ7z5HCabLp1qHWagoamDLMdFrVDH8ect4aKBtXftFhLVBoDZGVvJQ",
  "key15": "3Nsj7jjtTatL61b49u1HgXXTd8F6VvQJX4RzFCuHgD3NZRwVXwVBXu5mtnBuxk3unV8enaMbr3kZ3j9XNy8DPqnP",
  "key16": "3GDeZqPH1mmu2KPoF8CHPpNXF8WeJySW4Qz1yfG6Wcm7bhyrgUy5DiwUhnXcv8EiiJoAZxhNQ9BmVLmct585Yzrk",
  "key17": "4U9iwo7M5tzKDacSX2Lji5QqytZxvuhmcXVmatg3ggv5D8mXjyYK3HHsnTvbRd7S7JNCuxHgfQ6PouvHKz2bj4Bk",
  "key18": "mbpsvmjevooe3Cezh6b2HwSXPeBHqu1uY3hpGSek2uP2Thka36eWHxakWd5VwpuCPMyPaaeGpsRx5mBxuurj3WA",
  "key19": "3RUG9w5R8tpPMmMAuVJXoeEwVgWNYfk7Ss2hRG3JzeA3WgrU5UoU9jJ9z6df8Bme4fCt4sDbisxzJPLuBmRcaiQ",
  "key20": "38iCU6Nc4sYfwvXBaEQEdH9eaFV6tGjgrE7EqwMAges5mzpQoZfMBY7VGekQrKkgFyvzLWqFRnUipnZQj7HHrP18",
  "key21": "4entD3dHZGhCzYdoJzxv4mqV5zyKo428xceESMevVeZ8X4JFCJexgXW3wAsGx3VGhnfu6ef4XvhBUgNTXvdbjfad",
  "key22": "sHEsU3h8fZ5hN5GCbmMBVb8m33mDL7DLEwmv3pm5Qq97zinMCCCzJS2maupGtsiCpXphasY4Y63bAAyheuZbDYg",
  "key23": "zoxfyL13SmhzWHufF1d2x8e7985SkZVTgsZiwa8J7LmowsxG5k4j9vkkR7ujggeV65oAJY4mz2pE64MSWvKHrgE",
  "key24": "43dj7HPd9M4vturF9papEWh1hDQsCp2R9wyG7RY3ufPy45vmGm6E8rLppc9zhuJR4MtjQRYu62bxwwSsD1ZttF6u",
  "key25": "4FwfzkB1unU4KKfGaEZFA36qHTVhjRXu6jGThcsMHn1gLF6o4ipWXwrZUZ1ZBQV6uFvmZuhM3fPvftkjhVnw4w9T",
  "key26": "5dxELMJB85Fr79J9oygCxAXur745z8bqx5rhpaHEtShgLorXxa6z6QmEspGmtcpiJuD15dyo1bbRuWQUKfrkXgHk",
  "key27": "8qZ5mYuhtB1QpWJgMYq84C2i9SSh82Whe3KfpBETfaLHkuHrHjLahCqSvBkuPCbf34QoJchLFq1WckYRBfGrZhE",
  "key28": "4L9rxYFnNwMBdPDVmnvrZtygG8pLVwHLdBDUPDhGutTaeXZmkZ5bqLL7YHmCEe4AkVQZ3BwHzwCrbTnx5xErpaJQ",
  "key29": "3H53wm1Dop6c6GtXLXSSapQJdF61JTHcxnq1QgZriKupsAKJ4oLjWkDecok2tgfhnU231Eaqq6oKuNdwq5xVpAY8",
  "key30": "3PixKzN9c14vHZUyugmpQssbjU5P7Zr7utZj8UmfjKaddaYJLkHXGGK9WCcECN5zHwhARTjUzKoxqVm7tRzR38GY",
  "key31": "3R765xSxfvSH67f4Aby6bg43KuE9ugVXt8tEjWVywddKprk3QMC4RW3mjBJbsYjh6YBgPaMPpjcKgipXNDKYBrXT",
  "key32": "5abjo1Z8TBPr3w9bBQ4daH4PsxbD2MCwyY7hQudNG7goQcZo6LoPJQBQK2puQcLo2KmzokUiezWiyC1PcJfpyXRY"
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
