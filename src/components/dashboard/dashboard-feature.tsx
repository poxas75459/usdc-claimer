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
    "5HZxDf6fgVcHzmuTaW2HiEmAMhHP1jDDeVXhEUo9S2AjBhiQQLJHyT4gKTmRh8LEU5vMwPaC8YzBrd3pxbG4XBvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59JvBzmpSGw4Ksgb4BuMrdv8XQz5s7kkvxpzwsYAjkdty8GR46TdZaK3uxacF5PkWKbxvbS1u4BsVhJaG9BN7Xgu",
  "key1": "5Gba3kmkx6AwkSpYgsRU5m3pFXTzkUMACsRd7P4SkwDv7gwQ5s11Ckcap1ceDXh3SdhYbxXY5eoKnvVE35rrTeuE",
  "key2": "3G18invvgfgyjy2tManzZX5uFoYEpgLdAHVsUnaDYtG82FCa4YLq2LjgQeDjuy7VgxanSqmDq1wpB9ye5LmS5cAe",
  "key3": "5UvZMasdmViUYn6k15N7CrZBB8wcrAfdpKPcUFnXKDwzfcjdgzq2cCb9bf1k69CLRNbe9aXQ6nZ1dqWX9vrKtuyB",
  "key4": "3Na3bB6qy7SdJo1r8WrwaJHiDt2DqygzSMhcKrQux8tWUj8uhMSHZ7Gm3sHcaWpxhKATZvTtAHxF8svRAeajyCgF",
  "key5": "63YSrUUqGtt2Lyp5Q7X7Hz2YEpMCC776fuZdtWmKgbCp3qAkzBtMwgdNzkbS635JCR9hobgrXE8wVbsp1TZYALHp",
  "key6": "5BeQkmURfZx4TUpUgkSwYABf2EtxVLKh1rBxku28FQR3WLMcvQ5vwhZLm98XN4KsVr15PPHo8jhSGFBkiWsCpHpB",
  "key7": "JkjPjFBhiQaGYkagiwoJhAu1uGw1gu1DTX9A5if9FQPQ3ZTHRw2JNiyc24eqm8GNwAhj69vzNKH6KjBtJqc8sDD",
  "key8": "5xV8P5riT8A9guwuWBxmPQHEFnNeLzFDCpnRHmVo99pBm82TWcCzT7u5w2iL4hjBBMzWHuVrUr3v3ktTR6x6n6rg",
  "key9": "3Zuw7TPEogzmKkvi4H4x3EsuRJaYsix1FgGGZB2ttpWWdBSaLPUd2ZBveLfxuBkNHCszyk5dwtSHFdmmemMMjNig",
  "key10": "4AvJnpBh5X2YGEnaAaBYjHsHkhQgM9XRMC7CxmwUFCWoWimziXi4rCkMVr9XFG7CXDGjJxeuJppKEJy57p16wUDs",
  "key11": "5S4eXctLCqT7wZGN3oUxH6VZ5hDXRhBWkm775ywtYoerE1GKbUp9CQoQycfPb64RM6ojgws2ZxcdsnKbkC86Mtjx",
  "key12": "3vsiY81f5UxasC9iBHWkBbq4ZXD3Eg3tUHNSyjLJEr3W117fqGnjGkRa7U4PWkhcsaJpdMW8LtVqVEkj3Xc4kQik",
  "key13": "65q5yZRkAfPt5ZfbrjpLXsndFcg25JbYm85x1PoxacRsttkcYiEjW6bKqMQhcvKBbCXPp2CrLza7Wesowyg6KxdA",
  "key14": "4RTiKxDXXDkML2GMZoHpT92L2JMJHHyvdNHA2snHahEGFdbp7D1jfxdQLrVMQff9n9DvCxT5h42iR98oJtSCMs4c",
  "key15": "3GUVRs2EGRMEncQaQMf31KxjQqYY4c4M2ADvDoCnPYFXzsjgQ9ht5fGMaU23kfcgvAmcBvHMMfP2iCcRVPspVd7d",
  "key16": "591wVxyvSSgResEHKTmtpEX6f9SpKwyGfRGMzZraeRhkiLYr215rKYsTduudMJyfvK1V43DXgaKqhEPjFG8BmHk1",
  "key17": "2XV2Eg6C4y2otiwhgCQRii8rSbP7xF45LHUY5j9vEJf39DRHzbym4isb2xALJErkwQoJcdbdumNqcVzYmRfGJ8kr",
  "key18": "5VY9SiVCJw2AP6MiqZo3ES8yagidowyBPnMxRAQE4yitRxrtkmJJtdmJe7FnNynxdkjTN7SGXFvSBuF2BmnLjXQ4",
  "key19": "3vkTUTKkcGa8XHpajgfDY9VoRuoPp6p8uEknTyESHq7Mu12oAU9Vpmy8vDjtceuKgTgXGUu5eGnwf5JeY9eFEKSk",
  "key20": "3FCc7t6zdjfBLg5XvchiyU8sHZGPkCv9xZ35uLQxbJ3S7Xz6PoT5oym1gfNReiy9daZaUkEWHVzmY9RDZqJ5F3x",
  "key21": "4wJxzMDwKEtTx76aheYHDYfQeYKLfic9E5tqNJn6N71tqyH5JARCbPoEzTyJpQqrQTwqEXB5KBpC9vPht6VNv5eH",
  "key22": "kBpK3W5SHAfR3d7oQBkfti35sX4G2ULd47u3wzbaLv9BnsMizdcvPiuHtXXRm4yFcrm3hbUp7qm723JpVbxufXg",
  "key23": "4PcJvgM1XaUfqoF9z636qpsDNQpk5oHX1p4raKfQCaRacvG9i5VWvuhF2GMewTHRjXCFQJkQSzeUDjXiKo9u6pcx",
  "key24": "3U5va8z3yA4vbd94HVeRKnjiZB3rhHCUZg9vUCh7tiDBKpAsB5bCPypCsMvbfMzXX45H5J6daWApYgrXfnBxyXDB",
  "key25": "5ThwuC2nV9ME8RSZkb3y6cWPDb37yr7kfTENtKnCdKVnmppXxnFs2bHRLKn4rcpQ66whg9oTR3zqmXtp8hZznke8",
  "key26": "6KdR8vfT1sXYaosfiJz82xPbHwx9Hzpw76m1bGfBwdVGxV7NiL2EApisPxQr8fgnmXaNZ8t8Hdux47g9Fj4EVNo",
  "key27": "2PV8CXuSRMk3i1o1aBvAD8hw6Au2owdm2mcidrNcP3jCmUbn4f8YrCWg7LDr72v1iMB4Dsxnofjij3VtKjMiudYz",
  "key28": "3Utd5kkpD1TYKKYwuA74kT46vZiXEXUK2XjTNwtnf93M5tbgEttPvsyNKaQiozipT2PuJtvBFLVJRoHFDoNRpPUs",
  "key29": "4e2eUmP55iGC9vL9rZBLrCwQEggw8yFGoWtCw3i8fmVkwpQfbLu6VamCWzz8aLiuocyPGTPNj3Uo39SJ2hppqweF"
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
