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
    "62baqkhN6JEgPQg2z19QjjtVajLVVqisYuQS7PS9RJZXdTf4s2ZKizCvSG4Hcko9E3sAmCYhT25DzhKSvK8y9eyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UUVFf3PfWmnRRtWDuo1J4mnauyWdt66jaBomN1gy2pV1LxPyk1cV8Yn12Fg6PA2m7WUuDNG643ZGde7pRHEZqoy",
  "key1": "3QZ6r3PZeu2iMxDGQj5aFMYWrXPy6Z7axPuuLS3bNEeaPz6AXrsRnTmaWgyky195K1gre58iy4VPGaCUe5cdeJPd",
  "key2": "gJwqiX3XBPDMvbGRzLCnsPLPvcRuuoc2ozY33xWqgTQtj65J8dkVrLN2tVA3zU6qVPBD7TzvWpzqo2beyr8mAuX",
  "key3": "dguc8RFdczqwQuAPsreu8unTNRXvYnoi2HpQN6AECpVxzNbHrSGCCkKEAZ9hWZf241DuZe4Wid7c6Sntpw9pKqj",
  "key4": "4UcZEyMy4qavbWh1EydA2gy3EWn2qpU3Vn7PRMZMDVdAtwe3iVgS9ohiJTRhDcWZ7GBJ82fKhXHaM2NAem3GRtZ5",
  "key5": "5q8kA1mA6JEmNdaDe7BL25Pyw8n6XqSVeTD7GLzjLkvFdMHq3AKjeeBcCDupGx6qnki3oaMt8ypuxW1fkNMYpjiv",
  "key6": "4Rsb5NDoBVY3eGHgiss7YR2RSuVPwg4iqEGawsaaC33nTy3SRLyB7dWHnPgGtc5hBrJ2364xVjEXh3iJAuKatn66",
  "key7": "4xtZ6WRjoTUuvDfC3cWwY87zzWHUcLy6G5J4gvAKyYBjVpSvbCX3DWAaTfTALbMGWGwiAz3h5J6AS671i3UEYWaQ",
  "key8": "ybjmNg7y3ku1U7B22pFiAZkNEq9ukszLBCZc42hfTCjRrQiNaQTv6hTaSFsupZn1dDWMxXR3X3STrwgyuNwkzzv",
  "key9": "Ct4UFC34GfNu4hQUp79FBXzjJ3dM91aKp9nAp7a9z6psnBD35NgiN1oC36MjfbG7sMY3tDicbNBFEk3V7zTB5yA",
  "key10": "3neiWM8vKH6vXf8DRhtvVS4T4ABmXL9TDmFJedvkT4uHGpSRBiJ3pDbdNNkSUtvmWFhV2i76SyGE3BZYCGRQ3HX6",
  "key11": "2SqsSWCmVmvJerCDdLeET42gcf2quqRZFbXJovWoQFK47KsqnujLdSMwsW5zFmu2frqexyeNEWHbzXMyFMoFuewY",
  "key12": "4jXGHzh9awvWJ8PZNXqbeCpeRKgbLJRvsyAdm9S5Y73GWimSsMNupHzCbdH9zjmmxfNGzsRuhNmstJFaNiSag4BU",
  "key13": "5hfHV1L8JAUm1mSiwkUhFNLvkzaFVi1kQBnFAnTMfrGYEGL5ucJNx1XJZQyuK3GDZRX3y6mJdLV4QyA4ojmiFRhu",
  "key14": "4tsKssadbpgqCnkuBdnC8ULSchLVANijSprZGLyBC62je1HC2sUFjUAndLiVodX4kqnaruRARXBXFSEndZRK4gFp",
  "key15": "5nv4DuTsJGCQvPhmc1VsQM3XjZ5QNC84bbttaRq4ryqEAYvD1dxf7fBhGvqbXgtbnCV1WpainoNBenSPqTmsKSVn",
  "key16": "4vcomsQaU4AdbLE311GFyZAq7cKp7PJaswGFfs81Z276eYhpMryrBUYBLwkcwKUB7nxqR1mx6Tdao3KeZ3UssH1d",
  "key17": "3RfmkFQ1L7tyXAZoz7Zrvni2XMb4pQRRA1khya9stxRibbc2f6iF61roAYKxgM7knYnsQHPnY2HTBQBy3J9GkpMv",
  "key18": "2hokr587zWKQCSf717Wshue7m7NCRajHQkdknVXehBJVUFuNWsdf9GViY9JxzEQrZe5qxzNagpNQ5BzuvyQANizQ",
  "key19": "6MRbyWriwKSc3n1BM7r2hLjVhxPsmMZdvrznrzDqZ6AktWuMHgoAvfc5CkUFDqMRFkcD15EoC3p22xNSzD6t3qv",
  "key20": "2u7bvDD1iyBxsn7WrZ9Qs8dkAdDQxQpdJBsCpEFYu33G2zqGeQkKoetJ34zNBS6Vivq5vYyVMQEchGX1f6eL4iop",
  "key21": "3gej4v7q2FQ8peCyB56J75AkebguZny4VPeBvBrxMqdTBzjfFFJDDmiTPHEkdYV9fdhqA8dc9p6yKAv48XcvPqhp",
  "key22": "3fkXE9LzFtZDMBj9C9QLVeGNbA2LPKNn4UK1QNMVoh4p5Yj8v89q4PzujPJEMdSHc12dSm3fWU8CEcLxQvPx9vN3",
  "key23": "fpJinNwSkPvGwu5paJAF4d46dYNvqsLj6LPcipurPkc3AUKz7NPoaN14Nd78o982yxpgimqF78KeDT8yLXqgZwT",
  "key24": "2sPJDAu6c27CvvNpvTxiLzvxfcbtp8C19WQ8ATzhqJfVAdwLzzMEUgj7XknxXvEuSTkndYViVpV5xeBpJL1JENZJ",
  "key25": "2m5XovE99VbSVKowL3ADwRLX1wjGLLvUyC95PMYK6YGmcFyakgFS4jM2DvjXhvuHWLU3zXBFec8AMPNsnhpvFU3q",
  "key26": "dEnWauARLgwstANTC1cT3yTKNttSPkVsHuvXLc2eTEUUfSappXWkgvXoF2FKjEMwbZU7xrRFFKwg4K919y2c5nK",
  "key27": "4no7GX5vh11sxwW9wkYf9D5Qx1Agyvf4dvaTtdcxbPANfhfB1MiypvPYX7gMGCtQnTFMj1SgKB1fHNFrc4QZpg7v",
  "key28": "21iAAnRGcoeostBEiD9DG3RLz7MHHF9YJQq6BD2DtC5fDsoo6YMWveyszR6HuwCzj2wXbPqMe5nSUT8kdBB3dP3E",
  "key29": "AWWkgdC1QYPt7tgw7qV1SWiLU9p9N1tLnoZ6k5rSCqHbAhgZAgKMSP5fsPojAbxxQXWntSRAUaMovC8W7C3xnTv",
  "key30": "2G4tKhrYuVypZ91N5GdhEk87rX2mfyRy57LDpSMGdMjL8HUxFqVk349aj1MioczE5bnwDvHCqTdjSPfQ1R2BtvD8",
  "key31": "42UeNetCnuDBawingoqJUoznJdXFfNKo7kvFmyJs9d9qKUm3QB2GAvqZebRxCqxirxq3HNMCKKc31v32jeyA1eCx",
  "key32": "c3RYFWdyKCz93QMqXmgbYWk4C1cvNoGfNXvMfra5kV8UAWPFjqjGM2w2edxNcTRDG7GndDK3BXa33bJsAw3RWgz",
  "key33": "5Cp363PeZbkKutRu8tBiG6XK3FzECUwuBiHNFXuQzF1vA4uyPVAWhJMiyUXvVnGDrCTHsyNaoKs2QPnhyz1QLgP5"
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
