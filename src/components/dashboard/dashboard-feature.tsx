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
    "3yrHkFvGBXZoZw9aJqGzXyy97aCJtPWHxXfgzB3nrjQSqDHUjayAj37GKP7K3driZbgqSrQheVmi83aeFWwvQ6Kj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "juAT87t9MVQuU9eHTyUUf952U2D1fmW2YmCkyQH57EPbEbHpnVc3JEp1Do9c5BZGEW1VBWynRXDFQTbqjqWLeDX",
  "key1": "2eMyeeYtUqgHpT5Bi2J88dNzACoZG1QVyPjA6LjJg5xfJ6RH4rkZLoeHHjz57nVaECLdCCWwV5Heb2JbLEunHaiT",
  "key2": "3fvhcZTUCZ6ZkDXdFE8GJYi9ZMZgKywkTVfaCxS6vJ38i3Lt8GoKNK1DtNjXTb7huQyW9C4PLidEr3mV9tebconB",
  "key3": "5K6ZWydTXT2sPwQA8YiEggYRb6kS6nufkUUCeHTGsr2LFnEBB6LoB87u3yGUHaRFsjL96QUoEMxNtnBtQShWSBB4",
  "key4": "4XNdXpMdUtmGbBfBkBYnRW67wEiAYaFQcka3ek9eYkEe4DJzMAHhf4sTye2HPG1v9krres1h8JMRZP9sSmF2KGkk",
  "key5": "53bwk9qbFGQnRqPwwHN52ZHBVK4BrVxLVr1PS8saqFmuVLcuX3jAKFy8R7DPtqAn5MsQCVQ6gq9s5EgLNAfhHAq",
  "key6": "5tW7MLcVjHCykguvVaU5TxMXs8d6rvjrTDUUYH78rEbcp3fGjYcUxg5NuGBcoW2UYLtyxiGL1MLGp4s5XY95AvLy",
  "key7": "2Jz6nJbMGnQttCAdYCPssdifJC2WjYGgQ2s1fUAptkqeUMQ2mRjAHdS2dHKhjudmUfScfuGbykK5y7KKBdQahsfr",
  "key8": "5CvfkVArLcCmaSnxmrCQ4kep1tAj3cixKpNjWwHKfiXJzFa3MuyrLAeYCQTTvKqr9TsmKCBGfKYirjtGzSc94QR4",
  "key9": "GLD9NM4zXmcD5RgAbNQUxpdWxASi134JzDHKTQGnXxQGPiYAKcaDT6LSesCiyLm8CxG3pT3pS7fXfZssBxnG6DR",
  "key10": "5ZnzacpRfT4BLeRsrme3r6USXeQyeQB52rGfbaaeMEnnGXnKE3XuEu8yHLLmuNGvMuRFzZTnDFXTaHakFXyNAAhk",
  "key11": "5q5ELxxxJxisZenczeHJfnAfEMj5SBGMTKrFLUwYQHWaQ4Pch2fdWHW66xAAXvefDY511zexmXN8GuqnUuHnYMdJ",
  "key12": "3jn1bDa6Dv4AeM4gHArYhEoTUQHDk2rQTkw4JrLLxFFhosPzCom2aaXBJcE6CK1Ggh3tcg29TFZqnouspJtSq1JP",
  "key13": "4xmamiwekzgj4h8joSPyZ8yBy3W3BMpFx4AEPJgyC5XTX8XSwSAQhD44dJxNA7TJGsmGxQ9PQiC73Fd3FCPUFX8K",
  "key14": "4F824FRtNHbcegaHpnXkdKft6vx6ha6P4sNkcSyuuocsp4ZGKHLSREejCJhFvzmEF87AwgwGgUdctMT6xEvvxBiV",
  "key15": "FAN2EQ83UfqbZ5SofFqEusSpf5h33LtDgUPNNqmKS72YVdSRYNnziqjwPnHr3YBYbTWGvGsB8gSk61qBReuj53A",
  "key16": "2Ug8C9a4qsVeuCr4aTrYsSQwhAeSuadEYVamWrkokYhrYhZEk4EkH8meuLh4jcy7zn231jLZvxYS9zMSBXRUmLU8",
  "key17": "2HevNCDG8q2nxKrbCq5zaJWS6YpauNNjrQBQC8x3hqerLL2w8p2ym4sf78p2FEss9zhT4dfS4JVqM7ESQYnH1VYf",
  "key18": "4UwcapR7YSZL2jkRzBivdgktXPPa6BSgfgLhp9Ds6QmNuKxJeLc9esj3GAXHT98xweGzpTFboXybhFmeCHJtTKgw",
  "key19": "2NnaxendpqjNXhvjxAhcref1swgr6vEC5qei6MQXyUbXYX3bmST9UFPgsDqZbP45WuZGdf6dJcArDokbPcwstVXp",
  "key20": "59J6ibgni4qb4ecHKq4P2ABH4mvunTRFFhsy8XRAtyU24jUD17DGbNLXj2KPg9hWUXbCwTroAgCrkgVu5Cfi718R",
  "key21": "2WctXe5cXuw5Mcgnx7ePGLicWVZbtuQA1F7CuA7V1PkZfrkqEPggy5Bd6GGqfBoHfbhNFA6vPF6pTjnhSEhtVFHJ",
  "key22": "4pwTXzKCf5SPnF3qq6xD4FVMEF76xJaawqXJ5QHyzESsATYTtTCPjjQLpsV2Sn8tVRMCLgmCHEGjBudF4hnqQGto",
  "key23": "2bnduujyd154GKimSRa3SfWACetVrGsoMdYhcdbKfRjVf1axdnqLEXSVFfT4yPDbkyTjertXbTEV7VcGLe698EVD",
  "key24": "4AtV9QwQF6HC2skghSsEXsmT9ma4d1VNzVz2mpCjKtL1zPFh3E3FA74uvZoyRJdFHTchbLvj7Wjg9PKTLSwjnx9a",
  "key25": "3ura5RmduUUPcWMyzZdAieCCd3346aDdrS7w1nAsT88vWepV8DKHMjbSqzHJxopsHWyprHd7ZHNPX28MKFoBt2u9",
  "key26": "S8WwppGHhyZ6fmKT5huQPou3dXwWLuEuMUFi6gRB7XemHhWv9fBvGKCSXpqcxdusug8JUuJQWimXB6fCDX8KMGB",
  "key27": "2933JZpNtDxamUDcM4VdB4PhCqENzz9cDn6kTKz1mDUmA1Ru5thJ1TKhgcKS8trpQdaQMKC777fv9oTZZzKvTvBo",
  "key28": "3KYEjrGXaqxdSMSidnUPHy9QxqKgX7hzLcTrv2wXjPnoAdhu8JAhU9sLNjT2JWxkLVdpkFS8k3q3X5BjtiyHvdAp",
  "key29": "4WfVvxiZDS4UHU8LXbJxPVXP6CWAnFPHHjwmXfV3yzPD6sNkcvDJUhsviGDGziuuqw6JuHo9iB6ocySoRYL63xcC",
  "key30": "xcWwLd1CLYWqVatPmqgfAApksPmbzn2SHWtwWiAnYAKN5MJPZ5qgTuftGz9Fm1sThg36nGJ6MrtQZ5iHZp5a9Pj",
  "key31": "3aY6u3spnK3W2ESRNWqP4F2LBcUDj3c17ym5iTnZ7dY6g8i53BbUGaNds7aKsnHqRbVmbHa7Anfp6vu1enFA9BCJ",
  "key32": "2ZsfGuLdDZt2BCoHZvH8VqiXJmmne36XBkpJCxa68UiRxskf42mMLie5RA4tKaVdurvxYgg1f1AsqynV9gFT3Vsn",
  "key33": "3KmymRqvCDNArR3Kiitmja4kqLe7Hb5QaE1aCNuumSA8cgWZ8inw14BD5SNNxeFgEzfS6twFJ11Na6jX8K2UJ57N",
  "key34": "38mfHz5xVMMRNPzSS5y9PnpzZV8mxpKNs956LcnDifurF7E71t7H7ZqQpBdkL9kuSynkwccaF79kRwLXoBxzZWB8",
  "key35": "eoQgpWD2HxcEFfDWfypnvjTh19YXe37wfjWCdtFoPUrwYy6Ce4VR5LLuGJ3HG17jEUKW9HJEbvLWtgJewXJagyq",
  "key36": "2SU5pK7CjFRwruVewiHb3L3mkE1VFX145iRUwFKXS8RkWcuLVEwzEeHRCuz27wGBmugLJJNsGaswGFrnbpAWfEUG"
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
