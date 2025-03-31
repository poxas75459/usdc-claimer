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
    "AoiMPR6GXFuE4iWVuTocoLMF9cQNPsrwhX9aeW8KTg9D4cxR77st4jGB1n4HSaNbzqmhimwMSN94yZ6buFPAzWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4obPA1FiHVSXxWpLF2nuq6mFwtRGNh6QRZtM9ziHeic1qAMLyBnU3WWpnS9zTMNMGM2CX17cHE1knL6pKeg4FJef",
  "key1": "39DDaNDYP7ip6rAm9D9spyJ23BZpoWG8ig8dSbDi5EEzZup1ieCYBR2AD9L15jpJ3otgDTswoJrwLdL8Vd97MEC6",
  "key2": "4C3NpctpoNuojZMDaGrnHy15i7kUxYMkavas3Rp31SK9QwnMpQh6EgMevQM2mCX7H3kDihmPSs4K14GnWXB7Mp7G",
  "key3": "Kqw3SYuhUhvihcs8yLGn3MMLnPxzPH8LJDhA7Q13LX6DRc3XTEPXwg6vpdJoDQhmmeRBtqwKMDCnBHoynoEqDDB",
  "key4": "5pGSE5Ww1xzVK8TD5dqxLP8dArX1ZyFUECRai61uhJGZefMyFzykB658Ppeo9qocA8R8zb7zL2mahwztwFF3tEG",
  "key5": "2hweTaM8UY2vBRLqHTCTf8sEvaBtLMLfVDsdDAdRyv5AoNs925xn9pGQysie5hdcrqwNTrcmPvXesJLJ61GtQtKQ",
  "key6": "4WJcujxV3m647NN7PZ5Dg3hwuyRnzmJCQjngxdE2RjqYbvXfSbE54a5tyJvPuLFy3eJHmAuHiLEVVzvUb2EohxVG",
  "key7": "49WgCxob4tVUAq8jBRsZHdBcKxUcB99m8VZVKr7fyHMuipQferc7Wzy52KRUxRnD1ddxMY9UTDHQr1Ufu3EMq78T",
  "key8": "4oMLpD41XSE6VyEsiBLc5byiNQ73iyS5mTWXMNQEQ2wHfr8518khPbpfnREJ9rk8wLN22vxnDRwXZfMCHZemMM9b",
  "key9": "4AZ2JFtAKScKBYh3AvytjX9fBwSC4mBXU6isRk9GbcXTe96Kv14Kb4rZBvU7Pa8HmGnEyiHND7pE8CzYzGhPVYGP",
  "key10": "5H9ieqH2UK9TdSuahZpLrgkKGzxQGjBoPtbHrM8YwUFjhrd3aMfA5CyYUdFx1KfDzg7dw8UHPKbLxajvqPqMHJQ",
  "key11": "5mbVXTtfDtc9Fbb8GECqd2p6DWwC5gdfFJ4QPJD2Xmuqrc11XdjWXGM8xWZaHfNBK5EXZYbofxm5SxCgKvBra48q",
  "key12": "2h8FQdUy68a6qCBoVQWjUh3iobvQJuu9A6fhEwxTa2pNuJKFHukxmwGZvsUJzkwb8DuscBGWWKZRnQBzQ5fN4isX",
  "key13": "4RdjXTEKiAWAyHQZupmL6xVWkbi6HWMMnrSPs7bxKRiUwtgUsucPYzKDACDPc2KKof4YEdGBHBPzfksUJhm8B8in",
  "key14": "5hYKwbKNSb2X775AdPgBYLeXwmopw8zBaJJGCnJXj5Bmuf4yn7vweYtt7njNuwsJQr7yRB2At5Ka286kxgnvPzzB",
  "key15": "48c9wXwNGSvrCeuPCuyXKokGKbry7ERk8WybG6pNYU98ozpqhZhsj1HJJqL27YKeTdfQs9A4pG4ZsjhDTcBVYCKy",
  "key16": "26oQapQ82BCKpoYoV1KNBN3HPb4JNTrEt4iNJiUoD2Y9G14upT6Q3QYW937fsYBUyALewbACtB8iPnZAi2o6vH1t",
  "key17": "33uH4t1iPnvKYuEGfiV5WWY7nXDA8JzoEPhVimuEkeEu8VuP7h3JcA4TACXiyGaEDgaUM7GKweqJewdY9N1q7CSe",
  "key18": "3nf8KSoQ9MWx6c4qn15b8BvJreDuBvs92sKvPF7nfP95BEABCxYZrtQxv1hBKte4MgTDDF3ZN2dsN4dUJxFNgeMB",
  "key19": "28zARcKcgfir2fPWLJGpNa5HtS2WxzQoPsmTDrCY9NpSrs1Bj6LFQhVw6LfKJSZhs1eEaGRHK33nYajWyeZMS8WL",
  "key20": "MchHvXrc9jxY4V2NVkr5Zzg4YPcfYqrWfDGpXKXvy7ETrZycHgNgWv9V9ezfmqiinCNYTyRF8hHQnEJTpxK7RW1",
  "key21": "53qoqfGQmz8BW9RcU9D6ofukbQc3h8epD3gkgUTTsxSKViGMesFpAAfHKXCLo17V5G8Xw9565fisjoKbiTe9eEea",
  "key22": "4dobjBAshPbevoaZFKqjj4TFUJ3mnn7GqysJWJMwHXmhivCYs6grSpSfgHL7cW3uEhEpLMfkZWyvURsmafHy92VF",
  "key23": "29ir17MRV5QRyyeSWhWK71cd9e25wdaHG93GgKLYsamcA2R9p1NA36fHWbeZiTr877Xuvbxx417a1988gedZMhks",
  "key24": "5Bgwep1kgv9egxwBzSe8zq75jVnGs4euBjBFVKHVRKUWfihYqdPYcwwiQYPJCrkErTod63fCAANhz1dLm9C5YsRG",
  "key25": "YsV4Uyah3zrfgeE2vkr8euHFjLQUvKoXqJv4tuG9BQj3EeE5MWQjBtG4zuSizwHMaTG4x2B1tYbGovwLWFqWvxt",
  "key26": "54PZ2KwSEgLwssg6jXqditoA93tAzbc4iJDrSZiasbANCPxwRRLHmk3DuoBziwqGJtJCjVCAiZryxNynFQknkG2v",
  "key27": "3w134mtV8FJkSPMBGXv5d5R1AjyWBNU8UQMvjeuZbZWhH7KgNSLPd79FqRq8fE49A866qYZjXwduK7qFvrMFRAK9",
  "key28": "oDH4jzMPt5Cc2B1YQs3g3HLn4VzQDiZpQQ3jvzFz93gnWtybmHjASMQRxzEewF7UuJwwxiei1zoz9aj3fkTt3Nm"
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
