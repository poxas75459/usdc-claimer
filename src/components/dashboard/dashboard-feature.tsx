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
    "5E6FgVwBRdw5ocfRQEZYanjhciaxVtT5UuL6XboDuHyePcfVjvUvfCQtpv5SPhewaE9zRfSvXAKrPzxccydm4rBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "526VCrQQzRFDLbu9kMjd82AkFFGgriKFHTxvKU6KayMiNt8VsbrBB7jEKg9AxMe26g83EhQ315f5461sKaeRTubH",
  "key1": "34UWd8jHXpH4Gz8UnEVSkx1xTeJ7fqZZiJsdK4aHW9M5PXKR4heBAjA2hzpCsaBnjCeKDMznD5Mii7ky6CGJvtQg",
  "key2": "4FsLSRVBcX44QiiN7o564jY3cBFeyX1PrLASuC1eckFZjmeMoX4NBxE2dJZvQNvaxAQ1guNn6JNgMwMHvuqt7r11",
  "key3": "5fcPCxLgrKPD2KSosKvym9fe1Yv79Ks5qWr2UNG8T1JLLsyxwWw8Shorryg9En1ZMxATJuGixDuEB5NdH1V4B7mt",
  "key4": "2fjx1HjmoPFy8DSRpwKXUfoFcAFc9mq1Ucz9X9cN1VWPXeL8P4ggacH5BwSbsbWnAgf37PysYazR9mR4D9VirJTw",
  "key5": "u3nvG3mNQDYUyLPt94LxsPySbeZgNDN8ZBgZUMouGFjvtRESJXsQ2mLgEsgfvX4UipfHUf34y36EYJ6B4sFbFR6",
  "key6": "26gGWiF5tH5igtGquib6uZVcGuipKn6VLDYnFtR7XRkEic3jBRPdkD56tzZBEGnJ3ciB66fTXDxK3pN6tfbif8t6",
  "key7": "3mp4LgeEcRP9e2N1wC1wA2y5MpP5YdtEtEgyBYscAq9RnM9T7B6wxo9kuzSmYijKM3zq6LecaJM5h5xnLcdwzE4k",
  "key8": "3TztTo8QreDXHdaVSYonpJEfECqDTQCv3G8MZRuxzzqBR4TTtKpdDNZWh4d1Fqj9wnhExHTX5NrYqCz2793U9Txo",
  "key9": "3cHAxX4he5FP1d16cqfYbVx3JqDRbbFxDTd8dFtnoCCb99w26aRxUWDq4z9EEHTEYg4UNwksZg3ThP3GS8pAvE53",
  "key10": "4du8xSt72eT6nmvZXg2baTxgjT9VoW9vmmrjX4WHWFPdSNyY4mVkzbdmKZ9Lg3M86KDEwJyUvAnWdYzRw7t7nuEM",
  "key11": "3d3kE2SzP1XE8WBTByVDuvryC8xUu4QpZA3f68HjXNq2VX3RdEi3RzvtqkBEYAjsDWWZg2YrFHeC8JyX1w3DgqeH",
  "key12": "x4yciqFLN2fVthJRHFa1Yw6FHktFhcjE3VxTrR8u3mTGNW19C6AXiN7FY4TZbgdQxfu9fm3WUwmVtaA8tN2Qmyj",
  "key13": "5pDXWF6mxsmMZ8z5korSvERegQQ5nqMd7dDn8jwnk72PdbuYMuuFktE4dQEF3dSssGYz1qwHRouKwejuj2x1CV7N",
  "key14": "23pr2G2z73iXuAYNrefMDRFM77X6bwZxM4EV2CvzS1sFXEbDiXrD3JUMydhdh4STP5JpYgPuZbYihWMFRW71oqb1",
  "key15": "4nLpBkmoKzW8UCqUb5NVGsMUWSCjqjZBmi7S7W3wFGEsgpNcFNwwS5yTfC5DvnCAgq2sVJPiGoNGodP44T5UqKi3",
  "key16": "5nHcbD6NemDMn56UCbivSqfmkgE6DraJrupu3sNzPjidnwqLfQ2w45hm4tXhJ4KsFQN4yzCtRe1mtvugZhhjoBhv",
  "key17": "5Lm12VkveNELgdWw8oruze3UpxNcrgA75nFwj9u5dfWDEkJsEyLaKyPNkm5EsmDsQVUe2ndhCg1kaWC9Kw1vS8Ck",
  "key18": "5dfUMRwnwHnoSf5GNSiLLFiiTUU2dkEBXXyRqqCixaHsuyeuPv4uuBFDpGrMgHt5Hy7rjVMfbDTHmdM6zxXCFNDA",
  "key19": "4HviVfqaoPST9aRNamsZm2EmQz1DfNtYPvPiJKMxS9D3TdqW5q7tGr7dBbUgh57a1NAJf3ZUFCqaotwAz7MS7Z3z",
  "key20": "4rTM1Ga7PBR6LGkWrWPEE15ouSic1rET1EDPtvkKub9BupZZ9pZoZqAy3YPh9nbZYgD9GkhLFkXNcZ9MR47Z69Lx",
  "key21": "433ErV32Mw527R1G1UAbsn3TTxpcy4x78ZyJTJAZmrqToW7fbyr59hJp3SiLsgHUbgoc8EtCqrmGgCSzmHgqVyBw",
  "key22": "64f3UMKcGaaLAHNgbkMiDTy8Y95ngFc1uCXcpXkGA33EcjouZxmkQQcaGUCtLsse19n2DwqTYDiWuTqVByF8o3q8",
  "key23": "4NSQpRTtLhJpTvts5PJ3CA1jxLNv54TxuFPrsBpBTkj41W2KZHqNbaB3W6aKE2d5HFFRMqoNW8NW78a9pUGvGkaw",
  "key24": "zNpszJBUQW5toSsCY1pcx1j6oS5QjVvX96CS3mRsBKS4odNie3G8m8byYhSD6xXwbE15gsLQzgp3L8i12o9rSvm",
  "key25": "2jhWS4Ey9tJkCoWK5r76upNWDK51b5ehfxTJRAyMGtbWtqWHMJcM3o4XM4Aq53k6K7W2hpgUAPydysopdAfCiSqD",
  "key26": "2Ebs9CjgdsmNBSVSTmXpN1DzAokSJfo3GrEm2hXUR9G21cT1fc4ryKA2n7kxAqh5ZUUXBuyCxF3Y3ta4ifHXPbuy",
  "key27": "9B7cYK1v6HYD6pMgSMfLuB5o8bw1Rs5MjWKEcd8e8sECTN126kFFPiDBkbWvEk8Yt5ZUkHhRB4o2dDoR42ozJ4p",
  "key28": "iWnV8Wj31h9F3bkxkY17Y9ZoNrDRpHDTdG7PoJHdnntKsBcu4FSXREL7dmBdYdpMBTqXgRVT5JR6YTPySxGEqjG",
  "key29": "4ceaqCaVXrSfP7BQ5acTMa4dbnsmtYPh8Vy9QU3CmQWTD3XgjcPGEA4YYqx5kfai7iACzcpUibNcXZwyfDAyHWBG",
  "key30": "5Su8yfuTztrfSvk2JctVs4Fxoe7qkT9q8fewPATq2WuqEMep3yA2biBF9CUvXzygYYK3NMa5iqHBj9pWiSZ2msVD",
  "key31": "ZwfLBTXchW1pQiiP2WPF4tdnaDusNcnqNnMLyqQGgHk5vCoSSf1oHzhpo3Yb1TMBqjs5HPbiHDDjZWAuBAZVitW",
  "key32": "5i939RsNdEyGAVEEC77CgT3zhK4KsZvkwkc6qsEuMbFW7uRPDSvFKutsD4rEUm29mgY1J65qa2gusQgwZr8A75qf",
  "key33": "32MDF6i4PhvVA1t9av9iXMdn9u1H2tQ18gNCeL7NsUBtrrXoWD46viKSsVZSKyKoRUGKGdnTpK9zZVAprVkjnx9m",
  "key34": "4KsQmQPGbDKhFi356D2oLKx6cH5NdPzZ56zmFe5yvsobELqB4DXGjn1GnjGb4mEfArpMHXXCYrZAoqJLc44DaXuj"
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
