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
    "5Y951qXejA8wWiZcJT8u3iEg8PNcNyzCSnYZo6oTRLMjCeLx9gUfVqNqsmikX1WggvJguB6nx5RTxPWbb6oJWDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vuutg7Uku6pQAqDZvyFHkFh7xYqXK7A6EazZZceTCij7oWcPh1biu1BrGnc3dhFM7JRgmDwPWkt8CyYR97bgcrD",
  "key1": "RLy8G6F7VyjmHAezbM9AVzVt6H9UsCVWKgx5kwvnKBTBZJiL3qnY6d3Nm1pLFDQYVs1YtVMYkdz9NaeidXHCyLo",
  "key2": "3FnYywdGdjvkGLcGmfgukST5cUj7EiaXttjKG3KhyZKeimSeo6kCSf77TvjKbhJzxCGLqus79mYyyu49QU4idhqR",
  "key3": "2wA9hukLEt7RSeqNYsAoHk8Uk17Fa2Nv3ZAdAe8Txs2X2jcRjiK2WHdzhcXpn9jWR3Aax9KAMsQFKWsXSuv5XJKw",
  "key4": "5nqm93eXJjU98MLfZ1JnB3hJyFY2YjpUj99E6Zmn1YxCnZp99cYo3WSJaPFeQuUotsn1cyFmSr3uZswbxsQDzpVv",
  "key5": "2HT7vTDKu9st27XdJ7d1YQkKa95fyZ8hRq8NWtprAJvStVSU1XVAnKGLwdRXmp2xYpEr3UvKtJDjsdrffyPw9Qst",
  "key6": "5v6ZvMxhJwqjWUn7GRss2XgpebsHYFATsGpGR9HdMbqhCKqrVAfQV3vXZQWytV6AKuoj8JfBgLQV44hpPmXmmzrL",
  "key7": "2rWYkccp4t2sgidCdPZR8wa6fgfHyYhx3HrK2Ny83SuMh2Af7bkfnXVyMcHXcWx9Xg3MroWB8cdHRDC2E3e7iwFx",
  "key8": "5L3pHaCbZiQdEsURDudqNZ1hVp3RUBVz53Y1raPZ6JUoLfA8eDXPwcm8iq3oNnJ2svcvvAFoW3gujgaLExhQnYyD",
  "key9": "54LpcmbbQaFBPQnviRJs4S2P3ATkCVinxpLk68js29UjrJLZUyuWcxrzXboPvK8TMGAhBiSb3sjbr1hVijeoMKSD",
  "key10": "Dh2iXxwei6BHy5yC4WcBaft3yB9jTjSMUCWRSvhcu11fgJz4aonbx4vW7B4pQc9SjNKsf6UodpoNvw5A7axUtpr",
  "key11": "2TG6fYnXqvqv9a6uiPnDYM8QSXpQvmVLm3MHhHvrvMtWpfezqraauNMqPcwKqQ5TtcCboeeU81kZ9omU5RiCEPou",
  "key12": "2qmzXPrVqFLb6L5PhRQuy5REW6quyQb4EjHuYvhXHyfeDmBLkTXdhVA1R64zBagnkQxXHZFp7stuUYYF8bqg5PK8",
  "key13": "2GG8oAFdUCixNVAfJPtKmAojBTS8B177joz61Ap6SBYgyqtdQFyy2wb1Jc1m6hwM3BaZHuDmofP11Tvg9NWTgamD",
  "key14": "53JvAopAjSUkxpUWqd1JbzVEsibNRUu6NGYhsbJRKWRgdakaMBYzqBUAfMjMNiyAdw2cStYrYSHXNFWid4joCrtH",
  "key15": "y146LabP7BEPCXb4czPqwoyDvN1QgvVEvXq9zwkYFQWrjcBUCYUVCqwR2JNXQeEeQqMDes5FaPYDszjWp5r3Mko",
  "key16": "2ga67YFyQKTjvSF6jFYpuzKgixbAUFzj63oBhVbFCyaqL3ggsy5pTcKqsnkfa5TpruWXXTDug8HimYYJ2XHYdwzP",
  "key17": "ZyeAYUZXhXEQQsp7pQYWTmiU4pKGjot2VbYhhH9KAQrrGEGi48GrBPGdPDg6KEMf89ovPAYNb2knkS5n8LqsvC1",
  "key18": "3H9MrkadabFQJuKhFx4UmD4wXQC7axQo22L17nP74dudPWPyLWHkwdKKcSdvZkwyvmRbqXRZMDFjAyoXpePsqRzd",
  "key19": "2R5D8iwJd95MF8v9qDCbqvTMJi7dFwbdGXjpvkrmp7Vn3jYN6FNT8K6qKCRwPicjFBw5xGM1TJX4ENwmMjhzcBCt",
  "key20": "4k3DnBQ96adkwPP1uCnr35EtEV13PDafpSrYkH9ghk6WQj1DJp8ssFpx9SrLzyZaqbtrsJjMb8XvwLA2qzQEA1wR",
  "key21": "5ir1eBsQ8nikH86i4RM2APxfEqarp9x9HdyudWbLpei4EkjqJm13BECk1NuzqnBmJpjMjYRCDMrmNFLEtYSCfCxC",
  "key22": "2VWBN2Cin2VZNCUeJbrzr7YobCo8VFRVk3HnZJFC5fcNiuxBU9QdieCQ1QBGVLsePPQYXZKKvvPhKybTt5DRjV8W",
  "key23": "qnGiTCLzUy7H4GiLn5crppMVXnFXM63VNPdjNMix2cJxgPJ7BgmduketnXUkLg2zwTfdThHoiygr22bmw53DoqD",
  "key24": "5xfhomoy9cKxQ7qdfoQq1BCfsFLMEphEH6x98KuNcAdspQbCV6wCsqWQiLYn89y9ECH4Wi7j9fV2jDhkKaprhN8y",
  "key25": "59EZSPYASmom2itSLDaLPnUVTrJJWyFRJxLrvHguw23C1NTjanU1WmvaUthxv88R3ZsRktfSpFdmuSifvWvt9X6m",
  "key26": "3C2ysTDbSipYy6YcB8BHJJF6VTJKKExynqpk9P9zFtNtWAN6V5jH8xJM3oZFu9mucfQNU3QfNi9iBVLGxGVqzPf2",
  "key27": "4xpjr3kZi1meiHCwaoZ2pHGkmrt5TTeBioQr3Zof7mbhwicYWsKecpcHXaLoefeVqUiZtwXgkLWBHXBoDyjeNPjM",
  "key28": "66Ds4Vh65SncxjJG48Nry5tesxc3hk5JdoEmfSGwFxnXPxtdSizZDBCVaQbJC8y6dJnB8PH8E5bdaaNSbB2GZbjt",
  "key29": "aavrnTjQ2GG1XkT2zGLi2Fa2Wim5XYJoJtAATkunvJWC1BwtoqAeMfB2G6RP7HPjGe4Q3f9cB53rk7tRcsNoiRG",
  "key30": "r7EhNVzn5jTN2zcwKDG1gzhEmcBT8mkWixM5PV4pmmHjMUeNwMd1KREKCNMAyhLkeQCuMvG5PPXZzNBicoPzLsB",
  "key31": "42FGr9UJmeXFGPQax2VYFG4tunaYwNtAvZrMGpcWX1MiryvPZmyZ9iZEHpixLqhnLiQH7NJdZz3YeSGLCYuvQt87",
  "key32": "RtFTDNiHkh7BBy4KuGGNWE17dQ9uAwb5PWpnDyHEnbC3RNgT1BFqPNDXhmMtfyH8m4Sk4vdrKbbkkbECkPayv2R",
  "key33": "26pVAcJfGNBDfchfS8gNBZpHVMxyvYJBt5QzBzjjQMeeDXogBfxXn4txFXD6g7GgJfe44HF792weNj6vMdDCp8ti",
  "key34": "5AcqWtAKg8cTFxX1S9azpQbbBrpU8vfWX2bhZKjT3X3JZwVkQFxQCqAXdQ22eKRnc5mzcUhc38H1npKvUKekVDWM",
  "key35": "49uYade3stoYP9oCu3GLFT7WACMPbetbWdSiYZXt7nXBHuQVA9RmiAk4YdBs4FpFSN9b2fZvRn5mth7SC8ATkQDq",
  "key36": "27KvDaLTTB8zTpNJP8v5pP1HYgYYJ6qEsPmEWgoJ91jn9qoRVJB74kf9PbvTu95fQ4nuaPPbxFytPdfakAckdnKa"
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
