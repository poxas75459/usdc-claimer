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
    "3foqjGATZ1Jb8W2JeWkshq5FVTjfuL8uXAtzv6tXA5onoVRm1n2d8bNv12NP5M2NvNsieeVvePgkwYvxPkhMNN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sydjtK5HcitRxKv7jjF1PJiMzQ38Hq2KQEjaT97tDCRVaRi3XEdovdwJwZNc7e3edKJMiPM4ALWrkQp7csL73hR",
  "key1": "2yWotK92rW76oxWrWiab1chy8AgwgygpVWMReqHGA7bBETiTLyEVNaZmb5whMTSW3KepbF88wPXY9SHy3zkPux7f",
  "key2": "2YjMLt6s4uu84qzfmW5vJ3zBFSN4ug1fekhroDqPgNaZLfycjMRNLPHU7E1HeTTsxk81xPd5tLc7WAh81WSFMjAu",
  "key3": "3SVYFE1AmrtSsJPB9uCq7H4BLBYN7cJ2j4ibdkSZi95AF5JHGqhfN2a8dXJb7bf2rTj8UmWyhyP38ZhsNkmVr2Y5",
  "key4": "fFTaY6Kx6ZS267zneRcBDfCj7SXuGnD5tMApbMzUoHAA7qUj8wsXUq9nm5kxGBD8iinPQXwzZJE62NdnPTV8S5y",
  "key5": "wxMN5XLUXTxjrf3ysoec2iWBCrZnhte94WJoFd3MKSpVsiGQDmiw1QxDMujKM3LThboVbdPmEfg1QmxAL96Dxf7",
  "key6": "4PZcYPG81brYoZFNyVGUu3mTdBMffGTLP5338TtFFvAgjHU7Yd3zbJai6PViGFGGgRov45nLtAMojx9bARuedJh1",
  "key7": "2HCYUD6TzBseKnZRs9TzXnzGQQzPLvNcwe2xj48CJVtrnmUGp8caLHbX5ghVc7nWmg4z185ACuFTL69Ta5PrLczt",
  "key8": "38mBFPYarifEibgS3Gu2ab91wM8hx7C9yhEjoEqnQ3Dk8P3JaR2fGNhbbD5oLbZfyakG6yiiXMR7QPTo3xNapFaD",
  "key9": "4iwciDBadv3NvTWX2PBF12UDT8fnUsJHtkJ9Be67sV9X9erTs5PffvsnNMkCgCVQsWpwYN2dESN9en4q7i4woHwk",
  "key10": "2g6HvMAKyZVDF7B4V6S9CPeP2w8RcaetkpYDjJwxrozR6B3iEaJsmKPHERWzJL1wSkP42AJoE3zbcxev7Y62yDJm",
  "key11": "5pwbjqjmSAEN47kjbCLSkKtLXheK4hbRcfnzwdjmbs6sefJXva7AjsZYmfgfXQN2HTvMu9LtY5vGvFVQYV8cJjZq",
  "key12": "5yKZMfv9xTsum2MF7YDmmyGEokqWbFhme3RiA2a3E5GVXXWAbms8RoRZKq1fjs9jFrY2SpPcqYXZZkTp2KwAnt35",
  "key13": "5f1eGGxMZXZKVjJLpenkw87ATHAZtwzC6AVGiUR8h4X43acJXt3SwTMLmWCWrtaqp99a7KEd2FozbrY6989gSY5A",
  "key14": "5YVYYrtCAfAVAYQL85U4itMhGDRTVerJz1Paxm7HRNzs1PnNwr6zzDepEHChCTdU7y84xTNYgqy4fcxYdJwMhZ6T",
  "key15": "RA5MPjE1DUUsvatMAZfatCCM433seNAb8KXJHKkZnQfkqQxoWL8Dvn8zQnWmwRzfmrSxQqd7sn4Pa7UJcdctCUK",
  "key16": "5GsVG8ccWDaRgwaqhDzqgPDcA4gySakKD1XeXJFzXUtgzSTnc6EBG5BDczV5qfGBZdGH7wdWTgdcJZn1DiLwRL8w",
  "key17": "4KS5BkxaLv4JcDbRiTKkXG3Zk36T6eTfo8kHZd63KBZWLaggt4gUxpogiF176wLpy7Yuj2gHSiJmTw8Y1cS6Uh69",
  "key18": "5Ud6H8TTcgwMNxahHum4D7oPruYgYpMVciHHKrQZzx1dUNdzZLbZzS4YV65oG6wM3htn3w5tbQDMMTdgJEFdicM6",
  "key19": "3yTQB1Z8PUUCjBLLHYUPdYVeiGXbiPoJrZX4VCDDYFgnEpq7NV4PeqqSX75nCn6mc3t5bKvvtn3mgX3KrnrKyxHu",
  "key20": "4SoYFykyiLxgUTUo1hsnPxgNxf2st3vbNct7N4K4wq3BGwooxifEiph6X875a4Pr9NxxNtoShocrjqJQDXaeqC98",
  "key21": "5tf7RvNyT83L5u4xPksFaNN9cqKWhBXGghCDC78qyJKKjwYvkR9GWW2r6hVkjMSRg6AM9iVg7qofuNLzdT3kJq5X",
  "key22": "2t4NNup7NKLR94wMpiQBanBCkbMETE9NzH9SNT3Np3q8wfwMee262WmZcrgdTbTYsyYSkaDutWVWpGUP6AHf7hsQ",
  "key23": "5dbVWfmTuwchoXn6XSNAsYiERokhkWFrksPHyQpRLmUnsWFp2zk5csrALLpFGPkG8QskAumnFZDwRh4rm6y23Xsd",
  "key24": "5p9CnrQMQGySNyb5paQeZ3FGq9GDTkYybVCdkCtjZ67YLoRehL9uvZKX5C9SZrKBgPoFL1GDg9EGG9WkfWYLcC6Z",
  "key25": "JQq9YSiEm7mmkRMiWeyj183EQu7z5AQcD5Q6QwQTy9XFnjiGM78qUnRGN3k6b7qrg6DbATVtPTNMQJq4CKUJgfJ",
  "key26": "3HCVHQMBJprPKcVGJrc2d1Z49ZEwmYwZtPGNhREuPvzQWvUzeFAcZicf6dbSkq9WppJiVYz86MsGZB8DHapbFFNK",
  "key27": "4N3bQJ7YwPftKUQqWrwUgJQF7bkuzxCfWKF4wnpXYoy63sMp46gb3MgqxvoFkkKba5YawCoiTaNGEbt6BPyLRQku",
  "key28": "2xGtoWQjMiNvdHD1BKcPojfmVS8PDvDXQUrpoiXSFJG46wJ8RFi2wVfYm8UBpYtL4DKNofX1KWDNRMXpBR8BxrVZ",
  "key29": "5Brn6U3VZa9FJNzhfhGuGCGz5Vmn27hRxFYpBGc1vassyxCPoHbLTc3bjJE8MXRJPedTy5wgDkmfqHuZbkdb7w14",
  "key30": "piiWETyohV1vsDhUZonVpN89YHFs96rvGgdANQH7RWN6jn1cWtZPFHacEdkMmZD2UawSjA8hpqJZzc9rNqJWwNt",
  "key31": "3evhfhSreqxz4RgQYjb2V8dygioDqFgrYQN8HTwVx5zTq9PYxNFupJjxojCHUv96z9YJm6EPwVo6DbRCVgpuWyP9",
  "key32": "5GsYz4eRNq16p7ob4HQD5kbsHKXdY4f9QfK6NVs9rmQS76d6tqPw4CdXXcz5qoTE1QRWT8WoUGr3Tdbru9YP6guf",
  "key33": "3VGycW4zV6ENgQkjwFKEBWgCStLvyW6DYUsQAV9heKpTRSGb7nbV9gTHw6EyKuqVQoyj8WRPr66K6pFpm82LdA3u",
  "key34": "2iwm8En8UyL37qE3qCP8TCXvp8p7HgmhxPLxSMDnLfNz29gN6Y6zBWdzs8buXXG1cyRa3PYruiqSMfC675yzPK6T",
  "key35": "4ir66xmYLUm2iKABK5LUXth2dxNiu7yPoULQJhWSmsjBqQ9oFjKZVftCExtUdb2MN8oBTX7KVGSV5HU2s16GZdND",
  "key36": "4i54BP9CwF5Ek1YZc7TEZQqi1fSQnE3M9cL98fUcpa1BaBRgFbH9tZoksdYuwZ6qb9XYPMuMirn9CvvWhagt6a5z",
  "key37": "34CWDDg2DuSnjuPvN6jHCpKr9ecQD3ShSYgmFQN7h2uiw5uFDEDVDpe6QdovKpT39ejPZfUcdaKFffVhwEzzG9r8",
  "key38": "2xForjZSwym7p5PEy2tCJ6D59V8DPtJG9Z5ykXGDHRuiMMgE7Df61FSghp32AKUgbw7FxtQpJyNQGLiG82AGYrmD",
  "key39": "4KPYpUXH532PZyFLgDEgaQfQyxrHNGVZyCGtN146CVn18tasF5qPFF7VAZKFoCdWWjMYnzErpuBGV8aYoeS83HfL",
  "key40": "5CCJZ2djw2BiVcNFkzH7nnutJzYSyA1Dn5VmV93B32o3CuyU4wawo4Ly5VdcmGxHHQwEPKW1ya5U6CEna87bwpzA",
  "key41": "65s5AKopTgvEsUyG5rUJh2c3LTofQjegxfRzqZvGsK87wRTcXQ5u47NBgbv9AwATmUQ2BzKdNokcLMutWFhBDTV",
  "key42": "59xubNT2uXcXZvp98guVTJjvoshwKXSK1m7y4eC9vT36o1FUzYJQxX7SAdzv7tEYMcjNNBjtwm5HEy33P4knc7Jz",
  "key43": "4gtCKSaZBZLJWhzbccT7Z6iLXPMLu5yoqp8fMua6HpEgN6qHPcetxhvdJNDTizxGmWUsZpNKMhfa5toyKUbxPeey",
  "key44": "Au1EWeQKy8PhhV8rMq7VzkQ4kWXBCZY3CQBvD91k3mihc3o86sd2JaPFMVdsjtdYCqbgptnYKm8koJHV3NhsJq5",
  "key45": "NMNTjeQ5z2ZFG1nimiMso7mcyXioRPdk5G48Ex8xFSx7pcPvXpUazzipqhA8qfGzh8PoQ21VkSUrfP2hyZPsLfz",
  "key46": "4LoX1MzMU1vijb132ymzS3Z6AHm6z3iBpEdZSpZQjZiZC7dWtLxZSUW2pTa6CCSVGkNyHUHjyoXv3Dthfu1SyznL"
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
