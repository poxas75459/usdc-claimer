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
    "4eAEwhBo78uCH9b18kZBTgG2suC2mdRKTRr7e8UXzKXYnkdymM2E8EiJvYv52HTfipc7zVeRS45FbahyWiz6NMtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zC8SQh1t4n8ajpdJrY7qTuphCvpaGnk6mmr5nxZa8MdZPfCZaHHUDd2ddDPqeWB6wsmDid1W9T8H2rzCKKXgiWW",
  "key1": "ovp6nDa17tCVeMmxKH3fukzx1kqZHqeWvo6yZ5Fa4iuZoRe9r4amGxKNo56K4cuyUezkwSUa4jn7rnWq2zxkVuS",
  "key2": "4nT7caQQ1hw9ABaYu2UkxosgQ19cJN5hYnjgf5cqXk1MkDBwVvpCgjNzGAE221AKsWSz5GQ2M1vR5xvn5yUvNGQE",
  "key3": "3zQtZnL38mLWAkkcmir6LW8AbeJeya4u4BwVTczFw2fW5CbVYCw5FDZBB8tzZzAgADCRNuxQ4YBDGUsMF93krQ8L",
  "key4": "BzFd7ZwNBMdZX2TKpKFxUidvZiRLMkGDCRnFnDJxxaQmPYPLXijBRJCWajXiBJj2yATUyRYTowniiZKSTsuPd33",
  "key5": "2TYtv1vxAoR955GS94SKXq9hPohiyAdqxqzRR3rcMn4jgCwKweab6ZPZAtR4XAYmCsw3op2M79KNYweNVwypniGt",
  "key6": "j5ZXuZDnF1GyKrFHFgXirxsMAgmjHSd7xQhQmzcH62QynhCrVRhSLoYVXdh4zfB1HqwbjJ6m9wgWkVR9uYbSPAp",
  "key7": "szKJ7EH6S2JPa8fxVqsr8L3TyaCCTffF9JWtu99SvANg8mxBQFvCrNNXyv63LUkreRYeV4BVtKAV1ozpHhNaM2K",
  "key8": "e8yc8ou6mmGYiNprS6nDjJnv8cB6ShcTEbvFy9pYm2fa99N5HdsLsmAtbm9qYSCQcrpJj4wfiNQrHmu8224m28R",
  "key9": "28pAgE1XyQyQMTw311ZGCU3pCM6soiEGAvX499uL987Mzpd8C1hZWtzRQHpFByHkLcMVGoMksvGTWwqMzHs1fe4t",
  "key10": "xv2BTcyW5TpFAmq9PSMrVqunvjyyZimrFqCwPtVZ3MTCwozbSLZd34dwRiXW6u8UhziyPH4mmKFF2hcmmZeq9RH",
  "key11": "4rvCKke4fNuxxi6uyswpz2iSimhmEUpodTrBnumFhKmtcPVBxdu8THbh2Rg1FkzhEppU825D2cERPn3nYVRdnbDy",
  "key12": "44mLEYQR7H4PVmdsKHaRgKXUu3C29E7zsPknqg24d2423mYfVpw5nBjTGcu9bChHt9xWqbfemFa6ZbBazvwxDftR",
  "key13": "4v2g9nU6i2xsd1JzW2SG44QPhKuYD2ZSa2V5aQfZ8MjWn2y1HyccMzvuXYsksiPD7yabgsLsZ4GfxghXqFSEbTZL",
  "key14": "4fpMB8L2crSs54FZccBA5kQK7tqGvde4dUprw4VUHgvBNGwTtRLfgJDKP6Ji3wYmS9LgAkfmHG8Ak4tFX98gwicT",
  "key15": "679GmQNPetYn9BKunwNLfZo8MW99ojTq1pSw3hfRE5DMbhLitXdwgfg2drDydokDqsv9fJKpkjpsE9mgJsEpqwng",
  "key16": "4fLqyoeS5vWnSXnEiJY6mqP19sm9camgyojTF17rFvfcuKfA2iku1xdgADPvxMcgmRJWyzyrZDUdjwv5XvM5mnvG",
  "key17": "5kHnYSZfSKkvFd6sULNvTnL3GrvvVK8C4TnVVb1XjsBBCedyi3HgxcFvRcCjNcRguUfRBspXAq4DukTkNEfjV1kS",
  "key18": "5ArG2ahLFauiRPc511Qg5mVMaF5PD39bVPSp1x7xBpzpqXVF8sckfDSisu2kdX4Y3vkQkTFBihrKwmpoYXPKmkjc",
  "key19": "ycVejzea5tjx25yjZohipxV5xLKXhF4zAxcE77dB7n6c1YMFYfb2F9nJJKJ4vVQ5YqXe4qVccwHioxrUxtEeWQJ",
  "key20": "2fdGSXEAPunihxNajjW5fTvH1QtkoyAxZ65RN7XAfjnX3LEPDN5vnZ5GtvXdHdQPRqbU4JPtH9HbrQDFJ45NCECM",
  "key21": "3dh7Puun3RPSTHa43AFxMwE4Agcuj43pQt9hWv6iG8Zk9Dt4yGn3AH4ZpwsHdSwPB8VmdsBScL1KfU9eL4BUoPrk",
  "key22": "3H9CLjN6UwEHYHWXY4XFAD3YtmiJd2ZrnTohw5L4npCXGGExNFaAfYj3bS4CmBZF6oxLqgixAAvWNLYC1bvKSEXL",
  "key23": "553dG975HtP6KQvHy7RzMWGZVrWtGH7UCQs4BEppXgVTkLHh1rYD4jTSSHZwsNvcwYRn3FEFhdPJhtUZCicyUmFW",
  "key24": "5jrMpErd8tTy3RdhXrQ8dzyVEuND9fExfA3ezLB6s6FCFNLt1zPGmjkgJ9cARPe6LVTnMhSrApnVC17zssLAkk7P",
  "key25": "64VKVBkqbSJsKeexdnEtKxdicgTcpydcz724qZkdxXKzC6PpTyQr4VX5rk6wxN4rGkCQzTRr77LtEmTe83AxaeNK",
  "key26": "4k8x3JzyANjM2FRAfWBrYipqbRVppfNwLBPEbpr4uScirxtY5TTq3WR6buqNrpc3DEYvfUJYqDZaNRYKHsveC5Cy",
  "key27": "3DXirAZnk5btvXPwPXHis9MJWPqMLuogWE1thN9kTPciHWKrnGqEmNM7gcrDebQJN5M1gTJDjDv3QUUL39BAjKsN",
  "key28": "4G5sSHXT7d4tYyYS83GLEraBPqLSgQNSd5HxdZttcxK8AZvsBz622Q76EefTbQT2BEVHLGSz3szKNJThio9gqmWS",
  "key29": "4epGBs39zEwiAtiSgD5xcCZwBWgqjXfftYkkcLbFhjwDSgpR4AjiQyGcmHcwuPiDEbPLwM7bLWF8pdioWWiL5d1h",
  "key30": "8C1vTpBrrX4VmqUneyncVYkUd4RByEvW2hntL4RnXuVtcLgncPRx48df6xsFetxd3F5Px3Fp2i56tEphfnxW9E3",
  "key31": "5SpyGTCe2ykgjcskwcSAnzkVW6JnLVNAE4ZoqTqThRq7KtuDV7a11pWPS1G4YV1swLVeRY7V8XtEhqrkRAqqFRec",
  "key32": "2Fw4ViTW3j3jU6ZX3TF8HF7ubFwemuQz1y1NNGQtFneND63Vr1MFgrkGFRoqoWCrb2v7EVQtVYyqKq4JcSxht3Fe",
  "key33": "3SqNFmCsuvP598sVvaS9Hbs8wfx7x9w6dpprz1HMKJbQ8KFDCdvv9B7E6imTb3rn71uWG7UBR76bkgjZKkT3hn9Y",
  "key34": "23BBMQVRC2wm7DynLpW8zx3CTM4ihEgBnX4RatsEbopVU8iTnCVB4iu4QdmqocREaCDPwh4bPNr7dLTejzNAZjtG",
  "key35": "3xSdz7g5TrqFUwNdpskdGuMVrCLjFCvWLvNbYAnQtWDPHWeaege2MHjs9hMQ1gDU7u3aoosvq8fk2hLkVHq2WLm",
  "key36": "t8H6usbAwDxMJmVYNTDn4whZ5gf3Ht5wufDLSv4WZRr3F1m1PFsmzxnuZN3HUe5ce2YPfCwi2W6yDrCbExAmCbV",
  "key37": "5syTNPXZcAmXBY6TuGE7cpwzKT1iv92XaheMa9YCKmrso8qMhTPGVnjrfL2J7Zp9jkqznwPy9ShkGVcstkSm4iP1",
  "key38": "2FSbQdKUKqJQ1cTcfvQZpiki1WE4orzoG4n12nEvo7QhAyVxnKTxBt1rvZTw2KAQAYe91oQ3basWiugZVmTRepgS"
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
