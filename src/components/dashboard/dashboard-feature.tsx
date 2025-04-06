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
    "6jWrqgJrrWTJLNxaY2RXqZFG9uDvbq8AGmc5YKYQYjNMv3VYqCqTgTCxN8wPoHCTGJNSy5sqkCWrsjTM1LDQYxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZFAj2A1qc9an5FipHSSgmuZ3HMJaAZx3qFm46ru5H2dJErTgniANFqa8LpWSWtkgkgi5VBsBKnEFHuGDY7gHoxj",
  "key1": "2uG2TzEEFwkXDdBvvCsWW9YmSdauJeDxD9mLDfQarJwnwyS5LWHMt6FygybFHn6aBq2UqxLyCBBfCcC5oPT4WaNS",
  "key2": "3zvKZhaohsjyAc2AUeh5Et5L63MMGUUxazzcLgGzHsNhGZiS8iErYjPVuSacA6H36nhdyKBwFoQ51Hyogs8WpE8P",
  "key3": "3eBPRkv3XbsCtxBSMYko2mrm9tBdHyULmzsT4Kw3DDpLtsUsVXf7k34GBWP6whKLPnyQf2G3ANaKVqbLfePKr4oC",
  "key4": "5ZUB4rLUyLs3LVbJsG8xvByQq9wCSstW3aCd813Ccx78uB6Ku1BGkdeoGRoWbYtrNaoTQABmW9gC9aoYGS7Rf62R",
  "key5": "29W72bA5H6kHKEFky9sP2awNgmGafeZGaLAX6rv2LopYxAhJQ4C9ZZJm2qiJQBNd3FpidaPU1Eo7fBQBHNYDus5t",
  "key6": "3mo9q17Uj4LFK7Xv29Dns7vHoYvXLoDhAdqUMWYF6J8KZ34saHcmyqtiCKrZcX21ALisn2YyNGuYBEx1k6RaC5PL",
  "key7": "26NPPUPNcs6NQzCk7ATN9W5HEmu41zbxR8jZdJaP9xDCVziV1m6BdwGQcFhK3A5VSsp5UJjWPiZEzdbmwNFJJLVS",
  "key8": "4DCnQq9cJkwLamCxgRpYvPVUhpfQcok5Eoq1jescgqBX27ihUAy8nmqdtDKGL2Xarh9ewdSPp9ftMddLsVC6X8d6",
  "key9": "5LLwNE71itfpWJ6E4cMxCdvT8CBtCTEoCZaT7pTTpE145VjpgFuR2joNsPZRdU2zMzJhdi32hmaA9PfVvEZHhgCp",
  "key10": "2f3r2YEqKyH1mzaiKFN2m3JD81XyqwvwJMn2yctGwFPheaNBPdb18opERsXHpYq1nGv3gWXGwqVRWdyNGGWQkd4e",
  "key11": "ta1jQcYyfParXSqKGRyZEJzuHfthcskAYGsb9nNMjzHvZ4trQo5WNijumLgxBVVpMbAreHdc19gsKVm7mhEJKWP",
  "key12": "3o6DZKaGAXQDrF5DGJbN9oj4ZtgaVEtnC1vw7jQt58KxygeVsYJfQqb8izZqWTViPvHfYF2eniryminFTT2VoSVF",
  "key13": "3wsGbaxsFARYixLzqhaZS8Xqdr8CGKNEQBkZ48vwCmya1dSYeg7MawsRBRgfRLKaGpdydrm8ruAiy8ok8zxLXsUp",
  "key14": "RTuyV45pbcqKEejGwk7gHPpAxcVg2Qg5w5dVkeY4XHpmAyQwGmEC6yXomQsga1pqRW8b2kLiEuryMLtXzMwVL1H",
  "key15": "3fMpLYyhJLGRwgBH3RGLmNGkcMaH9SsdsE2FRmVdLkUrdbXJZZdE9pkLDEjNEhoc8itpAjoMmRhd3ibxDg5LAnV",
  "key16": "c9Jc457zfg3QPqw9Lg3WbXbJyNL5qhphpXwQYyAE2L8BiyU5utac55WuFdPNYbw3aEa5EBHkgfEr3PvCtsgw4CL",
  "key17": "2BJ2n8z347RH5LMVW3cCqchvMnahxY9Ycu6jqRgyjWewJJMJ5iypMp3isKcvUyxseksUS3q9SNoJhhAbuEzFSsWQ",
  "key18": "5Xg4KzhKpnWuubLBjjeAKQQeUTLcLzyxW4dsiwhvFscCvBMruvcATfiDcmqURqMbpNRRacV36nZngKmsY45isM5P",
  "key19": "8quwH6ZBc9MMbkbM9HcuSARAajykqPeHD2G9j6CgHF9AStkVYQbWJiPMqrpH3A5bFSoiAfMRa3NHaNLejN2XST2",
  "key20": "2y7ikTQWyb7fvwSkpKadikkCawui7eoAHGGTYCaQdCDRA7uEEkfF83SxQbFxbHovvReftYFJR1EeUoXP4KbR7Xpt",
  "key21": "kQfU5Q75iqtzcoR8opaz3h7ouWDVRTRD6zsh5e5YLXvm16UNsg5dwp3zyBzBhz1XcGiFTFBynCFAUujRCytDc9L",
  "key22": "43CCmFHfopMrLAgh1yQeRQTBvFnxdu6mzPUmhBvnL2QyfqwekDm2HimQtFfQ37GFRJrJLDwd5LrAVVxy6q2B9vg",
  "key23": "4tqJWZgmzSi6KCBp6QNtpPBKc6bRjDEPR282YxHQR4F5j8QEoQEDyRrnZ6XCNrkcTGfcz7rwoZvWCXSDTmkekQRc",
  "key24": "5beDjnPpqeHDstzEhYQ1n1Jg9XmeiTXgQzahA3b4u4FZ3eVMobYbuS995TPPD2zudTMs6Ern3SVKhBxQzxBxdtw1",
  "key25": "5XXqmQKPHh3RjpVg9VrJmW8zbSNwusg46vtwHxTPX58cxBQ3csHYXJDwr98cMUBGUHjASJ51XkMMxezoPkrr1w8",
  "key26": "4PtCJydbDPV2PN9Zg6DuJmkgase6zMmoDr3crL3FpLvQUFc1f4dEV2GJAu42kUN3p7DuLpQaxRer9zoz2pomwd4Q",
  "key27": "qEoSrHfEVw4T4oLvZE6bzo2VVwojLXfRsycDSUH4u85rzjEgF8AmtRv5YyG5v7fFYmtUa15ug86mePgrHqqYvDj",
  "key28": "2c4ZrJuZEfs4h9hDnQTpJv6Sw6txN62CuRNnjFwoCDff6vFKEdDzt2T4Nd4xUMNsbcHbheEMaCwf65FgEmrBcsw",
  "key29": "37gdU9n7pshyWoW9fYVFTevTs2HP9R7X2WX9kD4BVLAdkp9nknKNRp15yiY77tcHqC5c8iAGXt3SgnnzUpSMUPfi",
  "key30": "3EGsMfhut5BqHafDXPWmC57UJm7Y3XKAf41yXj3huNYK8BSe2XbxE6rsXGG8NnDJekqUmmqusbZja5Hq2sx7L7Ja",
  "key31": "2dq8GDcUmAqgbjDsnKkHgR8X3Nk5Fq6k9J9zVegTrkcosZJHFZspwFqR5KDN6vkoE6yMcgVzQEddq8JzaWutGtCe",
  "key32": "5EzYk6vndBwKRKXfQsixJHVrFSMtckauMHMPUsxzUwh6DABQTDjiaVSK55yktHgB1jCRmnJGs4VtwTKUReW1PNiE",
  "key33": "ciLMaXiXRkABGminxv9Z5K2rA8QpintiYunGnXgqbasRQkx8rbZoX2ntxhYMntxnvwXRV9DbBeDW4xRZ3rDoGPf",
  "key34": "2Nwqjt3gM68H8JT4qwAyz8LSwqKyXKWmBYzJaVasMW3nsosfKzzQ8qmkLwEYTcM2uUYkc4h5vdm8382JxMBzWGJr",
  "key35": "4Xv95cSHdJTeVNUA5gDqPaqp2mng9tZjox5zCxyzTwcUARS8GZi3xGzJYNbyYuEDv3AtN9uBA15TfgApi4ZeYT9z",
  "key36": "4pbiFaxHzGjhf9etW7KYhF4sX1DJxkBL3Lox6ro2Bg5FHhknKebJwQrE3kEfj9Zu9uuc1FkuLXhoVDLsRSaLEeBt",
  "key37": "4vGmLWawCaPuyzc8x3dE1xMGhcYArx2jQxRAmnWenrMnUgAB7ckconbURHBEmPNAKyyvdB7Yjx5yDP9UMC7vVXi4",
  "key38": "63i6v33EwJAXAh2UovD3QciSaw4kt8REezLa5DG4gvyAk1EHdiNQW8gyLdUCiXzk9T2A4cL1Zkivc822BtB626qy"
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
