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
    "5vcJugRpxPVxBT9CYCiRcRXjTqophm5CewzWiySXrwZ13gZo4dwndVLPZVeVkioUDgcgntNCgVqQ4KnoYXAeoqoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tCSgTUV4K4Y5ubugwwWj551PmyAxjrDdEm1VLXQj7WU5SMKEA2S6ZNJuVeMW2BwB7jjmAHNcnV5fDVJDsBkHviH",
  "key1": "3M6K67K4285YCSx11FLiqhqYUsSDxZAYzs6ECngwvEjekxgRxHJeSDhwThhusjcWPw46DJKcUs4BuuqxrqhCtLDT",
  "key2": "48xG82jDiJFPwzqK8RzVfSMW1qjBjZu2w9jU2AJMAy2oVtTgGBanL7EzbzKrz6z9UwhN8VmDBHoJrTHbAjGyKJb6",
  "key3": "FdgyLDnLor5Myfe5X3KrnXMFTUvmvVJhNXVR4BmfobNQdRQFfv6p7gzvTuHEqu7X8mRrkucT8DJvuif92vFrKUo",
  "key4": "3Ur9EtQnVv7aTvVFU8evHzB6BcX9kwEkspZ4yzj4sqhPQeHjYEuMcmToN9akKjEvFbG4JDYGasXNMXASvM55Az9B",
  "key5": "cGTFZJJM7XopQUMQahF1myHeab3HGDjngkDPbayjGtZP1LTCS2BZqSmiQCM9fmwofWv9hBmPZU3zfoKq1A3UWx1",
  "key6": "4ZZPcoWtgXGCAWQ1tMYJV9YJK9vJPjUBUVmDCv87kZio31rLRBJ4Cuz8k3TtjpFxFx3Yq2sYJ1WTS2CHbSf6uUVy",
  "key7": "XytrzfPTzHjKtH234p1x3Cbs3SSo6VAkLWSkUgnmfqrHU2RSaN9CJzLP4vPx5uxQm7AD7xX7cnJ823UYQKx9aFj",
  "key8": "34LCJ7qYufo2x4kGoGjQPMG74FGG9ZmeZw7nHkJ47VWRx4Ps5nMzt2rprphNBcs98q9EhWd7CgbCD2j3PJxYAgm2",
  "key9": "3FEknfwQGSZ5c1rwhrrpFLCeZTb2UbGKzFaPEHd8LsfAV1NT4vxgcEJks1A9jnLGv8muSG6U3AJQoXvm69HGaPdP",
  "key10": "HwW7DYgmgvY7QrE758vUtUZRyP1Zcp26vztQVL62iuamJgXbam5hyekSJeHhgGB1gkcVgrcVkupVJpHLDqAbPxP",
  "key11": "2VdejQnepCwyXzYGTGQ5Eh6TvFxtiPviYyTBYVhpxmTxRqxJQXYwsBSwwuMNVPjfLBB7owG73DJFdGgKpKvqLNFY",
  "key12": "2GR59pvNWVrrk7SHGYi8UUX13xkzR2bV1Q7A782R3hTsrKcYA9v67BFZ77EEVakJZa6MamwfxPiQ2VqRQ83ZRYUZ",
  "key13": "64tERWaomrNT2baKjQYcM44uCxkW1oDWXf36sC9TXBrf91yMxRnM8suYGj8CNMv8iZSrAtMbTM1Zso7M7b3etVUn",
  "key14": "2jg7GG6CpXJmz4gVKhhPvLuDcsNLCfHomm9kov4P3NjGV2KmEHaYT17Ny6n851Sb5o4DvxndHwyeuP1WXBbxeqJ8",
  "key15": "26rojpNyphz4VsKFY7RnVCLzPg4WJxVEqwSgLZ4Fr3Kfvsfg3JfuQJaEFZfsSh9tsqfXycjuTBJHNaWccn3HeLoV",
  "key16": "YVkeUUa9wkvv271NBRoGR3rWhEn7YhSHXQ46SyZa6eRFxSyqsUahq1a8jNP11ig36JfiZWZqigy3Bd42CPeakea",
  "key17": "5QzKyzcHe3ujmYgf1NrSAGf3PdR35J8GZr4pUixoTbprPzvmVVWDYtY3PdTDoVEKb25PaaM8grcBBhK1rkMsFvgJ",
  "key18": "4yJk8JLvi1f29xuZdK9Wf2AKp1hitXrK4nofXwLS5RkuEQZER42qEK5WFLexY38gV8T4gaP8cnQaXrzo7Es3zj4G",
  "key19": "65vVnuERhSpanXXqyt5GLdjKpvUxgmoVp3wFrji1PfuiVfepMJnicDVmGsv8xjGMrBUuNZP3wmqnfkmZvZxLWgb6",
  "key20": "zpwd5ozxCPEQdSPXANTT2t2EcssBKHtDUNmaXXUB4oiZEsEJCNQcKGXiT5z4UkheW1WdnqLwjVebcLsqShQR5Jb",
  "key21": "5gSBQa16X4joeMjncmzCDKME26etKUZKaEFPhnemnNoh6H5nYHavY22fu3uLLJn3xWFojaVXN1DisFEknQDLJ9gg",
  "key22": "TQgBertWBZGsGkchQYZySvB4BgEwsj2nDV2f8npekD7oyw5vor5jjctyEiM7aL9vwdWva7WrBgb6a3WJyjZxeds",
  "key23": "4k7GqZbjLTmBmBBCp3QQDZZww3hhXsr5w5kT87YB53BWskyC9eG9XsxhDVtX1tvpkk9CGD2LAumbP94rikn48c78",
  "key24": "3acvp73h5VU4Y5rdSceVgXQy8kjccNwXiQC7i4zrQ8df5Rc31LrQsLN6Cy9gmt77dbKG25zCEX6d3XQvHkDgjic3",
  "key25": "4cthM5SuZAhBwkwc9QEuk575gdKHQimBprAQXpkZqn1QagcmjdW4GjAQ27pwgUHoh5xMtBPM5UycMWZxjAFSoQtk",
  "key26": "ULMbSqJYBdzcAEDEDMSFgbYegmRdfw9XQM6YyCUSSkrWAV4Ku6YrwK3a658HnE4ihjdvKQbJ3qfAfkpuvSTDDQm",
  "key27": "5AFqmcGURCNneQWU5Fy7x3ub3NQnoQT6QxroZiYygwWZKC5RFSw9eh8YWKLSDQbEdc3C1q4Q95PR3qUnk3HtZtov",
  "key28": "4H6rXr5gcKSwpobh94zunjTQowTjZV4BSTEXQN4jdNDT9Jacumoc8YLiHoxB7PX8KXSwwns3C1urrxYJC2GZGqg2",
  "key29": "xdeSb9N4csj4ePGperrj8kSg4Zx4x5PiwW9B5KMNCeJnUPYKcLWtP1a5DhdFC1ADkhV2op3dF842wzrakwFvF23",
  "key30": "3FtmcG1Lt67ScbQ7A8pKzWgq2N9pJpd8HM9vNxb5eGrgyHSeCHSFjsEvhxqHL45HFBWEddXgLi6VHgFEAHVDrSYP",
  "key31": "4Tvfo21QT2G39TuH2jKSh7kxNt1LV6Cbpr3Uz3Dwiq16cZmmHbEgDzJdDBKFHjTqg5shsPP229sp1bz8iPYrYYRs",
  "key32": "2uTBfEGiVMPptXWByipWAj36pagUUbHRgs8hAuYUe9uRJLobud2Ff6dWxziFg1xTmv2c4h5vmVrwNCWEZ9RbxyFn",
  "key33": "3BFhF59wDUfZgPQPsDm2qAPMVaHY69aMbFWGhDayta282FDYe37fuK3TY7uC4socLCpeaoG3Vj3iA5Bpxjp7fZMM",
  "key34": "ZpFjqVyfAig1A1S6G7VLKpZrEn14VUsK85wWrUxcGowB5CUFLEnc5XdiZz7t3jmwHEGED8XsQtCBc1ZXNchpFcP",
  "key35": "2t6r5usQc1DEAuX4NxMnwARDbHzKXUKRD72LtaRa9gMAvmhJP1vXsrzsijm35989HxqAu9PePpf4cVswSvmfUp1V",
  "key36": "BxMq1qzUfP9f7FsCDgsPiB9L73AQG6chvQtt4EwozpE5sifCmLYubTAGvi4VE73VdTC7t49H2WJSFGgGBApfwi5",
  "key37": "5GWgpbUamscWiwryjvstckGvSbhifECU8UrATRLuTJSDTx9aoCDaarwBchxrUSL4djPqq78i6HXZhkYNk3BpowrU",
  "key38": "2UDNKcAmtT7ZZUAeM8vMwuPa5AryDmNbT6y9zkyyStxfGsuqbA72hqg7F2zncTUgBAokw6DkyRCSA8kpetDC2dkP",
  "key39": "TMrT3ur6Zq4Z41fsHqUX8N3Vr9K8RQMMojrFJyLAQUQxMZEM9UKknzzGYWQe886pG4nCcFh31mv9wPQdD8MwLko",
  "key40": "Zay5tEe3QPzyTnxUqW3TxmfuFmXVdUAsmotS9Mn9ETSStBGjDNZxvGrzBXmb24dMDkpgSfmGCoUBXyJKWpUEJiP",
  "key41": "5y9ozfFFAd2q3c7ntYLDcCrY4nqU1PiyaQcNGSK7NEgiEUpzSU85SL3HA7ShEMywAvN3RaaYTSdGkom3mmCr3jmv"
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
