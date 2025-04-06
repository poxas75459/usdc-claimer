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
    "5RYpAfq7byKnoLRR1TN5NP2id5zuQ6Lfvrv3TBkgUzohamBCpQ6SRhzLz3ioF8MM7iMtQobcPEX6cQm6Srj3mNXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HHuKeqXXkpUNLQACADEGpqc6n6vB5JbcqqCBX5Po9CErMm1mz6sFsk4vVKhnddn5AAxBQXHdX1X4WkHDqHTbt8R",
  "key1": "5f1ec8Tm5grzhSnunT8wJpmYkau38kUi3kQ6xSpJTnUXVLPXT5R4GmifeuddQ2PUCaiaMkuptNaeSr41CfN639T4",
  "key2": "2caQq8AguPnHMHZPV9ibcd2rw5ZXpaDukH1egNwN8e8Sw9jUv3kxveepvVN3BfaaZNFfdXEqrRnmqJkwf4uKzMWo",
  "key3": "4yqf2GiopiMvW5PNFAp1UKvAyVPMzNCJMAWeVtySGADXaq9xn3hH5SEiPNiuLAY2N2R1o3kHfi2fGkZinZ4XV9ZS",
  "key4": "4rfoqYihWiLcbGGcEuYjtY9Z1VePd5Q7ifnkkFofow3RTBx2Tkb6BtGbGj5v4TB1k3ZgrYDiV3jQRQZJmE5E49fq",
  "key5": "SDbzQ8ZBLWtUfatkCPbx9XidPUvQ5cAE5egq6F5LZA2kVLu39XyMSAqRkts2cdtQRYMSqVhemwkJ37NaXHvmicH",
  "key6": "Zm5VNPi5JM8PvwVvpUmvtuxvjGC5zoqapxbvvZ6JKLRZosUPvJ5cwLsMumHAsVQTtCs9kcHFCsEXzw547Woxh5L",
  "key7": "3yoepTSsAQrGasazVt1HHUWWMPLEiiT2NuKnYdhAvYPuD9Jev5V1soQF8oCWKE2CExkTc4qaetqK6T6kzFfbMkAy",
  "key8": "3ZxmYSVSbSbv1KDdTatz9M9BuFnNwph1vj14SHaV4MpCmkfYBViegrq8AfAYmVX6nnpfniDNPAtEx81F2sTobvje",
  "key9": "2V1rQvprkWADcXTSddRywLuKZNUmK7abeR4h1aZxM6ahR6qEG2rTHoKsaEoBfQoTqAY4xkophLUjS8o4tkE59cKB",
  "key10": "4TE3UcUfYEMZsWU2biNioBYRH2TBtp4yJwzkegrfegLPRRcgXD7bSepyLRP3ExfUouVw7C3AdRKxj2Dit2TNVr6Y",
  "key11": "3bEXLBbBWMsTGGvq29PEE3FPASEPWMxNHUvWhHk228VXFNywtRTtncyqCwQDSttV6mSyZPjXxDhWiPvyCTwaLBTr",
  "key12": "16BddGCf8iHWa551adLkJLRDe1evVYmHabpi34Noy8S5svZ6x1aJz1Q6epGJfXLajV1EjHGz9ohTWtvPKB9RErV",
  "key13": "4ueSWrYz3NtcyN7v6Knic6xREnsufKDMRhM6uBU8cFaNjXLbkKUkwNgQ5GnT6c19hgPgbxvEY48czNLeTifAnZH5",
  "key14": "2aXLksQvGkArCsp7QLpdsVKf2LJZnNaHneTDgakTVBpryjzHERTPFeKaJERb3cHbT9HHT6bcryPxRsdxL2uhcUHP",
  "key15": "3oLBEjH9fa1C2RMQB3jMt6vsnntmjRLw5GS7Ur1zYmpUsUitb5djAb4iZapBH1KBkH3ZvyBGvWow2rjWt1v4tLmo",
  "key16": "4LK7FHwixFd4Fne56ETzctDbpti7A7VbPbdiaxFfpa53s32g8eLVQcH2HUs8LdkcuE4cWBSqojE2gteQYudGoUFv",
  "key17": "2cxXC3dhtwpwzBs8odNT8S26JdSBeXmtPy5Q9P9UGEurQ3bz5MdUD1zh6HnBH2GUvAL4faQvELBZbbiPue3ndVXr",
  "key18": "3xTgCh8vn58MTqFT8F6QzD3HweS2tQFtp7pM9XcXJtK8jViDA83BcdEbjWvDBchm4jLdypwkL2GGeYJ9JWn7rTqV",
  "key19": "2uHhPnyv6Qgtk5H4zidwNR1zXPczpgrdjFgPjaxLekY61Wvu8xosAXni4jaVw276f4ZPqXVZtjQtDHmRJh5q5Taa",
  "key20": "4AckZLeHFo4pf1oAk7aj4py7gZ4U1muR1ec8aBrDiRXdGVFw81beU2JpaEjdt7SHPfpbuGu6reSc449z8kjL2CVx",
  "key21": "1ScxzCfkDp6bPzvnXhH2NFKZujWn92Ngr7xnxCmsudCft7gQRCqFLEej8dzFsYYn54YGsbdCU6gfJaptcwkzis3",
  "key22": "3vp7nsHeKBLbWnjSqVJ6JFGajXQNSZzFkY7K5TSTF8ShNsXnFmGnSxHMJA2c4wK5CZaidKvCCKAHkH95aDucoTy2",
  "key23": "BbQL8osFUDAzosYjUJPuLWoDvoxPKQFQFAW1Pd7nmEJvTo9KVKzghds28YHpAPKCroYa1LaJVBRnk589YFVpefx",
  "key24": "3YqVQiP1D9qZmZBDD161jGGgK4HBMX3c294gN6Lme9TNsioZkacthPbReHXAcJMvekVWVaG66KQLY1tLvRJn2eFz",
  "key25": "2YcCWzK3ZN6RhqXZ9ALycanGB9WCnKvYC17Ko8toszwYKxqV5BygV8RozwmA5LRGWc7abe9K5T7BG395n97bnRMt",
  "key26": "4RoD1M4GEFj81YS68RBF4nQsfdCPE1mHDXaPeHvy1ZQnDkMBUCdzbBGXEgmhwjATxMsswpVuWWQ6CKXd2mJHfh8L",
  "key27": "4uZY7rsAevwGBHBWGtJ2Lynru8PV6ALo4vRS7qT4KHZtaoFaFYxa6drA5eKmbGfHqTGGgToHARj3ActZD3JE4sbz",
  "key28": "2wMA3LBkLX91D6btjwfh7XJvnbsQeVFh2bX6ZXUh2LnpPUkLdS4T5RrWE6QUtZFfJaNRzUKgkMsSV2AbUJzxEnWw",
  "key29": "3s6iFH925qv7b4XMK7wZqvtBv6x7SxMmMufRDCSAoizucUS4Ur684wMS6xwXfJ5sE2uWgH2dCQ2m1maV5v8ieeEq",
  "key30": "3KPnkT773NHUSkXDzXWBmvQGbJEFJiGmdrfDHqTvnEjfrV5Es9RprDxtof19TJt9j5prH6eq4KPvNSJBfXEE6s1X",
  "key31": "4MctVeWNYfeL4EPaJkpAuiSvSY8LGTuq2PB2rjmgktattge6uKcZQ458Gg32cpdPybLcdgH9ThYFoTrbjngfB5mx",
  "key32": "4gCDkEvbKr4T9JxwS74Z489dPKweFaxkrCaeVcnSBSgh2qg7TbU5zgXERPcjR8sVrZ4oMZzoKLJVjJpYftuyvE7w",
  "key33": "2oAP2iFC9F16pnDLgWASS9eePdGU6NXM3dNFyww22NLe7nozd9WPsnx64gAb7o9fv4iUqcp41fes9v4ohbTxLAkZ",
  "key34": "3YozKuoMiwtqFKCfZJV7e6tEdL74GqXAwojuvetVYhX1JRVaXY7Th2ERLxBFwg3VApydVbUDSwomULL1WepYszUh",
  "key35": "61UQxVYVG9ofzSef3iwdM8AXncvtpLxyFbm7QhfHT3fVT1C3CHq9TFCxRhw8m6Tuoj15kD3QBoCxW1knRH3GdYsH",
  "key36": "ssKcG6VUN6LnPjKh3AB3QjsbASrGFLm7ZyhSpMN5Yhmaq6qANXZqteAZMfsjiTkq3Xn54wCGEtTKFaukusG9M6v",
  "key37": "4xakZWLxt1gXGZQhuNdyeGz5G11dzCk891NNHQ5BHHzSVLF4nxoBoYiacJ3UsHopoXjWfEs3a3aknDAANZyqjHeh",
  "key38": "2HuaYtoh8yQMcp8jSG6n3GgmXzyNQTETA6JrfjFe4CrMCFYYYdD6vT2iYgSuokGKT9ggXfrjWd4q3auxk1ZFXSr2",
  "key39": "XUSpzaYrh8z1b8RUVNB1WpfpNq2iVgDthwnz2qoz7En9NUo9pMrfKAAk5aoWVmuJTCPx7QiqhXbAGEGteNhF1B5",
  "key40": "3FuKKtSMS2HofLaZZ4oJF3jV2Tu6NUF8SuuH4WwcfJF54Vs69GwawxVsHNDk9FTt2Lkzbnm2DfQz3h946wtdxuwt",
  "key41": "3wsBYNeto3nj1cGPaCZnB5JKEHeHvjiZj1wpoqngoRCao4mLgoTctf43UuSHy2cRrvrBj2TUP2WNgjcQnUjGLro4"
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
