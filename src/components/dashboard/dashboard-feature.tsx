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
    "4foDvodEvcu6nahUtuGX6WpaRQoHQY1EzpDaUZAi3soAtENnWXYd3rJmNXHCXdvsPnt5HTKPGSoZNCJcM3ZRLFnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b8ornTZ17tpAhLbiCNshP7E1gaEseVFoVpkuoTF3iuNWz86AXXZfw3RytWSt4KCT8Vf1J5kZF1DALgWr9NmwJph",
  "key1": "3UGfqFr8SSFrYhh85CuMLRHGcLMuaUPPzRDWtzSoawd1isoPkZQ5ynHaLSeNAimwLAmE4HDgUrYCEg61c9wgKGyE",
  "key2": "3dJn88Xc9WLXotZu1v2SsytjaxuS1iPBqYJJ6KZsqt1r1Yn1tD2hzxZKPkdtg28NAeNS7sYjXemwVEZnZm8dNQzB",
  "key3": "wGmsQMBnPo8cLUuqjg3F9NZDLwsimaAeomBnDayUZ2tqBPUMTJ3zSeVCdbsDbHqQTzYnqnmJ7vWmFSzSACMPadN",
  "key4": "27eQAPCHGHpdK24HXGc2kCmL3yMHBScKZDE55PHJeKsXYGhri4T2CKyxFjy7Jb5gkTdk7bwqmUJ8sjtizBtEqfzY",
  "key5": "5mYcFWwdK4aFhATr3krrvFtsd94eootxfYoE23SN6WbqAd9R2SuMEQf2HfbLytAKnK63ofRBqLz2PU4tesQKyj5",
  "key6": "2q6aJfBgeymjTTq19tG9fgEPA4Djp1e6YgdTXfMe9yW7eiXrDmZFhtqjxffyhhnSVSGQBPMjujnwCU8A6odoEMwo",
  "key7": "5JhJkKPT186LZ5wGnFNuWLmtszaSBP2pK6tzoFiw2ALYRcRrSbMg34F5ytNEPCPe4Cyf3mBqKppzTgHvdtDgAemi",
  "key8": "5zwFTzCENAAGF28oLQpYy3dCttZ6vwtGnCbGYcWLPiDLKCpvZnizn35geem6EQCjMBfmwWpxKGuUYUBCEv22EiXe",
  "key9": "VEFtAHxWHdSaTKcFPK7UeSc8qLHaePpgsv3qsfNns3vyP6NrqkFYmcGgtjfy83rLkqmKdx5mkr4sRUEM9FtQhgK",
  "key10": "1CTeXwEP62CgvzG4nFKk3a1FQ6Ejzs771WDzUpTR2S4utgEDw84UP5PTB7Ej4zeynybgBqgCxA2NYYpuNJL8mzw",
  "key11": "2Vxro7cxTQX9QqmjF4KLrAxKC9wHPjvNk659rYAuWumVigu4WLhqtfRxdwRwfWK7cpCfvtKzrVJNjeyMrFad88Co",
  "key12": "4eBoTBjJvRTYZjygWB52apoAPmgmLxw8fhqYDviN2PN7yjEo6QRbGbaxVMwpa2cwPfbBBfniMnJkMToK1U7FnqgK",
  "key13": "52RmsrUbHfEkddueexMbHEt13gPYweeuLvDtWTRjTMeTGwBZaTV996U68QAuRnSsCYWpT4HYiV6BKpeEgkobPEVd",
  "key14": "2esEY4WLKuWCv5SNcby529xJkSmqKQXhRMFawnKi3wRsX86mf77MXLuCf3oCykpqu4uZjiJMqb2iaoY2TnTLFZN1",
  "key15": "u5H1k7NdJMGAjxqcRxUpnUcNHnzT2LoNwrVmXWBxj5ULSVYZjaXsTcwdbPGttcxyAB3KLX3ujkxcS7Cjxg2Uczw",
  "key16": "2L3USzsyxdPHSUFqDcMuma6AQBE3ohFsQkjG7ENeKgd8Hj8AkkSk44SKoNWAUdDJnDFYCM7xUX3SuEZLxVdv6fPP",
  "key17": "qf7JCEWqj5TJ4d2XrTD3YtY5jnUpPQ3pzP16ha4NxXD6JUGitkrzWT1cWyPDkBVLozYst2iPEiVAfvxXVRy8uEF",
  "key18": "2CANtv3QCpVRfbrXZoXAMcdg28N4SjHpuCcdo6xy9ew5srfBoQdcp4a7zjiYWYzduGXmCe4K9yfnZQXmbrSSWCPe",
  "key19": "3NTanMnBAYuHwZ7QBN1Mnz3e6gtgRDv2NkQEsrreZD6XCGL9R68eQUDBRPGrPTCv6PHN7PUN2dz5jN5GhGBN32ZP",
  "key20": "4UdJKwc6CRSruBFAndX5LR6J1pJhdh1C6R6tdcaovRNr37t7n4EuAXVBCNciXjfYDq1xrP2Pvjiw6y41Wy53wQJ3",
  "key21": "5oGnD2TsfqUEC4TZXW1Q3YcrKKBaGRf7Qzuphuh6vV1FDXVrseB7SFfWowhzWkr2pzFXTkPks71GvxzVsRtamkaG",
  "key22": "3YX93ZQBM5BPj9n1SFTLdmaHE6HwUb6GojWCoQaiZxWBVv8UmfxR2JxH4d2GzQuMEALbzjDXN4EbfVjMFMkBoTQo",
  "key23": "5kx62nDN9gbr7akc8edNm3X2BfzhdBLyLykQsEdbuzV5BwTFL4HjG9D36H1MWA86FKVCbrerEsnRAnTGG3n4FV72",
  "key24": "2QtLBQqHr9R6fE9wzyQSqvxXqXcxYKsDuv5cdGneMZFb34ygNE7x4o6rhzRmAozNGuV3XFAKMc3nrbUg91tzqqkw",
  "key25": "5bSz55FF2kn4RxShxesabxWTHDcE7oPgQoygsNBe2zEP2uCCYt2FBagzFNzTn64AiKZxrYwKfhoaW4Fb6FajWtvb",
  "key26": "3HGu72V27mfn6ALM73tozJ8D558UzE8HS5WPWUKq97NgcHymJkfV9qo1L78vHA9QyBJUxMffUdmDgrcpbxD4Qy5y",
  "key27": "31LZmB4Zbr79tHhZS1wAe29R9DjPgxCr6TMkaYqQeWqkki4hpzjUXVYNrPxXW1V9pn2S8PbZKKZ869GXg2JSa4Vi",
  "key28": "2LFBcjubLLTQptZAbvGFNirRp7ysvbPznopKhxcRo76jBUp6oqtqLKC6EVRsJTd8K9u9kp8n8VWEgirfiMZHxdq8",
  "key29": "5dNM85jJxrgeDLtiCab892wm6FbafhTFwxnRYiBwWQtiQ9d7qhV2dMHTYatmaBPLngzAeHetxN1AYKaGyTR7zbZF",
  "key30": "28Fqn825gftpiVSf8aZZkQ4hC9Zmnwtvrz3DyrYg7ZtCR9undkhUxi81HGhPVcbBBCCTgy485eihRWgRP8P4ZVPm",
  "key31": "3TDpdn3wnZzkPp4x6URRLnjBgMTnjrujVytb9RmnmzxJL2fDJPkroEWCPuYsywwvB4mszNZVdjzyspTnm3QXDMPU",
  "key32": "3mbo1ttRDg6WwxQBQGEvosTqjFT55XVdmDFAqz1QuTJvWBkrWHA5kpL1g722wVEUSqvezxGqWSKVpuWURvzQUavA",
  "key33": "5Ds9hdJemjKC9pbVbqs47G7dNWwm7MGoneZ7d1WChgq6JYCffSKXXmafs4pyMPWw3ohMAQoLnHno9uDrPVvpHjUd",
  "key34": "3qHHJTrVeSawsZHaSjoCEYxEi4sRErJHjCuSv2sCTmiWAA6s6csDpoqU5LehrZ1qR7FFkWQqbkUqcYezMvSPa5vb",
  "key35": "26hwhQLXkNqcUaZGTPabkp1MhGsfnbBAv7CNJmyoQQnyCbr46Cg9DyGG5jXjbGVsTAvZPJATaWGYNmsFCpqoMRw2",
  "key36": "414fGoX2bYw6DZ3VTXZdPVu7o3u8uhVnJjFbkf6mWHNZ6NVYoVmQNkzNQKtGQNGiPu1Wf5ozJpwGBWcHZkXfuaT2",
  "key37": "2wrDjdVyEJcyUDXh5FsWNsjMC9qfR9SmernwkFSbj4aSMvYNxutgvZ6YJMnwovGvcgXh4DrZ4x9nN468XzKLjKFm",
  "key38": "63iTRRMAMZRBD4e99bKK4pLV69WhMB1SHAcQL3FMeV3nSTZA3TzU2LUm3MGzuJAaEiYqekZSdcQcWvJ9to8BGHyZ",
  "key39": "5BzhV2e4siHisAf3DmaSKNGcwZhrxT3V6y16NtV8iegfuhcCC3fc5vkzTtaZ7mV1xCqz5C9S8dJDf2NQNEGzUeRA",
  "key40": "2vfqTG3MY7RPCc8Un13WjDtfPMCG46Ewi4Y2pEv9MyCbC4PAsa3xFPZ9sdU4ALHvgwKAM5TczzQv6BHPjnLFXYcr",
  "key41": "21eeofoUevTn6Q3D7GHr36tDsuPHEPQCDpwNGWgU5cQ34r6wMXs4i1WodYmLyafvAzXUPNcc8tRuPLCpVY57qnEU",
  "key42": "3xW4AnfU4AVHZoDgriTGLn7sSBpf1XXUDxmHnbdUULiHX3vufisY4jtRo5Lw13SsMJAjUxwZ4cecuBcPScEx5JBQ",
  "key43": "5uEYKCJFhD4cBVzvNpRZjYfNPBpMjTsFDFKaianBmUJroBNJVMfh6BRmxL2UNT1sisf4eMh7gAavUXzPeWjsFQzp",
  "key44": "3vmdWS7AykbfmNFvTXTVSa9B85EbR7enTtUMhFvSoodgwko4AhwBu7SmNXoi1Vfz8n8NT6mfzFvHycBk7ovimShd",
  "key45": "suqv3hwTokiv8MGM4NFNKQWedF17y7E54NX3dVLqmaUchYrWnxAx7EnxYFQ24Ek2UcHmrUJcZwRC5345nibRSfc"
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
