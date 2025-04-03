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
    "3jmYiQyG75YCLqM4ZVqPnfS9isSwPoVv6TNGxPcfU8N67YrUpoenkSAGh9mYZuPjcGXm7STDUaSwxUkj6sKangUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pbatg3aDHSA7BAx1UM8rEpWPBk3MSpLKdv6rseAUEvXVf8qHGTtMYiLa3hupYnMxg4mRC3ZBc5UBwLGedmw63Eg",
  "key1": "1JMMowS3z4NGeCDD3mxc4aC3SLDV1vwKoDCXaD4pgAJKermoDxr933nEqou7tcamFqYAk6d3X5N6cHRVCSVoCgN",
  "key2": "2EycdEhfwfk5yfPxCcierFsJnWM2kCjQBNBRKQegt9W8CtyfLtsFMfbaCwzAtVet3ufb7bTCRWk9HLacM3kJ3Dku",
  "key3": "5q5g6ff8EJcpDRkMm8rVdJjgokHYSShP6ga51SQ8crtRh8ds5gUiiP7KL8DWNPyk58yYY5jpa2wgAuVr2Z6SyrFw",
  "key4": "bwTzyz42RN2VX6rHzdNqnCagzCuMonkh4rMQNBuCcU1r5yYTeuTpMSEGeRhJM3w3QLuo42T2PHqv49SyaGRTfvo",
  "key5": "4FiEzkxm1gLcYEdoDdWvbfa8EM26GCg5DayCEMTKmuW3pw6i5Mj6KcPw4vL19KZGWNHJD7cpMXwUvfWJNqK2oKF",
  "key6": "3QEVKWDLABP2Yc6RfmWNw2XidjvcqQC8PhTEetFFBuuuC9uJ9BAXzXmAXGj22P5ECHjexxyaR5w9WSJnJy6mP9Rg",
  "key7": "25hwx3DwuBDqysQUvxFBjaTz2yyj8JDtBmV6Q4rYmnCCJhmSCs3DjCJXW2qTvScYeM3FZTaqW1grgijz3M865cxq",
  "key8": "5DCTE4hMgdPAsoEqvnYYz7iz6SKyCzSLasLSntr1t85KP8xBSw56X1jePyAtqRZZJepkNGYzz8aQTFLozx5vZ5P5",
  "key9": "39sJQZm1SZgEDTb66bHRnYEujp1joZfTzbjdnpXaTK1dTo7zJp4XD9599GtYNTmn2JXTmbqnf3DcKVyXkVHWYTPz",
  "key10": "2wJnJnqsv96a3D6aiHv3wPx4Gr6TCY6E8Ldq9ZAHHSA3GW6AnoQuHDhtaYeYC4mLDB6PpKso7BzhryqNPyfSqUWC",
  "key11": "5kqQTWzCHTanio3ePnv4wiShHY2rQmo7y9zdbo5FpRLxuW1gm3DfyuosGgXukzsRep4AhEbJs9NtbRsCdqcyXLqB",
  "key12": "5wBXLRACZEUEL8G4CQQ8NsaJprLosWB9jKWxQb15cdSgWCf6rq9WpMUjXyVPG4LxxuKW3F6FY9F4wRmjoKAosDqJ",
  "key13": "3xXrEGZtVtcdTannnCA2sB583iLvZEz4gpcud6M8LvPPWeKwmChjUszBdCFLqw6xSyni5isQEw1de7RNaKXi9k5w",
  "key14": "2PniDoDmRLdL7VRnpv2q2G5VoFSmzy6KEdxU6QiZfYsq9mQ7CgTPNdM57YXJHZvAQbHVkEU2WJFmXWER7frpjAuJ",
  "key15": "5HxU8jTUyUzZZ7vApSJsoNsbJGhr3Y2BLzQMBrwnECeUHLdv2qSKbf2KAWFUMVWth3vr2rQCygZComFw3CsKXDR",
  "key16": "23dkyp5DBVeMfyj4TY2XVYNRHRczdDHs64phF4WmL8E34qjobHtR4cmdPn3rjnjpv1UMvu9UgaoXgd7x4BoMx88D",
  "key17": "5Ep3n92bq7mhMcA9WQBmrPXU4eLcDbcQH8iaRfeTebKgAvFKBSs7VaKEUAuzXCYRMrMRKozNXAApyW9w3Fvofqfg",
  "key18": "ZdscATdCc9F7mRynGMpsHUDFMsW1minpXriwAaEbiFsTsWxYYQP2MEdjcCCMEkRRtjh4i283W44z3M3pqSG1ZQS",
  "key19": "2W2yzqUqY2jbmJTvKgdSPELjsonLYARNXrk25ynnUdkqqGim9GbEG66BTUuiWsqk9ZkrsQgzqqxwvFKyG3c32XZy",
  "key20": "2X9zAZjjoS7P2xzVqNPSvYYfeZ499fcYQEH6K4pFMJsquC9LeEj8pVvKtDhjCvHVwmZPDfbF5Xe2An5TRw9h2Xok",
  "key21": "2aYzaX2Ze2kqphQV9Fwxh6VCJwEbMfMbQsyXe2SDQE6UfCwcjicdwxYYisqXwQcVC7fVkedNRaazqMZfZp27PjtW",
  "key22": "4pf18w9UHBmxZwBUcNiyrYY8a6SZuTCWUHYJVtd1bV1BmJcEX71ukUVuNTQTPocWTroeNGR2o1HCFdeCVAYR2874",
  "key23": "3hxXeu4Qwd3Z6ViYbUT2nmYuA7bWkpYY3taUCeHJEhN79Jp9ucfNCEWo9X7Rszkw2CuG4Cs1WTBJfEQME8Yzxi6b",
  "key24": "5rG98w5VKoz3zLeAcrE2aV846tG5LWb85F9aM2vE7wzNGVZELqRgjgNDHzceZpR6vkX64EmUd9msyZ3GJgeu9KJj",
  "key25": "5hvYWiMq8DEi394w1LzcFopvjWBv4odqvLuzQmePCZpvZh5TinaCNJkr4mJzQgimpNQqUeeLLDHWAKYKwp5JvmU6",
  "key26": "31wygdfRwx5YPmyMCTKz4CRLPvJQDiMbPBmuAzvHGzoqwt4B8ZqMpyZvMDTR8XiAwJ5SeHZWNJ9sG7kjgGpqjG6o",
  "key27": "2orGiCsFwXorzPCNAmCKRfTVdtYM4k3G9YC2NbxmUsccmxtqe9Qirv3jLLRCAZFo898Vwk5gNiQx77hcLhPwCd77",
  "key28": "5QgWkhpRnaEU8HyWbYv8xNzh4fJKZpnkbBffwqdCsH1Us3wwGHfwYqRiQJi1knKudd7VJMbytkRC7KQzmC3uZNPn",
  "key29": "3uF8f64VoXFeyLXjGmwLQ7TVm8kEWDWCDK968qXCoFk3dFHdwh4con5SNyV1w4W7SdBQvqVUurkMvU1YGYXJuoGa",
  "key30": "3RyuF34SXRSDqWaE62GXjKoHC82DDys55dm2wriPTAuX9M34UKUoHBvpxGNAM9vtMkAbGw49C76HRQopVjTDNyma",
  "key31": "nAdGLiHtRdtWZ5wHvefde81fK2jgPK21rtRCCVEq4wBjr94sLBNKpbgJUus7RQWVUARsHYwxcY5prYUd8YXUR3J",
  "key32": "3n9G4ddZHQoRDw6UqYRNKrjMixScPVw95Cqmbqmg45bveJvaG4bRJPY4Akfi5tJybE1Gm5446WxjXuSBs7Zc6tmZ",
  "key33": "2uEQJFPHXxVFU9q5yKiSDiRtS8uqvzSJvEKQ9d3swQpw29ZeJVygiNJGfcQCar7XDjnA9FrwdpxoUEcTmMLNeqEQ",
  "key34": "5Y1cg8zQMhrUaVxxjArVxNz5f6k8PT9PfH7WTPtSyZS9CSBA4YyWuEUzLbUXuzU2ZZmzveP6fAqh9FFqNQUMWoMg",
  "key35": "4yc8LHjYiNwcTeRoXgzJf5FNCJV9Yw2WAoEzHMZQkT29XymNN4F6UbCRBesAdyeMKbVyRxG2cme7npmXKPJExgGe",
  "key36": "56VXfV9ycWFAwDyJVVMLdXQEWpbzH84gLG3gpD29eF8CYJ76XHmQkWWyYQzsWdDG8mNFW88c5CtpxeWyqWr5aC2Z",
  "key37": "gBYmbn2CKhEXZ12h3p1dChU2Kz32gTccSEoi1fWZ8JrAutCqwLA3yX5JDWrGfkcEk8BnbsSWgRLH2Vu6afTyupd",
  "key38": "qZTZoFa3xfR2ppeWyGxqxHXRnYEioyoeJrZmqx4bJZoghvnerftdFwYQfSreCRmjcBUeYtHK1tXz7Ub44qrF94H",
  "key39": "3RGJfUAi2iSsjTKbpQVc5w4GpprN8p4ijSnet3r6a8djYHBVPej6LdMv4XmSL78Loc8CmcBhoHrycx7n7kSxKNEa",
  "key40": "5TCxuizxbXVNxyjdowRdPkKEXXczwue5hRVuCdQh4AxUXybfEfxNJg7piQwpbkCy6CFZUHBUzoD2pjhBpGS6yeRZ",
  "key41": "3HqDLppvNqJKE9Eee9UoszTr9kPbgk64H49SU1SgJMwspZ2d12ENzfS9A26uVtB2aibzeMZahiGGdBHAPK35UZQB",
  "key42": "3zYGFnDBXmsgypBs6PE6G7WQpU6GY7KqYCZWtH2yJsgcnHdn1xGxN5kXRAYyES2qcXG3nK4YBpNnmsFCiTrV2nCn",
  "key43": "2fh233ZqDaKCkRgtTE8TLKceC2NGkarcTQNduuLrX8MWRSC2BdR7Yb9NH9CPjcNLGh5yTyjx7uJhgLksQL9cZjCG",
  "key44": "5vyDt1VsaX2phAr2YC71XGzoKKAP299emzKU5JV56ohF33hhro5PBY2aMkHpFn7XYNfT8kAjVDsfW9LuiXNQZPqv",
  "key45": "5kpvVcz7N84zCFFBLtPA5t8J8yoVAVpgo3bYPuo57qzhoEJQCjA8cnm2cBcrHmgs9wpW1fRmAkHQQghmSUAnWKM5",
  "key46": "56oAB11h3aKQTgPVTW2pM1gg8tZWhCx6xoh9d7AVU6z9bjEeicFjAoToUqKZWFDvFyp8tuBZx743WDPyDwbsoxtw"
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
