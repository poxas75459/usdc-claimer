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
    "3Ut3Z6XdJB1VVDjSdCZxhniUzDANb9NZUx2neiY6k38vcGJxB6q1r11WFNQKp6WEh4LoQ1VgQhRauBbJj44NYDu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cve71fdMKxPPS5zqScmTAijCV8rHxsVQvbN1ieSs7RiePDkew5sjUTSSGs7tRg6Gkv1rvMvJxNWryK8g1Wcfsn3",
  "key1": "66ARrjFT1XdMG2sRFKR3T82pDuWowwoVRNP4GNnccBVBYxAB8VXSdFe1HuSwNW2DiPpecg3KVavMHaYp7N8N8pF5",
  "key2": "E9H8Q73av1VJmwNcf7okSjPWtbvHy8uAMDG5tWKPoPQUNu9ovoVE57jPhz8QGHg4hoqkxYgGVrLUwU92L62fpQE",
  "key3": "uMHKvh5cQ863bSb8izqcTmN9q1sjkPyo2uda26YUUQcLDW8dW41VfpppUS2zBxzgoHBvViPNXpZhSTpzFcmUYh4",
  "key4": "33DBHRZmuFETHTfm3mbbDWoinNxC578dmqesdonTKggXqHesvHguYJN68SNNy6ccCZeURw5tD4QmrBEvQcHiVdBF",
  "key5": "4GNcfhxCjRbJuMTGG619pdqQJtRT75yiEDZ63t8QHWtrAok91CXHHAbKLB9tzMw7phXyQbd3JkCB3LcCC7Y8ztyS",
  "key6": "4ySgdFyBfhUSJEiFgiDBnLtCyPGobyAS1WqMvkD48ZM3YHTYyADrAX68Sx8QoDezzMXJQBYjAgU3KeyjNrLmSRYJ",
  "key7": "vAriSyxMpgi83sbKjLQzn7WAw8dCHpZHnFeG9E83VKTyksJKoR837ugUkW1PPXyGgj9ir96mjexQpUWDdGTDFtJ",
  "key8": "5dshpq7pvpmZcuwaLqsMmxCs7K9yKG6Zh9xZUwGHdri3gzXATfX2ZSEDXGorayE3GqQcuhZZGihRuqwj296GZSBF",
  "key9": "KLydeGQPxT1AeakHZZS2vMt58gKATdeAvrNSUCy45ghaPsPUTY9xJRjKhbVcJFemcAKtQHNri8Jepyk7ugZn43v",
  "key10": "421hgzuD2tj41e9KMGEwSDPUEKxsAouuf3Nvthnjcyh4NuMRHSXPMpW8kBLcctM9fCh3MAJvK5D6Ke8h8LbN9P2b",
  "key11": "5tHFSLJaYU8jVcbWsRYSCtHE7h2hsK9LnYB6ewapRKb43TQE26mR3ukRCS9GecyvCbxgpYtBVviRKyCsyG4kvi6e",
  "key12": "4D16f9QcdLLMHihva1QhVjHE5XzafDQsKddCAPMvr9zUffRiR6n2b6f1sK7zNNTMv3v6jP7zKduKNrPDeTjdq5EV",
  "key13": "2ALZcV8i59VdtCKMq4nwSHkWhWuajHUdSx9MovakEFq526XTTig2wBjjZcYE2kiLzCKfQDg7NhGW16S7GY1H3JMC",
  "key14": "E1QbKZRfYjetw9X5hReMqmWnd4kKQsybDN4UYZWTsgTW8MkREDob88WYksZnrFV2zdiSabGjzqMZkFwegGQNRZ6",
  "key15": "3ThpBQmKfuipD9qwY3ebGx4RPdqvhoNjQhyrJvorWvQadi8kye3SUHEcYHtZZoERXPwdTHK5UBemLkpbnK7XpawH",
  "key16": "5F1EjnYyrLVatG8h5NA3arLFBc92BDtYRxwASYRdS7WMxqUzzydYVj3gS3cR2oPSfNJ1qYNDvwXzB7VaCA57nxWo",
  "key17": "gCq2n2N5ZSfeS9AdUhtaZ8nvy98ENA3aj1idm4aba8uUVHKL1S2LkXaR8qN4pVrX1Dx7GkkParpqHQfw7qEbUzf",
  "key18": "4fR4WfXfDFQX3Co2fXMASE8ydMHAj9GYeuG6dQotGe4oM64gVB52DNphRVpni37u5mEKRm1Brdw29cPurBQwz8ZM",
  "key19": "4QUmo4qGGPVXjRypt9LHtbe2KZHx4y7cy8HfdoEDru4s3FCvyGkc7EA4P9GnxxSyREs1aSjiH67EvC3EHRKdnFPp",
  "key20": "5jLVout5GxWeYTTfo7UaXU2QfTpjrKoHBh2HBDXn9d5s11bYsWoegHK2Hfr2SZuHEyv9MmRrvqxnv2cTouKTRE6C",
  "key21": "2jtohn58viHLc4eGo9vDMGdR7sKeHJxonDUCzxmq8e4yyyfa4qN2QmqTJpDFz673BnWZpyKx9ftDYm4gdyZGGFhn",
  "key22": "2TYFpuSzpSiDQtfGcfZTf6qi3WiMRcw6JoibkGRpvLVFtKeLijQRSQkRP8NnAhgzcgQWZZDukQ8XDrPCXVcwzd21",
  "key23": "3gThUCVu8zF1VNUvRRe84pzYPChUSby6HhjUVyo1NnSGq9JwdSEXEAc82dNESN52rQWifJpnR4ZU4KYtzAaTB9YK",
  "key24": "5viY73y6ERDM6Zhir2WHaa1Qkrrfzgy5XfXKfsZn1XMME9Vn6TsX2NSNfaSjCuAkkbyCJHBkdxy3Zhg3ap4oDSJX",
  "key25": "3j6MnrSv3yRiD6nS9LacRrYfxUcASRwcwDTLuE97x8M3KjFfzdVnJMNZUhQav1RxCaXtqm7eyWTU6ikAHK1sbznH",
  "key26": "2GEn4hSEbdGFJpXbUkmkRh1MTnsiQ6zTib7RfJ3G5pQXP3dK14icGJTCbdgkcXEgqXENYvjUzdLBHNBVrsmSaBQE",
  "key27": "BwM1sgDi7AbTPdQ8XLfydpmY6qd2p2Ng3eKtdY8LVRS81X5WEHX8p3axUZUho9G9p3x3UZwPiFFWZq7XyCgTyC4",
  "key28": "H1z6Aum71YPX3Q3cYp87tf8hWgZ6hu7Vfw2Jg8Yx94a7Dvmc2g4Fik3XTRPKwuJwJAFuuRkMotSLX2eg1z99BUS",
  "key29": "4oh8xXon8goDHfiDiqRAogL2q9xwZK5Tpbuji5War8xQ5x1H7Rn7EUSVJ7Yph3tps4HrDUnFcVPndvjqYs7WPGGi",
  "key30": "2SrXjsCnhaQpMTTCS2oDGAqHnh7Snu6ypVN75fqk2uqajVREbbtPjW1px2qSoh8BLJxD7L1seLy5KFmFRnrkW1h",
  "key31": "58R8dXj9t1YSub6AUu9pu1oinSaUc2Ew6djTk78E4SgcMAg2tZmytETjgrqGFQtGLxRwWwGhAqeZHRddfryPYvuM",
  "key32": "c8BbW7thfxg2AjtkneWZ6PemK9LKQV2F1v28ymj7hgfjk52Fu5U62oYDmbGPFRgUbePJNEhMbbZjUssLYB4YxHN",
  "key33": "3TqPMkCgCt2rerRHd6td5GLwxd4T1ZzsvuVgunHw6jqrBkLnXAQ11egWFH8HEpffSqJhKN4HPHec5XMjpnqbFufB",
  "key34": "4k1KYXjDZ8v4yPuc4mXz3YiSSdrVoDN8rBoAVQBh7egdFkxXSPWjoatDH2LW2563szwaGAoHzHCf3Q17pk6mrZrh",
  "key35": "5NmgTTN8tdTVN82P2cuQo3xe8H2PCQjHb5zNFRM88fJWohEqFxfoDy2snpW3WoyhjGDcLvfxbs5kVzQKtUA9DK9e",
  "key36": "4mmhsu88HQbZy5pMNBTzF7GGRuPTMi4uE7YKcoSDn7zp7NDAGQVhWEWkWdQ191667FtbwaBWASLXAonjFpSMi1ee",
  "key37": "kxKwHg1mFR7KFyftGNr4FQ3yMy1Gh6axRjWHFY36JRGVMzdgA2LTumNhcAsHsBpPuu7SrDxy14XoKAtUCEjKBdc",
  "key38": "5Mv6Knp3Gg1rzSvgZNxWAaYGBGgjHNkmK7oazNaRnRqGTXtWstijeMoiwCsUcs1NiK15wuhWoYsMiEazGpDawM58"
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
