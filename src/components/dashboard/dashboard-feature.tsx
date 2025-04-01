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
    "yTiYF9LT6BZeWyJ2uPyyMkTzWr2wdLCs22FzmKd38fmZdmPHxbwTjE8MaKatMiizEdn18De1WY73Mta7regoYjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fs3zCJ9P1PtFnrmdRd8KHogxfVXU5sHNxc5pwd1WSYf3ScvCGdvr4cGMwnuPi6hPyhtB5V9qh8i2dbxvQZ8s577",
  "key1": "2HVggZAaMppaTC2Nw6Stu5GCBTb8Uv5bjCFzFNWLPuC2CuXamPuVE7b8HLJDS5S7KZw6s849yzQZWA5y3uqiAZa3",
  "key2": "2oWg55Y6h8hvxPsffUyefcWPZQ3K89vTof6qFHDBUccEsnG32tQc8B6FrtwTC8HhPKS2pgNCxgJZVvtwp5FbRLS7",
  "key3": "2HkQgi7e76zMEVUDHPxcNo6AqJKqKb7XjF4wv9Hc26Sr9Mt7KoxLZmj1NqPuVfyNAfC7HmWmUYuF3ZNbfR1THivm",
  "key4": "4uPzZfYNH71Qn8pZQdD2W5KhEoQ2kTpzV7G3Z58poddP3a4vtifoENrs4ggN9t9GB1Fxah4t94BCJ1ziaLuzpjW8",
  "key5": "gn19tt5s84QVtCNeCGaEX3cgLMaNXKJigMc3qLSKAeTW3LCTLBNFVr85FVU61bM1Wy5YgEaHNtNZp4znqr3MKoC",
  "key6": "2h8juEmwGPZLHBumEG6uLKZDu3x8u27Bej6vnK1Gwn5CS72ciuqAVpXmvWeBZdWm6MNBWcbLUPURaoyphQr17WAT",
  "key7": "6145kxgbXwmoFaQjjyrNeaKyKhDPLzadGtrHPqT2qZky53HCyzFfPFMKyWfgB8LCEw1QuCG8Lj523F9vSRvTjwrZ",
  "key8": "aE3c7akLfJDVaMQtcjdx5c11wzSbJvYFPLmdtyaZDXPfwrt1yvAC3Qs5SXMgKDhfp9PeN5gJ1hAotBZZUMEv5Pt",
  "key9": "4Pufq3qQNN3tSQf4bzLoFjiajc1kAn3MvyWWXpzbJVjJhCawAAVW3nMPQv8mLDDyAPLrpWND9XfKN7UJPqRHuD6F",
  "key10": "CGFopCZgnqK4c5hwsG1jEp7xkihtQryyEobNsYttHVV4eBEjey6ddzdAPiQcvwQ4Z2KnvdoLoX4rjKe9DnjauBE",
  "key11": "3cZx7eivaEvaja5YwFu2owXhc9gq9kcXn5Y1xAKRiweteoVWmy2ySb4iycgTyu8TJwzpoMrzVXxN6GRubHNUV2fX",
  "key12": "GcgnGgkFXGmi46DThMvnUR81sGnmBP8PvorJZfEU4hxJaP4i4Q9NPH72jwu2m3qn3aKfmv51GBrRoZ5fxKCzZJd",
  "key13": "SAM64AqFd145iyjoSCaM3zyW97QqMiCZG54waWE1DPHhWmq2ACcMjYt2D9r3zBRU4EtYKDbrUAjQSwS2tBrZTtU",
  "key14": "Sj3Fa4mzfBHCBtQadr3S6Ntq1SqTVc3jDiU2Fp2Ld9uskaxnKacoBUZhjHj2wDF7MSiG27WVqVxTt7WpKYiUj75",
  "key15": "cqhUZnkurduHfKcHetHH7cqWkkvevih6rNsW3rdDkU8UcopGKYx6VHsLsGUndWQqWy5otGMoJfQP8gmAAx1eNAZ",
  "key16": "Ejp67sqg33jZsmnyTfhRabN5e4kawa3JRDBWd9wD5mQ7CJd8ufPgd4FFioAgPYgFM5nJPkghf5grvnaPvM2Xqmn",
  "key17": "3k9Ct68FMd1hJRMLLKiVdMqqPXqez9BYJH9sv5XjCRQ7rwoZMtXkAFpMYynuFx6S7sgHwVH1gZS5Mda8KJwwhBAJ",
  "key18": "4zBvuPiTXZPs1EiMpuuQt4FHjTqkRvcfbS7DYG31UNRhqMNkjVpXLaxUDjiBLaFDQ5mQjJiE7s8Z3y6sZQo7GcpW",
  "key19": "CXsvK847VEFAaw8n6VsAD6JruooKwTQZiLZTDX4g33kspFnDRFYMGoxp3uVNQ6TarQCFncQf3KozRumSbfuQVv5",
  "key20": "5XM88eFLiByT33fkg3RNLUMDcsgRMDEJQQ2jm3V6VabaQGvqNHkVBEon5iC9G5E29n1S7vwAnGikBW29Gsj9e7Ky",
  "key21": "4fjHcPnopVshxEPnqLUe3DfKooeRefZdzUMpjrjibhvzxTqE76H8Eyt9JShwf9UkZKDfoJ8RBEK6qK8pKBNTFJjB",
  "key22": "47jwwBN3dQtwjJya7LRFC6rjH5rGxzFpAuPdTB5sHBKtm4gW1BLAwxkeYkYxVp78wqHNcdkN6eYU6jVSBeQ5T6yP",
  "key23": "w7qegMCpzMWcFvWbQSk311EMQ8F2jvuxfm4eE1eS9EAkRQe4ymJw61yufxhvUCBq5qWtsLyQwYniX26qvrTzUzZ",
  "key24": "rwdk7Q7epBBqr1KtHftEbXxhg9DHihRLj9WmvdF639jEaZugENhLg7J2iRBp4PaZ3wKVkrJydsd5dpn2LBdiLiS"
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
