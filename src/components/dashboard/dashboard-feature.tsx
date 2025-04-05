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
    "2AoU42g7ue4xNiejqKBqHvkG3vrtyhBQ19aQ1yfFC5PUEqKbVhoBCBn7f6wiQ9sa2qHr5yAPBjLmdckeomTknsTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YRbfiU8LZEEkAqKPDmHQnCin3bK2eN6V4V938kK1Uw9QuHKGDm5y4j9psJk3KbT6QRHX9vvN9iZcAuT8tR987r7",
  "key1": "YnF9PKBJZ3REBCJoWvzdc5ku7vFAVuQd21nioXXTS3Ru6T6Wi4s2JsjLLYKPw5Ej1c3DTwzLUougSMvqeJuMx8e",
  "key2": "4diqs7V64zHvyC55XLqLDtPxVqusnjv1XjXRhYM5AMadizLYvUXgAJ34uibmSMA6RDYLv9tA841kkMroVkaYiYow",
  "key3": "62ixcZuQdmVJT6GWrVKJWN7E3Z7G9rFzMxDX3oLn8mos4eXxmKTJqxBJFsWPMv13ZMxEq6H7qUCd8JQduR7uXjZt",
  "key4": "5qt3jWo6AVumNnaFS93mCZY5bJA2wB5Kz8YtNc27aLcqLm7yWkxATFM2iipaJHnUy4nGcwpTYx3TukDHKMNuPfDz",
  "key5": "4f3bESASjmaN6iC3AZKdBWgcettuVgoNWqNDvXExh2dherZ9xUPyp2hVYSEWvfkEhJU2GSfroH6JgLEiwnzuoiiM",
  "key6": "3GCUWn5RS423Lm5p4NUSSY5pJn8KDrk2SPDQpdqeyAJvnv4WPzU3xoCA3nGBmBmDm33KqcdmFWr9znPz7LGBo4WP",
  "key7": "3hNfBjkcqgARrYTQ1D3rLNYbZMoBG8v1EAGXVZu5v27E5NDgMjnCckXXhFj2VAYXc2NM6WociP13uZNuLEBfH8HM",
  "key8": "3hMPmnF7fyPpuDFDUraNkMYNaHL5pkxJEoK3Mnm4viqyjqSJ1JYRRrg8vBZBFLP853Dq6KaA2Wpq6h11LcHxxp5s",
  "key9": "5c4jQzv6KnTEqrtZwtRaAurdtAGBKnHXPgNfN7VdqArFbiAFRHs6pBh7oY9sCB6bmJaeJjg4JmnJJ5DybGE3mWT4",
  "key10": "4RVPVSt1Hd1FBaVUWNsUVVxcnSwgnZCRbcVH5oFXafvfpLF2EjKhSC8CwTMcMtyzyQMYQfMvfP4hoEGaCoQPcte6",
  "key11": "46ZMpmotdACq7qZE8E158HMRYL1orboWQptYegdTSV3h2ambKHC3p2K5ViqqEJYe4EvXxmcG9CzB3MGBAZMh8444",
  "key12": "4C66zdBTtPR3KtCBv3jMdYq5735p1FrhHth1yn1HW63d4MatTDSKaBViPfDtCDc7geum5vXTWW8LUFAen44cybv7",
  "key13": "51hdzHHBFSMBH6D1jz4WJXaeUtZv2RAadv9wVjsZCsmHutxHjiCe9KniFiNmsR6iADzZfWkEEP9g1ATrQQvGncxT",
  "key14": "8qVpidBXHFjpSgdHyuVMJm79Ded5B4JsFvQqxp8RbEYqvhW4smNQcKvpqLXuZnVcCmBwVtqyKzvihd8YuVMzp6y",
  "key15": "yi4bptX9CFomacpp111X2HWzyJPd6A9AzxZGrT4d1Woqm3ZYR7xkkiT7uLJv9GhUw45sqYqLAMxBZAepY6aqVmZ",
  "key16": "37KmVuLcUYLEw1moZp34qssaVzx37tpAvUSdNnLWdPDvydKrKeP2hVyCwMzXC9q26LHcVQuNWirMDZ91mvb6M8wH",
  "key17": "3LebA6sAF5v6mwgcKbVMH1yidYFJKuLXodF54VZN7MKKBUFyV8mLqa3oBGHzzuESJwD6D81xNEAPZscozh1voHDu",
  "key18": "5Bo1rVmueSbPQBkJUP7ZgTEB33mwzHrq4d8ext2pxmcUJ1U8wBizj9HLcgMPKoa3A7wt8ovfKJBLyd5UyfQfbUSW",
  "key19": "3n3Wqu1T5xjXJVtxXmk3UtwpXmSs1sFV3xR8Hj53dMmKbFPp9fTUsGqpGvunGd5Se4g9qkxREJyQ8moP7zkCy242",
  "key20": "63yTiK6jwbbTzncESiZeisMgFyj2UobtV2aATkU8t71FUJzRqZEUPsuVmN13YqNMGvS3b2Etzcriz7HBrL9P41Ro",
  "key21": "59UgoLpRomW3vP8PeX3LeJEKhH1FX3AyRQCsAv74xYvd4AXgVDb12wF9E9HMwucm8ygmg9KxYvLnMgqyKmUZ9wDW",
  "key22": "4WUPtDV4Xn9ifibnMDXzwFa7ncLrALvVnqWaHSZXkXT7W9ShtZYL9Mz4xK3G48AaekfQ9J4S7Cys1kkwYq6XRb13",
  "key23": "4NypPT6QenkJzmcxyNqoxjo55g6vXB9UfBk4rnayA8HLbfMN2f6xvFnTN8BC4s546PqCHYeokHgorTHHXMeSgytX",
  "key24": "4TRbLHyo6uPjKqDvk32QynTaWREXMrT68D9pNqmFLqTouihua7S8vYgkAXvEKYdgBkz3G72sxpzGXgxSXVnrAKse",
  "key25": "3B8G48qgaQRmcT4ahR8Yq7B26PcRpzKQ6tivBisFeVatSbBEkT9V1Dj2mDRkJgzNFpU9tyKTiv1qC1MQcSWkYtdn",
  "key26": "yp16M9pzomu2yUsq1J1Be914fW2iM4h58EAXRoixUkMqbZaFhqoJCo6d1WedmM6tuHLJnuYc6njV7RE1ncpuvuz"
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
