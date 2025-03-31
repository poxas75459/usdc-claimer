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
    "vMZnEPNmazv6BAMLPJCkAM6Ajx9hpEQJhGSELvqZcBgHQJ7cQpKpAX7WySHRB3Xhh9BP7W1ansDNtwFkAeBfJtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eWJYqb5JjHvrtn2qRah1P3ZyirsXBg2KvKLAN2vFSqAYnMdP7LJeUWmcj2zg8wQ21typzFLXi7vBpYS9EStLV37",
  "key1": "YNDRbCdfpKZADPCmCSUCaNAeQndX9jPQbZMjtZDgN4VkyaDjZhdm7kgsCqQqkwy5Ug7J1jkG7im3d97o7s11xGY",
  "key2": "5iLYAZCDq4pTFSakotpRjixudNdX1mGEfEMfusSxc28Gm74Au849bUjvTgWQZx6FkouevFWX1uFRFhzi22Z68wgZ",
  "key3": "5WRcJtt82WKaoCPr1EMtVuRAorQEZQpALrkEimjVSAvLRWCTqCEh1tVQxjt8W488MESTTH4BKEuot2uDZW9Z2rAZ",
  "key4": "4jK6bGTfJjD1i9xhVvk5sBTcvwbpcZcJvjBuzbH1KpGDaicQBmxeEFQdNvNNhHUTqitfek3dJgBY7ztvG2DhM9e8",
  "key5": "uDjNcSqs9DPN26ndokFxX3cAxzivaYMV9yQtj8HgRnGLeZkWL9J1WyJKZHgwDd7XPp7t1LZSRY2ec8KfMhWXx2Q",
  "key6": "5fL5D1aXvQidEqx6PpfLATDLZX4D4foFS7CJXGweuhkDUSFZRzqu3bu2V2h8yWqrzvYsgbihYrYKFrd8cui4gkBa",
  "key7": "21AoUX9UnzHDtiMQgHMP2h6cwuFK3jsSPYDiqfijq531YJoNzFvWghfnzZ5324RdWRSwmWH2dsn4ov9LzzuigDNm",
  "key8": "3yEJ1V7Ud2yhgCmZDkAtAjstqmhnKjLjbdvb5aKWxgParpV6EhzmkLT2jcNyVWLxmGVQhK8vYEVaxzynDrRtxaS9",
  "key9": "2tMcGg4WCDLxMgBf4B1jZw22r8RCWXxUdbhmVDRVbaykHT8bE9hWinUpoWPQuA3xCny84DJ8QrjGWRen4VLmrWT3",
  "key10": "2FAy7aFaYfPVS9GkmyomxEegbPrtq5nuVwTy7VRtVCU5uvAxaxe5VrMrxv3W1pcafHUGWSFzy1pQEkDpwyniuVfk",
  "key11": "2KaUdRGzdfpTmt5SgEcbq13zaDd4L14ogPE5i24gt7Q5VAUNZAb1oEb2aDxMnuxHy2mvLMU11h6kRVkbNpgpk3Yb",
  "key12": "2ct2DKkTBCVK8aVmYJeJmrGUDoLvkGfnP47rz6rCehip3LEzicXzyMyEH6Q9cKqfj8yTyD5XdVpsKYu3tHcDkGLf",
  "key13": "5C5GRgawyPsKR4ggsNofHtF5rJoskvWvkvyTrv9JGxTuWeL2BFuweA6fgTiWwNmKNypchCkarykGwFwtVLoZAGqm",
  "key14": "5WER4fYXYqgJVrjazjayZX3jRfoJaq2sJYXjWSm41nMjh2buEJexVSWKhLEEUEvwNpHdioqfWGWKMhwEdVNWBwJW",
  "key15": "SU2BChAQQhRRS7oiJMwCA5aNoXpHJ1RY7uj7AfWvbRGxoTC9jYDvXq1nXdbwfhM2P7yGA3m6uyKeW1GpXQRU2mN",
  "key16": "55wE1Wrtz5kbzzBNoeLJJ7C7pd21N2tqEvaXNAwwpiAJxQ1YFnsDeNeSVcZA2EwLsQh5mZ2hADnNivhymhchGhnq",
  "key17": "2vZdECgnUTbarooS9x7RRFZUaZr3z5mqoRFe3z4KbPxiAg4Z17FUTVf8nkc9ETp6ripNKu9B9ZgZM42cA6JaABDu",
  "key18": "4Sf9Q4QdrQVaWuMX5mFh6V9yMwtcZnKAD6bHNEv33QeDDGYSkAyfRCn6152oy9GbyZMmhQaUehNk9B49EwKM6bQg",
  "key19": "2pxez5FXKZuLq9QRohTtexpa8xvFETYKpYniAPWjjJpeGg3cAjzuHypDmZ3yEfYMTBDyZdTHuA3jEubj7evT2oV8",
  "key20": "3g47buJkztGsyyV2j61EAeseHnwsGC32Lf7L1NRz6seqJ7TqS6XUUQnEuvUetPyXTz9XpyMXv9mMFzjqVPyE9JTS",
  "key21": "4MKZ8pgQ9CMSdoB8pZvNncDj6rUuU2saknW6wvwCtefH2f73vSUbc9i2MWz4BV1uUkWhSo9EZMXGHiGx7wWTHDic",
  "key22": "NvgSd7WG8sLgxhUZs473VCGdRHY7azfAsYjWbMvzzfP2xSFvyEgj2CH3Mya5Nenurg1UewVMefe3dJbpZDeiuqT",
  "key23": "5aK84j47a3cNr83jDVgdKKew7zUkxZroU97ngWimYoz4rg2P2UeKjBPmiTEX53QWR2BZcujkfH3iU4JjKAoWqJzo",
  "key24": "5G3wNbLAs8khZXR4m36US4zmJfpkXAULVha8RzzBpRj5pvdE6HsWH8gEdXBos9GgtkVgnNrabTXiVfF3PjCKV3hj"
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
