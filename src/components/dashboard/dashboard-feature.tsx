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
    "2W76QgBjcCc7DRBNwdsAufbkZwSJeKQhbCYzSUV34CtF8UvBmfivvB8ksYnF752RpzxC9BF5FMi39Len2nXdj5EQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cnh1G3wCRisWCuZmPePDNA87S7mUx3LVXUrcjGgY9C9LW73sTS7fuZK5sjTAj1G11wF4R2YeSrYFBbpmztRUUFw",
  "key1": "5JKypw88taamji4TZtwzoMdXxNPRsJun91nCBwhb4VogFidA91neANTqoR1fpxuG1LZEDapEp4VZ1EDCrhZmE5PE",
  "key2": "2DhCKEP5WywohXcEhCiAW5ShHKPfSy7weAbsjN7ay2qkeWznJtsbc6NH2dfKEifyCksJvMoe8c7HCJzsoT9jckNf",
  "key3": "3AEy4ZjgU959uWd5rFiNXixAPaANrm7HcRx1PbYugPxV555rNcT5s78BURCXPHR3KLVsKW34BDjXvFfkDLQh1Yer",
  "key4": "2yG6Dt6cpjAon2MMKSeJVgYrk6sRUxz87nyKq77X75tpRUTvsN8ujR5gBZmt3UXPA3A1RJpVm7CsVoGnfsm2mzYZ",
  "key5": "3pdDkpkV4jRus3GSAVMHmgLyJ5MRMYfpVmdBsvSwA1H1KBPPWCBV8pCGkJUaEu7ZGYzjfik3Wayi61wkQSesYgyT",
  "key6": "3ub932fpmcvDoRk1mCYTKQCPje94b4LX9EqAdkb3mz4LXJVgFXztFGSwR7dppLqQsB1zjjqkDsPx6KuhT81dWE6D",
  "key7": "5K55PPNVMz7TmXZpUWqJorbkYnUYLnph7iuBL8dqquWcG22xVGcxNhTqL6gHDnHrqG8yp4L7v3LHShk4Z1nx13yt",
  "key8": "3CvdKTiMprQyeMNUsNSxzvQwRe2Vjredo9kC16GFPeX6kCPqs1nYXH6MDtJQbyEJ1WL5A53Kbq7PPTL1hxEGn3HE",
  "key9": "NzewbAQTismKUMx4cVRpCW3aw1fvKjfSb7vkKFFaWrT9CfkrhmLY881rzPdo6qAuWpKRfFHT6d5ehh3wDYxHbqj",
  "key10": "2jChj3km4qTjC37MAEjMumAeMfZkViHQQmeUDk1BNjyVSzudfy73bneQpDzXmqGEwVCg3pnEBGTHrVAiwqDM8Ccg",
  "key11": "5KPxYRJbf4zKFqjuQFGs75ix9TNXMae7v8ctbNeFsozPaoaNKzyrBhnz75U2zAxA1FCYPwReb6y1yhLi8yQqBg4k",
  "key12": "3Tu1Au1MNTnoFALy85pLRgeyVH2eBSNucJyFSvoDpM464r6MDEHdVqhTpYwTNLA7HBehq8wDZAa5e4oHZQkbZ4eE",
  "key13": "38eHyW1swVvsqVovWmD3U5MpjaRBCbEsVbLyNT3bJdWe4WcV7srYG7iBAxYs1My5d96SPhffcJi6jAtgCp9MD8Ad",
  "key14": "5SyR2pZZuWud2a5wKPtzzctnUF5X83inBBBj9Vx2tyQMPXDiqBSpwY3TCXysFbw4ZZnN3sDfbtSLdFHRshDPAZch",
  "key15": "4tsv6cPQQFXPUvcvR8d5scGAHoVNVRj4cFMzdk2rompFzkdCeNdUrHf84u7Q8rPpVVuTMnxSYnujwEVNiLvKdYj9",
  "key16": "2YPUCUGF8beQQkd5ySbpkBs5zaGiQYTeUJjg2RtLcY6gXu4yGTR7CMbrE3MhTHegZBBEmnToYdDv6BHv72hNP1nG",
  "key17": "4aLYZJUvTZGX8feQ6JLzRLx1yw61SHnV8oMpgQQZDyN6i6yZXE2zF6BXSjb1NtNKTKCajKEcYdzR9Esv7CeA41TK",
  "key18": "59BkkUN8cCDv8Mr2knTL9CjB1FpSReH8SY6kGfMT9MF3KS8a9MYfa7AZbDAEiizCDhJsve4cpCic1xoXA22Nses2",
  "key19": "HXy6hmTdGak32z3vKUE3TFHESaGnNFLe7BFi3HDB89yTYZe2DxVM9noyFzasX4njujH1wSxvAsCocGP8hsZiKEy",
  "key20": "4sPnoSKDdh3FL39tdyE99eDD8BN8bbgzKiyiZFtXKoTacr8Pv6TmV6NEuGt51WvBuQkCboEjRxLzVATtStWKqLgU",
  "key21": "3b6pAjsHpKZxChGMZHs2irBeURxD3iMUpNxHRbFUbSgPdhzuGKYJHWqJXFhUZS9R8E85Ffadxdcx6ku4RtDxVQFv",
  "key22": "5HWbNvXzgpaYhvG6DWT344WCTMHqtFh3wJ1n8ZmoGVr4gJ76MNMJ5KiAGhBNghmqtYtZfHhNzPTEGSfok1ce73x1",
  "key23": "2BS1rmUJiXkZnW8FPecyqFtyQahW9JiziJLCpXBJRivn1R1fKYfMRow1xb1fCrwcucJVv7j2o7trfrkVqWYkQPxn",
  "key24": "3NhjBcfc6cdpWteKUHyoxLFh9zS62R4VdR4qb9kiqNGsjLKV66Mjwjpe72tRcDsRFKeAmPgEKzuERf6bHeWF69GT"
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
