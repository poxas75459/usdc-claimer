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
    "22Lo2CMNz4Wz2e3oqEbU84rZLLBapEHnWTVQxgbpdbZiNMVGtmnDExda7TEMfCj2bqnfxmG9mLukKeGQLKyutNWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X8nwZs5poCutWAHZP3sFBKhR1YkKYGqo1YUvoHyVcEY1bcPN3xHeYVpLxMuSS6jucbTJYoU4zrxheVqdfrfWr5g",
  "key1": "3mnKM5e2Ej1KaKrgcHC2GA2JqrxYL5uQo3sRmBaVCazaN2oEDY1wBWxmMJWrR4YMPxHZnyfKHAYPR52R7gaZrhgq",
  "key2": "Z2yX54nRgXzvuCS83iaL7LqNiwZzx9TKnqr3gRdCT6Sx6S5nB81DfxXPLP9Cg1EHrziazTTiabaMabZrDPGyFbv",
  "key3": "ThRQ5VYZPBuBDpuLwDLKgk2TWryKpXtkDxMmb2huD4q1wnxNSNxhw94y65dergrpdu77h934CcV1yQ4u2FYEjdx",
  "key4": "2Fz63fa5NQTtixmdVwiozZ6Q5oLXGwSxwB4aA82cuYPvrKsBvhmoKejqNU9khwmzj42Hrzxc4WJhi9zDXDWJTUx8",
  "key5": "F1rnwuAFYwW3hTJiYB6YaSm4D78abNKNLgwrQZvYCVjV9QkZfCeEkQKK3VQkVFGg8APzNS5VXJskNJE82W6SG6L",
  "key6": "2XZmXPNUBE1VSihCyE5ovVStTpDkMmRGvNJaVbZjisbNbpwnDTXcc1GjcetzAvCsWyZu6NVMy89eXXw9Tw8YVWjZ",
  "key7": "5m7NK9qAzweLKtDJNMd6ksoZkrs8oYhtMvi82h4kS7ofgrC1VGWYwYA3XEeDySgM7pGEo9Nw8V6nbf6r8wrgdYG1",
  "key8": "wqUFciQeN7Ljy7D1ZPm4DTNuYBLrQfPgrP1uck7Zdse4cvbGFuiUjaficAzr7iBYxce2paoUbwM2MCkpsR5N3d6",
  "key9": "25WB8ZD6x9WeEqRovXU9hh1vJottR92nuQ1WZramUPmbAhuwHfr3nY3vC9ADafSja3v2TGHHnT4XtsM2trJdK9NS",
  "key10": "5Fy7t3mEiz8YuDcyYJs12LgHMz8WmmTS4igDkkmxuANFzAjWWF6T75fVxtJkXMDmP135aGPiGLHSzfmcnE5DNLMh",
  "key11": "5ftxC6SMTvzk9mityHUU9whhdaehhWtLkjvmqDwCS71FKZNqCahbAgiACKSqBseSB1LB2TAY4YT4eevDt2eE5M6f",
  "key12": "5LsNqbXBPahQfag444qKZCufbjqJoFkLa251XUMsM7KzoXLZWrbiS2hvjhbHNXchdFVyssvexJRohtW4hKcTSct7",
  "key13": "4tm2rQYTBNnMqSY4dYqrQJkJLKDM8Rperq9XosHjf8e6hvqsZC7mJtYHmKqgDBGEAqa2P7iXhr5GU3ZtsCodHBnK",
  "key14": "5mydhmYqMBPu5DRn8rLpJt2Zo2oKJFvDLu5SK5Qfch1x5wiLqqfUT6wwPZiaNYNmwy9rBJA4HYzY3P4tw4Jiw23z",
  "key15": "2SqkPjHQGA1AtxAH4dNsmACZGMnGRJaDYdAUUirV6H2pCndPYC3PPCnBd7V8i5m2sk4uRJft6uhpQxeAcFUPbTef",
  "key16": "CNiD8MSfzmjP2LsH4u32uB3kxeUhkL7n1TMGekPyYskzHWFgg7qcZpv7sHR6LvS3E14XJHGvuPbFPAnusTJhWHN",
  "key17": "5bnh1e3UjB8QxYkamHdbz4GM74iCJBPzjL9HLFcP1fLk4va4td2YWcca1a4EHqf6PeTJsjfXw6q891W1SL1eyn5M",
  "key18": "4emjyqegZnJbNcxWYxwQxT9vuSEA6WWd9MT44p4YEiSWrjd2WXjJgkJrmg3BYDVizkaadpZmEVhvRQTAcMKTWwtU",
  "key19": "3PGGbGmaF1MJ2wibeDvD28p6QNLjvCumDLZyike1VUhWhff57Rx3oMbRLndbbSERPGDB4xAHbT5Ph5fSHk4QHm87",
  "key20": "2mJm82uyuKxningVWvvdjaQtbY3TsKUo8ztEvo8Q6Q8Py2MAjgNdM662uMeDGMxL2D1TMh3ZCnTK2zSNjR5mYVmW",
  "key21": "5QyY77KYRUZmkrdBgYciCohVvtzJTLCMK8im86D5PjCqRkDRA7VTpQ8mTVX3SpnPcAo8sRUQbS7db7TFkZmvFRDW",
  "key22": "4mPBnpp5a5ACFmLXCQsa9NHnFYmMcXkUKfYorcw47yP3e6JzDY4yYjNCHJKk34v7pmFdraJY9oRbF6R8Yc5iZ4YE",
  "key23": "43zu5Kao7Wqs973BJzcXuVbsLvJ78kS6mHqNkx3CRDKt8jZwBpKjBTwA9ifWKCioLvCN8Dg9Bio4TAvRqDGSJpCf",
  "key24": "3yz1DjBd1WcgkdRHZyU6DkbDCnKZYQzDTZNZ8CGTfWzGdZkxKMcHQ3Ao1kzeWsBew4KJ1ZRTRTTJx3dUQGyG6vM1",
  "key25": "3H2JRKgPVvrjPFbgVjesZMhwqZtXTvdgsoJoVBRSUtEPVY7RRsNdU2CSbp4FCUYiG1A6hcN1QFYvgWoyz2BugXcg",
  "key26": "3Kt8jkDim9f6zeLysXieams8ju8wkotZrHbihfNvPBBV1EToS5ZkHm4514wHzNTebwcVqRFmPdoJ3qLTB7oPK6Vn",
  "key27": "45j3KQHPGBZfUbGTNf991GfGwtSenLMFfQmdKFfGHErW2JPxgCaYQ2yX5CPfRtuoJhfeJZqQ3uR25ompJYZ86G1Q",
  "key28": "hhLZLHi4AFyffJmXtHGLojuAFHNmMTKiKLGJrW92rHr3gEFnrd6yb5cn9XeLwbMTm278HNhSoLQaSGhRiS5K8cb",
  "key29": "2Gd7wMvKHKxNVGnF8ikiE3xPGYoq5z2jechVMp1VujvmbXxvF8voAD44TTf6ttESJX8EC2jBBhVAm397XSGQD2Cy",
  "key30": "3WgAQZWc51oXaKnN9JUomV6EGQLQ2TRtdALQ4n99EuF5GnaGMHHt4sD8jv8hYqtAR4z5PMFv3PRcqh6zvJWnS5Mg",
  "key31": "4xonL5wQZrb2gbwpERwZHerVRiMMJJNPMW9tozCePP1px4fcYuGHXE42RvRoAFtZFAcsxa6hm76XjGoiZRr44DCz",
  "key32": "3Yik2Zef7Rnw4uHHunCsR56XwGRhjoeiRBAgaR4cdY9nbYa3G4EuFAsA1ggPDPf81U3trfhqT4BBy1CXnz9uu8vH",
  "key33": "3u7Q4oCNsk1yc4ND1zEuuTFH5rXfyrFMeUoBCvQhQz453VxjjqCawG8fUhFuqKBpjHCFvhbK5fp7VGTizjopxxU1",
  "key34": "3qFfTox6HkqfQ7QY176NQ6dJbBttsFeDYJ9LDuFefEr22Cr3JoYyap7ftLJx13Bg3mZ6gPk2Dgd7G9zYSpEHjyiY",
  "key35": "2LFmg5S4G2Ru7Surexf4UG3fqRgwJxuiTGm6J1gpwcfaBHDC3EAFcApHL3wRFWz8cAz6qotkwvtaNJR5PjhHd6RQ"
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
