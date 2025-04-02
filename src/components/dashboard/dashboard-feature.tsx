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
    "51AwUqB9Z6rjMq13jkJCVaAXnt5SmNXqk3crTGFgKn7CxBrmQnwdZSX5fwQukFi36C1zhZmt9xPyLvRwFRyNCHcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iHqRD9frcp7kJ2nLop6A6PGtKW14s28SWgLNXKPrstCsuQLuvRm2Box5ZGsHDGDfXa2CBkGgmfZRnmrYxu63NG7",
  "key1": "2vk84gQeaFaqUhJajU7QkNTdEUEDtUyBrmaFibNigPRGBUxqmnkV34G6fgFKMAgJzV5FL4cgh8nmfcuPs1EkuzB2",
  "key2": "5scuJwCfxyzj5bXphAaHc4ZyF3rGoHugEQ8JfQWzwfd2BjThZjzcsqSZ3wHc2gXaGexAr5rv9eut2vTSew7aPmGD",
  "key3": "2ykpDzQxAHQJfTWRcsT8364RuXUayTr7G5GwkPeqqR68K8E3VcaCEHa3RfjZ4unw9E1Shm43FiXUFKBTFvx8Za7X",
  "key4": "ZfKRXcfgLPafiFzQEqQsBaMMQuDojAqXKnYkUeaCT2hW2xcYPWG9Ndr1zsSAQwvGCzs7qN9YasbU5WGxYs7Gje9",
  "key5": "2o3jkXpF3AEGx1r95NRUVBrMMyFjsNFKw3jeaoCum5B9MpU8W475tLZVaf1Bd4WsAePDvFr939PbsMNSEKzHvMho",
  "key6": "2FtdhDTTuj3EUNK5CGD4eHixKaVJ9X99EtXqsYAfiJfKqP5xpj1tgzjucseKxFRjaaNo1C7jSXpHzRoSbqP6Jo2z",
  "key7": "4pNdex1ex2meVHfiNheH9sR9EcTPGXqtoWoK78XUasEzexfkeNcgfp1aghbH8mxxQfRCqtDH29CnF2EAu6yzB98i",
  "key8": "3j3VYEFNd64Zskb3ikQppfkugP7c1fNY3JTM51p2vSAN9WAniPsotwW8wDKMwXf8TpBCNuhf4XzXBZiWx5hkCxKg",
  "key9": "2Vxx7mPU9uta35eLWKHvACKfjUMTaW1qSe396hgqF3pW4iwtLjsKqqDrPyWw2GG4W7RxcLDkUHGckdXjnVsvG39U",
  "key10": "5V8prz2x4akAcDz7Cd4bBRQSbz63Pe1MtytJA2ru2mUvjz1qDGrg3juuxEuKyWA2F2WAP7edNsWRdyMeXru7tdAp",
  "key11": "3yvvsLSUMCFM1pmvdEPRNyaXmThtberaoBaFpEocphpWw9SHAEtNBqQng4u2AXCUcgajUUSTKKjFhP5MWu7epS3K",
  "key12": "4M8fPQqhc4rGUbPdkb4YHvqLkogGU4JBkp9q6HLfyEuAs5y5Lq133hE6Kkok1dZ8YetsG6f8eP55GwXr4a6yprpL",
  "key13": "2YXaiZuJ1WxFeoEDzLPUbxo86dWhCeBX8oHc9FHraPVT6K9xeqSW88xdaJ9Lq917NsKFuDMuyHBxh4CuzRALJEDm",
  "key14": "2WwXgaMRWZ8XmUCcpoNuJh6ctKe42hDWhjNTCmjaRcrcgNeEv9JbFGyXX1aF2qtrerXKmWQHcBpZSYWQeuAV1iGD",
  "key15": "4LeAVjD6LVtrWUmuTxqbt7K2DUGdzCZGZZDzd1QsTb1GjAFVAgfHBsjR8c6ynJ4ouTwWUNuVuNy1uuJnBnrL8Hur",
  "key16": "4nVLzXEq7QB4voxdJWzKmj6m9pYrkzX6ujChUuYsWRYXKBjbvz51ySqqSt4M848DPVf51CcmbV4scm1PRtpAqo9Z",
  "key17": "5KAaErcboa3tpe4dCW3XzzfcrKbB25bZqNnRheJLmmEuBt3wydG1UmnnNnWwVQjBvfoywtTBE6ToDvg3syNX2jaB",
  "key18": "4bFGSm1KxfkRbgx1JDRs6FmYRhqz5zy2CsfLTi8oTahfQJP52nJfWEQh925GmNXU4rbkeq6bJweWzRDVtKNV1hm",
  "key19": "2YTJ6Uz5mZnXoHeTo7e3i11VAByjQHGtP3qBGcFiVsC1h93sTWW3F1xMmRHoDvpEtmUH3MwhjQedeYNcx5sPsTDS",
  "key20": "3p3oF4fZyp1NGDW7mnScEAMHSLFHGN3harQNHu238WNp9T3wEeryxPd6AbaeGxp9EnbXLseeqdau1czCzwTZ2xKX",
  "key21": "3NrquzWPXNTT5cLkNL1qP3sZUiATFerSFTT1iRq19iVsQXdN8ErAn91s5Ty7gc2KswAyRG7STv7i9GmWA9Xt3bdx",
  "key22": "4KzdMuYzg23AN2s7Tkmtw5mk5vZXYmfZvfRsvVc5pe2Ud5QpgLgRfdVAbYHP63eHHfzQeq7jGNCfbDeHh8NATV2M",
  "key23": "5SH6F9YVQTfaXDA1cYv9SYNL4YYPAm8PDRXoh2pm2wygkCa769fyopYCNPA75wKKt66Ci7KGeKaZisfntZAwje33",
  "key24": "46tLTJrnNZL3qhYdEDnF291ixaCLSvrysnp76JLBJCP8qy72ucEtUAYyh2mJY1LZn7WYWEvmWz24FBSjvLWYkK16",
  "key25": "64dxdgXMnMEmxqM2ZYvWYr2WDbNHrdnQhFqkHSGKzTYz8H9QmmNXbkWntxmST7GknfXChcqMiCGJgerNMaS6Aa5j",
  "key26": "2Gfa3WJXkdEPokdarixj2xdN9fMr7d5YMXDGLfYXB4TejwTR6WZ9GfnoHHdWJGxwCkPfPB4gqMzhkNZ1XNqf5ESZ",
  "key27": "kT6qzaNu4Da1es8cMDgkdrtNucic73gzpSYV2uEdcNBSwkP2Sq7XRH5yAc5DZyGDZU67o3cFvzxCFyTaebdqHyD",
  "key28": "5vvGXt3orXfhUeRE9HdTM9LP2k94pad9itvg9LZ7ijX3XmRAY8BVqPFmZh2HjF1QSdZBaEPyPjiqWPHfrkBVnNQz",
  "key29": "C9iwiWXkYkLM4TKNvJdG2ZYHe7p5E35GeeiLypJj5Rmc9WJa8kM2i2BmYTDp9zkFnLTiKfr7aSRsNuiNuU11YfJ",
  "key30": "4LkoLcrFiPRjX1kvjQXo87WdVXoLYJKvRVfjgwLXNTJWgzHj8yjEcLLkEo7dv6cP76WCm521gtg3K1Phx98ZF7Zj",
  "key31": "36UWcB7PEUZnBWhRcW8PDaSzhBgvkGT1qY8u3qoNT52QZaLXcYncHEyc7WUSe7QRmuo9qofZXzT2w75Mf1u4wP9t",
  "key32": "c1eyp1nSTV7cmhhrW73kwJX42wUTKtLJTvemwnz2CoqSdR2zMumBRGSYfD8Ygq63sCwXzjbRASWEehtAvPgBbFr",
  "key33": "Ggt8roKUzJebPXRrcMMP4NrrENNtLipuRer8znNj83iqS9rKGKrbuS46kUVSzz97esGBBwBfQvRuV25Ugapc6Vc",
  "key34": "9AbRk8hT9ST1pXwEtzFsw3eHKDiHZSUdertWrXsKftMr5DR42nkJJGBoDiVhfFo5hTzBP91MgB6UgRJeALRHJP5",
  "key35": "5bdhsWVU1SmmaM5Csk2eXvCb9sxGuLvKQkLCLrtTGbx7NutRYaZyiMQK4iiwdckbTvVZPT1Gyokg9XKwsZ7sPSba",
  "key36": "3bjqsiTH5hcyy2x65mACt98NC9kV2dZmR2Jb5Pq4iMkvmPSgvR7haAS5yeEmE1ZWkTsrDnLM5s36SMd6kMKdwWWi",
  "key37": "2vviALm8Xx2LSiAx37VZZ8NciJuKJdgyoKsaoaAEE92PxiSSNxqc31DUWrqkF1jZ4ee93udCKA3tqhbyTb8mTB7a",
  "key38": "5fi3sPfiojqFfXaovT6aqnprzg5hMcfgJ14473NWP6xMhQo1D6WRfzHPC7VJ9BHq9YNBPj9HFaiX513wJx4wA8ve",
  "key39": "4fEu3N6XfM8VxTqQBKjPcUTPu6EvahCw5uBun5x36iBgskgLpGp6AM5m3aVFz3ivnEWhgJGziYD1hoWXicJnCRr4",
  "key40": "33qCJqNBkteKEAEvQY65yPmhdcYpFPJrCygS6NBbPLsTu2C2mJTApzTBMcMZmPuLUaxbqdK6tkPqE9KMSKCDiVYw",
  "key41": "4B3GkGy9LUAc5HwA5vizmeJTzydkTTvZYD4Jj1j9Nsnzm6rj3aUNG34a6oGdYcRL7kf9yv5Sd5aFFdhqvJyVATTg",
  "key42": "3eKZCQqr9MSPt2MCfGQymHWjc8t1cRzM93CzJzs91MB6JPErR8x37wLSbRpfn9X5etqh1NCDFLVeFW7dwRgvxpjU",
  "key43": "GEhmVP7meVuQphtF3Q13PquUMAusrAsHGdbMB4Lrdxqc9TLtuk8fadQjQ5wkcfoNxbzkUD9M2jb3W5pZVZzhXxu",
  "key44": "2mcaJPyYJ9DVRvvvf5Rn3sqAZWaHNLVEHKEcwH9tynLrZNkGvHDYbL57jMv4dwjEyits2C4iuZKN1gCNCJ3bNjbJ",
  "key45": "bSRHuPYxJLdj3BQwqBMAZbgJ6tyAWFgGiHVmxQ4DTVkxjXVttAjoX898hqbEgJU3SPA43H4Z59yuvvNAwwCae3n",
  "key46": "3SCrAPpzarmHLxriYNduVuBL8HsZrz4aksxH7zEXVqfuMZSqhQkK7e35c2vGASFXChQ47LsSPYt7VPKaMSWpX6vW",
  "key47": "3CT7gycA8Dh5i995sFR3SbDfkcN34YN5fPew9V1W4vdGuCWQLkGwpEZoRBv4oHRxPgUtoSNma9adUGYQDDueVn33",
  "key48": "5zthYQShq8vy8te7vWWRSP96rF4LKh57kUoefQJTDPza7zuUexsCFujf2MYmKyppKxAsQ39p4xxzy8hAMntEmcge",
  "key49": "EhwLZM8mykut2XsWG9nKJyrFA6ExqzV5AGRxxSKtQieK3wEE7Kq23eqYbYYyo74ftUsYW2fcJGqjCwtK6YmfMYf"
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
