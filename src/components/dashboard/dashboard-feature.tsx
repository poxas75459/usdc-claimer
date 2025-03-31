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
    "2LwokvcQDfrJNgkiU9TfE9rqXRji7UyZgRzYVaYwxWk2qoTG7jERfwpQJdrFTKxfjbpXAWKNjk5F8HeHQjkKj628"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JEGUQCF3iaS1RNPbk1kn29x4rxADcGELes4QM1Ntt5t1Y1NNecFovj7xSCSqSWQoQMzCWwnSzjQsaBbJQ5nvpcq",
  "key1": "5s8z5AUzS1X3CvRZA6nwiyJkugWCXVLhJWAvHrJoMDWbLCWEDjYWvw46c7nuqHgHUeaK6CbB9UbNywEK7BWLhixP",
  "key2": "61uTud6cF1cxjRA1q2iUCpJqmnfK2AzBN4fnWM3W7gMuBdnfP2q5AD4F92mRzBmm2JYrPLPCDeDq1qYRahV4WhvP",
  "key3": "2X21dMtpkKshaMcLgUgQNsWjfb1NirBLEFdZj7Ew4Rpddjhwuk17KB5YSnxBZhMi2ycSMYPmEJrA8ASFtDxry7ur",
  "key4": "nTSMxGFMSoZMwJkrD8wZP95hffketRZ9B9SsHZ5EQSChRhXg9Goabx5tVu9M35dSb4iDZ1AYT5TNhdvpAtYoPZP",
  "key5": "5E45yyyM52PPAVVx9mwWTQ7ak4VNDxos3ddER4pFsLjtYbnEyZ9nPukGJTavq7x2qVyWHiN5okScRSY1M2mTDCBU",
  "key6": "tLiMc7Dbnr6pV3NWACinQVHEh5d86r1D11yqm2bcouMoVDH9dgrvBdzqqnffBBrqZx5FNgyeDVXzpfCpu1huf4y",
  "key7": "33ErMm8DKrKiDvvvZgFaapFET7beFhWVNMonhssvqMRH4MahdopHhxXwsm5bEsEhgtwbSD2WPn33HHNZQMsCbLrN",
  "key8": "37FqUKxDtf9NWWUPpRmudjS3AFPoVVqv9ZS3j9LQc5ZNvqH5de5kjrHgfGb6kddw6WZKge9ogk5JaBkJciuYhyFj",
  "key9": "34YetJ7sJrTAbtxvnbCZ9AzhxqckvhQf7u8kBs25vxexUmjKEpi6Njs5oDzjRwCAZTxhabnA5Ed68ii1PV6Dk5d",
  "key10": "DGfAUAP3L5pqAJxZtHyANZfLMtTaoSRDGWyu6Cns8WSgFeGvVxwwgQEqKwNinaBQYHnQeVYuwrYepsGzMpC19eB",
  "key11": "aiJ8v9fheL3PTQ1aDAQ3U4jU8GnsqyfkcGKYbtgA92KyVvHf2w935oaUMBQkYJHsxEFdNVoUbBSFk1bGhZNjRp8",
  "key12": "jQHomzgfSCc5UH27m3BJ8UDM4xAgQ7dGbn2LRHtmJzuWchtMTesd5P2QWshRcLJy3i35P8BRj3gk1t2Ze7gu4ZN",
  "key13": "3VLANL9DKA3US8V2ULVYhd2F1Qe2ahVHm27xya8qvwDPiLQSMqbdJNG2ArYaRZo8jo7VVMyiLDRcNZnCZcbiWQE5",
  "key14": "3UPE5Db3RcX1ahJ3TfS7mSkMB2eoy9cd154bZprfKRXZBWawyEP8yrEGvc9BtRYWds8gwg5giTt3muRFSdKBpZLM",
  "key15": "XdBe52R6Dop98nW33VoNfy9SGjC8PnJze3t5wuT9TAE7PicNtLqHFTejkn8kjB56VHUNrUKhSFF9EFcur9MRiPf",
  "key16": "3UpJpvHtFkWH1pxcEEVjtfVRaFJS9iUrgpwWHeMM26kxGqvinXpGzatgECsHzSotfshZiyE95DeWR9A2PyNDPKT6",
  "key17": "4V8rYdUbxf6NPyiyQ8krfqwS23AH1Ex4QmQYfd6YqjBBdgA58XdzWVJVWq98UUDyCDirGgz6XsaFRjPMExeZdWK9",
  "key18": "4d5KkEpJ4gh8JDbMVqBwi7pXepHh5QAZZ8ZspGUDLPRaGDR5je8ELsdCHWNQ6YVkCWpQJSXE4bkEyD7XYAVDh6QX",
  "key19": "5tsNQ429hQ2WeAQCix4f2asn8bZQvwjM5p1RpwnQg1LvEJZpG3pB1Huw7cPHtYcS6Z8L7kvBr3XXSKbDxvCwhKZ",
  "key20": "5r7qnFaakg5y5uCQrgC9jeynVACcfFN4MmDftdJ1Gw2G68hoxqe9GN8cUGAeEEviS5pQxwjHpB79rbskwnuCSuJF",
  "key21": "5nXbYvd4rSmTANC9HWMcQWbSJyvJdSVtSQpiLb1gKn4gzFw7LNoZGT9B66vWrz2wmmrHRDseocgQ94WYmKMt4SwE",
  "key22": "4u4m841Q91QtCd6VXaauaXGqENWzsugCmnhfuqvYbPbVJYMA7PvpPYV5ePQcMzSwbH1R3B7SoiaTYEuXQ6RE2PkQ",
  "key23": "3JLXJLrvAUbs61A8KGACwo4gdchmoHXCGBF8fCLk1cuY6AANjfob1gpkeFM4ERDVXNJ72GTJMUEUta8ApzD2dQ8P",
  "key24": "3rjxXCwZfm1RZn9QYcAtBaxg1goUmsrZtAJE7X6k9BpE2NAD1Z4pPG8FMzkdoCUGThkpvVweZTwifqu4DaK6vzfS",
  "key25": "5hYpVmMEgNCcPoXE1noAA96mjZVBv3giR6zR9BdiTXwhqh2qT6mZf9e7seudnckxar7WJTPrjvkhN5NGEMcaWndz",
  "key26": "3cUnNh6jbHtpTftp4qvDFe991bKxFkRnk6Tf6LLNdN2mZNN4vExn1ugaWBUQR1PCZFj98xWdPFJQZ68j6ju2qgHj",
  "key27": "5SKJ37itiDjW9iespU5NW5EoRCcyw2HSb4xHbY6JhTsGB1ywXThNqewpG2TZMUVmgLvFXZNgVN8MppXV8Hb3Dsm",
  "key28": "27R7oJxtff9pnf5JdK7VFPYj2LeERwp5tWe933qH1KoVaiaWLxMssFCFXpMWArAJ7rX5S6udecrghDzAtCtaYYe6",
  "key29": "3SUhQ4NWs9q4JimVhRr2DWjmahxPab49MZQsjfvcg45G6wzo9HT8sy9emVr1FW41JsUCTXUeJSrpWpDdY2xi6wws",
  "key30": "2DWYEe5JGQh888JmKBPaXiNGNncYTBM9nVB7UyNwsMo5wyV1nM2Z1UmFsXsfMFiwgDmnzmgHHZZn5ZnyCKeh7skm"
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
