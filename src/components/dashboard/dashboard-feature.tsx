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
    "t5etwnMC6DrMQhEo973chpPmYVpi6C7AXWgs7yai4Kt1DUtLPTmZLvb43BpmPS4PTZCvzmAfYeP9VSAs4KW5qr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oa5cb9VZEapnajUup4Ng1iocbWWU9Y2oF8gN5C91oZuCF7ahotQw75gzp7Yvez5e6qKG1n8Xccmaqd35YN3HCjZ",
  "key1": "5DF3VYCbKGaQ1ctkLg1HR9uzdRGt7zSzPo9AfZ5bWDMLiyKLQxg51pF1dGMXhQxHxRMrcPAGfwf8dbHLijt2aftw",
  "key2": "29FTtQrvmQymr3qqiDmWyogm1bE1gRvd7mjUrqW3mdfFFE15dAKB4PcxSZNwMsPmfiCP79njaLaFQEnhaNsymGnj",
  "key3": "E84espazjvhuoEpVAbvvGN8SSuJGm6FPMkgkFVj7szRYTqPThefMvzMEHC9sFg9GvVAEa151FY7g1LCt8Fxg8ip",
  "key4": "5bxh8um6ek3HRXPDdBEBKi75tGTNbW6xsBT8ivdt4g6NYF7c28KFL84NZKyWoVf3nBLUjtmiN1xLsZGHxBB9MN4v",
  "key5": "5rWhF6im8Maz3V2iHXuDngNs721uoE6CdPjHHjGYMgRHM6QHR4n4Cim7NYjjog1MUkDobukgthas3tzeuKz3xuX5",
  "key6": "2KHEtMBYmUazFLQ8PDxs1bXX5UH21JqykVuf2pNJTkmJsh4QazyD6E1ER365AWoDNKK13TRaQKuy9nqmVc7Pgpyj",
  "key7": "3MZVfewGrqEnkm9P1C5rPyse45QrWjftx7ZyNBJPBwZMptpwpKaW2ryZfXfpTLefpZKUrYDv53q3NLx9k3zbfKNv",
  "key8": "2bHsJT46CZJZgV93yma3DHK3T5Ldeq7aLhombymSbPuZijLdADmzAcGWSUbqLrmNhMFvGN5paKVPBHEBKH6bq5cm",
  "key9": "57CVBzUeTbGgZJMmHXMkFYtQrWs7rJ8St221nf5cLK92RbzUjQ3LsUdRBoBVeisDKrrcXAmuPCh6okjAKmV1L6q8",
  "key10": "ZKY2o7xaNv18fTQT3ujkbYjzvg4FNWgcBAPUnjTEwMhivDc6mJerQiNkBffnXnuvRcDBqZuYN6sY6ZCeJpRB3L2",
  "key11": "2rzjNkobuxK4U6aE2ASeRmAdLieqUuucgCsgLFYthbuZVSFLjchm7r5y2UbuJ6DsuEhHfLf3bqky45HPqY7uy9kA",
  "key12": "2qtNjNbEKUHGnHiSbt1xHDWQ5ZTSWXgmBSVrJp3vDpnQZYB1QEzR7mwqjBW4CZretDqwa7Z1goHu9gUcyFtc8ygU",
  "key13": "ZEdtKxpuK616WvbUojDvaz13RQcqJ5XtERetPa7h6rHU56AbhTZC8wuC4qxtos6SnCyUMs62XG8WuLbUPCLwvNb",
  "key14": "2umKCwD1gW2u2xekF9XJ482ctpfTHGgZwTA46NUb1gwxTE2YYSm2VawURmuGuvmRLu4tWqRNiRdph896Zz3NTaGi",
  "key15": "3i6b63c1dqKQtv4QT1rwo5fCoaurWQRTfk59ASzxmCBiTdNJkK3t5NUpt7isiwy8L5THZgWMwHanJp7k29ukKhgU",
  "key16": "4X8S2AgbVwHo47QmdLdZaKSM5NerPaBX8GwbWeiTwz7zR3UXSeixUdcXVqBohM2AxCerEk5TCAD6yt9iSFmVHY53",
  "key17": "3dfUcphLFkRPtUkhZQqv5c8TKCt1F59j5xVrKHwPiGX4QNJGi81sUhArrsVkdb5EkC2MRYD6yBsnfqRyDBhiGuTe",
  "key18": "2T8prwKXhs4ufraGymQSmH4irJriL5ixNbwg2YmW1Dfj42dsanijLhNgWoAzGV6bnVpS2QWfegMMg6TMqGGaZZSy",
  "key19": "582gLQQ7EDj65h5bVcdivVutZgC5jN6gk5EAdUNkwhoyoP4VjvACT95aqwFR14zipum7Zb33ZQ2ot4jj6Lvq22r1",
  "key20": "3rVwfSbAyapehooPhBXwaKizbS29KfTQH82GuLKHMMrbhFmARU7CbUX2w54L3gBG5jsambpdTiMra4HxrbHedw3k",
  "key21": "mJSHWkxepx3jMp4t8QSZ1MpwMouMcDVqqtM4HmYDPW6sRNNpWas23PJKwGexqWz8yG12zn2bPDLWYFCKzCeP8dJ",
  "key22": "2qLuJjVt6bhiwXtdPd8txQ924itU5YasaeTwLdHp9xGRu65HyJ9oX5ckatFzJVNMctM5MwcyRCAz9p9nnXLZFTZp",
  "key23": "4vn4Vb6eyDCkoJmN1jdWZdDssPWntBBkHYBr6M2xffn6gXjVYmxLYGJKErFYRSfe4AjkLSJMsDWFx3ozkU5NSeqD",
  "key24": "53QtKJf9iBoPnw9yXnnXGrPK7aUYTtKGK312ncN1NJPZTXVMVg8UHuA8F6qKhr5nhf6rY693A3jL4GRcjt4fM4eg",
  "key25": "4EJ1FCxCrcAEttARQtmVmUuUPs5fveQjmpRBu5VobXhpgnRR3EF9mavvExUt8bqh2f6jgDH3SpuxrkdyT2mqThdA",
  "key26": "3VQiyeYwFP1yLnWpVboMQkvtwPTnL2fanAw5jRSnejR36VewRq8wfLzzLvTjE31mUFFG1TEZVYjKVLD1xkqJinFV",
  "key27": "2rnnixuCTCmpzWGzBhcKQ6PUGwCV29bJb89WpqndWT7WS1AJZdJaJnvfgLvEKJfaR4eahC8brVxUFMdJzjuvp4dW",
  "key28": "37USUfZjLeYLTmerFpYwwHKTKbAHSc2rFMxeJ2QU3o3WSgWzMV98V5YWBRq2YnCNx1eGFDRYRTJaaCdoAkhdAwpD",
  "key29": "464hurcPFXFZTg9oTWkDCaE3LyBEisz9qh7YKcDqvyWTaufxysByWmWsZx1TLKR9oSDryarj3a6k32YuqmjuZQmq",
  "key30": "m5HUfa3JoxKCVxtRN2JjqEq1wxDxbeqewTJJaK2eHKuYS8Y7ZPbo21Xj2DBaXDPHMCGDPG2WREXKi7EyvvrJf1p",
  "key31": "WoLz6pc9BPq7FAsCm2wZfc6D9mSqB4HqacRZZ2aNSz8713u482gBL4DbdKydotoZ5opDqV1van789T7wnNvhEX3",
  "key32": "oSeCgXDTVqdaofW8gtj5opMPYHhYmMPGvvxUsGjuXi3KLDMa2zmsCwEGzZXr4Xz8uX5YFtQbxRF3F9hRMBYSFbx",
  "key33": "3wj46sdX9mTzrFFjdSkHrHXt2hqLmV7yWMREZ8qpr6xvwTfQUS9E1PmchTuxdt6rkrcc9XfNXRBip4fkbJtFTWiM",
  "key34": "2h4ihJqWVhyLFtBXregdhk7Zz9XMGNpWcMtqSbMCCrj791YnGRnBSS4HoRNaQjLSmcArVv3QEyWahe3EfTqHT1c4",
  "key35": "bBzrknt1J1Xe2fF9Ds4kvTkVLbVcPjjvXQo7DPjzcV18iuGciBGgb3hE6hSWkzRfjdbztHBZ3u9pYreZDkiTkVS",
  "key36": "3yy5Qor73dwDGSqcuiZGK4o9WrQ37cjfYf17ATCatsemHCVnu9mResztDQp7vm3CkxDrrNegMth6r2mnwJRyhNQW"
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
