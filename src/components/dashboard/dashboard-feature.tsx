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
    "cFgLEWTCGBez67apyBQVGdrxY5vmMxRDe2smYxMBdpD6VsrNBvemADz5TyybG6RRukia2LzxxW2XGGS1LzYCBM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5waRnzKstMGPi8ZC5tEzedYm4o54HbJMJYr7YATnW7Pt3hw1NfG5TV2K91FqptaFxK6EkHP3TkFvLxTyoAqVsnd7",
  "key1": "5LJ7Kf8unEf2VN2qq7iiw68xM9GqFWLuHZQBM8i2CTNK3iix3E3MdHKq6gcWRzfF8Ft7k8Apvu9BdDeLzR4HKGzG",
  "key2": "3M4aohwhnp2ML8iP6zYiET2ZAFHVUxnNZwpeH6yBxdfAFL1ZbeEhQa9PvGeS9rfQ9AMTfDwuGr1BYaiGgsu3vXon",
  "key3": "3kCCTkyhjWXQjdCzF5DXJE8HxfhFLusCdr4FfDTxAMCyxxqL9UCXycBA7ptB8F5Hen7aEKNSSHKXRpzHP6gASBq5",
  "key4": "3FnEuomzngJaR95pNRV44dnFU8VX3BgmmWpHRcUA2fJCEBCVurTzQQFmWihTnUUfTcdApUnt2siuvk9Y8Vt6VrAc",
  "key5": "2cQZTZeT8s1HtA64WVYE2LZ6NmhDC7LxByqchFGUbXqiR6bqPg3j7m2irQwoYf7TKSuUiQ6ueeqWyzoGNPjTHh4Y",
  "key6": "5HcjMeBjaqQ6B8yLgSCYcJTTxLatyrBGU7w5QN1ZFszeWAe3GgMKEhAm86X5AKxCvh4h2vfJdbe13qWHGuisUaw",
  "key7": "2U6GcNM6FHnSPtJqUHUzv5YzGi34G2ABDnibtmt2pdQrkMggJBpb5SDnVgr9h8dc1MuqKzLvcXmwW4K8v3EUB3Rv",
  "key8": "2j8MMUQb2hnNgdB52CGvDehnYTausgx9c2jzcRFq7sFQkbnHKXXBmfWqr8SXVSWGdNuH56HeNBv14tWXMAaCJPkj",
  "key9": "5SJnq6Uk9zCWR949YU626hGCcwfan9M3E9szz1VeJzFnahVmFNPRdPYvcQDQjWWc4AuMtHhfXwdXca5qWLsNvZtF",
  "key10": "55W7vEbzSYzmgwgvvWpH2W4iphhysaD4RqWEcBQnjofdZVRrWRccU8m3ek3fGmdMNKg7g4MPBvVrZunNsN9h9uN6",
  "key11": "2X8gbzuFFVg7tbYXCN8NTYgX6VXGGXTVteHfvLjQXd3ivx19JwMH8UJvjTSu2tfeGGMmwDshweVXPc1y6D5ea7ff",
  "key12": "63HGgvz5asPWApA3gVDEN6DH4xzF4CmBVEdLEdsnPJcAvYpXBTReuzpqq1QGfKb8sF7F7TnKc2febEqNoD2UyzDA",
  "key13": "3zFkvZw1L3NgyMBsZwG8rm4k7UucUWfpBHfkb2bQpiWfF3cx8gDwbg7E7HiGv5HmkcvyfVVVgTfYFrn8SLxhF2mG",
  "key14": "5ReYCVcXEtuo3NSRjpQbB4CMXwy88xo6dbhRs4Y62VoMNaW3ckwxqNTvq15CCp2Wuqv5urcsUW5kKRX9RXtpdugi",
  "key15": "vz4jBCwso2X4Nr7Z7HjrQK4PMUhHMaVADYPrwhFzab98CMgq5MdYF4cQut5WTknZF38khvRpZYTBmoca3uyX4cF",
  "key16": "47LDpXDHPw1cF85Av9c2g4wEVDwGnmB6szUQSzLAzxq8iHoc1Krw96RVXSCPDcZsamfCbtf5voUF5RTzQhKYnrDy",
  "key17": "5zT2bJetMoL9F3H2MKEFQEx1pHuzfAJXM4nJ3dMXUFY3H1RvtpDb1vx77Y5aZrA6VU9NVPnvFDBkYPzfVpXutbeu",
  "key18": "3WLkBWgehpSc6u6jRKYm4wf4bLtncCvzJzukV9mvwLrYSyN62eDci7eGUYvaHtgS3UxRVKK1YwjTweFZAEcufpH9",
  "key19": "nThj9UZMLCLHtyjaVNxpbXm9SyLN7XS92JYsTPqkouTd6okS9NuyTqGX5HfcpjTtHHtn1XKWTRH27nHgyj8AeRt",
  "key20": "5M8JbKjJNEmCHsq3T2z5msYUJtJKGhrUiTSN91P4NxQZiZxMrWKs9jGTcdGnceMYu6fSy4zcRCa7tSH4TQsCJE7e",
  "key21": "3eVyDimNe9zfvLa8VA5tE32yVCdXKKNvgx5pP72Pi36XKXdstqKAqkZWeDikjbjnP1iTuwkXbyXGridc8aZutq6b",
  "key22": "3BWv7XLu6qmouA5tybtdN1pe3ebstnTx4f2mk3FGLJLisBh4sdWwo8ehaSZbGA53uEUtg2czTRYEPkwexr63SMtd",
  "key23": "2o2YF6GALmw8kDkvWoXQuuzRgaXJiSfSB6LuxdjnCm5N8hemvXxmbHKgvVnT8pPFF9nXKkahiT53DCr25ip8kdVh",
  "key24": "UFk7FVj1pVDvBcMqk3HmjsbibcCVL9LpsAqw2YU9XhRoq9kpPmkkc2u9R38HzCsVMkVVnaCU53ei67BT1gPCibT",
  "key25": "5ByV2ukkvnkQti1aVxxwRBaHG5bsEeKUmmmysUEkfVgzoorVb8B41bqUu7Uarg3VELoKchN6zsYDUfpddUCUzEh5",
  "key26": "2oM5EhonnXgbjTNamKzCp8DVr3A272wyHru42tuPW59kfizsNQn7RnndxTK2UWbohvzr2dZbcMSHWpYat9CtvSGf",
  "key27": "4AHC8PyRfFq5uBw2omZdNqfSm2ka29ZnipAEvCREXuEBj8yLm78PKAgsv465Kb7wVJk23mBNzFn4gU8bZwE3tG7",
  "key28": "57yASX4xhXpUkqxfH2GjHnmijUWbjXWcpF5VKV77nFzcSpNEjzGrhPnVtj5uq2YVTTMNtgmLxWYvp3xVpRre2LSe",
  "key29": "5DLu7UQNSFujm6AnMpMN6BKR3hRaRKrjYhQUdW2BDXS5zFBS7EvURof1zwd9TJRCtr1Kmqm3Q8wEM5YxMAaArdZ9",
  "key30": "4mhbwvLkLgJho9ZZnCEkVsDxsupa89NZHmEyUSDeFM9FexqUV5FNxMmzjaQiS8aVSWhdC2cTvzqZL4znuGjpGPMV",
  "key31": "4ieXHZybwyJkU6uGrECq4enpcRw5Xogwo37WYe65GMAEBGgzrW1zpfB7ABEHw79Za6nuKkyoogedfp9VMoazEqBo",
  "key32": "41jmb4grt1XEcAp9BCQecA4GDEpjdaJc6Z5r84es8L6G5aEcKvtftW2v996vQZ1vgTCjGPb3p8QAdRcLrJdeqP28",
  "key33": "5ALco5FnpL8MVurxU1nhdBtF5y9piZkm48sCKN69QR2f7e1KrXEgnnacdd4L4ECoFEp3dJQcCBmaXP9iLsHutDuo",
  "key34": "eCvAYiWAopLfK545KLuoknwrCE7ciceJCfKhuugnCJ8X6eXNYi1VCRQHJmtK74ch16MA2fNtgTcqeydPT1bjXx2",
  "key35": "3uB65kYDjqWL9hZPWr32rHupE5F4DBnAiJxwzjQwFvfDCKLD1Sijg79gqx9NENZjkLMX8rKpPjXubhvfJ6w13VEL",
  "key36": "3pka9tvg4Uon7huGpY2xjxwGqmhYkDyvT7MuS3U6fumxZMCRGXcNgbDSx3ujUoVKpAWFm2J3fNzyrWgWcipnJgjw",
  "key37": "NG1tGh8rHnZokNoZNbhWXJeU1seAxTMhS664p1cSRuPjyRNPBXPm6efmn92jJqHGaujTG47ASJ8MUXvMb3gsRdA",
  "key38": "5UkLSd64P4NZ12CwkjE8LXVPWWJvzn1P4A6ev6VCfQeU3CeSXKVzzQPoTZMMn6CYL4n8AExC31mMmYHHRBfiBtpC",
  "key39": "3Qes6dbRYuduSifWrjyzRYyVm6ba3p21BkoXc3KLDCmjR5BevpCaZe4VXReEzeqWChGKMsJXD6Mu5NPDsvYmaQJi",
  "key40": "4WWUtZQraRm4wj4UQzfATguuEMQA3ABB5LWZvhenbhuDd1xtP1TJH2z34C3osnWryNkKPzNeZuGpbCmPJoFCmk9D",
  "key41": "5ABuyxDPA9J9ndPpxNUBDUgDnoRyFraZ6dReVgvss349o8wQBjB6u9y48utUpWdRcpwzs5fPmH5XDogbE2YV7oS8",
  "key42": "2AEJ7cUnKtJe8JAp81F5ffeNYrWUPHPAh6ds9rtWPeinqisEq3tUq6bi7AC6uk9SufjQMpdUk77Rqkhe9vX6ZjFs",
  "key43": "4vZ5ehexBNYRLxJM8RUsGZvWZ9BoRVGWiG3VSQW7QNPHp1ZaebvT2fDAuAvPoVjskJ3MkGrM2N7dysZWEsL8AcT8",
  "key44": "5FAptFPrMNSTxr6iNBAMvXQie7cGCDMjrzaZDHa22TWdHYnqJGYA8zAjhs6ojUx8bVisspdK41KXpScNYFyzFhz8",
  "key45": "Q9Ha1EWZFy8vjLsrkeHVh6DC6ShWLd7ogwoTLCKUWuYXkdFd9eeUkjaDNQaj4E6v75K7GuXyVt8QiKqfXzPgNkW"
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
