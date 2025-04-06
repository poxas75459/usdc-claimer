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
    "5Fu83WFVzBhEHwvq4VedoR5U7s283fxoqCwSyA7wQxdKb9NjPSumw6Zd4peaEA1EXs3EfKpZtXhWPmL6x9yKjNax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5firvAvqyQ8baczMJ73Asv1auMoByaBgrddQqn6ftQRQFDG893uTMUaeAyYWMNb75Ms8nkSqCRprYVDedgKLdxo5",
  "key1": "54dw4U9sfvTZ3U957DQ69nkohAXVDYM7KWYDRZTCzqcmSsPmTUZicgoWgUy222ZJWd29sanaHRyq7WVntEs6eq7U",
  "key2": "4ViTABTeNkqBmfRF6zJEfYV6nyxEbSMHkqDEaGpQYemXjePNmr5nnmZTe7BsPHLVXyFpYdhj4hkULSTnWvbr4Frh",
  "key3": "bPsyxoqt6NU7BcWyKysszRkrXR24XJLd36Vbz6CnsuoPEjsW3zUCCTh7obFRTrnMgjfMQyo6B6tunz1BEiZ66M1",
  "key4": "4hyfP5RykfncKFQt6EJaUT7QzrwwsnhYu7hKufeuft9PmbwLmdzmonaYrSZd11QRtvYe6GybJCHRcs4AmYaFWu8k",
  "key5": "5cbicLjfbF6bC68nkh9sx7EGoXmq32jTsDWg3U75Z6hv6tyWC5qwpQAjPEfEH6gcxtc3bxobzxV1Uqu2G5zmGStq",
  "key6": "38atWjr7VFPGnNNkJJJVsRKEwhRYNHe9GVsP9jmo3aZ7aexpKVSjeQqqwXX48tjtFXNf8QqEELbVUgvnapqToZ6r",
  "key7": "5hDMHD9we2F5kojRnGZPtQ2LzhHT37bE3mMNmiL97EkSkWPZz5RbYuMyTAL6dxP2TZ5nPaWN9JsbBw1go9LQCs4v",
  "key8": "2Yq57SDRyFwTWehPe3ZnTH4uun5f355uLPLbZUMD6wQuAiMqw7xrQDJyVWpPg1GLtKeJsivkZ58qWbyQNrHZuyNC",
  "key9": "QPdvqGu3VZDqvTH7mJU6qDHQGcwBqYDtJcw85wHxUsWUmDxSdQnU66d2omjZoYUdqcPJZ8m7EfADUy5n8Q4VpkN",
  "key10": "4QoCBzfvrfEY2Q2jYGRBPVYWsLrR3cBNYyEkyLZaeYT9AKLELH32QyGtZorXWEoiddEH9TAwssMKk9qFqFn5cN81",
  "key11": "54N8Wr7gY1XVsngQPLYFHaLmRVp9Mva4hGiVcsv1hCatw2ZiPeEhRC4ka6hJM2gbfzWBPCV5Cg89GUywDoNycT3q",
  "key12": "WJxFKh17qNTCvbG9BavYsNBx9jmxbgCXSB9GaRdrySuyDkhuNA4AK26zx66iJw47b8xsU4mkQroo2HfAZgyNxN3",
  "key13": "3a5CNsAByc6j5RjEPWjsG2fEmXeNY72PzhRhdkNJgutVtLqicPRtgj1xdtxz8sXw9Bc2KAhiyQZcFNYjGYmDdHsw",
  "key14": "JPE6gnBWqcNn89cTK4Sr57PVAkrAmCLfxcxFnpiUUJJ3CfLm5cd2MRW1XMCdYV6sEcmqx7stEfxu2MgxLDMmbMe",
  "key15": "4iuDMzTs83Za1xWHz85n3raWGNvR7KfVMc89p7noMcFCYMLaRopx9kx7YhRGVuy2Vn6cF6Qz1wszzw3wj4XGvM9K",
  "key16": "3f9RyU9EsaTP98RXuBZ6KFVQzex3P1417WATZtRvdMdPK1jPPJtWw8KzBFoYtFgEfDrsj3YtD838vWS2BWNtwVyH",
  "key17": "2Cw7WgBPiKD6pr9LVW478uJ2urQk6FaZzunpEKUuCrL6n6oTmrVY4E4oqK2vh9bYs8EEzYeQw82vScDXn6qHReMZ",
  "key18": "9mDpiG9mKP9ktc8YfGLzo3cruqHhg3MZEv1RZNjRiLsrUYPa8QyjMzY6KaPKH486eewQAzmcYGaSscBxqZVpX7Z",
  "key19": "4pgS3ARdbLC4tXZWdhHW4YYoiZw9XME6sbcp3d7C7yRMZ55bVZXunfbHg6qoyw2JKu2GYE6kNNLBCaSjKNPZ9XSN",
  "key20": "35642WBMCQ6fB9z9oK9USF6yEJhVfCxQ56wqBKnreaWsSbWP9VLRNUhH7RT3p1RW3hqNipWKh9nheLXkJ7BnF6jY",
  "key21": "3MFcFxFsHY96rCRY5Un5JY339K6N5xknk7pxwKodDFTmHCaHxsSB8jkz1ZBjuqr1wh8EpjRRhJKnjUcC1e49u53k",
  "key22": "4HkoxX6brA4XqmER7sh8hpWcjBNbRcVHhhySSBfBTm99kj3jD3MxdyEuGEqM5B6GzZqWeJGunLfVdnLxD9PuB7VF",
  "key23": "2Ju7iX6NSRNpZLf2pArfNhtQfWimLswMXMwYi5VpSuefedNPFhdwFT1BUfLHKLBmMdPPZf64EL3gDKAgbNiVdjAM",
  "key24": "PEesgup9mKjoqgzUXYrbPx7cq5ZnwErrxr1Q6CHkLryWuLzFiu4USHm4tRc25oxGYHoFEj8Z5s56nF17kB8Temn",
  "key25": "2pJzKuHGwcnJcGUbaJ7sr8cwo9yFmk9sSLbgvdwQAxzpNUb2S3fWMCLW3GNN5jNDoYRd2hGQeAacs9u4oyfagUwg",
  "key26": "4fduLkjurNTGUMbypfQvxiMDhGqDANghJh8dmL7SvzH6mExf6peXk4xqstsCccwAQjqvLLfMbbaiF5hNQzYkCoLB",
  "key27": "5gbbzv73xnqnVUctgx3aDDvyFQxCH2osp2hLuPUHZGcGLo9C1nBJcDLgyQpGUHLrDSvttgZcwwfyaWBTRnrcuCb8",
  "key28": "3iCqarV7dEu2b4gMnHAwHfn187PWkZMeRWxUWuGxNUskfgxsHECbyKm9mDqoGovtjZGCVX6iFkPDr1Ja4jXEDoow",
  "key29": "5hx1Rgw5P6d5WEjoY61GMuiJXqUZSmSkfmbD44JLL99HAYW3oHsd4YjRBJTMD6PfbeXsbAvMmCFDE2av12xrzB2H",
  "key30": "4eGD9W7R2xQTXVMnHLvxPwRvDfEed9wxHQL7wyT6rTcocoLjvMVDfy321PHznU3r7pbXgo7Yjd858ezMam5GDe5N",
  "key31": "g5yXKuTjcXVgg31FMJZE6m4ipc5fnpb6uKWci4dnCQcXYe2rfGF3VfbbHePBt76bC7sXkPJrL4yS219v7hmJaQ1",
  "key32": "4TJ9eeCdPFDfZxie5TsVreZuXpn3SUTRyfXxabKGxFpe9kHzF5zNTQZxvGkkkbc3F7Yb68VcUcDVqRobwYTpC3un",
  "key33": "3b2tLHiV81CPyCSqXEhTxtmfUZyXHTyZganBeCu2CtMK7fuM7JjY9v1SoNn68aogEkJetTEAUFokXbrDox5kwDhd"
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
