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
    "2n2bQ8CCWU4cKtVqvuiCu8nBVbFpx9Hn8DQSUG79Xwwpox8aKZ1gwFaLxhr7E5aZcZh1fJZAMXzFRR12iD1vhqsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qPvWKUxw3kZqbp3sx2vKAn2uVYQ11NK97fTGi5AmM2e3B26qXkwtGMUTTRRsAJ6LJisr1RmShjDDYEry4kfwzBH",
  "key1": "5zEhuhdDL9zph5KByAe6MbVViDHbweesTUcJAzFPHLjvvF5WYyiRamsEMbALxpBu3ovvfVXtzkappHW19pseps8p",
  "key2": "5bLnmRLMnKmuQQQQbG1fS44DKfwpkpRT1EzE1tZzGG1wa45Uv7vVzVxKX8JAXfxgXkWJR6zJYp99PDFHVfe7Dgvp",
  "key3": "EvxcWbq4pTpKnrZdaMK2kyLaNXUuoYYeSVzE9W7hHFGihpRkG5Js61X1XAk4EV2k1zYU7gGY7UoeZRM3piA2BEH",
  "key4": "32vaqN63FdErdukMGBDTBZxewStUF6wDZ26HFhtVVYM4u7ePNuoogn3f4GSAJyYC8NKyuCbPPMLRo1QWDXPE3Npy",
  "key5": "5Pv5s8WaGHLzMxBzgnjt9WE8FN1QiHMNr1wy7S1c1pxSF4cayXfEDsqhfFWaJW6EUKBr4qon1vDVoE2Ls5dw5jRH",
  "key6": "3bXYwRnszpQKk2JsSxNyBEEYa4usZhq1zPs4oAYkoeXNABRHpeqMfCNAHrMKnYTr7cL8jwe7zkrBRETRh8APBE4j",
  "key7": "3CT2jSvgkU8tP78mYZVFd3uotvukqbXaBqsxng37Jp4epPiEnV5zW4ULPnmPLDqa3W6y36mkPZhYfWtapVWpNdDS",
  "key8": "4c8R7htBvKX6PmyKzAiuXncucQGVBWu5h2Hz1syyNJb7usAZVkW91uhCt8AudwpiqLoAJkd8QAVWuVMcPknWPhKF",
  "key9": "5P6aKnhPPkDvoT231cNbFTScxNmXtP1rHsNNuMW71adUBCHpKooQnomhgsbWz2wie4PEARCe5brdKGohJUJWae3F",
  "key10": "P7x9n8uP7XGuMCUnKTE7qZx2wCLyDRc8LSdQwAJghPoVhXFf7h4mMixDJnqTYhicT8ptTKBbctRXv25RD92ihEN",
  "key11": "5fiMyYcLe9VxbUX6URkGNy3edKSNQWtt5w4LdoxcHQKkm35iMFeJFt6fPo1b3CHU9bCwgH4ViVPm1zPBrEm7eARe",
  "key12": "5RauZbNpazqWqwVwLHJaco8CGGUw9S3AifVSSqLWoQdy2MpnNTjoinhrguGmHqtcmsnxCnNZXkggx4BLRFTSm4zq",
  "key13": "2cwtfokWESS7BrP1cbxBFVsDdJDBKSj4ZDPrUZ86UeYPJNG82u3vapFd6A9nmV4KgBnHuc4bG2CVePeqkMfq5YCt",
  "key14": "3xdXUahQuGtKUCEvEXgXpN4mRmkPgKXRengRF83PMBvEfruPt4QBtfkJYYJWPYnp9SH4wvjyUm9oFYmKCVmrfY9z",
  "key15": "5qDrviz9YC1azXM3ti7Pnw9uFbCEVXVYMJbi6Cymbuu2HpmUikGvFPReHEDLJKKofUF4ZU3hmV3APj4tFz3UhLsa",
  "key16": "4gQ22EKJLtocsWTM9qSubeFr4QLSA7ktLjG2iL3QR1qKgYD78wsUM4vLi1omCDUYaRURtCLuw3QXbyzx9n9Ha8vf",
  "key17": "36d2BCifb4vNEnmvuhhwCMvTuaJywaNAuo1fohQX9Mbhy7z1VhEkhMrcuiyobw7A4QWqfBmsiqR2UWc7VCUHBnsf",
  "key18": "67pJq7vEks2xDgfZfSAW8upgYoAhg99ka7TibUp9mi1GpGMu9u7gk7Vcatcp9YxxPuExtDLEgwgNMcXbivcSsCyH",
  "key19": "pLHKR59DEkw31Hs8icwxvbHX6EuKJRQBL6vSAfJCreg7Ffa6YpeZpKf1RkDNFcWcCVyf3VhGvbV5Eu1BovE9YTH",
  "key20": "5Jqe7eJ6KCgEFSJhuLqNRbHux9zycMzRhJAZhEQ1jCSvQNfNocWsjgrV8uUc6VHhVoJHjAimqSJTNtYn2mauQFJk",
  "key21": "2ZWTDbb5kihoeFWcEDNaw6CevRSE4qdx6SWAkAirg2RsuWPxCzHT4k1t5zApesG2VgEs8iBW8qkE1aBAhuwJVXB9",
  "key22": "4Wid2TrvmPeFDxTH1E7AWkT1ASemj4yFT8344zwRATdh7PPjyCZE9yTEyBdSnRMiZxhMEr9C964XL2Hp98QZvre",
  "key23": "5W7fPfoAK1PVgqTFcMs6tHxxra1qUAErp899wZ8zGJaxfCUye1zEVRAmFdJ7YV5aWUhfpREQqqXjhrT9qoS7Fphv",
  "key24": "PjTyw9NNjuPaFmgtyBN5RLjMtBmKPyYDKR16wARHkHU5AECkWtf5z94VWYQPrvMh6BXrLRTiZhwJunyNCj5NhU8",
  "key25": "2XsACCXBdBzo6KJc1NXGqSP16C8K7svgbQcS74kRTx5GBAPDFf71uZGj2VVnaLcujMw1kMbCzhPzXMuQa7bRZe49",
  "key26": "4ZCM8UzHybkws4EosCUiUdYxqBFSx3QZDrWXfSnMFMD6Yw3ocdXCwJLESAP3tTSCEfZTXW4RnhKpYyAmRc7MHus1",
  "key27": "3QHfsfJ8C9gPADTaM8XKUYH1oy7DbJNSFGJk34afXisnHxkdS1kkXhv8BfKQcKgsMoT1RB21LgCzZdNkifajJKtu",
  "key28": "dkdio6rURTTPR4bmWsLTk2mN4pYhTCwSdNdv9WFNsJRwAeTvTvYVsfhCVVcfC8sR2G9DqjP49kDqRQwjYMeTGLM",
  "key29": "3utpURGYjNoGjBYHXLoDY4USjPUra11ByKeYV5EamoYjSmRsBuswaMuXFkqaLGfoKDWzSuPDHZxpbCQ7dTBYhaGT",
  "key30": "5PMCVRCMnNj3Nue8PchfdHBybYkWyHLi9BTyqxVU3MY7V8UNJqFqjwKvtM6GUMAoEbccTNf9ZXtou9UpGqBKK4sQ",
  "key31": "4T2xzexfF3vGD2b8dLN1E57TT5S81ff9LfgCcbwn2TJWiiwJxi7juCwavxajFh1UsrJ3ifUPGdaSKP3bh7Zd3Yw1",
  "key32": "5zAiZwfZvwyPZbrs66HY5wMxsZAkMixG3dZm9TVySQjjznN9dSXZrKpnAmKob1X1hzUt9aMYHS4yxd6au663N94Z",
  "key33": "2hjdyr9UEHzLXZB9MavYQ7hbVXF2Qrurmzmrt9Fia8sZrZiqodUnkTSjK4RWdrKGkCWT6J5bWAEEjkvdXKTF4moQ",
  "key34": "2Ynse4F5GUfgE3CoTUjsnvFwettop4TwzXzGSyGPrATDAkb8QULeUPPAYAquScAVFWiaojsWmUqWihxE5DAM6jc5",
  "key35": "42hJtifexCCv4AkRZPuQfeeYuSFVMdsCotqk7c45d782doXzQnP9uxDbsu2YZNcBZ3M9GVH6zPqgLANS77DaVUaC",
  "key36": "2HaB7z9uzJB1qSbWxKz4qsbExt4LRdC5ZeAbKpWZmibqjCmmYLAzHa9H3RtBraxBb6o4EnXpvghZhAsHedH4bQB5",
  "key37": "2LhZQ96RqX5w9mJwieZCYnxbryPR8YX8to3FDCyskmTLPoNH9FzQC7uG9Tici6c4xaDkE7jSkUQ9ekSggxq4uVqZ"
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
