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
    "2jWNdTnPvQbDAznBQ6DRUEcQNDFCA1KgkGezYHTQ1qY8FjdBo3rpMjTHoEcD851a1fxsUNkuM22ySZZZA2ihjDa1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bYokR9A3PxsGT2W9FxToyrWPGyYRDmjJ8SfGNRaF42EkGWYCiEPkh9yjRdrBkLvWsCidCsCuxQ3qVVzCcVA7BzK",
  "key1": "2WwXAv2EMdMsQzhBkM68PeQTQs5NikSSkvB1gZYNWfbDmxp47ZPXLFExM7KGzKR52v3VBMVyN4jocHhP6QK2HPFa",
  "key2": "4Kb3MsS8KbWjncrBSCg3EmNrCyNLws7fHnRW9NtfPP4ViJmvY3jF2DEjeW2oB8z6tM8SN7HhJoobQrdA1ussQZic",
  "key3": "24nCQCzG3uJ4ghmawpy8BezWg2ixNTu2wv3vTLRaTFjVUCdsF4Yv8Bq8kKJ98eP1RVgS2WjXzQiPdck4WKuUqCPf",
  "key4": "41fFqbS7BaTXii2hkdwf3AmBdstLpHqDqLZRbNwHsUKbh8cvHYXfHtVv3n5HhteMDmVk89qZVeLNQ3s4wjadjTEi",
  "key5": "2oaPscXpKYQDB4ZjZKHucF31BTiX2iHD6svYqRn8Bq5HeZuhVFQSTBgYcKiqUM5K4W2ZrDHu97YjHAba4N6egXqk",
  "key6": "2mLgFqKcEQiqKDsjbdkHoPJ3GfR3sYFtfXokuzseVVh5s8CahGhfwmGLVYoHsAfk3JDinwT7kd3BLpF7kGSm2UTW",
  "key7": "243FumkvzEmf8YvkzmxV47j5KPmXrZL6azXLdSfhxMxiRrCuo9HYdE8eDiqAL3e1YAy9ZZVWmCTGbW2zqd6zq819",
  "key8": "4BN2A2wZzVUyVDFTKxiPmJhxY4Px1GxfC1ScR38Z1oPmUcNjXLmnvFitEXgKaYruDJ3gq4ro81GUn2deFbNsB5m8",
  "key9": "4vQ6iwhTdv8KmoAyveQ4xA5aJd3djUiEgsCEme1xv6axsjXDadPysviHvhg3X8UKEo1Q5bDYjTodDkS6CYELgH13",
  "key10": "2s5pSToAoBhBo4bNx12nTmvWW8Dhnj6DzFE8v8onzf6Kgi9BpQnM9tR6eX1WiYNWnya3pr8ayyZfxaZN2ESrL4Hn",
  "key11": "XP3ZQqb2Ji2dWAXi7cob3cHTxSRn45d91o4BkAAy8Y4VoDUWKW6HSeJ5JnTtgUDkUjioaLBZLmGUhimvjXomyMu",
  "key12": "5TXPVR98xYgmyJQfUyVumZqjt8AEfQZjqE629hsjtE6HppVjQ5eesUig5zhjyrWSC26n5PMD4eigoUKBenLvpDtD",
  "key13": "24tirHnokMhcQvYYCvUN7jBJpfhkYXaH9MBXeVydVQ83EmheNhBWLHTge9yDvTrMpE2YiD8ftKnuUk5e5un7bAt5",
  "key14": "22sCWstNrfBuvSyBf8stDs6n5PyNXDz9aCHr5rdLmjz2Pb75xUM12LGdd8UFCzxpF1WjxwRvzUn7VtjKzTAHWcLM",
  "key15": "4o8aEZRFX3VUthYfjR23SqSi99pKySHEmazg52WgFMaRKtTwUzgcnGoS74pEWfbBVkgzsKWxCHxExmzbT7PuTRAK",
  "key16": "2kiAhAboe8JAVWTE81KiDTrDdAfkG59TjhTahoUJPc4mZE1hNcJLxo7tsN8E2RQ7JvzbxggNLUrPojzgE9H7QcxY",
  "key17": "2eFcU3saYyTPQ8p5WeziDMYJhfgQvSdMfHZM55QWUjDNeSra9jxbXxfdTgUEYxi2cUvAbF4zb4js71oF1mfcVrGY",
  "key18": "38NrQx4a4LuR85Z1JUPiyRzRaox6btoNwwNhvGT2TDY1u8CEHPeJX1m15KQatdH6hhDMy9hWEEELdaxj5acBpJta",
  "key19": "t3cBvb6wtqoD996W2UpfDj3Gs5PKVeEg9mXpcst2xzAbnqR7xSturBHX3pK2MZuwJUPu5aeKtmR1py21kFfsH1V",
  "key20": "2hc2beiyBFEdSMyvUxVAtuq8UiqjDjC9MaadxmGWR3tjz4dNPUiBhkG85ncWqJnL8MXpY4LRkVRtFhdfevDhb5Kx",
  "key21": "45GLi1o7CvQ2yjzz8w4n4Zf7FXQsPXMjip7is3cxsX6ELTEda13hQfQfHC8r6wTCdgDTuPs9HRXRxJ6NEzbKKnZL",
  "key22": "59e7e6XVeHRZk8pMTM22GyHBFTggLJV5BkLywa4Ls1WDEq45L9yGHa16jpLspKdu2SEfwmJ5BDe3RFr99HDtGu1E",
  "key23": "2CztZPBsztaMj4V65eHTLvo4dfjveKJVDVYgrDeuooTAerCAWwyLPngqW66CLik7jAFw9bYvkp8VFWdQ1UYs81Gu",
  "key24": "3XGM4KVbzwfhVwBkGwJ1wZksdcs5MY3dTVNCXHrpcjQmQQxBBkbvt6YeaLRqZweqjYsiMVGbY5cCcskEJkJBhDgS",
  "key25": "2GFevSPV6QnSik4PQUXenYq4jSUHCUBCoZXj94EhHQTDstALTaG6D1AW1UXx6nq5ezqXLH9kVA22zb6WThbxqvU4",
  "key26": "H9WtffrS8J1gwKLuP1pjCMpzDqcDpBb9neM1mAtECeLxhbnPKNEVkXCBcaqXUWu3r156Jfek9mXViViyQLwrpxo",
  "key27": "HNibLBvSaiRrTfrpzgh4etuZWvCmhRWYM2ikkaJqV2YJig3aaM5BtjaUPN9rersLDa2qKLiYfWygDJFv4SeGirH",
  "key28": "35hd96ydZhN5RB2pvWUfKRtcnPkHdAAs9oSV3vB3wbX1Cz1eZhZnb99WQk4da6aXAPQNC2BdMeT9pWutaLV6g1NB",
  "key29": "4h6FnEaLaidGq9rQ2tmK3wee71ks1cPX2v4oVyMq2qSxQ3YudAfFupq5PvaJTcPaUPchyUjTXfdKmQKGx5pu4uJA",
  "key30": "4HrEfHEjr7LCEqitVpC3Jym1WdZYTLXA5hPd7Xk6WUNKoPekkL5CRN99Rpz6j3XaKh9ffUhHrxDASPdwdTE3x2eM",
  "key31": "4tN5PDdbyN6xrjRyVRjVbyyT3LugmFeFAu8DXTb8CP6rWBdiqeKrMbjARN3X8pMdbF2g7fEBbLPXkgu4amWxNBhJ"
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
