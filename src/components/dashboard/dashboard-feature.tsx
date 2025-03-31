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
    "2FL1zHYZnEU1xpBGgZ1Sj5a17os89FKyiFGAMMJDWuygoKCk327ngR9X6utghH64oyU74ZCS9u68aiyMrF1FDpKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C2yjDLHtaZDLP9nCkvHwiUvoWCtsndeWFEijEpaETmecAVPxtjWvfbSybUQCJVuDgBHe22Jdht2SbMZxGuK1TbZ",
  "key1": "53CLV2a3Jjn5AmStapWs7mjT7QzbWfEhn6xEfE1si68JFb4NzE2SrFaJuopNvQnthtLMxK7uPxwAoty6daR6oZmP",
  "key2": "4upBP4i1mF6yeFYyAgoHvUMmRtS4mr7zFXxz2ZQ8pgPB2qToYswH6NLRVj1ctAvEieRCQoVh8SaX2ak4nizqbK6P",
  "key3": "36ai8wZgjnsH3VZ5HnNLxF33xVPuZGXrsWg1FecCWZuats4dRzXQa27KwVJ4UBifcHokiGpwUn6rCxSBV8T86EsF",
  "key4": "3MVZj3eWyze7rp7PPgXdViBNqEjbqu1FYpqhaJNdvEjGHRd8q8RrKZZweUW5wytUdgW3Z2V7L1rKpjJJkcyo2vDD",
  "key5": "3RESDJ6yYMpewegxooszBG15YXyp6vxcqK7NbNryCdJES1c9dwwCJaHhpGpn4PzZn7gSfDvSB7XUFEhufiQ4c8st",
  "key6": "4noJu8h7ba1GDbc9xqpuX8fsKDsEnjhkNzfTQqNp1LmT59dHni3fRHKmg89BCFKLXMCwvpusdRUcRTgMGen8iCSg",
  "key7": "3D6B7n4iMQrTyymkhbUEiTQUqHwZZtW3ZTbLr2qYb1ivQMVxf4wKgaRtPDV5aVW9KihMusVhcVFNHqoGti1V1hTW",
  "key8": "rbCQ3GKvJDoBcptYxXg6qCmBqZfRFGxWSa2CDPvGRgSseKfvvXcvfgwKEUyNsorocH3pSLM8JrCSPL7AYtemHD6",
  "key9": "2pL9TtFUVyeYryM6jyGeQGYqczMTNKP82q5VYKJCsaWP5gmKczyNYsxcRHZy65XHJe8uW3TSksq5t1Z1stC6nqsu",
  "key10": "2qGwASVqGD4yPiWhtHSB3HEk5uai5uKj38d8LAM3X9oUbKKRgYTq7wVjshMEhUsBwZReZ2JTqZ4vMyKPg2T1ZdSE",
  "key11": "3rtqz285kwAeTZcBYYhEeBduaTBrnxpzLB2W62ZSNipJYqyp3vJTEQ4tkbyvm5qTbtKEfTKKWjpxADiSWQpvhBBy",
  "key12": "3gAK9hbxbAJ4hgZk5HFjaGysbaKMxP9gW2RgAjC7ChFs5Q7jkEjitpYRF5jTac37WCPmwPQrxVfTffUvVDLy5xTM",
  "key13": "3euiniRAp41Fnq8PQuL6goJujGEE5oWLwHUX2MgV9xTcQActMhW9fzMcNteK5d9jvwvvXNkChDcsVka7QNmyWRAX",
  "key14": "3YyCBkx7SPSgLV4AGNJ5rsNfJ9BkbrFNk5gsCFrhDoyhD5GeoXBJdQadMJB1Vv9RaacgP7cgZ9mWiFhtdLfkLmt9",
  "key15": "5yB51DLFt3P6M9iXcZmz1cMQt1tZuER4T8jgzHN2KadQAckgxqBN53sNfTdbQ3Hq7RqQXF8PN3369GUGvxjbgQnH",
  "key16": "4mLcRWpmSQWzhgQcYW67QQMDWtFj3eKUMKyTw7CfsNNovGVyhmS2VjkJVzf9cBqe7zrRWMSasroaUuiLK5Uwfeuh",
  "key17": "2dUTXX85eCYmV1tGkc3MvZraggXZGvXzPiTSF4ZBbG6D8arEwHvHeFkLqnBubmRGvjgkC3zmDhj3YmMzoXNHXuqz",
  "key18": "298BqXPPm8iZGbUrjr6d5FiMs2d2SXjYXjmeVwApuG6xX4LJcPfM99e4HRkUb77EvVH4CkfqUXczts7QR6JjiuHy",
  "key19": "4UvsQLt6X3QUmBvWHLvshgeXao7SfavtGfgm2uyuq3krYbvgxundhGsz1DbipsFD2fuETkj1s9Fd6NWWBe8HftqC",
  "key20": "3XSnygwA7FkbXBHadUBAAdxJYXkEDrtyHgLbYEsEsQsvAutUJzLjH2Uxf1Q4dtMVtSsuVW1Tk4mLJZuMvuJuxuE2",
  "key21": "4McAiq7KCDSKSve23T9yWe5A2yqYxV5ed92H6V8xPgEHQkWL8dV53SbtrekMNAKM5XL1Gh8FF1Y2pXNwaxDWsWgs",
  "key22": "3mxvj2GoUcc6uEteGzDYiB4L48SHuKtxcvH4i2YgGNFPp3WrBorL4t3rgT4LMjZ39wDxE4sLqN2xVpnTjck62St3",
  "key23": "Hi97hgH6w7owa7swhfPRV5ydNS7v4NJtYt7emUGvLxTyb46sCgCBfwJsru8hVEpDG32wSysfJGq4zYBb3yW3QTB",
  "key24": "5uqDNYUyjQTkgvgXuNJyV4NBuk4LGPNoFo8TXQz3SEdACz7rFAUroQidyKbEsmdBN5YJhxZutMomnwFHyuzksFkw",
  "key25": "3p2tfRbsVNx7gYPF3eoiNSvRpUMWYCp9LAUmS5dYB4JSNCfZx52CAC4nBLsMf7A8YBvAoS1BFaGDzC9SfRf2ssQh",
  "key26": "UYmWuMB6Uy23ziBjoQ5nVPqybVTYx6wMHuGLTPZmwUus6wKEfHmujsECXx3bcgXSdwFp1LHMVA7HK77Z8StNwFj",
  "key27": "4nkfCng7Q2PbcKHR56BPX5YHwVxJciKdrPPvgPU7SgMGfFYXGLqZpU7VcPFSBR24vxuWX3mHDJoZnkg1A37LEHUs",
  "key28": "38rbki78p94QuMvkNXzLxZ1p8tHhVrN9Xp5KK8jFmP2qmdR41yWEqyuS1xcBqhEnRi4DvvHkVH3i8BgEonGyzCbn",
  "key29": "546GizxZnyFxZ6RXCpA4arNQo4tYvfBFA7CwQueLzLTJVEQZMgTPpqbyxiXdqa3d3Zxoiz58x4Zmw3tNVmt5rYyy",
  "key30": "3PdHE5x37G3K8KGHBpJ18abmH2NnyMn6fuJ3J4CM6gdP7sU6ZU4YZo3UCm5ueFJGBwNzqw3xLPzXnZPY4EcPT8J3",
  "key31": "5VALYJzPgKviYahcFknWC8FVrUH3Lz5dYcP8EgGVEopMBBqPfa5jPXwPGiKNq43sMvaArAtmxnmZEFaUM6ZWEac6"
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
