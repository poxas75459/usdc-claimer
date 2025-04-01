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
    "j32Y7aVLL1L1pwiThzeCgUw2mSUTHBSMfNukVi1KWTM6eHo5nRDPj7pf2EeMdedzRGcnfrHFamLMM6tvPUAEiUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gpqbad6f5Gs6PYNv3xXPTYbk5ACd7LPQ1nxhwWFtXLgxhjahS8MxtDcdUivydaF5Nno7A1MoDapi1jfW4Vmrsrc",
  "key1": "55SU9CVCn3PZcJgY5oCaLEPSs44d6mtuK83fQNFrfxb2urkPby3Z4DT5znBGo9LPL73Z9asEXPhVrVhTm3XE7GiC",
  "key2": "T4WJaxFVdusDnbCx5AhFdYWT8v3rcUW6tdKszhjphjSPC83Xq2LdobJPrSSMuDaBmce7uzgVEh343NcNjAJwSz3",
  "key3": "3Wnr8bswYbj4J6K1HHLkabwNgxJVoJLBiQmWSyQifRJ8E1mxLXoQx74Gsos3qAVK139FiNRxax6x2gYduvni1sce",
  "key4": "4w3AU8Q3taoM21Zo8PbFJCbD9JoPhYMu7BzG2tADkgjQtGt7y2hoTauXtWy9SXAC4z78UxFjYD4eDVd9C4vDW3rc",
  "key5": "493oVBNpshKDeaGyETpZPB4xNtzakrsfH3S7LsPkjYwskuqaYoKM2F3Vo5PvKPHQKeVHo3Pitx6LRhVakSgedv3h",
  "key6": "23NJkmgUttmjzp9fNTjnSGqchqW7mc69sZCzttyUYWaqaJsKJAbnXxhs5xmsNKtwC2LV7ToZGxtxuroUSPbnWtWd",
  "key7": "5xje9ipp2yrAfgsMwtaY6oYdfMWy7NvM9jwFbWQbUC6PaJxxCLdygHybnAMEDcxPsQQH7bihE2irZxMucXHGQzaV",
  "key8": "gAYwVN6hpToHMPrxBPfGq5pf29pakj7pTvqr3nWUK1JN8932otDVKe5AKkyqvzcLps6NqXcW57AJv9TXpWigcct",
  "key9": "2mngbD4w3gdPQQqBN5K7GB7spqaj5dov3fyrZWVNWhC28x9aPqPyF4GQTHeamFfr5Nmha5xp1roRhW6TA5LNCYcs",
  "key10": "ok5rjpCtUanKdVbfiJg2PD37q78Sa6vLT52gvmGmfRU3wjVxDWkKZyhvwSttTafS2prdpbRk7KEQUms1P6NV11X",
  "key11": "2P8oJCapakfhDtdV8PpwkaVyUFBxtzgEjTHxknYbWwGAS9j9hqHGn9Uj7JFLp25UCUskbx3XZCqxuX28jKtsJSpA",
  "key12": "3gYvvRV1EkD2H58sfZvCymexvazdaMWRWrR6SRaiuwE2zUgLtKP6FQUuarn7yWQ3mnznsj5TZAJmT5zfYLd7iuF7",
  "key13": "ekF62wGRRHLR2fjd77dSaJXRPPvSsi35Xj4YHNHhfmcoEjEHQzPngNGtHuT172aVbBW2GAL41VBJZPeYMnmxcgQ",
  "key14": "pPkTQQEBkkD93dXLjZgM3ia5hsD3ZuEQWSL3SqUAMvBtS112q1sUZ7EHgRZ7zRTBJo2YJWVDXVdkFz31WxabYik",
  "key15": "55EapJcAyHZgny1nTurisT1grFkqbMzCspyQrc7TNQUKdHmrdNTbuhWnq6pfVzF59hzYfaGyqDjNfjaVBfbrpEbL",
  "key16": "3wsgB4GU5kYRSFcH74QanyRCh9YU6p3K2qUrHEHqqiRy1kb6JPzeN6rdWggFhQpA7uUa3mq2CGd3je5kKFZWRezm",
  "key17": "ELHZA9ZVTA6Sv9YSYts8BaYtdu1LduqeRQeMcomfozY5TvqqPcjmwVj2eey4TRskz3tFkC9bnyfUfRhKuVmudgt",
  "key18": "2T3wHDes2ntQZUD56dy5CrxY1yah8qGux1QJXfQz5xjsB3c1Lo3PwQKNdBaHzyoNPnbp6K8dYeqQsniMQqQajbDC",
  "key19": "2WpyBYuuvmz7KDSh8QESsnwwiocRLw6ovpGhKxn3dCQnc36CYH53ueinZEnDFTjndQKJc5A5AAeo7YRNedzyzZeJ",
  "key20": "Bv5jqmC4W7MyzNtxkeuLK6ej5H2VtGKS87NqYfoe3XezfcQXorfAusNr2YitKEEZYTTkj5ViMfDwnJ1f7TEux9f",
  "key21": "5RLMzRwd5V5EG761d4aFP4VxEctxP3QQp7edtxphtN7JGvzUCBYhdwCbvUkVivgfwfRwFcrL28vGuTBD6ZT6v734",
  "key22": "2Sr8ziFV2kvFTqPHsCESxniuGmah5HP3Q4QNozJ4SLpX7GG1pKd93DyAAKmforaS2uWePWPjJSMjAyWwow6pFy4i",
  "key23": "WxKdnGzRUUuKcQiwwtbmFyKznCA9oKGsCmuaEH9Sn8P4RgXcVLqZBN3Xh2Pf7wXvFstQ9TvDrxDz3uz1LGhgYVW",
  "key24": "2R2sgvSA4kvUigTueSJ6PpZomMNShfZpJSFJDapzftKQEM2rTjqKGBJ9TfekrBPTU7KSSAVgKVc5B3P8UKaov9aQ",
  "key25": "3JSUFB71Ynj3LcGN6pMHC8KX5FQ8tpt3ZbNC8raBLvsLqFn75qm8PR9zuvAuWwYzrHghwnie2NoTrDZ95itjUC4d",
  "key26": "2Ef2Gn1neoCPgT53hbRJpnbvDUeen4VKZDEhUnNHnCejRQLbUMeFtciPZorB8w4M2xJQkXSAJz1pThDaiCnz6JFY",
  "key27": "54eA8hkZjgQMRZThTDsuhQMe8oDF6p1ibaPFT5HE4DWJyNXHnkshbYQ43ybayk4s1vRv9yyPAbfcQQbtcUaqGqvu",
  "key28": "5kUmXEidZ4bzT9DsYC46AhYApnvD6BAQ3pbWSDiWs4LdFJw9kf2sZG26DZsY5qsgX47bUGURjbTXnDfmqBcce4LS",
  "key29": "4MEdFp4EVd2tskbetG2zvmJb2p7f62Dc6Sg99FKkz4Sdxczok9GGqNJVxefJKjpzUrQddB3xrVoyrXvn615G1ViR",
  "key30": "2ApWQ8n593pDABBfRDUAeLFjurHkmvXYaAQLus7JtDJECQA6fsuQxaggkJpaRjLXENYo5UiUASjWNu7Pa5EEWDNL",
  "key31": "3kyxjZC7xmSbpXenpaSckwiKpWn5kuEqDgMerKnzLkne19q4CkaRr1bSnzrxXxm1tWduts6aPZXkoZiLwMJdyG1X",
  "key32": "3umsNASQnAt53r4Vd8ak1hwkFEYuKvcxZUFcWcfUuJvpxDYyrpdfE2G2TgpcAxSixUr56fLo9w52fdWjJC8vNaCF"
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
