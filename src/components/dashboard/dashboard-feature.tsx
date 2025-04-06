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
    "2JKcvUKHh5A7s1FEH2yVo92eJo1LtFB8YDVNqfWc79SB9d7y9Nxg8i4so9BtLchHMfThGcF7snA8mCi4tyR5bWy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nCTnJrS2WAuKVzghWBLMqHTHfgwAWYoxLcpdG7Jv6TbwJT8WGDYH2JReLk8QBKrkgcdhDxefJVntgei3zcHSrtt",
  "key1": "2538j47hFivsY4u3Rhh6ng9fUxeSWAX8e6YFArV91vtj3KdNkYMcFUBZgnsih3H3BPqLNPcMwCE3ZNJvoDdSPJqy",
  "key2": "cAKwNekEnAFRXevWy4SBENnrfBnFMVRPgQwA21mB4gJoYhRXjf8R7mFWnr7kvhUfEZVB7QsEpW14TJXjr5EvxV8",
  "key3": "4ZCsGXpcEw9jY52CTJgBJgh5o2mSSgyFfbHmE4SCxBAJg5Vg1DJ9PtGfg41hpwkTAjw5XFoktHaL21ma1Y3YgWjZ",
  "key4": "61wpZRp2xs1CDB9vE3mfAPocAtqWd1pbuttyYSYZ7TXiUxm8oBkmGtZ8UMaNrriHy2FvgFZ7yPHB6aQRXkxTrPz9",
  "key5": "4spLRfh7kL8pzGwnALbtYQdiVzdTmVznR2xW1oRRCpewBrCmQ1D5Hvpc6oqudKmnscBWMfzeLdUWFEPyXYphBNEZ",
  "key6": "3q4GSHAjjq1sodrK7rbftn6bsCvfKEKSuWk3LVVXH1CLvsBDmvnoojP8oCRCNpSDQ1Xck21ewGspzHsodmRxKTjj",
  "key7": "25q3kAqZEaCuirkKGPx4ARXZHnP9WWv7pAAZQmtAeVaLPjXASh6DVF8oo1Fcg7VXMAZ5cahxnK8LdoyrQjy7Vhe6",
  "key8": "5py6pRvcyveZkb42k1XiNi9ESbYKyAMXrxrUTXAGQFFdeM8VVGbin4sqXiviECH2pCGnwfCP3dy1BcJ3DYXGy9qD",
  "key9": "2X2yh1QGe3QfwSuNTRKZyweEWGKzziQeqqQTk1bVknK17ET5RFmE1CxDfmj126Ha5ZkbDQDo9z9VZyn2QLEP16P5",
  "key10": "FhD4HJU1utCnBzKN55QQ2xiyN6Yd9ZZuZZBhs27G2n8NfRQywwSHzoxGnppDMxgpMTESVu2ntPgcd3Ds9p8aE3a",
  "key11": "3FTqUShFRms88yb7GGPhBSLJ42wTCyrMwxUHvah7E7ZsYfbLVp5a7w4CYg9XLWw2wk51Wm4bC3n1UioKRzhXM1KA",
  "key12": "53hEM3zmbSzJUCWfdyeTqAmkTERsNVpHogf46iDWwmRydC5Enf3WUz7zrNpx4dxhAvwnXp968EJaRmhqwHMnHx4F",
  "key13": "JZ9RL8xHoxugVs1cwmExZuqzBLr9o4ZaUmhW9rAygmmzbceQiAnxw7z17w6S9Z6a47KMNRViHaMByV4mbZ2EwUu",
  "key14": "2Z1vAE1Zvnr3UazyihZV3gYS4teYJwuNxmaGAURDyuS6H33u81HQ2UVTumnd6YkAaa4TzWeVSucSu3wwdKuwxEpk",
  "key15": "NW8ao56ntGvhwHe52XcL8L38ap9wRCWNXMH6CwiFDMtQVV6HtBJBhVvHvJNmr1iHQeC2X6VPp9WL8njVUgC3Goz",
  "key16": "2ZbyUfnqcbopr3DuaQd14seviUTxY8FnEbntZecVUSz7FwP7yxxiLeFA9Tu5pFaTkrEE8kCaqPcaoEv8dtSJ4TTr",
  "key17": "2jfneGDtF5w2kzC5z8cfdZcRE8LF4JnZxxhZgreoRZgH3eBhvfgWPZPhoiVNUie5833dEd6FnTbzrW5JrS8x1EZA",
  "key18": "4h4AAq5LQ9391bPojvK4JMJJwkt7AG53VpJGPNkBvd3uUwtKZSjjV4EronQtkNdEdYHdBSYpJQ6aQ6YqqR85HdgM",
  "key19": "3472uuzzHQrLF5aS1Eo7JhRkFbJETmjWshRdMoyWXFpeafU4yHWB7pHaZunX2miet1sEoDTh7aGoMQcRgLxux6Sz",
  "key20": "5zLzoXh9BNx48mXwXjoEA81ig97vvFUDdU3mCnXMTbHycTpQzHTY2oZyT56v5hF3wcYwCWZn3eiivsFpVpj6sg2J",
  "key21": "4wfhoXJqdea5Ljy8yQeSNXnCqNbCJYjjE613yzGcnMBxABA5Tmqq3v2S2z7YFXCwsHWEjiy3p1Qw5T949DXZmz3P",
  "key22": "53ZERSTrg3K9At5T2UjEC1QU2T1t1W98WhuHGW5R2U3HKQD51DkRT8DL2Pi33jWqvkhBWPJJ3ZswPE3oP6Es5zQZ",
  "key23": "5bfUDN98QVmPXuatTHDsXRSz7mRTZa1YydPoCExBRdpbjug2xa8UsMokNhc5MChTVomr54Wn2nAAzjMhJuMDA4vt",
  "key24": "65yrda5oXYMxCXsgDcmLtFxi6rDyoJSFZjzkR8bkkfVLMkQMr66xeSFf9uNRHRUKv6F1DcbRiq7GpXDZwNur2182",
  "key25": "2H9mj9X5mw4Ag897QLwEu1qPJxn9vi1mCN2JGUxKBsedVCnqA5NX5Ldnnrff2LPegrLsYLn9bCAe51LnxNgxx5PF",
  "key26": "5V89Hi9BX4cAtARbfonouHrpQT2a7s6frXrnQFeGw7wzkRVHRAs96pCGDg6rtVtdjvG97qBDx2ex5E4nb4Q5m1Af",
  "key27": "2PP6BaXCsHrw25ed7KjZEDS3M6n7uHAWVzJWVq5w1XyXrVv8Xx6Rr6PuTbYc3j9urgSBp57rPbDoXscrkr6RejHy",
  "key28": "4TWBJ4wCzmGt8VQzNLmdXPFkoevUJChJnaHpEu48EQD8fBSMgfvovCAjv4ioH4Rhmaab4McVYUm52uRxzb75BqoG",
  "key29": "5LCdjJyZofhJToCisZjDUvvKLUJtxofJysFoYDMsnizqxomAnrpSAcb3PDsKnuC9W9yu4edM9pG85MJyRRzz5RuE",
  "key30": "23U1qWQ8etXBskbomzHaMhMe6prsH1YKLDge6uKaWUxsaHgDQ1Z2Kvehx6a4yjPsxijiGAATyhMHYwS3cwiJUvhH",
  "key31": "2WYssuhk2thtGE9oAMSdMN6fJuXpuJeYD7aeuq1QoYtBTSJdui5Ld1RPNoJrtVDrC9FAeXBMGpj8am7arjxBz82z",
  "key32": "1x5t7H784JoDL4pm5GQvDCdMfe5wy1BzvAdJp7Mxckq8yZdaPHFCgMPEEefuxeeBAcsAhfECEL1zywriBp2UKUF"
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
