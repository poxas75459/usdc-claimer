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
    "3h8kub7tkjyUbRfiC7EPGoMwQWBGp6SH22qMSjc8ehxp3UZvg35zJ46gm9fkyf9sWn6UkBDmLBF6TcCmRVjhDuT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n2JQmeqj3T6ib5MNXH3enY9eBp4TMnAHN4JVgnFetmv237dPhtdJffYQ4CeQ4MPJ6ihXn8LHhdc4ypMHuZVNbgn",
  "key1": "3z8sjob1WfHmPXhmzLBN14EcbscsjtcsDHpVi2qVUB5fnvcpaaHXGK5814h74VPz7M3NmAUYPkbTaHUyg2uNcp9q",
  "key2": "4eGuEtujFwRrsqsjjMjxrbYXauKBmGPGQHpGsMuUthN1WyPtWu12sVVep22mKh3MoTXKBj11aEhEiNu15s2D1ncN",
  "key3": "4LF8cFqNegVCj9J58nFp7ih1yC1X6Nz5mVMPNfmdeLP3DY5EXS7QEbQX37bHYKc8tubHKVNkx26cXz5KjqXSLZ4x",
  "key4": "443pgKtq7ATGdwUaPfzngeS6Y3DisvHtGqnDkAcYzyLSt55gVimcHwnGpTuPJdYfhEonQV8KdigXVX4eufK3uJTQ",
  "key5": "SdWBK2Dii3n4WA3RLGT4RpweEWQhKzXimQPmbwvwyaarDPefa89dsNrK8ZwqrWXEVt7Uf78ok6Nyisw5eUEcYAN",
  "key6": "29Yq495DAg6kTjUSdyNXAKEpuzGG6B76NXgoGn6E9DnbE4z5pBZ4QmWfhqxSpfFN4Bis2J956hfxBM6pV3WegDoW",
  "key7": "3DthbQGJvuJrVPRScfuP7416b77EjrPJjQJ5YbFJnbQYLr2Ab39b3zqtSff9WDuJ9gdWr2cbDoPVs1gm17D3E6Hc",
  "key8": "27xpqvPeLC8yyyVfoajYwmvDGwdGQY5AvkEUEhTKNFJ2hRaZeqPKLk9V81XSozAjWZzNKeKJRoJuRy99zcGW33qn",
  "key9": "4ypM7RPgTSZLQGpj7xFvTmoAv5KVp5BD1bHR2KJhXb73FWeq6j3zXNrYaPiD52TF7Ca24NwfZK49MufhFBmZEbZh",
  "key10": "2w8kWjferT4vktqqN2uqkwCBEauV9PKBujWpMV9yH313ZaHYghwRHiRpvijhzYkQiB7DCEw3Waa8rWPxhbEMJ8eL",
  "key11": "3dvKh24nAumwkocPATgiT5536yXnv4Sj98HFSYVRSc4hRyAjQBgZ6S2aBoPSb1auira7EPne1uTPPHRNzQSWZLYY",
  "key12": "2DwHeGrA817r9WPXYMYQhQT7wKESYknsjd55Xa5YWVCPCcwYv5tnPCKGY8MjM5xCA6zMMzqRikM1nWuYwp6zfJP3",
  "key13": "5h7JVfrditx9GJPr4t1Fe8rkbCVQRJCZ9qNK14RhiTFAm7f5Pa87Y8eofjVLiPQ7SgvxSniBikCAQNjw1EFAA8sn",
  "key14": "2rqDDDR71GWDeQNYLWih4BjWdASpGheeLyyccTeG1W1Bq6L7CgAs9uYAP61PGLxWhYHWCY3PWDvUWiVV4WmPybnE",
  "key15": "2UzZTtggxfuiKwfctNrZYFwEt42tqf9x4DUJYmgBQRywsh2zAwA79jsDoZuMVUGYZBc7hMHVgb84fsDKxePCxab8",
  "key16": "3d1oVDhaxwiqDjV47RXbnFr28sXheukMSixieYEMMZTi4aZ4v8KFBaz7aLZhAxzkVng7DSc1tktzjvJNDeLwNHUe",
  "key17": "WXijGoFDnTBQ9qAStLkeN2e95p1gJ8Yj9d3x2PGzQkirFkEaWUEfnRhJv5orDMeniCy3AgYGYBKxeFcYuofwBQs",
  "key18": "4NXq8txftJheicQbiCwFdEz9XPRZuQ7DC9zsGYTehNvhtWL4fZAvCj3ck42wakfCGLQggirFBZmyf4f9pdjecSb9",
  "key19": "21SfJoHC48HGjsLaVo8trDWmGFuqThLPS15E8qs7ae4PDhFXkvFB8BsmPjoWQ2UhQXxTFAVBZgc6oYeKFnX1atEC",
  "key20": "2sV9G1cYzjA78ZaWPoJHmGT6qyzjekwCJa9na7mYhTb4xUHCym4PJ6whsbyyaYRQ5rV8Vx1hohF52j3RcHMzt15u",
  "key21": "2CxvohXBwEgj6zCTh7j7Y94JMS1yrp7dP2o4Wd5ef7hBg7ZxNqyTFykbfFA62D8mDWC564caeQYir8MR6v6h1n2z",
  "key22": "2KLLruVBwup1tyz1VPjWMbqvMhoKvSJpVm2SHBdL4n2zswc2CfUmKeV4fPg99BUdQtUz1bAzmSwbAm7DWG21rhZ",
  "key23": "5mbcUQwsZA3fGt7uzqNduyFXYPSCxzQYgb9btroQpatEJiy61rFLZGq61KZBHGHU6F5w2PmwkpCqmrmn2tNoujeq",
  "key24": "5FFFcaWgtfRMV6GppGiduXEXsoaNm3RGQ28sKxvGNXre1eU2ZpJ9izDYxuVEwqpDi686kcntpgjevZTudVoeWgjJ",
  "key25": "39oN1kj8Kp1yCYeRvuqFQLQaUaQazKe7YxbWBybzaA89anT8ERZCoSk1kJyLR4XEcJwhBrqjW1TYN4R4mCDV4bXT",
  "key26": "46LJaEf87SUBFLYUNHjCwEn1KD2Yt4uZtseJR5sozDsPQ1oPGehBBgbXqqjm3A3CmdtrJTsrunZtxwimJdonPR7r",
  "key27": "4MJo85Vgc4YD94xNMXcM5xD3WUo1cmtJ3Rf6p1mKfmRK8SEJ5eif7Gdogrm6zSxPauUCRnqHKssSYn2VGFiLVz7Y",
  "key28": "2eDvsrWHGGJckg1EgWpbS3FLtkLgb9Bb7qDyvZnM66LCTTdmFGQr5RSwPABUT86aBLBjVAudHAPMk9pc7rzXR6Vj",
  "key29": "2JnHyB2yicF6L43Xe8GCmcTeMkFHk4nNRkD3jSowuvvvqK85siqxVGDxhJMNj9GdGStciHNu2LwCc8DPbw6w82bg",
  "key30": "HZpAxNF7SrCRaUMhNTw6qicZRkUK38VmC316FmAzWMMTv9g57yFjkyfhGxBcvkL3B8nohDWXKDA5MjDmdBM9ou5",
  "key31": "27roXNz8PGPovVjEAmddQcVeEeM2m6w6CDWGS5ns5hUXWHe9CMdbAMDMUeSeuZvJ5AN75VXoemJZhysfPXXBsDEM",
  "key32": "26oGcrGE5qohfj8jWtGmMa9vGhzgeuHAZajJcpiNB4r6j6tB7rbyYaLURBxQXLnDWiscFufuT4hGFVYtLQJFKGNc",
  "key33": "4VCrZ1qhvU2xUL9pG441HAhEswzSvK2DXYmJSjQ1N4jEPhgMPqMuyrgwC72ymXhGvqiU2rz7xQN5XDTPPjBKKzM9",
  "key34": "4ZPqSu3rcGmkwhCYRLje2ZrGYmoAkf7sz6PwaBDqXzvwVs9icSMCnkGkkojGRAuhED1ET6EaGV5Aw4oNhFMJJ26T",
  "key35": "zjrSyNBAdgszqqWZqyZjvUMEUg8rqKLTK6CuA2effJj9vk3jXhgJQ9KZbKnB5oThLNFnLgVjeFeNMmyCt8v9gVe",
  "key36": "3sAjbuMYaVJq97pGdx5W4RziSTRhKiryUb3MwaSCo76v7UZMjaP3aBV7HUTwc6hyrpBbfg3mdddEWXMp4eaLDybK",
  "key37": "EoJxDhao3kfiCjooZ2oaQuJgCPPpYXV46UwJqNBk5uEuhhNVFq51Nqdfx8DDhcpMaVDtvsc3ZYs3iAcNaYGmGJ4"
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
