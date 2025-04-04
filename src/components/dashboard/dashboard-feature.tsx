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
    "GXQ9cPJAXXGsswUGwjTZ62oQKfVwpCWDMPvK34GHdkxtSFXH9K8MUbgfEMQvEGTbC8znFUCYPxbHNfsqDd3ytVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gcj5qc4CgJdTjBo5N4XNroJgGhsqSiNJYgNkSBKuzdrWhAKzDv3xmgXputpJ5XKVVRLkXH934hfZz3UNTgxcfVH",
  "key1": "qYt9uA9ccXUfRa794xFAxfFERMTVKVCzzCCXYMe8mcjxsdG2pytgTbpXWBCakibdLNeC99H23pYPwRB4swetGFQ",
  "key2": "24Ep67q6WKYA1qKM4SJn5hdM3ndLaUheW2nCcAveMUPNU7ksfLKVRXUq2GwGmMDowDdUTxXhgZiJtW5D1LeiaYWu",
  "key3": "5HVRrPCwFmWmMRKGVKQ3JRH1pFj467jUwa5SK6sKBBbp2jct8cLrTDyF6u5N7cJ8UVayuYSic1oCMND2prZakYdi",
  "key4": "2oBmttQ7nJfkQJcuD9bn7BUzkGQWRjNA3oxXvLpnfB9ttuR4ETmtKXiZuvwDEnav4qSByhC5h5rm7rERtNfmtFCz",
  "key5": "5T8wVv3Wynr4SVmuHw472c588UK9Knp6NRWpoXToYYRjPHY4HZfW7NABffNwqD6A6Kh1snFgqeRhQXYqWYDgtVbG",
  "key6": "5ZDjgLFohqwV7bxvwiqhrcbbNuRz6tGQXB7fTxGcUH78resTP7Wizxj1RUzexjQkCa2CLKX65iKY2FjAvMj3AsTr",
  "key7": "4TWG64meeDYuaE7TskZ91mpvEPmFU2GhxNaTXR5UVEEcBvLMRY9vjdi21hJQcouNmsVndYzQCH9prenzqjQBZD1g",
  "key8": "5gwvr7mcajEM5NqEzHLto57pXs9vikxVivUbnHGha7PYKE6BPH5n4UtwVmKY7D1jZZkmpFWp43q8jyvMQFwAKf7R",
  "key9": "3k2Mf3wVRbgAWjm6qJCFHpNXT9MR35fDGPTuD6uAupXhwPnXavWpb49vJ4C9mSU7xWH6HQkFy56knRN4E7F6aJ4h",
  "key10": "4mGPYRapkrLBWJ4UhhhGR3Ljbt4Mnq6oYzUtUnGYW9Yk4AXxxFDX69ZU8Vxmg71w2TNMoxVGhLb5aXQtE1aUmiFQ",
  "key11": "MkEA7kv2pTCBfuJBbYoUD3DdpjqNt8SLMbF8gVbrjgvXiSwfDn3ZPk176RKHiqZa7rosUs9BoVDf51XyzHbqGAt",
  "key12": "3PnGGLtQWdX18yF8kW1hPuR7wyMEqwbZArG7SXFbtoH2dUeWZfNmLjuHmrvETkPNSnZ4biJcmTHc6w3CghSsk5bn",
  "key13": "5CXgYLNHWYMaqGzGvPbRAbGxDzfB2kAwDWXDgQpjT69zgfehcA7QYmhA5XgwJ2DYzY95yXTqBtUDJbyxq82bbLft",
  "key14": "5ZDRRxL11bXRjymZZgVRN1wG3SmruESxccYwgqdhMv4sHwVtKGnaYsoQemseBYcmFmVSnCUnXmNtw5rmbJVWeXbp",
  "key15": "5eb6oYGeERtSEAF5EMBy6yHMoikuu9dC5obbTBgWbcxSZXxo7yEysFt1wR8yZhkCt8HiEqbrZgzW84yYrBdQrRmh",
  "key16": "TrDQcRTpJenachwGq8tAr5cq6w8ZC3VzMmufPar5yFYcZtNaMLHCEp35WekKZ32dSNcQbEX9qMWMJUkRzFheB7y",
  "key17": "yymXjPzJCixtnijDLehmk3qtcA5fSLsZwHMPj1U3z8gvm5CMpXL6e2R4RZxkczEomsPW3EaVK8aLLVCvxpdfQPX",
  "key18": "29J18AjKAKCPWmM8NqXQLYDH9dpdPHZgHM3eNwz1tbRqQ1bubHFrWudeBHNGDAvPH23YbRTFGu73hR8GgnhBNWt5",
  "key19": "YpLjouGrv93XM15cxBqdqWaZmhBso8XaAa3y7ukpvVCLw4Tg6F2NDUVFQt5uBavMzB6ueoe7D2nZuptVc7zvu7w",
  "key20": "5h9r9BedXpMz1RgrPE6m754Gg4rSRRsbrZfNcE9sWS2LcuGTJT6jpzxSwWi31efwHiQr7L9CYskQyrooupiwjyiA",
  "key21": "H3L9pidCptdf9Goqs9jWtKMutfHu82wWGyhsrFkiVA8jFCdukHv2XPfGdnvd6jXyzLGNRmaNkC7dPnNf2rK2CST",
  "key22": "4nBYq7FpHUHGgAU8sbfYQPKMLDGBkCphxrw2DU1PBJdZ4GUY6KGJZWDmP3purzcKWxXVZ6eUnzEdFbTWFPotnyR5",
  "key23": "4VrNaA9oLyFxS1MYc4uFsssPGKMaEQnPhZog2k9RorGAnjH2dpfcZeCnsc33eqdFxkXUdD1p7dwY7REZ6gP3JMsd",
  "key24": "GsEWirREU5ih2KRYTbePutd8hFhgov7LVmEdeVeB71kHSJhKsG3BrpJ9ADmTFXGSE5riFZ2wj2TJVzsq8N9gDba",
  "key25": "4UP2xpyEkmRS33tCa6ka3V6vqA8GzKHsjKrReYVwo55vyKBsiBHNMHS1hA9RKn3VmTtGDkPctLYG2gPZAt8d8MUG",
  "key26": "2UXHzrwqkYty8uFh3E3zY6bVD4MzNu8Wyyb3fmAUBqtioUZBUNRqiUn9Z5Y3QQTgyB1uCtBB8Vmzj5BWWhtVUWRR",
  "key27": "h97nVVSmtHFSar4QdNZ3ShqPEGyFjjpGnxyGRFmZgCUvra7Tmu9hZkJkYknDHkhah3XPu6YDDhpwVNrjYaGs94P",
  "key28": "4SHPYBokd1Xug5suAeNqpsJZKZxQdZS9BMZnGSpHbpr2ymf3DGjBrXNNiyx9np3NWg5chrzpHoePKi8YFZ8JYYfw",
  "key29": "4cjUyUa34RUPeRFEU7Fkc5C7tknjEdT9D8eKFetXvgYKufbzUroN6rvZWcbMeheohb25RFiD54ScHBp1C6grDZ1C",
  "key30": "3NrNmEzD7z9ahjxrHHHUWzLzEAghp3gEGXhquthDrmivueky1nwBE9AZZHDHtTqY64fkctxu1VebXyVVwp27GWKn",
  "key31": "4WmkMGATykeq5SfYYh9LUrCXBJaUP4JuyiKhwQBvADEUzsY77VGQoQqaBerrR1WoUusGw7FrLrQ2MAttpPdQdj4d",
  "key32": "5tgLkiSiPj92D6Fu6otMPHP6Mu8fWQTwBMN6ifVpVRZGj5w2UPwjH3WwkMMD2JzXjFyNgSNboYKzzdgoZhxeofrL",
  "key33": "49F6YYQnnp9ZNmdCUcHUuzRmnCjNEYwiWBh8NJN7fZHxXvoQf274TRUPsQN1FWvg2ehtHv5fBbPKpFTLa3iMPf4j"
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
