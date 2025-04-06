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
    "3UwNujKb8jdfob7VqXckP2sHLRR6cedM9b5YUhPxoGZynDNGof9gHdD7htG631KrXmPSLgCJdQ2DC3mQtW69idPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R9u4aBpZGJ4kkb1ggo57nP6TeaXrAxJX977HXEcFrBKzWD28kqL2dxXKXwSQ4RNNFQ6SJHwCmFxNaoEqqzJuQdM",
  "key1": "5v83fwPhd1VKB6nNsLvBA4dJkphYdMLVQDeYSJRaE6Ep1dxGCaZW8EosPfuUtYxjzNzoFZW6voBdgthXHkZ4w6dn",
  "key2": "5byVC6LsuyfDsZ5JboKE7KNjvcJQpcWkT8HwYUnaNiwEJ5Fbuge3mAhnJjvomUkizsUFEohmUBXTokvJDakSjatG",
  "key3": "4VFTDEdezfWDrGbbP8E5fzfpUTn2R1Xa2dwM9FAYunbcXbMwXR5aFmuZquMC1y8tmXLArw6ENdXQVkutXyTdjiB3",
  "key4": "3isxt87u9XfqWP3Cc1DBMv5JDiA3FSuJy7bUuUFP3hvGAZfRMs5fN6GRXKtamFmWMSUTXcVynyVXCNZLTkm7ikfA",
  "key5": "ytqJ9PUafdd3TYXwu9aagsDroQp6B8m9YFYa6RprKgzwD2dL67vUKNjr8Nc1oWQMkdmmwwrEfaoWM4hf6DwGG5W",
  "key6": "5UGtCNJjdhq1GhLku3sw3UZixFUSu4NH1ZoGny7SGuiXGrYAuf295eDEspt9N1v3SMTjMmbpmPCL72xbShSP28ai",
  "key7": "4rPChpAYV8cUahjDsCdBu3SXdAWTiCQpTFi8CA45pHDSxrRuBAScMeudirznV64jxU8pQ7DB2VedUfCZfxvtFtsD",
  "key8": "9x16GCmhyyufMWFJWa1RvhcH3DPjNT78e1PwXf76U6BuZQ8VgrL983SQpc8YvxMPNBUkoWzHFWb4wasow8pPTd2",
  "key9": "2qEqYL3XaVPSvVn36DAAUtLgeE4NofJPPgKHWqGfFYkWbPe4RWaWxyN4Mv4bSwfyXUHqfr5QriwvxY9tJofRUB3L",
  "key10": "3ixjfjkZKBVMDBWbhYDkwQQSXqz1PBVZyZdUXm6piLo6oHYbihyfknU8WQVhnQMLjAGBv1ui3ooaGhNjtvzFTqEp",
  "key11": "2YNCHL3Exp84MejamnxGz3v1Fpq8BvgwWRXAouNkqdXjVhMRnJ55CpQT2HmPJnr6KH8zRik9oexDxQkPQLs4raWV",
  "key12": "5kbA3kagR3XR99fxQ51EAfEX8WEk272c464U1eQBztUgndjwp4Y8CBRDALSRsJKKv9aAmXAdKVgYL2v96Gbrj2to",
  "key13": "4e2gCupo7a5Z9N7q47F4pjV9VCPMyBwF8KQReJ3dQd9JGYkMVtbo6vQDrVeKnFjxzGsocY7rxppxz6X79tCqhAPn",
  "key14": "3xKk1EULkeSZVtt1PL8E3vKutaBnXiRsFJUJWUKNAYjRyVnJdPbwUjZ3Wz4iuVGMjaoYwiNFHJ42DKmDgUn6pY2X",
  "key15": "5H2758ShJu9VbrBN7HAYeKg41ef7XCcMvYCGwYNeSfC1GTrT6GVhyi5NtY6ziT5f6fHjJCdZjtXxpXijdp6Wn47j",
  "key16": "5gxVXKDo1qHHAWgKZA3jr8Vfcba6KXYRw1pTNLQSAjRtSTj8665w7gVZUN5mgRm6K3GtaZmdBQWTNH8c5kGXR5vL",
  "key17": "4NCdXFMBWY51vhLpWwMLpASKv8PYxdw2BEUrA8jGsa8SPTaUo9mg72iUfo6xEJE5GGgs53zQ7sVUiUQrJz3jeJCP",
  "key18": "2NKpFSXQxMzUPo7i22Bqu6UErWfygusuhgmZ8UisNWGP3WSNHZMs6x19GUivX4aB3zvppfgmM85dVupbQPzVhwna",
  "key19": "2qnwgXY9t5xkCwK1SYvzHaW44WtrWwzGT5a7aiqvWqyMUw3s5VP7n5wiSudwmupZkeEbAtSy499d11XkUuZxqQ11",
  "key20": "4tVk3LRxz5af3u7CzzkBZkMoHcsWXucpr25KR5CcciNikkcWRFLq32oFYiwAQ2fmiJuFMjUBFYtAHFEunvrLH8qb",
  "key21": "7PJYa7eMkfqSoRwkfRSBGJmYahYdUavmk6GhkYXSTWawr3EsDYYDGEtLL8ma1ghe1KVMyMAGdGnLD6DQTTAfvCn",
  "key22": "3Md6Jdvw9sQdq4PbXmujWxjL2AfBF4fG5Lofj7AKFNUWRvqDnabPbLeyzSNbMoaJxW87yWj2btLSKRyD9xCSa1TC",
  "key23": "j4oYsnZVTHeY18CNepFpbT5ebo3o3hxhpnfSBRFakCu4pLhhxR7NELzcmta5wTaHTxUtHSJxJUsnGGCN8ZryA1q",
  "key24": "3zMuvFsgVXfA5ZVhK4dZVWX5feV5YcBpHQXoLGNcSSn8pe8onkLkf6FhKEEx2kUCCN3RJodwXBUB9wNzndSBmXAJ",
  "key25": "2E97aeGSzyFWApLbajkw6hVw4T8stBF2XkWAyJ8NaQLEbgWpggAx3WAMSCMzXeXafNtfKouF32pQYxeyqeHfQHuM",
  "key26": "QmUF8dsgzSXT1poxAJ9oggiR4MjpBZYhaG2g5U767daHdGDAJhdgzJLrui2uhoyU9WisWfpoNXeSj9qHd8i65W1",
  "key27": "3QqYFEamoTUPwtyyKpB6pRKN6VKomckpdp2gkrhTgpC3rBw4x11EPwPaZzFC4XsfcTsA1o99kWmJnregiCgn7jHN",
  "key28": "3RyqQpQKVK61K15ggafDZj4xXnvXgfVvCWdvS9stTFytUE9hJstvawvqgStDvahWJkKWroorTVjrNLMvzjMXhbZq",
  "key29": "pH46isiHfwgAaenMQkQ5MNmBzm8MPC9EfWgBqx4EfzXzqJRyQ8H6LDE4vs86Lun1zMnmJKge435sCA5Zk9psk5G",
  "key30": "2XWb9NxRwTTEfkCeysWvt3dYSo9nyx9BUc2FK84xuiXPVZDFH4KVvf2RBev669sUnmNenKsP9iomV42mAJrYyiez",
  "key31": "5D7XiFCYweNWS8faPX9Qocs8LY2jJiXi3bEkqquxmTg99kEqVsAK4HRegXxy45oNRwhZPn69LLyNicLoqWfhBNTi",
  "key32": "2ANMw1dDgtMmh8NkSracSFaiJk3Anfz8q3uK5dohj2Pa7jba2Jtxkmhgd5kp9EotM43fTn1NQmKNFMTTWzDw3CZv",
  "key33": "S93X5aPfU9jsdkwqsEKEcXJyU8x8zmsM5XGPep25emfj1AScVVZ8KSzgNsKxTbXjCk3ng6DVRnR8sAgjr5WC5uz",
  "key34": "39bY11e8useZvdMyVtC8N4xLUaH72ZCxF43r7eg2p21ZGGkkTm5iN61CTxMJ9UYih6y3A2jrM7yn3SagVbtnAzkb",
  "key35": "5SSUsKj9ZP9LKkqLbuDb83EXagEPCDsuRsEXigiphq1ggT99sVLw5kPZS7mREY8cTjP5uDFPyneSmkZ9an6ALBEJ",
  "key36": "387sLRi9mDb6GxKbN4YSStxnLtvHFxtPu61YjdkpC2WtWQCHoxdhQEgPf579NPekjcLaeFYF979h1XkZfVabynEP",
  "key37": "4pM22uxSKNDKxDNsJn4if1uDzxe9sh2zCUrzS9B6qBrPANCEkkNBQBGUkq658Xq5ZbJbnfKZfgsWCq8W5Vg1DrG7",
  "key38": "2JQDETUHTFfEsR93PHNHrrN9TT1pg6WSeVm6GX4tDZdLdhdfYJvJrJ8Acc32AuF3EytAC7QcuoAynZMq5LAzS6B9",
  "key39": "cw4uZh8GWVswQLBpfcmi99SWJgknuNtsDRuBkaWv7ZLMmCEE199A9msdZCi3d4YwEmsvrSYHrnfPYHztgXB8Qfn",
  "key40": "58JHSap7rHQeDy754FZHs8Qyd3qT9fpGnQk155h5RnEEXSK2oMC1EF7AwPiuer7rQsbRzgsw28fddmMaWVwsUawf",
  "key41": "utzEtZ7cudHhgq9gd4VjHRJytAFLRf1jmvU4fPdfBTs4HqQFTAVHg3BcgFj2SRmFiAwYLyeZDHhcVBjoDhhjESm",
  "key42": "55gyAyDVDQFhpV798gHGakXF3Bqap2QA1ioMVBCLEKgpqus2uTsdw2z2grtuJpKWDUFGBYpjmjYnMPQxrbPycHab",
  "key43": "26TV434R7PWWrjsMEnhMznaLDzHP962V6ThJh3NwrTozT21jsfQwJ5F5hwziGAcbPrhGEbqushf3toJzyyXMp4EG"
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
