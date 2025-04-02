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
    "3EoXjSmaL5Uo8hFnJoJYYYxZagTPoHJc2unM5CXKAMrzQ1hkH8SfCvQNrFRcUzmuWDbpU4fJCTQoAqWytqT74Lac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SzFCvzqJjF6dTGN8XYoQY1ZKEK1ueW2W22LvmNug5yQN68QCx78YRGPfNnMY5hoV1e6xaF7r98HbA46L7VpUuB5",
  "key1": "3hYejqb8nEpNs5FY29TN1mQBxHsWebjm7jR5EBRfJY6mKemMZCjYeQpsgQ6Mjihqv7wbPacvkNNwPVXP6KPY2KQN",
  "key2": "2WwUGGgsdPQfeoJowWZuqiKqpoXzrSQMmm7M5uxCEAvgnwB4rsQfE7js3Z2Fori4K5iNhAFfNfARCYbwVCTDVNYF",
  "key3": "433uMBpUAeiq2D5JvFoKKmXzSsSasKGuRdXhE7JmoefcUgpVfMasToN5k5bMuQgBPyBY2FwcJiwJU9NG6fobSFEm",
  "key4": "2jyQBe8cAgXabxXBnZgE9bxBdGpWJyAx8Ckm9bcqhEthNNWsbmCuRCPcJokBXrGypgwjpi6P2nqZBpPZAAeP39VV",
  "key5": "2DUM8J8wxfnXXKjeHcSSCZBv8xDVSKvCASApZUpkooprjTCcC4cp2rGjAv1TwfrSuri8KMCa6Sy6KmxxuBdSfBRs",
  "key6": "3i1opSifpbMGDJyR7dBmiNyMmZRnUvL9McAvb1sMrjr8pY2X9JK25aMmYQKFkomkRA3j1LUhDHJK1anMYy9sJqAK",
  "key7": "2HLqwWvbKTLffdXwRbc34NtNPfzefxWbPm1nUqHq4FBuKN8WccuC4Wf3s5rCHPMnodTiiiJYUBUBdUjPGGXvwYDS",
  "key8": "5vYrBhb44wWqTJLAjekMuFeQ16RpZpmSuwMY12oGMC4z8PX5X1q2Weizgmw5tUw3BDz2h4kiXGe5PZ8viX7vqXHN",
  "key9": "4RnjoanG6bCwo1BGfajmZYt62XdPGPRMmwrr48Yx7et2ofRMyUzEcec6iLKtXuWCKGexz2GWKzSC3VtAdS9ZnhEn",
  "key10": "4R1fvfsj9kRm3cMoc2Qdpv3BN4EvAfYqUUo4BUjkxAKmZ3m77CzRp6p62MKfWNVU3eaZ3Zty5sTcd6wiDGhoKnxD",
  "key11": "4WcAnfusHZwdBrGvJCDEW8E11qagt3HshsptrRAc6fdnuwUfTfeQGqP9xR28KzkCpERJTZqMb7asdZADB14wwDz6",
  "key12": "5o5MC6i8BqoBKGr6dww7r2o4cg1Vb45quZ1evfST4gwrFFcu8DyXUdDmiDwqsRMvnmNB7dD67hFfze3WK8gJnTxh",
  "key13": "P6f4hEoNxfyTMVBAkLKpNR7S95XLtB3ajHQc8enpnQTsYkGD9ro7CoS2D2YXfj7TFzfUDuyq45Qcafq672U8bNu",
  "key14": "47XQtuhYFohP3DgUthP3m76ErLZcaitNkZwHQa9hTnNLpzrAuQvk96WWtMdTUkV3nxqabn9YFMiAMCpDYxWXrtpV",
  "key15": "5pQ9Pgpmp56dk8SucmtrJbsKNxnuz3vKiEnBomLM4pmAQzYpDpduVkEa1dfZZELfPc5iku3Z8tUeL93YwnGeTKyR",
  "key16": "4KzKyLLAUDgY8aor6NcHsjsLvb8Pu36qioZ5YTq4W3yQz7ZzA1FPUELwmYShjQ7J45sDcisCK6F8LEUy4EXCoyuK",
  "key17": "3EA2BYprTB9eMiPySuWa3RS7DHQj7NGfccfeTiEdfRjYja6VRaK3YC7sLLxPCKXpGduH4fFfgEKMjikY6ojreMMZ",
  "key18": "52vqpfk7DazrTv5JbzYfu2wAcqBfDSDQx8GbnzGSFSEUiVMBY1dcbuKuoXauUKZkDmpW4V7oknEaTv9x3MTCsy5z",
  "key19": "3LBdqQki4o9T2DnNCFFWRESU6t98EmVAzgjC498nAkNrmvpgmBp7XU6JrEXALzWWacSezd7PQSGUicGVsDMagz5K",
  "key20": "LAf72APnNYJNcaBCwRrczbT53sioVJ5kD6V4nnQZrKwobuGvt4CvdCjGBQhMKRxqEXk4DR9iSqshCCB55mViQVC",
  "key21": "pEJbBiX1uMjSd1Pfwzdycrb5qyptBM1Dymm5Fqx5JRdUQrkPghshvJfXRvySyDE86rYSsWSDT6x1aYuGLoFZz3h",
  "key22": "2CF7mVzNqUQZR63WTVJaDXeGxDV72eAWjVonj2coRvXhjHBHaaQxDd7Wh7dceUyp8SjY5Fs23CZHFofeCr4WMhwK",
  "key23": "3GZFNTAUwzmTtZc6Gb4yUiESMrS3CDssVwoSA9hEF6DjuCiU7Sya3kyerZJmg2A5qTF5qicYJWgY5i8fg9PoBP7Z",
  "key24": "5rKD8QjweNvPjz1EPwr7og9boCbWgJ2EjQp3PQakk5i6eAFYW8XmTMoMFeWEfNPNDn4qyDUPBxe1wpotuhSDCPW8",
  "key25": "QXcDpWGYnXhVosYX2fDCkH94GDELGuC9fyxGYhvE11Cw9Eo5HCssdBt5wCv3J1ZfwjbycJLdNAeRzFrtKZVuzXj",
  "key26": "4KWpJ9qzqewd7yMYYBrmfQkBZzUQdQCSa6zAEJ7wktJwp6gMdkCXMH9gcyUUGGVffPURmRd77F88PHinTr8PQbNB",
  "key27": "Q4cxzoERbMbtFxe9boHriGPeuYJqfT9dT4zUCTgN4PfFn3MHy8G1AcZNAeuUd3QoiArampZG31WDSaBnfPR3CTz",
  "key28": "4xuZ6w5fBKpjCKj2ccHeHw55qn3p5od81zihYW5m6fcK1eNT34MPVqzzGcgS7pRtYZPRb1fm1wZMvnqZ1VAFwH19",
  "key29": "27CepTiGpvXjDA8vRUZp4xMqksr4VoPR1QNhYaSUR2oKb7AWGYgq42XanPGu3RuKHu6Q7CLBRRBCwN7v9FzA3KYj",
  "key30": "8JrYVeucABg339Pz9X7FKsfH232dVYxTRZYb76mkqpYYf4djRS1zg8mEef6AEJeKqLzL9kmJKRjqh5tiXa6YCmr",
  "key31": "45NUFqYeEzXne25AeSDwG2po1ny9foQ62wPVh6UM8Ud197Mj3f4iMvhjimuWkgkPmwumdaQ97eWson5NUY6HWZNf",
  "key32": "4fUskbNhWiCQrKUdoRR2YfZMR6e3yax2NbRxJczxbVawt4AS3w54mvyDdBhoZsXNy4SW6XV23sGgn7W22Qp5AUq3",
  "key33": "y44DAg663pLt34NssMxPFw5aJhhGrLo3kj3odcTGitjkGK5j1QEiTj4EBv7A7kYv3A556MNqhi2dGTB9tAkRQz9",
  "key34": "fVwiZWQmsh5NYLm1fzYKZHoDEXu2aRpNFZoAraoLQA8DTRtwSnkaxcyzzG9fNYgwSPAWVHjsgUZoV29ZPHXSwCK",
  "key35": "3CwUoLVndKxFHCik5LHpbAnbvoQgy3XD9xgUeXNrAPCo1biKTDUfdgAgompJeTtqmErqaXF21TVd6GP2WgKajxqh",
  "key36": "2AYwExFexTMjbPgG9dsAjbnWHd9yAJKxqY2LGdRK1y5vC4eW54SH5bMHSxkg5FA4pUCc7PrmehTYmEr9ZA58gRm2",
  "key37": "YA3YN7nwoEdwAsKPQJoiHLTy9jyLEF4t9KEp5LgTLsYwpddpx5Pn7Bb7UtoTKCk1XRwKj4g6uGZLK632cF4UtRW",
  "key38": "3vctPhAEWpiH2Q1cYhhP9BJB3rLPhhaV3W4AytMqJmKFREJVZ9LBWQUZDJH7CkXzw8LJGK8ipGrkvtEvF5FPW35p",
  "key39": "2BEFKTkGMeSeNdNvn9ZnKf6NPRStjwAVGg4SixXmK9PsnBjBKakvfTrK6JZQ8kCnFJBsxpm8rkAAnQKL791QcPGj",
  "key40": "3W752MnmU5H6p7UotfMRPFogyarUf4GzjSiDqK6agFqdzouRJocQTxsrLuqwnKNWhZWCXcpDuKsxRnFN7sxUWrbY",
  "key41": "hTUUrMe4VF3FEzVzG4XYpGakqgMzNm47C87DZ2rqtodD733YUXaMNtwQ3mbkZw9gQnvs67cw2Eg2LRAJoFs2jEc",
  "key42": "5nXvhqac1eKunBFXvs3Sdbh2aJMXyyEh1AFcZgDm464a3tgEA6f1yZdz5hCbfyF5rbdZAFMawn4sMM7QUqvExuTm",
  "key43": "2khoq2HYfooXmefrCbuHtuUXHxCV7txB4RmbWtcT4emUkFRrffNFVmgKWcDRCzRfzbAadwrodYzdx34sdQd8Yoto",
  "key44": "5p13NRUXsQBydkxQ2HbRmubmvYvv31crj9whGwjYnAH6eWWFSW6ekGZotwDAdeVgChGSXT7yfnWo9BCnK4BcRS4W"
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
