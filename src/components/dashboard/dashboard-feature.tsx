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
    "FjFma3K1CeUPFaCZQm8nnAFPHZqCXXzCnrdWQ9D2ck5SagNG54CLhRFmsqEs2Y5gF3ZKsB8rHG3S93bURjT7Xae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FKpGnFDceNsHLMNg64pVCkQDv4GQmx3jHMegKknkX9y7rCzwixcto4bwbJfxEKmWddzXVTQKQapeKZEg83ft3iW",
  "key1": "34jFLaiV1rAVb9Cbq3SwNPirKoyTVy4negGx9b78He27eEpcXFr2nhzs1WSFXurj4em7oMT5fnzDGtdjjSLL9txb",
  "key2": "59SGc5SidH2vs4WNYhpiQn9zNxKEXyAPfhrajwgWYVcHSydux3J2sAd5rwvDQDz2mhygohYSbXbQzgU5ynqYrLfz",
  "key3": "fERitRNwV9JwFtM526G1dMfufAtCTBYqws7zEZJBrLSBrQvLwowQWuUvWMaxtu9j791NWFVyT7uT4cYgPZuxXp9",
  "key4": "2RE4wnKMyH3S9NGG5qarmD1R8t7RFyppn2RNWxguTfP8JZeyp6wJzdXih6Jxm9cv1BJACzWs6zHEKyvxXiEUyg2R",
  "key5": "3qZuDVajvCd6eNgnfXSbQ2c9oUgUaHaZasGNRpQe5FRP3rYe16Ju1sNJX2z6UWQTJoz8B8ZYrdhWUQFyHQ2eZWkj",
  "key6": "3r6DVwMPgsRVHuJhdt1V1vkgVvhKmtvXychysjoLPiPZZxoLwaHLA9iX7FZxcqT2KcWcH8Gv6N73KJQ9FecSbQv5",
  "key7": "TrEMh2Em2cZzT7KqZwhFtD7Lny87P6F6pNtQFPn128BdpMjYU3i8yGmTjXoqevPW1muZhQUQSeFkmcW9jCMkKRS",
  "key8": "7hTSERuF1e2AGkY4jAvcJVLCjXS3iWDTx7XTxwySx2ELRLv7fon8ViiQwcNdShpKE4iadynLPjH753TrkcnVi1g",
  "key9": "5M6rM1cZiA5KPUTiU4Z5KJXgDoMrt3KU6jPqpFWxdkkdpy2Av1Ki88TdbWdJpHzzRypZfCRWVmVXwWroGvT96jYn",
  "key10": "2YBj8ZB5jY8mmA7UmuAVwKhiN2U1zHoE8zjYmbCgDBTnhouGJkstdsWueUDhRDDXonb9NYKvSfY7rdKnSzr5mQCa",
  "key11": "3G881Wqm38gwzzX81Jy9VufdpMdwsSWzkXAyic5FYEu9Xh4H8Nwmn4Znb1Xo2gx21uYhMkpHoDVqDqTx56yUsfjA",
  "key12": "1xxVK1oPGcQwuPXkeYpSnBPHKtdDXFJTGuPbnMQvGgxyNMKXaDN727MGx9JJEFid2c5to7d1RZxFcCfu6tYR88i",
  "key13": "4Xfijb9cLLBuR7ET4oBofNVaAXtEJ7SnZpCp6Huoq9sKdpDe6Mfh3HRRAAS6ziUbNfC9cnFPYUcVBKUCuqo1ydHj",
  "key14": "2JV4GTPd3sin2LakdBE1XhcA7uT9ZrCMRShU1dCGgUXCTuGKUC2F35Cyaj91pQ2CkytmnqggAcwAQjAe8nRuxbBM",
  "key15": "4p2WbBd6mioCMsgJU71Yoi9qQeEqh9hjbMgwf7JGjZqFjfs2SuUwHkd7qDVFbdS13tuo6gskEWmwnkfQCWRvKbrx",
  "key16": "oKEcvS2YG9Piu1XUe2ouVyftLAPfAUvUpqoTqyk8X5GyRQTUVmBFym5FHtwCxGNw5R9Sa51siJWbxpcZEunbu3C",
  "key17": "XyJ2QE2tjvw2pXYkN5biq6dwcfMnhCyKp5WVyKV2SL9wUXYZjQBz56kYD1UJ4NDg4VTsomxQNUzzWBEz1uoBqdj",
  "key18": "4iDC8MakCTHJHxvbzrmCXEPhPHJuDSmBQctiSTD4EHFAZMh4VpbcgVHJuuarGnB4e6Eiz2BSvCzT8pVFBr3J4umX",
  "key19": "3d9ankE71mkE3avAZrkutv9Be6M39vB2P9BR12MGGXt3DzNArgHh6JDvv8xZeQA93yhnCzMwSBLj7ktKUWktUzSN",
  "key20": "27aAgqdUZRPL2TWw6wHqHJHAF1G9Ph9YP8GjkWYeh78Z8Xaj8zAGgfmFDkwc1gmP6JaXahwaNUkyRNR1rnFN7mpq",
  "key21": "4eY1wsbQMq9GY1JzHwMaNTckVZCeEmgoTyNVrxrXiS6xxayYwSMesKH8ZZHENTy2PcZrKFfXQSeaNEJcaYoDg9dB",
  "key22": "B965nKaffSkYeoh88rxnGdy9wmoVgxMmz3uoS66vgGXqc7PEzQtcKXo7oAchvjtqeRvTDn4YcfTixAeEowoUmQo",
  "key23": "5MYADLRyTzTc5qKotht1hry8MdZVeh8cavSUDvomZyqV4FreFhWePnMxbRtM3kaJCZfxVNEgehCEWWPdcB1gFmHZ",
  "key24": "5HG6MRnUD7rwA2fT3Drei2knX8kWshhzh8tLZHz4zRD35hQ8p2dzHq7zHFpy4MZkNLUy2ugDm6qkofaa9NYWoPZ4",
  "key25": "5NtFC1ktgE4FszVCyfXr2tvqGnX4Mee3x5SXaLqwPvWCQvKs1pGLqQ2kFkUpmuEyFfbeah6muXBsTuXogFMc1B2p",
  "key26": "44sAXkKF16L1CNjAza2n1zn7Syh5aaVqE4ABMPyKXUhxEw9y7jkNJVFEvjnNYMJ1NyKkHpeuCXG11vUpVaScA4Pe"
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
