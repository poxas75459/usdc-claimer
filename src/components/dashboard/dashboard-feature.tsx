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
    "yZ6rYk5hBxdgng5hoKrHfn561LW5qXKH3KNQkjWxDXLUUfWzD1oswABUnNA1xCtGUCRKvQa8b6SsSvwnERVid4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rs3sL7Hw5Rv5U7cCioDxZGRCzoms44q3HrZkZDfYHtmvbMwc2GhE7nmRX1aK5qpZbxFQroYM6C1kP3PEq2pvY4w",
  "key1": "GVdmWpkkEuS4GnuVxoQzyAXHyp3F1tLvRG4c1k6D9qcGtJrvKyEhyYY6d3B8BEyuBy2Ve7ephAyRAvW9QMkCS1M",
  "key2": "3iJW2CUP92ftK7wFk5yCdpsaofM4EhQKP25yDWGoSshiaoXsEibuWaVp7gcyqkL5PReF8F4QK9vzKDcU68LUg6rs",
  "key3": "5ChWM1CAWRnCca1GGzJ6ATMjKAFVWgc79vJCysSHhkxbyLczVrakGnGqpNDwQHQYUQiv1i3xZfgfASQt9htEin9w",
  "key4": "3s42KgwcsJEyisCwMSVeyUsEbTgciDFxh5b2vYytMC11F5qxGsTWEWyp3WHBSph7SuDsCDqj3kU58qdJH4LHH1Kg",
  "key5": "2Vx7B2phSRz6SeW9MW2QP32N6YMit3jTMgMRL9rUhoGzx9XCUQErSTs7gtw7LBdWbbR3p3PJCRKWFWofgmAVJY1e",
  "key6": "HYWwKju2qGDWuYGCfwgTV2F9LvaqQTW6TMjh4krQPCN8b6kBLGVXKrmJ5HYkKkiNjuFyZXQctvEw3X1Ndks367Z",
  "key7": "4QAMrufK6WtjRRpHpraV3t189TENowAUtUvUBRYP4xgmqNMb9Rhf3f6iVxEeLgXfwYrF2KNp7HcT4wZm6WgKR8aZ",
  "key8": "5h62WQLCSKXtmiXUZACEoYbRhzsnph3xAbSJtdicPnhPRDLSvz4YacaLonu5r4Fiu5QJLsTGnjQSRw7jv2wzB1r",
  "key9": "3N2Xahh5Q3Ga7s2y8nSsqV4FYWNetwbmcpwVr5QTMYcfcRo9QJuH5udkihciw6bY4qk54P5zjnDkYJfW6MT5NqwC",
  "key10": "5hi57bx2pzdqTzEphgXAj5duUMiKdeADZTFYppLjnSnCF2Xm9FVTWhmXjToqpsmqvch3cExXAZciHLZhsM1XFXTq",
  "key11": "34X3K2JQkNGtdCyEUYX84XLbUb6ksfgZzYcKWrB6jcaxRBaG4WZ8EWPNKdL6p1gKg5JEMHSkiTYirSzMghCFNXzp",
  "key12": "2ma6AMUbnDxkNdX1eQQQdijpNYzhc42fkZKnuUbv1wyZaKFSd5mtji8CwhnMkWCngp9UDfRqUPBw1RqFDygHBvLK",
  "key13": "f5saAsn3pPc4nWYvsHBvDCyQtAg4nXxcj8bcYdqjEk6CTJCLGwq4D74nLd4RCoq2UE4SKzEpFMFZddHu8TP4ggz",
  "key14": "5Fysw6H2VYYJLnDZgrLKC8e276PyQ9UuX9MbwQFnxvhnjyvU4jtQbeTexHcUkAdUXuctbEtcbH3URfzCtEnbnHx7",
  "key15": "zFepD8XV4JrwoeaXKEpKp6pxrmqZRisUBHSkX3Ttozbn9XKqq7HZr2CRx3bgAJkr8eprpN78MwVL2QPgQSn1PRF",
  "key16": "3JJMgJ68ppD1e6xoxqEfXE86iHAmJM2azFxJsCw92froQfrjk8UqAoAXm8hHHeRK5ictVRJna8Gxk26UfvWrdhGc",
  "key17": "2gusbKpEFsM33W3nn9STFRzpFVb7mdxDSid9rB81UhQ1K9JbHKJkF7UAkRW8Zs2AwXcQdnSgMmugoUwJRmJzq9h7",
  "key18": "2JJR9eNiJB4PmuyvmF9WjMyC2hkkJP9LeRmXNDEEqPAvFTQ48ncdYi1Ep1p54iNBmHFZ9FQ25tgBvab7EfaCNwDj",
  "key19": "5NndzKEpGfnCTGZHsVJr9MzGRpHQDc2BYYrpnbHRcBQ3nbXY6m4TenVVLbKFgwW7Sbns6tEN6whzKvE4DxXba6rp",
  "key20": "YE9yVkmPiKNXZhJnfwb4JRT1roEtcj31VAN7kex3MB8HWyXu4puZvyoN36vwURnyZPB22DUjWAmSDZuGpXhvCtP",
  "key21": "28YLaAuy9ZoeJbxRvuhvQhqMnhUYvv3q5Ay5SjgXm3VGjte6ERXo3uyPbnw1rnJg5VYn84NqNnMWpt7FeU7TpwAd",
  "key22": "4iyJPC7owciLDDo4Gkth8u9DAMSmMbR49Ed4r8g7bZPQaaDsjBksm9kVEQgsrbGm9fCgAiiNXr6ujzsLmSERKCpi",
  "key23": "2jKiLnnMUxoBnUrjvkDYzhwvt1EG27gUkCmNAAH7y9ZDZ5iTTGPc99LSsG6hE8PPUSce5eJsghY43D3ZPpuTM4dG",
  "key24": "xNHxBSxAhfq9hH1QpzcNEhGvrJJavmDsCXXk5nJEwDmqbvkt3sbDAH78Fp6iiYeXSyQoRDZP6maA8NqJucSoF17",
  "key25": "CQwLyzJEora8gQnDeb77Ao1uCN9KjNBKh7TYBr56b4ghg9244Nht2TfWH76NbRunEU83MYAaJZ7sYyYF8C3adgF",
  "key26": "22WW62gAWXyFTeTuHX8vv52uBjMdqewNYALNMS7qTzxaD3iXzxjDg7kqVYfU6RZW8X7w6K244EgWjg7Ek9BtAUUv"
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
