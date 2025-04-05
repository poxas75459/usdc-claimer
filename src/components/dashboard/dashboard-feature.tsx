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
    "4bnm8HXuz2S7nsyzoTLVaRyEhxiMmP2FHU5dAjjfJQJSsGbaFbLHDtXhy4Pd16zQHAyqjj1uv7WMt7G6qcNecgub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CL68kCq7mmErm7KuMWi4NWaps6URX7VRxUtQ65Ya3yppLWAqBUS19qTe7PaMrkzbM4Nqf3stuBTrdy4kv88MJj8",
  "key1": "2aZqqqv6iXETFZ9Uf8BbNU6395H9Q6YahMy68SaEFMN3TzALcYhMY7Hg9DpT25tDaLMnjxWkv2CrmirqBFe5ZRJU",
  "key2": "4bLERBv834UNxpEUshSZX5BAfcydEjY4GnojSk4PBbyGFE6DAaVVeeRdznG4rm1ftknpYchftocbovRBdjTM9RaZ",
  "key3": "3YxyLhUBiry4VFq9x4HqFPbKjZojVdKwRghjwN6hVKLrqpgPkkHSEPQsguZ9nhCiGD1WyV1Sec3bMm7uxBEUKJQ2",
  "key4": "dsSwtrgM2FDWFieoB8M2TowcoyXsESevRtd84ypSqS4wiiDJgpx5QvVwoWKUGccwSwtWbnvNEsCBjqzwWyar6cH",
  "key5": "5vcJreQm5askKkehoKszj8VUSVLmsX1i1bjMXXbrH9avEedUnUMM1taJeoGio3pw5DaKjeKRN4EKf8PknHJeNPR9",
  "key6": "3HKvq94atp7pG5yTBtyheFQP57f2sGTLEbaXiTEQvVs3wemxJqpg1qzvWGMGdPh3LWQLSppDswAZ2nHz88d6tiu4",
  "key7": "zbBsoGCnRjpDx8ipjmPSyLU6uSMTKyZNmkGfVPQqPvxdqHL6UDk7zwYgJjVACHSMJVcW5rwt16G6Q9BTV3ZPXix",
  "key8": "65NXoZx8yfD3MpNJUoSHgyxUanqXquAk5DtW27M8raVNKppsPNXZEKwmFsXJhUpQ2qaUqX5nBhVzN4z3vkLR6p5g",
  "key9": "2jAgaj9RRVz9t31MUULHFxFftvZgbjSLLatbbCUNdcXvHtwwkRXz4zyAS7xRxEGy1VmNhVesNtSWkfQMgaYmf5EX",
  "key10": "5u9YMA3REMC34hRFwDALsBu8top9LEMy2StBZ8bCWqXd7RBLfTuQ9jNp1sW84MGAityF5EoJN1iNdfBaXzLMnW4v",
  "key11": "4G4NhyBoWSk2MsT3ATmEHQcGAvU6rfB8CVKTzQeGgxCuyr3Ee1kkRNk1Jx8XYsHeAev6C1YD3FxBwDbDDezxRRHV",
  "key12": "4Hjz4CBEsu9Aq2BBHSKm6CVoPGXCwk4HD7RAxPRTD6d1cHaBZwsvtSWtJjVJZdnGdiRirWvmJ4BeDDnXHDJ9HB2p",
  "key13": "4mTo3vYaZYBXbykNEFUG4wCpdoAceYNjJQCgM7hzqa119P1bj81HwcQ7v3qB3ihZHtTt489BipVpMunxrU8ER6Gv",
  "key14": "TADXp793G84LMBbMh27sxNzCW1TS4ca6cHNcCGmKt3cEoRwQCFkAPsxZq6KDoxym3mhEK3SeoGub4BHMPAppcYc",
  "key15": "4kLoGsH5fjTADJuahi9H3aBMogtQECuykgqSDZmpn1TRRWniDVSgqzSA4UtkhvTrgRbHJtpPXjeGd26eiS3wrGtB",
  "key16": "45HDHW8vwa7xtGDfQdw7A3sTZzGqoQ8usskU4u3q4rSCiBPMrfApQbq22NUiQ48y4kUHUixqkNvWGq8pPa9yeWCf",
  "key17": "55EgDimurEb76nxFEi4MAfiLc6Yy8UmThQ9zPkqwfJhvwfGVKK8oePqTBQj652c83NcvxqNdWo7usPjHmGc6474Z",
  "key18": "5DysJfR4YLikZGzWZGinZ4rYwpzU68o6roWqbr5oLKjQGRgHUyGvqeR6vcRKQN6Pb3suFHqr9zb15Fp6t6UAF5gH",
  "key19": "Gs3eYXZYCBQEd6xXTrL5vLWK2bkYUynZ6df4ej3FUnP3XHV6Njd7PHjTSTB4YNjBMKNWmMPF2nmcrXu7jQikH5E",
  "key20": "4n4NRiic2VgrpSJxSVKDTCzh4hfCdLMHwBypd5WXZNgYUZpNg6Fnb4G2sB1vYH2vxaM4RCXKfgfmFKweL6LWaEfX",
  "key21": "5QapJHFHppdc7qYSGrNjXV6xxpMntdhky8DPDYDxKR5mzZHQFmTC1HocJUtziQAAqfmSxexTTgCWFUkGDnBnsXrb",
  "key22": "3DGAaszEApc4KVhEPvrLUVrk3AmSx6QLjk3imxhEf6HbNi9fqDvRSh6Av7QjMTmeV6Bmss8bzoiDqNKDuSRH6dxD",
  "key23": "2YkMGYPYRRNJ5mFWnoey9uaW1vZWMfSAMZYiFX7bdi8361iv5TwdAyzqf2XB495FnMj8ze11aEh2zXhou6JhH6so",
  "key24": "5bHCEJgLswy4NGUYVfYA9rMgC2a4hYVNCAzKshZifiUfE2V6JriCEYNNaYtb9dvgBYNFXLqR6p3yhftCzRywL6yb",
  "key25": "5yXDWbTjrs3aTFmbX8YxzXkzLdreqHCZfxHmN9KZB7QgatJSGCy1TnbiWBhvuCpUGyugdYfsRgmE8wocrW5fgjJA",
  "key26": "2xJ4KaJdwi5Grc12fzjud13gaHhM4YtZq5svnS8oVKPuNkAqhF1yHexszLsDS2ahQgUtvXtdcnytofBM4xDLLfv4",
  "key27": "2cjekeyqizjZM5HoVfVBtLSqn4GUYxZVPskRaWP8r38pvsstPbCbMKyHX1ikp6rkr3iRvtvU2QTT9k2kG9vKzCT7",
  "key28": "R3wSYjVvSN7HhRFcEyQio13QgVfoJtrkQrmETuoGyFAM6UwAx14jGR4exDXYdMRguWWoffSka3GB6vRxuSYXomd",
  "key29": "agrNGSbsGYEoCRYWWR1tpNuNsFgXsvFEYBTQaVs3HMvnkHd93SfAWEeQrF4vCQE8LAtb2Zy8qJTst7h5u4aF23q",
  "key30": "3hh625nqZpkVAWofsd9PjwAHwC44nwXFUNKP1iA5y2L5CUJrjjocpMLhAHqK86mgF9ZPYhNaXDFm1xUJMf4y6zBv",
  "key31": "EMvSU2zwhAYJraf1QhEM8GLVyYaqPNTxGLxzzu2PhWxdBi3HtcuRq8JMg7RXpjV2XWpqVqge11vYVUrhjgTKHDr",
  "key32": "3zdissqkhiAks4pk847iLXu8tmZYbbngjRt9hAzbyu5DGtyzxFLiBw2CLUbqYhLsXHAs9cxQ7xQhXTVe7E9ugXXM",
  "key33": "EaVMq62qxNxAKLwaaSYcXsMmCAnzEQNBNC7ct239tMfUjT9NC9Rpk2J7yWaYrPCdXyzwy1pKseYf4ZMdBog9FPP",
  "key34": "2bXEdY9jJLXJYfdQYpB8yZz7X4TvscQW9sqd7KkgL5n7PeTm2bUG6517UG7brbk8GQibHvmozzdBp42s8vC4Qaud",
  "key35": "gpno7dVLBwBSVP8hUjMWGzTpm4SbV9q4oMFWAhmYoSVx4LguV1KTQJCa2o1R1TBHJWv2nofNh19VVxYajEzbMNQ",
  "key36": "q9qCFj3542fK57Hvc4BDxomiXqvkyhrt6CEH7e58U6SJy3kU14AV9ePFLnBqVJkJ1cSXXVVdjJqgLUqEqR8wWSA",
  "key37": "3hZfJY3UdnVUNGmmicbD9rNqLn5UGpGfQjAs11t5AZYA5v8XLmLGnQuRMn5g5JM2dN8Tw4BhUrbS7Xoavd5AEFnu",
  "key38": "4e7buWyJHG233NhvkV3Kc2NV5YascJLosd7LjBiEmdB5XHVCgX2oqU2gmoiSQFFuy24zx8aYwoNAsdJ8r3bd2MdJ",
  "key39": "4dfh6i2ozvPtpPDKjLu1m5JyRNU5AAXD6TN3B4FJPiRsWupi64hZH7ugEKXQVwHcE65i1nYyAxvfYX9PuxEeEkP6",
  "key40": "NpHFKDStEqDSs9e3XWS2b96SZbHWeXULCFqEwdj6HvNePthMWRRtgYteor5sexgGRxirM5T64xuobsRoGPWLyuE",
  "key41": "3SAppmtLMZEV5NZLjzB7B3r9p4NmMAs7vNEnh7CmJxKYpHMLai3N2oUZ3xoypWEEx7gJbAEqV44Zx76ibE7Lfs5K",
  "key42": "4cnkLrUx7oUNSoUjdKAuaoLYY9GFrnHSoAsUv8MySYoTDNgwVJi4p8b2HTu8zno7mwnVrH53TaWNryFS5N8Ax3uK"
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
