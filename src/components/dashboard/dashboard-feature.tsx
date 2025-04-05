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
    "58R4pVCpkasSXeZJPSwip4KCNJLL1qbsAb28V2HLyo52pSKbAtx4gGWBBCKrGt8jDiYAMedbnSacRUwCESjWmTwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E6oHRriojV2C9cBtz72nfdAi4PosLTJpNCxpXm7CZYuDqXai3ApUz8d7qoXZQ91FQrM97Ym88LAqBp42TVjuZ3Z",
  "key1": "2GcLP6jjvjQHa31WFafLphPnn6tsP5TdCqWXVnkaC2xdRaBfAdiiudHGjUKJxrdGoMhfAtE4ThHCyFbuXb1y79Jt",
  "key2": "bihGN6JEbeXNMEbavnZX315o8mH35t44msDW8q8hfqREFyQ1FSVjZ8zaJJGBbAML1RfJs29nJnHZP886rhUsMUP",
  "key3": "2MWaK88honXW9maCaNVeyjtsegqoTv9iEntqY1XEvWWyTsMcRqwSyEZYKwJfV3JRduwxFziCmVHQe78sQ6s1F5mR",
  "key4": "5MzQdMhqUkKawCBdcubQp7fzyJYZinmiKJatrqtEoCtJXbB9kVs3WZmHqXzxmBhpJzgLzLFe1Ri1jbnzCmejUcmX",
  "key5": "5apvCpaAqYtiZRBP4wLxLhrndbVbptFcHYceKPF6RpRrNozYskDdUAUvuJywCkW7jU3uhqqnuosLCUToDkJ6VK9v",
  "key6": "5MzGfVpn3Wem3RZPLKbrvM77T3UPAXW85eYYvv7J5whEoTMoekvthumY7YkJ8zwxCGmom1KBcANei3Hvf9EErZhz",
  "key7": "5RZcsz5Dr4DHwQeqUfPoWGogaRZR9s8skNs8J3oY2YujNqfHrPFs1U2CMZ1SsuhCssX6iwnjooFQsjU7fBJyGPsC",
  "key8": "fTbvomabiqoHjZRSuHwqTfLpd1V3dtqk6dYvq9ACdoKfxZznWtQ5XmnVbFNTZ5LfbRcJbSTyPgQrK8NnEsbfMWE",
  "key9": "ox9trft2wLsUVd8n9BVQuN46PkCQBKFVfoX9TCKYF1vxw6TGao5EJrstXa29jnFdRsZtFtKqFTp5UKt6ZCzVvfu",
  "key10": "47jv4BsGuZBQmZ14FSjTtGnm94TaAqvcLfrCQhMENqyjnM5RKrAxGGihydVSHz9zX9UqmsyKGNXjBznbFvJmgaFx",
  "key11": "4SduYMC5mzCE65pkMgPqo2DhDteoGnvoU9DMFQ4anFPJoM7jfh9vG2aXFXcLf27FyPnVUHDmgH8ywqMA5DBnz1eg",
  "key12": "4EkM75wf7wLHWerD5YhLMcxQ1GFQGnij5MWCkBrWwQaksYAixjXAdTAyXUBHErwfhja9y8btBVWvJd7z4VH4WXxm",
  "key13": "qGUAQ5eoHLPTmPShF95pKuC72Ki35cX4Vz9bpRpTkoF1zDs8c92wqmdaznYJfrNGFnysSdjyJuhEFLjU8DPm6MB",
  "key14": "3BuqkkkhhtnQhyyXhM4ukQbBtWPT7pA3Jp5fA2YkgXA84mBGkYhEkxf4GfhRnNBj5eJMrR4dpQUVAQ8RVWHkzPJu",
  "key15": "4ZYUbaDRzethgztkQX6Ro2vGUUfJ1Quwe6gRPivbg9p9jdecCLF7hqxtX9A2Yp4rY38z1RZUN2nCe4hQJfYL6Hx4",
  "key16": "RW5UBs9XypD5ybViy72BQxoqTVhngP7PvuT9z81KJfcCcyiwxzvuMJsRqTwczVPXUZWiLj7t3TUoN1ELdkwP36F",
  "key17": "5ZjE2o5ZNktYZaAZzBeWPnFb4mgag7WhpmNigqmhPezuaiRqp49DCHToE4VxiztsUZuyXRpkZKQjn2zYpSW9qRME",
  "key18": "45aGpdepNXpHg7TSHr1EG3faBYJ4pzmTJfJqoEqmKRPGe3UVDG41vjSRrrVmoHPAS8fucL5v3cPp85RugDXC8W31",
  "key19": "487ibVPnrWEhHVRxVADTWCNd84b3WPUGXGrq5CAeFK1uNin62sNmhb7NoBd8ZHFKigVaZkMTM4hCkcw7He7f55xC",
  "key20": "5cHawJ6mmAiEjNRUy1NtTgXLgwNYd4Ma4hTuYGAdws6foaPQJGhoxt7iaHvWzjFinQfiNK9MBeMiiD8fZceWzU3v",
  "key21": "5Z6ADfUya1yqWE2Shus9EtQTCCz1LcssQAaape63FTJDavpfzuJM2qDL7zYNFCsfMRDADjcTKhNvKQWHadUohjeW",
  "key22": "ZipgzgN19KxT6nUYNKDeJCZfJcZweB8t9rbSURh5XMr1xWaCzVMLYjBykdJC4jfkKBU7x9oeCcrXcCTV8hjZ3xr",
  "key23": "5gZH9YxD53AFMfX362LrXWLF2mjEJx7EgrhaQdNSyvUdCx2QTLm7AtzXYQNz24KNZkLJ58RyfMo9hEZWC45jbu35",
  "key24": "4tiaGL2i4xDiNuxx7oec42RCGpxGEJVnQZHJHC85GzyxfEvVNPPbHyT74CU8RKqxjZrV9StWwVefhj77yZUQA3xN",
  "key25": "2mHaH4nRmRoqu15whAMSEKmNCgXAkWsxna7qRrbt5wGern7F926Dz1QckfusQy3bd5MTCcYsgpoMvPSaD2waErJ4",
  "key26": "51S2Fy8hobj3HzLWomiLQxwUSdqFQCCbbmCbpHxoN1FC9EVNgj2wScBt5CX5szLiQLUJRYMw1ZucHvDHK2cqANRB",
  "key27": "4vKpWYkDvX7KYfMDyf5gW26qhEKpdHf6x8KiQJiQUMGCYpnsWy8Pp6pjHvuKjUV5pgwupegFS6qEPAPeC1ouYtmk",
  "key28": "3pvHuJiM14ZLYiqbP2B2eyjbrbe9hKKix5KSzbjDemQULLjNSU5E2SN2PgDbRgK5mLyLfrVEu4WyPVFPYPffJ24n",
  "key29": "2Rxd2tkTH5RvYzTqr9FX95ji2M5QQ2hSnPqhSzFbGWGAT7d5BzEhnAxNUkEHRnVkFhFPnmtyZ27oBJ4Yy9fkg51v",
  "key30": "2K1AdGxamtyYfFB9qLEzP19YzHYxB3ezWKLaZM8tUqm9C3AkzyTEMFifchJ5GqNzrBMAM34BAbSm5BLUDjH12u2Q",
  "key31": "vmDV7TDakpsWC7b1sPz9ZNmJYtC38Fi1rrMojQTiXDNV5fr78mcWK9t4p1WZiSLLJHhepMfvs9bKaCoY5FymEoJ",
  "key32": "41xRZJKixQoJBTAkUqGMyEGT2cnQX6Qntf9HWAcBasmcR3uyjdh278L9esWNzHTxsQSPZek1iSEwNmGUNaNoiPCX",
  "key33": "2PN8QGfXfFEyLPXgrHcT3M36TrMuShqcgtkvruNQFaR2STwhUXQVmPWcrRZ5GUweX3t3cFf1uS89DKLAZkQcS3tg",
  "key34": "22vuY14Mao24Z91ASDcfxNAHHdB6TT9TG2TUmaXz9uD3A35oL1vzDgxmkFSbBZrpoJMfJH1R2e8aa5Q6igXkHopR",
  "key35": "39SXs9GA329KWdSPU76yg4JsTXDw6987xQhMeqgjQSKeMKuLUyawdpG9GCnTEhjA8bAZygRBFtk9iHuqFUVeC6Do",
  "key36": "5YEEzFuMXq7pPJjpFvXp6o7fZFmgfr9uvD65AdFy5jU3S7CKSi34GiXp4BPapqrQLBm1AdDVZQbMwTfLJ7Amu2sg"
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
