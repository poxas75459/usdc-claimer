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
    "2sEjicV23o6cvA7Bq2jD54hpbTjFYikNegcQFaWgmFTgRKP4a455M7joYrbxaVZWnwBFk9bG9kEnsbJmuX6XraLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HjKPo9dnQtErtKpdTanMXsxAswJ9N6az8bMmBjsYTq4BKSyT5VeCozbp7zwrcpn1X3aLMwZbtZuLbXWwJPFFNYX",
  "key1": "2AFR4aDidN97yPSwNNwyaim9awyjXJom6Uk2CnbUKH8EJH28f5ZTU9dXoNZSkeLKcxC2ncHeKmc2p4n3hS8iSUgf",
  "key2": "2XkXmEroHLrZqU2mvfuc2Qf93UgJVwvjxkhsUYbsw4VXZcLnzopkKsEn6LvCtU23G5uJ4Cuw2iGcGkWt1wvfJzmZ",
  "key3": "vHodr1YbsXqumt1xBBAPThDcS6NbSSJtziE4F1YLip91UiWewfVRjbKE4mN1fNWJzgW39URknXtucFECDJKWHGv",
  "key4": "EfGSiriocKMbaunj2aMAXiDcu11DptGs59WMD5z2jTA6jJAUVTvLiZE4wBk1ifSHP7EvhhzZSYWWUnGDf6mW7JE",
  "key5": "2D2wycDyTGpH1KTsAUWBATCYgJE1PHiQG6rTUHUQw4Yf4yo3Ny7NQPAoph4TjrD3mSNMxvNQ5aZhySsLhEFB3JRG",
  "key6": "3mSYWMcXJPAW3ekr3pWD4wrNBwXNPzrvzBjXseBBsL342F8W8rreeKA4K9Lpr4BVacuHV4qLN84oKpWGCbLLpoEG",
  "key7": "4U96MBF2DwfJkAsxcSTfkS9S2jSYL998oNK6wjTY2JEh7pyJzbw4qZhJygVvN65SjHRJYqZ24HAkwXp81cwtsQL4",
  "key8": "5uP54ioADJoScn9WdXgo5nmurRED6k632qXfzKJDj4gnQKNQjUXBhvzeuNWEdpfthj55gpeur2erakwzQx8tEjTm",
  "key9": "3epwDdNHmmRy1JNHgZMqqAA22JizPqByD3XxyjXpLZWwCQheRdpH1Bw1JNTFVRN7FyYfEgv5ihYeW88QzdPkB2iw",
  "key10": "5XD56A4tS2S4N9yCmwZD1dovwUE8xUU8BzobMT9bRqUTE5q6p9NVgXz3NrZhqGP9Az25j5gHyyKTPPgfX2GsS46G",
  "key11": "2n3UWKhcCstRVgHtqXVrFxeVWsHagG5Kpncf6cNtsjP42NcmMMNSERv7G7wRQKnYgDCusrzxfWVCU51dGC9CspqV",
  "key12": "3inoNC56bxXgZXhR58KFGYqjydx8Wb6G4xWCRUXC5cSkRk1c1b8wbdmkqmCN2SqBb9ukVqS7hD2Pi8NChAsFQbQJ",
  "key13": "5aZY8gEq59f2DzVXG8y7jSMjrFJFCwH5ZKQBQD1TQavuqPySLBg4CbuirUfWepS5vtWTkzbGR27yDAGzzjengjvV",
  "key14": "3a19ZSwcLmkgr1pHQAGarnntUxQqb77CXzmAjWr3dm9Eh1KBAfbsWEyeCRUJDXGunjr6Amg85XydJfEGimKihX93",
  "key15": "4TtEkNbeHb3bzTyoTRz5JpWpckPCzPN63nH5bCXpWA12rjW41fF42ShJva6QCse11sP8gLP2qnnBB9NSgbEFP9JB",
  "key16": "ZTCSsResmD6GEEFLruiJujNJDTs9p2XryhnzEPZWavyJWTxPReyawaVRBnJmsDU2tpNLreVxZ2EvGMpVsUQTtG2",
  "key17": "4uckT3Nc39wDT8LjpjxiuBcYjdF6XdQXDDBM8Q5E9YYRRhcaiA6sv5GVaLBPvtSKuXsmnVv5nV6Phx9p9hiSmpMb",
  "key18": "4BgYMURKq6xm4KgrqV6pzj5s7TkdBUmQv2hqKr5VEBDCbesuwFHGLUvxgKi9En2kVgzqo8Q75iuAsCnnpwdy3x1L",
  "key19": "3MtDcR6F1BxdnCDEtbHGoCzdiUer5pCyio4P7XJ5s9BTYCvAkKGb4zHYDydbswDcn5LEv59EE2xEufGvi59AvNkQ",
  "key20": "3wjpTkZgh8rycNZVd72KaW5CPEAJfw81ufwVQAAovY1cv6FRL1pH2ReVteHNUpmM2bJuPABRCfJTSd5BB2hAtdJr",
  "key21": "8tEdEMv12A45GQXCwNomfoeMgSVX8HFxi4kSBqicajiMPVLqq61KYiJbSebvkm8WptzfcTWLjWcu6gnAJLviif9",
  "key22": "2tKJRtHg7srDw9iEYvAHUTt3fWRuNAHiu6Ak27v2X4vB39eKxspUWPFfuWLXReeGGAiaScukkXa46EzwLouNWQR6",
  "key23": "381ohotPTLFTgZgjvUGUdMY5g56FNQfyTLW7JmYQQfxcCuhv4BAPt2g8F7ut1M65hvs8QMSu7cApRxs4AcnaodhT",
  "key24": "5pd11vku2et2zEePJdHyEHwTSB6zDix3UDNDEDEzHZTBT6PZdVgU5NoNKy4sVZXfexpW1jA2ZP7Vcpst21w1Qmur",
  "key25": "4gF8L5KirvfARfXgazc4Pa8LCbgmaLGPvHyGnFKkRGKWL246Gggj4A4XceAKYFSKyTZGqzMiQzvcaJYXx6HxMMw7",
  "key26": "twdx1UvZBa11WLzhCfxxYDKtPP1cxuekff1144pZE61esKxH2QMtb7aNCDy3MaGgvkUux4bzqh4awjNbCci8npY",
  "key27": "54aGwg3p5RRoJQf1c1Q9uUrd7DKQZ34Ew3Jh1uzF5EXxpYiN6K6Pp15nnVQb5rMTnYk6NvB2XnKSm2QgAY9eTrHY",
  "key28": "2fXR9SUHE4x7mhaRnMdCV6Xoc5PFdgDWvUK1Tars3mUcdrpRS6e3V8NRyyvLbXkqb8PTUZBLWgKmWDTVinaujDNB",
  "key29": "26yCJW2tnZ7A75Rp12ycSaWV4BQQM3iihFHzFQ73af5PNW9PrC19oVAJnUxob48vAmhFzJcB7jsvT1jJtsk4dYZV",
  "key30": "31JcVE8AwrMCUMpt4PHK5V9z37re81pYGwqrBusTKBJQayf6wfoRhMpnsFzTknAusSKiB3VwMfXwSwf8m6bxR3AB",
  "key31": "5joEoN79ztxYsymBMXhonjC3GHakueYYbBZbZSQSHcXVrm8D5DEFdRcy965485aPmX8rowpP9TXcygntF9dsKuCu",
  "key32": "4KiRXRTYirUNPvFLJTjr69h4GoNMuzi1Qn786XETtZcKtBK9vw3PQrLixJepzEwt7sqGkTa6F1GEJFS29YvjrYEw"
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
