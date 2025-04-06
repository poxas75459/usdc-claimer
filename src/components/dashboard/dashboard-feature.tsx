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
    "5pH1wTUPbdeWpE5TcgmqTbhTBnYvm55WqzD8TR1ru38rgWkqcxr32FJx2rsND7JiDKpn7juGeeALC2KmbyAq7oYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VTzNwo57d2dXddP6ZuKkAN9yE5VfgF9zGjGehCzDC573ehzjc3wLBBKntoLUbmgy3Cj2YgNhzaMute3qxZueE9a",
  "key1": "66g1SG263AXRv98Gt6MqNgnYVMiP98rzv6uDymZHohyUdcGV2ChJNGG7dgKkYe3meUG2hQRTCy4qedWogzGsY5PJ",
  "key2": "4YYfo1vGCKk56k6oBJX9nTXoGmGUagCQz14kh86SGZVLLZiiNAtE8biSew8Lg2SmAg9iRjUBSnahNDrSUbwrrpxi",
  "key3": "4Dofmced1h8RE4rF88hSEHun9tiaWdTQA2bQ4Zz3PDtjy2zMFyyX27SuHwo5oa8PiSSWiZnv4wDsmpHeQZztR65s",
  "key4": "2nGKxkrDpT1DjWDGSi9CjceV44Aggb9cfxbQf5j8UhP9S2R5yWHqrEKQj3UPLhnDxM5shiJVTLLmiYk6iPMdnkBk",
  "key5": "62DGBpEG6xMQibDAUTfXR4SnMM4Kh36GvJQARKq1FkGz5sWvu9MJV4Utdg4oCUys5QRQSy9Aqz7NLAcDJGEcj55h",
  "key6": "3rKtJoPSqrntedLrD98HhsoVjGPSeRaiksNkMdwwWoXVBPxdCFoCNVsgTQWfA3u8ckERLogxvQaQkvsadUT6uc5",
  "key7": "emvdz8xmeBmTGNrk72nEve3MDc2vcU2SFyGoG5PBPxyVPNLUHwdXMnXRR3exWfP1gDUyd5aaeWoodTJ4cXGHG6K",
  "key8": "5dsqjeXo3QMUuiyWfaHLBTbSsuHHFXWjcquwAXg7aZgYU5DMXw7UHU6F8Y5G7Skefz5mmbZvFDeTfgdXgGVE2fyM",
  "key9": "45fx7L7ebEjH52zcrmQECErkdA5rvFXN5qc4bD3zakiFkuR97xTx3sZTMS4EzLAtHvDWShrJbvLQaEwJXHq9tuXR",
  "key10": "4vafvWLRq6wCtx7E4uuZAkFvAaXEGfb5F3UXG4jhAMtzkJLZ5EzTAWjDbCVbsPYeqbNzabkKcfi9c6apBJqD1Ykd",
  "key11": "5SygM9hCo5YF26T4wAV9LerfTSyaqj2HQ5wNxX4iHZHRUPmw8bAuf2hzadETrQdVG9bq1qZnKVGZy8FyGVnHXPgw",
  "key12": "5aAqjbhwsntyHBqktyi5FQf28sFHDGUeL8XeCtZtXGxLNy3deXk5RhBjjDe98fNRoz2EjDp7r9MrxsN6bkPpYdqs",
  "key13": "2davodZXu1VC3pNF3rcw5CpzLjFYcergjiDLpv5UV2ww59oMRs8VHeuE6MfB9uXR4WXSU5FX5zE2XefHTEvKNwE",
  "key14": "2ey11CUoSRRJqxGhnZ4Fi7zuLWKKvGKDvkSehDyaPZm6quSv4g7qnZ14KpVY59xxhzmPustcDazfezBoYAmCfDXJ",
  "key15": "3mkWe2GAwWigM7Bohk6jZaqqQWwRUzc9P9sYTEDu2Js1svYmMFuqEXY4NDnw5Zqn2WiKgbyNGVcvewFuddaPQxog",
  "key16": "2JBwxsXTx59N6xxDhLnR9V72zoNshGzbxzV7Lsvq1GENm9vygK8uSVbgpPTwehEvP5fVXfpnnJp9dSNd26AEHhXG",
  "key17": "54B8677BKc12qYb9chW9HPLTDFJWk8YzMoXykMBiUnsrYv3gZyKpTTz5PtCfxdVHmEo8HhFTUGvRGjAUmTerka3W",
  "key18": "r9UA4jvJT6Qakk4kFXbJ5yq1JSMWrFieASgcJtjXcshV1i8cQdd2qmTkvZm7x349am8UX4QSvjxDpFijNvUFbTj",
  "key19": "2QbBpXS9TzVaNWCD4H25rBSFZSiKrcdBJLFWyKZbdRsKbza8D9UDWuzEMbJ3rxf4qqMs9zn11HYtGgTBZk9sUzaB",
  "key20": "32BJ8zSVT4mm5LJS4wmuv6qPif31jhLgHyadvBdbdCM4pQST26qmAZwG9Xm5FK3M6U1m6WhTQLcChr8a7o7WkR2k",
  "key21": "eb1THoQdX5uy5NN4jkBAkYABvRrXVmJiZCXpfAs2bS9M6zkF5aRVw8UjZBUsMFveKsB71gL8zyATBJmmJHF4vzY",
  "key22": "vrb3CL6wDJ5H9A3BTBxXjHoEu4Dsp5xfLiU3DzBVj3jopj36zWQx7xrjf8XPQgSjjqcZm6eRXffNJU3iBkRnqdK",
  "key23": "3USWq5eoVodBWNp7tci3X6F7bbPoctzhCyCxNcu1hSwXxsGLYXgSbtEDoKKhcLzq8N6XJVgTazNvWG7ryXgXoLec",
  "key24": "53z2nW9k8N5RUPUZxwWpwHs2zDPBdseWtekw1DscP24X7TatpJ7RFL7xRFVu725FTNjKsNUcMWgQKvBoTJsjxWmu",
  "key25": "25g1GZneSVcUmwbhbnDepwV7K5HiWd7iHLSXby16nVnx8wshLcGchR3fFPj3PzpmhGXwb8gYBfvSX9L4wWSpU8pz",
  "key26": "339J5j7zRCKEes8fvtJvNX6aNEEZZwfnDKJtPHapuZRxhf9FUDmQQ3Z5oC8R8WbELAsF46eeib6dEVxhaD1Tb2ax",
  "key27": "2pDCzAMNNQb3egQoWH6GPRNKJPDBMGgsMr1R7gVaLvVEnsbgbTfsCBdoC2nGT8FJvXrxVmtjEk5XdRoaMttcyhKR",
  "key28": "KvZJD1kxGJz9xN6pmJR9o4GqRPcUSSPjqv85wYiv1eDW8idp76ABozPLCZh7643jCNbiBqeCwHPZZXjND5hrWdk",
  "key29": "4qBH5DD2aBobH1w9G1bBh4oZybFWpX7bhyxESZ2g6qFBVRcsGKbvosFNKtcCcJoiMPfvMnnQAUknSSzZfWdGA9v1",
  "key30": "2jDp2Nx33yB7mWSqTdn13u7VwyGT6k4rvqSuRXYtYDWjgu7wSVGQLuG1v188sQmmdErNJdVuJSmBjeMseVca3Fnw",
  "key31": "2FyYs6xM5NqYMAUMkgswiwfKUdgq5baMN8X63bTXWboa81ZSG4QWTmJxWshqCc6aDDhqqP8eL5hZ7soFwjjy4VPg",
  "key32": "RmfAMfEcpxjofCFt2CypDN7jwBjPkpGLEYczXzr19ANq2xopHxDX5QJbUiMkGJadMeejdk1XHW77fJsHU4JVEWi",
  "key33": "57oS9Jtm7V4tzHviW9eu4EDi2jDWPJFoKWPgfWVy3fqe9KFSxKdvPyszq6dir786gD13bEVgCVPdVn1bUUHGquga",
  "key34": "4d1iQiooFbxnmUvKHHzX6CEWk3YcZZDb57Q5pjnKGRdPzPuNEBgZXHZg53esCVTsbJfaPkeDNCqHcmTErCGYjXDJ",
  "key35": "2VRxo8ddmGCxLiYJwMypUopZofFh69nxj8g1s9R3UzXgSuzehRmEPYdcL4uiypdeQRiynUfP23qPQWf2C4EQw2K9",
  "key36": "3hvBcFzqt59femUiaNvwA2p5QebiqQZT1NtGCA7xcBf7RkT2PuGJuuGnWonQrC9CwuatJKKjNGG8vfgzaT5LFkQq",
  "key37": "2PSdVnE8DYdfsWDnHPCXwgegqSjj9HcC2V1NyWGAaHAGdn2NM2FmwiYAPKkfxtZReKuH78KcGV9kSLsMuP6kWci8",
  "key38": "CeKKAj8tZEbUSyiyv1uXFwaTFfqZLF5qXLTyFzVEqtguZk4WdrAZzGXmy3oWBedknX1Ppw1r9AQEN7RpNfGdMgo",
  "key39": "2gNCbp1cGiBMTN8HBBaA9jdoPJah9ogxRrHyRCD9Q8P53SwKvW3mB1WnuM67bHdsQgoKYRb64483cxaxhngL7WnJ",
  "key40": "5UBrL8Y6RKDiU9EiZ3G4JsdRe6o7EMgBnWQApPJ5RJxoZmNBgz2cj5Up9QXBNfYNtXybXF1AgGcXTY1ApicbG2n5",
  "key41": "2tvhJhShbBQf1jgbA1gHggRSJD2jexFJUHxAQBJQrPWqwXyEftE19h7JoEGyEPNdQ3DFuKwQdvmTztQsErnbqS5g",
  "key42": "5tBWY2zBhwubqn4F9YPPwCCS1yemnq6yeAwzasqjqerzucbnGMpu6DvRKmhu91tjRHdspFRcZ5eJta55bERCRp6U",
  "key43": "4Sa2NE5RRuah4cuaEE3p4zX9LCSQS8rsTV2xJmKriyo7du7p1mqcFZmagrFkrL4oWK69TFs12kXQ3niGncRepGBp",
  "key44": "2xocemn1RjxbBNTbmL6jjJd1yMF6TDFWaudWp1t2ZPBR5cYKcbDUBVZmePn2VwS7awiZMQo1TTmNRfPanpDJ9mpx",
  "key45": "2Dnk2huDZSwoizudkApmEdavawo49tYGiVEBMp9zqvmAhzbXwPbtNkCCWPgrQor74hTnWo1o1DpoCnjuUj21tBgG",
  "key46": "3J8CZo7dmqYUCgVbqyo4T1a1PmspHydvwKw6zisE2Ft6J9MfHbiCF5aQGkaM1JFEugmCpZUp6eM7QTypdbrUfjLm",
  "key47": "3A8tU9mhJihFF2wuPmr9mSQguXUVgkgJ5sdnQL5SANXFbEyAYhkAu6NE2cr97jWRwEBZ968SFEkNVGrQKvQRw1Si",
  "key48": "2EKaG8171APpQ8p8NEjb4DfzCG85zkbkzL97hzP5mNcnHS2rKGHfRTienASUuMPvWcsAyRm6JZ9hPVN84ZBtF95x"
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
