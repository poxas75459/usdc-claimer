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
    "59vsowNBp7CeJnSrW8YhP9ERZmUYBKdxMmWUinqQoBSc88jqqKRNibUk4hQsCM9JRXMJ3bHgYvsXXyX7gYMMqYN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uaapUiMtbUbARyFHz4WFgJWQJHa6jHRzx2Z14ZRaZ2htAoFLydvfKv3fjoLL7cqkbnoVEANM2VYnUCpPNuzJ3o2",
  "key1": "4ApHAENMzEC1eGWBCKan8gyeyXFyet8JusxxqDnesYLyDoCysDwRbDvx7WZrjbM3MMncYLdgEpve9JS33rs3z1Bn",
  "key2": "1xtVgihfFhk6VbK8QjqV9J2cNHo6fPRt9sXeyc39jmTiNrp99GpJfAVAj6GAN8agejnUjkm3u4qEnrJsNqNuc9B",
  "key3": "32aXXSavhHfN1w7J8vBRLNS2KFadvXuKcHfohP2QAx4h6FNHwLFLA7ZbCaug1yp1MPJfKJzoVU3iUWEpyAFSmmEb",
  "key4": "3MyyAYEnhU6VxkaVmU6UUtGqhZLkg8anjKvZjdhCa955fYryPtuTaTgRFDswjAkFw6mfdWriSjv4Fah5Bveg3oCK",
  "key5": "2TJBByXpW1YTuMQ8io327DD1GAiHJUF9n8SqLcfGt8ZqMzzRNabeoGAJdDBg6dvyXcrCMXcfDBx5SNPHfFRhYR8Q",
  "key6": "4zjRiou5ZRdvzCe4W6LFQem4rsTaTe2DvrhXRmCT61d5DmynZ4b1WF9EidsuWz9dpQkTj2Wb4VwfUHKFL9UBtaaz",
  "key7": "3FhxjyuD7EZftZiVxSbkAFtQAAj4Mbiy21ajB8C8tNq1L77NnGPUHBU12b9CxdZaJR3G1jjYP2KFsNNtUHYkzqaR",
  "key8": "2kmC54Sz3YtCp7qqKQmp7v4mFCa746JVV7mXChm4nbFoW1xqyqZbkBvHxjF5ZZA97mf9xVrrEa7AcYHGrQA7ABks",
  "key9": "sTGESb7XTd1E7M2kMr3n3JmGsBEDCcqWJkKB88qLrxk687xgrteGbwp65xJ83dLYFLd8ZkVMg4mtFd1jaHfeB4D",
  "key10": "4S1ZBbCicjXw3uYsWM9kJSKhRvWfeRk8141sZ3jEQTAmJmEPnWv442u19gaDCMP1KfBNK1ij5RqhTfobkhn4xrJG",
  "key11": "5Phkg7CDYyVMg1LJoKxHTTyrdwGEU1UhDKTrnxzKot7kVUFH9rQ8yU1MdPNmBZnUb1iTJWxPCWrhD5eUr6BmRCeJ",
  "key12": "5WdBeCzy2GjWkpfuj2JesJNL8puyx6Y25ddtLbrCBUaPh6hkNBm3bVLH2Qeum4a1MzDEMcqc7qT3krdTCDKyTUr2",
  "key13": "2DSnZRG8xoUTdrcYVbrHvjo8S7r1tNi5oEJeHzoajvqSeEja1XibpCa5kj3X98WwNcGGo9uBHJzHV133DRureoQd",
  "key14": "36pDNQTY3oUiA9cMisn1gv6spUxYFRScC1X2xe5gtwT7nnAF9hQXdrfhx7AqYBMNzqr5bRP71XimHRPSJvX6P12j",
  "key15": "4oe1kdVGiazH5a392DKsjVECa9xkEK2kdWe5Tc4G9HEvKfmK2yvSBN6AeeMp7oHGvQ64sCHT5kM1nNDCTiBgYJVE",
  "key16": "4CyPrWyhadsveisiNVVpbJKPMKhaHDS7SRRzRy1wFnspKXeguJUjec9jy9Mgqka7rDe7tHrdczmo1LiRdRj179zE",
  "key17": "4dPnWjCbgacVDS6AN284MxYdqFZJYEXcgSuRXHtG98b2jKzsK5i4i5DWBV6Ztx8HDHj7K19pMygN6pYMmrYnocTN",
  "key18": "5XB5j6JanhobEMwXQ2bVHsovMkv3qNrcKszRSFDK92RmaywUUYa1KfYqYDkPyFAhD6xhCFJnG14HXmNpRBMFiWSH",
  "key19": "3VayBLMyrwBU1atDB2NrWq9vLpJ4ekoifvN4VtXFY5w7NxZPKU7Ga2zVcspcKwFH8HUAC9U8xEcMJ9JUvxzUif82",
  "key20": "2dFFBkCxqFcf7BuZed4bx9BgDaSaEEXivMLjumNnXH2ZqKY1raqhyc9s74xrXugRHUobDmXgAXBPzwwqPE4cEPE2",
  "key21": "CLc1f5V5kVQe57SyCiJzXcXrHsiX469XafZTjXQBQrzSiYTPcYZAYtwDTamBqgLDBbFD3W37pPKoMFCJqY6UG3G",
  "key22": "3jFfwRgs68biz7b2Wiq5GFWzzYCFRRUqbaY9LV8WFgnRLgiQ5P6ZHCvHFDGPL9dQKupSPsonqJbDmsfiDpWXn1nv",
  "key23": "62kfRozg6Kih9Dw6CyrsoJ9hEwsp5tnjpS6fmswJ13Xvcx3qa1WDht9oVd1X2oVrXia39hTMyzEixXYfbfyQCRG4",
  "key24": "4oJ5EgZ7ofykFCceYfesr9DEqUnMnroTQokSbNpv7bJBATNft2NFHs8Kf3brLxJAi19iv9czb7s5juW7Cng4K9KC",
  "key25": "1vdoj9kHnDjkgArFL5rQtvavowq72V8zRHUrN7M57RGCHj9FibuvS7of5zdDRBKPcWAxHxcYMmQRyr4dgHRktt7",
  "key26": "5ghBX1uJrFyWELwrEQStagjF4MRx4bkH1dj5ichxnQaAr5hkd78fwiX8gLEFY79HkCdrZKrt7nNpKqKSJM4EFMpi",
  "key27": "3wAH754CCLp2ThgXfVqif7DHcwmvCBoGKWJoCfGws4H26eMWuTsdG588WLWJJfbYF8XH5RLWFSfa9LmEpz5srcCF",
  "key28": "29zegVKKjvqNroqFrxXF2bCm8SqD6aQKHzzTD8nT2MLMufoqXgJvwpyDSAfG6fihTXAHtGtKPKKofJeEERpiUDTP",
  "key29": "2AuLo71VpsU9ZMoiNww8jdoeK9dhf8nFhNuWPp4dZX1tptGpurbHmkctxds2kwt8pJn9npJ8f5Wp9HEDn8SuTt29",
  "key30": "5qGkniVdyMZHUPqZTHFV5LY1WTQ9Dnb847B34Wtf3QMB4yHRSBuiudsuzUKZqGWj7xGk6av2GKTdLBJL9QJrvTYy",
  "key31": "5x47yP3jKPKW6hEcAijKVU5ePWsmPGjbe1nkKFGCM3DUNU6bUZAAFU7sCohWbBaKTBxhso61sHsFC3DFTGfxkz2z",
  "key32": "3tAJUzj5nHJz2Kbnp8KFJhbjZvgz6vg6fnP81znt2NXKCLGbYHoBG2jrccbUDYTRVFZxL4LwVwr1q7mdvkNmE6RF",
  "key33": "2W2b5K88j4SiRBDt3YbJUwQKWKFbG48WZMUe3517cS9xfQvjEPz3Wcu4nA6CQm33SR4MF2TX93aJaqgcSBW6eHEX",
  "key34": "3MDove2Vc3gURsQLLwfWnDQNJfvftC9XBp39T5PrjYaaHfE2xL4JZCEuchiTf2DeUpGowWBpPTMfpE92KpqcbkZQ",
  "key35": "42wa6v5URg3zxm4B4MMibGvktnzdm4Lj5wa7nUsZAgZdksmSCry992BgSH3YiKEhddzAFr6NDn7Xy88ryANPjz2o",
  "key36": "4a3DKXgDWxoyHHz1fF7wq4UESSWyvZhr7RShMXDHnSPUQdkAijjKPMMAy6rFcfqo83drDttincpfshoy1S8JHT9Q",
  "key37": "67KATkp4EGTtAvwDBYNjPZkwmShPisJejfSDHFGhHSzGfpuVxzCjRnzstaQTGpw7CLaxyJp7TCnhdjEowo9idNqR",
  "key38": "2HqCDPWdWSyN9MhKwdfS5njMDrfswDVLqniERCPXawJVVrdK156yVguCGeDjD4qj6N6cwxRS3XeN9H5MhXknk2Vi",
  "key39": "QEtXtgP47d9xyLUfD5hgaNwUcQBgx6fCBpDvEwfQSM9nFnVjsECLjcMeGvqkXACoRA7WDosGwKemekQ8q7hSg13",
  "key40": "G4W6Cr9GSUH6P7LUNRkhdAxp9yKVbWKPc5CFJYaLk1Q4szzwc3uwRtPZcaa1YEfh695Rgd7tU9C8brcth1Jr3Lg"
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
