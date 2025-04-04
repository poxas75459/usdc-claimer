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
    "rvLWsQJ1uUWRZr7NzD2EBnKi6yHgotXvPaEkGmJfz1rjAzwX2f4sn4TYLPR6VMz3vXufhnKSYuFiabKf6gewCq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L6YrDyNvozj2Grpy18vjFjNhe7B1zTy7KixVSzDG2KCpE6HL1WULaESxLe9vw26CA5GiZaYokUx8JTDg8S6u1rw",
  "key1": "31hSRTt2H1De4oNF7Zx2k3sGqPjkGJvYebtdbw8RNK76WAMR22SrZSRthP8DbpQxJJ9cqc7TMogpsf1LtZjGBCSr",
  "key2": "4eLG8ub5J9TatzaEySD9k5uQneXyqsrphxxchTHb7CgbTCsre4cqMJcTgVLTtranN5WyzntaHWJ3xvmUjDk22qMi",
  "key3": "5ifu5issDrmNtvVwwDFrqf5frB4aAHsPwhmJddR4TdwPr9rixMYH4PTQURHf8PfQokLF1LNwS93UxCUKAGBgzsAW",
  "key4": "2zdjAjMdaioDPdKnJGZKWJjQSFHbvc52K1zFya1ytCoWGq6hFn8Rf4egFp9u5yzg2SXpNcmVBgZDtwbWKBrquQda",
  "key5": "4H1FHC3RZXk5dF2rfZzTXau1zMUijEVMfuNX3qVj8LY2bLSXUdovLryfJWQkmYaKSJHubTvaJMvYxHHdaswc3mjz",
  "key6": "4WRmi3qtZUKoTbSrG4em6o5AZ2oyPa1d7cFcdXNvVkeFpwjWU34KuBPegHZCw8i2UuujMwW8F467Z3EhNFKs7oKM",
  "key7": "3crpGgd9h34BvynRavRsUTXLuWSZN1y7SD6xWwBonxZ1phShRL3itDLq8yRDFE6bsgxad5amp2J2khKT4QZRmYzY",
  "key8": "4mKARZkexJEeP57Y9rJKPNavRsgMACR9gSNfzDNUfXnQeh6dHVXdSxJknB2T8PjBLpyJYoo5AbKYYKFzm8ofT9LG",
  "key9": "2SLPPwYPxQUu9wjWtPSXQUNvDMkP88TPtKTzJ6YSNjTQCC7xQR86mjtm6eFRf6u844GGN3NNFWd1GAq6CdVuEQG6",
  "key10": "5e1gbqEVkFRzxpjAKGG4YdHVJR4i3uJvqrLFgcm1zzkVnzQYvpL7Tmc1iYAH6D4SbXo4bD94RYsPPSeT7nVkm11F",
  "key11": "5TJUo34inBkbJsEeAudiV8FQwdJQxHnehEZptZTACHtEZF7a7ZNwrNTDPRuH3a4HYLsbYZ3aLi192Esy1McUGs2s",
  "key12": "47iBnLssC1YECbCFmkhhs1m3GLfSW9aMWcgHkm8gumLUPgk5Bm4a7gghZ3o92CYeirShzS4CWgq64gF8gjXFp3PN",
  "key13": "38GGrwbRTmiosfEGMUouyBLuAvpfcypdHKhWqStw4xWcUWXo7KYbHtw3AVV22Ts9WDCP7wUt2f5L8Jz3qNFucdQW",
  "key14": "2LuRPbTZZhZSFz7HDruPFAkUaQ1ES4uygaPd9Yc4qCDkf8mt8XWn2he7Z4duT7dysxR8WufqGrsbGYbCyo2Lqk62",
  "key15": "3KZTUiChj5rnh72qYiJ4eRLnotnBM92N52L8AK1AruV8eaxd9uiYtpGVmkYoYVR2ZipPbNcAs96e9R2VSxcKGiSF",
  "key16": "Dr19B6YDh4KwFQ9PHQm9daDU5D11JsySZ1tY7EygWUkz6yvioQnVSjQ33YjNAdBUf65rZtc6mDgF4ykAT7Pn2TH",
  "key17": "4m2qySr1ykwDJHUPtN5wrPEitVgG9Zno6R3BZMiEypktBKNtMdy9Ao7J7RiTD75hsWSiadg62WcDgfyCuN3GxmoB",
  "key18": "3XJ1XxiPriVbr1dtfTspwZdPekPsAFKzkWt9qXKPkEatAaxouhbLHezJ1ST4oLzzSgJbSKwvCaRzLSrmPpLXp2yw",
  "key19": "HaYtB6H8MS8CzJxBHEWFGZwxZWkDph6psdRL9crgkxqV2NAoB48vj84HqRdkbfx3LHmqV24GPRnUMsvF2To5wSD",
  "key20": "5Yx4jnKuf4k597J8uF8VAgkY9Bjn2BNF6LfS7cc39UauAZnWJwdSX5BF5G97hkoT7zeF9kAf3LUm6qDQp1L12PKX",
  "key21": "5BN4MfjHnHf4WPCNSkQ6VaJWsXASsLRoxKNWeQZnFcMsjC79P22zgEAy88NR7FvqPmQ5SbRkziRGVFrJzYR7yW5B",
  "key22": "4L7gjWiWpRxijXJ2gm2d8TSUF1Y6dULMUWzq2PvrHEXiSJkBcRS3fuhHPAcQQ4ovjsSCAJ5RFtX7kSF3XTnEPzfm",
  "key23": "4DEdum3dgsMgdGPMqQZpUA48v24XFiKdN3XSpfLMVwfyqCZJt9d5EYb9MrLbuJjVHZyAFKaYJaZGHXPr5478zC2U",
  "key24": "4p6u8WCVYVVJBy4vTqQJPsJuVHvFKqrNxp33H1fbnm96VEYkyMM1U6vaV5CL67HuZ9crXThyNJRTwANEzXY31sfu",
  "key25": "38zi4pLPKCmsLwePzVXn1pN2gnkCaMVj5U2vpHmJrLsk2PMFAfP211ZZ3hVNLYcWwFn1aDSJFzhLZScbacpRB7N5",
  "key26": "43H2Y7vBzFa5FdeY9QqBbScHDKajV4vcJ8why9YNZ3X534q1JkwnphcJu8rTzMzeLeRpHCSNroKuztCzUv73EJ2R",
  "key27": "ssmNnJGo7dGozGB3fS2EHVCXiagb4ZXfQV681tkioJCf9rrrJaeH5K39x2MdYNZ3P9Dnzhy8iDkYxfJTz774J9x",
  "key28": "VSyLPjTrHoXrzxoSUBn26X3z4Y61y9xMt2G5aYAfawFRxH1v23woLg7acagHBi3YF2AWkjTjXr2f2wrJtcEBGXf",
  "key29": "33qGP8R8qmEJCQe9MWhadfCKozt4HFMFq1wjuUkkfq6Gd8nr5wUgWjMtarWjZy4irUUvbY5DyjbXw1GnJup4P1mF",
  "key30": "pGx4boydK789kSUvE5xwVYh4wsjH98CwXG7J9SyJqYTjwhTDFZPcT91jXZXrCT85pqzCNcvHXLxMcFkTKvRsYA7",
  "key31": "VtrqGhnFCQW8a2izSL5p4rNDhXbfNG3wBhMJke1Rv562NhanR4fccDqkVAbZMzfMJyuggYTUeBn6QMzS7x5rgo9",
  "key32": "UFhSymQnUUKwR2CF7iQsejgSLHdZWA4brbaBZGzb6F9EPuvq6dkR9TPjZWPZdeu6qxT3en4raJDh3wX8MXcTCEF",
  "key33": "2AUnHzAMi2hRNuyuUPbTbQpHEHxhLadFEgsRsWTjdvsgqZSz5a5bZiHtMz3EovGxNGLg2NS6DoShvXL5JcWEPb1b",
  "key34": "35wu4rv5szSiB4KjwJq6Mg2EGHVnaNdLQm3fadWjFBWLWvct5xXx3orMRwQ3cqF18k2d74yZzH1zbF4VZapwBzX6",
  "key35": "4NYpBWSWTNkPAAkC7yY14kf6KzXbXa9Up5pRgwDY3R9qnqSRieFB5SQrprRgAQWEngfoYLRWSym2zncY9XfZ545f",
  "key36": "bT9pdHgA5ggq14j5t6wTap6uQZAiXEjTQdyduJruBwGYi1bB9HPh2FPZd1MLsmQFzpHqYiVepbpF1Hw1MQWftzu",
  "key37": "4T7JMah5g2fYNU1JXhMAqdmTYXjVswxPTMUuNyP6LCAFJcaPQsy4oEETDumKo6mwLzxUVdz46nr1bhRKKn3wKXoK",
  "key38": "BmQTZZBaJ2wPoZMefBvCW4giJLijrG1hgjaaCJGhrQdDv4WAAdHT1Cfohph4xx5DS3YMXRuuppiXbx9ErG382fn",
  "key39": "2LYZahZpoSSX549H2TDE6xLuvmMUVWFzD96YLVSPbid6y1oBU1XeMGwHCvqxLU2pezJj7sChnniHSASbngRnUoc3",
  "key40": "37u8zmZ5ztpf4CUixrSLf9ui3DdfpYrvrxWa9xnmCttAoRJKF4YohKJvbTMsZYwjH7qWjr2GL24BGkR2DHJLyc1k",
  "key41": "53ky2ni675Tp4Y7bpWi83kmoRBj2tbERf481aUwhTYUTpjx1KWv7w45SMD8D17VuTWJSatfaYg89X4QwAwZqhV8p",
  "key42": "3UmVcs8BDMCNX3CKQun3MDhVdqC6qV5hJg6Tf4Nd7cDx35Xf28jDQT5xcfmmbbuhRvcY5HBZvqf27gDm1dobwZnQ",
  "key43": "225L7jg3ZhCG3VR5dsNJ6yYodCTsHPZLV1Hx4QLbKQgXcH5pmVUpixXzMd9Cu4mpCHEAkJUVeHGN6X5eJC2GqP2r",
  "key44": "FGyuScntBLwook6whvHrz3sgzzwavpZ11JrAJB7se5KxSRepmu9xMaYyJmPSUDTiAD9bDHyYtrLhj9ZSRYWRqFk"
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
