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
    "4nf5CnWkrv4j4ozc8Xtoii7C3iBS2s55C66LeknM6LcMxqvsJ2gx4MCWd4hGZ9vMH9ACLShz3nP7RqwehhJH7i4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25yNvGR4x9RNJxrg4Qxzpn6iHVxbcGKUMwHfyjXKZFhdiANrayxvwPDqEPgpkEMCLhrTmZaCBFUBAiwTHVQEKNRm",
  "key1": "MZsGKh4pGFbUgHeKFEbv2tDAeJgSNAPXZoZZS3euVx7LJoriEaivFd4JUn9XDXJYbT3w5iCMMqg35eyoEcuQzEM",
  "key2": "2WERhf6K7cVu6GoXB9jAd5bNA3uSuc8YbWy5HB238LxU1VxVVS4LvWH8p2ZrGdZN8nHdU5UeM5yYqm1diE9Z98p8",
  "key3": "2CVoX8UA5TwPokCSTJXxSD4SFiXa2jN3GxavKhRhyLH4Bcec9WzT2Q94ShVg3rBosvxSBic22k29h74XvYrqeKSP",
  "key4": "2SqhdFrnBGrkYVpCteENoLKkvb1TgrbMPfXTbEYQANLngUDye9j6expEAYjFW7nzx4Fk6bruzdaQpyhLQumyJRsV",
  "key5": "4TAcdCtTi2MQpDLcmrq95AqD4W9Vy5AnWgWiJeN6ia8ywipgEHmEPoVtufB5UtVRmPKMAWcay7fV6tnYCM4HGDdm",
  "key6": "4Q7kAbqNrDmqtB2uNTT2bVfifQL56Pu4RDY7b5tMucDe8fRiRvAxbq6YKwhY8vxUfkBMvdJo6aftpz2k6bQfxS8p",
  "key7": "28KqVMvSPovxCRXyJQQS3jUbdp1Jh6NLoZz3cqLoNGa35zY5aKS1NgSF9SmwHbRCm8bBAAeuwr5DFWJEsQNQiUtd",
  "key8": "4vi77W3apoRZZwJf91KGN9iVCnnpaJHZuJe4hovY2CJtxAJhkFJRa6ZKBAWJ1PVLh3B2yEvu4aoPoxdngKrr6p3W",
  "key9": "5maHbAb8mQiUCJZEGRyiZuoJkw4qfSuyAt5xAnVRP3hrzk3rRA37RNke3kTsce2R9oHkVbWaSmQ58uNBT9f1vubB",
  "key10": "4x5LhpqtaDLZ226oLFzJ6dqwz4wPZKtQC78HQYYBD1x5ZryndPkyV8eYKu8vcw2viwVqmUnwbVayskYBQ2HoHztT",
  "key11": "63KUFzW7RDaporkojLpgLXv6zsNNvjn8R4WbWALyC2EjRbWPDTtcW9v2TithkQURjSLyAmGaqQ38ujapw99GX2V",
  "key12": "5JNxq2y7YBapc62LkZ6DwHUJpu2z3obRkezb2ppcQPmmAaojMiLwv4FSp4qtjD9j8Ko7YMU862DkHqnskhJwBJNf",
  "key13": "2UTVqzEctijh9EDjazRTyjjm6Hqa4okVRJGY5uUikTds71JzCnyYx5eTaSZ1X6rLVBHBCmMqQ1GLPCVhEXiWZs5A",
  "key14": "5rzxd99g7EXUzCqVdPq48PyFs4FyHBC7znYroeMM4PEwavTuuG9xXS6ZZkFx4BwhbvdcJQg3paRD5ThLF5uCqVwb",
  "key15": "5JXrwBbwDwBuvsMVGuiTCNG1UkLpcMk8RbHB3reDdTbD5FnU8EpvVyR2TW4nuQ5SkqVJdLKBkaKj8is4tpYHvW2h",
  "key16": "4kaUzrU3mwjobTEKwkPEacZSi6Qk4oQzVU7emsqSywNXMSoZF9pASjncPeCfGLEJ4DxScKKCWmoVhr2BhGufPrZN",
  "key17": "5XCF8sQhWYFEgxgtZDwbs2J6tKegu4DFRyAkMARszovWCjeDSM8KAMj3CtTPbUWW1ttG2FbQPxHCpFssMSTQdnJe",
  "key18": "32te8fJeYxNt2d15iYZTo3bmkKxnGtCRAA5ra8oVhrvmuA1bhDD3KyMs1aL6fD7zNBEWCVB1FMV2A4tXUWe56w3w",
  "key19": "MQ7VQWvpa8puMcXzVVWhfAVwFrP9YpBUZzFWwF27T9cWPM52H5zrY6hpaYBbWbmeo5qZSBnwVts4e4o3ekCNwfG",
  "key20": "2Teo1mtdTwVu7nVi3uNJHTsG5YqqfnwFXVFjTLpPse96c3FCwhFcZ38cNZhuC9FqodoVb679DNnjVVd37n2kKqeC",
  "key21": "2dAv1GwpPgQpg3Te2LXSrFD4THarfrpknXoRbSMGaLkFxU6EJqbnSt5BW9ZNcw6qV5aehy1xYUXRF94dBftbXw1S",
  "key22": "4GnZDZFHd7ewoTjs4skQ6Qdw2sqUk1XmsadoPm3NeoAX6aANXBTK43dbX1J9xJTNXa4CDGqFhk8kMdFkhiUYWJFw",
  "key23": "3SsoSkR3ip43E4xAJvv8wRhdvQsgSiRNPFpjn1FVtQvSTAracvdXaEtqr9EQiYWe3ja7cWp8zjeAQSB9b2U1jR6p",
  "key24": "35Gt9tyieJohx82KCu168JaNq7LfnwvzyLjX1X2QxAU3U8L9eSadeHykpNH7G5AC1HgpDNWXczY2hQvs6Thkfk8N",
  "key25": "5qUZGR6BDtYwHjz8aoXXsJpbosm3GepJXZ75JiCrAt32UBrxEP8xnNuGCKen28qjZeP755efPawodCK1p58n8ZJC"
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
