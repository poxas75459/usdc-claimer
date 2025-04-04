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
    "3ZcUKehhDDZytwygAwYLUGhHc4pDacHqE89CPptCK1ar4nKz5UPnJSFmgKRALTo84QmJy4cKy3QdEa8YLkPuq6Wt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a9wwsockJDkv6P5CHcgz8E3rWxZaVmqgaHYis1ftwZnnxJxSLMnxYtzBnDBzsR7jUZ14nb9fL7i5Dq3VscboNYi",
  "key1": "5MwaHjcKzunsLhvzJVHBczcjH1kdQ5VaQHfk2ob1RwdAXRwBbSzgDs3zSybZwJfa8jWXMWKqvxrJgb4hkPd94aJa",
  "key2": "wuPxXcTjtXvUupDnARKBaVpwFBJU11XpdZCN237hg7x5DYKKrT5vKegLy2n5hYc2o12oAXJYYrNCCrJV76rrZi8",
  "key3": "2JHYh6Qfx76YcPk65mVkLYxC9U57mLD4TpjcvRzxERbvo6xB7Fi923E17j36FNwAGukbwfvrqEzXfsSDh47YALp5",
  "key4": "D1yuCBrQDTLVCv1HDHGNjVQQtscctFjfGfUVxLhYBnYZPZQq9T4dMcs9xETWe8zcDt6VyxzfZMBevWdZU1JjHiW",
  "key5": "2oshroM1isuVEoDViAmR5pm7bEDotfXLrZp5iq9V2gsHiwRxwiR2MjjX4BN3mmajrFYWZ5rj1UYVCQ8x87x3Nzjh",
  "key6": "2Wd8vW8Sji52GntJd3VXXkhnRhPv22yvKk73Nh7fVxey8qFwZ2CNsLbyXBXpUWDGBradDJgRVNtVLvkFGrvfEhQF",
  "key7": "Y3fwYEpZozBXx9ZcytVn2DYEYaY6Lp3hpZH4JvvEv2brFoUQKGAxEjPoArGChBqnAosc1eoad6NqvYQo6iJ9Cv7",
  "key8": "RL6bKh6iu6X5NaY9tbeNQ6Ro3cymLRpfPXcdygqgh6DasTKApFU6bpdrrhRiZwr6KRajzrg19rkfmmz8YtjbPUx",
  "key9": "5NwK8VU9ifg2H7i1G8XhZ8Vs2yPnM9T6sWGhs2q33GEvr4wJr8uHg5zWSzuUeQ8SSFZRbMnSoEs7cGptiWyP2ZCN",
  "key10": "Hqra1x8qjK8vqR1Z5359KUgoiBb2APK6MHnsqyaoLfwYatLXRrnM2H1C4LwEou4r7AEm7igkCjyL5CwGDzNwxoj",
  "key11": "dDqDDKiVCJn711RDTDwYx7Hs2HkeXpT5rqJjXAUK71bmtcAUL7SvQ4uyYPh1AdfP46DpSiTqBXvcz2aXuuKWa8G",
  "key12": "cFm9bVHdsLyPWVN8Uv5BFqdup5oog32nGUsstUfFFXjMckhbh86HDfPWe9wtVxvyGm73j6Nb6DxYar1tagvU5xL",
  "key13": "2bHn61YXHfb2pL6PijYawyoGYM11Nw8nZkBScsSWDqDcdNAtyxf4ETGanxGTToekcvTtMNsbWwGuDJP2C95m6VuG",
  "key14": "5DEuti1uhqaC4JiUMJB7Tctu1fj8t2sAoupYM2R92UB7pcbySCm1foPn4at8acMJ8fSuB7akSpQKKoeXuV3ctooD",
  "key15": "5LezBy4UU2oRBfuWrCLZtoC9GxB96pe1bUCyEfPUjKkCQogW3v4pZkfdHDvFYBKXHvRvYiTuK6N2idJizHFbbJGD",
  "key16": "5C9iTPXSQrLGV5fJSTN7qtwDrSH5gVy8NEFL7jzJBX8S24EbPjEaARxpTxRJu5sA4WjSFBdwnfiDA9u3MzeAKtiA",
  "key17": "4h4JDUqvipceJmRL2fd5Jf7zMAnyyorX1mKybC5oejCYRQYY7kZkp4akAheeM2W2TAE1zaTR2h76wCbzB6Yf74JZ",
  "key18": "2aZverigckaKFfc3iH3sZLit4nQbVxgdcK4dfLf7mnUHZjNzfdTGYcBusKBU44A2paaJUAM5KCdRwHC72yyW51fX",
  "key19": "49FFRcDQPstgv6Ufz1Tpi49KMQV88fmjmGUNde4KLSomz4T5QchATRqMMzTC6AbSbJLEPFgAf6FAMqoSSZsJGvbQ",
  "key20": "2MoMZWhLreVaKY9bB3fCcjW5ZBcShMYWwsQN7r2xWjm8Cww3wWgGhTYsmiQTkoshJuHDLAjQAoMnMBEM6nCT9gdX",
  "key21": "38etojQeLZY43wyfQmTRg686cMqRSLhn8x9AF7Sz1Lv1UiGykfttX2AWwxXzbmSbhRAg1Ah6p8Z6YHBLso5o8qKn",
  "key22": "2sisAhpwdXZoyhfu4x56gWMKoZMkg4CASFktKVYbdeEps8neQDJfEVn3eVgA3tuwKX5vrh9zA33A1Z7kKtGbkBv4",
  "key23": "57rafQFL5nAB46y3RMhpiwWSFLj7hxwjoTAoSv9Sa2wLJPGa3F74z3GA98BTp6MEuyrYd1ZKwBJDcF1itvUeJV83",
  "key24": "4UU1cLynW1NsdD8CVa9JXFtBRWDhUV9JeEkd8jYNGkrt1ipriuRF9XEDs5J6aiybcz1HPj1nP8GvRy7Tobxe7rTj",
  "key25": "2tZG6X78gzcZQJJ1DXLpGcYBjWN16xvQkji3ezvcMyKBawSPpUQSaiyJKbuEDJbyAYSd3uAwETGns1nk9gbw5p1b",
  "key26": "4Vq9EkvmfF8NyJG2GZ6xyuZM6FfcUZsJdHGbw5Ey8i5id3BdhXQsyU288KsSAN1RfRtVTZ9BxpwycpRVf2Cisuwi",
  "key27": "49mWsw75f7gw8dvCHpzyCak7ACjfpBdDPm1M9arFVhHAxUMVUf62bFwo9gyPXU4opCR99cXQEVUWNSjiwVkBmtt7",
  "key28": "eGmXxWgYK2XGUz6uaGrqKbR7FJFwrsGVbD9sH337PnofkhpV4ML15KYT6UQ2tYLrnH77QNvhL8Md2AMP14np3VN",
  "key29": "5Pxof6UADqMzqfsHVykeVCxQ1L56iukuJpUxf9okgGFVMjvRC8KbWNmwgitM3ped7vc7XyBtxRUCyiL54DbR3WR3",
  "key30": "3pMdNvRMLpnDRFkpfbt4pvH7kYfGWdCYjip2uLxrkkrUojYTb9pjvUsTBH1QCjsd6F4k922qN74WaejFwjKnf34d",
  "key31": "uLeos376ritUaTts9jWUeP4bQEZdSYBcfwYyUDmJfG7HF4J5y9SzcfYhwVewjzp2Hun2xpeM22K9NV5otDnSigc",
  "key32": "3g1S3CzkufAnM7YFAXeHJNSHjKKxwkTeiuz8CTDDgkH3QNYk4gx5eDPv5p8z9MJJAz7TCyhwYBf3zdN96NBg3UyC"
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
