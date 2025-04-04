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
    "5rdfXLKTtMsXGYGCjhDsJTwZ8v6e6M6t7EiHJthgFk4qYKMe3dpuvS5TvWpWj2hA6x7diXSGiGHqhFvZUuTSrYkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wseXcP3T5Tx3aCBA9425Wrfg34ebaJtw5tsHbxZ7QViSLSD3cr1mdeYELm8yKeuLRvsZ5MEykzKJMAGfw68JbXo",
  "key1": "2JBtFLB81wcsfYitkoCVY8aSLcZRTLCHH4qJb5u8Pf58iD5GVqp6anMqqdLrMsymscwbC4b7H3oWFVKz1ZrcurZJ",
  "key2": "2Ce54xgZnGyxfz3H2HjcWf2QmoLBsCSCBZfe6BrbEvCTZ5Fb7CnGwCC2Yjndzf2SmSz4mVmzDdPevWeCSQRyvbsw",
  "key3": "AiHpYNeP3xd1dEu3xawYVPh5zkqjLYgxh6uJifroED6GvWodtPkVyfX9avBZXGkhSf3u1qBbv5Qk5Wq9Hy743NH",
  "key4": "YdBZ3S7s1VuTe3VpKR9kMYShbWQfiU1CYi8e7w6hppBTPu668n2okZRM8CMFuk2jvcGrihZ5HXS7gRXcnV2VZym",
  "key5": "5oxmjLjg63CA5JFixwihs6xYaKHGYU5DJ3YCJn3BLitBSDy7chJ9uBFXw2MbnsuDVkH7W5Bc5LMW9bW6E1gCNKUd",
  "key6": "2ns2g3C1HdNBXrbumpmQDzkFRUfgZcMAUQqMrQ3Vo76vFCk1j2sd7B2TzG7nGCXhUBqDnaNudUpA2vvuRZP33iee",
  "key7": "2ZucjBgDEEmH5EE3D3cjyRH688qdkm4TvJbgrQ1NSrPJvY4PtiPbDX4bEvgAJN28FyYRSc6JqtbDDGgub7ctN981",
  "key8": "2m82JZn3zJYLHUZCQPcKJUDvfd2Sz6SNZqFjyWeWm1KMkKkxVGAp56fYTgP7KsvyFEQta4aJpKinF3rtqWrY1vaa",
  "key9": "4tHgzpvoosXfmWfRsuoX3JnKwmi5QmdJ6MnsVAMrYvTjYHNwAykPPzYg8vKwpZmSuwvC5HgFcXS2eUPaVpva5mqt",
  "key10": "3RawSP1tDTx6Tpn2LzbfMBcow6zgcrfpscjB8GWVGvFCePFXxjCx69vtKKfuNZs8Pe2SMwDsKAhjDHTUnBMbgHzz",
  "key11": "3EXGcpDhDo4qcSGwtrnUg94Q2ssmWUaoQEaxMsXeig7fFXJX4DekLLZKVkVYKL2ZZHHevDNSjbWoFCxwVPstPucz",
  "key12": "2ui4hb8KwdmeNH6wUm522p7urHFfRUNfstEfiAWNNxAEeJ7tyf13RJnea9u1fc6MaLeAxa76KSbpgCYNdqWisSsf",
  "key13": "625Ty1o23DE7nVyZ5HB461AxTgaZNapuXhGYese6ekrre97yXSgeWcrZCHfFCxq1MWUYfTtLWomJ482FSScChrRv",
  "key14": "3jTcmFcYcriQX6MUosZAWHCf9GPC98FNStsZFFYmeK9gRKjpFnpLyZfM8nEK2E2KMbL3QsffckesUaMdcnx1WmAW",
  "key15": "3p1VMJACmLhaf6dXTVQ47fwYSUwi3o58eeNjcoafU6rVce7uiZ8T6pBconfzGMonr7UaTLyQFRuz4eeXznTLbN8",
  "key16": "62NtjZkMnEQg8GAYRiGTNxBQf9aZ61K2i9NcxfTcqJeaCqA8QpXBaWWKrE7v16hvd4euqwWdQ4YB64rYpCa7LHLR",
  "key17": "3a88RbuUBRAEoVWT6D3yfubg6TYPBLya6z9YxCQgviyNhP66gzJASr73V9Pb1RYFbLKeRna5osUcaFNfhKsJDhQm",
  "key18": "BXaF2FPceVqAG7mF9t3rB9ViYUWgy29nWUXsGD6N3V7k4X3UZdhcJjSb3RL3Zx7yNYZ4QJFLDKGWexJcRRgGwv3",
  "key19": "63LQdFsjyw32E76PiACeixnkfvEvu2wR8qwxPZYSBTRnQAJTuZiD6zb1KVbdwP84g91HEfKyPqCajq3RkjTHfmzZ",
  "key20": "3zj3ZWrDuq9E4c7viUVVUa56iZmvqL2hrwTfuBk3ph7HDDJdKPpYmGFWikd6G1k3N6FgC9yjWHEr4GdBoQsDYmBj",
  "key21": "34RhELhoDav5VMpLtbdxi1zUkWAkkMBxNMW6UwSfW4bAZxKqcQXvSakhd4NsKhDrqznYzAFyatpYS5R2JdngmBRF",
  "key22": "daw93NnGJpvFAYccRWWqLM8C98L4bzej1q718LhJTPtu1Pwhrd7sNr6deZjfn2t7z5HHMC43NxuJYwUFkZndgvV",
  "key23": "5LWxTYQrs79wGemwAih8vu9J1mmNTMBT6uC8Edoa4BmCUhHnKb5atzGtpA8EBjZy3nt5rWyvoJcXhanhw6g3ZAvN",
  "key24": "41rh3Lgjb9AFufCi6VyLnCsYaKg9FaranTKiqL6oah4LjjFNLHadW2ajGErkBASpk6ZN7eTHvk2WF8p8hvjKXaLx",
  "key25": "2GVdFmzyWaF8WWcD2AE7HhzZ6hxVWi4FNEZeUywqTHfAAuRZGyPxrteNHuxC9vcJjiEzrcWCG1rFdX91VRprF23y",
  "key26": "4KnfGyceCW9ZApdYiHTUqKEZSmv3QarduekLFqB8yPVp8MwH2fcSjtAYcANrxTYRYa2jn5V72jGxfxd9iZoFoQh7",
  "key27": "5gZbEesjYtbNuXiDhcvw95ufNN11UPdkC5PirkjAjiK6qqVoRjJNCLrfWEbJxJsRowVGH7vzE5g6Wa38kPbtwLNW",
  "key28": "3Gu4xq7wbFNszxyccij9GRcJyrA6PjErUY11ZnNUYKKHxWSSCq4W2EeyuhJo3vcZaUAaDasEotSd7CvGGWtBZR5w",
  "key29": "4uQnVLQQVWgAA8VB7kEz14QSp3heqXgegjq4N1gpFmHFF2i5ehi5mgpb7uSSUYJ8NhhWvMpJhdTQ96AWRSWdcKf1",
  "key30": "34ECx2qabg3MRjR1ZQJ5Anqamiacuqa88cP4of9uQ7HM7BMKtMwP1tJxzRJEpSHvYTN7UtvinRDHz8jGnCrQ1xfM",
  "key31": "WVAcEx43PQT46HTTWkMvNysLZBwhg57LpwgafLR37MqtZL17NQ5fSG6GEt5UF94FFETwG8kVHBRpqNjg9vPm4DW"
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
