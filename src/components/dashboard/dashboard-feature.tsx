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
    "tst8CBFxm9mssub69hEEhn951dEvzKj5UnEzdXypKwMbJF2J5o1FGEzcnhB93sqFm8XDZqvsZGzY2kGQnom5u6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NbyPjcStBKH31hr3hC4cPFdnpLCNgRLJQ2P6BidQKg5Qkq9pdtPTyDkgpRYjoSi4E8Vzf3BSs1QbEhwk43ZDvV",
  "key1": "YeBRcG2mpPWZEsS9w57mHGHEgeeRgdjasb29ebH18BUj5EpEGCHsEVYFnedAKtLnhYk5GeR4eNU8cgcdMLLZkcg",
  "key2": "2n4gEQHxV2pGMc1Z8ocRNFMjJ37x2p2e65NM8MankR6MdKA6GVcqEAgAxDMmtyU4pdDxDBVHLT9qjhUSfzxzhuhV",
  "key3": "4dTVZTT5hfNr8jtAoM9YUvrG6wyHhaNBxr3hrCLbVm6HdNu5AdCK31XigiPTw99KsKJWEuxZX4kWsvBeKmF3kyQe",
  "key4": "3ky5NTiu7KGmxJso9Bubs8augQzwdHypUHWMEvnp7y1bQ3UZhzjEWm8BP66AC1QWG7oohePFxC8xmDxnCLvCAs2T",
  "key5": "2TKzz9eRSbPuDNd98UAMjSKmyRQnqgo6ufCGpotJFxjoZB8in5wNdzsjT7C1ySLp5CmB8mg8gL2fnMJjXdCHMZGi",
  "key6": "2HRTBXx9ysLivBbzRCZkb64JmibAzcbfk1pLsYaHR4QXoShn87Ao8tSk4eydWpV6Nyss9etZhyXxA9XhG9GAxn2S",
  "key7": "2ufWANmZrXbusztruAwwaLenkh88vGeGnXdecLgPdMEYF98bb6TyGnr6BNmyBDTequVV6Uun4p3HGFCjTrLkTkEr",
  "key8": "dteaMvKKUKMEiVDVSqMhM77rhd5Ezws6ZsY4p3vqqijYH9FNmLqVvxUcyfRbfuddiTA2pnp1qh51TiLdikKJpJG",
  "key9": "5moa8X3fgFqBuf3fCfboy1oEJNdj8dysLuuuMFymnMMBmC1JmpLwgZUC73ZdWGeDagD9oJfPvsWSUPQCQrpur5zS",
  "key10": "ksvhfeNnCd7RX6FFVxMuw29ttffkj3GgUtRPR2URDeJ8PiG33H7oyBuUfxJ5AAMHDLr4rbQCyyyJVuShkDRmghi",
  "key11": "57V5pkuCjprEnzDwNpeY3WDJwM4AfJagoFUaD93enHXt47FPckDLoK2waWn5NxrQcw8X1762FeJqEYkYykPGymdw",
  "key12": "4xPvUkzgWcDDgyutU3hB4C7xvuUR1SoZaVYgjgeiZTg3sWRWjAdXNJHiqec1A212Jvr9CyKuaXFbU7PNBweC9SDR",
  "key13": "oGNnt33gH5yadrSHaZNFmcmXGSa7WX22EfXHfUHjNnvKrGQBxJwaKw6WjNc3bv7Gds7DZ79aerN3MjyYQm49PS5",
  "key14": "otkzwa23BYz4eK8qihgscSHceh2eQMgogRqYcwRRBGZFfCPyCWjLZsiHms1kbfEHFXbp3HfCrtD8XsTRFKRY31J",
  "key15": "4bA9D1fecGRnLPgogziBMMFRg1JXYE27c16XmGJjYUz7pvHgMgbywSp1s6iDMZK9yoURnYfxpcU4kKgzhh2foNm6",
  "key16": "3aefuUjXrF2mkj9H8HcbK4q48Z78eLjHKvPyfBWWETH9nJvdRN2TbfcVJH66SEUY1zKDeBPJ3c1ppUsip1K5zRoX",
  "key17": "5WF7Bubk2p2UVt7kBGRUDD4v4KqpXdHXZP3ZUVSBtEC4GRL9fEUFHNYLnZeRxiKcMDzKaqTR7csr69b5MvVXKPRp",
  "key18": "2AvRGMVruNTGPzWv16t9sqkehmcyDRd4fVpSvWRxc8NjttgjH8AKtiq7TRMQEbh2JBGUrB5G9SBsMiKP3oJQf3PM",
  "key19": "3VpHzbpm4icdWwrXQEnXuqKVLZ2htUMiTXW9ZbjH116XBgVp97HaZr1MsKNFSKsYagxKVNLYAVCW7L9xuUftrWLG",
  "key20": "27wANYG1GaMLgF49AQDggPcgzSu6CpFdsFxqwDhpQVUWD2C5dzqAybrbut1dRBRrqGYcFFtGYpyE6QfjepyMKgS5",
  "key21": "4Wjp8e4Y6td3tPHETHSyrRkz2m9M25bfn7RZs2w2VFsSpYVyGC6VYskGERpdG1r7YJX7YFr5fjtquZ9WzsJLi2yb",
  "key22": "3n5R7Jmc1uAtoQQifQffGwhRovh3fhEkZEsGzUuLTVrEHKUBHCAqiXzu4T9EBHFmR3DuhMSWEcBEyqwc8Z88fwun",
  "key23": "5RPF3Sacwr7D6DD5vzswVq6gRPPz1vgquW6pu9xEFGVbq2KCnXHscf1dAmq4Q4ttC1PosvGB3xSDrYimBapcHktg",
  "key24": "5zr9sAGaVLc1cJJKUTkfejYSebKCNG6k58WzA8nG5gSbwnu12upAJDnuK5VeWcksHzmjgL4wWsfQRLNoiM2sJAj7",
  "key25": "414wb78oepURxofdJiWN6XbjS9RAfr7vDrXDuxp4RAqkGVt69pDk4R4FqmvdMDZVMVJfkqXfcuk8YiYArU5EMVDy",
  "key26": "21SmcudBq4ZGAXr5dugjtPz833kN2ttaWjydT5e8VxtRccLWxiEeU55JbkJX4tGkqgu9mM2HyVvqw9dMfXgm7iGi",
  "key27": "KPGQud3K6j3UQHpC7WRh4Lrce2XrMwuLJrGp1mFzqeJqkwgx3L9WXUSfv4PsKGBsDdULvyXWo6gDnTcKDUEiYNo"
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
