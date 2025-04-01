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
    "5J6UkKVr5VZ7dgc7G7W5j4iDnkRtbw6aRqEyDzDSzEyGDwZCLmjS5cR6Aiq8mVtYc4VnMTJAcXvyvSMm3HNW4zja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xm8jLVBtvRMyN5Bn5niAanrTPckZs4AQwA9Jrqoxvk9wyHG1sthGwyvjXQmWrcU2ZqPgy5rHebKQQJeuUUcvgwV",
  "key1": "2YyabNdLaQV4MLKjc9xcjFDpvvfrnFrcnz54CsYRFHwLR71WQZgPDV2d6PJ78jxpSj4dracBSPfoVzC3wFQEz8Mp",
  "key2": "2tqQ4GDNbi3g5iTxRacy5fgu1QQr3wMnkVhDhDC3eT2VU9JAo3rPeLJ4n5dMeWG3HW7Rwd32t99ofaxYx6FjGy9S",
  "key3": "5WY3MPN54o4GdjpWemXan95gBhFHZHPsNQXMKiyZnUZXgHh8cz38EX9cDdhQutdxHmFwVFoMVsdRCeJ7D2J1AM9u",
  "key4": "4Ccrzw6tSx6dNvQMco6TG3AmzsZAzfwDu7ivnY4VnuQadZTeTKcnZsx77QV27TA9cd84ctfPyQL8c11drrc32oU2",
  "key5": "5eLQ5wCL1bpyrasjVJR7hq5zGBwfNF6vb7ZKw2tV7EdvssVTcuN6Azx3gXJFcPph9ay5iBbmxxBPXekQd8k4nNAn",
  "key6": "2Mmsfwo9WRgiC82zYj77f8mWVaJ9EN77qDzEQYMhedzcdnAfsp13CmZxiG5uaCPahZ782NA98gPQqg6RrjQV67Np",
  "key7": "4TjZUgS885mWDzUCXXPwzF8JCnSTFwoBUTQHPeXxiTBBZy5vHeUjhunMmZmJrgij7omAjR7aFjY8uJXwdFZEBpRL",
  "key8": "4nXb4XvXuEdxDB1sLsKaPgqrBVtyYsV3wcWihrUWts8ggNU8ESLhLhfNjiEebeYeaKmbKWcTfeJ5PWVRGWa1j6yU",
  "key9": "2xRZSZRfaopW7qDwmY1R7KDcYyAR6C8Bk5muaF7VorN1sZPjxWmAYXE5i4M4zCp95S31EyJpKQ7rVy8WQ4vCKhvP",
  "key10": "4ZyUtza8gMyRS2dQriqZRL2Hhyq6JoRx8HCEGaP7xZMXYaQt8GmVjZ2yXsySXK7qztC44F2abru3wbnDaHLhqeGV",
  "key11": "2z9NdZ5XagFnLXUvf6y1z8XY1mbdBEuzHT4AtvPMUzQaTvG88d5KCHzivYUje39UJdSGuQgcjuBVhSPYgUNoNW67",
  "key12": "4B8ZiiwWz8WLRicdDwAgMNMR9uF1YsyNFbfWhfoXGwkeStD9kgLx5P8UFe97yyYzr5Pq3jeuLaP5fA32oEaLmQdE",
  "key13": "47oyPbG2EoAnxWKL7ainuLoLapC7FHvtavtkFPvmfxTFAYC21fsTEnRUa79KYrmcNfAqQhDjwSVFUKKcqvWxg1rQ",
  "key14": "3DD2Y6Dsih24nSEwAQ5H33c1RzZPUDdAxbwuHw4tfTQ6oxgNvRgtDYdgeXAxWunqtStpkvQJhUdMCugTeeNqjFBq",
  "key15": "5bqKyPjdv4UDgptEgshSmG7bpLgcBKr2mQXKYoVpnWxGaHw56tc4ewBRpKupAsTuqra3fuwMZtRVpmrVtofNFoKv",
  "key16": "2HWFLPs8wbcdQcNQVnVK2fh57gwLq6q3WNTyrNvDVzj1gTR3Ej3JYvdPr41MZqEtEbuwPsHKN5dAXqk9bAtoF2ia",
  "key17": "3EDuuVHUFQQzv86yaSyNMf4SkbATNQDTbkTtPj5AceacoPF8n9HfwQMoGuPMN8AbhUquqNKXS8a9VEaJGtZsoTaw",
  "key18": "531TBBzFLr396xeDmNe2LuPN5LcZGT15EFXD5MoY64Sq7oKcDdNzQDqqKvehaW5Gpg95ZXPp55H6jSYJeSbULrDB",
  "key19": "2VaT3oVKaM7W6sYYeNLSixmtbVWUKz9L55Jb7rMoGcEzqvDqbsUVa4cL2PcU3T2orx2eHtztmAdndZdtqsVuDygz",
  "key20": "iYrD4XASWs9FYM2AmXcT4HZBZGb4rBQbL44kA57sZeoxcn4ce9SgWZNjPpYB5JNcJRdEaEkj1R92yYZVeMawyEo",
  "key21": "2VAngff3EBAp6q5Lms15qYBdGoi5RLYprFbh9r8QrkzrY5wghuve94nJa3L9mkBxYg5PyRoGNiXirtL5VKqdZfYm",
  "key22": "D22dbD6RKXkvtV3kkZwjG1vK8ecCBM8br2TeLUfN5FU1WqpNBoxTjcc4GB4EFMWNeboUgnAcZnjCSwv47HHDxDk",
  "key23": "3mKykLvYBUJhpPpF8ZdnHTDRNYSSVTefNpmNMkvxP9Smz2efZ6oSwdt6xV3m1HHnwEfovDVJ5JXmwKLRoDmvKnkx",
  "key24": "4hK9Kb8dedGTrbWWqybRRhj51ePG9a4DgrPtEtQ97NjGX3YRjG4XGKFNV2kTWKGSZ6HZsnWsMH3u4t6vLh8CajHc",
  "key25": "36PM9kJZTojzGjo5oXQtp6Z8vH4PknjnxVeapQB6S2mNQTAb1apThA21nAtSaoCMaRGB3RKpJw39MFXZXAcN7rji",
  "key26": "UNK36Uf3MCurVzgTDSDQbiK1JipmaJYqbgp2uLtfx6kUppa8mT4c8Z2uTHGN9j9LgiY2hTYt7UR2KXM8xSATsL2",
  "key27": "32q9jGUVG9xDGgHFNMAYBPdxfdFGwkoT9DGFEUopR7iGgEr6wT3UKRSNeQLkPYePoDFN5HFfd3tLq7FWrLh5zvBx",
  "key28": "VavzRPMs7hj3J4sdSZx5yXsgX69sBormDHdR53h9SS7z6GLXFZYvWB4zzAwonghhwaz8rsSHbYGHnRPyqgYnbr7",
  "key29": "3dD8DWR3NXnWp1rE9FE3dp5NTPcuZHXitCgBVZkpvxbhBk4wqrR67ifRd4hzB83LGcoCPBBJz33cjHKMJdxpP2pn",
  "key30": "5byVonWxubP8skAdrdXgDWfmu39FRt3EhkUqy5ZdkP8ZzvFo5b7vY7Ra1oDDZ4PCWUqLRf86vyT9ZxzNCYBgx9FD",
  "key31": "h89mq82bGTDFZK9gE6zTMsAVNp6uuqobhoD5kLSokKyE1p7HA6xwLpctWL8fqqAjnz2BypbDjoH1NpRHDJ1Hwba",
  "key32": "382jy7keKQHn18pp93MmNxmwH7aqbk8QB7JTLQV4DT4QRnv4rxAqif3K8tk1MkovEjzPZPh4r9rEXZiBw9Hco1XB",
  "key33": "WbCSUq6D6nTtwzoZHkYcEEfgBt9MfKxo34GkayA6KQ2SDqDMZRVZFTdw3rkiHoJmJY9zLAUDyD14z5kUx3FUpB3",
  "key34": "xYKPP2fneVqAy73hyKqdGRPA7pAFDD9hJoBfUvF5rKEBnLsEiMikokufAQMYAioHXiSosacoY2aXJg1tBEg7kGP",
  "key35": "551xWe3QqHpbrRoAwjBdancwGHJc9Lx2xqMaWFmDnZvaLtYAg6jULWvEbgPY5owA95fbSQAAzfA6fKnAs4wjqqNn",
  "key36": "3E1YDJt9Ti5y8HXRhjVLK8BZ6yspt76VtWDSCiVW2CkbpCWx2NKDa8HBHqSdC6F5NZqys9yxa8LL2ZmKzvFsAm2h",
  "key37": "4LmNRRUeLJG7QZihzbvuf2pjd5FvBtiG1hm13nG1qB56Z4gvMWcz2Pm7GDvAdHvh2EC2CJwoYPXCScg2e4dYSS5m",
  "key38": "2DHecQ9mSpg6FVzXxFX5XnEPPV5h1sm7oHzvWVqU82wdVPxhid6ahYkJFwX36hVPiCVTmdV8kTv6BQJfAdf31WcE",
  "key39": "3JGCavLKr2RUBC6uo6VYXwDeAzddYG85DdSPAGeAJBoKJko4kF1rbJUrfvMTkuc8oEJfkbhCZnRKwZvx7US9FrnU",
  "key40": "5gbPy8xfzP99CKLwbxZQKWp41h3Z4ZihpoiddaE19D1Jo7qMfHQcWtXzjVcPLNnBSkJWopnAXezJa8qihL78GmDa"
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
