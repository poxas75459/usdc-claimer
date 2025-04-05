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
    "62WB5cC5VYacNBpTvUMXtVck9cLhXMmaHU9bty6N2BWBGJLm3mjk4fyK5HAZguKMMZTa9FPYRBFmtj5ur9FoWWMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bP7hr2dHdE7f1WvRxx7gE5F6q5nxfj62e2yRFABmnxZT4k5vFWYnoq6LSSuomdUcUMTdqPZ1BDkSFsVX9RwK27Y",
  "key1": "2cJED7d6AW2YPTLC2V24uqp435S48PfJj4vyHcAt2ataPJRXEfXos8TycAqYuAcFu4mnA2s8QtNzxA8kyjs2a6gt",
  "key2": "4d9eMkU8ehX7y2DdzAU4AKvHvUSExWF2Vf3HnB1mu82K5zT6M9WFLv9SZtcb1ZXsS89yWeFsroFM9yWvjdmxZe9H",
  "key3": "5AE3mVCU6rSPmBemsG6XBL9hRfAzFVLxC3qvNJmjnxRfEGqU3PkV9A8FLizAKrmyEbMmADR5SAPTJQjvu58c5hHJ",
  "key4": "57UfLyj8riEaVKN1yHCRQ9tYvKPczbebKkv18ZoLRScBQ2Cip6jGvpNJHGfZdy56FziPUWJ5NLsgmHeHosxgTBS9",
  "key5": "7phqwzCifJJfjYY7kptsTkr1oMAn9XKdHTi4PskAQoqtynnmL6WZFyvmHBXE2uzJimCARQsBEPmoKBE36cmp5rJ",
  "key6": "ud12vS9gYK8f7ainxmgfG3wcAEFLvfhtCrVFuwK8ncNYdTDejUBw8TDmja4RX9ZRcoirmCDo5PBhgnfyM3314qe",
  "key7": "395fqveB6Tz4uJ6jEcMSyYcqSfYVzWNgPS2StAgGp7hp9AWH7bTj36NHPH94P9p7Zh5B5pNSomx9LALtqgQyCrLz",
  "key8": "2KqUHp6GXVGW9vEbWEXeQwRPLFeiQtBRP1vFXg94EGwRNF7ZwRByABCrjVBGhXzyKPijbGeyuptaJ3cnKnsZPEvh",
  "key9": "4vB73Xu6wn9snu468Q5wMT2nwf6nRWovTFLqe5wj4qrBUJ2u1rapNofJ52cqxkVJZZ4g5NRUX2ZNUAheDttKpok6",
  "key10": "3G4kMhNuv9gVaRX3TGmH1maESKATzHDZo2AzxemAeQT44SzdzSdnnLxP1XuT9qeJckjKUsB6QotXVCPNYaDJ8uha",
  "key11": "4fyMT9AB3YFXo9SjfRegDbt12Rs4rBs3qmaKBHBoKaasKkXTrYzQo6SBFxrK2Xbjh9MEjEAQTsVKshc6RKLf92FG",
  "key12": "3SXSqRiHXdJHqFddipnhnwMR9tsxqqLL9RcN27TG7iMpGNSnU79tMTAhLgDGRZFFVkWhSpFDiBGgYko5U4KKtJ91",
  "key13": "4aKrW3Q6APUSwEBz7W6pbrLt6okjnszbBRXhLpqPyCjhMdejxXhweZVNFCAakkTyLiehGgwwiqYM4vuwpmDArNB5",
  "key14": "4ox5oWQhUPqojd3Aw1WjMh6MvFknFTegvwZ1RrEaEwn1zNrivZ1VQBtey3J1kWeyyJPSgMJGhqfYzkpDMBocpzSL",
  "key15": "4qfyJyCmttvZ17nFPHjJsHaZaRA44WbtWsBaUTLBaB2E5hkzAj5rMc3DymXkK4Bs4z9gcJGFzuHM8pqeNeH4Xa7c",
  "key16": "2aKZwHpJNiCDNezvvpCTqYqd25Gh1YTe7P5FCwa4kwFm1Rg4XFUX81EKnzJhuAEQXjgNidJNZgjnZpNoJtikyf3E",
  "key17": "3MWu1pzpUNEa8AWYCr1N1eyHz4dpqmjMhztXrGuUsov2KjgWD2VmmADCXQ58dRfSisQJSZFL3vBAvjxJQ21NZj1W",
  "key18": "4ZhaULPgfvK2UgibWHWGCwerDgDAWCLUwcoEHV5vKBdS2sHtd3W7ATNt3q7Bozvy75yFuqHD4Cks3BabkqxdjGM5",
  "key19": "41HoHU4T896eFJRmnyn8WQymqJTk5NjDBED1nRyYfJGsjzenZxg2pXQRW7sGf4JC5n3YeEvj46eqcLL9gtWrvrBe",
  "key20": "2MXApJCnEU5WnfmxbYNpPDWcEGxp8QytW874756BEqnrGDXMvGDuoLzQPhkDvCRrQM5E5Zu22eo7N5TPL1y7o2mu",
  "key21": "YEMhmxV1Jago19fJscABqPTKeaEsPLmoZ5oFhGAmmb9LUcMt1XJpn1ngqnBFQ8qVUQh2QAfFLNw1JHXjw8sGRD4",
  "key22": "55dTVmzFHoTFJA3Js3tgfPapMiUVkxEvidM6RM8v7PuXhtgUaiV8Zr8vMsJvQoETDWwX7FDd151qDVovTZFaQBSg",
  "key23": "3EEvFVc1pyB94vghbamHcFvaAHYGksnVfhLPkyXSaSp37MC1yhkUmnskCNH9P8c5Eti3ri7wvYX5DtNVwA6Ez8D7",
  "key24": "4mWWmU2CUqm3TPnKstvZisf2FBhDLpSdHMfGAMhx685LJrkDGSvWoVKkmiQ9Nbyi5Uv6YnETtN3ShFgMRTP6jHPD",
  "key25": "5Hof35hrr4e8xoZjoQxNP43b8ABFYb4EX4KZccGuJEEjoqjLF64cdQCsWGNdVQx4bRBjBdwdjzCgrBcgwgHC2wUY",
  "key26": "2AZBGJ5amHMXYE4tvfWvA7tXsuQx3Sv4knmauBMr9tPiG3Nu6jZaSPam4BbveiyDwbKKpHc5mpHK71nAkLUbgNZM",
  "key27": "DzfJK6QcUDySNft6RG82z4Cc1tEP6v6pZnNLeMGU4WusEPQsKZa5RFq8E5nwt8GixEkoEkEyta6jZ5NDohLNtPt",
  "key28": "55y2PfrB1gPwEbUwAPpBco4gMXrSqJwUcPcKFYwFDVyERg6JGoZr7aV5F5BET6LaePi3FMpkAzkVzvXB6vDq68gQ"
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
