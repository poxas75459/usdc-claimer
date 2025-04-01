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
    "5RLGA3TU6UFPJLHeZN6p6UuCLqA5mScbNS61Ww2rCRjWETgRU955rbGsmCMohvNCdD7pQkPC5w4mNLD4P7JsdjrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cHVvcfNnXWH2kAWoQyiJpMqy6nc6GqPNUoo4RC8YNR6dtHgzyWkbru7CyfgcPNoJ83Pjih3Nsb1fcJgkFsUskzS",
  "key1": "38kDgrd4WogP7pZbZKPSsqs6geFnfvAwwKRZFGfbuYkPgJVdVS955vBnKeTeC1aAvHXPNoxDswSMh7VLcim2gtHn",
  "key2": "3XDi5o78h2ZKHxifuM7YSUbpyc3QRLbBsz9RHG4WfvJch8UwnRXuyqNT5BKXFvz6VoDvGLx31RFEMPNcWXS5ZELf",
  "key3": "2PVQqRc2QsBbz16hDa4FjKr7FhYgrqVD8gWUTpTK8ReShY9bCYjjj3HKaNrdhqtyyAjtaJ73SXJh8W913mBaNDZq",
  "key4": "2T2BwjBxGXoAgzLmvpFkFz2hdSHvdfV81PhtNRpdqYAsvxN7HEsMCumsCukSwn1LobvHeUtWppFz4cbnkp8GFGfo",
  "key5": "5RoLUe4HP34aVf6D2wMTaRHKuWTqtzA1qktETsorUQfAmh94ugohcnd15RMwiXiCQYNEdtYKqyP7uSW8t6jLeqhs",
  "key6": "1GboCFNy5fFRScvtqgvQ6dhSfjyRuVTnfBqTWMUPq8a9nLnC75Jr8egH9tjS9GG4TYJepMw1bLNmNBevhorJuap",
  "key7": "4D6S2iKe9joTB197LyRkJYpLNpLj8fAzRnwqLtAJR4rmetMQ3v2PXTSh9AwNV4Qpsr3YehLrJJnF8QMqiHQhxUhE",
  "key8": "4umvc1fikYmdvJGDc73eanHgBdvQ7a4YfPJ7gHXfxkfsoeRspufHizUSjbecdJ3puaiGDGUuxYVki4StWhKZCnpp",
  "key9": "XzXxtmTQnNbXmuDLxmJLgUHgR2qUFNKFTs9byvRsXq3vQ5HjycZSy8poG5B4A9ckTuS2GzngFAZiQbgdGqb7vug",
  "key10": "3Wo3LCRsfKQobeMjEmvxxfxEsU2TZf33CWmobmmidEzkPcbpk51z1sdQY8aGgzVEz7tC5fhtssVvtosvQoQ4xDjJ",
  "key11": "3KKULnRjeB8KzgEbFZGZJoLEXZrV6C7ptBLmcAdgA6sKQPqA4UpqsVC29RLYVYyGAMfA37Tt8bApyQYzFrLeCEFw",
  "key12": "2Skud3YsR1EpmvhzsuRmcsbirWpNDtr4C4ASZuiYJy8EdkSiDNbPzC1TeUAokcorKrxqGuAWHr2mY9pDj2rRi2Zh",
  "key13": "2MUqUsatJZAVwMNi1Wezy4jUxwLC1hzBdg8STCcp47XuPFZJi2G7iZRnv4HpktVFvWo8FFhVCmzsGdfQKmMujuE3",
  "key14": "3gFqa94pHGCCrbqfkiDr3CBcs54rj9FwoYqSwyy2Ux6rVQqbEmdq5mg7AuWqGBiLqY8dUv2pi1y6ehYhTh9NNSRe",
  "key15": "52HdhLyKNbm2ks3f1c2U9b5STUL5UrfdKQuYSUM8rEHLMK5QYzXzaazmUxMPqePUgRA3MDFjGKUpSSwqZtaGpXwa",
  "key16": "42mrSFkhj4DQdwU4eP98EpFQefSJsqF4Q4Gg3KcFMuAwFXPJeQLcDyLT6xzDkiyH2jPjNR4QmUmLTiYtHE4w9e6s",
  "key17": "RWdWipnoKphtCBVtKpnF7iPZziRysJwTAXpcJhMBNH5WRfVjqgCQWF491AAQRt32H2TpMJxVqbyfpwAPboccRR6",
  "key18": "3Q2B42aQaivTkfpVkfGfu2ZaYkSL9tYjMLggsq6boCXVWxva1DERCedXbzGSWCZmrc94amPMYES9zSE1DmiCjKTN",
  "key19": "2ygtzNtsQtk5uu3GCKXAgcV4GmYNWWJrKnQJxuHr8uyJaL41HrsqJRD5fdm1deommPCrhduX17gwUcSNJ6ZrvRde",
  "key20": "5KFY8Dx4s5Vz8i6hrTTD6WTJjFN8nh5LSvo8N45zXvhP9Dt5c1QDCzq1HYRSGPcE25tuyFZgbUz5RQFwkMCu73p3",
  "key21": "4M7mtHeMYKhtzK1wSJVTsoYnagLP8UBow72R5G7xvnAgqQa5MufBEifHPfyC3WbFj6QcuRfZbdEkckCVi351K4dZ",
  "key22": "51VigenNiqpv9oWnqx8HaXnoLrCBF6TsU4q4S9HDUSEMmDFcTmUtRBrhH8MWte2ZtcnPNiZtXHJDMAV9GCQvxSHe",
  "key23": "4nz4HEeuG3tGHz6Ao7P8st6gmC64aDDouYHAmqRaiwUJArvnuFZB9fVdVLNpuihgcUNkBDWdmyZGB3xdG69P4WK5",
  "key24": "585tdwkKLybWoJ8YR19gnarD8vrSD4d1pkUrkoNS2tdct4vyxk56acFuZH3nTWKmYxLkoW1figgHbV2TTphr1JJv",
  "key25": "ZUdZ5zPwe1D34TrUxZ6g3srsqAkiQyfdmcn7wmGD7vMgDjhvtEmz8UyXZG4AiydUUxvvm9tEBKy1J5iD4F4NLBJ",
  "key26": "4u4ekcjC6fLnHvPX2oUsX7tD56DSJysByXJipFHEzAyuTVJ2TkhUAbgjCFz1mVS9yXmpJUAHNwiWAeMzc9NL3K2w",
  "key27": "5tCmvCAMK6LL6GkUUDWkZ7iT8sS9a3bLt5FCGyqTzjja3XsEcfgEHmmFfADFZaX94AQ1ckZ3jwvprXYpUiE8B88B"
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
