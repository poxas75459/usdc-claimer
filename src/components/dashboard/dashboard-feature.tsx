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
    "526VvcwDhYTZxknhh8ZUCPyZD6KfiyWXK3yWGKjBUQKaDwpt5VbqQmFj1pGK7yTE896VvSrgAEGmtocC9XsdeDW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tgh7RrzWrpzHN6qdC2xRKzA9Yvw3AaqRbq283qN41p1dTAca7aTdhWdV5bCmRzAC5EdDCAkA5FWqt1S55m2SKnZ",
  "key1": "2AbGt9Pw3qJJzy2UC3CmadF9kLDgypvBXHUqpZQ4QHNiYqBJUNjJt33RHTcPxJUDYr9uiNCRsLjWUwFnnsWgeu4X",
  "key2": "2asJ5C4AqsbjLh1CzNjFqfAKF7w1hQ3miyBhb5jmxf83yRrPcFH1weuEZeVMnYj2qbgYa2piBkGes1giXxfEZYt6",
  "key3": "51vUn67tBCaoExZ8isVJMJEi6DoNuszoktt6qv16KhbfeJgNqKjvKChLyJN7HiLRaVzooqKyaAp1zEBEJSnPtRag",
  "key4": "4QdvFMQBhTkmooutUTyeCWShaV5nNxvd5kjYAhhV4quKE6YE7Q9XVYS7rMWRKQhLeytELETP3QhGG7JeCmXASsZs",
  "key5": "3VctGTvvJvv82Lrv7nn3NoLUZ6HEJBwjT25sBAiDE1h6KBQLWxMymz1FwFf38UrNPLKFNaGqog5T1XAW3j4SCHsn",
  "key6": "253HmzWwyd9Q4y8txwbZcwJJ5APX4mGBWdKK64wVSMvq2hCEwVJYNro42h8zMZxshbBTAZGxRFSn5E8y1Bw986uL",
  "key7": "25kUNMMpf6VqRRJGXeUiTQisKutWSD8YyTv317pZbbrNVVqvSaSE6NDYzisB64UEwauhbX3jwCGza6VRs7M9LbZd",
  "key8": "5ygx3LigYGzW1GaG6yye9jT8bfMDndzThvTScRQtgfwXzNTdWoE9Gf6JfFr1pxoKRUVmb2XNA7VQwa6KasqAnLaZ",
  "key9": "4pB1w6iXGWHisrYvxixQxpeByVASN1MTGTnMUQjSZzXbX5QRktsiW9vuQ9WQP24L5crcHNYLcrHpDrowrFcRPr9d",
  "key10": "3ygfYupU9CFQG4CPNLRJESipaUVEnbGYz41VBJ9bQYtMV8aE2mT47qj7sTqmRpfMvhEuvnBpH815UKEuRk91Xjey",
  "key11": "4sSEahYaUEPfvB3Z5WWnPF96ZX2ne6zu6VTTqjEbjuChQQykNtvcuLgiHZCBmUrn26P3aVRtT1tGNrhwj6rp8dsg",
  "key12": "4neoV6WirhDWY3mqyyyTy9QRYJSRnykXh2jyYLrfx4TzbG7dTyCq4Jam77JC8iiovGWD4bUrDPh9wEnEDhYb8Dg1",
  "key13": "pGzhxRCaEbruNic53hfYJxBrQQUyFAs69C1oefjTu4bpQEBXu79dunNU6xHLKXQJpyHsgNrDd9nk1bX1raGkHZM",
  "key14": "47d5yo6zTwb1cSZvV1HtC67Z9RLebrA22PPsdXnsMYoxAVPnJ3MwEDK1DQmvCutrvPsBZiLPCeepLSu1vNdMFqLW",
  "key15": "Jb8WfYAMzsNmNHGxczWMvVoAzJMuaDFKsLBH7jddeqXhUxY2MCHFbGwPc7M2zwhi8cYf2gJmrmkazNm1X676RXu",
  "key16": "2632q4kRXviq9jed9WA7XLR8JZPAgCfcwJXjG2XSzufHeC1nxtNWvAVbw7ZbpV1pysR2n8cUPz2NwtTH8AbZMwDR",
  "key17": "o3Mopvua42dXDiAozxBscKy5Vx6kLtScAVvWStkpUa1QTX7v3muVsTonMMNWNMpbNPfjr1bskGdNq13hwypvvWQ",
  "key18": "22ijT4Z7bEQYL2LEnGzVnPnBDQ2rX6igUjhtAUnJmgw319Eftei1b2YUurZi4JabqkzrfNGqBXtCRUM1mY8NRyxZ",
  "key19": "5ZiXHxJ17rit2Sts8qNKaT9xH6KjN2pdVk3Bfd5R19zNByWHv76hK5C1sbe8khysoEGQvyey3H86uJA8GYyf68mp",
  "key20": "4vSDgA2FUY8DPyn46FoLNLb1zwdDt7fwT36YYaTb8L5uacDxjiACXMTdHNrht3oBvh9AuTyppGpJyc3oQFzXksQe",
  "key21": "akdiNT1S2c8bqXy5psjbK51vJc7uMivXT8Adz11edLaMsM3EgctDt7TAy6Ha8CQTxSMDsgeffg6gy3n481zrE2b",
  "key22": "4pdRs858XJgaVow9DGxQGz8x3HHbK49mDjHx4sfPWiLuCm18aeFnN7ybkAua9qqHxMFLJgBUz5Rbew38wnf2HoJE",
  "key23": "2Vt1DEMsSAJPChsCiuzC37dMe9634VZ56jiST4zUha5DEZWatzwnH7rprJMGvSQKSpusRqwHHV2EpxrFH9aNHmVH",
  "key24": "51y7E59sW8nht5FP57DMwpaWiSBZyUAVv8ELnoRZLwRsL93ojWQshtVUNfscnt8wsam5xQzJDFsSSeDNtdi3R77o",
  "key25": "28k2hNGioPXxc8xYuvmr64nXpJCC5RRQqDZU5wkpknGsfpEq2fjgV3jRaKXyREY7fHWziMpdgyQByfCSaLb3atbh",
  "key26": "2VP1dmGeWcjakCGreshMwdvdf1MAQmjFTi59N3NexMrmkpNmSjMo6TfWr6YbHENTNKb9EXkMj8d2hC9YC8Xyc9R9",
  "key27": "4otwFLGCGGP342fjFeozmEcgXWQseDivXDUTn1W5mK3UnzZVL7w4RFbYj347RCzzAPfvh1gmvXdP6Rp9ibtw2zrZ",
  "key28": "4wLVeb5ufGkTod3c62oGGJFY3SStB7cWkLFcW9Zg4reKXr9hbLGTwiC24mPkxhm9nAfgS81BH1Lso8sZRjkrnprC",
  "key29": "2TvycKBvuyqf6W5fTpEN1TpcQGfx59DgG2u5BagR5eQVzFr3zvidxyPHhR6XbETWeGB4Gxve39RYqUNVoQYJymGr",
  "key30": "25JkYdTceNZzNVGqfzPwDCP6e4uLbwUT7BPzR7N6L1wZFVQ6t5DpU6F5oj4DVKD9uczTdQVLCHWxDUUxt6cVzLY3",
  "key31": "64VmbUx2v7rC1FCcj7T7CTFTdL5uaWp5zeqZTf9t34zLxnpNjcmVq16tcRbmtiZzpYAJPmK9dVszbvd1JnybdQoW",
  "key32": "2ApsVRZ1uGAy4rd6RBvR6h3BmGxcFKj4HiF2dngQa1HSABQr4aKo6HwjfRzoS6fkDySwGAiv3gCN775Pg28aTw8R",
  "key33": "5GY9TcnvgqXmxgPmYD8XtK8BoGNneRQwniM8uxdQXmsWbgmwZn4FEbu5o5k1LbZhRUzhL7q7U4CpWRr2oXHvjTT4",
  "key34": "39rmfCJ5ngCgRnnY9SGubabzUDEuKcKwErvk7KMwxVgwzMtHfX1t3ykVhjnv24BARiCHMpna26AJ7wneRf2GvzF7",
  "key35": "3Km3PdM2tZsJ7xyQxsmcXA98oantStgXv68J39ji85LkTqGomCS4eq5JiUcNQRxfGXubmwuhcDPV7HGBUMvF3bTu",
  "key36": "2HeBd2Eb8bgX4kTAanEbX7trtGtXa5qLL2u8zhYanrtMp9EDKcmGEENjdJ5UbBuuAHyvQyXCkF4y7DaUxKpj3ojX",
  "key37": "4E3a6h9f84t9scrj1AzEBE8BXnuVxG7H82CbnJaV68Ar2tdGx9QSbrszki3m9SDvWFWgptGx4gS9WHe8ac1gttbx",
  "key38": "4ZbX53guWKono2MV6g7YZs1moEiqJLmThvGUN4HsiF3peF21fYbvPcJGmSLZVP4K7o1raBJDFM7zoYAXkuMmJp6e",
  "key39": "2eA5R3yvRd2YrsjDDb3QBHgewpbqQa4hJLLiZMoj3cWeggjB9dSUeQCUpJxuGfPyjGHPwVGv9Y7rhojU582xMPP8",
  "key40": "549WusDNgL2waeDBgoYsaLBtsyo21FVsrqqCCAmBtPmmT8gEsLGAafvV63BUW8aYairdT7W2P7qhXJMxaB3YLTcc",
  "key41": "5rWev1CVV8ovahux5mGdxT3m122Tw9sEcfQJ3rxc6vFi1ghXMnqsicEKiahrV2oQogTyJte7PsuxhhqssXaj2aEw",
  "key42": "2jz3CSgz79FAV7FGAkbLRWbdVDoZd7RWyT3VuYtWRD24Q6c4NYuEd1Yd8PN4jrhKpN6ZkAShyvWHq2d8CFHCNC6M",
  "key43": "2J2utjp8dmTF1GJ6Ad2MtJQMyMpxDKzvcEdoHm5vMYfGghrz2vnCQ1MJSXBQBqzhRrLUiAwAri994pSF2R2dizG2",
  "key44": "2rFfgwWAuP19tnUjSzAevRvAJRDNhqpVTGCVnq2oJcrT6u9w2ZzpHZqTzjUmYmWA1LHzSqHm9W1quQRyZBizXTt9",
  "key45": "2E1DMo8HmTRY2wp2kjA5GXh7W5vunH372NBYosugJBype5Rmgvnj6FYMiTdYXr8ybPL28tCRJ5tfEFCz1ZU2SiJT",
  "key46": "YQuKrVioFgX1Yr727UYfdjPVbkpr9E7JH1B6v1BtwZfw2DB9zjaC5nwqDCBBrHquUWuTyBaVf6HmJiLyUC2zEMt"
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
