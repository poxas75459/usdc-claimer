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
    "4nMYXRr3G9Sk1JASyg2N9XhA4KKLMpgHuBTFQaEderCVpieQd5xnMzYhRjA3vbPt1eTBkR6sES8UjeJFfehe4trY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s6iU9fytwphZunToWUAa77HaRvf5hrSH1e2VhdSLoWeD3UN9KsqWcoykvGve84UgqbxoJVD4Hf1tYY3xMPGJosF",
  "key1": "2KX7QVypq8A6mLHg8h8YptWDfJonD7HRoniyX8fwCzoJuCTaKf9NQbEGphnYbrcRPkCPsvKLFh3wmsF7DjyG81Ao",
  "key2": "7Bo3pFXprWzX6Bd6sxpsMbHW9YSMueUWP8892pDr5g6kc22RPuKXv46gkSg7kfkxfhKyHEEhzV23WnDmP9gcQCc",
  "key3": "5NGqdgpMnUaR2ML1XSEiWiaPTnUpP4gkvYzCbvs1ajvZZgGbr848nMaJEgroBf4WfHZ9D4bGAnKYx4dtKgeVu2jW",
  "key4": "621KuXwYrazE4M7vVt2PLQ2hwmsEFZJaqH6Y4XJN1XoLpNoT9S8tWP8VgPqyxJjRdomQXMQJ3hKPZ6whqTXKkg7",
  "key5": "2D8u74dVkxQ1X7spjvYR8Sua1JbhQQSXmNkoYjDYYfpokRqkBrym9m39kky3UKR42LEyvEUoJauZ8HJ5juAS4yQB",
  "key6": "2i7uABe9wtN48AvaweSQWNCrzfxf2dFN3cXpLmyq6iufWbViB9ShAxzRLqn4sEQHdLhYyJHdUHWMdsMKoyxpoy3w",
  "key7": "4qJc8mfAoKgshEScwkJogWfNcxuBBTXLin9iCqHxvuAUq97aWBeTGx2CnYZaqV1yCUcSNQB1gZbAa8KRPGMsjDfp",
  "key8": "2DET9x9nmmS6RtNm9fKMnT4piUDv4Eit9rq6uZS4tn52HqpGeD54hueQvPSZTyn4Yzw1MK34CKT19GcD7Ce8N76y",
  "key9": "H9umQipRHhU9fbktSxfgaqAxNMnVRWF4dfGJ63Fh63xFrWnFLvF9zKxEGFavACN3jwWHs8iTmapyEANRHdCLgFZ",
  "key10": "2EDoXqAp2s4A1jynHW7fwraPdSAenBVzTQVZahyg6qABRkkNcq5Unvk7R1yeyEsASHv5bo2KfZXEcQtv71aLVB85",
  "key11": "aPfCqHMjVScbrFRbRhUctcZkKQPDM8sF8urPxj38ysm4u6c6gHcxgXD4mKBNuCRNpcraQ71a9PHWqiSKTLusXcn",
  "key12": "47pLMFtpPKrALFrARXEnxnCsCe5DvbdzMRPXSKiMen8UUAqG2w6wf72q6JUXpT8UezJs9XiCsNxTRiC9F6DbNS7R",
  "key13": "3oGnndB2pEAzSQSMHtdoq96Zq7onJaE78u8Yd1smq5x7Zi8QBtMAGyqRzPth3xC1KbDM8jL3442aAtsuyYvrSdaW",
  "key14": "2Hk5wf3d4eNKjMKgLRMMi4W24TAxJUsdC6TbEzt9Arw79yUgdrmjoHpvSioo9DUTkM2H26HRoMfEDyCmEY2DcLJc",
  "key15": "3mPUwmofnaZwRES4ubv5qr5GagxKb73BqNASTBrksA7vK9Ke9GTZTNE2GqyhWVAPZ6inkoUSxgDbyM1PdEPGjHpk",
  "key16": "2Jst8oUBznNqoz4YV8hSFfisty2kumg5jYBC3Ep26ZxPx8awH5Kw2sBxB6eqW3T2jw9XnpePTBhyaDKt6aGKpDTN",
  "key17": "5RX944qbVpxLP7wJWkpyZJFFGt3oEsWtQT7kgekh9uD3DtMD4eaHgCiUQs7eAEgg4oAn2RwmDVF7BSn3GefmAszW",
  "key18": "5FdUv7RfBi5ExgPDwWEyZ3bK3Fny7TZ7YEco1SwQywqZVhUs47ywZoGTDUPfEg9f8fb6vTk4GMJJh2gWKB2pgL54",
  "key19": "3uiCaf5AnPno1kgcZm3ekZyxszbSzaH2rT3AETerUpUmGuSmdrFn7UrqQK7tUY3kDcdty2JspVADtRoVRfsdkwtW",
  "key20": "5vyToZtZJGvGMns4LbvUBd4VZsQ1f8qVyTBsbvwnNipB1LrfF3nrEZcf4nY8ARb6uUtKHy8k3D3qjMWPevV4ZzZd",
  "key21": "4XrWx7KVcfT739dPXwrBqAfTgPmKiSNisn5QRNxJDNEJHqNFH7Ju4eSaYZg94CLjUwS9TCRzKMYc24KyZPjku2fS",
  "key22": "4DjBoksXJJGnmBArBB7EJM4Co2SSBAxHyV3ZPqLLTDnKaK3Hs4ayVmvE6DkAXTN9sdtmCit6LWrBbQNdWtXi5SBZ",
  "key23": "2z3axgYxtqWrSGoEEenKWipHqtdCtoEtoR9nUv8JVdC9NAQu9HfPUVmcHyzbBxyHLPL6b5uwQm4T5eqrharkBtko",
  "key24": "3MCY2jViUfX5wWDwUGP1PScSMvtWuP8GGiwLCt7QPowKKoAaniB5UPk97XL2m9iNCFjV7EnMtdbeDLTHEK1jNuqF",
  "key25": "5wtoBwwP7QG1iULaMAdcqQnYadNL7La3KoYc4mAhw5dBPjUguJfhThhteFksfeJVsjCVmUTJZYxsZfoqEmrZUT2j",
  "key26": "3KbgZMUNBagypCiyYH73GNkhYcTv7KsF1cy9Amb1gt7FopJYpMaEm8eGytKtX2J3ZRUFnQzFsReumASHvEHZhzMQ",
  "key27": "3hkC82qNLpyBAGvun712pCEmY9tRUV4YDuWCJT3jamt1z2nUwCQKSA5Uads2PHw72R3LfnpzzEWYrhUAUPLKzACu",
  "key28": "2T6Xkwtcct3AM6HBKpD4c4v9RCdyPJFQNwYvCCiBreA3oaK2rh5Ddff3bLCPRcEpi1a6Zmh9nxVJwxHGHDugr9CA"
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
