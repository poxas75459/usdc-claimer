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
    "3w5WPKzgvbCEHRFEp5UNb8kvX5CGciuTExbFc8WhzXRc8ncMLMgS1NT67NC7Gsy5A8oe1jv7A54vPjtek2CYGLKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oocy1rm3PWRSZvrBaud3MnC8GBJP3NtTYLANPfsYQw4Zw2jSqUgM2vsE4Z6nqV5fg459JSfszJuE7XvkGMh2YAh",
  "key1": "5d8LiYN4v3nZfGYa2rR6zxAVSqgj1D41PfwqLSzf4Ldbxr6rnj3QF8XisCh3Qc4sLseHtotYXK6Do36pgQgsXoDw",
  "key2": "3viae5ErT2ogRXHH6yHH7Qgm43ysa2ZJ2xjvUSiiuyxvM3kyyJFoZcGn8KHz7cyvRGcU2tFdFrpCrwxhVZhVYN6Z",
  "key3": "4kN7gmK7QCp82DT3hHfjKSycpnoEoejRemoptBrdpNheTCeP7yqtigdKtBWjacA3EPEBbDHc76S8EQsY7zhDHxCs",
  "key4": "2gB1218sFzNAYxt87bkW4PQCgbDawEhEPW76hs9EM2ptkuBH3dymWyxcQsPKsBgmg1fZSt4e2dzbWv9iVmPdAmFM",
  "key5": "3caKsfyPWG7VHaHERWCG6YGxzXLoqVG2qASKrKNk2dFaVxGL8Lk1JT8j7TVgPuWPzdp9DRMcbZpNPY1rYhZ45uNY",
  "key6": "NLWJg4aFZkf64Jkgzp9pkyozZ9HB6JrTiccnzNcSMxk43WUmxWQEAFJ9ieXVx2aeCSPPtZPPFJMcNmMEjfzbPpJ",
  "key7": "28CoeRM4DB1dMcAJQNy6stcq9jH6aUSFmqQHhaS2p1ba4LJLkVEqkqgc9HFtXG9FUTWDxvFFyfrzs1omSQmtNNky",
  "key8": "2uTjtTu4Wt8SkZchNUcAPtRUJWGufpvB5JPbjntSWEGsU7yGQ4NL5cZ17r4ZwMVvd8qso9a4FvcGn7A3qxoEixt2",
  "key9": "229s7trFahFsm8kstP6MJu2GcVU5JsKPwG3py15u5Bn8vidiMZPwsLgMHoHYLDhdsLQTbhi5SxPd6PF1wkLTp4H7",
  "key10": "4aBNuXnCFLcWbsFfgLU4U2cXfhtJkoggpy344i4dPrvdAEAR7Sifx8bYBLwd9cp2GhiybEHwcAA1saTSpHB1pt9r",
  "key11": "2bBaAMnDdZ19zk1rMhzPGNvcLEPVobxBttJLGEuAWN4un8NXLmJsCQQwtMQcHp9Eh4mFGgfgGW3TqFKi2EY1SAHE",
  "key12": "3rgxBaDrxpGD7x3ouxbDE8rbWdQvtuDqQ8KaPnHTHecG6JXgdRTToZ1JeAMGVn4V6u7RJAHLnayUbAV4Kv6cPunJ",
  "key13": "2S6HAsnjDuY3ZGanMTBwqfst13jxQ9Pyr59iyVBdpnYPGJrw79dfYqy2M9VQVkespT7DVKX2HqmjQ5MHtvv4yxsf",
  "key14": "4P2dsoKZqtbhjLQDP2DTetDvFmma9vjKh4de9yq7Yg3gXReEVxo4gq5Qgns8WkH2Estvy9k44nR8dELQ6dij3sZK",
  "key15": "4wS8StL4u7FXkA9yNZ3hueiJcNsycqC4Vj3tfkKW4JCECvv3iFrZS2XqFTWmQ5fanTQ4idmjjFKdrb7DK9LrrMHg",
  "key16": "2VBxULwXkqkJKgwWk18MRQz2pLqC2mAM1ya5wMcVTBYHGZ2K1QVUNeCN9KyGRULYEPGv3ezpEy2JtNaDKWyqsiG4",
  "key17": "2XJ9NHQQ97Fs4p4LbCbFuKN4AXHDTmhuaTwmF8ytmKENZzBtuBC9gUWMJTxGfuFm6xygZuX2s822DRosmKZd44LX",
  "key18": "whSgiSdtiuEdwg1NH8LcvREJN3NTCbeBVVPxvPHJumEZNVTpDjimLeZJK5CRnNH6F3oxLoS5yRHeXVig6kKT575",
  "key19": "3bMoMQ7gjhJuAj7BjBJ9FoiGFpjydc6eh7TtiHPSqXAEYTm8DmHkhqaGxBPWmHp3tRjWvNMXZt778kmD5iXFRV4Y",
  "key20": "2R5vRpzf9oog1VFzPXodU1uAFyDXmSdFXxmyVrJJZgA762AZ9caHcM1VUo5cQun6QSfZUATMds4VK3o1a6McWmT7",
  "key21": "4Rm99YmYZJ4auhenvDYdDhyeW5JzWpuZ6SwE2N86KX2ocHPm9KDDBGk74zx9LEuQUrR5GP1CJSb1sq54Y1CtGc79",
  "key22": "LmvKAkPvAKPQYntXswDAiZEUZqSQWKZk68fZCaWn1pEHXMHAxvwYaqwZMrogfMAzrvEqfMoa8jXpY28oi7aVoeW",
  "key23": "2gdWuPXevbDJCUKpKN8u8SWu5pRgAc7Drhb5Ncgm4oHnSxFFyXY9EPU3U8HBdcHLG9DBjmddBFYQ2P5ifCvwREEL",
  "key24": "3QrkDeuwmD1Wu9dsEYXiaefg4jSrvpguGGWjWECyB29fW1UhoWpnho2VYCNeEcEzp2NGxYZLAF8uzMfeSSLy4zph",
  "key25": "3JFHfRR5mEjcWQGaDB2fPLERh9iBD5w4resUWwx6iQmEU9SEDdcbNqCdjSkvtnn4SwggEAUoNazTveBVPJ9RqAsy",
  "key26": "3LEtXy6sh76so2PXnohd1dUk9HG8UzpDvvzHYeS5CuWwePyzb6Boh5tFJB2TP88rzHsHUmJSQVVJobLnSe3ZeNe9",
  "key27": "4k8xL1xgc6d6QkMpv3HKqP33cLTHeUjGBbg7FreSt6ExDM3VsL3HZH22nGw5mGCWFJhquy1z5LS3uFjUghHp58B1",
  "key28": "492pB2shSQ8xzPcjgrganQpbZkmYKPGUCv8UMjXnCANA4HSguTAQC9L2opi9CjioLDWozY3wADD7nGynVTX5abvg",
  "key29": "65m2rXtrmJoHiEYiova5NEcg7mzDvjDCdGCVgWsVfDm2aq7QvYzVnQPHQ3jwhCRSY3q1BZWqvQ7xPLm4JEYv99Bm",
  "key30": "3K6qPzN2ZgE6tVbhmTW9u2TExYiSzW3YpRuMdEXXXnDccL6TP5kHysBtg9XnuLKW3gDRyuWAtsJ6abL95LAzsMv1",
  "key31": "3Ce61WLvo9gRa833dh5NaL3EMHXz98xs6V5rAC76oVuk7MQXwhP4F4YKeWqbgJKVo6M6SC5vNJ26EmBzoA7hMrMa",
  "key32": "2R6Ko7HuCnsPkttF51KfsJ6AZxy66vWBrc4KyFnAEj4joT3rhqw1NXmKG9vdXWqM9r7FJo15GC1LrwaRdMLFsMjn",
  "key33": "9JosLuFuiQR1FoVygsQqe2ncKRu3rELmNbxwMu95w7GWr1HKVxvKRvQy88L57yiJMV5K3y4Mfbuywh6dWvmcQWp",
  "key34": "bGzXZFoTB2ZWdvAMfPeep63sYb4AQNd92DJ72uvAPGePoV7rWhYsQkB6FzsSQFoLiHAS9Gi8wiD3szW72qAA3pc",
  "key35": "43zq9e2qnNrtZLumXNvTFgtsUhiuVTcxbiVUCU5PVRwdghaLXiaLRP6G7hesGSpiBENUSQqKP8TZnK587Wt5KKiA",
  "key36": "4BjPKYpjzeV6XBHfp3nnKRjYkoRrTntHuQnRg4V8vBzSD3ckfRGgQWWmm2p9A7XKCkEnVoKkjB2fkmugkqgQrCMD",
  "key37": "5JEYS7XKKwaP69J7BCByTNq5n6Kbf4gPXZEAnQTvvNVbVasHRoaZFXDB7WW9nSVT3Vy2a4Ex2GtrqssxRp84CbmY",
  "key38": "2jJ8h22rDSwZCebhy3czmqtRQ6vHuGxdyqqo8YiE7MLfUbGRfubXyZ9dkgBB1FF4n65j75XAjG62AqjQc6bfzdZa",
  "key39": "2Ei1Gge4CkWrKLyofaCCRzz442BZtzaUts8JHJV1H4biz1J6hN2P1SqWogFhp5sPiKCs2cNp4N7dgHSvHzGnSwro"
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
