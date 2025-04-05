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
    "5SZ8FEKpUx5UxU6XUHMtzx7ZfU6MxVnE8h9ZiSpoaPWxzRyK7wk2s4Rfy4rnrm6bV7JmFvxa1R5HX6zARRGM3CX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vpn2YGrL57gKJmvpqG8DcwD6w7CikJtwXgezcLk2N89ckUyMgM6zQDx2xiweEhnTChsJX2AMfBwvGASNtVpgWVr",
  "key1": "3mo4JwTgqCZFmss5kj2HAc3SoJJhqVXLF4gK6YQWRTBj5dPgNcxkZdKZCrbCTdumpt1F692rZSrnPk4kEZNCV6jW",
  "key2": "4B4GqMjuzs3acErzQz7qWruUC2KenM1MHNaBesdZ1JfQZ5tC3uF9jx2uKVnYG7ZkeDxJWM9tomGFgj6V28b5b6HS",
  "key3": "3a9bbVNe8o7VLGPEL6TiJJY5FhKAKb6CA8c8KHVDzn2ohpd6rRX5bRj1erKnubtEXZwjiRwX6e2y3RaxhtowCLHv",
  "key4": "3tV1FQs6fceNehFEZq5zg3vFWLV9636JuZmmKz66oDQED5GnJdxmu8YJ317mjP9NTRnH4dmkhZDLe9BA4ZRTA1Af",
  "key5": "5ZJP5EgQbe34cZH8WaL7N2Er7NQn5R8GJy1PzeV8YYu2zKGg8PsrajFUV73Sc5qhfoA6XL89wguZUyM8GknE2dCw",
  "key6": "4bpXQJdsWt3Bqewqn6uGThUUzWmmfeYZjPNeJmaqC51SCGbeFhjFHNNNgDRHokhaQdHXysncWzY3BxMtLjJ1t8XG",
  "key7": "2sPGtjEZyXdLQ8Ez73A9LBSxwM8HcQjGt2bTo9vMx6Zo4ZpcUuGYc9MFP4Kcy6nGycUKwF8vSyLw9ubFGGinKQ5c",
  "key8": "4PecE7Wb8nySVNfa6wky7MmVBJhVQjRejZJVS6h2U4ufwP7eJsMCPmMCQ3BEUeexLWza89cmePq4ja6zjoH6vMoe",
  "key9": "4wAtPQ7unngtUnnXAE2xGTXVDkLGxePcWtDrdUkxcdCuTCNsDxvY2cATonKPT2LWeRgeR98WrTqPZVA5TNQMH42L",
  "key10": "wzPvSJaAcjzAQbZWdSkUbSFpALFpbSwgS5sELqqonemjmxdH15jm749e7fhdDMjYVb61CB3mHFnJP55P1hw6HwY",
  "key11": "rRYkBTregyoHbFHbgzi7zk3MaaA1MqrtzaZ3PpLQwopFm8KACBCLqwWnixTCAFVPzdALFfUdbr3bsnukXjVrSm4",
  "key12": "4DrcsBXsmRe44En6UJXuJYXkmHeNuJi1CkzPYg4KkbnsSAd5ndJt4DRP6ir7sf5mtYUvfTdwbuRh6i5AgSeUTQ51",
  "key13": "GA6U3PVNZTi4WndD6CZ1CyNKa378UHtGfsRkoPKt4dgRNrFk3LFEK3tCL8EUzkwoTPj8cazZWN4u6w2ufmkFcat",
  "key14": "33CejvKFi5j2mpJvfLCrMPaQCaF2KdG5WuJaCHGogtx4fVC7b1HsGZcyepHVPR7eQJFDH2wMmSHuJp1HGUfuxmB4",
  "key15": "4PRVvSeM1nFFmXeLnFQvDnmsDAbwxpDzrsvZPJD37uwFQAXV7MztSNqcqWiwvSKxYP5ThtJEqebu6pp3iyqwm7j4",
  "key16": "2gyWWmQpP8ixSBvDZ7ta8z3ygQPKsEoNJwvGZbTVVYAJXWtkPgDLXudgesxvWdp5mnGh2Q1G2SwhYdhjstSpyeWF",
  "key17": "4qPeiCcQQ42rwhLHvRtHvwstQd2SUwVDSoUEnBsQMm7p3YB6bNJbTrfxtgwBKtue76mTJAWb4m2oFG3YGrHorERk",
  "key18": "3swvh8DV2uWap4hTxmhdytmYmyPYS1zrDkzWqNxAFQSewH75aNhg7GPo4cek7efukwAfCQS3kp4WieXAdDnctP3f",
  "key19": "gcc5wRon3QVeeeG8wqer9MyyKy5AfggCABVtv1Bv3xv8G45PqK6J178Mt8kkeAfpHhmeBQrDY3VtZZC1ZdqCgRV",
  "key20": "3U3fjP1yw7AyiNeAqGRxQHpCw533zju7TuHstyQwvw7FJ2o55eJm44k8htuVx56FY4bSHUi6FQF8wPNWayAFM2cn",
  "key21": "5WDVWPeT4KmcmX7tMtvJ7BGKKUemV6ExDr5VwVLd9qUo3aFkbpJAiepGkbANJWYQUwoJfjkfWV2QwQMjcWvuueFC",
  "key22": "5zpWyqZdhuofxgwQt8uhnHqxc4rvKfCAGDqLi32tccnnEhVfVS6cpUmRiPv9XLV63BxrxPBKBGsuSpjyeRJ5PbiS",
  "key23": "3wrh2k4cz4y9zca6UnZLvtLxWNADPQq29x4wJR7r8iVJxfToKvnEZoFyJAuQDJpMsUDLZ2zARQ1QCH826UzPttNN",
  "key24": "4g9d7nX3w2o8FdGR81QPjyc5ktk8EhD7uqxPy2mUtac1xMWc2PFqFbt6HEcqyfmxMyukrvm82MhpLmuR57CmvFHo",
  "key25": "3Moi8kEppYNvZQCEdnsvd3zSaYhcSc1a528srLsrn4ndK1SvQuERXFDVpqvdPEFvix637gcnK3ML77V95vk72Ym2",
  "key26": "2CDCkjNgoKTc8eWgou4njzxG5T2FjLUwzzMjawVr7qqeChCxgoaou9fFrc7hcEVJTXCenYXfx6CDUwMEc2Vmv366",
  "key27": "3PzhGjAZQRSajtfkPugWpdkKS5na3senhCY8R1iTLr7wCMRxrerFqMJ4VQTWF9eWFMpPhAw2cSkJo5fipPFcoqrs",
  "key28": "bqjJinetPNTbeUCeqCMXe3wGERD3mWgBeuismz8s2BvXYHVs1Rfdb652x6ZToM1wAtptscXzh7eR9ngZc4uB3bF",
  "key29": "61v7MScr6amc14n1WuoTRty1qV4HFQ7xsHt7K3AcEcxmisMHDQEZtY6wEXatn3LTRGptmLwmdEx8VjGt4PYxQv34",
  "key30": "jnhxCpR89TsSsnZU4c4V7RGzw78JDsKzgAUjbmmJv4bFXZWAhoZxewac4xW9VepcEVSjYHbaR1nyySRzmFcMeb7",
  "key31": "391o28JxWfqG8X1FeNZpjDQKYDBWTEvsy3HQkeoPL3vUh3SA8rKDzeohaYP7AWMKpoNpQvAZsYhE4bQJDYZvfLLZ",
  "key32": "Fu64HDoS48ijTYuCUwqDYw5R8vpAmiE116QDZnJmbtAsDctv4SJL6v4AvrJMUyFhHDw23DtAfzUqZHvzWAWoWyr",
  "key33": "4Lg7t3xMPXWesJa8hYv3Eh58WZYuEdNYBCRWwhUqfFFxABQLDLsgMF7QPMwgsomiUQpq3JyKG44VDMZmZsz3viBh",
  "key34": "61pNJesXTZXaMhQKrYHzWSHnA58MQ8Z7oQ1Siu4jKSr7zV2XjPKCb16bn6bDDex36yndpprcdhbAMrC8FfM6qVut",
  "key35": "5WZPyRFDiiVfZ4YAPdFTnoizmmyboM7Zx5XkLp1F76FDoor7uCr9sBXNquoFy8m7EG4WKBtG9NhuYXeME5fGs2Fm",
  "key36": "5vVXaNGv8UnSENsQUn5QDEJVBUDZg3fqqsLQu8jBLG6XyiCSnMHXySv2ejKPqoMXJy9nhtCyiheMoNP18ao7CgUW",
  "key37": "47V32ffKVfnH3SZQMoMhRaxhEkE9REtJAnPyGjZrGc1wbjzF9hQZZthCh8fSHxMFE2YcMn8cc1r8S5tEs9bMPe9s",
  "key38": "4DmnPz5pT1pJ84foRoXvNhNanYSdxGth7Ki5XWWDbuNMQpt9zX8FqiFYNsuhQwZMdHjkb1fJjZAwUnpxnU4GABEN",
  "key39": "2CsDGX5E9Pc5GCuP6UUDVBst4N8yGehXC4gNS93MQ79KZF1hwU4aZQXZ2k8qXTqY1dyAnveTfdtabE32StPtvGPm",
  "key40": "5U8sTUNcGu37tjUTWoH54p4YWV965KA6Ao5c8NehTDzP9GSti4LR4MN2LvrgBScNdryoCSiGFSLQUU2ZiW1ViNm9",
  "key41": "31MMCSfsLnrfjWrbHCccXWxRzbdjP3qJbpPL6jSYtseZ43UWNyq7gpesukGeNTJgiphM6e5yD1weyRUFWiysW7mX",
  "key42": "5L8WSiTJrEg1pnPwkjjtbtF6UDw6UkTg5FPCgrDQMxWW7GpsqHnG5EGqF5W3XywbvNN7BKjLJCkEcXz5Vz3DseWK",
  "key43": "2uCgVtLNLD6NUsSqXzDkUQCQ6DUE4s7kWuwcefqW518H4V7zqSDkc2RLAQuM7dVcT7tyVEs2hv5uiphxe6K8JKAN"
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
