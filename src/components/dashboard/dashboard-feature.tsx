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
    "5JWiJ1MsbQ3HWSJYPvodm7gHyFNJA97CfgJPcwhWsDwsnkHASExXQKGyBMtMeC1UWZFKhWuuyaRB965RWGiddXM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vrwWvYMjiMUWhiuPykvXWEprNkCmqdbbieZ8vJ6h4WULc2qCiy5jt2ZqLXXUFy6dREbTXE9eT1qc3NUfYmRDiLv",
  "key1": "4hoH6yfBT8PqXDJ6oKSncuGBf7c6gRSjcudKoehzhzcNMVKZ8CtAeF3esa1egBFpUWTc7WkMSyz6kMcnsoxL6Kae",
  "key2": "2mKWa7mkHpn4FjJ13RbSPFZkf3j7gEFXSYHtBMcXgFG4k4ArxowHiJidxF4xE7yGKu1agqJ3xekL4dvaMvC852s7",
  "key3": "3trXhZf3w2qYmuoa69zAJqkpD3mhpL3gyGyC1S3mAvLq3VTRCNBpQdq3PizKTKou1omoV5rqZzM57yKXpXqRzd35",
  "key4": "34V6mYz2kHRsqYXS6UsHXoNghSj7JvufXYsmWzWP7RtMuFXXBYRq4MH9nN1g9ViCyk2ULDHgSr87JdU99dVTc8b7",
  "key5": "22xoLAqq4ASnS78uGyqRmdiDm246xJ7MXMtTQnaAM29nYszJETzCQJb83xxAG2Q6mLP2H5qb3tSBFNEvnuKhpu3j",
  "key6": "5cLJifJp9d7tUfANLBk72WubCNMxWgwvDTEPJKA5WKNMG9pV8c1ctoooe4hWodd4BMUG1gi26D9Hpo1hyR55aH7j",
  "key7": "tgsHpAehKJxYPwzUXpHRYfKv6DtBn2ruW21k1JQwPt5e6S86nbHYJp7ExqohMeG955u1tjXN9hfCL2trEcKgVcU",
  "key8": "2bWNLXb37esHuz38ed8uQRsgciByJ8QsGtrdF8gJwrwoTwV6EyMkUm3z1nvYX6z7Ms28ToMuApnX3PHTLyQf4xub",
  "key9": "5f8JqWKaWZZpE1nTrvrWbWiAGvDwPzUZUULWKFvj8T1k4s8dfPwKHV1bWtfxVABVekgLCU2LkznMLbmowCCDdsE3",
  "key10": "4niA1XDXU8tpsSRdDTuoLvvaHy9ULgvLtDrG4q7F5RSkyhd3DqmWG5PtjDtnQKdF43zwCSsZSXDcX3EJzd5aUmcb",
  "key11": "5WN6BhHBkZeb6Qtu8t14PKPaBT4UbrueZseNgMvm8ocBmN6ohJ6m82HTH6AL8NDKhxxUMD9UtDwrPjZzj6cv6TqF",
  "key12": "4FWS4hLc3U9RRV26wRnL1ytMREPg6NfxTHr64sQGnLc4BLWjCWnXv2ghLHG3KWippo2BUCzeKKkPCxu88EVggZV8",
  "key13": "2r2Gt9ukfiL8yL4eav7tUf2Qu5PLpEqbC8uU6Tm7EAHa2ygD9PJR9ntiCZKvQcDyuKo5yteFN4TSBEvg62tHV7ug",
  "key14": "4xoN9xD3hg7hzFUBqC6dZ1p5gDdpeTD3B1iECfmMgHbNHyTM8zTzHeN7VHCtTGaNRSXqpTC8bKfpRGeBafNCY85S",
  "key15": "4nmgofz3hSSTqm55HqszUsjYpAzRWabNQVAeQY7bgnk4QZ3qD6Q8VoRPEPW6GPGNgHKUJFAqfVUi7aubvurDvGGT",
  "key16": "2nwfhMW9iw5ycZJHTCTjode1bewVTEoE2EPVzCWRUZFVgKXTg1cDESrWxYHt36chtBpmzjy6GNpSmyTVLfyWM5gC",
  "key17": "4jKwt1jUiNPktiE8GsEss52oJr5CS6Hii95P8exKZMRM9X3oJk4PdRdAGaNaA6XXgbRd3ezTpbAyVra9fWrWAose",
  "key18": "txkFMkqVpxQV4EHEs9RPRgTQ6Yxjf5snNQotomXU9rmUuPQoJgUf8bMzSmVeBCiUp3qbGQCowNgsTmUDa1HVcrN",
  "key19": "v38b37QsurwhUUAwobVQ7sgKkN9zBeQbERX74TD8jGfRJrrPK9HKa4fameUuwGa6i1zMdADHP9LjoK9xPgorvGJ",
  "key20": "56m9JqxYgFZGTTUtWAc7T2druucPfUbABz51aSdo4CnL5LJvhkCdz2XvYRTJPLug3oGzFiVdEuq5HjwHyqE3w2Cf",
  "key21": "4PvqGoNxsj2s2HcM6mYTEvDh3sw5draVzMG19QdQTLD8noER7R16bxNusD8fS19yQccddpoBxcW56MUbcHfhPcUZ",
  "key22": "3h7GhJGFRzG7H3pcyXhxSpHZtxSn8gQDXBs7TGV7JbBr16LnUevXPeaEfKjU1EtUwQtc4dcAtj5CLeY7ESVHXEhU",
  "key23": "3svYibnGxdkEzkWjDDwPYfDNAsastEbF2Ly6UkoY5wPijY6vfDqZXBhmJPaYZBGot5CE51uJ9FXSBHJQD1qjq1BV",
  "key24": "5qShVsx3UyBepY3CF892BTKvoNHKHEs5i38PRAGPLe7yuA4xMk6Rx6Wh673wUwZWzCmr1dqVYfFxANHBJATQ82kw",
  "key25": "5hi2srr2CozdLvyVoMiE2Xow5mmBfWDZmKwAXRWE7EGFr46o8cRMtm7jfNLgo6aDiQRA4rpc6eqbogPADrvR4uCk",
  "key26": "4DHTQjGw2tUdPaWgivggyTTtTMGirnU8LJYQ7t4x4aX7xGrxfAmJSVwvmQgnmVYM3aA7Hxkk56sH29zzANd8q9EC",
  "key27": "X4yNnZcx46BBMTJJkknjKKL32F45FY91A9VYHLXoEKSUR28xoAHTQegdf9PWaXZ4w3pjdF8JUEmLNVJZezWMW4s",
  "key28": "vLtaRtBEQctJSDUrKPn9dkhj9XWuD7H6L2BAAgvDCCDQfoVX4xfoorZAGGMisfmthTZEzkDC3rG11UMeTFDrZJ1",
  "key29": "2gGUzqSQQS2sGkE68PVvNN5xiZMC5mTYCkGHwEbpGntoQErKe4XCrC2JLYpBRq9rZuWaKbDtfMXV7mFrPQQcm3sT",
  "key30": "3oZz73ZG6kUbTCoPAWNMHostBShA2oaBNK83kP3DW4erAHmrMk1JsQycPbCZ5k2626swBMqZjSJ3x4D6CHqjXoP",
  "key31": "oDWeJ3u5ef2LWHSA878VGWh1Q7X6ky42eGkABPDmgbvcWru6UeHKEAgS6txSThdoNzTsG38vqN8nkxbpgN44uiv"
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
