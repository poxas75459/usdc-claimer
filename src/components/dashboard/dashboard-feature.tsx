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
    "521BYei41uPRwrchcsQRsCj9VRxGF57vTXiXuBzKzwERykxUWDRwEuiDheUeBppGzTJJicdZTmYbGvQ3N6zf8DXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mFTLspYGz9feiy31eeGa9nFjspirUbyzdLXoqrhveLetYX81QqQvZCyZes7ips5B2duZDmF9wgT29jwd4EFuZMQ",
  "key1": "3UvXsZNagR1Y43qDwE3DzYLfFubjXR2tURKjCv2QujG57ovGg1A4cAk8SviqTE52vkhU8wJHpmKTNVAAi6eMeMCe",
  "key2": "2ffFGbUH5jQTCHuVKWZXL2u6mCskdx5xiHWRyC7G7JGGem4h3EX8PfYYaSFBcuFvQoyfm1HeMc5yYN5unLY6oCaD",
  "key3": "56pLqP7QnjEEF45Zsotuxh5ffnynwGjZxv55fatShPR6jv6paM1s9HW1bmH4yA9hmDxnF5pxfC2LnGWVX3ZDh5fn",
  "key4": "GfqZwT6Dpj7AJsQJCsHsYHd23yszMLai3HJjAhpbSYuHPXKQLBdoNRgVDwXtMhkbG6R55DqEzCgD8Rkp2cUq5u1",
  "key5": "9ofSLn8RHQW6SjGmjbRCCQHcpddxpjNpDx1xBPWLrvSEa7AcXhsX8McfFSH6onwHDQeUbpNSAiJSwi5UWkwTnra",
  "key6": "V4VtGVdtWy5L7hfsE1mcuTE7Ba8VoJUCMPJURzyvA8hNfrtYd321m2agGkpxj1o79mp65ttMK8mdJ7xQJTiuvWh",
  "key7": "2XjxXSUfX9y5MkGoBRoyDXxVYZ1E6yPuM3FqLQVW4zCqYBEsGEFmEJBEvhFW4VGCtKs7vxGGBTHu7b6QGhfYquig",
  "key8": "5E3N92U195mb5q6shurkXBdxhzB4ktgc3fJBp4BYrjfisHf9MZpLbhXojR58uMiQUiEQPeSUedJNgDqMY6neRreG",
  "key9": "5HdJFcnewYy6z2dekP5SqVqXQPsAg5T7gF3t4jQrFCeAy3rdvNrVp348ibCkB4QJRr3nTi12zuoUgfsHfcarXJKZ",
  "key10": "i14nVgafXdS722zj69mL5bPvr6J56o2AGc6kVMWB6TZZ14yX5M1ihqWUkbEWRsynqGCB9zB8rKv6irWbVPLurDm",
  "key11": "4zS8LVrvn1DAoy5d7YHgpk3rod5NnoDXSXESQWPncDpnqEhsXnaVc1UTdU28pzKoSXWBSTbPww8VeptUxikHPd5s",
  "key12": "5y1iaP3y1NtGUMF6syP24cRE7k8aV4smKtw2Z7y7jcbtz7nuBKbii9fS3MCmxbVdH7RAHsEwPksM4JLGvcYLQvob",
  "key13": "5VFh9MPC8VAh1mBcjrdqHwuGkJKhj1fjCWAd6Twv85Fh6tZYG5zTxvHh7zaGevy6KUNFXTFSSwkcv6fGEtbUdfH5",
  "key14": "5qyoWPJnuoyd7T2JuG6TmSR9CwT7vRHU53QEhLrxxTXr1iXkeSFKYc8GAATydXiacMm5gBxdxA1tggSYDuqiarVf",
  "key15": "4EzDxo3Zh8B4qqw7cvyfn8skBXi5re32WiX9Rsp1eyyVWP6XCLfVpG5TWRPYyYgwphjcErxBuZJY5envKHSW7nwA",
  "key16": "5ynaLfLDukrJZRe4mRC2fqEYhWUVEHhaSiDBtp5sudxSVEuCoah5jrwvoDEnCwthpubNf1GxpZL6ARjz83CE6Yb3",
  "key17": "3gGwcTAeVjaiVe6DKJdEUqUmvQ5yS5REtnM9K5U1MrRjarimUeh7v12KoG6EJQKEi4oGgryEP1ZJLsnAgRiy9san",
  "key18": "UCHVv53AAQRRBtXJegYuSfjexCo3u1irp3pz9QzKw4oz6tKRhvQtreMS5za5ZjMZUi8ycnriJ6BBeu4mtZoZQdX",
  "key19": "4VixBtasti6ELPFEhdfGCCnSd36qnpAZiEYkBLMrijuoQMjaFZHYohnmmbbsgH8NJtbfwtvXBNptpr4EyaHVafjf",
  "key20": "2coHJEETi4vaiUVz9F9tBBjXx6qwQNa9VBdB11GRC9aUBz2kLY8X6D6Xfvm2Re2Lhygb81jtimp1b7CboGy5spzs",
  "key21": "2Go1pvLpCxazXEcBYpkFgdPYutvPL9xHmikDvgHbNnumWkDSMWviQwk7SsDDXYHb5tW5pXdZ3cGpbpkFJBLbqWbF",
  "key22": "34a2Uu8ZXSKVYW4cf2DAUoPDvvcriksfHQGWc1wytVBYWLwiRc24fnLajX8HSrFzoQsi7fboJXggdxwwV2rajZAq",
  "key23": "ZCMGmP8wUMcKvtMGaF9MLXBxzdJecgHwbh89Y5MdCJD1NrSi5JVpiXj5CnpgRKq7yPTXW2pHehXzX6jM53HA3ny",
  "key24": "4MhWs7sAhNgCoFqV7mKaKwE9EiRgfNfgdQag7wkAoJ7H8yW1GTH62ggH54e9Ug5NZNFmgTsDVtSnXHa8GkRcaTDR",
  "key25": "b4JnN6RuQycsQH2QjQ2c6FR2Rr9AookU1FzF2pEsrNRAyg5BUkPedsN2HzCNduFTWb6inu8uXtAjBueQNaFtE4A",
  "key26": "4RWicdE6C9G8W8XzPwQRpDbg48qerv9ZJXAZ6fwJPmzvsMPUrW2dYMA8zwrHYmGq6M2UwysPjJBns36c32APmDoq",
  "key27": "9cZVqSZ7dTwjBVMvWPJzKBmSuXGqsvsdtPLYRMhn2yuhJZoHckqwa2ndPu9ubmrxpGJT13mkhvkmtMbcMU1Dg3H",
  "key28": "Fkp6MXh5FRHHWJSQA2phHoXs9t7f1hWFWnBiuZnsmLG59UUJas8wNdQJKG3NPbv9seSXM8JH1RPBmY4GzdPeU8w",
  "key29": "4sMoaGpdJK9JfJjm5XGQpTwPP37qdErwxV4BCsBiHkrfBn5kTsoev62tMfjxh3cJztH79koXqvsefgcbm7N1pjrN"
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
