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
    "3sh73XozRLYrxAqA1janS6jjTdensYmEwk8wxZ84zzCBj7MwLjHMH9wjfWSeeybtStLtt3jk6CtGzXPx6wCN58x8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rHtP2Nu1mbj13h1X8TdQw5Zorh3ima1bSvshbTgMZiYQRKDmxginzijgX1WZyGc3T2Ruzmasije74ujLkzNE9aY",
  "key1": "3BTkDC4a51svoxbDHi1Q5jgirE9RgdqUZwB1tsDdaEvGpkMgudZv6zLrCWXZXyUVXLX1VcTwD3FgiomF7RJsmm6n",
  "key2": "4yKCLM9Ysq9E3GaaeQmmx2sXZUKNeBy2xaz9CaashdfqzbDFQkTjFvmbZuhCC23dC4JJN7cF9HYKG8eqxqctUkFP",
  "key3": "9ntnddhxuabKiRgKs5HgjHzdAYWxcz3XeSkZvKNFfVm5HAwwSao6LdbuRyv8yixHM5WgoaRHW6u7sk8YpicizBU",
  "key4": "2GQMEB966FJ1jbfWFuYD2yn5DswmyG4wNxCYdriZhYqpe6YwTSEz9CyMwKJYkk7DaBKSwvJ7QpsnFvnU5zJSUxj4",
  "key5": "2s7xBQbAyXX26KRyULp5Lm6971viEtPCWQuQ5rjhiPQDTFPBa5ipG8fiCcwwQ3T84jBWu44zmhcBaUXZMpnBskbj",
  "key6": "zt9yoAabz843ds4cBrmqEMBVucy7vTt824U8rni5LvqPRvJBgqgQ9QMdGz7yY8DE5t4pBSVTAyuom6TUNZbUpQK",
  "key7": "5w5BcPyosb1LpJB9m9RRDF5L2ogWMqPBj2HoQEzpvLBftRHmFEqNtSrM78L5Ljw2DZVKDBo4U1h53x8PggsbDxZt",
  "key8": "fmxXazpSBiGLR7sDtyZbZqiUMZ4aM8i5yLSn7tcLcCnbgogKuuVvAuxSvo9KRTA6RSaUXrPG1tdKR6sxqNdRwUU",
  "key9": "3fHtu2dpNDpBLLNPK8i4Jn4pwd5Sz5KoV1BByaV9AQrNJx2sHVfNDBduN8LoYKgfkcKshxGGt7a2E9xMydrEAAcR",
  "key10": "2moncLZ9cCsA9ChovNMkHBPuXQcrGVShUgQ8ruN2f3zFEswutdrhEYAPVYtUHm9HmVCJSCSC4s7fAjFuu89FvTmo",
  "key11": "3vi6Xnp5C4JW9zqGbUCFwkn9TEYVpgabRdbxnX24P18oc6UFCbBfJ2HPNq6rntqarW96JvEeAPLmsbkfkeiVoKwZ",
  "key12": "2qpA6KzhRqpUgqDrRZ2a3Kwof8NJuGbm63RLkBnffySJ9vcvBDtxcrDHfPWbB92RwZ1oiLH8zgvftZJW8fX2zH1z",
  "key13": "45kbcM1jmQJd1R9an4MnJWQ678h4uNE6GHPjixXWgnZU7RhBasQWM4iDopR12dE2Ud83GZfDxWafXAbA4BQoxmUf",
  "key14": "5oCxEXF2dmZo2dT65knjC7ABt7zBQhh5fqPDgZspzqJcDEDsAdTXJNMgyyepL2ohyqqiV5bWCnDvPFh4kkUfx5iG",
  "key15": "4Y1rGHEYsnSWThPfU4rVs337pXUSNH39qB8BgtFbn4HoHKc7YVmyd8fBbKXC5kpD39huzy3c6AKp4A8PvDLbw78v",
  "key16": "2hM6mfuXA9Q57PdrSYfQBNV3kFeBLvQoWiQDfXSoaDDgmhGB1hqsCuNPzpMCsGZ11qFCZCAHet8ystTaVyGLftgE",
  "key17": "QzKbUg2ChQGm3WF9XpivY1tH3a5G6K2KXD4QBtYdR8CG89rNjqNpkCqyvMqMRRGyrY8eY6SBLu518aV2jgvP7Pt",
  "key18": "29YxyjEhsgKUNGvfqCer4Xju54oGe1GmGnd2ZWQRPYFg4xSfs2bkX9SNsc4zvftxMS3gxCneCWuseZQydZT3r8AK",
  "key19": "cK5cbsoSvGjoUtFBU26yvFaRvmFCCuEum7NxzZ3vEUUQcDs3QB3ePGt6MYNTCE2h72sgMFhpBUzEXGMiUNLNWvN",
  "key20": "ut28xWDpurRnrY5m2bbnivQCjEmExjwZL9EhbSorYfA1U6xzDYcXz9VBKyp5QsnZH4uKn2aSwPumTG8ETjzNVUx",
  "key21": "4maEPWCFiwmPawgCdEdUJhGJktCD1LhgKH28pvBKFM78NWAqFBfPJoDpJ2FhdZLYTyzANDNVydD7dn4qaRphXpeF",
  "key22": "67iD928esB1HctXH5bXHWXKCEPVWxMSTQnxXpaQLi87kEycuZuK444kPHvWLK3hxK9kLYvJJGHpk2Jb2LNLxsqpq",
  "key23": "RqFzxpTnXZniwhceAVKoF5kWKLEYTvEHYriZg78VwLkcj6dNvMSZqk49FGa7SDUAcEagL1tjsq6STx6qu8ryank",
  "key24": "3veWWV9ZgNqjKEq5YjBdEo8hpNzPxictgb6Pky8YrvCfgDKLBSYnfNRMtQkiUMUnUTnh8HMrFeB4bQJnCQ3mjFJu",
  "key25": "28Zai8S7Q2tNPXUaGcoKvEhfYsywBu1azoDMeWzQip1qMJhvtncsV1PdjVSvRsSPVQ3Yb9zLA3K65Z1b42NPmJX2",
  "key26": "4eXjuHUMBuZXaaEwmJyxAKeTararAznSUDoQPcamfpaWWJMsnjbPHfZzduCNaMvvXp4BnrZyZWdiyVmwLu96yExu",
  "key27": "67bqfopWM6D7LkAmRFBdksUhFPtcvW4G8rc9ydrLNRRVEAnMZwB2BXajzNH8fG2C3GaFW6EvGt7D2GQ9H6eM4LgE",
  "key28": "XcsrjzkvPFkryrrkbTuu8fN5Phrw72HrnBaxGab4hgFF6e5SFTvmRBx1oZ5sSG6pWznfJhE1H12nfvYu56z1bp8",
  "key29": "2AJaSaSZkJvPr2SsSTdFUeM7c9w4FvznaBK8ShV3sntzXjf9XxS9ScGCW2788aMcWyW4tZpcgpiwXzw7EeZhArFc",
  "key30": "2ikjWMcTg6Xi9zpVZacd6A2nHd38Gmtdjns18Wo7bBWAKyYHKy4erdGYvnJwctKTQCtK5tfTG79b4onW45K2S21w",
  "key31": "5NF5JkrAa2Xfk3BAv8BVftk2VBQWoW4bxgoKLq1oVWighi9u3yW1MoPDpM5EadxYJ18Fpbk7HRPFLbNkC2Kg73DC",
  "key32": "3CBMrvLGgY8XNqdXhkM8oPLUA7bn84BhLD7BGi4ANDX6iSC1UD97UTXmgWP18iwj1JTemwVtcHKbV7nxkx6J9DJz"
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
