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
    "qdbrmHZNHaMfgPaysuWX9dc2KT5gw6bT2uXRS41rA7LoG4A8RkvMV2SvdTMcfKJU2TAncTt3CiLteeHNh4vFwyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yC7akTLBDXDd9bXGqo8WdXqZhKuUMXqP1j7rKYAegc8fjPYfu8TLuamQqb8WnAkwxeqEeMfG4sDxFwBcjScPWnJ",
  "key1": "4Wo24QeDCqnhEGrG7xrF8zjG3L6YpfvQZfka7DSemvWdKSeobfEtMdPxbyFJ3gMU7ewedCALTkg6THpV5JjZhnTa",
  "key2": "2qiJ7xxm7jsrLVmE2jktdTnUiyBYZtT8RS2VGQ6ARxLMFLHDcGhTjXtNhZMP9nQwqnRTSbvPMhHYFgb4ZHnsS7nW",
  "key3": "2P499kRrvaK7GDHGUXLFZDTwSdMtJCG2ghEtUJHHqR9zbzxCyJRDxnCNUgfTWraw1jDTi937wcs3KgVEtN3mNfJr",
  "key4": "65eoTz4pJ5qP9j8MrYeX5mwN8sZBuv1wAEmT8t5ix3aFqF3n6943oU7kXFiMwoAkvpNmkuQJGeGgkjydpNi7xPJF",
  "key5": "4uQbdq6RrnYGdfPxkb9eBdPf7TfpwECNssAoSK8wJU9bFrRMnS3Ra5vyYkq36neWvjRmAiphqsSm8NjDa9s6ykGe",
  "key6": "3ic7t4aezFQi9Q4REZgD8CGW99XYtCyciE9ScA85fG1cETuV7ZGjmVdD2RLyzsYgt9wxmJpivQ8Gquue9HvmN66B",
  "key7": "39G47Ra7kxDMyiPiYTz4aUaGjiPcU52bzrozghVjkKSqWNozvrXTA8zhirLjkwEsXqorp2tT5CamtonTNPEuZKPL",
  "key8": "65LxRX6vCWxwAXrkQLwecFkUoi1ibFEyoeimb8tNxup1rqAcVrJ5Ltbmntk3jnDKx5WogJjSoYoF4doCmmWDD3v7",
  "key9": "4Sa13zPMg3BEm3tRcr7tG31vujvJu8R7iGNVL5Gbc8FhaC4cPcYgcg8MS3Sofv2t9ynvk3gGQAQgcBGjwY2qiZN4",
  "key10": "9wz21BsHnoq9kbaiv7v8eBjKxkqxNvSNpVzcmVibVk6AwvPcpqkm7kyMbEfMHUqPB7c8ENgDAyZ8mdHs784AFdE",
  "key11": "4kKrjUTaaYJXojbVob54EgbQJ11UKcEPJ5V8LSLWiXeYmwcffhVBtHZak64XcqXtCfZuaubmmV2BfzadGu43sFNX",
  "key12": "5GSvamriCsMtP2VkGqodQoya374bMXtfPui7QbqDrd769hJfi6MfiUVueKFxwDaVNNU1sv31KqiaKWHM6WGcBf7o",
  "key13": "1ZgdMmpbwYoxqTWqkzafhWPDeEWqveqM8gzasgBwSacZ8w6dw5gDufCNuKTqg2PACRqY4wSMi8jMgPRLzEyYKtZ",
  "key14": "4oBaL5ikfqPK59gVgkajmzHUfxseHps95kFeccf2W3bnN52EJkKkSDHveYwoXvdwAAmgww8QojGHFEvQ7AhBie3F",
  "key15": "5UawrW1DGpc2ds1vQkARGR1GYVojh9YmLf4de5zYtcsAaFZLX8uaEfJ7w6oS9qGpms6B9f4pi2NPxyMTawxbGF7N",
  "key16": "32d5k1UJ9NDKo1Ewtr8FyaCRRBGKXrirzNwoow1yX3qYTEH6SyNreqqP8uWuogk4g77WpD3YsdvaBCH51nTgbwYB",
  "key17": "3RiGxzKVwaMbfY6ASDx3NgiCfkHH9EJ9uJV1sdKrgXeaDKdZnqoKp5FHuhTZBBo15NKPyQCHkumsVoANGpTvdSLZ",
  "key18": "4vEF4MCmZLfMteh3mXUjEYXfjjzxEyzMhra9z314d9jpbPY3jJTij8cW4akkWtAyqbgrS8kRfvTtCcyWyf9h6y8Z",
  "key19": "5zASqcZzT43LuRbmeEvXYpsQmWGzdEeyR8AkAjwsDqT712RsMmhqRUWXLvF2P2ApwvAkUGJ93vcZFgWvWsA9HBmd",
  "key20": "4MKCGLk8pVCSRnXGsL8DdSnK6PAsx7jK7c54DTjmckjX7XSgfhRDAi4A8WjSEGfhXB8rXwtF8qamWDswT8e3bJcX",
  "key21": "nsoqMJKRFTBHPrZeHDqMZDrxHshg4gWGqjp3tMxMKUFByjqoYxHUS3gDoLbzBxJADRB1DTNhjgrPvFXS76VowHb",
  "key22": "4w4zqvrXamZezYLraNwUnb98fwn9Wx6Bx2u94fRgbGz8AvttqRfAZ4NrCgyRfRFU73KXgBCdjSmi7ZQVZQNXesEq",
  "key23": "5Hijo32Dss8otkskzgbrCECYezqhG1aBz5vzktYCRjEpEphvXqWgeTAtm8EHFfCYeJm7vj1S1gPpHoU7orAgZJpJ",
  "key24": "3ZyCP9Cb5zRE4bm6hqBKpcC3n1PzZ5zQjVscFs4E2ooiqA24HwSPYDUWyiokDM6copMLQstfAfsxsZRWvYxFws2P",
  "key25": "5N21fXn8tZ8BpzXRRzP5hWJ4YmYTsUiaqnhPzVYzg3n6KFvbcVngMpawU723TXmwYAcc3sENp9zN1vFb6S2vBkyc",
  "key26": "5Usn8sPfhy5DuyUb3wGPJwSDjxxfgsyx3qrtR27xLH7gQAT557tcLcVVN1ksvFutVRjn5L4dWu3sDUaRsS9UFHE",
  "key27": "53e1Lda4PQbmqN4sw552qHNU9LU7G76wYexE4KwZH78qyum6KFminxA5cjJ4CDHq9VorpPWyyxfcoma278wNc2D3",
  "key28": "2UnyBnN45WXifdz2r7np37yNjpB8iz8ydEZYNvYHnFdGcmuzvnyr6SniZRYEgMWTzBGJWLL2UrRhay35ZxBo1aVv",
  "key29": "2agRLo64rndEanGebSZirdpA8RAWy2YPPF4WohmJEWrnR5joZV7XvBwuVsULYvjeyL6vmLRHieeHPtcQDri9f8W8",
  "key30": "3HHDacsV7WWjuntF4PtWqzYkJY4T242p6VPAHV1fbAohst6b54bPHbcfkNdADpdprSX8ohLQFZr1xU6C9A7hxY79",
  "key31": "3ikzPnrgM6cXW5ptNqxEexVqVagazKgnTovdNP2CfcFaQ7rJ2VwXdi8yoSQHrm1x6U82yQwpPRodUc8fjUMxpFjb",
  "key32": "4DCspdNcZVvpxmirV2kPDcZZKDwCqTALA3ULTyLyQPbmJ5b6L9BUSy4nLxnyU3gPjaRv2fh35h5arsfXvbFDXbGb",
  "key33": "31fRiCYgojp1b8bv2hYyCiBZeb5LRGDpFcyweauYFtEKusMQNy91Tj5Gm6YQ4RSgc13TCDS3zEPsa1vTSvGeRkDP",
  "key34": "56He643nHBxt56JcXSfxuRL1NkGd8qhat5XBjGfBDvrDEvDUXmGLhKBus1NKtzhiPN9koYf4NWDN5zNNAXFPrx1L",
  "key35": "2ue4mpypmPuzLEeQZH9EirYub6ydZV6tdpX1eNgikzpt9iDDnwwD1XsvQMNeNyakWSWifN3BZfQ8mDwjbCLBVzhC",
  "key36": "27xLJx81L4o7R9P7d2U4y5dCm2SjD1ZRTbFqtBAmGQQDAwhJ3qnFSxT1emiLHLDovTBg2EBVh5sv6wYLbJs2ARYj",
  "key37": "5Wsbao37JsCuUuL1RvJavFJHwqkCVqejyNeD2oWJUHJFRNSvwf7dVuDsJ1uV2Ejw9Kz4a9do4u2zbbVbipGJW9fc",
  "key38": "5s5hq3tpkoe7DSEfirG8XGtv9rpAyjWm1TfroTYkG2mDph7wF1Harv1qB9Y3kSHfS7odRJdZ2d183fksiAe2Mc9N",
  "key39": "vnMsNxSNTsMr31VxUZN88DLeEp2vAhV5dCEGuKRnLzg9kof5CnRq4EQgVdA9P1kBZLhh62nxE9khbejpEq8M11D",
  "key40": "2xLsd428cUtjxRsBeZG42dDKXjz8PbFbvX3nYxHCoEkjpMJrJaJF5uKmk9e4uYxVB1HbNPuyECtyrHB9KKtnouhG",
  "key41": "5n8RPdgyEtHNGNvkJ14SFLtUr2SsULCe8FQPo9XhvFAUdZpTgPJU98LfoNPQzHn5JiSZoAWEpaa7kCFYtbvhz27i",
  "key42": "xbALTgMQVecKRzYsZwVLfgtVW17fyCQPNBJLCTGBhHdxdXchjwExzw9MrwZtVLpYdUAz8TY6zXUkW5DE1mGuYs6",
  "key43": "2ezkxvRMWPN2qnnEWHfKX9jrTjnqm6dmLd8Ap2FUGXGJwjiF7MVycPGdUsCjYc5wcYP57CjoKkU6p1b6FGowumuJ",
  "key44": "hDxaTYJr3fCp2ZRSWWtYd74Rwpdm7qujaKsjt8VWMcbJPd7pmSPoNuRPLcfsmyg1A9BtfCKxinEtKuwmVf9zvQA",
  "key45": "4qp8SBTqFZXHyqHqMfnSUorTZZLXA9S3rc2kiRtYnDcWnPcL9noQ2JGRhcbLNYAbGhhj8Ea29SNv31LrNk18bv7d"
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
