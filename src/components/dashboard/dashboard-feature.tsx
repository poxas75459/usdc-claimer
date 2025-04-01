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
    "4Cc7d3unMDTBKgQLnTvsQcgJ1EtCp39wWHCGYobNNQzHsmDNKkLEUjrp6aHaAHEmSwv6SKmUj9u8DveVbeD7W4qr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oXEZGu7ZSX4FCtQ8woG49AS7jagpm4htaG6uByLbNtfEh6L3gZGiabi6q6dQbiUx9d7aE3XnSppftjybFbbo7X4",
  "key1": "5U1j2ngNiyEeoeYuFFicFKxmA3m6giDumC7PSxH8daNoVhhYpukHC34MQAwVUeQ97CghnZRT5tNLu49iDDrG848U",
  "key2": "42ZZMvayWVx2qeeBA1YFqQjuP6gh9FzTxpjPHaupzDmKzMsWigjuRAoZbXtu3eiDzT1RduJa6dUFQg7EJ8Ntk8wz",
  "key3": "SQ2w92y2dMFH8iS5vAydSuhfzM68kTAdR6bo9MWV23VMWxh3uf2FU9XWWMzkvyB8CLSde58fMUhhMS32d2h2fpZ",
  "key4": "3bS9zAqzd2dNUssYcbqn9uZE6qHGjMmTjaeSBUK4gsYBvNqVWKrMdJs12sf9f1riHguwXVvj4MfozUirKJrvCTL8",
  "key5": "3dvbgyEbNJ11x2Huukhv3DCmZjb3oTmWx6i5oqNvFEG2VjUEoLukMDr8MoGbPPuwypXqpbj2SufApuRFmAiWtUHN",
  "key6": "fANQkUJawwkTfanbaEWd58Z68Yn4edFL2ZWAfrySurwHV3mHwjuJQiBEhtDKcwioSU9BcmuVc363CvPBEeC7khc",
  "key7": "5STCtqGLtUn55QtfBVsb4Cd1gZwHkiTn8ueK9XZqW9cPiEwUA8tLgkKAnRXTaNyuDuLQ5cAVhwWuj3Kys8hSmiyx",
  "key8": "3b5oD6MJZZhzTuTX5DRCe2V7bogBQv5cJwkjxEM6GfGsctVqgcQniFPJjPkYcXYnAkcTk5gR5ZsFtfBWjEc56FiX",
  "key9": "5Y44kBSTkdUjkhTNLLcrNeJfM2QREDGd7pFkTcfo1qcZoH7Kx3dMX2mdh5SaTpYc86joGfiy4MKr3U8g9KoESACU",
  "key10": "6TFAopDXKmNLE3cjsss95Dc7TEdmLDx16XVFvqu2nwc1CA4gQg6XHjj31rgyUE3bYm4Vnf1tcWFPmiUFKRxqXCe",
  "key11": "63Vd8DDJFshLvtqQHvpzuvD5bDCJJ6MNfmSSnzso5pJC6u5nRZPJ6wcAyE5or5HWdZrRooGYcJmEyktcgZNeytXs",
  "key12": "5V2c9PoefGsc1r3WzTXkc7ENXar1cZGqFWSw5FByRfRzRRth5UxNA9SbtzwzgWvzpc6ocUVtpz1fkQWEu9Hp8Xiw",
  "key13": "5d5FzXj6DAipyT4SJCgbGM27N5s1WaGc5H8TeiJdEchJK1LhcFRJRcDEi6pYzZMcqvEzfYy314MNgiVrsgY3dGPA",
  "key14": "5fwgiBizRz7NJpZjw6Rqf6uNzCeExf7WJuByngWzvzeBBdQaNzRaF81WvT4pMaACNSVRitpYEgx9qY1FMtZLVY8q",
  "key15": "3xtnWnARJq8g2HFnBdJZYxwhJ7ndX4NTd3WHjb6y3eaxmsXma4dEizCNJWTwMaicDGf1tXGAYwvs3Uw1gd3QEwpc",
  "key16": "4PqHFVmvkLBTAbCioL3e6Ju7LdAyZmbspALAbm1SuGBgreg2ZijSBrZUnma9bD6uNMakY4GvTfZZubQ7MfF9F7je",
  "key17": "2zHCZsXihjvUPZeZwomFoaXHhxRMqs6rzc8jTMG3nmVjPNHwN91EAWT3Xq4qazujTMuf7Qi9Nh9GFsHKxJYyqDFS",
  "key18": "31YQHMJJ93uvSJqbeqTfYd36paDhTAtnM1f9gB2hqMtPp2ZhcbRFePwr3cqzQySDe1anPY7SJ5deb3jtgFhV6AG9",
  "key19": "44XSSL2dVjspqGMXEkFyBJo87MeKCx1MJES8WBF1KBgpaYjt1YAJYh1XDTdLfnepYF2WB3V2WXDqvTmyBRNhJZ2b",
  "key20": "2jQ7JpSqdH48Pp3tu95xkHwr68uC882a8JvKTtDz8JTycByiTFMMd4GKzN44WXj6sL3PcScs1bB5pQGubDe2xyes",
  "key21": "58nxMxagmtSvtEd3C7YkRM2DqRiQCj17o8p9kfYVp96nDxGR7NzzL1s6Sd67cMcAcaDLwsj3RcWo8vT4CtDqHR3U",
  "key22": "LYZcMGUDBkSCwm4QGVw9o6HsS33xesPdwVyoK4NEKUYErRHrpKKpZib4wk3kMJA3xmaTSEaNkGL438Gfp9MHBio",
  "key23": "3hcxXPrZfCSHCb7myrTBFDGQGDb1XjG5XEDAdXWnZSZtkyBvKFqBRYEqYavHiNxyssMT4PY5hz2roookyVsM1rCa",
  "key24": "5nDuRyNkFPRyXPqxVT2AQpAWgXpmHTQoinrkkjx1psvn47JWSY1BQmSUPDaDnh3tGAgxuxA3CdEWGJAEmuTyk5Tj",
  "key25": "4LdABU9V1k99DUVEcs7386hjBZ5EKmpkzfJ7CASoeJrVDdGu4HGQxLKGtF28ELxJFbkK8sjCLiCvTQWsMj57P1cs",
  "key26": "AyVQw7J5MGDtjpyDK6qoAwMpcnCLGUSoKPdHB1zVKEs2EEJ5xzkqV5nSsbMD85gCdLAcoPr7AaxjbhNqJr4i4F3",
  "key27": "2EaSoJoXWeuZvXj9LYDvJagVSkaTyTFjSLuUCdnBBVJPaPydN9NAfXCsEnmtqc9WdAckKmzRwkrQvGUdU8ea3nM7",
  "key28": "2rbRqVMBQirmzr23P1VostfQL9oeYvj2dcoLWG39BKoKgJF7JiXgBs7cKTm2o3g5314bnJxiuT3VxyaQ9kvrUGeG",
  "key29": "3zJeLuyZbHXiXkRF6ETYGr4nezLUcq1ZKtcPf7KzVmtKtk7o2KagrzLDDNgwEQup1ycxVSt3SnjjfiG8ZFRqWH46",
  "key30": "5PgAVJKqWDJHNBKHduRiCAgGdX6dGmUcsipsMSKnpn8b8AAJT3KKBecRqfCwVjQdvBTPqm9fp1Wo2U55ev79xDSE",
  "key31": "4PqVhauUF6Y96LEN2hnxd7YdZB3kdWUoJktD8wCZZgNpndENkQJp3cgHwcukYCfcDfmxVygqnN5VNZQeS1SZR3Co",
  "key32": "xMwNifQ4UsPsMaF65kUC3YotNb71GCfMrxfo4WShauTCG4gN538q7UboeQDGUKqgCM7VxUEvm1ZRgHQEseSt5sM",
  "key33": "4Np9Hw7GeePFy4Yp6DtCwxoTEY1AiHLr5AanoVvWJEdT5bueaxc8J53po3JuQAvpBpB8GMuq4izJRNqK12mHChvp",
  "key34": "37YtSbiRb61xiQ4wavpdPJ8Lhv6DGsodxhECaEExgsgotCnQJZ2yWPskgksohFEwT8ntFEDxAS6LUXvJSp1mvEDX",
  "key35": "hpQEGCrhT2wxXUBZXLcztmuSDWPu2MGt5YcPNUfb2ZCThYpfZJ2UKkVg53Xb78jYXPSENEqKRN6Zb9pjEd4z6qS",
  "key36": "5RJBHbAvkUuaTp267WP4PrgkWxJTGSikcMuneYCY4NoEvq7bcpu2dud6XkYugFRtn3S8JNcU84oVX5skni1EjwHz"
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
