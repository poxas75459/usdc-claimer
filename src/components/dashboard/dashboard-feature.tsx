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
    "28BrUuWW7hfNiBFoHKKNTuPqVBRYwDe6ayUDuos7nrHh73DUcQvcFNxezV7AL8oygNiahnPY9EZ7ttHERpVAryBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TtqbYpHZ5qrg5ufUFXryoj1vWgZDhjnr2pc2wZAs9FTV4SCxmZ5bLXjUHLCFHvjki9jtCpoEQC3jnVdn5nQFe7E",
  "key1": "2coeCv3ANdp7Fqapwtocs6Ch7ZtPCX96Yoy2SMqzpNXwyjo1G29XuCe9hoLfZs7PhzzDwNVCoY8eiem7yncawftf",
  "key2": "sRaiC4CMgeoaKoKRETAPmB4P7RSmDWzEJgjTx7MVZEenCDqyfetX4z6HFD9k6knb2R6vtBovHdnE2yDetE4jQvg",
  "key3": "3ACMbYzyhuoQ3RtFticGmbfSVGhWmEzQFM4Nzgg6uM6AJvW4kruezgfDQZH9hpP4QXLryGwhrVfnPr9ZhJCp482V",
  "key4": "4qDct5g7kfD7FnLZd9kfmkxuD2bsViN5xQQAk1nZFitcrsNgAmXcpddXNeDRJxj9CtXP4cG7GNMij3G48yBV6Grz",
  "key5": "4FEJdhmuYddfSARcu2VvSPGgrYZfGcCpVHn6uKRnkwPZGaqkG5G3wGgjbSXw9Czjm6kej7R73VDijYUpg9EGdwKG",
  "key6": "3R8SFGTq1YoxrHd45GYXr3wmejwZEnaAKtDgqtVvq6wzMtKJ65BmhybLDqTuWohueeHA8oHMrT4A73cCTdcouBU6",
  "key7": "5iaDVj5i6JTGk43cAuJtXrUuqqEyEnb2MFjeLm1fXdXc4iRS9DHvD3kBw6n6VtCb7uTNBJMgxFs6eX5pmzoLhZy7",
  "key8": "523LWE7WuupawM6MpRsSD44Z3c1LZGpXW7wM9oTTGF2yrrkci6xN2ooUyY5Ad52dNnGBHCoZG4FbCFZVJw5XAjTy",
  "key9": "4SdUnVG8QmjXS4J6FwwtZTRx9q4TekSHjJeQjqaMxAuk1pZPi1CpF7JuP6ZkSANdZo8Qe86N4qaXnLb7AnAwUcTN",
  "key10": "5MjJp9s4J4D4BwJsVXRhbNPK6TA4ojoSRi9XQsYJQsDBwv11S8C3EygetNC1AH2vPbW8ePxmV8TvCxtR5Fc7kMnq",
  "key11": "25YioxwGHdPwUe1R86B3A98zgpv1tAmY4hc4ZbGuJ3qfCaxYXWi1vQVyDhrbsp1ETEfe29iguYJBbdYhr1AZdkFP",
  "key12": "3MaCMHnjRGHePExDbbG16CjZPTZG8dszFLJQDi6QsMqYzydLoaSE2z5VHUctg44HaSwQucWmvD3ymWFXzqUnwmH3",
  "key13": "5WEHgYm8uW4EpezYYQtn2aeahznpyU6Kvwxdx3arvmh5h9jKVy6ZnZGK8kJjJYSPz9RGzn6E72XRUEEscCYjz7dS",
  "key14": "CGhUM5gT4EwnqYuZYFMo6ucwTQeXhPqankR3hRzNnx9PVq9oNR6Kzipaahs88tYFNvsRUH4hxGCC9aTTjh4Tmza",
  "key15": "25hvHLoQViAoSZiS67b6s1cvjRZQGcF33bgnYSeYBvgK8Lh36GXHJGaxNQ9b9om8Zrb3rfpCQvDCC6zSpKHLaQe6",
  "key16": "55mSshJS2mPqbZFhXEVAYvAMLLrvsdnARcoLvxVLAaSVhzNXddFeyxCvbu9yk1Gnr8XnowPSb9erLzEAYFmEroEf",
  "key17": "5Rzftv6XzZViVJqmkvX22XcjPe6rZcA3eZ1N2AhFBo9UAnK9UEZxXsG2WneGjwWSEFNLSfvvxjV5J5jZzqYvppLd",
  "key18": "5davG3neSFJGoHXWoJdP89xXAwmJ9wBfAgmGJzeNVtUB48QRzLytByoxeEZWMzZftnXKrRL8QBkyu1KJR8Quz8d1",
  "key19": "2hwMfTtHw39qMWsTHPd1d1gvuUghQdMig5usSU7sTWidt1gsT6hnYbi5VCm5ggdr2WpviDnFK3E98gfHMmxxZfwf",
  "key20": "48Pzu1P8mKMbvKtmHYy1iaT6Yhv7odg9bt9vMaGjTDswNqDNpbGp3d4RfkHPDHbuJzDuu28CUUJ4RMdi3SLoboAV",
  "key21": "2TBagVLy9tZh3TY8yerLkhQRGmhLLHRBfVmksm9MoTQ2kCv5AMVkitcx7Pp1cf3GkyudthSUPuqUkGRqSfEtYQQ7",
  "key22": "R8pH4HnHphCio6u6jcGq7NQcNZcK2TUAH67MUoECBYjqADCeziHVSLK5Q46HtuwweiWbubHK7nzJRg7TG1Troab",
  "key23": "34VruMNYW9TTqbmkR1GwssmkhtbSgCJySvNPgawXHfBRfKnJWNCD5C6XQwANkD8Mijms1YRbNufHbBAD7DwKFoDD",
  "key24": "2ScdJu9xbDMH3oAuW4Z9oEsBEoYQZUZbegRYVvx6bnQ5cQBqayoMf1HeZ8DdXW2fM5VgQ49awvnyNGwNm2UZHoqP",
  "key25": "2heE5rheY2VQhnaWUgWYVFFmGL7XVxre2S5bgZRvnTeW9aFUtsMFJqsBGEHaYWC4vviDCdUaiAQCP1rLBikTRQdz",
  "key26": "4ioxm4wAcZJ3kYAJ1ah7M9tPJedKouexL8AmpbSXufrT8AfpJXAaX9T6PXqPsDEELSNmhXNrkVJ2qdpBFSwKUMFF",
  "key27": "5YUvSC8NT5dmwGfbUndUAjcNf9k85s2BaVzWrtQT6aSbKHV5nzATjsKAkA11DLYyHZkkvckAz1KHj7Q74ULMLmAk",
  "key28": "64xk5W7eAhY1LMBTL7SbkzatN8t675F6enrSedyi9u3DnoWzKftpwTKzeVDU9TdqnFf3oer76CewEgAwKgdPYncQ",
  "key29": "2fgCyBTWwFfZgwYMT92UCzM8PTqTWPxNWWFyn2yWJHLLPxuZ9tEMeLBB1UziMK3HoxovnD7rovY2wGADxmxmxzPz",
  "key30": "3eub2P3EtEKD6b5tEcLPqVviakJQf542GuZkXe99DJdtNCwEULALSGFh7Dv62FgwCQtxV69B9V8cKAoBSQwW19KH",
  "key31": "Aqn7UpcC1dwvKpywLAygsdW5PT1XAWctLVWPbz9HTeyz8aLbYtRYyC2gPzJrJW2zeoq3y2SuzM1dem7HNRRYaA9",
  "key32": "5PBGZg8kKcqZYSWsDjVWe6D5kEiSLRPyyeaw7FAU3MTz4T6Wy5cwfECHeog3EZKEMzULfY5oFjYeG3gsz5Vvx7Jn",
  "key33": "HsFoRVDB3oWYEcNKWBMfVNG191uZ5YTHqZLxKtYA7KPnzp1TeAWjijKDQrXbG3YLP2qqaDXq6RQrMHVZeNnHbeb",
  "key34": "5aryyvTzPdVfKUcA7AykhDoRbKtaTFefUdZTh6NWfZ6X1zq3GFfVz5xvoW6TMTGWJ8NEDmDf9kdvAgcAgdGLjHTq",
  "key35": "vTQrE7agJJEdrSrypGdxnQWhEHz4fpPd9via8yR4HxBdAWjdvzstcEPt6b9gGGFQEXo6EnRSwGYjCjLJozLD6mU"
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
