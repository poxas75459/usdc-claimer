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
    "59w8owsboshhkwbJUvxDkRjR8uMkgQTWqLavdogcYfsivMx1EgLjwZ1mrMsJF4v43246qBB7LJh1EJTAWP8mWjEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44X7CT2tWnBFB6NNXx8T75LZ3Mwq2iEiCw8LXYp3CCpJT4wDuxf1b5v9hjHwwjXgDyZJ7MUSgSPhXuSBbeQJ4dhC",
  "key1": "4utzXMuhjzaev5gtkhtr7sFNDaWzzseTmd1A13eA23seD3SFfAi4N3aqkUgxx8RV76ZDXUBXumXa4WcZEcNhQKQX",
  "key2": "27wGSJ1yaLAZWPiB12JbmuTg6989nZqyUwWMuxw9WPrp9vAnajoFBHzujfcMz2EDKWeuFr49XnNkSJxgDX7TNg1v",
  "key3": "3F69FxJGSsnxH1qm8hra3ctQJgxE26BAVyMpUypcYcQC2ZHqCszozHjgJcV4d3DA8CdZzDGFqyq4THLgavpzNy7N",
  "key4": "2YuzjT44crC5PAoDHSCAj85yKs2jEmV39WjRGRfTCSAS6zyrXSpQNqurKVyKwUFz9ckfeQDaGWoUrq44x5uR2taP",
  "key5": "3C61eKMc8MYc7bx6Z2sBNB8A1sUzJBcSFBA8BwfqhBbtk1jgwytnWFYAsPSobj9r7o2Jy9jdRVBv4yyreHQmXHCF",
  "key6": "4FA1DjG7Q3GuWxF3drvdko61D95sFFWBP3xmVpoJG5BjroCfpsmaREJ96idZoeRWqBNgeGQLiuBeErEo7oi93kXy",
  "key7": "2UxPFKSyChy2RB7YmR82VyGuAftTw4pcMrTi1qGfHvtWcZvxsVZb3wuY9ELHHUZwx7AfdZFWmacqBTaBoQUCd2wL",
  "key8": "1semz9fHgQTbQtieHmQmAtwPKqs7fY7EHpYFeWmZTjTxdam7myK7yfPj2KfHJG3V1xnQxa1fAgLXJKfakRVohqh",
  "key9": "CtPi3RNEJKtntje2yoJgSd6TUdhEVmg6RoNiPTpE9TF7cMvXif9XUAFhz2B9qVBmgjkBK2N5uvU4sBs1ejwcXTP",
  "key10": "3et154XNDbHgxcnQ2TZwDB99LQyMDeuNZewKrvrmEWiuzFRGo77JCuSrcf4sbD8Jxa4oL7Uk5Cz9KopZztWcKryN",
  "key11": "5MUb5vXMW83aKRxUD7gRfwzbRfJxVmpKZfhqtvejD7gLeKEawZ9x8pwWQNavbxehbNe3acjp9Erz6ayemoueRNq",
  "key12": "3PNkDoSKdp9PE6fdqzPqgeJg78FXykdxi4ZfWhpiph1yib4rLKXexKfiGKPFmXcBBTZzHr96uPwdpXz75xudPnD6",
  "key13": "2aCnyQ3KwsXuxHYWuCYf8YPneUJ5LBCXNLcNsWrQpmmvcdgRM9AZopgPiWkuiMG8jKWpGQ2KGyNzqR3K7KPg9PXb",
  "key14": "2K4x2N1yYHvMPaSi56BtZNHATWWvV2s6PpTEcon5eyV9JnK4d97tbK8wpckDKtPjncvvD29Y1CKBd7Jvmxd36F4p",
  "key15": "41D17UmALHaTfkDsispWHjAz557Z1Vpn6XqNaDmvqY2xfUF3zK63jEcLk68LUA7mzF173yEtYV4zXP2AuY8eUvuc",
  "key16": "4gZHN8sdcmf9q73WFUo9NKoKXaVtYMrvPX7bxLhoQMiBxrKpDWtAMS3j8c6i5biGNfUWwNukcC6ShSpMJabDk1t2",
  "key17": "5i8DHEj2g3rbcxpfuc9ah9BtNCzVQLwimsbGz6qqHVqphrgnqckTWReD9PnEtbbDRrF4tbbCozHhfH5234jyT9WX",
  "key18": "zUBZ8bi5JqHQobSzcFL6j2MRXbaeHUXnS4rCLy2ndfw4uPkHeu5PKPDjm1n6kE441GvvTxbHBC4twXAhC4zyRh1",
  "key19": "45M48TmqB1QpbNYfaPFrEwyn3yPBFPxHo2q3psYTqHXRosdXBN2YyBN9dCSXzWn3vFPL5axfHkSaMF6wguGyriec",
  "key20": "3FEZSnKYrxS7x62NTFZySp3kvg6BHMhTJ6LS1AdRKqKoq6sKcgmnDNzEo4YLjKw1gQQHeQGoj9AfbfZgT68jDmpQ",
  "key21": "2FyY2moHUjaJC4osjoeLrb7U7Ps6CYkbR5ZL1wrExVjAQ2YfjN8zCBbEcxbSQLdqcNHVMzytBeC6UbT7muVBKbW",
  "key22": "D7nkeP7hRUy1zUjHPN6JGe5DeLj6AoR3zwYCQDp5aGwukEK4h6911YusLgw3PjBb8h52CDp46awXd8AsC5WQpGY",
  "key23": "2HPzK5QAu1t7gpA7PE2LXzbeodQdYtT5Qh5K5m9a6E82LV7tqa1Ebhinvcyf8QhM4ssPbuJxWWm2924UHKQShWAR",
  "key24": "2oCLV9HwLPuk18BwuhGwRscPpqLEDXapP5EcFmG4fi6DLHuZU6iNXqnyJphZ9BMereVXYuSsax1uVhvpX7PGzMV8",
  "key25": "3YPB52iSmB5Gk5yVbpVVxKjPovU2zPqSSzKi8FNJJU6rz3RGHUJ3HjVv2LyvDTNaR1cwm9h5ozwCHTiXKGTnoSx2",
  "key26": "K32Ka1FppqKV4agnwjc657xo2DgLEbQFeh2acngbg7Pp1Pm47ak7G87jpvU5QE5PbjN6cg8DCeVhu14eKvqJAhE",
  "key27": "26UcjS4gBUFrf5w7NYpJhpfjXzsP2yqEqLYh58PpZCF2q86szTjGvdSUj6AaY46zU8yLVDeswhXonDs1HcAfz1iL",
  "key28": "4WEyNWuiYcHqPPpb1Y2BX2xyLbmXskrdogrNWyv56g3KE7sc3FCYmXCDTPEoMCexRbxLpmpjwbCNqEYUA6Goteot",
  "key29": "3bpQmJECoPF17dp1KraKGPuqX2xdrLDpv4uJuG3XYayxqeYo6gBKu8XG1en3dJpmMxzt8pjJ1ARRmAx6JuMnEhcx",
  "key30": "2QV1GqBrrUgCz11HFtguj2oHV2VMDLAEqMozBmAWhTiMVy12bHXxENq4Gwp8m9nPzCZvszga6a3FWvXXRXSwfLpf",
  "key31": "3sxQwjV5jJzD2iu5HmzuZK5sAs1Eoscj5yLtwxGyi8QYCUf4RR2DFTFwMbCEtAEaHGneerCHwqYXdk1wzWCWcBEb",
  "key32": "4o32nfynUcmhL3Dc8ewKJuQsSPA1XR2x48cBDE1rgyCRLzp31xck9p6F4uFbYQbu1swpAXEyuY1BHL5qx52MyJHY",
  "key33": "4D9poE9KNgooxZixfwDatYyRW1kwYXTxvtWBvWfpryKp4gktGNK4Tnh7EdXMVpHC9DdGPYSWNFEqvrqRERRfm1Rd",
  "key34": "4MJ3z7qeteQxFJGjRBzeQk6iq6RuxwmJwLbafhB9RgHKabeczwp4t2a38QACovN4W8BX5HBAmt8xjgxgKcgWzfJi",
  "key35": "5w4kFjdKtcu5q6QH1YHvPYaNvxmBrz3h1Pd33HVHBbPczmzAhYWBsQHA4WTnC9vgJ9GFP7ooRgH6bSTTaeh3Dn3h",
  "key36": "33z7nLrMRodFpMnaKUNTy9AkNtnvHkPyw23WMk7gXdHCDAG8PiskDGwQD6Dw1XghzMWdjj7WawuX34qKf2ctqseT",
  "key37": "3ycT1AMSoa24Eym9aMMD3DZ5YFhLzACPQapY3g8YbFUZSCGjc2rYZ5Acxu7rYjvnDbTiJFaHCSoo26TWDFx67sSi",
  "key38": "2TPm5TEX43iWhC9ozdWc5qwvpnfXqTASRE7iPodLL4MhivmxkfAnitVpSzhZ8MPAZCwdtTnWNQEZ3sN71FaVgJ9s",
  "key39": "4SzecVcX8b3BkyQyXa55iSG9ZrGuuPt8V6rUsR1aiSwGwQpHVAHeTeckpnWjy43LLuDZ6zDLDpUa5UYR3qNZF9VD",
  "key40": "2cmxUKmhGs8xsYn7SzWG4mfmvV8vHeXo9cerDTtvP5jRi5GYACHSanDHibTufvU5DkNmy1Ym6fcfPLGiLAyyxcwG",
  "key41": "XCvkCeSSASjPndBFyZPS3kcDP3JYwZSJgcafWVFpMXHrxuqaQ3vBS2BC74tDVwpmiKrKAuhhn8nRnT3CKdgJjeA"
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
