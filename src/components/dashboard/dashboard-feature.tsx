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
    "58heBahYUZcePmeUjHphjEGhL7XWTEzV3EKUGnzHmUKtZEQAL82oPPPyR5LLU3hf86s2UJq3ZhRxBeqfX1xhqnuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BGtjaH8hsHUn3r9UUkq2TinGyBMjMaoNPqo1cpnjvRdQYDHn22mtEcPTsCmQxXp87AEwdKMn2jPybdDSyoBtxTX",
  "key1": "2Gw5z9e9g3KocsL2PrC3FVk9NLVEzj8vWaUbDcexqgtFGbChmT96grvHgMdi6wcndGio7fg6EuxgoCLRbh192qay",
  "key2": "ciJpd3wSoodafGSrNFgpFGBiAGFgcvYw5CbqRcAXRBRE9Q4kVcRwTyue1YKS2xocc46TsYg3fF8vPTM92b21YVZ",
  "key3": "2wbWh2MvdCWZ5VeqR2ZhQETS2HXgymRyXFTvAHXkNhcTQezr5dKmAWnhWfm3j7cMpCjyM21wqasQLRrwAsaaR29W",
  "key4": "5SDXMQsJQ3rdRpWebLFXeTtEChwojveisBJhVCH8wPxRho5BHgVMrfbSTQ1vccScEepiHU2S158PxhGePG737PXs",
  "key5": "3ibmZ43btPY1p6X1huL6V51xwwWrjV32a6BSh8FbVJdZf2jPryAmdiHP8Bwx3UGJWqXS4RMkjbzBoP9UjG86H83s",
  "key6": "4DpE3gVnAfbXQStSTbzhJECNQiV4JskTnZcAWXK9RA9fxhbaXgVyfeC3oZsDRfjsC72gzfzjAKWE785raRQ3Uj4k",
  "key7": "UF57YW7f2J3eKPZR3b1QoBJh9DGKvvVwxR2nqmGk1wrNJ4eruHWC9xJTE3a1CkJFXvqQzceR5DuekX6LUsCfPX3",
  "key8": "3FVE19w1gkNFArtQfUcP8n8K5kgkYzkNSXCZ6mo2gex9itwNpQdkDdctHjyxi47wH2uZCZNrFsxpxGagzUeB6w1z",
  "key9": "3Fk1q8z1KL96NwrJQwEsuNZSvUrC3nL3RzfrU3Ymiyo4BTQQJ4ZTu4UnHgapkB5GSLXtD5aWitNTQtXxtCSaqmuL",
  "key10": "2NcQKS1xtCT84dp3RypiUdeJ5zyEAJZLCyWYjihfr7i7zmtpsVLbAYtkdzdeE9oQfRAN4HfM6c3j6xiN3BZ1ySq2",
  "key11": "3fnrYY4dXaSnX34sLRwWniDd4czQifKGHBA2a4VRoXHo8XfqjsaDbyhFHDu14sz4f7uKpjdEJWgDHTTnPk7q9ude",
  "key12": "3a6G63b7avUj65kdiJEnfw5PhZXBwyV4AaESKmam48r3XZYCTZg6LHZqKSFGiZSwaahSRrXgwFuPdc4LAox1SJBj",
  "key13": "2uLmNZiAUiiUty9up6ik9DhuNkBc6sPZKQXR6LNfMkQnihjkMFRvm8RnLn6noMtDv7AynDYneEbPHuSfhjLC8QNJ",
  "key14": "5XdRds5g3VXjfpSecWfD9UntwTnaHytbnWhKJJdBhrhxRT3GoxP6Um315C8m5rPbuw5cPSGTY7CNUZWCg4XJxitF",
  "key15": "5nkoWJ6jYQrERVoxrAk3qcx2aTHeaf4RHZ3fon8fv6BSjkiaUmqeo8YFg3DanyUdwT9g3YaaiQjHB1D3rY6GVwMW",
  "key16": "5uuM1jUED4LzthUK4VxSMFRkHD3YGbiiEXLQEjRWiT6wrkAPwfZRsrLSTn7pK4GCLcECD5nH85zAX9cxU9TU45hZ",
  "key17": "47p3AT5jP7sknZqSzJRJvhfmHnUbMCPBCsBufig2tj2hjRMFuz6wtZyob2p95MtdJbJ4rRMC2vpdTacKczq8FGP5",
  "key18": "4MLPiw9UBFqbvAL9hKDfBumE3dq5D9gxV7AW4gBUs8K2H34xovXZW71ZgbvBW5vxcGSjyFhSMGJoyK7Y3DswoumZ",
  "key19": "ax6uo5dNGQJgLxchtHXNVQViv7brXpYuzYYAgoB2R1LWa7shW9Qwx6eybhfyqMcrRGiTaMKnUf3nMc3qmcXL9NT",
  "key20": "4UmLKAyBTxGe6pumS4FCrSXc77LZizCFBX9zrwgtoGo82VcrpZUu897yCDPzCqB4Lsmq3meN3CcKv164PpELhjBL",
  "key21": "4SyZsuw1ZN4Lxe9U3LhinttBWSWUQmK2oApUHeXLmjpMcLjz1vQ4boEC7CprUck7fV6mh9igxAb465WM4WJCDnsP",
  "key22": "2q97LJwtv1vksmYsjbXwC54yZ4Bqcyn43uegdsfFS9No8aFYvGDuEDxyoYLd2p1g66iobfi3jZ7FmTgTRLxBvgeT",
  "key23": "2ZMLpTA7AvpyqUp7qxezsfR9VnT3WA5PAY5VWJVydY426hRkCqgA4nUksH8Dtqr3yAm3JbrgBSwpY3Zu3N5P3dAU",
  "key24": "5BBi4FxvcEppMNnQ89TNrz13v34ZjfD6pVtfxCf8jThWxQtb2sWyryzsZQw2gSZdg8eyjHXzpodp14GWFAmf5K4m"
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
