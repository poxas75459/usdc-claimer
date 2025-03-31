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
    "3ockB4UBmbp52pajN9urv7N6oSNQaj6cEG4631j9CNTN5KnVtzCJ4XeehgtpKsZkc4jShT7vY4G9ScdEYh64rx4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yqb77PjHZFWgdnuomdtLsM7DAxAjTWFW8MUui4E7pCMwTyUqxQbVuT2HtGE7Qo9V4X3RdCBDsghsTMUEyaT1bE3",
  "key1": "2NcSYPw1ajVDrjzT94Rd7PMvC1kC9kB67EFWXS75uXDp4G1wtnGRMdUNKXo8J5Xth7s5SG7LJ5WdWe5Bdsuy56JG",
  "key2": "qAeW9y9mjztfAvima9s1L7qEy2gLeBAUPquU9fFM1Xg4RB6rnR8kq66dE7HNLcSLCEybjocxCGk9rWsTKtr7pEh",
  "key3": "29bnmaEyNKefZnjUAxhaBgy8VCc8nwj6E7rMgUZ6YoZJwSBq1YeiqFBnXNLKQPDfmf3uwdrHuP9KZRSEoY9vXoeU",
  "key4": "32mTRPJ12Yw8c3NXNMGhxJxBErjAxQ33ud76qvyf22TStBSYCzbmhFGTuRcx4ofodNCDhkTs4xkk2kcNi5DAhKkm",
  "key5": "5a23TVv3qjrEtsnG479QAcFjGBVVkmQUYwbAbPDWiuubwoaX1GagAJsB7AsQ4kGsmVrZxiibAGsby9XhW5wiriQG",
  "key6": "2PjKCjmZaLMphSJjU1FFea6Xmw5E6UzLToZpR3jauRQACbJi8siy4KJTH6UdCToXe3cmuf5vehLLZ4VKwaadZKFa",
  "key7": "61NLJL3mzFYBjM9qWHUbVTn8LjkEzfTVCMcu3akw6aJpdDEE8VCiQYdkQUmm4n9Ft1TMAC9v68ZCoWxAuoNByuCb",
  "key8": "eg84u6kB33M8fNnEqXNWmp9JoB7YdeQdUYYparTPypaQv7tQ6a3hB8JZJevTuvBAPKEMsTE23RnnY9aPytnKkhf",
  "key9": "8JTKcBL9Nc2PKaPJAJdRoGgU2u2HwAJrzyAjL3VbZhm1RGK1AvxCai2witxb6CCJM2YDMNmgvm44zsTcJfutDFR",
  "key10": "48KUErZRYUZvPRZHxvcDVWMmxFWNXTW8sTXfGd1MsmJ3iSB1NjRBFjbszUfwZ5UaF6MYmujazaKjgazN7TisKvxJ",
  "key11": "4UGTDkuMMFcvvDKvocckj5mqYULLuJBriWs9P6f748vh7RAiq3eStgSbibbMj4LACYUYqsBRYA9wMx4JsBSVowtT",
  "key12": "eykptpXfcyQozXKCfbWivbrAR7vYDrLeL1HRU7yx58P5Ec2R3TFydGD9bBXGG7VR9SyiaaQDvCT2ijr9ijwXTsk",
  "key13": "tdoofknjdoZDn1Y2MecPcq6WGLdJmMbGxiJTffK2zWWh9iej8HxXgynhnRSNtpNSGUFnabdU6UcR3MJEQM1EMvj",
  "key14": "4Qc9P3oScRp3i8ksgumS5cRSeGyu8PV7n9EwkWnxWdCzY6HAcLqYh9wAXLCQ8zm7mC3Q9FzqJsYwvP2YqRhGrzbE",
  "key15": "3WQqbhKLz4YTYMqTn5qfYYUZceDboFmAZJmJNtV5oNPBKv1XsbD2gQ6c2gprK3Gdv34HarYHdaxSUJyNX1TfDm6o",
  "key16": "2fCRDU3AyN81rxYd9syz6hhX4KmGzLuecf8q17WTZioot35SsSKEYot9gp7MtDQGjmrTGZRWSU3JRt2qYWG7xyUC",
  "key17": "XuUorq6HoNDVfVerCB4EY9Hq9xe6N6Ae3rt2zQZmh27ECKdCmCZWJvoNx4CsjtFuk8mRnMhgh3r96wZuU78uanA",
  "key18": "snhfs5QTrBfzyDL8dDKTfjuzxEb37sXvZ4TpF5XJ1CUQRzCqtczoFKmUJpYyYcmGUYhmYwHnbHJhBVe2RSigbs9",
  "key19": "56TmHoK8Za1AREfEHiv3DafiYLdM8VdTNVsm7eh2QkYNn2AMo61dtAJz6xvcJdEKK3wCZosxDMFTteiGJcnA5GBq",
  "key20": "2vhz1sDGmHxxLBn14azSpqoxY2VF1MkFoQDdJpEkZqer7cXuqru6xKBh377s8zbG68GHyNwyZo5J3hpdvFApHVed",
  "key21": "4eKXLkubqBqeL9BcSAgx6KrmEafZi79RTBzqpxRkauT6ecLEYXDW2PHqEUFEPVvQ3CtKpXsHNh1qS1WRyryoCW8f",
  "key22": "3CyWQWFUm7EMdhYFALuoHpR1UTHCBjuUyqpf91J326GcXS5ZY44tEmksjnixxZgSh6mhcN62J2i61c78NYu2oxNm",
  "key23": "TSsBrGopbeYmucZNtYUBYrhn6Ppc93PhV7t5SWJekiQ7syW2KibWceYetbwVnEsxxqshBgjZmdADSwRKeALeELy",
  "key24": "4Tz9uLrLaEYsxyeGpoPZQ2DUHskAguyfBk1K4Ysm87vuy67gj39cTSJzU5WDjXxWrU6qgZvsxR4WpxVy4zg9YEbH",
  "key25": "714LepjAwkhikQC6mXv6M1oSFV7wyhkp9TAYRJ3mQNV4Vw8NArGNxTrYEpkG8BRMj3A8viudpDDuUbMcEh9RzTd",
  "key26": "5b8Pzg2y9EBnnCC46e4HMUBqTBVVkfdXCg1hboj61pjb3hamHbBZ23267cxa4pHhE3A6i8jfcmQbCGgAHaDLYKdc",
  "key27": "2ocqoAfSZiqNe5htyRKmaba3AST9q4hA8hNKg5vpqjChdscMYu1UBmdmbgMnqFiChkAXR5ZBvKW1cVYgNLn3tFgA",
  "key28": "icssUU6Gfn8SPAmhPAfVsz3m2U7jEScDZuB4pgnBk8F9HQh3GyRntwx9FjWRfEfJhT2BduX5qyYwBk9Zvmni1Tr",
  "key29": "3cj5MDcRghY9RxKCYpdQhuhmABhfib81nSSnss69bJWPgMGhyfBzQzf4eAw5D98YegJFpBYnwHYAUMoZtYFP9WD3",
  "key30": "4Lc2dwXQjjq47LzdsXsEy25VvMgbKr1Qzi5goABUAn7WsExaNg4PoEVcRVqaYy9iTisrT6pTMfZMRRcgydq4y6aS"
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
