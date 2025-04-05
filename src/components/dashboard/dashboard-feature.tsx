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
    "2Rsyy9JFWR1uKiUSQLNdGm3To5ZwJ2zXCfypubgQ7V4E1qyGBx4dkcNNsHTL4aXpR3u8AnGmtGPAPd1JLknDcf1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RWF7BzYxSjNXvgJDKkVCEE8cLPx9CqQZ1T1oN9BMqve19SKctMaWCtXsuJXud2fiLocLRKwDyMo3pa3qPHik4tH",
  "key1": "57AZpyG3rgBj8xwYbQNMN6nQZvqAkVqyXnq2Vzi8GQtrbbya1xDaXrkjfEbFcB7URYP5k4cBzfuHENeuSpf3q8eo",
  "key2": "62PJvjUw4pFQvE8qPYBMiKSAFycYsPFiuDtXurpFkhrdHYSD5gdNacF17qkEGXxucakxWLogduSWPvsHs8EZmGWT",
  "key3": "5WtwVz6VCyGA6Bc4wipmfMzAChzmyw6Qfqw4CCyFT3wD9WMTyz4Towq7p64UiYBZtvXv2rzL9NQE3kwpBLKjTEy1",
  "key4": "2Gnf9CVpDUTMuu2f76EMrWajUFjzbx4RYTNUcRGvGtVpAoidnV73Yx7cTrDoZxYtUdA7tmdHiXpkmNk8njo5kxEg",
  "key5": "4qx5LotPiiaRa1t5ZMzyeKhPwWzjQsTg5X2o1pgKPdhRKM5NmCn3bhDpckxpJkMd5vckw6eYhx9SK3eRb1rovKuX",
  "key6": "2MLAtarGmnp1kuPwDRhRofTjor83fgVWcuemwr737whDSGCPZXyNfTHHVp5QeFLVYAr4S5UGm34giSFx9uJWdW7v",
  "key7": "2utqXPddFgNyBm8kXdfKaQLwFogPmxvp69N9xyS5r5Hsrc5RvBqmg7Zssh5EGNLqEGz3AdWp2bKhG1UCqe4uCX6e",
  "key8": "3nwjcRQ6J1naW9Vkb1aa98ahexx1Q9V4kgmeurDjRKBtFGxGqD317hCwM2GKCGH4GBXkqfkbenyvH6N2WAxnptjQ",
  "key9": "5ytuR8N4kCK4gGfbo9bov2ZmBQ7zP7MtYPu9TihpZheyy8ArvpeZmmNxxcFDJ68qGgqNUgaKTRwnb2cUQyQBfTkf",
  "key10": "2zuqDWiJyktpzjA4ZXe76MqJqxfYhVRbFChV3dacnjQXdMwx3ZRzFfkhqyML5jMBAoqLjtAFjpi9XCKAPoj9hzBM",
  "key11": "2QS49H7MghtYR3gnAdacK9W5aDaGTBXHNNC5oufVzUKSjRYE5bWDxEUAu44XaQTEkHnAq5TCFTf5NgrAQ4eqX7HD",
  "key12": "2bP1Eqd6dZBy4AcD4szr13LfY2pkZuBDNqrMZa9gsjb5JZvoSe23Jy9GSkq6pqMqMDtsxwW3TbJ9xM5VgMjX69Su",
  "key13": "5z7WdzvAxH3VV7Ey9e3tLHUiRv3BFFiygBh3w1u2UZ2gGMVha6CzRuTnYTVP7uPSXD6yucVVBMwgrpvUMHw9n2ZV",
  "key14": "4DnW4E4cKWrDh2LRJEANXDPCM7oMfq21fqfGBjvbMVXr4UDaBM6gqs1Xd2yGt4WTb6mnYUgM3v5xGvJMc4471ieF",
  "key15": "2d58T1N1kkpT63K1RxH5HpA1MzPoT7yGp9ko7RUEJX41WGPB354tY2HCkiTVuZNgqQcHVPpPtvN4CcjQYDruh3m7",
  "key16": "4sesy7jPb3LiLyW51owYRL2BznvUpPmmyyzfDm4woy7ZH5rgoM19NDGZpgD3h8dF3FfJkZPudtj3DtF5QcaVmJCA",
  "key17": "3T9SFq2TNsk66KjtfwxU6sY8KB7FZBuVLVUVyM7amW44ZMe2qv7oafdf2wmLxre2bZFb8mmzZbX923US29sAWxmj",
  "key18": "5eBikjp67MYoDb3Xa3n3o2bTQqCQwHtcpgtRAHx3vuxVq65ig95J3ZMS7sb8f2pJyutCfugKWUciePHvKZe3cU13",
  "key19": "5LC6AGLSBejQsC5wt7toAj6mfTLuedHGFUnfJWmtnSHgbahP8JS5PFNFyCqp8nrWe7QVyUMoXC5rV4bUYSfv6gdS",
  "key20": "4iSHrJWNEcpNGTPYWpeRvUhpGvBAmxDe5bHUB5F74UoHQ1MhwqBykZ7A3FwDz5JTPmuw2FQwTJoTJuCqrZmZGtUi",
  "key21": "2sTFB7VbtrQLMYGwUBhsgEFLkx9F5F6cAYrgYbyFw8MqZ9DrTqvG76hZFewTpdbAY3Xkpd73pyi9ujvRP41BkdEN",
  "key22": "2DtCQTdM2FXxi5KWyaaE1LHZiBNXktPm1AGWHxPA7Fvx8S6oiaktbVcgHNMBvUURKvweZMTgnRViJduVCXDNQx8V",
  "key23": "5ZXZEmrh6GSg6FKoJkrmuZwszrM1wwFh662wwQxPkdpNZP4sbULAP59wVNXt3b8k731q94ygueCJFoG2fnqosixf",
  "key24": "2mEYb4jhzncVVGCpF46rrT4ZL9cXxHVX43bSSmof1WnufUnGjvQH5HXpbPxiEDtWCew2rSeCcE3wq2WQVfVBC5ff",
  "key25": "65G57skaMKX28qcXFcU4XGYCaLtZQd4RSEJbTMSmqXwVSKj9vEr1xpmAmsAj11cspE5jTeqZZYwewRFWY365xBXL",
  "key26": "2VfUGUVewuscgzES3vDYQXzdtkUvyxeUobCX4s8pDqfG9gS1M6snVaRaqMJdoXdgXSYPBqRShGoajmxPNCKYreQ",
  "key27": "5z4g49QZdmguM7bCKFpLXpcQW3JP2EsnuZ2MefaXachdGRZymfifzfuEZ3sDue489cpHjBSVZ1s9T35zq4YzDFCS",
  "key28": "3qJ4AJS1K2Zene8iWzsG33PTSx9WU3ChcpUqgR4zp9NggJL5SHUY243MVx8bzyhJApYPwE5bKc9BqBhfhtNn4yoB",
  "key29": "2K9HyEneAnJ3vqJNH9kifWucPPVLjFikwGndDtZ5VGo8vtAQD1Mjt6M2SqAqvrCyogfhkDBCU8otNGQwn3np6q6s",
  "key30": "J7uoQY9QvepAzyoFEx7SJLJSQweg136SNnC7KPJcayb2pmVpa4Qofi4gXr77ZQZVdVqpyEXc4CQSMm1ZFDdXpgY",
  "key31": "44J7q3aeyKGGkdRLMioQ3DarBNqwrmbs8GK58whGQokBQuonBckj98KP4PzwvaQ4z5Vedm27LCuJJyFqAbgFiuAQ",
  "key32": "4xF4dqk8fjHxomwaRGrwUw4As5aLKFzKxgwLRCQdsicBgiRFXhxQxCQo7nhZYhinYD9mFpVX8vCzVTAcU6d71EAc",
  "key33": "22nf2yqpJB6oN4ToPqwWnwxxNDkUBdBq63dQpF1kDSYaDWrPLeRdoYDDQFqs4tL8KYMUg9onsDAeFMqXAMn2ANFg",
  "key34": "4RcBsdVpbtCYG45zHHD4njSMoxcvQWcxrbiFo4quj7kxzPxSkJ6DhBVJjGbASSsT8yLta9NazhGCS1cuyrNjLxKE",
  "key35": "4uEtxFCbU99tQbgHiFM2PUiY3aBTy3fBKquoAuE8GAghYJzc9ZR6AYYXsdByNTNtJrbZjWeJYWjVwRT2fSsTrjk1",
  "key36": "5Jwteqd1cdEQGahBAB31USZDXStu3s5wcVMdvfsAA4PoH5uQLqYPQ1eE9WY4zMjikvSPjcFrb4fRxzqAdyWfUT4g",
  "key37": "3eLJcCJNHrWxwJvn2P3Vexr4FifnigF6GVCDfaGoXkiua3LGJXvV2bTaae93jPSVn3WdPe4HR11E3RfWSa3SnpkX",
  "key38": "4dLBAq3FyppbtDNtQcAhVayZZS5jt6UxF2oSbV31Zmnhmnu43awBy9PhcS4EZoarvPCVu3woMgDTi15EGQReRpws",
  "key39": "2uECqnaX7btRD9cjQweQcurYbenDdE8UugEi2xwAtqahJuNM4VAUjwDqimMoBbNxWqBJLtNp6umeRkqBTpTgfrsN",
  "key40": "2e7LnB77Y3qpsQvmS2G5KFHTddJ6MgBNdBcTdEFPZ3TnUsVtHcXqQndQUtYHsBFkPVddaBS5FBkmKFbfStRQNDqT",
  "key41": "2NSYDWjGzVdN6WLip6B7ssZyWLrgYwzHWFWeDT96porHQUG77RPTGy54kt8kFV1UgtWKCgL1xQA2WczZoHnQNe17",
  "key42": "5JbGGEWVJwKaoU36WtYR1Qqxf99SZcmfE9t7HzAD7XeEsc5tfNKsx4L5e6VYE6Y2RFd81uH4UWM8LiorBMRcigSQ",
  "key43": "xwm7qUWsVEjZY1jn3PJkU5npuHfTyoRfEe6RCEkkE1s21V7a7AyxJvGGwCMJDCLYufnQGyrGa2xo9wirAQYhu1Q",
  "key44": "4WP9d2SPM66UBymS7G1ZimkXWLDVborPuyaAZeaZTuvUDYVDvRpPsPkWF8MseZ5JaCzeYxm2TfSuuKhksH3u5uzk",
  "key45": "3orxb9iAZrxVXKDTCawJr7MiggRR6E6VJigZXE26UapnaNjCSnaTwEZR2xqu3XrEAu78NCrMat1Km2jKyLthEEyX",
  "key46": "5A3DniPFbdUKq2FaAvkwnxgei87HxLoB9HimSQUcsSJSYZayexAteUNjDQuM6guJtmzn9LUzBpRKroqp6qr1jxde"
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
