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
    "4ZPDPy5LyXNSToCRKizmDso1uKWhuerAodBCAsHzr54eB2VkgXLC4p8UwTWTZgoWsNVn9oKorqTezgDKb6Tx4oA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XRCqna7HAkALFTuWNDxQ8FNZH19ojZyHadx3xwREoDY1zXknyab67WLaMrQ4o9jRMsYziVgiWvZdu4c1RUK9Nbi",
  "key1": "3pUmTpdUGqtd6iYroqSUcHLQ8iMTNUqrQgY81SnHpySuagwZkc67o99fKQw44W62T63WRtaRmAjjvmiusC6uGUoi",
  "key2": "3RkeEU3Mz8hS5k8GihCHqKSt3ReNSbWam9jLQkHrwiT35KPVWD5igpVYiDHQw4ZauLjk5VidiBmgDGeUsh8yrNH3",
  "key3": "4R1nE7Fo7KoydgSanJW13gNh6yJU6TgAiq2ZJ2sbqJKGeM98yrMvuiEiMxJHCRBmma7PVBmJR4w7S9W6i3nA8UMu",
  "key4": "5kiud8NUzawMH3wYTw1aGTCLsUMWiQtLL1AumeYHfxKxGVTP2ZhYeWoeLfupNwYUPT14SHoT65WDWLukC316za8N",
  "key5": "3xDLUnw9mwWsdfNbgVvKtv54kUbws1PF5p6SkyUJUbV1SKYNTA6SceHejYqpzcP7HgLpFwVCRNoaZLJNGqoF82a8",
  "key6": "R512v4pwMS8xrWQvDFarL5b2RuDtnwjCKCuDZpCUAyzAesEgQrGoVSbZbqKCbZVynCjsjkvRdBf4gHu1W5CC2EQ",
  "key7": "45zmTncbj4r3JbrAawhi3QwzL8PNCfi8o4ofUxHSg8gRDocRC4tfzFHQkM9qY6Jbe9taSbFWYfgLqwD3W8ZX63MT",
  "key8": "54eyjqUzrmgCMifjotr3JkFDHmFyLqKuwWBFRJb4bPjLzTkhapHwns2nFDtHL7TN3HHoDXbzamjkkchr99UYQEwv",
  "key9": "3g3AzwfPRdbaThrapegLZHyC4c2JQhXpiPbTYgwXtavA1aTKJ3L7qQxmGzjtKSNXBh1JVeLSo8599c2NBTk9mkoZ",
  "key10": "38F4Qsxn5am3r3EVFTN3z38Cd7hhkmAyiy2Nuugz6Ef2CKu4ZiUvYRdVPVNzb7XTKbgo7Jycr7n23t4eErcuSzw9",
  "key11": "567N1rBJCM523QsAvWjtD4cDceWVvzb8njif4Gn2k5rhar7jZxbEDCPCRDUhYxSPNoe1AatJfRNn4CZQtudwDWqr",
  "key12": "gpgdn2hRMeVHhWSLPzMrMkZecNKMKnUrgyY1htDiGW5iHRpNdZmYLV72bnvKdhVEAXsJj5BUXfABuGkikutYFFz",
  "key13": "395QAiSSdfihkpqF21K5eZyNhRqhikrj7pcWXsajyCd9Rx1hqmPxjjzHpFvBXpDRDV4ddCmmLdoMBKxMobr1HFj",
  "key14": "4Yh4puT4VxkG1cbGAFTMFHpFHJsSdW8UE8MaSttQBuipAV9DNnDFVBYEXoCaNJjrUxG8ipqYWgZ7XU1H6dyXrEZa",
  "key15": "2NrMNbahGRr8EB6gWN2g5sSaH2CRBXBgscRMiCMdHeEHneSRAx2iuTrtdZ4GUAiN9kn93BspYZQbvQwLXxR9LrVd",
  "key16": "3FaJJG72qEDBt6PU6LAVTkVRRpXT8RRYnHjtaLkBb4kJ3k9YynA8D6WWgbJViCWaytFXubGJ7376AdYJJYQ9urGa",
  "key17": "2Lm6hAEGWGS9feTgQGVyp6JiNefG9km21Q1iHrE1fqkk7bYMAH5B89xc8o9ySkKMXEsZeNNuDK9FMxA9HAyRQMTr",
  "key18": "3NfrEgKq3cHfP7sK57iukUv3o2k96huYCgtEbiL4DRRL8xwFgMxgzcWoALs42WGo42dcUwGfuy94t7Bd2njXgTts",
  "key19": "2oCiuzxe3zB5JTY5CmvSCXdNi4ZV7iA7odpD5GHNECWZ6tVsrbTrQKoK7SjkHYRKcYDMrK5EUWU2WEMLDctxrELr",
  "key20": "3m5sGb6sTDULZejmzvHRq27gNrKhSLoE698vycAAbtLeeMA7TYCsxqYRkw9keN9guVTSHQQ3V7VK4Qgsnq6Y9LXt",
  "key21": "2ucTVxLraQzbXFHosaVSWp36EV5kyvqrP1uPN9PE9LdWNXRtXj6fgogr1q36JxP2U2REiGzTcVZ1AMMv8XuzUj6Y",
  "key22": "5sBf9ev5XioPqjXeXX7SJhBwVRCdNG4n6VNiMr8wL3zVzchL4D3tHHHegnoJtwgriXxVFRUKV8yAh1DuMEBhhXNR",
  "key23": "39zs8WZiQEoiZjfKxB6VtYB3bN3eoJDAnMe4DxeBssu8w1fHVckE7tBpeVxdeJCCbuNSre8nS4wzcQ5hVuyJVwHF",
  "key24": "2tGsxzSEUR7PyDSHxRoNa1FacH7As6hQuJn5gPYUfymPBTVkpcRCp2N8PA9sQLfwZMoWPpYnKUwH7cYSdbjJEZFM",
  "key25": "3JG3nBxyf9yHZRt51uXjiPZgqppN4hXbopDLeNCdMXUrVPQLdybxQKxgGZ5B3fPuQCjzjfmczsiRVjkPDyg2KtnN",
  "key26": "3egVYkpJaT6UKgiSE5GUjR2BrA3hfJaXkV51bqFrfy76jCGXzpKgE2d1yaE95sfDAb936JPnB56qsnh5sTi4q8Qa",
  "key27": "3gDrqT97mVQ4ajK5adYTyc4uVXgtzqzqX5zMtQUbykbVqdywZTsBRuJ8tiSQXF8D5nt2ePCYchyDzKcpF536966h",
  "key28": "3tedpZgDHz15vgiDgHMupoeUJKbDsY8228JVJUhzrrPnSdqp1hygo6JfZ7W1WTw2tMXoauWE4B8ZRqaHdjU31req",
  "key29": "JKGKB7563rjGcNAXMTDZMcoZCVg7dZV8bPYyCqCmJKjU5FTaANcsQg9RsZWuRTY8K6jqbFAgG7VAw5nzMT7b9eJ",
  "key30": "2SWzcnXFee249HWBwB9smnwMM4Xi8ZYSintdLU3NzX4KgCcMnuhfyqEh5HbYMUYdnLZsogdQD9kPfLPBPzBGcpE2",
  "key31": "enjF4bBnyzu91weQ8GTx33qJpBnag4VNLaqyYuLxdM9bfhWn5RowEWoEgwiXBFfkBxzT7aXW7KoLVSgJ9JEmxY7",
  "key32": "4iKyjnBEfaTPRPxsFtNLt115S5SrvUApj8b4qx3cnj6SWcoVgnjErCkKQGSSaGDJLcXfarPJkRMNqA7JkwPkLyM5",
  "key33": "uCJTbur5RERctpsmd18P5xyimJM1HjvJh1soExBbofrct9PJrDgKGjhur4A2fsJV1929XCYFQzJoxE1uqgLkV33",
  "key34": "4Rz9JNmFvhPS4oe3kChUTcVyGwv9oquHyhaSHTetGpqPQqVWmzqqQmFCNtcsWV7dkW5NMnUWsDaUqN4knce4NMHx",
  "key35": "4VcYxsnMpZ865goHTUncKajGieLSbQur83sSwDFDSf6sCixdzB4vpcGWYz2jAPCE5KZbvpfzgMoSV9BLxT6D6jWv",
  "key36": "2ef8GFHkgvEbWpvaJafyh7J4kczEpc9C6uXGCrKkRjmVdCup3r82LYjTUdwHFbYFRzLwLyoJx1tNUMjHrd2QkX9a",
  "key37": "5C2EbEnTQprpGxCGBjjfXCrg2uczCpDdPg5Komvh5KAM6LTLumm3TWwLR5Qoqddk3s5E7mz1dsV9UFxEiXSWynr5",
  "key38": "49qdbSXJCX1QkemTfnYB8K2FmsNAC72EK4D5x8Zj4Z5ba1MAjVjytp5WoTbjVWcHqLo3XyiZbsyoSH62T8iU7kRZ"
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
