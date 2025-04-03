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
    "34ry57qtfmeWmEmggQp57YHtpRdP1Cx9QJFrD1QzzK3qAJ2ZgiwMGuvz7Fn2kAF2fVqnYg4ByW3TWvsN3V5efiQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DLjCqziWW8VAwwxuuPfGBWqw5D14LFKBFm5ourPDdoXJmXFcEdx7Qe3mAdJQeNsrbErxLdqLrwbkpywj2Z215Wb",
  "key1": "HFbUZVkDopx9v7kzwj5VXkk7mqctwwnoTVGJGXDBQsSKwuSMaLxtFiKKiRUsWRx87GWwJ1KoZczGhe1ochk8n2a",
  "key2": "5MotzziwKRfvdmv5dJFtXX2r9pQChgMDT4V8AhCxpqrfJyEmdstbTVU8SeH9tNWAwoqaqBfrxt8dQK6FPu4BnQeV",
  "key3": "5ebM2CKgLCXcZGXCFvVJJ5eE7XwnAKbwEWsoYuhUqHtwTVm8zAFZW8kduKrWXNMcCKmapn6RCdCbhTxEh4NY7fp1",
  "key4": "2RRfWeVddbp9ScvqEo6zwBmbnnM6Cwp8SWCSTYaFJHYg43uKiyNx4c4qB4Uz2pv54ZfxfjsgNBFDp2R8ZSSJB3cQ",
  "key5": "2TnSaK5gdsrXjqu14eeeDY27FjjV9Q2gWX4rhFqw35nnFbEbN4VgT8wVD72LCaU4P4it1azCn54h3Av785xRDJ85",
  "key6": "5PXLsocVcn5uvcywsa1K6EmddwfWVuiCWLQvvrCggYcZPyc5d9iMXnPWUR4YomfEbn7KBaDcLJNMr2v7T4qcpYqq",
  "key7": "3sPjbfJ3n5zmfr9YyMF2NZhgbRKdAtigQ1pHVEpigi2hcevqCsTPXAMoozUB8prhKiGnq5oUAych5nRSe7npHPgL",
  "key8": "3dNPFBtoNWtyAxynHqLUnJHA1ZvoHepsC5y94Wf8FhYBinzRZozmy34y2sQVyxefWGnP9GNT7pQUcCCjMAAGQH62",
  "key9": "5zfSGFbX2HdehGPj6NGNegzMnEcbezS7LRF3mtHA6dxG7LxWrR7jSf17eLPRMYQ5nH156Qo5kp7RWVbD7PhCrM3B",
  "key10": "5YWqeRSpLacdhxKCKzaJB77Jg86QrPcRy6xUvkHfTRusSaQu6qmZafeSSbEgXP6mGX1TNcqmFzKedfKCSjWWnGqA",
  "key11": "jUY6ShAHoYJucvLyX49TcPcVNJfufzxGoNgR1aL7HKkQt9cZW16HVg28k2G6PpbGF87sLHWaAWRut4tmz3WZEDG",
  "key12": "2YSUPSnTCXVvvfRhD6Qsv9VmPS9csMxjeM4vLUHv5UKAFPUZfjBLpqDHFkWv7d9VA4uFB4Td6a5sfacGRnmz9JdX",
  "key13": "32sadQ7z1oNSNAqaQjQMQMxNCvRReKpYWYe2tX3TxaN6enFQXS6JSZZpZ2WYpnH8qSSHHBEmb6v11JLzi5izcHma",
  "key14": "4T4aRJirK3k29b6YJgWh9rCaZHYkLy4UMa8ArHTjrA7HQmnSVYrEvetowwiSn9kX4EaMFspxaXTfMphpKrgkNXoq",
  "key15": "5hNRSvEaBCDuuzHUXohteRjRfWy4VSfMrzGfCdAXiyJo5GBTZ9j5gFmvsn19icxfAcQrDAU25THggPBZVxA9ukn6",
  "key16": "NRwfA1qkKzQX55gdmLtHrVjPKTSwkLDXRWkWvQhgZToQUMXRccWLknJSEaK9gs7NNrWAFR3QVEDWtD84VSuegTB",
  "key17": "sL7d6xz68NjrvodEHM1BLqBw8REY3zW82u5NMQMCdQbpxyK46REC3N9TNd3Us829cjXALPfu5WWtV2MDoYDgkEz",
  "key18": "53tUoP7wRyWn2Q9iWWzv4eBshc1QYSgwPM41rSgKhd2M6zTVWRp6ra3eLAp7XWf4T8Wq3VczoLHggx5i6WPGQ3LN",
  "key19": "9vW4dQ2iwDvNdJhnJwwurkWueEfHErgecnWC1PqN5XscwL93faDwtiLYERN6q65mxciudSzk6CK9TNJT9z3vpEU",
  "key20": "4sA61X1HJpj9JwjmTmKvqYc4G1aoYybJSGHjexEuzCbVFzRsWynePsoroCvybggs9a7yNG52nryv1cs7TeP7sq7f",
  "key21": "35JR5tejrCo2ZqXiD2NYUKeWgNu8Qz3LBm4XVE8HLAGnsp57rAUXpTC1ndN4KUfyBcJu4Y4w1ShT6ijV6WjSsULZ",
  "key22": "5smZ9uXHHmNx4pzjSdQVeA5RyiRLVyPFJzNEBbqWa8TmnJNsRjeyxnWWaHCxUkze7wrS3rRMkP75NULthQQP5aae",
  "key23": "26XSarE5DEn457zHcw947N91BjQ7gNQP3LbWagSo1Xwa6Dd82gDUWDjcF6a74xLPE7drzwbt3qXGiD6fGB3mbREf",
  "key24": "3nKjhYH3xVXMtNyaFmXC7ucRCX7kighDSHyUCuQjTFkzViLxMGu4Mct3vnHPD2FH6gRB532MXYDazGj9JRpwiTnw",
  "key25": "2ceUa7YGhkgSCy6QCGvz39zTimpC2Vb4BVDidJbSZANRMAfjCXdxiHZMkKhV7GSsfnEouQ2DmrbNEK3eaLvCuqoc",
  "key26": "38rBWYDQwtcwesBwcQ96UjUDea5pekf82Yxj8L1Cbnft3higVfdrAccsq8egLobSzVdV1A6idaLMCky8zw4wDPFU"
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
