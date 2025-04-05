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
    "28PhrgjmmjhUsbN9xUD1c8iLTnW4MJMrDrCf5vhsjKvnRKniAgmqBeff8U9FP3xXve7UkQnAiq5gY8fY5gQbMpnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NDvpbg3c2Rgts4S5RrLAYChwwZ92KqFrkb1zLUp8ob1rEDsTH2G1LuymzeqFy8UJhLhCnptEv1fsw7NnwCHp3cn",
  "key1": "pdPUAPYmn4BhUCSdaWqMBbwX9JwMSKoHgAGepMcmWx2biGYYbHKiYCcJU72vB2QPfWQH9qUktgVy5pGjyJfyr9c",
  "key2": "4VJ3TBwM4m3VueJfYzHNoLXgS9V7afVQ26DioaJyrV8HXRTjbJy4FBUKLesu2WWygA8isitsEMgcHiY25UBT1WWi",
  "key3": "46UnBgPPgVHNsYVWzxAcndKfQJqn2RbNBcaxbdAbGgta5nErbhYMXnQVWqg4CY1uexnAUEz7NYbwZXKE3s3FJQbj",
  "key4": "3GgZfn45Kikmf7GuLKYdf8woAsHoaAszyFR8sW8Jf8rA49vohUBrxy118R9HeEzNdtD1HXgn3rEGCbNE4iZm3pFG",
  "key5": "2gxxkWxjaWH1SnsucV4nWWmut6LxeQwWLAB8TaLPU6fbRb5cDNZ5HkVGZTc1XDwzjadbV68mJyYVZ1zkAe82uNJ1",
  "key6": "mP3MqNzjWzrTajkGWhBwKtTWZbWWSbJCSP2pMDpXDCfFDSvgpxxh93mgkTDc75WdR4ibXx9MeJLTXMFxPpwH472",
  "key7": "3xfFgHHaTJU4wHcT7rhv98sEAB49cSKqJyGxhDDMccyWJBaYrJHNoSov2yv5DbgWW2BZkaUe1eAgdEdnXpW9Xkji",
  "key8": "MfQxHSBa58vM2i3Z9j9zFmUA2ji6V16jSSRXC3gojfFFEdcDn6u2f7dfft1TvMCkMEa2WmL2N4honSYMgzqfSMP",
  "key9": "4ohnbZsN5zLvPScg2JRc1HsT5sNFuKGrLVHrUDfqzzN4XdJpVcw87t5dPLxdyD3dPmhauLGbVYAyFNYn6wN55g5s",
  "key10": "2cjkeqDHBtVtVsJXRAzHHGHuWtRwu1m5AQQFN154oF4MiwQAFEtdhN6aDhmtqMt2gNeR545NpJfsdw6LR62Xc7xr",
  "key11": "VjToXV9A9h5mMhYpwkMJrBEbSf1znF33gCbL3YFXaKbY43miEA7buDTnpTbkrQsstjWGPy8V3FzaMxKDWAEQgkH",
  "key12": "nByP8cG4mcpzZbJMd1gnw9VDaAjMh3LiDqDr7i2YQqkhg9ozidTeyrki3aHocdro1qkBqL2LCWgZXpQg7PHz24G",
  "key13": "56m8mp3HcBYGGCRXUj4r8uKpHa94F6JBijqie8cMLufAky2NKKXEWck56wbKA7VCT7ggEisr2jF4dKQr8cVGNDM1",
  "key14": "3hZvgmFwwdnzy4xbbzXEwpMJUHu1j3AqHPJg3j92GR1L5eVorfYgySCCx3Ut282MXHPDrGuBiAo45auGV1payHNz",
  "key15": "3aZwXp1NVHQzyoM6rmW3yvhSnPksE5vchpZwViQDSyCe3KocrSaxUPBW8ynMXEL5NZXZNCrUVNQeaEr6pBx3V1ga",
  "key16": "38vjLer4rR5ApR3646Fgb9ptCyjxbtnuZ7poYVoZga4H885LFvhBsnWJiGYH5i7KF19J4fkf7dTiiydMw64ZaT8s",
  "key17": "2e2zXDr2ubr6D2X96fryjsm7HbytsHgzh8JVtXLRgJ3dEWDqTCZSTDpcZYTpYweLwLEicYwRYSy42kEYkAeCNjR9",
  "key18": "2dqxzYwnjWNCVNHnGsuCWkbu2L3rXntJtjCz3nM8DH8FNZxccSjJ68oR5VyRQQLeexzfVvfzLptJXLnqbuDjoodn",
  "key19": "5KLGGpWprQLsNZCbdjtp1PmZKVGDRjjQmnJzNX4hyPgixZUJKvtrxTF45TPVM9Mmx61jkn9rzBSnqY7VWhM4BP2R",
  "key20": "5cc1ZTCAxCzdopUovpjmyJvU1GWTi8ezsRA3AqoncLP3AXyNBH1LJDK6bExQ8kqfEHUrYhPgTZKvuu1u7Rr39QYY",
  "key21": "22gJ9CD9a5foUSBLiEsAedAs8tzYhHEhjFvp74gdHKFJar6VsHx1bKxjrzY3t4SzPLMt98vqabR6syeoixodDEAY",
  "key22": "5HEoAe7vGkDoNXjcgdmNty93Gf2KAiXChKYFqh5PBcUGnqzXUSErN9tAbxkF9LvjF9qN8GMkg42ZeRzYBiNmrPxM",
  "key23": "weXw5UM52WMpMVyDyonvQYeProHpoFAy2SdNaiSMtpaPc7ZNs1S7vFTtCSWACg13rgVTAyagmUBLtXPRRyEF6CL",
  "key24": "5CQn9niA2J5VDbZDBy8zjw5MJ18rWPXLgLoTxEZr3K1SJ1R9S8bduGtVRgGNzNkxkQ72ZyTd6TiD47t7Ek3awVRo",
  "key25": "nfiatPopVqDXQGgBAuDCTg9uXb1uDPx7qBRMgU7R8xjz8R3t5ahk3FA6TV8L1wc2U1Kap7Zf8cd6MsLFBxY7F3g",
  "key26": "2qCmtJCMSGqCYpq1VxvHGATDn6NHseLMpVkiFZLLWtCFF2s8F1UbEczkZSraAZ2FVf96PvyqHTbjwytcEEkw6oGH",
  "key27": "57PPh4YvhbJKgHT4GKYM5j6M34XgbS8fJwFwTzFEqw1YSdzdEWHt5Jud2xiE6ZgfSQxBG7ga5CbwsPvMy8MC9N5A",
  "key28": "619nat8A4dpQSihVzscwNUNVjh2oDsJzhLVrZEgaJZNzphFMML2bKSeoJAhQFdbtuKboAWdzuWsmktda5ttViqCp",
  "key29": "3mYtYisxP772gyF9wr8wx1Sy6MnozyPqrRZw5AK1JVPsVfH6DM7GyRerHZMeSPH6ai2RCWSA2puoagJrKTv5RxRx",
  "key30": "4Qf4AHfnmAtiV5zc16xQQjMKWZMKi8gryoid8ujqJ81pYBKE6bjLb4dVVwM741vd7fshLDYtGtTA36uJKLNAQa4T",
  "key31": "5hM5DwCnkGoTMaGeWBBun1JbuEC46HbkXdRvKLc112XY73hgU4tSPZ5WQ7C5xk6fZcdFEpJzBEkHe4ZAQMt7jy3M",
  "key32": "4X9QrAQsA9dmEyTxhurbPBmSR5N9M6dviM68nXPCUB4dCMXT2wZwmSGsyQmtDjnKr9fSku9YeFCNdg13xc1b8p3G",
  "key33": "bX1FjV5b3z3Sohknc7NYCXrzjQTFzrp9GBxibaf3XrPJnZcwxAMXjEqDo9SYGJSkdxJv7i8haUegfnjQUtHfaZU",
  "key34": "5myacXeCW9zwJJnyHRY9CA5ZyJ8mnJ3pfRYc5Wa7QA2SCDhMou7rtvNaFffCEmrGMSrMdDriMPekakUV6R4HuMUx",
  "key35": "ThQpadjsNQYFnf3GAQhjCiFtBvRZQcdT3KS7zDiiQdccSsa2NHHbb7Cbm5gsHYseawxQuTKh8fFQHyrW3HCE5XK",
  "key36": "Hn2oChdvnpaZXCuiEqMfgkm4quhfUQHBHYm6rS5YrMdFVXB5cUYY6RmQwFDsWAJgGXrjuYzR5z3XVsryTb6rJdm",
  "key37": "5o91KRPFSuv5rxzPAkzpFpUtrAMQSSwDM16yzqknXn2TfVwYUjxDLrQjfkjizqhzSoTDUPZzhiiHJqtxYLxZJKFu",
  "key38": "FEbd3KpGcjcS6GTNa2h3mDg2JtcrsYBLD6okwBz5iSKh7ejLe9S8u745P3zjNCCaH5agL6yupMKaKsCYukaBZkV"
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
