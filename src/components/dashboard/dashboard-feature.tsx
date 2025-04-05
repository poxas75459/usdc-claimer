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
    "4QH3Pnj29tphrpV1c1822EeVieYRD94Ay7GHsbiVuEEn6SwQc5hZa8Uf455bwdWS3FFC7cUSiN6uMHPSTxSSEvxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b6v4MPGqS6NCMyTdVQufLXNdukoJzQcH2cRShxtNKKRcZcHrsYXLHJ89yNZvcK7UHE2dBXpUUNN7rZsfxhLxJxG",
  "key1": "5BYdU9wVL6jF2fC3nkSfAiqhS1dy8zBC46DwejCmyATHfEfUj2ut13V8J5BchEaLP17pzu9h7vrTiSSiemHPMo2Y",
  "key2": "5w5sQuchYhKCdnTaywQVoWAf8tmJ6oe86YHuHZ2BwX53UcAsEnqJBK3m2QA4UEVV3oZBU7nbbV6KcSCpJYvATgsa",
  "key3": "AcUzu6wi7w9YKLLuXF2JYWz2Eo7DYUZuG76vngEvvM9yaiAaHbb4YsXCBtzY2y8NzvRjpNk5TZFbdBX5CtfmiRZ",
  "key4": "3E83BMZDmtC7sKHm1q3mpXvSRJk3Y3PptuyXBihhj3KpoNjTj4JwSJYXtb7RhievkPd9DfDgWNhf39set2P2WoHT",
  "key5": "jJKeKkpEwFpY3eeCQHsobwdbWc7mERKtu2VhBYbYfLg1HDHqnEyj52rq4FGtsArmndpWuygqd3bzMPYUHyngebG",
  "key6": "2eAZSX8kR86S2hbxAeLs9RpN2P53jXL3F6xqB4yyAdkTbgf6neWwsL888PRbvgxbAPh4k75XW4N3kJHRZxA35cf4",
  "key7": "wdw4hXudmnjehrJ7xAdL5GHNwfCy3x5gMvMQbYjW4iAdAbYKVFqtawAoa5mPc1ZoqmkUFmftiV4L4S5tQEXN9MR",
  "key8": "4isxATcFmiLeHhJxDYp11JtC1ojucUoFsXmz6EueYfdFpc4bVYhMWVXijD6PNXd87AzzamWshEKFfkDmvigaMnCB",
  "key9": "632dCzbtskRc4Vka26RUh1GYH4W2M7hVCiqN84RNgMrLLFYFYHKMREm7hJPiMHSmQaDhfgWBkZFykSMt4bwc9Bct",
  "key10": "4BZbzMtfN1jMK8eftjmtUepJRxQkpbtiw2NwgHYcQsXaFXteVyTr6i8RSZbopzrdJ3N7b23TsW3Wy7MSpddDQNoM",
  "key11": "41GHWrpXxsCGwGMsh56BRc7PGpB7x3gUCjG1MHZz5bomt1WMbUDCrfaVsnFKE7NDA94yw8TfTZqC4N745QeRcDKZ",
  "key12": "9qjJZDNDxf7ckdwMCahb8dw1eA7B2LXnBer32EcGitGfrbXRt3xz8QvY2Ytbb2E5y1AajuLcPeXjDePEg2VL8jz",
  "key13": "rYqqYk6yf1UJwRm33Zg41iJkqAzvmwi38gNqbmZJMhjRcUtBoeEaqcJtsp8FUaLXuyaWSBwo6p1wCxvP4NvxDKd",
  "key14": "28AWmwiWrvvsjSGTqV5S3aVHJTjaBEKFA6VioMbZWNrJE8wqdiKVKPoNHY87Xy8U9G4jqcwCBBCdJfTmsbnxPU9C",
  "key15": "2mQ8RiFaKDSrcUtzvvkzqq5dDXutreZjC9J1owa2KLnujRZWN77zTJWhF51r4y1vHTpcL6dRyTG93b6GsXByahBj",
  "key16": "31jb3KUTozE5KXNiJ3JeMhhWxen9tkiq6RC8V5HZSdcdJaBDF7MszdVEKafF5JMMtTS3hpxqHj43sTG7P9L4QRYV",
  "key17": "4fCthgadvnTStSuhXMLSo7tRKmLeVDSmRdHzfyLVdbrA2thQkvEs3FLggiYHj22mNfSKgs8Au2DRWFKf7HCyVeT8",
  "key18": "5cnqXNzXvr3vhdhecAeAKSKn6BSpjYp3SfgmZu1yLmPiAUGokfeSkWRNqsapEaNJzKHibM1e2CXt55xRLXXxSXWN",
  "key19": "5kp1D2pjTSexWqKsoALZj1dyvsSNth6ZkdesaVGMpwWBcFMdv4yaivjXxo9j3mSDouU3FKyGtZi8cXNTWeYddv58",
  "key20": "52fV6ducK8TuemkbKbxQU7ew3f2LGoSPqkAe2tugafTEFUkd4iosjYPKx2NNGteyyV2oF5mx81VPSdVCEmihJfzk",
  "key21": "5mmHzafR96fLFpQVVPaRRshGyCjGDt7MurVZZrYtnEsPVrHmWj26LbN82NgvKa3LknNNtpmv9fVDePYfryBQKUqs",
  "key22": "kg2AWzWAK4atZAL3RTTTzj4HaMCtoGWUGXX6BaXhKzJVhHc5VmdNnFY1uoynqYgBnHc1cLVw3sE1KkDLs6qCN4U",
  "key23": "59F2bwZso3pnNa1Zys9drFcygo2re1xYWmFidGiaq21ou7s7ti9ss8NrBwfzB1nVCKeZwWz4Xd5MdAyWKFYnrD8x",
  "key24": "5sv5nA3Fzrtgy3WvevgNSkke962VRgzxHfNQV9yaEA1T5trwHWxqXmYi98r5FzwmxaoKDWsmFviZAuGL9cmVQvXE",
  "key25": "2sFk1ZyoDJ2oP9iJMLyB8ke7gFoyT8ksFQD84JJWftfyqLW7fVpaNeULxzSTTXZkmP1gikRiiwKL3LyPfo7FLkXq",
  "key26": "2AtATZaPRMeuGUx1AL1SmAJymKeMsWxpEGdosApund2XzYGqkpmRabzpxR57FgsauepEfkJSHhE4Mc8sWaX3Dk8Q"
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
