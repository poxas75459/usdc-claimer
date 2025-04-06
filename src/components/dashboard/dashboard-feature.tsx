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
    "4LryJG6CPdS9p5jChtAwX43MmPrFo99hyi84EuowcxpTCGAm3oCu1mh7nA4wKmg5MW2231G1YG5bZmbefT5Zs8YN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61S8rbnk9sshoPA3QFSYKy1kkxN2nTKJodGNPjDYudGNWRDk372yRt8XduLajkDuN8nGJE3eUTNeuLCJNMY54KyW",
  "key1": "A2DERyRzCpsKjgw44RUTAynFVq4B34YCoVKaiEYb2Rb4ZfZPeR84icHnLPdzSfkv7qZmHYxJWWKTmb1mN5h7xtW",
  "key2": "pDj3rbgiCCT3HezdeZMRJgtQfjVTHCvgsSD9JJEyim2mv4RX5CH6euGDcoyTNCKzBeEVWTw1cG4Mzbp1X999cKg",
  "key3": "iLUKXmxjb1xXzRUrJkAM2NSXPwvjrvGstbMyaXjeuq7uZJn5YqrduZPHkeB59G68VaHK287mkbpYHS7k49cWAnZ",
  "key4": "2CLQmAUZe8J3jcPJMmZYZjnN1AiaYt5EpsemGnkux6KjiWjtmUwFZGz7RRHtxv5UPBY3d9ydqd3TmST8P6hW7aoU",
  "key5": "swL3LLDpCsQni9GLx7T6GS9wX5MoKaDL3F1UswYhbTnxQm3tPjinKSHUgdxGCjHZJXRhTDsiUSsgXkMMTE174NZ",
  "key6": "2Zqyxs9GrTD4KWB7wGuMp9ZhFeJBxya8aXZudn1mR2Pxa7tsyjfKTfFBsu3McGDix4JvDt1TAGsMBTkpcjAB4NvU",
  "key7": "4auwUJHc4xkdUsdoegq5BhJwM4w5zMVMXoZ9R5uAmguznDvkogaaMZ4NmfyGCu3vdCS8ys6UWifrCEAD6NdM8jRX",
  "key8": "2EzDySNhcBZAopCRyk1pHa3rzqWbc8HzMiskpyG1HrzjNBRwNQCdBs6wtTC9E9yPgmABrabL1pBAE4xXpkn9Nmqm",
  "key9": "1bi69rRUb3ZkyenC6oVqH9y6CETn9cXvdaKkCdd7XiZtEH1bGdvpTmSYJdNenzjehdCXuM66jDksjhHsx4j6UxA",
  "key10": "27N1QMEt9ameEnFX7RmES6jAMHUctyy3gb1Gpuv9Nmuhf4VygGxftuvGcy6xG23VijrA6QScsD3wttgxHyqQBnR7",
  "key11": "3pZS2y42jgv7sGyez8fiDZEQhTmiDwwqTgtSeCaqWz7HWHCXrtfhs7WwbmuVqcJubqxwR8Sj3bJ9GwZzJMZUw35U",
  "key12": "2GD7E8G6dzMkEhkThCfkir4Vej7M5MkN8RJBWuTEZZ9ogtyie3deGb7rtfjwXxMWyfasY7hdL78DWx7YZDBxqGLg",
  "key13": "3bbc8qxodJHtL5ykcaefvrLmxJ9CZ5D8wsAgrikDFmXRyGSF2DzfUrbti62g8uRk1CkdfamN1Nj1pkd42yR4UFCN",
  "key14": "61HGfXMNZk6XAKED2pBufgoCb5FoUAEAk5ZsiNQsTqH1BhmqmktTHtzSvm68AfMQMM8q3sm58Qe6yerMNQasXucA",
  "key15": "3C15aGMLS1LkTYDSMaBYpCm4ZWp48Qd3SFtpwseVUPZudoW44YZhQAvQn5eguVvXWySNU7VHfjqvMwkMpAt6k6MX",
  "key16": "ub9kS1MvYZ4bbZHogyppuyGqGoRLKA8URchUku3ZjFs5nV813akgZY5q2s2Yn256i5XXiQNTo7xu7QfX9jBqimL",
  "key17": "2oefJbGN5SsNUQsd2H2YEPLM6YnAfoEcixMTDwAFi4dzXqCgR8FHiPWio2t5an7KZdfHic7w84aawAwqarD34XMT",
  "key18": "3pYESHXwQpCRvCBArDXeqqshxxZLpPXaoB6i9UN9VQbD3GFmLa8Q7fWjdwFaNhHoqpHsMp5XM86R4EJg7VjH9rjT",
  "key19": "4vtsJiMAbyEmUCXZfdHRjmt7buzKwNz9Rqp8EgQHMJMubb78CtJTEqZshPxHJz8i6t9Z9fKcrYsVJbstUZvFc6vX",
  "key20": "SvBpHzgy6nErnKUivmGzthLK18X5zVhxSiVB44VwaF6SpgNkVMFe6EF6sgKdRU9dFZeYW6zNp4KhLLKre6ezKvH",
  "key21": "3UrhuxiFAS2Ynvcoi1qvPEFoXh47ESdHfTyPXQoRDpQyWjATBsXSB5MrDMdE3Esnf66QfBGTzjf9XCkkRFSh1MqL",
  "key22": "3SpeGpyA3zvAcpv7F2QCYuq4QiJuDxk7FrmdZECpa9CJECV3zqKzU549LvZqmMK6qjchpfMFVsNg4eEF6n3RhzPG",
  "key23": "nU2QArYhXTUeNgqA7jm9c9r6satcLY96N6QLsuuaQYH1V7U4e21jgKUa38oVXdMnkCZCJdWizMehAKS3dS2VneL",
  "key24": "hGThmaJE5rJkcn4CZ3QnJXC23ZJnxt5oxQipAdNyrjAEZX3sqVS9CDM97BV9YLuCA2L4Dz9UCsCGcPrt6qxg6ky",
  "key25": "5nZd1dVnrAPS7E2x4s3QHZbwzBGYjc9sA8iB5u9GqWxndNJMoMe5bfrAZ6HfbF6XLNcbA5SKp4548zcXCpAH3V83"
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
