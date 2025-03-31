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
    "moZyHpnNT7GLGqAEr8bUbcRKxf8r1js4uqZQnBXaNPqhSY73Uw8PTy2uv7wecCgdRWHfuSzcZT9UJPx231h8V7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vx6FrVWEJLDk8E1VkkiBqmjZ6zu9eLRPeXwmY2K1y9W5z82zKX9rG9euXMSgbAvTWznq5CasdLoMKzakjW39jXS",
  "key1": "3fqAmQUUMyBgq3LWS6AufHKtAmhLx1UZYkGnFHstuJa1iAmvPvDryp483C1PJMQWfzCYeodjRGbD2Atujq7eA19d",
  "key2": "5aDYP74YEqmpFpWgTS7dueAGKscmDnjRkZC5Foff9JUNfhjAxrwbYbcDxjywsDYZ7sNhXire92BLojvJXvJMQw6s",
  "key3": "3YzGwL94v1DP4p15JxF7YVui3z92yaBqcDmAbDsECyrLsHrbsqJUsYyn7Zm24g5ToT1qWaJABurK1JYqGgu8GyFh",
  "key4": "tihJkPMCYMrLLT1iCAgxjDmbdtomQoEbVsFF98AfNvxRNE3kJkwesYXS2f2SHNHmZ3mtYVxLxNqr9BFNTnt5nFE",
  "key5": "jo3mtrrYeqT8m9hpJ3q5QbY7N1Mf6YufwhLWPQsE3KdqgHQ8rih3MqycnPLQi6yZE5Hjz3pMBMfHJPkxLva8HnX",
  "key6": "4agCD6FUjEmaWfdJxzNM4tDvNwVJ2famLYNTDHehKej6BTi83Lz3ACtEZaVBjGBWna6e6qf2xn35A116hYquJHY9",
  "key7": "39qf8Bx6wHCF6EXwCDc1spe82FCpxg7PNCKx1dXjWHRzDHc2kbJcHB54oJpB5tXN5HgCjPzoHH7WqscNxHUcfyCU",
  "key8": "2AvmfnPeAXjWVxAh5x2vNiZkFkZZwLbHo7pf51s3Uo5MLAgptZTFdyfCqM73yW25dnhiK2yvcPiQACtenjfWnQUp",
  "key9": "4uPZpZrefFQiE5TLRfbdYnEppbh7x5EJKL7Y4WKNueueUsBhPRhkEGibgnqtjhEXPRtfCGQeBdAvS8iBTLUpNLHV",
  "key10": "63brE8GD62sS2KD8ieyMJeNmqSPyPMzSCA79oTUt9decR1xLvhg2Awo1HEAxev5pG6nArdpXrVbEbhSAoGhxGnTe",
  "key11": "3YZtSojtshvnJQcgdXAGKocA12bkze1eeorP5JhQVeeem7iv2ugM17tkK6fiFPLyLJ6eXXLT7bqaZPtZS571SYRu",
  "key12": "2F74RfbU3S15KDyGoqCqwV8BANKKwyb6HCSkWmHgTaqFept7HJwfZ9fUVdevVsd3mMpWFwLjQ2yb7Sk1JF9uxzfo",
  "key13": "665vmmLoueBbE16ABcckx7vncNWZHQ3uV1318BCudw5g1WvMP8wrXq5g4tte4CnMH8cwekJwWSWfWrEK13dn8YEz",
  "key14": "4Xtd1EDvcBavSKdEgTUUqYTM83YahRL5BV5Df2vwRbAUV1gy1Ajhb8VyMcSQ7ghqPNm1t4NbNAXTLrpDrh2cU6N3",
  "key15": "2rdnkg5MNeV4TmpPr54XTMoRGA1VwGGkfMVyAxJxpKB2cSC2niv4PjBuxsmrLVhPr8CTRXJRt8yg5x1ssHg6cv5A",
  "key16": "4ebtPh6K9AUsdaHraVxh5VNFnpQhFDYwMmoK9f4Aa3vhJNAQnzE9QmSnHvWbG8zqz6Mb6VusR2dE57myy9PfuPK6",
  "key17": "3HaTdve4Qsfn4tmYjKeo3NdPZyBFQ3uu3TnDZ5z2DyoxUBJx4BnAQQuQYNC4M4dTjnes5qhmjuCt8dD7vgjeEyko",
  "key18": "2gsECLWTyGUxdyRm85jQpy5hsmHyCXB3Jy4ozWxXcaXYtVGss8KQiUhtb1MC3F6Bw3d1Ukw9U5ngyGeQ85mX1519",
  "key19": "5BZzfBC82rSNQPWSvgY28FkrtJA5D1R15AXABpbUAXm21TAkCTgZWckjJQWv7d7Hoio1r9RroHgp7fKgWPNgnkin",
  "key20": "3dzikETT38dFAm146RFeLrVvfXVWWtMk3m7ZvVEtyC1aKXJGtopr3oNiApZV4urpbE5VjQAMPBYmd4h2zAh2PUkB",
  "key21": "2QF4VWyy9eZNb6jzgTrbhKUfUEshLF3hU9rXe84XMLCvie2ff4EenAFRmcEbek4TXHHeXpWvSaggdx64NvrUQugU",
  "key22": "pZZvxgAmigMxFne1bMe16aL8g4cHqtiEjxfyEaeBeQnW32zrHjNzasuE3kLbgLMt9XGmKZ3xW3K3SD8UaEgi8ZE",
  "key23": "33GpgnNEa5Fcn5UtWTbykdoTc3gz8gMQweyQuC6vTgVREf9cw3BzzLcvPa3xP9M7ngYemhGjLqAgc3g4oSDMEFzE",
  "key24": "3vBmwwQJ2d8Dh4eqFP3SyayWJXVAbcmoXdK7Nc14c98q4ejNQg3kTebE8kTFh92EtZ9uWqmEJ6hhfx9z1FV3DtPF",
  "key25": "2xxPBDwZDMtw3zf4tBwGh1zVB1f6VCZyDjdePQxK3u6FV56QUkRHXs3RmKDnDFe5GmfV9NsKR9cYQvjBGWw3HEAV",
  "key26": "BwW66F32fKuNdNRWRyRnUYvgrJ3BdiFKHEQMqrnGArLeyxDtXxP2mizKRcABBW2kCKUzLQMKzyK3FctLB6hMVGp",
  "key27": "4UeSDrR1wywEdDr7Zj4a4A5u2dDYVLneFRZ6z3bMpViHueMcSHVREA9kkxxB1eXPL1ZyxMXyK4pkJZybGCRGcEWb",
  "key28": "55Mua7WSkEtLDXei7o3wJw5DH5MJToBKjaYATnbzZSQFhuAQVDRxUeGUAagq8WTp64Ztqrps5SCwMuMDsTviypX2",
  "key29": "geBd991n4mB9sg6jesyqfWyuEtqzFGXGUM5633nzn2ud6iHMFoihD1x57onoAsH83UqmzZKBtAdfJPEqrdq4vUU",
  "key30": "rY9oQb4qiVPScL7y67AMEgfUmwnNpMyxcwC3voF7awyA89oWtY1PekhxfLNP2QHEmAUrZTGhowKfAKtsiYecowB",
  "key31": "4755jJsKsBCMRkqXf5ioTMzSTetn7s7htBsRbr2iqA7SQQJhG7PV2Bgy4rX9iHAbfYo1kXTbdPYn1TMrp5tL2sns",
  "key32": "43uccggprQzC3tnv72cPFPkPbWeHRz1gt2eFPRf3HiS7aPbdMXKJnuEYMCshdJ8ub2v2Y9jHwBww3ejexmrn7sCB",
  "key33": "3j8F9Rzw4yzXKGqXKVucufa2W7k14fz2ETSFvnMZwJBFQqEWajEmAY1UJkEvFP28B3U7Afn6YzbKrbYJBWugFSrB",
  "key34": "4KoJTTV7fBwbpm7AVFEtGTyr69em2Fj7Lv2RB2gCohzM69vZsFB8aTS75Xg1PjQsEepjzqou5Fmbj5defXA3Mne6",
  "key35": "QBxGVywdfP6A7LH4TfrEUJGbZ8rXHoszD23YFUaEfHN3SNw4iDZcg36gnRyV66E71YqU6wuN3EizHK4zPKCqxTD",
  "key36": "5VZifh6wU75HV3ykeHrawPdkAjYoyNyxTgagQuVME23mKDqr3q4rrpVZnvScpvumqZfp4rytBmXnRx1qQjAs6QxC",
  "key37": "zbh4342ww7DsZokLPjd1D2nMj4UESFH5voWqrde8rb5Df9gLJgTLgvW8RjGJytUwB53udUpgVhwoEMW3pbG37Fk",
  "key38": "3qtCfEaVGe7TrkgLE3JjjZP9tbNBfmrbfdpkQT4K23kah8yeGtbfeQdkaVwGqGKawm5fYeCMFLbPmvCrEKu4Y8Bo",
  "key39": "5Lbv1zDKhk3wcRsS6sp1TzMuRWRSChveV5KVnArs16W7bkWh2NzqZeHpRWm18XU4xtWPijEJS6n8GDEMn7MpZJ3",
  "key40": "4X9YzgCkRPJaCcNrN6XpRkuk5xZuhTA57Aw9iYNcSqSXKDeUFKcf5cdvcjjnZDUdgME8fyrgnkuW8b9RbA54RUkh",
  "key41": "57UNxvSi1xcbiDWGeWF1N4J96kBV3HngKKEUFmmq6wo4JpAN1dLZLJKp5jg9vks18T55tN9wuhYmrvtwEBE8LLGF",
  "key42": "kzXm6oCQbpkdRx6QVvMkjwH4H2KhSQbWGaJgu7XMoTGFqGTRsLDbK4MSVevTBfUtCcAKEHmHzVTfB6j77FsMHcc",
  "key43": "2cdtvAm16GDZuEpraQY4LoysW6wCG7KnKPbxbeACQAiTnkDimxV4aCvSqGYqkUvYKpu9B7MEDR4xZWDYn2iUqJFA",
  "key44": "3gkVCBTqXFTDBXPMvZVkq2SFK1amT9t23QY5CjEDrQAKM9CTsnNpTSwBJBtY8gskfcuR1SZMCB7Y3t4KNRyt3Xrv",
  "key45": "2bFBvxhtjBxvW91HwmLcZC6wNyL3fmkFH6j7TATxBggAv9TKwpHiWHcbwo9RHSwRhpikEssxUEFgbocRF63Fj7TU",
  "key46": "2WF18573BvkJiEaJLwoHSLDDYAwWmBfYQj98MLDjGwNjaXFaU9odFHWfGNhJ5bLFdVBm4pT65CdxZ43qG8XoQTYQ",
  "key47": "2AtsFr6tTgDLGZtc9PpbE28dr3mFBT8dmCj66fWj9W7afmXrqwzpgarDn7vku3qaLpgFWEmGh2VaGzacy2rxqmTU",
  "key48": "63gWUmg2SS6741NKBY33x7YHZLvZ6L5nH4Df7LimyBfvYsUbHgChj9MLzTmE4RAAaDA6j9DhkHzEi8aRVKJmFrhj",
  "key49": "5Zj1qCvHA5Xeo3PSzZDfVQCFvZZunQ7BMLGXGeKYd7o8DzL1oPASpgGpctyRCRsPjmVCd68ZNviuP3XrJRaWCBDn"
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
