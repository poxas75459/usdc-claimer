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
    "21ZovTqDf5QyVkj1EGnQNfNcypqsmPARTJ2dyM7He7G7SNLAJu5mWfdZVKSXmPGmRxZ8co9aFRxRRwYsNR9aCXCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J5y7wJfQzxY1wUMUJG8pzP4zFv9WceJ2mnLoGRXS37FiZHFVnrK7gKVLe1FJGp4kkByaSv5t7qCsJ1x7Y1R8ANk",
  "key1": "519XCrm3R158ibjPoqTYW51sYFqk4vqUJswHhH7aMWkEfSM185onceX478K7XU1YpMNzqUGfDtk1XrWgg2G5xw79",
  "key2": "39fGCdBb1tYaGjrvJd19dsQSJh9JM7xTPmi9oCadkdn99XKQUcpRXkfoUvBkSoTvBvrsKZGLcCrTTnJRBtgncVkS",
  "key3": "66wvXpFjP77iEFD8bQtbnawd7mPdwrSM2mGGqkugbtoizHuU8XSHqMHF8Yha7tYD58tuEmVVmnvATjP44tMumZ17",
  "key4": "sLcg4XRbYNgft4mPMg1asuaR3w4Mb89GBEFnhg4P53cuoBU5ccSA17Dt6Vr4V6j4yDXEdfybwW8zBSTYuaeTosF",
  "key5": "3beQj4oiyZZoSPGP3fVD6WJyKhEnCRqYbwzAkjPmeifYG91WtfCaN1Cqa2yxramwtvVkdS63wwcPZJ3E4JbBTxu4",
  "key6": "298WYWC2P3w7DDxWHCJaQZcimXkS2PN8NHFnKLfWf536oEV6RqcmyrRHPTMwK6aU5Yx1Pk4Ww6ZPivAXtewDBuD8",
  "key7": "3HUAvWLHxMHJorkqEgmMpRNoYeESWbBAmdkhx4NcRBNPcPc8hSbLgHKY186wnTRvnDqCVZdHPcMW7R5fgAPYJqbN",
  "key8": "2qEniF7JQKo5vQ3hHMmnQrmkyP1uirCxNYG8AhWC8CVYgsDZtnGSEPJ4r2BpkxWZJbhNBBdocWYdmvJJpvWYFbw4",
  "key9": "5sVtTdicJG41tMfEKiJp3fV399CXVHWYzbXMrguUTmWVMk5uxVD5BC6sd25gdvTLZqDD49btoHKbPRs1ywLABBQK",
  "key10": "2d9UQLRcnGNpUb3R5HVMriqcaSd6W726EuQk2us94aCQhrHynsANj89v2HjC16hstCBn1nDaawsXVhXG3dA2ZCjD",
  "key11": "3JcLPqDQjXxGhtkpujQiVkM5NJdEg8nFeAhZRgq3ZqqZu9bLiXRzZSjEH8KwBoSvH4gEFVHy3RoMDw7P24QDEkDM",
  "key12": "4dMVuorRXuUQeuDto51F2G4hrLrLLiF9BEy73ZnkDmbAnGwmxE8WCqdfTJpGoJUppe5iFZdfUK4L2KtZv3RpegnW",
  "key13": "48oU7YzaJXbELY8uPVanyUqFbetanzF858GHhmqMWXtCWgceuwiz6BtYNGWQn5Kmw5b2JHpCzS1BjFeYX8xu2AYc",
  "key14": "48NMfiQWLweWPrrLkH9YviT5RGXrPCA1ZqEQ2UwFezWJQgKsygu6wEEBjMNbxZwPZMYyWJ7ETdP6F46hGk6UV3ef",
  "key15": "674GsJKNPizcHu5LtxwcygajG4145hhkcEAub8X1Lw6SNgAXGzgKhxqGPtWAZxvxhCecXzdD8cfEcyvPXBXbDTxL",
  "key16": "5HU8T2tu4MhxCgagdhgMfnLEXvPNKuRo3p6rfTquXhQ1A68iRrGTiqzoLPjTCDewP24KewsPAmVmLrQdoyShDoa5",
  "key17": "2duqvP8QsCtAFLdbxJYp4z9Hunb6zWsZraGerT7oJFLtUmj2n1Geh4nx9cMBPS8VqfP3noQA474VEuREUEDoaewu",
  "key18": "SXDPG9LJrj97CkXF8xEGZyKdqycYckuuQnyT5mWmZM9eyTzUe3Z4wfYKyUsCgj5tTP7MXUqTNs9TeDorCpUibYE",
  "key19": "3mZGHHVqcQGz1j2MqJAcsdFJGmUaUMZy3sQn3VHiSBHBS9q5rpqnQyq3ySX6sRpxy8AwfL3mbJipKGRJrSa18wv3",
  "key20": "5J7afC2M7L4KRi7aJjaZG3hn2wuiHanKk9ztrdVrYeubKaEFmVNTWJTPqdh5NpiSFsBvYoxGoPJMBWt1ydK4pJhB",
  "key21": "KL4PeGZ9jT8gCA4QUxioLu3pZqA3rNwhNizgPBgxv6RJHjDAxSS3jF328RMFFudoSXWKUh7nhCN9EEHo5GpSJXH",
  "key22": "3VUppeXe5TFDEhT9cGFvDHCrz7JfEzW4c3fG1EqVMVUX6WFFJwsPhd5a7MdNGCV6bMGvxMDJdiyj9Kjg5bTJpPsH",
  "key23": "5MJSaG2K4tbUxoQZQgxYr2sucLkLaJXWNJKtBmiT8mXXcUwWMjH4BoeXyW1WDUQWGTQMpVFmhW91mrAgKTJ9JKb9",
  "key24": "3Sbrarxux6AGpUR6wNzUoE5bEDDa2JN9gkUQRxW5NsehN3sHefFZRnVetqcKk7GTqFBeUfcCv21w16PzBEoh4k9E",
  "key25": "5gSe4tLCHypMkkRAdFgtdgttQ3WqVxxXVxxsJCJ8ANQi8ybay18JhTppvXMMpuDVbef8WgwX2SgZjvyg6oYjK4gS",
  "key26": "64riNucXFv9nCzH7Bv4vd3aVc6ek1H1ighwLXB8CMQQPASssXR8PqN4qXS1wu9yiUs6qw4h1NfsumY8JfnWX9jh4",
  "key27": "w8S9VMP261pTZ9viHtRBbHmAFeUf9fzaiMFSAsLj7w7CmmKGCyqq5ArjAXedpQSsnjfXKjw74SrFp32Ap3tYDoy",
  "key28": "2kGeqfQiRLxTvPWNoCySCEtjy1z1GBJrcciNxZ1uUeqqYZ1HkKMpxyYEEEVYLyCNe1nc5xXKuVPrjJDbJZuLYmFU",
  "key29": "3tJqAfycm3gey6PQZuLVecF4n8Z77thXfNZ7E1eRxU3hE8i2BY5VHHvCggBDopQsYSyNMTrbTNT4gBje9VKDAKzJ",
  "key30": "2pYu2pwYBjNrUQgrJFGHFNmUoXWkwSB3XrqHhfeKrWv7AcjceRTxcxyE3QkqC2tqN3GTk4bpX2rsEzRF2KfzwqRu",
  "key31": "5SCFvtLiefPnV7rqunwAhQkdSDH8evyVYsHhCy1m5AyK3uTR84bki5UEETh2rm6TrwoxoWEKgGLDNCvCEqj4md9o",
  "key32": "4gVACP2xN3Qb4mh6wdkejJJMHazGpv7cpWrS1U8zkFavQnhdWvvHzVLCw2BBicUTQ7WskJ9AF79ukNxkQRLUNHxK",
  "key33": "2EbvigbxZaCDwLeGuX9mjeCCPw5HSUK3qWCXNvg7DJH93uP4ZNc9c1AVFw6qNfWw4jgiSKzf4Dfp85YEbQG4zkND",
  "key34": "2QgneUbQXzfbkB8p3KMxaQqDkExBdReXJMjHCJErSQqstDrZMfoQuLLpxG5MyKBTUdt44GVygFX8YMYJYPJMyQnD",
  "key35": "2ezhDXV6VZnJnAsbi6PZKASecPPdWJJRgAKsQ9SP2qmvAjGiWa6J36pyQJhBdeZjHtuZc7afFSDgpaBt43Ukkh6s",
  "key36": "tZYdvyiZoEabfRMadJiHnUBMYpjbPbpRZMPcZvhtjR5zSNLEwRL8m3LehXgahEqVTpcBG6UV14cVfMmR72zQWv9",
  "key37": "2WtWs9UADLxLYhtD8uxCymVWgLL2ZqFM6h8hL4bLvvm5DKKCxaBWY5odDQFEpnLbHdzb84VCyx3QauVNk1gDReNr",
  "key38": "4yjcQkDrGGGHQA5nNJqzhpBdH44p7eQb1CQ4P9TAu7qh76yhi74h3QT4rrQoJbQqgpPmdXQEaSLNx2nFGpinHurf"
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
