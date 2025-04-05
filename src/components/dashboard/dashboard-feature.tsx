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
    "8PDfgi2bgdJYCsidNir5gYMLnRQPUHKHZBbwhxsEz4DDfboXvuH9Q67WUpHt1LYbw5pr42ZDiPwA1RrcSWhQ9j7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i5WdM59Ne3X6fkFgBJWf4a5xzeKZ5NMBsEHWHr66q1vQzUj224R3tMRBL1zjKKyVxFZFD8sUJUJJVCuqUEsn7vR",
  "key1": "4UG8Raqtmmy9gibmanfekGzshJN9Sc4Knxx2P9BxpuKBU3VoLZ8RtJQJj9NHh2m8i7hr72go4CcA1SKJYqaqv3t4",
  "key2": "3wRa52PGH84BBAjrvg9EDfXijdE8JcuFkZo4YJ2TBFrXJgNFQtn4uGjLPP2RnnPtiU52ipd1rCcPW4ueybdV2iS1",
  "key3": "2KstmsP4pGhcdSRkQZ8UVqYQni9n3YwbdxVYb6jn5pEUEgndedj1QxKHGNFGFzpp5iLcWZZtQS3ZCKjGcNjPFisz",
  "key4": "5LeiGtggbpEp88qU3ndcfe6NV1EFNXa5W4RDFsJJ41FAyUNB1T9NwSvveCkxCrW3LV2bMQ9vtn9sexSXHQpzxYBU",
  "key5": "4vJSjyaopUXo9SqAJK6XwtGKcLdm1gwExrudFCkuvg9kXtNCFhWQdijtbkhWvfvpDdNQVPs3nqedCsKAjZVVZwHz",
  "key6": "RgMiyt9TDp2VGuppYaSJAoqTHW4r9hfwP6R1my8YCi2FJs332Adi1BvEE7ihjQ1i16tqncgHUh3tHytraNPobZA",
  "key7": "je4XDrKSL8M2xFq1KcnwsvnN4iANP2sjggcegQB4ejNXRKWYSppry8J84LKk3Yjdui6vhm6Ph9iLyRCZBpudP65",
  "key8": "NiMUo3sMVTBtcfF5JY5xuwj6MLgu8C4uRy2etZpkFuubeWNwXEXWA3TZr7fkUzkaUp36bgEAqBm7o83RiMcdbza",
  "key9": "38ZMGxG6RUY7GETMtQ4Bcaxisgfcj1g56tBuJWfjqiLEqJxuPYSiJh3y7CLY9vazFB6gwXrbufPLU49cNaeYMymU",
  "key10": "2DPK2MnQ2iwr8skfMgZQbBwnEWxwbewWnxgyQyJZwa2444YSW6F7ixnjhWPUXiD4UuScSPs8KiTqBHHB2nv1Zpjp",
  "key11": "2MiFogX1MxviFU6EHiSgvBV5G6mhtcPUmPaq7xVFiiq4SNxEgFpBT6HBGN6ZCszhoUnughoSsxuEn42uCGiNUw5W",
  "key12": "4e1VuLEPs797XMHpTRCT2iwGtTLsttwYZeveQLXZiY1DjromapHWYpLpR1TBX7BEdktUu8GpXafxr84GWCJqxWD9",
  "key13": "4YprtoVoq7CbDFvjkTizLoRgMpGqBNszppefnUzELPn4MJVa9btmcnYPMjM1wGBmERkciaiZVNNgxaUdGQbMaQ5r",
  "key14": "4iD2mFGuurDTq5uma4nGwxXA7ZXDT77st9X7yxDG5gmWP6J3qr2nz9P4MhL4L4hHjLANEprWHQe6PmMo53WXtPyR",
  "key15": "3KdtwjngbajsEy9N5AgE224RpzG9rLGSED5aArUtySAht9i8HXeB6gy2kQ5ZgCAXQLJJc8RMvtDXpM13cFYGEW7B",
  "key16": "24DB1RZFN15YDJy28SfffU6w7Qb5WotaDRRjMv7xKL8RbQnMEpaM5r3MYpA8kb5ZgArZMGsB1CqpYGqCit3ADCP4",
  "key17": "4e1BFDMVyHDEGyn797unbmm51yAyZ4YjL9Qj8mXCXF7smXPA2Gs8ipC1A6uFwnBNytx2crgVBdr1MvNnTMdSdNte",
  "key18": "5TaCpQgVk4unJ3nQLzwgjrYk7fTZqUyzZ7xfEsqUo5jfM7vWnAT9B3JDYVWR4r6KUT5usCVs5Y88NHK8it7Qvk1K",
  "key19": "4eWaNjkH6N3imbqU7dUkHRSKHm73VTHNmpqM14uNWkzw1FAcuCDMMLiqqQc3sYt1XetujkbZzFRK5Uy5aQh34kPQ",
  "key20": "21ErieGtK33bFCZq1ndcsCizeZrYtGubY4uYPoZjmpZKm3XGRuPU59gnw8NhZgyPUhhyViF78uR4t9po1EQu3XDh",
  "key21": "4Wrb3UF8SoM3aNeVLdVJMbQTwtQHRYzmpXmNrDXsigGRkP9fbF29WAYteFaLBSfiEpFXsjen7rQU1E6wq6TyRR7f",
  "key22": "3d4PXD8jteQdUgYVGA8DsM6bk6J7aCQx5gE4nwksxSh9xTv5A4mNSdCcHhRrMYdaLN6VsrG9wcWft8GtTQyzPoe9",
  "key23": "48xrLQahUHFoPf7GXrk4CBqNmkrQUfYS2xt9YYox5jXyxwQU5K66SgncPUu15ZFYLg8X3BdoiSLJnb12aBWuRj1C",
  "key24": "4gjru8dW4vEYrBuuZEdKWcFLfg2EQtYAURATLcUNAKpwCKnWfmdnNZADTxoxKaVk97UjbLnsvNgoFH7dWp5M45zR",
  "key25": "3wu3j8sF2b1Q96DWnswtv74FdwzcrdLPXrmegskozmZWjQVAVtSB4w3NVF5zKTfKXhGS3oo2ZSyuXAqSXgmnvqvh",
  "key26": "2mhsLrHEwfwz4pwQ8eMc885owqBoo2wVLwxtVh3rHZVMEMBrsWxrs5aithmT8ALCtGQGqkXzxMjk7odv5ehHPM9w",
  "key27": "2C2QcpoSxpyo6QVUpjLv5TePe4cCREgTBER7oboQJNTpQ9tjGBuUd4EKvK5xBdEUbTDRrbXSXdzQpczfy52vAzZ4",
  "key28": "4ix3urTf4JHS4E9PUAnkCfZzC9ozRuVLi6NS2kNHnJ7KSbwaoXRh8G4RLjSSSqfscdSFzgcZG3Re7G2WF6Fp6dXa",
  "key29": "5dBMxvSPayEcUCUPh5HAfb9pmL1zRPzgqy2SkSpBSYfWRhwjSbKSeGVtUJkVVwPV9uc1eWjJQRSaVp28xKuC5GDv",
  "key30": "63DxwjTqSJyxLuhJxizoPBLnbGT56AZn1BKQP4K77ixCRzeemz8eqEbPH6qAt5RST1iaQFCARR3ZWaSAt1wsxi13"
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
