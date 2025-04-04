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
    "2zXwptetTuQbj69NQ8FJHrmDc7mzSnEoSFffp9xN3tHERFiMrKLAmbSqfR7VSdjxRGyxNFUUCAGWKA7yMkB6jEDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g6XLtxfb3rTb6YNkJDyCdykSvrdhYpXjVKpj5WoybpJk5WyQ92GxfeXw8M2batukRJayVYnUVi6WZbNXiQcx4Pj",
  "key1": "2i2EQiTHsTg1Lv93yxMPoaaMvSDVq5skchsKityLYNgpFipVWyVv5e7aUWzMCJyRUzjSjJcaz4zonyQrgLqpk3gx",
  "key2": "hG7jHueRFgus7EzPwoQdsEPjnsZchBRFPNtDRj4DTo2Gcr8pQxPg6h1JQJ4f75EaGMfbD8ZEf2Gaqfb3tmEZLjR",
  "key3": "4vq3Vo9HJoJVXNTXaKJdaDxD5P5mYgjqd8mSry3LzfaSqSwRsG1SAhPDsYGXS1hf8JkFAXzwdaebgFg83tmRYBqu",
  "key4": "2RjRAVDvSTcnfDS42hHpDEaCz4Q6kjUYdzsbv5ZASv6yX5bkdwcPku3HrHnoNvJYegkBx8srnUhD69DtNm3ZGsmx",
  "key5": "5M76NMP3igxvhdZ35cLGud3s3Dr8qLWAGcdLWpLEHyeiGN4tVJAAj4gk9qctAkuRqioBnYTQftVc8fbLryL5DRRZ",
  "key6": "2ZpowJqjszSa2QLhQ2Ki1cChbbYVKtSaWhasTrsRQnBbE1X3ajQXLngpeWVFSZAWHd31w1rG9DVGNpNX3t38ihAx",
  "key7": "4gWYoWhrd9QF51EFDFG9r5pKN2BwUj5Up4Mhrxz2Co8Z3oSJtj9yfvxcettnJDVDAYaApw48bCVghR2RQEBTFFN5",
  "key8": "3r8wnr56nCdxSegKQZZL44pPeKWY4iZo23FKzAKwS3BYV4Z9xmmXpLArx7mfh544hCgaSnk4pip2fUDLxfYzganJ",
  "key9": "29fyiHDFS5cAcA99Epo39HVUNSf6o4bUvvhRphBXk8CyQggj2vvkxsduHGmTf2aSaX51dYhc9QknEYY8wx7Ds7Ep",
  "key10": "29zc9ztdbZMMBUuG3kVVkiK2um6Fy256NGf1qoZonaGAo7ULz6MrVjywzCnac5Uaa1wWkgG8pk7NXoBfNU5rPrQL",
  "key11": "4xSZmYkCGhCUpf3G3PuaEGrnESJNC99JPpjddQnvVuuoNZGPxBFgLae7hm8rQVnS9x5di3fqJZLAknjTUmsSaAtn",
  "key12": "1A7SrcVqDogaAawHxtQiDqdySyeMYPBv29vkSSXxAWrZw7LYmeJt2SoDC8gaq7MZwTZJLzdTCuVg8SGsMnsi2tJ",
  "key13": "Fs5BdXuEJJ7eFct9RjUipjBmsgvG4R4XRor6xqQwWS5bGLQCLCwBAfVLKJEf9kWdHgPAHChUMQqCzDXmjVs9N4X",
  "key14": "EpVDpo2DyvBK3pQtm6v3bpTpvSbWMaG5MpGL8K64geWphupCn2eran1gPx8KeSWD2jVcXC8jcX2KPr3amAjbQUG",
  "key15": "4AkKNnnyrZtgEYACw28sz3zSwocteJVhRH8u4pia12NrY8MhGgrAYh2NqnZYZrPyHnVesR3Fv76cwSyiZmNipSwf",
  "key16": "PDLTXAaHcsoLQNVG8zsxpozgdorKhggzUCsfssUwVZ5XcvPq1DTpAxasEYRMmGw1U3XgjZsTckUafwagP6wS65a",
  "key17": "dwS7W3zZaNVRrRF4Dy9o9Mfq8FfcYo86fDMgHBikj2FETHTvcActYRstrePh9vZsH8M8JNWHTYVEBam1CBsUYBB",
  "key18": "2N3RLVP7ty6VZdwyZ9U5qQwtUCiKwcLJonzUfAJLtptoB2kAUWj1ZD6oHK7DRwhKMiikNJB3yNdBG1PQgHp6M9rk",
  "key19": "5eZkEjsPiFohuJxiU32mPpw1siaLmxEkMh44ar9PZautYnSUhu6zb9kH9AMiR8GqRtSRYgaXaGZ65VH3wUCka6ER",
  "key20": "wkiyw5o3XGcCqu4JPYtkGxozMoGXWsnLUpCrAGMd2gnnHYbDoRata14H69iWovhTGSmt1rQx4WnXct1tuaB5KTx",
  "key21": "5QtnM6bjLVgRqeZETpgLXnc9zQzRUHr5cZVRTTXBeGqpXMPwgdmhXVTd4N2L9YvrZYDtHmxD3hbtmkH9koFDA15z",
  "key22": "5NzsTSJbFKZxD4H2b6rzKMHPxLErfZuvu4uKNsRCP9JK4pj5Hx9iJtLZ8LLpTZAhmoL2hUYKsQgz4nYEeiGuVJw4",
  "key23": "4hM92FHJB6wG77QmPp23CS3tTcycdMiGrNxMSCVnS7o8PVj9ArvJ3mFgQVfzKemv4ynebN4eCPocDdJ5pz8yUqht",
  "key24": "5RD7gLysQ6SiCPVUUWBEU8UWS2RyRNUD6M991zskckvQJVzf1ZEN77KWMS81TpzsoyXhEiU2iai96U2WE5fEAPKU",
  "key25": "5jS7WrV45XP8ZDEATDVRomDbmTm3pC8dJGMK8M3848HGDvkipUW4tWq6iUJJecvKfoqcSrFZobLu7DJiSw6QEoTX",
  "key26": "2W3Qq2skCDCFrPqfSwnFrABV59xwYzDFcf1NMgNT7RvxfkpVWdoLXx1hhEPmDSThv1rYGo23RrYiEsMiN6Hd1pAP",
  "key27": "4CFLWGX2JwNcwArFiFKRHTo9vSpzNJVqxy7E7xbt8toUnH6boWCw4DShgv4b38CFhGGFSMRTm3CP7zGdUKuwVDCR",
  "key28": "qovZcJAW5Uz1wHPfZ1ATsVd44JMo5SgETZZ1uwjZKm3zo4RccDYe2VYvjLnF1UBpuP1tGpdDNovg5HaXMWNxiRN",
  "key29": "3fQbpYQd8qyi1zVPUH3ko1NsjkY4QuawL8RHoa2a1kD7RG2t1y1SrT3FAtHVs55QBuhiFcfWMPPbfjgNpyGG2CZN",
  "key30": "2hN2srkdeGzXQETyEXQE49WS3inPQnTeNz91E2CNF3NoCrDD1hMeiB1vtSsn7vdJuEZZQiNChfp2CWrtqA9WmUqt",
  "key31": "PUCJfyoSKa2XriokZhUDtPuNP193j8YBWrxqwhmFFyRsNEgYiUYRh2VrrD6vA3rTGU29kdeugw4esYoyj19x8RC",
  "key32": "2UUas5xhUqr9mh7s48LPUi4z9HTBajH8RoTmUzkfvYKXaJmKTHrsw12yasPvG4P4sWoSNipUNPrs67MTv2upjgbd"
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
