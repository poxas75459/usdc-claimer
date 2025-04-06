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
    "5BD186jyWynNu3jBQA1yHZUGoaKh7CWeeJLRZUqu9XR6kviaxYizZXEuxe7v5iVWwBqttVBDjLx5xqez5u3mQ9Sd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YQ9BikxYCHQyVDuAVFj4aWVYMYNFv5DvXkvLnCguRVpQDKSecKoW1Gwh71hWovaiFcfyFdF4wLLsQtd9RmDxNFe",
  "key1": "56wKqceWhmWo1MW1sMETprYNAA9ZERWB9X66Ko9ebRh7oUYxL1bgQ4GYtymy2E7PK8aJXuWbqP51UUDndViPvGvo",
  "key2": "34GQ4YC1ipAuDbEtDBfFJ6BTzBWzNkfrmnHRWRurs96w77DPaaoyEf5THC3AiKVUYYdrVtoGM9UYiLLq4krSrycc",
  "key3": "2Sv6oqjoZGB4CZgLH9osRVb1gAREiHuJAJBbssY4J4CXVhPTzPFRihKWLNMnx581WSrZNCe9TPw2Z1X1U4EkpgG1",
  "key4": "2L3JvS6u7yRNCkyXQBJ1jGEmzrQDcYkx3LQodS1rScnfpvpMiE2EwypQqe27hWQNsVMweCpjnfZsMgfnkoJgwh6t",
  "key5": "WLJEsEbQggV1SwvVRVHqxEdyjgzSej2stiasJqgnTfDBqX82bzUfAH9WLNiHFjpQ1iARezePdy7jMUh3sbMnHwU",
  "key6": "3787DiMwMmydSq438xvtBcQAKQumZByaHTLWxcSvyg1q78WhS9LKKAiBNNMaMRsy7frJgr8oR8brABZJNpkuyZtf",
  "key7": "2ivVMLWpLK9jUxMmvDsJtnhHP7ShFJG8EUy9xDYx4NSVF9N9GBQT8EP5Vc8AQcSFFPNreExZwwV2JDZgF2zhCj29",
  "key8": "3KEHKWsvNfjnhV6cBhSugKWm3iatXRgZjZR6Zeb58UxPtYBQcDoB24gxesriE87gnTqnCtDCCssPFoHKS4kvR2Le",
  "key9": "2ZhzTKaJkTqjk6tBWRb32GPnUsPPmfRbz5XJgfQLxKenFi4wBu9n9wckn8eDMmxZ9jyLMwUThreFL2wv7t5KvZa1",
  "key10": "5MbA1GwTsobwVG39iNKWqArQ5ic73QsNLZz5RRuY21xyBYc6FEFiiDMXk7EGY3iQ9rPTwwFoPrL7NcfTRe9eYdfA",
  "key11": "4Dgf5VuwwKeqw7aPoBQLvHwAvbLaMskWUweTPndS85r97ituWnh4LyQeGmcRWdax7cf74SdkqCuSoxsTpYrsaCTZ",
  "key12": "2pAtzBVVoGPnxarvXpsmjkMYQ4Thpmf2vMoHDNa5Kw7kjc87tXwpUGham8KaQCZaYk1LSt9wyucMQsd8ieDwGAft",
  "key13": "4th2q9vvSKvU4p2Gq5vr2eZLTCisQzMaxisAsT5tb1rWFsgQh3VWVKdtVGN738wqBeR5GSSjmojZsqv4B1q8faw2",
  "key14": "P5TKnomvRhW49swQFaRbJGrnD6Yk3XiwsR957VFYGaaC623nQJSR1pJWuiN42TcyCciuCVw4ARM4UyEwgpgzUnw",
  "key15": "4HTipAPsCUJZD5hHZByTy55K6rGnk6Qigtn2MZhvsBJdMQJQN81mjdt8mGpp5prrmyY8cXGX6wyRaeiSvjFNonpf",
  "key16": "5qhjHW1ZnjGbHxVCQYZUpyLSo3Y3NKQRSL5saxa3tMbF5Ro3mmAB5aj39BTGo46SCRddJ3bKQfhJdMs4Kzhos7Tc",
  "key17": "5tDqkPXTEo2tgqzwyirhDUQHWwkoc7BvkPxZCLUpanrWWW1ZDEBRJG371NeML1eh8xHiGHzPap8igKARTR7jegoy",
  "key18": "4Sn1kjcP89NR3hAZnx7bRZuRC84yR4316s5AXjZu87J3kYgETcPGcM9aYt86bnM8kQE8xndqY8KPGWRsV7oNu9L1",
  "key19": "4JKjjX8g1e5YpaDR8zsqAVGxN9bQptJUT7kei2Q98xd7uKVLfgWfbcJx8oCXSGFkoXpf1mgxSs42tr47T1YXWrb5",
  "key20": "685fLoGWUqoiKwLf77a4965ybrVJ4NG6XahWiMgkXHt7oXxg3csUBvvXjpZpqxZede6MXiLUo658i1X6TBRmjgC",
  "key21": "5c214AXdff927EMXZ6FWGJMGFPYh3vrbcjy1XsiTiFdk9DEVxksT8MUQrhssUHDEffcoydX8Kajgxi8CxfWAs4d4",
  "key22": "3bN2V6xR4U5cekL2JrW6uWetoQj3bPLyNaneiujTxxzmZ6jyLWzZyGa2zNUfPipkKTYmFRmiDdJSCEvJkGPqyJc9",
  "key23": "63ePSwKeNFvgWGvGKPwCbFhCMVvthdZTKHeNNmKSH1LnB5rggZPpj3WW8hrL2Zw5V7VLdAB1vD26j9eBe2JNKmtq",
  "key24": "4ypzBj61pmR5jmFZMSBECZM4v229R6bUsVZFsavobV2PbwLBdTcAqPD2pqimu2eEiNoue6HRtAdnoW3oWE1GYWqY",
  "key25": "3UYtidzmumUHgEufQFJ7UYac3cpBjjAoNkMDL2doD3ap2tTi4UQfgcJQaS5SmLTNjJv2WZXgotV9ANUEYS1TSNkZ",
  "key26": "4EpCm3PYCeJZzBarLEF2j6B2hwbVDbaqJ7gT6m1FxytrCwuCpqHphMhLsPHyXaGN2XLxzZZhVYWRYUnUXxBn5sxw",
  "key27": "4ANuNNeMeZcqvNWkeKaB1qBnbx66X7uf7y1nthNY8MxC25VdCaV8xpQLcFkNC7aNBQ7yFAgZRbkXXD3iby5oBsxU",
  "key28": "2wpStdbBvAxBjHYAVi8ff4HpP76bJkVx3d2q83iE1sFE24FvZpTLnaSRz312wVSCpy4mr1isyGYuVTqCSWRYjNUd",
  "key29": "2DnyDfyPZQcpySVBDUzwo7hcoonyD46ojMMS3gEistJJafBrqw8q8Ct2kZetNN5CGCx6TqY47otCB8rcRZSudqFn",
  "key30": "5ieL2NnRjmtoQkXN4WS7kvaqDXzQLyZgwbreDtJfkt4KLCiowdFGVeyEjCWFUNGPVgRysoNdQXxDWm38rkayiii",
  "key31": "4i2r8ZPEkgmnmsyWqQ2bCYrZNX3Ds1N5TWCZjSbWsf8Jjqj6Eefv6NBvundbBJqjx93msVfSPuotTEBrfMJ2M8Wg",
  "key32": "466syE1fxvPeeNmB4MCGPo2fisPjXvuAMUFhcagWpDoB7XMowQjNsYwx16yhupcZwvTL7vJGCXGYTjzCdWdKZgv3",
  "key33": "2DMEtrNWUtJGW3eJQ2WT9dd3RaHikjVRuNSVuZYwrgDkafvw5gnGokPu3DEeFCMRubxwuyghNLiDCgpWwi8M7vqW"
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
