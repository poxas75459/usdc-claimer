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
    "3X1WqQMZWHXHQix21DTqoCZmts5Ciyf3QXdsLS7z3N479YKegUJVa6UaLRvd2sEQ94gREYsHLJJtvGmXUDsMSjtq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j2WbY3arF43wWJ6Wibe6wsuiBANYXUXhv9D7b2L6HkXhHS7nsJKVeMj6WQJjeM4hxnZ8tNFaGdq9JNjhmME6cmS",
  "key1": "Nku42B6GdFuFcBJpbFhGCEbNx5qhfuHYPQsJDJ5nf9vuTFZxBy7Lh8HZS2yRAGaRdebDdGMzkQqwU9axu3zdh1Q",
  "key2": "UscmB5uSMZdXBTqM8XFV7J2zF4LXabT5iuEP6U7KRZwyj64ZuBEaUSCNBxUGTxezUA8eSguzZvGUScBviTUmyCg",
  "key3": "4RsXEbJJJ8QEJdLpD7DQ9ghPeKxpaZTC5KE99FxfVau6Jce4FFbPXsK8rtJor7xjnvMoCh7JAfftDvHwd4zQazrM",
  "key4": "42rb19zzqarm6HgNzKk2Tpg9zd49yxEn2KhVw4k4p9FExbXdfW4ZFmWf3xmcR1DsKs3ZFYxqS9xtHxJ9TBmyAnS3",
  "key5": "26JhiZwgbFGGjgwStsdNikWqKm4UaGG38QHRZfae17pesGpTyqfALY4SCuskVk1Zoahq8do3T7SMUMpsdVErvy9q",
  "key6": "G5qZbYTjV1f5m3MATCPrFJqXrBn3SbcpXLwyEC5G9Z79DCQvjfpj2Yg8vCsui5RhoKkH4n7Vfq4KTjDRumNW7ng",
  "key7": "5eW9giPcwkc111hkK61LRC5XzjeaK8Q7k8ArQYJaSp4UJuTAMdEqHXa5kpvJd6CBUWbV7uc7XjN2o8cXuG27PG8c",
  "key8": "3xPGDV9CriWMTGTwm25Aswxcn23FDXSxMoUwbuVGNpkYoKqP4JhhNJZ36xoCmjzb1bZEsTb7FV4iCcSXonp66pWd",
  "key9": "3UzZ4Nyd9PyzssvuF62MYgN1iR8txwGHqtSy7dM3GF6SUCdBQSxKBWJvZD9LnbVEiusVviPthdNVpJ2gYaeqrYAR",
  "key10": "4GT2LQWEToh1n3wH59k3KZkhBs2k2mCdnPQKRrfPhVpTgwW6Ak5tpwP2sknmLkm1d5fYBujzFwa4rVUD6QfwhGpg",
  "key11": "3wANLqPDcxYCVWHqz4AmCdCoi5CkGZtLJXmPV6XfsEXdioCvyN1kne9N7yZK7KkqMAaNRBWrRTD29dDUJHN1N7CK",
  "key12": "2TEXrwYnWfTaH36q6ReSf5LEgvd8iFcJKR6owAGveuNgtFza8KnZeTQfgPcA7LZK5Lt9XDA3pkbn15c24D1UvEW6",
  "key13": "2fSxrpFMXbUU48MrpRXKYBd54WZhFmEEpuRT7vBcdCr4EvwhbMue2oF33hRyGMWP3zucxXoAgTYhGCDEuu15Zrf3",
  "key14": "3K4jescsseMN9aRtDggVR1zFdz1CNCvUVtG21vLEXPZvAvzErKHJGVXUCTRQvG9324zSqnFb2LK8qTnZxyrKY7pF",
  "key15": "4HDwA8M4HC8ZAqUgbGSzVs8xmroH9spbXpUGqJsLhKDmFJ7ZT57KgqdGWg9QyXQwr13dVvcXCsTHqy6xmPoUgtB2",
  "key16": "ZQaWop1TujaY813nKQd8R8ccEAP5BCAyGAy31SwqZNRqxNf6eNQLM2FXFPwLSDb5EHEe99oZQo7YjjyqgNVnGDx",
  "key17": "21nY1v39CAimkfg8Yvs6erE94G9GGrcaeLJU5Ax9adHCGJfDRNsj2GwjhKjD9gGzACjmPZmmjZnCGHi9uxXiZe5b",
  "key18": "5Ax2oZogggEVNL912XUhmdPCEcdPwA3uRzTwLsZHepJ7eFFEU5zFBzRjM2wkjefoztjU2jpxTPFyfafEhFHBCNK3",
  "key19": "2TCWTdKmtyLmPCuTinVc4UJiMN5XkrQCXMxJXmJaq4soBHpVbfwyX8qtiTrSXkTkPe7ADAwswnU95xZuf4BZsJ2X",
  "key20": "25QyoL85X6sqhkPUWRRSfETVsCD4Eq7r4idU37VUCadGiR712vZaFMcHf3CtVXpBM57e4bstTEJTqPoKFg2C7KPX",
  "key21": "3pfG4SEpYCjjqprGTKei212K1MQLHNrYT2u4aN6N9GELMuVcupXFFp8xXfjEcw8Z3v4dGiFC2HCLYGNteZia4wJa",
  "key22": "2pxUBaA2JhwBYNPdjLJk9PqryfhCCYHx2g6Fw9odo4n2g4R22gXHd9Mig6L7y7jQWwms4XnPPqMP9kcUTAdZM5Ks",
  "key23": "2Kvd6ACpvaBoVaet6mS9n289t6ePgQZTndJeaQLvTMv3ZHwGULXEoAESnpTKQTdGKtH6M5uLcqJvGBrtw5HKvr5t",
  "key24": "3AGRvxzHSBiCqrW4mDLWMpF2QSnYfZPWymTcQj8Jz5wok4fK7n1ZxgUuSZM7YTyWepLkgT8npiicAC3SRb1UNwDj",
  "key25": "sJQVsAAVoxmmu4XPq7qpPHKHbPYCDgLDjwGc1tcXg4WFhvjHAWDyXFvUwC6nfrVg8Vu3zET6X1tKtUPBAj3fZMH",
  "key26": "3AUoekVPYoKToaxD4VMv533wbkE7X8L5zuc7k8JpnbdE1VXAqXxRMyRNt7ysG6NrLoWyY7fGKzPby3dQtfSmMB5g",
  "key27": "qnyrsREGH5HCqH3oJ4cMgrs2JuNB9WaFjnff8RGKeRCLXioCsDdRVrWAk2Nhcg74imnrdn23JuPnMQCh1w5aQeZ",
  "key28": "4LdJt7BSQNBkTvAxrLSFtgPxQBd1zAqNzMeNZeuqqd3gTwkvL7tDP8FUwtcKuVUspsmrY88d8HLPU2jUnYMei57d",
  "key29": "5DzXfSVFQfrgEG5JJZ99GWzMB5mCXNmHnki6tfSE3EDFwcVLw64bMosJjaoiNdksnGpq7pfWN66wq9jv5oWUHWvr",
  "key30": "4E8D3WvepAqvBsLx3GXNFZPPKF6zxtYuj3A2j5YWb1rP9zMrVApnKidhiGKYRPEbFgtMMGPPYsDVUVKYmijBu5cE",
  "key31": "4CojYSp5ikjdNisTmnG8kCjCmkxCViC8FyVbAnDHR8iLd85GDN1NyDDjUuo8iHKbRK8YC9QjQJAbCHpMjCH9EiAr",
  "key32": "2EaGKCkCtqKmDn95T1yNsJJdcNYYoLVjxqHRBUSyyZ1oZgp6HvLSjc9Lha2cS6BvWQEzbSrxMPdyYUpWEmG6q51D",
  "key33": "3HUgJWAPA7cM3HGa9AyXRztycDcvyj2vjVw1jTsEcbDmzjT1e6vLGEG6M1fVizzZtFRL4RAm7mqE88Do7BKM9htN",
  "key34": "2Co5VMcAGA4cgUcmjog5x9gYq3yHCG7RJB3aqguRprvUBN39ePyRv67h9Rgu32QCMhCCJonoCev9tifAFMwMtgua",
  "key35": "3XTiUH8oFtHi8kC2Wqc6oto1WUXvvXiqPaMWwNNCxQ7HvQv2929XrPoejpTqABVKTgQihFp8Zm5Bbr1HAYeSPChB",
  "key36": "2PTPsWvqLqPFmtqTkMXveaihYgg7pjQnnAgDjKf5CMFxp4xowHDoEZjg68goATdaV9joqGWJtcpyEjhHJLoHE85Z",
  "key37": "5KgeYasfjP722LKqxuwRu5a4Pbg9eG3zNeZdsPmcZxxcVUguY5Ht81H8yaPq9vnu5J2SGvDhdE8wTx6CuLyLV2JG",
  "key38": "5RXgmXUC6h2AeQPqCf4YvtdfBXKSeknyiEeXDhYuo4pdZ5atb7UHooES4A38TvEZcSmaF68ikx1KdCPvx9gkmNtx",
  "key39": "53zZcqooU5RMJTFuSA2TJK1DmjyUx5yzpRABc14je52oLAZSfbDTGnTKzn3uunka1Zi6Nd848RVDRCXc9P31G4tZ",
  "key40": "3qhLvDeknv7vMVe7WGJxB9iF37TxxNnVrrS5KERXCfFnML9YpEKn6JXBqoUSobgXT3KUvqxXFJ34MDdU1Z8pMTqT"
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
