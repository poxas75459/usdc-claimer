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
    "2kSNNMUDCGZu45ZTy3GCekp7g5N6xL1y8BtPw8j8Wc8sGpNU2JSqFnhzZVY5Jte8Jf5oXBT1wtGB2SJ9J1mamjXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M8VzNpD8bZCPN4r7JVs5C5i7rw5ZYL1WAHNpvrxhAsLk1CzYzbmbkwXUXGEpSn9uD3kCWWVAyjLXSR98fVjwUMn",
  "key1": "2ziCEKy3JqAuyKxzsyD9WFnifLY4vunpDVRoMjJ7BMK7R5g2mYVGyTY9HMrYvCt38Zoq7BEPbw86BKsaoRPX9axT",
  "key2": "HKLhPTgsKR7n9F1DLiqFZLpiGRjPgdx96w1S2B4wWj5KbP8xwYTdQAKDLssXmVXhCBDvkJ1gH1XwjmaXt6XD2d3",
  "key3": "57RMXnMcfEy4tAAQEYTcJp1yvTWh3j6qq7SmKCCBufQ15u2yasHybgF7vNeiwNFtnyLK2KnoFdXnmyhEskVWxWxQ",
  "key4": "3xbNQw4zPLiq5az3GwJjq5KnKmginBuBBZbZUPy6uUycmS2toNF8FbyAcVmKk3uH58VtajDFEYSFwGj5YMj7zkZS",
  "key5": "3JMznxoP9UrqZtzDTmahTkhzAquuRKaBMJg2DaHG73637QXBctyakrjh7z8TPTJ6sMPdNSb6sKFYyJkHveuvCTyQ",
  "key6": "66iqSZo7bGiY9YHDXuk7v8S83dKaqdoXUsgtXAEnniPD2Zc49256t1EuV17VKunK5QqGvvSg2gepq1S5UWtttjL",
  "key7": "4iQT49iTGoPF8btYbydxnXQW6oeUoH2S9w6D55i8RxwPRHuKsyXgMN1CYUitP2PQH8HpcWtyregnLdyp9GUDDtak",
  "key8": "F1ZP3jBZ4aKjMEZKKVrhPKkgHevyY3SqVqarwnojj3CN1A9A3zWcHhXubzfuRxBVhR4S96L4TGHGAQfvAkWdMka",
  "key9": "4cHdzqan7nEBpbSMkEJNbzkURsnmSuQnseJKVPgJZhc72cjD1MxdmNRY65LJS6xzvcAW1e513i7yNtVd7rbc6jHc",
  "key10": "BLHw5BZHEkaevQd87xkCrJKX9HtXVA1PehS1DhGkHwpT12hidgZP4BxA22B14JgfH8uVJA3CuowcrEdrQF3dn6k",
  "key11": "5z2qQFDXzp8m5SFioeMofGNQTaP9xpwd4n9m1LwaDhP2DDtoGad9G1K8uRvENLQGiAUnZYEF5pzHQYSdTLSCwnd9",
  "key12": "3hkfyTE1tFpnm3V59fC8fQuZb1pkV6CuxaNJjd1dMkoDx77rMg5SWkmkBDs5et4CUb6a3aePmsbp5HVb5m5XkYGV",
  "key13": "41nfvGunCuJWpwfxAtxinHDVthjz2CkZk8y3iKc12gpqiB5W5JUXzmuHXSP2RdUR6R4j42vehaGTsLspPQnYBv2e",
  "key14": "3yUJTb1enZ5GC8VyFCyMmP2uUpKdbcxoPcfNhudYRsRwvYTadh1nVT3QBrujagZah6PhYutcXLKsHhCfnBQpqriN",
  "key15": "5Bk6TA1BcQZk9kdrw4oGweXte7xPA169xAsNLmfeEeZM5ZkwzhfPGg3NFrxGgBJd4wAC9kcjjC3StFwoBnwVm2k6",
  "key16": "4ob9zhBbyht1JkgEsikcSrG4KA6KZ8gGpWADoWUQgbYDK6Mxh9cNWfyBRAfHyUocHEWhidEQPwJ5YiA7WheEVp2m",
  "key17": "2YLvXzUU9CvgdEWYUPLAPpVVwbvqfZJxmaVXkNAUvvdPJe5b5PA4miz8SAYJ9jp4ZAdRVNNFcLPfz1WGbnTQkwpm",
  "key18": "5puWbxmxc3iVDZkQAwF86UYNt459mnR5xrj2JtoyDsrRFS2fhegF4izUobBmFkfMfKJTGAkvE12enzHqxzM9U9jZ",
  "key19": "BXF3z7dhTKnRtfpk6gS5ZjNBps4vENn4KRQ27FuMBjXrm3g3Bao9auKqHnEqUfzGocjMRrBFgnd1t9A4MfiJtw4",
  "key20": "jbMvFT622p8Jq8AhKAjQGJaUYjVR6kcYNtCdpTszSBtq95mE28Bn35QMUAuAc3B5drE6jMopYPA8KMMiHiowxHR",
  "key21": "5VEgrsvGxxqi5v349fvMYrHrbw51JMWgRtfVMHhLXyaqVJPLWXmAB93XhGcDpkvweyUYeyT2GvqANXbb52M57aQP",
  "key22": "4fmshbbocKJw4AAtf2yekvoKqooU1zPo4yGMMfUeAFC8LHxdhWYB8Zsr6xfdtBQfKhY3SMfH427qAVNi4mCqygwD",
  "key23": "5KAjoZCnqWwWB4XQEpmB3fgA2AcTjn1ATwnNvBTBxRNnFnmpUDYyRAU3eMe5u8Z8WSF1oLCGT8fReDXNrEN2K3Jz",
  "key24": "iyF7NgsFh38s1CQJHJSe6WYVRdVkTtxJ3v5YQ1Jj8aW1XC8Xgm5HZCvFZuztEavDZHadYCoeis7tF45V1yTV1Qq",
  "key25": "4wN5Ke8jsPVdRZUskh6WBqUvmzxnwXZeXUofA14bDCush5ZoAigTW8c6G6XzMoAnKg1ye2ywjwfWmbUAxLAYLVzx",
  "key26": "2vspF4YcxzRUreQau5dE3s71iWSDtnKmWcpBVkG2CwxZdUbD6Wh8m6Ls1mkwfDt1cPoHu1qCHwEmW56jwPTE75gB",
  "key27": "44q5akrsPonQ3c9KbpHX8ZpQe4Xrts4sHGTAWyczXyXX83cCfqvtDkub9gUUp5tQ8vWvYFiCVyt8m9vY8G5nKjGZ"
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
