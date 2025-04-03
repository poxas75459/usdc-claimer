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
    "2FuMn9T36LtijDpUrJrwCgqc26pegNhwLZxfeNkVdRmSNUrNuV2BCj1HScChZoieevquZiC8bSVogtrzKzTKByZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vbdtw4oWrPricKqBWM4iMnWZjGm97uny4F1o2A7yVvtgcT8msAcb28Q5t2iQ9fzuXWNCwxrv1ABzTKx76madJTs",
  "key1": "57GTgRJAFqrAMTXfSwXC2eN4QmSsH8f6Yzs1QwUkmEK4YcjuM3oHJ1H4yikLnj8boohWKFMkiEPyWnUpyLNyFfQX",
  "key2": "4Qcfu2Q1VjNoPTuTA9wG3DS7MK8FErUqbbcMv2pXmg28UWcSkhvZgRV3HCMZAmQBYTsMqjSXgHJqoNpTQeHfqvSK",
  "key3": "5ojJMbetC28SLX1Ed16unms3j4SeSJbM4cHS4BqYCur62LXUvRmdcjgMJA3yUPzL2fjZ7YK4iAhyVLNWS3XqHWX4",
  "key4": "jpgcaKgWX4ZXoA7sMnehcvobipaCSZV6B2ck3SGMFfGuUxhVfdEncnzZUxv1pXNTRWjbByy5C9Km31TLWHEN44e",
  "key5": "2kZxEqRsTU6jBw5AXLdo7mPBXBzpnwh8szqQUTcStehyybksyMsMsZqa9MWRUYWTccosmg9PWSBn2TnFfFjKwVgy",
  "key6": "48DzT4DFTcSV1AnjWAPPR1h3FAZ8NSnmbpjzN3Ue3wxGzhnQiu46vKkJx2DtLxQBf4ABwAG2AjEXukpxqAG82DK6",
  "key7": "4y3BzGu9PhdHPxyGQiR3wxtawY3jCGhwL8CQAPgLwk2Qfu4hQqGWkQSt9iY7f3YuFdKR2pTBEP7feFKjahfpM1Bw",
  "key8": "Kjsr1DX4Kw1mtK5gkeohQS9tHUg9zMPEEmkkRvpQeYD69YNZKrpB823caPso922qDb21By8hsWjGYDZt78FWgwK",
  "key9": "2HzX3w8pJL5HhcU7fLFGRnKKmxQvY3e3PobFHSUjnFJar3kE4RaRJeAokjYEKFoCjiat2ZACWx2ic8HiAmEC3ECT",
  "key10": "5fxfs3onGFNn2n682vPWeGFyQi6Zb4oUxznd3qkhW7zhzyWJCjSDPvqhFrj8h51euRzq7nEAujPvJrAqVwk1AxDg",
  "key11": "4X3AEKSYGXkWXkwdaTStZwaeuxwFo21N1CcXoVttHs5ZCbNFCqQ6BLaVbb52VgT3i83XyzL7Sc59NRijpswDeCxT",
  "key12": "51Ad1QDKDfZuuNavZfdG5o3KLMKaUjuS3u9KVEVkUVTqCFcTUXMx6Fv7Nvdtupgn4XesAtrUfw2mm5KxtQbygUNf",
  "key13": "3EwN7jcQ2fkoFfgGShhqBktKomvn8tWd3GM8VkB7gxsNp3vVpPxecBQs4MvHiAMbxymvKd1fosvnxLfrppVV1nYU",
  "key14": "2FfpRoh2arrSqGQtqJjpFfX41MDZkSbC87h1XtbxZKhJVACP33fbCyDAzftgwiD3uqNH3RU2ddaoDHT1kiK26Ngf",
  "key15": "5Wk8iRA3sVjF7KarAzS5WwVCBQRtwPFMt6Y4CiLpq9VVuAYLbzDSND2C6iW3X4HxwLz9LRBhTvGHpSAe4wBy5fEC",
  "key16": "5vLriUDnakQGpSZX2eGky8LBmWvzbJgDu9G6expT8t19onPmeyCYPa6sETeopK4ZNHfqDJeQPToTCNuiEos2rtrH",
  "key17": "3YG5gi46BpVWYjaZ6uYa95neNjULFNtp7KSZi8GJkWkmKR9tdA6mpskZo8QY89A6CeoQpne2wp9wsPhmJoreRUtx",
  "key18": "25mjWNq2D9gd7LSx2VBDovmX4mZWqtq17K6p4sX6fx38U1xkGHHCsWWyrwztt6EnBmB5ZtXDZvEHvdLoe8MeYm9R",
  "key19": "4ofpr7nS4tZ6yfDRvzcLDH9CwW7GaLYwXYdqYraQAdHe4g659BkucU41QEDLqzHHYg2srv72UEz3jwfSeh4m4Afy",
  "key20": "4xXs1tGonF7ktkCdf73DAuFfFjf8GjgmwJugSVH9SmL6V2SuGQPfJX93FZTnAqSG9DHMzTjqupu4SDZpzVjeAv1m",
  "key21": "2YNXQsqq6KgR8JLVdCS5ZeiC7ZjKD2EdajyEDZwovAw1RjxX5hB637FqRmeJjbssv82cgSQcN43zXQGauJnrJuZb",
  "key22": "5PHcCDweQgZpo91mRqRBe53uPYbxjK3gTuRUpHzkt8ZHNZLdXyq4fnxeu3we8RTA1stjmbpXpsUgpiAnjxxz3DiK",
  "key23": "oNn3FrAnMor1bx7bkHofEaQHKJQjgdYrMctKZEe9c3Eb7aLVbxXj2pQ4fH6DnNWtoF9PDV8BM7EnoRWX26ewtzm",
  "key24": "3gPMWhVuCVWGGDtDiudJqNwP6usYyrm9fdfnEJVjuyLaavrpHiXXVMd8ppbkYoiFvqn7kJu9hnrJjqLpwpmx1NRp",
  "key25": "96AoL2THVqUyar1hCcqtgZJENM444DsKzoPoWwHFwQK69hVtHpH9THrE6Zq2uKpqrhPrL7KoyuwWRXz1FNbfMDv"
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
