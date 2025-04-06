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
    "3922TdSJEDYakvPPfrjNVGr8DNYKKktZ1bP2TH89Aj9sJqkRvA2pcGHXNPjtA2VkTssusMvDTTGeVxnMYx2UuUpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46pkAU3djoHpAFkjDjfB4hCV95pV839mZTabxsoVJtDxSsdAKLAvMbLcGemN494idTdXZwRBD59Tpfj7fwYN38jf",
  "key1": "3uHK9cruqadGvG9ViWqhTtp2GBnXVygV8tNJyanzjmmj7TN5iBszfxMCBmHTvkgu875bNxP1NuKgZn3TBkWmZCMU",
  "key2": "3KGfXxisQvTTuKA25n3WPt4RGi4zPQsBdZQd4opT8Jh4moJJzYoz3stL2mdoeMuzdNTPY5mLDBPsCgUHNBfam2CV",
  "key3": "5tJp2YtDnQdNWgAny6hsXjAPGGe5K8aPTYYRrrwLjsfbkcYK4UCHUxRGE6YnBkiHY522yr77GWB6crPZ33kYiWwS",
  "key4": "2zHNCFj1WP6H1tgGZgVV2vNGrxP83FN6dFF5EgybisrvifAxdRyuNydCecKgjV8L315LSnyGFp9qfF4XAFvjHwJV",
  "key5": "3JaFi33QYVPMeAEfcG5i6xLNyeDqESxYGfdqhB5bPg6a5A3fik4JDHrf8v6snRYNgkLCxm1xPsTpsKGvAuCJq5HR",
  "key6": "Jy7StGX8ejwdq1mPDcVVgrg2z2V3MzVoLsvX7RnoeBn56a17G5Q99DsWLLqxf7rwzFp6t7bHgDpeakyPiV2oixv",
  "key7": "3m4LEDdBRmpQp5sZHkHp5jbTFvn2VqyTazK8RBZNMnQsrwCEPqV6EHA21WZvxvwuLR1ucMrviVm1NjrydkZfGQsf",
  "key8": "3nrweZusaKzvfRFjaK3jCnHxHU2n3T1WWR86yg6fKoB1j3bWqkM3gDw6qkcq2ZZ5MPtQa19mUPWC7HhctM5tz3D1",
  "key9": "2Ls4rTYLjcYcekMMJD7qhv8LJXjexFTHQjuF4w9MyRexhpvbg4F2WYFoo6LYoM82fsrfJ9JzcmFtcbR14ka5kkmF",
  "key10": "2j3hbSWsEbWfaoKru52YWgRJJ1Ux1tKhKiyr9MhMvXzFjwKyuHBMDh6YfBhRej64Mnzwv427xwUuHidFBgsMHhkW",
  "key11": "4kQ4Jj2LTgSdHKi1MAfSMj2kqrtcytpnrSdH51JyjYP1s4ZX9XQvVqJHuaPo9FfgJ7gCXDmq3LjpYJr5pdjVQYFx",
  "key12": "4cYciYmgeP13dgnm1dgKDAMQwsYR4YjgjgCXkSm719gBwukeCE3z4Wg9VWaUAwnJn9VL26UD45xbGRi3bECkNYrK",
  "key13": "KaPTwpfpnnGCqSkfDp1qMwdyWbsGAGVKu2585PyW2eZfF5Zskxfbq7s6Nbox9DiXJNh37v1SbMn3zHc6HqHpdut",
  "key14": "8XuctfKYQspCDyGCxLtGf2NMPMuueraz9NwpjjraPMi6RWMR4ruCme6FXE6hRxbrmPZpmDYSybpKLf5VfugYtS3",
  "key15": "4f78ovvT55pwHh9gdDTSpcBHnuDzLL7XEv2SHnfAGm5rpWwuU2XFTLy8Yiz2iaAtKJCANbQqgA5VDudDKFPcntFK",
  "key16": "4ju6dXimTmgx52QQULEy6wxyz3REx6PNQufoan4QE72vQHS71QGrnupTi7UhZR7A1iyaJ6bYVK15uY9aLLE3sK78",
  "key17": "5CqzkVwsdD733XJmiepeTeipZXfHHgZiFmBpP4yFMUnodY7vpYeUPVHZRa1pZUYhZhbhEH3qv1obB5X1PLCj3RrT",
  "key18": "4cjc7BFe4ARDKadj9XgsieL7jRr33BcbP51CMKCrmtSoji68xFS2LN44ksR4nd5bbR969bPwaJeGmKTB5C88njTe",
  "key19": "49GEcNNxZbqafitytQ5SKPy3QxcaCitMhY548LVWQhMJocp9Zqvok4WDGc7KoqKYFh4jNCmDhxQHYxUhM8JRQWLs",
  "key20": "4qKvsd2HhcNwALhkQEmgKvaXhayxMqA4X6dgZSV1tHcbG7qREXUS51vZupy4WqDed8T3NCDhAgWwGyNaneWhV22Y",
  "key21": "3T27wku82PMSe5SUSkgp8dojdHaM4egDLP4MFEJSGJDAQu7V3n2pg5vpgwdeGWmmf5hruyHy5fVw9Xarfs3GLw6Z",
  "key22": "3ZAXfS5Km19ALojkjBtY7g6yu8Gk4PKLfEFqqoeUAKrfvKusEwrF1ghvhJn2WtdSef93FAf4vAzouNSKazPvAYMo",
  "key23": "2WeU8BYfkM77w3boPmmAMixxHgPtUD2BwvrTNfKcEH3oVKykWnhBAX3PyLS5MfLY4d6A7Y5K29rP6opY4qYf6nee",
  "key24": "5fYHzskTJZmGhbB9DfsoSetvJtUFS5kHfvYnysnhXoL3SvLuq1GzoDpNWFDm2CKmhfPPWX7ufbHnymbnt15LFMmU",
  "key25": "2f3Saf6RaGWqpgXx6idVjenwMW7eZN3qQmsztsb1SzVWSUQnfeF7AdBxPQk7zWJ7q6E3sy6ZEWY2mueaNW7PPtyL",
  "key26": "eCj9iArytXVuotWNtv2tKGdS1McyGoPTQSeUW8p3ktZRXJzmFtCipVcup4n9B3cZJGbCHH6gyktrCEJqfT93cvW",
  "key27": "3unztupNkeGPXG3DWgVbXG1y7LCDCgz3MyW6UTuXHXkdLUMiiydQnHpk1fNp6fu4P9JDghwyyQFWtjX2UfHjSSGG",
  "key28": "2ijWjhoehbdHnVZX7z8tWeB7sPnYN7J6BThrP3rwFWTcYEZTqHbRayTwCZqniVBArUSq1iKgjqn54M8SdPAoq2Pf",
  "key29": "41THK5LSV1XcKSVZ9zMLYiA9BrxaRkGAK4X1LadetYwQg73dguVWtTgDF1JNnJtDFngx7qbjau6x5wmY51uNiG9e",
  "key30": "5Yckmv7ohjf3kS5hb8HjPJXroMdCfEMXcjcpGttqUVrX4HFW4Jj3sUPYkrSV716opZrbeESS9EJdc5uEfmjWXMSD",
  "key31": "47QJUFL8cMx4FFjQLUL27bWhEpLvfqQd5GGJ1V4WM9V4RfRdn4Gx3aL7taptESFZLzDe1cWK2xT9d3E27Ko6ykZW",
  "key32": "4GYwZ82edeUrYo79HdAqAyCYJCbcA3a1Caw7oTHYSdRfHTt6bu8cWRC86aLj5v9gzupcsPr2vdLSgLEXWfkYfhtE",
  "key33": "4QSaz69VbYuABZq5AsGht3gpEyTsVgDJVUm5vJStkwZ62Ti2iuwTdVfwDAmudTGZunofNjtMejNAYxqePMWJU72L",
  "key34": "2UKnbieRvJJHTQUpkXP9xaw72qqtgxoTAcrcnYz8WHhSCqhvFrQeE2NgVmZVqYLT2CKaEuSEbbFxc2dcea1KeyKn",
  "key35": "pk4sKc3Hjx25jsjZu3LJhGMWbXch3FKgrgJvkY5edPUsLmd8YYSwHtPCX2b4pUEfYZUoNWRQ2EJ4UXWVeRVFzPe",
  "key36": "2oGA8vzfSGA3xwJh6nFzGsUJ3AwQfjBpMZm8C7NckyqRCaaFJc7LbokXfB8QBzhAqzAvJkL3JXCEQBu1HSMvvDgX",
  "key37": "3cz21UFjgJ5B3FmbsQxwEsLGhiTRpv3JhA2y1fEPAPXQpLDDX1YMhRoV55GysVw3g7icDGdCgfp1GXu6gtcbAptc",
  "key38": "3KSsTVto9w3i7uYZ8uoBtCWbbQSQ11d2HsuPL8sGN52eHLQLjg3SR9f1qPMb1zP77hVFnX1fAerXWpGxajb26D44",
  "key39": "5iebbLAeVYMpt9jnuwtNQyeTgRuA4DcAWyZP7GYZKbbW88sTs6A8mPpLttr6xAb9gnf87vRJzdievWCxXPfeKhve",
  "key40": "5sTQn4ovGbQm5kYu4kLmMBgvoJTWMxCPLY82Chbbb4tiZSTmXyTZEFfzx7MkVcFsGEroSB48TA1yAkShKLGrRZQr",
  "key41": "5s3g9BA7NfUEWVduxTKoR3Ae8ZCjx9SabFMPsfy332HAWiDmFcwqDtjzQo6CxkYCMb1weHGeuxzRMYYLm8MJnP21",
  "key42": "5ubcsZtyHAAen8bcURMcmi4EBDdkZvRadyt4NBAXHD5Y6agoYdw7B5pDeMCZNFMYez2f3xGh21uzRAVv4689S7y3"
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
