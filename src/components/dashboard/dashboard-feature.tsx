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
    "5Kz9wDAkNvehsJ3pVfsBkEpkzvVHYqQg3NiytZT97nKfYw6bu5JfNNv4dKqf7VTBBjRrDjjBxr13gYEJqP8fGar8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kz3cM6hkEsD6dBYkeKq3AZTHefdjaaGAqFsGEQfsVFUqAXN1v8557xE1AuVJZ4CtUXYqNX1WopK9nXVVoXdgfFR",
  "key1": "5anBZWJ8EyW2SCNqhFSH1VUfA77FYfmqK8u7HuU6DUAwzvBeP5bUPFM73fJ7xAzk93rtrDCgvW5JPPGWrQvJkmMk",
  "key2": "3zpsZCpTnex32PipEUgxWMTujDW5YReNBBdkEja8qQxhGYAbmV6BPwZeZE8UZqR5szNjkqotnMAGojiQdM3BFpi7",
  "key3": "65q8YwAgMUg8SADoyW7dtgD6mMLm42tBPEEDyV1RykDqGbcUCnU37LC7mdky8nL8R7bpYqvT32xD9sLjfhTB6EzU",
  "key4": "5C1yEpVtx6Xe8tmQGq1Eb98fH4WozJtWaZ4dUDKYW7DDz8X1nRkuW7kKs5FtA7K9KHBWGdsJukfxNu2jeZNzuGGw",
  "key5": "2qeqdc61kFnmZ9URMejcqSDN92Q5TNp7tjrfRSDxbuJkLS94AijSA1G3ekUziTcWg2DbJrvqQB7hyeNHnRndFMH5",
  "key6": "2bDgsU54nBh8MFrpU8ZoPyy63Pq6c2dpURXfGnk9MFQSzZqo5aU5xZgyoGDqU7Sv7hbR3EgvgTGcxgoikZk2EWUV",
  "key7": "mT9fjo7iDsWTSWox4ugnUHLFXMsWBn4YaEH11NKjkFAvd2fY16VPfrrKZwNAgaDNisuR8NfXJ9o3L6LGor3QwE8",
  "key8": "2RwLjrbRN996ziPMmKRc7c3KMsPneH6SoCQWtx9otR5JTSYsk3Wb2WVHDay2dwAEbde4XtQqqZQS1TAwR9Lhyo4e",
  "key9": "5Wa5vH6w4syBXzXeTXj84i85eoVry9f5HM5pJFhpJntR4fDWAmBBAthCVXpBmvyV51HLtJEzfgfbTPPRd6bzSQ2Y",
  "key10": "beu6ftqH7ecJpnc6DCKGUusjftLWNjRFr29w7sQNm9GUJkc2NkPfeSsoSiGdXm4Pm69dmKxdopAXjUgAoXaL7Cy",
  "key11": "pFPzHYjE5HbNGjd2kHU812XRDqgEE7JsferE5iq5iEUGMwoadgW634Roka7jZ1pFzujGC7accRn42VWayLu2hFN",
  "key12": "3TTDmwsEQnaA3BAhC7FYueHB7fP9PoKs6PfePz1zXE6EVFVB7JGDjFYDAeQkqepbwSRSMi82cFgf7oUsjtziTKE6",
  "key13": "4yys2h8fVf5e7T1gLKTVeaZWHzLMqW7vVTfhqCgsaVrEzjvVykF4Q2t7SDg3mFofbJFS2JbuqbeaKzU2Xmt3Br6M",
  "key14": "64CdCbSVXRVbGzdXpwbN1gAzJVsPCXbCK1S1KYuwA5QZGvnCy2C1ZW9GjW7w4mPDE7ekrGhK9EjSwem6D9EqqKDC",
  "key15": "5GbMmbRpDJZu2rgzGn8g28cEP5ijToZwiT3dvvr9hdWqNzuzbSyUcvRJc8Z4n6UXfMqTUYi9zDBaPjbe8qjfZ6Fd",
  "key16": "4GmrgVQasQpPqLjHcbibuWiD4FB6UbFtJSw3ovQdQqgtgzXYPQeak3zoqDCB13LQwSshzMPJvkNcvEJ59CejNWng",
  "key17": "44MUtgUuLWUJQDVEsQu9Xv4rz4mk1AiwVPR5oLEfgRMuhGeogc5XzN98b62Dq7HhKEmvAZSoMoS9aDCcZeZArK4b",
  "key18": "3EcGF3dKedcVufkjYV1Gxbut97WuURrniZat5yBEo1PDrG5iutuJtGK46z6D8qoh6By9PDepuNTQodAiosbynXgi",
  "key19": "5UHMjw5EoHok5ecDccHXDbSnHFxWSTSQp8PU1s6aGuUyJWrFGPTyJ9MwLNNLSAF9CHgtDu7PkfYp6ijQucps8WQk",
  "key20": "3j658rNhtM2MiDTtZEi7uHPVH6LDZK5FRAft1NcvasaUFeraL3BnxauTEHsqq7tCXmEPim5tPpprRcJPf2dmEDxj",
  "key21": "5S6ajELbTirfPtvsUEXCg8nrH4eS45vK52mVr9n9bELv5UHS3QJv93i616WUuowoNrkPezRvfBpWQ2u6xJUpej2H",
  "key22": "3X1kg3XjiScm44H9N2Bdmkf5AUXyXgaNQ3L2VUmXa5rRp49FTp3bXzMtUYSytuZJ74JV3gmwJL6XfLJ1pUEHtm17",
  "key23": "7GA3s6qM6S468J2sQ7QXG6pQVXYMGHsioWBzmpK2vycSP8idLiDAV3Vb8JGYfuvUkmssJiCErkony1LKdbdRPMb",
  "key24": "RgCc92JLNLX3piJfG9Skj6mkd1yCKQREtuoeBhBeGGMYHAXJPi8VybALhAWzeeGT2Ns5kRPLTfgBJwoTkdepNqx",
  "key25": "33hsNWhVdpLFvZEucacrBVDYQ4ZwbMDtNhwencR8VMza5uy9EoH8k5qTKgkycGsJWyEfxjWZamzq8QufSfQZdy3a",
  "key26": "21FXkcA2LsW5tWtDNFMmnDfTFaDZeoFHew81DAqpxtybKszmuShXUubbATY9xFkgPbdnB46RdfKc9bERfRrVaNfL",
  "key27": "4HemZuyV6FaZ9ry92D7AhATS1WgcyRQeUHuUr2Wyw1SY38cj5Lvq9q8R27Tz2GSQrcq9SdEJ7ktBpZYWtAkNELtW",
  "key28": "sdeQApgHNUZjK9GQkqK9FoDM1CFbvnioi1w2b5bpQ9j7R97DBoD21WdNJjo1uM3mHtzojTULwcXs4G4EhxFJgcY",
  "key29": "5KyNGoH9j9SFmXane3vMMufeB2oigaTYjsXbDa9aGvajg8KwesX8ogR3JENu47d6XZRZwZYjJapTo1MRVRTwx815",
  "key30": "5nyfGgBswaAuSADSsTYAY4RKFnb8ryoZG5VHF4U4TCW9yipfEbdGj3jW9M64ZMv7L9jYuSbnzJ1xG8swsAHjEDit",
  "key31": "5mkiiZrFcbHPs8rM1F5hbNEUcseGAxhi4tMfh2xS39dNankxjXgAaBUTNz7hZPo1H1dBRVdmkyoYzkTrfQ58pQYm",
  "key32": "2uSCS2rfbFQCKKV9foiGcGDiggA3qt9k4mdHYw1YSXAoPhUzdbAYdm8Su1n8N2GDUm2GrUF2tM9nKypmDLa21Q8c",
  "key33": "5x5B2xC6TzagsdLCHaFirbCan79uq3mgva5GKVvjBJNUFnxyVocH74sGJXEvQ9YVSa96ya6EpQKqPkMUdfD7TTFh",
  "key34": "3BE2TM9ZCR4mYxsHdwP3DjV2prSupueNjSNT7ynoz1yPMf4TPt1iD1SGiqRA6DR3nLDYma2jZ4cnrysvaYYExZSm",
  "key35": "4R7BxDaKSDhAoePqW2GsBjksjxaag4MaxjmUdVX2n4PnKEusDLp4X7GxHtvGAjWcMn3JbMqXYtKbofAazsn7kcaM",
  "key36": "4hiQDQvqkukhzpdSsZJJSuWBBRjk322gd4vWtFQHasiJU7FSZBRuqSjGwj7Mye9n9Hmce2C53iTdPFB2tHAH1VRR",
  "key37": "4TKhKcXe92QHPQ14vsgDrvUR6sNgrSvS3ca1U9H3yfNKmpoHufDhbSixygBHrE7w6VLkpcCoctdrzu4v144gG2zx",
  "key38": "3nJBtN68879AzMerFm2UK2b7ydtBF2ri1dqiFbLVruXciMgUgvYGKBj3eCNToo2UtSNBDcTmUSTtZCqSbKVPACNV"
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
