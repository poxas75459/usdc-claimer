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
    "4w35PSzKeWp6sKfteuE5ZJVLD3VSgeF2GL5cFz2gX3cZhVgyk4byGTXgCHRBHiJB5pXKk6sD9MbQbtDr98PTe3CD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52VXqbeXnx69qrvxCfz48G52soysvsJhhV7efby3Ys7PRpvNtPXhHfo9pgx87bCE4Nt8iL3zGWC5NUQgAqFpo6Du",
  "key1": "2mqhGrc715CHahavDcoamJBtrtLprf8GTxg4gp88TeMX5WQHzsqvqP9JeUPo1N935i1cVeCRYQ1JEaQBKxCV2ELG",
  "key2": "4Kp4ADn34sAEkhK4E8be9wUogn7PQkfG92sk5Hd7ASnn2hcDjwSHd22M4SSNX3QH37draZT1SL8VnT1wxgWE9EeT",
  "key3": "5JW5oA59ULkCC819g8HdjpiZ2JkZEWcmLxmcmDCQGfBZBQkuReNYjmEi9r6ED7NcfWBvUsDysAcTsvhubaUvgfPT",
  "key4": "3nDeuS6vkxfrKtLxNv9ZdgBsvRFfgqi2czD3rYQNrZiP4Jbx98QzdR48VqHcZFLhC4Hy4SMUoFf32vHft2q2XvTg",
  "key5": "39caiMraiFPSiZYcLLarN7QX1hnNayQyUxDtrYp8WkvaFDAiL1G5Wr4FyUBaMTSVhu4rXemCd7VAF3zKtZ9KRf7B",
  "key6": "4QFrMLwSuj2EZrnwfHnfSME5D8zqPBswqvKBX7RcdvUJm7nij1qhdQdByjB5zBDCuk4EaARTpjBXsYcp7FndJzxD",
  "key7": "2amsPPDRAWQ1EZkStUcAV1KfqfdGfk7Ykj3kKga2BeV81FwNBuUnM8s5gdEVscRbbpydnCMZmUpwWof9wvhGmWM5",
  "key8": "44128R5i59BPJgtiQZfVgkVx9am53bRofKgMDKzeRsAqPSb2dAkP1fTGLPE25mZ6CJjnEGBxmedNWZvkraHb1fHr",
  "key9": "4m7axpop881JHKgd8QMXtjD35Lzg9QeNvudk38yWGWTpPVUHjfCVHggZQfmsVQjxArqUUvpXuwaeYUqimkqjyaAU",
  "key10": "WxZbeNK7G67wUJev7iNu38XfFhGqCTnCTWR3SZZDwQGdqVp7GYfS5LEZVahpCmRN2pWANfmy6CJb63FQoNQ3LDZ",
  "key11": "4kZMwiDUZqcEsvE1dRxCNUc3ufByLWyQLwCavsP8tXoiENRh2DAogfEdiYY6xbRoDF65x17vQfSGQhupDvpXw2T6",
  "key12": "62X17yUVPxRb8EGn1pDrbokT9vZ1kKS3iTjWvkTTSgvPYcDURnBsMQmrCXbfxFHjtppRyYRcbC4zAgqF3ZexV7G3",
  "key13": "5ztzg6Mjj5jDxDr1E2LYqqUgc6scF3PRDKPQwHznpV3oXLL71jhCUVammdgpkNyimcoqfRMmMufEnrPhpE52Qw5H",
  "key14": "4UpLLFojgKAnUuUesN3RuJWiCWeozLCKFZ8n9vGHJGXDH8zDbG35uZc9oTASYLEh9FLwghcwJtt765dr2SjzJWPs",
  "key15": "cBQQqiiZs7MP2KQZQrQpJpQzu7azpmLiSEcUDTCtunEZQ47Fq2hN9HNNGhzKoNkpCXmuCgcXZCMAKru9x9rVhSS",
  "key16": "4yFFs8XbmMYW6JMtMvrSmHX7qoscGAV2i7PpQQysCjt3B2Sq7MEFmHGDuRQ2opHEjqLgMEQvk4gQr3FVKimh1e4R",
  "key17": "5LZNvvzxMXLtCtfgXaU9LKcGznH36T48AQZmt1c5mNPWocS5HhRrWBFekkTLWzxVvzpZk4v7h8rBToSSHqP5RwBh",
  "key18": "4s8BJj6bW9EQcdo4Qi773J7o9rgwstK31p8Y2oRrRCUsMzVX9mNUaFzDoqfXjBGhoZvsAeUQjiUPHSaWEYygDVuw",
  "key19": "bxpNsuRReEmNbQemywFaSsWWinEN6VQUjhTNhajNyu8oFxNVEP9rbr3BaeRrSycxEwLxMxwyKu6bRzZG26opexr",
  "key20": "2xZhH1gK7dKyBH1grjmyxy74TyMaC7xpQjnqYoQX8M4BsJuzKz6vjsd1jbM7MPWWWTzy77KLkUY4HCp1VCbPYmew",
  "key21": "2LfjcezXjTa2KGA1FF7Ae8uyjmKjtB8DPJYb7cGBGF6eWTdXEuFi5WSyQ5uYJz5kCGiDsMSpxAXZKh9HSfqTX64X",
  "key22": "41N2UnKkjU6sMAHHjhVLA1LyXQ9WUoRpehgK5gkRNgdPAedKpjgdw3HnNrMJtEDg6Px8BFFpowaVnh8LjH23Va43",
  "key23": "5LGYFMKsYc8eP927x21KJJT2b8A43eeYkPnhiZQqkrzoBhqYQWHDizEeyb5tRJkouGTTChm1ezLHRLpMv4Cfi8sk",
  "key24": "2mj3XMZkKCtMUPKf41bgKyZxV5jUVtTAjEWzhcezJNE9Hd9TG4rkvXxgGeTTVehJV5zxq6ckvMQPZoiFiX4gTzJd",
  "key25": "XdEXPgh9u52jR32kHyASc9apqZpGw4om6zhy1sHD6YYtom61FWpUbv1ZsdesN4zs1efH9LS32Cmddc6sxY4bZku",
  "key26": "GFTNLXfV3SikeNQbMMd9N6oAj1HFhFgpEQafZj2E4hQ77XC62KTWrLSCjkE71MQL2iijW28HotBWrYcJEQxPVD7",
  "key27": "2zdVq4LNoouMMBUi12G6wMZSHhzTJLp4Pbr3aYcmUgqmNc4gh5LgXWC8aUj4J7aHA6o6w8BjaT5Rfnqqd3VjizNY",
  "key28": "cHivpangwzCbJdo1KoH3oGFTocSh1Gq6DKoMhEiT8rHC8ZRZHRr5ukV4C1G1sTgASBskjx9LbrMb1wHJjWCeJqY",
  "key29": "5GjfePczBNrdiaqXDcLw1KEiSJcpAjTaEVVP5hRH97TcVDDaT12NLApwPtQwpJYR6jH3daET1p9fSNeH3ohGLkUx",
  "key30": "3gjM7gVuhgrMJQBqXvayC5HXXvffZAkY6a2zyEhWMJByJqWBa7UwgLHzVsrqsqKJprsmZjEPKT3NSEvEwngaL7xg",
  "key31": "5XsafjF4J4WcKhQwkkCY534apWUkWK3ErWmA6bdJGHW11ejqzJodT24FRqnmQwhASa1acTYcp22oxkmaJ5gvhPjg",
  "key32": "2DDoZE2T7fTeqFSC42fPxFb9SMpPf4Ua1SrwZi6jcf5pSQ2ibGTBQup2ZzFH3V3EqNrmFxLid1vRPJmQEAnZT9jF",
  "key33": "3XTpp2XvLsqwJXQkiSEbPzi6fEetjD5xHqgjXaWtF95WNeNMqb6pb3hDdBmSfyen9oGfPUKxVYnUi3ahAgbEchA5",
  "key34": "66xHdxGvCMif6oCeqGUPPvKwE7fmKpUURbMGWGjE7HAzctW57ZWsbthZy86j4caSBfdEAJfe9pJ4BVoE2Tepr7DC",
  "key35": "2Q4L99Fn96gVRc4jFQJr6Rs4RQwCUAAQNaWgemPanPNxRXpLfCaJsuh61kRtmk9Wmnosq8XGGXzvtpycoDEzDv7J",
  "key36": "5FBs5XbWqa6ps8WUCPMJy14G3oAVWBLhQFwAajhkhji6o9NCUWWDQaqvCoBF6qPPo4KseYzutTYJZdP1vQC4RjxU",
  "key37": "YUfPg9dV3h89w2bsnWZHT5ij2JwThFgK1Lpi6oETKKo2Sj3C5eR4cWGz4q2uccNkQUxezVrkNqmExkss4yc8GM2",
  "key38": "338svFgehSwnuSU7PhKmtucTQhxEwjaSn1mNgNfabuBxMirrEgWbbcBRPxsFe4vH7BbSVk29BevrZivJqL3sU9tk"
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
