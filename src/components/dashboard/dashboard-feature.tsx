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
    "4PC963PjtSYX2R4YpLGEgCzKZwsBJVPnZMpAJ3UEXUxaH3eAtJ6Yj4B6VR1GkDDA3Rn73TNCUbqHZDFEhc4fuj45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RRBT8Sz2pxGHJzQruKJLSvs9FY1i54mvZkf4dqSAaMV8sYAeZysu3f6ssnY8R8pruTgWQxZof5Kss9gXNRLRUNh",
  "key1": "5myTMtVtyhKkLdwyuVudxK9bUrcoikh7daLNDkrwpCJ9RvxzK6r7VxM3frkyRpnma3zCnEjPdSEwNZQVteZuBHZk",
  "key2": "vKJRAF9QCtoEEHoppBNobBDu36NA86QJeZ67Rq8DPsRetkn73WUJJTba4rcxVQxpgvgLvVzdw6QG7HrWNaHbBZ6",
  "key3": "8mnUQHMEWi2uk5g17Aw5npcvgKQQLLHNTs5nyDBgBDUvwwduzTNpSUMXvtktT7TdgREHWtK8nEQcomVecNvL1wq",
  "key4": "3SsDdeBQPfoe1QXcGv15zptXv9pms28G2aXHbKDVBfJ7kchRfmgEE4VH4LJwWThWc83bQ3ovvjFrzLwAJzbDXQH5",
  "key5": "3dYNiD1aFZZjokkMckiCokjq3Vwd8yy6Xi1BrM8UDQsbPakbyUrkj7SQVMDfzBMaE9X4KfnepN7F4DAKdpGbkZeS",
  "key6": "3McDh3po1hSWWKByNrVcKNVH3rPopctBvBdKUxDorxVztt7yAr7aYJyEywLv1puJix72agRXGkWmfE5KziUuuAEy",
  "key7": "42E7NM1mQteoVeY5yAGG3RDiTfzwQhzbrM5vG4girsswJNHqZhKfBee6tLLz8BR7eEPTyhHgz9ppCdjRMER8h6hh",
  "key8": "PvRKdubmzbg15ov7rNoNqG2Efk2knjDxVAyq7AUQeHrteGAd4swdcG16MrFdeAuPyXevkmPELnGDQpjabH2WDNg",
  "key9": "2LdJbnAw9sBVP64QpjrfG9k6jnnt14goGzNDHN9snc1r7HK43kKwSxNGwB4mLpQzk1oqeB8yfLWtnusZHAgbHcC8",
  "key10": "2RqEZ8rBXS6y6nuujjneAnvWsZbpWCZuE92VaXs1ajbdKLPp6pu8TTsuLtNTQC8UBUEqivQs96XQWKJHS5CrjgDW",
  "key11": "3DP6n1gcK5MdgiGpjahWJ49KXnp1KJDx2oN485u6d8LMdam5dtQBdRomvmJBWZRsjnhHhxsW3Kni4Pdei7ssUwDg",
  "key12": "5A9m1eep3JVPmMgjzwNy4e43vdC2wYocPPHNkMt7KbWsgaXDcdMPXA91osxaPP8b4ogiRVVCSaQy29oQaUNa3hwV",
  "key13": "3uCzcycSDbKHpjjznJCq19gFdUgxPxpjFt5fTmsCTM7SHTqbgKAyL2QiAK87sKaB1HAMyzHvQLPUH4m19ZcWpLiL",
  "key14": "2dxNp2wj1que8usjn84yhgGnz76GCj6Kt8xWLS9KezSEDRzmcv3EnD91jLy3H15iMni15E7PY9yQeYP3xK81hEtm",
  "key15": "4NLP8adyJajgLiLF8ft3NqRLpV1Nu5mhLaAH25m7ZPTXFVaVZayfViEvtkdLg382zXUMkvGVhoYGRfs3FLj6W8D6",
  "key16": "ZnHbw6izEktz3zUpUdevf4mew8shne2jkCAiY7SBDRS5kCfGbbUMBX4h5cJy8xoPR8iyU3M53eANapvzCWtGGT1",
  "key17": "2y5zXj7xF93KnbyBUjs4ChTtgL7drubi1uVAkACwtQKprsPzdXH4EMQXoKbRnh72eujarYVqueJD5SwLPDZqumy1",
  "key18": "63un5zMBNu2hgMn2L18j39rwpxMifcu2aXRYQNCL4X3LJdrXgVZPFcyyChc2jih48R14aZwGdtgHbLTdPU7Ad2N4",
  "key19": "4Lpt9HU6gCGNCgQg6efEsihRKvTSduZabqbPRGJzzknibvEpmSSiZhgaN2dfivGTj5PxDxogEGQUZvpVCqsPQ3W7",
  "key20": "2odZUEZhJFzkpMgmWcvM1bEkUbhmbnWto96CreiJHyw5Y8tguC9mUkXbK4MvYNigkw83os2UuooTHcT5pUdCEhQf",
  "key21": "SF83TLJsgFmKTjRJJng8AhEfob4tjwLYxEK7zjw4eEWStGB12MfWbeh8YdZPrhpSLpVxq3JGXEBbQUnRMFBVDcA",
  "key22": "385tcwS331EkWs5bN4zQ7HpUQ91LjeFSJ6iFvXXHKoM6h6P1nmGPLc1A9ZPXmz3CYX4a7o4afFhuQux1TYgT8xYJ",
  "key23": "5tSh1DKA5hNq4xWFudvdX74gN6Qdvi6urA6jHJ5eVJMogLxNH6LWQRTS9DJ4GuXT5LoF8JSrcycGh9aJeAwcKQM2",
  "key24": "45rNjYw5aU1gR8fL8JcpdZwkqyEnewoNiJRmYpdpJ6vmcY17zUs8P91JiwtDVtvwsFtZ3WhiB72JXksAHLXHUfWH",
  "key25": "2jj131RcPi5rgfogg3ZpoDNFM9jVGVqAwYbXfs6cDmSEW3wAYoogz4z4pWFL9FK9bQ3rv7e6eCUmxvtyDp7PrHek",
  "key26": "5tphuvEJkAHVGKdJD3EQjvqgbXebEpzdVc6FNYmvykVc7SQrCBMoSpH8f5Cz7h6yEfS7yWchtaisJBd1VbuN5LmR",
  "key27": "2bcEwyML999a3usgxRyY4D5vmqiiAybwCEiyPUsx9WZpyCnguyTAD1PA3MjuYgoptv8fhASgH6TrmzPZrNxv8ZPU",
  "key28": "4W1fjdkArLLBcTZK69wVEX988CPV9kViapPppq9FqvWVtM6P5474iarqyq6PXHug1nZeCKNMhcthqeb697JtMt3s",
  "key29": "3DEf82r4E6PoGpeRYnj8FAA4AcTsU72uBFkbvPWKEVY1UyvBYURDdGyZM51Whj724TnQ6SSfCzzDw8ijhDo9AYDU",
  "key30": "44XCs8gGDo2TEWPnCy9iReGpkMcL1rg1DB1BhxRALZ7wN6QdmDbzHTp7Cs5shtKgsTiQEGoqVb78PekLFctcSXuq",
  "key31": "eU7eRWtMbBxxa1yBLAkMDzRbDpDgkCoLM1ak2fe1BYn3AadUKHLpoa2G8VZpywy9TFYCEN1F59AYVqGCfq8xZpF",
  "key32": "2iwVQLxAdTszqyDeyDm8LK4Rd6MMqRjRV3MU7shrFGnnnZSycms8EjCsAP3aCStMn81if4wCQgv7vcecErEbXYfG",
  "key33": "432GGi9tT8JAKXitV3eCymg5NH7ZyQhWTwxsVuPqTmpdNKSUGvAmx7XreX6mwrHsg1SZo75baZJSoyBGkariiBS",
  "key34": "61XnF3b9GFzN37SoJt7XGEBWsqKFLtjiQwLo6Agcoj5ghBWiKuDXJj2qqHfLg17doSstxjKuSD5rn4CRxKLRqRwP",
  "key35": "4nCZcDwCNznqGh6NqJ2MYVf5YDg2hYkeonuaawtJhS5E9hUwdXBPvbAc8cN9kykiu3sjMqMbmZCsTL5m6L51Pj63",
  "key36": "3MuKFbArLhGpW9ds7aXpRXoxbNnfKueipeuqnyQG38pKXGESHBpCLYi9jU4zfjvhhm8nS3AA2USnSgM8babVjGLB",
  "key37": "4cUKkNJoqyd45ad2bmLHQ2vMwAvinErvoaeUoaFUJQv8Vk22sVAo858TjNMCtfE1wSM2kdfYQzRD9KaKB2TG3ZQB",
  "key38": "5u5zy5tjkhJi5ngfxbvPXVe8Hzh4rqwcxMyd1jEbnfhb7ny8kDzWzSqP2TsK3uEwBX4YTJDJgri5ENZAXjFe9rcX",
  "key39": "3rypqWLnufkrbEyrYhiiThyw4EB7fiogSULbDL3CqfpKPnUusu2VMB4QnLXuNZuL8ksrakWAiqUj1DXyGKi9KFKs",
  "key40": "5gs4qBS18MuW459JwUc5gkT75tPxJcsbJfn6jBhd8K1PnVe3c38cJ8u7SY16BjEsjERENJhRxXt2Rda1eo59w6sz",
  "key41": "3zGmLC4ysTot1iBCSY1fz1bWApokLTGzxb3tqVtUt5npr53ncKhyZCK1RduTir1FPfTwWSGa11Ue2kEmjJtPrhJy",
  "key42": "FDMQcRPPCaAz3ncx5oucLXAHMb9uHNvARQeusqeiAVcD1Lz9KdR92ysrYvHj72CePNupRZfCcA81y92F9vQrS5s",
  "key43": "3W31siaeBoprj3vzY1LRE5hanKJxmGFq74nkXGw1fKbDCfdGjaTJvumb6nrUbhsWpR5JeKSdZ1LZZ6jRNjd8QdfZ"
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
