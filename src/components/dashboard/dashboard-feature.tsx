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
    "N8CuLVaz5qDYpKgVgAgcjn8Ev4RVpBfeAXxYc2WMbABnQKTwCSKNpZ6hVRpoBJaVWBhi4QYtUuwpAsWPctoknTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42jh9RvAFdQoUoMLkiKKUnPnyhuwrdwCZt3PNTjrYaqrG4mRf1XNhPZJBTAHPzUDoTBArAwjGtxjwn3k124dg3SN",
  "key1": "4F1YafoRUXkPm4vokox5ZuiXpKV8hJXxggfDNYAHeKH1vrn67VrC5qVjGdJgwCGzt35U2YpuKTwzvj1k584dfKm4",
  "key2": "4dniA5U9oDbyh2uv7PJg7oETRsE7krATPCDPFggHXDMuCmexk87DgV69ceJLf3DJJnCoL8a35w73GsbJf5LKrDgP",
  "key3": "2NF2j5LGnwCwMiXFoUQuDqKKgM96xKtWJzgrpny626aeg5xVUk7uzkQop6zb7NUgtyMBRwRpnemtpX41beZhQGc",
  "key4": "3M9YcAyySftoBhoc2Kcqx1jQXeNnmDcGag8N3uEaCx525oyk1rx7nNDMjAmSFd2yKMKnVktxfjPNfiva5ZNfw9Zp",
  "key5": "2tHhfELR9fALDARMNxUGmkTyZgbz1xwE8QWNJrhffJ8TpSXhjYY5K74n1gTZVhmPFujZZ9daYfLVDYoJAUwuUzX6",
  "key6": "tK75ScnPbWe9Bf5GYfAz47DdEA3xYGv7c3FSAWD2wDMbnzvyThWea9fETUKtAL8BHLMeAvtuAMWPpu8WidthnNC",
  "key7": "3o7auZC9RfRpFhRsKR5crWzvPWnZKh5jMquycmvZCXUzbW3ywtaxWRCwq6J2bmMdKj26HC5yV4vfUpCffhRfTwJE",
  "key8": "3wQdToEsyaaHngzpZ1cpC2tc28ix4L8NxRD1yuiCHCZToVrFC882cMormiCAMfmmE35Uwzp2eFYUZ7QBT4vHkaSU",
  "key9": "4c2VRAQPMZp3NRbjwLQufyrZCFCfDnDgddDPTLzcF3SaVbuRDmDSMnE2kddifjq5oGC5KyHRfEFub4xBYsbCEp2T",
  "key10": "3amr21MGS9BUjGhfguFuvwKnu7o2nRevX7LkRGPSFSHtobpWzeWcN7kisRgnyboCzrZq9D9ifj9tLbFhMM4oopL8",
  "key11": "3WpgwSobFrNYBm8TvFdjgu2VMNzCuESUJ8ZiuHUVMrTK9qP2S8iXgKXGYhSuxPnTUgJoZxFTo6x7pxSc2RVzQp81",
  "key12": "TsMY2Pemuxf3DYdntnVQgKZH3wUrCaoJiePN7MjCGQYbD2G2ymkK3VAiEmJhNSfMAtkbDYKEDHLkkwsZwKYSZ5K",
  "key13": "5BbnLmbCLG4JyeaHMxDsB7imGWvhM98G88cK3MH9hQ9qFtdp95S9YPcKzgXZVCGBFqR6DFYcGiPzAHHGRwZao18V",
  "key14": "aNHHovK21Z5nTgayLVSVT3712LhUWNLLT8UsB6RCvWdEYjPZWdTHDkpBYJNQyPXeYiDGgnnbHTPnaSbYb9RYSnB",
  "key15": "3AdseMTWCpTeGeNGycP4dEsfHeHNAf5PGDKNSMsz42LJjnKA8FEhe2KxPPoVaw4vrrgXFy6KfAq467yPRULYa3ra",
  "key16": "Zhft6diJnpPVhkfkwCnSm4rvEVfXNwRNztz3sipTDscnURBT8kYVZsgAFSY3MwUkyYZF33kZjcXMAq2YVGP9euh",
  "key17": "3wJ9YhbA8zC31bjg5QBTY1y3jmbnz1WP3fhfEEjKSrNHo37MStB5AKKeAuVgXJUBJCwoMxaToxNZGMXWH9co2AnG",
  "key18": "5nCgnsFjVGpWE2ecFr4PT9h9SWKQxzCFJVG2THY691yK9ruZ3pgRv8AFHkB8LeeMma6EY8DWCy9KvmunnZE8ksos",
  "key19": "5Q4Y8kq6ajAguxWNzmjzY1mqW2efoRJtQokrpdkJFHcHWypnqXEXNNVjWr3y4bcMTmcvpTr6ZG2e5W5GEngph1HD",
  "key20": "3f5CeHAFfXYH4eni9EX4dTDWFQtzpCPiidDFW84oek9Le2P59P2yyNWVLxZtkr7VrN28WsMWHDtYTfZ4rGqjenYe",
  "key21": "5C7WTwhxmZZTkvwtnMUGzW2me6Tq9kZbWWBidyFBM4aPEjvq68SARWvuv5VEU95bMcgWZHxNvwJC73nABYPy484o",
  "key22": "2hK41ymhAwep2i2vxsbbjY4YdFnFDC5uPDStqJx6Ae8iE6JjQLiwkup8GMVWoDYyyhJq9gGXUecqS3TdF4AhaD81",
  "key23": "4ppWEeDmjKiWCnMMUgzzqMm9AjS2KeUyV7n98FFHpqtjkUAT3fyqirAhWc6dKzcgciAym4XXyFKdjQPTL5dpcd8T",
  "key24": "4cv5wXzb2q84UP7KunLQk5cLZdNraNQf93GH5hfWN1sYhzxs91mk2A3DobLWVtVSyEJQhzMVXfh6CCscZECRaQwd",
  "key25": "3Fj7Suxo7xcunPoQkAsmqoNjswCS2cGjWQdKTUtdB3WaHq55i1p8ADAXsLxyRY7HbVCtXGTyA7RDN3s1f8vqU2zD",
  "key26": "4Tza5QMedBzs55XyGkNmj4x51YiscoLoN2C9aX6ejYwWabSpbto7xau9eVorgVdZkeJAfuDAhNMjnxjziud7oqec",
  "key27": "4ffwZ4WHrZXwxV4tkRLp6xwwnpNWg1m7beDieQrj5dXomYGApCEff2P7BkH6WRwxFancLF9UvrCGow2ZQcetcvTv",
  "key28": "56HjMPxbPdfbibNR2PkD5R79WHCshFeHNWXTBeJtLG8QGuHdykZd9obq5SdBj6gahofP5KjHXCxnTknqGaR6Atwb",
  "key29": "3R8PWjMEPJi6XTMWemQFLSEckErGVjy1nGP64B9sxBB9KGFk76t3eeYaYTRXT1LcZKMiA8Ft4iRwf1oZaN1Wy8NE",
  "key30": "3pHw6Sm8P6FncBQycnynUD4EGmBeAR1e3j44XzXaJ59qM3AYEJM6ZRnWqrF1dzS8UPmWALpERLB8v68bkRB7WkV4",
  "key31": "5PkcUJ1WXPBu1QM9EUKFctKpL68xboJrpkwUKX5WFKTXYgxS9mZBdnQ9Ycw7Sbzn1cq6aGSqHfiTDFhUQJx1etkR"
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
