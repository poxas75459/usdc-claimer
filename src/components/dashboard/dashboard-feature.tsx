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
    "4gS2gZbpCdYL37uHyJEiUutkm3k72kF378ct2md1MMQUFvFn7JsvUc8cY1MGBdEUpzY4kNYmXUdnEk9gyDHrDCfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qMbq1ogbkXwjZs5kAZcVqD16Lq2PX8HsBfNUcFqM1bZxTPzJAiqaEhiqAcTGA5kptbn1hkZdpN81bHEUFMq2J47",
  "key1": "4csUcngJTcYkJ7X6sAvMMNdzGBZPHmUQqYPAvpN2FojEUngkuzY4mCN9YXszTVJqRENmc4oabtKs1dPGfYbNSiRs",
  "key2": "3g1GNApt7LBHwL8WMZkNkpXHjHLVqUDqtDDygav9eufz6hNb2E9HSfQ8moJWCYPC8eRHFdYhxFQC6frT1A17K5DL",
  "key3": "P1XB33ABDmggxgpCcy8Pc8JPcy6ARVhHoMoiBXDudPY2wR8nQACkxSrjcgwdZzLQ6XTGmdifpdtxEYPCw3pbRhF",
  "key4": "4z5EWud4Tk4X251wbywKuWegaQGVvMme35vQ4xZDxNj4Erh7VYZ3fpmDA4NtnA2pxhoGCC6QABTQ84TzZWoEuEXR",
  "key5": "5R9w9LD9Yb1t6WjHjXiMwjsZ39mk9fzNY9hdWhHxrBiBMk487oMppwF4yaFVd93nzGmXMpDKS15LbMVmoKVRVHqs",
  "key6": "3SjpZea5UDKN9tZXCokCZzYVB2CSJRiCvWUSNbmva7gN7ehVH2LrVRUWfKoY3MJb2NCQwYKytbGvfbq69vcZeEfk",
  "key7": "2DQdkehKy79CKoeuP2Xhmfd6ww3YZL9TfkB2aQ88RRsUZCDc4TjP7Ybs6ubtoi7pVpvxYEd1qpgtigTNJiNQwViB",
  "key8": "5GryWVGpagi5tEEpVU2PrKF85QKdbdHAWRq79tkpWFpb1TwBApxoim94rNMd3aDWSZq5vEh8t5HyZ22NXajPo6MN",
  "key9": "2YJVo8FT6a2G8pMyC2iaQcSiJaV8vAj92tiSRa7ZVQarc3sh2W77yGdytwEmd4d9TaNvGoTCRm3X9CRfp62TX5ct",
  "key10": "66pW3tjUF9tb8KDJeJupYjgREjttsvKtw7YB9v8hA3xZaAuYQtxQ2F9UguD4zvMi7UdoxE9TXdraozkcUi5uu8La",
  "key11": "SD2fzDLohHtUWtoB2k864in2mqvz8MjbLLk8M9odPmR3q6yVkVFLLjhpocQtyyn9Xj9j8pEAkFE3pZH7ipPjU8M",
  "key12": "5D65kzV9331b7BR4YZHwJSaFDErTBybffe7b7s3DVuQ5vSVaBbpvRoiZDZmKMyAxmRcEu5biKHxRDrXhRbzWDei5",
  "key13": "4wctDXrEoY5Qz4YipniqEsRr9wj43NQ9GQ8T291gCCmRyzQuJ9g8tGohN9kFc2tRyHTQYStiy57PzYzk8cb1M2Ds",
  "key14": "3aArpTMMXAc4xoFbQf6N8jHgY3Aef4TBfZCwiwniDNSLqi6Kz9KNdBdcvYdpu5CddZpeE9J3bBCyGH5VsunHZQpE",
  "key15": "35g7aKXidefFKmsxofvDP9HEaYAV3197TRuYTgWkWb9KGgZogMsrPKWNR9zjbMs8CYGfYph7CqcrWeFHofbxxujS",
  "key16": "3pDhajAHS6b8pnoewFfzdnitwHQfBJAJLCX2h1tXN3HcJTVBfFZCC2GY8H8JyAmidHNKsFhBATGPt5psqoVSVNUD",
  "key17": "mTDCGipMi4fBbQtxuDL6uZtDnjYssomYdYCBTcFErv96xRyfBnyrJara4HfAxhaNT4Yj58NUp17urbNzSW5Bznk",
  "key18": "4MNVZYRpgFZfUZ5faMWC17CazNFXb5AssPr3q9R2tJPN2MtA7FrcUafB3PvzKHN8STnFTx3pMBJWp7qL1Qb9UZFu",
  "key19": "5CouwLn6V9TiVmfuBU4PD1FTue28zvS6Dr5YcytBQWocU8UF4tuBvKBDQsW6ZJphw8dY4E5ott2GNNGHV6EZxK22",
  "key20": "3f9EVtvYfpN2kfnPRMeYtD57WPfq23eirofwzL5zGRuWmKsoP9ptArPXYF5V1aM9XFJtkvvXUEv77hFFS8X7YuP5",
  "key21": "4CSU7Yc3XyaWqWz43KJaG5B4JGh67Ekh9oErvXFMhrQUye2MnbgR3uawjVPp7k2ornkfd4GFVQusrZAX5VEsb3XR",
  "key22": "4EkU8w9WnVe9mZDhwqxhqi33k3qp9GbLwiR7ZM4NofLbAu14V35Fr1wKjEtcgd4aV5fv4f7EojHhYZRqqX8BMnGz",
  "key23": "5fVMYaf126WQG2kiV1jY7encjUPEvt1MYevnQgFcAYCAD4XdTY6HDPizLhsFzdYmgZuFYDxFTHwUXrZxupizxT8o",
  "key24": "2w7kRvAk4VGkaoA5rjXUuXUDzeSLD2KvhykiaWyXaf3Mf6pYsqHviiWYZzuruyNktMVimtC2UDuneFJT5ytZ5JkP",
  "key25": "4muCY4GhtdLEkV1sRucvmWwcGPAL5tjCnwb3CcXXMeFtkvp9RETgCNFJWyvp4L9SBiD7eJNRcaQGwVGXGrX99uUS"
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
