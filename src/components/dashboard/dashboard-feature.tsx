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
    "aZNBCLg1j5esuUnoCHHwP6UQUdMJNSV6njm9FACtQ1QZW5CAAAWdW5qw3fDm5nyagRg6Xa1bJVv4g5FoRsbRaN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JTLpmAHG2JwhoBYWFo4StfZ54X5rtedH4P5tgK8GKWjCLsZiXX2ZYJ7yZG7KN4PYxJtTprkk5749KabBXgeSp5y",
  "key1": "5yqSFPpWuZaWk4dhJxoP67HVi5CpPqBjhrsskXSvpPUC6RH45FckRPy939eM97eTMxE5SChS9mmNuXYc4M4wXtrk",
  "key2": "2oUkBBzZDsdq8GF6oHGYavNfQbffNGRD4RV4DKP7HE7t5jvV3ti7JjpjXNATgyP4a4BXkEYzCs5FgFzEixxrQc4L",
  "key3": "2vDdTwh3v8JuPsWnvcm3DtmkgJWBpyqfQt3qJK3VHBy3MPJ6GSRWLW1yZGNp6pLE9uYDwrnTuZEPwshtSpW7nNiq",
  "key4": "vwWKVpLcsBBj86YZP9bS4MoG1yTtwCgmGwMLGDr7tHEh5CUkTVBv8aY6VDqigAHscVmziLoh4ScA4KLJmg6yBgz",
  "key5": "2uva4SqxzjwEW9wSrAAW6AWyPmgopeMyxs6AWorCzkqqVLqk6LhLJGsRmEza9QGqDuR4Ure39tzNFm8oHk1uX1Hd",
  "key6": "572EA18yBiRfZagiFT6vx5Y5iRYFX7oGcHnmtWQxFXYpbir2h5wnKZpxJeFahavRJDmVvMyjHMctJDVqLqpYncq3",
  "key7": "CfMpCbTzY1tLSJoWbsr6kfEwyTVPpwFQzuRTLvrKnMZu8u1horpPcriCWBYyYuscf4ttMezBDkVKqHrBvMKV4PE",
  "key8": "4wGpNs4QdF2AMW8o1UTZZQGe4unfgQYNDevoBuuHQn7MrTeKfGFimRqK7mudwRb8WxXKMotyLFNfMCesKkpt3ExM",
  "key9": "328fFXDEB4u5Kek1dDdw4UaA5QLvGxhcPRwzrYTHsxCVAPfW4M94YTGnQjUvPX5qx6xwS8WwKMNQ4PxsMpNWgiWk",
  "key10": "3kiw9tqb2rP6R2dnBvWQEi9vjkSHi1fFQzBzfz32KDaeyxeh3ui1VNgmkbMcLpu9rc5UrtmnwbL2D3nbtKvXgY7Q",
  "key11": "2Z1ypKBPeB7RDKYh51ubuj6tVFjgwfX8cZhZCwgodVe3BkQRxLsb1RqexXpnbK473X2TVkHdTFeNJT4Cp1iP9974",
  "key12": "5obhTBxp5ZeVJUxEMoTDnRyJWFj5D5NDJWXAbFYMy6ASHX9i5HqoHw3QJD9ycbLeMzQYmM7hNPQbEJrUG38f2Jdo",
  "key13": "5DVL1dxds5Jr1nnWxruCCLSZDXgctYBaELF4ZiUY4j92Z5rWU4eeufr7KjtoGBjbSHFRC8r6LUm5A8QeQ7jb7dEz",
  "key14": "47EWrxp4jnHhSNNi8cjBcmcHUh5Biu8qi4EKNkUT15FDNVbeRkhcFiYdpua7nYGYxja18qwJj32nRze88rF3RLYX",
  "key15": "3o9dchkVUpUh5Wa848yRpuNReJEufacoXsneS25tGJEmJnT1ntKgzK6rCf12UAs5791fNpgZegBjum8BCGAQXMho",
  "key16": "3QRyiM1YFhtZFTJLxjMRthBPE9n3aW3VLDo6CWqNBGJxstvjn8EpA8drcC862mLhDVW26xDWGvQasGGfs47GxodU",
  "key17": "2o7ftKWS4x7qN24p1q15jPAj9EbTAf2sDRLF5aRLnEm98BS429amohWRK4DioSEETCHUiSzN5Gxr3ajtbrkGtWXq",
  "key18": "47JKfcK8MLzuF8m8aLJHKdmLdEHF7B7oiEqsi74C34rh7KPTRMrWbVtcUQPpbdcv8dCfec6YSvr7CcQtieGEgKRa",
  "key19": "5LhoyN6dTkzD39YcBLeQXeHqZWUqrceGXLbckvBA8NcqWo4ZnXMGXDLNqA7x4j2V6fh3jfy4HEuaBfTjVcHmEZcH",
  "key20": "4sMrv7ZtQEUGYdPFpWQ38E8brYxocp26tmE2mbwkXJEXiRCNrB8td8TQ8TiYCpewaX9c4ynQJzVb7rBY5J9NgcZy",
  "key21": "HnN3UhbtH7MFWX27Mj6ttFRpUU1bhXBAcdBzrUgRtbZWbi37az23XX4zF5JxPnjBe7sgCX9JiHQfEG3MBtNNW1u",
  "key22": "2gLzsHb2EpBr8DKrURiLd2t2Qoj3fcrqLp6voguRxTTTwbS3c9ufNCWe3a4drvgK2e4NnsZLZ161VtvnAKocBnQn",
  "key23": "3KAfib4zsNQZVXmFTN2CfFvQezbFLt2vF943LgsTNBKfwg5e1douAjKxd8FSZoorRvtUAdrFPy8UA1L1WuNK7XAX",
  "key24": "5gvGBqeMK7BF98ccd68XU2KVW6zGJijr9SGDT3qf6B3Jg5wx8pM1xxCcxeGNBcmvkwF6hiw2n5M9516zTJHHLegw",
  "key25": "AAyAANk5YxfesmN3K2ajVp21M5QPDhXDMMcKbLyQ1kY4NwwRWzcFyi1o5ecRBw6uqRZbiS2TQSbWHwwmrQDNp1M",
  "key26": "5H9oNf43W6So6w4KnZds66vWpzP3ZQ28iJ2wxACz41zFhKc8WJGygVyVhnSpAPDqENzRpaz4jjkSrkzBktoB2QD1",
  "key27": "2i73FUvz2zacB5rpDQ2cKzsqW5qhYmStCJtxizuZkavCgJW7mos8JBaxZHQzpJ5J1uSUTZ34fhWkkdVDXAitbYrG"
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
