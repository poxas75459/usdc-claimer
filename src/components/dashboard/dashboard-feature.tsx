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
    "2R6j5DdyBKytscKtGV8RtKdYSKfZQtAo21kF14BCScavmXeRgPMUf2qxcQFp2qjC2UNJKuDKDVyq6PT7n1X4HQLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gkkbPtAn7hGEq5JaydH7GbVAgUxRYMWk4z8E9cMdL5XjAHo3Ln1reo4Ds2zRtY4MFfRQDdd81ERzEYGnqwh5whD",
  "key1": "2VuxXzUQvPjFu513xfZL94mXMEBpvmb2UFayWLioZzjQUQKjGtUHcXRZzsS3fX6QPeREdRxYKhKqDrpZWmYrkmk2",
  "key2": "3evqXD4EzUh8rJYDRZcbeyLS5H42BufREVhnCvwK5upDQKap1UeipcwYrYpaFDsQnhGRrRig3kzieh6ZzpdYoWqe",
  "key3": "4obBiYPG1pNQQ4SEJwUHcSvdAtKHgFSmvvTPL9J352oQQhk8fvB3zYSfM2DNJ4uisLjFoUvo2ySdE6gbgHC4xHHt",
  "key4": "2K72ymRR5Gaosty38e4wLRNeYEwqotWeWrLzyoWejWHgMjHSbLssRFsGp6CqcnrBmXezC9XWGNY6JccVPQM53UkU",
  "key5": "3z4Zu4nqaF4riDLuHxbFWpMi9BSJwar3NcaBQ3mU137pqmvQqkaB2dP7Kx6Sg3jHrsmdxDAYU4VdCNtRKDxSExnE",
  "key6": "2XA3J9s2EUuG6mrKbbsPyXLVhNsW686u7yBaPJwuKkvntd35Xs2YAMEXnhrBbdR2GHdSXfeZoeJnT3f9TrCj6rX3",
  "key7": "2ZfNUbgj7LeUTk4JtSgXmKw2XTH3Y8qhXzxX6KLMZhozkavBKrhUGW2JdVbmfkAgPCRGcxespec2GQt7tssUKoYv",
  "key8": "4JB8NLXvM6bVmTv237JCP9jkjQruAdePjz3tj7Pey4rnzcw1j5TMFRAANnwQVRmHgxyGEEvUm9yPNUDo3iL4aspA",
  "key9": "5yKMkH3DAmFsiZJoAhTxwnqnR79Jc2nah5u58fxy8BUVmQfRHcSBeKEu5ubNtb3DtwGrsgEufmLahPL9U8xa9VZM",
  "key10": "h23GYtM34YaUu1jw2DJS8Gjhsdyf4TLsnpRhZkC6jcBqeCqH7z3YCzwnNwvaQztLFs5Wk9adasLQhCQjSvG2syS",
  "key11": "61jmo2jubBvxaQiq9K52t2sQUXpuFwHpNxYTn9Ax41sPGgkHTQxd6XGcGE7BPLHcfZgDCCQjQByF22SRRvaGuJ6f",
  "key12": "3cQdJTJtKVUCUhS2K66qMjB4X522WVStSuuW7WsDAg3ta6uWrakR5B9KRGxZBvgeGjoRLsyRNf7nHp8FUJ2ez4op",
  "key13": "3ukUcVF3FQv1tRjKqLANVFSmBfcCwTyceATuLonMP32b6K4BdB5P5W2rmnHxrmmuy12Vqv32qtm139wR7daS1Ctu",
  "key14": "3zTBFcudw3cLyH7tRfMVhormdMcd68oMtNLNJ8fxokuyp1g4EbMNiTMKH2TfL9hBh8AbRYpumCZxNcvDxLVdkLji",
  "key15": "37S1Zo8QRqbsdsnYHXVvDxC1GezNX9rHaTWQBLCcBW11bJWuCTEejiPyBQPPLtg2cBXn1XRQfQfqzCr1d5Zcs3JF",
  "key16": "4xCa5aR9DYWJcxZXrTSSeesX5DkYRzRg19rwGtH4y3ET1rERQRBR8RSQLLZUnhtN4zxG3RKNjC79mfpGWAstMUy8",
  "key17": "2du4jmzzFc1V2as1GiF79yt7FprSqpK2tK3ujsVErCxXWEoCEgVXCoJCaXV5sbqUnnukwpiHhqwd7EQhRaEL6oof",
  "key18": "UsWfG1KW4jMRZ3aKfE95SoHcPQ1KWgWprdqYFTLADwcq8DViHhmsBMnVMvuQn1mh4uQFVG7VuiPHF7pvYwvzshk",
  "key19": "5gyyyNxDUzTmL98XKDJiTaAk46S2eirxSCt75tozBT3kitCQFZe5W7qRfqdgfxutPskkTBGh2VGtd6MTgEk6YzpD",
  "key20": "5gTTYGjFZC24mAxWtUJzQtBd586ZwTpUZy1y8b2JGBNqKFzkaZcop87jTGcpnJMAKQsTe1XTxf92kHf7t55SiitZ",
  "key21": "3D7WguDvLJ63ahnHe6jWwEVkSgP2fuY7ckatiwKtXR8G9svBEbaVSah4yxAGm3RU2bZzKQmwkey6ashSmECNGbcV",
  "key22": "42rGvsvkKm4aCJMyPkxoZBWU3a9UC1LYcJMvU2y9f6zf8LZTVy47grsLv5DTGDYxqmcFDHLggn7u1EhEWH4zpywu",
  "key23": "3XvAiEvSqDej5UpvFPaAyTujjgT9yS1UxFLDExJeB7wUBfpdq7BJq8oEPaFNiC56SAFW4htpRwqSVxqGwXaAtpSe",
  "key24": "5QoE7QMgU4Vv5LYBcbgSmxR96ZNJpkMTg1PvV5PkJMiairTWtohivzThs9UmjGXSMm59FUWeQZm3BXBd4sKEWL76",
  "key25": "YwVjLC5y82cNNudETPZe1ypj5utzfW4ToKjKkGNwB7xDSZxBhtTjHDzEbSvpMpUGCtgSx8t3yz1EePNAcwKySpG",
  "key26": "36t4n85yN2YW3KUhSjNiRZABNCK1uU3C6mtErv3q2YHh6zno1UjifaMF2sHuj9S5vFRWrjTBWfMgarkRVtAmcxKd",
  "key27": "5CcrZAu43CSSJ6nBqMgDn7Us6JeUGF5TgaqXqhEc9rx4dhMVXrFAe2gDq3vs8AdmgtvGTdariB6mGdWoQ63NUyiN",
  "key28": "5Cz8ufCUb8enmWsGTvGbo2ox2U22aPJ9NXxx7wo5Zr9kDtaU4e8uGyNaG61BzyAvj6BUrRD4XQpRg6BrCjX9trLR",
  "key29": "33tR3aqSvznGpkaQftLY4wpnBTb9onpyjCgMTtT9sGjhRGj38Vu5xDvfk5dTF7q2CEEk3t9hgHdAaD2MncbqnRjm",
  "key30": "Xjw8shomHsAXeAfpYazsTEZtATiQLX9i4zrNACTnRb7cWeZXFxKGBWin2SKbpDonW6r7PjWBNm5q9yWeXF1Z4mE",
  "key31": "ThLXx1nR1dcUeAxN9MMPPTHCgtSqTNMfKB63bUsdcyAZwN2BEW7XQyheEXAJeDCXxxiNuZZXkKuWJbrgX2kdAuq",
  "key32": "5RsEBvMGPSYn8TgMRk2RGPnKxdN8KTVXg1NpJsLXNYy8LnUjdJvq4WQzGJqbYZskGqrsEjExSYLQAMLY6BVA9evR",
  "key33": "36onk4zTT6YxeeuHePiEF8aEX4osEnG3uzT29MrwiPocchkBdTtedw8LHp7erUdo3f5dQ9Dg1HpCi1rQ27jEF5FN",
  "key34": "2tC6AS3TyvfKZtfXUBnTFfFHWbUHczwnG62Q2evUTsbc5zJK5Ha5yVZ8atafijBhEif6aDFRBtWhDeFCVVZXxrch",
  "key35": "3QvjZPEavRXFw3frHFVQ4uPCFEjwTn3q78AHchVESw12wcgvngJH7FurX6DZkrLWg2RJoUE1sq7rhhTDaaVeKxLD",
  "key36": "4enRr7XKduAjNQU41teDHwUjZQ5pvvTKf3E6SXs6EDBULc3XGEE8DFgavaHves4vtUboBqkH1k47n7GMUeE1jZV7",
  "key37": "5Zx6n1jnzz6Nwyn89qmqz5jS2srbyawoaWQ8BCkxPCQcNnB9MfcLb9vDCYX7qmYgHekuTYUzkq6vzsKNcuaC9M45",
  "key38": "46j6T2wQ7MH7eyV6eXsx9Ts3G2MChAYq3BRVKhdrK64r8MgRnHuaW4N91qrYkYo2VZ8odsH8LQQtAG2ZMvaf6ata",
  "key39": "3kbSvd284bEQs66TQvZa4FmhUNiXzjvtfbJaTovaZZptufFoQz6aYh4EknoLAAB7umxVESe41yCHhr9zkzmHjkhy"
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
