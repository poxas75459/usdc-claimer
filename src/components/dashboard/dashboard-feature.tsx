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
    "22nWE7XamqPF1qndvFbHvpqgTxwFibfb4cSLf8Eac9B6NiWNmRsRTGT4bwnt33u8FozPFixMTrvQLJCg18yQeZ11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZDSUsatkDubHxVVS7yHfGEHsUppC6wFUxM1FRUNa1ATkvsfa2xaffNQ9cGeR4AB9eGhg96LEcdkDWGnEQ9qt2wr",
  "key1": "5H7t11i5DUG1Tdo5WqeXGgeVhKPBH4LnEEFhmSLDdoEY16RhcYp9sXsV6JCegkGf7YcWsBfaETRXusXaZuaShL1b",
  "key2": "4zHpybHmGds4tJ7yamcDL4qSYUyPGGZZLvW3EzMXLHvnmc8xx2NzPuSQYdmafVXY98iYy73SrbLbiV9HCWdufppc",
  "key3": "3N1ouWuYLffHiBUQ93ZZrUXDmPXbbSSfJUy2GhTuRuPjfQiAbnT3NqVfdWCz9ShXB3ZisRB1Xnin2rRuy9XMfdSa",
  "key4": "3Y9Vz1x4ZSECAWGLQ9iV3mpGbLay9PTz7xCWby1TfFy9bCTJCgnHi1cQCXRrBnQS8x91EXMPebeNmxZckioT1FdM",
  "key5": "bmfHhfwuJaYQiMKBnHdCW5Dj1LY3n6DfDbqm44qaQEWgHQz2ioPfb53qm7rq7TZFYBHsuS8dsAfw5FymH86u6vn",
  "key6": "5hfLRig1fDJ8J8B7pFVfGjsFUtgrgFq9wfoH2nkb9iEopwqDU6xVmoffVG1TnzhGVs9yMxDcwcKweqtCW5qu48wq",
  "key7": "2TSJZvcNFozaDYj31nHQJWkCq8xSDx7KjerboGV4WbGgHpErKmgXUsGXGmSHPmvv3Wf4s8DthpZYxqbCY73FFY9g",
  "key8": "3fSYP9P5zXXiLyWxNwRUcE2wgTSkoDspxJEjhYiBYDFMCJa6UqnW4NEK1nDvJdM2VQvisCdwz7etmRPwDDe2rMg8",
  "key9": "XJwRk31rgrmr2iRopYNpJivRfBp4EEDMTzCHeEQgNo6ovCFbAHWgr1MKPhWciscJDZNjzDzbKUpVL5Q9r4SdsM3",
  "key10": "pSwVGQw2EuFFCK1pg9cqtxfFFvc1Txm95spJYxtBNyXxJvrQoS9q36ARLf2PDFLfL8wfDFnbeiEc4DiV6fbtDno",
  "key11": "3KzP2u5Q3AACz1WPSgrSEqGbhM4wJ2GnHcAEBye2h19D8GbeALnv8mjrRDTsbWabT8DxtXyAuhwUjHoaWzfCAr4A",
  "key12": "4vWhDd2cFK9WcKrx8sakpcnUrGVry4XuSFGhb626jRj1NyPYoAnTo4goMAkFEjCD4oiKSKEFDzaAusAbR93BAQ41",
  "key13": "338qZXKwJbucGHt3WeNjhDUPsAR9ABaGHA3yk8fDepFc39uMqVWYJtoEXo1xyoctkjbTT47cS4eJ21mLrtMtHAdd",
  "key14": "5YqMcD3k2DFHPHrBPJ19RUGvetS71wX95KZSAfbx2JFBxSzkLT5BTtR8jQcWGsZ4ByNCQeciqiwENS1mcK2Fadic",
  "key15": "22Sj51YPVUzWFV7jnaimMaAMgG5jvkhaudmb6wH2VKn8B2f6SUmNdZ8Xi71kb6Xj4NHs6uXpAAGKcvqgL7VGvcaT",
  "key16": "3Z7n89dxREUbMMZFVEnRbHhAu1NvrZB3j2oem7UXTkheHMehuSLmzAavN6yui2wZbideMgZeEtHfYztnpXX9wUe6",
  "key17": "23cbadn2s4tjC5uXnpjSm7ezxSW1MmX9t9mtMehr4xwsj6giPXVKQ9ASYd71DPVkNvW6jcoPm1skeQKudLSMo9qa",
  "key18": "3rtVh2apJMwAcxE5qw38vM7EyHNdSPEiD6R4AaNnaNBaWynucH2G1bmbtH9HhLFZtMWWZfFuCATEKEFjM6ChAhxE",
  "key19": "3EYQNnJSSpTSDSgnh3V4iS7HWX7UTMmKjTRccwXcSkpL1BHW2HugoHnjhcXj57oax8qw3DeXSd3TsGhUFi8FwvSk",
  "key20": "re7GE2owyYZKsxHx7RCJv8gTWRqVeBXgi44Xc1MHKzSygYU8iv82W5ap1eqhmoHodDGbuHL8YcDc7ePbffv53mX",
  "key21": "2sCcEtE5t3hgibrsPw2Enf7gdjzVRwDhVEFDyADutJaakaFToDUWR12bg5tzug9qhunmxDGpLTzDuLdAJ1ZDJ2ec",
  "key22": "JRUNhc3mHgCcLhrekrKxspD3Y3buqKJjumjMVfT5GZCtmXgFUDUfjtc8NpEQkrovVVXzkAYfEjqR2C8WfKz1zuJ",
  "key23": "4WyzrQydUgDeAf7Awmbwz4sbwZYm3e7SFC21obJ31mZc65Y2ofC1X72Fr2SBGDrMUxa9QRdQBABiURu5tmMXsSn7",
  "key24": "2MrpFfv3MssLoRXw4uBhFGsYwEAVGrTsU4Y5Lhho13Eg6ZBBgc7ddqu7VH32V3Legox6fRd8AWVaZoVp8NvHE2cG",
  "key25": "2SML7mUqzWEu33ytwHeXznqdWa83Gjd3mFoCe5gUzsmAojevVpNPfosQouBHqKVh86fBQkHakDtHnFo2p4xvy4yu",
  "key26": "4Tt6trEvY3X58r6czFnkzYJoxkisYVf2i7MjEvP7fgYJKGEqpdj44CBhuJB1yLoodmVwY4gvpoy5zakQ57RkNnq3",
  "key27": "bx7Fd3zEFMyXx8W463CJ3NsTAUx8GoeEYudFu57CdVDFgVA4mmijz9srFnYSnpCcTGjKec4Me9ZWUU7cUgfQUnG",
  "key28": "3SoED4SFWkTV2xyiF6P6Gn33qPg6K6XRqDHdaZv576gvcEvxo7HhFUkrhSnwaZHYKsY2xcRiVDCvJPqNdJ14aAW9",
  "key29": "3NWavHWC1i63UR5Qcasj3ZHfkUYje4ZdscozCb8RTeqKGY2MbvfpiARA5gBZxNrxH3EEwKQe5EV7PHx4zwFRw68u",
  "key30": "YFoHfq22Ks5t4ixXYEdcpLzMZMoeJfqrowCaRCwaDDiVCTKEW5Ezq9eLhA9TKu3ynaRwFQvLb5CepKvCwytKfff",
  "key31": "4xuicGnbJepsctqWfRJ63DCVuQwkzmP7KHykKM1CgJipiCUNEYnMrPG61MGamG5EgQWJEehiymxsHCkvyeMNWHFp",
  "key32": "2ij1P4ZHfAdTLWxRkpwEDH7WbLa1vmGzajoHaGambGLHVwTrQBkiXDi8ghpxutQhSN3nsfei4MC163J1E8A8PYXS",
  "key33": "5qYUKu3FiCwNnvS7pMLjbsDA6U5c7pidfnUz6oe1HbNoXr93d8tvHU6n6WDS59ZdrPxZ6LjGXHirxWPDWery3UBn",
  "key34": "4XJuQoh39QBuX5Zee1Wosbn5kNq2SjQPp8UZnYrsBQZ1F1S6RRq9B69pNiMpzuCGeV1ZY6xSQvnckjPpApthnuj6",
  "key35": "rAVuYP5pbyHiYycv3ansAvXLYMcHWckEWKWHfaWRvC2Pa75H1wizjQk5tED7rgvXzY9ENp3h5mNHbstSUcXRfDZ",
  "key36": "43WPiPmSGymM5zc8JVf8rAibwYDmAUmsBC2uV47s5JrHJqvN39drYcAwWpK5GyQsDTZfZv396w26gvKxRvWwqzFj",
  "key37": "77gBu6xwxkH85rt4wWVxnb8yH947xrKYZBzvGHi7LvEkzbCMuLmSSuvHfAaXXCspVpZfRRQGnHc6p941Lq5QHME",
  "key38": "d2FLzZ9tawYkqBWEysWdiHH1r3V96wtuQEmkaDqqMd411n2GNDorpvPBKn9JFHiesHiquLSTQVfVumo9UdW4PNh",
  "key39": "49K7PQRJN9yv1m1abGDEg6JrVqk3QFBVufNg7JfqXsPZG1rhWkeRC3FvEorMySBntioYXTz5r9vCLbJjSQ5YwuCi",
  "key40": "28pZ8fzyzyWrtB929g9hwSxCng4mucx6ZCANHPCM6cdvgnHmzcNo2wKD8PMPLeqqQxw29PmneCzctB7chrcMAFAX",
  "key41": "5YHFF1PfJueHBKKQdRqvBGRLZbuoeS8wCy1DEgPM9jG7pd9P1RKSZXhtuBeYFEJm9A22hNXFX79RQULdRefL2bae"
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
