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
    "4GASq2Y7tbq8i3bZzVwQB1DsxWpQMvHPagkUCFwgANgf3qZgCvZhrLqVp6PEve4PhowCPWPLi9kVSHuVjhvnkUor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xh8xUEpBmRdEfbSh5W7rTpXQAbU5AJNU9Evwjd39PNeifh2fbVfXPkbwF6LJWtqxwMdN93hqyZGV8KWwk2onvp4",
  "key1": "4HS6HvmCBrDPUUBKoSo2PnqXK8oXpDKLuKCjjL1CchrTEHRsiU8B8kB256ZyWQeq1KWgUjVMdCrhNMua6pSQFqwb",
  "key2": "5AeoXQyYFZP2zWJJkgk2CbZoeQs56mTDrPrb5hVuuQyEtDNR1pfM9JQxxj7gvRZ5Jinis7KswHGDXhB4QbDo7fNM",
  "key3": "2biGwUkAdRWsrecgBKZ1gB3kJfFZANepierxCe1fHJrLrv24MhDLa7571Ebqyd2wKgL1nvsxcLLSrAesKyhsmE7X",
  "key4": "fQuWEAvC3rwAzAHtZTYc7WFzLy6cTdSJJBgES3vnW2VmPHZHpKt6LxiR1EAeTesz3zW3AqyzdsX8Z69zN2DPPkh",
  "key5": "5FfGVq36mfaRLPYfSzWBDYEbVewffZ27e3GnVC3Gx8MJ2g5AMCJsaCADHMJrrZPgg7XjjfJgfZrdfDCqojYt1CMp",
  "key6": "43QSZtapd73UpEGpWCA9e9VLbsw6TsTzvzGc81VKXvE7ZgP5omxYRBTZL7QaL2qMGUR2A96qr8iwsb5eYiBUknr8",
  "key7": "2pPZhLuYWPLZFgoVa96pjnkuV5N2KZoed1cGzHuMEiEar9YPT1udiDxcrfTKEEnSU1HhuebmXQTqFZS4maMkroUL",
  "key8": "4AEj44cVW4LCorZDwGGeQA8eo6FsPYYq54qHuVLCcRAEhfuYoJFDspwJgGfwCR4uKFaaci5QG7PG9G1BDNEeYbZa",
  "key9": "4cXbq4DXZnMU2sXg5eX9WfekiGFaEhhbksLC1N5Ew9itAh6xoWvnq9LY1Zzue2HzHxZrHU9o6heYhSyHdsUqqXvu",
  "key10": "3zTDsyNWz3X7cAduRpNU15ziVS9iSdELSCRpWyVoLWe4fGFcPqkDG8wQLcJ5WdSfjxbajiE8uU7B7YcNtAvmWxfA",
  "key11": "48MRh4juzktii9Bwar3Rqwh43b3edPB9AYwRz9GfxeodJigCimnkoeoxgDKYYeeGyMUt3v9BipujJ9fEyB4Je3Cp",
  "key12": "4Pm4tb1rLsNLAELF4jxjPQ4cEJdE31dKyY6k481RUhzemfEe9B5VZefqt6ywazMZ8Wm8gyVYHXNEPcFGReo2SHPe",
  "key13": "3td7qUU5rxtuHnpxP7EmRPGvcpNNe9BEcshyFtaVHvr7nkw8jgKF2ehyoAnyDyo2cqmRxyi5tg8tcpSrD5scUN8",
  "key14": "4YBvQ2N8X8TeYPbuFBJ2YCeMsGrGwasiRGtajZwi2GFrth84vgs98L6jH2ojahWiDWgzm2W7TxMjPy5CLNtQNVkh",
  "key15": "tbWFM2jaWSsD7VwriUjHrk9Pci5HDRuZQrFusjnYMvW4439HrsQay3MZQhJnGzPr7PYfsF53U3jt7ryQh8aycbw",
  "key16": "pNuuvFtFiBbebpKa3TMNTKfiw3tfokUzYjPaWDLcr59fPQADgZra6NfL1T1S6nUoPqcAaJMtgks6V287bL7wogw",
  "key17": "4aXccHAubRS4im9dPTEdaj7qWMdzHib91UcgfKteVf6bV3DA4jKJuGyuGVUTtxYqJe8iGJjVuhyhguYL1mxwPaT2",
  "key18": "JiHCiM3dkuJ9auZc7MGPJCU6kNWBYBXnY5k7JJNhL2CcSFYz6PNjvsjtdjuU2bdJKgyBkdbjK2rcCifTAB6KfKn",
  "key19": "5hXnDUZmUXHPgSTw1WoTNiUKnztuqhLkVC5XRAkDnBK3752CdZGSzs44fuoAqPP6e6HcX8TsGVk3P68Eo2CCGCaC",
  "key20": "VTzHKkdwuZeh3evqRWnd7kCiZfEdYTvwmJQA1gFMNfbaxApLUFM8RygMyd83j235fwBRKgyzuWK47eqrnSAtK6W",
  "key21": "5z6QqrYPQKzJYebCgKmSHSRhTHuv7445Xhz59PMPvkM6zrt6A1F7qpe4Z9TZbREJPd4Qz33DDmv5QFpxjrEhNU6p",
  "key22": "d6kSm989pdwuDLc1K3hx93Vw1CK6cy6YL3ZeyZGk7XK36dz8EWSn4GDgJAw4BMTi9GPQVfksb1ogj8Nrpx9QdZp",
  "key23": "51pKjXm3Ufp5qbE2uP7woxy7QefzRaeceps8FLbc9DwqtARaJBVy4dQ4N52zc9i4AzX3Xv3bmnCjrKHaBw76nFnt",
  "key24": "4dpjfFnwedk1g36szTN26dVdQNv3dqT4JQ5whhJVveag8sDexs2XiEsktQd7LVDJH5dBpE4YtRpqWj3TnYbwH2L5",
  "key25": "3JNWiZqzmvK5UcNXWBsDopyYYj83nvRy4MXGgN52Vtn9ieurw8JBMpwHxtwbjZtHPaxmRqKJzHp4TAVet1ERuaVr",
  "key26": "5Xr1dXw4YYVpAcDtpCdMU6URE8mNAJCvT2FKrTGXN3maXwovuvBK9U2ccYJ4NmcuDkPgK5g6281g21tnGFR5zNfQ",
  "key27": "27u5AqzEz8boEEXnymTftpFTFco7iikF1TXTkwFDnW5kbE9JoTAGHFn7WHKJdSnm43SxSxWb5jzZ55wDXdq5Z1XD",
  "key28": "2ricmw2kd1mYPi1aotxouQMcc3Px41mQQCCSniTpqqDvVpCFQxmobhTAkHgEnbyLJT9TdFhrLvAcqq8RDmYo7oGs",
  "key29": "41PXmczobNWWaBbvULFgSRtHZK6pGiRAVo6AayFrXSsuXe8VswZ7CTfLhswGRavHb54GiLpcBoWnc1hH4nNo3oy9",
  "key30": "2qiPQFSdTZAxZQq4o2piKHBt8GGd2rGckt16ruHYmTj8mn6vW6Hp3TXwd6YqgL3M3Bvw9yxSgPdshAVFdEd8FfKU",
  "key31": "5EAj4mJPqtTypecz98SqJ9gvuiJ4aMLoVcBgWqtY6vQy5m31pRqDeFd3prX1wKKMo51YHihD71Kiq9PEigXofmch",
  "key32": "8vKWHVWE1g7iJTENY5jyAmUus9jop5b4pfRnBkpxuHTn2sSNuc2zEJTvX9c4bMupxyNGwjPbqAzwvkDzY2WushN",
  "key33": "4whVxUeiK6DgZSDseqHkoMXVN5s5rdsx7FQ1aFaqYPJKfbtwB9koxfU3a96TBTq87phbj6BouAvtsgtb8UGVwsfR",
  "key34": "4E3YzxrY6eLy4225qf44UKdzBnVGC8b592mMRF2aJmd3AjGqWzFDcRVxthkQ5dn9nweNTjLUwpuMzcdUVe2prUvd",
  "key35": "2sgj95zdZw2kU7Jtt15bfxbAeB4YYGbvaFbyvdZWjk1tgaxtHVkgTRWMWjxbvdyPHJHJM6Z2FbPZcR6YFwwe8B14",
  "key36": "2wW7cc31d6ui9bscXUGM4sys3oCwmu6XrPxTHM3HvikCTYojH7uaEBUfSRW245Cegnn3QzA1HnRY7dxSBtXvfce7"
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
