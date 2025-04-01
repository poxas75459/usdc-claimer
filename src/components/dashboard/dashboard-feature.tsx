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
    "49BMb2SQEpuKBMFAs5mbzoQ6S4xqaLCGhrkk1oDZaBLovkhj7bsyLMzeeQwbFo5QwEzNCb5DtSVXhZigb35pjFkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vij3xfQMuWTXpwcKydV7ZLihSPBCw5PzuWRioVy2ZNGpCccZdhUuprKo5DeZf2BJR7sxe1oJ5ngVJcChdt3yLwi",
  "key1": "2EBVkRFnQHynD6Gemu6i2Qps5KZvj7jbdBitWmjc8G1As2FWcmfWY9mwepA4AnigDb9RBig3BQEcPDwhN6cN3jd8",
  "key2": "3gHY8qryVV8ejcFCTFeYkcMQWyrFwrLKNzmAocRRDHzfGTPgfWU8KwUbPZqoPsucgCfRnm2RwxLwKHMFwksNfRsD",
  "key3": "4ZbPb72XTu4jHkAyPDhEnNijBW8qbojTSfJsjhWnRdy6MLGieUqHF18W8ToTPHmMxEKedh18gERuH3c5UxKKdJcr",
  "key4": "67pa3kP3rvuUc4jRFjZ1CojLGVEMmGymaUBZtNZiTegZ26eipLABAL2p4nLQpwT3uDjX1hvfgEGBnekRhsQdwpKf",
  "key5": "ZvTNvMyLCi7uzAs3hY72VrZCp2AzC65uLvs8eMLBXXF9gq5jAX2wc9vfNgxcyWgdzcNbx7CFMZJ2kPjc5y5gY9n",
  "key6": "4CnDKoXuhWLdSrgWWwK6eSBmfqLSYpqSEmu9deDrDFwbcU1FsxpxWFJn8GyWLNkQk5M4wFjGRhFaJX3y1WuF9fhF",
  "key7": "3fNzK9ciHG6nNK6aY4ZqUQr4LuLNquGsfcKJnHLi38FBcuKngnCMy3yY8jrECDonVtfZMd68HsFYbPkwvhZ6ZB4K",
  "key8": "wab4ygVSWdQENgMNALddFyNAiJ6G4mNqVm4A3bjT9DXuUfX5qkeSvmcddYvp8kdhSGZSyoTQ1PEyQjfhb1tfyRY",
  "key9": "2nHxEpXDtkvmwSc7zq2dJSt7FtNmGSTUj9a8ZvztQrvCy4h7jp48rQb9ArFdmBxqnBE7HpC6Mar6aXpst4LKpu82",
  "key10": "39jzJTxDjnpVhkA2B23YjMviqMDRPpLNJ11VL94a3xCek2ZuCC8wA5e27bEARhSB2Zt8NdhD8TJF8AH2VTMEDDWK",
  "key11": "3kuzCtM2gAamdkvkvTgpJzbtmviNaDggMGsPm6rah58VywSXMnYzHDzFegFbrJ1E9Gk935wcwrCqzhsE1zWK8DnQ",
  "key12": "DgqDVPYk2AYJFeAUo7sokvWAKJYppYRTcowEFpn5jTN6aV8AXD9Wz6fsQVAFraQmcjbSTdNv94K7PyfzemRPnEx",
  "key13": "tgY87NM5rsLXFREJC72jGLaPkEQJx7j45J1Jh3o3uyMVzQ1SeUZP6Wyg8kT3bpFG59c3yhBXuuaJzZDvZANkQt6",
  "key14": "7L3qrB9hGP79okFAgAahfCcKNWsAN92k6DL7Hm9UbGjEWbguHQnyaqyzjXjVLoM6rvdkaKzArcWxL19yLkfgFfm",
  "key15": "5JnWg2Z2RkqHB8SW5Tdx2ib9rube8vuoBCNFLciggh72KiAgk21boczUjsxsr6mwgtfFLaUMojELjPVVV93dx9G9",
  "key16": "ztyYK7CA9spULf9uxEYiguynA1keUVjYAVuXPd9ZNXCUFzhNmTDsbgVnV5BDb9VJF75o5kKsqo87dnHooXwKvXr",
  "key17": "4aftRtFwXQ9KKps2QPewY3pCExeo9R8L1oC1AHETJNZiTHBBxU6HjeigmDsAAbuVJ6Jg95Yj84R8KG4pNxMLmDpx",
  "key18": "2KmqpjDnouSPkumH1aNFsnbLTzYWKUwDPT8PweTjiHy2sPnKD2KkWzDnWNPgU9goU8zsCdkWVVbfty2wARBmb25J",
  "key19": "2uiJJuWwsfYKPuLk64mgTEFuFS9cuDM4J5yQuNzPxeGi2eWHDVX5SgsxjtN7SXEF1K8wAmowt135KHYzCUKv1jvH",
  "key20": "3BbioGr7h9SpqJjHMbNoeVSFuHSr2SotqeabrHRacbEvYeRryVNcR33dhnEUTaQsNvnfDzPwE5eSQ5ATH9zWxs7H",
  "key21": "bDtDZgZAnxnD5Ry8iLAHgMtkDy8u2CzH2XYajuWrPHqeUqPH6anihYhF83busw9cZWK1VoR9imxmNfhLaVgc9bK",
  "key22": "2VNeFybhGvQ12RtBgP68AXGC6HtH5KCzH7yUG34zghtQv57Dqgq5LiSUPaAQngPyegDAcGzPLRAA3kxDCxCxPogo",
  "key23": "usDc8kLLMouFXT5hPb9Rq9vKJNibyGrtu2xLXka5CA8QF3WbQkxEbL92gRncH38hLMhWY924cxm6d51BzsDDNHw",
  "key24": "rz9RyzSwok6uzZFAJhZEnAjsSaRM5J1i7We8XUzj1BdKhCCd5SEPs6wN6oawRL52ckEJdB8nLDqNua8uZTLHQV9",
  "key25": "4Mvc8NdnkLvwMUaMaKJwV2r22Cy4dK1jr3T9fQ921NxN1f1NfRDpQEG1YR5vGENT5xpuvQ7FPZsQzCC1b7yQ5Na7"
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
