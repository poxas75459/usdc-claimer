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
    "3139DUp2d6E7NW1DJXVbgXVqFPCEibAV4CpLpF5HUAoHX9MayLQJbQiAhcksxvpCB32nK3bjahSBWVxyANDH1FRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R9NsMsLUv5mm5DFKnq9i3FAWLMmcAp2tnAhAuByUM6GxVqNjNMK5roBrEHthJCQ8KWvC8HRXK8pojGXuzqgCSGk",
  "key1": "2L2icmfpz3NdT4PK4XkDzqibPEm4xQ77ftacS2NvB7axLaAMoxvCyucUSBA7q1ZeoTiUCEBHQw1M57N9FRZt1efa",
  "key2": "1bHQc5ou7atyVZu8gUkZMZftDoeXaVA8hgaJKaSq6D6zBzAbV1v9a3jMcdephBGPB8S3DsEkKEVu2fgKgjprDbD",
  "key3": "4w8LzfFi5e6Hgzzr5vNAMPKS2LWP1oQjePjoAqEqLTch3Ux78NnzUF1v4M5USjTYqaCqUMTZisJEeLXDr9RHmbna",
  "key4": "5sRUDWMfH1CFzfRJrEmyiKAwzWktRbRPmLku9vjNxUbp4y8Nf8hgHBqm16ATaAKVnfhEBe2t9RzvgonvVe53au52",
  "key5": "3xWNVGCXXkmjJgNSmo2BL4jWLNCdHaQy35jF7eZgxGc9mkedDKgT77gmgNtsjGgsFT8HPkL8JsnDRD4Y6mCjaHAg",
  "key6": "ka4uJHpeT39GLwX6yreEx7ht779mK2Uusi7Ho5oC16NcooPq9ATgNnrZG6KSoRfmMPrCgQrRqGtueURqcsoDG4y",
  "key7": "3rJeqL2pMmY6F3ACbvhcBzRgyiyid3CyufBds8PV4juYFWhRQckzBRw8gm3beuCMTuNKt6GfQ4m9PK35TGtaK72",
  "key8": "aRKFaSghg8SCbXEC7rhR3YpRnPrUXEHjfkQCzcRfsG1srJgWm3eR6GMM1WFx7yNNQ8deQntazv5hspA7D6bBs1L",
  "key9": "3pDfUUKYQBWeFJa6SrdhPbeoZaV3SkWqSSEq9ZaWu7iqycEG4cKQZzGzN8kJznWsiNwBmjHZF1hB4XyDTDdQjwFB",
  "key10": "4D5DtcKFKy8zvWhxKsfzYiJcCJNDCH1LfvvCPQ9y1CfgUwjbnifHgmKh3PnBgjWtobb4tJuCgUPcDfxeT3oUQ76F",
  "key11": "tdE44nydDcoHgjjbahKEhtkhHddVMxomzQCjMktdN67yXBSvnACWghB29zgA7YKpcPMbDrmUPc8Mwv1yhwnVLMN",
  "key12": "5aVEJgKNh1f8L3xjbu5EV2hE4LBaU7X7i2jARV42dkkZ6ouMND5Q1jqbWYEuqhMBKWeAFMPC226TTcCDpKzFw8R7",
  "key13": "3Y3wVmJhhovU7LeeaQ1aXm8mYg4jJYiPem5NMFDzFBbYsPU7KGvf9avXA3btUoLCq7ATQ1FhgsikHYNPtXrkYDnW",
  "key14": "3BAZudtGaVovqnr3VmgBoiVvV5mfJ4X7cS5iCiQYndxU5fRRkSBiKh4YScyGVQLPvB4UbpLJEsqfDVzkrEx6rLc9",
  "key15": "3q15fthBtb4orXRwAyB6KjE8WiKUnobJpoTxR8ZBGB8st7cspTmSUhXEHvYnDPb3G32hpvHcVDt8ofsEqcJcmHcu",
  "key16": "dTkFm8sAayHGTeKxvQwt67dPaZNCveSQFynqHi9a4snYkALzAmFL4oPPFepEx6eev2kE9PtDXz9xYyNxrRmdseq",
  "key17": "SxRNKAFUSu1bA9UQbKx7z2D94pcMbKLaZYwMTLobMEeqveAGSrFgDPjEQHc8Nhhqv3ddbmQgQGUY642zxzZo9MK",
  "key18": "4tscSgqQ4Pdr6igcbEtb9oKSW822shzmtZj1ehum5qxMYjz79PgawKbyN43gAVFoZZA9u51jToUBxzXxQaNv5zuo",
  "key19": "YRC3iafCWMq2fVsQ4WZJZhK4K4XGcKdG9hiXb52dXvxonPvnyipA1cAvcoS65YcYjzYhDGr53csPUW62uwkw1yH",
  "key20": "4bUop3ECs1zZySc33dV64nthxRARq3U3AHX6j8eTFM3a2QqVjJ2JV12mnrjVznwAGCqGJrwCYBjsQh3fjEoVcsL8",
  "key21": "63UmvG4hq9D3PdNwcA3Ybtt2kEqJkya2C4XounCHC5ARpEGzGgo3iQGfj92aB5piPF6r4saAhMurMV2ds8sYVTgo",
  "key22": "9KwvbSVrygJPbistvP7LPaWKGr6FqyEVexiEzqi7PqQmHZiEGRkLYpjsQyCdDTZ7p1TL16LtWiqAWcshMsPJqMh",
  "key23": "5GmcMHCWQBRzdUDXrpbaLKUhY6GEep8HkZ33SzAu1kUfZnbriqNmJ5CXgFEacNMGbnDKfP44gyotp6Voe2wSDa1R",
  "key24": "2rQYjuv7GEdqtVjgdHDdHhtNAKsHZshXaH5DzWk2QnpJbCBM193zWmc1oCf33EpoGJNScfuqfEPYgS65GALAFv2E",
  "key25": "2LR5Ft46hQbuXmbhG7k26KdRPaZJnxgTyjDbnKtxRg4BVuKNqmULRz7PHW8fkZGPyH7zdDotqpbwK4Ninx3sPDRD",
  "key26": "64KsK8WBEWoKi3M46fTmM1WJwD8XCA9YNuC8MpRXv5u8pH22bpeqyVuniqBvL1iLtPF6KGux8usQgt962987aX68",
  "key27": "3CGCUHcKvTDxhm4gYcbjpvUFvBeJR5WYb2jbXAN3KbFsbQ2KMbx9qKprdXjFpaXdQoRT15ibzt4RCAxr4Gv4eX9b",
  "key28": "4q5xciYMyAfyNVThbAszZFpSn6QqRaDRQ2VMg65hrFoD6zzGak5dyLzFQKUfLZCDYmyvN2CXcPsf3ybjockSGiWG",
  "key29": "5M61jGhYBRw8ZGDTQ6sDeihhwdvvv4tkCt4MFHT55P7kkDW6C4kcq1SdYyvAcQphapBt5VhmaF4B7oa43g68Zas5",
  "key30": "5d71cuQe9anWtugpUbHMrf61TpDRrTySpEutXW1nPJCZYMpZXM2tzNaV7R14VwqpTy4k4cQcYFjcDTiatxK3b9dk",
  "key31": "57efbv9cDFp4N64AaypBnSZJNEEXEjchCUDiMKgoeXfLjKmF7fM15ruQfFBNP7Q84GoXJqqeWTv52EqHdL8mTAB9",
  "key32": "2e4T9umiomppB1gAoqu91b4uTjCMDSgaZuA1nhbA9DfTAVRu3E638kC4d6D26geK5qCe8cjGS6yn89cbLwUkMrP2",
  "key33": "4c4tSmCnf5puKELHzX8s799VGZY2PiyHpHf7ZiyTBuay8HcpsiwDLs98BNYNCtNYLF5JA8C2KPScEw3hS4Br83Au",
  "key34": "29SMKUB7oYbMcjUTV4iC4rF3nw3LoTbxPGED2hQidMiuF3v5pbnjNBtAgocB8N772MYTP9JWAQgU6VKCC5Au6hZZ",
  "key35": "4ZAdkRjdfd62NRn4Xiz2LPPVUFT1xR7cZX7PCkif4hzdUooQ6b1v7yNg6pF2SxAyQmuEkDFnrer2y6x726twAzxJ",
  "key36": "4oEBfZkr9zcjMmZd9kfZeLKYL7rJXHay9tXGp5k7yPHpAxWjAZSt4AKufDWgZg39PeGPNWK1M9ky5GZt47xR6J9h",
  "key37": "LkaDunXH8o7HNRDaAZX44efqbS7xworSFhfkP98JtS9toZdmAPhXxaRqk4ecEXsAQm3cvSKf3WtUEXFPXde1e72",
  "key38": "4eMHpaHZgQHigdL15NvsCg8JLavNkxqVZpy5gpJAZY76daxvGV7unJ5e9jyw5mtBt3UkP5nP5scQrBbfuPbKhjMh",
  "key39": "3ucx1y6MnEBDTsLGuuh4EXJFQE72jZ37dTLUMEnRWmjmwzskfrkuCzbzMJqH7CqFZYndBZ8vmNiRqbzjBWFjstxv",
  "key40": "4JXDnpJs45mKcXhhy3WhPmdMn9WGAWkLCyH2EDTPP4tkm4D5cp753LevFJQfoZYfG1uTXLZsp3VsXbSTL8AC5zsu",
  "key41": "497CUXa2zGK1P1JLix4Q2u8PFJan1PiNrePXdkfJGVLiwQmpRZhPhCBNE6nQpoUtr5HQiS6LJzSLieUuk97uTjuV",
  "key42": "2cgZWzh6dSepiXDX5okecTtkFtt7weVXu78pfpYwKZDWgtxZeTcMaRfBv38qGTNuR4s8ZMKH8J9M4gA9cinz7D3v",
  "key43": "4PBV4GakQE7MnYCmfLgyXV7b8jAZbxfKn7USYrhyRaY5LEWKf8TZvZwxiYkGVYYFz7BqjmJC5VrJRVeezMR4PYPy",
  "key44": "3vKbsXv2sixvLZWnr3sZwSJ4XPbm159kW7XDEFmpFnJhZoezoKVhoZiaesMqCkF5DjA4h4aexvni7rHcZdbyjEHt",
  "key45": "3RmcE5bKtkQr3bKVwANbuW73ShMz4ZebFyk958Z6y5F9EHHKiEYFTYhiLhUXgpGz8YZvjgGrEUDHpsNoA6ztpF4p",
  "key46": "2j7MVorgLUyhPEiq84gRRTaUjURyBAiH9x1VrNiTQe3Q6uzReiv8ZzZYDJDHvpvACugVxMN2fhMwM5BctrW9zmEY",
  "key47": "65XEqWmGe9ZHHD338HYUjre43H7dAANjriTkpCDVGdBSdwUNzZ8RtRDJ7CstmTY8hjHNUYqov7LXbBPMH7tqvmty",
  "key48": "5NeRXLSw4FuGLAjZdAVRtffy1GD4Luiczg7d3zwZhKyTWo4Ydc4NLpRSq4sEm2FcCjYgxMduzwCHUw1sEzh3MDVQ",
  "key49": "2fm15KzAZXjxMKzNAuHTZUDmigXdLa6i7mkLfB2HcTt3yLQjXogeP1kgAZfa1mwZA15qBGLuj3NU17k4WSqkYRJN"
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
