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
    "4YV63bXkRmSnUdxZ81krUXkRpsGpifUftChdtBkS6uU26SfLFn1iHTkmFy7YWZH8EVwAjjsgrapETVihY9cUuVwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tBqHmqHLF9n6C8beEGX3Xrn2Z7XYrsFdWfn29DGvwvboxtT9z9BJ8VjeKabw8id2qtBSixJVCYMUUyRjq2iKAGn",
  "key1": "4peSQhGK8Paskjab9oZmWA8ZT4PeQv39QEXdByMT5mUmKsLX8KS7FDnR23K94Mqs5VE1ZtYoFJQNMKpCy5ErfZz6",
  "key2": "4Ye3a2TjpFDWKEwq1L4Ue6N1m5QhNMLEy1cfm1SA2CntdAKU3JQQpKxAVKYmiUt4FNfjc63ZSTn7yDPu2Zy58Lwv",
  "key3": "5iT1GcaPJJ3Lx2Q64jq27WZNB3JHpBCMDETqaB12ifdZJ4o3ioGLQxwYRTAcuoLQUcj7fTJ3YGw3PatfbByp8RJW",
  "key4": "4iWucwk91PeCRsWDtyYNHq4xFYBobbKfraNxm4c7uhbBeLZP4SdARjQL2VNZAubUXwiewp5U2GHAydqkXoq32Pap",
  "key5": "4PoSYZcn4kwfMpgu2kCDa1GTbgM5pjgJw2xV7MmcnfBuUgLU5tPLPRzYidxSCzUy9aSVFG9pbyKj5vrRQfqWMDf4",
  "key6": "5ZjWb75wQj4wsdg5HS3o9uezAPGB7rtfwhT6rjsignJYuwtL82k43K5PQwZNz9c3Vn6DURcWRSeRhxGUfPGMmDQn",
  "key7": "4B9mLHAKjrJq28YAHNWCyZRuSyQfgxRdbAq9btd9FfEzex98b8WsJjtUFqq8jPzCJsWaD6xFej3hwGzt6QM5hg8d",
  "key8": "pEX82TuGVJyJuzPhjdD3Rvtpdop2D78GoHpTXYpsGg7iHX1mpsXf2omZ5Yn4r6PTkag7e92BkXXJP7rvFbJFX2Y",
  "key9": "66vBaftb5n9NqhHfHU6SnSom1ugtRj8un694UCs1QGKzhgTuAr6kxzFR1XwJE98uCKFwsaZJBdoQSNFWmhp99KsF",
  "key10": "qDZqghwCs39nk7Ay6vcfw9nvYPEXYZ7SeSb6YYbnhVfNnbByFMuaNiQxPG5iN3QiMJPaJwrrcRNVhDBoYSpb76e",
  "key11": "4UhfGTgw4Y7wtWV8GqqPVPe1znGBkYBC397iiwmDUBcrKRxLW7BSbqftQwjA4YA62gk5Rd5GUkKNYW5eJ23GTERV",
  "key12": "2bR1tfNophg7ZBKkryveBCHLvdAWhdWuQFZ6HWhrT3NuRDJXFSoLagdFubV7uqMcwtPVdq2USgmxcAbQVr3KL7jN",
  "key13": "4SvxnyguRYMVSwmct2aGTP89RFXZyYvp7LBpXKpfcXBiL7XLvg14ojhC8WoG97qygc1RwAi4sG29DcqnbG87Xq8a",
  "key14": "3p7rFt97Ua19h49JS4V1udiFwC6H9b5KqGeatL5zLT7T247XrHzHEBcmLqXnQ9WQTtk2y6W3iZ8RSt4RYcb5Q3Ya",
  "key15": "We6XooHZRgxkGJqghG9uD9hyxgMFwqQdSKYWufm3yYP85futRqjTPBehJBzBpfZoyYNC7zQDveW5FTRcGujXB4M",
  "key16": "3wKV98ZB7WU5EMJUvtabqmJepFa4Syy9fWBFAkCDTKAb1mcwtMo9ZjkUpQsm25aaaE3qsKD3x9v5J7xw5H2rbvqD",
  "key17": "32vdCrgsSW3Uss5dQjBdM3ezL7Dk2ZVFy7VxT25aJYeBbuJnrLyj52ZQrA5Vm6MzXUb6rRdNpopckTtFEzcXs4Wg",
  "key18": "2wY6Vd3qbhL2qNyrLxjfLgDP5FoYRJjVzzh41LxkQQ6AgExuPqp7NNQgNjqi6UppLjhUpqwJtk13G1hKPAKMr73r",
  "key19": "s1AaYjQ9CKaeGAdF6kL46UVfnNjM9tEcD3M4azGkk9fYYUhg9FCcMbzPHSE5tGLd12GEr2aZn9oX7Dp32CMw3Bf",
  "key20": "4hhowtchJrgbMWxkrUzkQfYVmJxHBPckDyoU6yUiwGdWcG9tAfNSJ1hXU82wxGsjcRRsTV5NUGEQqmEWj8eRg8sg",
  "key21": "6jgvbXaSc36c4rhQ1efcXbDPmbNGV5mUmu9qismxeLj3D4dHspCVYfoBVxdkBtHjtW4jK5NMLBA17D7wj4HJsKu",
  "key22": "5QRWQUWEyMb51tKmN1kekshKQixdAZkAseSKFMX4DrMZ5SwK8G9ovLhaDgUuVDQLFSU7phBHJqj2jZ8xRtvnRQB6",
  "key23": "38qM9NgpRjAoAgnPZsEfDUA5DfFiVv62Kt89cf43QRdv6VkrbkTtJfsbGkbbDdBdt4WBuGq3y2LvLD7HLxwHLjRC",
  "key24": "4nxm7FKnhCDHB7Lo6SkBo1CNv5XaTHfvd13tgrHWymWxB4EDUugNbJbQZrJxyNmMzvjw3veaEeR5cNmMCmZu2PPi",
  "key25": "2jrkZujzk1rpUvcPbkQd57jWtQhTLPb4RptWXLJgCYemk9oTRNSXGrZb17j77dxMDZWi18apVKBgBxNfWffbg3km",
  "key26": "2BoBT8AYSorFbYLr78yXN8WFnhPD1aA5BRErK3cxHXUT4h3AohjRHDzRowdkfMeNeFUtiHVKTJdjBnvjUHEfTJqe"
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
