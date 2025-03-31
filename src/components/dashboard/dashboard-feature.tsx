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
    "3iFY9tscvnf9twrnUq5qtcxcgbehsNrHoELDyfFqtXTAPSTR35cNsth7752rM3tJbqGK59VuqTs8FJ9WEaMA8KMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a616tSAYNgq63sB4EjRrjcUfLtPyr4rhUYRfNNAFouVq8iesmiQrpzRLHGE4xNPMAY7SW7f3QtGUKea8yNiiF57",
  "key1": "3Ayw8FguN81cPiXXnYHcvFuLaUffGtdc1sx5SSAToY3W4zkpzeJDqKnezA1FBt7cEj7ovAcuVvaXhksMWH6EM2vE",
  "key2": "3r9tXYupGSsEkCZ66orpGYdPQ5fiWdxikMJUgBneVzsBEw7t6bZoR3DKGeCiCPPZdpZ6YcFEhzpG4cwBL5Nywhs2",
  "key3": "hQmvnjwoPvoPiUMSKjhoEKDEXfUAsseGhfHFarGQuMhJxFF8XoHAr7Mo22CJH3sMUuTCwpcxpPERoyc3EEJLUXh",
  "key4": "4fpFC2kpLSM7FnJrDmQAq4gjUZpJNtNh5sJ9y49uEDEmKmp9UVvF7Y9cizCqyGUjBh3csv7ScP2QH34AFf9pfvKg",
  "key5": "4MwwizwnYDpuWHgPzJ35jfke4MYkukJUjHoeSx6kupnJ3BvpZDLJbs6F6Vex94StBfgAXpqYTq991Cp1W1ve4mqd",
  "key6": "5QTA9YMgJUcYCrqnPac14iKNcsUcwrYch4ZUtPWFcJtkuLN9Ct5myByMs3mCyvk4vE298aKSkexKz34m5UF3azF4",
  "key7": "MfvQ6Py6iMa2fbBgfrTW7dRjsw3BPKbTF8im8P68Q3tpUugKwCYxW8G3oY7WR3MEgeivct9d1zaDEco8BGPHEPz",
  "key8": "ywdVjQmBnXAwDMt4C4z7SkBGjoxdG98WCJb74n5gmHqpucTkoAucMfss5SJxjXn1rHnYC7pPkjgRtTTixtgvFww",
  "key9": "3eHjgnAanF6bfgwi3qKSMpKT3DsJQopyCJYX5SDGE6TxQMV9n2XNWiSCDSiFfKCYLYUbuYRpsBEc8qPSCsLrBENM",
  "key10": "2gvJbr1PZ7SBp2w8pAHj61ALBMVbKxpP437emLWDHc9aGaVAcKfHhjjbs9N6NTAUftiD1LiZUWhdCyMiM94xPQjX",
  "key11": "3dzfRzaru2iAzp1eU1Y8eR82BB7pF536Az8SqMa4VPrh2ioKebJScqG4GEoF9kbJNyNvXaut8AZ5H8tsyCBaHcSx",
  "key12": "5rnvgDSfmhMGq4U2UVMamC7Sqjyk23SH8N98dtKYCosmj7Z6SrBPgXpA658KYWFeDmxAKgBomV7em37qjGwKKxGD",
  "key13": "5s839UJXUym7yhxvy6iJ6c1cS3aTtPTLsCDSstjL2TvR23TaAP48mxP5aKnZHbmECfqoXKRm5gAc9wfGioac78U6",
  "key14": "5CZQmozWc5Hbti6yMTdumoF9itTG6CZXNUfzYZ9pVjq51zUQ7AuX1Sn533Nw9LE2Q9bBjBq6wi7eaRnmPSDNR7ha",
  "key15": "53qwETokHgA8MCdqEK9bM9npRPpaF4H1JYj8JCVpndr2D4BXkZtkGpFoN5Wxdw9WUBYrjFMBEEHxuM1pmS7WY2kb",
  "key16": "5VhhLpCkazhRtjM37U89r1ZYJv5G4psRjUbD6S6aMnVpEEhpf5XMYZcxzZ1y71qZiEQNvPVMpZQTNucTVyQWbRVJ",
  "key17": "4tpqb3yBBZ1jksEgGobSFeee9i82g4Td2Eh7WVJN5ay8byzHmXpysb7K8kvQnaM5P9mEWAgpVjh56aWqGs4LU7s5",
  "key18": "2d3xPL7EKPQP3ZHWkjrAnbjiojGRJpcUA7HUrRQTy2Abb2GzXEkD6pSY1toQbuAnnv2JBqq1SMc4nK6EKCZfyup9",
  "key19": "23qqDZgeFhryCDRQoNzyJKf75NiobUeMieTnh2nJdw4a8sjyBbM772bRvEfnWnBdqJrkLs1Btt5vL47fafQ1ojtD",
  "key20": "2j79FmkLLSvjDmvgRwSXdXEDv8Wk8U4ByKsSjngBwPcLWLfXfGjcWGwco7LQCGwrdPjqeeTjmWpiDrV9ZybZSADD",
  "key21": "2nYMTUMnzwE81nmRgDwJgWZMAr5yAcjZwe7EnpTBFU75S4PRNuTRyWRFvpPfzRT9HaEKcGj1Y5Rn3y9HEXcZmQDx",
  "key22": "N4J1ZmqGL73gW5Gt2jWSqXus3wutDT8Cwb5PJ2zMsJpmVi6psurbhnSetKyDd6aL1V2avXXEfJcd5ezc5rdZZ8f",
  "key23": "3mkaknExXADbcdURoQ6wEnqaHNX7LoP3Sswmd2FQn1fAUzgotKPNRPoeQWwJgRHJVkHA3EoxM7pr8mH7JDzESyyn",
  "key24": "54doEcLovqbk4HSbMpt2Wt5xQ2tuweVuRDHhKR7dTa7wHDvdQ9pF9zZfYk7Vb3HQuXYU3sr62aaAtNfh3GMP4Jev",
  "key25": "sfdZJcPHTcxPoQD6xjNYQxMy5vTxsATqfxJ3CNwkteBC1n3B2jnu3F8prZoCg21TEGPPf3A9Qfq7nWUF6HUSiWC",
  "key26": "nktK4CRYoj1Fqty1fTUA21H3MaMQgVWA2jBR9uHb5xdAjVw2aeGw4K2JSc2HgqyXh6KYmguTTxGdkdfMdU2Y7wG",
  "key27": "4A2VDLJ9Vy3FDqdvHBi3B3X1N59QmbndhQv9DkDAsvepfhC1xjy37WtDEiCnzqhCPiBDc9HqArAzuKiqB1i365YY",
  "key28": "5VpZ2J7aNbM2jnRbWebHPbSUZ141zHDUTzFZrf16ML7NUYSMhLviCMNa6B5MEjjfhPGmtd4h2jo66pAj7smZ6WUW",
  "key29": "41E7gs5QgdpTr6Kwuyq4RWFksHaMCgBJVUqFHhFii2bPLu5s15qC3dhgGRLB5GkXzXePVxvwrGthyN4hNWh5Kxdg"
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
