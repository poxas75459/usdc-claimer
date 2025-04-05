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
    "66PvDKkXaecXQmZCEaNLztCnJUZJjpp58QTMshXkt3etunvaUogii9DmddwBTD7XHYP9mhjTH5j6BD1ZikBtLjMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xUSu4Xvm1aHUVScbq2EX4NdNGF7cA5GregPkWs8bUu84Z8sNx2RPfkywanJCjGHaZbwdEq4mb1SAbAzq8BJnwYj",
  "key1": "5geeQSDo7usJt3JerfN6tWQewqvDhPU5rsyeheUrhy7g8U5HcgKaDxDDmGXv34wZqZPN6kwE1XGGVhsrxhXS9FAq",
  "key2": "M7MH8y7y4kA2RruGsbxQvrUpf42Da4iY7sX29fUY7k1rWV254SkMMUbK1VA1DjwQx22EEuzJU3gw74Dcev4Vwb4",
  "key3": "3rzX4hQ3ExUQRGLf92hJRzdiG2YeindRLSM7ukgBk7MUzoniyw1tFybmtn9rQMNR4rzv8Szeno2cW1CEPLGrTtDa",
  "key4": "2VXXf6G6iXHs5rkJNLW1NgtzFDMLfvgso2E2vpzjC3e1gBqRPdsysS67Kz9kXQB8tvjTd5Atvo4uhzDBqesgLbpq",
  "key5": "3g2B1MxNignkGiRMpyEBovPoRBbd5YQfkjAXbfAfgpdu9imsc884QxMz8kJMvfc6ywXKSjuYAGY6v8rbvsZpF6Fw",
  "key6": "3TC2WYRn5xJ7NebRL6GPvwoTnbSdQCztsXTCnMwf9FmxXZNJwKfGwCtXMQYBAgwH3zEqoPJFkZwpSycgeA7YYwVW",
  "key7": "4SVFEeeU2bn1pabUEv3ggkKMnuspGTwanLf7MeLD5VKeNvGK5x2SKiDjSd4WNRRsYbTrYkCog3JbS5BuiKJNZQbB",
  "key8": "TpBv1enwZtogsxhu17o8GMTboVjG2aEWYL5uZ18DSAnJ7vh9WeGmtVpBku1uXG89Q1A5zWXHtSYz87QfkvFK7GC",
  "key9": "3pHKafPdQ7R1mgts2bhkyR8Pm5AP8GhaSvDZ1jTPCukHAjQKGEddzdGrKejKRrJvqt6xptePi6haZCHmY1XgSfvE",
  "key10": "ENmsuMvNaMGagJ6YsJqNn7JRyrXfxGTkiWMap4SVcUBpaUGvQUzQKVbFqEfCtdwJ8tzwYtP3XeaudmSqq4ynogu",
  "key11": "5Aoq71gbBBzpnL7LnvuxMBFFPTNA6NmMPkweDBTPfuHSsgtzr2oxvXqN5RzjJt3jXexbNnya1QsaSS4kpADeEbg2",
  "key12": "3Y2GGovJaotXNS7tbeMXL9GJBZ1ABoo8czpGawsLwmAN3xRo6GDZnGXFvXmPzTAiXA6E4kmzg85YuPLjpcm97ViN",
  "key13": "5T4taAPGHwLmwceFGn5QLiCVBUiYf1z4GtBnSLq9q5uVNcHkgrAZg6HmV5Uh7c1PbLqmkzD3fuBm5727HLdoj6Tx",
  "key14": "SAg16FNqVjMSzThFPKfbqdR9MDnakEkYE6UbSGDusAgB4rp6kTo8buJaZeMyHpDd1YAvsq8eoryCBxmLRPK89oh",
  "key15": "3irboNsQJzL7XsZAR7ze5HcSea5RV3oqTeBBiEWppVpF1Y37jtsMNgAu7hzz8n6vKjzMdgdWbSqoSwmCUz6tWBt1",
  "key16": "5QcHUPx1ore4dzts1P2ncAU4zduXjcJET9k4V8bJZce73wEzKJ6SnE7YVbpUmZf5nJ8RhJb2JRWGMJZErBte7cVV",
  "key17": "3gxeAhYB85r5aFaDmK4XYTm2pKPpfarjJBWq3UhUjWV883zKnHLMAg4FTNHBWhbfh76fyXznmDHEFPpkGi8x5Ega",
  "key18": "txXc4iQnCc5acKbTsLZumxXZejUtumgJuMBA5vc9effsmSAdkqbR5wR6253CnaiCL4DuPg1uagWS5QCxzEQkgcs",
  "key19": "5P8njeLGqUjZ1d6A9J6M8TpTS9wjNQThARDoaRbmmBYjjc8QSKzbGDykn7CHqKc4d4o5zR1Res61hA8othHZzwzB",
  "key20": "3FWFckx7mprjur6LL4MRw6eMPF49MpyZyZTjHbaRXXFEJgdZzStukG9aBXQZVammBVqNN8mJxu3rtSNz2Kbz91hc",
  "key21": "2vcaFbzskn3kuZWViKX8oFWczPSYnkQ7PFiznBCVkCUSrRW7izzFBMLTZ2C4AtxueMuziDUFsiXcKtKiYXJEWCtr",
  "key22": "k9f95uVXVyKq8HEADcuACnFvzCSEi7RfnS46HAHg9evcncZ3E46QXC6Cid5CURuZCASEut4BL4Kyq41ruCcWd98",
  "key23": "2eaPEVp7cTTF7y1vjsfB3soALnjuS46hb7aFsenTzEvXuyZ92VtiK7JA5TP8ggdeTxcVEasDb7ZgHhJkD72XAXwv",
  "key24": "kwrRLDWMAmGJC6Fm83bpRFiVucUMi27ZhKqsW2kmhDRWtu37QpYLmsUfjmTAeVaWSeLFR6J6nuZxGKQnQWkse73",
  "key25": "2LqSx84UKGMkfPkvDrp8x7feUKntNGWetmCSqvzX6v5bYazBEYuWtNFZ1tsNdM8CcjzrR8HVz8tMCGgxo7v9fBvz",
  "key26": "27NPVLwM2CR7cbaYBVjdxefrWTK3RCeZdcpNsKmN7mg3zDF84FHwgxfkSGYdjG5FTpQkQrTouPfyD63QCnDPLq3f",
  "key27": "7WJuZUShZSSVAd5cNcpyMGBVDa2iNAEfb6DsD1jra9QKCHu7gevbrDhrXtdQvrPUzJDwShN2oBKWtZdRCaRJkki",
  "key28": "4vtSN6wjPuq1Ao44MdgNonMRjsKL5EMc3VRvCTnp2FBvw1NGksuPxMf2U11b7n8b5gEnaxxXGaSXNzrHR7ebGjhC",
  "key29": "yUNZEsVuFd7eqWiixtEP58ssrWsn3e2dPH6fSBg432oVKcZXzSa1JqnFWoaQUwVQujJySikysUB1P18AGpTBGKX",
  "key30": "5knKEapfZpV93ntYDahh6ueEyaVDJgP7doc91iwiR8tgAgKTwdt2tQAnuAuda3fuGV6si5SbLbM5eyT6JL6xybZa",
  "key31": "5Pf9Kt9wbCVcTG1jivqXBK32izfBiwk9EqQ21MDsaZyor5vExiCWG9N78EiX3fpAH39e55UrmswRWCe1n6gfJJ7q",
  "key32": "2b3cmZy94SgKVudtAmsLrr454RrKLobjRqRdGNnb1YQmURsXsRF8aAnL6swbCvn5cVb8y5yF8u6dJKNkqdAYW5xM"
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
