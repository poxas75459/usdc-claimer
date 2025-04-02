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
    "26s5crVosSp7VpPUW7td8y97xMgHZv55AqdmmVsDgC8ka3YioPyEUMccsp3ZNYbHNJh5SW4MDx8AiqpBdCxgLrH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vERkuDjJauLxb7VXGEpvzkgn3U1qpSLdPNogB33SjYdtrM37ePhZjVPdf6x1saUhhzCowbwQxfBv3tTwcsRTJbi",
  "key1": "26Ny4jj9MS7QKsK821TJq5s3TRvkA1eWAXrivr6VrBkZsvVNRJdFEj14LD1uGkxjZ4aL1XzkVYfDAPR9y55bkeFo",
  "key2": "3MF1S2nV9S4RBqUFweuVHrrUEBHLCRFzRPXrtC4qjKQn4rnXB1RRUHbGRW3AyjGjMwXWVGRNU1wHVAnJYV5QAwu9",
  "key3": "5fAZNMYTd1PSDPfivynfw4jKyJw4Ccf1brNMY1EqwBfBAKZ4iUJPXYiDR1QnuMvSBzoGcy8TWagJHie6mgE2i3em",
  "key4": "5QdSgY9hAXpdMrrS62V691tvNMmdZtCcyn7LnBqaPp2AHezNbFoSk6o68PpkyeZM1SWJE3RCdz5f3p9JQBmcLXNC",
  "key5": "4XJq68Ypp7hBKLC8YXKWQGCMu2AsmkaCXBXXn9bjdsMxbWWb3NTSwCxBacLotsYQAxux1d2ebDis2YFzPb2ahEnk",
  "key6": "4hypMJKnig13VrqxHBHGPtpjy15yYavQiJU1EXn55MqHAqxEfWEcibLZCbmZ1mKv9P1a9mMFB1D1hiaLpVPJQTDu",
  "key7": "128nW55Fo6XJTEeibjz7otMcGAaZV6wGCPaAxNRXPVmz4khPTtCRm5o4tenE9PiUARZbShhQcocBviePiLwbtqxU",
  "key8": "1UvopN5grWu954S7vpsxPbwa3QZDmFMNfRP7Uvu6HD1fhRfUKscFKKVEQAvZyLd6D1bynwqFg8HDt5jaywv94sg",
  "key9": "3PkN3YtqFQK9kcbrDxS96gHVb5QbX8udW6Jtij6NR92qMZtpN49eaWLqEK41JwvbfhvtmzHeXdhP1jcJ61gKaxRq",
  "key10": "1UtfJFLvvG35WSkjs5XR4DP7JUELHh6SgLqL78dxg4ekxJuhwL7S8RPxBR37Bj755gLHySVxec7ZKpDc8J4dHem",
  "key11": "4xBzWrwRMXvmfZFcd6rHSsLpTs9XfiJNeJ1h7pp67gJdie65gsbqgcPW9fkf5bDimShotQvxxxdtuAE4iwA5KhaM",
  "key12": "2nfHEzPFYE39zUEVf2oK5LvbeDP1L9wioRsczPVe1vR3eXK8NuZRRGkaV5tVV7H6HYY5zmDtu6qnCP2tWT8dPNho",
  "key13": "iGWYAgx2kKWJPUgMKbfZkZAA2PaRJpUVFcm3d9VkTiVqM9WhWbAATgRUoDpfWKQ82Bt3aY3co6UpDYBUcy5ptCi",
  "key14": "4cwG4imsGX6w39HSqwfL9nM3gVYBn8UJ1FXQHgnvrPcfmEx4uCGdyUx2GqeSUHUkVGwVynv86ViDxau9d1abVorx",
  "key15": "44krtVHGBXGvUncrQMpQ1BhW6xQJbNBj5K75V3D6QNegLBLpgW894b4GU3cxCc5zH43vBVyVMpkAu4Y18ZSnkpRB",
  "key16": "3gHunPbjMeFyoad5RJsACQcAqjnpXhSP1exbFVnPaTabNYnbk2Bg3vfZenRNxkp24cBLX5Y1BnjtVRu39WiEZGUD",
  "key17": "56yaqGAy1Fafho4UmCBES1QrJUR873VdLBhr1KTuL7vnpwLscaY6AdXM6J1vNGLpYJeGL3t1o3VhFgVsAZ6k7Nj5",
  "key18": "2djc6YREdLitgLr3w6D8d1KcAF2SFTaVu35ymkFdGUQP75fZhZh9Yn3iJQtW5yftC1pfeWmU7vw8gheZCZ5rPmFY",
  "key19": "rKkWbmmoDeeYgcPtecyEPmkjmcMJrGkAJADRTyNPBYiace9YQ8M3dFSKHA4tNAYjKWT2rH47rTeYPmVuNKv7u3H",
  "key20": "33Y1M1uLkhM2C5AV4nJy5jDS5drddnQNDDtSdDmLVYGDCLeSKwx4bBk4HCLR9VAvdjPhNHvyBJDvPNxZwHuePsbn",
  "key21": "3k5k3v7jFqnrKdD8bp57qvtKoUqqD5znZu4GjvXhqn47Zyc3WeqXowTrWPvYPn4sc9Cj9UhaUq6F8meujKm7QRzu",
  "key22": "4am59Kfm6gLZVXUb9HgTq8Lbz2fDUKJZwFeESNmfW84JRpqmoZXFteuaYzoBwCtMqEP3jMaQQdjjTPFrvKohuvVC",
  "key23": "4u3qDYiqJFuMutDN7afw9G1CfewV6SuQszuJQeUDrfESBvsxcUvhvK3eiNZVgVUaX1dMahRXdx8WBVQ7ZD5A7A4g",
  "key24": "3U35kM9asHUTNkQVB8jo7mgdBsZtqzqZGNpKbo1Ss7XooRMRNXsFTuLMD9438ny1GtETpQdbqdG6EYZts12L587B",
  "key25": "5yYsxqjovSKokuDnbiyUuStgCQoiPihfcGhAVgoLXSHNMh48vcd34o1PP1S6B3WZp7W6TuhPNkmKWb62WRxuZpMr",
  "key26": "3SJ4Ejurv2scEmxoJrgefQaLTTvPSvhXtoewziufAKrCHtAn27x2GKcRaGAB64qFzdXnazuxDAW83ukK3DEfXH7V",
  "key27": "3bMNKSrZcdvbima474kV3Jd1mGyWA26QSt4F38c46384S1mSru2KWE4bjpyksJJfcGdpm2GGFVJhUUipCSwvEurc",
  "key28": "2bsYSkuzJzRYyafGSyy762Zqkd1guwhDdXAonpwCYVBiUpgdgdtE8ez4acKZozcjfWC9A4qEGfx5ZUfKdH8aNTvP",
  "key29": "4bK3M74sS4JT7A2UMxayVW3W2V1xFRCQKUsCfUrSteb5fD4SL1NmSYvucAYmba2Xjinm2Tbc8SnhmkcNbYzGUFyb",
  "key30": "4NKMBaFnGbC9BYxqgVfi2XsKJd1cfNPWUkt97RyfK47vUHH6x2c4jRzm3gVQunxsxBsEMcXfjKWCmQ6JbrY2M3Vr"
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
