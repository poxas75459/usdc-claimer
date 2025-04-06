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
    "5LjutE8pQxZ7faWPpurUbgm6yCGf32Tgku8GqSX1ftofvKVVZe3CsvDHtKg8PuHGSy1PSyYXCSYpSuorVdRft5Xx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nbDGsc3eTMB21wKNJMFLRi5YLZCcfriKi3JgaZahoXN7o5zDoGzW1eV4ug28aqDiqV2nuEdxH9xGoHUPhVeodvt",
  "key1": "g6zZHfLdWwS5HsHGLiU9QBft5Lbo6GvjqQVamkYXxAzjFravsragPEhzsWm55mry9Y634sBtDznCRXVQHgdEFuG",
  "key2": "4krxmPpeeH1CynQLemMxLkG8czpAK2H92pG89rbvfTrVks3KQvDaMuFyji296nd51gyUhHwDn5Wpas7DSFVD7YSg",
  "key3": "3VWY7umeeZSMq2KK6rvvfkLe6Aq6vuYoPV6ohmHEw7S9Gi4PMdP6GDvs9t3RMb8err8M6rtxfBYV6twM6secAZSw",
  "key4": "5Nm4kUVhccGsbFBQW5hcj38E6mLK3o6gwBqHDRkgta85NVddrdpmTcSA2KyzsHWruZdJrpCwWWEauWCDaKbwbur8",
  "key5": "37T9cviu2jdSW3nmhWikmhsUEtWSmLKoPiAmhAbWcr7adaR6otDhEcFjuKUSVdzyPsJ2zepc4RsMVm4ZnezVM7ce",
  "key6": "67G63gBN4aymEDn58LUGx4dypQExoqct413hdCAHYdJpXqXtEWAFKzksQY5xSCzDWaeCaGngcK6cN99H64grWB1N",
  "key7": "3sYN4xoZadEzKncCDoZV3KFPkuLQF7aTzZYgpDMEucjESG5CYz38QMDH5GUhQBoLhzMhwB2FiuVPheimNus8e8Kz",
  "key8": "2omsTSGAeH64uB9m8m4yUjnrrMChKY9zLn1suz7etKVLA3To87oVtzicPioKKdznYpCHccY5WyhSKT2Tq92KvFrG",
  "key9": "3pW5heT4BGC96s83epp6bKzZjNNXZiS6qUoZeMyJRABCh85CSAGD7NGtcoLANZayJdErxLr3irnurYQh4rC9iXDb",
  "key10": "5NhAzD64GVfCZmfnSbee2e7hqo4w98FJzp9B96xAD8Kx8L8Bmpt9nE17Hpp7Nq9fmzDynYVAapHXXQY2PXrNbLHD",
  "key11": "5PaxPBeEfYxFjP5qdkH6HGf2hxgWadNCbXG6gMjpVLYgHR6jtXctksSZCZmhFUJSCLaHopNFprac78QdLwALKWZK",
  "key12": "idykjKZb1Z2QQrR2YQrwvehCT8ZUWVwQaNyGNtNpUTnaHvu8Mbaa3KGFWbQbjtMMbbZ3AotoyJkAmHSEjtutSA1",
  "key13": "AUFhbUiCQ5bhabNt7Zb9JzQTarU7WJUNms2Tdm1usgF9maJiQHGbMvnuTnQiUT86e1vR6nEhgcj9keqvAhq3B52",
  "key14": "4MGHe8MTfabM9bNvJPJyUWKYJwwRq4xU656j8FBW8zPuEoEH9D2HBpSsTNNLiH7DiNEoSjaWmxzFYvPdhTA7vjGg",
  "key15": "39aXfgFqHcQ9N97oVRKfLLCeZLVHhJfqQ8RKszvcmJ57gPowCF6eiV5c47M2agpzpXfW2Vrqfre9AR1TKL2F3rjc",
  "key16": "4sEmnU2ki4uKLimK8TSYRnToKoEZKU2nQ3CFkRZZFXyrbsEXJNjpxuVf8ZPGRoVpzaCvR96K95wUETLxaBBHU6d6",
  "key17": "5v9JGaQ2FmhEZFPr4MwJcnt428gtkLPUHCfC64Cswp39jukUvPAr9uG4rYPcAtJMNEML11NN89X5es86c4drY71Z",
  "key18": "2EoyYmcsJFU6nDPch1btPNZNxprdTu498evZgPdgeLaJ9R7rFSFSLwFiSEhh5DMEC4j9bPCjbpDwjJghk1afFc8W",
  "key19": "fDS6XonuDJv78iaUajdKEwAgowqsZq3fvNfEWfh16jWjigmznHKHWAYuZbVcpHSEkbUiaWb2SkS3odq1aemXovT",
  "key20": "5ZKqseX2muLRwtef7XEtYu38GjSx1MJAUcVVwWEj1wukkGVseJfc33DV7THf2GECR78mBegL7JHqhz9h35nvEyEG",
  "key21": "2YvzuZF1RWLxq4jSVWwNG4JV6Xt6fZS9YoxkaHuhnwB3ZL7nZC4DuKHNCgnvjRWju52a7eDmJnQLXBTizBfXAHMT",
  "key22": "QMV7hn8QnEF34dBbVV3Mf2yeFJzLfN75mFEoukUjDcY38mWWGuQ1bPj74mg5szZ7ThTbgRrtqu7WLR7uv3CxvZ2",
  "key23": "ssQ8YqJbWTy1UUvEzQ4ZrhfjvDZ24sZugJX3tbE1NxzjDmQnoQrzKTVB2c7eUX5zihnpBFReQ9dpda9oZuGnfmH",
  "key24": "5eCXNAziw9LwGYrMeiBkRLfdY2ME2nuPhDRyVZPZaA17v5Nbm18guj9xxeCHaU7ETiSauEb8yE4QniK5U4wyvHUw",
  "key25": "2FkooGJv2BmuVY3avpNAM1YHy8qQTgXRVYAZk9htaBNiDbzmHyKAuv39frqTu32Mzhdo4k9yVyBXd4GFneja8CkL",
  "key26": "5qWELwAT4mG66xhYUSYR8s9hXhFXrniy93NFWw538nSJaxhmCbsMUcRNHJjXMdS7dfDzxh9Txc8EuPrs7joHexao",
  "key27": "5MqaeAJo2sxPPhf7zoc5E8TNSkCicysy6SD1g3CMxXS18kzapM3bSKYNvbg9FqejbkAHLx49DGThwWBvuopcxHsR",
  "key28": "3pXYovhMXgZV4ACUiiVnZtL6ZKG4bXAWaSs7z3QtBEbu1g7GY4837mLs4Fc7HqPpdEw8TL28ea4JX2pSQ6fcgNWS",
  "key29": "4ZYwzJYxAWdVcchFPVxgmBqrA48zgPmniZJhA2cXDcpYzKuesc695wKugNmrQT8vGNaP3Zp6Exk8BpUGt2KFv1sD",
  "key30": "5r3sCXRT35zAFwPY8jwiQtSj6MsJWN8yt12ssVcEN2SP7Tq8oSu8JDd9iQhcPcYVs8e5FT9qmRdWGJBrL1mQJDjJ",
  "key31": "5Gn6hi6SzyEPbWULXDmbnnASSRJRjCaa5JYpd7A5z1mw78qWYdzZMPc4HDEK95H412J7TJRhpqj4gkrC3J4s9Lf3",
  "key32": "AbYGXWex8cTMAsbGxgqP4t4Gxjedc4R9B81WWwB9TmYyz4a997adPyw1mVGXFk1QW6idhT2KwmFSDqRCahYns6V",
  "key33": "3fx1bBC6owL3BQivbrEQQxXFm4dnUptzmz9TugCUmNzkSbLBZYEYzaLFyvgV7fxFWj3HaqhV9suiRB7HshLYx1HF"
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
