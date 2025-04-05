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
    "4GEM6bdneh8382KmVZn7u3aw3AfHbFoFoj1NEbjFhHrN8qfgLyKGupZ5xwVFn9tv84Wz5F2n8jSAqdLES6ZnEYMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3femgrNMcUDXN1F2KfdYGhJyaagbF3dF291PezaQVUngaTxjvw45fvuSmio9ZUFp6K5HoNn9x7q3EU7DTcEcx74r",
  "key1": "4zJAthhQJtY8NBWeRgPAqpz4a4veNh1iW523TdNp4speCVUJGkMWAr6tXfYLMwod1zvdqjVvWJDeX3c97LwJ5Pt7",
  "key2": "DirVHQLqgdGjgzwQtDTkS3shktb4rwg5Y2HHCotEZDMJkL61nm3ApGvLF8zcDwahbMSYBp3pnhzWB3JpH8QKQTd",
  "key3": "3ngy75Z7G1S3pNMP3cgVA2tEZUBkdjg6YS26VKi8DRGv1QmJ2snvAs7eaFJYtGADG1iFgsxRYYxaY6MfuxvWj4b5",
  "key4": "DuJbTQ9PQHTgkUYqpuRvvVGDvFDzF1md281dUm6YKTEQT8JhHmuwhfdSBmTKfj4kbGUmTFhGjLnMnXBospNggij",
  "key5": "62U2o5VZFTqYEz4RYwAc4TMNcDTL1gY3PJthcG4BfcUqwAa8tumnRRb2ALTGbjtmRLrHYkJxAv9JShwpRJ6J2G61",
  "key6": "61wDskPC64H6ZMorkLJxH5FgtoQSp7hqLkDvFNLxdG1NFonCykah1SdUN9u8zVCnquHH9rid6eBCgMVeUdhQxZMQ",
  "key7": "2rAKmfpmPeQNzJmRtky1wKEWwmkavLC4ef5Fi76RFrbCUkHMYS19RtHr33iEg3qGSrvW9xP6BGHu36WYRG8JCWbA",
  "key8": "4KFJ8vU9PnBihuwYm3i73LZnc1VzYapwBe6GLbNnhutGYuDZt5jnoed3S3s91C4eMAYqW864Cb7hSTmwtGzhi5Gb",
  "key9": "aPXhZiV1zavRx2EYLd54aKs6i5PW5A5z2GpUZFsmzEMgsxkzp6aaXAyvQRtsbt4DhZTjGjCHD143HhWmiLL4iaY",
  "key10": "m4FKVf7DmhdBuqLBuhNJPJe98dePvs3VF78U415urRgffbjMbsWXmtHjZEEouWSvnNSsU45h14AY1WE134ZxV6P",
  "key11": "2PJbCRwuMktW99JuaML1SLyR6WwAZkcAypTjpreDmJTC1kKAywDPP7u8HpRMA6ie1WDZrvByMivNcN3hX48ua8DU",
  "key12": "3YDL4kmhy4VYo3coC7FThAq13kQB53S9Cb4uuD8d7PyvcY5aK39Et94M8pVgrZE12wSoKj8fD4xjGpvxehXhxWCu",
  "key13": "3kHmPxfeQa4gdu9zGapLCGDJvEGwsF3wNgCLwWfNqz5S6bQeSmCgEG2SFJkzwj33LLB9QBcsj5Dn9pfsZfu4XiC",
  "key14": "4DvLKeU6GbbjFE5VpFCLBomCwqGxAxa6nySA7CyytvZ9Y7MNSb6iLgJyhAueta5tZVBgYN2RsgxPyExkSpkztH7r",
  "key15": "8n74UgWLkVgwxoVCXb49SizVEvmtXv7ETuJjzP5iW1xtytZUEqLwaEMpRoC2BEug6WyKD18hSjgEJfmCiGzhjYb",
  "key16": "4ZF3xY1XM2moipUEyD8dJGxpRk6nQJDbcXzzKtgfL6UQgkZ4TEUDj3YRW298kzmkNYaUST7Etbeup7ohExJvKWyT",
  "key17": "3W7BVc6V31yEU1Li2bRoMC2LGoLA4j9Zt3v9xixHM5g836mXHqRd73yQLT4Ks6kn1Y5BNcSX2721H8SKFQhLuNGw",
  "key18": "5B6RjaN9r1a1PwwgAfjzjeKtxm3M9xAmK87nhxNzVbQAFHUKNEaVXdZAEkQdQ55YyqVaKkcAQmQGDfpsKzaCFC2H",
  "key19": "XoEFKrcez8AFcWZeasRaphZ4nWo6q4zgfyWdPKYAnYdpB739ZaZg3s6QiqmLN216CcwrNiWi6ZwUpijrdHH1H2d",
  "key20": "BNqh1bM1kbgJW89B1G7dX6hcX99YhQQYzNiUSBwNAsv7oRVb8uqCnPth61eXYaNPWEwYP9GTM63msqSmH8oiFXE",
  "key21": "4vV8CgEmS4oaDGVnxHCp3d1GBKAEBEb1QsyaDFyE6HYfNPzhnuY9RGz96CjQc698HNPDt2HnFyBNkhkJzjzFwjMG",
  "key22": "3U1xYmPybk2SaSQjYhjAdURuZpC1CJafZnuaTwmDKCwyq1EPGSB2wjieMm4PpUuGNicPxUctQEGXBupVYbhL3ZFq",
  "key23": "4xeY7jjyuMQaQqFdtihn6UD4KeHKhqv2kJ3u59wZ8hxHW54bnbFak4YTnkfME5Cb53V35etLKhUSAVVJDu6tZ5ib",
  "key24": "3VWigqyYbC1TuUhZKK7HUxy8u9otqEgUsho2La95wwqbyQyBcEeiJTixmt34d6KYEPCXDkbjzR2cUoNm3Hshw268",
  "key25": "5hH28akYZM5DwNAz1r3d6dQPkaj4GxbqqQKMLAr3M7s2YZSLVqdcDQjaSjUUYQKmLYYsajUweSP71PxMv1TECMaE",
  "key26": "2eTGyxxHDfJTCRWYGo4wumpghESqD4K2enpasAdASi88EvVEG5jGb84EPF8Q8Xqfb7fybW6Fen8XmxGuUtgxSq7B",
  "key27": "5g57safqmCi8MwKcK6d7FuJNAPax5qc5CG7MYkdgK38638M5UuZLo9tKtdVagM4DP5NahN1EEAVANyt2WtcL2kC8",
  "key28": "5Wnq1XAr4Pz4uPxp5w45g3HFM4fYys7Z1HcNADEC9sL1gsCb9oroM32GT3S3W96szApEsSukrXkzfYoeahTzaLUe",
  "key29": "4GzvH45QExAttMpGBPDpfLNZhiKNLXCmRZHrNp4XSudAL5TP7HigdBQozd5FYm4tbfSixZi7JnCNkVEhFZrTvV2",
  "key30": "64jiqWARMkEUL1dSHz66VF2STL2dm5CFrXC9qaq2g6pKN3Ep3VagobQQBWYm3JC43QLrZ1aV5RaH6iaEVrE25sDP",
  "key31": "63xAXHq6LopZPwTMhr5iBKQb2sgPj31sjVqmYihwksSZ7BD2SYRrisoB3bUdE4B66dTX8AV6jEwp7ofgtXe2tstY",
  "key32": "PDd8EUu795XYjzWBLj9VvhUJYjw13jCmGgz2P62RriA9dVs7TwKsTmbMb5dAyLK2bWcZKLmtdZGwSnTVbJZCuaH",
  "key33": "HjatJAGC71hjZkeahenxvKENBd9uZ9STtkfrERAP13YMrreUFuWtrKVJLqVA8pASdnrQH6k572PyuuzW1CyEFoW",
  "key34": "AQZhGdKk2mktCFwGhQHt3ZTXGcX2E1erfxcnCphsCuh7Vx8bHpE23WrSk8mc2bEGznEc4KrzVrDAtmgNoQpjqxv",
  "key35": "5137BUbYYMquprnGGAYkEM2wfs3pJC7gDwCqBh9WoMD2KmcREMQJvN2qWS1SGMM27pHr3hu2MmW1yYkSW2uuiSoU",
  "key36": "4VxYE8DtZ1xkZrMK2oFee42wxK5o8VdjjPHzSTfDcrmWSAJBCovL5pyJvKkcYM3JXVn8v21eKE3fasruRYywUm8P",
  "key37": "bTFSehaY6XjwjdvzraPnpEHYvDGEShfRKFyJfasTD6G87Zn4g2Nb38MceYYfMstK9XWAwAeHf1nbMSZTFjD8jDx",
  "key38": "3bbos43ATu8Hy6KwEiNarUaAvMvsMfgWUxVqR35dw15K1U7QQXibTYUf77i65rZCN6uKpEqiuaS4zPGnCcf1rWvF",
  "key39": "37JZLZvQPFxvENX1chC85PyHVgRitoQtGZ3sXrNvfq5YzwmLzvfmCoaimRtav3skRiPhfVuJZVsUovVhUiLLKsW1",
  "key40": "qAXQrUpBHneuQuTPW4TKumJUj5KuVZuN5xsn5SQxxz1r8JdFfdmBS4DPaan8ZMa5mtu56Mp2enmFt62shUP2png",
  "key41": "5wH1Aa3V8XZwaHBij2FDV5edz4dfsWbLmjjwSWN37r4sPCzsE9NphNWs2x7mUtKwZSDBX3QtjM1U8CQcKxiYUnSs",
  "key42": "232PrfZY3aoNMncZqMtnGiLdcbWZicUDzXFi4fY9UVHtQ7VNUrLGBH3AXePtNnBStvFAfg3LXPwRU4Stqq62hvsu",
  "key43": "QRgpLz3azsMz8JWQd9XZ5cD6uU5HXNtL4gsUhzsPo2odu37Rky4zs9m5JUp8WEptF2bfGW4sBbqzkL5EvigGEj7"
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
