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
    "3iESmjsP6ZjuVqCcYP5wPN2QipA7S441PAVnGxNB8Ri4QBCZG7yx4VXvWpeiKvpSvLFQYbMTrAcjPa8DDXWQ5ERx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fd7nwr21VJB2zuZJQH4PstJSR7GxYmWJuGtyTrMoiM7A3WpUF3MgevQSCxRwkFYmVMtktnTucNZNoPfrDfxM7hi",
  "key1": "4yL8TmnCeeKJRNq7mQFCPvMbBHmu4MEakNiTGzncjRLRiG1iWhfgv2MRJCDA1tNzdNuBVBAwTPR71JQuQAQJzQW2",
  "key2": "tJd1zWzXWhUwbweSRzyFfgTBXgedcTFREsmXD3kUCXbQgdt5wau8H6n9bg4Tno6SJdni4aPxE9os6isYkKRqjCa",
  "key3": "5VexKaavtHM3tgPbz68SyeETEoMim4iLJ1m3CArfCE8Hf9iTYCzoUNAP5iJVafVCvccV9fvyfAqV3E5ZPr3QMjtq",
  "key4": "4xSxJgaHaLkWqUkY6zYY4wUytZebtfRLZiEyeRNi286ixW5oWPbeADatWrWu8WShWVWCxdoAgAxwYgnDs9fZnxhU",
  "key5": "5CaRTpHvqoGgQcZBhPsTvnJSegQQcXXsBTVkgFEVq1dqdoTzHsG5Q5D8Nmh3EPvAN3sC9qZFCE1VE37akHHTioxR",
  "key6": "2LFPJGg8cHEwQTqhgBRpdYWLBfv1uvDB4ys2mwP99bwdSEPpaGQPhP1aZnCdCs7L7RmrFa5hZeNvu3UfpG9Ru1a1",
  "key7": "STmLqr3oGD7rvX5hFgH9nhPfcBMtLppMpUjycKrS5qSksuJs9xZdNEcxKXMZUE4cLYYx5SYrxVsWMM1J8UchgrC",
  "key8": "3gxC35cCxRRQDm6dQ68HZiAyZDdTkFJSakArvjo5ryRKQDMi58iijiwJoC7ijaxMvCs1b65cLcY1Vw9AeWi67BsS",
  "key9": "4YNzG4puUB8nUvitLHAdjRSjTymbHirgUzkvqEdm3TTiESVS6judmd9pGMepi3CT8W9ep5cAQ7VHFBK4Krw52d7Y",
  "key10": "39TcXGzE4LtXaHFy8jDQyyucXHujkgX7m7ikEU4JRoYsUVr4YAYaxHuyXPoK1iCtwbX46q5jGBANSSga5nNEjNaK",
  "key11": "CcZEAytxr7ynAJn3PJEUGSebePtMJqZigoaiqouupgYJpRMdNjugPUyMKszz9aNfjmPCwWYYKuHPPQbmyzAQZQw",
  "key12": "55Gu9VHvFCKq8eQUd3HDnQcZQsCb4172hMfdE8h93uxMcPRCmnF7vfssg7GzFtDbjv32enCXqbaao6fN3VaNRJRV",
  "key13": "5skXrAGEJuhipfWaU3XX96zDHP8JumKYnA4kokEzunhM7ASQ5yDoFd5QpsvC1AkagNnCNZPU6reE3gT66NbtpoT5",
  "key14": "3imAQESJG47B9rZvLabZMiC51gCLP1HrQ3JQiNsoMNmpb3b4Xfu5TuqzPC5vWU9vMZT8xe71ZGXqNZ6VMFpfQELv",
  "key15": "4UN7C97QXSNnZ8eEnCqMMkTxeZeuGaJFespdxxqNXwwtcqGn7kQUqETroUttnfAwzEYwwBB1rR4uNndqVqWzCjhg",
  "key16": "6B8ysU7RyF7vznAzXrhoLgDuDfzQjSGzjHwbep1UUr3WNYRXkpi8Wb6Ddvx7MjuYUf8h5AyZqmPjLhJMdEt3QXP",
  "key17": "rzk8Vyn7tjTK2yfC2mcWPrhboAWyFfjkzwaNZ35GFY1j2QqmSUzkW5qkGxkTFXcKk96cxDYKHquZmSfbq8EFWXf",
  "key18": "3p7X4K3KqcJfypG9hb1P69Q1dBMU3x12ZXnv1C2XAz1Ttw7RiCiGj4eAGk8xe6b56cQqk9kmPcYuK5xZfckcZLUQ",
  "key19": "4yhaYvTqffv1aoWjjPyCoUjrjeMLRMiwSPqNCto57ukQj6Y1bShyJuoZMSndvm2FuS4kZRGwh95naL8ZFmFcsxrT",
  "key20": "j4Fx3N93yYR6xpkKEsn9yHPcyjdvaejUEDBMMSagFCePN8SFChSa97byN7q6u7aJ3sFt3cPaRVWE1nbU3Bm2R1T",
  "key21": "2S9MKih6RuSFDWPghNkSmMCbLDUXWnWX1zWEUvnQ6tJRMs5BzR9XQGJw3wQRuW2Uyou8MYFJmATQEKZncp94DrFL",
  "key22": "2n5wRd2gU9ucBMGir5UEmAzcgWzf4kTtU8aWp7gb97CYmLqYf58BZgaRcywFTYypR3tsVy14RZgfjKQBua7nqQJC",
  "key23": "4pZ6vavBCs5GuZEhHWNTigPQxjH9hbBPCnEwWxNnWaQi7XCUiLepmtA6TZqdbXsoRWsdTEgikA9xz8qFiSsMWaW9",
  "key24": "udw8XBU2RDtWexypyeDPw8kMVShgk67y21ajGnGE3vS1SmrjRyyKqtp2zEKcw1D5j3Ym4PCfSxFrXo6BoGeTiaW",
  "key25": "3Rsodaqq4zriuow2fyaLRzoQCE8ZCBJeYNiSR2eoj3wza1xdguDgFRGGTJGruG3qmFJENPVLp7UtNvvDDABVZai1",
  "key26": "31S4GhcBGbsdsvrhJAgVFJDc9DRv3mHXk9zF67jG5jegTLbUkcXQgMWv7MhxGkwMTpkkm8cDxS7ePzigKxQy3ZgZ",
  "key27": "cDreijD45a8jr98dhJ5CG9P5ssHjx3dNZ6zMWhGVXjPFVsbtueV6RqsP38ybn3MELYmM4Rs2LgaCE2hqiftc2J4",
  "key28": "4eACeW3jrsQPMmZexCRJwsJcZcx7wwZ6A2VXoRa1rUAMErqUYBwqhaJQ574VwQzChthKxpuiUKDsX4qfWPgAZ1hK",
  "key29": "4WhDqfb36shsEeqh1FNEHbwy1H2mqTaNbnobZTHPMmHyHPcqsdynkD4BSwMNuNhvnom9er7LjJsBXDtaybwJ6iAg",
  "key30": "ym5KXGj7XAALcosCDV84H5vbvDK1m2Qxjf3DaTXJc2bPkKvCFz764SDm5LrPhAEQ6FBNWb8JEqp3Y14Ccn2GDVw",
  "key31": "4gotzPfhjDvkKpoPohUz6cE2CbEYicx81eTjsbRP1EW7Sa54EohRtCEo9PTus8odKqt7VttbMdZJud2wy25RtFZy",
  "key32": "3GZxnHUR1s1rz96zp6cvQSwzPosPv5Nd4pbCXs4YL2qRYZ6G9pBqpPXpeg8SLQNLbfaeXvMZcbcgWbr2NAQDVKTo",
  "key33": "Xmh872d7rXhFzG3piR2HozSSVNx2cQKUURBqtdg8btYdU4kAFC2mTRweuGZ37Rb2Nid8KcrkAuuYcNMgCKciSyZ",
  "key34": "wsAA5cd7fx3f5SUFYRqJVY8m8vL9GGD8ZEn1tr3YpTuSvnbR97hnqmtVmWbsowX5FroYcnLpNhsVZoC8Q396rLN",
  "key35": "5G2X95oxPdUMbJhqcRAE9AT2G86qVhfPd5CzMxjyhupA7w6rnoqsvUBPhrVec5uVNNcDJpS728vjDWvqoH4ZGk22",
  "key36": "4FGHgG9GPdXgoC4tFWAbSsuZ3m52W7m42z4shLssbs52weVCnfhR9N9mQqxo8ACTeyqw1U3MxJu7fnoYbm2ABRma",
  "key37": "4cuUQTocNxceYWHBa3kMSSpFG5oocUACQP1dZ3nryebHRz7spzJT17JRB18ePAH2Crn77NWfX4ia2SDNNMeaUAPN",
  "key38": "225VKG5vjGxSEmqsTQ1yYxU7EK3dyQGFeJ7PwJMJkrvBC8HsnFGh6si1hFgKJXGVTfbG3JBnXyhDY9fBnmc8mj1q",
  "key39": "5eeTNfCD2gu3PxhHyCVyxB3rWFkRMBF1SML4s6Qi6UqgFB61NmVLYMGyCNs7j6MwV3MPxs5Q1dPgM1FpTGpo5kb6",
  "key40": "7DYKQaq9FrsaDqfVEfck5qJYUXgKzpHK7GJsC1LfsTMkBBMyoPdzwNbQzndEQHEHiKBZbudnRstkxwrVTeNQfaL",
  "key41": "5rrQo93N9wD9SYvK6jeGHbjaWZxe5XsgR2EJZWqERdFLMA5FFwF4FHTKVYJDjeBUfLiJQ8AmLcRx8xRhgTBE6rbg",
  "key42": "hqe1kp7UA9PvN9SAugY9JejEEHx662zEfLGkqbavRhUxgtHouJwDMy7oTsunoyD6wESsC6hRMrBxURehuMFkdRx",
  "key43": "2oCEwy4ChAFvLyjqexLvEgHanxgXWwsR7gZVWTEQxks2G33Ho1ZD4n5hpFiQ6oyp2QoRT9jCSFQ7VGYE9HU8WAJB"
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
