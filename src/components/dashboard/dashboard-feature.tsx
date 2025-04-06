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
    "5UnGwuptAwHE7yxXk9gBtXn7gL47TyaFprbgdUFbjpUD2SGrvhBBpkvStPGx6eZjh7E96QHfEibUicAqyPw9HT9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uh7PXt1Yr9QgTj8EvDemMbUsJoiDpyqUjNffhkQvP49ZbPbCttdmuhUn9MN7zy5BueBnRaPYVWB8nd4vFBd4Awx",
  "key1": "4n5466teQcrLbCeBe2uiH9q5YHbb7B8Qx6ZVf9jayHRC84gSzsUa8xs9RvMzp2nsuGLAyHkrfiPnPfoVWwEZrYjp",
  "key2": "hEvvSRg1BvCBDFwspWNBMs8cGcmbut5K7JW3RNVLkZPZyP43aMmdNwkhTq24tdL8uvH2hAvJieL8K9xQtRVY23r",
  "key3": "3o2CoT8ewYg7Wq4DDCVZ1qvRhJXSBNkEP55u7tGqMYsrZKgP9MDCJJoy4dHtucps3PfNLuGq3PvPybhTQERK9inj",
  "key4": "5GCAxywaqxgqEBvSmGyYwGgHdfkgvq4rRzZc9en9CDgf79SZHeEiYCWmkovrcaM2hEjjgFZ8J5FFgy5TmUFtCGfK",
  "key5": "sQtFCntnr3GN7T9xF1eFt1SxmXy45qxX6KTRSmZCm7RqQ9JjqTWWcq6Rxkff9bFRLCRxHA73zSVS8SBbQySrKvT",
  "key6": "5U9Jd5R5mWQNJgk7856NLpqDTFC2jHAgEctyJTd1TcGL5swmMaX7dBPxPntQAhN9D6Ub2v6ittvm9r8qpLFDtBNV",
  "key7": "3AMM7fTzCXadXcv2vxqkUGPXmNPUSgrcPURDjashfzT4hdw8zaRuMsP87MDwLmRSsF7AMqxwxP8diQyupCAwa6kU",
  "key8": "DgXh2kkKCGv4Pcit5bbTdoxAVtaqGrPRsGH1f695TwUvvhurkFhpECabRdSu4s7WaJr5uCNdMbgCB1GWN6wUKaH",
  "key9": "2bFbSrJqeuhyUUq3BwJeYJLU6At61NaobuPWMmyDY6ncHq3Z3xg7oAnTPJCkvnWhVbXoXj8xVi9cKmun7eD5rPii",
  "key10": "MgcXTziSisHdiMRxc7QdN3W6KAux7y328VJdjSu7qXBbPKn7Xm1hhukYGTdMFHdvjaQW6y81SySW54o5gDvfH8e",
  "key11": "3RatSsMuxsJBsHMWg8psMPeqY4B7GFPpLRhZktqEJZ3NNeHJ8eQZfHjMDCoAq3UuqiRQ1muAxgRV4ptRGWGLVrBN",
  "key12": "kFpAFgxL3DzrWdxPakytAzqPyjk8XYgLSXMeUFHdqkqiWVK36nXxmAbUnTFTCEeo3ryw3xb3yRQcnAj1DyuuE4j",
  "key13": "2KV3aSgLSKNPfUX1UGSNincRCweBxFHuksv7mDb4WSXEJYomZrUiKGy5BmbwtQfQ7RV9DiNKhtW5H3Yr1XfYSmeq",
  "key14": "3v9jyhX6JRnWT1dkRV8VoKzv6qxmf9Q5MKRm7KunsecVBpymagbeVBPkUNsbi64FP1Vq2siWqNZ19B8hwBGvmxKW",
  "key15": "qjVQe2HsQyp9kfcvp4cMZ1CuesitQncdUJPraZhJ5hh2tSvMzGnKWEHc79mXGKHp8wrCUjguGDhoQ9K1FTAd45a",
  "key16": "bbYx6VVsbqgq5zHcimvAKmTMNwHfgxZydZ5xt9stZRNQnmn1jMFRf125qwH6Merc8wSqsWX8B1vi44juZnd6QMQ",
  "key17": "2NTakPf6E6MeZyngPmeUGZ8f37aYQoBTKDMauxnuc46MTw7Z6o4g1msk8iQcc2JmXeDbBkcX3eiFtJyMYdGk4P9Z",
  "key18": "dEeknK4cvjSXbLs2FkZB873J9tV2bk7Zs3wkowdjiJP6z2JM6PPCEGsQVToWssz32y2dVgic9vHdjcE84QhGLUk",
  "key19": "3zxPJC2Mq7AwWckhFonmBvqg5CbvgZcETiMs6UPWzAT86pygb4sfpFZV38aJpRMZWsqFa4yHm6ggTuaRCaaf1PcW",
  "key20": "3J95aqYfxJv8AE7jjLdPH2ULTuJ7yWDRmmHqCpZ6rFdXZdZo2AsgyF8v9kxFoh1Ppovnu56BezYbyZS7gsiruLdE",
  "key21": "2wXR88fCRUK3CRazqsJ3cnMWUjRFoisme3TbZRvpSWSPTQBdU6BTzWuvArgH96BUSGYTxFZAXWzhsWyPMu7DByh4",
  "key22": "4U1UTwGtKm3bRRxqwrBAaRxEJTWn7zyuhLEohyPSSandu4BuwLc7MnJE8QoM3dFoHpSvLHvjG6RmyP8iQuqZQDc4",
  "key23": "5C4psrMP5GihNzJeW9haCqat316GD1CCDEtB1zaCU8o7CNp39cjV2gMfeBqHoMnfwfsKoTgSoZkknvH249MKGARh",
  "key24": "5QFacwtrwSMvunmzv2wm7hBeRMQLSnTgk32CCb5kA2JffYkn8EGkhY2U9kgtkgk2jvjX7M37zRynarHxSWt4VZ9K",
  "key25": "UfXc4WoTLHjorhejtLmEgAAurrmrmLV715GFJTBrA6tM29uNdZaP3P7LjGnXgVzN99ii4YeGXF5YzkQCUpbjzYc",
  "key26": "YgYsts6CQYCUJUCMwcJGdf3HS1Jbpms5uZGfEuRKtck89BDvtRiYqeLwP5KwM8MJHFDfs8bKoK9zXe7FRAGuxwA",
  "key27": "93KkJj98NykS3xi2n941TZc2Timdx5aJp98P8WJWSckcH1D3oQwmF2FzbhftnBvoLWqW7kLbii6gcWroMT4JCqv",
  "key28": "RZ5cSRKaDXgEYJAdKP39QKXKde9tjJ3oQqmyehKrbkg1uZ7DSnuEn7bte9HTxjt7brQ8hyLNVMr9DhFUumSiRRk",
  "key29": "ZwSs6s9eEwaBFZHDAhsF8Hz1i3M3S5TkJv2bN9Z7vHMeY7ars7jFTVDFn9F9tH48516sz8YXcW64NxXVuidXF4X",
  "key30": "5ufGxPCQa4EHtXFtKsxvZQycqExWcAd2ENx5TA2jp4D5WhehrkKJwYF1dgmTpUp9rNrxuXKWJqyM8jU8pthutuSo",
  "key31": "5Ym5zYhChwRhmg11FS2mHoUtKMscfP1hWMNx411mqzi52pgMNSjC868zzmBGRHqsxdT2APfghqWL229HA9z1XV2b",
  "key32": "2oZrC8Eg7nJHoYyP6P2Sky3LFeyEcE72DmL5TZhueXRnDdoHkcvfBYyqoxgizRSPZ22TNohxp8fuVkRTdobH9Z1c",
  "key33": "2RojbUaVXWXj4vEorsjbujV4inNQWUafxkwcf4BT4RAdABh6jHNgcKoNrmaXGMbDamj5bVnqfXec4A8XnGgWFfeR",
  "key34": "33JP3ZFGz7VQhSpXs7JafwvX8jieG3tLoGnoNrEQspUhudKgBVs4PQAwrTdJityx4KZYiFw2wqRXrF1p8weprYz1",
  "key35": "5w8JAdXgHbQVRuFze8byKSF98LGsMU4C9XfbEFMydMXQAZBxUh3AYS9gVtRDEhRcMCwtWFMnjpMDSNPjLdnawYyn"
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
