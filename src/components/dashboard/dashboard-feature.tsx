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
    "5LWRaaubs2mowWHzfhLSMdKWGh5LJJAhJTfbNADNWryV98imdLts7qMrcN6Hsduz59Xkb7qygEXsZmBhd3afs28E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cnswkWd7geq6KsQPfSECvxFAuEhw75H9S1woR8G7jpVwoe4pBKfZbsEHieszqavekXZUMizXax6zYJDWhqec66f",
  "key1": "5dx3yipmY9K9uG1gLyR2QGt91fUpknzJeuPuL3GgyJnofsZaPXTNKHHMauKQPKjCek1CPhQ4LNRyPr9ogKPxD83L",
  "key2": "pVksaSXyask8VTCgwCJ3E1S8ZJ5mkxumuNy42YS1YxYciyq42CmHMQgi2HoYySZ3eEdSCaYL2ro2KD4bUuYnytg",
  "key3": "5mc5QQ9m8pmUntXWARKJYGXttBDaUbiDKJdQjq2Ej3GNMp6WfSPkMkQaqKn1JfX6tiQDtFjchHGFvxrbvNLefRir",
  "key4": "5LUfvnp8TPdvTp97WDw91Ls2vnGSyapXMmuM6P2ajKrQYmTKLpwtKDPAM1eznXCXamN5D1Y4ruwyyw3FJF2k9pYv",
  "key5": "3P4KpMMYEppaNsU9YMdRSenut9iQyayvLmRLRGN1du6133SBh5nzCZGLK5BgADySV1PF8UqafUb5TiY195bXPZga",
  "key6": "4hrgN1iDyq122ghyGeaf1JK27TWrgtYRjcg8TDv4U2oKVv7rsVQCCHyr7bTV8xF7chFadwXNbW8oL3Cts52kTqvh",
  "key7": "4XbiUHADxKWBCdKSikR1zDfppVEBRmoUGKAM2vmjeAuKk6RUxigCJqnCQHXk5p4ztR6LCkaHN1WKcvbnmvTAxfym",
  "key8": "2k6ashhyUVYzg4pGyphJYxcVoxowq8qfcJ3jg4dvuHUuKZ8sGEGSoKPALAKi5iGEdFH9FfQ1iRQ8K6F6YoVvq2jn",
  "key9": "pYdtbha4JZPdo3FwsDZGhY3JkF3fks7uEP6h2mPxHLo7fQBr6ND6kuY6XteLMkeH8y4iVfZs3qnRumxYzWfexWt",
  "key10": "2QtwS5q15nyWiTzDut8URPM9UGhnxEgDYbsFnDvfYti8JLrRHRbV9zActUuB4fhdJYWKbnn5EMZVbspybqFgC6KF",
  "key11": "4BE4kapLS3GwMcRm32rS8SCXrr3jTxkrtsJv1p4Fe3mVoW4epCCXEFGuG7CYYvPCUgTXrthKAP5Aab9xQxitiozJ",
  "key12": "58WGjAkGBnVipMzg32TFPFTa7KDhvADoT9CsAjYbuofFutBEi4jtqmViexDwRqvoc22eKRtM5G9GawzQwxgUd3Xy",
  "key13": "4KyM9M3TyNYQ9zLHhY5HghMugSkttfW6xMRUqReovz2YF8fZfpdEtRYDfb9WiZRfzD8RbSXtPoHL37Lfr6gAK3tv",
  "key14": "5RGUFVoRQS3ccxb7ejXZNaKoS1tzUCifrwUss7b1gQ4pDv46RwQ6WQNwtZkhNyapvX6i3xzzdD1kiMfDdETUuLEi",
  "key15": "5autME5zxWrzgDGuXXKSCrjgv3Etxvvd4962Fahv9eUFbrQC2MUehCPGaeaW4deK9AsTsbFmqxW4oQYzvr5hVSS6",
  "key16": "36ct5A1TzoBJSJ479FiMHGkntDUGFBgYk8BFTmp2DU7nA4AFyhRAhvGTyWHE8hMEAoyqThmVZESu1EBKoTu9VuHu",
  "key17": "XhGfzK9XMjYMwkoQ99iEemUywNs7yeD6SvSLJcR7jmhq7GfucF5MkaEVYkPFUKJAYfEGJQVZUW7TidiXx3QdjH4",
  "key18": "ruWRvQDy4Ytmn458iDYPFdRWuSSnUTXF5Ldv4mSG9VUuP2ykCVKC6yh65NmnvaJJCTnqFS4GL4eBf7752f91vck",
  "key19": "3VfSQxSXrFKjvtsz1h296cEFmkPqMfZdJ1hCZVbd4h6SqdwabHL12H6ZFhwPV9eeWvUc6LNF6TEKyq2XtWWZ7pJh",
  "key20": "5DeQviBFjEw8R635WCyrkcdNPR2Cvd5M1XYp4ehZJNqh6nQ2CYjQkQ3juM1nSVoZqqt4SzxQr6KDXae1rS9uNQP7",
  "key21": "2po6RaPFgvL2zEpNoiHVFWrwoWGZx7kZxRRge69vUG3Ymc1F29E6Hnby7ytj3uL2SpP9b26yBbPRtaHQVWJLYv6M",
  "key22": "58RF62ZL7DDJdNHsqwz3ob5suP8HXM1HtbKcfw3aM5hJbzrdYTDsAMq46BvFhcvqA6q9MweMxSRV5FFkrtbV4uNj",
  "key23": "ZegSPAWzByFwB3C2yghq9p8hPEkTmCA5HDXhFXsUTSAmSTjDXKJEm3VbCWUWRGa4MKw51SfkQkcnDrhczBNhFWM",
  "key24": "2z4w7ZT7UoASThgHfM1mMrQrHPbgnHeXwxhMuyyxFr6DzjYME4s8iUPctToeynp4xpqYDCHQLxz92ovARJCV8cDY",
  "key25": "2WqXJzLdYXZhhccHFXa3qCwQ8fVwi4GVSe9uiGLfon4VcgLe4MyvpsrjARu3um5yzJmzDq9XgJsvQyLsPh9P1Rdc",
  "key26": "53s26SPZwheqr9ivYxHLjJWb3ZMuoWxS5hZR5ZgbEUeAU2sb6G4DKL8dUqx4si4FX26B9Pk6ACMofzk2DdKwWoxj",
  "key27": "3zT6VTFqbfgMjPVx918YdMo4QGYKUJXMwgQNxc6DH8RmC1nSycJK8SzmLNnUYedbXkyJXtYbtrRVYaeqidcWcs7Z",
  "key28": "5eWZvusxBwToG8ipdAWeVRvLsNzRitJYopDxHEcWom8ueLyWsDfFx5LEWv1uURMcGRkbTnnmtdpwwiJ3pcq6SGvj",
  "key29": "2RFhtD8zBA2aCQ2PsAgdT6ExTuHpJRfcNACyB7guVdpAoS4ceuMhB2EHyfvZQnAFGv5ToJmYzWXL7DRGR9ZZnz2a",
  "key30": "4WztZM5WF2WsEogxozhqsEgnFqyccyZSyBd4dCQE7XncJmfPqJ2e1CLtjCBSW5RJk7NgNohy3jEXp1fHU2iXfs4d",
  "key31": "2x8oRt5coAW2bM1fz2YjvdWq73jmN9tEPihKiKCffigXkz7rcMLmyr7thdUUGVADgN5XoMWKLvR6vMEncht4TcXK",
  "key32": "58434mcAjhpHAYx6cvecdiQiJnSSSSdvd9te2aUCJTMKQHFEGWRkDENkdJE47i3A2GUDeWVLwXWtwioKktypiaf6",
  "key33": "nHSrXWVRX7FpmwHj96deF71jzWCVgZqHcGBhZ5AyNYwP4wTBkXxDYRnFxkrHNbdDcaNzcoDcsVBQv53hqezPSoR",
  "key34": "66gq8g1unC1JeKyBTCLDZjVazjcwH7rqXKiQjpoyLoSuiVko6kTDscj1GHbZ2qHE6BTDjYTuy6eqJA7ccnkJXaQb",
  "key35": "3gwHie6md7FQKi93qaSVmrfmBLGFef9QYMB7LMdoivyHYCsSLt5CnT2tBT39H8WvA9WuDVLKCgBfMVE3Bx2tnjRu",
  "key36": "2DPWie1rcZxqomr1Zf9sdEmNQG1c764EDsdu7s3SB162QwVBtXAQgEh8ZGQ5cV34QyuVSJWosSuE8kcYhWR6DHg9",
  "key37": "3yw1i5VV5XVP9ouCjutVq83fDhFLWdwqHrNNwW3mcrW8j1sEdzgWWq4rR3k6DYxzMw9XuAaqRhFauJkERn5q5uax",
  "key38": "3jGxDVbpGykG5UWqVMzerk2BU7YUj6VggXSXdxTgRjRGLpEmTsp3Er7PnD7nQM1ViuGC6n5ZygaGS7C8fmtrngjz",
  "key39": "32DVL1BSoZhzNK6vQVgvuSp6DZkZkTxmKQqFE9A13FE6GJWsyXgYj4t6C6x4r164vNLV7T27bRhxXRqwChUCVzw5",
  "key40": "Q5vsLqwsbTw8nvuhwMb1W7jDYrjN7mYXfipC5c9QZ4BgvTvTk3hVwF9dC2Y6Nm5fQxkr17QnPUbURfnec7m1yCp",
  "key41": "2zxqmrvuNegy6srBT3aLenYtKHi9oXL7gWQYD1nB8tfKTqiU7fv636CyuZp2doc1umD2RnLrPGSHwEu59eCoCyeV",
  "key42": "5iYMN34zF6qgQetuRxbChSUXjddL5qqwQG4sxwq7A7r7gACs4m7ZvcQ1Vr7VFSX11TN4uMwQVBdKu5z8KTdWtahQ",
  "key43": "5T4tVVayQya6uyCBMwzER4PihrZWrenybKYGatq3C17w7eW4mLuzeqPBSeQ19RZ7GbA2iDuCTMDcnkd5EZP8MJzz",
  "key44": "aaV3V2uaMvKe5hKttZcvUFnawHmU8bYjK7BwWhBWfFfRob7gm9K6pnboYu5JLn3tmGcXivxmxRQwtA2WiWiFGoa"
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
