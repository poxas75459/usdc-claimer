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
    "5nEfMj7xr2UqH5n1btiUEhpNhzTc6CX9dTP6pSjGsJnjnwwPZyfoLhrQP86xmguAcrN65ayKLfwqD4YmwdzLTpjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ia6HLgL5rzK6gFAGo9EWpSxtv8i15uNQrqxQaTTxG8MZxxRcCXZ2g4mgJBHFJSkn2NRRW7YqCvPZauhbH6S93NU",
  "key1": "5JJduE7BR4mUsb2RzDTt63ah2fSn1RzWNg2VBn4C7gDLMRaWxvV37xFzmkPDCbXYrBmSDr2RhcZpaiPwaSxjZz8z",
  "key2": "4podDgLJLCw3i7bpz37ETwbmk7s3uX6VUJVjtwfvJp79gw2Pr88d1XBvA8FmkGteM3Bb98iCn5n2D6ijyJ4PX84Z",
  "key3": "48At1S8ykQtAXFwUsQyqH2rcPuke7HriwkMcUis1ftJ5pdyiB5uU9iLRy3URHL4WWXmzmNr72YahGTnUZMfDAhAc",
  "key4": "5Q4BBRjFzp1MUjBBS6Y6E46jMRMdt2fTgmEi4TUXBPrM2h8Rnzf6wFbJ42Y5A3VQSS7kbYq2qvrXwAaqNu6otNmB",
  "key5": "VEtuW7PSXqJsDo5d279LMN2VEgsDSuNoq7rp5TpZzcERV9jdWvzQBje9JUDvPyT4y28tsxvjKQ3hxaSH2etHij9",
  "key6": "58PMxoh9LFXDXg6Th5PfvZ6hQV7k8V1TruDrpjKyELEf7p8MCUzyK9jynYMibJU3jXdN2wq5A99NXmdfQLdsEHt9",
  "key7": "2bh7qZQMcCitGDFGQfUsVgmTZGUF94wVKD49nXf9o6VjpLqSB7wpvBFNkkDswGhYy3gayJQ5U5Jzsd784vDzP59U",
  "key8": "4K2ce4wnq26ybYEZHSoEoY9GCAdWU9podgkdNzsXUxRnQHtJKZ61Zmq7zUtPWPZPBMVBE7PQwbDpRPS6YUsHuqpa",
  "key9": "4zdf1171pBDKCmmEH2VNUyvLpUrV2mqVDbTW7mHH5ENnU714kADRoC96BmKNB86P3GkKvZDeQWwsyjvknWgeAcTA",
  "key10": "2y8kkB3SPfbYf9aLnWAgzDkjNaN6y98F98cnixEjp3QDPCdGxcfw1XNuXcpaGjhtcqEmJ2Nm9FAdamewHB236uUY",
  "key11": "3Hmb2vA9ex89kAA4cf5GfCxVC37AZnwboMGHe6aSX2nGXr59tH2yYuUf4bNTFxkGDdwRQEg8HsiYTPfwaeb24cMo",
  "key12": "38pBmVzcJbWLuLDjjYyodiQCfPgVHPDij5MBMwbWUpgqWSbSHYhjVHwabZh1fDFe5mqCij6gxDuPtkyBVCc9tYhf",
  "key13": "3E1eGE3S7RCH6e7mtHr5M242mh35d831H7mhbQMveVTaQJwP9RwV21RN62e42HftGnvwqRrDq17WttTFB2aqT1hL",
  "key14": "4ey3ipvYthCc99o95mo6cJ9ZTrQaG65vTq4My2Q6HqwwtqKcbkuNoQDfP8dzdHENbsAJadtqssF3pZpA9EWg6nDK",
  "key15": "6735ka2e1XRxrsmGqx14LJ2UAZXL84TGYFCJ2p5NzU1eeDQTbabUirTixDVepDGFz95Q85jxAsSRw289qBrG162B",
  "key16": "3s8N7rLD37FbpQX7bkB3kbX6MS7agd7sYi8LwvXJ61iw9cqMBVUuhKh5BefykGeZJHTrhgD8FNMjQvY8sVhBgZQG",
  "key17": "5Qi2J2ZgnreHeGMCtmZ31h9JDGYTKCq7YYiejsUZuoR2Jp2jkmjDrFPYHWPsFSZbtSiRmgrVErhK9qXAbUgTzwGg",
  "key18": "2vyBbMT4Bd1caz1EQp5EZwuEvchDN9yf64cwDrcxcCKBTSrWpsZBx4z3nqNduxGEaACYCRMBJB3YiDuu3msnJy2Q",
  "key19": "4uspqR6euKE2BBhGLeqDLzqGsEBXfQjzRkN2MVpw5dFNC85nNsNVutunBWp9gebyKbZziffYfJHT721EKbBtBqsM",
  "key20": "T7yHuUiWyD1uubYVh1DSGieaoukoxrZ2DrpnP5FbPTLk6oxZFDh2P5NfhmUFiykBHp94yn35ue8ujV6DGvqw9SA",
  "key21": "w5FXGRvQwNmSFrPSn5eJtNPYL7v1H7Sk2xjp8wnaTJRVNPeaVN6cuMdBARjwrR5W2QjtKrzwcv9ntwhpfNuNJG5",
  "key22": "2NJKZtkCqqa2uNjsqXFY1ytJ4mxudKCwJEsMmrM9qM8w2ZreLvjhnMtV23MqqFhy6ZgTDHx38k9i4gU868umGQzW",
  "key23": "5LfF7n5TPfHohY74JdmFMfbV7SLUMaYSJm559jkeRpSEehukMnrWjTp6NWGG6en3rsjjcn6fBMypKq9MgYYCYZ1H",
  "key24": "KUkQzMLc7ktjoDGiwyQeV5wo4Uoa3yxmUaBc4DBnKoRaSo6SizPFXd1Gvjwcg1uV44wULgwPYGqfAG8MT31dFEY",
  "key25": "2uVA2xKEgE4cG9B4X9AHguEZ2W6aCyMcGH5Y7gE2UunM9NaDutv1JTy2FUu5eEBgX9gGYp2qg15vsxssZs1edm4K",
  "key26": "5KJXWkS21QS5Brwr2D7Ea22yn8Ty7jNqXD7gHXdCsWCqHUp77KwkYoHZ3Ya7ZmCPcXnQW65GasDLuyupCdTUq6RD",
  "key27": "4LA2bhx1gvse811BZCqkGHBVRSvTHCPVxRAZjgsPFG27a87pLmyegvWPGh5sUhiF3WGRronJwB4XXo1Tn15bX7hC",
  "key28": "2QmYiJpJ2cDyzZcAfBUcD7L1Zbhh6Xv57vDA8csMZS6Kpy1DkzunAmJ3FTEFXzk9LHYTZAShMyA7ehou8KDfswBz",
  "key29": "5gbdpZ7bWDWiG19vsU87NEkkfe2K94AK2xw4W5yHTpoMAforkK3Bn7ZCdsZzS6qJaiCSB1sUoDtysjMMenEdgB7F",
  "key30": "2ME27mDW23n4EqmL3egypzQGkDfcWpqLdsup7HuJ5935zZK7iSa3c2c8U5xgHygFYhCW8KGvJzUHxBwqjrTqK5nc",
  "key31": "49PdU15VfXb8CPgSN5diKK2UpSA5Rfsbip2jSKKh4BzK1pTzSb6fu3MwikN3hfvjB6VJM1EjoVvR5o5xVp9Eqmbm",
  "key32": "c4D6Zxu2zF1uu55ALGmsXzwvbwr3ZU8nwk8GB3uEdHUfgRdurmaueJBGqhhGUdQXsmgDddhKQJdqcRooNbizZe7"
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
