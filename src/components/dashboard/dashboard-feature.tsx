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
    "3X7ytYRY9SiqTEenUWsGK1pUKTQRtgmtY6WZSEzfiNo96ApntN6QTkktTuYDLVHF8GrhFWVvXCPUdtXWiXb8HvLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uBh6NT9EbzUpqjVpLW985dkG92wNdvrf3UeN6gd5piaPh6wZfNkeVkh3RU24mQr9uiRwTbRKPbapDidznPWiw4s",
  "key1": "w9G3qRD5cXZNroYnG9DkjbK9FhudiHxHMVsEYqjBugTdcsFfh9buBEF8eWSzsBE1Mr5oojWY8THVu9ZQJLsPxCu",
  "key2": "4BKRqkGBoBHGe7PiyBnUhdP6niV4NMe9dSEY2ZkBF3cZSq2jj7cxscfALuCNxX2sKRhG3YHZLFdQhpSEBFNA9avR",
  "key3": "5rLWf7TjPJ2Uv1g43bzTXTSuY4ohcdVo99b3QJp6fK2vet4wSPqTt3gEd9RTu4e55n9uqPDvvhDA1RoqywPcYYiD",
  "key4": "hEhbF4t4AtCraEw2gVe17BcYmia9hnyoUwD6KZSeLsd6dHcGekZMUh7yT8hNFv5hMt3a1jAYPSCaUoUrBKVj5dD",
  "key5": "xAd6iLBjukSUa7vMVQ3vQSzqW2DjoqFdPy4ihwuSh6cw4MYNU9DVCHGqzvWYniDciksWSTtdUqX47fqdLVtoHrJ",
  "key6": "MxQGjVvBHGr4sQxvYtjE53aGpHp9p28VrBgdKajAtkhtbmZMaLcUsgGWQS7hoBdpBxgGZ9SauxcrwDC4jrdQwMg",
  "key7": "8g9wbvFBQBmeUwoAmzxU7Vbou13v9nYcFRwK8m9y14vCd7mj4CyMxeTGcdnPvqeD2ew16ESzA8W4An8sG9H8Nx2",
  "key8": "4QQwGk7eyTn869M8UDEksbhxikjQK4Q9sKqTAa5UTx48pxkxrWUXvKBc72bgjbAEgn4pNuSzkfsZrszn94oEkXGr",
  "key9": "2k4iCGSV9rYtLrSrYpm4tPkBFvmLZoVUPvpjQCjSJLf7cYgNQraNKpkWGha99XCtGj4RtYZFWoMWnyeC4YGY3sNX",
  "key10": "3hLzLjmawrxeb3X25yNb74obNUwijKLc9pPyKY9zibKBae2WPMmenhJ5sjjATLe4sTDDnLyZquXJjw9vjg6awJoe",
  "key11": "5u4uXeVX7DMaFCkZf4T5osoXbj4W73s7JjGEFkub6WK9YUnHp6dCmstSteYzQMXkBqjNXWEmnxvyuF6Fnoyk42WT",
  "key12": "5vmU53Hom2J3961jV8PBrLKi63ogUonHnxe6qtTjo2hpNmbK4pZbT5s2KdFes6LPeKVYoUaMaAr6HrenMnGSNmNf",
  "key13": "3xiPtd1Upk5MumvxiZoiaKZRyo5foyZjha8buHwoXjFoBfWuefPZL3p6eonUAmocswVuHqSPAk4p6dTRso9EsNpr",
  "key14": "5VVkDgjnFFPaBi18Bxo6vdZPFENBzqyBWbcWzrJBcd9fY3eUbLC1Qw81ZSS8xEGvBJdmzhjc761GBGRGtHFy96zL",
  "key15": "38mcLTAtJn1cbq5MHZ8BvCxJz4GtYAqC6hnYJQh32GeRi78HDMRpY3MJDW2eCKhcZYpieGhj6Xg6F6m4uT7uUQxC",
  "key16": "2RZwd96LzDj8PXXuS3JX2GceDiiRC4YiKWv6E3JC7Zu5qPMAWAQ4oApDNc8RGsmeQoGCDpTai7nUTS1145PdsMTE",
  "key17": "2zJtTnGQZ7SRofqifDvGuoKkrdjph79gntjgF4AcxadS4WXk4F2uezLo94XnYK8zdBvBJXM1q4cbdfcNQpjBK7mD",
  "key18": "4WDvRDZ7mu94FU6tDMFbAVw2fQ3EKwv9TiRaZoQg8fxjiRV74TFtpmgkENuLtcpzfSbBe8Ai1i8frLWkDaCAAUDN",
  "key19": "4gC4QUAAfgnSKvpNixm7TXXyGG3hT7AKm9nUHU7wEJxs4UeQdxmEz5zneZuUguEg8HAVw6pFXHUjiA1MpGotq9V5",
  "key20": "59yWrDogM1NSQp9QJT2f5rpwwkQesgJ9mU1ahyRWMmkda1rsZp4K3mJdcdWdEDopKyvQUQuGCZbTipWoj2j6X4HC",
  "key21": "PSn3TEKrr5rA55MtoRtdzZQsLnW54XWS7rMEmg9xVgy2KiTB9vuqSZqcD14vTJ7kAKAB53QpkNqeF32Eio9qNqo",
  "key22": "4q4ZppSRN7tKWnP7NKvRw3DRgyySU3Gsqbvu953U1W2ACLsKYd35i5JuS6CErARbRyTM9Z7kWx9HqTJK9Uvy3wKk",
  "key23": "2zDeoCsiX2xwULN2WXxBunfd7gC9Yi54pgAoPnLWnwVu9BT9HWoCYpW6H25b6GvVoEgH4gjTXipvbK3S8nmJawE9",
  "key24": "5cmrDMt49Z7YKFXfNi3xK2qdy1bEQdxCGgdrUcqxHWet2MqYSaKknrbHpKQrNc5Gsa8X425WtNnjdhDWBtakoVM2",
  "key25": "25Wmanis28FD3DPEWi8vsvVvTAynrR9FS65ambNmKagSqG2KFYDoZbXGK2TKaSoshaGCNa3VPnvqRHFouCD6uccK",
  "key26": "xSbVoRNbGmEKnw56UPujABRUhUeVsD3MY4B9KfF8sKAp6oFxwMnoEyZ1TswjnYwK7yZWGuj7HbypBsEewh3o5aZ"
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
