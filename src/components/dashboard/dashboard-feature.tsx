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
    "55ESwiYjGqpkYmjjH71viGoDs2wZYDDrnnwgXnoFXhGsBeVYm8m9HmYF6MdkXoqxK3d2EhSiNLQjHc2xLTogsPPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o8tA3thkggN1yjGc6aeBpHQbACJjxGsCwmNi6KKoqy6qZCckCxjWDpdW4PkfUfqa14fbAbqDLcKkp9bfCSofFpw",
  "key1": "4VZ6SAooMDzVAvAkHqCA5rYRa5M3TSSjfqLfuCGM7aH9QRXXK8YbXaoYKJmLNHGdnBFXw9hA6ULYvbAeEWYvyRbe",
  "key2": "2m2YsFrpq9ugFYVwoa7wPhzGD2tJwijFZgtJWUnqavhnMByM7sPs2JCKytPAyrXZdu6GSzwkvVKfTDrUdWxL8Fe3",
  "key3": "2Vg65i7gEHQgieUehsQZgUqmAHJ3Nk62gVxxdeVNvF8Y2ArXf7Ucbbqw4z1s5fenNx3THLrUTE4JqmkJ9rXPreax",
  "key4": "2Jfe6qCQLkqrivj5bzdwLGWygX8CedVrtsPYkDemgJ7FUCTQ6Xk3jzXfJUfPFJsPBBDcgTUbL7QcVSHyhmZtTBGT",
  "key5": "2uiSMqHkNAZu2pPCnNnEt4mVmxsaELVbzUVvpsLnDG49U9122HNovQesR8nhjfswZFV99oApZ2Tf5cT9wiLTNp4y",
  "key6": "2yrwh9jBRqanDZLHFE4pnkVgD7F2JEHK5BVbzeeNSQs4QPZwmGN5J4ozvp3mmhS8Vb54a6QHeZkgrz6CmQSbyJfX",
  "key7": "4oKkiCy7ciye6PbfRDthhKqwRRXVBccBrv8JzRsVsUFjgawRX9Z3J5nuTKaGd3mUHaD5ius8uNpC1HLk6dvkSRNG",
  "key8": "yMu41DvJXcvhmSGCxyfVXKzbWKEVUKWD2ig3bJKJzMm1UMumDiDpLTvenngrSzrPtuJucezmosHUnejpujzyZmv",
  "key9": "29cmViriJ8fJUtRnCMMPdo7CaKckEXAkuyJEc9x8G4vi2xb8sv3AxGujrhihGwMmHZrqPXzRJu6fei8ZK7J7m15z",
  "key10": "4XmURpiyo9GnnBPsi5vu4HDLsFWBNCtnrvSrp2pmnafkiQp87wHG8oPCMfKj78eBFtyYiLxnUbCMYzysjV2iTpzE",
  "key11": "4xTe28vvsZUQ3M5UDz5RCnU7mP7BsPN9khKhtiafitYypb9JjzScqXJtcVPSSFRfsnoTaAa1jicVhXqh2PKMTzsT",
  "key12": "5yetGpMyFDiZvMK5os1Te7xwc73dXbfHHecEZJ2n9YKcYRNoKPZ1gkfixXgsekwAmMZvY479qAXyPLfP8fEASSUz",
  "key13": "3hwxX2yQfXJ7KsW4JWxn5g3jKLMCe9h3ub1PV8iGQwCNM5pqTvrH87175vSQko2YxSx22nNM3n4QXH9YvvLLgwmV",
  "key14": "29TfDdbzbKUE8aY2oVrXnSKFiWaYHnKk7iUXLwgKovXNcScsdtJbPqjoRPwR9GBy5e3vv12wifgds3e5cWyfJCoF",
  "key15": "3nitAtHu4DHM16cqvUgMYftLEqxuMmK7Vv7JPy76Z39Ldiqe1SE853CE8YEmmY2HCDu93NjKSQxb6Uo47Yxfw7zi",
  "key16": "2W7bmw5wD4HjKmbMoU7UJaYMtxito9TdHjjogFMzdaMZ7x8odpXNK3Zmkjxw6HyVm1wAHwiQNMEX6DKPMtjHCPPB",
  "key17": "5rHtVGCdeDh9n3JKALavgS4iFc7Hah73CZ356GTPTsPph1LrYJjsarzjLP5pVRqLP6FUPmNaVPvn9LRfFonTGzK2",
  "key18": "2hTcpaX6QvGxJZovYuKN3ou3gHEqkrGsseJmgHARy2wzHsKGC4hBA6tkrJaayncUzU5rncWUVV8tFZ5XjT3SPRrM",
  "key19": "29NvwdKHLGWLZYknZKZ1yZK61UwaGDP5NgTSfGvJx7z84HoyjPvZfrMBtQa7GEDEkHugyUMQE8CBkz8mpm63q5Xn",
  "key20": "62MVfX6UnzySRGn4KijWFyStWbJ7ptWHpbMpECd5ym5d6jfHAiXN8P8j6HVCNGjix1CCSZzmnmxFW3QBrjoXccHQ",
  "key21": "LjsKw24DCN3Gy7Eb3CbAyGxpeoaRsuaT9Sb7ge8jp1YLwASExHfaUn5vQXK7mz2YoZuwABySpK3SjdgsbWX8Dox",
  "key22": "74GgFd4kqx99P4PKJ4hgD7hrQDB8VfTzx9QpvaULt9xRQVQNH4z7ZDksQehZCfm2zS5N1MjvpsndywXFW9DeVA8",
  "key23": "4bT6e2G5Hc5yaqNDcrZ8JS4LVKcfnngJxEVNVBD1EqKMNVqucurR9acLp2fR3jAoSGNVHyrAXSBcPusyQywU9BxW",
  "key24": "5HKczNRMSqNgSG6tEiVrq6yaq1icbePf731tmrbxVFHupWLP2q49VRFdRff1aYX3bmzj3cPQcX2WqiFbDNrf57bv",
  "key25": "4k68WyeRRn3ZPQvSECNZfY7QuzmFJBfSjzQ6ChMoQp9gppTKCeptyubnHEAAdYNYUDcXbasTHQDAWcDQc76ES6HV",
  "key26": "2BSxqVEMoLHL5nugfrNhKHPSF5JpuKqKaaSKH696eWXy3tBWyccwrLp7Ryt5C3TsbkJFpU7nAJ378CXneAAsDxg4",
  "key27": "5JLnwjVC3RMH8sHt4jv2aMxBesfv4gecVWa6T5fhaNGanPGXqhm4JC49Gr9wCcK7bTQyBqL69EEgPexTR8mZgrnU"
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
