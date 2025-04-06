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
    "57afqBWpnDFSkzer9oPNEjqsPVmcsyCdQn1KuhHVvDuJMSsJ6MrAmJRWqAVEVqZkuQfytxxDcFknhpfcNtRtCFJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ifdMHZprVJ16Pie7bLjt5oYR339PhrdZjZz9diGVDA8n425Q2heuVh8LQ3Tpg99Q2M5p7dkBYteHJnVpD3Fbj98",
  "key1": "2kuR9DKX9T5YHiYP1y8wSfQz6kbUgjPsTt1nkvvdD8Yt3Ljp5GTCinMBimKxkDotpNF6E9adcLwuPkJ48LW1rp5K",
  "key2": "4rtMpcnnC3dWjyy1P2iWLbYkWiffmDhm94ZfLqcptx4KGV5kPQT6LjKtRASp4E2cKutnxtA1SRDA4DXzAey4PX1B",
  "key3": "dfgSW5DR2BKttQVyXN7ZAvaocSbzHQzBgVFrBTFEHZcvR8S6D71MN18jkfKSFcKv4NA2gPAruD2jm8iqBJR74Mq",
  "key4": "emtWSYnPj59YKXAiwPck7ft9dxrRfyhpqnc6LG8sFqi5yPA4Xvg4wva9kK2HwpQwCakc1qRsvXcvEpsRLtMz8Kv",
  "key5": "2tVrdvndGqPfWEX31YuCYUnKjpZ1ozG8UayvNYarMsteXpNG3xoGkARsgQqhBSVZvJpgnq63zB47HAjGCNaJJfrW",
  "key6": "kBauJVxPjwi2MUxUHdGjhe2vDywxxCm9FoSqA9jjkr3VdfGRnMgwK1aAhPRiW9itLMwAc25MJwWUSzZ8DnVQSBd",
  "key7": "5A7DJichVphsizThCGiDMfgYnCFn1g8ZZgPauGWg4jDYV8D5rEa9ifX23RYuFbY1b5SvMyxZ1pjbZsAHpKuBRkTs",
  "key8": "5W2WCs2AWDXFhC5phM6M4smxV38tbUzP3viw5YDrVLXq6RprLyZwk54wUPG3iWqT2SEnC85fKmCGT4g4YAf63dPf",
  "key9": "BqtPJApgQ4hfXi9gQaJxxjqFfimeD2DAfhcuGhkStiBC3eLWN7v6xVCPwNwCmQrCx2ErYivdymTWVzHU4p2FnKS",
  "key10": "2vg1FZxtJFLX3VJSAKMwsj2P4oMQYAprvBXLTFKpjNSoNRHUijshjNxbKo5EG8ftGkkY7qSF3z2HJCZoReMwQym2",
  "key11": "3qZHYDsEDdN6upEr7rHEs8AirQAdvPGpYzzm9jfRFVzSHFqy2xq3RU8Qj84BFia7QJLr1VqPb6CKJVA72ooAs29M",
  "key12": "h8bndBESr1wJtqHfUN9PJyFjQyR3bHiG11caeyxNGEfGEbSaTiirLVSG5jYdKR4GvWDJape1zKTfKgkQGQqkPCp",
  "key13": "2v5w9oj78oRUDzxZMuJhpp3ffyeVqkPgdYxvtM2PbQyZstarFHSUxsfVy35LYecMEypp6oppynwrPS4M7ku1uYL2",
  "key14": "42TNngsoQBo8Dw9H6ijSM2urFkA3chaWZnuDb5t6dZt3oSdGFyhWoM7fBr5C76ANWJrtR483XfRRAZgA9MyqrtCX",
  "key15": "4E6jYd48aDwiZQxCi1Tb8SueRZB3LkKH1apCUb1MFCWkEzpYDc5EBvB5c8uGxLNSCrEbiUcgsXui9CQkbTF1nuHK",
  "key16": "5kE9JhF4GgQ4dkqdeiPv49FA5jK2Q3wtsPQXBrdDNyfCq6KrmfVhPVhSTU1m3iZAaCyo7sKQepZKt7XfXh7UgQvr",
  "key17": "4xkv1SmAvy26cgHwesbhe7ic4mSbspboWChmxoL6mV39aN2JtyLxmbdFoTN6jYobCir2HitUXnfiDKH6urx8YaY8",
  "key18": "5U74vThoSWcfKBVPep7NJtci5ouvYHewXmf1j48d5TLx9RboRoa3h9N7fYRTEBjxBSqpJA3ytwgJeXL1sbXun2B2",
  "key19": "2wHbTUbpKZ4nTpJ4uh8RvTXDh6vyphEYXpYHzSqvit9sV23UCJjYzNoCCvTrg9Yp3qeKEYKh7946ymtMj6CHSSAt",
  "key20": "5KcG3HT6N8f1UDmfZ5VPBywf3gj7AjvFdaqUEfzhKapV8QsAEShGsERWRtbNTp9b2J9HCBuTKVZ8iQinU9ETXt1K",
  "key21": "2i3v9MyvE6hwWKFrPwSf9M3VEo9mWfDwU4BEn5pn517sck2c9bHPQkJepzPAXCaphnVbF8za8KJHotG2rcGtEuZx",
  "key22": "2wHDiGAnnZfkAFHTL5WK2YesiWKoCz5AK3gG6ngPWYNhut7kjV7RAAM5oEtWxXpbpDHitnfGSsVFA6n4xrtnabVL",
  "key23": "4X4hM5cmiDeVym3sYBvMsjcf1FTEQMAzS31WsLMxvhP9sqbXSXroFhYVvcDPw52JVp3usDztud3fS1e7NrxPrM29",
  "key24": "44A3xrLpnCW1er3jksGyfDwhV43BndqCpPzDe3Wvdz44JX3fNjvaAiLifmmMKpy1YpKJwEPJTpiBQ59h6W2cc7VG"
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
