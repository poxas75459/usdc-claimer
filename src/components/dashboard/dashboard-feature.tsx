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
    "3yi87oa3gREg1pr7vUfmC4ceU3GQR5YHmiDhXjkvxW45XizmbVcu47XHgyhkoRAoLHMV8FWAvNctguH4SxKgtyRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GGBTHndjby2knBthiuMtEEEbWiM8vx8Wu3PZCE4KJZucA8fUGe8iyCG8nNeGhsYaRgr2KJhLEDskcW9sbf6JQM8",
  "key1": "4sQJD7hQ9uqzReLUD8E1vqZjL1pwjgrCJaSNiJiM26CchmsBuHX63bqptNTogpw7c5bxrMMzoSFftyUTggHoY179",
  "key2": "yXBu9pBXpPR3Mcxa8FdrsJLcDGL4ovh9KZytEiYy14hTX8bt62REeZxpJgAqyQKx1Z2Lvgds35hWPz7LmcntziM",
  "key3": "3fAvD4E9Hh579wzf3oAbFDHKUgFmk4z2BynAmdA9GBm8TdVic7fWFoUqxWzTjwdMeZpSXf36kbENvWiKTHkvyS7e",
  "key4": "3QwmtVYyHbhNdQyiaS4TTNhAYhH5oDxDb3xS2P6k9uUvWUuvtiQ6fyQBUNubvRYP1GAnwFkNqFbpc8sF3aGRdMub",
  "key5": "5GWQDuwW2Lp2H1FWFKSkCV59ifqWBq1b397CYwz4qsWiV9NhFdQ6b7FX8ctrNTbC91YuhXetpewXcP1dmu7237G5",
  "key6": "5rb55FKdzLHoH6byctG2i8aJacW687TKkuc5JLyrTFrnTmZL1J7nkkU2ZcxouJkGKXTsBX1AoftJhxD9ZefxjYJm",
  "key7": "66T7APkYToEyJYqPY4wwyPTnifwy9rD17huaVobPmCKY8tcLZnKjwJj1kSrB5TmGakD374aNESwGYhULqvwDrpUs",
  "key8": "2NT8ZckEGYkkRzr5SxsAK1DLgH1bRWCL9etBCdavqamyTbgVvWjT7WiyBDjFHHbv4ftiB5Mj1Gq337pEACdwEv4g",
  "key9": "2bAni88pviyhUfm3ELnBPvzkWDinUHbLumm7UhyVWVMW4VpWJdfjD6pdBzdND9WtGeN4xfxDAtz5KADYYjpG22DB",
  "key10": "5U1Lup63eYaQPjWcbwTvNy9FFFwWsv2PdvHb4wZNhWb8J8vss54fW4ZJBFGPAqBk8ayeKzw2fH9cxH9mHjP9DWrH",
  "key11": "3DbzVbEB1T83LwVbNqoG2LEBexWMzkHYf7a5uebsAYpYb6sumbqvsvLYtJh62gywU4Uaoui9vLACMh7J9yi6UHc7",
  "key12": "4tkN289Vi2jdMJ9MzmYjoeRVQcXq89UruQbdqfcnYpnzQeTqok7XwqTNHAHV8ppdgsU5aJkMj6ffYkj9mxCizSQ8",
  "key13": "59mr7X6Kgprs7Son6ehp8cfsxWZEshK8A3je2jLLpAK1uGrMujFMKpZYfBiwACu5gNM66t88j7aBe6gFv5eP98Wz",
  "key14": "5UA1Tx5FBtoGCUR2mKqeEiNgYG8T8AVWaM8zjLqwdX4tSST3YrsCH7gYYYpu8op9xz91GK62BnxjR9dLLW7eVSZJ",
  "key15": "78m1G66SsqMwa13bopJDZ7W8L7nDCKSj9ZY3t2Rrt5fhwtMmYMJacSGPSciuh41sqJycFjWXYcW45LFPgVed1vq",
  "key16": "2EvW9iDLELwkmKxfHYPVVeHKuDsaPYq8eZERtyqNw2UBVosEk4nR9632nCBnd66Vtto56BsLz79jNZam8SVgsBPt",
  "key17": "3dvmGXavEpf89RQgvDHBKkAJkWd3H6RSurYNQkU9D7Nb4Rgz5PjfQ3MXrBsCeybQX1ha2N5oJsED2uTi296MtTsT",
  "key18": "58j35WFD6FSCvKFKz9SJDzEwdAeLMeABEkbL3H38JEjzHuTQ5ZKqimxDzrkjzGK2xSLUob9hb5pGpPrU62k4sctA",
  "key19": "4LNtRpYk6mqXjdnQUwvnpNw8GkjpuxJD5gS8yyxhHkFNNvCodaEQpMtzpD7kRGkEHQcAfbzbmpm8F4Nuy3BAZ5LP",
  "key20": "24wZN194SD6a4VtfLEMnJNwiLUpfhoKWrsio9YnFLzu7X82VhMEwCwPtPcmcQwHZNo8GLAcFu2CXTij2TTwnmELH",
  "key21": "5sQK4GFsCUcYhDztPH6ZaK7nVoAJz41wroWLz1AHHzRga2K7y6VpH829Kk6cevCboWfzLNnxtfQJqkM8pTVxagNu",
  "key22": "2PJYXxBQQkBQTdKC9f3QvejFBmGviypKBYsrYJEjhMEgEcv2WasUpixBPPfFXyMYk7Fabyba9FxLG6FxupdBWkfa",
  "key23": "2ozS8mXC1htFWR5Ds26S197ajdXpBF351VRWjL8oxD4uPmaCcBHDppypD3fDSmAjCgxAYKsgK7uGeGLAB6zX7Pr6",
  "key24": "3UZqPdRikJcGksM3vJEGnCLTVHH9DTQzmhXoaC2ZKVmJv4fVRp8Mw1nQrKX3sfxfWRV1M5h75hTw5gGRdotA88Fm",
  "key25": "3v8JzpWsLg7p9j9SkVTodBdSS7Eda1nRtX8yaeSgvNmvq9KvW1A6Y3waTqNaQo9kJYkVi2SoHhvTT4hhp1yxK4m7",
  "key26": "2nxHdCHpza9nacZPhn5aMvC9hdZTU2a8SkNNcJAAjrVEgp4QbaNaQHrDBzDcyTjVQ8CEKTxgEDMmvgJnMrG4uFwJ",
  "key27": "2KW4zDVrPqwrvr5rrT8dxTC4T7m8QnuUnMhXh6jim61zD2ry9vsVvvBSf9FX2w6E4SsK5N1oVbbkad1QHNmXvCRK",
  "key28": "TUnzSRrh7mCmC2b6RTiVFF5WY8tgTazkJh8Y6mPrt94G7AGSpbUdzuiMMs64FhZTUoC4tMSxvh9CC9UkSDgn5h1",
  "key29": "39NiNCv2gnaeZa5SarZiihBoRJzvbuDpVN7i2Ux7sKELcN7H4yS1q6zrbze4onfiaKBC8G4BbUjMxkDGvYXPuLt",
  "key30": "4j1Nfv4TgxEYNqkV3mmb91gPbqHTHzz9k1jzn1U2BbcFfSvgeQ3kHrBp3Jq2PSqaE2XCy8R73jY6MBWjx7PeWxcJ",
  "key31": "33stxtejiogTzTBBPrAjaPA4NP5Q8h8efibjU9BPmmaCFFroTNym3uBNYfSXP5k7jWHnEjuA54Nody4b9rgZRnad",
  "key32": "fL1gRAbJmzh7t3uxBXV1pcytn7gLFwC9n4fnVKjLsq2XpAGpCC2VMSwmm5D9Annn13BuVqWFkqHLzTHSrBQyCaC"
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
