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
    "2bSXoQ9oqqqgVh5BZBwjUcKwqKqoBSvWDJWk4P9iZesXkiCTBka7KGs9QFHn3PeVoM4Fnyvjhs1dhEJUgfU4V2wk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x78ENh1pqjvTEDJjmV3nvVHwq6DWj9UreauWFV4Ti33n2U7SRoH2EpFNwVsBw8S9W9vuA38ZQWhoVke6cUQqo8p",
  "key1": "32sgVok71qrZrKZuSiVU6eGwDZkEWLAPWqRuKwEY3CfW4p3y2utgz7pxakQz4wstMcpGiuWxK7XQmXnggohSG7HP",
  "key2": "4NV9EsgL6FRj2npo81eg8CWTcbZ2oXKwryUhFmGoPVgt72GLNE1apGvVtrCp7TWWThKnpdrWXMj224XL3hQQaAnr",
  "key3": "65sNLD5RrSKRDQqJbxUuJ7DZ4ty9rL5NwuYQd1XbJonvkacazpNpopjgCBp9znaoQe8oHDDsRqqvkcaUfERbbtt1",
  "key4": "64Jbjji8Pm2Xo2E8PBHPNBomRFWSsthnTNqsyNo4SpHYSq9QnUtyo7yHrSyHtWbxNaS1ryfjsB3Ja3cXqeRr3DNj",
  "key5": "2UTpCPfgNvMp7NJohHeJqQUYVug7Q24VTn16VHZQ11MA8YF7TEZ9LDM7VpFQ3fqd8VmXftVukwknMoypLNQSo34y",
  "key6": "4uJAixJ3s9HLruJ2URBehrS7bTsYL3p9dA5e73DWi7dP5vUkDDqogrjRhnjLuGacnzhdk3kMLJS3rP5eZBU5wMoK",
  "key7": "2Utoce9HjbryoNPchZ7EX3ULzmeWQv48g9XWCs4VpNT4RbvonserovqiQsHszYzSLDSbUAUudcCmTdhVRUYzXcou",
  "key8": "2ZZ94Vfu46omgrsGQYkX2nJPCE5TUho9yzXiG9AwcyxGWacF5LkvGndjcNJgnJma6PnNDKqEJ5LCs8s1vBEFknSC",
  "key9": "663KNVvgquwHQ6Evv1nDYgCbDoS9J57RQkj1RqXraDvZBC7SQYVDkC7TKHQgbhrmAWrA24rnLrhDH1P5wyypFJ8v",
  "key10": "25KaFDFpYcV42MhHmFAxL4SUE3cgXZQw3DPpZ1moEjkGfRyBqnDiZyaPCX5xCUGVBYmj7ifnig2wTVrSu8Jr3fve",
  "key11": "3qD4n7oMUBhgvXikbkcxgB8Jbn9BzjdbDYtHrHsueo4SyuPBi5GaD4nvC8WrxMNK3jrjDwV9ubkGiq5BizC4Grgn",
  "key12": "65nK1rGWnXLT1x3vUD1ew8yeuiQV7LvVj627zf5xxqP6LmVLSoJ8NGs9q2ighCWZkGAAb9PRBq5DutDBVCzQEZNn",
  "key13": "yiTSKTLkoXFB7osP6Xq2SjL3MC1pjxioTZ8LipGY3BUHViw1Z2gSBMtGx3o6eJEXjSUcw65tnrGouWvE5hkJunT",
  "key14": "4ZW19ZvSQ8mTbBpzHRpmFiQ3YSW3CSNGaTvc66SHRA7EQU72THnG8Fg2Gu5T1akPZqBKYHtUo1Kyz3iEbjCXKnsD",
  "key15": "5h1kTBVYasaUScmunZWEVx6cWykb3yFjTomizK5FfTTRwRB5cGaTd8pyhuMPDznkoPTnPRXL5WzpWtg7vzVhTC19",
  "key16": "2ZrznLETLXeZAnur2XUcfDFdQoAkz6SqdmeSikC45SRWDG71k9aULMAwAM7KHxWMq4Rnj6rE61eiU5avXBbiLaWB",
  "key17": "26zuBadZKmCfEJCeW4vNAxRWDADsQws5p7ejgYC7JvHRoh2bs8Q9P3qAhXBNQwQkVJuHS5Bt12eWRywJPyjWP4cz",
  "key18": "3rzinYZPijm2LZprA1ye8o5uYHF3JUmgnBhS8MaoQSFag79dqH5is9cX62v9QkwYNS5Y32GSgRNu4v9Yxy19qeNn",
  "key19": "4gfxsJK8SFKTQ6Wo977bdPx6s9zqQqYzDqiTGyB9gJ3A1dMZGijad5G4iST3NQh1ZDZx8SmGiUfa9pANajC55py3",
  "key20": "3BpYyDpfXdrpMyc37s3k6SKPtrv5BZVJ5nwgxRm4brYeCngQmoD5W89v1xB3u427WmWJQ13BGnxk9bDZdkidgmZH",
  "key21": "2rLLGMEeozYKjdTF5Ek4cGYUKgdZbhVMfbTZ7YmVEP5269ibwzrcAwhhnEYTZm3sSE65ZbBNqhnY4XZyaDSJ2sWu",
  "key22": "59iPPqmxHt4eB7mytvG3VALK5DrGHYmvpq2sCfNSt8QpXA6VrKnK7VkRAuUv2VW1s51dfh5s39tpBob7CAkBxqte",
  "key23": "2Ug4hGnMVnX1KwysTVc69kULD4Jt1rztPpuCt7RefvEs5p9i8AEmaqQ99P5QYeYKTjxVABRp97eSkd2bt5Z1byAD",
  "key24": "55hEEbS2bbPhhdmmASpgds1tcbAamHH2L4jKT85iLhUtz1HPiicZGySBS5zX9x1bKyrR8HDMrFTnKce83MRuZWbq",
  "key25": "3rEKfPhiK7zDbb968ZJB6QQqUmsb761c1FgxGCFtFBhFQGJY6KsCBUzuc9Cdm3JeD3qYWdtB3g5mPT7ScqWJBSUf",
  "key26": "44y3ioGV2zbBszNwmVwHtsvMFTQLejNkScHNPAdT3WXgTWeommd9P93HbtT9KekyeMfrCi61YzmDZ4vficLKY4t9",
  "key27": "Gp36i7NupVdohG1QNrPWAmeUCBnp35CiZAATQ8MDCgsxWUZJH1izhvirUyBRD8EkzhwAhvdsRYwu23Y8SpW9GAL",
  "key28": "669FuUf2Eqno6UEoW7S9NsZPdh8f7eM3snt4W69FyHJmJhHBonTp3p7N66zykDz5YeQqepGA1jz5TEvy2YC8Mcpr",
  "key29": "21nNk6SUcwpuCS9DJXoTCoVW4uaaNK2VPWaLswZgxfFezMAEeRKfXqFtUucRRRfKXNUH3e6eDDkFmbWfKzcJW3uu",
  "key30": "A5ATcVc8Hd2WcpR8QZfdCKNYcXihvsv93pS3BXSSL2MoeggwREdXV7pav1zP1djBZiwLCsCCgtAQ9mqSwxDey4m",
  "key31": "46tSqt9WYUL5NMKqeuWAjBgtntkDZ4ThfoCuScFCawo7HJug6PGU9vcbq9J1BgSbEBhVc9zzPfPkSwq7YLyu7o5L",
  "key32": "3mPeon2Z4xV5TDomknDHYQgvga14BpCStjh91LzQiq9evU1Hr37Nqxuu2hmatjwZnbnxhQzvK3574FCrDi81JdcW",
  "key33": "2h2UBQxbH6zpXLcXSXKGTAmKCFMW4Fb2NSvJASLdJnLnTnutZPj7tF2UmkFV8VRpEvGRSP2EkDUqWVLRzB5sbXZ8",
  "key34": "5jZNgxrT7S9E4gnFbu26egaJR3hKMFLAHge9Phu8QdDhSZw8QMPWoTNDQRTPJtbMnXbQwDq6ghkyQoUwiymaoffv",
  "key35": "2Dm5k3MVbrnRXyWyCfjjBtmT7r2aPqjHhj4SZ2ubP9o57gEy6wbWwrs4JXS797GXLB2sWDEcqb4u376GV59pDeWs",
  "key36": "4JPTY7AicqT49mm7pABPQptEXzvA5Q5K73qhnG5Do5foLCXu1QW8knRA9kzNk55tnxLeV1brFN7g9pFZoKHAtuvT",
  "key37": "XpruHJJgXpzrfFJJg7t5iZfJADrcg2oR51zZb8sas3QH2DvdVjaqtiByd9eVnRx1JN8uJhtXF8YfYoDxYwqwMxB",
  "key38": "4zd5yHky9R4p7gKE8x8rwoVS2JULTiim9iey5mbMd8xKLgpsXkEAThUSKQvSYMwbGCnfAStfmjnQBuiXKLzxHvVp",
  "key39": "242vSvFDZcDb3PvswebddS6Qntx679CzHYof3kstTshetBbdsR4nx97KXJ9EVN5YASwzmxZCUsmJQP3kQhTtA3rC",
  "key40": "1K6uBdbEop954uR4gfAbQjaoqSPxTvmH5TfsFKqnbgfTN89R45ieeaLugW55hVAC7j982aGkEmmKn28ef9XWopG",
  "key41": "3X4kigdXqmAu287kWghbccBXkWgVyMTmnWabzoF2NAWacHG6FdVEdXpfpuJxrNt8a6D5DfKszKDBenfzEgHu7d66",
  "key42": "9G8JcTgji1g8SPmxPrhet766xutbdrkiKaAZxxuDfZ1sBrPLqPnUjdkZ4YVygCspZp3KNaipumdqYgsB4EC1QUi",
  "key43": "2LedjHhm7UF47Pr6j8oubyZ2YfS5eEAmmaUFms93mNphX9rsqM5aqTa4mPaTJvR8cmpDpVebb5qKpkULd9Fes1zb"
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
