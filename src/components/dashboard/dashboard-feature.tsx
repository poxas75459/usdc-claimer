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
    "43rC9iy3yr2sfasy9KHTEyraj74GSN8bNgfgdqq1om6H3MCUqQqJgASoiDNA8b7wVgsBWCN5iyCG3U5Msty52vXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BSCYpsQ7YC8NcPyr44yqzvEpaN6nmb4BXgQad2TPkDEFxNbAPYhhNx6dt6yapN753t329gQK5gQXDVD3nJASEU1",
  "key1": "2z9bhyd2ejHLM5V4EpjkpVDGqsAREWWFA3RUU1HufNhyENH4APc8DGFDtdAUT3opMAxXVCsEC6KZsrZHPUz3gXTH",
  "key2": "3EdKRes4z3TrURBHsXk8KBHc13mDE3WgSknFEAvDDsu1mvPEjcEBEmXHMdaBbZahPuJDRRGCbuRYGGksmkvYvnx8",
  "key3": "3WAHdyg8kgSXUJ2sarY4ZvyL2eWnBfQS34yzDJ5sTUK7kMN4ni3DFW26qmWdvSGo3FzujwTTiaWUaJvm4vwFckdz",
  "key4": "ThsobbFM6GnVSsu1toY8WWuc2G63ehkKegHT7pmZTWjmkNHNNNgVmiBBHBiDT7tQUXm3TdjnQcAAxz5CEVvGrGX",
  "key5": "4MmrGhku48s9TrpxuHLcG3nxGNu3np3mJFdD4PmykmhRzakcbhfivHWqdPSoyfTwR9j4pbicXQbMmPFbqvgCUUNe",
  "key6": "1gCGyQAoBMgPq9JYoHUiLAMRj9YhsW5vEaFwZurbT6NWD12dqzt34KsSKeVyNEJZpmiqt3W9MuZbLraFDEd8gey",
  "key7": "4hndszyYV48aqf7QuHimoqxYPNgfRewtKEDWtHtsHvRdu9rSBR8n7VwuCsPomZWx6ZF3TukCNJUeySUQyNGBjRTy",
  "key8": "Mp4nwm2tGoRu6z4xbvwK6ViEYxaGbgMfGH7F7V4x6GSBWDLXefammcrAdtWJYwk5cjqWTCnqvXWiaEXZntSL6LK",
  "key9": "3nxP52T5nRHfS5GoTBfHpreFL5jCPzfggMKBXs2RpkFEggRzwWesSz7bVAmxQDQi7V21hkBAuiBcJBQftbfEK4Gb",
  "key10": "4FzWaTt4uxiewKmEZEGtjwWauUddTqf2BmzZ3zFdVKxvpPEKDBMjyJ6qYLxH74haBg4NRjtzHeBhZ1bcG9WzMW7q",
  "key11": "3vWha7KL8CLANXJuL5wFbcggP5n1R3sWQ2WGGy48QBJ1vPNtjLDdhNszax2y9q2VV9Y5SjNcpGwoH1wUSYfP5z9k",
  "key12": "4ktFJCaZYLGcdLdzXvKhsDGZBvBhgeNjtDXepXYhU5FkjJZfyvRA9h6JSEr3f44VvK6RknpVQZ5mgEHW64ECScFW",
  "key13": "23VQUkctaA4TeACb1WScjvwj2VUPc1fxzSRCPTG9bVjAaxuiv36BtE2hoobSjvxy7xn3BfFXCNy5rLs6Lk8MKzWU",
  "key14": "B8nzzLsjJpzW9AyYFALnh1p5BfS15zqxwq8g4Jnqgt1WJFRTpWuxc9jPLYmBsnpgYeoQaEaSFt3Jpn1gcWvLS4W",
  "key15": "neWokxbUhqovyAPJkwTn5Dy2wuDRE8vWwdeVT1z69S9KaymxjNLBXJfAh5ZmBu9vpZYXodjE6Siks6c6qbcq3be",
  "key16": "442e1WFbkmrPfNiDGVyCuve2WeyE2joACadEJ7B8qnixm3skdPaQq4cEAeVnpsoSsdLf7DtechAL5v7DYsngt5Lm",
  "key17": "23nc3hLP648yTWRcgCtJmnugJdcB93BXzEDwqJeX4Mmyevf4VrZbPjYdxPbV2nVqJ3UfVp2AaqWqWapsWjPmkj1a",
  "key18": "tZXXycqLMDdbFnvYQVqG75MzNjW8sJRYdo3GRcS4RF1TJuZMDcNkhJJ5zfKGYsTASenzxFsqHKH3L3ipTGHEwnk",
  "key19": "arPJDue1QZND8HPPRzDVcG6CCbNKEHZijVgfxTD6gSLsKonpMgBRA7XzmRQNJiMkvvMU6Y9mGaQQkwBFduZwEZC",
  "key20": "4GQZduturxAornE1VjriF2J2r1ZtGFc5gHk2G22nv8QmAqV4WC7BAyzZuacnzoyjThEMyEoFQvEe4eU3BMGhQLuR",
  "key21": "Q2gwf4ngqQZmBfhpm8DFcEVLBNYPewVeV8WbpJJVKpd58fQE4e2D21t73eBph1av9BDaJFiNkewwFDxcU8t2jSA",
  "key22": "4pXD1a3vC3SfQFwdYNk6FbrkoY8sNE3KwudYWJ5FcQAVZ5NRiwqeoE7FLQMWHpchM9oSqLwXQmmL4p9sCgQWLzQx",
  "key23": "ZoJbwYKDd5z5Mgwbgeec89bYmGhJEEq4swAGSi8uZ6VWV2tzWkdSgu1UQYNBEeijuVN7WaRVZnxxJsftJB3rVrd",
  "key24": "5tzJHKZTWmrZN8u8w8Y1RdpDx6y2RQuuNGz3sr86LZ5bWRK3AETmNgEBY1zwNSFvEMJATkao2hzdA1TsPnsdvzMf",
  "key25": "3AdkR7HVD88iJNWwvpnxuTQe9pprrE7YDzingTAh4ggLTVEeamZ1bu8xgfoDeQFBFcRwEj6bkStmArCDzGviojxC",
  "key26": "3FrQsbBce9vQNV1HArBd2jEYXYxy67s6ayPtfAPQVV5HeHHHwoQTyq5xRGy6FRYYHW8hpycA1rnmfnn9XpY1rwTw",
  "key27": "3thSSQDuGQeYdmx3wzPrFXi2DvR7RkRH2zfz3WUJYwyogbnPPYDK9gtd1BhEV6smVHqpe41oYEQqVxbm52qKXMGq",
  "key28": "4HoE5hgF7i681iFWLHbFrizPbueVvJpjk4qeUAGmzxhX6kDfJej6zkskmyztxoHH8zp5gFnMc1ifhADvoNUWQjkF",
  "key29": "5uMXczVJM1Fg3ejayKC87tVUmf3Tg7zrVX7BsJcPD7BMEk5X5uSW7R7r6zL2qVxpopbSfiEPKhgW7pPfAthRvSbt",
  "key30": "77XV82so7JbPDRJqzWwVH9kQhJibzF7A8KWWUffEQz3BL8DmvARp353K6ptz5jQF9hxWhxC1cS4a1zEGD9fNdQT",
  "key31": "3uuJpzSxZBM565cMUnTWfcJpgwzGbWYtNBudW6ZzVu2eiwDjD3o5ZNCuXWXtXQHQtqgfYXXmiXQ1ab1vCw536aD",
  "key32": "4cB4SRfNARv8y9geNjikbgThBzfZPcfhM3B41xrr2uQ1PF1yav399gjcju5DzxDN7joaFYpaVAYvsofi69mgaXCx",
  "key33": "5KS3nycYJfm2C5KACmwZXAR6ihnxESn7cVMJ7t2Lrgjd88jTLnkmhZdPdVeCophKaSD4X1n9XeMqRZK8EQhB3TFL",
  "key34": "3QRVZvAnkeAKzbN65HnjGwJSDpMiB3gcPtp8sfUf2np15A2CdxdZWykV3oQSEt5kt8YKQnRrZUWQmNSbmW7CYzvt",
  "key35": "65T3tjEuJWDbnU8fgPEmyt94tXU6UfJHuUmWoFFasiSx2gFF3zLRN5gPuKXxFMgAkW1HWDTMgJPPPT2keGUn7wMq",
  "key36": "XQiXJ2Fb6Gvb4xsvM1vi4nWhCS9wURKJ2uEDsaCRjwuo6V41pUZiPVL7XjH6nHH1XmrBDc21Lwdoc7Jp8cgTJCN"
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
