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
    "128Rq3CnGgbJSAtXUYYW2ESY1iynHnoaYHFu1YZyMPb5uwBVVPnPvwP4BeS3qa6uTxbt4oo77CuMxEyjP5UMrrvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M6DrUabc1GnukbRCeTTCKNc7c39V8EFPwvFpJ93vLJ7tgVfa4SL74J2YVt7bHcnnrK5gUUAswcBJTzTBoHGQn3j",
  "key1": "3zaThUL5cHQmNFPR337SGLtrwQ9wHGyzFWLgqZkCAzrQxVuSSh4yStSBYkpTtBmpbkKpefuxJsJCLfppHQbVtD6z",
  "key2": "3UvR9XvHwPiTWQArhcm9EBjMEXAwPZLPzSDij4M7ttriowEsM1aDzhXNoMWwe9hTEgACtKDq8FT9yUivGtPcarGa",
  "key3": "2yVcXcTeAd2PbC3npWnTXPtTJ241DCiY48PAvVZD3YozTsTfoWA1J3nJBD1rrRxRtQTvYRWaNan15HBrFubRF8Xc",
  "key4": "4HkDCBDaW9r6xWdym352KT3hRJcA7LFwzJUN6osvs3gfEHyUG52khPJhmzeYpagdKaigJ4EoZes9QJo3LsfMsEx5",
  "key5": "5AnKnG3G3dnWMnZjfGsrUc1GXTBrdNT9yfjnQPTxtgxSPiNd2879d5RPa3qEp8VxPaXZCKcbsB3oV8pbXjbHxxAb",
  "key6": "541DaQSzJSxrPR4MgdrKaDNee3mBE3xgq7E8M56NKpCiSUCh3n6rzz1eLNioFckiWmvbTm9Z8ruwTr6cDA53JCP4",
  "key7": "2viLM9Ahgi7xErJe83FVCM6Le3hHtDQTRtZskD55zD6vfBmf8oUK4bfQ4HMGrjKpAfzLgSbYMNjKk8zCpRrnCjrS",
  "key8": "5c6kTmKEhcWoagMyFpTkPMKy5GhrHoHHpxNReru8iQkEzTu8tvGDPoWGdBcSHV4nxAx3E7dCFejUCbHe4d7pQUS1",
  "key9": "52JxYWsrwKQwV181bB8a8p5YHTz78PN5hCSrQxo5tLqSNsKV9XtpMXbqxyXWKqMcsSK5qcHb2bzM8khHzV8BwYbR",
  "key10": "4mNZNQDpM5q1UGop6BP8563BaiH5KLK8qC8HderkFkhqzDGFKLa5QmPUvEvCKX8S7h3zZ4p1A4QPp27n12CEP255",
  "key11": "3rZk5CjVnc16HyMAbR7DFz2c1AzFywmXmvteT6ybf46PcHbs84SHunSRuhB5TRiwLzUJVXhYfSxGk6exkiRrGavd",
  "key12": "2dCBojywxTpVBwpj4YjDXQmEvtbH2HURL55TsBALUhJs22SgAcK4LtgLBEuiUtT4NCREmbbAro1FbQ3YdHt2jtK7",
  "key13": "16dAgPZSwxTfNa1nFjxMJEPUxroQEFZohmcSSomPbKFFUibHMR6GzjhSrusFqbafjfTYL6R2zSWFcevXtP5CuhE",
  "key14": "6qPCjvJD2JuF4MDURsqVP5nkRstxxpiR9XaqvS4tx8Lej74LNb9XXDeFES7PpNzctsUsqLBTMbmvr9UM1FCoFmP",
  "key15": "TqjD7fbg8eR1L8sciTJT71qDDaGB5rie9ULgKYEVN9AVTjqzNndkMAf6rqswavh1EDchL5CsbCmRduMLef6bbQm",
  "key16": "3PCt3wy8xPcXd26MjDfBYFAkQqk1zFAdzPTuAemPTFPwQfEN6Qgg1mAGYrACM8hj8JKoUSDsX96JBDPD2MSvytwx",
  "key17": "4uRUZt8pERjtnznQDS6XnQiTFoH95ouakmmkVQrhVknJ3UBLnjfeotLR4RSsYyNrmfPRzFVrJbNenkvxDVZakw8Y",
  "key18": "HoobXmnLLh99GV4jGkVJQ6H9mpbQpFZ5x6g4yq2ZPPPQMjBxB8NQzPxTcLQ2xkg8fqm9WwwAERcqBZJK2nnXTbr",
  "key19": "5w6nH1sK7bG82E9avGEM1rz8DX4AVatdgeofkdrL31zb4duc4p4M87j6is4do7CsHRemFfxfbpC7R8C6xjp3co5a",
  "key20": "2u93jo6nDSgFVfRRuxPRmfgMNmfCL7YsKzUsg6smA7x9X3mubwHgoEtC3KFkRR1iQjVY4JoGiQL2tWNQa9iqeUVY",
  "key21": "2ycWVy1aVnr5hA6BnspLXEe5xKusvfjyS2MmkZBDeVeYRntBYuF965hJQ8fzzm7VGgY33wU2arAUQkwKnLLG7Zau",
  "key22": "9Dx6Vnc9cqCrVEHTKCKuCLpXj1CDgdZXiFd5UYdp3CXKp8TUppCgWdPAHfKkgWzhZASnd9tvqvHnpGzbFggxey9",
  "key23": "4SdLq37LnNo77BRWrpskeEDkTRyLxShsdcgQEQbzZKNyqTM7iQcW4DPtgYzbkC4yL6aU8cWZZZikNgZyVA5YzKWR",
  "key24": "4eWnLNR8pMuk1nYDg6XMZx1UBK1Yzw2X9148odYuRtu8DrFXxhTNCtn6baVAC63ixRkxYsVJqTCFiZnsxtM8XEjz",
  "key25": "4zyYX9yYaXGz1JxnA3DWtPULe8ATikvWr56mtxGHkUjYXPscR7fa4TRWKRqbrJLpzNrfu9mhYjmyCp1dTanKDi9r",
  "key26": "5S5Y4qHUCnpfYoXxDGRikNbpF5cRMUmsMUNwtWq7sHTHmEKB9YiXthRdiHuh9v7oJb2XdBqwEozgLBh7fdKpKBhk",
  "key27": "2zsxMdmZkss6NRcVP2mkzbEJKMEQJe8yC8YpLvaF2E8xKXN4UCHFCQesMPZUbcCzzSX26EHLopVJM3cwZqg2gLSU",
  "key28": "5mTN2ZAbqkU8ERqM2gJj3wMwovcgP9eo22P2KUsA172yjD74Q5hN4nno2whBhPwoTWTd5DhrQ92SrJ5TENZ9xWJN",
  "key29": "31qe2STdAEvLnnZbPzCWKGFkimXVJiNEuKZyrM83t5nptji58jwiD29Ny6hgeWoJdTSbUXT15p1DiqtyrNHWDtVi",
  "key30": "56aBXCaLDjtsHy4WXVwjGJTh6zibdy9x562XMeCmJ6TFy3vmWyhLTWLssX4KAxdBqneBp4TADCSBiJHF3mYzXhHq"
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
