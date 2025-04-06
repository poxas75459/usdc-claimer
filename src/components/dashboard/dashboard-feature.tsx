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
    "2UpJ1ik3jrAQbUzehLyc6dt8bG2qSvhnMmocMSkuUebze63m6bQYw6VuCCZX5xsxhnSWbYFnuW9tP44xUS6MVZaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MQLHhoRaJL3LPqAVj9UYEpFtpcuYdgybGkpMXgQQAPiWPkWPfpcTkU6YVE4KxqvtDQCxiawk7yW94KSUHwfB5Mp",
  "key1": "31q1xnt6McYR4YQog6vvnyakmvvbEpntk2rjiEchhogDXEsjM9YzPaHGMoqH3GWvy3pjGSfhYPkSsBKF9xkKwrRt",
  "key2": "FWtieCRAbTnmEp3v1Qy6dSdct3jy9AGhKZT1Hkj5FJVfQbtc2TzG9D5ft1qb6cwVUFDar7jsFT7Adsf66qDzxSw",
  "key3": "4a7zVuwmHmxXgFz3fxhnPoT28bcgqd2GsRVQa9rDJFafFzFbVEm7hNeVcpi2pM75jJeQmwqtLeTmPaZwnY49XKkL",
  "key4": "eavQAggVJHnYKtue7uxZeb3cFQJsnsuymyXrwRRA2135eEtcNFXCaA88TdtywbM3Wx1B4hd6rtnBjxbX5zBaGZS",
  "key5": "3HHcHS6CNn33UkK1LaiR1zUrqPUt42ufSDi8DXSQfS8qb37vraTcRryWucLYEkGq2ccgXZSiJLSira2Do3ufFBNf",
  "key6": "goGt3ZQf3qQWNdaqJdRieVBfSMy9qE8YBcHsTFh4RKJjiAmZN1QT72XNUcATYE5Y1HGY62RocpT8uTqPF3uyfmj",
  "key7": "3GbrFc8c6ycpdgqRvca4C3vMciFsSKa9ij295m3srN5HUqvtsZJEd29nVTW8ji3f9GeuHkL3FJ2vVgLTzWA1ah2b",
  "key8": "4GeXpe5aseDVUERGdPzXDi3ihYzXLea3mrNUZ4DPAAm1QknE5MWK48Q9y4ugCTnUyX54RW4sJh67so4MdAg7fqNN",
  "key9": "497pkFfL1Ctg5hVgY9pgnS6irs8BZhUYEYGBzL71HmeJt8g8UHsELYB1iSWHXafTtb74kEsooB6DdWS75GzCyR6f",
  "key10": "TyLgn6Q4x289fYFvy8PDdAFEPMEZox8Wn8jtje4ZAJyd7QoR1CevVhj3ARbaDhTtj5TWd4dorAut5yvDDrxd2NH",
  "key11": "5ZRtvizpCHNLnhebEdSWGgYjhYSrgFCMAq2E8TCGANpjaXbfp4cUksNfC2hz3rK3o69DRLFRZ1x5pSWgHdSnxWF9",
  "key12": "2LHTg36XhcVWcnQcn8k3VWmQX6VGjnG4R4ETzZSq3uTVSQWD9G93cXMWXS5jBsqijNkK3cbuA8ioEmP2bFi9oty7",
  "key13": "5vo6w6BVNazCvLJbb8cEZzEp1zuMfuA4uqqX94AsSFHXknTvLRYuAGGAoBzReHLoTkG57PRtduKTqpCHNbdXdy52",
  "key14": "3xcNVqHtsNgjyE2FFHRworZZYQWZ8PQmZcZEgdj2kZJdt5ho2Hi9MfY77vmJcUSoWhvJvjqBha33reNLHcStRZBx",
  "key15": "21Gm7KmwdRXnX1nTwfEe9SaeFLsaxpQbQm9R7dwKZn8VUWMrgyBc7GwttnLRXuMUNDkeeHkmn93atc2Eat4uG6Yw",
  "key16": "2J9iap2JefofswWyR1u5Y5Hq76Agf2hkbd5b8Bfcw9JXFYFpg9Mzbrrc3j3P8jBPwzxQim66mCDszvedyJzRDbf",
  "key17": "5UbnbWDoUdC5bFBCa2Zdcg28XbA1keJMnuX83imFPLedQgFvF1TxZqN77PQEkhJTF2gxhBD2jJz6kKcXHSncQjQH",
  "key18": "4MVXy2DfstpFQAdjWMQLFSfRCTfcvcy1gRB3HFNFfpVeuWKAdRpv6kaBFRMnzUUCZYmdSm9JvY2pX6bQNvAS5jQB",
  "key19": "4w7QauN9E1TCe9X5absRgnyssZGAGsjch2UK4gtKzoDkN4y2e6RaKUB37tm2mQ1SvJ4QV1CbFhVuDLNiNCZzSJ2i",
  "key20": "39wLx8sZXfqBTPiTPkvcM2yWBuKuBy3xfn3KL2CVA81cRpkf8Q3tRDdpsdXBfCCvLwS81n4SpUyjkEBXw1FeGiSy",
  "key21": "rRq1LdG85oFxXUXy6jWmqvijk96S6vCvahE8TXvd55B8HcjFR1hdVcbVv9UAtiatztkNH4Lw4S3rm2hcWF6ANdn",
  "key22": "3dwN48xY1YzbKqGxzXmeHuE9Ri2oEeep6ctMejFifRSx1uhyPmi9PeSB5i4HMPzdzsAvNWsD9JSjx9hk3if7WFja",
  "key23": "3ApCwdrKY5wdHoX5U3dvyT62zY5WsyjDDpEfgFCA6LNZxynRbaq8279Tayjhwfiko9qdtD3b4nGpiif8XCgFiix8",
  "key24": "4DEwVkNP5ZS4KKeuBN1xiyUqEzewEher9CwkUiHetDmCWibyfnoZfydvEjYEeNK2mcr39hN2E5Mvy6enPBbzvjR5",
  "key25": "5Ckf6ZJJn6fHSBNpAkdi5XJScZetB8Ji7gSPkSRgY56xvJgWayyJuMRFYGoZZt5c1SingWztry8b9ht8nvbvUe7G",
  "key26": "Mmn6zkzFAW4QRAa8erHfzhUofCBkCqB3JnVvKRm6WBYqqbzNiDMSb6yufNbVtfnLp7okNynHCfRG4u6QQ3CjnzM",
  "key27": "jcnTAjasTyGXiAyHeQTD5LN4NnLUxYLySnQ7qDHtaTGC3Tjr4rvMtA88zhGx7JkVdS77XVPZTzekMXngqGyMmNV",
  "key28": "27H1RdGFLoRWGxDir35bgB1kDQXt819bXMYjmSxVRxYTRMD3YkT9HnZj7nuc76ewEECrRaoQTmPN65QC6muhyM86",
  "key29": "4T4YbvkRTUxuPgByboZx67Bs55VCQee3HcmMJjjiyqzMLpuvttb1B7aAhyEdatHpp9jY8nMSU1VmAgoCKo2psJ9d"
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
