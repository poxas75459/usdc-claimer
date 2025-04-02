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
    "3D5BEn7DqQy8w2e73vxTukRpRs6hsSjAVHVJU3EfSjcCSidfUTzrJYqwKaWNHZjuR65sMh2ajJX5JeBzf2V2dB4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FkzFD24LEkQgR8YsjejdRPwscESvD32RVjeSNPkEhEckGyzDfKF8NSomFPnK5vpD3T1STh1rdjbWRxsnKwkcSth",
  "key1": "y799bFB57vMjeErVTSYQPTVT1JkEZ7rYzLsovdDNTEZaixevDhJgc87UYtM9t6PKLBBKDUamrZPQMke4WYQg5m6",
  "key2": "4DaKx1BpessyfFLgrmx7L3dkat3CvxXL155XmgnfjEDBwoY78HcV3b2FwbcmaXEAw92p9G3oPLoyS6SRzyAN3rdn",
  "key3": "aaUMXWSAVcK3gXGV7ca7Nn5FEXmPDrzEKi4G2GV5FjAbHh8fhQEAuxaSVJ7agaCtQxRPxctFJ6me9nkyXyEhiSw",
  "key4": "2nB3ZvvyjLX8XqweYoFanK7GyREd1xuX9uKJ6t2VEDKNEionXS5MzyYz334AGUrnL8DNBvn1cWibbCEcz358K2a",
  "key5": "bnnXcDdouLkeUXnQUZkyQ8UsYhmiMAt6Xd2jiPjNmVB5F6v5W8NH2JGq1Ngn7KuWXD246p12kuWM47nusUxLk6P",
  "key6": "5rfq2ebhwZtNVCcsA6aBBcN3UnQaB92iA2PmEYHyrmVQ7sDgzUMwyCXduJzEEPu4HcMMacAkdizyuYbr44K94cfr",
  "key7": "4Zsc6D59brvM2zhocegKyAcVdVXn6yxxi79RW7H8dHYz87iqoEetyoR5ZaE6gEFgnJ9pigE5TDW5imTvNhH5GMPg",
  "key8": "35MZEjfVdarbd6U6eFyLrUmLMFq7TDNT2kU6rrnbkgfeGgGVBYV9u55TNhVaR8eDyDJxTRNLcZfsVYVwtb3BTqmx",
  "key9": "5SZhRrMcw2ThdDgNCAS4vyFp4hjshD8BZJnoE9Lg6wcfmDWgD86AFW3BdJYDVwcakiems8km1m4d2okY5DpPLLt9",
  "key10": "4E6VkLUMXV8M99ETsJ5jPXdytU8RcjmMEYjSYFhXFaJqj8EVn4EMq33YM5uH6CxJiAumvCnpp3fihAMsnkU45NKZ",
  "key11": "3hbr7gn5vEcHSEd6rE898gB5qi2FireKZEtLs1n6nrA3VmFp8bREBkKzG9Q4BXhraPyzsTm55p9qZn8U6s7jQPB6",
  "key12": "FBAsj2d319mNhZ1ovKyjwrS6Qs8Zgxy9QKvNbdfafpr6MicFCSqipeyPzyBqzaPskvwGUgwKxQV564LkC88ZfQu",
  "key13": "4X7SastxPaXHgSh97ymytkyfFPSBf84RZGTZK2u9c4X2nVzGzTnMW7sSpzGj5HwgZJ7BuLD4DqBoLzD4BbSSs2o2",
  "key14": "39kTze5WcUAzPgox2WAnw3MTFbsSvL1Saersnwr8gnjfnJ9SLL4UFmYDCwET6Uc8dHuBSJKNkcfeUUGmYFQqXvrR",
  "key15": "eQcncjfDPTcSjQGncxP5fNaj9pFnhqN52up3gNPN1jtzhySJ4TKvPUNgPLrfbQ9A4yRjxvDsS9gunbDMojuHrhf",
  "key16": "47xNJApCugpGP3paejunA9Z9ojY1kFh1VgSJWUFUq8Bwi2uuNppUdGvtcwr7LCDaoWsLYdqv4ea6zeNMmqxjT4sY",
  "key17": "bbR8RyMo1ZhNbgnGx9kekCGte3fic7QU5kjDLpjVS7bQMQFToLMiYqHB5WazGN6H246a7JieYBxxqLX2STcx6vD",
  "key18": "59EaRwozNd9FHSNoUCNrEMUpgmtQP3GkGwRHeLdXeJoXpdbgkpVoi2XHTrMeWtHQhZK71wsLeyweG8FGDGsDemwE",
  "key19": "52cqArHkMJqms8y4E4SShiv916E6GyVQpiQtLvESSZdJbWRky3diXLDPydPAH7JFp5dL9FvEBdmi8LRQUCH2Sxfv",
  "key20": "2VX2ShZbGy199AGo6HGK5kcAKa1cyKyU7Di6tRYCY8HXgUssSfLbfYk5LcmtCyCVkmHgnsiby6tg1XyGphXzL4hn",
  "key21": "9wk9Q1hDCM9Uk836s2RbnRK9XwU5VEehmJ4g3nrQuJ12kAgcMv9Gntx2Z7gr465pdkWHXemJQYB7JyysisenKwL",
  "key22": "rWECcF84f3XX9qJK6HabaaLm6UfHhQLEvXKmwcN1WgDvtGZsQqtZ6SZZv8kKuXdbuXwokfPWy8QYwzRd7gXobsA",
  "key23": "4g54xnycuc3mXqXqDVF7vN8v6syBUpgzbzc4c87KQAQFL19XoC4G7MpfXGJe3PHoRhztkZpFjodMTjzfG8kTYjML",
  "key24": "rbTEojgFTPs1J71qRHfp6XiB1wp4oXE4eFDtKSvZKG639tpNo57p4ejqUk6dNdB2LHsm9Rf8MGYBmuV4qgBvPUi",
  "key25": "357hwUWqpCVJdAEnVw7765hisCCoWDssZtiE7CP35PCpqQmNL9mccJvgj7gBf3ngdYaPk3Afc9oKaWAmA46y6tTf",
  "key26": "LoGY44uZNt9jQDv3LhVtcfku3qyNjawX7RjhqNdEue7y6xutg5rD4WFCmebHGB5aFpTpRuFagXXgsT2p9qt5fLX",
  "key27": "3Wc2UVWfr4HFGMBoEvnftyWRGCFg5Kjei5ZPqE7TEtNE2PNovUXJ8NTWBKgzKEwnrKYYfp7iaPnpNrx7atT3mqrW",
  "key28": "4od4RkzLfhMtEHK9WNV8RKPNP7vWTiqs2pgHBaiPbNokqUZCLCiJxN8jqDHk6KH7HrMQvkC9Wh2EWAkeEKzKLLhM",
  "key29": "4hVMm1fXvuikF5seZVvzo4YFAnq1ubEKKBEPjTMmtLkBBDqVGqHAzk1rGftkiUMdH5db9WERswPpG6dhFEVKJBng",
  "key30": "5ywZPboPdNkz7bhFbSSp2mLMCDK9SV5HWBTbfHavNagofM713Jfxoo2mCReup52Zhv8cDKSM1zupTejUzomnnXkV",
  "key31": "4d9uRfpyneeVbjA1ea11TpUUttc6gJLtRfTXVYckQQuENAf2HjhY5aj9Yv3AYHde25Js3rFEkX4yxEn42H92r8Nu",
  "key32": "51wi7n142xsxJTwGutDQLSdVSPYHAdvRetXpYa5y6WbDigTBianU36b24dzi5cwyj5Pkycs9PXBEUpJQUWPauzY1",
  "key33": "3cCq7Hi5gYX1c5vBgCcVpHBWuoowBsXH3KgbkAo2HxSkB9GAHxVdZhvdTGcW2UDr2dkEDW84FU46yddZcWierUyD",
  "key34": "5SGgGXHqudJUyu3yo6jZhLWxGzWT5f7qqvids99MP7jw2RdW6V6PyqJB8VtVtN3UywChT7rM1n7LGW3dpsWkMPTA",
  "key35": "5a4X17biKUz2qed4mR7bXNDjZDHo9AsjjEUuRfucPEBAxWR5dE7FHbRf5mozKU8v7isWyFcJ7N5mgccM68Rs7kGK",
  "key36": "2PD85GdEjYb7yTmwmDjkDoL2UXBKF7LmUpoFbHzUNbcSVt5h2qdmruaAbkMPzqDdRNDZSnGeSmzCFuUcxNMpqVwn",
  "key37": "3fQ5Fpii1CmriZJa3g1RAYk2scv6ks4DjbMGQ31Ym77Dq6xxtb19LHg8CYS1hy5UcRpKfzLS6bVUtJurJH6RmBkx",
  "key38": "4jNS2FXxWqs1vcqFF1V22eaGs6L26L8Ayvh3zqt3eCzfcDFJCJjhJp5b2MqKhAfJUTXTKCw1kebQGSUF7EE3rAcw",
  "key39": "Xfzfz47rsZb7aptas9vzgM3iXgaELvJqzbAeS6ttjAf8j7nF6GmLFoq4K4NkcFUSxhA2LUbJ4foPbhiAAZZkfH3",
  "key40": "28b2bLUCdH37seKhZJ9uuKn8mMKtAZmsEFhxFvYERdTHPVKvmVVkJasa2SNh4rVheZYFubiUTi6iheWbT8NjvzMh",
  "key41": "H1DGSZk2HZU7PQ5pMauMZ7dVvF7RAKU9JdHmQXj98sSRQNMdnH1BgcjfxqkRL71B5pn9aeS3xdv7aZKbAt8iyXX",
  "key42": "3R1PCJ6axjb6TDtnDGLApKuXASxqQcLZUhDkruwUshohU55mnqNuavQeRbPwooZeaj3e1nY2s1U4b5Pk4ars7MZy",
  "key43": "3c2E8j5823eSzV7FrZYUh1Kq8Hd3Snv9fwcUbHRE5ZNTThaPAD2FuNBP16t3ggGTgfaWMkCokrx2SpCCVipnrFiW",
  "key44": "5JStKkzUp4fQdpSSrkPCWBqxTM37fGcrsoVhqyzGaRafBJqYePxnToQGocwrTF1jEG4ifddjSBuKzKthfncr6e71",
  "key45": "4YCADN8aCvQAtsbrUuiNDxqyxrPuCMHK5ZHNBgykSiSFfGYnwKdRGQbpmVDHiNTdy6TvgpUhDwkXpXF3spLKw2vb",
  "key46": "R5EMn79gaLH1YFyvpg4GVURzWJRE11mtLEcE7vusA2sq8hSovXjnVLbfW24bXxsk2Mn6MMiWttQkyDpigC4Ynqg"
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
