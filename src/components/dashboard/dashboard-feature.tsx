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
    "5d4DBZgYjUgcaBB6GR1EhwvU5DWqsssTmkQZx7tzPKZiWf5BDDZsKdsVUsg9X8mWfvdvS3vHC71fet51qS5uajLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fLc95iND42dHfNQTTmCWeyTkZF6KvGnDQmPuTT5PGPEYu6UoSQ8qho9gZvfnMK17xZ1sUT8fwcuGnhuoPjEXu8z",
  "key1": "4WMdKBzCstJszzDCv4rSrETKHqgnF5j5UZBXBtCsyT8U5egvcc4WH8zEb7DV4ec1qDzfvjU9zYJPvB1DDgeegCDf",
  "key2": "5nzGBRaRJmjA9PBS3n3r15sw7zrbYJTpkkmFkRyP1gzTH6NebpJpHuL8qCyGFShgpVixQ1rwfGhVq8mEMzqFVEbk",
  "key3": "3PYRrSduH9Ja5YF9Wphdc53hcvJ5F3fz1cCHwNmjcKPjhhw8YWShrqHAfeQEC25wyyGsvLAJBragZ2o2a8yyrCb3",
  "key4": "64JywD7T8sAPeDEK8XoWUZoFtdLeBbV1Hvu8WUp46DsDA9ZA1HibL8CvoK9jHi8e4tyvrCgzZvjCPM3PWXiXJvmJ",
  "key5": "1PPLGwYDPqmA6QqCYf59gwUbQzSxRfQzmwXdTwgNaJSUVJSFP5RM8pSLgxkdfzR6zScMe7zv7cckxDu2qQWGxwL",
  "key6": "5Tz3BgJkRJGBKgDnp4Vew3C8nVByUnqGac9PXJipWh8p9CdNPGismGXCr46TLJZkWqxwyfoNkPPdhK1dBmthqNfu",
  "key7": "4LhQGVFTDiefPdb5y8RfCbHkJ2u2rEnVfhoGC5sQ4eb5SxY8DHC3XEdjc6ZTgrWgKBZMJbfS9dJHUG9tosBZ6Pqi",
  "key8": "4LtdE1n6WnFgDxGNgaHJZRa4ZCkXorNAFx1ARpiofwVpAPASkYuuLvMiJz4BwrkbgGMY8j8QPMFk6qhvScM73smZ",
  "key9": "5PZPkngdnfABeNCgERu2JM7yDSPXoEtXCoX48f1r1VDixo1xYbzdER7wB97oE6ppxueH7cgDUL6wmw1KSFHA3xfi",
  "key10": "3ca3srWVpkPPs43FG1qDDYZBa1TX6PnV1q6dtWdN5JHy5NtXdhU69LEBiKvKmXMmmLDXHcdSGPLZEVhAtVj5nmPc",
  "key11": "L6hepjnSBjfSz16yh9xmEL78a4LXbknbUBys2bCS2YhZ5SJf67U6kAmG3Noh6vqF9cPzHSGpLMqKiVAGhnygggM",
  "key12": "5CsSEGoVnVz4tQSrPPTZQsAtyzFZbyUWpjVQPWAHqL5n5V73QDQCr9UFHWDVTc1CMePq11tCCwytE3JZkErs6oND",
  "key13": "3gTSJtasgicesChj1JA3wRCCncSoUPone9HDFr1ir7Hd3gyvETGSDZ5H2Jewxnr2aFDFsbUpdV5VmwsGdvkdMn4z",
  "key14": "2erbrFs81kQUqFiyMNcQ5VnkMRaRxeU4zWRRP6tdohuGuQiubJo7ELvnByy7wbjaX8vokgq1ra8jJB2HGSjAJ9QD",
  "key15": "2ZXfs3MA9sXDs3Ym5Q4rcMZJqz9wCaknjUB9qG3N13ukvYebuF716L1VzckSmcVeMF4vk6FjQNxVGjKsQak4CZ92",
  "key16": "k98hr1bTqmEicKFQF6beq1rH7UizhzQj2PLkvnFeUiAgvKZijsivm2FsvCPtXHtQzcwDvg4yXEJb2oAaAkNtKrE",
  "key17": "5GMSRSCprvgj6G6dckRMFA7if5LcaHRdR8nS8DQygiWer5Gy2zDf8apGLiHqtWfVx1pFp3Z98Y8EjDDG1MKnxj1B",
  "key18": "3dngB6xXpjRAAzsSrvuTBHxW2UJ2qERVpr953YLow7MnmyAXmcA5LJ3jLCkuhniWPG22QyWTVrW2jrjuwRZdHJQM",
  "key19": "3FsEfH2Cdo55q9FCZtZF7zMA4G18jW12Crnt8tsZxkWfJNhp9xn5bxi6poTjVwpKcgizsdGpBg7tRG6W1B5ErCNm",
  "key20": "61meieuBX3w5QumnsZvZyei1wpmGEuv4iENjKsb293mSwBnJvhGfTWpBMKu8nAQTeNZzCBPqEW5R1ReH65aBPUAs",
  "key21": "2sYbn1ygnkWTUw8ZL4nQFgZAeJBFRj3ZrKzsW8qhfQSKUfeNDGUVrk14TXR3kZz6y14tPiQMqJGXvx7bAZiHbY8B",
  "key22": "43ydDZmohadTqrrdVwLVot8kADRS5TA8NsYiBAhuHCmvfSDCex3boeLi7qBFacHEGNibmjincdiFujDppfTrjEKP",
  "key23": "4YAnCHy3zcnLJgk4UFx7n92HrjHdf67dCBNVud2CWg1RxFzFWeXQeyhfF5ZrABpHDppFmrq5B6ydp8L9A8cQjoRC",
  "key24": "2H6VfgBdmheZ1yFFf9rAXm3jpdV7NnUfgc9F1Q7gp3QkaW9hehGddu9vqxwwL4me9csbxBcbGRMp1SGE3oyEJKXV",
  "key25": "4kgDKdWjDhBwkrnUZXEqAmM3Gsu9Ta6ujWonhZBgau75v7xDhtE92Vsm22GZB4ydMipM7DKWL7DyNHrmvFogRuKU",
  "key26": "4f5owxhPGnWELZXNQaDmoEbNwqR7EC7o95cSps9b8JG8vJScegWzkYZNye1tDLpFQEaVjcvXVdvYaLVHo3owfNtr",
  "key27": "5kn7z3WBFVtJa9KhoYpTDPM799eSmLnbspjuHCSJRCAi8kyyy1Nz2xGz9GKZqi1KBV44vZJ6SNNEUczvfaeTrspZ",
  "key28": "S1pV2Unz9JuE9J5sppWB8PLCeG7tvNaLPBbuZ2AoPBhL2vBKYmRsUV6J4mgBui5Bmdwi2PpjW5PiHjK8YXnEsiH",
  "key29": "4ULDA7jvEGgF5WikJ3aDS83gcAFv54uJvypSMgsip6XrVhjUwbRij5negZa6cLKZ7ggrp9n5agSNxCQLQXatod5y",
  "key30": "43pRM1rWiapLWy7jee6dbTEyRVZzywFifbSaYXNWTjTJGNktAxo1Da4Wj9TAHVVn2nJvpgcsJr1SqoThvhWJQe43",
  "key31": "38zAmyXh4XVZPG1pLkbEx1wn7GYsidhApgS8TLjoXZL1Bu4TAtze85NSPXKKB2ebiraAWqVjxaUsFYKYB2T4h3X5",
  "key32": "271wEQSPuMXMvAmDajUUL1iGduzmhgnW1kh54BPP8ipj4c6XAGP8eAUhaUF6cPZkgtsFC7HU25MQhUjcuumjAgiL",
  "key33": "3HWrPmV5Wu1yLoUrZQZDFrswZMyeUC7vEdLYkZzKY2U6MPadPTufC3ue1zkRF3gUejfMem7yNe2MGEJYDUkpCk4e",
  "key34": "5ybguMudbc3Wbq6SVgaX27TPdjfMAJW3t4mcTCtBRNQrVuEQ1fbR5WPKXNxALX6vfeLpa2uayomagXjh6XfXLgQS",
  "key35": "411ouHhKek9KUoWRUY4x2sBAZi6vqH9z62ua1gqUeeSk4MSk6yhgxSTk8uQmJWsdVasNNGyBwdcbsSZfoUJayVUx",
  "key36": "3Q5rrRJsMLhA3XWY8WgdiQTJF2pvm33LqzUrZBj5HXotv2fctzQH77uqphDv3a8KxLFH6kCEnxfE8uqfbHTCNVs9",
  "key37": "2V6TGhkngjSDDWpDpNEDtEwqEp2UVR3sgCHswNo4rUyZvm4CBPU32UZzSYUsSgdZfXwZFF9S8rokJi7Wzz9VsJKR",
  "key38": "44E2YBpLuLiwPt6ExLiRjcfJVPPKD3EhT9U8uGcauWqsxQDjfjmhynRGECYwUnphyTUJiS8M6oZAAqKVPpqsWdLh",
  "key39": "2VmR6CXf8CTjx5VEryJK2nkEawLAkcrBwkEW4wz2Coe6JKcdKEq7NbWjXKoRQADuBPLKd528CeMkhjhK3EYh9R9z",
  "key40": "3WG6sqaRhXV1yo5LVJ5ADJjL1tqhQt8dGDnv5s8y8bxKv7vofB1W2EvUzMxgRt1Bf8wWVLX4BfYhN6BKnczyH2nv",
  "key41": "4SVLvfiYWgUcGDGJLXdfhYdzzkgnm2qvBiePKLkvMLGGN473TuCo9nt2G1LkoiA9kRkhDFH3tYWvuR3iHCs3eAgX",
  "key42": "hzQHdUeZ9iuqK78EcxY5vgo2VZveWncjiJd3NXPjN8PikKhw6TZcZbUZNyNfUir1cxFY3AK9FnHR7fjAYfKMsn7"
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
