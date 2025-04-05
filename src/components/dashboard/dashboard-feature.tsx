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
    "5w2aCeZivmJNVQqgj2Zv3eGcde89FsmLdoK2ryaX6dSE7HxpXMGqABhks33rWvZehoKKXXkdNa6UKeyt93mQDUBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41FtnUwBL63xQ9JVdgdsE617mBeGi2NVDNPXn1ecD36AZiEWn6t8sFnAA91GBa4C7qs2A42f5hnLyJhevhp8KtEY",
  "key1": "3nWoK8pHxGW9V5fvKYbUxtJN2SCCrfYuJXM2RStRTNRgFhvLgUXpzwCMviMdZ2szQUXWksrDXYXtgHuQJhTowTFv",
  "key2": "47ZrJHTfwaPxvDrywe5JHJhx4153xMzmsyPpDFhTJo45Npo1EhFc93VWnh2smzZmTJNhVFmyw4CkgT7GvzuMWNAo",
  "key3": "4cRza7BJrHnbxyNK2DeKFh2UprCTE8tTmaCfW9WJCTxQXdYzJxZbx87SBtAfTphuTxEXpc667geU8qhD25eUQn8R",
  "key4": "3fQih7BypUbEvfRe3XGCS4unz3Cy1SWMxbaskMLNi3QEZ41pjm25w5dPNDFfRafwzy6JqovcDduXpC4xMLqqox4v",
  "key5": "4nNcK2QpWn5Bsp2YYqqQPutxoMDJd97SV69tnaksaqSN2TLVZ4y9W73ceqtqqxYLDS6TqJrWwQ3SVkZfyB2wscPy",
  "key6": "4KF8GyLw5JC9jbZZHB4p92GxfUvxDY9qw74GpZ9vxsqaaCwm1DNmjgBCyeCRYFD6GU38j7UJQJYcvaotbBNkPwU4",
  "key7": "3jmhrDPVToZJptMV1WZLgcDHkUDdeQKiAS8Cj9Sx3NXXs9FnzctkQK5hN7k2N5YWLdqhHc7PXbXwkpbK199sC5A9",
  "key8": "4brV6jrpvhUhrZusi41YG4iScuhifTzkowNbSFqk1jc3fVJ7PUmJRvTbwz9Lr9FQpr5V4bi9czk2WvWb3sTkwMWH",
  "key9": "NzSmE7MjdauXw78DddDehUkb6D9qXsRWfmBaP91NNYBVa4znTQMoBL26WuKAuARtDahWsvXBzHkawQMy5HYioFo",
  "key10": "5wNnQpVg6vBitnxFbGD6em8DbQs2ARBLTjgX9cDNLaRtJ8P5voC7cBYE7snmDNnLaW3svtCK1DaNgx14LGKWm6Ga",
  "key11": "5s7edkH1WGAqXednvkYZvFJYdkU4x8SawAdLW7Mq4yEVemQr1HgRPVutQQCX7Y4mccDu1N75ji5AkaUAH5c6qNVd",
  "key12": "3ie3Q47GRuiB2tNiiVYJofYqmTbxfPnWxwwRsCE2WmyCBDSYaS3q2RZ7qZ6TnRnT61fpBgD1rYpkUXcqst3tSV2c",
  "key13": "5cQhY9N6x1EVgE15Q7JtN46mSHMP4M1qJotH46vYgd1HKkYzXj6Fg4AxMpEZBHo2LuVKCR95JWsHD74XrCRqiFDy",
  "key14": "3nrymXPfrWRLRqdrfYnrGascNWPW7wvfb38rVfNgYQhxsryngnXAzZJgt8UCSdzYCftjip3SmF6MsHM7J7oX7MmD",
  "key15": "4hie8KCbtxQF29om1t9XXcNxQ69h6dB4SZHfMinSGq2EDwCHSynGMyVmBE6AhJpzbBv1fCZqWTQKPHG9DhtUuMEM",
  "key16": "2AKok9aEPzidxF3fbdkmC9DJephryNurr2qdRXYrRV2D43YWdqSXHMAjZmttnM18cgD1nW1iJYLzA6cgSfjwDAoq",
  "key17": "5hwXUKWHLvP34wfuEhKwC1fqom7HNj3mpzEbKFYewmeSU2BTUx327ARPRE7wxFhTNr3bTAtU7xC4pmsQ6wvxZinX",
  "key18": "5c44Vf4aXm8oVpbfj7GuU7fJNWQHseZtgSRKBUyE5TJLkHSntPPbbgrqVc5UPYJCRUeD9LAdLWBThzU7Xe8yWf7P",
  "key19": "qe7fJpn1CpaZUZLqJDmg6DWckidT2FDwdtQETTxMFsN8NuFqYe7Hya2wN4bbko3vakWqeAooFEdhLThu2VCWPGv",
  "key20": "ef7c4kUmoT8nZLgMo4JrquWocoZXG65tCjy4xyGjnsQYr3sXaaWANXa1YE4VTNwjneH9kNf5hb1qpnwL9TkRdjf",
  "key21": "5Qdz1MAV8TwXAiJwbLUFKzbRKqKKmaHhRfvSKj9yzXv3DPx1hnEcHwhvpYLsZWrjCrZbj74ZiqS2pQNFdbn5hgw9",
  "key22": "3rt5FpQNmDwpThk57hyfc5KqzkjgHPQwT4hJeYjb1aHU6ZvUKGCGoe3qyFWSrZpLqm1ZYquyMXFsSQJnQc4ipKqt",
  "key23": "39cZMzZVqp5CqkTiTLe9XhJP71pQHrthLDfUiaTuf1hJjDLHYCUfyk1vhb6qLYchevQn7nL7TbUaDnayfpkXr5r5",
  "key24": "4ngfexigG8jfks7T3ir1d1Yx64EeDH67UB8epivhAY8PZb12FJa5VJGfhXJSxYkNPq6tXU27V43V9TF7TQdgRSkb",
  "key25": "5aPtKcw3mrx69RsSvGNbmFHiKcftpkY8SreJSZ5abjJM37R4NmmzmJ96eprzSw73YRWDKbKms79ebd9pAe3SFGN7",
  "key26": "3876KpyiQEmXKiJmZCM3sp7Q5mRPYkximTM7BoNxupngQbc1maLnccWubeZaFQmEKUcvu6wJCmEP8DuoVs93y6Yy",
  "key27": "2fndKwNNLNTVt89fWKWL2vUQ6Q7SVAYfNPpcfovXU72cYGN9XRw8dMKKYmkmXW7MPgJjVAkiYYJFunhCrRLnUa1t",
  "key28": "5DZZF9iRri7rkoTzx5WNbKk6UY4r3gX8NcsXxQsAcRomozrtVD6McWSQfjseUSJw2U2xGdDavUeW9YP2TDcHVXLr",
  "key29": "3FZmWruXDiUACerngPyWGieQWrvAkBbb3U719KMgmfCtCWLzEa26Z3mry2YG6spFoGfjxLPSUuNNWmPqdKnyesxF",
  "key30": "52VDxZsPzJQKduWcNrK99pMJska2pXn4jv6o9ryevCVNYNtH4fP8WptTPtQ3FBU1yPzKfGX1fGaotKUBrjnvwtf9",
  "key31": "XyqHYMaC8URa2LgsNwuarjr9o2zYorHeFGTnbkJuLUFTB1Jp1KJANbvhBbdY3Aoii9eCA9uothTLkd5CA64Biw2"
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
