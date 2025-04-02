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
    "3xis6LQcFU8p3entErAjhKgzmKjPKQXx2WNkz3rCtFvHGc3uusxthmoM61KYVQtbJZjtBkQgmxsk6596dpDu4En3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yo986s47fwhGjhosAgUGTnLjMZN3yCKjy6pZvKEuUWzsy9Jap4gPXbVTBxbr8N8RbBax718JRWoR4PhbQSgaovK",
  "key1": "4dtnxESTm5iomxWqkCaSoe9MEmbfCLe979D4ULSNF5cAu4cMiPMvyCwueJWa7774eNDXdf6vd633Ucg3eVAVjDBc",
  "key2": "5YcYvWj92YmdsWEa395ApD3r2CDXTmn3it6XSJe5hmvETjks3B3GghFzgjV3GvgnxY3QgX5YfmLdf2LG4NPoqKLL",
  "key3": "3Xt95UhFYtrdoTsX3K1CAXE9gAeGmb2fjFGSPw7aot4nRN8fptf36UEGZccpYkSWyV9Bj7RydY1gXpSMRxUp1YQj",
  "key4": "2TiQeG453CwL6PzaVgVq7hT26KccqEYfWoFeQjeodu3MyVGfJzzyUoxc7WUmEbJKBDU9fUnrWqvGGRR9U1TJn2Kt",
  "key5": "2V53koPZgcHomk91t1mMX8gpHrnbb2vrNkyAEBrFxtREzfEg1tbzMLmVhpBR4G8RView2nSs92XmQBquFr3vX3ed",
  "key6": "4tX6mokM3yyM7fUmfQvu2WqmrkRCo64Te2WoGgQQi8bZ8ANyvwHgi37fFcFBXEEm84EqfjQ4hDPCzTUb96d99m9J",
  "key7": "2dgTdNZdzNnneCF8QLieyKrz8NatAxkQqWpbrrWGCPAX9d8fCBi6krAEiaR3tV2yhG8Nt6MtrWbXBxMJQsDe5gyN",
  "key8": "Z1ZN3UEYEH3xJieqgN8BUg6j21My6AYbJUbmcR9LSg23jzaG9EGdcjYjD7B78weFv1Qu4mrJc9wdYqkkf9B7bRJ",
  "key9": "4Fzo4j95zn9KdUq68BZsCnjHmov93Jbvxvpa9kL5Uewnf3pV2B7ti5khSfkcwkFfwif7Pgs3GxKoTBT5C4vKozvX",
  "key10": "39tUKk1HfdpCh2bb8sCZQSTzuVyuttMJNDaWmbxfdvbJFeSu4jz7rLnEK2BQb2ZPhzXxydif4kKR1ZZhTsvUJz9F",
  "key11": "39uAvvALAx79ggUFRWF2dc4jFdgnxqaV6yBYNc9svPacS6KP7n56DKo8hLabVWwtXt4PpYsu4Tw9pExUd2S3nXig",
  "key12": "4FcvmnxKcxDdhHxByw9asaPuPGW5rHFu73wUVBJ3izenWgPSqUsP3466mf1N1dnxztpU4haKXf5ErwpzGLV4vz6U",
  "key13": "5gf4cjzpZD2ZUYWku62kE5sSJxF3fRkY6N2eJk6Gnd3Fw69NpGMuBu27yZaYS5XCVdMNBeG8tYX35TodubNYzSJt",
  "key14": "5mx8g1fXMFPB7QW3M514UwKzpzmux9CQyhpsQp6GEUroomsYFiomnk8sTP44KwWP5CM26BuGb5EbhaLya4dDBc3a",
  "key15": "3erjUYv8YpwEzrTFnqcemUGVjezySj5psr8PFPzwv9cThaGwp4dTAqqbhyuoQRgCCy5XBCasT6UhekT13TAH2cbV",
  "key16": "2ByjCVMTiZpYNYE27Hy35wd7QfKevdSYDQxHMAi3G3UpmMQR4AsVDM3YLPB18q3sDaXUAxTsb2pN2AG9B9MBanhu",
  "key17": "5PwiTrA9U1khrjamuupLgAkmJjhr6e6jskBs1uRzC1dygBhbJRjMKc7d1niaLatNs5o9xeBgQrZKzqLZWDHUZ7io",
  "key18": "4ABGAhe4FVygcrmJs35Syks2EySviUL3qke9ammUzYDNChi56rBGGTuZiUEV1K56bmo8RNvNjKpBryueY6dihE5Q",
  "key19": "5WyRLvY9e3ZdHy5SbbJ57TFqNyw4bXEsCoKpHUNajFLwGcg8zH97yCYkjyqpag1uKqgRgp8XCgcohGhF294BZWYa",
  "key20": "45utJFCkm6hQzCaJZNeajKheGGo6TcELC8VNMLXUSAxgpg7ocE89bHyNP9JtBhyCU4uA87m5eYtyiUfEPQWDfMMN",
  "key21": "sPagYa2fKtTY5zUk38Kie4sjtFa9zZVE6w5iZ4wYhC8nGZ89j27zqFV2oAe4jTptHSTQ99Wwkza6upwjHjYmxVW",
  "key22": "4BYWhBdaiutthunAZtbTrZmu2CRKqMBinJdogQnJjVXABE1mZ6dxDJT1UuotpKQcpGBmorFgoBgYsWtD3HKE1KQ3",
  "key23": "2HsvhBe4o2eimkkGj6vwdTH6bS52T4SpZB3PvZQrk5uHE7yTH3A4gB2c1qoqUjTwu5ojgbAwS9AsTHDbQmkxjApq",
  "key24": "4sMoVWxY5mN88FV9MercT9xc9fRQb5r3QLcFkAPFeYsgQtnPFMWQ5nCQTXf1qTaYgU5ggsjGE4Kmff3wRfVQ4Uos",
  "key25": "FB2Cymdw5TQKxtpLW3xDJPCcaCcUXChndvdLW9QjGZQXXjTydPg4PrNauN6LFvguuohogm5VZ519d9tscrUnnyK",
  "key26": "p4ToXEHQX1h2ZZ7pgko24VEG4UEPT463YnfE7f8jC2n6DKu5Xt54Ur8kzN7qFVWu1tNrhQbrMeYDNgEybsngbae"
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
