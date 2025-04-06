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
    "4pSUdKy2U3Nz8q3EUK4tR7gV6EUpxr93NkG6ifdyc9Gj3uDhr9y7ryYFVuNruzEbkQ8aqwZX7XmGePNuxxos1GvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EHyXFN5eV53ASkiatJeKhqiT6GF3NivgQuwZ79XuwqgWaQR2YX2SeUReo9eT77TWRpoPTuAXXMLaiqfm4a9LMCY",
  "key1": "35SHmawAgxuZZpr6Etpv82kadRyNk2z5MLhNdH4EESrXejPcSz3XbcDNXodTVnFm1Yjhswgg4njg5mDVUMfeQpn7",
  "key2": "2zpSRWMV2U5YFMfq6axrYWzeWDb72DDNeTAnd7wprZVSJKGWUSUMZ4RUaWosc7ebXgAivxYGMzKnnQHSwUQ6DnvT",
  "key3": "5fv1BmDLGLki6FromhHZJj1UW3p44yYrAyTYPM8K5HgFzrzEhWdeXwXRznmkDxmiLbYm2UGgAnamkw96txJZF1Rp",
  "key4": "63YUoHZT7ViqvFMN4Th4PwxRg4D1YeACUXf6Ns16ztKm7WKomgwRpskRqtZWoeVuMFKB8DZ68oTjY6fVSpqNaUtk",
  "key5": "3tSthh3qcLdnctkvLujrRbAYFBMP9CnttG4cLV7cMhRJtZXxa3UfWe39fVr19UGUy3osoCdwWnMgdN4fPVsYJoZF",
  "key6": "4uTeyZADi23hBtWQFZe9u4vvfmu9YtKC9uLwCtqbFRPGaMipqbdZPGUztawi4Pnq7X86teMxPEkTsR9mSYU3xEw4",
  "key7": "43BXyBEqJ66cmEmfdfdWKK4FYFynL32jZLbUo8aeBbTyFzhRRtytewCHwz98oCE8j6CmjByR5x1Meqc88dKwqXwX",
  "key8": "5HZDMtQK2La4TGadZbS7J5sBSpZePw4MoRXFtnpLBoZPNe2hRMecxSWDR23byNmkPSpamZFWEyMY8h8Dbrq5hVdu",
  "key9": "5wu5Eu317Fo1bk57kq7xWBqcu9FTGALdUggFSgFXnaK1LLQbc4o4z7iWqygCwtf7ZfiydmHkWJ8Q2yYkCBq2aBQZ",
  "key10": "5HrPJxRE8Mte1KimQXxy3Fwd15FSKYfM9g8tWVTG7YZDybNTetVPsLeCGDGFcBMesMAFHTuFS9KoKYAw4dTRH262",
  "key11": "4pSni7k9m5W26BYT3yqWmn9RcssGyEUX6KKzdojQgFoyx47JaPWyYMeB3eGqcxx5mcsxF6mauckCLTbznZrpLpDT",
  "key12": "5ZU4WGq6WzpHwYzjtiCu8jgo8Af9wMLeum4SRjhjVmHmvfFJf3Ud2ukrv8EY5pUJNaC5rw4cPveKEiWSd7xuN8op",
  "key13": "24eN9d1T98NGfTm7haWMcTbAGU8wRJwiFKgcNtqg17usu9xcrkeM2Q8YBhcuXpouQJST4Kvpz3wYoK3SnFr2iYRK",
  "key14": "gg2ZuPVWQ9XeKF5Z74BRNmMroDiJDKd1qeYbpefGE8YZR8RFDqJU2FcxigEsnXyyJVwmxc44cuDB6V13JG1nyLa",
  "key15": "5ZxEG2fbLFZPAnuJic4y5VjjTS5YqV6qa32KYr48ygHj8fABgai9UCQpHc7VPJrkHgESx8nyE3oabdrhG4Hsj5H4",
  "key16": "4nXdKvJaZGGtm56NsCGprXdwLGJBCR8JQZq3nnxBr1yMqZDkzUxvrJ66FgHx2wjra3cJ952R5uQ5J6n8dz4HzSio",
  "key17": "Eg81XCjmsUb1f5zkraXX7e3Ax7rQSTuA9NbVxAHvHNragK8tUJBM5aYPpZghZgoEzxhyiBRPEdbmWBYrXLoE8Vq",
  "key18": "5fFN2FZtEwdv2vE8C8NNvFMu8aRiTHx2wgX88ENiGCv1RV3ZKm143PH6ontkxDvqNsqSXHhGjSnzdqXDHd3nV6M8",
  "key19": "5bGGzED7oAvohJeY1YGsfLU6m6HZWcwzkNTfpzBJpRk4MR6WnKDVWTin7Q2ixhXKpXFNWVgguFQ2fLG7jSTbquiM",
  "key20": "2aq6Lk6K5HLA2JFGJXffbn8xZRpgaWLUR2N4pYUCKrf7G1RthNcovfyP17CjZfZTSrt2rRzwRYdoLXw4RWEb5bfU",
  "key21": "4ZLvFrZW2eb4eq1CoUHzmBjy2qAhA2P4LkMBTgo9wSmLPZufUbmbbCgmJTrdBe1RwePBmxJGNaFEFJh6ajRji1H5",
  "key22": "5afYxafUr25wHvEaaEjbkYdgPFaeSYVRL4uM1i29kVBjSNcNJLSDo18msmc84Vjny4KrwA3SuTMFY68HnB3fZVRs",
  "key23": "2aVRpUBeXajw4inBef8URZaoGEyKbFtnnnKjVcMY2agT2nHa3vbkwKUctVtyetrUXS5FLRLWQjhPeQmFuNfyTuQU",
  "key24": "g2uJkxrQ5jVZ2FbsGMk2uTLWKj81a8d9eB37RpGHsPHpr4QxTVp9o45iWtkYNFVCXPdHy8JeTM47oX6jcNNuRgP",
  "key25": "541DHHo7CYXasxDJ6Hp2tfhXdBMNYnRnJP2fDdoKA2t2skZx5AS5DnXd2PTaPZiU19uVW2Ei82tiC3iX1rwuaCvG",
  "key26": "39miWh7Aebix7AbvvoLungpPBL1v61MfUF8rguvpEPwEQ5KGg7feV6v9KSNZXi4rSNLwbwAeFqJeeFCkU5kH5ssy"
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
