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
    "ghVE8iafR5tXomeGXB5a4ZDa37CHekuW9fvjdhn49Ua28HsxPg6eoWiCpgsNSMnZTyoWKgSB95WMELaSgaVazsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xcKcBQYJ7Nn3XSyG8TbEy7Fkm2pZz3GLSYpStpQh3vzwVnZYoFog3hFxyMcHA1aEDwFWbSWfYPCeqdJMsyhjNuj",
  "key1": "3h1G8Goyd7q7BJdPUDdGpSpe4S2U7VXPJJpzxMg9YD6fobVq9EHxCiiE3Q1UqeV5WkNkTKNu28Af6hdBM2pr7Dcs",
  "key2": "3NyLn248Wy4AbbZbi2fGu6EyeEUwiUkMk8f1BFatkQfoHdy1syy7vJUYbrAiHYmisoyVX9BaG6FUWoUohzByXes5",
  "key3": "VNm2s6N9B2iiXmcAxT2x9PkJKdYoczKpGzVDLjAovGwe5x6xD6oAsmyGXzUDZWcd63syR1c18SmDQoVpwt5pTUZ",
  "key4": "2c9u5oafQjfXjcFtSXNq6UgG9MLpibUtYn22b9QTKyyPQr6FBZBJG2yGaWMBfZeSaDp6HfKTjhyZ6XExYckok9T6",
  "key5": "59Yf5FmVWuwBWsWXDPYTAgLBcnejtJWGgnzm9RN51dMpNqVEjdzd4ezo6fiNL7HDPmEci65QavkjWHyR9QEw3TGt",
  "key6": "3Ecjj35zksix3ouwiPPuRKfwo7PPaRaHTCh16De1DdryUbkoV9REiidDsrPELV5WuEEpgr4udSA93Y2fHnzHSxBq",
  "key7": "2CD57ZjGdYhw5tB6cBixUS1PfqJzeese2FSJzaNgfiydGvnq5f1cR62V3pTeBEjCN7kKKkaQterwXnAtT63X75E9",
  "key8": "3k8citryYccvn6MmdfALEx7HbaDUfjunCRAWcPSPmsgbtBnibZXAPQxHruLJe8sWxLjwyamUFFowKGYrUyT8uVfe",
  "key9": "5dthqpw8gbFWuDYRsCBKy5Eu6w8BSY1huQKkWV4sUTQf7W2rT2LFeK32vPxE6qgoWkPdo35NZe3E2uqTno2fJVed",
  "key10": "2uhGxoSN5pPfNAaxQ2nfKTYhfWmqdnmiJ5thc5ywwmmWgMvec5Hi38sRondhvr1fgJAwDDCW3GJ9QZ3AGQvJtqyA",
  "key11": "ipW2szAbyT6wtx86uvFiETqgvrabp1K9ZS8Ef9yB594ebGA2QMGERvby1Mdb5QG4iWEj5z2St72gg3UjGS4kCu7",
  "key12": "2suGkBd43upkirpzpSiTxtyMKE8QrqCCCL6HGanAd9dteVZb6PVifmSwE8YPSWXEQAbNDVykiwYRpYi7aDxF2P7n",
  "key13": "4gMfZR9KyBc1SEZ33o3ysmmVCs6DQA3W7tvEyU5YXBETmhgjda4t1rSnRfk5Sf2xLkRrcboZAviLC1JfrFT1U98r",
  "key14": "aN1CTZgEMtD4sJXX7s9ZBCK838umBt4b3TYsmypeAvtQnDQqCvRcDL6uxvCw7R6TeWYC6pkcdVKRMXCvJgUDtTV",
  "key15": "2fucmgiCqQpfNWS5ydJ8SiJUEn3UUNG3atm5LDL8ALiMMAKZS5BXduPDgjSgzv6h4F8gemdmsppB47844CUJESjt",
  "key16": "4Q8z8uiWjFmp8hnap1gsZCe7F9oMyBiMcxurLpCL545E1Dzd3S21ymeN7C8YA3rNCNyq2XUixoux7J4G4vp16mV8",
  "key17": "5bPTFbcNUvvHt7hWKM18g6DhRpD9TjNxAtB5pe2dEev8G35iajseBRfAgN4WgABSoTDZicRUr4FLx9W42kTY8krc",
  "key18": "2Mm8s3Eoa9WD7HEMLYjt8R8Avjys63KqfptWAV4zk6ex81G9bPz3NGAkSqqGKsh91Bertnx9hWiwWD4rqxdyAmJd",
  "key19": "3XVbcuW6zfTiT6nStWXeGP27U2SecE1WyPnyXt4vKoN8YY4xAv1xjbD1ES6cqyc3ywSwqoNbdL55DfPVHMDqdh64",
  "key20": "4qSSi1aqzmUmVLcBBdRPaeqMU4AR6pLDPNyXJdtAg84nwse9fjWnUUDeRReXrW7F12x1PWA1HBKEsqscogqk6buy",
  "key21": "5dp9wsYT7bJEfUiFbeW75E8Rk6sFindTPqZ6yJdch1shY3FLxkVnXWyhv7weCm7xpQYJkDvb6d9NYfWYNzPxbYiH",
  "key22": "4UJS9wtSRhMQ2fekqbPFtnexgCoLQEPkjN5keA1ekAJ3Sdffiovv8HBSv65z4SAQiyvuF7aPqoyh3TD9RRufcTEm",
  "key23": "4HneFA39rbJTt4bh5GPMfrfPmmqLynEBKmrRttH5jdHFKD5Lx5ZZmM8BuiaYnZWxtQmc1aRkYHYetpjXUFDg1pV9",
  "key24": "2hiXhenwCesWjkUN2xr5oSvKpPfZboND6ZCATRLm3A4f2C1pKpRqkVr3KZEHaWwibPwYbHEkWLcY4jkAMgSuhZvK",
  "key25": "4CZ4g9UXDRGHCdVrNeREgJSPvpxRvt2q5zSMSc4Xqn5PWdayhopD6ZDWq5zJhR21SR9nHhmyzHgURXm9VF46rhUa",
  "key26": "5YFfvLAaugLBNt8M7NfxjBwHmy57DH1RdCxjZ8kD7yFAGhLKH4iLjb3NZupUjeQhTxzzffaWTgAZn7ucfqspgBAq",
  "key27": "h2KVgfiQ7h4fgcFFtSfwnsfF4ayXUKW2zAR1n4MffGLo2GGyeyMWeBFfLik6VBHeNtYVx32SPQtsWgkcGxkJhwz",
  "key28": "2vPnR5NQwbPWFn7euppErU8DygKeZNYxZFoN1LgbkgBdbTuB3GqH3rWngG7LAVRaSXfq7e4Pw3BUaSDy2j6QvWNa",
  "key29": "2uiqhRJeAHUrg2G1DZK1BXgmiaYzLkJneEYjvLbKNMcUefkhuV7uctA3yUjTnTHDcTBD14NtLxujNCYS1cbbq8gK",
  "key30": "25F5z8mMuq35ubimmdn3nKiKWf5b7CMeWDJaKCrBjiZDayFeRS7fEwZL8nEXLvvsVavGtYzrm5FNFPfK4ukjrbcj",
  "key31": "4AWRbwFrHUPcE7RmmSoAnTaQb2Ui5sKE6gXQzNbgLnDf2eQ2LcbB6mRsV4YHCr82hfcgbt3DaciKQojhr5kSrZbG",
  "key32": "3qiZYb9KfWDSN1H4EvURoCBVxVFwtZ328M96eF4ayKMSET8vEYpfVxdsR2wHHTFpGp6Ev6i1EuxuCf1hxoxXyV7h",
  "key33": "56vzPeu1BETzU51qX2UPynjBEqwmULSnS1aiMGhfpCewSNPWbByjSCNxoYLk7SwWcLRJ7W2pHQyTehs238Fw6Aev",
  "key34": "4tJUEJG9yjJ1iprGWiWYju1p7PPB4d95KGU8j23S28Db4mDaf5P2mYHs8A5LkPjgsuAt6V8JC1Pn3dkbHWKUhZpU"
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
