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
    "3P2fkC5K8xqxU1mRqFVKWgeVsjJzp5Pm2wdSg6QjrD1iuwu7CDwvrTmFuU8egck18SvHeU9kXcu97HRGJo53ziWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tW3krzim8jaJVo3um53DN9cZa7D5X5Mt9bUJoqF3MjBZXBrZnqjCioj3tPNSMD1WoeKQMaT52iXbLgNRsZZ8wBr",
  "key1": "ajKGaYMezNXPR6FAp3P6pAdRMTHeXaEz4Jh6NJXZBQsn8yQAJuigE1LyoPET5UJCF3LmTiMgSd7StEFtCRrEngU",
  "key2": "33dNwsekt4uZ4McHZkATHg2FwwFS8HXtJMzcbCmMaTYfm8AfH2QL8Bixc14WSzDTV2Arku4WCpHj9tgV4VcGGb3J",
  "key3": "49u1QfM6yFL2K21JmQCXi2XexjGqFHYSRCrUa4kBeKjLEnpDamV7ibFZT1NzQbhV7F4ywpwoxPutzodT5vXZQutb",
  "key4": "2h9i4kZ8Es9eq6Q5DFLPddVvcNi7Hv6tuNBD1vWCM4Wp95Fu7pDXqx3G53gQ4q5DddHgXiwWtGtKwS98fyrUfpma",
  "key5": "3HrzgDwub3F7CG5Mzm5SNxCdamuZYTUgUjuSDRycD6K9bHdngXxFzVv6eUEKFK1BhGTGYmdCcaMUULTaBGuX2yxZ",
  "key6": "3am7SECkJEt9K1i33hCRFsFB1n5x9QYo1gz4sEAdJmm7VZYaVsdc9N1j2qw5B78Ag8jsZJC68h8i3u1BJjwHeFgW",
  "key7": "2PvQx9Ap8vgvXJRz6Z9rZAiNL1fD8ZDzbGyWwiKaRSSLaRQrh5eru3X6mz78FSQ4qzNhHH3SQWARXe1oK212Qc8q",
  "key8": "2ybY8dhfrJWTnuh9mmdgWafoBEQ7WupALm92BvGjLr2GNFKM9LmQUPCB8SiC1en2aFpdG9r5uospWDiUvZnNp4J7",
  "key9": "4AH8ChFL99BULrjNn8HWHNei8g4Ku58WH8TP53Z2qXJLgBDj1dXNbjrV2fg1kEz28PgH7VPvudBZ7Fxv8W9GTFKz",
  "key10": "24ziSCnasKJkQ7f4cmZ6yD8C4iCvooZCRTcqdpZa693sSZjTA4gdJMi76wZVvoaSRsKqCszYrY6FwsKBYEao9DUT",
  "key11": "631ckomqUMmbH1NTyosp5MXv614gMjjUu5dzpkLBzZXMuocpPTqpYQ55EhwV9TKz3FycU6asbqMfEnTjuwpwNhJn",
  "key12": "2M4pXWGS1aqq6cPjpGQj29kiFm9kY3DKU8jU7fRbnqYEkqWYcHBRodituPs6ry4Wi9QoumbJhLV1vTbW6n6PhawM",
  "key13": "3cus9PZ8ehpAbHKatazzHH1HTRXHKa11f2K9XB9onriMytcqzrghgadfLx64bZ9Xhf7jhamN2ejEswciU7CogCg9",
  "key14": "2VgAkC8bzSzoHzhVn3E1Kx7xMLtrcH76BxjgVfU7PrKFmaEaYmydpxTSb1VeNjrimc33XqygSoJvvQSMHq43z83q",
  "key15": "31GxPT297mKgoJoaXxpa4rwwTyRfuqbaf3jC1zLZrJrcFeoiyQhUCyHKMN6nDDanvszbukym22waUorWdhE3LbPm",
  "key16": "amRP3ba4BEgWTENNTSeGYGVG5mPx2sZcbhUBvyJs4MhirmaaXvBcpjYSSrcBuDJVLzw8ZjNATy5EhbCCu8yFooT",
  "key17": "r2eUYNcDns9SjQeiLPpzrdFhQhvFcoseWpVrm8TfucuMDHjzFVQobr8qqkn2q2MUt2hZA3QN2ijEa4bQYyVRPHA",
  "key18": "5VrykdmMNSH64beWT4aF6s2W8LgLGnh8pyMQ2VAzMmQei2xvyJdzkN5Awv1fZwD87qiU7LZwHHWXiQkP5rcuDSW8",
  "key19": "5AYn39FPUX12b4ai8PLwDL3vx323S4XuAFeaXHJZL78i6RmqHLSs5LdBodjPMejG6GXLevjrMHqGu4tJQaCnFE7b",
  "key20": "38SAjKUcrbUsshyWKHSooLaUgHH7SzPCaopq8x9uRNkQrM8FanjC3NCoBQnwdjXAFDzqk4HY7bdHFFaLjWpbwNcH",
  "key21": "yJxYzXMyHsAKuJSYDh5E64g2EC2GdndamcQzbYiBtXXH6gjDtgmcnKen4h6xQwDYtzPmVjTVs2mYgvMgrcCxxNC",
  "key22": "4z2szgAuW2oGAQ7n5KDEN53yWaX66M7W6VGBhRRSLemAvTJdaWmnPXWqkdri7SLFeB691UhkJpLgiyJzeJZYvdkF",
  "key23": "261Yh5wdQWhTR4P2oq7vMFwmEvhQdJ2hnwnsEQMb8Ms66Jid3aa8JF8noZqmRY7w5osjyoVBja4bZhu7aC7grc1Q",
  "key24": "5QsSGQmpE4Vdj4DbFMopW1bQG7T92PKme1HVp8tPX1LK29vTFVCiGVkJJxMvwPLGsXHtFBRA6tVncMk1oxmecHGg",
  "key25": "yMKW2SP4eJrBm8A57QQyY5nrubuVHtC974vpWBwRhqioYzjpeqKeWV5K2wtXmUpaohMfMQxqgbfBAHZBtLWcjdn",
  "key26": "5gqPUoygP88Zkrfcs32KyCLWQkd6ikuPccGUUsxMcFYGbpgitaQ7Q5ya5PMWviWzg3D82wnJLSuWfnQhvqVuT8fN",
  "key27": "51D8HQcqi2eybZuyKE6oaT4W6APGxoogMGkYi44QPg32XtCV6HXQ5YJEneqJhM98VUdanqfCbJYQtCjxP18iZKdX",
  "key28": "5pnYx92udCoexk3jhNC9iJZXUtpHcBERrWGS1iyMs55dgS1KYbFX5bBvRvShkguro1H1N1jESZBdSvPMRDRqdZkQ",
  "key29": "5dRWo9MtLZcRZ7KyQ8puX62Cbd1Q1UVLU9TECPUZTnwGZ2LUgKfKU5yePJnrxKx3RoG3HjkYDWrUFtu5rsnZx7BU",
  "key30": "fyqmFNQLfJreb8bGiKDnp3nPhhRi72Mws9M8y6hgZyXJ3k7Nqy6YX2KYqfCmhjSSxdyDwnCcLt7cBxrRVVJ1FPZ",
  "key31": "3NgNih6eF5nghsm5fTLpJBeH1QpGooGq4Wrrdyt5Fndm2Q6qdgJoPMvpo7RukSW5ssXEbXLvxtAUnHSbFmYoVre6"
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
