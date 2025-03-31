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
    "53sFr15sWCRCWCH69VFRPkybnwyStCN5NQm4LqAqeBiVzx1tkBDW21B3mjsBnsLSwUGdFt6BNGVedQ7GoJNjHWzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t38QNY87fJx9YYpjmuMxFpyvaT3crUj1F7zCnTrZ3hcYv6Ff9Ut4bZiT8uhGEQ2kKvHJnjDntEjXHnzga7fzUbU",
  "key1": "2jxrY7oqjxfoyDCN6EAqv3ns37BuN4fCKejsy4VgSgzivomZnVG6ojcHzQdbqTQi1V5B1Tmx2FqBSAsiTF2yi5cJ",
  "key2": "3gyCP61faLFFeB1heXPRdhEVCMpkaoiQbNQue21x4WunQxZ5TpEtnPT4FugzKiq5SaXVVg5MxkVktStLwcx4D3x8",
  "key3": "4VMWDFiTKGoGnvVAMebCZHSSnpRdDMKpimCnUjoaqj3zDsWWQdf6KLd38HsYy3PRvz61YhmLn8tBuNSrGE6RsTU1",
  "key4": "b7534zyFxnSHyJNZLgyHTXTFmyvi88B71qwLckFYtHFQi52WNxrMM6K6pu9wXEq7hXKHub4p3P1hfSmxA35RoZb",
  "key5": "4TaDwAAAnsLjiY4JYPJ55rc7FQ9RFPExwNTLujh75TECFhobKiX6MJHMPh9JQtEodJrtz8RZKD9bur2x5fwqiLq6",
  "key6": "2uQkDdVqSG5v3A2CFRWiZVtpt77Tgo1TCuySKabGoFHyRQYMdN3ppzgFACGcohqv1gin6Fn24CTtV4pBCGR2tzJT",
  "key7": "3huHr9dpjpcXyA4JnH7R4WGjGYsxsbvGqRL21CeXR8VaxWJr8KaxoVihDTgbKh2FJAmoY9JiwaYp5MCcQfifiMBN",
  "key8": "513ZzcneU9B1N4zgnhaETvjaT1FdU38Cb8uxpsmWsgBw34e3U44Jz2tuQeyyJxxN19SpfPfL9gMZfiedJi1Uzynk",
  "key9": "4GSJPihEz7Nh8HUFq4TFLW1JNNkcLoHuRvxFNxqLMYsaivnh1bdHdMmgzVJwe5D9jeza7K39yHB4AZZkB26B8RRV",
  "key10": "526vCNaUyvw9drWx1wVF5sr11Jk47C6uC6eJ1bUkpReTA6N6pF1P7JUtL8GGi23t91KdYPuipqyoc5WqR6nzoVaj",
  "key11": "4FuhQpyNPsCpaqyz4KY83yaqYjdnktqFmmjJmsFBJ9WHsq8UqNQHqxyBedpa328sUZ1AEB5VBq4iZbbbJQ6M8gSj",
  "key12": "3q8D9Nneh7cHdS4755Gny3W6FM5rzAvz6t12yxpQvzjUT6xGegzrwQ1c2uDYrmBgKR8BP2L7b3t6rvJD826cYZXe",
  "key13": "5w2c3Tk7PCd9XJJKGNtrWvR9Ht5fXN5cUpR732vsTQXYPUSetTWZwU1MbJTRcrUv2HKGmHBMCFvYwrXeNbkYpoVt",
  "key14": "4F66XUW5JUYp4t9qTFir2RR6LSyS1Ha799NmJPpg9fbBYs51txaa23PcMuve5A7T46Bb7itcMLEKjr3D4NAU6G9X",
  "key15": "DogWXrBeb8TY2m8vrcxjNQALCBkPDm3RoxnqoidTsUkusywzWGpHJEr7d2Ny9xoiayk9Vyw4gG9rSPq8dPUji7p",
  "key16": "4NpJzqtQhRD6jv2AoBYcfZbukLts7ZtYUqJthddJ9bupnJf71zcuZG9vRPUcqGgAprpRGThRRUzsiqCCgkHwWhYk",
  "key17": "2uByQeyWyHhiFgqNJ4juP9yYytHJJpBrrSwJge3KLrhCNtVrMQg5SjXV9tBo6XQrRH5BepiCZhiJG7kU5ZetVSGa",
  "key18": "2gJWAPSjXv3nZUT4QSsChvEHbeyiyz9kALt6wkUBQektcxLtEBFHChYg3AbgwgwxSQT83Az14dY1bKKiUdwhxiv2",
  "key19": "1YqjDptJAcScspGQi3gcUN2kBUewHRXQ2b6tCPs7pxxdS9uSJGMktLqK8ixS7B45z2BPdzzoHH3Ewp9YsA5GSn6",
  "key20": "226MpV8RYaEz3LA8TDjhJc4zE1CEiyF9cmEiPUtoSvPUaGtX6ndtDP2n2qX2qvkbRD99K4LENbsJ3K8GZbWdLtJU",
  "key21": "CfxoVG6wHLajJYgitSCs4ok9ELmT6SqTujFTZEC7cLpzxMWSeCpfN6ucPguj589qQJx3SRSJNNRFf9LD2iMGb9p",
  "key22": "3WTgytKZUcJX5CraqQxZgPNkkb46rRkdTaFBwiDSMVaKhSPuvSQsxx9BsKokQGpFrecjurrZgLy8tP1TKpHrsULR",
  "key23": "5xqss2UZdh3YPdZaJdUVnsXbvHxSHtyg5WdoSJpuKKB7LAvMSvu2gUB9pH2pDeFdLVFXa7cZTU9AvedYcLCNdSfo",
  "key24": "5hXLJvQutg4cQ9LQx2oDMeog311fFn76onJWTpi342ntyiwYd9EaCpoxzFAp7Vnhc1FGvfuiMFQgdrvWPet9kjTV",
  "key25": "5sKPobfWr6g8MqWvJJVRpYnLCkfXpHexhGmxDoGFwA7TRkiwkmCYSuWsNnPJCJYWdRj2UjfSdf3hdcf3mrAhnPk5",
  "key26": "3b4ewmbwKXM9otxEKvCpCv5BWBcgGKhMXqL3JDAWJWZSTyf91S3mV2bEtK6z3BXyABvnK4Xk7cWhCnQ9n2N5gAKc",
  "key27": "pYW2PqKAWktWZB8RENBVPGkScmsVjdefNbfm3Df89ERBA1U4KLbXwQg1r84mo7HAdm5Ry82NYSLvMEL8dzhwJ9q",
  "key28": "3qYRQTsD9oX1otZnB8YGYddXmSSmAqFSmGCnUe2Y9FXq9NBGZ5LAaiyBD1YE4RDzwtvWreXxiNfYgB3G2418A7Lo",
  "key29": "2oFGW2Q2SLZnNm438W12U4yThbPm6tUURsfWmwUq5UKkTg41Q7K3XMpt2iSeg56h6K1M4pjmzPpFTAQKg5K61XpB",
  "key30": "4Tcu17pNkaEmV5gLTz2HAyxwr3pw6AMgbvb8WBS8HKT2ZQUXovLRfBog8bwqkR5j2GFqYs5S7SkUKp3EZP1g1RwN",
  "key31": "3TPMCLayaUXbZCK1qvC3sb8fZvS4G6F2S7DNLNcwnhDeFk3Cgt4m9mg13wsDCjVbruqFVsxnXxcgwbLNRN7BhQD4",
  "key32": "41LXmZ1R7RpU2D6mpw4RNwVYi64Yt5Ecx6LsHzJyQYJYEDbi2bwM4CCr752ApnMQrqmq8RNkdDEJiaVef13krsfD",
  "key33": "2qbwpJhuhx6sFZoCX1wmD2WpxKadsuAfzo62mfpkSWAnyKKeQ2Xs3P91cuVSEMBvXqUHrzbwRpbDMi9CvxUXWKsQ",
  "key34": "9gSHGUd96fXeQtMSo2axuwDPAX1QJZihXS55R5YH7AGPjUkDDDJKbrpJ82eobnEdsyCreknVFqPgbMFX8oUPcvW",
  "key35": "3SgEtRFfv5uWNN4EQmTL4Hmg55uzrVjfupTCFYdHmLs7JvKhbaUDR6KrHNmTejnW1Fj9d9ReUr16snDnEMta1xR5",
  "key36": "AwsFEiaEC7eiQJrbpVqqX6iaD2xFPVA2Nv4fcNpgYDSmxacPqa5czWUcFp4BitLLXvr9dKLj2cYmADnRRQ3ByiS",
  "key37": "2jGJG47zYgaBmz5hNkfxxJeQfo7c768pwfaEBqtm1boJ4J4tBTn4SSiwMrBsDjQ98co1VfhQbuCDBP1i7Ba4fiho",
  "key38": "jZp5eq4tM8ynsMwydn4fVovPTmtEwPCU2rkKtrxxJncbJqiRkjRtsDg5VGeyGCqQt1SebMu7QdF1Jv2vBR5MzJr",
  "key39": "26ZSqtk2H3w7VqMxx24XSHynqMEKzaY7jzmdzeBKP33JBNcD28iS3KZrLuQgvvKmyNay7YcYY2hmv7AM7Ekqw6pg",
  "key40": "34EeSxP8gp1BYqzVo4tvcHqRYmvpKzt5Z1RVZFtbptJUboM68GSxQVDz8Ks77sE6GuWmHPNoPiCNZvyS3zyhRZfh",
  "key41": "21vYoistwVQs6oAdckKmhiMjWFK8eMQ3sTcp6i4qW5764YSJrcFVb4CtkdogMqQgMcCgpXe3vjMPzGHwrN8wxN3A",
  "key42": "2fGVzs3G6d7bFbtXWSHN2ytyE6RQnh1mjyGLmDesCKB4YnG1i4UtHCRy2JY3gWpEHwKznXWc6QKvqrd24kztrDvL",
  "key43": "xghsTeQR3t16sUJ1Dn9K7axNhPhMwoA5FjvFeNusLGov4L82W7g539rmjBy2ZEFUpDswpkmQTwiMAw8mjbFzbFf",
  "key44": "JY9wX7ymKnfLE7m6VmLPTttXGvfmBoFjN6QPWj78zHxRDUJG2WZM1UzQktfwwqqvNaJ7BixFxkSXkAsfthcEsLg",
  "key45": "5J711jP2PCJCvjApSbbPzDzt6wo3c1rp2Uby26zZvko4hAdr6VyUR1oCJoduHrRKMB47GS9fiNKM6o49spXTTCYd",
  "key46": "2tDi6D3FotZnHAzbjr9knHB76qdb1sTJQQnxeSTWPM3nxm7DrBGucP8MhyEbyrVmMH2b8KkDwEgVPf3bWNmxPJgw",
  "key47": "2Bih7ArBZoDkipqLQJa45skesrSQjHTDjvZTNMnqYZmH11R9WvyCvykzAoSMod9d2bSPgQiBR366ioMAQmoJdFzk",
  "key48": "2zFgdDzMSbXsZvttGYdfBLXXHrJJTdauw6yjMnJEoJmS9vEAXgsDd41H9pV3CWPgqvMLXbjCSjCjabHQwsoJEf3F",
  "key49": "2YDp3ZtuXv6hzMDT17S5GQ22kE57wcBgRwh3vhshgPrLCTpAVMNUNRBsbopUafdyFY9gZ76m76SKXCE1rXi3Ps9o"
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
