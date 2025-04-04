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
    "2sctESyAW1J36phsGBpLHsWgCFRZpA1YpJnYnjvgjXQ7opaHJAqnUPmV86xqDLJqpVwEuk2Y8SwMsUcuABySfXi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tWJAoRUP8ked3YufqbXRGSgktwwRkdUguo1QNPrLcYwu6RutTjDjgmcgHUxuyrG9N34km7T8F9uacTtMJ3B6KjA",
  "key1": "4dVJB6GhemNSsYzDXJk1ZiNcUpqAs55SYATzVyNT6zRFhqHioiNSptTmQVmiiNJze6h4eLnd2XUM6QcmrPv3qeEY",
  "key2": "3GtHdwdYiTq941DUXLZJAaH7PP7tvT3a4w3dTYJWwXnbn59iSXjmxWJa2m5JBwTRjEyv5gh6m62UsWkZ56gxQBNB",
  "key3": "5QQgAUijmmzbVXujvXuuUyUUSUTRdKPWJosSzMksRPb6YSaHHuxANQGwEVs7zUJLK7pXLajnREZaqkkup3DYfXMS",
  "key4": "v7iLr1KUmokFV7UQv5CQtnt5pYnFV7xZdmAZ4LMredsZptYHkUyxjmgKPmo4tpCeaJ2BWEBKY1UcmyfeGJUXjU4",
  "key5": "5NtfLvcA1d7m7MBHPNdsmuQqE7F9gAXJLFDch5J2dXFJHyhyzuiyyk9RZ2kFNuJBhkfwkkLR14SjUWtjSVCHYxPs",
  "key6": "46C7izZK3uAggxtGTsKbHLfiKGtrG8s59v7ySB7b6Wio2Sigwx5nAYywGCBBDthMkGnDHb25CkPZkCkEzMTrNSZx",
  "key7": "5owjYpsEWuPhgdzNqFeBLdn7m57Fqp3gox4FdUnWqRTgtVGS4qqUZBPdZCFSUiAdCPneQnspJuuozaCw4biS9vxn",
  "key8": "mZ7SJ9DMsMFiVfPJeQBFZfKed58Z49xdfXLWcs7AmQz3hyyr43Rcj8exbpXcESBYwR2N5bdatc8ERahcvcK15Ab",
  "key9": "1GQJsUGNpFLNoHR2F8Zi9E43sR2NZQKBebUgXcXaoQ3y68Ti89aeYkEVadau7BdwihKP69HeJ49RVHbdwaps9Dw",
  "key10": "o8F4GxkXBtC4gzuVEMoSGgEwmdcLNjscXVRiWZ7Urdb2hjhuZ1Gu5Qd9otreKC3rYbgzZdSZDyZDBqk9AeH67QH",
  "key11": "2shWMiiyxuiuvJxAAZDpPmbFXvW7T5aQqMLZzRkRhrSEUJhrFVCgUj7gRvwjwXavtGgLaGfE6Ksou7FRDidXvWUc",
  "key12": "55Ye1jTjdLEY18QZAN3Am4tymPB7NnB92VvNwnyVqeEDZX8BDv2rW7u7zvbEuRWEvwKSD2BVRHLWy5CbhkNGAiur",
  "key13": "52pgaxYmfHGGwi8eqHHFWj2uEsBZHq9BmXpSdgvFFDgBq1Q9dnuoksMGdeEgTgEbiustPVgAyUqd7owivzFKExXx",
  "key14": "2RBntnBRMkEkSoWbSLyFbNzJdHaiRxb2RXyQ4o6QmhmbBHtQVG4MbTL5WKbH1CqPhTrkB1VLCSysqX9S4JbkfH4F",
  "key15": "5XH1itT585aun8ugHojKyKjtC5LLTNoGA48sH84jJrYZ2HHeaBRy5ReQ99ACqnKNXExjxMVY6c88TjNUy29fesAj",
  "key16": "3BLUpiJ7Ks74TQURys9j4YqCUN6oc1bRseW9GycVaXUwCXMSKUb3biikpcmAUmqwaHVZeN3JC61QwCvJ3HTPP3wr",
  "key17": "CDsRCbD4Kjbp1QyFuy53iaW9mWAsmK638uni6eApSadqVSmhmrwD1zsC64wSHVqptaNGAkbEwz45UMiBJavLWUN",
  "key18": "3nfD8ugv5JgKSZhPHx1hwdvZio7q5z47T3qyjEf3k4HmVPtT9ebmSA7BVNbjg7SCu2iMNq8TZNW5WCheF66MbNEb",
  "key19": "3Eai4cz9WhQadzdj57Bn29Xr7vKgAysPkKKxkRd2KLG18FZx2nrJ5QR9hstLND5eSWLEWWasEV8B65wWFnhk4NXN",
  "key20": "2BLoGkCZSuii1KYvEyYPkLJZq3RPuF4efVMBbBbo5FiEqBZewZBMv6ZavkNjTDf8MLw5EJZeykekbADvETG2QCTm",
  "key21": "5NwAN6APA441VUMvYVGqg7QDw5UgBxdiuAFLMu9g4dRrYiSEXGaXZY6ka8sX8uvaN7mEtT8pDXrpuW39rwuPpvWR",
  "key22": "3s5z59Pe859WdQ96qJMfZHgbQPsUeyqAYv7yUHsHvU5ah8xtQkjMYGPtXttaGipHh17HvKTc7GyN6dAFexnyWZgg",
  "key23": "3eYiywXU46YbFLzsxg1zMrkYsDSPo9EqVvsTwY3Ebk7hQ4CAWswAyFnicT8a8vEirgx6X5eHMkWc6iaMHsvE8fXc",
  "key24": "CHutZ5Sj9AD97cCHsoMHn7HXoTvbZWson8ZnGDhjvKyDAvALvM9dnihuqYQF8tMtSKfA6u1g3PEWcBFuApg9Kxs",
  "key25": "PHG5xuogxR8KNNRYBPM7F5KWggXWdHBFkLGniBXZTTNHvdRRzmR7s18Z44PsiYg4wuQNDcM2Z37otHms8z9i4Cn",
  "key26": "FVcg23aZwMKDrLTxazY58ePGjwT3fQM6B6uhAeJ1TSBZHtQ7WAVhiYui7cqARxTkHGrP5J3xj6vpPGpbgoCauSv"
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
