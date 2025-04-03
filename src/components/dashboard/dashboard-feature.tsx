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
    "3wvhnozaNRQP49k8wGUiDUd82WY1p8rfyCh1nGkNgefvYV8MKfsbsG5Mhj2oCiGFHFQyMg6E6aSHiL6tjUvZFXs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jELZ4ZeS5pWAnaRuWF4TNvK6Tu1QAm33LWstNzCA7jtPyLKEXTLeWipu7egz29pDh8Lab62Xku7CD2ojYj7gQfh",
  "key1": "4Wh9UYYqEMTdS2GFsj6TaR8cDzic9t9D9LurSNe5SWcDxgpZZ5HuNj6XZMw4XTfndyq7mrA3rHhni2u6oXFYt53F",
  "key2": "Gndm5eGtsHFcfbq9JEJYvkXWU6yjKCHjq2L9KAdUXeZ19o7YkfaTvWPzgggPQS6jdk38yd6S34tU253v2cm5uCH",
  "key3": "43BeXVUudvuUuwpguPBjKRNx9DtKwSiThMpnvzSW3wvt3oFmPPXHGDo3u7K8DMoNfnaEnytuhiBumQNCq7xq7vW3",
  "key4": "58KHsBT7vDJ1vdsRCENWCP613mMPhsq4nKHsdg6LKBEXmascyfDFGjEYegkgyb47zPuSM3QrgQYqfPeV6zaCg8xt",
  "key5": "3hGJy7PjvXhCWzvDZXURot2GpMFk3bg9jt5Apn3acHW9ggQnSKYWSKFwHkM9ep7B5MJWssmew12CixLYc7eBKT33",
  "key6": "4nhWrrHy6RNJ8tt4eVz8qxSSPchPo8T1PxkHFADehvkchpnFNtUcygcKhTSuuDs7Y3F8r3GF8iyRLgWnts22Td3A",
  "key7": "fJADE8BPYEETyxWsSquPLNSGygEkHQPkEiLoPjULHTvRvTzoVRWKJv3WeRu3yJg8Xzj84G2EZz9UFw94a4R2riX",
  "key8": "3Chf3uJUgu8rdKzhowNvqWGfxhCJBzGwuRWWgLxsgDKkwb3dcfj4Y8kjK7v785B8Zszd3GYz8AxVHcgckb5BTrYm",
  "key9": "65PWSZycx4Nb1ESQVc3u8eFbMQK6z9KoCsu6y7ewEZmno8CtmPaJvSuZujyb4xPw8Qo6LSwGAMs7UtxaFu1Jr5QN",
  "key10": "4qpid64n16CbcwP6jU2ATLuCVbnZbnj3eSvhGPwJXR6vjRN7fLE9dmUHJBxHGNysF59H9SV8bMiib4M287wJrAXd",
  "key11": "6K3wUCWMGVyVwh7YNwFMAzxBs8hnDERT6rREcppwrDcGKui7nJDzLzEmHBk2KdAJM6PwGK4RHiRJ7LFbBLxYLNd",
  "key12": "5p39e7UVc3VEriZeHvXpyvfHkVZMbndWskB4SKhb6xHGo6Wp7Q26YfmpaVoxnKusrZoHiLMtzUfa9oCFsLycjuLb",
  "key13": "ifE4fUx8mabxgqnGcC5Xk2NPHtkhcKVS3hSZbtH2nxz3E5MVFY499hriaYozwmXRuDmMuUQ5iS61mj2TTpgMcfS",
  "key14": "4q5AtTRYZadPmq36LguPrVmSUVPJs9xz2Nzoaq3YMAtb62fkjiTV752fCsLVC98Hdf1fcDiGxbYZu7NBfBAkmEvE",
  "key15": "21NgHV1w9fWXUUYaga15cjKkT3NMzMKYWp6mXDijrqSfMDkuUy7otKENuoUX9RBbqHrjxT9bzn39TDyskHD26QgZ",
  "key16": "2BfCm6XcJFbHc8axk6QzeFK5Z1QUE9tBp5BwFsqWZvDbTm4QmQxQp4vNgge4FWhfTpDp8PdzfZ6EQ82ARFMbNqXE",
  "key17": "2JHG5JAgLQ84SFer7HBG7cfKijQVyetuyzoCAoPsVt72DRoGfLfkdyxk42PT9mP1EksXgZmmdSGUdUYrJXaCYinU",
  "key18": "2YL5PVUCNUTAJFESgBouE3wvygMHgsabHXU2oxZkmYLYTyqDekGthfomc2GUSDS3Q3pTqvNGrEPKJ1BiuEXocF9s",
  "key19": "p6MtYci6RnHXGwvTu7EBZtLoNGtTPYwe8iTFGNHiJ2bmVswV5iz4P5FRYg3wsggMxkgmrGeW3FpwwZjxa3eqXSK",
  "key20": "gAqPfmpMJvQZiEtqFEzApzzsBMadapCNvqqRnN8yDDxsxLWeeYyCaiKsScbE9ijSBQLwKYNUGagLkhCzjPnSfXr",
  "key21": "4kahyAmMH4qs8korEmjA8w5u7E3Epx53invwaL6K7E3z1c1Jhaote7bhm7qWYqU8eii7iPGVnmS2d7pw3fxmkBat",
  "key22": "3xYh3d7pP8HSkZ2yYtD3pZ4DwhKXrnf9ZfM8VmrWxwJdepk54mwLqFEyzYr3DgxQixazr4WhhVG53keBs4vuHjuS",
  "key23": "54RW4Jtr3Mb29JZ3RzuY2hVhsKHdnHDy2iHzHNHaG9sNAtEkMAHeaFSGbKXWzkegRKvft5RvMftAjqD5Hyh751Qs",
  "key24": "FXCaUCpojDcbwwFnN8QPwfctsJibu6SyZLRcrnwSjaGPeaNdyFsKH1VgfgwBLJJfycBokx52bZHAsfq6vte3yGs",
  "key25": "2x7MVRvdu8MN4zcrqrd4P5i5i8NhoVMTgDeoX6F1sphPv5bkxEEpK3BfoGbJKrJmnW6nFMNkKvdTZx8DfDWT7Tiq",
  "key26": "tDaKTRJ3XSwm88YqKqRPVKGcgZ5R3qmLi7RCQjQVgfvNxqAH7LG4PmqMhsK3uLpMycTecocmo4h73n2H79Tj8ac"
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
