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
    "4BD4yTECsZ3xFmGmFRqkNedY1nNEfzz9MJRrZYrWpBWmX7tKXdTe9Sur3MoHRxXVmUQKrMch9QetpUfFXFPLFaPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PdEB8XRqp51xo7cutyUm8mA6wKfdZRWDBsRLSgSY51mVMpjPHuoiDhg4NLTysUBGg8brik2hhqV1pcrf87NJTyM",
  "key1": "2aVETkgQmegnQ8cizi7XPX5mty9KcrqUpitq9D4D2uzpWzmnEfLSmnGpKozXMde5Kiojdu6FadDtf1VviFe3Nh8H",
  "key2": "23zXLNpfAqBGNLVpEhbg9bNTj94wFGWHJFNPXdw1J8ks6avwPnRWH2PdnSbcBehKq7mWU7Ahq4AFsyuDRA2gL4un",
  "key3": "RLFPkLp8DPmk1kqsUsveakC5a9HB74Bqc3zKDjtkrfSmbebjTPXTEDYhUuy7RV84gTZgyGnh8E8juxEgm56Q86y",
  "key4": "22XmdDVTRsdFYPVhzCsJMUSnhK6QZr2KyEGk1HQ4tgtHoTnbXbiatngDAN6eN1HP8uBLQXJ4EhG6STfUwdgW9FGy",
  "key5": "Fd6znJAQKBSfTpPoAFhTrxSV24mCUfLEFUU1oyCgRRehD5dMcZaebTg8tkK2pXLHSfC6cAhxgmYg1KjEe8Z86pS",
  "key6": "5KQahJfazbzvgqNWSKTQqksWLAsZhkaDYAq6mCbSGdHs2VGhR6NcmcHWTqAdaUkiEwndLntrFVNxXzGgX4Un7eJ4",
  "key7": "2eMsvySbRKubuVgRd2PmEbawK6y5eJtymd5YcDeZGV7zAptdkwh8Ytm5mnpbvBbxGj88bhMXbrwyySFZhQ8TfnUE",
  "key8": "hCWcQd7XUgMbEehCzaF9FwKgytFV939gtX7du7sqYPp1K34qcXJ2WjrXyTiwESvBXwZFvyBmqYfA21dLkcoJ3dS",
  "key9": "4LNLeFJUS6WUhKjb3Fod93VnSwaPKaWiSknbe3vScv82fdVEbCBHDK7YPMK6zHZ9XgtrnjvHNFY879H3eZs7Jk2A",
  "key10": "HfWxvWphxZMktsSKCjtgom79zPGjodkq7iYWpjgqHpFtoEiPkXYLMMxPyvirJ6NsMr9qCe3eHZePdXpDprBAcn2",
  "key11": "5KeEoT1CEG2d9pZFU8RLUDw5Z6kPVFRdgmyQR2fYFPDZGWbZgxuqetHqF7PTKLJh6WBNMQ2se8R5oyQsNJibeTQV",
  "key12": "2SzN1enF8pZ2rjkFjpsfMkndDK41yKuRKokK3BrZ5sexByE9duyasbkbPE2kpwSaGNFrVM6D6bo1bPifcoPbGysN",
  "key13": "4sBkGTE7f1kCZ1erFHvGGeTMivAu53FCCxeSMyZjsyT24EN2dYKtSFF8ND8iv6yQSJUsbL4ZXmwTaxbujWufNZJJ",
  "key14": "4N8Frm7ouTYSkkpv7ircsBVHuTb2xDWLQfX7bR5aDb77xZDFYx6NyLvuVbYCbn9xaZsY4RSkKD8fS947JFLqvQUM",
  "key15": "5kW8jsrtiG1gUJspobXT65ZgEYUTUiW57qx1ZxUvGE4eh624cNVLwAkxDJfuVfpCqTBVL4on7YVCBQcks28bDGwj",
  "key16": "4eX8HGusYGXEEe9zzZnD6hGKHd4SmX9SktV5QHRvyX83iSQJ2uUMWFZGRbF6DYafFC4UL4vawzjuKr7r2sTDZdyq",
  "key17": "4cc4EKgWmvS5bMLbH1FxCFE5qeXpomr6kV3o5DFPMwmxigisXghmefhZnPJoQxpsvwRBM1ykDihqPe117wbFFQ6f",
  "key18": "4sZUhnZYb1hR6mC3XGZYPdrX3LsqU88bEwhw5D2EYb6k93dGh3d28vUwq2JowFmJJcUdf7323cn75N31TFKHBipp",
  "key19": "2rjyDjS8CPvoEEhm42rgcni9TZ6n2W5qWQ3EhwLU1gbuiA7nF9kcacYpPUEHMMjdezKz4MHaFW9avNcNXTbHnPmz",
  "key20": "2uL6NMFJy6tJ9fuGN8ZXUFsa7fNXLLzipDFwaaZp3sNQjq4ccqyRAhop7ubvQP8oTU6pAsMiDBmUMiYNBpiPbdqa",
  "key21": "4cTPerxp4QAyTrYtz2ZDsnn6owXKiNX7d3RcQmk4R6HiMgZb1NucQRvN8Qvm6rjNwzBgVcLzrzmjtHrKqsnbuCLa",
  "key22": "4wctKJBqoqmo4psZTyuD11X1fzHV7Ma57dk8k7Q58z7bAbk4xKtS9mBNYSeCMaWT5yxa5AJxof1KBHePo8uqoCYh",
  "key23": "dtym3tt8GFGFU5SH8ZPucR3nZq4qZdpiCgWSKpaUYL4PsJpRBYNdam4YoT1QsqKcCSPt8VNPqLzjXHxjw2YhXAw",
  "key24": "4vrQEW9yWtpZaovBYjZwZRPRmKX6v7WSpbKMt3M8KMFN23iX8scamY8gz3xd6eYeLV6b9m4v4Q8KM93n4NAtsqFT",
  "key25": "22kh54T3bXJ1Dpwhz227Z6yHHgjBCzDs7HfHNv9TBVcbcR8MQGzi8rvLEjCU6hv8wqJ9SmTbWPdy9jpL8SMgob9h",
  "key26": "5imA5nDxvtVUrg1CV2vTMgYBZGSAma3ixW372w6uA7G4WzxC6X92LhJQwUGLqBY1wVVCPTN9Ei9tpHp1XUJBQ4ym",
  "key27": "JfwBbXc1WkK1YoZr2MSSQb87iNJESwKoa7kqcgn5oPLgqr2YHkythZubTnTrBfCLDBi3cds5ZKPT6YcmCbHo6Dp",
  "key28": "3f8uwGuoUM6W3HNJvYHD151X1ypDfBnf8ngFxUytqynMmgdz4DXqFfjPY5htntgH26xt7DpPYmX6BA28eajLTTbZ",
  "key29": "3YRMhcWehTGpu9bHzuCgEY6XMn5YS5vqZ2zRaupMYUYjMpBfsyPEx5Do5XrYLKZ3msgTfEqZPL3NtLUGuiwFcbfF",
  "key30": "2oNUNWw1d75tFY8bfmmHqrM5yU62mRVtRp6PbcqFuPs7NYXXEJaQLrUCNpKyuqWPTP441ZVhyADQdJhvtWgz1b6w",
  "key31": "5GnJgZ5wevjpx2DazjrX8xhAphojAurofzw9qqxA5DoEE3NFVBN682YiN7fK47rXhoY8U4ZA8cBeqfCu5CBtbAeK",
  "key32": "3dcgg43K4kq2ZS3Z3Ujy2YaWQ4phTsSW2S35ymBE2MqTb5yqLpKQeEYGuwtsBDQqxg9KLpuFE1n1TcuiHoiuig5o",
  "key33": "4JJWSjFjpMpmdM8qrpsYwVwFMrvFVmzz6gFJBTUBhtp9GHDLJA9EeBXmTcWkDXj2r9TUHHLRYN8qLCXA1tPdtF88",
  "key34": "2r17KHvHuSjWwAfJASNyroHy8izoxY21uDVzTfcMibvx1A5i1hY6myqyQ931ySbinDfz17gRU5rtZSinvYfFzG1M",
  "key35": "3GDKgR2vEXdTuN5tMDSfXCSFW29a1JKgGQkZGTkiH84jDeRuv5fiXZCfF5YBJYbLx1FqRPXDnRAp1oXJJrSn9d4j",
  "key36": "2iaHaXJkswPw9WQcReQQYgPxTn3Aw2pNPGQj9wWdcUHECqwyByiKArRMhYCvGG9MbT6X1TXmmn51vf5omLBBgHp4",
  "key37": "5d7KLdDTmHqt1fYP6Ehs9yn44JcUeCZMtvhSkmpdfa3Nzpvmfnv5BmULPErpfYMtQkVNGtmXjeNYeY6CNyh7p1H1",
  "key38": "4iYBYzXoThqSvj7CqZFgvsg8Gq3cjPgoDFk6Z8Fb4GcZqMarS4jHwasN7HGXjdxtSBRGocriDTD4nKqTiXUmvx7x",
  "key39": "5FNBAFdSsCP245BuJ199d3hXKKba1e1741ThNp1Yh2iAwEyG81m7c8bJLK2NVoyoYE8ZBT7WrqojH8ruH3raAyzZ",
  "key40": "4xZ8phff8BqGhYUHgMJXkL11A1kAF9PrGkFiGyGMgmo8fhCKcm8SrVQKs9HuYmxBZfgmDdviupY6Dp71rGVCZh4Q",
  "key41": "49dYzWzvZBeWg8U5PgpAMWY2WLSXEs1NwvBY1tUugzFuES9DGXAUmHgtjmYJUjwhgFP4CYHyEBLxTkKGSBNDBNeG",
  "key42": "4LcYp1iqs1dgk3pQmMEucEi6QPTuDDLcRPZYM8fZ7nfbNhqjMZsE1zw5HbFW1mikMsSEvQN96dJuE1XKj7giZ9Wv",
  "key43": "bXUSFAPtYgw4yzYcsiDtqtKPuPML6q66zRzmLmrmCmqnQWV9dRQLG12qmNP6aKLQn6FQHhxpQLsRFjmjeHyQW4X",
  "key44": "3zXiNCmgNmnr6VyNdZMGKDP6kPgJLewAprbtnL6nciXSf5DAA5n5LucDFxVqTEkoaBmChSaVw6ohjKrYieD9MDdq",
  "key45": "5RV24QTrq6jdTnzZxLKDd6MnfH8Z71P8r6v2EFAcDi8fYeRoJCcYhBb1DvnMjssg9YR3jJigayCCBxKkw2GXxswp",
  "key46": "4Ve1wvexCJPAPduVevzmPZqSZcjmprfteghEt4vaT3BnaGmhZ3oi3omAUnvvK5r5rkVbvMNSfpGFQi6AnND2ZPYw"
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
