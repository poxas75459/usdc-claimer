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
    "3VcDcuoSbb2HimcYH4nWSyJ3851MnRSoSMigfFZNNNomBjBACJGfPknsLjMBK73MdMjic2HDE4fessW8wBfLfQrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jzz7eXRLEiufPRF1jMdBDKGsRb29tMbdRBri89ZmyGC4Vsb8WasTE5gdn3U75XnMQkPty9VH1WmCjbboFc9RDLk",
  "key1": "4AaSoCgPWymiX9umEX4ykxYfc1ZFJtrhZGUrrEHktNU8wEtpDcJLEBJvUe83vzvohzK8H1hFAoQJs4qcmqquo2H",
  "key2": "PrCENNKL7vBCzx1sjGJAZdTpCrAhWWCPL4efp9AyNbG8xiM24DJZbifrEJ38A2wEi5E5s3kpxnvjWmS6gfBiNsG",
  "key3": "2nQ9iXig8wBvtLTfSRrpW3thiEytYEXqPhm2aKqRJvh185YJqtjYWfaEj3VWwk9xTQgMyacocetVzxu85mjuxNsX",
  "key4": "55R9vL2fgzhLV2mzrgwjcFnt71XsHHqyeyZMA4gLjpufA5zYbX6ZeD5eKHjfFJ9xzgPBfj7X7sUs5m3Pn5HYoDJ1",
  "key5": "5v1XhwJ5J7LhVp58WUv3DsKWZv4UxPsKb4KTUmp3HFGvXvSxVXFvo32k2sqyyrNrLgm2Q9nS2aPydJ3PrbCTdn4X",
  "key6": "2rHnFehCoyHNe7AvLZ9Xcw2QQU8LjAUbDnKSR5ZgJuMHvy8Z3PxSr1sWxs1Z5uZGbm61zeaZU5rNirSWkfFMphDb",
  "key7": "Y92P2BwG4YVcjdPifFu5v2AbyaSQ4bqKpHYb6Ewc2tdN13fswreMNFL8ShkcrxprEyMCWg5pyyeiYLt3bWLWesn",
  "key8": "5Kr6cfowFT8BrravjYud9QYoXr4Sb4AuyZxiexefRC5V6cyYdSWdAbaFjwCH3kCMVGg1yEUmFZC8QXa5vVqj3LbF",
  "key9": "67oHzEasurXacdmMqqL2uTJ6yU8pRXn5kEDi6jqLM77qiGzgskRjngw9pQmGqrchx5FMRB2ZexirA2fRXtoHwaXc",
  "key10": "26XV12kV4HHvfxYSkCKhxiaNro9hZFgs5k5pVhQVfHEK8zX1fsJWeQbjYVfW9fRMobzfkT9FzSUGSiZFZz1m7uvx",
  "key11": "5DUcEVcB9X1TWqv7RsqaZ7QfRjoNfJhj1gBLC25UZQNRvsMdbUG8sDFHSYdPMsRvoPDgH81bTrw7s21jX1DeJuNY",
  "key12": "q8c4AvmJAdf8czGhdVGj4GkUmpZoisuQYnTPLTxweG86cedVzaMbhRdaijyVVaB17vhpmkcbDuYVy26tF7KtGG4",
  "key13": "qG6jMKKXEd11snim35VD11QLVQrCbk31Cdbn43b1fYFyM8rQeayT2T51sJJ5DLNWEkErnsREgbfKPL1i5pxnwBY",
  "key14": "619dCnED8kpc4yryh3gQSe8HmVucptb6cNTXwMtaBNg9uGZCaT3YhWP6czT1kWaw62eRRqPpmLSvistpyMeT14Qx",
  "key15": "5W5uiySoQDmpRsNjZn9LoaPQYHhGnhP76t8ZX7xsXXT4PqLowLFwdMrZPa6sPHZqv8dapFyTE77ayywhuGA6FbW7",
  "key16": "5YFTBLbzzpY9NHgBY5JrKNxvxz7HydisegbxiYbuAonyU7zCEVkU4hBn1rdraP2MMRG6EtgNtTm22nw4Mnhb61xA",
  "key17": "3PjtyHXgBi3WqLkx1dguQsD6gjuKptMDV4jgXFSbwprF2PJ7QyXKr7vC79C8f9i6x5WVURLfHuRVVTaU339PxRhj",
  "key18": "5QPpBdoucQKrb7DkppEQf1maEMCacqwumf7PhJDmEZtH2yk1tco9vgwHRGBxNSJKtxbCFDaP7N47sXKQXj6iU5yx",
  "key19": "ddYAbPLfdTPLBJh1n8VNdTuU1QzbCEEFuThU6D5oVKeMNr4b7huei826Mvs3N96AhioEKmU8tCqKMxUDg21xRN4",
  "key20": "23csgF36FK3sR2LhyJ9b3CbKVYvcHW5wtFXbftuEe7ZQU7VxRfRy4xfbzbC7LUxyvAGWDonM5prhim7fR4QBs9QZ",
  "key21": "3fWhDJ5ZzsDL7KpEoFUnDsrB4BvrWDnt38hY6hcohKUZKdzQdo6HFTJTPiQ9mBc47qffKnXhyBTn7L3CLcmrCDwf",
  "key22": "P2nDcYNLpWhwSeq4CiL32NCN1Zmr78F6f9Jxsxp1Zqj4of8a2cHXRg7TVWkXH4BEym5G3jJ8aoPB9nvVotvDhPu",
  "key23": "3gjtaCoAZt8GExA26ERk3XQ6omN4JXCFo53oWvebLVH2Ub5FnYEGFSZwkjwNZCaV5RqLm3YqTvaaGb3rxD7ztdeY",
  "key24": "2g7ePAUc1SbqD8MTi3v2Qy58gLX7FNBAU1MR1HwyCcq4vHQygHgXvXusncRpuzc4wbkKh4dB6LwRj7sQNLNeFe23",
  "key25": "4dDxGssrvJNoRVV8Coh7HRJTrCctu151YUhiyiTTMZupdCaFJE1scPAE6Zuh9voJHTw372S2APVjEZMBQDoV9XSy",
  "key26": "4fSkDTUM1NWvzAxWFQdNjzboGBrF8s7j32KBqZg9nqSBFXZQPf9mJVT6UPyU7x2AkMMiZ3cSaGhTD7MtEqvqmSv1",
  "key27": "4YVA31HbDXU5BXEMdtXWmLJtkkDvfREMKtobuh7Xq876dSg26nKUqgFiGigXhBmF5RRWffo7sJo1qRt4fcSnXBZC",
  "key28": "2V3HGrXPBQ3cPZEmQ2srHK1Fud1z22zGnyB8ehM44ByUKeTfnbedKdXsoruaMRJsaSbewpd2VZ3e3Rc5SkPhiSFG",
  "key29": "4d8V7SXGRzf4ed4pU7YPGHKpPvwr4haBtSYz88EQcqbPKUEcapxggfWxaDTd1TWnBnVVPpFWNMurVvBTJd1B7GMv",
  "key30": "5HWTiC3z9nfZzDcRiaDNzTmNX658yd1YUWL25xzKe2PxxVm61fhB6nn9yGx37BDwhMrCr4YMGPufhqAsPGdRRq92",
  "key31": "2MjbXa5Sxa2dNKSQH21Zqm6kEJwgVeP7M9B5KKHFjST2DbDUNgbUTCR3phdXXdytjjn4LpxoktrjXE8ArHf63UaA",
  "key32": "3uxwsr4n5SuYmbZ2g3NX8gui1UihTY3YpomSrzSPsmFicrQjHQy4uhwGQnTPW5FZav7LkVh4iLzV6Uce7ZQvzuLN",
  "key33": "3RbkvEt6fNmKtSRutx1J5yYRr722dbvL7jFVe24n9A4Xsb1L7UkWE2cRcHNagLvB12Nj6P8VAWhsh7C1A57vkPZY",
  "key34": "521ozPuSGLgbeST6ur6wkvrPb6C1vUpT11UKGQF1rnVJSSignvUTJtJyGSi6Qf5tys9W9uh77dZ2rnJQQcNBJJUq",
  "key35": "5ELxfZ4hqpShuUWNBdKnjfV4HUn6g18w26mH8GztzDWFyMigAXesBAic9EZRpqadMtuTECGvFnpn6pozAZh4QMHy",
  "key36": "2hm5xdfquRJwRFqWg8Tr5vcRyh5vULKEwXdhb7DpYQAXJtU8jSrLcpGo2vYWBScZ5i7VA1dkjFDdsmofeyma33cZ",
  "key37": "2bkoW4bhKhJSk2Enj7BkM6NKHBnkVvL5Mra3CyakVSdXvFGHRDoakqt9gv7XfLhDojMuvkkK8ZAQLppsHzdcyNyk",
  "key38": "3yKpkcooVraAnG3SRE3Wr4PKgXvB5ZqePnkNuZXBXh7PwhKy3UZGyz8ZDHC8JRQmKcEVojdKxrxp7Boo7W6hrska"
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
