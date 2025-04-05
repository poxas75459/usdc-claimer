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
    "5umyYyGwYFzMTAWYPQq8htLHh5FDS24V9NkGrhSQ2bynJBdVNxwUQjUKDwHwdNeKXMdj5bk8XC41H9RDVupniTTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3giw4j2QrCy1V8sJshGUQpfCRvr6Wt3PBRugXVGAZTQUg29qEkyh39Hqr1jbmnSWcJWBsA6jv6Lv9XdkvjEiNvFc",
  "key1": "5BkoSP2Y9BYmNRUR2QNMLLGCHayw9kLgu5ZchNMvEWhFj2pYvusDqrbvwkmeENNejaF6WPez4tCsti9S3xWsrvWB",
  "key2": "3MksDECgxLUmFBCpw2n8At8fu5s6KYkmFanBSq7NzmkcdrzE14PKVo5YuCHjJ8arroSc7Uk85Dk8Dv8FQjQ69G9W",
  "key3": "2rW8SmXL2LdZoLTAtjoq5hwLAf9WQuDxgEVmtmPPnBs9bXBNYf1wCXS7DMSgnA7enRt3dCX27H74onggE87HbE8V",
  "key4": "4KTw4PYSnSmLq3Ltq7eV6N7TbMEhfbao3Qy6znF4PcYj2YXHDFdbrQws6S7Zv9q68RDB31Sgpf7M1szocnGN1W8s",
  "key5": "5TueNREu76bBjJUt3J52uWPGsdHkaCuY6bmhXfvV1EF9YNSU6P3z3m9qFy5iFUWDALxAcVKi7GTqgaLYtC4BLq3M",
  "key6": "D7K6yHkcYFGFq33Fi3xTDtFFuLFJiLmAdABpotXusRzierDRZtRPM9d5CX2qDRnMybmK8XZLKzKCZaQRGftJHJi",
  "key7": "54voT2aqqoRcR4sim9b27erRrsa4pygWMXwS4QPLbJJoVgyUa9GdQqxZPMoQZ71jiAD7xdyWYW3HMvSSfG7XFt4D",
  "key8": "3VEEmwHAeS7QRRKhSMxr8WSt1a7HLSc8sEkfMzoHjZav3zdvxfN1po12gvSrUVmVWutQgUMAdJKHBnyrs62vEPWz",
  "key9": "5Nrb3iqXNCAukpHydLMbU7pnUVaQePXpDR997k387fYfRBi3m176AqwQnqJyPtLNny3aUWKqXHdBzFPgZJu1N64o",
  "key10": "4xS4dHRc5Xcw937Bq2aT5i5gnS8WtoAUgr6rnkhRxyhPCJKXhVFt8jwUzTTp1zHmje3VDKSzwNu8wBoAnp444w6D",
  "key11": "2NPDSnBotKzPgMc9spSLDdgALeU2G3Przo9Db1LDSpBtLeXEKPyMow6dWsWgwZpYRDWtVrmymR9T1XRk6gM4q8ev",
  "key12": "2GyygiDZLPm9zyPiA5GB6aVA3vDPP121mWykMrZvavc7Pj1cUUK7tiBt17VCRk2TUGDtDYnZc5LYJYmmLL2xi2qE",
  "key13": "3rTqKkb4vMwtGLuttUpYnoNYvx5P8YueeAGEcrjMvxGrbAMiUerRb7hqW17DfMTMM9e2UupTyPubQFF4dKCn7SBd",
  "key14": "3maFeYivvc7XjKdUvopXbdZ7GUCwnNuJFGFdguihxVGmLirmibtQk5czrf4rE5kjbHpFkVpL6QeaYEvs6Jx13aJ4",
  "key15": "4YhFQh62srRUYajAunK8dSQSwdia92rrZSbCQktTXxoDsqDRLVe26Yu5kSNVYjErx6o4ogk2LNdYu7a9Co6Pn3J7",
  "key16": "2cE4AN4XVAAVSxZ3GzV7NiQNT6WgZmz1i4newZciDfTMPWKou2rXVqqksB1VB4jdV9A7dRAM69McetMyNJAH5wkR",
  "key17": "3Q3A7rqxVAjCQxWdbpPpZ2poioZBowN3P8GtGWop8fQxgqBWN4hcRy8qkem6AjowNctyvjYPrjEd29Mta1nBmy56",
  "key18": "d6nLeYtyLSy8A4v54Csqz1ByRt1xZMGJoUXnXmMW71TchFCH7KfNJubW12idQchn7CBL8PCRgirDcRpE8gVdQ9D",
  "key19": "2Z6TsvsaTuMd76JUrtn41yHQSyMWgZtUSi1CGVA2hzb7B3N34tdpcdQuLibL9HEVSzvfdKa8yjoYKLWDw8F6WEHb",
  "key20": "3YAXoQd34eahyE2oXGgkC7Ep3GzqPXGXeEa1QmrDJ4mtEhpSdvWXZAu1BCZi4BnRwM4DSqzEd8hNZ9Bax2Mp1hE7",
  "key21": "4C8Cj7GmL93miUboWfFDPis1SiKya61JE394icW4H5zrKfcxZ8WJDyYKYiPQuihjTLyxpBmqDoNrZT8Yfzso2fS4",
  "key22": "1RXPZ3YYe46dxCUV86RJAeyDTBoW7W95pNXiqrMfagkUnoD6A7Jcptfmkf5fwdWGybXcYR1swAwfCtgU8Dboiu9",
  "key23": "5ayR9TkZBRxFjsgrq38nfGfamdg1FL42rsNweDsQp3Rbcfcspk1mSsNG6tZZ7CpP4h5qZJfAW7zDUnVmds62YaoZ",
  "key24": "4gScdfbZFye3xW3tmr9SKuPHkEnXW7y6a1D9UomhCgPMqQ5A7f2fXPrBoJmTVMCwQr711JQyhejyupiKsa4cNoK4",
  "key25": "qQoyZjQsxZUagSfTanHyqdV1Xp5oqbY6Z6yoBpYyWJD5J1N7tjeNu5FTN3f1XWyvZVXFNZA3jNV9JHc8fFAH8tJ",
  "key26": "5SQBYzkA7drpfNB7k21C82bFF3g2U94QjRG1qVJt6ZdMv28iBrzL6uhsGsjj6sxJgCWoqyueUL63B9a7mMb1S3Ch",
  "key27": "Wx3WvuRRVaM62va2sd6L77K9bGSmrsLcsuuo5s5XM8FAXoBh8VpufkV6Jvvaiyp9HxtfoxF7wNBmnHtxSGWdDB2",
  "key28": "m1THzkUAo9HAviHFRL5kcnMYrRFFw8oWsXByC6pSUHbjuUfXa4g7r8R7xhdpg7HWGZmv2uNgNaHz79DnKFDSdUQ",
  "key29": "3vpA3T8hxRadeNKf5bt1XrZ49pbFH7NPJRQTGN1z5hdwQ48hPSXAWt6aVJRi4sdAFDNcx3BR8FM8rzGEi4NNhttM",
  "key30": "3E4SJ5FP3Bm6EcAoADZE5XN9jxMMBeRLHeVW5F5UBfdYMrm3GtDxp9RFMG8FP8ivmLdUqnpvVd3t4i1THd4yyzFH",
  "key31": "33um4viN6Tp2r7KFTzyUgKF6u8qPnpbXSmCB8whToUX3LErYuuWo8sEmKcnkMsxSf6cpR6VfJwurTraoq92yzmd1",
  "key32": "5LNm27tokgwN7fTq8ryAczMsg7TMMbEDiFtE5rdvEh8oDLh1gbnjy64qM1DQiy4rD2o4iDGPBRyFuL3Qd6eBPQEg",
  "key33": "3gZNm1sWenVWt6JKmzUdJ9A3sZPvdnheKLEsq5eoTyy7StXfZTyYpXy8zC7pvT8MaeezpHCWZweFXyxqp7ekxhzV",
  "key34": "5ayxLrirKPnFaLnWqqJ1xhEwH32ueEiuiKR5GiuZG3xLu3pSGa9tNqwJyQpRC5Gz1Nux3dDrUDCinBfkj8UiiU6r",
  "key35": "4EAxBXWcLVQQt8esL8J56uoi5U7ec5JBdt2KFULXy3X9rbXTJw4rwm5sPE1gkUn7JFbhdrYdqijnZoBPL8WSpggd",
  "key36": "5vDFbt7CMsKswJ1tmt88m53a82U22vpaYzAiw5xUNojYyoucNggJ7gXg29hdQa9vfiZsXTFJKLJBU3dZifyk2dpU",
  "key37": "4vxtkbt1SZ8URvXcUf1tWzBsvi6WRBnMcqeJ9uwsVdkTFYMZHqHYcdHiw53HBSfdKRa1dkeSP2pNpYwDPQYbim87",
  "key38": "UDRdGd9prpcQ1Ge6S4szW3a4nap8LZkLH8YCA3Bh35UFfzZFMoLZ9mK23CvhrMov9WwuUkBGfSgCumWiMFdyt4R",
  "key39": "fDNKwqv9AKtw2epZmGUSTJALyD9vvG9gDn4NPvbhofxEqCSqc2hmV7PMaxAxYJhiSpAaqEV125fp29fiYi65AvE",
  "key40": "4UgUdx2N371nNnX9ouoPLufBm8NYbEgdG521UmwdPrbpijM6hbYRF3veUJc1wGdC31yLFSLeSkdxKiSepdtyms2P"
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
