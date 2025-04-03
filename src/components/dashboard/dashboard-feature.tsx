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
    "2ReEoNANGTqKuFQa8YsGzHGJhLgB2Tim4UML9v3TTuTDGvxzZTBpoFFRVVaDZUxUytBttNsFau6qKMo5o6CPsPo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "369DPGjwT4jPKEryvDgTWznMUZgV92dQn43VwpVSqZKw7MHKj3235Hv1knYzZxxoXoPssAefaTtDqMDZX6Ld61t5",
  "key1": "59VpHgPuFXutbZrAYx7byHPXoQEBkVGE2Zxynyec2YLNxrbVpzRYrBLaPJU9kNYNvnnJh4AdDVsnXa6eZ5HfAD2P",
  "key2": "jDHPxqFzig8d8n97FheR5W8UkMdphk9VFtmVxBpguieaKbxeYBaZqhC2pxWGRf5MdmDdXDGNrg1NiJ33crAJafx",
  "key3": "5Aamc2JSQapH9wVt69qtv5k9T5rX9g9SEHm1N1aiQBkgg7ZddifpMRWUFkqaEQQgH99qNZuJedcsqk6t4Y4GJLFS",
  "key4": "VcwV7UsJs45zEMvPENqX42oho7bucUhpjHEefYLxoVybVjm2wqniVhJtPfMKFMjLJDidUaXG8vkr7B9E22Tu5Pe",
  "key5": "3bphAYpjuFFnHDoBjRKwBdtE2YTCQoidTCjcSW4zQeL5c3KWaRdBodmWg9PupoKr6ooi59TPHXepDjSv6BsvHQqZ",
  "key6": "498crbAd7x6a4DRhQRDUoAHR7i3uFJbDwtUTBfRx8AZ1BakYNqK1BEHkYvgsnd6vv38H3sVmEfxPveZ93pW1zZBu",
  "key7": "2BwYGPvyLEih8wGKN58MLFq5g3gm2aEEz53QiEWiWgr7XJ6EJuSBH36P6rqVncz8faHrY8G6tgbPELbJwFwQrgMx",
  "key8": "46a76Q3ApcfmAL9m1hnbw7axjY2cAhDvBwCZkwTto81GbmcBzX5MHCahNRT98f31kLxGkYjQTx9oX3bxpaTdMEfF",
  "key9": "23yjuY6C7p65L98teVWzdjdSQLHriNic52p2cJGVGyx3KnDuEtDgyJXLNvSMkPFy3uwfCA3CmQUYmxnrKH6gHZvj",
  "key10": "oQSKNcahHebvPRHZJbGutjXsinnCTjkzuRNtT2qkWTXNzsccZNp6uujUpTDzXBAADRaoLGFKMzuEieKuszWLoAJ",
  "key11": "2fF2bxm322U62rKSkLYPtNyurDmf4uiV5ma8UWV3qnR1MmaNzmL3GePcQV2v1hDLwdqXNu7GozZ1rfDbeQBtZjVH",
  "key12": "4qRAv6hNYGDQSJhBJReebqRVjuFXTGnnjPBTnhC6oX7GXmqD4NWgAXKTwMjwV3S5HNa98TyAYpCPvEK8BhFMad3L",
  "key13": "5o3iqXwq64TxkKCGLXsdLzuEYXikH3yNuKVB61YqKJWUULyRgMAr4iJQYbucYCyNsfDWC1yDfanApCgKuQwaFFFC",
  "key14": "4eQRnovPDEvmESe3rYFVkb1ZE7S144qb62ntKcmNsQBTaz4QzRMxh6AU5f2qBktjBL6HXfaPRjSkweu5kN8o18DK",
  "key15": "4mqLmKH5T3mozag9Fswdhf5fPAmDx5t8oJMeYcbe8PhU25Zvn5ky8n4rTXFwCPQGMXgS7iHykCEFd9wftyYY1T8n",
  "key16": "5U27iLDBxA75AKZcwVbJQpHUHxvjakCwgHED9yQRkDx2gttfp3KfPpBYnwEyGam5oxS3JmbKQHSJxW2NuPTVEyVK",
  "key17": "mGarZjp7HADCEvarQAzFKwFEJPEXf2uL9VFMRJe4F3vZCpWFCYCthAuAW4xqdpad4GZ6oyG4gHGAHGD7egphRu5",
  "key18": "4tL3jnQuLtYMQRh6YN6cSVr8ByFrr8X5Z7qKVZLMarvnHvxEcVdWZV12J51jMJ1NATevvquWEayKZnFQbFpkpgLp",
  "key19": "4SfXRZ9momrC82ysEHKU7UtgAp5HjPhfwpoXCudToHeByzUZAGuKDZe9QnVpDHH66etevcJgWTEJt7wkUuBvbDiv",
  "key20": "2sY2ivQFn8aQ6cdjFnzUAiK3Rq9qj2wfZ6sGwQSVdnuCnY6fUFigHGY5fGkDcr6ZAgMjoKYBhDP8j2VgZEiqDZhS",
  "key21": "2pMM8So8Mo5SvNNjLy3RtAjxyhDQUxF7FEYqaqhzQUtGeVXnwhArfPGU1ReCA4F5x1ChLYYbXTwDQGL8ZjwvcmK3",
  "key22": "3E8s4bhzmzizMCHFXs9YdADHrLTU6XJyr3UCZ88DEAqoV54kbacLEHYtRU1zALaiLrKmT9GZyqzjzC7jG8pGfMg5",
  "key23": "4q9NV6Zatn64nDDif29biKrrEfozDGZWcVDL5e6NoZ1vEBjLJ8YRgB8p6pWkCcARSRV64KWDkC3uHe3n99SKwFhp",
  "key24": "5BFoivVEZzhAztL9EhsXMb4DQMpsgJhTxuFQP3newRS6sjwYwee5LiqYWtgGXw3G1339kFkKH9bPfNDrbthT8VTt",
  "key25": "2nD9tuzw6Kcf5nsv7ZaKdtQxCqs9R31MigVeYo4fyTahZoJv3p8gycZEz1o1awaNQ6Kpm3azt59bYZLbCUDzVQkQ",
  "key26": "4FAQ3v2DWtusSwtG4KTFzHruv1kruvKoX2KK6NTCJnMADW47K3ZxCwovUavmUzRnNsD3Q9wpMVe4juh4nw3zUBMZ",
  "key27": "3mPZK9hZpxTjxXRPgJ7hSmvNQuYpupSM6KKTZFSxzADViGps3zFFcpDBzZ5gU7ZEcmDw28b65GdjJYiE7BndUun5",
  "key28": "56rV5HvBipx2a29iQKfDvZ2tc1RpBZz3BvRRMLLsED7CueyY18QCJyRXDSktAtPPzRf4dTPyDp234eWPyc8wrrpQ",
  "key29": "3HSDFUt57A3DBzutHe8dBwjAAzRAF2a4v1SH277tVH3ChRyPxee6TkD82XwzdQUKYfAAxmp7onmGVkjjPPpeTeLQ",
  "key30": "WqEop1ffkmzirSJrQqjrAxUiTTqA8uz4u4k3xYHr7Dyr4Cb1LB7wcToW4eUajei75AJ6HU5z4GXnidH7R9NyqM7",
  "key31": "5Qr21W95PAuUj32AnZMrvg1YJVk285LsHKTKTgw7SftLdvhCKyprQUoQDk7LYSiNH5tW5Beh2ZbgitGykKNvtepu",
  "key32": "2LzM7tK9xaXBs9tBeKyQzeYDbDXWZpNKGa8phCnruziyaKw1w28kYkiMwL86X3vBZU3auuZiykiJ6C4uY2nCbn8c",
  "key33": "3hb7dB2pqXsR95Ck5ak9k2exAUz8Qiof6CGNXfY2pPczFEVxzxummfMxTfMH4G8fk2546wf2ACTjiqU3XgZmbW83",
  "key34": "4g1rxyygCX7moZNaReoS7jkkQ5Jpk3R15g4HJnz9YQRcbbVy9jRgDAXWpu9VUyaanhVFun6xipm6sxHr1FKmAuE4",
  "key35": "Vu6eFZXxm9p8h4CZgdNrZDc4qFZUMEHVFB8GkQ614KG9kMN25L6vthcgKJdyh5EKAbbXxBP3diLhqU1v62Pt2zD",
  "key36": "5Uht2CRwXP4HUnGNXf7hCW85Pqhu3ic1ySRBrxnenTUqa8Q256WMt1FQvTPb5MiuASPg8skD41wkqRuZJ9j76HB5",
  "key37": "4o6DxqMPXRdhBqPoyWzycmwixZknk7HS97FEnviS4qxsTxsta8aWoV9kBSEocfrmoeTfbooqt2MxiyhS9Wx69V6c",
  "key38": "3hckz1EAg4K7WyW9YtakiGExxSVL2WzS9w7b2Xg2ahJMhkW7tvQGBipDoHCz8kFa9EhaQHVvZpciYBm6o9xcdQxb",
  "key39": "22YMaxFdg8cuxMGD5JnEdFSfcKqrAmp3DGQjsr7S8hLftwHaHrHDXeemdB6GpkYx2Sz3u57tsgRVqbUMXEvPDCHW",
  "key40": "3FdaDVmv7QMUTj7dctVmzthENu3YzNf8DXUFHD351RLwu7qbAFkUz8L9FNothAMX7LNUP2uLrn7FqAb2PUenD5Kx",
  "key41": "4bBfPEZgW8Rrd1hKXScmPBbtVcFSmkrd6YH895G6PTNoQETKo9NUbcALsVfSJ8dhzwHpNMsTAUJ4CGWfEp1inW3z"
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
