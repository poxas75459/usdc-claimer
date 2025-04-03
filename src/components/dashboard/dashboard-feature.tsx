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
    "3xbbtMZYenixHphHhPuZEwk1LDQYNy88WT4R7nMyA56K6XjeSkrvwyDrAWbgnW1ryrwZHtQsWa7ZwZyQrXMZ8SJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FHk6KZK8tnTBUW13ZyaVZn8kwzUdGkGcsShaAnceZzCWEsSRhW1RqJy2mCwy37yZUNigTEoz4i9JeLWRpQhTC59",
  "key1": "3PDUE6mAN447XBsoki4jxh9WtkTyLmvqZRX8kys25uAcudH6uZU7FGQLrjBDZhbMXGCCLUfn6crG5JMzDepUBCPn",
  "key2": "4a1F4sdvK2F3hDYw5hVrzEVXj3fm5WXFnb36kvXcAHpVmsVpQ2ywcLBRJDFMsdL5DmY6UivfVQem988UvWPxVPha",
  "key3": "4PJtCULuGRftTRwcBpeb1pZRGjxc19PgMd6y15zN9qqSbZw3iRWiBm9EarHiQUaWvfSKBy9PsmQpy1HRNFWGhojN",
  "key4": "5DTYajFrqptb3rXaQRWEjCAiug4S496osCoSqcFXRPqkwYh9SBpbpoNW9JKALCpoum2ZCrdPaxuKAWiWdBz5A3yP",
  "key5": "5uAgReg7Sx56Fe55fqWaZYRxdwKBkTdh8w88AJsEBoEJdPM9RL9oNezHcyGg9Hb6vi554WpqaqPYf8458KRfz6u3",
  "key6": "4GWRvZ9TXipGFpyadCqZMnpnu8asten1JajyVi6DLgqXDsCLQzQSef1CjFBtzn3Wa7Cdi395pjiYSuVSfUm51jdb",
  "key7": "3tu7rpWrvNEPDwEjMmy2JrknFPPemGaoDehyKCNgppdQNSpW5nUKErGi2a9CwJxoTAUJAFX6oGwRufEddad5XPbB",
  "key8": "2ger6S4H3S5T7WPETXiHR7ZPtG82fQ7jAHxxicbMYi2ZNmNPgcCfD1co1dE2TpujDbt6B4tpYFKLFPKznm3ZiGwc",
  "key9": "21A7uLhvWwMMDkEeewZLUhBygzWZqYLDT4VTrPpYMWJuUxQxQCuXL4B7nTjCHMEwgMTLKrPGGV9AVxyMgxV7dM2F",
  "key10": "zSQRAL7Wr2tMK3ZhQjKMJAwu3jRCnkCKS19Hxg8PaZMgSb7SgBDeitQSgyfYGvBUJTtBBN89Bj9B9RgcYoa9Q4Y",
  "key11": "5q8LuNbAK1RDRgL6CpTZtXyD9pH1zokbrgD1Kda7bfp73K18dUsKBEQRTGa8e99e1652Bim2DwGz6xJ1ius8fef9",
  "key12": "5oWE6cXXbCbBwaKUa8bLcdDrLpPXBJbZcuT3BRnWrwP29CSXHRRohdgWCbhEs6eZ8nSPo8z4kSMoo3AmY7BT14ZK",
  "key13": "3Cm6X5SW3QvvZ4DoCsYoCy2eLa2qXUTvZbrBdEoQ5GnQs2U1hZdEoujZn1XPxfoVSV2GtuuUgx6GTcgVzU3MaqDN",
  "key14": "KZacXEGg6H7AE3jbE8P5EUiszYLdtgRZ4MD8oryZwPQcd3EeVrb1wKWyoZR8QzUtQ7zQ8iquubgEMR5ZeuEEq1V",
  "key15": "LbSoE5UCvsJAUfz66BrWmBbs2kfNGKgBKqwNnJS3mYfNvmgELtJUSgTgUHcbBuLSo8GG535cPxnTCtmVor8wAAT",
  "key16": "4gK4BLDv5DQaVFfyDPnq6a3WsTjMyxiyVm2wKJhbwmAM5jg6ZkCVVJXB3Qci7fVHqx5iTjmQbiYmiScci2L2y3D3",
  "key17": "2iivh7CFGBW5Rak5hokFHkg9dwLT8tS8FAc137KP2KswV5QKCFLnjsZQL4r99kVpT5WnrvpJUzgooQhxwdhzJUcc",
  "key18": "deUyUQeQ2duVEYzddaNCvaWdAqrzPrFE15jH6wx9xLA7FQWyoZVmVowkmZcrM76gtTEneBf8mnPN6yNCegxr9fz",
  "key19": "3cTw2TzT7eysfEb5MLtLg6UvebrJDrRrgKCMJb8w9Y5KJgGy1gTgL3fdNcScDHDVgSnKYsbLEL4bsAxPPy3KkQds",
  "key20": "4T2wotUoQq8VKueqdb3Hto15i4rHWMMgpj9bUSK21nMXtoCr1gakhegV5La9PG5kA7URJ3X7tFSmFxxNMARUTyh",
  "key21": "2m912QkJpVgf1vMC5ER5tKeRrCdLCAPMhkFJ97NugZhaKjoYnMUWoUZrtSUYpVbD2Dsfp2aN7DwTSqA1uMW1uJzx",
  "key22": "3MyWPguStfb8MMCnhKkZVfsMkT7QwmZ3T83EYdEPmnnAsC1LTCo7mV2QPnxCoszYMrFDgrhrRuDSRu9nN5FoHDMG",
  "key23": "3CxhkBZnWqzZdTAwiaUEUzD3pvdTZTCEiCMwQXjyAziTgfyD3KeYPPJ31K71yBpfqVW9REZCnZrezJbRTTbU781X",
  "key24": "5KkVTrc8S1d9SER1E7kQDiMT8TjGJKATEYX71A6vVPCSz9qYN7mRGPJZ4zis27SbtdtRox16KnKJGPA2Fx23mMHZ",
  "key25": "34gatFDH9NSoHR7VVVTRjGh8RqwXNXgmQFSXCEichZprqHzuxMDL62tKaJ8kiFEJ1q5yCUi6nJtw5931hfoppXtU",
  "key26": "4funAfD1G8jeqB6TR6N7hfhi5tsiMnK9skXmpSjAuxccmFiF45BX2i8B2DUPqceC5VK7gQdmBdeq9e7Yc87dqacp",
  "key27": "f6466jb3iYHqSS2diWRGVjgoEf6yNkASz7mcC3sfhQhqGxpyasJBns1euRu3L5ov3tX8VXNGjxLaDm9cvzWfun4",
  "key28": "2zdchpFYnxSKdXiEHEa76kxLBbvujBL4X1vUzipDZap7oY6SNedhAi9Jkuv1McZQvtzHwmAYEPyyT9UCXyWbh7NE",
  "key29": "61uxvnZyaT9VuJstJsvZYmp8DmsHFWh6BM7VkK7vBkfwgX4MtJGvu4rm4JuTvqk71vCfcE3uh8gn3euZhatr2kXi",
  "key30": "h46mt5KAq9hTEFMimHkDj9c8CcYiGWco9hvGLxEPSEaL4H1sRM1r7meDHzfiah2pbgnCGdcszRsXCSPujEGaeHE",
  "key31": "4QotpdgFXpeji6CTiemc7hSb3Ma5wSiGQDPG8W614wbpaZXDXGucVp8WXJW31QKiUwAsF2LQ84trr7FGAcDwGczn",
  "key32": "t3yUeoRCpNzKeSmSuAe5Vb6uPT7toQHUaUaARF4FX5YLFCGoAu2tUn2yHBwqWanX7GZHxM8W7Jxi9X9b31tiRkh",
  "key33": "57wJoMHM7hJm5AhvEh6nrXbJjLmDPGjA8cvekLT9Ye9xPEMP5qEMCaBMSsgKTQxRDKKvd4dMT3Cpakf8yA4cKiLv",
  "key34": "3Dc37F9yLGkmKQpY4kUi1rnMLWRst1zHwiuGjnbTUrtNfgUPtVrVZ4b3in6ghPRWKU9853njyJpsukZpdYgzgL9z",
  "key35": "4W4nwY1WkjKUEPxPkRxroj8zUYSRd2eMZGAwCwdKrpyYG5itMapikXwDU6DwYFnKL1jvbytUNtdqTy1FAusXtunG",
  "key36": "4aYf9KRqZWf1oqxewRLUuoidhck9XW59rso3XuQxgQ163iQrYLMcwigKDiaLfHJh4qXrXx2HTigNqML3HtYoSfo8",
  "key37": "4n6ZJxaHmdcMZAFxHCysagVBXNyq9qv6jAYSdyx7KaF2fuMpNxttQganQacENXeoQkvWy1YGtLxRdEHoDnhZ4BTG",
  "key38": "2sX3bvwmjBWFjo43nXV19jDiA6fdBKcNBWsTf8Xpmx3pgRUF4xQpvYiL7VxEyZmFRps6kRpo9Ezehwm2C23wPP7d",
  "key39": "4dFz1aTxn2uk2v42epPkMnaP7ddx9fUgyHYNiGDAy57CAqvCPoCgr67ULqVMyoFSkW8ZLVQCJDZowpY5A49X6SuK",
  "key40": "2HoDGnNWwJrqBVyxgBBrkE4F89tnTcWhSiq1ggGg8ZQNzdz9TNFfYdh2G6qTp6wU1PpJEKsHpNPnjpqhSjat9KuR",
  "key41": "2XFtpbmhittZTLrPfPArYD7pMXn8p3PCZ17Q5Tpm2XSmoH5x8BMAuEKvmy134fShURPfF9Wn1xQR46qZmiA8546u",
  "key42": "3oGRiv9aYexVMJeL8YE6JxbxWPL5HUKmV5os54uxP3QWTMN9uqVfb7XFeiUMkfPcRBBTtv8Ufo7YU1vGK9MqwkW4"
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
