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
    "4or81LpVtS2jXUkp9C4VPAR3qRYiWomxbZ7RzVuoKvS7En5xeJcQ3R1TgPpCdGY682jSKmzbSDJALQvwEW8coJoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nxduaWD2i8iRyG8eVGTGdJD5AeCfdFLnDxGYYutKzJtuy3QxyScSzj2WDNsvvsmmU5tP8pscBacNfc8xuMJSaMX",
  "key1": "4Wucra9VdcodZa79xGcGQaWkQELLt7Q2Jaq6bYLDoXLPV9c3itN2d1oLVv8YigQTUmPC29autWH1tHGNwLyRL9Bc",
  "key2": "28Ty3PdvmbybWKgM91i3onR7AK9KATnndPG8sBH5dZTkopuSYP2fFsyeT8CYxJsuGNDwgi5zgAfhNZeJDXfaKgNS",
  "key3": "4UvcstC4mQyxd49QkhGBA79gD32iV5SnZtt78Li44hr2iEMvo9dQsuRcyjR7fAbR6NCM4511ioejC4SLQ1R8FuNN",
  "key4": "RdCvAm5cjoAxmjvRFSx8DCC3AmeodikUrsXMsx7MmS6PGme5q4WbbXBXe6R92hrgkd5xrhMQ8fzR9wGR9GpVCq9",
  "key5": "4dApUXhBnQ1utD69JBHV2E4SAf26t1Jx1fUpHKf7eQEWuNVjNEVATqZhasdbP9KD4ZmawdcdGCc3Ui2nnXZLYd2K",
  "key6": "5ERBYQczo6FmHJaNGbJeTotQAk1dLpeTws1mmAkcp59GHxqZsLsswKTxfvUG3vma9GS9kZigGXyWUDjUF1aaoNDu",
  "key7": "32pwq9p7um2H2vzQrcHmBFUWNcap43USuAsBBhobx1nuLfXFFXREpKkgZsw17NsQAze7yrCQcBPNXvTUY852GSk5",
  "key8": "4drm5U6fK39gHXv4QoEUBcDNtG9QMpKwkPKGynCPLvg2q4M2Wg3wASs8swwSrMKarjUwEitLfjNGt2wxHYpkv8NU",
  "key9": "3jNKe9CkyAX1yKjcFyLFbCfkrfLMLb1vbgngrLAqXUR6nRpAJ832y1AHCHyuAEGBU4w5246JfWLiqH7myAtEFmHk",
  "key10": "2nspE431KuqsJTX9Bd5qj6hr9NJza72p5FUUgRi3CPYqzkQiTvrkGSSLsYqfTn4pN4JFphgm7oQQvTEh2HRBi5M2",
  "key11": "LS2VTGP7MtnhtB9D67eP5JJjiWyEksoiAHRWHXFApA4uevA4Z8S1ie8XadJGbyfinfa2ZvWBM8gpTUeGbgazYTa",
  "key12": "3BpY4pUm7BqchZJrgfg3HdLRP9gWmGZz5xS6iUx9SeC89pukHstrcKTPADKQ7jy1tu9ipPg8yfm24ThNwn7hkxzm",
  "key13": "UH8sknbLnHsKAJyQpT2SKCQA9pyoe6dqyeCzekNSNomBNgxCmSVHvck4BSiuvqK2V1hEwnL54jDT66roXk672Ln",
  "key14": "3Hour91GFPHV9u9nLW3qswk8qbRofcxSsKH876pXHdEB863eFwG27Uh52586wVPRjbovxnqecSoeZHTy627QGHwq",
  "key15": "3tAuxDFgFgVErrHJBqWVohko9m8WAqTDpzaDDP7BHYNZQCQtEiSjU8ifGbYk3xgtwP3Sq6sgrEDdEwjYcB6MS5BY",
  "key16": "27WsFVPGQENzJxTK4cfN31cD4VbHFneydiHRmTm2NvL4rZNCWnXGwDgumZPnajbQWucwEgcjFqEsshzKoVMLHJjg",
  "key17": "2fm13gYJT8ShPyQbwa99wcuYQTfv7yfvuDTz6rBd1RtTmCQeceLcv3TY55xXJLesAKVjmufKoWsYhqdd348ykwuV",
  "key18": "44bET24yRKi4UowiemX9XRcAnvTYt7pU6tbvv3tAeP2MLxq41jFPYDdRgoibpErsQLFf9DjCVew3zqfvdzX1BdND",
  "key19": "wo3xT1MgQq2MzowBTjjHxEpxxneML2E32oSHEYvzGAtqZEgaTY2LbGYvDWd3NM7eq9qWQqpMfyWmxn9g9T5qs8k",
  "key20": "59DUgCU16EcpbzZFh9ZjqrpkHDb5aUkJSgFGe2qnAFGanRQFLW3mr58RsDy2BGH4Jvssgane2oGwUpbiR9cEZSux",
  "key21": "4bpzq6pSWwFdhuMrSNhee5ATUAi8d2DLJQcrQrigbJmpB1JvtwULFyEYfWUuf5nSBhHFuAm6Tqvexi46ejLofbDp",
  "key22": "48jQdxTz5rhKHWBRpVHCn3cW1j7FijdNF7pwFhVjwhAhDnbFcg4wkNQAZpPaV2C8oDhdQRoT878wcrDhQ41ZS74D",
  "key23": "3QonopySvj7webUc8sdNK1rrADrDffjs2eeX6Sf2P2fksxVq8jqhf8tjPWEe8YbGYxGmvHkZNKZkPcNpPj6JPs55",
  "key24": "WVBt6WxuurEmbKPbTTDaLvW9VeB2RWQFkWYVHdT3dHemxTgpYUrRQgvQTRtMwY4rJguiXNe9vhrasAhxqHJBy3s",
  "key25": "4dUisQ8Bk4yWhqFAdyTrAnsdoQ9BtYAiRV8DZ3iVRvYYFYSGMzECAMNur6wgaCP59b8DA5CbaFitVjFYjiyDBQgo",
  "key26": "GFu8D2qF8NZ4yFu9wvBfng3uNp9kqjWGmZshqdUhpCFB1Srprp9mgtP2dgWoiNqjbMsPWu3YyBLFA1skwiSYUTZ",
  "key27": "4z49eq8BVVotvenV7TinBd9Wahim2b1oDaGivZ2vbkqwxLx11jYphGZKqp5UoJtgHCrNutnDLQKfDwrcjKwx1Tft",
  "key28": "k3yQM4WVixkHGXGhaXbhKtzi1coSwPQ6th4Qy8E7QZrmABNX2tGZnPeei6A9ys2YkERWaL9vNGBvh9RuyRmkuRH",
  "key29": "23JAbHnRFLMvfCLsArMAegDEw11BLxJPQnKgsgXsVGdWx9vvExuzeoi2SWLbH8FcPR869u1nHHvb1aaxzLavDiGD",
  "key30": "2gcxPbM9Tyo1R2TJ3JPcYXmCwzvMDouuaFCnNppacWwnLCfr2SVvewdNw2QRptF7jKQeY8v4nvKNL1KbnV6jE1iK",
  "key31": "rsxPoru8SEcAJiZC9rqRzPBYLfaChBzWJtERQRRTLmxJPiajqMsnNDGVibMPGeMcKqG9fbcRfzLkTz5RwDoQzg5",
  "key32": "4K8uvGZD2s1hxsVabfqzn68CGAe9Dt1eXka9uKeGd16ZARH7PLLwuSZDfG4W3tWJVAWZDpe24owRLKeGKhTDSvDn"
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
