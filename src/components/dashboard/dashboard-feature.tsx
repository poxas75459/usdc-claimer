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
    "3gXx5dQRVgxLJkPJiyV91rvydU9YRNTsnyXMwj5EGPBqofj87EU5jpTzcAFvKtjhYzBLRxE5hFvGSGDzFfyxVSj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x7ApWGVCSsPyDgCkpb4eKSjLGvz3rNuyiJcbAZXWuAGDpDbT6BMMUjoPwihS2aY4XbAi9GVuGrT3h8e33Q2QRHA",
  "key1": "2eqQNfKijLw3oerzJZMXGUcFUeMbYeRneXAQwb2Qfy2bG7yJBdkWq5LpnYVcKjrk5iCiUgdapSfXA8EeNti2eJGF",
  "key2": "MSmuoybpmdCpY99UE4AANqzGBKANjGFJCe9rqq71TTgDiF97W12E9XPSQD229grbtA7GFeu7kVHt3WtueKuEJMT",
  "key3": "5onTheLE7MQzasfDqS66wHiebsmwBV6RFPQm58foiMZMpF6FUxw1n3aZohwsNo38D3p7ghtsqfLQ27fZJ1mGoMNN",
  "key4": "3ypVJTk6EikbhGpbTi66PyU5LEAC6417hrXX7w5NKzXYJtERDXeeJkb4FGUarUVgBhAuiGP6ArxooQUzfhxiHn6f",
  "key5": "5UM7hRMqPSzSmGqqwyq3Beb7xXrpkJhYTnsnYfUcTmcUFRguzyLSbjKypK8pxfvxpmKqQ6CWZFJA2xL8XN83dLqF",
  "key6": "uPb4goRCMHSXpG6ar7DEYEYLG4VdNboLZwq2bTfFKRmQi9ECxWtvR5Uurz3PGGZFS7smkxVmZPTEQhvhRH84cV6",
  "key7": "2g9KkTF4xXyy83vLFxfYPQvE5BxueZzFjr9pbDDND3qtcCnBmXATVDzxTVNuoUijjiczDiPMyXxoxuBm67iZseZS",
  "key8": "JQ5UJtEeLH5aN3tGjwZkFPZ1P5FV5hnWKupUx9AKBMJoE4AN6nDdWQJTa1SHQwQaV6uAFKZPvRaiEWfHwqf2qTS",
  "key9": "2w2qDh19KXtSDGQDvuhk68pfEAoRUuB596CzsCvSUp5watRMiL3958epUgezoy7YgtasDTrnSmKmukAA87aBTdhR",
  "key10": "2QELqzR5tuMgrAPyhuWDH1azBT5rUoaqiRB6ZUx8JTe1Epn9JyGPDKYBV1VspiJiQGPkHbiMqYZFZBzGVQbHJaHH",
  "key11": "3oJyYaDSgLjurBp3NcAPbiZzc7rifBPthTdmBK8r9SE5kP72eJfGbyDUUTE1UHC6pMTqG1kaK9A8nYfnAxuLCenL",
  "key12": "xQ3UVP6qVQKvCdTbKeaewYKV5Va1SrxYZQJnYk88ZSEPWX4E1tPcx8pZYBnxSukWBZAB7pBr8jFEN38wqaLsHsq",
  "key13": "2g8wo5Mwxnt5DsLpXFmjJJ4Z1PzBGF6NfTY4xAmZTBBwnxNwvGciGrcVDSP5tAiZ5oP6BzMuGhnESKqZCgfc9pM2",
  "key14": "2ijGfjSxW3N3h6CvgDLmPZLHoYjTV15RAwitNPHheM2yfzw6K27fvB3wNQ23Wf5PLPd2SYhiEnzA2z2cgYfguydx",
  "key15": "2jx82nkn4QdZPzsjkJebjQossHtiVHrJzvKMAEioXdNg26xs9Cdt2C3CKqmKkssdWh5KyYf9SdpN9a399ZxDrB2s",
  "key16": "4nXMg9a6oiY35wNLb56BF5gqYn1y68rEtm56ryefF2krc324iskLZqqKSWaPGimrbVxJqCsCWo1D89yyqV38njXV",
  "key17": "284cvsHEEkTL3C6954BxZg2mvQHXV1fVqPVjZDaYSZYVwCn3xHV5MLF5UDfNufaEfockP3cQEZrbYrKAAFcGcELh",
  "key18": "2ySnLa5xpMdCi611VbCuBfS5VSCkgdTfqRSiMN43aZy4cbfudM6DzsLBEFhZrxHXKwY23xLz1ZXaWdWgcAoZMNb6",
  "key19": "279h5aTk5cEunQ23YsSkzekhieCVTxYV3HGyZkWNmfqvxABqoMZhzEf3F43sGiX9AaAHSpXdfrUiX8YA4AoNUNHk",
  "key20": "2rNfXr2xVtHL944KVkqGeaByvRiV6caALwiXc1Cmxc9vegqS9pUMf5AeSH4ac9iVwL4WKJpu17HJTPAkboHNxAu5",
  "key21": "5Zy2Tbn35xpW7yrwmNGFTtsqVqmgyBqPVB3CdoYDzuimBEeRn8T23ssVkpEBb9c6UXW1L3si6anvLjQFVhomhiq",
  "key22": "a3dnHA1qFhCk4GuQXatTGcE9tQfSadvUnTEYHrX9ZcR68yiFVU1vfvxEhNSANWtoEC9VpmK9qukn6akpvbxc9M9",
  "key23": "5vxdZWuvPxhAUGsF7PubcrHEt3s3ryS9k6MKM5fH98mVdxmRy8kMC3DqQKMLHCjqTDUJyoE9zQ6Q8z6AarttUxRX",
  "key24": "x7gqrdXWZABieVkby8Z8ZFF1BAs3Qig1bc2tN7YEKvRJwshPEj4VDNB7jP44UvRoFwSmHjHbaFM7K54jUADnRxD",
  "key25": "Dc8QcwZSRh7H2vmGGYwbHKoTCM8e3zZzXMtmNYM54Uj56Dg1QtKxRWDd433zhsmPRgXgSbNpNRx5VttMpu7KUJa",
  "key26": "5wAVckW3A7ACQw94mjXfRytR7MepfexpYd95psbyMJsDfKkxq4CGcRt8ZnTZ1tA5p2EA8h7NYxkPWLY6z3Hm8ikR",
  "key27": "4VedMwrSxfw2bxMFvQsuohvJeisyUYCkzwXV46PZHBAhdw5zwaUh3qoHvTxuygYdpzpskPekr7dy6975aBm7dqvi",
  "key28": "5qZRXgULMT6Up7ZmsHAbZGmKWurxJEvkh2UWJ2x1YwD2PgT8MyREfbUR8R8FdTgrth9jhcQUC5en9gyDStCR3D38",
  "key29": "5bDhKirBunRGrdT1KqmMhdWyFZHjWyDYFY5peCB8pwEssxun6jLJgaiZiNezdWDUiprh9GoiyNBjY1Xkxhsw4jHz",
  "key30": "4nWSfVrXsSqrrvTAGEPYsWAqpkrLjVvCeZgGhNriCdPZNmgaFPHT4tEYKVcv7pqUMEhEscq2MQDWy2aRRFTyFQat",
  "key31": "3hxUzYBUgmjo7rfGb5EoBroQhJiuQQx6uA9WuYDkH2B1QNupyzxEg8DkvcYBSqV9KqZqJsyxH21s3fZcqQ9mvpzG",
  "key32": "5RrbWxYKyiy8H91R4EB614g1TdJxibsKYBwRobC8bGiPq8xrJS51yVfnRc3Mk7xXxJTjbYBeKy8Hm5nfZVWNXwDv",
  "key33": "5drb7Nobja2MXU116t7aj9e4tLD7uCNzWV4tHXCuzcAjJpUEhmdDa4W3GtBXxe6xJ2shh1He3Gs9TyCccm15tikh",
  "key34": "3Sw4J23XZ1ER2u44fagTbw6eCCntuH5i2Kozo9J39sExt4MmTMRFixymeayBkPWeLpG5ro4WzgYADXeZmPsuJF46"
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
