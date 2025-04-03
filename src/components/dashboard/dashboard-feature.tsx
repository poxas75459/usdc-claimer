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
    "2AzpCxxvqNhgw9WW1h8UPX6k72BgWPtb351fHadtTE9ATYqsETY6sPgyE8XFYu8kcoCxy38aUCQcHSWpPtZCyCVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JpW7sK5YABXopVat6z4gSSTZhJaibyVra34sewLxSRVEZxxVzy3uzaFgCy7Hc8HPb8ouEUpLC2jH4fjz9qEin1w",
  "key1": "4wAToZUaQDLsFQWREwiTWNHm4yEV9bJmbc4zs3ApHKxsBCBtS7btKkAbRxqSuArEazqVace3Ck7EYHoe6pqgTT6c",
  "key2": "UCJneSNckQpxZJjFhE23MNwjL3x7Vys8ZCb5wpqnYdcTkgg465h9uxu1nWsa8qqzz7LYCvmPkrVnZCEKucjvXrL",
  "key3": "31dG11rjsd4dMtdMeHrUzr2V8ZS2jdtkp2x3bUZdNJNtdQPyrZrqDVv8RGoUD847bgAxQrxCmSkfV2mGdePtxjvM",
  "key4": "6156BuHeDT559wamBTgFKAvw9gPmwx8NQvTT2xCzYDeBvC2LaJKA6oVEtDwT35NAbnKUTFiCCc4Q2nMGN98R5s2g",
  "key5": "2HDawUH3d62C1rBGvi5PYRE1dyfhcveyt5Z7jpAeQ3bJxWMF53amUQ5wat2HNNkpDbJJ9yxkUqwCFQ8FLCCoUn3j",
  "key6": "SrLzFaMS1cSYVTrd8oxe7dZZp817AQttjaHFk4fTZZF6CWwh8v457oUMNwQp3n6pRrf3VsE37Q3S5dvjBppdUVx",
  "key7": "35m3z4veBgbBt4TyF2UhQVg1T1jmGVEk8H7Eqz2ZneXsyTszKHXmVXNjy2F4wmj8pm4RF4iGpGVZCHHZsmFx6GwG",
  "key8": "o3FMYuviyHNJi9JC42rXT8nmXk5j7GiBwVwbbA5cW9bWv3wpQphSfx7QE55ncPHzHsEQVdqTzopLMeArELs9UdW",
  "key9": "3UVJMuGUyFkNjF7GrjLyiM1jFiggPJwjsafjMkKUYXbemh1QMcbTjFDFV3VStxp5aoPqfTzq23L4qc8mNPg3sB5v",
  "key10": "b91Esk2bZwa22bLEtTMFWwFud1tQCJhksiLJFTgmsGWRTeD7b2Q6AownDYrX9BRESeT6ZGGXxLuPsFwSqbj5vF4",
  "key11": "5mmteXzitwk4GiCf63tTtXv2Jsudx7ukAY6dtA4Ya95CyUEW3Lo2G7iTHU1xtTEQtehum9bNobn1okUhZWj2wMrt",
  "key12": "3ngjQxr3r5FGL6gSea3zLjfH3TJFh4ugDttL4QUQxU2kXVyQsypomNqsaoNZEaDrCBqcJ2giyoptnMM69ukt9yWC",
  "key13": "zPW54Xw1UUV4JXYAsySa8W6emnu9UtQZgjMaduNN3BPnjt22Ann83Hvip32ryAA7SHxXsA2h2Y9NTSRJnivwV4s",
  "key14": "z19dwYVEo3ZVCLHizvVMy8di58GRJWabd7V7SBGyzzzpEB1caGaaMWFAg3G6hqdy75QX4BTmoRmvzvi8gzqfmmX",
  "key15": "v19UtVQubs1NH54LqKDW8a26vg98KcBra9RcLE6SVPPVFEWN3H3FQfcmy9dKRbqdCAtDvggWaRqejj5DLq7FqcF",
  "key16": "2kyLoJDMkB3EqgU93U993fwoj2g8HTuwU97JKDe5GnFEcDbznepdp7qVcqkjuZ2t6CPhiFu2fimXh7szte5mjQjV",
  "key17": "21WEYNRZMojaYbi857eqP6bYq4VmAo3aXKbFqVmXuk3ySzEzSz5baP2Q6T9Zz9n8LDii5ZG8m4nHRxngeodiBEhc",
  "key18": "3eh8oYFxC6ncsxdbnCAWS39MqqEfGKEdTgTMFDqB4hexZC4nk7ezHx9JwMDJVUXLtHgQqjQJNobGAboNeArh7BmH",
  "key19": "3aAji5PdgrpcLN4GTj94ftR1TCeDB3umddFURTcAqRFwZpg9LwwNcovaCj5tpeeCvaPo7gnG5t8nU5csUDo6vQLC",
  "key20": "xn29mR31DHjpP7MxPSg8NsBx7oVKJasVkGu1xzJk4EvTMAqkLKqFsBibMvi5EUB7NZScADC5UkL9RETsGFyFZt9",
  "key21": "WMTDGwdDW6vqRMhBhcVrhx5rzAxnQfyzKxoEek6WmiS7uLBuoWL6YvUpZ7tpThkbhpgbGFvKLDKTHRWfe6Kadj7",
  "key22": "2xG1GJ1w2Yf7JxzvKjd399AkrQn6tjHVtabvrHoTu5vcTBc4YvpubvBk1znWp6Zfr6m16UZ8uAQAtBvoDp5nnisX",
  "key23": "5xk5buSmXR2YZALTSPozdkN3egYh5MaricZ1D5nVq3bepk5hBpkYZ9NX1p3r2sDrG7L6BXqoWh2vJDM1iaDhrKbY",
  "key24": "45gsmCwzmTwE4uQHwzBobNdNkoiVnn1QRyhVTEwe5m7YECYUn811B3959kbmP6WiZ6vrv2imhPh5kxR1Naz2mrsQ",
  "key25": "2hisaTQorVvsLT39FSBLQKBhokTdfx9XdpXYAFD34VpyvChR5h356B4o8t5AWeFyNdJw1Ub2md5LrDQzFCTjSJDH",
  "key26": "2cZBZLcsxTf55iTNZf12TWH7aMw4LHAyGnW77KoeycmtroCtKTYgDHmEi4kw54q9Nbh3opsZf6H3SBNcrexaEXzE",
  "key27": "5NVey5rQEtnvJgRA69iapTfpkHJG1t2pBoKrivKCJDNCDiFJCG6Lm8wWvSkNFaAYaYtf65pHGs2ufcYgCvtsSmKc",
  "key28": "2LLhU7pcKXBXGcmSRRBZjMiWi7btEWWar9yJQNH3ThSWKmTqmyyp4nYH753KGyLP3ydftJ8TNQJSA94bSSUf6mYu",
  "key29": "3bgfaZ9XV3VnjnahQSfJdRCG2sZeXxZRagDXxYTK873WUyLq2uogWYQDzMbTj4RGWtdxcfKK4s73NF2hTd7EiAKY",
  "key30": "3Z1xCmfGnvTVQZX1rUs8GuWdQPu2Yn9qK2AMUv7Rx2XYYnrgvdukZ7AVhgYyvtyaD44XwZnFLmtUQHMZoUcUTGMF",
  "key31": "4qYboyhECspGx4idiur25DHNENVPgbqqdxxpCBEdY5LKLqmjoa1ykSXNAYFzfNAbm3Wj8p66aGVfDnFrwjtPkBCh",
  "key32": "5BnSZTyKoqKR7rTCYRfiwpmC69Eyo58qTHGxi8kMRWurBbBmCgu6J7E3f4Eg7FADDVQsw6kvRioUkHUwT7JdUig9",
  "key33": "3W41QKmPTaiXVhmcioLggrLHMRP8yARY4aLPN5qxcj9i1hZYZUXWChQX3VgLRNxiC4SrwRK9LN2QSHM9mG2sNyCq",
  "key34": "tCed9GKLLDSYhtzfpHMbeyGEU3gSEzzDxqwPexqAKvhtirwuZJaHdcsqH2X9MNxaSHYxWvzjks5qpq7Jy4NaoX6",
  "key35": "2k2vdLBtG7CnbZ96i1zsWocvgKSS8aNRKMi8nKBfq7W7WCdVG5fpPRZsrge5fcKxZTewRhS9a4nE7VbKmYmUaJKB",
  "key36": "5vNDX5Bju2YCFcQaHDY9T5jWns5MduT2uj7MFozur3awx12sPsEr2x7kudsvUbH3FuNuKrb5ruTWkMEQbD3bsfsh",
  "key37": "357YTaym64xhxJMNwWt3q2b2GiqSGPdE7kdoRfyoh3pTWGLEEeXUHDM8RrX8HxnBfbgU3csjee1nX4yh2c2H2ZLb",
  "key38": "Pv9wPSxYoCatwJQP5vs1RrcvwtCXNH7SNEfr8ebs6emFPRvpZERWxCGEyk19PF5PydLegjth4jm9tS71obh7npk",
  "key39": "6Xcwmy47j37zNCvtFuvFcJc3Zkcozc3WNfL5rdguowZZ14T2zzA66HrMy8FmYPyXiPNXq53MG1qo5L7QLhtKkCi",
  "key40": "2As7Z3QompRjwwfuJwLTWC9V8NKMiGVWaGmRWYCZ3BJrDtNiktR1TDuoUioaTpZWuiuiN5iwyaoU4eAJYEju1aYU",
  "key41": "4ttkdVaEE8sfmJTPbizoDZjAkXS14TeauKybC75xgtHGwUXG4Arf5pEZhsPvVAPkhvrCNVoqyvjGUypRYQNE7s78",
  "key42": "5xNHv6PXcvth6sSFg16hiE3431HP8rbuaP6T2wfT6V7L5hC8xPjFNaf99GFQ1CsAPA8bFmKEgZbmj8KN3Ribuybg"
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
