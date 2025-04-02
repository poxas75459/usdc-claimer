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
    "5eoTopm2xthpFrMGNGm2ECkjKsZaoQAJNoDTfJWQFmqGksfE6k8P8e96ButpfG2w12XwBC7svVjPudaDyrRjtYoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46JE1WPZSBXqPJTdUZudCZwFVwbv3Zhk8WND21JUbNBzXqxigDJajY3zYife6heYZaesHW3LnQdGcVnHVEHZzvc4",
  "key1": "3RHX7ABnwkantGd2LcuKFCx2tTJcAjmYpiBF7Kr3hJYD7gS5cVSEerG8yg6zQ1RSjv5Acaau7qUzYSKDKRv5Gy1p",
  "key2": "47KN3q8YtYLyZx4j3QTPx5AEtk4hEBRjvbjJ6jLqvcG1Am573UnXu8EccgVoPqQi6AtVb3GMM6QH1ACSh8mXBE1x",
  "key3": "PejmoetSiQ7NP4wjQsC35Ddk4CavxaEWbP6pGM8yA3bBA6FFVQerewa9fZay4WSX3P8WbcEoa2wwoLqK36JtN9n",
  "key4": "4cCoLXsQhEpuAuZgmXjHG3w1XZKTAXHov8YepVmBRcyAJwYaTwZk8VCXThBn931RJpa7Dmg9yuzyiDxq5qnbHy72",
  "key5": "4NKZqDKTmCXCU8kAExL72ogooB1iwcKMdvAvcwyUmTF1gKfJLPn4mGpbecYzhZyp5kbdtto4oJeLqzAXcGNXJeBz",
  "key6": "4wJFG1HwDr36NBXEuTsB1pGYpZde8AjtDfx8kztSmRFwrxx85inJBYgiZ5V7NH6tZYtUi1bcWNPLc8f3tbs33UhB",
  "key7": "2gPmabZ5LQM9rdirp6wH2kdqNj5Fj9FiBZjHfdMgZZdShJ2pwE5TpHMLp4PX94JGf1DbvHGCLKhprg4kD17nSzmj",
  "key8": "hniimctQZh8G8ys3VwB6SVrsHnsq6X82iK18WFavr3TkKQAnZ8kFyDo3ZjVFhPBH74ibwfBKgg4m42DuEqkVEmu",
  "key9": "2yVF5j8TY516eYPjvBNyXwo6ZR84Tu89TmK4qbwQF1xodj6B2w3CihQRTs9Dg29uE312y1jixEtPSb17RLtP72Ke",
  "key10": "5NAqj43BwUSNrzPTVsriCwQCHwzmrL7XoBRaDK7FNEUAaJrN89LsttDtFSZuDL31YMyv7A5QhKa1ZotshH8NMGdF",
  "key11": "5n5c3rVGgdAPEWJggPnoztSdjn6JytwDGaXWztehbpy2EzTZYmakkjTGsQVWPS41A9fgjAxtzeSfm2orsRvYFVxR",
  "key12": "33GJWND9RxjQTQHihsgJRKfEWKEjB1q5UqqWzFqNK81beNJpGhuaZkY2Fyy4rDvwLGYpLruTYA3m51vdA9Jp1x32",
  "key13": "4gU93yFLP9PhGVLLX5y9QbQguQJg4b7MZchnSs9c8P4cuEqGTEuiRcHm9S2vxWwV9wvJsHRYkHwMFwkcLET7ZCqM",
  "key14": "3zHo6zJdd18ha2HoZ2gvJ1oJra5xtp2sW527sxbmm4Q39PgFLKyfJ2TDRxp6stWLT4R9GX1si921iGvPXBmebhND",
  "key15": "2r1DZJxY3kGhcmQLNw3Y6HFB3zTtuPwuvB72m74ha8yVXujGCzmF5KWp9vqurz6Y2vgkYUQhhz5a48WeUmM9dSgA",
  "key16": "34pwrirpSnyFv5fd2JSDdwRQux6ZgggHhGqWWevMo4jeJ7DjfbHovqtvQUepgVUTqMCeZP8FvsT2AeEzUfeQivKS",
  "key17": "5bjhPNJkkaLNgEMAm6FR628EiVTCeTM1PzBnQr2RSHbGqSugBJHk6ygcJc3DZ61NuctM19m8RoVp9pamYV37ERMY",
  "key18": "qDeGsun19JKPXeLjSHE3LPX5kyn1C5VzWwkiMGHf4NM7oRZbBLxUABqEsRyuCgbAD3cmsdsjZxuiSzYHVqWstQY",
  "key19": "cMo3DSYZusr5tKDpeQnuoFXpREysL68dUsMKqdBNdinsxbT1YbxDC9j4cVhFJfoA67ntCtRPfGnbyzNhQUWPHQQ",
  "key20": "4S3DgFspfbTpXuLF7QvMFGa8YXr6ZNLM9bFa3PGgmFWFhchgDsaGBPZKsMvQ4ZHNUxvKeWedPSAoWbg2vKcMHWFi",
  "key21": "3bnoEauscd5MajjYXoxKxsuecuQEVLrjFBQo1upHeHcMtmBVo2uHySM3dXQLBSdb89cfVAe3D2qiBnWaJKvJnsWz",
  "key22": "2dM5hZ6xwvmnxm7Yb4ujsi3rqu2TM3qK6h6p26trjBeRe9V7UpqKyopJfdXq5aoS1GKHTjPwywE5gtiE4rXckJmb",
  "key23": "dhXczqWBvFsbg8sTgzjWDytRq4tcf86VMKzjYDWUGRy79AoDoXr5EqAuJ5ZRfZfe7Akitp4zWa1jnQmtrwkFity",
  "key24": "3yUkK3RHv4HmfD39HFEdC9Q5YzjGmpVsksqx4F16M4QvSd3Y6YPF8KnAvmhUFXUyXd71PJ2SHRLt1hvkAosuPmEY",
  "key25": "5bzBQdkwCvmJ2xs83o8nctddvtv96t8bUH9W8kchUqc5YvX2xs9CSah5xTXJVHdxaVyUhemkeV1tmKbnVvuBF52q",
  "key26": "4wLMjWaCDsbMZhRShyKvNVdEvtB1jb9vEDa9dWNa7U7qNzcA8pkkNMivbGKV8ds3PMmyRRV8vPHTozxAAQZDxDVh",
  "key27": "2Wp14DLSDjfiEnwdjDSNv7HzT6KcxyDWdZ3Z9nqx6FqCxy3i1bknaPN5tBReKu8ic5QJ9KQkLe2P4gM7zqjKC129",
  "key28": "2TN7onK6dNCWeFUVG8of1XUNhRkYewqMnX3GYHwCcRdbu7xdTAsT1srXRwiusXZ3LAGNeubzts1GfhxyDZT7J7Lx",
  "key29": "5u4tNtxPUNv7nozs2rWH63Z5FTrMN6c8tb5YozUrk2ZJLdBteykw8JSA6srqbZ6ZkLTYfiPVZZFLjpXU9oMH9LLP",
  "key30": "kCnGMcEKL8HGcZDi8FCASN2ZrPnVvLTmHmCqe2DnwqAFVsYZfPUzhUBXghj9zR44iJHfBjf6NGGRGYLAMqZ95nw",
  "key31": "C4VM7V136vPaXmsGvNuu8PNLzpC2J2Ro3xjaCmRJmVJbBJzNQnWo4PKeSUCTtEwbhDUJLBKGnc2zyZ6ZhG6hSnJ",
  "key32": "3D1M2PBtiof23hV4nW8FY4THoRYCFPDGyosgzHy17VWiXEbSiXPZfbeJbJgPegzfRg3g2jCABFvVbHNU1RauAfzt",
  "key33": "4geYTPRxV6CQyPGGyZz6syE7PEN1bMpU2DT4iiyH1EJQQdQD1PB3U5UbwHywRtFkCB23A6LMyrib3j1w87KocGGE",
  "key34": "8sTzhP33dqwo1Gbj1guVVbofiPfDEqZeXm4t8bz6vs1e1SU5BhsD43paBnZvkM3qVnLKz4L2TNQRMVXByQkSTnQ",
  "key35": "15TtZoCgGuYT6D11emV8L4bPnzB6WKE6KNR2tHC19GcNDRhNvNvpzKvC9hao8AQdXqbJBwucrgEnjPVFajQ4b9j",
  "key36": "ks3UeFdFoDCYtHeiDUnAtYqbbAcAZUbUWg5qf8qFPDgkuDjYtnt5e1AApPBxUV4oSTnZr7vuLFym5pjvoqEzDV3",
  "key37": "66hrd9FvBAAQLpkpFiNzTrFC57fKz4KvxyUkBZzwKE2F2cT9m1LboAusvFMJAHhBmftxZ2dqtSZME2pnNzcBSSoK",
  "key38": "3grHom1R3nmwMTa6yKuaTBzisaaHyUPBxfiJ5uyU37LCopSqubY7wXnJxQgxqBFkePfWEWExT5mrvYMsWn8AiPFm",
  "key39": "n1XHJyoQAYXvbx2zLZNfCpnpsBd9JvhfLbLwyDCnkPKM5o6cr4zbhg2PNx8JqMvf4vWy66YrFGr6iyNeL9GwB3A"
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
