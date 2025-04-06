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
    "wfMWq8SHVk7mVXuGmvNyGnNs5JBjaUqHsQ4pcL3eeuY8C5WV65qQa8N6QjXzEES5cTRsURPvKosiNGQGTqxE3GU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "598DPqbQ2LEKR8Mp7QR4LgrdHsE1UStpAhawphfRMZj6gUoaqfdKaVxZSYNsTh5eJdd6CXSHZdkaUZqoPEZJEfJK",
  "key1": "34gCyHWAWMZVPa4mRfFkh5rJdQNHKBLvqS491hG4nW3DN46EUsGzdMZvCeQm5KosAaRu86SEmSRrsGQCJQSDzYqZ",
  "key2": "4m7kM8rPHhAdc2cbZftnEWkDpRaCDWvXxsyzRv8yoSPUVCoKDvWr8aGk6S3swVttaB1ccuv3JuWnpNAj6j3HQLh7",
  "key3": "29wAjrC4VJ8YcPfo8SBmMcrBejV9XyL3hKYGhxD1rV4tgEj9DobVCKCcZ4P25wETCL2GjoLvCaXMWHPej6LPhUWW",
  "key4": "2bWZRXjLbugGkKXbzdThBCtdK4SKzXU1ru5tAdGdNUNJpNz9dRzi3WknXZh3uDmJ6TzsnnmqUsi7PqwzD94Vpaxu",
  "key5": "2jfYYRmqpC5paAgzz7rLwqXPaYke5SkwnHWTnQonewuQE4zJgSgEr3uSzDb8ZhvuSfXqXUzL1UCh864sDEdY6fLE",
  "key6": "5ynGYT34ecP1fTx9vXPSfu3RdTxoyJhtJ76GdCoeUUyPVhw7CXikrxaHZSUVH2suNSq6V3jHzLPz5d2RnWMajBBs",
  "key7": "2bQUMQMzoQQN3RvfZmM374EERuySV97J76y84vfBpDoPYrNzsZFnvU3M2PQo9ECAY6bbUwNM5svayGeX7XDpWQsf",
  "key8": "WHXy3oHtM9enWov8yN4YahbNhAn68MAzJz6Khu4wdoz7KbYPydtWrqJ1PqCEdyNYNAKNTTGzSqcaDsYgXPZh2Ee",
  "key9": "smNYgkHN2TKz3V7pxaurjToWEuXyTvqGZdNvdod5rQnp9oVEomEn2tV5eEeKy4BDaQx1EMuEzYPSC8fKYBsMnvf",
  "key10": "41mDHENFwHvfEwopk7z1WFMnsz1NdUmP4RKq7s8ZyyhexyTbnNPauUjpadshsmBMFWb2AiWhmj8BEGBeiyyC3mKx",
  "key11": "xE4pynZ8jtyMxQxYHBgUBRppJMougo8H42AW2Fv4YgBfWH9AWxXBu5eFWC8xdAKESXnPFKe4JH82aQoX6d36Cgg",
  "key12": "qgFjgkEb9P873SfknX62S1bZAJsS8dMWcUvEyU6KkegtYDxdMFbzk3Qr267HayEa8uLkUmqcq4nwrtR1DMpoByo",
  "key13": "5MUJ7xiugc6VL1uSUMJex4y4Zjpm9hxZ3b9ZzxrrxZQ4SD3cuo33cQZt2HnvgKLBaSDzhtPkPEhVA9C2xgYsbdoV",
  "key14": "55R7w9HqqfRc5x8FJHrvLFQ3o6Ro9H7XeoTywQVi1ZUsLwdF53nXmA8qRihibQw8YjQtsWoCV27nZ7jPBaJ6ubDx",
  "key15": "5iwBosJeZsshdekbQC7bBKpAwVpVvvx9kbogFu3gMTzY3Sa279T86ut4UhhGTZWQbuK8ygpsLEMERRiXj9uQhtkL",
  "key16": "7cMEgY7x4wPLDgEWcqb68uPBtJ7SQF2PejhyCeA2eVPxbHW28s1UpcRsxACjiqsz1isdVx5hsFisFTHgLZTXYP3",
  "key17": "4xcKesfma7md4nYkxMkhyGRNvWx7vgFeBQuLkuycjw3x2kvqKFyztr738tdxjm3VtPnZeftox8nFVgeSEm7TUgn9",
  "key18": "4ZEt5iH4bSpHVHmhXGewj55p4YhAsNi3WSMWMvSZboiJLzFALzAqQVdyLUtE8f2wMvFx3YeN5HrTo1zvJbATgsji",
  "key19": "43xtUSEq96BducBipcTPSCV1MYS9UFsmnPRdZGmacQEkoVDwBgY9NyS1DfaP5bL4WPTBcbDVeU1yEb5gcTbokAeH",
  "key20": "sbZMAms8kWfQrpSEH69KvPuTegQCNMR3DkH1zkdN4E7GCaT9qK3s52tJaBm5Hou9jt81coXxwaqxwL2nntD6kJU",
  "key21": "5YU3od4mHXezKrmZdycUvBFQ5ehLVJqjd9K4KrVDp6yzQKEoiT7dE4Hfzj7mdYDVGSSwVug7fm5sLSftNJQpAhXP",
  "key22": "4mqHCtFPaCcSScfgWx2gGKjuLMrGmPyDp9gC8Tj3oPTXP6jAorvMdrJbnfqAUHB8z25PVYR4DHY546yc84Zt1G1u",
  "key23": "pE1mpZoPPNKkDKqRsANXPDuUF68kyhudCJvJMW4jimhiCKF2CD8eyV7Nt7zDtcthXGy3A8ZAkkNa753968LMQ1o",
  "key24": "5zxKoX3zyCcUaJQDVjuezJNZvSZsLcG3ToXqC82xivcvWG6XL31YkU4nLnqZiXy2mwcdBVSnmaXTheVLMisjBxYo",
  "key25": "5bgK6pPSfKXGm6jLHd3kiE1yEy7t6jrVwpJPpV42YhKdVfx2tFyvRWPfVJ1XP8fMZbYTwjzndFkjWfmYXLEjY6Cu",
  "key26": "4cGNtGLQpK6LyXnLsCiPJJZWxkwPMc5XGTr1ZRkiGYFwfg1naHurKZZNrNUTp7be7d4k3dxRDN1JCtAXr9ge173z",
  "key27": "4UFWbm5REzqVzpBjXxdKY4Mnn6AuYD41JhCrgb2q2QgykBfADwf8AK4eqqAZaPwuFdtdmmqTxZLv9to9A9v3Pira",
  "key28": "3ywzx1fZRttmYMpF9WqMoF6jNf5TsWnUqYkthNTEVXtzScwrq5L98CawmN4qJNrCvNxY1BBYDMoEfzPtD2Nd18yq",
  "key29": "3XLT996o9HVAfRREW6cDzt3mRgvo7EKGZgz4QxUAriwrunZwVw9isJ6wYSM9rgr4BGYn6hQSSS8fSKcUtCdEDLF4",
  "key30": "2p2AVs1a7JADjhneFrDzJKPcquG5xLgc9UxBaVdZY2ePEkBrEa7Y939hK8ohFYhpzx3Ctna9jBi2wPgXWFkadpHf",
  "key31": "2vtxHNdmCmas9bBetpj71G4cW13SYQpc73HCD3RAx6HKUdwXa8oWbu8F4LqvKD2MoebHaAgLSQdzz5uPTXqP2k1V",
  "key32": "4nqaaDZrZ2HrjZNd8fRSFFoHQ6CqPJWe2Zxy9sgrqzhDDdQ3bG71Pw5p8omaYdcyJq5dHTDFoSCK4VAJLPbsKzUi",
  "key33": "moreSPi271Ch1RFku1FN4E7NLFkSyAHca2SXFAuABFZaYZZXnL1dHxSmxk2HzMH9hdryfPMwvrxreZBgUUKjnk6",
  "key34": "2w9QJLEA4U6zMLqqUvx5yekmFeDqewPZbN5icAaBjRKnUETpaNf9AU7B6rRU8T4nE7PK8BHBi3X2KK4LW67cuG1P"
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
