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
    "55za2gQ9UrQW9z4eJaaDGfcATUGSBWryrjpdP4xUNVNro58n62tYCCnetiB9ZqKuGA7Tuq4BtfMcoGYcfK1d49hF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53zx7dsFUt5anuCFJNKLPKgC1Wzp6V8SHTaHco9adac5vUtx3QMayZbnEMhA8ZnWEqFgY46UXuSnYZAVs9J7Ab6q",
  "key1": "3powKPHqwELrEJkSJiSJv8EhpEHFhqFYxmbcXqzpQCTp98vaBRVXqm4eXV8jM4vPGapUZtATiPVqfnobdDdDLmpP",
  "key2": "2TGfPapmQXoVt53LH6gWPx3GeeQQAB2mpygQUydFGfmZM4tsJGpGsUaaDsLcNGcmdEN48976uZTET3pDUc4DsMeh",
  "key3": "2q9eE4suWzZtxQANoWHUswogSdbsL6woJg9ere1TUz5kP7QqN38gT5kXJLuxmLkkyL7Kj2q5kdrfRwTviUX7kZ42",
  "key4": "4hJR4tuMiVGTFr4TLZPFimPrvBaa9ovrSkG4TUtwixqXroyAobqc9NLcCyhysxPhE9Fqzu1BtyARxUCwhvUr15zd",
  "key5": "5hoNm34ghyUUXk1MZVMQphFisaihAkJ8tX1Bo9ZV44GP6y94syfnPB5XMtb5m6Mgb1TAYNLVzpesu6GQkbpmfocd",
  "key6": "2qDTm88cXY29aSa9MfcyWiPg6bB4ubJBuFpJ5YFoWGVCqvQ3NNi75MJTzDsxMnBoN8WrDxRupxsUvYEGAX4QKxpC",
  "key7": "3LYGSAPe6Upeh3YRmjnaSjyaiKwXjXKYyVCCsSGga9h7un8YmfnCFKgUnSYSBtG2fYgkU8dh7b9qToSk2wPiDHtT",
  "key8": "SgoMyAx5GeXGaREJSwPQZNdAu5VuWSMfaKr1mkjBMUoKgwkY81ouos8F1sMexPh3uVqnhisDBtwDWRjHxPyv663",
  "key9": "2ZGmAooJbB3m3frtsVSxNApmREP9Tpe4H1D25ATa144BrRKeRRZmVndUoo3Bg4Sb1mWW8xtJxGxKqopMYve9sQAg",
  "key10": "4qQigQDtPdi25siQBYdPh4r7gvcg16cZiFWykHS4qqLMD6MHhZVnuUpKHxo8mBGsPF1od6chE6gesTYUDuESUMLc",
  "key11": "bY54YTCJcM7K3Wx5BYE8fAwxo9eUUNkVE86BjMc7EEoTHEAmnRYXke2K3gv3eNs3GGKTsGgAz7AHipPtdQWHejC",
  "key12": "5xwJsFhVJMwREsvEXue1UXx2JuTi3ShM1ygafsAtXQFZCWrcJQbhyJLyoCBAVb1nSUJxwP6Rw5mc9xr4xJM1TACr",
  "key13": "3ignMa1TvKsnyan3noSeh4twWJHnSCrgoc3m7NhtLoQKLgTBzTrdD11xtiuNkTApfaUgmTCRwg5N99DU6SLNQpgS",
  "key14": "4DHnf5zjd8t7Jjj16rkgMjYaP9ZToMP4siPtwfqC8TPw6bBD2Dd1xbuTv71M7yw6E2bmqZuhj91yiXnBhgWsxU6b",
  "key15": "48fdJrzQFEwiTkT2haQ4foGdSy5weuLEFDYEmputyYQ4yVdty71BdkMbJGjmuwyaPsJ3p3ZxenywgpYGjA7Kf35B",
  "key16": "4iZj3wqdpt21eGujPmi8dFHLdA7QRfxzLsA9pDJx4a2BbDhSv16wvhxgTJZvEVpKnd1SjxcLnkrKHuM1B3URG6pW",
  "key17": "BE8cCtjDH4mRSjHfPGHCpwSUwQrjDCN6AtMnsvpSVQ5BPpnfDLVSKe2SghXgTSsWJK6hvuVH4wsUXhVezS3zLH5",
  "key18": "2KTAmG6gEPAUFmdmZ9PpGaP8r6z4sDSGmtyfFEa43fJe3od5QKCyk7HjakhC6Nb9JrfEnC21V5J2jMfHaRjj2zLX",
  "key19": "BgTsFPMCSJLhdad2UQhmxwc5dhY41eAHaczzUW1PHAuJDuDup3pxuELkeHbmTozoZ9vTRoNoBLF72m4AjyQGwkt",
  "key20": "4HEDsT93GeXENbRQgcmTSt53Ripxyy2BgDQZ16znaoMeZi2B1A2GWq2VmrkX6t7pX5vDtAwaXYDmYnxqtwhzQTwN",
  "key21": "3ckVqHBxqEPUwAWysuZai2ssHUvgg8dPV6mUprLekGaYqH4DARKfbrfLiYjyKDn84FGNBauVTjaDX5UKZdNDYJz8",
  "key22": "5bubpDvw2Sfw9ArkiEtD4B6qgmVQ88xFcc4qM1GiyZSLy6vkqCS2PPdt2HsH421Gxo9cGr6sdm9zfWapqEFTNkB1",
  "key23": "2UqqWEsz2iJRv8RJaLHWnsiSH2ngpP57JAZcwgQJ3qJ8baaqSqwkvxvNaqiiiNtzKP1nQSKDkpos1tqxiAv1ykf8",
  "key24": "5wSoxpphHXoSEKw4qTdKM8UXoHoYuBkUrxKnimL1qB3jtL4ehL4x3ocsfUfBtcgeuMeo8bGPcEwESwov9dy6Ev8S",
  "key25": "43UzybRSA5esaj1qEUKeMAVERt4VCwaPWingZvY6vGRxQbfqef5M5qbPY2vZjsULzzaQxf8jWo18as5akB42sftM",
  "key26": "5awe3mCLGY5ixHJz1iJLKP1hpfAoodNsAuSZ7jBcWc8hw8HvvJm4T9wn5sqEFUidEJASGTyTxxKvg5twkgG9vUjg",
  "key27": "3h349ziXfRVCXBb9pPEDxqgEJakDAeh7ExTZNzCEWqXuuxQS4zgZd3TKknd3vLbfAa9XPoJMP6NMuUuK6FpPn7A5",
  "key28": "5dumFKYzQDTL8t75zosDKPUsbqkoSnBm8A68uk3dnRgzZZ3ghEBEDSaAUiQS6zaa1ifQv9jAJ9jQu6fRnsdpmzUE",
  "key29": "4gXsXtHBckZ3nqVFK39p1mHXFySq4d1qpfdp6NdnMN9G6Km7saQjHBWNiusPqfi2AxQDSubewMnksww5GA9qutiP",
  "key30": "5h3gQHa2BeDWV9qvV1TVfB8Zszp7zLS7agM34XwoBytPjmjwMBiKVJs865xERzAT6rywTfugEfoiyieBFU9be43L",
  "key31": "34iLoUvqGZPrDC5Qg44fDei3FEizJ7L1QFNC6JTgQwXNGjLYmzsWzrThpvY7SPcdzmxjSjDsqLWFdzP6otdpBeaQ",
  "key32": "3QDWN6PhW1X6SYsb9bBcysTmXbKbE2Yde2ZCBQMmjrsua5cWfLdmHF6FCsTddv3TvyvK8oXBEgjimy3CzFfaWKoK",
  "key33": "5oZaSRNF2GYqGSei2QQkpjxGBziC7xw7pkz9ds2aNHNg8RffCKAGFQ6k1aRXYsKpTzSoH4krPfma9YkNzYR3ZPZP",
  "key34": "5ynx5PY7TaqXKgyHsgmdrgY8c2YAZw3P17bzK9tW2mqcHerDhdUKzjvBi152ibcehmxSs4PNPmCr9u6BrLKc1EGo",
  "key35": "97rkgQHccQkDDNJimXgByh24kVVCT8qiJNr6JNQXWRxv2fYdihEiPjA2AVfyabCwrDnsu72s4KSh5hAfZqAEaDD",
  "key36": "4wicphRiHL4c88isc8muJDN6M7iiRJLM2pWetb2oF2dELLxEmUDcdTEFNDaVFazvZunt2T3qyXHzt2Ten5v7UPTB",
  "key37": "5dxkrUEgc5fpTmpZ1WuBueohDnWSoFZWSPmMoSRgv4w2HWoYoWrgXEsTjJDZ4xrmHE4Xx8gBJHdNE1VCYc8yBvbh",
  "key38": "4Si77SexrEqUHRxdEG5QxjUwfrs5vqoiyDuJRzhxpszMHyaE7LJDCuDzxseLaiQrUPAoNjVG3rWmvgjAU41LcU1a"
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
