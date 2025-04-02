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
    "jBua5gj4fALmftHJW3GLhe6CTqhiNcn8RZPCem9GrZZaGuWA6J4CpZwUvnNmMhRZuCDe7vhcPMPTiH1tHCrrDN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RrCjZwCm4QwS5bM9uScYdAjYsYBjxDNcFEe3YYkEH18XaNSWQxwnYbNT7MVfGhdk1wT9uwp8Gt7pkBg3CarooGG",
  "key1": "55WgXiMMa2CuKeqwiN6Z8MYgmb29UzExhHk7fU5upijieZEtgiHMd2yuS4dJZkTpdhEBR9j1ucQexKGDeP5Hfw1b",
  "key2": "4K8LSkiXSJgY66dBjyBnEhHeVHLtWgZpH8CTkaAt1jWNTEaQtTwZMQKYqAphLjMMePFXnr4g5EiLfTxTFRkz21Gu",
  "key3": "4kHa5bPrmTFAKyrrUUJcPQXtL7C97qqi3rZH1yB5GKinUJSaXun8CSsWSPSascBtRmormsb6TDPprvrKGdjQjkkC",
  "key4": "67ZirdASdUsSPeCJBNUPJV3fLKqKWVepzuM35UzMVyH4zev7dYBvbt9r1htD8CYDKfixtKx3RFDLV1wJgu5UsLNg",
  "key5": "3iXbGNe8Z3kntG8RzGJkrRbV6mdvNdozKY5reMioMWngW2gzySZHTKeJxXRFhCRXs1EyrKaBJEvtBChDFuPvaaUk",
  "key6": "5YgCSZxLGBQ7aFFcUBibmQSgV61qGQLTFrv8xBZbkatpiJMymRXRCoQz1qpmzhL6bz1kXj3KeJV4epQrjk2BvPpF",
  "key7": "2YxNxiKBKDFjbmXusPdu6AvDyZbmkb5griw1rRYLwnE8fo184zLmEZMpGGhiTtxaVD6haU6Xh4MWzSr3puzmGfqQ",
  "key8": "2ZdWSukgzogWodP7fFKZ2TgQRgxpM5yVdxFf7ZU8R57GGRjT6C73rVHjzie9qgbxqjegFc57CjVGjZYTU78TdBMF",
  "key9": "2yEazQ3N2y6haDJJq7yxqpXGogsfQUzwPMqggs5qtAP2vgAkDuunGs3iiXkPwKo8aACRw8Z83BA3DvdvnWHoe8pP",
  "key10": "65fXiRvmacSZF5bgJ1piPsioRd4Ls6h1eUaL1SySXoZRqJWoPyg9YaaZJJ1X2SkYritgBnFy9f9YUYAwqn5n2gFf",
  "key11": "28T2qnLTRrHicZVVfsmiBmZnzDQV9etvw7j92PKxFZFC7raJ5cU1hC3miZyfWubkDSKDef2xYBpHCzzuygHMDkKz",
  "key12": "3cisiAQpZcNXq8e58dKX1zkmJfpLnn8tHtxN3DLdBXqsaaTjaYRhxTrSN7tiV81v1beoFutbDXqjNjNwRck1tW3S",
  "key13": "5fxjjjho9nHFU3oNoJgCjJqJmGAA2jhSvwtCD55qCqzaptbEJTvKWy9NY68J3J3mZzjYLX3SuiFpqprN1NAeGnyD",
  "key14": "7cmWcin3c17sqVAvZfXM4p3NYDZDgfLLUxAV73Ngxpvin63mm1TBVKG4wx7BFNznbfPUxfB19tVd83PEWPr2Fom",
  "key15": "3keaid1dgXSPsm3gjNK3Ewkhs6nAMaLZ5oqEdZ3D4RxEbKYin4MYfxbMMHzt8bBupZ5766fupo1zCJAVDj5Rm9P3",
  "key16": "5ds5ArvSj82fQiDGgXg5gv1tm7UtxeWrceaDzewoXCPDQUwNjNHy3TXEDXPHfFL9wfPPWFq8M3U2Tm6YLgtuVbzy",
  "key17": "5f57fr4pvQdEaYxtBXd27jvv2kzNumfXXLfSGVfxh3AdVRpm3Xf7W6VpSeZ8Dg4EAKfwoULiyQWdcXPJhi5YVHte",
  "key18": "3wgbCTyXMoDY9qntV76Y6VRu99ZAkWUW1CfQdRa2Ng6NxsZuDJJ1mYCLnopwSfQgZb5R5SkBq8Dp7bx1QjqkPKLM",
  "key19": "3XkxNtrgSDVtMqoax8NzUXzLQTXF72x43h6JcgGNqrM7zPUnyBGCiVhBwv7KHv7ZbF9An6FcuYcvbzfShfHP7fsd",
  "key20": "5u9Z4M2uJFhXJsT2TrxKxSfnm4L4CwAr6eZN2zWftbNmDsvV2TcmUMqV5mJjWPZRE32HnfCUJ65SjJvrXeZCLUsm",
  "key21": "3YoNsnuvNSKzqzg6HxdrcbAgLqfN75rnaZppJercsqkjNo18fcD14ZgNeUbgfjWtWu9D5LHYJ87j6s4TGLhgtCXF",
  "key22": "egdR9eh1my4sNhc9oN9gHxvxFgYeKH9rfcob936vvhjU7142SuDapAAyvSadVsUHoJDdYQbci47cmG8nmBTAbQa",
  "key23": "2oAFXVTBLHGrYnyApdtCYFaHQeSXQ4T2yTe7AVKVdeVE4v1uP1jtnrGjoNKBoxZkkM1gxAfDh6o4EjBJkyKErjTU",
  "key24": "47uMpEFVx9zMyLDe9fjTekLa47WEKWEHDCQTEiA6yeMt9xmQhZpsQ3Qvh53uYiQhWy6wiS4kY7NpvnFsECxJjxuw",
  "key25": "2fh41W35Gou8DXuEZUYe9hxEzZxZzEaBwLAgwNH6sf8hQQzuVRzA9zb32MVFitodaaqB91T1CRGYQRCaD3zXbs7U"
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
