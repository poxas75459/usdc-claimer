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
    "H9a7XEDwBJMQwc31APso97ZSiabBA8i4hgLgz9tBfSzsZT27bUfXAKq5doW6oVLnHTo7vKbnD4RZkMpfjMsFZgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ejoFRL5BNgU6p6pXbacuNjSagKTFGxuVRVHhSv9S85N1KLTjEPr2J24MMaLfiF8tTaJFpke8NQgARQpJMXCR4kQ",
  "key1": "4fpeHkVxFzqjrLXE5NxaVYFFmdZey1d1fzW2pcGCN3w6SM7oWquctQpEuDMYbiqyytD19AgzzEypgtJ814wHfm2A",
  "key2": "TFCh18mgTqoUTtSm8xrCqpqfHi9gBEkzcqBxWWEo1Zwcyt677S6AMQwTqpgPaJiZwrPscPge8aiPaQUk35fUxAt",
  "key3": "M8z8QwbQFLkGqcQ2UsTR1zAJgCHZY3ZbEaP1343rN13yNgVam7kzcNjd2pzNSo4c85tYtEUvBUchjighXwmAw1K",
  "key4": "5BdrRr1FakE7vMScHnVPmWScj9BhQjzWQt963DPPxYv67F8KgtB8iw39Q4JsXWK8mEUo6JxpYLTBnKkRiu4rWzLg",
  "key5": "3c3qxcszXMUHWkUVsekcdNQisFa9GXNfmQDEhdoRbc5Cu37KTysRzp3W7V2UjvM8e7eBv4YFxqwik4fmUdidRy3m",
  "key6": "3a4LyhscTgN19HD9h58WThkREdCNJgt2FmhV1HTGfMB7tVEzwpTzXyiE3MUoxv6gCucQwDiJACLWUuaJownoW9wJ",
  "key7": "2b9ncNe2WGQ2H4CNdGoft7pteGoP2caUZYqvRHnEkoxtEdFkrwT8zkz3Kk1EPJ2MgsuhF9keaDKTsD59aJctfZug",
  "key8": "BCuBU5ZzZ7gRNFh6u8RD8cDPJ4aeRx1Qhuy6iYgysT3jfiyNdqtxdZcWA4xFjxXB5NQ9pikBYDDYPYpobMCBe4M",
  "key9": "3mjgtQVYvndzjKpxo4E66BgzsQkcjr2EAqwLK6s4xyhf8cs4SQBUMvVBm3M6byf3t9VEKbtxA87addHV8WS1Rh3E",
  "key10": "3yw7WxDZYcUwFQAxyfb5ePStZVQdpkUgF7EAfzJhxD6fu7AujhzRDym3q6JtpsSJFfDQmmAe3uBoa3QctSgx5ZaD",
  "key11": "28MGzVo4CUtZxXyxGHLgUTDCt2nYSiACC1Dwmm7qWDrcNPDGUaRpuCbgUzjRpjWWwcf7KFfJpAi3EQe3tHu9nLFE",
  "key12": "34RZ1YAsej4GFBFgsMxXPoUdwaFCtH4cpyDNkKArSb3DTTeCUpgwQf6xNzk5R8pBNtP8m57dkiGN9cYMpfxF9ihF",
  "key13": "PYnF6NYjwz3uFn8wAd6AM7f5BUM2Rbg4uF6qSZhvcywdQMhGJDX3d72r4BHzjTKyK6sKYM61sQQUPgHYw1PxENS",
  "key14": "3EqYaxsiuHpSjGKfo4Vt45d7fqDautpExto1qdAo6rYHss4KhTU6c3agxVZi1wC2PT3r9HHPZvpznJkT3ssH4PPu",
  "key15": "5DpS39E5LisLWhnm9FnVBHLgFxySosUrGx1qxWwX7j89jCBYLvpNC1QT2b52LyTzcDFEcAyapfsxmgoJAMq4PTR9",
  "key16": "32F2WAT2trbDTjuQo9TGAS5DcuNSTBWTzBL6RpU1LfVTYcpcTFQGDhYm3LUSYnyBRxP7spQrBupJvdwEzuJ7M6VC",
  "key17": "3R8MLLSQHmMAsze8KhfDVKMadwoz5yF54RvFprpz4D1nUECD1yEmNtjQZTzZh2oayuNnRziz85uAANC9ggnEywrN",
  "key18": "2Z2VHNoNYDQtdrN8nKd3yr7VK17N7JxtDZdajVDs9kt9sY2FQtCMhR4QLZw5uPeCSokLwateTa3X7tEmaSqsJnxh",
  "key19": "3Hho4vSEeo1gYUwdiHMgcEtoK2djym5mJtPiMmPEnAFSPg7yAuZaz4dEGLEtw9QdScfuAug7kQtdwZ9YmPjJVbgJ",
  "key20": "4qK6skVrXzHtbyzb5CAvQmttbVUUX53R4bX5sfdd4aVFqcwXm42p6fnVHq4q34E2gw3EF8MDKeGqPJ6Nqpr3BvPD",
  "key21": "2vfboTDLXgAtADUcY3SY8d4WgKzhmWM63xvfAdAqRWuNPSN7mSbW97UUUTMjA9wG6DkHHrmbJ3eqKhxM7AxWpT4U",
  "key22": "a3KrxWZNszrPpZ3ka7XfpvLkCtVWGF3YkaouUCwLbt1SkjtzYHFVJCUsgp9KtXyyGe9ais1aWrYxWq2EoeHzuQU",
  "key23": "5tGJPV8zxR3hPrDSdKGbvmBLiw3VQjWCAxhuUcLrJFw6qGbg6SAHBf2PU9JfvJ7j1kffJi2gdyEzMUiAjBu6WK9C",
  "key24": "fuerN6NNUTxeY1RaHytVRvn9K8zmB1CA5RwieRyNNtQPCcfkFWyDnRVHuLF1M5aabVC32Z2Jz85wtiPbRVxWdWg",
  "key25": "3M2mQMAf6xJ9NMhZYYXgCixu8gPG7YqDq9Z9P4h4ikgyTyZazJ3MmDKaTwEkgsDhsP8atsWrR3JR4c8eodcBWkqe",
  "key26": "3RypBm7VEZ97JbjU2kmc9xbWwpR5uez78qqgRcXkDuYfVuoKBjzym36sr9giuFW38v4M41ePRJKtwcMpKNxg7Yxm",
  "key27": "aDVSgfUJQtSoaM6NMWqEWDxCXj6pYFxoRciaPX2Usdhx6BE3noJGWuKnxNUHQRwdDWySMfCnNYxE3wJZuv6BetC",
  "key28": "Tje4E7JJqmV9Mjz9oU2kQ1YEwWANTXmJvsPAQg3tqLzaykxKzczZXHGWcpD3L3mvjtiU8riUhQpR8AgLHbbgkP5",
  "key29": "CgnCpC1WrsjK996LDJ3aL4uoBwqiPeVVrHPC7JRtKAgCPCx4sdoWhamQUnhHZ5f6YUD7BqMyyV4xtgobqbCUv98",
  "key30": "2mvWabEg5p49nMQGktkEAE4SHquir7nDwVHD67MQDqq4hAuH2ZnFQPnryh9cnTZpCEh2682Drgi7PveEGaLAg16i",
  "key31": "2HqRPhc4SzwYkeVPzoSxpofcihrmTUKomVSpWuwT23muAMeaS9Qbubta1XwoV2J1Zv2DmzqWVe3qLWmauC5YVEcJ",
  "key32": "5Yvadn4apQPGhiSGPkvTWdiVFkfA9SCDGa2diRJydsonC6eqokF14sN3734kzxFVXBg8QsHJgEFwA73jMmWwsbFs",
  "key33": "arrzprzPGyYppHs8gkXWqZZ4MFFXUNzwXB9Rp6WWLiQu4vuoyQQT3stJffMgMtztQMUUP9cC2qPJGND5FSXsusq",
  "key34": "2CnT64hpiwm47t73zWhk578B3oc1uuHkP1Ris8EPxV6qK2i8DPYfiiF4n6kbysQ3kB9uc7M2MATHzt6fBdEU5QRB",
  "key35": "5GcZu1aj1fnvc3QDTUW9b9BALMuWVDU2euDzz4bdydUoUsMKgrA6wiQKtP6ZxNk68CyzER28ZtEEmkkSV63qaZNU",
  "key36": "621nicukymHsYiRDJq7iXp5PxBCbtNUSMkZNZwjtxpYXpr8EF8zDFpvVzBNQkgHvkE2L347J8smyVdZbn7QNTZAH",
  "key37": "yL3dnRgZqRsmAzaWa5ZCwkSiYaqqXCzCbtPESTNpTAiYXT8hUqdGiVcVfLevbdM9qhJSkcMTypch2e9dtphe1Rt",
  "key38": "2jgyJNrPLDtEMeTyEje9ZVFLmohYxw3qn33JDaqyjatpcQ7nKGrjHW7FgKCUUtSVgyGoJZWjtzLvBKTNWqybyxjs",
  "key39": "35HLVi39CerQ3WBxbwJbNSyrFdGSyi4HwNf66yhcfdUDm1k62jyFxatcpYY22frsta49WMYLASdNk9xzVDTGpVeY",
  "key40": "5ahUeFJoXP6Xg85Y2nkwgAdSUyQ3sQ7HTRQM86LGiKXYEMETLKqVmq5Mm8PEQSTL6q3eEzDUxpC7pNtfnoBPgWK3",
  "key41": "39zYj5RsXT1HDTfw8KCWJjU35n4T5aaz5qD52EKHneZ8G9XRmdubLNaBrWLsFqanYqBAsrhvKiCW1snPo8Lb2jVh",
  "key42": "G1RrkcyWz5jaepneNE1MCA2DmqPHkVzqdmaEqA7nbSvKaYXqc9Ld7aBmnHWNV4FMnJfNLQQNqrS21K4cMa9d4ha",
  "key43": "3rhUgBMVkjrhUjk7RFuLgEWDPJBC2mPMeX5JSv4ZY7P1vAkiSP5bQxCqmsbUFTcaqfJM7NRVyrQuho94zkjMi9wj",
  "key44": "42iWvzx9mBJf7hh87pDoXtZ5XNV1gdbLamg8vk1V93TPxbvihecst1S3NTS1VfCar9kTyubdy31KRPbPzyfuy4kV",
  "key45": "48ZnQCormy6aL2mkseLZkc7BdVMToL1h4MY1hN6krZmaRxbX7AnW6Gp6EBo2nSM3rh67pTw1PDnZs3Eoy7Ky88W",
  "key46": "4TyxpUcXTt5DEkvWZbM8YAGobJzFWx9ePqX4ajxkHvVfaXqoSmb5iyBB3mk6fMTmWVMHkevgzqW7JTKJPUcx7ssa",
  "key47": "JjesHjEQ3NAx6zLrA49pwZfxdpvXZoWFJ87TfVGqbxtxoXi6jUUQXk2sz2trx2APAYaxEHxDki7BFQ36vCEAkvX",
  "key48": "5vXZNEGajFgudH4hgTzY3tAbSwMDphqhNdBEqTAxfDc1G9yPSpww9GFruLTLhQ9sGRZUb8kwxWJke5BJn1AiG2xj",
  "key49": "xydiPSjNTTbnhDvdsnzxExHafcNNah3LyjZ98Fn7hqxGe8ZstgJ9qTSb5ww35TByrknrZD8wVgpcnDZ4zi6D3we"
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
