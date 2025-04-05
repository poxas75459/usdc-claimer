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
    "TqFhfHAfu3mPwvanw1WBDeLqKKcsSK12dhRS48uN8A7gfXCwkDGYbrSdXS3gTG9uUzPqT6ue7sYTsbRHGaHsfxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aSWcT5D2MKwgVSRN1f6P4azJJdNB4nvUMEPDyBge4KJK9Sb8n4oVRiwA4se1i7DaiG5PimBkomYxikh6SMbVNtM",
  "key1": "2P4zJjMEsq5mVt7tmpLQE3kUxieaxJE9CsQUWsj7xK3XZes9wUFEFsW5TMNELfegJ96pqKHGmQEMfst5AqyaPYUH",
  "key2": "49UUoEREp8gSHAfwh9qzdAkxKNnNUfHwrZszG73VRpyyhh9q1J6REKVP338RaU1AwNRTF6Yrrdkade97sLGPJpaU",
  "key3": "2iYVErAVyr6wSPPwcz2mvjNScH5fb9JpLQRwCM1adomb8TLBhT4mSbHNZMUhUaNZzXdiF9F8y2amF1s6TYqbXGUw",
  "key4": "65SfJBvrWGb8eRACUSMwdSC4NsHtHGAtFgp4J7vsQBHvZKPnxtDwtRaUorgmw4BpgPN24QiwEhTmcfg7mLStWQxX",
  "key5": "U6SikDjk2zjmPPKREkJ1Qh43CCNUfpqS6UVEtb8RknhoWCQahLTKKytSYAzz7w5z6Bqpzzkw7b1PVHkbUDhn6gg",
  "key6": "3wf7PAxf7nF6VDVT8Px5P8BTpCnhLMBBNgTPFcvSBJH8vigmD1WgLXa37DrjeZXgebE1wbkJLA7oK7ALzGegwa5U",
  "key7": "5MLekmyAB1iXXJErabDDLrcDo18TNUqHjcY453wjd3WanSeyyR188RF9S56bjbhDqjGfLRsJtVMnZ1pkRg33S2ud",
  "key8": "26e17c7urdSDbB3HNaVxV2tmDgbjJMumVWsxJuZXa2HZDzzDDnmPSFEkjV6dUdLHtftFQgKqfaiXqw48MvjwbuVo",
  "key9": "3KMEafYwCbXT5qKFgYrT5XdBPXvVAyy7EU1HjqSjXDMTU1EUqsKcCaJYyH4kBtVcda3mXsFmyaQtUiKfWgiLm7Xd",
  "key10": "57SvrTNahX3YYnTV7XNxkJU3g4YqkemMde9RwMjqAmzPPAPHASJe5zUgQCpDssaWynvp5z5artwHZBADRK8WKHRD",
  "key11": "3LD4oK1jcvaTo7hRKc75BResqNNRiLkoUBepTRGR4KVWGjjR5SBZ9JcnVw12UbUsHenaXB2YXCWUGimjcf9wk52Z",
  "key12": "2na9AdDiYsBGi84ujwMMYzL6VNvV3jMyUiUuEXqBf3pFEMowfDHjJKTTsLuqGYEnTbBaiKDBzhrcDtwWea4mhYCL",
  "key13": "39eEH6vj4AZKeq9qwL7FRjdkYSY4ZYePkDPsxvcFHbMbpDSFRbz3KoaQ7P2VpHfDrRw2rF6TwLPLUy7AF74cGaeQ",
  "key14": "2Z9z2QgJhjQi9oqwLGLcgMCoTVQwFo58ACSYmxQdvNyAQFqAiMYedmXC9o5fVE1mXADkGXRdke4Y9ZcKqJMxfRdh",
  "key15": "22xr73Y5p2f3EZqWdYcT9en96JiXpyVKQHFMMBqDWZG62dcnLkwd5V4Q1vJ7yYbJzD7StMLNx3Gkw54tYqtx4s3Q",
  "key16": "3CGbc7fBym7nJzkgSqE89apt64vt4pRFjAiqMYoLwhTdd9zbdHXsEGEYg5gESN5pao5q4YDx7eSztLXZjkCpDVWj",
  "key17": "sfuhV8ocWx2kkbPS7chMS1jQky9Mw1C2a3eJBgEYrN3siLvQio6VS858zUw2yE9BYvET527v1J94MZumudFAxUY",
  "key18": "4EatLfw5q1wyvRRoR6Ws8wFFhpAW2idL3VefV2ZwmDqXBMepMQZYSRhWFWLgtSAButgZeHe4twBkDLNN1JBwE1jG",
  "key19": "H7vUEaQSsamrxKLnWc48xTff6M2BwChd6FwELuAthHpNm19Yoz7bGeFH8ijH6o5vJXBacQvMiKdSVDDysvwzDTt",
  "key20": "21U6qLex4BxueoNkHaJxLzDtDUvF7vyavyaUgjUzfLFGzWW3bid4dPKrN62Rg573SJBRFGokgR3f2Lic3YPkVgFp",
  "key21": "32oMS89WrVi4Fod8cujPQtfA7jBFfHVMPnwzJyPkDBBZRYjsk9KsVahe5ENXeED8nuLPsMdEBZW125WaxyKPFaL7",
  "key22": "4ZBfKmWxxnMkoBNcyapp1fM8vpZwLVx6WJJYNNwttVEQD8W5YUW2isauwr6QQn97Y8oSw6CdMPqmCgDxQoaZZttd",
  "key23": "5MKeNmYYafZNk394WXEc1BfPrq6Ftrh5UhuaiVsWX7Svt6PUnW1hD7nfUYP8kiiAZFGneU4UNpMNu41NtBkVnVk1",
  "key24": "3n3MWKNsCTXSAqLswHfFkZj9EYk5oCYnJE39ihwuc1rfD7Zsc4DbB1PNqhf8PXMMfJnq7iku76jdrHTJsD4qpnhd",
  "key25": "4kRuqzGmsujaiWUTy3KJXa6TiXhoq1MiLM4w2ASEmw5Q5FDjdGAGJhmfNdqHidDTx1fXt8BNUQfH6oWMcNDLdk5L",
  "key26": "2qL7zQo5qkSjgVZCcuXsUreYN1JDvH12F48bgNxY4uivVSqqohkqsjkTqY2VcVmmLDX5A25rFgNwgEE7LJ1AkwKU"
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
