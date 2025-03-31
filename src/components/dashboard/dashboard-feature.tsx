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
    "38EgeFbzgVYR5BjnZsYPVBiegDkyarxULHpYrT4dfSPu3Lo6cAzF23eGLE5jqQjm5LxMasSaYZURc7dZMY4LgxYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QvfXJ4aN2ekyQd6jSirDhytUkfcZqAU87t6Pi4Hgae3wUQ32BzVn11jtonfkFCncMbbhHCLYCN5ByirCKssAqbe",
  "key1": "bEHSoi481P8LLoSAbcBmee7aqdzmM3Sj46huZSq7qJGA8TFuEg1uZaEJVDEWJbL8D8XmCQezYH2g22Scaw873S7",
  "key2": "b3phxXKspeUBryw5WuACq3YKVnjVjZRMAuq7QPmWxx3dZ3NcJ2QcPk87zsCW76J4aUFwXos18qXeaT5pna9FJ3P",
  "key3": "3gpftSCSNkPxE71rQs7JScDAeuQzhyxb1TA6RdsMCjhwU1thJRzcL1ombkiMp37Pt8ixGwsDBH9NracNBBBeE9s6",
  "key4": "5bDm6ZHD2y9QQPhtDvHYTLYZLsC9ocQUX9hmkUjY8uLX4qJBaEovmPmswoxKii7W95XF6u9mE1TdLHPrMUQeJy8S",
  "key5": "3XQw7nKQ6mHcRZ1hmzc99DU3kZk8zc7XMUksME2w7mtbA9QQyGxd55vHu4JisNeBUsShprtLRSSZTTaaUzNoXPLv",
  "key6": "DoSCRE4RmtSvwGVMPrZqvbv5KP47xngh26Y5d3FCsH4CSXDYoay9vE2ujTd63cz1izYSezJKDT9hLP6Vzni37oo",
  "key7": "2VZUQNzSNA2pVcC3dzT2UtRMKyXo38nYPZsKCnny5iAURgDJ3ovZTXjAWjEtdTRdH1cYCQ66sniADBwt63wqHoQ3",
  "key8": "5LZdCx13PNe41S7gnXEQSNhoeLcfTqrun8gzpXj5J4tcVxi4HqaYJvgYTwZA9jYbZ4Ri6f1n9ngL7UaFcjd1QLMH",
  "key9": "3MHDDEkHbB8W2z59fAB34c89MmP2yuYutPddkFGwWG9A261tunkviEd5VDMGdjzZdzZtvqsd3aBp9GDBMgSR7s1z",
  "key10": "4jNAFCapsTqMph7RPf2u7uu7KN4xyNN5oVtf6kWw25A8XJNYRGEto2GXauc75ZbmRchQ4H2vhxr6KyCPJiwHt3Ux",
  "key11": "22sMPsXT2Qvr7TJc7mgB182fzzkKLnJAsYrdXWRXE9j7nmHAQhwVnp1zcqkfPP4RZ7MYtWgPDzNBbPCCxUo9RdPL",
  "key12": "4wXGBJHMX266b3r4madZir21QoiDBL2GpUr7YdrWVpR1EzQ92BC9JhRaVrCEGj2kdbHrK7v5sJD293xNgTosgTnu",
  "key13": "5aXooAaXXn8wmySBKPdSpPq7VtYe8zQEgYByfBNU6V1ArAcPQHfhQXMvh2x1kXTres4cDx8d2p59JD28RJg6PX9y",
  "key14": "KsY2Rua5LXEBZgn5XJTa3XPBPcsAoUmUVp96t34wmnGofEUSHdLBNQo7NXafJBw9mSojPg8ggcecGfTcYN5cspm",
  "key15": "28kNnEmZDrhZ2eK4vZ6e8pPxm5fbFveaLbmRjtbRkde6SQfTokaC2UxP7kFi7PgHhpSPbMa7HuVPu2jAZHVUv8JW",
  "key16": "3ukJdpCeWsivtyfsGhctB2y395GzjE49gEqD7Tuo3pgKcXgwpHJWmvZBJ1g1FRFyfacX7f7Sh7A1HvQAnEz43kvr",
  "key17": "42g7ZWrH9raKdJYDvDonGrykSumwwd1q7XB6BVHNpJCcuUQ1CLCpTz3U2rRsnQ7ovhhbhWBSTB2tR2Tg8MwBaL1A",
  "key18": "46GXKQB3epXz8y62tG79fM7CoDiFd5QiCT28LX3eQ2ZysQmvYM2ouHWaUv5vw6GwsBKwo6a3BbQJkoPXztbaGfKd",
  "key19": "3NhqguX6Ezwz3rFGHgEmra7LkMCz2zF8aUU9Wk86KSpSFuCjeqNaLx6w8CntTZ3odKGTHoN33dyrjjMvPEYu66K5",
  "key20": "4SjLGxt1HBFxx3mqFuKxC28LVCug2dPzXmdx5Nac9BBiEhBhPjs1ufDtkzV6JUQAYqxdadbtiqTuckBU51QFBApV",
  "key21": "3PLSiBFTttL9EQfQ11fdodMTT95u7Gm58Y1v1UyBkbJrHnLWtAaNN9pgXLuAv4QTTTTg8sUKKRo8LKh5FXc3fi4s",
  "key22": "2AYj39fb5eDYEnzte7zPY1YByhbPEFrkiVPpmkgMTV3XVwVtPeDmbovELDHXUSVeNEuJVHiKJgHLaLuuy2WLFpmN",
  "key23": "5MQxGfVJLNmyPwBrBf6JcYs89GujDZCsr2EMz8oPBzz8zfkS8cHYCJT9UQRZkmJMHygoaXcj19y4AMRHpn93vot6",
  "key24": "2XuCmLoRiPbhfgJUa8HDivfE4DhM1H77ccp8oH28Bqg2Cvm7b9Gce69ZFi6QTjmKtVhfHf7ktTCKqaKYgCDqgYbH",
  "key25": "TiZ5hwji9q1P6FpptHYKfJXMgxu7EUnGwTQa6YnsHJ4DMUh1pzU9Gt6sCip8Z2zy5FpbN77cb7AmpYVnvt3quNo",
  "key26": "ZfEyaV3EAybQX5RAQA8uurXqLtEYMGbMxZujEJDvvfS8bBW1uLHcBdvVYgsqHEdRFEv92SSm4eZcnuCDoWcfztr"
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
