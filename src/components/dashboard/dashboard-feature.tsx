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
    "2caFEKA9ga3rRd6dtZLFVSDq7U11arFpRFx57DfPxnRNtVv3E4gL9SSbNMeqRDmJgDcK7z5bA9uHvVQBJbn2xEZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DNjkUEypYKPEb3nmZjhydBmTLS26syNWTt3rt15CL6sWLyZNT4RLGBHDLk1FXVVvTQMdNV7D6LMkNWvuLeqRMUb",
  "key1": "4MB7DBYWdPVdUdZuhzu6yKHcCxKWykYog5axhkgX698hvuMJqutsxSMLHvQQuzPLNzfSnrpceeYAR6hux77u5un6",
  "key2": "36PbFjwMw7dQikQ74gGwkXK9rphWRaU86Y6nmPKaBaztGhFoRdskSFaLUMTbamYkZhHWCML5cGTn92tWmAicgipo",
  "key3": "4ShhiBzgkWmy1ULfjsjW2B7bLV7NvDCbg9buotW7KvK6B5kuXjFRt675QuM9qyvrcowHL7J4VLp4YQhpfeK7zfqC",
  "key4": "3vuSft6EcLvHZLFRDpWiwYJHcE9e6sDSshKxMc49wsjrXjA1UU6Q9ufeDJ31e8nCwuCQ5qJJW65MjiHUiyGQFHKT",
  "key5": "3qTpEVFLKbnEGJfjpcdW8TmjTrZf1EtdeJnZtuXxYCvkJa1i994Km4pBnsYpkANnFGDApUFaVgQTo3kL3q4K2A3d",
  "key6": "5Z2RLFGC3nGXt69P2WN2bXRXKVPPnJyCB4HgqEMobtZUAmSYzL8QF2pkYZTDqzwpBWCqmg6bui1YrPNHxWVzgnMX",
  "key7": "49GJAdemqqA5qdTBKodo6AgF8bwdH42T8FQrRk6dH356xUfEwN5NoFhTVeZymLFvPBrh3LFbJi6h6XJH3QyUMX8i",
  "key8": "YjcN44mEHoQzVjPYPaqFxirSc26MqvwqeEb8EeJo1noJbeXWCLcyX2JED2wZ5itZWzgjHZ7ddtELh5pYGhJKP2n",
  "key9": "43axx2cbNxjW28DR9HHHmJCgK6S94TVPk2BemW8n28gGT38tnQkCDua47Kvh9nCS8dhY8NDFTSqPu47gLPjTuUHs",
  "key10": "q827wa6J4UsZXn2inGAiawJaNThvV4PvQ24TaDPtuHpi1J1rYZRhZLEa86i9ih8XTKj8hoRTs4isDBr7xDC8Rp6",
  "key11": "5jKQmaKaWWmvBqxJ4gFYeMrxVcxNbQ7W8PqtL1pMGggw8d5r6CB3JEanSqinbgDnziU47xLAzB8pHQYhtQBixSZi",
  "key12": "5AGc5saGbv4pxTfjrzmAGohHDnAyA7WrKUB2qAHk7nzMHZS7yj5xt3rtxSHNq6Tu3RKMWD4AyYTmgW9GKk6MD6K7",
  "key13": "5noc9MCDHqsR7eZ4xakBYcdPDnyGN7ujvWiBGPkdoRqqu3cLxzE2FDAUXqmmwoR8UPLEtMXQ2xYTLtFufQP4QTQe",
  "key14": "5DS4P5KxZq3CNC4m8C47GxaPnonBnqwZEatMJL13HgK71oEhvPbY98sfX9fkYyum53pjKw82MNBenAQidzar3zWq",
  "key15": "df9JiCduuhG5EGf5nLZeABfZuUAej5GqD8iRUBR9KJmhcYrvYadZ5LApHxgGSEV3PQ7wnFWaxNgHVXSRsKG6cnq",
  "key16": "338ogGfwMHkd4jKAQ2Am1Pk8rpjc8WQcgVZdsKYNPzD1ndm8D7UJhwrW1MW2T9KHgdKR5xXxruJeRji3D6N7msyt",
  "key17": "4HzCGgo6XJiJGYQ2cBKWHVn7ZADWG6Smd7SrghvG4sVDdPosfvFn1Sfneq8Esj84VFynwQRreZP38zX9Md3y8jZV",
  "key18": "5f85HJncK2Cw9jziKorb7NW8YRpYg9XfJGdg5M1QiSCKr68nPaZD9gpCMhKTAybhBEUincjuYy4qMfya8ruXd4X5",
  "key19": "4j1ghM5kdArrsPTH2C68ZfQ6S6L82QhDgBw3JxKzUV5mKcw6oRaPLgeL4VKzihdfSJvbcqTZSRJbXZj2DHwbLdqR",
  "key20": "2G5J1bgtBzgsqEUVqPDE23eyHAPV7KmfrPvyqfpj2epZQLNfkdF4EuJPYFHyJNvQMkWnv3LH9ehGhPcD4eNoLejq",
  "key21": "4jpnErG2oDNK6pSkiEwg7qW1J8BQXFWD9DKLBkpsoXFXHRyrcBh38ot7Prrr13Q2wdKWrN84a4kXbfU5uJesk3Jd",
  "key22": "5B3fkm34wvK78wiUNSNnzDRzA7c93CM2NWmLr3z3iC1WW4nHu69W4zZJcxfcGuRUP5PA9evKN6oHHYmy5mRG7fgT",
  "key23": "GV5LDNHe1ZTjYZUtVDPuc873nZ4cWXAmuMn59zi2f1SkJtC2BE7iMLBetUDVfZZxp6ekgDYHDW6yfR8UXpzwUi9",
  "key24": "4eAtM16qkGgc1fWwpcn3eU62HrxpCNi9aeFtiZJLoooUFjT7E4mvyM3s3tBqeHBdFq3GNptziGVAuK85pdNcuwMF",
  "key25": "2pgF9crb9n9FzJmSMp7M3d9gUKvzsYJNjrtyemGmouoUhwm9QT6yLb7KuBhxmg7TFS5aMSD9FVJ8BF4vKfVsyoqk",
  "key26": "3ghuhpEhxAbUtFibwxm5SkzxVa2LqcBEsmbT6VrLykgJKMSUkFaGbe1tQRxoGMW6yd1uLgxsRnBX1fdHVXyNAFDs",
  "key27": "5YM71M85LQRXsQUTX6Ao1KuDbbKC3ZJN2efMHrvatqMxcaedYhFkeMeojuuVeHpUHQN4r7twT8yW9BwWngosy3UR",
  "key28": "55Psvy6KYdjU1wtKqkmVe34BwGkCPQQYgZw34Nfc9AfYzB2ofT2zdWizTtsRxoS2dXUXzDTrpi5QojjBQVZWVXV8",
  "key29": "4UWTkyEcEsSLRgVeLnVjpiaurYvP11Pmt478bCPuKm5ayDM91FXBdE7tYxdSSaQkiizwncoig1vb6tfV9MV8n5Yd",
  "key30": "3oKxw6xHHmm7kQTYrR2iFKVArrAgijiuJpHFcDiaDKy98T45ph7dF2TspSFrSsH7SNWhQcNzNT7zhRBcdoP5eA27",
  "key31": "4Xrnt6ZccU47KEMM8Tq9o2nF7vAvhTrGj596Z5RidARu8cf9mMYs9Z8TpZeCPvNLfiWsmbiGN4XC97ByjFF9ksMq",
  "key32": "2RAeFhtkpGseP6qPgsnMp2et77wjUBgNcaNtFi5HdCroGNgYio83Wk2qfudD6Va8bzH3DS8fF5juuuBjC57x7uxw",
  "key33": "po7rytfW7sP7JeZhUYUJidWgHLPCfMrhyHvPWK2i7fVgjuu9jeazoFusMJMqLnePUA9v4nVpEkSBMCWhX8rKX6p",
  "key34": "44EhHXKNHSPXju1N9m2cUJ5H4UqUocjLoKvtGERpHYVeFKJ5ni1Mw9rbHE7gZnxuMP5PPXzddrUgcSFkbdCMtrXx",
  "key35": "3NuU98CRTzNXLH4is5FRHLRwkfZj1zZJnkphahK2Kndb7BMoKiGzZVG6RpHGKq8ivtrbpnryCRHkb85oZSFBEqwJ",
  "key36": "5EmNCjej1Ntio9WrM3V9arYWBAvsSZQNJCGNFEZHTjVa5c5UNAtGBERrRrsf9edKw3ygd9xWsBwAPoFEKnr91siv",
  "key37": "cvbu5E9VTCAQgNddfsMhMtNBXiAHuqN59YfxrXG7VuH3GEiQPEPDohJ9RB8GNWZwg3i4bMbWb61P7RTCxMDtjip",
  "key38": "s196TRAYgQUZZ8Z9AZu9HkUpAqQBARV32dgrNEsMnr3BSyxZjybBa3MttxHq52KW3wkKWepyMdtbkVDBfkX3BoR",
  "key39": "3GEsRmAKHXTzhscBGGK3EHfu2nu1ZWyTL7oZZCDdh294Jj1DJ8eCy2mZ68XBUsecsfFyp3SbZdakRaXux73Bwkv6",
  "key40": "2PnnaarbXhpipZmVHp7uF5WKagcYC8qMbbsm1ah2z3ymgA75J8cD7tjZrrHdpiqgk6S9EppAzJ1ehmtDESa9WQw9",
  "key41": "nwfGrR2MSYDtxJHUSVLxhNkn8ZqHL7YJyi6DHDv3q4TWZPKr9hzS9NxUqnNAniTSfigFRpEFywFdvFvvifDExjU",
  "key42": "632nz7PEJ8zn4798jo4QzBoPSeZXiv9TiZhgJ7NyzEEsgzwuGQYUQ4QBXijKpNVMjbbdr5sneBu45ejyvpxWtwWS",
  "key43": "2EyAoLTcMp1BC5t4ckTcryvauyrLcGoYgSptH7ocp4CvzBHFKuy4frArYMnwFdcNMK6KmyEn2Hpb2CAzvc1aPKDq",
  "key44": "5MkFHGw6BUH5sWnct1ZsUrp4E2wVhKPMMAtURAXwLrbkmgJ5GV4SGRDaFuPF8ZvqQaD9NhX5uoFQiahB5YMJbVfm",
  "key45": "52GjdNEernzda5Saf8CWtmvyaXJxgwmrbHYZZBQPm4KgPhHSgVizuw8u6chLx8FBVYRiT78chqh6Kies3WBxXYtX",
  "key46": "3zoPEoUN1hGgHQN9ELYLCdhAEcdjqmsVC5GVt7hiTAsYEEwuRXB8xQcXwSicTR864RBsas6ti4KqeKH7pwPWuyHW"
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
