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
    "24x8F2S4HVXcKLZKmaabstFcDV2ZJHAPpNpVWCm7z7bb8oxdKWJiWUbrxRYWkz4fg74fedpeCXvYjeb1vGJEeyZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uzxp1X4LfeWuGFLyghv5qAEKGxMRoj6Lu7o8FMKCBADb1E57ENq4NmgiZv8MtVKARE9ogdsZp4dWaW5KksgmCAk",
  "key1": "5XssaKCkyrxcs5DSd8eMcVg3at5fghrKgDGAwftMtSMNvMo1p84QTobc5oebvgnZeVFfqapVDD2QPQaGkGPK45de",
  "key2": "5BLWgWHDwAcyjqPMBxB7okyssAeWogyWNVbdtjyP3PwdWYAQXxhTqqHWPX8nbaKTPWcaBNwafx1wEgN7Dj1Kwyjn",
  "key3": "4xA5sRcAYNf4dwD5JtAQcXhRavesEbJagDntxfg6hhzbGeTHqhMtYPmvDmPAqcNBeiXYz62aCaUGyLWVBJjq3CCK",
  "key4": "56vuSExAwo74vsbFR3U1RFC4RRYbDnCAunhfhDgnALaACpMXSYNC8i9UWKhN9o4uBXbYwuJP5EH45CDgky1Vbn3M",
  "key5": "hVG7Tyhkn7tBKWAneXc3ZaPZ2CJ7whNngow2fAUv5gdDDDUkWpjR5ADF5huqQBfk5AXcrMXD3SXWE2MQnSm6BT9",
  "key6": "3zKU84H4iekEHi7y9V3z2iHBKePZDHJyvMsDReuZWsPYj5pwmWPK7VnmXquRiUPJvycuEtCRHSUDuTt3mCPVATy1",
  "key7": "5bahgDAwBM8BPe7Z8Yu8oGzWe2qP4sufc7Lk6N7aitkcKwqgqSsXNzFkKTYunKCnqdnzsgavTfzcRL3VpTfXywBg",
  "key8": "2jBEAPWi5P7iNFG9mVqQns7qVnUq89Wk7kjDQTWrFzrsVhsdUHZCsDwSMPUSmkBjjPL5x4CC17V2WBVN8ay33ysd",
  "key9": "4ZtTFVuLgvsJKwk1tUvHbsHCpaYbacmY2Ci1LYYRpDfh6rsv9UWnQvQnHmwDHZRZd1bE6r6hBv6uAGwafYRX9Hok",
  "key10": "2NS5tEbqZiG6262T6bNr5uLWbW2wjSBFmKvcuz5z1h2mPdSbpeRtj6NJ45TBwQUZruzwQvwsT9BmGx2AxYZJKzju",
  "key11": "7QBeDzgtAHEsi1L9opU1dewfgka16vidyJLgYQtdsWh8PFm7MxURXzjUsZ2LFsBWSfJTk8HroeiZMf6HNCWNXaf",
  "key12": "5Dj5Yj5XHnktTTjUWNK1J2bQbZsZSiGfjp6gbX3dfSqrJejth2tsfM3fsWrvkn5AHCdZTAYBZ4TbzZrnVn9ZEfTR",
  "key13": "2wLh8kf2NK7D6tiQKS8yet3yiUSnnDm6HqQp35iv2wW7WtTuF7bvgj4V48bygKH2Gup6HcZEQ3SwFSXvydtgxQAt",
  "key14": "67D4tAhtiEzMFCrU1ebpZ9ewBX6HsWnFoaFB3o5pAzbmj8f6DGGDUjrYutsdkSjmyJszakSY94h4FSMKYsrsL6SF",
  "key15": "3eefUznGtEHAftgi4K3WpSnnd8Gt5vHDpT4zT2sUNCLwqqRn1595hf2CwgwC3tPSsq8FUgnvNWxiSzYdcCtvx2pb",
  "key16": "4mEj1FoVhX9aLvMqXjC1kdTLbyHazTgjDufZEDermD7DkCJuaef1zjRMQauh8SKXZUHAinP5aFTDVeqyHdaCuoM",
  "key17": "35AX9cneTNJD5hQYcMkzAaD8tLQT2crbLX3VEaKXitS2HuochrW7rXqZsZJdYJZT2RoCfpSFC63wLWURbcFdXnu9",
  "key18": "5tCxwiYftvBG8fTmnMDchdKB7E4FFNQ2cF5Czac9xtySdsrEBwksdVE51ombSQM3mzEFYz1Mr1UGdJnheHTK4wVm",
  "key19": "66eRnav6G2JWkekJx4FTRnYZP1r3VWbAEh1HH7rnqVStfrHyT5gSityVGwX5KRqEPV9RcdV2rrQBbSezZDTgrnZg",
  "key20": "5AcKjHi4LjcTGSWTqF5y4jMN3YiwrQgTZ3rHrWxRRyRBuv7Vag8aaHiMsWDLBQzrANoqzWgsSVWWDXQMTQWvzSTA",
  "key21": "4d5SU2WnbQdp8mLVS9y7aGiQjeLBujeoRwFNFyQwAq8wHzHPzFzTfapcvDS8Ds99dG6i1xMXAkm8KgDNV8cbogkb",
  "key22": "3h6YXzzzPfjogeCJpYuT2kKTRLcDoggnb65eRNTDMsiz6sxMap9H5uLjAvd9Xu8t21JKS26BN2JbXbPS8CNZ6WCW",
  "key23": "5MZRXsmcJYuqzWR2oBuwEoEjW4XXKMPMF47Gn7GoHMckuwqZuUaFaH5MNMB3gMKNxD2ucjRodWjkYr9S5Z4P7TDi",
  "key24": "3a47zMk5XpgT5TzqNPH7pjeBUVaohxdvBJRRa8wjmW6zX6tc4rtN3eSTb7qANRavhaQs9Kpx12ajFGuDYesvDnqC",
  "key25": "32f2G2FdvvgW6LkbMKXT9wtHLE5mfEgRfzitfwtCRKYhiLBMaFcEif4iGHqQwXaDKhxrgpdnGzWwwsyUETDT87Qa",
  "key26": "2vwHiemvWBgCdXP2zjm7QCGKM6rfVpGvL9j6wvL58ANfdqdy4NdVrrii3oubqkFWj5kYatxiuuMw2D8mofBYnjTV",
  "key27": "2vGC6TmwRTS7RHi8iWBd1STWfBst25g4cfCbSrU2hTpy6C1c3PzkuMrr3S8eBWV4ZWugoUvnPkFV3XiHEAgUNvwZ",
  "key28": "KSxGV3jwugKB2yS7qxodJmtfvWtUeNy7uNRo1TAWrgAXMvFMqPTWo3dSnpr54dZ3bJHJGJVwXCHEXQhq5woQ15V",
  "key29": "2KvvMP85T91dtBtr9iB8FGoMSyqVkUMcSN97bR3gv6GVUCwBxLvf5ztwfG2TWnx1xLvRbxDpeKodkxW1MkNz9dMJ",
  "key30": "P8WkTVmyzv4Xs7Ai6NKZRAxCrv5QzYJj4vaKKpnCAD3fX2vFhMQpnZh833QPZSJX2vHxmjcVQk1GaHFuTk4R7AQ",
  "key31": "25H772w7GfRGqbyTMYcsai2K5Ny85QijyPJkyhkt4c5nuUQ21pDpwpuznFV6xgEB4LM2JGD9Fw7LV3dRG21oMMM3",
  "key32": "2a9ErpLTz9ZG9Qp78VVRg45aXzVq4JtNXrKbak562u2v9vEvpNEsacTv9AjviD2B2Rcg9fTAaL4pKnF3f3vhbq9x",
  "key33": "5zsW9vQbKuszoCAZJ63bXWpL7mywKMoEXE1xunwe4j2fF5oMW1o2ymCxstVa58bzaWFEUrbg5N9AFu1BgVoyB8Hz",
  "key34": "3e3ygoxY8wSBRFtc4ti4okYZ5BFkdczEzXATtoPDNZ5QiDaXiBy64iHa3c6j7zAtdaCBeEmQwywoPzvwzREMi3w6",
  "key35": "2h9Ygjo5UBThk3vJrFR8eJXN4Drkk1fsWt9kcvWmNEndp3mQxniQW9Qt7KnYgK2hHpWtj4QRY83iLpxVehaztcLN",
  "key36": "4ufa8MxYjKAtJe34TSkAaUf7YocyWwnPUzyfZ9Afx8UQDHeVZTKcT4fMGTrmhA8LDHfxBzqpBKyTHHoC8aCpiKgS",
  "key37": "2byMzus2GwLSttQA4xYNjXWGWMwi52CoR8woLDk9iZGCAHBo1HqGSFEm94JgtD4TYNZyNJpBfM3zMKP2zmUAHE4T",
  "key38": "2rVXorajFwaHYiNTzBQA1HGfK7QTq5RV9JLDRumBdbTphuLvQzaYjcqsHUxtGQP4N18eGrjRBAFf8qTfYsDc1Enm",
  "key39": "38eUrowDpv46oMU17fE3HGoC4bPYpLBdXExnhLQSyKDWAZZnLkYJsBgUn9bFHyGwsX4UznYEiDTyYVyp86Fi8Zxr",
  "key40": "37QrXZpa9aKaQFT89mq6BYVJxoGh3ds8aTVphRawhNtDQ1hdw7G4V3EAkjv4edPZf7nBc3tYo6HrAXhENRhXDhnq",
  "key41": "4Khv2J4oCyWtKW9LPWByv3df1HQY9vdyH7jH8bz7RxJaagPTxyzfPKKAe5X5UbEsd5iHEMrDNvSqoiTn33y5jAvm",
  "key42": "4ZanVVxpXTW9Tyav5Dh2hGC2jeUYyzmrwrJ7rL2E2CdTDEZAobgqDFttmmGk9zUYcwbKpxiuLnUAyHK7QRypzYi4",
  "key43": "37dNjUCiu2Q4Jm34DgbpUbGoDDmYwxbvguMRa9M3cC7JW3tdsfATFeVMyxdZme7FuckVgcGDCXgsAznJvnL6ZPT8",
  "key44": "4pfzYMAk9hau14pFVKD4CCDwhtBVSuPTr85KW5ytmZrUvaJ1Ue6xxbUrpjuiPNHq1kKKRyFzeohEsP6VTxumitz6",
  "key45": "5BQrfET2uwo6AizzkkVLgBAznyguHQabvzrPUSX9sYzYPLc6SPuMkMaGiHRfhaV2aijAWixt1wi6H5QtoM7T9L4v",
  "key46": "3JcTZNuJGwrS6YJVErhjJy2iWR2FJgLe8jJxJmEejUqWPFoHXN8P3V5sKAuzGChLazDLXBWsmxxbxzp3xZo1CDZF",
  "key47": "4F5cWd6aSSe7VZegU5BGW3uU1pQw4on2LQzPXd6jG3FaEWx75CnVhJeF27Nk5YS4zotLMb9ySGZSvt4PjnnUuVao",
  "key48": "5MMMLjWNn1kWLKbM75nPMjPAGBkYNaXDmUhtJZRe5gikN7LFuofrCZtqUvcbWdP5fr988vL81YDoN5xi5WgZRF8M",
  "key49": "4VzvKweBUAQdEVJ5PZmncHRHKP9CQTZ3r6CXbbQqGVkRtAAVVas1ECSo12pVJbvVjdEVJy2LiTXeKqoAUuwSbWQ2"
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
