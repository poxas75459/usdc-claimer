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
    "5qACkM7R2NKeBDwG3KM89Myf2En5KekjMBC7QUGAAmbbS3GHLNzQ6hDJbFZGqLmiggcb1m5MhxHn3mtuKVYe5MRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36jzaioQskn6H6mhWxRjBfD6vrAEP1mZ1rPovGjDL8wC4Qtky6Fp59oZTpyWEHTkvvDtfWeVyS71CdEjZyzdemsm",
  "key1": "3ow4eVbGeFwoKq3ZbeGuttN6QCTh8BSCoXy1NVjpfJ1dSbtcphy7959BS8vetbksb6ToewmZ3ThTsLWRT1TQBQPZ",
  "key2": "47kzixwdAgtaRBhEDGXQHdC92s9jFckkh3bUvNkbr8RdhqemeuYQ66FNLJ92mtBBQ7y49LxNvYx5nvGmHmchFFNL",
  "key3": "4YqM23T95SYTvjG45wwr4eJyqkqV5Gg6BozjJXHNKRr7tTyFcAVsREhny96zuVqEdgW7N5oV8kn4P1j6zjr4iZBv",
  "key4": "3K9amZKbk8WhYdmCX4Hd6c32ZZmZ9GVbhoFsbwTB8bUZW3QxJ264fYNpAK4BTeJQYZDDeDR7isDWUj6Wsgj6NdpD",
  "key5": "3CnSTcujWyaNVKf4uWCbKdXctDJ2JaMg1NdWd9C3nNk7NRRohbXM8KPumKyguZ9svhP5Fy5cCGBfvUSwdEtutHq9",
  "key6": "3CBL4KoacBUraioNbtJj9CXwBmuKhS6x1h2kEF5hGquPKekfRaNCVCQYmADmUs8sDssuCYASsVsu57ANXTMwrkWS",
  "key7": "2cE2NSn7d3vQYLZ6gjf1j8jSPyRDeJYU35AhZ2TNS5uT9mgeLwtCh2HnVSSwSeBis7ZG7jqcceNLqUvrRD6X7nFV",
  "key8": "4YugFtxEw1NeLaFKcmmvcWFtnFf7cxJ9EXFWvW3vEJH4zeK3d6b8ZA4pbxhV9QATT3zz661Qpe1RXWtix5ukKRyc",
  "key9": "3p4LgEcBDGWtR4UqNoM6y7RKSBAi3iB9Dfp29mLMFbXetRn5RpxPajJW6zhMoRAUspe9MshahQB9h2BXJDM4aQbc",
  "key10": "5iA3cqfsunrQcHjWfQTLZicArY7vETAKHp3W5zgngkBr8bzxNGc9ZSkQRLstVV5JRJerwLicYsQg1vkMBDk9ZjUt",
  "key11": "3UYeZLYctg165zDsa5oFXhBb2ACdezeE1zYpj1r6ubS8eJHRbfZ4EwsV63AckzEJi4nSG9LYz6MZSNVVaUjRpLAT",
  "key12": "4nGJrnjz7kMH5yodKPeQ6iYu5ZR5tSNWkwqFMt41DcqkFU394GsqLNnSdCyyeXDrTocCuZcxvv3ZvKWViD9bjZF",
  "key13": "4rLWYKeDFdpESdTjuH3vtiFxcKLtjdZhHeYEXmnzvuDnBzyFTGSzXa9og2G1ysTr4YTe2LnKCzvXLHTdPECvntkn",
  "key14": "2ERr25Hp5pGVAFMizmtNK8z7JkKfUh9jY9xfQHoRp89jfuhkuvx4z73Tfo8aGdLG3qgwDgQM6X2sHaJbkNXYHeBi",
  "key15": "2iNE6xyVqiiZDWnAenbw3rSgUqy2m99fEcfUk8E23KyfMYoPFjPegdo96KPJH9toLbLx5CzVnKwK65mmG6d5LEC6",
  "key16": "4F3Ei8125PviQXfzAJ2W91W8iWgma8ijDdUpwgfFotetBknacxrZ5mjAc25iB4QPJeFdtbSxQ7KZ2qXyXFcoGMZD",
  "key17": "h5JiLFwYvvj9KwakdSA57WAboprL4zds2KGqQQ5ijF7LzKDSduR2qvG1rSQxEVNdh3iANMrLbx96iGH2pPmxWPa",
  "key18": "65KWzA2tSozVThoXtPHkHrosoeNe3yjzpbJvywRdn3qh4MwxbLzeRKhayTZPzLH6BBL9drHuaFVADjNw5bjzpuTy",
  "key19": "2P2K85VDLjQnLY8o8YxdiRuvx9HwFBmk94qK8L8dV3Q95kVrH1SGwup78rcwwiLQwM6SboDg5bF3soQTERP8hQfF",
  "key20": "2Yw2vTsFaCkCogRFG1jNf4gpgAjJVrruwQyE2YKnVKaXdUPPe9C9SNPHuyyQ3jPuhm9KBzRfyWE7BnDmepBwxnWL",
  "key21": "4o2c6EeonvwEwLsJetBLyMHVQ85fcqRHQ771kYjbXZgXsbub2qEF7dr9rGGiwM3VDJz7Gtge3Qn9EypYUfPQSWYQ",
  "key22": "2map3jbCVYeT99shz8VXXb551xErUQb8ma466hMTwtfpi4MThXMPqkGMQrZiEZ6LZP42Ckas97B5f9tRynCe1FRA",
  "key23": "66KqdydLr1Yyd6j8Ynaw94bWg4pf7PBaBrbGKBdb6DrXR4jnRnyEUKjWW1JwY2BZH7YaiN86zuobeyDJ74BHUpXK",
  "key24": "3BMzHj3njGERSjiS7QzWFQd4unwrBXSX8ZPUWe9dtcfBErTUce3HsG4W2pzNFbxKJk8WUBQfori9PHyMYBMG4zPR",
  "key25": "4xYqDjmaoq8vhFJn3v2sVHQ7e4nggKnYYosmM8WrPDP873VrwsGdF9F54aZHHEgh6QmjUQPgE7DAzMnrkhQQcooT",
  "key26": "33mxjrtvS15i7jgWpP8fktESUqQjjkSJ8gRkvgdtgbf3hbrdgLUzrXX8jtRsUwk1nE95wcbh3FA3sdBJkFExhjV3",
  "key27": "2oNkifzCoEbNJHUV2SvAqBGaKSANQvsZrYajocdsDuytSUnYXsb4aG5kNz9Nanmwnr8XfM1cJ1oA5o1HTzTtTMjW",
  "key28": "65Gepgndaqgqxcc25CXvCxS4cx94kwAY6p889wrN71P4Vc45CtWp7ZbvkiSVGvboT1oMQL14Tpeuo6KUqWwdnSU",
  "key29": "66ej9iFbjAY2zozfHxCUZNKer5Z4dHDPSvy3N4zm4gU8YkEywddytkWiWsYqfGNGtjxeUcEPbRvp7T4z8fYVzc54"
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
