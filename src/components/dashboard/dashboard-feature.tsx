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
    "3vuwTW47HkjZBFPPqbNVCshM2HAnwoQuUHr3evjbj8vhQnEPcTeLyNZrGTtNAWpY65uQTHVgeDG83Qu1uNmvFCtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37phyMArcZo3SjtByT9RYoHupNQxsp9TXBBC8fsX1dzZASFnRDGavj1uvvANXUhj6Qw3mbNz3yctL3t4EQwXrnMK",
  "key1": "42FnkKNeEVm7jVxx4jrFXTwq5bTup2sLifSTopSADJ4rhYVPYeQ95zecsgD6tQGLADC2jSWuUErhvE9cYEZyx7LV",
  "key2": "444Ne8MfnZLQEwwvGNbuTPwa1KXZR7XwtqGxiPsRBGxB8Si9RpP7mupXDft2rcHePgJFzVdHi556qjGghaN2dUwn",
  "key3": "5567GiMHXMGXsp2nv8vVLzC1EWNXMDnofVMbgENWgmeu17QSRxvuhj7Qjw7ewD7Gpy1QRvAjunhLve9oRfjXBKhf",
  "key4": "4EqzrAPKkNKXtpMPCeS7KFe7y9SrkXkKfbMAfkhEsWqJcboPxJZC665PZf4tPJCnEDXaXoiEP7FpcJ249kgWssVn",
  "key5": "4daEKwtM4Wem8cAHBL8JVthAmR8FazvGKMMPR2F5igiL6gsr1NfrFRSqXvryS76rBJXZB7EBnpPAyfoDswq5uYHc",
  "key6": "c12iLfPBL2xWBBrDhRTCRVEqjUyY6s7mZMrHbPjtuhWEMsxBMkeDjxxy9vqRZF61QEvf134CCf4N6BzYNrCd1Wt",
  "key7": "2aVVXfnLBYHEWXmpCEmEMd7rdHb8NDpQdkrKf39Qu7UVMf7c2ou8B2VNfnTVNXW5LQYD8aBFZwXq36g3xRFK3uTm",
  "key8": "3tEK9xi4fMB46wprqaHookjLUkvX17w3rYYrisbAWv4Ez8eH3WSgMKV9AUChKK48DfjSon4WjvkA1DSoYPaxvzmx",
  "key9": "4zrWVkN7FJLaAtVQPALpRKYX3qPARfmRWSuCokU27nNV6NHZGYxe9MdVH5yGHJXmMMnaT3quuZuQuzTBDFeLYknX",
  "key10": "5R7pMntZwwHWABcu6osSTnsR1puBpiKTHSuQZrB7FR8DgL3Cr8miGT2XBZEor3GH6Kj3JNTyxqCUeWn6gy9VbCHd",
  "key11": "2Y7LcooCzUctgZu5k1b86XXsREN5Ey8TtXyD14iaX8fDdFTPEgzi8ac6V9aLioSAc4fmAqfpGmEpsUGco7vRcCUS",
  "key12": "MQxUZ39CBysivKYhuwgTupLvgMCgjBo1LN6TTGANB1VFn6zmW2jiQZ2nbu73qNAdkbyfDMonmz2pkWtu3NpgZxp",
  "key13": "2LvSytckRq81CdneLsRq9u3DE9qwKG82NB7c4U9CXU7GB9pxvKy4JiC1JQ8DG7sxd8oe7MBSLq6u3TogWgaAQqTA",
  "key14": "2ohvAyw1pgj68V35ZmwSnnNyBJjDaGnpYpxoNXNYM4EmyyeH6RTeNmzCMF6kR2U9PrNyPdKoHvV4kvixwmdHWqbH",
  "key15": "4nthTdxWVJuppQKSxEshfWvCcoizu8tgFtuVnPqHwUzvzYAEXjKmPfQiCT4WL8t8zARttX3sH2iVdC6UZby8CSxQ",
  "key16": "2Mk31wALu4Uhjnd9CdhUGNeE8VXSC8SyPXAZ2zvpYZskA683Wmd8vB3SPPLoTGJRt3LppHt9N8G2mYiq5tf2gnqL",
  "key17": "51eB3kC5GZoiz5993r4qmFsp5XFQCgRJaVFiScoVyTw5dB9iXi7GrMF6rssjRMyzxWMoWiUCee7cVf74Az38Nfun",
  "key18": "3jCoJ4Jq5C3MoapZjiaK1jQN4ZgttffzxiYQy75LHW3Esqe1HuSKJk48LQh6qsZSAN8B7E8rvTkPTXbNt7FJriiH",
  "key19": "zjsuK5TbT68tnCd5kXZFE7doJJeHp6vPSzK1UamjzkDpBuTmBQJEud6FfmJvYvj3Fm8o41V5dAXMXUFzRVwJwAG",
  "key20": "4xu7n5Aw4GNPD3mSf2R2SDA5QjPLiD4tGLNscyDZsThW4dZdJh6fyZDHBsK67TU9t3xD7zzBis9UY6hvMR8ZT5XP",
  "key21": "4GV4fnvayYFygni1Z33DV2oPXcyjLKf5MpFK192zU44bq5RucPqNYZ9ekkEoSJaAdw7JWFoDVcqGQMPxWU5ix5d7",
  "key22": "gjNrvsVpjJW5XWZWp3NMLuUsXqkcF59tkgqjHzMTyucPFxvVi3ZUW3m3chbAjncT5Cx81ZCY3gMdtKBMCLRppFZ",
  "key23": "3zz9kLofRC5D28NccMtM5ahU3ZKnqTi6Xuf6W2MBJyJYt5xKVQZxJLc9kDD25q7xZMPo78Ku587wVhqfcTxasfyv",
  "key24": "x5MTvNjzyMnzDhLwWR2kKZn7k5cdvdp3YE2k3dRpGqom5Wty6UgFex2DArQUNEVn6WSFQtiPzdfAxJjFEjHfEmo",
  "key25": "4KjcocCxaDtT6grnwWMTdbTC1Spd8e9JdPkMuZUWbnJj5SSLuH56CGNmZqMRgBc88hy6a7Cs6mnd7mxT6ZrTFJt6",
  "key26": "5eDyvTUBaNH2VfExispGtY5VucPRyujjcZ15uKp3GD2w3nVKuSa7fk7JjHNEQvsPZtS1TYKSmuZnQw6WB9pX9PYE",
  "key27": "DKzCq6j6Tz82kbGALWtCDBQP6rvtc4JovC2CpU5WpTy4RoG82sWCLfpFsPsDpsBDccowpG1DVvypDtdtaJDWYj5",
  "key28": "4BHfMvZxftv5gbQtnxw4BHZXL1RhdXNLqz7U7b8bM6j4aSAvvJfQYpy21rw7iJrKjN68duiNsozyW1hPKffzHGJY"
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
