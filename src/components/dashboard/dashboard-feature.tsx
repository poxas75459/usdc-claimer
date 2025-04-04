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
    "Uis9NKiGEVSgThS8GX45hEai1rQ23ih7mG5Rv8fxX39FrTcroAJkrVhfyTqakSPNmrkELZipkW691jQ4nGs1i3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cqM56ESt9YJFVW8brq1WabQ2NNRMzofLWrKcuYwQB77R2bxyy8T3UaU8PE1fFZjniHM7VpBM1CbstFwPoFvJBJs",
  "key1": "5hn2giNfQrK3hbv5qNEpLjc5cZjSdcryfPmERB2WZWSd833v8JoT3iG3gpaWtR8qYZ28Z8mbuHVvm66jmQZb4JHu",
  "key2": "8oTcK856vuko6WvTLFuDS68gSTNsUZohgG2RXMdU22oHWsjZkJr1JfAfAuuXZZmN129rF1yWNU9nBFhkDoUQUhj",
  "key3": "4Zv3EkhMv4FKWX78XbCGskxc11ZYhDbdmNmQE2N5KiGDSiN1C3RdgFsdqom5oZDgiLjzTCuVu7uJGNdx4Twd94o1",
  "key4": "hdjLfuhN2D5u7pLF7BsbRxVQyAVA3VfqJvoFVvpP5812BsVBangyY7NpR1mgctst1MJMtswXzxXeLJvc49iYKCy",
  "key5": "2M5VWr1u261KzaVqw3QgQNK5DcP21ubXBgCP9FuNCub9UUajDKhpVzkZ71UzKgaqWrWTeHextG1bXKv5zw6V4ZWa",
  "key6": "3FjCjnJKsu9wDkogPS2THCujLyzP1NjhzpTma4NrnQBNXjY8H37UFCUAihM5TEtmJjp36wv5t3QMorCVzjphHDTx",
  "key7": "3DY6byWM6N48MmFjuZF4DreinBibHMnqLQL477iTycVKA2wUEYGDo9JoiWqssLw6odiSs5YGTJ9KaS8HgWUe5skH",
  "key8": "3aAQXxabSZfrfNeDS9j2xaZgAUWFYTebumM1ynkZW7uhrEJSFH4q864NsFvxxzdBEPgFaiF2yMn3q126tP1FpfiL",
  "key9": "5TRRLeTG5vpteh4RjW6d85AYBf9TB43bxmAjj88fNqjHH67EmtnhQKWo1BtvH5yQ392kB3Trifc6ht6G79WEDMmz",
  "key10": "2eEdgsXvh8vemHoygEGaHXCm5Z7oS5UuiFyJpiD3dG11woFxEhb5LtBagyEkzJt6pexQ6A539QVEYe1u4ACT4n9U",
  "key11": "75QULnr9vSzcRAYLJR5Uh8KBdsBVAQ8eMtRrBf2DweM5in9ACy158M81rbdYLznUy45U6tMeAMsYtcMdcPuWwiF",
  "key12": "2TZAJbRkdLwNqcFBVm3Sjjy7XBKZL11mnzVVMaexJEUyR3yj435AnjkmjJkUPTXP67Q2q5mgAMu6wHPzhR65zWmk",
  "key13": "uD7DbV2WCyX7n3Wxivu9gGn3AX7hLo2n2vvpDZ4JpM5hiv6hjc8b3TaaDAoL4fxsZ15kXztiix81WocN69wtq8x",
  "key14": "3g6JvsK3TyskMi9NaVttKQHoBuB2yEdF7Fu15SpUzq88sQn7TRyaWDEeK7bBAWYBu8KxTKmzjmpKHy7H93Wk8D3N",
  "key15": "3P5DJVzKuS97ZTXhGV5ZB2vjCPsrSdp3k9f2vouCmqbH7TiyLR5MF1yuZiffqoKCq2gYFPJ1syMmg9r8xxju45GU",
  "key16": "44n27KgwotwXfpkSx15q4hQyD4mHEPWWfjz9LLiFeThYYKBL3GwhWhMHyXznKU55efN6qik9p8No9Jr35CtWKYiY",
  "key17": "2wi3VU6zb4R5AvsHLYfvrzk8fXV1zkHf3p85XznXDH4zrSpjRkQM9V8jzoD4L2DSUTVfVeCXDx67FTEJ2QWMy2ta",
  "key18": "25PUer5GFFYjzAJ8UD8j2kbxfgjh74Erh1bt9m1ChVYDpPnkmrbSjwAMvJz66vsLjzWYfuduhCjQUEzYTMdNSWMg",
  "key19": "2nELKK1KVcMk3F1HwUUHCQAmU1n7inyZS8Dfd7xs83F3iwDTdZXinLY5PxuvmoHzfCUVyzESiij4G6rHjKxYzvYw",
  "key20": "4XXwzNc2Lq8oSofP6ANerR7RKEhFWTuWYfkKkuGJPXJ5vcYKZB998RXTtBNyyAbciEdfhDqnrzrf8vk3MmzPVoj1",
  "key21": "5no2MhgGSWc5NtGbdGX7Z8RWJXExFJKuSDiaW1K4sA1kz9YLKokKCw1AvVfZAxqqJDWNRcffD9z46gmdMSqE2cFf",
  "key22": "5UbAs7sLo45ib2tkgVARu7YZvDmpFJ14MeBxNpzF74hKNrxm3RRubMh3vKC6NYds4boKtYa8avXjZp1oSqFh8ejH",
  "key23": "62vn19bu5Zxppf51ijPQRYEtuztAp9TNA8tDMhUmBYgSrtYH9QKcLqMZS6Xgfm1wGQFuLsXph4iM1Up8sXFtTUF",
  "key24": "NtHQ6fAnkpDwY3GPJZyvozRA4mTN44cgsGGquzbCYcak1xmnVVuGRgwazgVvwrVmGwHnFwEseYEoK1TwWGeTADs",
  "key25": "63S1bc296KrrkxGKGhaCXp1CAWfVtnu33hZDynFx3ugURi6txD3bjbAeptevFxcoUFQ18Knnf72SP2q8ZqCE9Dic",
  "key26": "vdSnSgxaFW2Mbg8B1HF3iP3G7e3dV3Q389juuDiBfRGhMmajZnMFthWaCsxSXJjQbysEBkG3m7u4Vch1Ab3LneQ",
  "key27": "5icoL6ZR1VynZJM7ieLcrsAqq3wkms1pASTFakKraDZSSjGQxtCEa9rxsEPGay1EaShCj3hteUxTeFS1cFbNTdnX",
  "key28": "EJpjyfEdPS5tMRoU5HtFGt25aqTHwUA1MWXiUYgKwSr8MP7uA5C68je8BXG39fdZ59hs4go323c9Rb4JXcUzzYC",
  "key29": "3LRuckGNygQimLd7Q5NMRSfVx5f8kpWMcnEkY8AivBMYaRYARjiXBkJZAuaQRMDaG18hoFJevhjGcgxgPuc6oKu1",
  "key30": "tdLQoajPAoETM4qmH6M9RTTFXmpAzPZFBW2tPvx97qTc7eXe2kawvjUHuAkDy1BbMg3s4EypzAjQS4pFKdiahtB",
  "key31": "2GhaRpnMKVqremMfv4pQT6BHY7NHUWQo8VvFDLiTvz1rCxDLsZDDsdVY2vSdKbXKuFx5UnwTaSETyHaFqFCNrsDG",
  "key32": "4Ms6qYPh8hn4rZji47RNnJCdELFQNM5ntrELUvNTF4Dj3r52WVT8vZdJuPGVuovw3Bnzc27fEeUsmGLKf1MXfseK",
  "key33": "yzkmneYkW5DaUocsMs88Xsk6Tar4qdsJteqX2e2wuAxLLmiMSEsrsTqZR3w8YnAB2sVufXZhN8SJYFikrjjBSzK",
  "key34": "4jpaXEZoRnAa682MW1aneD3x3nKcB8XyMp9YTgu2oH2es3WonmsLaGhipcip5WPSNDu9uCWQ1J4P1q1QwYgiKo7u",
  "key35": "3rrfvkK9pCroTt4fbidRh1LNaBgQJ7XD5HMgySvGhioAKuDezY7TCDr4TUqU2S5c8QVu7RNLtiUSiG1rbpUVaABf",
  "key36": "2z7yMXPChhxGqVN5BtLiByePKcvS7dLPYcrsP3hRgx3cDnwT9vqPnD34AAQv3D1sxvcJ1Z7VX2ctXJguAmaM53sa",
  "key37": "CJMdKRS1mvpfHG5xNSd4wtMFNWxMX6WY5A8SzTY541aAH1wAaj4XffLyZGV67KAnYiqkTV2i4XMEz9z4jxy4LSF",
  "key38": "3xdRiaBo9AxZJCRP9c3fw7bNBoc1Kxx8L8tDn2JbX6wS5DEkw5nHihKgDMX5M5kDpXro9a8VPs3r78puy4SYqw4r",
  "key39": "BTwkykUdHwbLEErgJuAMvsqeehvCrmRYh18BEii3yRacGruKENivFsZegKeV1h2bfj3GWUhK1di7VDMaAbZ9PEr",
  "key40": "39xSqZQbRijVMgS5TrJxexGxbCQgD6rfAnxFJ1tYhzjsRFyYERmhcwcbMLme1jLJVECp9h4bjWqdhbyLr6B423pw",
  "key41": "3i4neBrRNPnYKoByDhVXpCA8HApXckuZhyGsvMJufCJkGoo5yg7RgJaEAHZt7LEvubecpVvB7ocWLc9T58zmDjXN",
  "key42": "a6FHYqyCcqksRgpiwrxpdBuwUyZFh5L5stvADhNU72p7hibz89XCSpDdXaNzG5VWHL13CBRvziuE4dhSM7dqkDE",
  "key43": "2y8L4x4pbUutQG5cvWP8sVsuWLn2PsShPQKioHZbeVXWVZ5mZcCwDPY6sWuNnp8QkoNeapfeorsYMRP93CS2TAiH",
  "key44": "3T2wV4U2uAvzRHoZXDr6RgXK3C3hW5VPRsPjeXTTccbzHEu6dMZWhDsv91Sa8F7tr2U5rTi4wPMTfhXLP9LVRr5p",
  "key45": "4k81QxVnXD3sSFkWaJhJGUETbpgPYCcTGAk9DUrCfPGXw4itM5B6ydWWSBe99G7dkCtXGQZg5zTQbYYXALLuHnNq",
  "key46": "4Lv3Sx6jgqdDV2NwHVpwghJy5okHpeMSJMxuxHY7ZvrceLMgBc1ekg9XYcschxRzP7cQkSGmQ5ZPVxWzfyoHYviQ"
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
