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
    "5BsJbSNjfaGNknszvXuYJagvsW9hNLj4AKRQmG7uPq5DW7pEj3UyQmkCKi2QNEHh3G1ZpkkreBWqQXkzx5rvHFMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B6fWtQyjCpaMaw4KHpUL3nzaaD8iz962wpkaNv1EndmmCA9Gei2hw8AQNUgaTmgGUdLzjNpBRqQCf8WEk6oxuYg",
  "key1": "3gHwEbB1VAeGAWojUm5dGvv4hmL8LdekrP74xwqrffajDpinGwbMawfRtyoWRu18LQt7rFmFzbitMwseQk6qgGmk",
  "key2": "2FcUTheyBjkXFCM82RD9139VJX9rgAEsNMyR1X9WyQ1ti4gXCpa79AaVKqLWUvUusDyVF6cNqj7qgNbGvde1Cc1T",
  "key3": "Xa6CkQNcmeBNEP5gB1iTXh5rtf4rxVEusxqnNCYE9cBxFuW2oed4UqykviVR84m1bLB3YJ6us4WDD8sBC1AvDDK",
  "key4": "2qoDV6VNiF9uGNkt9DSvME6ePbYyivWQM5jdeY5SJaFK3APZi91DNa4UaC6cbQpsXm2FG7ga3e4ugqtAv85Qt9Lz",
  "key5": "2Zopbp2226jHUkroYzW2mXCN5Wdsxmnz7hyDGJDPpBxEqzi13atZoyrPYhjhD3yXofZpJS8AKScAGu3cmsb8fHum",
  "key6": "3ziiduikLe5r3xLfF7nZjYtPjg6A9PQmZRqKFekWYmkLi7xWPTZs23VZKWkN1T5Dx3PSiSfeFkDA7Ji34R4Z15TV",
  "key7": "2zfPLYaBAoYvtJwZjYY4vXT7koNs2cVpBCtYqxfctksKvQG7iV3C2K2ADrNNDH9LcMXTHDMr91KDJHGZzrQKRXK9",
  "key8": "5EYQMMKfrj5WmYkuZCqnZ8vuCxSXsC1Qt4rjoHtaYCfeh46Ys24egn7y9TsZZW23W7uLwXk7QP5cSQxgTnQocqpd",
  "key9": "dWmKfAtg19uieHuZvwszTygYHZdYgEHy7bAuVAifqtDq1Ta5DmgAizFGMoCbSSLVepD7bNM8UnNAJtsudSbvpxX",
  "key10": "J1HsCY2Aoq7dShuTmmTEuCmBKNDqBoCFpMM3jgmFhsJZ7u1BeThsVUScejvnzifR9E81MjeEDuyVQVJHbvt2GNw",
  "key11": "2EG2QSvDJZPyM8RnpvhhZ3ELra7AURxsyuMyi7kqxhNPFVoQgUZy7MKt15cSedEhKb3tkNmJEoi9wQVwqZ8qmiTz",
  "key12": "2jaxXigDYNXLRsPPLfZ7nMoVnMX9gYrgYJDXnrvVN7bkyYtxYFvpPL4gyghQEXPYN28kSgjFc9jPwcQG2rKhkDtH",
  "key13": "3JHFZTRGWNVXvMj6KsS2vMuvDbHRdPk5Voo2PiPMGK7XmXj1ePpxP7hsKLRUMjJiMYXYx3LKaQW3V2dqo33zwJJo",
  "key14": "34uU5peH1ZENKL13z9fDd9uLM6MrtbYSe8LwYpxonAfyo8ftMXxcxnip577ofFYUvVfSwMQ2PNzfrtGQhrivJ5kv",
  "key15": "4MCwpfRLmCKDps5DAkWDRrhtNqSkkaiWiwJ8zdYGquMjb2eTfj8ncW8oLy9P67nGZBccXGnjj4aexEi1rS8fkV2H",
  "key16": "4Dv6rM9WZNCDeMr93gr2LF2NhTJAK6Azw7KVsUHZXg2B2FVc1KoD3eT3gHDHLWgVMn81cEjqacG5z6TM5WXUm3z6",
  "key17": "3ETc5tgDYkVJb1gdZwbzR38nAE6wcsoJY3XkXtvEkiRtLRnpiTmTh92PgWwAn6XiQstZ33fPVTQRezH8zzdhzNgN",
  "key18": "XKJSRuScygEAwPVU8428w8i1DEYXMTpNXCXbqUavN1uHmWwogV59LgXvU63FMraZzX82TEcn1MkoQv5RLfAw8RJ",
  "key19": "3RvNKUqx86LMs25dB9w1GbPoM7qn77Nh8E2mP8tqAodYFrht8PTgZCwL9nzMTvuF6mRJ28s6PkR4hudR8SGuvvHg",
  "key20": "2LGQ935CKCdP6tBkCdkztYbTh6Qw6JYnzk3cPFi49v6jYnBPCqnNcGLh28uko4NAULf5W1ZsptuYL6QpPBNFEDzs",
  "key21": "3qHN7qXJK7LgmenS6nAdDYT4xyHcGSi1D5uzEHQmHbmhX1qhif8scTYfgd31jiPYAbNaJKz5HyJqBrCGnqk4m1gA",
  "key22": "29j8C5b8dvWMmDHfhVsMJHDB5rphmAqrsFGRLtA8VUceJRyZxWD97R1yjc368JwaoFKHYHJYPeejeamEYCKpWiKz",
  "key23": "55ic3tzs55jTJREXiCDiDfLauE5p758hRekykYKEc3G8uEeDHEELJhxSLF8pHK6nf1SAwaL4BywKwo2rEuLS2FwS",
  "key24": "NitPN8vqBQDVXFt36QDCyfYFj6BSXEu4PXixjt3cqA1XmzkDfG8cVGVa1zbAVHYFihicz26iPnUfzpYispNVf38",
  "key25": "5Z9LuKD23pzBaWfZXqLkZGUdBjm5iiXoTLEBerRrAQox87tJfvBkEo19XqFqMyz5LjnLfVdC5qUej9CHLi4AMzSp",
  "key26": "2MPQFsqQ3jKhtzprgHttyrQwNqnXhymkXG2XHov3iqLtMmgEaDnqaNwxyRRZRVNeCBXv8qi99izyw5WiszA4ftN2",
  "key27": "gGx3RjjkNWoVVbQoaehKyfyF5jSAnW68ujboHRgV4RPnfoJ5pgT7nLgxwTZjuaSArEhEg5bW2Wkwh7oPNwbunpA",
  "key28": "4umac12cCCD63niScdG9odRjvJUBSswqErJnwmmgK4U358rdRPa4kEUi9pT2DqZndAoWmAqjSrg4uWZ4muicivH7",
  "key29": "4VofVf3xEaj4hqdNrpyUCCst5Mr3bnxmgB7wCJfWx5cB75gykf1UMatd3ait44GTGpUPZGG7gq3xPeFfng8vi14M",
  "key30": "34ft2zG4UF8NHWHQtomvus4t7ecLTKLoKPGeNg7gR5WAEjSrjyjkKFQRb9vEJPyGqk72jX2KU8KoJMYdTDhfH2rH",
  "key31": "RD3zbBie6vP4xsv4wSY72BbikBv9ubtp1ttMA2SuKSG53sUUdKu7Aq5i6RxdoTkvrxz6EuCuZtfZMrP49kmB6VU",
  "key32": "26PKK2hozqACdT4z8JPRViB2BPAXKwMzpPAnsXhLBPLPDV6qo11wafZLVC5zHP4hjwc55oXhrLSLGUqB5Jn8QFDo"
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
