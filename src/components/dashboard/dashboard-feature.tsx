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
    "5CKD4ozywaHt7aGJQ4YN3SAvWvfLY3FGe5Mcb1VhZXx9cguigyHS3vCeNnf9exKCxkP7M6XTfYbxSj9mTya14WMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WKrCvc51opQJVADKfRTbuNufuYnsGyBb7PwEg27AykMmgEMsCjURUbGieb4L3yxfSC4L1fi3cBgwHyP2yG4vujo",
  "key1": "52cqKfkEmMbc28Qz4suZpvT7TJnv8TrBFdezU9c8S554gxzY8NH7FRFQgGaTV2HhctZobasekW5NFeNfNijgp36R",
  "key2": "8xsU8L4gJ9BMvWRvs6Wwd4moi9Y54fdVmnXarmZJf1AVX6swZtCGzchDqrqawHMBEejhzYK2JiTQ2urhco5tbB5",
  "key3": "5azvxPb22CnPjDxPmF2PKybxeAw38FMrq9V3Fj7naJroAc9AdtTqUrUgeJUV96hd3tRqyQaCj9WCRKDq8VVCUAfj",
  "key4": "5vtHHi6zYNK7i5YWD568wc5i9XubVa5ByH7C5eyKymfpsstzFXrpTU8czkY5kVrSRgojX7cxzQhgiuekmb6w2tan",
  "key5": "4txUxMFsqix3eHmL1YtD7yqubA9Zi9vwbHJZexymboMrHMPn4xE9VLncTwCrgHDWb5GMq9Yvhh86x9VajkcSrW99",
  "key6": "yVa72FkxYSNT9g1KKoeMhSsDYihtoT62mpW6sd7d26wEEGM76EuoZQd6ztuC74Mx4EAixeVyfrEZ6SQRWxEGes1",
  "key7": "4ehZKKYVmzZZrnLPgC7WZJEuJTTbut7YUkEunPVRbrRUybyZcg7EGBg6Kan5UGgFRThrFV7tEUudtUY9ER7iumMY",
  "key8": "2rEvD9vhFhTzBnk9KDw7cs7W9htH1zVv9AwFiaK1fDqdfay6AYvgeUfYBwmdvgPEifdt6PmnmRV1cu7UVo3cxmkX",
  "key9": "5KG1uQBGm5obWVK5TNtv8k7GKZRuBbTLTByyawS3t1JSmnryaumv9a5hrfb73QkBBy2na23ZSsQaKQr7bu57JCAy",
  "key10": "UzeCEv7TckAbzgFp1NEjjxy2i9QKNTymMfUApkdC9tUCA4mkAh9WRUM4ZsWCn3sGoMpsXGY4povwsSJPViR9jPB",
  "key11": "RHNhLdwNEg3YQqBLfqBWxb7xNKxGmUosDaXdiWuVnfpXmU1GQ5XXYMzYC8pyzQHz3khSMrvH2MDv8yfMFDBea4D",
  "key12": "5rm2yTyjAE7t8Rai8C7hpdy8BPjBiG7YSVqUTpgEtyFQEBS1nhhs66q31SmteXVdaLBa13E6Xi863vdL9eVaUdVC",
  "key13": "52kkmdYE4jW8HAFgRwZuJbtk2rYHv5HdtAuxmSUtL4pKQL9oAd2vAmcFwnTrgLvDG1Wd7qFPbMBC3VM3TSo71z2B",
  "key14": "5H1KhuZoYm8dRNfVQ1Y4RVizCXsWy57yz65fuCPi9W3TodM7zRjh1UauYUUatv33hsGCqSojSMyrDeYGZLoAXyQr",
  "key15": "4TS2C3qWNTi7zADndigZmDqb8b9Ysw3wSFgVK3bSxaJNpQq159KVnJqZwqKUK9qZYa3XAjnump9ccAmqm8BVVWzN",
  "key16": "4anCxKE9j8j7Kyi7wY6HMe1iN5pnMzUUufGx1c8ZxLyHNQ1KGzRgZPamqkpTPN1o2Faf7XySH8AvT6C8M6jhGmSf",
  "key17": "57HnukyNs1jeVQapvmThqCZMBvruikybo6RbowhDy4GtQ1B5KPPsUucFbo272HZL7EaZc8DgpbXs1f1aHJqLLphA",
  "key18": "RM5NmmunwkaHaiSrfc4CRP7f3zp6d4JM6bmJFKGaDabksifwTX9Nz8KXG61JUNnHXGDEaqwG5Mj3Lmgjx8hFLnf",
  "key19": "2KdbdUC2VMwJz6BsPxQXnjXBGa9rNyzBNv9GEHyXxT7P9nfyvbdy9HXJGA2trz6YeGkn75UFkBeCz4GMJenzt42",
  "key20": "4r2eJ3ybsQ9r4DuZuC3Br2meygmHpLkg4me9GCE6x4Hm6htNr2xUz213NZFXiRktSEcVQrrd6Hrz78ZUNUbABDeB",
  "key21": "5zLb9XewHh9eFvPwSjDA44w2vkAt5iJP6VRByPLoe7qhEXCmi3pxQVTEvcJzn91jRbkdT8T8MHmm5sFJBnJSqEsp",
  "key22": "53pU1ukW1MBnhD5T88ac5veP7WBtSnEsEYYAE8HywhTkfXLVKHuLMJwgu2Pc5wPNkFrnhEs7sbBTpQsathuDAaZX",
  "key23": "3Uwaav3r6HmjuX3a2h6W8QyRTtQam69LinRq6Y1e2uZU6rGyE7uzRhDmMAe5E6rcHys7sfpzmEU8fw933rdrHekN",
  "key24": "44Jf6NAjCWjCQGz4Ndppm7YwDbswQjeg1YH1Gi3VBefjTUkYyvz5VZbxJWeC2FHsXZbdNfi818yuS8aSGsZdo3sq",
  "key25": "pErFez5nARux5crpjsSCnXwwsXdiieVfSvXoaEncoF5bkjRtEwrjDnhkS1MbK7cMuJZD9yx8TfWDxF9SPz4s7N6",
  "key26": "RnQcXpzFBoFkvDGFahmKHPcPg8MXAUu7iNBzy63FBxU1PnkpPwzNtuaKhK228Lexv4bzjf1fHKBKSdc9VjMGjPY",
  "key27": "5qvsXQEaftRwqMDrccgQuh7JYiUGFim9NY15C9FB8cf2DU9gLNBPavG9bktkXxNeMhZd2pjNdmYQZ3VZg1nUgmDv",
  "key28": "67fUCkTzRX6HxhEGoZbPSuxZ8k1DbLQDBu5woG4FCgwWuYTw32zYzZwXEsw2GWT5U8KFahb61utbRdNG4a2Vktfn",
  "key29": "2Az5Y89aB6XhHusNANprcbdHiaBdjhHUUWYwEnm8RCuJAs3CuQVXF1k2ZJ9qd2hWomtNRmBKEAKncQKgnHWDBYLD",
  "key30": "5D4iuTU45USaLUMfLJFiwkpKzpJ5BKHMzpqFRXJUECLnSPLvVL2Z8d65FLGAQBwvHjWGTEpiEbRPpYpLQNPaeCLo",
  "key31": "31qL7kHkD8LCqz5FRkbtmotfm9wdLN5TeC4tMv24omrHCXSzRLZMbwswQDiPXNFvmJLcmm8RFjFJacteWFuEkBrX",
  "key32": "2695m9Kvf5HMTkdBLqcWueSLD1TXxzWZxY2nn6v9S8AHhAumv9pSESn4m5sCkZ36vZzWUUosryT9PAwa2RxhftEL",
  "key33": "66eNxQe8cyaW8P9QHb8Jm8UB4gaoKGvWf5YVuZkGYDqMMWT239CpERSXQ53WWKUgQ5nyfrinN6gF9D7y4okpBgRj",
  "key34": "4NWQj85buikTpboDKkbN1v7nKQ1kJovmmQCmE9gqkf8i1sJBSrJuteu8N3Lc59CfTuR6eUZk3GY7zYTWgr7qZ7XY",
  "key35": "3izB513mUVw54Z1BHJ4XwXyrPfELZdzAkTzjsmU2AVAkN76Jwh7HBTmp56hkswDU2vBajK9E8dN3x3iwgiAwbe5L",
  "key36": "2gB5aoh1nY5V5HV8hr5sPUXx8ffXVUBgJUur2ac4JRbgRWue1PhBndz3XtRCtkk62gE9Q5znJao4ZuwKW5f2scbd",
  "key37": "5MQUCZAs6cKTmQUDRnBwMqbAuAsgg5ZDCM3c9TtQw4mUP4hJ2gs8G8uTKhVRmEs1GZoEU2FEpj8fbBV6EUpvm9j4",
  "key38": "3q3QKY9NP7FX5Uth5j8zsUuM3Qb3eap8jxRddRSBbkGSwv2irP6XTXivncAPprV1H5RncTQu1sJuKohp8tshSk67"
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
