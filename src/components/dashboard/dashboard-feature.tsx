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
    "5yuuU4E4xeFQ4Dio5Kcm9ab9J7EubZCA1xsSMooW3D6ytmqzRTGGVohdGd2XedNTZ8YgemDur3VRBsV4JJJ5zXiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fJRP1TaLJMb6nCVJ8x9Cbcd7Fkh419v4rHD1dxnaUX5cdt67EmPVFR79kNtx1Wzn5B3EYehvva9CXL9QKuzW743",
  "key1": "5xXSr1AbViYfJUMbXEJwgwzf38S2a2ueBFkWRgrNCVk4qvXvwHjXqHGAtG8gAHuekPAE2DASSNGkToWvUv1cHbWD",
  "key2": "5QfwqoHvoL2P3nmNznQWPNhpxCsX8a5zWLLfnKysxezw1r78jTP6a3o3arexS7TeCWC48xEdAeZrMCeK62YtR5Lk",
  "key3": "uEvegEHmwZE1H5XEZQ6Y38aFgF94KkgUq6SkSaczRRpBkUs4HaJ4dv4P77J1RX3n2W7WQj6gAgNstHn1wFjV7Ke",
  "key4": "3zMpRnSTzRBHFAhmHpqYonrTQt74prHT6XpyyDyZaixEc4Xfv97goqERcbYhtVnTe57qdamHmBngXR79DDXa966",
  "key5": "igzNrc14StcNDDnzqhTtQzUwvsFoPs8phNN4W43F1RJc9gLmzPUfJUhgstvaZeJyT2hjwRYCZ8HnC3e2mnwQ6TS",
  "key6": "2skv8uood3cZEc6VaWGcbB9ecqcsxMBmjo92hYx1gwS1ZoUZXV85zSsYEskJCAPmVCKBfWhN2aMyVATSegsaTdw9",
  "key7": "27HWeEUGkkjuapXW1CpS6kKs6gytpKHhxLEp71W7JzCx86Qu1xCrzak9aYLoaS2rFmCNNBu6vh1Ynfp9Y6fFBhWW",
  "key8": "2JpSZomJEB3pZrPDnQYu2dTqsPsdVw9U8Kh2v2ikYhwCGyaN1Y2mLHHz8caV56t3gmDV28rVTVvXM7KecQHR6DN",
  "key9": "5Hd5BZ4B4v4Xbuea43iiDSghSaJ6UBAB6xKtfTSfWh2MWneDaHFQhuS5CG1ywqAQgmaWhtY5MBSz93pa3iVCws9b",
  "key10": "9eNYVrHjrUEW4BtCVpFXTnULrJSzgELrAo9YhSHpmK9whPAmTGfFfXSAjG5JWtJg4mmFmhx3XQZ7KXLDomgm2fv",
  "key11": "5cyqjFFc8WPYagv3UPGHeGPCDrP9Jh5pn5Vva6n7WWnMQaFgtyYveMNpB7F35boiRJ2w7buhnwR9JiRnNaQLcb6K",
  "key12": "2Kd3DMTUhgVYKXUgwk69tJmQQp2CN37EisFeT6yGgxV3fSKaqoGt4qy4mjzGfT2SwT7A9d1X111aN4tiGbhL2Q44",
  "key13": "ZvLfc8bCzCAUjwDR9VfFRDxajQYmpXxpnpfRJyVCwJrufjDLnSNYcy5mFvAA2MCsMEaWUJuJyhR8dSPeDBFLNRv",
  "key14": "3nUFrF65aNvoYS4mmYmhy98XZk7qUbUmPvkXcgaSXZ8HT6kNLmNjaxxVJRrR9NGVGpQM2xT1TDArMSk6zJvuP1na",
  "key15": "2JUFN6DWCMuyyyHxZ1PzLCz5khGhGL8Zy87UWnDXgtVGXkCWYJ3HMMFdxWpthMYadUoSGba6H2EdamTkq6LpnPeU",
  "key16": "59pwc2pN8EzNpR74y4BWFg2tnfD9LhzYiaQkTwedeDbnwUvkYWBs3pEVhGRNVoD4j5USmTYy5H2XU6ZfMTk1j6MS",
  "key17": "D3fXzvC8ezpVDjGZDjQw16kwcKRV6b7qKXGq1K4B3T5Fmcu9fXMagrBHguwFyonZERc4BKgt3qWt3JmYWwTtGew",
  "key18": "4geMKZyUfVFtkmrosK2RJ1yvk3GUp7KKzWbbwPpQFC2ftFaUpS5kaSN73ofjVTVsoNknx1SdPvDPQcA5cc1es9xV",
  "key19": "4RAAxjEkqiB4uv6RcHtCZ7KY9L7rGky5khrmcVpocx8JFBeXTGiZdzuL5rUNpyHEE333TB8fwUF76NgKo9y6gHRK",
  "key20": "2T9jAiHqZFMN6ZGDq5ATPmTLzjwE6Jf37Yopdeauibs6zzZFJxVaLPcVnYNX2uDvAn7iEbRyA1wdTYK9bewZkp7q",
  "key21": "2MGk3E35sDKSzKh4ShCwxWF3GH7sFNtPdEZBFquG8BLcZsXWZHSgRqcKtVMXJHEnxX6An4KFrxaKUxiWKaDHDf8H",
  "key22": "4DqEaETxB81M42wtrB9gK7nbVabx4gNiG761btHNfdFxh6qpi3AGSFuvYMpn16QFgAiFuQNSYpwR9Bea2VMwHgXE",
  "key23": "5S166cFmhKXUJAZmgxDbCJwkjQeC4qFC7P8yG7gf1EyRFhLKk2BxQcwEzUz787YMD8U5jjtQKEiHv2wvDJcNYknR",
  "key24": "J7iooa9eCs7aoU41MJFxHBiYZuDymfMrKz4TJm2tZb6AUvYNVwT1QvpKDFGjiu4mXyKFbrfeFQ59dmtFrt2U9ww",
  "key25": "4WvNgkQRmA8KFSdNGaUuc7TkYYzyfTE43Qv5CuMqfbF3gGaGQ5V4p7ZHrVwURV4JYB3xNHJzJo67NEG9vPsEPVvb",
  "key26": "5ubLm2BiptowMHMHrKonZV5J6DYmr1VATSso5cSG1cd2HyzkRTbd3mAHqgUkGSJNQf3zxyTyQiRyorX9y2KBnPat",
  "key27": "4g3N5dzNbDueKuozsGrpNNxHaNnbbtXx2z6bqiHDisjZqeP8ek1TZ3WVerbzbZrDmfqQqWwz7xG72yCebiyxaueU",
  "key28": "2ER5nBDVrV8JuU5KT7JoN4pZVoePwvWkFzmsEg9fEQ3ERodLN9MUKWCyZpxqQ3TYZdhm7TjBchZ1jwVfU5K3XEAz",
  "key29": "34WStry3Uc1hHA4wFsdV3YLYqqGG9PzvhspgvJAjdSbrm64YeQq5fXj8ULB6vquSG5g93peNmysYM1RyRmSkR5mH",
  "key30": "3eZbzDM8hYivLqkEXyNfNa4iEFsMeHFPQRwWQTAoZQGymfHSefJzeYZrPAJeXqyTTK1DWDd2Y29YK15ybpeiQT2W",
  "key31": "25EM87Ci1p2YENd1bDMa5pEmq4QCXxD6Mbhbmrm1zAEpQp99iPsqe9dRocHyE1xq3mHa6BnYDytPR3kJ5ayG46dV",
  "key32": "5whrcpXwZBJh9UTqnN19ivh3eU5z4y1aj33HEwspaY6zqTCkYiB1Mv1ZqzW9Bxz5eDGhYTBsa87Mrmdx6Pkx6gkh",
  "key33": "49FGhHMSRdZ6Dh5xFcfGh6Td9T6BkEy4GoRkQTopyUX7696fTJUZudmctdPaDSasWiVoxwFzn7J98ujLKf1sTauL",
  "key34": "5Bh1LqXLtuKkvb3XWARgnh8vNcZUqMdAPCdtL7KeokqVZnpcxJUuqwF52qrTwUwnc43hTcCR8Y7qFHg8xPswUYcf",
  "key35": "5wmBqePnLY8vHYBNnsdaXRQEhTEc8Rhy316Sz9sgd6SgGLWQomjtRnQo5gfx8vdaka7p4nWG7iQrnwNtqvm1LgCu",
  "key36": "3FcxKEiU7JRBB4sMT1vFj5wYYBppcKxqUbKd71831epRPGuskY4iwPPnN6dhnJz9TxSMYrbT1RRUHFKPSrJBTmUr",
  "key37": "5DqPQxznwz6v5Em9QxmhKPATjEJ6YfCBNmE59nCkZe3PAYcxq9QFptJjA5zxmofybySsrkLzMreYF56G1g3fguoq",
  "key38": "3LtZsJiyxjcX4XmyVHtj5RFKDQCXoHFofbtQv37rKpv79a1u6GoSS4FWn889i58zAq4wmjpNc1Y14bWsRFv4zx1J",
  "key39": "5RCyRTFJWFZCbEUd1XSKk4hYdmouKAML2NJ6yZPK3wxM7cdNxmUM6K3dw2jxTEpJdLRM4o3MTayGhexqNfxzgpf7",
  "key40": "4H4bvaZrJEvJpRph1VkKr5ZXBmh9a2hrkkMN8RdiM9PA5ZAm7sUfNvpR164Z3ECaAXoYXDxBCtQm24XBq1FG9yJW"
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
