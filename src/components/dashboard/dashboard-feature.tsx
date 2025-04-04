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
    "chjt1ypBJhyYhhmQNronKViTWsBBt2E5jRpfrbtH6C1E43kpWo3TbQ4xpo2h3JP6td66rH53cH4FLo1hpJ9tDP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LrSqUVe8NYBQcMTJe4PdnytHeazFsZMaNaut31QC8esUZKPiv6avkDNJAjhLjPBvfXAeUC3ADh66HRTCeub9n4z",
  "key1": "58dS42buXbD1w2RvLFqQQ2N5wxYPnPRSLMunsGUQVktNur7E475XiU3r37m8FH9MmLKjHDWDcgC2ESoCCD71b5rv",
  "key2": "8Eg6X9hmPz5p7jP4TBUa6AptipBkj2HBioNddfjwcxefEm8yK6sPDt7C2hxD6nZWr3wbCc5fZ8EDWviizeVwCYg",
  "key3": "49FjzAHwVhamQebJU9PBvRf4h98Pqe3E96bZGqarKjs2v8TjHTxJBKHQNcdBLUkQ6sZAdDMUdczPnCPy1GiPcceu",
  "key4": "4nz7giMitrA6eLSTCANDq96uekyMYvXem71mBDQnzofzfSSi2MaUCLUxHqmkrAibysAcoD5q5KRud9K3m2P6myo4",
  "key5": "RJ3pfR9u34hzat12a3C1emG8dG3vHFrNeQVeEYgzLNKsWX8dGmaznCxVpG3zGCPu6U6Po8UCEb2NnWFRFznYTxF",
  "key6": "2bifMtKHX367od3ykEFYnGUPYVu9QCUh8qJweMRXsVd9FWBzpvRNyE7YMvH4YUDpzCpZoHdrDW7vcYtzBKp3MbA8",
  "key7": "2pzBHMtiiyfg1ocFHu4r3s2rKDWrcyTYEn2g6rodJp7U729mMedSNQKGbLpLriRNoXVxcUfKLsYNJCH6WjaSCrE8",
  "key8": "3DHJB6BeUvVjP9wLEmUPV9ukNCTYrhuKADFFX3zrNzyPt4MS8bDoFdHVAuLLTghgUtpvSY9WswkwhUjMKBcdNWBF",
  "key9": "2Jm8W5fSpt84VgXRRzDhabJKQuZYC86YTVEq74WfmCYCxAU6VzPBJEoYxAmMQmGEThZbme1CUF1eVJH8Dw8MzF8F",
  "key10": "BsJXYAHD5HujQWHzhDGs1hHu9PtosyStvrALNxpJZoNRh48QjhVNxzvzYzArtCSfPNDydWyKoZoJNLbjxE1dyEH",
  "key11": "4D3uziSivfzkiBN1NqMqGHD1BSyNu98P3iseUK57CquaeuEHRR2hat27pK7Gz9JKuJPGUGZiaLzrUsazoaaTZzuF",
  "key12": "G94vhGWmn6Xn7P6SRi9BMjRntcKQphMyQpyyTG9oSa1XURChDQTskd4mgeC8SRQ2PRW1QEzCUz8goBkiSP2dMmP",
  "key13": "5YJsZi4EETmm8WHhJZja4T8HyNcdTydX9aVC8JgBzPWseGMQbTwgdVX298RhujPZQhPGMroSeWziAR9sWWAft8tN",
  "key14": "5aGkjoPZUN5QR2CeYZkbeZX5mCG5jiLHGBsa5LBvchfp72RSZiJ4X1oHy3SDNKYQbb7QTKJqTnnFEXJLumHSWKpU",
  "key15": "4vFqozMMHhKwJvB5AbwXaW2Lwwu3qFYtQtKbWsXfZJosQHf9aBkz6PcdME3gj1BhGnbcZuF4v3sEUyAPH5r7B7DY",
  "key16": "125ZEqpm1hyNC1MaHbGRginEACNX7ynm5JZv4FdenGhaGSbQ8p3mjPk3rNZfRCSdCpBaRpFwa9YfwKpoXBdtkWmq",
  "key17": "2nbF5WxrtWTqJ4DHHhVf1rn8BbiCK71FzSsgm9KkfUNP7kEWPUbJLo5SXhbwNcZK1qYNNWB8ee4JVszLDRqyoRgz",
  "key18": "5k76bGyn6BFzThZfmwhqGCdUqbV1fzbud3ptcQASVoAJ8D5YLxAbT8DYbgJha2Uxbiq5hCwmfxCQ9Hhx7LPmFj9W",
  "key19": "4m6taiFg4eSFSThS2r5WdmD3u3SKXCFoywdsyetkE1Rfet15YVwpkMR9tk8MDgPXDsP18M62uk8ARusCBm29Qhin",
  "key20": "5mSpQBR4CsSpCykHN5G4JSm6YRTHk5sbbsmYegkznuFQdjEHQsXePt7ovLU6fj5hdtstpk5jiogLWuVP1pzFHnGH",
  "key21": "b9dUkeW8HN9bUn6bYJRTS2QXTB4iWHULJdXYFwkQwvouo3MFsYaYvCcpqe8iCqWwZY7WbBDen2efSkzrs5eBo27",
  "key22": "3x6uYuKWz7hU6AYc2ABfCuev3vYyxWtu8FbZsH7fYTm6Vit8FuCQxg5oKvbcgs8gyfp4ZEGhwUPZwYB6FBYyfUmV",
  "key23": "2TQ2w6XaJQu77xoGHdfTLzBzaYbeK7TazRgGA19YE1ZvSm6hS44AVU7Y2Js37c1xz6dQi1FGK1E3zwkPMQqrLMgc",
  "key24": "259SYVMEvqEXNCizJN6AkcDmfn7gqMTQ25DH4d6Tqd1dKhntoh8uhf5AiZTPZvthTKuTHdx4XvriTmhm21bA93dA",
  "key25": "4o7pGNQvUckCYqJ4vAyRaD4mGBsuLV6p3oHo3KkpJBUKYwJ79X6bGERNpw1F3Bz5zsoSQLHJ3uUbrf8VK5fc99ch",
  "key26": "2zYWZn82GQcFz19jWQgyNzR7UzXxGqPrb12yGc5aPrXBFRsdZhJVyHyiMXxZ8AZeAqFwVDZBz1o2iHL6FYWrfm4t",
  "key27": "5tvtzJrFYGeuanN5ooDCMZNFNJAj7kJxPobva8bynyk1kACnyXbVXsHu3Vb1twJCoYESuapRW7QpCDDemi8kjMt1",
  "key28": "54UPztAQpHAHzxKhqhjcutTx7TFEymPZDBxUjwG2YF2FkPKf7MFxQUHH7RYBfoi51TzFcbjb11fS5rnCJjLnaeLe",
  "key29": "xYagHcaQGWLrEdsfdj4MyzzA21nBK4WkjK6SHuo2Bt1C7aUSabFKKMiwJXemEFZqtcxMrR9HFQmGtQHDEsMQLuL",
  "key30": "2i9pDH9SCcG1rKmZJdyv9cgeecaqRstgLTC8Kp9hRX9DkbbceB3nZ2DewEHyKs7RLB92REX9SjjJGSRzPXqpQ9St",
  "key31": "g7TMGiTNzFrnhDfVYFpuvDVox8hSvmcm9z1vvnAEkELh9v7nMcZp9pj7Jfzvetn2xVZ4qPB5qTQTREYGrSNmyEP",
  "key32": "KAquMPAgoRA4pkW8bTHi6ssUkA2dLeCMyQU3JntHMCLE42V8DqvtTRVp4KZA7xHdee5ZLUd2qoqjqE7nzgrQwGC",
  "key33": "NXZtLk34Si176oHpBzuDy4xwCdAxYhmqWKpAvQAiVL2rNqCAfaUTdAyoTZFwFDcdGe8aqXqJEahSjxuxra9T7yN",
  "key34": "2nAhnkj5xvCq6rT2A3eFcfGJpfeNSBgG4AdRk383G9kXoKicA6ePkofBCUpfzWx7xS3BfFxuYmtWKtZvFuUWXqEr",
  "key35": "5wY6ZaDpg1wZ25BVNQd7Eg1TrGc3MG3navNvDzKP8Pm6fPjhABVJPWyyeT8ZLepP9614J82qazF6tjCJtcap56eQ",
  "key36": "2ExRGedPf3W8aAWtykSpC4hwdVN7bTP14iRmu4SDREdeFdVPLy8jhphNJyycMGquKpowyNE8uxTn4NSUTdcrRYKQ",
  "key37": "5rY2jPtpN6Zk9eKHRsz6shHBdvr122nP5T9aVT1kGayAspBowwBmBeHAJboguqhVhj3Gi1Zh7iEu68Aadp9Cechb"
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
