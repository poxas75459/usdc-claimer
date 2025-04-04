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
    "5XC5cCq9fLMQAaEUJ9vQ9kpaFEC19uNULACt78WGeyyYwjEvaVaUTTVdTi5DyxUAG25v9f9NhCWtWkL5WGpPNBHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XowttPPKpe8CGMwwe8n5xptvqxej518TEmPtjBbuHnjqifmKmbvaZfj6yP99ViKdh9sGhm6g4qN8JRRXvo7RKzM",
  "key1": "3HDt2wp5zK3BwDvM3xkdVanjJXF6D14EYekZB9qGQNqPdwyVXQNzfVyDD2ATdUUFPWuRDA5wiSRm7mv41W3A3sv8",
  "key2": "5FZBgG3zJTpnrm41gy6thNEDE7nC8N37te3Ei7yoVPfsvZ6J6ZduVkWcMyhhQjVoq64zsMLxQyZWinATjdGGKRYS",
  "key3": "4SUHx7GCzVsxMNQEb4Uajqbxo7D5K6BmdmsCfpSR92GkDSBZfiUtJ4f99p418NxMZwCYRhwZDjy3ViSFk7HwmxKh",
  "key4": "3Zdp7fXbUU2r8rQ1WZcGRAzFbwezigx9ey8Eaeu56EffvZFnAV2uLNC5enRNBjnME1k8hwXyi3HU2TvBicCLkEqw",
  "key5": "2sPu6XsipVdpkR1Pt5smpP2DQ5vjzTgYsGcRm7EWPGfSSqwFHEsRtqyGwTRr3EWkFzjG3C1kbYzJmxvzZf5ygg8H",
  "key6": "5ywWjFg1BRtZ39cmue7pBiqdEcxPTcv8fLMXJx66vpyGL2YV5bjUCNA4MG7s2DZJxUdwPpgL7D9mDVVgSi339TGG",
  "key7": "DRngr4TGvztxtKEfZnouR5huVHFQqtztn2q8rDo16q8xy8wDD5tNCiVNVMG9i1z6DRCU39LudyEcAnQgvMwHkEr",
  "key8": "67RZT92Uyh7G8meYc1ygj3GaiCZWmM2DEiEwKs6cJ3JzSfatoyPnFtsf7isAbUu9EHzFzuFy6nsCL2cGz2DLTWsg",
  "key9": "3k7sPZPJsekBpX1PqzoG9cvcecXBS1eZFhou7F3DLfafxJGTnorq3qKSpC3oJ5SSNNUCBiH8zrJ368kx4BZoLyfm",
  "key10": "4QEtRGcRxo3DwwSEx3zzRu1hHGXUn49TVyzsP9bypRZekbBnG9K6ZSpnyp6ELsB9A4AoatNM2L5v3SsvyNznMGx7",
  "key11": "4K6DrYz6h4WbijmfNCYDhoq1TNq4sUuFgT8GDuf9vkVUQKjit2bpoumGoeG6hwTANGk244YkBvdrK41CizCacdh1",
  "key12": "5HvSfAMKY1uDE1DYyPKDHtiXbyCQ2nQpAfowRdE2xqBjRRitHggkHe78mruNSm75ayNBdZV8Q1gqZr9hG74v9apU",
  "key13": "2R7idBiqNH5N6n9eqBVD9q8uuPHUhompFkYncgieCKV2zmMTATDHBYP1qrcKeRedqmEfq2Ls9T6oNLefTmn66Mqs",
  "key14": "5Dx94mMRT1WCQfx7pFF7j5mixGcrU1aWxe9oRXFVPjUFcsnZpQvyGRsVExDMvsT8b5AsMGgV9qJVPbXP5iMBouTo",
  "key15": "4CWnkvcXcBdrQaEf2EsNKPSoeo2uDwmcbteE37iyAJnYQytFXQ4YRVpMDFYa87MDfvZ2BmFtRJYvNuXFsEg94K2p",
  "key16": "2hZdLT9UVsAaRgP3FRgtswRGXv5and12gNsij1jVH7WRFKytBTCKvLNrFfBZaMnLeHkcLcZy3h8iURopFUTqycSZ",
  "key17": "47xaVQ7bqqFg2ZsgF5AhyzPCFPay6pcQmBR1rnwubf8RVSYm2a56HyKEzB5tGtcpSRDqxBNVc26jjokVrhzVPDA7",
  "key18": "4SxJnVCwJ9fC8CimMs6mBC4tjZ2mNRHFChhHJVuiPSMqXXKksajhYadAgwDN2Y28X7WfNPGu4Ucp2MPvz2Nr1Hqb",
  "key19": "3sKH7PEYR4VBCrGokVaDqELVLLwG3ZGbWmZ7tvD5q7Makcid167zdKs5nPcpLAx1ZVi7mrhiwPMi1PiRcQxdiyAQ",
  "key20": "4Zvgjd1fubecWFNVCqF2sREo61CJDvybHMZBSYMEMsJRcRX2sGLb7DXSVbPoJuGDG2ppAtGmA1Zx5dKaL7ZLouZF",
  "key21": "55KJLK99sxa5cBZVZUYC2KDgHcoG5kCtg3hN6agT6W31fy4djQy1uqnKxpUEGJwT5tK6trZ1ssGP4NaP3oJ4uiiY",
  "key22": "5bjaiV91wtCbqbsz6B88vc7qGMXWjmCKwKbT2SVBVWZdGECBPkDCqJ5qD8rgGTa8WmUQ1bokpWqc8jCQcZ1TCgku",
  "key23": "2hyj1AzwrwpeGV2qVmXVt5J7gxraxQH7e9cBg5bee6KVgwr6fN8Z5pPq5A2kp2HYjeYM4ZkHnpCLigo6J47pDBLy",
  "key24": "4rzYLEx7Dc1zRuT16ZxQpCYUjwNN2UraUPKADW3iemZnmFupjna32dbme1oUDVYa7bjGWYbGJeuz1xK8iYut8aAT"
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
