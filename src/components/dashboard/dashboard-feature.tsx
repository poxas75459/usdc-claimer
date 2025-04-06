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
    "PmLQD7ruTxYPUS9wh3hzHgKdHhHyfZu5KMETBuoFydnMawym6MKVQm8RDj3gbsG84RhSAX6W5whMRu2Qen9bZnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VTb2KFgSg9TY6QADJhDoGEjAA1y8ZmLuAJrMn8d1uWikCDLtYtoF8gTGvbDfvAJvAh5Wy74uKjgHFWWB2MHAmDQ",
  "key1": "2Q4BMWRkN3yuhdpWn59Hu4njkCbvTQzANX1dZEvMaXqWGs1oqdWLDoYV8adP4wwFF8aSnKPYCQbqREEq68TDpTAW",
  "key2": "74kWxRdpzYBi8Bju8hHjYvee4UAf4DyMvSMqbDceU3mm9J3TvbG3RTzTzQyfqzRd4EjN6ZR2UGvo4Smp3A3nPcJ",
  "key3": "23SSZnb4hjeqgYEMzANtyvBNSfXhbBBCQAV8Lh64JWshdB2MbynF4TYmtqYAcepDFQuEE5cmm7ugTHr6381KeNXV",
  "key4": "36kkLH5UVnb5JoHuPW9Ptk9n2JDPTiagyusjwQJccrNbVxtVyYDCa2aekWzhvffviJRRqFgG8Hdh8jFuicMF6y5V",
  "key5": "4p6XZ7YN4XPZLvc9yGGRMDreiPPygDJjk9BR8ih8RQwBBuaA57qNTjxX451AegXWmoMStC37dSHsk91UrGPvAqak",
  "key6": "4c8s4ATFo957YhSW7Ju5GrxQqBpxmhdYm1TmgvoPjv7MyRm8mL61gcenjZCLLe4LWmd87vTY16Ctu1iJnZwaNn4b",
  "key7": "4nG9eXAT3vTxAuP88gf5uwP1Ed4aJvC25SNDAxC2mecx1ZPYxLWHaoePzWy3NL5Ky4wqh8gHhuHVQCYznWrKPMWJ",
  "key8": "5URgPtk7irQ8D5MKbGbxtZpRTfTJd6GmdGLrE9V4RpLxA841npgkqHadAmfAGAduK8KHZUb3rPwEQm9BzHUggeUo",
  "key9": "3F2WE4bLCCQxRrckHqtduP4PUy7rr2RADYxKZXzzNn5UTXnZMurX33BmGxRT4MCJWYs254mjbPx4kKovts4PFKg5",
  "key10": "52b4KEk51AXFFjFDpbhp9V3gabJNK6PT8ySorwqosBssUvCc1d25HsioozVEyjEQsUdcVyPy7xP6KRXBWVqK4FTH",
  "key11": "5Z1xzkw4bJkwSwAAtT9WydvbTcesX6i3UXSkh9DKRFrGv2N8ae2G9AL9yYZ6tBqMiB3mgxTz2RQ9znaoputVSxZ7",
  "key12": "2HyY91KdTBChakDVyg18gSbM3erJDe5ughTSte4FKick97tVU8fFzXEVmv36YHHXV4g9reGN5xopnTV1mgddpCPh",
  "key13": "2CVKjq53kMpj7N6GBcsdW3f923zUyKjXWKtZRGQKsykcrCr1v7Z6oDhU5UJ8XVNEV79LcWd4VWPNgs5imr6L4Rem",
  "key14": "4eB51u8upa9pxktAFfXuxL5JU6wPzYSjHDkc1hrQtxYeANHoJfzXnK2u23QUaivMtbLJE21hgqMVWpgbqG3JyxqF",
  "key15": "AK41fBuZdWLWm1F4AJHKt77bJcABQbn68mStmUWt1fQuSKccVdzsj5CfaoeFBSGuZgg3vdVrUpGH1CStr7GPDq3",
  "key16": "3ApaK9oUWzVwZjatTUpwUCncWSnZzLfrLvZ4Zs5FxQygRdjGTc1h7F7GDypKdN2biibaYX58TyXC9oqLzY2XFGRU",
  "key17": "622ivz8iSx5k5EfgPHWJE79kz6okFEoaZsA9DwnFd1QeoAGTaPnWMQ4KHsrkWPxnaWJ5dfpdGCg92NeuwmtkdijP",
  "key18": "4UbgDhnNmqZ7467yvubs9qDiw4vo88nF5F6bkbyR7HJqyGsxWdrqh9EFrxz7R1yid2AVCStCdMwBBxA7i4RLwrjJ",
  "key19": "5ZsXhUFjbrgDMGoyRuaG1mN1d6oYHsyyttGQm56VbwFaYWYoCn2a4RNt5jysCBcc2ny7QeUZ1fHykV6BdwuFtBZz",
  "key20": "3tpL2p9nakbNhMyMrwN43dhzm9KH275kTF8bUbp3oQgt3U6iw5s8Hu86tpddJUcFm9RRTTLF2ASZ4EvLzawZerxB",
  "key21": "3MfoC3WefqcfeV3WHi248qcsc8hP17zYjM6rYS7ZVu19pF9fiTav2ZJhXMxtW8tb3md39i8BuwqHH2FGLUvb6cJJ",
  "key22": "4Ku6x4KbMreEAcSuMfnSNv8AFekYKnewExdq9tdv7Lb3TM8ixKmPxRJZMe9Kax2rAitmUJrSZeqrGyuov6Ui8oVY",
  "key23": "5mvxCHMM8nUNga8Pxm6oB6wTx63K823pi4UjX3QsmtqB7KdwCU2sL6MML7LsjZxNDnWewHw8zNZoWSjess237Q4w",
  "key24": "4VhgqBFGtgV9Q87GwoUNYh6eKRtD4g1VxGktDbCMqB7WdEapQgw8yGoz9qt5cMUgKJraFR1Y3EbYVzjpHtmMYMLV",
  "key25": "rx4HHTqjQaXPVzGe1FUKnGGXBtPAmSYDWYsqAQyVe3SZaPbNAkttpQzQFAfwqwMbsDxpPBkqhby3HgAoZ9moPHX"
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
