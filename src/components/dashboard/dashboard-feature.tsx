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
    "4Ciy7x9RapXb4UT4reDkwRDjeLQw3HupNUbtbpbtHkuyAc78yAmWFNmpba13GmEbpiYA7KZ5DyGNRqTnJwzobpxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mDJ86uMrHDAg5jNKvs8KfPTzxskVY3cncALh5HkY3vDQTC4JZeuMnafZ5FvwPEg65gTmbFbHGbshNdKpHyAKksY",
  "key1": "zvBCHuzpD7yozfFfCaNJJ9fi1xWbpsMGgdsze1wN2wVpNKASp5sVmJhEQSSpoKKcrXJgbk8j3pyCUHLvRcZm8Gt",
  "key2": "4CsiirAKiw3C91GihxzAnAEpqVD63M17b64CVxJyFBnGADuokqBD17T2MXhoe1Zgkp5ETsoz4vQ9LcNzhE4MVB24",
  "key3": "F7AjQ3yWEa78QcTsqHcdFe5X9bttNiK2hTgMeFsmkkEthUNypnQQpGBy8ULdWrMgud17tjRPPMKEazPPQc4g4E3",
  "key4": "2H2Q2CpkaTRUggBKfYguC7mnpC3t2Z69fnjrx6spKJUan2W7jFeeehEsZQWSA3TYJWudewLHSAVNUTgkLvX3XvrD",
  "key5": "4qGJcp4kaLWZER5zsbKTFpuKBo8jJ9RYRTStFA369u8zxLQEzoVyPoxV8N3cri7BPYRMpGy1xjbeeP1k4RBL9UBV",
  "key6": "52hAjJLBHWbBT6niJJrGWfP9UaW9TXr5jieUDwEjhJy8VjDzFiKpYMjJ6xYGJJV6TNAQfxmeqkyHfFY1rAz4R8Yg",
  "key7": "sfGJ6hk1uiYFWEWyX1eu2rjJ53iFi5p3FbgBmvqqzdXZ8hFxtbu4SmHGKoW3hBzEu5jD3LJaAT3E7P6rxDbw3Xc",
  "key8": "3LwUnNVsmikrevKjBWQBfEbqrT5wzC1Ssy3d1tMNQN5HnA9XRL8mtDXbptMhKqEV2aWrtpGFDYtTpUvkTKNoLEUh",
  "key9": "3AA38X7DLBpNqMpENwiPRYrvYHm63Bk2ZAD5dTAMgmANaRnhYJ6tBeb2Cjoeptn1x6S87mtyET1AJ2sP5AbkhV5J",
  "key10": "gdT8Y1Jfn4xLzH5mHBtWZz8i9F5BdVwprdrANCE8hUGJ6HHp568bGSig2fYVr7Cdkg1mqq8Jgcbxue3WLSpQwns",
  "key11": "3nLXbNee8ELkMqu4RsMCMDfUTqiaS4oKThzBtBeSaYXaCRH13Spjz1skNhQJZHZ3f33qQC3XQzJxXamFTQizaKcQ",
  "key12": "2m633JPBqtLykFcfNsptQomme9K2w4nogMJi8TddsvJVJVVrdWsEgKMqQYYb2PoTu36ZDajnDtyMmX8suWPGyXeg",
  "key13": "4LvsDLA3hBU4GafssqYRfuQb4Wr6U4Jmj6aYDw2dwGHgoY18y9ZXaQtLZMrPnH93N7rByPLcN4TzvM7FTT3Qkv8j",
  "key14": "3o3wrf7Lbsoe9U8wSoAQsumZdMRzHkfWiJkzP2hvP794u4YFZkkLCxrozRbLnZqd4BWBzoepFGav2moFo3H6TF8P",
  "key15": "58oCeV8FTwo9bFbkiQu51JD5Tv1oajHwSZHMCw4yZQKARGJcYmmpCVrhf2qomMKPJ3trjkX7zkaJCms4SgdVhGhg",
  "key16": "xUAEMbp4LvvwB9GG4b1AWyY6Bh4oZkMWdtCvG8fEkqFutoQ3ooek9JcPdiGhqnaRd8pvgi5y6UMkYqWj4wDvGzj",
  "key17": "2pDdup7hWg2oJDfjwrXDRiRrsTh7qLvJjcwzYES4Ux3tpnXqsUq4yLPMhCMZZYs3LHtLZmN9f9z1w3e66iL3PdBN",
  "key18": "JfEKnqJc2bPuwadJKxttak1ZzUxY7qt6dG2RuHNrj7knpsh2WnRrF4vMzXvvaAZxEo8TP7a1qSCHg17Rx8VZ5Bc",
  "key19": "3Fy4MFKfhGoknhD92PgQrJ1Broac7bvY6Hu7aUmSkjbCQErf2jLNwjkVCjasJURLXGrYyjec2dZ8imF5wvDKhhkQ",
  "key20": "3H5f2X3howkfM831GjhTfsHPmJ3uM81DoSj9hsur11AigNHVVSLmwG4qqnLAGQeC6Twfw1i3JEdiL591BsGPA63w",
  "key21": "VMN9xQCvniJ9M8anYoF9QD8CwHUzYQsXX2KE7N9NDaQR6zvgBoWV9bp8Tb68in4v7VZVTPSMvMbFUiCL1Cyb4Kk",
  "key22": "2ohYF39zTwRmsEQuiD1hnGqGGeSLDaqBk95BZ8WoRx2WDQA9UHHTQFc4bxn9GF5r8hfrSP3BNxB2V3UR8eRsVuCX",
  "key23": "3PhcWZnZJ43cq4RS3DNao4KEKLnNYm7eXeRRvJpgriScJCo2qhn4dVA97VNrbGi1hvn5cxD9sFYZ19oVmsWArsQ",
  "key24": "2dbp62uhoqyeuHRe4SMDde1o3Xm1QnWah8HUzCAW7izTns4Fs5nUf2AQdxLa2oK1Wx1mbHXu9ZkL2oCb8BUyx4pb",
  "key25": "2VgUFY5qYqmNxfAq6ZpH3x4TeX6DVn3aVqK8x7tSEjfFGPDtr6W73fo7UKCZDdGFqSUE7mCDwgjp23eJDHSP78SE",
  "key26": "4XFLLh3Cy9kgk1DYv5V5ArLUaFxa3Eck2cNdaMQ3Uy58zZttrf6hmekNmXxGYFEkm9vDgytGPu4nA2x9A25oTKxR",
  "key27": "4LPFvrwQZCycihNpYUR5R8tCMPaJtgA3FdhyC3ugEBZGVqe9ZkqBmFT9jNv2gLDJHx2tPkiYVb62PGyeH2MoQpLN"
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
