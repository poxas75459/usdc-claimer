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
    "4aZptjcWQxAc72Dmcqb9iwMwftDGq8yXhXAAyF4DRY9vfmB9h5GZ7Yt9ZWdvDi649QJUYySq49pqRTdpHd1cqE8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "625crU4WUjtnfcixKjXUptesRNiKnvJy2tGfyoyvxhKmYxjhRbPHX8Eww1cXxbHo6mdMrX9x3QTHeFJiRLp3strd",
  "key1": "2RGsG6p2gehs2RP6y5r8xB61zvHgCZaYSjYw2rNvKQdTYEMpZWhuPJfXi9qZA6k3CaFwtCgkq7qtKnqjJKK6Hz2s",
  "key2": "2NkapgA8iqyTPfYqc2rusVmLJ8yYh69pYAy1tWcCtChqqauLc6WGrrG7KfTpicYPmnwmevAqeNqdPgYJqRCpHqxc",
  "key3": "pXvz5rfCS8yd6gb8VtqaNPG6nDo6PEFzpjTNmDJyVowByTWcsNXpjLWJsiRMB5yJDuEnKFmve1JmAnXbgrbaTwW",
  "key4": "4hF43y7Z6yjomDR6crkwfsKBgdCXwU1NEpF2psmGK1bh19vB7JNG6qQihFiSUcJmusF8zoUKgYqqD759oNw4k95X",
  "key5": "5BsF469T6zYqgVHj2quX9ULGoAfRs5m6MgSz7BYdHULSVm9Mmrckc8e3ykxDsd5nsx159WWTc6JcbXp66ZBgWN1k",
  "key6": "LkGrXqC9LPT6obzrJRNZ6dHyUoRk2BMrjm2VV45hwRUE8ZMYmZxyfK5jiFc6Up1VstdguNnMpvtyXuPtUzXQNYm",
  "key7": "4Ekv2XzU9Z5qEVCFWPWU1eWmzatcDqM9RaCouUurRC8u5bBFmPygGH56oredXtGonFiLac4DPr4RPqyf86P1TdBJ",
  "key8": "4Uf3GMFvpXmHWB3R23258ukKVt1H9CunZKUwS7Rt6jBzoET3in1XS8ukcJudarfDKsk1vqhFqRCrDvzUBxfuTAHQ",
  "key9": "4Dc2oy8y9ekmW64xVJFc1CmafnKmzxTBvRS6vLjEwdedvzGobUbsTUnZBs1R6bhvm6dAQQ9ywB7BULNFB62bchGv",
  "key10": "442XSW71mBNe9fpPWc1S3JT1bkb2P69rXKbwXKcdNf6esLYabkZ7FSCTH7FzqYYCk8xdoAEZeP3XpE5FgHaV1c7F",
  "key11": "4k8d6ce3VhwATRt6XFtr4ungdRqqP2ocJRfGcC3GZco6ssFJcpLp6ZP7HfJ1baUte17U1maPnLrLtHpx9EjbW2P4",
  "key12": "3w8VZyxGqPqDay5jdV4Z5f7nvDFQ2m62UPMQtBp189qxHcnyrr7wVJbJRE7B8LKsHbgUYSw787HyzKrv8hq5ebek",
  "key13": "3FXGa3CmRQLyM1MVMS5m1n1THTKhE7yEuRDfSr9kM6MbqxfPuja5WNonJMpU2PfV8zLFrApFavH9bMaZRJsyCnTU",
  "key14": "2CLDBmiX9iSNadHgqDehBJPX9EqZeNqZvMp7pr4njFsYyQMwTDQkfEds2hn45NqXLKTu9U7ccih1NrFq1riFWf3g",
  "key15": "BAnqY8RWYKzNVyGrrneMn3stxyNPHk34TLR2J8LWA42947d7xf6wrStN95b1A27PhCqCKxyCw7xAUQkGrkCzG4G",
  "key16": "62Q29i8SKBHSULcwerRXHYM6f6dR4LcmdRhmaPt7YkcY6pEmpVYBFDCAAoXHkgHb1dMuEPBmdxGn4xcwuaQs34eD",
  "key17": "2vKefAMa9zHrWn6s1CKgSzUHAemr9YrM6xFWzMTN9DyQ6NguaiTqLgZyaSt2YkBgZidx3dFVxtEu9acMp2y3miCX",
  "key18": "45PaiJJwx3kv4rPgAR51TjxAv2niPeJbxnFSizj928RK49RgEtUsiLFrEuafHNEQaNT7VpiGUG2Dvbw7ry7LhV8N",
  "key19": "4h4T5eXN7JiLFboCsS2uGa8GWdMWXaDxajwD9RjBPfdYVUhiFKcFoZ5rEWssXXzp9NzrLzTSwo6GAEZFhSQHEMPN",
  "key20": "5nF2hMzpCvwKiQCXUoPdKvSv1tXFty4hgetqFxTM66zXmePeqfxNBUwH7F7r8nZMhL9kK1RBMEFQLedZhpSmuDXF",
  "key21": "F97xp5PmtT4MPHBJWoJKYzLtFy3zSzSRx3GBArJkL49rwwVVAqnVB5Ea5iQX6vCyCs6Z5GsZK74ekBsxduHN2os",
  "key22": "3mYPw3TBr8HEi91tLD8j4iTmuizcGZcmwks4VhEhNE5wwhzDUMzfX39gAdjaxu1FywcAxomjxUrQfBsWLXx983nZ",
  "key23": "4N88VRMcJnKBikAxYBRx4573XUsHS4hwBaNh7QFXkfGKfooDdYNGxvhW3VxmanBAE8QmWuABdWQu1yiDqtExbo32",
  "key24": "2ngqiUKiwDxnrChFuLx5yDWVqzeK52LmBPW9Hh1rHWMiQnY823ohYR2oqnRGVxz1iAj7XYdLCp4gVi9NQ11hphRY",
  "key25": "3FTkVSQt62fPYYJXPXWSu9xV1aJPPKdm2g1YBLXrFqTEBM2rYB4DAVuw5KKzb5VDddeYCzNANAdLooAsw6A8WcBr",
  "key26": "4BZh79BTyV4jtVufpFCg57CVdakNYYendyNtCbvfnqYFxCR4HbPGnXdStfeciV1vi9efchsPk8Hx3pqwEdJSu91U",
  "key27": "5gzsfy6kqrYd2VFtoL4bUxD8AAa8L9MUqeXsVCYAj24Hb4WYuJwhc34DpUuJF4WUmZud6j6kkDiYbWL7edX3kupm",
  "key28": "WyKsXt6WKp1hrPDNchb7A1BmDKvE6ktCxKxw6gWnQLXX9hBzsKvyTzXmAVpGbeD1nbwfz7TjbweknsEN6PBMpQn",
  "key29": "41oA1zFnnizK9Ljwyv4osLWttJajBWHn41sLoGQEx6aH3ctGSZsgnpDomf2aHBHtozafZ2djbStkmTfbaUn4jdf2",
  "key30": "3yRBmsXusPq3qSDjCh4b7TGyW5QV9wofeZErkhUqewP3nNtRckjJVYq7kxnPEGPWoHA6sZ377r4E8393o52d6sYy",
  "key31": "2r1R5mUsjUi4VDQurgAWK3LVS77MzDQTD4ZmmNG8SghrtsZBpPmqD7S7jsvvi6fPMvjVd2LDDRkkcZaHFvMbQWez",
  "key32": "3DiBkhfaDjcKCmbjuUPgo9zPoyRQNbrJwdYA3BG4LEiucoLPqPX9vwdXHVCocgxsAYuLf2XyhnuVbRumUUaGh2So",
  "key33": "n1QT6ThAAze5Y9L2JciMJtToyEy563CGCBiW32P3965Deqf1NYRiV1Fr5ozE9XtuLc7FULWEXdqYL8NkSYCY2Qw",
  "key34": "KEVehgfPeLSUCG62Vq9LGHods8J2ZsCJK4j6cXoy15MzwSAkmBYZGgTmfaocJ9kK5nhAyvf4PkF8Dh35ek5YWp3",
  "key35": "2UrgZZrqupp3QTjsHDZXDUyg3PLihjHzALgA7veN6bpFZYVd8fE5WQBdW12zL1So1ugvNW1RgF2DY2B4FEx1LcX1",
  "key36": "5Hh7swqwvvuiJv2ivQXYukcsMtnYw1qwtNkMNuEd7hU3tH8sgmGq7VhcGzLEYrTZcmZEKShGQV17tvQbadGng8Ez",
  "key37": "g54ZTo8Ziykv8kkDF2P937LC5XHAb4w54eYhMbQjJ9NECTvnJNuyYyHnNA3e7Ry2NFA4h8DQBP8oXS9zu91Mpqm",
  "key38": "58SGJsLXiC8JKhVLpCapq58GTJVfwFqBALETD1ToHVxJF5aiXxkhDEAcZCEoiRVaywkeCNBDNPyGR6ZJ9BS1qA4B",
  "key39": "5UrUSaGZni3nZvQShnHYMWzodfLrTxfNXks2fvG6wsL88inwEvB63wrjuhz9ZcLE6NbgA1scTmSmrUYoq2euvLvD",
  "key40": "tfLcof3A9MaUTaXTPJyfjfR6GyDyiTN7prhYzZxSq1og5D2MQaQY4i4cUY5pKRcMkku5MSTfHMBBbisbDCvdmM9",
  "key41": "j5LssgR56qJHbKU3Kc2KJRgQyFMAZgLsaukuFP5zYRzJosrv7vEsnuK2JDJ9w89gYeryvTJxQVANHaXX3Kon111"
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
