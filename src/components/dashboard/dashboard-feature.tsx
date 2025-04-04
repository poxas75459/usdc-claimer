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
    "srBjiw2PQiDH8nrCYtJTCgrKKqDf551h45GSaUC5Q2UqqKmFxLe5rtMUKkHH94p821fkNQcpjb7i87xj9fjSvqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V5FYMA5VHDRMuJ4VcKuc4R6uZFYFoDHQKA8pSQgtNXjqXBFeji8kpJxp2WYCi4sYDw5eastK5HHN8PwVnP3ckUu",
  "key1": "Xqq6ZeRsA7VFow9icRHRUPYDxFus7K1A1KBYBDdUtU7PgvocJ8zsh29pNyrzuvuoF3kVoa4cZxSyVaKhFNsRQcr",
  "key2": "2iXCyh8S8Woia15GiyuZ5JsGe5dFBWYZhwC3s8tmd841HS8FALsTp8p3rixShFSbfN2g48oZT6P9YLMyqrpbWT1H",
  "key3": "4VEaZAHATCw8Q8xU9UgZrtpS24ZCM6no8HySwaeVX8w86unEVf6Hcn5Vu63dMLz8cZwwhTjjAgmv6icHCJW5LV9Y",
  "key4": "UWcW9geXHHdkUt6QeeSa8UxkKrgAbmFEdMEtXUbpE9JA2vpyTwSmQU6Jcsh12f3bQqPVCQFFUXTYAhXwSLUVuHH",
  "key5": "FDHKjw5SSteXFbUeYHFXEJz3UXBmiYBZZhzR7zhkvmE3NvRA2HpSZYh8vrc696SvpBop7KZ5QjXL3a3CKrddsrp",
  "key6": "2QKRsrguqJfuMgej649Gk1HuLuzwPVLGrMT5VhESmiMpZFpKUrsHj5w8aVz8U591D1LjGaRYYHdpPPMR76xktEnB",
  "key7": "3yj41F9zj1zgxv6jKQooYcNwPGg9yYm78gPHSXbDSAdT3g1WeKpA5TojbdwHWHtLE8AfZ7W7xwHoLViyavi9zn7r",
  "key8": "87XuAz6PY2M8mEVAyaN7Ziwa1MEFs1CFSRtdCUHt1Sc9n6NuQdHn1RGnyB3H3Z3HjNAfSffCLKieSJLZJq1nfDo",
  "key9": "5bNPtkCN4rSqrTgvZGLr9XQLsPdeMF8poUchDTeHfvnbRfbLbqjfpWLayR9YjUPH3UmPJcTKukzeXRExCSN1PPws",
  "key10": "zmFm6bui5y5La77GHXyRdMqRSa5MJbg5FqwLhQWJRJkuMjFiGx6mg7CiysJh68oHq4E4Jt5CgCz6cn19e9na2NS",
  "key11": "3qdcc1CRHKBiWRdGhVzcN64eFaP4SVExJmPhRwAJR1MaXbf3H71AAnifzJWsDv8VFpR4AKFRHyLEkPM2znPMZv4C",
  "key12": "Mh3PNGCDg4YKuwEEJ63XNTAyAa5bCQDEQ2EysqMy8wp5Sk9TZ5zwU2C9wavsx2sxEBnGZjL7jaQT39NghyZ366u",
  "key13": "PW4aZdrgJagj9PdknACSVUMCppPZWtBMTC2YpFbioWfHa39atNcwmvKxpzXBxe52VprXjPj8hzpxo7x4nkGXXEa",
  "key14": "gSdfdFdoFJM9a2siSev1Y3rxDYfFSSB1jrADL4cdGg4skP7cQ9RGhLzGNBcgzSToX3SoAFAuB9NumugnTMJNvsg",
  "key15": "3S5QncgLujFz3uCTqw8MAUxcMzoy54bWCiAqsTQxeTtppLHobonwT5KwmCcf2H4txgMf1E6RoasdtWwcsbQATc1K",
  "key16": "TiioTDCbiwifzqz9YzqzKCTEu89b2TLDfQ7WB8oyaPUoUhiX1JKevndXUqmb3BgFJYiACKJ316aTspxvTvW22G7",
  "key17": "swkw3nwuoQx8ZE3PJ9MpFNbViRrPbmGLWXS3TyPaYQp911P4hF8qPSe1Q9RRYMLBwCtd2jnXJ2qv11VLr6HfU94",
  "key18": "2Z1B6eJjxY3burschspfEsUXsGAH9Fi1EBBV6BJdAMkMTyyxsoH2c4x4NXtEPEW1aXZeMZJ7cPCELok6t9zJ35iy",
  "key19": "uuQbBGeaEnUHjqPwesg8SyhZzPaVRV4xwhD2U8Crm6QUNMjvKqjNuBSECq2mdcq4FxZLmFJ4eFWVMRsstqXy7iU",
  "key20": "4B6QkbCSxuyPMGq823nBdVumP9MwANMAXinYyNt3HnxjEdPqhEi2eZ9ASvjeyJ4sHGBwFA83ajrXkZRWuRW4SL78",
  "key21": "5Unc7Gv1KBc79E2rfMcQj9R4H8qkWAXMpXYqPJirGcjYbTxZWthNsUFcsJmQLeen8uLLLF3NMdJrNmMvYP3dqcDT",
  "key22": "3WraAiby47MEXAGbL59M3aWASpn4581bpCqB7uQf1kRTcgGGibYAwn8tfpdGDWp2ZPM6NDZmVE4qFyTzEQBk1wPm",
  "key23": "54c1n8vcxs9yffSEpdYh6c6nqXPyzTaivLyP8Qz6iMHabFx69FxT2Nn8xVuw2qNjMF8DE3uzTPHAaNA5DhSLMbkB",
  "key24": "G4TTrLSa7UkGP8LVNEQnwMvsAnQcJkf5kJQmY6QeRt2sTR1Jm5uN9vPJRgWN3ZLgWT4DurtAkuxXbZ8xFZWjbSL",
  "key25": "2XtRjkwXd7cBtCJnqFchjghBfQWkUSNfzPFuUzA7EVQBXFP2kW9pgGR5kMBF9KGW2Em8VNfCHUkpE89EtxpChXyp",
  "key26": "2ZW7FuznzpNWYcQuUut15kgdS3eqh3ugLkKfwpB5EXqP9Ydaf14YLki3X6cs7tQPjYTWfdtTip5XrSTH4yK4j2Mz",
  "key27": "3hdRyYBPJTFK7SvAdGNkqXzTWHa4wD5Mw1Tg5Xjae76ZYVf3Tbwu4d2a17Wo3bY5Juj1dR5XpoHyvsWfYZfdXdT7",
  "key28": "X7hEgfVnk7acMsyy2Hvtxw8qvxetMJtKY3BLcFQUyg2mDZ4cAuRduVrbCBd9EFEoq9x9QS4cjDNXfLBedkbFFHT",
  "key29": "3AzC2gJBNEp1tH8QM7XwCtmdVrTEqw2EzKrGNSNmFZFXz661EagYA4sgCkvxRAnnUMyrH1mP5mJyM7MHqbPgEuze",
  "key30": "3oTxjNz2mEXC7wEcHWWaD385Beu5wVBJWfrcy5BqCJLtVMisky4anY38spDoL7eg6LgdswB7xjZ9NHKF9HFCAU6C",
  "key31": "SqDjjUsfwMc6HPgHJgB6s2jJqAePBX2EVpag7uWnaQnHxXsz2Pp8UizoEKJm2cFdGQiuqxLxc4A2kmvcHwMQmLn",
  "key32": "qoxiBpAoAhqS7DHURTXPqeP3khQsPbbn4rubK7d51LfxY2qVPgw5C4K2NPwu1gjxHxB1e6ST7cgyWuXmDUxQ67n",
  "key33": "3tL2js9wzdTNKEDvWx4tF23dEeJZYDs75Ko7Sbcbzz5fGwJjcuiYqk2UFZaFigDAthnyhqwvxmFhvc8fBEVnoHuC",
  "key34": "3uPfrywyVJLZhZPpnMRo5kfbAdE6c5FtHUpr8t3FrCdB3ouWhypo9UoK9prDGhr6yqeK5MA4huaPtnHEhx6KrQo4",
  "key35": "4hg6VCKT3wDNjAKkab4RTS2hmKFvYLJPHSoGjMQFUwLq6ferEF4pPVAXGbgFVfZDTzagiKYYGDsKYsnjB85xhsRJ",
  "key36": "3RKaqiK9RgToHvxUUHejsDU727hrnWJ5qF3pn1HxFtYkGuwfJ11tfqdQf2U2zFLhAcLs3Ew4ShfAugZvTbYcJCee",
  "key37": "4vkPB8PjkYwnUddi6gY64tWi9wUCtkN7e4cuUaSejvDce1ciBnht9aX3U4dWgjLA6SFKik5BGFAn3bstLAHb1Gup",
  "key38": "2ry4MgWwN4AgQJcSoWM1ijrDKRJesPJFFSWGjCTskiWFkV8KHTiiKu6BbZdLU9CKCWU27u9bzMuXTw266yyccLin",
  "key39": "3g7JktBsRzKxLbN38ChXQ7ARrJtFmkwvGHTVZ61txtrgosHZi28JAjTcpoAqdVmqZB5DZgeqae6KiyLSY1tmCrUg",
  "key40": "x5gW9haHMiVtsQvGYrKs49GaK2S9NRqZDajpwi8wHRYeeFLhtnaau646pXJDWhpRiEnsMfVs9VfiupGXBFyXBpc"
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
