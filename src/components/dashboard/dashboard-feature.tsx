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
    "2qMTRuWse1DVsWBDScHhtLf4tsRbH8BDWYCAmXeSZZoz6f8tX4wSpVkQBpfNwv5sxvM2e1bdzC8foC9YsLN9BX6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NtkWGix38hqrPtFgdMAAAGw67LreLPGzU5ZSYmXxq72hNi1CMo8fJSvu1wMmfE4cUQYrTWcyHeAHq3HG53zMnMc",
  "key1": "4WoZ2C4RyNnCwPpWorjSZ1rQFZe2iRgzNSB3CHsafLDLhdc2e85bN17YV2SB7G6MWMG3RxusyVzyZxYZc8mPhsui",
  "key2": "ft8gJnpEv1U7AZwqmBd63NpAB3jGQwC6hg7NmNRn7vJAQ1Jxirzo9r23Z4bu6HiWhyvJJLnja4Jqptxj9BKo8VD",
  "key3": "QfZ7YWKgVrMtfnT2Bvnhhsv5rzyqiithyiDohtTeR9QoS6AHc1AJukXEYHqhbBKtgrwk8EEE9XVwFnhtC7u9KSD",
  "key4": "5RRuKaG8ivkKdQg7MWUhoU8DXsRpRFsyMumDELhWRvGZssuCYjN85nUvJYzns1RwQKxvMk3Rrpy4d2wRzzbLAFG4",
  "key5": "2Tezdwh3GNbmhyjN5JNhechbv6ZEkTexCKb5EBBLKxjeqzHKcL5DCaQJQrEmfbj3Ejsx3YEnkvw684253qBMegDL",
  "key6": "4NBvv5A5zN5Sk4S9z1QqFAXoQKCwnrSWVwviSBXnDatBfz4noJDjGJwssBhv7tMkm64SQVV57nSp2n9fo7vR498R",
  "key7": "2NTfCmvg5GjEgwPn8EtekoyKpPvvnQYf4FAx5fSPv2Z6AFnYeDEbGeV8VnjCGvjvqB9MRS9MKsY5p7SEgFBd6qpk",
  "key8": "5kXt13NtU2qWHEbnGKZXdnz93udp3xv6VGU1UuZzej7eitaajAPVcUUfjNayUFSWLWZeAheYTaTMG1u5AzWoqeEZ",
  "key9": "4E4kSTDRnSpAmSdtksWvVUtD1Txmim8i2jLR9aVeid62BRut5t2haM7Nx9WKL6NUeg8zBFtg7eZJn18SyG4JX5Qu",
  "key10": "GzjK9wpTwFxbdZF7wUWJeF1DxrbuyUary9GuFaDH3cqT9hez9STqXfUjJZCc7hyUx4cD6S9FU3twZR9fG672PkW",
  "key11": "4aPfzj9736fMffDRMpTEzBaz6PWTX5yZZVQf4WwmBnyHzwvmLJ6SGV7mVt2LeBbrAkLTE4PoQTnNqWMbs94HQLnb",
  "key12": "3XWNAez23Vnim73QtHvPiD69mNQ7pP5QdPgJggbuqK2wY9N1DUjeDMdThajLq69Zudp8WEY4wbmN7gfDCvvu7Qp5",
  "key13": "4kyfNwnrzNQxcQ3kUFjCZoFF81Bg9ahvED32fm56ZYGY2bGYn4bXmHSVKNbGvrkgCXqHum3b6NsFJ8DC3PV9H1Ta",
  "key14": "4ZA4m7UmUT7SwBd5faU7hh4dEcNPoRZQWrWZs6xugj6n3J2t9uCLD8i2Cr8mttkCjnV9PA15pX8bxNMTydEz8B2c",
  "key15": "52gnipGx5uNAigY3gY4DwQSCLvNff34tu8zYZB5YUxDGuLNCwu2HEyeYTTYcCAZeqx643tzbMFaVsjnP4LKNfipL",
  "key16": "5L7YmcSixkWQQbTqRj7ufi2wR4eQa3XuWFNxaKZYXfFwLSVbN9kyXFHJA7Rd8pz1GwhfXzELTTGyCScBLv5e2ABc",
  "key17": "5SYT3yLCytTJ2bFHzKTL1iZurRFS1VFuP9DTvkUhxxngWK7y5RoH5JtFw5GJsUKKn7H9jy3A9bNDeYowAwDQV93d",
  "key18": "LC52WaGurydvGTN3ETM2Y9ZE4z6iKtZGnCrbjnfRCSEiHYzSeW2xo1PMAB9NJRrnNx59R5iS9ReELVSQpuhN48x",
  "key19": "5CW1Fr7X977jj1QVpB6Xd47NcTirwy9ktchuCuKCVbW2Jfo2HSwuEL8cobSP7KFQXGmGNaLmLYjNHPCDPPq7CHHU",
  "key20": "4ns8STqoyjwcMtMKXQCcEpaFLMKnge2F91Ls76ikR9aeTiTTx3vu3Tn7fb77cSSS7AJ4PdWirQefLWQJLVgpd6L5",
  "key21": "3K4JREj4n7BzW3AgqgnsqZBrcbUkqPbAqFBCu2N5muJBaWdrkvy7Mnhqv2j2HycXLFsHFmhmpNMYggtYoLeuDFcD",
  "key22": "2Hup3GSZ4Sf8FhuYjKx828CDCzGiEDNWSe9QCNzWxoyYcdmGANAAGVS6M6Y3XZQgrJC1vwHhVqeNGupKoTGyo8yF",
  "key23": "5DHC1tdQ6Xxv8p1f2ZHpAw1Z7X3qSiwEswTQaBaJ9pjYM88VnE2Jr82P8wxZMwB3JPR6GeiTfN8E8uQVqqPFBNAR",
  "key24": "qb6vvYAev5LHfvCbGeKjSoZHFQNLLP7aeXRFURJJC9WvNXKDhLudQwRWuckXViiMCwFoN58L2YqXTy1qoWPq49T",
  "key25": "2zzkFYfi1s7JwMJjEh7nEc3EbcWKzZr8eBRo7bbsp9He5UgdnLxmQHUTxxkeZjbwjeKtyrzc4PDMfh4BQmGmUxDN",
  "key26": "3knDkdYpT6BrrtomqpnuwvgfCwh57LGysXQDjHnD32cs6YRux2TR7f19EwA4PAPXLtoaPWAviXQRXX5QUV9SfZ55",
  "key27": "vHX6pHkX5yF6G66HWfwpyuWkWHoj7FxETQqUVk6dQghcq5PUwA29durSLrUodaX3AH1cTa6keVryJ1xJtdurqDw",
  "key28": "2sSNsUBPA7Wbyp7iaQ6u6nXQZdgmiRg7DybdUooMTWy8xjkJLKStmGfWoL8tqfVr3VFiXdTf5iG3fnJRxffSAET4",
  "key29": "3Hu6APDEmc2udbEBCNy9GEum9T487ijNkTUwbWcLPVSjckdZd8qTRn9QY4sJ79YBJJQeFbMuQVUvanonqRtD62uu",
  "key30": "4E4o2e86uT3s8ctLn2GctAc1do9iN8GgyKbKAK4xUWycgbxbh3MsE3tb4yFGagdofrtLEKJs3CUd6M7opixPerJK",
  "key31": "5HsPozoEzVZ2oMRxEyxXqQQt3F45q7Dhaui8ohkxMBjCDHkWPhrLW3axuBfY9UYH3FbWtJkydmztDBBNSLQncufc",
  "key32": "36BnSMYVKD6eAncXBoMuko1CcrQT2ZMMi8zvQ8qR8HAukuWSxzPvEn1pAw3n9vnqnG19yu4mn9y4HmvLSTdMcaHF",
  "key33": "gQPt3mfgacyUemB3z6XVFQKv3QExjKn68YyozBgN3ktv7YjY6FuWcBaaYiJ6YhhrPDSh6QaR5m4BQxPXB9spGjb",
  "key34": "5p57DpvPvAnNEcws8yeJGhjtTRe9hqfV5ZKYuL4RcxP9YyLi59yADwhc3wdu5ryibnf5uFXNBb8KR1hj5Zk3heWm",
  "key35": "fZ9AX5geUDDh8fQiDDVJZrhKguLWtD1S4cJqExm17HQ7TG6xk2s7NryH6NwbpKC1DfoqMD42fwBunxDJHW6GMp8",
  "key36": "5mGuiHhDUijbEZJuoFbj5JQAfTVccuMhvYyARMPeq4xRDQ8aE2N8MZtakrUTh7gyqNYVfUTdjqNcakTfcVokw4na",
  "key37": "4A4a19HTrcMwjvNcB2hFEnP5RqUWAxXiDpqFNUCxkFJ4Q4nvTwJrqbAQExeBk6MHqxN6VjTGCRtBAuqwBPN1Jrri",
  "key38": "4mQCmUCPzu4CEi3ETrZ8PPKhfriFVEJovaCNeTTE5mXHkuNM4GtBGsLRKn7MF7UMhx27wKRok39sER4rdhwTaKrD",
  "key39": "26SpEWrXuAmNAmHuoDGKCP6UxZ89doZYUUdAiPn92BujMLtb6DgzLscFvQLuW5fCVfrHcWfGb7pKfJMmM8DmeGRp",
  "key40": "34J5cgYj2NgYw9ehvvgg6EdNnTXrBHAgL6gFtvdpvZJaGeJ8BW6nJbvdNkmdBfCWBA5znztbt6fHUqv2YDwXbCuh",
  "key41": "3Qse97ZbyusARA65Eqd6aJorsAc2wduiZbSQ2oAz6vW4cQPh4d6jSEyUy7wWg5woT7r2Fg9xLkn8WhCCgSTZj1h5",
  "key42": "4USKd5aebJATt5Wqkpzxcx1jrLu3xD8isHbGs2tdgxMNxGVC77PfeZwZVndmroMQH1o393trkv6ni2jom5ApeGji",
  "key43": "2URRC1jzfqjXimfyrBLu1LJro6DoYZZcTDfV35W1xKB3SXWEmgwCfiA5Kr4Za9Cwz9N84Hh4Sdk9ipnzc56DQ8TT",
  "key44": "677zyxiiEJrnkuwLZEx5M1yWr8yUbbJsz3hrW59AjatZHuGu3n6uS9vzWCp3pJ9gQjshsR7HpnaQAvcK8F84o2fk",
  "key45": "2XxCcRmcYedb5m9jvNRAYoyddGDJdAks5e6BScpewVWKJhafcfTQ7yPvm4bVsj6A5J59QPUbKudWocBeHkFmdjZw"
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
