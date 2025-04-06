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
    "4YYz16xVg6zRVXn49qwhqxQM8w5GGM22yoPn1KG6MFEXTW4CrpVZbR99AKPMaDsjvkJejQVfhD8mggLGe84ivcCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o9Zgnfd68YQ2thAi6me2mCaVWdCrv3Er4zEK3aXHVfMdJTwyxQ5neQWaNkXKYHW9CdCrSphRW2QkL5XmnhmaXeG",
  "key1": "ZdgMporHAGAybKEuu4ZaTJPQsUBVZYdhXsuJnc7HuMYjsxGyMUEphJNvvxddTH4GGX7isS7kv4PgeJNZmuEpdqn",
  "key2": "5RvgX7ZtQw9k8gwuKSAbXodSTBKYCqvdCN2LjNyfTFt7HU3d3VGQpbzp1pzdn3wwAAUnFxxXAXwktdLKcosgoqa1",
  "key3": "4MyS45XiKEjze64Zr6s5QhjL9CiTGo3XAvP1iJ4oX9TaweNqETSmp1QSxo7oUwXmwtT4a4jo3EpWAX4R3KGMsB9E",
  "key4": "5ajbubpSSzS3vJKLpPxgGLacNTSa5sHoEauMHTEYH9krQKkDH2oNYnifNHbLYBiM48gBCUp65vBScG9qcMjD2CP6",
  "key5": "Nqdy65TXpuUWRSM1Rwi9amEGWckLhCWnjCaehDrEPdf1zYeEDKyTwQG9ntzkoiJQ1MEW6bRUMD8k8ear57aBzNX",
  "key6": "wkfJoEoXW7k2CgSNqMshJpZ42Eeg7FjTQRAA5KNdPEeiq23o166takjBkiSumc969Kjco9sCD1x2AgENbWbjsuo",
  "key7": "27xuF1dauhXEcM9TdrbeaDFXbtc3t3CJ46uTEEqJeNvzb7au1SHroVeQZwYsMS9xZeXk9TPf2U4zwPSKPMrHrRXL",
  "key8": "zsfmedWdysaywCzzC5pt8fE3TPAdV3cNFZymKamRUQjy3LsKEHVwwFbJGrtCSgY14Ha3uz6aJ4J9GKRdT8mGLfE",
  "key9": "5BXQfpG1913G5oEKEAr25FACpUpk1kGYgtMDwdkUfsk4dJZbvfJnF1gKgJH4R8nXgNhEf2ydA7Tm14SK7i5Qqt2J",
  "key10": "2UaVydSvJyposDJxtJfnxcXSyqs3FyytgPQqvLBJs1421v6pC6kU46Qg4csYShqYus2i2NuXVNWbH9TKe18gtzcM",
  "key11": "3RaBGEKsMZrnSHLCgHjcBrDM5EZ1oD3QTmjegh3EW5MGZjjUm9B7i54FHV7rDDnwwRMRU3rq1SH8eb2gRNm7ZC3p",
  "key12": "4JSHbceTJQ6H6pBDgp9ZuWpAmeALJMCeSwmWfFvtXPQpDLmFdWikuWkWwZrEgDDztj3cZJjUT5Q8mHRnXbHpANDK",
  "key13": "3hCjCFBtAmUk9uPYP7BZMHUBGLRbVVM24QvdTwdqxnG1NRhWsP5Xkwwg7wWf5th3dsYej4fBThFcaVHYH3d4afWD",
  "key14": "2LX1LDPv8zKXaFoqyH5EKBh2ifP2zotgfWvcHqX7PuBGZuTQSqBGZZkuCp1uCcKKg76hAmhgsxPinSB9TXFuyq1T",
  "key15": "2rm2hiBq4WXYAWn3KjMFrdG2AKZBEUoLeT5uqRrc96T67Hs23qUYaWhg6Asa6vw4H2hbVbmwHuKBTvB5emJ632MA",
  "key16": "4h64ZtQkoMFu3WXpUn5stjxzEFAWvXtQygys5gbddqupa7zV2huBYCH935SPQLeupGFsBC4nGBgA6EsNDQmMgCbw",
  "key17": "5eMB5iv1HMLU1HP5CABVn3ZMQh9cdxbrNwNfHdSEVutTnLjzsqwLXcYDQEG2LYwvwF4MjJPptAzJFRcKM2XkfJda",
  "key18": "37PCRsrgxKiCvpXPETFn6gAzydB1gbFAsJAzuhQkoRxf228RG72echAtAfJiVZveNq4bsNuN4CKW9yHhMKrdmh7P",
  "key19": "2xLWBT726oZZQUwjMZm9Qy38NQC8tVu5VHZxbhAs4A6qsrouSHW74Eno9vTfTAYNGDxGJAAuBmxu3M4bC64Qmqom",
  "key20": "3KLXMfkhyNVVZhGEp4joASaKQmyFR4rKxPPmnLFoi3ZfEUNYdmaedPxNnS67YwauzeEAVAMCP45raqdXhQtyAPfz",
  "key21": "31dC4LHMJE4A3vJzBX4gAPokgCHbofb6jnmMvnpmtgSKoETCtKr2CWHwWWDYm7CwyT5y63K7P1KksQ5gLakqY1mM",
  "key22": "2GHZVF8wdKsbjcFXsNjbvLsE1eEKWDtBUunUwSAQDaZqnX6ipuvV8Kd6SknAAuDby2QtQEf1CK113oXJwUqKBrph",
  "key23": "3Gcseq4bgwYmcXGoiyy2Auru1ZCjxu8LYNSbgBgWnyos23xt3pRhpArwz88CnkfXD2UYrEJMz6SjLNmY3LybKDAe",
  "key24": "3uykjMyL4aGmEZJ7rP5u31q2vhAnFTawG3LmcFdp2Z4YoC3M9t9T2PKxjRCa3258tK6X9uXb9k4NBfsgZoPXo3LW",
  "key25": "TrfRgBmvabXp3MFSufxLqwsLb7S9ug8DLWzcUSxd8YE7Bo8qGjbx96cF5bGpgK9T2G7Jof3pXxSQoCKPCGWxwWQ",
  "key26": "6ssvABxnTmn4pzwDH3rMacd6C8EZXU81LfwgvxfYM8JuzktHLcDoXEQegbq9uJdUsk2KtXsk3tpXU2EX9h9hEwz",
  "key27": "23j3S5BARtxUBpYet4K9aj83DqL937wCLMgQKDqqFdCQjwu5HeAHYX94R74L1eWqXfzFADVBSAdfhzLK5wvrCK5b",
  "key28": "2r9azHtfJqgLw3mQxA8fX7h5cKajH9nunhHMpQCRn9pGcXFB58SM3YKCTQorSpy7JKTeHfB9BBo5vcWBjbB24Xwv",
  "key29": "4nFy8UFqdaSkbxTAztoBRpv2kCtCnnWaDibqgHAvMVzXN6oS65ghUVyKNbruZwYqzh3rvsVdN2LBHM4LiMNrJdEi",
  "key30": "42RP2K45Ce7Uf9TN6HHUmqiVMRXLGc6MyhAREmkiRB43Pa3rUrtgC32dvLm1kk7b7J8hYWS4Z7pgTQJve9rivJAL",
  "key31": "4xuAHQ7YhXzXaXvjdMmFWFgdkTRqPsMche1fb4wHssosuzPQgLGsC7NrKBxh6JHUoAAbn377Bgxw8vNTsSpWiyiS",
  "key32": "ep5cvPVgy2JSwfcEwacf8oaHhJsR2mCYLySPm2uMzzAE9NCdbXFYYu2q8PnEZmj3Si34yhZxP1d2jcXFKnjhKDv",
  "key33": "2v975fMifyxrVx4LdWja63cmb5eLRQ4UrVEDi7vfBmZjA3FP8h2cZh5gsBJYJXSwncsP22btyGj7cBEuQuN3hA4A",
  "key34": "45dgaTqJ4tiaNRZc53jncEt16s8w1iTRDPHu7zWoQxfhyinnny4SCw8LHr8YJR9JhRVke9kPkhm4raiDoTBinibH",
  "key35": "gsrzSuiYak4FyY4sSkFeMTU2g1vvkWcrNYkxmobMas3NCELx7pztz7Z9KCSTSsbqo6ySC85qVsZG7kmrsMGkKSw",
  "key36": "22reeq7p14pGKdmvEWVA5XzyZzn9EMWYuVvNuHcXtB8EAeUVEBMBFrbbuDzWt7iWT1rkZ4w67omX8wuNU2oiYDgb",
  "key37": "3m3U5kJ9BYQCTeRyTFdkZU3LUEmz3uzcKECLsHE26z2DsCdDR2ionYFzE1raaDnf4PvHtSQybWWyK1sUad1tPs8i",
  "key38": "EYaweW3CTF4XiPix7MbFDQ5QWXbw4pq7hcPrwBg8157mV3ihVmUSM1z8QYUHAv2ojP2ag8fU8wZ9Ei4buvvfsML",
  "key39": "5bbPaQJ9T1B4jDN1rAUHD9mHdpf1DWeJDrbAb5Fq5DKefcy2psfBZZjEQSrQ46BCtkbJxPey9DzzMM6AyBWn2iSJ",
  "key40": "4qG6CvVEJfGX3UwJRbfSNRzLokiPuzFQiaPC5UYYpjKvYHqhjvEgQHm116ror7yJW58CRwBXssHuoy2n6eEoMSmr",
  "key41": "2NCR6JZHCuQFpLJgZaSP4wH6WrkUAvHsgzZPZ7pKAWpZCkRt58zLfFWg96Kx1mnQ97YyuheShJuYD5NsgjgpA1tU",
  "key42": "4QphP6z2UhEriK7ktYM3VuwpKNGLbwHbDi1EdBGr6xWRCJjkN7u21uvTYQVfyd1fzZsPDCmBC3184waGmKNGdvdy",
  "key43": "3yKJgeRcFXw4V4nevpfNYBgoq5yDCoZRvkiN6dx852zHFNj4qKp5wprTGj4osg6xbMg1Zi4TBLzGKEN2NMF79CTh"
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
