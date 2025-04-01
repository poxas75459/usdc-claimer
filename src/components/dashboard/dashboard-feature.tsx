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
    "37k1sNEXNaGgpgev3s1rUipV2LhDrjnGtGE52esk1eTNBEbodzi52qFqQ9rkDR6b65Q7r6F4j3i7R4ABC5Rfnd8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Mfxa46BH5rDhd186DAUbxX8cJDuDQVv6yxLEsCsYuQSZGwQECYDyrZY7aWseXWMAKVvUpQBJngv7NHmikbZ8Rz",
  "key1": "4h2Gt29j55V48o6RoTdXrx3WQWBSYScAPvXae9q4tYBPgWmVnQhbBgNipExpQudC7BqdmXR3aSs16fCau81o5oLA",
  "key2": "3MpXrWNfzJ8FMLvDBVEzQaWioHedfLKKcUUVWcSCNmLwWhpxyJdPnYEHiMbX6RXDEnFw9KpMi5ZvEY8oVLJFkQwv",
  "key3": "2iPgr6MTL2Cg4A6PqPAQkWbBs6uDmz4C2tTrrcTHkWKoMQu7VTY5iUV7hceDbETNSLiB6Kyb4JNTcjoWPy2NnRGn",
  "key4": "5RvWTgs4R7jjN2Vzu8EG9FBzmXypbW4PKauVYcSFkaYHqpBt5wdVK1JHu12yqNxaUqa12N2mHZCY3fcoDYeDHn6W",
  "key5": "Cb3iCLQSoHZ72Y2Jeoa8uR2FHA7DWa1egx6oMMRGjpmi3JEWvEKeMk4xWAdRdGd4mmW5CU4CvhiyUyJfxWiTPJx",
  "key6": "2zCQaeRufdPMADSYz2yPRaQP9huT4P3nBMY5Nm5EcokkohBdHFTiZMCQZ9EzaMhXdVariQia37H3im1tHJeC2M8F",
  "key7": "3vBbSaAcwaD7rwn4cfLFeFbiUvr8Hva7REirC1PRQd5UJSRvum7UekeLu5MZJoT96JtbMV1uinPFKsEhi4owLPqK",
  "key8": "4KvUQG8cRzKPasMsHqUUBNKMTYJKwsifaMo3hn4qdwuETq8rdwvt8cqyHJiSGTGpEodFb6ZSzcR5PRtjSYYZYmhZ",
  "key9": "2xPLV1E6WDmrMqfSqqXiHTvfkRR4dqNtsk3ageb6QbpkuwHduRiffJ4zag6REsBLnj9HAY1BYx3m5YK7iC6NeF7a",
  "key10": "3PAqgGG1N2eMDaEiqJMjVBKwJMc9cNdEntpwt9Kt9smTFa2awSdTB8y8vXQkX4hhKjkkV3GjBxcNVdwa2sh77kCv",
  "key11": "3KaQ4YZHxtdLRqghPxRNata5wiz3DGRVnjA7jSVmXmaqKUTnbp5ZcWNce53XYZsJfrDa9djmqAnVfA551zF4AR9b",
  "key12": "3AwjzJJQk2HYykJ3UF2KwAbT7rdzCXX9ZZ9JdAc5XxtX8r1gZa1edDDDmfhaYsEGLZ8YrbBkvpapec5vBfcWCVW7",
  "key13": "3bDEFW2av4LvcRehiQbJrpdDFa6LxhbQyv1d8Ct6DZvu3ALYuUo78UxhUA6iA7BNUe53imKTckAurhHoVbx1YaE2",
  "key14": "eWLdZFYZArqoaJiNDnJKqeUcNLYiFoeEhqWzcZ7MEDB84u1xVdSWKvUhviSUYRnZQXRPUZ3MSAKiW5gYMgB9G9s",
  "key15": "3TUJ52bhMwtR98Pan87osxcCoebBbe4r585EoV2FXqoZpg2RXNN5XWtjkGYiw4ZkDZC7dy8gXBHEminUywLcUojW",
  "key16": "61satq6h6v7xo8RSQQpXhcoh8DuwB5xBWqpk31ocTTfv8xW19t22UPrijTUTSMA658zfuUhTp1Zuyo2o3kvRpWhX",
  "key17": "4FUo6fWsFs8jvznFSoBVXx4SMii8FXN5tRtqQpGRjJ6A4EjeEPXx2d1MPmFMV6mq8r5KAbbAzsn7JxnuLnpv9s7n",
  "key18": "cY8BoxktSYrqFjWRGzuB1hPSaLeuLCXounwjEDPuuUfsxcYZu9MJwGkxMD38QmPuV4MruFZxJgnHyWXw85ZVJK6",
  "key19": "2Xi2qyM6HLu5ogPGZk9ziFhxZVKAiWQwrAEE6kHeBqe21n13LFCQYfczdbDNWeY5Uoarjntkx5Hk5rauoCTzhSGf",
  "key20": "4dzkTUzsGbj8sUaAbCbTHT1r1fX6wx4xTrKtyU8JqJYo99LQRScXwKSPoxDfmfyZbj1RnCyTvW4TnRNigaaQVxyM",
  "key21": "5gsMWMpbGcVZLbgiThTBcLd5kseevVthagmMRmtFLswbuQ4u4JhCdDp3BUEbKo2Csnq9zWGfZDA3FNEAy1KJxJF7",
  "key22": "5QQp3g3pjLrLQKSHDpgrMWaS2gnX7FUNiPPcSKrdU53dzeXtqcEa96B3ZL8u8pvBNtVBBtP1Kj1on1RKSiXmtE6u",
  "key23": "5zLpysDCBsDqC2duE5JXq4rHEBH74VhCyJ4jujXoJJBkPmsuM8KmnqgounacVQh9UNCrtiZTAfJ4NuRAKg1V5AsW",
  "key24": "3vA48JYmVUjxxE6oT8TZX3pREwwstJCSab8YJCkmrKPnY3dmLWuzc2bqYwFyJkGpb2sqTiaiYHyZADxQndmeXmYs",
  "key25": "4v7caEXi8shWGdMoHd32AK4ndKicps8vGyHexQZZ2Lj5P64VVx28jJDGBeDTMRAchNfPEQdbEUuCjm8Cgi3ahSAq",
  "key26": "LKErsZE9oLq4bP2ddw17Yxk2qbbAARQG8DEHuwAr9H8SCkWULG5JeAcQhuDkRcr3hdKVDKZRuLSV3aWC2d1Uy2w",
  "key27": "7AkJNuns7jEuaZ3ps3Azq8jz4idnePk3wq6JRRvS31EXP1oNrKgxK5iGC64AkQgHVfoqLcDh2QiWKG49hJ8JZBi",
  "key28": "49QgE9ahuMz97BSbzK5ADD2bLMin3rGaWdak89TCjqGh6VnAksZjmKdSkA2doncwJk2kkmm1697gnKDUuBJ26H9c",
  "key29": "8646PV48AXC5c8PATjicnBFQ5AR7NBvz44VzFfAUJEDFtZQsx9Dyb8hH9CQJu2KxBwQyrHDFAHuT1P8jXCpyF4V",
  "key30": "53ApbqeHSjsqLzkLPVDF1H9QQ7u31FVUVqaGs54uPeyRbUNs3y5FkG7FZNgKZpcVpres7sToHBar4jsWex7vFgkV",
  "key31": "3zmqGoJTbKMQDz8YGz44qsTckuTEQZT7C9uAYCycy8fiAr78doRFADLaAowTpDCQDwz48iQDoTawEjrAVK7cqgLU"
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
