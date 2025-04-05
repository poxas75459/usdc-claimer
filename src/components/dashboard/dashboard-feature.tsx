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
    "NvY2193awJfKGa1eBrY2XUwdZ21RyCPwxN3cSwE2cpjwqzP17VL2r71LDE3q2GfWtDPayayQc6ZJXAtANnmoN9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dXuoKcTpXmZTh98rDL7owE1HBmG78daDqJWxq11j8b87Q8RCyRmWhUmvEo6vdwiuywMh6st5c61G3yLL6awd8Qj",
  "key1": "EtnzfDVmrXra3V4P4XBQr3r8pNDQhXBRgBpufYzGxRLP96EgDd2LoCJwbAG2Uk1LKEajK77hNcGoMEeG8wDxxix",
  "key2": "nvRtFsMRWcKUspeRvPoX4zC768Ft3afXbyvsckafE1fvTHoJQkYjEftoearMXVyg41Cbqyy44aZy5oMgYiDq9H6",
  "key3": "4cmDons7Ua895eYau9cpvi9DndgCZY4f2CFN1amcjW4uaB1Go66b8t2LRuVQoKWu2mApbowAyaTBGRcdgjdhmjws",
  "key4": "63SyPfXiR3fx1ZFG8SkWvtCrdJqppEXT9HmfhvXchUWvvvH8U3zby3U5nDj2STL948h3YooPcgBmBrsid6T7vCyu",
  "key5": "opqjmJDDPHjLp4v6cAY4xvLYfPRM2FkAgCiG8ZCbra5oxY3cqxzosXBopV7j21gn8iuRZULECgPpbZFM4LyPXYL",
  "key6": "2AN7mzt3swHrqgUvzhK3snRxbTG81HQmdYUpQ8AqSQStmf7BaZCzrvftCCrKjCh8cYbGgjRNtkWBwsC7Cu6HfkUZ",
  "key7": "5ytoPBmPoFmDhU8ZoSW9DQ6HwbwTi76oc66vRKiHmhhBD3uksbErhp7hgcnSMWzJXBFnuveUiUj2mNCiJ2DE1jbX",
  "key8": "N7jYdP6u1qDjxX2vuvg9SSkdEDgVbLWRvpbYXsu4CvHruyrdMAfiGxuiNrU6R5zs1YWRHAqYwtSkyMsxbK1oiAz",
  "key9": "3dNKSgqqnUh9KrjRVPj4W3kRz1gFtjCb3829Mg7aXao3hk45Hdkk7MQRz6zai3fHGvCzZi4rCat3HLJwRfp1LFmE",
  "key10": "5UcPmLp2JRAjspmct1GMmC7uQ3x4bCtaz7B1WcU2AgcxMmY4Q5oN1khpBFmpi2HapesU4NK39b85Uq6yo5SBAEfZ",
  "key11": "guqw39t92y5dGCB2xK6Jj3AmjKHHtKaQRFBQp5fQUnZxM4j4gqzHKxMABc7E7FjWiDFXTZk2wvnK3D2Hxixe1yt",
  "key12": "2UGr76KezDG5ZRj26TWCBRJYh6KU2z8dFtaGvmL4XewaD3JejCNkDnKZ68hTB4GKrhrVkUYVJVkhDCcqzoJdAcpk",
  "key13": "2sGW89ajNrTQBFWJhwVFsTWHaXx6HiNSFL2V7MJ75SXZSSg5hbpbBhSzx72syVSoN48HzwhYkme3vHQ9ZBNEHEEL",
  "key14": "4ukbCTBfRNVyHULRF2WoayUhJR4aq9Pui1GRdVw8HK9uGVLhrqX93z7FkiEchS82AsV6Cw2icAju69caKv9efAbz",
  "key15": "yXyF6M8FVrD6819Xr1HVkjGwR3vzLcYp3UTQKp8vQUAAWHM5vEMxaQ5CVmfei7VHP3vuM7VZNkwfRwwCwMwoVYq",
  "key16": "2z2jci8ZnoxyqSVQGLjRdS4Us1as4EPKnDmub7ZEuo79E29QLh1AGqpMhKnE7vLnHAX2jFJErfPbZHYGKr4fxJn8",
  "key17": "T7nAA4XEwu5s5hVoM4s1yrt2jZBc3Bf3uyjgvyubFD4tgQaiAXJBvjBR7dekWgMFeG1W24RQy5io4HsGsupwRpr",
  "key18": "4cLGLuTBm8EQkRtUizxqBdow1K5NP1PWqHhZpZgCvAdVcx384thioHQJWP5VpGMXZgEzmom23P3kBZRo1wseihbm",
  "key19": "4GdqF6yJTqm5vqBCBVnNP61599ztGxAVG3ZXmgGDApC9f7G8NRDnRH23CVWWmGbvprHYhxYMgyrpjm7CTyyeMjND",
  "key20": "5yL6BDc8mkFMLoUndXKr1afL21EecS1uegi9P8A2JX5hid9BiiQoBNcn87jhfN89AZxV59S5GwwDXr434B2n6don",
  "key21": "2Mbeoue8HzgEjXaXFLkWUSRPBqAwsrXADCdzbDLugVNujw7LZzZ8nhEWhdTRf5WXiVk3NoPZpSkWXwsiJFbgv5AZ",
  "key22": "2fGQuoFjLVXDxbVP4pnsFqxYLej5aV1xy3AALFttNUEtow4Ehp75Vm5pcDPsp5RsczpTt5bNGQUimW5jgkESzvcD",
  "key23": "5zBf2d6pJtWSFiwx7iWJ7XCd8fntLbQNw11nEiFzToAGTg6XUpdi47gPvCJkZaZW3KDTJAPSPmAnRbmFuyVDagez",
  "key24": "4AeKWXvuuULSEYh2kdiru6ZGcY5vnm97EAXZgrGUd32WAexYyGxCTTEMXFtQkxCKr6VQDsq7v1tTSx8SEgdHQvHE",
  "key25": "qgKVs7s5iswEFsZ3bvvn14V1A9xJMbrgoXuDHDAzyKAu9xC6fQidDGUGzSaDA1XximgnEXEPpEiVhDCXWnwRH4s",
  "key26": "KxGm711mHCivCh8EmtFMWfmuDucwnJPWxKZ66haSEh2uQh5ucFQXkWVLMXMqw2V7EByvoCvMrqnAzoBRonYNQbk",
  "key27": "3BRyn5T28YvhGckcWCHLi1oifXs4eiVX4uiVm4kQwyGzSe2VjZ32jxgNxzRuLeUgGcZ2ERgDjo8FYQJkPcpkXenJ",
  "key28": "56jP1HF6rVcchMkam5TFmxY8o191R1ggjPV3jEpazSv5hW4iED8vhNpeKnYV9GDmb5eWJJ6qXcy6irL36LumFj9a"
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
