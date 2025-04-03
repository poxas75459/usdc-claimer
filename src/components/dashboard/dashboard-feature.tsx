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
    "4WFj8vWfghSHwGn4eLHdpaKWxFn26Q8r8Q5qJC9oaorF8TgSjMeUAjQsQWyC2aqpMB7iGpEwyrQFj2wUVMrzRAnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VbnZSN3wncJVxYD9uSSGaosaL9RP8qAiZYgnL1p9RTUyA22AsUYKrwAXqsRFCRqGSoXsV9bfg53veCcw2bp5zyX",
  "key1": "vsLFRQUf9YPSTsTPfNH7GjGaYvvAZrYyFTJCS4erjyo9TRU5CZZNMoDKsAHXXFzAmq1Y6Qa32rnm1vgU8My9ZfQ",
  "key2": "ypRHebX9NZxmE1KbGSEaXN8q5ZCcDtCYegyZpSAUpdfrKnFMAd2mV2pCTF6GUk9RY5tYtDmueXdtdndVmupYRPp",
  "key3": "4JYQYkL3pKmprzVQeZieeUrSnZvngbR3k1Bfpf8MyTj3rosAfW7kcXxHvkFgrMVy5rQwQLcDHH9wREZxKAsqdDGa",
  "key4": "4AQ3gmueanxzaaPL6h5ET45ecbqEQtivcHXsJeKwA85Fiv36YipjbBYc4Eg8iQiezTNc9YhFPG1f5i57j3ufTr7s",
  "key5": "3f1fwayPMi27uZWt3N7ixXgPX7Qx6zFnLNmKG2xF4KKThH4cJ3iQmbaVwKNXUqk61LPXkvVJqoi89UjhvqDZj8Pu",
  "key6": "5KS3Zq4oAYSVFmTWW6bTGMck3SC4FV8uoDgQWEgWth3jcF25XDm94E2b8jAaLo3s29YsreoUYaGgU8VbBBb9yu88",
  "key7": "KaRYzxKnS68igK6YYAt2pnd8ALVBER6DuFfwY6wfbQtuqGVE9c1eb2DH2ZJwDh1buWT966tfotEaNuHLvYRDwgF",
  "key8": "63KZEB4S5FJ4wrV6LRabJv8PPfuz1gU1k1aF4bZVtHTY3Fmq3b3opWxjeo5DwgvVdeKVf1JAPLAZc8TeQPdCEaDD",
  "key9": "33gGN9NmCughCLbcvyyzVGzqX8Y4W3d2YZkzxAyEGnoUfqgX6NieaCFjW3Qcb51tvYuRALL5rMS8aVYmBpFxC13t",
  "key10": "3tVQjSyBEYtgUjqHReZN9wsTWxeQoPFHnwoi9TuZLRruBTT4XJxtj8Jk2C15chSo5oHp5idn5Yyj7T9h417mCAiU",
  "key11": "5ffmZCcHrBTSeq3wp2cYAWMLyu7az87did7jCgRTgrj1oGpMwtRZGdZ45DTV1hqf9rB8bQLEytaH3zGja4V3oYFF",
  "key12": "5egip8c6yg96b1YSWcvGxq9ky3tnL18uHKVNBixpfz27wQ81Vi7BjdqASzmyh6dkkhK4PBpCnhzHfAq2Qx4uaAqB",
  "key13": "4ntgqoKPmZpJpUNVk4wmBiQoYQshnCwxYvrZaQtvtifVTXhWLyKiz85NNri3wrPTUDPLzi57TgycsEJWSLGyBo6N",
  "key14": "44FjVVwzFBvYiP538xwNFcZ56KQQeMwGR7fCGcuWco36D4J6eCFVFWRiTLiRKMhHostNDRSfaVQPhBZfsgfDriRd",
  "key15": "2piHEPPcS4aaXW1dn3gn9bXd8HNUcF9qcCGk8M27csgniZ9YP9LdszdJa46TuDrx5B1GLTCfZQVmM2Tqv1x7G237",
  "key16": "3QBcDgsrrYnxg1386MsChzmmhSgznfBEgwFvf1bfwiHkz7V6NDjnsMYvsFMBThWcfmknZzMKfmWXj7ZZVm2Ata8T",
  "key17": "5sn8FJ7ooPnhqaKugW1KvbyLNKDKziGTuuuFrMztJxy7etZiR6SYd9fLpkY2S1u6LnUzrToXpedLhruAUsPiiTCr",
  "key18": "cLrLtSeHHxMdQikBa8iD7Lv39TaVk84CttToLFeCG2CrAeGBwxv2aF6iuSmShhLoQQcKG4of8rPibNDUgw7MVr8",
  "key19": "4bH3iQeenZT1f8xAwC8ccXm5JFPf4StqVvjj1H8gSdGMzQwk7woKLENS6TpMHBtCqqyzgtzpTdBRdSMuXNXtHoGE",
  "key20": "3SAK1meTpkNsWbVymkNQBfGJDTUkkmf1ZLKRZyQRzqbLUbE75NxVynqJv4B67WkaSqKUaRwiVzeBLAVF4eXPWe36",
  "key21": "4UhMwTa5JtmQQ9z8NMx5fRAE5MxCKLPjjiGk8esVHJukknGDaFRZR2RY8dM2bDa35tHGR16z6ARyaWe2q9GsNz3P",
  "key22": "3KtLhrioztT8SCTtk6GZZKwXqgjSmHUqvwFuajeD4ZcTwSip55VtWzfH8wrkZdHMrvLhdZ7vSUKkAe2EuKspzGn8",
  "key23": "4AGVVAPcGuJmQhDdUTp8UMcJG8uDLKzhC8D44MvT78JqU45tmJfYuENv1dGApyT3qornvZxdXMfzXPmYYWexpaoU",
  "key24": "3ueBD9x7S68eNhbbxQX7ugUUX8jbvt7ehp32ayEuNBdGCvijn9hFzvYr86DMCgqMVupcWuNqdms5aJn6xJdPmKZ3",
  "key25": "2keTWVbqRuBYfA3p8wxhbMS8MV6oRhnzggud8nT5MHVqDuAnodNA5KuqC6DXTzmcewbQiYoqqPoXMynQfaTvD3Yx",
  "key26": "25ZoCJpNLaRT22Axp1zqMAjCPbFRjqdvRN5aYwR95gSANpFF7XLuHiuoqW68CUwrryBNavg7Ac3bFv3FbKB5xD4n",
  "key27": "23fDKuRi3M3PRHwjf8vgm5dHvhoYCSPrxFpnr8TzeGD2CMxvUwHpgWEXsStZbaDzvPaWoACBLcjuRA2bXPBA3H4J",
  "key28": "5u2JQhZCYaZ3qQGj68qDAHojgBXQpMLGZGiidag4juwgtKQgsF9Bxw6sXQCXhzNVXnynfiZeZ3TpV7QtvM3h49UC",
  "key29": "WNvC6PDaPtKse5Qt2o9rRRkHa6k3AQL3ejP4RyPF8zssiB6gzoScp1fFE9ybgVCXPKz7HdVbH5iWSmWu5yXhi9x",
  "key30": "52oy1qCMfJNdrGpjvLK4Pm217L86ZeAbRNtcJS9WzDz37MhBCipojPkeEomZSgQbA4AKDuDyxWxWHEoDsk6hmyuE"
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
