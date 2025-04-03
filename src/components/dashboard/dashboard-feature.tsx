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
    "33jdDtJYme2nHQB7u8QiJQDTy1FzfwjBUVb5S1XKbbvU2viAVtQqKZR8katu717SETfQ8PcaoaqokG2uT5UGNuHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tSUtXAVdx9N67zqNiqG79GBJPqbZ5siBUX5ma1mXiBJvsNt9W4Mntv7AWPybSeDypLDcRNLaghLBGuRrx5FCPfu",
  "key1": "227braENJQMmtNduuNeKcQkFxtK1u2FTBQc4noeG6sRMHpdJoRwsipM4Kox98YFQa2tetrrEsAL5HzQxuHV2Xd4B",
  "key2": "4WtrSny7bf2NanzpwLQs9xgimHznnQ6PCYVsXWKYNue8JDVHhJuE6Czj9aGnWwud83BcgV92ACK2QPuP3vqaE6gD",
  "key3": "2Rb4xVHEgTB1eiksh1G7CiuZqoCBaPGD2CfSNLwF4jBzRKp6GfWSf8m1Yzz5wSYYaDHEYAAo9NqK9siiU3SUa7sS",
  "key4": "2HQ7Htmrw3YrVPUEajqmpRQxmCtjr24rEtQRZCFP9qhMckhsBfDNNWcypfbpeMvD2LPs51m6PRwDeAFqaGZrrjpE",
  "key5": "5s4Z2XeJBbA3DpYMnffb4jfaJSoXs8HLUf4gw8Z6y5s1d36qa3XsaAqhtWh1biqX7LePNM2aqbP595AGc6gshNQJ",
  "key6": "2kTep6LLVFg6vPoDzd1KpXVsK5bVTM2QPx4jGKfbLshZuHKN3rXrMcAKnkbUp9Km5vVCMGcsDNz6Ssnphwcr2y25",
  "key7": "5XjraRbJMBH4yMfDTJhs7YU9ZbjDe4SfWW1MKMC2gFduYREbUdAv6im4vaF4YZqCMfbSsecpTnuTr2tkiZ6ETZGu",
  "key8": "3fGAQxp9hqEKo9FjG68ACTufCjrviFLCBo5VaER7xKmqP9cFvuWQGWuqAKN2cEbkvt26qxT5xxzX7m9KFN7mQoTd",
  "key9": "rikcYTYRyMjxoTN6FrxFLpPRjFk1cR1QiPqX9MT5xSRWFQpwv17iGykpJeqkaVhso6dcmAyyaDR86y7wi2gXtoN",
  "key10": "pWfZZYPecQjB4CteyMmUnGQD2tj4mKLcD5eUR98kE2umt5sb2BZsNn5bjDuiyBTpLnWwSt7d49gECCcXYn4JFsN",
  "key11": "4nSkEjhdfiqXk9mG56yz3poMqcXdRw11E69rwhQWFn4S3doqqfjmeP2kh9egLBJJaf1GPmUCunsZcwsD2WMaDApj",
  "key12": "2pZkUzFJekgZNa6NytDWVizA3p5Xn1SPTsgjFqsyYDeX61MGpAXS9ht5Mp1UEpVDWB6VCeNCFyVRNk7AV4tN4WJ8",
  "key13": "2C1P31Z1eohCBZZsp8CvrSwN2QYmrehKXhFegLB5ToGKrPzBRNRduDQ2A4DhvexmLaB4CRPeQTesnFKVt27fsBjX",
  "key14": "5YwEFVzobxHJN2826p36d9R4FtbPJiFJJS5XFZeBhxtnwb3UVDGhBDntEuMuVJ5GP8YiSUhu19iw7u32VZ4kay1j",
  "key15": "2DxSohiqZK5g3Scsj4dZYEdxs6YwWTnycUhKN6GUiwvGVfBumLnXwK6Gxf1DjPBz73YzMkBAo2Bd4132D2t2QRzY",
  "key16": "62SXELWs62Qv1Ei4Q2LEAcrYG7TMR2256AwfK1Jto4A4BmVXT9AbqgHTuqBQ8eyjNL2KPhSRMq5H9yJtxF8cZfdL",
  "key17": "7SY1De71foFXRbZSqeYGYtUtrbrGKK2vmRCh9ccYbkdVFELeyk2f53nXkAACLfYXsKfGkF5UxcAcw3rA1UqqB33",
  "key18": "3T8jM3odAFLfoXHUZUnNcYwVuJw7hJVfaZYdR7eFgF5QDRcR9rgYvWrXZfsF53PgXDqcBaQKKdKxUp8RZym2Z1yT",
  "key19": "6uMoXYZRP8AdKq5bymPpu6bBsiQF9xM9b8vqgR4PDTZnH7NHKZC1AH47mT1yJ3RFZFLgzv4R8yPQ1Y5d9kvGnvt",
  "key20": "5Ev2zhhp6JP7VRMADSnSnRnzYhpeFnK25nKK9d4c6Jx6iMTF6YdDkQjRuMNWPacgJ1aMcrAL1mMrGiZB11VjYVs9",
  "key21": "qCvPbxhMLeQvXXTj8pfg6h9e2ExQctdwoX5ttFQYMHmA18ALNDE99PkP2QYZLQ2zfq8YJxC9CyFKavU15BEG4Ws",
  "key22": "4VoRWKosNGezE79gpk7n9nG23hPgxnvfTuyFgsjNLrLDJHVUYp1uU6ge2TtFKrmhVNSwUqTQGWeCeZFu48DkSdLX",
  "key23": "3W5nV6UE7JJS6RfkrZUxCrqWBX5nwTFZkhqWpWHTpNEAgM3R7NL8rbvnnnAPUZcqcyaaj3jP4z38YJcdJbPPQedV",
  "key24": "43VVQoqBTCBLp2ZkDWUcPSmhudnqd51M9TPvkjXFc9WENB4ECVE9fB2cusrbwtCSTyH2nKq3xfLRs1UM32HZubbW",
  "key25": "m9m8DgBCxkGcnQ4KZyhhSP8vxZXRWurjkunzWQRQdMBFgfgToc4p3bMgQ4JmCLBMt9EUBBDxBLDTkMSEMo9Diz6",
  "key26": "5rsYJYto7jVFQxsZneLLpiRo3mfrSmrHoqPuCcfpKJ4NPRXQC8nTKRxrpK1SVVD51CRQz8r17BQkkp4enfwQAZw9",
  "key27": "DjdNnVWZaR3H54foyyXE77zTiyGEoeGYW7A38ChPXzsWBQFbFM3f1sCqVjRbF45T6ZEXfr2oKAdYRbkmHK9UMUK",
  "key28": "tSGi4QtaFiAsQ9SFrrtDmf2WriJcTxKuPnZT2QPg6aZXV524Qg2DQrgqkbG5E1TC8bfPpXgfoWt7f3BGMHMPjBD",
  "key29": "2mEMchfrR2pgkt69jiXwxu88WsdJMQeN1bFYezw5Fm9HNZMy7AcNvCktikhDK5Wq498KTKSV7ZaudkHzvyuVLDeV",
  "key30": "4T3biSB6LcUZZj1nWuvPyZiQWgSZtsKwvkXxYo7s2t8X34nD4WCsu41zpSv2jnAeAejore3u5rp3XhKms8rXkny3",
  "key31": "ofUegCaXkSg35L2iVxqDrZt2yq6vi2Pg9XfbSAhyYk51io1fUnd1ki4sXisBNxNi1vZTqdx8BikQqt2npEYvP7f",
  "key32": "52WpCUarJEHH9R3RnoweWeevmJvwfMAdwJL5z81s7V8mhLZqhrqJPsdrb2oYmzm39B9wLZeF6dnWAYYD18ThURhh",
  "key33": "miuBmykUF9T89jJJJfRQjGmzWPm2jSjDEkSGSBGfMh4F2eyXYDbiUPwBXdnNRZYbRpdwaAJ24hc7jvx38W4vo1B",
  "key34": "2PDmpVB9qKZv3xhPqHARkmBsJVNa2uThPKC6prG3RTHVZQsadiVuK3JzQxUGnfSXDAY7FTqWLtijwpPZf7PBmshJ",
  "key35": "F7kQ3oZK69oFyUTm3bSULMpcqUmQeTtvgmqasErCo8WxCN3mGZY53KNm6a9B5Joryv6GmRjC8s1ukZkQy3X57Am",
  "key36": "3quj6XbaVwEp6dbTShzQRmUFPGbtPyNmRt3Uag1FhdEXDpoyWA39XxgVPJ6Ex8Q3gHSxc4UrQcjuavuJHUAdgeou",
  "key37": "d79VHDZY7Ysc28ASgmNPxAbQEXLWuzxyYnZtcWtgmgZt1hSYHSsJ7M5h9opHMLXysvwcdeDEE71pM2tg2DvPcR3",
  "key38": "4j1kiEwanbBNiuV5KFE6hEEqo3pLUtsVzhwatgLZhua7ALzkcLp3qk561NXxKtdymYueomF24L4Uxe9MX3ifHz4x",
  "key39": "4HiGvQJvAa6e98h1H8kk3K1XuodVxjDYm7BsnvuuLBmRHUzaDotrXnq4vYHJtJqqeDkhoktWxzkh1bXtF7s47b6T",
  "key40": "4SQstwmFBeFUCVP6i9hmQoV35X6zHoXeAb76ug3MV73K6TLcGNZiQmszfNKzb1BCUeHnqtTLyVTQVUzdkSfhYuAq",
  "key41": "4eyNeGy4C9naPBEVtZMwaXXRN26poTGPN2mTcKwoTE2d2CGH1R5fyKEsrxGGn9epdHVxEAaCodUWJmmuCXbdYPEY",
  "key42": "2MHj7g6HLskpSphq8raGzjYCRFS1GpmTWaof3pzHmm9RocvQRfRJM3cC3nme6KnjDajiyEKPntMXCiEgFJNtKkCN",
  "key43": "48c52PpYkuemQRG7HhAC2LJhxJXn4GjDZHk1GNS63v3btAiB1YHpHWUQKrBd5ALuhQ4Jad9qHuWNZrSv6wmcuyJ4"
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
