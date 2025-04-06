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
    "29FHJj6ic2aa7Zm3jZWxBkuxb3mBe1vVLUNosbMh1BJG8XoDkyudTAV3tg3nispnSejsxunGM6E1VSrcbnuWeshR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TdYen2ExrAUgLDMjMEuAEZ9MHA3zv6gu6henaKSgsmTLVLuRp51GDE49CnMknH97C1MsojG7whTMymRhUzLj1NK",
  "key1": "4SU8MhWMyTVipx8xLczJojy5MteneKuQFtxgzixMFH5vGm5coA25afpozMmtQbi6xoU8G8vQ1GUnfJLgzxyKQMDx",
  "key2": "2Ju1de7C2CQL1PjQK9XYFifnswL2h1pt1PYo5HdZEQnsSijPFyGYtQ6b5pmSifpRuhBEjB8hQjxzo5U6byVNmvUe",
  "key3": "TYgPdjwqhSL9rq1nMSwBbv9wnSeJdRDwzbspXqRkEKxZCRGYYL9TRukrZSMbdeqyxnN73EHxb66J1akYiKyEJGQ",
  "key4": "4SyJwjQw5QoZX777sk6HXeDaGE2LnZ6okms1ofc8xDKiA6DJJnc2fqAv4SkvSZpByKfEo7yD5TEwQ4cszvEFi9Mo",
  "key5": "4ULFNqfXWY4677xLNCC1HhT5QkFhDoRjBoBLmRu7HfC4TZmLnhhvgMrVLZezvy7oZnGGgjyJTcfkx2SBmpp5er25",
  "key6": "j5n9uvWGtTFJ9rrYjZjV9wYt7eLynrb1CopjKrTUvc5WnZTSD6y2LJKXatGw1Pd6pxtxvw2M3unFc8PjTQGzJs5",
  "key7": "2YEaUDphXVJVJzcZV8LjrV7WERvD6euNuWpCUEsMukAMcS1eQAf3riNVeLzJ4jgGL6vzBKLLWC34MofBvNtZEztN",
  "key8": "5WD8oKZVuN11ofRfAqV6hqSBsXgfyFkVdeFbwAW58eQrjib8v8yeoUsZG86KAJ7Xiork2QB4thUjeE3pyaqKD2Wy",
  "key9": "8ctm7Hf59tKy62zLeb7wDcGsn6TpnKA8bVrUQo64J1o4zfRknnqcu1udBZZDNK2p2ysa9im3mj2bucja8iqpTre",
  "key10": "2jhEW3GVBuTBTqebwN1mA4MEmVmD8Ja6yCVghN5s9hKvAAnwSpy3p3q2wdWmuAg2QtqqmENFLagqdKi33WiA71rA",
  "key11": "SgHGRbQRMgVjLL3tsCHN2a9L8ewa9st2EhUCULz4Qkz6LchprF4QGN3qecBSNq9SdQU14zFWL8bGX3sKaoiDnyM",
  "key12": "3TvvVTJDJrr1afpSP4yLaQxZXwKZmaYkQYneZd4j5krL3GRZVgBmAuCzngxdZQGueoXLChTUhRb43FHTdJmvNoq9",
  "key13": "4UfYFokrLkuxuxAJr8QUA4EtCeRG8xEfNbn52JpYTe9AG7JGgnyxr1VGERzD9hpkJFz93e1cNsgRG1uAoUipSPsz",
  "key14": "4NVNBwypYLV7Tw2LgARAHiZ37ty51wJvs2HQYUJC5x3f45A91BUg3nWKWVCuQxkVeSUt1sfaMDYDHv9ffVdE85KJ",
  "key15": "4DmrE4UU5Y9oHAu4u74o1ZKpxG6niJ36n1DfG5diuJvmzJWs8W1nDn2cJBBYXTR2XBjbqrSYQEvnNcctqoJTz2LU",
  "key16": "3DANKdsX3dBdFqaQ2RmLHvBbs6VuY4DLzqMdcKWycehs7EUARVEDCexSXHaLe3jNJPnShxSFBMrsFxKJwGkqArAB",
  "key17": "3mcewv59DWyjDRHEHTvPhzZJNK5MzSxq97RD77CM9NaM4m5Hc8FFiHDrCpUPqpZti69j3V91Uhn7UVcCHuAhVTxu",
  "key18": "5oGsV9KZ9Vy8MrSV6chDfyKCaeqdP3t9mFLhbzsMoVpe9eocipE6f4xaD1ymRPYnMk4PgGDUCtLrSFACvPjs6PBk",
  "key19": "39tt9Qr1UgekwFYbzsjuP2o9PUyT3HvAgE6mVbdLA88wfrovmHzPbyhdw9jgLhMMwPiRz65xm5HQdg8mhWR4EfhJ",
  "key20": "2vwipsAJqXeKNgBcai7msHb1FYC8rxmbKVRyowE6p46EjzbJPBCV1dLgUrZY8Rz7SoSAMmt6VWACNcmGhrp36a4A",
  "key21": "5vmDhC4Dcm8B53A3DBwiQjtLJ5MUohevJG6Q3gLQYU5WUFNP8fBaK2mFuk3Hz6LAuRNsj7tdT57qKREuerHhXpib",
  "key22": "4np8BbohrWhxQ8rPq84jwNAv5tF9TsDnuv5Vga9mpbmiZEnbxtsR4RCi8jjxxRNJQ8rR9kQ6AGkMtMx9jqdZM6xd",
  "key23": "HwFhywb9Rz5sDoTHGwoaCpHiwkDNpn85eaM9PbzBmCuMWPUPWk4cSCLvtYczWXd2r84bHCjaWnmfTrNhdjtihST",
  "key24": "2RnBLhVdsEfdrnvumqMXtvWsz7ZC8WrpPZKrxmSdAziXK9M6yZ5RVtiZQ2sMWPDsudeRyrn4pSFFDk7EKFi7B6qQ",
  "key25": "4pPM9r3DRwuoVhQ3Ky6EvMZTLZitctkLD2ECmCWKCiji2jYLr9iJrVqMb3mAM6RbUi8GA8rMy1DbGad4Y7iXqyzA",
  "key26": "KLbfuQyC3QuXj1xCZQzFN44ndQ4PqeSonKrw47EzRCvxeQ9MHenB9r2dHhfxNARjM4B3Wbi376VhtvdxhUmCUa1",
  "key27": "5GYDFt5WXP5sHxHXkH1NVNNvXyBbUMgvdtoJMJTRodWtsyw1DsSdnJMVginBSHYDXjHWAmynT1SFaGHkjnBAwtV6",
  "key28": "4hRcBEgF1KgZu6N6MM4ARh9y7Ege57YQL568Gb3JevPzoZn2Jmqk2aPS3ndZGHBxRCkdTj5SiJdSpB6vCqCUATBW",
  "key29": "LMRdPiQgmiQcN3MpvDBgxQxMwCSKcjGGSb7rgyKtezCH64KBZ3kMQQcMmK39jgphQnvRaU6zRr7N1UiXbkWzE8A",
  "key30": "3ER3hvW47wYWqCp5bmzsaeTwBjEvYZTj8CCQiv3bUtsN1MoEfj1siWQxvc3VAzpx6v6QWbHsQxwFpCfb5a4NLioU",
  "key31": "61wFat25PA697wVqoPUGERXd1kG8u99xSwp1Tmih6ZAhCe1M9vWVQ68K99MFWueiEkb91wSuKsnVCNs1ACXzcWE4",
  "key32": "bVZgpjWrMA6Dc5DyZpovW6J3fjjbXvC5oD2vdGqoyohR9L2dfwzcDNxyBvue8CD1fyhkaQgyVPb18ooK3REzcQR",
  "key33": "4sBR4zfL1ypXW7HDaykN3XFwY6VzvRbHi54Ek2crWbcV2uZbHt9mek7TQGqmK7BVbWq1jshqx2g18LHJwawh4dmS",
  "key34": "yvMZpZit43RHRNuXQtbE4jsXCnvdrRS9HBHpJx2yaZuyQwHgzrCCmPCMxG8jZ4wk7Mw9DGBPMY3ryASSNhzbEiK"
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
