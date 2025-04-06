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
    "3kaU956ZS2RVnLednEqEQH1EJYyGdJwoiPDaYKzZdbUTGdXLftVM2jb1wbbpiJ5ZfkE7xwz5WzsqdhUMSxidpHWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oqXyXhrSEvakfHaJY2hHeu4N2e58e7maMhPNDoQvw9rKz4ZUpHzxYryfcSu79UKZ712smTHWKJxjvDf7MAWgmVU",
  "key1": "2B7tMS4g4Bk2fAtGYVP2GSkmKZoM5E233syFkJfoEUQcvzxaehVSua15GygbAA47bxoUNzfc3rTEcdr1ieudXwFU",
  "key2": "3MvXjRzZC9QSFJaiJfgg99uLVturCNaBMoRDrMmH2nHEctB1czkjhcZznZLKXg5Av2psGaFdvbVANRzaw7ZtzAc9",
  "key3": "HcrNYuEYwzBrARxA6qhdXcNkHosCw2L4k5qstsoe6vHiJvNsdfEZ3D94WjR9XcHWAMDEQqvsXkvjJ1Ja1Dzi2FK",
  "key4": "2DkMuVU5X9HfkucJMTSvJUSmzE6cdjpJRjyA6xVR1U4hzHH45bvZttLgDV3ieG2GQiqw3vn92UXoMwUzaXzBf3q5",
  "key5": "5wMfFsyX7oFD6ukKJ15UYiqZ3ZTA1KjUBW78WCi76M3jGEwtXkwnVVWuzNSrPsJzeqZvSrrpVs42q6NmWbrtgTsD",
  "key6": "62q8a9kYh9gaBF7rsFvfCCDseXZiJdMVeagD5JRzjjS5oPnkxbpAtPFmpK7o6yWu9gbVjdGizZ75usZg5ZCGLzWg",
  "key7": "59WPVWqKfUm8UVXjbs63u1VuEWWgaHZBXUdximdg5NH9gh4kDM7MESeRAfsNECB5ehcXzm36iSNaHRZuV3JC8w9d",
  "key8": "5LwdkFk3qpUemWQpAYG9q3vpNzasrWRM9kCmAYVYUw6f2jvUh8NCriKzbSk2mxUGe2hsT4eZRhFi65eMiDUzPJra",
  "key9": "59qRzn5RxdacjJKd7TMmfzQRsB9P3gE5pE1xXskd4XtmMfpog3gAuc9pWy4ohstKvsEC1apk2uQ12fdR1mEmW86z",
  "key10": "qRNqYAx8ZHF5uezs6curxpwS7HqMqGfdeWZeRoywbAowwgisrKwPdbx4oFQ5rsrQ3DYFea7ei9pPMtXMVuWv2ai",
  "key11": "23eufhHRZZBZvfHfp29pU64CS79omrTkQme7DxY6k3gRTdfXWcQrX1LagCpmPcV82PEQi7EX4JiJfKgwJsKndFUz",
  "key12": "3Edv5xAouNgKXmiwFyKJ7hnuaghsyJ48gh4VHrMFy6kceuvM1qMGTQYFdXUNuFhBeF78ogLa4xnnWYHJQeDfEpng",
  "key13": "fr4wVQXirn2nbbnas3y1P2SGK1jnDJexXgPhmnvsXy3rKmdgWR5jB3umSCWSHCV7iTHMVRXsZ9cpJo3DaAaiyaw",
  "key14": "2r2x2ABq6SdJ8ujapQaf5gPsUif6BTBuTJCzEN4qneSMY6CV558Q5rV9A86bvDhSLwDix6RCFT85F4DNdWhrsfYJ",
  "key15": "2oVhvXmtUk9d1t29FMhmtBoEtfDF941k56VPzQiuoaj1rRcdG4KVQiwCP6QrteDZHbp5W6MqxsHFuMAxuYxrTLKJ",
  "key16": "4hMhxAHEicN7MniT87UjmUWLtXfgpYcb11718BQa1Q3dZhRyGE1cX1e9PrqUXdA9JQdLYupXiyo9C53TSXUkAYzd",
  "key17": "3MTFY331ZqPxdXKvkLFbkQCbGF4VU5n5RNTbQWXSCYQR95uKWAAMrXF6kUAUJcx4JSE1FB8JJXo32x4XxSw1mAKR",
  "key18": "4ygzbWaipwEFL5iSD6rGUKZEmWwUf5N4LonKe3uWRXFexhHngnKTyd9JFrBdwMjqKCTuvehbbyqNEqxfqhTEjEFz",
  "key19": "3UtpZRrSiTJPL7Z8ecK54zaYmaNKDsurJXBuaUnPf8DkhgK1DMjmepBv8PGhfeApeJa56h7rUC4Vijv43vDp99k3",
  "key20": "5qxERv1HdcwNGNZXHmMN5eLS4vfaTUEqLC6xkn4zvG5eSmxWyyEgZfas34n2UvEkiFWVPzYfVpX34QvEFC7gQYpw",
  "key21": "oWGx24xb65CrKtgoJfdsJiB1CY5bH3mRXusanhSabsAiT9ZAG9fvcDTGJqgNBtDeqgBgXpJQLZ6NwXiKzCHkQxe",
  "key22": "2wQfdcNqprShFYJqXyDRuJLK7MTRfVTnKGeJcTt8wEJuc61ZtcAQF5SHRa1EDZLCqk9mwSzpv5ckkFgSvebD9BBY",
  "key23": "2CuKyrZGevNtYHAuD2CgSvpPdgkwYWDVJ5MvWWUem94Wb4Cx9VehyAvs67pRU6rqVNpgB3RNaQKhuLgKXENmwMCU",
  "key24": "342cUvzuuJFQKpgKfCbLvsj5GSuTjs1Tzp7nEWGuCSeP1tc7Gxjs6RbJL88o4qsAgcrW4LrAmY3o9oRTHPvoHWe9",
  "key25": "Mkj37JzLewSTm5P2Co7iSooCPHb7ygot6CxxVQnwxx4CLLr4uvDJPoo7TCxiAADgccHnso4ptpQgixXQ8FxX42x",
  "key26": "VhAoaRqXgHb5jmcLCVBQaqk1ZYWZTXpp1Mw3iNDXTgwoe5PEnqG8eCCzMKLrTEsbFzMUS5MoZBiGzz4AHfgCYAL",
  "key27": "3JQowBAutpQXkvyWqjRcWGCh8RZHQsA5nVxZuvYgvHCQ15L4MfsX4XSvAkUcyC2xxxW2NWvhM6yVhYUuPvDAv1X7",
  "key28": "28TUAos66cww9yZKCq79HBjAzHLWgyfT5fcqpJpPtTgpnauEmGVYTwHGeEAFFWJNMjEPvqSEdav5Rq6N9gbYj122",
  "key29": "3tpucrCeX77mpRv3gT2jtdREkZxNTNFhUNad4pxieKP8LgLpNrv7kgY1uXCUNZA3D7Un9C5MuWZCmkhiJBzQEJtF",
  "key30": "5sEc1owbGmf6vkk1fu6k9NJqLEmbfnqzwmnQQ8Xh3THrVQw3QgDX888RhcEcoYFhxMqG3u3jAYJq7SWNx7XNwbv8",
  "key31": "4UYF1Ur7xeLtWRoZz3QSjW3BZSH7qimGTweDwWwgAFuAaLBt9xqDGoE5HX1532KckhxHpPwdb5ra5Ko3MfiBLEa3",
  "key32": "Dpubq2QzZRrqUjebX5GpFkUop4nLWwaZxx8xKJDTt2kpfeTUZXrBjiMxVTPtJBmTAd9Ray51w8PimoYRfbLkJ1m",
  "key33": "4agnK2sEnYBjBv8uhjBEUCJCVqfqxCMkPpkEQVJc3uxFXNe7WWxRoCCkxym4WEkqyPMcRkFcVCZgKvREMmrFA3KX",
  "key34": "2NFEVXcKzPc8zumCvDDeTESG23jFWxkpyHCkqhogruYYzpm6poXPqcVmu4vHg7TQkDypYLBVduoVciUkbemZQ3SQ",
  "key35": "kU846HYgLerBAPwMwSMmQUYeXVZs1MmQ51vpjovkCWW7C1EL3HZ5ef44i9rRS7F6g7HtPNhFQN1eAHLjHQ3TpYy",
  "key36": "5mabrUXsvg5ajNgNWTYz8PnVtTHoB6ta4GRx3zLFghKETCpLHoG2aPgubzCw7jNE92eA9d2KKLiUHbpsVqfo9cAR",
  "key37": "55h6pVgokp9C5JWg8SCaPN8UFsnvVmnY7ciyJRMGKgSBFy9eKVLoZEBHJooVsNkUEzzjVCx6mZWJDhbNZB96S1gb",
  "key38": "5nE82aPHNboTahjPFw4tHcsQdEakFkCcxzWv7nmK52Rwr5Xtx5dD3dHk9zCgSWpnn5M9yz387YQ7pXBpyTCWVMzH",
  "key39": "5cN5AmT3euLZiKtxTm8PL4EWejPfEUaGvr97cbDYGPAe8o1pFM8eqhHj91MUEX77iSDYPoFMTfLNNMqUMxqr3a3A"
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
