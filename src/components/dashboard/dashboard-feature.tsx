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
    "5cg5KR5YJFRdRfNByfi8RSf4puRfHWTBSbrB2XTxVd3VaPZjELVc8tYPeRvkyJTTS5N5mriqAns455a2Ajtzk54B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bQT7eUGgd1xtC7krKk6GajPc7B3jh9dBud7vWki5rns1aEMbb1z4wiHx2XzozHjMtDKW1kemfjMAEpQcSSCGGck",
  "key1": "4YV3PuTkCq3RcEMFmxQQbWJdLbJ7R44yCCR69s7xAvu4RPQyNm2PZ9wEGyY6kJSiU4GnrxQoQtRfa5kn7GJf6knn",
  "key2": "3sZ6wSQuJcEVEyLjFbDB4wHhFQa8LNrMYMzwTH5GXrJSpuscye6uFDTpu4GeSobuDfeGVb7XKLWHT5KTL5MabQdn",
  "key3": "565KdHXF1JX4PRXPCSk5v4GGREWcK11FCMaBxcjmRXEXoYi7dABCbWmWnRc9sG8YFqcw4zksMUCjDshTaDU7qRpu",
  "key4": "31qGZ4vy9A3JhkqVcA9JnugurbJvVMgag5uj1aYeyq5q3D8b6ikpGBPVonUtJ5JpcwoYfvjQovLgoYsUEv6awuvh",
  "key5": "4HaVZbMUL66zk9dWbZ3zA2hQfVKtsRaV6Wf1pZZEgsFCMHS3QKcJY1GXTWgVjmfXAzhP43vYSKqxqo8FMMNzDwCN",
  "key6": "2zpHemozH7WaweocLWwGSQT3jazTzAUAL1KgHpXYTpUhqkQp1ohqrmfZTZc6JpcXD3BS7CgPzvWyk5hJUuV53uuS",
  "key7": "EZ7AcHyMKTApPYEu4seKY5ejrrSUBrPj48jdZh5HiwpmvPjURMQFH7KpGtr5c6uWihYD4Lh5JphPgjQdn6JJUGm",
  "key8": "3ro8RbGsWX38yAmtMmoqA93ijDZf1uP6NP3fMMCh1n6hiGUcmPpAEfQPYkoXHhSm1w3GDHmke68eBjM5sAZL9E7S",
  "key9": "xip3iRUQ7angDV2zXyYpeRUWW66p4wNMWMJPGaLUx4gNJQbykGnZBxtMucFdJyiS6Bc5sWyYinR5PF5wYin2qDR",
  "key10": "5vfSTmdk7DgdLjxsD2rXvqoPYLDUsbFUwwHy8F5Pkb6xxBmCq6iamjjfreeuczNFcvH4Hqjzrkr4E98wHMPyozLs",
  "key11": "2g37SQi5CreBt8YneGoqGv4K2XEHQ5KLgKkkzSsK4WjNmXJBkmpivqBcLv43MnPcbcN2mKd23hg4f8s99ZP195fi",
  "key12": "5Vv5E49wFCqVfB5WBmc9agqCo2UWxBKaC52JzeqdHK1z7XuihfGmpeQioKxePqbSTCj87WUdAf4XHW4H3CUbDqix",
  "key13": "55KNgwphQMmxUXfMYd2SBLNyGvrw2EunYHdq7pRuvKBiaKfXyWzmAfqr5RqW1fjFXp7PndAMcNmvCme2GeiBJ6zd",
  "key14": "4kPHLDfqMwjpX2KgELtiBGa74scdwAiS5rQbNZ3A3E3oufaPuK4VTcYafKjAoXP4bQU6V5wHXW8N3jd79NKLwzes",
  "key15": "4BMeKPXuFzpsYNgMJGka7vCg1ANFxr76HGm52x9dZVGqRe1ZnaRBtFCacMUtJ4wF9BcczYD7bQavNTXS8pMzh4ss",
  "key16": "33VYy2E2QTszcviRAPvy1vTTEkmVTf7P5sAo87KygxujN1Fb7LhPGAcqQsKHxVhQy5bXLaFD7aTtiDMp8hww47sq",
  "key17": "2te3u4zcyDCYyunZLkjw7ATyNJCgDLJh5GAzkJgmyVKdDiC1SS4mRtNemLdY48EPYV2mCMkvALbJKqfVRMRAteCA",
  "key18": "vg4LhjYgiioyTNeRuFhUuh4VBB2J52D5HwY6jnx5rPRaJ9LSb2nwKxdASNmFcoQQwc5MHwrZKpCM9NvxM5QxWQ4",
  "key19": "3JHK1FXxw1zWiUyPSpnZZ6pdC4Whoh52vWEmva5vLeYY57yeBXkMUDLuMUegFjJJpMrknwA98AJ8gZkRfCRgd3a3",
  "key20": "4QWBHBkxg4HM8kjb5134udYVGGBngnYuF6ntPJbdQbf7bwgeJWxnoGsdXaWBnJpzbdx3ZCgM1RhHMQXMu1f4fghK",
  "key21": "4PSC1WtgKoJEaggLgoPofE7JPjrichK2EGcG286HKWAVexP78zRiGwydyf3nhXP7Gu3q7bMzEu8BFv9wMKkm4NsN",
  "key22": "34DNwW83YUdnnSS8gQa4tJTFWdxNCA3U2dXqsh8Smn1Y6gwzKDoXunJ4iK95zkN7URns9KtkgsQuMp2MTTAyWNUi",
  "key23": "5y4gkaHKoaZFgLAme6hRNuxkW6aFvQm3dUBWrQbk92px9EaGwmSxYKQtezkk7WRj5Li9GmbBcrFjbzQwN3TCb1P5",
  "key24": "3tHXfCVjemAszyKp8BbbRijiwfHKNogsmFsEzGQLqyv2rk5EiL7FMJ7dA8DMAoDbot7UHWyZC52mrohDJXT2oppm",
  "key25": "2irKTcXkPjawwh6QcHXd62TzKLEAeM5SN9RViJPiohy2zsMiq6WvC913PusW6qCmGx2xBvqE9bNwHsT8Dd75vqMS",
  "key26": "5KEriLMryt6DMkk456cpNbeiF622rEQQ6t9FPvTP6Zk82Lraj7zLDKQ3rNpKXRiNhacL4LwZFMPpwFvbWpBZrm9D"
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
