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
    "67RQdfjqmDHarHh5wgcF72X3uxwEpsxiZCdmv9Azf2FR67npn15ogoX2J9RXvDMNTWk8HGZsYtrQ1Zt7SQejGxCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ifQmTddzLAAjmbjeVo4X1qdfypZPZrpejGqfE7TGSAswBDrtwkB2oc6zNsgqFNRq5b6rnFEQoGRkxrFej2rFQET",
  "key1": "5aXhdvoReAEL3UTjgN1NQKeXjAi8z1sWuuc3BeX6MNbVWhDhR1QhNFBggggh5gSDUkTo2UM8QMx5P5ASixzWk9Wi",
  "key2": "3WcmDmtmFRbr3Pgn7YP1wfq4grfgWsKi7jwjHTEqXnb9i137692PKYr8f3y58QMi5oVmSNGeEMb8j48qvu6JbzkG",
  "key3": "uJqdmK2S6Xrru9Yjnw2RdeMtQGnJu8ezdH96oXebLpfa84UU6s5KmXEbcWb53eSyfU3yvUGhkyagHnYCThSD8GV",
  "key4": "4dXw5U86LTkXYtmQ7TCK8YSs9C6sGeUYSKJZwxtiztPwpJCjRmf8mSTzPwM97kssZtKKFT9zTLnHbC3EHdiRfKcs",
  "key5": "4TcMq9FtFCYjPN9cuMqj5T51aukniYTomGTbc7YD5RZWzSURezWEtpXNPrjBVM7gTWww9NjjAgvnrBUNXDvbRGtA",
  "key6": "bX815zffMwLEo61ceYMe6GKvmNg2j1BTypNbqbU8qyXn2pQ63kHeJouRgwp47NqLnjCZ7dPGh5dq7b4fRASAMbs",
  "key7": "3uJWX4A4QsFKzeFC9ys9hVQC4yw3sc2huEi2JjQyZ1jDNUCr6ewEXBxq3cut9RbJLRopZ3YuSSzgfi5HMLtSp3Qs",
  "key8": "5GX8ewhskkZuzMYF7M7BNrYGtdL4ynsXam7V87s6UZj4bmzuecKS4aHZP2MUJYNVNhCMf4hXhq4BkMc56UNyiMuT",
  "key9": "34vjEv9behMdANvsohooTetMcZxyitxfv7JjavW9zbByXHnRrUQofRbA55MTb7LeSwfNpK41QuQRkq1M22RCpwx4",
  "key10": "QktDY1GHPeBceM9pnSCDVgH3BhiXEvxUwfr5mifcromCXVBQtRiwsPvdpRuPbqoYDWc251qUuLUcZF1zBuCoV9N",
  "key11": "2WMeLowAFohRJZTjfvrBzQ3g4qgtHwrMCgNg7vbonsTiUeC6p8p256WibdJHwoe9DVqvhVM7UA2UaZam7JTPKUCv",
  "key12": "r9JruJdFPaHrggFZPe4bJ8AU61vNCSRk9QrzS8qmuVXfSZRhFgJnACutMv89cJNFFJfSYEkBWw1FELELW2wp33A",
  "key13": "3pRAddU8oDdmMmP6112eGkpd4bvN8iCweZUHyEV49sJPqE5geZTmEw7hasUmdaMoXugd3N6pzAV6WWtpQ9ftk1Zz",
  "key14": "5fy757nU3oMy2c1CjY3FfSyKUvUb6xHKMEHE6MqwnkAmCkA4qLCBGkGNjQHJ1WC5xCnUrUoAM6BmisS87u9rzfo8",
  "key15": "5B86rDE6GDWpbwbyrjgEuSfSFX46HMMvzSrEwdPFx8FG9wStQStncxhGy9XDSB1bB3wtqoUQoqAGyeMwzepJZ7XR",
  "key16": "2MBcZLZPT4C3uKpVosGttL4pzNveJxxU7NHNF66URRqE5zgowr6QsHbiGCNRf1eqMjX8bD1CqH2oEHFQRB1bRJht",
  "key17": "4y3wPoTQNxpLUpDWwe7rDzXbvgEwJEHQaqpiKkypKGbH5uW9TnKn4zBRUZL1N6aTyPA3tjjLaKQTx6PbUJk95zDA",
  "key18": "4KLDMHDU61rsFkZEKnp8t19KJp7E7utJxQCuULmT3tETNt89oHTXKs9uEG9713n24Vfu2U97wGmdkDwA9EYGMeCa",
  "key19": "441FwjTbhHopv6D3zAJhZBDR1Vk9ejctwG7nNk3ZjBnbNFM99PyrZD87ywjcR2X5SB7vviWZFCc67exP5wBiE38X",
  "key20": "37D23eLceRYNYWXNHDT8BdgaKPnWA8hp1dLDccN5rUwAZhK3u2xCyQqVmQWYTKZNvvaCx4NZdAC78iGPUsQNSyL",
  "key21": "2HTmFc7pzTv4GjfrAy9ryWvkWz8Mu1g8kLWEMcYFNkmitxeg1Kw6Lcvsed9hYhFYojXE8W13D2evThE9grf3DL1Q",
  "key22": "2c9rVkaHq5qhfkKFMC9diTorJwf3v3mCxWbuJEM3cNjaJzrUo3E6WqZ6XwUhDjSnjkgszbwDSFd7woEbTzFhjfMN",
  "key23": "5Ujao57p5XZhRrNMmThmC8daNgpqDGd2zCbv7ANuPLZkRr2qmJCSPr92CJCHgBED41vRtAyin4AmE9sLrGMifmtX",
  "key24": "RRzXxX1k2av4cbTUKvVWu7VGc3ZS65av3JRdguYrCqMNxL4B5S8yHdsjmSe8zS3TQeHU6dYT1KM7WPuWA6xFWQY",
  "key25": "2LESaz8rVZcW9kRU3Gw3S2APL7KvS8w2qxfvA7pnWiZ5AW3YYSh9GzrBDS8GSnV9qtiDhyyApFGLoPAzaAhJVdjj",
  "key26": "4V3rtN5HE6xeuKRcfhuWUVndeKBE5hYT2SsWeU3cnZhgzhTNjYSbNASCExE2Qc5QwqBuYpXGWygnbBKQFzUaxPYz",
  "key27": "We817jdrAqkvJ1NeB7NKmfjQv31qLjs2DX5dfgsjfhf8JdKH1wAbCGm8khDWpxuqQRcyDQgCYUzMdTfpQ5GmoWx",
  "key28": "5SS59j2Di6DyHFQh58h5CBdCF9c14rqfb48HC5SyKw77EeK6Nabt3i8L8JCwJ7zfy5XoQ2hWB3QZ6z61s1cEiAsn",
  "key29": "5zsWfkEAKwU668Arhn4mFCxHPCKiUZFJ7WxT8RB37nZb67LKmEtHgZ3CfEQREFCE2BkcnjXJo5yudfVeBBsSzjNN",
  "key30": "4mLdJqngB6RUfNZYETjoWYPhd2LDAgkhfU2nCAAS3xbT7LgWTRXjkJXEZWqCmHVPt7sQaywpajgYW256i9fFZ67u",
  "key31": "4S7BRC4bTBfVT5GVn3hajeGb6ytRdhSTCq4pC1wiD65VX46Uu73cAAoA5nVw9oEkMqthasZA8brKLuxrKivtmLPk",
  "key32": "3JJzbENeN1p73iQQTzuFEuskGmEhc43F6yjwntKtasUcBikgf25CsavzUvGDofB3t3E9PRZJY7vR4t9FiSiyicQR",
  "key33": "SmMN564UXdwinEWMmtwk1YfH2TufN1YwhN6KXyZGYN6qufFGyCDDyUuAEFNcraUR9rnsfVksYK5LVxD5Bqqu3yg",
  "key34": "4JqvZGVCKh6hBcMiX3Y9foqG6NQUPiyDMy9CxvMJ2Uq4ZzV3dDc24RkhcD3S3Qbgnpw3vqUyiDYZpiJpM7vM57dS",
  "key35": "jg3qJDmg3gBhA1FXGR9avw9jr8nzaam7jnx6cSMMcC2YLfBp4mfSmQgQHCV7HspWC4TfpJLCLUJqQTBLyLN4c9Y",
  "key36": "pWW6j8b5QybtBtJAaLf9rw26VJmtLJeKnVcCg5HJ6xmia9Yb7cv2ck5cBaFWMKpR3FbHd1wdc3MJtMz2jjRPRTt",
  "key37": "2S8nazgPMBSt4yyV6yrPWRrAvEvEVygiMNTWrYfjDCxnMkKfx2Na8sDkBxBTZwJkk9yyALxdP267gr8Zjtcgyfj1",
  "key38": "xzC4FV9iaHbzubPfSNxtgHrVxoBaZUMZ6JFPF7DNkpAhajtFJxeg8E5a9hCJFNnbXhS9MS4TetS2zcF7bHU12gK",
  "key39": "4YYNMXinpgJXJvk2omkvupe3MwSMyQSAeSo8BSvvq4gufRRF3G9UBRsoM3FY939qKysnEcdqsgEnwaFeq4pqKaoP",
  "key40": "4LeDAk29NQyfY1PSRcxc7zmd9R8FvfTPkrd1YfiatVBF2VS8Ba2CZmiBKuG9qd4HM7qZEdKrT1E6Mjhd6K4mavTP",
  "key41": "57zABTLhk5iHinvuvq3axxf1P7FNj8zKqYsvp4JSZadZaNnddiuwAocGcYasQEVYBg65ysjWpdsTAa5Q9nwKWB1T",
  "key42": "2dZadJ9vYoqVnP9hzknTnx3QZjBAzxg34mi7xkVGTUgx2vJatAMyE53P86X9r8osrumE27rFftm13ywQ3boAfAwa",
  "key43": "5qrpdnQxLDk3x4P3UqQzhknugDbXsiADmTJAyfnDngwAheqkQZjVvqa7sxK1Tv64jKYX14kGAaphpEDJkc3GNHk9",
  "key44": "4JeD6A9X2RHQ2ZquFFv2Pjdxs34fdY3cu2bR3brYXzQ2qCU6nFPNLQsKYzVHz5vDrVWm3uCcGKfuonpXZxawUKDL",
  "key45": "3R4SwA8oax8gmdXmoo6G7vtYhqs8WbXgvQG9tTDPxnd2tgggMEgtAwrRZWhdm4Samq2zAnRDmNbEYtmeuZpiKmMJ",
  "key46": "WyrmZoj4d1KATiufozdfSdeVYHmbqcrd5Hxx7N3bAjDoCTsuYpRB8tgA4i2aBPsTj6Pd5cHWLW4kF5NWhvdQkzp"
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
