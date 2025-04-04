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
    "Z4kAVgcbpsfz1kqadzzXNRkbR1Z4St89Xxi6XYmBQ96aL4eW2vGtyJgdU59NNRA7GLEev1TuYd8CBPDockxsJrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t3Hmh8eic1V1k1XFiwo6Dpf1uuGHewcCUt7ANpxJjLJV5WYcZ651H8NdV79tx75FWSCHgmpzqycCLSaLucgXnbH",
  "key1": "5QTwiamPNGDUiyhA9UF3ZgjcNVwza7p6aizPUhFiApGKXMVt3FQzyKXdtvAYankqBpJC8ktd6c4n3p2oPJcn2otc",
  "key2": "35X4kV4QtnA6B6vtLcny4fHQMMapkWndnk1m8pPAZq2chg5oDWNiMFSt3HvYWdKUvsdwCv83GXjmx4ef75nj4nox",
  "key3": "4sSDhd8N9YnLmjFaMsM1FRUBePJEdxctQrLpF5w5G5vQ1WErTiMAf8UMs35gk3dfAg3oaJ1fJEAqtxqDyGC9dbSM",
  "key4": "3r2PshrbbWMS6pYovBYYtoTXZyx1pXfr4qxijPuTM3M6Rm3gYzU7D3QhteMQ7731Xh72smzgtav5ZLS5hhfpciaP",
  "key5": "3QNU2VMg9wz8HRHp4S1ZbEht1RXPP6F2KepsYjMxJ3JPoPwYjdVhJPr6QhBpmkFdY8THv6t8u1XrViYwijfKMPt1",
  "key6": "3d4RAnm6W2CLvyAoyX5dWu9EA2jeAfBRLRcA2sLD6sg37bvRFH772WcpmoFGGD23Se7C46gKTPDFPtXRtiY1Ha81",
  "key7": "3CeTuVSz8fU9PD5ES23xBRbkX1Ztt2nFZ541gxsMJtwmHmBcmEAonzcTDFzJpWQHZ6SU8NMbKPJkaikbdxDr3QcQ",
  "key8": "57hpZw4wiPhd3t3gXaBKEaYZprsfBSWS9r4ZmDDzPsztZTAVuHRGcZSF5JTabkhcRHhpcaywtmW1YqDqyYpHZg9n",
  "key9": "HX8WqkhvkyJpJH9AeBKEuaWvDrkhWmaZ7wSz1NuBFfGn6wo3wkz8c4zTC7JQBZGa22hFMnuLyUZ38YBXjvhkjjH",
  "key10": "SrGcEcwxb3KUJiZntrz5JtDyannw1eHsSAosbxjnj7V887FURXJ7mnb7Jxdvocjc7wXSeVsq6Qvd82B4dsufN3p",
  "key11": "5p41F43yWUJtpbKpuMA6AJ9xyD5RL8ozTg764tFTLNfQjvgSDwWDKFdtJFNASn22quxL4C8pCeiPtdwNptZrCEBp",
  "key12": "4XKrnW4AE5jZifDbRaVVprBYRfTNbcRVGtnqp7JEQaw2roBaMcS3dNWC8v5wKjfu12EekegvNcGPfYJERMkVqbuF",
  "key13": "njtVN52rrXaW9WKjKzt1rsrM1tKGvUPpeCH4cCj1Ah5iwecKK9ue26EtFefT6GHS4YQxk634qWL8jgjWqZRP9Hk",
  "key14": "5J1Fc2ra45NcqtpsdqU15vFDH19JmzGk1DidTH13U3vLKh41XB98Fp7EWGCMMApBo6ARDumihbx1PYu7eN5Lbe7G",
  "key15": "45rqUqnnZxAvqkS9tj6GR1C1CKrANwoLdEfqZuHcpmSUagKoQramSv42jQB7KpH7bGHj8PQGQGLPSxboBRwfmpq4",
  "key16": "9CvGZEpoa9P1dHK3PhJf2FdLCFBG2Q6sNw5hFGV45gufBjNeE8bgfUX9fMMJ1a5vE2auENNksaAioHTxrnphrUo",
  "key17": "4SwiqcEJGVPs5evUDdYxSpo3rvNKvpCzhFCGPcfjRnZW9fYafN6ZtS63cdQWZKzMh9Y6oAtKRkW86zhGLzy5ooa1",
  "key18": "yyu6vD6i4V3GB3Crn5D6ZjbtG8tbuFrEXiLH7oo4ks1hVoG1zJCfvF8bVMZui5eCEgUpHHpzb98WUbCJdQDTSug",
  "key19": "3zBV3TWbEECW3EuiQxtfFqadUz59diL1ZNm31deAwqTtFCEZw6KSRcPwUM8e3AxQV7s6bsykFWuVMxkktFJvJhvv",
  "key20": "3NB8XbwVfmzHN2oTULJJ4NUZkkDv7yy9qZ1SxgRe9rDbtqLaW1tNzXWQENMFXmhvppA5MXe1uQqiCKWyaid5LhjE",
  "key21": "57WtQBQ4H8RUDdyvSAhV4w8fmSkTQzT5j22jxy1VyRSRyQPyZmGoBAi5d6p4NQrVxJQcgE6uEfqnVpK1i7CsZh2W",
  "key22": "DNZCKeESuk9fq4KLHGAqMqjqAJvDYEyBbkNxYakJjqj6yzZRAP41iy64bPvzbHKCHviDdZMMzNpu9zLV3SmmhRS",
  "key23": "4oeq5zote9FgJgZPh2i1puHbrfa8rJSgaYBceton4y6tcpFCwewHuEMLFYBeCNSdwXppahNCgB9XByhL16dN6tox",
  "key24": "RHFBB3rsC1jcsfVRaCFDsazeDTG8Wq2auzXTkgJ8RH96eUBxk2sbT3sU24iah8Q6ueqapgsxif2ZkTnarqW3Pkc",
  "key25": "37nUN8xu8vfHGeuPLLLgya5u3EZT3uXGfWNV7XsKoc5KYe1LoX38AYDPbPkwXzYHGgDXjtvr1Vps7o2i9KeSLoAp",
  "key26": "SqnVUf1A3wVYnKg9WiSnqbnN1ENB9cWgB5zXPeD3UVC2na34GYuvu8fqMXp6pVWoFcTPfCBjF43N2hsxTxJj6AN"
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
