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
    "26SJszfXQ6t32c396cSnwsX3613R6zKK5kNS4KUo68RyCAkxvq5DBFbWynDatb3Hfh2QMgBY6tjoThu5HtaGBGvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54MCHTgQF5xTFpprFH3mQfUCj8FVjGuzwB1ipsHkpz5RBN5cdwG6n7EzoJTNhbhzmENNbAzGEbmRfC45hZwaeyQA",
  "key1": "6MMx93hTvgrCMkkUBs4ESHMGHYGYxeWX5bMSnxZyY6qGgfaWVAES7mHNqiuHDZP3e2wWLAzEHDtXFTPJ1HVLxQC",
  "key2": "3tYAjh5e9aaawEXaNproZ7j36vf7JUMaQCa4tcySya8xzwKB6YwyRvRdJHuQrewqwuT673YqNtvQYAtbEUN9rWy4",
  "key3": "UQ2RFzc7F1ExV1Gunm6wsTjKR5vi6cFq5tEBoX3mxjiB66DsZhVLjfkcfjS89XAMhaVwNJj1WKMftstKsqqjNzm",
  "key4": "3mHv1CW6GgXSWTeYjYyGRCwuz1APK9STyqr26FpstNxBUyYS3MW5PKAJye82Yw88fcRJfhupciFtRJodJyXUDvZe",
  "key5": "35vasXmbTnKkfV29hiatEzQuB5LZ5SPYByQEmUEXY5xyd1PSR5VDxhk1KGmzm4ysG7kF577h8FoTudBxyHGkRvp6",
  "key6": "583URceEDuSw48j7UdEgZWhwZjq2VQ9NBUKmhaNnDLECpvB2tEd91Lkv28mikArWjLmjXT63ewgHiBCphvcAAe2s",
  "key7": "zNL6RyXExX8jsU9fVD2cQWzPUF7MKdcaqwHNumQXegek3BbV3LJbRBZj1x71fJqNQ7XLFwiyVnqNgHuobKVda6d",
  "key8": "2GeDDrbTHJY8B4MfDW9zBhRKYLdrxcEcPdadpksNfg5eK4KnF3ai2sXyvr5L2UmNm9qVsgTtTsbrnD8godasCwrc",
  "key9": "5ekokvbx3yRGgpH7p7LRLnXisnWwGNwMifyZ4xdVdXfB9gdVDTZkz7AFbzCHUqC81YxEVMWyR1v5ztDgF27DyeZ3",
  "key10": "3BKqPbKtBvG8V9rScSKoAAKZ6rAFuZF1bqfjVjRGXwYDWfUWsGsNcSMXadjeUqPzbLJWNwG9qQuM87MwGsJanPbv",
  "key11": "26gU4um7NvuH3kVtF8cPBaCGfSXFcJvuT4nkZYegZmjeT1D1RwsvwC9KW4vtdrjj4u2XTNc8jstVPpqFvAgy4FS8",
  "key12": "45ERXu5PcNXzyZzrpoQbSx6hute2bAt3iC53mKQymwCsQoWDnDxjqmTuFFeokbjrC21JD6zzL6BtjjV7HnmEy1Ls",
  "key13": "8Q2ZowAS4GZbb4XFPZJ6Rmgw6PdXg5xWy29BtFcDtXxqXmaFesajSe2Zi6uTK2WfZPhp2Yhu2hr5Kt9kVxKf2t5",
  "key14": "42MfG6JWncfP5SgntjisTDDCp99pM1v47aHd6U5XxBYTbVYQuhoLaF9c7tHjCHH6PGDEhUTdcgXV3GAiuYexbSLJ",
  "key15": "3Le8JdwDqx45dbGzDPGYWk2MCHMZv5muGXnbmLAAfG3hcvojX6PXU5Ph2BVNGQmKEYX75DqnvEg16vsqk4rTN6Eh",
  "key16": "4SwuUsj1kYCdT4ktryA472EtLkMmdbreXCUPxUmsXYNYAjKZEo3ie9RGiFixSxhRLjbjzAaVuQThRywtsvkD2tpR",
  "key17": "5SkV3fJhd1fS4v1fGLrYy4Z959P6hz64xPfcd5rPwYWb2PPv32sFpbr3XUxrogPkpNtbFZ9xYt9nQwrkKEgDwEUK",
  "key18": "uhCcjFpJNQsYb6P2noJuiRbhMMnmo9iJVyA5cdsKgZjh3VhN73666rfL7CtgoqgfdLGetsEEEUtrwupt4VyaXy9",
  "key19": "53aAawxPoVqjSSu4jyJrHhjem1VHvDzMgdSWt8uEtouXXezrcK6LvMCSPi6rBiYLXoekvLWeLeGZqhiQcHzdnkhT",
  "key20": "4SzEDyUkDBvdP1vJanbSt1htZByY66jHPtSsvn8uzgT5hTibBSvjwGsj9WWq9nBf3kZmrRN2mTwCLi7FnGTn3HVP",
  "key21": "2fy8DATQDR4zRrf6E8MevXz9erc9KqjSop45PKX7FcmtQnWEs8czCRpx42RYgctqfTiT9bENA29FX87JrtjxHWNU",
  "key22": "14Zz9bmMjKphhgALojYBVX3Cm5SxtsRN8imGTUKo5Rumkff7K7mPqRLnP3RomGB8KpTMdMmJVA1F5i9otKBtkMg",
  "key23": "fWW6fdxvr3wPdJvP5z7oR8QABdeju3E88vDEuYwM1JrsB9fRZgE427rp8Dm57Je4oMUJksSuwU6X5ssfDLxo5c4",
  "key24": "57jvFb3GT9ju54cBe8DpFYrKzNevg22CBTV4EixS14foPwUJ54S3zNgrygCAP8m1zZY5Zqhu3orBYbmFCkaJ8EWe",
  "key25": "2kUAu2ZthryvyPpVSVeZsLXYovTaNnV8rNSLye449d1TwCVHrTrH8bmsk12RFDjTVhdNKpurKGCzxsKb2wLDHGXT",
  "key26": "4GHAr8zyXmKtNG5PibtKkYLdznWTXo6eD1UpT9XacwANAecRTnFsXb7QxHXztSHNFhktp7ntHLmutgESKE3EHWhM",
  "key27": "3tLq5TrC6eQgt4S3AYfT9goEPxXoaY41SHgAdxgAwy7FkSgWFRMhtuMAKzQhJvKDYdSCpaVa64byNfzMSWhAmd5d",
  "key28": "4XWCcoSRWJXZgFs5FUhggBWG7p7Uzm7TPCaFTTuNQ3w9VZtypjBX2ygWXWH5MWcn5tP2LDuxGzt2rSQomWCb5AQ7",
  "key29": "3YVZgqmZs7KGhaqtHccSfmqEyqHhcmuHp1m2TGsMK7ZZKg4bKPV4JdF5eB453mu3vaLDwNKfCvUfio9RVcAdnCwp",
  "key30": "3dgqhnuwkeGfoZBN88fWYC4mnB45evKrHy7rayVWbWP5QdU521A4ppp8buRAFbfFunei56huem2PsiaAarKCaK8s",
  "key31": "5sTauoeL9NcJcwTJEQdwm8hFvg66sdzWmgmfZQyeSV8DBSgAwgj4BgL3PX4LJCspREeuBLs8LRPTrGjNXhadTdMt",
  "key32": "5y4e3Lq89b6vbmTeC1rg1VtyFUwu4TzJvrrwHZdwfYDsiTKBmnA2FYfJShxUj6zxGpRFZCzmhvwLubWPcMdLg9Ke",
  "key33": "52t7QQwAv78mP3NucRbqurhrfaCzosKMTqEsSdunWareYFfporU78ctirU76A2mpjDFpPCecSvhcwMgjHyKXuMWG",
  "key34": "yBpsFBhgW43fDsfvYZF9QKBoSN23TS3Tqd7Tsoh1f7dgZptcFkEPCb2ssvDnoKgZcd7wBDyFBBJBeRWRHnLeLtt",
  "key35": "5c6PWQ7iwgahBiT5uB7PiFo6bnPZLD2AKqcdgi1xQTVgjPA69UnoDSMDGzdXubJ7tFuyAKWUGneFfVGqQb177c1a",
  "key36": "4LTTHhuzGztgdYswVGixo55KLceg7XPb2Y44pgjv4JhEaGxz782v2Pz5smwgQabu9maYuGwi1AP8LGDGEBWnK5uJ",
  "key37": "2HWuJW5XGzMERa9nqZvJYwV9GsNiR45Yt7X2a2hfcrE2ghqHLGwDu8Wbf8EWxQCxb7DD8KmuoyQuEE6vou58FY9Y",
  "key38": "4eNwHoK4oBr7AgBemYNKfGQPLSqrDC64MXmYE1sGtUeGT5Fgs3qgAVAGVBLbCAvMV1mkV97n8PWauf23ByBNzpnE",
  "key39": "4vSaXaHLHoeELjUQk18Z8wC67hxVWAWhfbVGn4RRRe5bcDkaRzwbo4zFNVYSWc8vMaaDxXFCN26F99ZskBHjkfrH",
  "key40": "5bzgGvr4LzqdMqgYsahBKHy4RrvusejoCgWxkiNaFH68Dtok4kDNccRbYgNxxPAvz5P6mYBxxYNWQcVnggbtTU8w",
  "key41": "bvZLK3masANQijZ7ZAYsZRcePopDLJmUfnA6KzGqm8BWCXuRa739QSQQjWmtaw49yvNkKeoYcEs6ZA6rbn7XA6V",
  "key42": "37NdAnEcg5YectGa8o4vW3nWdnhpeaYVSDrK8ELxPz1Sb6VxXS32z9u3cQryAmFt5aDx4M8qz61ftryuW53HX2Zd",
  "key43": "5XX7Lr3vJ7vF2TeTw3PpW17cKbvRX7dCf16W8GKe3rn8SiqzWpd6TmAFjt1J5zLU4YyG5gnnxDpXwAEd7qaEjcnY",
  "key44": "9WxHZKjqxme9RpzU6JxTQMqZR4fYs1mdjjY2HJeXzs7yzu5xCBVm97Zr4ppsnqs8Cz1svj8yBFNWbknk1UpQ4dp",
  "key45": "4NfKR1j7bg24BoCW3CdNyDWjyxdzRhDXVAqxmhMq94DLxg21CkqkZTXy4JvA7YVBmNRszfkDqpgm3A5pcUAG6TAK",
  "key46": "2GnaZCceu261hrJfmJVc2Z5RD5UGkSRHTtKqRbtAMu1eJvGQU4AkmWx8wTyYt6nLNBzxFrqz8hy9CHrJoZrhKPtx",
  "key47": "391EWpJe9xh9BSBEiw7JaE6DLwMiU3nETD7cvKjanMoKS3VC5LCkUXB8XAfvc8gih4FLhJ52jzsymCnnsMTFKK7u",
  "key48": "4q96B1TzUe9UgGhKB9jmsWZ8qeTJiMy8XKTGfLRuAYpPKj6qcUXHfHeGLHxavRRUEoYDYk7WdijuCeyDFnWKpUB8",
  "key49": "5AeaRrbrsp96RPdiguZ1gdBVdVnXw3MUqDVH2YNyE6b7byQ8bNKGHbk7F3hnA2KR2SKFHrXDD9xf3DvMDTATZttY"
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
