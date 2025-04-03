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
    "2gezaN9VS3vVHDLKxGBgnp64898HuHqdX7kzRBbmCJbcC3QWaM6qdvnLkvgCKcagmZjoWbchRsHUkxpMGMc9wP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61cD6yS74T9YRbAWSvJNhW7DGvt7BCFptmUwJKh8cm2qvX5rHD7F1CieeaxgRZn1JmUgs2o3hHhDD1JLnx5JszAt",
  "key1": "M49FhJ1JgqpfgDeMGuNT6F7phnQP8vDXuRGFX4erTBjFAFZ5Lud9PeP7hBmXJ1KMwt2o4pxQnPf365XhoK14Hyu",
  "key2": "4kQ1fm6aG3xzYinZc58inF79ZMyCBAMWmiXee1K7PQ1T2fTtmbu6FkWtTbwsRpcrijHYLrAyohxfyKqkM953AP98",
  "key3": "E5sy81aEXnmuLGDiYbMFM8FfCLYRfFgrsr4aFgEqTHrm4FWo4oR4vKbPU71CagG4oXYfspZ1fzBksP1Kn8L845c",
  "key4": "53KsbDVSZicyjwqPGxfitSXeg3453wgAziaT3DCCUu8ZEdjxMGqz6rBjwsrnhpsqyxp9sGpu4Bgybw94WyNxPUWP",
  "key5": "65TQ79tajYVKbo4yXeLopiwWLbYQWwMSTVtaE6c9KX4SxzZMm5azXCiAcPniPvumrMJz6roRw8zboHz7srnwkyaj",
  "key6": "4hnnRN3hofPGzthm31rhS9DNCRga5pGgLhYaSiwf7owz7Gvr1k7tk4B8HUrqfT1M5ATwdu9J2ZVL7GwCXxTJb7yJ",
  "key7": "3gifyATYz51JkVtT2Juzu6g8CY9So4xr5KWBU3chQy1N8VmxMwXAhcUZxbBWrdXjXKMRNhiQPmMFa7dxeaq2du3X",
  "key8": "4U4o6saCjTWnZuEPmx9iWzfpqtTRbUrp7jJSWqdNpWmwwSsSBgGYNJutK6BcmBA2GnpPpey6auusqugYCFvbfESA",
  "key9": "53YaWvgDs5frfaPYn2cqJRa8qTnTkbhR5seVTQFLSDXMqpLhdw3xzAa6HWZi757nERguBkasbsrMzhUhkRgc4scC",
  "key10": "4j9R16a1uaiwX7LQhL8QtSXAYrnu65by2YiYoyHqoYnGBeYLkotAatLDs23UM3VS8hhB2hFGw78RANtQyi3HY3tq",
  "key11": "3uEfyXURYx7qtSXiKwLRfkDqkASnwW9SUF3HX3LRMkH1NTkU6BzxF7akXTkjeURuvXnd1hD2SA5fXtx75CVy4XYa",
  "key12": "2rfX7jt2LFbnqBgvbH63f3rEA7PipbTXRGeYVLibdLWME67CwF6R35jWEn7JD3FNv8xQ2JLvyQrhBHGPyWyiiETu",
  "key13": "549aVcAiDWRxhHa287TYvweKVoaG3fhTNU8KebsGSKfeaW2n5GVaWV3cVdx2dCWX8fT5YMnwXvXrSvXZCqCUQMds",
  "key14": "4B45Gi1FY9FswvVr9LRrWWvHgJsLvNQdtd8Fbj1rL4nNxj8C8uKr82psNWswnrd9cEzxBwmJu3TAP1EtanZzL2FF",
  "key15": "58sj82N7NjBK2EEX6hm9hybJLt1zMQjCnwMRKuqDodX37FqznmxhCU7vtWzvHfWQYaMTEiZbv4TWxhRAcKUqpXZs",
  "key16": "Zgaswt7uKiAeCjBuv3CCYnCt15UYz5369gqzUXvpZN5Run8B5ZSTrXzWGbxasq2QnqTiemXPFDwMdw4uDPFRxCW",
  "key17": "yVB1fDdrzUsZHsUxuUGAYr5YGaixj7uKXgqzu9PDtqp1oRGNw7BPcmTen9fDy6LEqTETYVvtDx4gx2PiLRc1MDi",
  "key18": "4THLSf8RVNaVTBDrdm9o3Sgce54r4yZmb4W86YpsBtFoJxaUtMBxNTKt8k7z1bSGNoVweKizq2u4tGySBFRbXk7h",
  "key19": "5eScSWxx9qoMHzkJiJmvwAfsvXctmhEaes6WfmyWr88iDNGnq95Tn5yV2SCinypawFzzvp1f4CvsPoX4L9JNSAWb",
  "key20": "21jvoxDBPvZpvVeQR47AyaExPgDg8RHptmi59MK5oRPGgfoW18pAF9SSuzkjeyauSUcBfy8ZW5stotfw6174TYzK",
  "key21": "4gBSvYeCR67M441uNy3RxEiduJem2vEWA4WkdwYknRbisT96Qc8b3DdT5BnEhgDwpFcLXPRq1oXni7ULQmuMbagC",
  "key22": "4PpANR4R6HumNQHiuEp4xzFAESEYRpE1PFcmwEk7X8WVcz1JEeTfv9Wvx2ifsKWmVvJyTrnwioMSqE4VCHiobz2A",
  "key23": "eiiJsQ6cpQcuv4fST6ZTQCc4d4JQaEHBJkCyfVstCsRxPBHBsvvdk7YDGZRCCYcP6uaY4a1x5YdZU8EUJY62Xmc",
  "key24": "4VkJnkKSUswqiLz8LCPGpPQQzNXoMwB1XiwWqj6QXuPt8PFwc6uAzKqkbknBj7f7YnKoqi25YtfXoSzs3QdZPD4C"
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
