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
    "4RppysPTibak7rE75WrqS188ec7ePzydiVdUZvTnTz5xAiQ5a9ZjcN5hF1b1Mp6EYEoRPHrTePDTdHusaXCieLo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ULkYcX2fbWEViDWpNmsUqpL3wX4hMUUdzfBmZUXnMpXeWNWLFevZhYXykVXUg6A3TThKn9zh7UUpTsQtcGW7WG1",
  "key1": "3KXGs5q4Qafmw3fEm5TJRNDLUai8EaQ6ACWQ4GtWsbN4viuo9gkR5PX9KjWBnoV9ecnSEZhf7kwZSUKhwobjyqsr",
  "key2": "4HUdZ2dxEPSMWjWGRMri45oSdDBXzs4Zrt2nXfXWrMCoM9vLnJgTS7Q4ZsTf4fqLSNec74WW2W76gDcab1JkQyqX",
  "key3": "PiDGGCMHUs7JAR8izUm1a1Q5ngWkvKP6RiqjwQsRX3QwhNhwhy2z34gbwiV8m2iYqene8wdvJnweoNE4dyiXp8d",
  "key4": "5bcvDW6aMFcbdFYmTw5irPJP73zS7FyC4TDCVigBHkPtHsWggBie3vRYK3e8BPC6sBuTorcvRcCz26rYigrWdGT",
  "key5": "3LdQ9hLNgddYmLGGq5zUe4s6j2kUNWYQDLUZsXY4u64imbLCugtA24zgkkZCZCj8zuYaGjFr8SDtL3X8GszMuhGQ",
  "key6": "49ZC4ayDrpgDgJCM9PpgfvGQVDSVrxjcnMSUBJxCw7HdbsKS5sKj1d1ETghZ8NnJc22WiBrF5hjkgRYaYfE3STyV",
  "key7": "2WTSqumbYrgpEsuMRf4BsepBkPQicd4KDk7jaaN4tNjybSShDfLuRc2at3L6GxyoKYVKziupy5wZ7sRPYHnFKPAh",
  "key8": "56Q9BxJJPiCkL2BAPzdYtHgQicLqAEgnNaKRMrLwR8M8iB5K2dLgfspojmWSemS36x32AUT8oGFcBfwJPfxsqPSx",
  "key9": "2fre1tmuPqFw4mR5NiemGfHaXVcPKWasFPxFqQ3srsJdL8nVD5nqibsAehYh8DNR8ZzTrKPJdiov9ABugtNMNffc",
  "key10": "5Y2zx3mB763W7BdRoj1YaAKoYLpwjGqySb4hti2mEL7sx14yQnV5TmPsifBgn55j9XQAvPWxEEG3dqjVcFw3YVoZ",
  "key11": "5dfphiDnz8i7MDnUNGiVfJZdjkvp3xHSXcJtV8SK7iSNcDCKZkpNW6v6zJ7Xdby2Jr8VFvWXfmrSo6BmC354epPt",
  "key12": "3PpyMR4Wi8LketBTzkkR6GFAa1qCt1qSQGWT6aUPzJuCtYX4yvmKBBA8x91kbVJozieJVEYx6qFfrp84gfaZWsU",
  "key13": "67rWSZiiUSNmfvnFtc7TjWX5JMytt71B8CTx8MVwdf3tpXMo3Bmz9StGW9tUhGvaBFXFYJBSQS1nrGNQvrvULyAJ",
  "key14": "bAqRxYCL3gcZRvLucS6Q5CQ39ahgzufUDz5xPtw3F6FA82WXnZp62K9Tiq98ZAHTEc491mAPpwCj8AxwHhQ7NoQ",
  "key15": "5UM4yNLvwxecUzc2EXMcXQ3nwZuahQueFuMD6r7nraWkKmyhgu9pkVSAkhoR7czHMG7pdvSec5dsgnsyAjfKRDnw",
  "key16": "3GvzY7tdHCbSJ7H6F23pZq38CD9QWgoeNL5t5feXkSDJZJTC6GU2nyntHju4MGDL6yjydH8dmXftoFS7yFBnv7Bd",
  "key17": "3HmVVhokuDS1VsRYEsQadng7R8cd7rEhynkRZthmcW1aLAyoCY4bZW6x1hPNiwh7wTjZJWQu69vuWMteyzYNCrgn",
  "key18": "32Z6p84vUrwyVGignrC9CQj7dVyosLKbLGjowUhmT17TY9pvG9wdphqxAY2fh1zWxw58StokCD6Ux7u6aXpSRSH9",
  "key19": "5uH296ufbzRV7QTWoauoUnxW2bSMLUkgvcQuSgdH3MXhLRNphphxCFiNPm2MyZePnqpBnsgaLw71JcFXiqSQZJjP",
  "key20": "61HJqrNPt9vup9PjJ9v8m7YtHb3BTLDwS1dnGX52H9gpPgG8ditySx5NZ4h1DFHmbhxBBTLCAa2Gi6Dc4SZzAyex",
  "key21": "GWzjr4EUmN2jtbic5GyX5kHUNPVwzkCXjXciAnZ9kTa7W11EFBzLbT2acKUaFfrUrs8HEuLiTCRZe45D7nV8Qkp",
  "key22": "2stkXSm7PtqqYTiW68JdzskNs44Jz4MJQxMr5BEZYHXvcsXj4CaQFdPQFzjLWJ83asxZ8RHDVmRjqu5Yi8gFshPg",
  "key23": "3wu999pEr3xB6sEquZ4ChUKQL7x59AyViSMFBJAqEzd8N42JuDMFmH4G5fT8rrznhtEjodxvspZRT5x5n96rhmrr",
  "key24": "5skSPT2t1xajghKpcito95G1eESvCFdcptGm3gS7xsdoajsREDYTmeRw751sc4zjUS8bD84qgpEDQvjz8a9rRnoE",
  "key25": "4fLJ7x58hz5fBf7eYSaxkHQtGDar4hLXcLgoj8eP8croUo3LEDX3f658wHfiktzZvHEKQEpsqS6SmDEgDP8nQBX8",
  "key26": "qs7BSmgTe14W7rsjpo1EhkGTy1P3e7J8dcyqquaCtjzS7vYR91Sd6XZguHGnLjGXZ1raNifHLkRZhfDuH62Q41w",
  "key27": "nRVS17rXRowPVXhfVbC7w6VgxX4qb7U9d17jquimcB56ivjqtsETL1HiEG2FA4kkHv5i9ydx1sLgrpxW1BFWVo8",
  "key28": "2hYvokhTFwxaKMo3fM6soQdAZgQ8kai7ktYjS9N1xTsSAhDPRyiLZC9MYSmeTTqJ2Qo7hsb8s5s9n7Acsuq2JWjH",
  "key29": "2xiZCx4zZwRbEM8PCCDPVeiLn28GpxNHcu55ny36XzBiX13UVJzWXzK8rWWt5qYc6nKxLgtiGz3GVUUt49iyi4nF",
  "key30": "4Eg4pSo5swt8ASZYP2W2xVf4mcr3aBoYBJtUbwTyQRu5u2dNax9c5kjFJhNRntb1odk7JQAYTvk9AtXoYNYv19cF",
  "key31": "Ex8k2DCa1a1DE1YZvezFHYSmvTm7BBu3xiE7bsHpEu1QPMTvLD9ybL1QHZU24GkmmPRn3sxv6k6w97ArLa9pnwY",
  "key32": "6DkLRfvdUi9EEQ7cmUoa9mhb19H5yMzKyXb5KdnHhuuMAgabNZ47Q8A1F16kyJgVZBaoVigWsA4rsxReZjoCaJx",
  "key33": "48gg5tETbdYSSiRKdsqioTBya8WA9ryPxyc5KKaBGLqegGTvicSzDpr7QdoSQHz8xZ8qxb6TKXGthjGdWyrHg6Rr",
  "key34": "5MhJEaywE3n89r3KwtnsUVcWqekjnPQcGno9mVd4rYT7bcuRik8Zxxv6oiszAhBd88PMtRxXGjHgLVN9X3pmAhzg",
  "key35": "vH55QCnQu7FFpsy61QF2mrF5vZDStGfubjYuQV91rtsVKqCKGYecBEystKyaMspVSSfdjgjU77cmcew2N78UCaU"
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
