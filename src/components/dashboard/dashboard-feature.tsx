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
    "4dJbPo43Tpapn3ofCnR8ndcZVNCoKRycGNJ3X8yf1xr67XHnFjhD6C4Xerc8TWd7jYGYiDWx7CfYtpAcVdbqdTZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ca9WDXdjhEfeDGeiChpBxcGa7ujFhnRAD1jHCFhLp9dX3xNdByHaeSNKmddK3eqPj3tWmGcTzGk8fZyy7thKuX",
  "key1": "Mxr2aTLVLKhB23vgnhiDZN93vQSHQh5YVUeWzwkKLRKeVktfWgLT6ffUcfYEzudrHXaDRPqM8kQyfgFSWmASHwb",
  "key2": "3E7B7L5ehDDU8oQ7f6FRwccsVH2RzhVRSeB26CuXk7mQ4T2uJyENkbtfi4bqFK1Y31M36SP17npTow6ZHiCcynU6",
  "key3": "gbBL8dxBnHyYTQr8s1WCFKS5gdrUEX9ZMayQEPnRJCAhDgFro1Mfs1NAshiKhyFxXFfhicQqZQ1qqPHeCvuufJd",
  "key4": "QEmndnp56UyGe9ki1sE9i7SJxNeRWNNYRoMVDZJzGHEP8RZ9qpVJL9DCxvLud25uZKmAcySB1zsecAMwohVKnr5",
  "key5": "37GqxDuyN8eaZsKiSiDWB11ANwrGUdexpD747psZpGNEEbejgL1iDJiAGhLvX8TzfcQGm7ttHk917iusMQ1BTnMq",
  "key6": "mNHAVRJbHLwKc64npEfk7ptq5rgSxpM7zCdVWM5GePdV98v4p9DjnBcHuvU33dvcaP52QzFDUxK3mUmoTXeDTkS",
  "key7": "4S9Zzcf4PwG7A1g2y7PEhRDcRWiyBxtafKhUS6G7pY6xPnaSoofopGUQdc49kiCzjauKmMF5sQD2DpPuE42LCfVb",
  "key8": "5jeT82o4tA55HsrQSRZXSFM7trvtuyDStKH8jtEEaVs7QtSZ6X5HZhH84ksNxGqKuEigihP5TTHwieLZkv4TuPy6",
  "key9": "5hq1LmC335b6vh11nCKDKvKxLyzFXb13pts1qFBJ7Jtip1yKF9mxhBpDiijbzMNrXjvCbsGp8ESnFYdLmBWBrkWZ",
  "key10": "5QY1i2K4YsX2fGjZNtm7PJMmZtVXshiHQx5gPWS7X5yqWYnzrjGUo17G4hQvrkxq3MCtWyMsAPAQc383fvHb9vTa",
  "key11": "3bXjWKzdxGQyVrXkSiHnRpEQfsXdF4RZ16JHTXRctQ35AKp8uocWJ79iTmACtfQeM8J1PMDkpovmXarKCf3PevRJ",
  "key12": "3r5txGW64TTYDh2Vns21MeGVvnvFJuTxEbGTZf7wFN7RCXudCVxRLaNZK5T4mJX5e65oZK1U37yCRL1gsYheqLUZ",
  "key13": "5AjNgE2CHy8EKfRebFTYgdZQg1pcHx1V2QhnYY5FED4jcGUGQTieuUY8bGDRb3FGmYoGgysVibonm1TDH9huUnnT",
  "key14": "423QYnSouMSCf7LVWRUadstkEWXqm9WG4U4w1tzN8rNHA25EGgUjsgQapGNFF2UXG4iak21BDXnc6UQAp28JmBAR",
  "key15": "uBhW457pBLeYq4Q521NsotrQci9QaxwyD7GfpFFjaTqfnnLC5T5ejBY7jh5hcKsi861ELikBQk6mmoFYWX2pzj5",
  "key16": "381mopFZM5RpwbS82CjiqUACorhbRe21mXd39tx3mFwiTmF3Wv9eCGfvsBJJ5SdNt8bBVw9Punv84a5QCjszbJ9P",
  "key17": "2RWGd8kPP4HTGNdQZavGzUYkY8DcKZxrjZDMzNDoPhfFoVRMgG1StBGVFkVoCHLJUfjQhX9g5rDRCp6DH6rZxNog",
  "key18": "axtQHo2vfCR1Ng1cN5v7YRk75RrAgC1ZUR6iFrzoofGR4eBRU1dE229Swo4FHVYsqASQv6XjfKYvZGWENbzD3GN",
  "key19": "4n8QNLjwj6Jg5Xy7M6nnKEekrNWmbY6d7HKuygExpK9WRuxEqw95Z9BoPbc2URPbvwYK7p65Ct654FYJmMgTpdC4",
  "key20": "3wib2evPPsWWL64RE6As1squtCZoTSQYTVBTvZAj9vtfRuayobprLgyAg95L4TubQ7fpKXwqvay1zeRDjpGLfpfk",
  "key21": "4xs347GiEoGgwpTDK8iavkMTnwXo4BZ53XehQMFRp3aYwZbUDmMddPwG4DJDuVm8RaC1U55dzm3rJoQX8aK2i3Eb",
  "key22": "3sQMwhKAACJ9ZKrgLvsQyqnBcY9TrQSGAQScqREyGijtsDL7aCzyPR5nfML1R8fhYCBPgUTbsHQrxyqiEhUqPFK6",
  "key23": "2SAaa7gwYRk9YYqVMHBz31D7qCa6mvUtiaw6JBq6kf5TNini6K2P24xqqBfeWF5vxi2oDHtE5RdwJetNx7To4crM",
  "key24": "3KLJSBrfrGLdDT844fYcsJuxNDJAqxUV9vgQD19Th4PfpNQ7gxsKKZ9AH9kCK9rvsDw7otJebrUxdNaAabKyGTJa",
  "key25": "teFYRgymLMdYdhb3NdqkQd3YDrptbh4HuHuAVWqqJQDgcLjir57ZtWrbHnpm79vLh1g5t1Ti6i6kdttFWvd69NL",
  "key26": "4Wv9WFPuoznQqpVVtxsq4EYEVfgkLhDMv7iD8wXq42tPZGkRQFHfZF8VhqYWKzgdz3HonvDCDDpxkfBW3XuKj7hb",
  "key27": "C4Bs1cA2z2w2LC4E2PvvLY3qVgvPXcuDXiQPvsfK5NDasGpq8GMXfvCscSWLorLpv624JwxByRKY2HAAyvEVsXX",
  "key28": "4isWvs3yQ9msTXokzecLuGobDpXvBiPcYKe6fNvTpXT4DMXxzda5kK6mYLDL5cbp6W8vnEYAMnFSGjcxmKVf4bYw",
  "key29": "2wdtbkyBBEhVHqK1mKsjg11MuhLGCdHbasA7Adf6zWiLbVnzsn1RARYHH5FNQ37H5Cy8aiLog5uWrMwBwcQ8fsXG",
  "key30": "3cugj6ap9H2YBLaac66LsoaCwEUpNQDBoWcEcTJUGqvCXxzZ46XCmuJTdajvMg5Usokfbx6GJ8PLBENhfDPtcoTH",
  "key31": "3vQYSbT9w3USeki8gMrb8QZAZourZoaWMK8Wi7NRQjgMocDfbmDzxCmsxdMsddBtA21ej1cCwaFDK3GrTs6fXdzM",
  "key32": "VjzfbTmq86VzMeus46xpXkDeXCVwoKJHC7zqtjTLsQuQPdLef1wHfZ7E2L7SbcMK8UZDhK5tGKoUnrCcum91ede",
  "key33": "5RhLBFGyVqthocAgnVi4194pkAdfCFEw7xto5cGE75EMWCafajeAK5szXUbRSF8YxHr2GdycYvrC93YtfJ5FrhfH",
  "key34": "5YigeN5PKqBUJACqoEwaJwbejbETmCbzgpWDHKLiNFsuKqEZ2tXDbzD2QDFptSP9veaRuy2GxZeQt9eUhEDDMuL7",
  "key35": "hFENMr4jnyU7bftFn3sDQ5PGLa8Qy1cdxUxQjTgM97RaeDCoqSfaRpBzCuTfuaHsWAUN6kfRNpBV26aaHMhKviJ",
  "key36": "2BpbYdJPnwb4vUDYeSamn3tue7C1icR2bGTRm4giYjpUPHawt2NZryvrTXHtFFyW7HhjAsEofeEa168KCsDcuMk",
  "key37": "2ry8AyxKqWSAtbhvGVJnSiXkEc3Q5pyhGqRRZ5GuxgPX15UdN31jo6uVL6ZW5DA7mN23WWWjRVhW6VFgAL5tDiwq",
  "key38": "5XrTNBF2x8kh9oSrykz96nae8VqKnKb29GwWjputDivAZUvGvx4VSNtEF34R4iKWbN5MVxx9fSfYSbbZpSxGCtj3"
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
