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
    "4PfBDboNy5rAh2TTGnrXQC1ZbUJYkBmtHrTEwtr6BV4GbWDVVFRwyhEYjZVwpgMNoNm9B9aoAh1BVgRivY94SfAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oBj73rYnanym6X3u7zPKUt3p2pFTfePUQCBR7ALxwdmfLPi3TuLnqcJErKGixE4q6AaSpQ7vJPctn99nvy5YcNA",
  "key1": "PxmTui975nYBLXm2XtJYDrDkGP72ENo5YYVAWDuT3pmrgF2CK7Mg5x23mB4ofDW6fqE9CXwG34b7GqsbBWQtcyj",
  "key2": "4NC5w7E1T2NycwLKsHRBxCWqwTacH5HJzN42wLquWHSMoYpmXX6manRv7sdfiYiVS2Fu9i4CJbEFYR52t1JDCppA",
  "key3": "5dC5X8S7M6c45j1nB47TpKfZR9CJF35XhYxu2CMNLVCpng5ZT43u6aSXrLTaXqkfU2a77vvUSq3KCzq1EA7wTUJ7",
  "key4": "5eYJxhtZRofkKwSiatzpL5D8LWNrTbgrDnuCvVf1QAXYvjXX2VoKx6cHQ14BcqCLSAAo7EvjVfHzUJ25CajcCVP7",
  "key5": "4eZEE7njaBmrZeadWpLxg3YFAScsP2jVLGH13K5yK6R3TbdcyD5QNeu6KNFbfEmWLxf6i63JLL7DWN19u7vHaVfu",
  "key6": "2YuCtarBF8TvZuyy4pxjBG6wQvrrUasr5Ewcgahof14JUvbSuowpDiDT87m2L7yYu3bnhaV8Fm1UbVEew9hHAcQU",
  "key7": "635iDBj237oyXKcTWwkXk6LND4sqT4BS1bib2yPqyM5d9tvYX13HMQjXbwQBezGm5YRHNtzroCCLDmNzGXwaXzCt",
  "key8": "4swv1rEZm9RL7fr3fx323cvdeT6sFBq9G4drmMLCmczGHALeKZRmPrdGfjppRsn8nJVbEsggzMraFLetcjY22E74",
  "key9": "4bE2c9AHzHLSAC44BEwfzFVcTSPzYBBoU4EHe9DGDNgSJrS3ucaGxvYb7EvCgFwuBF1AaDxe8XUWWCdJPV9WCwP9",
  "key10": "kJo77y7Wo5WhGniNaWeihHRBYFookED7xFvKCJpJGQVXDWS2Mii3jbYUyWfNMT8causs4xLumkGwJzm5ZgfhRbj",
  "key11": "bhpNWBmEocb2GbizoEYDeLTB7THjXtTrgnCd2zJJbSkx5xGKArojozXd1XxTsXCxr2ZBJkh6V7VyKf6i9AppbQD",
  "key12": "2XE5JHrTBeCNitij9VikHKongescuzVB2cyVvPR9hHa4ZxLvJrKRLbErc6baug35AFXENYAKkjJJDrQPXi9UaPne",
  "key13": "49bkE3LD9XRnodptz9AbmDH3EB3krPQfctYXztC3VoidCDUCqHQpZgyKFMkgnayD2Xxfw16feEaCSnjWLANdoUR3",
  "key14": "5dx3trvDNZ448FfAXQyHydbeR4AqHgHYmrQm5DekC6CPvRfR5CLkURc6Qbm5G9S73TzB1vxpxBJQuF1QqqwVwo92",
  "key15": "3JugR4FRvuNhx6QAHqfoTBbUtQxQDuVjV35oWtvYmfNjDidBwhyCFB51dHZ8Cj56nreYNMcKEBZT17WWYhT5r8Yq",
  "key16": "5bUTG5SADNE8Z7WmFGrKy2tPas3kYQLKkri49RePTgYCDACn48sYwDmqndUf6koBMjQPqUaenHwoN398Fatp7q3n",
  "key17": "29rUUxbJ7QoA2ydE3414aV1uxEtZBWXon9G6rJgcWG1BDCiejZf9LX3o7rdpv5xamkf1JsXzxxsGVprdtDdRZLYA",
  "key18": "4twR388MtVK5spP8YW3HcAor1CGKo3u9pbwrrGFuPqbGKw39EkcUYmqbajKSofVBvEjZ4n3i43TGLUUnihdgVEdp",
  "key19": "23mZnPzMczXAFyaGrXBuEAeUj7avFTcGmK7NqjiAxMEX8TpBYarkSAuqWhhgoxURXPZZvxZsZ6FoaGh34kG5ThHn",
  "key20": "3tvXeyg8LPRH3bTB5zDchwcGWDZURR4smtCRwoigiKbSRpeFhQ49BN3HsX1hyyNWY7HvvBMRhXTsXZYohM86ty8Q",
  "key21": "rntekP6mUYCGrcb2t2ksuGAnuFa98g9wmyaCwJKd7utP8wh2ZaoY2Yjj3Gw3ura5VhnSxLfEa723DhAXSRW1Vyh",
  "key22": "3aY4NKsSq7FkFqcPXFSEBAUKF7LHQicBHerkfB2fwGnT1UU1LmrRgibBuEXu9c4FbT28wZMcFnSLHXEwWwHCyNo3",
  "key23": "6565e78hNFfSkwNBUFm6zbD8fjXY8ShgHXkMvLysHtQHrstvgAbrj2gmi73hmwnfmikheiXfAzUovTjY1XcEKyjy",
  "key24": "4MoFVxA4QLLBdetSXu4wBG3nFKDwXdiwGiN5iCWtvibANxBjPH6pCS26zEpNz1jp5MbPt51FPWeNpXyieegtntsJ",
  "key25": "3z6fJmwJGtuZutcTnBAxX5qg8SRX8G8UKzADwGyN3doMMmi7zmPrrSxfSLHT9jWHEP38heRCDRedeBSKYbqs9ZqU",
  "key26": "9cq4woJ2ZmiHtNVjZ3uFkovcCpYrbB9KMM5XjmZqmpRFpywAMNfN2aQ6jq1pyiznqP2hbSmNHuCtCoMJ5L1upCC",
  "key27": "2aTE15VHsd5Dfr5B5LGBY4AVijcaMt14e68m5GJZXDqWHAiQ21EoAPTM32FUt2LNtTJe1okGc1D6fwJR7gjpvUPS",
  "key28": "4EztfuKFFiF2vqY491UDYbg1k92H1TdKmzzEu56zddGaKudZJMTismhkhcpkBGhxinFPeKbTukWt57zqxRG6KMX3",
  "key29": "ZgByDLS8uo21Spe8SKgiA8mtYZYpBASb6XiC5y8qppzVZ7jTuhGKsVzixGRB6g1T4weCaDAzo9nBC9tWPdKtSHS",
  "key30": "2gmfGmrBFxJTzxFY4gk68wVD6sETSHcTGuRe7VvFScZKVctoQCHSvMGoJozephrMGcR9tKcwEXxRgZ9qUakrdDUi",
  "key31": "2Jj6DVbpxtgKaVxi1XrBZh8tzfDuQojfF5iJkYjaPdpSi6Nbawo59aiic8PSEYtnx57ruCaWGamZYMkQyhXG526H",
  "key32": "sF9GeGV18oiqx3kP4KXg1RKM5BK8Fa8RRuq3qfViqQcMLEbG8KQoy2a7c4UxMwxgPTcb446MUvPQxpBTGvqwdtg",
  "key33": "2XteyTroh7VKb5DqVRMpGEQU7NW178zqRXCVqfcynbFxHsTgSoEogncFC3qxtQxmZ1rJuhx3FGTHomKXCQgUmfpe",
  "key34": "2ucq7gqQ2gasixipnfXzHvfDuTkUTXr1p6FezX8Nd24cHrf8ij1knoYy6CqAiR96RpCkLSD9hHmbZWvSZ39VrNi"
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
