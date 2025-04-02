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
    "4mhjWUtcHxBdpXRs11xqgnsCKEUbPaVB7w8ENPJgpWZ7kRHL9VCufEUZxf1oXY2hNBJrrHsdLrQu9eug4m9s4ZQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MKmhBNGffiV1MvqmZiPFoLAkQ9BGYp6cN4kwvTovBHwVG9LpraoQcG4i48KtxzReHbsCTPYrnSMmzwBGvmNFqrs",
  "key1": "2pupQwWDYum3dgfQS7L5EaAfQQhaRqMefU92VYHM3bNWKNMv6F49ZNFBiXaB9i7tBW9t3AdpGnAz5UGWxFb3vETK",
  "key2": "3yhr8BkPbFxiTujPDGAPKh96Vg4mWDdY3vxgckmQ1E2Ch7R28jNoLjXvtDoFT6XEdbg7GfMdkG9hoPQzK4DesmRT",
  "key3": "3KB1MfjJboBQvziaoos6CAuvmPFpvFtizUYBBteguAk3E8RkVA4CYqB2AVKNWNTPtUJyj1wQ7yT9DwCgZmoCYvsA",
  "key4": "5yiNupZQUefCL7fW6juFcaYd15BpKQz6qhS8My8d32evEfMDQeywQXXo1RYPWixXkLUouHH7nSHRmqsCz3NJ5jCk",
  "key5": "5mRLTGxgybhdw6Qo31SeWfvSunoT6G7c3cfroiqQAcbWXkp7sqtWKE2yiSijEG4571rMHZVq3Ksuyan7kySsGAdr",
  "key6": "41jLN3harNfusvVrJGUqtSt7piG6kwKfjnU1x51SPfnCoLYd2pi3xxLqdYuPtpuggZpgphV51ZdncukLpqJa2oac",
  "key7": "3SWBK6UGHxfndTkzscNAY3BKGARJUjHko6qc4sNH7wrptoA8xQAZqVTTBy4SUTg7ku6QPNG8ixrfwRevqGYmJRAk",
  "key8": "JNWVaXV8o8QQSv5i7UAmvbQvnfgshrwbZ4wuJqzVeVFm4p1RT5ctHpcxkWKDgbxfhvossJJbgu2pFJxTcyL8k85",
  "key9": "3gZ85oQ6QbDH3jQ5CDzCnLg2kmabSxXJfPMuPE2sjZXbfxERJZXtdABj8vdnjdQvpWMeCTLDp3YEm4DkqxvgeHK8",
  "key10": "2QfYot3Zgz5ntJQ2M14naBnsUwbWswY1B9NVmq4MSBGEjpwox8wEadZBzFi6zYdExRjPyJUrjy7NpCMVV37Amiz9",
  "key11": "64cmPX68f4v8Y3t3TyLapsQDArYLyAUFnQtFE7cuFL8K4n3JDok75uKsXjcsxiBuUjDtQyVnzkzKfAawUfLYp3YU",
  "key12": "HhoRZkdY7U3DDojNZZyTQzxmrjBFrunERwGv6tTzBhCVEZNFRCmZ7gxdnztFUAcEeL5oiPUXXiNXKb1mAreaRW4",
  "key13": "5xp9RC9begq7LeiFgSKobNxV7BAVZkSbF8QfnZFSSxrZVyhbciraCSQAZcVEAiSXkmsKGu1YUYE4ev7Pi5yPGeAU",
  "key14": "3eEjtpVkEzNyEjLj8c4HpUKHUNdFoCK6wZJgejSxiFgU5eRX6H3J7RZgezXJkk81NTFB7jsW9Fr3PtoVrdhCpLkb",
  "key15": "TCKgty8RrzXaZU2PXk2dugg7KcPve3cD1UFQDcXSwyotpxy9hXjrwv57nnqPJR9n6HaGejKygZCX6g9YC4KgTbZ",
  "key16": "4ynYWiwawJghCQ9yWHWodA1nXDFM9b9vpkPoVikVvEoRRw9d3qQjtWrPZxpZ24kzECbk15w79W2SxCcPohSJWri",
  "key17": "2QLarGERdDTsMjBUJUZekGpYYn8jFXmgQwsUfKLgHx98sjnaqttUPExzDwDSLBniY5X4LW4Ske8tLM72SJZk3K1D",
  "key18": "66ug9TLrcJ7VM6jF9Zy3eegSCe8N8BkkkXKfmM9HfiePegNrJvijJxypAFsFAndToH15rR8vzEWqve8ewAB5DwWw",
  "key19": "4RgjUhaPedXBjsdUKphV5J1RTgpAPv6X1dwQkH8KmjZNnbBcLCNB9ZDuwUBs4BbWRkHiY8ubVsMU34HjgVwaUiks",
  "key20": "51jvyxJh5Z2oQ36Ndnir1bPQTxqomAN87oXZNAHUDweDq3wLwDDP5uJG4xi894Uhuj5aEKgHSwMHDuu8tNqWGF9B",
  "key21": "3GXeTs31w1Xq4LJ7RGVHmyvXdgURTyxAsu19WSNVZUbdTbCmAJ9qPx9bHRJnAkX8UjyPp1bAiNG3C23jh1WiFE1a",
  "key22": "5DwjC7HhPgGWb2zBbgG4toGpRBbSCvZaa2iDBE7uP8BkKxEFwpDFx28VVpnGJoGpDQZ5mM9VLVwzC6WiVQE2Xhw7",
  "key23": "4LxMDSw7rhpUsaooizfojX3F33YCuFzKjA6JE4uS8eWBZmWHwb3tDahCptsdNiVsdNCMjRKF1LioFo2qbDz9D9wP",
  "key24": "5zsR188PEe42a4PpXQVCtc8w2JixjeAHwjf69qw9QgUxXPjjTLVDoVFerzLrjjW6ecoSnP2gj7TvD7hM8gk8TtSN",
  "key25": "4x2bgK5GLQvvejZT2JXgJAa1aFKGjB9MzdN15LDA9NgmxJhrNzsbYzwyN3J1Z9xB8hUEAPRSpvNcD3Z7qfEEmdZK",
  "key26": "5BbcDneBTroyWxRs3ugc8th2RewNpY79wVSS3PdnNpPq9RwdeukXHf6CnZcJeC6Rk2natzR2mXDb3VDvNqPJFTCC",
  "key27": "4XLBQrPuKqb6rH4rEfd1Rr4aBWAiBipw152vuifk2SZzihCU5QQsNc3dFv5HSGYBZd4Wa17Qwp5wTqymU751Z4DX",
  "key28": "5w4TDs88YTYr6bbpmWKYovJrBZPpiD19YmkL3njQNtkfMG6t9Aen61YH1no9ZT86Pi5GRMVs8eZKBmYVBhkxJRaF",
  "key29": "4i7drCGexqNxRMQgGMpbp8Sptfd8RFbn8hdVsBqE7BcTtqAZ78BzfCuqs7iekLsU8LMqSa983YY59oy9K11fkoK7",
  "key30": "4xY5VHMhF23YFi5zoznshZJqpYdEH73EczRXKhy68SaWs8rze4gymFvrGdXSi4J8BPjgWqzwUA5aXjuq1zGBHfzv",
  "key31": "4isNyavrVPGPRgfZsHGwGk88FEh6GDqiruf9oddvqPhTatNV24BFpBtbuRqf3dQjPCjG5R7gmAyNPW2BzQ1iGkFi",
  "key32": "5YGESSikBmcWeGH35MzGYBXteDbcVDwv6ovh1y8wjamjHSrYEPULs6Q7MBcWhx15tJf6drA26YFtuyMCsTdDjuGT",
  "key33": "4R9aPtEASYWBtzTus4B2Fdk7YqKgh18RjKPqkpLvBNTZJeh7cVA6bu13Tm6uw64LiEgQxs8BPR15M9EzUQgmq2b9",
  "key34": "2aJCxq9usBRBs8cCffJaFsWMW2vHu5roYWyzzCGJfsStyJqyhpnEVPFxaeRQGQuJvVXepDB5BtjogdtRwcLZf6vf",
  "key35": "5EcPHPNMkr4gotegSVzDYmWyfmv81BMTGNWU5DXEn9BViYPg1n8Jrz4eQChezSs5sRfTEnWSY6Cu7txZiGLQoBd5",
  "key36": "3dHqRY3DAwuo3J6P6KnEv4jz1UHrqzyqXpCbuwj4skZhPdZuVXZwLiBRv4y5mcsH2oCNPYtLt6ef4zSC1FyCtqTf"
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
