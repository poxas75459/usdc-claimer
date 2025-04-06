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
    "2TfrVFPjLT9gmq8TVnJh2tH9CJFXCJucBzSe9StjqFBzp1qsNZsRHQUBN3T56xchFfevsiyhv9hGYXmEKf45pehY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j8SKujtu2HxJBNrtJBRrbnbJ9gfPkHc2MGzQ1c2XQUtBN5hzD4BAAU4jWmyRgfJyxUFUhC3TTyzUeM15C3ZuyKe",
  "key1": "5Fufv7D8EtQQ9SDgaCJHBirqKPnsTyPBDEuYRgEmdyf93BkvLbT2HXyE3XPkKM7HG1wvcMMj5bV89mKKYigrypVB",
  "key2": "3wXRiKUYdywvX7AUoVLz1Yg1TEq7FkqV44Y9vA39hEtteyxzkYYdjY3XwtcG8mMcmq6U22XnRYVjjmiJHsBN9r6S",
  "key3": "5U9pt3Eue2J1GtudJJVBz33VAi4FR92nNiqMj813yKFbSZZrLNVazY4M767ytCD61hKm7QNoDyBiUCGaNwJe4FS",
  "key4": "bhUPgVz2413vgtVxK7GTSvTRehsGuPfJyz2EKixEMa7Pz266pgTL9evbec9fAWNMFtA5T74yWRwQQ82GNCMqCar",
  "key5": "67iLYzGqPcfwZjQtMxLiLG6SWdSu1VpsBPGyDfiTRWKgdWWgtMUJe8X3ybiJTd2DMomadXPPyrekuucyvoAoxoj2",
  "key6": "JpgwRPG7MVgRrjEMpRUarCrTnA9FVKTQvizrVrFc1RVGWG9YymLbFRV5GttLTM3tsxdBD7nuqjNSoxx1kFrMNeK",
  "key7": "tFwxJfgHtiRz5otpHEghMbLqLUqF415dbRQfV5ZcskUPiygXaRw9kR5eicpkRr7PxhbHX19A3k2bwAji2n8KkFw",
  "key8": "2FkbieQVqUwEoAzSKMquARjQGqmUuNhiQG2LLX2rY6NE9RiJxsJvVNDC8fdJZqU94oUL21mSAAxHLenV75Zj736N",
  "key9": "5uSyk1m2mANzGigmhdYshRjFc8kEtmpyemWhvuVm6cbKAEwfUAV48VsttSK1dEWUSTSXbkzKUNvWmGwr6qEHd3no",
  "key10": "4DBSaohtjhu751DKhDmkB6CyuPPkQwvwZPxdcFyHqg4kK12kNN26VbEbv2KS4JJ5uzQEeS1vc8azzAw9ymxLqUWb",
  "key11": "4ZQTgUDX3vAhLGCZ5aNrfYkAjQCep3b3PvVz7CoJ5AxihcFcwCfKtnY5n2v5f2rQ6qbKdpm9eJZ7GTToFUkYEGG7",
  "key12": "5R6iQSHFFSuEqQp3XAyxPJJnyJqNqjqDyKM917kN8XVfNkmdD43PSxPBYUaRFFtKeFMhAt4WEuMGG8pECEhSQYj8",
  "key13": "5ZLRtCvcZoq2ba8LgLwrME69mwoqDFkqPc7BzxYJVw8gXEMgocdAM8cWnX4KAqSDdYrhBQuEPck5E8hdjvVvrHS",
  "key14": "3ja4sLKuPVKZJVhbAEP2UcgU8TEf8RmHMmfS4r2fStyS3QgHLCQu8rhMjFzmj3dMfZRSWE7AkSjn9iU7nFUrFy9M",
  "key15": "34ozKfAoLPcVV9jcXq6sqGoSTqMuVqPax3bQAso9XTrKsyUUtXubsuU2TAgaLyDUGQuvM2m6nETGfbRAhLUgeAAd",
  "key16": "rcG39RJLWphDDZoGc4WC2Amgm8gP9K96rFwNjGSigKbuayzpSBEShPxVc56toxS5awJVFN8H7VJ3voCfHCd2dZx",
  "key17": "3htf5ryAgPSWaod7aEgQVsCkhRLX7R4hbdJJCZm788KMTBGUeyiR2VHaxvmQ2mXg5gicj4okZzo11BwGYQPob2nK",
  "key18": "aNXVqYBvnExSGPJm2JwohLvkZwjQHWe6KgPSaTwA2mP5yG38Dyj3NwKdWSQDZaMiePA8HapPujbL6G4oXw18uBq",
  "key19": "5p2qqx6nphx5g8Lz4VhV7rLTVqTypbc9DU4NgQidNfxKx6CwX83pcMCb9c1fAR7BQgq2Tv14HjoY5D9eXj8T8RUH",
  "key20": "5NBDbeG9x84KVhZJJAiFCtLn8aUv3nhZbV22aJJvp1k3caiwZ91ZQZjwJubEZKKDznRj1ixQEsreyRhRK9G8BzJ7",
  "key21": "5KofcoSAqDVMryjaXDnRK9oni4Fum2KqvZVYFhEJmaqXFgr8S1m6G1zkffS2GpJgQ6exRSJEgvhkA3yybFZnzSMT",
  "key22": "2uUDhgquu1xpTH4fvdVKnevLU9N4G1bZPXU8XmMTMjUHvRvxJvydQeavmY4iwnFbkC3ComYL1QzrECcF8aJZfioK",
  "key23": "3tBYQP8NdChbTnjMGF4rTWU1UnoQVzyo3H5GZJ5WTAcRWpK5raavDELdR7R5ZSCLEgHNhdHFX2Ds3iG3Qi3Pgfag",
  "key24": "4YjXkMJhB5iGzx5RScCr5MSxB4nBye1LaauTDM5u5f4ofJbJ8qoGLsQzMx2fZTMLEP9qrsnoyabAo8UuvUXdTWpo",
  "key25": "61De55xZZoepVJgPNujDWL6LUVQpAR2QreEL9uhcFsme4a1ChtsrLEiTqgBAfoRDP9dNLCCU7p34hqdt6Bndp6we",
  "key26": "4ybpPufNvBKy7mYBkVyRbzJ9ucSUbvU3RV5am4WX9AS2dKDSAV44DNSVsthRTreRr5aATJWPZ1tD1UMQV6vuJuei",
  "key27": "4j9QcPkokNFZ1PydA9BtNZCPvE6BJ9yZ9yQu9EY3UdbxauGpvjgmKxeTeSCfZjH1JhKwJCUD217o9siMZU6ZZBjr",
  "key28": "67ifmVJ46KRiNze7ESeCmFCZqazRAaNcJNu3FCTGt3p8pW8AAhyVWzLcrpBj94SxtiQEJZtkPiJmf9sRuyvRyMBu",
  "key29": "ifG2hMYRrW12ibSbkWtjvtfTRRDDtbnyLHfNn7x1JhkqwWz4MxWfRpE4xvAbCgnjkoNNRihgYAYBYaSQ5jnFkeK",
  "key30": "fj95M6oaCRDXUhRK6SP53DyK9MfTZwAYEmXMD9H3DVxfWSw4ks6SNk4vJUPwVWfwFZTymjrsiqazyh9YmNE6uoJ",
  "key31": "3mD7SUaUe15JTYZWzngBpkbz6Xk35baUWhH8orRVfDddfZ8XTqiGaDSyKKM3F7QxNX565ttDxiYpM2EhBpFe9pjH",
  "key32": "nZ57Mgq6pTifaBNo5UrtujPrrMQzf46odby7E2k7rLFaHEzw76oLy6F6VUbzurdtMCtPRaxLzoKjUw1EUDXpoSs",
  "key33": "3pd8oEqYrYPo1gxp4yPdzBF2GRUMHPB5iCoAzTpK3y9EEiEGaFLpduFKxmWDrpdfPa2FktzKJPqV8G2wodTjq3Eu",
  "key34": "3Qm2uLs5jZAHJYq7Z7PtJr3wd1bM6VGcah5TWXFPsVpbAQK9VpBEu1KxJBXmPKdLzMnPz7bd2JytpjY56Tuowy4i",
  "key35": "3TLRTdokeeuEbbyF5qyoqbPhXLBmhukoAYRLVAAdqDDT4zxQUFoqZuA41fP5DZjjZFNAoP5ZFUuj4Qd2r14bWHUu",
  "key36": "2emZDt9i67bVwyEhC3yw4sJVz9oYvXcdfyjUE16waHYqA68TdZSmDU5t4MT65yv7gaCnhrBLrT5RPBDDLCHkmyXY"
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
