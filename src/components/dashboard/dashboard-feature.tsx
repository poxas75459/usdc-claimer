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
    "5wXn34U9e4J7QxGuHKaPMg3htNvV9L2omEPiHstD1Coz3rmGaP3RXKQ7TczukcVevw78eScaTgBgAUi2ALBhcuhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54G5mvFASSMnECj55BNygbfosbL96ZVmt9KnSyXYi8XiiJ94djqqNHUdNRRW1ak8FXJGiJ2UZkAshfDQ1FmhGavA",
  "key1": "S1pqVu3VH48vWNhbFnh8BwnRC9xCTkeQZhhyAZw1NzGNkndzM6sBb7JtoYUpiKTweTEVxMWSW7hBWp8cR5x7ErF",
  "key2": "3hUM8uPN1dhAiHA8w5ACHMidFvGCXKiecJNqeadNU8nGvZG8eTZuuzX44uKMcUDaX4X9X2AnVzrqhhax5SBHBJNS",
  "key3": "41eQjNFB87GHK1TbkVApWnVX1pLnJKNGC7a99qJHetnpL434pQj82oDJxoyCHFJZVa6eGKbabV8R8qdBxpX2rn6i",
  "key4": "4axkn9XRU14ye33ycoqD6tDsY9es4pyFhFa9i96pea5dz1bjPSwFEqTZiHGCMD4svwdvjkieUEHK6pWkVTnxwHGK",
  "key5": "463DjoJM3QMpj4V9i8A6x9r4LcEPVHcLmsciJVaKtHxCRgVM31qQFDuigZacJCV1oiTetTd62T2h6Ya42kuHzGBC",
  "key6": "3Uay2hf7A7RCd3tahpFoqNMg1JkdceqqLuhqTwco5bKuF1TeR5NL3dzkf41NWaptpPy2JKAe8LNVPquJr9vTCVPt",
  "key7": "4eohmStwqHsh277GfbUXQthr7PVc8LaHxcyXBFcACFoG64uHZmA9SgPzz266cTcpxwm2xdgtjpkNR3NSfKiFsJiu",
  "key8": "2mVoxfMPfsspHixjTUNRR4GgzPYw9tPug1nenLXXB5gFhWhgYgTFvdvs37TY1QdkmytGBE9ayKpDTmoRjVzZ7Jtb",
  "key9": "DHWYs2hSN3VxmHv1V8sgx74zbBUuArPHHtnsvPtVo6fBX3VUcqhubgQSSsETL6mXK49P2JxZjt6PiCteTQJJjWt",
  "key10": "3jgwSFBMtjeKj6ntL3y8UiXoP2Fr1nfEZ8gPVp9nzdnrJ2Y88jcpHHYoZP54KVoDX5MSr5bUgZF68RsoapyMHxsJ",
  "key11": "5GxaKR5htxH1Lf9iwdtzE5Qesr4pvV2vEwj8f8rftqm37LGA4pPvHDAQiUGjKuZMDLfHHKREsFcWm9HKfxJKvzCD",
  "key12": "5et3K5hyLF9MG2X6go2n6BwtBujDmLVrMaigsv85D32ieDy9x3asYjQ7naRPqt141nnwyqHwyyhFEeNC3HKkKNAt",
  "key13": "5ErSWqddw5oS5Zeeo4fcSPQfqQ7nSJAGZzbGiat3bJGnXxAi7ZxAQv5upg1DzwafbuTHRynbFEUxEzFqK6cqasGb",
  "key14": "3nCyphDtGBt68Fv9cdd1Dg5yTNEKEHzKPwehAGMSGXbiLjxVzk4g6HhsWdnQYGSmmMSZ3krVcucFSXvZdGhzU1ad",
  "key15": "3SvJCMeDJUc6KzfaLTJqJGxdjyRZGkv5VT54HMkPYiqEJK1PbXnyKh53Yfuh6akvizKXNVJhCWwAq1fyW1y9yMWz",
  "key16": "2LEMhqhqfsRi6T4HuNe2twinfCodsumKZQGDsPpv9T9b5d5oshrC2ZQDUVmuLHRMd1b97gFCvMSLzvV78xMPbh3p",
  "key17": "1bJUxPVXhiwvNq22yG3gRLuto913gxatQvYvY2uwuXp5CxsPjrJsefnYRRa56TWg2zYa2puAgsQdc4kALTgeFG4",
  "key18": "5MfGZ26ti29ryoaUnGwVyuKUZKcgiTBTjgja2KjiYis715BQNGWe79rDAPTi82FY8TLHMubT2LW7ErCK6wz4m8Vr",
  "key19": "2Jgruf69XBhtvxVZXsaqR7usHZxCBu6bQv7rDAtsaeTQdXJMw6dumu38DH91xYr6i1ZbZBkuPrpivMR5xAH9PuRP",
  "key20": "48ZXortKfKqQ7W52T1pZUay3ssny2fupY94FnmSa3NGTDdHA9z4HYg5eg9Xar6uwrey59y2W1ZSpefabWMZNo3Lj",
  "key21": "27yqaQyQtXhSsK7zytSqqSeRCPsTemtmArTFEBbqbuHfEdg3RWQgP7UjZUQbwkY1kBEMfr2j68RcCJwn9cPESqMN",
  "key22": "3x8k2gmyBkLwqdP1fJbqWQKZFQf7n4pmMTGNGBCJ7sRdTk5vNEKnfqqtybxbp2pSVo6Amh88NskKHuN1X73BpxRX",
  "key23": "4X99XuykcdbWNkXyc8WULxCKyZHU2DmsXmvsBSRshaY58q8MsqRa2nu6EqaZf8cPRLyTEyrq91VwhLhibyMsmGjh",
  "key24": "q3ZAw8hfMqiGBwddZNinCCUnSjzdBR9QJXoTyttK4vDZPU7kovePoa4tjsEeEz1whADrsmfget7EVj3sMkfx9gR",
  "key25": "5dKKGiGZGBfDtYgxXqoZ99yLZ1bhmZy7fu3TfH5okMUqayZmAts6JHXXXXU9tP78hmbDtV9a2XX3TXFWxPznndT2",
  "key26": "57Qcdaog53spVRWDPo6UahRDcwdcSdr7jiYxT4C5StyLC5UP8AjNiNCGiVZqkoMKTjHdwYzB3RjqQFEd6PxYTLzS",
  "key27": "2B5urZ87Vg4K9fgCuU88UWVhsbrcmk3DiJcGhgkEinAPc82EbSZD4Vty5hJYvJKQF46ykuMGh36qRtVEfSfC4K3",
  "key28": "4o8Nu8ConVcB2j28eFKAd7BE8bivG9ctxt67P1YcGkSKK7v4zt265ns4gzrfP75mBZyZuSLCgWkB6pHUaWSY3EbG",
  "key29": "pnfqo8EiRFFGCugneQtU9DUii2ciMgtpGhULqhaTZTKiF3VJM29tZgQd6erA9mGp7DEoRJjeZ6VodSm6pbmMcA1",
  "key30": "44jJPTk8C7nV5URVV3sX3n4igumsqFuzqVoHDdS11z7VrMEW1ePKgvvJAVsKGDdjojrwii5xa8DVKotw3BXkyTwb",
  "key31": "2tVKFYM747PRkt88ZMEzYLXWDVQ937Ra8NoXVmLJmjSdyzyXQBRUTQM548m2oCsGVJaycapcU12jyeXw2n2i76Fy",
  "key32": "FRJrhzBm3Gx8uFwVFNcRQm6QZ86f6RtMVMvvYDBqkppqD342ptMpFcDgxQScLUXHYGd8kxoowVvMXVJst9Jhxmh",
  "key33": "5i9T3ysrLTP1CNQHoAyHZrC1dYMNBXYuBJfsgqsNJ9KEhvmG5arzt7vbdYiR12RiSfwgbqrAAo9ALnacgRaPv7Am",
  "key34": "4zwwqMrP7FjzsewcaCHfVRWwQZm3TF4gu5AJkgxebgc9G5j2UvjG2JbG4Xwzzq9aZJFTGFF6HNhxnuCrXsNULRRh",
  "key35": "2HbQi2FvmZxw8QnoC3DYZudNekbAwNkYqz6SYY9mKA3WL975HHWwuA8MFcD5vsoWmpqoNfTy6qtp7Vm2j3XzjhfR",
  "key36": "23UDovvVjjKTQA1AmCnFrh6v2kxAwsdRgKwh9H4kiPxPuvXX6dG14sa4MXDLmusTW58AZZR4koiQhyqE6pHBAETL",
  "key37": "2pGbTY8MR52BKqqehdV13i65HY9HibaYSKBUigt7b3GPZs8bQ8UPmSgwmF9WiqTrvrNwEYkazveMdhtqmjnp5hrg"
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
