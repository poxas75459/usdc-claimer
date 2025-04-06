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
    "dDyhJR8qTFSPqEeXpTv2mTmLJxdLw7NbRrmxBZXdkZXLTRsnPc97wXFHypxvKvnvdqnqGLeFgjSWvFCCaZDZB3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AqpZfY9S9jaAiKbWAiWBD6oKX3D6TSSYQoovvpN4Yszdpixs6WDQVoYWAt85vwGt48SnmHL14v7wYUrj8cj5UBJ",
  "key1": "5U2d3oFtranPD2T9xSkkcDBGcyfBEb8PorX6NgbebzUdSqx8XUheLfpdTz6ywiwFvPaJKG9XjCxqA8PStpWBkf3N",
  "key2": "5daAH9zrtbEDYQQeE2SUVdudTd6eMDkFvk3D3UoRzv93YP6HZiY2ALwKHt88qZjC39Vrr2DNRcKvF2YNarr49HKc",
  "key3": "DZDoEjGLy8A537JxpNVj3qqr3MkhFGgrZ1WLNSf5ip48LCjWQPupLcRyrQgEPbhfG41uoq5o6Cnq6RRV2xHTLdv",
  "key4": "BPf12PKGgMS9YZyZ8mwtCCvs1rYWqKvALYd5H3DfoFDkFqmj6yKqNTaFz8raCoKmKRW59s5dJk5pNAJQ5SKLMMV",
  "key5": "2xoguHnT5Z9u5QkZwdu1joZxuPAFfATdB9PvAWsX7ymwDojXgQ62RFThDQrx6SEnypBzWfocu5aKZjyRYxarVe4b",
  "key6": "5spChTrCGs3pT52ryLDXZPU5rFwBRhAtE6fFksMPvhfRkpiyMuz4foBq9kemoJ5zPnuobdUpxwku95SVBgumUURM",
  "key7": "5wJZGWHRU1Zbi2g21SNUeJZJjzy5vvr2LsGXTK3J4KrJjmbkjTpuQYgknCy5PGmMPGQt6gBJGhfQGBs1evaxzhRD",
  "key8": "2ipQM5qaeqXKhaSzwKJqG4mw6QAMHRG7xYAC6Fu9eZK1gBjrvq7AZSNwkbRAqHaD2W84uZjzGTu2SMoCt4NdNVmY",
  "key9": "58ugA5GeFZLTqsQDwVRJ7nivXH3RsUjjLMPPhsJJ5kQHLVEQowA4ZxHdvyZgx4PRpdpWFJ1oznz6ciDoJWxcEjuQ",
  "key10": "5Vk23HeQYUncffNV5izWssqTnpZpDVYtwnoU5gKHuhn6K5JK4VGUDENPWYzCDTnGRSuqpXfGJ8uSn3aTHFXqCcHF",
  "key11": "7tshb4eVUGATWbQDtBdqCFjdBgVkoetfCs7zxnQRUoxmXRxzzE7urQYybdKvk6DhgrQQEhPrJBRoQywW9R9gHmi",
  "key12": "4mfaoxB3ZjS5JWarLA7fWTC1EyRmoAWm18Roy64742gszTcukTqBmE7oLmjGe4v78sHhrYWhsEdhkH8pMZRNXsGH",
  "key13": "qT3U6bhPXt31Cfg4zVfHvk7ocZ4b8U2gdnzsRvGp8FffWF4NXuN5xVKWEAT3wfQHuEZogq7easUMDdufKLd6Yhz",
  "key14": "2kvpnKGUNdcsdCLPdQpmAsFzNXJizGXxriN33R4FTGPgpHzHp9fTenvEMrGWhtFSwoweaVDoXCh1GkMzFpTjCHp7",
  "key15": "267wTsbSqRX9e7SwABeyADzLyxEkL3wRu4uFh1CUXNjPdCa9RKNAnCSyzFrb5RbErupEaguWTvNYxX8RiofzgoaN",
  "key16": "26znc4gr6JjwoNWvvqEWke1wPengFc1pUFHgK9paHwLu7ifkwoSduET4e5Y5Ppc9w3H6bgz3tihsJitBoS1yR19F",
  "key17": "5LGRX3GVykX6wdcrR3VsUFXZSUgLBLXY7Yg5KdZrseDqwWFHLwcPb1cR9DEWPgJzSFGwEVQsrBzqf3H5cRh1sZ8M",
  "key18": "3AQ1cpasZgrAiJB12aJiM1B6Ha6ZudoJxLhaK9PykENynjdWDyziCdYchcs4X3bP2Fh578fuq5DVTeRqsxqQp6Bm",
  "key19": "66Meq7b8BCMi8g8KWFzeaUMvoBiLNPBDxuuhYXpZ9a7bUjU9JTqvNs6CpSwLPGg7guUUuzD5foUYH4Ni8nJZni8X",
  "key20": "XCcRGZFCeXH7nEeTx1vw6n46BYfEMkyNgeehk4iMJBuLMi1Du6pZSA2mPSXawoG1Wboxv22RpmGMaaCZqRmpqsz",
  "key21": "2CzeqvZVY7x6ywfnAm6VkiVYsLLTFP2bxPWdvNC6DaCBhYZpQP7Ue1PURTGVze7LvV8gLmpwZ3sunQz8jH4bCKcf",
  "key22": "5nWNeDo91scskCrVG89sCjXdPuqjYdhGx49rKzAao2MydUPCV8crGYAHUxTp6zf3HhDQTRdPeFNKXcskjoy1FREN",
  "key23": "QmTgbjPgxePkKYcYjGbrLX6cW1yZsVesg4hXDeAwDEmuXqTpQK3NqdDLVLtu8SZA1vq4s34ouwSG2nuvgvedXNN",
  "key24": "46KkKTLQhc9UUZDvt8fkd4cWom9QMjcd1HLkZY9jEkTBpibmiKzb5Jh9So7M6Gu857JxtybMeLsAbYsAMPNP58GR",
  "key25": "FuD4UbJ9LStWMGpSfDPrgRJLJNRLddLQoSTYQvzLHxjX6DHNjVmhd9NW3QXFQyFdZBrsWuEfbSXxzVf9pyKVPNF",
  "key26": "mkhnGQhqwCo6Wxi9iDQVd1VdnJKfuyqM7NkxxHE56SNVWdQbsmhcqcCTErDvgSP42wnfJcPe2pBFgmHwfzUfUuc",
  "key27": "378K3KF4GNUk8usFGv3TeJMmGBguqi16keUBsPLpDLYN3rjMNLjhbjfDn6ak3dnvmFBjNnRm7ZtbNLEJMCJEufXn",
  "key28": "5VoUWvhZhUjDc5Bzbf5W8odeg5tpVrBGPU5dZoRETadJF98aESDWGJgY3b8E6t8R3pT4rHPvgRqNLGbKURUcJU8U",
  "key29": "3GsxZsbk4CmATwxQRXX2rRYu8Apv8spLkTNVz5eV4ar3YzRJxkEThCCe5i5T2XNmebfE3W2wA3mscZ1b88EcpPB",
  "key30": "2b1HBvrpcK99LzfBqku6RXFTWnYt7GSbrBtZtxkBhx91jkoay4nTsbdtaoLZuvCBnEFgGChgtbj8cCzzkDJCQLDP",
  "key31": "i22SEze7KrChdumtRsEYPa8tKfMh8o795KTVFxcjKkmSKoUMWHvcu1X9msbfSjgqVm8HajR8v8xATNbY8iwho2b",
  "key32": "2a8SELYLaMWahFDeq8bbffi1AooREmNL6Y1gh1q8rvefJx4JzvtxEKDWJu9jYVSg4zWVKKh1pmz8QigyJmhm2eJF",
  "key33": "54k3d3JQu6VVuzkH6YRrCdCt5R3EN2vC6x8v8eedwNXtYSKyW2rLGnbGTPqNtq7wECJyJtV8ysG7S9cdfjtcezTv",
  "key34": "xVKhRf9obo5saKxoxKH8QXSTSTCr1YR8pXyiBrAvLWUAmzuNPoCyj9LKKz4QV1PUVEHxRoeT7h1hTe4Xbs5HM7E"
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
