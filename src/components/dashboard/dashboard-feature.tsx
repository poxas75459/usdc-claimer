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
    "3vWaxBcdqLrdaiQ52grBi2J5RvtRff8q7QApSS5CqwagThHK6kZBhyREBu7RrC8R4PWBbfhKt1SYYfrs6rFrpnL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dvh63M8pGkCnv94LrCNaoYuj1bQLWaXFCdNMQAztboFm3YuaAvdmhon6EGZwTop4N38WWP4nNRU3LYbAe7oxCS5",
  "key1": "2pYPgwSqZArLjSE8YR1jZScSfWqPmGemjNN7ruDRgNyYSvGwYWpXiFZAXYN3W6TDQM8pG9LQwVApP8giQXEdUCTp",
  "key2": "4AFVPU4E46FqKSyUPgNKYggLXkovAGMHLApF7Fu9h7AXYCtNwEoBRU1wWpD1r38YMsQPoYAqJWdU94rT82qeTort",
  "key3": "xz2MisjPGud255S8guWgDrsPt6qnsFF54rZj2dbT45j4Qyi7N1yJfPHKjRM5jifHLyQJrueCZvwoD9XobvpLZsq",
  "key4": "4R8b5Q31wQZm4MTRKj8HZGZLgUE6qHnZJqVgRZz8VqUyiA361K9EQirQq6EthTTEa8EN7VbxnuHJK4Lb8e3uTw7S",
  "key5": "5Af6SmR1XC1ySw7vrzMxy7pfUxB5U2XNHQr7nezM5hBw2kxZm2vsF9MjCK6zA7AdPj8dGfdn271j5vBbU7AZFuUS",
  "key6": "23WEXwjnx1RqAWMtvBPYUqgrpKqusvzmxwWRSUPBEKQx1CE3LEVmp1BHuccBGy4gtaaB3VZuoSHEVLsbhjDaPQvr",
  "key7": "4hD7tj1gkFQKfbkv4GgW47GgCEe7atfGRmN4p5GxeAweroxgVsgbq7UhZepYqbHGT1ea6bsL2fTChQg2cN4M5ehK",
  "key8": "2DQN5VNevi17GAbCC4kxMsV2pw4vbgv21wWGBm4Xtf7WepeZhEnGm5tESnsgS6CLLSJespzUPcvUPh3dXoHa6nXd",
  "key9": "E1ribfaN7He2QjaCmnq3bhVBXscgDgFAhfCa8VWqHTRtnfCoj3AcexDa9U3DLufP6jFNj1eGu4i8MVbFz6RtFCe",
  "key10": "2Sa1Kznjnm2wq1CQcwtVfZ1xBAwbbPJoTPBGF4JmQcP4UTukktmRdZz7aDQkM6VsuXMzz6GbKAMQfapGdoUXBDUj",
  "key11": "5a7iWMR9s9b6cFHYnQJPRbdDBxKdo5n7M3SxPwDBqF3E4zo7fxEXqsHsyZkvxHk5pVDdXX5mP13PuUoDwMFnMkQW",
  "key12": "2Wad61Sw26aJz5bC6rr2mgrVrJbgtSYZUsrTtycv53UbuwmxaFGYi7sH77Zup7fyPKCgSNbGiEWhy7nPFT2egwAX",
  "key13": "4ChowZxjswpH42BS1w9X7Chn3t6PpwApc3vBn4bv1247PvzSLzN6qNr4R3q8WXBnDnRKQarzQvdVU6c1hnvD7wiA",
  "key14": "35kFShsqz1bpYfyRDTXgS7kDGfk3F3XViHoo2ECDe9cXWeLayhoK4oQhyDfqtJCeF8e6HzYmcaVchnbe8GC6TW7C",
  "key15": "3CTRMkCF6XiUdqmYetKw27rBUQR8drV55ThLnifPJBivCfbyDMN8mZYXBtCbiNydWRaNeu5Cgyn3U2W2JkQ1Wun1",
  "key16": "2BZ7m7DG5iPTYuwTD2WHNsbQQqFrNn4HXa816ugfNyHdxphLz4aXXQUSoeda8JsNFQ5yNH5Bj4hPAq1dP1eU71qX",
  "key17": "FPReFNAR3uV9fzi2nLGVWFiohAVv84uWTHDneAmXx7C7UGx71iB6iYor2kQKSEk1gERL3te7h23V8AxToUUwJxQ",
  "key18": "WuyupaNyrnV17JVQvSsgWvFAmLsT3g7gTTj33b5PtRjoYSYP8xtE2QxVS6WJKPS2y1dwNCMgNw55a1v37wbu6GM",
  "key19": "NrP2fKXijiinLNio95QML8g5CzELJQza2vfGfyrPPxZX7CfCsrnQzPf3vrkJtYgHXMEhYwDwL28yfPavx2tpcj2",
  "key20": "2ni6NJeQUjKLEnyp2Q3FHeYoDhmB34WaqH6e3texac18XorwVVxkVMuZMcuLaKGLHXr3SMYkfYQpaKGGPoW7nKJJ",
  "key21": "5U8bsbo2yhrxkjicsQjrRoE2RGJufs6TsKLQkDNYmwj5ZK6nfHRwzMxMDaANg1CufSmyogTfB4M2modGGVorjwET",
  "key22": "5kzdBihQ5fwmXW9WnfpkjLyNhChbXWTGUSs5mKisLiu16yWVSkzPGcc5U7qaAfY2VCxyQp9Dnag1SfBe8TJs2oYP",
  "key23": "56sUE93ResYRme3NriZuWYxToLvTxtFM3tWoq7GBrdQQPN81cMSDYffcRdyJ9f8de4E1QBg5U1GXRKmwncsnaAxa",
  "key24": "4vqx6aJtoBid2YzYMh4nniW64G2kVtKvrKBSfS37EaQANE1mHEvmix6ofVUeEPvAitJ1V8HUVNM4bxqwo3RHJ5k9"
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
