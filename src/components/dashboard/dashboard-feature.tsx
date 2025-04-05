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
    "3bdyhC7UFRGN2MxtkwQqCRwpKpe3nLp75NCXQZMFin98YBEqimC8aGsLibKRhHpDs36MkSkDAZyLL9R2hQp5iNfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uhrnekHoUkQc9WTxpY91oHjR827whQrdXRGVfwVGSmiPajWYB5mHPJqZSJaPc5n46zywavFw97C7YBe2ARo1EPM",
  "key1": "22KmjxPjMcWXoj69Xd71z8ccct32Yesgvie8DoPREY5PUkwVRSoxMVVkFni3RtqVNQk68kPSa7PFnvoZeRhTQTSt",
  "key2": "5FopUxpn6KtQKvrtokbXwdY4mE7TQsboaNJQpWvX3ezTWoiX5QGnw94LnJfrUZsx9mdfz4X1CaRcdgnqp8diAsoH",
  "key3": "4cHm2paTVCunqNiams2HgQFqnSoJxi42ZxHJ3jWnEoUq6J8XK7p8fq4DBjmykgwWosbdGN59UTHUWkBUhVkn5spW",
  "key4": "8w2i18eMz8dxehiWJkZDymdCTzDtmqzCiciCZdx4jePJeZhku2WWi54cA54JLuWXLtJYRpJCijsHBpzxCJzuNAH",
  "key5": "4m1Rkndiruzqzid82ZQAM2Ksz2j48ZFnxzg4xK1Sivd4FpSYFFp9tzCR1xGNtFpowEkLgLcpvhMGCsP8FZu234tc",
  "key6": "578o6CHPnLtfqDHAZbHV6fDdxQ9TP7TFMwmZE296r3Z5rCAw6R7SQCC3wYzKaahJWeogkV6oHhKFLuT4hyFt8bJc",
  "key7": "4FkKLobDjUXUuWHQMs6Zc73XKfdG9SbpuYDq1aqDPERBGJfZeCuRj3ygCJxmhHKuuFuw3ba7dqFxo3EYKfKX13aZ",
  "key8": "4TYHz2S13q4rYXihs8tfnxhFAyCm4qZise95wLAHKw9EeVTJQNpzMqxGVSDZ3xR2J1PtqSpRVqSDsc2CMmkfrGFC",
  "key9": "4dRpCaRYuFVbujkNwFF7KVHL4B9VhDAUiCP4pMiJXN2DwGhvQMdwxXa4jmoxs2nxxr6itbUGUcPcEts2dYYhKpo6",
  "key10": "3QgGag5ywSDHkXRfQQxEPa54k7PtWgdeGxdzLMU2mXqcVU8Wbo5e7irmBLujdtzEFpc7aedDehVWf5XtzeEHgFyb",
  "key11": "2y4jiByAkRSk1DnpJ9LXJkTT4WN2wp9rAhMMhj6SQmTiUvrVKsiFzrW4VxCsGsirMpcYyWa5sDwT8rGn4DXSBzFu",
  "key12": "33h7aM2PRXMvvWwVupjr5YSeqdL6L49KAMaSmLChTQkKr9WdfcfupcEQZRaEqz6aHdxAPh3ZmAJ7CYfKadAuj8AF",
  "key13": "BGWP7sqcJihrhfTzE8aEF6fke23CXTMghfraDYjFUcJayg9GQ6k8zeJGjq5cyXReh9AVwBmYocNqPRyrhscaeQs",
  "key14": "FARd8DU3YqjKVFsrhSumyHvAJiTtZGotUfqFAx22UF6tT7fi54j74gyb5wyyBk4f5LVw3PGm2su7dZZPgNQ2zuY",
  "key15": "2kj5ZxSd3rLMQVdWpvnwPoGjSk4Rci1yvmcezBwt37gufwKRRDtDwDGKaDZWqrFRhmFkecP4JvK7M5C98TqV7uVp",
  "key16": "47BBMAh5Fup5w5NxXjk8BEHiUCxmHCEZQ2uGZvNn86NxkEe1RmzDRmggsqF5wsRdxLcR53NnT6GpXkT1YwQ4sZPj",
  "key17": "pzY4nyuMoK4LGStfbwdKd5gcMyy5qrpChxcbtGRtnSMLEM8ZeuW6rFQGT7LStPjhbAxisLY89XJsk9pCrjPnJ6S",
  "key18": "64yktbDPnuiHi5AYyju3Gbv2xHgjq62NNLu8GKUkdX72bekn1D68PTAVheeDb85dBRYkwHo54ViRJ5DWqLvF724C",
  "key19": "2gWS9HyiHBXEktiNBvSZWZeoiWhTjsCDsNE3j4Jw35GNSTT6sfKXyd2rV4p6EzHBhJsw15b5UZupHqk5yMUo6WPd",
  "key20": "3G81Nkd7LR9GBzmdVxZ8nocbkLMPrrqjYRjGNiZAVxG5D5SpNPZQNw4addMDPM7v9fPrzQ7CrTn9jHra84LzfnQG",
  "key21": "2dZeM5Zj8ZtaWdLDCMsBiPco5ezEy2wt1Zi4AX84ADijUiRhPFFGf2QoMqwgZcFpYSJJbM4odZsnunSQDRK4Rv8y",
  "key22": "41YDzfJifW32BNqXERJUDUh9z2oDXFxJh3sAkGnRtNv6DrTv75aotQ5xqkMqyyqvSP65kYd8iVgd2Wpd15KQdbmZ",
  "key23": "dP8AV2AyMUzBiMScdWoP4BdMJoqVnDquM5y21KZhgbhEzLiiLHReg43Uinj1i6WaQ3ztiHEDQN9U3MfP6X9MQ8M",
  "key24": "24baBf8jA1rJz4TszwLcsAB5GaFG5ZZb23ezhT8r5b4WMi9LZvqqbMkDVyXnKXYAbsXBfpmNLc9je9tC7kCk6wKM",
  "key25": "3pZBnb9YaJzATZGWMwjvFcBudK747wi8ijHsYRuFGTS387kPP8Xom4CDYrX9UUDDRBWmXSaPUha6PtB9TYTxcD9g",
  "key26": "2dAWxXCW1M2ZUa6qXWb9zcy1oWD5PaAi9w2DK2iPPQ3L77TJpNN6U7u6XPGyNiCjVMARR8WNXhnxBtfk4gjvm3Re",
  "key27": "2hWPiq1JV4CEdtMGZbUafKeNnJ2GRV11qq9U8BqRXD8x9TrWHAZTGf1SjcvXoGenzgG1Z5KFXpdeAqZfzj1xWwT5",
  "key28": "7TDkEykkCe9wkwNNXVtxB5sVeeVrPRcr8xYpZKVZ1jaBT6n1rk59sCLThzdnHc4KrAK3tEmmgVhjoixCWxGQpN6",
  "key29": "4uLyqN6pREiEthtYgKosbk3bwsrtK9UUasqJnkrsTponcjzDPEMuLdajq4FmervP5umVhMv5tH5TPrJA3Rnn8FSs",
  "key30": "5UZBN5KWkmLuf64Mkt4E3tnwuRyTfx4CEwR8hQW7mLhrkFk8AnVCwDGpiB22gS6KdununeQHwauiMmG4QSVmySuC",
  "key31": "3RSCRSKjakEjy6morxysDgNGXp4vFPWHGT5rCngxyLdKVdBKBGc8XpLTZxsGcpsqUNRie6cEQTz7qSppp9qpui5J",
  "key32": "2NDVujPwnmzfjTT5oLGSVygrQCDiTzEVA2BKsjVHvGtHeFQU6cZvF3WXkv9HJ4GdZF1VittjWnV26qDyTuBzFGEQ",
  "key33": "4RgD7YHvMfo7StBad2UCPvV5T9mdjkt2AkChsR2gagS1dFXxPyRmquqHs3v46FbQAw7q4Hpu5eiyBxPLaYsoCN7Q",
  "key34": "3ZTsN9VV75DpWEedzsRdtK1cS3jA4LE2fFnm15SfDnuL684BhRfKgXCC7STNTHZ8D42smPgg917mzLfwnexi45aE",
  "key35": "36skRMe1GXmgUTavfv4AfcquE6ojmoFzrW7Er8X3U2fscKsTXkw2AV8fa7KdChExkpDvDTvdH9pVWZj5p45G5BCD",
  "key36": "5Lmn7hahLMmE8jwhEt9sxnXBqjSaApGwWe8q3C51u1tp9swSxtbYM6rkBvSUKyfdQ6QQSPqwRu91PUFn2QJw68bU",
  "key37": "5KgVSfBB5sXVYqGLuurz9JBbCcU6L5uz7x4ncdddetDPU7CxN2kGsRgGRNt3EppWUe6kf8avh712rgPLnns6j9jt",
  "key38": "o2RR7NYzcsXx8azgAqqD8YUa9a4wCdL5GSXW47TVfgdBd87mRVoiSwmAy5JNZBWb1Ei78WCFVpFSQGwx3LMPowv",
  "key39": "3J2Ncx9iThLqbvRMCRAQeeqggHTyEa8mxqy1Ccrng4i2qULVt9obBxbckTLbJ3g8cDM1PC5NJAXKAUEWpcDWVsZ2",
  "key40": "2xcfmFcWUTNxmwGJ3Exm3XpyeZKy4GG2DDNp2jG2gAQVKk48SyaymthRAtFQnku37JTr5hXWxVDVdRUaLCR74EPo",
  "key41": "4SPfyY7yCcFErfiQ85gTVPWZpTB7ZPYR9NSx6QeYYdRRUVgTTV3Ur1hT163qF5zUqnWakrz4HSwAXTUdprpzaMqJ",
  "key42": "5yTxZzeUqjKKAPBiwPTqWgh6SxFqyAoKXe4mQSNWS7H89B8Yv4VxGmu2aGwRqcst5xG6f2DdQFurSCauVqJR2ksE",
  "key43": "4Shq8GqXd8u9dYDWQPVpsNB6XgyfzJW3mLznjEU6STiJndmofdz1X6cXaENExwrYVYfCAArXcRZTdskZYHU9VuGY",
  "key44": "3pvReW2VjKfQyNGpNJZugki5DnsRhn8iNgZNrABNoSznLtgn4MmjE8mPrh4uxxoCFTBeCTK57GANoGcMAfc7zJSR",
  "key45": "4mAvExwQggyfZ7HkgvbCLD6UyYo7YtmPJErBNu8GQdN2csUBPbcxPwUZtic9KxY8zwx3BgsemWPz9BAHy7fdEEdi",
  "key46": "4y4Y8S2iuiVZPxmP4gneum69rTVVje15GJSpU9JtuLhyPAWTj8MsR2QDgPvWNYmuKdj3DLMCSRkowKtA4JHKicpU",
  "key47": "C6Aenw4RiN7HAcrLs9TPHvCGZM8ZTidXNzWfdMWUHKSgJzeTMNmDZpsvS8EVc4MBcH2hbmG3dG6i1ARqckydd4i",
  "key48": "3gK9ZGDzseFAuiCXjXR8Cby8U4jt5TBvCnQWZBYyMFs4QGmL5Y44y2y5Dv6a6QEYAgLLKLfRJdpibf3jmTqrSgSp",
  "key49": "1y7CcHSBR7GnN2pXJqtmPncznfs2eT3icb74rSzgQhGefzSNtKqohHoS9Ed7GPZgAGLS2vJS3KMwKdsQYBP5PMF"
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
