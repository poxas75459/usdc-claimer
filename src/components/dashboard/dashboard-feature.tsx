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
    "thqgfNQLZeoLRkG6SG2msLMtBcGUazNyfJPx7BosPQxTtZpLAS3iGXv7vZGcXD5xo5LCdii3n2fgSvjQSssjvFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yx5JzyxVQ3DZdUq2dacnL9NjdyvoHV7SQoWLFQyCb4WmYCX9eys1XZDdJR2PMBhaNQtnZiGosqKfDJHMGRLXs3r",
  "key1": "2xoNyGKhzDrNUDzUpSS6iU4uTvL6qe9uCfNxyYPEABPsTZM8pjTQcDfPYkN9M7mLjd5GnoiDbgZVwVjtnKN1YQDt",
  "key2": "3xkRp9iYzdkYvTqyGBUPmWGK8XSikiGzA84S9Wc3wV1e2DfpuJVni8BrRahdE5sfqVUth7cpvZmQAaMFGKXJJkK4",
  "key3": "27DXEdbUoke6yUCzuFWg9QeUvogQEbqY43xiSFYY2GQcRrVXqY95hCmNVGomZHFZMcvV1AbWYxB4uxk1ZyP7Zu52",
  "key4": "5ZEFm4o2zz38aQqCrHZSpgV725mA2Bo3QHgyfDvoKhvEkLnftme1Ji28VUnumZxidaQdoAjTFYYbDt4jziSSS7m7",
  "key5": "4YGkQwJxdNvKyV7SiG4NfPEW6nnZeZzw3svmJpCHU2wKydwFaGEAxjyyX49voWkPrw1gxhXThna5BkB7sB3ke2T2",
  "key6": "34gi9eLy6JoMoT6DGbdSmhJtmHTRpG1EXkm5VbJwk5ePrBaeSQAA8MjUoHkvU3Gu5Uy3y3fQ8FXCEUDeNL2a1v27",
  "key7": "2t6PNWg7B9HSjq3tfeBkToRvgSShcU497XSGQpZ1vMiq5VvE3PmPas1574jydRZ96cT6j6TGsmcXfEEkhKQrFPhv",
  "key8": "3zdE6MAvk28nJS6mTPS2NywUCNVv8Pn5BVMzaZXmMfcHoBFG3fGD6MqFKbVXhDssURuP2cWCkQfxUJ9vDty53Jov",
  "key9": "eFTCUfELNLHKrDXHi7cd7dcpoULLVfWNcyfDAtNHdaZB4dGg7BE6dGzru9xBd6ECcNYnz9QmFYTSW1Uy5Gi7NRq",
  "key10": "3LDJRUHZXYvzzPMEAsvwTZb7U5rUaGS8Evi15pngVhRQAHqBhjeY3fYLgyXXaRGY9zDwoWzgKfE75GtPwt3vzu2T",
  "key11": "2YSXvsazdmdRjuWnGLWUpGmu4C4Pjymed4n15teZZWhg2d2QqYn4gf1kkFktryyU33mo6BrmVJn6g9WqgSAb1HUi",
  "key12": "3PK5ZLTZRoPcSFrVsjpJtnY3SXXWMgGQonYDjVY9EbJj8pXDoxdyx8r5bG54DDtevN9LXcyQ26w1JLEqhxT6WKRm",
  "key13": "2L23Ueq2Z7wQ57yaCVG6mzFR3SchDiWw7bhKFor8teSQdYuxHwFUc2Lj8zXrSQqMRvE29xdF3Fj7UapGwBrkx3iL",
  "key14": "2RJ18CVdaqE2d7JjspzAHcvsbbetASHrPvAdt6Sqd8HbYpsKSuMfyLjr3T4533gAd8sHE49CmfED3oQDYx8xuVvd",
  "key15": "49dY2VFHJx91ButfLWArrYPpm7kL3PCskePsC6swGx5b6QpZcD9jQfRwPxQuSnm685XmDaPTaz9Efq4CvZ5fb2fw",
  "key16": "5oALYBFZoPqgPwpybL13DWXP9Am577ArxpKfRe77H8SSFtZvjixC5HhUnUr1JS2k5u52QYPCHM4JGTWKoxjusg6h",
  "key17": "2AqFD3iAZhVYgnUK48FBeGZa7YMqqw5xWLLCYQycSUsGNLibph81vmiUWfCMkrpRaeTi1E8MojsQ96W97NL69XfF",
  "key18": "3fFvzbpn71agmuoyxGaZ4HykVikhgvgBaZoEPezd29A4o2UpmKkqVaQ7FTUi3G9zoY7a7NrmxJuGJcfZfuG8hHZ7",
  "key19": "398gYPG3Udse71TZqAq55a32Bhj4cwpDA1FrVNkL57BhkGbU6ASPBm5gADr6tBSqpBb6ik8Q39Q63JMATLMuLQM3",
  "key20": "4SgrjU8oj2eMYxNPtSQKkvnfXhXGYxajN6zcAXy74gwLrY7BTbfXHn9nqwhZTT4XwCzXhRGmHWTyRNUPqdndDCf1",
  "key21": "5Crz7wxAksJDrjCr7QoytQUsoPUXyaFhRpBmbASaEeQwQfYAMfH1Nr16E1BPnMRGjVfYtsXbf6gMXhQU2XXJjXCh",
  "key22": "4qnFJ3RupFeRAtjGFNKhzuHw6z1m9tE2zGaZdtG56BFuggPU6RzVqDAyu8PSzFuB9e9wQazViVuhfjZeYuGvo1xx",
  "key23": "5iNTmxTBfof5ZHbaTYnwPEsU9PST2SCn9bPt6wkeQwPX9UBa7dXw9y1akBvT9HYnXFDQqzKhBhHwv9TtBTeSJhUH",
  "key24": "529LMGt3r5AsPN6ZU73SheVjHFCEKsrP15BPdvrndvHjgt6afgLRU682fte1h7FTqaqu1kV6qCzdkdjrBk3QbDKL",
  "key25": "2rBeU4YR1g6EwJPiGojqq7qjfM4ucNwbNiWJekwSuypYai6uQkxot8ixLwDhQ2dXg2Ch52yAvqeAvXFxvg1qhivZ",
  "key26": "4VnMcUJHkREdbkZWiNxahXN1y716Mwd14fjkTC83dj1JidNWnhmYuQgKRFecU8yHEnR7vL6Qc3DPBgg4goRmubXN",
  "key27": "54Pnb38NLdxdHbn136sWjqKR72RTfUr6VCowvMygVzi66FRNDjncFHfi4U6ihQjbdZGUQfjs8nM8nAAYFRAz2PGb",
  "key28": "Fs1bMFdbaTWtKWU6ysjYQ4KWSyZjr2QPEExfp68E5c3b7DgSaEF2s4Fyd5T6gTzKgyXF8QCmu8kctJjRHaQZ1W4",
  "key29": "32VPYqvTD2hLTSmq9Ded4HXcogte5ecQbHY8VfoaGFDDeiAnQhZrXeQsFT1oSKRF18tcxv9dzdfE9hi8R9jjZ6fY",
  "key30": "28pBNke3vXe7mkEk7pFCxmvh4iJ3pb6GkCCdtyi5g4r8EEUwEj6hkmuHzYxSEvMPdmRrgiQ6KWLxrHzG3fBrxYZt",
  "key31": "2iZeXZsjd8p4joJkskknyqKFCPGAsFysoi4qQXsGqKKonibmgSFmjZtxh8RU26UQYrdG3bdkNiCykvTPU9TxB9kB",
  "key32": "4KrmFKWEoXHWnrtQerKyNAsADQLLXvn8XTjwJU33sfhK8ceduErNF4dmpuHkKz8Nw86FZewi9PFSfq8ESHmiuQG5",
  "key33": "3MLh95yR2s9T7HLg84tib9rix5dZkPd32BPfubcLGEANttrVqNDJUpJhXD43WZWsMcioRpTF4o7epvynj1oyCjx",
  "key34": "2wEo9ZcxoeRQnneJgm46xpRgoqiG6HeWVuQmuoiwMkMuhtTK7p7Cb4jLJ9Qg8UcCUrofn4iQA5DDgEq22dhfdcjo",
  "key35": "4mKR9mJ7mnJ2v6LnoPbMQRdaj4EageMy4TGi81LgoLX3LHj6AqHZDt2yByzzDhz2AdLvLQnp1hbs7NfCHT1pgPkf",
  "key36": "Qowuptv7LUatg9gsRrkRG7ayuToSYBLmRuAvkx1mgfc3YMvuvdVqUywCqMcNs16BAhFChHLEZmRz2LoQEKqqr36",
  "key37": "3X9KdM1xeDvaayDQTEeKe88NkEq7UZagtgjvyVEZB7gj2DsnGUPVXqAeqxtLE3Ut4MJPpQWNRQcVD92haxt9jJzf",
  "key38": "49qqFqf65s6FGQ8YoCuyV2hYHYtJ8efYEMJM9QmzQRggyBDdBPqWL3yB2dMzr3Jb9CpLUBE4xQqhxwmKeLAjGK5E",
  "key39": "2dg8CjBug1UWJkuV1ncRp4THKvHc1VRXfZ11J1zExLuESruk1KrJqvCKYwEejo6DfFT9Sm5xRhh5XJLcDZACV6ww"
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
