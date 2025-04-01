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
    "4kR2JAfVtEdyMFvAUDigBxAF5st6FQV6TcNFyoVhiyQDGwsp5ZHopXmnNurXV52L93zAJ4RSvAXBQPkPrG5eFuZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4udpueHGf9iGgxhuikDjSKRtJB8HV5SyMVmmzbvtB5KiKyEXfAQz4154AHcY22CWLayY5txk3XoT9i2NWdtTTyzx",
  "key1": "4G8ERvZi882kPUS6sw38kYEUF3pws5So2qo4mHzZKtkHdrdvtFTTKwcTGpcVVuCDCcmP87r7hM4dKuPvLdCYDXWE",
  "key2": "2ReGvSwFEiySUi6Uck7FMJTgadeof9RKQotKzYJEbtoE3UwMatFrJPz7e8ASmBE4LbyUHgvr4AjqnqZhJpLQc8UX",
  "key3": "3FwgbDqCVtBEdCPPtCL88jHxMRfPj4pmRFntFsDMskYixpNnAmGPBwVzdpnwaudXNUVmYGgyrZBxHLTqmTeDSQxn",
  "key4": "7L5NxB8B3UsVVD6JgQopdiu3fEKTdsko38QcYJbnjqnmNL3RwbPfTkdgk9HRPqWJe1fzh1quUSavjNbeDerPoxC",
  "key5": "2ifrFq6sRBrCTZSNhVYnfKmsSKWgZba4AinVXw9aMASFget3Hhwy6rrJzvzeGU2u1SEVmuSHEh9UXEcmP53ekBsq",
  "key6": "5jS1AgMF1ProHnsPF4urerhH2TP7Zw3gwp35awXy23RJYdcUD2GZRRunect7G5m1wip76D8xcjLq5xi9MLgb67sr",
  "key7": "4v2d8sqn2G8fPk1fZu83tu1hFfqp4p1rhXoNKRT6pZEV5wgcixETbJb1v3bPe6DQ1t4bTjk1Eq1rVAv7rUWJoSc",
  "key8": "exLNbr9FynECXWQgnaJMkwzQBWJCaKeLn16EZSVrdqebQ2s7HjNs8VHFD2E4bHc5hrAtDSMiGGPcoSUWLPJSQsu",
  "key9": "4TGBADGBPepZQNxB6YnQ6RrAGM4aCXGwRXjFaLzJUWPftFCPWg3i94d5ipQudvJkvj5Rp3KYXUgSLjzu1xNAWGd9",
  "key10": "2vpV1P8BAnhRYfkKzzSCXqLkBXGjEq1ukqzWWErSRmEYYcdYCMDCjHWPNwf7tU17jyDKbTr8ceJfk1vUhSXyByzi",
  "key11": "33Zx3Ha5bYTYoxa6cL4nMo76LoTcBLRKzXz2Wuv9fcN7rWkYo6Xc2h4DNsvja1hbfibhq2ktSVbYYmnVsjSCLQgh",
  "key12": "5y58jV2TRmXejn5pQ6HFEaoXrNKBWwmKGhB1Zj3CiAjASTSq4UgxPZS5JzBCmVRPNeneQCytxGtuSwMcHDTVDkrD",
  "key13": "31GBM2b7nQMxKctGWPPeKNhKMJ1XxfjAr6wcKmmnHkEvyGuqZZP6TkhNeHJ6dh72sQwDURgq8bPgRnZiEjUwHePd",
  "key14": "5wRvw2UhBUfVsxDJLs6PVNy9jvrtSwXdqw7NXD4DRe3Ffw7Zs8gBGn2MnxjubKKep4tkHBvjKeLrX1K1hBd8qLGc",
  "key15": "2rhQbYD1meuHftzfE27D49zFEqQvhbCrkqVp7BqMDEaMftRaGEJMqszNS5VedKJVyCsa2h43dD6kfABdpgtc1WF6",
  "key16": "Wac6z7j3XKiWZmq9L1Lxb32bUrmM1k9W1tuQ9nEoVwTPbFrQmDbWjBdJs3YJKRdZYYvjRrPf6fjuUnXiKH2ypRN",
  "key17": "4pt1gpNiNGPj6mRq9evAZRhFdfdjK5WLuaoSTvHJRPLHeKVziYgLdMzokrAGv6ympanNUQWPyg5dEJ8iCRFJUVDe",
  "key18": "4LwY1Lm9dY2cdtf2e3841cks6eqyZPoByQ5bxH2xadEL7CD8zJunZZdiUeGQrTwdTS5M3uiV2JZJp6FevWabuBe9",
  "key19": "3mWDwgq5P66f4yHEGf7YgNdCx4bYZgZQXG3Wu8T92fS6tyJx5BZ89ay8jjZ44nS1t6WWGHbMuEwAGYEqgs2RVHrJ",
  "key20": "PKWCGTMeArPKQxHww7b2qt5zKGCgvbNXDhU3E7h3Ui4JuWdD2HMswX6rC3zQB6v8SWwSDx8GSFiePhT9jMqrt2P",
  "key21": "55gikUWeeiT23ATi5La5kXEDWbGvxzv1eUm6wcfE4TMGKEzg9JY82JXsmEKUStdBtpW1rfToHydTtTfxE8V4wVVP",
  "key22": "2izetfTtit2yaWZ999jjunn1gEhCn339aRiUdVRp3c8UAbFb4QsrkGsUXsEiRhvDKVMSWiRqFe6eiCCdEXxxSVU",
  "key23": "5tJvaX6tM6n4CeVRWUgwrTf1ZovUAnnCssSEV2iUAuq4617AH4gQDxEf3QEAXzargsm7YM3u1EFrPn2HvWpKxw9M",
  "key24": "2r84xbP4DF2vYzbJQykBrPSdxSwS6LVR5V2qjg9WJbEbAxMEC2QAVrWb4GAkAwRvebX9yDy3n89gh1X3EAA4Ycw9",
  "key25": "5X5Tx2n1fuVwcogB5xB9whKuN4oCedzs7v26ELpSpVxA3uoCtc3BeNvCCoMmEPTvpGh9XcoBkSvR19qFDLb2bRvb"
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
