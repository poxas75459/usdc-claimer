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
    "XmHGhmHugcqTMvyB8UW3eoXsnL72ygJHwLa1WsAYryHwMUtfgWWyDWuatQCTfdXW1QjJNKVKzDFvKo3qkUXrv1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mLXhpg1MexnsNRNiDr1T3Y3JSuhpSUdasNU8ETtvCniyvpBpPWaMcBNLPikQ2Q12JYXU4QQyTpEpmQkJ3dXX3CJ",
  "key1": "3n3DyF9ZzEWnSAp4qEYJ28q1hVJxg6DrcU5w4TW7JQG4NS8Kg6yo78sXj23R9ppmjEcMwmqfp7bw7tpX4eHmwfGK",
  "key2": "3BDFEBZJvgnKUEoo4PLzXT7VMCbquTyKTQpeuFWX61b2L9wpoJJrFYS1dd3R2yHM1W4wmzBLYDN5VfCA8X8TGdmo",
  "key3": "4UXQLnGnABPWBFHoWXgKWpJGKS3kRVuZjNoJ4wkvHUJbhFmEBrd2rJfzqd51DjLD4dgpufaUbQ7R9RY4984pcEDx",
  "key4": "5mGTFatjpRfFWZ7UGPZVmXj9ATVe1zKtxHa3QkibvA9qFp1Eb4b7tubi4WuoUyNbATNtGnmeTKkifB7SNCz4jkUs",
  "key5": "JHcETfXbTAAtnsqzJWS2e3FiPNoz3s1RQxbQwaM4Q1oro29YakvT4mQVeBccAkmMmw2Y6jhVueqTueNfSmGDJvT",
  "key6": "fHRNTzNtr7Lp9g35sPwL7QZ8F36TDSmUKBsx3TVgdpSNHTBx4SJd2NKsjZdPKhxZuyZG2UYtA5kt42yZ2MqNzGE",
  "key7": "4B2Ewdso7AqbvgXqUJMSVpB2huaFuxroKrQn34dHF1AL2xw6FoyHj5MshaKusxtaJF8wLCc9r4g7ytTs2iLJcadr",
  "key8": "629tpe7n1DSzCoYdshiLNKbSUdrWsFDhJ1t2Bkb1YVn7uAHaT4rC3JyhfuhbDz3fanuJvYn3kYsrAEzGBDCE3SVo",
  "key9": "5ova54T3G1x5hN1uUrdeMQ4a6ZBvCurB2cNzG4sXb6cppTHAKxqYfH3ucq75pyZPMVFmdfSsptyZ3LnK9EaA9MyN",
  "key10": "3RARSVzgkrvPtzWSbTCmKXDpPnvigBk61NAGyoZs3cCoM1CgePzSFociM5zcdH39W4Aea2Pqx1V7qD5E1x226tWK",
  "key11": "5CKBUtwuZcVaM5XtxmYVUeEKSHYChseqo4eizwGLDdtCYKVhMk52xL1z4UBNWau2mnvadhZZxgnrEzeFNpWNEXhF",
  "key12": "vxyhxDc5cYR9w7YCfz7XRShjNCz5ehrp5UMLPCJJTSkd3J7wD2468tj6zi4KXwpmCq5XHsmu7A5hfGbB3icgYbV",
  "key13": "621UYhNDdV4945XEg8M37XyVMVNteP3XoaPy9kYJGs6sMBb7qvgfiYorsjYRX581qEHMdKAP5heZ19oNyE5yn56B",
  "key14": "5u42hFCM8u7GgfcZAwZB3D23FXbmaS9FjsqG2DePM5Q7fbfprzRu3RxJ26gCgfYNPzZpycn9zmdwSZZgvXoDrg6b",
  "key15": "5KQ9BPbK5sMJnaMg3foacu1pzb7tF3eWcmceMq3iUpkcgyChoS2fE9J27UG71wQyD6HNG4B8pHmz3LA9VUSnSkg5",
  "key16": "49xqKSmukEjSRziWoD9CiqpsddwsLJnqsRRs8jmkSbYio2pWGSEUqHwxqLcZhrZV2Uzk7NgzRyM5LhS4wDTpBXAy",
  "key17": "2aw6zvxkAYpKPddZgDH1VFkSpQWewksR22iZ2XseszTTRuH2ywrtuMiTp29M45zRVdJC64QNr193NTmwfNgfrKHE",
  "key18": "2gs9JmsMy6Sqo3DBwbv6ukqa3VtwdEWRAxsym1xtxZQb9t48BaJoXtV6iqTaGCXXAuBMX7Hv515z9vm9Yyrxnvhn",
  "key19": "4EmjKz1U7UmusTxTA6DisSJ1Ak9waczcbx8nn6XQ42M334bavPkGcfhYsHzDE6DQGXKpaBEhvTW8G2Wniiv5qqSU",
  "key20": "tMQVG1PPRpZXjx7TEKSemGMvdBZNhHTAhs9dc4nmzPgJVWVpayxGAE7MfP9Pvk1zXDa9NcFCjGwRtsqTqdNHUus",
  "key21": "3WbEimuy2p7FAvHhQWd5znY3nHzYm1i3cNoubSxYHKXjLiDS8iwHE2UnS1uUxaGHMySng6KwB3Sac3kCLsRqqKVS",
  "key22": "pqvUCTvb9uE9gT24WhUY1kJf2xYchB9UZhKJ4SNxvZ6u6gKXdLzv22WMavqZvK4vkRjcvfVPTg8qwZAP81v3LKS",
  "key23": "4bVjPvypCySygTxyS4BxtLcqPX2GGokfTvU2DTSNzAqQzNuomaYqFGyWMxyf5W2JrnmzSuFEHTSFb3kFa8zp5r2U",
  "key24": "3JH11WBGoEs5bJa2vvoRkJg9Vm8p6M2jEsbRBVfSXmANPNGrka8DBEWfbULP65w7yGA2wHY3sVyDDP8T3UKDAsiP",
  "key25": "4TczJovjZJtDwH8ZZ5z8EkixBGb691evyMHoFr4MG3bEMd95xQkUA7y3FejiLJ315JwSFSUH1w7HhZdHoNKcftbZ",
  "key26": "4yGsL1KjruncF5znT8YucahN9sSLci4xy82oa8zdMerZXoyh5vcj2BUPPnAH3rSQrJRDryXnf6eacFTDEjD2NHyB",
  "key27": "4g46T5wswtMZXEcYmiR3gDC9h7qKEPJfFRgbQ52UzjkDEGwnpGx2D7GzNRVeSdDd4BfwwMmBUHKsKMU4U1Bc1wwv"
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
