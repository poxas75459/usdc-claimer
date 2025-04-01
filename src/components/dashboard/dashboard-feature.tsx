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
    "3bEDKEh32kGKYgDrAUXBR2YbzUBKFdu2TpMji6qS8zWVWSwMB6aybpbY9gUWdut3JuktLGsccmug48xup4TfAYhK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6FgLktYrkeVNrUs227uP8brbvHaFunRRDSb5NrPkSNYTXqviAyw8u97ZgxVRoPu4MK3FuTfBuPMf1KsQoakugPZ",
  "key1": "5LLUccmJqckoXQix7wmWuTHq9QS62fg2p27ioxPWPuiC9G3c7kemyZe1JXXKiLqbi8gEFQBhnoo3Vx7kwZkFxTus",
  "key2": "GafqHRapkaHEU3AtoYPsJC1kejqSEAcv2AZkSD5rhbiGx3TEMDiAamWmc5V81NT8b2N6EyG6cN2JvLEKFmAWyGs",
  "key3": "46r87sP2bQyFzbtrRFDxUzmZGsxtU6KpPz9aQzNgjdgs3tVTFYGKkv3ko8sqkkKkxtmizqSwiDdTUjxpsnaJtf33",
  "key4": "2KfymnDc5bzj1hpMmCTQyHY4LbjCbdFJfRJNTkLVNkgkcVtYEjUVGhRNoqVoWaeYLaqUZc7sBurANyeX7zTPeHmF",
  "key5": "4bp6sM8XvFH4JfQnLs3t9JoDXSC6LfbCDmsTUATJ5uUkP7pNo9kAbMic5FwAvZcG42tPfcQXo6CYxoJHnSBC7oyD",
  "key6": "3LHxmYQdBkae1Q6V7iGfhZudiUUzwAAb6kefp7a9kHqiQcaja6BPLTLPgUQUSoXFNC5wRnDh1qtKnQikTRyp4QKk",
  "key7": "5Qk5tQeAB9pfGUG6Fie7fsf1xijwknCCWEvFjoWXLrCtCZPGYdJQr9ZBzzmZgeAGTQdDPR7hVRssnkoMdXMVXgJL",
  "key8": "BPNKnDeDfZ5r4yiKCcNe5Ho1swQduyRVKF2yHgf5tDDuf2in9ViAb79pEUj89wNsct5zy4BejHWX5fbeX2JTU2A",
  "key9": "4E7tzqTbEisTmvPP39PL28ocbqheedQLRnZK42jkNnoRcseAT8T5RuPLbgayySoVEjn7eEgnttypQum37nax45yU",
  "key10": "3io3Sxy4RNyf9a893bVnsUzrfv4Wosbgyh9Rz4bVVZe9QGvL1RJVB88zJLCQVqPy9dY3yYZJxPJiUCjoW6VW5KwN",
  "key11": "4Fb7CXNovCh7JLHjY1ncxnNgSyMKy2icXnqEHmeHUQE1gRWVtXm1rnyPdwAJQsMRPr6iBWpP4GnuVGFkyUYLnt3D",
  "key12": "k8eg51KK8meTStH5QmrkcPeYH3e3toBfyHC1SRoHJCKvoaRrMfEMNCPvhniWdqMqepW9xnMuahKHYhUuyV61hi6",
  "key13": "2ny9uFyqrYkouwNxenGBgiQdXcictctzVoTsgwtidunFnui3BoQhcBkL4vQoDeNaK42H4aHrAx3B89mRmnQYkMNA",
  "key14": "2RAiFUvu451GfUUjcSDoguUwqRCPLit5GgUSdvRWqDhQGCX43tLNAfifpGFkxgEPYUB1Pa8os2djo4YJJnbLCD1L",
  "key15": "sGuxHTmMekmrVHdidTzYztePX3q9okXRU6Eoo7RDnwRXuNnkW2cec7DQcandtZGmFBLDTmtuRvG7Hd9RSD5gfZe",
  "key16": "3UVhtHbVGH77EbwQc4hLkmytBnf745njkBaRZiXHJTZLTmCEaKigEii3uQC2yHFufuhMQoNRxgEgvRhXrcsxQ7Sc",
  "key17": "nsRDrxw7cnw8a1wuxRU3Cbscdron5bEfZRRPgAWRFPdjb4bwLorqREjx5gebK88bCJXzbmY8rHjphQ5AJiC636i",
  "key18": "27jHU1oinbGmEj93RCPJLyKuoadE3txekPxcATKuMHcW2LKxTzYifHMG8TirgVaSbr6br5JXCawHJ5Wi6uS4DEZt",
  "key19": "M3m9rmXMxiJyty4dDu5NSLvbNuxpdxPdbikPbUg6iktpLXUYNZbwEZjQ5Zi8s8Hi8hQmoPUd8CrNrwVVMkCqwLQ",
  "key20": "KUAhGWpzF7NPa6jJX2DD7L9pi5nrrnL3a3E3KW1xsZoHMyY5XVSYbMhxZU4QCo1yxhJycAu3Wot4nuHgNL65NBb",
  "key21": "2tSXXaKq7ZtMZ9H7qQeAtHLHD2w5cXqeSdp6okM5b51jE5LpkVRQQaq3y8awDxwGmbzMULzHyoSQf1Xt4jTX7spu",
  "key22": "24zj3c32Hau53mnEK39rULfB5kdebRf5bMhY7RAH9pobwDPw6ddvx5CLLuUL4n5T6wUT3e6jJQuHW3Y1nDscL8R8",
  "key23": "4zVvLeN6KSfbBMsu3WBvM3qqwMUfG6vXpfrNZSD614E7iyiq5Miar7hXGzn5DjmyvPagSn3GxN6hxwGrUHUeEfYs",
  "key24": "4StEkKpL2rhKT5BBTpqz2Fcr2aQ1Eke4ZJj3dLq6BG82Ls8EA5C6Yp8yqNgYQMuDDUULTcxM1AXXLRguGX6vFfy5",
  "key25": "2hqXC97H7ora4ArAnzaBrnM1nZBd5PuXGwDUPjMQuCwhmHx1Eq6G2WdPqM3x3ffjgFBp4hUAw7WDYjq9axzYccmF",
  "key26": "5EiQ9ArwarFUyYrqdZpi24Pex6NGWaSJW7F7brMD3EYswdVPiLTJEhgEFGXqW3QUCUVCXEDRSaFBi4QFnec4dHDC",
  "key27": "4xYL2ggUAADgacC3yrxGAxq1vRtgad3qsYsMGW86qZjwyPU9XCZjQQL5XT2ivHZGwGoHtU7R2MruUE64cs5aRtou",
  "key28": "5CHR24qAabDoHHQy7tZ5GLzEMQ5uEbeZnATQHYnqT8dJy43XVf6Eb4ffUpBNsB4hsQbxe53LpyvodYufftoRhTg8",
  "key29": "2dBwL7FfZv8Rpgu243Sfs8qfXuSYCBoYjAwQAPsL6hr5B1jYgggs9pnET5KDZG1dC8zQ34WgKfNRQKuHbANdwqQu",
  "key30": "3c7iCQ5G3EWNYwgtRtcX6JCR1WgNiShNdLkz5e9K9WmVgAgA2H5f1Xci6CyXDUPRuQKzFyYyaHuKADUEaZh4pUiG",
  "key31": "5uHmRQPKbgC3UXb4bSDy33R6d1S7wodAxN2oxsJtZBMHRcdRrdQeVaGWTg2sJ87b4WH7wGoDKuVgnXe1W4SUtYP5",
  "key32": "2zX2rBoedYfkYXsVbGTCeCmmLSR49pawdqJQkH8EAVoRw1RLfctK3QM2aU2vxsm6nHbrqAWzwyBk6pDDVpAHXoHR",
  "key33": "JCWXX7vcJyuiUFGM5LRqnTbSKKDcATznbzjCbnSU2LP7Nq7UcGMJXmyKpsuv6gRAFxLToezKa8kqXGPBHvPbbdJ",
  "key34": "32cu2UnJ744Y2tvL75sBpL8akf5BmWzDMbH2kLtM6dBTpW6ca8dtjL4QsHL8SDHSzLxqP91L1Z1ApWiB82BL1JUe",
  "key35": "2CdyNHpfbjCGysAFk3h3kWbwgiY628jUcaUFeXnsAFRBF8nMrSf1uEH8pjQMjc8Gjce4LJJYExL1QPzw45PsptuU",
  "key36": "3oJdNri3e46zwcNzzCJYpthvgGBoukjsyh6Dw5yNLdeszvsy8dqQFitVnGDyzdn8LYBdqC6c73T9kQBtQzwwyuqo",
  "key37": "5v9AnHz8NieMC5hjqbumZUpa5dVBYGWAigVLgW81B5F1tjgDGz64g1zUJrDRyEuTW2oQKyGtCd45TdeTpXupN53m"
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
