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
    "4jrhrHVNYHkYfBUPKxZQMGVduErY4robMRgn7581X5aw1UkXN911K9Yx9nbr7LTvbyDKiUspbGpxfZFWTittrngr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YaiWJDA1c6TSgoQCd91RLwe3DaRnUXHK7RsacsKmgFTLCJX7fefFX89UAHTgxMPFr6f8bcfkAmnQap4YwyRLBiK",
  "key1": "5qU2dJ3muTnCZpn2tR56voC4MNEBUSM37TgHnPg6kGvRisgzgbZnfJZSArGSo8NohqfqSqHtrgviYC5rr8axkGYq",
  "key2": "2ihJCSfgFV8fuGf7Z8kaziViGtoUKgxYzep29E24QbrbjFSu9BtB8MRxGtX4iTBubecEMmTjgtrHnQqyDiTHVFwb",
  "key3": "2XvhaGebr2zRrdNuto8NExEWviQy9CJ9yCcjVLav5fM968nic67YgwtwvmN74t8BqNnDWbD6dwqGPFgAZXtaYFnN",
  "key4": "259z8sK4981QLg3QV8CbpUN2sc6pupsF9YtV9HY9TtLCWUzKcKtfvV4rFxtD4NZkh2ZYd9SW9ih27WLZbgRVFLXx",
  "key5": "TRkdbfBKx1Xg61MktDu21UM38yV9SxeP1gwaEZAfzCA4uT3LUxcRv5EXyxzrcRt6AL7mZ1zCZKGuR5JBBoKQa6i",
  "key6": "24VVY1pU86ntmNaQjmbBpKt8CqHHFms1cLUDu6eLZz55H6wtefvHL11jmKkN7K59eeY1svkgZzsrVatD2RGYMBaK",
  "key7": "5miSirxBKjPRYN5MQGo2sW3G1pEVTrahadxzjnrBUjKguynoyM5eppt2XA9GbHjq3JWbo9msFoTkkracKD7d8GG1",
  "key8": "2KHZmpkE4wFn8FhDr5P9YziTa74YwURQwQrNhaR25NcvKAESiNHeXKnpaMMFnZCoYC5jw7YNw3HdkHia1kX2pQty",
  "key9": "4ZHBz2KgBTmfYM3hsKAdTHKQm5HdsrV2QhgR4gWybsJcjVxQqTSoEtgx4QuXttUtFGQCUrBBtKqu3qtZW9Mt7wD6",
  "key10": "GqN9PCh9teavV4mQBKrLW1eugmZoo1cSUces7moria4R3BKo8Fr8z1RuzFMwt4vshvBRzmYXAyNBQ19ykMCYKYo",
  "key11": "2M5GEveyCVm2rKFjyU4csWHD4XhzGMC3M2is3XqMu94eXhSq8JqtczFnubyXiy7f7CyE9tp7KErqPJ8F9PH3URE1",
  "key12": "51ARj7FNZBnHoTu7WtoxjBgRBQGzfHsEwupjPpL8HeKn3pQRLhvxYsuFbLNuXDRiZ4a3taj8nNXae4BcDUBiiZGz",
  "key13": "4BxNmUQyrAy4gfs5QqwhUwosQ22odDGnniAeGm8NZY5v5U2TsPCZV7q7BRZy8eRvPaPVYJco65QP41wavUgJ3ssA",
  "key14": "2YMuNKHJ3m8MNaR1V7gnRp8LC22uyMVg5WLmJCTRWgTyBn1sYPf3g63TsBcGnugBn1UPQGSHH2dLyVvzcDyDVsMb",
  "key15": "2dnHwudXNebPBSLNPXor14vG8hKoDD6zpHeB27cdYn3c7Fn34JcmDbUa39jN1ym42mvvgV7bRTRt2KqfD2SHVNuo",
  "key16": "24bfK6aih7BeJDDhJwyV5Xj79u55Vc5Xkki6GSGQWAEwL1zRgp9FX6Sshr1oLiH8tEhptXX1XrALmE8QGM4HDp5g",
  "key17": "2hu2pVv94qor9cvSdHBwu5ADwsP8KKUFBY3HiimZHqFaDpAhhRGaV7uYCQydg91WJ9NTQVE3kKCL5bZHcR7nesqU",
  "key18": "3E3qgx6vrtHf37USuQ3BF1yj9pgKT1yjectZHmuTLbHUgH7Vz4sNFPi5u4NYutNTysZm131yd5QKbKVwbq4Qq7sH",
  "key19": "3dXKEFy3UxXjYTKTKXnh3vFVkaLuK1XAwybRkd857EHj66Vz7XjUuHPaxbQD6L322vqru4pqKBhha5Qa9rq2SCj2",
  "key20": "5aeHqPbT5Zs3h5zApRBrgK6vwqTfkbnzQtyuy7no1o3WmQQBUzSdfyaDfA5nwEoLNPaCa3xtzYrYm1HS9LEoin5N",
  "key21": "t78XK3hdeMhqQvAJb74HNkVN7iaWG6tAWw2XHR9Ma25wTeXtu1t1eKHNiHBnF9towqAcvVk8N1tnwcSecgHn2cA",
  "key22": "4M9nAsGCx38dPiuYMAhPYbd6HLR1ZsYCFbMaNrgUhTj8pygJwgSkkDx6ivTbUV4gtEPQu4JmeEES8ioCyXguE1aj",
  "key23": "5BTKGxrJzWjkf42WtvYmtUUvZakwCXe3AaARu5xsuLvkYzt9gAEYyVQST41vd2dPKrfRSXMtBDcT5Th1tkVL8Lhf",
  "key24": "1vR4bazgdDSuRtgdEYMypUG88svn8d9L6X2J1eg56cuHU76sMpB5Td6cZKkbut5f53bepYHVyoZa7mPVGWGy433",
  "key25": "4LUMV8PoqoV3hJE56xWVYPCR2sQBdGvS6rFprCMLh9oEogEVhScXiDTVyVhQq93zuEi6Fa4amrCTmd2MqvqGaNwy",
  "key26": "5nnAFWStu65RiuVuewy4Ex6hWLHbAGyNAxipu7Q2cNXTpQ5gJwxP9X1Xrmzj5FEvGYTSBJptGPZJuLrZ4nnrv6mT",
  "key27": "DMGPtK1SX9A9A2qwd3UnEnZmrzgTmky14wifwCXD87SxC9nFCpdZCHEfbnqjUzaTeBWRu8ebxcnUK9dW9D88fVz",
  "key28": "2YntTZWua99CdDW8SKAxgECYPDnFDCz69KYPEBHebzJSaP4YhSD1Jp3mJ66yMXYiSNNc9DCYwpQVc7XkGvQL8Bvj",
  "key29": "Jtz5Tc3eHBwPbzuq964qw4WTNxPU7dAj5wnBPePdSp2EthaYER1WJfUhSuYTMVn47YMpi1uh1yNm8LTgnHkHXFp",
  "key30": "pBguA8PEygqY2pFgi2gjss217b55YFza2n62eRV4m1cjMizJ6ALBCxAD6ijWXmZBfKjBPDvr8W1Mfdbx1aQLNMD",
  "key31": "2QBaygyE5FUyYdMGsJjQ9WYjNyBJ4p8dF3QUV1jKkH1P1VRu8i8ZZUQLgguktcAQ2ryYBRnapB7ymh8z5dsSP8o3",
  "key32": "GMprkKTLFHBjfwohc2bsw6y1UDh3rWm3JvqkLmMraBnimJVBbgHGLxnBv2FEhZfCrD46ZMTTbgjwvRtUPggk3ND"
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
