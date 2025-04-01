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
    "ymLg3CS8kVBQhVcoS2YZoCj2AAZK26k2V6Sqk2CBWppbE7h56kYZsdv4HE244vsCqCCCYG5kUUp4mG67MSZt2KW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sBbHKeVd1C6XsYmo9avrcfhnEUyFi9Nr3LCARuWsbejbsJD2P3pV6PwTuGvq7HGraL8MoqRcVs35GaKB1wRr224",
  "key1": "3BacqsRhd8GDFj4apRcr416XjDr8fDmFaSKhePy3SGmXGfuyg6wZrvgQuJd6871VZanhe4mW6tTaPWpuSveDQq6S",
  "key2": "56RixqJf64RwBzTARocQJou1sSJv1LZCRvefaVVtjhRCc3Z6gQi12j5am6EdXHErxAn7ziQtQtJmPhmdH3wx5Psz",
  "key3": "21nNVUeXeN4jHMLS5XQzE1cfagHQ326spXbdLYpSCKm4b7LQQfYmphshXVTTd5LQYU1cgfZXGBzXx4P5CZXxKaBq",
  "key4": "3wLa8x2Z2c3iFdy4ZRRYzQKaZbVwpumcsnQpK315gY37JPR7K2a17DEURfnXyQcuW3YPsCMoXGSHLmXKPPxrSoLj",
  "key5": "ssoVeukbJftbF6fb7BP4zFQwEpcjceJBLByy2H5rF3AyiUZqr2LHSsd1JZRmRNPx7JazVQ7xwvPfV9KYQds6B1e",
  "key6": "3wmay85hLYjL6GZohgBQhUQa2im1JohRf4npHa99ETZneKYMX9omVygzSJ8o6bVSzaPk3kQbeepB4HCL5u8D36Yd",
  "key7": "fdT3ui9kHcviHCXjM746S81iDAS6X7PfnWGzwQSQydp7bozXdmL2CbehzmpeAQ4RusUPxWQSSdJ9PF8LohbNNWC",
  "key8": "3HocEufobhrHzbjXLJ45PwnFjExezzNUTwhKrnu45yiAbWoGedSjGpuCKxCN9WsZh2qKCY9zh3b54EbCYCQctRZv",
  "key9": "2yqeC668W4qGQdYwN4VJH2hBjNaepTus3hK9EV1daGyS6pfTnm3AHjFmiVnECBmTs6h5BYq2vkDUFVjzw5N9JUjk",
  "key10": "5Bs5qcJQQZg7uS2w6mnxmGRtHjWMSoXakdGdvKcxRaLMSwSPrxA9ZrYv9bVKCpuBp54NdiPtmH8ymtnEnWNYW8NC",
  "key11": "5XaFbJja9WG9qoGVRgBWRy3ZxeboEuBspuaoejgkUdvsyFvjtZ9uPj75mvKGssY8BAxU6s1m6gmg16qv49LpNQcg",
  "key12": "4hLGpfhDiJNUFVXCZa17b1T1stxhQ6cgBm9KzVehYiZNg1mTzseTM1fYFcpBCU7vdCG9DMcsgkgZMCLPa3DdbyRP",
  "key13": "2tHZDCLFsjiHzKCAEvChM6rapadxU8zRiKtu4i1hbHnrFhX3VogjHT9iw8G2Asz1k1eRWJtouZJTxNo6gRbPHqJM",
  "key14": "3JkWbHPU4cAToghwaz1iGxKnm5mD1nuWHkNHGFyioPpp8yrTF1CYBPRt2YE4PSW77fxcwz3GhHhuSHGJTcvKWqpb",
  "key15": "51nAzJzwMcvDvhxenKyahNGzR68fC5Qc5Ha22UJ4oiLeo4QD54Ay9pe32J6zdabRzwWJcEKCtzboptUHN7nXDhWn",
  "key16": "4gkWZkanTWQB1XSQ18K83JLUpSY6qvf8cpZfeeBt9qVC7UndB3ud1kjc8LhZPFskHM3G9PtCqAbD8FzKURbJMbLe",
  "key17": "3TNQfsstAgnVY91fxmdape66N1sHihUmkxgUbk5Y5V8hz2igo7E94Kbh36iomxyruULxy1YU2gQPqwt7irYZG9AW",
  "key18": "4X5st6QUh96RXuKksJqZMncmYwps4L9r1gWYBRaoHncqio6sLDigA4agxrq3WgSk9imbiFtzAYUPzzE7J3MdPRSD",
  "key19": "2NCX464w79qdJ8UgAkg4mKL8eXKTqM3T9aJXs4uWXiEZu1tgUhJ1dURdrLt1k5dJmu4vXCt8XbMmHDX9PdPrLDm2",
  "key20": "56eWnE9KF8XHWCtcoYg8CuY52SAveRV2N4oPX2Ni5NcNDHA14xvYunGDivSDpVwHca2cZP2DYqjczksRgzrFaquc",
  "key21": "5vR187t1gprGyyqtN9zV7gH5Up3W54rJWwjkQidw9ekTeAbfraT9NQokhDdAnz2EW1gM9rkMWntzWwaDvfXt6XV5",
  "key22": "525b8kTo8F3g6upb1M8wPwz4SSwzfpfqT4vu4PVzncWzcZQEr263WWfT2nSJKUukCE1iVDkJu58AGsKQLwxmZZBa",
  "key23": "3he6pMQERF1W7zVaYvTZKmucyWTaBBvKMVMj2LasQvtWtHtNiJ6r4KHXEPsehGWtLRN8RmfkEcpB8Pq7n2kxm3Xy",
  "key24": "4zmwoLRkyDwQcdhxscVCJctpMXjKYJJkaLTiETKeSqCvfnQxaT3Vy8jgcvQA1e83zBe5GUNCFBUFUR3kYFJobFHt",
  "key25": "5fbH4efQh25eC8HLku2Jbt2HjExcLgJ9Z5YkWWpWYNgBHHndknEUttXbZCZT6ZtQ846AsdB7ywHZ1YhBFjxiuu11"
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
