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
    "3Czn862smHSJk1fTd6f8HHpEeRubvhWEPeqJBUDGPGwNpyMKx3mURKWeoHtb9f3CMAwgvgFycZycddj8H6ZFe4Dw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A7TC9kkMS3zUk9n8t6asmXNtJXapxhRzGZdtUQ3yCZ6Z8h6u2SBXfCCDMgxP2d3WaKF43jUH1QJjLK5m1gkHMwE",
  "key1": "Z8WegUyVUMTt7WN72zSNsFiVn75xaf7dmKW3ZweEXNdJ5CbgWTD8M4h8sCBSA2DKKGgmQp1QT3Bq7Y3Ta5mDK4r",
  "key2": "4fCF43vcv5P1Mx56wtuSmAPdH3MinTyU7aeqjDeZpzRtSYRCSEndtzhuhLdbEk8xAevttwhs3F9NnSF3ERL9B82",
  "key3": "3v31MrPJmYMx89mP1RyGBDiSZBbTatJbo8yk5waF929H7rUqbYMFMHGkXEWQu4iafSTgCBi1o5cbdsQn8nqsitmJ",
  "key4": "5m3pjcJDCPgaHXnygnt9NdyZaYXvhSpJZF3kUYyW34EMFqPZ2aRv7jDwn5iL7kqeA7Yug1H2SpJ2khTDdUipSxng",
  "key5": "NETsKSM5QRLDCpuyNNrWsBnEaAVzyJMaJgNR4uZzYvDcMRUVexVUuNR4gtpPc338znvvKxcvUb3SKMh1HWBGhak",
  "key6": "2Nrxu889QdDVwmKfyUoA6W9tszDEAkoYnVjZhhp8mVtSTGFA45rvuVsvjVTqnUf9GfFyvxySZRu3F67gMRy83gD3",
  "key7": "2wcUFdcA3LrCoXBxdexaf8KbYZNoYFeRcXMfAv36joddSBEJn64jEJHuVFCGGQyL6XAhDB6VQ7Lxhu9kftTVXnky",
  "key8": "5MeWeLimDDGgrUN8bG2TH21CF7k6evypNiTn8zpAGwrznh73jyMLPbWn3RPMw8o3SPHnzC5Yfp9woaJmZ7SPoisc",
  "key9": "2tA73iTKPJZmVxLUUxFUm6sCcTh7gqp4jfzSFuZAjiiGfBVuXb1nra1pzdv4tU9pXaLTRRmyg27HyFc2FuunA77m",
  "key10": "5pDFekSduFKVrCMJU7xnvodov87zZpvDrjhhPQqhK5sdWUpYoDtgDzFx8R1q9dCW74ynx9tUSFUQVZaHP2oLddYK",
  "key11": "26C9yvw8hgwgYSvkS1u89Au951XXNZAxAU4qucJShhyR31ibF1w9KudAutDbABFXrUvJ2rCS6mS6HuNLNGZ8ugLu",
  "key12": "5z2xdrpKnaZuLncDEHFSuWgaA28PqXq33zBWrkfmQ8qgSWHAV2GjCRTUhSNPQB3jkHQyUndz7tGWbgzmtPNUBrvq",
  "key13": "4GpKTkwJYFuSaAVENo31z1czGTS7Uq8DoJ8UPfgpuwmPkX7L1Zyyg5fhKyGFcxHC99W3javkYfqG2Ya72E8WR8pC",
  "key14": "61As8G7QmdbHUMRxYejCy4iYwRLY2ihC2xFjSDvibsus7APwy4kXexU2AT95NrmzpvoRRMnwGBk7Ts44UbPj4qNe",
  "key15": "5JKMNbaZx46Z2sEDrKXW9u6RwPdef3pU8ia9pkUGJHJeCPri7zusemHXp3zudJrhHykdmNJ88LymYhFzg6bNqxbs",
  "key16": "5NyMZ151jVkx8LqvzfVJbKdPyx1LmazjtqFqFCwAGvoWkEkFiZ8cmyeDGzQV61ECMo4DTPUAcwwfzVfjLg53XCKv",
  "key17": "2m2DzL4jWrbG2TJ5nEmcZrEpVzwDZ51wZfP97aecNv2RrVH426So3YYNUHjLu7XmQFrrTDnPAix9naqVPMYKwy2N",
  "key18": "6117S1cVkb8zYvGT5cNwdEgiMMHZEbakjs6YAdxmQ2ciPuaWSNYYrqQxEWnHmDKPTNVAN2tpYukHno2ZvhVPqtsG",
  "key19": "vfZdYTpFJtVFuxcUssczGL1atngMLs3nTdygHnzJHWVrwQ242KvpwdKXBRHukw6NeeTx45oL4z4QRYwkX3PE8DZ",
  "key20": "4AaywZwnnLWGJwgrg5jT4gfRWAW3uNL9FoRGjrQR7otAcS4Jm7ziA1zGL34mfnrcfWxkBUtqFGNQYgRMqxAgeUEQ",
  "key21": "5vvMcc46BvxxwL8GRVwcroz8CvGxku4WA1zFzbuenT7CXJSGi4in5QQthMt43NdG16Hm9aDQk4KhLDitosCdpWfg",
  "key22": "4d2dyzmJhmZVykf8fFwTJKrxf9n45VD4N1fcfY9i225PYR3jJUdb3Bsviwa8k4SiruVBAdiZMXTbJh4r512Yo2kC",
  "key23": "4fWwkeX8RBjiCEpfr9zirgEU3mV3n8vjZHh9Zy9mJycE9gVeqAiNTrDkHVS9V4jx7iQ267UdGddSfZgLpmQSCcdd",
  "key24": "3s3NFCd2j7RCDsKG8Dob83ai5oT4vimspxDSQZXTXixvj57vsLeb6mRQtonk8cJ3mLyjFndPVDRkyfcsCtSPX8zp",
  "key25": "32RiUp4t1ZEV3cLaV3xSNXjEKr2ufchTApfo5zgDMddpHsbxJenSr7s4EU6qQEvQfbamqELb92U1Dtwgjmzibfd2",
  "key26": "aTMjhYBwFRD2x7UFVmgiwvBrjQ4kf2ZvFk8L7nipSCKC1ADM1JKjUSNBntRBAfTzymXd4rxjHF7wesULZyG1eTW",
  "key27": "5jBd7iS6CzSRmuL4NG2re4nUyRyPi1AirDtsYMp1HC1Y4wPRkWaW61YNTqA5eebBgTq36isqPLeSeft6zaeS8GjU",
  "key28": "LsRMhKXRa4pi9Fxi7NTDv1VuiA9vaKrBm6nf9BX4dF3akyJRNgXust429WSM6zWpA6ZNxq9NoxTLGAiHm37dQV2",
  "key29": "2Z6EsAH5Q4wis3rzGmnGAH9ainovj19WXgpkLLk25qpfDXmpFjveaoZMFraG4oZgaNTdqNXzEeMJTjHKHCqfdkNk",
  "key30": "3QtNnyCGc6f7riATTurL6qcfZbP8FWAVXvKzqRu7KLvyedLk9GWreiFNt7MZjhMVnjk3VRLqHmsGEhircuGm3kQC",
  "key31": "5v5eCNyFLe9qbbeg46NZnWSZM9XsPKxaNLqCF2bwQ6kC6oCfyrf5RXLaeSt4SLWLX7FCXZSA4FRX8h8hGMWE4zoA",
  "key32": "2XG4HXJ18G3VkxAEGrFAHDFS4iPZnqwcgG8sGd8sRNAX2HSMaFmKiKmF3r2cwdAXMXA7E6s31sAVDXCxZnKCxSZB",
  "key33": "2WvVoLZBQoVH8tptmP5uq4wpcG2ocTrsTk7pqifhqCyVvNfUBL5Vqx4CbyTbusnbpvqSHEU223TcvrgrzYU9wGKJ",
  "key34": "y5qZgkmWje2phTPchcJjx2fCKwu6mMFwsvTsijh5JteXSj8FYzGCnJT3Pcu1nPPLBMJXJb6qpj78x6M87R8VDBN",
  "key35": "2ALzGmdbmyXExbqC3ysgLkiSGVjeLYpeq3fRSPcsjCKUt79XFgbLD5VSFRdAGEY2LoPveW6p2Ug4fp1eW2XNYipJ",
  "key36": "DpQubGz8TUwZfYj2YANy3GLChjqzsWzeFQ4d4CFzohrRyqgYsTda9Y51csM1kLaYXUtZEofd3BfVGMSZWoqZhYw",
  "key37": "4h3T3h6kqv2j9cMPMSjEsTemBMrX99mSRhYez4Zthuvq2kmDARZ8FWVCnRWutPtDWJ1wdGEYbjmFbSQgJWbjVxCo",
  "key38": "5ftKWmWXeQEKChbxtNXJegE8ZXHUVh6tyr7m1wRfU4et77rbWJeSXAyGyALaMR6C7D9UwBLPuvjiUp3aCJaJGJPk",
  "key39": "46FWjwaNetc56sqqLZaakJ5bRgSd7WTsGNmG24Z9wPyLeGMN1QUxt19WBKmpjEZ6qKfEC1HU5fHzFtc9gdNERAAZ",
  "key40": "37qPUiNgNCfL6JxQU6bkXHJ6vMrnjhQS4HHhfA9zmbRAQckywrnn6KRJ8XjGkbZKheCxw4rqDYVB7vDdnich2LkZ",
  "key41": "4YBkiVKs94ouBf3mAN4tfDqkuS49aiSCoDEZp3YxgGQa1bW9EDGcTTnApjPxvTBksXLXU5agHSYxCCSvdc92vf3B",
  "key42": "46UiQ1azZkArmDUfAa8x5M2drJubF6dnv2P2BnggswYjdtVY3pi1G5aPyUqBaBD2QYERg3oNjYao8VRnZcfZ2V95",
  "key43": "2vBB1xceAQSv4ju1ycnyGRHDuariobxAP2cPGV66BZ6z6E4NPpFEymoTkrRbD4R7HL4kYTuc2PQBFW18hBSfajNU",
  "key44": "4HX1vPWWzngYp4MxgRKeV2T9uKAHPaA46UVnRsM3xzZeiFgEeFXU3zP7ctRLp5vDB9TKsKWGZLrkq83QycW1RndT"
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
