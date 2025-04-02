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
    "31PZz1w93zTy2EV3pakPrgAq3FZFA6BmWpC24gVGkS6PcVuYJa54DkXYnVyxCdGxRSKXvX42GwpHvAgT9CX7U9mx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ZEU7rCS6BzvJT7YEPQU1q7PuPpJoxy5yttvZbPgWGfjvxygsmZADJK7RSCXw898P27wRjjGX1uGMkPkpCmfg26",
  "key1": "2M4JRzrVBCnuCBzoUTBLuqzdvHSuWFutjcUKqRJLsqMk2VP7zLjSAdccMfjHV89v4dvpTYSn9ufz5zvkFw2u7nbW",
  "key2": "3sps3aFnyv7RXbhHrtqk3WTPwMQd51fTUExwRJFS4ZCVFqPzB9R8jP3HbYcfHMi2j9VxvsHoQcHG67VvvErgPdPA",
  "key3": "RGGJJSaPNNmH5ofXgtwNRqtDNkfH7HM6sV4Fw1WnFudaJnMzdWaUi6dne12ch3SW11Q4Uvc7MMv7NmxkYDRaF38",
  "key4": "5HtGrQjrz1zikeiwGW1To6yRAEsQmiBsSpR7H4Bvg45F4dT9KC1s3cm1SgKdv2zYjyWkwrSLBHB47kebr4jbKUKW",
  "key5": "632aYJZ25EU4bx1Tp2RyEAFGB4Jf997BJSFJq6BCZP7zJtEj1RcawSWSTD7WfvRkfvCb2hgYiLkgT4NpVDkzSTSx",
  "key6": "2CRv4qxK5gzSF2W37E9UpteWFQ2icnpYEyUovbKPsDgX5khzyFpxJeaNp2HCgcXu1x5UHgNpcWX1GYtjYZNi2XbD",
  "key7": "4cDHKFo35od932kguYGXxv2REJrmgGuMvdQskH5EfjvGFKZApynHE4RdZzgKmcjnMFySgNC54DeQtSuDXRyxoeT6",
  "key8": "3EZEdrfFNaWs1GsWFNgiyvuSmikRHBRNB3kuQY7vD5yvQojSbYhoW6RWb2SgvWaD7JtjSxDxRsu3tKCpnSnAq1W5",
  "key9": "4PDwsejVvGYyLSwM3zvL2H2Z6VmdZRx2AKWrDxtwp4HjqgjRpsXjihj2prTvJS72cxymgFpiooKTYoqUiyiSDiB8",
  "key10": "2zJYRNsz2U5QcYqriopFrHBKNb9vwQaxKcZUC8pcACnK41TyDxPg3sRBArJ32T3yG64ogPRvWjPEwrwRgkxkeRRw",
  "key11": "MbYJuXUMqdA4bon1ssacC23NMX76tzD4RjbnppC9xU6myDk62YNUyWGWvS4aXPN48u3nkZsWn4vkbuKctBMKQT5",
  "key12": "3Ydb7pE2zjqydT7fFkMdcGPCz8ZfXPLZEa93f3iBebiaihyD1VeCNgvbn5ZMeLaYGP2RbGMHUJLkgb72CNtFodAX",
  "key13": "3RraRxfP9free7k6JybfX1RKftbQgfTDTKV3A33wV2qKr1msquPVy3zAxQt4Do9hb3PEkT9zf2imnj9VKNWh6iZb",
  "key14": "4sZGREVPCayR8MawPzFuHSu5aeKKL4X55Ae3G82TB3qXkJ7EQWKt23CueRcoaTFCx1CJqA7uyYrXkfVFvc3nSvRU",
  "key15": "2CuciNkKSphJP4KfRA7CRo9ikTgK7WpiEJtEYSrtGs99ZcufTRdwKTCfCqmNn8Kxefsj8C4jjkEKAmLgJQDuocAj",
  "key16": "45kDGq8NUFesmRxRTYeBRjTQ3zvcu3BXzAv3eNgKGd3XBbdXcPSVe9i87HcNMhcsFtz85yDAEFjQev15LnD6AMyn",
  "key17": "5YadJwVYqb4c5SR2QWXoiRYSCb879S25VYo1HtfjNze1wwwFvPbk73zCdnzLt9z9t4RMEM3FYVzd8kb94gdaw7JJ",
  "key18": "2jvUrkfyf2mhVSPLwmPBmQoja1ebs2b1JTmi2wkc2m8PSiLStGT48qAg931zArPWb4fofsQH1TjP3KMEHUm9EnbR",
  "key19": "3es7RjRccdT6D78Wcawbhud7kcKspMrwhMhYQztWBECgcXF1nLYsdVyWj9qbt57KohUdWdw1ALS66qwLwacPwxfH",
  "key20": "67R8qGX2QBzFvSjaj34NzinMbZpYtDyB8aWXFb5kpAt6oUFe6c8zpDEDQVUXqGibzQJN5jtFSqaeh2r8Ks2UZMuN",
  "key21": "Mjz69Dvd7T4zJnjFcoDuAtPZVwJd1eHsbr4mYaXFuB3C9fTmoVDx8Xugy4zhPvCsZESU2DznGYgcBJ5UoNWXSmv",
  "key22": "4CYwPwf2JEpXCLb25pnHSC2tuf4ZSWp1tsCXiJccULuSQP7Pic8Azfs5pb4kPwk7SeMxBLNqnhTwsU5NhdDNALGF",
  "key23": "2XRzbGGGYEvdkufHF29PRDnXrGTUdkuAZc85SgcjiRvrQu2P8UMEcV84u1mQW5hGwnYHYEMcKyHKGhMTdUpipYk2",
  "key24": "4o53R4VHsb5iHorYMoHEjsDh3137iZhiK63PAeKPN3fyT8wZGJPfcmtjmx55aworTXPqr3bXJkAPq22rNrpe2ESi",
  "key25": "45WC3njyDJmGteHBLTHoN3V77VUmVg5ry5QP9JonfvpFeY4Qv57SjzDtBTojEEzoKEhFd6hoT8UyCgnijVUFcVEj",
  "key26": "3wb1YqKjD3NBGZiPFPg46WzLGRY5xS8FW6CWNhXjZx3KoEv2vKQ2oeJJxQ3xihZ1qjbYFqLvTUSPeEJghPd9xmck",
  "key27": "23FSKv73cryaGE9FLvApfr6fuuuQ9g314Vsa7Hs7H8By7eQ3p2t3dZjyM2ujtAeJBh3rSgGo1eApxmb6h3u5PC9v",
  "key28": "RUZvgcNEPhB8m4J7FJ8uLQZGD3WVqoPpCRggp2uwsBeGBgQaP7fBQruPgGRcduSN89GhpXQGALWnrhnVyq5KGT3",
  "key29": "zY1Jwec4YFB2gvxRspJAJNzD5G5H8Jx695zgQWPUCSpYvBAteKLUS8jc3CYs7rQLNif9aR6inoii3p1atRjUJHN",
  "key30": "4CLDCz3rMnStrCi6K8HvRfcdLBKzNRTgYWtKzqVoUSZfxv2K9xd4GKyg3qfknamGDi7a1FeNxv6vDzSvxxLvd4vW",
  "key31": "7okDEQJKY9u42Cqy1zicULfPq378jYDyea7H9foFCYJcq4MeeDh2AiXQkoZe492D1wp2orYTff6uR246rvokXET",
  "key32": "5KzFuuki58WCFZ4aRXodEuv8N4VzaaeLcYRiRnvkxTbsgN2KBWWE1VDjujW4RCCSEXRWSKChpmwapEo1GDcwVzGd",
  "key33": "RaHGJBWe2R6BekFHULDzGWiKPgdik9xgYabct3DbuyWc9qVaNR2JuZXcQ8Q151E4BMLVdyobhoKhkR7roToSgJg",
  "key34": "4EH9ox9triReyXgo9sYnCPt7C6kgQx3ak9n4RaShqhseamkMKVifJMcuFiT3F7Yna7ERNdSd34PtZ19DVcPmpsyj",
  "key35": "2HZJbUdUHe85GYevircc6NAPZ3WeWSFV75HnF6Y4cVvi2HqnS2R9135HpUqqDHji4cYtvNnaegaHFNpoUT87kKme",
  "key36": "5bqb5sZg9uCP7ZQCdNgbZDCJAV9SfRKV2EZP3VkjMQRGGV6YM6jmbi1uAcLMq9BbCYy4oWvmRD4AM1NmNYBesG3x",
  "key37": "5qey3BQSsfus9efAnwAM8cqvhUezsGCpKA34cq1wPHCeQ8RbP1YjkQoouSbqRUdk8Vxh5NVzjpown1weUSgypiXt",
  "key38": "29vp4KyLrg6Yc3w7waon16Z4FELog4SNK8cHrxdxeb8cDYKjGnMzkYiUiuvqA7as54jC7C67ki5ycRRW2FWWufKH",
  "key39": "4pVs7E83YbXtzNuUqr88D4h1pFVJWHGPGEBbPw2EVK8GE5dofuEujLmfHUxuUDBWKfxnppE3GH3Q4aLsNKprf4A6",
  "key40": "4gmcwPGvnZqWou8cC5pJfBKyecwnW9nkiBEuuHJmEdXVwH8hJLkm4PZZx3LSAUPE4CEUU46sGACSifPxN5ZdDRMN",
  "key41": "4Pt2LZqTLhDaHVHLtWhDSfYHCd7YJKFwBSsuFqUrxtdkcK5wTfQ6Zh7Za3PcvtXRAHCe7HiSxasqKLxb1zLcXXwA",
  "key42": "4pig1bTzWJQc3BLY1wUABEuXn8BMxNUUi4gAbQDKwzrULdmGbBsehkmBjDYtx4TQop4pWcX2gSBhgGhzaM3CMUTP",
  "key43": "4SUYGRN4kzmRg2o83FZ2xSwxpfW6phZT4Pu5F3ZSh2GJVFV7YdEdUpKw2DjRwapr8mrKMQoGGRLFRrkfivBH42am",
  "key44": "3myVfvk5FdbwzzaZpDmYVQyMFCtYFLjWiyVn9uwm4oCYeRpmYY1xpAL3Bao7hF4EnKZg38DhdJ6hsdpzjcg4fUrt",
  "key45": "4Zzimvbg1di5R6f7gtKKAmT6xevtkQEhoVJL4KLc5whHpKDsJW1jeokbE8waBWdc5mo63JCog45jmfcyBuN7Txjw",
  "key46": "3Mmkm74R9jRpm8ji2DSC5cksWpEXhQkoT4PNZ7Z9YyraswF5idoL9mSgTGRozVwyijranHEAq1BfUYWcFoVPvTv8",
  "key47": "G5sEsfmVf1aHLRqea9YrUKRxaTvonhhgDXBc6cXWawAkTbUbsqCWHjVc2P8AufBW4VK5NyRTCUT5SGBkeTkj4Fw"
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
