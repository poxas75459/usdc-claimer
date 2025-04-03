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
    "3tFj4crWMPPbqhorThfXTPLjW9MNyiGutyjo9w6N4kjgc8FCWncVHnPff3LXE3W8wuomu2TAh6RDvLdKtZV5BfS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RwAR63E36xE9sBepAeLdiz85zox7qsCdjY323eZUqW28ZmBvkzeo8QLYqCQfmMruv5s5xBWhbcSh5YYV7xc53bg",
  "key1": "ns5pK8xr56L8xuHRoCAdv6jtDS6s41QRugQ2wGYRtkbBpkdT7H1g6JzCfirxsCJfQEDUVAZGBJpwzfWHv4PYjMH",
  "key2": "45xDe2Srtt8b5wMiBEaGPDbDxK8G9ucmADvQU2zqdbaBQ7djbSKup8wYAJGLF4YquKrYaSj62mcFvjQdDPN3XjQg",
  "key3": "2FT88mVZSimMLnYdDwcX932THbRtSJT9Lfz5PJHWvLomtbMN5aKp74s7oJ6y87Ypzmprb7LJz7uyiLgheyki19ca",
  "key4": "5tLPU2ggYctizyyCNVeRhJJ33UaemCFq3tmbLGNnDBQHyPzHVjCLDGM6zJouYCzHkL4SzGzHhAQVdQr3SRBX8Qzm",
  "key5": "4CZTRGrGDvBgtMbQrBu1g26YjuVisRuTbU8Q3N432zfE2e4wfjNiZHVLZj5ZU6gdSeivhikeikvuKhyXMxYAq5jq",
  "key6": "QE2DCF17icB4nyiThgK7VsBZ1xyJAf2StAUGxT2ntD3AK3EnyawR8DpusUyzC44g844LMLuH9r9eKgokdWf57d6",
  "key7": "3G6dmiFznwnbttcDYAuuQ6NiSJTH5yqfh2FET55sfm1f4WbRM4HMBazaAjSrXd3BSYcm9qoGA5wTZ7JVunQSiVm4",
  "key8": "4bdXCpSe6MjTbMqSA1q7uX3T1Q3xM2L4U2tYhPTeCry34iLFSSAKfA6epYGw2Zjtu2jf32riYMF32V8WAn2G69Rc",
  "key9": "4em5qDHrMCSRPe5SBCK2jauafHYU43mDGGQkFoFnbQ4eEt2EuStzyDp2r2Z38cgoYxk4fVsddQYnUcpiXwFFgHpx",
  "key10": "5jaqzk5SqEDfN9me3UBHQr6G1QqTVAsegBXgdmddJTi4HoMy4iPvFuECY1hjmiAraV1QUNAqNxXoFvqe6FTsSCHS",
  "key11": "3riWJVokxVWAVKxe8FuQx8tdBkGNbfeBZZnsCrmuopPQJWLVDeG5RWRw39Q5PdKn2nJpreMFv5Nxc2XRgDPAuz1b",
  "key12": "Smw1DmNykKzd4q587DGwmTGUqhG5Up2RC6t3v8YVDYFfaJVuXDVYunZzRqkoQJdeNZrS5Di6oXbuNoBdfYohFwM",
  "key13": "5S4s7XULMxt4BMox1tWt3HXUQ6ZuEcfed5kzYaj7rPSCow1kgatTvLrEYwppcDvef4EQoqqf6R8qxdyqLn8NysSt",
  "key14": "4pM34rxU8vYwPYiRNxAPFzC8PDu5iUQwjiotaqk3pQj8JEupScpp8EUVWguG6t9T5Znp8KURh1qF7ZmD7Qv7CL2C",
  "key15": "2JqrEi6AjwDz9y4hky1PQYv9bqFQVoGM8WciAQKcTZEAtVifouSAabK2Uu5xPL8mFr8UNCSf8nQDvFocYZCXWn5M",
  "key16": "35qdhxHRwgdJCDTdmTHxSxhMgoviVcH9rX94estm6gZPDSgEUomiR8F7kH4Fu3CxZX1V1F1FMF6KZftJrpR7cEAL",
  "key17": "3cVEFNM6axcPZe9ugaYrgZbL15XNvQYtPjL7SQCznFRZGyxmNPXtMY7dbcDSrLtXUb7XJy3L3HvTus1mSpFMpZ7p",
  "key18": "5vay3xtDYdw8q2D8CkKKdkzehgHgTQWmNzetHzE6d8phhjWB6mFyPbctdjTX7qKqx7sYoerToWawFu2SPxcv3yKZ",
  "key19": "3AQjPbqwyhQtTqEx7A7MvWoZdLPEXCD2R8QaayPJXYjERjwMgsRv4LUFhbeRrVDcpz3JPKTFBSj2Sw2SG1yNzCkS",
  "key20": "5DftwpV5pchwQGQjWnoTgb2sGWrYuPZBPSo7A73MSGPVWHZJZLvk8dyRgd6RYWmnhm3KdZm2oxwyCHWjEsgZ7sjN",
  "key21": "39YqdHR77DQxtXYZ77PRvaSA8BxXgRYkamZPZK92F86MUMY8qwBjR9N7VTM3a5JxNu5G6nzDX1ouBZK732VgsLV7",
  "key22": "3CvHKTspbsGWf2vXB9YsYLhkk81RQj8ZE5j51Qub9yxoQhK182cYF9qc4V6y3HPhm6CW115NazTNufu88tdDzSsW",
  "key23": "5XqqhUtYmGBGmD9fXtywF3T7nNK8UWzY9xG1Z5oU7PQw2Xd6ZYt1B5VtKLNMWaw6K5fUwbKpoWoJ96viC5HGt5rU",
  "key24": "3sWVWPPxWwDPDM4CtwYeesDRu2KtVMSjz63dh8TzkVWRiviLEXzt6uj8SbmvgFX58GREEoMjUmzXoVKN73rP5fND",
  "key25": "5xPU7TujoDThqGjobJYzk1fWV6wHovb2Lh9D5t6N6uve42YPy13b2di3PV2gc7vw8Y7zdxibYVfPKK3J8ahXmWH5",
  "key26": "3d5c5yDT2o5AJUFofH4zecPf6igbDTfZg7e3i4Av7ozr21g4HBfCiGfEVCorbM3eKEKwa9nCyxh1kCVAjZWrnHXc",
  "key27": "4AoUrH9sPhwvkNVHXqEV9P5FvXy8fhnuGcAot49fkX5FF9cHw2ERVf2TCTFA2HxjuwEA4yDaCVGgmPYYDatKBf3i",
  "key28": "Yhr4wYFqksQ1fq4a5jzdJDMuR9R3GeWjgZjprRR95XJs183NeS1FBS9vbp9PcZaN5usQinPhxKKTG68nqyhxXE4",
  "key29": "3wzkBEy1QP2p8EJi7actJxTpTjBaACpMBHpU5jSYhu2imxtJsciDhjMGXeY1JAzZykLK4iDEH6CAWsqM6Csg7Lmm",
  "key30": "5sW2dRdFFMXbmovFsfi3KpZCE1R8cfeLErsCJAVQdnGkshNU3iz8M9Df1Chf7tRExDQnfS1Ra5ZoDPCBxnEFuixT",
  "key31": "5EZLXyXXek3DJRJJE3JKBWp66qu1awCp4iZ8dhDiEniWZCwbXLEPM7Dpx4hAypqqP8jFQqdTMSfwiGMTbnFueMMS",
  "key32": "3bWQngAuncxmtHJPoxD6Wsou12QVKMLbCP389X96HiiJUPSB1yVLjtL6KRMR7NTFPt2sYDjBrcdWm295B9WWYLBa",
  "key33": "3YuXhbEVkcE9Z42vF7sU4iWKKE8UAwCU5fj1wiBK1hMRmxnhx6aQ79s9hDxRsuM3vEBjJ9rAJNhpHpHVi5dVVhHc",
  "key34": "NBqcJb32T2iAdapLqFzghNeCm3ZGDg98KTdApoN6w3L2XS2Bpw1B6JMGs782Yp2StJUN1ZmYF7y2UatK9HAZj3n",
  "key35": "4Km4nWGwytqrRseahXQb1QuHNsiJQek1CHAS8u6qVsjPCfsNgAJLZJWcGNo57mUCDpXWd7t952tdc7NoQn5zMCbk",
  "key36": "2omTfhNY6HssEmZCSGUJdxWubFa9RARL87iHNgJNCFM4qqJrsycTZ1cgExu6FM2n8A5vksY6ZX1EsKWYknxW6KSd",
  "key37": "2mjiSmbD4Z7efGzfK5LxF2NPzppnFPxfMn8uSsJom7SLv1r4uCZsgLJAziJDLvfUZ6YXphtjWDbyjUCRWSjRMB4R",
  "key38": "2wHwz62voDvTHcRvyNXm1JcHX1mgYvndkf61jvtswB8oQ8qpaN7rFKxr5kYn341qTVaKaQGdjuu8hh2mhdZNSV6w",
  "key39": "3aGpwn4ybebhwbt4jhyYJsAya2icVbK32Y8GRVFkKYRDmNPUWT3AtveQWHwpkLmgdGkCVcikoR7WHGw1NthiT4wa",
  "key40": "4eGi5cnNpk9yW5z6EyPVypSm5gTjrtq2GPRp5TkDmvx71ZPPex1r7VntzKbXcTnsXFSvUXDkxhQC9U6Gajx5LL8N",
  "key41": "p7u3gqi94qjKuk3mETnAyZvmXXVmfm75XMJaKtH5tzCLxDiUJzNutT7qwSDMWCbkrYjQ3Xa54BENXRtuYEQhEVC",
  "key42": "5Uursb2erR9mvziAnxf2oEx1xFCPgkXQAn1YNMtpFeQAWwkBnbRqHE4W233kk1Ck2ZvcpqpBE5JaFvWUTns68BeX",
  "key43": "KKrmmgBYPpM3w1YQgDbN9R2fmGKwMzbzUpx5WJZWdMYyhEGw1Pp58khRzmsU5RwGGQa3j5GD7tD7cYFuad7NZo1",
  "key44": "3QKB7bd1pxQRzDyx514wMi2YTTpHyBGF6H6VT8M7nkXbdtoc7TmZfpwZWvYw3D4xbNZjvZJbv1W2TiPS2XhocnFq"
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
