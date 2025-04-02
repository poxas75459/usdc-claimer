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
    "4p8LyT7QMhwAcxJi851Zd7Wxxhjy5iKib9GCrLN4B6vvTaHxKC3hMGMHsyUediszCygYjJYbqehPAxVy1hVgNd9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WyEMdxJAY94soYkdPQec5UcGL8QYL9f9RRGW4LK8UFnrLmxeNvepq1LEJzr5j2XEzGba74NentxLyPP6uSMCxpZ",
  "key1": "4yEQCRw9Nd3S338ovj5YgzhH2YW1jbuWgSs4FNjcMXQ4cNM41CdhFsvPiNQdrUf1egRYD5nGDuYAMyU7WJguoXaj",
  "key2": "2DwvZW36FtvuN1uNtNm7A8ZhfKnxwYpADVfeBfywp3StAKt9Hdndh9L8YZ2hd3PzBd2yexTvtwTF9hwMVUZKEsRs",
  "key3": "3jgAvbCR8Na8Gob94rDj3YzQHzrdvu2GWBNiEYpEWmxQrkgYddtJoZ4d9DNbMWuzBDiE5y85CwduaHiPGy7rdrPA",
  "key4": "5wtkX7phc3CyGGRGK7awnXcZ3wYRY2j5Lnd4rb8kiNuATPp1i4SmQaS9k5tcbQwxC3xzpHSLoLS7bxf9RBSKzvLf",
  "key5": "4s1pDLsy3Ku7az4gZ7yGxuRPzgAvSNNiZdbEfapv5iCzLNtkhU4QLg1s2qspzDTyXGWEE22cUpg4bdExsfuBtUJM",
  "key6": "2rNsRSJkWNji5HRYbfufcxDj69bu5SiFHEHU8H43J7ief9ARFbfsee67wfitf319T6tu7R8T5ndP1jbWZEGoDtC4",
  "key7": "3MvHF2C9fPLkdyFt2gPnMj7jKpTo3otqgTwuHWCYqi8ToHyKjRveHdRAysiVzdxsWikEZzvTNm4mtREXeDhug9ZM",
  "key8": "57WXwiTbwCAMn2HHwnkJisS2hvQmtdy34C9cg3ViCy7qMfkCLRHPaMo4BWi8dfEmG9JMEyL9tujp9BfcK6HC49TS",
  "key9": "jrtVqJqTBYUSmpcVW8dYpZQgj8oYZidkt4tKGkf7qSfpq8gwPDJXNYNVRgHDMtN1tT5Bj4t3GXeSsoDeegw7W9P",
  "key10": "2ZzrkgpczauEiA1b1LYCjyxuVc3xHXFhHn1XXdkX9JKLN56MfgjLUVMBrQQfqu6Y8uXawPkPPsWaMugi6GvpJRRo",
  "key11": "39zsznzDN6jigxDNcFwVWiMVq1muvLUV9HdkhHUXV5wTnxY6AWS7d5JQxn9Nw9j9wnkTcTah2vH2PhiAYNiSCCzA",
  "key12": "4aQLqz6rDryAnxCokZ4kQKBXFuBNTNyi2CMx5tkyJk8F4otmpo5sLiT3ncWgqL9LGxfGcCTTUTQEnUBQMxtrLZSc",
  "key13": "2jd2JwNt6pkvjuU5X7PyaCG55jfvHb1pgSXhw5aSfFw6Pr53DN2i3WHZHkD9Lgwu4xuGpDib6DSFC6Fe7xZjyMxx",
  "key14": "QB8k9bu2xtkZCg31Eovva45N7jAXWWqTZ5YrA128KanMDiMUYgVErdY2fMNd9pkU5YatYM7FV2SjbfAGweTM2jj",
  "key15": "4pTMyoeMnB8SLTwtLbaadDxhsCc2aW6u8BvTuMdWnjo5RB9GQPNwo89Xf23759TtDJPEmrHGXWpPJADahFAXLsYY",
  "key16": "J1Sotqoj4sV7oxHcMmCnM3q26b5Zh6ihiEsFPv43eVRRanxEnPBa5RjtzFk5gLqDmuq8SPPpVC7zfDhxUUsbbap",
  "key17": "4hrDCQcJ3pjs6UX5GpC2f6Ha7QrAf74j5h4FNBjpBi9QZfhDseabryNu9fcHjFB8iyf7vLBwr74T2mKzKVaMkCbp",
  "key18": "2PGHN8QYvF6EPjYYnDwy3nwKgndER1V2RVMHWHfkZtuQtRPD2VdfmvRCQc221sJGZywJ8k5PNiaVHyfgQvYkYnUa",
  "key19": "3DniogSH7iyv3nis2bk7jhzLfpqf16ZR6ErP2Y2f83o4eH1NctFc57GvjJDk2G9kVJches3ZE7meZqeBQ8ToUbxH",
  "key20": "kgvWBS2Bg6PFcrKntqD9aMu5V777di8mJVrt16ZYA7qFcYCrGyXwFLx7JqQBUf8WpD7aYjiQy7WpdvXiMyf6C2y",
  "key21": "3dA1dnnZJz3Nss9gfWMTioeeUMyYjdqk9nF81tYm4nkFWQgHta5juFMJE6fq72KA9ka82qRRvNjqvof3fpdELBUG",
  "key22": "5QtC3NGacKj98Cns6xjMe6awmprSbMt2xHTpxaAHNU9eKUP5gDqhidFBV299foNKgP4MMmo3Tdo3us9jU83bz13Y",
  "key23": "wqWvEknZatv1tdQpCCB7rR3rukNrpfW4eeEZvy4CoNuk6P8TnQg9ZKc5UAVn8K3vEJwjasmK8mSPVPbbxm7tMdb",
  "key24": "5YV9Apu6fd2MttktRZEeSRasFZ6xgrDpkNnLj72cXnEKeF1uEfNugptwRSuv5MDP3LFmyTBR6LioxmoxNGUmGDvK",
  "key25": "4jNUREsQK55e7w7ZaWuY5CZ5ebeWVztUGwvrBpy9qwWSkSmHF6NxAfWqRXYatQQoekEFPKJDGZV2SEeKFXeWGkRf",
  "key26": "4X7iTxXT4o8uZQPrpgHhawebksiGqGry9RSfWmauBALcNRbVkBWcWpjRFsxjQEmWRgubn8WYh1eH29Db5pYPxvNJ",
  "key27": "5u4h1UkD4UyMyuBHpuws1M1jZUoAtAQ2UkNCy9QyNi38mVRUgPcmbUag2s77HjCXstMk7U1cCvo2EY7Mi6XFLE5L",
  "key28": "5zMv2yXNECtkraJJNiz3sHUEwtfExCEziYidotC5CyQcf5FAMS3vJYunfyUSjPMwtyaG37dcRtwqdZjNRBqqvD6m"
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
