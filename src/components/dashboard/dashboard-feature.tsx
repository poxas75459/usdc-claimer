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
    "4DTwnHMtTL8YKyGwPdTGobprR5kLsMEz5c3BLHW5GvzhruaJirEFXZDMxyphgNbqAxvwdf74h7ZNnGN8NXwW2i5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eSE1WVUxaUbQ53tPjFXEYWMFNfmHihkKyDcwBtBVUGjCxk1isQ6nvHKtfxNmSTt6UNFG56UodprS9ziKz3ycG5c",
  "key1": "27YANfZeaxWVmCS3VAjzcsxsbuAXR61k9ZQf9VTc7KXbTyYakoBeywpiFHNAxAoL65L3ec5ZocVCbbZ6U7pfW2HP",
  "key2": "5zQiocgjmhsMZrajEUrevMpFHE7BpQx5h41ubD3prScHXur97RFNyTp1dxPTQBCu9LamfzLX4vVTRGWpmo5WhLd5",
  "key3": "5JEqCvyuHxrWmhNG6smQ2gGnBc9jw534rKX2DS9mLpbwZbXNZdHeaAWKb5d68aXSRrGfgjDtx6L3H1hcsuVBBU4S",
  "key4": "45edvyKbmhNK5AjoX3tHomvJMWyE2XiiSwURSVCJ7dBNqTPX6hGRnsgMws5Pd3bceyS1ju2oLPk3rUyvg4pzbSEL",
  "key5": "Y4hoFJPZxneKdkLecFsjvGLMkjPitLKSXmk6AuD7UEs1PZFQjKQsLbJghg2M5s3HB5HLBw55s1wEykzPjePKh3B",
  "key6": "5pAQtqWxYU99e5HDCLEk7jo8Mdradag2j85QDfHg2Sj87HyajUDN3yztEWYyWxuVXdXBmazakgwvfF9rd28AUrgo",
  "key7": "2hbKFyJYdiD7ep6qkQdmwREvWMNn914R3XB9sPzR43Na3EdS1mKsDnP3tSzX5KpHJyieTPbE6iwDnoGJmYB5LnKS",
  "key8": "5Uqu5eKkEax9A8HSyPo77E9i1BhuDPLnuyMKPc2R3e2TgJxQ7he1JjqS7oAoLtxoyNFZfsGqqHPEJkpM8oeBRMvm",
  "key9": "51x4sQ6FpygWMXsSs5aHBRSZ2hA71Pt6E33TE6f4Bym2RutdA78n7sgzK139DwWfff9yGef8SyNKGViV2NuRUfR8",
  "key10": "4mPXGVJxjCvCEwAUhr6aQSe2eCQvdYdzk8aC4sLjTaXRmpXWwvTPLkkp7zEPk84SJK4qdPHtmvSmwZ5FaVeqNb6e",
  "key11": "25jEingn4LYX32P5QJF4NaiusW6NsEBnG8HRe6ocYgXSrN8KC9zoEwo9CDMZRHsxoJmk3E67bLWHwycYdKvTupsb",
  "key12": "452yBdDeg9q9xjXkf2qBVRDJwC4wJJ18odxFGeqQWm7vfeQA5B92YsEaupXsJfEzfcdTwA6ch8GHs37tRtNKnQcC",
  "key13": "xZyvnyGFuBY8Rixu5ZsZwcRDpiNjHnjdSMJ4debxqVH3cjq8APFRVVtEXqQTrNBDt4aDHhsNeuAmD6NvaW8gcxs",
  "key14": "2LJjzWUn6Mz2C62rnjMjXXcJZPxw88qv9yL7NRgUjRM8GLWQmVGPmm7q8YDMcx9QrDe487PJ76PTtgauWA7fTs6j",
  "key15": "5GLytH3JwdciS8K5kBK4MxPGcnNR78LVQkyDcyWGyGnorootAdpq276f5MEuZhVef5oNDEEMUubFm6qrxyL49cb4",
  "key16": "3wxa9UndZ3gvBcDCzQfdAYc8na1surd27iMnFUuGZGTL4fSrHz79X4YFiiDt3ux9y3bFDwuBSbB16YGiRwfxVLC2",
  "key17": "3fD2jwBGdhAMsvK9m9xVe1uf9Ln4bUnm8YjRYV38CuaFkYKyBw7YCWyQ5RuzW6Xdne8Zmozi3v2NJ3hKHzV8ZjQj",
  "key18": "24W1tKsX6FzegWrz8pkqUBeANHiCR9FJWAkthCncn6dDUidk73xJTXR25HHDU5uFYkQSbqYDURugEB416e71R5jH",
  "key19": "5La3hRxRBUKKG8TiUEbdgZqBhmSVnBxrZ37NyUeyhASXej3bPQ56wF514GMG5pxnodz9bWDGrSM1CEQgBSvnARPE",
  "key20": "3YAwk75yuXeJVSWZXqpxTpETg9JrWpXSbUZEoiJRABpk6Bdmjmjg3vwAfHhW1VDVM7VbE6tURvRxwSiSJEsiRPBb",
  "key21": "2LLusRV7ssXGFTHj25cDYu8hJtubU3mTMWkPmB3j4ZKUzPiGchHmXmXbt3HKnzveBDtS21pLi7aUM94HGWwbvfGf",
  "key22": "3qYM3aKhAZqAud8jpGec3Csvgh2UoEBoDQmu5Fye6HBG8f51nMydemAAUjJEVVvaMqDo1eGmWzZrUJ22L97FpEkC",
  "key23": "4zkfZELV4CcFNWNdpB4q2niJapbqH9iqhqmLBynAPWBkoUKkNG2Lqm7RCuCREJNThHfrzhdANb8gyb1UPxfhQ9nw",
  "key24": "C3braX4fwMY2FvVwZVVcRwzG2kStjBE1zJRB2gQ87TQuLC6Ai36oXYJnRRe3Kja2M5RXGv9fCigwXxoxo8oYEtE",
  "key25": "3FZgciMtP1b9J1zyCwkHhDL6HGwnC6Rz6opbGRcWVgsrGYZT9BGrBK4xRxmsKrT3GVqED5z5BQDLr4quAKYZ1oj8",
  "key26": "5PEhyhyE1cCQLqPTr1vpaooYU4QtEw3F7SEsRxdhf9F6NAr5mSKLQhPKf64aL8ijaQgAvy65feqkQ6mLCuhT5KYq",
  "key27": "3d4GVacDspWCaCxdqqd9bRmthmm5Y6ycoouUirA4Dx7TFGWXspXemQDvBJ8tx8BeYB51sZAUxhJ11zR9BK41dgbf",
  "key28": "58TqGtku6scAgWymrgJeJbzMgd7Ds8HKGXr147N6iUQNtsZEtr8E4kw9rVyPudmXhn54tZe8Wm5nbpxES252xt5r",
  "key29": "3DUiG5hybRtCcZjbn1q9oTMGy87GV4LD2U5CnjVkjYzkXQ8K9uukHzU3jn5htBrBa4BqV1EvZhyHxt1zrfsQefdB",
  "key30": "G3wZUGdU3adDoJGtUQfUhYBS7aC2CJyEtmEQ49thQ2562SAfFEmLn1DZFJtn1i1c3buVzkasqfXsJhW9c53j59v",
  "key31": "5vPxbpXaGrCTb1qzEWp3PEsjcBsU1pfz6DHL49bCf8ahJ6BTDJBnmRgB5j4P8aot8mB9Xyvi65NPQBrLVc4VyKFv",
  "key32": "4cnn1oHX3CwW7bSeNXXeJBYUtfJMWmHUZ2pEKW5piMDcoUbJcbh5QqhhwXwBdwSyGnJtyaYhqRRXf64h1jskup2Z",
  "key33": "3t51ctvZ26mshmgcMeAeX8otngP6Xvo37rdAMRgZbQfXVud3K4reBoyqRGJFqd28iQTfkaNyF5rWoK16cM73aysW",
  "key34": "eWAwe4Hbh7wnGnpgxKGjUytgGoXW3oEzAE7DBNe9oeKbS1Ndtr9nxRuc3Cn91WKDvFVRVS9qK64mbEc7Kk6pP5Y",
  "key35": "49NGJjYC7RLYKe6d9pXcPX4qjx65fLVzMrAz5C3VmfQQGL5GJRFGC4e69AdtznaACga8rdQn9hSGDryMcgUtP6aW",
  "key36": "3GDiCiay2AEGhSY6a4aBX6JSnVKxYQPo9v8JjLyA7xaQ4RgBMwU77GqcrhzHuN8DUXje9vYbAdDYkybv5K8879rA",
  "key37": "qcTH5PsHAX55MQRxNYK5UskaJex6kuadgEudw4ATvsbH2y2juYBbScoDo1GJ5q7Z2Q3QBKpFPTgAi9HK6nVf115",
  "key38": "2opUa6wKqSZqbsThoPbduMzpthaM1bcKm4gZPKvHA7dSeC3XchDYPYo9zDiLxCLiE7FqawirWSKNd84QLgZcakqR",
  "key39": "36eRiByPnEJGz9P1FDnzWHrFEATUjM9dcje7fe87uf5QKj3sHMsyxzK99Yc5GamK2f5ywvxnQGMpmmRBPue2JUVb",
  "key40": "5ZKeCK1utsJjzKZ2NVSnB4K7JtMGk22qavC3HvKXL6oPbvepZb3vBQ3es7uJzeEyNjkSxbdebN8xwMMekRckX2HE",
  "key41": "4t5V8xXiPRoGYGp9FhHBbdhsKhVuH7kcYgn8kAmVzBBX5a3PsWBELPzeAdEJQvp6CHiE9RdooWYmu71aNKMPRrDg",
  "key42": "4Ao8kH31XB9u1Sft5cxNGqdArS5UbEGg4FBCefSnWhBkrcKxFnqZ7S2jTQykDwdkLLSBdtwvMLkm29YKKxHwLCpe",
  "key43": "3BAX8Ha7upwkftdcfSxpUbnpGePtTbY6c2qMSwQh6qw5nunX1E5s27CCewfzP9XZ9o86CUdXABMSvLx6s3ZZSa8q",
  "key44": "3cUUUp3kuyKnnAjWfdGuosdyhUYAhMoHGPqvEBgerrQEtSgkRcU8TxPYkoyB2sdbWg1GkuPcEASXVBXzs4z9kfGi"
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
