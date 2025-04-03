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
    "4ZQwXCjVWZNj2YCHTZDSTWeGwZ3t54sv77bcdGD3uF9yvfSh8VGytcooQpU3yMuBbpWX8fvK4YgPRUCMMy9AD5Ts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jGyWpcbUTtFmTuPiezWE4U1fcVeoJuyw3K4U1GM6a62wp9jvgjdYMXt9kQqk7Rp7NWfJb4BdPL7wMwwU8sFSZih",
  "key1": "4yZe5wE1vBri8HB3PNbVKC7KBzcPCY1snMwgwev76UvLL1mUffBzr6ipGAbU6ZdBMh5U5yqa8MgGZuMDMFAVA8QC",
  "key2": "33C6U1BEdHTXprDy3fc26QDpN9yqpY5EuVuxVGtcwjGVonTyWavBWNAZevLZXhLj6KZDcAuTS5yd1hJdGSaCEept",
  "key3": "5P8SDNF2v7VPUCodUo8KfCFHEU8yR8LwEBUuWXEnPuiZSCCduMqBByFtwehjBChefsY3Vo4B2fbeuKhHRD7DxQsp",
  "key4": "2A5PMiD8BWWRikRLkn8gkBUfdJyFxMgNPBfn3H7VGsY13h1ke9LJcT5QfYkjLe7Psz54xrnxR6v6WFUAgWGVV8wq",
  "key5": "ygGsxouV29Lr4XjWgk5TqjwgGoRVncMAAKvBCd8ALHChRDA86PRTfv8eQQT1iabgBWzV6gjMmsE32TYUjobFCth",
  "key6": "5vBfcgRvxDgHDBNMMPXwZBcQaSsVVnPzw2xtu39wCLxmYZjFenFPEpD369JagEm6z8wGTyAjbchAEAtZcm8ijNPg",
  "key7": "3pgPUaU8qfozc3onaxr2GMqQyFvhu73ZS2k1FaGsHGBFry4nx3M8bjmVrYKJeHQkWUfhzSjtEGFqxsojTPQh8pV3",
  "key8": "4r82JZFPrMsYv8ZnqC5cHqPAmeqN9GxwBUmwB6PzAdEynVD4nSsV95kYwHmQTFgT3StM2PipqbaHSYFvQAWDh16N",
  "key9": "55xZuUL75HMAcPaaXF5NUqKeNnqLwRfAU3Hq9kCKpnSwRuVkPnteJ1WVpiAATjVQmcfYzXWTQ7C3jewWCv7is1E7",
  "key10": "5zRKNNLdEBY5rUz2XmoewcfoahshpuKDThNX5RM7TNoaqDsUtMRN7bySq4as7BSWo8uNtcn5WWaqaFwu1h3CErLG",
  "key11": "2YkLHDVB1mS78sJDiY5iFpgdgP1KTQcoQRnRZu815t2MMxDdHwtDWQb8g4WTWtF4EwnnS1wV3ZuPyJ6eqwSctR5P",
  "key12": "56GUyuQPwaThqstmhoT5YE4rJF8ZAyH669qTKhuWx1ZhUgEWnyaZUsunrfLSga43QC8SFH8mfjwZZTLUSEEFgGtA",
  "key13": "ssmuAQEpz1ZVn7yhceuNZvCgDYdXv36u2BfP4nfQjSomiyRm49mWcrfQNFTxSnkA3NwBbbjWxvBeJLKxTfVYdQt",
  "key14": "43Pvpt4xYjgRvoAYbVSi8kKwTthaoGfzShPnQAirD9CpNNQ4hDKgTh8FUiPF74ktCguG82SGDaSo6eYbwZwks7JS",
  "key15": "4sjXSWAkKyxQ9YuLXTrh9XrPL4obNa1utZKruYt3ovy3adkpE7nwLtiMgNEJKBZztQPqxhXX7dNNSVBPZtgT9Udr",
  "key16": "41pFDwyskrWRiyidiKzLFQj1F39JNNa9Apv2J4x8ay4HZnLZpPUx4b6uAhHPWHDobqLBnJP5wmgkKAB5KPbSnLBG",
  "key17": "4W5Tdey4xEBWKMMHwVpGaPZuUs6ZumRhKYNsWKmCaux6BfSH79kBXf3MQDdjom7m3C8w53Xb6VHCfTTbyYKsRu89",
  "key18": "38JE6fdBc7bv9qu4m5ttqjRuVRW7Bd5WVV9DQ1y6Ur2KuDR2u1bnf5vsyZ1Rkj6Dk32aHr219zmTzz4sePgNRqTU",
  "key19": "4CMe9Y9VXYsibp6nRhxydJzsfHoFuvq6Zo9fFvhzxqtRekCKfnUBwhAR31vzr3HRip32vERCLwZGZudiK4f6zLPk",
  "key20": "HeGTkC9wmSBV54N8czL12RzWrc3jhAwWp8tcLQ3ikBFUwQbP5GHAxhk6gRHbAeTNQy4zDV59fUHh1xj2q6jrdig",
  "key21": "5Qjc8MqLuzLuKkJbf8urAB225rS3oxAqZNXLAeWiUH3uEYKSCuZXXqwFj5mP5BZHoEgtHNVeMGUh9LvWvasJ35QL",
  "key22": "3LrsbQjaW9GwGTkWEJxtGgLwz4S6v8nbRt5wHWnKepL2VfX7vWn4SVzWNFjWLGpXdHVgtrL8WSDmaL6vU1kzsYwN",
  "key23": "5qtx5DEPPn16sdeTa4raSjNsAZEomUZ5hPXQr38ycxxs5f3uvDKPF6pL44kstHoXiZHJggb4kKWLgGkGLQSLbJbY",
  "key24": "5M7JYJy1PsFHNshCsUf3ezfYzroGY5uft3aKaEBXdGZi8hJyc1nFgLmPaxVCBQPbykA3HBQf8ydh1cha1ot2ACKv",
  "key25": "5qrHH9oyg8provayeAzmkoPWE6TkbX71YTqMpZS3nfoxeDZKifq7oTCWZ6Kc6wkVqLq8G8BPQvptDGrc3zovXAbC",
  "key26": "3tU3Vuc2xREJBrNx7oHF2crVnzpdQZr9evsu9rAv6bxxmfkmnLyC2udBYtj7daELYu8xDo4deAuGRfXQ5Rab3VN",
  "key27": "3LKDXZXr6jvtHyAvBt3LARmCPBzmZRfYcSkVffrEd27EbYpXQTHDNCL7L1jEuEHNS6zTei1Y374HqkRrVgZ3noBR",
  "key28": "MtrytCewHLsmvaXuZLbEVPb19k7iLe961P4fDKrYJ8T9v47FV1NjF4h2rAXrJqUVqst7qz3o6Pk26YZC9LSLA9F",
  "key29": "4GnGGYBrMNmYCF6XnfF6QWxzNgywqx6z7oag1Aetyke5zLN2hWNE2WjLe7hCMTntwXK4BGhazPQb9r3RNMabp1io",
  "key30": "4UXNkTjH3ckRndeGTKfgT5dtNj2DkPH4hatP6qZ48qYdv3Zp9xaFijssraGC2zkqwZ9oV3yevF1iesPJLxPWhzc"
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
