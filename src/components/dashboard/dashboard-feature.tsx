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
    "5KBn1NQkPkXRE6hDrGHDyb1ZNBf3SmUX5YbnXJSmCYLTiwMLAUVarSZUc4AA6h7HxRdo2TuQRz3cLbJfYzw7fMRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WjAUWfNqrz9FgpZsKwF5eTnhLRXAX3CB28xjdMR1uanNjU2hvy8yGQFTd6z86srFX26Nrm3rU7c4wTPJV13bmMd",
  "key1": "owpz2LZYfChUw8tPpA21WZwMgpoJqRQLYqieD61NJYsDzbBGQqcQpd58oUaJRsHuLA7upnvae3qDWPiDu6JdDXt",
  "key2": "4S5x3fEU8LyeJRVFmiL3gZu8cw3tn9PtXPLwpsJvWDE3dm6CwVF5yzMyRodUM98uNb9fDszoH9mMJMB3j9Xo7rYp",
  "key3": "QqYcgvR3kX3tfAtR33VJquab24tuMaaQ93kUpSkKiUpSR2ZD225Y1EmjnxfstnGAg6bjArKMJsF1bNwSgPhRW6a",
  "key4": "JJ4fVTiPHTZHU2amRZR5xWWpAfcRQPG499ryvf8fwYPVohDwGCJu2zU4whAkC3MjU55WZERmRrrixxLZWbYQjFF",
  "key5": "53BFGWT5TkojGhnV1gGSdbUn3LrkazyLH2RzQZEJpqGJLRcL7AyEF1sWgvXEWk9BbL5vBdVsnLLuU3gASFArVbBs",
  "key6": "4sQz9oQWS8HQhyDePwr5KHvfK5u89JbPdgsc2D5W6SFmb3uCqNcKsFMPniMHYq1pT3mLdoWV9dGSFwpqXjh7yDzx",
  "key7": "3EnsHAtGoEkDwaN9o8KMJRt9NZJ1ozoQNpfJSWo1nCeSv2uGzhUqgvgJfkrnQNLMNMe8MXqV3GaDUxkDgAC5kNid",
  "key8": "wT3A4Mi8EKLs2bJWzL4AFsMFzMKoh6AZVqWo3Z77WAK6YrF9Vz2MhwT2faWSkDQ7hSxiYhX3WUDR5ex1P97Kwsy",
  "key9": "2T8worJo8P6XaFTjfngi5Td2oa4vXN5YzN8fmEV2VJ3QjboD5eTF4VRBVazgqxz6Ssa8XVbBvL4hg8GeuP9F85Wz",
  "key10": "3y9QXnhFiZhaTZqwtRvxfZjoj5Q8D9vD4ewCMm1iTUpDmYERkF5hZAe7jGXeNQ1tYJBjpGGoeELQBa84hgX1z2rN",
  "key11": "Nn8AuVYfts2LtDG6QUT9XF6iZ7XUrCi33BFvfyFLZaR8qfEZavTCxweA3U6U1ihohM3DxXq5TSz3bRb7Ce4YAPa",
  "key12": "5W2WoxwXjZ7THfxorE4jL2XHphMenzyrU9Kgw4xeMMTUTcD8ThvDs84bWBPt7QHGcu4m8ao5HmRt4x6ge8vU5zfE",
  "key13": "3g46c5J6ufy5beyyzwa9VNBPn2JAMFX8UVT23x5MLKyct7tRf3YX7cGigqmMWswX5AJoTr2gX8sFGsk1486b7Qzw",
  "key14": "3JuGsBEzq1t2pCpfJctstpYbpQcXFrzHiCoaGX7PYxPLHQPdUX752z9dBaWHwtu3hMR8YK89j7coEQj5bg4qpRLH",
  "key15": "63VnrJu949ChkzEV3HgkVN64sHTSsbsMkJygDpJJiGBjHNNEjrdccHdELvgnyUbATwiHpf1ULdmYCrai6tb2cuen",
  "key16": "54UqkLPWMtscF3eH1v1MPPFY2cJxt6cFVJCkiEzGAMe5HmmxCkCEvwi43gB3x3qpz3BN27qGvZihzyAMb1svcqgr",
  "key17": "37bMrdLkWGp1mkYGpiiuhMAqV2kAv2cnvbC6zPmQfwVCLeZLgGeQhtiBNXXwBcWhn5JZCGGCdCb2Q1WtpmAhwXQ7",
  "key18": "5jYZua6uzg9v7SyGdnovhMrK4rCJBbusEy8bTsWxFTmjf5NTy29rgySjUKtBPc7WKJFFKZV4UvffTCM3wybDjB6y",
  "key19": "5hGkzmYhS2yUr5JRYE1pQfdbaAkiTnuuYDksDXu1tqG31VgQMkaumJUeDcdfZAcEkjnuhEHN6DgkZCSN1cHyANCp",
  "key20": "iVeFsSgEMjFBdX5N1QS2nBmSSPKqSXLZPZwrhEkeExsDAyVhhMti1ZDumAMZEodDL5GLchHFaU1QvGNE2139dQe",
  "key21": "4Q4xUh1n7MWs2pqaZp2u53XmFPLr5BhsJVJBdVSzUUqVWHFZMxMWvpm2jZ7K3CYjXBZPzd42zmn6hRb6Tm71girp",
  "key22": "554QxQLmAc5QeABNrHwCXcHdHJAUeXy9eKCqnvUydQGAwdQNMibPa45XzQ2WCyWK2cwtkk9KNMocDzkFHEAPutcp",
  "key23": "58rEK4cyPgg9T2mCQSgxC8jQDgbzJMaFb4ZT1uaLvnskjQTwUtJmnEFq8bnfSR9Lai5k34aknB66d7dKuuzxe8qP",
  "key24": "2D6Sz9jWQZHYMuvMbjYPcVupTTtG62NULNrjErvtc33uL2AZyRwKm2JbqgUxBhdX57SiiYhMa6uj7JSWacYBZtk",
  "key25": "4Jf8Ja3vxyy5Fq78oPkdtExCMehMTiMhYuRSn6LoW3zozZ76hhdNMp2Ha6F8Vcud2zTdnrno4PnDzPc9V8v4svAq",
  "key26": "4hx6VL698aiUVNXAowqGX4ASSUGbp5XfSSru2xPmVYFtkBTJyHWwzaTtgJYXNAvrRReXS86PZ5Dft4KP2KjtStMZ",
  "key27": "4jGCw4f1wAft8DPHyHw7FQHgGixikbMnszD19esXRux6yAEt7VgzQJimaRRP3igmmSTgauLoJA2QpN8XY8p9xgrr",
  "key28": "27y2ZenpLCVABoXVmwkwYgayDi1deXejWoydDZwWoscrbTkzovxtbgypWUZKRERnA6k3mEhBgPbdzcASSwefKGqb",
  "key29": "2m8Mh7ccyVUn8LUxapR9oE3YYUwEWCxExBzpMVfu5Vf7GYTZeUJGqcD6EUiBzCYStvLz224XUPysfCAPTztG65KT",
  "key30": "2EhkWUC5vonJRwLnoqZtCcoXAiBGP1W7GWUTTJgBFmotGP2vQqLRjDCMdRundNgt4oRU6hVzSYgtDV2Yv9oUGSqz",
  "key31": "FL6PfgxUJQRHPcEChbkkHC3HysmWkQrMERa11bhs58iBfJpmxCq98b312JmxcRTihBaXfGU5eEQSdQr9hhN48xv",
  "key32": "5eddkGUziQutf54pnyoMGoPCdc2a7ZuK6eqeaaVUm8RW8Npdx6ekXof78YBPsDNYaduSSD7mSFBAcrF2phsc5yv1",
  "key33": "4AB1Bg2rL35HQgWr3bDW73hoHKq2uniFK3RV4XPRCvjuQXHMo5qYuUEdAHirtaCpfcymigAUKewH9a6CYm9LFzcY",
  "key34": "5EBtCsv8Xk6b6Y91kQZhXb7trSFcup1KVo6UUBwN4yYbwuhbZLBcsFn4vmxP3jkG7QBk8jAFw9MAeKW25ddMjxgr",
  "key35": "5sjtnXZeuQWGLPaTrvsGCZZdbLqBZUQkBiW2GAkeotqGerQcsjEBRkwbSrsQGeM2a9KyF7a7CbatFNrcWtjos1v5",
  "key36": "2iVscQLMMSbxeMfeh8TGCnsfw71Thi59Wx9dX1efqY4ScZSdDVNYxLR8Lsi8ekk9nFxtZuiekRPNKyNe8gTA4jgs",
  "key37": "2p4j3YRZQL1HDQUEUaqJ4CPWWaJteZ3gdXsg2EecDuAfQjjcyUAWbeEpEiQ28H3krTz9A8LPvigDpxbwBPYGJX1k",
  "key38": "48HpTaTm6VGrNSxDCXB1zhTQszNcoo9M14U4EP7ADzQLsJvT9dWtxNH3hvWU8a45QBCGN6zVRW5TRcvGY8PEoS9Q",
  "key39": "3ALj6EQiCFAixxueyiCenkJVe3mNF6wMRYQ8ezCXCh9onboGXBofjSik3cKjASkf7R6Mt8NaML5y4fnqkUTHpEj4"
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
