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
    "5SLAFyvaZCZSoPjnxu582G3mzQpC74wX4JtVt2jZeoZYXBhZsTa3jsfdKUxcGrcaZg6LbahGvhoWPVtRKuJcvcFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UtmdenzkPrVnbNcN5bu8wdybonbCzfX3hK6hx3QaLPfmL8A3s5mw3oxLxRskwc9QPVJ2q6woaDugcNYW9M3q4gT",
  "key1": "JmVGhPdLdxTY2VnGdEfGbvNBkcRZUjc8wWW4js9iusZxrRMGQKGwaDUxZ1fmdmF78c2qeWGvR6StMBr9kKrvw1o",
  "key2": "4HCGPKx7eDHF2xoJB3HQaqoprTytexF2mReTLmN9WZtLwSi7NNAbWEs3coWwmaf7s96WydWndHXSKmFcvudPTqi9",
  "key3": "5eAc2NUD7ovKT793X14bd5qxrG1cuDyB1zDD3Y2WJtJeEw8PiySenrcPnZvefnZFWV9KeDnmQBM4cdW8AopiQpxy",
  "key4": "u5eWxfPZnGF8JLuRG3utqqFdZNUbR9HQP7Qgc3oQpG9TRyeCim1LFS9nd7k5EkNSpe6BGuzAFHazLV6z8iQRhTj",
  "key5": "3V6TWBJYQLwTTsRBdjJu5KPGqjvZPCM6CaAmiGWx8P14yGd65FQJvaKgk7V6JRBRea5ARhYzvPw69yEkMKoPgAPJ",
  "key6": "5e5puB4Naqdt7QYQY5STGDw15zPbCAPEEGbeWLQQ7xq6jaQEdMLVr9bN28nc6CZDHEvW4bUiusHpRtbtHci9G7xM",
  "key7": "431pRGm7VLt2bYdi2C1CapTTnkS5yd6itAgDTTsVRvaJ271pfJDrRsUAxivnPJgQnMFKg7GeP4tgF31BCRdHAe8p",
  "key8": "2gPZ2D4CEBSLTZxh2AqQaR2PakyCt9BThPfkYxWo2YmKejYxDwMJ5kU5x7XvNHxTwLDNbZWSACCyuoyxvhDmMGyq",
  "key9": "3sLKTMsPC4EGBjkrEP3k5hQR539qXQSXWJvqkCeGyH7vpnCrB8eGqVW3equA5c9etAgsK7AsUCyoXHsCs2nRCo8N",
  "key10": "25ZcKHc3UxYh8B8dWkCbtuLihtQh4xe95iX7UWo2Rjpd4qJxiqjWdk9as7pYNCP9VxfP2q4vRoXrhkbiHTpdGDLt",
  "key11": "3ErrcVB7LTQzYgh6KRjpqic1iyU7UsnH71p6ahF3MqpdD3mmZ1ubGY8prpjsdVpGUvPMNCWLeA84EaS1v99AMoUo",
  "key12": "3mmNjjxjkJCNn3Q2VdhhNpfUaadYzGhJup15RfsCnvZSou3KoshVs3CvEWNFPJNsn5gruRJ6fmeRs7K87fxqaEBZ",
  "key13": "499pFMuVEeVBNuUuupZw19jBLLEFGTYZNBwFUCKaEPPrCWnbMjWGqmcUBQwoCKsNEVcCP68rcuJVzFgfAUg6gyPJ",
  "key14": "5WEvKJiodmvNdz7w4GaDfwa7vxPzQB3tR3eSHdfgCJ5qQJxzWGWhMs2tJ4bBGJmZjqmqwaSdU2UvJWpCgTM44PHF",
  "key15": "2SUdTThL1LZKrQCswhPmmyzm6b3keLTZdYTHUkRLSedyvL7edvCHYTRJ9s1no5Tb3tkdzqYj8DTVT3HpwxccYnZq",
  "key16": "5zvdhrnR37CdjEYbVywneaJqc9Qks2HMkjehprTwVzeP99zZJV6aPU85vVKvFUHnMpUY7GS86fbH2pjnKWgZF81e",
  "key17": "4Dj57TwxXqcPp9fPrVtWGF77YHypZb8vBXv9XMc3FfJcwZZWr7x5vMU77phz8pq13z9tnRGsZ5UkWAMEWe89Ag1w",
  "key18": "5DseRHnVQabrkajggRnaejKnx5WKjq5CttGQzsXLLiNLmyJGDt3TNQdJx32NsEFM6ZCVzxzsoPWTqG5omGNU1zEF",
  "key19": "YvDH14bmoJ7yGWynCUNHfM24syBD3QmSmfNjTDEPpnwFaKr4h2WuesbJ11EGv9WUJW45y22EiuLCUCHTiv3CCgb",
  "key20": "3omLzo7eKbDzbr2P98YDZ6seJxEKQZr6GT7fPa3fhFp3LgAGBLK9QWWNNfnFmmFVYg4Prz4MHoULccoHdjkgcjwe",
  "key21": "5EB35GEAyBpZYUEob3HPChmgeetvHdmgTSThV8nSj9N3zokWbp3dLyT42dcBg595puczUrAQFizGvHV1yMP3NMuT",
  "key22": "42vj5o72pFZJUefe9TEdnjQ3NMQLQiD22nWaofq2Vh3x359nED3XMtRHNbpaRGPF6QNVQ6XWfLh6KiPnXW64J989",
  "key23": "3F547jW9yLRTzESTWfCpjD5epXSh7BmsNAkPJosrKJkfNDdxzeoVvooeupnXdPyB2mER9ESzag5RAqLB4agmYvDt",
  "key24": "5oYsZuEfauoChTbvitgG3JyNts3XXKVin7TNmhELZa9gaTEYu9GPbAoM3yTEyn7ztCSJFV3DUV47N4Bon2pBxM5a",
  "key25": "kaMuuCkT5nmtVNmeo6NYZ9jn5VoRgzjq2312CmdaA5pTKPG5DzD1XtqJJdLPRiALqNaRwL9hFx43CgfDRgsaAQS",
  "key26": "4XSdbj2aH7YrzfvD6nzro1EGBEkKMr2Z1rgKWgem4sKrrobWjtvBaw5F1ou3rDuD6xH5gwbp7KKTRU6syazNeRqj",
  "key27": "5JDWSdhttLu5vvG47CgizW1vKizYQfcriUnYK8fp45Z12x4HR6oonWHrXrevbg3LnQ8mmbQ7HptA3496zYe9oFBy",
  "key28": "4S5nWqwHi7S32vY7NigrZPvKjQaoH471E1H8PxFiiSBwoJR5GNe7gS2NkPFAJXcV6SXYEm91p9nkEtRkgLq35bAv",
  "key29": "2j4P5Td4xTaovUZx2MWBztRzh9gn9VPpfGpWpLF3YmvR6E6GAw6Xg4GwiovZMnBJ95xfMougLqk9Yu8VTPDkVGci",
  "key30": "2Kbo51ajhRxtpNbtSYzX7AjqBYkd3PFmAPvN3SQQsvm4E3PGUM51gHEHTUszQ8H8MuBborbRq9gWwD2hG98DSKR8",
  "key31": "3T3L15jM7EKCnsqLuk47HR7sAyKwZR2HAWQWrZXB3JPQFYBCzjP26Z54ewyJnB6x17QHZbAheKodtDj196Npdc8i",
  "key32": "4iKU5HKNAkPsZcXAyBfPzMXN8uA5M5j1YeEx2drEoC8m8xP3xafhfLU33bJd7Aqhs4FnDHWiKwPjZ6qbn1PBcnsv",
  "key33": "44FYMZQTswQRnByrn7E9fCMu48yQzdzxqBc8XxUnUWXDagtyMpp2imHvNYiTQmueV624mMSWsMypuwR3pQGNZgNH",
  "key34": "4CpaKKBGRF6TrWNMGAL7A2DNp8gAYK93pgkNe5qRR3SpBREsCTys1UE8xVhLZtgxYXEe9RQ4reB4CwaBX8FVir4v",
  "key35": "4k44btZ9EV8CcvnWNCseVEx6Fxq9uHHWjunxubX7DRFrbpnvn7gq6vumnXL7ABNHKsDTBnZbadFwbNjWRaxhG8vy",
  "key36": "621j3aH6Qdsh35pdor7XEWEQEMs7dckkaHNsJxYimuNEPB8cHDddWvQG1adH3pcYFXetQGbqPhgQY1YiMWmhAgQG",
  "key37": "259zsrfYA3Yc8adCn1q2SEyKw81N8NQK8iUmH1TcDt8NCvCmUXGCmxgdd4vWf5r9UYBsUEXRASJohCMfMb1kpD94",
  "key38": "47YYLMmkCMpTt3cB6PG2veotih2W4UsQmT3AjEuk3vPd6GEDogC7zA97o5rbj5Bph2t7hK4TEbpanMDHsfQBWhJW"
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
