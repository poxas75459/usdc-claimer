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
    "5mWUpX6NFnj7ckK27Nxze7mLqR3tgqiQKkxJasRQtdh4LX8aDfe3men2BiLJ659qTkmdn525PejsNfR4BeJE4Smd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LSvYUY7t4Vt5aDTkuyFsTV5Qh7mbcpebxdLdNchdjkKcxDC3nAKgiVBGJnHFi4Q6SLzhRGnsqtZhW4Unk97pGA7",
  "key1": "3mnsXjA71Mc9Pe2FCU34tBbezrLbD8mkL14gFMF1mFw8xFYKoNVnFeV6Q23LHwthSJoScN1DrPfkxwqFSsNajFkF",
  "key2": "kb2R9WhWLwTi76xeUaYCn2UAz4vmWiEebo2XMmB5SCoq2G2gZ2c4UTdxCEZkWMRSgUJtDH9Mc5hZ1WcYLLMBCUL",
  "key3": "2oafdYbyHK7nM9p9fF9bMmh9FKdN4MsYaCuGeZgR8WnbXUZLMr73hG7fNVFckHEJNT9Agjd8vRPD2y26TQ1jLzbf",
  "key4": "4XPMvYihZEWSa4U7yDg2YsvCRQqSsju1yQSdFZxPNRttP31ACWRVA6yDtxTeKcuEWbF3ispvG3NGELig9UeUZ3qY",
  "key5": "SRx8uKAejKwZp4Hoer2kAzR7THxVTKkGmPQtFKYhK2o3zmu4R2oUtLRYdQ2dxjXErC6rDnDTbvCydWA5RhHrLHP",
  "key6": "618tP6HpCSHzgvRWUnp5XrgzHdnMog2mC7LuunagqiKKSyGNZLpkC331dNLdesehxdjUWZpPzRoJojq5p6sjJKTD",
  "key7": "5dxbw4i11uFoC6Jhz2gj2RKdpqtSac65DRzYbva6fqPHExphDXuzFTpAw8zSuUYK8f3MyBMk5hj7R2k3zGVWZvSg",
  "key8": "3wKcVAvgGyB1uzBFnzZp19F86Rbkavar4apUUKPfKqKvfWjRNp4xXG1taQBW7KzJUayMDt1jeJhSq4qiaZwc7nbs",
  "key9": "5WABj2wF1wJsZoESpXtkaEiRWiZq2jnLU1N8TJ1wUhrk2pY95GedpFnwQTZC6snUm4E2gKc4R59WigYMTdF4fkYa",
  "key10": "FARumDf1EYRrMDkNTyKXcewPG72vEpCGcLkxU3gEMsbqfnWbmTuSyaoTDdyEiNCUNC4u44Wq1uy4atDrpydwaro",
  "key11": "2hXyuccRJ79DbiY1LJroYg5qrio81vJxYhxe8SBQz3rS2BXWitgRtkqTV1rYoK6e2ZPwTFLq7mN13fQaXgCrUbCk",
  "key12": "3UrtASwR5dwE1Rh1JP6M8hkwwCu86VoeyXCCTM9qNnptHPQa93YGbn67PRudyFi7XqTJgVEud47KofmGU9TxMcyy",
  "key13": "hp7EcrMCHKYmnV4FbLAux42xbUhM3wdmQuSM2uXdHupaCttYgej8jLCXqFbV9LQU5EnP5443Eo9xfD9RweDQL49",
  "key14": "2NimhzPKzTv1emuG7nE85ckfjB4os2tycu17BR1k3U1znu2TprVrM1Yr7QfUx7NgnNHu6ZeoWnwDaXLg9ju3rS13",
  "key15": "3BEYAeG1gNzamYTdLz79q6CfD44eNkoNyKiU9GdzohkvMT6XHUWgBxwa8u82LYn7Eagut8tmstSm9XqFHh7gq5o",
  "key16": "61aqG4KLrng5RZdr7P7M3ntb8yHHVkJnDDxc1rGWjZpT6srhhBzHp7Bb3yByWsem8dcbyrfZBRgFAtLkY5fLrgXN",
  "key17": "2LDJjTQQ2jGZGjLGSyUAgF69nzdLCx5KdVLfQ2BcL1Wpgv8HkxJ7H8nHPpwuxqKv9a64gZcuCvbhSamvghRz6E76",
  "key18": "3hB1hcn5zhxYywjjVtmzxm9NVwX1Q1qLR1R85uXSSzeYsCB7na5HD9stC3aQHNjoJBvxrqqZXHmFMtSNg7uf64kC",
  "key19": "51Ks14VmZPDo4WLgcKcY6LnDZKCb23VjSbpPyu82ciySfdsJrMr9pLShvPviuVsHG9LaWKnRc7SJT8XmF3TEygtM",
  "key20": "3ThK2Hs8vAZvSgTrQKimTNYYoPRYkCTaiCebBzG5BoeRKVbzaZHsDDjpn5UvJXDVwck2RrtrFzEugGMJoVBVBcKu",
  "key21": "3KwTWqb5g9MsZBZepmxut37Y7Fx1bgJRwKyWL51TUn5WBh4mGTrBUSVbxbAETjMEmk8pPpDmvm8s8TfDFsWsdccG",
  "key22": "5W8b9fzN5Xaq2WNwsm4Y6bWjyWKFxGQn9Uw2PaEkapYxZd8VVWDd7h7FJfPZSkCfKtv6hmZDNtK3D7UR8UcwJR8i",
  "key23": "5aSBDE7pL2xcXynRG9Wd6rSse444UixuPRE6z5uo2jjKMFH6mvBVGjSLw6Qiekuj2SgBDGeMQpiYRAnjzucK8YM4",
  "key24": "5NzYVLAWAqKiikGVfgoAM8bAJwkJCc6Bt9d3CGozjUwzHa1jVxFNMrtVNYmjP1RXzqjeinscrgq11TNYeBEohBm4",
  "key25": "jcrharo5HZEcrrDdd9ksTwx78MLvPcZv6ZiXivZqosBteTfiH3vrYFmmXDFYLK1z8ZL89osdxMRBsCgpJpFFKz2",
  "key26": "iLPYptXVfGeyZrjX1RJsd96qLugKDtAQyamZ2BLyzdTHzeDcNEzdPuGepyzaMj9Nv3Met9TwgZPJ4qdBswPwgzb",
  "key27": "5oFcHTt4NULWWvQFXbNtYJC12F7zBNoKJFJYmaG5BhgrxfMzVUEkTFamYkZoqxsqWRVua6sfXStRsZuAmzp4a8di",
  "key28": "26QJeayaK333Nw9mQ3Zz3v4ZH4MCD4psfahNZZEFmJsJaZyuNFwauNu4bEKYGHeVF3RfaSPf7fMqvQ6nN9b3Ph5X",
  "key29": "4oT7e6xeSCStptBt41Qpktc7gopsjwQF1L9xiTSMWJzrHxECWQLNZDwbFb2zVVi92eCR2VYHQQ7MogoJgvdXHBKm",
  "key30": "42BLywZahgGjWWSVyDVXSKEqHVRHndAC6pp47KMi48ewFMr7DfXE6pGkefkJiRCFvMcpZBDP6EL1hnfZxxeuDGdL",
  "key31": "5CxT12QuWq7PUYNP9TciT3KRUr2N8ptbxmDCaZ9xqCj67S2iRPS1ofhRryfsXUU6LL2aFp5U6RHCq8MqeYtM7eHB",
  "key32": "5wfEVK9Ur6pqcjdqd67iJfyt6F8aVFhutuzKbQh7PKPeSEvB84kT1i6VPyy79NBmiUyJLHJosBN7RcmvVr7o1hV9",
  "key33": "59sC62UE8Hbep5LhiYhnHBXmXtbLsTefTLecnJXaZ1vgTL5NLFePXpzTvpBynuLzh36bimTBDi2ZWDg5AR5yDaYV",
  "key34": "4BmT6r4NnR1ZwHxqNCfKygN4Qkj3aGVVjaxCXKA29XNmCA7yon5LVkAgNnRUbyp22PRtbs3hyqQcY6M6ssF15yKh",
  "key35": "5g4yAMhefDT9aFJ3m2qBAHkPzAw7rPncfqQ6YJoBzuGVPASpi9aucm3AbDW6yrDNd5sFUZkVgto3svsu9ASt8C1n",
  "key36": "3E1pXp94JdpdvhoD7NYyuptCZzPSjoBasbZPcG7tkxo9dGeFpYq3ZtU5PontRE9GVrtRcgKZiWNbcRhXqjoNiw9P",
  "key37": "5vA6LHGEZGnJi9AXnU11UGLZwS2TrGepeJsNC7rmbAJgHGbfdidykbCE4KrF2hQmRufbw6tSGRWuKtiKa6wmEcrq",
  "key38": "49AYykxyswWtMwBGQ2yZajDJRx7WyGAP6ftbrHj29GwkLqmBQsh1JwcVRuevSavxt7qJuLJ4oRE5x5LMxvXQm2fG",
  "key39": "2TS75STcsHeHPdNqpv7HLLTXWXhzy5RnMUtXPYALo5NEjQgFZyrQHCv5fScvedhhbRFxrx9pgRSTFf3JqG6GhjkN",
  "key40": "2fea7mn9kV2CAnaJa8hSPLVRvJJvGdmQULthRsDuhBfsgZBRkzU4FyHWinZUSaomZ1GMy1Rt9nDqnRQzx8w1hmR9",
  "key41": "4W2sqCqqScVuXRqvivvsieg9vc8XFvVqWzo7eS7FNZEMs7AzUGtCbnapip5eDf92u5xdpnxjBo6sg2bYqfHJDcVP",
  "key42": "3TXsJramrQZzAQWCZxpnMSpxvhTAVhVfaaHL6B3RaUoQEyNZ8rJybHzzoasGYZ8PywYsN997d5A4Wx3DjJefPRmh",
  "key43": "2UjREMQTyuogUahoaji5xGHQzQGbGGBQFUnse3T7JeGqBHThXdHPydwEwTvbiJNk29HetEvsaX9KSnbrNmGJ3UHC"
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
