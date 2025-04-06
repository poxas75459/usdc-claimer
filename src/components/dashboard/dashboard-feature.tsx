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
    "5hL9pWBXmBfCp8EmUuGRcadoK5DMz126PsMNG8JX8gdFm4AZuj7rDAnYVfjdFQ5m8s9vCAfvXz9ZwFdJCf5Tn36W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35wPNuW8H2esXBJYScCbRVtHxXdo9eqkoo1PYSUbBpuH2d5w1984SxVA3Ju3JLtCsFo7yiNkandH1qN8WWVXKdQb",
  "key1": "2F8K1jWAZe4SDEmy91cRbjAvLT2Snqf8dV9uss11p337cAuZg3KqQxPbpAez8DxKt4CGJmZypi5M8HwN12614oGe",
  "key2": "26uMpojZSzhPHzzjR2nDbaeXpmhdm8fvEMAuUea3eDu9nC9841WpcjLAC413LazZkuv4uKyC7MBQGJnJm8wwoURw",
  "key3": "3TRfqoWmbQT3R6Vh19NzzZjUbacno7moa4WJumsCZqM1vz1diys9y3xvqfcNz99bzx61cT3WnBAsaFXkZzmkUi69",
  "key4": "5Ao84eZjhHN7j7cdRHe9Fxy74hNLPNE9uMu9ddKpQwRdXpcxDUxvJkoc74d3dt4M6npafbGWaCR1yuZRfxQ5sCzp",
  "key5": "mLXjXznwc1Jagdx24sdGhbXaGuoMU5Nu1CJqkTzAy7uzYcMLUcJsAwriTpRkMfdLjG3N8zMLyQ62awV5nJti15J",
  "key6": "5GH33Ax4kf9UCSpY7LiE3fNTyQTjjGcqVzz1fXZ9kRRzZUC4mqYkTTisSEu3JTy7z8DuXedygnnrpx7yZADGp33P",
  "key7": "3pEsgCdhbftvFUqotvVWnpPuwji5jz5BLS6xQvDDgk1Us2HVHoye1PygDspzLu1nLim5R4xK8rjzxbxgE71gbrH1",
  "key8": "4hpbi9hm67UV6QL8cJZsAVnTdmMU4rj1CAr3VPsjtNEuQHHozYu63dZ81wzHzj4syuGyR7JpKs177xbDTyg1Cfgk",
  "key9": "2WeYjAfPEzLmTrc99Q7FfX45aznz73kSic4sHw69QULoHXSKzA2mRKWjkjzPHU2VA8gRRmup5JNrNPEF8uZpNtAb",
  "key10": "2TH3RkHhL8LksamyNmwoHjUpTfEbzJ1jboHMBS6S4gUwfbmaCu15J1RaSHHPt4eFqsoDMLBE4JBV4AM8otQ8r53A",
  "key11": "3RXDcgr34UW2eEC9E1tiGjnnZaJVen8b9vQ5y6cdcLgFeQmzeA75WNMwx6oyJbxz3nAGdk9cwZ4xUFV1iFa9cMfE",
  "key12": "2j2W238cn6iDC4uxBidNavihhPYMcobSco4YuNhCxfqhSdznymtK3khvLGHvyWZXpURG7T5WAveiMmAN2u1zNYnY",
  "key13": "3q1xUH31wsfBCPLP787b1LCxma38yBjjJHdRc9oSisQXPA62VFsSogMWjbro5kQaeNFUQw8wa155GXoVFPrDyEsv",
  "key14": "66e9rHVnuizEXcuHai5Hi5A3o7SQCbCzKHmdXyvBycc98jYk2K4Y1xqJPT9pAJkfUgvWAdkqS2STPQefZADFFz9f",
  "key15": "3rmeE2iHpX7kLx4oMTgz7SRcRihqT9n91K8h2kQ99XzLNZb9GY7Xxqtm4HcYzUXExgQp5XhWMszK2wCSgmR5Lojd",
  "key16": "Wsi9JBr2F83DznskPXf1E1xzxvYWzDBWRbEFVHZkEFRLH3SjaGvrAz3oPZuSPk2h2iZcW7UX1Ej2bSFyEAUu81m",
  "key17": "RzE2RwbccVhW5B8Uuy2YtkKikPhmVAQEeVm5B4iJthnfEsZoboBLCWVLppPUCrtj8icFouTakvqrqvag3FMBYuF",
  "key18": "44Vq2FZDzmtbcdJRaQEQzWn57qBVzYoykxoFV9wcuvzZvb31Pc3JRkaPuWoqUgiWXkdVZ2Tp7fo3VoXucsnq26C1",
  "key19": "3iCVUXLcsbcQwstfxd4r4fJuXnogTXLgx5e3i5c8tm6FYbaEEA9wB3FL9hWHPrD2n7Hko9ffvRA9Dz4KhCDsnwcy",
  "key20": "24tFBsyQoFcv5SnL9wabBiAfhzVboaJXo42WHqZ37hge9eroszPepBrzX7Mx2QjYastm8X7T9rrxFSjcrm35wN4R",
  "key21": "462JYPaLnEPq7yMeUg8vk8EEt3BPdLg4P4nEbNZDrVTfu6k2GCWKfR7uLmr4B4tWZJJbZbpfQFt3UKonvikoVDWR",
  "key22": "3ppvwAxmeHpaq4rn2JLgcDnYX4YMLpETJhd6foQoaStnZSQtrJMydfafkksn1UdiTW4NsUn4oJejxjGhD1M4FxWo",
  "key23": "29W2ECKfkQTCeqLTKQju4JibC2rRJmiAcHNwNL6ojxDHJGJDh7hjecB67Wjj6fPYFiAoJ3JxtruznJ5LqZSF65eB",
  "key24": "3yhdsdaEKzuCor8Xx9Bme1jorDZyrwZaHKpwgUf6QPr2pB57f7aUUxFA9Kq2cjH7MpbccvWqq3HYacaL5QmtSqgg",
  "key25": "2GT9xcMTrkxCBZqJJcAgTvFyKN64YsRXTnvSpBf2wkQt7WDJxXBkJG5X5bitHXQW1nqWenswpcK3P6GZBFnRtttz",
  "key26": "1bosbk3DNKGphS9CtwbVvVSj3LyWc2mH7JhLNiRuPKACRDWKRmK1p931MaCEr1xJcaM8XN9eK63aFXpbMkrFiyC",
  "key27": "3usowvWhCtsbsG9hKBxNXN3CLR8ocoMzkPAGWUTkPN4GDzNFer2Craw72EXxBzwaGgd4fgF7rvf8fM1aovkagk9y",
  "key28": "3cX2CuTo3wr89Qg4eSeaEEa3kYkGeSBbS1KV1HC6DwpqjV2nxFXk6TTV7nw1vvUdMkywkfGvMeLWwLs1zDfLVztS",
  "key29": "2yNLwCqaiek7yHjdFJiLGDPM77AgCZHG4CjT1dUrgGAGANrTbTaN9iJcQJEnC9sAo8pGGSFBkLfk7oksksad9QDu",
  "key30": "38qxiYRd98pqL5BjV2tX2HRXQqLncxkLcVo3kioHyJUx4CtWdY6JMBYiAXZcq4hTnKdYJE2pkYCTH5jHkQzYBmh3",
  "key31": "3ywN5ga9fHtbVxs6evMUYwnpNUAjKXw9XS3fmAtinckacYoo4pUvTLiTe45Sbnqjzvt4Lx7175tPZ1avP5VqDPgz",
  "key32": "2xX6g9ksY42JgQJQRS1tUf9bzdqDmhiYh6XLpvTHy2isrpUV3umjEedBsKzdbENxyQcdjMSU1SLFzAt3tybPnMzQ",
  "key33": "yGfPix4VYzy8km1pViwz2x8mRL3SurHKLw2kSDaZrLdg5Svsq3nLDWxi3YpKsmxwtXAZ6nNwuSyGzbDaYyrzcxQ",
  "key34": "5Y3Eqne6doCPBG9EyRULk6ZY2nWbanxVEeTkTBeBB9mFGmFx2ev294VR3TcsBo6mW4uixYUKA4prGQr8yiDo3ZL",
  "key35": "WfwEmnDE15gkGJmyMHtUbQg9Cu1tNjNxjU6NewdUsG8MUV1erqMkJFMQ5SFSF88zC92sfHxYBnTNAaaaa615AzV",
  "key36": "RvFzoxJ22yCRmyWnBG1SehaF5YTGzesMCiziSA7c68rSbRk5CpGF4eDCDfG6LSb4ZLtUDuGoCCHG4gUK6GpkNA4",
  "key37": "3bJdH7B196DYQ6Hh3PQsdfoCceBpKXUb3GuFTWUtEoKJRi7nYW2n2oAokzZKQF7RcGRMYDKuUyS8pXh4qx2Md3QE",
  "key38": "5HbjMJ3KSj4vVipqyNNnHq3vpDLpnGwZE6aeKxnrDz3c5tgvToJ65fVMCmg3As7AoqXsSbhFmQuHV1thtCqXvQYm",
  "key39": "4YevgrBRPPHfLA99uKmpBKFXnscREATyuvBubWpwCC46p7nnyCcaLMMSRrHwQMPrN9wUKqWkMmhXwJqrBpv2Esjo",
  "key40": "qzwnnzgkyduqmuZaNs57g3TgjxDLd7hb2GiYqpxy7wap5L51kvKBFXAjToLVqRpWpWE9SiWRvzCb9VB6YwKNxGR",
  "key41": "JYC2FSvoyUgvbXGWrUxhW3a9VvknLYpQkgeteaK6m5VJMQgJmimozCMHvdZ4gMYffJvSmzxudpeGFT7sYGHwd8H",
  "key42": "32XhUUmaWgGBnFCPk5KHetyT4Fo3feao93cd3nF4Mbjs6daVu4Q1zhdeG4qPSSXQu8HqK7zJbysdPSQbVN4FGnCA",
  "key43": "5NbkGgtvieANV9ovhBB6kTL79wuPkj4VVV3CaMu5m853Wf5iRbksCmZdwMrCUdxAdrw3qxQgwQ7ceGwojDVqevzU",
  "key44": "4agHPnBzd7Fs4RXNouoqMsnTyBpCZTtDtYbLmDMLUzUzGXYp14kG8EMMMYdATVqg4hA868rB96SuLaQTVp4Nmdzm",
  "key45": "4g3vQweeVbFKQEjwEQBYwayFZnZrAkFdHSQz8Xot5uLZjJoVxSkuBsgE2WxNxGubRQS5zrNRi2YxLBHaA3Tf91Na"
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
