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
    "4R63Jwb5sRLK398VJ9cTXtJxozeJ1FKEfHwEuRmMX5Mf7wk97XHnniggmwY3uKEDoKzxws8pwHdvCbTiypN3bXit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uyTvZhWweAPcsiuWiRPq6ybAk9YVcuLPZaGXxCAXNzsC9gUANThEkNrBNiuJARb6dW5RSzKJFYZxGuAfDuQuNmU",
  "key1": "4oWvWFQph9wyqi8fFw3DsTpEPcqTWL2LBuE8HZkEZTGSgED3y6WYS8tWRNQJi9hezXax4XF5p5ZKa93dNg9jpBCb",
  "key2": "2xDghQ8hKcihS7z6tpLbm7UaEeriYtwh9ZY65235kDLRpnoou6Zc4cwL1iwmEoTJKaHDtt7y1gXZVfFeUEZDvYf1",
  "key3": "2khbExea7GQDHHCg9mbLdoweJQLGLAjBF1fxH5so6541nAXfq11dFgbZUPxFyqA9rhgjrDwiBhpPbY2mhiXiWau5",
  "key4": "4utzWcEpYpyAxncWz22r7y9LBvmkzMqYYejs7MWNcrEJ4uKbjPyvx38zKWV8Qum3n6xB3pAKiPxEZukn6etTgZAK",
  "key5": "2nnazbqZpTgpqP5rRmtsuh4E2EAjt4cN1fwzGwn7SKAyMYXpi2EoxoDAEUm3ipygJK2YQug8EF9gJvS3RmdoMqkL",
  "key6": "TbNVyhuhP4rGBnivZXbadWR9jFpWRWzYgiYTVTMPQ5XGQvKDa8pUdb2fW9cjfLexBWU2j354WyMh3mcWD4DB3SN",
  "key7": "z2qDf4qS2zsCgBUxdwabgR1hSnj7rEmHqj33dcQmJs51BN6W7awfLxwBp52x9v86qqwix2PLXjhvdgiepDmPfPn",
  "key8": "66TT3e4DKHjk4i2Tc9UAZfiNstpct4p8iU65uu7RnZU2VxnwYmXYfrUyLgNBgMR795Qzuk6Nt29HPfpRyGvWPaK7",
  "key9": "34yD3CEXdsyaGxsxe9sA22G928ZTtnBVxL9vfjCChGmEi3njiqfNUV9YkezU4tFqoWXj9rbDibUmGtRFGiYcRdDv",
  "key10": "3cMgsmGNmKGXgfiz8LTLdNezc2r2D1eAkRer3fsf7TVFYHNjK4rty1HSJfVvzhxLmB1684qPwKh6wPz6uTHisoa",
  "key11": "61bFhXzfLG43gz12o9Li3hvj2zZXee2BWf3biF3Bgu4cRgnyzagXbeeinstpRGPSj5JuQYU5vy49CLnks1NH7h6T",
  "key12": "3CkkB71MvjEHGZZ1qH1tsgeRTGRk4xMqocTN12unnGhj8GEF8rvRFu8dbW1bshKwS7rVJhpxVsWHwiHjYcaDWFKy",
  "key13": "MSYfU9d2dwiKAdAjkQEWr5UAXZFHAjgsReFQ2ivvP7xSjQUHRoCAQ9Sv7Q1t1ab43c8agfXL3iMAQw5jFY6U1qU",
  "key14": "38P9mquQt8yk835wfWWZapi2pAqvg5yJMavFephDi7KuYCTz6F6TwCKhhJ1miW95mhr8SXHmXC1P3pViKKZo3BHM",
  "key15": "5ZJRTwdTqfDthmJcUmc2KnFjv5yKEGG3tNwGTrwDoUd75HB3ZQdwaBMEPWfAEV5UmsWmjryKaf1MSCTQ22huJUvr",
  "key16": "wPfdT3AvQqspFCf8XuXZZCouRrNev2NUSrsiSiYUqMaedpcqWdqpTY5L3dvg7VQEN2vZmwe3c2u2hebXmHY5it4",
  "key17": "2WYPG2iheccdPVbjZXx2nrp3NeqxSstMkz6qaET4w1Dx1M9VH3A1AvJw1gbWrTToh6hnkSRHSue3VnMvT49ETTfj",
  "key18": "2VZcVD2aVhBW6cksCUVN6BBQJxtXRvoJUSTsCrwZTpx78gchfiRkCx2Qxb8xpNkSh8bcPBpe6c2ujz8V3J5P9v5f",
  "key19": "i5NUctc6QkbV84D48V6kdtdgpn48DNboTZK26pfAEg3kFXNtMQGV5Zrr7e6vLGQC13ZNvfjvYLyJhktsZqYZNvs",
  "key20": "xiKWVN5kdig3v5mb56os7KoboF4pxNUNw7kS278Zc6oPPcPD4GohgqL1hh8LnPi8sU6Fbgaqcnm89GFJ9SfZd1a",
  "key21": "3UdSKc81xx22eGCuE4nN6waixsqU9GZGu9pPenCyne2fEe4f9W8fc4UejoZnnRS2pfxhHNBYiQnSp1w1FA4WBjfp",
  "key22": "4sfJ6yx5j74FfLXtKPY4LPpcR4wjBn4iTJEZgacmiHtrr3QJfcX2dQZE3RMEaQKgLNS4xze7NPqt8BwpMqaiu42f",
  "key23": "62iJpKUcK6SpAAfMSCM9mtdUMFo9cASgJNhY5nUfpwfsLasVGvb3ifGLAN9Jva1sMEi7pEbzbEQM7awB2LmonkQR",
  "key24": "2hsZ7nfcLVKSzJoEMJApKvLuDqq3xxKq9Y9f9DHCBnEPF8rr48wJVXDkTCfeDhW9xu8Db1ecyWFeh1c8AZhHfwr3",
  "key25": "5HFaHKe2vNQ5nhTZmMWd8qbrDcY2XqZtcYrpnhnSaqwhWEbGkcjxyjTXP6euEkXGtTGD51LcxuscPbmv4q7XPqB6",
  "key26": "3tGrFnWsewoXjfPCvCcaCLt443cGNeoZKDw9nBq4sdP4ZgmedVrok1YeRLQAKBt2SWCnVF9CYoPGKxxB3wFRwtAJ",
  "key27": "4q7kR91dJQx8AEysUXSWyRzqmYwKVrA1AqpitFbsRZALJrUiADjxZcHEgqiMF3wY5HjFQSiz1PxTvhLNcb1DE7qg",
  "key28": "4oa5P2Z1FwfxH9p9VramsseSJ9vPDzKFj2p8XSyxbEVYvdS8hT46cW8YvAJLMiAjjkC7FiorzfZUudtYfBL4Rfah",
  "key29": "2GeU7XsJQXMMbaTkGkfxmkQRasYLXKvKgx4NuvHEMfiKaSUVmkdg56mp7cAFebDgyhqiRQdh3iLsdGhfkTL3r9Y5",
  "key30": "4CcqoN73mMfhmRAgfzJgFpctdbRvr92T6yUbkpkjhmRFwQrMagk2F9NK3wVKnUPtKPqtLkHPPqSkLf6EMgB4zr58",
  "key31": "4XiseBxwGmUHTkRrBv6KtLGxV2gFfKkYwEZfavSUNgFCr5WL5EHwkzK7C1ftK4o7wL4tRB48yEMpEdRRUbC4Z2BX",
  "key32": "3qJPky55A8RsDcqwMJVsqBrynUwRH64wPwJL5n8CdvFVkkcbeGm4sZsUUwRy3S79kW4cUs17z93NNMHTWxmKExZQ",
  "key33": "5GVEUDZBZMf5J95ji5fwMGuHYaiNh44TRHi4Z9ra5wmJAvw2ckWcURok2ovdfX7PdRRCpqWXDFxuv28S4YnLtorZ",
  "key34": "56hNdCRKEKw9RtKbcqTGij6vguv5yTm3FiLXPYfSWu8acaw2iFYytMnELpeSTWfqwLSQNnyq4jxLYj7LCQUdszfP",
  "key35": "2Z5ZYqNtLkFC43uthNgaHnAsWF6yekMxZnYvnsyFFYUEBbpH6oniaqot4ugQGwwF4ajwyeQX6aqKL6DtVE3ZRRib",
  "key36": "294LX5yhouznHJApTSXhsqMJPJFeB5rHYD7abJWFHxy8rMEa2WmXp2NqzVNcxzYGPTgFaU9WgP1y2HJVf3sreHFH",
  "key37": "5RfA2ER1zy9eFCXqjNx3vNBGXpFHD6EGnB4EHm9AeqKKknPrrMuxatK6QVqYbukA9yeYWJMFigq6EQyNghA8y7af",
  "key38": "28xtvUVVsVMGGxNK6WpYbNBE876gMzAsYsV65syJRskrmc8PZrh9SeEcxY6s7GyCm7W5ZCay4LYscNhujFmhzcEc",
  "key39": "iV4zvRK5ScYWBFDGGKQZMSPr874dfAfBQDUm3UHuozNtFUUJ1NwvJWb8Tu4Em69kvtkdg7Z5bbMk38UcUCDGPPP",
  "key40": "2zAgTUqdLe2wap9iGg8jShCyo5TX9qw5nVH7SxUow7NVMDatmRJDCNdYoEMqpYKmuBTGFZBofjBJNNmhQ1oYTh3",
  "key41": "2EoaMWbguuoDZ2oy1MtRmE4ok7RhrGJNye6nggHiZg5JvFn7Xow1s6R4s55f7gjTkPq5avDvXRd2zJ4GS1Fp4GTv",
  "key42": "5VQWhJgBwV2qGPGfkynjKNW4PUXBUWbvnsjrhCtrUA8ZN11xSDheERToLfwcBa7je6MfEj6p768j8vVcciv7iTWy",
  "key43": "4zdgVcGYRLFB2TuYugHW1vWTdndXALf4ykHt6LknTo7yYMzrzSHT2GQxpdFHdoCs7M9jkL8fbMKVddBR98dNSxNt",
  "key44": "3tuePpJM3EXBk9SfdmGTtDqxRDKFApxNm5jqkGaC2RNX5LCjDpga4uyJVqELd6XfZvu2UPpqcYfZZ4G8e6rakSFr",
  "key45": "5Axr6yZDUPnLN7DR6WuoehB9z1mRAnAk2eYgKuNU16PWmLZUc7477CYncJTRquUBRTRDtrVt2CxFd8Q74aLT9N2g",
  "key46": "2QUV38yyPNnokAjZFDo246DuQwvuBNxvUUCDaoGyX4VP8SxYm6PwmerXx2mXYzcu1MXdm8C3DFEkLYJo8CXZiMDX",
  "key47": "5vpBSbawCrSW4m7QRAkTHVQFhsPxMy1nPqx5uZvfgfXS3bfsqY5SmX9ihYFznHmeMKo3iJqKxRaodSYWirFY3iwk",
  "key48": "5qbQX5d19bgxM2hy1ASZuwrNm1wV9nEPoiZVPkssMYpCnG56Zjxyh35wtzo19fVrRRStCjKRbum7LimhvtWJGoJQ"
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
