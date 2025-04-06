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
    "wEN1sKHMBYQZbpdoXdtGK782ENndtU8VYG8BotcvRV1EbcGtDKiVEx8J7Q6RoJFN9noCoWDbTDDKUpxqjNCx5EV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3htdgBtZaTqVUGBtvSND187sgnGhBZvSKgAVB54JUUTusS6PUAiDfCkYWpY4yMGc6QPRs5i6oZ87H1WiaEJfeLCF",
  "key1": "289aXtnpMsWKNoeDpedFacmnUT3NPFEWdeM3jVdWM4j5twDXucKQuVGNfG1HRXxoak8UGf7Rg4VmFwnKnxkM7ddV",
  "key2": "mbKUZRDeRSyHJfxgwrTYYYTgfkrp4VMkiCaxLujZPMH6q6v7L6JhXnJgCgYr4vC7bXxC4exkF2ZMWLFuXbJqRVK",
  "key3": "2WD3w86ks2hDkWR5P5H4vFDoxCFPmya4Wa62heNAHwZ3HrysPGHpx3Gv4d8io3NMsdqbrLxqiysCZL99aarXBa7V",
  "key4": "5p31ipZfgphY8YGtnQ7sqpuR2o8VuhHiRMgMnWSfvEed5nm43QVk9zPWivYfS6R17hnBDZo5kExGuF5iVUiYT9Vq",
  "key5": "7QeozayfzZXE3y1MPbynHcdUsJqXF3ufzLKaUoALBMF1soFuVStp1US1kV4VaXMCmaHy84aSj7yQJN71fCQwAdZ",
  "key6": "4fAZzki3CxqyM8NTWgrNxE7UM5pADhrHDY6gt2CHkwWCh2ZkTF63kACPSRDtDoWVukofcVJ9KtdfbQAFM1Lctpst",
  "key7": "5iwMiY7Cx8nEmi5sj29G5iRtuSMGoazTtmMD45wbWzrJzWpttPikj3PojCPdLBQeg3goZQ6pQ7kyTHkenWX7pPew",
  "key8": "23vq6TkqVtoE1vwE7xCG4XgvzTq8RGP7NzLnWmUasxFPLBdR7nrZ4TGTGaqX26aYVdx2ncdNcLQm1HybfYiNWULP",
  "key9": "44HDuYDbtjpJ3sBU69C5CVT1tr3ShcPvmQfqGKrReQmC5Y3uwc4dq2HYzg8h8ZT69SMXXGs1YmiyDPerjtGjEUKu",
  "key10": "5CuDKXxzdd7LKEXZCFEMZC9voK5mhGfi3nGrKj8SfGVRAap4tzNzd6Q18JPMykcvnJ7AkPXbjGWB1TaCQ1omaroS",
  "key11": "4YLq1VpGrf1z4bTyqSPDvLHKxkUooLVYhpHy6cx2oPJGxhV1iDaSCFpfv8NMsrXiNfxFn5pbh8rhFgvzWSTLHX4W",
  "key12": "3ZDLm2ZnyagoXnm4RMVAhQnyVrzEHm5PhzguQ757kU8qz9qMxConCM8tC4AKUfRX7jLgGaeaxEiV7jRR9XTLq8nZ",
  "key13": "3WZgLMwPGLtnYCjBiiuGD94A64LhkPiVzYLvsDF9f3LTEAjjU88nxRECfaK32nMJ1pHrDkdjibYdgZCPL2M4tQy2",
  "key14": "2qrfEasTACbNAzp9TA32cZ98dE6b2v22Mw6kPYo9XTr8XPgvHPmVGTS72Jq69HqsTa41vmcXvqeyfav3CXja7Eoa",
  "key15": "45v8vmTTBGMoPXY8fE4GvPduqQxUrQB2UkbRq8DddGc3cbHJiwE1g7ew9tnhqg9fsDvrBn3y5XcR7dFCW1kQumYK",
  "key16": "yF8jJFx9q3o2kbkzfCzjJsdAhQ4tvanYLfDnLV5ft5XqVDEiFSjWFSFGVCexuvoi4HoNjnASvvx14b8SDmjzWvD",
  "key17": "4uss2Uckh32oYKepZB7iAyRXNmCdpSLUNUrWzMXeuyFPtwGy2hZsAjgrxHKzNCoiv6VQTTBgNn4TzyDEYMitgpQx",
  "key18": "43Ny2PBJGTMmWFoai3d3VhCd8wTddVfh5KqpC8jHfynSxLf67DUBCUKfb8jfZH8u6Qm8QcgTFTV7NDzKtoH9Jjec",
  "key19": "2SRpAyWAAy9coNWdA84iB5JPgndV6byXGhncVTKyukPvppFqLKX2L2JHitVqfiAPG6AsmPB92enMvVfq6XsDzYv",
  "key20": "39z32bpnnYprjHuTSzTTiQEUtYYNBvLAJcqJaGuzQDYJ9gH2K2EQsNiQLuf7p7y13r69jyVx2WPMpNcfPQAGwHZC",
  "key21": "3tKX5UDRpPCjtkayybRgXdFzwLYSnQKaFLAwqdpHYNmbhYJV3A3h157MHy2ufqZkNv5FMsRDjdL7PhNA7fcC6tv1",
  "key22": "5hCFZ6YxeTUxTeKRyEVLx2r1c42U16nBxowbbTbBtA4sxwkok9BoZLYREXk9eZPYoiH5cd9gM8sZfQ9pfYgD8uW8",
  "key23": "2aHxJ8tD1Bmztk9QfvAkzASofvBByixnCiKSNG6TD4PrPc23UbKaAqhniLoSmzcKvP6Lhm3oA1YWuh4DXi9iqFAY",
  "key24": "59uTj8CwgYRcRNPJvH6KMLMuyQeMythgCPkSGyUxDL1fPNLBf4c2GueQFL558Ubqr9nV4XieEeBT28ap2c5fU5Ed",
  "key25": "2w2x1PuUmRnomYr96JsSQXL9FbjaWcr6Eb1sjA2eGdJrCKd9mFQdWfXu86AspfcHvn6j7WHFY3Q7J216xoLMZ9cZ",
  "key26": "4yYpwfesMoPUFDqhX5btE6CBhKj79gPYGzp8UDgH5LzdN14UTUXJxzCyHmgKSn8Q4X31ZegJwfM5JJMWFAH6SzUD",
  "key27": "5YNhYHVkAsJKeWdyocVC84phE9GTx2Mvr4VR5bEYffzjHVq8F8nmz6Qw6UJMfaNZUghbZcAPGJ4Ae39JtQGc3fzL",
  "key28": "623bZQYuiqULu6rFaxMUJ17oETNzzzj9k7n8UxeMELXc9NUc51pxVGBFM6UsE34PMyK6PaU1mqevqXs5TXk57BAM",
  "key29": "4feFE65Bv8oHB1NRiyPUzzAAZWaxSHiSrZKJWeRDRAPt4HjxX2DZa7mBfP1HVPuAVjoFV3omjvrkWxjv1e151imN",
  "key30": "C3nX4W6QtJzVi5c4zHmdkbw345jNaQWqx9qhUpj8yuEJF18SU335DDhGRqkyADRKTsoqYpwTVzB8gtx9PHB95gT"
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
