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
    "2MNAWDcKxQwRAxRnvyGkoMixGfJ6UVWmWRJBAu3rX9tpeRNDnhFATiCEKG5iVwPVxW8Z5BszFP5aG3Zwg8GLWPjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Saa5QjLH77kMiZhsR1sA3PqCfd9iVEXs6MELSsaJFVxUjypokZBSmpRgiMAc3WTUdAVkNwJxZULqRBDZ5iryZXn",
  "key1": "2KohgAzEJ1HLoKP4rLVpo9uC8C98AJyaf8C5khEQT2vavyvRRcHytrAs7VDopvDPEybu3Go8zzAvCbEJZUD1X3yd",
  "key2": "3WxpcfMiimGrTBGrdLJY27ZxnDP1EWbesBKa27ihpUQQKU946JEFEx3hGaQ1DVJgUkzkVXivsrAXakxZ8o5xiiac",
  "key3": "4GoSwmAKKSx8Btj91J7bbxnGiFnb9N82bpXmrPetotpHBvw2hfBFQH4GuNBjQXCgX1zgLGsQD9BUeXCA8YJ1CRy8",
  "key4": "4oghd8bPHRk54kJ6fBra9LrFNKGFkDdMo3g1UcJXwA2EtzsM1uii8H1z56KTJbRcfbRwp8DNtTmEuAgRuesbFjzo",
  "key5": "o3KACEgTVUTAQqF2Z2TgmY8EdK5AeuLkeHQ2aNndCoCvnZGP4WYd18jsjmPuqfN5geV7YzXBhgNF4sSdGTy7w4o",
  "key6": "49XhAtUdmNLByh5QfnTEJwtd5fFiaimnC6pdSPtDcTPTpzzEX2mYbDMagPBc4t1tJWKW4vWQGD5KVhS6MLiK1L8Y",
  "key7": "39ceBUhruXVeebsdfJmocTvhJDNrh8bKxL1zoYNZLR5Pvqa2whNQTCM2GnosBS8BTxh1mLNMXhqtRACEFHcVxgrc",
  "key8": "3ynKj6NmXNvoC2h3eXm5Q6tHWRK97fihAdohZww9q8YbpE2XoWztBGQZKj8jmHqL6m922twAZ8DuXbC5DXwp6jEE",
  "key9": "5yj6oD3ZkwEY2wTA24roMYhFzQfH4WczE34bgKfnKcWW3D9GNoNepQh3jvxBsWzcMbMrjFCm7hqu29rNcHuBEsqf",
  "key10": "NRsHDxCzUucVVLcQK9kSNczh93kS9HfeWTLv4mVPjbdKcHu21a9fMxap4tt7dghLWKhHQ27jkipwEuQgsxss7dq",
  "key11": "32KeCLbJRdBnHT4ms6vNC6RPi5V8PyBNquwfrTdBBQnbuFK2238aQgmVEMK85fWBW7cJet9Pq6PVvyLFdHZXayPH",
  "key12": "bJ4qHPViu4LfXZP1PEdRGwWmG6n8Lvv9ANcPXJmTeK2KgVoeyf2DzFJveCqDGHMbEit7yZE3TeqXYNE1SArWwBo",
  "key13": "3gaYhFgiBppusLwzFF7W3rZhnRrK6PQhQobXifjVnSLZfNVjwMKiAJBsMPv3Vu39kvHYpaaaVdyjCgn4vCkuy1rV",
  "key14": "2bSPaPbC7Eetcd5bZJzGpYzUap2y5aH2ccqLZAYH5TAGsFSzuUk83jC7qe5dpYN2g8dHHMpLnrTZihWCDGe8Dnsa",
  "key15": "28fti54qskzPGEcY6y9dCJcNEduspFsp72aXfcSeE2L1Z3kKyiy3XV3J8hMrmtbLQBo9LX6UFnygpzscQFihhYS6",
  "key16": "3R735wS4jVSiYfdwkGbe8X2Rau998xLUbHsY7hVzgAXdyeF3hy1p3XUx9pyTSK5L7GukBfYFYv4E2pWza6ev6pJb",
  "key17": "2SWCGB72FJD7Nw4YNGuJNFjx8ZobBRKJXY5iTJX37WvKie9PSqUeiir4zCeA4AKeiWGVevUXXMgTBqQFvGsmzmTc",
  "key18": "4Sig1dnpN2gF5YDqhKeAc83BQztNARCuofAbpuRsqzhnTpE1mJrTu68rnBqPEqvCuC78pRXUw7yVaRSfE7jZ8D1P",
  "key19": "5nZo7JQy34fzHTRgMuphb29AnszP3Vdt23v9p7pQVV8SLKQU7TKnheDXmCY6W5ggLgqTacDhjP3BJh9A9yY54tL2",
  "key20": "wjefDmCQ9GnrhxHeQ4ysBDgMLdqhi1V5wKjuMpuwxP7MigVP8tGhcfWzh4vk4FX1jGetR4GU3Nz53e4UMW32xGH",
  "key21": "2Tu4vX9RSwZ5yPHQBNCPuc5acqbhdVCU8oLE3Xt7smVGV4KuDFyBFQ2qG2K9wHE6ZPYch7Y3UrYSbYmnbkoBJEBR",
  "key22": "x4EkPGo1ecWU2p1PnxZV7TcYGDr47dLXM6w4fQgHVHaGmUUYdRTRzZYgcsRPuhfb3wQtHUztXKTWZjXmc8rAMqZ",
  "key23": "3xCEHGweUGgCsSBRMMrLLzWbvr1BLxfbFDkDdxdcegU9Hk6Gsoo7Qs7nHeexYCkqUKApV75pMXC7QidRqjn5XXNW",
  "key24": "4Acc9v5t3VToW5yH237ZsZotqhGkS9PDKNP1w3zwKR6wzoFFBA3WbAZXjsZnhZ3ZkGJnAakNFNAzqSEXM8PC7UAK"
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
