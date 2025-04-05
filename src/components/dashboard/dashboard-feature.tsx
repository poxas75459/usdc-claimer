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
    "4upictABEUY3RL3zWT68krLbCY1WFeHQu3pg47dSVvVqa1oeH3A66u47mtjLGh3NFrVuDtCK6iX5WKs6gcHbYSem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x5HpfvKrwRkWSYATd1NYXQFgv2P8g9v6AgtCNiD4gcqbM2J6H8jEXptDLYEZMJQQcq3Y9MfcAfwB88FsnEUr7aC",
  "key1": "HBDm2Uob1cJYtxMEnTavoktNhQWjWJKvLzbZrJitX3rNyrSoychS6WMcFfrBd9TgaxPddQzrf84QSJHQ9pLjCfj",
  "key2": "5jknPshxCs9a2Hu4wHLK7RK9KZpnPgRAjZEv4VSAimfYhRnuFtzcS9DedqrBjYfAypxzAsf9Fat5RCFJeZkCPJuK",
  "key3": "2BaPTYUpjaihTkK5o6eLjFgpXFtcr52TMpVA82XD98mBSax4TCNV8vTNUCkWbhrm1J5goev7t3BUxqDcz3DG7jRC",
  "key4": "5QxZHu9EjgbLDoCgBHD6Gu93S63Z1oduMxLmTme3TcRt9QhtAutM7YBGjwftUoyy57pdMUGd1CnQ9KXX4w4VMRjs",
  "key5": "djzXJrJkcHZxJ4ZrKvgVMdaBieP5Mq8eZ3Y7AAJJjC5S4S9tZmK7mH5CkQU4QBeuQaTDG3TNC4HJQjsgmLRRPxY",
  "key6": "4RBRZANZ959ou5Pc5ubSqxGoyM7RmUYxj4Nwg5txaDyzLynKpG7gMmrSsKoVtHEo2GegTqo1mr3Q3QVqfUjhXDGE",
  "key7": "2DNzMw3pzgCjk3ZSYZ5PioNF6Uz6ayT7CYDB6aUyf7wkmEob44rhhLyvBrwaySXp6sJ9LQxvm1hTyQdjC9XR3RMC",
  "key8": "3xLkKgH7gURon1t3heNUtJ4CUqeEdqw4KqUWK8qGb8gmMXV2SxcyuL4he9859GUruqsYJUa15gHv9k7pSWhp6RrZ",
  "key9": "umg9xmxyJ6GXJjtEhssUfuGMnjyHMYL1JSziP49RVnVKk7zPXqQQ8rbVScTCGuD3z71G15kxQ3vHTWhLBcWL8zr",
  "key10": "5gY3c2M3FMDkCBViTj9J2HLCAbsUCc6jYSUqAZifAHPMTBsBuCroBEo5yuVRtwnDwckRiaFuBt45kHLyEn6aEWGU",
  "key11": "4LrEWMXVaiPZxa26UJtoNixprpVc8qbyE6u4SWqsmzaSF52H6AJDxPwo33pC5WvCouzwNYgLLRhAY4GFVqrntB3m",
  "key12": "2fdK3jwnRsyAFpKPe35VT7MTzLCrz6ZmFp99BCXAJ1eGLa9YziV2Mc1oWnXgcL3vGH5quVAf7GtuZjFgGqMBxcUg",
  "key13": "tZM926L7zaURSKT9QPanyzpv3bjFf52XRyVPazEThVRBjHj24kCoQCfzBVioG49LYxty19paq5bukaiFoizFfAa",
  "key14": "4HyScFrDhkDSJxQggp2t5wrctLRTc2Jb8KnQ7ZFBUC3cYPbUviVmrzgc8C1QFvUuRsD1GtU9oFzAgf8ZvYusB1a5",
  "key15": "2wbc5SP4HTWsxcGSjS5LB9Dm9GfwwKXwwzsmixFXw76wjveqU4L1mDoD7Jq5EHVh14Jg3FjZKh5ZmEGw8dTtEjtg",
  "key16": "4HVjq7mMzLZGexeV3XX5PNDHCbENLiTBvP3Wug2nWt6MXGi8yhaViXaSMMJx1jSK9QFKGVFx4eNRB879r3LU79Gb",
  "key17": "4S9Pjyk7MaUQ3tLjybPgXZSdYoL7a3ZuvERme83gzzhnCDSsYviHA9hqMLxZ3CHUuNWyHM1Qi4nTSb5LWwR9wGLJ",
  "key18": "3XthtdrTSFgsdp5piVAvoE1LvEDoFdkY9CUsmBQbNfFr1s3dfLUKLGJoNddb5gNW8V3zvduq7FGCweaTpwRsArw7",
  "key19": "25oDNemsK17ardsLuvczsWVWvusEJjiZHJNnKtGpASWdCmhuEXqL3SDJuvy47x6EuCQEJxD1e5QYuLYMyhYwC2Jx",
  "key20": "cjj6kabqFqgmY8Ecp9FunHmdVbS4SyWzqaDzEn4pLx1G6L4suaxneH9snJP63GYvu6pnTz3XUDaQCrS2niCfAJZ",
  "key21": "5R8ie5Z9RbDAiHJPs5oa83YM9Pd1X1bEQ51MXoTAP9DCYrCASs8bHaVxNT5JyFhBQAAxhS65wpLLacKK1Vf17gnT",
  "key22": "4wRwJdmxiaLyT4bkFL2rXrHNFAYccV3wn2GJQGeAfhQJsg1R1vXnEtChTk1fJFMCWwrL35abC59tQpkT4WMYmYir",
  "key23": "5Qr5mXj7uxqwjaFB1knzMEwGgcCcLecpeCs9af77Ghfbw5gtw96ToF6kojcK8yDoRGa3KsFGMLvFkEQYgDaVtMAT",
  "key24": "3oN5zCtpvWYWFgouQnesAgFpr6yiiQ5LZ5VmzajKZAAZQGJrtNozoZd7x7jrHj7BvvzNyUbEb9nD6a2JxiNxVor1"
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
