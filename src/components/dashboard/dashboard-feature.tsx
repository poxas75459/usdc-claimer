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
    "YJNjSKRbuNqDy6mzdGME9x5KajdRBmereXdmjva6zDx9BqXfhMZ55ucSKAw8m9pQfagWmMGzJWodJbQ9rDbbzSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pmvbrqVC7p1R6RXGxBs6eoua7aV3bhtMnDZigEURpSoYt2b8LMedK4ZsT2djvsnsN3u4dUJNxcLnY55nMpM6j9m",
  "key1": "3J3LwpCfz3aYXZA9RpFcts27sgVM771GYTNU6WEJHyPm4grThDEtU9JyFVUmAYC5nVyuH4zvkH9xxbFEKHBmPwZP",
  "key2": "3NDTX47YwA5qGV95rq4EeW6GjihYGwW99R2FeTSMcLfxpVu3YiZR2H7S5w2J6F8ZqQQ5KXNBPD7m1i2ympxeki4V",
  "key3": "5WByVbNP8wZNQrfApyGmGG7ACzf9DQ4Jf9VrRkJdUScyuBf2JFsuJBBjKEd2jp7mB3aPzuoppUxDegUQhKg5Xo1D",
  "key4": "5q8bZmC1BFLQCqi95ypeLp14uVQas5gCxtfb1AfKBoiytX5q8WFYDEvrvkLnkph1z2Vj9VbqdeJR8KK48ppmHySX",
  "key5": "4zWbpLaDBZBLRo5c3iL5pnVs6f6RYTqEPcAgWdHfnEFeJuPhdd9UK9GAWMWvnq7UoM1fUdLfVc2JyDLNob9boKMF",
  "key6": "4sHZr4ogzNxjjEHyi1TAiqu5tqSw2oY2UwqKnvf7pn32RoQLvTcH1qnBWnzSxzejZkmGCGv1c6RPviFcuZRmUnuh",
  "key7": "3bNV32dmxMBJgAYib7AbQrKh9ioskL7sncGeJbwA28MkM497d21dEXn98EAF5j97Di3xUxhaotQ1QnpxPJ5n28Rq",
  "key8": "SV8F4xmjEBtPERgBHBwdngojYwCnBTdc2dm3tBTGpfLG3guYRQxZUVACEWt5HWb7BvQCyixSctRPEHbHnCm5rCe",
  "key9": "3exQeBLwUVJHfYVfFoFCntNiDvSmnJKFFx7To6CH2Qo6DiWHXWHtnTBaPthyHAK3BtBConYTm7rri98YAkAhgtEJ",
  "key10": "3jbv69nssDqWESGF3uG9NYFFMbUqMVvs84EEwiZNPMK7XbdHjTCN2cb3rF2f44FyEpdUqNGXC5cqYSUdNpmer2XB",
  "key11": "cJrd3dYWUgver1VHFcdfxZdTUf6LAeV9yy69mBZFLchwDgUHWKfSq4V3jBkna49z73Ztf9x6xZAF5T5Bk4hnv23",
  "key12": "5PRUBNmAV2VqS69eURU2AihVdhxy3FEPi4ADHU6mR2rXCnzo6DEqruLDvG4i81FXbnRduHgCVtXzJYRAd9eNPe1E",
  "key13": "49kPDkp8U68RAg1EcHJpjBNWwW7EQ2sYQaJ5jamz24DfqAyJLTUSjR19DvMmFTqCZhRL5v6ZWh8v1HxKoinfszSP",
  "key14": "3vPfjeQyJ2hsVLLa3UCVoSxHuZ6YWhq2JiW4sxmMZvf85aC1B3ykQuj3cyKD4RSvHhpWAxQaefroY4T298Lrzpi8",
  "key15": "nuDJKpWaA2huG4PcXaA6UxewvYzgQmp6AvpuZb7LDXaCJJkoDyBcw2GdiVY2v1qREX9a3zVN8LmXk4K7NsrLbHT",
  "key16": "4NLGSbmf6dHfCFQ6rAUeE44iqw8rm4fCwWy7eHt9BYwBx6rwLseJEru8HXx7CXkEXEJM4FQiZ44LAJadPZiib2PN",
  "key17": "4xh9DcLLkghkqVh9Kno5QzMZ6HMSdVj2zBRFf6SxgoAmwmLbE2fDM7hnMczf9gSx4DbV2HtiD8VS8vWMwpdNebYP",
  "key18": "55ciyS8ApZxsD5H2TSi4C2tEuvXXC2P882u3aPDZFgNtLa6ovPdvj2y8FqDcW7BHoLA9WG3cpy8LpPEsJmjg4j1s",
  "key19": "5mnsuGNMRjHVMQXjQRQeAD2Vik1BHBYpZr5RpYmqCTeZkw2D45saCMxxoijPRxfxar4gyAzpx7fFs6xqZm4m3zC9",
  "key20": "5CEyYHzX5Le8bwqzSYPEVU5fovb7G6HrY7yPRiBYDwnD9UUaqWVakKe9sWbTVjWxAqhNASginbvZpS2cmEVyH4zE",
  "key21": "4R2jkZ95CToipsv2BF262myMTHQzcUxMEnNXB52dehAa5kpR979s3F4DPZa8L5U4vADQsufiGWG7msvNKf8PedZF",
  "key22": "2QX3i7ZVUqW2V5nP4MEtMdhyEGfsLQSjQA8uF74h8bPuSiLYUXA1rDS5ZG3eBLKfjhphG5neJFjXSgHao9zrEWt",
  "key23": "4cMTcDq5FQrZrG6Dvbx4LDhm3dEon26j7APtqTKGLb5r8e1SbGnvUgT5GMa8yD4YLu8t4zr5axRNxNepu5jY665s",
  "key24": "4F8iTGbrCNBykMX9BncdG27YpNSjST1Jku6LUfYKCLuc1skGXJ2HQ8VVxF4rrNxrNHToHjd1Q2aGa7NzYYEwYGsh",
  "key25": "4JZ8ZiWAsBXxs5QMhb58cdwoVsoobd4GHhJczSPRAtkhqfUTXfoANYcxWnAEqt3sUJ8Si8vDij1nPPZFF3vh2r8B",
  "key26": "3EKupF2UkStXhMGrZMpnDxZpcd9jY1UMitgVY3s6rjQm33a74yT7fSkNna6W29kh3BoCLj81UHtaFQpPERC5cb4B",
  "key27": "5LVZNsKxLeYCb3ya4j5TjxchZSWCen8aLFtdC9ftssEjEzLm8sMU6XyNxbYDfZRqHYbZBCEP7Fh3ao9vXvXkNkcg",
  "key28": "4fBG9FeU4SPd3nmWCH4LzUttsJM6uqrmLUWRj25D6gqQUBofKL4ocKt1TGvMxwBHQgZKBAot81wVwkAvnGCpyu9S",
  "key29": "4fxKLUiCPVdWdZvbJu8s6faUuFHnxiXnmgv53pVApxwnEEcUUANTUpgdMRNwGb5CSwyJjpktXUpktnj5Rjt6bRN9",
  "key30": "5DAFcaP4UJPaRxkPFMTnLaq5hXivRV99Z1puREVVEbdYhRDVEGEjc73ADtsCBMDgRGcnAysYVMXFWhr438Nko2fZ",
  "key31": "3HusDZV4nwHufZNwBNxBBJhDBeTXseVbDHwRUjctBrNdABNSoFV6cKDmAz4xJioNkrtLPs7V4XUaaGYywZLnFmV6",
  "key32": "45XaaP6A3xkgaGfxh9fSUaruCUsSe9tPgyFPB62V2TQrFR5iknMiMeCbgGMSoyhetY8p7JzBepUQfsiEC8GaipTD",
  "key33": "39h3un5F1e5U6GsHAJj8zjgndYCHG2g6iZwAGWgnX7HpcL2BcJuutW4LuXDHe125conNX91udc5JiKgV7ruwYMwq",
  "key34": "3HksNQhnuh4AvWojPk9BSj3xYMcXDMovq1vwLFpFSBbYQkmsLcCoD6dXDaPHFChFJiKmvtXkQHpjgVxxeMp56sj9",
  "key35": "Dva6tYUNxcsPMR1hHhfn1HHrxz1fCz643h1MsXPSUpMTTfiFxNRb7puSrA4vf5vtJLNeJCqRbzpCAJRhb711jfN",
  "key36": "42dc5TxSw6wTcJguX11JAGzUcWwpFe9WrtCQzfT6TMaJGaYW9A2ot4V8zCDNn2AtqdrhpXfzHNv1Az8B9Z4ZjMH1",
  "key37": "4JzVzUeizakCUgsHsUQTRoqxFojwXY9a9VHhmo6gF5RYk8jeCZzTj1x4zQxkUwJBx1CqfudPv2wJxtEvKDmjRnhb",
  "key38": "6riLETiosDn9sAkb4oj1FhQYqTTiejsh9Q4twJ6qfyVxktBTDP2Yc4Ja5w8iw12Hj74tmewa8cnqV8Ge5BYhNZv"
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
