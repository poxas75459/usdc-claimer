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
    "4DfppSmB1CLY9cptUvsMbcsVR6NooKLpYCSBTGCsm3XvqHLRKGLruy2XNBnH9t33NpVMRArMMpd9MNZSVU9CWiiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X75CtgYMUDyVfUvZPA7ToyQwYNfz7A6YPvKPCHqm9hyXQkWKFVLLs6ypWjGXV9WQr1rKHQyPGt38umj7Z8WCC79",
  "key1": "4VgR7G6duDHz6snAaZ8u3Fr46eNmEnZK8Jdap4CjLEkorj4DyLSH9zcuHjXwJpMTaY3FRWMDGKnY3vJb2AQi5jgw",
  "key2": "5c774uRjtKZTVPFwCVZdMtpBqsLgA3cenBCTJfuR1WPg7yzaC1cw8qYShrnqcfJ31eSCsMptTG6YKwj4uZ8w25kF",
  "key3": "o5qz92hFfiGUnLzN5QBK8J3tfidrVWTuA4Vxfk14bgipVjuo1CH5rcdjCEGLuKcaNVWxWRukAsxDBNpMpnWS6nn",
  "key4": "4z5hteBNv3UiRFrLFfw7vsv3VvjjUh6qaPHUJBZ2BWcrerTgGuDd7crWsx3XpwYoz6xZwP6ZaqwXeWK4WcLjnpyb",
  "key5": "31UbRVwBh5tf655ywSkaxtKcLAqxKMNDGnTtdzc2RSxtE3hNvUbYsKAv2mkEUzL4TMWkv4htprcPg5ChNTSzapyr",
  "key6": "R8yoebFZ8ExMKcF2u5Uwnj89ry5x9r4ZcjRvGBTM7LoUJaF7z2g35QkZMiTboeHfDDw28PTrUYNgbRMj98ZbB2P",
  "key7": "344fR2PffUmg58ifQWSMSZUXYiXxBLgvCueSBZW7yCjqRWTPXcqWEAUfurf2g7mT1dHiAhjSuQkGz7igV5YbbJGY",
  "key8": "4udZfoNwoHtoL2H2MAnV42Kg2C7mkFTdbmxoo8Q5cwEwhcS8scMRJivNKkvioaTLn8nXEckARxyJYbTvVHtf2Ewo",
  "key9": "5RMGP5dSv85tQaTDiKQPSDLL8Xn2V2tvrYD5nkJj1CHAwPKYWySQ7VbZvNitG5vAqxMWLERLS98Xjjieg83Vh5Jt",
  "key10": "5f1NvxkMXgGwUGLV3bBXRczFqjw3Fa4DqsDCzmH6QrZy1TJ46Xriqe2XThzViH6QY4eevRX44BZXKw3N7WmWanVJ",
  "key11": "5vN4ZuHJ5gPBq5CgGGUeB9XnejLbJTgJwDyMsnpGNAHC3YFi8BVaN6vrMvLwDTn2T1gbzsZSNAkx56NhKQ8MdQTM",
  "key12": "4sR5kU9xwBcbFZ3mSwcf8rysHp6VEVcKCY7nKArZCKNPPXh9iAnJwyMY7ZLmcCC438s8q1sKR8s2ygoX6Vz4Wa9u",
  "key13": "44ZYvqGUQ12FS7Erpm4Yqn2dSfabeheJqia5kTjSE6a2T2FWk2SkHceJgjErcchSeuFf5yRoFyhgAKiiYPQQbLK5",
  "key14": "4eS7TRW7gfjVsVNeSdQJ4R8PmWu3qqae1iwe7pgTfXmwEkG7EPGQEioK41vBWoHUt6Pon2MkC2XzkFi8x666DaW2",
  "key15": "4XBZgran74mgR9aM6j5Fp5jmCzNdaFqmm1EiS11H9YPy3fs2bsPpTiiLTZL9xNPfG2R64KHXtCQn7D8FaSTteXDp",
  "key16": "UpcHeZ1vZa51ePtbBNU3YMhftua1HUmYKUay7jT5FCA3Pa1mL7o4m2BtwVyEtzbvtU6inMa8D2QRv3ngBJ4uVsS",
  "key17": "2pwTBYqEQK8DEzFXLQ1NmjaDYawz6XbLSALEd37B2uY6K9TGKbpn2MtTMnaL2n1F7Vf9mWw93Ts6LuYR7Xjcwf8D",
  "key18": "s2WEDMG6ifVq7H6ATk5gTZjAo1WXoKAeVS4rjwRZjCciVxz4QFxrCMgJBz1LvTJAYpPQYD1bhQYrjdmAYFP7BD8",
  "key19": "3Aqjac9jKjG2eLn1Q69eYQG9BMgS9aQDnupA7WbDJX3fdzZRkaeaa4f1ZBR3KKmUeN747DN9yiCkrTsh9K8s1Wtz",
  "key20": "XttyKcaYWPFvqbrW7TP4meZDBbh2dRDCuNekJiaFQBFYZxy7ReA2Nc1q3zRPafG6xTeEKYPjpPjY1rKDfjk61t8",
  "key21": "2qhj6UFxJrDRfUHm5zgx2Mtf2uyc17BYuxU8kZLxB5j44otoQ9jAGu78viUJrGYDN1AYtMGgFVSCf6mp3Kix5HmB",
  "key22": "4gfcgo8dTUayM1zU2ofoE5jeJL4YDTnxsQ2tKCsy3ZNkqwrEeS38bf3g6SF2vZvaRSJXBSUuLE3oFbN2LkXkSeVz",
  "key23": "4Vt6di5BnQKWTnhC8pEAdFxZeWJzbgUZZnf8JLz3kHb3n6WbCgEYtAzBtM6LKSHhp56L9v9QsZwd9jBwGT9isqCb",
  "key24": "5amxuUiub8Ah2qypwzY7iU9N274dUwPkYS2adapyifRbgY3t67TpYUKrvKU8wsSrjNy4k84Bxee5Tq4jtTjjH8Q3",
  "key25": "2RrMLRH7Aq2KDeTHw1a1q9KZa2nQgtcmmfWk7xws96aed7qTdPdeydtteCcNQRTvd2ut6eKmEmvKn8WFxTruATkb",
  "key26": "1BKjFsTDCHDNrj2cX4Dvz3u4YhjKnNYwovG2QPRCSfDER91SWZrB778ggbdXEWD2759t5M6PnKcEo1Lku5Qci5Q",
  "key27": "561a1BpkUkZbiTjFbLkznzukHEohtvkChL8M77eFgDX7W2nfa6Y3FSV1sKuja7AwEKyueFmfdvtZU1RJfrd2U1zH",
  "key28": "2kH4kgwNtCbqkWjRWRuuVfrqS1kYKqWAEEUUQqFvzaRt3KrTf1NcqedE2pELBb4cvV6EE6oRdwS7Tv8WhvZMAZ3F",
  "key29": "2MRVLHpPFMGy2LPWxgUQhqUo4m6R1f1Jgef28nUXU4tSC2spxcP7QHGXNQBFQ18hiKSUebSWyeMVb1etdnvUNetd",
  "key30": "21y5ysfzkmP2FnPq1ik1i1jMYc5A2M7Pzz7Y5xGoCpnhrCVSmoE5Q9CByDK7oMWosmrPW2zgaQJvjdDnYG5Aedub",
  "key31": "3fUsRbk2o9t2dbvTbnpJ3741U1GcHesEED18H24P2wH4METgcqcY3JR4k4Mb22U8Sjy7Z1cgedjy7wjtL7GUQwzi",
  "key32": "5nLcNPNqyz96UVm2K76b2XorySZs1oG5YxMNRndjKUSUeAU85LX8oTD9tuCcUoSY7fL957Qmw4sx2Vwez8Sztq4G",
  "key33": "5oghdkAVcHgR58xME5CdFicPXKM2qL4YMpJnm4QE8u9Hd67hVzNWyVJs6R2NQBtHPBbzeD6RW3BfnLrrKqfACu9W",
  "key34": "47Qyf5kPL3muLAMdahVWURgogjfFz4BSKTpxbwQ5inVSCP3q3MgmHDyTtxq1ZPCzJrxaFiqT7xbneE4djcL8giL8",
  "key35": "3kRYYHFnpR9LFpNSzeG1w1ckk8XCwAEeQPM1Fy6dCgxNR5PH8gtjqMeU3XMPDEwkNCLvRn1ZNyCRuf1uRJ2G2QEr",
  "key36": "5Bbo5iGhcNuWqzvhQZRm7E4HkEzCwe77gnYB8dEKxPtVVfMKomKaVah21G1CgDzDgmsyzqGzLa7MAVRxawyTedj7",
  "key37": "4x1jRMDtvEQpJrqviu5bpiNmpkPUitdTKtEQbSkyt41gjWEynqKabbfXtZbqjZV3nHKmAqifdmDYr5W7RzHw4Cxo",
  "key38": "4wSXLRaEeJXBL8uybvUHgiJ9NmjTP2dSwx97CDWondWPn18aFHyFsaYADP28WYG93qVFdiZBRF66ssC5a5hEqAMx",
  "key39": "47nhZgaf2MX63irQ1wrDTKCmkAf6CRTEeZ5SnaZ4hEfaeQJBxrNcxDR3NXzfpWww75QUhxXjDthFAKC8VprmdGhN",
  "key40": "4rq7Vu6vuEQhnSEAMcckY9WV57AvcZRa24mWkp9AV4rLY8xsKSk4YdE8R1nmFqfvBQhWrqEyMfiVjpQEV2hhVv1C",
  "key41": "46qFVgdxz5eTeNEQfZEEetbCPrJwdS1Xj9iVHoniR3iVr37hkKqVfdqAZYnKqzLWzmTD2TUfrpbPufu63MXB7DCR",
  "key42": "5u6QAJvVt6k63xhjHF3piLyqhpB1JNkrmVaKsyuA5wmiWhKf9cMEs3jWBqVcCagubr2zzWXHNSHbDPpZpHgBe99C"
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
