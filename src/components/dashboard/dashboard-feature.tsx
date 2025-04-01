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
    "5ykcwBe6A1xx2XstoAJZpX8m5GwWBuuBJZa6nHXcBXqnqaJr7tWC1p32AUHKWUJAFjt3xoEPHi2jAW2ugBjKnrLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NCWLZhJnx2LF19k2hfHsEHTiVaG6MH6d6uwosB2j5ZL6Yvu1SAB5KGjUgqxFZMgSkwZWQ46xBqaBRzBaL7dwfC3",
  "key1": "2wAiNC2mQxwHqQeHzJajAijPs6ossgxV6zJhnrfjS24NeqQfQ79FaUzm4MPfg5u9HCdqpgN5HPfsX157DySzgFoZ",
  "key2": "29bkgeZG9ASExRUhaaCTjYUbymVN73Y4PjPA44AGR5Nyk9wCXm325CmM3yNb3tr5E44XmxZitE4TwGGotYuiqZKz",
  "key3": "4nP795wchrrj5g7yZXZYZv6afQYHQQ4MmfTYrxEENFUZpk8ktd2jqekLhgyNdH5u9wS917C5FxfkwsSYx7x9Hxzn",
  "key4": "4jpbSmrELwYF32FxQCo4SgGSTnvvxXe2MMXJ161XeUETF5zoUotDuwBz48dpb2o4uddy1FB7ivFCddtKNaBg843t",
  "key5": "4iXKaJy8UQx8pwDwscHFDzeMQxPL6jXaMAia4nHf7qqonGuzuSwNpbevMkuygv1nJfeQAUDNe6R3XtfU94ykKUJt",
  "key6": "3Tsrz5qL5s6FwPD1ALP4sLL5A6xHSJX2MjZfKqyiBG4cSCfvZHRLMWBf9JFzhxmVPUZy6MjYVM7pk2LLGNMRpuXH",
  "key7": "3Hyc5MprPBdWbMdM3Zyc9DKdsbcTYaVC7t2NVoJXhu9n2CQENUjhtCj4JLC1QxW9Rx1J52XE6EYcCaGJWghM8cfM",
  "key8": "4rvEaCTsx2sFWtRu9XDrGShL5AVhxTAF5VUQj9f5phoW7xdfRd3FCqPoXxm5HA63oHpFoeRP1gx9pbsgYQxXeGKW",
  "key9": "5fd2fAw2V6VwzFjGGxr1LtXWbDfmXQB9e1XMqVcTyGx7bFnBvsCvCECPQpzxQV4zjViEtwGhx5rmBqWxQmQe8Bha",
  "key10": "3owNv6pvR74mAJHfrR1yhCU9Am7mAVbJ5xdAP4SufgFq1d49zs1jhUzvjsvSB5B57WuoHmdCJ68F7fYKeG5hdTYi",
  "key11": "bC1uLUiLivph6zWHyTEUCE97KhK8UEw3Skwu2wmbjRPPb4zk5mKyNpeCqBGvoLkj8RrAM3CTN4VcTyCZyAkDuDP",
  "key12": "5qnTkCmLy9BBPTrhw7Qox1jopPrqnDkWMRARt3fSMYHAKTaMNhvv8FA7UqusMGEpMZ9zFGjFuDDtfm37TttoCh4T",
  "key13": "CwJrJCJ631vXPEGFKq7v9StqvsKVwzAWvcJJW7RuUTyoDhPidWGqrze3qY3aLduL2MqfYhfhKmnJp3VEgLvgeRV",
  "key14": "1JTzJXWvktw3UYoFh1aMRuDndUC5W2iva3tCK1uEV7eyzpYAWvURXwN1e4xnKKvp8s6vNbVK7ZT7yhGpeUm6sZK",
  "key15": "vAfsZTv2qkkmyspWo8vTcwKjcoXNfkEp9qZdTXo8sgCidGuNYXLCqrjCNb2CmzmVxVdcUhGurX67P4yAky8WfBy",
  "key16": "cPVYa71iQ91ystQdMT4Zi7YDCfX1ATecPG7ZMFnycrXdu85DeixmBdo7ud4fN2ragb7EBoomt929nK6ckCMNCZP",
  "key17": "2ugDEC65yn8kSGWba5bCny3ZFppGbaGpybrN6DP4ApYkUTkwG189fLzRVUo6QUAxVCtWfp3F9tGn75iwFgLjvqZ3",
  "key18": "26rp67SQ8dkZzS6xB1RHnGWkhD2eiyyUcfpDMRKaeRAF9HUtezEvV7HEoHrukZPMiUFTyU5mWtwaJPAYbUqxw2ds",
  "key19": "2DSmsntzYZrwQCvwdouihvjv3zjvNHeuDz6ZhDfwqnmh75iEvGWMWLB7VVa4PdiiFBj73Seo8wdfEbAGdvr2dPij",
  "key20": "61EoGVGWJeDeyqacptA8FoK4MDtp1P8vEMihFz97WDQaSVP44iVFoN6LQqcGkoWxJ94e7oVfGtttAY6uN2t4oHdD",
  "key21": "LSFxNespdSwqQpVX7UJNPcnHzuurH2kK4gm8HeGRKjxqsGARoWKkPVNHSY5Le9e5bKzc5wWjvhhJBTmXi1ANE2W",
  "key22": "5SY1ZAZSsNwf8ZL7B7RJ9waD6gDmHsq1fNATKcZ6KjhyWqMv1YbU1wD88VueFFXdWmXKhWDBMnuBtweKT4Xqz96m",
  "key23": "3Yqd8UDaEu84pZSrA9KgumNymwckbez75WP21JgZg44UvTDLDZmNsVQL5pKbKvhzpAq3NXC8XHAXo9WRp6q2bVnX",
  "key24": "3wNPb3TRJCvsnZ9ridg2YRyJuLA27NvHikDQvqcnShcDr3XogQMpH1ykPo29qKue6Xu4KeEFBa3QuQKg1FhJVaBw"
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
