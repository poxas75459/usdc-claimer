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
    "3XQSapXn1Cf2P7Rv5CP99C4igs9bBfSj16FK87yYA4AXDauAFcToBUErVZap7uwR4zMFqmeYkU2fBbuMLM7S2mfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K39wQqd8TGgXhfEV6uVCCyKwuZRArRGSML94SQpsDTyDEVu1yLrLRgv72RXqBjfi6KAwSMy4u5nEEsExhXEJowE",
  "key1": "42dkp2iJTwoDCQyscuCccT4o2n4sDoXzJdJKiHzC3FgB1n1GHeYGwp31tQ7Z13HMkRYeCnvswVa4y3VFe166KjFJ",
  "key2": "5mZ74CwB3ZBjVDhYufq8vLA4buCV2p4Rhrb2KVAdfx4X69X9wKL88LHYMwiLUNsxGETjfsFDiqFDw5QjU3KKHX2e",
  "key3": "3aGpocuLDhrgscfM3brLt4s2J9fRCNmf4XNfYPm8L4URc6Gbt25VdV4nCSnV93XWJKgkewJiANfU2ayRXPWqDc7J",
  "key4": "5R4xw237bs1orH7BWP6GUKSNSuqCKT5ezFGvt954vBdrCN2yk4BXrt2EVAQmpUYkKyfnjubtLoo4tMM1bEi7d1xW",
  "key5": "XkN1ijC2DDpvjCb5tKMVgBeybkd4S24yvEY4vqLbsfHN8TQcbLvyVh7y2ikRG1LQN52KdV4causrQVdHDeJAoXv",
  "key6": "4SV2ByQyePWu8VLkmPz41X6QRGsDmr4ZfiVYSNy2pEH8ENee26zpu63fXH7hfjMFC4EhCHKymRiLzPFUZrtwgsAz",
  "key7": "62Y1sbNLtgXuLv923iPxdoKn5MxzBcooFfWw94khXu5vJ6jep6NaDq1jaG3ezGJQT933onMxsPkhvaSE3DXDbrjM",
  "key8": "5ncWNFTFqBJNpgcautXkAtmQFPUuoifMpwQkAwMSGi5SNCtCStwR7ZCBT9RxgMtNS8iySsAPxxy5MaMJrGfaVQVN",
  "key9": "31LWuc6T2r9SXmSkcJrr2iKEE1A4VSuJzWCZQCFRXrofXJeJJ2RQnGjHmu6tBzbAyjpd2GGGrgDw3ytJM6WnXxwS",
  "key10": "Co4NS2gWDLmz8ndsSAXCyZESepLS3CHFHPhR5VbGkbRkyV2jURTqvX4RP252KTyppuShNx99pmeeGZ2YP7wd18N",
  "key11": "4d7xs5YDH3EgU2WGzpZdCesd5wFDzWYhTvchNsZFLxG9tDRv2hAkL2J5XJHyzhxqDyx6qbzPgaMShFvttXAwTaj2",
  "key12": "3Dgr9uuJ32t8Dy7FdFtrTgcqChbXW9yyCXZkqNPGwQHiCLir8A2169suXMo6cY67pZ7fBpiMN9NW84jvHLYwpKVP",
  "key13": "3pjNYNyfk92XqJTrNpAZA5Nw5FQzDwDwLLs9Tvcef38eCejursyXXfzTJV43Kd9vrY5jyGRi57JgY4UxXkCnMxSF",
  "key14": "435FKzU69PF6SxVBpUsZp9jZxQDcC3WnkfL2R8QrLVtBiG58mcRecdoCR7P2dP9nQ932mxofTpfSGuSmHsYfuB9V",
  "key15": "3pAA6f6jEduEzaaYxMPURMo1z3Rb7d5VmpzRRT8fXRKyTyyL6JcfBdr2bKVJaEcgTeDY3NpMkNiFWuLfMk7WHTcc",
  "key16": "5yEguJb2w4h63CPfAB2c1BsZGYQHPfCCW4zmfaFtSzgk1yaJDET83J3MZCJbpjaygDc9x83ZyyxSq2mBRiJAQMGg",
  "key17": "3SYK1SFxDRt3x1SkWCbBSerptcZ4WyXVCMYjoTFRf7GwecKoGFGrjZUVx9ddvceeawjzw2SMX4RDmE1YZNR2p1cc",
  "key18": "3cCvjbmQ6tLUzUshPcG4YudVPSAisgsaYcAfQEnfnBmPkW9qZ8J4y8eHGQ8YV3zvaGE6PP4pSnSnCHYaa5R6YBG9",
  "key19": "4xSNs3m2XGQf387ZuHz7w9fJfxjU8iEo6ERJnY85ekU8gq6dFB7GUa3EyV5dcP4dHqPDnZbrUTBsAtWj61LTS9b3",
  "key20": "Xj8qrDsdNktPXK8gfcVxy2c31MPHdu5bHoEfX8eda1ANAYdZzFkYjBr6YCngXoniF8Lg1MZzFq1dBkyATZWFSSD",
  "key21": "315JkkRkx4dbyKuVDwjGHh3rdpTy2xwSrQDxZeipZziWRGJ9xmJqJX3gLH6JSZVSGTsBvDDsWozToZ1i4bwEguDm",
  "key22": "ByUYbcXKeAgMNpAnwkWosYYeFvihkJyvAH2DRa3qa4in1QH46dbZ9vBSmqHwUSZMBt9qQdfqPkWVZ8rtDY2jJXB",
  "key23": "UuJLNAGNLgBiwgfTW8STZ8nK4dsWruzSbPHFe32kXxTjw1q5AmwzRbfzd23VFhATaFNsMtz2YFoE2AYd4sQy56u",
  "key24": "25wxjD73V1piSZ7FDMi1rFwkXjgapFM3J5iKyN6QDr1yiFtjirNxEbgmoDYvGTmmg6afGd7vBr5QnJYzUCccK6tp",
  "key25": "4GaiNVDocxrxVBgShdyVt4bwijVPbYKgoJWtroCFesJFmGJcWjqsapB5m9XSaqjxK86vG9dKGo9TiaNsus4FUJuA",
  "key26": "3tVvzW6jSpo5623Vs54J71WgPYSbDnWnmY2c6YDcVdwUbaz37BtUQVUHuFu4ML8xrnDTgnvTrfaqUR1uss9FQTBy",
  "key27": "2xL1eRvGDSMnkC7oHguZGnV6MUpwMduFJgVZ6KLB9vQBwJCMQnczqV1Dk4QULh7xTogDhBsjPJryYdSpDpeZijUu",
  "key28": "45x4FHyS6KUc3YuYMDE3HBBYMFLsN3PiRjk1TaEoYnuYfaXTQk6N9dRmg2QQTENY56GwbrwMBP2fmbLkN5BtJyh8"
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
