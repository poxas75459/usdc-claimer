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
    "23DeCbriar7zaR68MThw7moorRxwc6ombSvPeQ92x7tLT4PLvVabkFSpRKYT5p8RCiemtz9u8mvak41JwJ2XYoHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uYUXQUjwcUmuG3VEk9n4hLHBSGZjxcyHtJ7uf5WrK9fvyCyVsFbCfSWvBkU4EAFWvDSc8uxooLhP9T8EfjN8Jjs",
  "key1": "5uv6rrxaCuijV6uuy9qB35bbRwLXa8sU9PBoXz1dNqr42gfFdksWcVJsXhxjXYCYQyUQVS82uMJiDmHKvrfK9sFs",
  "key2": "3CSDkAdsMMVsh5UNDkHj3DHJmx7BUbaBQA7nsYfdy6PSCVnV43En9PsN7vY5U77nxNqhwt7zn3hqyLtBi3XFS1ZJ",
  "key3": "2h6YsYsMJpv7iPjMBvenefPboVoiRy7pnZ9CPBBxRvrX8bXYXagCgpbkFKQQxmmyTV2XmbC7qXMZSHvSQBUaqT15",
  "key4": "4Uebj6uG7UDvJ5GFZMKSMpWEFEhHAQc4HjDzjdJSajwaxKfXaPpadWDpz9v1A6TwzckkDw9naRhyV1cXbuBCpkGg",
  "key5": "5mvztsDifhW1CkKEGwM54pHh5Lf1tohgGiScokMKgJsgXLp1oZz547E9Qy9sRdbA4C9EzfXbKoMs2k4mHLXtzcQH",
  "key6": "3K6sA4jHfz24dUafyMJKC8JUHAbrpsf622pXiE8bqNpDwi77PHjVxukM1cFEcHzmrFdxcGtmZDf3EsPuoWzvJEXN",
  "key7": "3AvjQDV3RSt9p7FVzcCeJEWHZCHfUNv2tXa4N77jQopmY9v1cYQV6kfJwA1xw2RawiSsuHHmC81n9vAwddXZN9pT",
  "key8": "4iQgeuKYXstBDWUKMBGSHdppsYUiukGGUwREZ6XnD6uVd9Bw466zjZFwS483FKVAujQ1Ltnw2dDeYtD87g3rfG6E",
  "key9": "XepiUyNt5PoT2bVjM5VDmN1uxsrsX7FKDZdHrNotV6rcSRa79a4mW4vrrmz5CJKa4EcFS21yu7E2ZnXWbWhTzL4",
  "key10": "3dNBppLr2mHsqRFUJK1s6XqqX9BqBy7gv2ZigonndmhFYMruV4b8RL6jb61LSNKXj18aNteg7kPre1T6aE5LyvRW",
  "key11": "5tgDVPqD6nQ61Y5QPwd1eRQqMxJsPfKPLCx3wrKnJbrsniCo2QFyxYBDXtX4CXSz9JftHHrFXSQr9c7LVBbh4BJm",
  "key12": "2LayYFrDnio4oBNXoeQACQu9qwrA6vtNQjrgKCZ49uRiuodhtExhocAYPt8zGnEvtFCTGF6gfGqB9ZRxH5KdiMTk",
  "key13": "4aFw5z1ZbuuQX15Lwvwr5DaaW7JkJDhqMjbaRfmdvoVkVe2M8sRHHMYPbe41PdosuMoaJujcL6ohucTencvXbsM6",
  "key14": "2xec7T92cZ2AgmY5SNNC85sxQ6ufPtP2s65HTN1dZE4HJ21K79hVGppfev2iBnTcsgusVYgjMp7t1rcgUetjCb5B",
  "key15": "GFprRDjGf7EauN5mJGenXKJNeWrE7Q2KjDhJoXCZLHv8dFrK6oG4ZVhhhEHQ7L6MUc6pKKntJ4uK8xnkqhM58Ni",
  "key16": "2fbtE7vyEHcrhSCaqBenvfdq13e7DF9Wo78Eb8fBuyKbTWVopJRXFiRLXhuQjPWZeebt6kGBr9v2srzycsonMATW",
  "key17": "3gHC18EXmNwNt2KBBD1XkhfopN5MTZSkwxa1gkAS83tnQR8x2Zgjdj8ACvgFShZ68GDQNG4egvVNaLbzkW72KYY8",
  "key18": "2PGdgE1MvoLH3A5Jnc2MFAkopccYX7ZryNXwpjYjF42ofsdc3n5Mcgh6PLHJWs6hLP8qJu5RNFsQEHe29wQdz5y5",
  "key19": "4v56twW92VKQpyxbBScMVrZS2cMGQrvBpaC7iirpQVSDMfj152GSxiMMv3chNCGveyJy8Tpovp4kyVUa9umt9VBn",
  "key20": "3PCBmzpkbfGZtMrukKTAwevazLYfBM5JggAMARsxTYofwirQzQRHayoPSF3vBnya51vhpzisqGMGozUXZvtVz9Sp",
  "key21": "658H3tZV5VLPaBBAEQ7q37kyPzehwBot1wcSPjiwXUZDgtVrMi2N4eC2jnAsnD5rPBAgBuLH2uMmsRVkidqk1HaE",
  "key22": "4Fhne9LaARMMkpPziEmLq2qua7hRXrPzcv6qAzKYqtxtiKjRavsCtAcNZ7X24anXvL3PUAVpCgRccDxhRKBQy8Kp",
  "key23": "41dHy6MJuMBbVBVoXmHjWsamMUYjPC2UB2u1Xz6FeFfsjaKx6dqSgjkQHdz81oXvzjuLKLHPZ8fPXKbGjwLooQij",
  "key24": "4g2npXL1mgEQagPrTHs6jAPBe4DGKZwtTZ2CFx7Q7gEXVUPfr38ByVuoLXViQGd2w8KuY1CFCyewGBCR3kKkqp4m",
  "key25": "4njrzRjJac4txj38NXTcPxN8ioh5bCWZPYqNjBzJcKRiDgQRtt2MqN2BNddE8tinsYpjDypXpZ18dH19QSzP9DPx",
  "key26": "Xsi713urCdf3F49iGbnsEyhJZni5eBMg3yxZP8G8SFxTKeY8N1UBfNC3u1FKE4nFMKyaBRvCngzhdZMexP75wun",
  "key27": "42HbDDhTb9GrMUVwtw2z5ZrwvEoDNLY5afdbNCosBNS893D2NZK5couZsFyEobAa3ReBs7pg5aytPAdovaUNL3Cq",
  "key28": "j6ZHrMhg1FeKyydXxPvBj4AifnxvTf4pDrmuU6XqxbzGxRjFRDSNjStzjJHZ5BXyL1V8sxa2dV1dg3B3rSB5KTh",
  "key29": "4wH2rmbxNaG3ki5uG6YeHM8YfKozbzP5npk4yQDqB358hm3om8hc7z1rKYiadCrRsbzj6dCewuB7AxjGeSKoMLgp"
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
