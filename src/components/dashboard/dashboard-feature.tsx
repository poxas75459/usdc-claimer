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
    "514N1TytvWgfuiiax9X8jVXYg9tw74q5SYGUyW2uyVhZpQ183e7J94geDLEgV361dwNnErgBrwaoe6UYGx32pCBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sTMvaNJdo7gLLLVWs7m4oMN1ufow9RG79UZZGFYy5i5yJXfxGt7Jsj3TrBKNN8XrpMcmQNfP9MsvsgCf3FdSkhF",
  "key1": "5LLBn1YFmrdZZr6QeMksGf4f7qQoweshfo45iuEDuBpgRJiw1Zb5wSmYsSpvTQRVtSrGRLKyYCKnc8r1DsMWqj7Y",
  "key2": "3csd7faws97gYMsNvYwo5spNpiBS9AnfJtvQ3pqik4sKQ4fkwH1kLyHzjsMbccHefLoJP7q6SzDspU2jr8fWKiFv",
  "key3": "31N1nZTH23EPmW15jw4B7axwYrh9fSYHZZ7cMCyGjZFyi6kR4bZ7zVM44zb9RSosNf6qRsZJynqeJMz2kxVh2xZw",
  "key4": "4atCnCnCSdbK4muSaKUZRfkvRwhSyuHBUM1mkDpfYeirVpXQcuej7UU7q72nwePdSj6vb4MeA5gCGz2xpTVQRK1H",
  "key5": "2bqbrbtAnNG6dCFPyHpgFNFHxGjqwwLmYDHWseoZ2vFfXTniHGujFHS6PKa2bcvaLsDJGymqFZ4LiCwQvAoYZK4K",
  "key6": "2WcqkNrKdHsa87V7foHWgny89zqo297xaT3qMNAYe4ne737LWxuN6aE81DEc8PLF6K4RLg84QZPfFUaWCNz81Y7j",
  "key7": "5vSJXKCVM1vPpizHKbgyeuiWLTm6q21yZDoeJCqiKm5otxEafff8BLamgwF7YfEc5BpCsCeZA4ANwQobhpAUL8R4",
  "key8": "5jeAbxLS42qWCmWPWrAR9StQVCzGfecoHMuzjzuK7J677NAhMfDTcEWo1cb7puYifaCt8uVor4jUzAssemr1YdEp",
  "key9": "63Gzr7knS8KBfoYRSCMx8E6Q8o6ZY1uLVBcJqECApShBC1wJywTNCnjCyYinxawJypgHAsFBXZ8UrSmeexxyiVpK",
  "key10": "44Z47spXharnYJYaavMjUkRGsusHYohJ1r3qDME4cjG8EqfwWJgGQk4jjAkw87CJX8RBPHS1qKugsFMVhHu7v3X8",
  "key11": "TzYW3bXLWGoz11sqaVhtoK7kXB99enuRxfrpTmhxoWpNHSfcdjAmdLqjdG7okahnMGAviwG7my2Hh5aseYUrsFL",
  "key12": "4jRxjqScw2PMG4QPMADXkggVmLzTotFU3cPBBbaE9VCREZbkeQQJVpXaS6sNmEDqbnTBptqbGbzTFCJa5pNpeWE8",
  "key13": "32QAJ16WFsNWFGFebMrxmsb6T1TtLuoTtfQ7zuZXPAvc2NDxR998wnKvnGSnmsEo54GRg5ERF32dv4V51SAyLFFR",
  "key14": "C7tkCPw2w7vBU6AekXrQJSL3HJY6cq23DJXXDyUahgT8oNEo74WEZMsRsw5E7XFbNhuFPCYRxzBsowQGZfzZS3o",
  "key15": "2DtMLvPQSTwzRWC1Eq3kAvuCSg33bK8ufjYTgwcQUkVDRRQarPaFEFanBixvXogjU992aZa87qShg94a9axneSH4",
  "key16": "3NecPah7X6dR1Pc37cMDfTWtPs87dsUbAfrJLFX3kQXrKYd7Sp2Hw446bZmtG16RQBvqVbTgfcNh55EEvTzK6LWc",
  "key17": "3xjESav6fmQ7uCx2jDYAtJiyYTxYDKfg8ieNSu47XYN1R2YDNe91nS3EtHcJw7PJLUkSoQz4Nqq4rdxQjbi4aifz",
  "key18": "kuGNstaZsBaV7dgc7ZxTmJXH5HMMyBLfi8Jbt66oChmfCCzLnxKTeijFFMiUhsTLEDuM2eQLjjyfr4HPzEfzJ3f",
  "key19": "5ekkcb2CDmwmidGWbsgeMcrdtrQxHEjmqMsTQJZznpyCdem76Dm2ij89Q2ykCC94zfYQjWrRLzAFiDZjco3XT3q9",
  "key20": "3Bhj72hYw5aaooXKTpYK3pkM3g5Uq2jw1Q313XweRLwrWyN3vy8xQcXP5D2zYmyFc3eyZmu637Qg9YL5oZBJiu9E",
  "key21": "5EwTLB8TPVeJ7NU1C6sCY5VYY3KvdcWJvgV6EvU81raLck9SLgyeHiS7qrsaJbiHrHmVYsgkaFmm1qJp5DbJqcfA",
  "key22": "4H7yQrA5kwm64yErtkbE2gBUYNEgPbQnkSYvM5PYzpmGPrmWjjLCbs5um2F21nARR4ZxPhiCxBTsBWSd456YFraE",
  "key23": "4mvuVqsVbjwVCbJoWKoyjxticW7d4YLeXq8kaG4vZSktj3bwWtEuxsCvZRBdtYGnf5qrbWjUaWRyrsWTZ6Cgezys",
  "key24": "45qtaRmsMeAni3jvPQS9uo5Q2yXc7VNHR2qLRJtK4s1onL9QN8GTdv5y3cyqrntzVP7zy62aPHEv84Qw3dTjfoG9",
  "key25": "3hjbxF47sG5GRcYRdKLYtP6f2MusA4hMc3epYA7QuvG8Nx6QcKzrcKwsUatsZJ1uFiYf4dsxrkov6DzDgmTS7DUN"
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
