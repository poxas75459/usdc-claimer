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
    "5PovSYg7TvMTuDancorsVjEvUSuPGmXFMn6B1Mp6rDvpWaQv3YuqM83SEb2A3YdsfyjiRfBrL7MEBJwxKxk9E679"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QdSTmVJbs3dRq7F2EtXpJYXdADSsdKWnJkfjtRikUTE1paozGZdiqigjSGXw4YA8NzP7wEq1T2tqrgvgBgbXRdv",
  "key1": "3fJgEs7vphcoEEajAKhZX5DicHE295kcEnf5s5EvhzYnjx5Mggu3mCkoVxtoZ7xMnxRtvbUr5WL3rrJJDmG6Fvn9",
  "key2": "5Em2Kwp2RfiRTsu7a7x3EdpQtkzwy4tah8EsHccE32PEeSJSRh7hnPvq8ftMs91MV617YiQGrLaxfdrEjcyH2WqK",
  "key3": "3RQCNL6mrzRfCuB2V8DvLFeEcWNCQVoJq7XHr8suxJyCxsgQjtEyS8GM2rnUhCyiPYrntxUL4MU8do9jdfnE4zN6",
  "key4": "5APDoqdBRW4nSEDVgRRYJDMLrpecNj8cG5wRRmY78jHmUHdP4SQHoZKA7PddQKWJ6UE6LhYmcc9NPEMcdvTETHSp",
  "key5": "jmH9zzXATSQn289gNkPBubutoA8DkxXvbrjewvkVzbJE2HT6JBhpcDgT6QJZx9FATUFGye4SZwMbx3u7pGw3uxz",
  "key6": "5otssEva3jy5mSjZtLvxEecBUZ43EWPAFefzaRrNdiDbgvwVpb3PNp2Nv34czGmCW3kN7QsSRrq4EUDCYYWNX1DU",
  "key7": "2FQxF4dEYGX3hZnkTwQnfAs8Ato9jyxcjK8hoaxoNbEaSjyspLj1oFPFX4kpobTQTxRNGYW9BRMmat3nNVb4PJ2u",
  "key8": "64atyT5df2H55TcCX9F7mr5MXg99kERMP1eTUjDSsu7VyetVCQ4D65FJ9nRyCDkLvKd7dufhSwKZ34txVJv4y5Ag",
  "key9": "3oZrYSJKeJ4CGrkt3cCFYeFya3f8ZGCkCLP3KecX973guHH6QEsUoDygbf1WFZtcFipNahuKSrbVFkpMC4BAenbu",
  "key10": "Yr21geCiHf2S8TCafcwRnfk37e8ygoH9TWZ15CCLcBR4wAbpLdpBg3xDzD53nxugz6LFKMsAHmELa1oyKCzZE9N",
  "key11": "3Z6LerveGYDRdVa7MhuovH8RVP4Bhq6z5oiuEQBz8dhVw87ewxDttF6ceUdvR5YWejZeukLijjiGhVo4V4v12z2T",
  "key12": "2j1xXEqSpC76mHgaiJ1BMwj9s48xQJjvhy82zekKpBMWDXQso7n7HKQBxHNdovcmD1sormErpWxTkd2bxJExULWH",
  "key13": "h28huG4jD1PMrqYWQdagYNhCU9WiBkFCNkYjQSoAXfzpxJLfwoYPEUYWtnmFdhp28Hs2LWYHtAFqPJqXtnj5AW6",
  "key14": "56QFCCotkpgwxa7q8faqLCHzbc2CbTFHYxxqJe1A3GasNr9h9AcL7V9QUQMq25WH2ckw9VmH1f6TJf8kgrtKpQZc",
  "key15": "3bZBCLNMmhgTmnXyzK1RPCNSfvJrJcxGZM72UEBgFdY4DkTpbfVs2MKWTQJCtSRDNU1CLKPsPwrXjubacmt3yufu",
  "key16": "3pKxXbrYyhn6vupzubamMzBgwot81dX5DZ5SoCjuUsC6fEgTMiGQQ4BAaSxYVGC1LGF64mJH5tLYNcCGCG3pd6q",
  "key17": "BzCTGAWtxz9enq5aFxAunNYdCSP4iAVibp3ePmQQN5BwkqzSRDfBbK4LTA7LAKHbDUYpb8kfLtdgTsFF7XnsFvS",
  "key18": "5sbKqjGEwg725ViVX74kg3MjTcvAp7d87Ka94KttykKwZpbmsjnLf4a3h96HkGPX34Kp8ZQK8XxtogEjCvNg9sdX",
  "key19": "4jJJfqmtiUydkuszQaVj2WKnzGVga7B1MbjRiU8wXcCqAAkcSCcZpHu8nUACA5kiTuAoz76Uwp78Y71AUH2Jbe4j",
  "key20": "5TEBY4J1GQYamakAvkwzWSsnW8BEsdGNDD2f9sQKQUkHFEhZtiXvzqRiNA15Ju5hTKCNWuqBk1cZnvJMyKNqemrD",
  "key21": "3pcLPMawW8guXwNnd3vPbqvSziGKbh7E6zy37um4o46s9YU4Ez1JnYb5tBN2udjrvp2y9Sq6ri1w59tc4k3aj3P4",
  "key22": "4mcwt8tMUkVq5vi2SQLonkefjEziXDfXCNWPS9poSotjV7KgaTxrh16XL1YHeW74QsVwiG39gWoVNRBKkq5ocDty",
  "key23": "2zt6FZCaePqG1Jmh2nT2XMh37xEAz9bKP1HmmE9VChk9E7sHZLaKhgV3ucekBEaDQdysd1uL3CSq5RDPUScCKGv1",
  "key24": "3t7D6YmQNm4hsFiPAmKSGC8M9Yr2pvJbZzwqCd6UYgJVZ5LT8wzsTcnEvJvakPmyud9VUxGNyepwVd25LKjn2vSi",
  "key25": "oxKcRrP38fGmN3QC4tdXN7Kh69vT7hVqS4yCMa65n9bRSxNtNKKahB9AA2uAJ5QfHYJGraiCrPrgk5xjgip4Wde",
  "key26": "3Q9CYfcLrDfJ1YAVakR7wZDsS5QzBXgasePLw9dmqCmCrveseDz4M8yu49mnmrS2YfQKBfxJ5mFjFVrGj6f1yxCt",
  "key27": "2TKhWeqjFJNB2Sai6uYJRxe7JMYcMiULncxrFVYKoW7pQWMviciBwmupgTEpUXu1xT5DC8DaNVcCeEEMPJYwqFXd",
  "key28": "3YEmUNPxcw7D21shhA7bTE38W8fxoL4fNdjSahbmT9Ek5LxbaQHiaSDCAWmKGepwD7prkPx5uZpiXzShoFUQoDu4",
  "key29": "5oWENmXFzDDBPuz4aZg1qwhFXe4Sx76iPzo5RmYGPqsHxhDH7A6xasyxL8aUKqaNQrgbMkKoyq9hWZxTiH5as2w2",
  "key30": "5XoopbUmMFKh9MJrRgkuXGpN9eyZwGRPs9zAqRSi99Kr38MLyukaqHTd88dqTL6hf8Mt6pXKFSJACnprtUpQkpbf",
  "key31": "2geRtqas8XX9piSgKP28LC2x3EGuXfaUra2n3K5YPsGVFQykQ2oJKJe7nQsmvN9A1sHFRmunTXuDSP25yKCEiiGm",
  "key32": "565LEJC3PKp48GBZTtq7WKJ3yb7ANViYXeALM24XaRs8qhfqD1SHE1SBvpvNfojzSSF93bSwtnvkeG9bbujM5mZY",
  "key33": "3Zu9Z5GvE83Yih1NDBAynuCe2nmCSv2Y6Zy6Ps4nUDfKciRzcNJL5ZgpwVft3YZJoPrtyVpBGt2rRaNWnhTGJpQa",
  "key34": "4JcqiBNbxsiHoCpfpGHUGveWpv3x5RbjxfPqBTLd17CwDpF91RpKkrHLJqj7hgBn4jFj1ExjRLfVEnfV8PVVvTnw",
  "key35": "5dmoUcKhqNi6SCBEF2d8k2JoQacdDj2qVt1S79u1aC7geJeaSF7BgZJ6zbW4JNLw53UpXXsMrZtDJoYnBG5RjDHt",
  "key36": "Azn5UdpQ7Jg49ih35GyHx7ugv9ndkanAhUqRoRwQAnTH39C3QLVLSPPVqxR5hdeGXPhukiCXUMgm4yAyPwE2HeC",
  "key37": "2dgpnWu23UM5dBZnGcM3XHsCiMDuuLJNDP86L7pa9vGHAuLbKjbpFn5HjSHqDz2EMbCKuXuebpB49bZ2X9j7JQnF",
  "key38": "2bPziXG6e5g4DFcbmAWTLBaff7CEevVvt9T2RaVbY6XCxbKzv5uM7ZQw1PLm7V1nUifN45nt5hVhQZTPkkKR754H",
  "key39": "3X1pT2rf1sKoXh4ZmY4d95wDtr5VSGLsJa6qBseK189YSxeoT5s2RhuhYM6g4jLjFCigihuoT5YSTkibdFow2W33",
  "key40": "65p271zyJygcy5KmiCwcgr7JPWDUVcYEjjyEx23qf3FpushtcPosvQZ9m7oViD5h5Lq2fuPC5bdrWrW3EppMsg6H",
  "key41": "5qm4vanbYSBP5Rp7HnDUvTyb741twGkC7yTuNMxwbcmku25SGd1dxtVW9DaNe31Hk6o4ne959wr62TXvmJDu1BXk",
  "key42": "2XUFYSztHxen5Fgpf1mzFXMvvUt63MLKRHxHARTAMPGH4RYyqoE2C3BZ6HGJEc3G5RU9KSCbcxHHmQAoZExM8aHE",
  "key43": "pr91pFg7qHJbGwwWGJjYwE4P2va2oCYq6tVL9BZA5bV3Ejw5Eg3ewYNZUkzvk1JojFCXtJ9uzVPn1SMwcbQZTau",
  "key44": "2gLw6LJaSTU7RsGhhrcysaJAtaEqmGR5T99bHYnQsotyawBuDLfnGrLf9mjoD3TDeHm2wnmVYxQJqykcSXS7Wrb9",
  "key45": "34RYxEMhMnpY46rTi7BTc5vEKM9NrrWJMorXCXoVJPVutJ3cWh7x8eGmPgzp6XQoWq87zaCe2jzpstoRKoEaEXa9",
  "key46": "5erpqmBsxYCeu2F4omjZwmmS8fTSoabk4LRAYgXMHo1BLsjYK4GLSsWNyxXFuEsYbw23iq5TPJMLCpvV21E4TkiY",
  "key47": "2nV7B9vUCK1HvSc9yLRGLJwTVKH7sJLujfyyp2Btgo71c2NZ6omgQrEDQW2L2cVDnT5jSwH2YUkvhEV2EWvECXu"
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
