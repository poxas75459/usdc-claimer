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
    "5M8QVowZhkr6nyL6qJH62b2MXgjha9TksQRxUrrN4NrEJq5dax4mmXGM1uX5dHmFAemkVr3DQ3YapLijsNVGmVSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TZb67GmCeJbbSHT9nXZnibPKkQ3pWiTgVJ181GNfFTFugTJxxGiXvfXkdLnBPvDJCF2uhvNChVuofCj4sFgQtt1",
  "key1": "51EkmZqCYs6ZNR6iKNDDnUg44AR1pHyFmAne3octscNo5kxZ8ueuZBYCUHtb4qMaF7a5kEd7rB9qHKYRNtxZcrTX",
  "key2": "2Z5qLQAdbFPj4X7GN8DfzrrSaGeZ3JxvZ5kCF3u6niiec9nBdNmAj8Y64PsSCneXwAsZ3ebNDUSkwtjGUwimti1b",
  "key3": "RJMYEfnEgBii38zyu5zzhi61HpUZfuUXDCB5rNw7kQ2CKRu4DksYCrBCxGEfm5vfAJJAT8TaNMUMnqcmmm4xKb6",
  "key4": "56UkEq17y4EU9KJirSxuWXKF6EP9i2cw7EaCHeapNJQ4uGJ7xA177QmNZWb5mGeQPN44sbxPv1gEF7bpwRBoS4fV",
  "key5": "2R24WAJ7a11iRUBSeHpepfv8xkQf4VLP8WHirLHZJqDfm8hm3Sc48Vp2hP3aceXPuYNP9DGgsdbyb1xWJKPyxN3v",
  "key6": "RjYZsUAq1RbGYakvustTFfVvRxEjv8rsw1kKHMZzW7yH5XEX2fMtN7H9vrhu2BMdgtEfzrs9BdjtFYzQWNmjzN1",
  "key7": "dWxSkhFtQhT7C2G9QGkajJpJKgVQP9r35BZbn3Lzz91f7FuNG9JC5GgEU9JTN1jeYgzrgjFxTVhrLLwfenGwL8G",
  "key8": "338DANfR4ze8FZvAGPGtxZ8JDQdrhPYygHq3gseKp1p5Dt4uFwreXmXg58SToR76RpCx88JkvVFQUM2v47YX38wm",
  "key9": "531uUURA3fjHkjsgZ9Vrc2y7yNL3nGeEHuwpbo4i3nePZtkHeUEMZomQToNwtXWVoboFCrj6PLZBdZPgUigJoRWH",
  "key10": "2RQn1XBm4jxYkYzUgwkuGqwWUZj8mKSGnUWyAN3hQGiwz5zqbcyzGERtg1seQRw3A925V6Sm5598RtPFC8k5g6Vo",
  "key11": "224CQE15786MSP4dfUtxFgQkLF5xhePBzVo8Dq12DsoAb3v362tsaqQnNjhFMV4QtroT3ct4DSxB6vmX6cvf34Bx",
  "key12": "61QXzZt1rABkc5sweMtxddY1jzGr1nsM1j3Fr4jfJEokzVQQRy5cWxTXmimz1K7578LhkMzpnstnd8yHYmK51wyQ",
  "key13": "2DyRXV8WsMXS9nKe8Xd2N2j2hG8febYydxMi2XPnaoep7WaUPBdTQdgfQ1VZwtbLGsmYDWKKw2pXbMj24rVhKydR",
  "key14": "UcMBzd8i5xgYFADtf2FSKT1vDdKK1WbAzdZJtAC5uWfUaaFSkwhXy2sDgjZppLm5mgS7Wa86izsfcNXyoG4B4cv",
  "key15": "5DrwEdXy2EFNXNGP3YVpPCCFakqcjzXAeRiu8Jr6akPKTrjDuxfESVveEN7SzFTqJFD4HdAH3W8EPtzuYBrBcB94",
  "key16": "4fp52NEmTA5RMiVoc8c3zqy3ZpBubtfm8BFGdXvFYKfUMf9aWSyEjRaztVTMf9TmUT7kCnmxeUZUXyk8Fm8nd6RK",
  "key17": "HokpZwUnx8icjfW7NpwRMTnZCUpzWbEKT5rj9k5KViaZy6iC593hXWc32417NWgqmX4RQpitHHibbGrQVs7TEYT",
  "key18": "3tcSLJ4F7VMJDuX75qHq6nFfutqZNH18SLYxNns5QSUY1rZ4d2JkSTQXErb9UEnsDSzyBgeB7HDGeGUYUWJH6noo",
  "key19": "2s1HKtvGzPty3rk96PtEvfkSMnD2ew4T5ticJkvTJexQFStQuJWUbpDfJLXUfU2WdMA6dYvNv3T7CS2iiVeuXMpj",
  "key20": "3oDssfoY4LgZPftaeWRTsHZsp8sgDdePWF1Vqs5S9WFDod7pYKQ3QwXB1G9ZYFsxHTD9ki6kT8ZhfhbHpogpLj32",
  "key21": "2ryK6HZJ6vqoMJhZXvfrDzDAEq6siz4jePwUXFTVMzzk4C47Dyuy5KuTaVsNMst5azF4XkVDGSQGzPLw1iFmmGC6",
  "key22": "34vXZXjvG3x1hA8ZX2AM2TmQQdDZ4kFzHGbac2Tm9RhG2EFjtCoLkvJ5T6YMMXKWP1qh982vMS4SiwgnUYthHkSG",
  "key23": "2RAeC3CfWACKJyE7cmjrwZYPPhDTcUe858gwshDb5E9wC6YQA4HZxBrTGf4yKB6nGdLRh1ZPwCsV5SLyALaHX1wK",
  "key24": "5XX2NqzqiCmHcqk8mmJv4mbKgQxu7wpArfKdebvSAP2zPzaiDyGwZTGC5vVGPkqUAPfGnv6wkiBoS6ipZX24xZcV",
  "key25": "3aEtn77XyQMYQc5j2njYAwpd4hKVGQPt386gRJPhFt8YNttargQboNFY5frJo8DxqyfGbwRWUjHATQLVgCBqUKtn",
  "key26": "5xq7gcR4gNhR667oo8as4Zm3YEiX4a1pAi93vQAtC7EHKhMWrZvXxmg6BcbrL9EcZKN7UCAphy5VMJ1b6dMqRq8z",
  "key27": "4QdRVfojMf5Zo8fKykTayMBCX1NVXDmGwXfw7UYx2SyS4Kh7japuSSHtNgcryWRZ3oxYrykrhzgXHmFJxxQ2RNHD",
  "key28": "2SouZzUCCGh1vk9Pg4vrzdmaYar8cHV7G2Fusr5PQKwmzH4LZrHjUfQTjsNiXDLPgyAzbKWDKS2rtBGAdWs1EwXf",
  "key29": "3k9E3zWQkeo7mev31emnBcXizCgbqj7A9dcXcvNb66hokzrYdFmvUyyJCktffGnxaYzBJeRmn6nFryichGULCHGR",
  "key30": "61E6K5dED3iLgTNinS5oa1G4zv5bnCLAmisvMyzZzH15pEKsG9oygZ7E5LC4SdQ54oEK3XUzwTHfbqXziChAEpzK",
  "key31": "65Ni2resRoRpQy7PVe65DfakajQnkkS5tY4jusNGTLic6X33pwytNjbVy7THsZEPV19zfAVtHFWVfe7gWsWMQzLc",
  "key32": "5yNJD2SXREWtwaEqjtquKqsSn9zqaLWhsbTHSzXJ67joBYXKSTuYJ3TV6zkhLsQnSJrNJCSPoiG4fQSGaXBNwz34",
  "key33": "44TM5chuGnULpzYpHwks1WexzqBVeR9bTF2pyk4KNsqNWyrRsNKT6iFNTAudgdqpY7BGx7DfMtSBL2RYhZTGH4Ya"
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
