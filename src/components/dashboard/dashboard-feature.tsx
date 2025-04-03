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
    "296AVamH7Ltr3eVwnetJeaQJtrDaTtLCceca8jqf5FeeLUfKxWpG1WsWsDsYc3dRGYCiaH2nkxVh86rKZ74SbY4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55nGG49vLhXv1d7AtMouzYRuw3jLSqTXkhS4KzgVysNuXqUJJxNdRjm6BGiqNvtFMcFppCNxPxi4Nv3CU5V7oQGr",
  "key1": "4hZFrfrDGUNF4apVTK1q73U8U5iPR1PG9dv9E8ii8fmGvneerWitUcc4xidmPeWybof1z5qwBaHRGxAxWTZkDYQv",
  "key2": "7gscP157GmdLQCxsDQm6xQsW5WoRbUi68iBTCvZPdfDTgfcRJJBbcWst1P4AMLwY2vRjrmizrhT7UPhYa7749dP",
  "key3": "4XuigKtyYrTGsvLK6JiTctTznGU9CZ3yvmQLGcZBijyGaTzKF8nceCasEHbyTdogNt7m9jSP5SNtm5YAY2pdWieD",
  "key4": "4yfENh2itZu8jRyZJMPZczVC31k6WE1YpEkENfLBtrVqPpTQVjENkidELUzoED5JteoLFjFQHGzN5Sdoaeem327L",
  "key5": "3chjmmnWMxP6Su2gXMEGh4RveN5PSZMMB7SzoxGyPNo38XanfvT5KF3DYccZ3miL7ZyThEwk58RCnobd7Ho1EHCb",
  "key6": "4wwAXPKBZ9CmweMwBE3M7o31R2iSTQXg14sxgBLHHTtRGSVspdW3ACnjsECiKhg1WGArNqjXcB9njFVok6Wjdidg",
  "key7": "dEVoAr7ujDscR9i6XjqUYL74nUUBkSsyc6WtLsA4knUMVThoLWZ1ejhjdhgFnq2GYMVXqVHXcQUiVV4vjyj4FsR",
  "key8": "4hevxRdhCGG1xynZpBkZrJf2amHsaXnuWdaUKLnrissgWDLoC1jivjbBvhedWYtoi7ZrLivSSS3QEzuBnuBd9Le6",
  "key9": "3hMjrMDNB84t6feTwAjt7vx5SZCdxbArgfHd5LSp41GGndoXbkb1xPbeNGM4GthuQPdU5AKH2moSiuQKPqibMyzN",
  "key10": "5bNhjY5C8nH1hvMMCCGjMjMfox7pN4zgLh4jPJfmuZhkstPK9nUFmsjfNE7WYgKWinUd3jn14NjSHTFdu2sLJRor",
  "key11": "2c2i1LMHJktiaowXF5wiLz5PBj3w89Gs5dsJwq2y8pYKz2fknv33fUBHtCv2NPTmfAFU3uCKzMxyPXyefvSRwHRk",
  "key12": "dD3f7fVQZcRnr8N6cRPvN1zsRyaGstk9SWUR9UueA8UoVwyWawQCdUVPCPSiw55CQuo8URYyr9A5WPBhNGG4Cvy",
  "key13": "3hMAVMWDXBtnrSTmS5skGisDxZSWPEg6ccKMpxLexf9TmwhQpGpjkWtd3cUC8WZpcEEkkTfdBbL9SXEizkpXDwzi",
  "key14": "53n9cWB77UYJR8J4CUfAWfBkhDRCDt9HpXdmCeb3nTau7RejChwHYhZSof4CfteDhzJzu3TrTb6daDZZKzZqY8HL",
  "key15": "543T7PztvqovHhCtS7JtRAZbMJbFfotamXPRaF2yFmLFcrnLsz83Rq7nxPJFP6BWNjjeVvWnx1UsWHqiNGoe8U57",
  "key16": "3ufxRG6CrgPmNiUW5w8tVR5ZJfpfyNbYcBA79y5LYWxrBHx6nFBQpqxM8bsUdjdfmMXX9KtxAxaSWF2q6qvbRWs1",
  "key17": "4Rj5uM39vNGAzy4UCaEfuu6rS9wUSSimTi3Z1VDafPBeRPWDfjuPokDkbRjTNixiKVfN7o9HigzqJ3D28RFjoKhE",
  "key18": "5uY83xjAvSnNDSGZTiiPDQmYv1gyXmUWYrbDtPdi4SRWZMMrf5ExB2WJGU3Dm2rKSuYkuwcbjCJweY6MitTXhDnE",
  "key19": "51qaCyxnwnauUox6zpLyQA7msJVbi8VxQzyaqhW5SoMSVkGTPoY2m6r4KQtFNZMDEFYAdsSESAWpTF8eCGxCrRnh",
  "key20": "29yJvfH6vsoibW7D8dVZmFoVUypZYZp8pXfCuc4eZLMTN5wnzd5uzTSrjfpx7hEBW7s2V4eNeCuCkND794PHq1ri",
  "key21": "4vHzxqF7nJahNxMvaHuuPkQvkH2pkEcTKAyZ35VtnKcoXE44wybkBwCfHdGSAg6kcAWgGVs8tPc8ukLTrUVCcKmK",
  "key22": "2hcTP8vRirtxQr7osHiPWjaWuxpuobNhf5uZtojbHS17xRMqLYbAoSGyG8Ybp279JonNFnR6p1ZcgdACBLkTmqju",
  "key23": "4wdDD6TrXXxB5r6FPSEAZXPCmXxRhDyaDEpktsvkMv9L9MGMGPB4NtXt1pEHiZnxGfyeyei9LP8jzyyyQUeoLUMa",
  "key24": "5AkNzAjL3WyNHQcfEmYj12cXL4na7VQeSiBTaZecaJsC2MsnT2sDthEEuYYqBEM26nUxvVHHPtuBLGHA85o7S7nq",
  "key25": "5d8eQfjTAGcCQSWAPMcXcitUF5Emrbq7YLVCjf8hVievkvihy2T4VUETcJ4iZRcgAjazzEWAs5p2HkQJNEbu9Kcv",
  "key26": "5HarqtV9K8nLJteTLpDmU3eLG22N4ULraJbHywPaxphm4o9mRJUy41wGW9KAeDQ5ersoSywyEYw7KduUxpqyGhjS",
  "key27": "37mgWXB1Q2iLjdoG1eaEM2hGyoPsKoUc5mQNFyTJTosMvUn9BvUeEbbYwcrcZ8TQgjWuu2yXCu5ztNde99AFHn8V",
  "key28": "5fWohavphwaXzxa8jtSVUTJoxvP1pSWRZKDxJDmkiQ3HvdTjEt6yzpB4KM7P29XUZx1Dc7D3miwGihUvBa98SZsk",
  "key29": "2axcUs5LE1tSzAHkkxPRGJhjP2zXgZXL3XR5bzkeKKfK1GVWGaAbpW47aCA6duyxvheJrsLobkzugixdkNv233xy",
  "key30": "cHEKPADsJozHPJpeyG3FHSTyXLKLzopzZCLwBWJCNza8CnUHSc9VcUZfUo4hEKc7ksWtPyr3SjLGSQDAmnhj5yQ",
  "key31": "2RhXPF8Y1vCaQnkM1Wf49oCaudFisAH6WZgy1W2szrBvtcpdeJWixTLXpqLRE3gcE9TuepWPpJL58nku4YYeEWA"
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
