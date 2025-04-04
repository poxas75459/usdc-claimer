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
    "4iKJ1TnmfYxxttAGS3GnAhrTMoksNEaKeU15o3AFURtMpJU76WgaRaNcVCa2BBXBZfzobuz5JgyiEHWCfq2dmpUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aWPKVvyCzFEyTCkfq67gaGqPrzqoXTDUPF6PfUi5mdeh7LBcQTvpsJcT5Mfbq48dXU4wB4p9VAQzgrUubdk7cuE",
  "key1": "2VxknBY1EYv43wsqUA7DSWsAscAUBgwfJx6Yzc55XaKAipzBdiWnxAWxbtGCZZ9xTnUrCxgDp4HGY2EVhdcSHWX9",
  "key2": "3K6fw5iNKUWkRJ3JLFf1aKXCBZFXNnipXpnJHyBFoUMSUtjgfYyC5BVAmiqyfviUgVjD2KtPUnRBEmbKeq8jJjpp",
  "key3": "595Y8CWTa6aq6K7u4QGx2e3QAPKUvryigRBhSAvV42ixtgqv1sMrHzNVTXvEKsBpgayvRwDSQ3VXuKeeKvsNzu9q",
  "key4": "5BY4oC2ZncXhd4vGWuPb8UTDABcKMKJYvomw1EwxJ4dWvPXDxFxkWkHi2hGpGceQVxLAM3xfmvVLmqo5Tin1HGBq",
  "key5": "3TR14DwcUnNRujT8t5JASuwnmgaKzQwVmcMfiAoUuyrXk2TLYj79zgrTBqamP33VCtquh9Votj34Wk9tHsBdwt6o",
  "key6": "2DDsjegveQbyyi6SAjm3LJRb2mHfTaybZLLGKUCKqJsxEat4kbSJPpFwDA9agGH1MGFG3ECMmMjSC7Hr5KaDDcoa",
  "key7": "5okJH5BBpvY44zFigBLfr1SqtPAVSZvBRqD8hkwJ7aw8JnoUx97pjjznMvzbD6XTw2ue3zrqDjzUa19a32DzHtow",
  "key8": "5YcJtgxQDCeKXBApzHpRh139XTrLy5BhBsinCPPR3uNk7PzKruogLnQAS19MZTRD9BLJDgt8wgKt1f6J7YxA5iar",
  "key9": "4GD81YuxCfhUfQofg3iCkFrntYhAtrFG1UHoEw4nkkCDSKvHza2EwEp7rMBpNifzqL1kAmXuiYF5eWAQb5oe51DQ",
  "key10": "2kvKm3vYedcwKWWTnyEoPxtfARKQkX1fFMP5PN3nWaU5Sgk49x4ekpypDH5AnM3nbs4oG3qodnysHScKtKCaGetu",
  "key11": "2H8NQkfVRcLzCLpC2K2ce1ZCtGuPimHugAhvy4w1tSYwtkEsucVMGTVWkT3NrxSaC3XNeK3i7P9cWBDxd3w2AHpx",
  "key12": "3eo1U7K5QicCwRxwBX8fzrx6j2RuJkVECASdYSG7thExK15M3hLFz2vAPpL1LExsr36z9rQ54iaZkoJoXZ5srAi9",
  "key13": "5wbyz1PVSrGoHf1GMURuq4abhwXm3Ro76bAvCUguJJKVAb5U5g7WnjweKUCVma9ziCTd7FY6ygaHaB8mx6ifyu8S",
  "key14": "NC9J6VrpTGjpUMY7CaTdTab3c114DxJ1KeunUDQVrsLxdn5JDv8RRQ8inXKYkZrJorUecdD4dhbkqvUwnwrBae9",
  "key15": "QNmeokr3XJ1sE1q42sWDFrJw5rv7VsC5kjU4yuZ8qsJvhN4KXgzv132gqqSSRCPWDbUmmzg88SUWJxg5U4eSncU",
  "key16": "EELgW2WVvWAi1KEst9GCo4sPWNZW8fhvLiumwjooxZaYxDYCJHNXKhSzTaGfHvW61trABC8oVToPpTx8VMJZ88Z",
  "key17": "2wW1WCTUfGZW7qmfajiDWuxkbNfaJcXjUGT3rxKuuKCYW2toEBPscjg64ructNLDnvtf1jgiPDTPZbnaJ9CYQTeR",
  "key18": "RTS8BVoNZNB2zw8UJRTBMKy5jhP52ia6JAPLLYVx7FtaJHJkfdxha6a2m7hrcCFu7gcEkMhKeViQaMgrZSvZ3Xn",
  "key19": "21b3KuqqEvSiwGc3J7q5QR6Jm27ReaRgHpcJP4x4vr2FVVkUC7dSdESx3PxCjTeAhfjAKVwCqqHb2DPvwE8mhHFd",
  "key20": "4jhitphtCNq7N61WUSiu21jsqt9nKjCkuDif5HttmjZ4R5Wkj6uAcbu79ymSYXmMTmtkpdx69BKFu4XyB21SVbxf",
  "key21": "51PNAkALzAJTVmte8VPdLZrxwXhk7CQWPKYrua6AkUKUXz4NqdUhKpkiNGpiS7fPfxZH1gKB8B1f2nuwQNNLbiC1",
  "key22": "5xWPJ7YcnNwiKNMJtkde2w2HGFFWC8JtW3pVGrDGvhfExPsCWhWMofKXBQdu5ATXqoFqtjtY4vZzGnLQL1Ddgvmv",
  "key23": "kheua5JBtqeMftzzjYKCvuJjWCxRUhbswPwbeBG7T19jA7etzLdjaHzYippag1uqovuiWSfs881WFmQkvzNLf7w",
  "key24": "5iopDyTtBfizmhqVSpLKnHWje8ZvTHumYrPzEwF8mmWX2kpHbzka8xjvDC7UFxjVJ57nHdip8gLhxNBtquFLoyvk"
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
