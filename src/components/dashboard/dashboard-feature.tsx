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
    "4JoYRJ7p5oRwHfZ8hkhsiZFAEwLQFkaDJQRNjQT28YEb1mXTNZehNJzcjAQhpxJi634PA8sYfFH7ivzUdzE52Q3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dumGtZ5fZaKPhUmueo7bxN2paz2WLnh7NdTTk45dr5e9WvrkkWggFii3tpoTZ9xcXACtWdWLoYe8XusmFHQDr64",
  "key1": "67gwHxMEdNSGu2Yysnn5fhs7uX1kuu8TWSCZ19YcAkT7D1aFv6oGxmYHrrpvMuf3jfAzjf3HQtJLsRPG8Bv5WVDA",
  "key2": "5AZMDcxjVrUpH9q62t75fmkgMMHRC4BPRvHzHRW6CnRKnAQ6kLQ3zLJJnhFwXSDp64hTdeB5thcFXkSWx24aipax",
  "key3": "61C67RLpU8GKMvNoa129zvx7PKgDNw8LfADTjDDPDP5p4saWCEVoUY7b4edC1emNwiHEPZTeAkeV6cY6K6ANZBoT",
  "key4": "bLpWotUxgRaEKf9PJr3LhcYq7WUDoNKP278unEJVyz7t2X9sjVWm9oC1zRwTvUmP4eRYvpYD9XCDWEEH8KdRGJv",
  "key5": "4Se15LCkYmY8hstaaF7UdmRfb32yMhqpV6Cv7W5yJwJNohs7U4sqoR6qFQw2F78oU7FZg4Wriqqta5Z6dtcSZKam",
  "key6": "3xBhVR4C9M3xL2x4YcKvd6GqpH9rrt9daZdUifTapSb3KgUCZFZZz2yd1X2jg9pudnhjAd1coJU6HCAJjwrRYPB2",
  "key7": "3CvkXvcUpqY3rqFCbpBN1uUq45CARus2qJXe8eVPgXSzKi9sSHU6DMwNd6X17YJTSTfTtKVXhWx6YVe5mGKnLiAQ",
  "key8": "5VvukgVrwyF3CpyL9q1WnTCUVTTCYGShVpwxwTN9HwAsL2VQBXF8XmnhWnLoRQyUpSCeBpvP3oVugPkgJM2yvqYv",
  "key9": "4cA3tXAXGv4LbihdFfWJ2qm2GnwPHHSrAgb8up1BnUx95C1zxGoeKYEgm3RfE4w76Y1d9fjJTighRbyWN9fPnNXQ",
  "key10": "izGKM2ineeydPqvg5m8y9DjF6nEPwm2GuuZWLpNXBRdVpVaovWvPN5BnWuTjsj8MzFKwGsLHa9Gdk7EhxrHSFSQ",
  "key11": "3toAnC68GxAXRAbV5q7r3aRY1pyqVtTzCv7CLpjnvookPJZxp7ZgSEm8jvC5P6kSYC9KhFRXT3c4HChRU5Aaw1Lh",
  "key12": "2z3HwtHgqVpPupQYR2fy8x8MrQVBvHCoUHQEWuQV9CNJvsq7sZ595M9uADEeyCLXdxkR6jn92RvZAimXfNkKfaLu",
  "key13": "5MKZ9hnRLYVAQvnWKhzfJwsnkyrMPgqYnSmCd4NwNC8jHGLgi8KupLHowTKtkAPBjoW6bLDkGfVAVvjF9zzEP6gZ",
  "key14": "5jWZzaNMRBWp7zprNRQbZwtp1hsqXtQRc19qMAPyocaxs8MVhMDGxtCReesMbMJ3ZsKHqarTmDGcB5yVSgRgQDsy",
  "key15": "5QHEJ4shhrxkQGw393Gyhyig34HBqVmAgJwGWsdksVcQaNaPkrYEQP1uAoUGW2hmzQf1RkR8b9i7PsABHf6RBH4b",
  "key16": "4vyxUDWuUz5YNejFeVtcPh5hEXNvp2QAW4Pdy363PRmaks8pmLP5YiojjWrsKYgxBNCnb5UFvsdg1cB6CRh9Wkg",
  "key17": "2L4EarMXxmHb2EvTBTeBY6iXDuw9LktoQZDxaDH5fexGaCPnMJbH3x3s8e3ZndzZxhMxZrxPznbqRHSt529DRmhq",
  "key18": "3885vWdoBUwt9VuS3okBTdFkHQK6wxZd7uzEwrk2EcjVSkgxnqJXJgTFv1WHbQhsrjzSg4mhey83LdK5HBXiukQh",
  "key19": "4o53aAUzbgjCCtGcWZvdiPeAzM7nN8i7LRYxpzjP3qSaLg9PyT1UfLG2J8mjq4YBmQmpPja2AsnrAtiJzLVLdnek",
  "key20": "3SVQRtRrfo7VAWr6zyv7k3brTs19RpR8uE8uz2QUz6LmK7ujZJtSLMVAdTsDGssmCdqHq3qhPYWXDznr9dye5EiE",
  "key21": "c6vZkVyPNbBVFwsd3xQa5vdF923MEjEPEytLQ852ZsKQKPPu9yoLNHh54RkfSSjFwXNVvyfQzzsuP6pBHuU9n8S",
  "key22": "rXb9LB7VHHjjARcMqGdQdeaurFcYQvofjtx8BKG6SGVmMTswZZxjqZxpKneFpqTM3LVWs2wepTQA47dqsdxKRFE",
  "key23": "2zjKuAB55r6FeWsdDbEKhqynJMKRsTZBos4eMeHEmkTKNaRduWaAFEfYtu47wtubrF5CJuMh3S8zSf8kLYGwwqWg",
  "key24": "2gU1wFE3guYvrJouSsiatCrqcXkMmnBeqCv7DVNXTAwmYCSGapV46oBCLvf8Fp2bBTJBjRiGRzZvUoSs1y4jnG5P",
  "key25": "FwfZaN3vc865q4hqwMvfV8xoTTcr9vZKCvKWXZNuqjAtQdHPspzkZrRgYnjwNNcuWkcniYqQkd95VoEZB5iWKwj",
  "key26": "4QXwHwL7B7GU173HLs5XPA4pasAQhKvtw9yeUZK8g177Xw1B8eoAre2NsRppUt71wNWbC7qTnCJnQDMPxJen1jG6",
  "key27": "yu7C9M7r7EmZRTPkqoZ2pWXrVKUX4uw2n9fFfTzx4zam5f7U3zBtQ4u1thGAkCRTjxJsRx8KSVwp27WZEte764D",
  "key28": "3TwrzQ1Qx1WeciZDtfENmjQhSo2Hq68dshECTYSywcJPqvVKEp3BkY4PTrBd84xqGFrwyR2QLm3RCvEWgfnnv1Fs",
  "key29": "42ZQGEEgrsB454Fg8RgHLf9ExPMpQyc3peUp7wm53DzaYt1NahisCSvf7CHuHpDX6RH4R5DeyKE5eY9tiRAvxNrX",
  "key30": "5Mzu6dz1mkMvYXqqGAhMSYpVAZv4WEhEXZdmmbEoDH3Z1yMcg7ZNSPnmemNkHfAM8MrvuK4oPUPDHzkhxnTyb2LD",
  "key31": "3isy2ee4pN4Y7ZjLrC3eF4qo5iqemhVgmMPQYFXHudRAnossX6MFAVS9XteUCCA6qphrP84wB3WYmR4semBRUUzg",
  "key32": "4Y371CPAnfzdvVRvytpE6thhQhWHprS6Umb263ygRLy98R8gQJHs6r7ny3AhD4etEzvJd4GZ18gnfXM9Dr4M1ESW"
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
