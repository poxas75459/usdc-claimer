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
    "6y7nEa9c8GQyYGgApV3aycFrpf4F15jyJSSGWHpR4Lik5k2AB8HFEyLXsfHJz6HkiwxyxyZ8BUN1QHbEfF3Qetm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4doymB85Qw52nxutuz1K3FuTDmcHd3xkrLQDhi9akLFENDhkUYhPiQD6FwwE3akBK1szKfu1Mp9HhCEYZq3VqKtz",
  "key1": "4mgwDbKtwGwHNouPTzCKGLdt6452V3gmJwVdEZ9YC1a77iqXe4AR1czXcW4omUZCXHGjRDbAQWNbKfxTF3YakgU",
  "key2": "473mqHvXJtnXhA9K87JDhqk764VVUvLe8KrMY6Qkf3riMGydYi7vXotNzzjLRhgwjJToMqTV8kqMDPkcEDFWcAa4",
  "key3": "24sYcHWm63DZtHzpQqg6zScXFTc7UKBS8ozd2R8vCebTmRbi37sCemWK3P7wnHAVg1ZxW2uP1tCvx6WZZxKFvdVN",
  "key4": "2aMqfK51qZuZyd7Api29JGhmQRr1gLKbgkzuuzsy75hoPtRk3s9HWAyN954Qo6sEF6KTuH3bNsj712qjCRqnhbFE",
  "key5": "2AHAY3yHqfJ45wAFFAHsKSN1xi86nkjYm2WKW2pKPCEHaMtXxqGQNZ7PRPnYR5RmAbCpmqSQz1NkDfQhgYeg6NTA",
  "key6": "416E7E1j9SJW3xQcAVLVgypqyEtmbQNfhKvRGVp2o1PByHjrR9rUZUM5C86zaNMyhWGRsAvfdiZTc31oAPu2kQYT",
  "key7": "4xUBtq2fj3NPNUhWzvkH72UCqMmGPKMFs8UKdRGA87WsX2vYtwoWFe3SAt1G9VfLsLp1DexfwtopmmdCYD3oJ6S4",
  "key8": "TbmB4bnyvD2uUQzbXCniVQPL9Vhgikd7WdDMVdJKnyDoxXCLWJbgvydH2KkPvt6ad1p9ZH6AZAdw4asWWr7YZdn",
  "key9": "EziGBz9GM3kvqiNumw8H7i4tgduJGBhkN59NAU6ae8Sg2h4dVAcmua1f2LYDEmPG4cx444UutRTx6GWfpYR9UpF",
  "key10": "3chVCJBKkNUtRU89JUammfiVJq5cPkdfPb4nZJnSykkMJGXvEv6MUea2Vhn2U4EdcTcpefpWRW338E7v3N8i3wFG",
  "key11": "2AB8vFfzgoeivJ3RRgfq17T7txmXfg4BSVngF2JsoCJgzyZDHyCz2yBif7KpCuK4HtRqLE2Cf6L2KTUPuCWfzEBq",
  "key12": "2bWKLfDcYmw7GVLBVAF4w2Fg4MZkBcTKVVREptzRCD1x1MoR7asoBWmFN5d5SiPHC6mcp75NNPZWcg88vghG6f4x",
  "key13": "4X4nx5HQFdz3aBKTpS7qDcfXnSVdt5KmvSia5c9QDunPVS7b3enhHUXKNU4d6ZeaeJVz33qiQm5D8sEkKkRARs4u",
  "key14": "2L7vVLtPQp2ktEv7KquHMhiGMjfDGC5qr5P772Wqd9jFRophyKxh46CdWJAvGmjYCse56fVb6Ewm2eX3xJUdYWgB",
  "key15": "35uTFEJHPNkRkR6GNeuE9frskNWknXYEUwXUbYjcZM7awg35w2hsGbugykK1dCC3faNZEi5GVUJaVsKiSf6M8mSL",
  "key16": "3v78BCaGEjsHkom6Rqh7HMLKofJwo4eqxH8FFdqpbrmoTABMAtG5cZ5d5fH3qjomobnLJyv1AX3fbUnMFg77Ldmi",
  "key17": "2HWhTH9ZV8JgB5VcKUpW8giFHcSMoAsuouBMfFQRRbAfGDsqvgoqxe3qMUuKkdWU1CoUCMcQJQ7dPM5PALdV86HX",
  "key18": "sez2WsMNfbcH374hpR1ipwrKPZZbAGtHJD8hLwjb1Sxz9vAHpvscUQgQG35FxNqTCTvx7ETrKJpdDiYVt6uA8Ka",
  "key19": "245Lb3H45m7tnmMYwnFt52J8xi9ziqH7LxWtdLt34vnnk7kRKay93i615XMdxQJ6FZAgyKgPm3hP4AJdNwPaFwzj",
  "key20": "4DcYn6Fwkrptkkbz37z4R36qD5769ZY99bDtYH4Ta9jxSrxD9ueSmjEbYppEGD8RwbCLKqpuQSwWdLw2Uyuv9cHm",
  "key21": "3aok7YKadGzftu9uK1dHs29Yh6HuGK2pTPPY7kDfTce6j2YArRH5bmx8gPvrikq5PJQvDgemWo9ANV4HmEcTqAFU",
  "key22": "2c24hoWZU37g2uKfPhuwK8oU7DwffULGzMYD31QKZ9vLxfAHz4eynyhMA8kALS17s9r54FPsZYfG6Z6GyNQmz5Jz",
  "key23": "NXXfCNhQ7aLASWNC7rS7G6bo3hxehWxpSM67BKTVk7krZNBiKTHAY1WbLNRpUhtebVmhyL3cvkWeNXeV3oLvC5b",
  "key24": "y7yQH9Udiom2x1ABGV593RJzhTT5t5EJVnN8Uv8pdmpsiZ9NgdHUtQa516rK8ySHtJPXgxeTBmYaBQCkkrX5D4a",
  "key25": "5rCRa8RB3gjpqM1CK1QYDU6mFouYwXwc3s5igPKM7a2e7BVmqP2rnNY1F15DoBgu16yTkkPqeR131Kf6mpsWHKCv",
  "key26": "2Cfr82aF2taxG3m6jA5vzn5v9o37v2dHPrbCSW67KnEKGMLphs8fAL6iYxSXo3mvSCmfGMFLL2mGhJcUnHy2dhhU",
  "key27": "5qfsB5Wb1APui3cuoVQztZuzWopw5xwfTZNqy5UB4GgnqEsXB4aucLpsriCDBa1N7tBR7zJ2CxWN8RGQMR1n9vww",
  "key28": "4KaiMZAsop52b1254c1GtRDyKJQWZryLKXQnCEweHLMdfTby1eGGVZ3ddiT93HQhPyPdxAPS8SZ5uUzDta7NvzsT",
  "key29": "4GPwgk7pAkJVJgWXrHJk57MPXRJvg39mmpBo7SdjXhP18G9zpYmGUHeHkushFjMadaq5AuQ9g3TyJHVGJhegkHSE",
  "key30": "RpMQ4312nCYS4En23kewdREaq1Bqptn3jz7T3Y48uaJS7tWzcTTm4tTCHb165mU45CFYUTHntYXuG8DjeJXnLHo",
  "key31": "CyuaKHkoADs3DXtKYcBrPvDDJLwwuEuaudb3sV4AqL3oJX7knp69TPVkwXmNLpvbo6vtjuJCkkbxNEPmZhoescm",
  "key32": "3LXwkKT3cGyF3ZGmHvsPvhqER4Q34Bo6yow139B6eUbHb6Z5cNuKKCZM35dwVZN8DRmX9omnAJXGRT1VXKzuzF1i",
  "key33": "4puzCfTWTq2BpHY72rHH5axFYGdu2STyazkjgYDmvzMb8PSuseox8g8B9YJ81Rtbd4qm8i1BqpMmsbwzUbdtiDe6",
  "key34": "HKbgLdVDnpzs9hc54AvqntfXHvvee47XQVXph6awF4LKDvrSmosYHwkG4ZMSyg4WyXmYQxr7Gkz3b5mp2gsLhyV"
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
