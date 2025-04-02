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
    "4QbrDTFRcMTCdywGS7yiHse3eJyPyJJ2cTcN8T3KofPkQra69x9Tqmww48DgsfHx84bmpPC6CX5ZuWoPkFtkyFpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z9QpWCniVDAoMcyrrBLzgMB5Va3TYQFHPLQceWTfYE3PteU56u61eHF6RNf5VY6ZfACSYiBhrTBCxkE6rXN4kBW",
  "key1": "3xYLjK7X9yrsUVG9XgFchsvW64vALwcUerfMn5Bw5vdipDPkHrRToozvM81cHR2DVwRB1LkT4Ghvrs8F3WA6hbXs",
  "key2": "335QEWn78uGuSnXiLsSGL4BaVj1vLsbu2R81mPM3oPYe5JsmWR4NddbchPWYibAbM3FTM5TQtDXBn4jtGZvaQrYR",
  "key3": "4S4Nxxru1RgMJU5CcdfCaFf4yFuhukCDvizaWzaYxNZFbnT1vK3Nt9vVQ5opoHq4PShu3mdke6moRdKuCCRqovrD",
  "key4": "4nm8xBxG7DmnMYbihQ43ZZ5ndKkcsMhSvocKYcG1dRwLfby7QaT5bAszWeyHDA98FtNabmsq8Bjq2XzzGHrX3nvH",
  "key5": "4e7tJXo8eHS3wWFTyXsTgiFrqYr8SVF2xBbqCxTDqvc8QyL8bqpCiBbaUMEjHnegQbmRMq5h6BbCVwSTiq1evB3C",
  "key6": "2Ai6weoxBTcDfu49bUPx3oXGocUMGLd13FCjWMQozGbkyULAsYmmZ5aHHyaTkyRTAKADj4y5ajnD9ypx7siARbJU",
  "key7": "3ZsB2h4HHyHQVMmXTuGJ8sAfuaaD7WQB7RKbmpqKyQDP735VM7VDZ9dv2oS6bSY5fWAxbhaCrmHf7APYf8PrnSBg",
  "key8": "kSeYFqaUXSAqJaQ5duRGjm2SK7GR73945rJsxGFM9yuy99reLWsurEe2U1uh7Sj4KxSaeWpv7SS9qicvKvnL8kj",
  "key9": "4tUXD59LqV6Td6wUDT1qAFjaAmkG5w3bDPN7PMHazfx9txQFjxks8Dz46KLZcdiV4h54rofcSHrMMDXTvkVBTYeG",
  "key10": "E7nNaWpkLHQJ7GCdH4WfaV4KX34CHYy5sj6hJcVEdfktaZrKguSU6te5jzXvL8tcsGnLMxs7TBoPqvASCZxmguQ",
  "key11": "4yL7TDvwsGFqxVbdQojQ4qWYCsEai46iPVKuXHWcWwJCRryuAGcdjvYuTPSGPoohMpzp5Ry7Jj7yBnjhE8DdYDzK",
  "key12": "67FYCupwwrVdgAzHiFMbQyYH59wghzkLMtrjTNmFzPg7t4DHWiFsX6BGN26ZpUR3e1LeFZzYAPTggxpVKv6jWSCW",
  "key13": "4jdyKqySsdiKqKi3DAYitjh69zNnatfCxqDQnuqE7GvoDXQoKAzzVtRvRdxhBdHtGPtDSnkPzvGt8jNE9S9RJL43",
  "key14": "zUgznjSDbdEV7uZEwC83pDpHrf3CdnEgzZgjNMCaAceh35dJF1mTnvUkA5w5y9fNt4ys7sY4iBGbg1TDCwHGL9v",
  "key15": "2PbdyZqMAQLVuTzAEFw5RS3whWQydpj5FK4FXWc6z6CwLEkSjGMj4psgpLuBXdxmHwvB43SXyyBa13g1oBJAPmGJ",
  "key16": "3jgUDgq6esDBDaafoPDxhzx4Sii691vxNLBUnpwvjp3ZPUxxzCcyRVr5WtJ8rCfCcNQa2eg22rfHTc8qCbciVPRa",
  "key17": "29qK8sb7NBRzeYxJS5LvyTZaWWJ3Dx1Wcoqzj2y3Dtj55ChK3hB7JqSPL6xRkqPc1nsG4xa4pUDLyXurjRoNnEeZ",
  "key18": "2haXfhndLw38RJyYsfhBiy3YcCQvm52tttYSbNyXfii1iZqYYdRmHaPEm21JoneLynxhCKVjxJixm6bjW2JzMUf6",
  "key19": "2N269XpbD2yYrSSRES4tCMaJpWfA9itDdix888BLgHTBTXmi5iGAAbsFvwhiDtGR2w49ffyC4MLTBnYykeiZtvro",
  "key20": "3GwAXgfPQnyscK5dhSxxU6XFJ4xBQmQxHKwQysXDjVeqPg1UEJvJ68w7xD9ik9T1FrpNCjdjXcN8umm7x5rE6LbZ",
  "key21": "3QnEc2dr3joeWsUDM6hcbdxG3AF7VpZi5aiJU76n5VeH5XafAFMRzfxQZvryLvH63xzLncSPPRLAkwVrkD4tygVY",
  "key22": "5EgFkLcWCA3JLZMATq6B9pqjyxeo3yh7Qsa3rVPCq1nNMELH51c4bhAiwLMBnQhjZX3JBWR9zx8z4XfYsZe7SqcL",
  "key23": "sVLCJ52hQhwQE8XV9hXotTYE57zcDXJpy5Rad8brENwpx7EvQhCXnPagzNYZuUur98wZxvF6Qccu4rf3yoDxFgc",
  "key24": "4rS12DsU2A9y6jD3q5BjwhG3T45c5RZ1C37rXPoqfQ4xEho7RXUUivH6uXA834NPPZtgnW7zcksSGf15H5emuPD8"
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
