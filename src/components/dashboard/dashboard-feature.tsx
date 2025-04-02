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
    "5TyHAS2UmUSdMu6NzC2EJofd3BLsPQL3t7cpmPkDAwAW8oB1qxYrBpJHUXx36Vhq3WjqkmTH7AzrvqD3vtqcCPD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vy2Ma1FkMxw95wocjCTrbiyg8VQa9SizkbZEaSjJFk87RBSJ8aW4dfjEGii7JhNTwTZki9SS7BQjoUtoAxyuUha",
  "key1": "3DxNmFZn9mT1SJUicFTJa2zWf2Jty4aHio7LP8JZpyTGVzSxVSXh2CgyRtonnLWg7U6buEwB8PqZeiWrDrHQBsNx",
  "key2": "3qmm5tN2h3CivtqktP1TWro413z56Czd5NvWnTKw1W2y1Q422gXcrSssP6q7mFbqvoNnjoVdsxjomUnnX4w7NL7f",
  "key3": "2xfA65dTbSLLCRk4gP5vV9wSmDyj3qMP5gqgrpFPKhvYPtU3vxWjaFqapCx8MYrFo2w8MEH8MxEdv8bvYnY5EcA2",
  "key4": "53oNBnk8zgMMNzkFK7SewUqYk3URQ9dsgD19H6VopfPWKBsGgD4u3FTod5PPHwksUWaxcJ2z8cqTytvmQ17rcAxy",
  "key5": "FeYGTxKe7DcHfc3U1Fv3aWFXWnKQgR3UdJL6PBNqY5wVySKcE3suZ1XhshMUrshTZujo2gJeieaV52XRNzpbRhu",
  "key6": "3Dt8QVJHJwzrswJZEorPcfsY7sZFqzhFwMCU1grKFwppvSbmpX68Ta5MncxnRyAkxPf9ANoNpUmX2qHgGFMc66LE",
  "key7": "3k9ycuMJK8uhEMUETHUfcm19uQhmBaZVPZfGj7K8rTaPkWMn5cJgHYbgykuQ88r14RYctuCsvADznLBdZpzbWzTM",
  "key8": "XbWckdZhmyUCi98FHFXJaBVejnDxthy2RmVGJCoZKFcmsV5Mi8acR3KUdBm7EeVv1UAL3aD8QV3G317RYHiSHzZ",
  "key9": "4ALVgtakYvBYDcpsEmcKUzQa6ffzG68yn9dRxgBFDHBoCzQr95sBvpM2ngpDwZQhH8miaV49z2c5GoMkKTNkEAcd",
  "key10": "hcZn1piwuAkR9fcMu2BZTcNJdXtEkqjBno5NStCMemFkDhgxsum1yE1DFfVmMAEvEKW1YzsQrMdNoH7dpdNQgPD",
  "key11": "21CskCFwzcquVRibgb4C6JLsYXTanvf7Hc4j1iBsFoP8NYxD23iLmiYzQQPPvHyaMKK4Rod7xvPU1ohSmShyBk6T",
  "key12": "uLPXx6YrZQAUW4ugmLaVSkcE9MMJvM6bvRXYH8En2JTSMuk1pNydi8mpZ4EjagMJabawGrZoEez3TGraL54aX1P",
  "key13": "5B5phX3EMvZLU9RBWLpUUyrtn3a9PygQ5bPWVqzQpsCCf3DiEdnP3E8kxScAfPWnzfVQAQDtqtsKx9zMvr7n19kH",
  "key14": "2ktGtFcjS4h3xduaD5i3kh93M8KZ9ibhfog6oG1saVjtdw8kjJBa29VCKS1hjz9HpmPGGMuPNPqpuVjXuTcrkTf7",
  "key15": "5ZRpvTJmYjrtgwST5Hhtf7ZRPBtUJtfi4ykHKwy7s7mXqF7FLK9AsCzoBBjvuXAgbKubuMNL5jNDwE6NnKz8t3AZ",
  "key16": "MnWZkihmeej53NdBevSfBe1HwcrLEppU4zJqwZ42tVQyfas6NiDhuU6J9QVtPrHxpmHDvc1ygEPnMigEVUTjEgv",
  "key17": "4NJtimUq17DUw7LL3THKcpAxsViEvMitBvDNeCPBLJd4T96VW5y6tFvEKLhyciu5QjYhVop8bQrdz8rFk6h96d1M",
  "key18": "5LmKBvjMPWsHH1hYNT9DWDVuC1VRVzyAMnPde475CgPsmqtNcdqCdunyKfKWiM3E47akFvpJCrymuu5LUZhLjC1r",
  "key19": "4bASvQsLoiDi3SngXyN6wdF7w1NbTwfbsxn7JNM7zDUe36ZsCds9MDnokD5chXpWGAN1WRN6W2NDdMXgWnCqrkH8",
  "key20": "443LCCyQdnkMFWpAGwuhHSJSxfFhz1MHuTFQ9jGWeWr8ThqtE8pbNjMHcg9noARxskf7fx91jzuvGt6oYHMn66zR",
  "key21": "3Fcx4Bf3C44iy6ggC2sDJ5hNRGNqU7SUBzkCjUWPGttuq3YWHxQHKpweJj9mvuDABrUFZKH64MEbg5fEBCs64Y9L",
  "key22": "5UsTEmztXiFnNtoQxeyg2a6YAVmLkLbF2vsvs63JhmmQ14gG24D6LrKMwXK8j4yEV8mZzpeVMGvNA2Kq3eff4aGb",
  "key23": "3mMpgTKeypE2ekYHiRZVoRa67s5yHPizU8LnjupiUaU6qTdVscRPrw1yWmroLyXZe4SRu8biAPCjxDFhGNjJqt3T",
  "key24": "gpqBwKMPSYck1AwGg6ZbfKKqrhckarceVERhNqqbrqWZUcn5SER2oTd8GmxPtMPpFeoeEBfzXxQMELDnTFxBEPc",
  "key25": "244C2CiMAmSbXhbJuMg3zpFkke78a4cJETqtruc4JDf6Rfg5K8mp6qNRz2k5EgQZGvTDFxPz8zVgBPnfeUHZRSce",
  "key26": "22a91zsEA5SdmNZgocNfcssB5k7GXHbuYVodGf2v3ixV2HZ3i4VeJ6r7sTy6yEbzvEhdt1RpDrv1HwJbuZywvZfW",
  "key27": "3LP3Ww8zMka1SsbQ59gvEyWQ38huBDkwC36LS8jqFeMQ1ba5hAZmH95DVW2UwsMNS5Cv2FoQwCVc3dH9qf7Fqzdz",
  "key28": "2fD5s5yENeaUBZ2u67XwkVTAR9GiYkiToqH2KMAgpCmgqUpBes8Tkgt63jQDWjHxNvFiHJSfKFpuQPTnkVXpyKLc",
  "key29": "2QLfWXmd6TjYMXgoet4QDFRQzUWToyHJDtdaiD7uuWDpeWqNAPQAsNPLw5n32sQmXBUXY68hm6Z426wvMxrkfE6Z",
  "key30": "5Ckf1vCeFcdERCLAiDCTjfATrT4jXw2cKZLC7hronWMPzBRxBDG2cap3qfffzFkoJw1NtcncJCj3yT63Ne9f9Cr7",
  "key31": "343rSyskWw8d4CeiDkNHKZnxLatU3J85cqhjkhno8VtYtcnMYx81vabzGvV1R3efQYiFqstDCBLAmfLcfRS9X7dY",
  "key32": "5GEukm5XbaimyDnYxfEQyTKsA6YHSRkv15N6NpLd5UZCr3hkbs9jV6tCMi6vhJxMEoxwnPTjdQZNEVtyERFNycuE",
  "key33": "4C5zwWv8vxKKrTk9p1V7asoNUc7bpyyEwjiyShRokQ68RpkNohqNSwheuxX22VQwvJRJXzRPQtL5PYLeDSHkSTKZ",
  "key34": "4LxSrCKRpB2fYEzk6wcnUx3Ck61Viy34javKboJfTHetFi4kay4gyc2FQMLBzL3CbHjt67PousHsXizuzmthFp8t",
  "key35": "4kcLiiJr4rA9gYGKAj4A8x3gGvZghT6PsBjcv7njGaAZgUgTFseLtQc8kJKCJxMnNmpD2XYeNMPLcfLiBgmiaxnJ",
  "key36": "2c48MhKsogGFeULJG9sNwij4s1EFchr4QeESqMkohwcqkhHmagqF9TvugEr7BxThfbjt1WiX5LMgHH2ZVu7x4Jkn",
  "key37": "2U12wP1wWmgwfF9jiao5ssAwQXZRevTBQxwfH3W9mj4N55RpdDdLyVtALG8ygbCWmbPifDSZRjcbbeZVeGU8kepy",
  "key38": "2cXNj51FEdHj1WssB3kYyXiWEmDp2MiqZQVPek9C8os1pdFahk5mxn7LSsfV7j6gd2LHivpCWHwEN36vzRHVPm7w"
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
