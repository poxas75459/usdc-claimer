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
    "5cKT3Nf5peXmRJD75zA6dr931rJcQP6EKESPoT3983o8riMSHuviTzcu9gH9aPHuhjENsuegUjayPfFeeBcK98yY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sk5YxNr12ZKDmueawTeY3spKMNBz8LLRxcCbF25gxMhMiJcaQ5DAYyG7HPVimJZTw1CvhyZEarztFxUggpcAq31",
  "key1": "3hf527FbwXPPmewh5r1N4tC7PP2nTuJJaqrySwqptAhdhkaKVRNsCLoHg7WxVD1yiUGvMw3ooC7uiNycJb5bFGoA",
  "key2": "3WdpX4mbV5StH1rhqS91rREmA1t24RkhxwXnsWqZyy49SePbi4bqnjx7mFxJkUrW65mYW6E87XEknpDRhXneaR5n",
  "key3": "5ZbULcvzuKbmZd3oY2RKZ9fRYexfEtZmUpojG8HbPt7HMX261xPBJGEaP2pF7WgmaQzGMoGsr55ZorLJzkn8YWKZ",
  "key4": "44bpLpCS7NXdis6QWhRTrfXUaqjFxMjX3j1o2GorEg1f4dsapAtQNqGJXhbzeuFbaur4JUatZQk4uSzpQsdbzSPN",
  "key5": "3QSnTpRnc8q7xNbBKZeQXHiyRUk31k6QooAzAm1WMNfchmCn1oEM3B5dqaC74zjWYAJrQ24eHGLk3CiwmcizN82K",
  "key6": "2VhSuz8U2zuBEqMtP7GGm2pm2SzcH9e1yV2gBV9oJKtNsrAgBtJ1dPLS5MPQwVxcUucZrZFAx6dfQ5UmZJtuJsiU",
  "key7": "37DY8YavPPva1VZKGvz7o2JBHREv1apK7bGKNaQfKcVXDE42dy5f9JcJQ51VWEGRiYPmhVY97NQGZJzwEN1bwyhX",
  "key8": "ZSdydVC42HPP32rqPcgU4buGdMfCrzQ28fZp9k6FLrFuvu7qRxcaAeiwSxC7Qd5kExMSTxB1bZizQ9n2uhEScHm",
  "key9": "2CY9u1pKQ23TkBHFtPtuynvABHrfwvnh62X1Bzx4ny9akwcYSSz9bxX7oVrGfPDy5zUp1FyLucQnohSWMFFsJC2x",
  "key10": "37o8P7RxZiMAfA8iwzKLNmnVxsfCrKLJCdF9iaczJwaCsFJ2kxQ2E2kNcnMbuYxVALZ4PhXhmZUQTkEkSqVYstbe",
  "key11": "3Ltdva3vckt8nyvxCmtC6cjRwbzWe6ztSHo42wNjZSwuYt2QTxGPsFYumRX6VMqyXoGh9YYpYXxRU69N4BMrT7ya",
  "key12": "3TAdyBNtTVcnk6HM4DBAmaYvfgheN4BiCfWxaSdq9QeAHdADmNPtvxnwHzkQKS3snLjQwL1yWNvuS99Bbb8ts9NB",
  "key13": "4q29uHujiJ89i4qdna96nXw1R7rQTcwcGRQZTMepTDFDrjm8HRtFPhQgbqYNZjgQxsN8wCHc3KrpJhbSTjbkQG7K",
  "key14": "3169gAMU6XhS7BFzhZQ3hUVB5YV6AdwJcNPTqPd51GqPqYCEcjHhSoLqWhED6yPjPL2MBEruVrr5EGqxoJJks7f8",
  "key15": "4SNxvy8uv6D2EkyRGRrhvviTYzZjAGiy3yBBFJHX3UZmhf8X8dCe3g3srscz3RvUr2XCNxyReFXGf9UgXN2k9nkH",
  "key16": "2HDv1EgT5beREaJP793ESd8KekuQSRqEqFRKNS81LQoHov3QwL8jmq3LVgeGS9T9jbVWmKQw81KT3yKZ3jCBDRPF",
  "key17": "mLxG5NWVP7wcVMKRArzx9z8CX8Gn92rRA6d4W5138yt6brg897gf3vipPm9aZbS8mX2jCTnNqDRCYgd79eG6zns",
  "key18": "2RnvzyZyNrkD9vik81b2p8YaDdZdHq4fYEMxFJotR1WYeusy65dj6WqLY3bf2sugErRtCpv4wYywrFaX4qDbZeny",
  "key19": "oG1PHJrZoqCnukZb8vv3SbYUAySimVY1RcM9RfkaJfx3J9onEyw8t96jRGaGGZWC6n3BLvvxmbwNeyqcv5kZuve",
  "key20": "3J7CqTDhE9FdMu3Mvue8Zo8oAZ2zeQ4eFJrAKHwSnN2WvE3T1s4NKJxzKnhdqZCC8zwT2dBsjn62WrcUQdZ7f52j",
  "key21": "3LoTK9VwqEUtoJAbBvcG1MDHmVX1nFSGW2PKKyCfDu1rfH9dTViaw1uNEWtUtPADRKe8TknP5hLiFjMLqjXV4ius",
  "key22": "mFYVGqBs3K9TYpufN3i2CzGA45x1422m8v5vben7k15Nv2nKYNPqa2xisMdwQyzCU4gwDMZGFftu1VKRNfzHNCm",
  "key23": "29iZfD6YsArrqQ7ZcLtexBiZtvPRYZEABYBuBVS9yoY2A56aSyMQuXmktuPfPk589MK9inD4i22JEGYELHDbnqEz",
  "key24": "4DTfn2mXkG4oUpyi7nPnkACN9xdSF7RXvAppbP1Tg2JcUox979ehBoVQVifM4B6wDJxXR51KzsRjNMXmBtvRJZfk",
  "key25": "3JysqGtEYDfumU33ZCjJCraRyHYn6KmZ2PUenRUu1PnEXFDQUKsqzw95Y9L9GX5KgsQe7EeZ77r7sCq1gKoevk1y",
  "key26": "4W3QHt6t3hA9xaLsjcTasCF9oAaKoSp7WHuN23H6m8Rz8fbdCrx6Twy5uS2Y8T3SQZgyDVCEwJGEaotAmRZeXY5a",
  "key27": "3C1ohCT7hATD7vuY7MA4d3bN8s29MKWGwSw1GoAoiNBeuGgY7bpEB3enwm7RTPiDxiop9jUGTVMPBB1TfzzfG1ok",
  "key28": "3MHhGvw3arBYGij6rWxxm4RxQLonahXKN3BaJGzTA77KtSznRxgEtt8pJdFrFQLQZ57PwgsSsTFm3xwffbFZDiQs"
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
