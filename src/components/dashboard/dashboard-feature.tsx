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
    "5ZVBEQQrBF8X43GTkCDDa3NEz6kifGsoVG2pzEGwPUDwuR2M1i9E4wLqVCY51gvSM6xfHPeAEn13AHs6gG7ENsze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jWGnjRnmyt5wesFmujN2h9EZgpiwEKEGM4RXuWEDrdPrcFRqauHvQTTERD1DWag1evqMZt8KC1kkdCQ4GcEUoJS",
  "key1": "5DgryhvFgPi8FniN9sJyrrDvxVqhrvQdVvudJXiDsiH2m7PbzJBdffrCpUHJswQN2CZktxBDFc1u32cujq6NdDZc",
  "key2": "3rpv83vC5PiLs8GSjnpSvbXzt71NjrccNNaYuDM9ysHWAaCYEvmhpsQycsiVrM8WVLwUtd4yQUk6TBMArmXRZUVA",
  "key3": "k7VqZuFvwhD3iXyMqWy71TaXsiPSxorsaen4SNAXSZG41HwJPbdEcRuqZ7uz3VP3p9viow9ZimhStEo2A7xkpD4",
  "key4": "3134cLkx8W4dDTHe13UtvUHCUHRtcpKeQKMBr8G99Sic5i9d1RZbbzrnhU6bEVk8txbFQtjZtAUPe5VLGK4wPsnf",
  "key5": "35vWa1M8JUg53sxSaTu7uRuiT455bBqBgB5CqENMFTbNnCbmBFntEvHWXCVNhEhCNP1DhkmwMDEdM2sY4jnHMRuT",
  "key6": "45zTAPmqNP7CoE8vPSUzw8H9JgMzjJKpbVesBnKsqGu9rnuwDEYhiryGVHfoSTKnPtAxAsvtnTj3LCZJHzwtcyWS",
  "key7": "2xL21UbUpGfqLkChfBP52fFQ3c5QnqCxWBosHZbpAWvvwX9xJDnrBMxaC7YDgybJXJ6S1zaYJYVCpCPo6Fw1mN8",
  "key8": "3CFukWzMbVLxRDfANWeW43uAcesARrJNaKBNfB7f5utc2DBfsLkTM6MaAnjJgJiK2wgyLfAxhAh7i8yyuoX7kk4d",
  "key9": "4E7GFWWyfWqe6WKfDPqTNKzTs79m9esh3UPYs87ZtZKKT1DNWxyQHCwugP8DnVQNzJCz7zEbQ9a16GSJmVJ4xynY",
  "key10": "tn3ayysGywLxDBnBKUxQoqWWN1aYog1pKZiPLuFLXGq7cuihWqCvuFmom3xjJkBirFNaNZdUYvuZzAkR6mBiAav",
  "key11": "61tqbKWcncwzh7kTHmgfJLyQJEwsybDdDpvpNrwkq7PQtKD2rYMFG3s1Htuu4ZfpAgHsbAqudnK3TPoLCFoNBYvm",
  "key12": "3Mdo72uJdNnuSTZTtGfqtTpxJz1cu1arUxYkLC5pF5QQkYYxuiRMDG43ozUcRutynG4kggxVmH26BPNRRJz8ANfK",
  "key13": "5kVrovWeswPSHg9u3jMXL3Rtjd8xDpFVGaU5Sa9jx59goNTqs46a6neYuLKScC5NLuwLEyrahJvgn1bpkB8b1xcW",
  "key14": "2pbEWpJGbWTpAdbJHeyd9tFrreXQpHJbGCm6uwExxJiS1mDvofwAfJRU5AyQhXC3iULtFeYfysWXBpiZ12Z1pqrm",
  "key15": "4GuMaj57J8pK1FPBcCBmckdCisWMJAbLhaLYYMpw16E2aS1LjxupamV2c8gkfxpkR8Sx2UTQ1RUcyFphV6wGuTUq",
  "key16": "2iLKa3K9wDko5u219QGCbiGBfLjdn3CqzxoYSBdvnpUMEHL39XjjWebJREMgDS9Nv3MXj1tbE1kC8ZvEoq43z15j",
  "key17": "kKnCrY5q3YExsc3eyKQcyNE6eJwrTo2bB395s3RC65vDn4BjEDD9eyM7PxD8u8gJ6VAhzxUr8kCxY9vWWNqE1op",
  "key18": "2tpxzNosYzz3ibsAMMV8ks6HRtgxJZKxEzsHK4CtKHEfKQ9ieyVkktcvNFMJtBrVfwgHt6Xtpw9MR1zhiwsQFWEH",
  "key19": "4WG5TX2K825gDRxc9ctRZYyfejx3c8mE6TjLpBSqGqK7RqQPPdSoU7edZ6gKStzSoXkV8gM5UkGC1CMDne2V3Dq7",
  "key20": "5R4tsBejFbvgwS4F6ZATim6osdShCzgymgmViXgn8utUpsUErt3enon9shxMJDYP9kRWLUK673LET9BoXiKxQDB7",
  "key21": "3j8hQ4DnPLtMorKWwXHW2eARTP4zQRUrez8vMPyM5MAqmayuw4p5pCuGmyF9nsc1KebRJ4GiLwTfSjwwpADtWvaL",
  "key22": "67YB5jvYWz3Qpozc28dc4mDTyjAD2Y9Tcz86yxPN5hoEJmziys379JRg64trZukTmUy76Dcfic96PnLyEz1eczzv",
  "key23": "2HHLviWk72MYTgaDXMsoUAtB3uGgbqnPcPY5dJVnU2ph3ixd7dxnk9ZfF7vHJGLU757HdKC7Q3cob2dpKek9VecA",
  "key24": "4joxh4nTYRPQb9jhVRjY7J5s4rYudJRffG5mbiusK84jkg5U8x5vMv9t8PJJXfQ5gyingxqtkvTXnZsAzo2HBRK4",
  "key25": "49XS1Ao4J74bcmT9piTwr1DFs6T5ToaAB8jnT3PvbZwwWWRB2aNidiM5c5kUy478SW3hL6obmJtAFzebxtFgesqC",
  "key26": "sD7j3RzeCZa4DMbRpCM4Xuhjej86hcyABmzLQZBz7WUUQ4QNvgkDHQXma2TtmvAh4vh1RzuyPr5qbu2PhBMyPz1",
  "key27": "36X8MeqP7Y4Vsg8dTdm9bWBECWrgnGiWVDJiMiLxoHH5nabBYX5BjXwDmaNVYfMm9HerUbHaznWgfNXnuHHy268c",
  "key28": "2ykmD26BNaXSdmr7VS4ZMcL26s7TbUcdMNSqAW7mrNzCVVMw3eBK5RZePJQ4LdDYen6hgbiCRyfBYXKkthQdjyxX",
  "key29": "2aPjVk1MEUzSE3yiULJossdMbQqTz7ub1hAqCbHBy5MKqzZtrX4VLEecKXCSax6bjjqzptR1erM1h9GKLwmKDZRb",
  "key30": "4QQcXyZUDfv6ru8ppUsaeek13bFBHY2zQRw6gCXAjP1cikhQWepuFrodULkfTSByq3VRtArU3XS2rRW18k8JjMD",
  "key31": "4bYsd8mmmhyT3XK1ZrMwZWGGyeWyh4QtSmAtzsM9shdJTi9W3Lue9AB3aX5gJEKAPYD1Q1kfsXk4ZfXSDFMZTw1t",
  "key32": "rcjQHoRtH87WvxwCStV6w4RbDE3xCtUdLTvCWBYLPhfq9VrE4YNnG7TXk6QmtD8pyBBes7aaN8omB5UoMCjHuUV",
  "key33": "3yzEF83Dk2XF8XKbc8WRK4GqjtZS7rdHQRREWAveZVWpe2ceNqpL3mQpxgoz2xJkARt4o71yVy3T1qN7na1ZvqMd",
  "key34": "CA1s643wVyGi9QrUxVpk5GF23ZVYiBN6iVoz2M2vPfhgrTYWwn2Wje1ybi6VN7ie4EbaBjoBtnQMNyPA9JYstNq"
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
