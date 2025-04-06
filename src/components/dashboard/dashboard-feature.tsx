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
    "3xA9UPeoxprZEFGWLyRaAb1hYhe1wkhoL3DoYsWsgTGUERjXTM5JfZCShE4bVCqnpPpj4Hoo4yRASAqD3osW2oXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EWoF5zULUERBdF5Uv824LyfwtFRdmdJVmDhMiM7TXPxetWAANAGBhhqNicQcjGUy8MT3Tdw1sn1ZU7YSQiPJTx7",
  "key1": "4cWpAxYc1VDtbnohZ2KAxZrZpYxYcurWNuhxunJXhAakTPuYGbNpnU39XjZiA8xsTmWe95QHagxfvrnFrS6eTesK",
  "key2": "2NZCnfa43a1F8rQ7Ehv8yM81L9WEQa7Dvh5FXqHj9hiN6HkyV43yQkizpVDbvbqxkAjgvS66Zf1LRzECQe61nzBa",
  "key3": "3MKhNEemcKaLaFxvZYcB14xgNJ9XEdVz8GwJpZUBUY59fP7Pf9eoU9bg7BG4BSu8AUc3yuAqMaPNMViYZj1LqBu7",
  "key4": "5d1S6e3FHPF2o3fadDhZ8TnQTZAqGiWdhvWWRaTfRw4AEjjxTuiX4Xmn1k4vgtzUSX61RN5m7qC1aCatsLyTwmiC",
  "key5": "2x4WxmR4vCFHTP3qVTkq75SaSj6JC6kPWeg7XzUG9NLUJsgScvNkwfAkz6K3znezEY17E2KApVsTjHWmgYrRu3XM",
  "key6": "121vzUEVySgjwoswLswWCfmswwPmDyoeT9S3QdwWSWxNwNrwr2BCKNCS8SnGm3mL8uHXN5G1Si272nPi1sVZSMZj",
  "key7": "BFjw7Vxh2HHYvyUcwfAe1GLtYNhPaHhBf1dtWE4SHCYQChC192teecxEtGzHLun5rU388r6851BCXE3ZJmrcupE",
  "key8": "2m8r2B8JVrCASnd2t9PkfJrjpSfL6uxViGNDXqmSZet7Z4dP2WMjp7eAuYfozMZ6wrYU5saSYWxnwi8zMswJCVA4",
  "key9": "4hqbF6qdCSgY3Kgm6avUessiARUaKnZUbmxJwTiqe8xqWQH2zSwBL63Ly68QK7bqsMkbtqAh5rQJmkpXZKn5Svdh",
  "key10": "3njm9bDBozAiag6wXzCcUwXknBJ5LD3rWEn8U1EvYGTMBQ9myMhqkxZdqbVMNAb4HCwkJQxcdphNacyYfGeCST9t",
  "key11": "26CV45KhCeuurMd81cV1ppxXjxt82FGhm28tKLkB84G8DvSTkukPB3aybeavGNpW7aVscgM8Sd9iULo9PFbYmxkD",
  "key12": "4kVxgCw1F1GUme5UWxnfk35P6tFUKCrE98M9bnMGw4Y31nC6xecASecd9dEjSyKucQRqeHBQB7pKMHcTw9YsjK8N",
  "key13": "5BjN4PXSjaNss3rJJEi1j9FofxGZFi9Y1JqJn8sQ7UMesWAJBYaxYdf5jEb3aaLWHvqdqAstBff9uz59HstrSGpc",
  "key14": "2oMD2Z1doEJJxgYT2msKmQrtVkQowFu7oo9L8RBwTeM4VPDatwb7WBmeaqu6MrLqjkVKD8vBcMK4jK4B3p6z7HF9",
  "key15": "qCnAFPsc36Asw5uw3nPXME29zyykxXDF2HBdmomUd2VubsCqmXzy7UWiGufded7xge4oycBRP1JaTXrY6cSShLz",
  "key16": "4MxiFGzj9iKR7zyjav6VwKYQRVwm9nbc8sudC3JqLWQSefmh8bsLRAseReTYHLit4FMLam9kixNTBomXU6D6jcfu",
  "key17": "5PdB69dveiE5Gpen5p2oYrJbtSAuvzgfRj1xB1H1ZYfLAphdKdNmoguaBPRva4PkKxWaLCryPfzbjvXa4XSEUAGj",
  "key18": "3HAqz1NpYU83YA9SWHK6ZjhWKb4dZ7Mpua5t2MgHG3dJg9DfTf7HGkk7uDhLJquGxtmnNJLqg2eoV3x8svQNsZkx",
  "key19": "2TfDsRk8rqT8p5wELuYVYGHBqqsFLRTwvPkpcDj5xDesmrBwnvYdKajqQ8tDe1wutA9wVuRSPvXWEaxmXaGzUHKw",
  "key20": "39B9mwCpi9CUUGcgqV9dGqcmepKhDjfouYnbUEpVi21HLDJHTx4Qhp1cXY3pVo5yF9DSC8aA9jyqdu3C3C7Pbjkp",
  "key21": "64iiH3v1Kzr14pG7VTerqRcpQ5WkCa7EVhNXSveiGdg9PX6VuYusKE4sALGgx98BymE3AHGJyPjS8BgjPjDBkro",
  "key22": "3obTgN2oHdEpSoxw4cRD6FkSPeRQx79f8d8Jswm6G6RYWeDvJFBJuQMfr3PKVVUZWgfxkXFdpSHtvbccP6B6YyLA",
  "key23": "FWPt65vyEoV348JgdhoUWdwJZtdJjbvBUdJiojbVzCmxtCmNPYF6oiunhxgA77Gn6gMBLLgjMVgUeXUniSLf2UL",
  "key24": "E5GoPGKnbnnZNAhPdpoWuegr12MwDmSYhDm8UThZpfz1fa3F5uKg8W8Ckq7DJE87vrVjJRSn2pWVcB3cFrW45ES",
  "key25": "2b7FsXUENAzTSbeokDr42rBg1iin828hvFScKtek7Dk83Pf67Zpy2GbjpYibCGLT9ZNMZyLPEjYNssdS6ajaPRXs",
  "key26": "5KBjvZF4s8KFaLzFMNjrotYD1NDL7WE1vfqBBKYATX8QyXEAB9PwSncdMX4x2bV518PSDn61qYv6gzmJStNeG3gg",
  "key27": "3U46xQxgobBmYiyvmUNByqUyA3qvVSBz7h6Hx2pZwDXVAYGNUpJNRKwFTHqrDtEtUpe9son7NsyJUrge5B5TgZe7",
  "key28": "5rn2KGJ4dNx8NdQaUZJVMzmrnQ9Amx6uyyxvNoJ4Wj5S1TkwZxfSmEoB5E8w8a2JxzCVbCjuvHrAbU64XzwdHrvk",
  "key29": "5MBDdx3UTmYBLUU7qTcvJNvbsMDsXZZVRZ4aBU8MWTHPX6no9zfGWFvUjyJaHpaXwZzkw7WUM2HAFmdbLLxskW9X",
  "key30": "5iCK6kjX44DU3xuTmZ4F73YA9jdxNsc5JyY9B6ZbXm5ERj5w4Lf3XaagoVzsiyC44MwQEEVxExsPHkEY58EN5DNg",
  "key31": "2ixoqbVE8tnpqyJiRYFZmkah5k8JUnKjnnr27dXYzkomWsaLHd6RkaN7kf2vQduLW75R8Ux4tbVQEWyHb5TM55Jh",
  "key32": "2wr1UpUbeUNiaHNRKf25PMmjG9dpRzcJ4YhJ4NV5e7HCbnoQwwexN93iHFeJA14kg8eShbEaRT7f1CS91QV5vrJM",
  "key33": "u9gZDjXq9FfB7GAhPkLBvg3FnZvkqL6LsyfU84Yg8yYzygENTgrJXbLTMjNRnCKXirXEhxDyw2Sa4HgFpLFTEjR",
  "key34": "5qiCa7VUUvKtoxdR5XQTQtcLjS4ZEcnCbcWJCL5TSbJdtRZd8QmwPvE4dED5YYZdqJngPucf9GmQpNyDJQBFGGga",
  "key35": "qSgawmtkJrv4nqZr8q7RJVXhqC1BJfZWUxaevAc3AzF2WRd7sY28B8eyVYJgq4vTF2g3W7wE4kx5FngnmPYuEeu",
  "key36": "41NQBZjt1qknBZBVuEBq8WdTpNofrL1osLHi4QTTZ68Ux5fgkzGsM8wMSAct5qr2rpZ8xUy29uVMGUo2y5VDTSC"
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
