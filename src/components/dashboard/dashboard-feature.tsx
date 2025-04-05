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
    "2imWom7TDw1agJoAUeNsu5Vd1PNg4rkTCPbj43QFzSvkbPJBsQMpGuMNMoyRqAUBqmPAaFNKroc8BNjFpEZvaJAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F6a5o4FTB5wbMxQPNyau5xxK1U2BUWkU4zWuQhHbpYN1MVfJm6JwHNFrmUWsPqhrV1p7xMzLCqdLET1P4XjWr5n",
  "key1": "2xAWvaf2YTnJnPBxEcLWcvoxveJamjjwkcusTjegNM4Gts7PcvoZhtc2qngZkpdrGPZhuWPfaE4bX5JDarUSKXqF",
  "key2": "2mX44G7XaQyKSKeh82uvP5PpThMnPneBAx56dfYphcrDzmyajZwgQMYVUh1Pt1f93MwSEECcbKgv37WPv7YQ2jEF",
  "key3": "JGtPyEgJJySThqkfoCKFk84hPtUdw3WKWQL3CJjbevGw8r4PMCdJckL5c43jhWooVe8mwNiX61EzkDUrpojMEJo",
  "key4": "27Ami5ySZrNbUgctz9bPrmvvboUmwrvCQWWi9bToSiZKTQRKFpvNYeW58NNxH4kFWQjcgBkbxkyEC6jCkRW9YVJe",
  "key5": "2HF2P1RMsh1zUGy6aKcJSk5G4Mhwn2AepeTkYsZoVqhJ5D11PpzuZWkW2MRXKLhnms9jxuS75dMJxpigPxYNYAii",
  "key6": "5HxBMG2g1eXs9A5ArWhW6GV8dkHqhovhW9bzvjPU9zVRSVzJRrt6drMefgs7vE37PXZrzJv5Cd9qecdt8BYgeUYC",
  "key7": "4vTxu4uGZh74mZYuLaVn67D51rK3aggYoeRtShDiFeGn6gd2rXgvYtNv5qP7oHqwNcpaSef3cBVM6CF6HdLg8kJd",
  "key8": "3BWgbCDPD5jipkCi9BbmAgNEBAKxRKDJuyFDTnUA3yhFXzTq9w7WhUyfs3HHXc4wFFe79AbMEKhFvGVJEAa8rC6U",
  "key9": "2Rt9yum2mQ1SekLo4YuXf6C2inCn4ksEogUhE999ne6QYi4xC4fMzrCHp66KfMDRyXwz7VT3535oJ9wpSwyh4nwL",
  "key10": "1pLum48qEph9cTCoCd5Ag4TD5hrRm6LCeXSYPVqufMcSgStNBfhmeXyhVxWXjzYsDwgC7AVnKLP6WFPjCkVbrQE",
  "key11": "4Vm2oatayBFBy959wXe1asmxLJ3w6WEWiNuoWo4JRr68VryYS6Ndh1sef492yF7a7mbFkdtaFcqKgQf4eRLNxKui",
  "key12": "q57nrDdmeC8uNDY4gw8FFqcFvjDZuqCHVWJCdgCqWGvoSarC4BNjdQLfr1mTFTXjWaiFshpghzXL2bLfDuP3UV2",
  "key13": "ZYyZKSx3VZYTBDsdKsEjapRVk3NHtQzUGRGR5LRAZbFuTxnLSQb1JN6KcFwevHxcbZibrzdh6wziCA6BGjEiZpW",
  "key14": "2PL2LWyFbnRWAjRFJg1gtVs6HvqrkZJZw1BHMFA68AwMvLf5EBPFjJ21NwQgufnzKZqGWQRfwA8RFd9ckQcwTTkH",
  "key15": "3PV9oiysL194B9tNe3L6aAAqHz8cfbBtqJeYC418MYRxJ4FrdWJXzCDse1AFkZHXBcbEY7j7HPAibPer7LnhF1Jk",
  "key16": "3zBa2QcHtz8t5dmavQPiAorHenvvqQqg9s28nw9SFpRoSbN3tTBddea9y9gSse883uD6K2Hx4RTp5zfLkiQsz1fK",
  "key17": "4PLsgZgAsueRksXHt3aS4s81Pv3FW57UixS8hJnNErrVViJyMdsPXB86EVEUVW5zvA39XrjNatqtdBntmUWS9qer",
  "key18": "23fHCBDNMcwENQSZanA3xG4frqeXWoMAoPbmAb2TJAsrffd4cFx7BmvMT7P8kXdAAA1ZZQbiEWb7s7pAREJQQnwW",
  "key19": "4WxAzJuaxCkVUhwXRFcAJmrLVofX7j1tJKp73KMTA2h3a5ec5zNB8vbeoL1KSrxGEeFtVgML8ZSbckKFspQA1Pmd",
  "key20": "4PiN6jgNW1tztX4HPLNbEMyPCykewCGjHVvJvhYPJhhJpKjSLY7UHT4NVjMztFD5gGxgvaEHvEBWFucBH64jD8no",
  "key21": "5VxrP9EoT29467RyA7SiscgcsbNxrBJAvXywMjYWwoY7ia1QkigqhcsevdUU2q1md7JRexa7YR1doQPafsdXiSVE",
  "key22": "4PW18h7xsEo4qWcrXmuNryTwca8KXpsHKvYrcjC5EpMGtva2L3cvepVtw2EcfHLam9VugmiUZutDSAvLB8DSk92g",
  "key23": "3xcb4ek4HGnJFRGR9xZEXNaPBJWrRRZWS2ajbLPuoFM8wGyNMwi9HxMT25AVhMbtHtw6YFZPbN8bByLkegJLx3hu",
  "key24": "4PqQsQhKRt599ucvTDxSe2Ww7ncm86SugnGUY7JtWBXw3vqcMWmRaZQ6AZFZiTinxcVQ9CfDSm4m1kapu8Vdgqmv",
  "key25": "5q1kG3DBXhUhE4JKNFjkkUrx2vBT7xEPArycfTwGNb46cgiA4uu6g7J295ce2U6HhW1CbCuK6be14WUs7a1X2FgZ",
  "key26": "56MRyarwvdaAq3JQqs6UtbGxCvYcGRaURsYbWqikJowPhD7PA49docARjmBiLsB8Wn87y7nHXmgupm8Af73d5hqt",
  "key27": "2Gt7ZUwPbFMteK7oxwpJz1hKEFNHniEkwCbRn3JVnJCRn2ejd33BTzxUaDSdnZdqghhNcZGgsWEosmaGSLe6wapT",
  "key28": "2MsR4Q1pY47LSkGBYCWTk4DFMpLAACdNpufsh58CBmVSdDDRwgtruK2dyib4DcKSJioDPGcgJVgPXXYWBc7r7C3",
  "key29": "5PWwnBmr3xmHDMuSxhPQq3zuh5EiXCVCyT8s5twofEYW4Eup1s4JcwPPMP9SBqk6SYvpXPwzfugPJoo5j8sBLExg",
  "key30": "2Grk2e95Gs4i8UFhDWdXE3DnXvH8BqZzEgwvxYfDZdn1voDQQUQ3pPyArVwzJncxd85S4gTGikAjhxrRQpEkM5vr",
  "key31": "4oowkYac524vKyUpwQCRqHqESJFyG6fGrUqoEW9mnHWR5SRdVkcLogjUixz6ZAiW89tDRq2UxWUDLVb5WLMvr7bD",
  "key32": "5M4NsM1AD68owP2fM6uiJiDL5rkfw7hF5EdC4joW6PKPYkMCqSjLBWZbGfRAMBc2fybpqHJt8mvT4qXDsHEw8Jmt",
  "key33": "XEt23fCyJRNAMvAVEkMij2YjUGfHqrtpeF79w5tPsWEPtok1FUCXLrCZ9eVtoKt6fmyLhtvT3TPnTUMrzWVRvvz",
  "key34": "3s1XyvnmHDJzRNjfo4C2P6LE2xAMtQx2fWF3VMqXrkWGd5v5MWAhPn6UDEuAyTJYobwyEw9CvHELUeWJu2ifrvbg",
  "key35": "3Gges7i3W7ZJnBDocFDPRqEbNfohK4KmNdawr6AuCrQo9f3YfXBkCk7fzqG79RmWe9xskbPvZUAT1Rj1dTrqGQfo",
  "key36": "553xdUs7aQgvi7SfhBG8EeWAtWN4HH7zW8TYrWzCyG1AH6a7nN5HioX2m98PQZYVjzSvLLXxoyz2KXX1TLmfZ7E3",
  "key37": "3h7JoxLfSk5CTGMcozEz3JDDnG3bYw2KCiw94pyxJcAc6A9Bt5EAproEV8QLrK4VeXrsGtEXusvFGSfwAFpvVMds",
  "key38": "37sXE4LpkgPworaGAXivgjW5VrpM7e2PJoCVPfjDUq6b5Ub2Pq8N3tRUTtVwdcLjPZzmGidYq6vKjWY9zKwqPpK2",
  "key39": "5BZBPbZGzSdf7pjJ1AvWLcPk12MkBAfekKkLwHXjWWYL5BK3dWUHrqzLZYXkUh8KeFQHW2C938CdzFmiz21jiN9z",
  "key40": "2Q1MYaLah8x21GctVzsjxSEmAndCEj7yCN5JkDQU1r3rcY1GCy7chsWbcFWbdj84BKjU8MzSe6YmFeJRNPsBaaAa"
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
