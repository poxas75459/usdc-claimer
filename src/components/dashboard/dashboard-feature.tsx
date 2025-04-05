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
    "pRqdMdko5FZdkv5ZxZNicQXFSdbPGefvxVmt9LmfPcYGxZXN12jym4fALoVAFyjfqbMtYyshRgaxEbzM2tXP8um"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "127MPT3QPW9P1sXxSxf9xPGo8DQy7jQ6LXMGqcsvbU7MeVweHKVmXYYnZYzjFGruPmruremmVZLnnjFRmU2ViqDk",
  "key1": "4dKtkVpxWDmQG358b3Xu8GkybygM2zx3CHuEV7foFT6zyxeAef7eWvisF8bRGE8xYE6atmp7V66ZdYP49LeczNt9",
  "key2": "3iCpzdqmBoUhXFgcfg4ZRvgNXCitfm8QUDFriBaySXdGPMVaR9PtN9dyHpcs3PFrxi7wiqAs9FeD7iYFY4TaPzzq",
  "key3": "5QiN8nWthh3HjdpTQGL3A2wYr2k2FHthER87ppuaZrUF9GNtdc6Vvq6h7khrJb8HwQkUz6dyxDqrEHTkyRKRLnUo",
  "key4": "SHctmY7ScrxViHLY5bcm5nyCZCoATbEfqSZFBq9RvWGuRRwL7V79iZR67riuwHwcPwreXds3ZwdmmYVuwJLHTKs",
  "key5": "X38HFzapNZgTRtnJzLM7WAzpXQ9h5h1fok9FiER8AyWNx6AfqMrsXKYXzeqTtUrEBR4FAEwahENAKcxGUvRFWBi",
  "key6": "2WyotsRgv3onG8kBm8KB3xKdAaQf7vqCutWgqh7QRnBYMBv7LFqzf7aWrMWpJJXgZ6BkNkmPassncG8nPSmJgC9B",
  "key7": "5p9EaHyFYmahfSmuQ2PCuBx5qzegXHyZ3ZHVcPBQNoEaNUGQep73wxkyG2iJvzRW75P1y914JZMEMCwXiF3cvnW4",
  "key8": "3tPrDr6UPzdeGrkSQ1AGrTXf4tWAsfGneoWSCLVefjHNK346aZqTWShdKmcGeKcxZToak4xaVpXi5GCSGR3bv71x",
  "key9": "bBoi1N9oGZZjWeeTpZUf7nLSpHNcP2xpY9f5gJjXCAuoqj5G4yC4NQpQ81WALbMowvMn4TH43VqV9LHkwMp5AK8",
  "key10": "39nkshNBi96BSYSa3FPbpgdVeLkFSygowfT6FckV1ed2UcVxhf7QPwqg348E5Mnnq4f8DqwsU2LvEDVNKYSa4U8b",
  "key11": "3Kt4hwBRstYrp9vH2jbbCpKxx8JcWySkbMVNUf1c4872KBCN4TcdzKRe3pVxgDfEAGd5SsHXLWY3eBf3oTEAN3XP",
  "key12": "PT97bc8sbD7qSSyUqtMKt8nXUPVzeXUuUxDgFTvFc9N7z8kmTTaUUhxyopYnpMuNTS99kMXFJCrHNCN5gDDSdwY",
  "key13": "62Xyp53G4wQuUH5cc5kKz1PpERYXXBSoTe7fFniXyFtzUNoCGAZSUYwpMU3wrxPdfb4kJ7U8a4tXYa3sJoGQEchC",
  "key14": "3Yg1DtZwpXkNzRACfvJqi1wqTqwvUiKU7zG83gomW6dSkb7Qe7yvoPS6UiTNjVroEqCMYJ8GzqTCdovSqVmv9gnE",
  "key15": "4VnWXFL99PswcCV3JaPrW5aB7x7e8i3qCvazXrdSVKccw5enGkHoYHYeqZmibQpaTpk1yD9HRDYLZYkwwWFuwYf1",
  "key16": "3RCJRaJ3w6QgkPLVVBSarctzDzzVDziwEKfSMR4cck8G6nPx3Ei9rMu1MdLjtpwPJqMXwBp2pGo7BKStnsAe73fh",
  "key17": "3FPmXowWadaMhQiWf9CgjoSmSP326wFcEC5GVsLg5brWvvEJRam3cjUaYcGT8BZCQYBv2qmuw6uYeqHRtV7cxU4Y",
  "key18": "4moq68au9eJfFuLwgMKEpPzczrM4hnd1BLAavDS2xPFhgfPns37EgPSwU572P4dUTgX4KKaKyLPLAYfs7PcwQnBa",
  "key19": "4mxy4rhajLyEVqH8yTxQXUwaMnYmYu3ZSyBycv5AXzqjNM1uJ6nQt3cCf3F4VLjDdPCH6GL7E1P9ts4GV4BGMwC5",
  "key20": "2yn2C7X6Q8jY7W1E26qvMKVoxD5VaCjDpLmYktD5XmRJR9P7Ftm2NgLyuTLqRpsot6R5hubnbGBw85VS28qr3E15",
  "key21": "3ELNekdN94b7jocXxx5Ehcp9t821yJcvCqHhKoByretxFMKmaJoxkzQi92mhjGiFfmJefUygDsTiXg76fTzHd6dQ",
  "key22": "umLkdSNhYLXkbaiXiY1tzd3vNyvafS9oVEZwVFmd9KCP94z2d3TyU6S9ZqiMhp6e45cuN3bJcKyRKasXDaWTbdu",
  "key23": "5owQyn1Nzew42v6u6GFkuw3fGN8CT87MFynSzQQQvAZRVvpufAi1JYh1MpmgJj3oVYmqtbinrf6FMScb4t4TxSdZ",
  "key24": "2SRiBVHEzy8LrEsTAM5R6m3jXsZzgpML1RvrW9jb8SjJ1FCRbHmzdoHe7VkHZ92Y8KBREKKvq3wFe4SJJHGcu3Mi",
  "key25": "5FhHV89EqcEPy7ikSiaFVj8X7jsZ1R8f2c5hmZYuQ8FST25FAbVz2V8Eao3HiGmDSJif9r3L1vcXeu9MHGy3Y1V9",
  "key26": "5VsTPwPtWreASqFF2joU95RhmEcoG5pqMWaZRDRX8ubYuyMuAq51ygxMhDLFMnL5iBxEaobWHhehaYvVEy87RwGv",
  "key27": "42AF2VrcYrr22Hc9xdUXVMdwoWJm6BLxatSr7MsMnESEtFodPcXd2mzm8VoXSXxSGPZ2uKqL1ob7WDvoqB7FciZb",
  "key28": "2jQooggayULWnQjCkxoB8yc6DhYwfLgiVf3Wtz5JySaUJqX3WffrprHWCeHgD8tpywTu1k7uDUWjpm97peXtNExB",
  "key29": "25VnyCKMpgg1Qh4aqTSpDKU7657KXqFs9VB5NqDeijEA1cxX1XTFiaPJyocmpqQYHLjGaM42ox3qTT94jFkZC5Hm",
  "key30": "3Y6rFYBZugJzFF74tW3i3uKKuR6c2FmwSaArSpoBatZDrM3Q5RPWYpFocXc3hgoqEtN88oNLE2gw2wGeFZzm9QTh",
  "key31": "2yiPhM7niZvTSVXn56zPvxnenzoSs5j1RfU35aJmqAXpNywF3gZLHS8SLvJLdcpSr5zaEHKuFans2iUSaVJvcLmQ",
  "key32": "5DRmHxtUJSKYMkYBBSjWgifbHdZUpYoSiJDjWPNkZhkjt2fjz8nLcrmVPX5BrnnHfaY2MooxzqLpqMkUNoEvXpin",
  "key33": "53Eqxf95T26PQPvgNLaoTbXc2fdpdq3JNgUZrL5LrMSS8yq2VK6vMQbp5hnQybZ41GouCuqoU2p3FTk7hFmXBdug",
  "key34": "3J8cmuVknvuSefKwThgoA2G7MepcSi6iwqfCPEsoXKCmqsSgqR5zcktcdhVhVDMcMhNzPYwoNw5JACXw9j8cfJi4",
  "key35": "3Yf7iRQ5MgUNLT9wmFpdRUD3a4NRc5LfbEJ12oDk24A1AWfi4jn7gdRLPGYrYVkGUAG3T8eTBtbcynM6teoZVmXH",
  "key36": "pJqyyJiqduwcq2DTLf8MvstTeqbrcqfd7EFtytGon7bVxucG73jgdxAF2iuWHuszYB4dEh71NAZocGha2b5mCUZ",
  "key37": "K31bndM23cPDZJWqyYeYL11HK91BX9xqF44ekaTmoVRky1BZPaKbjn7u4pS85gyPrAK3E7nWf68k4VTvi2JiBrH",
  "key38": "5HbpV8NY27HHn3X6zuFyuGPowRbuhpWA64QVKww9fbTXtcEbGf8Gg91AhNEuwz9fEpsETPSxw8oaGM5gKWudQBKU",
  "key39": "2qrjmEExnrovetfv2tCu8UmYDTaBpd21q5Tb58Ez9Mt3hxcku3Xjgd5XHJYhbixrvra2MFdNQmQCqpZNL8bSEMh9",
  "key40": "5jUv4hkNeSQp3EVy386X97Wzd8PVGFwdCeBNztD2xb5wfXUjoDJtvNec6ARNr9kH3Uq1vBKTaTiTVXXEX3GML4fx",
  "key41": "2Qrxc1ZN1UMTpb5dYKEPxomH3NEtH35qDSpZwaLGCULynVhDvaDf9LovsUdTLYtYfnCZqY4QX9nJgqKjv2XSb9pz",
  "key42": "5mfmdHW4RJYd9VuxMFx6T6QWaQELx8hnoPCWpAanquocEUAZoYEQpGjmw7PjxUwgWgp288zLA72uuu8EYZohd7tQ",
  "key43": "279Sy3S3tsKe5QA8jG6gnDNoBittA3NL8GbKVYnAZ1SgHkm9GMaExH1kwPrLRG1Af8LFEH6CP7isDb2WuZewN28E",
  "key44": "1Vqg12j1bwhdu4VVjXPk9sdiN4vQdRChomgwtNKbT9ZFUe5nnC2UX91FHx9ooSLUwLdZcYwQSLbhCZSiE91Rupo"
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
