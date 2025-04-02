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
    "4ZjHESyEmBqNaoTkaY1rUXR68YHVinVEeAZkPmfu2XhDPMsvhQPtRs94h94gY4TjeSd7oWu77jeFLa2aN7tuc8JF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D3Ajck14RW9nME8wqQSrTKdsxUw74UtDXQ14mPpovj288bZjbQGxXVj6rSAQEJH3bLmupeoN5Tx8bVNP3Qgr6U2",
  "key1": "5JbVpRL41dhvUdMXb7P1hydGwaeb5DpogoS3Az69msUX8kcF2nazC3QmUzyy6TXrGqUqb2izAwfxxB1FMNukdzsf",
  "key2": "2HG8qZrw6sa1svNRrmNCHUVvMQohxYcBJjxaRNzgS3Z6pipYgcvbYj76cdk3Uq8aj6RWUKDXB84YQEfWRSn8Bedf",
  "key3": "4gQ11UaBV9kwM1jPuDGQfyiWjzHX7buVFnZGAskRhh93bFMyLNeyxUZ2ZSaCGDfSVZaqdwX5W7rqoaJHWrKhbf44",
  "key4": "5fZChBA3k3ygq5VzWmfoKhE6tzuSR9V5woh5z8gCak3QCUwyDjsG12M4CpiZUQrB13Yxj7rGVxWAMjV97pqxvWga",
  "key5": "3aogWZK6zoSSW8TMsSow7hUHsxsAM2JcaGkhzrb5i1xasVyBNmUKci2cLqoTPCg8qntoPaJvYRfiw2SYj4nepRJE",
  "key6": "4sNmVUoQsh67J6QNgUGd9vuZJeLbd1fcx1otHg6nrG6tBcbr51uMLmqWQJ51kACPmRpr676CqBgUCQpd73XrMawJ",
  "key7": "5YyKs8hMdbmda1EfVLpJBUz4z1idKnmc8h8RFEoV2FE9WvatZ95jYAzySBVCgM3JG79mXDXfPnYh3LVqcVLUG81L",
  "key8": "3ga2QELWrMfnioaHeomvzwDb7BHEEcajFpX3RqaR4RawixTAjn7exuWJL9zEZzLfLtyYQ27uw48DEawrb7DTepnZ",
  "key9": "nsqrcxWHX98MovWnGS6FrDNNdSHsjytgJ3Z9cv2UipU7QwT5KyHdqXHMwxr6hmYzfpitHRWxN8kAdiY64VTdDwh",
  "key10": "7MwUnfcVJqRioRdkUVStE9ftDeC1rbX775p3bB82uvdEm57sdYTtN1onVeZ3Uyxx2SSfGoGNobisCdpps5KT5uU",
  "key11": "2nBcR3ieqm2PASpJnsarveQioqejEyk8KwGDDfCDWmNHBRk8uBh8U7P4JCUseyX6R4Yu5rUJ678DhBTHe8gbvNkn",
  "key12": "3jaGfsFosqrYtaN8AF6MFdkTMggBTXLHc583zNJgDv9DQhHJQjR8sjgzgxSVP29xyXJrjruJx76XXcgnjBFJgSRq",
  "key13": "3SrhBvTu8srC1mX3NgSXZtJkeVa6NFatQdWUJV9KEgDmyuk1gUwsrybapBktNjFAdXxL53PoxvHPLoHTnTUibRM5",
  "key14": "2JvHYBqDdq3uinv28QQwSoFBWCdcAX4bTCz9Mo2Xe2cYgUTghQEuEvLfhuf593CQUR8o4ZM2m2jPuyAkxmCd7G1K",
  "key15": "5HPn5VP3MaYrpgx278tZfWKoNV8AH8XvTkV6B8CJs7mqRdYDQ6GSQ1jtBzMbxGNWf3XZBrHhn5wPfqLwQbWysPuA",
  "key16": "5muXiT225dzKUo3soi2b3iutHh7PRMS4FmTr9af4eYKA1JU8JmM7ZJ8x9iCDvwiz7DTra16n4eUhiDcfopt3htxc",
  "key17": "5FxurPZ8WFsbd5u9jDxRAmHHTWmarENu3NTM4Dz2Mv62BmTHo28B1qZgc9Ji3DK9UFRQFKwFTZki8SAzrCuktqXE",
  "key18": "35ACWymi8F7beGWad9zeN43MiAi1LYQMdzxixiFJ423pq8p3a2Y6v8kbeRr58tUYb4Nz8Nxp9x3DeXYfvivbnyqu",
  "key19": "2Ytzdyyw9WuftGVb8ZkBN3BWzzZ1uUr29PViANVW8xtVjEFdESLWhJSYMJntSdQWJozE9DmR1Fbg99fGfXaJ8vhx",
  "key20": "2y4iuqY4N5rrowTLH796B52suEX3Nzhq9LCoUnNKEW1BcPZpzKDtJffDXCXhtPKJR4H9xPgWR9VuMt7qgZ3VKHAq",
  "key21": "fahThLXxSTewh44siyiJ6rAWjkvegMCfv2MX4VaYmLhk9rUqDEsmuxNGRtWGtjnatq26U4iu7LgcgLuQBHTmfgf",
  "key22": "468uY84JSFZcHVBxo21GWb7uyAbNDN5JvyXD8Vd7UCuQ4UuikudbZbobKNvmFTKsdbb5FafzVs3SkQPFDjqqCoNy",
  "key23": "4oJXHVEkEGzeH64LbofRB6RuSZfLzT5vUg9XhByrEM7yQpQiUCXSGoTGeBZaECwoAaaXNtqqs8yh1miTTVEj9uBQ",
  "key24": "5vuW9zY88cqncknucK8pi8YExD5gwzV2ZrPdb97VU8jwXdnqL6Sr6SdwsNXoqkSLdPe47XMZNYGMLTxo7A2SkGK6",
  "key25": "2bjgHbWhVW9zxb57bULcj2D6JvRq3R926bnW6ZcKvbce7FDB9tiUQnLCgUx7UjZ9THi1rZ5zEwsTPevmjdTxiqCf",
  "key26": "4Bmbors6FnAN1YNpkosogXxmxJ2ytFStVTGEJGqk4Y7ZtaNb9tTKtdcarGxxSrY2im7tXvhb6m5NeH8F3gB4463Y",
  "key27": "3udsN4aFsJqzqu5hBi976b87psaiKzFEJc712YBDkPDMiDzLzNunme8azkLUXHpzddo5QyEx28otapM9H5FmhqnD",
  "key28": "2Mve2hLRLg4wr4qujQQkgYXnwVeKPK6QNEZRajHQH4JCrAMSVGbbQiNfuVuSwJcHLPxdjn44FJcJF1G917fGcFvg",
  "key29": "9wkBpYUm4SFHYaaMjPzJFQhcNYxUJomUMErxMtVn9fTxFcPHN2Bc4YuXwH7npBsX11TryEFWMJvpjfShCN9ALF5",
  "key30": "5A3pJ7aDSDeK8DQCmvYb4KHv4okALFRo1gfRQaat2G4sD5vVKcWdcfWx5DbV97mgHTKir8CnTSHDUUnM2dZyQj6F",
  "key31": "4ViAvkGjRu5JUXXrebYzCHukmixBJSpXkDVGQiLf98jKtDukBsVe3TY3LK8kMEcm1h5PHUffoP7tL6E56DaBR2gH",
  "key32": "57Fko1yp7dQkyRvCmRG4RSBZHhwtggpaNfgCUq3a3z9P9xcSDCC8WjBRM4reLjStYArm5cSN3rhMwXoxUk9uFfce",
  "key33": "3LzLQ6XJyXpcVpjGDu4LHAPjWSm6T79M18wXjenvWYifehvd8amKpQGBXj2HMNHaiAbB13SK1C4Vb7mUady8NjeM",
  "key34": "GCwTjx56r87TeHDzan5wjmF9CFNqgB7PB98d4YQTGumcu838KVDcMnddaf22AkAXGC7h6JivYXzaZdFCbBZbqSR",
  "key35": "5eyMCacMHiTW7AisTBFzCrshTR6BG4DFowCWqXreoY4nMadoN9ACM2w4Nws3K3gFEKZL5RQpEFErMiDEyadSxXd4",
  "key36": "52rq3hdhVobE4U1gpdBnnTfX5y8D5CXgUzH84oPtXTziLCViF3he49PDKFMQ5B5cHSAuom1KuoZMjsubQkRXQmRU",
  "key37": "v2WBAwCL4KQ8x1jK3LXXLLUJf3SNuB1JTVASZY1ecg5aeao8aLWDEqC39R1UQMkc5SCxa9U5Figt9AahLFgtPHY",
  "key38": "2WoYBc7G2PSU6JfwosTeSNK8zoG7Y8jwJXPL9VcQ4XfhJZSHphmGjtyYQJcJyAwr8vMysHKhRVPCKR5BMN5pB2p9",
  "key39": "3BVAdk4GUgubZHf2yweFpDxiGesZJoEDhnM8AuRHk4YP32CELbFDdphF1Hwwc6MPSjbLgGGm2d1cSnrV8mr1mow8",
  "key40": "2d2WGnThtBLkL25j9AQaoNKH14QjzjkuDWsbV7nij4DGihicQYf3sWcCfS4x76RWwP1AMVLnaoEDecr7hf9UgDv3",
  "key41": "2vaXyijPtS3Q1YF7yHj4LJHmQgeqNVJ5wXBTXq78zXk4z4W6xTHornSyVrEbfq1zGmNNpCMuQ5MKLthGXtxYNYqW",
  "key42": "36pZoPsv1RRkFRnDPde81gZfWoBGz4ozmWKdpscqX6MDDMeWCiZ2Qzw9k9aWVaH28vpL3WYNVU5r582WdNxWFoDA",
  "key43": "cLZGvBHombKxHwz1H7tsy9q6VM4nVPQsfcFTiA4vypMhG9sfN3GGPfSFRRSAxJqPuHtJ7KmQvFC7qLvN35PNmXC"
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
