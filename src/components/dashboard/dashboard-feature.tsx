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
    "4tb2r4HmNhbx92T78bTXQ4nGJsEGnt1G3dTeAGvfNzfQMSXmKGttSvAHxtfHuahVx3aAfAJoZPVPxvnVRZxmbyf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hfyk4BtQMVTXWiGdYuKXBMygP6L6uPsAK89ZSyFWTxtF3fYAhoYnUh5pwBCwLmbqvDSC1X5tvzBti3Uvvks96FX",
  "key1": "4sDJHJcN3JEZdz5xaJqdwNMeZjuXYVv99zonV8dv27c6VTXTqSXCbx5K8JCz3JHkxhuSYyN5jzAvdomi2ezzYm3p",
  "key2": "5USGmfoiTTwdvmYAGgsCQfdsqAxoHABD388HRsPvotdPVwUKnMV1sJuysjGVfVCqKGptBhaKJJTXkWtPbaHAAsDE",
  "key3": "2nXgUguEuA67KTWWJFAhtERVJE6xuN1rtGU8KN6uXXs95JAXNL4qm1XjuAZU3Lars9PX1dyziLAbRdcjduFi1q2J",
  "key4": "P8U1dHhrYjjVBhjVWZ2DNKzqh6vg1SeSFDS4DtURkJfd65bF5HksGttzb2bWRBnVeB87vqb142q8WpTD8TBRdQp",
  "key5": "4ByrZmLUNVzzA4gB4JDeqSEzGcg2kHWwZ9NMYPuh3ohnWNXXzX11uEBjZHUzeHykzuWwdnHErDddzfPxqu2dZzhd",
  "key6": "k3AjYvdN5ahT3SC4dV1nZezZdREuuxhAKo5z9St4d2dbj4K4chY5UycsSuB6PByaYaid7kEpq6YMaTrmH8C2jUd",
  "key7": "PzVkvpApdx8fYsCCMPXeqDPzFLNpPZyRoAVRAzdLFZ2Bei3bCwPb6mGL8VfM55TnPzWVy5EJT2y1TPesodwXKgu",
  "key8": "55guMvXjXgVjkMSNZENrBVbsvSsy8NFxqsSYAgBaE9gH3EWtdYmxUqzkzHGDttjk4Dk41CU8poaASSin3ayMwsE1",
  "key9": "xjqsRdiSL2Ueu73Q8DRJ4Fsa8g4KKUoHv5nxKvyerfsgBeDtedcJz5gjqv8KrQVpticW466X28v7GAJZ7JKp1FN",
  "key10": "4XnjJz2WLxtakmWaz58EDecRJEXvkwJhJpsyXRy5CHySboEUMvbdD9UZaaGuJ9Ht1v81LSjLNBdRYNL6EjUyWz4v",
  "key11": "2zmxoiYkrEyhNB1KZ6wj239qYaazPH5XjmqC6auZeaR4EkA7btSsTnrFfwNmwFAUTNMJrBJWj3jBD84uchFgTDTo",
  "key12": "3peHpLyy29NHpBRpqk5yYDFjYXs8pjPQEY1rTA4UBu1diZrsdTSPSRbpJhRi7h3mWb1rxtaCpMmr2xXV1mcKac4p",
  "key13": "2vukV84X5taRGyFNeBqWXddpJWETNMNGTxWbF8XaTcNXn4DgTLLCY3sRpySa5megMMqLfxSo6B1wNhFczQTprmYe",
  "key14": "64PW2scSwziBVkY738quQju3R5P2yBhbNFbXCdsuiabYmzHUfcHsW3veFjsRbq4A12xMC94kV4Y6ZzUUSPC5EnJn",
  "key15": "3reZhbvhs195mweU6zBwwoGu3XhKtUpPefyGBeQ6hFMm7QoYqprYaaZygQCnRy9aqeZqrJRMdmBmqnqBF3kbkuaX",
  "key16": "5RGMrxbP6dm5ThtFTq3FSw8WpVWLpyCbWkfiww8BK3b9AH84N2WVTx1fLSgv3xz9i5VuoK5JxqU3VStC19ERhiQB",
  "key17": "2HUkomjaneRYZqrQT7dMTqGgzs5ey5DNHFBsNe2r5rAakyC18oPm584acGuQHP2JGEC8AHRY5HZ3hkqTeCKszMzP",
  "key18": "46tGB53gpAA7XdcT5Qmcbzh7ixog8gqdSWwVq6rLK73RoQfFeNav6o6JMvLZxTpkdc8jHzKcXC6tuAqixaAnZQDw",
  "key19": "4fKSqAY8coEmzQWA5cU1wY9AW1NHhkc6FCXSuzsSVtHKZXHyBTVLuokfqRsFqV397cmuaX2brixc5nV6zm4Fa91C",
  "key20": "3yW4Pa1xge7QC9og2ptgRCPZbAowXLmtBtwFweM1EjLJLmn9UdqzD61KjhnfEZSZ9DFFWYKcwx52t3Jnswmf1AA3",
  "key21": "2MCMqMJCuBkmKmDWcMPEeTHLmTshacrnigEyYnGywTYSQZzBpt1AN2PTkZwi8BNZXG9X2gEDV9JW22MajCBddXxy",
  "key22": "4gyiAhcDRFXSmmKsSsk4JXojxrvWpCNrt2Pxh3SxRwRqwu3HzxVgxvZvwBBwemjYdvvHLJCM6PAgRjjZtjimyAZS",
  "key23": "31JEvqdpEZdHYpiKeH2vkeivMNaL3b2emX9hYJz2ZL3yU6SPPvyGcdGYc215wrL4S6ET6MtRanoigzSCNzAN8ppg",
  "key24": "4BcAqVAgkDHraGJdR5QgASSk413VHRa2KoeFJcQuv7bWtPTc4L7VyzxU1WoP1T6E5K5HaKt2Jqh8Kwc2pMpckzMf",
  "key25": "ePHgLXpfMHHVfhx95wVitUVskeJsWfXVZU9z5QiTNxpXGjvZ6bn8T8kxCPqUATZb3cQ8LMWCacTRj6uUNcAVbTH",
  "key26": "23i9ii7DF5kwPTtwZdhaQ2rcY2uGWvUj64rPyjh4iaJnNtxDHuZsk9koob2tgSjYSy6p1s8ciUW6e3khnqQ87cVZ",
  "key27": "4f4bsz1jjQB4qp1pQdFWwQ3nuWe8iEFW36n1tfScHRyxhAzhCwqrpmdMdMjYcbxMZ4fEi67TwbjGRw7p2jASeJeR",
  "key28": "53PppQDpqzAwvxapKGymnKJZyLjcMf1kCHypZkcjw6HhLUWSVaQc1nvQz1ToumgiDaQrLFPBT39QkiwiFfdhJBaQ",
  "key29": "3x7kQXiMrk6ErFFhVWppdvUwg9U2uKoUj1d5iHq8qH7N5z9BX4bm8j6ut5gHcDjegQUSSZBqbfrNsH3cvEFT6GaB",
  "key30": "tbELMoFjvZ5MqDAQ7ytcDgXd1iKdx8qejniB9WPQHQVVWgqtiQ6SSFJzJAuaBQ8mXSSxjy4pYePKxtDZ6puiraX",
  "key31": "5hsJmr17MRei2vGpHhiX2RP8SCL8bM2UGEZAr6BDF4zVYeHGzKQDmMGGUAwvfbDGsiWwYr4zBx4RBZvFfiGSML4o",
  "key32": "UUgkXxwk5GKXtMx4JULWExXkrbgqgSKe6yemVWuua9b27dfSiVDQYZrqx1uXj3hCXoY7G2W2MgMCJBwhSiho9wL",
  "key33": "2QUPV55teCiTe7XySTaNTnrcQ1HToWXqE8FDAsCmLfP57zM1KchUiFhoetP9N7ntzhbgdt6x13ENTbKdphfLcdzp",
  "key34": "3tKExgPst9Px3Ldr2N4TSvFM4zveNi9MKHzhciX6eLYYn22kDCo7x5CHxBm3fiRNUS93nfG7gfgtuDgrFYLsqizp",
  "key35": "5JFvJmdLcAZ8EkP3zzxMeENtQCNUzjbf5brvKJkqWViXEzVRNr6vXsKFWCTgf6DdW9QV3MQjKBafRaw97K4wxx1a",
  "key36": "2gQUyTv2YDUZerdxtZMtx4pBJ9aMK5LbKk2vfXN7nWd9VTFQdNfxLywGGNhBB3NKAzpvf95CvfA9XLCwuQg6eJtm",
  "key37": "2Pz68PhKn3ewrSNpvbp5cSFnTkNuszo3N9FisbzcEURgcxgQFL1nFDiQc3FFqo7dtjwu6KeNamiro1QfxJxFAbvH",
  "key38": "43xSeM1mHf3uewEtD3BLVoeA2tAoZF8nm6WyPnaXpnvjDGjQB64e9piYf9RMfuiQQ4XCdn6M5ygjExnaKzQbCv1b",
  "key39": "5W3jxYW7SuPgQzVHPKSASJso835cSZPnnTWfZ6XLNJGmvPtqUXYLmaHrd9wtKqMwchxLcqc5gSMBA5jbUhsx87z4"
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
