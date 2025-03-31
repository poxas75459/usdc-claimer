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
    "UuFBgAkzGZhx8DRK9TcirEpVGMbTDcysHePUN8VefbAcgofMgyLQPvr6FTu8Uq5agy6bxrKs9Q2MG16Cg9tLQxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5koi9Q1ShyWaj1NiYQsCrnWtcX3H39M5Tm7UBR7mJAtmDrf2kwTmzGspsy4Bfv6RpkjSiq4kDhEtbdZwun1EaoEC",
  "key1": "RYUNEfWGLeXmDpfdid5DzAFHNVNUgABsxWXNmbVKFCfoPofKjBhqXZB1mJhd8pPdG6TwVWT1hiS5oD6fCPQK5E8",
  "key2": "48y1d4fDC2Ke7dcMNJxECxuhb66kxYnBq4AdknjqfXP3j8Kik7yuhBs33a1CPCSZqDAGUUASS2ZeQLyGWo43sGog",
  "key3": "wft4QeNGFWckVh6qhmApAsgcBFhRjrPtVSvs5xQs2P7yZNY5CoJB5Emz7ibS6XXqkockjc4DsFDUYFEnWsWrCFL",
  "key4": "5zALiwmQkFG5i4WtyHA2tdZiGUXiz7ct8cqZhSfpQ851UgjYV1pqn4MDhYMWpzCKb1Hz2Gbbj9se5tVS5f6164Vj",
  "key5": "25m5dV1tTQtR2BrV9q38F7EH7yA4zZqpi3JnDEp4iW6Rc78rPqrZBV6cLmXSREqAi1ZmSWEV3NMidn3i5mKmboRs",
  "key6": "KhdsGbhB7LnwWgYg6EUEUF9sLgKSzfmccrBPWWQ7thdvuCDgnSANMdiPB66RP29tLRkxCLkoRmamPXDjMAp8RSE",
  "key7": "2DmU7dpcjMW9yCwZCyw1fJUbGJXT3yzF6rKRBamNmsDafgs6CatXCnjBZgcjAzyztWgSfZWLDNzX2bapkvcrnPLN",
  "key8": "MYAj1Fb9s6uNLQSLxJeL558FeUcwjkX8hHEeNF5Awji815ZyEhoZFfdmauE617DnxKAxKb2TpKRaqsjBQvbuZE8",
  "key9": "4SjuSWjdKSpGUrnVZxbFfxssh4LARf1t1SL2cy2jFcYhGy1UZNfYeyQk9Dz791chiY7Gvpct9t8W276NFUaaDgdD",
  "key10": "4UMBYZUVhsHbKAUEVX9A91NmA1defmU1kpJFvgiEAYPH3aftt96PSvqZWn1w7j4VvXuCjiXavvpQWY1A3oReGnLH",
  "key11": "36BWs8Q2hQQvQJoCz6uDpEKQGFc5koPkbPXvrPvn7sThVU1yG8RJnoxopHqUM19FPFVpHWvKrB1ni9YxWBsAf8Dv",
  "key12": "5bhtU2syBdZEwuBL2fC2gwDA6u5a5beXqBpX9atg2wfv1FMuEUQ856KyK5mHJnmefXmf5ufPsCtC27XfcnQoUL5c",
  "key13": "G7FyYs7J1DzKfzLenmx25Fo7wYuxzWTnZPkC7z2g5U9PjufKEymRcAgoHf8ZdZsYE8KyHheJXHK2CYntHzUHRRC",
  "key14": "VAgAcZVDREfwzjks4gB1KDBLUG7sMTcZ1NJ8LzKDkLPpYzWnkepR5MyhjqXTyXrjPn6eSDUE2VNa9wok2vvke7C",
  "key15": "4HKHRDCcjtjag8uNuiGfDpnWejsuu21tcqch13RSb8afuF4zfaULutdrSHbnquHSKUcefVq9fjQHCRwa3aTrSUNQ",
  "key16": "3WYG89TSks9maguBzgrLwuUHdFtCXADoPcZdh8PG6wDmB5UDDvS7tLBEWTAqyuw9kxZJ8KdzmiEVvAk8ckmy9UiN",
  "key17": "4R3qVDcxMCfuemGmhH8eaXFMnNY6ofbgSzkKxWo6tCh8dyVQLGrsZdRaaoLUsYNncaR5ofX7u6pAohvqj5YUApT5",
  "key18": "2ynHuaB3BHBmsmRkgPz1URbRj1E6RMJcFZDiEuYftRJF1RJPHSTQmYtTtHborj5NpC3dPhMZpRf8jSYbzaRYHmre",
  "key19": "3CzLkLcMHpjw6jPagg8UKShXXZTPfJx88XHhUWx176HhFWwThKZvmv3WeJqSifhYKZLHwXCocsLKAyX1wFAgFArm",
  "key20": "VjSZdkicdaLW3pmNY1fep8vABnzRR7N6kVAKDuF2LCLM2Un36ZFNGnstgLqWvm85ym7kpwbx49KQiGDACDgeAUn",
  "key21": "3GrQo6MdCGSPntnTNgqF3rDV6QGzyHCrtEb3zjcZUhHNvkS2vNoiHuZpdyTRNMaKkz81i4q44u7E5PozV6uBtzMB",
  "key22": "63UHZqJ5irMGsCv6sbrGxutYHUr7WnBXfzzrBoAYmRsWR5VwYaDJvxzHD9CsJ3dcXaecAwxpbxDARii7aR1NCJMH",
  "key23": "3X4Kma4z7uBB4qGscYpRm2nvhdaSCdMMhiLjseppUJRTP3whfYUQGSPxmYmZ2b1eLkk7F1YmQkqGFKqRRFLpmxvW",
  "key24": "5Xap2YkvLnVmcCubyAqocbjWRicYCxHgYtQGo4U2DB8UHxtmuoUW4tADUnvXm7HAR8GcwX9RYDWeJtYm4MgGkGbY"
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
