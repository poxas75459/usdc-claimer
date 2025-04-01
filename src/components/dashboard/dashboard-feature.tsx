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
    "4hjuGjbLPGEdZjCE7szabi9MhNPcf8Dn7gQJXywCfM8WXFsAdLfRM1r3Qvo84LHAkx4axzbo4ZQ5B6pSptJ8D6r6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8fDWaDP5vP54p9ChThSrZPT7o5RNmutuw94pTG63awTNxoBbFPew9xfwoomMWS51vZSWjp4PvUMnKy2c8J4woiC",
  "key1": "4bZj7MsfJVcbtf4xBnTdJrncpzQWCqkRAiwSMeMcXM5RxobMq4UzwZFBfTTjwT1MA3vNNHtJmwzjY6HEMxQ4EKtH",
  "key2": "3gigf6wuZ61HEMp1MazEYC4HQZW6RQcvqiygcQfJAzGVbaxhr26ToHh4eVU44j86pkdBGU9Yq6duWoqGEZ8o3AZW",
  "key3": "4pfiMrVaDZqtdq64UQx4SgdKkJx78VtF9SYqBnutUw5VR9kHwtEWAf354EWnzP8wgkMP4BF1rx4fPocUvvEfLvmu",
  "key4": "4jgy8nH698ohTGbC7JQUqYwyVbSJvcacj1hKkJy9suk1SgpaJqX8rnHs6N6o68i5dLDvydXYdZ3yx22f6WcowtqB",
  "key5": "3JJVcWbBPRsigmCNFosUFg2J6gVkwXnKLUwkBLurf73ZB3po95jZomowFQNjupaQgfsx23GB9fT1rVktsMmDGfR3",
  "key6": "Xd1NA8pCXw3Vq6j8AS2ckPc2k1fQ92TXW3BZirvaKJCpXeqdj38WXd3TWpwPXJeaMziyCe26DbQhAebP5b9MA3Q",
  "key7": "JiMpCnpcEutYXdtfe8aRvkH2zNEwdh5gQWT6wsfjiNWAc7KTRWhWNjVb5nwa2PJevtvYuDSLB97BPKr9yCbvP3K",
  "key8": "39dhSewBgrZisSJdbx7APwwVgYxqELtd8uEQba5sKXLMa2e32hh5LuDQyjNrr6p4RrzFMTyoURVKFRzhiRhawWns",
  "key9": "83katVvCkxDLzs2ovoBYViDp6JmnBkim3rYmNTMR3um9kQzmhWQJafKDCwFWiCcmKADYixFhd7siGawfLzzGRKZ",
  "key10": "5LS6AcHp9pPk1dqjpaXTtK7njUAyy72T22HceSckdjPSDPR6qsdHPNx7RFeYCtNboXPdHFJjCT3nKhTP4eTGhZhd",
  "key11": "3LLC5RVBxR8Fu2BYviQXVdQCaXXFNJEb3XBgHfv4d2CxxpsZKzPnfvUo6Mq9mdBCBffXNk2j2ubwwMzkDdfDj6yM",
  "key12": "2BtVYrLZQpzYkafQcsCHmQTdRZugdVeDY3DgxcDJD9aTyfgmyxbqed6X4qCseMd9wHar3ooZWyfy4m5JjkN25zb9",
  "key13": "4mNeiCRpsuN14LRGDtYoUSaznveABBx67D576Cg41GMpZCfnFRtiUnxG2sNGMs8Mb3sP65L8WJaeAFgABPkMHW7t",
  "key14": "2v57WgwQ4Womc4Tq51ZE926SGeHiva97mP8EP9k7mwDciz65aBwpo6fQtuh8wCZrW7XNpYx8bd3FXJApKvzUnqdf",
  "key15": "VLKBAQBJw988Wj6syrqW1VdcSf43GVDLiBcUPXL7RskApKqyJuKMktJtD3QRYRgrteyScn2fjFe3RMFt3BsH3Pe",
  "key16": "i2LB65JRR9Kc2eRpcaepY94DdN9kqEqU3to6YPKg8wMXmWNbJT4UgQYr5FzUL7LCt3qGiyVnN3nKbV3BuDAAxaT",
  "key17": "4wPvSrm4iuzHQCSQnGhqomq3RrdNnipNrrtiW4A3mn3HGd3GNvWrMLvAcd1Ds5GBhVMo3M6z13xqSh8WNtkXyS8H",
  "key18": "44n6QTQwsUdHYamKgUYaRXtjaGrXXjrz8GL1EFm72cpMAWtMDmAkBL7UGPVk4QHRt6r9QQABDDVh69L8F9T7EWvz",
  "key19": "3yyVCBUcyuPPZu6YR1PXhTMgDxt7dwPWRtEhWQrQ1nhrwKwZYpTsjgpSTLSpnTydtEfkmD6eC74fq9v1Uu82QWsM",
  "key20": "5zQsXfbaQMoa7YtMuzbvJgZHZnc1p67vGvZAX4FLa2GXo3eedihHtc7v4Wg63ih349CGwyknmApKmBTPtD61UEwk",
  "key21": "5j3c66q6NLGdKSiJ8CAbu5HhDqVJzKwaWR1xNEHLLVcLtSR1xmSY4mA4A76MaKquRV68Yrnh2A72QFwoapy49LP5",
  "key22": "3wJDWRvkH6u3ZJVMnLmb1c196cAgC39HsVs1jXcR97Y79AstfhnVmVUyiaHWtrV1pVteiHCGGkY5i7W6P9Ez6VLc",
  "key23": "564YJhs7qyYKpoEdjQ9je98AKKg7sfqQekdfGLCfNNDLDd1FAPH4py2NMR3HYrP5NuVzuqpBfktsGRKc7jk9mR1L",
  "key24": "3kASEroqTkMPs3btPKn7VjZogSsgdgMSMovH18svMdXf8aYErGH4bywkTy9DM9i1yEokw1qerodxdcUrKeSr4ZVx",
  "key25": "58CYaGX714SWbQMmTHFRzDaExRg8WkHJwTZvKRphiieXnAoGhFjVTYJiQZEiyxLZ4T7RBz9SBPtnvyYNdgrqZ5pQ",
  "key26": "4j2KdQCjw6k6u2wxgcMKW94LwsvDxpAbg7xVXnFiqsLejp6xtqwq3XjCnq6bWfZ6UiVr9KJUkgtpCB73wsdKkVPQ",
  "key27": "57p5cUYgvk3MbVArXiyKJSR3FkHem39cqa1wSTPCMo8zR8aLJxCssDiwNr3SdoNjrn4HCdQeAvvEtmWBL8bV1p8q",
  "key28": "2qvxf8ggBg83Xtfgz6uqitvBb26gVjn5U5NgacgXMjQyYQtecKvxYKboQZuQBBLRN9hsUVuK1e95kdLEcwXyib6q",
  "key29": "4dfJCQp9drxJi4S6Hc688QLsZpw6E54JSQ5jFwN7UbHLhyFBHGfBQPzExvoUwfQPVRYhr2ByxevcwxroLWvdC2f",
  "key30": "3Tw8Afzya3h1Sg7QKYpmJcpk7kUEpCxnXd3PK7iqoFnaVkpNaAZocKMwEdy4PqT5VJp4LKoYhMqP83jDhWvxcth2",
  "key31": "4fZnHcJiHV1aez4GTwdhR9XnJx91grXMMugSw8XKNXTyX2EZQQs1qFZbF7Dx8ZJPf9665CZjnzhDx56YyqTkC73Y",
  "key32": "2QwpzhkdmuV8s3fFbv2h7bFNneVeLfUm2ji293eBRzPv23HuP8No2H9G9YirYMD86w86n9JSs97gtPRGpWqAtfbK",
  "key33": "5JhLTs4ptsSUKaz7KY3tD21NghctLoTWazNic1BAoNMKahWJTgREtvLd5oR3RcGMuyfp7s26RGpKTht4if4Dj1nR",
  "key34": "4qBTXF4q5ugoskHEnLndk5xKbwqbTKzBCfw9MFy1YWBERiZcddjR8SrJZBTijVeSNxL8tTHraktH1AmSvJEbHcRa",
  "key35": "2mNthVEUkYrksvAJXVehx3dG7YUTshFkQiiHvDPgwynWKe6SmwDh81oRrHrzpBwFwyz5giG3vPrDukMpNGReJ3to",
  "key36": "qNY2x4m5GDsViZr4hrSmRYMZj9uswXyQNXkHy88E6ZQEQ6UQYwT35sfsuhqPDsLvPppUfPiDwjdFSWK2xccESwC",
  "key37": "4yiWDQpidX2Jx1AQMhFbspnzgUUo9SprCpjD1nRfkqnXKaejcWSvAUr5yvQ1m52JafuXm86jS1FkdLK8o3FHhtvC",
  "key38": "4H5YvgUvcjpRAgQyDVc65eYs6fwN9o7dpG4dZof8YGWFSLkSV9V1x2cHG4Dk3Wfgw2gXW8T7Ms612ahj6UxKYGKx",
  "key39": "92zurn6fDq6ExYtdzYKcmLkoJENchDab8KcWVnYN8x1FWdVr5yoiLQgz8YLZ3eFrQ3RRUDPmmqHamirWftMqXRf",
  "key40": "2btMYFQcnyVYpnBcWoZRtNdPEqN7fcyX3hfwpuFuZcrJdRQSsrNiPp9MHt3Nky249a8tiHEBPo4ouudYsbPh4oW8",
  "key41": "oL2JmfQoMhJMi6Vs4se887fvrf8pU5VdV3Gzn4jT74KpQmyuDNiMbVNWbAaFDP3r8dLPA4Zutb8qogJ4qWjyNmi"
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
