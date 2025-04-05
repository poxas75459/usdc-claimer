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
    "58mnnE1a32WoJ1XBfB7gbMriLwCB3sooMPAbX78dY7AVbCwoqdJVL7Nhk7GuKDaEGLbESqiYUegeeH2erC7wzE7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47ksSxgzjmC2BRebraKK6JcaNw9CCT5U5EErK7Lzuz33D7g3v8NcqqY5XzoS5cxqwkTu7r35WLRQUYyfMB3UBrm9",
  "key1": "2bP9RVho3i7sxA33BzxrwhqGb88ixKmNA3mmBRmMbyMukHKMAkhq2K4AyxT5xafFbqNNu66xnyLgnaVDZSb5XsMN",
  "key2": "4F4J9fyD66vGdEWKJPCi6kQy2ZqpMxFNoh6Fv9qvk3gKyduRyFjpCvYcT3bVmLHbmeZXzj7DMuxBSYfq2kU5KdBu",
  "key3": "4KVYo5grK8T8iSYaqs2tm18DqY23Knsh5AEJc1YbUkd7v3srEj9PYrfT9YYURqtVAAQRnHyVcksSo99dRZToqtCi",
  "key4": "4bkQZURHXvjexcfCPjUUCMKY58tg2DDCKcgp32FRpkHv1uVeTrHJUmrUKNaFopK1qNcSMxULAk8WLJASHHDmJr8w",
  "key5": "2DyVCq1CFttkv7PwUhTikYJj46JpCpsTEcTc2AKBrVkcetEM1wqrQyf52pbPR5FKUVZsHJUTebiAdvaPQNsvZsU1",
  "key6": "4i3aGR6YPVbqqxU7mf3QqA8qhfHAiZLDbD1KohnpzgYU5boKNsRvE8ruTsDxJ6cqGtqB99fGWhBbrGgZxFJB8ouT",
  "key7": "Z5q7VVhFyX9uAnv7iGzUvRbQeb3xC3BubPW1zexncSF5vyPGe16jtVbYXLHZSxGzoHQfunVWN8ZP2vjLgg1seiT",
  "key8": "2bCx4xi94WY7fcKPrhrEvT7zgZbrdQ21zQhG8vomBNn6iQ4QX6X4mG5JRikQTUZDJPe1FqXK5SKgDve4QRuTdZV7",
  "key9": "36PjTttHy5DLaC3soQRUa4VpoHuLPMCwXvZ32825rZ2BACxkqsVckzu1B5ZMpWAPBSwfxc8atVjXsSgbRcxbiGT8",
  "key10": "3MsdnEwWmAjBcUDE4Gios6drBX6kpYPfxKuaAyJL1HaPaFnk4JEiRb2C3HsVCNHgyyCwTnkd2QPNVczqU3PheLUF",
  "key11": "3dP9VfTqUHC7B7RgpxYyZChCYr3Ru5Y86Tv4TrGxZnJBsJPiLG9k23PLSxvwCBckPrj4MdgPQNHhFkB4L53cAdWU",
  "key12": "3CWYAXPEkUWGaooPPvqkNqFVko6SddCCvpeNug7S2gTGxoV1WVty5s2gFEG8DByqjhfFuLavJKkQbMK6Y9gpckra",
  "key13": "3jfzKePDbVR9KzLPeBRdGMbj29XKzUrzgvMb6mh52xPWrcuty3hEgpYHR4un5pxaVoEpGTr9yNBn5fbQAC25pM7C",
  "key14": "2E4m4sRNE4hCf7bzX5rVStA6rTWFGi2XHTRZW3MRus27ZeNdmrGtTQHDZZWexodVo91u1uK6GD1pCFPQGS5rEBVi",
  "key15": "wrWyEMqusZVUZ3g3T63xTW5yfwqw5YJW4nMqvuQwU6yRuyGGy73oSWjCpGa6fVG8DPMV4K27gH3HSkbGEAYyurf",
  "key16": "24tR5EwScBSEDM2sJr5oUrpRrKfijydyH5MVd2LC2ZQUoR41srF9Tju8kx8DgS7c38Nvbd8KEDvVf3gmCKpdnh8s",
  "key17": "2miPL2zeRwE93KznATccY8KxYb3eMvqGk4ieePk9KoD8JHnMvCy7hPC54UJ1dXBVR7zsxUXESG7itjHptRRXkQJn",
  "key18": "21cK8wBaDqHWyUnK7Q27QpDsAzhV4o5LSughn2GMHNdhfbMzTcrFh7fmbzQLLgjidt5r9zpSngFAfL3XT9SH7guR",
  "key19": "5eeVH4aUnYYSD5C3H94h1sx8x5k1d3d8NbzKXEVeF2SHMThKiSAXUqi36kZ5sgtZje6W7ViYcKoAwE41dJVy7X3e",
  "key20": "5Na4WF3rjyKA5psRbrDe3sLMXFsaie1BUH5yF2ZQVkLkaDzmmYV2coHtHgmL9BRT8wqby2GFBxXKPN1exc8mNpMa",
  "key21": "52t7GdLz8zTJ4D5zuPi1RDsaoJhNm2bZ6FVXpb7QHJ9mbs7hADEz7ZtDpKkFnnia9muyHsEkzgQS4zptFrC5CTD8",
  "key22": "3P9QZzNe5BGMRTTcdQeaVvYPaGDKmNXG1bjdY7xQspogM499VLbKvRevzuLW3z1ghE6RXGvfMRNPcWnApBoxQpCs",
  "key23": "37GNqxx9BJ1V3iAMqK91DdK3msuxUyp7nknAcHi6GAa64ZcKUTbeSDpw8a8HuuwGKy7tojyL7jWLGPEJKMErhXHy",
  "key24": "pKQwk1dy8ns7hfd3kUmE4kV9Duub5wXNPN5ufVMLsLiouVxKJmFWm7fH6tqRFY5Gm1VX6srCALcvKADiMm6GxUg",
  "key25": "36Fvbyjo3cp9JkmkDENBWYF6dynT5WPLNNNGUHQ3zmNURHyvtz3ysvptU1rfAyfysZXMQBwWrhCn6N6Nh1Uv8RKE",
  "key26": "4g6Y2MWG8YatVkedAqB4qtuhJMdXYyeaXpdxnkrE9WA5sTR5Z9jNECaaAzw1WRnjWJu1W9J63zhCjdXtRBpSM2MY",
  "key27": "2dEdU6iE3zafvSKCQJH2roJXnv3oziaMhrz8PyXPaUkydzZqkwgydiLCSEpvdSwvzsPBz81RMeregPNFdDuKQCo8",
  "key28": "5BtC5b2J6mJr1LEZec2YwUXdnCmByYfWaoCGXgdXhVxJRr6NXaozw4mkTDvL6YiqPatu1c7q6xtwnQtunRacZWPj"
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
