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
    "2itgQVgRZxUfn78ACvCw3AMvieuCWnncDDqLrkrgJXhRfYoXVWYL98Nqa4Eqhjh4ErEvwS7zax8rKwyuupmDt8nE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LkZRE6sZipBiZUAw8FwvF2pu2KcvPWMFuZo99eQ2GnQRXvDLQdr2GmxXx5KCSJm5Lq9SzsXT3CJ6gp1CiVm442p",
  "key1": "2BomaCdimHSHxyJwW6w6qJjzrgGtWughdRqYNw7LnkLAUnD9DcAKrx8pRmNQuvmWpus2Mfnaa3UcGtZEpF2drk9W",
  "key2": "M98GdQfQRfWk7nhNagz9N5DgAE7DHveyVGmBoQwLkZHLf8md7Zwz3FS35EafsaNhnrovPZWsJRXPjAYoCwrJizV",
  "key3": "22mAcdY6aA8MJAoa7X4T3pupFjquQSH7ZWkrgU1xp3EwaMD8rEsN3TcAfw4twsF8uDRCzCdbKCSPChiYMNgtKqCn",
  "key4": "3sE8MvabafDEDsEPupgzpqWTuBv1SN9evif8DjfRuF14WvuU48uxr8RY4j9FgW25TYtg3Cn6oM8FB37KNxu98Ht4",
  "key5": "57TSmQvcm9g6T4h6pSwrh5UzfEofApjsKg364z5svzZ7pyv9EhUhVz1RgNSdTu3tqsnhAbfoNYmu3MproR1ehmDo",
  "key6": "4Sj95KeEoh35r9ofesn7WetLfcUCfe8N6AdqcAGu8DoTGC5gfDu23g5xjkqSoS93qwaY3WLHJn39Y8bZCUrmrM9b",
  "key7": "2Rtm1T6x9gX9RD9W8xCgqweMUpc2N1xXzwqVHjsWbrWLmNFk9JMaG1J4L445xotLNDScX8ZFxS34Gk9uGkHk3kRn",
  "key8": "MWfpjkjQUZ3gB7aCmn2UmJBjfwiBufi4wL716HykVagu6E7qeDkjkVXV3BLR9FnHCNCq8dDPbEFEny8TS7R3G6b",
  "key9": "6LzGoMDxWqiFMQfBLX5irf7CWYCCBcqA97f2TMbwx1kNVFDgTVJqGZE8xDm5eYKs3gUxJ3L2djgRLrNuusHmpcN",
  "key10": "8KDrY1xxiN6wLLYDP5bUBQeF85B8DzWwmxNJYrmtWZnYZ9AoLQmrtPC3wdHXwadG6EsVdvNjUirS3vKNFWrsqaJ",
  "key11": "cJ8CNotQMNmLXxYemWi5xN9S6ks4Ufhm6wYZ9C33G6YW9fEsdFExeuFc3vY8n5wnzKVyufFGfRRo2ZQdJ4nf3sA",
  "key12": "22VbPtzZdm8B1u4S2AByNT8RMF9RWJSjR9qnmPgLFwmbT7ypBSEYjnz84J8Gnwo5yK4UHksNxvQZeniqc1GyKM5R",
  "key13": "2x9deQw2AUKhYzVuRWJynS836MdQPFoAnfA5xXS6YgMYmPGxPzhLLVpsz7uPYFjY2rq5mykgZKVohWTHTFEL7MKG",
  "key14": "48URT6qbzPkGQfd36MmsF1Fpmx6pbPAeaXL2Cc7AY2vdpVrXYx1QWhr3syHYC9CU5XtHWX9govS2YKHmC2todf34",
  "key15": "2ECNZ7UcnoVXP7CqGoku7Fze6GoYodX86avrJszSuVS6T1EQbX5D5nkvu1JsfNgQZBusA66MKHDaJDGNv8tpmtRA",
  "key16": "3tgoLcEPwvdBrtGGR8z8CBuR8vbHGdgmhfdED3sTK85QhDqbu6VdgjVfmBhDDBu1zovhxcYyZUYFRT5De1joSBT7",
  "key17": "4sWbeD8FuXWqvkQoMkbWxMxrpG44nRhMvGLtoa7hZjYRdcfBh8ZpGomqJKKbqaMqSBh3XftyrNVefP95d1aQ6WaK",
  "key18": "4a6bb5aciWdyzajtBjm9SSEZtsiSU42E7HhLX5BrPVxeVWn1zfndPBMb8Xn7G8pE6otcmtfT6jZctDChPsXddJKm",
  "key19": "2L4NT3ybLrEvEwo1zD4A8Sq8AbiWpaqn2tFsn8VHAcrudgdDvcwyrut577cVzgJ4MJ4A7zJXBp2WoNiipRVCzJBa",
  "key20": "66pZ8W4zphXamajfddpjcyxBQEUF5AQAosPRfbayCZzW1bY2q2zX1RxoHfxRst1P8BKPDoGQDZHTJFM5QK6HAthN",
  "key21": "2kVjc5eN8YJm5Kw4WkZYxGnGQwdiPF2dUQEQZzXkC6TGoZJ49tg3LLT6nvP65LKTupoi4RDLAvuVoM4xPqfFrxfX",
  "key22": "4kNffpWPXrp6V2k9A8xKshngaN586uZhXD13iMNK2tr1s4ksSUjG5s4QWeqTfq1j3uEgiN28WQyVE12KsL9A2pxM",
  "key23": "3FLaoiUSMaMxYTsW9i4j9DPRD4uKXMMQs5M8unEtnXNvzetydEYSWGCNKeGor3H1TST9e7VEpihgawyLfAuLR31a",
  "key24": "5aCnvzcVjtL1Gfj3nu8niFsKfgf7RjJweHoJjhM4Jnj6iE5Nc7fK82bzUSUMmrmApCqCPVFrhovQbf52nLyeTkxF",
  "key25": "3wpowpLLuG9XPxFAUKUGw6L6biSq6RoBUXxJsrcq1Bh2HLeK6QF7SNoMmH1nm41XXZAxFcPa3X4n3MdzHL4bde2B",
  "key26": "PYuJ7EdBmMoCspxcbEyVBsYQp1jEE47gYRVHWEVT65CbWNEffvYsjcpBzpigdvftpMC5YAeyRJ5bbRwgzGkaWMj",
  "key27": "2KwNRmnjo669MEDVxQF5qHGM6VjGwKbRJAPGSB3wWPDqiEFTBrt3tmd5iQx7P9XvjTnYn4RPkWvUDtyZdw4mTK8z",
  "key28": "NR1KPqugHn3EpkUYD9VmNmoU7AXd9nyMbQFwwZjhwZJPsGtCtxe6XVhouJXoAqaWsToQezqQTdeaydUDb8ecc1m",
  "key29": "igwV4snDEvGxRJ4ocNtCLrWTaEX7Mwqk23BTrAmRL1AxD3n9NbrjnycyUrZiqxGHkLy2GLW9uubvHHz319xRMHp",
  "key30": "59W7WEA31CoUxqiSNQK8yKxxZKHf86H6SE9fd11ZmP95fsMnw7hhR2fCWYrgKwSKDZa2ANJcCN5fN8sMf4x3Jf8",
  "key31": "2Zqzv7jB9KxRHsqgy74eEuo1BNbzMpjHkXz36Qy262ggB5KTQAoXkKowT5hCRrPr9EEuW2vV8jtUe9UZDWpxPjWr",
  "key32": "5F9yLuHi8okjL4jZP2sWbidpx5huDpTyUaacAmmm1nB7zk8rFWR9pj8hLsWpCbEqyEn5zqdH7Vva61V4MdferZLN",
  "key33": "5iUgLqtQMRvZ86JTqGmpKqchSbApn37HgTMRWtpjzoTzXpinoGQ6K2jQM6c1ZfyYqC38pYfmHB4iKYdoG4KqTAyp",
  "key34": "5mKW18DrofWeMVs4oG8xjPBEkpHwUZwR66v5Q2VAwDYruvF62QTuXB1Ha1LJ6QUcxJNxZ2a7ETEctYiaTwmDiZZA",
  "key35": "5fVtnd7eVz2GDS9omTedHrJAt2RoTYDEcXxqBQ8BEWhHATnUGLMDp3FbXKHRRjSPTvVeEdK9h7Z1Xr9BykndkKF8",
  "key36": "29sNjHobSLpxR2NH97E1cgdixQXBjTQkAymR9Wi6QjSzw48WfwHL6YGPg8zDLy4HNvvHe8qNUmLcgqHSJdLkLqiX",
  "key37": "4h89KL8TPY1o53XK69nHvqMhCvoD3MwhkXjvtbjrZLKfqxproMsUFxho6nhxPrUPdNY4bT1CvzjMUjDC44FVvQuy",
  "key38": "3EEzhoW9AXCFR6TpDASVR3qcGZDAa8yGJwVvtRuPwt3YhJUXvns4x36pREzBHk1zRc9mjEMxbTvdmyxExzeFR3ir",
  "key39": "SKuKD9Zp7hr9wWu477YQ6QRCGy7B6PAag8y5dajjkU52u4xiu5qkikFcxYytSTfBJHGduoQyejiUyPxeifKS15Q",
  "key40": "o1K5V8yYX8VBPTXuiBCT1UUCV9uY5XYLobJeS3JYCHhhD36xXesMU1xHj7UCpnp23WaUJXe4DxY2arTmFcF8gJE",
  "key41": "2kuubTDMRvH9Ui5GjtwFajG66dpSAGBUX4KJRoPiD44aQ8L31Yeg2K7coq2mr26PJXj9tuq3PzxaYXwKsP4jtN7f",
  "key42": "nFUR7i4QhHYpnGsqJCULYftDfYTsBbD5ZVFHMcH519MwxBBvgbE3N1NFKXQJ6xGxPSBkxfnFvaDcyxfFFP1xj8o"
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
