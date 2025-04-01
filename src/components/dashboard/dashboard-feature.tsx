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
    "5u4HviyDSU1iLa7LnVNyLv1u9PKZ5xYNDSiwUsX8v8idyzLd8S6RQVgGYaDrze23FfYbhCutDJ5EcTgPcQgR1qTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qxx9MdVgNV25JRY62uD3fAFX3Z9FMnnT8M7mwivaZeCm1abbwEWwdTSjNB2xszwtN3NcExqVR5pcE9cJyXw4mnH",
  "key1": "3rWMoHQuf1BgEWyBczpiPvyqbMH6aD8bbC6VRJ3hpk8tAAqfiJRag348VKEJJNJE7t8ZaMecCa3UfmDqoU4deJ2d",
  "key2": "2zUA28Gh52CybUqTSSWqvQoqk2SzyFZe3odZ7wGksz7DvY5kbK8as8ZBqPEQ33JqxmVZEMm9Porpsm8UKVqeF82u",
  "key3": "5jFrR5z24UToVscdHz9Dyxs3DT1qvH5vfzVb8EgzA82UUmzs84WsdqFPsRHcxgeox1gjopNZwWpfy6sgnqYfBJuJ",
  "key4": "59gg9JhRm4Ba7QcQoMEVcrCjxDLja6S4TUcdJsWLAxfRkD7V3rmiskFztPmicfq5m5by7jJ983PzLnRwq7sfsbHs",
  "key5": "5T8B5a4WtzmU3KFdrLqVPfjFGMmUpUH8im2f2RGE9T6e2xDHVqfV65X1ca3FD4tXj6ZnoGhEuEx8kaZ61UVCGkik",
  "key6": "2dMFE6K2PCgzoHwVSgniKyQiCtPvvaJqiPxvpt7ncHr5fn12acJj7Fz1DWtDMt8DnzEBBxCZpg9JDR1zboy5YW9r",
  "key7": "3x7DerNWDSfuWrNfD9yPM51gaS7tDhamnJ1Ra3jQdsYapNujLrq4HdGqtNzcjUgDYHVA8xQ1SLNDu5w3vgdWquJA",
  "key8": "4HRicveLAGfegJm53PZNQzmQxuNoFbECZiUCKoiznsWVngv93aYfQUaiViYdMckp83os7Qd7ApyQL9Fd7HGQEFuZ",
  "key9": "RV1acDoMCyRet4TRk4jjfMrHysK3pjEpskqh9y3gZtX5GwwaT9A4sQJDByNPZ4vJB2hQrSMwv3JdFzC3oXaW9UV",
  "key10": "xJ4BKFJVCk42VG2pGtAP8LStF7Gjwdgs175NhnPMWZzEXE7rR1J1VcPKv1UZdeM3JmuUbZ2pDfvmTjeKEVJJt2X",
  "key11": "3VHow7qrgW6RFULjgJK4wawY1iuCb9xhBxWYLsQak5JYxAGL9jV3LgxtsVoMNdYp8d7Lz8QkL9rgZLe374GE12LZ",
  "key12": "62fWyjCcUnaxq9w7a8QRMQaLtA2WG1r1yCsxPWwDrRoRoFu8bKt2yT8oNbsT3KWmjLg2SyCcbhpqoiEtPG4qBWu9",
  "key13": "5dA6H6bYw96FNNcwvTW3WfYBFv4sfjjNFkiiqjjgWyAK7ACf5LskjBcMzUNcAGyE3efA19i6jXNmaRbp3DvqVqix",
  "key14": "389MXUmcR3wHiXtmBEbixKBKnz4SdpRKwHRVqrynZ23cmY3bwnt8shLcvFVSDES4viFTQxDnUUuZZTEDfHq6REvp",
  "key15": "665XVUqj55DMDYumqMhpRH9m8QZpENq86p8vQPERcocTXMKMboFSgyQN5fFuNToiEobHAbnng5iKSpYv7ptMFphg",
  "key16": "2bPMBkbkQHYgeU159UWJrd1GqEa7F5ojYiG8dsyKsfHazZmnAE5BEQXMiPH8Qxb76hLjP8EiXdXqUW7yKZuDZWcH",
  "key17": "4jDwHkFbqwZFNCpj4BVvmwJLJTirTaXBfTXmWeQaPhpEhwqSd9iduLa1e5AQmdhQ8k2vsyUps5z6UA5rDT6DL45b",
  "key18": "AxwqT7kvLc16i45sgGExe1RKXemnwTXesXbhbdkTnvPuQWB9nxsTxY1rNgUgGUpLN9MFNrm3oj9sT7mdgAx7AFB",
  "key19": "58AuutMvbwFfw2MsaX4TqVucQs1j3424HCK6pXb8VrjKTyEdBRnmgArSpJnuH9gaQ4K6ktFy1mj9MyD9jLRaMTbB",
  "key20": "5z84vyq2Zk2hcewgJtV61uY9GMKWj9ECzPkcXu96tgTg9qdCGpAiUwuFDvqtbpPowLrAchMCm6suWtC9AJGAgeEa",
  "key21": "3gP2wsKiz3c9katvqg3updyXDer3zJM9MyjPSWFCDVdiz8AZzDpDz6f1E93hTtZTh6CWA3bxeU3wAxhJMLNeExQr",
  "key22": "2E9TGhsXLoFYjiydGF9k4TSQC6CpbpjcNoY6U1GPBU9GHwDpNmzboGjsrVSqZhLi5ugQNQFWMr7JqbHgcLmJe1jy",
  "key23": "HmoctXbV4cSbfeX8Niq5X2aGhVUHpGUMxnsZXLEVXRNerJA5az7apQYJvUTSjD6XU7CYxHdj4Q4EZYSGkTyMV7b",
  "key24": "4SrNk17cUQDxFiBsCqLyUZNCUEGuWkRBXAyM2aU9jJixXsXLfUcb5jxJNfdqpbztsAp4C5WdR9Lusiw51rsfBGXb",
  "key25": "79NMnvmBKRofSrKYVCdk9EsdA6wd5k5VL4QzZVD4NXELRVeVo5Qb66xMaRsiiEYqJ22ENf3oMvWj4XAXF3HV5Gm",
  "key26": "57hvKLH2ocDz4dmCNHAHhX3cyGFZRdB9miRGjAU5rsZZwkNropaGaspyzXxEH3Zuceff5kDdexhxUSAnYoebWvc7",
  "key27": "DFK2hqTnTUwYj6BM5AkFGHYCiZsidBeJ5gzDg6efYvP6aVB5rbXqHLggg8nd1EETr6vZUnmrL3Uw4r6TkDJriRv",
  "key28": "4uXcDJw6SNmrc1armaG2nwdRiTEsFZubGuGqPSRAd2YrmaoQCUp1rJhH2zHyzsgyCYTeenbrLbpyFw6LDRngz9K2",
  "key29": "3AS3SB4xFb4uJNKsVCjvZoNfmezgiA6KTDAiDQMVHtE1dm2sgDSzMYb8GpGvHyFet7C7VWsGts64cbxrLh6aUAKb",
  "key30": "DHHYA1hXd4ThrEEU5pgXTWKt7uSnKtmrJetWQJPXEtqcTXFoXVKmHWtj8jfiE66vbxXWRFEomp9kXhhiBa9Fw8L",
  "key31": "3qgzi5CSQVKKScpDG7JozEkKfBheFaMfSmbJsCZNZcXhp8ZRY7T1jiy2FZzwEMLSVgNECKheERWHkWpUJDAMxPKg",
  "key32": "2E1nkur6pLjfXsUdLNFZMPuEpBocSzehye2tEHStoPSERrZKcaDX7nQgiXXu2VH1vinfXRvyFK8LCnYdTbLFXyff",
  "key33": "3A6U2JCSa3AtFUZ4snhkvDaNeAAUYW5Y3uocSXNzJYSevfCRNZgM84PEFtu262WndBfvnTGNw1WRmycUoDiZk1Xy",
  "key34": "4S79o2bT31gxMDeJY4jC7qYVRYYVkjKZ4Tkp3XcAWdApcjZWYQ6D9Lp94jBsgpi7dhSJbeQ7a2QrkxACWozTVkSy",
  "key35": "2WKtDg35V2FgKvb1FmQDXrJn31ZsyUFi97ZHARJtjkxJ2hi51ZXVrkic2VZxuiHE9NMNbsYZMaiBrpMa4Jc4Nhku",
  "key36": "3bcMWyTaDdMtsLqxvJ9JgEnmSP44QHYPmU8bS8rchohuxD6LWDYyyJmTnNGX3uqWQtQnYjAP5haWZLhApfLRx89G",
  "key37": "2KBWy2BkedyC93MtyjVpCmAXXGA9nwWFbdtgWpic6sU7TG1KR1snWJsXxBpLRFpqAfRD9SWEd9LXJcdikgZqSwWN"
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
