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
    "HF2g3nZww3ggn6DtUnhzaihre997vvcCYJGYYBs8FpHMAPEZFF3L8MtyTQomhhSzJ1D3HUybRCh9EdaRZUt8R8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AfHNjpz4Gw3uXENgR41gwrPyeU4KwwyNkuJudkmNaT61PCukcmTJxfLkf66fZoaJir52z62UdKGsqsgLg2vNWCE",
  "key1": "5ccUEGK69xR7XmTt27W8XryRt5SMaT8L1VmaJP9uszVk6Kbgd9M1ha73uDMVxxrsM3occGo92FHT7RPcpcWb2jMA",
  "key2": "62FNBcjiPbVALkmb5zGxp8F21Gu6SxHgAsib8Hjxk7ExBeEtHWe7Csua42tmuHBMuXFVUn1LzxvCkFN6vNdk7kUX",
  "key3": "3PidKCWrY6tAQXsbYkP1f2YTtkKDschLwEcPwYxAjwpUGK4VDzkvPfrTkNu7jYcvm5prwrbNJMXS1HBS9Gku32wz",
  "key4": "4AzXy3UU2M2KozJHEE4ZijTjnA487AJgoRgUnrvKR7Xm7HQ1c5abvn8z3kzhFUvaazgXSFmk2YYZLmbkPZGpnWaq",
  "key5": "3Q714qaPqg68uPykxh9YRXLHH3QtxEaZL6ADgNfHXCPy4ejGfN72XGCs2GRNyAatBPvbF2brEGDFHNMtm29UnrNm",
  "key6": "2dc3eRJXVoHjFAoUUMwxfb7Myx6Q9CiRyQHvh8v6fdmug9YFo4VqKxmncHWi9WeEeAy3F5vv9brs9cZDo3iC4ALb",
  "key7": "2GP5o2paVX7DgwcSqU18iqY6Z6wZsCuevmvM17vbL46apjKT4T3aeoV55dBTeo24gXhHEgr4zPHpJVSbHUnznEad",
  "key8": "2CcdFv9HLPwm2zxa4BtyRi4ApJzTDSzWn8ocrQ3ojiXMS23jpfErvMWmBpwid6TgufJ8FUECkYLMgdhk1m662haF",
  "key9": "zWpkNJGgZGuwEWnRmSv9abnK1sDWbzF5JKx2DCbZb1pAVo31c8CppcbT3vAsxAJHk8MhHq1nsvhPtr31YSGSUoC",
  "key10": "apFrEqxg8a2ejRJ6tQ5iw5u6YnRpxxTeRog5MGzAuihbigxP7t2Hw5NuTJpUJ2qkyTp6bnkiFfr6LG9zkehpgSw",
  "key11": "3dT3cokbkc8cTxP9dveLfFy68dEWvP6XAATKgEvsCsfkujncoup7kx2R1xRsvNYxXsKwFYpTMjUcHSFhu1DaFNvZ",
  "key12": "3TWqmxbnD82tLgtWt3WEoSg24v2jD8Dy82MNpUZuxJ8jn4CYiKP2qPK9tGAgJK9Pc9ucKGFFh48WE7mdCZ3nZ6R6",
  "key13": "4GXxDtidpUxJ6PyXsTGnzEKurSmHmw3kBwnKb8RVtrgGthq6f9E9ptRaJVQB3qPb8o3e4FcBZ3vR2bcLyKPGa6Rt",
  "key14": "2AdyaNLo68kfDkTnhnjbHDXUctKmn5jQMaNcSnAYuP65feK4JzLnBnx19Lk84NcbToeaqT79Bmi65DG97C6hcPTR",
  "key15": "4CU8pP5VM93AkbCHjLNr5e5omsXuGZxkkayM8UgmSoApk7T7fvVwhir3AmqWeohMLZSJKDyk5DpeACR4qzbYZJFZ",
  "key16": "2u6cLw6H8inWMCbXpa1krEq4rfHEfegFNNRmR1jR41M8ZY9Nys6HoD7MxSetaDRALUQXMsqxF3jxKXeuTtfGttru",
  "key17": "6cwm1RG4e3xLF7ZyKeEAKkYu3YmwBL1JzV2cjuphB6MxQXMr6uX4BQwkSMquv7VWiW1WHkKA1gxM7CnQC7zLXtu",
  "key18": "2KT4BDR6rLu688mR3oAFnDQgHcWbHNVsz5u5UE6CQuTQfsSyX9L1rJxvGSgqR1Jvag1WKHrhx8dPXxyPBH4EFXJQ",
  "key19": "5kV4cmMUL3LoPqvMbmfV5TNGTQfSDLuA22bif6Zcy6tUi6Jar1mdqPCuauRLS8Wfn3uwijdNMQhqfWYZCTGv1pDh",
  "key20": "26gwT2VjScrJewWnxo76kM4fSZ3iDerZ7y5MbpyAMNMTzoPFWbKy1PDAMuNrsB6PUuK48rUaKR8x7qH7vUrrw7QE",
  "key21": "366bFh3Cka3yWypYSuXXiDUY9Nr6tF7SdQKxcuX77V1ywMQff1ZckBDvE7huGtrBiK2RS9sVJAYC6NL3u7mGua9p",
  "key22": "2mXMetHWkhK62rjR5bunzBzPCWxh4Nv77UqRnnV67r3XNPxjCgAAbrpJ6kc6pratEnrx59v2GKxQwp41QMfsD8a1",
  "key23": "52Hsmgpe279s5KeQC59yknYpCCVgSG6L4vX5vLpTonXhaQbZ4WRvDuDT67pcL59py8w12HD6GVzpkJVFy3bFMmAX",
  "key24": "4gB7t2CMU2qaX5WTCKsjFSbUX3yjRyjTV2jJDyb4HEEsGER9BNjHVXhjQ5CQFFcn1mhdnQ3bzxvVeYV4f5y4YSD7",
  "key25": "5EeCpAE6CBgmk5qaKsW31u6EpwbR2yFcDHQhpA3Ao5fW6CkYCEnDdZv22byBdYaFUkRwqtNp1hgfcG3ZzbM1QCa5",
  "key26": "3HN6QL4jCR8EHYdg2aphKpAR8HQNWbp5qnmeKt9zqTGsQa4SQDnXG8tegAaiTmEBnq21LjQjKyr7qkwJ6VAPR8hK",
  "key27": "4P7fTAzxVgnZVocYxZN9YSKpcTv95pGrdyjx9PYZnE1CKYxwQPMiopFcFVncZMmbxF9hpNBEsLj2c6fSekRFNw3j"
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
