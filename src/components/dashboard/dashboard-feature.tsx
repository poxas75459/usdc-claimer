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
    "59Emf2pktYoQ12UwPXCj6XLVpqWD6rExC9hWQzPgGaPMSn8HjyTu7qBQgMTQ8hfrg21SaoCXZtnrqE9KvNXa6jEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jZF3cUdRhkY3vhJyEQXm4aeZidAKYQJFZ8CSMaiCHU3ddBitbZjRbyezjSps4f2V6JtUWQdjG3er3gMRfcSpqwt",
  "key1": "wivEfcX47mUZGjZZ73P82Hn5iQuga8wtWRMnWeHHNgnEBnzwfA7xnCjgg1M4yobJsjWKQ6NXbVCvCPaWv7eQfXE",
  "key2": "4Tjnd9ZUftLrLQ41d5m8gEsNVN2zwYHFJsBQ2RmuVG1wY25esNBGCYAX3iYXtG4qkdH8NjZwGkfoTXcrbqZHjnqE",
  "key3": "GZqkEdcgmgthCucT2Q85uRjzVrQcJzbRAWSjnRRAC6bc7zqbFD26z2ct777CZCi6CDCpLPDcP21Y5KhZANa6qvG",
  "key4": "4MBcBStHbhic3oXF2rFUMtZ5PibqSfneXPERzPhzry3jgi5922dA5tZpNKnKyB4k2WpmxEuGpaHEWcv8jUTrwFpo",
  "key5": "F99j69QjMJyhqDUbd4pa8wVFM7K2SWbCxg8XPi3E3CPz9jxj7Giivews3VSvodnxFQjbfePGUZh7taWnZ5af6oT",
  "key6": "2jowBVdkeoyf7aVP1jUuWswbV12ee3o18eM7LSBZci2vTFXbnVdJDDXosZfS4tfkHfkaxhhbstUjYDSV1pS9VJEQ",
  "key7": "39fvz29N3gGgvkHuDhj1awcQJiGoyuDjb3iu6b98gzj5fM4pKhybecFSZhtfmskEGgktrjmxBZiUsXFryACft3rc",
  "key8": "vPcbUnsD2gXDHfv7Xsjy2uMsG9Y5FEzTi96XuJdcjYkB79abwXs7hfX4UWJCWWUXycEegxohNadCWWApv57z3yM",
  "key9": "2kqV8yNKF2RGqXHWbZXAzhFQR7VTmKDCGgJw5uhP9jV3tyExz9GHsvboSUxExSmiEDkXgwzijGqNTUByQ39ixE8i",
  "key10": "34f538rtCMcAgjhby7EFQCzRMS7jw5C7gCYngkgRYJ3vNxQ4XwEjgDxkp8dtGR6b7do7DPwaaojwamfgEJ3Xzdfz",
  "key11": "4X8oJ9xG4k1wMXN3GEUTeuS3ueQowNPS473WoWXNwigNqZprtzBpZDco9GHV7LXrcTNkdgJxSdrNz7QegA8W6AK",
  "key12": "21G32vcGWDNAHAcbP99BkUtyeTqVEQzucEhpsi5jfJcUPktLiFVkzoTZNSRhEuRseoWro3QK79EDPF6bkigumEds",
  "key13": "2T3ukEaiZuHYddxbp9JKuej6H6JJbAQNSiwcb9fJb5uYE991fLUUWJtBLwALNSdPtAt8itK16Ko4vJDnzJENPPMs",
  "key14": "gCvSBfYpLP3G7U6sfadFxyFbPBaAyHDbYhTN4mCcqrGqHACNRySyDWk5wAJZE6Q2Dh7h8iJmgUMR22gfNnWHXpy",
  "key15": "qAuezwYCJEP34QmcZeRHLGksBY7FKsbwvFJvNdyxc4Kj2Nik3K5Kzywhum2zU5wXdv2KkMLRZFUnWNatffLbzjQ",
  "key16": "2X3tRNjjofYCmoMdTvCWoQynUn62tMKWgav9S1yxcT7i9DiJygYNDRSwQWsw6oNX8iatb8MYwvV5NAeA26xuGiK3",
  "key17": "BKqE2jnG5inub4KRZFzBQNerWZuuqHd59uY6mmon4BtVFeDbYhjhLysMog95cB6nFgyXdPKfHWrDU4fK9iWsUFc",
  "key18": "23QGET7ZTrbRDr32G52xyGCRxeK8JYzUHeRLXpeyP629fEuBWxSmDYu317L5Rd2eZzEXHtCCMvqHpWSbbEWLPEeY",
  "key19": "4L5MiJjQgeFGB4iZ6Z1MjiZR2atbj2ExQAroJTkphuXrwJGZLJiDcEPEkiLSiDk6iw8aocxZahWQ4tAWWp7zRBih",
  "key20": "4N6hjj3ZpCiNmJaMjWrRMjNZY21bnXskhTFGykvcYjUa6c5KF4mGJoeTajEFyhKB4aiJzDVigvZbyLRnX69ThyFu",
  "key21": "RGGXhVAqH1fXPoWxoenMZdR3oZ4PVjjbc7LWxSf6XCEonR2oNsFUh7H6519yWn3vJSJYLkH9tFj264TPmxg8Vju",
  "key22": "4s6yE7U39VoD5ULJL8odQpDMHMAfCYaZhM4HbyHTmoeFyvJCLT1bjoHw9te6bv5C7CKMMvHphFqpB1vdwSK9Y5u",
  "key23": "6eQ1hctYs1oySCEJfn9XbyaDSsdttBTaMdd4DnPV6BbTpdQ4jakJpekbjLg31btRB76jbkXndJRF5zjSiF4hsHw",
  "key24": "4qyZKHYVQYTEwh34X7wgf9FqBwa14SWsEsxa19uyT62Sk7tsGBCzFrR6VYYXaPojewyT2rvM6z77uBxbFJctKcoy",
  "key25": "52BVUL4r4T9FjmzBkkYHM6RcDELtk5b4NF3tsH9cZzTPsJ1H8PAKqTetLuM6Ap8doRVe3JDPB8UWyAi2TeaMR3tk",
  "key26": "62yDRogAdaBTBEmuABBkDYedC4NnNoFee5pKWKWKSLjJoCrRaAsoCrfD8bRNETsv4dKLGYtHMWUVNkjam5xmDG8D",
  "key27": "4hCmcwRP5DLkh76cGSjHYhTuE5sK8onTpXzmpRnzxswvao6yKD9cQ6XVoENDjyvsgFMxjE8pywuQLmH2K79Fs3q7",
  "key28": "mnRKL3NSTowi32ttLhguY9zF3MEbSEr53HUvkbKgMpHYhGPeZAfcjoVEDoe57sZ94FUe4N7UmxgNCvKDcTQ19BU",
  "key29": "5BqKNy5ND7wKxf2KVGE4RkxEDGyrRsGzHtPKwaoyAoRVuVrswiCjBiZ8L876PC7JoMrg5N6pvhhD6ELq4Jm7NMy3"
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
