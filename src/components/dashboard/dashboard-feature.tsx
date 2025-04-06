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
    "4hb9jqLyEqNvWpQ6ATffRd75Evc8GSpo1X2W8sprF63uLtosHYEHmPp8PFQGVZ3XvSxcMGQhHj14rrXoraBCmJC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iWifLGdb2vtJJ2WG9y4BAktCts7pVnNwvBe1TzF4dLebXSxxwwUVcyD1pg53SknDSwSLcbdesMrJgW41rHAY8xg",
  "key1": "LQP5NA6s15uTSpUF24R1DRB6C9i3mLg6YzwFtXwMgnR9eWTGy5E7osnGrk7RGjjETkPi2UgbZ3e1j7D4VNSfhsp",
  "key2": "DjjUyR4M9UXNW6gC4ibbGQ1oUDPHXYmV8RBBVtJbS8tqHhkYfkhVUsr4BdTUXxsLuRZB5HtrJHMxNgrFGn2JEV1",
  "key3": "9wW42Vv47vycFK1A7uW9YDFZdSNnEkCuFmHmCJ4jZhK1BE2jq7bnTWdzz6qDQ1icG7ne8bmATB6pbJtGHXHpydg",
  "key4": "46kfrupnymJZumPkjCFqGPZvf4AR88mQPcss6KLDu8rha9Vzvr8CLkjZW6Uzg7Xz2xucgRbmsrLkNZmNzi62RH6r",
  "key5": "5cdwrCSMu1fMfQZUkfec399NMSYKd7dcNz9jFjQgq9uDZM2UdCDfEok31X8QupSxsbCDLEeXQCKLdhHJCa8zDjPn",
  "key6": "4gSrdiRcMBWt4PWxPpQrxqV2fweXvNamdSGL4Ns11HWKjLhHMVwzsKE9QBDJwjT5kN7kqLVhTK45Z2tXHzTNfqaY",
  "key7": "5EoTPzjZd7ei1VU9wU38JedKGxzVqkbgDCG566yBpT1ixWjLbmnQe2Lb66g1CJLC3hagLzbH2ktb5JmjATjvy8DN",
  "key8": "3FpdwopgoHY97JkzKVRMPPffRHgR7CnDU76m3SgmPtW7reLUbaHQ83spNoQ5txfzwB75CTad54YkUAyU9sh5vxyn",
  "key9": "txwvqkkp21ZBqW147gbKRJMfKGPpfxnjUejzpfwByKfpMXde7vt12pBKCD9KyHsDZc3FYTmC9qEGTkn2hTsLYqQ",
  "key10": "4QUuKeGcNm5mY9TWpHweJV2fpGAmPajaci8ZsTcTQpiCJZZowREBrSu9EgyP8Gg84w3xRRUZCx4Ysq6xZ1PoU9cx",
  "key11": "5Qe7hkH3SpWB871VCUBe9JL22ne6R27QgaoMvSE9nnTYaHf3M7gWFHtMyTQyJXNSrgH11SBnx5wwMNBKqXVYbQyC",
  "key12": "4SFeJgUBtfRqWDm8ZjJZ1nyBPSc2WJPBf27gQy54c5RAVEzYaf9nXtKNq2p6raEAkqxiBQfdtgP5JKbViYMvtXyW",
  "key13": "4iXRjCL58ZRqrbdNCn7ygP4i7W9kw5WaMFkteTeF4qaHetwsPF1KTKHpHcCAseXJR52k3BpkDBUPJRzxHJzoVCDM",
  "key14": "5hQZoRXRP12NNFRRLRpS5iaSSpvQKHPBA4nDf9TYVmeEho9QTmfhuo62aq1CJDYZzsJybtMuRKtFiikzJrEJfwi6",
  "key15": "3PrknWjpe3GnRJdKCBeEpkatyDkiPvFeCsknTm9YP5czjcPJFPsyyAJiUCKmyPiT1ZSt5hS7UjUpPriJgyuhUQja",
  "key16": "2pSrnFP6Bgs2Pxv7rbqn2Q5kTqfFSTDsj1sSNcYAEAmS9DPfU1ZSzDJoR1t55C24Zgrsx2F7AXUrBSCQ9aKM7eJx",
  "key17": "45nNKKN9L1SXQCNCtsptw78C5pqPE5W2mYt871WLVQg7td61jo7eg8L2GXJzXxaLcTwsN6kDhgU466ASSYFTWpgJ",
  "key18": "3DpQXZTYygCCUcAK8ZVZiuCMuV8XgiBpjsdrkH7WG7rYgoKbZaZJp2mxLJ1rCaHjdmXLxbuA7KKoeSBQbLWZ1KC2",
  "key19": "3mP2QPTdZJMNTLRa3jFisoEtNBv4YGdSXgVKWtU8tDaDZso2EA3pKmwQV2vn1RHWbCp3NehKhqN5umzEViTs8Dm3",
  "key20": "5okyqBj7ML3bVd61ZzrssvB12K1W4tkxdCY8CBbtVhx7g5W2rme8yBkwJtmdJkZ2MNqNJEbcstfmANoFPZixmt8Y",
  "key21": "2whxPQX5jgsScs2ghv5n2WT3V72mQZc1jxEGZ44Agnd6Y2V8ASvHMNeVCeCrcur9NgpixcJxg3Gzmo1BwNyHSdNF",
  "key22": "MAqxG5spRrdcyaYAjRYCTVxwcb27GxxmhGE6tei9sDrBUjh8uNByYHHjwbchTGPvtNvdCKv2QaXV4xxqEmcsnVF",
  "key23": "5yUxbUccrTmEJijNRQZXMGYmZk91qxV7ThWvxJcHKZzNs5GC2FjMnc6AsDvMrTXRDeRMK1ggNGGSV54dwp3ku3ib",
  "key24": "453tUni55GPsA1bLPpt2ziTLVsyAkDzQcHKNG6EsoJRXPozRRGhRENywtjoS9Gxk8dg8gSurp2nY1QHpbdtjbt1r",
  "key25": "4u8XAotaGqpqmBHA9715s19hxG9NTYBaemQruVa7bW1htw3DgPYuzFMk1SCVi4fggh4K7MEWjAUViHu2PbP1xeHS",
  "key26": "4yzQGb7yt3nTczxnJ5BkXdHot7qfs3hov94ahjaXBfqYxPH26Zygh8bdempFwMu5yDBstNZRLBZQE6H9FHvv5Vt6",
  "key27": "3QPu7aeVBZmepvd8a6jKiGG79ZugqA1rP3CrEBv4kQ4aATSPgpaBdpdndM5Mz2QytiBeFFeHxXPk46poAGaseGhh",
  "key28": "44nzYHrMsunr2HME4dDRjQ7r4ebqxR6RbFCFJY7pwGzdK5W4eoGA41zn2tXCNEUn3zF49CELH9xCvRqpnkuJYBth",
  "key29": "suNUrrmVo2aXRf2ULbeGrANuJsMYwGpi9yxn5ZTuZMUReHm62VpaWVUYfpC98rmRgd5yggrd58QDS5BYbtif4BN",
  "key30": "7CQweDjX5v8v7RSy3Hd6GRH1NM96M4U4PcPJmmQagKwD5Lz4mQVuz1LNzb8fFFaKheKTqwhgbw7PXZFdswCvsSn",
  "key31": "2eAe8JqGngTmXmPCEGNh2sp9QqRGxv2MgdNiwqHVRupcoQs9yFgBBU7f8qw4EzsJQnLVrAGcHJU9wQCMGBfma8ii",
  "key32": "yL1iT8YaPqRoTFLPCY7g1AbTxEPDoYrUrtPikbWUoWKGSfFSfi3KehbavVNekxDrNrKihsF6xXFQsf7aphLHGC8",
  "key33": "25vguHTAziFqxiwu7HNP2tNQ2xiHoKkqfSJEGinjquwZa3J8RfKsYa7pfxXzHkPL8QA5w7wWLBaNHXdoeCNYCm7W",
  "key34": "5TsMvGRhmuUZ6KxaeXsH41tnKBxWGa1S4VUNdvBbk5vW9AfYbnkCo3b4HhTkzc3o8z7WXPateb1rAfJHpnqqvXDL",
  "key35": "4F2r4SgNrmSB1wH249k9hgjoLvRpeHUUJLacc7SjZfL75WfZt1eAc1a79hhtWgkJYjrB6u7YwLQteffwHgurxZKV",
  "key36": "2rM38Jz7s1KqDsNdVTehCftUyDixvLCrh8fNA9t6YpgNCiJcd3xFvvc9Q3ZpWFZThebYUrRKq7b3maCFXCFezCeU",
  "key37": "52KdP6MXLfbB8UZkpAPH7xFSDqdoUaF7dPQeS28bCsNRCnN7YQcjBFaeaoMiKfafKVayBKSSDSyN7KdvMfwuPGZp",
  "key38": "4r97mZhKhi5jVRpH11Qetcfmi4zWtqQHTzqu3L9UUJbtfKbYpuN4mcgAG5CEztcEShwnKjqDHEKVkYS98ZkmMUFs",
  "key39": "3wEfRpUvhiMAbYPT79GED3D8gLCancbvkDCGihs8DPHzKRHgzeJ5fEFTNApr1sPLcv791h1u6KknLUQs2qyfgBcw"
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
