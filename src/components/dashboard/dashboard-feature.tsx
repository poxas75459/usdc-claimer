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
    "3qszX2rBTtYytajbw9jwu9CZPf23uEzrmtXSSjjvTPrkbjKQ9KmKytS9dJRHBYMfJcBUGgTGXbXo8MFw2ziRyrvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TZ5QtGLa6bGApfJ3pNzag3tYzpGeyeszJhR5umqPK1M1mxApacGbiCtfKfQVRuwQZA3CF5uEdDX3c2AUtHj7bWt",
  "key1": "CxV8KbwsNC9AabpSzsQMMogaWMW8HZTsQJh9an6Zcd77XcgYjPBP9fXMwwhxZXCiPKQo7eyb39Vzurmvc7vXbPi",
  "key2": "61xTA8NPfdr2RzwcFe9M97CDJGoRiWMgbHArLEsSZHWs9cxM8k5sCyfLt4BBPLD7ZDdjcpsZMf7cTJitXCkmt1pk",
  "key3": "qKD28UbwUxnnwnAapyBndkiqC4ZCD5nVnmBThhXsZiomd1FiHyEExJUcS4YmbKdf3iakVTKnTTajxsT6m55PEdw",
  "key4": "4m7UoM9Z1Jb2x9BDbBkzQmxFt3t7iF856bBxhpMPjpLo52K8uqokNpC4fxN7aK6NPm6YsYn47Xxk1hcJsTY4mik4",
  "key5": "kt8eyg9ZmrW38645GLknz68hYWJSqhnxEVXDfmE4LXP6znvk1EnjybzqXsAk4TNwwnVcx6S4p5evnXdcmsa42Rp",
  "key6": "FhxFgJ1zP5Lr1zADoxRQm4MUfZXBELYd7r9pALXiMuxyK57f1yr7CGRAKhUofQhP82Q9airSXQtZiwjor43pHLv",
  "key7": "5b4HZx8SVKfYWysJJpwSN7D3qk953PJ1VerKY2XJM5dT4jUA4HkY73bME8pWyjEBocEwh34MZXDpQmZQZpAjiSZN",
  "key8": "2dErbknKHqM5hWqAA6cRVQzW1rR2Ci5BZscii4u4Pdm6PfPhJeEvX9BYGQ7yVbiPpbtafMUgNYKutnzCiwfviiJ8",
  "key9": "JB8Kdgwo5DEAZwWGs7xYcHu75Mx4FjS3M2ERoTeRaXP2ZyZKYsCeqwPSMwVR1UzqCco3tqhkQG2adfXNKqx1Mru",
  "key10": "4L2xeD5SGSfH5DainTiUdqdFWqLiqSDu6kHT3AZMcJpKKVcouBW2CC9a2t5YNsCdNPo5TcgJPqdx6vFLu121YdAy",
  "key11": "5avuHZZr1rGUrnFPWfskNE7JE6EZuQHjFZZjVf2Bqvf52Y94C3xfD6x2mYgFCG3j4N8AZwWbSZxfFtFsvEWoVaM1",
  "key12": "4A22HEpnRMVz7kZXFZ3wjcxjdnebcX2otAhxhgkr5x11fMbznL5goJxKV6Rj4MrwZ6UUqAVQQXq9n54ETtEQwcf8",
  "key13": "5ahttawKN1k7w3uBu81iD92uVDE8hLwasdVphns8xQHVrgaUQCxg8DJPuemiV5qgrtkvv9R5cVKvawQVYFG4Ld9d",
  "key14": "5E7RCKxhwYqnsQBsE45LR7Qm4YPbZERj2KbNSJYr4CMxM9KEyCA91nS7zPmGRGS1CnxTKYV6urvjxojYVyM1LaPP",
  "key15": "4BGs44nwKaR14ezEAvTBGBs5xUoNDNKAWaBH2kPQyAc2TZBZiDSgLHH8qNmD3hPSMnFwEn8B28Umy1wT6WvPXYPB",
  "key16": "225t4T2VhzJs3o5vvduoHe3DZrzpJfjaSizueTVNfhTbUnnDeeWcGLb9kM96MVJUvDF1BWMEFPFZW6cPug94ocNt",
  "key17": "m3wfdi13sRMqU1uzMRgYeU2FvLKabw7cjQBUToqhRfGJepyc1TA5PEGxowp7msZcsRh2yF63eqx99FYg3CHVBJa",
  "key18": "5eYL31Ht6wqeN7DveegejbdExnFgSgXWXcGNDN6oQSgvC9CiAsmgwLsVZVQ6xmnMnHiJU69gRrMdxi417PYgVDnd",
  "key19": "KhVX5kE9wMz5HE6WyZgM2UzTA1fs6sbG4iPX2Ua9Jnm49qmU7nUUV8VsyaFDmWBjJ4JRztUCu7AMktmi7fh3hyZ",
  "key20": "HKwR3jRsd7jckHsMPg531Y4YWijmkjbQAeA8iyVsseiWvpZ9cMFsAez6ia2K5uupWDa5qeXn8XKE96URMubJvJz",
  "key21": "2nWDGaMzxHakWnaNzsYApqtnHFaeDYwxQ59DDrU8f6XimLyU4nZKAZkcUU48f7w9L6ttaYuCYNg2T4oqXhrR27yc",
  "key22": "5hLMtip9WLJjxsBoMwNeviWL7XSnnZYYYQwgoAgKyQasyHyoWyGR6axxu136qmafRFQE172eeeCjrR6Kz5pQo9yi",
  "key23": "4EqkbqsDP1f5urkDEaCDJzm1mo5zeAvRPMNrTBQLo3576d42eWkW23fi12DSH46FXB1RVP4F3XmpGU9Tp4W7yERQ",
  "key24": "62ZWJzS7XVTsYoCnEti45GNbEdXssmpSirBNjhtJzKVrrAewf5dfVMruUDz9kTES7XAqvNc4AcAhb1DDEoWY9oLu",
  "key25": "4ZDA5FtyWzKXtRjxpLnm8BPEos9z1FfzudxwXatph9TVquLPVCjRjxebAsdz16hRzCLeChQ6o9z1eT9RHcmwoAac",
  "key26": "52x7rMZsuT5i5fPPPz7R7iswyoamcwcF3PztzXDbgC4o5VD4MxaBh5kiwXVoUfdejXrNdFDNkuyJpBfCPG2Wxbje",
  "key27": "Sya4PDvEcsX45BsnZGctQ4j8X6x4DtS7myFCf8YSdB4C3Gjt5MwN8nLGGkw99BmycKiFTwpj9hcHJyqTFucte4R",
  "key28": "5pEavXs8W5aMcBe2n6x71YmhPzruzimd6woekiANbTf61PEQ1t4mkUtXRRkBMrpKbKLN7b1HTeZ3VyFnYzAhvmjH",
  "key29": "3sQ5t5NS3HBHBH5a42yeUb2yzPRzYgW5WX3VvDGiA3wX9ahEcaj1NDitjhFJwrXpGCxmPTmKorVE1aKHJzP19VH",
  "key30": "2ti2RX7B5G37SUAaqpbmJXPDzKuo8XthAMUapYPdqDwgqrafTTK9LTsdVXfkvDxnGFCq6My2kzB3XAhRfMCrTS11",
  "key31": "AxinD6RfCNvPZYX7h5RL7WHEAVAWyEqvEHGK6r1oxGPBK64EkEbbCrG7yBxDqLd52voSPGAwQwa2L8XYzJ6EEoW",
  "key32": "4Zyi65i51rR9FW4oeVi7yoEhjeKNPdRxTXvU7dXcYGueBGHoyB5eGuZvhsm7jbP1QVX4Vzx8bwURKFhpSnn9mmxm",
  "key33": "5gNWcjLzWRAxzeAh7ysiwVE97URES15RiDBkdX8jMhsUR6ArvE1sbdXuSyiH21bHLywhcuWGWEnajwbAXyYqAps",
  "key34": "4yK81fnvCH6V9BcE18HrwGLVySpgzkPhTA9W96sMMyz4CeWJVYTfKf2dqmc8udJHGFdBQ2atD3uuZVmSGWqGgHnP",
  "key35": "4hfW2ukXxVMzP7zdNCZhwp6S97P9K2Epmx7rHBXiqFFPdTBdUzBbmX5hGbHEY7iqdC8N5NxQy61Hhd44F3vnPj4z"
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
