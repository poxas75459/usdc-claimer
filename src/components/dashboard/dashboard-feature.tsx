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
    "2DX7BRfpZ7QPQpDQbVVCn5VRt1W17rJauqJTyCC4uEQZtYfPShokx1sYcwMs5QTma3Ta96xR6JmAzT6VXyXAcGAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PpDmQjd1LLH4CcYGYw6dft3tP6XUaechAGXp59NMm6dUpn3eHNe7b9hAdpao666kdPCx7zrfLoP7UUanHpDozBL",
  "key1": "3kDG7BXuTCm5TLgbxyDaGSyhFyiMaGxHiYaEza7oQWYmrjA8Gi5C8t4DuLnme6SNLRKQefDnRniL2qXv73iHLhCN",
  "key2": "5Y8GumqxqEXvDfMEVukA7CvAnRhPWErn3fCTPgnrDNCatknZiEp6w3fsmeZVKbcLteZdCam9aK8g66VtgQ5Tmknw",
  "key3": "2mWKyJJ8UujH7MR9BJz1gCFkEwYrUGLAZMt8L2CEC8hgoNWeZifyPUJ71UiDYhgqojFrgb2Crx5Gq6FvfcCLzB1r",
  "key4": "5KTbRBF3uNw4Er5itDMn8NM1ZTKaEi5QDbW2qaHMi5axvGrbtveh7YMKhDbfV4vXuNu7AVWUJErAGfJnfHZZZ7Ts",
  "key5": "2YXzFenKt489fQ4HZLKVVHoWnxDqAcrUFnc3hhuDAWaoy69d2oSqUpo1EzMeJwqMY6sXqUY1dPaXy5DaTE3BFmcu",
  "key6": "3D1nPQBhFukL76jbQRQnbb8sodX3Yugzw5J9JRgD5Z3NREaubmgZTAT9UcZEgn78eapGeSx2h68qWv73SBJi5o93",
  "key7": "3dpYfxjUtpeCQTMy7YD1AfN9S5Qcjc7urAnHJ4P56BAMiYiZv6K41CbvrCQidijTBr1A9E3Q6N9jNNFQ1RLRMzfg",
  "key8": "2EM9Gcd3n72PgYk4ttxQL2UN4cerPtmBSdcXZ1P4uAESiMzZ88hniUFbP1XuriajzeUM4Fx5DRaNt4CXLUaVCmsK",
  "key9": "5Y3qaiST1idMnA7RL8RK4y6utpbAyfpQQenCNuMz8gDS6FfAKtxsas1ten8zNSu69da9bj5WQUbKpwUkXEfUUskc",
  "key10": "2rRXDaduX7TRCrekJcgNB3uG4MytUirwCF3Hnm2ZFXgqYZiLSVYzxA9EZKNSbijpf2Zp4r4Rfx3SivNqnpTmNuh7",
  "key11": "3Xwc5vuXsdQdFHtjUaMpkgeHAN2711jP1F6HzN2Z2R416fXJf9BXjAmoEzrna4W9XQ33YDWytwtxUtQYz8DXn2VG",
  "key12": "3KGeJgpn2KGE1KKAS1AvaEmdm7ThnFjzPTEr5syNvJzRVU5sAEAC3y385nJcCZFo8Udqaekpgr9WM5V1dwujevt4",
  "key13": "j7xPcZcRLt9hNGLqqi1e34S8PsqdKgqfjhmhoDHLP4Dy4KzzLZ6Fwfxrxy84FXCaDAjGUGnuYXqHnckD2ZAt5k1",
  "key14": "2DyB468oQ4K2wYHwRj7ZduFBk1jqdHW435zpFqtdvjnhRAQeP2nscS7QroLNMQ2iWE3dUpiSV4AZnSjjNQvsC5BK",
  "key15": "3MiddX5z7tA82DdU8miEshFSuvUCKtz1Bbz6GTpiLqnjw38C4wSYFr92CMCD9AWayhtf5gCz7ZXcZUFi2ebWDb5Q",
  "key16": "GQEoeKCSrduS769KqDzZGs4JrSVCVqmqbBuQCVPNpEBu582iC4zaSDnrSGDufcPKZUt3wmTHAdVcLAjwLqozrZC",
  "key17": "3vcFKCr5NWvrHErq7csrRe4uAPkqAEW2idVP8A59vkcuzp69628bTvuEqhLqbBoRx1X5aqGWAWSu33SMj8324xga",
  "key18": "29x2acwN4prESWNNw2KrpzFxwBGgq5iESKHU9MhhgcXTCLLRz5pnVQmGJ2QqLLoxMNkgpXisaKu99h7EYSHUwrPs",
  "key19": "66dKS5yd6mCdbNSkyCGXUpphWUv397BZvg9JXZpyzqur4S7Pgew7jh4Upt1fMH8K76HdEHfAaSH2PQfVriESKcG",
  "key20": "ZVAX9h2FCrn6cymVVaXvc41gu6Xig4oqZS9haWztahgmsohzwCLQwDYHPSpoRRRbu2L4ubsbCiEJUapkeDKvtv7",
  "key21": "4WJ8RH4wxTVVtw56AeYYvuUB1Cr7RDbQp1UMeAiP1nnjncQTyKUhS6cXtsar5ebam4kFpXdh1qTanYkqgSHBgY9D",
  "key22": "3ybgXNH1im5UmLEAscxz92epFzcsHC6vePkkq2CfS4oBiBnjBjSEPpBXnePe9ikzmEbpAQuL2PxvEjbHX8GNG2tz",
  "key23": "5i5P7ZjDujyNw9qbJZzg2mY37nMKVYoVALhoQeFPPpSo8KABxCbS4sRBGyoj5o3DbaAWgQrw79nMfwYq2gP3JaDv",
  "key24": "KSjkgNXYdj95xgmHM1erHZPCAbkLyFhobHmmh6W3VDLKgCZd71S5qz5uRm7xh7B3EaVSLd153fxbi1Hh1a5gFkv"
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
