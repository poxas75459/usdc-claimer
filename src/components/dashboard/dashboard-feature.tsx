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
    "qLjeN5nCEC7wfaH16mmVuyDwe4GKkfe68gnYs7NUmwKtXZnd45qmmRMe6gF4iKAjPBSJ9GJc7T3dUMtbk1Wsc2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Eord9vrU6551BCAso2ptWepg6GCX1PGtJi9SpSED2E1ygVGHrYCoZQM9rnXENsFUrAFS1GLc6Q6NpACNwi8hxh5",
  "key1": "1teRPYXnSLP12sn44tQp7jY4zcKLdTWUYKpdtAemAWL6Qzx1WV53fKgGHLx6Adqt87C9f8LE446EAqLscDKtuor",
  "key2": "4b5GcnFv3pcLhDYhUtPkXxFzZNeQj3PAANUN5js69nv5ge33xBuUasybFydjmxvbSKkmPcEgBy5WrvqJ2KcoFqxB",
  "key3": "3zQfy4ZrHjPZWPUe5VLcrpjUnT41HLTPjHKEMiTwnmCKhRkii5TQeA14ULswqyT4brJXFx21uAXFemhec7aoLf7p",
  "key4": "58RayZ73zEp9vQBeY4XBdT1M3XYNAkuUKsev4n4pD1Ayo2QMcs1J6QAyQtbWWvtQia77ps4Bzkz348ZLiuDS7Fps",
  "key5": "EXSWserbH792tb3zcjTMWJXCzw13h7KoGYah2zE3Raeoia2VWmZBrRSDRm5ZUQW2DjVEaabU5aHc2GferM2uHtt",
  "key6": "547esQKmMdKqcW7stHwWhzXZybuz9Bkj4gCjTwVTqt1BzJg9NLXML84Ad8C3UswsvnyHhzZxREEbS2GkWBFshToZ",
  "key7": "2oq94ciUt5LqoDY9rbLVBNuCkPV9XNXUv9BV8vJEn8hArB4CWXEGbVZBp2pb9pRMepXfrmKhPU2xzvbjCn3cQjYC",
  "key8": "prLZjWFr2do2sQ2MRKjgw8BiyYA17gMsEjhi9hfm8z3WhEb4BWyiRoLffzb6gpZE5SvgArBnnp7vkpnC3mNQyiT",
  "key9": "4gBvY9BeMCCKWYxW1VQaFc1UYiya9Rs7M6co1DZef6dMGAUexuZTDcp5y5e1xPwdxghXucz9mM38hMqrNS5qve17",
  "key10": "5tYEuJeu9vofmFd7ThDyVJ2gnYvC12MEYzCYa1GTGYLoDnkSUGg8FkwJGyBNMJyXtx7Mevo2keazXNBUgCkrjW7F",
  "key11": "3cCvWLUfQGWmCRV3mGwz7ucvqDBWZ3gSCj1U5pyFJZhuUZEFZ2UicL3zn5xpyx4bVtc8hMkX8arDnG3hAaiZQ4zR",
  "key12": "3f5zbyuEGh1mAo1AN81tJctQLNQhF5LmztVmW6zrbUCoqkNphq8LmAqLZV9XzmABqh2BdseoaFAWwpmpHPVbCuhT",
  "key13": "2hJ2oeLuKQJZrZM4EN2LwyxSEDJx8DRQtMC5AZPWfFwsKHj3HFFkgJcvYGz3opf575XXMVDBib5ubsvVSqM2eFKW",
  "key14": "4N6nkbMgmovQuAJDfoZ7oNWrkQ16tH9tQHZhfPyvEHi1M6mN3TmVtVMemp3JSuRiBurz7dCF6WVr4GCsY3QMPEES",
  "key15": "4v1VzmXNBxs9D8Qn6XoiAMFm7Mi6LmdyfQh28JsxRPmtNK1W9yGzYWsTYQ28PFLG1qwqLi1YNF8QzVXvqEUQV4qd",
  "key16": "2tnsU398jEGk6xbHAqDQtiHnEYc9Vn49grQXWffKqgQBrjyk2aTz3TdWQ3ACddEMRp2SZq9LHVVyYPsi6g7663aD",
  "key17": "5z9HFWN5wDiG73fuzwq5ozhD57Pyri9snC38njtQR4SMFRsJkRj7GB83yJPht3W34WVbFqSiwkrFXAGLzJrcjXip",
  "key18": "4R5yar9V3ZcDPrChLUhRTj4rcS39EsjdJRFJPEa75TNwPCcvEERn8DxHPNt8kQt7JR1X2KTx4Y8yKy74QFmDrorU",
  "key19": "4ZkLn9Yw1c7jE3fNr3Pt15RL9PVBbhaKxMmueaunXtWPx1QRfsxgevRgavx9GgTcPMSwpCuzTL7BDt7mRLX4BS2Y",
  "key20": "2vtkHUpoFiTGwzicoyHXjSd5WnvqfGgqieP2ZcUyAzgrkStciuLyLCLxur2w677Pb48TMMUFQCXTzRfDbs72X61H",
  "key21": "4MwBiycUAkmhvcTR8Vzu6StLDCz6ZRSAvgdJYrEEHGeqHhR9gKRULxoCciQQoPJddZtLMrbCXg8WmcF6aMKFg7zy",
  "key22": "22TaCv1PzMFqRkGkDnDZF97E2BtqDvNcDFNNhZHhBorgJivQW882GDPB1pwn65sKTMENtbEHdRcDqUR9DBdGAnQp",
  "key23": "5trG58XK42bYYtFD1RNb1sxduAfNUA3pn2hfs1tQaFQ9c6KY9fE7eQDKQvASr9dqPaogo2c4Mb7KSvcHG6TNEcT8",
  "key24": "3PQYCVppZngKumvnNtHMH2SFrf7K6Q64bWkEp3JVqdb7KZ3WGUgS9CxijCCbeYBtSrYyKDykfmJVs9EfsTyPQ997",
  "key25": "4RogLwDkAq2oNfHqRcXqW7F4NJQvnx8n1y2BNoGA6n35jtfGQ6wCXof8yfT1TKJjPTTniHKGb5aKnBuQkwZ1dMVM",
  "key26": "5qwP3Wp1TYhGmQY2SuPdyEx9F2rS1RUsxYY9WPTpn9CHSoyzTQjLpmvHo651F7RUS8tQRP7U6YZ6FBhDtQAwYtMk",
  "key27": "rG3oaYSCAU1HQUUgsZRj4EFyBuUySpqK2LHB2otHRhc94ytGAdV7af2pALVcp4bZ5zSEvc19Ap9Hm2yb66Pt37F",
  "key28": "4QVSgiHhUQmJ4oMETZc6tzqT262TDvj4QrvU8eQ4P7WWVLibrovU8y2aunCkbngoRLtZWS7vhvfVWNY6jsrk9Ema",
  "key29": "4gf46T7xBRyjcUuuQC345BNZhdHaDxXFknPD3bGqqsV1WyMyqCQBxESFMtephfwBuTD6Ha4GLMBd99mvpEMyRKVd",
  "key30": "LA84qaz1976JpAvQixNvSy3NtXPifCi11KLVArdMeAoNFyR2fafrz9RSpZ9sh3hXdWiVuo8fJf4MrYKdcmqQgX2",
  "key31": "PuXZXq44pzCiMJMQwtVads7jhvdk7vu9QWXqxLZ29GdsVaENJNujFDXKZypwbwHRm1N2PZezehJiJoYtRsWebig"
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
