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
    "3TFfsAhbQ7Rn5HSo8vSRf9Ec4arNqrpw2CrSa8M8Uy28PKu47YXQvENYooKuWHEyiBPU5bQJc6wCFbx1tjAdUBeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hp7a6FRoEddzdM1avtpdEvZWmizYJDVtAec2z3zM47Sx3JobbiAmcceD8e7bx9cug2sESD4X1FR9cBNrtuiGQ3a",
  "key1": "63sGsKu4asLY4vUMvTbNorZsZmMWrc7sFnPBx9mekLLKWcS1PbvEWe4vHkw1v3cCm2mB4MtKL5TJHVjxjhkH7QK5",
  "key2": "5U3tNmr3R616HU8TYWaH6L3yK2o4TB6Y5v5f9yucbhRKt4m2PdatxAHN9LZroCa9ksnt8i2sNcyyvogz5fKGLU9q",
  "key3": "99iTcp85K5THV7yZPMxw8ESnFCZxezsHatK6rrQjA6f4L4Rt319WmdChsytH8Vbr9Wucxyp2Qs1TWAmaHvApcoA",
  "key4": "2ekgeFvJFcpdv2eVWB3bUsQsfdHtsgkYtZK3Ds5cPjzDM1Abv63aMpsyoQjabWiFBPBarAuo4gM1264ARK9DyMdZ",
  "key5": "3rPHFXMfKtUUpNVaQgC7QZG5HJCZmsVBcFLs2sNnPSGkdKq6M4x472ZWtjkbEp2P9yFZFQXs1FyotctwpQvEypW5",
  "key6": "5SdjfYn4gRRRuiZct6kYjdGKSsnG2GehuLKALG1kS4bmmoZW6NHum3mXRU11sGFcDvv1255dF57TeKLmJKUKDoSw",
  "key7": "4k3679aeNudWGyfxpGsqWapVqJDXxjz5872LKwrWESNm2vZARS1cirZwRGk6aNNEwCxmdcx362dMtKqV97nwnWG3",
  "key8": "47FSQbfYfnL1yjqysiyQ2Vpe3X6dvhpcVSsQ6V8XdBpCJZVG3p7W2z42taQ4b4r9GPeB2y6V89yb8sM2pECGksDE",
  "key9": "5ixb7sxKvL5dTkBWUYhQUvcujt12ZB9B5gjQ77QvZE3v2UaMVnLDNK27NsZbSYzRZygvAjQ14xn3CJMqJGyMLZ4X",
  "key10": "2tS9rAoKn6hCcE4ykzMbJrbFc9DdcaYtYCoGxwzx9JrsUMBo31zukS66TyBetodSEE6TbzmohtER87yBBVMRzGBn",
  "key11": "42eJNWfkr8aLHqxwCVAkwHqzmwKtqMN23EaDKt6zKqELReYRRYNipnTJ7NyADgm2it9hqdAHeK5pS8tqyan1F6s8",
  "key12": "2qqRPFiemdUmtmjnEYZusDTXDNQ6atcT7UaA5rpEkwkqZ4nnbaidZVBQF1M2sC7RApoPUbaETeao6xq18fvdX4y5",
  "key13": "5xYTZjAQxB2qZDVCFBNvP9bMQm69rMQyyZkUyhDqLHuoWhisQAuQDuM1p5EhVATDxuv7KfrmQGcHkbJeLwAE9Nst",
  "key14": "3tCq46ZhFiBj8UsK6gmYTgqMBuEppqizJREBwp4xGSCaBmWTfUorQVsJNpUtPg6CTMfffNL4dMZ5HS5ux76CxL6j",
  "key15": "2QpEhRK3kC52DKsauksQkAPtbZZwfgaJg7zh5s5oNConwE8SGunGPAAjmcC3XSBnagdiRpoibQm3qMAFcWjU7aJ6",
  "key16": "4YyAnqQMPe8QfwVBpFe4FyoFtEvZhZVbPfedZYKnocPtUm6opVffJwpzRKQukDaWUnD3p8uxSW4WzEEbpoWiT9Px",
  "key17": "2LVoPWPne176u4WznyY3iqPo7gJvWfqS356UEQPRuzDEViYJ4nqWC1FkEck8zjJ4ShREeSXUYQyBhB227kXhsKNi",
  "key18": "3fhZnbM4hgvun1roVXaRMSX3pwPeV1BuSvUQefPNuyvW7TwdnhVpKPqVMFrJ5iUNF7WCdxqsw6s9M45GGxGfX7Aj",
  "key19": "216hf4RM1pSxgBNkxoPzCFgum96a9iXoS6ZwMYjrnd7GScDRHtcQH7qjt7pLH2kHNAH8H21gSHSbkfQeiP8Yd5TN",
  "key20": "hVeChD6WSSPPUYX6Mh8iRhzCPvJ5fSabiWis6rtjh8e76bXN62YxydiNMvRY2PT5HJjo2PqiG963kghsGSgxCe5",
  "key21": "3UscGw1dvh8HgaamdUUciSKdAfcwnZCzHPQyt4XnotSaHuLrEB58CV929sZTg722FwSz1qJoGmdhYmzwWdgRGoPS",
  "key22": "4MpGyQCa3ij4rsw7LV5GyD2xDhagZoRY8Njj64NP5LfPxfMCeKvfNUQhurvfoRmJkByyPd9T3ZTiHYeGH9u74QnF",
  "key23": "3zGyByjQF1Vcao3xKMxwivHEmPaT7EQT9T1qGXHgRPjmwx4MVWtPEaCrbFCjToS4x47quZwQ8qyspohP5Au2bgeK",
  "key24": "bjY6WJV4441AkZPDwj1iWW1LcxT3p1CHUr4sEZLjYfpqBSWgEMUG6a4ujSF5pphMUJBiJAzW1UY8gL8AUGRRz8j"
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
