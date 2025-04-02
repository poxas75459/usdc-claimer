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
    "4nX5WnHRwGSQwFUePjbf7JTVUATcuoudHzGf8ymhAViza3MSZMghgXzPPRiz8UEwGC1Pghsjx3nzDExjvGc96bVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bb5cRtrtrSwXSW8QDRVwfwauUfbDafxeQcZHSfP3aqos8vccXQcg3vFpDVC4i6TYHJ3QPEebKT47Ckucjoi3hSP",
  "key1": "2kjTd9jcseqer2Rv8qfVmbqMqR9RnRexxMnMC7bPEWH2rRGRPrG1FLP6G7wji4cFxp6HsvcVEjyKLztgoKAJP7Pc",
  "key2": "MNgNbp1d2gaJFzSa5EzuoMVa5kVQ82FKYtfX7aJGx71iS84cBC43P8j385K3ZmsSzMna1e8gD578HRcUhMcwWse",
  "key3": "NpPAGoJHSQAfko8XgAwBRfX9YauD4wu6xxxmRxWmyVroyh23Zcb441CrQ66wi8FuWptDj1PU4ywcX9N7cu5wZX9",
  "key4": "2SdyKrPFbcvxGRDwveARthRhhSJP4RcvwnAWfhSF3teJyrnVvC1hb4ZEybSUsL8L7kHQuH2vBQ9MyiUGTKVxH5Jy",
  "key5": "2UrVDp5LcK3FJ6Px7JSP8pciyLEPpz9PTpc4RD2n3ju6eqH29D71A1kjYXrjedFBmkV6vSS1ah22HTwQePNinsWr",
  "key6": "216XmUVm4FjFEHgNXLjqWCoeutVM4VaNkLTGitWN8yGC1oNzUmrP1Dmvy39bbQ7PLuL81erg1goCXuUG8apt37Js",
  "key7": "5BeDXDjhYjdhTEmrLRkhCMjRNbPe3QkeQirUxyTNrEUemKvQUjXf2rGrtShQmVHq2nJMqxphLabpA42yUnwfKXWw",
  "key8": "62H2oQ7FDjW14z5w7Srduja8xtVRX9EnLmRfe2NW8DuD2fFkHgFeo8jDTXNmeZgpQodcr2SMa5K4eumTTnZ5SHqQ",
  "key9": "3g3aSiMMapa1CDqMv8BHSUDKYFmSvLPsL2Jb67zD1hcCHhRB17j6W1Qxe1DZrREQRkvc5CXJh4ipBhMRbr7JH9e1",
  "key10": "qz2YKrXvnAybRPLB7wE5pWAp7AmVKjUtwAfu74ZBtvxEtpzDLVCCFTCLGkCG97LUfHaw8gV4d5FFQ5ut5Dfvr9L",
  "key11": "3omNaK4xHThjbEFqLQxNC99opqamTzu3okFVdNN9GvqFZ2Z8ZtgVu2CjVk2MPAoXJ1PKqDBiVpZKxxMxf7B3UAuK",
  "key12": "4uJNgPFb5BG5QKSQLeu4hmHHq4cGNyL361hNNuAXUehNrZyj9bpo5P26Uy8HQTfkNYTqtNEsRQKFbGy1Gncx1P3b",
  "key13": "4FuTezx9XVb4seL4PGWje5RundS7irYgkVuPe5j728AD9oGiGz3DparCAvXs6L9KePE9WQ7aAEBKUupwJY8Tk6Az",
  "key14": "4JtQ4JCtHQyq8zoqBz182btsAU5ntaMQ8Jopqwvvgz4WM6bYRWsfv8wUQLcjhSqoQZ9YjRrXDpD9G7ta7ojMkW3v",
  "key15": "3M8CN83uzaK7r7EPi2RUMCaTJxzhq73purew9RzjjHxYGRKkBVJScyKHecFfYeCG4eqSoYNz8G5F7BV19BHKd24R",
  "key16": "Hgxx9dauSBASxrMb8Ahc2a8mmvohRMQNH17TT1SZz73Wc7gcBZLQxtQemhZxBDkDhpkcnQ4BdqUyY3FftRcsE9i",
  "key17": "3NAsHE6vEug7GtKjyXZp26NzKLM4KDk4CJcu9dvKDN5LRL7HXaomE2VBgKydNF1YLErs8FeyStJ7ou48R3s5wKPD",
  "key18": "3pEEU4HQ6MUfKfH9qmoCwTZZNVXyrDteGFeeeG9Cc1cyzpqn1awMrM74dBuP7toAZdFkSZnWywWVhMPEG4znLBH4",
  "key19": "63X27mnarwPfFt296SyKgJevoMF7gDSzY45yZ4CC138QgpRUkxjwUJMXZVt9D3cuhX6eeSJWtPKN9TTzVtATXvJj",
  "key20": "nAfBB6ja26s1myb3eDWzp1YiFkZ6448Ba5oBQM35PfnyxQziSf8koKqxxqCiuhAcKMTvGRPA8p85FPFqWk2M2ao",
  "key21": "4Fxi37JQ4UZyx9hd6BV5ELMz37Q7PFbiyHZ8bUB7wQHM1C9wBAePpuVvvriVpmNmmdBSYoPFbqzkF21Jivombser",
  "key22": "2cksgjFcUzb1ZJU9Gznrr3ye4op8qRhiNavLxAUMrm5uhDkTbw5VtDc12avqGtgRL2ViFqvrjzygodnTMvGR5RnT",
  "key23": "fPQ8M1yAp95Jmh8NGfbMAqPFwZZZdXffBAAexPFRLsMPTp622SLz7GnadfjBt7ShJMRnNbpcz6kBCamxNUUhd51",
  "key24": "3PqGFgqSscAiBXpuUumJnEyCsDe28Vju2WNU8an6DPocsuYUUQ93ix1cv6JXsnBP3fR5oqAskYD7BX9o3eV29kDE",
  "key25": "5GW8rsV6XgzAh2ui8SaZaETZTEhsvBPfDVGHPqir9Da6t39EW49wgsx43diXVCAT9fcrCMfJk2TXDATR5bMXAutQ",
  "key26": "3qDNocBw8WmoZ9BPvg9MtKg36hBj7LAtxDnUyEmsaNG3FL734dgvyGgqSnqvEZVpDP7fScBueLzuF4qznPkd44Gn",
  "key27": "5FMd3JtpHdKFRFEYrWwD1KXqDCqgh1zo2z6saNT5KSW7u4zkGqzS111rY1n3CyuRVesEw84KmdyyxbzkNMt9pMya",
  "key28": "DwCqxPdn69gAVV7s89aBvmCAn2ZqwiJqUtkVFCCHZKmwB1BhGcoPCUkwwiGZiv2VmJNfae4JBnGKhfBKn9BuAb5",
  "key29": "6GCVrRQ2teK4aE3BCDRC9Yg5PwJQkTwHMAt5vhcFDz1JXZd66W7LxbDvLo6bXBL5ruSWH12egtEw2VFucf4PxjB",
  "key30": "4yVMBQS2neAkSWwND2vyeaeDpiBTST2R8uSjZA8rGrtxxyy8w9bz8kDumcN99VccAGCeV7S9X5nSnt6uVQKwWV3u",
  "key31": "5cK8fQg3doTjMjciQYbmzAJiscruhns4Vq6GD2do85Zcx3MdPYgLMxZKnQvawb6rGUQQeoG2p13WySpNJ8hmvpbH",
  "key32": "4SDM5SNeixUKQa9Fg4wynzLwi8bnYZgoAzUB36iPy6mGAmDNiDYwi2jYGjyEv9kGS6VpZBXEt9QsKp8w6uVoBiz9",
  "key33": "JaWBQYCNTj6WcLpX1or2Kgqf4PUUE2RvyNhEbyEMR2ysFfFJBJ21ZAJ7hN4kZ2HKVanWUqgkeLyhnKnHB9vN3Zh",
  "key34": "3qu8E2DVG3nfBMXTauQH9iAJNyxu9bkuiWA5KP1cG4XeQBCdX6nCRq4gDt5RjKzZwyFuiyAsqTpXgoGC2xXqABnP",
  "key35": "2cf9XV7EHfmahrmEBYerP75ireNA2UeSyiUQPwQGgC7kRcNr66TQxkvzUFK5mjj3Ao4bCuyhHDbzDFyAayGdLJBe",
  "key36": "6jEHUs9vFMs6vMFyK3pm3vTNtpt4BCfXeCQDv6a7AoLGak4CPRFuB6LCMDtKcF11pyeuNCFth7JR3im7hZH7t5Z",
  "key37": "66zyY5MGCkssSP4mPcoTNMQPFKL19NVNzwzytwBcL68hQb4nGzcbHFy3AeKsmJDecnJh2DH2J4erGdYTnfp1SFmE",
  "key38": "5EKbZ3ZPvfGixJSffFZrcrrUx4Tt5UJEBwd9vDut8Awpnx3M4SopTgEiLCGqfZbSWYFNguE77gu5Cgbc5BuT5zZV",
  "key39": "3ez1fgs1D8GpvBeSAxFPkvaQUg8L2oWDF4J2uwamLKLhHkLQbSEKz9hF1CBRsE8j2KBXnGf4NzbgpkMpHbdUeeiM",
  "key40": "25Qgwu7AjPx9ta5YaDGfLBu8djpdEa81Vx9iBYgAqhBaoNUSNjYHjnAh9zxJsdURS5oHB2rirwoZkG5bkkKEQrEf",
  "key41": "2Z4rfkcbBMXdNPu5VcgneaLfo3vdd3rWJtz8E9ehJLdMDy8NSCurEnRagGrnF9Yf42bzRdtvApPC5AsQaPPBLtU8",
  "key42": "5ardMcyERzh9L1fujoqvkbhsHrKcFUN6xxyKk5xMRRgteCFKrVUMH7A7tfySUu4GSEBuzPU5jWxXPfbFX2ySAk5Q",
  "key43": "56Li5uyUA2Lm8Qsq6HkYNAjB1vJwjESQdkVdt5zHafNYPanQDhq5JkLzvGgGNSMUYdQECthWXa8oAX7MGBNPYoZv",
  "key44": "RxSPxs1J4L2cFn7YYFKaD5Vhogf8eVpntb4KitPuscthmo9ZWwxaEbeTVb1xs2mBkyQsBvCPD5idz9czkyAk32N",
  "key45": "2oZ24fvasSPzYLSzzbKyVuGGck1ZSCpCsEckLahbkijMD31nKzgLzBiYqHZR3RzLfhS2FSEThsxRcB2rT5V3Q37o",
  "key46": "4YPo66yLtnGWgCCdaLuYqrKHQsKUBGd2yuRotmBs8udqCUnGCs6qnHqthRXrNf8et3bzcezigCjt59dn7qcVFLbs",
  "key47": "66SD5Ni4ZsKSRgW9GkajZHNLD67KoqtXjNa1xUANuVj9YqpN5avAMV5FAnYnMAPtYN1YRVPxyWrtZB1zH7cLWA3D"
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
