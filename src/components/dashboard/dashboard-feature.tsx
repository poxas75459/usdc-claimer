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
    "5eXk766RguqWaDhbQRG7QveiroUjansrZqfgDs6BNufw74Mp3NoRfvoh47r2qB28fVJ3V9dRq4SD6dqWtUGWQV5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aw6QjhUgCM1oAqG1ZTS6cPXKzeGMcWzPEfuyf8vvBgUddNbxaBuKyiLZNoB2ai659USdV2DvNZQto2ygWmDBJEW",
  "key1": "2AegdsPkipha1yWLkhXzpggbXWTsbCofkL3fJXBYG4nUwCUuV5XLZ3CfG5mSP4URHZ9cH9Gn9SizjGAGw2HxF3uu",
  "key2": "RWeuZeJGoZ1Us3btYzpwXN9xNaF8NKjHMVz2w1ALEz1hDBnLN7is4bQcsNkvvQapC8dqUc5Ss3JLS2Vxd1HYhKd",
  "key3": "5gLxeUm53kVu1RvbnYU1x1s53czWw9c5aojA7qEX61CJpFAjn36WkdCS8FWrz4QvrjtsAjjhc4Wh83kvdrqjNyV",
  "key4": "39mjhutVs3K9wGeFQZunMNtJQ4tbKVkxDWQDJnyW7F3imRvsGRWeHTijUCYRocGuw5G7hfiBGbhHRwU7jMZVfntp",
  "key5": "2kEKBCAsJEoSQb6d5QBxf9ZDbiUWayuUdxWJTABME7nvRV2yyDtzeYTNmbMXyntNYzvKf74rUJHJUHGXttnGqRxX",
  "key6": "24sshj1H4f7guGoGy7xtzVtMvxNXK2Q8uNaRV1hqx8pZHXRAQHNFjdwDezbLf3gvXnpYyqNUqWkEVSDNYfY2gPAz",
  "key7": "wuQMRysydZyYKuv6Ahu53cR4b6GBSkprXt2rzeWY4u1upFM2qaFR65g9HWnrHChidztfyQ2YWbmT5CjqbYQtjga",
  "key8": "3PuPbu8XNMY1KkfXdRbzU5sDjHMkSKMDyumCrM9tQ6WYR7Kzm9ExxopCd41qmSJ7r7ef5wrGrGhHrnCNJZRJyqFK",
  "key9": "5u9vA7od1kG13QP3Juqxg1T46NTJmZpebwuYPDxf1Yf3dKyYNkZXqb7vPDMHV1EvrRZorfCzYvpYdWyjxV78zZX7",
  "key10": "45iuBv3PPLHkqYA4vLpG72KfgMY93LWoQiFtnLivToo58iXpKnfaVM1E9tqD96GQroFXXxrQXuHSfYqWL2Tef9BC",
  "key11": "5sz6w4V4R88kvDBVGLgQDStqHryRoyqmEWJBE2QhmDM74j8XYzUcz7DJ8JMMvHTDQTHj98E2AUvhgbxcvQ7QwzNq",
  "key12": "2KZkarqg6UqnsoaaEYiHwQbEQyS5GEXzU3Fu5zEFpgRGqbSg6zEbWV9MWb1Fq5NHEh6iFxyGwXR4uYKh5Hw8QjXm",
  "key13": "37QFAxkgusbHYodMxoD1KQfLwwWbHCUhhgZFZKSD92spDTUKk49xLjFKn61d3VjCvFy3hdUc5RfdjFZqgtWmoUsu",
  "key14": "bq3xuAcLeH4jshjbJhajATEJX6YG8jASofo9H4Z1M85ZBWTfbKdvgD4oXyPcMKUfY9vB3imStaCgdrDSkdqqgtY",
  "key15": "T11yvfx2y4qfYSW3kci6E4UjvR5trVBVMZJ6kb4DYwytrU4siuFh3cVxa9wrUDejkBMtrmWjnKfDqbcGamhoWtU",
  "key16": "44hcDdQseGtWhC5qix28RaRfbJ9UkfNxTiJL5TGzcRKio6TkPQuvHKjdNkT7kCHxJMQ6UE4VrLmJV9qE7QSHCrCP",
  "key17": "dUq5Mqv8U4gGaRZaGtkXpkJiY8v6UXdeQZvfnG9H9h5W1on7XxBY1Wvsb3o1jRFKVJvF5SadqGbZYvNA2T8cpxi",
  "key18": "4xRHGA9PoYv26g8hZiSdtTzCor2YXNUMvZ9JotkYWyq2sNVMkAscc1kQtMpj7gNtvA1wNg1B2QoV36q3GmUZtAHq",
  "key19": "5LdxWsmZ9LrwDwzGxH2B4KT4i323pkVQLHugXAU2TCPzhTAmATeopEUcDByFfbr7sPjR9q9eRqus5sC5aQMXtAWd",
  "key20": "4Vh83Jz661QKE5aP4dBPAFamYsRhkey3QGLH5TFxs8Q867JfWVutLsDcUmKbk2Kto54feDdEpunFMnBUFQTme96g",
  "key21": "4TEfdPBbW9jZuQmjWwiU2fFiiu9xiyQdApZNwuQkJr1WUqeUSACANa5Jv98UPYGM6gCC3taDvN1BZT5yApbosgc4",
  "key22": "4dgoLmjascJ3dXqafFBr3KYSBwueFjRq2tuB7RD8Fj4V6dqxuA3MqBTVmRVdTDg1gRLBy9zUW8uNxTYJuuwHKKST",
  "key23": "PDnckV2SPRvoZbycB1gsd56cb5z3M6WkjkWFYTFWbMsvi1T8bggQ4irASM4zi1BWFCK4xJ8rAu5e2P4jJsnNnhT",
  "key24": "4LNw72g6b7CpuHcUDf6VjAgQW4d3kYn19aPkhd3u9218so8hHWQ8wuHsTQoe98uswV7nYG8yRyVP3iiuY4VMgbJU",
  "key25": "5QLRP2k6YtxaipsyWhwMPQQNpTMrJZgtyKT4f6LDuGzt1HULj5k4Q6bsou83NCea4YhXmnKU64ioMUVoGcHb9C8t",
  "key26": "3mW16SnGBLvueimNeZaV89QBFzveKLE1wRHteZeT6hF8NgW8NMChctX37bp8vEEjqJ1sWdcYUcdHEEL2YzxgEdiN",
  "key27": "2HMh2b74VdTfpkcsV3kfPUVfwyY1Knp4ZXNnygRCRgEeTDDecRAvGsNsUjyKtJGUZcvV6yPoZYN8poNxx9ubhmsS",
  "key28": "5DJQzMaJb1KXHrxc4RBT2P6oZ8xcb6y9p83nCGB42xc5f43wMDo9eoruZGoWSakD9Z8bFyGPeZa6Prpf86YK2wvR",
  "key29": "5c9ok3uYEd6xkUkuJPxNGuEuyeeRdj9kB94q6RDigS6vWmetaaYrdrzxw3hza665qvfifdLgb38q1yZxhC241pSu",
  "key30": "XLDMBwKiAgff22eH3uuyyQ7EngDNtBbzG7W6ZF1P66pA9xhSYjtjTqYudMbnXmNtXj5DAM4NkLEkAtaAnofxyhE",
  "key31": "nKk3H92qfEDHJh4QkGx2GcJSwXuc7gAtF4Qv5tf7Ty9DkQBmob5MMsbouLyme6CTEtw55hqd2Z58ZpeZ9deiohi",
  "key32": "3VFmuwdSRhXzik1hVjxirtvBJ3HjkcCTNNge7iFZcqGvGRTpwjo3CRe7vf2EcVn1W95QzmEJYuAPFcvTQ7tbTLWJ",
  "key33": "66Ty6p1CTHDwGtzADoCFHHWZLU1oEndt4wk9dPgYEnhMh3uoZLFPAieG3sEwLy5CUzeG2Ko3bzXQVgfQryLXLaS4",
  "key34": "5mb8c3M1By7CxsGiAbTGFrg97nBW6NRRhux4cuLNY78yEb9sJkwrVXLNXLmas8VxhBMUCM3sbYGwYaLJyA8Nc5FJ",
  "key35": "4EJnpwEv5gbtarC6qctJDc9UupbRr4aSogBR1YTcRH2LNRnwkCokw8gErjMk37HXdQxuKYCFdEAFGfa5LdAvvJyq",
  "key36": "2324yeRsvzewJ6HZZuyTHGDrem91TRcRHyKSLcDWwq3soRuUUFEP4g78bhEgV8v4r6ytK78seSpw2QWU5pwepuNy",
  "key37": "AQw1odxrvHezKW5w6MiDrokPoad7pPHF49MwxaM1saLeVHNx5eqvF2S26hoGYM2ET3RfBAxFjjfufCETDo6bdrA",
  "key38": "5GVXWJ46aC9dJVj1uuhi1sQAgCUHZ1ZTKJznTFuwFdG7CJZWpNqbwfU3ijTmux5QzoTm8enBpx8Bubm4UiFvxrft",
  "key39": "3A2fsbAJJzgNgJWdVPxHuk7vq7ozMyBf5XaS3jY3hn9H1UqjiRK1CkfG8ypv5FMrorL1NhD1NXsGuSWdo95YYryj",
  "key40": "39XGfJX4NrBPF8r82KQ5kqMYXZ39TZXxTaM6qhfi2kiHpq8xvCLu9Qe1PH2sz6EBNBsMDTJuTWF8Gmc4Gu9M9w74",
  "key41": "vRUH2KecFq2w2xMZDUD3zq6ASffFkTc1rom4oAhMWhiNBH1nXD16n4UjxUDQGJuwktctEjScYrjwnk2un6BX1VE",
  "key42": "2atZdwAuvzGqnfZ1KvpF3GXMFSWqLEu9joGg8hhbNHUn3vcqV56odkeib4iLGDitRLtJGsmP353hrLDUBbioom9d",
  "key43": "2abFUqGJAFr4W5FbuNYkTZhmkobRxJEzANPs91nSBGjneavqXVgnH9EhnxHgwNre1V3P2Yy5aWEMVGNKyZvXovFW",
  "key44": "2nPfbPD2kaQ2sb1Ub4irP6an81EyU6u8T1MMofrJfPrvi2tERc5tPWgchpKfz2naZpuePj2c3zxRvBchM3TqmhD1",
  "key45": "5X6bXgNesLFu6P5RVyvBSs2xzA9k1JFnrmZPzxgbm7PJehF6jR4WgQScPBS5uqmijUxry4mQ1Dedx8RoRwRtsrRG",
  "key46": "2g3ZLHvJ9GdExds4h4xiMsjs9Au5GCp3Q2b5HmZ62bU1dyS99SkAibay5CpgDLXQQgX6HrKpi8rTsA3yFJNg8ggQ",
  "key47": "2wRa4983U7SZG1dktwKyaeRtzuCaoooamZHUDp2m8ca2mSSmLKF9wtoTjmiaTPy4TPXgb6v3PpB1AobsmCdVrJnN",
  "key48": "5Q2V3yd64fXj8ccYqXJ4WDB64SrcqoyMap6oT5RgSD9XFcyoDqAf5qiQcZw5sWvgsfrYsVCmtTrFkihefbzkj9vy",
  "key49": "4kfTfB9HqyYq4sV27EHFpjTKHpPcueLPYUy4fN7mEXuxkRVvefqvitdC16JfxFR57jXsadJA9DEN8KwBJknwt2r9"
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
