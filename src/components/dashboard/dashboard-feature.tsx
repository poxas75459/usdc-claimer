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
    "5RrbunEcZ5hYBkXM17jcQvsD82FgCskoBqusrnVB8FXRTsNyBkhkTHMvvAsVL9LzayBBTXccGxdh2Vwfx9r8Z5X4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zRqeoqG9fXr8oCJm9tjKoQGmQQHVAR42P669g6PiAhkWJvQMafbBPbh2AhkjtSrGWU4Zru26mFFaJUg7cy5KpGA",
  "key1": "4TXffYfjrpXZYwXDzk1oR8dKBu6byJtubdjzv2sxcAER7hEsFB17A1zSYtEGs1cN1HynLJXqkwTJ4FUiUkiESnay",
  "key2": "PWWHZaPNyyG5xeMiZDg2AGsybUhLhJ8Ywuz44QJ3QZtCLGyWtGZH36z9pkLXC5QFPj8Lzeh28LqKMAsr7o44vTp",
  "key3": "36WVHiBsq6L4dAUHcbTMG5qgo8mrF6fhtCzFLyCsvPYxyhMaGYP66HpDwxhQx4MY5apCxuauG68QtNYtpptGBkek",
  "key4": "Z46xWKWEaDFWFFLnkSvcgVuDecSaaZi1PshzW5Gmf7xTMVKtLbyHkuEGaWkfrsm3A8DNd3uXLKVGsBBYPECT9js",
  "key5": "4UxPHezFUWPp1c2YRvNidgNtGumxWTswWCkSqUVNdNH4mNwDssHAbD244XxuENzwe79QWnWCHVNqSeG8cwFEbDw4",
  "key6": "4FV1qVqv5eCcWyAfgKgDMquxjyVo6Nw9ZuriRbmGXxqD7Z2fsoFwMuYBYBkkc6eYtjhZJLfaFf5wqRVPzVLRq6JC",
  "key7": "5D9hMzke9ektPR49YkPD8DDb1yR5wqpRf5vnD1tke9gCtsfZEaKbg2QK5GGazyAhBRX8HVzPwCjghAkJLe2p2TAA",
  "key8": "5CW5G9Nkf8mzJcX3xbZmbUihAPAnQ5wtUuyDrXx9mgvZAUMaAcU6AeNFpEJ8Z9mAV2xfaRCZ1SPPQCRu3TZKijbe",
  "key9": "2BEEUuFDiGDdPEsyFet66UBvEEpCShxhcTzyeK9TeXgfa48KYLpEFCt97gL3pqJwvYzsaP52TK9Bd9JTspr2oJqM",
  "key10": "jiaADMa5drsCWL9uDiCiodfcUQz87HFAtQhr91wsf847bj8iCHZ1pXcTDDCWWvhTijdTEQ2iBkyyvWu7k85kdBA",
  "key11": "62XhgTjyaQWXF3FTNcR4xRu1FicvMohiCR76nRBqx58WrmTedu3WBePRaqU4ENq9DRKkBmpM6ThEjn55qFMXqZhv",
  "key12": "3KjURtJLoDmy9Jwnwv6c7hvwa9ykrb4nhJ5tip5abjC5vNmi3Sym4swzSutDHn8Ta5D6mwg6Njk6W8WFVq1v8eG1",
  "key13": "4n5fzeHcocis27dQZtB6GZjXdw4m1JVCNgksrNtFvxGBkdscvDovxw5biVUgVejbgEHy3foP8CEpEpwJgeMRCH2W",
  "key14": "3BZazsLgAqC71xXbV9NxA8oKRmQh61FkwLUFbnPzJo8yaGPU6JN4dHFE51KmxgruTjrhB3tT2eupQLb9ozfVKsM5",
  "key15": "3io1g9k3GXGEyt18aBfpD2RNbYo3GRMsxGVkCehD9xGHbtpLWyLJPWCx9pTpyHEtMfFWWrvDRCctucGoH42umzcY",
  "key16": "4V5JUEywDuh6qGNsSUiTGQa8wgHBnzqNFLUU8hmkXAJuhw3nqM7bB3Ydgob2w3eU3p2uDfqNAUoKB2vLQ54kZEM4",
  "key17": "3LpQcttv9UoDE8vtpedHYoH4cxk2vg5hUXzsagH6kQRPfHe4S3PSXAxBVkLoqwXCo18nX4JCzjW4UtL6SGP2yx7w",
  "key18": "2JiD8DBKH1GfBdE9HdyT8ENqZb27QCn46jhKhKj9jomfj2iiVWaq23pLGCHsKZtgD7EjUmYWkWb49XKePBnNVVS2",
  "key19": "5hERnekFw8Z1swR2xrWA6oHMBp7kd9TQzyqSDhJ38sDYoKY98TZWDry8A6e1Sf4gTGRoZVpBbwkhQzP8YuodDZLy",
  "key20": "mnjCHmR45cpjPwLz5jJLSLzhsAtDps4FUGuNEzZua93npLubhy2GmdE6W8kdxcoTRMquK7kdwRdTnLrArEPyDPj",
  "key21": "3aWZYfG3dhvumY1VapNAqJhZBVshY6e6dko54ujbqpTh1dj4qfZ6EJnFMYF8Jbxm8F3rEAxpb1nWwQdhoSGuyedL",
  "key22": "5dWKDcN4WuTN2UjaXKX7GUuYQ8EmSkYRXZSEbydRscKTLwk1xLLZiqXXmARxiuxX39c7GVpVRoGJDA7skbR8twWR",
  "key23": "3g2pYbbpKPYigMBsWb3ir2JQjtUCebuHXrjfR5QmWzN16NC9MJimps8zRwz6fPhWfEMhpf62JzL5NcBDoUN8UVa5",
  "key24": "4jB6Py1mmLqdk9vkhTDokWQo92mmJu78dqUi8rPAdN7tEC8ojZBkJfrugHEGFTJQy2SMmPB2dxtWWet7Kt5YM4iM"
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
