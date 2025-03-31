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
    "4YvtseAodbcHdbetErEPNfQgVHjuiFynTDTFMjWvUTY5qszL323pSgkJuUnPCKgXMkktNhbYn1cJ6fUGFaqTtGhH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22AjgJ6FsTFUogmsEKqzHqPJFnJLiWcgCDCsU9d1e6yTkT43bnwfZYFqwRCq52r1DkazQE6MARq6h1BhBiCKhBcg",
  "key1": "4RwohMsoQT4XEbAMJ8vxkmgrbMzH4WEG7zx4FGrRBC928UyPA2XJZhFNurM5sw3gS9ua7iw3FCDtwMyDXHFQXjmx",
  "key2": "4RRM57uSvTHdNcrbBmGa9KuhFRKN5nSgUMDoFg16v6uWuMKex7gj76fNuDa6PGMs1wPX9VrmzMGUsNkTYMFzASgy",
  "key3": "3GryBBCPJZNdxPS1WwLLy3jPPXQi6CBgYffgk2TMMhqc5hWnk2bnnU25YuFBUF7G9UfXRoC3YBSoUhHH2MHT5mGp",
  "key4": "2iFFYBFWy4YfwbJLNHC6dSDjVBpU8kTLZavrz1aMh1ts9jNMKc7YujpJx4AfpLHxXBsip9iHiUuzMnix2J7hFsSc",
  "key5": "2eDoh9HFkTSNKLfYXUMwS1VnqMM2nZf9D1NSJqrQHKbeAaMyPdhSMFuY44Nb87sfsHHAxVNdkm72HjS6TcM8HxQz",
  "key6": "3YDGo7cyZFcPevudy9R4N7goa1MSRmPq6vxmKB1YgvTgFLodLoyN3NsptKMTKMYdJwKQfMcW5b3YpxRnA2PrecFK",
  "key7": "AcHxnC7gX1VBkXosRJgAogrJjUs2mHcCH12uWs1GxuFKnAu937zS5XwP9mpN4r9jVEKKRe2gdcs9AGBMJYNRnD2",
  "key8": "4unbAyAarGbLbxz7eSYFxjkaPBUct61gat8hZT2GVKPuXU2RScCP9jytxbbGgGMX9zW544uDxAKWZSbREzJ4eqzm",
  "key9": "3k7bPCnPH8idmvPa7eF26wmUDMHXJuTeUfrswJBh4DcjHmxY63hFWZPnEPaxXuoeLArfbBL7Y13TqRQJueynBP3Z",
  "key10": "3YYGykFDjM84btbiDm4gnN1SRcxL9yVNt4FXkdnsaLijdoxYMZzvYiv9H8Mw563ohqqAdUvYwTfgJk3CHVQGxCT9",
  "key11": "uRbeV7qBy95YapS5RbDvGZLH14FgJ75HRZQ31dS7GxifAqoEutcDgKvo1XrXkMbYj47v5AbREZGfNpkpsLwzWED",
  "key12": "k7CdLkjEBppDYnvCLsYw5E3ghsNwSa2FgtimEYcR3zrUdkHPDaNCs8tCB8TfGAUwGbHCTPaJxZ35Y8pQz13T3ja",
  "key13": "2gQRv9Wv4vQ5SwsTEZBgJKHSTcL9iohqQfcM87n6tFHdMMPLKh1ZiXzoAm4PUJcnfwuhNVKKhV3LD4dTwLyv1Q7N",
  "key14": "4tkMtfbYn3iUoTiWPV9JgUc2PLwwsYpragqMbHKeaLHA1XJpqY3aix1BoTxwZJhwErTqRPtkS3X4382bYF6Gys5v",
  "key15": "61UHVioETkYhQPetw7ZBQ7zsux1oj67AkRtU9c9ur61EyCWmPQWPhFnDFyQfiX8EVHaMKVthUXrvZ7f7Cv19KfAW",
  "key16": "WyhoMkghMsk1Gt5QDa31zwokE2AjAaCWAtfgqMqRcfVb1wYkeDbVB45EfMhnygjs9i2xuMBBaLb2nqYPKMHK18m",
  "key17": "jq1SgGzNkViizD3NgDrc51DG9pp5NF7EkGY2f3iFpwMsHRR5V7aThyxiQVqqhu44wT5LrpVBV7Xo2w9H2S6Cnm7",
  "key18": "JYdQ8RJeSNPMLKzueFZJACjkfSXjr2NG2y1if3RiQ9rajp74p3NGbAQnJoTXgpAE8gun8EPTdqiHrVcEv1BpL6R",
  "key19": "4TYf7NiBFYGoevmE3Ykb968RxtxGPBG1LX5bVqPeYGQot4pLKsciNoW8HKnMphynZ85qYBV1xcMzpFjGbGRRNvVn",
  "key20": "3ziQZ54pU8HJPmQHj8JQLJDM2GTFaHEgDegssAQy7WvqueheBA5zE5vcxQg7wFLSs3pEJV7pGhRp2dHYzTLwMnS1",
  "key21": "2dL8uiK2454ayEmngZtD9kaMeyNJY2DMscExJ6HMdWnUJ1kMYWVtmX9MqkJ2FfpuZARBqVwdbbuio4mkwJsVY1PU",
  "key22": "3sAqopqhhHoCkYv5CATQS3DysNNgRL4H4WZxQrQov8gC3JPi19aqghqTsKxgfp4nVCDsBncjawYds1yGTur6R1QQ",
  "key23": "5JAnYKA4JSQLU2CwvVyKeTT4VSkAW271yv5USHa37J6tJSTE6nw2wst3ZxYo6D4W8oUoYpunSBj7yoLck5ZDZTRg",
  "key24": "5bpmuFtt2oaP2YuhsVJ3Mzu8Npn44BAJdRSX4E38sHySAjvYneLPrgJBpCX31oGx1PFnkR7CmofZg24y5H2FMPQP",
  "key25": "2Q8xgkvJ9HBCTZT6FsdKbiFGgsGiHV9RmMRiAkoqvo7av31m6fY239pPBnCyhoyF7WVBLgWrum5Jb468iJXUVZeK",
  "key26": "36ykUwjjWejT8ythGGVSPsmZXWXMZ17aUfVNJbaJomn7p4u1FMYH6CfZTgWewwrur7bGyYxiiuDmTXG9vazipmNj"
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
