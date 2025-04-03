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
    "1kZawVx7ToLxaVQt1F2bkgg2ApPoJa1o5nGNkD2bxDU9He3xXLKhmt2LNM8wVQscFKWPaNLWKDXZcp8tbjNGaS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q6XWXkvX4RAGAtfUBm1sp2uF4vprEbRiCVKCrFjezfZfHF2z1paTxpwEyqm4bteAFKxenXZCpTut2TeaSq4zcgr",
  "key1": "34UMvKWokpCLyGUzVBunHuWWt5vCQeLjiGtaw1zX8JUup49yCtkQwNuXFUaubmPufoG2w2NKQ2q1fX64fku7sPFv",
  "key2": "2cuWmiwNQbWur9Z1CFQiXW3Viw1S1PU5G4omiQeb89GrBjboyjXBdyvDsoZpC5GTyD6mKKCe8FTDvkC2mqwFF32T",
  "key3": "5Vy1rJqRL2qxJnu1ifrDqQXYjYWNdwVgv8DpSpkNFLgkXNVzH2gCkm8ThhR6mQBJTShU8wfqoL4uV5objbVi7FWH",
  "key4": "56YzYBsdrvKWB6Gb8byQGrnCyEXYBmVv9eJQQnHztLXnUHkywNPwGfMgofLcwMcQTdbZKg4UnXMw4FAbb2VK938x",
  "key5": "7z9RSk6BYXHCRpsBNUrTtGzoftGLnC4es17EGayAHh1w5U5bVeREQh5HTPoNiBU3GQuc93BLUG4mDabnwhUrYjn",
  "key6": "3kiYo8aSnT79eHaUJBVsYbKHiLFc9unv1yVXL8wsehwPFTHtJP3fVoxBgb2MHeDqaJqU1xepvSKL6sS6PUUKMPPQ",
  "key7": "3dAGEBY47UNoJuJPJU1QTQQkC9tZ8us7riQ4x6uLNsiMmmmPMhdXd3arr1iWhgpkgrXpKrejC1Yj3YHFEqZfHSRj",
  "key8": "4Rrq8ZQdVGLKSCMxoFMXRCnCkdxLVdFR1CY99DNjsZE8PBsXnvfDezh54q1N2YPLQX4uNABujMAhaTZGemsf4gT",
  "key9": "2M1Y4kQoC4vSpMzhtaJfZY9Z1zE9id8YEQHfQcaUHsCFsudj5HzTPoGaQbFfdhBvU7FE6gMWkhiZ1tA1x3oorgFp",
  "key10": "2pCg2ZF72eatMGGwVJkcDJTPAHpCATS9bjaW4Vfw7iYom4ECD3r8AQWhxX1897wwJDVFWqW1HUoCpna2aJqacAfD",
  "key11": "2PUGa2FEiuo7PNk4hf4f9ojoJ3WMTtQvH21QG3uei9N3mfbPNXXzFxbzRXV95TQb2AUj7PjuSn47BJ3PbefTZ61P",
  "key12": "5MPGd65gRaGS9uaRPpToNuhJkBcoZcd5J2j7NjwXniS4eGBGcvaE9VR52Ut5ECvvP24GN1mnijcL8JA4PJBVNQ9q",
  "key13": "4mKYyVTVnh3pc5HCneGD4xVmZaRpujARUNRJwGEXRbUbwW5TzHU8ZZGAfYh8Sa1FPJ7CNJ8TskfPpo17jPgoJp8V",
  "key14": "2XevkV5LRgnXa4GVriCRKLi7wmH1Ka2th3MAspNMWNeVGEn2xSJQojoXFAV7sjUgFKz5Nf5MMA8BAJvejiTPyqje",
  "key15": "2ZRiEHon5o7CZTSNor45BNsKdsfa6zFWSt4qWU7f8CgjkertnbLDTvH5EqzBrPLBgBLMLGJuZMMy3Zw9sVDVYCGW",
  "key16": "2fw5XHS3LX1HRVt1FYX4J6tSRL6ohAEsKncX3xHuCnCgM5LQcb3BQX7K9GWtdrt3B9YftpRQwrPyy6QENrFM6quV",
  "key17": "4bEuJx5NgMDddtoWUMCe89qwPEy8gw9pCx8oJGW9X3LXaXxyiLRuFvK9CXiZdWbecTurZYXeWAAMX1rSwAko57y8",
  "key18": "fcB9C4QYLx9av4CmXdgyHD2aTYHuTcU5DjdWs5FgQssgaqD32pSZNQN2CX79mvjUqBmC61wNA51t8VTvHWzjKGW",
  "key19": "4Cw9Zoqcav3iNELugDGysLr4i2EskjbMCZWxSsKh6snZDWabt9tRgvGfqSjQEWnZASavyYz3fsyxGFynriZ95158",
  "key20": "44ic8yeVCDW2V6V354sWDUXogz1NeZoMuYmhYJ6LawwPJuMztfdpziyuekhBa1SoNgKMUeLzW4tcvvzNoMaS7P1H",
  "key21": "2NKyqeZm2P92QSYUAHTYGve8wGhr1v9BWpJj3QyuWHqig9yhVoaqwdX9xD2zDcA7jNK7QKBXT6teoPwh9XBVaDkb",
  "key22": "JVKymv2bPwavpiKaLWDjsjuRDfxNrRKhnQ4orxMyyaTM1CTAGVV8ajRGDXKm8swgesLoEErb6YxpHwo68tdxaLe",
  "key23": "3VqxWdJtHV2Fo71GmDmcr9dKy4sdNYTwLPZU2wmqSwFvZGHs1uRhfc6xMXWXfz63vtnYoWtkmHLTags2xCtsH2FV",
  "key24": "4Bn43bMqotJmpVQXNjDMWK4eSfHyrmqBarf9mG1N41cuEkY3yDs9o7f1rd1RosYUADi2gqAZmiRPKUVEP2VJe8KM",
  "key25": "5tdKwJff1vgXZZBJyY1CZNNwWRpmQVoGszjdnJ8q9GW9hpEtJX18FJ6yM3SV3BcLxVK4eyNquDNESFoLvQnEdrWP"
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
