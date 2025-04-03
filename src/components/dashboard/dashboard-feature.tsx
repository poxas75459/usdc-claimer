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
    "3PSLo6uxycA2qQXGLfnNwT9tXami5Mma9s8Ruv9LhiY5qtA2iwyQgHnKhSEq5by3jhiLdweGtLtWp4c8oQUKV9uK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NWQE2LgGCNGY9gMjqNazKKRAnZKFLJ1ZMaKDSK7Jyn5sW9tanLPpA5B9LRkeXP3mdtGinF5FPdwQrDP5mBesiNw",
  "key1": "2NG13UmXmAr2oGtwrSNLuN4jRBzpGzSTT11SrxHT6ykq8jTiEu24KNzjuSD1T68CJonVwGyt1u4vgDSaE4TW3J1Y",
  "key2": "4w5rqu3aTV9o3efpNW71oz4wA2qEyszhTXhe6Qjy9aR4arCe7x1BAQKWRpyUzqvVxWtPi9MWfDR7b39Y4aFtN6xF",
  "key3": "445eaMZQ9WDmRic2uytucurEXVgUgTG3vWS1Y4GvC113PEyLmgvgCdbLUejLG6wVAMneBnaS1Dwv6ayEjrE7U4k2",
  "key4": "ttaFLi9gomirEjsKNo6kvbNQrpQM4WmqFJbwnaK86MUWVv1P7MvJjczSwGM8NMR1jkprsFvMLwmupZy2zkGZamA",
  "key5": "5qT9rqZNbQUUCLykPFt19Dxm1gEi2rNfxdYP8swq5UvYdSU91fL51VWUTScuWMt6Ne1SMwedzt1N57d1Mv9jJxjU",
  "key6": "3LW8metiTRnNrHZ3tGK3sggUVdfw6VtdG7apyTUaaz7Fb3wBjQeTbUzaFkbVX4cdxH5RaKEPMaGh8MUXU4y5TPZR",
  "key7": "2KKhX1x1AeJzkJfeNY4jeSCxsQdPNUUSHhanTsMgyi3eXq1C6UbJrDbML3qkLm9XLSEXo1psLiBKoh5EJk21guH3",
  "key8": "5oq3sNubX5rs9NcQXhUJqkf6cd6t56GzfW8pz5eB2BXfPpKiuzYCC6ZdXDeRGXCd46nxhAUSzyAQLvjx77DTDFDH",
  "key9": "5YzBnNcHzwpEjpveVy59owhk6pcKJHz8t9YTkNhF7eGPniXD9p8pmsMBAXEmkpzuCwiEykhUEGLxS4x2rPPSYK9g",
  "key10": "5mpEHSwBmv3Nsfc2s3vVRJymkfYkc56LK9t5wLZRLjcZusvU2PxMqFwTdUJGcTJJ7RNatBHmwQ2AN1Y1XuQS7U3J",
  "key11": "2wiYax4Z2vzZ47pJgkSHdoC4casYzYAhZTHK66kHVwBZm8dXqtF78dNc1Pw4ndocgNLHaqVxRYTSRpZTJJB2zPce",
  "key12": "5U3cHkzLWxQUVETfKXEW9kzaiqwWx2NsxYaR3KPDYFw6ZpVgy3iUVh5foSei8TafQJDD4tgBrGisLud3uSGPNY9w",
  "key13": "2fx2jyEN4f5hM8E9fy6SBaPGmEBkqWR4oL3Nkzr8ydTWHfBqo4nejQwibhdpDZbQMeAEuGm8VRQdJuhonmG26koH",
  "key14": "44s8tyrUkimbP748syie4NuhQZqa6HnZWV5bJwTaHNWfFmGY2Hk34dYPPeYFKfzrfc4VNTmZYXYfi1cjdLvSzZeJ",
  "key15": "41ucUU9AwuYGAC1yv1jPBDNqSxXo4bhV8sSYrgkSYg3Dxo3FybJGzgxUUSPsL7ZAVjMDSWZVnyWs2F9EuGQoufAe",
  "key16": "gYf55z6xWs2BfrUu5gDj28brz6V3JvAeoATVnErRLbDAU46cpyFzBQiLwZ3tUKZqnb8C6AGgYeN4j8cg1JFujzi",
  "key17": "29ZG92KzS2czM5CsHHDu6PPHpV7X84bEXV2meZodZwWZHQtbKqdtuBFSg7HgufHAT6rZazz2Pn5YvCMjMtpxDrtH",
  "key18": "31T8kPv2XZRDqwM4QFNTqfn15RnUYYvAL9XjakkDp9qXjqj6MFZimyP1wyPhG3jQg9XnCp6APo1t8oSLAj67S7x9",
  "key19": "3yKF6NPoCovK6nnUwSjeCeBpgZdi5fNuTJ8jN5br5xu5ttqyPKKh6pfzNppV5Aad6HJuQi6rBjChjocAPtZPxgUW",
  "key20": "4wS7qxyCmx176Gy7tBRy3dNewmYw8Y75eCvfovfXRftGqYyMcXhirb4VZcoLnqk4pXhCUTq9QHrG7Z43VGhFju5P",
  "key21": "2zMD6neRSAZK6ppCWgvSeRPUgzrtSTLcsbWVKbwayJoQeGawkxkNGhgp7vqpAW5RSC9fTdyqCgoNy7EzuV2bZUyu",
  "key22": "5x8pXgSeB4qQRMgzJemkrt24ZpPiiwhbs8q9qPatneXVnkARyoEEALiyxQyjfvjQCJ3f9bWY32YYVrXFBgDRy8tg",
  "key23": "5fHCeQLXnx5fNW65RKPj7H1Mwm5eyFBPb1TUQnfs6393kCxShCAFizRe4ncZAnq5Yn7k6jub4hDeH75zhpe7kGop",
  "key24": "4sy7Qk1cvdE3GLhTLk6WUzdpTHPeHVYscVLSyNuR2DXpo1v6rhm8mnzDNyS7a6GAX3U524a642iz3KQmo5cWqiyW",
  "key25": "5dTAqcVgNieyR5crDmzDhDt1Ze96fSju3Xy1BLnXgjiutptPxrEXd5ip4r65UMy2znX2bGMtGajwEQfwgbikERpr"
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
