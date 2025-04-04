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
    "2cAuSycSDgEf4KJ2eJcCAzQgL4Z5fEZKTdQcGwsguTfGfW48PcSERTapib6y4JoMB1pdG5sodqJtPFmi8mEaEzc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xa5XUB8G2C9W84uhXedusdRxuxJqBu4VdhqQScB4weFeqyCtwpbxKQueM4uio8T7HDZk7jdHP5YqxpGnJhAmPE4",
  "key1": "4vsiGgVneSZ2oHSgAajbU5JMd6fbkWycz5CX5CPpxXrgR2jLZw6XMMuk4yywhVJucFe2QWR5usXmt2bFGMVMa44i",
  "key2": "2Sncz9F39WpvrqGJSVJ35gJfFBNvGv7V1craYAhYyPn7W9HTAMjT2PUhoES18Zhz2kAR1ASea3zetNo2sDdkUtQt",
  "key3": "wEwtbjYJdDug7FnxLAN4rERgRFguf7iLSns86uoNaxLSsuXf2R9y2KPNFYRC65KqdSpJ1x68CkdGo4cfks41qwL",
  "key4": "5riJAfnCT11gvKetCVb77Kdnz1aFQk9PYASBCYF66cSB2j3MpEwVtxAfBQdoSbdgFx5qXEjL5z2yyeVpSP2mY6g1",
  "key5": "3tHa8XFu55BT4wVRwwwyG3TvUj9SNgqJ78AgbB2ZELbZiCpV8Ypvyy54S87u2gnHxSoyyJ9E4ggpwPgEghb3f7YU",
  "key6": "3DmR9S8HKQBC9XRR9MA7UfHReUd7H2GDdP8BnpYChn8Qm84NXACRLwbmnY2fxpxineq4oUJFVRuqigFFe6NPYsYm",
  "key7": "2ebiwRH96serKaXY2kuoVu6HJM3TH1Bw3Zzp4BjVRnuhjuTkDdfkUScX667HVCk2rURR5qSCFFwmqgWCYea2GgRe",
  "key8": "4K1DKqA8kKhVPQc5j6iMbxkxW45T7T4815UNqVTSockXcnUq3LpofefEQsL12rMuUjMTaSJ4KmZ5DonW62rtEwyo",
  "key9": "5PWeoXd9NuAnzw96sQ4kSxXwRxir7CfU5xYnLRnXxVEM8z2qc4o65HUTyDAueheRqBHiymEVrm8uTo2cXnEcMbuL",
  "key10": "2ot2VVDLLup1cVZy6zRCBsy9JReYrukHAWW7u19kc5ezparS8rfdC3e8wL5b83NBDsGraFjzWkwFNChhArWiMUZo",
  "key11": "3ymT5qgAENYdcyuEg9rv8hCyHRyNVEFFbHXHQZy5ZWyPoFAiHaE3Nsk66PJ8wm8HfcmVtQXGTzauAi4p2GrYJURn",
  "key12": "4Sx26woYWzAScpxupXx36ZTKvgUkApfdGa6cSrfyA3gMMzN3xLBR69LeCwox17earNDXrz12EaneahP73mbnU164",
  "key13": "qKmc46SjcvnXxQD9BUKbACwtByUPqazm5EMPGPWudkhimoLgJ2YT4HU6dKNNFwfhiu992G9pqPxWGV2WoiAryQq",
  "key14": "2vcg7X8rEXCiRKjUhQYautrbBjpR2moT4vL8BUVJtzJkcxMz7jNoDivNZxogFyTpGvnkoEFzGASFGddpDSUonDhs",
  "key15": "25sG8dD9eQJUwebhBppLgfk5pNDm1yaKSAWnppiKqtV1rT81xx9gumkJtC19bwhMLp7VZdsAED64KmCKWwd1oS8b",
  "key16": "4fziD5qnkmfEWcywZiVaH98yWRNVoeFTRmjwysRE34XNiSstH4KF3sUNWkgjms2tAMTQwdisNVC1GtEaRYghGkc6",
  "key17": "63Xa5LyF1r4zbViRDsmP1ij6dmm17JeWFZj3oTEQTGKP33t7BKd6N2RQNZEXB2psMfiNGKu1EZRqaYB8ujoD9UTt",
  "key18": "2qeby8ScDFwMJTPvSju8NCWAnhLxYFS4YHX7qqPddZ2ah1TGd2FGPL6FFUCPMQCUMDRTdnXzLSzkAAF4MvGFMxpx",
  "key19": "2YB9Yd4BGtashYv695qfy6BPyGUdCDucEAc17xyjHYKbswXN7M1o18GRwEEsgCwaAQvfKhfUPP4Az7Vc4ApmJU6T",
  "key20": "3YMUa8uaoStLDYCxTT8Xu2D173qMi2RjMQCcCUQaGqHitX49FAb8WpZNC9cNMAeUCGtu6ZBPi7TEgcSc81FrehEK",
  "key21": "654fc3hCBh5KssgBQ2iDsuL9yQYdHQU5GVGaKY19iJKVDgGWk6eFJibELb2Waubxu5J1EJJ2GSSyAoNsKjGLFaho",
  "key22": "5BYbXJWoUFYSqfPBbLAwZnXgiaqCxU3BMtUa85bvHQ6sGhtpWyVLYgdfuVQcjgrkpFw8arTnX6Dak3F1WGWCHCZV",
  "key23": "52dBpvn77r7HAepufVum4NvMYiCRze79DYCqNjmmDC7nMqKLDhLtzJ3BgSoDzeqaVGjHXuFG6KDRaTomv7xcbiPq",
  "key24": "31yTdujKAG1SD2HXVJv6jFTCvzF5kYTHf99AYt3UKopKqXEQozHk7y1nwpL3aTvFkBEUvgP2ZVSjrS7PxPLTxewR",
  "key25": "59FMgRDKR9i1z5utDFGTTe95KuAS2syBXJ5txMd825KZHZVbSUjgryywqxpvuBVoSzFhExGs5cHiuYmKUZDHrZ1D",
  "key26": "1x9W7cXS75kLkCj9aufT9HaC1My6K3RFzXVstvscEo4pAB8FW46EVx6rDEZ6HpgbKL9sE7T6iS2qd61SxNPJQ7Y",
  "key27": "59fChNxErQYWPjP5S3AprJAXDqnKnDPHQHYUWkuaEyYTQThfxctJMKZDfTyELBBTWPv7rfFMwewcfHqVFmGxuFQo",
  "key28": "4MtrBTS4dckgx4PVPF8JziyLtjd3ah6Jc1cJCWhh5uR3KkvjXPw9XRcLEpBQVuh1T72XhKo5dBk8hNvUH7DEts1F",
  "key29": "4L7ffjkk9AuM912y4pp6YNmWxJ6rydBiZxdoK4sh6epGgmEXg81bdQ53SFsA5Y9GXD4oXi6Bp8TUtd3tJDn1hDFJ",
  "key30": "5Mezv7TZEbb4eirJQbEYnyK87kg11mYJLAwdDPF7fvBh1pwjfvQbXZUeGawpcErREcfhFAiVDbT1tkfrapUK8MnP",
  "key31": "18FiPoudzSYmgxBNxBndwVJZDmCm5LApnb2aLuN8noDF6DGf6SL5SQY2ETN3uzz4EwuPDoGSBqLryjEuWoWsq72",
  "key32": "3eF4C5Tx8jhDuaG6NBskFkgfQeC1LnySwAYvkFFDfQfCRTmW1w9CDVCKbphAyexybCmKrE5kTHrA8huSYhCi4u9z",
  "key33": "4BGaFr6HNFtprXpAfXH38u1TbQf2Ms6C7gGNoAgUcCgdr6xnhTqEhoN1Y57Sv11KapDDCX9WanMZBwyuTRPJwaiv",
  "key34": "2W6wWLTfV4qzExGLf2BUuQan5TjV74ChV5hJuWyMyhH7hbEjzAxHX5g4WaBxwDYtRCpokiZBeVzmXKNUPP9ULztj",
  "key35": "2KQ3SvDGmvBeNC34buWYqFDyAZRdggEbBhbdWFniqcGTbC2DXYmPzKDuyZUhHPnabtVLiYP3myXTdMMeiJXT4hkw",
  "key36": "3LvBQfZU6tD4TN62xhgfR1VvVdi2uQStk8cU311WoAQCgbrQGUC9ica4VXWwdwtkg3x8rdASht6M2XhxmMYMa7Pk",
  "key37": "5w8aFLuY3NUakSUrHSQDfxSf4QskTQSuomenifCqPKo2ccVQnAuMdvW6Ywa2hNU7nhdGWKNK7L1ihLah9SVvaVS2",
  "key38": "3SJmxFwsm38A92HFTnpJtJKg2UC3F6vBVJSYnJspUz2kubcS9u2hwZS7EwEy4cmbdR9YLouv9F25D6M4RwHYihug",
  "key39": "4x8WJomYUA5DS5Qi16ccekFjGnnVjiPzuwhEgMrb7XfFHJoimzku2tmyTC7ig6vvuMJTPqVckEg9zRZFFRzUMQL6",
  "key40": "5X1gJB3D2SfmnAdtZLsDoGNSwp8huLMA3YsbBxmKgFFCXR7Gxco3UvpUCqm4we7z7uDzhXhVijVCCmWHQkRG9ebk",
  "key41": "2JoqYc7KwG3bo3es9N9wmCcGRdj3GifdnHoaMXaBnHy7nni9bJMXMYMrs55Z6yJVXw15y91rSp4UGRopgdGP8WGe",
  "key42": "omJwCEVgxjN1iPMFsX5AeA7k9cyVirWs9F5TfqwjG5hRVadvzkQ1eHvcYFUjWX36gvKbA9qCLJNjgLajc7fwqUA",
  "key43": "2ZvtaThqDNFtSggxSSCwhrbLVyYdrs6GLhzy4sg12FGofsWg62mE1BKJ9u9HZWF5j79yGv6zmysQCMBvvL8k4ZkB",
  "key44": "61znybdidE1cWYXi7w4YELbRtSKnUL5VjVDpUSjU8AiCXpAiLXjTfWE7USZ7ufDLSrv6bLvDX1YuhWXoYxvUvD5z",
  "key45": "2cLNMoK7mL7wQ16S4dZfE86PHpBLqiPCCjRU8DKb7HSFEsD1Fs4RjToxonQkhem2yqaxygRQvj4mjwdyu1nSxFMk",
  "key46": "3URuALaA9KKMzD9LNYncL8hY76D72KxMtxs9baVpti6XifSWSvtLMhRWGDYXi7f7SwgBRv3j8UUjpPR7YqXFXRdE",
  "key47": "44RBGWtYRcVVUw86agwvdDo8wT96zBVhRCFGW5EXXQ88wk5iWJAxZkMquWBcBYwbb5XX8JDxFdhSBAi2eVzf64Uk",
  "key48": "39nLhe1uhwVjEkUNGcxFqfKkez1jQpuV8UU9w2rp44oFdaoqLojKhmJsJ4vE18RihW9g2rLBz24m39f7uQZ9asvB"
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
