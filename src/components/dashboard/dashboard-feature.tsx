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
    "5WJWq9ENskUbC17NgxU2TibG7KUM6uey2FyQ69Rtqa3LZR24TsGmvHLxjDhbST58U5JLFLRcjJkSdnYKcJyhewts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UygbctxCVFaLft78hPc9Z9nSwhwyChzRNkDtfDsQjFZjbfoxb5AaZ4mRpFi3V6xs6vqu1epAZLQNwXT8pWVjFQj",
  "key1": "21rKvjAXE6QMhv8h9vomDJ5N9AQgZzLSWStRD5amRFtxEfjRW2HLtrPPE4d8HaNgEXWSjCzpGFLgHAYugKGdNhXx",
  "key2": "4mEXFVnebknAnzcMvRPzTqeZqDuXdGe2is5nwRVCwWxywRSXhZ7zmMko43fGk4boBMRqGM5FBo8aa8aCVD4TJi9b",
  "key3": "2eGoeMzmdNzpDV8yspeVfeYkzfZgQ3pcGEjraYXQRoB8AdFCfvZYiE73FdiWiu8RuFVBtYhnFztd1ycLbKh4nBd1",
  "key4": "LUB7oBLyJGutcJ747M3pzDRZtkJDZZ1eWBUvPaEWx3vC6NTJVJX3aYjhuhgu49whACJJCgzwUyDqjBq3h3gpUyt",
  "key5": "28fiwTT41cbqwhhRtYrWXLwbgNANJ6DZUwnvP1TRdXfeDukcLTqfct3KReQiJthbAuGW8mMWrGWW6tVVzHEHYZzN",
  "key6": "5hTVLtS2PTTAQ4m9QdRWojkn6M8iSD1HCf29QUwRahtCwBWnumSRNtDDrgL1z1kscMyggba16SNaVE1aDL1EK2q3",
  "key7": "445SeU8jAxnpVT2ocfqDRbN8rh7GyspqbP4PvgaeC13BXEA3cwPCjCLaZU5M4zS9K19JXXKJoTwcpsdMRJMDmdT5",
  "key8": "54RTrSnQzAKu6qEMKFKbaPW8Fuf9rPQjn5baBKYsgYSbUbQkUbFatYx1QWwY6qtbUw7AF1XT6j88TaigsPJGYxRu",
  "key9": "3J9WFD3re5dXkFBN2JS3QMG2mtTnfdAM51ejvgaNfrRmN4QRN3wJTtk1babPdF4bxqG91p2FzJQT2mSWRDfAufeG",
  "key10": "4CRcMeafhNBBnTdwaMRsLHG86Q6xMbanxZ3ugyr7yHZkNzfvqsN1UnCJNLYebQv17bGtrPqkWTLymucqVfb4qHME",
  "key11": "47QuCxCkXLC3PAf8yfaxD6ovoRdDpPfEut8Q91CoQGfnAXxmZfMnDB6fiebNUn727j7ot2oYcgWBTn7TXHr21KaC",
  "key12": "4eeL6qKE8WjqHDYiNRke6hgpPWaTteDBz5cx87M3DF5JLRHK4t4g66jdjEiigvPbysnFH3yq1C6tzgij4ezhcU6c",
  "key13": "TVsuFNC1qqBQfy95NrtX5adjtaGwnS2CFPj3oNk7f7UnhxMdL3mfRhCUu8inL5aPJ8RDQotefWM4Ui1qQGSH7RR",
  "key14": "5isPEQQPVSzDo83UUS5iy44KmySrnmu3veFNoCiMmCmkb8LfmU2wUYULYwvSFNwWY45Qb5dD6ffBEUpZfcmfmsVJ",
  "key15": "2AAXALGx44RyBJtPgBJqdoo52Y5vYRxQc3Frf7CbCJ5FCPY3wJ59iSZku3awXu1xBEG3TraDs7H2UZhBDqLEkkFX",
  "key16": "4Y8kzq5mwCMBVGSugWzS6qgRT5vTK82okoetGWTj7dgzd9tSMH3Aytv1ZqFziN9mHLuC4wmmqqCfwjTLcGQ8Qf2q",
  "key17": "3xeuJyD24GWhZcPK76D8qp4oeFhxk1qkQiSVhAWuyzgpxQMHmYKKHjHQGU5PVH7L5dNVxzZswbtMX9QtdvM7wchT",
  "key18": "WJMntDvmhSvYYYVHs6iGeEtH2oe4KEHWAvU4bKUWkhUtMZn88wF7W1tCXnt6jEvp4NMpq1stjSbBRG7mBDbDoZ3",
  "key19": "5pNoUDjBgUJkiTYw4yyR5gc3QoB6X2ry2gjzwGV7rpVgHzbGRJJYgyjyVDgi4sP5cuVxt5TjTuCJwHQvqVDb3yTB",
  "key20": "E8BYmHw5LXmxAhscQ75NQhXRdHVSZg2y1RapJqJD2JjrCVSVNzkW96ng1R5bz6FUqgGJWfq8WSvd3wi4x2pGeQb",
  "key21": "4mvPt7NKjZEJPZ2J8j61jResKnaznV76nH8MM5wNvg895FxhYmg32669pCybySGipsEAsYKRsbG53xW551bW1suD",
  "key22": "umSfnX6mNP8gKBXZ6UuFyKUpYzMX6sCjSmgaWhUcF1qrjHovkcwxpBw8HboL3AZ12aHx9asXb1HVNFfVYwH2tf5",
  "key23": "3qCqWqpTRJZSmQNcnwC1NrJ2YutD2oHnb9pZChMj2Fw6pKT7WguPSBzHuJvx3rLNQUxnXRzpB1KTrfGGSkruGc1u",
  "key24": "43fJ6d6N4VPACQoYur1hNUPvQqG6yKg5ubWZfkkuLFnm9rsYj7z9vihKujKWcFyqP8yLEHMQQwHzj2JJAAcw8qNp",
  "key25": "nK3TQ4uaeWYLhXVuFZDgwuGcyEmnPwnxaiuFY7fgXv6atgQ13q6Hdaocp3Ehgq1hiab3rnuKn72b3ULKR2d1L5D",
  "key26": "47zgQMucD7yhheFXv3HeDUvcYJ4QdbkrhexKXQu2YqGqgVdWP2o2DHpbMpBtpGzB9GafGNmzyMyYLTvxJUCdYyst",
  "key27": "4LU3JZDapG4WsSBk6YpuefWmTxApjMF5KFFsZKDgX4aemwuD4TsUK7NPVFAccYtn9mWq3vsqoudv1j8iaMygsfka",
  "key28": "4hA97DfwZTfd5Q6jGAqyhKXyDzj5sWLjL7aWNXnDgGpXJmnirMkm9Fkk6AidQ6HeJZxMiSPpKXUCacQYHPcLGJXQ"
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
