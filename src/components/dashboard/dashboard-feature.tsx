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
    "4ezJ3AJQsA55LsBspVpxhffJY6Gb9PR9j41dGpq5o23YnBZoQkh3K9sJP5eKYD7KvShCUP87DBzmmy9fKomgwyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qhWAf389EjeyhN9gnybTqbkHPvbfNE6eDcQq86yE1jWGizy3KSMa9EkcdnZrfFLV3UP656aDYiE4WyrDGadzx8Z",
  "key1": "CV6TCkHhMG4SZGT5LNTgNPqMXiFLrPjYhRNB29pY2KisRkLQdqSz8D29ZeK7un9UF7KTsQb8P91y3WfXvzBFdFF",
  "key2": "3tTnvYKTYK6myPHuDWEV7zumm1sswzcCwxk9YyVC5REbE6mUgZrPX5McN9c8xw5wof6ZQ6ggMWrUqKbtPL2GChue",
  "key3": "491B2P22YotmpDKSPuJxnhufJL11uiaaB7xrPCod8CgHkijNysqaePnQT3RqW4UNh5E8Y6bHSpEedo4GobGgjmYX",
  "key4": "4DGTHg6deQDf19aVe5dQ1Y3Hx5HTn1ZD749DddgJZA9P85QK2sqwGhvyGpJgpz9kSZ9LHFsafSDHju7v4maG9L6v",
  "key5": "JLpNDY2f7pjeEEXe523wNx198noekpyE2JFw8qvuz8pyuBEhaRbWYPz6BtJpdwyCu9pYXj5YqPLURjsRcinpTBW",
  "key6": "4BRHKpuaM7UFztAZyeoQfaQeBahRumUMLBzvugeSHCw4VVzjAmWykeBwL5qWMLPfKxBCBUx2qju6tZu3NRbgix1Z",
  "key7": "2RzzWCrb9aMBToYsKeAo2kY1wRRNNZSk3t9duXfs8mszQsJG6FEC6WVGJ6qvtZsm6bnEmoAwYKi8Xnejg1fJbLtd",
  "key8": "3wPWHiZHZ8PXS96eccsaKaAzroBQGe8FqB3Myk7unvQXkqybKTMBq8DLTnZgedg8s67VMgF6FNoN5rzoxZoVaGRv",
  "key9": "55LpFjt9SVuKC8VSkCMX222D2koDAczN2ZZFyFtkwy7L157KVS7xM3WcU1J1q8wL9R9nP1YLNN9W5daFxN9M2Rtv",
  "key10": "66JZJwCGQrSEEu4F3WfcyLByRapoQyFpuNpcpV1u7VeSjzaoWxDsF29HLfa9kt4i3TAx29PcmZdfRfVPbU34pyG9",
  "key11": "2iVWJMRpG8WaEpRee6VyTSKpTS6ABLZyTKxZqhe6R6KipxWxeNMcm92gV5qFT8vy2CoykpPzN46JUNGHD8FptGNt",
  "key12": "Qpw5rj7YsbXerFrnGnh7a7PDp69NWifSvxksfKmHAyKzt3aoJRYmuSZXZBzfqod9oK2XCsJcUSUXSKu1JRZYsS5",
  "key13": "WuRyKMrEgjATNepKxMLgWUzMPQjmEJSVN58RMB2T5x5jatvDNFZgV4bg8wA8wSKtW2jX1PMprRobbVSy69L2KmP",
  "key14": "3CvAd3nZMwnqdsL1aYTKzJX7zPt5udKae9xQTkuyvfEaH8DChcjYmDskQpVzeKn7QH1AvvGRivx7YkFsrGWBdFGy",
  "key15": "3nti9yuwbHAndtvCEa3NvUL6Wi5o7eK6h3nvL8RxLB44h61LgNq7WGj8Efn8LaL7ASVPshoxTMmoGkmrroaJbbBh",
  "key16": "2yH1nr3Ftusja8UujHgD1BFczYvenmYF5hLR3w9DnVBrTDxEvHNZSSJf5p15xfadBMxnwdnrDXTPBnQGm1s725W3",
  "key17": "2vvh8bNsSbSWdWxokbftHKdhGAMh9edApzZijBQLK1KCFN9LDK8KVn9cpx48QeDogFpgCbGZYdjr4r6euLVynMg4",
  "key18": "5kNPVvVYpKmN3JUj9KPxCfGfhUrYdFhn7ZEJr9HrE1u7JFT8tex7cEUzYQ1Q471pD9MFr47VtCiujcnGCiqK8qrS",
  "key19": "3f18muXzTYhfbLvDT4MRNj9pUjSezFTBXq4piK6WroWpGkDbx2potQNNW5n3YpX7ktczF7u5NJzuQ1zDvKUiaVfs",
  "key20": "4rbaTi2QNT9Rb9Ax5VSiCJWXvYkMWFGsAjLxdpWim9mPWP6hxx1h9pD9jJ8mamnz6zBc2JKwYfQU5DSTzAYJ2Ch9",
  "key21": "5fqc4k9gxud92EXVM6kVNpKKgzRnaukstbP2hTBtu4V6zqsxY9BTA94UKdsWvwpPbdsDY65g7P1PQy66h9ZZpSA2",
  "key22": "5Znts3vmwzp642QGqePt1x7jzYWDCT1bkpEo5sTMv41aenhkyfa8tkBgScmqAQUD2erZwSu3AQ6cNJiTRmZpGnbz",
  "key23": "2hqVEJ6hhZauWxQh6oEFck9QDrPzKT7LMgYv63tUVAtvPZYuCF5N8WMxcCG2tjpZ64zYiFQ8QeEgucHHSvjoTLnb",
  "key24": "5anCoxVLHszmFtCD5q7DG6nHwjEcnUX8wVYpxTtEC7Giv1avTLkKmNai8cB41hjQBeBCGGm17BBWCtMbzBuLMLf9",
  "key25": "2UjhfyCsE6AMRjnDhABEkW8TbaSJpFuczcKppeMB2WErUYkXi6XKe4sgibi3GVkzmKTy5cRUA1VHMizC3i5Gojbb",
  "key26": "34m3i8BV2fsgUSteJuWhJQpaUdpEcAWXGBiLWjWYD8cYhvAjiapmCFFC7n3uCyDpBzedCd3MkDxbPV4yqrjYpYki",
  "key27": "2uEvrq9CQGMg9SyLWX8Vedm4dZJcc7aUmm4U6oTKzDAL2nsTYhrHQp894nSVuVEJD2WyPwH8f5Ub64pDraL7grPK",
  "key28": "5c4TDPAeEY6TueMcNpJbKJNjzMCbxMFBVjnjgWkXMH7HDSitpGPdXUj2dQ1dcJf8XBALxfCEKR3YAV5k7veuNQj2",
  "key29": "4yTbytEcJVeWF8rb1nU2eMCYWCk7v3BYCmUVnunTqH4vcqjvmAi49dXdrTPSmLGf8fVNCujjqrfvaKdHHE2G8C8B",
  "key30": "4fb8q4VD7pqifmEEr1n25tj4R8aNeqBEfUDXQJREaT4nWcNNcLVd8LSdih3SvrNmgzcqwphHBuDEc9Ua4CYomW5p",
  "key31": "3yy9FckULvqT2WMUuw6YhJnHinKZ2p5d1sDme5o7baS5mx3Mzw7e3TD28PKe2EtXPeXXJk4hskHyVF4SDsCo3yoE",
  "key32": "Z1Jd83oAM35MYNB2hdPJpCe5M5CCSNHTx23yDCvj1Dvhn48vMD3WeBHMpGZaeBBUah5ZP4sL72pC2jKzGXwi9Gv",
  "key33": "39j8MN63ciaVFsSwG4TNnzMbv8KFud6vwV9M9ygCvCR74HK8uccr4nfGKEVsJ4unsyCBmeJH5E3V49T8hjbayPkF",
  "key34": "286hBnBABEJYJMAU8ukQCUnmsUdb9gazHrhxeWb6feaNYpiRwSXMRd5ohswXpPZHQ4LkZ3kGr8e7nCGRZKwsY55U",
  "key35": "4gkE8sRkBfxyhV9e91xuD6dHQrgo223bHpgW49ft5EYHjdh5JoYg8X5EafY1g75durFWPSoEz6BVx4eth571NxZ4",
  "key36": "39FbQAdpxyeXsdKdDtR1dn2ELfVvHeXcpoSqVAjnXSSqAnTHpCxhsiAAZXy1DWmoHJkKsS2TjCcGbJa6q1FvSK7D",
  "key37": "3h77EAUWda8rNMhUrfMU9QyVgBDjVCZVK8fdZfMyggssGXcCQjDNe76JHTR65zfn69NvrxD5p8ToFWBnWtFiuK14",
  "key38": "4odLTgq1zUjAFVg2ruuxJyPzUhXkzsa5gtsqe5MtEKvHNv13HkUdFoaSeHRLK19qiCVbPs8NRUd6ycHPjzvj1k4d",
  "key39": "4Xt5UpUN9m3zW12V7tBJC6QXTkBwLfRZoZbZ3PmifzzkCgtrMCwBWiReN4TvPybyDSrtTSXDgMexgmoySAS4WdW",
  "key40": "4tPs7a6qRacQ5PQbJe3q28JG76juUCjPXFKg9N6Wp16h6VHgNBXZJw8dj9HvMJxLav6vBmcmH4z9L2iVAjLnt9S6",
  "key41": "3r5LkXaXKkC5eWRwho3WWwF8C64uCERZbFdWa6SmDdZXRFDFrLV8xdvA5NPncUJcqBHoLjqUhojKiLeUk9HXuvZq",
  "key42": "5Emy2qXtUQhJXoDQYktCJ5HS4tsjyjB7AmpUnmDeJtsom4RwxBmG1dbRHhCJUUjbBpnSkHVjbwjn7XEAiq57BPgm",
  "key43": "3zPzMbxcwkwdknRx2dWt7SFUaYkzS7PYfkChCnNPsPwNBMhHLuLVsUXpJo5yhmvtrKiYPN2kwvHPhZBJ7vcFJak7",
  "key44": "5CG2MshrsvGffJ2wwMhxHyeypmh8C8dXPHrXdY8vtgB49x9CKzDW6LkZGPNb2gMPg8BjBmQk6KnZtzEfM84hXdsz",
  "key45": "5HsTqKErYVNvjokijNgkrvR1GKm2i8vyjgTeePykvGXCrpY7FM9rLDURA8chLk1JgZvMMqnz7UHwhgwKt3fobkrt",
  "key46": "412nG3vwXXF9snkcTB2nXTTFcsoY3VBcAsmK8esy4U61VUYxwcaaTE1rZANtRrHWNaJqbDzGaZ8igxbUrhVkB9vR",
  "key47": "2ozudt27Xkgda5CmcvWxyTQWERfVHui7BMuDNNeafcBDew8xmmW8gTcoXwoN4o5H2no2DijRCULTXJoZ2cwc1fRW"
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
