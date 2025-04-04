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
    "5AAqSYnYRmeSm3wFyJom2ni8chCanaMCNvKWs8NjKUjeC7QpQQtNp6STNndpojF6rwZxhsiNo4Rixdvh2h7z6U34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f6mYrhdPnvKsnQf2GaGifZB8wD8MjZHorXjwg7n7p1c3abne71oc6GSsws5THCPqu4SUf4wvfedAFZgo8DAWAhq",
  "key1": "TZ9AWbAWwhvisyzYqBLYEBVSxe28KDB1RjTe6SHiarqUgpKecsaobATjDYWyoEMGhUbY2xNZa6ZRpZP2LqaRMs2",
  "key2": "3a8XwwDasXxaBBaNumEaCZnmM9ek6S969Z7mWPEF2akVfYXyShVMX8A93ZYb4xEvZPKEMyJJpQfbV47WMosGfNQS",
  "key3": "3GK79x6ZE4t2mSx8wFmZRuVsf6RZCABTmq7dT625oZVNxGU5aisuTUwMKuEQzmQo4TgKPA392LZJBira7aqQCDXA",
  "key4": "4YC3Fv498iBMububVtaXtHezd9QUkwunq6bnvnt1x9ecx2Yn7Ra92y6hBftxh5kccghG2px4yXeiq6mQG8WEc1x6",
  "key5": "4a4WGXQc1qPFBugbDbQYwxHF5xXqog6encxnR1kLrJmsz1sknPunwHryThDxwLq4duRjyUwvRYg4ZA4kiqeh8viq",
  "key6": "3tZxc39nWLJumRU9FP6sy1qvyF6Sbsc6MU5CnVqu2MYU1esT68cMZj5rWjfSkRoQsFK8bAnw7Y1grJN5UeTubVMN",
  "key7": "2jSNQqnLV2WPdqReVajMBp9XxfnFQ7hJWWH7XUAA8C3VBxYRt4399jb9wRdSFds6QCKSZZnNWPTrhSRaWTHByx2j",
  "key8": "4Zz93CMaZuoi2X6cNdxZYxwQFNnZmGXNvmLqsktXvcfEZhrC7xNLY5Cn9dJ5ysQTVCXTC65An4kkyXeT9fU9SfHx",
  "key9": "oDvDejmQBb3posFUsPfrBQsiRLLwnonSG3TQurBWAv3Pk6aoWSVVz8v9NpsnuWLSdGbkhtSER67RNgJPowN4CFJ",
  "key10": "64P8fyTqnoL7VirTfe6N9LQyX7ALPMdnyrLtTMbGiFoeDbHFdQUL2P8rQWc9px6kJUXnbKun7QNhGMCCp6kZmtcH",
  "key11": "2atExAnUzL6VriUMtoZx4zzNBJ51aoPLV63SxkZtBJTfkC5ChKQk5GbYf9YRE5P4YtReqtr4UQUPgiWpC5nQFPQ7",
  "key12": "4HfpNKDc6URUYEvDqEsMxiM4Ls4bQFiZNiYeRYQJuyTedzwCHoK1A1UBvGxW8QsTRHHrpoofgmNsyRKrNc1fCSYW",
  "key13": "3bc7EySGoTuj4cTXVdnm5MAh6kR4cFqpRXgKpRMHBw7VTohHLufqgsJBi5hiZ8K5iixGoa92puk6qpmZfnHtJrFW",
  "key14": "4PqwaF73J4s67pVFjxHNp5wGonkefRucH7Nn1FWcP8ArxPXQVEvSDvS85TDyQwn4zCqHLFLns6bxrKvwFAmyCSL8",
  "key15": "4thiexfLaq9HjVqq8nvxHhoAbhawkaGErYUSqXCcWbE92KndebVka33dcyTCVKS15BH3tD2CPCrSsDAfqtkZhfEg",
  "key16": "35ZesyDut79m9N2Ub8y4Mw1fppfHvfCuUyLnCf2govF6FeV42117romcLxokcQvBLJbhsq2PwGY7FUbGKiihRCkg",
  "key17": "3jb881GusRdk3oqTSuB8D66XBtvcbM3PhvZh4FFZPxnmL8pofYV8a1g1M4Z3kH1sJJGiaTMpQyeKWJx6c2Th3ckW",
  "key18": "4SDioPHvkfiQjVZnHgKqYcQ9AqkPTUEDXaVJwDMsM5BX47785iA8zUekuei79iRv4Mc3uSU7RNCZC9quzGizjwox",
  "key19": "2EoRT5UtTJ4UwDS6sMw7W9iTUEVEqw34RbeA3LX3JE4Rw1eXz3CiHBCayw87FDdPX7pYeLFjovNC88NPyofHwJoh",
  "key20": "3f9ZveyNeXRPcv4rYQpgaVfWHE88qixbMZFW7EdFLyqKzPDNcjRpa6pzT9tJe9BtWgicKqHgDRaPfAZYMXihsekG",
  "key21": "4JRusbERoUXo7YBx9tFSvQPPnspTN3bTvgGYZi9y4N7YYygeJy4DTVxHC3UFAPx8Y9dRK3ooPxSHAsg3uGFWRmqD",
  "key22": "2kV1vQ1Z3FCcbnTpvSn6bQxup5ZedCKPgoJKkvhGdoF2LZo3qP3Qywbw9vFvsNt3wHhD3teGRfhACAC5BPG1pNCx",
  "key23": "64ie8ZRkMK9AjUi5mHBtxYxFX3F4zyo5SfeQqZ4Ts1UA36nUCPUzif1R3HoA4JuiAeUmjToKLsJHTPixeuqzKZx2",
  "key24": "3vaUBA91Xrux85bTMYFRuiyr5V3LtB9xueV4fErPRXB1BU8KeZCqdBXyB3Ys7a6wbGAgVeQSUWk9HuGMxSeEaM9s",
  "key25": "uiZfpbF2xh2NFQcxPDEHkqnXkjiN77AfPNJ8intZNLVDE7uJqsMhtZMXQh1xY6SJExFHCMPooq2unvWDGN6r6nN",
  "key26": "3g3HfNTRuApFn5VFuoKjLU85x81C2vm9UegFfXQAcdwtr1AmYmoHwhsxGaMU81SGuCCQq7yaVZKEE82n7M7noaPW",
  "key27": "3NPZDKvzAST1KhGLL1uB5eSR789qatH9ecLTuE7GNLzSoQtnQ9amrMgyp22JGTP4eNHUsqQ5UDHR5zUTzPFLXQdi",
  "key28": "4pX3RVs3oQBr5G9A9xia3hAteCHNPZq78np8tJZgMcD7QPjx9kZPmvgiJnms7dQNLTZee23RrDiruGazA2MrHqTS",
  "key29": "3whLwCbrjhQm3r2G81Crczd1xdPjC8iN6Pym6HFDB5YvtTsgopbDUq5MUw779pJsji1iZoym2X9zU44r2LnLU6sA",
  "key30": "Laa37tgN8ZUuhR6EigvEVfSyyfywEBpPvqYaY2kaWwUPrPbgCf4dLHrRBmWuiYztDVH5YpDnCkWawZhJpK8YhAa",
  "key31": "EDXVSKCYWm9TudVrERtxsYgG5bZAUnzVmkYA9QXAWD5vxXKfN3W8QfsHCB542Pi7wyet7Gp9TDHaDgoc6Ht985A",
  "key32": "A2hJ9z4P3KaYgPsAJMNT5Uh1eGEz3g41Bv7AhTJFCsrQd132YSUWFtuxNZdykty93D2J2LGnvZJKF8otLzwbtYC"
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
