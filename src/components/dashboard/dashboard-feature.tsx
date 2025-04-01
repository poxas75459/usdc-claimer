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
    "2qcrgiE2MUDntRaz8gq3UAwwwBeounRQThYaTZTCYLXNz5PwoMSynuzSwHucD78fzisARrQSWZqWck2xrwC7rK3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bPESDQoD9kx4vWt8KChcLPFGzN75KN7kMXTYVQv4jMJRpnYnNbvzenjzuXLLjuWwRaVb2XRjbcTGearArQ5viMN",
  "key1": "2PPWaZKE7e9ZBqETaa7VCBAN56njJh6MkMezJG8Veuc6HxLuPFnxTqSoy5L8FuJRJKFztbz1hvSQKuyGF8h9QkSa",
  "key2": "5eYy9bdF62wJJupTaj2HR9ik5HvdHVkg9dsHXLuLF1xe6gJQCes2dU7yydafq8VTqpx7HbDbHB5PJNmr34z4w6Q6",
  "key3": "5vq9Xz17TBSh2FK2TJRpHUpUxaFfbxbCLFyY9ZX7AoSkjWwEq1Myah5whtAM2szuZhdnXas5ZQr6NsnwEdwKiWXs",
  "key4": "dDLB9GiLLDZQdW6xBtKWqhPSUPCThgZVoD9RXHAoNsuZ6bNAfAyDke4e7PWVXG2YHTzfNB6kHgQLxrLZXkqodQG",
  "key5": "5RttYbMkPcQfy7sX99SFxxednKUj5Cg6EwHJtMJk636SB4c8R4YZBMZJvcT73mzEeUnWzNeaXf4Q2gN8aoNbcTkn",
  "key6": "4Wxgg7n9DRc6bmEV68dccn67d9oAWZZqoEHYZzQHBUeFMs48FkSU4wXmV8fYs1YMpR7xJYwszkAaGibAZaQBy5p",
  "key7": "3XXQsuU8oHzrFpWaiev5wvBiNjngQQBmvfbBEKfFbQ1XbUMJAPS4HaeBcGtWja7hJUcqhhLB7zoKooZYh5kpoBdk",
  "key8": "2oNrVLdxL4gdbd1w5TAPJXDSiLwqdCQD6ixcGKr8wXzJXuQjmibGunBKWsVopAKQthpMxykCKByaYva8NoMX3zFy",
  "key9": "48hrWqWPhAGLmyJ7brzC7LSboNQiYFiRMJ8T2EZc1nPaDbxBFC84M7jtrmCvDdPbbm6P24zXXbUaG6WJrf8U5Sdq",
  "key10": "5AtixjJJNc2oFqf3XT2uQPUi1BfGZ1tZFKJUHtRzB4J1cFfEkLAqr37tA7TZdqiXJWb2Nkmiwg9xDbcKKzjedx5j",
  "key11": "2V9aJsjFxzNLBCeb8pgixzUeisVV2VwPZmJtVeFDsxeyiwHNfY7bDS4CKdmE8bMuVSZvskPvrsByYLyeDpDqPG56",
  "key12": "47hQggNK1vZXhVm2k21UN8NY79kFt5QLLj9jNfGZ2BNNPCw5cinpbKm5h6qAsCGHQoiK9wPbiFWMh5pt43uwoM7N",
  "key13": "SU5gzf9zLhddZEdYaTeNx62ka3Na3rVFqjH14b99zCRmhRATvDja4h6ghtdP9gsHLZ9vNuzwvA4sxhLRdRhXCYB",
  "key14": "3tBR3mMYxg4PhGP48H8XBvGLTxMJbxaiGKSPURks6HUQWi1gCdJLKhqpLHjdZuCitKzVk3Lrg5RNRetfLZwKkCXg",
  "key15": "4DRgfqjSvebMEnBchJWH1oS9mG9ZWME4xXGKkzHnF1N9YZ8txRfquYxVd2qCjHR97TPyCceuNCqieLka5TJDe4Se",
  "key16": "4zVx5B1fdKoBV3ssF2AEsJRuEGifS7dc6yPA2jRakQfsMn9VQx24rZZYV65tgfmSykZdMPCprC5uxH7J9cyydjRH",
  "key17": "2QmJSG1M3VWE36WxXz3KZWqoxHeQmPG43HxEoqG2sbr1Tf13SvfY6K8VWL4JiTRhENqYokM8qn1VEf3j4s4SJjJN",
  "key18": "2rdq92sehErus5woUaWxJo6Ux3WPhbgGadgtrCx3firQu3zTvCahpTkRqLTocAsUg1fs7oEtwFd5dWbpDS7CKMSD",
  "key19": "55UH18USZexnZt7ZW9vqRfHp1xVMQwZnP5eFkWkSFXYqQxLEXoNMYMuTXTMvw3Tv8xaQ7wVL6AQZnmzfhjRtYy2q",
  "key20": "6gFGXqhdKR7SJxDQ4boejVimkHB54jcv8DFecUqkd3suqevFvEhx2R815WJeqCRiioSPLaTg3axkxSVcUEsDavv",
  "key21": "3tTBP6ZQofbSGbSChfiiYf44PdYzWwjrwDgmGzfyQcQuZoeJLDhiDtxwqiE8WXG7D2dzvuTsPztYtnnGMXDbUxYE",
  "key22": "2ZsxUXxE9S56CkyG9L1HBGsi8eZSzuibZjMUtWWaQ8GPpMpdWzrBzfSvJomLRQdf4QDJrG2nMuBhAXNYWbdnoxGr",
  "key23": "56Bts49sJrEJFTRNhRaDKZspu25DLjaqTRhid7wExv2dgWaPAaKsUfGEFK67EVBid1v3i4DXS9nXWAotxPy5hRba",
  "key24": "2Xu2Gf9LGvE3PLUdYqcxfHquvTXy5PTcMSUSE7sxZBSvaVJe5dtkTdm35xmpxgQKcmXWWRZmTSFkKTn4CUSRv95f",
  "key25": "seb4sxfsXLiiLH3Ufado2h8Uv8esLYfHFnrBaf1x9ADKqLDTxQwRe58PeXQY17r9vJ4qjD9k4ue5EuCuTqsLwKF",
  "key26": "5xvnwxtUTA6Ry7o2Kg6fUqJ5ifStWyHPwpghyk77keyUJ21ZD1Cv72KUn1FNQ4Zt7cJyKNPULiYad8PGztTBD8DX"
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
