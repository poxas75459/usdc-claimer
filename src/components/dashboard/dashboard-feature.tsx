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
    "2XKZioXqLgEPN22VBS8apxTsQWgiF8mAJYd9VYBWRM6jwR2kh4ftcLwMGw65KEtvid1G845mzTpRkdYvNPPT2ZnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ocwXxzugqEHz8W9rt5SvL5rt31ToTM5U88fuCYyA6cJRxsGzFwBv6L4WUEZjCWN2jaEepQB6MZm4CXBG9NEDrjC",
  "key1": "3ppf93mG9aqpfJF3H7wv349ZmhhA8P6WLBSXFiWnXPRUVPj99u4GSkQKMkwpPjJyr5H55JFbcXnpZCkfswuNv2VA",
  "key2": "2nHqLz9GGsHT6Sdt4djVYqHmLcq54NEucGdUnpFJEHntEz8L8978u6NBaFctm1DCRAcaiof96jEfyxSBBp8s2tGo",
  "key3": "5qiTfMhzFSWJrAz2DEjGC4MQ5zGj28vbQv6HXWAEmR1BLrQqPGNhdDXoqmKUHQmVmgmTeGD1F7hsqSBtzry1EJF3",
  "key4": "4Wg8Bfta6iqFsnQqE25cSm28fo32N5B7efFBx19GCstB1rGkqxvhnf3ioTsSvSky2EWszEX6CJZwQpLqdnBByWKD",
  "key5": "3nuED1uYe5mzergMeqpUC7fNQd14MJtBa2MaBs5SYbro4uFPucXnAujr7y5JVKaRpTVrnSsWYVMS8dXHgUbfhGE8",
  "key6": "3nHAbp6YgwitcWw99ufzSXU1zk59v5A3qREjRXsou35AeSZy3xRPtPrtzgDGDgcktVFrCER7nyczPJHU61hMy7ka",
  "key7": "5jZh8ryq88o2xYR8CGAAbR7nM6f8YuWYpHiyD1gouCp9bQhQ7qXtSNmgXCrEV4U8frMaPfnAyfXDsrZXDW9ZkYFw",
  "key8": "3Kf22syVMhqn3477cKDxuqoQDDr24QZNRuvh3MzvMCHNTSyXLnrySx9eefL28hXzXn19VinewpCbDUS5Ctc5JM4q",
  "key9": "pqGaVeUUcezEvFKwg8DLcaFBoZ4nsk8LYxoNkBXpehBcXXVX538iS6LDXQF8xiZmocrGYm9skiK5L8FbrJ6axwU",
  "key10": "2Ciq9eAPCgVwJsqYPs939ia6hPjAuMRxZp9fzHvBEoRbGFCn3qtg6TPQ5y63HgpoMtEuvcegJgAi4eJwBMFWyjhY",
  "key11": "wkrbT43CwmJvWtKurxWLQ4aUJvyefZN6ZpoPUkLFLD5ViSHK1CGoW6kLkZv6VgqTn9UgDMGQAFyPyNehSYo8z6E",
  "key12": "xBzR5c4mjRsAdFNuiukGh9Y6tPJWMYJzunXNCHNjmmYX1wxYEmSWLV22fVRfV7qT9joCbvuYYACgMTHTHZJMbCV",
  "key13": "4JBbPu9Ymx6aKEoWEBczkazS1J6UShWGarnr346gfpSJwDEj6n2v9BA9PyxhfyoeAg9LvCh4esQbdPztrr5goMed",
  "key14": "3NATye2yXhHQUVr4Wt5RX4briupmmvaCKQWFxpREJ2TZmstvgPtVaAvSpjeqGW3MMJEEg3dyEKwMtBFXrgtvohAz",
  "key15": "4HsjFdnVjE9GcFPX1a5CmBgAqW3wadYKi7WSMEPRSvJh8mrXb2U1rkU7Ziw62SmHeC6oZyhs8UoDqCafYW9BAksB",
  "key16": "27LU4gQcD9G3z8kFzStZ869fCjntZns3biMFE4qwtPkbG5VhQyhtu7FFNGhKoU6MmnWN2s9HeGyELhTpNfhApKTz",
  "key17": "4L7DTXbTPEN19UyTPcnUQ5FwCkG1nUXAxP2yZieSEt3QjmjQWnSJVdMxYqNCsuiLeCEVZ8QfkShHndS7RZCybAW5",
  "key18": "25jmYCRka5TSxVo3mQQVkuK13KkgWrc4vvtMyrtwuL9srqPQJ5kUMhRAZPNgoCbFebFJ5npmU6cpW2fEw5UPaBGv",
  "key19": "H3QzRDSm4utUqTwRkPxPd6Ax9qc4rSAUjxdmHNX1PgJJnDGHiKpp2g1ggsZ2Dr1ecvq9HQf6pX2dwqag7qcSsew",
  "key20": "FBKHdapjsqAq5crosfG8vTq8Puf8sTkap7wmYaHUbSJzyKye6hgVCDaa2WPtY3FS4ByyqBSRW2gXektgHBgcmXk",
  "key21": "AF7HUQHkBfhfjueHaNJWGzhXEzofDZoEGtAK48y2jUKnsy3VW5p3uDPy6EtLLBpR4o8wJzjG2aQb8zLJG8ymrA9",
  "key22": "5GqDMJ5wNXVCtWTGRZcKK6U2W4oPviJgaVRQmrpkNhDKbCLKHhnYsWFLoaJXc8c6AxQt5AdTD8ceA5wGTZmMEh2b",
  "key23": "4VZRqCkywn1crhXaaaTbBq6HgiUjerWa7Rg1SCjFQ4WrUyYdoDZHr4c4V4RVGk8YUzEkJZuP9kg46ycnkDAPvDpH",
  "key24": "4Y8DEKEd9ewrYLHCE9zUX13fgtHMFowHt8wEQ5jBxUq7SwUKVE3kqy32Swh1rKZNPka5ciQib2r75TCEPSgg3WGf",
  "key25": "8QfGaysy8ydMGF6b7oQMwHVK8E21yTn2LLK6r9EFjh8BhPz28sCz2GRNLyoxNoJcKiwNWQPkBB5Dvg9H9EhLx7K",
  "key26": "4XEtZBh7W4rNseEHJh7vDgGRdBQRm6odRSXTLpHmSBabQLR2qDjLsreD9rHESchMdHAXQ8scZdteKZauwQCqfFt7",
  "key27": "4kie4pN9UZ2J5KfUN3cTdH2vSPuJbMGxvE6q1nwwop7Z3yVk1AdYU3AqWCzUhe9nGrahP14btHDGgnBzSBUPUyQq",
  "key28": "5PF9zR2BRMqGaaMtjyWejJZEGpZFa38AjdotRKBKvS9wQdSrxgjS8tct97Q4cSkTZEGZ5Xh6GtywzkkjmK4i2Vh2",
  "key29": "szT7vsPSvZfsHke3Bg4jFzKQcVSBSswhSHB4QqBkVKJgArFdppFUTTgg5SxyQcPnoYy6HNGmxopsYfEbxSmzDMT",
  "key30": "3oczqHHkWF2SujSWbZbVbwiwjidxbqVSsW22yw2WXxyPQkQyauN8H12R6bhXBcpCuoGK1zuEphwhtWX4bJXUUKn3"
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
