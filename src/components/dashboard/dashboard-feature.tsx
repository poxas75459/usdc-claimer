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
    "3jhkMUfKwFVhkrERvWdnjx6kEDDvEgowAAdDvfZYMx9NFf27Y8TPS38LjtD4TUCaqcMWUPRGV5ph37kRf2vqxPJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A3tw6ZffbKTpSDpBewknNWGRiwJYhYA4pyaMQSY1rFbNdw7DrXbCbrutsyGwEen5v9My7ZjLTr881YyQq637WvT",
  "key1": "4ih1SnyeeBx4tXhuYh8PEXAaKcFHSor2QhnhQEyPQU7nJvzDXxTkHqjqrrM1p5hF4VYChPN3HEBUATAVTTJW1AEN",
  "key2": "582ZLt9oRyrEtahoM9NXkiW4rjhUzNkAGWCicCMs3gGGK9s47HDdq6dR216p818fDDRHX1h1XK4kqEX32UewfnXw",
  "key3": "2YDg9rLeNNF8ZNsHtP8y3sgeuU9VcRNDEBuLXDyFPDCU6rPCig9BMzzvtEJ7DBdqNeJ3o1PXHqZdxDTDfvx27cfT",
  "key4": "4VciCASN5uccm78r749wHNb3sC58LuFJugyszrS2tsZGpyh3n6wstCUe3tDorBAu8vvUqtPkEcGWUMVFLTiPNbbN",
  "key5": "3YQEd4SFeRKGrdzcBEp2oBuiugLbzDTn8PaMRXwXZ4JSq8EbP3crnvyebKcvq15xm8rwZGCeAcLEj2taGzA77P5p",
  "key6": "39a14xXEUoQ8kpfHydBLh3rE4tbwdD1Ti3J5QV6gQmhvWoWmCJjpG2HLkKUX5kXp9gaUo9byt4uw4J4hXZiRvtcB",
  "key7": "2wGDasC8smnFKipLzdjpbSt7Rg3voxU7y9Sw9riKDy3F5jR9LQfuxvNMGtPd68LdhWL6rEzDPoLNcJW4fmwp95Z6",
  "key8": "5UNqErXmREpfnjTLvUcC4DYUSbMT8MCM6auhj61FYrx9UuZJuQx5vSUEAaQ8T5ofYh93u69yKYTwKBtMECx8kUCJ",
  "key9": "3QCtgT4r4mXC8NsbQwgamqd1UxNJoBxpRL41vCv8HA7obRrFQK5RjMmNDzY3cMrzutahct76383Rcc3g2asdcYYS",
  "key10": "5s8tpP3mjYNBr6mAw6KFg1LptCBgMuzLpzAbHotH341m6AppwH9w85aNBbP8sb5Uy2R9VjCoSw6UHWqdwksr2N1k",
  "key11": "kDFDoh2E792Aw1kM4xngZcwTCrY1KJFM9PsAHUS1z2EPCjT6zYUjKSkHHbGm2nEy7M5XYE3aM2LqkAWapeZWj3W",
  "key12": "3WShwrMjjCcvbjya4G3iGNHzXxC9AmV5MkxD5qG6q7v1pfNxjkPDEG341BSpNx8NcGwgLNxMmKGZmwfFcwtGCvv5",
  "key13": "4hJfJDeixssnEjg7zJLSwYeCpSmpqQDernGTSKCfiv3HyUw7qa367YFaRgfgqQtHoeptniaczsCES2SFjC87DWiA",
  "key14": "3jhNpxUYNX222BAdPWJpxr6WwmyYCpsnejkggwuZc8W4Xkuti4zZ8JCCq6j6Snz6QG2UYp9kvzMCD7SY56PzwGRp",
  "key15": "31sTrMWkc1ywbDfRDa51sWPX7bZ93UhcqFtJ7qrENe8NWLg9zKvDxGsEokACDUU3dS9Vx3KbzDYwYvK2mupjKEwU",
  "key16": "3vyW6zWp9s6cYUopjxjjvfHrd49V8git2X26BcMfWLDjHCM5ceTiXnuvh4E1TvVjKuopR6ejNZLzHGceFVKUAL33",
  "key17": "5Rsb26XX9M21u1sDtMTPpNmKvhG7ecy9XcjP9n18eEgUP9UDhoSbT4nunexDZBycScboErULR12yjzs9bdUx5eKu",
  "key18": "5HVhSgKwkjco2HGvyMZKJXgFgxszdaz2gBve5MgPx6LjgvZEquqcr3LjhYy5w2KUBLKzzVhLAy7Xt2LUbpYsmB1j",
  "key19": "5V6En4UypV64FKVQzSmbceh843KbLD46CzYz8yYym63BFtx2ZNAt7RPAXmMBT3ABvxrV7koYM9MxWDCkQrhczPJL",
  "key20": "3vHGb2ofAi4kNkfrEajex7ZTt99ZkHNYvKro78pRCbyz2nsDivnXKLYD8fsbrQTKMR48ufCLyunjYZezBM9enSv1",
  "key21": "3stxUX3amyVbTbmoieJNrNy7W4n4Juzt6LXqf38Zdb4vASgriKvkkrycLEjtgv4cBJUGL2SkN2HC8EkVha3m3gNK",
  "key22": "56wcRuNjLQsfcBhqiD7ETt1EuUn63K75x8ugP7HvNnny9F7aiNQpKwkr58Fs99rsp7GPLHnBXGH8oNuhYpjHLk1F",
  "key23": "53VusXpgeK5umDzHpHpGPW9nd2okzAABWi9Tjy6JcBVYTgbxWLJqaRgWbGh5Gx1TXVhtFbK1ZGV8zTVY9QZ3uAFb",
  "key24": "34xmnqgi7XAHfw9G2LMuwpzZt8P6Zf58zXepRovC7qakfe51J3BcfwQFHgpmLh5KinGb4migzVFw2TZNLXG7LaY5",
  "key25": "3V5TFbvvsC9Gbp6iJC8BLaZDxQnw6rdMJ3arxcqLq7WJnXPHvEY29uz7986AZiikhHnTXgG1av8ZgrMF8GCiLvtb",
  "key26": "45oahKF9dv3MdHuhsgd267haE3VrEXMKcD1ZrQNqmkSxnrs5yakPTsx5sVPooJ35FP8D4bPt3CHYAcSDPDbbJXni",
  "key27": "2nEUSYqeVYSeFLprQ3ZGBeeh579oJAR73tSoFkuBkyyeZAsyrAbFtoGqawaTdSYcF5J2VopSzUuhUMdK8mZetvdd",
  "key28": "5eeA7iKib85eWZQ7fQkwrkwui6xKyssBfu6fR6Mg5PUwfe8VBHHQqGtTgz9rZxkWHZ2awQgu6iGg1EQWUvzoqg4w",
  "key29": "3iNwz4V7BM3NFXVrJVnQ43gxQrHbjhpgL5qfpzcuRcHvMd67ELnwpskHYUTCSHgq3LWGA9ft8XBjzeJiVmMtV7Fe",
  "key30": "XcejAy76ifkMy4ADe69qDsM8C1WgNGVu5uipXuutAKjscGziKauthYaFX1NTvwBSR14MXiHfWE5dxbR2c2Cbh14",
  "key31": "4ncrfZGekJdu918xBA9BLqBfs3QbdpbcdrpVqTM9pcG4LD5CDnXmdP3m513uSJUL22C5oLiNAMeuhcmkUfZtyoJG",
  "key32": "4sHXR5tS4Wsn5BC7EiPUxa1yPHWuPNDdqobxHkKKxm7rSUcYggCoXEdcHxAr13rz4pQ7Hv27TtSu9kbMQqA6siNF",
  "key33": "5714LG6HxQSGEWNYGV1j1FZ74cPDcpFuYsnuUYW3gcXwLajWfX4ewU9H2VfubFQ3gnjXSyUMQ8XeZUoarbCiBmqP",
  "key34": "3qZCSAhvpxLV1pzcCmu9CzeW7uH3JCUbxmNkgA6S3JDMcs4nBNGN3rqwB9RzKQs1ifxWtBPEyNLDaLhWrhYU2JGu",
  "key35": "FTWyJ9Wej9H4rXqMZuWuMFLdiUA7CZTBpuSeNZQ6hfqWcNShT7uTni78sjktcecEnzNtCyCcQTR4MBMaoYzJZ6m",
  "key36": "5ch1P2FYfA49nb9dUigk1bs1v1w6Fgu75SgbGct5723qGpSL82rKSxDGqM5dQ3WLvcba3v6QMfK5mQZKcvSufDFQ",
  "key37": "4tNahqLxG9ZzhTCUXdCTbtcTjtEpY3JxWjezSr9FZb3w3Nh6RbnKo8Tpzxucn65kj7ehqHxXpuPWGxJtNE79uGTH"
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
