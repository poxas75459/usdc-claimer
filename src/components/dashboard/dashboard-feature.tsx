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
    "3n5gSKwou9znsdp1KxjCR8X1EB6izhjXyycuRXhonfBgQdK95kBZHwBGHxyooxGQaQGjXrC3hyJzHaAkoDabuYEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tPeupg3HtYUqyKHJ9emiq9b87rRdn6z2qVfKEJZwASMpvf1DiJJFzEQqtQVK2vMhENm84F5QNgoM8v8e2jVupuD",
  "key1": "3ZYBYa6jsmDBReR1QSUn2mceAg44d9spVbb7dDu7qt51jKxLDeiP9qAmaDZf9YZNWd299z4R4Nrh2ytQJDnvo3nJ",
  "key2": "2fb9RQNDBrcUFWSNaes9iiMrcswpRcpcrqLAn2xFmTde1xs2iunKyDa5621zvX7NTaVNSinJeyo2SuuG49b5KCjW",
  "key3": "toB3jaUHqGUBXPWbetQt6uTbCbMmsGh5W1SJ1fhrJUYdxgHSHQW6i5BbPHHprXecWYmeon1bYePgFZSrq7Kq36E",
  "key4": "bManNfifx25giXG23RNi2seofBuEid1jUWuiKh9RTeawj8tF1vwVcGSAJPT1ebXWe4KZKzcZMb4fbSUnQKbNLXZ",
  "key5": "2ibrwCmExdv3MWyevPPiFdXVxmvaHjoJAj3zdrWpQPQsK9sQQ63QCkL3BYp7EDdq3bxGq5eKZSL1petdKg5Fn8e",
  "key6": "3xxu5yPXAYvLL2Dk4AErBAJvntrE6CwzKLmy3wk24qNtc2NaMShjawYTRSYSS7YKh3LRsENZejUFQzhziasZxKej",
  "key7": "5cLsaRi2tWamfngo176ijb2oSMhS9caxVFZVjVmZomMTCf5esRt1pZ2bdaHGu878FYGCjzwXosdDsffUreFHK9Nb",
  "key8": "4uuRkN4v6MZVQHo5Fmt9MD4s7eqzssEuR8UjavbEYbkGvdv14yoAjw9xby97xJes2E5jy2rG3UvUn5oZeq1sLRjC",
  "key9": "oALsxSMaKJrzCUCNhqMLMcRVhAXqinWvzbjXr6tmau7N64qHMzCe4ajBWWW8MGZmV9QB7tSD88bxgynNgLiNTwD",
  "key10": "5hQSHTZzi4PpAuRKkJeiA419LGKqnVTUgRC88oH6WRYiL4a2HfU1psLdV5eQoT2qVPXMSWtSx38tR7ebqBy3DrA9",
  "key11": "Ngq7qTAMpsK6DRhF5MgqCQS6c9XqB1NjgJTnjia3nZijdUPj3E8TJEkUG9dm5jXzowKsQEKkPQT6iHvLWxBdTHz",
  "key12": "4T4NeFET8Gvk5683gnJUyhha5ZmpsFnZ1MTpypShV9iCvWmMcgmifxEkDXckKXsw8s94NHkDyMoWgQDNt3YRZnLv",
  "key13": "3HDG5VtwYuxcapMazE2aqDybn8idnD1RiQCZNVcFoKaEd3ikZpmaAVXLQTkzmnkY7bpEmVqSANnUxqxJ3rTLyMdk",
  "key14": "3kUAXuBbz2WsBDPQfzumvC7xyTEpsnu69iW8ABi6zsrZue8YKwCTUjQGFtFNhq91VcmkFHdejDkKMtz2bvCr8mkv",
  "key15": "knRMEpPf1DkcRphAwworxCwiQmjdDEMaZHoefjseT7X45aZMMWkApBaLcaEYN6neeqKTiTJK3848Q5DYxWxwHbn",
  "key16": "5iABHrnmx8Ccaiyj2ZZUpJKPDkShp4KweuqKiVeDoND6vSB3MTVSY7NtCnPCXD9K9N5HJgs5PHAyEv1hXcUZ3awC",
  "key17": "4tyi8Car3CaTRqJzxdDbCbq2BaCPnU3dx5mzmEcusvKr22KpAn9HzsqFGoED4zh5RETBDKJQCE1SgwH7Ysctzz1T",
  "key18": "5R4Va7edg5PPNHW4uHJTizncL4zeRdZGXS39L4ANo3thyBkvUARBkk8XdrVby1PWGaMrYwYB3aH8owmvgRbTDBbr",
  "key19": "2Ef2bwMiVMX9K9gycswe1Q9DtZKFXsY9M1uKxyCviQjTJw5D9vEmS52gGrFrbDYw8d32C16PLcwRzBC347CqZFh2",
  "key20": "4qHhYHA6TwnBLbAgtZKxinpcCP9UpapzTD6VDp9bNvKRHu9GgfzNtuMfQjznihmpgLzZWBHU3K16uWBj56SZemnq",
  "key21": "3mRoAmrfG4KTmTiiz1qxPMggCUEh97jADP1gbN2nu7qE6FC356HNLGiE1HNUe6wj95Jh3ijFEct3ZJcsGQkZEKPt",
  "key22": "5QmadmLDaf84oprd8EkqjSYW1XWtJPJDusv6JELcJaauFMB4iB42eAFnXLMDoJ4seA5DzN7wcwhEXKLkGug1RW45",
  "key23": "5VF8PUCkYM2cPQvnBHmqwkZhXTyPhuDJ3jMfSxfSXhvCE1besTNCqK9BHaick7cWFcnPsQwxC2L8PbZpr9r4namJ",
  "key24": "3xXk6CRFDiNkGTjGZN4dE1sA7HbGCMYxBWGpKdJkvfiM64qSutctBc7BZek7jHK1nAzUpd8fTft148Z9Ua4GwUPz",
  "key25": "5CDnDUqMyMhan7nRCGwfZZaVKwGNt6ZjqUszQENNu8aptHm6kD2cC3yNht13KZd5P2tRGKF2ifommVd1beZsincy",
  "key26": "2TM9yvF6rKj1woV6EuNMd2Etioi1uxyPsVjjpctpcWC4oYLFT1Dx9Zr2oTUGiqmZRbgYKfQQTk3CpGYMtuw8F12i",
  "key27": "2F8h3obDjccYo4kb7gyoGsyX2tqat7DzUACs4pTfq3BCZCkJACajMrme4PfsxfHLiNxm5DWbEaXhYV9RAfRGLYLR",
  "key28": "4gFNBZVNyWGPKtQc1rigfxUm7aENheK1gWdqGS8o4n3HCR5P4B6ySgS9yrZEukDXDamjhJEzNPWPm6zRUnozWzZx",
  "key29": "T7cPc5t2JpLmCLkEB7Stiacmxkw1HV6DARqerHSMLnekFR9c77QAAGEUpeU5ShsJBLM8EjdktwE5UDbBsBDAg7S",
  "key30": "4P3yTHhg9WJoZhstwWCaxGcg3bcuz5u64y7H4Z4muNkenLUUQ3tqiYKdDvRLA6Jpvku5QMX6ECPgzwxNegUQc5LN",
  "key31": "5DS4Q9g5yxTC2hVGGwucM4JzkVygyihcDmJnAXNQgiR6rPbLkmDvtCBH3hJRT2ymnVxmWuB2idsrPk59w3dSn3uY",
  "key32": "612XE8zJQyuwzyDERP9qSFW7WHvSwBJEvrB4b4Ggi9KMgBKu8aQSm5Q2GusLKSSngfSia78t2hT8h4178udXeeMn",
  "key33": "2A6FCe5T8RyiEgVdjR39CQ7SkUoUqQfSbJeKL1JmdCj5JuwmDX5WULCyaGhzfFAJ3dx3S7nfRmjYNxbB7nxqKVUJ",
  "key34": "233fe3Qkr85Ak9VpxyMyaWd6tjRHRuQnkfoGXmBCXhdPUj6aEny6dX4HvCwD73U51HsJS1FVqYNzTcE13fG4rz3D",
  "key35": "3HGnKrFTYbnBNvUGeeKJdkw7jBDMmh4KTQjDcfwP9BnYDyXrJd468B28E5cfFgctqCQDSx9SCdkZ6HwebaCkmMf4",
  "key36": "BaHSYbdPFxkoh1jHYwn1n5b4fFvdEDvcwam8p9R6EbPAnAtZmiPHtapE8YevNzx5QzJy63sJk5HeA3LZmqe8Gad",
  "key37": "3fsUFSLW5WpfNADDZPRC8kEHaMPj5pzHCETJTDYMkrMkGshDcPDcDm8jgRqsNmasu2QaP4mJdzGiDL14FKmLjYRH",
  "key38": "3bQWrrbM9WsgE4zYBbbdpFgp2SxjdxCf36NCCMpMxmyWTQncPYsmdhtU56xcHucob7jGq1BS3ab5TqoXE3gQ3qdg",
  "key39": "5DeGXbWsbG98u2SQkWKuxw3KTWXieDnKLp7wnGzcvHxcYzCLTZEFzXBD6wxK8FYJzMjGbHZCiznrnprD9fzceaqz",
  "key40": "5qCHxT7v1xghKT6b2Xi1gdVKPad69MjswLq65eZjQJ5k4Gh4fv7VtsrW8TtpmsrgvHQuB9ZrK9S45WJJBr3zMThi",
  "key41": "YLCFWSBch9T4fGy1HKF4ohVdyuNhBgZd9x1up62v4bz6nfuZPCtUUG1BC9ELNFJERQBDojz3W7h9APJMqS4D6ef",
  "key42": "2YU6dYHjPg4cdSKi6khFPoSeS3r4JxD6WQ5RbzzSbMwfhNZkPcaVr3NpKPyYGRcEuSyyNRaKfpCccLNebNwCAjTJ",
  "key43": "3Jh8eg7U1DFAQZTVhUon4x9mqkNQNxMmgLHjNw6pvEejDxZvViEUStmYS8AYr2VRV7d1k2XxtnYsX19RFJQzDwh9",
  "key44": "5HSC7ZCG2WjZNMwfvuTuEAftafRUrqRxdkjkyMapJHSTfSjwvdEKupRryzvMkf4cv7SDVzXW5WZHCnJjqGSykgcL",
  "key45": "jsyjAtDG9qiYw7DsBVpei59szKezbwbyHD7rHWsrY9CndzYcDS6dhgNBTEW3wA9CHxmifFCfsEZdJSa1U8oMJq3",
  "key46": "59zVLrYHM1CBRwGYFmWp6Zq7ydUvRovoNVAtVi2P5EJ8ERojfYB5UMLTiqaN2Wapu79nDbCPqFC5MbZU5zwTdQB9",
  "key47": "32KYDEbxoqpLhzaAfXuvpZkEdekXr3BE3oFHAiNQdbL1VZD85T41tG5q6NA4FwmNjDHxhByDzsExPd5kStSP59mr",
  "key48": "vosDbtVVW6mRFsoqCqSXuEVBvyKe3XytGriH58Kxquv35dAqT4AgUZpaVcBDCRzZxqjQXrEG6TpMfPczQwAfpS2"
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
