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
    "2tmb2UDvnSDSfvcU4xmKhzeK726LvqCuFWkJXbKj6s8UHpcvtVLKwcqvUyDovkNydYRZiQgywGaz511fnSUPasDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hDRPUUThhErZ8LnrZFbjkXYArJEmemJhkbUwZYxgGXZPWZKKYvT7NocEYPU9XAbSVCnYsNEzv2s9xwTKQVcuGf3",
  "key1": "3bmzSzzGJgdaBWgcupCDyqzRnYGfgZqxT1qnJzJZgZ9rh5JP8E2Dmm2X39rNLeUmeFC8tiXQJ9fwQBPkB2sTSXi8",
  "key2": "3urhbAhhMqRbMDQj2fr6RNAR7xffW86M2TrZPrkDrxL9c2etGtyKjPuxWYrpMBecqb6KhkRVBgxZU8Z3KCFgdN6H",
  "key3": "4yQPC8VYP2QXThcY9nLSfkWTJdSPPdaeymksyxru2QUF18encunb6u1Zdzq7GR8ARJNLUNihfMTBsBjuZBfJNkfS",
  "key4": "37wrSwaTKawfX3REgnfxXM4jVEgTP6F6CBPTWiQ3SxaPFVMSoCwCYHTVV7snPEG2g4EfmQMvcizHK6N7mxDpg7EY",
  "key5": "3eYAmcQBRmTZDBnoRLSQCs9SL3BD8HfeeN4xYPoVGCfyMyJjrGdq6JjeJGt4YC3yVYuQ9XXCiW4WVPJa6kwZK47Z",
  "key6": "2RTikHfVRvZe8nuNqyh1iZ4GisB3232hybv2HJsnh6BCxQM1oJzbnpUK6Q7tetxDWq1tKP5omTjQVfuzdtSUsaQX",
  "key7": "BtgHsHXbGF7cHBUnFWYGtFcu1GPUSgkWUpup6yrpSuTHcxGW9couJEGh9eHDsZovjM9HnfgXbiLSQr5jBHUhr1R",
  "key8": "3ouWoKNwvtMYSnn28aVSEobv2ek6wukFDLbzE7rrgRNceJwoHzmGy561myaRJHcPur93tEXXqe5nPiP1QNY2K8K4",
  "key9": "5qBTMc3g8t3nKGC3zCGT1Hee3A9ZWA7FKkFENWD25XcPeq16kk9MMXnEe25X2E2HdQgpPBQzaosrYNGJyu2EXKRS",
  "key10": "5NcPfKdNhTus2PVCPAzndUZizZUNM8qHU1DcSFL7utnDzUJZSqf6TZ5F5hTbeZhDQeHjSLmig9aEaVMZMCHBm5F6",
  "key11": "4JfwCzFHb66SjjA1AsRR3xNafziGHvzidMZjWXdSZDAy2LtQRMkn4crxA1Sc9Y5ikTMZAtBKGg29fGyGtFJ9MJSf",
  "key12": "5WZDdqJMVN25H3zfWuxdk9NsKt7TZdB9tVadwJU2W7KaheH9yo62ouJiLMJpuNhZMuxCd47TsZPbUuWDMna3Xcny",
  "key13": "5X4HvV9Fe62j8LSKn1ZqT9LNJuKc9yY2H4g98N1XJX83fgwG3U17be6L13jMS2ABy3fe6GJWLr8qfEtfmHZ9NicP",
  "key14": "53UMqWmV9V2HozuQHgwRJe35YJK2BF9kPqj3nsKVaa5i4N2ftzW3w3ju7akx8n1GnDHqVBVDHxiAdiZFMduUXMxy",
  "key15": "55yuThP8KZzoCwXKFZoER393SnjaT2tGPrhuTs7ZKBMQ9Jhx6RaZXGRFw7MagpQ7H5KbNTjaznhARJre4Ej9yaS3",
  "key16": "4dcW1tWHbHHKETnwfvMTqRB8i5pEoGmZYrSz99gQbX5k3xSyhHQZdQY6PmSVMuvNJrVrpc2qcXJnP7m8qim4759r",
  "key17": "4jBB8moe7tnrG5TJ7psKxqJwRv1TboqVQpw4uwzqmyZ96wjs475Gt8mvqeQdo15SdKQEyoQ1jfKRpBeAvFUtnnps",
  "key18": "2GvLnJXPdwwo8ZyWDSNQ4xvciBT6iKtiq7mcr899YnfYvYYz44XPtgarBPJCSJZcncfGnT8WbwVpbm1Kk3Y1RDhW",
  "key19": "3qVgBghUkbkoioC6HS9W9Ay9ia9XSz6aWWWFQaHsutWNHWfKeW11eYyESQG1mquTiorkGmFoCKdmwY9xMsQWfaPz",
  "key20": "3xeSCjXK4VjAaVvn5PAcp3SUscEUF3hBdL5Tkrf7682wD5zMiweWpVVZHtcrFikMJCToByuM99ZGEfaoFTh1yJgp",
  "key21": "5dZzAmpTpfhTEReRm5faZjyUhxuXZbhBM4xK3WwLkujA6Uc9qcRnyyr64LxyJzQwVpckJeHfCxtcHaSro5PECWr7",
  "key22": "53ncYqYUgsxP5iEgfffsXrzbwh6keCLThFhpJAAafYhR27fzafyxiHx4VCucn54BChrLLg7Hn8Ks2BbW5haa1jCk",
  "key23": "5cZHjQKc7RgRdKy3mH8GyYR6WeSBdAZxUZkiSKyDCiRAD9AnPXpUzBKeYusCnGBvmvkNE8NefFEuYEFmLZuQwRBV",
  "key24": "2WpM4G27QTARhUDF7VJymYPzaKdGsFYkPKupuwCWP3nzPM6mRQ34VogSZnbetGnjprYrUt7SZcxJrgPWToE7Nf9",
  "key25": "AzfPiCzW62EAL5RJAXWSuULV4NVeWcP4mQYrYzrjYRsM9HxiHhJqBFRrAjPFTUrAQkqyHvCsxYPokj8q4VqRdAC",
  "key26": "4GAD9CAZZReBRTh8b7GxBsgFR3o2RW5cNqPscvCfKcgiEqqm9WghjLTmjzdmrhQErX6mCxihT586R6RPwZPSmzDZ",
  "key27": "4W7YhcDjLNWrG1X7t2Qz6UUkLPRVnVALYmLi8VEBTCCEbQcYTZPEQy5yaJokkeVJ7cSaQFzrWocnPPjkEaCk27eQ"
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
