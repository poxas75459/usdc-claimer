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
    "j4kkuSep9j8UJQSc9mYws3mL5Z1pH3axbqc6nT8pYS6uumjcy6iu7yBVrJ8MHvsLccTEFWmsYF6eh4bf9ywPSe6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28JR1A3qi2EczVXe4mfhLppg9qjxES3cDsY1QKKqoWLMBFDuDXAswteZzQ1nRFJykHYphKQVVoDcuspaBBQ2jFh7",
  "key1": "2rMMBqis6xcU9QP5PeojBzohjYVsFnryKirUWtRCGFjmC5mzN31n8dkG2AVe3aK38cLAD8uvbEEcycPFoHouRt31",
  "key2": "3XeFN7CB2JoKU6BTiAofVrwf8gJWB9wHz56jE9QpLQqFfTpc9UpowCffA7ohKZnzBA5h5ivtaSU1nfFV9XJjKDU1",
  "key3": "5kE5htVPwfUnEvBii13EWiiiL9Kzj3B8X1XzmtYgVNdng5KD4HmLLzpodRyHnB3DqsB4gwqKysrCmbeMrn4c1Csm",
  "key4": "3drwAZkDD5vRsnaJ5hgGCbBHm6JTbkF25KjUXgSMBFAXuQNwzTG6juGZw9kxkiYoLxqEVaNQfML4UCnJTuuU989L",
  "key5": "37HrVpr4uqL2z9CCr5qUZmX29q7Vn4XiNbQhK47MyDbAcKAKwyiQni2p3YbXs5FNrVgWYTyR41SFq1xNq8zafYob",
  "key6": "2DJh2qfNVDvPGwhL1d3W6amJZXjRDbbCgcmFMyrANYjKn1PoBkS3Vdxa2Y9KUKJXB6Gbfv2zQXU3mP5ib522Wjhm",
  "key7": "49NbCfS471Ux6eETMXvSzswVmWMr6vpZywsWMzKRhtYcAkaC5igvFuvCQMFPfQ9jHdvTzV7YQ8gxGwA4T2Kp4aRs",
  "key8": "5bUCp3tQriKUGnJNwhDV3pGRZ9JBn279T9Mfng24RduymGpTPhYtfjv6oS93eyK9VxYR4mp9hM1rxHc4DaYGTNvN",
  "key9": "3rmo2kFosJJrhYmtgD3wm5HCHFqsXo793X89ti7UUHzm71wUph2H3yk2xQb8LL4vN1PS2EX9G4j1bNqGMhbgeBh9",
  "key10": "5hNqRTBBxbQDHd13m9gqjUDEFqoy8GJFon3EMU4skcKYyHsQBxzNNBGrPd7zouQvoDx5QyYq9AfgXeeeVvr7SFR7",
  "key11": "4Q5K6gJwEMFqpbkDJydYKynG5tRFCq2yTrAteGpShNVNPToYkKHqPQde7v7wmMT1opaZwEuN2NMiUhQfiCWuCCCA",
  "key12": "49YjYPn8cnCm2DffepCLBJvaEmeJSeJ8VBqeNwgXmxhW53YZEcyBUFhQUeDXAq55Rq4uW7AX5XZqhR3H8rzmHFpu",
  "key13": "uSVqrpk4RHUyJucVwEMD3qVLGvw6F6o23nBQ7ZxCimrzYYEvrQ3CQ1TE7VedDtLAaNphkPpwwEzer2YzGfTbN7F",
  "key14": "3e7E5qWLwDzbgpDR8Qs5hGCKrKSCvrcEcwLwzFX3c4RjBYxPmr3Ccg6DSiFCSdUoRwFotnP11y1qkfSndoxbjUcf",
  "key15": "3Cqz8sfz2emsqvbdLXBJMKhEts9kNgaNWbjCoJWQdcmPkTqNtZoRMBF9rm14jr6wpzUsQhthRpBiXqvzAQXc6vAR",
  "key16": "2eAwsK2fpHQfdNJxfDTjJYDuSfecUYSu4gLVvqffRGHbbWHfSzQJa4Kna6Y8prTKjkaj5RHPSNuTG5whFYm8K3GE",
  "key17": "ZzJRAxbgkCdxNHqvnfCsHRrXVKh3BUh2FEbziMDKCnJx8QmWWC5jo6XpC1xa7S6m8uEKWadnUreiNjmzmAd98UV",
  "key18": "3DtRWSqFfahi97cR5V949NaEt6VsmcqWpm1L19fU7SHsXZG99usi7C8DnRjnXMoi7GWB6x49wbVhVRCAB1TmdxmF",
  "key19": "2tRshoKd46nACWz8WMFn39SeETq7zSY5iuXh6zrXzR1aN9aThbr1Weu1TuZfEou82e8qFqBDoVyohJdA1XYJV274",
  "key20": "49onTLnKrTASERVMBoL2dJFXZY65tToF4AjejCPpwx4qm6EyTqQVfQxKm4E6UyQRGebZ54YgK6WksppFp28fZitd",
  "key21": "3CC4h79LFnfBaSjyn6hTiiM3LN6G67sDKUPv85UPdPiYb1xjr4Vcs7KYPcupvYgvYKKGqiALfwRKx9efccga9CR4",
  "key22": "4CkxnuqwYHv5gvprP7NG4xbR195y1Jb3jS4Ev4o7XJFAPiXJtpiL94V6psARNPTNT8GVhEb9VGBgoFBkQ7yi3ndB",
  "key23": "3ZMDnyrq5W4mGCXUQLm6UY4WjiEWq1uzN5du5ZnhMLRpkn7XrPA3mEv9PXaHRdx5SmkZGmsTh4YJnY4GHq81bAzr",
  "key24": "2CoW8JTx9hKoGP6j2dXQvPekDU2cXvkQ4wXrWZFfsCsU5ND5kRCU8HJfWgNTnzUED5dYJnz5s4dm5Rav9PJaP2zb",
  "key25": "2FW2rDiJumCYkZzmc4pkh91Jxtc48xSUqBHdxPvKiQXxuiQwVe2i93c75cR6TLSpLySDgZ7NXamSkV2pnHk8mYEv",
  "key26": "3fcN2dBUQUnLGEVLBXSNYzfkbWaDyXWBS2W1maJcpARF8bQm1FyB1Zwsve9RiPyuyooAfEmCfCUZqd78zcW6PCBN",
  "key27": "4KAbvinEkwBLGaJd3wDZrFDH82695eeWxyCtgegwfZ47pwGXuMbkqUqs19waArpzDqeJHEgevC5ZNFdVe9w63ncs",
  "key28": "3SRsS1SRdiC2JTjDDBPeDQmrFZPxjiUSWBJag5cyd9oYZmjzkN29xDejKd7KMiJaKbLrVz38SFWN7YLTQCt37qem",
  "key29": "44GRs8auFh4cSJGQ7Krydf1hpL7tb5a5ibJVNob8KBJu3YizmxMRADZSzEdoLAVKH72uVNnUmgX8VSNu6aJ5e4uk",
  "key30": "4FvkBsGH9aNMCZYcNqDE5X51yBMaNG7XXyYS6wmWxbTQsggGCoyfgMhzWwGeF7Xh636tfEy166zauqJWtJ96tPLU",
  "key31": "5takJfQ8P3rqnfrv1sw4FZzduDqGMzSEoBTFqPp1fPDAjntC7J1P7egS2ZV3GpDMUS9n3BRyfggui3UdTBjW5GP1",
  "key32": "3iMTp65PzazsAKs2ZbEVsz472cfgPqmm8sTNwebLcHbuAs36JqARt41vmAh6o63mv9x6J8MAj1YaW6AYY6M6cQ4j",
  "key33": "2mCeUzkC8rignmQuhD5a6S5Jck6qr36tGQDT4PZXVP5EcNN4D3nyXnsfbX7k7eMdf7Jx1PVM4rFmN87t3L1EKLM",
  "key34": "5yP7HP19QND8ftNQMdrPAoEKVxekD1GUdS6Tsat32334JJFFa5z1NAjfFXLTTTQLQT2YW2Ctxpwh6i6yQtzj8a1a",
  "key35": "3o2NJyZE6tCc44se35732Z4FQ8ubaDr9RvShqqhjLLhVnrSriRxwyz3yL2EdzDFU3mH9jGAqU41y79MokQpeuRnd",
  "key36": "5ahc9VkcwhLXAXBNy3ccZa4aCEHm1dnq1CQmSckbfJ7APhwBKwZfta8nR37rbQ4ujrzU3EySKem53xphWu2L7Rrh",
  "key37": "5aSEQA6tasLmuLL6XFhELBBM6Kq4mVYJ1J5fDmmEe8krwE6tvKVaUEDztEqNJ8XDZ2edpd6yUau6Km6TdmF3gvyo"
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
