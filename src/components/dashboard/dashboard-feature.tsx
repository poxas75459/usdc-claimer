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
    "23BomW8gRKyHMC1eBc9ybgmQkD3fXdeXFSHKJC4BrnbMcUyUsvwvGUywAG3pvHAtfX2fHyjpmWeCnLdhRAyQmWAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yZvMZ58ANQhwkNb5LL6UKhjxvNNdHVQGQgUa45tn8ewotmQcTCokEneyB6RC7Tr7PE9bPinAXg8c1vhvJbBqSAH",
  "key1": "FxcUousn2LDCehgJKEjedYA27bSbHwRVAzrfbuLeWVpaniLtorAT1L9ivJLoExVVPyi3Wdnh6DzrsqcsRaqnZaA",
  "key2": "eCiiJxRdCfggvQovYFmjeqEfeVWSpFvCHL8tuiyHbQavFLyjVB6s4xLALprjQWb2i9Ht8Qesni28xec6ij85429",
  "key3": "3XUS9efupsrGaK9Rz4q85Ha7UfhdS8h8K8RCrsgnrUXzfZtdBEq4a4ZrGQ66bR32i9S83MSJApvnGinvbogRxQ6f",
  "key4": "3PserDaSkoBa95umbbXtrba5WJPzrGnYt8xhNjbgHLeQqEY5JNHZjcovUXPLjigJsLVdLDZkVKm8JYxuEnWCVcCd",
  "key5": "3mfumSprhQJSYhrQQhs99uCThY7wzcvyunKnTirm6XY6osCfoLJKhnpieWv8mHaM2hUE4A9tZQ3E1wa2WvTga7t3",
  "key6": "fdhx2yxk1S6JCcEWV19A2gm6KN1GmHLwnmUqZEkJvSaMVs38QCBdjkqTBnewxcsmefsNrS9cc5ssZ8vpkEYnKLh",
  "key7": "2UGqttB1nXLr3oiWxcAhG1e9XfBVNxMTWQm5DztrR4yYESvyWrJRsc8kRfQ68YzsVVS4jn1jVKbaRwMiU8UYuNwx",
  "key8": "RDVuDdmdxHq98m3fyu2ZBzCSDn9gUPWe2LJEK2n4Uus5m6gS4CYZ54BVQkt6KnxCXKBX3Paz4PLqZMa4QqD2NZM",
  "key9": "3xBjYEf37mvgTdeGbDaSjZYywjvANn9w92f4HpiJqXe636bAgGaxBHkumnXQM8BiHGBd2MJqQQjLrHNoFfUbLXNy",
  "key10": "2n5MYREMVfXn5cvZsuV7gWxPjRhtPbSopqCgPwqXyYsb9GXpqktxGvnoYvEho9f9sAffqG1Hic2K6Ue3oc1xbfmE",
  "key11": "5BKzrs7Fe7ZCz28b7yBwspgYH28QsoeJ2rnQ5k9kkLwEfW2MraemGY9dxMgbpEGupkQcaQ4tdbv5vg3gc2UMjB4V",
  "key12": "wZy8HQn2JhiHxk2QncPZRcVavV39BzFVsW7XEYYAuaqwCGXKMFemP44cKBTWn6pcNV9M1PKkfqp2iegBobshrEy",
  "key13": "4aCTn7MAkRj3h5hYFkrpBzkSao5W5BJ8FjTepVP5bvt8qA28SnhZvdgdbsgS9wNXpoGaH3TgyvJB9mS3nZbkPuuQ",
  "key14": "3exhEi4b8q9W1Q65BUv79S6dj5jGHNHC25egmHK7E4J68Zb8PC3vYdTxsMy38rt4T4ApMdoeU2YA2HHQxfXJfHKy",
  "key15": "3ZxHqZ7VBfVtBotpccxZBTjWHbx8pXKChJ9UZx81AdJLy7FLqD79neykpWP7AZAvk3WCRjoYqY4KaWWCWohZwL9y",
  "key16": "74KZWorMy6ieAb5xRAheu4ysmXhrg5Ys9JJjbYbr3h1CT7xjyP49yskp7tvSe35E47ykRVMLwxJrGYcvxVBrDPg",
  "key17": "3izejVT1bpTzVDrVTF9BXAVSdip8xaYmx3XjXk75s6xw1hrbSPFJzaLcpTPAtEV9Y1WdvrutYcQz2LfRuEeJWWFP",
  "key18": "m3XvS8aEaxyhfUmvAaSipxTx99EuHRwzrU7LyRqPm2tWqit7CsviKtgJzKRoMn4UB6Ev4m3B48Q6o2pbYHrD1xt",
  "key19": "2ycigAR6vZazAmoqztWSxk5pF4UDDAysyrcLCuPE3SiDERr1432VFUBQ6x6ApZyotorjcH2MgNgp1TXritTRiET1",
  "key20": "5dkynJMtK1eaDEp448XLJnMURWmfoxWupRCrfeRfPiNQdS6CjJajBB3rskhng3qo8hZCz9Qn7KsfjiNghFt5eCs3",
  "key21": "4CY8GSFoQCib3Z2b9swrMJ4ocfntLDvvzDSg8Bf39dR92cs34qeNBTDZYwXoK7oCkrfw9z5YorkUNzWGejWc5xS9",
  "key22": "2ExvNtpaVqATBWFwz59cKXvwGeEwi8CiKQ5314oFfmVHkwgM4KnsC41w9FWuKN4uojXDXPJ4zEjnwdLDBFb1Q4oT",
  "key23": "tngHWFvRiyoX8vhSaBrafUwXnaqL3unCTKkF5eEmhPP2F3Zor9FkNKvTrQnLNXKtuZLZVxAun5YDuxybTECXHbN",
  "key24": "37XgyacSGXyH1BpAqcPU9TjiuntjStG9s65dC7As5zt2AXT89D5C4xhvH5hFiTGA3BioNmiJH9dkBKrKYMqtPCfo",
  "key25": "2nkqeoKji2ScjPxkXbdyStdPXc7EY8a45UcWizoBdhifoAKGdyJyHaCT2QwLm6CcNZD5fqhpygaoRdpiABDPaQGf",
  "key26": "4kTgUdCqEapVcjAZ4d2c2ccZoAKVP5fK9pAm8AyMaxx3ySyCD3WfDfW9dA8uK5GQ4z6sfMqamMJZw8ZmVLvayYkD",
  "key27": "3cqYknyd3vihowpqLCRm6ztsrASQVuitZgiJYf4ekH8yGmKMzNoyAJrMX7KzUwVRhN9R87pJF7W7isDSUj5rJXPF",
  "key28": "3DDQ3Ac9ZTVhSV35oSAgRFM6rSts636D5ap12mZfCBUToXxCpuDtN7e76WWYADPDxhQGQemZeNfNoWAeKNhKWzuG",
  "key29": "2UZkwhroPDiAH7SdT9oNPDL3rBoBeinHDmZCFsZxMqbvZAvhRvoxLwJw8ix9YZAmLH5fX4GY2yRrjpUQ1AemUgYZ",
  "key30": "2VeEBuKyARFVyF4oWn1Uzgv4BXhf15asuyPKTJtkVuTqHVQvSVH92KJpXGaiFdDveEBcnBXog3rtLPqGSWyNTqGt",
  "key31": "5qdS2dq7J5CjxbGchS3GTqnxm4zWr1NqDmqoM4aapeaEswmLuKhDp7jBgNn2qCKrtHVp1UcLbVBeEE93C12tAcnm",
  "key32": "qxRVpzjJjLsYWZa5uco74GvckbxHCUT3EqkQKMAPWJ9s6hGShUWM41s3UCfQsHkuCFkL6noeCHsbNRDUSJni7j1",
  "key33": "2xQnCj3fQ9gqbd8G2kN1v2ihWBRhRG83KUgpNHaXnsaz2TaNu9VeCpAFcQGdwj5qbL9z2W1PLCHyVAqvvaQQzYyE",
  "key34": "2SUiJzBHmd2NZojppPnSZ45ked2EiKjELmFE8jKGxnhYrUXo3tj3LZYW8qhT6sAR7AR8U1PRsbqbGvWA5UoYDWfJ",
  "key35": "39QaoY3ZxuCUwC3ZGzn71zcC9QgsCYaV4oim541XG4LmL8sen6FKGsHhMxEEAgsLQYJvFjJtXvmK7sfy3U5RRnqf",
  "key36": "411VYmghZW1iYjVVL75FvdgFtCRrArZaWUC7pu8wkQcVPGGTQFXYwkysRCmek9smn8iLE1P3nb3yTAKqfe2unQJ1",
  "key37": "3SPADLSgNv2MNVoAo66QAiFvruCjqHPbFzUtDK3Nu4XFKhqY5AdmHAPHdq1iuQkRgGcLNhLaLfUVcTNXGpHumVDn"
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
