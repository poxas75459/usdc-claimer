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
    "bfuseSpDcLxAcz1TKaWwQfWcakGM7H83cNUBsyD6YqgFpVGC68dFcCWjqwUevfDJFh3yCBLy3vvnHd1aQ5amu6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JJ8jpwR76dZbXoxttPdYf1xUENwsX2TgEhrWKn3Wkjhf4vDXxttK8X4vm4Lzv3bATDeni2shjDVrRMPw96upyyq",
  "key1": "onTbY1qr9nQ8eGVAtcjPuLrpoAu3rYTxyfvKuKVW6i2esS3sprnVzaKgnq4fN82bgg2BGFn1vx6TcFGUYyWjvzu",
  "key2": "5UZRPDKY3hUtc5CroJfJC4UXo2pbac591SuyYBAcLqq57bniuHkx2dJy3edyhvW2754cKDGuSVhpxaURj2bRZvjS",
  "key3": "tG7qER2HwahxySjs5MpAkUtGuCe7yXGM88hWiFdf9Y29Y2KHDrAZmrmY58VJie8sZYTUfMNstddvaQF1iekg8s5",
  "key4": "28oXF97AYqJZeEdLAM8oykFQXacfMaDmx2pqvHEgwnUKMyjp4rEZbHhZ57JPidkhsF1fZMxp9gLMoJ9WgHLq6xUN",
  "key5": "HEsexzeCEuJxembQ5j9y1ckczKCsD1c3VRNCsiUd2UDHo7wmA2FcnZsoNegDSXQvyaPx8bwQrpe8KzJWeVCJAKG",
  "key6": "65zB1h3jqjwzpVefUuUkowneUkxC6yP5sbWY47YWnFYBRLUzmuenJtk4xpcQZDxzYEMY6H3hU9xvwHppGvRrYJyV",
  "key7": "4irBAJRNg1Z1Y8LVMjpzV8XWY9D4t7cukP3RWhofPGmk2kGBvbFTZZ6LSyR6461ok5Cut7JwCPfEpydcBkDea5V5",
  "key8": "4aZFn5hcpjfcNSSfJxK7Cs7kdKV4ozQjvAfcTWUoArS1XCRd8NRnwoo5MAKXw5W2RymTm9Cc4ffevDhQDJK7Wb23",
  "key9": "4hqUD6LLiRfCB2Pz5Pao3xvZkQubrX9jUk71ftozsbD3Awnn7cXnPF7UcoP16xXLxxthMup45Xj4SHKJg35QjZxy",
  "key10": "3H6WrkfoWHprrAXVGrQc6KFB6RwZ4sgkDAs5QtRr9ZEr6UMucvSnCkb2Lv1zZAej6aPHMQfCR2ctsZsPbKx8XrgZ",
  "key11": "5Z5ijKx4vnC2F5xEiq9NGPPrgtyLjEPd2uDracepkmYfW1W9np6n53jbBZPpaipMWZ2Lr9EsfKYUBkHemggQedKN",
  "key12": "2tVWZywrgzUhunxgRH33Z2tMmrhovXN672egt5u5NGpEHcqkp6wcUh4ucFZ459DcZa3JQPPCwU1HN6txPu53Qoci",
  "key13": "4QfD42Z4UkUq9n7228QzDhqNcK5Akva5PmMYpm9aweWi73cttdeyGVheakuae9tNhsUDVC2jtrZjnft9CV9oqV2h",
  "key14": "oYBZHLPjM8HLWCCPPgt1tZFoMS5TKnPUfkRKu7sYW9gqn47Pch8LowyYG5RG6QjQBKKwxSPY6QDDZfcp4DyGGBC",
  "key15": "PcfieZPkTL4oBN6KuVJ8m34Cr7vERmaMcqGuizp6wWpsQRWeB4qLdst6t2PWKiRSf7bsscQ1TvTUzagsNvRearG",
  "key16": "4FGDuAnRnyufBnSAQujYEFxmcSczm2H8ff2nd6EjPFHhUdN96W7EqySBXM3nMSTyGzdmiu69Qj2fT32bHPnhpCBW",
  "key17": "sEibtqCgHjyyqAa4joxjyFmUqmNwJoyw1T8mZGxY2xj8com2QfmN9DfMZ5JJmfmBXwPgNcpseSBRct8jMNw4nv8",
  "key18": "3PGETKzdadV3SPryq32MF28y2mwCcKUi9ztdugSwLHPVkyR7iRYHTfAdcPYMhP5SsuR6aSCCxJNz6HDR8qq3EjRW",
  "key19": "TgMh3RVFLaQQb2cAi5zc8bVW6JT5sYau2u3z6Y97FGfCnLvVLiCQGAEjQfSeyRiBgQU1TCnnNEnFFSoVppaLXiN",
  "key20": "5DiLMj85TTZM3afW7SFN5BDJKoxVYzsoh5JtJDFfFjoRG1DGPHALEaBgAB5xZVGjBp7iQWFvAwCbrgtRZRwbmJQa",
  "key21": "61PDbpnUuqTTYZCAgCz92XhhmujJgg9XmDF4hyn794GnPcgFjiTLZvTMKjMCgFDrmu184RmKomN275CNc2Gw4CMV",
  "key22": "5Wyyp2DgNgHPLFhNwSo112GCJGqPPYmEkdY3V3L5rCfjX11UMPxkKvHuzGo7K1eLZ8bNvVWsRc9ddWcQ9DZLm3mL",
  "key23": "5STPEABEWjdzquiiWbdq4xakbEH8oiHQYB4WHVPqQqsgBkZfXggUobW3aJaTxPH8Mj6YWreHbUPh7PtjG1idug7s",
  "key24": "2RV7tF92tvTC6y3se1vVV19e9PaT68q4EEv3t5MFNbPgzcKmGXjgJQS55tewBp6xUtD8tBhe236vUX4PoPfoF96M"
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
