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
    "52YdyXwtMxMyNkm8SKvYq9KK7hmZ9iWCVARsyBXznrd2wekRPi4UsdUVXqTeiqQJs6eHbGtLEVPhetYZsxqDE7ZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49psVXBvBAAXA2Ek9zBCsYbEMJDaDkxUPaeT86Tz8JBR6bJyT2S9kSyvH6MFbaWzjpsvYFi1JKnfpVBPGMAPruFW",
  "key1": "3uANAwhWzy7RXYC1envLFuCq6vvBZv1AiBXnuoCWvAziV9HfcpGbWbb4SC2x1zEKJd5s2Tn8jyyYP9q3vPBBoo7s",
  "key2": "f8niuLNfpTyFsbq9QWnuy2ifuVEsVoTiA8xRgLzoMmymfuAEzDTwGgCVYGVp8tsJ56AqemLDCwfBJGoDZp1TYCt",
  "key3": "3ZmpkmGHVK9qPJGWQZBiTW8Zy6zW8yH1LZ583Jqgx3Eq5KSb6Jdnsz8d1BvR8VACMLLyT73zKRFSzvXiRRgEVxKr",
  "key4": "4sj4vTAvtSTpSbRA1TYLfrX5W1mf85BxA7PUd1qkzUxpNmDzGj4cWWZpQXmPbYHRXtQvnCe5AtYr2D44oWMK6NvT",
  "key5": "iritLCZz3a5gqLmXAAZbCfKDSg25JvwA5rRTsvKckrnzrkoUFz4tmPbQyCK7pMthA2N7i5XR1PzKenAZKiMfPdv",
  "key6": "PYWDnKutwBUN4wbxrw11raUWstDQbvrTdBtEuXjZGfG3Re7q9sxXnanbTqSS1F2v99Ujrh2EXRZP8QsST8gGLua",
  "key7": "3yf97p6TzL6cAUCXgWgaXMQVPfD5ikUdGyMj1c3sGSrjQzKtHho8MGkQC3wyhfaDnKEzTRq4yXGX3aFHHmCWFvkm",
  "key8": "5ZV9ezhNkgy71ssEk6EzxAC2KMhgGnnp1ngVvq27QRsi16CiRpM9dPwR5aE7CV45QvKzKR8ojnL6ka1Y5p8daDqE",
  "key9": "5cEtPAKNTdWXPJZmb3ExxEi58i6yvia4kxEbuAThEYJPPbx9F631ZCqBYa7bcMPngcUkdx6EHDs2RsrG2X3eET7K",
  "key10": "62mAprCCUf8bU8NCjMF8nh7DyRA14uEdbmVtQG1WBjFgvGmuMLnRrgo9YSPkUQvew2A6QchR8CGejw6th2r4yUs1",
  "key11": "PNtPdtaX3gggFTw8cyynjaQpSnSYe5KEGU7PnxDmumHVyynt3Zn6uyeKPUBfK5KcHUQnELvox7fudo8Pty85RFP",
  "key12": "3StxnnTww7VkaGuPYx4nMsY72XVXbozxx54dFR6vgsoA2ZuFaW3ReGReWejQDTGisb9XbjSq1v8uSx4FVuGkgdS1",
  "key13": "2btDGYKvsPMXfrdz7q1Ugkk5qQ2TjKC8bmJFMBhA5YtrfRpkt2UtDKSRm99g1AgP68vohp68cQycpEXEPt3pLtXk",
  "key14": "gZo9uGtWH8PeqKVRxoQ8WU8EG9x3S2acythnVdfoj1N9PjGkSxzKZJnSXXWAqFeTTgNpeLznfeUQapYTp4nsWJi",
  "key15": "5pNdPzoqhUYaB89dQabUHk6PKZixkQYD8ZAUcc9XH3ChnHhfjmujrAC9QoFc1Nn75hRs1E7abKsj9m6ZarbFRVSp",
  "key16": "3WhmT8PVAV63TqF4iDTe35cNjSpypydwGFF2sxW88qoJukDMosjUrPasGyfNcRFfBW3GiQ6K9sNUena8jL1rE8KJ",
  "key17": "5SPdyy4f9WW2mtVAttu2SCyaYudqptyY8iRceBwwQmRoawoQwLYC72L7xDptaLvqcpbnjMZd1Z18oBQTTCJZ7xAR",
  "key18": "3vtA867ny56FTHQZuZmMGVf8GFRKCdFL3APrkj7K87pGinf5ozTtfLqDpLUZRTZ9z3aX4SjKUnrzXtMEf7ERytLM",
  "key19": "5DXjfh5y4AVvc1zS7zE389w3yf7RGguxkvhapXRjUuZ8X4NYjFhDSTCM4T3hv39FEKMf4jj99QTyMPwBpeqKYeJs",
  "key20": "53WQZPgoctg7QBfTvYRQ7r1n8Z3Ak1ZcHAq73rix3CSWYfm5PnoW77UTvbP5gUuNRnQGVh3KXUJUsFCxyFg9yHAY",
  "key21": "EF74RRbF2LQQG4uhs5SCoAC6HuQMbFksV5A979EvwkgBjLujb2F1ddj5BBBdYNaDmYve2Xxwbkx9tU9iX1NUukR",
  "key22": "ErWM4vmwQRBzwTcEmiCwNi9mzPvhKW2FdSuiogMn4VhdTFNr6N4kaLg8fnuRNmXTkVT7vYd133Ke4erLUWhjgDv",
  "key23": "4qGs1r2Q7bpWDaXB9182GBPBcuSzYwyi3scKmsv2YRRrfFPpfvmmU1edsf9h1sbiB8Fip1ewBmHPA8CZbt12YDFd",
  "key24": "2MGRLPnPBnLEmpheqYzXNMEX6RUL9VM1cR8J8we3HBgBV3xRwNb74gUrvE8Y2M33juxEe21EQwBdUW3sJXESHhBo",
  "key25": "3ysMDeoRKAojhx2yLMMaDPxv14J2xXQafvyydoP4bZQw7X9T4D5obU1hXPexvJoudKZgoqBckGgTaxiNY9RTegw9",
  "key26": "5njZBXKhYF1mYGWiCJ157mwoiqLRiYo66pTobzGe1g2bMUHt3xFop8Pt35t9SGThNAHvHPS1kyZbpoDHd3iE5hdC",
  "key27": "TrmrF6zVZtqegg3w2LcjPbGnMC27yW23cKEK1ED8daogrGTvEKwBDFUxLCyuvjwkAYMKdhgdvusc62DxGL8tFwB",
  "key28": "5PNK4G5Zp25a8RwabrpMPUU2hazBzuiSC3231QitXyU6ycPzSmkhJB5vb1cA6gD7xWxRmYb4tD9YrQPtGRBjrNiE",
  "key29": "3Uv41d2iUmD3wisKKNG6b912sYbini8hc1ddGqoCkGvtweR84xLYyg55Qn9wgqEVXZ4iM1U2sSjxQ3duu133guMn",
  "key30": "24tSEeddduEfkMZMnZoq74C7mTmZQjotaN5NLDBtmG4HsegRAFRB5ngeYR88MxRp989xKJxMikX4V4iEWWSzjfoh",
  "key31": "2tfJTwfriLNHJJcfEij5HGdrYEk3WNX5F2VqNNVZSFZYyU26bN4UeR3U6kwiNJQGKf8pA7zxmTTi6xhRW6SkXA51",
  "key32": "38NbyZFvTiqJDSu29c4YspeWtGzN4PpcwMj8MbZUX1TuK2XXSuC5b88YE31Sfan2SCKS4B5AD5vKDEHNBv6unNZE",
  "key33": "65YZZ4FJWN8cotVhJo3dTz6EyXDPMUYJUYLcvqR6bdVBSeX7TDn1i27NwdzAj8tpuRefG91zvk6E6xuDDH9bB9Za",
  "key34": "5yynWf8DCHPexEDyKgUiDTn26iUhZmURGzp3GWHquYbGwgoaik2AX5AtXJodUe2ej7NmskhZtF5qKX7zgCeWsd9q",
  "key35": "4D9ciPCQoWCAJmMvEjQtSkY1JtTTbzquanxhxWTkCfGsd5iWVNy6tewfuf2oRFr45nEjfjc6nzjLGt3QwRncyDjY",
  "key36": "f2uQBm5ZAUMrXFijRu2qinFm8jHBp1npZRGSeWzyotQXG6YhN7u6bgmLC7mM1Mydf9uEhqdgRCj14F8S7326jf8",
  "key37": "3DNPEkJ5HWrztWMXtY7t16uVwwgzE8fqEFWpP7cXjV6oJuFBi2NQXM8HpDx4yVNa7UGkuuiB8BBqEY2JQCLMip18",
  "key38": "fMDC8f7n9QApFkkNpUECHqkA1dGE2tJF8pwTB7BP37foPTPDw2SL69ep1oVnkDUfiZEq5gcQP7k2Z5EW74qWtpY",
  "key39": "5rdhNT2aJdnoSVPztAn3nxH2wj1d2xx2DjWV8RHTKR5gNto4fGv569yuB96A5Ax565K2CFCb8kUNLuVA3FnnP18k"
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
