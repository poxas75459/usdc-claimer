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
    "2uK4oTRnYv99an8RzboB6twfAvYPvpP49jWKQcCiyf4azkz8hSkZLcBJFgmpZAKKfZZoGAzy2dHpu2d4V733egQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2paMimLYATVCMVYANSTKoFBZLbwFzcZv9B39AVjaJNFdgFM8EEjzgYcCJ5u5VL9odaLcbSdosH7NVkwwBBn3WUv",
  "key1": "3fQ6nxbP9hGYKH2mgKi2VVvYA8CbeCADryAJbe7qSuFJy9UB2pEhsDmuBFZCswCeVagm5set5noqXzZMEvNgT5Kk",
  "key2": "3T8gUeesS37RbvpKdCha458SnzoRJwQ1UyZjQD9jwHnXCE1JUPecbUS8bPu8CewFUoSiSyRjAoVHRRfjUHzrfkyL",
  "key3": "5ReJXvLrFhjTobzUrFMEmx1JTTioTiC4LaFNsgxvjMQoaVQ1G8XKeyKZ5TZNBSZEcWgBsZpbfYVpzZgJ6WXzpFxr",
  "key4": "KWSdaFZditCobSgGc7HBUSP4YzmmBeCTtGAumLNw1KaXDqkz4Wb82qEweWzDjHwrHcavTwxbmYnt8UqdTdi5eYN",
  "key5": "3CLQahRkUwCQiXQGwWfmaVDTptLbBnfWFQCgotrBzCCSePw1yKBWPsZ1Rio2SSc2uTVJWZKVHRqhYQ9Djc7th8M2",
  "key6": "5saxnCKXLTtGGajwSjcfsz9A5dAEtqex5H2ecLpQdZQFSZa2jNDPemWytYRejQffj9sYorciwRoHnhopcmHKf3Et",
  "key7": "2Nxoz7EiGGqVu59kkqTad6qyroMF8k2TCTsMCeNFAnsAqZgu8pscsVus7NQDx6dYCK4tt1jszAM6a2qTgSb8fDxH",
  "key8": "2MG8FiGYDsHbio1Kxy9BzNDAU6y64ieJ6J15S5rhJzY6Sig2yZ58HG72ZGMNfSNncPqtytdgjJrydaUND1CNz3D7",
  "key9": "2goKHNS5FbC4hwrLFtWX5dX38cGXExz4zpHdmp898eCQKR9AcTS1nBRm1g7dR3wMRQFMwbYo3WoV7BUVoGu9wKMn",
  "key10": "ot4gWbPCHUHpX8LZyDsSxUC3rZN39RD8YxvrAgu2wmmBeRGQYWEP37At8fACdYMGvj3X5CQ8U9wPvScMSpPkd7U",
  "key11": "5EW2MyiPjcPFn5EdFaVYaeaSsR3TikpjQofJJouqmAwXWt7sj28HtTH5Uu2G9nDD2wTs93XFjPo56vMBDt45u5PY",
  "key12": "XD1Cv8Tuxb2it1rHM3wYH4hNL9mxADWpSE6bcSpLDMJniHgYBTVYAZQjrcJkWEDV7gsSFvkvrEcrJvdz9GSysnP",
  "key13": "2KBdFNtd9AtLqZXx5GLQoUi2WsiwEWhe3iBe6PqNePfx7qmHMaXN17vvkziSwkHAvJPHuVytrJCsoSQihcEoejtS",
  "key14": "GdoGRiKY5RsLjViWgGHuMpXpuRkWd4Nd9xLZYtFenqDTUVW4L2bUanJn3vMUY3ea2s4xVGL7KPvwQjkkcBWuhmJ",
  "key15": "5oViyUZJGBYTSqgGw9NYaH2CHacgHDqxKQkXNto1A1ojE666LCcoFJYBTyzbYZxUboBJFde4Gpp799P4aJNN1VTV",
  "key16": "4tvBLft2TN2AVVE7wNjkp3nyqS1qvaWVDXE2oX6GznbfjMy9YhUSYobar1hc5NxQRemVc1LkyLA9ZwV88BX6nAuD",
  "key17": "3RR5KXFYaBgYbCj9c3v7JJNrUbweHFfZhnYBZrATwZ67PjiFdUcS1dZ3y2AiMYD5dgy3S44SHs8dwU28mA8BRzW6",
  "key18": "Ms1XESNELhruBmHWLfG1ujwdmfCFJtB4SJcv5dtnuC1NXamxff9Hkarhj2Ai9G6h5Bs5f8jRbK64XnA7mfmCzEV",
  "key19": "4DpSpH6sVUKApPEutmfrefQQ5qkcuyXjdVCFe6fYrfDcMkpbsX8AAz62E6BzQD27Nfh7T37UtE5NuEeYW3SsAABS",
  "key20": "2CDrSoA19s4S8vL31gFYyi7t7qjKedZR8a5Nn2MLMagxyNn8UoGWEpGhihBf6MHXUhrRkCdnLNYSCnpNud49JYSB",
  "key21": "5RyF2REgMUB44a7qDi2MWQhx2ob63hvS3R17a7g1k43wTULzmjy1Hm8rxAJ4m2uSBKiQQ3m35X9YnAUwLqfnQe1C",
  "key22": "4QGYnotzMJ9FgpnFgZxEYArutGNLrL8VtSyRt2ktENu5Jja7YDrabSfpvHyFta8SMZya42Pao7PqANrzomKQZ6mt",
  "key23": "4ViCz2LofmthbPTKqPNv9XempSjuQFcBZC61gGa4BkCfgGrUS8NzSbS4AYcmo82nvUcKexksuGDeTTm2gWpBk55",
  "key24": "5Q9CxJUwuWtyECUU2GYHwMDxXq2iSQhjJEG9pT4MykiVUW9ys6NwzhbJhZEBLLn6akU5sTJmYVExUU2JX7v1H98Z"
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
