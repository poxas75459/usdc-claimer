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
    "vgUhaNjoJ1PS54CmzNWwsLPAULMoycrcsQfyJCNiSsxtjWxRn6GXb27ocwWsF2jFxRjTZ1vXFXry8Z8qDEvSgg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oQQHczaB8dvFXsMD67RnNsLwzkAmiRJgBeovxAsoWFNQ2RUY2j4jBYhKCVofBZ1xAKK2eathAaRQsTr3BcDrbSC",
  "key1": "2SvFNpCK4bF6yiP9KFjLsqxGRL359RZs7hjXFQ1neyEyQ5MitxQtQfFCfThwwB27cr8c1CRDgvZV85Ntqu4oAbTh",
  "key2": "22pwMqVzUvjwW1NodptaCXixTsMwJ8zVFAM7AkXBVkv255E4a75eCsD9DDpjfiozeHDQzeakLujbTa197TwS13Vq",
  "key3": "2hUEvucW36iofX2EJ5aH9bdCFyg14jbQfTjXCT8Hd7RCjuAiV3Pt55gGsZtEURx29SufAKz7D2AgBkxY3z8n9nhK",
  "key4": "4gRn8parGqZGx1ABxgqbVYYqmwLg1ixeKH6kx51FGXmAMmt6LRdwvDwxb1tfoerXyfuNRV2G6tUvPDMfgZhJLAyq",
  "key5": "5USnLRPAyy1j8JQkQK1YXfszaxdyyRdkTcnF2WVgPAcYxKg417tfh4w6KWGeG29iKLYbCJFb9ZAdkZA5W8wtBNBs",
  "key6": "258G2ciYYBs541dGzuLsiBL7g9km5u7TdhHopjVEF2Sap9wFYKFb42FjPp6UDxVqDCK8mHXVfZbZJ8oJ2FQWCNvN",
  "key7": "61EzwtHnib1NWir2HUdLV3ufqEyhGYa8GMN2RkAfF4dcrbMTTUGn2nSZ5w5GpZ9khYXnYnhPAm6c3CPz1u8vqhvE",
  "key8": "4ysbzCksepk6qiHwKwv8FeCAHJxiuqTYgfJnvGrz4d456HkyuGiANP5VgCzPcFdGm9EE1NjQjDPpZ5K16PFgXv3v",
  "key9": "41gVza2npFsdLtDqcmTBcbTgFKhu6tCq31dLGXR4hZZneDNoXmkEJRzJmffgKaZ2FiDiokVEv2syjwJ4vXfg7zCY",
  "key10": "vDiYWTWwQLi9v7GkQWwFCxoKoZ1yEerMnaA9sr2Kq8ue699jVZCWGgETy5VPtBDyJBRhVoLM2BKZTmSjCpAsjVU",
  "key11": "5hi6N9eALSZCYH8KNK44RyMQGyfNFjCDwzWLJES4wgZjzaMDuUndZpBGdGGgEQYthMR4jsFjauHPEbCD3mShGuc4",
  "key12": "7f6zetD7ndco1jXSqRTLkGSRnK5Xx5A9U5uq6uhuuggmFwzK5cRV46gf6xstmdqsMhU9vHE4Yvqc5vEDVPszwLf",
  "key13": "2NyqwM2sdntwWnY5XQ9oPYtoaGdwakTziwB3YhZp1LJEGoupMsZ6XWzTzdwXqie1qgTJ5Y25jRfwJ9mxVhkAusbe",
  "key14": "r5VSp5bSVkyYCvtyEetzQCsxK6N5LJobYQehfS3M5m2nrg4QrZGWFodDrczJcWBzVn3hQNaCymKw8VYA8PLwdts",
  "key15": "Hfjb1kgKrvQsy4gNPGe8bki6tyxpRdFmwwvf7TntWE63WwHBkhqNPMj5yrqMzM3fqYdmsRf34eFosLJDNMVo5ry",
  "key16": "4LiGRUxFktcn7mqLYA4FfRoLsHS3joZbwBz8uDDyumrW7kBnK6f6N9i7e53UtNGgjoFB6JaA1ZFskBXpH5N9gvs4",
  "key17": "5BpjkKXQGJpu628gtJgNzAEdLhBfcpsERUdKGDovwYd85iut8fej96EohpJk5GknBBmFR9ZADNFEuo61tUhrgBD",
  "key18": "53z8ejhuRNftmRG5fPUaCLVu5CQLr6AZcQZSdzZduMhGHkYxroeXvy7UHWMUHafDyAuyvzkYMLqdaMyyX37MytMM",
  "key19": "33Uau8XucY7cWpCFY4dwgpUm6PEKYVcKASv9okGKBP8b165kH1voTCAQ7SCh7ooM2dPR5JGkRWLNKzwbwW1RkjnM",
  "key20": "Fx8u1sUEKAWF5JTnvi6L5uEneR4wsZ6HGXYgonmYoC8u1exyjbsz8p7gMmXQa8e94RYR35JVTumcs6g2ReQpLNe",
  "key21": "43tbmt2qXdGzhbV5THFECbmLXkLPLLNhdKDbrhihud3DkjFSbPX6Vm2F6XGMQazeuBedrbxc42nmHzRJuUvABAJo",
  "key22": "2kSvZb93n4RF4JbJzWsPBymd98P9FAEuYToXhD7Es9vFecxgocTFVV4FtsuwJfH6eLWi32F4C9HJGpCBNR6SzrDx",
  "key23": "izJcqtXqzAbHnPgea9tysFbdsmkKEBqPDpPEgpEtsprNVKevDeKDLYzAFW2YqxGYfg1Mcg2aTNsE9MRLpmxniTJ",
  "key24": "5aVHHphnBsgCCRekWvwULWQUorwYgeXHxhphhn6Vtdj4a6s33DNaFx3awwHqNt34vq3YJMwcW7BbDRTdt1MsADy"
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
