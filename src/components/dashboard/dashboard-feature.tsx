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
    "2qXKUVbvvzeUFmaGTMABjyy7CBpJNXirr379naHhG1tKBEAnUTrWrmLMEshxois8AsyTEnXGgoNfWp2oAtqQ8cey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZuErkk78NGuQ8WYmjTJDBaxBGpbqV9BcQs4mUF1gZ6atccZsD3w68Nc2DLrWJdHgZ6HQTTep3nVs9AQGZVy6UjF",
  "key1": "5KqXwdPdyzNaKi4xSskj3fFB1V9pQBr8TigC9qZ9dRswNPHaHeSa1ApvrwWRk99cU6Yfk3F8hS8EX7puesUDajH1",
  "key2": "4jdEc4RjKk9zFnkPmtawbpsrH8nhyUgn8d4HAh4E72odeUcEqS8EXakjdR5veyYXmz3BYk41DmG7SB7depXt5HtB",
  "key3": "4tNeooag7RyRBPPcQgg2fn1W16d3BPVLDGd4Q9wZeypKR2NuMLRB9v893uMKyK69f2EaCLsBG8keiEM75KKQ7j99",
  "key4": "Ej8NkazgEdqqfv173f8uvMC2SNMBWMTi7f4dU5dekpnR2zhbd6T7hMcUvEFspbn6JLqUzcKoRbyoYcjaTTNYeCA",
  "key5": "3B2CzU22jAQfrCTmvHyCmgAtegdm7kYoUyjjXSdLvd1QqWC4fJPu25uUWqDyZSMNZq6G2Bbi9mMDWdAABFXnc5TJ",
  "key6": "2N1qQtNeEctjgH9S3f72TKrzRvt75saML8AVTp2BhS9VchM8sd5nJVXj3dqR9AnfVKy1U3q3fqd6haQFHDfw94ka",
  "key7": "3sKip4Fc1mfRGQZgGHqEHrnLMT2XVDMqxfHPhSJSFvmbYpiB6UdxqdrACkCqpvHUAYedBCC3zoshAp3TATXvL7RU",
  "key8": "32dbv8245yu2d8E57815ym3LGp4uDPayXu6nxuYJYpuDpaQF6zyobcuJ7omhhavbrdfnynJvkbPaWQowsL11orAr",
  "key9": "5Jm5PfHeEg3AuyrHnbsvcNAA3MbJqtCh8CdedHqD6UbB3PRe8JuYDxFdj7oVQV7XhwA2EJouEC3ubVRvkLqkgM1Z",
  "key10": "vLEHPRrEW91fRLnVgM9rhSd8z1vZgbWqX6odVhwsfNvBrtQRfaSNsxXKZ5Puq1kg2jnaHqyAWm6iWvqMES3wGms",
  "key11": "3aVHKh5ZC8aXSPLeibNE6ftaoCZbU4tDrGpqxDVWg1z7M6ijDLEYvo6aa3EGQbaciWNa3gb2kRKgKvBw1pHWFEv9",
  "key12": "2jkEc3ngymurTL5UTEKXNRwefhRA4b7HARttGsTYdaLQeetVBJfZSMWVDcseMZAgVg6T32oDMtmp5MdK55VcSNRd",
  "key13": "5BBGn9ouiMR9WUdC3HbsAn312jESqJKrk5EhrKSL3HVNboeBKy36A93R7Wg9sQaGKGF8q2T5JwrHjnc6zjKTcARB",
  "key14": "3KSo74mcCXAhogZ4pEBSbTyBJHiWJqYbFqeyMsfXEWwQwgYAv6TNWhxqzD6QNP33261ue42jjtnmmJVNsPj2ye15",
  "key15": "58wTaq8kN6AmSk8FuZfGnbQzwagL7ZEazzndJBDqckX1jadKJy3J9fBSvaGnfkME96z3Ztoq3DDEHQ764TNrUM3m",
  "key16": "5TJ1Y86PqQ4zrfU31tCRjCEpVb9JmX4Vbg8ijYWCcWHCFfenxZvd2qTeDknMaBWRkC3kwnUq4LpXEqiriuyU5K6L",
  "key17": "JzCRbBHTgqkWPhdeCPF7YrbjHYebbiUa2vgYJVvGMa1pgktMGxS37HNuGPfZaVFSpuKWbEp6dTwSsc2ymw3H8NA",
  "key18": "5hJD3f5fkqX8yt5CUACvE5xt1GxjHfuqtxgTrsBiXUL7Ygdg2ArqPWery36whWGJbABireFZ6GCwmbnhLVQ99o8H",
  "key19": "45BZkLZd3PB6ZX4VunC3KRXcSpMmBuKfmTmTre8d8kqjYc1BwNhNMUPg6Tb7U7NV1Ncnf73adLfrGKPqdDhtXx1f",
  "key20": "4CtBRk4PJC2FRzfXvW2MLjcF92vVheD8S9wWfooDtTos61QaPb6KUK44uyzLbHqazodcvJrMothV3cBpUgRvLBei",
  "key21": "4GEVFgMZiuSBwShsKkoFwJPYnwMQaXvn5XX9L4bwi7WkLv4LgbV2EhTn7FJEFihzGCVA8q2vRNgxknntB8bmJVK6",
  "key22": "2nyx4J21ZtznpFpf9oqBvQTW996XDthgc5gQibBbEBAvMDfH8sABprQffZ3apThp2CCao3ftPwrNuGdyD4KUwq6",
  "key23": "5NNK7CUjDbYiJStQ8TcWiMXk2mqyPniu7hU7PLSFt43cd2Ki3LW3WzXa42mAZBfauXyPAFddQyH7jHmBrBvMEB5R",
  "key24": "64p7sf79bAyDT7UJ39BmPzmRaarSkPgqDj13wix4QsWRP5aFBdyeUi54yeP3aDRJ8cZy72Xhh3NZkK4qrrdAQUJt",
  "key25": "5uwEYRyu3E59DQAmga9kDNwnKU374BjDK2pSJjQDneJivjihrv7KNswVZmBGxfepnpzyqZQeZFQjiXERxiwiHsUK",
  "key26": "6YySiXZrjtCBdG21tuSxCsUnapUnCMEvptxUtCUxJCcKagFB4KpdrFC6qqpiCXE4sKQTV6tZcieFLzqfi2tpuua",
  "key27": "2JkSY9NSTcTU5QMcHNhz79dSTg7EGM1puCrzZdrDEtd7ARHXj5UkbHuj8v36gLG7ma51AVwvjZYEfq7pXTdejRjm",
  "key28": "4yyWedUVvTouoG12BGr4MCGu8VbxmRoB5d4pVZM8RjgxDYdge7WRAS1wtdPjK2eqPP5uz8vp5sCKm1mVjXBaPauk"
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
