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
    "35YWDsStNWnMHDDHRwGL8hXHKwTiEoPEQ1yHmdZ15JUcnBmRnU1xZNnvrR3gKV8mp3vXrouFoea7VBV73XcBwUT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xBE5CwMMcrN992amjrno7zNnWk23LwuMeqycMsvNmknJauahKf9Cmi9VyQMXYMc5uUeGUGUY1yX6ES9voqrx1e9",
  "key1": "2nvR9DzpzhYALjUdJosRDfX382Vb3tPupsJnpMzsDRbpTyCZhkoQGse7ZGKRGZZhnxFMGR6q5h3BM9qm1wh5pSLS",
  "key2": "3XbA5xgXtoU7dxe5aGysGFEfwPUyDRwKCPu261RnKFUkYhkM36mDLWdsPNJe7SdYBvawFPLm2ZRyJNC6hVCsLZkE",
  "key3": "45qsXYgiTV3rtVkQXqSA5U6cw7UWf7gafvNCbU4kTTFh1CEFQ1oH5pFMSYBLez142b5Ms7ghYCHZjt1MjXehxcuZ",
  "key4": "LFvmhtdXEw2bxuwhhFVMNmDZP5U96VJ6u7TY8uBjLzZTLbcpJpjiPBgvC5dXu1L4Pc7vzpx2ViKMZavhcqc8Cma",
  "key5": "4vtVWTqGCfctGxonCZNUvCrYYPhTn6z2Fa2HBsMoNKMvs5cJfUR6fHXJTiK7p78LRrv8AFE91JFGs8Y9NA86VFaF",
  "key6": "2EsgWk4ARkHAkBjY3vrLVQBV8wJ9tzbMEo1N2pab8Lp9SKK5FpFBRaSLqhDsnaHbfj4CPJ3VmHgoaUDxf5LBJH2R",
  "key7": "33uLoY7N7neg31M1XzbC7pWWiaW4dNN8kaAVr9EPxr1x1sNkybyZcWsByPMEpD82ZFSvSyMT686jQd1cxLVzCkE4",
  "key8": "3QLE6VMEAUyYTwTL8jirUHc1SxijFstG54WycUumzrid7T86zWreXfXh3ktDMoyZPjWcqKhhUxdVb9543ys286mU",
  "key9": "5ckB1bCrnCJhJxTB8gnS9TLYdYrDjBSFBHuoHMD7ZoS4r4HGe1DAAdFaWLzLpCKWodgEQAKWoiTv51FRJunkFXoB",
  "key10": "4zJemUUQamN2e7Auh8mRxYz3yTxxrLCZq6HpYQ9Lw2ZAwtGFMLFMo9eUxhuTdeAkqDf9Y2CE4NTKzNDxjZV2esTk",
  "key11": "38KoghhkZ7ZtVQsnMLEp2o6jB1Ffy86w6otnCAbHmVjMuP7HEpjKtUTU24E8yS1td9HiiwyBh7qmhG4MCKd9YBCc",
  "key12": "4BW3U1yK8CFQoNxtUWJF8VaXhgvoQzjseyJcGgW5jQSR5bwwu5ZMPsSxCcVAuy44Y16Nxh9C9JhBJeusyDpaJyin",
  "key13": "2Sx2aAFviAz1jbqF29eJGApQPvkVVJbXZo8pxEXa37aj7ikKGmQ4heEeYvzwSnTJ6JiF5zvEqxABJbhz9ozVrckx",
  "key14": "31oA9sZcymD9mqPCGGzy5HdDWCFMCH6ZBuWJHQxthX5JbtWATj9QyAu1oxTJ9Uo8DQGrDAovVtXSRg5bGuTxCQfa",
  "key15": "4voZ2iPEpAHMeBV4VC6mVuqYFn6SZDHiRY4ztiXGxGssSpnsgnreatWJPNinsLEnWxwWAHLcjMfgtDP5beyVWFBS",
  "key16": "34HnDcoAfztJbQT6dqx3LfBDgHNZXxKW9rzpmYWbBj9nLZurqGR9ytkuTR78uRnTkRDqz8HFGdpiJjjTn561k5FG",
  "key17": "LJcdjdxR6EoNBJGq3SdbFsRXtSL9k7paQDiumH8ekSsQ4Q6zRR9cjAumMEinv9BWVh9mgrQhewEhWFLU2A9cPdz",
  "key18": "7e1b4kBJ6Hnbu1XWaEaGiSyxoM5nUrgMfwhZngyduSyFpCmvKYJRKmbruXJzZr9xC5AFmVD4S5bFoJistHK2X5G",
  "key19": "3PMuCWrKAUTntM7tMyXcyb9bETPW4434CJkYju1dzgrkSF2A4AWr2J4JpfyrSPbyAvbZ2p4AT9CFvThzdTJxJSMZ",
  "key20": "2eDhSh6D3KyHrpDJUvUEAC2CnnNJiJxPdV71nrhqVAoPhb1zQATgZBcA9xQGHc6i3tjuSEuAKakfKyuPC9qgED9s",
  "key21": "533BTKaoUZTN2gAgaMG5ZojaC4dewNA6EPcQodbPtVu7dCNoTtTuC6uks7C7RLjC4cuVPqKQo2WZT6epWyxBXVFp",
  "key22": "5QtzM6Esoyw9ywxHrDFBVdZifTWSgoSrXJWxiG3BsbxXbco8R19MyDP9WkUYjDejgVDern2PeSJEHA23kttc1cNX",
  "key23": "2BGJZfwofzNHhaVgyzE7pWrV1MxAEMsK65nceNnJ8pCjUTqqz9pXweSJUj28ugYqLCK5tJqZBTdHXjLu5YWHnGBB",
  "key24": "2PJtMrKSWWxkEpYJNZ1js6NtZaSM8h1JFAR6Sm5NDPBs5w5Mi7RjEWUgMc4kMt5AofaqPqQHHyTD38t4yhufpSjg",
  "key25": "4zwDUyys84i7LhvvCGK6YxN8KRUqdRrt1TZ2RRTkh3xyVuYvkMiXa23P76YnZHzjYyaGrfDud8kNoQUFpmmfR8d8",
  "key26": "5SHRPDH7ACunzekeKawoYUV5rPsB32LFmDEfgFQZknEtNMi7YfxjsUEv4zQau4PXGGcQS1toRgDabZYtC1sn1sZj",
  "key27": "5kpTRqhRpCSY2sndvcGJ21nisfzh1jDaoQ1t48dWFDAwREbdhVeT7ae63maHBpbqKgpmo7vUoc5Jt51SdrthYL3j",
  "key28": "XPiPG1JyDxceSxSTDGqZGUradLFShgFwdufasi8ypMDYjJk8szk6DoqhNATAM9wQfbxzQu4Xpdxgb2ZUXqmye1w",
  "key29": "2nyf7EiVRpXhcsbbgPVCkcDEifMMjaEhPGXbA9NjRrwsKjkNj9J5Qs6DaNGNVJvt7Qig9YEaS8hVuzvosxnnY4oS",
  "key30": "ajzWcgEEbzaXsnJkydt4Xh2WSJxydRfyJ9LK9BPuksRuqtKNi9GDqdA3XrSzSmVsXmvVNK9VztYGc3nD44LEJ34",
  "key31": "4dieQwmqp6HDMb7YGUdRmcyi8HtLfDKdBY9vgVLWxfy1E8c74NWyyShJAxr5wKknpt4GdXMkVT4j6WSWXBExN1cm",
  "key32": "5XjMrBD53pz7iJX59FcL45m4KF6MXxYXR9KdQoeEmvuFe5PUJt7cBFWRcypHXkDN6cmPtGrSpoZNN2n72aQrZ9Aq",
  "key33": "4apQb37xNh5XiQ6H7QTYEd6d7GvuTUGZ4sxHtybBxPYWGmk6FrPN93YuBg3DC3gCU8dNXtR2ptUXQ1bUb7Bn2b3C",
  "key34": "hyUeFoGUiPLCVBbehLN21sFwzaVmWw6P7JEtAeiPfR71H8UvVELQjCy4pyh3tcfTsRv5Qz7mP3yuSzAHmHH3S1F",
  "key35": "55pKk1kBayci1LScfTVcBCxcCSFHgZx2hJGHS1K4s3eTuQRFyMoYGM6pfkPSeYt6d6uh1d6YPCXN4ptqVGj3BQJL",
  "key36": "2tUvzHMzKnpjWPQDZU5gVrxcHGPUkpitTK4gWWZxqC1ukqY3YmLzqEzo4yZF6P6SRMXSKLSCismfyTyRwaCHGQhp",
  "key37": "5z9r8giy1tWdNUnZVv6Scy93obmTWN2SYofTzjnAYihrm7jrW7PoKwMDutU9BavgBaWDX4eYhvpiSQePqbaEr7vy",
  "key38": "rd5JKzGo7iYvHELXCMoQcMMafupUQSbiETCZNxbridvafWzBeDNWASWAEuAJnXVctfo6zZoT7qSBQduASrdyBVU",
  "key39": "xsBxQ9NUTNNkuMkWsRtv39wtEBg6zKABozmvHsWbxUzKh1BzesJDvC1G4HMvwhf6SgR4S9FgBThgtC4P5zzrpT9"
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
