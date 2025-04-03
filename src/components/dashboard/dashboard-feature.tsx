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
    "4guzuPmpKEfzu16tpMjUvWuCcWxqJfeMQeU3ki5TPRqxq4kTG3HextLwKioSbCenEAwgxzcRQrDvAJG3WdugeT7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R85a7SNNCn5JRwfGj9S7vk9s7bKS2ufvuADUMtLQWSFBPSmpiTZ7JcBpM8hkCMQ1hNayeHqz5n2SvoV9yadF5vm",
  "key1": "2AcADi8oVa2DbAaXJE8GUCbn5Qc5wuVsJHiNWL1x9KdPic98grKKRMYJYqkTE1y6qjfz8D9T87X5uH7mi1LrGZRN",
  "key2": "5VTahqxb6moxssBC6dngfmDWXiSfxHX82q9gJgnCqfzYcU9Xwckk6TxqpQftrFqMR98u5Vv3erJUza3G1nRLga3Y",
  "key3": "22zK8rLnEq9iZtGYmxXHJ1gWrFWZPCDjw2uMfbsYTGZPA1AdYktf5fKJHyxTy8ssUz9wKwyC9PqycjWHEQmJUefc",
  "key4": "2WCcC76wWMs813TqV9qGs2Fhg5a25BHre2VE5zYmqwhRdDoeoC3jyLHhC3eLqda5F7WioaTYyrYyEEAWHxkeXqTU",
  "key5": "3wTkBiGKXM3iTJW55dFcKrGs8dKzZ484Hd1VrSE1kC8aYMYgB4jwgHH8rYLwW7w3CSK9ai14dwhAt5HFEPwkhFfE",
  "key6": "5MCUs19zr2XRPWMaQjHSCbeTVrWaV3LbVURGC28bGRB2LPLbTPgGQL8aM4HWznhpUN1zzy8HJsGA1WoRQe2HXq8b",
  "key7": "4B2ngYZKj1aqPbDH3Jftuv45DU1gPuLJdc9PpUizLwPH652vu5TjvPyg48jRUc7FxXnvQM1q9kcdomzEGMLM7dzU",
  "key8": "5TemHKreqd6TzXaGGpdxpqbETTyBEsNyjND7qDXRKEuRt9Ynj7wMLkjjeAYpdnHL3zx5vCWyTTiGhZuk98tXPR7V",
  "key9": "4ss8WEi9n8TJu3pJyp6pEXNes2RUSJYC7QafG8kpowkuRdHJtRN3L6nBSmTrcrAn9tv2m7N3MFrzDFSXkvH1x7Vt",
  "key10": "1PFTpcGaYQP6i4LGC4VLRvSLGCaSLj4heLzkY3bNG7y1dYR1b5qkyA2GPwqTkwUbiH9jgTfx8HsNgbyPwHZJwtf",
  "key11": "352r63PU7jMHn2NaaJwze3fqZVc9o6RFiiGqQmBFYAc4PcsuUFxtPi8CygzCS8AkaJLAwv6DgoS2YLjn8KWCrvGy",
  "key12": "pPcMnm3YCXC32norg5D1H9PoZeimMrRdXtb4cNT8zEh2aeyhrgjkviXxynBSPRbGkec4ZDSa4bU6CTTLDcPCKkd",
  "key13": "bWJtjt2GAyupnMbUNnd1sTAoC1W3zP7cpf9W5E47k4QRTr8jDFTJC8jRkoM2P2SyzTixrtvFHczVhgpnisqT3Am",
  "key14": "2nzwLYRXyLMmJJrCqU4tBbTh6dSCenZSrAJ64msdfe7orSdfGk8Wju1jMfGzduST7ov68Pn6MHX3djVyrxtYPFe9",
  "key15": "4oYGe2D8EXEUsZzE1Nrwm5AD3iuzRX7eyWiLeBCDwMr1i6is2KTQLhQSYvmy5k1nNvcYFbnbbnKMmmBtr2VierPt",
  "key16": "33vjRR5gKKnLZLrzK2u6xTyRG8XwyBrYtmpvQ3HUBLKkUsaYtacfqKxWgbGBJZEx9x9HPWgBpSHBtHNEiFopJ3rq",
  "key17": "3ssiQbjU1vG3vhh8mVeffHyLEx4afX5dNMaKbTmHpBScMrMCm8MYFkgk5YRchgvSHWDmpJGiYF3vg2rnjWZSr794",
  "key18": "4bbGcgX2c3WQf4nHHwdF2hv9KR9BHL5osN4W41Quwj8Fs3eFcqVu3XpXrQxca6dy8Dk2AG7DSZ2gAx6jwAjtc93K",
  "key19": "3Q48ZiAwPcM5YMbYZ9atkdr7oRRDQxavtf8xA5imf3HEU6Jcrk89es9G1a57m6DrvwjeC7cmUadABbnscPpzVmhn",
  "key20": "4uCULrmSG11jW9mo2bd2Z6x1NH2WdVrGAugSaneKZxFQ1Aj1nkcY5hWN5eqRAja9b4LWFqitJUQrd9pgKFUa14SZ",
  "key21": "65EkLi5jGbWy48jku6RVh2UuGHSfpX5kcSsdLQVwnrtMyuFVo4XMzF37QQgC9tZaH2Dun2zstkCCEeENeVudHJqP",
  "key22": "3V7eBfiCSaNkkZALAFM3cERA8xfAfYqLkpF6D9urnKgEH8KWnW7QLwiK4ucspCXxGD24EbjznSH9NxGz1HXHBcnU",
  "key23": "59vq2BzktLCbH9xA5v7VSRSrLpxjsQVKxAzmk18aaHH9nQ4tht234R971hLEMZfkcrtUREZPuFMqRtC9BufxU9dk",
  "key24": "2YhaeoYPXz7K3CofZLk3xexWgsQN9uX76YFNLkDJA4c1pKDePqRXXZFJyC3ipT8co2pYTzwWwdutf1C9NroKLvSg",
  "key25": "275RcM6zxrE3xuXJhW7HwpGWaUYPyzcfniR7jWQ9j2RUq5spRo73ofdC5Ni6Rxc9Uaz1oBfXo1s8yfc9hbEKu4Av",
  "key26": "3yJ995vPEq6V3pvXGN2iPrzu2XD1rV199RhBi4Kt94a14RCYxkd7r3sEQjb4BJA8yC1GNa7FbQz7agLR4hoB4Nkt",
  "key27": "5VaTKFY9GemJhm5y5eYPZn4yghkrdhf2cLpSLZHvMAxgjWNYa3mptL39iZendQtUQkwLesn376iaE7M7k3eBmuER",
  "key28": "5WFmR2eWofpNodR3S2MJydEBHUAmaXdUURgzb1uS7vCWHwAxiXKXmqQqH1DwzyHchG1w8fNjieDPTQxzojzeWhPM",
  "key29": "2esfWhQjFXF9fz99hA7CR2NuVyVu5UNNTmUbsErxmn22Se6nEWGMKqaQeWiRynGRnoj3uWkrJ7s2o8m3DoGywuBJ",
  "key30": "3pCWDfkFaZuPVFbw6QPuzuAchCMY29AuqrEkjt4y3UmNz4jHztWgg6Z4EkueXaEjzwa9d5og9inybrDKW81sSzGu",
  "key31": "3tFcsneiDwf3ARPSXGKSiBHdy7RXnjqEBdgvikmK6D3aSzvxK6u6JHD1rgeB5RRkDtpjnCKJxzA1xu3G4gqMP4kD",
  "key32": "4La1XYoHJDgYTYq4nqcNQdSh3Gwz4jwdJ49K7mgYw7kudLVGW45uXx6yJ63PQcHN4gpw64NLwQ7FzEEehn1mVnFe",
  "key33": "4CPdqARcQKHJJV5i194rzfCFzyNUSt7Q1iH1NEUqYoe3XJrT1fsQ84ZGtF9C5jriCfEZo3mf2k5j7ZKJHcznuSUc",
  "key34": "2RsyF79uCZykncsGeXdFuxPmZaLNpLP7V1TuAcqbrutPVC9KwtJSVaXgNeEK3CcmaxAbXbbcFoLhzL8KLVwcwV39",
  "key35": "3D11uG2A5MLJnyE21SdtydZoGZwhkorrYsQtgDKNpcMLdrYwCezkBJpqfHjnkWeRbKwV5rsVYGCn7J6asnfzBeEJ",
  "key36": "3VRkVqFPtJ2kdGjujbLn23TSNEt3f4FjnRYQ9SNjZXnDnxYXpKkBtHLbrxR4FxG3rk7QiJcLSDCt7ZSExVM2ztWb",
  "key37": "2vCVAsyfs9d1HUFNat6da6oXcXw6qTrD33nhmtt9NnndkHJpbUdWoqGAbT9nwbXNPp7QMMKGTcvrmUif9LyE3z7H",
  "key38": "583EHqvPmSv3v31bQHeQr5YMyeJiWnuuxFD9owM13oRfnyBGYnn6tzE4jMnavUDhj69sapwWudX87DeUK9sPEnhD",
  "key39": "2ZpFRhV9z56iA754icji92Vk8pED6eaKZA9Wxjy5UX17N5sHLrQV8Cisr6LA45c78h6xv5y4dHnrWdbEPVj7eUnq",
  "key40": "3A7K5ix8r8d39BieErkmELKxMguMBfkJ4GMJkge4Xr2vorBfq8JAHJkJzo1F7mvVxXQT4VF4gsE5ym4ybXrnjB5x",
  "key41": "3hNJ6r52WQnRZ2defe8EQn7AvCWunPAaZEhmydcYVwrGFjkSFEGTeYmBkorqTNkdetUs7DThSDho6H4nfJqxF64f",
  "key42": "25XfZs5a4N59VGWF2CeoMANuXB6QCPNzcwJe9BkrskKW2Enp4EbksoLnVCYzTmDdTTtD8ehAjx2s6SxcqYfFZdPA",
  "key43": "4VDGudSN98eVkDQCU1ZAHuB8tWJuFFjZy9f1qjRx9uNrrqV9E2UhzGDDER2wigJqnnAGqNYzir2gcKseDo8gtq9X",
  "key44": "4pEshrDruMQLiT4rhrqMZve7Tu47uefQEH54NNruRDn2WyfZKywaY23QLM3YsbNHjus4YKYrrrCar3M3VYktZVh2",
  "key45": "46CcUrr25nqhLR2HzmFRN3E3ckqaXjnBVzgh1VFxGQGSRVDgn95ahffAUobEaD79AFqEtvnSRirt1M9qAt1JcgvY",
  "key46": "4WCUVs6YEngXUuEhp4776nsuZGPj3Tek3KFd2eVRThq6qppTTVMc49igNpBJPEdr5BXSNjP1NJLatc6YnAaWpbYY",
  "key47": "5RVNarMjKjFAiBei5jPHQYpkMCa6p46Mk6G2TJnpLtQ4DBZobozd92mFhdysCmiejhCUYTQ82RRqDZrbLD3tJs4y",
  "key48": "4a5EsJVLMz1auqJAs1y42sDJWZzohfVRbL6GAQvMk39C1JprNgg2jJoJg1aPWYgMwQPse6ed7XyGrQddddL1RDgb",
  "key49": "5QiwiBzkxUTgCmmrhk3gmrAaAmJv9Wh4Js2FEWdhdrMTcxQmAYc7zLiEdfRyFjTiNcgd6JhhNow3SKa7nwWktshE"
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
