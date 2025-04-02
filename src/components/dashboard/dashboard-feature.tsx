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
    "zNUddyWgnbJQ3uxC52RgCR1bgkqQvM3ZV2pKmdLCrwQFxrW2PU8q4StP29o12mKQrc3yBF3hrKkcDhHQp5w38LZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52YGeifbKiV5cofejHM9VQwYdWcTTGMCmH6sCxncwdSfYnbG6VjCiqwNVswBMkEAbkK4n5yaHsoEPDPWowwza7kb",
  "key1": "2b5SY9RFXtCfFuavKqiPyRGW7bcGZxYjmd2j92M5EEgRw21bbsLfjqrBMCPSQSg8FNwVsxn9yAccf6QEoUihY2Ds",
  "key2": "53w91Fw3H6Vcff1BGBxHwiBvuZSKZPhPTDGqfXq33RUbUApvn26jtwXzgSFuGNpgzu1R1X524qCMJNFX6rjKLSeE",
  "key3": "4dPQCZTDSJFTuWNDkjCYP6QfkjnWQ4MXMVnJnaqpqgZC53jG7UHRwsGzLPoqC9NW8qfuGpXA59nJqy9KE9JSrVjz",
  "key4": "3jCe9A6hyL3Z3fLotsZEwb5yMcA1gSRCuZ1itdmGKjq4zGMU7M5zddNUe3FAgyYbdQXPnJW2UHxEc4UZFbfyZtML",
  "key5": "563AshvTV5TYiUZmFRfsNbAbBpR1KzFuxdMtwjhpo3p5n5v35eA68XpUZuR93hPK57SjJ4rUZpAYyE9LDE13FrYs",
  "key6": "Kafui1AMGY2zAKLBLVzoVbfbDB96GVJPBhd2UADKWFGggzP7sanarG1BrewuzBgJoQFZ7fAwXkEUzJt8kCW31EP",
  "key7": "3ScaDYbxos9gNPdeGPHxMaVcLJiYt3GK1a8QCgGA9umn4kVkG2b41hPCNeRGMQros2s5qJQpMAmBuyBtoUWHeJN3",
  "key8": "5BCtQ7qFvthxKe7u3BKUCJPoyA5Hqm6mPafM4SUF1Cvxfo441bdPrZHvDkz42GBPwWQWH7iDMKyt5EkfZe7z2nQu",
  "key9": "3ouVNQr8RcNrSjaz4v2Z2RRC5VEZQ9emyu6eZfUtU5GH771H1po4WVjhMLv8FE5KTTUzuocnXPgi8vFyWb5Tc4DN",
  "key10": "3SuvSkieMQd8LXyfJrLfRwppUwXKFXohd4Li4cxL13JnCU93eDCZAh6mAMUHQEWHBn2azuJC2EQabQtW7n1Jp8L2",
  "key11": "avAg2QS8TyTLkWrNyJC7z4mexmiqb4wGhiynZRAijSoJDg8vgWDm9SZAeHRRvJfZY68ec6Sm1WEbD9wEXfVg1UZ",
  "key12": "554iSLjnd6RjqHLsZrMbcwNe6Ejh6uGkzeUEmVB5YrLi6iC2KfwsbfpFzuj6wuySh1icf3SVgDQhmFApg4iPveR4",
  "key13": "2cS2XyBhd2DM5puq5zEVrnTNfnoCLwaMNYhQ6ihqmDaPyDx6DE5vJrKsYve5rTdkYALS4TUriTeGwGESXr3CfKCC",
  "key14": "b3Z2yRaUV5H21Wc66eX8G63uhchzwtBo2DUTsGaiVfCW1Cvu37jMKy6eVKbk77K9S38MxtyRbW37uxnycQpxhia",
  "key15": "2NfakMv29x6S8eUpKu4WP8U4LKHdK893FJrLofH3zvdubHG8YaR9oiNZQGhtn85twUfAfCEc5cobX5yBFqCXRsgR",
  "key16": "knD3mYzq8xvQkaanRDcfZbyhRVw8A6gVHria8qZBoWXbJxyzy41DdLt93MtdFtn6W3LzExMtWuaxr97CkSjUHrd",
  "key17": "2M6q1NQpTz4575EZ1kYRKuyi4YY2GpFNyqhM5i6Zq6JuKuRke19kiqBtZVtCXEwLVvo7f5eUmEwCG1oQE9AHRcV9",
  "key18": "2PRqwVSXx2PLXLPsWxCucVPSeQigjesbnF4qgKCYLUJ1Bv8RiXFLjZpFHuFS8CVF87kSdQvmxUBdvoNWkEoWMfEt",
  "key19": "4wB5CVu5pSgm27AvwwGDbQck2ofQ1JS57Pu5KDuf47RzoqPLzayFF5uhvMzBdFimkHMAND7pkU823Cmb1RK5iAzJ",
  "key20": "3cBtAySjwnDtG11vYaFCMFp6KdBVy9bwuPwU1vyxUY35kUBXCU858tUGaMnbQFwwJhgzmJYmk5BxMi4EVf1579Wo",
  "key21": "dpE6MZeELGvCCTCymDppUzzDVeuGx9gjHxdMdun2dNweRN3hwDaRQYGHKVnnSqqD7knBMJbRVqQAZDdKnUxBTgb",
  "key22": "MRf8nwixDQqrogFRSXgc6z1uQtzWJLakQeAJTMcDNSBmSi4eKJQuqVRijRTtDNdKFCpRWyPLboVGtNqamnDwX72",
  "key23": "3orkmoETodBRe7nNrUfHYXNwb72jPDVngMQXnj5RcHMnxidKBEkC7F6sfJSQ3Ah9oMg7G9mn18nAy3VzZuUgxAsk",
  "key24": "57NVxQ754src8RV5h1AHjtduLF53mLrfNE8BuuLdgCFidGvCFkKJb8RFCBnadUECBQZsw7tMwPdkzJXTAfSxN8U2",
  "key25": "2zsV9Nf72T1ee3XBPzXGEZgK2fdKbPqidLF9abxvJ2MapsQHB4Tpav17mLW3FhpRikkRzc8nJ9akJUQNo8Nt9d37",
  "key26": "4qh6jvU7w7sbtmHrKCkqVAtBGEBQ1UD9EtnkKsbUtE6Q5ETxqNd62MymN9rFfRT6hNoPrZLYVXi9NK64aCDmDyLq",
  "key27": "32DzpTXr1kgcnrMKpmWG9LEpceBxcHZbiWHmeBYmebhgTQmHbPC7i7f1jDKH3QeuojdT8LN6kQdnU6HnEMx8qfrx",
  "key28": "4ogPScvU5ya8sZsuqCuY61QNfcVt1oz27EgPjz7wdF9WG9pL2kaw41XuDVRiVdWdHQwybX59aDX5nD1rDaEHWquq",
  "key29": "3JT69sjdV7Uhso34UwANsVf8G2jzobhoppv5Rz6U91U1RzUBq4mu8YxoSqfgKcaueRBaz84TAseF2Dm2qaVt1Tuy",
  "key30": "3F2RrenMGtdqqhyM4zNypBNTRwYsdaLysV4SBZvpJSrzVhje4u8pDFXABTa4aAdFH8sZrmiqu4GD9u9i2e7hfgha",
  "key31": "3Q5qY4SNFft3uZYws7KC1R8D8RCkvRa2aq3owLZnoQK83wZwGrymTGdA1b8stkC5xr7Ana545TB6AeeSvncr2z39",
  "key32": "48BDxrcMQF9pyke2Tzr9XU2nCbmCrsyQp8XHz9sant5xGyB61p3xiYZ62ntUjLpK1ErXEGHauSFbmG7k1KWGD8sm",
  "key33": "464t19tRWdbA6QBTByRA7varqsvbj2zfJe86nZsVJRdGgjMM59b5ATRCNipvdPpGoiwQK97uj5uQTfd8bJsTnuMx",
  "key34": "3RfczQyEmYPX66Ersc86hYdyDxwiYZNbZtsdTBs4rbPnLu8AbLxsRiU2hTva5q7VqEDGDUKhGP8wnCm9dt6a87LL"
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
