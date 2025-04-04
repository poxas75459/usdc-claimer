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
    "4quo9pXqrdwgaTLjS11YVY4mkTgT2ezUg42C5iWKKdjM6y4Vro972ZRw1b3uWuY2VudHRcvXJDvSMn9ztEzCcHiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hJ6Mn2behBKLhWpNhsECxX3WXGBo4iH6mZ1jo9LpCncMR5FjpVCT7wEp48uqLqyuD9PaiL2bt7ndzhUZKooDJcR",
  "key1": "3HmpMyVarkrE3r5o6iazvyrpxHEqmiu2JpQw2Bu2dPm3u8JmkpG5fSDEkYe8nqimvmhSv8Sb1FMowd5WtB67LsMD",
  "key2": "g3fu7tHmUxCuwBANgNmcU7uAS8qHLheLs9pcCx7KcapdVd36VHyYYrk32ZpwG4LkpgJC8WEN5L6hX9G7Qinzb4Z",
  "key3": "PCM2gzosotFDQzbE5u1aMjurw84W5Tmgq5KWykWw8sLSZj4cya7xiVsrpbbdy4CyU5iqkGbM5y3z65bH1wW3U7g",
  "key4": "Xh7CzeQBohE8GGXFR5YUiZ5her9N3ckgQzG9SDrNdVpswsjBEqeJ79T1wXnsyvX5Yvm9FtBZXT6EPGUu763bXA7",
  "key5": "3z3LsVM32fMaeUv9T777Y4cFRzGftm5mCPMn5N7A3DDUmcVLRJA8t5Judm4m89jW5LN6yuq9YzNGiE9DbRsHCJ4A",
  "key6": "4eMdjZEgqZ5maFSiNkvtaHxe7gZXh3XKXHq7RzkgXc2KYx88rV6K7cq3efGD6gT92B3sYWc3DDDNg2EonrFSVpPb",
  "key7": "3a5STFS6U8SAoPEjmsHMLQPzDCr5TYrqgPdBYhWNjVnPa3KTWUadSvVt3Nx6BmYpJazxL7kUrmjFGfo3TGvWc5rS",
  "key8": "2cqQ5ZxRSbX1de13XsAfaxdTyQbA6tsnUwkr9BEdS6YsbNHQV7yLCRToEGyTCXmxpZeDFosEoz4kWyoaJwkaeYPG",
  "key9": "EgM99VBmX6AvAuNFFDRUuaCMeDdhRQ6DHQYFGL81APe5wvR7BUFQADMKyWVHW6UaLEZACtrKuXJoJfNcuab8KjG",
  "key10": "5UdxEQ3H8vu3Chf71WmoFxeB42U1nwA5W92uvRiJrPdZiLq6ZVPEdUxKUKH98sgNxsfn1bEiBG2tyYXUZ4GARoa2",
  "key11": "2Ba1VE5SjeQYC99WS8RtKFg3gfdghaytmEPST83FeiEEH61bR1vUikRgfAwWTwZbwQFWttipYwAxa6ADdQnoxJuG",
  "key12": "2dVh8X3gvXFjPsEnVA6ybW9hUmezW4tmBVtg6ffwy1LAvvbB6jtZ61gDFoNRyUTgMyckSuaaYmGc1pxbHR9vGv9v",
  "key13": "5h6RhkfvLosVFZypfQiwNgQs8pRuXTaK4gNK7m6hxTzkCLfFiLyv8Kg1TFokLXJnSKuCrnPHgx7TP8BdxdE3QHh8",
  "key14": "5TmytNL1WB4nUyTWUnHkZdKAnB133PSrtWPiihXHGeM1EHgi8vUjxiSuYKyYuJV25bWBfpisRnztzX5onT8Bn6s3",
  "key15": "2ZhLEtZwa3sQpNuzuZPeLtBSePf38gMFqydr52ccXMxJwfH8X8fghbUG7D6stBU1wsgPnKQPJSNxUEsPFRnXaiV9",
  "key16": "5VZCAQcRPBttiKYhShLTAS5cYLTEq1grdkAcLum3SnM3dheC6L7B6YCwkRKPwtPrK2hEiVijCE5NNqQX3hZoAUsn",
  "key17": "2LKVxKdF5uTXvLX8dh19EWHDPpzeNRm8uE1TEdb9PGs1GoRwKUTLtjjYV4zSUTNmSdgqf4VvpsR9vrZfjXEn1P2M",
  "key18": "41q48PLoGVVY2U6aCd5FmyXFvgmQEHyLQPMJDAtYga88bX9fopD1E6wc7vCBv7xvAKZecq8PebQKdXY2Wbp9mEtZ",
  "key19": "2i2LEtxuXnQq7KNpQZNogP6chydEUoHVt1DBSy6sUDtiW8gUn3VwXb4JQa3tcZRnnx6nedD1TVeqCiCKe9TbdD3t",
  "key20": "486onaCZqmchgCDdd3BCxZVjjJpFgWTgJyZrCsR7u8ZsNpQrKcS4UiD7dXEy9bFb4wHrXPVT1EFGVi91Uc1Z7Umx",
  "key21": "2t71rt5PbpDd88KjST3FtCTDjUYvVQDGhmLeEgp11Rfi3h8BFC9D4iTeQeopJ3mpEygFTMsJsad1Ue7YgYGBdzKw",
  "key22": "5ADKKKCP5HTAtpznsvkS1WchrLQ6HRcm4kKpV89chLXK5M1fRK4v6kZPxkEaqBMCtim8TqVYtm7YmGAyPcexcLzn",
  "key23": "4aCeXmcL4Xj27daGapLMkCD9aDAkTJyndu5pm6xQAwe5EeRsVcXyAK6AWqVJVYvsue2jZA1Sj9a9C55cT4xwWQGQ",
  "key24": "5qo3ymw3daus3ZSFXFmo7gLB3qkNogXPJb8nBQvqYkmS9rYN5yGLYTpR67HgYMhuoDAtNzRUExnL4zCJWLqSG6rq",
  "key25": "5cCBsKZkYDqzt2KTyDTshyNtnZotpVRyeZftjLgJP6XmMAacEwmpyoTaVa1PLPvAJeV38u3ecSAYUcWccWnAsQAt",
  "key26": "3yNjiBNByFXexLGi2N6rq1CqwH4a4VXCKAAshhSH4sykQNdxwyeozGyf1Ts4SiVcFWbXGNRhhvCfr4cmjGMkUMjh",
  "key27": "bJzhCNgnR8Vc7jwoVpADRYZkHrfruYRSu1z39ANX4DTb7EfLYgGAtBxKyb6XD1tkj1oXEpeVg9vQHy9ciJ2czGe",
  "key28": "5aiaUe6YFod2XL9NEsbtSrQwtSNRT9AZHLZ9BWSSVjm2SXyxyU76Nhh3Xtziez8QsMfT94EcWd3tWgGiutC9Fm34",
  "key29": "5BtaRg81Aigo7uj353fQ8wbFXQJ6x73RAuQtdWmr7mHGBspi6onNcB2mnRSPqaDn8HTgaRDFLsWNcbu6uBsPdZMm",
  "key30": "P24gvUJuNrvuLw47bk3CNvRjftH3gycThjHNjN8UGiYwCKDgiwv5qPPxr7wyq7JAxmJgpzbAb69RhmKm7NjETv6",
  "key31": "5HUxNqQRKRDfg6Na8foN6r6ynJq2d6pXCbzS7swuuaX4EuNDw8QTBx9s6DHC3pANyLonMopnHDsnv7WPReDQ7DyZ",
  "key32": "41RXqWiSPeSidzsqwawBYpuhmBhW7qQi6KKR88A2wmNzVkcgB5CDm5THLhdWk5DQUrncZ1WsysAfa9sdGKgTb2Hi",
  "key33": "4GazudvPcpmR625NB3f4WwPqXzkF8qq9yHd2XDFyrUcjUn74guBtZsxCUFvAz2WRtyLjZfcg3iVX5wHSg2uKuDYj",
  "key34": "4zpGU3ZoHZ176m5WycD33Gj85BSPsRNwukuRziQxMokq2W5RT6wrKETSLS8fh5vze8xV4BM7SUhymRyHbkecGB4o",
  "key35": "2hJAnABLqvMdjY2k1am5QHwnNrSda8gCt9fRH9s1dUJQ7Mf354xfHn4jZ3YRGEvd2ek6ED6NK8AbWXxypLXHrchY",
  "key36": "23SjGFRSXUPutEWkd1Moc5Q9MBT5vbDaLiFMUMWFvDAmf2DTLjQ592i5HXBw5bJyPuQoq7BG8WuZmNMsesWmVfZK",
  "key37": "51KvC1r7GQADbNAUnp7R3cC6da6H9AxYLbGumrbVkx4fH9xeF43C2dg5wdTVd3gtjA99ujcgVK1ZENbebg7C4rmd",
  "key38": "2QzN4kjQ9SVmqC6PxNvfUSsKgSnhjEtW316nk6Ae5opMxy3zdUFn21DRkq9EFvPwbPwjq11jKzHV29AqhnCHt4om",
  "key39": "65hrcWCsKrFpr8DhMsGBSUhnR3i1TqyBi9JuKoRsQDxirgA4gxHdeYpGk4avdL5sNXVD3XnCq6SqqAMdQSKBojZe",
  "key40": "3S6BHP7jzR17KBTGJVxF2CXDtiTUejg5sCihGVvga2j2PKVtmfmDwxA7u11c5rn7hknxZpYc94Ja1jG11bCSP6Dj",
  "key41": "2TcryrW3baTXHwwH6bvqqy5zvwFJQy7HDXob3nfpmDTi9KAP3WsmnQxbvwM5XoYmP2trRjKTNAHDHuJbM3RDbqH2",
  "key42": "266CHctxZrLx4KVkRunLiN3j6hbu3zX6NvBSCkLk2AwtVQ3nTViBx51LNGEQHzjtwqYCDqK7SKxxgymAuFKDWo8z",
  "key43": "5siuuFLZZCgJ2egstw9bWkzrAb7tzvjNzVBq1yc3byu5g1kJdSgZYdg4sbh7DhNiVNg4mBZC8Z3REiQWwZgjZDD9",
  "key44": "2AnfAjqy1gqZr9xiMioKc5ejLrSQq2icfHa99VZfZBk4vRTCjKNYN33t3DZFJW2VAVR1YRAvudP617ddVDDFE3P2",
  "key45": "WWwPyAKhWkuSHtnUNqFi48w3RVMhmNMQB1pN3qjSKAodPoa3i9pDBJirTkyiswEZjEz5JTRvk71Ru72i3RQ3KHj",
  "key46": "SRTuUwWrpw3HkRNwyCA43eW27hwAAToLCFcPdEdGTzdqWHbWHQf4WBnh4qMxEEVF2mBQztvaV8EMyah9B1rFcfV",
  "key47": "3dgbNH6ceiFLyokxfqVnDKnomf3L2TN8QtC4tv5it3bjAbyJ8xgLwNaGGZGoYpJEbL2p2eJrwZbMnrzuqJoR5Vwo"
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
