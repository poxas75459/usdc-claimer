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
    "28TfBfR8hfHEXPtgM5GHwfipNhLNB6ZDtU4zHfxHnixGqYejVYEgGMMuyok6nKLSs2Rq9GCYPjqkvgqJwimTgps8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53paNkXyuHUWPFfrmym6Y2Ake4fH98YydWTwtcaTrTehMkf8NQ7NYX4BseSEbFaNj15pxbnwSq965GSeTNiLXToU",
  "key1": "613P6e83isqxVGZFWgT38vsJydBKiJi1P6nX9wVHptvNzKiQqbJekEq7A3tuJe2fUp6TypWNrrN8eiMCFRg1HMFA",
  "key2": "2PjUNmqkd7AuFJem8mKgYZAUefYu7RiEwMdtwbYdVraFWU1Gp63M7aJZHXdetMwfFkyj4h4TBecTS3JXvNokV23",
  "key3": "3ZQdR7mu4jBHGoLhALjtzrsFpsjoPV6hoXMuaSrFYY2Xj3BcHaiTW3bT4UMQadfGrdJsRNAGrdF6j9ahkAtXVPow",
  "key4": "fqewgrDesabEZGEv8dav5Bpn7qzdSd2KTczgzzWk8VjQ4nCw1jZTJYRwv67L6vW5VmG7F694BWrMkEcPBUetxw1",
  "key5": "7LfFC1ZPNDy5Rhwp3WK4zZWRqPoZtCCcU3hG6ZabRp2kUnFduGXai8zCyFXWc1HZxcbiC8k1tH7wfLMDukx4cZx",
  "key6": "mavuW7jBgGzSE1LwCzen17zPHMtJaRUihiDc59qqh2X5GUaVaSs21PUtdbvvyoqR1VsuUW4msGoLCJeEkKaAykx",
  "key7": "5WeMcPNrZLUrZoVV8bZh7Fhi82ifV3W7wDhJkndLLBWJFJRxCFQmsGDvVW9ZVRBvC1qrqKPrXK5JEMncoExYycrr",
  "key8": "2K8KYQMnn5MweLNEEsGdTyMie19XykxxSVxqSkHem5ugDCfvTcHU72yiJ68jzjjWyTnKmRtSibuXUwMeaPNgbMFu",
  "key9": "3mwSpfN5wPhRCVu6er4wKMVTxFu7qeH84CseHhUeGsRHsv1jiJBtA2kaHr7uwvFBcH1VqktJByLnZFLRE2ve4No9",
  "key10": "4vaQuF8hBwCaAJFv2ZP9KFn9yjabig79e7FW3mXgMhFq3VWykok8opPB6bfTK7EimiAAPr67oCtHSyLmwmC6fTVU",
  "key11": "T29CoiveDdykMdtiLNDGVRs4nDSLRrsD7iHDbDsdJv9a2fWGwj3YHU7YZQtf1jWfEMS69PAZmn7sgudQcU7QKLR",
  "key12": "2316J9bUWhLasNERKFnFUqVcGQKwK9RiMF2NeAvbXRQngJGfjmswhZaZeHe4qtnwGLgtmi7tHYTdpLp8zCdkUqPV",
  "key13": "47JMq7bZMufdksxgtv5uSasRZq5pW6BA4S8guerXGSmvNv4CEEi5dkXUZnb4GgfBNa7YFZQvcGLsyN6ZuDraRBHH",
  "key14": "66THdjdnLZe5YGX8kqAh3wedU2p3VFpoEuMYm16MTGqx9hY5sLqD2MajTotxYo5xeWAFrSeGgk3SQjBh46rbyScK",
  "key15": "5hJwe2tmdBv3o71VSA4WYoBLB1mKGsrnZ9CqBJ69iDt3evEiuEvkvcEF9Ga7FCFUMdfj1xzy1nXCcF7DsF6DhUEs",
  "key16": "4wURSjY9pWa7bWzHP5n3i6otHUmDA78UjUn2fU6EFYFjeixthSbm3964oNgZWJguHFNNPoXZ1ngHo7ECDCcKTybb",
  "key17": "3Ywo5mPHjGNdD3EYXRee8Rc9D1zHvgXXmrozwomHi3gcthXcT414J1xXKqfxfJQ5JHK7MnTYivQSiGzHVebAHpoe",
  "key18": "2mUZv8GU4m8Z3WdNvYnde25QKgHZNVEb38oxShGPMY3Gx1Z443HxuYCQy6xfhVcav82rPFnh31kyzfhkNN65tKAE",
  "key19": "5EXTS48Vky761MdrpA2woDA4Gxh72ft69TYhhN5iX1PbncVJPHmBLzMTmzvfStyUWVKqs55YftzR2EUAq6f8HzzY",
  "key20": "66EevgkbCuAt75GePRcD6WEdJmrp5AdwrqApiDEdY9ku7gV3DyAEjtJdy9xozgMQN63sFYBeZGdHzSshLi3wkkBn",
  "key21": "4zLhcYQmomdBEcw5VAyxcSDuX3Tiit9WfEnFj3RPNoDPwdRi8M51J4AuW5J2vJKuSXVdi2wy5fFTSVCFgsHy68ca",
  "key22": "2sp5gnvW7rsLYpqoAHmfocKNoeFXPSwRSjCxtRgqv2WEGUmp5LxySJvF9nZZKhWNF3rCJ1ZJxSdc7sEzX692oXVn",
  "key23": "1uizcDn4TKXkhko3LqV8d5TZgbRjNcLDfXbBFFB3YkJLsXYDEzVDXxLHZZMijziWKsN78Mitb6F1RWh3yr9oA6f",
  "key24": "4GMBHaTPwwZ6utaN4zBf8MocM1pNqDiK5sPynxXkY4e3qzZqrRe463wyVhy1frpE4DeXbZkstYXvbeTJRm9ZN7D3",
  "key25": "5R4d3FpoVupuPJp5zcVH4vSDKfnYfNvFfSNAM6c4Cbj5Zwb7r5LHD7bJr5gZGk1NPZpV7hXBdw2PiJCJXRzXMuSd"
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
