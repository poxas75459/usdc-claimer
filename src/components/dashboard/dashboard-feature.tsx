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
    "5Tm5XouYaewUWoxg77dN9G747CDMPC98GMDwdHzKEuAAzNUR52dMCfTUeotY4H1sW4DJHKX5kwLKoXHALVF2YFTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P5q9W3yBhhY4uKCFQpKYvQWYu7pJpGdbY7nZ633H8CPsLHHd5BdYJ5mLhcznCxhg5Fpw296PFGR1p47XP3pUHQ7",
  "key1": "2kWMmzeMoK1woXV3g7xXKXW6zJj5UvenUYoSRNQLpS3BurzCNiYM8KJD6njaLjtQLp3mKGREEGFsyLjdmyVteSz7",
  "key2": "4eBP6pCyQFxKKeRvhW2pPrZw4dBCg2JCp1yjWQWowXEaU7uUG6Y919r1f6P8oGkcrgmDVim7hDqPCxHaR5RV1iBx",
  "key3": "cQ6MXCTFhBKem1LfpAxHkeFmbjMRN3rAirrPChQKzEreZf6QpRYcbQ3euicEDtxv1ct3viouevwp4L9GE3FnYue",
  "key4": "4ibwSJEFvBMt7bM222MdKC1oDHo2DZ8RpHmtd4Yni52JbP4Hnomf3oTuanCY2RDScwcXkHB4xVRAJtb4i5rrG1KF",
  "key5": "YrVQNPLivf4ijBJw5Q4rwFxUX6iB4NAbTvRy7fKpTkmVChCMtEvJcqdD14B3ipGpKjpW5jtTg6FMEBnTo4BwXWL",
  "key6": "4K9jkAD5rLgqxgq4ZfhKvjkcXwkx6qT7bLU4vQCaukm9a9pnWdSeGDYheR6vNKsseg8uuXAdeTza1dQLbNu91TMW",
  "key7": "4fmnboS6KnjKrMQRTtr3c4hdPtzCLaMthCh8PS38oK2cJ44hAzgXD5Qg5eCADZczrWZRG9BGGEr8YuV2EJXaUm9q",
  "key8": "rGYxgPE7h8gtguzeKtGJ3REfv9UxjW4vudjEhTx8j7trYGw2jZaByeAvt8nTBameBpjC9GdQ7156pPzMbgn8TAU",
  "key9": "4eRPZvU2HRSVvBthHjAax9YadL9XPuwCmvPTSx9NVqRyQBrzbP7DpwbYHGeuT6b8ZPaMrr8P6qzhzVS2MsWWLCBj",
  "key10": "5PtVfsm84tR1K2RCsHLn5F7DimdfQqvHey9NhvoWxCmaW7Z1jGmCAtoXCRDPAWkG2tsiQDaTQ7BBoS6QE4Exean7",
  "key11": "5aNtq9ALMvpz6Dc5E3g3KMH57pQSPVEtkiQautegzEraizUdf41QHivGHvyV7JqduFtVy77mnGY44kkCYsoHtM1S",
  "key12": "2nDGD9vSJEAKGR7zZEPrWR5KKPvMES6YaYa9P2YCHZ71kM7HQKUBbGfpqPixkqcZQyeTVDQZVENbAyQD9DCwhykE",
  "key13": "5eHicbRrLs75YXpUGJwCN8Xaz9q4A55HVVWY1gyMAYFqAt1qXzWJrrdpEtQpW1KevxnbdNiwZUtgmXwpWyNsH9ue",
  "key14": "52qFC7oqfBunh8kh14acQAda8AxS3JAEb4kSLGnRtLeMUr5ii8AZPvRUUymxpm4bweWHeTgpDbybL3h3Vs9vufdN",
  "key15": "39zKJsWby7ZVBiohdSrk7E6QR5LF2cb3Kt6MeSpNCnkoWZveytWJfW9K64bemqD7VVWWuS7griskXYyKsSSaAqNd",
  "key16": "4K15bSSVztr43igQGnoTUBV4hAeB78PJfEaotDT5pjov1sbDsTRZGdqQFTHnUUyK4nMcLgVuzQje7WcF65KWY1or",
  "key17": "455wH6xH9Xi4XmPwgoyPJkzHFqEDPLt4aro4jebxf7APcGujPnLAtUKPKKb4F9u6xKpckaUKQcidmu612XQkNhA",
  "key18": "45v4BiEuec8rAWzQQYjQ1xnB9bXCfQUHN2JZnfgP5ZjaJGKihTgps41HQDqXrZ1nuBLVUKCrwBDYq5xpnQN1Z9U1",
  "key19": "4VfZFQmbdsJYRsA2mM97Cs8KiHqgAUQYnvdp3zRo1F96n1t57SyR3VmfW9KY9KDov2E3ZNfzY7f8XMXYBUvdMsrb",
  "key20": "3abpWJNrPSJXeMBGn9WiC47z24MVM7Jnc7LsSV8WADyzTuv66fVtS2Mqx918px2iN7PkzrJRfCNvQRiT7SMoNU3S",
  "key21": "wQvuQwFxsZyw7e5uS89PDiz9PAfN6sRMLx9vrYttYRQGHoiga9vDAtSoaaPwKCKsiURRZ5eynug87kEpp6F155e",
  "key22": "61p8GWSJktfBpMvM2uEYTUn1rNkp9WCLJMuTwx8HPRehc3TeD9hiupxutiHLxpxLATvCtPJ3CzQUzEE4Q3DsfPAD",
  "key23": "3P8TZB58ik93n8AtNKt8hUawhWtWPVc7fssgRBPY3JFx5otZFsFzUAm2YjdB4foNJ5sLct8gsHZKYD4RSx7w3zw1",
  "key24": "5b6oHJLXKEJFo5hbgUcidtvw6se5SYYnZrEFE3j2vAPnJY9rAEhgk3LpZZittkCuxeELEsVqopepFSP5wengf6fV",
  "key25": "4511drBk41LsBLgkSDFTRGAmTJp3eML2EsL42aQr7mUT8hYj1u8rpjZL9GDhUni2Djzf2kFWtnLn9TjibmijFPVP",
  "key26": "5AohRCRY2mK6Affumf6rm5xaLLg1xj584kzt4iKo6rvWTExJGbXu1yK9Nt4QDaQeH3iqUPd53GNmXxHvpfe1e3fa",
  "key27": "3Ruh919HA3dK9vPyiCZz6JNsZs4FCuo6oYdHfLpsYPv5KBsvX2kDiSAZnChKbJTHM5ZorvBeUjyJeDjGbBT9hsS7",
  "key28": "3CiUwH77bNbxqE8ZmYvzskGEsPqXwc41cPaf6c7AV3aTeRjBFYjAnv3hJWr6WPxBG5m6HS2gjpP72LhHQYkTCxtZ",
  "key29": "DsDtrrawo8aRaeicJY79G4CN6cCheqnrCfxWgwB1iG5dFWncBjZ2RjLBZ3SMe4mV8C4mRXCu6T17SApLzCu5pJt",
  "key30": "TAgU9RrdedZ5Vs7u747AqyacwinVmBjdNRhG7M1aBRkibdrZxDLRN61tcUrrGaV85byVF6UvzBcsQ6oAEPBscjG",
  "key31": "5L3Pk6DcyhgBNTxgbkCNWeCssPeKKQfQn38X7qF9BTD8gGhU1ZTM8xgiquQr8ppRbmLA6UmT8suvaKJaTRC5tcVY",
  "key32": "3r3BDBtKJfxKkUuwFVxE8wgPCuM3m9c6FaPgv2vrvuHY1RhDXrqGdxwFN6JnradfWtj93qdX5wadCZsLMUyZjYYh",
  "key33": "3isRpaFe6hhh6KJddM219FmEY5hooTan5Y5R6dCj1RpYkiy9qdNx9ZG6E1VeN1Mvc7fwnQjb8vGUxwMRsvdEUxLN",
  "key34": "5Wg2jmBZTAS6gavVBQKvYiHQYeSmDL61LZUKF4V4BR79uqvYLWZrPGvoDaQzHtuvrGuRfLAYoorTrVQ6K7e7MLCo",
  "key35": "3Wsuo33jjGHXyX9UPfg7SKUbxXpTAUCQ2UhzViiPcUSFpKyjMjA1JKuDw8WAjDJcwBNsAPTvMu6uvauzLsLAMd6N",
  "key36": "4e9s8262MpWMMCCqWtP1vbAFAqeoYnHJNtCWQKErzNDiEBpjZHAjgJv5s33yNLhd8u7tqoD3q8zucX5CYdnVFCVX",
  "key37": "4BNTzht69zPYnJJvjKAQYjDbMkTYw5qDKAB3LuR7vqYzzBrhNu9PVuZGzHXHWTeGVZ59vhchNXxLU7ibjWpgVcSa",
  "key38": "GbV4ERdCv2wsQbUQpC8tPSRjkxrQUyWm7UpWNCMGnCAcHggydPoLgR6UR5FDaNKEsLhVYfqbSqAoJipH38MTc81",
  "key39": "3sQ2MVM4TkmP8oRK4hG6HYWqyHEzAdXv943JTSgmMfdUqiLNDw1cNdZjVw97b3cgKKXqn19CrqGgd2wU4gCtrfte",
  "key40": "2n72wudaM7FnbajSgf8rcLyuNSsXS6rr3qpDc3rsbGwkDKDQc5chke3dEqJhBXnQsvx3rvXSyx6gz4B13QRoA4aE",
  "key41": "33Pm5hWTt1UqtPLkGedERQbNRY3LwAtTX2A37ZqdZmBkscWsxQFSJbJBQC4C3rgCbWZh4ZbrFzFtRhLmsTE7Bv5n",
  "key42": "5FJBM4YhUjSv7VXMDnGVqv8n4ihUa7byqRaumJh8LexUaS1c4bu65fraKYs4TzPnmbTTp7AquyucuPNfFsVPgZrK",
  "key43": "3a2mKP7Ka87FuwgyyavapTQ9MjHeHgmzB1WebyHPVLyfSqESrcxLqQ65xfd4tgyHMVKwjoKj39xQf1immuTFoVHv"
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
