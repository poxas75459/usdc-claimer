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
    "2ocKZyL7cDQHnUuRWNpiaFSVBWQ9ne8RdMkPVjQz57REvxQJ333D9KHVSsQVNws8zAy6432W1FrkY3aqk7goTGUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AMrJq2Pp8tNgZSXJ8unK7WH5FuHj2ManRLE1JwWmUaujot8krfDMwaTmhRHnqtv5Vzsf2n1qiMYX7nm7DFv17fL",
  "key1": "3LCXsivKdF4ak9zvomyQJ1nGwQjZhCrDGr6mdCjAXwdxgWC4mQ9LhXBy6AHbxfdzQouQXttzefNvb6wsE9H74NsT",
  "key2": "5o3dDY4F88JLSn14GipsUa3ki2zq4E3F6SeXSDrt3Nx7ShtpBQ1GzRkuRY4iit9KQV64GkZGcp9R4qr1KKCxyn9z",
  "key3": "Ukrdz1PSnmw8oxmkKQshrzbLQgi2i8F8aST6FmVzjKKukXQd53peiAd1jnhmzTxBjCMWp2ptTFAkmXsuAd2DUNY",
  "key4": "Xt1VnAdcFEky4FBWwaCVY4WB7Dpd6jBBE1uZ2T4ewCgWUo5DWzrSuiyt1fjA4pvwX7UaFDkFtt3z2JHv52m5suY",
  "key5": "4A3zXPbVzVrRVZemHENUXGkpM88rj3H7pKLf4j98FdZN8S3GKtMMZonKYmfTFn6RB4yPokyjQbv1NWXAQCwGnMaR",
  "key6": "5zAkda48dMnfkQWY9LyxgYkPbCKjmUnUcqKWjuGVYxNCKBVwUUYhn6E1Z9c1xSv2teduUCE8ruW4EvUc1eoFzheG",
  "key7": "2G4FAXaEauqgPYeqxotGuWqMU5JRSczaguTxKLmP6pS6mjJjdgsPgfDUxzAf5JPh3ZWQT9wRuF5rNYN7sGRsecyp",
  "key8": "MMaFPohtatqVisaSMncnGkn4wanvM8nUPnqS89fZwRC1Cn9RZ2VgKCgwYS3pezZxAXyVAV3edqqe1y5CD6iAina",
  "key9": "5xY53BofThuU6FJ2wdS4cXCsmrhmmcRLPjw2zF5Bw6dHuuRDzcGgU1FPhauMK2QA56WYEnqpsdFxANnS89hH6Wa8",
  "key10": "62Ve7Akde8FeWsk6C8xUMkTn54vav5hRqJk8yiDXHcb4CA2jDJVmtDzPjyKqkn6s2MyDkpfwfq7NiSJyYMMdvvKa",
  "key11": "PSJT9N6s9Ut8w64jZ3jscKDKH4H2S9XChJx167XfMcXeL4pGZy77y4dkCPuYRjmDf4Tiup41FMiNRMjBcFKbRnt",
  "key12": "624QBFNZ3gKcA66HTSvLCYDjH198MJgk1b9pm6HnR5j3JEjUnFD9N7emwLJUPSAKfNQRZaeCD2kdE5U8UAYgiTMj",
  "key13": "3vFT2vhpfTFfNMpEhrWkAB31VCGAvp4XPuvSGUAW1oQ9r6ugwvbCdLhjm7cnmietrspVCaZSGv6LSZ6NaSpVT1KL",
  "key14": "2wJ1gYvRPxDMEtSydkNoKaQjM26bbUX8WQTwNcofzAJkBzX34rCJ7JgR6mmwSB1HRbZXZtBScqxsWqNiFjMzvjbR",
  "key15": "3WeMPJe2msCGwvezYSbXyPKTEwJjVY6TQxKA635zpDAHptZH4NswbYaYAwR1t1XeyQ8Ui2UzNDjZmvC3VNWHouXS",
  "key16": "5dxLzq7c79zpXLgP3zACxQpZk6gEHWHMnzu2Mb9EeiUxsTCupf9vfTkz1C4EYKiJJYtrCfgaaGDZoAdD9SdZYbWA",
  "key17": "5pihr1U16RqoWDi22x4nFpXNzUnkmt3L7Ld44uSXMh4yqavYru7EeVX6nFK81C7SDtcrRoTLqfHdtMQDdUBe1g96",
  "key18": "47dKK61MTZ8pQHyx9wMPc15BSE7sTwMNY7fpZeWSEueT2hVb73AigGJY6cBtAmgitfJqFQybBC2qk7oNRCoV7Snh",
  "key19": "2FNGxNvWXrsQt19aq8YttXHZPVZWvJv1NV7xcibymbWgq8Jiqd8mpfLHLJ5TZ81EM9Nd2QmdaJ8EL7KHwmBNz5re",
  "key20": "9wjvNjWAUL1NuDe1mvr4yeeyMoAA1KUKNh8pTzgQMyjznUUEJLoR2mbQujX5jEtboAG9ctQmtT6WhBPURfgGB6H",
  "key21": "2BFc6m6NDkmo7wdyprgpXGWAciaAThgavtXoJ82gfuf76a6o29YFs7xK3EDXAcpaPkJQ12EZLHZYdLehYs1zzon7",
  "key22": "4PaNBrSfEE54QMYjmHQc5emsycv9vavG6pvn3qPhior58R3g5hbLe1imsxNkJrpJ17FPAJEaJfMx8n2pHmRahFh",
  "key23": "gaNZnY3T7J4LnjyLcq2S3eewQ3z6vDGWn2wHhjCEoNPYjqndvhg2LNHPA5qZSXoaXCkg1FSZQSgUHoujiHrBZqM",
  "key24": "2AaKbNmCXdujzi3wc6BYZBdfRMKdFppoEWkPVL4RPaPwAtcFGvt9rFkRJUPrbNMm5WZ5aRsad5S1dJEy3iBcsUiy"
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
