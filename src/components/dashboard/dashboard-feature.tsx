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
    "252UJPfhfeh4i4i3n8Q4bxWejcKcNdCrKSTq6tRJu2o17BV6Ph961rahUwt1SGe7gRfRHHb8qPkYztwhfFD8ZFno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T79u3VvjWvYsuU54uCVtHCv4R9df3MEP3eWnu4c9UF3wAev75Xo2ywGtdFrgVW81sbwMm5ADYgnYn71yNMYpRUj",
  "key1": "3JJJFjPuf3wMPJRiXjFEN6g77d7G4VimxSug6QKeBGEY6CQmSxpK4xXTXqvU7Mmrx8wcoEV1B1ZwiWtQHwqafz5C",
  "key2": "5eWTFAwZN6k8TECqSjU5pSJUsJAHFVAbx7vxQwAVnKxvaorY2YtvNFEoFSiNpBYCUpVetdTR6k9BZW3ZejTJCxPC",
  "key3": "35tUk26TQV18Yjt4M3vbZeKtrtbTsfRV3uETsJwz7n4ZQrkfqGRLvvNqny7jWdAnYA2m7FWhtww2Cf6mMs3WwV5Z",
  "key4": "45nGqtf1CkcsXk4bmuAyvAbDHebgkhzV4TgJGVVxo79moH2tmn2cTd9wCFabYrfwUAXmmE82YLNUzc1dMGHvARVg",
  "key5": "59hmDbY1ARzCAF7xFrUtZqVwEZJCDx3BwKaqWeRp9NWjmE2oofg2SG7c9kE7Vb46f6GZa1xHy4j8fNfPCywAQxPJ",
  "key6": "2QQ4JfDZcZMCn3UsGAVA12NNdgxYUeKWvKQjwvXpa4V4USTXw3YSC61LNVn18Vy4Gi35iVawPL7D6dGyNgsfTSFe",
  "key7": "NcPzfYZjTxMVTZN5M5V6k2WoMMob25gSahKgU7W9JuZE3BdfkDDLEhdYMnBQwkF5qun4HBtbjZe2QTMVyT74iUz",
  "key8": "3wdTXEoCyrCnMUXr11zsvYhRfHB89vkGSdFnUbSdPEHPihTH3kcWcPXnG17RZazTEu3N9C3jzpRVpeZw77tFnmdZ",
  "key9": "2UEeKHZJwXB8oN2neJjg3VBJEsyt7thmFUAwbx1Hpt2gkJt1xcyd88HQqw3UdC8ewSpkKLpkNSAqTe73uW1X4Qau",
  "key10": "9TJfUgoZ1PnuYsFLTNRcFgYPHN9f1jr7pgrySyr65d5mUzQRpqJ6Qaojx82jYa2Ji4Mosa2j4f2pmivC9bupoag",
  "key11": "2cPqtwHGJgmX1ZJyXsYW3PpXjGyogZMJYZXVS48ZuMU55GR15nVtUx36YeVMRthcnDTX5Gup9L3LLQv5KTmGb6EX",
  "key12": "4ox8SWJFaZgJsNxrj9kGXWyN3x9G2efBpTgrL6EV9695McsFnVHtqCKTz2ATQ5wQQkj5uNMtgG2anP3MQybdTF7Z",
  "key13": "jy9TaCKcjvWSgE8pZS1uXjZE1ERmRgPH7QkWZQyykHyaDKgVi5gtHeZnSsnHhFy98igmhnkvpkKBqeJGdkpbnXE",
  "key14": "64v359LrM2BC89VN4q5oiUfXyxnz3KeZTake8tJ9nwoHxZ1C6ZhG2YrRgDcwmarSuNmgeLNjNsNybmoPkPbLyuiq",
  "key15": "4tBGNABE7AHbccxT4RRGPJgWDk7DD4Dnt14n6vXdWKqpacvKfNhmK39vMp47FwvhCJnvJxFgms7dLbDF3cN7Vhm8",
  "key16": "2mMbtWhE1A5NiM5cvGDHVy3d6n2i6H3jBnHMz7zvyXL3e2eeYGpaMpNjsVE76Ppfydymn8DQWJmQBBjCamYeCf1W",
  "key17": "2MGdpJVLVQ9VvRLm1Q1p3fSqDCUpPZ1FEAeJLPaRwkQ4VR6uwmW1JdaQSwCKAnoHiJfDkqYoyHg5kwjUVzVQSUQv",
  "key18": "5wRaAa3QBJk61JrrME1mNtmQztnoCVBkzDsxwuwrmMLDCV8WEypHhW3tcbAVKHAkSMs93eQhfyr2EnDri3EwzoSn",
  "key19": "2fT7DPArRSdJaMBQo9SgmSvzNH2WYjebR5cWt3RYJkJBWmunvE2M5PgTHFXCEQEKF57SLcBbUVqN2FmqajCtLhtm",
  "key20": "4LR63H6krhD88XLimDuNzVG6ZPPmG9aTVk34rznTEZsNBkFR6vFTjNQACx4Mf7M7jtwDxS2jLUEhou5zPLTGHEQv",
  "key21": "5edxuLRgv7LCr6DdeJRdFoJN8QVq2TZDQ9wFkaK5cwQ6uvN794uFmzuSuqkPRCRNpkttwc92S7f8xdgfYRnAHUth",
  "key22": "45k7uL7bCnxJUq36PXgCTGwFuWXWja4wAFGTRsccQLyh6rqSpyCVdhrqw1LxbaJekS9BUm66tdTS7gfCA1CXh8dC",
  "key23": "YpEoC4oobnjSBxDDXZRp75QobhnheRWYRFER7dNVbBudhuf7jJC5d2UP4cwt2eLPbKRBF9z8HfU8A6RNBMMpoJi",
  "key24": "5ahGHft1aYVbdGhqncqnBB3Mh5vVgktMALMepGU43VAhkPKnQEyaqdPZGgzbZVoMfaAiiJFJF8vgawULzbPPca45",
  "key25": "5xUozQNCQcSouDzxLUHDpdMSjoZw3VWBHXH2xe1TEnLJdFWWKKzisJrPTApAQj75ofScMdGro51yobfjEHjoReP2",
  "key26": "3JpHkerxtnC4RV6RpwZDqrJ8fe7zGZBwwTbxUqd7FKyZMYJicQ4iX2WUmroyEqxDUKoge8oS6yQrXDYnyppwxwrt",
  "key27": "4o5ju8LZy8z1gQWVP5ynD62PBJFEQUVpLffi3fjD7vuzdpMfpdBUe7MLhJ2x1bwLe7UmPtFQ6QZenv3MWe3VHfwf",
  "key28": "3JGxynxMxaETZew2qWMyKecVoPxrntJCYjWWddhd6k5CmEtiH6LAkHUQVFv4UVsRYYyoBiSP5owLGfS2fN3zatC2",
  "key29": "4J1c7J6BoxYMtwvDkiddD8fPfEEB96ngAzNfvrAwNs3CGLxZ3gJDciy3Ugr2rTjt33a7hUHj66SEgePobApfnud4",
  "key30": "25Ek8mnHgZKwfEfwqWjxpbyhra6kVA17jcRU5YHGJ6nfobijYnsNh1DLgMkWfC9KhcVYuyAH1p9Lhz1N3YkjGi5K",
  "key31": "2KHFKHoYpQoJLvfQhSdpH7vueK2RsXN4Mv1tzz2KYKpcnJLd4BBqVUrhE8M2WLDHPNxyEsgXS1pJJhaVhvUb7sGY",
  "key32": "55kRMS6g7NzThqccGEY5z3BmLDgB2vu9jsGHM1ugSUyDPjauMBZ89me9QdV3kpyhFbQVsyoajX2nHSn653LFdHS3",
  "key33": "dza5R3gtcaTf4c6jvXU7YKYv1zx1PyWahg3UteMb723385Sp53qza9yKyDemXuKxRkZ8m6x6cWQLEUBCMzTcjtB",
  "key34": "5f4k6kEUeUcaFQjh25QzQheg6UdMPZrK6mSbZE9TjL9ncX1YD7aSqWwe8XYHzT2UdW7BWHstecdsQxWcPK6skdUk",
  "key35": "435waYWQpY3X86Uss5HWxcUUDNZA7SXeK24Q6D8TCpogKsLx65PdHcWJbvY6nB6QkYE8yRYkADNKv1vnKxcrzQKn",
  "key36": "4NAGzcVYo7VeaN9kLX1cqyufvcDU2kMRcbvMbvu2S5D23i6n4GPPoksBSToquN5f38jAiAg7TbemNojBPJZRRtrc",
  "key37": "4cQkVtBvG5wfizCuStnnVEYpjZQnJDxyXiLXEscPRqjBhFvZAApkJS9GC3inNTzeK6JnALpE2wf96asLLRQiLXSD",
  "key38": "5UaqQSVd5ah7GVpv7CAvFspi6ja1xDMpcmwdFmptq6LDeENHk7Tq1kLetcK2gTmv6Z73oBSLZxjXcT3bNyw8nsc4",
  "key39": "5FJPSUj7dVnfHPAEdh1G7eKmcGj8oGNbD21sX9JqiEXA9CiFzwSuF8a2NxRdWDXEtr3V8duHwdUtoGymuAdz6Exm",
  "key40": "31sGUv27mNYVft6FzJJMvBgbtdX2sTU4LV2EbtR94MBXFUKMbuyijKKnfadvUWbHgJJNHb8REQk6iD66ZoVZ6gkD",
  "key41": "5fixWyWtYneNinL19B9cVGJvDG7yQZcCs7A3LwJkcwQp3n7ZyLpCotHxTErv92Xb7URevTEwvcUJaisjV5bTVAW4",
  "key42": "58nZ3MGW9TosHXmcu1hShy92LSiFN1cw9hqYHV1nA3yZeyRgsSnMyykA1BMoa2o3aSufM8P4NB4rRYtbgZGaLsQm",
  "key43": "ZH5M3mZ2Ar8aWikVRopHrGWG4dBnKL5d2gWexVkDnx6jevHR8sG7RKjHxeSQsiDGFChtoyLsvhgi3Gr1TNaPX3j",
  "key44": "3iiWxz7sH3kENFc8A1hCTM4qBd6jHt6oZmv1Lgf9XWbtc4SLXL9wWfpnwjYmfyzw7mAt8TmxBoBrGmefSkzzvD5g",
  "key45": "3PUWcEonAtnGhQLaQq9nAbPP9ykLtd4yYhfytScCmZZu5EkDGL5VjZPS6jcYWRFmLhFWwrGh6u4vcB6yihuPKHKe",
  "key46": "3HyfFecRyyHf9CvpgqTWgjVW6XfG8JoUrts69HwUHzKFmX8bPfJBJJUXNVcWc13u51o4Wguc9e2rmSuihNUULjLA"
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
