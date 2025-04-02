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
    "2FLfsYpA5wfTNs9ko45K1nx5YLw17u4qwN8RXN79TCWfj3T8F3LiURDsSA4oW1wP1LJDB1UfVsd25Mcs5UJivcWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "513MyyjS8T97o5UDeyPSgJVLyEPj8xUdvkUuXcM7N6HF46WeedDrJaRd4b5Rji5BvhQuY84yAHx7Umm8kyjzkp7J",
  "key1": "2N7pBZi31tkb3FB88tQYD6vfRkkzXwgtnqAqqoGkRP1cT2KGn64HaFU3vBtzoNy4XfdvrrfaMGeRrTk5tigXXCrf",
  "key2": "2EKS1dVzHCqynUnQJ1z2oQGxc4B9Mky8PUMfMhXMSXYSWhdfM7AKFNzMQvjiVprqLpXLDB5Y787ockNi3hcHjSEj",
  "key3": "2UCW7k2VFxxv93cfU2whopCkZsxYG3EShbsV1ho2ZNtGVztRRFGQAewjoFMBz7aszPgrP1HkKnfaUYVBxwKVyyZ9",
  "key4": "5Rwp5TMNYhCW8uEy2nR6ERvGj39BDqeruXg7nCTLNsvMVehaUe94xySuqGLWPPGREK1veLE5cj95ewudi8z1m5Kz",
  "key5": "rykk2XD8yJEWCCWanmvPXAx7Szvr3Vi4XW9r24T5PLbe96yvE4mtz82S37tktE8xRmLHKZiTcnK4DKAjMbn2DwB",
  "key6": "2q8MVbFPesBfs5deaDpwwaXUAQJpjZBxzBCmaoDRKKnAaLFS4MEoZu4Pob8FUryYwPGoLy2ydhp3tGGXdRHwPaCn",
  "key7": "5MF2nTwGVQNPNjGsSxkor2aAAat57S5js1QczHVusPHAgpNkYa3UaFQN1JcXuweXjSqSeMhDLHg36wr5JEPapjn7",
  "key8": "w4R4k5qN7vXmqPwaBfQt3eF9nVjeD1w469aNZiHXZPdCPKtZqtPu1QqMSyTdinHTvybSdQuCut14jMGCYVS8eHi",
  "key9": "2jLtRWEX168ceVBDx9bj3LJz5atFRtjUNw2qFp439Vv2G9dHCRHMAFmPP3KqCtGvTJ6sV85nfoRgkSXsoehUaxT1",
  "key10": "57cVtQuwbpA42TaPMQ8rh3ze4wgoFzWD1XZYWRiCXoftTTk4Kh8msEayyZnQMPbRDuSZZq7gzoCVmF2o7BoJtCRR",
  "key11": "AxbdgchADSPwCChPLctBpXRUJYgLeyNBP7xuaKoGaGSReg36jyD5n28e4Tr9c3ADZKe2is9ipTKntmAq4EYjpg9",
  "key12": "5EBc5mmRPpnrX8EhrWDzyKnPMEzUM43wkTfFgnT2K5NH4i2PwKPPsKFqAWadzcD71ePZwCwTaLUxQPBhF3gkFXJH",
  "key13": "25CTTqPse5iBnKZCXFwNsqpBNXfTg9mqti4dKHfXGBLLXVrC7XciztC8t65bc8XeokAk9cUzmXyk4djeH53mxGPj",
  "key14": "3sPh42y8sLtorwVGkKfSYRmRMBecqqJUTcemwukpfTm3nFPRXJVVnXgbgUnAvqVqj3SED3D3HN8YrawaUWzW137s",
  "key15": "RSR9w2h2QEDsGHmvbT3RoZqNGkxwPQdXbZ3Mqt2exCsXzaScFq2DETVGMF763ukLRx3LtPotASrSGENpientAku",
  "key16": "3sqiDnfBrVbER8Mmycazph6k2DnWBtUbSkRcny84zCZ1Bp51k7xC5Dus4BXCMkgrS52JkqvhKgFNvxn3Xz41fGdc",
  "key17": "5gb6EL9HXqV5BrzSZ5S3akZCoSPT94eumaptaP3EBRqmqHsmGGXZrS74i6HXxgAWayU9efbUZnJhKcJ8LkTb3R3T",
  "key18": "48dAb1uznLiq5s9K1QsRL6GrVTxQa8tZ4riHacY9MoJKfpygbPnH5AtQF4Q8WbFdMg26apQj3pDUW6Xm87hcKM26",
  "key19": "2MgcSMRxoGRqUE2D8s3XpBGjkfWYKyaGRT3HMnPV64zEoNLAdmidvvzRyJELsKQWtZJbdTTdd8zhPBWqeuta3ud1",
  "key20": "gpvZssj289FJRijYfMnswueRtoMzESA7WGeLLXmZ7zDi5G5tcP4TJVG61pK9fjAdiR7SG28jiobT4fGqH9nVNyH",
  "key21": "2VnN7Geprxz22WSJM5mrEhgHNBLQmb2kYEmkKReXjg7EdiJVpkdsu9zvVfZ2utbyQ2Y6sMXWkxfsK66PQRtJWt5a",
  "key22": "5mKyxbB3tyTEcNfKJeAJWMVM7ppvq1179szNAvJpHfz8xnEuvPYiSKFpqVU7HMgjeLntUr3C4ArzSYgbhGz3dgXQ",
  "key23": "41BtWNgzTFsvp5YSSmT7TRS6FPi49m7kSt5zD3BnvywYYFz76iTKMzFjS144fnedqs3uVXTCs7QywaQ4gcWeWV48",
  "key24": "3VF1mJQkX9Hao3seAu1nuGzxhB7i31eCyHdUZ9UQjg7tj5z5ZeC96uSQd4iDgBuyx3JpyqbeuzFL67CWTpKTJK8y",
  "key25": "2gAksiZhTuwTiFLWq6pUYXC7esC2UsvegSPHtz379K3Qa9uziMk1JzoHKgKX9fvzvNt1xZp7fsukN8vPbVr5SCum",
  "key26": "27AQfKwWYvwagr6SHfXwWBj7z2D1Bve6T3F8bYjsLzcp983iR3ZFyCRubzXTtHVzH2VgCvCWZBK8RU4FgCJFExo6",
  "key27": "4LQEKE5q33iG9AvJkNnz1rf7P1k8bVWreNsJHMexjTeU9Apa9GhC3XCyVnrsXmSdK4F5LjKfi62EH7keL9Rt6R7M",
  "key28": "6HGPNkfmGSiTfcCsv32NTXoj5HdnVdxWzaBxdKBFmSSrmE7AarNyctTTK6tmhR7KCKdKK5Zko24ygSkKubqHPBP",
  "key29": "UrkhXEpH7Dqfhu6zgm2NV5VSqv6DyqoXcMFapJqMzM9NWKojvGPMjAsnbztwrC9urtQHph5JXzc3BVcYdxWKa82",
  "key30": "3tC7d9RBBQxvtS3jxZ4BRWwJyUamrQRiAZWmUbAxaA2jXrnS1sHxYGf5fRzSaTCzmRQBgcy1hp9WEBWitL42QSPe"
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
