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
    "4YYGngK6sAhRUP9663uuYSwPq55ozEAYki9MejogwVxLQLVesswhT5uaCYynDVU8gihXyMKfY3Rktzv6BKwAn1Pj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YiaiS9KPAZTbrG4Z7YBefpSL4dw6o5fUipn2tSFwJnjpwaqtp4zjdh1dEH9E3nVaFfhejV1jhtMksikC79Brnsb",
  "key1": "2Ci7JiKCpxgcpZ8cpdz1XceofGFWZTBWE3MK1fs26BK5z8cTqBC4FLkBe73sP4YPnU8CNN2dTzXrhEQsPNJYUBBJ",
  "key2": "2WNvCUrZbdauh6c35jJV2x4bFBRA7cDKta6NMK5e8URuzN8qQxVs7NBQcwQkeKocBkaiiQTCuqPGB5w3PZcKoCE",
  "key3": "3KKsKQBJRZ1D2Fvkj3uuoD7PHQm3DaCFGcefGssrFrE5nJH5rDoGfFqvdFSD9J5HdHgygQvizQ7XyAkLZdCoKrPy",
  "key4": "R7Nodk5QMKxqczmZqgbLAj56ofjWAhMHKCsaQ6D2KdJ9ky8ugaN1EBZUbFt9xHqp1vus1YmgKy34XM3nwnofT3g",
  "key5": "3BymRejaB9pTvmBnqN8bjjYS5dNwgSi4646HK7P83Xz4mKyeyTALdCQQSaEeAAqUAR78yVsEShThikoXgYDc9Vtv",
  "key6": "4pugFXFFFYd3qxVukWLYDDyyBSDutiUk7dDVg9E2eVhNogz4FCs4W3dJc85FKpUKWJsJdjVPfn3JX5wCZyfdeLhK",
  "key7": "3sT6f9gXpCTcL5p32zkja9AZ9WccojJQf4WWotaWs8NCjKeNSEB1Dt15ycZyjz6yNQ5YYEb3VV3Sov6f5ZNZKPWR",
  "key8": "2MqsDiNapGv2VmvNQC9DQqHBsiizUNDUWQuiBsXxmsGcqRrCpUcxpLSwBA5iv2wHEvVTfYomuKp2owJdbJWs8Whu",
  "key9": "2RfftoCY8874mBFtD21n2FEnRivBzPguy8nGLRvkqb4fVYzMfAdPsjaAGVHTMUjDSTEKo6Cv1s57CrRhNjrgG4vK",
  "key10": "4M7LeQkP1ZxnP3Tk7BzsAt4eoDVFmmmyNd8uH6U8pkVpjtbWAuwCuXSsXH2ZCmHmZCGSXMddowKsXg5Lneh1SMq9",
  "key11": "HzbZgg9GGDC3wW4sDMPUhQMN2k4TNsXjFHoLFG15YdYD635RJTSDJJbnLTtRMdLmpzAqTovAaikv27h5Y3Qna8x",
  "key12": "TDxZ6sJmyU4j9dfW87ZqPteAJ71ihP7TRPS8xJ9kRjo5GTkafWADNWndKZgpceWLc963kD3aHm8Hhfci23iyX4v",
  "key13": "2S1879SyC3C6KtfaGeMehKhWDDkRt2pifzBLdFWGEcojDCinVJ1pgTrFbeLksfM1qL1MLtSXQzB56TXcoCPDSkmz",
  "key14": "2M8yKbrvTkLCC5Lum5WZf1ihXKd91aMNJSuzqK4VgUZHD7D8GCqy5DgnWriMsTBDS4aFEqVwqvJNK9gi4dLC6uph",
  "key15": "5J17kWGHLXXXyTANrgtck9NrDUnSz6q3yoNof3fGYK3gLBA6EAm87coeYBMtSN1p5ngLuNmNkakMeuT5PTdqUViY",
  "key16": "5rwovfsqfVtTcUeyz92LaEcreWtbohYtxUqPK6yKZHxznr6hqvzN1bM2XXapAULigwdg4qwi4hvdQcif1VHaQV5C",
  "key17": "4DD3efE8z2AuBk8V196bUuv4Lqz5iSW2exMGLNK5vPJVAsF512gvpB2Yq8npB1MUnYruoM3MRrGeCmfrweqxzCEZ",
  "key18": "2aGDLTjVvHiTyarT5Ahr1bChgbYt5YnyvNiUH2SYP9oPZsahG6vUu8ikkrEYydtkoc6migoCaqq64hZRoab6cNkE",
  "key19": "2nMKfi884vZLzzGMsgfJqTU81BC3ug1BwitnvH3wVoQPfabUUti3sVj99U1MDkDhi7hZYuXJCC4C2yQJYQdvBYZu",
  "key20": "8VEhBJ9Lue9a8o7bUUTxgiBztJLCYFCwbPtVUzEcWkHDoLH9knyxwuY6FW5g3nvKqEdqeYBjnxYCi7SYZGjjUQy",
  "key21": "2XZYjwmxvwJ14UQN41i8DTcae93ydkLYX4c1bbTjhMZZTiZo6SoqaDa48bVSM8eMJS9d4JW31z9LhzyCYT2Gm51J",
  "key22": "3fuX69jcDDwpR66D61mLZn2cuYEtHPr3HrNpfjatnHQBarxdF5KyGeGbvu4Wqt6RLCzYjRg1pv2z6rDkywVjkwW2",
  "key23": "5z6D5QXHCEjkq7mjQ55yDELT9j2URCSkhRJ3ia9FPUMApVhJDEpVwhZRHhAN98512MBzdMnFZuf3cVtFpUsDXLDr",
  "key24": "2NhZQ7Y1ssJVjgQLkpkDU6CUjBDSvcCbLSNtgdQ98tBJSYWnFBiZi1pFKNtusY4KRsDPen7ytqXqB3soVGMSReXa",
  "key25": "43ZmJVsFC25KU7w4oW1eGyAgyg8M2CRs5ReinHoiJXhzkc2KZYoWBG62zeiHSKpF2QwLiXdGKL2iMwfgzLkeMfG8",
  "key26": "XjD8sKRDMHDWvYDoQfFWXSs2Y2nB5Vfwy14o2CWDMQPELx8bU2SzDv8jNtvPdQhtY7QXnzw1BN8YXpZiVuHoXNk",
  "key27": "53LCS4GEdmeYKyptsK1aDraynaBo3vS8WPn1MrLAVnyQ9opPMmoyHVeM2n71w6eFgmwq5AfbSpk2FecEB1oQoZWd",
  "key28": "3wtcg5Vc1Kt1L8W75XHLCoyJSenmSv4EsomX7kde8jHKeB586ME7iEg35BZ4UpvhRqpNAUgFq3WTWtrZjCbWYVpT",
  "key29": "5FHiYuLUr5MjwTEqZdvJrTM4mMJns1NEavbAyqygSGpDjF8hBDmwEezuqTqt82W74fFoRHVUQf3kE2uaNGE9SvYg",
  "key30": "2skuXJWa8upRFQ2Lm45K658oUnG2jTFJ9F2Yd9TZGAA4NTk3oYHQXtpoZUtXkmjn38dTw8khJSyDURJNkhfw1LGV",
  "key31": "DREDvL5dFzc2fqj7R3NRpbfEvVnbtFM7R2jZ5dJJwcgutZQbEP7ive9YUUiHSLZq67RbdZsG67ZmXs3FAjfk4NJ",
  "key32": "3LFHcdW4jJ78rxfDoSMJasZDM4WNGPqAtQk52zSCrV3n3e1J2cLbq9XuTMm9m3uh4oqJbSVn4V9Kx8kcFwyCqVEZ",
  "key33": "44T2Kx7dffSq6m7ipuAduufJwCnY3Z9S59LMWT4aaFsWYyCmqjTiHK3orxnqzytSdxjnwC6N8AdZ6sbUNo8scmWN"
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
