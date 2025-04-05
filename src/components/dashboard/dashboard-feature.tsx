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
    "5vcCwXvbRYZaF3mNE8uejPjbMpRs2y7jnteX5c3wZRmFpeGPdwaKJhL8vocULXf4YRiPsKbAdRmhn64ymTCegRZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KwA31V98fwTtMmMcjLX2r3VAXyo9jTcEWp15hKx4CVf4TeJXFAqgHc37SVftpRDhV8oWfzKrX9An3n9t9CBJkNs",
  "key1": "4g9BuAEt8urh9sNPSQj2ts4yo7AWtkYLixEP2M4EDqeWMBNXVaZqXCZEm1t4xLCkw8pUQohrjgmxHvevnBbG6bj9",
  "key2": "3gUAUKHvriVpDXyHoPSxvyLZ4U2F6uL6Vu79ugCPghBHsHytDh2iS2JkKhy6DjgJMij9EUBGWv4kH2PZd9Ed296M",
  "key3": "4qjbgQ3aZkacskSx2f5iLXAxVkJBWrQGCY5H3kCuRjALAmrXRURBYJRT5CZfquBEiHitqs794wUWtxSuT1BC9Sa3",
  "key4": "5eCrpDvgoT1pXDzS83k8MhVzQrwCKSBcVAkPj1wThRHufQvpY4q353xTaBeXvnVkyDKR2UET8exwnrqiamUG1NpL",
  "key5": "2qsqDr6HVzx2dVSKuxn2ZKEcxSZLeUCZLphdstVcdK28woAuhhwmnPk33um1bCzytobBAyFit2vamMC5bQzk4zrj",
  "key6": "4PFqJygy6kFGdSx6DE58A9diMbJRyDMN7jscn6fWnCamxexmEU4VLW3SSgfbAncDkXkjvgAoWGRi3J6GGcY8CEWw",
  "key7": "uytSQLhRHTwou3sR9kFccghtaYhb9U6v9K2vfQJmrnGiC9pWKMkst2ibeF9AACHDvLmo917bw3zbEibV2qZUDub",
  "key8": "3ttRazzkdavaoQegdUA2smhaNXxnYznx3WUrV4FDtJ7Q5arhA6ApRf8pgnUswKfzvdQLb8cHnvk7V6dVpEbecsZf",
  "key9": "3ACgeKAdnA8maYnV7RHnkoB6fmRX7Kqpnj5LTXfnRMcPeN5DwBMqiGnSaeB9PARmcK6nzejfi4dWgpPcZZFU5RCv",
  "key10": "5LDGiaSrMbMqU5Wqima1Adx29Mm2g3vDYyenoUi6TGvRiXiTRKSU9TwYkJgF6ZctZBBUcEYDm5LqSzX9d1TCFQ3J",
  "key11": "3z1C4FemxN99Dzz8xsWCwHCgvvapKEnMnmqgXaLyMeMcUwYLTWUJHx9kwsX6qRWRXUmEmcEMVbShJxSciqGFFAE5",
  "key12": "5nFcfhye7GSWGGViT7cejnd5urURX1vSUqtPfaEzbkebzb992V7ePWpe3VtArPvmxFvYZLbUDKMUjd833mrMZEDJ",
  "key13": "26wf896NGnCzYJY83nL4u8oTR6JAqoXmVRfG9BFaEFFK3GWjDZZgSrPyW4Tb36UK3HdCqwAGfhGHrwsHZCgrrR85",
  "key14": "2fc3ELSBqaHp3oeD5wozTZFtQuY8SPyUU8hFj7SkVKpgcXiXvtsUNZKWjwGALWYGqzU2GQwPxsBK1eAGtaYR5TLX",
  "key15": "3zrrtE3H5aJ4ZELDp8ox3K3Ep5u86DsYZF7ucc8E1GRBWNb42u1o8qY8jhVefmrsgyvDo9ao3XESt1gjKs5NwGP2",
  "key16": "4qCaFjs2dZWiWndZ3UqdUU1Gzk2sRgNG9iYjRG4sXf5ApiKJPqz4tdwb2tuv3r3Cr7WcKD2yL7ypiPsnvkAb9bVE",
  "key17": "3F8YScBQzeTU9KTfmSAQdS8xcvc4AbAd1TLnBwhfAbT4NWDEvfm6DeJbc6LwUAyqmyzDQEtTAtckVm6gGYe3A8XD",
  "key18": "26DGszSBYkPuTBzu6dnTYfFt6rK1JsUdXEoP7Z7BZrDUtQEXJQYV8PsyHhtvH28tuudYgWyShYwScjJhnHrzvhDb",
  "key19": "4iWpSdRmCdaRPN3Fye3KaB68AnawU5fpXTkk2zqZGQPve85i8nLmyMc91zM6d1R6AYnBo8L6ZWfwDjfiAN4TaL7Q",
  "key20": "3xcjBDvW2oyTARf176MFqZhePpD51AGJKZENiF1o2waMy4qkScKasuxWjgRZgqn7dpcSf9Y6joG6CNPrUnwPCxWR",
  "key21": "4E7h3jEooHxy6FWK2vD3kHDDTteDCgaMWmPoyoYvAkisLDQomCrRvhbHxGrNZzC66YDczvFEYHFUcVgpM5JxB3bt",
  "key22": "49XaNEz1gQYXT1G12SqhXqTcNCaHCHztwiUx62qs7j6pELRBtu4cryYHnPVyitrRkfADi8rS1fjBEwEnJiT1p2ZV",
  "key23": "2BLNP2AACsm2Up2GrYZakcumJkp648aaeydCPrFPwnerZR5wj8rgnu1i43LYn87VPnJa55EPkhRqzMshWu6WCZAj",
  "key24": "29wFWiDsRfsFtuGnS3wJf85MkdcGY3bjAFubKJP7DVEe4nLgyBNN6sXqXP7qhNhV7aAwDtNJbnb1N9cS66UwhmNW",
  "key25": "3YpTW2DgA8SuJD4QqsisG6V6HoLKjScEdMZasf2XDQ9T2BGiW9UBDsFc7AhWRbYdYqmqLH1rtXxFiy5UKbzZvkZp",
  "key26": "JbRKQsCysXApmNhiJrmQgp3cQVgjHL98sRZ3X9UE7MAguFUdvG8KWaK4ddYPXem78poNgaPhcLXc1RhZ8keJiFh",
  "key27": "b69kjeKQVLzzcBxoSFdnNBsLywMdSmYxQSneodiKKNGx75YidkMoUEDfauQdmw24bnnFxk9kmDLVGTocKiAdpoG",
  "key28": "24S93uShPp5VYQmFxg85Eh55fTqyJVKX7rrEszXBNPDGEyNLdmhidd8YkYD2FJkbTTa3teMgkrHYZ3PuYX1Pp8oW",
  "key29": "3Sryc1CgrDBKZfQR6hen8EbuKtw9393WBvThu1E4zL6N7MhoYmVQKGjohQop1wbqeNJcbEy7wrjQ7B1vHsKC5e9X",
  "key30": "4R9zy67qFsjqWPBVG2dCfy7t7RJVj8U7Fuiuof6zdb4tTHK3dvW82TpxVd7RtFhCHZXdYzLi39Z5TVkrBLKnCHLF",
  "key31": "4UUoJrc83kg8pu5742vFQN9hCBcK1sLt3ziF6etq6CXg3Frcah468C3gF1Q5onmb4An6UESo1db4F3zy5p3qgTcM",
  "key32": "2uNir1fbLMA6hjqFdaMW1jtneVqnvu9kNiiMzkVVntZ635FiAe1BJiQpUvrQZctsgC6HvSPDaYgtV1L6TWpeXh1Q",
  "key33": "32toViDZYR457qzzbnbbbtWz4hMuvGfboeUKF1K668SiFjAc5HdcwWE6b9i2yUiN2LbWkk2bya4wpayPQ8wDDrm4",
  "key34": "3cjLgwuevNQbZAcAjCT9oC327Ai8VpHuuExq2WzVPELFPoPs83eWtmFHJL7vq2x81p6Fai3Nbb8eSnz7bAf1xVvK",
  "key35": "3VRQhZce4fQNnyYeX77S5c3hsoyBpznBLgVADbFVD532MxfBqcyfWtfvxpozkzMUQf35b9kuUnmJPdPzHK4HujpK",
  "key36": "3ocnS2bn32wqjSCpgQzo6vFUu1aEWtAL7RgU62SReH7FRwfSQoSG5ak8qEi97KgyP4v1coCjDo6zEba9opLcE7PG"
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
