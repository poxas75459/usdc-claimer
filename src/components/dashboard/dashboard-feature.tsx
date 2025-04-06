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
    "QdDzAJRYU1sBxiFz9WqVeXruTeB1H95kzjERf8sLbdghHK83oe66AoMe9GSMtutQQdTct88isc4XYpJH6SxxZyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DrepVV3dpN2wjdEXm2iPREggXdbr2tKk8EyChJ9WeSVfR3TW77qXGxN2tQxKTpMnTcsXYTdeigji7Daohyj4T4n",
  "key1": "2pYcyVbVkDhPEUobXmjeLGRzk2sUHsBJeYcfGqaDwNh8igJXw4YYazxqTKjHHVXEUuf37AHy42HLtbe57W8fuzpr",
  "key2": "YetLXzddFnZMn5fWViLQYVpzhKqTttBmrY6uM5E5smukmDT2YHDyha6gwmyHQqd8FeY2yWosbGTGadvA9Q7b5nD",
  "key3": "2jggVYUZxjUXckM6SfjSZQVkyvMzyCdSF3dJyyAP4GvHf1w44gaQXgykfmcv3xmTAgE668WKWYyoA1D9NoDfC6Gg",
  "key4": "4xThS1ga5sf9Dm2V8dNYzxprS2z7ssiSdYUDUXf6CzUj5xkYz7RN2EAw1zXvioFw6cc2vjAXgZM1TGAuAEyxVynz",
  "key5": "3UXsL5ruZFvBu9A4nxS49APzkjWeCGDkkHxhvJFaoXPf279oafinjdMUJQJgJRmj4pD1RSf1xaHNCAvFchSeaSZd",
  "key6": "4QQ8ZVLEgFgsddenULqvymaM7qH8zZUr77tWABBpsSsr5YesJ9YdYQ7XjfvrRZEjNZUid9zh7gJkMShV7XmyVJsi",
  "key7": "YssBKvxDq77Yy8LQt54R6HJ297Etrs9TEBDddWB1Wk6wo94WMeZMWC18D5zNREKGxqCG3j5HgzBLbYGwVp3ZujB",
  "key8": "3KVVftiU6yRhDdg2ycQJ49jyU7znMQE9NsxtnE7KAbHxHpewH6DLDvdhSvtxphv8Qxy7u8k2aNT7XESQcVm2aHze",
  "key9": "2it3XtCghvkMk4viYtcYtBpCsokLDrQgzfUHzxSHbwyUcRrhn8UCdSQiUddqVfqLwboD56AszveHEwBqi6thz2dL",
  "key10": "44oYvnUbcb73eKhUf13U8m682TgL5xmNhrDh1jZidapbBFrQZnfogEKGCi6XpxWeW8oukSuHV6yGaT9aWFFGf5gR",
  "key11": "rRvmwgWCMa7Qwayd9dni5J6UKudyAVV1Bazifx1onibu9gd259D4A5hs1rHPJYysUQaF6ymBvTsGqDFuo9g1i5v",
  "key12": "4eDMdPPjUVuiBhrkrSQgTR5gWHvGyqFg5AhQgYfujKL8tXHdRkKAA8v9LuPSJKNDzSo9P546iS7h2s46Bg84AVAc",
  "key13": "31wT6ngrXTJQndevLnmJ7u1cxFS19kBMnaoHAJYyU2iT7haCJBs6A12CSAQVx5S5GKisQNk4mEf7k8iVdcxRopMq",
  "key14": "GHxEDp81b3sBeoTces8y12jvFzbRhPkoyiadqsDYdd9Kxb9FDAGsmbz9EUqDmCYQCcFNtaqDgh5TiJEtmaiistU",
  "key15": "M9R2sAUC19U2P33XCYTuyxQHxE5nurUzP9XMSARvgUmojzjpeubSQ6wssC9ZvNkkKaReHz7FsnvhGFYNxxGYDBj",
  "key16": "5sQr1jzhdHXi48Awm7Gg66HYW92nLnNdXRW9amDtZmja8ztR51g4r3UVd7wdRFRWbwf6Yv7mteF8mzkksEEcPc1e",
  "key17": "56di9YKYq2cbVngDo9cWZ9MTYAbD1CrSP2ojboHSDMkNReC4DXCbJBuQeK7F6dsqUJvfBwRNq6Spn19o6zeFxyK1",
  "key18": "3E3WjiMHThttxadBsPvCnJwoTqZ2VkKa8ztTNjjqAovwtMxmWWf6kqoUPrWGDYzdA5wx2nbKwkGvffcw9pEHQ44h",
  "key19": "SXhmt9GAQdVBsUh8yXFahMh8WrHB7ZcB3y3KXD9b2iKCQcGGFfNjoak1i1cwFP4zaWZVErk3pPhT3ahoT2FY2yH",
  "key20": "3NdhMA4Brh9oTWShLPaP3e2VpLrjYwuvfaWSGpsCBMvTchhqbbp4JhNqAEY4h3ZMGfASicXVQmUny9M3ZjNh7Q5q",
  "key21": "5bVpawPF3xaEhgkpVLdLcWS16SzQfFsH3YJDTqreCNvqfhcrsDw6bzEQyU8SNmd5zKDCnSnu2LfFgw8kLCMA9grJ",
  "key22": "4j26byWsNtsb6LdJgA6bzZ2RWd6qP7DYYVqEeLjgXHyTEc16hDWHeQLUWrp2trNGYQeQh3YGfHqCtcNptkh9oYoX",
  "key23": "2TJYExLreXCP4R9vjFc3LaXNosQfdNYvCFnYeK6Vo46cEg7UixtRYTjShd6a4JXzN6smyFkmt9vFJSJn9YWUrQHF",
  "key24": "2uw3E2yZiryD8JNgPooBMNdxz6MDrVT1fSCUpGmphkVzj5jszSXcpJsiM7X9kkqRQMpYKEuAVZky3HQVDMSnEqZ7"
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
