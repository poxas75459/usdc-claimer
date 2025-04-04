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
    "5Lb4fFUGzRSEKUXPaDimbXrg7hQ21XakhHhrQ3Qbc38mZJKapjWeJm1AWLm7VPkchqn33mg2cEHF4oLfmpmgVCjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZLPNANcUqjG7VQ7ZobvMFMnRXwrmYgH84wCLh6DPFSZ9aUWUbLGxJbMQDTtNzPDw9hYnqjsPyvzb393peYvDauQ",
  "key1": "5Xh4Rs5Pricy3g8HdNHEbVuJnmzKrcKeKZWzuC5aeaZD4av1oUdVyhdLuhW94e7p6Tc2atRS1uyzattQRvoB2i4a",
  "key2": "fzLqnxM1PvE4E1VdvVVSXZHax7vFCqAvRXR2q4z1ZWNGJ6uz9MNkRTqUndwrNUW4xvv4acrmgztZruqchbQ5e6a",
  "key3": "5AhHVPUXJMG83LBC3mMCEGtVjqrxnADFwKPe8xwKY41apvBPcep4TUTAAr5UphkssExruwgVftp2tpVZp7vdLqqE",
  "key4": "2AwspBJwcRSzcMua5CCqXGd1moFoPXwKnVArgwWCYw9o2VqdywhLyQ5F6xt9yzYpGyfTxdXcAaCD1p49LA6rGhqw",
  "key5": "613H9EbHVYU81jGDS94Q5ZbX5SQJG1HgziUXb7oZ9mEuAaA87ya6eFsZ299qvDmXBLeDUEb7PoCs6wz3Hhtd64ts",
  "key6": "dZMhDhPSePru1ckMgEuT7GsmwkpKd6FhPYRThM81nswKE8Rypssq2dtiz4McxEGhshLCUfQ5DrjW6LdFEQoSiVh",
  "key7": "5Y8YVKGaiZDKi6etVXd4W6ZASd3GWeiJMua3UBHEzsMZja6NNDkNLQM728f7W8yJsABwYoBvv2MLp9zhibMCJ8AT",
  "key8": "59vkuLCofbyJgCa6rgLNYsiRZPNGzaAFqGpyNxEnrrbXi5NuzHSYUZA3h2amBcrfWHzBHckJxoxykGUHdke7tdwZ",
  "key9": "57Ty7t9MrF3TaE9hWKthxtqSYMhxuxAc5HwnKDeY2nRfinQMhS7rGNXnZpGgF49fCuSCUqvcSPEyaMCkWnXerSUB",
  "key10": "3n4wDiD5WgXYmrmcRuweq62iycuRFBhmgBVMiTM6H9QFKBdPRBWRdq4xjbLwgHbYtYgZLzWUnKyxbdxqt7snZdSR",
  "key11": "4S8HuxUWD9WTfaB53Nntk8heF8dY3QFtpdL5Jr6n4rJAu5nq1fvymsNdXK87hY2UgLkb1ir98qqakRVUToRJceR",
  "key12": "5ZgtMr62Tz3Wp85v2DtDoLMU4KkngbBG9Pwfeqmq9BqtV2Yd19QQTXwM6DM6DMTw7nENSPRkGvHYBcHLoQcYLkfp",
  "key13": "4cABn1xzGaxVVPTzvQPkkfN8LXnv8TMsq32cuYGPWCEx9TYx9gAvhqjt9mD6mPUZBixuFzYkBrcT5gXWECCZD5o4",
  "key14": "52aGqgdTvjwHEMuMXGKXEqFwYRRpe34XW23tcaHYnBXkDvgsnCLTmxQseErQzz2vAibdMevLQPr67gvSaEUbanYB",
  "key15": "37xTn1MPEbSjV4bzEJwGMwRD3ZwR11GC6nXakpM16CehQaWnXSFur5v3zoifdJr9VN1f6bApbD8hgKoXDwCHpY43",
  "key16": "2ujYwFovHzX8mmBt8hThfLsJRfrfLRonqpDPrg3go7ouxozvbss1ooUrg3Ethh19KoQdLFy3amLT3r7Ds7RYSD5L",
  "key17": "4aHzjECUZ8TsJcQPGxyzz1AH1TRgQRuDpHojSf1huYrRFYuYMqThBzdczrkp2AjvWKZygoRMXoRbngC1crAFXMrP",
  "key18": "gdkdDvTwLA482g4uVsVa4MJJBKrEZS6ETiNYLJ8xyEzXXtqHKVwPXCryrG5ByiMnzoXjRD8EGixkG9MLfifCMJg",
  "key19": "2SZk8tLW11UZ1YWQWUmZomc1YeSSaxN4tzd5HddhovnpqZN6cPMWkbzbKiESVzENfWg5x1es8jqGEYiC6mknf3fq",
  "key20": "3WwXGvNEm2FKxHFEu3YxEk8EwYjqXSf2PNUQNwdf834JQE5nwUjngMDqouecU2VkSjQyYmkiUZ8nkEHanrxfMeEa",
  "key21": "4ARKmm55yQK7ZhSrdm3TMUHrXbhi8VK55Ka7pfakGqC7h9JZnhrGoPSDzVguSzaTKXqsmfkHSF3J8L7PW8CzLVKt",
  "key22": "5F7gAKbMcddEb2MSy4VuEtXTgTvAH53dUZqQE9xFFHA9197NeKMGzanwYg6pq1XD1tUzUR3SPmxNMhQTaAA8qceQ",
  "key23": "EddGsR8TaPFpQ4GK6NftSPeNDaQJjmMDLRwdC1URRFSKLA6DjwF987HuvadZZ84K2tMWgBENE1orhDKhhFZU1W5",
  "key24": "3RPUZdMga9vzQu6r2Q7SgaMkQJVAwH7Vc6yDLMGsw4EYygrSqs5NbGRLxnn5y1qsr4jgMVsfVH3CJq3zKVWQksQA",
  "key25": "3nb5kuWEsi5FB7Km88aB3uHT35DCZiyF9k3oTTAs7ZcUwDD9RvZLVduwejbQuVi1GJeMd8CUVJi4J2k5zR1L3TFN",
  "key26": "4hf2jBLDkJPzAgDMxGYxmnaZjcRaaC77j4N7WkNrBcPtYaf89Sp7xcMJjxDU5gKh25sUNRQtbF7XEbY8iH4hzaAp",
  "key27": "5zTezKphgh4T5hjkHo5ftp7ZE76hvR4CL2zpm4MMY3RC4Eew4PoHMt5JCwiqZ5eF4SjKNgUVKsfuUngLy6CNDseR",
  "key28": "2KYFaV44x4RUCXoXeEkJYS4bzBdsmMBqFaxb4z7DguFpXd7qWbC64A1roBchj5GRQ7ZhcLT7sb7D436djnj6LWs",
  "key29": "3tmz7EiEQGHQ8NTTdETwSKMgqDazFqhgxN16EHF2Tivgy4mgwp13s5aRDGhcG5XCtWx4aWYYg65mF5PDCRmMGyYq",
  "key30": "3J34huR2LyvRBpUWB8E9uNh5ANWWTMuuiQvyPVCuQdKav6XBZyLAaepqduEwr8QQZwnua2QfKcgYWBVY5NXqbjR7",
  "key31": "22p6dhK9pnuZ59vpRS7ssgmuRRKE8uKtgyUMBxmA1vBTyQ1VuYDEZQSyFAxvYA16rLwCSz41hBpUQ936fp5bJxFY",
  "key32": "43ndoNq8CAzz7cpnzRf9WPVyumXqzdWtDAuLEfmHJUrD3zkR9bJxU8Ny6F85JVnqGLK6q69eKHvEPov6hQn1rTzr",
  "key33": "3j3EP3FrhjWYbP1ZQiqrtgCGrYNPD9TnSrD1r9gXk4nqubdShKpF1PoKAjVsKYDrxCfbRqxGYURQvJfqcMYqKDTS",
  "key34": "3g4vudHsZCbkjYK4txRaTW961rrr61k3Ti2ZqUEQ8CmE5aupcnW1FHuZYevU87eUQbwLGLsBuDDAibF4CyDBavx7",
  "key35": "2LgAU1Y7KwZkhiLVHyh2C8QQgQgqRiNtJbRx2LfyLpgH2GoGizeniuc1K2XP1wWLDXam6J1VDaE3bct4dNeEVoLk",
  "key36": "5c7EfrwTe1LuAV6xKb3fAgsYuRC15TpUNPGn3oFS1D9BJofzKm3c2aKUvSRiqTj8RGM8eGKFWocH9Pw3TfX19X5H",
  "key37": "bsGwvuwVfpQAsspmNUHhj2Z2sgypdAaAVf8w7caGkBYjsUEYR171mh4DuMS4xYfhB2jj5TwmCZNdDedqwvtmuUM",
  "key38": "5FNgBstjkd7Z9H8GYqpU4JnGSeHSiDYKMJdrbkAw9c1EkFXMV7ErKuY4pKXM4JEzwtho3HtFWvfU2LoCDvmzvpKr",
  "key39": "fPvh9ybVeVCquvAET6z7g6W1PQSwQdGriZRfmtUMJDRWwoTrNczyngxJLro8pQjeJP7Ark6MNdAfzieFDmStjwi",
  "key40": "VS85CTTWFC2qWyXxGzcyqSUm6mhAByUaZfur8onFhWzhSBmDQHJwH2woWKoXGrW4YRbGhq7JLYhEm5gtJZae53m",
  "key41": "3omz38fPoR61Qw98vehWzZxahyg6eFUTCU6UQPEfkRfgpucPkdVVJ4bEB1wxkvcNKaDqyozief3NSUqzaiqoxukt",
  "key42": "5XA9HzqMYZhAP3QUvKwnK5BE8aPKEoNRv7zAbmVPTYC6bx3EVnkRUiJS44BBeiKQFGGkw2yxehsXsw8VjpKsXiJj",
  "key43": "2wWaturu6dwPyzVL3srbRiQ5YNiBpKdHmi8rbdbBCEWLNgAMeULma78AW8UV7zvQTQ5ud5aLVqhSCmXZ2gjnRvQz",
  "key44": "5UkT4STGonBwBbfuKU4GVghgoavQm2DNpjo8eS1s7gR5nrtdpJR3qZcTUHyW2ke4wE9CrZopxmm6U4Ajccqrn5NZ",
  "key45": "KFQoKmW3H2Fkqr9HQEWbNJ48PRb5ho9sEeMZuwsmmCx94u6MJTfF1srqc3cpCHYy4c2DMQ4NgYTnv3dCLKVb7uj",
  "key46": "4ZUqFv3iuBmSZGRKTkb4KkQjv85gN9Q1u1MVL4hqRri4Fvj9fGJ7pzffp1C9qSC4HbEKo2WpMGSUPSYct7xmnZg",
  "key47": "2F17oLb59N4d7XRwjLTFkJUNzRjVHVU9vARhLsucrsWzEJsHGGwzYqJrrzcLzcZKuk4YPkhiupPvwREm3gFvkmVx",
  "key48": "5DMdLDza2dwSA1vVPhWfQJKnYi83vy1he99dP5z6hUmV5VmKpoyUZJxq5mrLeR61XguDckdrFLyVXQQ5PbkzroVo",
  "key49": "356imtheYHsqeQSr6bS3V8A3rDgnQJKm8Q6mU6twPMnLxom3QX8cHMMEnPo2FVTzkPLVjtyqRSUxbJBXX8qNY9NT"
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
