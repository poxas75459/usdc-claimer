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
    "5GfSy8p7439KrjpWias6Ks3NSi15xKy4Gx9gDXtovAB3vvaRLxPkQb5ZTnkpwsSuToAts2B4QNPCxqZxJwWHC4Rh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2icnthUQMo3ei1XzjJkd8BcjQ35zGkLWQWaxxY1SrzgByf9q9EudYxdRbj9Dr6EAz6u9HZ2TnS3ekJ6yp8vmygLo",
  "key1": "5NgCVaihuTprXPm4YNHBi4Zpzpieja64ysura7FhPjsdVDGXLP6Jzc2eM3gftMKeRNvfwJvFQbwcyNLtEFjYd19y",
  "key2": "3EPtAuV3kbVP3Q5WMqago4WVykhF8oCDD9zGy6H6fS7qEuBNFxxNV5HQeytyGM8JHwhkJA9ZGGTFsFjLRGsbugbv",
  "key3": "b8hmomfryRBJWrMfanD9nJ9zBKsVQ2TFvbGdbcdr5FgdoFSTpNdzPKqhcfTkprKwtfh5y4MgxPAjmGbVAcNCrUp",
  "key4": "3A7nMoMF6SjPDtkTBc5bAjy5QVD4vK8YQsyWzFqkFtNDC3P3pFEy7qruyf6LccXXUgKLiMN4w9J9kFsjAxbRycos",
  "key5": "4wAixQj8ntLeoSzmENC53VGW6PMxoK2QknNcyPZojGuqwUmEHjEMStGfiFhkDyXT1uTrwTZAXXncohh8FWP6ULQj",
  "key6": "5VaMRAf9A8Vb93HSNwTGgAcLnYnYswbfyMk83FyJJmrecTHbZeuLCH25scfwgyZfiEUkSBQCqagdUzHR5xxQbj4S",
  "key7": "39vzWu22gqN34Lpo9HfhpvSbdu5vqP9FbedaNGuAkhhB5nwcyk5qoW78hSffs6WvkFvi9jvrs1FfJuvafcN6V34h",
  "key8": "5z9CtShWEgADxxPJV1FCz3yWaBtfbiQZuzkEGNupxpPhwQaDn8cGYrpw4JETu4swFk5nJfJsp53CeiTL3NA5rsFQ",
  "key9": "47CMjBQSbZJ3kXZXcoViARWd99TJXrjdafNxvnsgsV4zd4VS9Z91xKBu7CDsnRkJV46Ft9fFbpBBQX1VhC478gR4",
  "key10": "66ggKVRomqN29puB5SJFrcoWKKjTegFwQeZQpfAaC6sMqrpRQFqhCLBS3sMDuFX86gwWAjs8UCeHrGS57syiBipR",
  "key11": "4jwwL2EBfk9dRNVvBrf4FQbiY8i1nTwkjpN2M15JZC6oi8vZiLSDVVMciG4sqymHLq1nxBis8d1NvEvi9pJUg698",
  "key12": "3GtbTZMNhg2V43tJZ7jEwZPD8vuUKJnDQcPvLXp6gJEgGboAXPsusbauHgNkrSqDMWvqLB2bj4cPuo9TMc8z2QwR",
  "key13": "3zXWmVM31aJRQ71E4Zd2XRfeVL3nk3sZa8ssmoWqjxaLHv1UEaTa9Df68dkVbUQRQbr8dtc6uMV15XZgLLFDckcS",
  "key14": "cetzLuCPs2Midfenbd1RGTkVUfrHLdGeM7XmNfG4jXvcLwvwu7hFpAHmzq8tkByvTpYaWH1WcBnFeYTY7DDHD4V",
  "key15": "3SuEJJPWr7PVEhj5vxCr5qRwu1VoBEGLraUusU6LUidYVeFbDogPw8DX8Ao2m2RmCFcjiZNr6VuP5EQBHov8rUYY",
  "key16": "3i8GKpkhN4PTugvyZhfvS7ZAS7Qm3SKbBu3hY7GobXRThQAcVCiEnb9FEoLdgz8hmLoMrpNJ9b8jTzWGBUL27Peo",
  "key17": "279p9rxEDeUB78B1iffFmsUTzGg7KdaFngftTLwo2vuEomaeiuYessGRC4Bs1PRhHdEkLt2GJQ7eZMommQRiC1z3",
  "key18": "3CvtsUMqF2qGAsaCK2GzZaav9eoWscYq62u5Xp9PS8FUvDXPe137Dxpev6VnisiYZmbevReqp4mQyWZQhqvSkg4m",
  "key19": "2TH1KSUJqcbjC4FgvoqicB96oVA7wsfkZVWqnLMqGBNuNLoG29qadvodcF7MMifjgJpzTjDkcPTGaus2GdLGxpfy",
  "key20": "23CyoT5nPgXJpLUu4Ur32sAZg1jn87P8hPh5Nvtfi9oD7NubmmKdNWC67Ci8tTtyQb71JXvzaMzLBSaNUkG1SAQP",
  "key21": "mGf4ro9P4KVdeM9kV3Q6tt5HWwcuRnsMyGTAe4SKq1jW5fM16zCP19TYB9xhyVjayMUr71ooJsuzvPaqG7ZFpVs",
  "key22": "2wFea7UM8o9mPQT5Aazrzyd5NuLttXokGH5aWF8o525BqkcQYSYFUG7w4e6euWGHbDtHmxhLVUJU3MS4BBUFWhLC",
  "key23": "5E84eDUvKeqJgMatWDz4mz87QmtjrcrKuvjGShctWuAEzkbUApxi5ogquCtKSATTYAdaL1agDYNbiDH7HFyXEB4A",
  "key24": "5zNdR5ANKzzw7yCUG9NZjMkUUG4m4TVeN8oQWUP892PSWES1Y4DXvWDBtzjqPBm1HzvdHhDcqq943exFXB6uptcd",
  "key25": "2PE3sF64AGhNNP2mMo1WeuYuVRZMmJHs9zheSJqPSXo5Fy2ncpemDLQ37ANyAdxw9ZmQppnif3412ujPqjqvdPD4",
  "key26": "2Ddiv7dGssne2CnLRDCA5fh8bkTaD9UTze1pbzQXFNpQNNdBC6TYMZBTfy5ADgUiLLBscRBk5pMpDs4YEgQa9wex",
  "key27": "4SpCMJnNXJ6vaMqAAdpitWTJeYx7FcCvRK8rsjHYNWgsX3xgU7zo4MM8o2EbhhDHbDAkWDVB91tvp8zNtCm4WFv1",
  "key28": "5cvKvgvaZktmpdnSXv2jNEUY3zFLc3zwZPfViQhMCUAV4SaMg2vor2HRt2wtL9pdcfnCZdCvu219TqCKsXao2q36",
  "key29": "41kbAPsCGBAoxrF7YKmpyZPUoGxwvHAmuvY5qVHD1A12bfFzqbtCoqCyEnU7JtGbkWw7dRpjsuvej3Mx1aazLMdd",
  "key30": "3CCi9a315X4dfucYz8JtVKZj74PNjjTrKqhQ91Y7VUA6LFwqARgHb7RWuaTn6dodEi4ee4cvUKVb7PuqRFUzAB8u",
  "key31": "2fPzBzv8s5ArKBzu4RUVj14yTNZu2qVvaPUoVPBXYwzocskBDmzuz87rKmFfBirGwVG1j9hX6ooD4pFujVASzV2Z",
  "key32": "3BrybMxZuHK8XXkVPQe4mk3yqG77vMr3rE8qgMitWqzpvpSicsojfegYKUvkpVwaLqHAxXgE7dxfcQcYJSDa8wpD",
  "key33": "M6k2E4DCx2vhJbL6tQZ1g7V1xqbBD2Vxgu54AKdspX2XVjScqTjoRkMfjrsazgLEdGNAZhJ8z6UMocDnsWAWc2u",
  "key34": "3fvcJCtLytimAyLwUbFCm1SD8VXxc7Svmnoc7Uxu2TCGAtrgG1KYDTRdR1XsHrDjGymiTF67Hrk9TZ6a7gyQ12vH"
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
