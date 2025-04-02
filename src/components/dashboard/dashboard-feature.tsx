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
    "y2iewfgsQCYkZDPVGUy1Mj3QEvvYkTz5GmgPFQyH7ZqAmoVvSBreG7rUyBejfijwehk7m6YAC7aQ2qc4XJgRSBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t2C8rcS9hgE7iMRSxGXQD5NP8t7ud2W9DnWc3u2Nk2jw3pDsrLn1ZrJXc2NSXbb9Hz3abi2h5H1kmgf3oeGZ6LP",
  "key1": "2VRFk6gzZWjb88SvSVjmpY1nr1uPX2ATvfizu7MR2VJkcLv5yPb2GNxbkLj99TnZCDwAQL5C8VhSoXLZ9oBRbrL1",
  "key2": "23dJw4xoWEv5PY7af11JrPP1gjTeSMjGGRF8QMfckZnZzcV3jbmGCSzLaN2PyJLkH4HFfBsiMj8owAf9SepaUHHD",
  "key3": "MYM1EgBL9unzFGWg2oqXTbM8aabDBAPoMwQiDLyhCFEDfBXWogkZ6UiJAKg8vZFBwDa8EbXDAeNe3jdyQwSz8eW",
  "key4": "4UF8Tw632213pUseRhoj9FbEDDJfnVsWDQ7WRvYsbK528yq5vBKXFb7ktPjq2GYvYY6T3whsTNCVzC8rSxxwLyH6",
  "key5": "4Deo9jkdp5jri5Ywj7QmuZdxRPTaUL7JgAuLfjWtND2gtBHudmNWmb6QymqwtjGEunR3U59yyQzaR5Ypdam95Tqv",
  "key6": "5TrSQBfMy7GDKhx2H7nQsATrPZwUFdax3iq1SjJP4s7SV3qYSqMgapZYd9LsUyLbDHA9xnRcJe9eBP4N8QAYHPa8",
  "key7": "5cfmXhjnyG86hgZnK8xHT7mhZNs9NwhKa52KMeoLdCP69PMzr9JiakobgyDeK1AeFbhjfuWzqwkFriWg8cSpjbzc",
  "key8": "3bfmzvbX6nuC9FF1KNiFGQgjwoFaNTm7vgRWf6RcVY17yo6yVmtvMneh5uXSA2icRDTZyM1Ncn4xxBQPjgkWiRL3",
  "key9": "4XFXoDhfn91wTKoMvtdDoQQo4UaEEGT5iAuymAgZTvrXhoW8M7hLgjiRMzy4WVCUDdmXSf91AupYtsxsX3vSpMx7",
  "key10": "5LYo38bp1Nrn1DwrNARPjUMJagtKP6CPwwbkgzKXEyxgBCkbueCdFeVdw8KGDdc681exuJSYXxER7zMy4kyyGXaP",
  "key11": "5RLX8nngCWL1nQVNUCnovyqX4r6Rgpc5gFWdzexSN8mTjggQFazADg8Rv5Z1hvK3gUmwUEHHgnScPfdUBwoyedhm",
  "key12": "t9NTJWhnEnSfaYzWarNHMhqtK3LJZTqKiEpmdwhqSDj4xAAS2iMgFKipvVqbN2jHEF4A5tiWCknQL2VnbrEmcKV",
  "key13": "2JHsqocH6EcNVvkU1e7M4bNQrY8wxsEfAJetht9tA3shvLW78Qead1pjQeprGnoUmo6yspf2i9Xq27CuSyiEWzUF",
  "key14": "2mDGybPB2MCPZBaQEjLuGuvMraoSi2t7sx44Rj743XyJZQfK3Y3oNQcwk7wNiTcmfSrBL1XdMHkaJYFDCyT1FcQ7",
  "key15": "2Kmqmho4w1stNC3fwU2NppFUiodDgE4Y1yFoS8bT5cPd22xgRP1axEDYfrVH6EBwU3jkMSeiy6rVdSsLrbBBoBqW",
  "key16": "HLTymHaMUtRuZTmxboM3swC75N3JkgjY1LRJaWdKsy6FUJzoKAzuxPkqwgtGzBRFBmRvXYWSmPQCVfTeACMb46Q",
  "key17": "4emrXEPzS5Fr4V2TPNEuMQdhfkeCpLPVCGou2NxTGMS5z9mMbvfCBLpa1ovhXWjcV6BAgrXRkiN7dYwSSBZve3ZZ",
  "key18": "F3PGTLDHNM3zuU2mag49y3EaQj5PPuJzAeUFrWseH6dJ3MpxWfhtXruz5yDYAZuK7RiBjeUSxCLcrmLXEFLniPN",
  "key19": "oLVshKL5xX6DhmKhKs1uUjhK9ce1g23ETuhN572ZK7AJRbi9tg3zxTh1ivP4BUAvK8wMyw7rVmsaaXA61Vn6XK1",
  "key20": "4dFdiD2BRdpzhZFVHUCXHrTDRpFRWWsemt4NPHVRP8MxdaK1VkGRD7WqiysAP9yurdbvnMYV18wFsPMvWKG4fzoc",
  "key21": "p6SntyxiWTBTpxbMrrpkq19PFwhGPouVvwi1q5HnCaJ9wVriafeRsqoVZFiZeeEuY6LxrprwmtKRsqdPZ9iyxgs",
  "key22": "5RCWWTFHfrNKQNefYCPBENTJonpQjt8sLPeTaFexRAtxrQWtTgwcVBAHKVYu5nTuxCrnNk9eGaSzUs2rwaRymayW",
  "key23": "2ZTScQbi1oQgQETwpRtKEJynzU6vTTqZ89VZyuDG6fXkSpKGzDW7AgrvRU5TT12rRVREp9mesbEqjhv86nA4fqgW",
  "key24": "3NTDTYKbZU7sQDhTJH3uY5APb1UzNh2dX9ppP2eZbst1947zuzGx6fPSDzQLUv1huncgimSJDCVThDsUFyP9h7n2",
  "key25": "3V3Kb9PQxhG3FUQFBDVyUe28BbCUb1JkuMnV6FTqwgV24vSvHhVbsVi27quodfUCkT2irRfRVi4VZ63F6m8CqgjG"
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
