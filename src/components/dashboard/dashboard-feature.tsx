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
    "mpw6EUjJWMFhe3g3hoUrUVwXaJw9u9wXrmyEihKQd2stoFYVVDVKNDWpvZnbsFvxAHuudYRj4PcLdjRhst7DLxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jBVzasvNukoA4ygDPyQZ5u51UeoP8Me7E247xPDLU3GzxT31RSccGF7RsTzNHeSpmoGRbfUmfUddsHsJBeovmXJ",
  "key1": "4uNZgdCjG5MMXcEUb9EryFLsXJa3tfYoXN49HxgEDGukzU1YTFjKZLa4j51qQb81VxgV2Dz6MenB7n6sXFJSjTt6",
  "key2": "61iTb6dDvG9z7UB4N5KqangVezdzywuq5W3HXNd48bNtjgX4csQbYh4DFKGDFfVGEo5gMH2NPxruUjcBfAuFnHSj",
  "key3": "583zDC9UapWvXT5s8tntV2ADKuemMwhM2T9Q8YVKJdtwZCxDvaF68h2eX9hHUv8h1JCP8SgHCLViqdffTvQK5tSK",
  "key4": "3Jf4kKAxYMtnmhu1m66tXZKai2HoqoiF6oHo7gJZqFh3xfD4e4kZkPF6UinbsjGeVB9E7yQZV8yNSbGbrn9bz8hH",
  "key5": "2zZq4j2tV8xPKPaAxJya3Lcm54PoRqjNFCdNx9FMciQAZGT28LnEk2ZoXXMeYp9VzvsTUj5kbfJPKWNzmM1cdP81",
  "key6": "3tshxLwVudSpkwtj5R4zLNiobLG2YDTtD3btvEuCqmuDosnQH8Vve7UV3StPGq3h6wW8gz6LV2fXTeUZwPnT1Mw8",
  "key7": "3hNCNfT8cZzZaRkH4u7CyzKApHbKjBnsLwdw8wT1VvUHAySXRkpGH3pHSJsUXU7CUHQzPwRsE1LFZeE2dq4WWLCj",
  "key8": "QjAQ4kdqmSZJWemNkMXC13GhsCb4vwBQzpScX47q25od5fsDiyWp6rUj9VsZXp4JDBCZgXKhVympzXQhaycasW2",
  "key9": "5Vr54PMJR4jc2KWwq7AdFvVHYjEiaRF6uMuLrpUHLVvCdDy1Ypb9xMoWRCu4p83tSJdCAmT8VJjR8S4kX4nT1aVR",
  "key10": "3TejGXgCKGDZLNoiL5updwwxbQEQQb7z9aPn7MrUoDFzNHwZWTy68FafNFJJzxwiQAE1CuoLeHRaFz3mHFxNH5Gj",
  "key11": "2xQ859fgXb5BoVazLa3cVNsiEM79g5caUAUkmzN5Y72XPWyCvCTCzbD6XskxazRFzVhsF8P6EV136ZSb4gx5t3Rh",
  "key12": "2qSrwqe6G8BXmoPtgHtoBRVFVnUtSHziLDe6YPjEuiUei6qgxy2tu6HWumHQqgEpcBM3FhSCaasTR1TqBgqi62vj",
  "key13": "44RiWWT6FS9WmbPisYFaiL1KrfLF1vEMuZA7yUK78tsV1gTKm997hfjM6ANv5Z5TvtZZoCq81KWSSGFWGm1uRcTk",
  "key14": "5A3zKmsymhYxtL1MSusSHNMx4q8rB5y964NefQibsYjha2ZRmU1FUVS61fGbMzU9vdbYNc8xpbijZ5BNKwCwX9Jv",
  "key15": "VisoqCEvNNiVZFofGse57U7YjhpPNp2zHCMFNeYy7Y57fm8myC149E7kjXSW9QPs9idBQzsYFjPEzfS5GnBMZ8T",
  "key16": "4E1JSYBqavtp8YjyEwghHqf8RKAT3jFoQhzoCayWgjtiJeNK7EHTrBjjMKvcC9PbTdngvy2wP2rGYdXNXy8Lv5vS",
  "key17": "39c2eDSnVQnsA4P94nQLEvnDKmsRkbKM5aA5xMoe84QRxW5Ew7s36eH3gHWyDfyjAZ3kBLAbDG3Sqg9SDaXskQyx",
  "key18": "3S6cSEqtgcrBBcwhcdjUNCKnFDQbEcvumWbftRc3C1PDyLEZXvzoz9Eb2DBjUv4BV2DtW553ShUkiJ1FV6ziEWKZ",
  "key19": "3Ma8YVDWyqcrNbFoeByiTtj7m1FYpipo8ZKEbmjv8ct5UmppSc2FDiNJnvHDnNgX9D1iNCUazokbJ31497GB9vaX",
  "key20": "4GN7mztovyqR21TY5uyxc9mKJ5oR4x2dEomfY7PpKdpS1mPyxCqbvkyu78uRMaTu913aiua5SxX1obxkNjUXEkNh",
  "key21": "5Dy9TjJ4ueVUFp9RTZSgcxKnSqgYxwpViHq961jDzr2L7AwJeFZEabm7yYVDLK3vQDBahMvy9cg4VmAGZdG1hSRX",
  "key22": "3K5Y81TycY48UZa2RqbeQea5RL1pSK5kkvJb4obbxjrYR2TiMuV2ZQ5fNcj7b5qYMLGE5aXgorPsodcZbJxqwQG6",
  "key23": "4J53fofVky1fkm8Aa43ryMZ6raVvDCw4UEqNVda6r6Y1KcSgoUjRWJf7rXm5Qupcdcw53z7jP7YsKumGBya82w3h",
  "key24": "44hq3t5RS8JBGjoh8MK5kLFmR1iTaho8yaAhfqUPXrNjKG7RY6YZxH8NSjHMtzb3xY8h26dnauTAjk7ppMvetrRj",
  "key25": "5YzTbFSqE1LsKGFYRLEe43bWSMwEXXAc4qZSFFsgRjKcujGf1jueGKmcqxaDPDwynSGYLZFnB1YgTsuUPB8dHobt",
  "key26": "5HVCAvet84VpGSeL9VQ6iZogbkuNH4yazWen9tijEjUgTYpumuYUfXaGNQZtrxhoKE7BQwD3W4kVBGAZnTRtpTgJ",
  "key27": "3jLxyeQxmcStjP76KTB9eAXtPkcNrDHeMNE8ZZ2GoU43u1WfCsN89vGpW5dr5NvSQ5RNjfmKo8ej3REyeGBg6peK",
  "key28": "1tgLWTmNrjzNLCjK335cem9Q3XruEokE4bPFDoueoDdqt4C4TJCZVQH8m6r1oyD3pffoQrDBkgKQdT3t8dHKjuP",
  "key29": "5mtQRaK6tnx1Zw7mhdTU7QtqjV1yVr9Dh4ZFPr4WD6F88wDQ5Ubni7o73UgLqGgjQ3Wxk5YAiTWP23dusF9fKEAp",
  "key30": "2REwhzoQMv6xpVV6o7a24fxFWJFTCN5bjgLd8AoGQifT3Xe7ZkXMAYiksrbp9ZVxMbm9HQtTyfkky6R9AZvz8QMe",
  "key31": "3zGz4WJE4zLVBnKNVGLkh2LQAU7kEHcYeQw5G2YyvrS6NALSCRvXkyGQCZHhJGiAMGkp27VcYr7nkD1jJ6brwTc5",
  "key32": "51xQkffKdQSjN5J6MhMuj6DtH7E9NscRn85GeFEJ2mKN9KRvGRqFovwzdTj9WHQhR3VUL6UvnmdoTDTS6vdcggFN",
  "key33": "2UWwEbWwX8g9pSmU3C8pTBv8qC6Jb7p5D32wfLaJm3CCQoqtezJepftM4Yk4RSZwTqWQ3kvG1js39dCkZky84FQp",
  "key34": "tKXh5rf8FZNqjfgGBxS6Ets2x1Vs7WCbfTo7yMfJFksVkeiR72pP6xvg8HmWfE4hxGgNarV9WTPiiPAtMk7dwjF",
  "key35": "5eebQQG43hVJvWeiZVFN8XHZw9s5DpcFU4coBTQmdJJBJFQLWnEGrCgv9g28bDh8Raw2swrtWYxfkG76ra5dpCnG"
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
