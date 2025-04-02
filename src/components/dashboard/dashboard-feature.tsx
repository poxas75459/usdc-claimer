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
    "21VuLYPp8RwEFQtHZncmxsK3NzrhFxqtCV2M8CSQfBrfQTgYpiNJsHwLvYwcaJNdXC3jHQuYVpsQWczPkfE3f4R6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YEmEyaH6GHKBrvJNPA3UFvo6uf3E8TtqKZqf7jqq2Bia38WujHrQNoDdHXwWeJAsPSkzvJjavVDVcQbXM4mGvBF",
  "key1": "2gBxQQAkCCtHySLM4tVLsXGBZGasvZX7DFtxBoYXtchi5swAvGkXK6GpsVJSMntzrNcJf1T9uRqvfbyHhW1Q9sV",
  "key2": "3Gietf2K6MM1dveyfkQc63AaqjT1qmAWj8WShyAKpYc3rk5nLHdDLV5n3m8aRivzEm5RhxrF6uDd8EQttPNKVSce",
  "key3": "3hrFsuQRe2hR94uHX9G5d78j7kv6LEzqkt9NsgyML7NHm6DRLA4j4Nj6YGHRm9VBWENAHspzaV7Ze7KGdWieLdo9",
  "key4": "5HumReodrRbgM1ai7RPPJkpi86yF2WnEhEGqHoxbqD7x3jPj5WC3ESjHCGt5RLZUPyUDfnWCQBVMnn17m19gTH2e",
  "key5": "2krmNSM8oMq8cSS8tWtNmfihiPMCufViE4XbbYSxPtu8XNepuTo1pFyx6P2oiowSpGTqSX8jxL13D42LGRxaDzkS",
  "key6": "45eDS59wjnjg9WVt6m3zsFQgiFaomJCci8xqmRLYDCPyLUQusmHyADpnuksXvtpbnNSLecG8K4GqWNb9uiiCqK1a",
  "key7": "2hhAL7LTtffruZAtjzo4nGY9MfmYR1T9xXZNzVKzRf3NVs7DBF1TNk4SUPgB2zufDbLiQTdpnsFA3WfgmrDpwZba",
  "key8": "pEd2QYwfrtDxu3odRKQdRDxGburwT9SYmbA5tbdTiN6xgknWTFKkhFP3kJH42BhRH85TU6yoqux5SoTCmNE1uRq",
  "key9": "6QnyxpBSFyoWS76ugvGVuhPGcbGvJPT9WqaQFFHdvqyP24KC1jLfcJCjNugmMy5WTH8W6JRXokEAnqtuoSVyze5",
  "key10": "2Xyd62Bz8iEL5wQ8jf6ZmRynt71DxJF4BNxsmtSkwuDLUyYEFwhxxXrVXqMHmGq8uqXNsQ5XJUu9MhgWyioR2Ctv",
  "key11": "5VqpndcQWsrqov83yt29kmZbHJ869PsxRnK4acxS4Pp3FGpTuAyQixomuREv2ZGy79RfAmRc2zwPbXgxhvkPZg7",
  "key12": "3PSajTTnpEpQgyHHUtEGzzAxBRewZP4uFyiYs6AwhjFAcbNbNKLxEgvvvtobdjCQyZP2jhbBiqxwQmPbnhYs1ukW",
  "key13": "5JNJVBnnhfUDFfetPiasco4X1KpKJvuhFy7ty9boBBA8PrJzA7zhrguAAT3sFcZVsL4kVmEWCFR9LZPWknmz47F8",
  "key14": "3UrqaUuLWGR5huFZFiyJpzHJGBevEB2RX5rK685mJMFGcEHsbmmvbyGDV7ZksjJPCxQadrSYxx438sQL2z94Ahgr",
  "key15": "5zcTpgzgRfT2T4zXfd5rBvK7qyoYmtTfqKx5so7Xh1grHFUwzSaRA6qsj5ZkNswwxfgaVuQrVxuZN3n85ZaFn2SH",
  "key16": "3fDVFq5G3GkK25mvztGy22zYerno3t3CcKX7KiFcaKDLmCkeroKjUbwc1bWVRTjWZHLMBuuDRC4NBJT2AZVUnMUq",
  "key17": "2BEZkdcRWtd1AGCdG9oyCaRghJxeffaUg8XEAfqsvyTsUGLWSFTVtPetSkYH8RrGwU3cMijfvRvZYae2NDPBDtsQ",
  "key18": "5fGLtBejsCSSC5hmiXBALoXeWyuocJg8ZcWaQZxib4Uqsg2UdXhFWfu7X5YByRfhNjuAgAgUm9cjn8Hax62TKi3k",
  "key19": "3H8SA4WTqsZAoHC7shHpK61vjDahndmLECTScn1jE2ib2oUTpsCjTqgwMJCRzop7CoUjkv9GPCAHqUfeQHGXoLum",
  "key20": "42jt5fDzjtN3BZqpRxWEbvoMCJknFSff4FjN1ApENio5Y2UqnnbbMXxF46C8VNrL9Z1WupAYqo5kkxZwRmMEPGjF",
  "key21": "4f46dfWzGSVvVEMZXDYuB7nMEwdrg3awv8wrg5CkUHFmTpemfoNwvS7w5EpeCtaxqvLeAoMaE38cdz76MUcjPaKS",
  "key22": "2B5UrCGh4SRMjv9AiZs1JZot2ZUZxvYsysdvxkxxMZ4CV7kr6Ffj4DkiiK7dqyHkthL9jNtRtNMavdZfcwuN6AGZ",
  "key23": "2bFqi9QLvnAsvZ4f9bRuy1wSeqwhBThAZx7LkwtFAdEnjT3NQE3Dk5VxM1ym8GzwwKAFCLN7Wf5yeFxha29zatVg",
  "key24": "4sEcPPLo8cYiAm6aL9VZ6MvjnNUuLy6nQZJTHwAkb3WJ2Qk7nXp91nTNBaTYnWX9NJMxVoQBL8Qhj8Gj2he4q54R",
  "key25": "2qE3JiNoBKYzm3G7ncAMd7jRfcMUobGchC9ARamWAnehgRnCPqro8B98cu9xVtvxrKg5gjCaA8wPPFeH3ujmzinp",
  "key26": "4qGfz9YhtL7jJKPRU4hGyNLFQ4ffJExk9VDniS3EVvyDMH1VjtzZ2Srz4bQoVqxGfNfeouPdodzmqd5nXHX9ExQo",
  "key27": "2JZN27pNMkKepDeV6v6DQJhsK7nDBcPZ68FZESvwQnLWPrH3XZF7gYg8s3itYX2SuKuKn5JPav93UHot98QcUVBT"
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
