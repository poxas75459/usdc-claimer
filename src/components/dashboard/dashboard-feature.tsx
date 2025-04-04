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
    "cqoBaoeZXkJVkJGd1J8iggy7iXTpFCJsz7n5gkFo3VXCP1zAo8NS7656RtVGJXiaFkwNAouZnqedkJDtPtpzzvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MgVihy9GoWC58onBGecoTKP5edY2EYaFKxhT36RNQN7s2dQtkUFocWciSkMC2quThQqXz6Cwp6u9MWQzA4SpvnR",
  "key1": "2PkhkBFaV5e87tjoaYsVoxaBTV4rSqsbsfQjy2YTKvNnMAnEcvu5myriFGejap7YyEVg7vuVeEncjRpSJo8dJVk6",
  "key2": "22mAkpqQ8neqvdTRaZoWhZwtJ9espwev37bZp1UAiLQ2UbFKymQYkY1sEkB3G8GHRSNfn8HchwMJi8f3qsPxmjTu",
  "key3": "3QZNLpgzmuF3DN6MpgrrY9zhcjHnEkdFx14DY2UFdM114DByk2FYmqtozQFy9UYij5nqzkTaahhpd7epoZUr9V75",
  "key4": "3SfmyHqM5hesHDYAGG8rwRCLJeUChzEqcWAb4ahcGShRpxLT8L9wTC2w6yufKr3Fy8MDXv72caNpJCSaTtCN2Nx5",
  "key5": "4sPL6pUfoPcyuqmi8Bk1QwuFLRfekzbXUAhLVAuYXd7aBd6QNhaUQtTaDkUd5hn3RWsRK4jvbxZkszomc6cfWw5e",
  "key6": "2odX8gKv5iJ8UHNpATMGGG2a7dFHQCfMGtqshaffFn6cKFUu2djn6u8qQFqk8nLN51oJ8Ryh4Wn5ayUjZ3L3Ycse",
  "key7": "5rDeatjLnHezxe2bNzx4QuW2BCqZSCjSqb5mqCfEDGLTMB1owoyCYbLC1bKZqNyuPxhCFBRetj2coPZW6JSZ5Pd7",
  "key8": "4DHXvJeMdyzgabhpXwc6ScUsuCP8YRPvqgumTDcc4Ef4etp7hCB4ABEuqesg7mAknBNjrtapg4RDhjXMiF2NXXan",
  "key9": "4JYQBFeJ3Ji88rdY44etc5LLD6bex5MqPbWisofCkQuNf21ohNRKjxMygR3PrEdPR5aF3Ms6Nytuhke58CWqEY6N",
  "key10": "5BmiTsiK2jyaHh8feyiTczFm99L6an4bMGgPkUzbvCyEbi6pyvcacEbmYnh9H6Btyw6enzX77v4HnNSCLDaoCj5E",
  "key11": "4twSdRKdjCnH1GXoxjpMrwESbfayCtRpNikrc4EXNwWeqn28fBGsVWFhteMKtZa8KkBtuL9uMfzstz3oBftpxrPZ",
  "key12": "3LwaNtDdFVSES3FaAoXoM3Lqh7EhQHt2PhmDZnzCoxNt4wy4dzUfY3GqLTTrq3FF13QnFJ8S6yjysz29FhpNmzos",
  "key13": "25yzSpsKpcv29XwnFnqFUCqdoiPdZeyz5ufvEhCnDtdfAFJ6FdmVw5UMLu8w9N425GpuXwS4kPYzsb7AhLRbfdnj",
  "key14": "5XUD47ErU2picN4DLXpcmE1c7xhxdPNdZ7jjDegSJA8n2zsySxYhzeCJytYERuLPrv23jTmYjvK59Z5J5wSgd3xs",
  "key15": "63tJ2QLpDxt2j5BEHos6UCHW2qPcwHvn8USNKsgea6ouZhXmbFXfm5nCy4GRGxe5LB8NQcWzSNUNvbpz7kev73qT",
  "key16": "2wVVmxoNyWpXrg9rVUeqjHmgXHpHNeaoYB9a6RR2VbGS1haFv6TQWP4MUgzB5RhJSQet5TxhcHk5GNHjjLa8JrEm",
  "key17": "2jKkw2vaG1zhXntZj7S4XroEcUe8V49Ff6Hvu9G1TrrssbsDsx1nUobu3UePwiXCQMN3i2nkypcjNpG4WcodnYux",
  "key18": "29BptgK56RkpTbgTzbHkKymdZ3TsAHxrKwKKn9XzgDf5hs8Md6PkE9zx6n9HPFNCFQvn72KF6YFFF2bbeTM4ooDd",
  "key19": "2YfiTFGV4aaXgsZcuirLqiHtUfGhbzASMRnqtnZFCToD96RwSUq4rgjsYWRGCf59wM2p1ECewbepMnbXzw37eqpj",
  "key20": "2UwgpRRiCn5hPyhvq2iXciXwu74spG1okbmcqaKr9EcRD7GsFNXQjhUcBsjS4gbnme6f96fS4YroDc6AQrgCaeLe",
  "key21": "2jh1sc6cjYNJF9yUyV1ioQAcpgMp5ETvQXd9JFQuGYwpG7trRSgddoyQYbKoGJahRX4rZhhTSfTFDkfK26wumMBk",
  "key22": "2jYkEkVqmACKiVQ24o3VeaquXk7iAtqnNAbkPC3oB6vSUG2qBzzK7sZnS34aqsHUM3rNtdPWHz8Dy59P8MeWKtn3",
  "key23": "4ZUw3tnCUsCBaFmb1h4ETPmagY3NxsbnaZfyrqP5E7poKjD94qpVHa6R6iQUcj1Pg9cgCTpcuyfAmWd7eccvMbyb",
  "key24": "3kyKUkVhEHxZDaq4E1LM3QVMuLJ57XPHeYkHNJqZDNAFKzbTt6S9pBP8Z8ab3X6btj3dGcEy2CPME6YvthEJwDU7",
  "key25": "3oLTLfGLfXimN9TXj3VcXRKa5P5wE4MEBDGG269P6c8RhmQUnAZgfiLnXKodnqZDAXe1ogtLSpUM9HgwM2JyhPcu",
  "key26": "492bre8HuH6Lc9dZzJ5KyTsA54y5kpzBqDHasXpvHWthKg9EDHx5GjnjXrQ4seeP9C1UBhiFMBRAh9PnsLkBUrUS",
  "key27": "124KKRWfXYm7PB7HZNyAh3gSqoQr74nA89UpC8Mj9TY6jYc8qwmfJRF1PnuTaodBGUiqWJibuLz7jsTfiDaRDfpV",
  "key28": "3qhv5o9b1xuRvbZercRXpaAKuPC2EUpAAsqscxDctu4uHWtsymCEiGZax3GC395nQ2PMrsHPY9AvyoZJzvB1twcp",
  "key29": "RuKeFnDooYedGbw5ZH2Fwe1Bth2JqAZzyMcFrQve9aaxiuwzCcVKfivGgAp2eVgZ9ChiqNCD9VYYTsJ16vuPFjz",
  "key30": "2a4crfc4wYsp3EpEGko52Szb6aYnAf1q2jwsVjTTDvUexTafEMayYab2dwG64vE3quRXzEawNR9qfnLDXvBX6ZnC",
  "key31": "53Q9AYcsU6vpKzgfvb5SiGPEaTpd4WDgv3hHCsuEbCjUnoSvZzZbroAo8BmkwaPsjGFtJHabJHABLqrsUsfZtFoi",
  "key32": "4hfnVehQ7fGjyfG9qJ8WuGDKxZyadLVLM5EjqYgNaAmUn2LzDymcNdaSCErBoxRHHHmgv48VWG8NsxFFaHWjCZrH",
  "key33": "H54yvQ4sqaBwjjGsE5SQDVS35UrfvJr1wd8PxrBVuyvbjUC9YFuU4Auxcrx3NJ3riXwT1dN3WZD1VgsUhPvDT2U",
  "key34": "oYVndhfYADCuvdbymysUCRuRYLnAi4bhrwVnw6rNqBUPSYK5NsoQDd39JhjqRATmZiYVkowjYP3sU54XfAPCvEa",
  "key35": "2Byc1QdMWDtfbhotSz9tcNUwxL1jZhorUu7RQniiPxJD4NXdZpcts1B1h1KNHZNYNThq3n9fpYokg1kuH7TaDpD2",
  "key36": "JjgKRkNDTvhu7M4Zfg1rcJEetvadRAhfWreFDY2NjfHJVm69FsgeXURo93QuyW685XmHr6LAomiNAPoXLJqsUzH",
  "key37": "4G7mAAcmGUznPcQgDHaFqSrwg2QdPiZUifBYv7GvfkHw5hozXKEfkBKQZBUuVxi5A1jxetaV29X3C6sDmv22ZneM",
  "key38": "7vYHL3C27xcChuGPcmdvFBDRGddDBhK7Tcwmt1bcb5hXS8ZdqXQ78aPFsdNR6PU4sVuRmTCz4JB4iL48nqrgZ5V",
  "key39": "3LWNJKY8FbVwSVGERdENtEkasi8BK9usxrZgz9AL1wMgaqgp9emi1Q9RBHbsQYudqpyxqQCitWVEVGbtSvKD8EEp",
  "key40": "2Xuvp7qNUcL9VWr5Nxj6CVUF7oTSB2odXWyC3nhR2T949PoeXzRv6Cx6ohSiXr2bMu6FaLFeyQe68xQWZda1q6XE",
  "key41": "2njqfRnzLxWgPDoMo4PT2MNpsV2pFVAsB8vzh6VcMXHHkzAsinxf4oEfqwRLNzXgQE9NSNpeaSBbdeff25zmPE91",
  "key42": "qHX3UnfZWQXa3DJy2dZigePHaYusq4KE5ZdAijM6C18oSoatJNFYogXrFU69dpQhw4UcfzHm2qFuvLr55unvb94",
  "key43": "4xsTX4NvnJj7KacuSuQUdHgPjdVJVfMogNNdMVBy3ifcZWsZpdnEoRig5D2xuytqLHfG4cazKfDN9PzcozmygyeB",
  "key44": "eRxqKiZV6fbsYb8vZjDHrMs3v9ZCVpStfHRtY4XUcCdpEEGHU1xd7FFAss8dQmkVYeWdVhtsEXxXURTUnofjKKp",
  "key45": "2NLZGfo9v2zmRkgqcRirkdj12fQRKicPaemPXxne3WhBwpbFvb8SrhX2Nyx1BC3s2Vi6Bk87oLqCu8Crx45fuiKa",
  "key46": "5wTqe6RerfwYEwVmCE1jNTxE1R8MJWWkkGATSdD8yprxxRrUzuph9uhHgpha9dRdKpikAGtAvG2jNMyHdBABBjyx",
  "key47": "5cQeZKQPHqFdHhp88aqV29t4kmymNfsJni2gMjZ57ffyoQ4MDUF9nKkWD9GHSnG63HKjrLH2VNYYCmP5VXqMYT5K",
  "key48": "59ACq5GVXBFR3mH6wMPWAbE2gzWQ6rxkeaoEvZsBvae5eKrXqjkDdoWEgaLgxy4vb4319xUtEGWJLk2qzZ47PMm2"
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
