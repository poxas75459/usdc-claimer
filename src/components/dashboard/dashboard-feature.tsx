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
    "4t9YqpsVgyXCLz1rsS4CHHyXovYdeXxvQBGgakF9XQzpBUqnSwgdV64Xfnkun8R7jVey6oVSrs5L1V8E1usWy9FB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bt6HTstK4MeTZ7uKzmcpnKRFuk3LPrmEwGvZMdT1pHBckuWzoV3NSD1bkYvgywmrPFobJDCDe1ScD2kKksvo1iz",
  "key1": "4YYfVPQsoVcehrBqaZJ69jFfF9nw3U85DgUeTPnWDiRjaYBd5qbjJsRsde1JV9im8jJm5eDUwHoTBVZDm5mS4EjU",
  "key2": "4zQAymcz6JWZtwbDPbCve5qELNGmXrvFkCJpfUAg59fF4XRLKXc41yWEWEZA1GiNurJMGbgx1hHbHXQMeFGJFqjR",
  "key3": "XjKMBpsAUZrnfZ9jjbXcar2LvTKwk3UUJEsaqU6EWCYSM3CVuhmvfVEWuLaa7oQRviWXaHnjpAsDMgJXw23hZvS",
  "key4": "3952naD3Lg5Ko1QMPuDq5CN8u71rhJCZGhpdHjB7xf6zfVfuJQ4XyArokv5bRX57oYfeTgT8rQLh3bGLkdNuzwfi",
  "key5": "5McXx8s15Kfyw3GAnw8ETBDmk1ZeyvMWx78dt7DSsrreZeGHQHynGqsT2d47GoCfqXFQGt2WJFJyJm88Bb7wVtCz",
  "key6": "G8D1RXBquFbwRDXVQQ4xj4UynScvH9Dk4H6Sh8egcoZMuR8xjX6cVm9JswyBBXgh26Y4tu3eDSsUjjAmmgwiwbs",
  "key7": "4RYWY29NvL5oQGMXFTsMMbxdBo4b7Wa11q8caFW8zCLYGmXQiMy5nNUKF2GVS46Zwrv3yNRZViNpaKoqoGMV6kU4",
  "key8": "3Vrc1AErjGM4nM25qFDCAouP3QT4Uq21TqmQJL6bzGYDkaPMk3mEQoyH21jcRYQ9H9BJRm2hhigGxeXfzhmyF7tC",
  "key9": "2nxD5MZz4o9e9NR9V6qVp49eRmuo1hQ7K9BhC2CKZr4G386m4iwZZVivPnPkyg8fPHS2dqbmo7w8c8SrJgJ8VWth",
  "key10": "2TdqGNAjGt1LFCTf7YpPEz45xcytU8PZv1U1HKVMFpff41fPrhMKXvEZhcDW589scEBVPNNqV7ZHtkvFgCoXBWnA",
  "key11": "5sZyrt4vxSc4ajaEYXJmCPMTQBJiXN9a3w8YEfabfUY9zFvj7FeQZp7sSwukbeDAc8gy63sQJwgkphNYT4BinujD",
  "key12": "UyJA8ufMqqsfDeCU7UWqnkFEcRH76DadaEBhp55JK41ZbpC8YfnbAS9HxB8XpffPqoRjW1w5on9q6KiqhvFakef",
  "key13": "39pXaTNEX6VQEWipBT6NfFQAjKtWSVHmd7GJ9pD3h9ZCUFKsZTE4jUUYzye5BweejUP5u71pEk1pKdabCMQCqcmJ",
  "key14": "2WrcKTpUvN678UyEgFoHzqakib4DfoQQLPFHq9rpu7sMAU4WiWimH6tnupAKA3kwbgx3Eg2A9PtghoYk84CWntyj",
  "key15": "5dDWvNPT4N4YWHS8KPyt2jnNMfma7ujysfH4fvWhBFwkqtBXgx4Yt1N8ZEBep5HCzdaKbNemMutXNS5A9zFoq2x7",
  "key16": "6bW3tnZVFhXEbedv1p85iofD21qTu3z1qa3YBfVjja35jLmGsTCQzGLGaeKM1bA5LP3QuiooEdBPLrJJpbEMTQV",
  "key17": "2kua4GkNCTfrUQXsa6THxByNGVKZa2xQMWVAguLDkDjgTGmSaKJLsRxq4hjEifS3e5BESDsQzGjoj669vxdZTW56",
  "key18": "5ELEhKJSEiH2ut9nPNsjSgN9xdGHyGLthsmEyCsfULme1h4Dt3bdAZTWaFmzgqLNSm2JuXpDdu2wGr4LpVkRef9n",
  "key19": "4tNTmJ23ck3ZgKtVdK3Ru4QNnw1vkxRc4LTodX2gWcjbbVrk6QGBZzqrhEtLdMcseogN4BPMgcbrJfuEJiVXhBvR",
  "key20": "4eQYRzkpX6YNN5ax9WN1ThbgCziuWWQDQDb5ccsYprbLvHo4qu3ajJsgPu8RYFveAzV53J7VuRXhh1ixPRttK7sg",
  "key21": "ZchbFjgwRPdicayCUkrEQsUTVGdDFsM865LSHG4rv7uaCsuLR7CjmVfBHjpKa3ybizUkj6ZPY4enWDNAHKhc7SD",
  "key22": "5z9G7Dvrok6KpZ7qyJgVoQRUDX2UfkuhihR6ZDoWe7nSTuvyNTrs4XRrhrdqhqYH7T7saEcQeEktpAbAuJFymVef",
  "key23": "3y9wB8A7peHUdGzGT7qrUD1zuXphYcq6TuPeBEewwqHr4TECjPseUFZeUzA1uRJzXVQjx2i6uZn6uJC4dcLGA4jp",
  "key24": "3Lof5MgbgkSnpgey9cDfNb7GdXfJC9We6MTbDu6MMoNGvDg2u7XF8DryMHUGzppLC98UuRJ8KHZ7HUNqcXZvCEti",
  "key25": "2edgKW78BVsmaafxYGEdfbhvcWSiZPiYn5RbkgVk7MK6Ff1xbyGe3J6mgkZwX78Wy3pY83jLjhJtVVxcms13tarN"
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
