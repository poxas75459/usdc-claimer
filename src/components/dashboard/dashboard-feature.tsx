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
    "2BotD5sF8b5Gp2mRRWozMznFUaLjt6eEFLuuncE7ypKCYGqoCZ1Mq6YnjHXANvmNdmGegRGE6J9Lss8Gz54S8hgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iv9w4dKyvV75edvj39nSMEzsBoEatngzt5o9fetccRVn67HVKxHph5MRufS2xfvM6BepXcrQ6MsaY9L8tUSH6Sf",
  "key1": "3hKGx3pm5koFhtFa6ZxDU23WfAnw7Xyo2FEDAn8J4LB8TAi83sYsynrTyFPfq8qraZnWir5xhVKQjCQsVv9ZzJTb",
  "key2": "6wJrE4mCot3QTzwqZErQqCQEn6nYo3tbt1bEZhXiizqah8ve2CbJt7EaSGEVg8odnqczRGJh8FZwjiB8vyYLnX2",
  "key3": "5bStQrGpCiaeE78MeetMGuWWfKGhukKp3NBruVfqG48zavgdLfWs73KoC8Cz56XcXwpn82UogMxx6cwcimTrbdvV",
  "key4": "62WgvtKn3p1tHwR5aQgREKF4qj5n8pHwpvufNkgfUK6k9VjqQt3aX8ivZpa8asLRUbcCf9tjiAFqf1yMnrJB8HNS",
  "key5": "51UeMRFbfwRXUy6wVK5Xxnuz9Gq5dKa7m2viy7vekoGc3g5wsE1ChGC4Rd9bbmiEi3yzc1LPYtJ1vLwd2g28nrAD",
  "key6": "3kBziPHYJCi8X8Qw4JtQuBBWHLRc9G6wvxkxdj1xWbFVRb5Yk5wiWjbZ4Wz5GnJjM2ozPSvnZ1NyMnxku4v1RY7X",
  "key7": "3cy3GZ2kgRj3Ptpg5VcgYs4y21kFdQojKaBDiEULzbeYSR6o1dhHfd5qg2PHQjcKXt7d2QPfCZojv2EwKCWmYFmi",
  "key8": "43tK8Jg3H6gg4wYca8ZMsMErReFbNcDnHs6sDREJfQ6CwktKSmyoiLouN2kha7VPoz5RsmVVVCxR4h2XrwBkASB",
  "key9": "3cxD7vNe1fRxVAokoQWtHjJJr1tTKHhayyTczD2i653DfxwVKT7dkvzPT7HV1XUg1hqroRTgKMj74USgzGcPCFKz",
  "key10": "NM4phS8aJNUHwJ2EcUmhFJ5289ZxbygoKndnAscw11kLYxVWjynamye3VZMoJeZF1ZMecUfo5UA7WkgFdWRWUgc",
  "key11": "3cx2BYp2ARaRyUyZmpEkVanR8352Afa11ECVPySoWsxCdCjFuzVv5DScYqccA9Y335WpDprPuXhBcrJynvT7tNfN",
  "key12": "3RFRTS4xqnwp1947tLRUyymyvrNRXGvQ5rnX7f8tSygZy6VgjDkgpShh925VyP9TD8JCSfGeFo3QQ3CokBvg74JL",
  "key13": "fTpZ4CG2aa1Xw9cH3U3xWRcGHK9kXmyjJLAVbAbcVV2Rb7hLXsYqYvbr2hxUyjTDTYKgnUEDggRKtuJQxZRd2RU",
  "key14": "3eRsxfgkFyM2xSQPSgcs85XA2SYd59gxpfS9coDnHmGfhh6brGiMnsJ5JG6geN5a9hcAj3kZFagpSsDWP2gJQR3W",
  "key15": "3TF2HV9JfQ21paEF6xVrKqrNXCvtMo5bLuJjiAYD9cjQwkm47xtEyNPQqdQUuZAJXikhz5UC6LhqjXCFpqXUXVay",
  "key16": "AHgLZR68GuLs7g7stquSpn72SFEpCZFTF8gRiDRyuXKuTFLqx6WX3WGd1eGCwN1RidzRALTNyNdE3CiDryy8CRk",
  "key17": "5tREJQhurZwX8fNSqes9rd4QQgvH8Ncd4chNb1vxxXj91kstQVH9qnvRaTjUpgkeMYhCcqvjqn1ZUh8uVw6eaHy",
  "key18": "2J6f6Z5QKQm1Ledz9kR9gyspnddo6mury9pwAhBEbXbpYBjs4ZbZVyCpvmYZ3UoLwq2CeCwjRi8ABdsryyuQ4qnP",
  "key19": "4ebCBmWTXW1uQc4rr3Svb2RQc7MbzFy5RJpS35MmarRq9tmaVnfGuk2HBdCMbkCiTTbsVUeMKpkW2KHbyJ4SXH5a",
  "key20": "35NF7xDkhRvApqs2LXppkfWXywbX8xtH9Ktf1ic83oEiR5Wm3GNcYppTkLdqxt5BomXM17ghhacUNnAAvSHkvDyq",
  "key21": "2EJP6d5KSbzHvo1xh3kXeYBmKdaX2ZuvwdUAG6twMBFtRvFmMjbLDbwvX4v4weBZWvYcx6EAWPRAw5AnsWNgyKuU",
  "key22": "4W35mgJABRCVDuwQGC9aj5tr46pqDibgLUZzcpHyG4Co1FDjHBYj29ecchoAivp5xKjmQARh97NpfN7wd1nRsNvF",
  "key23": "5c3YV1KrRvH1X5S7hmvqKEvLvLLZWUpJEnvdsBUtFDUWwR8tzVr9DKShWvKDQGZLev8tkU8zXfqrNRZtLErNkgxA",
  "key24": "3LMjNHCtq6u1nVAAY3g6NzPM1mnJ1ugHxv22PR19WuPUxgMDEHtxkerfY7mUrpAAL8thj57iDLvv4D1s8MQWD4jU",
  "key25": "46u5k2L9xvX94GemQTHskuU5PDVzfQbydG4f4kgxysucWksUwGz87tzP7yv9tXQjRrCEEYqKt5P4ZheAPstPu37Z",
  "key26": "3xuLW3b2U8ekz4vNt9XCxXMbGuabsHFDDJPAFNuRzj2WGh3ncjXSjUYYK3W8oSvRJv8uKurqtR8EaTc6JdhFerFE",
  "key27": "hPLapjNrgPWYndm3oA3dTjmew2kREGwAW8KghAfBJmSAFWinr8YRFJ8s4kc7SFquAiRHCmQ6Po1zvJLz6jMb6rV",
  "key28": "5CMKCP5ZnJkU3bkNhwebLcyPjiuUhaifUf7pFJPSD7YP5sGjyGkVDXvk7GYHvrSJKTFX2HTXCXG8qcj4p8MJ9Bq5",
  "key29": "44kwi8QAhqpfDaXMpnzBiPSv882jiLfAedm1RLmSTFtQCR4utTUQiuGKaL3R9jwMCjQut6AfALhj8PtLLZGcWmrQ",
  "key30": "2S7YdUtdK9edsnBbiiyxGNfrUgiXAxddHkuBFYFThKfsF7ED2radYgXngDLkSkEM1PgnUN5eU6kUtLtRMWVe3pJr",
  "key31": "5wJGWiueaeM4p1SzaRhqgDdpCcaASWYh7m7cUFAtsnFuiEZhb1cZoSD815Zaehbxq8aWbm8U7DSLiSDrSe2hRWo4",
  "key32": "s6F2Qzgrw37ejrjMWR2XkP1iS2HovSoPFW35bizZDgLPS8D2HVqkYntbcF3XyoCpUzzqpNw5pzkxd15m8y9214W",
  "key33": "3KQDQ4h4by5w4UA9kDQdbTZTFpjUaiRvWc6GNuuXVrm9n2nUdUFzC5b4dS1ZhpeLx4QQPhTtVgAmmuT4azc4dvRW"
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
