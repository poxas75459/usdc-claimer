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
    "4K3zzK3NmW9Q36S85HR4NNid8wetGoNghCoQVZiRoELSsZMbytpPW27XMpL3oXJCBbKyUdugvrFWw9jLWFLxYPza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23UGeHSbBnmfFLK31wLkpo9RG1WjuK5kBWEkRXMrquHp65f2EXGcAa6BBof3AiKiYc8R2x3p2ZRuePjAUgftH7dW",
  "key1": "4sSiMQ9KXvKGFRkw4L21cqPaoNgYKuDRYNt5y5sKx4wZWn2p3rkPUFTexXDQdCCaTqyYmDurTpBi6Mfdnnrr1wPW",
  "key2": "3Tq6YZjbjRUKvpGqcXKD7PpSzVnGWae1FgBNo9xt78nnfR4gxbr3QusjcEDyJaugvxWhxs42dX9KJb64znNtPv5C",
  "key3": "5b9bG8ka4KaN6Q9wpuJ2RxWwozC8Gey7NCbRdwSBqyR2yeoCUBkRP4t6BqTP3TaB1RGTJBZ9KxavuWXe5VGjJpt6",
  "key4": "4c5DDe1zicBiFPs1iwWMQQmGupYeKohsxj45LSFr9tZjJtWhhGhTZTMKXdpwbUq7XH7wE6w8pmBrbWoCEK8FWFP1",
  "key5": "412sTdfNVoSNeiYR1cHMeuuaydhmG1r7rQDD57rCTop1Af4bG49RT14LZmngCDv1rHfQo3kUPsdeZufR5Q5qaXVj",
  "key6": "eaux8wSPUHbjEpvujuv76eapeE9wao5WxiBmvvr6vwzewX7GrymJTBMtaTHs5576NR3jHedSPc7bTfKAT2Gqv3S",
  "key7": "4429VunKf1SmvTGiE3Q7HVJiNFYE3cqit8byuq8VRnSHJSa1ZHXqqjmSk59ZZo5WRswL3Go4dAxoTeWuUWpYpt1G",
  "key8": "4RivZ5XfN8btk6HsG4DWeoAYyQDFMDJBsCRCZLcYs8r2vcfDXJZbew6p6tKToASJKy8ocds1cwKSX1bPLZWRYh3k",
  "key9": "5iezdbnLHSJn8dU4XfGrg9wbTCRVX2Rhx9XFpYyB2G7Q2TyDMZFxmJdb8G7XDCYFNWdzhPTN1qN2sJCoxUy3LAui",
  "key10": "2bGXFXUjXSExbXZYZNDuTpVDTinTfTPViJzsasMmWJXAyXbgXNyzp1u3B1wFnxmXvv114YuWr3bgWLiWnp2eq2kk",
  "key11": "3gfgboYKmPRvEEGjRnBhuggJoL8FfTWnEnMvCrUd9SEcCzF1TRsAEV563gkkDitQsqrRLPCBg4YBKLiFyFtbCTq",
  "key12": "5hf4XNfcJVxV8XQawa4mS84AgykngcUonhXhSepw7oxDgZR3Ubq6CKdp2vbstLXtnqqqZeTxbGSQESEwEPgAwJSV",
  "key13": "UBb4DjZcENC8JKSx5y848EkEGZueYnUe3NebGBGV7WD461t7Gga76XAX3ehBEC6WVCzuHinpbbVg8zoeUbuLZUg",
  "key14": "Ppz8vJdvsjwPesWeJyYvY2SmA5g9uoo9m1X3E1TD6EWkKaoJrFkxFNAJafC7VEfhAKRvnqLW957zh9wZqYmFiDM",
  "key15": "2P7jTZ1mrjqdDJkyBUcC6L9XkQGbuGj5Yp7es7M7Wjmx12P7u8gBWRF7gHNMwk8A3QnSf1HSHLD2xjgvjXQAqLbp",
  "key16": "4anUXdfbzJW9ytj6i2X6RtnqrharJWDmvgWvkgXVPpeq21gTSiqDUem1xSAxpXbb7eDZDnnFLZHCTtSTMS1PGVwA",
  "key17": "2pxXFv8DejjTtGqf8Sipht8cxUbUHffCYQif5h9kXYxQ2c4icUSqgmfGW4kGebDQEhvViwj7xhodHhxteZz8eyap",
  "key18": "5WKAzRVZ9iEV9SuCcoYMpgCjYn9i3rMyT5VNkTgEVwWzseGwCAWgDPXCQNRmx7BzUdif3vLFnRPTbGdqAJZKBk33",
  "key19": "2BhyefLrX1M9WQFbsH9xVgLvPrqyAAEnpgBL6tzavS1DLoFQFC8CLLWKT3L5GfJFzby7YHoC5WWcntkR8z7XD5r1",
  "key20": "eNzmMjxQBjMtbK4gANYsgAaQyCpscfbgm3UkpWjaqonqpPVUTRegfLtywvJ5VeTjgCFsBteaRarPryL3cWYvJWU",
  "key21": "vkQNynuCymfTbWboDSnqNsWvar5YvEVmXN2SsU1XD2TARh9AeoKt8c5GjAniCDBxqpR2ep9FsNeU2wGHNzSgVbE",
  "key22": "3yXbXCEbt4oZcCPvsxbekEfYxfFGAEryWzvTYtUKRDqoVsc3icWDX6orSgNFxYXSqgk32J6WPvRSMfzmUTUkKL4Y",
  "key23": "j8QMotfytHiEue2v5baw4SSbsQ5fWQJkDmHWsDCqkSKCPSntoQm2JiuFhnA4AwRZ7ktBbTeBtRciKFYsr96QHE3",
  "key24": "T9m4prBHHZEDjkJExehh2z9NMqGDzQCqm6GSWWZBdWnfAVtnkqW7iJzaBGHn3utnVMZxMeoBHUefAdHEsomB9az",
  "key25": "4z2osnj4DyA3bRmtAVhZL4VxPisBg1pCSs2K9RGpohvNZhan4Vs6V3XsadJvvQQfqtKLFAd6hu39zPrAuzTPtWxm",
  "key26": "4wYQVcbFbSqzdYmXE3vRtWv3oEproskHgAEpQgSEBKcPNxfEy3wBunnojv95fgCs6WRHLBmqduFT1xLSXMTRse1i"
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
