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
    "X6jgndf4BaVE37egviXrSE4cjAZ1aL1XXpiXVEbJ1tUmopEk24o5KKocE955a6au8ZsrSeL62xoBz57XGa8gRei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3msy8u4RUWdrhYLAoo9XDFcTixrhFKtFiFxR8XaT6Y4Bch3aJLAUzUd1wyprqhsqjHivE3tdMQhAL3ZBy6UMoRE8",
  "key1": "27evR7t84JHfiQt2xndpeDyYLG4yrhifrL3QiXR4VwW1Tw5fkqTZXDRS4sDvMYK5agxUmz8ijAjZmAg5Bd7L6yJk",
  "key2": "5g1KuY6Ss85pLpt9kNp9GKWJwpkj7yokZ4XzkXQ1wZFEymy4TYEmaksbZ5vPntYRGbKvmr9ZhxCjZNx4ForZvyvy",
  "key3": "4SxepiijafGqDAUinf9WMyxiYDc33VqQMxC9F9w1TdnTYBqjfF86WKTYMP7RsDNhiMav1Dt8xeEnJrDE5e5KqwYL",
  "key4": "4wfvy3dqoghbUr24SE91EEdMy1aMp6jTs5qMJXtddfKEMaVkQ11oMGFtKWFuoNaM3vTqS7cGMpEjpMm929NDH46A",
  "key5": "2GyAT3zxbW47F3eGussLBkaUZ7TwFAX1Rhu12Sj5cbezCZ3Jjfa7gmbe1dZ2kmZ9ZkSQtcBc296c99w6gnUCxzgp",
  "key6": "5MTb4Qz1xqvLHFKHDyq1XXho3LXRphAjK5ZpCAJMuz71M7TxmJ8gz6EiVu8tX7aBvSPP9RNPNfgj4VawryoR922H",
  "key7": "4AssdKZzKCnkEAH7RyEHV978GbghPFD78c7uKFoC43h1tWK5tpyDq2jyAA2J7mobZNfX3po6YiyiEAbr4QUzpuwP",
  "key8": "2LggWapk87VqY9Dg39TuGrT8jy6RuNb1BAkFokm18ZyRhQzsLGtDEgJF4uBS7bHGj3QSvxoLeXXtk4LqeLUL6sQw",
  "key9": "3pk44nu4QSu5Gcpqc9XUydSWJ7ff78KTJhS1jvYiKx9ELmzoaYfktLo96HAdkqP5zKyPHT1irbbzeY5bnMybsrHq",
  "key10": "3bdx83iwZmvtrnwTUN6UZyDnDTqGeSBLSt5UgCndyoz6xYbstVhsi9YAWDAn69F4Nbq5Tk4gg7CL6c1n4PvkzczU",
  "key11": "328ALKPmrAAHp6D8s61b76gZBam912NjYTdZTocsoTubQhwxkoq2GZZGqqXnzRABuFDYUbhWcdquQbSpWVBLppDH",
  "key12": "4Pyr81wzoUGZutBS5pWWzRC1EtiJq7EDNZSaTyKLk6oiuDeNSp776hE8Y2Ji77iRpqKZha2tr9QNzPg6P8zz6QmK",
  "key13": "4HdbyECrov3R6fDcEDQ3rh7D946GJw67zQV42FPHbXWzWSepy8EeNookj6GViwKmiWS7GPVVNsBSCPQjFyiPN4AS",
  "key14": "5Wz8qHiv7oP3vKapKVAyZAZLUbtqRbmhbohBjtcPj5E5L2DuDiFD2nsLPYw6UJxswi53HmWz5e17gxAxmV2tRTkq",
  "key15": "4G88SvUoAEBD1E6D7h9bX6xkNayFmn6SKcrPHEVwqtbAzijjhVbpPCqjugWqDSkZgJMEzW9D9moH8GRLe1YXHBdV",
  "key16": "EZ1ZC13VDxtXZ1W7vpsm8uYkWk6ykJaUYVcRW7MUhTz9F4SacxYgqbyLp3KZYGq8TyK74NyHnaZGKvtP9fcKbUS",
  "key17": "4ZMC1MScFPKWDBapxzCSLGt3BS4agZ5NGB9FDoBuXdwMM2d2KKmoR8pQNEwfLsNxdbCeR1H8Rxb2eepDLdg8Zq5J",
  "key18": "3Cs8V9SrkqoBK7GfxwEi76MhaKDsBxTb9QZUcwEPLRvNgsnHszBy58s6iDT9ckXnMQr2jXYa1bNSNEmaKzU7LAch",
  "key19": "468sDCProLHoLWeo122pGsWq3n5sjhzm6uZNfTbNt8kj8uthQCEG7ekF1txpqWtTaw7c8SVwjrp7Wcwt5TpsSxYA",
  "key20": "3BYrkb8DRBkkLszad4bTjZAGRcqd1YmYA85e1gWuLqdRtHFNs56Na1FDB566nTGGDMduAapiDt5yT9jTCLwT5gXp",
  "key21": "cHtvesSAnVCt6jxKFhgiwBaBYWG1EzpWREs9abdiHrdME6jgs8R4VJA5kcQY6C1RuydpESEEZajCZbVzcKpbv1u",
  "key22": "5PgkZPgKNXmXnDpSBQmKZpfACxJ1G2WwvxTs1sGepHgqWUkmdTpWDC6RHd2peu72irEWgpEJEhxkgAgXMNaY7p8Q",
  "key23": "4RBpbMLzHGZxauqF2zprMFVCJ2i4RUhTZinvPybPQHW3KYcL2Jyd7ajz3vBnWNFBpJqtwsLRK9oMqy6dFbMSKq68",
  "key24": "2V9sfy9UMYpkHLrzwC6vy7e5WRGFdurakcWvSnG5PxNyaobKgfsw7vK8b5W1AMi3dv33gBJJK1yMR5ZHxmD7GK2",
  "key25": "3UUZ3pnACFPpDEJm22xhSpGaSqCegQawnRSatuJexrboH9j2djKgZyHYeNs39ZRxnMjba5fNPfaKdRkW4kkWVAWH",
  "key26": "65BsMNVv4PtcraP8AgRW5aZSVtgG3oAFYn4HMzhvvt6VTzDJeC1qgKMnpMAGFS4jBJ1AggU9taadc4F6j6DEPEy",
  "key27": "39G9fSWPThkVfyYYoaocDgVxCMBpf8FdcDC5HVhMstLFN3qy6WZSrKpTdg1EaUcfszpm785rP2fga6FSz8tuDZq5",
  "key28": "5a8kA9pnzL3Ny1KPHY8sw46WfzE33kjbqjhzkcFBnGVUBcp4oQ1aogwKWUBwwnh9x6ELK4WAUSR874DXrpyGiQHa",
  "key29": "2fV1fiqkYj2KVLVjdkeW11qdyFJgkVbJG3cWahMfVdGG5DkQv86cTyMsdsCmL3xGH6tvbKMNRmMbRBev8GpULAuP",
  "key30": "4xHcqPJ6zPjJqfJQMpEXd3NsfuGwK9Zu3syG4ksatyj4KpAE2XGWYwLNifGHz7ByNgAk8ttCpUeFDia5q2UXSw7N",
  "key31": "Q1S2ue2J2N5TPMfBv6uPMLnTb2tqjBa6iAaaeiXXhrKpFCzQ7FgRJV2xPDfr9szDotVBvFyJnvHyZDXhGtz18zc",
  "key32": "39NE74DXLqt6hLikyuNPuZdLr74JajpbnEH5TKH2qsFLJzNaBGuq1PGXE4U7HjKXfUBZBSv7sT1rxgg5i2JzhCM3",
  "key33": "3jytqryiUaKfMLUCWXCHtKbyDzNG1fbah3eiYWbJTBRcZWrzTD9mHMHRZc19WTjMwp6wy39Wt6k8Y347eLJTwWmg",
  "key34": "21Ud76osVo3CVxUDdEGCEmS3MFKHWuwnsvVAUT2EYQ9vNqQkHm5YDzB1FTVVNL7QMdbVHqceZmdY4Xz3cMhuTnfo",
  "key35": "PQmX8ugT4YuNncciKLTPZmUjQmRovBSBiXAQSX8H6HxQYmdtNuU2RBNHNQgnyqPdvhLJvECuGvjeUGhN6kcnL6v",
  "key36": "4dWtFsiSJAdAZRekxU17jbNdE7WvNM3ED4qMjbHHu5BgVGWG2M6pJ86CQsmHR6V63UBo92Wr6fq8AfwHPBK3ikCr",
  "key37": "2W35PKk9XA3UyHkjCdcUT7ZiQoP9JgnpDxzLvfoWtKbnFm7Bwi26aeA8JBXHEFUFaL8NX23UYNr8wBPkbNKLeSim",
  "key38": "2Hdb5MK3KQmJHVpRAYdPqHpCCPyG4xK3Bqx5E5umsLJ1YdVjcjvbkRr58okNSSe1Fbv7LXx7hBojmAcVdpyc552x",
  "key39": "54E6B7Th1RRGiNHcVbZJy1efpVMq84JzdPwrBZVGHALg4FdR1DTYJ8LbkTFUAtzeXaDjtjbYDMnzFBEvU7n6ojEo",
  "key40": "5dQ7GN2Ar5Yhk8Gnkuebxre41iNeQmpHoQxfoaDvPNsGL1hXLYEcuCvqx81MLCWQpuX5TdASjeNJiwNteaAojTE3",
  "key41": "36Goj8HXXeXgVTEok54dHkBtBHrQUDXnWPJbp8TCSgojZRcpW6Gfm5oKRxRbfbugwopxDQbqrw8ZESnWxCFuX6VF"
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
