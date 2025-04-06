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
    "5Devto9Y2vKBBsJLw3KyQGmzWXAX7iewb9NqDdkNzMc7vHFMJT1E2XS9sjzaZAnneYntYi2g9VLte92fKJs7QkcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GDDXjPwAqfNT3QgjQVZrYoZ3QS4QHsxLJPywTEdz28oEKbGEpoYZFKuN91ZzM673j8MCwU648kGbhaqKYfUiEJY",
  "key1": "3rrDTpZvFXT8hTAxb2WSY53ydmV6hFefj19647rPiUneJvXVkzr1EdZczgec553tSRVtpr6oDThYdEEjSmxrinH6",
  "key2": "4dwURYxvUb87v1J2stPGURfTao5wUNqAzU3jTuJ76BxGVHr6uiMsd9PuyNBEDz8XC7oQwJp5iiAGPvzbXmVtkJ9j",
  "key3": "3qzHcfnkptNE2EMqyFnNzDHnjRCwfBLjfg77hLCXMrjBneoMw94xTjzJEpZrSQVNfHbiuwZ1yeTXsQbhbx94Pv7z",
  "key4": "38gXhS4Q4JYupwMpua2mznwMNFWYmcVKPKYadSzfrBbkpCBcngZtHrviy5KApYcAQStNRKFTBH6pxmdcbzuiiVuq",
  "key5": "5dXs7uXenPMXQwDV1EhqXyJuDtNWnefTekAWwDvnLVoEyHGB8umFa8cPkVajo3pAczjC3C64PocFSmbG33wA2C2q",
  "key6": "XJWGHpNbqsfJ8TPXXW7nKay2n4vGCLETzfm1EnYUmhTyRckKMnwhK5tvrkctSbAkvZTt7GJk3HomxnuEkNwjPY8",
  "key7": "3ToXv8YigpgLLwfHWugytVQbgCH28gXo8gz448yDsn8vRMXmhcoUApXzAuM7z2NmFVD3m9wyXjEr9pCk2eJDqrLQ",
  "key8": "KB9Nw6D1wroKV3CUrN7BacwtSnhGx3fp2Awx2ADTK6Un4jwrVkv9ywFLEXJnoitokGeZVNG1EbFUVs334JFxVYT",
  "key9": "EoXUQxTZYQCFHdvu57234pZqSDT9uecMp75nFq2Tftxn6nWNPvmXi2ugetEMKJrN7Ni9rW88KqqBUe731LejY2a",
  "key10": "5gnKvVvDeRa1dYvk5iu1DU4s4UShj7azG4hqMJzKEsdDtQ22PWPQqqoyadCAFBPkwkC6q39GVeHii3k8RKoF9TAM",
  "key11": "4hsF2u5qgDXAyud3xQvfcAfhyLgz76RiVefodJFo9aNnWB1T77KzgGkppGasJt5u2QRXRkaQtHjHgWY1mctYudLW",
  "key12": "2RAcYRS96dCCrSpATugw7dATKuRkFi747XsGknu9QTGprzMF3bhDQXzWoscXBAEcw3ZaNhm3zWayj4iDvZj412wW",
  "key13": "52zAiu9heK7UukdeBDooMUSWemtEuf9VizEbEbVVpvT7TSnwQZrLvDz4AL5kTdSMkfMHAALjA3CwSmNEuqfzj1NM",
  "key14": "4RCvvmUeVDjh95SCGrdxiHkooiCnzbhnn8XA8zN8CHVkp4MHKRpTyXLW2D9dL3iUjRRPuym3kLXA6hB8QCETzL2K",
  "key15": "3cCzs1UvvDsuHBsaS9yGHX6LNtaYJAnSdNSayNogvEvNzhWG74i62ddHKZUzG8wqYKBFTJSLpzmeba69L2LV5XJA",
  "key16": "2hwyTiFGoYnk5igtgV3s6ymQmcaTi9iLcjsYMRt5q4QhkY4DmcY8KoFqT2XF7JtMfVes2XYz9YJuzQuUmTu6GTkL",
  "key17": "uiZva6aZCSwMGyQF5KWWVeSsrpeziXoV1m9wjvwEZEG8Z1978iRthdE73QM3YecMhJuZ4RNNzjKsggHoD2CSt9U",
  "key18": "3ovHDefJqAmLECmUL8dsrwhsmE2DyHxpMmX6jPynannzBs27szYBYyCrdEpupwy2KruZHaJdyAjWSGYwWLBNrb4f",
  "key19": "253pUJaGY336tUT5PstRGQpLiYAgNB5VpCfGVjS9zb3iUnzXjSBDJz2mCf15GYm6oBTAvCc4PpixeFrqrA9k3mV7",
  "key20": "2n6p6cgAnSPSAhmUDFqBF9DpxZduGqnKjyo3psGE9ZMpBXwAfY3VsF1tfBmUbYGkVrMZYzVH7Fy8aHaYQjSqANEe",
  "key21": "284Pq2A8AjoEXdnvheWWFUKAtwMa4bqMWiVkJeNVCAJ3VR5xEwRSs3hSetk8TdmWZhkHfXKD8PtQShmAvDCZ2f84",
  "key22": "nxAVMLupt7cjz6d1Bfepd1vXShD4WcaWfdxibsE8DuceN1MFaATroju5JzR5PFyJvZERpk528ktvPZyLxBC2WQ9",
  "key23": "2Dzbt42wCUHi8QHPj39nnZrRxQ8bVxkQdHEja61dbysq9anZFVJCp8Hs77LVjTA3gnGNx4ivtjuvhGe62nXhoEfG",
  "key24": "HkN4Spk41UsEWMekW1df8n2MrchXbXfUdYhZB7DMJNRQ1icvL4JrARtK7PAyC1WTGjCZuvRz8D3YnvNPDMPM2in",
  "key25": "2xXNDqqihojMpsBj5jdEXsuYWC1tGcmdi36qdPiFinMrn1K1S77YbaEfxHXMTSZyAhqbFdFw15gL6UgtUx6jVnpR",
  "key26": "URYqqQD9cKeGXWPJnmRVw7QhX5cXAK8Q7juHDPf2dMFtYdP7r8oXaduHuRtC1Squtn2LWtEGBuZF6H76kQEgB1N",
  "key27": "4j9KSP6M3JsL1xVQV6ex2JaBD14FmDszNo89Egnpn5D5zBrkCQgjQYpCUUjv9GK3A3cGMVZof6on5cVfvc3HFuYg",
  "key28": "33ZzFtCT1FfVbmrrb7Z5DBsDgYJ1PuRVncBrTuJ5ecZkwJAj4KRrEtLKFP7ZHyz9AW4HUH8eUNe6T3tMhU21ykGM",
  "key29": "3CmLtmTMXskmPPne4G4LcPZjJ3LwsUCDSMpf84qDcYhkr7VjRUwvjLsigTK9brabnN9EpByZ1FKAkmvTeYfqf79F",
  "key30": "2JXueuTfVHMAKo2GYqMGKHcq4Uj41z51w8t8QRrSFenR8xJbbrLYCzpDp6cqJtCPdZhRYd2tTrT2BMrPgWnmhDF8",
  "key31": "44YDRK3Uu8iJmD2Uif8YKwyDWvA9DZgBZgpL8KY5qLed7rvFenKgn1vYsfwsN76s1VzUhKbwrn8hrRwL3VxatMM3",
  "key32": "66N6YtWEKZMZsy6tV14evDSJQbdekZh4pYnbuTDqXyeoWgmSFUc9a52tnkuZLBGdxBRQpf7Kk1FZvU3E1YcQtv5A",
  "key33": "39edEnexPcN3UrbJHSu5xXKUhSDsVu8KoyKXvuUEvUF2JwkcV66xzGFHGskYFipqsYAyo77bwHEjkGPNdMKxfi58",
  "key34": "5fKgdEfH8Vy89ePkKKGNrKcHcDRKzPJV2nQrhrBHsYFHkMZRxYhNxCWyRSrRLsHW4FZ4UbbZKyb5QrswM5bwQ1w9",
  "key35": "xkvnjxt7zhmbuDLTtB7jyY2jbtkMUtYyPaEPSMvw9htXW1sjVNai42cDndoo6bdBGQJLvWpYHm9bVzXfeTFB2bQ",
  "key36": "3YdAj7poEgRny4xijAdGSjut8GsdB4oAm6mW1Av5HM6ATktzcZ8Ukb3v25XunQtv9kJCCWGLZ3kdw5ZScJGxQN3e",
  "key37": "ZYQTiwVEuEFAXMVyC92hFizk7fJfseK5goM4tzUudsFj6TTgwaaSjrbFPk3Y8qYXFdk1ryij4KEySfMH8CriPmX",
  "key38": "27xPUEVVc1bvZ72ipESeD6sqp1RD81w9JdJsww3ZqznfRVXLzBteKqguwSPJt2YB1xA9RRJnyoPY5utTEXqMt1M2",
  "key39": "4xyizxWfxKNdpGvCXf8t3gG7crQf3UJ9nSM5HdS1P4hnEX6ZR6AwYZwu3eQ4zHPt7GdWmQN9UnjeFTQicJZbQ2LE",
  "key40": "2C5j5Q8ngnLUSrXY3Pnq2zmPGcTTnL1kRK1EcG2wnATQU4xGQiyQTNWr2xhDwHbos76S7V5RJRd55psRsheE5ujn",
  "key41": "4S44zyE5P9eWR9orKD2VgAuKpzs65k9kgr6tdfw86pNEE6krhbeTPTAM39bwY5YsnjpVTtQZT2rfU2D5R7aYMpAB",
  "key42": "5RMoq34PnQX95H3jzwPspquXCCrKzh4C2Tb3kuCYcJ1kx44TSwp2mCWryWjEHo3cAdzyNQeb43iEQbTJdqt3gGqV",
  "key43": "3yWXJrrt6byvweTobTP1FEWBDiMqsFg3ozFVdkLDkajyTLauFzF95GfpT3i77kpniSrdmfxU8fYFc5eX2ANvyr12",
  "key44": "6FFYcQNEemvgGaJ9owksjZJgqYh4GV3BzgwdrYoDDSQ36AV3He3pxdm7kyNAp8obeJYNHuZm44Lm8GqME9RmAmh",
  "key45": "5EpjfCehE7J4gd79rnucdnAaB1cFnPcV95dH9ceDbQHRhsTNCQyoeNfPfkiRqnGozyw9di5yt9KNNMZBBPHNG67C",
  "key46": "3Q96LGE5Mq2kBFjJ4BWbScvLjpV5r8KsUyMiYqaJF5Rhk1sKq2NeXfK83qBTCqeBzrMVKCS3e3krCxjLUHsMRZ2f",
  "key47": "2gWbo2AX4kCJg8fPV3Dudfq1FZQTSMbgypmpUdgTNTKZdHjbsiwPmum3BKCcgdEgda4n9KttxAty2Q58h3ga1Fdp"
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
