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
    "LAwvyjNe4DqwG1FgLZ8MUf7aSWTCSvFMWbnG4FpUUJ6ti3WQ3euoYxTKVBrPvVE27xek4gxkxBTXVpQKvuHAhH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41XviQybLoDjLrfB12QzcBLaUFPmbb5r7iwxp4F3oQnKbr8btsNfS5NLniLJHweTh1Tc24fnbwNKwoi3AJh6yyFS",
  "key1": "21kzfM4NtopLfod83ATAoTUaJfUz4Qq26TmNGpjWJb3opcSxHfF4FDDGZL7qH8feLi8Dp1vYLuhZvB2mS1oxJzbb",
  "key2": "3pV8GZ1Qcuxs6V5CHbFDztkPpiZQrA6zhcoqTYbkb5kWUZ1wasWVFSjbfeSkhYtqcQDczgEkEF4gBoUTX2ddtwqe",
  "key3": "41YKcSiknwHschdUbpRE8KM3sLrQqnf23VjUZFhzoTEdx7BMCWJQbQq4bHs6iUM4G46f5mJjxFDv3Cz3uzuyautG",
  "key4": "49btG9TgGcxk5Z8AwjMdpE6JqYjQ5JzttBRc98QkVauvfsDmnNZd2GXxDht8dZr6D46N9zX8YdXZ6vuTpsAyq2mq",
  "key5": "2noxQYoosPqvW5XyUZ6hsvuzYChXU5qb5eALX6tAEvPJdXUwfY5W988EztT5J12RRgkbjdDU2bKD2n2ziJ4KgVgc",
  "key6": "4ecrsVyZokskgejKWF7HpbW2qaqSyqv6guwkBgPfyjqMVSA6VjteLHri6zU46Fj54pafoPRmAdvq7rDMzF8ePRA8",
  "key7": "NdHUn1L6ULSqxhRQLAVPjotjXnBXiXDmmNZ7azwEiqZeimXzVCvZj2B2gTZggg3FAC2ED9NXUmv8eE2sKR8izzi",
  "key8": "5gWMGBJeBh2R4Cr38vy6A33h9dkt2ZH2VTzfjESQkh437m2eDre7YCrSciMLqgzjxeEr4GGTGkxJuuARQXbWdLxi",
  "key9": "5x62oM7k75xKi1NqXZnbqVoEAZ8nw3TfjorRRAt6ANiMGerT6BvtPQ5Zu4PaYeUGkUaKw1rd8uhxiEg2suH3xBTx",
  "key10": "E5yADCSvyeQvCkyvcdoM75ynM9j3dgUNacCwZN7trVmtDFKvsiUWy6U4KTAvx3xUcn7QhraPLstcqnqWUJwoGGS",
  "key11": "4c7rfd1DNJfLHivJzaaXv6AP2RodQAGc5WZAjGitipVU4xt4a2AF12jf3SemFicr3AgtdanTEwkcgyi5iTyTS7nv",
  "key12": "C2pCF7qR9WtgQbpTFHd7aNwQJTtMgFrwoVK4ya9AEWuaBfv2Ss49tk7FUdKe3vD7GKhN4BkjemuQ1bgwfrwgw6B",
  "key13": "sX6qUp6DMedcJ8k3p2fxKv78XGVmyxeSmyacUceBtEM4Mz51CGoJAYHx2UVw6LvKM7JvB3ZQvWwn5Ggs7XY7uzm",
  "key14": "2WTKm3kRdNhdDPAHgLCT3YrbR9wVfgdLXwNyKYr6esJV8Mr9PLGrqwGhcZzBL9LH8tnbs5mT6y8iRnY8Tbg2Mni6",
  "key15": "3xwTw5TocKhsFvQGnJ6ZUh9b98FvPZGf72bTtqDxBmwMiyYKbtQz7j4X7JCqRqAjfzRuisvzASMpKQtbZPVTeb8f",
  "key16": "2Zqu5i3wZKc4jFMGuhitXxW5j22yTw9Qcoq1Vvrm1td7dF5DDGHPhiV2DXJGonTSHN3ggKq72LKgZcMkyCnHbnM",
  "key17": "2VE7E8hG9jPr4cqP9z1cyFrPoQzpkiXhs2x9U5cfTM82TyboZukCEATn2nWBQcthvj7wqfEao2PhS87M2R5ZdFdA",
  "key18": "21cNsmhHNcWJ5nSCWgDsRRmsKRTW462sFbh8vzbmP8LUF9LpfccSGP2dEvfLrimprJaovF3oUwQkYmYbHKdskVQT",
  "key19": "2BZXFZJghyD2cB7GS6RakBjpk6imMuFEF3j4sHfn11DWwDpsBonfhttQV8SEqxBqFS21z6kC4qp8g85wMLF1w3WK",
  "key20": "2nUW982SoEsFXCKTeEK4PnmNvT4ysVhbNeNS7jSexgctYemJ6YfG47bpt5vRQ9gCidoSKq5BVZXtFAodYNAJA7D6",
  "key21": "5LNsjfD2SqTiKLZu3u3QHcgJ9xLthDy6JRG7irV5S5i9VAvGynivZt92Sjeubv8JAnCMh6EsAn2dmCZ2Rq5Zimqf",
  "key22": "jTQrWbYaSaS3iZXXJpKmpr6pKerqxUddtzZKQjtGosqfVSqWsfLxvTtWWE5HeU9pHWLiu7k4aaAJ8e39VaD6LHL",
  "key23": "52NiiZN7N1QmErt1KAEi22A6V75u2e51podu7ZC94YBTheazFoBW3hZvUC1S7aHi313FAyXkqGP569eV5UccgpoS",
  "key24": "43y1yevazvaQENHnwUe52xe71wPtFdFieY5xxJ3dQ8AXMGMMqdb15nnmqmUu1b9h7JybUmmCx6BXvMXeoxyK6LqT",
  "key25": "2yr8N2yd6dYfmZFttreGaL3gYvCFvADvW6t4hYyzSyh7QwuEcRByrMXCDJUk9Xom5FTwkqczHNRhWt5eXnbFCNLm",
  "key26": "5D2sQaNbKtiPyq5mcGcZZ1mvEctAfEpkC5Ggaw6gQy6DoCgMuLaK3qKMTH3aZtqYfXKpjqrL6c87kcNE59od3Ah7",
  "key27": "4YE2qMA97w4HkLgqVwBFVU8vXUL3EccFX4py2xz1y9fiPoDD9HLjbZT672A5bL4rUiUD4F5qnEmVNmy8LboD7dxB",
  "key28": "53v4xcEHqvBSgQJuYW1vrS1QVvHWDuvMEDhFTnnEXqxRyUQMj92Sx1qzRBFcBosid4m7Sdi2e6VQeZxmHDKrynPo",
  "key29": "2YDZvkDhmqewwFmyMFVSea2j62ZDS2vMonMTJPc7gCkZeJLSwHVHsqj6JEeom8boEyY8YQzNL1hHBMySXatuvnfV",
  "key30": "4B9frkbXr35GjfAfgPz8DxivtFTK2AkCPmTm4WPSjgybwftTs1QSDQpnnpj41fDU1WjAnUhUbdwzuC3iEUrNAKt",
  "key31": "53iV5mTJqEMxgLLtrGGEXm9sDoyf4pm1mUMCZxXjPQzsLjXBVoxsNJKBppqKiZstD2egehg5KjKXuRAqSfcPHQ87",
  "key32": "3DNftGkovuQd6k52ArehPbQQpa7N89WhbwGVqQ6FykXHddC8ezsAtG7NLd8FJrzQJq4TYt7MBYc2ghGhBD4pNAq6",
  "key33": "3nXJEFw5HARXDbmB5nAB8GgkYbtZSN99orJeyVT6daTuYdqUbjpu6XJ8E4Tf9E5GHJGqBw9BfWJ6GTXhb9WWZSkB",
  "key34": "64UsoFswdfcdta9TPtkebEYM5d3dzTGFsxNKvdgXziuPpFUHkB5mz7yFazkPxiECG4W7UkECA5r9RPA8a89wSxaR",
  "key35": "22MF9ftyZ6N4w4hSSezHmjLkL5XkivQ8vzYwXYxdASsqyNkcEGt8Xj2QSRH44toCtdyscFNsZcN8EDmFsYzaiXPC",
  "key36": "4kiqzUyJjYjcqukaq9Zwkr7Sv5tLFWfzK2waGD1L8rL1QCEU2foXuXQoFARavBdW39dDitgJA7J5zXgVA35cq1oA",
  "key37": "uyAkHwh7SdeLPYLky6a3mRV4ZHSZ7E3ZRNcFoeWisBdbDDm7F3WBboLPhKRSyvTpNkRyqYmpMht69D49EaVsWnG",
  "key38": "3Anwf8b7YNhgfKncvZDyrAmxgJQVjSy73L8tPXFfbF9GGimCEaXHhTo23xyxXdHztUmaJU6T6CqCyrBhcvyXZdYg",
  "key39": "27gudFTAtFeJeojATDTcB1MXrhzLesADi1bFgpq1bLSwEHq2akU3Snnxfw5YWGEKGCaebmR4D3bhjecPHQN3Mpq7",
  "key40": "5BR86dRLgdzos2H7m3ZbF42NtXNSsH3WzQYKPZoVLtWCj8yKgxNCWhP95PGg7hPVsS5E8TKU7StQuSkHRFLtW8Ye",
  "key41": "2i37uRauvMuEBhL5sRkTLdMhK89ykWk9ZWLNZqhhDqgLYjtSqX3ycZYQpYeBtHEqfunxVeAx8sFG4G9mENahupgm",
  "key42": "Lc8ykmiFCV9TwQPAba7aa1NoV8aPb4vHhRF3KkoNgkgkrEVW781UUNnouosbvycQ5RgjpovG6skJrWGem76Ma61",
  "key43": "dCm3h6ZgaS4bqV8qAAU5WkTqZbLVbimLaMdr9sFJsUgZFA6DW77CbJC2uAyAiCojd4nYjXoLX8Dtos8eGwQdZ7s",
  "key44": "5ezmwRPDfqBi3bdP1mGfnetgMSP5cTcAMukiVrVNXUnoewakP1smJUtodJhnvfhJ3DT6u8eewuhVEXXG4k231LBU",
  "key45": "26GMVK3FhPCZsK8dc1unwPsqKYkJs6NaKN3e1fX67C7iXoA5PpujonEzxMA581KrKw67m2vKUcK2fYj2tgsKtYmJ",
  "key46": "2pCuRjWZ8C7CzzjEQRxWEuvBtboyUNan53yafJ1HgPSeMMS1xk242vHLW2Hsbsho3LBVxx8xT1WJJ3HXKok25cvZ",
  "key47": "3PvSxEVDNp8mhbtu98fG1pjXuDxq3SyiSCnZYkJzZxuqjW9xaB9tMdoPUiR1AbEw1YFBHjWwSjV5p5knAbidEf5y",
  "key48": "4VfmptrzDCCTvhJBuiFjeupqYxpqxUikzvxwSVSKw6jmkBTiwYkeMybRFJvtsoym865JUENUVWGe3tkx4AFF3eQC",
  "key49": "2aHF3kAkvKGbUK75aHbXk8wnzimLjmgjXUaZrc4hQ35ewZ3SrqsHQnW8FLFSqapkD1BAZ2xtCYCBdDdLYiYqMi3y"
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
