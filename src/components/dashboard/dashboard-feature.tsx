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
    "2P6xnvNwJytFwWNvWbvAiyZ9hCiimVPquJhe7ukUoDp7LHV8VwJZpQ7vghtkZ8qN7XdtvDvz77f67kUopiNYWZhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J9wuqFUBnk4b9Q7VQtY8GLyDxnDgBm7GypB3xgjet4p3Ceu893kgBHb1p8qiFzzMD4ZhHMpEzYH2eeE7sWyEpQC",
  "key1": "cPkk8vKeTPzAxp7qcTXrH6aJ5pe7Ec6zykrk77GBKYkED9pqcFrJ13bEHKPjYihk3LpkqdprNMWDQ8Rh2V9usTC",
  "key2": "43yTJBvYWcAsFdQWFVKiFDrWS87UDPNvCJCnnNfPJ2iHJU1Kw4Tb3uGyhaLnGM4zFvtwenfHaiohKwBH66HHv8Pu",
  "key3": "2edWufVVJMLn3cfb7J32uXd3FxZqRDhEbwj2jveaD49x9zvWKiGRePabNeHB5ZwhMeWXRYJKMqpuYe73HLj9JMdS",
  "key4": "4vyhiQDQrFQ6zix7eM1tyK65B3PcdNXGT3WxdRpUj5q6gv8C5iR6bGYyMS5w5zzZqtqr1m1c5hgekQ5dpBbcGuXq",
  "key5": "2DUCcq13gEe7R2Di2bhN2SSavMwYiY8mHbyPQT8c1qBZfwBJmwBAdBb5HQxX3bJ2nDzMaYsspXkCcXmpzbuEckGg",
  "key6": "3BC4hgoVTovuMGd6H8DFFGMTPZikAHyfyvjnfKDVxr3HhYLSf36JSbayA94wzs2eWU8Yacp6xzKVMBvJH5qCjAeJ",
  "key7": "3eEtJi6sChjZs9fMw2h864roJQcbDT5ToR1uvY4Xqv4Aq1M8ajU3bPxBFeyoafXwGqPS4ZktqDyBotobERW85QXj",
  "key8": "zB688iB2e7vdcVG32Myk6UZmv3RRmYcTEq1D2Ftf5rfpRCopFR53ChMfgS9a8dXC8MZc9kUkoas7g3aRghnJqSM",
  "key9": "4EgeEN8RckhqoK15iRXQuNJMwGFGZtCxcdvgZb71Wu2YHPYLgC2Xf1ohmZMTw8QTq7SkRDFn4ibVvvgHb7G2kzB5",
  "key10": "dcoNzqyQzJD42zUwEdqEqoSRy5x9w5GS2kGUPCR1k5wREM1rtoc6cxXd7cGgHssBsuJAuBMGMJurkEcB7Kt54yS",
  "key11": "4NgL55BT63VaWfQg5n4NqxX5hRd2oY2hSeLcs8msehMpQU5cnNVygigenuLToB9BUbXTpVHq2T7HBHinqcvEYXLe",
  "key12": "bwVDNWQAwcYLsaVjoVeG35Y4TVeeVhdVb6KS8ae8eC5NuLJaGQvHpG5iaKP9jgsNkcy1yjLyedyiWnKKTCCSVyL",
  "key13": "3SUvto3cLmMuJaESYaNbfpiFRGPkcgmeh1j2ixtwtPRp4xdhBDbGxKFjUAhBuUm2pcBBFieDNL6ifE3RjNV13pur",
  "key14": "2MejhPmMCNGGFFc58K5hUCqeEXhQrYjh9fVyPyvdt54evBADFENrtKPKpgeuJdeFBgZMcuN1ijxb8QcrnTpgnpuQ",
  "key15": "3DUKYbPgTVrxiXcSUVS7xNA6KmthF6ycchWfMMZiLrUp52ZGd6FfNaVsKMdCXcLgTgW5xezvMJHcvYpj2TrAmbGb",
  "key16": "3LCqUJoTSHst6aYdgWUJpPMEzCJzC2XMmVaXscvhE2A8eRfWBRmiVDCVo93SV46A9BQs9WeysMkmEEBK92Rh6Yqe",
  "key17": "kYBhGqxtQxebZhyzqrizGfuLruwhgE1F4eemUv1mXrvaU2DanHEicGz6ondWA72ze5eFPxsMGJn18Ehnj9KgXpy",
  "key18": "3961ESiLfQMQz1bPQRiJf8m4C78LBQkqDgVrrWq1z22fNtVCKgM82Pk4Sk52228ophUAGVzJ2xouT5SHsanz7K9G",
  "key19": "5hneSkbX6gZpbLPhzP4u8F1FWD1MRjyvWJSr7NVtjn1JogTLbBowQUGXiqPB7SiEUSdFGYPUPtpeNDksE9vJfwdb",
  "key20": "z2BycKrTx15na7WeGYwN6aS1khRFEhn31qFoQqeN5KX5Y3VBNJbQhXRoHc3RrQiZwXwcQPQAHCsc6yUncd5oDrZ",
  "key21": "4jK9Fesiq33P1jaAkcmN96iRiCL8AZzzzBLvF6tKurW6RFi22yNG9mHnbjMC36EEM867yvDBJ5BX7JASjNTMp7pz",
  "key22": "26RwhUpsqNaFGb2rRSGooRnK6mxMsHuFhbaoSCwvq1EvsDgL3Z7xfs7b15HShD6YYsggeT5mcwrPDewfusf2NbEb",
  "key23": "5khrA4uM7DBW56WyNQs2wfTB9KRNEsmmrUF4ty7Kc2zSfchW3TjSYEw6h93W4GkR3ywuRt8Vv99nqbXeB4HhyDes",
  "key24": "wuaQ9DoA5u3XuHoeiENzeU2Qw7LXPHZiWdUGQX72eb8y8NKx79FG2yiAouBw2HmR3mC9eqmyDBxWQk25XX1Zcd3",
  "key25": "2DtH54tcUJZEneKjFEor7K3b82WEUa5JC14x4tQNsyH2fTfJCbsdppNeR8ACjVTxoB1Y8Eh1ApvZNyLYNhgHwvmR",
  "key26": "4MxahE4bmKqNPzxMVbY9TcqKip8ie2dcL4KacoCYZA4RdYMXTJ5G1G7VKrkoHDEW3GAWGdRKtpFGCTEnhNZ7XCZu",
  "key27": "3HJ7ekhBQV4uAG9Pu4v8ZP15qNh7iu2jmWZWdpwScCx3exZDaDSiPL8X5P49TH6LaEy5i11JRgWUgCUzWgbnfxeM",
  "key28": "29C8Q2oYUsuRw4JQmavN4YT5Lq9o9E7UQGCuEQUDC9QTnX1jBrw52MZKjzWswk99YWgKixscGFqnRfnff8mHWaLS",
  "key29": "5mNYi7bXdcxekNwBAnMcBR3Mn45WdbhNZb8FnoegiDmsh37oFgPj182Asodf7nr95CnRPDLzZK9Aciqiohe3ojz",
  "key30": "4vW3cwZznxBRjDGba6yehB46ALZ6G6R3iyawexsfUkY4ZmGwig8aPPW9wzufwm92ZyW7RZdwKECeRhfE5KL8tFtF",
  "key31": "3XBKyvguthmzkXrt35cDmr5BDLqN6LSNSFinszKAPFTGEb8bTkaFy3sLQf7uEkMhbNw9NdVkgyceQ6i8n63X1nv6",
  "key32": "2Gtg2KfWN6WsRcg339ouunkq6dv43EKisKPCho4oQBNeYTXptfzayEQCAhi6pamFGUETrTT8T7AXCj2hZAGLRXui",
  "key33": "4HJC9BwcLaCs5dFqAiwsvQh5kJSfVHqMLZVjrUUL5mHNnZ8YejtwejXKNxL473YmTKKuTBuy7rgjCHPQSvwnNK6t",
  "key34": "4TrXr5sFwKwTnmi98ZnrAWHzuJoJNwXbpSY7JVLk8kUZ61ah8cB4a9mot6wH3L1DugJbW9fThhwbR7PLDHEDcf5c",
  "key35": "rVh1cW5JvEf4TWaDBfTtrCVrmGpQJs6pJjmzLJrbXfdcur1EKCG4DmpnkDd5bePZxt6AxPvC1zsQodEXi1XudeE"
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
