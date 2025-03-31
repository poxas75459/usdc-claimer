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
    "54U4SSjsWr2qg31n69MgZMsdSRVrfUbn2JwJJQrV9zAAwJ7uyy156yHjHBsWppGVUQL6NGXSBaMjvHPH9drCEQvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wuzS4omWrKzJKyCG532CNmakfw2ABZEaFogefbjYQCRZvKCGUEGvyLwjerKnvu96U3FpzxmbUFLRPod5ucWAwBX",
  "key1": "4Xzk8RBJiVTkqJqnRN9UsBjMJ9EMtyDdpRp199CQWajinmodLXqe8uz9q289D6ZWBoDqSsMufnFJdPM17ta8CicG",
  "key2": "2UCRJC4VrMvkQo8ps5EGNZui32joTBDZKEFcoxF2TcGq1FhDxLzfyt3ZV6NmMQvaQW65FnXSer5uRZumRKk86858",
  "key3": "5649PnwURQZzGD6sLJz4WKmEPELxg8UajmaXmS3QJpokM17ipMexoitmh3H3ZGXMJosifVLa2Fmug35zcBhu9Qq3",
  "key4": "4ApKy4Y5c1b5CEWsW86oYwyKcxCGY3msTcfJMgpJigvqn5DY6FewdwCKaLkMsABkvedBtcM1jSrQjXwHPDwxxKL6",
  "key5": "3hzf12G34iVMyv5YjV7GHMvoTjncZ6RivvoNVMrPYWVagXeDrUs1NG6FvMUvCxRoPPM7bcFc6jRBsatJG1XHG8by",
  "key6": "5bjMsfdzkEHwSUxDCN4Q8ZHd3LoxzR36sh29EW6A2KXdMjoLvCo2MyVZrEeBjVZ5oLbGmmUHyNN3yD5DZNxTDPMy",
  "key7": "2fwbvF2aiwzm69PbDTsmA3Waukufv6qmdkvsNbtgAZUZHafweyLMjTP5T656JSebvSrj25UVbBSceqJhCf87V32S",
  "key8": "5tUZcB4wwb9knd7Y3n4fM611rWw5D7EGo2ogQnSBvpHHSVPv3XdGx8tRXghsdUmMUS1Am1ETRu4Lq8ffAS22Q3yW",
  "key9": "fF3MFbEir3sFTXJqbpgEApo7M6hhMBjxKj8SrHSrDaFuwJgJmo9o1k4VFH7ohUkRpqGaebHb29StqTiwYQqUnRK",
  "key10": "2aVHDK6XKxLan1NBrmnywt4vpVzxDdXgfyZ4XQT4Dejhnc6KqED89kPmDqfjKyqjCmTrr4QMfAV3rZddYpxW3Y61",
  "key11": "23zdkZE3DPjCvG312cMt4NajumkbbgHKTypnbtbdtjQ89fxrVTQSfjKrBCBgePWeqGS6tumMeX74THCk2eyrBtvq",
  "key12": "2sJoDiqrmffFjDoDVdmocLBJ5W1Qxv6UfKabP4vzq7KeYApshrMbN5GQ2FqT1UCTLMceoURdWtsuoTYynMcG9dfx",
  "key13": "3Jcu2zVmvRzo7XQGaGEDHv3KYpcgdSxnBmp7ECXVb8mrzkqmNLUMBs6U1ZrvNU52hHwQvfLzRZbwRuqhDL1QDQS9",
  "key14": "rwuaKJPntMDfynrk3ANyfP7DKSaWQLvWnDxZRw9y9VjTUWA5yzfMaEpyckg3EZ2oceAUh5BsqquHSFhW87TUoxB",
  "key15": "5Tm14vzwHnxPHw8vZzXswwXgZU5Ryq989ZUFe9Ya64m2MXGhEvpvs93otjXJHRCTPBAAFsNMTaw5uGjqdfrZQDJY",
  "key16": "5KG5mqaUaUYTRrpoZRNuigNHZ2A2CVKTfiPzKo7x39SPNqMuBaTtzViwENn2ax1jpLGwh2Q9YUA7yt1Pp7efWdko",
  "key17": "5sT6ArLSAR2ruVR6aZbk8EnpvhE8v3bdGJrWAWsNWTs19akP7NBnY4y2TmGAozQjwsV2EzN2HRiqeRqhUmR47NS8",
  "key18": "63QkDGFJumHGheWc9SqeAqzQBXs9rPk6DT79ojdUvSQzRBUPJLxY8f3phmUqjccits62gfjnd5oZjP3xQThpmsRX",
  "key19": "2BLaAa64ibKVLmu7fEknnXKeRHPeFKxEinsZnmmUZNv2GvNwZ7uYvewkt3VP9AymipCWzfWQKdafSvg6x72riq9U",
  "key20": "4GwtVj32Ve1LXxtgZbuBQUptnx2rPPz8sFxQqe77hD8yDkuwQKkz1Ycys86PHxUkShxioahcCknVfRGV82v8mcb4",
  "key21": "2ZW3NWbHtZQy4yJJeGvwgjQN6y5Ldoco65ju3EC3jvWP1gcet1PJKdfXogMdUCP6WHhXx9gRznhSLzDbtA4iMxAj",
  "key22": "5qAZsxs6f8Y4f7xNfYxQsPNLJgZc9yCq1U1zUTYq12uLT31bzbN5tDWAxVDv6eeQQF26F4mKscc23LZcmLuK6LkU",
  "key23": "5qax7WGuHVx2mPuXjkmhf3xXFC2qvqScuXqevN8anSjdKYCf7H9HZTDErPJetugsZkQtN2PmmH5mLjVeh6aN6J2k",
  "key24": "5ShnctzKueJ9uYxtUGMacZ9Qw3ezKR3bambteqewBHBuuEtP1offDKEm442K41LL44WimvcNG5sYHqNa5DCXLva9",
  "key25": "2UVQj9ZXLej8PhfQUL8RuxoKzYgFJTWYCYpQrYidjMtHLYs5mhJGoQwnHZbyW1Nn9HMDTwcxPnd2L65sLfUCCJSM",
  "key26": "2Eo4ZM9u3Aoo2E2YEQmh16fSkACwrCVnHFUQgT4V2QcHYXNCX1RPsLAsqQed57bB1uRvu8eHMp6HSLcYC2BDv7yP",
  "key27": "3E7kbzhE1K5JDfMVCwQDxCwvn951ALuV5ShAfczCiSug5pK2TqQtSffcC7RuA1vWGiN3KqefFzV3Bgxw12dhPvYg",
  "key28": "3wr2HEsQtURw45fHthbZkxjXZYaApJqkAR5THDVcG4jqPLKi3JisZEUw4yhCKdpyhW6KatmdSX44SBaQi4zLCitz",
  "key29": "hA6YWEv4gVYTeeQSuyN7RbxRkfUypsEun7J2pBuL8bVogz65jgMFrdv2HU895ZSMoypH6LBB1Yd1UdyjypWXnty",
  "key30": "3vTyfELvfb6L5FpK4BV98p9YrT43MXmimFgdr7bqoG8HDuFsX6L6u82ZmpcvRakKVnSEUsfensGi9oPTC3WhA2gr",
  "key31": "2L6RNrPRqia3ighfBNpDDdT6ofCcAHhfU8FgT5E8vLAhZBao6okwN9TJtdU6YZye8znjdD6aSZC3p7ZCeXP7tACQ",
  "key32": "262HzMS8HLX5Yzmybg6YVdvSZWRDo7FjBf73peRiL6QUYSG83rD1xShw4K17Xz3Ygbd23X8zxW5U7hSqKgbqvMsM",
  "key33": "mSj8C5G4FqrKgHCNwaRHcbRhh9kPwVgeBms6zhrjLcNzryWMb5mATAkfcC7nsR5ZnX61CMtt1a8ojucGgssBKh9",
  "key34": "5mHembZQ6FVvFWwFLPW9b97QSUvjkDNTNL33mX1C9qvvWSr5ZP7Sc4Ci7Fn2trTk9GwxEWLYvEvRR2y8XTq8z5Tj",
  "key35": "2WitDNxfr3Zt9fPUtXSXmuZ7MyGA3oKjyX5ZCa6x1nHuFNoZPVYB8sQ8McN1C6TfMDdq1B6t9C2pqGYz4zjhZKpD",
  "key36": "52WgceH61faGaiwiDrvMgjWyWxNszMmXnU5s4hNdYHSrVLvKwQZoKFcyqPiGaQdFwQ7BEWp3soVD366yf2CY8JrM",
  "key37": "2AzYnMg7ZpAosL6bkfcECVBmGrnzVfbySzEtX1Ks2R2F1S3aiTUX8yBv8CrHrBPBjJM47TThxJ51WsYFKqubXy4J",
  "key38": "ZpKCGTzB6Acjuai1p5m4V5u7xBfUCBZzJ5PvpmmnvZKcVQDtWExFkYc5eB6UWbwni5rs3FacuPQ7pYiiGs8oj9U",
  "key39": "3UKhQhA7CiZeMwRPqCM6dhnEoXCuE9NtcRtCZ9spp2wboXAy5ueZjkUZjC6jMAUiSXyHmWdykwy4zgT2mAok4XT8",
  "key40": "4cbLc5QDBWhjHTSDHQM3AiQVQasfiBJs8zkEKHEB2KqYRJDMwaZwPHXKEqxdKEug8jNBeXLWxrmeDC4zsco2HYqU",
  "key41": "5Xn8QUfXAorrr3b5XhygRLMtUqZNDfsiom9GX1rEghRcW5Z7DjmKTKQ4Yc93dVpPrU4t9Hus8hxEDK47yzyGsfwB",
  "key42": "3bqit4NYWCHFV5URXUjYekmBFtzYB38xVGwcaPrFrDf5jdJrVqj8x9SEVAva9NXDmrPxEGMJAWXbFcBPrbBfnRJr",
  "key43": "2K2Kku5tpmP4ep8FUr89oi8d8VzKgqBsYBrrpPJLE74oNLLu48en9ybGBALEtTgXv5CAbhwY8NZ5cKThENKSfWMa",
  "key44": "3wJEUfrmyRg3sqw7pu44i2zSgytCVYivaMYGvk3NYmAXFVauMkdxFsb1NXu5XCqgtcxxLWCJBNRVEVZaX9MZwfAs"
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
