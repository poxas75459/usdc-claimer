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
    "5h4gjDeTSbQy2Sabzid7PuM5m9WvbZRP4zDbLcSVuRsgZAdanvPLLAG1bokgxvdzTyga1gBfnwctrmaHsRZ1U9CV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47ZKABkZxN5fHs9E4Xt4cg4MsogGfPPnAFmqdjX4m8YXxM22mywZnCNqvTT8DcEtJYSM1MvvEmqCLTKmFKsvjcCp",
  "key1": "4r8YGKt21h3kpZHDaKUER1PHvtCCx3VLq6Uqd43HWUjDkoxMCs94rbo1aS3DmvV9wVKwgB9hsEq1DHFw6D2BwsEU",
  "key2": "5vdsaUw5v78UXXqyFDZwit4ggmXyNchmkmVtKpVhu28gJQmczAZo9Qj64VkjgSsLnzJ55CePD9b5W6bwt9HyTP6G",
  "key3": "55D3ZNbv1c7mEiYWRGTXU9myx2kpmhJTgEsk1S5zJmswHyvJ3LYwPokwpVh1DhaDn8P6vjjexmjGQHTXvH4kr3ay",
  "key4": "5QTkyQRQghkoXiy84tMSiTyAnJV3BauUxjU3TyL3anXcnV52GaTbcLAzXkDUcpdTKDfif4YqyqneNpw3smbhAjqJ",
  "key5": "4qUsUM6CikELKbJbBsLzWfJxcAXDciGQSNLoNhkVckK4MpnJcaEyhSZkB5z59qzcBguihzJosFmWxs1P6qFr6B8N",
  "key6": "5zti26uBPNFdgadQk3tmn2dR27izAa8f2nSsutom5aZQHm9UvniKdqQ7R1WGPRAiFAXMjKCcPpdmetARPS97gygr",
  "key7": "2HfXAGw2nDgoenZMiuheX8TDQvz8ZafzqAsTFoAuV1ViB8kFH4FHM9gskURDfkxpALqguacFTyQzNdQkL9dkQA6Z",
  "key8": "4kuWKQVt1UratiCWzbm85ADZ7DqLFWTvsCCmJ8UnBnToXxFhGr6cSkxDFRZ8E7jSLRyiTPRw35J6itNkwWbxrsAo",
  "key9": "2nAUUWFJKMS1stVo7YKcYUVtLsade94UMLiMYgwVpJgNAui5JcxUjX6GQpoBxahiuZe2aQg9dMnDLMVysHB6tsY2",
  "key10": "4EzRpqjhwR4sVEQhjtzy5Tb4FWMCroBmCvE7PMn4bYhVAP7e7SfMw5oCf1dQru6c8d5KbqtG3nJ8GyWXpz6xsoyj",
  "key11": "27sF3qGm3ykeHWnjKNfDRt4yLjjKUURRejXeehenb2zaHDirqBL3vTqKaV5Vx9gSpthqDxGjGepj8nwuVzDPvQiF",
  "key12": "2g5mTKnHnJiE9zCy2DZGtEkjQQf768b29DBvsW4C4j2sPDvnzsPPUp4TdX2cspPxBLeQnHdtDgqeABzvUyTvGNym",
  "key13": "2fxvsJXJQor8DujvAXrP8RUnrxYqmanB1Fnuw7rshoWq9sVMTPTF8yq2xWB6okTVQi1dBbjM2XPkQhWCTdNMg87k",
  "key14": "3PpYnjvEXptEk8UdMUvnmWtYDJAFAVqk2DyMH8evsBsfXZqCxA5fQ3irbx8TaCAz4e77LyCss2Q2dRv3nHDE7FwV",
  "key15": "2en3Yqr7H6iAE6cUJaKFP9HjxgBmvoiqzBTjpVw6TYRKMihwzB2QtWBZLw5SYX58CmZygvLv1kodUmCQgGLhTVEf",
  "key16": "555cR2EaGJiJkcdkDdPwG7x6UweWdRicRmWrzxknW5HNaRtXpzZx4xXt6wwGf1vrME8UTkVE7Apwmx1ecVrHF35Y",
  "key17": "mTQpFqpHQL5C28R6j7Z46wMMj2gFjRSajPdjEELhyk7JcNr8vRxn7yfU1Ku9WL8bLRafU98dDXZahAfRcUhf3Ga",
  "key18": "4eFTf72X6hhbt8YsC5hea1CNrE86p9FncpKQp55ytnZDi9qWdLN5ecMvPLBZTMb85UH14ogJ1JEvWRkSn1y2R1Mw",
  "key19": "4uY8CxnXkxfJXSgvRMoiFAHH4LwuEUBUpCwsKvzyxe6bsveEdbud1p55rV72mVusUPdtGYQF2Jwg7BBMb3MPPrXJ",
  "key20": "zLB3kndgHghfCftfG2i3o9g9bU1tYhsXhXEL3jhyDDv5QNKysk8HK8WsVvWFFUGLM4x5WejTxrgsXocNJs6xhjt",
  "key21": "4GNcgVp1x3ViqcBzoLewjwMzLvffceV3GC3YDXuP6t49d4EVX2DWwibvVRFf3FTfraix2XDod4UL9fSTXG8zsbT1",
  "key22": "4qNsvuKfzfukbDwZPFzLx5z7yXuP4Vtnx2sUk6wYk2VoMQhyhpDin15qhp93Bga6shEgKT6CGdMVUJAF1Xodphgq",
  "key23": "5xzeuqjTj2XUUpuKZtTZsU8vEEviq1SWwcTqDg2iFH2LjJ3WMoqBNbzN1L75w3EF6robexf3U24Z2CkgUzUftpdz",
  "key24": "3wnuhmoq77gB2g8yttYevhUNU59MFZJiH6hb5XgyYZFDb3Tg9TSyHnhT6avj5Rk7ukZbnnZr6F5AL8t12zHdLL66",
  "key25": "cMDA2x89exDx4bcTU41pXHpzzcuk9a8wt7SXmH5W9M43qo6TurjNbz3T8gM5WNZUWADQGpHZTaztKdSj2o1g5xQ",
  "key26": "41fcGJ3SZGrXHTgE8CicnxDRK8avbTiHYc8TY9C2qvLs8GgRXXKZcZgvH55RRky1gbMjPrvMPBRSD4Bt5N3yjbR8",
  "key27": "4yNnSNKRYzQYxe2zWJnzCNSzizNEbYBDSMhEMxVVAv8B87S71XNPt1PN1dq3u4qQoZutjWJVmZKSXqwzq9ki72g2",
  "key28": "57Yis2jjevnfbxMUik7Laa8twudXyfz9Pm6nXwPwrjpRfJJbGTeRBV14NPpJFQesqm92aLnuHizctLQL65KdVUnn",
  "key29": "4yq5rvRhTy745Uioc69jcjGwkNcE77v2gZz41r5FH8JhiEAyavX5KDzHTkuBhow7iLYMKB1pDeDFKHN4w2bBMNWh",
  "key30": "3WZAVx4TgPvHX9Fr3UiMG6zMfCwFp6dAYRa9tWcoqLHMHeaX2eNisxQ4mpMtrqkaSdQ4zQGxCcGPfGYroStAUojb",
  "key31": "5tG9tGVCsPajQjfcWXGY16rTEi3xSbxtM1b63wuNKRWduLWs7rYB6fi8bgtSjvxLGvAsKVjXTvzWntSdBL9MAaUf"
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
