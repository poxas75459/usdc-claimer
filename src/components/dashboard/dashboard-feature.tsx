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
    "2dm1yMqdZDFMLZc4eM219huMQdSkKheRKQGghSwVPEZEih9orMbaJapr7hiwKnMpbq7JyNeQdTTbDNeEbYRm9orm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hzuDxzH4ZxfrjGEHhpdgUtRqquoFPvYSRsaxfCAT8kvY9xquPrt9QibT4xqb4FXsTNwhFED8LniuqCto3D3Cz1K",
  "key1": "2hvFor1YXX9UAwipRKiHpGGQ21RC6CYvdPWuMX1XtcVbqgvgMx4BzoJ8fystxC4wrCH2cuvghtZb2TVg1CJNNCxY",
  "key2": "64jCa6KXQ3GCsteh8PH2PkWmS3B7dyD5S5yHgM9wKh3RGs2zXCxRBJSbrqcT27rpgDpSEni6r5DxGjkn3LHZwRzm",
  "key3": "4Ab9rbZjYSxx2DrMc7dhFobXpbtMJko3NnwuyfH4EhLE2HNH3PEoZtzwVtETiYrnYdZyaqK5SjTpkSSb9X4RZfUj",
  "key4": "vSGyq3DerEWgbUCqWdhqgLXiaoBgGQU1QfSLipWzcXpRK9RLBwityfomFXmwtfB2H4gGwDbZjkCvXSZtwcEWWgJ",
  "key5": "5cTWX3raYCUiRyGWSyXu2hLTSNQFDTD7bPLoR8JDymtiv7gC7BDXcuXtHoxrkzQFoa8489B6n34N8ii6ogbBumyn",
  "key6": "3Vrt3faa1yhY5evcR9qSeAUc246Vao6Twrim4HXfpFKXEsh5PsGAkaM8KF2rASgJfQw64hDeAB2PppJiAP3EnyGN",
  "key7": "qbo3tDJrpXm5gKXHRsdPfFfGqix1fWt1tPaNDGFyVyh3sMYWFuAutyso4QCyd6j9uWtvPRnhevvUfhDqj5KgHBr",
  "key8": "2NNWKe98TRauwJjP3gZcsLpAc4SerteHQNQ2aTHNsxLh8xwqsWGEj5ZY1f1unZyzMx8FNqtfj5QbHBaoMrYSNTLY",
  "key9": "s6ZMTGJyZz28QuDT6ZrhECE9FdoPiZvC8DMxxCAcWYzkZbwGedo8623HmxZNuKg2qXYNEHe4BGTL8BAKGnHGVYt",
  "key10": "eqUmSteJD2T8Xtur763RxJCFX1kBhKhMwvbgKBAK2E6B5N47GHu2evJA7GUrSTxEUQtoHVm9LL3WGNsKZnBJ1Rg",
  "key11": "PJs5LgoeF5AmTs1HnXqCeZm5ASbiGXWvUAsEDSMTyN5p4YguAwEeRyBNrEV5oLPsDQErXCv6VxG1FsyWjrSy6Jh",
  "key12": "5yXwSggzKXA9YFZpUNE4QJEBaC38XnfyNnn9BJPh4wU6WUKEvUMzb3ZHP4s7JLpZ5RixEfoiXHGnpsLjyDZaogYi",
  "key13": "4XgVTQbpKGnQ9qCgST6QsPMy56xeRatUyjo2wLfrBRkeKmkkEot6Bty7Pfbkn81w4YXShasPN9BWky4bGJFSrmqR",
  "key14": "3BEGehk2jCCHb5sENuqzFFt3NwyyPJT4adU4C8wjBTo6rEM6nuw5JD8sfBFRWpWmtagHCXBPh8B1NsBjcW5SLpKr",
  "key15": "ohFwvyWCgm3ydEEWoeTbxW2N6o4UwJs9RWbTxkDcESUWLBvM4F1YiXqts23AgQKz6mgNoXvBd228799Yw65kQ5d",
  "key16": "2NojkgHPYYmG7KKBYdGUPj3rMXVkK2tQTSAc56ABwyVUnY59T4YGsRNxtuvyU1TsJdbSjs38cWS5U8Kx4qAdWM2Q",
  "key17": "4UuhwRwikpAorP2E9mW3cB2S62tsFVx1J2Rws1iAxw6fA7WXUh2tuJ2P9BRXKBP54EETUW211ZfUs2AttfkELRmX",
  "key18": "5myC3Vz2nHhit5LzQHdCb4LGpxHQwpEE2suqhgDbQh8qijdSgb67RuhwH186TZHswpRBzmXbqSrFv92xuJsz2hGo",
  "key19": "XvxvzKyN7yDi7jtUbsngEpa1eNdR3W1JdnwVJzYYmry17uEigdHxtjA9GAwjpDPJSTQeD7CU8vgeZV7HmkzPP9e",
  "key20": "5mqFZ2oR2jquVU5VevarQGLogw49Qjiau9VVpX1xkjUWrs1heKKi3fy3j79wYLcnZmJbJsAnLATFgH8CL6zbwPFu",
  "key21": "5qUehpGU6zHFi9fYT8YgjfbsCGngfJ7S7QtAUmMPf41p4NQ17w9RyGXhojvooZ99XCyCCTFCYThzHkPMXSDKn293",
  "key22": "3SuxQNEHzkFEwWMbDFLLUgF55yVC7twuGfo8N4VAUWutJdroACKHBxJGiaUcArM66Z7rPyhxsySX6MMh5JiLEmay",
  "key23": "54RfiXZz1CQicWd2Fu8VVEcorm76n2Z3Yt6WfsCCSSp73BUqRJ6K9XPWSUpDR7R9ZBL9VgWcnzKHUNBrb5JhAqpW",
  "key24": "4Dxmg8SPzRcCRUvxVcY8w8WfxhDG7EE3DxALmLD6gve76FBNdbbVeBBq5jaRNXX4Nd8dDmBydp93Nw2Lcdgb7f6",
  "key25": "5D3GPAmqLapkWXPEcwEKeGEfSB6hqmzCtJjY2YEzfLhQMMRzU4BPUa53PzcnrGZpgvPE56j8mtjnhexfa75rQkxD",
  "key26": "3zK8CtzqJgpHC2Q5CJnsydu9szvYU3zneY31G6RAeoewXPeEWkuas5VGGjmEZ6gFLDtf3Xx3J4Vj9qcvvhnAg5Kr",
  "key27": "53RY5VmNCkRgzNwAuH9aB4gWSrhd1mGNgEW1pyxgMvyMhnnERqm2s8k7kRfSyfUQiCaKpSbYs4NWnXvETWkUESYV"
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
