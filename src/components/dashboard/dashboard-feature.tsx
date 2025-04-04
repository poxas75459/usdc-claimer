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
    "2oiBW99LE2EQhFZhh1MTYdKgexgmWUJWjmoRoQ7EhaX9Fbj85AWesL9NrPZP7r6ciUfH5wZpxBmzvGroPSBsHV68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rK4twoMUXXaHpseJnuxfqkQwfsi81nB5imskowucSHhUV9S7cKM3yoTGYmFHPNn9L9XKAZc6RTtxS45TUg83SYp",
  "key1": "3y2RiovBZZZPqc9HmtCrEmZjavNjeNEpWduLJwrWMabnvZk2HN9Xx35fqcSTpEGaSy1WpBqgoFn649ymu5Dzr5YT",
  "key2": "2ACdENduXRuS8PuXFaRAcgr6aPuSZk3yVcVS8UqkzhyvmtwvYq6SrNvFLNKkMx5PRjx3gV1B7ffx2S4iUX5dyRHp",
  "key3": "2yD6yTjF7jDHFS4huELUiRZGoN9jN1TMDmQpTCRr7utVcAAFBeSwYycwQdtJ9gVVCfBPKyrPWG3EzxsX6ynUjxgc",
  "key4": "2w5cXqboys5eCNBDnQaEbynauQN2wWpZ2iVbcKRw3G4cLWF2ozn9YzMdsUkHgqLqhNDZSM388WEPibk43suZGs9p",
  "key5": "63Wbwk2pT31CSiFJNVNNQamCdz3t3uPdn4RSfXg68Y7Fj2foEPe7Dbm6Vxk4Vi1uSYdicsgXDLDovA8TWPLXGSmC",
  "key6": "5JjRPf3DW4CMX48ZrtgAkeA8m7oA3wALBjkZaBQc68G75nKJJMt7zRJCMJ1ETpcZzfvNGdimMe5a2sFt4kRM616D",
  "key7": "fcztTgqHFqjSTnZ5d2Zx6kswNXqZo2sL3m9zWHvYtcHSVTT9Ek1igGnWv9sXGVaBHJHmEMrf27ti3jazCu3dMwq",
  "key8": "xukMHscbTH12ZK5VFVcA4tKgvaqwEehEZhudBLZG5TGJofoTUb4Tv8YrTANhMtEobeShVFzhVRTHyATDto1Ly63",
  "key9": "3zhpNYtrKCijS7MRk9JpPbVP2YeD11SquqXVdLi24xmTZVvLMhSy3uUJvwinRqo5kpysyiyE65rcVYmXYWHgDTyo",
  "key10": "2gs5pVf1H9bihbTdbwPR4kcqg3Qkc5Myib4oydqWeum6F2D1rmQt2ZXusLNTQjDtDRGZxTYLvbZdj3AZhwLt5Dfr",
  "key11": "fm1Am5kP8rsRuYJzjgJoeBhL6X2vVwx8fTMxgM8qWN9UxkQs15LngdJbGnWwFRjsyFz6XBjhSWMPPnVTtf7DPWx",
  "key12": "4jJ1wDJJNFTqLANZgihHsgzk6UpCTJtxwihJNmYeNEeffD6XDGRAkhgsbx96Yg94ia4H5ADCBpTnUNPy984bugxW",
  "key13": "Unh45JQjHmVAggvuBG1sK5CghBh5ZRr6gwMugxRpf3JAhahd8HCoTx21Ej4u9W82pLxCPucwcjX4SAsDRjpE2YE",
  "key14": "2qwVMSMqavfLLvKhJN1mp9pskGvPw1AoapMoiCATAYrvwgnkWMcauqeT2y62NWK4dyjWGfamSaYQ65o1YS6Smzsy",
  "key15": "5f2kfyLf4YsQnrsyp7bPjgoGDS9xHSPbbUcGBsFRGq43ESdC2tJhdJSLfevz6k1oZjJ9xYGp2xFfPLgenavKhAcy",
  "key16": "2X9pGiCCoq5hmYKHEc4XuwY2w1LrQPT4hHy9hXUZ2BD77G1pQE4jV9rGFvYQLS1cjCP2zFFzVGa6FX5xKueHps5N",
  "key17": "536VKPeLKTNAUWNSaGncK6X48xRAorT99hc9fWVN4WS4HLGwe1HaALiYa34HqoLg1kkrydSqPDNiwX3hswETVagz",
  "key18": "mg9WyK6U8WyGJuUgGwJGbKu7AM6hFCjtexEehhupnF17JD5DrryL94xzbF16USKKA48jJz85j5TchtM2d7pvixe",
  "key19": "3aAjNq88ijcJVQYH6xAZZcCWzwjw48rwqAoQASVdyXwe4f9uc4vFur4iFcaQFEKqGvJ9antwgs2hPgHXLzYKnECJ",
  "key20": "4v6NKWECYQqH3Lv16KZbrApNwK9CCXDRhLepBn5BngiiFKKvwsvGdnRZqNcXd3fqbJT5a4sEhK3iZhCSgnbjGPWd",
  "key21": "3Ppihy2vYVZ4r8JXMx3dDSJc8wz47eUNVqz3y57zy9P7CUejC4GGrJBnRRhvnSCDm2e5dE1EotZconur1ZPqE8D8",
  "key22": "5tshEdmWW7MEoBagBA98VVuxrpYm9R1m6PXR4PzgUW35SS8FDwu7Rc4WtyGAoGk8XYBVV2eoPjvFHD1siLmrUWjU",
  "key23": "2dMQGhMGooBAMaA7aur6EgtNGmddtCKSZZCH4zuN4kyz34rSpYRdSLiYSvGC2qRzwjwhZC5V3p9QWRHooBwLAjFz",
  "key24": "2TiyWPdmJWmWUreZDqivfn5t5wGYtfHXx968rsCjpxSWVvNMWrkqZYtKLcf9vTGCfvBvKPyX9XdRRWkrUUzeUj7p",
  "key25": "5K9NDpFyWXRXwMiz3tTvsEbbLoBJcfK7Jz2kjHPejix3AZLHEjdzYTTzwrEv4TjyNhoLEazvaxKB6QHxXWwprari",
  "key26": "2GwZBGHmZAHQLUMuJRTTkcTEkNowfkiuJ9CgGpjq1qbrB3apXUHMLobeM3TUbmnu4ax8mEe11DhPRPkChUePs8KL",
  "key27": "4zJqc3NWacLufAs9KE7GsogHawYXCHPw8ZJNrw6J1B1Ly9rQAVLo17xwW2R56hLqW8pv6Cp8RcK1fQyegZ82s8SD",
  "key28": "4YhdV5RRQaWGgGzVQ4z2Ymi1xHacUSrP5wMFXBXj22QjwYHnWREFiKymGaHyNVZXw6KtqU4zs6CJcYv5BSv4DujZ",
  "key29": "4Ne5eGJQRTfuEKnARPCabBdnqAHMKMwk6PF9sownod7toQoRKqfPr6ooh3pB7w4rfVyE5zFmo2ikNwVATipTZSdm",
  "key30": "2opbbo5nw1icc98kZMW7pXB2gbEvbFZ4X5hRty1zbT6vMRcBeJJ3G2jrcj1z7PMHDXPaADqhKYuQrX5fDhLr1uQL",
  "key31": "3vFHou7EXXLJjTpfNhRmek9mXEj4AMPvaKfTie8StVywmzw1bwPpYtjjJb1wWnmXQZTuxQ25poEkZFSR5f8Czpiv",
  "key32": "3mUae7LbscVwXJJptZ6KJcsZUAMrrthWx2oLn1vbXTxw5becGpCuTMAVFzY93DGeneni4bGnkPGYhpe9bGsuaYpK",
  "key33": "2TwT4wDRwzudWXdELnHHVfwWihngkWLXu9bKrwjvhhMhuBmnkhWTqawDLxfjWooD5sbDPDdsyFGaxpBVNrgEGF6E",
  "key34": "AaGpzVQoLsy7B6M7Hx6oyHzBqNNmAtLte9ra62U5F7XJeWMGgTCybzyzJpWqKfmvHFC9Cb41GFJ9yb8SqZmgu9Q"
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
