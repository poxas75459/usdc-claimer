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
    "2QPMSbQwvPAVd7QLDnC8DvqkQMkkQmS55espoMspRGxZqQjpJ8zLvMrEamXmQptBAVj8qN4yUJTZWYEvfQnsvFrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MXCCzqb8wxjBo8WbEhyHWNXzY3HWEY1piZK1MgFaU3osXeBgDNuE9c6DB61meDBmwcBkXHfvZuafLr4VRtum1nB",
  "key1": "5ETmiG2EFhKijFYJDhBDAdDYPAJ1s25Re9ii6oWJj2ZBZX9FrYfLCXL43yNCMuFcBA5GaTMbRjrntW3RWKvQJ22v",
  "key2": "4aunQQayUPHwtCM8yzg1QmBdYQJ1PmYYHfGYge4zfaRtCaTiAPS9vh5i83FiY3B6CXRuozYjjw1ufnZH813C1p8o",
  "key3": "fknAeDEb1ggcS8xmaKBnoyCVMMJKhD23GoXcnihnRPkGSgGNb2psUgnGtenMbHp8DmS1Ekb6QnnSBrATGXy2m45",
  "key4": "3E5XXWqFnMHK7rbBcd9MwSumaRCnjJiMJfTp6r9ymSDPXCX294WDu5oh8j68tkGRv2JtCb2EfvX2F5nzmFhrE3PC",
  "key5": "xKJ8Fd937x9A2AnBf3KhgQqTqaB3XzHHMnYMg8sPdnLKZKxtbnx2HSU2Wfm7DH7nXPGcTeBMJFb1C5a5682JvVL",
  "key6": "29wdudyr9sNS3c96m1WxvPPT2xy3vLtfHMe4Rsw5y6abDfPHRzFvkwurGuvAf56UPJUkwR9tUoaPGNwgWVnHSDKx",
  "key7": "2FWgfUAokL1SfB1MJMhKPaBTdbgcXq1HETYSRW7cX2ykK1gqeJMJ5gQuzndHWydGyVR4HeL2RhvB7sTDwQRfrUV2",
  "key8": "28AMjVvYzaumscpbR2v4Tf4m6bwDDKmmtjwx5oy5nWjMoJHm9wnkpzVBjyeu6aAnkoNuhSgCrBZtJeu93Yq32qmC",
  "key9": "4oFX87cqoaGmXdZwMD9ZbajgZSZ1hf16hsW74nUozHtjLXVCTP2bv4ZkVs8cymZsr2cfvRyQL4mcLKMTUf9d6oDi",
  "key10": "5nyBnxuR5aW6SNHfsaphv1DcX6T6LwCoHmdNypp4G6QiAyKMpr4GuQrAcvy8f3ayHvQPM3NYmNDr2YMW61K27Bwa",
  "key11": "432m4Z7gEH9HxR35S1hkbQXLTGgoEWPX5Gn5DLN9JEZS2fmnE1CG7mgdX7t8BcagVdA7k3dG3tpgHQLb6K22Ce5n",
  "key12": "5tYNw69ZKwVYKdrs3Tn26v6VxrAoZ9RLKTZvFqxzoV6HQi75StXTcWhaeQj79HULtX3mmX2mXaDi68rFMJbN2ady",
  "key13": "2FMSS6cgR51ChiPA7LiP6amKcJoWJfTiDauHGhJXGviU3GVP1LFLkgcrihNjXGRecwEXHuPSduvrpfKTerXk2Dej",
  "key14": "4K3GWjpWZWRYEJ6BzGfp6C6A4KDyoBDwuxisqweuzAjRPPgRYnYgn1QSJVRugcXhynGtHwUrLVQw2Yq7keHWVjY",
  "key15": "43YH8YMLfAJ49jp8dWT7ffVbdGvHRxAwCjo3thM81JW5Zp3SjdSiFBRNJx1QLgssFraQu9krd4KxE1C5GPB1A873",
  "key16": "zyDkB2H5Mix36W8ymiwuHoxVxGYggTNdzaL6AnkueMcLC45gLCkJvNAwArYUTWVzrKGFLdqwMfc6eepAm7cRuDt",
  "key17": "2bJFu8Z2ggfj7Yg8HWerYtjmfidNUYYfhVQRnXyxs4FURek91otyz4kmQPmsTGXev6JZXC6REdES8cznirrLmXim",
  "key18": "5U8qWPiB3snFCgdkcrJTgB55wXyEBBWhLf7Qr6m5yKkDyNTqacHz1wh47G79MbFJ4gk7jbm45wVYNn1YdqXxmrEt",
  "key19": "64hauSsFT2eNWrLe8oA34CV7ReKpHKtxssK8tmWW4UsxCaGoGKR3zELqNwyfGbkQzpXFkwauwYoA6uT7K32Jg8WC",
  "key20": "3uFiqeKDSdiUHEnuQBHFXH2D6cCVXQSH98kGSNeepFmueGZGWZ1N3SennNX54UoWy6b5dv7CMHcehkQyLLTcAYx3",
  "key21": "36U136VXVSPmug4gTwEzVcC24RPjzkvJqWHgdWFwfaxGjb46jvBEzP8vzBQbiAwZXS1tFahUJsvJxzH5wkSBaurZ",
  "key22": "3PH2WPkAjU4uRtPMNyTutrJj7YYiB4Vbbtgz3TJqJVEqUNEaKdUb6G16riAq7RscRqKyEYx81eRNNbRaqEnG1CMW",
  "key23": "3QJHw7KZq5sGCxvyqyX7zjKTgHhEopbN9tsrG9XTXXz7nGk71CSUvWor6oyPVPC5fsxhRxJvoBb8W9E8uSiwfUFY",
  "key24": "444Jvgep2Z2RUjoTSSkLVDTPSBN8k3owNyebBmfnGV9CZnh1MM44QAtFz88myPcawZjVB7xGrF2SXhtSyspTBDoJ",
  "key25": "48t7Ee2C9jaNBekNg1YYob2UriBYyegam66qQcnhQuvLyLNsqQSenjYsiFwRqPjc1kebKZaVD1pDe5A5Sdp2VZu3",
  "key26": "3j3bG67Sei5bBUWT4TretJhSYRdCQsac9zeQ727W6h6LLBgYRQdb8wx5TEKSggJW3MBpsrLyniFV51R3RcZCGrGb",
  "key27": "4hCwPpKCBmqLz76VtCT6C7AXCNq6J8uG4KXMskXH5fCZJ1rJze8uXHxvfREtPMBYBGrscHprtu8tiDj9GzvXqq51",
  "key28": "5MG1jjTTaHSTum5v75bsE7YVULKCF4iUhvXbQn738k51Svvg8LwXLE2Lxbu4cy4KrNkNP8XDkZtc7jvRJGokwLBM",
  "key29": "4oHVr19fYjaDxaP84F1ifNwcPvyAGZ72i5nWRjz7yPxu7GFc8A8pJnqmEM8cQFxSqTTM37KsJ54zNJHEy4hKdQ6r"
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
