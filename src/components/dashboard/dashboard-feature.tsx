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
    "Z5AfNbFkp7Ce9LsDXVFTG1QVjBNwgP8Qm4UvrvD5frkefqubmqKCVPazMv83m3qUknJgUH53mPyVBq69n7SE15T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kXz2uWR2CG71tLSRXHpjwRx6AgygNiNhZyfrRAgFMuqdJyLdL2oKTYe8zMrDt9bY52UMqwe1RUH3d4wV6TU5Ntw",
  "key1": "22XTkPPGiXAuPiLACMnk1EVMXzsgLm372FiT3b946VzCVeA1joXx5bPuoXY74CZJUtyDxwSmZmPDTxJourgMKcSg",
  "key2": "5BinR9NEWUR4vriibr37viFyPnkdTL3SdCf1DVBepF3MNrK8Z392swqYNQmDBW4PSUGdtB6zq1WkkdWpt2EcUnyR",
  "key3": "9bRtwjpFETL2eVL4yjUEjgw5x2ugFsGcBNde5uQ1Ea6NtPCoY4FvhDVu4u1JYz4PUKysM8NMro8UbZ3Jvt8n6r1",
  "key4": "3kXwjTPGSYMSu43PksbLxRV7Hu2Zq8cumJHt2sM4ztbYMmy998guYC75iYQFgzzFxRoADRGUMKcFNUB7vZvtixQ3",
  "key5": "3VCbQfKiQ2p6Rj1wQxgw2eqzzGaAqJLBHJDXkkoD1UcwxfzQ9K6U5VEeFoT465Ve7ZkTkWrnDEtS7dRPGqCD94ZF",
  "key6": "2hxaXB3pjEa6NaSNCRv3CmWwB2bMFvNQTC6URi5avjvXRE6Y156nAPbDKgdN1R2f7ozea792buuf9jZkiRbZPYAB",
  "key7": "2iykzANMBqnkQyxipkpkp513P9LDMNrQYCzooBgkB4X3kxsNpmNTptSMt5DuGrpUAm2Tpe53EEdnrMukJ4mvxJLt",
  "key8": "scNXLG2VioizAEwRef1BALNprChBDx8Uk4rP3wBg7GqXz5jFN5Zo1hyGVnpVyU1fTbFcC4A5rgsQB7fcfLNMYxp",
  "key9": "3SvJWp26qVvk8vGFu6Kp8WERSasjoS6H2qJAGNNFRntdM7yXM7vgqUkKSYXHVPT1X5gEeoDwVQLRW1yK7aivYf3A",
  "key10": "22zT3hMFV9YEffAYB6aZLpEa4ReB2tJHPQPFQSQuRCccw8J819xPSFedvXMgsicgs5pz4PYdcbNhkWcX3nLq81kr",
  "key11": "2vD87ToN7bnqEx8282k3WQYT7w5NpF1WMxEnyobgM78r4w5pUA86YSziyrUGhiGT4Wn6QmmncE8o2x52wccWcRpN",
  "key12": "2CbKV8hZFJpK1ymvmqeThQ95N3f9nkFaoQAi2gdFSytC6BFavRBCWg7ueCq9uEHqqqwVnMAUkt6nHjGmusPQxNNR",
  "key13": "4jzugGDZCwgNNdBDGsuTok86qTFTnVgpXwUZ61EMtYYLftz7jBXD7oLk1wZyMRT8bxXhgCdMnUK1P64mEm86vuqg",
  "key14": "2sipuYu3gXTmnFsJxnrgFG3gwyP24DUKD6yPPpjdED1UkyNJJaWHkPftHBnLjyetBpqXVx8BFXPp3sx4PPdw6Lzu",
  "key15": "34jQEnytsvZvNjtWf66TfUFrBdBL71g3v78zNWjfkhDy5NAdCo1juJXvLQtgefHddgoyq34XpSckpRiJtEXRnYr9",
  "key16": "49hSLyT6494d9fb9XbbPqKBmXgzFgh3TxHqY7kxspDCLsRrky83ugHbcEgkEjBVoTem7CHNiD6ck4wXYsTfcHQUm",
  "key17": "4o9n8AGzQXP3aqbC7eP93rn8r2U9Pf4XvMyN4UntjeXmJnG98vYSnTsMzbEuzScq7uFcwXp5NEC4K9eU1SMmRRex",
  "key18": "3ucYtBJqCQ1it7gTTkcYzi1UHst7xvD9nRc3i95DE2YM2vLXc2faJRrwGXgwE8dTDQ39HCM4ATKMjixUsn7rjAqz",
  "key19": "354goj6SVWtTqXpu9bDruhASKBVXARHhxruvDHJCpvbTV3joPNeXnW1gy8WWvmCKASWuhWySL97d4vPqgtgaAfU2",
  "key20": "2ZMhniWFJZfptkq1AfVVWLvWiZahX1Y32qGgQoek45a2pu4g7VS18KrgzMzuoBAPAn1nF2Xa2DYYQg7ERi6EVYP9",
  "key21": "4CjrrPyNBeR5zgM5eWEVayy1r6QQDwGcWBSp5MssyfywrLxuBMDkk37sGUBFvdXBkqfsp8VgJ5xPaZ7oiNR76u4y",
  "key22": "3DtYf7nmKzNhGrouapWExZixMB4D98Hh4EQeTUsDLTK8pu4yMmT758LdjAKNhPzMKzfNeCFuaJr4dNjQ7rkmfiia",
  "key23": "4mLX9tQbzrvp2cE9VVr4ArTbX1JuGhJTPat7jrC2kYJGaW9qyhs13da4SGromSYQeUQubaLYh4rmtoxD25175vVP",
  "key24": "Fzv6wPYg1zDCr5pvxu6QqBTigRybEzApVRox8ipqr1Pjyxi8iYMjeKZsesY9RHtZjPNJMHcibkWMoCLrKEzCfXw",
  "key25": "4bFgEVWXz6EhBD1tmSFDvrHaVqiP8xq5cmFNtexbwrsyQ9qTXBj2E53hSi9CHWspD2gUHdNhnLy1aqYrWTFx6ZUF",
  "key26": "4hWKrXAAhEDDbXaCgXKrEsZHEYbfT4qhsvhEHC4x8EJGrukzPF7Nbfjm3vj4bJTc2fN5DLnDsiqfoztWPzqxTL3P",
  "key27": "2R3hwdJkLwTzhYCrRqbkkJeeWj7RgoiJYBkfAVACLaRq2cgqytmWSxNwm1kT8XiivdbwEPncg85VLc9Gzb3FxeDE",
  "key28": "555WW54KznTgFE49S4fZASHGqR2JUZ7httY9ztbQEjNb9mcSmXv3fsSzphkpEGwcyCz3o4xzFEjivjUahZKvHQ2B",
  "key29": "51kky6Z7TWEj6AQGKdLBiTghP7oCkwmgRCoeh2fCm4Z66vBgQmNquzazT6dFDyDELLY56M12PMuwZ59pjKe9DomT",
  "key30": "2ycedH1S35ovehTHyTyYe32wz87n12dAN9xut6vgq339eVejYYzE3DRz8FoB7tCDMqf8AVHe9t4gEff7mEtrqaDn",
  "key31": "64pq4Nc7tF3zBbiFwQiiuCCwRohZLSTBTarzLyDvbQtSBjTEKehTJwDt7fksFjFv2LpirGpaMVAFEhvwG4wiCsR8",
  "key32": "5BtLm6JLZM5rWxMJm7Vk2cWxwCkJDdazD4mScvG4ob54Q7x2pww8QzCorZf5AMdcdvEnSb6fJEhA1R5yKnUfETKT",
  "key33": "28XjCQbp4RyqwyaMR5fCpMuXcFGSjVy8xc2myFgEW9qH4WvJv8o9upZu4SPWkgkk76eQZRRwqaeaKFhr4MF1S96V",
  "key34": "31cmA6exybnCa5WRgmegNepSiR6gdW7UQibzEq561i8xXJ52x7NcVT6HVm5dRGjz1U4ZZf9aGpQW3TJejER7jLRk",
  "key35": "3sfRcafLCbedXjiKpNQuyJCzu3rr8wGKLs2AuxCdzmhrJBmYCnyntCPJh9qF8xmbSct9y1okBobwpiBvC2V6T6rf",
  "key36": "51U7iNAzNSLH9Ez5BkPUr3XAguq6muFPLwL8uPWbM27jobQN5L4ZUvkBXVNqJvmy9jgXuR1G8V7ndaPARgTQsYnt"
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
