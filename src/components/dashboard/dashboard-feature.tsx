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
    "22hFzT2rkNuF6X58QpxPwxS5w5csqGjACkVeRaFBSNrJmAhMTqLMvWduFDGjPf89sBF56nwTvWmMgrcYVeBs1TGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1PF18biBipVvEkEYmprTNczHXCBLaB1JEzCj4zs89ff877dDKfxCVsfkM2pGwnAkU8XFetJ1h4kBUikXg6uqRa3",
  "key1": "4x4szFzJkAJ4CwqXirSdQmGpRgQ6adRsJZcNFoy6VsKonxdGKupDgzY8YvvKd9scqVCUaREghwff1YhtNZLMJVo7",
  "key2": "uQfwNWtr4KQAXbr4xcZYDRWz6ykS373DUR2gDyGs2duENtV3Jgv7bpavmwvS5JMajiuApA4Xzqeq9MSuVDUCgtS",
  "key3": "KdtaKTnY92noGUYfyPRHwJfQj5xqt9PrbcEtP7hRKPjahicuNVrQYgsFssZU5a9BjdJ9cDM5MbaGq8pwRtb7T4o",
  "key4": "3K1eSmYyzoe2iNua4rs7y9JYiWdWuVjEqrd7WadUBDh4sgZMeokeftRGyyPwH199uUArytDjt8VAi3TFQi7dNy7D",
  "key5": "daB91Vj2isSigi4nQGFwdtrQUQ1ohaDDhPfJDQe6Z4jGGnDRMBfYAU4sQpGn5ia8Em5A255z31XnWwdRKTzB5ij",
  "key6": "3gXnDpmXmMWatYG9neX98qPKDnTBMaTdRxrEKhVqKZ5KQSbbxCG4cFJbtTEJ8Sf74HxyS1zVdnMA2jj52B37SwQF",
  "key7": "5CoaXMuzVoY26RCjFHKFrwaYwyPFLFzVVi4geDsSoXMs667wk9w7Nsh4YMmbZoSPN7ETLEJ3MkizCZUYpUqqRM4",
  "key8": "2Gfs8JxRzeqYBtKx78aNSeVp2d2QTXpH8gvQTHPNJsvGwGmwe7ohBwsxbEyaaBLehRzVbEUkG2ApueYr47eLokuD",
  "key9": "22abzTLgSXZrvgZPgWCjZtuZnQHaGsxs1DEyBknua5RZkfRNoHHuvcTANh7asfFyZwpQBKsBr19ojcsnBZZ8RpfV",
  "key10": "4CsYYxAAsGbvycwcvZu8gRthR3RtRSnN2HLifmcrssd2wj4pGwPrM1nHGvfwZHMq88oog9AfHAzTasv39XVpU8VT",
  "key11": "25PXCXXS1EaWAuMBNcUVJd2SSEyU3MqTdLo21DjYad5HE8GbAf5xcftzhhAiBDB8CMCn9BHgxEZFQdWJgva2DrAW",
  "key12": "2uKfKfTvLMLuK8zN4v3aGVCvF6QUkLXG733JBV1iqrzbAdzMxBCakg3CBaxv77qHfpZfnQwPUqZ9K6sT9Ac64xua",
  "key13": "2kjDeDKswkppi37b4o2cP2hxdLj3J2Gb2xFvCKBrGLXJWUYPqMMNeS4sx2H6xArDXFqUxpMnVYbZP1deExZh7eyb",
  "key14": "2RAq5FLyb5SDPtYB2GErKhUdb4URvwXFemS8kVo4jqMbsUQ9JcKJWjaCdZ4WHnyG9NPF1cXnrw6kin4DYpZUpE13",
  "key15": "9idSqrM81CKajPDabKV8xoQKhT9gAunsVSTnTygt2mKQMxFnUbpt8yBzcFSNCLeeXnxjCwLkru56MEjfmSA5tXt",
  "key16": "5BavrcduQuCfNZPjYqYH498F4M4NvF5pEuVHpai4pCVBjVkEXLDsdu6rQkEr6QosZrEYqHUZNhesf8RohD7QbxWC",
  "key17": "4xhnsSUoMsuo85dngvXMs1WrQEmiLVtRBRpFL75e1MBeRTB1hyKLRa4RxPWDUbzFuoBCTtouaceuG68rjA1eAFVQ",
  "key18": "5AJLYJHcUabHS6ycq15EviaSacZBE2rgomMZ8peekuB5SEVcxb7f4HCrQ2wQV3H9qXdFLKUFeBujU3c2Bu4NAXsD",
  "key19": "24eMPH42GyeLHZe5FJBi7woxkKUzGpnZUBhCrV3xzQP5EaCdWxcRRGVCUczm1JTkXLuqjh4KwWQYhgfUiG2ri1Nu",
  "key20": "2gm54XGqsvno6bvD1VrVJdhLuN5Fg1WAFFAmMeWMqEubf7exxLMbUzsoNGiWrBxH7rQ7LYj6rDptVKfggceNQyb",
  "key21": "2Rz74wTXGMcZ6Jeb4DEm4u22s52Wv6VXdNJoSUNoHeSYuhhhmaoRSQVVSfJnxccRyrspEYC5xHaHvwBVvXdt8pn9",
  "key22": "4SY5MJgiykaX3exGWvcSQdLJyhrnWpX9nnrEDjoM9rLXLLdj3SfgqGmuYaYngaM3uJpbTFaukgvxHVzskPikRZ8o",
  "key23": "4tPvQYyc4SN3sMgz5HzbBcHQZjsrkRJ9MwPiDvs2TcCrBxbavgEm2z4FEGk3JDejJPcXSANveVRRZNPpC4jS7i1Q",
  "key24": "FD7vQwMr3gjkNbwxSVkfJZVTTUXwpLDCR6tAj3ipddQJ56ygerKJ93CAo6fpebkPtj5ogbNB5Gczu1zJNHoe339",
  "key25": "3QkqpXtEqpQQJLHtSC3TPgBFPbJjgZYNWSMiDsicKxDEtt9G2ENH5oiptK3J6d8YidLKNVq3QixKGhkfCFKqrvdt",
  "key26": "2idiQmokFWjsNRkRxCCJ3jGvGe7puYmPUVRrPHGyRjtpavvGdpKX5u6ZngMBHPStC8vi4JLUSyuxRBqxGDSprBGS",
  "key27": "3DzW5tpzVteHNZKkzf2D8ZshZgQfEMa1HpRp7aUdfTkyKYcdP8j4wppoUT88ooymxc4ArCBLEs5tkapdqzcqa2o1"
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
