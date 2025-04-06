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
    "2LLe4ULE1SkXGYJekEV7ELXJpjLatPuDMcKQ6yghFeAKZkmGm5McP1CVVT6JNxptMKzG38JYjZbMtUyumnaTobvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5updi3zGnnzkmtV4fhYUifUVcmpEQpRpfgsZEdYiHcwWNMQ4ayo37doVJuGEP2AKhCwMJ4PP8m5XCN9U7dyEo36t",
  "key1": "45b4bwphWGcUc88perdYUVGfj3XhdkYc3iA1vLi8BFAkvinnAFLMi2GHhmCMEsmiuJ7g86zwEnvEvRfGBEszdZY5",
  "key2": "3pBQmAr2BezyuhSHx8e5EYRcYt44YBH2yHFS3iE4wuu1aCbp7LFCZscpcsjHzHvtAnW442vjX2uWaYvpU2xH98nv",
  "key3": "qvdJwwuS8DeVMLrDSPPas8UGGXqfiF3qscp6meFLpQDK2smjnvda55UBNB8PwR3nE8pEtbC6m64Nr1Li9MEGc6S",
  "key4": "5UZULW8vti8yHdF1zf3hFEFrho6FhnhiV1kEkr5529wizagSQGshu7HcVy7v13tCwTNRahcvqy6iGUUphiCcF1nn",
  "key5": "47ubeXHPWjbXgVQTSyWFd3oNnZYjVAj4xsHdPuiTBborGpdsaHBYA5Mc2DGhBjZ8MUFuAuRnsVNPijz2o1xUYyXR",
  "key6": "2NcLzCdct8cJ15VfCBrDyDmiU6LgXb5AMVdMCuwSLkTJuNQwV2tqpCedeHPfHVEuNf7tbrpcJNZb9seEUkMME1F8",
  "key7": "EHNcvLwX2vp9TnxSg7Y7LS3wCkFmQSik8oD4G9RTfNRnsxxt27diNFq6WceyjeoEJErer8aDTh5hY7KTkjA6gDC",
  "key8": "3CuCvv3VbRXVyt3vYHjCUyFBmCTj1K9oMNvrBpLdWURgCY5t8pV3DwuUGXymjNyU3F8oejg78Sk3TeKEB3dsRNCr",
  "key9": "3CtviFk7MM9yHKn4WHLHjs8xHM5qoViTTvC16WA38s7Tp8UFswYBwon5XVrMPT2DC97inQUd3reEPqzYNxSnPmZR",
  "key10": "42LrxfV4KxkCUseU94ssc4E9Rijyd9YmgPApKk7wkJa4TY1qS6GpA1Tx6pBc41Y4ZC7k7mhuKnUCD61nbDh4rW9y",
  "key11": "23Xzwc88fgmdnq896MXA7TXR8i4ZFBPG482vaa4Jzo1jv6ofY5PG6w63TABboGfwMEc4wa2rGJgdWAcSiENS4N7f",
  "key12": "56Mc7AJZujCD6bZvFHrpBFWwdBT76y2o6xXJoimfNwZp2M66Kavy63HfR8mEcRgLuh732mMHYcqUoxMfuxY7AKnU",
  "key13": "49txJoJPwbRNxQhGb2gj8ZmG6RArsngHDhh3WTGcGUQrSq2Lsd4QRZ9nHGRQBcXpDrB31qnapdQm7xgkZ4Y1Mhsd",
  "key14": "5SCRSn6EUhygBMcLpfgrPVM9pDvrsHFe2GYBzd4D1ykerza8HFwKgLxrhTtrHarGyF3eNqg1Tbirnr5D12hWgRZ3",
  "key15": "TZtW4mHPs31KXCS7Z9YK54gZwdPeNN7hfkVqaJSsVHcitxVVsi8v31z1pGbibb1K4qGt84JhojDkaz2pCiXfnv6",
  "key16": "3KGSpy7D6NfZothp9UXUkonkVeCbTHveGdfKHKB17ibCf8aY3N3ht6dYCfVLvfYFb9qBpw1RNGqjiyW22m6FDquh",
  "key17": "3dWz8eHWp3vNNyMQokNjndYSqGMtFFVGWkzf4yZSjkk6AXLJ7KBDEhhXJXgEzQML2VEUMJjpSn4DNNtM1TED26vK",
  "key18": "2PzScMHR4jSGs8q57zKdBxB7tPa3Efvk9sziStned5F9trYvSgAJM8z7GUo82mLiCj6Ute1cJwHpDuwsWxRd18xr",
  "key19": "3UNjdEFov7Z1Y8SsoUSVyxeDWiWuk5gcU2ScC1fdBoguhC3ZmzPntD6WrYNdZ4SwPJh6B6NXGFKL9MKJ3w97Xche",
  "key20": "2FqpB6CmU6z3zvV2ekXMgR6LzSDUDzFiTTzYb2eiLeJzDZdpsn3o7jjZJ9S1BeC4t156aCk3CL7ng5u8bg2LrLfu",
  "key21": "LQd26ibSgGGuG7BfSLSDyeLjEuC7aHYkHfW1ExBNsf8bFQQdjUy5yhe9AoVm3qYLFw7hFqrnQ3D4jotVQa2u5cx",
  "key22": "3bR33y8uAeXg1WEuG8TVriPZEm2dY5v8uL4v8NRYUoVoGfSi2UqWikqfC6x7D5NnJ96K8yLgMaPSBRuDKysAb1PQ",
  "key23": "3Z7pVcB2EKpXxfYmSJoNFg5aYPdwYvvvgiNQkq2on1ku7snKeUTtNqQym2wqL1A6XxqsZwwR7Vu4hoKXyAsuBscG",
  "key24": "3UuHweTqPw6YE19jg7c5eEAmiWctiXvCP3UG6E5xcny7EP2tdssqha9b5WhT93dkcP1EY5o2XQumdQqdV5Tzg5yv",
  "key25": "4MoYVgnxEGRGaSX4YLu7NNfWMwhqbRfjwvJAeXYfH1e6kHSFfLGMZUQT8TkuqkWC3R96GCzT7TkT75ftkbfguqT",
  "key26": "KP3Uuxv6XeyYTyuFxZveNtoCBz2i8U6BiTMd4dc4RudCJCmstD1EirCqdGWpn2v2NyRYqxJEXxVFBnQdRaKSyB3",
  "key27": "36EeFqznz6F1AJcWS3SEyLsi8DHgV3Y6oh5AqCMuk62d9R3VN1zvun6ZRfS8J6DSaiGebvFpJVtoZuzWfQkTipUb",
  "key28": "3oqVYvz5Tu8rVZDnb1vtnk3Km5xRmR6XK4Ym86PNT2SiaPtTEuwbzgeNHnmsa3819GZrrfNfz2otu9EXTQTd8oc2",
  "key29": "4yhT9h41q2TPbxDjGNzDurXuAYthmgnGcZwG1o6wkwvTPfRfPuQkHkepNtEjBsAbCfZnfWmUeUjLHCuoyezPDsBn",
  "key30": "ZCQx6TZSh6LDweXNZorZuetC5xvwatHaAo4Xkw3Xnog96XUizHzVEqfSz7fxCGdftDcgiYyZKmTiDYCaXHQ7fpd",
  "key31": "4GbfxnAvXiyUUbfcokjXg5PTtBBygYsUYL19aTgJ1NPpoVsoh5NNrh5Qohdnp2oVG54A2uWRzcMKez7GbR4tQxft",
  "key32": "24XVQg6QLtTukDcxfKfKLjwMAwAsSv55wTBdYG5JNpQLFnDYrP2EgrcEm89fj1FsZ4w8otyqYnW2tUGLpbx3uBZF",
  "key33": "59aT4A8SMkzaHPF2JnV9ygMt6VFaXU6JLCgYaif9GSRS5Zpxp9xhRX31utpMCeuDuJ7dkvVeoYYBZSQUH2bVUd9G",
  "key34": "2xqjW134tQWjPS84aGJh5HTMG6zyGsSdp7W4prkgsRUYoiBGj6rkA2sKGTwjgpR5y99qKgx513MPXXvsxLczAzpV"
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
