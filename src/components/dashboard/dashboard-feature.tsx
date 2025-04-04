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
    "3oNXuv4t3PqJSjcksUygdFTykBk5uptgCn1iS6B7zxEabVSLpr21GSvkoyp3FBgee2LTiPUp31xkMByeoPXbX1pR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VRQWZ3AaUndhQsQ8BKfGgzZ67b43xajCyhiQFYLcv36MKP7YdXTyJwnvhgfWhbQGhkkAg9FUqXUW9e2x9PAF2Kq",
  "key1": "4pD6LVbM1yyf14g8E7NozE6VmXw2ZtXWQUpMKAw4JsynbvF3wYqYxhUKPaaMrpnpsKSbFaia7pyXECSHT6pN5wuS",
  "key2": "3nWJqkeV4LCJmyjSQ8yD1LTHAQbayJCKRmJHTgAcnoucVX5VEqeUjrVyuwkUzyg6q7FcD6bXSWXVArT2CkxBh8t3",
  "key3": "4v9L8y3RGHRZzrkgFPdFrdJX3dLuPAMaL5piZE7nyDsAVvQUdwBsEfYYfW9iYRCGxLxmiWzXGuqLiyJxwdD4i7Jf",
  "key4": "369mjiF8yGschD9LjXGVgVhg1QSKaMLXBeTtKoBgBRUsr8jixY9Cip58Q9iu6Nai3uHJmwfe7JunHW4nc2dFSbS",
  "key5": "57UUu9CVE3bBMu4i5w7HHus3P9PbdeTH5LY74f8mi15Gw5XbgqmJAMYcSLfmxGrRd18gxwF4H7kmGoTcauSKMNEb",
  "key6": "kro8wismgqufWxGuUGWDHHHvZSWihPXjnFHnocYvYXdSnT2aRBLtkFLTNdWG3mc9nuBCncy3kWM6YsSCUq89YAB",
  "key7": "JwvsCvcLEeUFNdi64ECS84AYd1nyB4w5qJEMfFh8QyqbFXJ7n921sqAV68BxVZogPDuA4ZuWE4KzEueeKA48yp6",
  "key8": "2s7UyD3jDD87TREsotuMMZHnxqZCSWo4XNwVWkBV9MTqyNCKCdexSRroJ47oFWBXPKTNAjCR7SA6mt7AonvkpTsN",
  "key9": "5iB3TnWbwWA5uPBFrvCdXVLasTCQUExwNTiD8jZJRk3oeaUJR3tdc7WgPpLh3SpxV1D2Zo8NpLSvKkKFRBUe5ro5",
  "key10": "2KjV95kyYqBmRMBCAZ2WwTqCXVc2AWjijHjSEYHzt5mu1soaRtwEsgV23p2R8XFoJ1Q9sgv8vJesqgZ69GJwcQhs",
  "key11": "VRWVQbxsnuE7oPigQjKJ8v2JDi3EHHdn8CKopM1MwqJ5Zw6ZQNZGWS4LepVo4Bsrfs6BzMpAdtYbqBhkMsdYZgr",
  "key12": "2rr3tuF1Sn4XiLVfyxa8Lsub1qS27P313TryPLHL9W87BjtKSnGQXDqGuLegTKjfSdKiHEmRC6CpzYqD9UEoNxjn",
  "key13": "UxWTffDVK2JL9ADriJHrSP6yJPTRwUXXa3L345bQN8nMtW3VqoEba2Uz7QL3B4C3SavgCeQnAfStvTo7qAbBHHv",
  "key14": "2tmpsnxuuqhjr8ELmNUFJ8okD5kWGaocF6ETzaH1JZGRhdYdp5dX9aoKq1Xcqv467fxksDTWMmgUS5SX2mZzRqTB",
  "key15": "yfWgumNzT7pREoFRnaZibYFBiwqk2aeSqNxyPKiqrDD4LtjS2UDzMLHBX57iMVrnsyoKCDaEJmE9bqe8337gAsK",
  "key16": "5u8wUhL9zUPfyxXvxjtANpfDL2TxqHgdAYE7hMHL5hTUqUNTUVxd47ymRQuqkV3RHk1cr9WrQN4FpXdUAdTm5V89",
  "key17": "2TLnmL5ayA2T39wmpLwJ9YcnU28mJKDLA1NWCAqWeDu2xMz1Qt7VE1udLcwcnCUi6dFKivznyP6LXFLi15kUo7Qk",
  "key18": "2o78rFD7V7Uh63kkWmtaHGVLecUfnQMm82kSmztvUxsnp2MXgcpxZ3rS2CWF2yAMrMiMWbqr9MJxfKdTR2YXF1ny",
  "key19": "23JRbcQH1nfemxTHgVvfEmdYyxfAn1bub8z1ezeiEKy24RyPFGwW5knPY3KteHxhCLJ2r2UrAwFKeQ4iRhcVfCd5",
  "key20": "4C3QrKhfJvXGWVFkA8LxBmuECgQaEdZLwMbKDTvtQK61TpwksycrbkN1v1XoGeiWjTX1w9cRMivrxiHrcP8sTR7B",
  "key21": "2Rkqf95BDF641Mx4QPTXGt88297XhP8jkNRVVNrRpxAQVn4EBU4es2snFELNttgQbvh8AnWCWUKR4shPaMwnmR6p",
  "key22": "2vFo7maLj52Psww68JfqHRLkr2ZG9y8UdrbgbZdt2QQMUu8vutCy4hboycvW3PfoayHFssQB4uDm7bFKWiD6xcev",
  "key23": "2mq6oKsAypcjeHCUAddPpoGqvnGTVmBpKB2YgQPnTXquteyER81TUrhk2e9adsHsyJ6RW62afquuwrjfGPrduT1c",
  "key24": "2vJrRxSvmXeFHcNdNnu3k4X7zt9P4gXADzxGKYXvMEq7MGuhzbxXCY9w3hbze5BeWSKUd3txKFEAKV1f2MPe1488",
  "key25": "x4S3rzGREXLyMt4cdL2bAWybtYmpacEz1xchzNzFogkffBmfCbS6eajBtS23opLrZ4sLT5GAdM2d9tqQpG3Ms3y",
  "key26": "GWtGQB7rgReWM7bjxch4BgGfdfRs6kh8M8f3NtoNDECsu2mvp7zLbjs1zVu9Q8HxYEBLXA2qiyDQvCcW7bQse6x",
  "key27": "2V3gseEp5wv6EVogkV6dCfvNbc6sBQSxsfwaEmFSbp2Mwuf8bjZqqCt4gQvJmxLrTGpFNkMeK9UMCbX9umnhNbqm",
  "key28": "3bkNK5zAgqozXZqBMiDMVxxC4t4AS5j61HjMxNyAngT7huwaxqmuxS8jfZPTtQzwnrKsuZ3ntCWZoemK62MtXsrR",
  "key29": "5p5wpLuNWmVQABUp7RbpU7rGfd31jG3aVygFJDWv5q9oQZq2qq9ot5M2Mq1kVYNH9AZMDvsFP9qVvZ5Dxvp8Afee",
  "key30": "2ETRy4QzrA4Lb2DmU9J3EfQhRGxMNctw9Gp5cuCEzEWmuhakoUrYs7XoKjymnkzz2SbmDY7mjbBJwXezc78jDLYc",
  "key31": "2H5X7nodbWR11GETGedtc6ELGrmdAKMj4FLevHdpVf11x14YD27n9HLnvSBJiCCzNJU78b2XgrNtYRuNsGgiNKYC"
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
