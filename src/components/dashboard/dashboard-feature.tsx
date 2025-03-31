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
    "48RhQHBE5rH3Pwde78yxHH4NnCxgRugGSXph5yz8ck99tQieD8BHSjmEwwMKA8LMgFHXHqTMhQwsrtWemzABkarU"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5gxEjQyGaCn4kqXHtYuXY9iLHjJW2pGkrf7ZjNwy8NrgeacyDgtDdYWYsg37xf4TWnFtcHARhqLkRmbk5A4ihBKV",
  "decoyKey1": "41yv1DbBwWR1fH7WEYA6kQHbDL6XArUvSYd71UYgNvSMLKNh3DwscV9z6zATVZLBRcbRacXvyCUp9XxX2cj7WVUa",
  "decoyKey2": "3VDfgWKcmNxEJjRY4sHy7ifyvjQyhxgzGrjzoyZBJ3GqG7N8nVB6LKJaEuswARyxztE1NwGiEfk8wwHTT7UfDJbh",
  "decoyKey3": "32weiE8Ck5FrrUJXvqorffr2wQsmoFGF6Rue98h3Wj3485bqUNoTv1Bh9e49JDL5MFia1rJAuBQuYSqhZkzykGZk",
  "decoyKey4": "3KF1H2cucNBJ755pChkmyCBgKJASebgPtDGqd1VHdza1F625xCuALLfpMmP7ECn6YQcvnbFNrTbRZjEhowAVRQrc",
  "decoyKey5": "FfbHM5Y1Yn5ULNzYUxaakmAwoqcFQ469nYv2Mu6EJ41ojTbcqo7MhC4ZUyvTJxftMSJDNM6pcAY1stxkD4stwF6",
  "decoyKey6": "bJCqFTEQ2bfkm3Tn5WHr9vhKrpJMnfrzN1TYBEhN35yBqB1A7BPJ6k1nEnRPejSj5jY5EX6Wau2QF76m7QQowW1",
  "decoyKey7": "2XhUEu9Bw9QM4yqaukcWwvtvReMymxQ9a5yWV5vTHtW3ybhZURd5wg1DidbdDeVCYKj99reCgQdFnq5rYCU5NQqN",
  "decoyKey8": "GPTruDKB9KoqeX9tyiD81vFTqnKUrrRBXkFKZdwsp9uEteg2thJye7WFhgVTXpmusGXb3KJ1EKZd1ctRsXbcBor",
  "decoyKey9": "5NkdEMLP1iaDFUUBCpumPaZXTu3ooNeEwqpLbjGiMVpyrng6xgmFQDaU6zbsve71WD85s6VYatcSRzQQMUyNbEoS",
  "decoyKey10": "4CxWz4HtNQeHEVMm1CABF6d5FFRESYUVRME86MYr54YDEt2R8386rzjAaCJWVhG5YaNADxPpLj3R4VsfvRmHk7ZH",
  "decoyKey11": "5QyrqmDcDUQ2iqCsBovGuXvoep9bt7B7Ttk43t7qpyhw56b2Ygza9jVYFhgPWH1hbREkupvxPGQTcnXQ5chWNVpj",
  "decoyKey12": "5GPXwraePHACigtMh9RZzqSMiFw3QmgUv7yYbtZKsg2nKLUpWswHqR6FkkB8r9Q89gJ7CZD8RHZr4eRLtrkrwdtK",
  "decoyKey13": "62kQqU1bR474ToYBdw9JVK81Bkga6zdNiNDac3Kb9w9c3JVkHj23UaZatrNYjmQibNwtn5mwCdek1KNMXoDmFGw6",
  "decoyKey14": "5EhQZkbNVqCGLnwNgd9CDzZkx2nAdUaDx6dnfdwrbqscfkT7HXvCZLkRPYoE3XjPQucusLTKNrJ8za32DHRWdj8f",
  "decoyKey15": "49JvRV6TVpjMRh3FmtrZ5tVRzNYHVCpUdLTe33YexXp73xddc8oTSK5xjMitU6jk9KWJP6K6LZCL67knzaHAMsp9",
  "decoyKey16": "3mmMxqjnPAuJqKAEDcU1SeeoUQ5vxUuLyrguRV3ReRvpBUJxPCc6J1JZ7ZUVBoPYn5rQXQzc13Sdu32m8xHT8cHb",
  "decoyKey17": "23HP1RfYWnKaFn7XJFc6u3SkYXhgdGMVM3FH9pynfukKTZfUjwSWVfyoPkJhqfXdDcyuhKN87k8foX4eTf1pgdD9",
  "decoyKey18": "6282GX7pzc1cgkQL6WxY1N2owjSUcatacyk6mhFt8PPVwFmBfzjzBCH67xVFyxU5fWkdr8v8xGX65P16MoVsqzDU",
  "decoyKey19": "2DBrLPtCAe6RYwn14UkwdHEZRhcwS6bjXacdNq99HznJHUmHEv4N3ty5YUJ2QkfPE8wZUWnYFCTAM89BngzXybs7",
  "decoyKey20": "54Ck9Kv2Yr5frSeHaeEVTwcjGn8oXgSUGb9QrmW5k9MZcxzzEdyM4dFhQVWD6NhghKNYfcL4siEUq9meDV8gR9PY",
  "decoyKey21": "5nyArkYPgu7EXWHSA625A4EQoz5SET2Qj7VkaKwTuqu3nC8ZLvFRzybWxiwmFMcDiYMbBq8o4cr3EreuFyvGUq5t",
  "decoyKey22": "2mHALBQ1hPK2UkaTE3NzZj2dxACPPFZWBVY3s321ubPjK2yBPXSGAcFFK5wtpwTkjN84YYkASUcUQD5ZCCyDR5ef",
  "decoyKey23": "4dgivMmMmniK69zjpnHXurnvcwyzWF9UUGzvxsZMr2jyynAQhMMeMJMNcZkQpVT7MJP9XEcHCS8bFzwdHJ2Q7Q4D",
  "decoyKey24": "3QhVveiZoiVPa73KxyJyTU1dpMWAvX2z4xieXwdnziP8ntCY7wW6xtmUaBf1jZpeFhaFLth58Y4gZ5rXxsAAXkTj",
  "decoyKey25": "4h7wwFEttwd5j618jAqyCM8Uj47wVCMYAFxN2A1Nt8sTLv2iJvQv9CEvtm3bGxfvSVvJg16xCzF911mmSfVSAfs",
  "decoyKey26": "Fqi2nomuAxgia7sRr9AcZH8LGnm92ETqo5L6hnWUcQXtJ7hhtDMcUWc2FkRJTeh3kuBU1UF6tWqwdxyDfC1zsBt",
  "decoyKey27": "3588rUTXpgZRxtNokZi89W9SAkJmrXLA1nT7JTAV2Xg69tHeCV2o4UvcGWiJo2CZAeB3yRLDVxmhY1zH9PYMZYw",
  "decoyKey28": "4fuUgqs1JsjEyPExpSfkoF5GtfJ3H14kVAobCg477RSoG8ychDRt5GKiybbYTkz4z36babvtf7eHZUcvpZQioSL9",
  "decoyKey29": "gapv1kLk7Lb1JnFvBjBcAHS2KCEW87HzC9xHRk772Qrz2tVcf1nqjfK12vfr5avHGpdwvDmMFex8Ge2tbmG13w8",
  "decoyKey30": "5UUkgmXDrTuMvPMoVXxKTkYNvFavfboXDj2jFcy3uj4CLtwqyZKU89HuUwQ6JN3LZeahLGL8eBDk2PjRBqfVcnss",
  "decoyKey31": "5t3kejRHUpAHeTie8QNPzyNy18WLJmzfYuDGtzoFdrS5bR7vCMmBnBBfxxNsF96HJKQt7gtSyWcm2sjt28xkkwr4",
  "decoyKey32": "28d1tFA4UG3bF4LfabEW62rgC4Yw61dZXoeM51zX79gWsSK2fPujmjbK4J9Qx6A93P7KpwDXCBHb4bVYwG71aDRY",
  "decoyKey33": "62TCkyyp38UDoF3LeR6N5a5UWMac6Bmdw58ww81FHqodVBPFDtay3tdbj52VZBWcjedoeezorv9WgAeu4gAqFgBs",
  "decoyKey34": "okYWCyTB92x3wrpFtuZHk7kx3aTwQezDWdWkMsMyvhVatYyJbtDxqL4dUj5LvEo9KvJUVWqYwon2DKuAYEdTUoT",
  "decoyKey35": "22CsqU4La2GWFUwcKtYCtd45E6HvoGdZ3Qo69p9YnZRdsp2d6XX5MLtQd7oE3rtrRtMNn1vQ7AGKoYaswzoG1wjx",
  "decoyKey36": "376YaVrJvgjVHiKC7pbsAxdWhy64NHZyqDqL4XK3Ad6DGhEREXooADRdVUmkD4eyudSjani8Cm2euiftpb5dCTHL",
  "decoyKey37": "5MAdwvNZSd6EJJEXN73oJcrvrGW4Lay7pRXEVXouSLgtv9NniezxCcjb2BEyrY2HE8uz3LMnYgDQMu1YTD1AVewQ"
};
// DECOY_KEYS_END
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