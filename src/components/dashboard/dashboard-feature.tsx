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
    "3QLyNHnkRGY5pGhFgP4KXMbPBS6VAY5LXdwYhLsufYYFVpgxUmgsd5UrJi8uHcCQ21wci7TYJaJgfXLTtgMyb2oL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wsKMibRAPsbH6vE8Y2P6xMTjt9DGAskx8y9Zmtw1P7BfLp1togy5okuwSy3upjgar2Ge3rRiAzTvk4f3qMzGT49",
  "key1": "2pZoCoW2VZQrnDHY6A55MRZZutKHxfShoFpKwxB2Bjd4QP7b27e9mdUuGQJLD4qWmE75svPu21yVzHMwgKvHsbRP",
  "key2": "4AA3fqstuHfY8GJgVoZV2aZiNG4jCUVKommNgLakCLDKDAw47vsZUcSz6P8d5AcvcR4kCoNjUofbqLsgsedv9abo",
  "key3": "5ChFMmDpLnJmAiTw4ctBK8jS3DvdkUrjYnU4KnpSQqQ4BUnvaHayn3JoXPyJB6uPCooQwEBmuyoHz4vtHaTaFvTh",
  "key4": "2HnmJGBTP2vjjJdZ9VPgLbLWuFbb22zyCcdA7WK4m8UfjZ7ngiWypndoYFqF5N9UyD6mzDdUcVBCEFWQ2RGRWiZG",
  "key5": "Gzqf8fGS57Ew7jqnuoLYtpJjv6NaqEuiEVrPGuwqpPLyvZuT9fzVdPruedGT1p95a4wGMncWQAFdmA1fFMW2yZ7",
  "key6": "5D6PRLLtgZ3fyruyauaEMcQinoZ1VrMWYRcjcEMsdKFFyp4jxMsYuvRykvZ9Mh3sHcaNe92XdMBQQLDca58ceuVY",
  "key7": "5i6wHhP71gT1TcFuy1SPbrSjeoarWk1HumKVuvrEr28cR5tMEXjVtnq4KJG9Y8aXnWoE84CynG4CzQm3Gzz7f5mN",
  "key8": "5RVz4TXxL57yzoLUSuNodYJgrdRGpoMrTaazdgKKVoXVHENdjmT972s3RZQ6H86ugD1rxqMUFRUVXkkT73iGtaf9",
  "key9": "3dRLmCjbt5S8E6GsfpqDqMj8tALE1YLT9dyBZZqS7jmnnakSStyg5s1TYtcq13BADcv7SDZvrtYkXshSmvdo6tqH",
  "key10": "MqsqYWUAa4WHjF2Hgx8BTDkxnN7CDcgbaGkiRBT2ayPYRyrbxmwMrQ6zCH9TiVksMmF2K7GRsAqoKcd4Vy3gzqU",
  "key11": "4WDECL2xWhBDzgnRgZ7bxgxdGN2uauVu64otEz8MnqfvRVfvqTwAT7fcsY37asDQ38yJe1h6xeyPAnDfsg7LRgXA",
  "key12": "2k3HiudEKgxVAp8Pzv76EGvrAooGCmuRPpFmwZV2ZM1vMATFE5T7MDkU8MwYByvERBSALEWiCpTapx1dCZKYFfUG",
  "key13": "2jw3P9cPFGG1Ja4ytS7z6DwKpYKD5afFZsTxr2Y2TGwp4bdWc6ecnKwPiVfc5kSBbDhM9qEUNpXDxGZuSQdmy4XN",
  "key14": "2sbRwKvotHs7kVWwPyhqRWmPC5v8PrQxJ4da8xvcmQikobDyAkF8L4MTPpTUWDoPpXMqSGisnqK9RMcvvLZmuC1J",
  "key15": "2a3w2C3gJkD7whTX7B9sfv3tK4LzsZLeCtR1sj9idT2tGwdKV56WGZmQgFobLRo6fjFR65k3VLWEAs5WZGMyWefx",
  "key16": "599gVj2k3cfA88uewoQQ1gizQDBN8mYW2mvxyVKWtThYzgAf2ULFrVwBE5A5tRXej2KVV7HXifbeMTgP8z19qas6",
  "key17": "dD8vFScNcaAjKPcPYRZys4NKqyDwPUVkk5AqzsPtiYFcAsnvH8YE8kqUpvoMySsmnDBHfPAxgtDuZrAw1mYz4b1",
  "key18": "4x1Aq1Rkvo5rTjLXfQLKW8Z1qsXD8v1TfK7ez6YjQ9rGb2EtnmLaPXeTE3PezUSXxnFwh4kmqirSF8yWACd3z62c",
  "key19": "4iG3r3GuSnsYdAkx3rHrrztpXfxLceWVu94ADS8UdnW9YbxPBiFPXofXhWC6YiykLuVteVfbrukGbrzJCkq58Tvj",
  "key20": "2FhurQhp7AYPLdHZnAe34mgdoqx7ahMUmKF8SCz4JejGaMhyrrdUWmERWZz7nQ6rEKjCEFHu6WaSjQ8vm3prVLbd",
  "key21": "bXPhr4od9NgwmLGe7c1P1SGnq7nAaXWkeoEsfHoRMBovHAHC2C3BuqdrTethyTBEdjipwRSUYvAKqsvh7n5vhK4",
  "key22": "oEzWnovUJyCZGuSPimCTsRiJ5C7scduEsveXdNjoLoZp2W2dKEY4xDroCwn5nMXbw28Whh6cfYP77wWfATG5xNa",
  "key23": "YwGVxuVLwVHPcs2ZJJV9WcFAyHH51YHzHVbJWe8RsS7GKNRG3QVsNm1R1vj9E7gcFCH2GtSoYmECV6UVtD7sMTF",
  "key24": "4BUfN1bh8b64M2erhgJjHETu3o5cCg4BdYiqDg4Q1jNrUDoAvQBQV9HQx65ATGCS7Z7q7uuCC6L8f6a4LY9HsFQS",
  "key25": "WW2sHm55ravwugtEA6jSHXVd43ePruKPXkGjRwAtQazSnQeYpAjvxums2GHzP1tYmiPSmUyajEYUGoF62Tvww3t",
  "key26": "3CRByPhmiBZtRYGHTsFgTEzDksM91kggvLPgxSiWvm1D5bNCexZZud1vFybgHcgwCJweKkNJybNVaXmcFGxvu3ia",
  "key27": "3923hzCM1V5oroDH5uDRe3fnKTojeVoEMKXtXrRDyYMQ2Es9Cr1uL3J2qYYAzV255yDsPC54zkLy2jiTY1G2vCxC",
  "key28": "3uwDMt17XqTz43FoSG6TahdPMnQNwmFtwepWLnQJknxqFNvpCKUpjgjN1Tik7NfbiPhNxnLSrbnmPXrxgBv8J74t",
  "key29": "4a5rxJEQQvDhD7DayGFxw6b9oa1mDhuKGgD4kuLxUWecohvKEVuk6J1VCh8UBCi3AXPWwfueMHJfoSVsmejGZ3Ai",
  "key30": "2PLeyDnM2qJWHCNcQsSnv31bDyHwqgSqKsm9Mqr6sWbqh7wcxoh7APmrXL2n54uJSWcnk1DaL5mqdEswEs4kB5VG",
  "key31": "4XFXABCJLUJvF7TQW53JeWxFsL5E9AuNwnesjAz1ea4ZFgUoiGgMEenASC5fBtrTHQ34n69pkgAXmLmkgj8k1ZAe"
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
