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
    "3EfCeViMy6WjbiHZCi4oi6Hpck4LwKXBLHWvtGM6aKgqSjbpXUhZ4wYVNwQEfgm348nFLVPDGzZqba9CnWqmkQvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56qXq3zvaya95zCVG3MC119ziuFjMZGpA9JLxzXvnKEzr4AvXvhuRK1WGTzo7HdathugXSSKfFBHmcRU7XJFtRBJ",
  "key1": "3kwXAVte7tKwGM18xDidQzHqwRpZh3ShXQDUSadPCrr5EqVCmvMmcEEXdnYGNmUrF8LX241WwX3nneM6GVURrfC6",
  "key2": "5suNVM77sjYBx9gEyo3o498N66oTtBCxrJVqxYVmSoom96MAKceY1ZYu4qaGCQG3y73Rgjndc2RE5h4UadCAEdoG",
  "key3": "onTKS5HJLsFhCkpqZREjZYyNtmo8vBbPgYrKPi95rh5zzLpZ6GXTgQ6EsT3kyaxLkYqw6iRDHoKzk2PQMn2KrTb",
  "key4": "2YoFctCaCLZqPF8gqtP2rddbDj2EQPEkgziY8P81zvkHrxWjQEGrcgWLd2yXTZENB3bzG7nCVBV21RaoVfRzcuCE",
  "key5": "2dDnx4vCsEXce3sdR5ezaStTikR5yJ4pcVFv2auw6PsPajmFYGWuD1Am6D6pwv3Vtsg8HuQEB3efsDWhygkgKDnv",
  "key6": "5MaDe7AsuEHzAzcd2xfxDxjbrwXfDQboF9EAtFw9yGQggoBqPRJYVxuyYAkig3kHTLwCrQfFTh8igXistWE1CBeb",
  "key7": "5vx5mgwrb1XCpoPwxQXmF4doTpoo5JaQoyqee3nFswMoZR5bsBZuynGXt9BT7Ao4uTMrDXUmE2bLFmt4PUnU8RaV",
  "key8": "31ZpEErkGYrJRZpsjhNCXsFMV7jbgzXc4Pk54FsZzBGPgk8tnBKhN7kwPm2GGNzceiUYVgXFVp5WZs9ErDzR7JRy",
  "key9": "5uLJN39f5SKsL1YTk6sbknMLw3RYphwRFfhrEDpqfaANKLT6UCnvFstLr21kJMZvWhUpXfGVN2r8qDgAC9T2yo9Y",
  "key10": "7yFT7p5JcBp5YeN1VwG4KE6Zwdci3qKwNo85poVurjkmdK2hTodnFLJLQ9wtKk5Z2sphDLKqk5wYx76u4iFZBih",
  "key11": "b28eWTVGWWbeHTtvt2iwGvGxaXmoSMi2EtyZYzmuVWB4exkfrcUZWBWGLm256VEvMSD1EqFQgYh5ovny3rxMXxz",
  "key12": "Ata8Km32oGg5HVKMRcNABjiGMTc86TcbhmiM7GD1BcbLatxVCEhru4CyEFvBh6T4iQhrRp7K6iV2g8gzbxkn8Uv",
  "key13": "UGiA2Y3WfF5YJnsJyjsJbPkFUuvdczgZdSsgKNkutPM9K91xDxq2ivZrCbEo2FFqLw6V4yhfd14QSGn8L8FygWr",
  "key14": "4QW2rbNhSQX2s6Qmd3FxUyKJj48hDkQGD8X2EFkECvvdRb8GExvxCta2BenvGboXv1Kk18LE1ZiUYWQwBGNyVhZQ",
  "key15": "2cZVz3D7QcDreHHdvCr21TaQie7xpiki2BpvNiK82egmCWatR46X6Awkyimy3zXtvAXN5eY6q6BJNBm7CzeCYEMX",
  "key16": "5WqKqR62XUSYbuQk77byqquzmqEwXZkBU2mKmuqYndmcta7ifyFo4zJeQTohwC1HS6CoE5yUwujG3czWvnkZ93SL",
  "key17": "63iNpA3JWGNMwXyW6YBRS7zkLRV3viJRR858y7QmHAMwXqYiBViNGxLBn58GdJPUhUH5um2TqXZyychDVxw7cY5k",
  "key18": "2CZUH9D9SenQVnz9Jj7Dvwt7wSdY5ks9E6aK7kRcLNkfunp4mkPJuztBAFzbyFgbo7QwDWooW5vFgCBfpf4AxWFB",
  "key19": "3gnURdKGjFms6KgeYVZ87zXgsWPL44D4VYqqEyXD8mVPnWW5b3D6AfXPSU1eSseMUgwNTxe3QvZ2t4bd5kpv4FQf",
  "key20": "28moTL7KHdLzasYcbVeKhUQq1MXR3tGoVKqN9Qp1gydpUyu6BsXJRXGVBi14PoyncsxKQ9JBFsM8LHQPujJrbTgZ",
  "key21": "5EPoNWZ8TxF85ZogNQEsb4o45Xc3r2DVw5pk7Td8GoVMU5w7SJ7UEMz4QUFSjBFUosWJ6yENu68QCRmTDG4Tz6HR",
  "key22": "2e97QickrrSRhNynfLPyYVm2WeNc3jgqjumZmjudgJk7MfXyEmER8Dh8BFTEWCSn1UdmMBdFPjo2oQqDX82B7iq9",
  "key23": "4aeBcody3eJWbVMC9WBvUAz9rZCNzN7nhAV7651jvCjknCCbevdSfgK4c9uWCrWTxn4HtqyR3eMHUQuLA9iwvCW6",
  "key24": "5EVKKiJAsq8G1ZEvnt4F47ykhA3HyNWJPPyYZnaWGETv8U1V6pv5PQK2X5z6tfPbZjQudL1V1srivdE6i8vtW8iW",
  "key25": "Vyvm7NoG6ZVz6L2dwvp7WVqjSW5Xr1nipVjKX4gnZ7Gzs4h8xyTXTmfWR8Jb556iy2wkotAZhcvHRPs7WqqoPQc",
  "key26": "2GbS2Zb1RCFRG5WD9rLvrfChgFnKxBYS9ZtsWgN91jRePUMokRyyx9UkT61yPcRJaQi83B7jzcKj6yXuuPZbJTAD",
  "key27": "GCkDqvKsXKg7TucuQrbzTowqdfCvMbbawRTjaotCa9BDRXiUBRLdX3E86TgtGDM6vxmpXWR3tnseXx2SGHauUUW",
  "key28": "3BL4EuXkrT2eiP8EN74dwJCT9ehD1zF1jiVdR5DT2wR92XZdtWynoLD3meiAwdMRQS2qnW2KBmCw3PRwNVKyjar4",
  "key29": "5rZGFHK5BvfYwqZKLBaowKvM7nox82ZAPpvoBzEvr8scVymqHxCNK8htvCJU8vTNHww2HdV7g68ZiW16jRBoBQU3",
  "key30": "3FxS4Vz5GUMarKYVGrsX9WmFADYXwvdeiFSE4HZF9xkJDE18nqGUKRd78trdeYAbSwRKVPZ99iLd4Cz8gfP6BNfr",
  "key31": "63joQWSVWEtd9GE7TR78RZeJ79YomNWbMsfFVfifREGKot8qWYyqXV1wwHNCZMhkYZP79HgdnSn4APktH5oYp4NP",
  "key32": "2KsdDSKptrwiPcdrPQeFNgnGjR1xXqgnQkNT1YHfACYaz7Uv1qHxCA1mviaN9bSUcNCvASkfHFPNdkhDtvey2yLc",
  "key33": "26Y4M5cZynvnrCQRcd8wGQCpFXuH9UE85ECoae7VbTxebD3RasQfxeeRLmdrYEg5RnkzusyFHQT81v6Fh7hXAuUR",
  "key34": "bRfvauo7z1G549SsWyvGfRHMtJjWsnzmYQxef88Fw8PKFkjBgkTXNYijz2WA5bi8r5wMUd36N6TJmzGZBNKNHjd",
  "key35": "2SdMvoxUrENdMaBb8PVfpH9Z53UGjXu2GMJn7B79n8NdqY8bjJUxpjLaW4jx4ceeJErhqcoESYZYyc6RmVDGd34R",
  "key36": "3rT1gFqL1FTUPt6iKmV8Fvunb1reCkjzazN7uvUAyowz6i8nigt5jXjxbT5g1c2nZBw8CrmDvy3ijm2J9bEsWft8",
  "key37": "3ck4RJJzG6UMb8rRYnL2XBgeZmNwX9BqB6pkb6TcBF1kb4z8sj1HAT4z2LdLXu3LpEgMP9XzpmHs4njPPYc3uLkt",
  "key38": "Y7BhwZn4jyRoPgrcK7EeAGssLAz6vGMoxbDxehpdLuNNqwQp4hHP5xy6q9JzJMib5FkeXv6dw8EhGNrDN8WnBJQ",
  "key39": "PLysKdgEwr6zanLPN5svSkcPbBU7KkPKwuS7qDP2v3pMaYwQZNbfJdCgAjKRs4kGwNUykjdCMXxSUkjWs1Ce495",
  "key40": "2L19zpGMWX16NfYEmtdZs7RK9q997wUFzHqg2dJ7e4uTaPkcALsr6fUTc7o7RFA4o4i5WNiB1P93yhQntPgcRmqr"
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
