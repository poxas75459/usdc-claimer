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
    "5tZYdBamAuifWxqdrYPombAbcL4wfKFfXxwjgRe96nRudNYS1HPzSxrnjZxHT4wPYgFnwUD7Fat2zE7EM44qrmkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SpW6hS1tUnRh8XNNKG4L58vsC4Zufwkw5RzaRiC1zYKBnBQ97PN1URTNnNMp1AehMz3k3EULN21yUjE87Uxb8jj",
  "key1": "39MQYbeC7vJhHAWL2wAhM2M3cH1GGEgcjXThs7hRd9nqkG6EJa4jT2mNPZua2ovJxCzZiJdzQoy3yCjmWAPU57F3",
  "key2": "5VdhpsxGBvN8Yshz85WfAYtEc1TdejwFoqHkLhvxi8EYWEGJncujD6NdV1oocvDtPkW9v8hjbWAx45BDcNRPeNJJ",
  "key3": "34QCvafMcy8cE8DsCULjYEpSqRMLdF6isknFm76eZX1fnRemKw7A9T7sfmVh4v8iXdH9ZaALEZawMYEHZYUKP7nq",
  "key4": "3bbEP5rh2z25MaRD5YpaGBJxgw7P2Rh3heB4RYqi92bQossqFaCMWTnGZz6s2vM3P3GWZhFXDBfJA2bEp4HjwF1J",
  "key5": "4je4BRdtp7Ynb2bfvaku7Dhz36UKMEDZNgVvXRoHNuVr3UFL1z9kUt2guQQrzFeRLnZbhR2N2WpUHnYXJ1BKZBn5",
  "key6": "4R5zTEB9racEWWuwN15JN9NPFXqahXH4NgUPNQ2YyDpAK1Dg371DKXjxdjrNLaUUPmfwALXyLDtoFvRzmsg2ZpL5",
  "key7": "3ZNW8fRGKMvWKuttTKVEvar62GUeWw6HuN9iyKEbj59enFj3AgVTCQoumKRincTjZLC1S5e9r3XuqujPKMNsU8iU",
  "key8": "63o2nKE4AwrhUZrMsevUxXwvCQsPLERA86vHjw4xUy51tCdWfrxTSCw7siBtEuWBYSW1gq8rrrGq6GDoNMPNgGQt",
  "key9": "1omWJxXKVYBvRAzwNHhkMo1fvpnupstX1sKnNbUJdccnd27maUZnr56NZwyAKGMGB8o5VwQAicb2pk8ai9nGmMa",
  "key10": "4W1ThvfoH9SPnaVyinnz87AwE3XSGYkYmuD5uYjPB1oTvhCJyaUVUvrKaykbfTLrsCXqEQqp3X6jPGLEWYJdD5m3",
  "key11": "2UfURSK8DbXcD8ejkYdvewz314ru2Lc8CBPoatKCriaBTMu8yBX9HNY5bUrwsf6EL77ix8iTupGBkDpevJFqh891",
  "key12": "3rsuJYpDHVUPeBpc3fzKpeBrt1o965rcJrsPmrtK1qSeAbwudEop7XZ3EggUvnmixiR9nEJsq7kGwwn8iUEHzknQ",
  "key13": "tyNR8S39uBzAfvxMQYPChqgdJVCP3b5SXh1H1UjRA5Z9PBQ93qifsuQUmXTqKsaNqLTHwrfcJkSqCvakHxY7Jkv",
  "key14": "Hg8AzibozL2dtWYSJZRtC2LSWYgKpFVf1weFsCXsqAMtb6CuJut7pCbDvp5VMjZdEp95njy2LfCMfonYkxuzZxq",
  "key15": "2paEzAXjWa6Nmky79VyFZKLRpg9SyDD7TSDM6BmZNkJMwYV5gguLiPhsiDvoLKiheyTgwdKThvAVKUmRk2rZLxdp",
  "key16": "K1RZnwbeMLsXWTFmMUskpR5J725efQ5TJFSak5PQsL4iUEY6kTaWeLhQzn9dADn95fmMionabi52aRgsm19jNji",
  "key17": "3RrMVpYJXakmCrRVb7VGxVeu91uscogmjKSKzcMpHPyZrsFkJWAs8sGEpv1ZMM8Q3tbdDnSD4keK8kB77nqomyb6",
  "key18": "3V1gdNFLQS1DPxAEQmJMmY9aYBuhvWseHSrjsMgigF2JyrNTx38KLt3heQkcLuav9or4r3qErSN1WLzGqFFyVR1P",
  "key19": "4VSaKp3BHNbdsaJ5kbBk716J5dAP5HcyBFbYtLbapAmJwgeRfPKaDCKs8zWcCBjW1tsvLnqNf9mAujya8QXYz9Hd",
  "key20": "22hncc4Sb8ok2Nm5Er79585pR2bmychT6EEQdgAavVgKmrdR31k2rLjMgUsh6Nw7T1XQZAEEjoAeaKejWAyz8xw4",
  "key21": "5mUBFUDox8UBdcrvqyApad3RaECvAGom5G57aan5eBtTSmisHC4hbkoDuVAECYYseSpU62tdRA5sNgr1XYJPWcRY",
  "key22": "NHrV5Sm84HNU6evYTFUVvqivdGZvCmi1Qa6RRCLpZExJZk5NjUdmiW5MeXsG19rn1gRC2KcZb8Hk3eZEpfytx8R",
  "key23": "3o36Png7e3Z8xZ42JaLBXvNEWgZ6yhZ3zjjb8Cq7s1wY3TGbufTZjYZefJ8evhzQnhs5EM9HeniuhKjaudaNQgh",
  "key24": "5b3RBnTWUMPwscpNE1TrxyxkbqaEVugfRxnjvUArreFXp9hC8N1UvqbCMRe1u8UvHsN3JTZZRsJEnAq2sDqM591j",
  "key25": "3MZFL47GwSQvrgXXgNyKoL3SnXxZgbc79Wxe7A7frGsbbwptUorigCn9QUodC4oNzpMHP386uWEejH2gkrsrvMBk",
  "key26": "3fcf7LFWL6WfPra5uqCifxUre3xkEVjnZdUvkLcfKwFA5KYqYYm2SuPvPMvzmyoJ9DamutrXh2nSbSrt5bAnpg4M",
  "key27": "jxfCNKChD8NJUfuoCVyJDeE9xFoXivNynh4wEo7XcVxpKmoWmiUpejv6WZDZwcXyZ2zgCNPNvYDwqv3Rc2ofzVf",
  "key28": "66aWVTUkFboRHhPfKpqzDAWHSVfpDLDNybe5e9WgMveA9nq62VLtBK9ixjzRpGyyYFNoFH4AJDLsWidpKQAdTLz3",
  "key29": "3Vrw5gQH5RTetBegJvdWM3bNEEogFGBCEWzzhkBWF8urrUQhXCnS8bvUKP1msu74AH5uWXYeY1AZwRfGw2Ryiy23",
  "key30": "m3ftQGJ1MvLvFieyVbASUTVgjSLyoDkDm4Zi4iz9ASLnRZx6NvhksCFsc386sfyZTm7DKgGFhTbVJ1rGFSiRYjj",
  "key31": "2STWKejb94Tg4JxxxAvDbPP1htEreusirEBqivAyXadrnrgT9ZeuCSrkwnWMbdLmwyMFP4Ro52DCdQ88BSwgnin8",
  "key32": "2VotiV9Aup6QFPycnjMKtLVpDLTLDkDESpYSumCr7CzHYJqCaPUdJf7QpQQo9G9Gb9zW69GqdDnAqqMfAhRW5yaR",
  "key33": "4duSGUVVYyp9v4cadwjGPmY51uhh4Vv2hwN8SbCJCF3WsKyo2CznSwU7Z35PKWPgynbqgqTSCHfVUdgQ8pSZX5jr",
  "key34": "4Bpau94PeRZxw5TB7kz5m1bMd4NSJVjECTucT24Cw41LgwYNChQZbssmVZPCUaQR4Nma1csEVkARU6LaUVCfAecB",
  "key35": "5xZczReg9f3cVCkd5EK4THSMf6npiUhaUqgiPKbDbPaKXSYPex58UbQejJJvFNsCsDAiKPctNR9dE92ohSxoRV5F",
  "key36": "419oN1HEcby9ymmTUQXsx5oMmXqQ2t3X4ZigC2oUe2pfBganMMNEkYtnuViYtjjgXtFSrcXVsk1S6DS4i4oVt5kw",
  "key37": "2F5jjZG9wLEmrbx8CzykatvD7c1pPymFkLGXCMsdvsSsdULxrum2RAt7rK1m3wEADTjoTfjd5eyk8FDN29jEAMm2",
  "key38": "33FfwSwWteKtGBAEzkYyDPG9nNw2ynGdp3UZdpPLEmtvmxCd3aXhFWjG5WdsDyQXduuqR3a5HAQDcnACbsDQPDtx",
  "key39": "395GEKsuoMEp6dBG1i3YrWaKrqyvEaK2xbjvG53NMJzSuswKMEDrXnRS1msWTN1y11whAAAPLaGHe6hwpRCr2G7i",
  "key40": "4Q4Ya6JGg9c4XBKTHshiww5fD6fkZHtXwB5ssAsZnngwUzpkotuJr42WP1uPsn1vtQ2gEsfxQcjsKdZ9XHxv4Tqk",
  "key41": "5nEUpVvisD1qDQkzmLGxr2YJ23Y46wU83HX9JWNFnAPXVgRFuasBCq6EFrpZteRaK6jEQzwdNm4fwwmXRsdRhqq2",
  "key42": "4jRYas8b49C1y1xnrWVzxHW9VwpoD4hZnpv1znE3MALfaLvHuvpqh14TxhiWbYDNp7GTxUEMJUQJEMVQgeZsL6TS",
  "key43": "3peZkTCDLbpXLNGeUHMzTkmJ9bNhA3EZ1NiRV7pjzogL5WGmL6QuxkmffEf7GKsrCPggRXvCAmRJvJZySZdowWwg",
  "key44": "5rNwXvHvboxEJxvyccTFqvwcZBmqCPAeAZZBNW3iJSP6YuwRH8Pf5KY8czAeouMZkFGmaj2Q5BnnopoS8vaawHnA",
  "key45": "3RZgBxC9ETss3RNi7k4tFmMhSEVzkVq8E6FpTJ3LQr95wqYjJAEP9xyCSGZuByRADXfAUWRTejSeZvyFxAqHSgBW",
  "key46": "5wkypyebABoJuuqP58ZJnS1qQnGdgvvtM32iWpxGfXj7Q89MWuMF1Gv6xdfYx3f1fTsHBoH5K3tsUUaaCiJCVz8Y",
  "key47": "5pV1MV5qk2f3LpqtkFFy3yZqUbb9zwnzWYZNgxLurtAgEXumDEBAXSvNJJy6LRKuyBFwwGbkDmYBRqVSEFvxxd8w"
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
