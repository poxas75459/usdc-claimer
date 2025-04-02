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
    "3C6wKJHVTfUaVBfAH7MiQSS1jAzkPExu8UFEGt1DDYzvwdTispBBaUcqzncp9TM41tYkhmM2GWSRnLwniXZdHCpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aqLTi1BVtPyh59AwnML1YsU48A33iXwGQhUE7U5UcY326wWxAAjUofUZmb2xW5UDpBB2Q44MkbaA3xKW8P1amsa",
  "key1": "BcCisNdMpPA15ZkB9L1zS1AnASDY34XirCGowzksDGmU1nGYB2wmju3fhWPt95SFAQFbheU94tknrbJ3P5HYhBK",
  "key2": "zWcKZ4CCzaCEypBSDLnPy7WzprvmmWQ6kRhossXyhqmQaw2GxvjLrHP5ZBrBaP8d3AjA1A7abeYxynLbcWe9mQ5",
  "key3": "2PA8mFESb1T1HvNGJzLBXHzndm67PuFFuMRpoRxYDBJS87VQHnVACsCNXRsBmTzyVNrhW9hFmAgTuYvu5Zrxu117",
  "key4": "3dqFLSb4J19dyW4qTgwQ7khbwLD7reS4CnekT9a23BYoG4UJBxuRezixn7qngP4khmDWEWneiGkm4nrbA4By9TC7",
  "key5": "5diF3dUsKb1NEGZeQyBDLJ7rkdePMwGLk2BGcbMiuq8oFMbtmj7kqKuSTqWX3xUkMgKVa8BKAXez6jHXH1nZxvfv",
  "key6": "2y6rwPK1Rc6L2h9rq9U8J3L7oj15fUjF7irQ2jDpzX42a3EqRuPaY5DsopKeUvRM9VfjkwvBPmtNVNLfhKKXhkpq",
  "key7": "4uPq8zPxJiAM2k5bjJGFoTGpcRNXSkHZGaxj249cqh9qRs7vthxEpaUbCaAFjzNmKSsMeFHiw1ym2Q4a5bQ92iC2",
  "key8": "3fvswAkhnJgTrvJT2i1JQy2KGE62cntyD3VKE9Q1TGNE2goxRjMTFe493HTvAUHJUpoH5ftevxrHav2iGP4m488E",
  "key9": "4WMf13P6ooVcZag8Sca3Q2uiwaogAkqVqihrraBwqkacV5TjPnVXrzqpEjLQdd8TrFXU2di2UbXZjKdJyZ9tDdh6",
  "key10": "2HKyH29nMWQB43XFc6Pnop759rmFA2WTCeywfvXhmdUrncnGRkDTMq8qurnh2fJJw9diei6wVj19fJ2GTS7S6MVD",
  "key11": "65XgfPyk3fKMC81tTrda2awtEwK2sBvg7EAnPyUXWFnKVS5sDMZVGwyGWcucNG9hKdxf24QYM9J69kpmoUHkWHHV",
  "key12": "gyYd1go8xmDnYxY5utkW5mY1eTpPsMNEerLK6QoM7bAs2SQLx91yL5468cUzzr6Fd8L9R8E4snosJsK9LuUB8NC",
  "key13": "4zGBfh9Y3ibbPswy5wEpd5jcYkYRPeRYJtahrQqibfA4D7nJAXZpErEmx9GvNvrzxYPigzqi18PmxPYRmf1S6NUg",
  "key14": "2WRFzDmWJVpw23sM7qTTzHnnpq2RWGebUoR6toCLsnQXaSgU3pPNJbYXHPigufBsvJGf9CE2khgtvjvNtQfmEE11",
  "key15": "2Yi66W4gehnVGC2RJaDhkR4A9jWmVucDojkec68bFxWJWNye2Ez1P7kdve5CohsLZPsKaq2Ldvk1qn8snWeugv28",
  "key16": "5UTqmgcCt75r2EebAjs7paVYmNxYMokmXGYj99noup2UU5GhvWVeAnSe4rtuDRvkYxd45KE4NkQroaKTWsYwLaR",
  "key17": "5AHqsQvAyJ2UC5xSC2ZmbyHc4WfXBFEXie7gjykjhP2piabhSrHwA4KyEe6yTnPb9AQmvNspaJ5VE1C8Hs3u8Egk",
  "key18": "5UVqSQ1Dg9MNL6UFhsFX3TexjQ34dMQMM6EdM1e7jVFxZeh3yWaM9t76poFNVicCa22YRs7DfbdeTze8n3Y5begj",
  "key19": "4GkJGcpCUL8B652qDUjWCMcmGKPp15NqMBpnPjVjc4Rj2VnLiPVs1jPHD6nQd37Yjfrf9HMTcPHFryiUm9DcRtST",
  "key20": "LpRzPpL349GbnnKG1ksdUt3LDchCHPvrDcb2kfrdbeyu5yMGRyaTGWixZu9N9nGBtGVRvzUT2BT5UBTE9JEVCQQ",
  "key21": "64oa6sqPBNE2GJu7GWGUyAB43p81grsqn9ddBbUa5igJUwQswXnJKNnNEHjgCuNEkXBhJRToapHEd6CWPnBVjo54",
  "key22": "2DdjYJLRRqZKDuniYy88BteGyaz6GFsMSXHdmqqgc3Rgo7i8UzzA83Za3P4uMEwk8FvatC5yL3Z36NKaWAQwCYAe",
  "key23": "42F57z2Vpm3AMmcXr14EUisbTirWSn56VXTQaLVB5pHa3ryzKoHYiyXKPbfZo532ciMCz2ELXVaHXnoJXZX4QJ1S",
  "key24": "3W3iuQkL6u7AibSaWL3UFxndCBme6Qdy3oozxYhXvofYuE4VYeZhTfMGCH1WncZupu9fUv656kkrRNqBw5wjj2Vx",
  "key25": "24GWkLxARfLeTFKJLarVbkxcuYRzGq7gSpGcA3qj9uEQWjh4Bg81zrXvxFN2jhG3zyvyKTXrHDqjLT8FM3MA6pF9",
  "key26": "2K5ZidqGtt7uSMkJ8PpmfSzm468jTyvMXtDkaGU85KR54dAbL8oahLfGJvLk76T6KCP6YGquaKnhoX6DwLSgERbM",
  "key27": "4Jm1HNWfQqK55nCxFEvUwih2wcnLdu3sNuNMD7NcgMPn5m7wbC5VZGK2xAvtSbHcNzLVHLVqr5iQnsaZ65sUwj4U",
  "key28": "5ATYifHw5UFwhYWFSiC7sorMfQWFXyh72HEkq3hsuLYuo1nFSf8Jx6hzbpUmuhP5MJjhPHCpTZMBQExvwXwu5m4q",
  "key29": "28o7RJ745J9N5JU9KBzq965LWMfUfrtM9gHtVTqCUXNTGeZker423qCfd1omNUbmQAesXQrDqpt2gECWCLM7kvqs",
  "key30": "9PhmBMQZ7Q8dS43psEZrJwCCdbjVfRNbZwn52Q49LzVLkb6YaZHXEsTNfhwtBfozmn2aUpkWhSqoGkDd3YZJGji",
  "key31": "4PTAgSUqKJEdsTvXLpA9giacPqmekLeZxLZoz8ApnKKqViunuHxoEicjipNEyKqPodP9uim3kDpVBd5UwNiyvReA",
  "key32": "5SZyk6EWC8KqQBGZxscvr2xKUHY3sW1bcshyqTVVTrWwui6s7xFRQt64xAYfaHfTo8SFb9jLT8ohknnCH4ci4AvX",
  "key33": "5axYtjxgyjeVqtYPqCXt7iwn4zJgvz4eerkRNXtHuUqseGwimkSGKsomZbSwKWDvSxsRjG64qFkKagrowvmJAacs",
  "key34": "3Hqt1WmmrpUrSfmzJAFf7qGMHCEN6LAAxtXMtVS4wPwns8bJpUPshynHEipPRrSaMrTb2cWd5NWYPpCR7cQGcNjC",
  "key35": "435j6bUVrTkYncNciPPD4JGmxi8Mu6cfWe9NskNW4aaeas151Y5yskxDeFSRgZ3ZYYPwNtQ6qjhbTrWVduc4aEVS",
  "key36": "1ymqzKXp33s9Cce7KmRDApg6hhrmF2jK6BZfiWpnHf5XavW2SkSiq9KkpBk9WJgLb3nu8nqBkCRtZQqZdS7Pb1V",
  "key37": "2wFvV8DXBuwuX3tFGDWugS1sBz5hUN4j7vk4DLUTATFLt7goFNyELvFwyGD7XC2mD7DxrMtdAtAnr8r9a8ZXe2B7",
  "key38": "2q9bgJNHSkkh8J2oXT1UmeSQMRCDLSKJeU9z87TRPY5eWz1YuoRiGGFDYAijNNDij87sWvPaNHVBtt5sgCdPjg4f",
  "key39": "4QmDdpu2dqm6uwQNDiUK3C7abSwCrbuQeto6TUo6ABUfTUgiLPSL1NEB7HCPgenmtna2upmDYWgxLJ1hVnAEEvyu"
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
