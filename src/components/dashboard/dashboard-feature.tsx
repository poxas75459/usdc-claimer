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
    "5zk3AKRjk4pXcjZrpnEe3qiZdccE8XHpeRZXwkxgDDWf8Bu4jPdXdrWtsnHXo7vRX7CUzxebPz1niWYorVjd5oYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44HRFNqdSCM65vLyQvadUavxiwbhgUZLKrqZ4yVWWKsxs8a689Xxj9P3EEvNhwzRrP9WWU9MH8WPb8zyHwkBgcFb",
  "key1": "5zwG1QytpG62nJsQvWScJeRnAwBVcD7Pgwusb18UrxZsVj4SrSEpUxTBdBzN3KVv2MzvT6xmuHefrbNt8WwB7RxP",
  "key2": "5imSWjmzogB9w4sG4zwmyTjwnZ7uVoCakApzP6MaxTKn9XfGkWedUm14NjaRMBdvUf9ptuSbieiUNpfuTYRuWbpy",
  "key3": "23A3Hj6356zo5e1hiaPMveo6iE41f62DFj5zd7988AtpNbLpQzCwtp8pEGukge1UYzcupUtXKXuT8ufpJjuSAJxK",
  "key4": "5SEN15jE8Hte2dhCYzwnLzJTNrV2J91sCLqNBDqauGtPnz8uDH9Q4c6P78sMkpgRJSAUSDcYbSdpDurCHn73TKoY",
  "key5": "3JhHn4dKBZ6bvM9mVJ5A17No1zeRurMBDdNyC3su9d7UB5Rqn1yVuCoz3Uwoaj1U6S326LLV8FsKrb9RLgq4nTs6",
  "key6": "5F4wpeyNiysNJiS933RgqRF1hkd35ypXrSnMFpqc86ezJSp11ZoVt1puvxDvkXYxGuewivCTg2jrBQfmshpcAuND",
  "key7": "28cg631DH6WuXHArizJm6GEpp46saLntSmS5CjTXXZSsCZrmb43bTuiZxuSvcJQ8ak2RaUU6iaB1pzTp4WUqGzWh",
  "key8": "5YsobUfAATPkKT52CQLdxMgNkVohXqc4drJJWnZG4kDwEkbmDRdntcFMtRSPgN6rpr6gGkesQCVS29P5BDW668sp",
  "key9": "jCah3Q5htjrwzrMJuS6Xvm9GeZT5pDDqKC8BzMWo1RsM9Pfdp1NHHAKLhYjPrH822fUxWiAe1A4VA9r2yMpLg8S",
  "key10": "h3n76mFFLUnUEE1ZsxXWq5p4Pe7o2QqMZM4f9xhNXdBswLq6evFHS6FM3PqUMPVVaiXrNPyZgZZGgAcYJ4Giqht",
  "key11": "32h6VLs5EzRM4YA3SZga2cpapqTsT3x8FEQs34murVoEdHMV7MwByYLRvfTh49dsci7YP4FTNhdtG1Pej5RhNd1m",
  "key12": "5xd17znaMPQLGrDyAb7neJRe9SWNbcmeDw4jPvxQLkekQwAkrjnEzQqWm4fzXnk5rqLbDdAP9PPocxqAJNALkf96",
  "key13": "Nxo68VvwUfDchNoVdAm3A8jsviJM5eRFYASoR8UUr4aDMoBGuZ4UBYEMQr8nYzbCqMsfN6RC5tD2EJGacTjo54M",
  "key14": "3a7mUxa4p7KNrAWgu1BM9BemL5iRTWgaVS8pU9hTMqoPiFdfrrQjsX7rRMWDgr5RjKqNMzVgvTv2boVGMHyLA2Eo",
  "key15": "3bNfM17RdNdusxt4oJ6eowMcnGJS9WZ5FaWUUKsaTs3jgfHxL5NJ4UvSNqkgpB11pDtDfXhSiUNntJFgpmNkbysN",
  "key16": "288nhzcdVyPfqM3oekXA6KFxg7ttt5WUyM2VohYRG5RUopu7MePzCxBpYMByNhvXaf6bB5dziY3VzUkcYM7AfyBg",
  "key17": "4XGxQaCdbpzGqfpLwTuprWkn99TX8raW7vUk9skzgEv3DJS4fiUbrpCaS28DQ43uhvBjtRAcbpWpT9xR6cL2LRPe",
  "key18": "2Edu5Y4zLgcvonvZhgqi18Sw1ATekJbDBwS8Td9cHR1mDAYM4imPxuf6bgu2a4rmms9QRHPdQrbKgthLRdAZi1ns",
  "key19": "AAtL1mxQCnz2LbYLBCtzSs1saYavXa458ZyAZZBgsu9MjwiUbB8YgEaY4Zh9fNfMwi95CFHBbe9JjVHChGPcw2E",
  "key20": "54zgDFV8DwtLY5YA3MwZYMxo37KKENiPkDCE12rAqpaZvx6qjJ6Wzyd9uuaLv3YKvagjvLtidyXNkbL2J8M1zfhQ",
  "key21": "5hq3KNGm6zwKEdR1yQKjaUg2f8ge9RsL8dqqbuAXeuK3YLj2CigHkLcdmS3e3iP8dHwdiDonQBybKLXnGe9CpALF",
  "key22": "2yBBuffUyDdDGapc7YiifqzQebbxGBjTGX4ZGPMrwBfLVoG2HJAiuZLDrBk42XD2a2Qfcezkff8jnttrWJuP2Lrx",
  "key23": "5PEbGqHoGWgo9R4WP7Y4HhW8f1M3LxXH1XXnooXF1jR3WdcD5JhYoESiBiT1jdqJx5HzZsfaypjenXx9BgR9NDmt",
  "key24": "4NMck8siKEJ9bgjJjSmxtexaJdBBeSLsepN7p8ThM2MqitV32o3WXhFxGMWPawmubsvAwoETrs1tR3tSJR3vHJtF",
  "key25": "4xWyCazp5Z3TKGpTbRLy5S1w6LucqxFVXVfHGtihaXifwB2vpzJ2RFeH2ggAuWXVo4TXfvtuHAFV3QVj5XnJtV9i",
  "key26": "23STo5aLSotAY65dpJdx7rHV1mYFmxzJ2PjVfb52BTXw2HHvTUF7nnrrJbqdDhiww1tPG4HQ76wVLAgHrtajeaGo",
  "key27": "3DvuMazscrvgGacrfRqEKkmsRikXqJBMEXFP8zAw7dnUdPfWsMgnKFMuRj58pNnVbFx2niaSizrf8H9Yv6P8h88S",
  "key28": "3FDYTdwYhQTZbz9WjtLsNvtqTwr22eYwWZPNRLKnk96tYeWtS5tjCx2occfXvUfRr2uyistEkfMtkPuMPEX4P481",
  "key29": "3mQ27QKtNbcguidrpX2kAFKDiZDvQw2B37Nq853h2NejeXrF5YhVKQDhv2US9xexbfXQdL2SYtiKk2nqtHx195vU",
  "key30": "2YKGmPmL5pP7y57SLy3fyBe2DQWuv3zkLdW5vc6SCnnLtLvp7HciqzJt8pP4hCoq4ubkKbCx3y6SMXGxqXyRN23j",
  "key31": "5zuY6wPbVp5HHQQjHduk8AmCXbiSPgGVXTquM83pgV6g9BU3Yz16QAnp1MZV6FsHoZZBREMJuLSJp6U9HiYX8pY5",
  "key32": "46wGZNSBw6knHy1Xd8VNtf65jMNfr9Qhu6TbRywXrQGBre23oSViw8RpQuFy2AZ4Ezqch4MFAifUZFVeF16SK2AH",
  "key33": "3iBvSrE8SLeWirfVvueJu6e5cN3YVPx9PMakY2BjVPsmSgiQWo4oJaZ55vz4Xw8cZb9V4Y29BZN1owcNXsoq6tdd",
  "key34": "3oUH1zW9efoFtjxVixLG2xgptUzBwZY4ApTCXcLUnshh8uN7MSDTFF2aAbgXEv7LsVMTcsStD2btxjdkj99wfBAk",
  "key35": "46xkRSfUqSMCLzNNDZPMipP1o6VJa5Rb78yrkodgKmPRVC1qMfUTrw9oK8CwNPEWG3GxFmoavTaE1N7TFMhw2Yew",
  "key36": "5Wtsyc4cj6Nz9RF2QD4CeQSyjZqQXqj9WoxKG9E7PsoLpFsyCb7Q3ZMvoXt5hJgxbwEhGmAeAvbCyWBxW8humpFx",
  "key37": "4DLkwbGqDpd3YW2dkojz1hbaDLw9cvt1Ad1uXveuyYYUBogcUZ5NbFvPskt3Wn3twuzBjjGxqgLpEanbm71Dq7T4",
  "key38": "3RDpfVPKBW3i7A5Qcu4qejd75nycZVqUpCgxSHv6bfFEmm9HqBnB1VthKTytdQm6X2Jo4q4Ckp6XTiNpSrf4GxxS",
  "key39": "2GHqaSFpB2uqkmoGyLz7SEiJr8MzVPiVcRx79Xdz5DrPXDXMz5RLLNELwyCkwAmt6dSwkFgZZgo76k35p5Sw93ef",
  "key40": "3DvFYDDeiFogzuDquSKfBn64VxHo1BkoJMFQVW7uAxDc4VfAafpc7LrQHnc66NzBFF9NphAMRZ2SdzFEshm7kYxY",
  "key41": "4yzNE1ZYDdqFhqJCW7xkvB8BG1iqt2c9XtxRyj75t84MoguHLAcPACxdDYrz4NqU9gtJjS4BcHzmwwjPdSoThAkH"
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
