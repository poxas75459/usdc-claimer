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
    "3Fi9YaVsfbhrM3v3iRYoK7Bz9ubtoJ652pWgVVbKgafHvf2XSkL8MAWdB5H8n96ATfSKcwk6CHzcdTM9mpQn9m8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xqBfR9Wxfri9zpgwTKQfUhayPKVddVVimYNFdG4RPifawYUfCJ4JH4ZJVpq8QeSZcSoDoNkcBYBVBqaWKTzbTYq",
  "key1": "5qhwsWNf7tevoSUEJiJeDUnUR7WWE7jry5tuZfpCCQ37vt8CKLLJ1RU9E5wcutL9YHrehbWfZzZmCgyAbwioPWhQ",
  "key2": "67xbqmQKrkZEHo52zV3j3fLne9odpvw9uwKanLL9uqvwzg3kZRuHdvXMFuREZhe1GHDGtdueNBhAcPAJaYjQew8",
  "key3": "3n2kvKTtvowyrDqrjcmtdjUxCAmf7EzZh5NEiVFg8qZnViNxcue1mcN8nWYaF2bfLjSWU2RGRWe9hWpHvQrh47PM",
  "key4": "42nA3VE4z82yveqf73v2xyaygAn3BkiuFYRZx5wxW2mTQosGCfBAxGvdardPdZFyrFJap3Mxe5S9f5XeLwvbC1eV",
  "key5": "t5zvJXWV7g6fLzdQ1yXuff2F5YDGQmZamr5ikF3XBLm2k5yNJHh5vUnNnRW6DF7xK23HLAZBZ1KcrLgPhgoCJ5m",
  "key6": "2AYhAQpfr1Q2giWR5RTF5oVRy2tRhmLgQ8f58WbHuCYwdXSzN9GbUoye18vEwiYmRZmdkVCr6nETveWLcKKMLmth",
  "key7": "5m82q5m7LdJP4Dtgy41FQGkro1ugxJAtKeVGfXF3maCSnjQoDvKTutKp1qc74jzUZuu5aDq9ZLvSsi5BNb3939SF",
  "key8": "5pvfsYAjLCdDen46QzcESsuugK6K3BvHBjNcHnDav4PFYPH9E2LYdtrRiBNzK9bQ1uuMgYrvvA6jtMJbtNmBa4vp",
  "key9": "4JGq52cuwMQknfPQvW2ZUAG9JAHjfTcXCQYw7w8YW2EDcQUorJF7c13zB16kU3n8PufUTFcETFvi9nzeozPX67Jt",
  "key10": "2joRK7batoRREjxrJq52T8KTBxUwqrC4wSG5kwzVtW5XjdHtdjrpmGZSZR9gNyJg3EL7pBbzWbwWejsTKiSeZXL1",
  "key11": "5VkTP1ifEKv6Us6S4GUp2LnvaoUtskXrx1fAGfJmWorcyZscoxMeVjEcV8HBgRfaukzAETEagpUrnFzynFJndQ66",
  "key12": "5mmSDxHRUGqisgvdXLwFBqw8CkkWN4Hp4vbxWMXEtNx7Bd243sBS1Mftta8oFPcy41gBc6qSRVZtwTgJ91JMXY4C",
  "key13": "fsQhprnhsvq95TjXr2eZGbyBAgKss8jy48Hw3eKkr9rwUEWJ4SFRSyoUY9yc5U229DTQo8Pm6RUTuqHjifxoajW",
  "key14": "33tBcoshdGzACmn4U2KEN7rGukKHYrDaWQSg3Lubpe6ocMFtvbUf3gyzGnJgu5bpfGNtP4oUnXRs5SRLR6wzj6vo",
  "key15": "6MmMZDNaFA5qtee8MFugKLsaRZo23a5G7xfVN9QwyaDfvXTtTun2NzNQkvUQXSMH7Yn5dfy3jEicr6eBxK482Ad",
  "key16": "5TG2bURJcdpq4qPgxo7eLtsciUeou9JAXwiyx4hwiBKdwYEyZgFsuZuCajqUeyBPPcRu9CmHLPk3zDikiCmekS1j",
  "key17": "38ofFPreWmLjWChxPfYaafJxpVBq7o158asbtHqPpq62XcLy6GqtvoTuMWVaHX7ZsB4d2PZ1qKGXWzsMfoWUDQho",
  "key18": "4ssE5QrQYZrhn417McNTXPe2K7CQ98TJyFPhSAGsrjtywnXeErwy7y5Xjwwj1YziwFPUMHxYyLhjB57ubZWvZgcs",
  "key19": "522VYXEjKyQQZHHkDhUBmwJLdUMm3EtauFtnCXmG1bPXwWac7gySheiKYKJSwPQYYrCUVzTurCGJnXGBQcKEXELA",
  "key20": "XQSdf9xbLuFQ7BwCbgW4aFypB6PEpvLYumytDap8TQFC4quLusfza4KpL7D59JMSXLwWDuwGmpNRuhcF3yLjSCC",
  "key21": "5tBRu2dHgGmtzQRd61VPkhjJcr61qqf8k4ZRBZtE6sR3Y3s1UoNSY4Dxe6eiUubUajKvQEJrKDVNDWbu7uCVdtYa",
  "key22": "32tfwVshtfK5fzp5FhPnCDH2vC2JT8A5miXuRmTsJnZNQK44sM3TtZKboJdVjzzRB5Ewee5E3QMLynwGVfs8njoi",
  "key23": "GM3uGc4ghUyq2fYFbhTP8zBrukEyfAoDRNuwF8DiCYNgVmwGhLZsw2NwBJibcK5suBqhH1BWGhEx25chy2kaz7f",
  "key24": "3q4VCMR1ZFBtN4s9MvFYSEa8azT3vgWY7ckGgQZVSENBRos8K4gFeo5cE1BUMqHgtDm4N4KwuQEHg7CjX8PFauWD",
  "key25": "5FN8fJVHwWahUFfNeayDWxMdbgDj2cim1VM8Tbi33UGuAuVQxKLFxRVk1pv5dSuA8RLnHjhyX71QR5Q1vrgQP4E7",
  "key26": "evP9Loy6hShuxFrr7rhxbPdDVsmXHnQJYfFmr9n1Bqb7Lr2F1zVYnZUPj94jib2LqFAUtd6pjCvP4Rr8wtvkZxC",
  "key27": "3uuDmip7M9iXrCEDBvBxLnSzBBVgdZ2nSDb162ioa2tJmMCkAN18F2esrrXVGs8G6gYng6Ukhe9Cq3zSxenBXJVv",
  "key28": "57XDgkZtpJms1M2j6CqYpMQXHP251WYSDggxqXnvQX1ByMYdoxbTn7TZKbX4ud66R9sKvybQtAtzcVjNJEVAMy8w",
  "key29": "3DoEeQaS1scracejTxiYtNr6QBYViy54KR71E3VdSd6QpqbZAekecg3eJwZV9vCizfeStHS3yfiHcbjAhDDoLWoX",
  "key30": "36QGqGLGCEeY4WFWXDBW6C2hbodQkipDqR2HL2xFNKyfPghn6hqhsKEtyBGddeXBYprzEWSV9QmvJeyJsTcWa1Qa",
  "key31": "3pXhp59Etr7dvc3YEcb9SjAx4FMYUoSeqGmamDxkLQExzrKVCE3aNFoMtkp5sKY53xNaeDVDK5YKjvSTiWESZdxC",
  "key32": "ew9xsvkSXUdxdPFCWdzYLmNGpPuFpQXqakhJb3u9GhP95exaTnBtFn7z8LVTLUwrkxgUBYPS8fAfgFES8kUNN8V",
  "key33": "3RXGVaUWQQaKU7fRinTXJ17tZZ3exdE6oW7aJpgcKUTaypf69mhaQVdU31xXAhpZQNGPFRRUBymF6ZT4AoqADnn"
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
