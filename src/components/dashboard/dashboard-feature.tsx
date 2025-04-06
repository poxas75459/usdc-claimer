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
    "3RLZNKNsNTxzG5qBqL9GJFb4ee6Pca7pPe1bmAuEHHaMdRizwi6gFMZ5YkAKYDjozAxrhqVZiWxpEB1YusCLdgN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rFWdD61HgQHZX38hZFtSJudiKkASq3sR9VyLYMB1xVfKWwMFnajBwfzEjgJdyhxc5RxS2897DTX6KgEYfZqyyN9",
  "key1": "xidLe9hsASbbU7FUyLyk9yfou1M6uT6cHi781srCkmxShb5XMd9eR77AMUYQQbEeBq8y2uooqBkmqHqRfKzp1id",
  "key2": "4nnxe2Ud9wxFGNEJhgopNSFtkcZWbWwj1JF7uPVwXYQW5DxFHztKPR7LSSCMvu19stkbDES11bosi2j1TD18sz5r",
  "key3": "2DJDqB1fSWPDevAqYoKZyofHy4wsqwDGcxmTuvaCMceR6gYDkY8HS75gBtCk6JXwoHXDyuVyvxbCm2kciTd9YrVn",
  "key4": "2ZYNHYqSFRiqfzRnNg8uHa4nPzqLng8q39aFEx45KQiy31ZwExkmAQU8zAvLS7QQUtiwZ7LSpN69BcKRo7JxAa7P",
  "key5": "4kZdVwuYwxU5pCmNKKK46FWFA4nTEryHPNW7DfujgPyqS6ie3kfJwaS3GgKAhNVShbPzyCx8q3g4pBYioBkW4jEk",
  "key6": "2e4sck6Qg43cR6fpTuuP4LoHnimCgmS7tZbh3HhgXBxTwRaKy8heUKWQoiPuBukDKWRUMiH7tb1i1u7efeFFWn94",
  "key7": "oKs3GtpmpTjbxsz4iP8zo93z6JPMcHPVA4vEHirwoAw26mSvT87wk1KPQQchGu5hkpiH1KSa4mgFvpJHrAKANSf",
  "key8": "5yHYKjc1D68aDGZDPCxrRfkhv97SC7ppFLVJj8jN6dNzcvwK3sU4yjVuBWENdkoqrbs9YU3pKENg9JL3DcxE5zm6",
  "key9": "2GoiFkqhkrT2VihNRQfwrxifi74iGgNruCkPJ5RHspZUSxzv95R4gXLY6QhJ6WX1tMHh94LZtR6bgvW6VBfpDuSx",
  "key10": "4iL8Ft9nPdyYPdbud61AoVbusT1uhci9bhbrwTk5hCZsV8fZpDSZDoo6uD1kXzAEGJAXbVkYEJJH8mpwsbaZjyu3",
  "key11": "5Hd2fGL8hiyW8xkYpY59nfhtgGZNjM4Ubjvx2iqtGNYYWGAParqQntfpqw6zyvjsEhkSR9aGBxhFPamru3UBQBCL",
  "key12": "EHBWpWuxk9fo81HXEJjhFxyF9NfAgF2KTLsA6h21eUDtX1PBN4udRX2dTTnwJuyuW5JMQavA1rpqyMd4HacYcF2",
  "key13": "61ozXPNCeNXb1C23qnDW64N3bSpLvu6HQReJcUhUpxUcdjq7sEbFn7EgVcHx8Horeg8NVJU4bG9r6XUV9YXt9P7B",
  "key14": "kTTmuok5SjnWUX62zrFovT22TM1PEuEL3dMLxNZJbpGkfNecLoQprCLbAbdmSGMQaoALY27eDW9HWAEtYPzZtYs",
  "key15": "4Cvn467kZmt6RMnFBeomvqvJGwJLdVB6GDUgjMGEW1Zfkg5WUThqky5EGrKa1d9fzEeRRkk57YbSTcDWGGSRPd9P",
  "key16": "5g4SVcdgABErdfbcGcBMMQWL8nhxRF36Y8UwajYKrepkm7DjK3iSqPKMMjJrJKzAUahpsnwpRbWEcMQzL6zz8DhF",
  "key17": "5e3EWAk3A1VFSGMgFdQuBcS4k2vkxd4XVJwEEvzRYQ4APad9MQZW76DGXzb1kgyxtXhNUUR2qAFir2At5emiT2rv",
  "key18": "nMXhwjobGZr8bDcqjQsm4n8FtbBG1EwiWBYBewVo56hPLsFFucomMUiraqpxrP2KPc84QrsDjgM7tfnVQeujrHf",
  "key19": "WapEJTWYeKHs6bQ2K7uDyogQv8CgUxKWYzFu2vweWE9GHBhxcvseGUrpuT7HnceutXhyWxm8RnAEoek1ZvXUr4R",
  "key20": "zayS2VEbWzSXFcSbmaqeAx4Aeky86SiBofcH46TS35q7WtnLLZwNRB2bYMy1bbdCnYqucunjoFyzHx1auBWN7wp",
  "key21": "3WKa8qaTazU3XU961f4M5xRcLu6pHgKnN19xgUde6emuv95neSwT6GKByWFZL7tYTc6EmPjA4s4Y2uCdnvy9yGc2",
  "key22": "3oyNQnu7KXM7Nx4VtTKxbLTw5rQxXV1Dc56pjzxLpBjvpgTLqPoW8aaLkFRs9iNzMekxSvZ7dWnpkq4ad9b4n9fm",
  "key23": "4vWMBALg3mUsk6gWKprg9fTNztgpbsaFTJrfUca484pC7PfbEfQCGjUdcWqH6iHHZTek3zts4SPd9kdFL8DEF3p",
  "key24": "3zF2wtDchzHGzRVN7Xqfhu4aqVB6SqnWLaq34ahqQqmMBaXfC9zPMfsNJKzBqjP8ZkvAXx5GR3X7he67g8iHcBnR",
  "key25": "3Mxy9UqBjJ9JMGTjs1PTdE81kErK4omWsKDLzZTZLSDeEwrUbb1YhzsXSHQfhHyoSwjDaoLHFLkw5ZB4i3nPPELN",
  "key26": "5nFAw9nmVXHdiskRDrtjEQpNvWXh3BoXrP6bUEtmkuMRGTbkbj9QXV7oJXE7WC1hcfbJ3mxQk1tcAH1ajsWGEjAq",
  "key27": "26WNt8UJGanQ2ocGceKZuyVnoT3uFz3KfzJJFcAJihqv9gjuDmKJagYQH5poA2Qcz4im16Xzj9wYwKjuAoeCCnUq",
  "key28": "2W1dRocvkKD29waStU98MMPDf4GeDNAi58zZfQs9BSPuVCeojuffYmjaF9NHZBiAmwprPFreuZXSCzXZQxAiMRkb",
  "key29": "35HiimH92LtSwWtJE2B4LbTFE6UstLz6UdRuaBw2ceXAwip7xJN7BVa9ZUF5iqitGY2QHPJyHWEU87mokrwS9zi7",
  "key30": "r4phm79AhbZB6Q324Gds3pJjif81F6vKHm16ov8kqshLjGbDAxTELgZTgc26KBxyf9kr7D81KR7oXUjGhfa4yqq",
  "key31": "3CXKCGngrTfHgeqB3wZL5RJz8uBaR6Perj7DErYhjqAf4TbzXWerxaPLgYsuzb9Exd4ocmdtGEQNWTzFcc7M1G8o",
  "key32": "4Vu6Wq8EmuCSFfMjkk7Bhb9CsXnNepa6Se2te3UmKuXhLYyN7HCZAjKySPGvTQ2ig2rBQFrg4Uj6ojXFArprGyqi",
  "key33": "4deyd1ZnHtf4kFKVNmsGUfR2hcGmdEznmUmHT2muuuFMw8mhM9svqQRcDvZnPy7kRhEG7eFazFyZxqkogVZ1df6o",
  "key34": "4v4LCtVzZHPaDDi3Lb1zW9YqD1Rr1dbtUfXpsUVm3CTEXCTrvJdiWcXkaZseQYpLpMGHNM7NjoZCSvSxT5G3R2WG",
  "key35": "27wh7i8Sp2FDABkbvUj5zu93TW53aGaUU2ncH28m9t3RPHVCYEcpAXwtD5uTNXvVCamS7LCrg8TMMhLRJNv1Gkaa",
  "key36": "4YQNZFwTm7G5RYRYH4EoTQgMg2PtE2u5E3N1jCh2ebwMhVyzWbqQeNcpcBWPBMyNfPzgdsnJ23cyFjiErdwzWRoU",
  "key37": "4GPBzRtYHzGE6h5muaDZsXnk3SaNci2HVai2qiFo6WwQWirWFcBqUSCoc43pbzVY2EV1Ef7gbXvY6yodPCck8XVR",
  "key38": "4g6awXGEZhTrSHB7234NKBYW54GLo6KPAR9tRuSWir2EXABVEq7rhVMSbZeirquMfD4q1kv4noHe1px74F4uq2z",
  "key39": "57pDLASw3yFDPtktMetwrP16PQ8otZqrCeDBgz6HCe5jS4K3hParHUvQpgXL1xc9TZej1Xr3pd8em9jJmZbzYVoP",
  "key40": "4yujCB8TafK7s8VzXRVJAkoURvEBdu6EmKoWsKnyJzV1tUPkZ965bchRBSELAfyFd9nycrcUWHcRaifzwcGcSrgn",
  "key41": "QHJT5K4xqL2Bs4JXYT2ioHtxS82Nijqt5LckrD254Kar2sNK9aWp36Hd2W4WvUYJ9k1UznSmMq1fU7vfQ9EQuuf"
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
