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
    "5f7TSRRxaQz1Bfn8G7KmDKHgfjR7tHqzapv38rnQ9hcRpYUrJRDQJvQCJ9gHKDE796tG5E9BM1Eyp1bYmTxbadw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ah5uZ1B9mFXNbKf5mHTVCv647P5mXwtWPsqagqRsshCwtfFa9s1uMu1S6hw56r3awbguNfxB2kWLY6GRa1M66EW",
  "key1": "JNbCLKsbx42ECX7kQDMyhPv8mFBrZ3byDcyUb9GZZJ3PP14KSbGM3oqxA9DkoBMWD61LdoWGwgAeHWuAYGLpmEU",
  "key2": "4a1JeNsTp5qmaYfbrke8ZBmt4aNj3QZYKU7qtYhgMfmcD38pt7ZNnQp5ekhRVWumLUQpSFLRQ1UTRnwtcwMUCvMj",
  "key3": "3zezj3ksCHqKv7sDvjthgeqKWoakQgphdYca9PWhD2h6mXMhor8oPJZqv8qHkmkw4nCT7TRrmmCiVDF7DKksFnbj",
  "key4": "2sqLkTWo2Xc8uummppiynTtDPtCQMxALYyfa1SVC2677WDVAUHQ2qkdFx5jXZekgdXTzq6782A2nxJp9rRCGPjFL",
  "key5": "2yNBfpHkSPjXK7J833yhxKdootwWb4wsAnH212MR8ue2WM3GGzSAapxxeTMzPCeu25mULvUQXDqWk6NLj86brMaJ",
  "key6": "4FWPPD7yMivR9axwfCY5RLGekTFgzD318RLz2dUaLsPMAC8p33eWnMypU8zHp1NioZTEkxdFtiT4J8s9HC2NpPod",
  "key7": "2F9s8JZrms6Gcp2Si8g5BqHiSpZYQ4GYenqk8DJf6XwvTqJhwsyA5pLUzAdMTv5pRK8eVE3QdJPBZX3seiTD3uWr",
  "key8": "61CyjLtJfJAqicqzV7FQErvh16aNvFEXahPSnG8PAyDxGd3RBMTzz3BmLc2XcBxLbbdc5PCNPdUZCCnFUrFJJWRQ",
  "key9": "7ywaKmgXh79R3gLA4d8dMMXCLhuxRut3zHzysTo5a4RxXaYKJfZSMMK3Dcx4grpRMQVZW9J39ouvj4oqrayEKwq",
  "key10": "2Dv29sYuDvniZaR7NP4sDYxxLrPEEAhSCpA1ij8rc5MwSNkBpkVvrYA7wfzKL3KztJ5zC7tnaRS6aPyyYQ1zxBCN",
  "key11": "46ukDshqJvJ9afEDGHTk9oVDjxQ2z2u1inTgJLDor764Nfho13PYv4ZNqtrVquMCuNVtWtLHwCUMiDRwx96En7zt",
  "key12": "4a5KoH6woRf8um1NmGq8d829jArNj9mNp2D2G3AZogRJwdkboFzG8W1ZqZy8Ei52txKEZYtxeBTPpuquqH76rQ4R",
  "key13": "4GS33hub3QFXD1va7jYU3s88jQCnYyQL2LVNb2EUXMrgaMaPEmXfVJgVs248g1faG4aFk7bJ9yUPCipLSYkheTdY",
  "key14": "5HEM5DpqwnW4AfGRYdZs8cLTKgk2wSrL5BuSnNQhLVmNgYxdao4Vx5qQvZAoFRv6vmsbLpFPkSuNpLKXqW8ZNr8e",
  "key15": "3w86TbGbjoC3ZtpBK8ARjzt2xaD9F3DUv2P7BjskCLVZWxuiaJRph1T2dbEUouBEQVkfx4kQESTTXT6hAx9dUkEN",
  "key16": "61nFFCCExNZZQiciFAyFMcyjLf33z167oXwKbVdmFym45GYdb8yce32tdvx55SeVQ3bMaXNdaojqw4CQr3Zq8UdW",
  "key17": "H2h2VySKZZkK9B3AydzH7MYDQ9N6RK9zf8YiPjLuv2pZ6dmViSDrtbyMJpiPSFgN2qHprYKRVSVPbWoqEWwE1mo",
  "key18": "4VjHNS3tanKrLnJNW7dBdJn3na9mo8LucAKyujokUkLoUSPCy1nyBZFA7tvMKEZUSaSaPL2pCuKUnRjt5YH2cKdq",
  "key19": "5K1DYCWMUoEa3svDxRiyL57pao1J9BDTWStyBBP3KbHRT5VhCXVuvEgRscwikf32Rbz4vaTw54Di9Sy832pNRkNQ",
  "key20": "89bfJ1jmdBf3fg8XCJJVmxkhkKs7naJgLq5KoddgctWdk3Ycj6pZEkJr4ZCen4QFbh5LRVBRNZRpb4uxEsj5Bfh",
  "key21": "4vTFHR4MbLQzBB4HbxkPsL7MZkrTXpKLSTJnSExsD6WCBNzVJJZeQea5zyUkcV89j1Kmxoq5H2tu5b1AAwpQsuC5",
  "key22": "Xs4NiDr2iYvcBg48kF37qxpxgNdDyeuosLhmw85EsyjzBfAnNbG1dPRQCtweUHDGB7pa5riJB6wHUyFb7xpvXNL",
  "key23": "dP8QYVNC3K7aUzYdriEKj5y4T5FfjTxbBgyu9xtSCDfxfD5RX5QTcXo8LhoZ67s6YHu8ZFNbwJ7rAvVJsJknbVb",
  "key24": "292KefVSGYyUg5DXTYSBrAHNPGFz1FfaxuvqESPZxAcUKATLtT1WoT8vvmyLGoUo9bY48qWxSKj2qZk3kNhqYoDq",
  "key25": "3kqAHe2WxGUt14JxwZDwBLnwJ7izuirFBoisg2QX5GJhmQUESCWUjpVrzHqZdUFZKM6B5J2CCg9SPTQYoyDpikqg",
  "key26": "4wYn6Y18rqvwyS54zznCFak4hoX95zCeLZAy27Qiz6p8QnL5kjhqCve1kZmHB6qKs5DGnZeWsQbcYesX2WwxPrFA",
  "key27": "S71QHcsRbLVwFMEdZHEoZHG244zQXvbkQuDTAUjY9q9eiimSACcKFZU2WzhV9QVfvPckWnQNvuMmxdQ1K1DKgfK",
  "key28": "2ZSchYU9HqjTwbmtuN3ge9WoNAW6P2ySCTo98tYVHj22fcXm8bXMDMXQzWGEHiPcPcpBL79zkpF93ibKfzLrWHEP",
  "key29": "ihscnByGcbpJpCeQjnVTEsuPJDh22Xz1QSGvmJNLR9o2gxDQLjDbwi6stwwfViR9MEtKMhSLYLvDB7YPEaJGD6M",
  "key30": "18MUYS9LiDuwVL1Pn2Vp2uJqtmh5PcJ9b1z9w6PpfyBoEvnbY7qWc5JwdGt9DyhHU2diD77PbyBejQP4TSdHgwk",
  "key31": "BuYmfHanSZnEsNqkBgScoPiZcSx2HZAnkaexRREzmV6mHTM9WXAhAPxaJKKm3dVXVMSTtXYbr5kYRYMhFEtRawB",
  "key32": "4yC8X3Ab6aVKCQLieYe1seALrHSF7ZHTi3ujp2wrHDwpBrcwctsUcTevTQZ7roDNuAaHxV8qt3Kh4ZSxNu4Jv7j7",
  "key33": "3JauXFZT2BeTZ5aN9WpHdewLQgdHsdSHM5ZhLSNxsxb7XT876wFDp5E32zGNdfA1egaEeMZDZFzGpcv5DPMaYCMv"
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
