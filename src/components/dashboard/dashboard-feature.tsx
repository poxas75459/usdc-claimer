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
    "3CEBVzmcbFQ7EnmHJwDBRkZy1PJqYAegRJCXekodwMUXcqqbGbbLmvEaAk3aegw7pJu9RasB1WkWNR2v5dwpn85S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64NXkKXdniEiKKtBaxeTxAqHz7YAk3PXvaWZC4kRzs3rVCtZ5rXTo9AuQXnWt361bQv28M29dQcZuA2S46NgYh5W",
  "key1": "25DQBkQ9ZahTgpcVxMM1pvo6zgMGiGW36eD4Waw3zgrGH5R71bPagDEauUbSAFSqXnzRhBvQnYDS9qabMctg2dJj",
  "key2": "2ektB2jeakCTVzmf24696SFYLCGySKFyBbnvSPwBVAdX67XzNwfT1afRxdtRFQoj3eNKHvnijqDeTTnHNqX4zEfU",
  "key3": "5evuYpn6y5tKjgf2iYqes6GK3RHeytB6NmhaMPym2WosEYsSptswou9thMLnvRuXdz6bH64n61Wc4fpih6GbPFgX",
  "key4": "5C4QhtkXXkPQFS1Vrm2v5JTbFBZt4kKsp4qSR2bKJoG15nY4JGFLS9AVHocfQGi5HGvV2FKpWWBnigEhs3ywYD6n",
  "key5": "37KecEaeH5HAyCQqpj59snSDsg5fKgGKtipvG3Dpi527p6Q9e8nY3Ect5XuV3Hx7HEZaMCxLj3ZpUU4JHeumYpLx",
  "key6": "q9QvheYPSZSN2ejTPxVNstMCXQ4qEgwFCZoxqAxYxLH9ERj6xGfmaHfZYcDSXcq8kFhC8KwkqnfxwsdbvboesBy",
  "key7": "Td6ueHehZe8Y8GbozNwLjJhdksgkBQokuexgmAsEzX9wWFaikbPFKZGKwvmoyzL6UczHuuFVmgHoKjAtH3C1zoZ",
  "key8": "Z3onsfNZ7WEkJund3KPo7v8xUihfC3DgEum8iV2BGqfYpxX4KMYHMN1kUAXHD7qA75dWPRXCjvBUmuU9tVRh7mm",
  "key9": "3f7YESVcFeAuVhRLC2a1oXM2iC6RkqpcW7U16kmmjfY9MLFpCLjFkK9esRbBxJv7L8v45pnqKVKYneVQausMLJ2U",
  "key10": "5wr58SAzuQY8UX1cyX9yBU8RrKdNv8twXHsq3Zef1xf2vj9D8G6FNRwVxisjVpn6KhnsQ3eCKPLfYREyjfvz38hL",
  "key11": "5KEP9CirWF1DfXJFv9FoLyPvV1Jx2e9wMXjLZLuBTKtpbnHKpRAv5EkCY6CC1GJoQnAgArwvUdKzrGSz8gaaK7GB",
  "key12": "3vH47Cimnn5kiYcs1Hx1eGWkse1LSvoarNKgkkJWT9rYMvWVD4yTc2cjwQwo64uzWG2bZyuAgCGKf7PUAYHs2erN",
  "key13": "3UcuiPx9t95MaPW2NVD17eNXF8DWB1D2GxQnBXhqVsvcWVGwm3EeU9AikBGsH6Q4S4K11geQKn1JmXj1Y3Mi18ao",
  "key14": "2m4BkYgdVJGNHxqNYetzNQuSarYNh2pak8JqskaQy3f4qRiQ4n1uQfAoQnWfC15yARTcYFYpiZBEuvftwof28Paw",
  "key15": "4N8Lia1TM42gNsTQoJJahYnTZFJG7WWD4YTEKLM1BB1bxrLJZgJoLY4JEct6ybjN9oXgfuPR3F8QySGyypYLPvM6",
  "key16": "2H8Lhma1mEDcYAcd1PnqwnbTDmXsjPZ1ASnxkJB8dzM1u5Ykp3XYFeAQjUFGQYvjxhuMgy9Y4JP142JQHWTszB6M",
  "key17": "h76SPGeSTWvak5CoXcXLwkJJZ6YSfPEFZt5G2Y7xjSjiD1JPJtujWixtMuiJKwDaeT8UFJaLJFoTrvn44WPeyhR",
  "key18": "4nijXYSmAES3QWJMz6ot8H2FBC6U5R9AQahbRVPtcVWevsraqe3VWuhshJoA8PkxerhmvgfoxFtaihDoEQP1wdR",
  "key19": "2NwWVsAwpMoNB7e2wgpMHMAmef6aWA63yVUAszpHPwH9uXpL3Mwb3QzWeQpgUw1jdds2LVXBsQSJMenjyQz34JAe",
  "key20": "5VTuLRn3Hr7ha8oPLqXPDoNgVabTusSAZZG9i3qpz97Y5tLWradjBUKjQsbzRrWhxPqo5ZfRGdskHZdWEpXmwwN3",
  "key21": "3ag91ZMAdDQ4NhztBR6AMzNqSi3hGp1rwau8gEvGHfvL16jA7UJQp6r4QSqzVWVYhWnibMtrAp2Be2DdyTQgnmCB",
  "key22": "prtj9wuWXWmtast75XfkCzeVMicBRsJRFLHibjKMyMoiBefXMfjaJUjqzSDzPE3VGfDDLdmt9hnZezdSg24gcvw",
  "key23": "56VQFauedmf5dGXpduYVHXfwrbfXtBpU9cHTyNYLvgbjFCt6fcmCM9mexe71LaacACmEwRVe2asdvyTzyxPRD5a5",
  "key24": "3EhCe4k3hhBzNsYKAdg89Pz13CkL2cGrppDmhC24cKVkxkyWGBmUQbAseo8jPbNKm93ePuoyasScWBHdpfzDXVgt"
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
