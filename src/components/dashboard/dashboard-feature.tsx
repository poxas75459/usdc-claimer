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
    "3e4hL58asb11NLYoS3sxbKbszdgVNMjfmoqncU7fRytQXAJFBSeNQLRN9f1NFmitQ9sVLV8huVaK8BhUjecJp2CZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UaGXK1vrkrtVGKp1SbF1oZxnWNRoid4aEnWYuDvT4knjrHAuiD5NjXskK8aVuXGg4jAXJV2wG7d4APdU8aXYiud",
  "key1": "2JmAvcvL66T98aaH9A3NGyQ9sFQ42zh9UruB3wq8Z8sD9MJpdXZuNufDNLZFcyZKokHD8BUiYrqeUkgwNGbwfE4M",
  "key2": "5Qn2eTkrZfum3o8jVYJYn9w2tJx9TXqjhCSXMeV4oouVSwutaUQ8ra4HP8uNKtPWcEhJrihA6p1FLZkTN17qwqu9",
  "key3": "4g6NhjxecwfNbop91KMoM8qvzoKjdm6LGUb3JUNYRr66Rmx9cQ7n184GKsJb4T3JocNy78kX2Gu8j1iqKZoLKeYa",
  "key4": "4ubTATEKu3EPWhiAhCZVWTtFSaj7CiyHr7JuTz16iKc1jLBf9WNGkq2xEk1tUPfUKq7mZD8jzJgXmPrEdNK92URA",
  "key5": "5Ez53qJk7diVDS5N37axHbQgKHrFNfKwmVvZ5g2rb9gGofFn53JY1ccTzMasRUeTbWRUTV7SPf2Jg17mLdJPELWf",
  "key6": "2qGhL3AjvXUxEv4Xc67z4pMFu4oWU4G4zgAgdrr9RuZZgGaSjNvmuxWgTVKKwcLM6JbMwiENbvEV9XYkAzEHUfMz",
  "key7": "2ADiacBFxC6hPUPorc223JSKnfyqKandGZ49RESF5GKRY14NyocrmTWwZaj7XaFU3GFf1C1js4MYqxGe88VrCD8W",
  "key8": "5rqaJEW9oLiLG6FMc6FmJt8oEX9EGTaN3V9pzZ9GmK5hC9i74HXfJLuskcGBv5ymTKmZf8rKe5dDd2ieuj6fjCLw",
  "key9": "hKsWrMDAXx8DUAM9EurWLcwuY1oDfzZzSqxWR9dbmUYSYdZpbjjuVDoZNq6wD9f94ZrEJVvpD3gWyVVdoXqAr5u",
  "key10": "4NjTiTrMHSuzr455SWqWEviqj4tJBhfvetgRbi7JCgHL8D3k5Usqwo6ZEHmd5ygmaUvVXSRqqqiSHN21ndQtocWa",
  "key11": "4QY6db7F6umaKPS1xXxi6AbF1fjbF284egwJzguCFLHbwc4EgC3sFHWyxCmcoBEpvn7P1oTjr7F12VqAvfnJdtZh",
  "key12": "4RTM6te9qGUiaMRQjGcdSp8piB1sLugzhUmt8Q59pqdz2oVo9opmqBk7shQ8u49Uynvtj9Q8M4D22fiGn2eCYfv2",
  "key13": "hsvyL4bKZLcra3Sn8XopZ8FX7itbaVYBfisG4TMehoabGCe7ysQorhmAKTWCSbhPf9Xa25PjJC2uUSrJxMMz4Fb",
  "key14": "emy2fd9XnTk4Z4jfZawMhi7uccBDbC95DcvhivRgWxSECKTgVLWrnUBbdRxFGChVwCsLDvNsn1Mzr9UFnn2jRTm",
  "key15": "3hJTxAiLX7MSYVE5yr1GeEq376UFx6ZgCUx6KT1Cv9F5FZDgytBnJoL9MvBa7A8HuRG2rWP9uXEhrCKxjyoQ99LE",
  "key16": "2cgiyvGaeUkoo5HphyHhfUfw5NXwFg4KzZBEmUQuLfkVrZpQM6frFqADEam4CoRPJmkTvZt2mi7JLkqEbZPccwwD",
  "key17": "3yaoxm6U73RLs7QW7esKPxVFZoDZG4KT7FURUHciDQD3PwuMrGdzmS2V23SajYmFRhVM5WDBpn8dK5rVyPhZK1b",
  "key18": "YBuNDC97L24hKtNaEPBsSF3vYtCpPamotPHCJSwfT58G56PTbBVPzMiMfrm6y65i9127rMakxNazL211n7QCUD3",
  "key19": "3Jc4SeSz2GFvoet2nquZGyTJ5M8vkNE9aw765p5kXEmHHWhGsZymjoxcbJeUdySyrV729cjnv7hjZVZrN1a1Nv1M",
  "key20": "2cJT1yTPVMBM7pHv9xFj677hEbr6quov8RZrGE1zynpsuu6eJpiSiG1oYa71dzCQqVibgQPutronxa335xJix1RN",
  "key21": "4VUsha7dxrzgws8yP6dw2G7Kkkzs1F4duEdiW3NkkD5J2WXtKrEC4eY36ZJGHw5oLgnpmQpmGeQJSETv5w6VeuP5",
  "key22": "5e1Ns37CHLy9CmM4vZzA5xqumAEe1VqtDDjkSNHoT4aGDxENEnwCNTG5usf4L1kjQJZmWP4jp11zgFZCVWAgcpcD",
  "key23": "2VGFLeffk9nCvNpW9qsavj2ua86w5AnB3FobjvWGAojStKPrDsUeHZj1xRzJ8DNuDcbhWbzu3jQ3FMm2d1vADTiS",
  "key24": "4d7YQpwpQbzFrB9iLE29pBsEbBqYZRRWE6twitFGaeHA4sCWRFbi4FW59yMieYDeG2DyEdeJrZ7L5gXnncXSP99b",
  "key25": "62xCAjVFQNru5CQNbgXR46j9HSX16GF3JSSeaEoGDRrfj3dQ6aWGrPP6PT4L1gFXiuRnHkUKVYJo8K8HeyzP5iSi",
  "key26": "4ca83n3ZVdjSNX7X2ezx4SM1oVo1gSUypDeUa19rc6ACscmjdgJvw3gFViaLecSZh7W2G637JxfJR8pSnbevRJn5",
  "key27": "5wKnUo3xNPpR5DeQ5a5JMMhzie2jAKMqpKp6mqxZpMafhmpj67HutbLjM3bytDGSHX1GespxT7LswVFDAQvUyXUo",
  "key28": "65pQPEkJy16P2LrFWFzCANYT3odGrFeNtogtueK5zKGyx6PQCMXLqoxhowKi2wop9EcuV42yw2rwEZ3twTuRqkHM",
  "key29": "PE4t14bkF6ShtRiyaARcmLKCq72Pt8gFKaczXteAvVBMSGfUMtNvZUuA58E7SUFTyAWiqdbaf9ajYv2uoj3bb3X",
  "key30": "3u5bXaB14CBdgmwvGAMqZCH91uSvuAtn225D2ekND4KriDXCojDiEoXmRHmsi9AqBt6DayKWKijS2THL8q6WHRwu",
  "key31": "5MhDsmhYdGF8XaaMjGakiZZDPRgZWzAvqEi7JQ5ZFSvpqSvQBoRyMxEcZiWxfSkoPM5Ck3bfaUi4Dqz4CLEF8TQ9",
  "key32": "2xDu69TL6aijK7kjD4Sftroau5Di1sP7fFLtK94W871mzLu2ao1HoSSumXd6VC2UFQdX9nGgWPj9QhnyQz53yvY8",
  "key33": "R266sAKnM2dy2E1LK3WDwdbPMrQUkcTW5qw22hgNMKr1XViKMkeEjVHQjh7CfiWJK3eg1snriMtSkaXZDsJ3hxh",
  "key34": "64rnt3y6WMs2xyJfkxfgdJDWEYag21RvnF5kLZMomWssZR3hPJfuxLaQWHKxm4sHagW5aNVEaZsvVgYy5G5fWfuU",
  "key35": "Ab6zmU2Av7SxvxQvuKZr4rBugbq4eDzEf2ZGmfbdd1HaZtikxDFgToUQZMFCnSA5WrBjTZP4FotNLKVCGW7YE32",
  "key36": "AF8uujHPhydtCzQHrAkRa88YNwFHCuXf3YeyoszPnLWuk2Mrdt2RjvHpM1An4Cwg27z4hHKWy6GzitTmbejsc4n",
  "key37": "2epU23LZ7VVnvKcCj6HjR3BmhmLfhHVamrPZxud9jFR3jsbKBDFnmDf9vCS66bSXBtDSmYzwUj2T11o14vpfMne4",
  "key38": "3YaTSvCGY26GuNKpNxrSWitmFCrLS83NqKiPhmnEsf72GjXs44EdXdfoP2hYsQQ86eRUx8G2yc9S8PuFaL1wU6wm",
  "key39": "27wXB1FsDLptZajwnrYCETXRdDFxFjxLpxpx9KNc4wKjJ7FXUyo5RGEkSGiNB2nJfp7EEQTyZcgxFxpVJXU6XxrQ",
  "key40": "3ifwj4urV7uCdmPtTHHspbXcNVHgy57s69AqUtmNWY2NJhchGvRBTGP2nZ1NWhARQ1UQJHr2u6k5y7AmbPdapHVw",
  "key41": "FZDN7mjyu6kbpch7K6V86EnoE4zB5xhtPDpRnmfGdbL9ix53w5EECxdfoimh2Xfdc36EhM2rn1JU3eV1xCigpUi",
  "key42": "2ZnrUgpg5tW4eeRnuGkxZTwhtmzu84KwtdzFVaVwxVGARMFsTykFRLAdfTPVpoZ2rjvhsvU5bcC4KfLNEf7CEK4x",
  "key43": "3Ncb6GQ311PTVQUx6s26FZQy73ZtQ2jifobxHL5qKJKFSnfRZyWz84BZh52cwHmYmD46V28Twp9ftyJNprVAr6D6",
  "key44": "33aVpzfVZJwnVkk7NSU2FDExXd1NxW6bwiyxWNxd7iTN8cYbEk311aLhpjaBC9LEmm1Nt3WS7CHQZ9TB5hT4Lqp3",
  "key45": "nVF47Sh43WQTembdUdGisMUYvdsYxz9UtZvUgJ6c5Y77vdVpEBjrT9k1Jk5ZNzgijy8htJgmvfhc1nN8NCY57eR",
  "key46": "2F4M3RYriPGWa4APXNqyffzckH9Wq2i8M38WyftY5Fq3pChWB3dhCsc1bEQ9BhZ2PeqseXeQSoPZ9KmuWk2Yic9g"
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
