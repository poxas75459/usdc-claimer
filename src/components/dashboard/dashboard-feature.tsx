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
    "4qaNsEWyntWbeb5UZSNVyuRFg3sxVdYLo3Pb3Ga5VNBHranuuyE2gT92DziTZCetFu3k68RWEQweXBGactR5ABjr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PhRYqnYannr1Qc2SXjqi3pWVTZJYZb22PhXQrgLQucavagZdyaqYmfMs6GdAB4k8zMbrUKAUKHsG8VmYRfkmZyJ",
  "key1": "22yjVTw3pTXcjrN9iDk1chsMCUbJw8uGG2nX4TCArCAueTeeDw3ZfNHDuKeXMeVshiq8wEVht84cQUHTpwtyvAa2",
  "key2": "2T5AS2Foabxu8GoFT8mD8B8zuV85P8oSHKXsZ3xydF5q6Rea5hd7x79YDdB8j1EYS1QNwLkn65m2PajWh1h69Ge2",
  "key3": "3KjZgEbvBHrCyLKAaKP7G7kbxnd1188PpX7z4aRnpjkByZbJaosCA6P2UbgwMJPMjeyYQmgAU6GCjkan2rxEW3Rt",
  "key4": "3k69pBJ1ao1TeS3xGkEgb2Et1wMpVDV8nmx6idtUXAbBYw4XrRP8FfgBvjRWpVTgaiAQSk4BuyLPHUihk3dGfito",
  "key5": "2G5hdDmgnRkod4t2fm1vBg78jF4vwrpGekDBivMD7EKS999kik82HM6e7jkk3SmtcAzSUcfVqHGPYU3hMCiZhykg",
  "key6": "6344tq21qatTfHBDpBF69JogAMgxFGPbNKzj1ho4pGkKgoHJjrStDzoKx3GRQx39eCqn7a9Nsu7tzL2KSuDDof26",
  "key7": "4Q2hStcZiuTrRiesrzwZdipUrXDAbgyXp6vHKoNRaBETK1pofV1WBiA3C2np9MSNiWpMEHk8bFHHeyxsvCoX6SD5",
  "key8": "5m1nxxy5oZUS8p4ELcMWv7GPW9ratesosaUh8SG1BbN5ExFt8JVkH1U3QsSWvVAhdV7bXBhpHsY4exoPzSGrtQGr",
  "key9": "NQzhDAceXEF1B28GgA21Xf9jd9w9xgmvdoph9XwVnZ1SHxVU1PwCnF2rnXuUMZP5mTpX2yJJu1JxqNFHzEPc2ZW",
  "key10": "4aPVrS49YoFgADSLS244woSvcwiB3cLy3HXAvyG1arTqkKhZtDaQZmB3shwyLcqsfa4gMvvmGqTm4rHh1WSzuMZB",
  "key11": "XKFpJK3BosBf352GKYi9D5kfShAhqJkuzqCG2Xy8ub8G1HozErbQ6t2YPwCVFcRvnoyxZPTRrsPAUnaacgtZqGs",
  "key12": "3CpJqRQDsfaHYsgFJriBkLwg7SDq7djtRJ6iQDXFEgWoEy1gHiT56JoE1uZ52xPsSpVdQP9wChkUxCzDMcQC2AQr",
  "key13": "Dbyvv3T4VXYJym4iP5gr2GZXNN9aKu57nEi7MkuWuw1GLSzcpSDEE61wYvMAVpfLNojxXCg7MTtoHEYtgVSm7Hz",
  "key14": "3EDJmGtL3qFhgtGqzJ9RSa8tN8zxneWhBjmiqu3FeV9MdbYYG6zSxhwVNMcHCDpzQ8AWN8B5Ku5ajD5eA2twNoys",
  "key15": "2W5fUbTmQMBZXKnas3MtSxjiDdwmjsFV3oQ8x9cDcHmRwvUtY9Hm8Za5VoYUoywUtjZzX9njXCvx2hc9nznr3T9X",
  "key16": "3bW7DmUmnCNkBFo5gmK3ErKjM52KYELrP2dV7tpky8DdUPjsJ9qKhVFYPuTTiP2Z7gKbWrZo2L6sfjHLs1b23VbX",
  "key17": "3rgPnrPdLmCnTxRCaJKoGBhKJdq8XEbaY2dCMhGcb6caWtiyXQcQYcKpLbJ1Rngsz317BKnWyTeQue8WxSbfQnTZ",
  "key18": "3GtUJ1aoi2NvmMyrUAcT2ZBPE1Gy3QhFf7vgZQzvTVqPGxFMPg9AfQePhSsFXuqtSQtHMSMzYZiMtXRb7aRL5r3p",
  "key19": "3FPv94NDJFVjqycoxhvo2wJhvq2nCx653mzE7tHUZANpNgrbisZ1wMyUGZgYJvwNqhteUpksXx3vaQfgXR8Ne8RT",
  "key20": "VXE5e6QjUpyoF8KxGQ9j98KWwr91Wpy5yLE4LbDNJ4F8d5b93AvaVG8LiBXxK7UvhSwcHqTBmVCnD2883PausKG",
  "key21": "2R7VS2zTAvyUHtjV3ESf3FWbuT9Gm5ca2NvDgYR3uQqGNZcj91GRgChyeiCx6dt6VfmduFG4KVHtQmKr6qNnqEN2",
  "key22": "64cxLmVTXfvP5sw7rAKJQs8a7cHAdEvhuuwWiSNHmYozeN4ua1EmkCg6aUXBViBwGJ8f6ZxZhWfS1ZsbR5FDJgvq",
  "key23": "NLNhqpjG8155txka512tG4ezJPqRC6BWGNseiFa2yPd8B5BvfbdpoqasLyHgQVA9WYh75WiCcCQ1nKGcKNFeRdo",
  "key24": "4p4nvGQmk83VjVzXXY8t2YEP12FxaHnJQqoS9RaNx1nmTjuw7crqEzvMXrr2PFBTyn3qpuLAxKQJfx59xMfSmQeo",
  "key25": "5dx9qpx68HreNXAxAvJrjDeAiY5s3xRMcfTHeRxhXXNtAEraaVqivJWmwmdHvuxqEWN8knphMjEQrh2Kp9TCceHr",
  "key26": "4ajJBT5ZCrp4tteER5wkdHXVRnAdMYGADENzcjtA3VVM34N4py9HPgBKdCrKZnS6iSahJWoXFF47MJ2Z9hk3fYbk",
  "key27": "j2qsCPxnJEVmN5NamPdMp5aup5LKieqyV957yYBdz5RuEDAie8qxn3bLTsp4pa7dCRCzaU6CXdsQ29jhK71UF1z",
  "key28": "3JeD6GQniTMsJvdcY7ggbGnTUUa6NL3NDz5VHcbC23v5tA8nt2VUfBssHPVXFmHh3tbbtc2hAkEMJVqcvaX4arje",
  "key29": "3hWb6N3wypgRJaFihww3JK544qcPCepeX6QMUG4UPz7UzcE3ATEDHwVD6pye7E94oMkYY7ARrEAojMXD7AaUSrfc",
  "key30": "F5c2J12CyLYchZztjivEaDXZss1P2z7nSXGJgLNUeuaWEurzfUYtRZyYJaCEge75BFAkPgJkSU8yHxRqSvjs32S",
  "key31": "4CGKUBxFBpNzEvS4HRn12YstAVMBPH3JKhdbBpnmexgknFWeBcS8PKfau6rdMBZT4cNZKNee2LkNq8PR2duptMNq",
  "key32": "3gwkaDVzLNAPafx2bHTeFE7bNj9XsUvt5sYzfZxNXxYvR2RmVi3EJciT6MZqjYcMXgeAZ6KpvCsnC64BFKkiEoYT",
  "key33": "38KXMVtNzLUaruMbZAoefKUXvxtHKdFpcvrLJjke9CGG8CjqKkP976CYDRTfvMptZNvLx3VcrUJGB3cVWLQi6KRS",
  "key34": "4uQcRBTs4PBWUBEjU8bq79s7nJm7mTa4fF69zN41J5dBdXAUsN83UueR9mMyfvGH89atoXTjmSyTzAcFxpdKMEo7"
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
