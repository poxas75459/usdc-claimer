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
    "5Bjamo9vwV4rmmS2gg9orJ7tXdx11ukQfyB7nETk9eXyPMyF2YbfXVJaQ9c2tsgUxSy42ZX2tjzb4263FdgLPR53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55A1mwVT6Ab5BZo4yqba8DQAdYozqLmXkCdP1abEkMw4eLC87vUskGk1xU8MnbQS1A4pfarCZrsoLNGrNdtzu961",
  "key1": "u8qT6QzCx3Si1dBNLL9ArqePsn3DSQ9LMYTyu4b53zCwGtssuWZBJYSvHQTv19RQ1ZpsPEgJFFQbimRFtezLqSH",
  "key2": "2aHRUs7PtBMmHLEyCjhbUWkRaiNQKFjeyaecFvD1tCScnbphz8ayWdhZ23bJ9tkUXyNC4BfuhtnEde8X9xTFt9Ta",
  "key3": "3ypnxWrJfEkuQUt14LiWYQuX236YpifKPcQRzTXXVhg8SVcZpmmf568dpSZPAaMxopw9NyX1VEdTdpuCGfbwFA83",
  "key4": "2mxrmLLrpX6wNDoEp1w4ykuEE6ftzf7cwyG84JkX3mH7Vxvj67jHNheXWWi9xgKfA5RgXhgdnHDPjLQsfMb39sag",
  "key5": "2XNwfPY4xi98X2hGU7MMN7DDxqoWHrgGrZtkC1dei11PgNZekDgxSwePzwj3XhC6HaTh6H95YwajiUv3ukqmVxYh",
  "key6": "55ek48JVq8iXbU74iVx5ncJob7ymjtvCCUH9kZAm7aJ4rpGTjW1CXSBYSyPRu9N5zGqibXFWr2SvmQvoiRTESqR3",
  "key7": "3WmrVQYQZ9jpShmyZtM6y1KfpJA66Tk5SKXk1ChJCDh2GwprPQb94WUXmKy5JnXtSPc66mp78wxZPqNHptn3kVGJ",
  "key8": "XhWxknWxQrdmewrvEY8i8CH321XVmgqEfYfeFNNRTvV258k3pqKqwzxGYGtRZV6aEock8Ku2pq13qhyTB3Dega6",
  "key9": "5BjxCwygSDWgMgickMvCCr2ftm94TqxKUPpwcy25uvXEa14JbnyCrf6vzGhWB1bMNumztbh38M8jkkYTgLTRpJwk",
  "key10": "2RTLV78xDqVsBSZTN3VmFn5ZUF1Fy5YvdhY9zvf417bNcQB8vzuUXnWnLhVnjZd1tWw3A2m486T5c7TBPkw3WLWx",
  "key11": "4yG7ERfpBDE6ziwGpskXSAoFGSbwKKYrAM7zqJ3wHpZ8YpAmVPjr22D94aLyYByHYPGZ46ubhALrL4egwG1DA2Zp",
  "key12": "5KYtWjs4rsb6ec1EQJUmz22h5zj4o1FL7iKjpHPKu7ERpSk8uPGF8VSP8Yi32mhcS2MgANxDuGn1uAemNXP47u1b",
  "key13": "3PesnnTgoYGwsCADQkjkm1CEzKNbSQY1CToFnSqPC8gvUz5QNaj9ZSqznCa8xtiQwtioLrsBZ6QnYUVoAanD69ta",
  "key14": "2iebqBKJC7rhkKALGCNgMRWsSq7a5PWYHgTbujJPRGfFagjSRjLtp2DeBZNxbCfrtY5bEhBVaj8iQeR7ptDYRjmM",
  "key15": "UKAiX6VzsyTUAiTQrwWyEdviNRxjmZnERdAN8DyidgDA5ptpktWMAotUjXCUeQv2zrptj1P95h6LsC1XtWdEiaG",
  "key16": "xFKCvs1Qdiz5JSfqvTodRHYK19W9ppwfTfVa3Tkc2Ac9VHNQVXzCGXCCGUUq6vRL9H7UdFbBCSEzeKhwuUHNTfu",
  "key17": "3cRuQGKBcKLRfLL8kspjCNuqBQdL8QtTT5n3BGhNbN1QvnpE3FmEDzVxHydo1EpQeBJ4gQDedUFJ8ZnHK19bKrfk",
  "key18": "3DT5iHLwVp5ovbkdSkZCuLju9oBS5nhSopP2af882zYGYvEUskV9eEjKA7uHewWaQyqLuHWZbYKqqqGpQetW9NQ1",
  "key19": "34roh5SWzjd8Nx2WMVv8yT16bjzSy337Wh9GQb7VRk573mWEGG1kyzHhTRRoPo7bkPaABv6f99s9t1UxT99kAyjF",
  "key20": "5BxHVrFy13ERaPWbp3vdLGZz7R2cz8REz2JQo6xjUQLtZbPXBj7HVej1kDA4SY1oRKALVHMeSpvYe1uvqzyHpEdX",
  "key21": "2BxgxSNak3yKqL57bqv85uz9nSrPyFjW6EK5P5EPHDfvT5MGiUp6yaJEAamP8omwobS819DTmewM6F5TjUy8MdHf",
  "key22": "2u4YPwfiNoGBvDYkHUMZdJYWnikGARDsdfSPCSvuBE5J9yfYXA7SvRjoArqu3FQDiawLqyVRwVpja6uo8e5Vw3Wn",
  "key23": "hTxusaSRJYcxmVL54YzKrfB5LCtBq6vDCUHz529Piteo5kPEffbWmoH8cudL3skNSg5jPZhKV94r1TqC2sSPwJx",
  "key24": "54ALaejf9jFjn3sfDhPasJ1UyUkpgiDjpRBPUZpiBUHek7DEVZwC7p3d6KccSj5P4ZxyY1qMnNW4JbkfvcyP3BPb",
  "key25": "3sYHh6Li3v8W82bF4nEbMdb7QjEJJEhAFnWQnDLoNJzceM7QDkAKsW9MpdbkCD1Ar3vgZXG4QEWEEvAbGQbgf8dh",
  "key26": "5uSAXYf63NRJSyzL4a5ouJbtmToC7W9rqSmmBrFL8kqyWPQahoy4ro3WVAiyLZYw2qQvv165bQinnyiPMzmAu5o1",
  "key27": "jpMgFMo6vhEMHJgw29NvxiXbvhPSSTE2q7UHUiudFuAAzJsD7KkRFztZJG1av7oNDaN3j6pu8cLFkeJaqVDzvRL",
  "key28": "5yFcsHeXWrqkWJiu17vCW2Jc6cNnb8biHnc4ZEfaEU1rshDJUb1zTdYJVX5Ee9aoXUA1TF1pma6W3TTvsEsXo6Ep"
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
