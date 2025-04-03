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
    "iSojkAu3MgCHTktcjc11ygGvQzh4R127riamVMBYvgxJe59dzgntm1hcNHbw2B3KUpxNCxvrVzNz8eYB8QZX6Gz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aLnAtExoTQQPDssHQTqY6wCL3ozAgaFWXKfWq9XgzTtFdttrTwcDpZoor2pv7849vWWpxuDh94VgUSJbeig6RnT",
  "key1": "2vZWpBFs9mS5xidPpo5XCZWsxDLn6Xh1fQDYgn51FwE5suiirUFdAQb2ZDhmJUYkpJBVPgf8rv7Q1rvNU2Sx7rju",
  "key2": "LcqLd2GjzHRJonZAn7pu7g1qGMDeY2Sv59HmWXB8p9iPxWoK9o4ZF6B2Tvg9H5HMRiKikSwVnERawzwGbkmcwEX",
  "key3": "21A2qYHjUm64FPygiBQdJzqaWQLYmjhn7J5URddcxgnfk5h4Mq5YpJGmEKwN4ofwvvTV1i1P8CSJ7k8PVShTmmVT",
  "key4": "bQCMkorhke33WkgJ7g3fM2f9smH76JWs6AT5DfVUGuCzuAEU9iYG68NaNSatgmZ5wBB4TzvxviAnqMod4UgCEjL",
  "key5": "2sYrm5JxnxTtJhuLzS4v5n7nWVfGAXkEUVF1Cue8jEimePmBPHiuMzQKdyrL9vbEi8on7wsxi4BXJDYJ5ZwQTRXv",
  "key6": "4TaMwKfLsc1f9kRi9uXCp3EBU16NxDFSqd53a3jSLCLnin3316qf6RAWwu6BWdxrbod7DJPhWmK2vziAq6r1duwZ",
  "key7": "5WDoRdWJspRLEBvXsyTSYv8dhMHxFrGpgARiWhjbyuFbGYmJdUvVmEJVTQc9cUaEwbMiEedSbaw1ayE5o6NAbidY",
  "key8": "5Lsm5MbJAxEqXLfpCAtF7LikcoGS2B56Tjj7XXkDRFKdbq2NN3YsgkDc1q99JA2N1e8b84crNBgwUyHipj4gPX5B",
  "key9": "3wPcRkisVRgkR9Uf2DPHHjWPjG4Yk4SNk6SfiozESDm27noL57J7aLg4j5MupPQ919y37mrcnf6fzb1F5r8gqwkg",
  "key10": "4JZFdsvVBSsPe81MoX2JyZhdP2oLyF55W3zzDBZSdry4wNTCr9RcwLKhPn3hzmReN8k6pKcyegBmdksGpbyNa2CM",
  "key11": "2UazHKn4CmFTCRJReBTEMHjutywSvJNu9ERwCmbh77ngeoGj2yK1j3KmxiBM5JoygrQbXKQBdt1EjKdhfXWPgGHJ",
  "key12": "3Mj56JqpadJMpYgKixTrJJwLrLF7uQWca9kupehuCFz5sszMfD5vA7DiUf8FMFpGuVsFbBBkQ4JurCa1AGXJPcoj",
  "key13": "3Tc7hrfTzfTJ8MHTqnmMkjEyo92dVC3HzLsGTLf997tQewe1E2QHQPCyE41zcrmSespuRpHFFAP7Su6D4qSuanFc",
  "key14": "2TtGcFuXjgYgGuvmqLcoLKPupFBr6ec14RNYn8HBxwScc1qBzegQ4F5yC6PmiqqqAckQ5rd1tFM4ZpZ7eTrNy8mt",
  "key15": "3RJdouh64LGv6pVtkEJtcA3smCyNjNcQi8tKrCXfWVbpDoDfgykimXQUD12BWLo92ejKw9C2hvG5iAFgDaKTvsa1",
  "key16": "3rz9Mxr5eFN8dgAvssp2ghXsNUmLyKtiCHQ3BGXkRcoAuS8BsERqEzuQBsuWLcdcM4BGKw4nFnXThpF4bnkzAdHz",
  "key17": "3VA3g26iuxSLypT8RmJ5v95DuN5YsDnvCsr8LpMdRbPnedyaQ3xJKtsHopej7vWpByLtJfztuHT8ekxXTU9WazWb",
  "key18": "3RYMW5xKRnCV5NqTfKcNjVWPvupWts9F16z5LWVaVJW26L9Jiq8URzFCTUiNDagJKCk7dTALPo7ZX2K4dzEB67UR",
  "key19": "5v4ocSJ2wue7DVRwEUBAr4eLYzLT3eBDxMXiFtP1XdicrzNUBkBcnfAnbGENHQ9fR5Lg7MvaiyizxeoVCB6xCtSX",
  "key20": "5DZFjmzbbZqaveutRdrLPa7TviFs5AmRNsy9vFCZypXL3guHMnfgefUoDZ2iyEWHGLCnxwndjMZiaRjcjDrj1kL",
  "key21": "7mm7JYZcSP8QHhb6wyqN4biv2L4Ee6zbDHC6uQ1gkZVBVVNZnnC8G3Nwp8Z35LaBaHN7dADnGyxN1hAc3oD1CGh",
  "key22": "2owsvu6TzBmmh9ZHTX9rrVtT42VXq2Qa9a4LecjG9J7yREBVDLAZW9oBZcbPrBPdM6ST2GpVtd9CedQoqsTCZdgz",
  "key23": "49zDHQBCBPXrqVuktfREQPmcC1sVWXKPAwb8zDKe8uA91wjLZkMjoYdWjZb6u8aFDTHynQPvGu5h9H6eV11A5mXi",
  "key24": "AnAGa6g2HxE2s9gez49rHbAWUNkqCiTqMS7nu8bjHAekpEf5Z1k3481LMMRY8BSonbphEian2TUFdTWksws8Tth",
  "key25": "59xm4opq3RJsUSPKLSJqqDY9KeN76ERZF9fEQ7NhDxyfD1gRqUUvWssvMbhfaMsCZ1g9hPEmTQsoSLcBK9dbVPj",
  "key26": "43jLUUdiwHqDk2ToBz8uTPbMPZkpWu4zSwRCT2N5noF9H6qqGmBYdyyRotZKnPLDz3X241pgpkgx5jAt7BmrkF9c",
  "key27": "5skcjcpHdkMYRWtUcyEvh8HWDUTetSq8g6Z6W8UMQa54moo58fniYcABVjRAkE4BRn5rac73KVqLgJ5y25BWTJgn",
  "key28": "3nSke4a4eGhhw9hX4qPxJEZbmgeQtCcWFf2rhMkh1YVdaKw88MiinpQj8eN7g3xyApaLpijgnVZSJDmu9ype7gvL",
  "key29": "5Gz1GFRBohEs4WfhH3H7CWv8yohdXCxauYFVdM21L39dJL11dz7KZyRrsBkeDS1LRrgCJzea7S5xr1FnejmfPjfg",
  "key30": "5VdbSv3V4Eu76SGCBib7PEsk5joehRSsYx22j9aLqgMaacqZTc5T9xS1GbCS7UVh5aheJ4r74rixNZC4L48zxzKS",
  "key31": "KkqUqjyhWJzoGb83vJHD2hrY48G1CccV3hDwbPnCEcvRuk33gXnpiLnePEtjDMv1xyFdhymbCVf1g19qQDvniU8"
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
