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
    "4r5aL4gahzg7GnyVGMAz8sF5vHd2FtrvFQiQ7QfsVpNYWcXvZ9LNQj23CC1sjYn5hfPFkB1H275XSFAo8QFvASzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41dhXKRCDuh6mh3BSpy1caZfdxTwNEjkBTpSbDG2kZgWWB33j9N1RmGJZi3geuMgf9QrPgCtMFGPoUwbVe1K7xZy",
  "key1": "rFFbzo3RXk5MjBJRkAm7kxTL1nvah8SndkjG4iVaog9bLwd2aRvxQesgvMgLji1Y6nUce1HkviehGi8iM5H1VHn",
  "key2": "3F5K2JudUnrqS8R8EKrH9oswxAew48K8nMPdaGEWPxYYXYidR4HocEeiTayg58SAdJE9XupLeg9jQ3CJzbZYSHcu",
  "key3": "5JonkPuymhf26nKeb13htXXaNNiKD1nnSsVzhS7usC3pZ35NvxXrvN3RTd97wEDFC3oeNiTc72Ndnd46Byys7uNn",
  "key4": "2Z8iGegwMeUy3V45oBGMj61otLXTk7ixXVpa6PMHtMV7WLJWh6u2JvJEwpyTESsU1cbGm1M7WMMzcUrphKMU5Yjo",
  "key5": "5QrWAtEv5n6KE4DSs86ZnDn1rFzQjBcBfnTbCs5RU2S5E6atuxuwK9TGuq1hU5yKSBmDimUJgw9Y6J4shim8GsrY",
  "key6": "5yxD62ySbDe4s6nCrWSEewryWoPYEhQiZrms8M3MYoZ1YMBmQotE3NFrH3tUmKGhFpRKpoG7sKfchwECdEg5t1aT",
  "key7": "29cG49vkKgVT6iKT8doevvPEKJpPUAPGHsNPS5uG5KnZTGMojUVWdyKLHLrvmuwE6FQBj4E5ejRF3mZumMMhKe5z",
  "key8": "5usMZVvukzkRrKMAxRDoWNkv6EMVPizdQazqL4eApLky1YChU55hbRHrBoeBLxqjVY5KusjZyucbtXuGAjcrARu4",
  "key9": "2EL1zNmC3e3sYSQFSKzBnNSrZjJT2FWtmxLCHhiKxyyiqUchBqe5zLXqp92CGB6CYkrmMm7kFAK1dAUpDLFS8s3P",
  "key10": "3sGw8msijAMzM4okNmZGeu4WiSvLrTQczyHvzuMYNY4hgJ1Ap7UWD1f1nbfZUWYkWXLii8Ru9PcQ3HvDY9WmC3nU",
  "key11": "5bMBbZm1nqGRLEWrgEf5Ecac1tyTXyPLSoYGDEmiDz8JnjacWeMcdioLXD7GcpxAjuWrDPhaDq5YRQrwUgMLQmGJ",
  "key12": "Ac68L8Si67CJ7owDoAoii9VifCMBZxq49fGUG6As69siwFNaGrZBHxsNhkJ4PBJrvYnnhf162xe8TU61mKhCFNv",
  "key13": "2JL8ZCy1WqqMUpKZYbt96pQrLZX4YVCcs7EbrvMrosjnj9HMboy99cSbX5rctG9JuujRujoT9TYSqhEh4ioC43fC",
  "key14": "5vZsyq9dCm8jHfiWUytfSYFH85BEdmESMy1By2vmiLXkeyRQi5Vh7EyxwN9joiwmfNT7SywuJw9ZvxFSUbxYG8Mr",
  "key15": "5eeGjDFXRN7t1AxEUh1TFSZJySaz4zo3tMaujPGPZThqBednKHN7mv6KUjpPVqfKwUmfQFK3Laf9CMT5TqSeJ5if",
  "key16": "4r4BKcyWt4ZcFYdrf3VCK5WpZQTYzNRrhN9nWoq3au7cJAcGQZnFFbokWGp3CqgvTpK3Ru3JirKKNCTknVvrdNDd",
  "key17": "4kua3cRWGjYJ8uTN8dmzLZ6sV5W5ii4yCYyYVwruNfKzg62s3k1UBExdfEA7xv5yJnL3ZfG34539EwkragcmaX5x",
  "key18": "4aRYX1D3GgTfBoupMx1oKhRQG4qnGygjuwD53fQYPjQiHjzKPHQ8fPbFA63GzHWkan5KgvjMTqJrXijTQj1f2mZd",
  "key19": "4MiGo9jkbbj5ptpDSBGQPW5nyXGowFxLccHuDxy9zC2VsCAQXfm4mWdrmYbVmKbJN8DXnhP78vkMAqiJc15FJqWP",
  "key20": "5PTBtYvWhppNiars3P5g63BtHDY6st17siXffEBAcAU1q5JWiHNif22ZrtUpeZKtzvTwh7Dnkm7YRzMdyfQnDUZ2",
  "key21": "3AYxSCDFCeohEqEkEKFK82ZqGM4d6Si1ELPhXz6fRhfNo5XYjMhtKLqXmpBB15ZfBFAUPwza2tU1mYjt4ZCK2W1B",
  "key22": "rHyX1YA6GYXFHGkE2gJjFCL8RRjo2BZTMAhjeWgxG3SvVJWh4Ui3f43w9b2V924VFhikFMpSo1M8YhvLDW4tdBW",
  "key23": "5RpnbgcToTxZoovjEkZsyz81LLeJLuWK5hkrtgJMoNFEYw7zxvtQ4ZT2Lfhj6FNcbNEGbJWfQPpgSAYLZGiBL2pF",
  "key24": "Y5jShtVfgA2fP7C7sJStwQGCbBA8NEjfjJYpTrN8kEp3Qxu6n4ngLebg9Tpq1mKfWLYVqbimkh4ynWvAUr8h5Rn",
  "key25": "4eDgVVPU6TZXftMBMP9ivwXn9cECyS6dBrRLx579GG4whdtpBfSjYgwP53EEyzGAJbkA74SmqQk3YFbMxaXcdmtK",
  "key26": "4MmvLNaCmDtRkuqqex9BpwVcmYFzgT3Fy52B2ARAcme913azCpMRFnXADSkysULRvhhUAZCctvRfW4q3TPVS8TNG",
  "key27": "5AMirHu2fGHs7Fn9yYCRJVfxZZA2b6NR7AmfvU2wztaaY6K65SQPmBrCras5pWhP5r7jaAz9nz127SJYPJLfQC33",
  "key28": "3cPwrJJoXNZH1tqz6p5bQe8WG35p526kn3Epe1giEELyocAYRqr9BCRpyomqu1Et1c8mDqH2N3iZkh4dzYZyJv5m",
  "key29": "2KBW5MhgzdosmpQb5eRTXHekv9J91eKh55L9pakZtwfUVCKAuXXHUth8T2vuiXozc8PeQxVKjCMuvnh9EptBZEdZ",
  "key30": "kvT5aVaqeNDRzmKWPbzB8hAgPA5aewqe92b1Dch2LSZDxdQdZDzpeeiMf9b6vhEnQ35YHQR7PXPA5tHYXg7eG7q",
  "key31": "21bJipEuN3TDJcceLQi5fUUykVoBALgPVrf5V5eKrux7YpyqnxBXCL2a15DxEJe9R3Gv8jSQ3tQAHTqdc9BisYF8",
  "key32": "gymDeaWfETuHW9onFDkzbxLZbipyoGtthb9HkL1v3zf181U32vgEjpB4bqhwEkqfqrteKNhihdPY8Fnk2QhgcdR",
  "key33": "5agFUnjCGSJiQMXdNahFQhZnnWQgXLumkz1MG51hnU9xdL4Wwi3D9QTq68xPVz3i7T8frFemsiUEsweKSN2f8RVP",
  "key34": "2VtitNSBRu2kgFFupjkXzB4YaH6JzzuQjGw3Keu7pmqTozAfyCqSESFGZLnwkp9DRR6x6KK7FFRh6AuFZqUTFnP9",
  "key35": "4ZJotJkEjtGAmTN38DNnWrxPYX5PmiwfKrU9GYv5YhTMQwHD7iUewbJB9mEaVcGTsYZidSVQtuoy7fD8uXUtmyeT",
  "key36": "47ka3SWmEP7gYeNjTnKEsCXihDLLgYF2AR38m4YC7rA5SaTDtoG2JLhzqHwGt3XS1nRZ6yfKceQRRYUWC6sVv5zj",
  "key37": "4b3J6WBRrGEJBwoL9h7DvNVAAA7HMYc5U8BmBvWRrNcS7e8gxT8VDhtt6NFDxWZaMPY21LZ2SZMu4zUV8gCfTyDK"
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
