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
    "2fuAEvzXCJHJLBbF4cC851Sp9dfYWHYKU68bCHGgZdbjE94sfUjtbXMU9j6jK3uRtbPdg6MzJtxzBa6fg4sB6xHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49rHeUfzSnQjpQyj6rD5TYRrT3gwSWgvtgWettSVTZUzkgz1VoUjTwY1DWb2yJbXXKCx9wR9EcRzoPeh96WHpzaL",
  "key1": "5pQAno6kZmj4KD9VkP3u7RuKCAxC4E4mjpfUV9S5wumknbo3bDnYDRwHthMwdF5fMxEDUoSWU9eCzNutpF4HFJS8",
  "key2": "5GaCZX9U85ZeCefuj7EoLQSYqpnFfbdS9wqbS6njU2UFcAhXWHkR9qb7eXXf1skoMFM5gDua1QfSgVJ6wkCCYzV1",
  "key3": "WPfFXdg48CeW8WfVgrXmaQvxBnrPF38ZTPsqEUfBpsfskPJQCyKM1HGvrHxcJpkRQ5weP48buEScCWBDxq7RCuZ",
  "key4": "3h22HBk1N9x42xZCgLrkymeu5cTvWnGYsbt2FWbCK6LM9PiANSFR1LGFeKbNxTRDoNrK1tworBPe8aJg95Pm4Tif",
  "key5": "48Yz4sJBoSWTCrT6EAThHqKnVnbV6MUPJjy2pXP9D18dJzZTaAQVrEtepHe8XugPePL5XuNPFham5ADhnrLfH2hL",
  "key6": "5ySYUYiYdHb4eqvK7b29QAdU2vxRkmofP33WKcXoBq6v85Yu7ZENG9FJhrjGm7MfTpETQZooHsYaVqgBQqBMuKDE",
  "key7": "4ZohCVQTA4MH5tCKAZL2i9mbWGTPsXhjhRcMxuWUdHneJ7BBC3pgHTDXgnxDDWDQPmDtsQrFYD9aAYW5r64sXiVh",
  "key8": "35WAp5qK5nkE4e2bDMXxQFo2aTZkaoanAeoj4JjVwn2fYeXgP4nxoLzu6taBQ3VmVrPPoVjetShxZupmYP6Yxxab",
  "key9": "4zUKecJP9PzcCURVZXgp4B5wEo34Kb8pHkkFr1s59iT1ta5db8Yud24eJgYgDp8Y84rVKPPKNph1qhFG1Nmz68Jf",
  "key10": "3qu5guzoatEb9WKa36bGG3cR9M3qyyLvNXCpjzRsuCiuc4eV8r668kmbrENSspuf3kVkwKq2CtE5NsS2tusKrMyz",
  "key11": "5iGSqpAQV5Fq7tV2Hu5novHDHMbv9vhobf8S75YSb527FkeeqG5H7dKoSLhAyF2JoStL9kqmCoLqSkKuKG3DWVN9",
  "key12": "onkywYJT2o3pT8W76jnvAgUBz364dJdha3zDKLwSXbVVYL3FaePP7qEiherqkY1VR1gyZnyLJ4B8SenWSKqNUVR",
  "key13": "4C8mz3gSsq2appGtm73UKyanHQGDZmuB7NqsRst3x9A4uWAG5UtsL4jakhn4bWvSKEit1tsps9zwgBNWFH8ZzaU3",
  "key14": "HJwuo1LCFj6HNJNkQwDePYdKcWbPUU7S4d6ET9LcADQofAYtSpu1kNHeMWS6GQPtJSLWU7c4QjpWGJg6VPtJWcQ",
  "key15": "2Cw9CVzbg6iHnegVgs8cdhn53sJJwizYD862aY98YgVYtu4kmAjjfqdsoxgRtbyGmqZgz3Dfgdbb8tbA7t896G8F",
  "key16": "xrjHdTcmCBFdJb723GpRnR2j5msedja1ikPu2Vyru9CXgUsyVe3PTTZCh1tTGtn6p71JfdgMqvBXNC1WJMzsMnk",
  "key17": "4dwGgiAqGdSy9vwD87Ha2DpU1eLsgdHaYemVUqEMJ5ykw49BP2fGwFvUPZLUBNyB5NoKuVQcy17EswcGxyUkriy6",
  "key18": "3JiedoAsLGVyKEFj96upfNLvp1MdusTywxPGQb2CzoyR1DtrUn7BfEu9qRiXEmUyPscQUf46XZjA3PUZcPumn8na",
  "key19": "Uo7YK2UCH5xmnHv75ZTXWXM7xRAzD2paT7YXFkjZB5zi2kLVQ8Bz3da3nj4veWDKu716NJUi76sKLuNoUf9jfY1",
  "key20": "4z5Cpr62oseFYpnYKE4vNxvZjKr7Ly4bbwHjVqWwLJzq1oyA7RTg8f8gHXxWzzaBh1tBfP4iAJM2x1qLyqBM2p18",
  "key21": "5msJiDDpdm5SFduvaVMubM58aajfstrrc1uN3UiUeGd5gGH8KVaahi963rkKdKz6epUzkidiyhM5foWU1i6b4zL2",
  "key22": "43sXLsL2P5CWdY5wBmYqZ4LoPsCXNkq2BebRH2iZsy543HagHmHFzEMLtaQAXy3GdCndRavaMaWwyxZG5ttG76Wq",
  "key23": "47xMNMNXeXgkC9NqfrKJ5796Qr13hkBBqH22Hv2TQiWs5wha5PWUqyjY6jCwxEoUAScMrojrRVMBYLFsJGfGkNUg",
  "key24": "4zTCz7fMtDTebqQgr2g1qeJjPnicxvcF5rYTRKQourjWN96op7SkonECcUhn26E1jyjw99JQnhR4DfJJoSBos76q",
  "key25": "2msR3PMrW5ZF5dkwe6JfmkEzHENLnsZXd6HhmJmeDCRkxzehoWRbfR5WDRR9gZgmbgeCi43mbNcpe1V4oZzMYhP",
  "key26": "4eV5rr2BQ2gYyzb7m23SJZtgMDf5EBAn1jPN28nYVacTGgnakQQ9UfDgDgtnepzht78HMCqZ3q1yQeuWGrEoCYFL",
  "key27": "2TBXYDHafxAfFj5cKvKFyjWUbXjd1LWKQS78MD355eZQx9tjsuhcBe2EfwTCEFZy4J9kPPe6vCc5ButoVgVbAV1B",
  "key28": "5h43m2gS1VmQyCEtaDjHy7PiD3ZoRTxofAEnkJ3Yzv8T1J4zCWRBUVY7cWJwRVaBNQwa3WLtN35pzKqAJ6fAW157",
  "key29": "5peb6qbyzBBkQVtRcZ77f83tkib1oNzaNXmnhgCpJi3yzCuDJuyZQYVViCVMseyqsd1j5XZShbXVzrDzsbQsiHVm",
  "key30": "2oPKbbD9CfFChh1ycr2b5pRDniGDpRKjjhQiv3jr8eH8XG4qw4Dyr2UCbCzKeLcRJ6QHstzbDbj7puj3nTKJ6hZ7"
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
