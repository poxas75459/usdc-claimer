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
    "37b42riiq8yafRpwmUixEH9ZgwkJAdpsv13GvA3w9ymGyUDuSgFCd4KQTJGtkC4G7hguMuQ9ry2CdVNBPrSTZWtq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VrXH63vMdH1gKUyb1w37pjWWKdj8VPo6ScR8cDHktCgmwFvcuuEyvggCm14jSo9jzoiZ66PybAmTmzNBzHEJUsB",
  "key1": "5w7pwWxkXQXiH6mqQ49tU7iB3XxCLscRSbmkXSx7PxKkFnQFbttCUUfsAhRQUBFBmX1kx9uxW3FeN36thop6VRb9",
  "key2": "2mvFqv2Te1KfuWpL5YEnoPs59nptCwkuJHRVUL57iaf2CHCpN1LX7qbYPtFv1j8aSawk52Pii2Wmd8w67oSk1QB5",
  "key3": "5kvxqAQhuS7pyYYc24vFgniuNwnDq3qyFmxC6nEbjvKxWRrvuPJyEDev13ejMtU6MVebro7u2ZcYwxf7x963Wgxg",
  "key4": "hEB2g3BD2f1XvuQpsdyxTzoZLcFE35xtwnVG5VNjD3Q7AYp5TvBa6ErS6PD4S3JERQN1ku6BkhksrgcWaKY6M8U",
  "key5": "4v8iJpXBYvRgBH9Xm61bhiQT5ShLG6gz57Nh1PF6F4zRCpYuFd8E2xZCa51vzoqHGvu7EUXYCnT1GPbauFwoQqFe",
  "key6": "31pGDJiXDzS9JbNSiQYyk2adLghjFtAVGA28jdqPBJJjnYNM4MNv8pJxu8nDhSEmwYX1u1WA43eamiwf7mtEK126",
  "key7": "2SDAB2bM8vhvz9GV2CM85iYEDYg5Ng4yLniNQ5rpnyFhfpbZfUihSNZfz8Z5ZoJm3dP5jWgaFF32bKNxiKaXXW2M",
  "key8": "5ZJgFQ6SkivR9P4kWJJ7K6JgA6RA334YcqZ6rUAFNm6ZEBCdNXyQes2WyZDPmzKGisvat8EY6A5MTwVYbaLu8Vzm",
  "key9": "5onDhbGzy8uUCHp5SzmGa7H92DA1cxgAXxb3ZB7yebbTGb33Ae6XuHaQEcxhdSLXp2xHNHoQWK5ZdQxV2uFvQ3en",
  "key10": "rU81vLmyb3oMGGeTZSSggo4v2Kb7fMbNpWoGdLrrzu6z6T8rWoTebrgmAcRWCJkfrrLLPANByPRDkMUYgqunQ4x",
  "key11": "2BjFbQRzr1ALMXqjeMdcfjYzX8QGtbpYV5N9PEDdZEKqL4WoQDg4kCrWr7Hjc8L9MYrXUG1nYJwEY946XwHGcL6F",
  "key12": "5Xy3qtmCZVr18CEB2ojZRdMQDqdqyMfqbfwWQFgnnZoTdne1eyBQDLKFXvE4RCqiU2D1gypJMMZAhx8hxHwCfKde",
  "key13": "XyrSyL5J7rbarZEwyPXcLAzjgEzJ6KFkte4nqzDdidYXk5fLTpWMK9CSD4RGxd4BaURroHHsApaaGYSg2PG1cHf",
  "key14": "2AJEcy1bWdM9dByuKTrV1kK6AYqSf1Fk2kP83QNniq99MmAAz2KZrmmmvgaraSWbaeQoDbo8j6DmdXa2zqJnTgLF",
  "key15": "3rPiHBY79X5TzxzawiXXXKBFaNqcpomr6vKgYb6rbFfD8uKAmK5z9bHeXTmfvfWqnePNcwN8dZprSV5nrCrozr1Z",
  "key16": "2ceNCJQ9PfG9UbqhdeNRVdAifsetDQhzjLBA5zXZKBGq5fD3asQFXLGFUSJNihkr8kHTFXjutrT71w9PbqpXK6rT",
  "key17": "2er1gWU1SRXvBXTbduPSLM7cPnHghQ3vkhCb8h2a3crKcsFWa8EQRaSF42R8Mzf7e3LafEuWTSqSpy5T1EdPWooc",
  "key18": "32r2LtZGn3LV11hNQK1eN6afXaqMR8X3xgnoCYnUCtMvyXm4EgYWhmxMR2FSVpVQAkSHHgVb2kLx11C9qhfeMxjw",
  "key19": "3818E3Dm7QngQHE4RUvZL6SZaFNYnehjUkSmzTkK7mAVo9awbuiecKWdZ6xNjd7kBovKLCsmZ9gj5D6yNgjwwuty",
  "key20": "535HHSjau9Bg6uAHUXp1T3ZVKFivPo8E4C7KA3X6cdAE9CwxagYd7QSJKtgQcvcHXGRWDLpv48YjwV2VbCLkXRK9",
  "key21": "2fw26Zy4yqpF4jZcAFmGzfGLd2q6x28Ae35nBoCdN1MJTnhRYTgf7RLn9amLLwUJkGDNkPAisuX2KpJkoBMb2HHz",
  "key22": "rMyoZyy8uy8jgmpaCrmTjMhevo55N2eTBTQNPjQmTzKfaP1RUVJrwJs2X2uw8kSbAVbQmtpgWn3UxCDq57m58mS",
  "key23": "4vGUyitcAdRpNGMdduVQd6FTazzt9wqwAuQbiedc27Rp36SLiqh4gfofeFZJ1zLjyAEsfoi5YSyaspxiz5WAvJGy",
  "key24": "4bfaiSFKac9cmwAD5ZJ9fSD9cCTookNmknRkYs7KQf5pQ9hykzisqg1wKUHnaAGPMECbYvJaQmz5g9azmhcaNkPm",
  "key25": "58f5oBFjo3i8aKAWWnNNnEZLh393x1tVqWBZy7vG1jpV7iWctqpozSY1AW6qNqYAZkFcuPUsjQu4fhxTAQeiNxDM",
  "key26": "65D7YvLZwR7RB4u5jS6fgu3imMSaj9hm1qhrUKEjwEYz5MAckye7dU6RDxyCYX387Y9wRouqt4S7i1qkCzond3kH",
  "key27": "4wJAQJzgYcmAKjqv6sxJ5fXMv8BmFjV78mZZn7MWarmRmRqzeQJ4tuqmkFJnoSbxt5Ep3cdtiG1TgCbgo8AXFT9c",
  "key28": "41vCG2gGfKpPiiAGcmJ2tLYJNY4bAxKKHNwC4zje9YceYwerd3FAyzz2qwRBJxB2fHGLarjHPYq8ty7H7XEm1HVf",
  "key29": "5Fu8t5WX1xzVuXX62xEdEjyrPiVQGo8CaLFSE7bcsJR8X11iZwRxLvivZV5sv5QP1W8LbqZy4Fe2P4fEZkdUJDUo"
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
