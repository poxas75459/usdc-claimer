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
    "3UiLhavpJAsrzEwSUWMm141M5eHgEpDFumk3zHoaRHi4G2H5Ch9FeFFPXNfvZCit475VNn2hRMmBLQxDAdb8bPQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XEz48mGanbdx2CwhYQLD9zGkwzCHu5JsK56SHB9Q4hy8yPwnxWXFTPDpWJsv6duHVrZjEnguS9gTyta29QSPBUK",
  "key1": "4HsLA7YSWkYSEe4d67VYLNRtRKTRfekdU2ZFcZueZJrZ6evGDo27njusAPkrRrar2X1ai6V4JQjhyWhtCoYYSJ1n",
  "key2": "4cnxBAYewCuLRH31zV4VK2xb9BEJA9FqmiJwJB729qT2HcKDZSjEgPhve6UfrKmvp4SXfkVMHqS9oca4uZ5qivKu",
  "key3": "4onmcjr5su6r2wcEkBdoU6chG7M1HVmzEN2Fp8tGQUAK1LznT92fTBKXYQj9reB8VeGLzR9QPgKfSmyKykNyhbLY",
  "key4": "SqAQKPRE5oE5K3ZzW9mePRToeV6PXdJWq2jgU2ccc99emzc7EJUwgK4dCSkwbrbA1m7UQtJLUwEAJxwjdkWKVcX",
  "key5": "27rszcLL4AfaeXCf9nanPeDJufc6eTC6CYCEgthkwkWop5R7bNGKxxinteKSRufvzpF2B7qo6Qh2mkcz82QCvSth",
  "key6": "by83afbM3xg1MLwn7WYJxZCmQFMVD8oC6XouNsZ4ot5TxiGMFFruAD75FhEwSgM5QuQC6LX6pyJ5YKcggPJRFzi",
  "key7": "5ZA4z4edK9aXZf6XinU8fVvLZVSeamPFLgrCGcHx2DmEAgUnTW62kVkhDFEGsjyAw3GPpaN3iWzFZXwuipDDggdm",
  "key8": "29duBBz2jsJC2in1gfTdEJLswzP8SJxJwekvaSkxs6fboJg3Tt8hANo7J8YQJwAkQaBpQmjmT16vnvmFbGRwqj4k",
  "key9": "2has4SDyNLznJgZDHve1NntcQwppXrFqambptpZ76cMdJPWwJsXdLYhwbprzA5AzfAx9KpW4e74ceJkDarSwjVA1",
  "key10": "5K2VqQpXESD1Xg5LWDNjHgFcWzDPVyMrxptHc3J4eRrCTSxRRjoiXW3gF48fJb9YopoWs9ncMyFVRvbe5tv6ujYs",
  "key11": "5Jvi4AC4vdnyaxkDbHKUMw3rcUogAEMxAvQxyWAFr5bLHyzuwWfaFSEBDerFKwpdHF1p9STUF9D331ouFb8d94C1",
  "key12": "2aCM4ZWTDPueQdu4XqXEydaZVHGekRbUDrUoQ9HJTBgtfJ4KTHMKcskCruPULKShDiCazjjg9VDKsRjGZpyuRU8H",
  "key13": "4iGRsW9bGEBzSkKMgrw37bc6fxQhb33qL1kLMcXUAwqvGsu17aLfENPg4JFrsa46NxvyCdzgMWTyBsbgJgo5f5bd",
  "key14": "3hsNMN2SQVaoKzRFZoUXsGCNbpaU6nV9Vt9avYkm5XUTWDG6NmoWzL1Gd7CCe7FRKko3H5vAFXdMxh9GT4oagVbh",
  "key15": "2xDbC9RJkAdo8D3e8AJNAwNRvbkxfsQQESjLD4vNvKHXqyFQw22RSUMQ3PY93PJGbhz291HKX3QWS4jpM2iFKu3r",
  "key16": "2bj29EiTY3BUYeMbpC6cF4JhiLk7HGxcJwhfYxhLXYTMgRU97ZFPXgzqqkiu3Ew8jARLmkrTMS11DXWiXxFBikjK",
  "key17": "jkmKo3xz31LKa4SgPpwJZhmXpcKqvuy2uAqBHCX3ZHZMPSx6mbyAB51qkGsuCcgx8oq47ij4NsWzJbP7F7FLyUa",
  "key18": "4ebqM19ZnsCNxMuJHaQAgye1MC1DJQZREggZ3qRTmP9j25kcNi7393fSnh9tk4Yc4FbzeEzHpu2EXdhqS2ZXpigs",
  "key19": "2W4KrVyYGxhi4xK3n4rcqqxqLZKr72iNkaaaExsqc52uTQJaiv6GJ9EuhAranFJ2WRxZVTYj7bgxX7BuP8TyxctS",
  "key20": "L3w29nasJs1Ze6xowsL1G8CPDbdcWGTiPhbt38Lghx9suCjKUwV6CSkQ6KJCfwiBFD9RUuvtoCNWMn9VK1ESwra",
  "key21": "AFHEtD8L4j3N7N3TkZY59gF6UBhjpBvQCMi5cenJzmeuAixXXBChm5YvHQpjfL3XqRTsawti2xt4azoKbKVobKH",
  "key22": "3ucbY6bC9BaC5gBCG2e9Jm3vbm7VvAf9wWJZMZtGWWpHCq9NKjYoVzv9ukJ3SGpQW72ugto4jbzyKihB2gKQMUum",
  "key23": "2PBGjQo1M4unDfuUgsHQsdjkN9j2rYgU9e2PfjcgMjNjM9vY4cgLXUzG9FP1EfzrWayByVGm4mPNNFYCvbiopxk1",
  "key24": "4MaxzVDQ5w366jJoUW5Tg9ZZNYhWsGWRQyVd3a976jjdLr6d8Xn4PKmF16fCqdwRW5pLriyD4nhJzdWag41Xug4v"
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
