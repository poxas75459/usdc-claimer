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
    "3gNHUHbgT4qDHX82zZ4E2t8hHgrkD7FyHryFfks5gneWuEH65Df2SwoctPxdMryCSWZTQU3AeNzw6MZ43UkmPWbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kQnGt7EjfPhwXpsscVZCao2xZJvH31L4wpikiEFyJ8rrSNu3z4cdYQtBMzMBbuQsSFUudjjoHve5s7wkzVv8hy4",
  "key1": "mLgzcdp5rBjGrPe4LYRfKGSGvCyJWwzMtyFvK1avSTbyTVqwzpy6eRU5zf2aUmd1fCbySPcYutTva2zzTJZ2JKi",
  "key2": "9odpJFTahoTmyv49cL1GJqMTkfSWf5UCYrnmRB1PoXtr8PwLWbi26YLcSkT2iHasjLmtW2MiYCnV33N7GiNT7qj",
  "key3": "4FcZenGWuxXicGccNYLWurQAf7UdRtS6wTmT555k5ykg7iuUU46aDS66aGLdSx44SKLQXow8pyimiAsnzrLcwk2M",
  "key4": "5yTtjXQePYpBMCSTxYtG8uAGoikcx6Q5uTf554nu2yMJLfZQ2D3tPwsNuX2WeLhpwZdiniGEpS4XDBoKoegUkPKB",
  "key5": "o7NNRx84BZ2QuwVDYpg72xNKMoSLK1831ck6c81Ra5cEfjdESQPCh8NKC2eaRbN55RtdTbFBBsTxRuffxuxE6Lt",
  "key6": "4Lad51uLAjnk3HeFajU4dwEA46RtxgkYF3XD5SLctiUY1bVo8cGA6udW2BihLqYfLfuX7FrtkXWiiHxwZM7HN2iY",
  "key7": "2owEd1pxai4g9XH9CvcZocoNZu4K5utSEq1b7wDbzBbyxKdhat5TS3QJNaBS5mZsdv4p1aAMmDP8CxDeeEwXTog3",
  "key8": "gNoP5xTanaHVHFgGQnmAF9Ei17jgPiNnPZT2PWAeXQizp6fER7KARrudy5gdry2gJiHY4gnv56sBg5LY7m5y8aV",
  "key9": "3sNzTXTRYZdftwjTsd1V8jaVCDfbDbfmk4ywax1DcWVg76N2r6aVeyETR6eE139QW5iBy2ESHVSrz3odCP7T6Tr8",
  "key10": "46epct4VTSiXkESoK9m9oh11bEeqsxKKQ9bVKxuVD78f8ezmj7qiF2EK2gGFJTco33gRVbBUqAUNJeMP9pBvgKJs",
  "key11": "mRvw94EubwHJupK5ivbXo3CfBmtiD37muYP62iurBHWgkWjG8FoNpnLJ5mMrpUX3hDc3oAxss4ijEiRg8ncwqM1",
  "key12": "21h7tvcMv5RiYWNmYPUfzqsDwusTZM1RYC1B8a7Wg6Wdqxw3SPYabc2AV8pzk94vbX3cVngoFF9NXugeSaSss2eW",
  "key13": "47WrUAaMNHM7PCQwp1d5owrLXr5e1tJS1LurqdrT2iHRcdsmPX2qsYAtirbP9uyebhGZMxtLVoDo64q852FvE8ha",
  "key14": "32dgRu2chaS58spbhZFk8qEWvLhuniHJkp7om3PTu3imbFq8RJ6KMNYms97WHt8krJDsXzqgoen7oUSgHNyGprEG",
  "key15": "4XVuG69JY1wDyFZfCWcgKhMniTYnDVQRkZpnty62DkCqpRrDKiaS1VhkdG6xTAsWQJKDrDBL9vjpksDmjmGsd2eW",
  "key16": "3ErV31Y6CwLfc5ZRXSe9XtZpwpy3qWv7FZnBu5xMUGsNNZsAFSgDfv51ZmfqDwMWHGyxkCDNAtFzyaPXn2EDKp1z",
  "key17": "43VtT5r5fzyh5V2wjURJV9iHfmooErvd768Ze4h1BvUfypTmoPtNxL4tmHkqkN6G2fGoCEFyjiguT6JS9KDAEmpV",
  "key18": "92yhX8Bbxbp14xBMQxHLbp88pGqpdse6v8vnKEMvtCeKGafjMhCFFG83yLiezUcD9HRrYzBzUdN9D538AUKTXzS",
  "key19": "3FivPWJ2fYxhP9RV6bdZTyisUgz1hmqrcvSUq2mY17fshhAaxSxFPLJr1cKnXjRrHdP9HdBUjDbZRxZkyfX3okdL",
  "key20": "3vxTfxHLGWzKfJm4K4Q9fZeaCx1NobeafsppmSMVXYf5Fjf665CiG6tyGfb3qCMU8HWbhvESpVF9CEhSe8G6yB7S",
  "key21": "4a9gwTzNuTR6BexXM6XoJTWW9WLU9fsMuu5tp8zeMSena2SYb48gnwq4Xg28XCNpVE2Y8H1etvx4D3sBZp5vxNn6",
  "key22": "5Nny9u43mMcdJh7BbqaMrW3HeC8Hz1UxutC8iMZikqUy89QE8NR6h5qaRox52PdJCSqfiCxANiGJuT7QdgWYiQQ3",
  "key23": "4dbZSQtJtS1b5tTGtHD9Ze9hDfTYiFbG8eRsNGQ2r1wxFNY98Hr4RPWhbzBAVDucJpoudNSMRwe8Qzdhrph2wnWA",
  "key24": "4TNPX4WHJwBHqXRXQj6aBZtLrLWcMftB5gZbF7eE52EyTaLxyUqofztfrpYCXH1GCEK6SiXzNv62FtgHY779F6ku",
  "key25": "2265eaRFAraK4zwr8BVHvTKqRwWTdXwCBVqyX8Rs8ebbTo5QRnrq3xHtBJbkQDRgCHpZeMtHBYE8v3hqBWaQLEb5",
  "key26": "64rRvHBXDNHUaSrVEWuXnvTUYTsroDijrxBWKt4tjxSKsuCczxtdcG56CfV9vv62XTr61dt39ydPyGYVNjFQMce6",
  "key27": "p6vmgX3yj8MSbje2wFo7cVPkQWbh8YdbgggbukiWvsUvQS7tjwGih6n9f3rDWb2T1LRtqYAGrMEjgjsjyJ6z4tP",
  "key28": "34KGUhN5GPcuYykGTNPAfMvu2kvA6yYYz2zUSux7qJGXoetukFAyiT91jwt78Gt73QtvmGxn5PMhdpAP5ApPMaFe",
  "key29": "4JU6aDUkQGf6T5FiTcUK7quMiapoCXtKZT88qhzHZ5LMMD1BHXY4PhvLVoBES9YC3D9N6jHuR8YmXBNbBBohB9BM",
  "key30": "4Dfaeo95oVd1mfgTp4G7MqvpbWe2UWTKeGUQKyXv2HmTz75Do6sHbbvacP5Pmhkgw1nW5MgG1ZNWsYSTAxyteU1i",
  "key31": "n8PnjcbxrDV2JMW6biAw1cPeDPVmNFMdHnecztyJmSMnE9ZoGR9YyNyizDZqNeayPxCuFS5VRzkz2onkdbdFM8H",
  "key32": "2GwbLLP6KNxK45UYSkswHHJpn883YVuRYbd6ucoCypZRq3ggXehLcT22XKrDTfxwg9zAEhn1zjvSDBgGmCfmuQHv",
  "key33": "67Z5zHhAyfKimPpUP8QMZdvJ3qg6zr66V6YvfcMAu3xWiLfFxi9THqZ7838GjrFyTev9JNX46LQPg8rgEPzK1JjX",
  "key34": "5JjUkZQrKz4Ncx3q9V23eBmaD6hLfLmVrEsK8beqcHyB6VJN487r3mT9T56JaQWRM7L9fWK1RAxVygfo9eazxohU",
  "key35": "3uiPXatqyUFYaHgVaPsVfUTHeAmPNbLt3ZsiPtUKcsJ8a3c8qSJgKcaLLB71LbH4UfjwWP5WZZzHrW9vdmryqZU3"
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
