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
    "43nGarLbh6K8QDNqHndBn1cxUV83UfBQ7V135EbsuUrNCKuzaNstZjjpzYn8jMZTM7AMgdeeeY3Rctp41iiA9aDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u2KkqyDyJuriAJmRm4H3Mr9aexfUtS3etrLUDW3we3SaBtApD3e1hhWEzW9NkKMCN3ufnSjzaLBhL9LScwvcpq3",
  "key1": "2PygzcT7UVuF76VJA1SB1rPBWNDbviULb33nezoBdSxbLc42TLQfVR7nVdEZokxqZv8JsE6ge1cRzq55oQDLMAo7",
  "key2": "3UUL3u4hBwLrEhoti48bo6MnHaGLAVHxv21dRVGvshR888EkSJ92qJAUBfXdQgYRvRW5pH8DMSirvrr5G21RgDKu",
  "key3": "3ezcyNDdkJx4NACWbwe7Skd5vfnaqpEpiJZbpaj47Bzn7cCoTbV8Gb424HbpNirqYkeiXYBJLrM75mgmFDc1JmNU",
  "key4": "g1EVRASETbrjPEKMJfsNk6rXuPZyhSqh6wFQJHNxX2vjYjpQKSct5xRBPvGh65EQUernkeFGp3THWDyHMQiqJeZ",
  "key5": "3aGYRf73Xt3zJZjrcz1MbH16fjzzbvDzJzRLVhtki9vAqT5dsqwwhCPQfZvtjGaWXBB8hhcfjZER6hv2VuFB8cTf",
  "key6": "2xSPhQRh82WucCEG4f1NRuihm3FfoLkQb1TVbBceVh39fWjR9Hgv7C74D6dzrPhsDmf3BgytGhsKFRNAqC6t5zFK",
  "key7": "8suaWBx2gPb17VxuWAdWvMNcDX4BUG768YeY7AQpLw9eutWth4h5Kz9EqqLqkDtxHVKXztvV39ZGseP2vfb39Sw",
  "key8": "3EFi7yGe667be6Sp7yWh8SNxNgQqtMLvHSHd1VGU2wCx6RjZwoQf4M4m7viftJoKWyix8oMDVwrV2FSUxXS58JU8",
  "key9": "3crFN33zwieMcDgt2kdZKaoLkxn1s2FnGTCQFd4tWcKaZTa76ppLrFcQbxzCoJ133hGieUa7YTwF115CoLwuzy6v",
  "key10": "2ycqkTQkAWAzNW6PnuXU3DgYKkZJf8ZNugztbVPVHtYDfMkmZrxJXLVZp2j7Xpcqr824p1zgCs76Xm87kDXwmDCL",
  "key11": "29KgteQXZaJ9sM43eqgJ3knKqhg1St177vsJRAYsbBffPZb2TMsk7mwAtFs2cWSyDr7DvW8sDMfSJHc59m4wLPDZ",
  "key12": "TynzxMuMkvLDi27pqth6LtDpjMBeGjaxVjUehs7enTLLtL15daawbFZNsaxVwiEbsA8jGC2SRCVVvLfyUY3by7M",
  "key13": "akPkXwgyW79DfN5XgpEb9EBTUh89R7kP2KJJ7fDXBLSuyVtS9scRWMZuSwpVdwQW5S8zD4nkfbXVvGwMQRYWTSf",
  "key14": "WBhmzviezJGDyS5Z5qkHC3QcH88iUd3jSKFqcNNR2PFyzrdgXCQkfsne8XE6GEtCBn554R7o9sX66CrQ4QRiGpi",
  "key15": "2MCvyFT72d575RXNWmPKMspaa3M4xvPYX9HoTYTBH56LsnYMRfgNBq2CLG6sYaXbUkEC7Ltt7kaRZnnKg4E2F2no",
  "key16": "2uqRTTRTBCTMs6Qtdk3kebK6h3tfncsF6bUwnStn98MpkC5CkfQEZRjQyCBRzqXWUg4KzP7cp8Em74eg9XTsYJMR",
  "key17": "4qRnqSA72qtPcBWYjCnqg5TEPR7R2Xgq4a2XJWqyawtro9PBKus7LMA3rA5YKbFvgrTAxpj7B3R6SDTPd8sXYwgw",
  "key18": "4RmreMVN721BWcRZ48DDtjSWZwXmKY3vySEK8tZfK7CobqjP4SiP3Ezd7AeD7gwmBH36TuakSuVD5K21tajC4Bmv",
  "key19": "4wkWZbqrSbs5vrWoWZ8sC5wzNSTPBJ22hQVwMaRrAbRd7NPMSdaVNCsFj7pmcda24jpFgf2kzPmZDgrCLKGJTjLd",
  "key20": "4uhj9Sepndy9v5woPz6xTKAyshcUyrZNEvKgQBdeVcwEwMuzv55xqUHq4DzjLF4g6mH38G9GKRaZb3CDDWskDZaV",
  "key21": "3ZHt9wBo5ys22SA2piE2CyprNgJwmKSJUinCvhf81v4WosJ1h7RJq2G7DY2wq5UwBkgHufX7DviF6778HPiBmKzv",
  "key22": "3D3hg4QhjXd5ch3Y7EbeC2Uz9zJH56opu2jKNCP1nfn699RPZt5VPC79Chd6QfKz5DgWYRB245a2bZj5D4PQTVKg",
  "key23": "ZF9GRpWLE9T5j72CRSbqg1JNwCzyECtjnzfchL5RXbCDhSkA6F92vhdhQKBwtLp2xNHzKnPxBcHqyWByCDLL3sk",
  "key24": "NcYfuVQkXBDTxaneAKCnu1jKaGqgUczbND9izcPQKZDRn76Z2xeE9itgYSaaoQKacgzD2EJxGe6xXxmUMH7vCXn",
  "key25": "3LALVtgF58tUdfXmR4Np8FLEYwn967W3ngwr6LTT54BYSU3Tw6WHx7hsWs4tPQu6H2e4uhfBPbNQzNejPPqGXktY",
  "key26": "K1dMtoSEnRYDfStdTWHwNeyzGmH5wVtVgKQ9iDqAsJF6Dyi8NspJCWgQrLm6anst7Jrgqki7tgPWwfV6hqdqDNE",
  "key27": "Cegd5S9vBezQxrj8WuHN6SycxGxcUSz1kN9aYF9NjZuFj1LE32rmyk7dSgcNMF1SMEXLFkNtR2vFJ7Us8QN5zno",
  "key28": "3XS7suWx3gJRhvEzB3KztXTGkX3KG5zn7nUWS8exGRAPo3nata98zT9GLukMazjw6tNk8JfvAHtRwAgq5NAz6TwN",
  "key29": "33HRZrBMqm7bhaLJtvsD9KbSbe4qQtp1SkepfCquvFLSpPhXzGgtXtkeEsYhcCdv1UW6cji6GUeCwvq4HBrQoqkJ",
  "key30": "2SQEx5rMkzUxf9U8xrAzzpsDaVfDt83uTsShJsz7QsE1sLZ2C1C19crME1Tjb3Y8oFVXVnQMxyFJGYVXzXh6dea5",
  "key31": "4D21XGbjfaBn6LEeV9TftsPa34kdxSFERZXxgjLgcDXSgAk76DY6uaS81FjjJgEzK3JW4kwaXgnuiRhGQZ9r5YRG",
  "key32": "3j39cN8UJXg32456bxfFFAgPbREetq3TdKGc2deELNkSNLXWUgqkVqn3Y2Ywb8DrvQRX97bMUTugSVQGTqcWQCkf",
  "key33": "43mPQEcEn5NCusEhHG1QPAAuQBjobnT98c1z4UNXfC6YK6vmrjTTcbWH8xQ3BVv3fK36kdveEXi1SeMXkFwdKf58",
  "key34": "5x7BRGa9tYfdWpZxtMPmpEw9PzY9TKZMuZRp8WnGpzke7iGRs6WctY5JZvCnMmM5PtEkaPETgzwyxRK2BfUdgT75",
  "key35": "5WTengsepEd6yeZGt6WYxHtZZdXJ7t3ZFQZNMtsGzzTqagoqWTkm7TvkXKwdYfLaEcaPLtE6DfUqJjwKiY8RWQ3X",
  "key36": "5xbGmwwYm4d6maTZxq3RMVnyv83XbW4TjDu5qfDUyE2uic4MhqyrFLF4ezK2gtkhttB6os9JihbxAev5158ms1r5",
  "key37": "4GqPiD6ZL9znP351H8jwTupFm5RKZY2sgLkLZF6BHPjz7yFnJU8asbmc2KoPBTRfsxneyVa4pSmFpZ3cCHss2p4b",
  "key38": "Gkx2LXmxqwaLWQuYTHjw2pTy7fLZ9c73rNtV9iBS74oXwcmqm7NH3v6mAF9kzRpRU5hHsgSBK1Z7GUFQb2zWWLJ",
  "key39": "58KrBZsMcQUqdvnVweuQqVoBkpebNWaY3f1Se7E5w1pXqqae3kcBetMCx4upQuKjf3ZZHE5QhyhBm7qYKoE5UHQ8",
  "key40": "4dexYyuXtu3wiiMiPL9vhTnWRLK9916jFLPsGET1jJpdhajtAQPV8KG6kCytPwjCiD7ACyEvwpq5gPTdLrjKdRj4",
  "key41": "2urk6kjuidxKp1nDXtaWE7GmByLHLZnfFPYLWRQfRR9LDsLpPzYar2fhtxtUyyxBbaF97DTzJoCxEC881aRdgd2d"
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
