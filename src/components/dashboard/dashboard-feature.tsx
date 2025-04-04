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
    "2tjBunhzzMo5Kb4argRrcKNgnhyc8xrgNSQPNZzrqr25VxtjuXbuqfoWNE5bSKF6KamJq9xRwUZBG2YQQrnmrT64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x2LF6CnCB2QycyM9j6C3doe9J89uJwRZf4Dzwv3VnvtgoxsRhurf9ZasdkAAeHCKU72KYRGZgSTtLvqGKFUrqJv",
  "key1": "59mZqVPq1p9QVAvM6vZN56DqqomQRZQRDo3K75MdJ1LQ8bUiDj2oGeScPGU2YcBU5pgQuzPiRFdVD6ZtZ4tgcoQk",
  "key2": "5rMEWuHQhy5aAmczyx3SUk9vqLHRZixuBY6eGLvz3rXVzuUkifDaifG3cdfsa1wGHZ6smLoY7nXZNbpaKHat2Gad",
  "key3": "xqVtFyPRExQZTNdBuuUzAu4LTnPjWFtKwfSebJfQH2KmascHjUkR9ZzA9U8f3FmGcoH7jaisdaHXLPbueBhiSrd",
  "key4": "5TGpBVkwDs3PQbvym6onvvVfcwGntDXS1ZjpRis6fEY3fi3YB1mbFb6Ye6XS8a1jjhAsQwYF5xKihfFzxKEGgpNc",
  "key5": "4YBsbrZyMgdgqGCfavX6z4BTiNPfUmSm2JS2d6u3yoDiyG9iBqDGTGki2PSnhyTmt8UYWWmomQ4xwkXkKeAtP14v",
  "key6": "6FczKajgvZEenjEfRjDsY4wJu7cU5krGaEPXTRHqQ9Np6U8S9TsWuoj72oxTaHqWFTqFg952cVcPCLvpNcCZQXy",
  "key7": "2hkpevPEj6GjjTRpVF1fennsxTLu6RXHMnAvbEsrPEEBX6G9rawFPGiJmNPTAwxT4174Y1jijZqMQ174XJHRgVfd",
  "key8": "4dnAGQqwwdugsk4TCBP96E7LVqcY6t79jYXMg89DRYV4ioUCQcCLMZJizLBJF8gueGfXdBsMmMfTPgxTrLQ78Hh4",
  "key9": "5BBg6Qk9AC3Cm3m1hRLHmSWhuvC2CeeawVeWJjAnowHCu1xxFf5hRWUvhy7tAMZbm1xyxghHXDn8ChyaCib4grq3",
  "key10": "5xq5FzVcEHa7X1G3qTHEiFWMtNAKXNyYkV5ChyvoSys5YhMKGrmLowXXF5MivP12MpN2qEWNXhNi1bJkFYDqh2s8",
  "key11": "4dHZGaDBHPFdEf3HQJXdwXgSJVRLChLEZsd2mUe3ZjXeC1PHX6bXyjAiJEKTQBjF8mV8DfXGGDek8VBtVcDbwTMJ",
  "key12": "2kNyN1b4jrAnHgdQFTpqgy5XPJPkoZF9TWZ9q7hzi7rtZyydW7DBXNvfwSeHwjenyvV9ZwkriDnRsdXEmJ4aaRv7",
  "key13": "27uNR8o2hSw5pdHAWkbinR2kLcBYiDnUx5VuBJZSydYVEkUf5hXtVNXaoLojimV5sSqPWhUVpRKTe3Cp7phiZdi5",
  "key14": "4CLbGgSaEEkBoWMg58H3J536JQpTbm6MCDhdNXgL17tNcj8VKWPS4vnL3xJ8SPte6NdosY26KkBh8mHh2QLrxtaP",
  "key15": "3mxCErmeBNxA2Bgs5GGcK4BJSCfTSAaJ78mcgpmbwKu4giXDsoYMat8xhtRExYpvc7Geyc9iKaH9ckzrzBjYJYAW",
  "key16": "4sNHRxXLzJEki31kmyGPpk477bEJ8uuorKfhYB9An4X7bwhAAR43LLouJEFiwRc81D2rj6v4NQuFkXtp3WXNxmcL",
  "key17": "47dD44KgWMyT1xWm3pCeA2DKvs7L35ET4z4P4iDsSr3Wgmi49tX78gXyjNigfXXXjDZSsVHmj6kJKCpdxJbsXXMN",
  "key18": "2ZEryYdF9krqiNdigEksF7Qqo6EaMJvvJxWn5HXThKVcL6Jsgy4EZNMGPkLS7aNu6UNigpobCXgsGZdWoNCYjzg6",
  "key19": "579ZsdegSUtpCm41d4gNv6xM8AeaNFFP9UoY7JGkLn3LM4v62V4yRDQbnTbDAqitUuxa1RE2Q4P98KCVGqUb2v4m",
  "key20": "5qu176xowbZFx5kSykxYFnPhG2CPR7LjRTVUs9WwTo5j7cNEk5DQNLiV3enHpBPzmtGa4N6CYyjTBxCKLtYr6UxE",
  "key21": "5KgVxSRTxZoM4EF4wTyrDRDFUix8c6crig46i62Y6o7wjmifpZJgRRWMGDEXy8f7UQ9GefEm6SifaQtsspk94rS1",
  "key22": "3R9mfES3zGFgSoyDeetgdsk7TTGUfHnbMZ1VWef1ashWEbutuNCCSiEF6X5YytvHKAYPK6G3aP5cL9knDjehd8mK",
  "key23": "4preqm2Le9XdGVUouyUsZnPvbFJgvTDqKziXg7YH27NvXaig66mjVowDYdJdLMwqrU1fxgLhBEArfTmrfEdYV1bd",
  "key24": "PHmLN7zLFGRCL5bsgW8nkoxkCkrfEvaeoi3xdqLnJn6MGKjKyf6EFjsXrs8WJkCbjd12YFLdTZPgBD3Tn98ZpHJ",
  "key25": "5UecCqzP8ym9LFRX9M4VSp5R8mhu4Bf1teuVUDWf9owbbP7GW4vSD5nE2SU3pVCMCpu3rwQujHddLwR4hLo6YYSZ",
  "key26": "4mttPMhpMsQD4aWnakKYhojWHqNArsoY5cQh4ZRaVqFij1aWuLsWY7oD6LoWLT5YSPAzkX19nYGaBCzpkn7uZUMF",
  "key27": "2prdkY6D1khkZxPs96D8B1V6RBqATM9G4PtdQ3xRxspBobJDBuBKokWGs2rgobs5cLNicTJKTTKqsKsyr6biSjqV",
  "key28": "cSFCwnnJinZtPyNyKAxZE2UEAeucCzLRLjtCcL1zJsnJaWAuNd8WAsAgAXng3EHppwj5ZgtpHLzhjEujPDLbRVT"
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
