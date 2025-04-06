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
    "3omCPRwUGXTEcccQDE35U7UVkZAZjXBq9yX3ZhptLMgZqq1XCUjoYaMnwY9cLwUkG82Kx2cM3fR8n2VYE3PAh9rQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NwX1iyYN3Y9y5kNuZoSDhEf3FppXapxaH4TXiaXakirubyMB7G7ssYXRCjJNtTtc7NTirQKLa2AdXEgqVHHE14r",
  "key1": "2Ff6jYnX6U6guDebVvrWJquuo1ghupF1e6LaCeYpDAoKWM2A6YPboGYyZjYmUEREoJX78KPFLTuychN5YrkHT2yx",
  "key2": "4TDQLkHeDatKucqN7qB8zUC8gezUhWdbBBb9HQHTE5sJXoL2Waj2SfA3zpFUN9B5wudWBs2JeSCtXw8GqYoPHtTS",
  "key3": "4rhZ2pGY1mWd9HjrUb5tVVADJaaJ72eCaauprEWW7gB97kuNa6EmuAFGKeYk5vHx1yeFuLcU8W9ewnUjpD2AHWXB",
  "key4": "225WmtLYx9MnaebtwT2m3P6zwWGVzzEkzpqE9TYV5kJPynfP2YXkxwmLBmpSKnG5YXBDhp9deCFTHcSkncV4sZu4",
  "key5": "6FDjEs8TdGGkTsgig1m7sEKyYsTdJ9Gx48XZzB1amyGNkhjMrEWTFzzb6izAtfj6F5sToFtr7ukopuw4Faoue4u",
  "key6": "3hr8EAZHv8MFbt4v7KHetw8XeeWb3MUUZXYQSAL6yxBKKJHc2fe57cVHZPAfzZSJvwNfoXYGsmPmVpd1Mrx5EyLV",
  "key7": "5R1dbGk9ZhedfWRw7CTusVvePZGZ7EkWyFLkE6yJQSX5U4A3GNjQ2VbEGtwUejLWp78p9mVs9GWS67xPA9WW7Vz",
  "key8": "33daZEEA6BNZEtf6uuh9k8WNmNQbg9kxeDM5CFLhmqU6nkVtx9QwkQoLVJ4rExtQdf63fwcB9V5hByk91oeUHKmH",
  "key9": "4mJjjxg4CRCprx1Gw95ShWFeUXCPXVpPAxPQoLWM9ng5E58MiQArTanUPTCYFGQBDN3feWPncpV6u4KsLqeWCAu7",
  "key10": "ZekZPDSf1M2uehJMACr5tNC1YJ94zUSp29zd45TUjGvTsTpyfgU3x7apPzKEE6iekY8CgKaW8CarQHwZV2TLtxj",
  "key11": "3sbQnVAzHJTV1KSWBpjuySx4pVuu9oqKK9gxDR7fWk1RWYG2EGxADt8qCdtdbz7miJXDzJCPMwQWtK6gwayVFX7k",
  "key12": "66v2n9f2TDEvAbaFGdgP4sT5evBSxFQb3LYAf79itGhNUwVTMP1TmSjX1wyYrKmWbvWAupAG1g9m6is5wcwHf95c",
  "key13": "3oGpSfogiMKwXTYdMiuC9jUDBRH4cdDJJBv1hFpGYYmEuz9YV7SGpE5N43VpPz245uBYHiP4fA3Y6anLb5R3U61i",
  "key14": "3JG4TGjyEcMj9BmWVWsftPz7jXPHBCTzQZD5irDmvaDkRjVDaoG3XXcnpL8hcmj8PggHFgTpkdBAmXRVnoKjRGdL",
  "key15": "2eZYZxzbwKqkkyisfPx42csEsWjUr6QHLGrkk6ew8fyeNzRH72rySbQn1KrN3raaQCGjthpZRrydTM1KRznQmar7",
  "key16": "2JK3sr5RfyKooukSozCZVeiGXWfm73PGjS9XeutDfQXN2ym8Kkf5FEkMxQdXUSrfDi7sY2Qmj7xzradKs5zBvnMt",
  "key17": "4sSy4Jn49Xrrw8gtoXkgwbGqcvCPWbQNcPvfSW9CxwSEY6xibukJ4RdLVqeTPn75DptXrr5wQhmhnZmnMBDAkhfC",
  "key18": "3pNzWKKvgv3Co2Eh8FSdoL9HZ7d57CYwha4NeJcGHQs3E5KqYjnRRYMFKgmyx7iX6TqSXfoEUPmV61P4AHHC6SeD",
  "key19": "54hbKAwb59cmmTeEF3rSuZUspACxq1iqVGaHED9M8iVeDWGQ8Qd9E7ZgGieujrPpPnkcZ1CX9yM1fTMGSepLzRyH",
  "key20": "3kcytgd8rRy4FRgZubaQgeo53Nz7wkyboTeXqvarTYQBPpvQMRWBnf4sYfpj91LtzLdUw36bwpKBV7xsSsfokJbQ",
  "key21": "52dEGmC17798r1EHvMAMtu6DPCszNgVy5U7JimWRtajXuyDcRMm9rydJcuZSZPF8ptPmEFwSTXfbabZpwfwPAEUn",
  "key22": "3MmfRndKFzccjQMcnVo3rMjZWsTW4tN417pXjjNdaFZhwy9EJo4HSUnXax7G4RJW1794RXhz1ChEvW9WCDUYxMwc",
  "key23": "2frngpMexkFzs2kncS9t2AmSwYUB6ptAJiMZx3HmyQSsTDs6wNeEej8LYuTNUVZLnAQ5cnR6a8SxB3c8DBtN82No",
  "key24": "2kpsgrPFYimQJs4c17wvShxH62Vt9Wrn2ofqGFYyFpJ7fgoJkBDAtsgekzWVvnf2cg9KetL5EcuCD96UmtGcuLrH"
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
