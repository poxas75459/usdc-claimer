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
    "3A6zzUjoqao6SG3BsCVog5wTi5zHwjHyvcQYWKpPgZt2mWWkoxCNhR45JnC4gZQU8JM3NyARtythEznbiX514h8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TJycpBf4CTJFMjSewe3dt7TKrZZ61QEL4PYY2HxYSMQdKm2JBXRZDkRLbFhVZJtQrs4A3iJMnNZYGrqx45nLsC9",
  "key1": "rq8rPhLpzfCHDqfornpDbhuR8E6XsgxPx96QqZkgCzh3mpU9EV7fAwvnojM2XdBbLBEVH6Tp6AUF3YGfxuzVcFq",
  "key2": "5AeECAUByPGSaERCwFn1Tf9pj9BPKAV7ExiLENhMisffzA2pqFzFkZQtXGftBYjpR1MAmFVKhTBeFh5yv27y2sWJ",
  "key3": "5E6xgjdk1kSvPkvuSetjdZKZq3LMBSgqe82PJU52hGLcAydp8EJ5Y11TGuj6LHTHSTsE1sM9N4oJCDCBBSgEsFsf",
  "key4": "5vpkp7w1wbGftmCbCDzX7CJTa5wCzX6Z9XxrLgt8L1ppnT56Mzj436c1aVhkMxj5aHmT4YrLgEEoyg96DKSMNiCG",
  "key5": "3k7b54MUwTYcM7fMA4CWKQKkWk1ewRPGUgydMuYLSccWLEwRRx2HRUvacMXaymnixLVh2Si2gYNPiB4Xad992Q5Z",
  "key6": "4pqMqPmgBBGFAuPu2S9jdgEQrkU7NBDmHPsSijipstxbsCyWcgJHjPmMMsZM2vc2m5qRMY8EkoMG5BFmXTRqfifA",
  "key7": "3EPXwhAnBw6RVtMbGnuJHxsXUS6h1g1B4Zt2nv8FY6tNMYCbygwmccfLEtoPEyx3Y2mZjus5Tuvtv3NzcKY9dz7H",
  "key8": "uscsi2GaMbNaZpPUNDo1vUU2upQbKQhpGVLzpB4w6X1JmE8VH8teJfptYoLyHVnG2gMGEnaGmU9JULNNP1x3jjq",
  "key9": "4GjwTLSHZsUUw1ZmL3YKus5QFmMhwwqu8cprBmuUTuzbRmQrer3dVtMrUYKsRkEyu1q6xa6owrpQVjegxSmBoa5z",
  "key10": "3wVcGd3C2R5VjtAEG7v1dBLhojUskXizySUQuks5x6svmgSSwssBNSvmnTWFV9iaJQrKrRotaFCPfEcaRJJqPa4w",
  "key11": "4Ti11vt58FYWModzdhdPgizVRbfdKAa6RLgEK2jQBUtas9TUfQUi5EL8w9yZb4FxcqpR1LDdF1tMBxzRniYyfmYn",
  "key12": "31CqQHzMBw8f796LfB2BTRaiDowTr6GYxeFgt3PZ6Q2ShsNWnx7ZDe1UH7A1TsHzJqTSSiPywhSueNnG6PbfSGzY",
  "key13": "3mjy5mJfendok3aYvgkSPejgEa7BwPkqcE9CVorxE1R8qCMxCn3GgFwbGaUpBQo9sDn98diayAyh7iAn7hhYNNKM",
  "key14": "5Y7urfm1ZzY6ud6erZSRwUdS8WVCgBj1vhBKkuSyEs2Z4d52rXd49jQ67469QDtZd2NM8vhkrv9xYfgrcwj4Kb9S",
  "key15": "2oAmLZXuvusgxo2EDE79opBxTgZW2MLeVLWkZCwXszoZjysZzL8Nnwt8eqM9qhBPH2rS6j5izK9oghKV7DFFkuVk",
  "key16": "5Wd4bprU8owqeAThjYWyJ28eRF32QYy7rhxcD8Z9yvPdNB91wSERzpbQ4cz1iW5jhtVbgEd8qb2getTY5XGFpNpF",
  "key17": "4wFXGdpeabL6nb8o8nQBWA6wzRB1ynjHgAUh9WJ7C7WD1LBScMkyerchetUYNgiCA7pSFdXtvH4UZVQCD6YbFapP",
  "key18": "3ScV9D3vHqWnme8pARqGEpXbS2vrep9MJQqj5HqGX2NovNLcMcKNbdoebJTESwDSvVVxXXLJcr3Vw2NNnAasswha",
  "key19": "4k5wvnqt6F8KFfGeBu4PfeoMPbB63qKETPq53QrfK57DhAhWLYdHLuEHHThp77hRLREmqjvpuKAZJrkHPf8eQha6",
  "key20": "4nXY7YzXFQtiMqMppgDyuuvnFsvxDJ1CLRFGf8ihBMwVhVbyGghhEUfAQobNUn5fH1fj3nRwgTWSNegKqiS8bmqg",
  "key21": "4eobyCMrRjG9sR4eVb4DspfXjCSq1TNweE1jUsw7VJZ9gtZMBAZBp1d62oVQccc5hWe62iYkku5yzzSw4vfvEkVk",
  "key22": "4EjxhxPX4S5B1uNVksFZ5NcPubm58AH1Qf9RZnzYyQ9oAE4Pqruwv2GM7LRTcvJUbbiQTb1FQKr8qYjZ8dokE1pP",
  "key23": "4ZVGJFgEzb9pTnpv6c52G15DgeDrKaifkqJ28gERozF7f8dFKJnLVrE3m98v9fxu4Dx6mJsfmdrfwKimz3PoAnRn",
  "key24": "2mupuuPC1zwuBsGz223SPriAMTQ2KFhXJpY9uh8qk2RQFqfFLK6i8RLU6awphJFhr2mGcGYw4ZUkZTvwgK8j7isF",
  "key25": "HFcHhoy8U4AAMDYrdEPFcVNsspPyZbzsLCs8sUdhyUTm6NBrHSanVWubk7Bamx2G9k4KHMEdkwuSAKXFEi9q2dK",
  "key26": "34UuMLhsc1WfuNrZhR8hWW7gwJbLhxBJceqH1Rz4Z2quRPduKxxe5Y3do4DU3vrpEK1VdjiPg8m8FZ7GgmR1XJk7"
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
