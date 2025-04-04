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
    "5oDqh3WMgHF7gFRW5HwL9VCB9acqVGX89jWqyBbbAbFeDPqBT3iwrShG2JEu2AjuadDXT1KADyUX9sQNbvNEaaDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cTV7eBfEZVyzhryfwiksNcbqVmX3EXnpQb8N3gSpB1adm3NQB8j6PEXzNrzGSQ3vdUrormGmMkrFAz3oHDNKL9W",
  "key1": "3EW8Cj553MzczpUkB7ptfwtUceWqJVGTyDdTYa37qKrGqFZMQYdYsGMzYk17V3ePFXZtgdLyL6Z6vMeW8vVz4sz3",
  "key2": "3SYxyMiTDss5YQF9KNEuBELPGKvyL3egfp9yydqn51h84yWDByHg7jqUMgi179SoUK4HRrb1VdGtpJdiXnADjw9K",
  "key3": "5Dv2Hn9gfppDVQM9hXjwdEs7FXwXKcQMLN5k2iAjDjaVBsgoKZdpvKaiy4FhHHgiDMDnCn6HATDsnorZTbzuGnp8",
  "key4": "4Dr9jZxicvGpT996EgicxUSPWzGnFAsMSmmEdWF2UdmcJAfxStCM7MQSKqizqUKwGT6iZpj3uNfRBraL1zuTWQ4j",
  "key5": "3Vkj67WVfWzNLQXyvW6qFws2GV5aWGbexwGfYj17iKVnWPdmKG71A2BbVmGeA9Emscar4YRHgHanAv3CQzNb6X8J",
  "key6": "5PrhQWtMMFG7Pvaf4vaYboeE6jr3ziAadbrMcYgKBUEBEBRpTDdNDHWF6jBJhWJftgg8V4j4cX7t6ggLMvi8Tj1u",
  "key7": "3w5FhFDqYeGRbbAPTEMai2trvZT5YSUc6H1afrFttmoonp2PFds6jmEvu58Gha5eA933pdsmbC1jb2UDtrPWU36z",
  "key8": "5z5mW2ygjJTUiL1mKRGL2HHowctVMeeY618ijSmkZNHz6ZBaojCWZsAaZRW1jGwuhQPH9MXLKWDkpyuju87ug4QB",
  "key9": "3h3V8XhHK7cUEeMSzzoXGaydBG5D7Fd1tsGYnVrqmFVGT7KvbLiPdWkyzZRhj4ax5d8dpQ6SESZEAVUQLfAJw5Ch",
  "key10": "zD3NsvzjrVVduk2rkHpQmQBiEn2uZjV2zcwQZAYYSzUUYZR8Kw7o8ji5qotDehtD2TbmKFYoa9EuwX44Nmp8sHc",
  "key11": "UU12m4vWjdPXrYUnRDveWCw4Jo3QwHRHbai7eLFwWc9zvEv3azuiD2riwHHEmGVi1hpNMEatwpMkBgsdVuDRRko",
  "key12": "5eFszt55Ly5BVMVR21SEgAKtD9XqsL6NiMieRM3Vr4hT8nHWCrBCAzWsaUN5kGQv1LTVmjZ122h8cgthtC3F4tt7",
  "key13": "4zsTMPy6MG8nANX47NnCjt9Y9J4JiPxmVSdRBy4ZLmmkhBrGSkuBFTiLJ9AykvbGg8trztwK6XRcoqYB4jo5gaFa",
  "key14": "47gnFgspbqoYii8oXgjkmMUUrkBWAzwd2aEmywsegX2J4SEMZ2gDecPLeEpJipSBZhAE47pozeFA5qMQJsmrNC5q",
  "key15": "jDUGiARQdf7sohf2bj6ofvhH8cBHt4RDRwKRTyJ3vzzEuDpouuhm6Yh55kopvPALb1DqvQxdBJeZbtJP3Qz42RS",
  "key16": "4GncHtuARkmrf2joCaE6PRdWPeUdvQiWKVrfThm8crEm9ZWQ7Sky5FQKPoYV6tCQJu8fVwCYrBeZH2Q269eR52TG",
  "key17": "2zgmmcdaayDK3pUxyUf8Uq1ARY8VDaouwLvQa8EwxNKTWeYpJzQLTLdnvTBWUffqWj1qt4jCVRp2kU81PaMPaYSJ",
  "key18": "2DB8EqVYeZpx488Bo81smPCozEC2fm3BZZ6TzGdiKkDmAPppRC2mgYgcpknVYEKbdVoRKRgTjbVDPZd9QEEqRNid",
  "key19": "5Y13YVEJ2XyRDko67fk6tKkYS5BfePu4LNEdqWN7X52ComwDntaMMNQkGPW6ptSx6wtfkgd77vz8kBGL6ujJrFvU",
  "key20": "292Bj8LcWQ75apez4p5Uzz748HBniHVJ272fPK9YpHRZG7gpkegKyfqndSWQ8GVr2bahZwYZft8ExbBXKVd4Ltdq",
  "key21": "4rZuU3CQxQkjdTWdBtfti5x14mH9spY89zqXKRYFzwT4iAfkwfPqWG3X97SrDmPSdEvYBFGUFdiRBqVXCwf8GLcn",
  "key22": "pnKGRZWgZHR9KTYJfHPPcLGyrPFE2sPToPp8bWg95WDoRwr6xecPMTYKv3KeSnxuPbo8kdHA4KWZrh9Kjpge9kv",
  "key23": "5sCzgY3dRNqZCoDFLfDwUzyMMHdDzKw7t1hkwq451ZZ8CeieQ6VA97YBRQ9hsviKyN1vsstv8zq4FLtVVWsyomPu",
  "key24": "BMtUJekwX36izFrcj7jEaCCrLvgbg8tH2fpPYnWhSmbgptwr12YEAfXUZ17pGYxbczY5o2K5aiqz14LNHhWjKPY",
  "key25": "4JXq7m5pmeQ3xdm62qKTftnPULVG88S7BPAX26AtNDuM2zCg9rhaMdpW7sXJUMHLBQiMRLTo5y5hhJkdHbZk2QBT",
  "key26": "368iLh5s6s9sRMxgFu5QDBcunajzL5kVCQ1d8a4L1xpT4qSze2pM1HW9c2oqjT3v1wHBYZTfug38wKVy5aQGZh9f",
  "key27": "52BnVaozXEibqVKa1Q5LGJTYgKskAKd4gFKVSxeHKcuJbaTMEFoonQWAmR2pk3R6cjQpu7aj248pw1ont4vnkiNJ",
  "key28": "233sGDrJUBkM1JzM1Qi9HxDVeg25doH9oYnLMeT47hzDXMPApLAvaGw1GNUSD9GzPbCninc7NHs8z7qxUfKZbGMP",
  "key29": "3bpduUYyCrqmHguCiasqY6Rfy9Z6RMPx2cR1ogAPsQCnaAGC3SSoK5iQ2JwG3dbAMmNW4yVNYAKMG35g6DoLpEKQ",
  "key30": "4yf2LhFwZBisb5mSsSPMnZfQr9o22uVNcMqvRpeqC2kGJGz3XeFU8ikgA32wPY45gXz8cBhfkHMvs9HjJbu4kE6c"
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
