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
    "ioBuFfE26LxxE26MV7KbM5S5qbNsnZ27DHmi1kornhYg4iZ1hndoSe5mGzZcrLarBEiL2yLyp4nHj8m4FTxDnpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57LtQGNuHL2DVhrgfBVzUpBPD2n3KuPrssHJRgmqp9h1Zt4uzeF7oV3mrGEQQUEo3hcYPc3ETfd46DpTE5Gz7e5Z",
  "key1": "2BDw8qZmmwer1Zma9Ms5ECrD3yEygTRpPBqcUGWjaVjh2YHtivvn1CuVodLZnX1aBBtdtan6ZNVNaPGVmzQ6ApQE",
  "key2": "4pWgDBafWJjFHmaRJ5DDEXmjmMZCA25XZy51R9Xb8Z8K3QZNLCcVp7XLQok4Wy5267MfaJJMeeR6RXw8GwGcvJc7",
  "key3": "5RauMRY3d7M6zVBCShFtzRo4miTUVmyrU476UUMersu5T4cVL4n3d1e3njEXs3oyaiFmP2fw9djdL3DEe9xcGsDm",
  "key4": "5TiCjH5dLCXvU7kfvJT992Gd9mhQnLJPwvd2hSokSouiiWiGZdyDonPzg8pRe4VEhi6kAMKsi9GfXsFdraHW11ok",
  "key5": "28omp2qN7TPM15t4ZPW5xd4hPX3XYJZ6S8PBBfbMNsdsTMhjyxRvs3vb6CKe8kymcAdpYeSEHmXwKwcH6kVMy3Se",
  "key6": "1r5GbT8EDqnt3cM8jnZLc3AYEYVzCPP7gRewoRb9FDZGxG56tQsXyoTDHwtN3oMEwnvnb2dY19v7rS1MFUkRhJU",
  "key7": "4EAMJD2TkzCwmD3fVp2GWsDsbufAQ6WPEMfsgSPYoa2KrYEJD2sKB3MnyRSZu1oQMSHuYkN233m5hQ4LUXt4GXxw",
  "key8": "4oErV7M2PuRJYrkT6LVP68PvXue5n9mX7549fKJsqqVu5UKFJSTvDmNuaeJtW4LeWAQTG6feHLeWQMGqz8B8JHmg",
  "key9": "3fnrYFCmKkkmCRX7vBh6suqc7FRo7zJgRay5Jr8sYL1qASX4b8YBNvSSGrm3YxQ7WUASg9Scmz1ZvyoUgTZWt5B1",
  "key10": "vTLd46WhVpncJHLBtA3ZHC1raRYydCMWgG5CtzH9Bz7PjkTuui2YVvK5pj7CbnyAv37ePEvYLPokWXcFhWi8RpN",
  "key11": "3UvV9Wx3ZBLQEu9owySu57cNWf8TcMLEpc5FKaGxK9Ye5CMNGjmrSPH2EmdVMZw2T72x75WsoX6g5EC7a6Rt3SX1",
  "key12": "5DEAVBT3Jw5mnRugJifeofmFbbk78NsSmugFyivvPTwdu5iMG71TJzEpg1BkVfXWecSJCeZpAZXU91NTcago8VUo",
  "key13": "429r1bQTicZ8TdR3hUsXoCioTY5R6kVvtL3BAcN9pF86q4r2YBRdiHHbBwuAxG2CSQRP7ZWDhuQgq8AFiR7FTB6p",
  "key14": "roYkor7ZQqPrvY7DeGZaNpuGyfCJdPSxvuEJJ4ucqETQx1PH2aZXC9XKpxtQoe9kX663NJeCzKzdVfme6mEheUN",
  "key15": "5n3q7NUUwdpUTt1SU1WaqxUzXWRybqzCvbpG7hZQxbuAWxNAe8uL3eDts2ecG5SK6ivVKDwLLvmtn96xPwmTrsMw",
  "key16": "3BshnESnYSAkD3irNqM6sBDXBugmMEfcuFJS6rvB2kQucZrhs8sTZY71GpU8Ey4foJKHLsT5gHwmLGj7ikTmF24c",
  "key17": "3c5zLYeq6Ds8vqsccf53ir9SEb1ER1SjwdmAJg3R4FPR1TG3uj5Y9uaySfAbYHXKEBNe2Znb6CG6Ck2S6Q82Mx7i",
  "key18": "3MFbfKKXcaYKmonGmC6RfCtYrqqBe7MuPzheNWhSfRiNkD1zjMrmT1Sh3StBFnanVqGVy3219dUgYaVjx1MCMbRx",
  "key19": "5Z9uiC67yiGBLnsHaSTABeykByFce3pm1C1VXaStm9iEcTXRpZbgKUmpgfRWL1XZjWeitmuCKPeMShJTzm9L8YL8",
  "key20": "466DJXsVnEgdNEHkDHbNm5dx6WtHyuqBiX5ucwwRK7aFWQtxPKynUfiGZzks15pu7wF6FvPrgr64WxpHVLbW1CC",
  "key21": "3TYBHG7mt4jWBtGyN83i4GqnEPtkxHtYpgLcmj7LWMkjzkEj24JkjN6vQrFhzYt3Aiw2BSkc8qJGYT7Ybspjt1xs",
  "key22": "4wF35STF2MVdEHUHLkUSLkudoiQBytesFTJYpi3CZXmcva8FVaSHUeh7m2wfoYfFSNzBYfVGKajAUNB3x46fcp5o",
  "key23": "zUEYH2qxG5zGc8SCNAj9aeL8WSRGiBjghzpLUFkZn2PHpSHBUPhxs1pKjaADbF8Y8eKZGzi82U3JFWp4V2PFCRt",
  "key24": "5ciMeVXnFhpv4GF6pJpV51dkuNhsTb7cHLyPSkp5mdAYgBFYL72hLmTSsgzSwYd7iKfFfWYsYkouMk6FyjciEH7N",
  "key25": "3Ea8PBkMkgqJWxwAHdFxM9P3wL7LyAXquyLg8C45L8ahWLoZcpXPaZAynSrS9ua7oDWfLW553nR7mHB8MP7iZQbM",
  "key26": "5t1bCysSyC9ZJtjocFc2mTFVngTvwM4SoRSuSWZiCKyWTqRZD1X8EXbj4LDtBqwT584Co1wr1LgJmabvhTtByYW8",
  "key27": "2TStHXmbcegPCL8rurDQ4vMBmhM3khdsNg2EzUExYZfZDUPZ68ndmfbAv8WaFHvEogTAYX1E9RwfPk9sSh7Dr7Rn",
  "key28": "j2S3ZEhzUursoHr8AGEpQxgRUNAT3gswshMB9JUwZLnZr6M38GAiMwccpa3D3XJ9R8vifb3sMfKyRNoZyPg93Kh",
  "key29": "4GYUGQpz2WARcyeXKDR6MMXpKDwDENRPGqEKA7vkU7xkm9RLctv45kGq4KadBei5BQcHBushtNbGkvk7t8sN5qBY",
  "key30": "3Y9jzRkxkVoSiZznZD4jwzZuyK3GKLK3BAX6SdxUX8kcjc8bNqWrzGa4oe6dN3TCxBrCy96HnvCkTXpFWcsY5ZpA",
  "key31": "3UGEBMTUwjFdJMfhziz4twztMfo5y1SEDeHP9ZAQo1LjsF9nCjGyvPcKBBNk3YZQnxKzcXrNCE3MxEDqCWUb98po",
  "key32": "5MRCLxiTZKgbfV583d9t4FUupbMdwkdtg6TUjoLYG25gvPhDvRXB73DR8fzqBo5XSWh6e5MsmbzqYRFxRZ3bxRSQ",
  "key33": "4nzipj35vKGaVTBreR35HqgGDra5vspSjHk3tZH3mnfe4dx72rTDfUDRWqiMBTgU9auvRpkDipMZvXa62uWLomWb",
  "key34": "3rc773yoyuKVX74yWR8m2EXbEUw29xueyaXdehtkgJbQueNuuotB79kyk72xp4wbxb52zzVRnLAdFuQckcQxVcoG",
  "key35": "2YWcZdXCYoGsU199Y2v8WiKauE5PssdJnoXifhxMcHJegBGu5w1xECAybvtANRvcQntKzopNDyEDZVRDrJJgXK5r",
  "key36": "2MUNuB71rJg6mSLpAXNt4G9hDPGwPdrv41ALCEQq1yPptcaymxYkzGpUNj9ar88GJpVhn1n5fxWLtMmoqD598UE5",
  "key37": "263aWSWVBDvb7Yz3JSRcqMBujmtjUpWu2umXMpJPR4unrRxEfw7revaUhrocun4Tg5RZrcvXmmMiEfEx4eXs2sL9",
  "key38": "2vZCvLHjRbjwrmGZg6ptjAfW6KNK79KBqdCewXrZc8kq6MyVFZBFkekzgoEp9RCsqWXfMAYuDzzHKzmVKHvdpByJ",
  "key39": "2TWZFsRmJzxgfo52TvM7VKp6Dr4H6xELyVkWKKtSZW8EVpWiWZ1TsZ9wyPwcXZA6C76gSYUSkFgJtWj2iNaPEizf",
  "key40": "Yk3DMuLueAdppySQtDs84K9KtTqWQCLxBscCToT4Fj5JsRPcQwb1t45XhMg7ZVCWp6YcWcDyEq4FFF9XKET39yW",
  "key41": "2gVnXE8WUbCoqvzad39jEJ7hHTZtTwvw9kuh6hFxHBLmdaL7fpSrMXLGB56tJiVXdMPuEtEduXJmvQGCxtdPbCas",
  "key42": "2av7j7Co92SeS7AvVoiHHi9tcZcTiN25czPK3m1zZUcgBnGUtYE8ye6FxyjnATEAn1Q2aSSbcCd84wn5Kdzd1Y4G",
  "key43": "5NSnpBvseCaecquasfasHJdorNiQaYwpQbZWfWjsCoVXwL4sunzhJM3Ep3n7CmTLFdn6hKW6FV3mjgsQcAzYRcoF"
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
