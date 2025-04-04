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
    "5We47AVAtdYy457YL4wvts5vQ8QEoCaTLGE9P5RRugvCEGUBcekVfUeUAqF7uNE2tbFiQK2cG2DBrcCxon2n6ew4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aixFERXbAHBpoSXbYVwoAaeveGeUkNSHC8t5eH1icYyUGQbxAfuMV7vz2fakUjt9875mEJ3p38bjibdfYAtjMTv",
  "key1": "4hLZRKTCNKXLuuPedDDf33xhioC5dzc5qcdvibPdXXaoYT1zFRCiRcnGWSdsy6YZrix3F66ymUPmHyzxmXBGmVNN",
  "key2": "2BCfNeEZGb1e8U8dK3NZZHjsaWfQnYijaGGFhW5S6PzDtvUjavWGdjs2KMd8VFhoJEM9uN3SXhGkBWHPRaDp8LLx",
  "key3": "4GQZ8WxGTgftJW9HNE94xMHDkN7A8ysB7WGtcgsp23audWAm69JYkqpKvq5SF9ewaTrNVQnnPtyZm9jJLKxrbJPK",
  "key4": "2oPfhkKAMVmKmZNELSiaHbdJg3a38NPtagsfsgjAFGqz4xCT2rDW8h6ufcfX8Cg8SfdJkH8mPkwGUTZ3NjXByCFy",
  "key5": "3HHRs95gpyUu4GQNfoXD1Hi12hdELRL4Emt5McepQmxAFQAT4xpYHa4gg3szvWXnpx8YvhY6C4i1jXxmNTjaM2Yp",
  "key6": "4YrhexsFYEFkqinFQVDaZgwsx3nuHzdVAWqoRBRSoAauJBtVHcBdAe7DKmXQrc1UAAQiZ4oj5Ht8sPG5oZ2FFQqL",
  "key7": "3GukFhdToxmSCE1XWZ4WLbqXTKtiEZxcPJ5eqHp9sdQpBYpWaxooc3cSAKhzGFQ7YXbi6n447ea2UAe6fTpEmUaN",
  "key8": "5RJgcrnNfTL9jj7JRSa2TdYvnR8xg2FrTwJtfCtCBBjeUENGQDD7nhTQpsWht6cpqVSpk3Mv3Z1R4tXwD9oEKvF9",
  "key9": "s7Gf9p7eemfpsKNthsQjgsaXWNL4iKbQNfy5hJCYbRXBaHrbeAnNrGfnnjwrJeRiKKGP9EqJcfZUiXPx4q6mckK",
  "key10": "4kgh1QFWfmULvsp5Ma1hbTUZVt8fXd2Eot2KKPyHd8NRDvW67eD9fT5Va37bebGdsN32xDtSimRu72D3XwTPQ81W",
  "key11": "2sZfoDKBuWuWo65VDSdzZyHs4vUq1GfT5aHkMgMhLY4Pr42FdSfizCXqjP8u7V3WEBifZwhf7C67scDVaeRP4syq",
  "key12": "e1nuur9RDEmQv5nz6GfXyynv7juCesvQjUMFh9m4wtHibvEafxTFwdFJNYMbgWLLAQZjdEpzGNbwEFaboRVsgFS",
  "key13": "4U74CbPoHx7LdcBeih9CfY5up2M9wTheSFmrTLdCXNEneRfBaxsxnUsLiG4TX23zCdqA4HuVMGzGMGUuEgM7pfdJ",
  "key14": "5dwZgNKUEpcB5tnKHyrgEmXpd8MmMSP1XA9dacwdgMLDHidSsCtiGyU1Cjifr9FjWLgvagcntGybxNiYqKaqyQL8",
  "key15": "2su6E5sSGzce4ZfrsynTT2eMwAfSa1j95EgNan5db2qM4uzTmqDFu2cDSVgxYLacadJTp8bQbwVQ41BYgjnrAHt2",
  "key16": "2twZt3ar3LbYBFBiJVgpXuZKPPQC4NRLEt9hHy26y4GqUj14kwFpxTWMhdxNoKYhAALSF9pNnbL9iPYXy4z1x2uC",
  "key17": "4JQWRU2Wuc6r671QRNDMhSpyAzidbTk1CmfZDPee7aVJAWtGWQ2FVBW1SqhfRqeWYVk46DiqsaAdkyE9jnf9wgQR",
  "key18": "c5geK5yVniT1uWVKKfH6EPZauFovvJT8eWbFDGwQ5Gn9GE28aoeoFPFy7NBZC3QNSuu9yKPs5MGRsLgtGnuvtEo",
  "key19": "2PB4dswCKNQ8oiqgAotPHbtjiUbdobJfffCcCjPQGZbKkYZrQcDysvPUhCWQSiFxKwJtFaWoYAYQPUP9K1Cot8Nx",
  "key20": "2GuyVL4FVVDzziKsGRpcYNBrJmm4FkhBQpa6rrwiENYikKjz2boQWJjJxyVe4HUyNdCibnNoAFd2HqVU5mm2iPPY",
  "key21": "126XKvX8Q5JgiWqHXsCYf98eMCKuycEzULQkuoWguSzoz9Hv69s5wh7XMALsK66Nri42oJdauFJcrhkSjdd733c",
  "key22": "26JpcqmqeHdkqM6oie7EWr1iatLmsEHnu8wzQg5EcGW7LmWwgALHJGcBtP981jS5MMgbE2WjkP2Ko1eAk2if3Eb4",
  "key23": "otHrC6MEHQVWWyuxwUaFoh2qmJqHXcWjpLkCuePDZ6mFdJL2yJhiaz1P6Q8FxmAFeugfSMQ5D6xV6EBW6nuH1Uj",
  "key24": "3dHofrMfeSvYSBSheJU4nvspKiJqhzFnp65bjQfertoWJ72NcAT47aHbdWfLFGwScmRUrhLrWuCn9gJa8RNVSDq6",
  "key25": "3DgvPc21PpcbvfsvNofj3mDFUjDuBdgqCCdB2NdXqa5y5S5eCBXZEeZ9aZzJy7P42hsKvAxNfbiXMKwej1h9svUY",
  "key26": "4JwWp82SEeE3K61cfXmPwEguNWaKvc6zGSYUemNZvfvERGST7sq5qNBALCqe6VPZpfVikEEX3wf3Cp52UNALGG3G",
  "key27": "2SUGevzirbsBcgcAoWcreaRfEdgi7qDtAWvUCynpd6S2DvJb58P8tXsJJjUkcR9YVUag7GBvPM9u7mFfzWhTsPYe",
  "key28": "4tB9XLHd6Ln7U4R2CSkAisuY2rBTyfVVprn2onro3FjQwAdS38KD3qTTFUdAioFZiAoA31bSG7Vn17B792eVQtw4",
  "key29": "61EwGewWPK6f2X1p5bPBpFuddStEwFeAKHgf8WJJzbeSWEinWdTU8Ru4R7zsqLGWmFcYnLMx76frNdVo3ChsQNbo",
  "key30": "3YHVD7H3z69e6KrS2ezJ6kqzuU91iDVTWyCkXe5YEV71PKSgijBZYGigimN8vVitVUwD13UedxxozZfVSo4qx57d",
  "key31": "D6XcQwQKhsVDwVL4RWMjBMeCLrYjsgV5fX5dFaG31NdFyF9gRXDeQWCftG2XTrqkzadGyVw4CR9YWmzYgYnvULA",
  "key32": "rZf4UME5YfqjaXeBvvcbLQfkyxJvZGEvAi1XVEYUvmxqAoSbadzbyz9WoCYwkgJRKupbtxV33AdJ4NTeshrWGyc",
  "key33": "Lwpuz63QWYrdGM3SuaDrvgKh1yrPetU5XkwLmJ5c4uws3AAu8A6XoqYUHNzRcp7X8sKFVEaWgpFkGNtSizXtn7x",
  "key34": "ESoTn6bfp9GRqWYUteMBVBG8E8pPMVfR9dFNDogrbEHyEX8WFLHYwnhfWHrZKQqXbgUGxFo64VYv58ARKxi6K8e"
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
