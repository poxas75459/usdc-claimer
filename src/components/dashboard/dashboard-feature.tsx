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
    "5ywf5V5Au8LFxfEz1xebLWMBfXQPgJConXPdtnRhhzBactyrHU9WRrrzwWV6bBQTahvQARagEDHrLX81MfBDEPnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wARyhxwnwkkYSFUcr5Lvuuf41fCViNWPB34RzZZCfC2W1xH3ZFMuamXPF4TNC1xBWcP4oVZn3ataMN5ANjKjoGX",
  "key1": "3WEFzEJvGddeFXBaRgPLf9U54NV17UB9HehahdefWv93TmfW94pDY8rVxvATNTtMpNjVGPavM5rwqz8GoYawj3bo",
  "key2": "5LUzagA4N8jLNDvkP5tCGju3wU2xyaXdGKEBx7Kh8FSYmpbb2gKFLqUkjiwPbLcUCo3idRmMLoRRvxm17UrqFn8H",
  "key3": "BLgqwcQ76gmiBNxUmyibTaAfLfAu5hEm3gtTEGiv8QdtyVu2qPaPGYTJDdZVS5FCYhpd43jMtiAS89PMsqMvqvX",
  "key4": "59TCyVUuZrcBtq4jvUnH6xNzJcyjqDnSC4KvKpB81Lvrw1ymd1mzS1Y5DBGjrYEiRBPy3ctMqvsx8czoDJfiDpmP",
  "key5": "JTZwyGhZUoJvArapjFBpTMWsd3o8TBy9w2DS1s7GQXbcJc8T3ybnk4xCXepV7WCJwgm9W5KQgCbE9fgaisfZvfG",
  "key6": "63L7NRTvLywSQMZV13h6kMpwZ7iqaZAYMf4qEziH5M2gMjgDyPAVXxkiBE3uxG67viFk2WRizokH3VfzwCgQ6ZMC",
  "key7": "2aGNQa46wqWfDTZKKQys5Uq52pJ9WDa1vEJLSufaBzi2RrLbzfiUcEUVpbGLbbZv4KjcTunSJ7ToK1Bpxkp9RdQ3",
  "key8": "4P1SJUv1T7HtSvE8EbqgJM3P2kdTFgEyhaUVpdnbegHxkjCzFuafBCUBAfiEhiBrdnJQD5MjhWYz6VB6yMCZZQE9",
  "key9": "3r9eWsE4MgHLsPT1Uw4UqwAWr485QNFk2FpkdHA1N6ejw6VvxZjZYrsFNLWQwWTm7JyMcAmdAgFtfWSuw4ax8VC3",
  "key10": "4zEcyHUaN5U9nLMWS2SUXaBuJMBwJijya8fUhTYgHWwGJtCGzq8yRrp74wmHYr9m6qiMgHj8xq5y21Zyx7AeuvBv",
  "key11": "4hdVk9wZaa3Zr4pSYmakGqGujjL1QfSiAKC4z9rgS5NGYHgQSMgp3N8BxQvmuz31pzfryQYaDdajTF3Xz2xmZgi7",
  "key12": "BNMY5rHuzKSYiGhjUZfzDnW6hV4Xu9smk7Hiz9LxcgmEm5gErk9bbpc4vfJmpFHz3e1FRXCdAHVnHZ4G44iUbHT",
  "key13": "6642syayK6eAjgMQE42ZXpDEXk8KTZ9Fta7bks7hYwrrd7Yj19sEYwueKDTo9nDGmXn6f4LiakfbuKgky3a7QJcK",
  "key14": "5Rv1fGDetb6MiPZ3pce4bp4W5CF1T9CmeKqkPrVaYCR2L92pdP7YqRbCHZtxT4SFG455yrk59tK7Xts8qxSo3i24",
  "key15": "5F6PKBdjKVmpcZt3dxzK2zuCLv6cjC4rD5F2XTVkf88RdfGAmPBjz1YQk3ddNoMFT4PZ7bS9YB8exLGAmEkqat1S",
  "key16": "5E7JdLy78YqKgZLRqUmtQvyuWmNMG8f3z9poMDLQY3E74QrMMDcP2c2piQjGwETiJGPJyGAP5vYn8KHJDNEWuSNa",
  "key17": "3arsPmRkuMsZ4rrqmgcuxXZF9vR7Ms7BCHF4ZMfvw3ewPGFBCuqZ8mRDRRybxr2qy63DkiPKMdA9XqBLgk1r6nJ",
  "key18": "29pBrAvX1cgG3guq8U1ref8Zmd71aJDqqPsxpwLoTqZmN5UyWFRe6JLC2QYGEpdZz1MGEw6FkmjKik38BtczJsss",
  "key19": "3QWaY7fPCBWAS6ccRaG6qZSgnRjzY1s4CJWYsohrXWmq89RsbvXFzAMVoR8sksMAqjMg54f71J7tY1BWM43VBz5K",
  "key20": "6x6A55pHUVDBeuPGr3tcMR4emTi4JQigB8GnCkWypraiu8Qq3EQXDM95YrS3YBBkxfkfWiTuRMJyRSjypnD6mdu",
  "key21": "nLna9zQjyefSMe6pXaNfUkgrELan7ueeaUNVFC3mkfqWXGCeUZkF2DkENWweJvkDBkP7QNmaKPqLfp58PyimvAB",
  "key22": "3oc4dzgLHgkgmy9ZZBPr7NtyHMHCepwxjnqkFcEUuRTqLyvv3tYArbwiabzRkYHj33hMYhWnwYq2A6ZjwycjrkY",
  "key23": "UDy684rz5rPSxYu26mt9YMKxvtgGTqUwPhdqVRm8XVHPh9ftL9EcKHs5QidFkYRXNxas9bT4sgtFTyZ9Fo3YUzU",
  "key24": "5aHRx1byhgnEa1SUAYv9gDHnF9yqC5U66FC35bwUwLsxkwRQ2yQEwDEs3cXsRvMaAwJAcDPK42oi55xCuc9YRu3Z",
  "key25": "RvFsuDsEYB15CaZ9e7Vy6uFEsw4xcJp29WSAcuP1TMFZNkhrcL446CC1dBYfuHk9kGmifJnweFDVfsT9Ydbt3be",
  "key26": "2vhtBUwDFTY8e9fiwHrrYEqKjg3t6MMSu53E4LwNavKWFRHKdWKGcrjtHUBxznbDCyfWraVK8GNHv5UFfzCo7HjU",
  "key27": "vPNwb2e5qi1JbJvLGbqj4fQG3vJZuHueU7ZjU6Se7ZEZy3SMSjBR2ZFyELxSb4hPEps89eQyUaesZMjsSsLpXz9",
  "key28": "3cGsfBsAeGwGcntywuroqYswkSYquYP9FuYd5n4VAzxufQdRCPyZ1aJGitoVfWvccre5Zeff2Lq4Hc57VyRzPeMp",
  "key29": "5Gv8msNFUy5fsyjGd6w5hsXbSQFBr1Thd5hUaqD4Y8WXC8mmZeEdcwsBve5gHMeaLbbL8otNn6jZ3otQFewPQShQ",
  "key30": "2j7wVq23WqSwiH2D6PKzyedPtiCfrNvABfrbyd619JqStpeAxVca36qeqYJwsx4iHhoa9vkhziFjfwJHFp22xSDR",
  "key31": "5FbapH6DsGFMYfBgZTrAhqSPfRcPRMdacUsKEa5Zv8Edvy5XU7g8t9LJsskxhsnBjhpEkrjMLvv7f2eQxejRwPYk",
  "key32": "WfbJKWgeU2jjr7S7fG62fz7moAzJkf53t8F8C4bBuoxw9pqs6NLttLT3i8KbMc4LZpRheyeqypuXjqnF5AybZQ7",
  "key33": "5Zh3AN3z1hhbWMxkmjGR1nvMRqcf1uwu7nAyC43WUDJUbXMmypSUyQPVHM4KTcXjyqcEeQL6rAptM9EDvuoVM6uQ"
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
