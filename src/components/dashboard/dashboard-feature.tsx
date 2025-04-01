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
    "4hAG41QAt3tTEiJRPLFm5kz5LN3bMYKTVFo9UJfjvDsHMt5NQnYuXMGuEPKJghqfPUKYbGeSSfGMBwWiSgDWuDA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CYtPMyvbFLv9pX5wt2D4GFfbwVR3gWj3jZrpER9rKuPb2LurBopkf4N8ozwrfxnsuj7sfbzhsSD29iCx9HRVRUm",
  "key1": "3fFxw9URDboYazaGCqp9w6vKbQrqr4mcoisiwv1t8tcAbyJTotNxVKiGcVScQivexKe2LA5c4zefJS3BjaMLEq5v",
  "key2": "38v65De3PV2zV22wR8n55AZXf9LvhT44eoqFChCQBWmjHzsAt1PveHk6mGsrRSpPEVhzouY6BKKAhQzYNQBiraxu",
  "key3": "3mAE8qgEznbLGHq3ZoXah9UMWbLoLDww9DZ2EPSLFZgPeUwZKYuUpXZTcPuEXjm96rDPGHhMS5eiWM6EpxK4Uxsx",
  "key4": "5B8jTxX3tNyC9YAm8cnFtNKh9hKgGouJPvx7SLvij9Y69o4kdv64ENnZ1EcEyuFKTyHvu7mK9iuE6gbc6vS4qrEn",
  "key5": "4dgqYyPc4VmtTjS8mKFgG6R4WvAh6B7SmkC1K1WrzpEadVBELDjxXmmvwUzVHyNSiJfA2auf8c63YqEcTN2DRyMo",
  "key6": "3C8zWx78TH3vsMLzwtxw8nJpSBJNu4xyMBrAZ85xddqWtsneJFi3vxu7GQxGR9FUXJKRAfLMNmN8x9etJCc26qjV",
  "key7": "2GAXRMGxCvUTd3BzMRWEBVuMdHQbtiU9TkcJWiFs2WtZEbj71adnQBiipQyHqJ1WaAXKNq4pnrzmC9P4qapu88rS",
  "key8": "2LoKNRhXrzjjdQBbwhb8uRhntEi1ZEs12LtaHh9zE1G7W7XC4gpVW7nsAnXyzRo96CyDREtACb63GgrGMrJfYjny",
  "key9": "3zh7zvESobe6gdhftwWyrDoCSmG5hAvitV1XuVqDBMQgb8hkZmueC1vKdM557mADRJWxcxsBqx2K4CYjCRKrLaX5",
  "key10": "5jvHJHXnyNr27Lv8mgi5UsR1wFqpBx2JnjJozLFEBfMt1CDcxPavjCMRCWzjENNPHoixmFHiXJyYXfLteW3XUUND",
  "key11": "5pt8ZkiE1VKXrk63R1dD9Q1USJundS2EGataGQRrNLxAozfPaY7ex1mP822maLcnbfjg8qm1oAfxC8ySpgLxVMZK",
  "key12": "41QKjQtDwAn1vrMvQQ98ZqEhscfL88un6rxN5DhGMqWjyHwibqfZ347Gqek1eht6aosxX7mT5p1nHUEBj4QgRBMy",
  "key13": "2PNYzszdpXSnJy5q5Kb4ja3B3CpNoDUHbAkvNxtcUXBoT3GBN9ug2qzJAsM4VFWUCxrpu39bD8C5PTb8eiddqvzx",
  "key14": "k3eeCmAv4FFg8tY93nQp3UpudSNL8djerCm9YQMXDG735UXoNeZxhHwCHvBaKDiYEkMVY5AGzL423hgy8WcomuJ",
  "key15": "3imwQPLTU9d1XyGpE1syt9ghBGwTyrm4miifYyeD3gZUWFitCWofopFHpxEzDFoP3oJX2Aa9T8HohJZteSXTUEYH",
  "key16": "2E8vnL5Lf6jFjbBCBca8fwEWtJvdSXabLM5QxXwochu5nTN85YU79dJ77jKBqZPn82kYcv8SuRfcfJdeJZ5JB1cs",
  "key17": "5EAS3e4BGQgDTNKHkapSw23vVeu83XVv2KmSgwC68fRWuXmCezrsgoJg4JfYtVhhF5EX2seC1ZjPy4FiBb4dqFAL",
  "key18": "5eMGRoHUGw3MFz3dbR1YYYFY3K5eepYNBw7MJpBLUx9esCnre7KcTJvpEi2wHPHbwtrrs4oWfNJAS4SV258A2GPV",
  "key19": "hviRVfVtQXV7r8DDEUx4zhdmXcAs8cCxLrYtLJNz8rtSfVQdLMKH5FBbJKi3cLRwfh9VY7FWUQ3QSEBuZPXnvSa",
  "key20": "5VmswtqicFMV9vaUqFV29GQtNKAN4REq2EUeEQxPJA2ePzptSTdyYcxRgghkcPBhbPRufFswEwZv7VcKchHAthB4",
  "key21": "61dF9PKcfYSSakYVoWqmG4HenbQGvTkq8fRRKGT4yUdeJdy62pyPqED53msgJPwob67rK7Avajm2w2usXNsAXEY9",
  "key22": "4bguJPuZcHcwZ7xqYa5nbRtnWVVZuax3vedGvkdrquh9zTuvR3kEQCeeksfdcjo7Mw3KzJ9NTSE3mWSFrLCkBW24",
  "key23": "RV7Et6XYQWpWpMPZAmHW4UY88WkaC24LBfSK8h9B6J3JA2bajkVeoKSxHLficL54gAKXWSkAQHdZirRz2LEw8AD",
  "key24": "3kEZ5xT4Rkx8RaY1pKRNjCDERcoVxnvtYQt7HPAyT7T5Nv1tgLwv7YhkroudzDtJCj2aGCFtp2Fg5Tj9d2eCw9Nz",
  "key25": "RkHmusXKBStdrJLQmzhSk7LJpcZRWuV8vooSM1XFQqhZQ1nQa9qCW1D4ZUKuWfsck5rc578C5g9TdbS5tFSnBJG",
  "key26": "5F1YF12APd46jk8yQAqdVxYkX9h1tNVYRtYgkyvKKSet9PAKyLdrVSfPCS6xs6BmCPRt3xkc1GjkwKRhwToyzoRF",
  "key27": "vZDWUgDjRf7BbDKhM2pH9fc3mJTz4rVURp98puAsPxNX2ckMkAe5NEg4JX4zrvhDJHJNCPysaWEXBEur4APxruG",
  "key28": "Lu8sG41r11VtDRg5KMxMDMjuC5NRHT8gvqL11BEwMFL6cTFaTWxYP7bWGd9EBRksZTE9oLbL1ko4LHdmkKqrmLs",
  "key29": "5NT5gXsCPSxsJKQ7Fp1nYjJsJxdBHtUbqLWTkKeqMcVBrogrkcm48M7RHyxRNHEmjVyA9BJwBCvWMHxdwegGJHXx",
  "key30": "4LpSsY5fWgjHCZhDfhTZbeacrAyPvgRZEC66PRR8BJhV4BcqoZuhuGw9sjaaGEzbaxngKBx1bGPX29RjMgmiQHsB",
  "key31": "3NWLW2KTHUCSvj8Lb7bTGeo9qdM5fK5cdWRF1SScMTMe2jcXjFn8f2ePj43ew3rmxzmukCQyMMjBLG3Z9dG4tmZP",
  "key32": "5FDdeyy1xFUw6KpwgXnbpbmj6698Vqesp83KXLYFeiBMAHvUij3hWhgcmxScXR9kzPxsVGe953egxB7FdVfCPYYJ",
  "key33": "pE6HsibmDBpuCxXKtvQDMuLTzz9sUEhFDF48z6jngKUmbfUSc4wnWoUtpSYRhvD1JX61ZZ2C2Uz73hBRavjo7ua",
  "key34": "4htr627xn2QG6CnYkjFh7uQbJHeXpXh56dJfNJKVnXw6cZCnUTDfe549VLZTdMMk2GCipt9cwx49TrvncYdELUJB",
  "key35": "2fFUvKWY3g83KFTHPgSKWwscSDtv6m3aR9LqXkxK7AGd2jnhQXdupBXYyVRiN3Dauggv2cZwtUEy5zAvXr6UF9SB",
  "key36": "5QzjSUTx8pYFJeHuKFiTzt6e6hHJHKTLasnjE7Dg4SDtekuftRxd12kgUtn25GcFZTzXqo5fqEukdHtMrbGeGAhH",
  "key37": "43cvyHNh8NbV1Rg2kkmPft92LFrqpHUmsVZVP5jFzGHNEZ2Q8qnGjXCT9bVfQnkRxEgBz2nuAYXidXhjN49BEhB2",
  "key38": "3zWCpmx3bgNhRBhjjMubdQCLQpzyVAVn8X4feiAQBek1gCa23z6hfLBqqFdJaAQBieW4pZcLYZoa3V3N14zjLSkP",
  "key39": "4a71A48kFGd1xEET5cv9s8EuD4dR5rM74tps4BCH2GEHAUVfRZS7MCYdK4q5BqKSifoogcQtSSiFux91WeMHDW5c",
  "key40": "2aVgKuMvzhr8G7NQCzKPrkV8jW9FDvgLE2KCk6AKmLD5y6DJQKeQuv3rgpPrcCz33yKozGeeqgEAGi4sN8shkwEE",
  "key41": "vsnamqhdiTjt1mS5sYfaowG71r3DLQzVMQyoFQUirevLnYQiZwZbuPpYaHPmY4iTdoeKXaVXbs9kefMrbpm34SQ",
  "key42": "3xjc3iD9yfoVZGe9g2Ld7pRAWczxXaR9mnV8Yr4VwucT4FDJgeZgH5w45r8ZLYoeQyakdqzbxbQTuG51DLW7PJSK",
  "key43": "3Nggp6BURqhaD5kVEyN22piYnEKztC9vuD8HKukC9e3a2HekBg5ptBKZgLBR38kzqse2u74wyu1RE9QVaXaZwd7E",
  "key44": "3LgDb4qFLB9zhyonPBnsAWWRrjR51b1YiZ2xP5JS3wCBhK4Ta4m5Vdkurm7pW7p5hMtKP7cKWR2fp6pyKPB1N9Bq",
  "key45": "2vepDU3RXT1QiUoPHRexwhrvAKEwyNt1KD77mkrH1hE5UTGXC1fZ8msmVuEAJso3TvFn33n8h3TFDBXcF54eobK5",
  "key46": "Bn1HDEQkkCsJnP3kRTNMEuY31tw27k4fTSvgYnbHREwvu4SoFT1owCnNUhTij7pBqoyaV4ea91PHhgo6FQDXis1",
  "key47": "vKeQfCS6t2nwSRh3vBjWUCcT3DYorXDt6X3PiAA4x9RXLQ84f41Q6mUKotcT6HTQraXSp9CKuNQH1gUDUkFVUWK",
  "key48": "hnEemv5gGhPJYzWFUrgziPCjTJrV7YgPtq8KA14dSrzoPwzLPqDsDSSBMuaK75HvrfvGZVAPDvKUFB87ErdPvgM"
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
