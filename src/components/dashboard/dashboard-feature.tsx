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
    "2wgDQifihhF33Heb2KPkp4a8k86Sodt9SaEviPpBZ5PK9RsUh2AumUHgggTMUSSP2gXJeQq1F66zkMrx9RWCespP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y4SWm1ff7KpWhLiNLk8FruunZrkzTrkrguNUuRtyTps3KTBx2F7STeEp45cjhH9AcfuDw8cosD25AzoZ4aacSr9",
  "key1": "kSG19W43dNg3RTcVnPsDqYNcf65epK9bzNjsWosuzZvNb94gyxMqGp5ZbXR5Lk59LJeS4GJ1NYe1u8hq5VTm2Ja",
  "key2": "7tBSN3ciaVxhNgZwiGXLnnWsAh5PoARueTkXUxWwDGYbYuqkn1A2KzPGPGY95Jf86s9awT6QJ21pJvoiT5N28rq",
  "key3": "5a57iWdJF7bKAZ83sEsv25AzjxiFfTLhN2UL24U5QRAse2fD3vkRJUe5DSwQz3BtxKC2Tp9z1gJoeHmTcVBhmvR",
  "key4": "3V2y6zThPpFHwWQeKQL4a9fmRz1SoHaj7L4CCtD8z9kbfxV5Zs9wS5B6pn3H3yQryP5teCHQUY6pLCziA9v3BEKY",
  "key5": "62VTPRDaXqdrcX87AiRyQiHma7m3LufjNj9Wyr33jYcYmDDzxXTqB6XWMUpvyyT1oJzxUZPRQWCg4Qorb84zAVui",
  "key6": "4S67huGHs1EG8JAZq9J472JwfnRYHNmMHjFWNZgmfVN2YaYdTarMSgzuC6Fde7EfcJtobmBP7cMmJmJtukpPWrkd",
  "key7": "dSJCJZuzB6Sy6CPA5PKVm5HB71uhbJvosqoMgbiRtRxq7jVSThgtBE5m4DLQm72S3QsYjk7pHe8x6eccV5go9AC",
  "key8": "3yjxfiAJqwd8sWvjnaGUpqDCTAcDmDZMKHQ52LfabQgcKijYYbr2seCrY9vxgaTC3y7rfks8ne8WRyTVQZS71Lse",
  "key9": "5vSyG2vibyrR56p8an9i78b4kT7dA4UPxtgKzDG6UG8bXgvJVaW4DntKKpsCYQzZTzBAeevs524irZNxkxgiodeF",
  "key10": "59eLZvMbQiDBLk2pG7ufhjr87r5HrjvCSAbDBb4gJQDRLsNnoLGVQ2StGYxazNzySaZFJUBZ593X1pxq5JH7xo6f",
  "key11": "5ZXzmX7ZwmYnfMkkQDV9G1XfUCZQRGLLMF1EZ67Nx5fqM9NGxM3KWsWNjWtPqR2S2nxT7KPtvLCob4BZ4quAurxe",
  "key12": "4WiRa1WHzca8bCFRSxpmjkJicVzjA5o9Jva8wY7RCsahW84B6hHYR8jGeuqgvikHQmVbwFNC954GwmmhuXKpmMRn",
  "key13": "4tivTGUiHda7kZQVFYoRbZqrMD53z8q7XVw2TqeR2RdS9pJjwJUBUv8RcWAjvrbkqL2pypYQZ5HuzsAqTvej1iPR",
  "key14": "JvzBTQFgmN7JFKjcZXr7Sw1EmsRvhS8aQynojchqbaanWXSvdQrfXViqYEt2einz3px2q5SVXA6DZCmRizdcSJW",
  "key15": "55i7Y5J6Bx3MxZ8rcEw2DsAXHWMPnAznJnABJvTrknBtau21As3S5MJkzQ9yX3erJrC9h4DDnXg6XK3hKXaiqUx",
  "key16": "oY9DmFZByBn1JVGhRF8nHBaSZpAMctc8wMbCZ8MBL2J88nkpQsyUumSk2G4JU9AguPyspGQuk9qwC2n9C4vt1Tf",
  "key17": "SStEV65jxHV3otZQjK4Z8HzrpMsQYv349dzwPBNCEnEKdMSBtMAQdXDtwLYxLY9RzXNLbRzZgNdgQzxJTxtVn8m",
  "key18": "31wMFPAdygpzc8ACgrSZDqyn7xKqcPEwX2ZsXhy1Um7ZWWu9NhhHvtC8BqJ7hkcQhtws8k2RfhmDnwfeu4eXEzyW",
  "key19": "Wu3iaDXwABxy3ZYwY28RwC8YBF3KnhGKcn1sCCCSkJenRcEMmhqpbXh8dETx9q1RkVj4fCJE89rKvgGp9sig9dq",
  "key20": "2TK6VHJq91XAPe33X3CPnEy6unEyZ2n94fw8WTzZtusmpqJQqcrpTPtew2AyuWugD78Y2syEYy2YHurXWT4V9C4h",
  "key21": "2GLRqnn3tctjJEr48KWfq4zSm4E7Awi1ySCgDJBSXxtTZwxX2V2Y1a3Fpb8nK3p7ZjRjMUwuK4xwgaGZ2udZBuVa",
  "key22": "3EpMPDzmsunN1RBw6XD27ji5G9bdZXkaGJeKjVrdnQw9ifycxxjMLNwSgKDpb992jnfBFnJPy8QEuvx89W1BkiRA",
  "key23": "4x86Y9Maig1yuBGZ9AyMcrFjBaXhC1ptLmUEt7kHL6RfNd3oX79NNCAd1HVKFKXUhEd2KpsTYKMtdCGSJBGWExMb",
  "key24": "556vtnz3ofbLdYnnrrLwj7zegtcQ6MraVG9nvt5TsSdBuWoQi7QvTH2qq6ytdCcH2nJfpoyWWthWo94j5RqvrSM",
  "key25": "28tVNrX31PML6ag6Pg1g9xeqL8DWMRrVzwqiuSaFz4fPbwtcECjeL48FhdcGx3hLFnkY3j9XvorgrFJKSddYTR9A",
  "key26": "3b73cxCb9p5dnuctayDb3VChS8xpXUSG6GudF64J65Rk1t95wopiT4F28XUc6PVaWfxvZU7GXSWnyScZyPimbHV8",
  "key27": "3zuF9XxrtCpVpDQpSLX2XKaSwDmjt5ySaCFa8vnQyoUGkcfqDxRnsD7FXdv136tmqRnJxe5Tz1r2o5KhuFZGDEut",
  "key28": "5WAxtXZfhgfodUZvQo8ZUws1XGWKYZWqJQmNC8agnYESuinzhLRGwQNQH8jvvoosxsqUm4kkw6ehiJAPauVog3Kc"
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
