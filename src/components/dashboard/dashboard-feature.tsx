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
    "2478aMFtmRi8MxnuwaZp9gZnCBhBkNjv3EEZRsrW8evafSuow8QuFVNNvFL5rHzcdC361KiWNR9omTpCwohUDjGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CvyftGfS7BS2DQtrgUNqj2CKRbbep5sZByw3HtPdvDuE9mmUaNoVwce8XUrHhmDi1jWSCjGCfh4sqRhmo9UmubN",
  "key1": "2AgpFFf1BthSV8iLig7EaviHVaSqDAoDkAGHbKiSe23pZEZav9pZB98taGwT47fZLzMQYpmhbfD3xziLMrdCKKPe",
  "key2": "29zUEusfyYi2kZTQt4YZ6AkBU6Fk5QD3qtEXtmEpzgU936RVSi77KDPRGKENqdJU1aTuE7PA7gdgkWkVf3QUSicP",
  "key3": "2JqdWkBVoHtCdjeCCGhSdTmx3cSZ9k56FDG5Scv7hTB5AfKCMjH2rLxc5B3ZSvPa1qaqCCphqVqKWP6FmWpr122k",
  "key4": "4pqQDhCyYeUVpejSueY6Yf6YMrKT3gvczcaiP7q44CfdDLNYLTKyiQPJHp9XbQcTuZqi8fpWTaKLhBYzDsLE8gAs",
  "key5": "4DLERtvs8iK4qGBgQ5AxtDKqZSLqQ9zaVxQTpMmiHeTCWf3yRYyMGs1QasRvCJon19pVrhe3KQmQecfAh3EtYVjx",
  "key6": "4NHdVGUov3kA6PAzh8mbNZ1crxtcN67rgb9DCRw11DVFzNKNioQoawZjuRUfQ8CbNixrS6nGZzyGEH8zrNwezLQY",
  "key7": "48LXDSDpwy7fM9jcHoE4pV3WmbQiFhJ8rKM15u5vENuBpEcidnAFHqviFw6o9qoy8rhEQS4M1idBf5XQx35koUVw",
  "key8": "2F3kWsHuK5ZpMN9HHHj3sDywWVrK8h7LH4rFopLKazBnWWLVL6jmuvt7wppu2T6zTteXNh9VBo3LPfoig4eLh7pS",
  "key9": "mYpmk6Wt14vghhiGuiPejJcoZizuHfMgv6ruoXN2pY6krpvhM3sNySBDjaYhU6xN5v8kBvmbMXTvGS46umReDe2",
  "key10": "2mZkCw7NoLMQHS61au1JdnJ4Hd45zgu2NpwXEq5EDdKmwUbfSWdYvDQEh5etzntEp1ta6KkErxoNGPojU89VA9Fd",
  "key11": "FiNmR7hdaVskDrBS2FL3DRdY1P8rdwoifaMXHWztMCj4dpoSUu2hbKXmtJKmT6h4iDm3HAttmK79b8B9AwS6pUq",
  "key12": "3Ej64yv5BFfPppNSutCx7uAycPPiFwTRz1hWP2egAAWR51gcM26TFMEc5G2RuxWoYTfABNmeLxrksSpVdpVKoMec",
  "key13": "YQuxQjgDRqvzrgsfjWbcSX7uvtAkAbZAUp7mbcG4zBiNa1c3EXgPZ5mbbztv52MRQgWEEtBo4PNAcy8BrxAb8Er",
  "key14": "5wQFHCR5ZnbubzWLPyyDyoX9PjMGeFBqLyZs9FWHLLeN8F7JgtWtZQug2ckZDLueLLTLdsx24GG5UmkgEMRsZUL1",
  "key15": "24nqEVihoX1okqAVCRdfZcjau8guxtz8SJMgEBSHbhAUWEgmziupt3787UnRigazZp9cFXjj7JAjV6JofB9nG7j9",
  "key16": "27b5Ri4pK6GEV2wDhvwfbUaXau932bwTy5121jqSFdaDiqceCCYjWASX1N5o88GsMt7JnmxMcYdsxHXz2rEQTsNs",
  "key17": "gLp9Nrua1YTzF8RuiMecrzbLnPu5bJzxMNkZVqBCNAexFgHohNM3URS628ZbhGmF57rQ7f3AfTThphi5cb3DDjU",
  "key18": "4JVKCfHqBMbVDwLwM8vjEEKKHZtSPUDywQnEcgCF5B61o3i2Wr6xDTbrkKkp1mP4nPfjKK6zka2WHic8y4c1LzTt",
  "key19": "3xzdmLMaQes7ut34LXYwhvCmt7edPKQop8cRf4F9NP2553qzQBpjJ2sQTCd4ZkMNFHcZfZvj8oNZeHw162k8vMga",
  "key20": "3Cn6WnJa6HT1UhJviv73UvxBzuM1awpzNMDDkz3YkYSR7q5CfgoYN3pZgPfpRB3LaWuXsWntxkse62Yv95P5P89A",
  "key21": "43HLUKg5t1P578ixn4hk6rVDGhPpbXgazYz5fKw32uSdB7RWVo8gaidevXFynqAj7o5jnCFM1wuvqrjTbHB9PDvv",
  "key22": "48weCoZW6hPhv1M7WYWvii9xZNUJ5WW3cWrmQomG3ozDtpQArM5FCJ65uoaUH3YPLx5kXF5joB2rH2zLB7zgHyyE",
  "key23": "3QJaALFcXS7SXupEHHFBMLgKbPhC6KQN9Jo1DyDuxqVyVh4TJUgNu4mZJAKxAyjbbtq8MWZTggcqvUwMTv54g42T",
  "key24": "2p7sYh86X1wrKzv7uiPELv7vVeKiKyfTDbBCg8mYunHF1ZaTSB6spnUQttyqpwn93F89TnekFQDDVizaV9kJs2A",
  "key25": "bReJe5R8PXzGcDBAachwVmWoDBtdRjZyYQsQwwHkDpgG8w85ufhhCVRwCBteyAAXeockedNcUG3iahn9BdvBhPT",
  "key26": "4bCPRTLF5ECv3eCShA3sUYo8n2fJgtNWmmZSfGSGmX5gZjqrDaL9WUD2B6cu9cTAb6MXKbvWsWA2oN6kPGfpSdkQ",
  "key27": "3993hYdJsVSFSJus5v9UQYTW2FrVQF5JdX3VRyLHA7MfG6TQgrSNCfRSQb4PQdoQrMdt8F95uwyJDgLAhmvGqNXZ",
  "key28": "4h1zUQzEpiKTgt53j9eMAbZq55U3rN9aN5bER7sNc7bLyTHCAd6a5NunTxcdG4TQwDewNtfuAhg98RAipvm3djvu",
  "key29": "2E6rucDwkE5p4rsartBGrLcQT5KMmmHbnQ3k65X4rdCy1BxJtmVYw6XhhjtMkKsd87seqkBvcKBLxmxkQbQervH1",
  "key30": "55doM1qcghrGJ2AM1gMe183kwQuA1gYUjc8eQYYcDuvAD8dkd1GQJoPcASCDcUAvhm9aqhEJSPkR1anrzUuwPWcV",
  "key31": "3wEtRfwpcmFYdvJHtfoQtDDjcbdMUZ1NugWJkDGBDnKLCB3sxdtf7mjahSXNHWW73XDVZp5RvzYmLRSTqZJEcycr",
  "key32": "4vE4Earnk5YsCStFYfg1UDruu39LGLAqcV5GBpaFxaBz2NbnEEpMg5zHqwfW2i5km2Mg98Y3aeCC3DauWheW19Yk",
  "key33": "3Aosrswqfzf4K2JjdQ7ajwcyTa3CiyDYTZGGjDLouAVsrqSz7BtLRonu6JDjeNjvyEFNDeuS3A7Z96TU4quAnZZG",
  "key34": "5W8EckazDBub3ryVBriF97QAPuZiCa8ox8S2PNHkWYZ9dGuucbve1bHPssCbE5XcQjcDjcevzqNs8H5wCLMnzmtK",
  "key35": "42JVfmLstuyXmn9ekyFq5rVyUzECQyxUMmWmWXAoEJfRwEeeKyfBh3SpSQ3A2MQbLHZLN5D9VHQLXbPHLoRW4V3B",
  "key36": "3GVWHBobWupmxcNqDWmBxwCsjMBxANcXh7smEhVSdyqiyHEkYCfDDqJWSP4C8cNUrhjGjgfgpzvmMsa9E2LSxfQk",
  "key37": "4d97iV4bE5HEf64VJBbMmS7tytxDhUWUF5SV4JYs7zUiYpGzmidFEBMS7RihCozKyYR26B2yoQC5rCctUmg5iNSA",
  "key38": "5Zcp1h7X65WkZJXjQdxvyiwE3tKKbM6aXgbdj23uPDUZ8yXfjDa67xSKvuPVfcHdY9bb5FUVDzbAH2rP5i5cHX8U",
  "key39": "67LzKFEjrJc6fQrHcKpgq4cM9eV1EHaxzvzrbokcW5LrtQUpxPx7cDJqxYKqN7w75RArNQQDGt4ThMqchRTHVnpU",
  "key40": "2HA4BtdpQSi9Wr872dSU9egUQJ7Ba6LcbsvzPpE2y2gEmoqenG3eHayPGkGLn6joarvMJjQ3qGPb7fyLGGCRvZLF",
  "key41": "4mnMnLv2DAq2RdwfARjX52TstTgGzcbHQQGQzfZyyxNSk3qoVqQsBxvAj3AruGBTCYAxriVJcCqDbmvfX92JE6vc",
  "key42": "46zQ6FsYexfmgKAraeGUPKYUn2KmerdwASJmXNn2LpiomWX1PADRv17vrDPC2v14EPSmiSjow5DTzyj5v2rvJBUy",
  "key43": "5X2D7Wj9xULJGtvxdEtViPL17C4mQrLMoeT6tS6hVCoC37ncxXPmkkbYiG17fu75eGx87M4L9pctQkKZxD1AnwXn",
  "key44": "4HP6ygJLVxn79xEvH7rv2CvGDYjyiKbqhz6a1SM3k1fmbc5F2HCFbszUyTHrsXw6HALuy3xXRXhyxx6J4u8iiwtx",
  "key45": "3hzD6qHG5ykkLjCvxH7Lzvp9jeTD895f82GjQoBPGZdA1GsffSidHBUf5uRHUw8W5vU5xipuWoDKMW6HRcP5Jimh",
  "key46": "5oESs2v9oQ6nkWAEUYVw52hacfwB45jhp9yZPLjVWr72JM5T58xe8vHsMDqNM7TtD7v11PwberNT5VUsi2qcvpk5"
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
