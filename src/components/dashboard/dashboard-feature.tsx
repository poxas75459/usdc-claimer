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
    "5X2xLoc5cANLEZhDyh8m2rzVo6Z6eurob4F2k6nKtzYEHMrv7MrVmDmGcoFFwXGYfggjEgeeckw1241MkVHndopX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HHp8tun2d58S7V9mS9ktg4V71NEMR4onANW3f5BLvnrrzrtUpwMaiw9BxUe2cU1KixwYt2MTt4zkQH9e9g15HtC",
  "key1": "7hvxv6nYy7i8n57s7eXKPe4JxzBZxFpXw8Ja8TeqaXoqsB5DshTviegQhX8tuK3crfKANP8WtU7KvGchbNnff1d",
  "key2": "2m8JfqMi4X4vwSN3LCtfp47RRV7pTukeo66jaLyv3tnyZVEV8jcHjcKFaLJcMLhdymBpxbZ6nyjYNF5BkmUKfk8o",
  "key3": "3CJyhBZX6fELkdQc8jVmNrTa1ocZXAPsaKNkwkwP5FU1M82VmhnHR8azNgWst9JGac7ia8wRj6uxzxDnRqzNs6yM",
  "key4": "4WEx6dAD4iAXCMJqRKciEyWNzDeb9jvpuicPQPu8NS8NzXaGKFVvhNeV35XjcbmgKm5F2U7zQjoaLRGE2XHY2RUD",
  "key5": "4Q3VsqJf5H7VweqeocbTvgWqZo1FYpjvSyEJA3dBjyS1HKPBUdtoGY4JQB2hBmWzTVacvUowB7isx92q6C8zzt2Q",
  "key6": "2ay8RetXFc8gvfrF9TLD1tq1UkLegjvRVUtLCGL7RdHDrQzMETQSpXjLas3yenHP3M5mU6KigMWvRmpbfB4tDbSB",
  "key7": "3ps5Rf2yrmChCBTTf7eHYxzBCx1HeZYMEMWucP1XFNBk5HxSWbH5DS4CR4yNYr2tLm8SmDtwATzEdr3wHyzsd56i",
  "key8": "2qrpND2th3p9JgLUk24HRE2Rc5aqxSqt7ruhkq1NU1UcbmKonWsab2EG2XkFBH2aA8YS2CUJDMaPeA5h5c1MqwE3",
  "key9": "5cZfDoTuiXkxxyvgyiDXUy7Nuffo9sWVAdfAN26fiKCFs23ZvUKw8wkt5oED5tv5ukmMKn9evboPnncFMNUDgt9b",
  "key10": "3PyFABRTbUMymSA9b4VbBbT9DypUBY8wXK9zynBzt4Yf6cTdvYfLRgzZsnLZmsHEAF9Sd8T8j3skM5aN7KgbHZP",
  "key11": "3xopLfZ3TPTaWZPV5PYtgGYYJPb42DaAvg2pYF7tnNPVeNXadwxeY2KP5bX2wd9NYHWarF43YT1p5HXtjWed1E3c",
  "key12": "2xL8DeUs8FeT6XpU3XfsTWdeuMdzjEi6ukJx3j1b941YhWCsPp52fKBk8eGQsivfPdeUzscDosPWUF8V7mLcCjVy",
  "key13": "5J7nN91BtbKs2cpaLJ4jGoyv8UXLk1K4cESs3EZJm87JUpHSdRai3deUrk5NR7wn3ycyu7LXKKRLjmLujaR5s26N",
  "key14": "2z1vVoGjichVWGNrT5qHFD5DDiwg22Sna4XG9DqgJ6EL8q17yYPMpqivnqdnoti8koTLKD7J6ULn67xEa3pnrKt",
  "key15": "nemX6SLM6dbLeuV7UtE6BgqbBmUHmGynp4NknUftKrxYHTbefBBq6nY4fwLgUgLyiugVF6s5N4XBcQptgmDn6rS",
  "key16": "piWdg8akjrSL4ye8wp4QUeDEovxUSv2sTCuD7ZawknyAm5jcePgf41egimw2AoQkLyKuBYUhMbm4fYPfmw92FWN",
  "key17": "z1WCyc1Mbw7ya83TxEeeHsieWQajM3pChGR14oEWpmWy3fNoNSuJzsViZ1J629QQyq6JAYWyVSnjpHUc8mcCV88",
  "key18": "5JnjkomoNh3Yoox6ASCFhrkE5FQZjMEkqDgdDZSjxnFkeoh72drBNMcChpiXbQzCqhbKbaFWRHkMBcAM1gD4VEWE",
  "key19": "3syas9shFKM6gsEvsTmteuCB5XDcps7im7Gbf7TL38fSxtL65WzpZZ2v6TJDvi7L6QezjRTw8tZJFS25udHoGpdw",
  "key20": "XnhvrrCTVv12PsAQ98db7KbsqYQHkBUjD63mfst9qpkngzMJbYmWJrqoXcFYGHT7LaWNZ1n3dj6rFvPVhcDpqpD",
  "key21": "4C7VHuxVab4q2hcbBTVdwijGSA5fEHQNHepenqPuvyjqstjS4nhJ2UucL5FhnBkiKojv2uUirTaiy75vkoqeA9hp",
  "key22": "3Po3ixAPmbtgoGqqLpqVtk6S64GgfQ7Y4ao5o2qLmeH5RSjiN8Riy1N2iEP3634t2xBz1uiKdFgtzAkzafzGCJc1",
  "key23": "4vsSU1fExnkZ1Hfr5guoEsMNrSEmVBfrxDqwikyWqSzgcFPtQ153bhTSQVwjKQ56scZoKjQiN4nA1JRwRdik1JCX",
  "key24": "5doCDiwAMR3SYJP5AfaE7Vgzk7C1bCuG8FexkQ6ZgkC8nvvaxRe2bY6MkQ9iPLUZNT8fy73PkgZNfrZtMiN4TvWa",
  "key25": "54Cd29Jm8oUa3YUN2jUXHHtNnDj5zjosLaTG1Q51NfpxPa5qfiv2mSpovoanLv6UKC4swBEhq4whr1QvWrqTZVGK",
  "key26": "2T9o4jK97MdvGf44FCgtCmt8HanqNWaYHw9JTs4V6J7L49byEYtiBoZqmqDYEeJETETwJ1awnvo8zhXwRsb1snSz",
  "key27": "5BiBdVF1RgxqQv67iZgPe1dfrLXmRYvuxn8wmhCwnoH5tZzzQQcsYQagbXpUT88JGnrg34iVMwGaZwYKQNa9Eakh",
  "key28": "2sSt1qmZYvW8ja3gAiF2obcfWFHhvnEMEMeDFSuKtw9hS8nR5pYCL6kYFzKm9jq4tdi8DUtug8FpkLH5J88i9LmF",
  "key29": "2ADgQy52cXPHmLEM1kvX5xQ3RaeUAjx9GCRRL1jsN3DLGobmsLYVt3Sfod8XqKhf9STA49xN1Y5cLx8qA6nSbpt1",
  "key30": "2r2MX7PSr62VBiLxn6D7jc1JhGrtg3nXyuLnw68P5fy3PtXpkx4sdJxa2CExWEL4jmvaPzyuRJPsStkwWu2wYpCK",
  "key31": "3BXMj84SCXYm1maxnRuvYKXMCRzRmYPBaNTDSDFDFUR3KnQCz9LcTDgoW6ppTAYwnALzxPtD8j6cucv9kLD58w5S",
  "key32": "2zmEtF4KnEsRnXR7sKu3kmQc17mjny4iZbydy1A23DVwMjx73JhozJ3c6XgDLoaL5ENTeiLh5Q1CBeAkGFpfmVhY",
  "key33": "3a9jamUSaHYdzgzNU6AWCJFJanzgHYFLoF8bpkWnhGe46TscazJ9WLbGVsgyuaStDn4MAhd4LgSW7eGjyTfChq4M",
  "key34": "2Ky8RbzQkj1DYfayVu7RjhDRMuerWcbeMyhRohEgprStMfjnUp9QbyTJTkzL91nWQSMSobzYD24PJJZA3YxtcwLr",
  "key35": "5hyy3XEEMuEFYwQaE7n8dYMFkrvVjS21uAaj11i56u8kwc8ZK9GqWkgYxAfdCcx29rErvW7jYKEyGcBGf9bqHD6S",
  "key36": "5LeJQWGgn3ZRseycXaNTGzsKH6ELCPoT2xNMa8jm8HEy8CLytPceLFTFviv4ZhAX5sdPAwKLutk1P2ztQr29PJxG",
  "key37": "65X5gyDMf8a5BGpgbD7Nwb6RZQy8JEXXA5u4q7jRpiVoqyHDpSZ5mwW5G2zTqtVWxHmRy71Pb6idnkSvySwNiWfc",
  "key38": "5yBe6CYTqXaweYBjEwWGnaagyTXX1Q5NkRw7bg3WLNfYfLhUan6yVc6nKqCtCUZLC5USryF1cvGECYcXSj64cF5V",
  "key39": "n8UvHFWYA4TtQYYpiodS9mx1oPa77aiiZe7fqx3hTAmzEbdKkavWAxUkBfSaRgdDZ6po3qHEwFs1eYYqqp8CG4Q",
  "key40": "5GCXYp5QbWu4mkzkQQ3Sqf5HKC4PVFyXeDQ85E6i4CYDihFGQL7jG6xGqtJAdziPCDRz5TCvJ4bAaePVkXJukLoo",
  "key41": "4xwnnvZieZgmg3p8cdautFJjVHgdxr9PiUxsxMqeyyUVCMY7ZkJAguWoaoYRNPEXygMLAQPeBMRSndR3VVekCGcd",
  "key42": "zYcgDhgtRfQsY3EtopaFXgGdiKztz1918q3FtQWtmQ3id3zU8HF7vRQxRc8tURkrV4A8SAUAqJfrLUsDZKpUAbu",
  "key43": "e6fW1KsqHTycqLQXtWvAUfoi3g3iJGKVwEdWoDNr9FaL5VJf71ajEFbbtJP1BGWtZeAjExYdytaVjrZVFku6UCS",
  "key44": "5RQ3Q8TGG2ciXcpzjSLrrsiiwzL9zy3oyA8FomQhBhbpPz3rrxyCWnwChW2tZSHyFq5QX4gAUfm9AerT5Xvyn5wz",
  "key45": "5kKxPpLkHzkgz1Dt2ZnSLJzg1bjKxczfgenVtwEQ6tcw5RCcp3m9oSoLhE2v1ta1D4tzAKSKpwLNTgchwX9xeDfM",
  "key46": "Z4EG2LSLrNtTCmae19seNi64jKubfF1gByf76nvxbgmm2DDEv7hcnWSgaySaH4zDnh8JsZLy8YspS7skz39A5QW",
  "key47": "VNAeUyTwhyHJBTtCRvVkPVnVbVFsLudjgeQQhbesKqCQx3uhfwRGd1z1qSeUfWbir2yzrS2y94m19uyArwmjfq3"
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
