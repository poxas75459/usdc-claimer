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
    "2ZiBFJZJKfsJJKANyAmL2UF33kJWK78j9N2bx6hLZi7TC6T37XWRCYGD1yweW4RpsqdV4zuHwSRrNCX2H2cvTLQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PsefCqkqzys2Va8J79oXFSTJruMD8snDEyecD26fbeMGXx211y2UqDf3KJn1DEGtaeJ77nae6THEuTf8xeDGHrE",
  "key1": "485vUZ29nzv59sLWGouqtbvrXaAfdyzW5XhAmP1AeHvBu7nx9JihmxDU1CDjLakpvK5PKYVN2zypyCGomumXqzdm",
  "key2": "NTvGyd78STPMKy3V4HtwfTrMba1pUa7p4FZTFRjKKNi9wz6b232T8B2ZZrtBH9o3qS3VWNzJH4u7k1MPkLMRgSy",
  "key3": "4wLUDnfhDNZTsr67tTzvygj74P9FCkdncHBi1X4bkZagGU7jzv9uq22DdPT6SBNFCnWdBE4akP1SfxAxCofF33LS",
  "key4": "2Lrc6SAuCpFCgn9QyDeoAQW37R7JcK8KqfQ894SxhWmVjJVefoYDYKVfYS5gNynXxr125K3bG7pdbyM3duT1Um5s",
  "key5": "2spVJnyk8ejWB4GHpkasLmSPyRCWH66gfNxmFyGXTFo5YhFxS8cBVRz6TfoH7UiVnAg9Wc3Hzzm7fWY4s5UheXUF",
  "key6": "3a38aNT3wws4bQkcnYUERENesEYdXTi5ZnWxFx8LrGyiKvXMxkCAVVzJRJNxMf61pGVPeCnPmg3UvvvgaQqZWoxH",
  "key7": "2jXdRegHqVpet8oBJHu55g8iAaoZhS5Q3JUqcrefPxHRpMkBPagHbdzpCuZqosQ3xfqp7fVy8yz627rr4R6rGZJK",
  "key8": "cfL4TJkL7kDTbWyfvTvNrPrN2BcEcobdLQmnzzaXfNKWQRdKRo7MPGJzeEDfvgJj7CnTMjn8uA6NDrMDQ1DdsRb",
  "key9": "5tEtZrG8tTmuzjuVzKo1wnQ4YMZcmii96Md962CQ1A9ShMBhcTUN87orC76RY6MFoRjZCHpZ4FMC12wo7ZHmVfw5",
  "key10": "5Q3wxhtaVSvqgt4AhYhscdYaBxgR68xZrgDbxDjcGGPyzsCmVuWEQQX1nRK4Ep3ZuCVt2zXqpLJxhKm13hXHbYus",
  "key11": "2aZduwCsMSQBZCn15S5zTeXqLGJmHszHi2vdzhr9WUbdSDz6gXutcTgTrvELCmH5sQtC9Uz6o1c1ZyDuLgHSusRZ",
  "key12": "33mdx2hicG8CcyVt6z189YAyZSHerYEfsFwAHwNrFEuNUYa39mMsyd911CpRviBKmxqUtFetQSV3cZWkdyYhpU23",
  "key13": "4FacLhRizQcBdpcqmJPwvVBAtWbgpejfhs4jLyQvevqhSmiFVvrEFxUGqiqp4jZLyb8V55fn938HNcUgmBj4jELs",
  "key14": "3463hXzUTaK7Y3r5jnGRZfGrAfP7XoT7J2dTg59C6kWckFMiRv3dQg5yNziSu9GDLFtccXco1msMmzCGvWC5Tf4z",
  "key15": "3iuvzzhJPTCYdWu5ynDLycqytuS2uWyi3dChXt1M33SNS1emZDhBUZYboc4UUR4W2M1kHCoXf13Bcfi33KMpYUCr",
  "key16": "4Ca42om4Tjc3MQY5fZGf6JM7uhN4VT7Rtq62e9mhDKYUpqa7CpBMXFKhqXY7Ky9X24uP7Uo4JUnagMNV7oHTfzKk",
  "key17": "57W4i2WBQovnqY1CwbnYyzc8PDMLy9d2XGTV2uY3wazHcx6iBrFVREToBZ4xujBgotrBcUPqU7sRzZ8FjgyHXtXy",
  "key18": "64d6mqpBcbywFWchQkAT9h1Yinssa7kFcdoVdSBagz5eohdeDo1JP1gta1GBMomXBA5Lwg47UES61qkWiq9dMxUX",
  "key19": "2hpp6vdqdfqU9AXAvPDeUmn5si3bFcVwiDgUCT98iqZgArWuitR8BgPdyPw8n1x9guEN7hZzayjvYw9gqB2iopWA",
  "key20": "4SFwBtnE9V6RcDjVHvWvBaHtPP3gKroXmkJUZzrs2FSfpua9h9BKqS9XpmfRvveXrnPCGXLdPCLiNaFgerPAamKz",
  "key21": "5HGhez9CitsGtW6V5yeFrwufvHHCSJyomvqUiBdZTKC1jJn59sF1VVE6j7fFAiqQxacVtdRoaj7cGtXc1P1LNYAv",
  "key22": "4qbA5UdUTCC9oPc84NyuiWeNUqUbU4mM6Abud9xbrQzYj9YoNTDw9qPQhsuxCZKNXDTCLeueMYUrLPBD8N26QZHv",
  "key23": "4PkUxS8p2AhfgWbhVRnCMfMutartzx5asmgmj97h8ABzJY7rrMWb1rp9hM2vfdvv8H9cnSDkb3X2sdEy9VxbktTo",
  "key24": "28n2upiMTqFMhRFgVAJFJLAkcpjHPWMkxxryeC1eiKpHkHyeBUTbfmZ33TNUThCT7e2khoxmUYWLKwR4qn9n4v6c",
  "key25": "2YBnV1W3SZZRJLkLxFix2hjHJqkJHzUK38T1JxTk4gmkadwvci92XF5qWdsEbja6Wdvf9xmPFzhe1Q3dngegqnz2",
  "key26": "vUYJ9aC7FgepitKyqv4BHuT1ikkEzB3zgwqjsEGV9nwUo2Ya9Ro1B8Ky5cnw2JPkfKyo5E5mzin1WyFGAqo3WEd",
  "key27": "x1HBjiP78DUqGvPZ4Dqqi1M2h4vmRFHmBMdVqLxfKxYL1eR8QJZwgaK83aduqCBEs2EMESZYV6A7LBobiAaKkno",
  "key28": "5fFEZybkXAtsipyCZBy5Mk5vXpap3ZR9DfpuXiyB6eyubJKAZNh7vQyKJ6QpAcdjJmrdjxQxXrtBDLDqZa51m7Ro",
  "key29": "3RBDY7XWxtTYSZFGSJivVX1eEQ5uF4Za93fC6TRn8JVkdqR9EbekZ34cAZ12evVvJRTAUZEACqfG4Z38QrYm4eSP",
  "key30": "3ZnFFYRABPFvmivPzaaRnRuGwGH57EEx9rJVm1nYm4rocGtwteFdFDevUSczP6Q3JqSoZ96qnYMwvcGRw8m6ZwzG",
  "key31": "2JMv7EuVM5QxVK2u9fQWfNWH5CKzEyLe8grBJGQhNa7WcEuuqTixCcn4SJnQQcTRhcNugcxhifbn9ReHgcTiiVFv",
  "key32": "3KoyjvXtPm8yYFVPMKTLtgBFEQHVLbQciSbV6DnqCVhZ9e8TRpGUAcNtFQxx7PV7aUVtt1NXKboFoedRxhCD4hrt",
  "key33": "3XN84PHXyX8ZBHrubrPW7cQaZP8SSWbWnSnwUY6JiaYoJd6M3zBzXRzKGsbsz9WhAewwMJuifaaJ4tagUMSLRnaw",
  "key34": "5qAqsfqT4KwfCqEPgwNZZXhWgoA9V6eNZ1ZW9nFEz6EVBPjdX4bbZuU9uxKhiGwxymtDQyrM73txfoLULKKW4nGd",
  "key35": "4QcwyP31ZFL6feKccRU5tUerf3kWXuKSpQfYvHWurcXv2vWK22M8bf8Xy6AYcLxCziibGDa62zyNduHjtu7w3UCr",
  "key36": "3kskGyFQTUoCtsHjnnc8tHJKbXhDUPp8DB62nAf7Dp9FNwJzFpNDkkNgf7XpievjCFP2c5HNTTkv2fA7G5Mr1Cr3",
  "key37": "5eKUt8qsgNdNAD8nPCwx12udpNf5ANsMjB3MSf8vxjBtD5yiuX4wDXChULioFnWjPpE1aY3m18iGbnCpWPCSjAje",
  "key38": "2Ji2fRXkHMXoHfsTM12EaebNxCoTP3qogfCULxDEVXLn6mFHPJPnR6g8vX7zR2BMv7pcaQsP5Y8CV2GKPaJk1DSK",
  "key39": "5MPVy35Jtt5xne9o144gQojzkVCgRujk3YbK2cjMfktUar4aAacpoKvSQeW4EMuZ3xQL8mznejX7qQSj6g1C4Gff",
  "key40": "3pJPGyxpcc4DYPEaCjci5mMAGf3ghYWHo3MaM865xZP1yTtSrjBwnZtENNHWVrsfxrdphezN1f1YbpoQJ6n61WcM",
  "key41": "5E1EgwqeZrGEaVVtDHDUr5SLPu8ChA1A6aqhgA5yazRCz9o4EnvAKzFgunRnZvLgHvztWst65QfwmJS6HJSzRQH9",
  "key42": "2Z4wkh1jYHuodYZ5JK9jz1WFJVMR6LXcyfFdjVcoCen4tcLTpfGjW93q6TykoMKSKcY4Sm2Pn7LdSUsAjFsC95o8",
  "key43": "3DrYhUZhYToYtAg1Yf7ryKsXLTBeSdLxJMTiLmSiPGypzXiLEFMibVWhvjL7sEacpBNH8BnnCmZZEzDeA7YFJkG3",
  "key44": "34nur7Jqf5bHB35masQEGLYiNa6PrhxXWibQBK2igpozjto8NrXYCyoGWstLGbZVB31D2uhvKvvU83gk3PhfejbN",
  "key45": "432Yz2oVdgLKwb3X8jSGe97DJL3LNRC7JspJuRAwwf41B3p4brd4nE6jGAy6XrJSRvXJZbFQbPSNbPjguGqt1Qb1",
  "key46": "5ZRHYdkWreiAfWSFW4UfTbGZnXXZiq45hj1ffjjy7EsoMeejcAMe29FHC75ks8VEnu5dbJuLeBLekJTnYxvb2ZuP",
  "key47": "25gkYEZtm3fxAWYNFjbKT45Q4MJTjpHn9YzHzzazDfKdEjRtGs32biBHy3cZqC4nEmbNyYMaEPGvuuCEh88gLqa8",
  "key48": "4JZTc7kECT5jzToKgYJsx1vHSKwNmd22Gzgc7VdYJ24NnBEZfZgSCsr327qzJUAjaQSrWbyNPWJmDSk5N9KpLxVd",
  "key49": "3FS8AE1pZbDrZggY4mZ1bqgvxcsW6pY2dNDP1ukh6gVLKHR7XymqF2eGxXg8dXoxCb7xQygGugDHD92pEydidm9S"
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
