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
    "HXc3mSa25cbPsKquwg34JQmJRkw9xDdhwsbfGdNtVKBH2R4tJgqdofaxyAPcDELPLeCNPQDKpLgpoFabFAQGobW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CpbYT1JZdZUchXWHcbCj4mZ8f3MJLQgQa3iMCqEtEpY3H5ixFTbs1xcRSb7pVLPGsL5Vt3DGMU4XFbY1rgWVwwU",
  "key1": "3P4RxA5HmSVY7H1cYDaBsD17oTaAk2ErC3ePmF8fb5P8wFSnwRcWQRGMePUjfENQ3eYHmefw15XVx5yjnjPRsec7",
  "key2": "cqk6EayEGwdbqtjE3rbihzyVqHQogFe77oFMrVzoYdhrA31JcUfCNPMZmb3DTgJ3m4d2BsXa2KDxVjj7a9W1R8P",
  "key3": "4iLyXLHuN8cjrEApXiiC1KdMfr8SjKKY7NgX5PMWXAByD5M74xxnSP976ErnNTwJCCsVaeDEp9Tw2iDRJ5XsHH2a",
  "key4": "49HDM58Poy2fcCUKMPRG29oHE6zyDAvxgRxfWPGmoquqPyXmAkd8KZyp698gVUeY8FjH76H3JvgWTC88jj5BR8jg",
  "key5": "2xjZgBetMLAmuD2qoB76ntN8frtFZXoSpyvEUYZxEiHXzKmy2g3iPdGniZANFQBvfQAyyfmR9M7L3y3vqtMTtn1X",
  "key6": "4s9sGtQdKtFcsCqKyyY56Lgha8TEMpwdJFtbKsNyDfdvzbRTuCW6Ue51DbszfuMkmNmzx5fYArU4BDctqi1hxre4",
  "key7": "4uwCSmsJjD2CQEkppnSFK2YKY7NWSk7eciZsDKHD1J3yXeAm2YiYkw8ntCrGYZbFiVJtjQxa1b6AppUG5C5xAxsr",
  "key8": "3TPJDLcZM8iM7t7e4r6YEoHz3Vx2dMWas2TN3GhzrNpmjNon1Prp47y41a6wznaTZX9GgodfCeyYrFaLQZzhXGwJ",
  "key9": "zpT1JsH2fAkVsj1JjYigkBSMjC3nUc6ED339GCbynUnAPJ3f8D2dWh4NS8X6QR7W8ewcpsaH9b2nDsDdgUhv527",
  "key10": "2HR7y8zcn1MA97g67pXPeG7kJwmJDP5VjC7tsmfyRzgbm1yrXXnGDWYZAUxKKbrTsrFwJr3AZXXPdDhrdDG6CZJx",
  "key11": "KrMxgKtJ3TSf7Npk4WEedqHHCi4dBdxfLxezvevAWvZP5zg2LhNdaci8ZYCeTGwvPicGYYCjMECRGdD69iJWdwb",
  "key12": "3LtUThZEtCgHQxodymDLWSyxtHUqsmuhAGkxTckPX4m259XtXo3AJzX4PRQnhooEngWr8ZQYYdfzYujR5D6e2hCp",
  "key13": "3q26rY1ozvPApfcFLYpCh6G3xtS53ZnKB2yApn2WHLv4vjk5BhuGmtCU8hLQd51hB2fFZSoK2mvnXEFymnaBunrL",
  "key14": "rLVpCVwcgWqvU1ijy4ATYw6EXuY8dvXvzrHPRKeKXrtv6arAfbE15nLez9ESYKJjWmSEvdtiLxJBoQqwQxmhViy",
  "key15": "53H5SSWgJZ3siYxxu4ghQCsnrpGndiPYDwZL3NoJ5g6k38CziUjrLWxQ7mp8atakNgW6XgouKLANh2nhTfZzhTEH",
  "key16": "4JFZCFTTq7GBy3yn6P26GMT2RadPVQM5NubGNJaBZekHqBLVZjFEfqBmzNQtp8rNDVYC2fUVmDeS9dPYFXBtzxNU",
  "key17": "qj2trz4SbrXbHojMW8iVxuhgQfnhKnstNJuexgbYAAp17S1AvKAq8kiMtxYUHkSV1pSo8j9huyWcaHixwFLB4xM",
  "key18": "47tgJWqKtFS16m8V67D5v2k9FWJKSmYzwbWcJKYmGHiXrmyrLWVRnwF2K9JbsuEpH7WoxP3ADrXBFi7pvmy2LR9V",
  "key19": "5Mx1h7YVMiZt9MuwaQR83esxWW9FdAE55FXCpy5RvDqPiVrV2xMp2dkahWVgqD4QReHG8hZaQM27XudDgipX1Z8m",
  "key20": "nZyTFiGzF28YfEp7a8GoKjgVJQwwhgHGFjSD2qoS9EWB6fPy9LLTGAWcTrHqerxwFcgcJ1zco2YdLNvYeEV4DTv",
  "key21": "2xRQwecj7G42Ui7R1J1hBW61U7to9h3fv5ta4LxXirRV74E9dg8ujBbdr3HybL157kL5ngWuArzuFonSeJTmAcQ3",
  "key22": "Eb9DydLCEZCUJqQLAV9wHWKi4uYbvFChD3rLq1bkqe1DpGjCQjwYQHxLqcc2nEqr4y3Mvk6PYypR8fa664pNjkg",
  "key23": "3coQazE4JCqgQC9faVN8HcfXNKevQfLBF9gv2gRWce5MtirVP2gkDMY6wbhCLsCnjMhJmWycf3DFUQob3A31V6L",
  "key24": "UBVh3kSFWFDRzh5GDZKoSgixVKFGNeARko8dXjFvH6rP42MqjVNYtpaB1ZxyqqG3NZAUSwC4mZwtZnC4rNqwCXi",
  "key25": "24g8TkqkNCGwTA5n8SJifgFgoLbqXs3ryWxYu7ChZNbXPxTTjHkqw4DhrWDSh9hCsf5bogzmFqmNpyTam81kcoji",
  "key26": "5cYPtKHgEXbfqtN6ef5w92WstvYSB1QvpywaFNFJ3BLii6KmAoEAq2KeJfTYx1UtD8xEzogY16jF464tWqyCF9K6",
  "key27": "4LMMbvGMzco93u4foN35cwT7y6fHKNvsupNv4D1hiyYg8FgWNSs1m9yYJBWN9G5FkJm3R4QKGNBXUq4HYY7aCffZ",
  "key28": "nrqEuGvN6DX2KTHH1QmZTBBSNbhohmbBJC86RNAYXPm6yxY3zCzNYaGB3NJDfhmimgWRD1BRNeDrMLC7TcoEWA1",
  "key29": "3PgfcpTRhEfhFacS3smNXym6ySPioGJd6aeTDP3P4KQJuRJz6deoog4Y36zPLLYXVwiTPZBYyb43aAGLkAS8nVFc",
  "key30": "4ahkw5hpzGRmZaUDheFBbAeb317BDdNnnM7zoMQS9zEPWDwM2rA3v72ARnworTUpqxHXH2fkWUu5voi42Q5iWhiR",
  "key31": "37oS4N8J6SyGBpc896ZP4pbWvYTemdwoNEy436yqCJhVrqkPkbaXnFWwAV1AJVDnC8dSreRTMq5rmQiwncC6ip8n",
  "key32": "5K9ZtqqVnGRG1tHAfqv7nAB1WLwxeP1Cw6YifisGwVGsTeExp9fCc5pNxBKVbn3xfndCk6WxWoSWmFfTjmKkD3zD",
  "key33": "5qr3oPeCNsmYbeBB31Q94QouP4tosuHfzL4TWZNqJrY7A7AoFQ6dwmYhh5x9642Yo3uLxfxteqsooqtte52EnGbj",
  "key34": "4s2WLEpjmmZbtTvniXVR4nSy1FEnRdPRuQxqco6Atcs81WYQkjGZZ65mZgBJ7tQq65KweiygTS777DRX74bZvoFL",
  "key35": "3wtN9xm9PtTWdib2RbksTirvsqtZx4pLdT56MHCJndQdwqwvaTkhgEN4JR9taweKMJBARXb6gK2YAJ5Xm8EKr43Q",
  "key36": "5F7whrSoU56QsbJaENDy1bpJe4GP7jA9RCLSm5qry7WkTFctdqRs4H7xzJTouj7JakMAJ1pw1M8XAgCgynHcdAJt",
  "key37": "5rU6EQVzb1SquA7ivacAy1CbT4EGXmxjheaGRnrzAQpRLd9kNPaHrdPkjeab5Ttkk2p96i6o9mnMpWgeHVhFCEiZ",
  "key38": "2EoPc5QBsa4S3bALxpbMryxqnV1PCe1eTL9JVByTg9JBCqwmBfDCpQUMVKHrAVf2Fz5niPSzdUKnDtFNZiUw84DT",
  "key39": "53psiixKwWWekAtUK9PeSRYjzzKr3kvoq3Yeykx2iX1gXkeauxhT2yofDJ5wAAQrLnenhmMY1oa5bTEhJiYiPFWG",
  "key40": "61JVsDcMQPYWx9pFJFnqMzjFBLcrRsemjp3XHGteESzELpAudD4z3V1q7SZC7qjR8fdf99zZTkNDLjYSEEmHKqZu",
  "key41": "46HhP3789U3UjAAzAhCF7XH23SSNsjHJGUMCk3mUVFukjcNaH2Dqgf93pLxAX3KVDMvYbp7nN2tSxAousU8Ua2tc",
  "key42": "3saFg1Q1kucZ8PH4Zic4RFvepUwVLDMYM5n3tJDnKTiqNV5BCZpyHArAn9J9iwzvNdejbNtt2XqFkyPhSLGaz2U7",
  "key43": "2fNjDaUZGAWjauQ5EPE7evbHb7vqsoHCkWeB6zAqnb99wf5w898c1AaRBmb4yC6FSxthHksNGXBvsbEnAh5AJRBx",
  "key44": "2Z26DLB4PAACz8oSADL1oLWVNHgQcvaoTrxwnkRhWt7j3UztZHiVqoXJAcQzkUz6a4MFkVZMNB72RfMC3iQhp1b3",
  "key45": "33AsX4ARXs4dwTLg5gitR4cbfWx6uQhDDQrVbomWafE9FZJuHdy891bHTZ1G4KeA2au3wRWDafpvThRer2wj5ZG8",
  "key46": "5sTV9UcSCiKmxu79rmmB2ENBSbvx7hhxdGTUHJrZSySzLob76sf8GxWtBcSu1xn2zgYFbXRouyfurjhsbFjWAdNc",
  "key47": "5XBSntTMjESE4VEb5aLeckg4WmwfnssK8VrJ3Kv5QK8QW3QLe79rnpooRteaUCrxYNPdZf4Auc2RdwZQ1bZFbDcD"
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
