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
    "5Au57839xrQzqqnpNXWSVij9MJH7cdHuAj9vMbi8SeZkGD1J3K7B9qczg6ZdjfKurfvXqL98MWXczSNmv6ZNM9ki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FAWLoj6wtPhzG9ZSB2g4goMQ6GM6CWQFZPyW7qpiTyR7p47YZn8vHNDG3VfJJCwJkyQrAUAjiDBcZFRcE49v47N",
  "key1": "4VrvPWaXpvAHAQUNUuY2opJH7XJZwcSLyySFqf7cspM1D9Ho1PjpCdWLtKXBmEeV5dxVpZHHFro8yEiTesorbxBt",
  "key2": "3AZ1jhVfeoe5Y5vjxF3r71zjSK7gaHX3fLPJTCcNPVzLCgyKhW259TwWdZcbALuTUhB5yDQPd5a2sJzra1KmRuUv",
  "key3": "5RA4n12xpyDy9iCmFr2UKoksPQAVHnnNEKrq5iEoj8L1heBdnfZ5d8AsuxyesqvLZrDSjQ8SvpGtvfxr6QZXLWvB",
  "key4": "jcPrBS728x7yT6X8Ch8hRQLCmurqruEepKCqoWG42YjyCYNPwmo6djFSbebtFwNttDy89rvHC2zpgKsmskuW31R",
  "key5": "4hYRAcojZ5C8MWzYMU3ZVBz7thVBvn5yKKLnPV1nZ8e1zkeBqAkHE8a5YmbqTq77kT64vqNToKoRP2t1ndWgt6Pj",
  "key6": "2X6QScXNTuAwCEKYiKASq4et9baH9Rngvw8hocAk6RBYpWvEn7VYDi1ap27WvUZGZU4HB2rEMdPZ5TvS8YbKsqWW",
  "key7": "3bT5amrZAd842LjrceT7ZvkLph2MKcx8XheLxTrPzxspFmCxmQ8DTassmcdgqWiduPTr555YCxKiU5dKbdK163bS",
  "key8": "4ucJyjR4jwDX4TgNJ2gF96WfdWQpqjbBK4EVM1DJzq4LyykwEw7bxH76Jc7mVxX268x56GcqNCWeQV5CA3hsWE4t",
  "key9": "2t8nqx9njaz4skuSkLp66xeTxC6fieqGqDiY7v55DTWuciUfQ1nsZeBhpiVP84NwnuqCjPPhpeHDUWMg357yeh4g",
  "key10": "5FHxdwdSjWt4vdiVcrgPh7sDqFVi3spfohCvz2gfyNwPNXQaBSPoyXyWidvujypX4r3cXLrYhyPWr3nhRdFgC87k",
  "key11": "5qU7jHs5GYxxayeTnV7onLGG4g5vsauErnoaBrsXqBJw5vsRXBVb1VKXfvKas6BrnFqayWPodkHdeXjpCzWWxwU",
  "key12": "GKfgB4JAwY9C7MYCrVb73pui8NaLFPSvqJRSE9M6H27sTNGjgcTvUaK8TgnwJZF5z9JQrPuK7dn8L2z8nt8jWft",
  "key13": "2jjvfB43GhSVd3WJNiaHENtPoFK7MXNj9dvJ3D6zT6sNVbpB6FgubHQrqwVBJxyvzx5UiQHNjwX3xFuN385vDD2E",
  "key14": "3A5pe3UhDFpBrgvcNLuavzjzk4kqYKnFaQR9E3E4kz72QmMsgAzahe8EEXLtn447xmtQvEKMZKjkbUELNmvY3ETt",
  "key15": "3HZz97bj1XZgHuY1eZ7Er6aQd5oGtihoJYJFKoAA5AqnMKC5PeP9iH2eKPu8C77fSxbQeMM9r8aDMwyBV1Qh6L6",
  "key16": "5nai9N1YY8sS5yXKLrc33EzSsYCKGNLh1VuzxY3bMKJpUhbf2nXxCVoRxS5h86SbRkRAa7iWBAa1f6NaMg7BWN9u",
  "key17": "2PCx81TFJ7HxgNnRC27iVqu2rTVHMQTGSkDSWBDhroMnoeJ9yutCDjW8Aped3ePCdXp9XM1rPPfB5ox89c3LLspp",
  "key18": "Pj3S1WW9EdJe1G3y8Wf8CM2yPMkmeXN7Z5Heqt8KAeA62syWa62TBj3YgxEAs2uwhtyxSVK5A4Wiu8ctg4g67ff",
  "key19": "4fimP35S9w4UBvJeuXju6mby3Xe5kUzvToDsYmWS8yEVGTatN4c2jA6k4MLC7SPpjmepUWA9yZtEgyPakNiuHzJQ",
  "key20": "2wbZNWWA6dTfmR6N7CxTo2xV3goZqeW89vnpEUHYnMKTTWrn6jjC3NfcPEU8wnmuUTgEMgzLqgiFmtGNR3VBE6Uf",
  "key21": "3LgB3N3VNsHYsxKq5FZX7ZwmwdxyLezexU2bXWbYwDK4B9Z1WvH9xJGDGbZTWCRYEYz12iB6m6ZZGBz3GvQyWU82",
  "key22": "4bU1fH2iRNXJS64gngvFPZKHnXHNgF91UknYW4oS7ZGCaEovEtmrDDKgQQ22TN935UVuHhc1k9AMLxjQND2MjDDq",
  "key23": "3ZnKjeHKH4GbybtzStBrzcdznNHgL1wkp1chQJNRwcevUECL8JJDz8TPcT8C3X2N2re6GgfPbuYAkSaBWteWsCFC",
  "key24": "4sX51BChQHZWXRqhrnqe1P8tPs2QPeNp8CiPdDLn31dBCAWabwF1dCqdAxtK8tq3XbUGEeq93cWR8TEGxoJ9WDRA",
  "key25": "5cAammiCPkS2SH4ct8ex6KrNctbSCSAMYNnzdYdg3Mq3o1ZtMJ5PSCJ3JBFcZFr34fuq7GGCUud3r2oXq5yGecJx",
  "key26": "2t5xRtWNoF65HGJ6S5sQnaTCHduasDxtakp1RkgT9sacpnjq9BYZammW9thXWdm35Yo6ovAAm9NZSQNCPxgKgC4P",
  "key27": "uNtvHsnrFHrqt3oUmimzx17BaURgn7tpdyNv7uYAb5YvyLkshYgJ8nq38aH7Uz5h8DHCfi7utCdy7vc5XcQppXM",
  "key28": "G1dCd1J7nu2UEoLT8inpsECFq4N8QqzprJDwFfFZcdfhCSo9CREdyMdBbKyCjsiyBbRDF6joYxSy6iFGa9dXPHp",
  "key29": "54FBw8CD4qrxJz8L4pbTKfBYLC7NBU44q3NTPqT2G2BxPKXvnzoqaVYiWuJS8QVrosk461Khf188PtxkdaDsbdtu",
  "key30": "5n26Qgs1Fp6J9yheXUYQBXxpo9MWq1iyJfNHoeBtBPfiLVuWDrrrJPTzeVZPigFpxxxywEfBf3ro61cPKwWG3uSd",
  "key31": "hs6wpNtw9Mbrvey5BEgnVeg6VMXfMVCGXUvv3x7aLpcPeeFjm13zmfq3AHFFwPz5jzr84Xgq8L5b4HdLp75vtgH",
  "key32": "45geoZzapHcVqwV1Fx4X9pLatMVCwNU3BBRLxwXUuAVomUtv8PRHPz3hezrLXChsE8tvpQwE1shDfFeCagBmGayY",
  "key33": "53wiZEE8zpDG17DKbuw2nAcEnLvNcwgissM7otGv3b8LXvAhPvpdDgjEspmu489LVqyjKZN7pTFw7q7XUQiPzuJ9",
  "key34": "4VvLzkWFN86YwdLvDe4MvKJ9PbDM8STp13MdNKEuuAkhsZwdRPqUB7dT2aF6gdFw14Ny7RnkmWyCg89MGGwRfngS",
  "key35": "59xa3BqJ4edZQUerkM3SE9EcS95eRib3fXut3orEVGUgUkCceZGA4f9zEtpHQexHtTkku6w5chXGBA4U4L4ME4wG",
  "key36": "2UAypq3tRJQ9mYxHRbmRxwYj6CuKyi21gaHBQV9GueVDX1cvwtdH32CAmAamD4duSUrXQmuiqnVJviWFeQ5A2qE4",
  "key37": "7UkznCsc7d8y5fGz7MskmoCGqv64atLrFXLS4XJmKssxJzNPr2KUrpcgtuNZEF97QM6AqWpq5wtKswKGm1cMJkv",
  "key38": "kyD7qvzvxEKZCTG1Y2NYTC7m3jtU8PXd2Jhwvw8hmSr7dx5bWxwg2ARAUDZ3pa1Zjb3wJGZyV35g1wodBpd1x1s",
  "key39": "2myxys1mZWj8brnoaj8WUSwMBX6jK1mxxGCmEx1JrmiY6fwYZrkxrHsgGNzvzgcY5UBw6XXL5NBxsGR6r6yaeYmP",
  "key40": "kxqaMBgAuxaaNxtkQrwH1M3mE4NnE4W4CZ9TQeMYN2kg3TAmFbxhHXsPqt4Gd11zJz2do3a8NLuL1owdQziDY8R",
  "key41": "3eXUeE2TUxnkHC6dpRjsFNpoJbTQXEW77BhYE8m71grrv2AzSjhutZFrbdcDEwFHnc6phi3zA67LxCXVCpZWGUrg",
  "key42": "3YwcqVgD4rCHkRmxnMx27sbKJeLZTGsdmxaYVoJLybWyz9tyqPVgNnmWrUPttzRNQN2NQVvULwZ5u1dkqJLAGA8",
  "key43": "2rDaDgGb5a7pErkDNRFbofaPWUEkjo1oDQ6RypWDWtzVwLLb59gaBtU2iZNPc2TNqBLyiR3qQkXmyU2T373dSQbu"
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
