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
    "5Zu54rbHCMW15zPxwDBW8acUx5XE3Q6PuMQc1iwUJEmETVVoQGBnYtuj21TBqxWL27wMpdqVeB7yuhmVoj7Gz9DN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31QmwqvzkbVBQV3kQhHy8JbkMKMGiWa6XwTQ2HRf882bMja1fM48gPj6V5rTa1n7XrS8c7EUyCStmL145uJGRum3",
  "key1": "2cJgTxSv8UANC1eZPpEhJf1r3qrmtwuTHdKfdUTfSEns34Zha9phhnbhPsrhmGkJU8McxWAekGg4XhvGF4F4Au1E",
  "key2": "4HgjovuZirYTW9zvSPFy56GvnrY5QigDEjmMGMvAYhJMdCqTSyEaYRFF4GdicDpNJi9zM133Neh8U5xMCY1ySjKX",
  "key3": "5DKJV6aifXNzYhZ44dP8Gddu74kBZK7PjJgeBBVtVJCh2thLhZMz9XMitwzXWpp11teQAFrYP2UobQoNr5rWBP4R",
  "key4": "45teW7G9gWbjsC7d91ERaJmAxEssDYZPFfx11L25sMaWsFasGgcFRQkwdmsrcdGJkZc5qdx8kkALLNx7zHwWn9QQ",
  "key5": "5mYekXGxW2yAs4mtdseXC4vFFaDiY697k1EpaBg2Fk6WeAux3QQjj4UcWfZTRTFeQR2E6WM7d48k27FijoR4oGLW",
  "key6": "TsqH49GNwjwvnRqBcGzcjbAjgMg8kemUfeiHUwmUYitAJ371KecBKM3S71tCDXTghTA15cEqM8bKdYekqfJ7iLX",
  "key7": "hsD9b9ceKB4dGLKZ7oKdku4GnToiC9TddtZUBCoLtNQbNCWwR85MAQNouTDNn2gTRP9giJJ2yawc2MNiZenuFJL",
  "key8": "ACTpWZoZG7s4ut2WcmawBo7HFg1pATDXJfuf1zRqTNW5t6hF5JYn2mqsytr5EkXkfyb6FGAmf1yCvY8K6iDCCmp",
  "key9": "3zWwQJuA6eCnDUpyEHaTmbhwacKgY3CwqrGW8oM1oQW4JjWhN15r4bsZsXADXBNsJuFDh3YVZLsQ6DpJp3NRJRFn",
  "key10": "5mECoQVGudBKiWyC4digUg1ZBNDPyNZVdfxDLavYGAMnutTT2PXXvJa54UA2fDNKW3KBrxUMyfxDqztc7d9oZzdg",
  "key11": "nAcMsRCrRzJvZfHUKGknDvuv5GGHRUDnvTGrXTpviEmP2gcpWUANon9hWRwNaKDQ3mv2vVzMXi81HfTsC37kf44",
  "key12": "565KhBq5n5rr1haxd9fQ4fMnCLa5Fa8q9hHgR12BZcxotVYND2B4m9A2erh7z2HtA6SnRYqz4VxEzmU1uNHoquTh",
  "key13": "4DSALuqsM3oVLnhsDEdb6PJWbPwZPfJPgJf1A2BD2NAGFLcZJUbia3W2KhPcXY9vB3FagaiKDFJ778To4Dz1pCnm",
  "key14": "53tiVWWByVjxVCipnLYNqoZ99A7wwF7bgomznpVpwiwmt38kzY29EW5S97ae5V7q16kThjjs93UWvkR1nojrucsH",
  "key15": "2KBQUHRmd6MrkjjHH1xwrP1vTcejRttPYvgmRoPYZcD2d39ucjHJeGH2MiHmVZfne4ZHpM3ij6fPkw2CNwxchHBo",
  "key16": "389UVSsjKJr9kZWgGcdyhVRsFq2CTkHo6VcWiHteYuJjt2DyaxLTt5CoSgDpudc9pj1CgddzdWw7UFGQfpDMZ2FL",
  "key17": "3mKQfgmbSHNkN4FfDEKc6U7AZL4PtcPPAHgEVGhxqKCRPvMzxQxbLWTc5mcFLmBeVKPUHPaoMWadnv12EZkCiqnP",
  "key18": "2JRoZXxarzvL5rWBmyyZyTL3EGMDzfZxfBLrZnPUpUCthxpuJFJgpN1AvtaLexAkZayX1Z9wgNMHcNwgBLJs1SFy",
  "key19": "463vwYCT4mqVAgU9C9PujG2Rbf8ZdqTfF1brsQU61rKMYCmwGWJ2k9euGigZgYP733ig4hymMAKVAokT25UcU2pG",
  "key20": "5aqnGisLH9eKkSzwaobMsnkHJ21Zk8Yz4q8M3sFqWgMyjoLpX4LywE85mqw7wsSDgms7URDNuFUgYwSZbuaxuJK9",
  "key21": "5pCPetDUHFtVfDDWCmrq2FjhzGKP4ksbdsS68umhMJ3ivZKMHpAwjMMaVZR8iqzMPcMzar6V8Q2gB8wqA7Y4b7XR",
  "key22": "3AstRY6SKU7C4GMfGpuXCJQoB5oJJjoe9br6WTBLLiGZyFRVbCTgr69Wk7LgzbmwbeRXhWTT1RNkqjjyWZGU2Nf3",
  "key23": "333RED24eBzHFjxfdEiLwmAZBiugNRagx5TVYVXSYbQbyXqThd91Zksmt2gLWV18emSXYMCz4UAzxgTCwgfiK424",
  "key24": "3vhrDQPPyYM9hN3cWfawoFkZWbRsciJmMsr4MKXzGn3fE6CC8QC6hP8dCxY9w6CrErj3rU52DYB9qEhaJAgwABS3",
  "key25": "42FQSbR2K15yeSU5zRprbAof65SUu42igiNxDSL4ox2BQ9W1TuMiP3bTbR6QReNJCYV6diZrJt7kpz2LKFGFLw3e",
  "key26": "5ycpkffh3Wmxa9FUXhewdeyEjvv16CDBWSyd5JbF5ncvDWGjDQZzUaADZnNuTUEvLxTn79GV12rmjTAYUHzyPfb9",
  "key27": "2fAsqV3TEFWdXmQ38pRt2nNEMZPR586VQwkkS3QdZfnTFufaNL9uw8kCuLiJ1xn9LbYhWfu1ePv45NFDctsVVxn",
  "key28": "2j1ZPuueKn2iE5UMWUnz1r2LMFRNGkPXfGMu63qxQ8fr9w4BV1n8JZRF82GY1TjLAbmcJ2BLMGpwbXY49JritM6u",
  "key29": "ym5vq59reoy6gnPcTbMWx4TQSoniSsgVR7MuDKYg2BgZAPs4Tmvgx5am45JxaAXf3e577jXZMqAUZRPJZwyjZvR",
  "key30": "3HFXrxHPhni7yU2tA4tmFbDc2quQdNgRu9xGbaSH4qN4AaR7WyCoRhqZm4y6piKsgnDjK5nUmTiVQ1BNzuZm6jg1",
  "key31": "2bd8uTbsQWUCYcT5fj7yKGkyeXyqcfcLF5GyU1GwxM3dtSxRiumjV1NaqFP514pQvhW1nzwoXR19JYHcWHX9hhKZ",
  "key32": "2HHUSBozGTd7uGy5vuXMvsivE259YJnsdF89qfpLjN7BVHsDBUgZWWxctU9roprwGp5WzBgKYSkP1PG83675NEkV",
  "key33": "3uHWP1bV4534Sk7cucaniRq8r2diWT3UZEoDaXEQy6DPQZyNgJQht5H13eG1w1swb99pkikv7YaqXCe2482JWDo5",
  "key34": "2AsrwJve1ErmWrPMW1YbxWVwiLux6njBSMQkvPFxNVW5Sj8Cn1odFHz76TVmqUcg5GyQgNownMnsq4RRENeWdVAH",
  "key35": "4qadVKMYnmb6Ah79zh5376jni6JMgRtk5bqYCZJkgeniHtvSWKeUWBZKRFBFuLKNwC6G3GucCZjJqC1TexSZ4kz4",
  "key36": "3j8B3umkvbGtMNwFAFS6Z4QTuS3bSAjim2iqLjWwo8YB8d9U9bt1Zof1giez36DtRnyeuLHkyYFX2m2MpZBYeRsL",
  "key37": "3akzR8pU1NkaLrxMwg6CtyrLLbiFzfyv2jdUeE7PUNQgEH8gqcSeiyo8yp4sn2qhrbSUxSZuhgVdvoMdYvp9ipv",
  "key38": "2ETstCibn8pi24Y8YL1u3kBAUrbysrHsMnpBz3GH4w3dn6nenSqLUf5nFKrmCp9vojYZBArYXXmEPxVFobaaJ5xb",
  "key39": "67rno44gz2dA68Stsuup42KrcvxeNPQnaAxKMz8H3c4ejQMkP5zTvrnzLiBc3B9FRZM8XZCcccg9SjzxG56TJtbN",
  "key40": "3oZm84Du4Ki26jpdxpbQVY2H71bR4uFFCGe4YKKsbKaCQsdixDEGBWp4ysGFRTNKu9Noj4mF7trDUU9sZkwHkTks",
  "key41": "WUTRSaxZuYwRcwd7RXNLEn2VvSfh666jLPEaBy3LDtXfVGJ9a5Yz7eM1RYxq9xRbSj6SymcWxCSBhoNsnhtHosb",
  "key42": "4Ld3EBZEApBxaNNJUfEETZ5aT1Xhn6E6XaZP85etpJTN8zh7cYkvB2EBjaSdUXSXm9WPD4qqzkrwikKchVvTbqs4",
  "key43": "3Fn4gyc1rpEvaVey5DipB2ud59mihTmYnVaVv1D5W21WX6yHMYyhiyApZmk7s9W6QZN4dNr72bu8aQpqfMpZJWqc"
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
