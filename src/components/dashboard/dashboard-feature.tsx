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
    "5Ht8Pwsq4ifaR2U5i6Gk9RrgpGqvofJT8NecKM2w6rgz6hnEuVbdNcxECE28zefcnuNwajV3yYv7a4ShBAjTtatw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67A4HPNRXqXWa5qZncfgcXWeeNL9EviTFTpuXsgnbDHY7CrNMnVZoDeCamxbcQUo1MJTtRUKiNF3svr3NbWDyzGm",
  "key1": "25qwk16wCWBBAedSK1zxBuJGxzPFKY74mQpXJ5o1C8qL6nfUF8XZMgYLKGBuyszzWCv1kttq65sL4Y7Kb3LhzzmX",
  "key2": "JztAF9cNLVNwAiW6pmVuHKnKhZmu2nprL4Z93TvfxBnpw6fp6Uq4FVPaYLb793sxJsH7XmNfiYZtcU42puTKkFv",
  "key3": "5N7scyG44bPzjC9274VtRAvm8P8kJnydu5GPLy4j1rkVPrNKC1YopjemqfhNJZzN1LqiZUxP3bonGfs1aneWfBvZ",
  "key4": "3CoJHiUULGXqepb4HvMGRqQrYPTvBKstDeRKLXqbKWFnZdssT8p6dyBY9z84GyPXYShcwGgF3vfF4sr5ZrFDL5vz",
  "key5": "3FAXvWy9eUschzRs3JhRTP1FbANAsxDNKLXhPSgWdJcHZWywMFrG3x1htkcZnRpijxHNX8TfgKqaQZV92fKpZwzM",
  "key6": "2M2bDd5JNG85R3QiVs4wQm4rEet55Xk2NAi6ucRf5bJcquWpyad8aENxuyAqJ9H5AHepm7UvBdxFzsRStrznZdpd",
  "key7": "2zi7DTHAST19JPu9uahkjJL23mXD2Jb6kqT9W2ZLH6SWmm9zAeQgudCkR1p9TtiLTfmdWyFkLDt8Uckbpa7bax4f",
  "key8": "4gfGsirKBpU72i3ZGjGXEbthNbrBWxA4bgn5rcLkqpSeUVerSfwBQEaYstAN94KozdjbUschxRMSkdwXCsoaF474",
  "key9": "2wKCFt1g4U7FGGAFm4sdx8kKh6kENBREhboKEBsVcjCLQB4vrzp4NCAo68TYc9ymdAuLFBD3bSBFXCAy9rvAe178",
  "key10": "53rHyBiU1VFQ56hDYETzpXhwXDwuPraFyoGLQnpKwZopypJuRiXTkkMQVpY7i2f7qnrcV9B1Af4xs5wmt3eUq6j1",
  "key11": "27douvyDhmic8AYyLKztG522n7SWePUtviNM5gjo2ZwxA7c6Y3YpBLty3RkUf3mn2ZVfeDn4isGEGGSQLtAsmnAz",
  "key12": "59rEG2oArRACY8HLXHwkj2P3eZDFTD537r9qMrKd2vacQnkbqnVWvFcKPhto52rJrTLZmDRgjrHodPZziufm9SPM",
  "key13": "454XUc1DnBnS9utc7uUSvCwXmx8Ly2gbFRdDPJFV2LtWq7tWyjdaDTYGZfuArTEPw5HqNbBQPBDanWVVvKBmyuHJ",
  "key14": "4CbYtEa1XXByrevj3wxi8MZMLaEaYxP61PYSVArtyonHZEyJrzmC9THGcNVrVtNtxPwnRPe4YCqxgHggZLx5A9Ua",
  "key15": "3ArMVWha57FUyBTiNNGtEa2K2yWX3TJfKuXafjzMynv44SVh5sY7GquChuyQhrZ9oCPKadqknTGDiCKXndphX26",
  "key16": "2ECQNDdPCs6s4Wr9mzLGL4X8BHPJuc2h7YU5kG6PN4kkYhr3Rg8U6s2zGFzPqx9x5ihv5b6gchcV5udCZ7xCxvm4",
  "key17": "4cknLaMEuT7MLhfx95gQotaMMWCxBmvfU8W3GQCmDLSYJq4nwNWE7DDD5o5KHNbrbBMrXF9GQCCknFt8d2wV95TN",
  "key18": "3bB9JbeSNYnHLkH5YxAmQ6v9g1EkHUiujUAY6wuRiZSXrawcwNLvzFKdpGpcCRjLKW7nPBj1hVmSXhz1dyDxe7ck",
  "key19": "3gAryNbK6sZm1FruhUDQedyr5tVptBydoYUNtfeiznXcXxRzivhphzokHKcW77ZNewGmGy1i3QCt6mR5Yx1xHQ4E",
  "key20": "2f7hSQWR73XqjVPjjjEgbijhtiNhnKLQr6vcw1vkroLWdHHvfkiGStMo9NCLivFJm3fLW9QLXvZXkJj2JRwdSeP5",
  "key21": "BFySVEhc3qe9Mkew6c9Y7gCGauwju5pUy16PaeeQybazjLNEzrgcsSvhhDupZkHH8F5hFShzNvvUHGQCbAgS6ms",
  "key22": "4HyE5oarpDVTbnChtPvWB9JUKy9APYa1fohFdepey1kTLdahooy2AsBkrQvTvr3vo3QaBwRzvYyDSPQ9ay8pnqX7",
  "key23": "2ukoz6E6SNzUb3c8MxHPpjcuCm4cL63oNs97Eo1D7wXQWgeUwNprWwEGtFBz6f9Z3iWLxGZ2eFkZYr5rULDYTjET",
  "key24": "28FQzcxDDkqZM4TMzdiCR1HUEnYeZeLUMkNEaNZtFg6FYg7JDWmesQRrY41FD8EzKYL3wwzSmqHFMwWdmwCgJAZ1",
  "key25": "36d1A9nHnWFULN5pza3YBgBs4B972Ta1EbhWACcSpAKgoDxtGcEvmMyq2YJes8ZvZD3XAhjK3rpBe6xcNdSeFTyS",
  "key26": "272EVJvfvrLb8iNUteHAfpFX8cKKrZoGtwtrxNNx5jgCbNbERBXSamUNCriGS17yG8mr2UhRaX1TSLxYUS8ZUWDv",
  "key27": "5YicpASkSwsmyCU8YCBJrwfX5MFdwJ7E8wYCDxaRETvQA8v77DivQsqdvs3piWgKxQiycSw9jNGsuWKmT8Bvve2p",
  "key28": "5YpStRnPKzhhL3R9rT5HE4FLUpLd7ZN4CGxsrHrXLSE2ij5dbgW1YTHWBUSKSMq9wH5ig328nVQWW1Sr6qjJ6Xrk",
  "key29": "4ZLSPXNHZ2FdQtkabAj4ZXVuGePCqpySDDKdcvhkQ3CeXPmm71ipqi1oKaYBmALexnzWR886rD48SEFp5tACn9cY",
  "key30": "2MEV6NQKKd1XzitRXiK5AGhDnMRwgcNj8EeAGpcbwuUi2NB4rywYPGyCYihSErTc1uqs5fngSQSaWAAPBpzBm8DP",
  "key31": "4gNH9sB3WXJiiafirMquSDRV9gBhtNaSGV8GiPc6W512wXZ44B88WXhaAuKCJcFszjhST6mdFVxJ59A83uGChAiA",
  "key32": "3pMN8QznzpXUxkxnsyFFz3gsSfNT7EPpw9qXQxMo8MM6No5NSpRYnofrDvtAhG3zCXVRKiesCFDrQxbMny5RgTQU",
  "key33": "2gMeWQ5yw7isRs2LAhKkrFXPx7ZicEJBMXxQB55FKaUUT8gVhsrdy2TqGeDt7K354MmRr5vTG7Nvk2KMjsJrGDdJ",
  "key34": "4yM5rPDvcCVmeAKhTnEqajsmHUYBNLKnssknyKsiZe612Ri1Fu7RBdAYxoEF3HEfRzBVTSPAJVAvmgFPiDHDGS3P",
  "key35": "2FZscijFPumkRNCtaZegYo7sqEQRjaA7DcPPiyvfbyuKV5jD6EMWP1CADzgcUgpPkXEoQKKEAJgEoDGSPMau97gF",
  "key36": "vuvvxepWgF7XSku6PoATnKvUmw6pmopFcMDYX7NaHVspUdx1QnA7eAbB7HSoAJPcd3dugnCD9aSHiJVLLiYQKqN",
  "key37": "2snGJV6r3JfkeE72bu8LkpktvSjN573xkaX4YKeWXrxqtxTBMRZp8co6JFCEf5N5CsJcJtbPDW9W6zPtA1rk49Qm",
  "key38": "548pzUcPRHbd2eVRr2dSduZs57UTmaZhSxejYHXa1xxY4Nfjxj9V5pHHPjs9XQDyvywB6JfWg1vz5cPX2ofHHTsm",
  "key39": "5JHsFJLcoA2XUTWoRaxzmUNq6xVV1FqBGMXNAKtSH39cjmCe8WGB3NGJcb3xDxp2n79Z1VbVnGMDP36H1r9FY3VF",
  "key40": "2wC5G7F77MCbQXyk6ZT7VUEZ7F8eboUVazGD6huhickNXECyfitnxDvtMTwDLqkLUnX1YLdMAkEj6L5amKnmAuZC"
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
