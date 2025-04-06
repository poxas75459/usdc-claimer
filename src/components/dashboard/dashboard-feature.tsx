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
    "2fHTqFqjZVPHzAMwJcnMTpKh9c4KEQzaa7LDFrsrHhzVcvdYFANRczT8NawNArToBiUskDUextgFrRy4itrhkPpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pcyqLk57vrtGa6VSgM4qwoVPGFtGtxPBNHuig1qmX8a48FfwqJjYsN2QDv97Yr2nF5cHHJpJznTAMBnCnqbrqKn",
  "key1": "2KueA6gBgeuV6Dqd1gA5VPc5DzjpEtMvupCNoX5Cr2JoJmCA1Lwnk9SdiKkapG7LnLKiqRAXqJ3auEUGQ4XSQ1dT",
  "key2": "f8YvGL7bPDi4DnWviTJq3eTQA3wY3SSCsfJwVd4wJDizNr2UVrs89Dki5TR1F1oKDY2S5A6YiZN9sTyEBHYiFk3",
  "key3": "5E2VyBmYeikbb2sUafjDsGYBjB8DvEi2U2S7tS36XXWJ52rJLN7GF4iGD7oqvCLUV7XouCizPXPEwZcknioeaUkT",
  "key4": "wCZW9xQthMJTj1ptTQH2XUY6gUpYwK6W1phRTWo3Au7sQW5gvnFbTGqwn1cCythXQT7wYoC69xbLsNebWf8VPfx",
  "key5": "czVh8EFw4fNvVC5QrwSStTvqiS3KUm3YEVmL6zXFhD3ZdPUFjpTXYhGuTHMAj4asANmxPw5GYkhrF76THzQafrV",
  "key6": "4NZCthDWVCuAY8ALgYyZxoJfAXtzRWbF2k3pnAgHs4pBCth5XmvCh3PnEZ4Bu3FAXBdNfHT1vARDShzFWd9FztZY",
  "key7": "4eHQQgansTA5vseMYfnKq2Mzitipy8TVGJ7J6je9pAZ47svvL2Ls3NrMctvJehHeqyoS8vrJXJTTc3Ef81rSgpVV",
  "key8": "2brTM2qNQSBvYFoAAXQhF4Zy5x71dmpwxPDsnfhs3FfgGjKGqtP8HDM5N7jperbeA1FHcmHmPsvs77mbMM9XfErD",
  "key9": "4gZPWUATNBsSShPKLWbn1Rqd2dsA2qwwjdRSHeKtefCLGoMa4dPJM2YcBrF6d3gBPww2qrGiZ2t6ePAYAyKv3tZ9",
  "key10": "2jfHUJv1ARLkfqXWQ6ewEVaFdbwiyTXzPH6SFyAhu1zweo9QemTckTiWGF79k2GTioaVX92oxaSzQA4KU9qoJxw9",
  "key11": "23TnFc3UQTdcEPZmjbZeavuy7ip6h8mLYrTVN3ccpea16bsm9Ve9LeHoVH5EMiNHcNdrPTNVWnB6YytC8rUbLPz1",
  "key12": "2wsuvMf2TH75CZvMksQpWRupS4ce7xzzaWrLXC5vWXtTFQJz2pZUji3BNH7xuEnT3EwXDUoPnrQqVYVXpm1C6smV",
  "key13": "28TT4V3cofMUx7BrbL1v9T5Zs8Fb4jYbZCtXEaaASvQjsgk3M85NeNNQeBHjgaPTBnaECkyX34nMXiRsXURPWxCX",
  "key14": "3L3AH9e1DhPBvDM44PLsT4rgif3GFAPHW9x4bL6v5XJAi5yXEMH8Kxtr9xivqsws2N6d5zk6mQMwcLmmLhZP2zQM",
  "key15": "4bmz5qqdswFWkYkg2Fr9dkzdsin1une1TS7b24oWDAJgKTggGPoktte8X4BgPxrB4EYRBEzamakkY982DuSAw4Ve",
  "key16": "xm47vAPjAkdDWt4CtMW5oP3B8VnAJ8TAqCUVvLhSk2XcSwnifMQTr33f7gBM9MVU9vsuqttjxF3F9i3ysWymabC",
  "key17": "4YykP437CB3Ba64dynTo6B2jQWw9XGGm5CqFXQGysQXesTT1h7LvbkGcku9e3vxPMF2bYuoV6NDUtYNXBC2VmHJo",
  "key18": "5vm6bG7KezT9VpeSLD7EaRB172SAgZjS2KnLTo4C1NLbNV78Afryx5AXhRSnppCFooBDZdTQfpC9cDx5cYxb6ybW",
  "key19": "3EwiVERWeb55bujBgCs7uNxbmLoHSDAk1JWQoZgmj75DeBPpKKhWLsU1qPynDFTk7phP2M7iHxP4hoC7tVujzrUE",
  "key20": "3f6p79VUBFiSCNVFDv1v1iU1PHxbAkNiBNQfnvu3cKZ3WaBY9KcwWyAHBAw54UWkqaWN3zcTRMLGJQ5QBZgGofGv",
  "key21": "3k5VnAaZh22BfaWCq9VPuTSwmXB6Ku1b3RoDeCyV9ghjeWDUxMMskMXFqevLRYVwM3VivSwwBd79kZApjc1Dhpf7",
  "key22": "519hGHSvTJVgS8Y83aPHUGSvPS6N7mbNeZQ2ETTLEh3ZDWCGDZKrmYL12yGP4eQs4MaLSD2gFUCi66Gxc3BbU47w",
  "key23": "S1vcJrWzBegPdzKrj9FTBiKgxJ8j74nyU4GdEAfnh6EKZSQyLHouTqAC4PrKsfRQCcuN6tE1sXdMQohnUpNVRwa",
  "key24": "5jjFtbTv38LSQzJHqHiS1ncvHnmqznSHevMWAzfaEv8Mrp2hvHPLEB3LJ7XMNWXdrdUmkxvFaLGurZXpVfVrhUTy",
  "key25": "4NWcVuQharH1hXi7EngLFPY2uKKqGxFKYmWK4jh5Wd8BfBzhQoQ6nHNC4DSKcmBWR6MjjFRQDXorCMDxctbojTvS",
  "key26": "39TqiexcgWLGVRvcn9hJacLzcyhSrXQFrXBWdwMk4K3N118n1tSyxrUcAJoCjGGtq8oYEi4wTzdJmA6bz3S6rwD6",
  "key27": "3KgVtwT4M1xrhHvPAXTAQYVwQnzSfppcdsc4bY5PcHVu6mMCf9XWeKZ7LGb6FHwaTvUhqetd8QyotiTkxhv8zBhW",
  "key28": "EGBGiWjEZr3xtkfLmCE9GVb84gGSYVibDsfDBaCHJyG4t4y9LiNwRuWYu7S4nQ9TvKw9Rbt1Z9MaUMHVVaLrXMZ",
  "key29": "2Tjx5nKVZVCuzh2NXyEtpPg6Rsru9azFrmLAGdYrtZPfj5GgXn7fcjgUpNS3BK9DWBxggZsoihvVBi8GoqxndfJu",
  "key30": "3wzbRfhRs3EGFhBJhkREodC68fmMedNzdCh8xz56HxGE8fype36MHsLPTbo7nfHC2KcXgfAjGmCMZGjGTLwAiM3q",
  "key31": "4a38AZ7ccr1MTdKGPoE1CrLKdUWr4QMdoHPtKV8wxMoq9d2JkGzefF2RWUEsFPXdsfBJEi86XEu8BAygGVv5t2YG",
  "key32": "4zQCmmoV3oNLVp78k34hF4AVGgyYDVV1cFkkDVdzvVDwnCpP9XRLY8UH8yeAb1t4UqTB2yiYEWRMqrWYhjkLQT13",
  "key33": "4sYVRrKXeZZGknceDi7HdQoC9PDcfxwtTRQzX8QW5QfdB7GjpcuG5wfNSzUyhdqA4a3ctCGGiUD8E1PeR5tUneWi",
  "key34": "4k5wa4FyggMfmgbBJ4bAysFzREyB8baRLwmKLZ4Ug1qJnXFXh8Cquv791tXRxBAFsBWHbcbGSjcADTh8rEqLMhR8",
  "key35": "4dWQ6vHWjV8wcb41vQLUkRYf7SvDCzJz56xLjQJ1ybKJ6XiRjrJvDNUwa9HSF2ERsDvAcUdW4pqkJqJyukRAUuvF",
  "key36": "3DEJZvrR7cWKPsmCrQmdPL4TdXW5KGoeC57xMRzvEAKncW4GkdZ6VVR4A7JVS92A41nG8UzeALrErsB33qucpnPZ",
  "key37": "cNHZBLTCSzXYbWoxCLtMPFWMDNpwLmWVZhujJrb2ht7QSX38ABQB81tFg2NWb8tZ5Z3Sij6aMsqqz5gPn7K8fTo"
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
