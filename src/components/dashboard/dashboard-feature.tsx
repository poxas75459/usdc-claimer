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
    "32KE7BmLJTLEwCek57gYZ2pKu732t86Ati3xVASPmwnnpGS46QB4x8QhdNJnjK2pLaW7Tor5qAf7ghiDdeRrvuRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T37hn2z55miy9GF7KvBARtEYjxtRMejo6ygvMh9EVHL2Sm9vpNPtDMiHjLfi69CuzLZTbX8fsRCNoH1G25BWgda",
  "key1": "4wc2GrSyaZzNuhqvHGTERJK3n9avrEYxqfXhyj59kr3J381uVPXYzPFPA5dQZ1dxfeisNv5ZJdQi8P5XKRWjrmxg",
  "key2": "5jZFzAMSPZZhvFgEoYW1vrRbZGDyKNHPmwWJ8UzAiPwaZeQBS7fA1shRHzGnWw8ge6jsqvkS7AK7EPxwxowmJahu",
  "key3": "2nD4NLVsDTEQ9eu4gwTvGTFA11qR3JoJbYeKbeNZtDP1bmTBCVtvVQLM3KG26Vi9rJSF5ttF2VyiowE2aPhar9rA",
  "key4": "5Qnwrj2LNoCcbUwvpz4SSQzeQsMBKkgwqq1TJgQqyoU2R7KTyG9mZhUbg7t62ci28wRk5ue4PPzA56Tdj4pL2yFu",
  "key5": "2zD6JCu13GAaBpUgJqBmoTFHeGWqEqU89NoasvoyP7Umr3yJBtJeMhGmYSpjuoq8Xu2CxTsKnnwHVdZ1rx8yiVt6",
  "key6": "5bg5sioFKFKeKbcEj6vSReZz8LdXXZBFE4DmbG1XgmenvxtH5T9koLz2MVuivmguuYE7hZbmaLgFPiDVdhqtMeM8",
  "key7": "4yBmeHTibuMkBpJ26jqTgmbPkB7k5q86vgz9yLaiY2JhcXYQn4KLpPZ1Gm7xHBYZQnwaoCxhGAefQhyiZByqxNbL",
  "key8": "5FSyo4hywsSBZDWAhEn1RWBgYASCCJ2pijHEU2xhddeotAoPA2rPEGQePuwSCyHbaEVewePQJT23k1ZgDKwGA2Aj",
  "key9": "5V3BwodmriCEDu6e7nhWrtoqT6P4SsMcU2ezw6GL5M5Ndb8ecbbHbqrANAZgki2atwpoWeY5pWcAF7FX4NUMZkSj",
  "key10": "335Md6abi8qfvonuu9yXaQ35uqjA81vSjozpWTaXkL4XgFeVPN1ZwmBky7aTcdR8e6EodWQF48UYMub1ofL9Ecyb",
  "key11": "57LTCMo4n5fTpVKUKbxVBWpQhnk97BbBLue2C6ELRb3D1v88iAeuiEUgkoDib4153xeepMS7YCwTmDBrtbD4ePGw",
  "key12": "rJk1GDWdXgWXkUszj3eZcAoAkdozpXgAUrhuUW5jjNjC9PWfc24oeQ5EZA1qsQkfk2LPvrqGRyUW5C8VaKDcqtb",
  "key13": "67Wzgg8gSYRxe4hgoEdyaZ1Tk7qSrjkuWyiSqNThuNkZkStkTMAdzmbd1DyFz3eNE9EmJa5adxFGaxE7BD6iVLnC",
  "key14": "4JVLA6fkU3jL1eTUmSmt38P8iaPJUHVV4akcA3rQYpnyBP3jJ7HzwESVcFpSACzdG4Wvt5DqoCCuvt4wWiBevx4a",
  "key15": "21Mhmfm76HN4tdaEC9QZYPZZHHnpCgdJqG3QDhnbSSk6UStPk5nPedpbdUUeXjKsesTfTSshGuDRCxBtCKndGQdH",
  "key16": "4CsLFt51G9LREysd5vBE7yxmBir4xy4YJaqbE3qQ8f6tmVML57nKVdt3u4bRKq1s9wjsJho6h6mHiZFGcET2iRFi",
  "key17": "4XncgrhTrh6i6NKRyWBtevJDsWHvCi6eAGa92jHb5MzsLf6tdbouSaqWupvgbF1t55nBfVhfatZxAxZeowQByubs",
  "key18": "3XNBVeUBVmT72T4siHGDSCPzRNW5zCvzsiBSrHLvmMRzAQCHPTfPbnzm3mWnMFaVRa6Ut58apSX8geu94VnJeoES",
  "key19": "5QHSXdrxobgKoZ9rsYdHFZ7q6bp9qe4Z4e65E9dVPoi2gTQK2pPSKj1RndXv75iUaN1QRDXxmmT1soHUHLCtem9y",
  "key20": "cSB2nTXV8UnCTMEqJ6qRzWez1yfZQqLD2biYP7w4uwVunKDuSawxGnCm1yDrjfgLj4xuxyyi3bQZuS1Uo6TyQ5z",
  "key21": "5SZHhubUx298PvnkKzLZbnrTrzAiyVTb7fidP6kr5pAhTFY5aWYKCmjQLzRyouc5mNADVTVka6vQh2D2bQyWZHKL",
  "key22": "2M2tsC1rBPmg9shRFmbQpxXdGJ8a3MdW2ZYMUfVhwQDM4bQQNb8PTXt36WNsXEEcNVuGrYrzbK4gWf4fLmUWTY7",
  "key23": "26XkENWXcwaHPgYnTeH6DSUmergfgpAS7QW4odQvpHfgTRyaY2SiKU3msNHwwLikW6Ff9EqdLEiq4X7zuMjxPaFU",
  "key24": "2WN47ct9C6aumPXDUpZ9D5o29QVVNhe3Z8TPYa24xxUJR6tSsLmx9LxXcr4QpFa4kFVbzjoim2AB4tKh2PiFRmW2",
  "key25": "PS6ezjrSNwswsofriVsYio3eGTFTjRkbHvJCGew9UaRkpwL6YVdkimtD6G1RXVXFQxMn3rhGu9PEnFkFBut8tB3",
  "key26": "vHb1kLweZqjmKcnjNeyp1hWVtyy4Grq21GGmTKpFavhecP5sTi8j28BDvjPJWL5hrSSRMbFXqyjeU8Tu7naXoMn",
  "key27": "5SyvCLrkz7J8aH4Ah5e8vsK1qdMabBxuhrT7VLuPkjCK8fKLFoudaqkgAbG6VwgBZ6QqzNa9B8RJspUQrn6K3JRz",
  "key28": "2PaX8QgsPQdcRGyKiqVit7VcLidD6ovwAuC6mrZ8G5AooJ91wrsqp6cx9Ku3uPxsEMPTpa4XyKxjiRVdXVu3Cjbs",
  "key29": "64Sk7cfzj2RkqUzugxzXSU1AgQfrCrYUXeLd39DNVSxbQvNE7foAcDPV2sg3e8AuarnaiDinzyLx8PDWza9kQXEo",
  "key30": "31jEwmWdGYWwhz2WU8xFM765EkF5Lo4rqUFWwT1TG4dAesSJADZG4jdb3m3GmxMUVbbR2HanoHyjsrkMgKudeBm8",
  "key31": "2JKiZkpKAWKj5FhRBG2p1Lofzr2tYz9Xr4bexBTF7kCTBjH3twTaf735fRXHVtWtQC9Z881uyNh2EVRG9CZAmZCp",
  "key32": "5dgeW5ZbTCr236tEKokkNr1eFT5Yrdzga1bF5EgC6LCP29N5dbZECfjNhG1k5MeDgmJs8ubHd17YQ2WaZiKRtxwk",
  "key33": "2gtJdiodWuFbK9bUEgME8HPNL4oJF3LurgthnimdtFpNyDCMR3c7FFh8rtJxqLom9AtviTPPCaoDNWAe2wPffznG",
  "key34": "51L2CuU1trycTzzpvaK355NoEaQnCbvqs9MczqynNLsjonzJcdbUbLKZy9FSxpD1giEhaTapu5byi4HKCHZEfZcQ",
  "key35": "5z152wk4FCEnEPE91XP9c7irLkHRuxwy6rmh7Fwvs2wAoXs3RBdnjkD4UBobf4qJkytMR12FjZJLpsXExa3moEDb",
  "key36": "4WeuAAL2HJnpRu6wcxrFw53dpT2N4bfeZS2T763owx6P1yKXHAHy89np94nadsoFueWS1tvXpPZ5ggLMQMqErSJS",
  "key37": "qSYYR44KyTVVT8n6fvqktudYsoTMjeetK6tpnFJaSBjmCxXy1C5tPM8bLNRtoNKrgUTs2HcVXcjS5zFLDBVF9sx",
  "key38": "3R8KXDFisH1EEtXCuZQg2Wu2NXpe3NCs1e4xEtDwSK6CYjH4D68eFiqMx6idksvHLKA1XQmz73XHeyxwLvyJoBqe"
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
