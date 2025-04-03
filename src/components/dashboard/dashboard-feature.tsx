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
    "3cA9UChrsXM4V2Uw5X6xhmB41ckKmkgphWuVkywC2hd5zzkyPcpQcxTNW3iMg7pjrSU2CnrJApgZBqecfVDCCcyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cs5WhdZaRLRi11yBvYBnJs2v6iLKwS6KWA9E26CB9dCpDns7RKV2vac5VvxsdgJUMG1VJFE8HfcTeLbtRYzVGJU",
  "key1": "4ot6JwBrg1jzTR6FfQFEtkhbCWiWZyMiu9kvr5Ny8VScHMapqfY8XyjYZXdegjrRgeRxcGyuJmdRdzrUfZ1KWDh9",
  "key2": "3sy4SHFBeXNhF7Jp9iJT9xXEuX83jyx8aq16UmimJtd3NCDVNYaJ1xx22WfCibabuE8ZAuMt3huDbCWkkrxVJbnd",
  "key3": "31QwwukfoetqxphRM2Sf6qY781zjPNwqjAErkkoq7n2Kx2jDcoPpSe1cqhAjtJnD2eg9qDDjRtxsLM81CuuYPg7g",
  "key4": "DxeeZ9L9qeUd6CBAS86TxzPQf1LdvesruAk6jWA4AhsM5oaVr9TKUKKqsdg4jo1WyHsKCSesvZvgw6jDHAYpPtr",
  "key5": "3iM3q6h7hZdqB765hhiNHCGQxUMoSUznXPrnFv5ez4msxkwKfUFZBX8GxKhexU1pkMqESaJ6KJWainBjPpW3Unh2",
  "key6": "5VaNzfwmTExnmEuxp4ioyoGpwVK8YosSNZTMVz5YiPHxpkBozrjKVqni5fYDUtniCEKwYvZ4hfRPoVxs9ugDsDLj",
  "key7": "21yNTf5ABmo6T1L1uY3T3pyRobS1Tt7izr8CxFhBSoVvzwLDM6xbS2svyGcUoNihQB2z7jUzbybH4iTaqLFTFWwp",
  "key8": "5hJc3ERUHxRCmycJV9PFenQS1uo776R59kkh1dnDrBHWLPvqC4XwRWZs6UASbivWnBja5m6eFK9ECQRhWp8MLb5j",
  "key9": "4QxjCtuHnfpRB3k687RX3dSXNaXrBgRD63KyMtGUJMmAboQDaiws5dWBzgsErsE4x3N4Qzot7NWFknSp1ost3WXm",
  "key10": "2WMmz3qAtp9Jtf9XFcWPScoL5jTFRb7cqF7cuapmZYqbE6rk8bv1gEePM1QDTY88EiMVDiVUvGm5AMBW1fPW54b1",
  "key11": "4JiDuEdMNjT4HWS5AZKjNk5dgAcStkQ1boUGqTVH7Yp9q1eoUJqGdFwwTfoD3UQtqhH6XY1Pyo7Mn3Wr3To46kWu",
  "key12": "3Xw4UitRUQZzeFs7UXvBdGmq8p399DBBkSQ7VjfDxj795K1enNaU4xUHtkX4pVDX4GDuzGbE5uKpVhZVjbJirJga",
  "key13": "3kpiMRrhdSTWAanQuFydMsFiM1JehBbYrgZCgYmamHfGeaBvuqtpcAejTMWtsZt92v4knwYZFksvpfTZD5hoh62x",
  "key14": "2nsK1XTLBBNNZM4QULgUCHE3LACvSQSf2kpea8ZddRn5PAz33t3fZukLRfEkedPk5uzKbeBgMTJEFEx9xjDZq8ro",
  "key15": "5wF5jydkkNJ6X9Ko3rwsjkPmx4eL9uJRoRrNh8so5QZGebLvKEBNE5U4UFcGtWBiRYnuCtvQALXwHEmpwXo3uguk",
  "key16": "xJTPpkj8uiCMuiE7HZWKUvW1KTnz7WG2t6hPhESbLfioB6eokb7jggx9HbpCVt6grvCufYYjwL1iVoTmwYYJZsa",
  "key17": "dtCTrXpATtYCD6u9kKikyU1SHkgeqLPS1yXYC3Bm3gKoPfuqSJZ8CfMoYjxAvs3b1zJpRAuURCid72GaTUgyiTr",
  "key18": "5Ltd75ZkME4GpmNxD81XQw6kT8QciGb99P7Cg29eLnuvva5tsG98hpmdfiA3i4tzbnXs6VX4QXkTGQBf66hCUMRs",
  "key19": "4JCdWux4YhpY9jsi7pdT1QDHNVKqC1jzfDwRpGzwgwXbUpmS4kUjiw4GgX95RNhaNBK6eqCXXrF2rVumyd8zaLuo",
  "key20": "48UnCgt1yn58onXN45K79fZ4pAP1DxbRGq9A57Ttqn5nDtkJc9ohWiuN19zrp5kPgoU3jbhFf2iGdPGF8CubEaaU",
  "key21": "bZYYdLUTDd1gGWdoR1u5apRqRLzV7aW3NkZHfVgvV3eTqPyNWpXeX1moJnuN5u3UAhyFTSLA2u7pQYw8QzqetQ2",
  "key22": "21mUoEKVLFNbu5sJBgJQDPLkSRR2m1wtk3fefnCS21DkXRG48v8fZ6eJXYbNZQJg4x5F2y5rTUCT9wSsP4N8CbMe",
  "key23": "2UMdRXL7cv2xs1pr7fsUovSGeGESmz6K9EaY5NTLP2sXeimvhDzY4LMURaKbQqErfMsHndzdhkKPYZfsPE3jDzUL",
  "key24": "24ud1tA2Xp9TaoSAUpKMuik5D5QbUZU6Eje6Q3a1Gh6qw39CHuo72yypAYyFeihA9zy76G6g9cyZvACaiF7uzfCf",
  "key25": "4oegAfnETSnGkYrzwxetS7FFYE9XgP4AQvne6zoBXM7ETq9JyPw3r3twF1Z3m75YpDWk95RamSkrUkMtR4oDyB21",
  "key26": "2F9mL1mjhNxQHDZ5WaKfPHqBK3sss9yJ8e5kMpoRnJsbn56tc5mppDzwa7HGVadbe4e3SyN79vSFdpMwyA9oWkeo",
  "key27": "2nUbMj5Qx6UrQ3xiVjccWCvrdP6jcDwfUYrqF2GQBgGEmFEgxKHcKCra4JeKT5WfjeQL8upjrKc9cnA81qBQJ3KH",
  "key28": "3bSBypcszYtELwZFAFrWGfNwSgHpAFGX8G2StEbb3WDNKZ1oqcrSZJcJaPiEX1YY1VeUDUCrXmP5iZQooK8efc1Y",
  "key29": "2TuDHjMmE4stxxzvJ7bKvwp39cwCB82szwx8y5zeujyVh5ax9ZMATp93UGR3ZYcqN2D99ZGVQUJwj2CE1ssVEFYZ",
  "key30": "3bjDi1spz1iZcyPAxebTacFYk6msCJkcc4X9p2g7YUSn2VGMzRewxFxGfLE4kaBxBrLZwGhccn5ksQrGLSJGesQ9"
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
