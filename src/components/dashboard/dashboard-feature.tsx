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
    "2sh1QFrPW9M1g4JNcoMzvFuwRdG2DA3zEtWahPTCDkcp8jka13fGxRNKunE6urksieNiFQ1yrAxPDxMYL2S9acrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HhHWAeizY1mxKpvSjeyZQDrBjyFJixCGBbhF7j7EddeTJhjn92xVjy5kacR7VuidpLHzrGL8PNocCCNZaSxUjBU",
  "key1": "4ZKMka27XE1uwA1Pk81x5QJBMzjh4UZdaZiLUUcETg4Qx8rny4vGUz5EKZejJgNaZaFPn6BNRidoVZAJ8vRkdWXa",
  "key2": "4inaxUQ1Kzv5CqpS1Rit15kAjGS6V49QckQBjbwfJZefTvWNt2KX4zZEuDzi3XYWoqf4hJVZhiH3CcFhZaor2GiA",
  "key3": "5At4PWmGFx5YiU7D58s5mexErDBVEV9LVfAGQKo9M5t1tHSvkg9vi7gJ7zjtzV1XQCuHj5TMZCgqshhHcstEwYP",
  "key4": "39aAua5z5fkNLuPNg8c1ia4Bub1DEcSv6D55JrpktbTs3VuFPtPU32J41C96joFbEYDC8bjW5jEuK6ysPK6Wsd4t",
  "key5": "26x9AixKEqHXF17DaNYSPZUkWonKZMKsFSVQFwpWZc9p4ou5AtY7LuHRSoFNXW2n52fcQnzfWxCCJS7r3e1iq5ZG",
  "key6": "E4dSvoM5qGTK69xBK226JCNfuFikqTDyPQ8qtXnCXYT8YhGEhww2acoJs3DoE5Q4WkGwEa7QbpXNx7ALDU9JuxP",
  "key7": "4dpZs9H9Gq3cpzNRxtSezv15C7iw2tQ995CiftFisA2oPAW6CWrD52H1B2XjXZDmTtVNHh5ZAn7AA3kPFkyVT6QJ",
  "key8": "5RDujyyA6eba3fkzGz2RZqRuJCksravkeCsEkWa3g2xbqsuNBwa6ntwXkeHq6FnD756fksgqKLwdFVWQEG2hGGWC",
  "key9": "2TUMz15a7aUK184AMDByj5YdgHgxpx58Pv94bD2juppr39tWZ9fCBTtj86xrEepaPSUkUwQRAJNcr9EFas4vqNhu",
  "key10": "38XvELS9dEWnhKwLicAqHZEZycj82HwHzVHxGCqv84BRDtg3BZmFynoD3i2hZaxaJbdiUQqy66s2Hwcv4fwAxQDt",
  "key11": "5xp4QbuGkMDvw7sgRCJyPmRgjE4iyi2sUdtRWSmxbTDBgKfhGJqih6zcb5t7aKL42Xt8LM98cffgYBpi6Ub2kEgH",
  "key12": "34YMuLVXndykhnS8cuBh4b9vY3nVhWLKkRQPjzStJeJrPALG58hUkY6aVaxSfX4XyqujVr5puYC24L3hGb3nXnBX",
  "key13": "5FYQjNP67ChP8yn3CKLgNWfKfxn3QKeqFBdysPAKqzKc6nyTN48ft1V7kx38DLByh9mZRZfL4mGorNTzeTXATrFP",
  "key14": "4NxgwSYgheRGLRTLVY5VLans3G9vLrcgtRubr6sgBzvMrvBRQobDrabw15RE3p4KwTBft2pfwQfBiogdvWo6AHpr",
  "key15": "56tLX3xXeRZY9iLx9bvSxTZ1JbWZQ7D7hwJgcXqa8HorgVLvwv2XPsLpY45WYTN1VY8minSsbsiR9AtEnAYcaiMb",
  "key16": "4eGytkw1h7PV4VLCZNrj8XkftzLCUHb2j2m5E23jqJb7yYciJT7jvd6hcRqFC947tRpkZFRTdKnM2TWqQcgQp42M",
  "key17": "38CBD7keHoNVdBaJDdWxYKEmJx8dL4uetetRrfKxnPhokoERkY9pzKF4a1hVcFoFakJ8N2YNtGokN9TkXTgCtJQq",
  "key18": "5qnE78oEtDb6k1y6TZmZcVCSqZ9ibk6AJRm2WwTTaDL4zovfU9mmQtBJ9oL8BT1vZNkG9LiAonBi7VBwea1ix3pD",
  "key19": "2uL8BNayMafTAcTrhKJnsE26JUUWLnrmY2zGQpUjnnaXxkyHnfAK5VMR45j3eJTFGNK9yHVFZectAs2J61dmurqF",
  "key20": "3Q1hrJq8n1gppRrJchw1Tuj6FHgAN2UJnUmYEu3rCD4D9q5MkXjWBJdBuFDM3k215LvAqtG6EZW96WoTdiQmnAbS",
  "key21": "4GZ2AqiNBVH7zsCngTwSZN3i5Xbu2UmctkuVJZ8umpqcLU3L5GYwd4EkUp19sRdReLn9yGe85JBfW624fZcxqgum",
  "key22": "ZftignVDsopXvwfuCuiA49Ag2y7rHKGbqJg3iPfoCJJ4XhfzNsnqrJBefixFR6JRi8qK524N3dnnrDoZdcrQZNm",
  "key23": "2Pz7ucA785aoB9dnHEEwwCnyL6a6UjNScGxNfsc3aHL2kPrAj1pCceh7ZW5jDNjJBotQovMoxRdVrwLivFm7NvX9",
  "key24": "48vafdEFGAT8P4ETqCvTn2XR7CCNiaWzz7TBJkKMzfo46DksDoRR7BT7CVrmuLUXgvYQ9RXcAqNPU8jZhrYZC4Zs",
  "key25": "2BR11rdELtxzNr8uE5p45TWWrHsDQ3taEHEGNDTKcjHSnYoYyiXv1epRuR33hsXJDM7UcMqst9W5gU3WwAzu2YRW",
  "key26": "4RFcaNeDQ4KoZ1bwsyhuCH4J7mfG4cB3cW2piPkTA9YEFifXJeWassXBx723qUGwGVRzvuNKZPJPjMkDKRCSDusc",
  "key27": "5SoM2Sw1HQ5K5GXi2SPvgUugaChWadM2AorxZ1EoXud5Red4TA5WsxnhedctjVD9f86aaQeRtrTA9sSqpMmNXmgN",
  "key28": "2wkyDg4G5zBbtMRuFzMXCeDujXirALEhwhpjcTJY3FEc7CX8QDyV498mwW6qKKoYDTFQThK4P3yizqLNuuV6hpzf",
  "key29": "4q8K8tdoRzVnxWd6pz94FFyCTf9gfKcbJJEu16B2rwgcjFRJ8QE7a61BiACPpLvcBp48J1kDJ7nNecCnBYKGSovp",
  "key30": "3ovjnxM2oe7rtmT32V7uZGqEtoQF5zpEEn1r7eJDYvApp5s3hKDGxTuA1gyzraJdhEZEPXkTJCtJMKvZXMuuTgRS",
  "key31": "4sakPN7o1ovpoe8Yacvxy68P5PJCQBtLL3HMoptpkLR3pb8MdANGVCJZyF7Nt1uRz7dakBPUp7jC3eEjcWhKNKme",
  "key32": "2rtv5Nf9qMBD1MjJwnLKQJJV1bjzpPsWPMr999aQdye2AqqCrBz8XnjKecMgb3HeLERGSpCqVCW4GRw7uX6n82Te",
  "key33": "59siGGmSSVMcjaonxCC9s7BXpfqb9BkJwUYFc3cvUfzzFHe7cUnqjj586TfenSq8NhBaqkqFv8LmALRgfLGjmC8j",
  "key34": "2SQZSuhMAByJcRBkfcF21L3jyACMjbuGXxoyZDCZTU1HxvQ7ovyH58m13EvhJ8xJDc1VaKtGKPRSicXao3SkvRCo",
  "key35": "3tjPuPA8yoZY3uSBPosjGyVvmsdwDwfcq6QxGkZoP1SwQ6Xb5WXvThqDCaEkk69y6bzfE1ZGHQw68rW2ZN116DWe",
  "key36": "YdGFrf6NCBxC6dMfr9XdDG2S5tKdrcBq9NFKpmwLR45fjmdE7JiKwqb5PjYUHY72GTpm5BSHDF6vLpeAv9t1vD2"
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
