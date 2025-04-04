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
    "3NXHC4RFaRcj8wY8fht4i6VthidBRfd6S18jjFLhmmCP9AzfrSmfuhdYWrgEJK6csx5GTSwq9fMMTHAEETtag2SF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vvGNXC3xSJAW7U5zS4K6nf7SkktfsYrEYb48x4HtMqCPe372Ey3kmyo5AJZXaiPgGfTMpAormAWHxvpHAWR7wJT",
  "key1": "4RP3KwnbpFKfWRzvnGFoUNWaBVZEMGBWHbGc79Xx4vFRzKHwVyxpTzM3f3vaESgk8E5Bz27fP5X39kYPTVin5ScA",
  "key2": "266rvXCwrLTjsMNESuhg7hSfnL3hN7bfJBq5g8cs3vduP65UM7V5nbFVYHQD7SoGwEoNppzU21vqQrULT59AT6aF",
  "key3": "nApuUm4BDaikcWtqiEbt6jJRh71LfUExFowzaA5tskhbeUQ6SFSjVag25tBowQTvhaEKgBTgJsiEw16aV2erKus",
  "key4": "SSAzuT1kYspXXzZ52zaDenX8Ni8vMV9NxrfjLh4f3Q6jMSDgLgNMNCAvAGo1LoWKP5JLDFS6U4yxqVTL1NWo1ou",
  "key5": "x8VSCk18rmL6Z92wERjzGMrtna8UFRY7Rk9sFBY2YpGbVQdtTWeQhTJadH1iQuqH3Ri8GnjseQwihxNCHzoCKZc",
  "key6": "vxDURQ3niMpsAucXpD9uq9Aj5goL3Jx8Ft1us4S8KJBFsMn9XddznBLdLTLWfq7xVqq2jC5619kFe3ZdtDsUDqJ",
  "key7": "NjjgXe1jd4bjmFrhx2XxHsJ9yv9Gk4oqTmrL72tdZTGWiNcWQvQ3mRsBZCbRk4yYDdeKWU7wKYAbRbsY39EfZk3",
  "key8": "3BSxQrgwTrFezzhBz1vXBaE5NjwbGCfikyjeFeYYaB6qt79NtJgHxpmuu8S8YVxZZa5f7rnq61pnntPWRyvhjmNQ",
  "key9": "3PfDiW6hiEDbPVUgxtZ7NDLsX9TZGaALTsGJKMZnMwtesMQhS6gUydMK4CVZUEr4nUZEWpd6YHEP74FJexfXEwtn",
  "key10": "gasepWMP8AJH7TWgp9TZShshTEEAmZri2t1A7tDCkDXJ9oBbPL41p3FDStiTu5AWhn1FNrm7TnDw3KSuDSfAovM",
  "key11": "yBfRQYungcGBnfbVkyiqzd34DXAJrwLpkkJE9T55WR7qm63kza3waHiS4z8v6xHcaVmiEe84GsDnxVm4soTB8cZ",
  "key12": "5xhG63gZyhTYnyWsHkQvPTBejVH3dxrhmA3VWhisxdGNi8M2hXRSAw6FLZtmDFeyc1ryqE19PqbEAU7uSJj4mvRt",
  "key13": "4fsDpRQsUtYKazyqAGzRuiKrBtZmgo9eUDU1tqAwAH5Fu7MDHjXagBqR4yb8uHDC6ezqpoPehpNXQK376TdNUMdY",
  "key14": "2SUQZ1LNkMRU7nMhrahVdb3UGhczSKybkJcQKgjGbeG1WZSngiRgyZs6opP8jwrxNDZGMsRi4uCyVLxHNK1sQDL2",
  "key15": "3H47s4spanvWrSZ26XssZraRaXAjPG7uza1MDZMpPwL4mu6vbSErpcEG4yGWFUKGmCB99FEARvCyJ315t6puQTn2",
  "key16": "3gEuMtqJhkvNVxHQqMnV8SDNw367b2cvgGqAa5BryFrQPQFCk86BVQrNby9eitu7uhxNB9EQq6er5eELZULcD2Z1",
  "key17": "5R8stFaUsBJx4Nv66niSq8V5t7DopCATzFWbMRZY2pD2da492X2KXQL33Qja1ZtYoq3syDDtH5GonMKupBfoRHW3",
  "key18": "2EKBe3TEatLZnzsx1Q99FVb84NHDpXTHKQUhpUVgkJ9otCQtkiPPxxEVAxXiS6WX2vnYks7Cw7DDoErVHLtXvAPu",
  "key19": "62nomcgtRDQqngUaBV3GoFHTcUSC2ZQkjx3Zg6w3UUfjPZMLXYXjN1crKpS81c82WZCyRngDz9z6FPeWMT4NrVyD",
  "key20": "4oxjzBejggJ98vGpUSUwWkSckAicnniHQvuxcwLeX5MTH8X5nQeTPAZK1U6TWrAVm58UvBBpfRBFqVy1fzkT5yx9",
  "key21": "66KrKKoo8rfArTM2qexRnon8jJFVMwy8yqJeEFykdrohjdfbaqEMcuj1x1Usc4DDPdzMocsZzpEvHDnisiuUEetJ",
  "key22": "4qkp8933a6fi6dZSpTyPhpB5AYo894Vajm5RHXGAfQ6u4geXemCc4SVLf2XS4fxeZrC9dnfHjys1vWAgxSvkwQwe",
  "key23": "CrHsW53E3JFZ1c5PYCa2JEkE1RFiRsf7y4LcfcjcyN61KrE1kzqZe35FYjXn7a6vXRZoSR1doqYj7uC9kJkxwKr",
  "key24": "4MdabvrVGFLa6imtfLw24FbMFMEJWYd96uH4f7rxJW17xb4C91BpACFWfQMFqT6duLb5Ww8TzDUCHZV7jikqXNMx",
  "key25": "5t6yodQswwX6MjaRgFvAz76G611sXCdFVKqD3PQGGiU7hyNLiz2apWPmUjvEeMMYvQFQV7sWVCL3KigzwLkrT9jZ",
  "key26": "56CFd9foyQ1GtVTMTEdPi6yK7g3qznWmvNz5PgwxzRKrkfuamham5ES8jFPHA72hoBdZV7HZjYaHbt1oEEDG4Ghk",
  "key27": "52ixWAYrJsK4XNhwYpavH6b3WgGDmQu9RT6eG8ZWcvsxb9d4nopheACjbDQ7xBUqHA28sLjV5xAcfwcNxiFCKZti",
  "key28": "4FDGjJHJkH1jLSnZ6x6DtGYSXAnwCEVXdDohapgnx6RnnQo3ntUmGLLbpWVauiTo47wHkMM93u6G4ycn1af3Y7ay",
  "key29": "3HSfrcTaEK44QYubgjm4bnwyt17Y7kpWXam8jmPq6LHX4J4DwezRAECeBnCKHELu1VxyZvEjFQB9ndvruZf2C8kz",
  "key30": "5HrGVEYxEfwS1NYyo5x6v1tjjTuAtbvNyVwpcf5ZRvgwNZZwW3HELwTXVidaGCEsRKy1p1NxpPzWcPaoVxLd5WfP"
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
