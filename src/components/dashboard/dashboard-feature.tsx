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
    "4664vbYeGvCS7d1ZYfabo8smTVWhXTseoRpgQGN4PCZBYbDJHv9CWBEx35JGXWZMMAnpfagFxPrFgK1KJJX1Cd1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hjvjmWHQJkpdLiSL68HZWdcTjpSNUjzZcNjsYhQe9LFMXNHFQL8XYSUJTcHp6EdQPbniKNoeHZuTjNgTpK5LaRY",
  "key1": "3ybY6SbC9TyDhNVfWHod5yKGxhipxRLrMLWLyBABu3ic1s7VRstmN3KYUc9ejSW9kQrF4MPkVFzbMHizfDDY2MrT",
  "key2": "27LPN2zYfG6QERfAbMxPPMQiqJuzSABv1csfSpnuwHwrZK8nDbsDHeQ5QtK9vGeYoZcDbWYpa7HSxN19CRNNtDWi",
  "key3": "drdPc2yhSXU2ZAYUPQLJtATf1Ewq6hjXRfH6zXH48wv45J3qW2jdjbFhhFTPsY89xfsKUq51BrgKYL4P8M8Nyb2",
  "key4": "4Dm35odHBzFBVDmjeKVRE3ryHsSgvRJfGMrb8guzz1JDGASu9pHAt1fJyzwU1sRFnB6UHa5uktX4EJ8zRGryQCAN",
  "key5": "Cz2czmWZKcHsTGHNbsGz7vrCm6tT6RokmuGfi6YWG1k6hKEZsvWWxkeo5yAT5hT6xiifdSDPBjXs37hNPp8XfE1",
  "key6": "5Ff9cpevy4owsTzVZKbqZwQp2Ump5gPTSSrht75wbK9gEEHLbo4kGP4rn58zZBYTpoxdcY5axJxVHPdGTG7JZw7j",
  "key7": "2UiK5ANZpKZHkRuKiRQGCVrxRurgdjJkqrxXQ9rKipD3NDmcHnVX97TaLDQYizbGXRDAt23mpZetaf8yj3rGmv35",
  "key8": "3DSvJwdFKWpPGm5VFbFZevg6kDVL5z4HhSJbii3B4iu5C3NHR7je533WzTMRMwsnw75NYhSTjHrh39f8UZ7JX1m8",
  "key9": "5hYJB96WVeuz2AJgrxokREKYDfw5MLvDKQVa6Ch6cjyMGatxudpg4CRRz9aNK8mGt6xqqWtSnJ2Ld4x1J1ExuWvw",
  "key10": "maAygWbJbT51ttgJBS69jpNnRJpc4rp8exMMs7uQGA6PN4djCKqz8vaNEgJ9aWnXYqrkmZkjPDtJRuWnqVBV9Sk",
  "key11": "2FAuD6MrgkTUGyoN7QEPgmQWj8T53NWUfR54S9YRPDs4CoS1nqU7DJxaLwHBhxriGXgkfAMbg1N8WTFY9Lc1ehcR",
  "key12": "TfsZJu3xE57pJZ242atNFsWcGKWvTrU9QFXEBpVxB49muWhzGgybTPPF4bVec54KR6MM6mfSWSnjRpA891qeJY7",
  "key13": "aus4FhkiwiEB8ofzNqDNqz6Qs71H6ippZoK7GzzgVv6qgyGT5Pwq7FoSvCXrAgBG3Ryxmq4gRRogjyxsbWamQry",
  "key14": "4yZBfKNnGzhyQDUNDnB2wot5bdJmcM4kZwvqJG5qqCsM6n3x26nTecjWE4qCYT1UTD4iyaTqTRo1BnYY9GWRNS5Y",
  "key15": "4jMwS5HDZ9FjbAWs56sheiCoZ7d5MaxmbHbLWaQzspHpNigsfagmH31XbtFCVARWdEHHNAdRm2DQ6ZKUZZt2HMCh",
  "key16": "Jq2M9hm8GPgmA4tF4e14jHPVnMgARMMxGKfKPpBKMUmGSzLvkysPfDqerxXUNiSqRLtT1D8cRcTh3bDTTdP3vnH",
  "key17": "2cfigzhwcuXXVLtNApdZiERsqVRZEnuSUMLsCa3KhGbDvbNs3Hc6nGvfmkkobv6o87anbX2wt5eDfAcetGK5pp5j",
  "key18": "4ouY52DAHkDtcr2tDXWTzkaF6wYM7hy3LKKr35KDLXkBkEvxVa8QLgM3Zpd2C9iizCB7RCpZNtVvA9bLyUieKstG",
  "key19": "5aNDMuZakxrwJGsZBkTM16NTr9foLQuZELYvmN7CYg2S6Tm8CWovdZbXgSCm1PjXsTT6r4w7uwUtpPwKQCTYpQ5v",
  "key20": "4rtH7RhhRazJs3yNG6xyzKyCuxJRG7o12TuqG3pJVN9pDqkV2thjFq1GRr6vDNwYKAVB56XzEPwschkHEqMfE4i1",
  "key21": "3qgKBcTZ4sCaKEC82DDLX8E9s6MXxiB6JVncXNuBgFM1b5kaJE4rLobFy1eFaFtCU79w1yYsFGRFsdb3ivsSztYt",
  "key22": "45jAPKpbWXqdSVvFVYqDH27HScCRc8nGsP8H6RveBQYHL74EwBkFyycrVstKij8gSPd4jjTRTG9oQ5Bmc3fVj8SD",
  "key23": "3q4WNotaFc96dEg52H2yMCagaTCaBYUzWHsseq3Yx5FnXEoAwFtXBxzubhhqxY4y1eRC8CLEw2PPRonfhvLvahuK",
  "key24": "4n6Bhos55UE1xuasDq9M1yLS2PhF9hqF8CAQANpVcryzikBq81mkzPSw9b6BCCWRKMeBiMZRrtNaX2ccPAer7742",
  "key25": "2b5duVD6gatsN52hmGBkwWYoF4jxViNXqu8HbBfd9q4LyX3EQo2yxWSQW8TKkr75sqVyfaPjpbSxq6ieQVrxrfka",
  "key26": "41NruSroEkKJZGuG5KThnn5c6g9gok6XrAC6Y1MpZDXW3szSvAWV58BqfVYSHdhZxh7G4Z5huYoYehevwBSZ2C2V",
  "key27": "4vY6CEXczy26oMFfQbb9huBjkXjM9iusj4EJq4dfJGjGhBPT2Xo42UviKhhBrZGD12gGdJjMxJiU6sfZepdbWEmE",
  "key28": "y6HBZ85YUAqLSgmn454ycvgSUWG7dxLLFYH9zDsxFvbCHqJzKLWF6PCqoDQEEch1uuonR6mtgWzUmda3yC57oud",
  "key29": "3kmeKiEPTdF9K3D5mnznk54ns9yGeFe94wW98s7rCgWPssRWD9SayUXwgjgnu1LunQ3oP8JHiShgqXpf7ZdKCrva",
  "key30": "2vNgdcB6tPYmydejAcF5SgJiy2AdYKRKENTku7gzTKiTf6WyFD9sYusZGjAFwMZ5EuK7uvKV4Xvtbzg2psMicfVD",
  "key31": "3YvUBC4aXhwyWeU5RSme7uKaAAXzboT3j5bAzuSVqtptqJTZ8ArLoVZVgTt881m8GDCsivt27vHheF3Rjk6zBxn3"
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
