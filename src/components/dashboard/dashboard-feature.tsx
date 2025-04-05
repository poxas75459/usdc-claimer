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
    "28NvVXfGPJBQgTMZK6oCmYgtPZhGBz1PFqfzZdXAbepPCPC1WULfn4MyQw1H1SNUnGQkZ5CZMWGudE64P8mGkfbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XsE6NJyreTLT4nfQa2fo3kv3LtfxKsnbKgPyPizxR5JDEvk6y4dWcTRySEi3oGgxvGgsV4eyygYUVt1d8BGWTX6",
  "key1": "qzVEJgzpWg6TJpVHmpMDJsbHSxhNuZqHZhexUNZi8vs11NgPud8svLZNijQVxDQVayX5psKMB37kDoMCGm3szi7",
  "key2": "32qC6RdPzZnmHQMPEnXwWyo3xjEBPu3aYBuBoo4M3uu3qAzMYQ5qWwybKtkfkHfsqgWnmjzjuN7Tqv67QvCYg49r",
  "key3": "5dsBgsKwTtFejqvobmzm6Vnjv345Swh8hrR2t6bFReMqXQrUPCUu5ctb5pQfvaT2W4ySBNjMtPsccCQHFvHGWZEN",
  "key4": "YtVJVCy7G5WRKb8XxfrdD4bMkE8sFahpai7HAeQnwRUJoPZ6qphJRrBCvj76RrvhDZ6bEKwh4si5HrDgctkyQv9",
  "key5": "4wwNueRYggbsbmTvpnMxX3RFk5RHgC9LYc3HoQiZZzcC4STxeQSdEBXdaLVhCfa6hLoh43tqNS9E9S1rmhyxzULe",
  "key6": "nNVqAxUYtz2hdUBbvp7WyFBDv1fzQ9KESSyx8DTjPfL91CC3FkudfdcgcT6GPumQKq7XcQXEt8pHjmrgEvi2QD3",
  "key7": "4pb2fdMKhtkjPfcAAqqMrj2xAgZgPycLahAXYs2jdds6dMpQow3UWjepA2u8MTg84METLVHUfWk8Cjcm2CPnHD1C",
  "key8": "3D9mcSWdT67BAraDnJUAcsvbvMHq1XdDcmNaVfar72Py7QFJepgbr3uozN3BRNpCMxJ19QYKMXd7Dg5fzM2JPMp9",
  "key9": "2RXnKJpTaiM4W65XqSixvnrP3Nyn1ukrNXw7MnUmu2UFMQehRFs437ft6cqsQnq7Z7jfRnU4YRrc9x2GeNyMMA8o",
  "key10": "2tSg4GSHq5wNNLYRjvW8Pp8CyNxmAsZktML5Dd55VKJXxEv5u6mcbHyPMrXwDJp4ji3Y5srJaBvknA8bLPjimL2G",
  "key11": "4AngbmEP7Q5jsHNKvx4NfhbXMe6WAVfqVrnURFbJvByVpuHuRCjHN5AFVsZpyHPZseCwBsoc9726AgwhV8ACFBwy",
  "key12": "3pAVvN7VPKrEXBCzjDkao6V2BVhb2baTce9tJ9jmEZHaDYqLTBLKFYZ41mnpGFwh1esYjeJqnN6MusD2k74EU5nV",
  "key13": "3sjXsFajCXxarnHdb3YhP2PedoWDcnC1BpgFcEmbrmPXz1wTdpuZ6zXwFGHHrjYfy6jn7u4CVDX9XidtLzQsfFWJ",
  "key14": "8kh3mZYE1Pk7snnDzYP5MMKofdpxNUJyvebmnQVXeR7UaPGSFyT8aGW79GY1XdarYCrT7ZFwATPm479MfxcSxCK",
  "key15": "Lj6zSmaXUK7qTF1pyFCWtBe3rxMvyYM9teGKvaB4CPXf2JfYA5gcvyBWqMsA3ueeDjKVMU5fm1Hw3sDaF6yHPyp",
  "key16": "3uNBbdViP7tDmhdUuLhfmL3qtv3TT5a9WfS7uDUewBEiKkoHs4us3QNfuKCpwmHH86tpYAsTUeGiCysyNUDAqbfe",
  "key17": "5KV3NRV423yPKjTEqHZ9Y9Lzpp6JAtmZBGNrLUm97aeEXGe1NxVRmJR3bskD35UFSaQMUvwLXFUgNu3V92FXV6pc",
  "key18": "5kqn2cHKntwSbXkLZ8hSfDgbEy4VDTKxdpdrnKMhxGnUc1ywYHNvZf979E9DjRh6pVqBQg58nTLriDPAUWua3C5m",
  "key19": "4sYF2Gv1BJappdfMMQ8t3nxHxq3aCJvBXUtGkVg4TuwqXzsWfZVqB9v3HuPErAzQK2BzySbHwjDtptYSnkvQstSZ",
  "key20": "4G7p5ExeokjAYo7LLSBkA8F6jdSPxJLaygrnVvXksxCGeCJGV69ZgJJe6f6V2TQP9bxyYSTh5BmfJUKYsA7oEeu9",
  "key21": "5LQEum4FyqDkkmQcs1EqvtEZTPURx6N6ZquFXBBrkssTgvjao1Tai7KkyyswCaUJBu3azWeshGnaa7tn18bNPgrh",
  "key22": "2bGauYNqF5VY7d8ajQjfCBvoiPc4GukY8qNCbLP7KdTinNEJsTzks4nFcaENvrTWJGmz4jqLzFLcskxJiZE7YC9x",
  "key23": "MB5z6vhi2WJFWnzDBBJghFaNuSo7aozfndcKSZfowQnPVkEcg3FFbgoft2ExsNGFxiuzAuwEFtqS3ujEDp9FZbv",
  "key24": "43jDn1N9StZzJzsay54CFV2BGHFtEjtH7CmvJSTv754ZvfaJynzfQ3XDhqrHiy4SJ4isu8VyaptAKA3N5o7Bq3t",
  "key25": "5aZWaT1BxG2LCkuaDR2qfKhm4L2jUEMsznfJDfiF54X4xf7puFj1o1CqbHgGGNtF5Y4Nn7xtUuXMyH6PXpx4FUNs",
  "key26": "5HgXcqP6nEh6beNH8GPJCJEQKPDDdEo4hxZTkbfwuopVBe5Fk8sfgfer3cNAQy4RP7QvNYTdEMh3Zhvz6QdkiwW9",
  "key27": "24wYgg1ec5PgDXVinLJV3KJmr7HU3xkQP3sF7QGkhAhdbpEULD56EvX16DyxqFsB3KsRUPH5ZAT552BdPX6vxMCh",
  "key28": "44xbW3Eamjx9Q9SHpP92z87j6YBHNtjLD3GUmM4XnuSfVQvrMhAJhqqBTFDWdhyDfVYfu3TMsMYWQiaWtp5SFY3J",
  "key29": "565wdSPHTKapLLEuyeu1v5Cim7zKXCdHvCStZEkfAdu2BTgSFjnn4Vq7U1RxeKoURr21UCD2MpqjPzHrB6rShtCs",
  "key30": "z6R9BtwhoC7wZSUKNaYDPkXeZwaxcQQmzdpNaQCM6Htj8u6xUqBTnoMiXL2bqcYmYS3niZDUB9iwwzrQeWgESAV"
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
