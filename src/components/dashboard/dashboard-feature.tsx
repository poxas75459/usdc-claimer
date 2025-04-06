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
    "4gmGBidAkDqKApXAbzYsJukpj91fKWR1VxdNFfsFjRFwSKF49dUGA1TSPe6pZBx2Kkwr4NLmivu9wo8SssWYU1Gh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3may9uEhu98vmxWESTimiqmJy85CYbpWcmhX5UL4mzoSvnJqW438HBLb88xkLTbZgLc9iNyvebFBJXs1tfoQ6Hzq",
  "key1": "2G9TPwD3yqZUzWdJhm2rW4N4qYmnF21e5LTUSAb2WZNG2mujTveaFqHbUXhP9zE65Gfc5qHUaLARHQQ9qamHL6TM",
  "key2": "2SxqLv7srsbWXYEey6x9Rq9bPjsbg6EnecZ1RczDsEEk6o9DoUuv7wFK2WdpuszXpmgjuFWve4VRvF9dpiLvEA5H",
  "key3": "3dBtKszkz5Ec7nLGesuebrR6UUcJdi6VQwkcydVceKPQuGrFqhnCKwcwsuSjgasp3fEAsLQt8XLXnnUqjLKUrMMX",
  "key4": "5thQ7qq7BMc1ZvBbRFzBhmvbxhQM6be1FdjaWXWY7kLT5scwjHnv38ZARe344LTMC4Cb4RHR2NQboEZy4p8xz8Ci",
  "key5": "4WtQKfymyeyFTwPXX5fdGEVc5STMuBoLyNggYXkWMyN1P4zsUf1C3mxVjWqZAgVYmXgFrwKXavPYQqizsRFofDgn",
  "key6": "4Tv7GbzWMf8ibnBJqY4pNF6uqZ7nq8Jf3AoAqNrE9x2mqhPLRU7hkTj9uNerokxPKCVGQhmcHDFxxp8k7bUT7nKb",
  "key7": "5ErPaNTc1v186PMGfym7sCr1oZ1btLzcCzCWfWWjo9sf2WnXx8RrCNFCJ9RJZFvU5pFjm3dmZVCQivTh9GJh59o7",
  "key8": "2idgcd1RHP1Uo52rcjscd4gAmTCiemGeNxAKp51PZbDEiCfhw1FznEhBxcEDKK63JPkDefNv95rmGRGTwU3dmBC",
  "key9": "5VypQUSuHMaH4k9GPwFiBR1eD9XwWpNUFSpB51CfDQZPU6egD1cpbd67EJ2f6EFiBuEvWrsGLuKqCLAQ1u5hh7jC",
  "key10": "3BASLu2UwuRYuyEUXdi19rRp6Dz2q8bWv2qwNBFzenJUhjuaKfaz2uCPBnYnnFeUzDvkyn1u6yde7FcSm6TrPkPH",
  "key11": "RMiWwg3tKs4UtuA9sVHWNdSYutR7m53gof2RBbsKh1jMCFgubJShCGZXaxuvNw5dmh3XSaQTpxc6wm2WxWro2wJ",
  "key12": "4jBdxWLUNnD91nA8bwdvF8Hibf6AL7iFPoWALFFrTf8actPzEeuWJD3cEqQB9N7XK45ARTdB7oMhpLZ2D7ox8NAr",
  "key13": "2MuTKq9htnfD7CwdwpJpV5Vajtn7SsFbxiafwuRi8FSZAYf3oLDBQF2fcUsSH8chZLZ8zuC4Q6tP2gBspu6Bsfqf",
  "key14": "3JCv3Fnnp69BEiR5Z3ry8rgbLEsbh4XALCjtb2CRxiGGtcska797U59xuZCWBCi8jVHqXyNGtcwwYvGu4T3dF1AH",
  "key15": "4rGRLYYfELmmDSkNTKxjFWW39qNaH6Qia6y9BsJvqG8F6zN4rAXgpCwUVcXCDRgV4SyV3aK3WpDceNZoihNNCyrS",
  "key16": "3PioPYXLFpmZMovohYPN3QGyvivPdyx7WTjRuaFnPUFm17zcw9N6uyqBfx8CSaCQGhAmBNfQrDCoQkSFuHhRFzSC",
  "key17": "1SX5GfnzjY294pTmPkxLrKMc1dZE5zVHKwrJTB2Pd7A8a8aFV1eEALaK3ea3kLzTGpxWa6Kd9ePvs65iSZfgD8Q",
  "key18": "2N5EER1PpRNP3xEJzH6CsD1NRe5Cw5zEAUvq5mecGcRfpF6uUGrZ3X1oMSALHsPgAEuPCTKGR4UmAJsp6WLoBcyq",
  "key19": "2riKditzhMnXB7mbqmgvmRotM44bUQKjS1ZkN18VT9r1tgxnPEi1tcoXCYpeLRkH3RguCpvvvqwC1yThpS8ZrifT",
  "key20": "2TigSJua5xBtB6SRfc1DnWqgSrkC1kr3TWGmjHxfqHxxBHPDRSt58TSgUyP1EpUpTegHtDiCJjqTVUYrfMBZSwP8",
  "key21": "Coii6vWa6rYp7LtCCX3Aiun8b7E8FK13s4UoU87HEL6X8uDj8e8DYpqvtoAb2z2oSzt1ctAane2nCuF336L2ceV",
  "key22": "4y9kePTqAnXVP5EHnarehJimLRUo39V7CAZ6w2yX3CPidBCvru2S2RrkLKu1vuvSzy6SAnZ6bm3SbopwdDgHw4i1",
  "key23": "372a8gH21nMQS9RoL9mhnm6f6AF4Ar7NYx3VmCjQtFjze4Kkc23F4YgGmUEBaG1vx6t7ycsFQnjy9LziyaUWfQn4",
  "key24": "5qmHWKoZ17fnFukbsgXogjExf644uj3XHwwAtvockvMJqKVRn545wMf5gpZHVK9G2miT4k5bWZoEp9C3nhS3Z8wT",
  "key25": "d61iVvSovaiCGnRMJU7FoBvwCcjSJHALUnXhNqTaUcEW8bGxFDtC3oApg8h9Uw9iubRNN3tZejhzWA9SFhbzNi7",
  "key26": "3oFTvz8w8jRGvp8LL3r3zSvtTdZKTfeCHCzFWB9wgcuFZ8Hyi6vJVBTrjgpnM6zHG5Seoj9VpioFb6DRpaZW8PWk",
  "key27": "31TeYzuC9vuSv69dTxZ7sgN64wH98qqAEkSSB6AyEJwoN9Sdo6UkSopefsHwGWEExwQF9gmaMx8KJVv6DjdyXy5e",
  "key28": "5LBFxJqE5MikELW77U8skNon3JYDwTLfVoWDmggwkujZhUnGznRYuH6tWX9Am78TVaCFbJ8exL4LhitRTwkzj1AJ",
  "key29": "5sXNZYZGBp47jJtgGorLWd1DwppqgBdjgtuZMShRriDTF5GoWhsYkGB8fP2Uoa9WHMK7rZSC1GJSAXEraNrzJ43b",
  "key30": "2trkbZWTA6ANDv2ZYU9HC4nN4rZxP1xPgC67p1QUnBiRmPTgg5RqyxdhFFHNGzrvZucXBZyH49qtMH3TipZLuVSq",
  "key31": "5bNuLzDg4UsvSfnSR1yW9Q7u4Wpx71U1oSjWPQJpZtx7LTj9EPxq6DCzsnt6bWuVYz29JSNWtAwn7knwimSctb5n",
  "key32": "5PK6KF2YsBtgA1L9YzkutampS2H8Sp38ft93V3E9z4Mpp9vTj7j7UVpeiHfYp79jrnTGcvnnsaLN9M6xyi7qVMs1",
  "key33": "5WHdy3jF5Y1Z34rQKiCWsz75fnZtcS9bqTCiLJu2jDfq7zrwjW3SXNkpSWQJid2tDkNQ1Ffq886DXGP4t8NZ7vXr",
  "key34": "2pzDwz4uHFgocmLFHrHHgGmXUhZb7XKp7igDbmGHZE7aTGy9Qq1i1z7QUqNr5gKT8Kns82PfRrQontXP7aEa2NBq",
  "key35": "2NjaVNdzMQWXmXDAqpkuKHwwiyBDHkamnLn4hhSyyhJ9TXkhqqn7Errh95E2JTpvnXdBJXsVL2iw42e3YTuxVari",
  "key36": "67mjEbPGp37emAnVsMihpgCUVzmCobBUwN1g8qo84np14B8PaFWZ521jfGNxa6b37qjD7fznKtquwS4Vqs1k9Rqo",
  "key37": "5mbHVVHHmPQ9j7ak5Lm3w2DyL4DtwCP7dCBKpMV5ja9T9JL96QtVstU6CutjwHyXUhfgZGuovnm3gCfo2x77xpB3",
  "key38": "21cvEXE73XjG2vA6WJajwDNnWStMLkk43g44iUU9FWUk3SW4SVu7YCi6xTriVoqQeNqruaC8Zh5qjC4csGrWyyFM",
  "key39": "43fu9TA3BAFrEpx9Wxjs1ZhzmUBJyvi6uwJo4FmUV3XQSYXFictXZyBcavZcAsxNxdL2q72nQSusA4dPFy9g5t8M",
  "key40": "5ko1LLqf7pyT1LEpB7ZL9VboLER1aySPttKVvrBwRWSdKiVmXiYYK5cke7ugmYBZZHXeF7oUioKHJRh7THGVMNcG",
  "key41": "2eboxgVgxS8LBUznMJDe71aVbGij5QEURYw7mi2ayrpXo5yqQVLibzFWzU5Anazy4ND82tqsgBLvTgBvtReV1xHf",
  "key42": "3RCCsPiPb7EoX2WJVP1BagwWGWqszEf9eVuqXwBbpAdbaq4cjLLGN4tsBXtZNjzuMv4jY7u9x8D6deBeGPpEwHUw",
  "key43": "J72wN48U1zVTj4iKeB9TXJY1Dr1uXkhNtjCurK6yJ5vBYC2YK9i4FxDcNP4s8ydcAjKyCd2sLTUeZVspZ5A5KVw",
  "key44": "571hfvBe2HD3KSBva1b1svsHHYyUocfsJAYa244EbERnya4rqTScNT1jnCzm89HahzB3He4FKUkW8qKdyVKkWnvM",
  "key45": "an7Bnzvsoyw6vd3pGo5syzim8WWYzUh6imLJKXQa5797E8su9uwDT9gchZKbgsdQYpbpacjohogdCtorYX5gNhR"
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
