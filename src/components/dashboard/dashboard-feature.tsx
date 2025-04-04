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
    "3UDe3mSG8hUmrrMNHP4VuwP1C8aertNBStDo1wzqQfaK9tigoEKXXYZk4Q2E9KmfzVnVYwyCb1RhsJv7bwEt9rFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NmMqMTaxsfayxGj1PZMtAyBGXGkDR412ptmGaEpZxB8b1XcNHJoznn2mdX3vW2QGZvjeFEWwx9diGZQtbBe9gft",
  "key1": "3bRr4ByUAUZfyGfwmJnEWJRi46PAtZjV2afzc4qwWxRRohcuLimLjxViq5G1sJi1hKTWNZqp6HyQfgt6fTEL7MvP",
  "key2": "5SVHhEjuhEwFA9wXNrseT2tSUgvCdd52pwtNpoc21XFHQhSKDjChqwMxNBXVac8bU2VaYbTM42BWx1TAakvXA8vG",
  "key3": "2XoEa6ZVpSweH7XP2CHj8cAnrYMH1Q3CS4SdXeiPN66UuE6eyWm9sQXmkbtf2rs3tgGa6cepCRN9Kz51xyfY75Lz",
  "key4": "4mLPQMakc47iTfBus45de1egfYHcGXkLD3VXkLPtM2HyfMTng8mWHzjMAozg6S7JuBS1eyegvYPHXBmzF6eWMvxd",
  "key5": "2t1kem4A7fXR9sTnvFeTWiW5anaF3bBjSxKsmjizrLZkidFf2GghspApN9BujnSaCXsxqEvqzEHkebzaqqrZBTaQ",
  "key6": "2VHkXLFAhfiAga9wtiE8UNYXz8TqUuMBuqukLvp54LXKfokTo4rUZDK5A3Kcrk8RfCwt5Bn6STeHh2mjqFeUMtqN",
  "key7": "3s9SLqQmf2dbQPufHWP2kpr2aH4WfRQ4GbXMkH7eVRaApKkTfs3kKqQNj9R7jyB7fQmquieN3tFXPXFViXh8v7Z6",
  "key8": "5SYUL2vWcm4u8DKXMNuib4tyN4YkGsCPCFpCTCBpggLL82bjmprrWxrNWtT2HEEV8T48pr59g3rCPYnAqNZbmW4D",
  "key9": "2yokjh28nD8Cn2ehPSAzFT35gkrvrdsKHxeUgPeyzoQSbyfVXrCkuDfwK4kbmBk2fj3j561vgehHSrJfpzsRXmMC",
  "key10": "2qneT1PvCGWmScUhcCHybrNRn1wiA9eyHnFsWkAP8M9GN89kdga57ddKVfeiE8EQvAizyJ3ufEr5Y1e68m3dAhnC",
  "key11": "4gy2RhSh75zb3dXzw3yDmSXmFKGF7xwjJ33YnsfHWDzvnJEtAxUZcZSgiSYhUTsRhtfzTTqiw6FgrdPuVc1Z3Qz9",
  "key12": "2gWwJBgZF5ri6ag6yuVjy2NS1AhnFEcvV8XJGUBjHEYYaSCSQPzBZH8sybXA5AKZh1CE53hfQhg4oJKGgVj28rX",
  "key13": "4DTdCXAMnCFFUuD41d5aPMp8ksS6wNp6fERuFzuTzuCWU6LEAJQuRDHousQWg2uha7tc1yk3XiJhJcqJenzvzU3B",
  "key14": "oFanmQ2cEfvM2ndmuA8Ur85S4c29TCeNuaJEitXW2zaZEfKXfmfZYcPH25RUbbTy8C5SDho8LtqHxHJbiLu4T9C",
  "key15": "331sT8TCDTX1EzRPXgUyEaefntW4MQZHyu4mD4tkwShdggpRwCv3aSjHqCj4Tqx2MH7BGbjf41TpE9vC7FkMz4my",
  "key16": "4EyjzGsegE7wRWpnkow2DFC1ggb2r8LKJihUPATx5SHWyMw9rq9UQr87PW1id8hb9wBG7bUkHgTUAatHo7QT8Mbi",
  "key17": "3czXm6nfQs3G45CRs5mGEgYhEWCzUe5Ymd2jV8Badqj3ENiTCmcjuRyoKsAaJUs2QYtBm5uESpanWRqo3VfKB26i",
  "key18": "2iR9igFgmrAYMqs3cpuRChywQmPvmSGMAG2DS4xGHrBph9Efu5c8btkB6Xduqaa9kvS69Bo6z8JkZ2CYXar2MhkU",
  "key19": "5c6GuV1unaqVv3A6ULVzLcXJ484EKi4NBnXbmKFoYc29E1XnpYN4xwLA2opNDsMaJzNjcGAeAMXHbG8rLR56eEzZ",
  "key20": "28wszhKM1E8p2UTwERuw8eiwPXhXricGN1uubixAzUHJp3Wdja9c6WvCEqR1GP6453KegBwvssmzi3FDSU482Unt",
  "key21": "WEYAmyKTXzSogs9aBGr4kC614vv1nA4L79hnPfxZoQqqHnKYVF4uXS7DcFzJYTvnqKf3mxJKsFkpe8mVqZNR9LX",
  "key22": "3fcj9WaxCm1DoDfxTw9FH82KRq9T96KNaoaCJ9Yw43x2Q465hWiZwnuMmFoUSTUzkwvtPaEDRokmfWYv8n6v6z7J",
  "key23": "3QinsCxX7ArSd2nSzNWSRkX6g9QnP3QjQE4hvdKYGtyykpwRgjhnrxmW5rkT9xxeAz99RtdGG7nMDS298J4Hsmff",
  "key24": "2725EYg4BSzWbvXeq5wkkdgzKzjpMPRbXHrW8sCSK2Taf3SJcU1W1HhqcfctdoUZn4N4XTzE5ABYSj9UYLRMjxUe",
  "key25": "3NmBXAePKyAPiJSXGoB4Qneijodonvi3UcAbSpdQ6qQhPBP5sxyNg6T4FLErfDetzb9q41UVkq8KqrBYKWuMyoVQ",
  "key26": "2CSJD6aQQSC9fuKHAC9YffuDkJz46FCUChfszpg4ThRqdHHjGz4hRQHFmAi57rChU5z1vPfP5MHyj8d6FkHSD4sj",
  "key27": "4ecCTdQuCZKBYxVCLVuJiz9eED3buEtX8oh4wtHiwmccS6JuHnEnbLuSUf9rJRHewqGeQ7T87ftWz4Z7PZzAXb19",
  "key28": "2q36nRCY7r2uEa7ZF6iSTSeGxtrRBV5bCTnrgAKnQkdV5aCVAxzHguiJLdYwCke1odEsRB7RvSnFZLFtMzh1oNsi",
  "key29": "4MUY5SLZNo3RuhbiXVDzEX8C57oB9BvNBGqg2V859CygWx1gm2XxKSPzVPd2K7vzq8g1AtSakvWMkDTfci7AkiMZ",
  "key30": "3aKUTgcGAVpgdfH7tWTyAHMn8YbDzcaFfgWcfTNkrV1TFTbVb6J8rzNtNU7vk7SKUHr5RVdKeYWFUexBLkGZ2tAT",
  "key31": "3c9B8pTx7GATVpDnBZU2stDyHEMnvfBCxkufcav14grQzBua7raEG2aX7eMnVdJ7RXJF6HbztpCLJwqecwNbRe9R",
  "key32": "3RyLTfinoPoposaj1AJd1GBamKU7VdYAYdBWnU67f3iNPFDHvLj4Upsafhmwz2WahpTKARD8Ab5QqWiWmHWUhPWY",
  "key33": "29Y6MoexEYozi3GWBMTEBAamupSUUgG6qbuE57LX8AD65Zdwvoes4dHKxHT7UkrijJqEgVq7cHJqSG4dnbLy9t5k",
  "key34": "2d4sGftGd5Jvt3ffwYtngwfKwe4kaMKnVHPAQ1Sf7z83mPRG9WJ5BxtHcDuiiKEy2KkWeudSUPp6Tc2jFTWdj6CY",
  "key35": "kThoEeg4JqxRdDShoXS9hE7Gt8mKfJTr4h937nVFCrBSZHGegC3rYXknA5CBCaEW1rLjhM1CFRhAVkZ7FK6D8ts"
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
