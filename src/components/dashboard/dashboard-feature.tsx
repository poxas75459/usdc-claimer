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
    "21gs2EzDLM8R27SmE3tBVTUcYs2kGM5hFsshyV8UMk97kXqPNakRT2Py6v1DjfGhSZSBPKcWBTsA3KyAurCnn5LJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lycawsmi69AjkBHMd7weHKgTEmw24TSxXgkzN4hFtSEHMkFBt57KFHgLmHsjdVMRxwfVW4cXoqRi5ZbiVnRC351",
  "key1": "65mSWDRXmYTT1oPbwJQqqGjCmNK79Buh7Dqe2LvW8Xiyv9N19tZ717JiG7T3mftCfYRiAjfk5QcV4nMTLBhDireZ",
  "key2": "3ju8hgHpDTvyy3nYLc1kfAdStVfNuoAjMbvCpFHbVpmJvFUVpdoPzmoKZLBtPWkNutMvmaRoHRQjnpkqEExeQKE5",
  "key3": "31CUShbJGKtwnUbBsjs8eudNMq9AQYh7PxECjKDS5FPK7eLVrJo4mYUCMFJ2Xyx3aqmLHncV9EZg8WHhELYbaVte",
  "key4": "52mjpbKijWPUhNYggLbaadVCPhiLRsbQyFPN5kpQqqkJe4XV343mz3wy2mAJ39w5zqWoyhhvoHgnqd8vWAW4bYnD",
  "key5": "3f2WFKQ3euxJjYxC96GWYUqPMAJWb3rUa2JniYCVmPRcgFMMHEBkB8YjxMDpu67Pwekh6cifThXmHKgXtacN81Pb",
  "key6": "5h7XHaeSu2vg3SKMstbQe23qRo1ovZZ2aW9mJdXL7eVvZc2GH3gMn8JVKoHBF4zZrJmaTijRn6bMYxrb1VmVqds9",
  "key7": "4g8mKxgjvSGURs19r5NRA6CZPYviZ2zonCUkRyihUxJ2DaAoPe5mxDUZAWjh6cBB7Ho66eDrA4Z2LcNGSPuJq7Pd",
  "key8": "DdQ56KFvZK4ENNLGqhJ4NJgQ6vHu5whTEdQidU799TWgdR9ztGNA49YEXMYi5NoDovkWV5FKrj9iTDBsn18gxct",
  "key9": "4maSPSzyCY9VypBJGvL9h3dyKM7gaW3Tm6DHSKG2Dk46LjZmxo3NyKnFx7m98jyXq2VWJXWpa55Z8dMo5KMUKmD",
  "key10": "3ss42qtBLoPmMFbr7QuQFSdWAsV26pnoWFXR1yPZ7n3Gj5CGYZmg1hTUf9eQn8dh6PMgdHjcvxtedz86KVufPemG",
  "key11": "28YeB2Csjy7ATEZjEGKQNQAzexLJgay5waMDTuYddEoKimu1YpiNXatn114CK5Ay6kxZQLzq1D4oc11baurpCKJ1",
  "key12": "1PEKL8Kerq5JwBXKZPusqjm5zRPERWYhVVuKu7qaVYUa8BgTP25sxQgxK4KV3wnSFpjF7UioWHuastq3a9MhgwG",
  "key13": "5APBJNdNEQ4WsaASeHHh9TYFDhXfsh6aCRfS2yatS2k6f533KXNCeQ9NYtq4kJKiZju6d7CHw2qDytoK8Xf9jvwT",
  "key14": "2PfCP3PDPD9euurPtGoN2tbb2eN3DYnkg1386sCAHj4b5WFnrsBiozVzA1iKLbzARXpF4RuEhWyMaXDZTnPz2n1d",
  "key15": "5Bt9qLe4jo3SapLjsmrU1uXNu1fGrQcf2kzgzEvnKmMoVGKYE5V3J4AJYPYhN4mXKVgxivXdMwsKoofqfTrkbFXk",
  "key16": "4BuuA5MVqh6bswLMDMHBkkaXGpGYcpVZjQFFQ4oVT6A5iekC6mo88Ep9g6UFZQv41LJcqguMdCUtEdQycxuK7pLg",
  "key17": "4716A7zLrBXc8zSVCmSwe1wNmiqjAci8Nx2YFuTTdrxrMAdkc34UNghee7qaqTRi7VccXVgwyt6f6bpasf4G8nCy",
  "key18": "4YMuc3fkFrF1XpgwF6MkfC1ABkRFZL5y2WTa5oJXbEKjhdc17Ji25cs4yDQj1xyfTSRpi3ztsMXMHyDbdWs7aoev",
  "key19": "5hw7n4noesDEChLLDH7eH6WvxK4ktqDeGXah8LC5rL4KHMg1bCRTyhkBEpDNePpBZHtek5oK3ycuYUcjTHVCx1h6",
  "key20": "36YBP9REMEfjhowKsNCx5Vqd4bJp9BxDNJzFY31QQcst3jycmqHoXvLAVzrUjwyY25wEGd2zdHytpVNJGbCcA7wn",
  "key21": "2k3fjZDEKMCVU5o9sHH2DwtrKGP3FbMG4jiYa41gd5Sj2kLEucBbvgMxS3mnQMYKhnuMPFYkfC8W4zZBwciYRwRS",
  "key22": "2wAjWMxqtAvvbvCTzebTmLypAUyunajMem5am3uEpFb7bapxPxDpquNrR5aoWy9wkbcSCbVfnSJfwhzbj9QGbihc",
  "key23": "2UjtLBjUB2AN4Eq1xRqzQKcrjwk9mjnb3jaNp8LESCHQJG19ZNZi4586P89f5nt7pKXW9LWWKQMTQQDwzt3DmYR1",
  "key24": "5G3gLArb31kmnCPGQt2Fe45Cuu1p3u3CavKQcGoqjkAmcL1H9ZwobsDdVAGKXq14Q5VBEv2cypdDzFow1vGQVamW",
  "key25": "3qb1GXiURkDw1aNN9pP5Ux2oLSfgGbSVYrLzEzHrKcSAsWAyjCfSjveu6rtH3L6PX9DWTYQ8DTwU1urBHetdGow8",
  "key26": "5rm3qRm3TamRiKK8QbXN4TFB8bVCS7KXXiJsWGVLx3HNU8amr9wTjSsWcpUp9DZG7xwT4jvu9Nqe1R2mBzj1o8J7",
  "key27": "2yT1ENhADkVbkfxAUivdELDUB8FT2eYgpD9BESRYvQvExYtM9ZQqjFMoJ3tfiy6EYYHMuSABn7oaTNMJhc4ThD8R"
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
