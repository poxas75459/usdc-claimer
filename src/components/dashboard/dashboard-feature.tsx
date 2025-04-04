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
    "a5pvwSf5NWXXaFgECXzh1imGX38epdCAsrYpz62VhRzrTntsd4XfpCZP19TCKC84ct8Xvs4dRHvXQNGMHcGMK51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7RvZUgxXsQMfdh7z3PduMyxdYXdTwz3bDVQeNfyznAdPti9j6oY6pw6xacM4j8FwFAgHKFuyhAPnyszB6mEyo34",
  "key1": "3KG1pXxFMjQmSfEs1VkwFCj1LtL4o5fB3jjLxw3XEugy7YWyCS64ADtKBTSgmfACXMjrjyERgNYgQBUeAdAzY8CV",
  "key2": "Dtwb1CSWV8gGE2ET8gJdT2YYx5zqn8iti3uaPGbbKU5ZUdNq52sptb5cRP6Cxd7T5tY3RZFDXpHKY6UYUDT73f2",
  "key3": "stmWmogbQSey3v2tdzybB52ASeNxpFKoCsEQJ3nmDiZPQ1YFZ9BacNvMPZq589YQZTxFgL6XwZZHGWuWT2FfZwd",
  "key4": "3j6G3Buot6UHAsQGTiSFYy4AuiRGJL8ZTvpyKrgVYbCy663XRT2GgbMLYZY5v2QrMbkK8ThwUeRKgMe53tkAQ8T5",
  "key5": "5akyMsJx7BFfi655Sz3vaWcDcUsBp8jmVt6A8zrva716TAN4GxNZPThZbfTCWnSY4VvcpEFavDCvh9S1J9ZYV6SP",
  "key6": "jrZRSXNoJ5j9isiNYnTeATVPzsYqMk7sgUYKvegkasRbuSypp4itZDE9FjEkW6iPYt94FgnRsr8xizcwnLxSrjC",
  "key7": "361NEbxxTKRhjFEeA435ECrgShT7JcMPvqkniz6SoC1XEH9TaSAiWkdxbG2neAgYinGpyUoEBwXo96zuyXyqbMk4",
  "key8": "eDUygqMvPLVQn4V8APSkE9ZHC7UMUMb1mhyuVyPC6ffdsKbk81E3DFFtpjJq3dWeAM6UmHYm42qAc6WeMamxD8T",
  "key9": "2QFD7D3RXjks6TFhbBagGphW7QaudwausymXPKeqMZ1X2VVqjePnLEKwqQH7y5aEQwcbtCZWGrFDRzfnRve8dYDq",
  "key10": "4bQBwVeGBbsmpNP369wCLsDRbrUZBsK7VR94ymGf7vMuX2nXpnd2ZGh7Dukiah9m9tfZHFrkjQ9dGYNYxT1pcgs9",
  "key11": "eCssgfgVnzMLK8ekhSdt45YpcGZpBvXECVYQ1kzAhqVRPSeB9nQczCnrPFqoYdq5VoHSSdSQSRR21hnCjtARu78",
  "key12": "5m66baandefHB8zbzeo2BDSAZcnPe7nD2tdMKypn5D9gqNP5aXHBxVsLj3e9rvadygUYbqVxBgUmL6FmwPT4gtBK",
  "key13": "493uKgvj8qY7ZUGpxat3Yc1bSWWM9jLcK7sSKvUFe3y7bMxv1jqybW1p3ytH823VLBSPcfCPZYgcr9sc8ggVKfvw",
  "key14": "4UeLfWqN3yKDqhVgJtrv7uUrfTFv99xCsqoSH91fyUMuL2YmB9gEwpVvKG4VyEkGufSdNovKqAnDYnpVF3aeczbD",
  "key15": "2s9uYfwiL7p3bmuKgvtbTnv9CYMdE5DtLR5rudD4pn2bG3GCer19FHcCtjtLA5wCxFbeeWFFTR9kVGYTpKVG64yH",
  "key16": "AFeLZ64md95tUrujiK6CmW2stbWMfrZfSGn7pBheNpmp6KXViSwKHexN5AkEHcXFmh6zfZUK8yhaN9fcw6ndjRK",
  "key17": "vUz7xJmtyVZ9erUZg858zCpQEdFhqnJvScsHdGyErZD1BPodZdiLTk8jpBfzpJKYC9peSKTagUz9GW3jNPXNEe1",
  "key18": "5VUXEi67o6UPDRpPUqKUvqzDhaHjyumRkPMx694JBse2s5Z8KBMLjgtHAJfbUF9pd425EoL1FxAHZTNycvzbR4ou",
  "key19": "2jFc9AfPYo8KVuJ3aqYrzDSLJxxDBtw9e9wEc6kBKekUNAxxawYAr74dnLjtdREHfnTxRpHUvitSsGuwb1eHMnY6",
  "key20": "38rQ5DLxagjs2vvGzaT87M6WH8eamroCSfpuokDQhSdBHYFSJUyXExAMK9kQZZdVFfAbAW99ddmD1ZRi6rToSkw1",
  "key21": "2uCyUGQp8AnjKmYQGwQRH5t4gnVVby5K4r4jjTEpD99pFdNT6bSjEWgK43CtC7bxVUDEVnWtwtVzQDArxUDwVe1L",
  "key22": "4wwQnd4wygwR4Hy5wMWsMT3hDi4KUQ46htZ47Nu2uQbZeSvnzMwB5UxMqHaXTpzSGjFX3ipoRcxUoBu4mS415yKn",
  "key23": "3gTBQjYFJbwUhfHYkW7TYAktnhuyMqSciqeCfF4LtfBwPgUAJKoZjgJWoqq55XAY55kbW536X2GaKa9UTDbkArqP",
  "key24": "5Be3kWvCmoASzhFjh2qHMCyP9GQApg3UV1G1DaEpj47HwWuWhvcVcj7n64kWv2ZFCEHPwyJrcHdbs41DC98rKyy7",
  "key25": "57nAZijqxQEgpRu3EYLMr8VJ5kUcfPdgXMAmo13Xs2Z44eVYY4epiXJvhxXiWZoaSARRa9KVvFdDWiUF6u7jysKV",
  "key26": "zRLqiGBWtxqz2A87ZRofDqksPJoufiEr7Z5dQFrnBMreMfEVwUj2c4ujrLWDchmXLQckYx578iK67H6iPd85ETM",
  "key27": "225r5DrLruzrRm6mekmUyFecxqqTHK24Rqt6g6tRf9pBKEBFVZgpZaUmyveUMp5PciE58J5Jj9mNsoxJQjGRErn3",
  "key28": "K2sXi5URvrUU8iTKCecbu3eUUUUVvjWoWnpKP5zHYhYnQB2xEjeX6AjnNkS5yGcYimZJy2MaxJc2YqjJTGaV3yD",
  "key29": "5244rtyf9K5iZqXW6NWcHraafQxauUWxfM1HVinwyrz6xjoKwfGyCisEihHgq6VHrwG85XDHjXhSg6zpXvJGYqQv",
  "key30": "4nR8aGaZkUhY732L1PyhFA8aZekzvkxXKhNrB9pwnkbvSp5RoDZdnYBcBjoo6xH5eDcC7i8w4CpQKX78pTFniCXm",
  "key31": "LDD4T8muk5M38R3vQcHt7pUMpruwcRQWJqrxNsocPxgZBugN44NT8BxzMH6EZt5PwhxB4goSXRZeSnd11Z8roC7",
  "key32": "5PmhRrK5wny9vPxhUJUqZLugNnVwhZSPmEas5MRNnYqsAppBNi3T7kaMXmprXrg77KNSprQuJM19fgiXZxeoYPV5",
  "key33": "QonSq615tkF9cri61B2ChHf1pYgqgcasDe2AeMWqLq5UPxkp7xDdiqXfXXExNk19BeUNdhacA6Ej6czjFrsYHVx"
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
