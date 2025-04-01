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
    "3pXYWQhzXTmD4Cqg9pwymNUVrWbq1AxbHgVSQm1usreH72cLpxNyHi5jiQ3tmPqvvejv1tLXxZEWbTgp5y2KQemt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oViHCfH8Kn2eWcaLvmMALoANoRk63EcYA4tePWWseaaLPumRxgMU7DcSAHU1jorDM6nHQQqth3ABfhCeBvfj8xd",
  "key1": "2K1sv4TnSwLUAg34UWvePxkCsCAGXGi6cabJZ5bMF2PLchvNLtfbERH2vJmLM7zYm6mkF2TToMKc3J2hvCwaNp1j",
  "key2": "5HahtTtMFFZyNpUECbud9uEDC1Jxkfzeqom8MRTPU2wfVapBaiwjcwEmDf7qrmiktXkveHvgHJzLtq2ffuz6zFVt",
  "key3": "4xd9JM7wb79nEamUqJzi5ZXM1vbNrUme9CbSrQrFkzQsDuwHipod4zsXvRhq4d61ACz8BMXvpZtgQc7REr2mvAWq",
  "key4": "4M5DqEbLwXwRdHncYTXrsb7eJz8hh3KjyActf2DyWtseGj4xDuawZnoZgRdQ6STnhKQG7u8u7bqRmu716HqdY8ot",
  "key5": "5atAJePS6jJayLKoRxMQQmax2aZiimpRYaKSZRjxiXY8YdvdgDN4Po4i1yAnJMYkJ81963yhD4XrbAjkQihuSdpG",
  "key6": "5wY5XYgpPxZd2Sm2ATigNfyk1hYhAagQLuiTd2MQDbzhU6a6dYg5mgCJSC7aQNWthfSCv7ha3qUK371LgYCTx7pQ",
  "key7": "3rm2gq2En4xw2c7CsxnyoYxHGWztMizoQtfxpswX97efC2FNmWUzd56fMBQktu2MnWPQUcX6GWEzJpFLmkpUpquX",
  "key8": "5bSKLayocgjK8hcWRBYW471mmRChJhptgn2jE9P2jQiSnT9KDUB8g36MnGNxZGyR5a7ExYHc8JorneRLzZNWpCgv",
  "key9": "4Vwu28nXSeBQscZGXJpP3Ef7Y4jPSH67QQm6wWvu3TePLcwv7D3bZ25FPLCL4FEmDgftKRFeCjxtJGcycCauLtif",
  "key10": "2gBp7f4StwLo3czEtMqzbyhBPC4AQZhpAafRf9U5DiDTghcMcmR9xWdpnurA4LhLyEBZTuj84pDTMVhQU82bYBhD",
  "key11": "LgVyXPrFdCoXUGRE8rA4zSrAc5Td9ww51MK6U2fdiND9fHER6Jswzjy3cDXXA5rsgsmQ7GJjXFSrt4ZK7xtARnP",
  "key12": "4iFPkoxtphnw12tzYMaiFUc7SHYbcbMqrnvDzB8nYtMYd6anMhRTsYmj3VNvL6XALp7gpPUXBgUwepjgTqeS64SG",
  "key13": "3o4JQpX7tp8VKQ6nHqJAcvrRd7KTmdo5szkYg3XMXjxnDEezT9dgnEqb3pbzkwcrJ7Kvk5Symyo69XVqapmMbL1s",
  "key14": "5pkE6WppNuZHxftK9qahWA2u3Ze1jmVeDyRYx5KLp2ahfAh7XXAZpSANbfoLmBRYnjG5xVXm6yLQUQQV5mBc1RNH",
  "key15": "49BWkgfvLm6oyoeQ7FYzT1VwNtjwot6MEvhgrFDTF46FF5N7EojYBFi8UGcTD3zorRtwf9VjhWTPwfYJcNqYV1CV",
  "key16": "2L15bEKfngBmebgWdeaLFY6z8Ufbbd2q6stk81dm7riK3NDtCBf3zkURvayGxx4MAMHpGa4wuPy73TzchwCvRNfX",
  "key17": "466tdYnBw3u4yx7USCBr9gz3YXJYz3i6EFbsd6DAbJ6hWboUrkL5QNPf48363TMKBeT22HpJ156Juiez7cjWMsgK",
  "key18": "F1qdVYjAVcaCm9Ls8q1NempAKMoYscxHN4E9g9jAtNYzocZxuJkPCvLeC24FitZEbVLaq52M5KDNwKAMsW3HCwx",
  "key19": "4oFKuCfxr4mKghiEoYR84gRFxYJqt8qZpdKZKZmKBXsRG7FM425qxB7LCp3S5okLMVCtqePj8TqknM7cCdH6u3Ed",
  "key20": "2D2fuv3EPt8fU7JqBsWtC4Xp8f6ZVn2E63Rym8okA6cTxdhK9xdrRtirVSrkFxugnkDRNfRqbvPzpPPybMVqoJqx",
  "key21": "2vfdVX8p53ohLq8X41oYkZvmcn44BU3uot4MJDAfrbMmAYCAXuQ49GAktWwq8k8URBQdR28aSSKgX15vRC9b6uxS",
  "key22": "31qFdtEUCTbnmnYNNgLm9BkinFA4sd61sDaXkt2ipbAvRTkuxBhr267eAgXT643iQSEa8cCXRs8QgXCem4asjzEW",
  "key23": "34jcjHRqRTULiu4fCp3F8ARQmGoAeJPkzWbKKbXGUNdo1oX8buhmG33iVEM9TPDEU4FBViq5w7dbjz2ZGJi2wkvP",
  "key24": "5jfk3TM7L4JF6L47znKSaSGkxNo76f4HBnrYA6cZvdKdSMfQ61Txqy4WoirXMgb5VYZBLdrLDjpcWAcZF7bo3oCy",
  "key25": "4vj48Jqhvjvx7voNNuWmEcitSAZtK4VaBfA3ER8tdA2VfdWdhd7S3KPMGRAJvrAWpso3NhM4xq1VdpkXxEip6JFx",
  "key26": "3fToeFHDyH5JQWGyibzVe7Kvkrv2wtbpAH1Hfe5JUMTUvfKiMjhmhw1e6bSvVTrzxALiLBFAGu76CNA1AwmN2ETr",
  "key27": "gTzQkX5qP2TxfdnrCc3MtggXiXuz8GF3as7LyHVr9UMWdr6huwsJRKhadjTqz1RJu41zziK6dUXeECrpg5qhXNk",
  "key28": "5nij5hD5LtyMQKGVJKpuwoPoRKFMdxwFSQZp43sZLo7QsibzKuvvUJSpyhaxTvXw7u19z5nAVpn18TKZYJ55PQLC",
  "key29": "4wFUKYdcQ5KmLt1JGJgoGpCPfzaLXQn5mTfzzvUzNyr2G4nGFxt5XnmVvCtQHpuCa1CDzVS61xPFZeLHtv2jGhFw",
  "key30": "4Jhw63Wz8eQBkxoZdX17M5rqN2MUP7oujheqywpx5pX6wGYRvxCg3sJgRhvoWYq8gH2BL4JdMqmwGpVDcDJ9x9mc",
  "key31": "3ZmQnMHs8vRKa4q1urF5LRaKiXbDoXtQT3xogMMJqUqk2tUiEG29uZCsJbRsGEvc6haKt7tqwmEkbzLZperomkGe",
  "key32": "5BhoVG2f9Yy3xNBqTJv7YotAGWCLryzi4qEWirrcapPx7Qhp3n7mGk8V92bmaeWCWXEiRX2GPXodrw4aDnZdLvMx",
  "key33": "2EQyySZGYJa2Rh3Jx3oqfF8rNk2MjzKDChwaGpbZ3iVu5mDycLkwpewkLKoq3kPPpMN77bnpYG5trYFVQH4z1D97",
  "key34": "3h6WvVTsvoKrupkWB49HarCYXH9Ug62uCsfShQGWhABWmM33h6LWCL7kZNzXApM2PCSnTvDtv64FtZiA6bdiF6Yd",
  "key35": "2jwwddsxtanD9p7z6E767R1jXWS4VkX4GWbjtYp5hYfDKPJR7c9SP5ZywSwakbGat7YqZrxE7vTrVH9GmQeJQXrL",
  "key36": "22odpMkp27WqTztfbF6VvJH2cZUkWUmXD88fkXHyMQfBxsJUL3nH4rwJSapjoXmfvcJdJk4uXkkPCUNDYotmG4GZ",
  "key37": "2eZ9inPAFc2Aqk2GRaB8ghT3oquQRQQCDHEASYJVxRkqj9re7VFuPKu99sqJmzBaBnkM8KdE6iTKAqm1GpM6dgQW",
  "key38": "55ffgrery8e6vQn2Ekbx4akFLSpqNmqfboaZawm5ummvBTcFCtCHq6iN46WavH932pMscUXg3rYib2upjARmXL7T",
  "key39": "2EZq2KnfqNYwnTuigiiiyqWNqTgi8sbHZQdcmAVdfu29XiGH587EzqAuGkvMA8Cmxo5tbptpgW3dNGLk2wZ6PAAB",
  "key40": "44hvxwTfufscggGkkiS7A3HBkHkC4nLw6wFYMpj6aEb1g3DTxtofMFoLreLukbfwxnEadovBmoXgUsBSHjf2u6tq",
  "key41": "AR3Sx2yZEu9XpFyCMHpEC296Nvd9d7LER8Ez3m5maUrLgiTZWj7fk7K6t27cNDc84vNvKXeeeLCQYLPetqDsGU9",
  "key42": "3Km5Q52DGaV6e6Mk329zzSBF8c4Fj9udfPsHZ5EEkAUHsUFZkCyKzqoBH4GarpGPxqQoiEza1J2p31PVsUasTfxU",
  "key43": "4PVEbCTkvmkh7vsWXgBcUwEEU9secXXNZnVkpXnzzYaasXTf8kMN2Tb9Li8Q87rwfW2gCixsy78xmKopBNtwxQQA",
  "key44": "2KEyK6eozrbj9kLhT7gw8Zpr9f6Zw2xjVfsBhFH2B6tbqQdAJb4SvsHjXCVHNdbYxUn3LTG6m7sB98vXZvABgwNE",
  "key45": "4uc8CMgnEWTRvTv5j9dGbxAJ1sbscMZ9riRunZ4BwG8i181TDv8XjnvAV83SQSZC2Mk3uJERNmTk7BDGEF9JGMRE",
  "key46": "5H1PDkatXSuytwm5s2rxCQ9SzWi8QQ7cR1bCQuuBSf8prRRX3Npbgqhx998wr8HMryjFPHjSubdJqRvk3TjGXkNa"
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
