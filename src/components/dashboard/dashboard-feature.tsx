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
    "4Yrqu1NzQMNW56HZtFAz4JkjnoVHYSH3Utqfqs4RAtoSgBKgApVWBhMR2KuMy9H3ZNRYawZa7M1uV9SSfR5VMJsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36oZPZdF1UnQqYyzYUr66vyw4nKmMLitHnMM6VaLtpa8GmeYaETfQU8Hmf7NJhuxwezGHYQYERgERXXzhq3BUHDv",
  "key1": "2CVNCi5EbUqXB76ty1RzrLa2fidktr3bV6dQzSJTkADXh727DPAsvfMzVt2MwHC6SijJ7cZcLn5jtnvuTKFXZk6B",
  "key2": "2LppFiK9QhC3XVPYDwUjXvqtyLcCRDUPKCFNC98aQCeiACQb3gh4UwEGo3ka6PvZadgkuxQw4qYLXQrHXkSWLRQZ",
  "key3": "26UvBWoF18m2KB2LnxLGTJN6qdY2qgEof28PtBXYFLnAzEniVxT5o1gjuV4gogSGZbrSU1HAfHWvifr8vAkECUMK",
  "key4": "2tQw8XBsAJpJ67xaZeXf3KUgjJWE8Q6ajbsLpgqxbUYQ3rNtKgj6LZWmfiYhj63Sfm4S59RTxpGdtazmu3Z6ayHw",
  "key5": "27rKj9DpcLrpQQ5cq4AhLBHAS6Je9FM5PvX3M1TgwKxS3pkUfS5aaWGstHiXjoryMW58JLCQTgSzpLpQ6Q4QWhbM",
  "key6": "2DXbHpc1CcDM2UyWH96s9w8Lk5HPnmGtNdBT1qsvYD2fGEbKKjv1L2DcxUTqgznEMgyxcNknMwomnMJ2xLuVCZMu",
  "key7": "675Kwau7KtDqPjd5Zkyh12KRicDbDNzV95LVsxfdo4oib9kmMyZPc4NZdL7Vx5bPLNLiLrEhUSrUc7z163t2bsxb",
  "key8": "3B959btueQW33pdhkATnLunPg54fbG4RqQGd2ChZhSZvbTBzERkPeP5G92vo1k3ABXptAQxVdi7tVFfyWTZfQhZ4",
  "key9": "4FnEQyY1So1jaFMyxcfSHqBQgtkjttpuyAPpaeBvUGUCnFb4h6Dr8EdYWgWnvm28MvDSDFHFGbcDT57PRGWJ1Fok",
  "key10": "2TfzHtngXMYrfVxNvHsZebVqdeCpsrXRF8vnQqwgQdJX8xZihSCC8ZGwobAxrkYJCqe4RWzvaYZcYC72QBSFHXpE",
  "key11": "52yfyHEzVpBFdpB1hH2ACEEVaJ1UyyA8CDm67FBkzHTZZUimXJomP5ywyjZMtnN94gAx1ipMuUYXVTBvNdcxb6VX",
  "key12": "3cr2yPAEhwEVp1pdLZgGUJzKW8SkLwwZSQWCc2M2zdfN1vC79MrAkFd1dbvH1fDkwhsci7Pp5WsBoNNY6K9J7yvQ",
  "key13": "63rQ9wpjuSSh8oLzmUNbsXsnUy2cVrDPnyZpTHvREuzpJ1JUresiWHctSyp9vE63DX3qNsZSvkn36AgGnedmH2Gp",
  "key14": "2gugHqR9h881dqVpT385ychoumjF6evMwpkLyU3eM7D3n74U8u6DYUjSepXhUe53Ean1RzZsdvNmxAPkL5wXoYFa",
  "key15": "4ChTB1tSmbU8UG394vCXEKwMNMDDqGP2CvkTmyjEuuD8skUTqw7xsoRYyVWbQLzWRqR2yupPKVRiZrH5ySkCqS9V",
  "key16": "5TidVsPBqabN1mDcrHpUrAXVG6taQwBe46rYKnomBroz5hPpVGuNZyKivCAGezedgrzmRVHPnWnGa2GXPEizpV7k",
  "key17": "3xwLfyabWWBtPMUFGRyomFtBnCysidDkTj9NYB7Knb8Y19ThDUQ94ZKFTLigdMjBE973ihPpRiFeJ1byZ1NY6qNe",
  "key18": "epb6HHjpCWcvBiosogis8DitYom1KRBXhoYwH8i85BTFURZtfJ6uDtAm9fxjwDnzyP3fps99ezNDVoBrbZih5zG",
  "key19": "5bcEftwTUXxQ5NuPyWmuv33QWj7pyFZJoLGd6FvN8PP3JdruSCmzNUiU6ETD9d51AhwZjbSUEcBx4g1PJiejwSYs",
  "key20": "3LQHzh3NmSJrBixTRzC9VW25Vj4Xt32QGEWnwcHd38tArkRaUtV2wuLTZtQVbW67mQej9SRSBTGcmGaTo8koHNR8",
  "key21": "3ip2JeL9GgTmmMJE2NtwwXGmkDwBpmsrTVagFFn62iJjjGHY4gXXx7LTD2L12LSAVL8n399spcuKDDVtPyNfS5ec",
  "key22": "5CWh3hTT9ZZiFWhEu1qdYGSiibvYaKMYXFqnRYaVKFuZsbQj9KxqdhzbdCfJXGvSosrLa8DYvnhTA8i72Z9C1pRA",
  "key23": "2dkRrgHcoGjFcj9iFNR5nwhCi97tPyr1GraarWdaFBhDRDmsd2AzxAScRFSnoTNUakEETzJRj8ZbxYwfdiWHypVj",
  "key24": "3r6TubmiAg8Nhkxnb9X31jWsuamem4pn89wk6ALFxmhkViz9nRYSTV3kUzyURA5raDjEx1Yv6tBwQtBW7wit9FG9",
  "key25": "52f5H4jcf2FvDJVJ1h4a9RUFiG1Wd2kRUSqomjoVKGgeepNFisdhEpvvxahwB18MYzNFXzBELR4NEFomBTADPhmJ",
  "key26": "rkXpfC69F6pKR34qDcNqcrFgRc99fLinJN4uqZk4EBZxMjUHQUaWArz69QSBjw8hBiDx9a9JeccbKbQKVFoemJU",
  "key27": "65SaFCtR17qPTBB5tCkTtzRX8dn1aHGyVDwas6tGAnxpYMMxoT3Mzr1J4nU7NwHf7RZkNBBEkx36bfTRNQ4DiazF",
  "key28": "4CAzPdS43aRHn3muu9F8od9XXXG2dYnPaLSDtsD8EBYirBXGRDYkkLKzZ6hWo6DtnwfJgmL9MLSkAn6MXNiRZbZN",
  "key29": "3rbjbDT1EZYZ2t3XYaENHKd6sTfDP96UVS9KEF9KzVLfEPm2qfyxtVhj74sSAx263H4qk9Sy2VjWXSByGr3ZYPSw",
  "key30": "2AQsmKyiopb6hv6pZSaxkrzxTt9SCeZgU33DvayFnRJiTJ8dJpRazTaGqxntMSjrBhFEn4ErL33TWHZvQDMW4jKF",
  "key31": "4XA6fVPc5Rtk7oDh9gpGSCzmWznqQvmCPJtVvpWZRHEUFiDkoNihz4hwAgjxtGpBco4WMYyNKjoq7gd2PtgCb44A",
  "key32": "DbRC24MpbhPJFNXDH1sgjokDRaAdmK9aayeBYyJcnPSmJeA2kdT6kh3DAnCU7HJx5XPzmXev7FePvFMKxavfDsD",
  "key33": "vofFPNJ1dKnnynroaBBpUXqVXZocKS5u17u6HGjM77ZFmGx6nyjBY4qyi8r4wmPSJcWoqAw9dUSuiSfXBBehMVQ"
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
