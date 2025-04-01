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
    "3uGgB9MDXL1uSGqrm5eSaVzreG3eJv1NGQoBy9M5PVbMAJL3SmsSJd5A7MWUdF91AzwVwWyKa5rxXR3jkky8uzpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "583k8Dae3Lv6gu437BiJB4kiUrPHh75Yo8bhZprUuJnrhFZzZQiQmPio37oUsfKdVJErG1QskKoNjbJJhTSTPAKC",
  "key1": "5isZ2NPKYU6KiG9tL8io7eTmZYTwUqMYdN1SRJjtund93DLACLcBzJG957m94tQbTiFn89Y8HC2ErNR3KNwrmNTJ",
  "key2": "56vPT3pgAH5kYRVs1fGec4w6xTP1SKqzEBgxXPc8vm4bPoeidJii7p8PGbD3dpdaJ8dprpCQG4u98i29mZ1BmmpN",
  "key3": "HAS97NjSmvMW3tohxLnCZGMvKsy6aNkq4ux4vLzVn1GrLJUXgTYjiHGzjvLX1SLJYb3PuYNBCWEiYbTmBcFpFUG",
  "key4": "3sFPWKKRGeSzDYYCucQiyuvATqiFj925riG2NhsC3WuqtJPCUUAYe8ovEn6A7XQycK6iCfXfi5XJMw9F6anz4hUT",
  "key5": "DQsTRWpoPzHmTsPBgnGkAq1zGdo2MetwoywA6K4PcTQPXbDsdw7xiSP5BJMSnSh6nahXPSLLTEdX27ubx7KC8Gi",
  "key6": "2uLYm1saMa5D6wTdDiXhBKR7L9JWJQdHkbnGEaAQb6EkLPbFScC2ihWWgcgKHnBYdpTzUNhNYyKJamm2ZXUfHbRv",
  "key7": "2kVZxVtCr6TDS96z3V61FMVaYLoQ41uoH6bC2QYUC3MSnhThBd5LWzT5AbtiJwHhowHUbikWggJMjsHp1hWrpxSx",
  "key8": "4rmbuXrGQhvceiZqc6jkNjNYViyRQf2syH6b8fGReVLoZPag6pyQAZ1im4mJ7SAMKjSHC82fbZBRAZgL2R1BSTjN",
  "key9": "58t3b1yqHm6Jm2t2TRxZ6EFbMoZkYWLk5FyMQnRrWuEpqdD2cAy5XzauSterD6muCDkoKeSTR4jcG8Kjq9z6Pe6F",
  "key10": "5BeAHXfFsfHYouc1tGXdKfjxTV4w4n97wP7zB79BvbyG4iy8B1dKomPeW61qGQHu6u8B4CvU7eZrqHs9SFRdcsZ2",
  "key11": "3vVHLQY9CeaieX6sa1SCozaZE86T4f5dLARJ2pP1UTKeHf3xgczyvfp5R2PdSwDLKfsKoyFVYkjaCpEGZMzJiX6D",
  "key12": "35u1jA5Zqb7ZmnRZh71fNcrrE5z5wLaP12HStZLch84k31xey4YdEyZ7VSCee3PwBe1dZBctTyZAZRjo2ZjW7Kkn",
  "key13": "uyEg4xjz2PeYh6KrsmjB1qDzwGer897Nkj8Jzs2HD6johoj4KwpdNsALD3pXte2AD69SYuRjgmYqb3qwVjQQurE",
  "key14": "3UwdBdgKRN4PDFZeYoXQ9x75rtXFik5JxwP5q56dNR27HouTbPyfJrEeuZpg1YKE7fPETYSJLS8Lev3eVco9FEr9",
  "key15": "4Yygt55D4UpGAsYtfQG52qJHAGm2s4KX4GRLUB5xWHEjmQGLi8N8bW2vpPa6iKjT773Wt9vZDCNVtig7FNqabvjR",
  "key16": "3cGdDsbW6B8Dthmqeebc512KvEDRUjk3BoVGGHPQ9vJQ4BGiYkxY2io9GmE35yNRUCMfVhgD5S2k3e9LcgnD9SXq",
  "key17": "4Yj3usHZXytTys1UAmf7EGHKkMF6nfaFoLjjz3qzoiqqsoqrSbqijHd4SRr2XfkBdu78AgXdBKLgqmCpE8F3tUuW",
  "key18": "2PJmw9haaY1oTMTUViS6NkEXJixBcQzwkj3k51hXmTtdPMjHcmzj1ocDeoGUXN35qn74wbkbMT5PF1t6i7zRCeX1",
  "key19": "5PKRt22itPd2fzhSTe8kP4QSvHYDwM3sZoetckMPocQtUcfERbjP1422jqbUANkXKCtP6iWiz2qKu9mfPcoewnix",
  "key20": "3HprxhPh3XQn7qZBQqogB2QvECCZhi3ApFoYvgHaYfkLMwPByw6WthzRRjGLXeALxu61GFrtUY6mLcTfvBGvCKie",
  "key21": "5DJCFjaUNmbB2azjb9jwTDrTXxemHciHsqfBQvH1UrTCNWD6j5F52qWWTZJg2eUTdJ2TGbsmhZBPd8EnhHRozRjh",
  "key22": "vkFfP9cjv6MjogReBDhG42YZFR3d7MfaAoGenKheEzBazAzddkqvSpAy7MkVArSsFjnwxVJD52zkyDmimcTj9mG",
  "key23": "42AixXaVi6CgHDiJxVff4SfF9QP7aux3NZXyYUsUzJnRgJ1szGF9HQPLCfW2stAv459J59mn9JYJp4bggLAEPni3",
  "key24": "5jLmfMqPsE3akbK8V2PvwWLyKXJXctEtXxL5XQUdotryyNTpt29LGHb5jFHYkbzbJVmURU8Foz9RREzbaDxDFJXE",
  "key25": "4vCzgkgXSTsKQ3iFqFEdDrxiPk4NCSKSoq5TFyDHfpAXSAxbJSuhuXgxjEZc9LKyVjwkLsvPDvMt3zMrBuX7P53F",
  "key26": "JEv3ko7igBMD9nZfvtoMcSTdW8tFov24gxi5VGyX75H8PCi4yfEaR4tJJAm4kgHm29HqPK3zLacmtVt8vBFYNY7",
  "key27": "2MaUQVZRmhKLVxCmmXLx4ywqNDYzTRoWRLu4gfrp9VpX4pYrDDfRwDPHR3RhF6sHsJ8yWqpkuD9yc2PUy5TSXQ6Z",
  "key28": "koh5RYoKNwYwZzgoqmRQC7u4obEEKEw87zhpP5GDS3Wio9VbpmpF71GB2NDMqufdSXKBZ2A55Qf5yJnrep12XD9",
  "key29": "4Ln5FJUEmZfQm5JQMJeQLdsaSnEXyniMKmFM6iqmJhGTPnspMq8QNvbLCVo6tKk3nb5DbTAa2kQn7E2jryiwMq3J",
  "key30": "3Ke9BGe2vxBer3RwuUACWPH7ptJitdbEpJwJD5vQDFzxgFS2JtVCJdKNdz75VKJJqtvZGDS1mFv5cjWo9fhWXbus",
  "key31": "56XYhuH8rMUBpSXaJ9gYMF7UUjYfXak4pJjCatxJHDvxKUtRMvNnzSh3HUMdNRF685Kdw2kxzYHmSa8yrfarTs1k",
  "key32": "2FRDhD9wLHjbrUsKRL1dUSRHcrWkXt6UJe1ckNRYaadHrvLghp4SfRucodiHpKqpnjmc1BVaSBaR8p6xBFPxcFVg",
  "key33": "5WdwWKPkxSADfmxyMkK2Cg8VBkgis5CFEy6fpbgJ6jBnN1bH6cSuKm4Fa6ErZmEQvsKDawcYU85dTRfRwyJ2egLv",
  "key34": "3FHwhRPVnHVbVaJUuh97xsJFYuEPHSyVRa64D1sMUNU46unjSwjdds51T65d4PAa4UDozUZ58ueN2VxqfQubtGBj"
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
