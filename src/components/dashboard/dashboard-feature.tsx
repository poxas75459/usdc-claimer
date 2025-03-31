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
    "yap9U4BV9gVCfrovexFAbRb6y5i42azWcYHyM4vx6y1mm1JZFP4c7ZTrZytWZYZddGxUMNkhojzbcmmHpXFoYYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49iz9UWJduoH3S1BbZabFYMikz6Q5sBZQTMgqLqyFWT1aCehDgavuii2Ye828KYnEEmWGTyqwBsMmTNt4KSmrYBQ",
  "key1": "4UgQtkMtLy6M98h6BDDBxPYFQ9yGx2KbTiBMgDZvgCTUdNZTnfgXr2JqjUJYXwyeFHYNmK6WZLEzBMfojvZjQH7i",
  "key2": "2LuHYXwFuD1dVapfzZFgrtdcuzf9FQ6wK84x8hf1wBdEjiBaHdjWdtCCWYKiychUUqFsfiLYi3XesS7eYAV3Qn43",
  "key3": "2tyJABAubJkVeWJFVquKMVxqag821QLHg8zT6BagvZUbr26mzwLrBa7yDt9fcDAeUzkVMRHdP4gppE1foWC8FPom",
  "key4": "4UKo2m6eXD86kPJmVYyVZcu7QcvPPPVDaiHWGJHtiBNexBxqkyqC3MQK8MtxSPK2XFNv6KUbHcQKTqV1MWLJtEXt",
  "key5": "3DaMpaZNeTdZsW517dftwMUBgXHE6SkKyxR388FJyJW8bU7MFEt1A5YuTDQtB6NRsn8LW87rdJPGLQeKcYZst4vs",
  "key6": "3zS9VeeDyFC9RCNm79gTPqUiMB3PwaC2x5u9shiEeK9PJ7AuLCgpg39eYQWyWb7nkva35ogLY1e4misSk4h4gjci",
  "key7": "2QsmV7bBujDfLvGczQriyHCCSAxjs8ejJ9BFnXjvcJFBB9yRziYuitcParSV5nhkfBxSXnW98McDfjQZg89jKHsa",
  "key8": "4wPUnozozh4kj2SCnSoyZD9YK16mSRp7a5WTht9XR79f4s7maiY99fWhqGJbUhgjepVyTy45MrbJxq35Lta6AFvZ",
  "key9": "4DXV5ZgJyqE6FuWg2T91bRWnJHgWvDDphrbiWQ2MZr4FC3h9CDeaPjtsqXMET6jkTUv1DGvioUxjAYpX5p55W3dt",
  "key10": "3bUmzvxF3DtErWHGkCn2FFkxQg4dwf2tt4ogngB4xmf2P3qfhpKUtVSdDmTrkXAfb6BVfaLpK4ya4gzSBaaiTNYi",
  "key11": "5ED2Xw8XKpEJuGV8cXAWy63rkt9rAvn3ozFo9nmkJYxUD5u9gXRpiRA2cAxMix9xGbCAxuN9WZnCvQrR6nX1SrZ5",
  "key12": "51EW1xENyhGJdKkU1VeU9E85Eev26BjHwMPP8aAThiFAo8sakkVcoZWUAvZH6pDSP4iLFqrYEfc3m9KqG4tBa2wU",
  "key13": "km2jnuCv9m8rpXoWM76DjkWLjXphBhrRxomiHpNnWPcNbxWoi71ADs5SFjN4qMg7gpz1GRgk4eRVjoAXDqsERsi",
  "key14": "5E4WWdJmGUCcChKd8P4vwmYjFjYZEYS7zfudeh72nxeduUaScvAsAvaeQxL96fZBiBHYoJEvP3Y6mHCKwQ5uipJA",
  "key15": "417vz1gTyeS82TBVzsEw5DmgYdNbVRzwVsc6BXhqa14v6VifZh9bTewy8nJrP92Dh6yMANH9rSHtFb48TWKmpy2E",
  "key16": "41PYyydByMH3eQNKQ77UnSYnq6BLD5EKSiA38Be12XmM2xfsb7rPykkQTjdAJ4dwRCihcd6rwFUcN7oAREde9HsL",
  "key17": "3K3rGRxWijfNtkkmRCYxFozq11DganSmFvYT17o7m16SK8S4kSXBMECRbm4xh1CnyLTPEq2jjoUwfJTFdqLq5zzn",
  "key18": "2y1UjqcNvvFnLAQuX8E68B3EgK5TAr3KeWaddT3BNVA7uHiMReiwB4NrkohQYH7yzbUkA3Ky6SUVvTG8DyoS3gFo",
  "key19": "53TUxFExLoVshSyh33rUqUxEcbS96PQz2BQq3hUXrTTvszWU3AHfSjLadaX2DmHVXS34Sk27yHrppNVUCS8FGPok",
  "key20": "WtcSSpeJJWkCRnAvxEJTWqdPefjkgCNjEfbJpUNxP8A34JKt3Agap6FaaBoTi1NwR95fRZWAirF3HJiDR9a3Riy",
  "key21": "3Guo94RLM5RhDywQtUDnV366tRKVGipUALhVUNpGuwgrjnsetSX7FB1DbhSVKMhas2TD6gHr1LVcmmGHGQCDTHCm",
  "key22": "3ZX9RV3jVTw7ht2pWPxreHZ6PvTMoDrZ8D7MFcMxZfsK5nf8B4wjs9TgrUYbhBmb1t2SBPaf9zmRLx4tPJmF18Rs",
  "key23": "UMvXpLVAm6ipCBkDKqaPwxfQrHRfsE7s8QLneTWhSCQwPNkzwny5UXEwZje8YQFXNfTq8Dn4WYfs3nMfrphsqFn",
  "key24": "5aYjBBPfFzE3y52sNTNUJfXiQMSqzLLwQRBBrE75Pn4KSRLNggDCqHrP9zmjq4Gga3BNjEBVT8KGxJVJjTLpJqfB"
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
