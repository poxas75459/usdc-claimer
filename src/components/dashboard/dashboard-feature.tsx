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
    "AMBX4WFEvE9uK88Cz2nr8ysZhkHWijXQw2DCmXJYVyG6CS1qnr7Z1T4mbrteGYPCrREEUVoqikcL5AYLi15ouMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pEQjBbCVFpBftetnvuZ49qAMs1ULMUAaAUynhbABYNMa3UXjZ3FEEbCS5JCBC4v7hkMJCZEdGAb2TDbLtnds62D",
  "key1": "3Q8jSxQfm59EJbyMCcnWHbMJtRyjHU8CeM4NpLfyeBtevVEBK26gpVDdqD3jLoW81Gw6BavA99NNHdFJci6rqCyn",
  "key2": "2Jt9my9WdTpVJLiWJMQ125pkNQ6djXS3Uoo4shp4yz2ZBwRKjqUvfJAKT9pM8CjEWmHorXZyNY5qAghTYpkb2xVR",
  "key3": "3Cwq5p5w2xuiEcc4crkMgmsy8rbfrZzb9nzGFpCoHw3g5VoK6aQcpe3MhGP8D7QV78on3JDhQaJcjf643HWPXyWp",
  "key4": "5wHWHTGSR4RLrCPs4xo257tTgXG39y42A1GpGDqmJxcVfhEJy7hYBhWUf2hBsCE5NnHATzmFAgWzEaJQTFie4VP8",
  "key5": "2zqqYyK2sjGkMkNe9UX6Ntvpey3Pvp93SFxm659n5vkHC47MaSHJXDyvZURPtazfaYCo9oHthGs9nGC9hMGxu9T4",
  "key6": "4dc7AzGjLHvU694ynSJSs43issynPceHjfU2TDxLUJUYVShrxDBN77vouK97Lgo9grrD7LNMKdJJCNQmQ9ANQGEp",
  "key7": "QxmG6xqbSojioQF5gZK6MMQuB7XMMAwADmCL1j41qL1b8Mz2vXAHXv4AxueAo31zy8qgn6gz3gENexX1xYSbp6F",
  "key8": "5i2fN7jNghfM3mCCFmr7G3Frb1AhgcM9S61Hhjk7nGUk3RsN6hKZULNgG1bXYUiR9iF4XFrfasbRTJgTQctqFwvR",
  "key9": "3RRY9vp5YwDKTp4Et2vFBuYqm6tA7Huy4QiMjzjLCbgnMgJV63Do5VpfQkidqjDVGKDpVui4uDffYzjZgYGML3U",
  "key10": "Bqt1emFTtFcbLMeQpdCtP1krZG5T3uuvciPrrVV3wAb4tFrorwaMCMEujZtem8TGaDLVFEBwh5WELcB34ScGXPj",
  "key11": "RJ7aN1tEp2K9g7UVGi2aGGnKTSj6KTVotSiMhfZdKb5ZYGaFCwJQx7UWZpKzGQT3xi9d8mk4SDWzMXSokitc67u",
  "key12": "3dViiyQ1fruC6Kxoq2FUwqkLgKK8w6rbzhjSsVgf8ZdfUgdPLPoeg5KwbGGR9hvDxez4dBEoU3atoWz7zXC277gF",
  "key13": "61EX7wwoUPDekEXWxmJ2Q4NDezyMLef1CLLJVEp253kNkugap99JRZ8y3sV1NgURLdRKALjjVJ9dPsdHhUZvKvWm",
  "key14": "2C6Dk5nhQUtp2qbKpTDwdyJu3F8HEYiYw4xfsm33TTTpj9sJS19BmAP2GbsMWNciKntXq4xCV1qkuMLpkeWMfA2p",
  "key15": "5VPeBsqABNF4UWUAF4WWvg5KAoxUuicpwHLTqfM4kgcDNw9KLUuuNETfRQtzd78zBgCEa7eGNPDjoCojMkCdoQE6",
  "key16": "2dkq24gc1PXwCk9BH3qty9UkdwRZeeGYBy3VXGcLWLGci7yh1nJ1fWYoP2neHS9EWTgDGUQY4zYXjD8GXpseszz7",
  "key17": "4Qo6yQ4wu1YWUu5K3gjBtnY1KZaLMKKGieiSfcZ4RqiedSxfxeQRjv4DWXVMksSfkDWWFuWxbvGVRDhoMUZRQ8ty",
  "key18": "3rUT7oEH5ytMX8WzgyDDYVWyNNAeMTUNFXiH3zmDHWyUkPSaQB1hXXzfEuJAj8aaBzdmdxBc6Ae9RkQ54Lk2oewx",
  "key19": "9YcxdG19Ke6vzZN9EGBSYbTmxDAwT5c5UyAzEZC26pJU3BKRJpkSiTc7AetBhgN5bsBswSodEvhzTKYVt6hL3uu",
  "key20": "2zZjdPKXuuz5JDhsCjV3vqusdYeaCGEhzBLTvE4uTj5odERC78pMChAVinFgA2noqeZy4ADXsemPCxoLpAuQxKP",
  "key21": "2A5dE48S3zmH5PJThis9SPPsEuhvb1NE5qStbvMN2PogNTFXPbGWtggiCuBttsMo7BCVnpT22z9zk8CnDcvcmoqm",
  "key22": "466QM4dvnWe7oBPn2REZqZuQRgXczkJWekeXvyzAPPMCvoU3Hf5MTfJvKN19f6L6Aig86c9mTKfRfs8XmpVzbmMM",
  "key23": "2rNJB9o6hcZa96btCNwfE5F5bpK48kc3z9ENHJpaZA48JdJaLR9GEKwTup1V65Gjxh8hxNSQbyvgP95WnChoEzkv",
  "key24": "3cSZKmnsfzY5NqQ7Ug7fVbo4yFxWKZa9xi8kNDHd93ft9NjkjVdebznj9BfZYtMRf4eoJQYarY8ohqrs8vmyDYm7",
  "key25": "3fSikPBVhqszCBdY98zVvA8iVznb8pZdyZZ9DEtEubV4twDqovDPYJrVzfdkTfZYZXPfKjoz9hHpTh5pjyTKNFEB",
  "key26": "4pppsEVuqUUQ4Jq4mMeabZSgVuEv2e1wTtk7DWSbWY1h8U1g9d46M2vYiud45tSr7ayLQdGn9uu2Bz33zAvViEWU",
  "key27": "4GEsrezCKnBaFHLpetDgNQqmiQnanV6CBaqNzkMBtGuVUgiRvcYe3JBCfHLXCyuy7c7PeiFGRMga5ztuTWZAqffA",
  "key28": "3vmWYVXZbAtQrb4ny9RMPpU98j8B6qLjGmk4zwYg3JruFn2Ws479NsQ54RqwVU9Hf3S8J5hQXF2R1rasVxM1SvAX",
  "key29": "6ouLrZnHpmyw8CZX6DB6ZLrCDQreSRLrKVzvazDKyEDo8AkZCUmGdr4mVrvE5PsKA2Yr9KUcZzZ1VgAkimRVLg3"
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
