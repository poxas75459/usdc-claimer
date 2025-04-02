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
    "384LuWyqf4Vh6q5km2Bbddcxa1eLqTEuQUovbVj4QsgYKAcH2uyz68ZV2QUNZEF1tD52hr7AHKpCQBao7HmTSykA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SyRsN1k7E3oy5GR6iyra9HxDZb9bPgpF9KZzsLSXfjoB1bij8VwXZCsDEEb1thjwZo5QzJPrCABLbDnuL15Pr3f",
  "key1": "5e6qZv3CKzek4dRzhfkJnPBpG3hHsVDsuEbNN7GbQmdvFLHAcGcmERej9wBGZgaMYuDXLwY74nbhRqeAANt3R5fF",
  "key2": "4S4knb71mubYoxpivzpqBhy2FzEeb7RHWk5erA1D3KhNT7kSefu8Ek5YqB67iKQFMckwMFq3SP7cdQXMZ186X5T3",
  "key3": "55rY4SKetaBPEVc9QpWEHafyy3bbr6aXWgw6uNNaB25VQNoWGRqCzZSnRpMkBhdN5VY11YLZYNidyLuGcW4hto2D",
  "key4": "67PtCjQp4sZrVwhuieT1tmmGokzMpTuUxRUxn5vP481F3T73YBAgfoVGxX7ajbmUS8Mq3zm9k9X5Vg6d22KhKDQe",
  "key5": "3XRa8Gfs3W7xtoCKAEhdUmdftosRusCdPCXquJiDyyTy6cRhtChJB8X4rmKaAjZXG3FPcU34PTVtSEMGqjhkf9SE",
  "key6": "SFUQ9y7yDhggHU4WSpyJ8JrC1eb71nCvu4dJjJDoaeSPie7vx4AdfpastV9F3DDAwZjg9pWLeZmzHA7iJXzf9Ke",
  "key7": "5GPtyK3hkv9FXwJnGejRwiqLn5XCTcUQgLUPS5phLMyyeyojwXynpJYqDGaXHqWACd9qbLaSnGqQf7rKMgp8ywEX",
  "key8": "5opN4DvKYYmwx3VSXgURvpuGZHbRUxJ38hXoJVHNbdREinAoG3iVfzuU31qG2oDg4WscLbUuNF8qXai1v7jAxLHc",
  "key9": "3wUPycPhosqgYuSKjKGicyCoLTFNaPKeiKNWHrMMefmz5bdjoXmBunXJyjTQaTceJhQqbmq9e5wrca3aN5qKLGjy",
  "key10": "473RiUv6osekYDW5qZAtWWqd7jvNE5ZtG4K5ugkssMg5QT92NmXfxMuUeUL3jvbeYP7JBi6DysEpVtZW2t3JdsXn",
  "key11": "3kwZCHP1mSxNFEE32k3gijKZpQXk9FpaeWzJKzAxDuLEX4bfzcTMkfzAqaj6vTf3NYagwumx7tyZ7xHduW27saba",
  "key12": "42uF72KexzDKT75MWDWWEJr8mFEcFyUm3hPVTjaAHSQq1iSqyKh1ZqVMAJjicG3XABdVRH8sksy89UMoYTrKrJiS",
  "key13": "2UrnoLw3vx4nzN3Xms2HKA9mCauf59grDTDtkn6rDeAtxx4DFkqfKGwB3H8jfnk9s2MPonFx4VaAdikfyCmfB2Ws",
  "key14": "3p7eHWgiQ1XLqj4cDGCXy3Ujd7Ay4uQqa6VXshvBdphXcdnxT7syZbQ2SdRfX1oPfv63aLwzL4wm8PqbwT2ot8uE",
  "key15": "5k7KkSzdBjqAjrgErw5gkf3LRNTEMDuHwNGFKsKtHCBDiucT8hRYS2u5BfmSgVa9LMXuaLU72QYkSy9zQWeZYEb1",
  "key16": "2KcGYYnC5Qpi5kgizT8dTB9ZeUT8NfKDCX64h17hDnGEYpfLWwyom3hfLR2U2nt68JsipXAfJqEuAL9d27XuHoFF",
  "key17": "NzywQSwQH6QDBb8BXRSwW4EmjaLjGn6UfiTeznXeuhiC5WgqCoB6zCtU25xKcgfWGjqcT3oKSSGUkF3D4BZuUT2",
  "key18": "4g2aBvkUoob5rdpryECeuMBxBNRH5ejeHJB4EiNH7WJkG7DhSpV662oM4bH3PcJCsG3L1FXftADKFExUQzRbjpxS",
  "key19": "635vLKuQGLHcFddbX4FVWK4cCz9rJj9Sns4fXr3y4khZoUnb8mSWuc7dtRyG6D5bdFU3XqV7tFj89FoB1eVTX94K",
  "key20": "jDxvDtpEGhQsEa5rmrx71rtYMWc7Su83TFY9JLS7r4a4eT7PwmSYBCHpkhbRSAScCZfx9Y47cs9SWTcQNbDKAwY",
  "key21": "jpKMFivirnDHWiBMpwpYRDpPnjpeZ6mTxVDsiTj55K1bA49uKj3ktgivQXVzEdfgY11UNPZ9tTZEDRkksQyGQ7C",
  "key22": "fjs3K9aMjRsGwGxSmZHuxfUmuVpsStEyAsxUdaN6oeehTm6qVdHMLt1rBv9eBLSo5BfPeAuCGY5MPaBoE5k7PBq",
  "key23": "6RmFb4AK2C3o1eKmqzPyn7RRor4cTSq1oATEtVdBth7xWkCXqDXnvKiNmknBiJ1sbfqQiZntA6waByYLZP8m3Lz",
  "key24": "4FD8Ag9neVJgozkyewzrdrznkVGBCNseUcjcrRQpDRXNqMTyhyEPv9aqBtKSq3zpMdTabW8nVivJm4qTgCTatRNU",
  "key25": "5YV8SGjrEq93jkR6c5SHW6mtW716apx2ru3ZAhRcYwYHyk8T4eo4yvgZkoAXeHPWtbvdLo8YpZYERJReFmcyU3fp",
  "key26": "3cTmxdV64Luq38XxDVBNrNCF4Y9UFjC9oWNZJBrHBmcapjJh7F7Dohh283DQt9Tj6VE53dWH7xLmBBBVWfUTgvwu",
  "key27": "3qyg1Jc1tqL3jnFm2UfNVViXquTs44HdDHKtSQEsN7HHwyGHYJj8gzCjBCcWSb2gyUN1KVeryJ4aJB24FMtAcvuk",
  "key28": "Ect6E5PDgGZpnaRqKrgNB6pb3oMtGupB6E6RHfZvWyVWM9jMebHnZxQxiKJ5J8D71TcGqANiV9GwtUyUshF5Cbh",
  "key29": "3VU9PAP8TeGPBXXzu4EwJ9fRQeTYmzvQgWNQonhYsNrgFtwygLriN3KmJwQQsfJuJusjQpTvZxGmoVpn8EWT6psc",
  "key30": "5hyMF6Knu2VfPUjwAZ32PxWPfCYhg8wXcri4Z6FFGRmaioBuKQQNBfkam6paw4334Rv7CqYxi8L3Sb4VcJnWiX96"
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
