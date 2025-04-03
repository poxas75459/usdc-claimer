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
    "2j3B8s9Lh1YvLX6EjtF36UUU21orzJgg2PDBsmpUbXDX5TcUoXNRrg9GW7ETwtppxGJ4RJWKXSb2eKKuzonFYG8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d3cwhWtsCCbksJsCKdWCabbiszVXiFvEAJK8pmbW88yGRveZ9gHQe8d2ABPL2NKVqSTCdZeNjm22wjct6Ai5BF4",
  "key1": "4zZa2JPAHsrc1NGZNoZMzvUJnYjmsMrCgTRW6zDDrcgsSSYyXWHHtiFCvijcqU1GB3GjEn85GNQcUbAz54EqkXcM",
  "key2": "mGLiBLoM8z5rAdeM5fKtcKdSFkEke4fuPGTBPCGp2s6mjswNc3JXEz39bLc1DSJK8JjYaaohMUZfoK1VCH8XPgh",
  "key3": "62ueZx64W3QYJRLQgAwxGpRwi174V5TfyFLb7WeheD1hAxs4239HKxmyVaqURx9uhEEdbPYr2e9U9u85d2QwKXyP",
  "key4": "5xEFysARRV7c5vBBNJ46p85b7ywsRjQTScFYkfxnJGvbSQ71D2GX6sWT6H2DR41wwQ3uDtL17bHvVNij5M4W5iF3",
  "key5": "4jmMEyf69DVowjCuwfvy7oLt4FNAF2WFxuJMvPSgvBoZuNG6n3wfpEwJKNkc4Ddm3p4Mdy7PYbPisueiVhJfT431",
  "key6": "K6YkH3dEF7B9eRFSmjnR3eXq9kZ8wEP7cn7nmqcQCivLNnCbZ4zMoFNGSJ2K83TJtBm8x21AW7Jb25X7eWNdUhe",
  "key7": "4Fuo85FFcBPCGbp2TTdH2QvbdYzSaL9RUK6SeS11BGHgS7yW3b26JHb88mMoF9nWWPW1BDGK3xZGa3KBCWBzvCNq",
  "key8": "3XEGR6mcvfmbDTgRxtpfZYfCmpiuLbQJ1GL2aa9HK6u6cP1wYYL8vULmSWr4SYmcp1bdB5a7LMtmfwqXVPihGBHZ",
  "key9": "2rhabPU6bFyaLvh1MkAvr12nWcT1mdaXt1Ty91w9T3sPbxZUHj59qJj3TZntG4gcnaYi6tkLbV5NyuF9mtyMgPs4",
  "key10": "5iciCmbyYMU2Cqyf3abTz9U3TUHDLyzDmt7wDA2wJoRLh2LKnFBD5kWdfMuGNJC2QqTAmDKwRLvKcgP9S36HU9PT",
  "key11": "4mp9PfXVmg4Cv6CjLYW38qKHKkWTYo7MsmKM5fDzdfQHWAMWs1mha1QyucNCEt37vaDJiUQmr6b9gkd1TrNS55Ek",
  "key12": "3rWyZSr4iAbtKbxu1AkouuzkMh6A4VK5hJ2b1oNqbk3jrkEMJAdMwyJSycF3zj42ajzo5QmNPd8XpkbHQNXhD4kH",
  "key13": "3UsFpcZRJzWRCRfjUinNcm6FkTw4EtMHLgj3Pf4TZNjTMtWe6YLgtZ91EubfxZML8fL5KKyZmA3M1aW7ocLyABJ9",
  "key14": "3kkH7kMdxA8tRXmgptz9GtkL7cjyjWPgaGzBddJLxXGFnus3fEkXc7Yw7mfbEwc3DksGZb77JH4LrwGXFVyAySG2",
  "key15": "4MoEemwS16TGHCLR65ExwAnp2rRdhNtHvFoS4R1GRa7h3WicitPUNbRUsgDHLt18abHw9CeUS3gfYXcS5kUZ4cTv",
  "key16": "5k3DBQ8BCUYYwLFKomghx8qJ7PipyvAddJLkVPhAD3N8TUbmg9TCjtSKDgUxeUL4tRL2uHWoAWBdyE5xQtUM6kNo",
  "key17": "2sUjqhq791o2qsdUjCLpxNwWwe8fAEezVoQdb3QxB6NVhxQK9RiduZa9B6Euin5CX49omHz5jsiwF8KuauAkeVMa",
  "key18": "5SVedWsVbpdHgFuTq6xsqcUsPdktR33gJeB5Z3rncoHB9xVRLZHqtxZU59k8QdvfKZY5Wccz5XCbK98Y4f37fBDf",
  "key19": "RUjJyrG4u3P6R8FZ2SjrJx457mGvrwpAwEGhAQ1467zTnGbzgnfCFZyvwEoEnHSnhZUc1NRxz74oEh9wWRdjcKF",
  "key20": "4Ysnme1k9DcRoaXwvjuSJCGskSWZj8St1GbPAdrrKpNty7ybNHYTh1BpeAgH62S5rgZjrrGAx9nYehWNgPYkS2MH",
  "key21": "2xhMq74zi7Joj3YAF1qwa6SyWnUUqDVMCi4ZtFLEKkSUmiwtuPpNudqmQxzDEgGnCmE9GQNpeJpEikBgGxcUQw8q",
  "key22": "4529PKFapycK4zqenWkyPQuV3KcP16qi9qBJDKPDn8jR7y9ZPSatTPEMKPfENUSwojJ89J2oTPXME7fmvheZB8tw",
  "key23": "2FS7j5c9aZaHVBtBBhMHNvzxmHdksjiFTzbFVMbkAZY32Sn7NNcv7dgZjN3qKmByXfv63PWWqRTUeCT3fV3eBE3e",
  "key24": "3yrd5pt3861rCoTUFFnpotMouxA9ED1j8C3TrBwiE7suvnGzpVx2wNVTfXM5C1TPXpXoaEdmAP2rEWuKQit6ftQ2",
  "key25": "wM1J1bMbmCu57MmrcAgKcuhKWck8rokArgxERMHz2HztHwrKVSa7NxsDmSXdFJz74WDd8xYHZC8bYcztjwSf2Yk",
  "key26": "4SwgCmQ2tm14RaJczVTkDWig7kPat8XkU6SG6CHMExcMaK7E3Mt6CF1oAmSdE2naEX4pmGrTLSJ98GrAXuLkj3Ps",
  "key27": "3c2Jyihbe9qVRQ5hYHZRnhjEQmbkFyDisYa76iXBoByHn86kJvGCH3cBDm1ZjozvhWLeg8q65ss8Ny9eBzZjgFmT",
  "key28": "3CCAADCD4d1UYjsdYXDts9kyYjFQKSnCfZAiyrG6rXuNbQBvJUbbJFiHZQb9SviESTRD91mkS31wHAfG8QLGqwc",
  "key29": "2W1pynTjeExyeZTbkkrsDhykZXLSfVjgLJPuFG9MvdeYAKmXmz5rkoBTSdfJewr9QSrFoMWKYQbuEPzJY7pKCkWU",
  "key30": "4TGS6T3K13gmMfUC6f9u9wbtMcq9mYDBkkWRZ8GgaVzMm5R982Xc3svC3JE4Fa6V7TWizssFM6ik67pCT5ibpki6",
  "key31": "2ZLRhsyxu1cDvuc2iMCU9wW9pxvyJFuQW1YvxdMhhSLMdMrML8PX1qWMaSzjq6AtXJwGFPAUfis2hJAHus2MiE4X",
  "key32": "3PpJ5QqF6iNKmYQ2CugRmHJsB2QHHpfpWdGqzBo5TLbDgNc1z45uD4WNHEDYhBdH1upzM6yqQgsAm6oZuc5xwca5",
  "key33": "5uHmPZjDmX2FP5HTrT8j5bJrmFWAYdR4WJDjcpc1UrGK1TCghXZ9nFHPtTt6R3N9hEkVTTbssXnZf4zZBTPT1zPe",
  "key34": "3po4dfSymQ6RdCQgNDcabbw61XRgSAbwWnNyhtSEmLRa2euaY3ehWpgiS5gZqiKaovGaDHBK2ttDcGhAofc1QH7d",
  "key35": "572tS4mXSFC9Cbx7fupLzYb4iSW4Q55x7umZKHDH4NjZtWpgVuSU86NyjaBHNpWN3KaLxC7pyZCCKfe9HMpqCxhJ",
  "key36": "pQuebWKLLbjA31LSPgAvVLfmXJmH9sNLnwQYgXcgxoMKGnvAXQ6LHkkuotFeaH98Bk99PyVJuWHcnEuFVhdTDHF",
  "key37": "B75fGrCQT9fQW1mqPkFnnxFxAaQHHJGw1hYeeoBoGovy8JgP8cFGw7t636BBY5s2SXDdNu1VQmX8m4pDheNmtGK",
  "key38": "3hbRkniKPawf9uiJ8ahLFe7aTfBtgeVWTSENNZYEAQEU7pT45LbhkQyEBq7twPKTaEf32TmvSdbyb7oRC6vbUr3A",
  "key39": "66zRj15fekkSy3Cc2EmEMi66uPXY6qcRCFW4LYes4QctyyPhBLkR4EdVg5ziVzHJsm3yWzoX5aZ9bLo5hmV4ztY9",
  "key40": "5Uej1giC5ERZEkQybbAEGVCEMkHjucj3k6KUXgjJGGoXHQip434HE933ddonmeJSdGpTFUYorp78EqiHwG5ib5Fp",
  "key41": "A6Gj75YCkNCHb6uRhYB56SgqxN96fMQNYSweuVwCzD1AhBMqu6kddkkNkPMxGHi2MKHrHUXJi9PKzFKb1PMYwUn",
  "key42": "4rGXTBaN2ATNMh9HhEgLd5qX91ioF8hpMG6VKZhjczP5BKSm1HGkiPfir5WdmiKqWvM99fevjHvRxLKg5mLa98h6",
  "key43": "27KnBWDPED2oZBXcQA3VgMGcqRrGHRuhVBPHe77YuLxhAfgYR2MEJttvzmdo8rxR7jvEYp1XGsD6sSQsZBbudqUt"
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
