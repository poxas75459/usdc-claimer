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
    "MaGyW7rMZZu7jCqxvVzC8ixW41p5isFzQAxm8opJQvo1g9V1TWQYTqbPvYfrQvBmfzHKsQnGSC4g4gnVtMkKJVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NKTPZneskHpHkqny3zBPgvARkyg1z7kHFAc54myZ9SHMdiv1UHG8qsUjqzhixvev7MWztMqQLBt4tgYsjyMKQFK",
  "key1": "5EkzuJ8RuyNE6fpDwThjHscfL4RAmjajMMwU2q6joAvC9nXNkbG4PKPneYwXPyJZYRa7APaRjTR3EVLgEmK6Fx8t",
  "key2": "5PUhwZbbAJpCvD17ofcmZJsMvSQXUWeRPjv96igTwmWjAW8PtUaMP9P8yVYV9jM2EbUzFQCqH9t9KDzjL3fBrDS3",
  "key3": "4wi12B4NHXRwUGV6b2zZUwvMa2jgz3KxWBUeanBYFonPgHLDGTmrReT3LBLeDNxgRaWACm6VcrhtAJuxWawxnxPA",
  "key4": "2f8oNjG5ux2aKwpzYvhz62tN9DfAyxE8sChQSTVNPFHsDFpymA6n6CdvwcHDTHD6zNX7LkqFVLSG8yno5ePfAzZo",
  "key5": "3TMcLg4wfoeSEEDH4CHkbSXst6HpQNUjmAwGWcmo3seEVjTbwmAPCoPXSRyGzkBvx6G13so997fR954v5PajNDzc",
  "key6": "GXbAFTjHvSRP3UQtKf8ufb26TRP78Ndbh8ihqtVXt86Z9SjG29NjUWHGqYVYEMuPBMTUwy2yHrg7Jc7zRezfKsp",
  "key7": "2Dx66Rt5kixEqEsSM2sY9gmfHWZveqMZ7udchwN3RH8eypruyLVhNxCgLFrW8dRweybRkdxDoVNwVeEnsGbFsCzE",
  "key8": "4vuP7h4Xuo4hWFshc8H9b1SZfTEDa8eAZXgddvXSNqP4XXfaaYHChWRpMsYTgm6tu9kN4GXF3g6Roos6tV2rrUs",
  "key9": "LHXURRQ8wLV7jiuL8zPei1dBAVWWzE3hRrfk2bHekAxxo9jeq1f8HcJ6Go3cWM4LZdGmhGXaUEaPAqPMSFhWD2A",
  "key10": "Rer7shonPaoPDAtEHxihtQ6hnScpmewTWGP4u4rH5Vk7kKupmBNXMya1mvACSAhsAEZttkhgf8Wtr9R19MvSqtn",
  "key11": "5W8XBbgjDCrTfKEVpgfjzu4XYKxEE2gUyt3SSpwnNK6vsdfJP8q5i6TpWp1QyCxUcEyDLeVvwq3JvaLmSSozUk85",
  "key12": "4iaWvtLer7tSrr4xGuTjL7rbivnAcZ5H4x4MZfEfnpR29NiQrPpuvcPGBcMEjj5xc83SBpVqmGBN4fhaRmLYCcX",
  "key13": "2db4dn8wMjJAze87jSGKqdrN8mYL1JjrdxxTSFMA8dtCGNXTTWA8jmShmC77Cq2UrFGGxw9JBRDGMQUQCMG6cCg5",
  "key14": "4sCsiXidrjCTgptRzFLfY7gWw4MydVLL5o24Xf8qgXfExbVZjAtNXso6Q6vecfXUZmWBRJuoePyXNpPtUgnwxTSa",
  "key15": "2629ykTDngAmiG3GRY4cvJf5TJYz7VAH97r9m2ytV6WDtg5z9WJoDD6mYdRhFTVcLehStsjEke4EED7eyTNiF8gb",
  "key16": "cjLeL92PYBEMBPxYRbF1qhVnBazX88rvyDAAsUij5QKruVawBvvzDcUfXEYqwzDSC3cAMTE98x5D7rwL4PGigNK",
  "key17": "5rRxVKDvRG7JGCBGe28ohhAw4NrtwDqjiaGs1sYCPVP8RnL4c6rL3T4Q7LGGLwAfg91stYVz4fushV11AaNfKcZj",
  "key18": "5bKMKYW8W56HbPtNKwJGmWks3kzBjjFjXW1vTXZz6qyYJ9MMRjfgq7rgASB2dLcz8ZFgvNJ84J8vjraGiYRtmQL9",
  "key19": "4tHXZDUnuk1nVL2wdgBrX6a36gJRHskBYeVyiTxHCN9G7jTJwHHZwRQk5Nuz3HPfkpUXTnxJGS1CoFoFxyZyx56S",
  "key20": "5q7SVqya3fks48YPUw2qK4uDenoLy8uPZVrPF7AW95xpRTWPEcVTexxNZtVyNJX9k7YPtNCLaLYDrm4kzEh2zsuZ",
  "key21": "5dP3CAbrGZ4y3cLydZkegwtYaqNsCz685FrcSUGbrDbHb9yUKVsEVKnV1eYDbHCjQH7UB3incRLbvfuz4RQUbAeW",
  "key22": "MS9ETbLo6DE1fpZjQ5SEwmhV6SyhYa1scvuRwzXkSWF6nu1CsEkdws97JPaaoKGWC9FxkzKNoCZQUHLJvoSmpMG",
  "key23": "2HSD3ab6XRBbH2x7ovbc8WpwThVJzwi3KGZ5dhd8beGy8gb62Uv8pKG78Rf5o9GbAzXqTL2khLV4EGAh5Qcq4fUd",
  "key24": "2DSgUWShZig5nzqMvBnaiwRY4Q4dazBVjiB79MHzGJhwuBrZGJ57TxBd8qaQebi3B2rZxn6s2whR1kodCVQ8uNuz",
  "key25": "5JXmz8LXiVX3KyCbPN7vhziUhdpqELrndrL1Ln1uSa4Tcvt6Vi8u4UeeJRkgVPa9Xw9pVnodJzzeMYbk8bvodGUi",
  "key26": "4HoHwKKfWZrCyRmeQbTEXssNRu5ySJ1fPtCQtYWcYCR72yDmLRFDXzHJVgxb5G2Y59c1u4rhVeZ5a2z5s6pdU21f",
  "key27": "3McfmiFytDwXpXUEsSaAcs9MhcjikQszWJVyVC7dpszMRfLUi3dTshxLtk1tdyoVd8dmWgiBhpw36KnF4MU4RwMD",
  "key28": "3jv72JCZFb3Lyib89TryPeXgRYATS11cpBthbyC8n65aB242dGRU1XzWv6wDc3cdS5oskuxAfcfRNB4QhsxDnewq",
  "key29": "3QoRGYrhJr4zxi1AemXmCCcpAFoooeZBtciSp4DPSdNdXUN8jw5Hky1oaqye4sNiASjLXiyGQCc6dGmZqqYsTbA9"
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
