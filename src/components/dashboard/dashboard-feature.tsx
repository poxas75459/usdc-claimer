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
    "3TnKV3SENCfxHTHq19KkoL1z279gu1BJrg9ZBmigcEQ6u5jrvFiey881F6ATMpMuwxgLdSe49JEFGBoyNbgrRgjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44jfVkDkicU6Rdanp2puH4pSrHnY1j43crZ8nmppwaZiZdA5jFxeKmhJwDYu8TtTmXZo56hkHy3xZzkLbWAcbdVT",
  "key1": "4tyoZcrRor2KgZVJXB4Ha4w14s5c2C3PjmUtmnDrdtrFze4AR31Q1Bm8Qrp6WjhpvYaTM8XstUMkwVkz7M5ARYFA",
  "key2": "5cuxT7iHDcYCPSQ4hjYXzXt9cbhL2LtLNw25Sj31N3tgVKWh2JtSCsEc5i6hMqStoizrgXsSBLadiCnD7JLPifmU",
  "key3": "25vt4pS766bpWZDP3gK8BqRXf5FGDdTutavbgaKkQQt5oCFFuY5xdM3LyGnLFZwAMMptHgN6pVj8bTw9DmjR65ss",
  "key4": "2hvtpLWawUuifkmzr7bk7pGhY5afANY43QniRJHDRWF2YJM3LD31TJxskunSdhYCNfXEwC3BD8iMDmdMTebzKr8r",
  "key5": "4QPCMGa3APFGAq8qCv8BDBpQqr8bncPtLovVK9Ed21HSCuus9Gt2dYkZLLrQdKtgLqin9C4gnEoWWxqPp8pkX1eb",
  "key6": "3kwgYdJiE7eRq1RUia32dtAmgi8muTaKkWb1EU1qCbmRV5sX9Y8ZPSYCL1oKj8SHXpeqwwjLFsEg3ck1jppV6SBc",
  "key7": "5fXkBshj69wHQmiXPpaivnbPDBAMWzAac34nXamz4uL4UdxEzFP3yThVUDvdJnjqirYVbtSqxJ3uUESk1yTYqyGp",
  "key8": "x4WdoMKLHLXteE1z3yipBeW8voEM5uCTQKCUhkqzkgnLWCRvyAQQWRTBUwK53PX65zg37viPWetjMru9XtGBJkr",
  "key9": "2r4LqVEuc3xfgAMR6fKRJy9dexqvPjxdMsNKJMqm31Cg7vhZaJ5nLWnXamFs6rtD8PZxbNCYML7a4SQQsV8zSb6V",
  "key10": "2ckhfpL6V9SyHhZVXoJuDnqbSghKEppEu9R4tYzGhYsgDAJPK9HCNnaYNgz98rRU4oHWATAsvFjqmWK3TaZHhhrn",
  "key11": "24vtgyuyjVbj2C7ToiqKsJu7ZAeLAbqMbALE7rocuTf7HzVrZMYPpDo8R9XynDp8vodm86AFBddM28DW2RQBYXC1",
  "key12": "3wLaBBYTXsV18MjhTWZVup9eAHZiQKJR9qBaY1hiks4TEF4SNxiUfJPAVrQDQsLXEo8cswFJsP2zHbryH1Bx6ZNk",
  "key13": "5KyGLcyd6SbnMQsdoMBSZUU89mUUotsL3jNBypaiN6uhj6w6ZbsMacAc9yRHMiJye31SFXb5ewVFJSpeceKnSJrd",
  "key14": "PGh4tyFqXLRuHphAbR2C36jGe6andt9VTe1i4LAVr2R99wvVYayxfHSnpMWn1cyp3YHRapqcjBzQ3eWgda2onZz",
  "key15": "i3Nv8VuNqH7quqNDis1mZSa9prQCMgEtVm2CerQEDZ94FjKKZPmeC6Sk2ciLYWPYAi2BWTfbg1CXJoN5wUZqc6b",
  "key16": "3HS952kCquFd9MmJmEaeKssvsrwtNv2brL1yu7nJAmh5tB99MgsSH6uwuzUALQXh7UryCVFrqMk4xDr3jKVNyhjj",
  "key17": "JDRfyXGSxsXmvAKbCrDLxQ7gy6fnwVy6abv5a8WkGDsjDsVqfgxrHCcTxMWD8AXvfGfQFQN1Afxfhez9aVDLYJ2",
  "key18": "4dxUhMdpfQ39Lh3VNh62CAFxDwRSJyxdxUQbYBfsr77bgBrE6VxTj7tiMs4ACfkf2wnGXbwucgcu4ax6a3yLiRyT",
  "key19": "3s6FDPNuQdP8JjA61gRgnQCC2vmhUCNrCkZZPb92x8ZXdjs6tZ2sahEpGNubivCE3CaqXvgjGbFfaSwspeZdQAWK",
  "key20": "51MyWwfmPctWTs6TrBGF7HCsa1wo8A1ZDNxVQ5o5SLPSqTcs5BgEGa9oByjbNAhSAoiK9QXcidfAk2p9txy4vAoV",
  "key21": "4rSpN4NjcDhw3dVV2mNUMP5CGFM5JEZKHpGbRytXsok9YKyxnQKriQLDPXrthZ7mdc27j19LDqdVbhPhfUEa6fMb",
  "key22": "5xC6BKW2na5JWhjGonS2tseV7NxHQVbBzNbEvt6SRiqHFELcPqLfJW9C14zdhoEe77s8yqCEQjVKZ6EUHMKJSJRz",
  "key23": "2UCaRxBVoakeqBiBZnuUt9pTsZHMewSFRYtH8vrwLveyjt1YgbzUMha98Dy8JNsTqqLykaf6YXHXEcUX2bbAtaHp",
  "key24": "4NvQ2cmkd2Ze6P79wV51mHFoT7gcKe2HtpY8x5xYHgeAaSQEY3gCT1GbShNeMSkTkc6M8oSKzuZxj6YQNEr1zvp1",
  "key25": "TGaaCJEwuH6Pstq9hmkGnDVT6xfanpXUZ4UqcAyhzSN4bDjFuEv5WECsbntJNBhRQc96SvVRHmNLkg26Amdf3zY",
  "key26": "5s1xmpU8ouDZZUjTXVw67t7EWbFW73MriZw2ESJFVMAacyb3kwsooJAZApyNyY3xgmwn93ksUYr22t8n4rEQzefQ",
  "key27": "L6MixYkMXUfNupvbpUk6SagM8Vs82wFEjFodZBEX1VMnJNPuPSAjkuAmrUVF3rARC8gvzbmowiUmbAPSZAkT7Fp",
  "key28": "2BGSQ9RWW5poK4UJ7HxWS47yr8ELZzeDKBAH3195jEiUP5XEUEGvphUPf575AK4mybbqmKmw8g7tPte245amWac9",
  "key29": "2R9qUwqJTifYrtsE9eryu4Dj2tvy1pwJNFF8SUKm8Ue1dFffkPqaSNTpZwaPvKSHBF6e1r7yJvzR9ba79fjTUMbF",
  "key30": "3G8HHAQnTSWQSBsoZq71jVLmFgATTKeYZ1gy1jwqz2HwSEvhESdDEGPqgTDAse3y7xsr53qd1NSGRwMPnj4Wibgx",
  "key31": "2qxzfYXpC1i16H4uRqkfL7GZ4QXeNyaF2b2PW4qdHmaiAVe4fQVvSA3J2euZjdo2bDWXeMC7GiFXriHXmuDVYrEx",
  "key32": "32S7cn3JB5BoHNi89dGKqv2JsMqbS26Uzt5AYw1JwjGXiN6bea8dj7ZVEx7Mg1xdKqeRe1HtFKKQgPT4k41xAXWw",
  "key33": "5rzLnBptyfQjJ4bkEHT8Jb1UAXQkkkhKvZPmbBwjUt7mxxhMAqGBAjwu399nfzAYAUSJpfq96nJfecVGWbUUpogB",
  "key34": "2YLxsR12xWB9TNSPNZeTgngPBsNw6nCSdQM4ov7PfMcVLvp8itN1ajx9B84nqA9b1KEEEb1YAgGj8BQ5etGViTF1",
  "key35": "3hP4SMYcmYgsWs25WVr7hJnEJakfvJyx4iKiKdMAdW6H6QvWbitQS4nCG56im9dfxSsTkfay7rpvTezRyJs28mQZ",
  "key36": "2gzTZqKZSXb19tJRZaDxtpn2Yhfctb9q5y4eQT97GXqqvq9t4ynmhwFkezqDS2QvK8XDxPFkcyQxai6Jp46YA6yb",
  "key37": "5dJFxeAidYJyUBvoebFtJubLVZR7VhG7WhYZeCbToi7WdXhjm8ocpkGvDSWP5HE4rwNyrLqNT7Hi5p6fztqMHKTC",
  "key38": "Yac7U35gwj6bPk6XdwCp9SmvWzw8u6o6BrcyzJ3v5BQaaE1CHaasXAnBcAWom62QgmixLPkSP1nry1VAePPoTZs",
  "key39": "SaHpic8rxYiayVFuAReZKih4Ybv3XUQnEixwMxTgrn7sKxomfWczunnb6gEomtEVdT5MFfE7UcufoNURfj8tzEx"
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
