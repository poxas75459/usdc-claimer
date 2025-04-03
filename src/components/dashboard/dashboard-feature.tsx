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
    "pPQmM4fFdAjuUBmtEoZe7uJjuiAkqtSmRMv2Xq8vfRc2AoR9mMeZanSH51DFmvinQk6GqKa6cmetVYevnagoWZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55WjVXZUnyVMRQM9dyxjW1NEYW6wCL7b775eZLkz6oR14GaS2wBPzE2NW9RYXcYyf8Zgb8c6EpE3zfYqMZPXj4jJ",
  "key1": "3Mfv9ZipkhS9gK3eQ5jo7VTbwG9yt96tz78czoRjof9ovZU1nYHd8aFExRxqpaPHtvdzW3pKAQkYbtN8tb4fesXC",
  "key2": "2DLj4DZ4V6PHud6pUfLRC3Hdg4pHYhwaGBCKe73Bh3NotAhL49Dp8oz4CSZf1yLNKg8Kfx36iM4A2EgcBhcqvhqZ",
  "key3": "5j5PExv1aAEm6GPW87BzEYDhRd5mxTrrMVYzkB9WU7sEKfMZt11KKheHdjwpK4uNoQM7CERfKg2xhaE1gBzcy9W5",
  "key4": "29yGEEms8W3XV7oHWDbvmnwHWtXxvJH6Fp6GZet5qNX8snPFJhqRPnCW7Qku9BCmpwdzfd9eFe7SyL3QAz9J9YqB",
  "key5": "2wopZ4qLCQqsdbpwmKbc2q4wg6RSWNXqa8rdn9C7c3L85GTPcY4163vqPLtoKooE6QxWGRRp36Xu4TDY1iGixKDg",
  "key6": "34ZiV4VswtrjETizCijyefFbLnEF2wV1d5QRH8GPEN9chzPXRPJUzWNUWoxMi8Cwj8dPdwCyrW4ftUbQNnycTtar",
  "key7": "4UzBy36fMWmjyibsGU5oNaA9HQPgxGGqHiWqsEGfG1hpc7RBW59eGY1gLPosRefRNVhJEWTU9HhqiLTt9weRwTaZ",
  "key8": "2WLok5i7nWohUEsJyCyFLUXjiszpC1mU2jUgR6m18BJ3GDKs6mKoWyjkB17BZ2s5ASah1nuTiT6zkFfUXfRpjfJR",
  "key9": "3DXBtj5oemj833XVq6UWdqnHz68LNZGoBADsMGy2Z3jz1MjkfLT8C7GMbYFfRALDKoGrcopH6XXv8iJFzguBsDTu",
  "key10": "57e3nRiF4hWdx8NRyUVTg563pexp9yLVFqr3VqpEsbfNUa3Cx79AMnXGsUz7jeMAEaEYS94sTBAdV62TdWonYumM",
  "key11": "4bF1CzQqkagzDqDBA1JGhfzxf9r8akDFov28WdFzUoituELd3wjrR3atjxLhJX3MZeSmCcktEdx7HWdgkDrHaREd",
  "key12": "3ocb34R6W3ruZovQxRHrn2UmCSZqy25sPzm4LG9iZGeXNs7xjLoSDzqS2Gqcsyd8sSgN9FP64r4tysohysFnnqEi",
  "key13": "2n8XXfX6DCduyaFQQGVDqEpfAbMRGuEhLpKbxFpijagAsTg6GVPyp6eWoM6EJEsmKVHmJqytw36rsh15y44ZZ4Xd",
  "key14": "4HaLRqKYAWRNVvuyDYA5Fuv4BpN26HFy7z28FSvVhTjc3Z2rpEwzUE95EBZaCD7tEHNRgpdaVNyda2M6oEtg83bb",
  "key15": "5dTZg6w1ATYu56DMzMUyS7VsQ4eE9UxmWDjPcioVNGuar192QPWUMu9TrHXkRmtmSJw3VTUzvn7Dj2C5K7mzEqBT",
  "key16": "2TCBWqCoo1zbwxaUZG6NdtpAE965tT1EoUudxYNUZtso6Pt7Y3kuLcxw3J2DFLdiKfTtG2PhXiDwe2PdVweXV8uC",
  "key17": "4SJm8dPVLZvwY4xjuXJR3Us2PmEnaQcj6zof6yVMU2rgRxNi9afR9WgxjWbjgNUYMqaqMyF3co8Geio3Zr8HrMeL",
  "key18": "4LuF1MQryQdNdQws4Gqq8ZSLYc4dFvmfyBSdvwN8mbN6wKBSbZyJDVEDi1CtQcxtUiraftXznqdU4rv4tdSFjGNe",
  "key19": "5nFfLiSHSbUQxAkZwNQBnJFy7PX4SKWPT6i3aV5a8dThoUik8npqtuJu2QdVXBuM4TpjFxm1vMHXEbjSAXg9pwn6",
  "key20": "21J4BdptFbERK2x7SZMGctVupAerCpuvL2aqcYeTdyJFXdZbQrexbauqCRUpfwMjxfycB16UXUcRbSyQc8jGJVtp",
  "key21": "2nWiDDmUMcqGv6jeH4uCZ86LXf48PvdFsGSY8sj9S3mSVGJycVfGcERARznXA79tahLNnEhB1gPEZS1BNNo9GZt1",
  "key22": "2adHeQXgRPvRugRpr8gMmKDEbVoVajbY3Nr7a43MwemAFy7kdRkYYzR2CXNhVGJenpZvQjhK9b8X4DRawt54GQcr",
  "key23": "gV6c5qgtZFRKXKYRwwxBDp2f2jcfoLCKStdoHvbsXzZxbWoWLWqXpj3ZzW4geb3yp1V8qN9p15owUL92xNqqqFi",
  "key24": "URzEnsCVqfnwHH7fS2N7SmZ1197jqBicUwHv6Jzc121tpvEE1S2cveidjMrAr1SdJomp5bMP9mzi99bepSyzxoS",
  "key25": "2av1JdHxM9yePvWbcwxgMLU8yYrFq4iUtJxfUWT91LTWHu66za6FNfLTZsnwDarjbLtkAFR3CEKGzYHie3CQKAdw",
  "key26": "5PFi3TFGPvRkAS1kmLea5Lbj23fQwDWRER8ErZnpV6pmcPqh8tJ1sm6Tnr3cLnte7cbsW5tM6dECeMZ2bPhpQtkR",
  "key27": "2k4TzjwW8n1Mh7Dzp2RTqWKq9w5dhNhVyPaW7QxdxZPEjA11CeqbewbmdT5BoWRt2Q8EhxSUX5jkccpFd3HR3naT",
  "key28": "3yzwwFQyRBR7XfJnBsavw7oTf1iJRd1fCP5yXAYBzszms1Q72CYPx8ue1F5JpLFaQ32JYWr1u2bKDqXPns3ummVq",
  "key29": "2dGMQVERrpYc6kaWgccyKpNC63ffSb9tWgrTyGzAPhAjKHT1LSwH7779ahrwh4GrnEigBJEBU2mt6v236BwoWzLJ",
  "key30": "44PkmbRDnT8A378VE1emX3pt3GaJr3TgGN4U63ipoyuf2N2MSKcKm7xrQuXe5cBvvUZHjSiFPyXkFJwPAmK6uBa",
  "key31": "3FfT2Eq6Cg1qhKRCfDSAEmqxURosXv9ungWf1K2nAY7MA6z6kawv7k6erZhjHYJ6YykYnrmQy8DhyQbFLUqhshgW",
  "key32": "4jbQ2WchiF6s12fMSaPvBDMcrNnSX13YNwFd56jGNNHVVtN8VLFmU1pbFFw3uFowLCpYz9HcXEiUFGReCUUdyA1A",
  "key33": "4Xg3pRm2LjQuFhM729htRNqULJnSvMhxMkFPsughaJ5DjW7RaYWeBaZxiF1Hb9ymuJNP19Svpmqc1icEhNziyYdZ",
  "key34": "3yDkiWJhSxFg3q1c7qcHj9MUjAQg9qWARRAQUNukHgbX7MRPQ4LrnSNVHrCCZ4BKXdJTkWQWNcw5Bq8Zke5qhDx",
  "key35": "4KgHmUtbKq8YsV9bMZ4fQpTvfnMLD1gmkJSiFTvPm6PAB4uRGj3WEvU1gD29ubsg85tGTqhgFvPJD9AzhTCMDVZL"
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
