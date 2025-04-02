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
    "4XkB54gGXYi4tASMEe9e8kQTsYqii1NeJtVgED6tyeeJzA7a4MSpky3sFYCEMkxRYkdgwSHDLZJAFon46AvBDsGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ewTFG7F4KA55P5uCsr9Ryya57pxKts7VfXju3TgnwXA5vGGAJTtvNjvtA5buJFtPsjHqgsEdDrct6wrcqfUvM2X",
  "key1": "3jz4F1SsPp9DgRngribWXqQWAK8wWaSvSfpWgBz3HHFDmP9x8hDuVujAKcPH17XWiyotU5jmj5m1PZagD34nKifd",
  "key2": "2w7EGJVpg2HjrLwRuKvmQoSkXqT6Fi1UhqkmB7nyu6qsrkZm4CE4rJVrd5MqS1xo1uw6bJUQnYNqv49hgcC2S9Ti",
  "key3": "3X6Nc4hwkxTyvR7cfjZHRzUi4t2kMwrm11GSHr1YAUoMFVo1cUn865n7TtDJm4EdDJybP5MyqXefbSUbrLSBZAVC",
  "key4": "HB2zU4exC1ZSVSCAeBjA5KGCsfkMHnUcj18ZfmUCC441igU95DHBcMfgdyzjxjNj5XMrZuLdCnwYytmz5zWqqDt",
  "key5": "T9EXTkJG6TsYTALryyhNxmFaFfc6ukS1WWLiTMhVytVrpPaydi11gzGMoCMVvRnu1cFYa72DdAVhRSXs6axgAdj",
  "key6": "S4DdMiXrqVNfebUzhQFdDXE4RFo6ntgeowfXf4hGYWuMgJYVfuq4ortDQAz3BAvtPu4C2VpR2yVgqXt7xjXbm9V",
  "key7": "tJFBms4W2Q5GncXhntiCKCiNxb2znhsEwHoQJpvX32xwkvAYR8ezWT9yjEWTWMuwhDdYopdqRqmnpa4GZBpwiqT",
  "key8": "52JyFAyL7eq8ygaNv11U1ZJ91LnXqioW612GUmFDaEV5UgHwKdBK3UkghGoS3ZefrpKwPrmgcSRm9JHqYD88APA7",
  "key9": "4vSbzTkFimTU1FwWrfmdLC6eNDeNBgaeWeBHRdshxDhAw6oeBctkhnRC7qP99L284QthDNmVDQvGdc3Bt9zxWju1",
  "key10": "2JDv1vUkVsCMAWVPCyLYRftAgnf2XFreSDGtN5oX5n8PoP18pD6XZHCHfjSpMnE1MttXaMhD2xC32NoUpTkCVxTr",
  "key11": "GUsy2eNdXcuE4f7CywWQodKZDme5nFsk7earwSU2C6i4kd4qrBzWPgbVVwTwCgc2udXnzxc4oWSjihTw6UGbMGw",
  "key12": "rLBSArHZ6RPc7QeNqukRa6QhcNCJM14GJPL4FaHEPFG3Lmnp4FAnZ7pVezyir3c6A5nUGJTRH6kqR6Fejea1y1Y",
  "key13": "3FAbqSbifephv4W8g4RPEG1b7Z8i8Kig5NMk5PFjLh4gRHJbnHxjr5hLLonP31omoYjXacZBcU7xNpR6rfG49Q3E",
  "key14": "3gNPfrhip1ckoDKDuVdqLwoCq4jA2dwg3YGzSd3x1BC1aSycPXqaq3XHyLMnM7Z65Gm4GodG4Qqhsxxi7E9v2GTK",
  "key15": "5pntGkwyeQR1JkCFGRyRpT5jxsdXLv651aRPUSvQguHC7HP2rE59qVzLbsAFhb6L3fdXdQdVZZzPbZa1Y94NhA9m",
  "key16": "2ZeKZicxcbHM1rwPTj5iRtZf25pctfiYY7zFFis5mZcNCf9srHtnR4ZPLxfLL3v7dsdJrmPVjqPjPi8QT53niU4N",
  "key17": "61TrF6wg9rTFRnNSHmBp4dwmqkQA1d7tdcGPhYHp2Fs4ccnRLWm5FeHEs8G3C8wxWfFFs34UMcsszqd9miuJ5L5W",
  "key18": "2Vm639rpoPFcB7NAYBqCcJMhwdcDb98qr92Nfi4ZaQfzD4bVxz6yDKPKMLKXURa8g5gvsXtXBUjPf1QaNVCNe1z4",
  "key19": "2RcC1YxzRJrr7Yz9L4TmhAZMSt18VAo7S5UPXYyhwveUysKJp2ExqwBiUfp7fYjysim7RRgY6QVhfdtS41KjWNrT",
  "key20": "4pm6VVzByDjm6tDShNUSmHkm9XmMYisoVoZ77AtVcE4S7sr9UibK3Y3UPs5iSmY6Us1fjhs9dWTUwn6a6zE7jfMg",
  "key21": "5u6WmadCaQsHoJDqZ5ry6DTqvSvMi3iAzB3XT4ueXnK2tyo9FfYanp1mpZxTsD9eZPUe251ZrXjeitWwYuf6y4Fr",
  "key22": "51GG5d6rxuTYx12a66CvkThVMa7Fbwj2fypKi2sF2a1bMgxZFZhMwWka75aQB2FqXXsdujBDTswrobrD9ZTYnUF7",
  "key23": "5yJFrGtG9V5tP4gsjmmbyTte4RQDoCLAJVxSeCeRdRwYNFnhSJUVKA9p2xah2ssZyWG2d67XTa2kpMD9zAjag55j",
  "key24": "4a5G4ua4tKVPR9E6pApJ9DesBbHJ4fnj4reuDcyeZqSa3xh5pkLwCte9A23TE1ft3W32gvLJXbLNeo43yVfVqqni",
  "key25": "2j3h7Z6G2s1GMiVeCzmwHaC8jynHp3SFUaVL6c8kXiHfjUDaCqp5cAqK6XfFqonGfgBZGVKDCqvqAGMU1cq1xTF",
  "key26": "qxZ1HukxBtG9CMwSms8K86xwcP9jfa7SBh9sgDGzh6VV8SgBXJKbrgAaMrwrp26gKRq6KPcHkkjBSRfQYN46rVL",
  "key27": "66t7W4wjGgDpDmLMdD3Sb5arcpCfiFWzvbsVfMa8ojThNNbFRnFBGJWKLCDKszNKdD6XiJyJVKtphPot4ijDvtZf",
  "key28": "2sjARg8m9KjNQneQb1vEAw6thnRX47LRGcCyxf5sJRbwXSM8kVChK515HoGDhZtAeJpAEXukWU898V65tyuZ35hN"
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
