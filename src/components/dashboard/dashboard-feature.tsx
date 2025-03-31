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
    "2SPMrRgQQM7qXtvkM8kaMu2JPnswmKUvpmEqv7sPXiT9Wbn6jgjezA2NU5EYa2NLhS7SfjKYZHVZu47DQNCSPz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sfiZAGJXug3jaFFfDRpnCbuqPPXmv26xW7wvfGFcyptQwnA2kD3vj3AEMmvLibzLJfdyAVquCE5q91esdEuBp6",
  "key1": "5Ci6GgR1CshPjUkG1erE9QwkJh54wgGHyUXKzH9D4MtzivSto8BdWxhugY5SdEVEFKeKLxanNzmh3pUhy8yuYJCw",
  "key2": "kWCv9zfrueiTYGhXUHG6g8QrpG9DPrhtEt7iFHUjtDvTypgTN3jgwb3pRqxoEQpefcQyTNjpynZhe5BcbNjgCfD",
  "key3": "3GwfAJjVsT7yV6tnruTAaNNWwUzAm5T4N5EosKTphvZnHAhXFeF2aBWzE635UVDrKaQybjVT3DxeH41Hc4E6CrZH",
  "key4": "5qUjnV2faNemP8ocwdng5cpVRsVPgxxkJ7sQCU2LmhnptHJArf1CJCSvR65uSiAHfgvUNz1piZiyDTJK5kiQhU81",
  "key5": "4efevNzKLFbG3jsxEwVkEUSSzSTusW5pjgLbzdgJopgN7ao6NryKLpXbWaWigJzfiv3pHGEACfGLL2YseaHTDpFR",
  "key6": "R7RD6Bpj3y8b7gP3eUZ97DdpkYtkbCCLwCy1LBUziZEfv4NJREenVscZxW9NaHERe4mdPvNiU1Ctob3qZk3AuZ8",
  "key7": "429gDYRwM8bXo4A1jvWgBhJ4URSjJC1h1mJ3Prb8v8kfwvgPX64r1hQU7jquniKpjd83PCx6maWqripkNsHUSt4H",
  "key8": "44rMGSfAp1ZnqzZhGcUjNtyRpubvTmWKt2WsUS8eamqfFDXrMVQD4MffPqDYoJKdJY8tdTvSnctzUD3R1JA3weJa",
  "key9": "36mLhrxHDkbbCXWdR3Ea14fKH4Ffq6A2AMF1KBB4gaJ87jFAg1XYNgGbtnYgFaRXjC63gWPUhgQmRCjPSkwPYHmf",
  "key10": "5x93Vx7u8u5eimJizUuqBssNJfPxq9MdeSCTsArQy5TvipQsJd9GQARrxCLtAPWZBQwiagCikYymgXkvPHSF4d2J",
  "key11": "2AxtrbQazf3zpPgwoY2kszt9u44bRduTiX29oK1SDXDQxYJF2BKYMtvdp9kasVP5QdTbhjvdWu8ZZHmJbiUaWpBV",
  "key12": "5tCGvi6nkpo1rdwovpbCdgZs9BqteXkP2DmZi4mYEPGmtaYdWqpox6GKVKGBgSqUyqABY96qGTWrC29jMkrdmEF3",
  "key13": "3idHjAYAfuk6pALuqXb2GgdrdxgMTKb2RgcxZf6BdTeH1EFpw2Jth7GGrEGxMZQiCWutBnY8oBJhGBuHFg93yT78",
  "key14": "5yrMgExadt5WxFdH7iQX5gSkaRyU6RtTaKLJg78m2CCspciMX79CmS7L8aY7vHf8WkKc4mxiLgqJ8LdDPpgSodSS",
  "key15": "3Nhteo9kgMrG2yVvzRPgTw34KaqZN42x9sJqPAwdfKCNXt4E1HjYcdD2HAji3FnQe4xCiafuni1ZRbcrHbJ2ALDk",
  "key16": "4AjaTkW2Hhmp7X2Af6Wa3NUUpGio41MhPP7UZd14HiNCJgDsDZeH6xvWTfjdPT1Zvr8hfbmjBvWEMthUnqpeFatA",
  "key17": "CMvwdAQAsJxo7mD4JxCRoC3qMim4opmZ72pGTUVZk7eDEEXh7uAEmnUaf9hi8yCAD8kswPzSVhUXZErgL6RycJ3",
  "key18": "2c8tGrDi4covsLaWWu5XNwnEVgZt8eWhGeYem7cGKk1FfvjcEWLbH6D21nAPnymSXBucBJDyq5z7sUTQ8P4KipJD",
  "key19": "3vDCSYprRFH88HYGcos2eYoURaQwTyNfshjScd6abbBuRmidCcPe21qEbnmXAGBL1DtF5ULHxeJSaVze2yTeWiHC",
  "key20": "3qqjX5vSLnyf1Cf4CBrY4vo9n48bFUxpnPpwfGPkrRBSCBEa5qthMUksB2voHZ9ahW8JL3QMNYQsTb9Kc4xbr7Kc",
  "key21": "2keeFv5p1Np1pGpobeSvADWvV3FxhNoztWvsUKFoGrd94Z3GXR6CYLnEAPKg44ZBY62AzyBENHzrNfEAzt2Fihq4",
  "key22": "4q91oigzTcghkP6pHv69km8RJVadFJAogBU4GHSPZ1idCaR88JmqecgTqHD3d9eZnf7tUmUskkGwZMj2VV8ZZhBU",
  "key23": "38975SPbnDZS5cMGF81FG63aq6A5THGuHi9QryeC9mtD6NMLDGxYBBk9z7e9AXncn9mYXN9T4rJZ18Dt5HkEnhC5",
  "key24": "2MLz7JhjbeZQbA17goxkAi35ewB9zwNktYxrMkkvPupbWkkJ666eJYugEAtowQ7YSnm6CE6S7wQqhe9yPH6x5Wec",
  "key25": "UkvyKw9Xx7UymwYekKrqQF1dWn4YdLM84TEPFTZgngomRip6WWHop8S7z1VibwWZdUGUpU212SY4e7awbdssEAb",
  "key26": "bKKJvEw6ZPRErVZrQYz262yuGAEHK2MoxPG7HJmQgrNPHbaraYVo9Uv4Ecmk54yDHiQp3FEy5zQGXKoRsZwyiNF"
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
