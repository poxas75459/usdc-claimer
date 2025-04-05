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
    "378nUzAfpL2DJW7uizBkuokyEBFRD6nkkNYJtn5BGiNeQQ8ARgarRujA3VngUkjHrxR7NMt9Z7ghxSx7ZSFKhQoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YwsZkuBmcniCMUrBmov2Ri3wDvaVfZRkxk8KScJcoazqXewHFHMVjRZN1XSBN5RmqvKtMhwS2iYEMVDqVS2f1ef",
  "key1": "5Pa9EMVTL8pnfywc2X4rsqhXSNE5KLYdemC4V8mSxeLd9rupu3RDrgi9sy9MJ4urF2y74mmheFvoEYtSLaXYdMrj",
  "key2": "3f6hwdxNALdJ4Poa6AAmer6RkgTgYudAMVCHFGV6Uoya9JANSE7DiZYGz2C5ehEivUkqnKPE9wsSEDDGjTNkuct8",
  "key3": "5v9Th5gnqy7QEaWdG1CjWZPGq7dhfDRfbs3rMUZc3mSGN8S2q5hVoGvXaNt2M4QEdcZCfceYsRu1P9p9sDKfUGGf",
  "key4": "38XnQ9fBgJToyo2oSBVToAhfwZGDJNpSwaL61us8ijov7i72jzR3phyc21vdaimikqBxoZfybtoF1XTL5hTzCxs6",
  "key5": "3KBNYTN6i4RDyo4Cf3vZFx4UG1mtYk347DUVi7r8RLurBEaL4dhtPQy3pvBpp5irpCL36Qrz8P9GYFdZquonBn9k",
  "key6": "59Nc9EhUtnfapWNGmrZF1gHqTzMnwR4yH8XxrXb1SmEEJWfeEaFNJmP4QeXFiEESdQ979CQkwhfcSH3mVy7621E5",
  "key7": "2brxW5ZFmPVn8neHpj1tYAqxkdGpseRuAYHGxR5Em8ANXMwASfC1PgX5hsmdpF9LYrTXhNmCRSCN7XEYVJHVKr61",
  "key8": "gVnU15wgtziYRxqi2u2pPiFSypRKikzqP5Bgt9ZVpMo1o7jQmT4ECQvpxK6XtY2vDJBeuduTKdV8ExMAAnm8ZQj",
  "key9": "44GaYniMPWYe7FKY1WpdZ3TCxTPcDWpSj7BBD2gYhut4tbqzWn5EqmcSS3PUsZJo64ViNABDsg6UiLjXc7nSxgx8",
  "key10": "4DuWFcXkQ2kq6ycrT1zATR41ESho1uVjcbH3XpuVxqTJ1Y4bwNc5kn1mmEfwsX8LJijfxHDKcXjApShZzpRPKpGd",
  "key11": "UrRSS3M257EWBiwRAr4EfEb7GqZ7d3egBogpyiUFtwy2VAM4ubDUuZyQh2JaUzsvTNdvfiMtZms1RjVSaXV27Pm",
  "key12": "3Qy7jnUPrWe8hMcQUNRf3PYXBHG6KRANmvjgFFYYTG6UNcoftvfKLGyDKr7DBZi5u4QsKukboqniGCC2ABPonont",
  "key13": "p8ZhGSZCGBAE3GwrAq4CNX1LyvURSQMXpppqEuu7c8RN1tHGnSieSeNPZnyeZfYYEkRkHLUaTRHbN7MVkep7gaB",
  "key14": "VjyYw5Y91KT5TccASawNqDUT2BRFUXR8QGXnEkjQtnvSPAfPc4hDSPq8gtJW8p6ZV5LGT7DJ11gz1nWWSccNwYM",
  "key15": "w8GJT32Jqjjyq7aHmpQKhfXua69Qr3rVZauCF1e56hYMDanAgoPCzJ3Df81D1MdShRHAQ51P2f6jrA75HRdBgRb",
  "key16": "fVEdzDX8kThGGDErvjotERMaLikWoNRJqUsPCzw4zdsNxqgfdsEhmUe9PgtzY2DzteHh2QqoM9dkoVT5qYBX9AB",
  "key17": "3cbBcsxVL7nGuH3p2fjJDi24qd4Unai9NzoTsoVfsSwwcRdGVwsxCpD7FyzkQdHAzEDsa7rZceWyRy5J77ZVP1JN",
  "key18": "5aiLGMZB4EEgqcGwRtiRs9YBGoDHPAGp9fuq3ZBt5wXcx5TYtCFyqcdaZvfgKtJD63BppeNFSNU4hswpzFBNmhYY",
  "key19": "2WqqGXbwKTXyDBpDhQ4QnR48QW7y24U2ncPNQsBQYyRniZHY94cLPNw7PppVPNbSCNCrQruPU3AwyCiyq65GDEFg",
  "key20": "4y3G4AoL1XgtM89yhiJUeJxDgCRqT88rLKWhPz6deHPdG6FTWRcwBhPJkYMMxtX6uzyRMkR5zDPdwitbVg8G8kiX",
  "key21": "4KBBaExyBpYRGSctCsRw1oNNdaPSdgxzYVQDA1vrrVu6Zv6bt9dbwDhrVa6KeSjU3v3s9QCxFW7B7PxfJojyYrVQ",
  "key22": "o7jmdiXvWCjivGHRzaMceoNfGbpDXKHw28Gb69KXZF7SBdx6sg9b4zbYbkxosydPGQNFAHSK8bcAvRFWyNAr3ef",
  "key23": "2NNFP6EZQ1qT7zEiAZbhBnpfrjDejhWTBn7MBxjpTyLQztrgHa88r3h2JQG4jcdp9Bedwd2EzKK4hxExtRw3Lr9z",
  "key24": "2cWyVHtsBno7eu3AhfeCtTPWSPF39Du7aRZpTwpRmiJuP2YmAwZLRUfwtsTKG49CEJdRYx8NDMpFNr2NEBF1XHR7",
  "key25": "4kWq1xDtM83oh2J4xgNkUecKF3evGrdMCxqoT2kyx6c4c8sWYSK3ZRYDeSfCVTPJPXiku3rnH1cfvvQd8etwgx35",
  "key26": "2f4V3iTChAd9tGsiiVxxSEECN3go2SW7vFs9q5QoA352g5aotKZW4Cp1nPyytqq8GmUBiokJjsSD9HBbD5V5a21P",
  "key27": "2nhFGkU9sMp3w29Mb4tC1gmNGmykFYLiABzEApugHo5XYJDTmv3mvHzT6zLi3mQxynDDDT5kjXT4ecnj77gZRTJz",
  "key28": "472ujp1eK9bGV4XEHWjfe1X9jc5GtQfmpT4noNYXTE5dGCcckbvu4xTifB2HeWo3YGcuTQeNZNeLiwT8Uy2FMBYD",
  "key29": "54BRR9V3JPH9rrhiFDgu4H4jiWEvC5KnkWrF6EhPNf9XNG11VVuSEzGhMn3kftvG8Cr3pzaWNLNa45PbRRKnzWih",
  "key30": "4nyD1LBDTqTjENtUM92gCHK8W6ScgdtcejxKmt52q4V6JchUBNjVuAjWdKadscjv9mxwGCUUSRAybBBwuWzjAv55",
  "key31": "42uDwN7ind3j3ayj7nRvvPBMp3ZFCsgNvYcGZJtUC6gQ9Es21Dk6An4gM76xGVnifnVkLbaP71Vkn2WvkmXDi9gK",
  "key32": "oVKPQH36c7ygs24aBATb7wUZFnRCcU62AjzXFEWXoqCyVWtdiqfLkTyxHVRzrYAGTjvYFxXPo8A2reMAu2MMbUH",
  "key33": "4XxT9gGwuQ5EGsXB3kc3WEBg9UjFP2petRU3NASQmwmDRUGv4qsktSPFQddZwGEHPQhZCio2ydg5P1gnGBNxM9zN",
  "key34": "4Tivf3BUYwiyAQMGoFPd6dXNjBGrFWY5RetrXPEspdcLkopr6MrikvZu8oqSF65e2jsnQuNzTX1d3NUzQeg6Kur1",
  "key35": "29XKbzMfPyPt7RP7LaUT49PCcn81nvWcHDVfh1cgN41zvkNA7b3em2o2U3VAi2sDXgjuX2TP4mTBDQwVHD2RNyGu",
  "key36": "3DNjwiQA8ucUkkmHj3x46RAZw9t3SWPZdUm3dRbH3v8D2XzgiwJCfiHw71D3aRzXmYByFR3saMVT4Az8JXzcLkqX",
  "key37": "3c36Jw8qR49RYoJBCcYrWwvqWqjtnyxpCKeufK4BCYhVRZMXYU7ULnZh6RHTYmdJtjJQALAoAw3neRbuVVuFawcs",
  "key38": "4Vp9Ang2bzoTwFaZi6jMhYW5kzBQwMzNDJAUKNLf1nNTozRJPL8GtCBsNbPonbQm55Zv31eVcadmgSqwJHdq2bEy",
  "key39": "2r4nhEPmBusD6XbVKPkpYL3rjtn433vu1hV4WtXqQmBWkEqhPyVfCuH77CVkJDWyB4V5AVMwF5rPZwaYrMSUxmW8",
  "key40": "23qYtrMikt1KfAuU6p9KqE5dRtRkgw58rym7VpzgLDeqkDmr2DLi7mwR3FN7JDbm9PWgo2HDrCmV1N1fhtiSZpp4",
  "key41": "3ncVh4ixuKEA8y3WXij8yvA5ZAutx3xKSWzbWV1tnwEbtGutbkppe9RB7ZCxdr5TjyvbzrYTae6RGpBvcLZeqKzh",
  "key42": "335Wj6UtXPSxsrEeG2pBrWh6SejDsGHekjB6s6upJnCsfsDkhZY9Wt4nqdSvft8Zrzj2PwQ3wkNYCqafMNQB4xpk",
  "key43": "2uTvBK9GbJRTACUfsgBcbnhGcYPSFHfFJBhRq1MdDrFpPWHAqPGy1WX5cGXHB26Sw4cPdoDMzLfuQheDdSNCrKRG",
  "key44": "5GqtUUSwjKVkGwsFYurhdYDhuVBHhix3JB9D6i5myYTm2aVWx9kLLK8SrN1CB2KqXx5RbD9JCWbVsdbc56c5nNfz",
  "key45": "2MRgwWfULjexX9neY32wNsN3b9Ry83pfK244dkFADegBJd6rz8RkmJTSxSUpTVWxHvBfwwi1KkGnokmQzjdNqG7a"
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
