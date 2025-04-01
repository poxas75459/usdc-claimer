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
    "4PhXakvb8GbdQoZkT6TuoSqg7tweaHXSBuByYz962FmbcBiVjvs8dSAKxvAetxLCejdDeW7VgDNia8LxUzVwvrVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39JBAz2xxybV9qe4Gv3ujw5xxHcrXJKj3vqHADFV5jEagjJdhVDUGAaPXQ4CGwdeJtWuUhMg3suTVD3ns1YTVodY",
  "key1": "3rnxuw1vxidM6PaCrdkdJc7tsr6JjykNNxexJ4psCk17BxdUsBTkM2TKHp3GDJmRffsQiaNW3WX1kGzxfDCY27Ts",
  "key2": "3RhDRmyNrvKVXkFicjNKEmNVtTkiQ9P7k9nBMZE5dxuSgBRcCkujMpn9x2BUSoXNbuNVE275BE6QQ3fvQf83AebT",
  "key3": "45YPRKscMVuDjPgyiyBc6WEETp7fDs5Jfotm8hXgmxwocGPbGq5XsvxUrHzzcEwDCUUvvBVbgggbHjatL23LYoct",
  "key4": "6HnkcpMK6yhH6ABNztoZNYkdLVWv9ejLnJj8aFr3AB85T51yk7KHFVv7gCae78XbFdtxg29BVP1D91TZv2gV5Vx",
  "key5": "4UdmD5rzAhb9bJwH463RqpZ8rcb19yA9JYdi4BHbLa3CwVFwUzGYFsK6C9kRSboAqKQciRUDqXJJcCZzc3A38ccG",
  "key6": "5We67efXBvdP7sYTeJjUgCaoREmNpyfAHkj5WjYeUnQL8Ri72ZTFdbNuPw3uMuaMJ7NjM7HyihYYB6iFiM5XJZib",
  "key7": "4EVbhFqsV5R5goKtcsupwveYJg37PzPLerjKWQgkw65QAq3K8AjYHcShFRk9vVGqPEVwVEaT1QffFvRd3tCqV5pD",
  "key8": "2Mxz1suh6wM7qNwu7q6JDYuZrvtRswCiCR8Jnhgu5kWHdeESSfubjzMrYowdzpi1DXwdit113gjM4jGmttkdBRHD",
  "key9": "4e1zXUnHZRQXXrG42T4w3pw3gFLU7Q5iSZWRFrq4NRoGZokPgEa5pqZWgBizvpxeRT4PF2dC1erUPgCTwbR75Cp",
  "key10": "2EPELDvM1QH4C5wCRy6pVER4epYJzTm1UcYEsv3Qf3D5dSdNCqAEVr1c97twNBpypQTCxQZd5d6kKng7H49ZHTop",
  "key11": "4AohwTuYfT6SQJthevSC3BvxzSpFBMxNK6QFDDkLFadPf6WMtfswAHVHtw5BjnakzBZ5KhPy2KYo4fEgH4qkFvu8",
  "key12": "PDxmHHo3LLcsPb2UY4H5cekwiKD9wsh6pdT8RjqxWH7urixR5jBd4FeJuPQGadh7ZHb3McgKCRuhQRgfyUuQhZH",
  "key13": "4ifrUi4HZqi2oiVNYLgSQDrL6F3ztPrBzmAQzPxxkSESEG4XpyYtkYbRAWy61zEhnLkgeSENyqpagx78kqzhJ9Tw",
  "key14": "5ZtowzEDRJgjYCCnEHGS9fZnVyhm6Ttd3DeYL8yAeGHD5ur1NRjqNwqKYemWeHLsUE5mpGEWG3KE6EWhjeqfEdvr",
  "key15": "5JYn8cfFVhWqydiSZLXMTk5mxgyqgBHVCiNA2uf2vmRmXpzwpzRkCtWdChM4RwHYv5Eth6sLZfnuUEDHjxLYRsff",
  "key16": "45BNFVX5eTaarV9Zu2Vu2p9BGooB2MAuVUSYGak99WXRckYDZEXU55YN9Wd7e5hnj5MJWLRGZPk7BEcfdxi6bAei",
  "key17": "2iiv4Bj2BdUQFk3yqoMi75194Zy9JaTo9NSU9xb2pi8Ha3PwPfwFqb5HJNCkq6Hcgr5hxoRCpyAgw26WTXktVBGc",
  "key18": "35zuk5eLPbcQzBkLA2XSSa299BDD9NVisU2fGWK8CywNTdkkvi6eA7oQk9Qwb4acVZe1jqFBGLVRncjHmJC1WbF6",
  "key19": "4wy3RyS4bsUq3zJrT7WkB2UU5aH1QTHzftFfAQF4YGQJvVb92vbapxNd3bj3DYjkUcwUH4kzANQnr2xX4DnysSWK",
  "key20": "4cLmqtAnVv2FHJxBrCgTDwNmZP9LMJNKbMKE6fXfmU9urdfsmoyMEoNJ8PY9D27JaMCCssDguVRoskamFmL9Fz8p",
  "key21": "2qUgDnZECLntxY83sDyR7EBQtNe64DumcdxMvYfUVeHGvQAgXhaQYTJb7dNDAaQQwC3crv7Cj7GsapQdbi1Xf5vf",
  "key22": "4NoidoKz6qgntd7UJCFgt7wnLo2VSGKjMus4NBz7HtXbzuff4DHu24guc55unhTLfDoMgsMsSpUAUuqAA9XyAum2",
  "key23": "46vd3jk51wdL2XnUhmY9gvUFW5GD2iXCiyCDusmEF8bsxYBMG2R6q2d1od8ffKjbTzAs1RZ2CXrNSiV1ki4K9A72",
  "key24": "3rnz3RbQuKFRiRNTPuC24J9XGMiBiirJAVPMgeKuYCB5Q7KVFdeJn7i6TidfFsaNAVGA2a5Uo2jQENCmP9o73gMM",
  "key25": "3B3w8XTdpVicAMHEWKWJcsViTFm8HPgMwBJhZNrjqdoyGviXeEmgfAc1uj2BpCxjJ9eH6J33cKoj1wb9UFCyLTTM",
  "key26": "Ra8rtz1W3JTNSCEmiNsU6jTuLmZDLqnKo4FELzcCGjqyeNsn4UFcDqzMk5TdqwcYSaeWbxk9A5rv5eucgPuC4Nn",
  "key27": "5aPaH3kz2bv2rNrc1THq9ZM6gWtLYXEsT32udh5qci2oJYJqBiDznBLRmU5x9pjhQvup4p2c9UZHY1TfriU9Erc5",
  "key28": "2X4wmiti7tvJmHG96qNAZJnxSvH4BgCLpz8qpgkLGhSJnEB25YtBYwyWHQyMtpspjRff2qFmvMK4YLT4nPeiTd8p",
  "key29": "2mHLToA5YNGzs5DedTuUHizRqgGSCPD2oKX9qeyfwTW1DLBjphKrVR7Z16AHDYzA6q9GJZWo4TJKfzvn9JBFCNkX",
  "key30": "3Y8gULk4T5KEh57Py5uajYtn9ZvLvt3uD7Rop9CkMyqBVpiWM3BbEUnrMW9r1rBv9gpxnbdDL7aqikijv8Aqx2DK",
  "key31": "2gKgJhErW9poMZhUC9xNFnYbEivpXKki5hPRhm6L3Hbq2183KtFhGWNLDHXx988zcrZDVdGCMNMP3RDMRz88tFLA",
  "key32": "2vwnxqmX8bueHpaB9TN8iBUeYU6wNKNK2H3wG36w3sEknk7U5KqfWLJUwj4sSD47vBS6LMXjS5bPa2Z1Y1B1KhBP",
  "key33": "5JLwYwhKpYhZyEY8DA7k9yMFKpsveYyvnUHdcJJ2xhAhf3Q7oxZK9i4zFF5X4qDNfqqZg5gnBKqqw5pkxaXHGUXc",
  "key34": "5EY8PqNDqJ5qY4LJjFXwWjEmj98PiwZD5AwYpLwZYhVbvXkhqN6YamNMdJNM3WMFha7pRkBngKAkxezx5pVGT8HG",
  "key35": "64cxioq92HVQViLv1D2StcMicP5vn7gAKmfBprsGiaExyBuhXqed4v7xJf4wxaTbjrRUpNm7KxFyKmnHAAYtEo57",
  "key36": "2tBVpkU2MJS2FWeGS6wpMqTGGMTqKxrvVLakY46BFteTCcafJCDhvL8U5hxVVEYxAkJFYM9TXC1ztb8ha1iF5mkJ",
  "key37": "5hYHrAquHLWB4gexWUXsx1wqYDz9WKFtzJPUAwYCNQcjk7HkTKJYyonvpndiEcfepcivQac8h7c6BjnxSeof36Lz"
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
