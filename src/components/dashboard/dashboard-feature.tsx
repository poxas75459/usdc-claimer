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
    "2Q6eybuvVuBRrefYRoeswXvxsKyBLjMtfwA9pKiECkjtEysEjiXuPFsQRHpvW7yznnYqPnfWbBq1BmreCC43G3HG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46okmJ6Xmoq1PaawouAaumtcuLRz5RCGbwBK23Tivuaq7GPHg6bLawVr4ptSadTPtMrvZLLWKjdtmycELZFUdCPN",
  "key1": "5687Atr8mUKCC6dtYyNZJ5Ch5SpVrTVPEhDNntFqAF2amCFQSCfiG1ZyuH6i6nJHTnpN8pwfNMYENRKrcWTaZxgP",
  "key2": "3A1LCunD6bLek3KqfVTWhpWZfXdHdd1UnNerFUJiBtraV8yabR8FbYaQsBfby3x9Rqw8gAMNdZfwLYGXv8LujgHD",
  "key3": "jZNQ641s4tDG4wtB4tSnTHLuM959q9uzyDJtjQqWKjSAQjiH8C7aSz7Q966cZki991Xp8qY84DjBQAiM7Ha24in",
  "key4": "65qXnQjBjwS1Psmfi5KMu4PtkxMegRtWv28xZtjw2quhtcAdPa6cP1EEXZnNBZQ6BacA7ZLNMmsuw2vnNewANesV",
  "key5": "4LsfEJR4p5iiwZowNJ1ktKtnvJq4uefSaNwwQHZRxVpP1NpMbwos92TEap8fxKbj2YdFqiMCNmzsCWtJ6dxpE9MU",
  "key6": "4UEqbmUioJep8RdndrfFeWHNtzoq6u1h2taA1VA19goQmCJUSV1umBzCPRGKHo4fAHTPswwns64PyHP3cjhNErUs",
  "key7": "BuQ4tZ9NRYmxZAGqSXqddZc4dfpvMDqiFi9W2bktiJNXr8AZRNMYqttU56nEqxpj2vmVSARF4B6Aiaxh3wdcnfz",
  "key8": "5JhkqByegoiDFA7YJgHPn523417R4HmvvEDkCLvsLcdUneAcMdBdseawLPi2MBBdYaUJtXXEQxSX2KD4Rzcbm8SF",
  "key9": "4xNxyNNSHsHyoBZ3tHfnsCMqeC8mwdLkhFvZRBewzJGdDmyuoYMWRZEhUfP2i6FR6pwtmDnhNUnwvG6hDzZi7McL",
  "key10": "Z6P2tqcT4dK2SordNaA2zcbrgS1ZmqDrfinvaEjipM449zG4MGNxe8FYxFambgTY769N4cQyBXMPXZoKUpWdvNV",
  "key11": "jhm96go6c1Z6xQw9GBfjVipBfrUQH6ZKECSfNVsm5B6Biwzp5qJMb3x7suvhFqYyJCAECjnMPKqwREwUzMryBd7",
  "key12": "BGCp2dckc1urFxXK2QatJj5oB7WrcaZGaqhdzbPdexq3t9Bu6aVPKensYhsNsFMUWcizbdzSKnrmcj1zokJC2YU",
  "key13": "2xquYMKAjXXpC9UiFqk68baJsGva3GiPgVXdJSR4ZHKgwcATbu8eYQsGFb4ufS4vTkvJqxsQogFBieGz2v5dMoAY",
  "key14": "5Lf1jUF7pVEzKNECCCyP3BX43eNWNBq685dQALQ5fhB1PygJjrzARbfCqMPzoy2bAiX26q9qjfkN4ZYV76emXEsf",
  "key15": "NDEkvHNzT7cjCZh51d6DsKrDaNhZJcF9J6s3wg3cfitSeMtkhntmpodeZKCJgcajyrk3jYHjixEGVbvi1RVy9qC",
  "key16": "3RWKskSeoFwoU8YcSmQfqyBE5XCaJH9Hnp7gkMvxoPa2KWs2nUTskRotsLSGFJLf7DaGD7LMJsmy9YB8eKD6gqdd",
  "key17": "5dYJJNfNhxxBS9BGgdGLs12iJAAwTYnd2DsEyfgxRRZc9VJWajU9gptxMcGCeggwS4LSYqAggb6ejou9RTy4AYtw",
  "key18": "3yfvt8j9UWCk7LeQChWUpxtppgFCZt5vdTka5SCk4FriFcAsaHT5xSV81BzKyGUhKWwsrHrR94D96Lxem7s6vmyb",
  "key19": "4KfiFTnzudzAVjVumt6foQgu6TRBjD6PDweLyiC5NqHQyDhP2UDbXAWH4KbxT79zRZofVWR6NCN2HpsGMQpqu8nr",
  "key20": "3F9fxWii99pshTwtCqcdXk81uiHn4tR5h7EARvXciguX4F4L3hVCWTaqqdmBV7FeMfRzhVDGftdxvrYERkvsuFEr",
  "key21": "2ztYMmh1UeS9CY1CqxKVqgLmESw23dtAzCK13Q6MnoEt7PVWcKBZoGdVBYguWsPtDwFRWR9DrdHJU9uVWjfvoQTX",
  "key22": "3Wsn9A4MtfTWC9iKFkqnzmBRDbcHQySmCiq7NGYSJSt4SWW17jESiEe5YgC3Y2cHvTSobXNSq6dozWSYtr2VcS45",
  "key23": "u9PVrg2AgXmbVErgZsUtNG7GsY8biL9AdxZ4X8PncULN74gcPr7RiejMLC34vugcaaB46WShgkNUnUWi1mhU8Y3",
  "key24": "2HPHtpEgKxZ99vLgDwLaGYfvKzoCTQ2Bv1MYeUsiicyoduSLn7bC8ykw7S7NpmiNWwMg96yfKWxXJkg3LJncVFTj",
  "key25": "2jQQgD9Vnpqo8phPavyaDVo9u8QVDL2hjP9wpe6ezhhmwEmQ2jEqZV2FKnH5VTdVHjbRduyxCDi7Yvj87aw5vKDb",
  "key26": "JzSSuaZy8RNDbqZEssaKKeq5RdnT5qG1qboyhD9H5ASbnHsnVkw6FMD2ZeZqABzTL4M6GvR1gYWpT4ZzH7S95Rw",
  "key27": "5s4QppzLoyfQUcQQXvuL86AcfkKzKUZRTPDebp5akPMP2FPoEFJKafakG9jgZfPYBCDZjFcH3QXoYjzxYWUq1wEA",
  "key28": "4FV85ecPi6c5M2BfDVoG42whUkZB2xwNRX3aCJKa2v9X1cLSDcMYUJTJaqPYBbNPiaVYeruRWaof4SyyFrwbQPDk",
  "key29": "2GgRvqRTbGwzn7z4DgJ1cN4AX4oyVMe3hfgKH1LD3amA8DcwWFXp2uEWQFoszF2MFavMvArUCnP9cYyPKNw5x7qj",
  "key30": "3yvedVzH1sWCrezjdpm5pVdbLAyyhrMc33QBK47xFz6tFKTopcUm4XsSGZWZ32v3FMtz2S5dFJnCUydA9MiZArY6"
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
