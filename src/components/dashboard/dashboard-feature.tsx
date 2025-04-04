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
    "39XrotcyzkpWfscAcxo7EmpTkgSEbNqBfApKZZkhTntwyFbRUV8gbr4zBEsZZJmHyYbew38tmc34TcGJqNSzU3Mj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gTtbv3Vni3WbT7ECQXPc51GE5QfKUpVf3Gu5xhq8QYn5JZjBvjc5NBxEurJJBgD7a2XBumZSiFSbF5Sx8uzsRAM",
  "key1": "cXeRjdB1kBNXX723F2PQp5dbftg3R3kpEYSafWtdmB4xKKjRm2o81T3rLUHBteSwFozr7xusG3trwEc5Y4PJF8p",
  "key2": "63AfCdHus9jvjJACAF294KnN6Aqzd5BDaay9WSG4osUmGYZ5Jb6yJ65WUh5EpGGdu96xUEEGomNq3PdS7z2VRw7p",
  "key3": "4EboNmZQeDdvdozt3uGZ9DYSdKDHuwedu3Yejdrh4L42cz1YPKJYZcEo9eJRMmw23RhnJ3hP7bdFWYJhSFyYJbwq",
  "key4": "5MQinnioq1Edabc7LVT4WhJyUUwSjsVcvAPNfDZvT6bxCvAEuiKTDgKxkZMT2AdG5peB9RY4eLjQbkmMDwwnyQQG",
  "key5": "5wxnpKdLxVh3SFeFAMRp6eNNKV7hpXV67bReo1G6FojX4oQjfiboshjTXTYDweZ5DUZYtATrYZg1LMhW92Fyz6zW",
  "key6": "4JwjH1MbDzCHwWmFLJ2v8iKijM7J33AGHXaWgnANahtEDZpseq2gXwdstBVRN52HrF21WZQGqsAzUpbGwjknbk2y",
  "key7": "jKeacJvah951R25CdrxkMSKBqTZXwqAcdUdEKa3GfbT6WtQnaR5XM4YVT18HmLL6LjWXGD845XLZ4PThpBoQQtx",
  "key8": "zm7zisu9A9TLnvPF3UfzR6FjmesRYdJ15HEb4eWVhEGhfEXv6dMZiYAfxEvt6gVHbdBrH1fmegTcDfSRYsaTPgx",
  "key9": "4Lh29NMGME7eeKgKeFJZwXKy6wpwTx9djYNvU8nqmB39irhFmTLy2ASLfMYDaaNcxPUQ7tRsNt1mxw9rMT4jVXUP",
  "key10": "2AEcjPzuEocyrJzwZxYupj1fFsgxKDRwDy3shUpmXGq6WAnSzDzPATYvtmeubdHDPHZwdqM4pdfUG49vA64bX9pW",
  "key11": "4LX6xSJL7anYbZN3uXsTBZDHdTrqAbcG7s1KtjNX6DEZa63r5Nssu3t8rDebMP5H6VZFRoJGAg44fxfEzKQKPLVn",
  "key12": "4AnT9tX9CuLyvX2gmeZNgibAWcpxU1nXwd52bXfku7mWRcvkXaiE2SZouKd7AY4rMVvrjUYkPyYjdomRh1h7X9yA",
  "key13": "4W2Pib8FBFyB1vppRJib9K2dJRrEJYLmC29UhhDqsnA82kQW9qrYZpT9uK8EYAcngiUKnSk4vRhSHLhgJ2cqndoy",
  "key14": "4c8LCEr4PixqieD3sLZmfLd4YqgkuUafAVU3fvwU91WbqUCrkFqjQ9zKj4pvxhyWF8vyHsVatHifEHaCxz2DhdYN",
  "key15": "56WELftLMi1Ug6pNvbB4MUxCnF3MusxeELH9mzXAYX59yTYaAkTxp6qiLaMVLGh67eVy4WVvDjywNiHkxaeZ8zoL",
  "key16": "4m9D7kkgqfiU4B8WgjPmvpenD9BX9vKJWfn6DwugEvnKQjdD6sqntSkTB9rZq1AS38qALMrkSku7uaGXvpy9PVtL",
  "key17": "5vr3anqpDHKRhHs2MpznDyL3WLZk3Wr7VtqPBwyt2TSfmNQ9UffXT1wcwmt3oax1MZZuczNoud41U6QmPdCGDFVa",
  "key18": "5Ekmm5hZ6ZKUxxsi1aZPo6y78fjt1zP57hvs6BwCiy8VayxJKtL7PijxBp3RLr5m2JBqSVu6x68nXrschbeaMEaP",
  "key19": "ghJhsLvZ5uya4BEM98YuZHP4skLzbFPkUgt12w76STZ5kU4yYD3twAS9X86dFvragWsLHW9sjSMyyBpDHgHnwB4",
  "key20": "5heNarq8Mc5Hs5bckGj52pfrFVyvfwGWUCfpt4Zc5okw8keN4ChuJnfAaBEeAyfRp4HaPimn2KxvS9hWhmq5dhJJ",
  "key21": "erQZfap1YGLPKhuZrT2qLYjyznPo6GVjBUwfgCW5RcqqeopfxYH3gULGfzp74M86eQRqTgRJ7vvEzVac2s6nxA7",
  "key22": "WYd7xm7Cn8LW96wGas2eTTVCEysrXo5YBaj8LKWi44YdVTHqDcNSSgRU4rVa8XqsQxAzo19HWdk1dPucGA4QKCs",
  "key23": "3SJ6YuRuaTmGxK2ELKQtUmodFzUP18GfJLReRby1tYeSNo7NnMypWeZsJLYLk6xtaYR5Ajo8s8Qxua4EkmVKXPE8",
  "key24": "2FcWLeuB1mxvrLU2VaNZrNy2GhmhmmNhkF3FxAFXzpWqFvaAF1jn2fxBAZ672PSjRrtkn8BYwV2sNatmRskebNik",
  "key25": "3Sv7uCF9yEWaDC1yttevbNPQ6d8BqQ1dMjuXotgpcvJzLPXa8uuBMNyLcpnrayNDAFXCqmGb6zXWfSuWWjpZ6DCV",
  "key26": "5LeFmexafbSHiK5eUwJV4WgyCsTUziHY4jfCaDTHUg8YgXMkGa75eTyxgRaaZDBnaAffuV692Aq1VMoXLVpZWZvv",
  "key27": "2mTNzYVsgMKoSFyVvCKhhD3rZfzprpHNzdqytGaWXX7QoZuwdraEWEEpFrSZ5iknyGfxEnrwHx1uhBa1ZxjdQrM9",
  "key28": "G9zeo56F8ZTWF2zT7n6UiMuAk1CTyyxwyMAeHN4BZQQ9Xgeig67zVgv2K8bwVBnpKk8WxV3PFbu2e2fuKCxgdKm",
  "key29": "4H4E7KSreJZs3AZ9sbbhV6B6gq8nxittNBE2DwD23ejF11Adup4y1jFM75baK1dTGv5kjzpT6A1zvkPUKmnTFk2b",
  "key30": "5NFCZVCQA1aoKUdWfuqM4sWokVmw3iGzLSw2NMkmcbxYvGgMw3aJJgT3kb75UXYYPoBzCriPJGDSB7G4dVLtSwXq",
  "key31": "yPjq23N217exxmGHAroMC6PLoyeMWyPrFiYM4tBHhRvsQgMZDAjvo5dE2QjMpyck4zXJtrQ379bgwmTPBMJssnq",
  "key32": "3CGvnfUF4zfujCyPZp4VAgmhrcM59bov3SAVPvwfqsMn2JH5DxFXqWrUdeYcrEejtdBRju8jR8LFumDobENouZLg",
  "key33": "5due3VEcCV8WNyXEQ8A6sAUDzERxtqkMDi4Px6jVKjavXHk4bbAEBSr8s7ujwVMp5YTDYLNDMnPc8tRH76rxhUnL",
  "key34": "59izQBYP6u8p7jtirSi7jdSVMKYWAzmr55U9Vzqksx2UfaHJDgEuHwzhRuDixK4QWeACYb6a1nfUVqkXN5C8D7H1",
  "key35": "44kDDKMnx934Vpy4N8rk9oBUad2GmLTLegZbG81WB5DsrhH3Dzd1tUpjwiLXSW8CgJbAquREK6J2K3vZa55WcbGM"
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
