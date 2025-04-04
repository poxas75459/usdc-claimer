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
    "4QynSWtXGqo8pSgHhZk9H1sW9W2P8pCc7u8GPGiBSi5gQjxRafYWWzZRThoRxhJTqAwXuE7ke4rdqWTAQ3ch3eCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uUYdAk53ooLfLwFnvdPdJmV7VDmSbyVgNhxJ8xpJtzwRjg3n9kSjgANoTG9piefxHvCp3gHr4QFSNEjo7MqNchU",
  "key1": "27p2vw52eYHrvzyGmd953z4dCanzRBev1f8NzU7jcTvMLXhxsSqWAVDEVFvDaU8ooLMGhqUzJZzpyT7poxddSwsc",
  "key2": "3R666kzZTsULoetaRBQjwTDMeaDEnktmrwUy99AvVDVgqBSPMd9LHbwwcbg9Vcpj41YSjct7gugpeWWaYQDfceV9",
  "key3": "2XHY1QqscTsxmBZ487N6GHQEMrYED5rNPdAkz2fBCRurZEDCP9YhFBugqSEPGW8uNWyEffyes76oWrGa1gg1qRqU",
  "key4": "2Lj9fCP3DWXjKCuzi2R8JbbDcwMMhAuYQGVoY1ebvU4uCcGUKJjkVt1TrE4zzzPCMDXYF25wmVBPWDdLqEFpAznE",
  "key5": "62LnYgbVX9HVWvqrqRHA8JjX468UV4WerDF9mWnrgYGAFYqAUR5mApNTa1qAedwdBWaiHQQYU2K7TKs3kg6NGuC1",
  "key6": "4JTPTRXnc7r8uubaaerKiDhWy5SBoudXBuAZDCQXSqo6PLUktZnyF3UeDoNwWcn76cwBV168As4xmeDcKsZYaGDp",
  "key7": "35XyMLPtqQPtejDF4rrWAANababy4ktJ7ZkBgy5SMw4yPvuC8Vd5TnZ3V78Zrm8ksX7zRqqQqyADuGCwDaQUtCGo",
  "key8": "46ZVGiJxnPViNkFy2SDCY5naJV8AA1XzKN1A88JiukKM17f8z5TWZkCoWW9GqYgDEp4TNEnzN6RUqn2awTW4FTS",
  "key9": "4Bbe294GimEN1Rvw8gNg5ZjGzw2dvDzLn4FgmxRCnXU3b4SnexuY15rkpotoLzszLdpFEV9ozfEB6iCivEsP896j",
  "key10": "57r3bkGy71ELCdDFtNveTjrcMs5oU1uSertkVtnDPQK6PJnPZUwDS2zXV97gb3E5UMqvGgpfkoLZXZGB5Erw2Yjq",
  "key11": "52U9EVan81eBy8kWRoZZk3EfDH3wZ8uiv4uuqBfQj5xAf19o78wjbP3H8roLueuQzLMgvuUmdW4Vky61yUh25s3s",
  "key12": "5N6Wd5uQ7ZfYK1HxvA512ckYz4wmA1czVcBHycRo3N5MBj29DokLzeq4cqW8X2pyKXbEsKYidVEgiXdTsHtZzqWb",
  "key13": "3s5TVx53BXDVjpJ2ATPyrtZBhGYTh2nKW8cfcUHhimgVnVab7KPuPK4odDKo1GaisSCKQmPiPgjoZiyW1sJqP186",
  "key14": "5vbRjnJxTHDx4hvAGXZTif72vAiYeAMdzmyGBjk1YrgcNrtbEBucZFSZC4FynxCHD2FMzfhtZoqMDLDChLUoM6EE",
  "key15": "tqFFuPewh6FNexivCfAUFoXFGuLcx7CMAQJ2D8g8QTrsgUdurCtEAgh9VYeeEhswzk8YjGF8FQDcKtUMz7ZZw1C",
  "key16": "2hNpYAkxGY7tTBr9EZ3LQQJdybiQzJZqJM3k4tPV8DyUhqFaAFc6WZov4EGZZMRW8zh5SpXBqgNgPbN9RWqjPHnR",
  "key17": "43UCHyD1YexHw9n2nwHD7ATdT1cZdrvHBZNehc9Ns4D7P4RaWBrvd2uUCse6FEKzrtRWxwQBfyykevPbjBNC44jF",
  "key18": "5U9RX5SEhuYpUts4hfXQ3SRo7ZRdKTZtfWWFTJS8ndAShG5sHtfGxmmxACb5XATgYa5s2R7XCUUA7S9rQnqBQAeY",
  "key19": "35PqWv8LJrY3is64aAdc7AtxZ3HDzQ45vrtGSRzk5fz9nru23GCt33QqNqCGBWEU84YK8owBx93LyUXUPbDGWsBj",
  "key20": "uwgXz2fkd9fW59F8KYRAFikCvtMg3z7d4y9onHHvEQvnc1g2QuP55m63r15vB6veEy1AcMQ4Vb7XKKYWQsBLztD",
  "key21": "3HE98JV9cSK8cqLtX8wEpuczEZEmFPfAnJgX4j5ERid2QuAZg6J6YEoTXbJwjin3V2oSHKetydDw91DPghaVCMYU",
  "key22": "35fPdtLZDadkRnGGXCu9xH1Gesz7PBo98A9Sn3TX8Ps6tvwMZ3H2ur9fh3S4LaGjXUZpPtBaW6CR4EzrZU8jD6xX",
  "key23": "PFJznnAkVZgEntCsHqUk9LfUgaVKgWD4UfVeYBFrkUrGATgSjpN3xYSt23DEDdTvQUTbfxR5Xp4d55svEsfXPT2",
  "key24": "4z3k4nzRZD29tXPguGyc7rcFvWSHo3FgEgdiXXPEhote1cghDBsP9abdBdZW4tSS9qUcGZGitxnYMZ4EZioqmnV9",
  "key25": "4skDbELkgkfpzPw3xtcW3aZ2kVjBDL4jbKwNf6oWDA1pjUwxhdva88X1U5euN36wyXwDkwkhJWqx5gmMErh6beWj",
  "key26": "hsyKpKJYhBLuAvqVckqs5YnP7GXRNS4CxNRrEiYPsb182QDtbktbgJHBMe7dT8ihgaRMWeexSRHxE1FNsgusyFa",
  "key27": "2KBqFpwxopsMrW4qqMxyEM1Ze8EPwCvbkpQtXnFU6LU7whUvnmN7aYCNBNjkJzmhMfzDXWApoLSGvv8eX1aaTCce",
  "key28": "2p5ks14acrShL8gWmkG7T6RexpakpKdSrz88eiNoQaqhY5Ro9VMWXT1PxC28g4oZaChqGgzvVeA7K6ztmaRUcPgT",
  "key29": "5Ro8cUYEPjuDP8CnzFStKwdgYRfB9XRe1B4L7uD3LFBPs9SpYVxDeVVu3rqRygGS63H6ZphFsPDGy6CVHxfEboMV",
  "key30": "2cwr5K4UYMfjZrXoY3TwrUWrTQmDQEQcf2FTrVc6S965G1Y7XcBD3Frpm8UwLVdwHYH6KoLftLSVkXrMsiBe1tjS",
  "key31": "5DH1BFzPatb8z57jwRNxFW1dVCPPWWAjNA4gFCbFiStXLdqgZVJPZ2qoMsCL6MJBC6JbWwvJxeYQgsJ9xagw6zi",
  "key32": "4pNhm3mgpbcDzoAFDKRDDtzcqEty2vcnLxsgRwSuoA7HP63sLac4NpqcSTMGJFiJcGr5NGfDsFkqU25gHDTNpm1T",
  "key33": "iUj6uJfUXEDabhwhmkiJ4mDQSxGPxGRcqdoy2zf36eALqDs1sc3QyGMrusgRtUoqYfd5KQHbtY8hHx8psDhY3n6",
  "key34": "5Dr3YQe9XjugXSSiHerk2GnLdoMT29FDzvaVM6SpUSQKWYAqJqm5bbk8tAPZnpRLEKXsYutqp278qw77N5f9c9j1",
  "key35": "633q6apJYxdApn5u45C8tRXCSFm6zwPoPiYrm4GhJwx9xDN6xdYiAifZ1CimJekNdapN1zTC6i62xxMaXiypJ4gh",
  "key36": "fuR9bMiD87XeEs1vfSSZxicG9zbM7LaeHaEXxdExsj36kYwJyTxESZSg93UT4DB5rC4PApab5hiK3aG42GBPnks",
  "key37": "3PU1uncr3rFaEkJFTfkTWUQCR8zwAEr2td4Tfda16NDUpcE9cQg1dC34J5d8tfk6NWteqrPCV47sqqERxBVDh4kz",
  "key38": "2Y9ySyuudC21UwmnFCtRghvFPPqyYHziMfuzivMq5UiFrxzvqYScTXTsEASGc3YnnJoEua1S9KaPCHDEvSVmPHAW",
  "key39": "33qWXEcrEzPqgKjoKgA47Jr7Kwhw1udyHi7fv1TuubgdLGB2X7ks9JS55agrFY3zKbPFtjowfdCghdX7t9yUEFmR",
  "key40": "4DAp7jg9B2LtsTbsN4v6fGjwkWTuxKTiMMeTtbxEKNq7zVQ7iPeotjDBHdHQMtxuSs4c9nCHuVX7aXUcZivwyRiu",
  "key41": "4XcX2pGoRqevvEHmaadVBiDiwqCfqCriUuonQb49hgZwRxnJo5BnwcFeMoCW1Wfe432RmdYqEeqxXDGwGPERGAYe",
  "key42": "4uZwVuo2wtQBKMVnogrC6QguRj92oH3ijWkGf4idC7CqCGsGwSf231X9JEzL74QxrirLXUAwo2MkM2sksvck4hPq",
  "key43": "CpPv5vLgo9xWmuwwaQNUjt7X44HY27QxGKWxSPCEf6iAuBfi2mbsy2TaaEZ3LBBB6CyNwxAW53DkjZUPJjU5Lc3",
  "key44": "2xQPUB5abTgLWVFB82kVPEt6z8DRyZxNZV8zC5AHLR53obvtk6qxw6R12iq581N69BRUjvLS8w8A4yuYNjyJqGZr",
  "key45": "5Ztzp7We3ScdqfthvveAxyejhSFeyibULd671H2cGewJuyXKFU35rVS1WQeghVzqHMyr4cbcwE6nQRDcRKVbhhjV"
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
