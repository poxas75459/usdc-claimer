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
    "4CjKX3quD16LpXVcWj11YW8AWm9HGoXDLenw4jAxfDENGBESM4hyeJSycrCEQUef62zauQEkM8m6K9cmDFZThMHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5obFjvC6pDVGw4qFUwaULT4RDyfXmWYQNaXFfvq2BoDWLDihQuWGjKzRhDpdYDVrjBLWuxkUUj1Vrpct1FEHN4GA",
  "key1": "5VGs1PNpRboLdwucak9jXea3KSkVZocwMGQRRF87Y3s1rpfYDtKbXVgZFZiG3oFBHFc9AyiyB6VK3KZFE2k8xnzp",
  "key2": "4nJKPp9KAVca9pBSbpacp9t5FgJbhuhSHz2QyYvD3jGvnPa8FheQ8CTXRtXm6G5bs1wtcc85EduNhYLUiJAonJkN",
  "key3": "4L3R5jjMYG4aowWzVwFyqWPguuQF9Srv4KNfiAUGbJyE8XL3f1VPvUUA4F7y7YPUUScwBt7Y5qafbbHQRtUnt2JP",
  "key4": "3SPMVWCv8gkpwoXF7KcGusryobnXwPT6HFkYJBYzbCipoekiSUYaDgPXPZFHTotUQJeKP83eUUXnBub9GJsrv3eU",
  "key5": "3EoGfiSD7pnb4ayq6YWPnjgek8MwDUoAiQFTLku4gxJDhERHinBpJgmaCv9oeJjoMUVqPCFwE9Kuekg2ey7GdQBb",
  "key6": "5Kz5xdGENmaUNARgCuf7ZpG19nrgnCYJDEq4567n1KbNiDRaoQ6xkhb4XmQzJchjmDAJR9F5bW5zTPkPAtPSFP8z",
  "key7": "4iFrkC7cWAAne9L3f6ZYpNZv1msFBtdCEw88jnDsAa9Gbz1XNcqhkuM9VgFN8x9kEQ5kwJaRocxEYNxfyAHUmZtR",
  "key8": "3cQ3svLQCBmfy83NoyJ59vBrQEuRswNJr3Le2FBDg9P8ebjZE7HNp4tdprTxuQ9EDxd8p86WKYEjYDGv8Yg2P9zq",
  "key9": "2k5LPJTkutwcu3EYfuquQNDtpjRSotqP7cJV5JcxnPu7WaxEnF9EhS7hgxrCtQxg7yaWUyJJydFdtdDv2m2ieb4N",
  "key10": "3xKTLjQ8YW9Zp6t3mRT7pAn2kSh5hvQxjZMdqyNreJsaPjWebTMkUJ79FtHN3QVLTLu1jP1mRgdG3rDtevF9dQkJ",
  "key11": "4bzUJqqzqtLqCTGMv3bxMuYkeH1N4dHzYP7pBNZFKjvxAVd5jy78iTehRCgqrA3nF5fkyzKLBZrzxNAD4VbaV8VN",
  "key12": "jq6dP7vNVxrnBT1o24f3YRkPcRyzMp9iTM7SXuxgfDZmS7cGb7DqdUg49YkLEMYavuvtUE8TSkqWpFpgPBMSZ5i",
  "key13": "5SJZvSHYPYE4jWf1GYsaZiMqeJBrEmMTiibPuYBB75p8navgps2xStzHUk8ZTXmCWopRdNfQg85DXdLWSTHdustS",
  "key14": "AzupAzH8JScA5tjf9Hsi3PvMgo3QX7MxsmNifcjX5DRnBXg8rpLCp6UhBLvE7QppRGELEQGQs3qKXZVwogQWKNY",
  "key15": "AA7vR8dqFAUaiiKUStAATjS1SMHfhrgLVPv2knxkgQh3nFbEcTxxWsEM8krexGQ2aYFF81SX6B8YYyc83sx8K3m",
  "key16": "2p3iGV9SL4uqBrGXahagvPgyWWkqzW8NZRYqNmc4o9PFXdibA2WGF4cjABc8UAvx8Hawqz7NEUHSnKCdKHF6roPR",
  "key17": "4xErKVh6rrFxtAwJQPMyPVbM63xDcnnb54ZzzaidpwtXjNvcGFzW62HQ3Cup6S45EE3D28c6HGeMe3o9Vhchp9p1",
  "key18": "4GTFcW82MbN5nhfV7qQiG5v6PkknexkSCPpLVgR84d5s3R3qNdrEjN3n1BrNuNHKDkXXRvCcZGbUdAF1HnogSkq3",
  "key19": "66KbrE6KLiqFsN79SakHM6EQhfmkXfPQgw6TFGJQBh2Ehmiu94dx8HrRADT6QCMuNggnhAbzw8aBTowwsY5mjPaS",
  "key20": "4HHCSCLE6HnjWZUpbY185wsu4L5ENTDwrLaG7SseZfH6XakvkqX5YTaKkYqy4ZH3GnVSQB3tCUaoi4CuKoK7pdm9",
  "key21": "2vDCF2fQbSAa1xKgBeUs6DHTNqRX6PzNn3vmwU1VqAZBDHAjkfaWCPx7Cv4MsdqE8UkZ35sa1GW2WLUseUEhJWj7",
  "key22": "UNXD8daXSB619rcajgp2ex1GC2zQ5W5djyjgy76PDXN6xykdmYj7gRKc4yNZB5tchRJtCAVxyuQgg4Lmq88Xv82",
  "key23": "3LtvcbRDwUEBUiCmU2E22KwE2XcQyqoUVwTRGRS761o5CziBqhbjFitwxgJeZCkXKPfNmb2rNWhv5UuZzJ4eCqLK",
  "key24": "FXP66QT4LQJkH9cTv3ijs4xqHU9iEJ3L7YZC6Ak8N2NVJahKTtTA9MXTTp2pkEBgkFyo7hnPBWLYhk8zqXNiK6C"
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
