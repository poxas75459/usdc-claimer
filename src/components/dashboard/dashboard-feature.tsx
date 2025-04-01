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
    "2AKdzbhF3FAJghC7QAZQVoxgkmhQ4Unhbx7h7q5gpJeZqLLqd6r2e4fsw3VHRCLx1rcXGBYTUyQz4uE43syaru77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51wcxHUbotjzDAaMuZWaLeWXCL6ez3gbhZmZ4cnThSZNhCJujU3GgcX9yLhGvmJFQrMebYxJsGYKgaZfRSTXNVb3",
  "key1": "miLXgXykp9m4uEMDR2asSdsxBxDyhMitWANn4FswinMWqQpqRZ8UG7pFgWTcroPVvTseZzF8oHbph2L2SosQScm",
  "key2": "21QhGxmLfKxnU1TUBmcmZwFgkhGxJKH8xfyDRxKAUFu7v7tFBpxt5KtLsX52bJinqAnvJcoyEVTN8M4ysGTvKkns",
  "key3": "2YqofDx4RmFsDZeBGnCTmSCGYzUQ257xt4XqEXm9SfW47wQ19wBV3h4ACVzwfAtevybMLcxHCck8NoMMu46k6FuN",
  "key4": "48SFwZ9CLamPkDMfb1iZmxzftLJX6qseF5F9ohV4Jsh2GMRimsyaWnWz574pEATMA27PxYJhKoj3FN62Kwmbukv7",
  "key5": "Xpw5A1XkLCzcZdJDP9d7RctaziFjkPEcTFauqVvRpgPtj1FJVG115iar99NYyRykbVF3Jvqu3NT9tFfWECH21bZ",
  "key6": "3Mbk7apmZibpEYMu4URtsFyBUNmGtust53xYMtyCz3yUrTAntiu6DRUjDpv6pUdjUKDyexDx1oRkxMN34H2B9dwi",
  "key7": "47S1enDDwN3LEjacjgVobSrgbM5Q4iGrKhkYcKQU5uGHeqZfxxUefNtraVZB9zqByK2SXx1v4pYjWRvwZGzucxVV",
  "key8": "rMwdKY1CvpdFnsT2uGdQ1uaZXhTomMcYg7Mdcyn32AiPB3QY6ViVA9CxNVcxoZoLHpxsJRq86VvdokWenY14Bnq",
  "key9": "5ZE77GY2bHTABkdBDL8fnkhQsdCfiRg3HEUswWL39zsUuAZ2ba9DeQEx1a4hfPZBwT5Wk8XjrHdauXp6Cemr3aJP",
  "key10": "33NiC4KFuQ35LVpXYA1eD9i65LZkyesTPhFR9Nc51QEDfSv8M4iLWrUEiWeqZbd9F3gFvfNiqosEDCw5MZruY3oM",
  "key11": "3z8KmgsB9kWKA2UYzUtLQvCAfHqrTVLUNTWY2mBe6bY9XRn2JfRPkEmuZf6nxCWSgyYyosgYZH58VaRw6WogMWoR",
  "key12": "3FXQwwK1PdiGZ13194rvg4c8SgRYr6w9hSsC23EBjp8Xy66nNbYntmXmXSZyrYvB1sRHusqPcTpMVfaTVprsxuef",
  "key13": "4Hp8SMBSSUqXWkoK2eBgs2mAQUB2Tg3rRtxsyDFpdAgJEMsoTkCQ1uAy4HzYJp7YnyBVkH6zBwaPWKcVfMnsU1cJ",
  "key14": "58ujwACGr4UHTYRLHQSAMcXbtcqxroT92fT6EH6EZubmfBikgkXHFshdxuamswmoaE6aN2CNcyZZja7GGB6rNevj",
  "key15": "cP1avxdkztyb29LMVfSY7HEd2p97h4F3XGYHurKCyc5mVf4s1mmyvZitrJgsE4kNbZxjpLZEpi9x5KbfowStuuK",
  "key16": "5FA3gPSvge2qubDHw9e3iZM7TEpki8q6LeroS9kkJxtqqs9ABUzVVdLh8idJFSKaUcp1rNfG8T9x5L5drmZrF23p",
  "key17": "3nJ8mheKTt42zAByLm4n7yHLaaXs38iDejMdvv11zgBoDUi63VcB6LE28zaW1XEK1Nin39e1h8gTmpx7xMLC7r9G",
  "key18": "33ycA2HyZrHoMyPY88xD5rLqA2oAcdEnXyAPNLVwKRpDAakbCNpeqUUMtAj4SbXkxJfcR64yuz6VLoqxP2KTEMh6",
  "key19": "38CGcw13ZrRLhVsL452c45NhFCQCo3V3FGHMkhFbcouk91FoyCLxyeMwZ9ako6b3YWEgfSfUcapGxgYTiUVQbH7J",
  "key20": "2rw4grw6CXNYze6zmPM1Y8pzNaWpvUxNFwVWfWR8MDVVGP8zwshSDVki85vQ2HJcpeoWko4eTkDSS17TMz6jniA8",
  "key21": "QroXhGaHxX8V9Q1EiwELjyT2Nj6yXpuafgdynm2LftbSWTBfMx3DBo8rKFkj5zUkGeuTqv8vtCqxjPZLdyR99WZ",
  "key22": "5Vn3cbKd5sWqEYfoiyUfbjY8w38cYaVX9YzHEDznwhZriTNxC5gigr3pbR7wJPS1Xjajdft6ksGAK73poEA4iYvp",
  "key23": "4DA7Kot6esbxnpQbhBq7LYxf9uUZJ673P2vzEsprH9Z1YRNGRrNttKxjfrWBVtxfHLvz5a9M3xGZdHFkUKTGTTNi",
  "key24": "5SePG2NECTMYsod1GfDPauaEpnnjkUi11KMTHAG5Mn7TqHsuCips3xcGabCmMJiMUFJ6vPB7QmyX5EqWabwbQcRb",
  "key25": "2oNj5yhJcRAfpFKLWpn3moVhuUfrVNbfHGZNtr27BXW1SMKU9qCRWSmq4BdK2hBoTT1N9tzTCVfmRTgRTHXnz6mY",
  "key26": "3zJSg8t74GSNN7sKYbw1V3kHWNLaf53wresWjEhT5H2aziYC1DvBgNqRNzegMEJJhPLWSAszckQrhXMzqexVQF2m",
  "key27": "2HNRtAUmUpFCUaUaygeN5MjKsishe1WMfBeqBh1MLWroqdUsNLivegJH7xLsSoFERzVbB6HFocMPxQx3cfzKJaLH",
  "key28": "2UeuGvjjQRvM518KvrZ76LiFS42Tir9ju7B2Eqp43yZEJBnW5rFABbV7BUF672BQQS1X6MV5SsCpev9nc6HSqkXC",
  "key29": "kp6ZBorn6o6KFXeNQ8kMAB2S6FseBGdFtAuSskozAeqGK6pLxN9d4jyRk1x8d4BCvxrWqLhqJeRndj7vr7tmciH",
  "key30": "3BQaJPmfwyXNrH8dwWa9M81HVUsZwNmUKqSHzUwJRn6LG3TwBPsRDDmMmizMt9uHDzXZpJZLdWWqUGE9T2Jvu2UJ",
  "key31": "Y7bc7QiZKLJYpdehDN9qWVsCKDYbr4s1rAvJZ26iM7SiyA4xGW6ZuvW4aNYU2UUJSFSdp5QRXg37JWiyKQjnDBS",
  "key32": "5Q8Jc4y8bwtFurvvTGqcAJ6cqbLHe9tHojsgXAypn4T1CDbha2gEdCwGj7GfXWzp49xWMhsWLt3dVMvooY9RVVu6"
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
