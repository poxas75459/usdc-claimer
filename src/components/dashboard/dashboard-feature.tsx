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
    "3Rfxbreufko2a8StsADwC7vWc9rjjcAg8iLYZdJUMSs9b9VEcrKGSe9oHPcHoYYQdTg67H8CkdDnZ7NXs4ZkYpYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66oiEjbL3uxB2MuVQ8z8cdbQcfKURG3y1YTgq289BSx2kJ7HeTsmSLsw29cvVQS9xaK1vkf9DD7AaB5HHhDuYgrN",
  "key1": "EdrKbz7UfEhSriy56GwMxG5nwJXsQ7i7sh3krDx5WhT2UrSgxXZrGhYCM23dp6xChZnW11FgFbEEPkfSonz4NkS",
  "key2": "48HMYKw9JSSLLUVR1MTztP8sgExfg3FKW76MXvspWjRD67A9x6ZLWeAcR9wqykE1osmBRpAzncCWGvAePzXYZXae",
  "key3": "3FpAKECyMwK28LFmbVjWurQUpmNhkzkRzoeonkYbfjGPLqcNseNhiJ9cPNUC5xeZ36hJQRKahJELZxXv9z1A1WJa",
  "key4": "6vpV9m7SrsGZJV9NooziG1TjCU15kij9LW5Jpq26Goc8ou8qg6Egk7zWddFWEYoKPZg2RHcmMEcUS3PABom9oiX",
  "key5": "423T6eHFXo51LC3kBmgCJQx6ijCbjxGkBSsRBAZ79nBgZTt4QMHmy5RVqFGiNrXjA3f1q57YBkAmYcoPcnnPt6Yz",
  "key6": "3J7gfkALrZ2xGpYYKWjoSMAyzRMD3Je9c8CUcoLkntgtrxj2hx7zLyXKy8uvoLEESJZcQm3dxX4wTaTU88FBssdu",
  "key7": "3Q8PrCdaobD5qT8teh4RoJhbG1UcvwMDv2qLSQtneyWmkiattDbZpdm97L9MNjXybLp1ZDaA1dUHpTniZ2DmWZyf",
  "key8": "5rmwpEgfFtCV6V7N2wwBS7xLQce8ajpFT2dbg8ufftajrJFZrLrQAM1c13SsKC76WGAozHv9LopSUosAFyHPGrPF",
  "key9": "5uNXxKrS5yojfXmjqeUcxmG68YrGmChH9rH8Rto36MB5t6Zyb5Y8v6Zqg2DxvAp6aaWLrapjFQ5kFUEGM8rfpb7q",
  "key10": "3dc6LHCmGcsQ18bb7N5VDB3bPHarrcXBWaiRwJt4vamoCD5mA8KARLo9RjvRAkhetDjpkaGwsT1ELfGYK6LF4HJr",
  "key11": "E3EUf7AzR65XYQ8LPnfzqByHbLgmbTGEppyLctJYGd24KotqVLiYNKyTdPyVx1EM9C2GSSgdo8VYYmT7NTt84SS",
  "key12": "tyv3Tv5urRsP1FecFY67roT3foihpXsD9o85FYjvhdcWb1SymA9CrnFPqAgXTJFvHpWtYowXpE8rCtDiKjnoHsm",
  "key13": "5zYUoqbHAQ2a5tV67o5eeoKUFWEkaCkrPUTduSLNzAt9Nge7iWVdXrTkTVRWhGrHjnzs4ECQT3Gy8K267w5W53Cj",
  "key14": "3R1LsmkuGzaVERCZheUZcP1i5zRjGhk4Mqb2VxXY1TZcfksz4b1DdxijoQKuACubhcGiPiSR32EyHZb21r9aibtk",
  "key15": "5J65Q5Uo6XBuTWgQdUgPBWNg9dnLwt3hQevGkb1PVAL16gaG7FKWZLavaBj6uz5wTypXtuJMS1apCCehjufRLWNo",
  "key16": "34hJssGHP9MXaiLgHvExmRLLWrVeP7fgzh87Amw9iS4YU43T5rH7W3BpZeGE59cJYEQSctXezkJTbv1XcqwHUxop",
  "key17": "2893sRZrz64EncgxP26hndHre8SffZUisU1AjyrS5eso3ZSBsL4USYQ5XHULKz6jBY6MvHBuodZq99TeEkKd8Qc1",
  "key18": "4kfXBKUT6stXHbLRVsn3wkvmhULBjhsjreg2oSxCZs7pWoNUHE3TYyDaA2YV873wJRoMVvrMXMhe1ipmaA3jXVRa",
  "key19": "hRXstFzkPnaZ1p8jmf5CRo1DQKgcf4wZtpMVWtqr9SbXkWtm47vd3FndZoG3omLk7NoaYw8Y52TojpP5v8nDT3o",
  "key20": "3KUEP5uJBaTWXPR41YsyzjjEUQxEP6pPfX9dkHgHWfD2jq9b8mzcmqR18UGWdZo9mFXX9kpRV2ExUXfL2uKnUA5R",
  "key21": "618mJT8P9uScQYnuXKWywd5LSMx9G5wdRHzgpgLKrs2EUsyNSNWFCyyo1cadvq9HyKcF3uLWqEzc3xgBZoiDAg3X",
  "key22": "2gGZ8cQktG38161eTthEcDidiTszuaM11rp6A1TupTtNQMTyDiKWbwfD9UpbCafUcsrW4UD1Q8HzWa6aohseCyzU",
  "key23": "g8fWRPWrWUqvZo2mbvMkB76uyhxD4XA2p57XpJzvgYjgFZ7mfqNsnSBMXEWLDCJmgJVV9uDSkUPQzb3C5bFeB4i",
  "key24": "578DhrWH5EesJhFsxNw6EZTtwWHinngMRwS6mFtktcjzryGPiFZZPZ67VPZ3foNfwAe71pNu3AiFmVBo8741r58n",
  "key25": "5eyJbWKerpVaGNDf9KPiKmP5jkzTrhMSFPyuS47T5Nrp4CRVKYwE3Zm8d56u5ttWNg9JqF6C9S8wh31WBq6c76fa",
  "key26": "wcrdTETjnshf3WrWbK7pMCbEsc1zsrBuqfBwvYaiARvvrWwaZv7XijQQyBhq6tsna7YE8aAmdVEHA24KiUPn12h",
  "key27": "3p9B9RSXgWGEZRiQqkVN7eMqdTAzUCou6MYwj4qvCMxY93vDSdapxQZvLmGAfwtz9CkNPBXqMmhfxSz9c2THcvG3",
  "key28": "3qsseBAq9wLm74gAmPNy6EfW78PNJgfH9BdubiDygicgwnpFNxbCRDZkgDcNAGw8FxquuTKBF47ASLoPZiEjqC9c",
  "key29": "5Qb46QqS2u5tphAw96r8AkiPtNNRPBPyQ2iER4AD2b1ywWgQiq8yKEiES3QRYMdoaN54Uiad8zfumLLktpVR2QSZ",
  "key30": "34ZausZMMFRTgYjMFtdiQVuMHazx4mpnuhj9kRYB8Znu7ZSDkyC5KeSqpqNtFa8zEuoDUwmeCAzVNz5t1REsCffT",
  "key31": "31uyZB2i5fLdfFrc7PnF5xoLfBu6ZmkdXssgsSrAaQmCsfxearrbiZNGRNTRDUmuKXNDJU863uwhfFJAj727AcDu",
  "key32": "31j74PcBFirtmwBRepnfuVEywYACYjtZnH77iCjdgxoX6RsFX9DSwYfrFsGx4PQ86Cd1wQQviYycB12QXQnQCtWc",
  "key33": "5LXufrqpW8ZLYHuzZRL8JKdh1dEdX5yCcyXeC3hjQmJNmxZGXBjiM7A8JyN8J8JUcaqSVuEmdWhmqbPoNuWW5mbU",
  "key34": "5dsH94Yvjc3qAg9uACXznh1sESmv8uCY2HhYEhd8wvr2pSGb43nKCZhxViAQ2N3x7LMEG9UeewRuKdUWKtMHBUzq",
  "key35": "6356LpdnK5P6bJBg5ZgcCFrMpD9AHadwNzS5chFhBQ7q8FfPtoWRGZpp6BF7xQyoCwnCeDvcDUVxGKZ1JugshkS8",
  "key36": "2VdGzT3TwE1Vh599TgJcqQ2qecFcyyxV4avqjgkHWuy4dNnj31ZHGoV23V56Kv6mDhjVH1FWNGphKiHYmBErPo6i",
  "key37": "3G5MyynV2Hs7x3isAudiektisCn3FjyQvrZ7pZTJtNKALj2gtd4dx9uZCLfgytvYaoX3qQLem6Rc1JoWqDsMtZi8",
  "key38": "2pLgwQoTr7Fq6tAnCCJj8HDpYF5pxgs83rP8LH67WoB4THUXGXAJKyxC6fMqqcCpVs4tdM6T6jKPkHk83uc7CFUV",
  "key39": "2ARqJfEDLqnd7i53VJPQTcrB66Gg4gT9Fk1Mwxf6SNW459qk68Y4QJhJ4QKNRNdRtPx5An5s52V9mpjeRGRDP8Y9"
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
