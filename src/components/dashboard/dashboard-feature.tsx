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
    "3zmhtj38ydSGSdr6oFonn8TsoDRtdRHmtjKXCiNLFT3qUyR8MpZDV9TdWaZicMVsB8yQRC1rwaVXxrg16zQRvuAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Di6LgyKHWmUyn7yMsMXbB2f5qBCaAJcWQ9Lwmu8iTzC1unWcxCmif29pvd4CEo3MzfnJQrZMr11PRMrCqm7aRgA",
  "key1": "21gLw99LcLBtAwm8xYnw6ZcCTPkra1MsQergRiPgAgRCotPAnTJ7rQZWfRrv8tSDDp6jUGgfyWpoLaEk1pMrRJsp",
  "key2": "3Wvswj3hVp97vrC8eNSME6fAiYrFCzcwALF9ghKSgS7g3wXpGSe1ib3pQF8abG6SMiPFGhMjSuVZrPSf62XNxcHq",
  "key3": "2BV3hSJEHTrKzX59WHZqyWSzRnA8ZrS627xAX88zizQddkDFW4H3mhHcN8GCgXXS74JjNUxLPBiGo3Kie5rt8s9M",
  "key4": "JF5kLHA8PzL6o7XgER5UYY7MiisvZVswjBwo3wNwz3oX3GsVbfPDnvqWwzfMm9VR2pGThKjWGBbjatZ4ntvoPCa",
  "key5": "Qqr9sqT74XMG1auai9GY3vf5aks1TSD849acVH4yxQeVC39oQn9ycAakikM8oYfZP5LwGzdLBiVBsRTDvJNyNfx",
  "key6": "2rAYdau1p7MineLH39PEC8FcPFMBZirg5koK9ER82xozP7gtqBbKSeErC8dKQpXCU2b3Cmtb8SbFhfuXTwhyDH53",
  "key7": "3gouqodadvRHLLc3mVPJUim3gAWUCzv9FKL8RcFB6Lima69hX7QhU5WdSEThx7dirJJ7Xibs6A7BjP71GMT1hRwT",
  "key8": "4wczxqbiv2WWq17zkaUAVyJ9kQv2ALqbncHdKTc4tV3CDkthkBMguiqMy4hCJobWfnX4EmvSVQxMaprxJwKQrMDS",
  "key9": "5B6oHgpiNfQv5u6pqktoxCxE76dC4vJVzwe7z9CSoLGYTt3ChPCtbmBv7y4tiJjnWybnHGtVuZ8y8Dk6GNwngPo9",
  "key10": "Gw3J5Cc94zRFB5gAJdhHwMYRQRNfYQMDxnaooBWD3kwbPPoFAxkwABNQuixcb6wAkiXwv97osZMsS8m3SGk2tXf",
  "key11": "3Ww4CXvogTge8ztXmbHvLiFwvywaaZaW5uVNTN3W3Z85WorNFi9hNQM9hGy7NMAmFEfoeLsEuSVTDt9bErwv8Ctf",
  "key12": "5g1qL76WWcRnDZ8HW1LZ99CaRD4nqTNsQZJEsPPb2fySXTSHAd6dT4wsVQJCVY2XYq2Kfm6monLg8P71RGxevXet",
  "key13": "5VgxNwR575mmxn4RYFkvyicrHgVTfYSmet92oQQfiJca63ERiv1FEuyQCQ33x7Zrg8VCM4ARWS67Leu7LGo3s8oz",
  "key14": "5egbgtCNcF2RXcfhjHP77x1faCTJvCtS8KyF3xN283UBgABGWtxmfYjd52Y4huHRrGdxs6zjXbH9po8frj9NEnnZ",
  "key15": "4mZFiFub8cG6typDK3DGuFrvGHyVE4iE6tK9bXn2Tg5aj5o8ysJxwP3CACdcjiq81iSs1x6HBnr6upnk81CKLQUW",
  "key16": "2sT6fNCYD1DHbB5pMHwyygNJJjH6jj9di3DUosfEmiD72eEtxbn6QTiD8Fm3kEEiRirKVkHWRCudCThpD6y47Bfp",
  "key17": "3Uo7XvyQnxQWPDeLgRX3d6YoYGnZp1dxnpoLFRkH2DPqUKYvmKMw6Riqqj9pTKjPATt9xtwrCJTArteGNpZZwjGG",
  "key18": "4H4fj91TH3FxCFQEAzeq1br919rzTQ1RkzpDNN8FQpLDLab1apzZ1xsQ4P7x29V3Fmbnvmpd9vcRTyqmDqnFjzt8",
  "key19": "5L2kEpzcDtVV3keD7w7jFWAaiczphrGoARkCoVi2zxUWfDjr5C7CgikKfAWvWnSei3G3YdYa4Yg5AQ8AdGeKjMpW",
  "key20": "5zRHCpYKGRnF8ZugDHox6xAAJnn2S869Wx4Hrkjtb7qZMeJW5A1JCBZM7L8kpV4QY5MCNug49UQCWbbNmzZHL2hw",
  "key21": "oGfp77pwCJXakCWwAsyvSemF7Hrdu1PCTGuKvGDS1L28KB81k5o4m4FFAqXw6bvXim7rNsZQizy5t8RivE6JTX9",
  "key22": "2vJLQ7haDW4fC386iaoKtWDPe37U1WZnTBFEKNF1a3ywMR3g77AkWxVMNM8DB6KH54Cfa36Q5XLAqARTCjpCeJw2",
  "key23": "2fDNyjDJfd17e5XUYJti1bHGXYrZ8PjXwfwAZzqSt19GbmqhwW4ajJLg5D6g6vvZrUudDPtFwrxVbs8Qb4iA1Gem",
  "key24": "38EMd7ydmnJ1aC5NhjSEzTuuSgMQAtiwQdtQ1iET4gfJCtmginDWvP1S5VYHgGXtabpEHgkmVhh78rVoKnVnXy4t",
  "key25": "4XdWum9CsoG2mPeLiHePWV54Atx8nW5q2D9GvpMigqUiBXAL1ZDY3G3znP6jtMrNK3Wc9un7UhH53i9Tg2hfscUT",
  "key26": "y4UYeUgPPJ8stfN3k8Q9jjhhQNdewtTUB2bFAMqXWHjQXchcaSQTUkK2kqofcbsG4KcrEqJyixXMkMQdmutCBaH",
  "key27": "AeW38AKg8kko1Yp12dsNEKBTMXKDkhudc2yJyrQMUaY6X2QKXMVmzgBbUkDt6imM7s2HPCbwuhm7keHpejjH7J7",
  "key28": "2StfRvAC4LcFevsm3HJFLkexGePCsX5Zw3x2LxCFPcpzEFvhykgPbVSrv8E9nMR8p5HR9JBv4MAKA6wa39cpsG8Z",
  "key29": "496hCPRWvJ918gncEFEanM2acR6Ws2MdtUVAvG6qyyqswEUZamScKaVSKSroi23YdHNxeakQTJXhp36VUZemYtpc",
  "key30": "5TGfhy9TCCoUDCNCAyXqwiMF2fqfved5AfEsPozZLsxc7gKgnpazZyyAgigpix1fodpunVjzvVnq1Wh6A9C8T5AC",
  "key31": "3e69iLqrJu34bAPbNHmYY5UnZxtf9JLgqS1QtWAncmWXAmbbfYkxYqohGENyMkKobXUDWRHTs9pY2LMBRgFtvTWJ",
  "key32": "44DQKZCnK7DCDgie9cF9Dz5NT5ELq9x8S9e2nECtKshLcJ6bLRwdZCTKxmq3XPAA72KHZJhZwsb116UMzqA6Mfm8",
  "key33": "ABTP95Eey7wvuetK63mZFcb34wSpUgCHjGB8tQnkTC9jimCm5RdzZNJDJSB52TpsXDrBdXmHPgSa48q5TbBMAUs",
  "key34": "5GW8DhqvCe2DqsanR3zvjky7UGB7weQ3HtzCmvDDepTbqDB8zon85hLDrRYZMTF5kDM1x1MVHadtxiNa6y8CFk3f",
  "key35": "jwayJ577BGLD31YDUBgkg7qwssLJj8DbM3XFQSUHy6pmZdx4PXHHY9hdiwT3unLUP1KTj6Vas5AEf49p1bPGRK3",
  "key36": "5fxkF2ntPo32GXXTerWdjBc6WTyuZ7yfuFR8bzycXNb85auW7eQHgtLMwBzJkD9pEidYuCNS6KBVPmK1x4GM4hda"
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
