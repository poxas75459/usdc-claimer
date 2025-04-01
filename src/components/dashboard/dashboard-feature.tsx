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
    "4W7z2mkbNRskAh2ZWxPwVTqtMyiQa6fRZypKWdYrnfQpaBnYm9wtHMwvHbshjiDETKZGe7p5gEquVaTQisKaKVfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KxiKuXzRYCoo2Vv59oADuQhZRAW1dsJ4uujoNfCNN9VtXwZcSc7wi9KnRT3RaxpYQUDWJ6C3RJT73uU92eKkn9L",
  "key1": "4JURJkSDp5A8oBR5fGZjgCAP8HdL94BMhenKixCzfUiEv7wCPaggUzb2JrvqEwr9ViFgkATjRwNPihbxQxhh4BEs",
  "key2": "kjCCBkBNgSiwZCUYJUkUxrY58Sn3JgQic5pmzArR1PJ85fF3xSvof5ro5pkhxc3ZwtE2FqAGdjRuKEnY6xGbx9s",
  "key3": "4fSFSw2FMUDr95zJFdAoETsfv9SNX4BJUkU61ym9EehmF1da6TCuGtEFP8wLBP7EUUCX2hLuoD6voLsEf5NZmmep",
  "key4": "5iFiEVyYvZKCeQns2pHezSjtwJGDSE3LZ3BYXLgEEp4HwsaPUHzbokCzQ69u1Tvat2JWx7HWHntCSZUNvMzkvzWW",
  "key5": "KMA9SFxwwqaBTzFBYXyqfmEnDAtnXdaiiSMGUEjqdXiZDwGRjUjMGt3xWtEVbz6ZSYdM7wERoedQqQamw9BaU9y",
  "key6": "5UUCp6nvb6NvJSmA36b7CfsXjFht2NW34B9vJAJhG5yo3JgJz9nhimwYQ6jW67nr59wFmjUDcxdsZsMRUjXsxLyR",
  "key7": "5fYGXVPyc4Fyu5NUNNAo1JezGtxDRBrjYuZ5TtQeBM37qKrtSbPtURX6E2aSZNHrkZ2bRiyjCa1gtBaHgWDLfTyV",
  "key8": "AbWoDkoWpbGqhMt5fXAxgeFgdubGXufqsSLZ2DExfQ3mpPkWBtFWzosoVdTDSYrd2AhBBARC8GvJJMukdzWVknD",
  "key9": "5Sr5dBZA4L9hFRbD6FkSpbdXznA3QkGYW7esXwnbvR818s4en2pXBT92pWPiiGsYmGhHyYYhayNTRR7sxUrvzcpb",
  "key10": "E41KwB2nufxMd76itFBEXc8M8QfAL1k4cKzxi3cnXAKhsNSnsPi1hiWNEMqggKKS16j8gb1QBdj8LFSAn6ZJhDW",
  "key11": "5pKVWZU7fxh2iH8gYeg2uC96NkY1ibfy21ULeUQ4sDYp34nxU6bC5TJwLpeTA7Ky456nRPzyY2SNZTNemyDZEkxv",
  "key12": "36EkcBrWhtAeuWcrsk6A3oK5WaiLB89WGEg3j6qB7hQFkhhkaGz3EsonATGHB51LpxSUpCPJU5xmYrAy4NLbNaQ1",
  "key13": "3UX9dRioRB2kVGSCJUtA4Ptypdd4gjSY9JpA71kAvvkzMPefNFiZfytCAhK7qUXaGdEearUrznADXt84Kh2KmDCc",
  "key14": "XcVmnUdNMEcqmmtfGoVJEB7gbxST58yYzFur3y8cxXkG3XReXwivVcmkyRSRgYb4ac7vhkax6mJG4x9V8Q4XPRt",
  "key15": "2LhPjgn5zLeGmM5ZNjdb6gqDfr2Wo4rF7Ss8Kc68ZdyAHqRrpmxHjefXEKopekT962iaw1LaPaA9YFWAL8MGPPph",
  "key16": "BWWCbpgQesiA1LDRmWyr6Q4RJn1aqJZCawCgfkay2qH5S3gHRK1KGjrd43mWdD2uHQDHpegTaKQWFwYNxv7QTXv",
  "key17": "3TWgoWXUfUkRPTX58aTsS1JpsVEhu6cHTxTi7b1JrgX6yqcqAuyGXh6EvC3ZbdWoTtGPpkNrigUS7gZKRY6hY754",
  "key18": "5Y5K8FEXfXiEUMUNUjkAP3hGfPxaq23rLhuWhfRZ6nM3EhKabpnhq49MTeNkhtyd9jG9aLDrgE7gAZ7rNPqybiJ8",
  "key19": "3uaFNLFWsjy2jE4tzPPhpPU7JzrLM2ZQb8MkkBpwBKxni1CV7NaWSxdTHi5xWNVuLycar5etXv4Q6PVPT4CQJdxT",
  "key20": "5yaAvyts4FAuoswz1V4v4dJbeNzLHT6kM11nQRneju7aoUvamPzX2nFhQZFQHH1WP2BgR7G1QT7qiP4FrNf7fwbm",
  "key21": "2h1QcSREWyMgg3RpvGfVWPrEF4tCDzcdUabncGDRP3dAHvQt1DMTyPCuJD8yowb1qY3XG5HDyUo8w2rgg5B5qaJ6",
  "key22": "4APjP4YMLzGKk9kU74h75wKAdTXC5tABdQRk3uZoysXsUHk9f4zXmskhaBJsJWcosaUe5ckrQSnHQrJ9rdcq6cv8",
  "key23": "KUZsZKUREogyJa2KjPwdCRbJY9qWyZ68sThyUqi7jK2UVp8wP7e1mxDtA38qEsb3ZbVFNSJ6UVRd8pMs5dNuePH",
  "key24": "5q53AbnpNy4DsNRmussDpeK4jcr7pYriBqxXzCGo9KGiUHtB6EYZhkg4TnjmZ9LUULzZbtKbugCq45yvAJzzauGP",
  "key25": "3HdSSvktcHpJXJ65HmxwN7np4uiT8hAmUMSG5N9w4uV1msaC6FeGHfLjNfDnLZ2zf7srydSjPfTBvzYJc5QQsZsA",
  "key26": "LZxBK9CtAMiMvnPLBKxsBkiPQ78Ukddy2w3eXesD8zFMjxSQ15hMNWAeMK2To34br9my7TkGgaNYnmTyVG89yBr",
  "key27": "25aYkf9eamTS4xUcrpkLAAdUwQj4Ho4mMB5zQn1nfA8X4VzR3StbyzKavBTeStK6dG6Gb37fm3QG7tSV1Bv3d81n",
  "key28": "URAqEnikoys6fpeqCnH7zjA4QFxJ5dFdTHJxLoNn9uFcS7xbinaY1WJBDG765fsk11FLgLNziDPDYfoqHxyqxua",
  "key29": "46XYaHkV6a96YirEPX7P2tTGHcpbaDH4WTT1WX7WMYGLmq8rK6bVYaeFYZq1GxXr6JY8PegjaWbX6QtVZ4Ya8FHd",
  "key30": "25YbxVjT4thWmtsU54HLS67YQfKk4RL6znkmNBjCo9WmS8So36jcgFHjeNFdSpZvLddhRawLLD8DmWHprPPaUmEF",
  "key31": "4FJzDSuU4L2FxHARK2QZb3QQ4UqLywkMdVFHuULaVvHa7ZAHubCk8ZyiBf6QZTSNgjth6rcgXYxkH6MJBq9xoa28",
  "key32": "3LEJtMpN1FWSXY93bvhXjsDAw2miMPE4vDUpbo72F3XDmwKY9LSMg4XCAkbtLvLTN5LmkzQwtYvgkRabbLiZT9Xs",
  "key33": "4ncf2zJjSK4BJxGJzDSvTh8EAu8UJ2JtQ4vaEvoxiiKr41JshX6Fw6bASawn5wNRx4h7wXUoqbthHaT85gcKyg66",
  "key34": "3fkNvdfutTmqE5EZdrp2o5e4HseVBvuNXehN5R5rBder9KHnAAC6gzVJFqfnxJB1MFgtimeAWsrHRpRX14No7bov",
  "key35": "3anPuZgixb3HGvs4X1Qt3upFJzo8S4cpUT6ikUoPNFHh7FZWanvVabWMrfiCGJMEZiND1hYgmGUy7y56rgVnTz45",
  "key36": "3rVgKfQ4Pi4aaNwvx1AcsUUBc4WVUpcTefHvi2MYX34KAYRmHhicxLisjG7PR2JKW28oqhrRez75fXG3mpdHaGcB",
  "key37": "122i1X4NGu6xWq7mUjDSAUhTxEehjudstJBuFXLxQ7vt8Qw189ti2LNsTvxY2a8SLK4nFTBZPDZzFeaFwaW5CBUc",
  "key38": "4zUdjZxtqA9HNQjycCcgToazSEhimjwNi8M4JCxMQWi2oPgMe2DxRLnUK11hQhSEYgVTm4kZYMHjss1j4gXFWjek",
  "key39": "5prn1T2yvX9bvvXiDHqFS5hewCTqbqU1Mm2HwSgzzSTMRAnej7356sAwhMtesC2zAF3KFU4W7eNzKvtUnb94zpAB"
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
