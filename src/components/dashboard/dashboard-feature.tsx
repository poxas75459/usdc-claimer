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
    "56W34XMBcB1L1xbGqfHJ2tSvd5fHfh7hRm5fa82Bwctn3PPrUuqMVnsyeqjdZxxsHy45S1zS3eQtXuV2KP49FiTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fNksdESQXK1SSiYNgkWzFLN5DbmnRXxBs1og78WSk7xEPT7PrdQoWiffzkMfkcQXpo1dRxtpPSr2JYfaCoeWHk5",
  "key1": "64i9pqDyTBJK2SuoezJiLhEHCpcLpDEZuduJVwP6ajzpqw6qBcHfnt3u8ZNt1BU46PXsDazJQ7WtnidCjJppj5D4",
  "key2": "5TYBigQp3PPfnuEQ2aXg7vgLQkL8orVU92pLmCstBcEWDM3ZksQHYkzsQbAb9WfxyMyCco3UXcnWK3qwR2fU6sex",
  "key3": "4BVt4j2x96rRk1ctPe1QjzpYo2q36dPbujkDF3xYYn5hwwuZsHwfdYaSmkNe7wdozUyFLfPXEC42smBAsQPW1cbm",
  "key4": "Pa1P3YCvwz53TTkbrnaiZFi24dMxi3Xsg6eCuV2GqHWZmrqWxkMYkhGPBLNPvH7LXayWDm3aXusDzGLKgFygM68",
  "key5": "3iDK3UZVRZwSwFoXQksyqRrzqhhU2VYqkcwWbJ21wJchqKW1NPYBw9tdeogPTNQYXmwQHw8U1GqA8qh8fUXYao7S",
  "key6": "5m51G27pCkvdmtKi2yrPYMdRqw7vaBj13n65H6CiSNbAf2LrkgELgH8uz2CCXRYQssdf5Yn7auxg3GYG2iJ3P2Z7",
  "key7": "2Y2Zwkfyj8qj3w88FAhiyR8RvAbAnG1sLywZGL3nNxRePubkyf2P9u4bf4s4fhTvqvgfVkcKdRNJAmdGHGRkBYxG",
  "key8": "3Q3b2JkKoexNVn2aMmAX1tHvfXS4DtNLpjYjvAb7wwNah18xhADBMJgPiRjbwE6Z83QAnexoozmis5qimSvegj5Y",
  "key9": "2hGGnqsADnJGHssFMLGpQTTBYYTSotCWb3hdCeMEPWFNxdC6uSqb3cPE6qr5UWhJ3dGVT8hoMnGZv8o15yb2LacM",
  "key10": "64tobaG8eyMMSaBkdEKGozGnWcQsuhe8mniW6kNxBsbhYzvUPnXkd4t7TyUMCpPj9UrBH1LfzsrB8oUMgywFNpDn",
  "key11": "3K4TbVwxw2gm7F9xtFpcicf2nH7aZdp12vg3doa4x4VUght2FRiybtXmuctpZbDXADGPPEh5S4ogrKk8TWHj5NM",
  "key12": "2fxFPXB1yjj2DxgxaFujjaoctrxvMVWMWvnv9NTTsUW34YYuuR2v3ZKZxxdVVP9y45tZi24UbNQtvU2cvv7DcCuo",
  "key13": "4cRN7XgQ8Sk5xLnZHNZwN7Des7rKps8mG71wffGrFE55LowKw12pbmY88Yu6c26L9b7saX71gcYqVYrstA5g97tf",
  "key14": "5nrxPXr3yzae6mjFXpqsye9HU8EQQ1FEsUobJPkk3mQaDfbX4bwYNt7ajfsuVtsD8qwsCCcRECLaYiantsRvbWrh",
  "key15": "2Aa9cTTaCj2yfxYuTkQMXHx7Sxbcukm9UBenF1mWZhrLpwGfXSfR9Wx8BQkYG5d7rXm7nhaLQCzGuBo4qyeQA25S",
  "key16": "47KBXSf81sZDtsuat71JfhMijz7JGwJKCCQRSxCAJSZek76MAKfCPPtB4Vs3eH3QN56MBGMKFBLw1bCQYgJ1zYS8",
  "key17": "3xdbG5TVFBiNsqFGsrM1br7gYHMRexptxy6k7vWKBxQiewLLVn8eo9qfwKQuxHxdwC31ihnKcwXyNpbvENLho54D",
  "key18": "2V38oxzdZoNpubMb4Afk9xFzdL8kQiGcZnQtZddPdfM5dMPdhmgc3rw4dBiCtY4spjQJw1eeJnVMbdCmdQKmdiFa",
  "key19": "67Lc1Zjb33b1C2p6QizCoLbEjme9eCNRrvLQXSsWWzcdX4ULukZk7npVRJqpHTNjxrqEDekhUgBuMrZUsZ21uWSB",
  "key20": "cigZ6n1KYw6R3Ydax5DQfZXukVETDsC9HZN52MUrH4KzB7NfLAapywqY6K5Kk6qFSrzQSMjXKfXGwHaujz14Sk3",
  "key21": "4R2c8MP5nYr4BgSgKy8aHpc7cwSYoogLey41TiDt4zDZmHZvAp3RNL6GzgQfpVYi13JhEETCe1bDkF4k54WitoMN",
  "key22": "3t6hMSvTMDAZ1j5QVA5L64ejNQXVEvnNpnKtZR8QSmHnbSvcWj3snc3SkBM9NfLDVwiPj2pHr1RXB436q1kdd11c",
  "key23": "5PM4rNwDM1dm8s2HLfKyfMEqqT3Vjyf83gDUpAvxLfGbHPMDpfYoMRKDuVvrx5Dma9JZZLppqRahi2RMMmugRzNE",
  "key24": "4z4qJx2SEh1xFNxEC3mgP9E174UkxRNXn6PP7KWUAo3Gi5KrVr16ddgT7C4SiCeh2V1YPMjXQsUvHEXwo5cpWT1Z",
  "key25": "5G6ZSFsqRt55UJCCYJ76crNLPhqLxUomGbc1wXRvD4iDSH7bJ5Ja4aBfYSRDSnLLdcPXpA1GPXdyaK5SnBFqFemm",
  "key26": "5xgYENWBLrWXrCcsb5L2xeSW4cjzy3h1vcYPAny6hih2hSeQnNtZQCjdUE5vGgMEN8bZdBBnPqKaU5FKL3L7TYJs",
  "key27": "43kLjC9GxHtUHnJRfRZ4kPmBTbHEvYcngypoPC9YT9GSbLVhLLn5YfuDmBcZHcjb5sRB9EtxACwt4iZSSfqQvTkj",
  "key28": "5ENadLoaohCvChPcmN279PoMWLDLuJPwwYW11T4n1n7Boe4NPdzm987j9rSGBeuVuefDUWhNnYKLFJPAbDQXkoam",
  "key29": "RHZwLNXkvF2JrNk6fkDP85YwtF5zdHWbUxExDoguEQyAvdq4ac5qL6bTxLUdTcxVo8pjwgm6Xc8WsusxQ1AmHtQ",
  "key30": "ypX4EuV3ubz8N7Wn14TFLu6H9bzDFqCbaHDAFPSGQ5CPNpoEisf1EhxysyQy6y63193JEZ1CQJCRjYcPg6B2PeW",
  "key31": "5efApEssU5rcZeTN16UU8mLV1MAGSWrHaiLSCVhvagRFxYQhAVwyEtGUPzjh2XUp5HwHxoMbvFAZE9VyejrW18p9",
  "key32": "5ersEJUHX9ATSah18FiYWRhYRt3FSDrY943qPPJx7qyj6T229dyKezk5sdDh8ehLyyNSjpcqLqP92SQy2Hbwc59M",
  "key33": "5K7eG3FVYKauemKa46NkjsoMgU6i2VSpcehP53YK89gJUYYc2Ru5odm1mT1hN1UPbcbWSjpHWsRQ1ijcNV9moDUE"
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
