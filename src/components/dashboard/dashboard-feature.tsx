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
    "3eybNKPFiJsCk4HpMpQBNYoi3372a59Qa4A6fL8o1SHC5oy22xEN7zvUsEQzHUGdZJxvvmgkPqNfiYMZfng6ohiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qeuxBRjTPh7E8SVFCFJXCSdSXjLQUgNyNDRJnUmExVbYrvfVoqgpG6n7iNrUpRHti6imF1GL8N1rBaAM48eiETs",
  "key1": "3tQ4aqi6xXuo44Gd3DihubqnwigJNbVeFfU2DsYBH51JWEV9ng9TosrmzjFBj98CUyEUhNHasMf4HdEP5qucWa4F",
  "key2": "52C1Z1hjpxcHuSugoTNP5wtriNuXFYHNS8VhejmTYzMi8gxjRumFouaPp1ez3BGkrgtGeGwT7DE4Any7ivZvN6Jz",
  "key3": "P75HPbpHoGfZnG4hFyH5DrztDhXDkNBMm4MYyNjjGRqccSzN2UirZzVCZiZj5z7xuTbZh68jmkMJWdhj8AdJxGs",
  "key4": "3P6AkmmchoQ1wuwsxsuqdmY93gYGZvt3AdB8i4dGtgQxGg5w72ebc8t1BiWZdCbibVc431qEm3CwsyUz6FZ3Co1V",
  "key5": "rqLM6uJHsNWJnAUMtTGJjKwc9x1H2M1Kvx5CZKmj6TAfDqmDKsL1LBDs7iEGhjEcZ7Bq5vqgKXeTcq92oVqahd8",
  "key6": "aUNWJX2ifxrAQdQi9CtDELwb6XegLEYfGCoVLG665UDAfcGTvWjyRc33Dy1JS5uZLGdvmeYpncNkvhtvoKrUqqC",
  "key7": "2uGjU84xuk1N5rafKQGBHkobNkvtfaJUyYjo5sNmMFcHe1SKYwgFaJrATXSW4N8bkamDvrNATQTDQfNkgiiqMujx",
  "key8": "23mUfUu1DL4TWoi2fXSDDB6gTs7zpLS7kBzxVuT24jFtQDPnrgeR5i2qsCYRFxqSx9dnv5FahRBUZaMzK1AHNFAz",
  "key9": "24JdVNeu4CJMHyzf78y8AwuU4xqgzRtCxh3WoVMXw62bzcNKXoyn6k9LsNhzyf446fhKBKbLcBadDMT4iNTwoYRV",
  "key10": "5zeKUY8CPAb9BS5mhVGgiiRgBSuJzagHZ1YmNUxcdfPaHuyeYXBQrbscRVRMiKZCWCXUH7SmzJKmPjLk6HSbSewn",
  "key11": "Paaziy64bAfLTsN2DwSdAwYjZ5QazG8gPKdSzmPFRvqcLH5hEUVsebYWByboUf5RLTwEejWJAtUw1BwrYpyJXCt",
  "key12": "2KpbxVBLGNAHXT5LnsT1eFsDePYsF3B1cjSKTHt3GdWf9eto2o8n82kXTb8XtSUiTbX5YH6aK4FGz4ks4fksY7E",
  "key13": "5juCWSvZrRRFo5cVPRvDDwn77S7g5kDmMJv855PvAv3VpK2P8QdtF2YbiNhuFWa7aXGcjmGxtNkby1SMwBAN48V8",
  "key14": "24cEW81NB1LWdnEAUPPz3iKes9nbEtpQyd6RB8cPAhNYQ51aLH2V546zXjktQigUKJi6RUv9bcEWZYJFq5Nmjc9s",
  "key15": "5mPCztPdEaKERTk3UQ7NKB5gQW8oBNzU1jKthrxyaNJHpTDG3ua16Ri41kEyoFMAXuwnuTqQB6oQCom9bCYC5M6e",
  "key16": "4xj9pEkT158DLMbbeFs5vKmcNFkvmWbdDKW8GgvZoHmq6yQCD2VUHRzLRZBXJ9bjG73UuTnnCcytfDwGgoVsH3cV",
  "key17": "s2Txm3bH7hNRJ95ytApuaX8eZHmKoA2uDxkzBjFVPE2ApbAsvQXGcmqTxCryzqhJF6U1rDU9eBZjKssp4GkFquh",
  "key18": "5mogiqA5waEjPxhY1SWHk5E94WHS5QxxZcpFVuhKXE16CRnRPSmqJvdSNMfpeZxVs6D3S2AbLxixgR7nTyeRApVQ",
  "key19": "5fMZPithW9m2DwJYVs2z5upGzxvL478LNcuJT3Eat3MLKMUkkXrExUWjU8jCw7JzEyJoTAQihMmcGqDQu5yRSPJe",
  "key20": "4EFYDLZGrVddo7vhav8hKFR1AcBwy5vQrRYAcrkeNmHS9C5SzZypjHH3ERLBk68RK38dE3p33i8T66G69QYMBk1f",
  "key21": "RuP78nn5kMZNwXEkxmdCJwxEJ9TKQ4MUCspVjKQ6WaoaogAxB6xL617KVktfMHqrPNNLTT6LVn6Mj8zfu3tMM3s",
  "key22": "hYzByPG3n4NACEwrMXXvb5j1ppvANx8SC73YRUYceK4aHgx9ZVHJHUR9wUJhQRU5rKbpaV1CsVoGbw16ZTNAa6C",
  "key23": "5tiradDsnBowx2u25r91Gui3QzCkkvD9ahqukkkWVeLKSyuzyr9eccPRr7vuf2bq8DBKNtvFuxB1yWyLRSyYtkF2",
  "key24": "r4obyhs7JFm2xLRPPoBEZVC7ih6dbQQC3A2KCYkwCPhaTnuSE15KYdWZZxgwDJV9H3QmFEmSLCthc77URgWSAHo",
  "key25": "AGRoMeqDZN8YMR7G2cbKW1JzgNBERsEW44K6nDpjYK8ESuNxkhQC52iTcGjgm2Gf9pEyDabFvd4ACr3zqrfMCuc",
  "key26": "32kJCn9QHjQT589ua9CX4qML2BKUYB82yiJEhPZoLJj8ysHRxDJRttyWUu7qkhBvhWJLPmGVXpa4oWkJx6xAqsXQ",
  "key27": "ts41ikLfeRDaxyL38XqVepUPWth6rEg4Ygvn2sY1EvgA3CcGCGYYJ56R9wLXR839yubJMFaRBfy7WQnUBtRAXqq",
  "key28": "3V4p3pC2URtgZPZ93CiUFyXc1nzdaq5qonRAmKyf3R85ZeKKxtBn7Rjwd4HW27As6yfeKy7FMtFzNUY7ZKbjs4ZW",
  "key29": "2GiFCQHeaPWMK4VhAwvrAdrBvjDK6PZ7TpmoqLHvsM8hY4eZqVcYgDi4CCaEAGJHU1syK9QnGk9s1Nfun4gCvpwK",
  "key30": "5kvCRZDRRkd3Pyc6tYNt4WpGgxy3LEAdWdgnfTtrVRdZfUVR2Z5yEd5YLvoTfWJiUSg2FTWbTmW5KMUGMwTbctLV",
  "key31": "hjx2X14wtMDRFYCCY2JfdaPqsfmHj2EKtK2M5AQoGcNrx8QFNFh9b68zNMPYXBciGAkksQXa5TrmRKHCLNR4vT9",
  "key32": "3DhE9b3AG9eTmQZJ4uRZQGEqSvrvEmzdRVZoFnPHu3Jy3VAdDNtbnV5B5BUiBAJZsx66jNzuH8ZTDf7DCzReGugJ",
  "key33": "AV7y1pRHnrgNrCHRLtVy2gthqYrSDmevL6ninLgHaJwp8bG8LVPpjq6vRQXogBRsDCXBeAdm2TJSosxtdfXRirj",
  "key34": "3PnLtf58wFUWtW9KtWraGkiVYHhLQUu68hcPvQBsD9z9vGcC4ijH3MVduhgfewaCX9BJvEnGWAbteDhUYo8XvyAR",
  "key35": "3GEuFBtHe2TnpVD7yVXGAVJm54qtJLwnYmB3JbYJQbHMz1YAAKik744feNMQ6PPtddb2heNZNS1Q6pqZBFz8VK1b"
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
