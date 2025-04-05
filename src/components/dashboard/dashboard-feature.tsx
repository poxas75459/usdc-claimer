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
    "3uHHuPjTmEtemA9C2jD7UQz4rr5ZcTeZtvM8JZKiH1BfiYcVyfm8h2hUj1uywAMxscumccWCtdLD1rY2KZcMJ9nb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pxn5981VCZhEp9Z58eqV644TjAneJDRfbM7HSLr878JUXva4iSQJuGKJHUQRpEeDdPMTAWUSFuiPLsWJWg7kFHm",
  "key1": "61mgPDxN31eWCfgdk5ZSmkRJcj8KcLv5aTvw7jEQiBUECQ1ENyjB6KfAA6kc1hPYa9UmMoDyGDSYYNn7iEP1XNy7",
  "key2": "3SgnQ7NSV9uEczqrJCNou9XZCyaX936Tr1HeHs818EJjZNZTnVdkz6gaYHj1BWPVnzHSwtUw6qACXbKLje6rvFiV",
  "key3": "4J8xyr17xDxHdrYJamMWEpdEXJ8jAEuwMhhd88BW1NgwCeiNxGMFgHWb4rhkeX2uWnq8koTanUMJV6uAkyi1MZVr",
  "key4": "5FgNUbLVSpb3J8aLPHzhmdEXkfUQAiZabmERTBJ1C1Q5bS45PSn7GtoLoKA4Yveb4W1E9VUjASoe8s3dFJqLoxXg",
  "key5": "1y5rpKgLfX4A4so5BYogkbKB5sScFcnfhuquJ6kn3CFfVvMPdNq27Tf3cHbbKcaHXXdDC48TePGBawZpB7V3H13",
  "key6": "2ss8HkynMRbcSLS5jAp7fhN59pyp8NKdXX7994phCr7MKk8hZknBTF8kcriuYzvB8yRQ8QF3fY5Coz4QCm2QmbjA",
  "key7": "3LrPhXAAGCJZUrvWNTVY8yswzDjHvpWokfvRbZPqtXWJHM6bejQhfBix2bMxfqb84LyfZkWVczCTmp7ZpDAxHcAj",
  "key8": "2vKVnMhTW1bZ4JSN6A9EanB4TJpaXmqwSkJBXAVcArFM5xe1d2i284seDhFbQae9Rqq9v9ixwoPoX1rME2u2EfdT",
  "key9": "5W2PAFW72NU69jhibeJtYx9oV28i8brFN46iRJxcKMjeSAb241FHtBt9eAw5qBv2sqfLkUdzz5Xiezeb9jA2Ajp2",
  "key10": "f2nyr7MaDk9QhS7DE9Z5RWKtmXDDaprcoECD7GiJvQDnSNenCDXp72JSXiNwmLWCskhnLpDiwXn5TCPsG8Ds48T",
  "key11": "5E65364qK82mG9Bpg9BdNYNJXmzn1Vin6DFnzWER6i4RUmXVC5dbEb9vHEyfaedz4zsKr3Doxy972Ep7fJHdnw1i",
  "key12": "4VDJdvF6YTpr3yyn11scUhspTBHYL5XHmoZ16ysM4iDvhPMvuAPts3KeSM4EXnzszXd32VGsPAHBeuUbaQ8DftXW",
  "key13": "2ntUPKtz6sTJX6uXL3U6jkNVjj3FxqvqnbrKeYGZixuRW94w2mMBGKE4uwRcDEncoc5rQqr9pwwcQHjaSnzvsYpn",
  "key14": "5yjWsHZN47fzwaxmLyaiYGugkT4c25QQAAWxYtZsAprhyMPoxNZ4g2y7gzWjyC4x2oGFatAD1xx2b4siYc4PZcbT",
  "key15": "2XZjc2NCjAwbzVQrZ9Fvs4nGhBaCdHcsjT5UixyKy9bFYdaEvKsEEenELc3eemZknQPTUAPyp5c3Esrwu3qcuhbu",
  "key16": "3VCVLP8QPD4kAsJSdVoTNnDN5Pugonnp8ANtb4zN8P3JCC8JBoe32ZWWZZxh3RGq6fwwiAWtj8z2L3nj15sHUY4y",
  "key17": "5ebawNKGUNG3SkgStw3mKLL4qHY56VYJ2vwS8zWj7rvQaVwJrhL7pqP8PoJHCs6ZeC4vCKZs5dDjwnKQT4dHQZuE",
  "key18": "2vAF7oHDg4LsHRvLdG3verfRpwXMgNNroepmTTBkVrR9Rp9wwk7uBGFLvXPvytdvUSgt7PxJ2n2GFVD4ez45f5Ns",
  "key19": "5BKw4i6zTkXi31Jp9BRfbYEK7Dn4QYKyv1YFhZX6HxZiBcnixnzZj5XL8knjU7ZaYboEVCEAbUz6ze1rTdNU9TSi",
  "key20": "4vMJUK2wpBivYPgYMo6WyCivMdgGaXRr79WLX6nknAj9kYe5My1pt2pdiTgrfLf3uEQDvcWp5zC1fLDxRJb7bwtJ",
  "key21": "5RdBgjtFKBcvGD886ynManZvFMrzc1QMeZbYE9GB15HQJNfo1F986sXit4aMjWGtF1sutyUtD7jvHtFYoyBb6Sxu",
  "key22": "LuNEhK6vmTww86bjfCrZv5DVZcz9CCS3jv31ui1RBpJeq5kwwRjZoxGs28yx6BsRzvEh7kjbZEje8nTeQBJRQM6",
  "key23": "3eTiCVE4r5q3wR8B74YPcvtHLHQsJXFWyk97B3jvm6RDrA5PajtypLV7s9j3K1MMwNXiWevRFVnjxAJrcgcEYryu",
  "key24": "2mtSe3Nkg1mpym1tTmnGQ2FZTaNjWvtYyWuYDHA7YAvkyd24Xy1UuNp5DFjt38CSkzLcgfdLELJgvQPFFqc8xo1P",
  "key25": "2LQSDCqygyMvbMeVcAp1NoaGsoTnQpHNa9rvntTr2V55D4opNK3wLbLw51tinWbn9CsqekjCrtYZMvVWMpTbbWQ1"
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
