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
    "3j8bFsD1xbdm8QNh99QCZWxmCJLj1ULztdqzYYygVCLMPf87kLnGjVFu2Q5pdvNVW413eDCWzoQGW4ksWmUVy2jG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FaD6i1voANJPRDC372rJAogpZ6aMxExuX9i8KwcVd4SW5AixXCT9jq7wiWBsCudaM86Bb9B6izJpNZ3rEh4CPw3",
  "key1": "4Hx7R7T2r3HGC1aW1FNondQTZMwZfY2MCP8QPRTg4BnaSC5hVTvU3pzjqDt5tcKefxs1reEDe5tTDWfjfwznJven",
  "key2": "5XbCTGBov3Mr54Ucccc6Vdunbvn1J6XmHbdeyK7ExiTZ1cxFvnHqEgxyzQKjAYxw4hrnN9rSxhd74i52kcbQGTiN",
  "key3": "5nfmhcj8U1egDnMCgpmmwPp2BooZzV4srvpXoViNxqNhufc5UsyvyNACYvJwwHfV1NcxuEaEd8ScuzTJrbQEwgW2",
  "key4": "5cWzcoWrNFvUDFt44tgR4zW88qvUTqz4MBJC9Q68KWAG9tourbMSLZdPxd6cpWqVJRAM5EzrxgBLKSBDPtKuQFxd",
  "key5": "KaVfsLqwPQyRDrV2pcYHN5eAN253KhBc9v72fgH4f1EJwuBRzwrBhZSWpxHebUA3GafRwPfkHLMtmuGt33SQm48",
  "key6": "2vLmdcGARTE4L7bickAk1eJknLJwJPuorqqHWXvMvKVAdrnGzmE6v6ZhTbkCkVLsoWMTCTwhToNTfxE715jujpcj",
  "key7": "eM2sf6LaouVJYyhDWpBhsKmZuAxsNYzkGfXUTPWdeMYa2yRPvfgRgqQjUrAejv2JK8DKc9gNtyPvTnaLPdsmYyK",
  "key8": "33VtJFmyK9eea7G5DFSjygpTto7xCHitcLibvCWBfJXeBRkfEdETiYu5pTtynKWv6PiUDFSgyJ1LZs67uBRSGrNE",
  "key9": "3sddGfS9tQDWd71h274QdcMSYdziqbXo9PQMGcG9TYmNw3X7yqZy8VfUwzdAkSQ8dcsV7tsRSoUcvNvtJfj27DqQ",
  "key10": "3Z92YsVHx1d5sBrMVsGF3MBbSdiP3i2kcW9QwHztAuF7gFZ6Bq4cx2aZrExhnuvLvCtWcZFGsR3EkNZY56MUfw56",
  "key11": "savD1x2PHeEPvfinfMntPpSE3xUvLiiU5H6uEFhfwKs64hYgTZ7FErEysYUn2Tbin5rzVXhHNanP7oxNiVNLPe6",
  "key12": "1w6kK5zZaPko8KvQZ5dPb2QLDQQiGe5jqYJTX3G3rfNsDqjwpprHUpMhEhd7EoStAukc3Jsm4G5gU8DmxGnRrGi",
  "key13": "QB72Pb4FADwedP3tCWoEnLanTKeWV4LAQeTa9mgeSdCUeQnJhhwb9B3wE3rzGEFbMpajwFQkFv14k7md6fzzYtt",
  "key14": "5UPL6AjUijfoFiAHrxZQNniFp4d27Ejk23ojndkXDjtEeRcW4oAxuo5vGb26JpciNHnQd4rDsYvK3FPSSKi8Hm2f",
  "key15": "2g8LkgpjGuFKg9Rv4ybs5J94PrSNxYNwF3ms3H7kcCySz8XEKy4cTRftb1K3f37Hpvv439RwxkWxPmVnA64R9N9G",
  "key16": "2q9TEdUiyGmXtWjTMQMUv8rAhHrnaeSdRYCrxWsuz6ksRnXaLi4qeZg1S7edmQxhvz1jE64mxrSGfrDfGgxYxfpj",
  "key17": "5iWeUj5etpPjr4iHpRK8g361K1QhHwtzicJnWT6K2zHgvVyefWnKQm6oKQeZd1w6o25P4RgD5A7kgqV4Cky5Wbei",
  "key18": "4YpKfPos3B4xoXAKas1XWoFUzqr3sxsG7A6bXXhnM2po8kdwaA3bgs3okSHtBewDdhD4BQgEFdBHZrZj5M6jM1CC",
  "key19": "yYBdTFo5abXqoLWsXfXVMJ1nb6NxyauJgTXuuvS89EvwHWQkXArUjeSs2Vq6QhewfMpnmZTN4vtCR2rH2axJ8B7",
  "key20": "25R5ow98Q9xGZxhZBYvJb3NxW6zwNFZKyEYFup59mGPw2v8DfLwJkbiA6KLEdwqPeDVQs4kTvvA9yxQCsoQ9st3D",
  "key21": "3NLh5AkBafBMME1Jc9PnpkjYtSrbY6kRRNP5nfMGwC5tKVQ9XDLRqP928qzLf8vRft6vsWJoKAkAQUEoQsjk8gSV",
  "key22": "2E6LmngZmyXiFeJTHremW2XMWg1aM9DLPpFWRnwr4kKJefsgQiWmF5T7QJLARb3LcKnALUwTaq8KtEwN7HrATnyW",
  "key23": "61GjxTgW8qodcXgHPSucZP8fTcnMSTk3AkdNAbUDRUwf3ijXqeU6iGrwWL8ueC1Mw3UV6Y9stcgRHQCLk5MKxtWs",
  "key24": "4ygWx3WAVebDb3BTfWJZrXPa2shzGfdeBmD8kBgMSxnFtPDrNGAaxsCWyMdJscUHTyP14G7xSXEbpVGPaDU4HuWr",
  "key25": "3o4iZ6uTEg4QUn4rNuNvZN2hznHUaMYjuRLth1y3ouLEK2egeBsEb7Lm85QvFfajabSjNLRkj1JXp4MmiZiJ9aU8",
  "key26": "53moypB7df1wGmnweL2Z5n8cpAHqPfbTL3tXE9g7mhmwkSc559V28obXJF5zheMGsgLg82dZ81SAtULHHm98JgaQ",
  "key27": "4kzSDnGvgJ77J6Xp41JsRfQYPqD19VpNhTALP1No2c4arF23r2KQZWr6ThJzAk28ppT3uQGDtk7adi6AbauD7eUi",
  "key28": "dNhGw2j44MfsvXMgyyqfxhfMqQvcUDdM862pdpBXUsK2HY73mS7b5Yhcr7k6USLXipSFSbEE6wCyr6f1wkJS6NU",
  "key29": "5gnMgy3NCQjci6Afk2xCcXEwGF9XyviU9NKHfsSiYwR6dLyj9juuc6ePJPbyLNmWCi1mDR1AXrHWy1Mi22abAWqS",
  "key30": "3Di3Smf2ZyLAiQV4Z2CDXBTY6e5kWxeaU2bAQrNa2UhrAmC2om38TMtoLSkqT9UyBYB3FqFikdZMQv7jghaksH4t",
  "key31": "3weqZWKu4ivzga292zjYCEfGnDR9Es8U66f8QgCyK2QHamS5qyYmM49j997u9WhonhUguzH2FLUzT7h3eV4wzSJU"
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
