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
    "5XEqQ6scScmdFVT63pz1KEwE6fckENCwfZ7zzZu4aodRAdzc1g2mAUzwY4LHbomCttGp4raDLcxRc8sW5EWQfc4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PcMNzKVcyqTYYpnwifi6aW7fNCxgSmocBQPLtJnLbUrp9XrDDPEzdubQWGWBkcsc58idLEdt8mkVX56n9XYd3sd",
  "key1": "67AQxjN9rT2jVDySmB7Fnm2wBNBC5G5LLegzRJaAP883nGU59Fmpb3TBFRbZoDrGNbbM6Li55jNzPFRyqegCKM6n",
  "key2": "4ttLQreLbB3h3WrpZCVYFi2pyX1LdkxHt1QgHvmLxVZkVARExU8BVzDDm4moi2Ex8aN32SXFhRE1WqYoarKdGNKL",
  "key3": "4H27xtocuZ2yEdjnqSD2ofikRUSDvx7sHVkRJpnpgQ6vRrs1ygd9RVYZRSK1UCmNYGDFDWDKN8Gux9BRe4MP6SsR",
  "key4": "2wSpv4pe1HVTU9Y5BXTTPzuCx4PRawzKCnaVVGWdAsF8wsyVqvvWPwXVu5Jbg8G1TSpuJ3uCavTo8FpDon4SxWF4",
  "key5": "2uyn7PLDf3uuHmvKVdQBnmNPvm2BJvZnHr8zRQtvSEH1TuANYBPNdhs3QSbM3Q839wcW45fRZaaYJPWCGbaEosk5",
  "key6": "2fUcjrL8qfV9BoGk8UyRgxb7rEGH8VoNq3H9kbLVQ3gzqETTcWoq6dxngV3hd4ZaFFPb2kQUtSqtmGqHxGwuDcLa",
  "key7": "5oCSdd4mee86zGr7QTNad3WM3XFwdYBDNeRhNyes4uP4ffq5JxG8JfAPCY3N2xyVSG8kfWvkPjCA3P97VdwsFngi",
  "key8": "4RnmHBGPtVQ9Qddc3rrMrdQMSCss5SjMjj73U27xkkRDCgV5XMdAQw2qGbDV8u4KrQWQTXza6HFSBrqd67xi7LwB",
  "key9": "4FJdcqRdTSugtqED5JrBd3KGhDA8PHAbz71griCyZwxtnAtywViSmko58fm3GUuggTgKiCciPqnE3bgwUTWREnHJ",
  "key10": "3c98ma8L5n5A45SUtXkHPvV6UYs2NWML6BnNUoUZdfxEWL89w5gh9VMxsw7KRmGPnDvNSg8vxaQreRBK6epjL2S6",
  "key11": "5N6tGGvSGvUo3btmB68tcDUyNvMU64juwembwgAXxahoBcNbFgLGYqQaEMELuxbPnGYC6CSAmCgd8ZC4vamzVogE",
  "key12": "53ENudGEffXRiCvVXgAXmdv7if6vvZh2EsACcmDLoV6FsASqajP1HKbYmZ5e5X7GpYxgCo7m1mcfDSzfvoq349ac",
  "key13": "5ekjd19SPUwbhaHzNS2oZ7zrfWR8S43Wy2fdKnxnYa4VUfQx2ZyhhznyYqUi1XwxLujqzE9muLvrMunDkKZoqw6",
  "key14": "4hWkxFnZdfpQ7HjaEHuC7ppR5HNCD2cBdsu1o6N1pMdy1erMTuzhk4UeoBbDgPvhgsFfT9A3DHoUXrXLsv2K5FQR",
  "key15": "rWfL44UxcA1pj7ZWUy77W3EiLamW7DuT76CXYN6E7cz3GYxS2rSns2YCbjici4UZgnoD44w16SeN8V1nyoFqD7r",
  "key16": "2MqjSotQ3P1VmiNfCCHhJHoJ2CvT4ZoL53gZq4hk5HfnnAqeXDX9hHedJjamb8B5FZSqY7N92c8hCbk5ekmcUAKD",
  "key17": "4jNLeqBrSXgTSYJ2tP4E2H8uXVBULFAmhjFbwRvWQ5bRT4JNwAskQB9CK9yZc3pxR3L1E1zGDFtR8dgHrNQxByDq",
  "key18": "3F3SeZqwnYfbXXjRhTjti5BUt3XGG9vaTys3vBuqyH5jTq64SEszZJkLhqEw3A77TLSuwjH6rzc674mYdCYwhTKW",
  "key19": "53XXobqs4fc8Q2HNp6UG9utovT1t4ah5wJMEuPQLX7SeN49W7RacE1TueQ8B5QVCef8XtVzvg18mkgbtBEUk2tju",
  "key20": "SDSeUftTnfhdSoJryMZw93hLcaN3Hm21HLbB9ZZqtJJuKam5WynoEgbYeWd9szNwsCJiTQBn1MMQzuHuuZdJtr4",
  "key21": "4VTezvtWgJ2YR3vWgUboNVCZfyDUJg8pjZfA1yQLMGEiRWPrvrHp1d7QRPEYkTYUipiWgGryvBcrsUCJX2XqD5oJ",
  "key22": "471pc6Luv1YggdW6KQLuSPuCupRxW7jxMSw5jp5rdWQyDfP8pzGFRectwvXFV4tqQ2wRNwiLE1Ee56XsNeexgReV",
  "key23": "3doZBuCdvGCfNidrTHY6C5w1VT96YNn3bKS7GLzhKhXSMxUv2FwhRvAFzyZx9bB3WhuDLsELZwu7TbpPaCDAonXX",
  "key24": "5nwDwApR9KPHzXuCRbZJxcdgc5KbWkbBzj7Tyek8hXzBNekHRjurM9Z7VPSDuiP6nF7BFgN3SbBKPQ1fysfWnbY8",
  "key25": "37UxYTbYmU8cE7aeKiWnN3FUVcY4P8vT54pcKmDts2VJ7GFcx4G8EwB1pjv9FErvvgc4HTG6xuj3P9xRS4KB9ESt",
  "key26": "644x4fFb5GExsnT5cSiBqT1aBvaurrx792KQA9mCquNfoV68a8rzgo1eX1PXfkeWQ5f5KYqXtuNDrRy9JrrFAdrK",
  "key27": "jNsdwwXdCi61PtV14xCqEoEP7ZKskT1od34kj13bMCNLKbQKkDtsWvbrWdzTtCvU45vfQKYnPYDvoB9nBvoV56p",
  "key28": "2aZiy4xDsGQWhhNRDK2NtuvFmhSxJnguNss8wowjrW2ymdHYMxkNi4xMixnJXgvu3XunKcbgDJBrSQQRibkkZPvw",
  "key29": "3GFAj4E1G6ubmrmFdToXbHmvyf4zCjVQ56ap5j15V7XnPfmSRoi7kZr1V2Gw5P34XicX9KD4BV4VmvNbh3XTHgiJ",
  "key30": "25FcwVhFKnYe52mQmT6CK1drXZXBAoRia96oHFqhPYKrUjU9Z1X4wxJeHaHtKiXXwVnEX7A12AL2H6A1QoMaVtDg",
  "key31": "NqgJg4jnJHwc9krkkhBUL8zJB9ATeoPj3WvMQShEQf6Y2gTfe6p6tucj44i3kbsNUXEW2rCYftmXfC3ni5TpbPm",
  "key32": "3ekpNhfuNuTCeaT2RT48vdY3bFrygPkkfnkugA9CFqSReXGfhQn5gwwy5ikfbHSwStWFZDLqwPisbgd8wZmqPL7y"
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
