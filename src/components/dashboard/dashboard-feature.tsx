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
    "53QgS8Hu4VZnrt8NHBqw6a4iLeALedZw3CADe9ZtTxWYwRUPL4YeuayCeBxL9AVgcGpaRqTpzUFAxFT6JA3taaLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nuQasbZCUjufugoocwCvbCeqiwnEs6hh7arTCLgFd1LvES5gYAfiATZs2Engs4ujHdCjDsX9StGJJfqZdBLp7No",
  "key1": "piJCQyg2JRps8LMfVeZMB5ApobvzQaMwvbr3qr4X5PZbJQQSCgXBRBK2vE31WrLoXTivUuh4Do6VDVE7v1WXZWu",
  "key2": "4HE5jPohrfyWn2V65YMcJq7e5dcr6TCDZZGuSaNyjuiGHLKaJ9vLGK3kLFYLphofTVFHAnvn9CQ6Db5ScJ4AqjoA",
  "key3": "3bq8cALcWjDzc63erWVfBtyYFxBp65EhbXSJ7i6ApsWSfkjrdaUZSRTwBUVz5Vb5dw2uExwLm1rMnFFEbuF84FDf",
  "key4": "2sVX2UvdtwhnT6v3Lvh8Z6QjFikq7NAqCwossNCZCFKpbDdYHD63StMSTiXMpNU3jn16K8FJs1WFYnH5wE2zRUmB",
  "key5": "6iQW6yHEKV1WTvS9TwquNAmk9YvDF3HHrUjraGeMrX6M7bhPN6H2oAgLwvrDHrwovT8UN9eeB5sj4u738EsVu5e",
  "key6": "3SYLpNDDUmo3GCmChuHdTK6R9MP791wg6NBgN5jTzUXKhQ2JpworbjyzQ5PCGL71prgc84zJEC1TihhtKNyogi4P",
  "key7": "4BoHWyR2Xgbxh6mrqFqFCc2PUrRoJv7dobYNNjrqnLeN2Q1VhQB4fKDWWheVCxa7TS3ff2GC354KQh7MvUXeADmP",
  "key8": "67UNqgmTmCnJsf1XaEvrtkPLUkziMmTSaReJgfCHwZ5XSXYJZHsLaf1yBBcs4XJpPVFU67V28jeZZi9PZETrcQ6W",
  "key9": "3i9xttRNFjqePatMLb9JjPw2apM6aJTkMkEiZDKrhgavpUHMbL3v6gF7CmP5JNfGWHxxCgJtAszapNhiZeAifLiX",
  "key10": "5AGm8kYezHCnPmM3MogpZ2Yt1JoRYqpLPdphWC3ZHr67FswzfVst6Do6dj5u5U548RWbE6Fy74M6hVfcohpErRLp",
  "key11": "38jNNaGiR92TFPfN5dV7HFRSa2nfbeZMbAWLpyjkkYfeBeRp1VNfe4WEUxygmoenAvTmhF94aZfGejo6TicHhCGV",
  "key12": "45Y9K3T3k4H7D9o7q9eRmfBDR6uX814ZnYgNsJCCeLgi4c4VUx2bQkbfa63tk5dZ8ZY8jPfr5HniRQZVfiGkcoAn",
  "key13": "4ZvxKWNXxaN1q8gUhkbYgpkpXBKNcVPkJJixznD52Kpx5G7TPijXHhqYPCZNCCsEMVFcMZ4PBPDyPKqyMSB1eoWy",
  "key14": "52MdaN7xDzP2iMFboxoKLxf7ib2Q77DTZr2hcV1gwGG6vR3TmKTY6CHrsu2v8gnC6FUMfQr6fH27814jzy4J1mdg",
  "key15": "65F8fCK4733fZ87QPxQpiMvLBUsxBM5gwcZKbYbVTk3RD7WLwbBdapsLk4ruMscRnm4CvHnUKeHakggupLMqPQad",
  "key16": "28supiGbd8HduCcFP9SXs3TvtiHphwbgqte6747W76xP5LQ4JWoygDE8HPKP29GJQfTSTBjFS3d6Ay7ouCn2Baf1",
  "key17": "4KJkJRWkt8FRFRw7AGu7d1ywcgda1GSJpkYzraXTzaaTx2M79kQEZLqnfvVwbyoSBoS1TiAkrssNVvnvPaoqgqC6",
  "key18": "5dFrQp27XCTTwC5wAXYeu8tG4Lbw4ivwY2WwL8qg5tQpHZsWuv927ax21BReUZWFvGcoNemWMwtCgeo7BVLLyvzz",
  "key19": "2dAzUBisKJzhuCCX7wJvkKWEXXdTSZGByahWXe4JDngrKDSqnopA6DoPivPWgTCRitw3NrhajY9YM6zKFFea4jC6",
  "key20": "2jem1PkuKKG9MpaiRxt2wQcdqprZ3qGN2szReyMutncssZE1vKbtTbQSgRZHjw7rkFXsQqqPjnCJYkcUtDRSBJc7",
  "key21": "37rAMMNRBDhy6jGw9MmAnhekD6JY2hxruEfk2FoUxDHvW9eJGiiX3iPrA8UqHczhedWR8gM4xuDdU1GYqwXbMaer",
  "key22": "29Y7LEUKp55WEqqretY7Vbq5nLLcLUeL1HUNkCQ9faoDAadgEf1bLbhW99SQvdjuCXzAVhNsTsgJRZJ1oXKsyedE",
  "key23": "2KazBTWKqw25XPfSiN3ubae6wKVExPkUc37vyReHhx648yxd7m8MCsj7YF2DdwedeemibqGwX8QdBs3CxfXin4Fz",
  "key24": "UbECJ6gwJN7Mcp4T4tXgfBggepbaZfn2WWbN8UzwfsiSy5t2tZRW1gu1g4wd2aidA7PVDMrx2hE2b16Z7k4GzT2"
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
