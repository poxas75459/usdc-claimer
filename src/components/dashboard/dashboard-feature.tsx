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
    "5fiXBW6PXfwgYePLdUbLc4x7Ja1XHW2G3hTGJwP6Qv1yNFtnVDnp1T8BehniKS6GxRDRWe5acpzvB7qJm8v55b1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sgVtrpQtNsyvpP9nQrvfm9s61bVV6sk5f4SGsMArh8DZqEe8D53bYim3uKxkZEMDjxHDqrksimqKajnoeLiWfaF",
  "key1": "3oq9DaMN2RJMZpUEkUQbXrLVAFbqguaDXmM2qwS2aigNyFVg7xsvaarcSURWVfwBkrWaYrAfbTu89bx4p8KGNFh7",
  "key2": "5V6nnWEoEYQjLwsJ6Ub9sMNRUNB5JxvjzYExsU9pSASBUPM1JByYLRvVJ2pqeqpUZDLFd9cnDtgoR8v6Xs8pBx6F",
  "key3": "4NMmEQHFkfLXZq5HLYFsm7kw9Fys68XDnbx9AFe9HRy7unAPSQWzZZFSnPDqW8m3JQhfHAithuKrbrDX14cL1ySH",
  "key4": "5VzWERsMoVX1jVWgnJDhB55zHSdkz3yuUZr8DiMZiyipewzYdUh3k8LniAhybicWJmr44uezTJNsgXiRwKbGueah",
  "key5": "2TkiXjFbUejvHBJst8m29ri6qJUvvKb3oYuHkUuhQgCGSJYFkCzP7P5QVCD8uUQDEcSq5KBxPSrMaifEZE3HhbKp",
  "key6": "3H6QbnJVbNqgmHdaBS85y4ZT9xH3zPA2ZxSXKHJGRCgKFbYXE5NSBuPVvYJ558xJ3KzfHtLNwUcvkpXTcdwivvxp",
  "key7": "2P5BHwtv2nAuMe1LwGQDBcN2xAvP53z1DpadNunjcgwr1pgov4gc5LuM7RsuAtiHFP9Emmi7CcndLCVw9sTqvkFU",
  "key8": "5pNz1cWzFU52mHM6JbUzxD2sGUqBMoVLKM4BZ2rN3ozkp6VVreQBumqeR8wgNtCXwRPixH89NAGH4twZqBRQE8uL",
  "key9": "3bDbdyFG8Wq3dW6Bc7tsqX2WNfEr8fT8LqauJKhfxJ6NVwDeZPAazECFa6Bh2MTppMecEaRtixWUPJ6PHXzp9vMq",
  "key10": "2VXT78z4t4Ei1tWpKaSWcEZpMVWpWVq3MnebzXTMPyHKx9AQbM5fX81261nqx5CPGmGZwgXQCo8HDqoKfooHTUt4",
  "key11": "26kEcQUpMzKkmM6ieTBDPoEWdEnQyddgRx1z5e4nMz59ePQGH4Pz4dNiKgw9BZNDa84r4Edrwu7iy4jZcvAnkDzq",
  "key12": "5izUNSchZmUadrxPeNZmUnqHVcU9n4dNAjhDnPtuHy5dMRqJ7Fh1kmnDZ6u1zEcvPWzj3LKghsJWhnhtR94ZCnZi",
  "key13": "26WTYL3ykEXFGgeeT6wYRED1i5BTqYSofahReH972ErFieUbpaSYrzqMqUt2tuLrp4qf9ekcvjNNJERpzRZPMFbP",
  "key14": "2Q9LXgaxsLfVtfEvzE7okwmRvKUcrSH6WQjFm4Zdmn3f8LwbLMdq4Q9DpcjQwnjw5tUNAriyTVdVEEhGM6j9Hfh",
  "key15": "2VhvPKCBH7KrpwXXzFPLKyz8pGDkc8UK2LUFv3qZUNdwZAesCZqZdN2kQ3yZ92kZVtsK1ToEFoeVjZcLudUtpdY2",
  "key16": "2g3LGLTWi8b9WfF65NHmVAZHAu5hMzfaNtA3USqVPEjVhCSm1Jm6eV8WamTQeUtD735pUdeqEZxVqGShiz6iUnKx",
  "key17": "28W3MzibHLd5uV2rYytcZBPSQn683hf8Q6Gs4U9PMgxFrBpycj69ey1Y19Zidkcz9m8E6ZKRBiDPApz7ngNWCWDD",
  "key18": "2DNZRQ4AAKYZtqHGBVL6zaEMnKs5qMeNYUinWjriW58st6Fgb46sK2rXpLMmcywrJkYfbicCCoT8nfWFwaee9oaB",
  "key19": "3ToDJfEFfypPzYd4TADEPXq4Lpf4SmviR4fSEii6nyXykErgfCr8w5HXKZsafHsufK2ESLdYk5yeEDBKkMrGktCk",
  "key20": "4RUXPebka9D8KaYRHhuQ3dsCudULeBBoTP2GZdyrzsCskjcgqMCFoZecC2kxFNmSUrdUiq7kRYHVn5d6exUueNdd",
  "key21": "3KnbjoBHd7ugEMrZKxNnesnmgXkuPM7kvX7R9WUvx19j5f5EawozgJk8BBCL1ASj5VgcVMvTNB8wiygW6Kvb7HL9",
  "key22": "4itraDbvRQa2mkpxF4xDagYXoJWCsyLNBCwo7PyDvTZKweKd7Mwh6Pt1Z9NDgLFcbGt7icCf3hHhHYhxtXNKC11z",
  "key23": "48uNByfYQ5AiEonWLBZvmMG9yqcjgRSTnHK953B478n7Spsgpfj3787wxPsmmiFwcavgtFSAqaCM7BufHw9rv5X4",
  "key24": "3B79kwyUXEDaTV6xWQfukGf7jnkFYbL6xbAaEkXeaeFk9dXrTBD2XxRBuduJSHpcetVkSRh7nYZk15dtyUEPqgYi",
  "key25": "F984wm7zAevYnqM2EpSy7r5nkJnr2m3TjVCtT1Zy5AffHvCHCjaNaHNZBTW7TTcvq4ryFW66xWQYC1bCC3H2pJF",
  "key26": "4wqLhfuqMVFnaLWCxAGuaKyFLUiYvztY8nqc9qpTaiQwZ2xNkZgoofLzLnSjyAwu8Gd3D8L49UyzFeBaiQdNQteE",
  "key27": "3i8Atf7YHRoUYY8aj8kpJVAac9c5W6SrsKRtBWQdujDz11m5PhAWqRsDQQArXCpCPAARHFgT3tGXuWBLpwePtyeS",
  "key28": "voMSPoz47JZBSJDpzGZTNE5gCK3kevfLFwnZeqctQxwXXqZqSrcYVpREZgRkeSE2nL2mRRHTnFhneyCeonqJNEt",
  "key29": "4uy2pP3XgdcPjWSvQLNfVUJyqxjuB1jwJgdtFPnVePuS5sMUY9RonKEWGPkC4vfGwkGTDcH7oYo9akEyKAK9L29w",
  "key30": "5rFjVxVV6GB9LGNt6RNQB78Vxch2Z8GNrBtCq7yhDqGKTbYjvMdAaYJAH37mPxLipj8kyWgWFB5Jaq2qSVfzVpY5",
  "key31": "3nNBjserJvrLAeNy8wXBMCsTYsiJnqsJQVv48UJd3isMUiwGp2c3vTkpLUbwWtCHYM7mEXgRs7txjRwCD7WDCgn2",
  "key32": "24R1dUn5YE2UN8feSy9NVub6kRSScfFjHz7hrD3VCLdNovW1GKVHa2LN8sJMhrhrDwDVm1FJ7WPRhoWxrfH4oU7w",
  "key33": "hnRAd7To5JdhMSzaBeegxxzfKvhVjoqFR75CTnnhN6bfueQFF3SAYEyrZ1NztF8TThMkjNUP8hHUTiHk1F3QR4K",
  "key34": "5viYZNRboWwEqkoDQqTz3e6njpn1bfRMKCjDrELHZ8vYm22HZrJWSygL8eGtsnYQ6vzNxUnmQKvCKoBXavF6QjaB",
  "key35": "4ms6pNwT7dGWzxfZ54XopUXoxqyBzweC5jF4JZ8KBaeoxzGt1UpVXmo3fPfbKrZPSdsT1ZBdxKHD5bMTai3k4Yjc",
  "key36": "aKnpVYkeLL2qPA947upCEA4nMAizUStQNugVoesDDyHM2TMsy5ngvqTMBGC5izjM9dV6LR72Ex1tNU2QfkSp88K",
  "key37": "3KECNKc6p8sRaocKDTfcJ72UK2uAFjXDe3qKqNQiL5bqKNREEZ6VUMYo9WUcJ3qWAMXXhH9sCxdTPhxPxXzTBeQi",
  "key38": "VNJDgxVu4UkL1YyCmXt6HiTnLqFiyrRZ4jgF8D4QNTeipv1Qz7ENdwzHTzREo924pX2aWwoqwusyamkjzJGC4MT",
  "key39": "44C9Xg6zN32bVFGa4FnDEB8cQ5wamPGoHPpURdTUknjYypAGuH4LVQizTB81yCRL1vopej1MqtUtPUJHBdNbgpkD",
  "key40": "2psovwvFzZRymbwNHEYYVpbvkzu2vNzebQYrp46PJfCKrdNJyQWZpqgg49rC9dfxJ4A5TWfx6RYNi2Xek1kdcy3w",
  "key41": "5LVwqgnY4stpxSvcuCWcqmyfrYPbMg3mU5ERzKrd2gVYUXt8BpBWgq1QNxXToWwfomkDvzw6fTajg8bkGfY8JBvZ",
  "key42": "Jkq61JXtHaDVmGeukc88qqGcXXEuyu7XrBNhV3gFMG2r6sAPNjaREYSwoNJ2XMrnTDkUQujD3FgpseUKaJomTXF",
  "key43": "3QTb5m8hPvsziQ3SA85WoJcEvWqqnFeQnVHhrKwCMFFf2vdtE3qMGQkAnVBD2ZYsfemAuAg4HjVVGoJHTCBuHD3X",
  "key44": "2X4fJ7gc5puLH3YfSu61yazMRSnPjYmcNHom31bDNFTpD4dw8wbCEE5B7jYWwtgpkdTrCYJ1HMg1cEJQf6oiQJrP"
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
