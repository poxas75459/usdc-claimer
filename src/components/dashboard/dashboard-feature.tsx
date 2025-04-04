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
    "pc8w4AJSBtuEb7Emtaiz9xNfrG4una1T1xxVXvwbkzrYnpio2sWjpyKSskAe4gaxLmryzadwMkGBq12LZnPwe5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H3AsjWLhfQA4Cs91RwDcVbdbjUxwCDdhYWXQ8SaWD1rRGbfTEbdbvTevMdZtB4hEoN5gQbPAucCaaSwdDRzYbph",
  "key1": "21C7iTkX8TqwKfz2RdJJZct3wPR2GXmS2514rsxdsQQmQ5jxu7LDEFcJXX7zgxZx76ey9r9cZVB94jiNZhjSrfy6",
  "key2": "32CBYF1HmMQvFDqsuQktUDW6PZphw3JTFQsnygNftJG4MK9fwrgcB2QVsy5oqz9bNP1GKBTbwAyK7xziBfj2TFMx",
  "key3": "3K3YxaaqcQ8UqCh2NvAWeHmrHqoBhs9k37BDjJab33mizb8Rpkk6pRX6HL5xzHyeU7uc4FrGjhTTaJs1fYYdsoM8",
  "key4": "5Wwijg6pWAZqgB4WyPKkRbEXe4FGEDFPkFSoRx68qjoTvc2h5HEuBoLeCR1AsfA7PA4zgZsqfNkwmdF15s4oAzo6",
  "key5": "4qf15XT21wYv6YPxuN9yhKBRVM9oBUnZyCiWFfGK9DSvUeDiqkH6KyrkDomRQXCroysRzfgHNVFg2JmkdyUDR17q",
  "key6": "21zowewM1Utz4KS3LXNWdoyk8XJiZQ9QGqhSvGBiQDMVtTgTEMTkSqgqu3uSYFDmVwdctKmt7hQF1JvBfn5tPzoG",
  "key7": "53JK5MXAjHSQ6BmaQdj3SqnPTGaZW3uxyMBdm3U3n1UgxEAAq7RBSAcTazRehHsQULR75mYkK1ZposT7DWV4Jb5c",
  "key8": "4gAvHxx9VbjhQi2319DV68p7954hsVYAYLt7kJNdUEvSRAPj2KiAy9RHaJLJcj66HNXiatcLnuxwaUNq8jQ6uSgQ",
  "key9": "U53DKbpSyuQ99vSss23S786xNMZrkDGsd6sCZK2N5aF8ewSySxPHeiAsY3KZNjEzBSjxx7gGkXUrkFf1bQKHXCH",
  "key10": "3PQfDvsSfu2RfYrHLAVKGhkCQbUDQUzijb7xHTjhsMNFPRwcZze7duSfPVU2wec3cQEU7Ef3w1Crtoz2yEYL6YYX",
  "key11": "3qa6hA4r7ccYdUxMotuzRW7mPGG22uE1S38MdvAqLMamVCsjxsGuGouPo53HZDE7rgFMU4z6S7ShSM9j9nbSHCht",
  "key12": "4TRqYf2ZndMpimoBjjfTiNVKS9JvwDPfJTZ6L3sqaLkNUskaU8m3zU5QgymLanp3gC1nHh8bCtptpSry8AB6HYnC",
  "key13": "4AvhdnBJidYwjakyFnJ7HKeuEDcdDTXV4acvRhuUjtoJU8c7EJgaG57aUAvwiSwZAaAro3ZjN1UnYnMMbgpiQzSM",
  "key14": "2wiZ4vu34L3RLrnVRxSs1RFE9zdf7BNoMVZzo4oHnAQerAstZX4inoBoZJcNk7eNkD2WDYWF9KqVP9fXqxr7MaLM",
  "key15": "5Sw3B64WuMB51nvseTzjCAteiJoG4LZQfKvWVjuL4wFw8ujkit88fMxuJfJ3dVJpDiUKr2xU7L7FH4Yg2pnnC1U1",
  "key16": "62hXx6Dgnmg4aCDtNAgorEjjzgYn3Dy6jgfkgTdVJGN6YbsxkoFNHmFr8vgXeU6N1w9vnb6DxdrcJt9aC1NyyQwm",
  "key17": "3f3vvSxsHX9A6Gpddn3YcDBy3HWNuSZZDrSYJRHD264XtPuWoMjj3CqDiS4CRsp2N93Vw6m9Vzk4ErhNE5jxXMA2",
  "key18": "4LSt8UeBAASRZScjKojnXghrs3sUruFxHxEZLzLwfwt43J3FvWckAyAFjDZrR5QYT4itPE1qZ2kubhpgVPKDSKHR",
  "key19": "4R3cFQDpSnhZd4C7C2m12kEhHZyrXFwUBeyMf3ys3LJcG6ANKRrJQH4pGYnGvvCdywroe1HZRAa4rFEDhWK4tmVk",
  "key20": "QShN4neCGkMLzBYa5buNAt1ogwd8MovV8L227nRmDNPXevBSJcNNZFaUquzZnHYmrFs2sQoXHcRUXwp36q8kPU2",
  "key21": "dYwZJQxDmkHEctotRyyGcKabizQF1xLtSTUx5367pzJemX1q6PFC11hNgShkMxfLipLkFdkr4ZASDA1H3cPXDLu",
  "key22": "5PQSvHZtigFuy9HChhST27EzHXrQCG2UGDPxCfoCg4WnW2Bk9Ajqzamriw6KTkEWY67AGDSkExzUeTiSDb3mga73",
  "key23": "4ftBxH1nj9xv8n39MCpzo664LDfp6tMDPdkC9gv6Efg944zy1GVdqXLsQbzXEGu63KcP7XqoZwrTo8ndZ64okDpM",
  "key24": "8HbHPeMdas1Y9D3CshhXTEgaR7YC7mxhX45tnvrDxo9bQsuEhY6VBe3xZURtdcMmdeUupcbnnFMdpA2C2PyTEKu",
  "key25": "4EKV3s5Q5sgk5G2YmWkUsu2RMowC9iLVozgMh47xh81Hzjjb5xR9XTiMbJePhK3uAMHtodF2NXcmaLQLJf1cP9Kh",
  "key26": "2CcrZdfEepcsQBpGDME6Bz81mX91XyHQw7Lvknu7ypacmwb5DGuagh5kP8USmGT8Gy9rCM7mP4ACd2pwtAPYR84V",
  "key27": "5obaufQ96AgJP5zbNokX4kJN93trwC8AaocmLLqUifkNPwwJQHwhNCTWjYVzaM3Tqvp7aprGSt1iGBFHtcQ8SkVk",
  "key28": "65bWkmJ3J84REKsAKK5jiXzAuh7tETb2wh7jeWMPfwAe5onyJe3zmLhrBFvHdFaLd5pVc68JDtuTKZyHE8DRHX3Q",
  "key29": "1RQ43AchMnyYPq86o6pZ8LCkYt1yYoRks7vCFfH2VuRQxhZ31WK7vHzwwFX4MpcPFqb7ucYorLoxW2CZkN4aSYZ"
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
