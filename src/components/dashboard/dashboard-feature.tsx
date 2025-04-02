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
    "2EQyj5LcQMYy1AnygDEsV6VeYMGrNpQkmfe4AZYK2PkuaJAtn5X3d3o61bNN1c7PMCxwi2wXdgZnCwSt5Koy4cMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r6qjVW3jpgn5ycVayqocT8q9zV8JgY7FNWRopmgqUtHuR1zNcCffn5FVfLA54eUPe7rQ8qacS9PimhwzqAHRvj7",
  "key1": "2XBvkMBeAoYrF22XEMh6jtEqgjhyszv365j1vvJLhH1MUeT7YquAMewM8MYBU6GJDqSGjggs2VCLio3m1eLVVQLp",
  "key2": "5Btz2ZjDwfx2FRYKMQNZMkW3UzM5HgB6o4GiewUgR6z9EiRN6JUmxJRJZtNF9bNHya4PqkwTnjZ7L4LbJGgugaMq",
  "key3": "9fmq1FmNh6zVLW5PymX5gBrZbFP5sdRxgkhePoukLJ4NxzS69iC4ZTHmKnVeNeKKNzsYHnQqxoKGD8i38mwNmHr",
  "key4": "2A8DdwDTpFpWmhQyN3fCFKCtPYV3SHerKrDaTmCeKKiuq4qMES6E5WneXmLuuZLuxsX4dMJHi56AvYLdEkCFpDZg",
  "key5": "5byi5AVA3is7nbq2BNXFRU8XnsKZ1Lyb2vxsQnc2F1MhfcJ9AnF2y4SoF3fguXBny1Yf4GuwMCMeFPSimgXidtrP",
  "key6": "5tdJZif3Hext5JRmiudvuns8Qd9MwrGkvmBk3JsmtgKR9GXpEyR71ZozpaM4BzgJmaxqDfH8CwGh2cPNU8SQYN8X",
  "key7": "37GmL7GDs84SEgAjjmoKtKegTr7WZ2TEPbGLQYUvygjm5knzKn35E35ho3SVMqZ11a8PsQ8gxGQZegdkhnpXNmc9",
  "key8": "5K1e2xv7VEQizm6QAPnScwu75iTZSENZmGUnwf2E2Rvnaky2x3NUdTmgsATT6zLpdfj8pbNFK1Hi6pg1PWLc16EY",
  "key9": "2LNJQMwwCvStEAaXCxPRyjNGKmYKvyPM3We3uHZ1DNYAQNgWgf4timUVrxwiHc7DGwgoUwAb7QjY1NdeYzaa1BRz",
  "key10": "mWawz9VcZWESL1uic8BsY5CvJqbomE6UyXHSfwZGwNwdGVmnPce83AE8xiPERY3wMS8CsPyZeZoEJ3pRPDQ74Fh",
  "key11": "BnLX93FeVCxmR3QBq1apMLVcdzPKkcjv5X6MstovuZhHoB9wJzCKD3WMNdxCWMzamYi2nejwKByA2jYGW4pisNi",
  "key12": "273nEwtKiQW1PVbsLbFkHiJ7gAxBEtDwnt7WG7EgHgXzUzVBVqHsTnjna5sBFAZwfKSeBXBkcGxZsCaPgeC8PBdD",
  "key13": "5LTteAnRFgV4CuMSX9pog4tosrfVqts9MLVfKounCXs8X9MjVYnunQsPMeDnSCFbjd1LY6DTD6HBCEMYeVNnRYBt",
  "key14": "kdSCCmLKkfdJ5ThqcN86TF4cYm3E31LygiiNmoNMY948v1LquWUsj1gLgBAP6NRvg6jV4vPbNAFkRHLL6ST3qVV",
  "key15": "5FM98HxCKXbpSFudD3nXLzVUDHfus599YJm9Kc1jbby6tqF57hdMTiDjjGLJjc6aGMjbvMkrfFwtgLCPMEJknysx",
  "key16": "4pDFWGTovBdnA1AyNGjRsvY4Azk784emTYjokMciM2fMnYcLRDW64p9Z1AqevSH7r69FMQaP3cHs6PoibmC5ChS1",
  "key17": "2EFaPhX7DWMniSTppXytbFwvrjrUbQtZN2RTsuZUBWB6JNYtesKqAsHbSS73fivrBNoqRpHC12s2iUpM8wGAwzX8",
  "key18": "toGNZZDL7YhGytn8Q2aN3pPtC9aYGhGJi7MvuoySPAezjCCzDah5H4oweZgiymBXecqtKFt7CX3jGAMmwCAwzBS",
  "key19": "3Q1wzoi9JUwjV3rmvShywQ1dVeSAyhtMrWwKYvhWcweqLkXykK2nHHc93Nbomrtrw6phQyabuBy1e9pA34T31zAa",
  "key20": "3tXurGeudQY1L4kFb2MPUSRerLQBz8zoHdiqLTF1FyQRqtwFLf3yCJnfwPmREzZtBGAnQBui3axoeczAt5JQQxcq",
  "key21": "3WFjFNkEe3okuF9HFykLEth4sZHTomiB1K2V5s7Bx4QdCV9m2CynFWLzhEU5qF14pakuE9oAmEY1ziW1R8pGviwz",
  "key22": "XE1hX45GTcg2cD3KJkMLQazWEHwkyN2ta1hft1PcEDbRMPHRq1BdCJ21kApXMSxySkqxRsbU1ZgeACyEXMmneWi",
  "key23": "2AqPQgQ9oZu3dF75ov9VFqPov6Yaim18Nh7uKGdmeAv2ggxm6HSevz5PM73WarwmLMBrKucfRgntjkpqYQo2rYXW",
  "key24": "4zvEUbGVb8PTwQzU9guHYc1wqpCaSVjMkuM1YY8Hcy5r14G1KvcC1NjyvCkHCNfA4H3BUjLhKBWUJyGgfLymKzQg",
  "key25": "3txbRwSPr5pga3nY5ti6x6Q26VFp2g35DT4K8vdpec4CnS7xFgoxb2csCjtp2bKr7f4pzFgCmrQNFCxGoaqAGSnJ",
  "key26": "3d7tAtQWS4a147nBCcpNTnxTYjTbkoczK6htq9xLGcqm3YeC1qqufCSw5YMf335ETyCGrMU2xgc3f1ohqg83zRYy",
  "key27": "5eSx6bU1kgQpPYpLVdzRTywuZuoWNrgnzFRCkDf1AM1D8zjrXYWk1rKWyzvwJKghTSBYiP5JotH9rZzYF13rAg3i",
  "key28": "63c6kMPjKYDmgmd4JkxJ7gfrvmifJezWdTFiRgMAPgnNyh6T8SuujbLCLhin9m7bE83mYEatk71JNq1qfwuqup8g",
  "key29": "5if2CPsSPpNFqt2q4b8kQ4LojWNqXYYpwcmneSi4cxKaRVT9wYafn2fR9HwTpYbbAx9ieAQ3iKy7nMAGoYx86RXX",
  "key30": "UHw2RPCm39jTRnT5BuWihJ5an3s6agw3CLdVKKmHa4HcrKqH6fDpamcy9A1BAs6ieHHqkomufrpSEoibLh4qGuR",
  "key31": "4vn8Eat3UE4FWTNhj8DkCv5bwrr5BxfhJhLsTgxDNVa4KoNwHcsK3Lqs8UfkfZHR4LStRXrg8W1yNnizf9G2359e",
  "key32": "5y7cKpxRUGANee8o8bmubNzQmcN4hybJW9ifWHTLvP5GeYdAEzM3M3k98pG482NuoaRKjDgbqmtnGnQ5VsCztHWQ",
  "key33": "58BR51hFgacxNbtAXDcYx24BbaBqn42uh7M5MHuZTSFXxURwWfjhtzbenRovAvgiyP5xgcXEMt1a5jf8DEi9fSi8",
  "key34": "269btNkGUcr5oNKiHshUVDV9Mz2Pnv6BdtiBqL6GrTH1XzQ38BfYHzGueiFaX82ZgoTsCxrPW9HpGSf7rJvYi4Ce",
  "key35": "BQB2LyxVmWbaGMRNCpQQBgEYc2nEFd1buHZTZ81FMxUqMtMK4M6bRiAxVCnav7XVrhDuMz5sKmmrkfr2Agq15cB",
  "key36": "55E68GB1RpDZ9s9uvcGDi7p8a25ev1qfqzTPyQdnM2GMyBebKgQriWfRPiTpEUixsfnuAGPHVWVCnbkNezDfZRsu",
  "key37": "KFKLHtfuh95UZhTT5uzMg4CzH2wXDgWhZrWHETZ6qWBMAoMctbYeqvfV2sZpTBxnzf9LVi9XmK37VVg1T6saR5T",
  "key38": "3K77AqwPBmqU1EEt1c3erXLYbVcruNYBTc4xU5bBuH9eUYVwAnTC8J7wp2SfZV9kTwNMxznrRVp77BQoKNnKZy9Q",
  "key39": "veEBgyDc46amH8SigaaUdgBRNJ3JnxtYPPA2WpM2ov1UhvuUTeLS796qfngtfRM4FW66F8kKVVXiTPuMoKiQ452",
  "key40": "4TsCbGUkecpznaFkT4zzehEFiFsVXmHMikwdcS8VeJTvgeJZAMHPGuRx6y2CrJ8WdsNz2ApUgXqkssRLNUj1XXHS",
  "key41": "2aW2VmcUso6T8nYNo5aquTeFk7UMyrEb7Z8oNqwprSVzyuTPyXsruxEBz9K3qaPZuBYP5EyfRTfBWPokRRyGs51Q",
  "key42": "27i6keLsUmTzfrn61cEQusStsGshALoSms9ryKGquprf8yZx9PGwixtY1rVPYmpfsqxDagVHWjaYNUdh4xH7CfKf",
  "key43": "2S358taeZ6NVCHH8cE1pxbUo5PuEjcYfsLqJMbFBVv8J68EcKPmNH22jDZRm9MFCtqkTYbyUogbeGcsHicBPeH7c",
  "key44": "5wpifwXn3bkFFKxsj8n8Vza8toTH5o6XRsGGVVuYF9uyQ4XwQ9hFYQ6hcDxKGdx6ewPxUuCUXMD1Z9dNFZLARY3p",
  "key45": "yporaXkC7KUtMcrGNPRZueFdUtJHzkE9TRRj9A1esdg3jGUf5VzXr2SQtdXJzHZT2CZ6SZ1HZwvzG5GQENeB9JD",
  "key46": "3TCvaW7pGDoQ7qSYsCfPWaEwv1jNegZvi7C3QDRMSsDDbDHSEApa4AUGUFNbcusY191bvagHhefdPHsK7gDwi2pq",
  "key47": "5BARcnSuMRw9boT8Fue9tDWrcd37bcJPgTxiLAoEDh2u5egAa8itjaJSrBc9cmfziuzeePjhLNH8GfegpwUBdgCi"
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
