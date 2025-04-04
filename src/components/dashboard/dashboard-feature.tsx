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
    "5M9Mm5qMAWLo3a2hfSVfjj7oDYp6toiCYrf9oLkGBdGbMsmDH1wRx3QykaxzqXhr52HdVvdNuvXkzWgiXFw655NZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m3qgnr9ZtBkTUWVcpkgwYWfJZfroPxUh8ipkLC8RvAcUjqkxu3Md1JaNNB7cPFbiAZvii1sbj1GNrnozFJxvap2",
  "key1": "2UYdXHGoCv4fgmBosKy7kbC4mPVsxWVqhRer5x4L5m16v8dLwF2KzuMPoQG77ptKhxTpJXR2cvgDJPHRe7rtwLsc",
  "key2": "4vw5fmj1B8J8ReYvsWMKor6s8MLtoXGxKC9op5kouxX1Gvsbk9Fq2imkEUPRqApjHBbKtAQXxKkGCvMzJnJXrgvi",
  "key3": "5kL7QHCHdFEv7RoTiknEKKA2gKbk6WwsFS1UrxwNXRN27kgVnYPqJPmwbem3ziXHBDTdoqrSCXh4MUSXsBQiU3Jb",
  "key4": "4aExnM3ZDc3f6dWE8DWSB3yxyoqi4fswGtN1LbtTfo7JM3Npe7jY9GEhmUN8c2vXSpkHTKNmiDu8gctL3aQ1aiGt",
  "key5": "CGpQXzzfDtPxXxy1rRk23xLTRyXbnmcVUh8q7VDyNt2VG6K6SX47FtV64K7Upg6L8t5tPQzeofPLEHyWEKkiib6",
  "key6": "5KjpZ2tCwRg4mitqYv3Ai53hP65oJZXMqWHwG9QwQzg1YMcRVgHFUzBYWPH6j2geBBTjUDzrRXTtm9HdvuxK5BHP",
  "key7": "4xm3GVeTVoxvGjETnfy1TcxfBnLXiKUJu4KHhstC1xSaDBtpTgcJkA2Jwtqm9g4MtgsdUMdjvannU7i1ctSvAwqD",
  "key8": "53HxUfwbdxzqwwAMhTuvBiVCg4JfzUKYMxXZ6EZYqLLi6dvG7ai5gbcHia2NuxocSgfMAn2fz2dUNPoMVDHcn249",
  "key9": "5yW6K6RvWQG9FWKBuEs9sqXN9TfFJGcF3Ro3uksC7r44widBcJAnotnFJMTq6QiYwrUnM6yKCXgdZe3KYCcLmtW5",
  "key10": "42hxR3uBXroF3fo1xXQ5owCUF2HbYFMLyNC45eGZVfaffwCaiwW2ikhN5YjQ9P6TFyHQdEyx2eXvuXHxahqwp74D",
  "key11": "WsHgZa4m4VWb9Gjf2Vd6G6J8SuUK51LPGVP4yBLUx2xta5eXjtLRjKJmaCfYEUpBZB1JPkQ8Rnirmz2UQQV1mN5",
  "key12": "KYitN8agEmcEFQdc8fNeGhfevxwqpzC4Jyvqf9Bya3b6dfe1z4Yk65GRzNrAs4dBb3ohpUxYpRJ2X1CVWNj76cJ",
  "key13": "5YRa4JjeqNkAeNjzi7cuYAmhjXcM7FX81N9rvKkq8UJsyDQ4qmYmcsmQLasbPnfsCd2uoKrzw4LbUFot6SNnycy6",
  "key14": "5PrzWXd9qy87vad9bXcnshzDqPyiYeP2BUJB51bFhx2man1Mofv7kfZsWusFpQgsrz3JwDCZzjtAGkA7FNiJaXmF",
  "key15": "dhpuzmGiBnDJAPiXMrArFCppo9jEGYxE1mvHeH49cRLxqDyr1MRCmBYbJh5cbjQbWdyYPC1tzPzfMmkUR76DX6p",
  "key16": "3o3RusBzZEMaxPXJ15Fk7t9o5zvkEqCvLnZeeD6sFitC9iBeabbSVeCfUMypWG4rTTR1zau4k4WxBjafKLcWjuvn",
  "key17": "3nxk2bJx3T8mAToDPasr8KThSoJua8XfCherDDBvtTdJe6mfUbk5QppL3RNGfLtDAT83WXC9UnbmZQzWsGhHig35",
  "key18": "4AxyWuyL5SQCgyb541Lzy1x1Rf9uNp9xqXhA2X4rUhTAA3CThzjhDtsyGnqWEgMFBj4wFyNhZeHBnPfdWuFtmzjw",
  "key19": "xdNmWzuDEkMk6QoeiLH5noRTpyudKVCE7URFvfz9MvuqzCvXcy4ntnnup8sVpidATgyuhpztksKrCxsE7yjeki2",
  "key20": "2fHAwft1Yvm6qRYgkke6mPACfB3dJrgUEMoFGmJu35g8oYDafhC3cvFQMqwkVb3b1QSwTkTHKdPLur7j2htgojda",
  "key21": "4eMoaChfNv4K5hht7bqUeVa2ZmMmfK71rw84rYnh1EAftdXBcaUHrg6GVyTaFRxrGq33B7Ej2xJ1MmKD8RQbMsHe",
  "key22": "xKpW57d3pYzGDcJrZxC9FfxvWfXkouHrrKn1inPG6cLiTA4KbRoHUaLw58bKLpqUUT2LqYUxRCUH7T4JAfTFvij",
  "key23": "4JX7ay5uByjCA2awZgen4VCm6xQTZJdXLVsvQLaWn3oxUKDTSefJvZSL9rtJVLULy6DgTV3EwWMQnLDb4uqNEX9m",
  "key24": "DYcGgS6tn4siy2zWtFVpkc48tWwv6oXi41uGFQX3HSdQsrPCg7p7knT1R3cn2CFhwK71eH6mhp37oEtoyYuHe4a",
  "key25": "2uqdxbkL8Lngkx9wS69ioRK8qengZUwb4WdHV4vEKMjqwN7qNeNLfw5Y5ciF7cwYTq4acripoKp2DoH8t7RoTHJW"
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
