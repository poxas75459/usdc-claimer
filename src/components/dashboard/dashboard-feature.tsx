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
    "3vJDqk19w3jRGLivJEySUFc9ZYv6SxRpaxkboCDTQVnf28Gqo1YSEYacic8EScQPq8qd5EWLJCQVZ81LDoiF28ca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tk1dETMVtXqEHuA4MfXxnbkofDm9ALTtPb1geNRk7mMZfdXoUZoT6GbjeSUy5MbotLa5JApr1aJ4bqYrprXE6dh",
  "key1": "3xrAc8B2GtnNXAzK21oZzBU4yrSTmrx4h2thikA1T8mpLxJiRyYMtjQpiWtVeFaSWLFMhWGbnuMpAZtoVbnTnVud",
  "key2": "4Qi8faUsTGsvNNgJovdsotfKgN9JMvENH4TwiN4mhKhTAsbTdTYKfb36F1ZywLDajf7AxewSW6v4ZMxFjTjWiYGm",
  "key3": "5dZNbnnSkpfX9yiK2fA1Q3ANizYL9va3WhH1e7zfMEHAV69oxiErRhfwzd6tFdpb48Ruoz8KgkAiEEyz9yEvX4X",
  "key4": "5c4aPZKSo2LpXmGSNsuruzQA9Vy88NuTnpm27b5w2bSVjGTHAuR1DzYkEYmNSedyU6WHgm2vtdeBNRWpbqEz1mJG",
  "key5": "2SShuobG4aoAwyJ1k2HwJ1RCwFqY81n5Y4epCi9pTMDXa32YJrkPygCCQCVnQNHJLeYBgVS5SdE8JGfs1uYctLoW",
  "key6": "4APNmR6pXAYTC8t66VD5MyfhNSFcVfxjuNF2apN6u8eFR8p9a6bvqWecw61dQ451cNadFLNGtmZGV4TcuGgrPi6E",
  "key7": "4RVYXz5PQoBHWBy1JbGXvFLtdYNK236yRayfauGBahYFBwpcw17ufWcGMABZiaaFKQQPYx4qvNC8SDLz3Nk5DvPv",
  "key8": "4BoXtRtU3Sm3JKUSy2n1utpiBsZE6PFPRkx6fxfJmUCvP9vZpvBSumLcDnxN55teZhtvuZxP2zXvsE1pfwgQ18dW",
  "key9": "3mL7ZkSz3vByvHjykVEMADvsvRuwUHeivU25ewSwE95YsrgN8heSK8is4LGz4GiYmmMFKMxzvBnNJBXZFdqKgiZP",
  "key10": "5KDj1RgCQpx81J2evX1GvPy2ATKSrpdZRXAcZ5nejjN4BoccqUKkh23ZST1kwqbfcpSNX36bbx5cEK1dqX4Z59GJ",
  "key11": "2mmW5NjVhkv8uLNho4hxDVxDcxNwYoyHx4SVJYTnYCjnHSBE3rtSe1L4Na8BEMWEh11vb8o4ikFQXz1CtCY11wgP",
  "key12": "ZGVnKMxdmjajPFiN6o79xJVuUfnyWM32aSw77KiANpMEBo4t6V2dRBiHi7urjZwiem97RmgHDBma6nJ8auuRn9f",
  "key13": "2bHj9pi42LSpT6L7ZrnYb7sHYvRZznXDBd81wFrLigJvutv3DUeuWPsg5uXcKgunMp6MrTEnR8Uyp19sdo2GQSEH",
  "key14": "54VpVedSRWfrx5kNi5V2KDHWJdbTS5CM5ZB38FCnn9hx9Cnu78cpC5Gwhw3a7N4rYa9HV33cWzCedSeLCHkuagow",
  "key15": "FTBKqMp93UfGzqg2oQrhgS6qK127t5cHubRAuWoZojjev2wN85KxMEi42GoxScjEAoJyuQFsgX5f331PSzwwjbc",
  "key16": "Az1USZ8KhJGhWnc48AXyDUU5wisxcLUDf1u16aiZZ8gFB9yuUYRPmrscM7dAYRANQuhhYrCFnRaKedoVtYHUoQK",
  "key17": "3eXY7CGDJyXLhSS4a8nYdjfE5muXKi12QksKqrc49ASbQ5uVnqgAqaugLGTMLD9xBav4o6ekKZHKvM7x6j2saiK3",
  "key18": "51cexbraGxnP2CKGHx9L53dSp4hCnUJ8bCQc9W1Gfv94fJ9Xuimuscy2tTXzNt1WoruyKjE2G6k8cCFQFsDXNygj",
  "key19": "5hGx128cYjWndrtbw77a8qdXPwXX1G38thQVJSqCdBvs97wbN4ubmqS2LDs7ey5x3JNAE4MXaCn3XXRCLJosLXdo",
  "key20": "2FzPZP3q1ocdf7NRsqp5u5Vd1Q1ipoR2PqUwCStuuhuAjSvf7gMaRYA5KwzZbqTi9z8xzs71afxTA3xo8kpL4ZG6",
  "key21": "8FYsGHs7wgoAdNtyzV3jd4rugWBu9jgRmdK2H5KFMejwcBMMfDMEMgnNd4tYoR4Rft3MM9XDhAtNWJ1ibn5FQR4",
  "key22": "3cqrbZjw9po9qPyqvVG3dbWz4QmVysHQWa3LBdAMDcyYKGtjaRxvQVbXSQwh9TuT1ZgKKfgSD7YBCsnQfdnDp2fq",
  "key23": "4MWnC9vD1L6H2daQU3TXToANxkwQJrxHk9HwJ5kNPTXWZAsMaUJ4ZtxP5KYtg5ysdmicPKHQAvZBi8gTi1V2yZmh",
  "key24": "2dgG1zmNYv1HoMMpCUWWjd7rhd6Uh7DhRKoU8xifR2TAYdKkgGb8pfXMfDumhM27RScpLFVXpLcwEgyHZjsXXydu",
  "key25": "SnjE8UdiRB2Q69CgPeNwhguAVWrHoKH2oEHzSiVfYvXt1DkFrm1Nkd3n4YM72H21aeuztUjaizeo33Ru9Tpp3Fj",
  "key26": "4ebaXzDz3XANqkSdyg16DK7yY7ZhKRjf95WurVzoKgVpa7wDSTDx1hNTjQmpHyF2uXBDQvxMUj4YWeP8ie4MsLSF",
  "key27": "2PXz6a3kMzp9t54T4ir44EaxAhdk8CkmvmTMTm7Q3VNGDhsDzovFS8qgZbfJT7Lq942Qe62CCvH8wvptwnzsdURv",
  "key28": "248E6AowqJkHkD2LV9ubASJprv7iB92Ra1AxaAtUMiJAFHEfP6ja66uTacArTW91fEgcWuKSKjNNhFvrZ5tYFsL5",
  "key29": "3cU5nVVPZG8xvUvtwZN7NAy99RVJ9jovBMEMTaWWzn3NtjV9FFPjNJtSYf6ZS5S585qcDLm4VHceAq1V1sd1NdnC",
  "key30": "5MzeA31KGZsTzhJCnhyGayxLBUDkFALnzF1gJ5Lnpc7zVtc6ppmrYB76sQkYwLzooUz8eD2E4xKbidCXVPQX91cp",
  "key31": "nYh2qi6ygShfqrEXc7CRwemXt734o4iJyLE4UNggtJrpRZQRFxHkeUC4dQwJqQA3tfC2yVhJxs5PvjazmmkAqqX",
  "key32": "RGmcA9LXj8Exo2bDSe6B23XL3eDHwzxC3XHXH3kwdHyrDXnco5qdvCN4qBYsEXvNmdgJ56KM41AjvgABDg9Pron",
  "key33": "49Bxde52Dv333ek2XAfgBrCXukYnbsgLARj7pVM833pEv2UtH3wE3bPZT8GuZbbbu7u21G2zUZuN4rhCgYuGm651",
  "key34": "2vHBr8yjyv5yvrcvCykjTZkpR2jVFDXBM399bTXE2tMjrdLYUjAAeWYshLGjcLQy5YgUVusBWRukGepcfRezpwT9",
  "key35": "63yHbfctpATJtkEiPWYySvTcbF64hP7mtPfMzsG9R53M8e9W5sq6gbUoWKFP74g5rGo7QxAtQCZJktsacgs2BFz2",
  "key36": "32PC52Bb9VNWbjgjjrh7CWBxha8AavoM7EuSdQPD8C9K7ewESJeat91X7H2gbsQLrdEzdXMPxo8MweKQ1d2AfMSa",
  "key37": "3sCwB2RidGn2R1fVotyMLM8tdnqnNGvDx4dXop5H7P8sFe6CuFPdpEwS1f6gADBfoSJjE8Cv4nDtKWSonyJNvXbh",
  "key38": "3tWLsXQXbKW43kykrSzK6hYkAA326SDx7mh3zbAVkibEFNQqx8jAqy9irPti2bR1f4AfWsYzoimqHjNSsoUnwJ3n",
  "key39": "5QzmnkVzxsfEfsJz66NNoKxhgcxKXW9oJWnRe31AB7kStoxanwsZAbHvexxxkd1zmB6Kv1rNTqVqbys4rymgsDMV",
  "key40": "5GEkeqZJqYgHVxiipGov77oS7iDBDs8Ebieh6hPnjFuhTKC4sBvj4Zuc4DMibjkuSbwo8ewTZKtCcnrvGpRHADjo",
  "key41": "5y63PYFVkGc3eVovV4H6V9GguJ2S9ZWnMTvHcnJEDBtX7ifVQdtL6eVqgD4aAe9LoyQLLpmYiy8zegVusBfMDwga",
  "key42": "5HpoJE4Mkh6eEGvLCLAAFzoNtuXiKyrSRziKVjXkAcVKveHdp99jYVqeU64xBjtvntDWiZjb14EEx9HEXaZ1ZmgB",
  "key43": "37gwLvZgydc2f866qgF3ZSWMt4D7PjjGKiq4Akpy7ocvokuC81Ti6d5oDXLjshd8opvhdwdfGocKRrEHyCBW5yGL",
  "key44": "rT2EM29odGsKozYPXs8itFaeo3KLA4AmVRSZS8bkfyHDgcBJ6KDAxz2cEy8z2RWn2iLxiRyTwtYCD3886XsVaoV",
  "key45": "2pGDBtPUNetZiiFJGWhWqrBTKLRdLuP5qFErwG2ciaAWZponKB9viyMtsz233WmbsUjDa6UDjt9B8y8YaFT6ZReC"
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
