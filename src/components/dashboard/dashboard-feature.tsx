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
    "51Lo7KUi7J1Xs37HjWH9zkDaGcD9EXkd6s6S7VmyzsEfZJYM8gSfKUxB2cfSMeHUVwQPQPiZHzUP94P4YqjuePiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BDkcmqEqDvTZFJokbDXznfZBcT2iVraoURB9jby2cCvvT45v8FsvpyzuAG9cY78taaU3M4JHPaUU8rn5cnc5Lmn",
  "key1": "2sjwSPc1C56ukQpooiTjSTrNwmajiuHBjmbeLBk6dP9qLU629NLcHGvBbvWwXq1cv6BFfWJXC8HtNWHejcaRjYYY",
  "key2": "s4BNiHK16SJiQHnSWUay414Dh1riHa7dppbXWp3bBxLpD33P5k975BALTreWSVn6CLDWYk2X7e6WRhQoxaZ3XAd",
  "key3": "57fJjBFANegivuFyBUmNEiGxTNajQywk5zTKL9GEg1g2BB8rQueDR4b5qnKkrYjJLX65JzbgmBwY2gMiWo9rqsWP",
  "key4": "PvEpUaZpCtV6UpBvXiM4r4R1qTSAVahkWgsBKzjGRFgs7AwMg1V89SSTiTpAeZU1aw7pseR51uM5S7N51FeHqBz",
  "key5": "4rkVEjKs3mHpGgKk2qgWTVKpJq26zjwxQHzZfaFh59JzCYyeztQGW4hDZBtfoNaVxb4j3NoiVNpo3F12YBBnsyJK",
  "key6": "3CHEUrUBXXEDf5SqL4Q3mmFEW5UnjN7kFrXfCBAJnd47B5B5sXZuifcyMS6ddLx1sdQZbJgtFPjW91nGaKBuXMry",
  "key7": "46ZwZVaqVay3af1jFiMNtucyMTmC8jPCuc3xCBMXfgNu5f4kmoGF8yh5nU426B189fF7hLQ2KQRfsm8jViDXL76r",
  "key8": "y3x1ifmDmZAkGA4H9RQNEsPt7dyB6n5bnGBjszpdYyLTmMa54WQmRXjARxTHneqTBjPG8eWtmho6gbpENdxhbKN",
  "key9": "5dKBEkqRgScpLh1Ygsu2b4yT1bB1FQrA7CuKSNf9XbvQWHw4YZ6NbmRdmHhsQjp8wDd12KFUt2zu5hr7Rxz97beP",
  "key10": "5s43uWc7mo3veuyFzoxv4matMYLB8VdaC9jm1xhfkDY6EeX8mife4E5VrLFgd7BPPEJmfQVnwwRWqxBicz95SkaD",
  "key11": "2ZjSwHxdcVrNbT6wQuuK9uhL9phMJkP11NVUED415PnVBx5WqEQ4gohLtx6vk7fNTTK4MwYtFZRpB5q42gULeSf2",
  "key12": "5ZDPkvwsDvVAo8QcFLNchTKNQFTPpkURevtULtmHhazpnCZQJ1pmAodKH97MWbCRHZDSd8zwzm9fsGwpMqf6x2tM",
  "key13": "5jrEAAY49zQyAes9aVkhS8GzBHde8aMA96E9hC4GBJnnv8kQgRVXfvPtiaHd2H2F637phYowdemAxqHqQnUmg2z1",
  "key14": "CqKKus9Ufb1rvzr3rJpaX7fdVo1M4yPc3A4hgze35twVYPeA17gwBTNe9DyuFS2miaP64w36GcCLCDUJWrZSpED",
  "key15": "4r3CHaRM1abBjHucVy2VyLz8BWgcGiZUa8xc38BH6juVD2Qu6rCh239qtGVfR9M1WkB6Rs7aTLuxAYHdinAxV7zN",
  "key16": "5eTKQJYHmDcoQoxdnaTucKFwxPgAGZN88H7BU4T6MAZXBfmexLDP7NHypcHwjXqsZ55CmHfvSkppqCuW1qcaCq3d",
  "key17": "26VwSzRfjUwPa1Mjxo5niZXKibqdx7ahytTQNg1RFhwNziiuhhG9CW3qPdkQ55AnMM1u9T4yvRWHCWLPg7Ayg4nc",
  "key18": "3QXbisGwnLrEhR8xrAoRiwoWEUeYN9Rkokh1B4i4EDJDP4ZaGysKSn91qDUQFrTkQxWDSvgfRYNmj8pHoy5fkVAW",
  "key19": "sa6VtRSPDUKpfTt7SsJeP4M2Kwesw6e9aMVaRQzuKBhxB3yzaj2AR7CdCEtNcrpa15ZgVuwfrqPkkuMGFkPpKBj",
  "key20": "JHpFsZHCb15y1DtzhuHnMx9nfyHRxx4BsyNGbnr44MmfdcAuF6cWZjYvUHJvxf794dHv9vgSpPNdiUo9jvMMYKr",
  "key21": "232rhWeMXMSkJwCRUJs3eGa9FunnCZWAwpv6RLD2NatAxe76LzeZu3rjsERUdrxhGH93aLAEoNJorXdBQBiLEmVa",
  "key22": "46BJ17DBjMp61uWKSh64ERvZXyJHzhPCGHW87q3yQkJQc9L2jQk9UZTiuroh99fDZLnXowgU3wAPePkF5RP6yMFp",
  "key23": "PGaEzJTCjUqQerWiMqoj2spxVp7aHHDHQzymqiDqRKa4mFK5LsJ95YveRE3EnDwmKpRbK4oouonwVjNM4EM6raz",
  "key24": "4WKwoiTpBXjJ8bHrGxD7oXmkqKZuqPPz47R63AMJMh4KWNkMU5uHfFCqvCyfC8YT62K4nsVrreGJnh8f15AghyUL",
  "key25": "2NjH9pxoYo6FR6npi2ZvSRWn1JnfeW1BWAfLU58fpqUrcqTCZGVQq3JdrYhAp2sA66kn9T2yyxxZ6Wtyn9j27KsR",
  "key26": "557uJY86eLoF4En7oM9odW7tvXzn69y1ZmFWpDUF2UqskTf3a7jaYjecnNSQragv6HSFA9jtfNJtCQt9o6KSunCA",
  "key27": "2TDACstYi8X88pChfBYoG6ukXNFjUY9Fw2QNFmS2xnMprKCrtxxpLZSMDSosdJ8sCE8NTKKa7iK8iGuernSk1Hbj",
  "key28": "n6BfGBE8EtiCYTNJN621bde8zerFg556CahydT96D8G1wr1SQwrkGKokSxyxu7teWxFS87qN47YYBDAc4EBFWgB"
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
