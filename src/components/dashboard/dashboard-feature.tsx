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
    "3GEzznqHbU1WTMUhifXmmoGQcW5eE5XhaRpwwQf9EpsyeMLULK987H5JsUsvoVUbqtYzeX2qaU7JtDzmrsk1umDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B6rWQN14KrjrU5fUTtL1S6iUqzeM3iBxMJ55PPA9RujRtRvmEFncQ4whzooHaLe4EwXGwcaqoCZqKkcSSvbUhJ",
  "key1": "2NPtLF6feykUMWkbQUWXfaweZkYw4EZ3TKLMKJuEFx1LVuV6no7Nng2LTDdBEg56wiefMCwisXbcJSF7N8tsHPyS",
  "key2": "5G7UwtCrHGzvL712k5GQkwQmG6szjXxntX2EiHAz2pJT7UYYJ3Q4HZ2aKsjuYnwf1Ls2NGL3A5HpFhdnGQZC3t5q",
  "key3": "3ePgYUognMGdiwn2aFMsaMtiprGaSwnbebVGYFAGHxdjjddRjiwMUMpv6w5CkWTxy7AYt76TG4TG1q95sz99ydS8",
  "key4": "5AjzgqCTyRxxNNBq7WVmuNyS2UWp5hGTAsGGsSEWRZQixqVzDYskx3K2yadBVHFVwxaxJSX1TBABr8UCP3CPE2jr",
  "key5": "kaXDYMoUTkScRdZZatgwgzGvNKzqkzoU7qQX3mAQuUvMYKsB3yCnq8tRLmYfnV4GdNvBUEKgnTPDEGbVK4aSdKu",
  "key6": "3AGGx1vryuyYZsxi2AFfM8Fm5MoGH49eE1xc5gUkJLFM926g61zFc1gJJ7fQG8hchNAQxvD1MJeHQGbmLHN2t3EF",
  "key7": "3jgX5YDcRNEYDszXd9rm76269BWF4hiRHmJa6wTiKMBYzj1P8NCqGG24kVL33sG8ubmvt2ihUzjwhizoGQc6aYY4",
  "key8": "37Kam67jB8WwKBSjX6tYGJfVDPU2auUkbobEHQsCu4L6dsNu6WPzjxzrH2dRtpXxJgpLE77ra6u9yubbwebzuPEn",
  "key9": "42EHtPvVfaLTS2FSshSGBESbiUrBuEc3k3E5VtNagyj6sxiN3eHznjwS96RfZDEGSiN6tKpmwS8qHXgRpjsucLfi",
  "key10": "4gdjDJFDsbA2zoBTxHzxHtJBHLQsHHGNDKhB2pwHYsFhBMWm6cDHCJPfYWzCspVfcdthAmb3dQsBfsxTLctCEwUV",
  "key11": "k2fEuJAGj77mij5i7c6uzgUxBcge7bAQ5C4HgDzWEoRyc8HFc23Zp6zHLrsWXEiCzc7ihUAC7HYGNmfhF5pg1jN",
  "key12": "4Dyu2MKoMdvMFVbD9rt1jmUDu3BvGK9U2kAsvcmGWVfvysmJUD53ghBfaeR3ruCq8Y25GFRvfx1cjVrS9b2hy7Kj",
  "key13": "37tja8LuGMHzR5Vcaak2pKAspoa6Ya84tbYwinAQWNrqb7iPCcPygtTxDEQk4rzXcN1pk9FCNmJvZXuhSBTBpByN",
  "key14": "3JFroh3xnQv229AP9CAXXVZBxuBrUh9pfGQ61HxerDJ5enaR8w2jXgAPAaVpZUVB6DXm2nPrJphQHHAM1S9vd6Pg",
  "key15": "63RcJwLwd9nQVNqDnLUQK1jYfUS7ojxszMLtdpwQQcT2wmX71hyP2VGB9Xbe5CjvH8c4ZyfGFnP4gwXiaViDYDoG",
  "key16": "2ug6J67UX1nWaPhXMzdRY7DocMcA6kHxB97ZRoBr4qXjgtyHY65ch6D1YmEx5a19dVpLuk71oCe7GCyjJrpT9hA",
  "key17": "3kBc5MjCddXN8Up1LwXpQErk82d8ebAeZh5NT9fL2fkFuKE4LLqzGtESR2wPqqTAVYjpuvjbpfS32yHJK87s5Qm8",
  "key18": "bkGxLVNEHQasew1eeEX57z4Ui9gHFeQP8Yj6QtWRFBNdokxtYemormyd2RjmEaBYyFQcry79aHmdwYuyHhecQjo",
  "key19": "5aURnucqTyGnzMZiBZZcjw7m1C5M937pLHycoJtdFoucrQ1iWrPuWk6g23MW1g9CSSsWjZtVb8BgWBpF497zyzeL",
  "key20": "2r76dSERmHvjhpLHW7hNwqgS3fo4wR6pvTKv6y8ryg5z2JgeP9VFRKC8YDQY9ArC69ELgiXVGP2VorDr5Y7Au8bv",
  "key21": "5bWzJqvDLc9RUx9pYK9hefPYZ43pB4P5CLSKowMZY9Sh97mp6nr1f56VwrpzjhtdmYu7xCQMY77E6RV3a4TGtsKf",
  "key22": "55PK3XVZsZEoKVaqCSDT3icW5jjCTn4pNppQRnrUCGb5m64gv53yykrXzauoLPdCxtB2hDMbVLwXCpjQLMoLcxSD",
  "key23": "56RxcmgQvwh1QkHHwmsnqNLaN7CzyYjeVunFjE6miaY8Ez1eVSBN5u8quRq8fxANGHpHzHkqDxWf9JSjZ93GkD8S",
  "key24": "4ke54WrNoopihAHD4MJ4vkSCdb217zd1VTeYLdjAN1e4SpiSvZNoD2W6Z3LLbG2BwR9p95SG91kZbPR2biyUMiGE",
  "key25": "5bXmfoL44o5LvnWPfACpLwYkp61HFK2zNjdYCETHqmhwrAYjcgcn6jppSHSqRQt6GyUANxr1EYAQmZrMmGRenF3s",
  "key26": "2VPLK9sDD26cRf3CcKrKg4iytHZsTJDYbGZqKNSPt8V8NM6XMDjhC1SWTpQZdCfBDbi9XfsqukmkekqdsoskcrR5",
  "key27": "3xsJqdBiXjfUrNLQ8rHL4CrFep2mYBCCXuDf2kf4MerH5pMHPsY4gYp6ZXeejCPFumHZEMEiHPK8NKs3ajqzCM8Q",
  "key28": "5Fb7QrEdMVLDqxK4vHgv3gSfZpr3EsHbDy15RCj2a5H2JLj4aw9NTYV3mjghDSU9hxQLTXhMGNMuVsjie2GRX6wz",
  "key29": "CyxrDYTxUZbF6KjFMuExKi5bSRcTcphCvs1THJtj7sM4md2QgroUmrytQpySKmoADMLRvFvHNLTo7Ggn68KyqAX",
  "key30": "PPBvaYWXoFDKjkw9m36iGHY9yDSj4Yu1VbFbma1WXArLhUWo5fdd7BUbYYHZqKJUSD5x63ewC3ykQCY9LwLNoMS",
  "key31": "42ki8K7hcQkBF5AMje1QxTeiBK54eYK49c8bGJBsViV3qcQxGnv1rHga6NRnCjduCCmSzW9nwMMfTjHNjWLrkjfg",
  "key32": "5x6ey16H1Qnu2iLFM1PJ75FQqmx5No9PthZUWqs7L56gnEz4odUHb289D74FTH8juLtkJHJ8AqGrECLemgNAMu7y"
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
