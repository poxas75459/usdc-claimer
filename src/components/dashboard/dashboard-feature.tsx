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
    "E7KaLYR1CkejsXWC4AYtj54JmsNrNGGRT9Y2757JaFVQpQ4cDXvtBnHdjsD6m26PHHe9YGRF98wR7k191B6sCE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QW9gDKMJPnGRShWhY1gKTUoffLSsX4qqF5YbaiQH1788ZsCesQxeEqbfiLa56hQB58NqgjL3mkUm74bTsywQMii",
  "key1": "9MXzTDaLZ8xXPLWUr6Vviq2DdjwiKK8L6o3C3L62YzDHJCB2rndWXTXjNWSC14383k5cJiqB9RZYgypHhYXzCDC",
  "key2": "37udDRrV7Q213kWj8NaFfZUsiuQ1ELdHGRtutzchwEDQcsnMRzRtyA1Y1Vr98dp1LAU2Xrk8SCgCN7DtN3NR1YAd",
  "key3": "27wbd77dj2WE9FFvb5TJwb7t2NWzg5G2k8C9dBTVCQ6GoaenJJgUjFfDnrMgV4eFAjK34N55NQ8qNm89E9GbTR7c",
  "key4": "5LtPpNjzQMqbRv2aT1febBt6FoHWDarzQLggvU8QvwScr9j1ePYyURW6H1UtNYvTvG4DyPPvVeG1EFWeYCcegAw2",
  "key5": "3va6QpJwprTsyGNUP5BZu7hqC9KJkuSBWLshuvmuNhXjCqEgNydaGY275x5TTetXRyFhpJnQHmXN4TWGgDuCASBH",
  "key6": "4S542CKbYtKoRtEhh1ygEha4rYjbTGBUjjDAd9KZk6SpQ3skRoCbYpe4LMgNcpNctQt3oi7Qg7zvuepn7sWJcsRe",
  "key7": "2ZWdPG3QfQtHbdtp5svjrHh2Lr2e58sAYSSUB24TRxq3yvhMUU2pRaa58jCT62fxPE1oracxreq8MCp1djh661yP",
  "key8": "5deA1CNgumnfkKuuccNfVUX7vFyAaW3WJ5Zi88ofSBRfhK3uArgga2upaPzUcA1Ubs1zW9YNqSGrFmkHNaKkuJAV",
  "key9": "4gPwgS5inLcggCUHsquMBLJm47rarXTwv2oLJ1DGKqX9tcXCmimpqCFk4aMsLLUbvkQc7u2c9jbniStgGKR8MrKz",
  "key10": "nduLyfK23NjE2ua5WmG8QUmm3aYNAKu5LmQ1Z4EuZK2zErMsUmz2m1azpXG63dEj7FWpcomHSoA5bGVd5GQmNc7",
  "key11": "2keTSVXCjw6dfY84tMpe1j7W5A5SCTexSGqo9eii2tzAbXMRk36YqgHEMSsRXt1rF2RdRmD36GdaM7G3jh3PcVTj",
  "key12": "21bGR3ghVf54wgAMmNC8PRpDY5Dii5eocp3Wf6WLXfVmUNsESxWXLNTwmbuRNim39uk77TaTCsvZro35pyNqmCZ1",
  "key13": "4r5KT4bQAXoa3DKVaYH2LwPfVtNqsysTUA6GeLRv3Kmyo3bSyNySXiQ8BnwQWrP8VN7EnAayDaq8F6SyktTL9sdc",
  "key14": "axX89ABLLinbA5VBWoSo9QfEDcWTmbucZyFpS6P7VkmXuKhVvG34LFJLxYHNuV5R9wfmNgVEpfn2AvAusE7UTdD",
  "key15": "2nChTsqmHgC5FRHV46yx2PKh3tErHahWQ5M3YxaLkCznnf8WBLBjDr75YADNK7iiDDU62695JXoTxjwd1bD5upRf",
  "key16": "5HTDQ6ptevJw6PUtgtwieviQSfgoq45tEaqpXpsxPHQF4dAuvbJMv4uRGdi3nGRP7mSuvvwpuAn7odD6Cu1ZC7xa",
  "key17": "4jmGVnbeydeTUxAYsK4ubzmDCvRA2GW2qgQE3QKKycgB1wqp2oUUFmnm36FRreJeZD8otiveCXgjahUySwyiuNEq",
  "key18": "3bPyg2C21GMc5vqjpVw5S5CLJWRMtv9ANdimmWuXRjBghJcDC35LG5gGqCAcyC76xhGdEoT4z2LSMES4pBZtYw7u",
  "key19": "3ekC9jhupzKdUTVbfwQN8ESPe8zAygJCpn5ZFm6gsyPX17uVkMRBd2X33Q6X5SkQEk3jkszUNKWRG36DgFHqhuSX",
  "key20": "6aHnqWycm2ihRysVxCKzcuZ77AnvyVTA391YAALxfCerXZQNgasBvrDf5bsk41MJCcAM5gqAYmv68NqarbyBLqw",
  "key21": "3wA76ZSnQCjQsTA5tKrhB4P3WtSeLM5aKbirGTdyhvExxJ8PjzXdnKhpyRpSraiAs9BWR5aHyUNFevR5dNWP9phw",
  "key22": "5nL6ThhZd1AJbr3aMtx7Su329KvR5Gy8WgnAaUGSVBr2MkFPVgJTFeVgBu6ZLNdXSB75crVrtEJ3ZikWK1LQGaNA",
  "key23": "5xVntFrWf5AMMsUR62QBnMyUDec4XrrUejuKQ9c7Us4vVvJFEpFM4JZ5AHrB53HX4pHSpCCedgrkTmDitKXtqd3u",
  "key24": "5ShqitYPi2WTkEhUjCZiTakq7XoLKVegnNezC9KLmeWVkTYBfL4XGRR1gLXVTRwwLGYbvSpYA2dm59VzgqG88iVj",
  "key25": "2Cego3cLtjQo6GaiWxL2V2r33MDxeijZtu5xAnUFVWeFxrgUKvbWgVNAuukkTRerqevUQC1Ghxx7skQf72KJXs5t",
  "key26": "3HFvKhwCAzu9DvG9e3XqDP9ruBeVTvjoHP8Bhz74HyoKAX5fBiavMSnVtVpaqxHju3reeuKZ8D6eFfVPKrs5rzBi",
  "key27": "4aTBJSD5Zg6TL7cmvTb6Gd1NfuBhsMYcV3AK7nS9Nw5KVYuJ6ayKzka6tYckd5xfr1hSMXS8jpyQwcLUW93n2EvS",
  "key28": "5612XU8iZwRzBm9NQt1Hf9ERhNZdBrJQgcLXyKQr7czpuX7PGKKQwY9h8CiANW6PRYzbPXMZbn6bb3ama8KEZZ3Z",
  "key29": "5NWuimDhRCvyDkeLFfkSCKGv2bKu5ZKAQH5GAYkWBeSpFxbvZRxid9eNTvqj2W6yahhaZAQaeepKQpn4WjTLjQcb"
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
