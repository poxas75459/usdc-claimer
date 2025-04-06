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
    "4eS7biBq47rXbtRwXQuBiV4qAbw67jRZKbZ3EjXA8GiJJrY4nydpeP9DARCSybsC6vSjb4CQ5nynQqGHvfXkx782"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cGNhwax1HKVp5SNShiuABwdHoAs1767q5eHRk8iZPoWTpJBpcJnbW7H4CDkZ8tHrBz3ek3KkZfa82HqaobHXmWY",
  "key1": "2wGMgixCCr3YQRWAoqHathF4SeUkyS6gTnDomPYUQeUxWm5nJf9jLK5DsWKTacyWLt6AWNqTtryV6nwELPbd9peG",
  "key2": "4xHkn5rytfZYVQmATdNYAXoJF93CahdKTgWmtgXwfCmYnRUiJjwVnuU1Aem5PAomqaQRweTbUn6onYKbjsgACHWf",
  "key3": "AVD3pp4aTcFXG1MK3MSG5WJv6dSTraLayj4WJ3emZpfSUC8SRiTj5t1SmLNUzQrRAPeUJqgvkE7CWVNPLheAPiL",
  "key4": "5Mr82mEdxbcNvwvqiUHdvk8ewVHtJnSizV8umUQnpn31Xp6BNbhhSybjLt2VjnmjUQG7644sryT8GYRUvP48pKpJ",
  "key5": "3HsBK74b2oK6kVS9rbkLboXBnrBCDBEz9iBwJLUMkfXAsEosyjfz6eh4eNwvWx4zzspGJGrxDF5yCQE5sTYWukg7",
  "key6": "4NTJFVSB4DJyJ1ShMeBvgQANk77Y7kBsNHCDBr3JkPQKuBRRhSV4DgYhD12Br7zEhsCDMX8NDGaQ9NR794ZBuQgp",
  "key7": "43Vz6eYoGnQamLuN8J4LGxXGsToQd1g7a3abPRRNoi2cNM9SJr3ws1xwGnznwECHqV2149Bt2xTxyMiDpfGcsMFC",
  "key8": "4cacnEDCR6eguVyetQQnRRAnV3eEo3t5ckrTvPGZJwMAwf3n7MEgn2YXNfhzvnSPkuktPjo8GAcGScMCgDQkMHx5",
  "key9": "fceVex15mfg8x8oWvoX3se9sxJM4kjKDa3e5jCLy1ZTzGszCT82YQZWd8KAdWr9qqU2NS8maVyfUciB1YsLCJp5",
  "key10": "3ZWCZWdru1cfhYtjX6NzzoBR9y3UUxdciETobZVtL5yVeRXiNgCxXbX5VjsMUpa4G4wyRni5pfSiT8g67CyGxRYW",
  "key11": "3wLVqbkSKAiuXLdihYL83mnfKgT6hi4tuhGtJH9TGCLaAooaYjxTtJ2hQ1kRVDuM1YDywxfvMcpxmcf5fnGbWBw6",
  "key12": "5gJsbpHcTqBqgPLbVZ3yj7HU7KxiCbW8Fxc5eH6w2F9Vz1FufTMFM4ucAwJz6er8H4zjn2FXoVPTd7kERUYcYQog",
  "key13": "27uonXfCicn6TKRKhrgFzYykdaA4jhqCP6r68xkiugT1AmSWBGNPqR5adFV1i5fYyRsUmdxJzJ8rqBMBFXHxoUhH",
  "key14": "4rNuHJYGdfeYVWVYD64DiTqGxo6Wp44nY947d6mxWZYcSVLeKND48jDM6ynxDEp2gyj6nBAuxK5QcqTr62KLqxV9",
  "key15": "GpCyU5ktWStdoYXutEr3u5tzfnmUBpKZPQ1EL9ohmqskYAmUgrbVynaUpab5gUunAfGBjfnW3EWAhaGRVXMv2AM",
  "key16": "3xXvPLSnUv93sbETgfBepaWR3d2ReBzDj2EGErpnZ6NbERz3f37nyFj61CUqN8z6uU2pgqfDqzsKGT1WSmxMsrMq",
  "key17": "41YPfrA7gvqyCb9KEe8hyHwbMRT49jc4G9GLyf34AxVixHc3AJfGaLpc5ztEv42S5GU4rvNe68jTRDBD6n5TYDyr",
  "key18": "3FyHtKjKy9RfLDBRAdDmSJHB42bFEzRjWaSszJgkJGLWAgg8cvdHC581skAfPkrmYp7v6ZcvpMf7hQbTbgGGuB5Q",
  "key19": "4DJnVP3fLWzvBaaBzavQFUPqAkgmFFnUE9RQiqUVrMv9DxSMLbVp3tJPWiEMxxB7t36gs7FjXWEAGGYtWXsSd1WG",
  "key20": "tyLk2rjyeuGGaoCJmyEq1cF8Az71qSxekWD8ibHduVsK6Z5mop9bEfqLurEQvMTG9Q1MRyLpc5aNJWpcomrSqUU",
  "key21": "4En1saFTteaU4DgYbwZDZcrWC7M5oGZLTxSH5t4uWD9NHH2znh1o2RAQZCXsn8kBa8AksUESxFqx37JsRtpjwr9Y",
  "key22": "5LBuqqEvjUeTzhxwFtusWxFU7tXBKCoAmB13WnKzMtDsvKnDvFRu1PXivwYsMQRA1XGD9Gp92kALVxk8VB6Q3sFR",
  "key23": "41MABVVBy6jNiFJ4SiK1ZB6CSkvyLvfNU3j7gjH5EewbmdPmMW7SXfe6MJwrbjRprbFzACrcwxWzgXL9RFqS9ikJ",
  "key24": "3MUh2c79BwmjTQVj9EAT8vjvERoZFbeiS3nvat442pGoD8EwQJAnDBwekTSBefshE9MioagSbmjqgRCndCj8CiE3",
  "key25": "4wqS46vRCCPfCW986ytZyR8wvcQ1aBB7FCY7sEtmCtXBoxxtY4ApPwaiAHTm8GTUJE1qWTyszSY2JSDEa5uLvq5B",
  "key26": "4Rd14uChpDMYt6gxvZ15WkZE21UP98HeNsY8ozQE1sj7vCtbMntE3DXEEPyS1bBTRBWMJjrH8tGrdYBvTvD7RMzJ",
  "key27": "569bR8p5QYrVekGdM5s9UXgwJGuskpT8TvkQSoD3dAVWbJhnYGMStSq7qu7Rw81qanNQzVVWrjwutV1biAdV4BsH"
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
