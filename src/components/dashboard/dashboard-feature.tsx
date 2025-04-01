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
    "25VLpXWbWnT6F2JVrwH3h3qqn73baDbmRQjk4zQzRJCp46BEW25NsAhTagLBkQwQhUpSZ7L6R44hDiqDAJiovFP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KFKxwNKU7eyXSU6apXFFpbU3nPPrhPBoqWqnNr2qsGneEfcGre8BGm1QLbYEQ4vuJTUXeSDJdfUze9XRAQbp8ZQ",
  "key1": "51GrV8FQ8gFQyrGshWJjCtsbtB3Ai7chMxUS9rvDfxABHeGu5VmRaLw2SCHHrYfoewhcZhYSGd7XGDtzEzWsGxac",
  "key2": "5GkCyqozoNjb7U8d75h6VvkdtUwcGAeGiLrHexKHaZXheXknM9fpfiHfuxWBKjS56obvuTAwP8drdNjiRaeTi9jp",
  "key3": "35SaJtWNvdRXEiUvmFetwUvaurL5thQTvh8mfqN5qEQKtyjCFxBP7SPtfdbJhQ6cquJ4iJJbRMToQzutwTwZEpRB",
  "key4": "3hXPCXuMHN1HW7CSzAr7GxJzxuGEKqETxuAMXvU7SHPLkhtYCnQU1i4uNbuMJKRYkv9zuzdxyvcwSzPXmqVccA3X",
  "key5": "5AdDXBvHz2hPcERQuNEj9b7TvDcJSJeMcLVvmoJWnYQi1RssMivjVw2wq7frxpgkFkPup5eL8RxLFWWUvP1WXQm6",
  "key6": "zJBvvtAoCF1QECVy62tNprf5J1gsj5q22KaCWR7QDHLaBcYXfbKg5vzpERWjaLihNGMUDKXc2UUak4vEbaZmAc8",
  "key7": "49ML7tEuRHRhWDyPWM8rijpFepcr6TCNojFd4vNBszNbhoPp2Sa6WyS7gAaBWrgXuvovtqFe7zGAVPAYavTmyU8Z",
  "key8": "2jsocdBUYG8bJV4hv4Eyvhb8wz3GrRACC5zd4FAL1RDoscPmJQPM8ggK6XrKq6aN5tcVTiWnU59cT37szck7brRE",
  "key9": "chr7UFvrqBce1NqVWwb7MKSkEgWpEUSgthuL5Nt8E3QvvYNexCWVS9D2khsvzyLR7ZBtWhxYoCQ6cETRbaYskVy",
  "key10": "2yojA4sEcULU8qDv4hS4mxZejFbVztNKsSoAWhxHFxgK5HRUENDfurxeH3wkxLGuJmxK3BDadKj5itFLHSBVWHd8",
  "key11": "5bkSguBnaY2DnTQ1rnnxhscvXFoEuVYKyDj9QweSVLcDRqzwf8mstFYwFo796fLeUB6qedLYKUVYvbipMnNbbQZ8",
  "key12": "44jX2QXYsajHNYU3kA4SYP2zE8KHWNMDKdBEHTSfXXXmdJn2tBz27c4nMbmFMbdEPUm2kLJNQd8Yq2uePUWD9VLq",
  "key13": "3bPE2UETqvZHFz7u2sY1Ktd8mpegiedRjUpzgh1Hu2gNng6WNTGbMjmsZqgHhyGLVn8eZgxcT7mtYzRkGnEjYWJK",
  "key14": "2LTqg4LfWVRAKfGgyj7DkvAkEtaKd9YYiy8JKQY9fzQFQ1rZHPjNoeEvgjDx4JfcE8CteZ6EehWCuLkCrJchtHZR",
  "key15": "3f7e2ryFPMfUCFK5GAQmpq7iU3XS7P5bZid372dwC62uGyKvKHAadPrrGPLk46vtSbEaT4tjYiSnfFpZ3FEgMGL3",
  "key16": "Epnm4EjPn1nVTtPxBmoveYshyrNod4SRNfDdnp5caLpbqYiwf94g9KU9Ax4RLCNhBg7GMv4zcKcWJeEFvyGahLn",
  "key17": "4eVfFYgXkvYK2ktHDv86jUMjsy6wMEZkGiDkNtf5QWZ8jpGvP1gp2nUTDCTo911CJdUbRNMcALNFKtbmZGJZyeW1",
  "key18": "61CSjyAXqHfn3jLkgBwohtd9TQLFjPU1SwuUCBgTSgr7mehCtHU8UZrETVfhL3u3e6WtggcFcijNVq3h2otXMtTd",
  "key19": "5sSeGn71Ak8MaLoYwBo1qqW91y8mELUKbX4GMavbiyJVo4bCVW93Lv7PAWMjwd4PCmkju2xc2JDaD5wXeDstmxpJ",
  "key20": "37xGnEfHXTb26W6tq6LXNBoarAXdFBLpMgRhmHp58iXFii6pS8WUWPiN8r6ReGqGa4hYHWkJA3wTd5cjYFSRCgaM",
  "key21": "5dXE57xM36rpvtjvYVbYU3dDCiZjF26P3rPmgvtfYHhqSUH7Tioudui9SQ1WkZRaFhVhqt8JhPBkSAfBBKfSPUPt",
  "key22": "5JN32siCBh8KKKEDwQ9iHQGFeLSC2gKEy3DrQuLMeoRVJPv3R4ukcbTws6RKCbHGV8CJ71LsNzy29NKneD6fDUZx",
  "key23": "4tWg6PqxKEVPZVyJPxcPr7uN7qLJCKqtCFthWyjtRxQ9ijY4haU9pr6CiHrSXfSmffm2CrK2o9i25XYjRT2U6g4D",
  "key24": "5BwKh9NknSEsiBcj7ANuf3PZsTwwNHRcyYWfWKFqchXauyRR54WwqTWdoQykFh8Pg5eb1kERhzTKaLWQ8a4Xswho",
  "key25": "4K6JqEFeZYWvMntKwNA3RLoXfiJMN8mzxsF5JMWmNsTLTSc4ymR1uxePE6r4Xs2fQzuLhkwwexLQeAWZ3AY48Eoa",
  "key26": "3tracoyTWtF9FdwqHDq8L7T4s5e5bK6ZFPSSHCgUjmiXjDvGd8oU3vH89LLn8Ak2DvE61hDziZDEy9DXcPo5ACmf",
  "key27": "22FYzwMM1qU2xeNJtiLhZ4yDt59hG67JGEYW9ArHJgWF1MdxpxHXMfiEh3yLbH3BPhRgQXdD2MJkvx5p8oFhFDYg",
  "key28": "3rc4KUHRDFioESGHC6DxDwZfTBKYT96QfMi7A3VviHBbt5Feo3wBknggnKWgjCJZEnZu6GswZJLxpbesDqGrvtRf",
  "key29": "4XRsGMnKkMo1XSP9Fim8QymAsHtzBJF5i1SayhRqfR4cejA7XkumjmPx4KFPFnSoYiDY1kDMvTKG3H1BgWVZpBYS",
  "key30": "2qp97bbci8RJyLHK63KzqPGDFkp7PCGREbX8gVf8yZeerKrFo7bnAzFTu4g4DHNKGWtX8kHbrsdffRKxqE37Xsif",
  "key31": "5DMdzkDngaCAExRgWXAhc1KqaV3vdStNQHMggeUJBThDmzHDoSwgjRt7C7v3ma3M9f5QAgvKqLJZvAvo99fcC3E7",
  "key32": "3wdzw94MsyV5wVNBshmL63BvBmXHcdV5a55FAspsZLEQ75UvvLqgkVeWoFAeJLcsHVN2J4wSALWcdUWFAWHqEfQG",
  "key33": "2yp5cxxp3FDmZr8sxqtLnbrkW7SYx8SnvFZVQzVaMisc2UTjLqhHqFWJ57NnQwmxkhU6fXUWtWgikX4dtUrrG89N",
  "key34": "4pDSqAMdwardRKrSB8S89k8CMiWbPwXQjJ6cE55yp7Lg4d9JUqaxurbPKEuCBsrRFWAbLPBT5efPbrhynMw5MYad",
  "key35": "4mQFQFT1ytE7FfMy91ZsKUdB2X7kPAL1aCNNARXyVszC9QGu3FLXVoAdSFALLTaZD8A1VuHWVioRZ1d13PWPDTUt",
  "key36": "5X7zg2NkHA59MgvTw5kuxNgLwPwJXPZ6PBwBT7NguCQuPdohQJF2oVDeE3S7UysUw8wrPVdERcHyuGLRxzSU6nv3",
  "key37": "oo7WYVCecR1SC3To6D1REuyBDLTqjpjsd7NvibY373fRwTTPp9ZuLGTre6fThjvwParPKMRS1B3Mu73KsF8TgGp",
  "key38": "4WYT41MfBxBt7jFrzdZi83zqTNbzZRCojzmZ2zDiCq4BBfBdGCYJcS2y4edd55aDmbgpvMCP5nYvkiCY79PLgEWM",
  "key39": "3o1DDyJWSM2oPCmv1dYoXUYzeLdBc2F6uvFt4LdvcU3jVT2mUw8LGpPgk4Y3QSzESAR8KL4bmGxMbFM1cHHZjSzQ",
  "key40": "nD8eL2sQxeaeXAuoKbqF9GoiUbLeXm86td7srG2CtTpy8KwoPYmaMaWp1LtuvVQdVKeWgyH4FSbbtyJQNqMeYLM",
  "key41": "3nJDuXM98fuLZuVKfiEnbTEjxXNxYfijnVYrq7A1ysvkqaRCckmRFRapnAxoXnaDA7NcHYKqGKPYYwroiHRrrBvN",
  "key42": "5tmU6XvMW1E7u6nGHTJAmKd9zxG6yEfenMqq3WNLmRzhxV7fwqkbhnwgHim81SPFS2baKqJsMLFwyJtGRF6h8XnD",
  "key43": "3NS8Anw3jn3GRm2JtoxQJ5CiU8Sx9vbMnGJsr7PwSRxkxRF6zkigPAM96ha5G9321ESrRZaSFPpgca5hJtSPQ3iv",
  "key44": "2pu9hQfX5PXDVtER4aN1he9ioizTCGfY2dQKYpF8immjNkenKEUbAtM7mVqHrSg3ZwjMtczMu4Fv7hAwhRhCDSke"
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
