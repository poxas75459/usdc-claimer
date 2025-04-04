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
    "5ezRGcqAxrGs9XSc3GCjKHEtFKps4h59LQ9SGDfY6ghF6DHXd6HEo43CSXY9MCNJmVmdDMdKc7GLgdobExQPyosh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39mR9yMGJtCzGzD8bJpHSbKia2c26NePscREPxMkU6V7qZwGmBukh6XTFfpqUGc936ggwaptiwkApjpk2CxUsnYZ",
  "key1": "38mvf2fcmt1yFrGPge5rbZk5GLZPDSmsEwTd4BdrJuoWJth7ebUXtDn88dP5PyU1r6Fe9MXJD6T1D6qXzWFy6DUT",
  "key2": "4uQ218B5nGjRCrkGjx17FRzTiEhDWoswMrnWVhsbky5aGrhrLyz1RBnVuu83snhErX3dcwMxmpgUo7kK4r6nuhFX",
  "key3": "4QLwusQJ8BBvE8HPmniNJhpVBjj5VamKFU8BR4PX3NNiWm3Uyz5XjdoRdx4YF3hP4RnyWK9oC8fKRv3muxSGFQWB",
  "key4": "5ApPQ5t4QYTg9f2KiQauBUfRFvUHA5EwK4MPmjE3dUwfdWrr444dT6gxuhBot2TnrqUGoKNY17RUBPz2iuxWdS1H",
  "key5": "4LfzdwG84EkGGGAVyiE73jmSaHyyeiok1kg6HRhYw5Tb8cSWEFxNDE7WE1KRUWqXwy1qp3jU9r6wyneuvo6t9zKJ",
  "key6": "i22AaVLDEGfgnxv3RgdEnincMcquwtZLsTMB93iao8JPaXvFfqGr7NiebXECApz9RYUw5R6CN2DSQ3J8ww4obCF",
  "key7": "53CfhauDr5FcBUsEpbwZCnrMAF6ph3mAbFasWCty4ossFVwzBXuaUhb8iZMJddfkBnwQADbSQGDuWLwpTpZkRJbf",
  "key8": "55CPHAiVmHpdmrK7baGuqp2sif2tLuA4Ak1FpAhKb9m9xYiF6pajjWSzMpgpCDXaDXQ4i4bUDzttPs42dJR465Cu",
  "key9": "2xpW1Zz4WXEApnAdAgASWm7HMRZ8brTpFsnt9ttChvCztVrv3ezkbr1QebAuoTt1tnHmGfvH3jRXfGwWp299k31y",
  "key10": "2rhkBBvrFD3krAKPw6nV5QbhT66NveJaAYmC7XDaqv1L3FVLvLD3tAzDfUTG52eWBUkkJi9bd7KoDnWjMW2VXWAK",
  "key11": "2DzbDM1JGbrf69JRa1NbiQS5RzvDnaEKQSBSACygpjRRsUiniCcrTszaw6NmnffWrSxgKzaiDNDcLmZdfqA4CPqQ",
  "key12": "4DCzFisq9Lg8MeRo7fZxy9ewq8Tv2VQvpDiq3THrDPQc7QZaaSiUpDky3AKmxAjcEBZKD4KNtY4kpv9t7JvU1Str",
  "key13": "2VuC2FH9mF8aj6xRJzBuQrR9C6na8oHXm8pnrQCWGzEDVh6LKTsU3jctxq1hMV1UHtR1DNWSd4uryoEV3ZJtbQ23",
  "key14": "xXf474EEPULAzGVqSuyvdVoGabAKipMNhMU9B2TABQEvaFTT3UN6avMEBtBWzoTREuvtidzKz4api2Tdw3mKozw",
  "key15": "4Qty8VRysx3iXiKCUWHpa5RksuDP4xLWm4mtTkHMxsLh1EWZBiPJT5pCKt1XCCMPHdME2xXE188fhVyJxYDt7k8w",
  "key16": "q3Deo31S3SRxkC4paSexF8SQW2aiRicnxncBYmCg8bcU1NoMS2W3S9JbMjgwhxtVSiE73RVRp6Q45XbATftf1PR",
  "key17": "38Vcz3pm2mGHgWvGENXipw7U4v33asCZCHmqSMrR8b3UGdFHuE8Y7A8o76tYTsp8S9ZQcM8wUaY6Gteq16JzZhL5",
  "key18": "5A3aaayhdhTsEiCQsRwFMqjxmEMSX3ZVipVo2M7jevNjc8eYkAMgNWSqyxZhW3P6HjGbXYqJPWEHW8G3VfTPxofP",
  "key19": "5ovSDdQn1eM3t8KCzpMrZzcHhTgWVBRHBbs746gMVv6mySDxKiVFWGbxGgH1wcHwdCCusNaV786kkvZMs85TwVRj",
  "key20": "5t7Zs65tS5E4nJ2wwanhq16R7mGEkwGZRRGY6LtRDFawJD2mvGowprTYoCvLxDZytTfhDsaebB9bw6pM6aGddb8f",
  "key21": "7AFoWMWDgz1tukkXAMBqUXXQs6npyJ4fkse8gtLcTq7A1TVHXVFwiPs1rHJwsKZDxaKvhyK97dqtdBQZvdFqTCi",
  "key22": "2PGbPSHNEvLjLPK5eTbYimkHLaePTBq5NRp8ZKLFxoupYH7a4suxPdzJY1rjmyZteAEm3HEXpuUk6C25GUebnxbd",
  "key23": "Kq5yoY1bSHfrgVvrBtHEjbuqbXXVaB6rjgk2Fi9gdhcCZG3FwAwwg7c7bGeevodnPaoLvxufAP5aunnQ5gw747r",
  "key24": "5BUgHCpAB4oUwhLe1ZZAdWWZjT4VviNr71rsK289ufVKYwX6HVpkhviqmzzKAsgzLnpAsgnJbFMH8gNh49ySmxjk",
  "key25": "3gHfZuCWiMqEtMKShM4kZTRc87pYNJp4UA4CbL5LRJ1DKPLjwctArLavtuzoC32VtJfjTnknL9pTG7ZPq3imUN2v",
  "key26": "4KhvTiq3vyKt8XxpA7w5Arqy8oLx54pAMoq1pbBabCnHbroKdPvsUG6f2StxgJcAywHL1jdJdozzfM1tCUfTGLuM",
  "key27": "5i7DLLeHVPEC2a7t959Vh9jp1khHX95qNKcNQgFQA1RcaoqFPta31CGv2Zon9rpcw8uYokvPXXHhFrryCDc5462K",
  "key28": "4Jh1B7vFG58mXs7eDnHRAwEbtN8wkH5uGcnr9YNr9JR7iq4RqWLwYkTUSwRfDtYsMuhSqTZqQbZtyFEStZuDFNPH",
  "key29": "3YRz3BBrwb3riQjUtD8WSpm1XrhxiFGxcG2RPqBSEK5Phb62harT32YdBAcvLWMsj39Y5ZuhWkS79aoM2HT7Rm1t",
  "key30": "5feskoMPu98esScBxUhP6v7xUMCnyfQAqgS8L5xoM76MBZnmEYE74ifnPCyVHvGJhzV4nfyeP6s2NnBmWjHVwaGx",
  "key31": "41oh5nT3KaxhRbApUeQEVeH684Luxcy9exs45f6HaqXaEjCvnD7MLi3ARbejPzSd8FhCuDC2h418RCehZnQYL2re"
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
