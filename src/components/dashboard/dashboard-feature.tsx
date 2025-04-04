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
    "P7rbty6oQxCLswy8hVBcRq65cdnp2vaXmoWdNek1y2w5tW9DX6yUmVXvJdk6ovobih6FYm4ovQQnQR1wH6QA9Tx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tcCfxD9VjqsacJC8x6TUAbXqTB8dN7Y6uZMXiNYLKzhy5y3db523auNDK1gNpWio67tqwBGeZ2MpaT7xcq9fhpa",
  "key1": "4dB9xQ6pnKhHVz8LhNbpQCJgrGXhtqpBDApXikjPZGvpguByCznoqZ9EhsFvanMMZEP4Ws7m95vLQTNxnSpZDub",
  "key2": "2qrEDmnqFBmBCU7AY3pdcTxZbw8e3LmZJvCnyCE8BrCRLqc5ve3SdCTQBXKWhrvP64fgqrLvz1JvuDz8U8bSVyCc",
  "key3": "4LFgpCNEV1DwnDMUHyLxFPJhY6JSceo45NhnJYhm71wqXXG6CAaMPYdKDeFESermaoRgeu6pvRK8ut8MUAoRMV71",
  "key4": "3fNtj2pd5YGRYKEg1juQiUtJfsdF83gjicVPSxUyThMCaA8zhJxGSUMibyJkxieiSjHRH3umYbpcD7xNyKeF2HE4",
  "key5": "4hzNyuJXNRaEm5YZiFK5ztnE3B7bqFmJf9dy9CbCLsHxctCcvHH3eiEdPrNXYoMVkHNG9utgvgeUhnQggiE8Lfhv",
  "key6": "35ukiposQ9TpTRcGQ1PTfv4i1Z91HaL859qtsieFbCzWpBXSYU6MgieXCmTShf2km2ckcjRg9ixxY9pUfr9BzVrX",
  "key7": "5G5xbv1SDbkUnwndRd6phKqMNMXMR6kj8uw8njvVwLfntVdEagyf7B2uQBAWavFcJrPrXTwFnwrXa5M2AuUoECp9",
  "key8": "3r6CpVBkX58uGNnXeAjkuJci52i4jnjWQPn6BuPA7AbDJ6zMdDi5jpYveGBaN69ggtG7kZ5Hwyt4VoL88z1PcHb",
  "key9": "Ubdp1GQjmELeKPwVFfih2R26xBj3uhcT2HHKVSSAHZVLXRw9GhxzHe7UuPpo4YYRdWd52YeKMNLDvev7HvjZA5c",
  "key10": "3yeF4EtwT7gtbLpRjfAgXEbgLTxnYjzLaZmSrr1HPtEzrzUhzJxdvoQFcbtrpo2y4rtAjqamBFh2unmTLpPUcK3v",
  "key11": "g4jVniazsUJSc4toiVuQjJpebANErLxa4waJ9nuZ3G2pdgxLsLmhLXDCNmyA5fep9cB4T7WXCWyS9XL6wKdPdQS",
  "key12": "5t59DXfrToVyrbg7uTyv5ajHqzXDx7oVu4M7KrqoRPVspJYeVwoi4LEJDYddSVYRELi21JQoWW23Z8WrwbxqcvXh",
  "key13": "KK5J5LP7dUznAsjxyuyFPNZhzGi3anL5j4yKWGYZ47SjuukNcT1c1DM6Nk9ktF1riG9TJ9r3jnm1AtdVqEveLxM",
  "key14": "2ESUJVmSY2fqziQaKoNn9ynG4HwGszvcGkXZzjVVDGmFjVsXtmNodMPZSggQrTkom5sY38LzagifEUQ7wh7PfubG",
  "key15": "636dBXaLxcRSG7AvWmfQ2RCi4MyG3RT2K8cxrszBNqJ9vHKP6VkuE54qnoesnhwxUxKbC5D4TSk9oLDCUb7kxrPF",
  "key16": "3NdMQkvohLCUZA3mVe2KhJv4oWA43cVxj7mX7upqBAXArMof2QaWH8LUNLGMuCrfBXEFruaP9reTpFnK9zuCXSJH",
  "key17": "4jqSnN5WwwS3oiPiFomc6oMNgwNaRxiXEgdRETDQGKeUNcRV24XsVhjTd45zcyoLtDtaxgaPSfHF88M19koRzwdb",
  "key18": "39b3bQ5wCKFm4TFFqgXtA4PHVELH6TyfKvu4jqzRhdZhk6P7KTRNxM1htCVr3jG46tnmjujrq71NUZVKEBCfTAwW",
  "key19": "8g2ncfk4aUk8UTt4B4h7GL1Nf86GqX29B2LYy7DFGZV2nM63MkMeiLbt6qw9U8Spkx7WrenDe8sDEnAqUCGG9dq",
  "key20": "7PgXpvw8kKrmEycHd2g3H3YSH4vD1p5xBJ9YxbnbE5LLkbL4UNyE9YP7Kxkaj3GaB2rH3Sk4HtE8mnHcX6X7vWa",
  "key21": "5HEtxeYz4vYGNzwfi1iby2gxQKjkL5c1NwdcVLnVuqUawvTZwARidm2PxZcoFdQirCp4hPxrzbpyqVvJoCa83bw5",
  "key22": "3vf2b3P4WgxwdUHoiWftRLpT3eF7pbEWuSCaCKxfiHdy8QzVGXQtziWHFVytfaxkFQ82wSHvznuEWPwhnqznUBnu",
  "key23": "3Jr5eeSm4CgiSRmoS2XJMn9YWHoq4eZ3js3GrhciaLkrrVCEQanK43rvNvU214166tz51BBXHme9KDU7Tto6EPuZ",
  "key24": "4kYsToVCLsANQaya1a634rUzg5ARyKddJk1P9Y5EbRET3G4eHjXpDk318nkhtdH3RgRnRM65wrzrNrgEriAPzXma",
  "key25": "5GQ9EeeFLU8KpE9VbQBfhHMhPRhgWrN3VKHvV6K5AnxCan8QdoXvtizB1wosLmSR6gJKoYqY1USzjjTFZmjfejUR",
  "key26": "3Ra55XqHThCRv5ZU3gaCoM3JxB1ThUVqpu7s6n15ULMaDdHRu3v9wwS6JAVcrGCCrijYknPdsfE8U6hK63jVRmCe",
  "key27": "5LyVdFoGDRPS8aTehCsvQx2HexVAaHq3Q8o7ZayCSNW49NAsjSTqst6WYnu2RoNnhAeaxzJJezSjVnYxaKV5rGqM",
  "key28": "6Z89BnyWauYmGfTCpgM17VmioWDDYDQPinoW31brmK3pns1sRanN82PYfcLNzLjnf8LxPiEFGGf6my6CB3w2F1t"
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
