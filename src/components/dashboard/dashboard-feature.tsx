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
    "5SJWDwmGbubzfkHdzAHkgSWFKxQxJQ8boX5e1CiXxD5kLXL6LAUEd8AEGkiS1YgGFqgqQWnZ5AkS1wY2ySxfCeXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ek3N9EgfzzTmm1mfcdFxTwWuXY7o2mGr7CDtZwJhwZ6HYCCAh9bs97R4sa1ST23hynmfZmcfngzxoXjEP2yUowu",
  "key1": "2nFNauPRNtPDD8TZL495M2auEx1xHEFC9teoKNH6BAEE8xdpVja39zc67p23TyrBDoVkkhMsdd3JP28tyPPJGoRC",
  "key2": "3EGKKmR9T2FNyDmroETwFaXpfMh4irCyW7XgMoCroFnF4TLoNqiRUR8FjA1ASsxQRLTvWC7MDVYX1SZVoGvyQgYJ",
  "key3": "5aAHVi4YNLRgPtrzRMi9siPBPj1DecgFbMcmWr8a5ABRd1JVzN5gRoVbn5Nexd56UWNYJ93pp6Eew3JgUFkQ7X3d",
  "key4": "4FVEBbYY7q8EHiwzmEN7Qo1QdWxWEKRBr1pxGMtLPYbL6ExwsBhikaTmzs4KHkSFtjJFU9rfy4udvFYWn6XpuVrc",
  "key5": "LWfocfWXRuasgjvVPJVkTQx1MDaqLZxjn5RnpnQLdUcz79AS9fP9aNXoZ2NTJZ9vkT9oVWzGc63ZrgpBwVe9zeX",
  "key6": "5ePNrFbFtF3pGFYMKkDsSgrTBN1SmYe2dvubkryywFSnKKncs8VGXUtKNTZXX6Uv2HSjJfmqHLPYXtKrqWnFybxk",
  "key7": "4MnmykvCALmTsPkjEBrDMqPCHm88s2bt5E8P6uogRp1LMy74qE2gmpYoXbphDFovVmRui8moiNFLkFidT7aYeFnD",
  "key8": "3hzf4s5Yr3bKjeGzXkV69yBAn9kceWZg9Si84EtM3W9ZzePePNGZrCJM9hPpeojoKvmrKtH1SPXkNz4Sctfmi56m",
  "key9": "5f5ou6MBoYBPGpUdQthoi6C4LFotKQUU4aJkqmCt7knCxxiMC7yXgkGsW2ivENbG9vfa7vPk94Dutvu4rSP1JrUr",
  "key10": "4EH546A1KRo1sT9dhKqALB33UhAmbvJd4F5Dmm6nc3YTcjxcuP1aLbuDN4RfoxNVaeBkdZR54512oSURrMm2eUBC",
  "key11": "TFsxdWyDwDPYXmXRPvSDkEdNzdrs2WBcadWow22q2Jpq9kgTNvBLJ2JArN4zF1aG1w2HhgMSd5kWGbDX76KS1uX",
  "key12": "34itaTGt3L378K7768RH1E2rcbQC9tHB3U53MbSYDf2CtwMWQPApqkmkqg49ZoBmEvLrKf9hdJf9nweFWEUo4THa",
  "key13": "3NvvVdqMnLm3ijSpzNgKqkByGUKsYA1Q6wZA198ueCudKZXdU4aeubqBQBVuBnyEuxowYDVHSSAu9xMxcGKu8GyQ",
  "key14": "5U2txb2r3DJe4PpkL2aUHqUHi2skDo35NSotd4rdaYEGu9A3vUbF3jgWqPZfQ6uffnu3iFwZGgTzsx8LhzmHR5hD",
  "key15": "5K2yDBSM2mNxRvqafDTMCkR25na92owbFYPnpJ5PpxvxG6aZs1zcxeaq9wsMjbX2KDkeLEgykEuZzp6nJ89AofFS",
  "key16": "4jDmhQhByvLs4MjtCQpwSQLbgo2EYEhwUzjvuoycAH3Xkj3iSLUdksfkVkhPQep3XCbgGwX5QkeotpxsHbGkMSgR",
  "key17": "b7fpS259dovSYnVGon8pAMyNyLDt8G1ejPFztidfMAGcD8fGAoE3jhFY3mGVzAHezQuaHWpPggYNAm5wXhPHvLg",
  "key18": "EWtTGGk2GAkincS4mVpnVTF6A28bnvyZxBKthPFestHBirMPMTBsuHT2EyCYggJDqtUbajrM1hqzTjeQYdPC6UY",
  "key19": "2PVMBcHd4vVSFRZZyDF4tXkcW1JLLQeDHtAWHmfnyor2kCgPNCA6NhF8HA2mbEF3qb5ZD4FR2BJZriShujWrWvVf",
  "key20": "5Lgg3cFat9zVRadVqYt7LfWH9QAvWiHt4VrhSu1AWPEaBcwTMC7ahLS7FA26vGXPCpnGGS1LnMz45HEBcnmJknWB",
  "key21": "64TwkVfJ8rgXE2Wdhic4q5ab2SampJwNxkNtKWrsTsfmN8aGcpP1rUYpnZzPt8XWSUuJPa4QZYuSXGekEGeHHrXm",
  "key22": "d5fbXtD2XZ2z1rgKo9Gc9vniteFz62G6TQWNjhPBYnW5NdEGfKKYzzU6J7NT6gQXbTeYuAfG6qRq1ziYj7wHy9R",
  "key23": "2wihw84m56HY2oBs734BWrwcEofRqP3obD1g6k9rxbstiMa6p5WswcgbHZzsbJvSPMa94wbGppiczoYMVZReuGrg",
  "key24": "4GKjZxm24D6Pu4FNMhoXzmh3biStKKDMkT8yE349BEbTkn1diHpk8yxsWYzK6vihAirYsQ7ZAK3RNswhHNiikSs8",
  "key25": "jECzgNmWd5M1W1s6bnxYMbxk154zUAvGHriRNXAgHUQzu5swawKBZ7UvoKHvArEJ5uYqtVpvZtHnipxexAQBEin",
  "key26": "5xBQFH5RoThTMEZXdggMfieCRCPW8SFCXdVL6KmuRQBype966NN84fzeasnztNTCoS5SLKcwQSn4PM7HWVZz8Kuv",
  "key27": "2E5RpU4DMLicABfgexBN28BR6wUhmq6Jh4Q8Xy7764DW1sJzUyi7eDao7LxyWp66PdfWwQB49fsoWEGARyMZpVVe",
  "key28": "3pt8QoSfHPjzg97fVGTma87a5o9Y5Jau4b5tvWCby4utxVuqc6XcvsGJQ7r7QJukKKPY7XRw5rm5e3gjwh7BNyBD",
  "key29": "ZKrCnRxgcJ7aU79GTjvk59cEo4bsxqKrj8E7JYgYsKo98DYKACPZ9ZWNXVveFpmRUHqp3WfPBzmpSEJWACs15gS",
  "key30": "3QTGb8G9cFQMPupP1dxKTjnU5EB5KVpsFUNj47K3Rn9oLP6QXrBtYsqNabudzvGPKTFv4tBMVGbgxJT82zgrzWKV",
  "key31": "5szpnspTNcNVLzJqyV8M3goRMUvvTqUyBXxe4qW5MC3y5JEBfPU5UW92zXydH9pkeMt6mAqznkoBQ59Q8jsxk6hq"
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
