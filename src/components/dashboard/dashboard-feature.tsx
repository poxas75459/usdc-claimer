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
    "2oMAHWTkbtqv9so8ZnHYDwDQV8trKzHbphbTAUHVYNvNgSw9WLjHrEGUZFWqLDvDjmUVWFHJoDk5z111PPsTaaKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wgussA1iVksGqWynNG7qWTuiQpcR5cDsYiCSfagPHiF2zrPDz197NWDTWMeXxqkQe6YujYW4w1NwWurpps5CFne",
  "key1": "2pD2Zrev5NwqVi8VHLCax5cyeYsqxsNhtMiREGdv5NJbcS2GcDTAzDjkDaGAQWfypYzi54Ys6ypM2z8kDB8cbzU8",
  "key2": "VFUJ82YL7z8cNZSFTnjiCRBFEsWj4jJaGVWQWrY32XYgaPMDdZYGbZPPK9iwg1uVwe85TcnLPLR4TbdW2uFSS6Y",
  "key3": "3hUc29JBDjdasP73U3ifPhPKS8LURcuWwbww9nDHu28mjquZuJGXCqrunx44XanrmQ3VTvJ4Gx9fERnYTkZRXDwS",
  "key4": "52JaUtkdJJ4zrh3TJUnfTLnT2P11HQR9yL3WrNGhh52N5VXXwGTYRRym5gaJfM8UKTWw4TBWaTJF8DNX71Cu7kFw",
  "key5": "3Af47zuDBFri1GdsoR2i3qWr1ZXUJAXVnrVyezLX8NBxm7ZSh3rtevr4Kuf94GirJtguCaCuodE7qMdh3JHBkGuR",
  "key6": "4nMgrYVjEJ2QNvVMhugQPtUJce13sqSZrGDjAYL1nhUUqjmXfPL3bKrj3Twrkdy5rohYM3dCWEUE8syPEjbkUnxr",
  "key7": "5XmYP2pxoVMxa8EbjuPbgmKsYiMpEnXBuKAeKypf6xywcmGeurKBeZe3rcitfoAe9EhMmqHBSh4ajTdWpncvgFUX",
  "key8": "4aA6jvRgLVCPrgihrti1FhtidXDvCouMTRc8MoACibW1LfeVZtRUmpxKei8XhaVDjbpnzT5px2otrksVRgVj6cXG",
  "key9": "4eqigk8o55WkSqUVwRsfbBSPZntT4jQs1tszzpKN3gqpw538YNuVbfHPpvTVsxioqDdU9W8mzXufoWkAGvvFLDQg",
  "key10": "4jPBQTY6uEJKearC6heAV6BX9BHf3r4WJuJbzQxaT9DSY9gRHurvRq5ttqzVRp8wobETw4Lm8aMSBSHzkA1p6FnM",
  "key11": "2B4QtxDxPKctF67G2gNwRv1CDZx8opydWQTM5zuVYppBecdmo5F4oHcryACzdDPjXD5nW38nMvEX5j7WiDGxiEAg",
  "key12": "p2yCxdqo8HnGdp938z3TdaF58Ao1jBptFnzkiFtfqCDqKo587Vqg9FgTxZDHgGCxkVoBuBpHA9vNqYpfVMwuVi8",
  "key13": "8hmuDMnYkHkhd4gPFmGaEFVJSdj3Do8ihspGWKGjbj6qPY6WjrzVXG1ANnhdgU76pYXgcpws7pqMXTAyXvuLe1p",
  "key14": "4e4ftybYG5L2SZ1zxpAMd8NUj4Y23qrxztBQ54VXPgCvV4eBe1FVkndEEXy5CJFuNpoLhCpHrNpQXnq6MuPSYH6z",
  "key15": "5i7D9XFAqc3CRQinNvcGgfitR7AyCb5Vi94zssvLr9sFNoFUPjnH8Zf1Xa2bCi4toNvsq5xo7fqm3H8jqxMGr7hF",
  "key16": "5xZKF5z11GiHWirEqAP22XF293TnQvzW3jwsTETJwKj3KuLp7iD7DGPmHkVE6fMKqEzFRVtBoRWaezqxTz58YGQU",
  "key17": "4pHbMHQjWjURVJmfXh4BCUk96TsL6yBPMTzp7n2Tym5i4qPwSjDvAGk93hjzHxHEbqeoGNYKSsgENqwMm5HAK8vU",
  "key18": "5STwEQLSCnYnLfw99tyi5w2Uo98hqWCCLye6e5omgzFB8nvM3hXmE9G34MD4HjvHs81tezcWgUFLAUHPy7SPCeoe",
  "key19": "eFaDqo1F5J18tRzQ27Bb1xBDVSE2gbXzWnnB3Gy5Wuw4yFMqkgSQwrkp2p8nq4iF7kwJXxVCbNPeW73nSM4CaTw",
  "key20": "XTL48qmAs9tnUNrtb7UiqYxwJfd6CfN561TMNNsYtyottPsPveZEWgXFMRee9a7gML5SDpQ9U4YLRKC2RJguLW9",
  "key21": "5jTP9bp9GYouR4GmrTLXBmf5neGJ4Xfz9ztYAdL33dnuFQY7xFDE2N6MPZVSUGzmd8s7n4rjmQrS6x6r8vztVXSN",
  "key22": "XgAs86XiBzU3zoCK8BJ5LJ7WF3DuTh18T5myUtokioY9qQWSav9ya6Bdf3DijsKmg5ZQoRAqHakr2ceLNZjdZ6p",
  "key23": "5U2uQd8jzgz1KdJy8NcKJtyAe5VvoWrip4Txyi7CBTqnZZHRStLdM4YmsGw6hdYMwtXcipxMsc9eTMTnrWdurgHG",
  "key24": "3oCKCMrg3fYxNanZ5DAt3CMW9EYFnypcNXY9X9nvpyKDrpguh7jM6MJxtrw2PVeBoi82fzHZGHhms3GCTQoNvPwL",
  "key25": "55RYhVxDfaEfXEq1ApGhHD86vukSr16HQCHLbnLSQWQhPyG2stp835cTTHu6MisuPu3p4qvJ7nWag7ViXxUGXKUJ",
  "key26": "fiTKvfrntJJHPkjS18PeRjRx5UajRdvS5tFLryxA1krwqF4mUdW1AGZMYgwbJtjKu2Zwpcw6qg9ydhqbua8UZD8",
  "key27": "TP5hJsrYMoDX45uaRk1iotqNgY9CtDxJNnVVsDDgFUjd6hXCq93zGkRSY4C6aoyiBmeqTYBUXKMrRdAGfKK1Vwu",
  "key28": "3Ka8n1KQn3BtcgA6SHoS7j7XCtrVcpPd257pRG5riuiKQZhTVgPjPJH4nuTC958rgyhDLmg7aMFefP4onN46ivEe",
  "key29": "YyXnXkTviXiAYYALUHkEU8Mg1BWoCHz1tGKcYqSxsWyeePnK1FEgaBAndtaurSUG9Fhu4R5oeHW3EXuMvNSZRSG",
  "key30": "5YK1aztoSR1GG8bj3fvjXeFa7ndoMucjK2miqZZDaWCA6WvQezeHJzTLGBNHJTT1zjPHegVyh8Xw8oF3RsFbKEra",
  "key31": "R4txnq5cTUpncemu8bD8HMPXRHyNiLc5LLrrRZSNzuvB6WPxvvw7txTTTtZ1pjcMY1oKjhFhUVSGTTFvGrjy7Q6",
  "key32": "3WVBHaUyD5xb87ZwP4mJEJrAgjxgKHTw2fsBU6xrcKhScLWHCkMRHig2STCKNfPtWfXFdR4WQBB69cZaGZH8ehYR",
  "key33": "2CbnSmG6PharZLEwuSmjT9F39NkUFUGAez7g9tefnPCqBreMqvkzfYhSvJtf2LHbiQoYjqdzEEshsqRqTb7RdHrb",
  "key34": "3qYtF2dRh8dn5THF6TwYLzHyPdC2VCNS9FFxUowfT5HvUjUNAT8GjkvxY5GVHfZEBRytSpZVaHvCnezJNQyZr5s9",
  "key35": "21igXSCT9Sp69Bn5MDTSroXvUyLjPgz61scKZkrT3FfnyJ9JeeKUfxcL8AoRth84Pehd2LUMPFBSm1T2CbKdKogR",
  "key36": "4htirJMLwJSaYE2AVQdW62g8SmewKGECmXbZb6Cdcahvv2inxgs3vYF8NRAb5szsHW5jbGTyvPeDuiLHft5yfkmV",
  "key37": "5rga6sKZwAa3GAfQAeULxAMZLu7HwyiTrum5hS2x699ffyHYPBo6eV4j9h2yJHaNBsrbtReKxXJjfqhPQBbgqWWM",
  "key38": "4Tydkt1GgTTwYughmQDX5dwFCZz5Q8ZUwUehvdLoR8qx3RueQ6oqX9NNpSniVffNLKaLkKW5uc5PJ6CPtCzJHUxb"
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
