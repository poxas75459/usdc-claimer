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
    "2mZrgtwW57id8v2tR4pfGvmFErFeu4VvyL2RsEkUpAu2cGQuioH9PxDZ18t5aTTFPbMtDxtHGRG1kYSYDn8jeyz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nFShH2mZcnsnqwt2aYkCv1CDfXJ5FN16XD8nkdvyGPMT7CSmfbqmYafarZ3dzezXR6bNY3Hk9eY2J6DbkVfj7zJ",
  "key1": "4CK59MrF2wYBtHPH1vmgjQUMV8iKjKR3PpnWVwpedSk8ja97rSJPMUH7sLWDfyTyhERmyViYy35qdWsUWUNMYdUF",
  "key2": "5yyfemTHcMamfT55BmcFy5iXv4JsLPbT1HXMtJdUFznkM9H4ni4nrAW2WdSm1dLiw7gY3hcSdjugiZRwawbq7H8j",
  "key3": "67jWsEtHdG2EDPQDNgJCufRPVdBhLNggGwChnBCUrxtSMNJUnj48pmQcahF6CButpkyG4djDFrGeP3yCQpPB7zcU",
  "key4": "4CmySi8XJQ3L87d1p66WAvMwhFKnw9PqxEXvo3bRxtJT1aa3YopuhHbKeej3EiDDsHoYCSQamDVQhULKcX7jKbu1",
  "key5": "4jgT42beJW7rs9Q6bVodjG4QbWj8hD4xdQykmrkw4bSZotCwQcnETfTk27XsbQqukQu8PrDMnZvpgrRdduN3k8Up",
  "key6": "3wquVS9vQ9TUoa4ZfnzaLgPg8ENpH5Fh5VTkYnb5AwB5CxQSDYcVyboaBKVL1hUVU9vtkQw2uCNfJqvstJdsLyCn",
  "key7": "2JAcCoXyYwP5UQXBW7p3nuHKq17ekvQsEHDK7DpJyT5XywWK82EFQiyNiZc9gYLYsjvK3znxnUq11V5rG9vXgrZB",
  "key8": "5cWQHcPVZa48ueH4taEv8Q2NqHjKfrMRUPus47ECnhU441GHPgAqPEqh7bDdsDNo7MGAe8ZdecMDGhiNuPGbwbL5",
  "key9": "4UcjYiJB9sLvXvo12CyXNcxd4zKeZgCKRsPa9JAebY5kyAbsBkbe1mqGXW9ep1p8b7wiMujCa2xxxjUyh6jiwG5k",
  "key10": "2d1xMtPEq5cexfQY6yY4vSg51wDugr4HEUaQCJEHhzwEHC9kD9gpjmrST2ruScJxVrYXf5GfGxw9QTAwhnpQXbzj",
  "key11": "41Bkz9xtrr9zaMDamvXcokLsWUTgtKmz1AkFqGUoWggZW7b7aEG3bbzHjUSdQu1dhoLUJUn8JmqABT1WaCN7tFkW",
  "key12": "3g1kJsEavdaDTjwMaFz529kLAVSxWWBZ6NWxrP9gPeSNppRbtoUyD91oNeCN67V7DmzzFDqbUxmRmuW9YgE6tttU",
  "key13": "44hmT2Ho4gUss84GVUfpr7bWjsy2eLtWXtjrPxbKB8A7sQnsvAx44bnrzm5Ax6vu6ZF4w8mACmaeL2sFRU5GgYWt",
  "key14": "5vsAcXdYWxHNQu9YwunttFv16B1PGaHwJzJf8Pqzi7gXC9AqkrAJbXsM1JHC8RLuL75E5gqTxBsHnyoP88CByekQ",
  "key15": "QQ22BH975g5vJwfgeFifYTtSCA4evRrgCRYNDQuwicNAwdKuzGuPJm1ycp865nYFJm9ZokTUQBUxhT9DSEdrRpb",
  "key16": "4EELWHEzS5mPopunbmssYj4NyVwG4iDQja9zFJxmhoQSvv3q9gJVhjK1vQ8rmeRBPRhpLHRhTp7kuwb2918oqJdA",
  "key17": "t6GXnUTbp7fuq94RnwoH9Qq31BaTmLim88DFiQu7syYL4CUgpX8dKVAZuvFV4GR9pV23k4QwGtbqeMGRyvEQ3eU",
  "key18": "vuzv9RxBDHh68bhoFAZx74ryRyzLS9PXbjWdgCYwbBC2MCUoXizkyc6KBV7dnLcqfpZCVU5FMTA9JQZFbeURenG",
  "key19": "qBPpTmBBepB4sUAWLHRqFQgc8iLuL9TSfFZgeQCAxwEPmyMXPDSxkCyA6bMGotdqrFatTrXpsxyzM4SLpcdX4Nk",
  "key20": "5R8owjjNrUfwE66rGndFMRbgFqpPji6pTvXNzgTG9npi8Eb7yyu8BicKsAzvSNUzQEipFaGd25rP7SaPD4ARzjgB",
  "key21": "4DAnJBUdJUyZAin8DFLNzxD4tYxMTiPoUWZ5FAsJgtgLVM3JCTCffQu57hGgvzCwy9k2t9EWyoRB6arjxg7qekyX",
  "key22": "4AdACnrUFiGyQhR6mULYYPNNbRrsoBwcLeJkz1pt7SRhSPpnEaRLvEficwi8TbjXKiNSi8QUJKqCDony2ECrvqxU",
  "key23": "5EPPH6djKwzUn9P87VoVZPt8wBQSPebRNTyoTbpSUh1fCMwKLskpTc699cUcogvDWioJMcVGNyUER8AsQuBB3oBp",
  "key24": "mjdMA6KftNzFZFVCz9NKpvKW6KRomVD7k68XfVk38L1YAMNsRjHLC14eiHLF233t3pXMXni9WtMWsyMpPtKJVne",
  "key25": "ySPer99gYPXnzovSwfqe4ry4AM3kvjSco4UBseEXvCqmSYNKm9f6Cd9UBctzxf2sqM3t5uwYWkCEECPVxWZskwL",
  "key26": "46t8kM6MF7LC691BAWie9H3g8pmbLwHgxscxA1rFYT22wFspGqNKCjunJADVVjjP2iEwMgfvFNveyRtTaUTvmHKp",
  "key27": "3ksooYt6w6hLD7LkEhRKEfHGZFLRXNWjD6jyGVXLA7GNz55tiPpD61RiXmbmtpYbbAwBWZiP4JepJtqxh8dGZQg9",
  "key28": "21LpLH7Y3cPor1e8boFhSBNS5PyYVbQeQyVn9NPHvJEbKJYma2M9wd9NUNRQr7bDeDiev4ASKgqWsWuWB9g7MQpy",
  "key29": "2rxRxpEaxiws8p99VtvVbFDH7jhgYVLJxzTtPgDHzKQSg9UW7QVvWYq36YUoeztpgJWcZaPb2STTCNy9Dt2k5giX",
  "key30": "2eqmfCEpot4UrUv3AroznxqRchZtTrQ36NgwHkFQVV6gyvPAAtQT2XJBrZuM253i6iH72BTM2x7FUBTXVXWVEfWK",
  "key31": "5VjRC81eHD9nwwB7B61EKpswEZWR8tKwvE9NFyc22w173jXvwXptcx6rSMS9izt6ihXAFLWBDpiFANjPB1KazPKn",
  "key32": "3hYKn3jpQj7Gb5gPkKUX61JahAQBYikgi8idV9f6XnTdoP1qkRnqs4A73yMa5SrW1ZMhbUUDqNqAgyZe1B2ci8rQ",
  "key33": "cnXUw8L3owZkBaAc2o66vRuyUPznVaSqBLcsXDroFwkqEnsJwpxf91frAJ4i3rQ2Xt7mrbXUYx6z4sTo9Ko7V5M",
  "key34": "2SDAig6HDesCVaE3Km816mALbhTr8MBdtkxn48JPbAeVwYxw2wJ8sFgyAkV4h8A9VQGAn6VKpRJnt6B26qGQ4zB2",
  "key35": "4m524QQ242wi2uKppEtC8VjQc8GvQBqLo9w75ijnKNupAaVHDmHmA1tpC9fuaPBBg5qHyHFyB2oBMtMSFFRKJFQe",
  "key36": "2q4f6mkoVRSbCUE4NZZcFsajTNwHMC6rSjQXQfjZV9fcF7qfFbfAgMGL2TqWYWcbEq6tRa9SPwhscuSqUNHXGRtf",
  "key37": "84KheTTiMtDZTjWBTBmg5uETjeSfqpErNKvUuStHA14avHULDjdmEUU9RqNRbn4K1RyDSQvD65PUWUkW3GxYEQs",
  "key38": "XbUTQrJxcbjtsT7zhG5wrSuiwMveGxkbrLtL1rW5TdPxmzZA7biTaiAyESYeRVDx9dRS3itYqy3BpUoJGhGnoXU",
  "key39": "41DswPKC854fdiTwunzH5T2Mwwif1raTDQaG6dbZTNg5NiAwBSrRxWgkxxSonYvqJ7jHPQ1JEt6byDiw319CY1W3",
  "key40": "3sdLxcMymPm9fcgwxRurK9pN5mJ9sspaATw4ZFt2oyyjUYebZRZoeHh9VYYDeAB7owz4w8ajpaqZLry71JAJUdeR",
  "key41": "38CNDzbjw1dPspDmPDP1YFYvNCkkHZ2AjmhFVHt66NbeSLtNh1Tmjn3GpTTteJXwgyCxBF9RuyS6subZMTw4GA1u",
  "key42": "7tcNGoPMDkQBtndq5VGJNju4CSSGAyXUB3rh4JbKkZTgn5aYpiyK4FTjqrzPFXso6UsMxZ2N1ad9mQpaQ6xU1d8",
  "key43": "3sLXPxT5mJWngUVYqntszXh3CYrPRAYMdJB264my5wNNjnmLFqGVMuwJ8smjUSLoXL9Q4Gxc1hfKgiDnZ7LgdyL9",
  "key44": "2Lc16YjNc75kuB9MPAUv1uEwSk1uoSgYdxkhx3DGc7dGNLGMDyfeCmgEmMNxoE7hwCKuzeZvURtewnpEFqrzMY39",
  "key45": "4QM6fYJfNVagE3ULb9zfvouqdYtBKxE6FojDja3XRWR6qfXFFFMCuuJ7VykQsQGcS1A69J4x3Wy1cfgZ6ThQS7Jr",
  "key46": "XwVetcUmuT5fY533AKBWSy4h3NMu24RaYHEhRbbdHKHEmjz9Q1LTnTtMbFYRo1uuLW8V78KLa1RKTAViiRKsiVc",
  "key47": "2n5huY2Ckka3Sp4p2fWq1Sy4Er7UhzGxQ8RXmYSZLd5jwGUnRKoqpVVifZX8QR4u3p1SjGZCrJn6cMbuRdCpBDqd",
  "key48": "4NcLFSeyzZSZJWLyCLwX56JcDa5GPdXWPgUpaei8iaBaDifBabPPBEaPsJWeQ4zpfYd1UUNJ7cgHCHvBHo28nt15"
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
