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
    "3WTNhXpFbGHR7wEskzHgpDZeLfLX1FVhmTSban1i74z3urKB1oQJziDPJwX319Fp41aBkPEGhnVn98CMvWmGLNwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gYyRAQx2AkasXW3Jxc3JkfNWdCTFQkZ3P3waHhizcsL3PQetYTSmvEHkrKbrNvkoBFnxtsi8qPLLTXv4i9xFbY4",
  "key1": "58XYDvbAyCErc6UkQMEPAdCZZsqiksrhTY5iNFQDgxxNgueeuEnucYUnpCZK43hKEZHHWifziJjd9mvzvBmjbWpH",
  "key2": "3YY3vpqeC8NrvwoEB12NB9iXo56wv9JD7vVpJBs2P4B56UimvHUwc41Yr4Yap245LgC5jcU9skgKe25atJxEGGFg",
  "key3": "27gaG3N8q7gAUZKU8rR4JzWUPFeD5LY7L1kJV1VX5vnumme3SSgNyR8fHZTKHj3ToRYsPh6Vv9ZtoV67eoQ6vnLf",
  "key4": "5aQFtQPBBrTWgkxEXBzwNRkocqHdFnHiCN5kcfb9mHZxsMUdBf55j1sPS1qmvTuuWnnFAUUV2728RXdDhaXoQoiK",
  "key5": "9KzPCUVcxzkyE6Aa83TpydabDtboHbxQLVkAqKqbMM49UTZkhc5yTqServpDxMCACUKbPhqUWCYF2KBZE5hkEgk",
  "key6": "2Cmnvu1JUY3GCRzuWHjLFyhTrD89xQuKuZUMwnsdb9KVW5NALjULKvb9euaRjSwg8i3wuus1ACNyshsfGgKFRjLK",
  "key7": "5K3FZ9mNzyJS6AG5gKMpy779SVBY3ciBSv3EUfENdnRuGF76P72JgFwVR6GWVcPhHFidY3FNWX9PWVJtuFPoqxgJ",
  "key8": "23DLACgFukX47KNF5MJzVV41KX7df7k1S9ff3JBJWa7uKCZq2rtRMX6dcJ8iwgX5dcFYtxNe95g4aiyp9unTKc8M",
  "key9": "5BmDKdFccqRFCcLdMsWzGMXwbb8R1ATcXtfBsSN2QNZNRk1VUgxwcuyi5t1S5jQc3EYDZzv1n3rjei8BMYVHWKY7",
  "key10": "2FgJmq3gZELLhXQ3jd7FfqYR5CJYY7zMk1FgTRRt4mkkm2wdkCi5zfX6fnkur4AGaTtLYeVU6nkaghWv9JuDb3am",
  "key11": "36whoMZw6NvXLpAeKiLd9Q8kdpWYCpPrFGc7ymEK3H1NjRL69XmhWdpBRacuAwe21i3aK4gCGEGCYfpu8XXL9FBt",
  "key12": "37PEnaeHT7xwqDY6FvHWjJLRqpefEnr9SY3okL7ksBBzuEE4vLsG9MYvjFK5SaBweFyDb6nxNWBYwn5sbFq5FT9i",
  "key13": "47FUMdZmPLi4xJjJpthR2AhZp6Uagco4D4xmLNDTmjDNsAuiyNC5xrt1dtqivNHqJhaWVLtTeGjdfdd2XqvVGQSy",
  "key14": "3FxiRhcsPa7n6VZsqYLQfvBjVTvhchK2ihsz2LRH1dJPiw3xrynfkM35AHhawVCF6YStEN6tYtYav2fMMAFP6Wj8",
  "key15": "2QoL4PFgq8NC8nwEoxG9JjzyPPZPJnynfjsRZA2tJLUSMi44e5ncYN7Q7LpbU7EtwaGQE7brXWA3bjcsFBJzWVaj",
  "key16": "mmf519szAkaAtTDJXecnxVsddZs8dvfRaa6TcymDx7gkdZfXrAKGvbWHkKLSJ5MTJJtQfDgeREu3NmvwokHfYJC",
  "key17": "4LbXx5AXmGG7rFwioyFtACDHXvADYHU8BHf2hzJ7jeohFgmpKfcoGQyRbgQh9rwLQepbSaFrieMSWg4WfCYyR88D",
  "key18": "4zNkf1Sc5MCDkfyJBEBRE8xAN8KvjhWawwQtVrvxmNMzVtmFLJ3Z6xhnoFutaQEho2Uyq5hduK6avhvkYXXsDZXh",
  "key19": "2ve8TF2j9Am8CcD17e2irvrMFxszcdofqTk1PJKN2AqRnr2RaffERaBZQ8azGNEuALktAPXfjHssV3oc1D4ojuDx",
  "key20": "mWJCyi1ZgNP4UufPaGyXoTz3Qijcq5d6khd783bfeguT8BeZmnRtb9twGNAPxANi3qfU7ce6uNFjSBazZiuQVPC",
  "key21": "2DZ2o5tVFhbJgTK2zwjbivHVBExdB9rB73e1xTgeDvsUED5fkcUWNRc7JqsgGyQeL3PhN7K7q9phL1tprCSigRZF",
  "key22": "5hPwkAvhCLFaDEe3ZRJ7ai6zDDZuVs4pbCoG6y9eL6VauZnSpE3XQWG6pg6aqD9dE5YcvtcfxH6FqeAwbfj6Tx9A",
  "key23": "3oFCgQwdRdy9GRVyqDNxTyY2NSo8Vo8EeYEkSz7sTLuDgSYuDMXCvnP6rw9yczCVTpSG7JLqvXg7UmUyv9Dn5ZoK",
  "key24": "qSVE2fnSJ1RijK4WchZdzKXQhuxjDHnQ1SBLiFZvdCj5YXLHn44Zck2pffxxtz3gxAjLogUuvqT5BvkZZDpJXPh",
  "key25": "5Zrw2hE6G2f73iYtgtF98yMHwbzT3pdJ1KLRc13cwgBcXgQmHpJZcVtExGwEVu9t2NcX9X8djNpUd7xBMNRLaEyv",
  "key26": "4axBV31R3kDgrwEjXJMB7HXw645GZnHw1HTkmyPNpjec49MWVjq3bQQvGHnRea9PXoftRxaAtSPrirY3S4D7L5xs",
  "key27": "3ZEDan4RyBJiw4JGGd5isSSV4UJmZjXJExdcatmazf1VBtNC6YB7Xp1tAKK25k8zkdZoRMxVT7Vzv4g93fB95LHx",
  "key28": "47QpFeY2CRpe7FgR3URCv6Zm5KR6ppAXP5aDMMKCB7BMzddDPVsVWRoomiNdNwddmSiderQ4rAsr9emhbpcne9QR",
  "key29": "2seRXVJ5VNqn1CG3ksTZ3xmWtL8Nigb18LHfpuWe1UYVD9VbvVYdmHsHE7oEzJT1GykpjbZgHAEd1mXiEqQaXMEh",
  "key30": "39PbhvootKWxM8Ei4HBUNr1nT2qPvkqSKfVdsTrffnGkdcWxXbmsK3jai1L2zJzddrGHUsz3QVbVLQPTUzzpxERY",
  "key31": "5B31xrnAKKhynKB5VzJ46d4WyCGwJu6JYZnK7sYJMNDfHd3M3o2jCX3ZAGEX7nag27aHpBBGzQoVbd91qyJNV7sS",
  "key32": "65nxPXGYwDbyFxxG2JzQyNu3VV7dy2ZqQLeaicvzcsAw4ZahjL2fszQSG8LnsKXgePcjXueS2eEzZDUfH6tTFwRA",
  "key33": "3xLX8tAoVxqQpqWQpH6gUhaFJ4DuRxrxU6kXX2AUEM2VJ8LLedgBcVzDPNVJpMfsgpGS8PoRWTJgv1XgF3EaA6uL"
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
