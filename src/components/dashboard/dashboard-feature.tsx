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
    "5Jshfb7k2sZpYfTrzwqUhAt6z5iRhPw5LyGb1GC1ap69wHpcrBpSPnP6BxzXBpBPXWZH9XRswZDtPBLocuk9a2Jt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fjQiRSn1dQyoV4WVZt9tcqW3C6N7SfGSy9TEy5rYrSsV7osAhLVHsqeAF1JZaPaHoM4EiTcbbPanD7b4oreftLV",
  "key1": "3Yn9gHvGd3HGrA5Jdj99KhPYqnEUwvxcneD1L3jHq8HBiQQ6p1bo7Fd3us19h6eo4cH1hTgHaUeiSBXJgqrF1apL",
  "key2": "4jvwo11uncbbDgtse24WGpFwdiebrPnHpy266q1qzumo3TeYBzdTpGgPvBqSAahS36MBVxcDfoqmi5wKMUCx41B2",
  "key3": "4SQGcue9aQMGtpuED9YajSmndPv5KAzoB79vJSLkdwy8EaLTTG9bxeuFAybxUwicRf4YjnS5xDxen71VB6v46CNd",
  "key4": "x9LdNJHc4nVuhvoCXjanxHsdajMBrP5XMmALqs8VR6gMYERqQh2j9QAtyNRmESHQpcfcjWeTRA9M4awo2gEP3sM",
  "key5": "4ieMrF5ySwWDkC94kvzPwqx8DAncDxJtFywgrPDJnExiYw7T7igFrgwtgPhCfKBvBxkQRtaQgotYsETgEJZHN5Pa",
  "key6": "67qf9Jy89E6JRyXG6Wjpn3ZBc94kLfMjW4H8fmUxPowBHs1vLxH5WtPx7e3YDtepf13UUqjP15JUEBRokwifK4ok",
  "key7": "4ovynnCq31kDWpmXC3bd5t3VqC776DzdXSAq1eGLskvyPJGvQE1fLYhGmsWXDmrZyV2QUWDnXbmgxXzWkYB2tHoT",
  "key8": "5NgcRQrHExYixxyhK4wPewG4ZMVowNK4TKDvJMFegaiGLZbBDKNR5jhKjqASqWFCF1hFG7G2Cos6hwZoXadPqB3B",
  "key9": "4sFZLGtNkkn8KvVj8MRh39CtULfM8WswNfnkXu3XfYVWZM2VXzQEdqY9HsvqRu77gYoq4GUkoDpyv9oVycN1vF1N",
  "key10": "59GnZ3veeUYJULncjkvt39J6ScDQBSe6p9bSEmrZtuv8Y9qDBb2MH7wQxqxWg3CDSguXGbRkbokH2hS1HZFfBoCL",
  "key11": "48iaZrBmdjXnK1za77THP2tdMmtJvWUvj4h1RfEwgqd7ABbTdJfUzDmjivnpSo1j615hmGVpcuz2iJuoz2FQnVRv",
  "key12": "GMHmeCWJDmbdb2Nh95vcjm9uxs7YzcfSonqbsXJmsPKn8TPf8JXK51XtEf4Z7pRgB7awJ48E7QgrN23B9Nvq4j4",
  "key13": "432acmCiLy3dCJx828RF1AFkjb3NnDB3z2uyjMDLijvbwwgMB7Hp6KdZZ5fgG8b2dhKFBJuSxaT8Dpec8LCzXRt2",
  "key14": "5XnDcf5yFddf29UxNsoj1FbvrpBFWfjCEc6dXLCt7oiR4M8CzCcheXkdjRWDj2qhi3BKTZFY4DN4iKuhBQhLXVGJ",
  "key15": "2ggmPG2gvs6Jdp1m9oe1E8pC2ieZL81Dt4LyMaXTejJCWbPZ3kUEsKWwZXxbarbPitHvsyU8SmfewPPYT8x6E6GD",
  "key16": "3wEmuasMSa3ahVugscCBaGqjFQ1FpMCs2mhfFY3qJkSMPAJRXNeo64nT3b6pFnfGkW2mFv7ZKJZavi6j7xphhAip",
  "key17": "4ZPZyUyDQpkjs7uiwFERuAySGHEShy8FrDhxeumrXTj4QTBEYbiSzmvxHixnBjoXr9gqnXxjApp4fNk5CuFAq665",
  "key18": "2r4mEuQNGFSMbMDtHGuimzDedFyZtj1pd7xfN4G7Q1pBmuhERFo9edxfbP4iF9BhnmekLLZLCxN2pbA5R9sZq71f",
  "key19": "3N96N5XCdFJhe4iHhAXv5acALxLat6sAPNm9anaHkPHDMLFxUSLkW4FYS9bM4a78yXEn1kYqqSvbPNkBfERadQfD",
  "key20": "41JEcibKxoHCi2pnxMo8L5SaJViU5xfRZuDmiXD51g8wvyVABtKaqj2ggq9aA1cYgiGyNeSwDncfNrnuyfLNt9js",
  "key21": "5A4bnhTDaaJYTAHccyzDPMnszZ6NM4B39pMEv3eVpNYsX4se4iwZZjAVNKaPYi6akX7PjA6cm1KSoGWYfY1HjNuh",
  "key22": "5qWe5eJxTUxYH14XSSS3coM8gnDP4jihB2ifEEv9Up1J1mytuNWQ7HzerW1QKU64Z2visxt5nDU2vMdcg18Ppcoq",
  "key23": "41rN8ZRSAE7k3irMUB8x9P5CnrDuCrPrKE34CQEpyLczPKGdPZDyukAUWL4PsU7v74MBe8HTNpzGfL3MqYWd9EJC",
  "key24": "HLTbDzc3omXtKFPS54JeohEq7GMTXqPx95sETSamTEmTUct49AsfbzsMGjr8DnN8N9FxtZWVSGwbQ24BXQ4V8UG",
  "key25": "3cWXMQH37mLnq1NVqcsds1KUknadd27Gk11rF1HdaUEf9g7pVuZxcSEbM8bKxnwt9jpYd5AL8qBopeJVdx7SH8R4",
  "key26": "51ZvpcguekgpafyMWHZcfB5SMNpt3qNb9KfggpRSTZcMVBV5GaHMhy6KwweZqoPTxFUV48W4NeQCVtbeFw8qLSxJ",
  "key27": "4SQAhyc3QRddczf2kpK4Z5Z58TwVbKZPTxGVYL7mQCymT9ipXQsWwPQ6e4ntjftCkFsrpiiWzdJ3CxxNua7Pwitn",
  "key28": "2us9p8UuMtWY3xAewDWxfCsgFeumJ5aJvPMsj15iZ81gpk62j4wjhMVWnmbanGBdo2zQeVBMFZ89bURMHxhvQ5nS",
  "key29": "2SkgLLUSeuAfpuMgm9pAXVHLeJbvHLN9KXDcrpP7h8iTwZdXJpeXYedoqP17qs58dGsxLjVvX8KGNQyeSA9V7Qsa",
  "key30": "3cJacE7pTDnTfC6qoKE2CwBpvV37DCS4MR5Jx6eVB2xYM1RNVHokpms9SXHX1ijEnc5zQ6TVQvwb2jLPqrREfV8X",
  "key31": "WfLMktjijDMADzKNBau3Txk3y91zzf2BUwupsDgS27sW9pHWmsXeTPEkxHnUA7Z7istASK8CiKzCKnHStDpoUTU",
  "key32": "49mUoGTG5GsgPHWoTvoeRGLd6Mq4CnggSEETQ4ULD1mG8K6zZj2oMJVWQP8rrspyFGEjLj6axuEBrCZBvS4WFBVm",
  "key33": "4WH8MMH2gsgdwLeeWnhUfusFDF1smUEpXKafvsvzSv3Uyn8UXCp5Sv42kcSLtL4viUXS6ZoGPAen2MHGZk3riSMm",
  "key34": "5gqrcoZ39NGpevW5vgG8sL3fguvMViuTZCzJatPMMGQj9W8hbFWyb6v86VKdYFdWqAV8w2GSE4epDmfKFNEcTcF9",
  "key35": "3jPa6kpLjAy7ARfyHAyhG7YJMGYEDHqLSLLzoTMF4bR4rgKjijr5W7rLqb1Bs4yhVSbHnGeZBwUDZNkQgb5viQG1",
  "key36": "4q2KBAPE3NHEocxikgN1WD4FUkoBbsWPaitXBdHWg9FMtrxaj1LDvsdJr3B1EMYeEHhynUo1ejdnQYLCMMwpK8Z7",
  "key37": "3dzPneuwn9FeBh3JQCCEtpv6x8o4VutKxxtqg7N9Z4kmEg794J9ufc3gwFskp3Q9YuTFxYiW3G89eUaMNV48T9Pu",
  "key38": "532GgvX9pdLySJJq8o6zdeigVmNLCXd8HmnXgQe8FKXyZCCnmZW5Qhgt2p7kDwpr5PEZxcL15vgSSQLXfhs4timf",
  "key39": "31MRERxuYhLDMH44RsPeeGN3oQ3WwALzGXdaks3yjMqmHV3EA7DfM5qCoDeY6bNc1uS1M2sjXzvVH5BaR8NPDrt5"
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
