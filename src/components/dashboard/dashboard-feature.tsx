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
    "4xNnR7dNVgwpsYZDgUUneoB4YeuDqMvYyQqU82gm6G8CNJtvuWnzNQkwkaWHQtL3Hgp2XiSbsS68GnL4hYRRqfzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4onPj4aJeqVA6TfPt1m5rvCMnCeTEscKStRR3aTyevA9VDoouui54qVcievRY8sS3zdLxF164fYeBYwwR1LWuDiR",
  "key1": "33KStt5PNVRnDCf8VcVAg5ETPDWfiXmBQbwY1AHUTv3cfVJZyuW3P5Ej9B3cUfXAP6nqgK2EoGeghLCJmi37Bite",
  "key2": "5E6Zwsi9wHj3rZXZVUb6WSzZvKcGCFmPhhxqcs3fnpdgrv8c3sdFCv8BPGJ26sHrWkKBHY5DgyFq2GrovZgGo3o5",
  "key3": "9ykKt1BJXLJwv9YmV37q6MEs2Eqx7oVr2MYTVwzxd3qWSGrW4tF8Mb3mRxoV7MimqkgGXsNY53t2iC1ifuNVDmq",
  "key4": "5F55fhPnoZWrPgr76519Ro4qauZCy36re1NNDsZnd2MJYaNumsKgLvNoEVPvgY6DwQn1irp5DHdse9kjSLfvXDiv",
  "key5": "4iPqBSbHRCYTS2fw1VQPcZM5yWetuDfvLA2adLPqQ3u53v4E2eFsdPYAYaNHGFR9ub6UQnB2AxnWkVR16Sp8ffSi",
  "key6": "21gb8fwdNFWTeejKmAt46NnQej73vHTZarSjMh1e4AJYskpyoiEcBsaFkrRGaRvFUWBdatLWf8kGMPYHeDnfjgwL",
  "key7": "4njPgKPe8ZY4H1Ej32HgXjuJoHxPpvaqdZoUeDTJ3eRRPVWYNMLfVYo12KHKFFZJTpSegVoNNmPo6RqxDHj7DbQt",
  "key8": "2Y7Z6cBPbZTGik1TwRUXWsTd78fo3VsfkuQ5AZC8f14UtG6qxwtJ6Trj6Thx2hmn8n16uLzBT9oXHKNQhAoVAKXV",
  "key9": "3p4wC4FLc18LeHR6QNUhLCo5Pvuj8Tv5JU1nYrEPaQViUoodYdVgPhasnDXMYP3QzgveZRAvQuu2BzFgQLTurW96",
  "key10": "5DGosjqJRagh7Kqs2AFJt2qaC8EByr7sjJBhPW62WZHRz3X5vfnRRupRorf1uCjrB1crHDZpmWUwNwMhF1YGeyrY",
  "key11": "4GjwR7pqc7TeRnmbp7EUNvG7QTCaER13bpE2VSEnUprv9d6KkLHGskRuFByTeMYT33k4mhUTVpKbFBXiQqQuFHKz",
  "key12": "5UYJdawcdyttCHaxncy2wXttaDVdWAR8KHAmSY9vW2akEnhvmau7mDNkzCujwzfxEeb54WaHZHd4MJuKduvQCSWf",
  "key13": "2ruKmc7DvrekxUvuPUkVTAUmAMiuQuWgQgEhwDXd2yi3BoT8r66y3V9dD4xopEwTSGUz1KRQfVWWnpFGXynbFTDJ",
  "key14": "2WMmQT9iJay9N6yibjcmbgTBDQSP7FrDbaXC94vxCiFHRy2qU1J1dyCEaHGDiUS9FtSzt7WyrktiTrAzx1gK4nyK",
  "key15": "a45gLnBjZmmxtwpkyHVGvgLqoLf2XBFjZi6mtJi65o7TvewN2FrZYst9hXbZGrcCSDVBqAUJ12JuHcRxuib1Qfo",
  "key16": "23w4qzdoQHLW8G4u2VVGm4fNwo5p9HXJJ66BHJ9gXcWLp9DUtGo836znNzKUKJgfQysVsKJbx2RcVPRpwM3vzU7n",
  "key17": "63HzCfpqtBNm5akjcRohGsv4qk3Y351Q3it2hu3R3RmwMxqVJt6R23cUomfBH6352CU7PZbtiLYGBmZSRhqDKWBi",
  "key18": "5HcNMEk26Fun3LpEGXmx83z9pTh7M1nK6bwNbwQWcSp8qzHasB1oytZX8bERWEV1bG1RLtWveVwQaKrQajbG3Ydm",
  "key19": "4pCQrZWR6iBGeuUyisQqYuKY5JFUGhVMt1yegN5V4SDqCwopzQRwsuc2MuFGhH9J2E5VeKhUgXpvAycV6LoJ6F78",
  "key20": "3nNeLdhei7kn5jvGTTS2QecfAp38mXQ84np4aBSmGMy5g4KuiLEnkWL6MnKe5voosG11uDvv3PP8n1VdNwHjS6nL",
  "key21": "5z1KoKBE4Bg8y2a1Arv5EE21guVvKjzd24eVtNntTcFSgQpfoc8nL1kTavG7j5UdvVvjCcd7vs49tXtemk5oWTk",
  "key22": "5WjrwdAsHhKYsPT2t9h98buPcGokUbY8aUyw2D9MYiAsQn69McF22zNwKRS6QG9PdFefahgL9Sx94GGYuTburV83",
  "key23": "5gLvt5okAhTBtH9LcebDqXWs2mTP5J32d94a5QyK2yhgSJv15Mod6p4KZcLCJ9TxrT3Y4d7uHmTj5c9yNDew1a2J",
  "key24": "4neYXfM1zu9AmaNa1pErS7a3H1NcQ6LfNAWoexKFgPz7th8KkW4hjB2xAzUAze286qn9Ks8DmJLQANmnfmNhqwmy"
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
