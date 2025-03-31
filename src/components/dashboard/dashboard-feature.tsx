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
    "3Cq6trRHRdGok6R2fADkBbNXsxPGbDyrFcxV8KdhgNH3z6oAmjqPrLecXRRkwHMesMzVTiJmXDq7Br2KBDveyHED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9WZ3kNmFkaKxU2kuYgBbUY1mkec1hotqkiNXbwXubYHSuV4UUsgLND33AccipPEnidv8R1NnAgDsHX9S1qprjxS",
  "key1": "2PyWuZGU85xJAi64UgZe78CPT4SL7QpPcEQyUFTbfAddMehsisHf6rBZFTUGyCeeS2FBqQxkK1yTS6GvhhrAuukt",
  "key2": "59F4RcxCZy9Q7s11nqEmRSvDrwMePoXC3yzaJ3nW3AkEmE4h2GoGqWPou5iWwQYwZbDKLMhx9Yb1QCZnhiwiqLFZ",
  "key3": "3yVwGj4Cb6voTNfGoda1aWQfNcmxxB4mN1ZAwzebh8TwjT5a59oPQMgmy8sbFsPpfKxAyFBm841nFpnqqyRD5whP",
  "key4": "3sZxQQqNq3gJiRb3DoMAvZ15AcDPSZRafNNTyVv7ay6BbLXALd1r2nPEPsR9TEJznL3KuVXPuhE6jNY19G55TMcb",
  "key5": "UB8cYs5Xuk74R1GuoUTENbamX8PPYiSEmsbTNpEuozY6wXN6PjCXKnd4HBCx9jqGQSBgxxoG6NCLdYfsFSGtoMN",
  "key6": "5ZHsYDxdbN9ZgEhDBJgRVCc1QCozVqAFNAsQF5sHkz6bgCEyTbvBkiqtN5bDGz5gBGLmYTcCdkUB95zJ1JAmMYTF",
  "key7": "4xjRt2cDt6FG7haww5NKjTrSoMbodTQAd1UkkVnyLfw4iYmofaKwfxMaVc4PjTtxf4MaiM3NDo8ZwRbPQjKoQVCH",
  "key8": "4AKfgwiWTdAaBktnLCERXHnGGS8ynXkpMjeZDYgZDWTt7e8LpFSqouwwr5wvoWB7ud7AHc3FM2btgCtjYSjsWjCA",
  "key9": "2Ws28dYLgn9mDg6hFWQkZ9hXBvLRLvW4SNo7YeKx2pttDrs5KMV68pTHw1VyDWfTjuQAsp7GbwpZqE1BGL6dhfnc",
  "key10": "2v4GH52tiRUM6vJCMwHWWbC4iCYdCt5R1R5hKP3Hd865p3NhGxH5V3GQYYB5SsnQtEU3EP4cnUpAcYvsH2o6mz3K",
  "key11": "54jg1JxtmfbGjtuGxF554B2MbeVWL4byZmhDL7woDkn9HcdKmWoRRZdAm3hqN4kfsXJdCYQtj9U6e8nThHUEZZpB",
  "key12": "KRaGSagBSiNCCzMkspuNMEMsVRJUTTZDsPTFmUgYPSzEDA8nYMDqdRhcVeHh7hwr2bYmFa7W4ZgeZzHo4ByWkun",
  "key13": "3qDgPT7WD26mzTguTMmmSNzhnknMNKJRkVNVj9NfWwwvUUCmFidu3GbQ3RLFUfMyaAX5uXJBC9DHJvQ4y9ramGhi",
  "key14": "xq97JVH9fT7LuCPtKehsVnWTZa6uEGdwZJTQTUWULR5zotowT26shEA7kQZxQUfyjm9uCntQK3ubBaQGNKJLF7H",
  "key15": "5t78FXcg2ZokGYixUV7wQRzJaTmKAk2GkHvzFCFNnqEB48a1UJRgzzeB67xiHksuPQ7FBzFZwqEXYG1aQtYvsCYj",
  "key16": "5EboxBd5RJQHtyHAao2rVoZ5RFS4TwxMy7eShaanXiF5T1ZzaTMm6zvwJRCsubRhqjH6fo7jKpqj6Zos9U4S2jVn",
  "key17": "37BA3EgK82h7MguvDJMbq2EsZEjXVaboFrjPTAq9DsxfceYxL5bz5rqDPfbXnAJRU4op4MM2arzh7N3jbtwAqD3n",
  "key18": "3ZMXaez9nRGTidePgH5K8WvdE2sbRYBDY1BovdDYr9c98zLS9VjeVoDqbADRdzeKiLo7a5jK7MUnLQByixXw1QGY",
  "key19": "4dme9cjukchASAkcgvRSpra6TWmx4TuFxb7rDete7QCcguMJb39oUKScvU1NArxQJdnBDFEE4chpiuo7u3ZUpd5G",
  "key20": "5f6x1SWERJ1HHc9u5HpXkC5AdMJs9QKnEzTnwzhyjwpnFUfEhQubv9dSXpixLUd6MaTV5Q5ek1nvrKMVqZ8K3FZu",
  "key21": "fG22xNSrysGfmZuuTzLujR44KNFdvQZ7F2cG86aChJqTNAZDyJJ1xCy3pAypWoEyWtYuNMDXJA6HjNhZvPjTm89",
  "key22": "2v9gtESa24HLrpjNnHvk6vcmyMjL8hQSmeVbzpYNanSp71TV8Yq8NcmWt32cJGXLBqUGbL6Z9sMZkzsvSf3SH1gP",
  "key23": "2i1ehUtBnysunwQgrKWfdcv1fReVy4VaYZv3xA3KQ1MncFocprRMTjDV44FZQ3UZoLSia3KkiZHpQZRSf45B7cax",
  "key24": "gMF1zDbifqEaBxbLCs52e7CTnmwgJG3HssXSo1hauUzyn2W4Upz6YKAs3xKJhYy81gsJFEvm4nJvkKf2oQ1j3Uc",
  "key25": "2ZuWGc7BmiFF7Et9pSK8SPASBfQz4QGoCERkZWNizgte4LsAD4KEHK66KodJJmPLFpobzHbu3MYcHadaiotNfSrd",
  "key26": "1yQwqfJgVMKoK1EZ5Z6NJkb3W9VpM3SvTf9sTmiGPCgBcWx4nvdc6XYqqCefuGLdL1jfnjNkpfh9LgheKCwsMZf",
  "key27": "3HXUgWo1f8nhmJdBrb4bSPKs5jtyF1uZEu6ev5Ket9uLRMsFZa82wDKerqiCN33NmQeEyi7guxhyrEuvxodrE5oR",
  "key28": "671MWY6ViAUB6TjsCW1d3F8r978hEuRjFu6ATR4DUD2tPNEnWN1n3fV62xkxEuS8MzREqokiKboc8GMXaAGVVnAj",
  "key29": "KkwNtN4BuDT3aDNSw4JoX5erUjSqnU5G5nXC87UeiGFeVqtmUhe7G7nv3brtBNgxe4ahutARXxV9hgH5MDF3Khz",
  "key30": "4Md2sQgnx645JEv2C8rbs83Vf2WZSGUxsSLjhmRWcx6ivRWeJZux9FhZgPt1T5DZUKKKvc3Ggq1VGo7pPnhC3Wso",
  "key31": "53WbubGkohiFkVDv9g5ncknwVKsbWfxBApWsRtboL1SYmn75RnP7iAz7UznQKWvQEaDSbzst1MTYEyjE9Gwtccd6",
  "key32": "4WTfuKi9dveojUef6MhNHnMmEohKBjmeA9B89T8wWyGPxbmuTav8MJZKZ1mTHjnG7aBqdjAP48HNasNnTJC6Ydh7",
  "key33": "4Qy1iMEckkWmyoyC8q7uYaNm7PzJqjb99NjjUAMu8a2LNDtC4cVHjMpCuNZk4v75PQkXpwDU9eZwVrJk8nuFMQ4q",
  "key34": "2dG7XRmV8eRR5nbUHWpwLcenThU4EGcNWJD4auitTMSKvgEkSiH4fGmx7HKig2ubwuKySEF58fK8xPFmiUVvaQoe",
  "key35": "5NBsNSPiLbvKENqEKRaX26RAL9MZr31fUVtriPUPzxrGHjZ7wY4jpLV2H2YNakhxzi4GnW33mvfvVC11QrhSRJU7",
  "key36": "3MyH5EsUdf6DcL3KpzyS2gHXcJVXbSBknsEWTJ7Vb9KgrdqTNsMvWQ6EEQ62iJsRdCHhW39Yjo9X2mtxbDx8bwzy",
  "key37": "eyvsDSaBTYL8DtkNY7VWUNabg4VrLkzYnuauUG9avHqzgsgZHZyby2PTKbX8rYngXwH6rzsWaEwBGVasWHqqxVo",
  "key38": "5yrkHcgEeHzq3MUeuL5yoPVdCH3vfEDNAVqfGzba4jvsE6EftZnVEy1wv9FDB3jMq442zFoMvXm1KPYTgKAGDRb2",
  "key39": "murVaDRXDs7XufT4WxVi5UP1AjKQn9FTVfBHVJeeYwq96gGqdk4jN4NR45sQx3G8t2pi9Jgmmv54uwCXHZi2XAF",
  "key40": "5R4gvaB6cTPkNWBvqXVL3kjuXdkwX85auzJBG4KANnv62WrjG6ZD5LDDoXtJeGSNNe4iYjk8JssQR3FKU98mVGnZ",
  "key41": "38XWihaaTCheFWb1UM9JYb4VNigBGbCyiDe8vz4CMoRV3fxTubFJfB55agVpA5xz3XVpJk9mhcsVK3dUN5emUrkf"
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
