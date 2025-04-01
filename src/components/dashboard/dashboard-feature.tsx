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
    "2Q4T3DQ6uErwvWj9tyBC1X25RiEcXaDjAijyq71YzQGtkbQNwYuYxbkhYKSatNhVnQ4ASS8HPe8PR7U4k9ZDuokW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KF5RnkM6hmk7v3f9mVjRhqD9yMxLJMuGsFwqkTPXj5qkTmxdhKYAtwYrgXSkxx2nyCszHwDNbpyfwz4uyaLw1t2",
  "key1": "2AZa9Hq4NZwus9ocPTJ4y4pa9YkCZ6vgaFdJQ2sFkw3RUqq63V3nXao6psrakr6o97ipTzcVCDGJBiUi2gXKNnVj",
  "key2": "3K3yS13pQoE3tQ1of3wiauEGVt3dM3UvNGvmVB8hAddvA2JuM3jjmXnCJ5XYyqNdB197VU4TixhHaVWatDcJ2rGc",
  "key3": "33LqnKuESAsK3DbQaZrcPBcmoANPzkpqkVbkRkBv5GodkbdMRFvjuHekFH32YVNvGcyDxMhg6mQKQDZHRurvAQvE",
  "key4": "vwgQ8viZkiTsBL49hBgjFB23PUoyEYbHL2T4Rg75G5reRrjPd3Pixa2YKhrCR8c4RFeb1bSZgaUzejvDTM2yrvW",
  "key5": "1Bao1dEaEkkpJuFpHqhNsEzB4is7xwwyjLdpYK3Fiimvc3sMoAWkxDGx3rGnRaa382YBW3eKLSnrBAzvLuEjSsL",
  "key6": "5J6g4nJqpRNZSkmYkLVWZEeKtMXgM2eLpSC9cdwqQVSC2oFcVCSg91WbLqRbCyWS14hUE581yvKM4xHvMpeuMUFm",
  "key7": "3aTYraByeWBNnPdYsA5ahxaSo7KDJNMpT9f93n3SZoeL89KiiMgF4VaWCEBBrxpELDfvTr82FMKUArcwtV8u385x",
  "key8": "4jZENo5ZnTUaT3BzAALijtQnzEokAow1LfWzxkyKiywQyQXV11iNiG7PW96aeK9Ljrxy4xctvU9SGwb494ugeXGT",
  "key9": "5MyyCLnBfm8niUYvjXgsnUf9FMScegDqfmmei4EadGkBLCa692e1rnCYifEsJ3kkemT3cEN7BNpPRAHxuo6UwZGZ",
  "key10": "Eu4KUr7ud7xSmvuZm1joXb3xVkAAAVn9x7KiGd7N9Ao7jDA7ZQcBfvdcDWPvi4XRzTmuhSPzKs91qJ2eCvRkM8C",
  "key11": "67AZu49DfwigS4f4xAWmavjBT3fRaGgTeiTVpGiNghnhNPGjnNztEhgmmRQboxSSD1Vup6oEVww8gK5z4w4Bs25x",
  "key12": "38mirNTrEP97dQrm5RXe6eE3v72ewYN3NHE8RG3Y8sfU68kYmhYp5EzHnPZRMPMy2z2KPuD559RHjzjAVFA6hF5D",
  "key13": "2XiQJNTv6z7xu9VmRsF5PzCoW1u6CrHcLoHPw3e1Uv1GueyA9qXwjCgkT5Pj1tQFzYa7sJ86TgFu8pAUP8tTDxTf",
  "key14": "3eYteVX8yRS1xLZXqw79UCkhHhR89RpK5g4vSFyKFSUL7u35ntsfEA2mtvG7WwLwJ4Sum99Q5QCJE8MtdsuuYnVY",
  "key15": "4fxWrsM3cpzhzVp7H5QV7kdBK3Xoog7gLMzniP41kqeFiQEkyMJXLW6SFRNabg4xhvvxHQcmRV2cCjFmJ3px5ptV",
  "key16": "3MHgBBMKhfkfPGFWP9hvjXCPW2NBxJT9Jq41iMPMtEZbHxzpQfgEcyG1nMoCu6boksiAfZV4Th98X6UupZmwmuSj",
  "key17": "5mhrETfBe5hYMS9kuBUPYPrQsYoo7uFoCnw7fUsdMLDztvx7nJW2NcHVFatdLRHYj6gkjBBFsARLtwzRN9yNrp8v",
  "key18": "2Hyk8mZV6HeFCsF28VLeZsirRqbKzpZ9qyFDyipMAxqKToCRF7zgG3ibrsPmtwtnNFHaKKs7haGTWt87KDfatsu8",
  "key19": "5CLrJb6fFaLQnFuZ9zaJzgtPPjCQGk28S3ZQAtcpZqBiS9qMPGEfS5d8zfshyEqX2YBgEr1qynHdYoYXq2UTS1cQ",
  "key20": "6yyVtZSpvRRdqhCy1QC33H8EcMsLRk53rAB2ttoqJwSkSBYChiMCURtBaCUoau8gVKasKrW5uASLTxJKjSyrBU7",
  "key21": "W9sSg1aHC6evBgCqUUMZ9DrCP3f2rWLSthhZ3g6DA7FmvW9jEA3EcZMCBTxAc5oKTiT3zYvbde61S9AimpAx1Ce",
  "key22": "31bGm9DwgcDmR2WHVA5kToHDb43R91pG64RDavP7WGTzW5x8JmZq81eDrqrnAKbuLU8xFw9PCNwqei22VMm7YD74",
  "key23": "2Aap1goeaiEkZptRvs3ih99hDhN2aBsUMNDFNYhZ1xVmhNjrFHPe5Qox2CiShxrNR1hvZBiSz1RjNh6coUJKQKMo",
  "key24": "3jrimhT75tPKecpcSmHHCyJgnXN5fqEGPTE6kg39WbCLV71NrSVBQajtTB5wzy2zJEM1D2mF9SDefA7DpyfgDek5",
  "key25": "2ZCwKrHSkNU2JxGa9rrrbGsQ72C2DRDJibkCr8QafocAqgx7JLJYHm1rgHco5CwYAWtDkgCiQsi5UGatDAtqTKeC",
  "key26": "2Sb8ygWZ9r6hV9kLPj6vaYYhbjPKM5Mr2XBViMnAtEmmDYqwHwPxDJAowgY5Kj3bJssm4kpPYHjdiZi8JqZJLtP1",
  "key27": "3Mf36R2hXWvJEZU8KYD3MeHbuM7Z8BiFPgwXHATmej6LHPS1Yf8L97EjzkKrcr6YiP1Ec4neExZd3SJdiGEPWHo3"
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
