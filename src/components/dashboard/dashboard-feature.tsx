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
    "4Y3kMdmc17SZcyJaeTVuFnXTn1sx6XmASNhWCVsRktRTVTsgYupSw4jyEdfN3zAxwM7hLKFwDWw8GptWW7wyHdA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iwD9p7dtCpxop8hW6qvYU5x9ALFEZq21y3c1tMe9dfrztRDAtsnpMempZArxS3JDZ54m74ncw7FdreSehrr183h",
  "key1": "REdZfY84y9XBbq7mwrogSbci8iVgCj4gDJD6GKtqVXUSRefiiRWMTJThPeD5FYg26Z5yzNDkguyB47xTRKnxUWY",
  "key2": "5TtzFc7BzjQnnbzLDeEDn2Ww2r12N2TYT5B5qd6NDGyXHcgZZvmdci5B494bhwJAvpa9vpwJL8KwNbPdk3ugyuDQ",
  "key3": "3zepso3eJXYrJj25z1L2gVZaD5W4AiPEYq4cZH1ohRoJyHFMRXhYDELCzTGciq4Rtdx6hpPSubvas11U9NaTKqSY",
  "key4": "ceVzpvjPw6Wp4oMW479eB5T7xZS5j9jj2gNyKGQL4RvPdMgLhYZqLukFiJ9JK6qC4d74JK3epTFm8MhyZNaYotd",
  "key5": "2GVz7MP1o4kudxM4vuERiMkjyPqPtqMxcmeTP8fxZdmUwM4LfY8cDdYHRGQjgWk5e91NkwN8Mmhgovg6K6otSWeM",
  "key6": "2vWejUmE3aNKkFEU451EFwkTcLeeLzv1rUGSPGSZMURpQ6Mw5pVJcmdePLFEuCJezKJUWjxEDemhL3FnabzioPMP",
  "key7": "4DCaXFHLqQX4K9JRHTDKVTA5uGSsegQ8yc9ApzLmABuVmBk2986UzaQZ75KUvufxa1LTKhPoMpzbKC5ro6XZtVWW",
  "key8": "5Hi2PFik2v6MmiFYjT1sTWPn58ERAa1oKC7p8WTgybUMWK9zzihWiqfnVtDfttsVbW3CEbycL5t8RQKFqpKia7j7",
  "key9": "3v2BqhxbFFJpf2tWVnfg8RU48MjMwMdCR55hZzf1o3hgz2isDCJ4oucAiN1jaGr36QeWRwo72JuaPi7LpJy6pPGA",
  "key10": "4FPAc2ib5MCsPx1T39iieHSkXA6qe7CEH5jfXtHh87sRxFQVirE8GCuCRhZJPYY75hudp4HfJGzPyK1FN1wz1xyN",
  "key11": "2uJvU7NvJbwXT7BjVKrVz71Ukypd4qs5w4fZX5gTg4ybXZLDH9mabAx6Jcaq2vvW6gziUK9cWgDfmdfhZq3PjbPd",
  "key12": "5qnqCjbDsjoAnkUrf9kVjA95LiVSE8j8T8egKEGpCTmkMtTXmvkLMm6PwqV91vWohicYui2z2zAZHoEzy27cmbLH",
  "key13": "5BSTrJP5ewk2nJ6TttLjkUviL4tV2tD4sdmWoysGykL6Xn8K87Nxst5FDLaqoe1JSrYf3PWkjJu3oSWMPikgCnLs",
  "key14": "kjtoGvZpSjK4DrorsrZZNrZp36taoNVQWGtSoW6x6Nqpv5E7CTJSW1VVzA6njr39jUkxkFhnajsumqwPUru7p1G",
  "key15": "4rsbekk2wASwFJnEaRDFkY9LKtzRRBL4U1rZiAA1ye4AyskCKJcBPgZnWwZLy1egAp44sT3FV7UFpPBL4TBGGRBj",
  "key16": "5cjgCbSWdBywoxERwdzvxftEk6GnZedFGDriWaaZ5s2iv7A4TmFhVNX5qU3cua7R6aYZyEtsUWJaPCNavHEaLhMF",
  "key17": "5TWZL2CrhbpkTdy1pFta8CKEXexTZHJ5BTCQEqYy49aHY3gzUsPzoJmS9CDvhxogJveVC7rGbfg8MmNbo45hyrEo",
  "key18": "3wECydSqP2jVYdUus4dXsqf37VzPXHZsTw5YNnaBpqU9VgDqa1xqYZ4pNVFCB1Qx49wWgkNzrpkzmxGqqbo9Skz9",
  "key19": "5faGxbLEyyTzNTaoP8jB26YaSY3At6vLzanibsDuHUD6MkNYmb6RGTQDGeJJNX4Y881vjzBCinUJWcqegTCSqzNx",
  "key20": "5zNQkfgLetTxtEfKKhtYBDFrDTaZiXR7tdSTWzui2KxgDSxtQTf2f37XCBn5CfJQukE9fRpEWLTCUJyMELyg29PN",
  "key21": "3eLndpnfaDmSDCnR2u6CkfvBimiYExDhS8zWcTicoMPXzga3zVxXeEhDeTShixhpYzEikyqoaa2KPPdDHb53LnCS",
  "key22": "2Wz9MMMXgJCLaprGjDKGTEfePxi14Mjjjq2e9rKYpP7ErLoGExzXcqkULgEJns2AhFCoFB5m9kQCSixmJLB5qduP",
  "key23": "Vj6H78LyW6HBZTDjBXF95Vkep78ikDMV98Nv3TasNeTHtiEvo3p6tmL4e2cewzb24YMLkCWv74ZQFV8WdPjj8EC",
  "key24": "5ebuxWoYvbsz9BewEkG4WpV6xHn46WbsYkKJpMV6RdVkSSWQtNZbE2UcTYkhXxaMgnmiJ7AMDHPQuDT1M6EyGAX8",
  "key25": "4Kyb4ZPxD3q7jUbNUkA6S51EUCuV7iwkmKiGnJY7H7zseCP4yWHUHHrwhXMox9aTasWxQbJKkkbVWfE4mqUauwWr",
  "key26": "28aov7WPt1fWBcmujQVXwGv2FiTRWBStXh9Yw5bss2BojssCQKdZQUFPxzffE1Cn4joa3598wuU6ATAxJtBq6Zxe",
  "key27": "5AiKSLmjjvyzJz75SMbymtuWMCafopQ98EoqCJao4bxQAcPUGhqEkakrqY5fATCgSr8kgj8CvRxvs5sVpZWkpukU",
  "key28": "43JyidafwqE5hNRsAqemRRsQg2nhXyeEsGYk1h1YL1LxAVCZRhPU8gF2BdM7DVozR3GSzxZmWvP9URutS8613L9q",
  "key29": "3Lm26xxs8zCgzBczqRAYRzsgdH2mwdMnNy5mhdDP9ehtNxFg3terC6VCKqxgRG8nHZrB7stMMLvsp4gJiWhB3xSC",
  "key30": "4sCKpQNZa4wfoTHrLqB8GNkHPLjgj21aGZKov2Q9KqTEye7vHw9xpU5HgFbpDJ8BTT8m4vR6MDbfssoStEzKhsBQ",
  "key31": "nrqp62TfRkBLScA9Pn2ve5KMLgfSTUZeS6zH7xJf2fDZstphzviwguBMDqkxyUGVEU8iTNVMYSWT3V6QMkqCP7c",
  "key32": "66dNxWBNW5tYJBJuRvqJ6dMwoWYK9UMcqcHGSGzuFJrJjyC4JBuspPSuLAUzsZTE12Y2sLFA8ChMg5FaiNGGciaM",
  "key33": "tpSKk9pzM9Ff3BXgWsc3HtArGov5k9zxCwoTjujaQeh9vQU3ZasJQgfg5RVBiZf5dVkV3JB5ZcDknnGGD4aYLB7",
  "key34": "3aBr6d3JdXixNE1jLD4RJKQcJMLLaNLjFghxxqVQAbTyNs4Vm9CbpRT4xKwqscwmUzrs9hycaW1WT9FLH1BCTAJ4",
  "key35": "5LAsGyVHrXTix81Z5QvQQcHbNmaRYsS3TNrGNjT5DFxK5Mqw3eZT8HzwvSNwfk1wm57TbsZ5z39VXHa1R5FMZDLQ",
  "key36": "43ZrMJon5GqRimoqN6mWRZHdjhgZbQp3uB8ybK221LdTxzeo1rW5ogySaZZsLZcZrxBgLcGCaeZa4Xu46nkvyKhu",
  "key37": "4wcsX2EWXx7qJbxfa5FLHWnZ38kxuCcLi2hjdqxLpYpjq1Zuz4SMeGoQapqeW3DCzpnL8t54jSghmzoAd7Vp2ddH",
  "key38": "3wi6fRedekkcGXyUfQsrM68Gew3ooRnhRtgV8bzGomtSio8oyvAgSMhjpYg23xvpFTiRgZXcxVQzfCaPGcQ3touo",
  "key39": "3VFutxeRP2zF4d4AUxygncRT8dVRetxFA7yYfXx1kBvjsvzoek276XikWuQSPUzbePZBvXo2yumS4VsD6ZxcAXLX",
  "key40": "4anihhcQyA3W7hSPNoZbuQHLgNLzx1127MCYqqR5U2Drvhdga3D483Jz57L1259ETcVNCsmj2h3eoVU729vghpz2",
  "key41": "2Zra7qfnHCYUotMduLY2qy8Ro5Za2oQJQe8dDAZBwtenYRxSev4Qm7tAbNv3LcDM2m23KkDKEJoDMTVF512uP65E",
  "key42": "4zKSmM95jqi8N6a8nCARSNCLue7yN6xUU6mqBcMPHgn1tKwYVRwaBXYYAAEzCHvqcDonRu5tKnEKemGviD278WXD",
  "key43": "j616jwfWr7X6wCirrsDVdhx6jjLKH88toijXJbcayidgQW4Gt7RQxvPCGy9poKAeNeoF9vuSWZyp87cLZX6b8ro",
  "key44": "HqAn2rKEPPypHGaAwPFJLXrykfGZJJ3cgegaYqWUQsCWs11kFMrDrr8BNR1b4YPD3DRp65YMMqBTcKxLLknBbxu",
  "key45": "4cennYKjkks7f24vzYnMyK4hu1398wsoi4qc3s1FQteaBR8un5Wsi8UGTNxaviCKcxDyFPsJA1kjBSjG7YaqUqi5",
  "key46": "A4cTHkCCCXKyJmDmL8hB9QQgV83kYxUpQXkfcTc5shdRGxzHwTqzBpF2HbCNeFdCyv1agzE3nxekchAh3Vbs64u",
  "key47": "czaPgxGjKpr4zY9gSwBzstp81sTydN2gbVXZpjNyQXyV6oThr2b1DDJA9CQ23GpqeRFJzRvWzE9x8g2KGeNJy8x"
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
