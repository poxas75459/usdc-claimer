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
    "2mswUoMQjtL8omcsxBabhiKtad7UPVXfTeXznEoVYAUC3YJj6vcStCXq6MMXgWuCQ5XT7zt6N7HkfABegLgBQkT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pLhddyuATGVMj179ViZYsKaWHTka3CUUCchUnM6qsevAxUvrm16tzgktLmwC4jvSdm9jnyWQf7mKDaXQzptaqe9",
  "key1": "3Y5sowKAzjriqXbtu8FiKfbvjKsTwuTM8axvDwCD3EBgSyswYphMBCmeH3ruQgsoTZLxgbZxkGLfdDZqAawwoxq4",
  "key2": "5waiPZ1MQEyfJRfmsC6Gv1LDHbxjPHG5ycQarHUfY8NyE11jYgVFnJPXJWmbVE8ADzYEYSKKcxiEtRDnWRKiWFET",
  "key3": "55fqrYWs37fHESWcuCE5Ra6M9SgkXRuW32PexiD4sdbWeJuUpw9C8NHYaK3e4Trh6122iuk1GBsR1qD3KFM6Mc59",
  "key4": "2S4oakVJeDS58uL6mhmKVtG6DWEyky2ww9qKLZAdcZXdEybu7gXeUYVtTm8Qd5nsszX8TSwaJqTj1sGvtn8YPu8M",
  "key5": "w3QuaMtsg1794j9uZX5CtWLSzQzxtneVKMNkEezJ7c2mRAg39krYuRFCtyMtECcC8WfwHCgVHoJ482xF1HVbPZX",
  "key6": "4dxbTsUKUTqApw7wSTQETHAarqKQ5MDFEQJQDBgtbM63ENvPZsMB8hQf7EfgaitMcnFXXNGmNunkZZx4ixZRrWF",
  "key7": "5Au7iJ5mTMq3UPhZ6Xt1K4ZztiJhV1jAaDiGn3Ahqk2NhCjwXanzkarUJJmQ8XxKHrvLScrAzxZvbenGDdX7KyWL",
  "key8": "3jHc1uPJf4mcSGdWh8srK2pm9JmRRX87RzJzDns4CwPgc2dNraH1S9ybpdbygdKywKyQpkKPbJfsrzztkEyZMhvD",
  "key9": "4Xq3dEPuawJZZMMvBSGTbDyHXzzb72bM1VLzeLwPBrZUKqeWFzwi9d9WS1rnLVWiGxNT9UbY3kYF2o2j9kkYNhTV",
  "key10": "2kJs5mHQC5aBU6nyAs5SUECVeMnMFVJmRj24aaRn7Pup9koEAVahHdWKbS929pQrdYq34ZKBsNTi1VugwcumdMvC",
  "key11": "2KPXHjRDrBqmB6yNeUQqS47dK61cST4C4CgeWiim9NpRdkEfUEm2gi3Djv6S7C6iW4jLfjmu8b7cBeeDUzxWNfeV",
  "key12": "uCTCGsiCz7fkPzuvJY9pQvtw8vwgJnkYNHSELzsFCUww7roTsp1xvYNZu4WpeotnYnjpuZVMtzHPC66q2fadusY",
  "key13": "3FvDYUwZWahM9kNST19qSoHjGMLYydsoM7a92pJjgQTTJAu1Ps9kdhWPXQx85vL9DHskcFMMaLL2Nwakg7CqnCHS",
  "key14": "5Ma4xJvHWo2avKzZZgdY4mSDpDfo2HDkwY4BegRd4uQPv9UTh7eNrpKUKKni5kk5tzXtNu9yKq1D13kaHVd44RYY",
  "key15": "2ZHSgiH5MfQ4RL59arAzXXMzkybrVqKFUmhZ1ZnoK6VvmjcNHpgB7GKMsKW98Pa4DTJSwfHHfQiWqRDn9Fgr5sWt",
  "key16": "4noHZQzgZLagRVsPemeQnb3D3YRpX6UMxQiQj7pxgWQam9uSekVsoGYRCFkUzQYaZXcMRbxWtBgdiRJvgVhUvgtS",
  "key17": "MKqcXnhvSotFvkkkXEfq3ph5nReEzAt4ZR3guCm5of4v3eaVaHeRopJJtuZx13vSSzULiTDF6upRKxyCBexAdp6",
  "key18": "5coTDWQTNDFmu51BSEaUGgfQZAFYZo9R8yHy6rkeUnMsdLrSPhuS3Et3XkfcfW9Z15aczZ9E1GvT7j9mYJ86Tzp3",
  "key19": "38nSYWAuNWaU28JkoS4TU4uPnDKEdczUoznbeK5aGR32x7Jv9g89V7VzDS4RADXiYzhpG6MjfXEoPBQbJes6nVv7",
  "key20": "2d5iGypyUh3FwQPoPXnA4NhyEad9wDhPus6c1C9pRqV3XrzJqR78FH94ALmt1TfmSY1uoSrd8ab2UhwtS95RUfBf",
  "key21": "5XWpV61DVeeuYHx5k6Mt4Qgw3ZRd5J6LKrzAfi72yEJVEAthQDipdEDE8weJfKsMQoqW8CVEa982xCJs26JM6ihe",
  "key22": "2joN8KhUvwjcub6jEz2f9t77Qb1VE69DfVTVJeJGAtremrpLhnqtk3sRGYCtR4c3bQ6DPuubi3n9LcCJqiiQKRR3",
  "key23": "5RNRhEXVg4UNdP5om7nUEcCTDieSNYnP3R6ReFDkboNo46AYedF6wVvY2oL9zKa9udkifKrQvT4is5PxrhFQa2xT",
  "key24": "4srQLnXCYjj2be7rY4yfsA3AVe9x7Ps2gDdBWBuKCiQ3TpXiU7D3rc6bThUdJxcKP8vE2nyEpC2bihtc3oR9MdA5",
  "key25": "3ws6KbQZV5gL4VicDT8YHLeyz1s7HAkfV81ZE9xCXpoLqXufaVCKo8rt1gcAokoWJewSQPbw86EWpLDEifgNygJG",
  "key26": "63YzXvWCne9kgzg7iV9J11GBtbB7ySyiV7joLZXZ5uyo17AGfYTZ8aqjtqt9Qe3AdH3yKrzny3E5hcJ2kPPNsCaU",
  "key27": "5BcvSN5CutzdzE3AKKQ5vYJHArTVHFeruvXmhYjugjzv99L5kvvbyinhgQ6Xgb36CGPULiujuBtrrqqXuGdJqdvR",
  "key28": "2qDWNBPr2k769LD4kghex64Jts45RM7Z4WTfWeDoBev4vxyNW82EK6BfVkDraYbNrnqhxFhvhLSHHZPBxEdCaCWu",
  "key29": "3BQeYqJx65TGTMm3m1yLh24RR3wrdkuVdGQDj9CDiQ5SpBSHXcVZNg1r13GHsdsDbif2t2XL8MoMHxe8ERBDLeqf",
  "key30": "2UHxwo7QkLPTEWmMcHyjNr8MgfjaLoHyYiBuHcVZpfF741V7necKXnzmJfL4o2dKi6FrpUZz2iJUqWYgXy9fSMS8",
  "key31": "63yNfF2Sdv7ZQokG4pPFneospagmodasEUgzWUjeS1TWDfE4KpTtd9zhXp2H9manYymS6dxidPefrSSCXdVZTBJV",
  "key32": "2M5ddTaV5d1zoHqMqmJ3fGVtkvDCtBXoiV2VgN8jW21YgAWLM2vFcz4RE6F1RvTiyN1vvzAtVUDnrHCR52CPS4Qg",
  "key33": "32YKYYqkKdvAk56A3fsTFVWU11CwGUu7AFKti4d3msG1QYWKL4MTCsKyqgHPTxv6oqnUoBtj33exSa2fv3YRqsR1",
  "key34": "2encay3QqqbKnzpMC46P2Ky9dsomxD4V9ARNcC9DLLs4puzfBaabArPRmaBFkkHkqegpej2gVfQs8PeEjnkJFogs",
  "key35": "55PtiqtZrLUwDn7nUCCkqcVior9HraNZEHwdUtw7KVpmAUGnEnZtQK6dxnrL5MvqmUdAn1Ep6ynZs5gZEazvxybD",
  "key36": "3V5L8CcnmaUprri6KDAYiCz41cB6cwC8upJuEQr299E29kZHziqHi1tmFosCiwrJdasHHk3Qfrf9mFwe3dF13Vh5",
  "key37": "2YF7ks1mwpYhmwi179VDNLwoVUvZzyVmcJUzJAKUi1kzzq31NYDSdxFH1fPYJ2YbczTyu2FXpWghuuzYr9GTtsiQ",
  "key38": "2tjmBdpK7etPWV89mBxfwJVNq4prkpvEwWHmGckpAhA8Y2QE3S6yhmLUSKzZYRDUG7cEsb3ieZPem99svspvyfoS",
  "key39": "3t7mZaJH4XBC1L2gstydVxL2bFfu1CMne7GKyXPMd7a4Yzq8aUi6PwDkSjwuiZ9rVt5mtiWnFV9LgC4wto16H5Xi"
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
