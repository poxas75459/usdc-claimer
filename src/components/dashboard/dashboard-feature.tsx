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
    "5uyvDoNBfpMH2HyAqoGbcmV8NiuChGkDNCdBxVMZwcvHeR6yw1t9ahSnQ7N49CCZyGqC2qinCFqvUvJeRTFBAhQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31UbEPt4NVEFybcf8HMdsQuz2jdH1GLZjEhZEPKFaL3ePdzCjjxUvRFP7X5ydELdNbgLZZAGt3eSoP1brQ6pVgxM",
  "key1": "5w59Ex87q1SF2NFPYCbNzbpgS9QSm85FT5V2LmrbQrBA4QUauMX5Ld6vLaaBbpx1BVSyFdiZNxNdCoaqbh2iYCFm",
  "key2": "2sG2HD7B6wu7KvYAvc3THPtGoSgeTnH4rwGb9YdBPCfMYcFPHsLUG1b2xDJwPrgjgqenzDW3RUPVteEtMHwWJm2y",
  "key3": "2XMghu4sWJDP74VGyKzTmz7hiSACxpZ1hbP1jicrrnP1sDNmCqinriAogsyX1v65Y5CyMKCfaZEmkdwzajmaqDAm",
  "key4": "kkDMY839CCYTv6vpKAcycnK1CbLrG9VAM7FuanHMR3Ccwh8FdpK4qERj4zfK77oNiLphzUmHNbX4NhuNHhC2gKy",
  "key5": "3rxLUXkew8sWjBqMGXVRmHumT9GTo5DuWw72XXZzPEx6TS9GAxjkp3sAaPqQhnkWAxhRL14zQezxXxnetLJtEYzX",
  "key6": "62339kVYeRHVQuMk737JbhWC5dbknEwhw2mjM6wtgcAFMUQZfgfFoxtrhtzYyHwynZnHLsxqzo5oxMcZz5P2sodC",
  "key7": "5meJPoRX5wL2Mji3WNKtL9esddQZqjAB1biEjbvdujjZMqxMxZFpUg4712f4HZPCLbACQf26dR84poDwUte7Prku",
  "key8": "55wgKPeVuSzAemMx9i6Npp3xocwmX5MMmYhrfCEVQYFGgYeNFdwpFK4SeeUJPm1fyfDcj7oQTGf7itEswF18z8gF",
  "key9": "eMRLHJ8ATsAgnFS3s7yWJBYm8q8unJ1LmJhuf33ySgUrw4KJNhMn1eQieTdxvPf8DYsu7tvLkePYTdXgFRg9yzU",
  "key10": "3CuAeJcLGGEhDZt889ZdNs3iVUtwugEUKzNo6vfJMzbB6X7M7RtantyUtfYBFTjCXCNrueS5YdWKuEMSFsv7oHn5",
  "key11": "4uqpGkz4tKsDwhvmqBJwJyLihqzy2Fy3HoWX44pqQig1nFPPa7c7tkrKo5SmvNRRvKzTVYT7eerDXeY947pxoguG",
  "key12": "59TuPtj86KkzyDVH7fyw9TKD7BA85T7kBgT8m4cBdFk6Xsx1Urck3oSFFdAASM6sCm1H5eC58FQRUuXmRvDWHLix",
  "key13": "2JUUiw39sQ3Er2qzLboEgMXBg3oLj3ZW1W1j8T2Gc9X6JVqJhUujbhdiMoUAZ7Uadcya7PhRVBdybWpCpmF39SvM",
  "key14": "XRVi3M7FhaW716LZruqVJbkG2ZTuADyN9YpFYEr8KQDqdK2N4U47AYHtV5d95cWyTtYxnpHasxbJkXAhNrYGPhQ",
  "key15": "3JH1ibUuntyL96EbphfuiizFZhEuDXQJEbuLKjbDwT7cFZesBgSZmCBb4M3DoLqjoQ3WeZcaPq6wbnsUEUBuXZ3c",
  "key16": "31ZJVAfyVJecrCCxfXfdzi24Jzw4iPvSexDU3u8hsVV2BSepyuk5SeT9P4gdRxGLStVuqrsx2fa2sraNKMAXgQtZ",
  "key17": "2PZGRnS4Fnh9sJx8q67Mu2tyag8WuvbcyRDaV7jpaYyPybEDqTtcJM8q3ESBa2mJLxFbj198S5ipq5sDQ3BnVUWa",
  "key18": "4i7D1YZ84qFboPhKPxLxXLe44Jf7ooRAbC6hSwpmpEsh8ZcjgWSpM2zyZgZC5aAJGPBsfiwiSpCqy58jTqt841si",
  "key19": "2HDRMzGbXG8M7Z3MPM32gRPS7qXZ76VG5VZ7wiXkbgmMPwNNVra6KaD57ECNpx6Xoi4hKiQDu1DUzCMXtrQWWadP",
  "key20": "512QDW1z4w2y8RTwGwXeti19kGpqGJEfR7NkdbFwkFa7RkTwesvfhP8eDmBkM4DgNmKPd4C7Az6sCVAcn3ni2hL8",
  "key21": "2Urcw1r9rn9MLN4osdogvNDibq5hhaNRQQe8isRQz7NFVKtirVo4uHmvsd17fJ4i1cGQ9N1VLLmByhPmvG2cW5W3",
  "key22": "3iqPkEea29QVAM2XYqPxsa837oQPArwoVigUNjkSz2GTLHRRSFiGKhc8kix6G82FwaxLvHQkCxtAMfxt24ndQju4",
  "key23": "5CY2dzoRDuXdRAM3FZ7jKpEFe6TAoRzdnPuk4Lt9e49BcV1ucBa7wAL3je4ttGYCuf5wNT5Ax3gBMS8SdEdSWybL",
  "key24": "3HQVd11QsyeTgSHZrmTvMsQq3tK5oQgFfs3SZ5ZNRzffVX6NPsgtDR4GaDM1GtJujag7VhPr3pPUXM2YhdJGmPA9",
  "key25": "kxpAoD67zBTzKCdCfsA3EFYst2e1djCUSErFpA1oJYTHJDk4FdMbPvTDdZKCfC2FG5rPgFWytZdz8EGr44Qnnch",
  "key26": "AF8iL5ar1aqdjbk9RaT26wWAoh6qgvhKBeKjJ8pZqCne2RaDmR9uFrZwnVKz8EhWyKvVLPK7VGMcVnsTBSTTs7i",
  "key27": "jkCANBeFtJP1Jmr5kAVj5shQtZ4scP3o19w7imRYWVmEX5NbU8DSUHV6Cp2wtbuDpJ8EuAjztEykHrWeymw5PvZ",
  "key28": "5N4ULPDZSGzYNNhHsYVREneAbYJZcukKY2q8wtzKYasBt5SRQaDo872Uu5wjfaedfigJfmT79XKEbxXeqH5Wap7x",
  "key29": "5ddYRBHhJ5eQ6utqCrS8fAsZG2jfp3SFHT2EnHesEGuZhNr1FrznPtjc8TS5gJJ4xJTigwBFtht6oTUTxhd3p3nZ",
  "key30": "5v5DKGdi5c7CJGSGqYiuxTFhzj89Ks5dZLz2wJva9cNu13mg7yApthCvomY5AykJX8H1n1NxyyUCQNbxqC61Qob9",
  "key31": "8jrGMqVmvCPooJzeyKDgSYphEgpUFRSUbQrugD6jUwjbNtMn1oKgqekPt67k2xzv3mHW329KGbUEYi9d6AokcoC",
  "key32": "cYFoWDdaWkNiBrPSAKHp569GiGJNDypDKD8u17e5eg8s7kipxV5wygJMjVCgZPkiPJ423M6z9Js5tA736d61VQv",
  "key33": "Wg1qWgL1NHM8E28V3EBhGoAKGYLDn25Y5L4Dj6yZ1CcreYTCj7G4japqjM9zLcPddxDT8Mz2uQ3W9HM1MAY51xm",
  "key34": "21ZprtwCEWSWXPZ6ecXk9Ew15VdQa75RxhHSzT62a1zB4bkUPnxkDmgHigfj3WiU26nss6NmhAEP5JNdwL3mjjep",
  "key35": "649cboptMnzDZX6SCJ1VCgqFK27TPCWW2zKQdK2h6M7XBLC6mqsbHeh9veL2LBqTWfmLLTSh9pT8EgmASTZUPPB4",
  "key36": "66iXqKqZPPvLVRwc9vR1BWYSX46pBpTJAVawdBJq7jBqRMCKmugAoQdY44TuFdhEhANZVEaV9UdPgF3jsN5HX6WL",
  "key37": "4gyyD13NYpvjrT1BBQvVsbDEQjPC1vBp8VE3xMktDpa5MjeAVBP66eYKoom1ZuzbaxfMraYNrZpVVvjjdX2VCG3T",
  "key38": "2X3fy9yz1VQTs1KydqRTpXmnJZyJNMsGvfeZCUGCMTjA4S1W9p4ErP62qnqMfBsgFiLQwGSe6TkPEmhJTVotoXRj",
  "key39": "2Muqfs2T6NQNcoEhDojKnzrQoZ8GnEg8Vy8ktrc7iW5xH9uSoC1dYt2ngayNxz7xZh5zTxX8Teqojih7o74tHoa8",
  "key40": "BTAD1L7AUPdqbNkU1meVF2GvSCLf2X3XX9EHPopdXP124XCqLkJ6QUwYURQ8nzGvRVRoUyLGJDWKo7Qy7mvfHLy",
  "key41": "5Fdou1jK4mE7CDDBXWwJrpENed6ufV5YetRYboDsbjQGqewNAw2RHHkZQ12vmmLniMTnsJwmaxU7gmXqD4aa6ekz"
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
