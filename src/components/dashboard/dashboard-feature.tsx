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
    "3tEvwKrYJvVZvA8tdwWWKfum1R4YvMM5neYq2PCu1X3Wa8HQMWPHWBPDUuZVX75FePkiQQeDXGXh3EbMGtCWM7z7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zAisoC9ZRnbHGk6vJKdSk1vJ3Reu5wLL4V5CQaScostftpcCy5FnDJHDE73Gb5z1NGWhgLeWB9s2fwHyys2ZuoQ",
  "key1": "2AqS2Hs5WX6QvSREQdCjKeC5HrRZqtzCPggB8pGg9ayWVDsrCGZirevYMF8RYig4Pe8ax4rwTeGAc2q3JRhMefxV",
  "key2": "4RSG93g6YSDJDa8b1ddxR9fpf4qDppuRkV4LLEyo2CCksfAFDYc6cLqfmx6ULz1ocKUdBBgCCgiZbjD6UqrTTYdS",
  "key3": "4Ab3wyBhaMyFZyw9B2QxWGKNjam1K23y5qVAVZGQ6UWVnqcEdb55DAqmaWntLvqopsHfrX9uVgJSpoGaBkpM2Q63",
  "key4": "56bAw2GLVr3J1ozmtJQKH3ZF7gyqauLpZsdmFLFvSB2Uzexrk6BQ1xrYN9HjJVaoAZf56jTMk3j3b9Awk18mwDq6",
  "key5": "4ZseoocRFetV8dGoMXGhfTdtG99HygfaApsYCWBfwuwZ2T55viXte1Yr3VYS1dHYkzCGWSnLXi3tQTUKppF5y2N1",
  "key6": "2hzTicmUCcdgL8MvSLkXpacnEWhxFLbJKQHqrrYqWT1TM1yij3srh5NpSjGkt6N1yWgjKEF3TW77f9SuLUSSGw4b",
  "key7": "PgwWvYtEkvPBEbfNH14sXvnj3zijeSBkBMczHEZUXLDUZeLkwyM8eBA5Fix2VzFDG49JhUAUNGGXXfegkd5ixNG",
  "key8": "474rdjxX9FKGC9qDLbEPp19BnvfGq1jv8iQASX1mDZsNreXy1Shr6mWnBFcY2G9aYkp3qNgN7L3wM1zsfdgFkPWj",
  "key9": "2Vg8uyv6Y7j9Fmk2M4aeRGnUEErsM3XbRRTYS6ByQdRQAmi953EXk4yfHf18bAyW5puYeZrFgtNVQnkXfwmSU8x8",
  "key10": "EJDxpKb9WmNGiK6M3rTwPwWNPxcmCdh67NdwLUWPyzHPYCAYWAG5HfULc3hdUb6L1J9anhxq6fyXJZXGWzbXBm6",
  "key11": "26QzWtbUoQwvbXZngp7EP73848QqYEYoXZdtomhHkRySeTsUxZrAJPUeMyNazQGeBhbXDLQShJtcpNhgwwpRRgsC",
  "key12": "3mAGuxSn2yUk8KhYpbnLy6nMFfxy7pceQXUkiAvbA3WRJmDPF2CqDni5ghykCdcRsXjo1qmQ51nwsuoo7q1nJPxv",
  "key13": "2u19UnhppXeCMBhgqJpCwevEPio1PRSCmswSKaHpidZ3CrLvWPhMBfeL68gezVD4hiPDCokgZ4FpuahZ1y64Fw5R",
  "key14": "4dD61BcJENxqEXc8WCW9BthFNEaeUeQBKaG2scpdMkWvfgfV8act93K7quLiSFZooSWJWZEcxWL8BjoF1tLYVzdn",
  "key15": "vWzoaX51BBPXKNvD38Fo13A48xkQ7awtLFokm4txhc8aGEjrPvqAhRQAbntfRfXbQVTF2jz3NDe8RbYasgGruNY",
  "key16": "2fqPYa1dskL7ooL3kMNHmzHQnXgtJapDU15b8ZV9b5AuZSLmgyaJvRkCiGTvRVzJwtAw2W9MGbq9HxBaYnnHkgjb",
  "key17": "4xTFvn5UN4kUNC8sETDhLu9H8FpYWPYLYf2RS7hyZ8L8hzR6Ydf88qsmv5RvCAaMXRz32UhB4jK21JUcBjddKnVM",
  "key18": "5WdkiHj1ZATaNf5LMzJFAKvnzJK3yAgEXvM2rK5BGQtJC63zd5BU34g4HmwofqajpiQCeCve9aVCN5mfqGscRiAA",
  "key19": "3rmZSp4WCAxLs1BoTH8syeVBH9MQovSVdLP2CFAk2jAD29MDVqPaKWtnXKnwA97XMkyoeDqePCVPkFU4dc8pct6w",
  "key20": "PLSe7pmEt8uidTM5kAtCUkBXEfchyJ1mBU6swDFKZoCnMqFNwSKBRmDRq9cm9hffy9ZvAqCmyBhaPUrNnPV7B6S",
  "key21": "4ENQSirn4aQzWD2cDTUj1XjGLTKktSCd29ViJierAuXxAZov9qscuC1aTh9pXBZXdGnjhBRmvm4JVX49wsLsGgEQ",
  "key22": "4TgN1NLWqetDXHsRCh5VGDWEgSZRBJJmkEKr7WtMhZfhHuMYerLSuDKrgGqzXFYTHaR3RUsUdBA7Tvpxg3k4QLYN",
  "key23": "1MQiLbp7KGkFgMLEEft9FjybsbeECPnzDiJHXXDM8HcHRgCeCmwNCnaJaBzmxUUvTTgMVXEV6GQbZ7GyLUovFRn",
  "key24": "3TtivQBhUQAdR4waZupaiUmi2SqKeWzRERam5vfjWGaSdpuP4MFxPmEv1E9uRn4NvMp1LxPaSFiskKjEyoebg62a",
  "key25": "5Sk3Ppx9uqGrcCBHMdyuCDw3EHHrHyddMirq8Tzdng7ErXbPzTLrVFiWgykBEqyckbt5dN9RLF6hTKrsmweWw5bE",
  "key26": "2WFFFKz7JHiXCGd896cnG3pp4ZHqrUCenqWzRuEMJzJSyKQSYGbMFHVdD2Jo3bJ3vDmqse7H3hPimwYMFGKctRpT",
  "key27": "52pnxrqvD3zFmQT47yAF1mmEroY38LJhXivUZhW6oUcGTHrsh2R91WbB2g9F7qHGYuJpYVheBskZZLZ2UDiNwYBy",
  "key28": "H2i3oCERZUKYgs1gV17Y8CEq3NMiVP8ADyUnFuzeXqT9Nizqoc3g11ikx1wwQXBUMwGiYFDorFzjT6dgxdoUCc7",
  "key29": "GzWKbxCDmkazDXL9vjbZRQJjz9zn6EwPxGK3vV6Mosw2AKpBWAhxzbKzu98RzPua8GpdYKmovFRd1dtbkVJb5Nm",
  "key30": "2SLXMWxRDUsYHm7kZENANeLvwpp22BDPPMznz2FaZcV5ujBX3dAuMLhCssig2r9tkm9LvA8bs64XiatX7qD8sSuh",
  "key31": "pcMhGxuNqBbBswSu3aosHpQFjA8TuZL2ZFS8NLvoAAo1fn58ze3n83BiNcw6Df9N5ndEtmmjzy6okmNb1zp9LWH",
  "key32": "2xgQDrdBZVyYUKtbW1Ru9ezHBEuv16iqsnk1eNSQgZ1hrZAsS8mWAfRJcpkFTspjfGAwN14kfWyZw8UNt17tCajB",
  "key33": "3aevgiPopRsXZ1mV2knTWyCvz6iTxpFVi5cWS2ygMQC7Af79jMFHTor4MCbtiW3hFrMMSKjZLxoAiaj4bEd68b95",
  "key34": "5uwgJLY3PqP4vVFPDz6awLykcE5GTwcuuQ7SGpicU7Fgp2hS8gj2NDfGZnkBV9FSrvmT5yssVNdeQCTgiEgwxviw",
  "key35": "3XYAw8n9vN1yzPdF3GZhgBndMgWUp2ZcJv8B5wLzDSBCQiHAQNjvtDayJU9WbFfJJBU8ocoAyncP9bFZ2Vd4KMfB",
  "key36": "oadAUDjAss5VSXabLA1BvyBqnyiThM4KwApDLqM6yemnj3TCxXi12GVzMxqvCVvMWuprJQ6tSmwd3jNoD1w2mX2",
  "key37": "4ekREB4FjikAZT2q3QdSU23Ky7AiYXC3ripYWDVE76EdZo5j3VJ4GmTM17HVz5yeFF82KdAAfUmigLKF5dna3fxw",
  "key38": "2xiUwbnxVgr1hvJ3PfCnCHHFrS9UdBWsXH3SWWtizkxMshsmLye1N3iKDHf8JBjMK1HguBny9WeuzDP8NLkb2Kpa",
  "key39": "5tzhNiXwHyPrfAP4b8QL4y2x52DsF4ZkuP7CfFqv4t89G4KivfGCBgBEgSCsM1dZKBZxwMvAx2zsirAAYsCQGKkC"
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
