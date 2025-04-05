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
    "3sAYjBxVMPcS4nUm2zYCiMPhSm9Rrc3QMo1yNRKcG3tT98LBeWPRoWMGJ85VvUkeTyr6WEtBpL6jJ7bjc9bkdbiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yxQzibv7vtygvg3sKB9z1YzYTUeNXzGpVicbKehTYYVi7f6cYePFrSKsyPWJDor9JwQb1XfTTut49SyEDSyVmVB",
  "key1": "3TCMrPN2jXDXGNUdxgh6PqGqoQZ5rH7T3hn6HKApS5KQGyAjNGtWFxMxFpTZwHZGgJVoi6aVR2rkSmovq41FPUCk",
  "key2": "45i63jApLoYC7Rc9pndVyJhWAr4oTcNpyziDgSP3vaGj3wF2bWqvU8UdX72Z69MdTXQ1deK5YpLT2uVd9M9fncW6",
  "key3": "5YEe8D1XH69jFhMiUnmtJeinW2uftiqevk5jQE9vxjLQb8ncsZaom2Ea6m7cZ1eUxcwK22hbthrpRHk2dR3Ztx9n",
  "key4": "3dZqbDvnisDR2KKmUTFFvpaKi57f8vQaRcQwMcLP4eMNWgo1zWPLVUiALywtETr4YiXB1QR7SRuicRtdCQu7doYx",
  "key5": "212gf5rxgksf4Xy6b5wtBmWgy2Ui6ebeHCsqF7rSTMpEquDtnUk1skwbhCbD4byTAHTAfG95MbmEg8wx4y5Q1sx3",
  "key6": "4ZyDUCQ13VQ8HhJXoqjoPafVNm7M4L7d8zAzS4BT5k5YFx2EuhGfUhiuSp3SQnpYPWaR2o2WJfiiP1ZhV9FSr9tW",
  "key7": "a2NAGcxLRJejshcnrAmVyUxbXYUfCvPCpWdaRbPFm8PkDqLqttbtPc51kwyE4Ton1NpjmjZ4DQ8qBvWVeGb3qL1",
  "key8": "2TDBTaL8z656hJ8fXEkSPYg9owNE3mke6s3vfVcthwuNzPeg4fcyiXyKSNPN55jdvzDy93Z4Rxzahs254PSvPFxU",
  "key9": "57wrr1EaSCxBDmXaS8uXizXVeDNhYTHYLTePgXPC6SGPzHLvLY7f2Muo5Bd2hzcqnYTwCz3HCfYFLqGLMxFbnBpL",
  "key10": "3HhQAwM6x2VDLbPupaYPsV7Yg5ARV3MgY1A6JwvrX95eTJUuwk3G5TTkTKYacaSD6LBiq8xNDBbfBPVp5QKGzYuF",
  "key11": "3Qy7Qc1v83WUJjYDsPDsn69RmznTpGzxFRQa8Cv2bqPXSKfipXxtQpy1T2PmNSvkoJgBdV1tq3LRDMM6zjzGX7m1",
  "key12": "3WpBEi46T3T8trs17pkn8KszfCaUEPCFjS1R9b92ux1G14xCRciST9u1NLxbfg5gDqHoLy92zoc3tn17buQMo99i",
  "key13": "61J48Eqj9BdsusU5yCWNyLe3av2zpwWBRuMwVCvBYPGrMerX5fBhjTaMvSnyPpscviFqcSwaDcHGkRx64SkyaHWP",
  "key14": "4qscSwDY1JzxrTr7EoiyxepMAHD1tqisqZQcj31P1z44c2J1Um8KoSKn2Xg11NC9NxiZyfnQ7CzKU4GvpVNxy49y",
  "key15": "3p5NHSrqJS8q6Jy4xYBxScBAjrE3FShiGYUZnPRJL6cACcCTjCy1UyRtpBrERStbnbdFABXXrbiJj6F3shAfvozj",
  "key16": "5bpP21WHFjFTCC5jA6QNYfCCkuJt5z15giUFDmzPPymfAwEMwzj8jMkJSYx61rgjoJTMVjdjyyujgF97FPt3x3jj",
  "key17": "3gzpYmgiKao3o7621SKzGb71QjS4vZHKxUV4WWR3sLN56GCME412AFpqveWb62vJ7JP8AZry2o2Hf5sUGUZeXEor",
  "key18": "5gid5bqeacAJGXpM1NNn8LFtjZw3MudUfYjZN9RgeThniqiDaCamg8vdDENYuZxqvYcsn4DE4ZeVNycLbXkyHMr9",
  "key19": "5cfBWLm9rCbvAuFBvzssQrZNjpdDbJ44URg4492q1LU8f1s9nfnVPF9W9cUB8tHr5q1Kyx4r9fKD8dyE6pyeoUfR",
  "key20": "DVFWoC7fTbWzNBRbiRDvWMwXVzEorZEC8bRZ3GmViUTBZK5knp4cfy1jHobnbJSbvq6PKauwtcEQftxD4rk9uPx",
  "key21": "yJQwNP9J47YDPdZpeWYAxLd3XvZ6wAaAMyKy922KRWsbwzVYL6xGy9BownNBhbdPWWnFB9SLc2kXRjb2pwnBLSt",
  "key22": "pbVTiYU3LknXfMzHScHcbyK3WKWjQ5aQfjHkkqxJCtKRJJcDvy4fXNtK4FEgsVvtAx2bGTxJTyGwa2FNAr76bkS",
  "key23": "naMxKXN1BJ7eWyxAWMemNqs1h7wJ13H2XmNQ6oPsQmzQnK7vWcEqcQLmBeSnK425sDESD7jEyDHcfTj8TKuCM1Z",
  "key24": "ENrxgYJSMNqXnfziGpGAJzJKaPSr1FADrb43KreSfCCv44YuTRS52cW9SesshjHtajfEPFmFe8rhfB958xSMZxc",
  "key25": "2x2uU6yqH5zaZBB4Sq5Wkvz4Rv27QFeV3xXTRzD4iVjxz3UF4qYoHkXFoe1ZWE4JbBAdftHqtD8SWVM4KAs9c6gY",
  "key26": "5EnLphvSQgjh29YryX7wayNM95BZEnHSneHEnxigjubgPLFjuybg4wnHPNAD8oKMXTFR5SjJE7ySXwR3hS5fMYgq",
  "key27": "2yczpxWDiskundPCJaB4wZ3pt8DksaNFq3wWPudeBT1dYebRKJG73k5ajt4416yML7bX5dBGGWkuruLsKuG72F6p",
  "key28": "5zWWexAzrxYdT1aNVFckstgiDUbVjm9GEsoDxAcXBNEKQTdTadcY5MEHsR9wyvvJZZuFeKUdYTkNiwfxx69rVoAB"
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
