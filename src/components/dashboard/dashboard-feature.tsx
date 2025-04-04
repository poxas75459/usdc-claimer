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
    "66DU7EmoGypmj2MgVg18TbxariJd1AguVApfbcX2Sy1cUb3PQpSvRsUi5fhnSwmN6iFU7cBvRv4Sv2HuiDxtXizQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xNmr4EkDhGv8A27dapGm9jvw9CNmhjMKyvbSbMEUu2BCjLPKHhSStqtdyt8gEeoPwZkYyw19DqLdP3EYmnk2rbN",
  "key1": "5wvBNcXh9hjX8GiCKQyYGvo8uHx59a7RE1hnaXcx4YCjnMR9dk6J7vGcspYJna7qNWpVg2b5qGmoA8Y3QLYsWBBQ",
  "key2": "RCLMUNmRP3ZKV5Z2MRcNo9F43ZEBoJZz51aESJfdFnZp3X7Uzog9GAJRM7B8ZT6s2DRm6BniJrqWcVEZ9JCo1g8",
  "key3": "5y4ybE5numpQ9qE8tymnmj3CNzQyCBc8YjRisZqE8BzxSPAbsXBGSsLG8bQmPwhrEr6tvf15p8iLyhSfujw4aKD9",
  "key4": "42XZpK649aqAXv8PWu2Ajzr78y9HEB61fxRjasqXavkZxvnDJvwiE4d5PhtYxm5HmAx2YWdxs1teRPLM7dmW7UPy",
  "key5": "3ZYNNujWv47gBBC5LHjYz9wEMyZxunNnACEUx2daNF9Qzj8Xtorx8grMgKL3JxyNepfjDvTf8LeEu56NuertAqBi",
  "key6": "2asPR352NYajg6dU1Yn2tSCjpybpcnZYewhdP4FZgyFhxyBtViFu5FUeiuLSuHooSoRyTowGMEZ49PAVrgh8Dqo6",
  "key7": "5fp7DHaZBQiTPk7Uy11M31huN5ggzKSoG4F9tqxHeSMUkqp61hR6hLrcL4bEXcvmNCAMAkPjU4WhS2u6Ayd27Rmf",
  "key8": "5FK1AmWmgsQiM61L5SVuvPdfnR9XWFGxAKeWUixc13CFZu1ciWRVybNdp6dk7PnTznjTp3sh6z349XgWUyNxr8eB",
  "key9": "5CRSKBzJpsT75sBnZWJd8R3QjD8AZ5aJU5iQo2xoRT4hGt4iwpBLEGhwb7oY2NaztchWdRtMA8WCyfQmzvgmF6WU",
  "key10": "5wJVgUUSXkikaUdFtQPiKCKjLfHCCaTT1eTHiZHahkhXxitDRdE5r5Y9hxhXgSgsQ1ZmdS1PxDx17xiVdewzG7nq",
  "key11": "3KeLg4pgoBrqqFuzvxEEb9c4ss9dMyD5X86BM1KxkjrsaLs8ugmCqFbWgbdumzNgDmEVRKffZy1oYogreXJNJoTV",
  "key12": "3grTQRPLanjVXQTUiUnQcPA5fS7nfaqMzD2DBgZ49J4LGVkBnEjWhSXWniwmrnFAR6nxNC7zSxBrrdR5wueJDyaQ",
  "key13": "2cTrLFH1dnB41HxLU39EZQXqFeurX8uPWPotmrBP2K6xL5mjUaJRqJ9EwHjq3k63mQQtPwdmNKMutd5ofLDqw1T",
  "key14": "5e5vbxrENTeM2g2YizZ1rXdirH5rEacvQdmo2RTCFFugLsQsE4hJebUsdsSxayMpzKm4tZQNT16BGTodqwqXDbeT",
  "key15": "2D6wWpR28zqasCVRtbmXzJ5zFn8thLGr2rNv8oK24gsCDAH8yzB2keGod5D2uowkMnDxej1FFh2BmEXQjc9CQEnW",
  "key16": "49fVhv6uZgSJWXcHPamCmQCFPdafVX4bFSv9ZayjACYTFQZkpMYjppWTHc8fx2ZL97gmerLM7UgVNjaEnPnve3W6",
  "key17": "5x9xJyQpz9MCvhBSjyUPXz4VveLGARspg7q3CQLyGPGy8e2W7QSq17cCkRMxUq1Fjxox2njkkcK7HFSYUCjyZGPh",
  "key18": "27WBPEEXWWMS6RpCsr6qGFJTqcJ9i3iXybbrRk1xS8ebWRmfqSrGT7wPcV5P6d2YzMGM4XaDyvb9ey3RhvqnPVkW",
  "key19": "8oSwLEpqGQocQaDTMop6G43pCVhhwoKZE1uCVaPUR82gWWRUokoAz7bxqm7NXv3UEgc41hgiR2pqAjmVwHjFiHk",
  "key20": "2thmSspVsb4KJ35Tzyy6SF3q2mUTnN8vZKCVuNCYncjSXEobCLrLDX6HJuBrgCLRzXsHDumaMzVA7ErgBLzBNjRz",
  "key21": "4XCWLmP5bPrAtBmoQQVZaBDriiV8c88g4pWb5CiR6PZckH3p5gAYHiWmUwXqG1EiBFC2fcKy8NZhp9JCuZvsdQiR",
  "key22": "ARRxQwyYy8bY78fjwCqDeoV4ia8pKRTAtPv5h8tccN1mr5AiZ2ec9DGY2as1YG8xFEGCKdpwetQf2WPsTTBxa7n",
  "key23": "42sSQoMr4n7WRBx8RVTFJfxnLsDTonqXwTEb77U1EgnSqVYQk4W8cDwQviH6uE3x1xbgzFTQrg7qDnvmi7KuPhj1",
  "key24": "5WHiuibnKoD43yneNJLReQo38qBe8ET39ahVU5bcyVNaBne5nwWPSXfzqb5zXdzxWd2qBWYbrb5Vxe6GmYqkGtoC",
  "key25": "2kM1L5RzFK8dnegEHrmbiu9LSSzXKaRWtsayEbytoH1DfLXJqC1qYtVzYuW6fT9fY3ps88tEALkZ11j1moYK5R9m",
  "key26": "Yj31nvn24LK5AX9dcUXu9UJxAWsvkYijcCCUxC4gaJDLruKMFxHNCo5wycXebDeAcEq6mqY8SaAiyb5eKeNrAkT",
  "key27": "4e5k8pbsCJkANmGQXarXRuiPRwXdPQGaEVw2T5TCcYzo41XC4u6QADUzHshnPmFsiE3u8bWDk8pBG2ZJ9J6QpSRe",
  "key28": "7cpwuDq8Svq6kZnALhqz1NpRHH9EJcdkgANCxnnydbqeZxMDqC7yFM9NuGG58Adi2g9BitTbEdWbznGDZ8ik5yJ",
  "key29": "UMbm68xwBAfYQDy4Lw5WC2QmZb1wUdBjpiRsTgAAcAQHopMzv2UsJhoHSJ2ApLFJndTV34RrTVtPbo6BSmkRQeK",
  "key30": "4tAU6KFfGKNoyir1FLaohCuvkxBSCJVN61YxwvgUBWLJH2isBZMNHdXfePAHfYamzbLwv9w37ej5rsZRrGzLNwCb",
  "key31": "3nirde1W2BMAeBPu4gn1SULyDYDXjqdGnp4HArGKfiWd6D3mqwk1b3NTqGrSmFXsJtMfocQpJQefnHn8wP7sM32s",
  "key32": "8fy3wuyipsVUzkkaKAwSokxuHruR7GXjMa6av4QkEG8QgXafJeg8qZny1oReNeV9yJPsb2V6PHmQVtqfN4JL5kG",
  "key33": "5qBp2wgJGbfrVUfdSG6X3HVBpPCnL7dtkPJ1mwqrBXYdYGCB2pt5kBafyeQnrn94DXGC9RKvFNSwKnq1erDuBmpp",
  "key34": "5i2im7Pbgs7UgZMQVy9ZNjeBEanQ5RP1CXU25z8SDHL3vnQNWGokjEsJJvYC3PqhLZK4u34GLtEfwDMKfM5wgVTm",
  "key35": "61tJv8AZmDTigyxziKk5NTUApc8M8CBhQz2VxZ127q6Gtj3nLgChbuk12zxtksaMRFJpbp7L2gWXfYwm2xeLv9ko",
  "key36": "2g6xFe2jp8hMWxLmm7tC3e8cCKyiokSzofoLZ4ssEwJRerLFBhAS6A1L7S1VfQateZzz68FLuUPsjAp2pwxtSbBJ",
  "key37": "5E3jL63VcnDXCNc1JKHrjRwUh3b9rWH2xmzKZqa8hJTANk97Juoi1TYV1Zu9c9tyaV8gLyjGwxEtgLuqXYjBhDSe",
  "key38": "5jVTH6Le2xKMmL3Xdhmcsukm1Wpc35dhvBDb7fyd3e8c3uJSdtG7iqAwTBbcnLThzCtPwAxRWdEq2VYzSC6JnYvX",
  "key39": "2r3hcEy5cqxpAZPUPUEfZ535DauWBJnCVXux3JpZ4hYv9u5YGYVB6t8Hf5piYxEA8CnryBDL6Ht76aofHaMcybqJ",
  "key40": "8o9SM947X7KCpXRai2thXvjTaMyerz6AS9f3YxdrkeRt5rNMRpWYeQTAEo18MziSTYL6GtrGUWMpYCR8FWn74s2",
  "key41": "5HwCR94wLyyKpMKP1vFhnCZoTPt7f1mW5F5Um5W1g4UDDamZs2PTqWpVhYMkVXcBJ1g6r1S99frM912PB8DV69aP",
  "key42": "5jawLEo7FsXAk92LSrcSTLEf1vjPZZuPv9nMWAZWUEz3g5k6xdJSKGJnJ9d6JWXXm8USRgdJm5JJ77TTj5yxCcoY",
  "key43": "4x64vBMNuDyjjEEehKQwfvn7UGtgoebFT4a529vtXDLjjZodjX2muudQCBjv5fadYPXcvxkyZ1zRuLbLtGUAc5r6",
  "key44": "3WCAd12jtiAYNaSkE5S1WLnGeKYJrHfTJNpdnCj9wWGGNBXbaKydajSBgiYnyKeCJjjUodNKH15Y2oQy9QqmQB5D"
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
