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
    "59yMqWCTRpJKyLotDUAWyFKBS2Rrw5roPu5omm7RhT1GiMzP6nj9uBpScRxh3vSdoQbxNCcyoi7sU9uysWV9pm1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wXadazZPhMLvTgsMzTzAggaPAVBtMbDtUBRWfkF1cY4ssyPdSDujURixKjzaDWFuRFzX7t2GsaWRT6irJtEfMhK",
  "key1": "3HFjiUYcPaubYmP2ap7uN77HshXCptqLQXM5M13ZQeznnrW4Y6fyJUFqnesNR1r1iPiKSmzvNq88U5EMoHEwgwub",
  "key2": "57imsJ6MekqRuAwxtgTBjJRt9juwzx4cCqC9YazJoJcjeASr7fPn9i9w1DjCCsKPAixaGVok36Fmyh2TNKYxf7Go",
  "key3": "5XvaAc1sB2vjNxVmdy3c3wphmL4fBwMT6dfETdW8Cm8NeoghF7PhXt1A1feAqCMEsYJDR3VKSkzNQzqVzJXp3Uii",
  "key4": "4WDUTN6jrCGnsBWyBWFkibHG3W1e3ZJYNNAoqb2fitxGyEpwfBRKfxoG96vX9WxHCGGdKNN2DSymAaohX9sQhWsH",
  "key5": "2dFWEwjZz8JhY2ppiVxBcgJ9gK59rBvurfHUD7NuriNwxSrRUwZL6Y5XeLhtZbE5djMTG5pDoJ5SDiVyEHM6hzJ5",
  "key6": "5y7rStrfYGcSrZAA5PpbZrc5RdPwNHwmLo5rGiht624hnbudN559B4reVRVNnjk6WX3dycWFChqZFwup16zS8inZ",
  "key7": "65iRwhhcmAdh6E3AU3sURLEZ2NvGMfCQzSx1np2yeQ8ZRJFSSY8hqExPs29mPXQioczqppTVuPQi1MKHGjBibiEE",
  "key8": "4b5ACyEMWbWdSvSMxx6UsmAMP3ZWyxtqeZUn3cQXwvsMgMhaYtcKaQTQeiskNU3bvrNyxCKCmbD2MZ1TVPZaXCy5",
  "key9": "2KBQgNF3wtB2QeBGZCMjB3WRo1UwVxPFYe4vhYxc1vDnUMeJSxeBge4gUMcXnLMpRF59iKFWMQmDKAANVkPtAVYK",
  "key10": "4DuADPjPiHoRbrfmir9t7kLHgbesmPWho2QJ7CFDPDo1j5PWC8vXgG2KhgFEFrinkRCfbSDZxJ8BJ62yBUh77CJb",
  "key11": "2FekP5zXXeK8y4pNxrBWLboZN14agnbZ36yo8YeSadcuTDdXiHA1Kiv3fPJTELSZNCNQZ6c3zaueLAk5g4FyqzUG",
  "key12": "668XuNvg4tZ7qbXf55ikrsYjRbB3ANPLNWYV9XhugvHssk8NjirnfmM1gfNaYhQ9tCKoRoCz3v544dhohmJ8XFD6",
  "key13": "5F9uwPH3VifYfxhN2nCtwsoYXWfBQMrSRW2zJEwiwRVpfrtG4dM7bELqkytJxcT8au8h3ApY7oADJMwvAz97HgRm",
  "key14": "3BDXaGPHdJJ1KnPegRyee5ifUzXCYGVrcHb8sD2SbADPZuD7siHKUA9ErvKsHeVMZcoLeKokuyc4tadnJAtjcM7C",
  "key15": "58XjvUxxZdXCYzPYz8vsmkDieYQcqMdmP4mSNn4pTu3tcbAEahba2SvLRXujr6MtDmfDQQaT4GjV2Gg6eDQKFvwc",
  "key16": "2ncPDeV4CMJjFKMLYMNrmF3fqdNDXfiZpBWgUHpy2FNpWS6kTj79Cug2keJcDZVDKacZ4pgP8WyiudQWfjZtejkb",
  "key17": "4dandvMydkKuLVpDbgcgMM6DTkjp5zuFk5aKLgEkHwgejPAUCpwXTkLx1AZ1yuJuUaGJ8EhomDiNPFivjNF1M7P",
  "key18": "5toi3XW2Mwn1qdrBTmAy7Z6Z2TJepLu7ajGo4Psb16ht1HzLN7mmnyEA28DihBhJGYZVQsLYy8BhnduTCgwgb5xc",
  "key19": "WoHWVVRqZiEZAWeuFSQfTjsFnMz8QYCNWiyRGWyjXsCLXSFbyWcWhsY3Uch3MsKvYSyDu1JvzEAyJYZMnLWoo7N",
  "key20": "CSh8BAFDcngHJV3R3jMNDDzagzX7EQbiEiVZ1JmfmNzPU5WmPCXyjNYBB4rte4Yy9hpGdi1bAG19FF1wKeSXFT7",
  "key21": "5n1iJpMYmh8xSaLLe9vsUhfLvACNJpZ9BqBboX6dqFYLTA8YpPqpKEiWJBobwBrrctkR2dUzAEDcUfNCvMZbDsr2",
  "key22": "5hHZUnPV4s49aJLjkh1EBVTwzfM6gCcjxusY14vyMCLdvu6fPAdMvoM1YNSGMbHWJCn4vBXjyR8vxKRZovYnvWx5",
  "key23": "5b3ayB6BVZKhzVYb2PaAAxQQefkpy6cKy2eifzoztFsQQFTYf4amxcqkg4Tb2f2pY1KhqxJBTDANQyqZbeBMWCs3",
  "key24": "6kwmh7iVxxK82Cng5EB8uJsLefzCyYMTaQ6pi1c5wPDZhFaiFQSNAsKJBJbuw8XFLC2u9mW8QLNvYQ9mRnTsxh9",
  "key25": "5iDwmjY1LaeoBeWMaAmeVJMUtkkbfnzfmJuaDLeEY8yjipUZcMhcwSEsfCdbQWfSaHvpJ3fQCYskufRj9ge2r2eq",
  "key26": "5fsj9WdL49ejSFDDTEB3AJ1Nm15DHv9xFem9iYV4huZQxfTSFh9SDnF38o5dP4zPeepUZATqrgwRACVH2FRFqfjL",
  "key27": "4g6xn1vhHX2CVhb5YjqDznNE2NPE2iXJUi7A8B8yRRHbKfYEEJh2Et23PZKXZx7VtVSRWW6hdXgZeC9fP57NaS2T",
  "key28": "5gV6bJB9gaB9UK7Q7TR2WiCxEFBeu12HsT38TscnVtkcKYp75SECJCiMHuuRRjqAYi5bDPRC7BovMKKubDv1kyTC",
  "key29": "5EAZVviboAmrVHYPuiQz2fsMWhsgLLQa1nhxDnikoJ1b3mgj5boxBqF1dJK3aUAwwxMj9os67otpAis327vbB65J",
  "key30": "3hBKkftZ7dodohT6P8RWk6qqj66xMRPYPd7s9yLzcxoDTg364AHhv6bvU2DtKgzPDQzvEu1J7EivBeYNFt4wJtwL",
  "key31": "5UKCUzwLdFxKHDCQpVuPWkgvdqTQisS5GdGhTiiQSGtgjJMVXbBkcmAgbHp5gtb9iMBtUBSPBYHonhKZjNKMgZd4",
  "key32": "2rgXMMjavzo66Nc3ea9TCLTFHHLJdDmRuQBAcBQta8m1iRsFVo9fFhd1C6E367AHuZJ26wiUjxop2kszjoniD37b",
  "key33": "51EL1KSJz2it7TuSww6z77j8EKfnsVYpwXYJTAErFHYNAXQWDqAtSt7gcUzcq14wquRjgzXRCGZGdkcRpQ98rTEL",
  "key34": "4HLhj5MMBGtFFjtRiv4ABXfhZ2QbgPz79bJjSLyppTPQpfUtqvGhejuKxyjnUuGEUumttG7eS2sWieUFWcMzcfzx",
  "key35": "25REZzX76npe3DT1Q857uc6geGTgNRNUq2Cc7PvfndNry1fKnyaPpTgPoPgouJ4UHzQ243L1a3y1cFjMmVcYPfqy",
  "key36": "3G5euHLkZZsPvXuW4HFy8BT2Pegkj6JSYXUWaFRVPCURhCvSwxWCjPDDYYq7vyaKM9KfGmPKUkcDFa25UfDsnQjT",
  "key37": "4K5zizwHnD5jXdBGGA3V5K1BNdrkrgtLEk4tT5PPiqYdACSoRQhVYJSdJuhJ4aeHHJCSXomKCimMtNzAkE8GeK8q",
  "key38": "DFZyBLySpZqN1f9VzbxhzKVJeF6jo9SYuaAJytP47U86xZvoMo4WYjJ8rFPiDFXvCLMTXZEpEysKXvZagrGCkMx"
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
