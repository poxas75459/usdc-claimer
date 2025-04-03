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
    "3YuWrvdwWq1XpweGXsz4RVQ8y7a9HTcbEx8pVdHW1FC3UEiD4YFJBQUi8U7mozzEVpqHawHMWX7gs8xVPeSEywbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TBKL9fZctLHyUgpaq6KcdEQVSDJe2P65trndH3hba2LAz7RcSETXT3ESCirsvgxd5mgQveDx9imF551xnCq1Dqt",
  "key1": "4LGF3XffK1aXGYmjCaGa2oYSJwHCgS7ycC6rJ26EjQUqKF9QEHfDSNq9WAkaeLNGDgoeCYA6nTn9N2AnfJWuWbJW",
  "key2": "sxvr8NFgktzX91yupc7mJjbdbDExWV16E6rCiFZDVvzgtp7evKQGHVsLgTp35nmeq6HeQtXemF7fG1WpQazyQR6",
  "key3": "2FysmAc45uJkYCWu2s3czGfWP6s34NJdiFpQsSTsjvA67BCen1yjSRubENb2DTrGjaJMwbQzi9S46D3MscCP1UDL",
  "key4": "4WfrCN1KYY5JMdKFfPupzhYSXKP9npJhv7EGVnPLSYf9z1niDU5nsofjWmkeVtpovb4yYBP7PJoMBFsfcKyi4tMS",
  "key5": "2mn1mUSC6JX7Wvt7EBWs45qgd9eGRA7ftKGJyy1bW54jr2MabKkFiLdnFwJbviuzEKZV6B55erexAJcbM52ZWnej",
  "key6": "4RmJFA8aQDruKri7qV7icipB5r74jpSV6zLrwbRyeNVhF5wxdZBg2i3h2edkuHv348pU96Kf9w1GG8RUQLzkpkwS",
  "key7": "45y3TrK7PDNXfA1P2RfUprh8nv8Gi1BArwpLFMrkYZoBsNFpPbzf3DMfrtT3wdpCd9x23Qbx92G1Daj4ky7xi28o",
  "key8": "4Dp8tCvkuzzU9B6iHoa3yQNHvKkfUm7XJQ9NqoW2s4XVF5Z7vSFw6WJNufZhRYcpz6SGzFk5vtRWDLVw6RfSXtfp",
  "key9": "rysHkWz1A17BSqUV4SeH3fo4dHgrzN8UJB8kZzZWnU4ZjDDESBjHYkHjxtJ3nFWWUVTtoPwWQbsAyDMYgkxSHiy",
  "key10": "gPX1XJonxBNEbQ8NyNp8tHrTrJ8MHyKqwxC11RBpnxUAGT2vJ6nofYTLya4SPPqNbqZd3VpCURqAqsiMwEv3yCb",
  "key11": "5zWkuNdvRjJYBZQwk5smS7HQh4cqL7VeoF1B7xj177ZsgEtzYLpj8cTNSh1W4X8967eU6v6KKe15HCETYJfwZhZ8",
  "key12": "ouiuLtk1sRoE1qMJXwHogwHvTR3MnLwpAr3mRQmQudvJmtb96TB5k17RcyC59kFh6r8AYEB1CyFGn5t3ijKuWL7",
  "key13": "4HoiRRj9FDs3m4UcsHasUfcxsh57vMmdT3YNzNXrgGCfNkT9XbyWAHHSsrSziGXJYMSGxwByZpRb8WMUdhzhE8Tj",
  "key14": "2DtkcQxjDtH7q9uLHFixC1ZeQ8C5ghSAtDDKBAv78qGQyTxY11JCt1NsycSj7xwsxjmvbaUeSsn95zkrkQpx812b",
  "key15": "47tq5ex9vSPeseDzkq69moLZdQ6Cu2ev8kHhJPxakRzkkLDoUkujUnKKnHmtcxnqqJ75J7z44i1Vy89xsmza8jqW",
  "key16": "g1vR5xuHR2wSWMnYoQ4bP6y3pEdR9Z5DwPp55kH2SmJ3Gc9ZBrPk5BAYYAViwv4Un4AdVdtywdLA2B7wtozrynf",
  "key17": "5TuDUyX95BDsNJCzA8xQHBH7LbABbnApuNaR7pzp9wmyXc6F425L8pe95Y8Wugjgu9SEnUaUyokLDxr74SbBwRxM",
  "key18": "5WZEdmzFZsyuuNRv1pcz49UaS3aGbKZcrWnpo2ZkkY1bte3TQqkJHZTccCufn1VifuFErx6o18vzgPEUievnyivY",
  "key19": "4NCgR57ePoyufCQyqF4UAP4vn8t7jWL5hwqx4SDUMMyw7A7DTnJExCGMBcXZqsxn9jdwuVsZu3XcBZ42NcxCDxGj",
  "key20": "3oWWK6a75tB6q4JzjNeDUSTSLhXcZKvirjdHXKpcQCj18J1Y3fiUbiaSECgMxyEdjpT1eRXCmepLp4AfMTWahu34",
  "key21": "3zwZ8cDCdE8ouR3EcFPfif9ZMdUaA4BY88266NaensCfB7haBQLKruear9A9uP1JG5BTuYcYRLPHZVXbXozVb3hd",
  "key22": "2cnC6WfpniNDRe2niFowQP2vmaGSuYxaQ3ww6UG6bnhcSuUKmzVaDreLZdPukcq3kzegdMG5Wid6zRj5mwcxpebx",
  "key23": "DF9r4ofGS5qsGEsu78XRWKtiTRZDmdmzFwvF4hXS9GW6wne8XkKJQSkwypD7Bdni9yzynQdZEzANJv55iEDWQ5h",
  "key24": "5QBbvYHd34dzAz183PvGsdpGzNsepAKbcAr7pzfukhJre78mTUqpjRX2tjrTsFddpyEsBKmKjVYje7veEtF2AKdC",
  "key25": "2FxHAt3PTKqUEoJkw255Tg9GWFwCpA1ft9WNmmdqjirqUPSEdgKbDEp7g4HQDPZ2hsKwAivGtuKXsFVXVQZG73Am",
  "key26": "SEoo1KxXtRZpu9DkdCaaQKMVzRZUvQz7gL7k2ePGmuLaz4M4Jq5Hi6KyXseZ2odvzLLM2JbsYwwURMXd6K9ckuN",
  "key27": "6wx9WfCFXQVp5rtfsp87mbNXppLPb3tEHUNrd5eXjyrgKdjdu8CBxUY7oNnvV1Z1UKsjqeSnh6iwhwTWyEAUQQk",
  "key28": "4Caxc2ZoRCLTR2QkwQUtn4CdNQareNVZGabTXrXj8iAYtrBALDWrxHXf6N7uvnTGdjPshdehYLXLSHSjC1ZGBLut",
  "key29": "2oEQa6P8by8J7AHACbRFkiG8Qce5Ns6dfs8Ngqyxkx5VjQ54sYdgL5D7bSWxWDu3fPS89F5tG3AkNz3sAf9KJTp6",
  "key30": "3gQqpP74YTHGr2a33BrxFoWzJeCwQ5bQFU9b6zL5C4JoKThU2JvyFvyCHUptsiErMyR3TqnTFGyYBJy3k8Rc2bu9",
  "key31": "58dRqGPRiqph7udXTJqbHC5dgM5tdwGCK9cqP7GtdqwqpMJYHPQy2bwjoQacKaN37kZQ2zFm76GuzuGnpNsuMisU",
  "key32": "3WcWMBf1yVziYLLazUjELYesKGazM5PySiYz8SMNEkKFvJqRiLcH29o8bu1k1c46vB4TY77tPd8n2pJkLk6g993h",
  "key33": "6RYTGPed7Vp288EhJ2Rf3TkaGzHAmUDwaQKhGWEYEHk9n4tS1v5Y5pHDfJSEtv1vTPG9MT3zRXLDRGNb5Nxan2P",
  "key34": "wJRqHdgJXWAEtdnmryZfYX2jek4ZtYC8igVxM935N9K4HCzSFCzmuTPmqScjyucoaH1BeA4Z8BeTbKKiazEUyga",
  "key35": "5vWEbvE5vNg2822BJwGMRXVucQ8kbwfwWNkVypNQEefbiQTi6LB8tBQeDUBqsW1i9dHcxZqWUdb9aFF7L7fbFB8e",
  "key36": "3Hipkrp4yDhCkJH5QaW1eyS3J4Y3ZWYPEURiVG1LMQx8WT1KeHhcJHimf3Br7sqiZqTXHEMeGs2hRma8PLxftGBc",
  "key37": "zC5UGUGjSBZJqZCAAsaH5TD7SxhRrVjqnx8L81p3npvcbdoZbc9ScWRNGHnuZCUt6FmR7JDwEqMSxhaPuTVyRc1",
  "key38": "2Cw1hKrfkKCjeLVcXp7cpUAKwnwnxeHYPgKercgaPgAWqWao82s4PUCAwkAs31Q6ULePbYiuoh5827ojQADKUyeo",
  "key39": "wvK2MBLbnbt4kVxbQdUgYaH5ZSDhERjfhikYcguiddJAiSuFG6HGG61YH9QeBMi55Ce11esGcKPHgoC69DdbQXi",
  "key40": "2cuedbrQ2zYhKhD4QjFttcMCmjcnZGnHK4WWPN7Rv3Ft7yerFzC9NWrtruHFpfHSxj9sLYBuRbFRN9CXaLWWFsDL",
  "key41": "489G7YZQ2hPzybcAN9NaHEQF7CdozxYwy2zATZok57Qw78MQmeLQ4UErZoNWbdaa4gCTAtTxHMoDxX5kdQXVMpDR",
  "key42": "62FXfd9XbsiiDQeoK1q3K7DeuTeuMnS9h5czdVV7eoBe79j2ovgjrqnTHHdspW7GmzUtWMPvZDsAimaHBobKiVhY",
  "key43": "F6U7BdNyrH6sEJmfGBktnGotuCzevAXu221wHKR9fog99bzRsjzoTkLArBSbE6F8NSdtrmhPgMZdGNsF9up7kE6",
  "key44": "2RXVo3gsCoyC3cqNCiPCRkCvRagQMhb12VPVDQvGntdT1KEpWegfSxPwnACyjoK2CSBGdVrYd3ok3jWi6Q8famPD",
  "key45": "9XCqX9gB9uS3f2AgvwCSndNeFaRSS4pL4RqUDdPyp64UmBgj6W48KmFbT2s8gYuVdz5XbBNhMrsPDPSfR8q15f8",
  "key46": "zj1xrqmmT4aKjyt8AbpjsPLfcBbDcoJk4SUV83PJNZSdKxtMxTFMAsPkU8vvVWM7w9EpbNcauxuFUHPX5Xr918H",
  "key47": "5AudEn14vE2f5nkX5zL2p4sQMhpuf9oQkfFZLwPkbaJYt7U7BAoXrEDSChmyQd5d7hASn6f6ipCt7dc3uboGcke9",
  "key48": "3kjpy42r35w9bNg1hkVi93xPU3GUWBsXNi8z3TkAmpYeiMKmHgJfZFushGnbAbuP5T6PhJKjbJZ3qsjcWhAg8zjN",
  "key49": "4fGyABPhW39d8geF3H2Q7cTr1Wcnq6Yad8KWmtY6tq4i8RoQC8Cg8YX2TPLCnTcmNrrEqyHHAmfBCixEXkiJGYGv"
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
