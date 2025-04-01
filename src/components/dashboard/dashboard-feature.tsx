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
    "2fpsqEUXbqGv77CJkw1m6NMG6eKhbsypuPQmSrcLKh5pk9JpDcod58RRt4c5NaLpzcJaGor8GotAtMSfdbRLvdbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LhoL65tBto1jwpjNqFnjPTaNXqPVhPowpghQvbEfDHugVJpFgLrr1UD4YpnEH7hU1YTyk9TJvYN736tmZUyn29G",
  "key1": "52ZJKzjUpTb5FNhjn5BDPsW53tBctby7GD921uhcL1mGd3gq2ceTC7XDbxxk9kcmysd6WjbJ4E2X2nnfnP9rwv3B",
  "key2": "45ZYCwc5H7v8gaoQjbLPSgnMiKNMFvKzSaedBxEdwX21uGFq3gwWaaVo58zRkaHzEdeDiemziVqtuAskbxx447gH",
  "key3": "5BipaVmxTrMnQ47Zn796jdu6JA21FE8YxwBBWAUnXEg8jeneWan7n6L1AFzQoRTLDeo2T9NtK99UwkX28Seuf8AU",
  "key4": "4oNWTtQMBQYqdYCqWVpuG3nvZFbdXw99B7DFRmrG9bTjPi2WogTXwk69ENZ9A2UNLK8Wu5CdceUfVcrdARBKE53A",
  "key5": "4thttYfJohgB57Cmp2XgzuGpDq4WrotWEqUC2ZqGcy9DgdtohaYwtwMZa3t23SxonDHf7tXzHPvYmBALTYTk8qxd",
  "key6": "3qvDtt361L88qpQr765hfy5jEaHmHEc4Z779LG3xv63UmwF1sieSNYZ6JdgWemmTrJafVRsDnU4MvJiLqyUPcuGf",
  "key7": "3Na2RzdYcLEEH4NEMRk8hGpdnD5fQxBr9dwpLD33fUnKpNgNTzpMr6C95DR2SgjpoyanP9NcRn6dhf8nSaxCwnxZ",
  "key8": "CBwwiwRk7M6jMVg7NjEwvWLiaauNdpTAxrqNeSitZUYrvUnHeQXTWFtEYcBnhPYEUPMMaX958tSudMfe7ozEUQo",
  "key9": "2MeQAgKfdQJvjaqkH3upXaCYJDVQgrPZFEytvQqbe5BYEGKmMdZFCC43bi8SDpQXEATAXCFkFvoV1y3Vy1aiBVmC",
  "key10": "4oCr6XB5An6GqoV4yPdWmfB7arYEUReMptoEiXnv64qMbGfTkgB6rNBYdsdYvsARj2op4BZMVvq4k7cZV3p1yyJk",
  "key11": "57Df7ExPEK3vGuid4iWRvqYYSj6Hzs7QFPmJNxFJ2EUQpg4dQFFKMwHwc4e6na5HF7L6rKhrGdXivmwSTGJLP1Nd",
  "key12": "4nsuKQ7iKEqN2ZZsWzSVoMdzn2EEgNVq4RTsVG6Qywup1tnDjkLL1QCbBh9vsb7E1EZCNHBwndBsPftuVkQKnw9Y",
  "key13": "35PfoPe52LDV8Zd49wJkP8Q3E8Brm3rkk7nPy9FmcUnbLM8VeYhLuLejYdjpKAqp1isYf9NdgpXSrhTNZKxWEhr5",
  "key14": "4b3ZD6AYe9v5BV1BaXTLAUpNGAxkpauVVMT33gp8XJYjJhhre2zdzVYw1BVDkSasqJYqt1iEqnmKsEXfqFU5LtCp",
  "key15": "2jdahKU5bFMtYmGJHE1YgBE53h9Ctq2Qdhbn4UwBHunAHyiNejaKsepjC1j1n1sWCNtzAhro6DX4gXh6WLhEq43c",
  "key16": "3TJNEDDadgC8tBMdDJnnV6mMorVVeQ4cc8B5QkQQ3Yc1XkJ5sfHBrJwkt451Sz8h9USKgHh1RRuzujH8QSZRFGXU",
  "key17": "4NvDzhadT7HG43u5g6iHW9q6Si52akeU9aw2TN6ibD7HfcFnGzYd4fBgvLkarF5f87e2u5xgyWmLGvxqQzXjLCsN",
  "key18": "2yLJku2iF1dkKx9audKjdPtZ4yzYjE8AGynYaYTTTM2R7tZFj8raB14S12PehsNe81t9A2hsAdqjUyACfhfAqs2M",
  "key19": "4Y1SNcCh86ny88ckhME4qF6dxDWzoFiPZmUSNfBomLc85DgC3dQrARfLRU2g7oaHYjgtT3GS2MYdCn3xfgWNM7zf",
  "key20": "5iFbwN2cdREyEnQMPmhYZotXDVMTfKnxgndSStZ1gD58hfG7nhmVYmJZjayxCHgszLzFp5jPgqeiZTVbaax8ZVS1",
  "key21": "iU2wqQWhEANd7y6YnWDG9eBHrbNHEVfmR6FACbGuhokwMCpPzzzfWKtjNHTAXopnNcorNu94Y48kRCYqWBs2snG",
  "key22": "4ZtzP4KWdfaAnXeVxgZCQRDo6pDwpiYcjmfSaTvyouMGtDBQaAbKuCVVFhtc9Xh1HhnWdmCCqz6TdRH8ekQW14kT",
  "key23": "zrkAAPoseSv4WPmAuKHD3FriodHJYYW7owxWekaaFRtDaQLgeQeHXmAZ6wt437W5dGrBvKxPqCwEashvbTi2SpV",
  "key24": "5zKpzcL7SBBeV1fvn9yVy3Yww5WqyesD2stGe37qpoUdjLajwviPZfr9ETssx35rfSSLPNUneaNuedyxr4djcpmY",
  "key25": "2hBFcuSAAMTkAvxHR8eoeHEFtiMPmwsvRxHkAfwXqnGXGhSePR9LeFy6UhM1kniJEf2mHctPYacKawkRZ5SxqrT5",
  "key26": "5pxv3zPb9TXUiSR4dskFzGQCcUyT656VXsLEeS7s2UduFJB2zdNyGEnZ7xS6CE7MbD3CEUy9Y9vGc9BMKv2LVgae",
  "key27": "4xH88Mf6i9Xb1rVFFuGJUbNJM8rgErTFge59aWDFSSZBFntxWzZArzfSUomod8BvoWWxoyt8eJrFf9SCwCnQ7mSH",
  "key28": "3oikGhNaa5HfPrn4QNXwF1G8t6cWzjq5yxWFtUCQz8yJKBFUXvWQVycDNbgFEqTfuC1dnDqmTBpkxZ4PVp2i4P7P",
  "key29": "3pn8frWB7JTXUgddTJRRm34nzpzMteoeTHxGqEWunrWrjKGPUTx1dAPePTKyVd644pfCG64djSCKx1Mj6yjQJf5m",
  "key30": "55kcE23Nw29ZGQxYHRWJ32wuwZm4rZDLCMgNMvXyx6T4jF9cbHtYhxtrg9HyRFoq1wrrifPzkfjDR28sJWcnXgSE",
  "key31": "4b2umiqqppcKuPhyvFpRmGJC2uLmSNDDdJCja3sii3uJxyKBCmSf9NtiKwW7VnASLqdAZ8zdMm1qUxUkLKGDC3jU",
  "key32": "4mTc9cgiF9hGHc4TdwmpNXnrmt1kScxEc4WtvH4yCTwueWZKnV1PnxZLtmQBDSvMPiF5CJQmCCLEzXNAgAjGzTmT",
  "key33": "2WtVrPyT1ed1qtRdrHLPc8gYA4aYxR1EGBYkE5Qr6CGUDmsJr5J8dXNy4Fthy7rA43jucgkzEUs6qb4sRFFd29XY",
  "key34": "3s1HXr4TYPSrddptoKvP8JP737xc2igtPXbrDdGtvgEAHkii7iV5Sw4Tbj98MYG9SNyxgpPNond8Ni5NDMwhFDUJ"
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
