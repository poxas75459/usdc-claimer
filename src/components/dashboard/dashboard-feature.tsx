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
    "5kuE8YhXupL9rFjB7SR3B1dcNrtYFvWXxmmA1aE87GxuztsYSfDaLo81FPTtmFBrCGD3zMxMGYncv6ZfpS378bha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TG5gdcnHWfJ2LwaMG5BX48PMtFUYDyYwRVryGP3WEh2SkmAHodmGLgVmPhqdDfPjwb5dXX4UgJDfNrCEbWatLMi",
  "key1": "545Z5Dn8MXaxJd4aMULTWqZ6wfuFRv3ag6QVijgmc4RjVQE3TyuCEKfoyejh115ahMzhEzsJ1DRogvPJsGWRyaVw",
  "key2": "3vmmdNrPne5DEV4ijZ1bdc7zjEMeGbx9L6E7QZGH1CXGTGSTLkGNoeaPDLzqumUVm1dJjc14KJLB3a3gpTv1Yzki",
  "key3": "49oHraJfrg7cjxW5ixnxQsZ1CCqJff9g214n8MYBBMHP5Q6tqYvscNiKUNnhufpBmgikg1UTx7F7jvhTWxtkB9KG",
  "key4": "4c7PQVY9hqZWKbgxDPqVMX5MzfRojRASajZdSzdequJjesqPaUKU9fZTM8Rrayz3F4KiCEXZ7UH6suxkn6HQsxZd",
  "key5": "kJZFa6SGgQW67gs7HewVHivncHf1ra5joPN5jZzYUzBqqNjMViTUvYm6DaTC9NeKCoixDjjtE8if81hSDdn3eUc",
  "key6": "4eTuQLxKSUFh2qACkSWWBqjyNS6LM6PLrSpzoMA7j5tBkmVGJZbTibyZL9CxY5Kza4c45j1yo6tiFPtHCibiT7mw",
  "key7": "5Qe16iehPxw9heSLQgwxeU9FhPrQCXQDybfQsxUEKDtQmLEHF7ZDdMsQPypwpvEXrMAtrJg3Af1KJ2wZGcsayfLP",
  "key8": "jy4PybEkGekcB6aAhJ1LueMzR1G5PE896sY8oyyZWXBVz7SPhzT539byWjPZaJvrqDFB83MpoMLQJpNmza1v93c",
  "key9": "dYckMWRJFS4mCz9yGWHa9HdBNKb6S2MHtaireYotTXxEMohVbNrY4vbtq52zrKK2v8yEbhi3qdbdBUzU9kg3b5z",
  "key10": "645mLpvyTBrELou4tVdHKvMxgNRfcAyeiURj1zAaYL8MBb9Bxx9MapaDr7wd9yUoGP3SRnuW8bm9QupszFBN14Gy",
  "key11": "5y7ioC7QGk2AKtTiXmyUE9uVNK4gu6dqNzcWjYifD1w45NYCV3kRPu1YEfcPUbotHm7cLC1SGeQss5mpBCn2vWAL",
  "key12": "4eDd4qfGAEpAUquKHXDi2hrNK3Bg8BhtNwvNuFc9PeDQsr8UbJpN5r3irSAgGBjbKiRsNHxkpbCeMpFE2a7AsoLX",
  "key13": "3yzPX2zAv2HDUdXVNkS7oKRRmNnrGHPrhQ18fYAfi5x2hktmJ8SS9au4FqarGPvu2fhZi7XyhdEJ226sCrNr8vHD",
  "key14": "47FkTih15DitxVs9kKCxMQpDu4A8mP5jCr7TtubC7CZ7K4ScFx2me3SatPVMjd94qu2M71WUSo2kQTyUCjS5d58",
  "key15": "4weVbhdFcwV4qFSscB8udnSBJ47htYfpEKjzCFQNyVVsoAykPiVnyhUGgZJ7CH9FP3cRFwmnk5aj48mCyGstqXXT",
  "key16": "3tSgVvPfsJPKJWpzzX4HJ84DZu88uktXJGnggoano5GUxbz6B2LtA3vgN3qSBT7TEBrMFgqc1AFj4DR5AHE61325",
  "key17": "3SmXGwrisCEFsvEdUqR6EzPAyPinTJGpz9VBPrYUiqPsctd24rBmEH4JmgvGJ3akNRXqJNQo4USAkTSx4Nu1qqTA",
  "key18": "2U6cmP3Spm24GzLW9WXaUhhVKw8qNofcBukmxn2xCeSptpkJQm6t1kKGWzqnmogKMmJzEDh3ARAHsGbkGVsLBKvD",
  "key19": "4EwMNUvSywpGQzdek3saFhG4eJ7ubJpfdPmRRzwTkAPeUmb84NfAyBXxQ1Vrpaq62fdZ3sKjMdqvocAcqEQQmxSu",
  "key20": "3P37qkMR1TxwfzZM8apeYLW1rLLX61uv97kPoa4xrtgHfW6zLbLnqQ15tdTCMZs6y37hBmKaCJ4VDKmrsZTGTReX",
  "key21": "5jFmfdrvbnrSERxhdkUHEmMvpLRmkLQjRU8K648wn8DxGyfNEnYR6No58h9zf9bvGd6Q4r2yjqT4ohG5CVvdxoip",
  "key22": "4S7WWeFJoRBw1zzYbcAwksUpDAwgQ33GNxPinWh8pv6cqe9gg8FHXUjSLDr6Au88ZhtNWgmh3ykFNV7aCetowczo",
  "key23": "3sJLYndfDE2SPExnta8pPToupLmrV3YY97z3Cm1Z66kDpyMv2Yib9z1vAgiC7MntPrveab5redWFk3YrzEL3TdJG",
  "key24": "4ceKakFU6qVXKeqsYBsY1aQGNudXn3tcDuEcxUaNDAjNtgrgBFMcy6n4HQdrAgc9kTkbLxzADNpoSB3cHpVbYQe4",
  "key25": "39VZPRPRNkRrQL85j2zTg37T92wwEPpbtvZPfDjJroEcJo2mcaDuveJctGHR9TASW9Rv5fXSR1SkmiwSqv1qCnm3",
  "key26": "5XixXFN3WvnKbidCaTzknxxsfjYGkgDNAkeWWhRH4oyfctnKJ7SgayzHiSNmbqdfEYGfraeYPoBU6Lp2NN5udoR9",
  "key27": "4kpZcxSp29AJ1H1VdpNP2HPwFCYg8QgpcU4W61TvE8vBRo754ixoSSLraSkoBCBYvNYU2JE4tsNKFeMyYv42MhDd",
  "key28": "3TvPxB4DnppRNPGARTUTa4euCJceuAkWy1bvRBtvoHUK6wvycRYjz2Cc37cKekJCeFDKsiayAdZrS5MuHJJTVvZR",
  "key29": "2JFbn1f3kQigjFMbvcVppQSiNRugFnjJVpkggwHP2NoR2EtMcZ4SUEiYVdbR8xTtPS71JCrc7QpzoJ5kqpwcnaEs",
  "key30": "xFqEc1Tf1f1yoj1H7MftjiyEhy3VTP6cu97ipZ74rWRdmbfkvLPP1dEfLHPoDBMaWzLUrHQgGSwAZtMzvnJWHW6",
  "key31": "RchwzzDp7DwDJimoqV6rwRwLPwXEfX14odzXHL8AbrjgH1SaCaLruDo7PGv25LXLdrU16tcdxQwQtoqSUTZXLv8",
  "key32": "2ADjHCN1xdvJP7FnishrHzMxhLNXQ9ka9BfXB6v9HXvgzwdFCmjLXFZxiv6ssqrunkdrkVfz895NC3HkPxKKQDkf"
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
