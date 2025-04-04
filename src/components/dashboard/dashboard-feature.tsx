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
    "3F5CNRP48FmU2Fe5moskpapEeV7XRkopewRwUSCUBqnpmxygy9J3Mf3TJt7PrDtB6BZMeVFMqWQKGAGjxdrRsTE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sp9JJHg4GRJJmR1Uvbjen9Qj6gSbcdji1BsFfMeTAXAmTazpu4MVbEzR8GQEJ5ak8GjSJGrYMSLcqkt3Q3CBhPx",
  "key1": "5ghqWBPywGVqoWCUXurxiyvdWjfgkMk8j65B8HYQJQBbUDMbX3CpiYqya2mgpH2rD3BNRGevHYZn4vMGs5e2BQna",
  "key2": "62LrRv9K7P9S7EdB8kRniR1jtdBLg81AsF3emLagUMjPkJienbYKYPXKYJJWo3Fw5e9GPtttpZCmkBJ1Li3ebLM",
  "key3": "28qw23zbLbK3ENwu3tMe6fX6rMjXySXwPC1zhNQGRJ2cCVV7Wazeq9Gd9WKw81i9odMfGkHDQJvZ5FAurGVFyBjP",
  "key4": "2ymG9hakNioVb5eu3R7meUm1iQW3Vj2Gg2dmT7PaKeBzVtGEV237GSqa7XyYFDHow1pP9HKxSMSUADf5a8fxJq6E",
  "key5": "2RB8f1GhQbDVvdZw86WeLQz1HYj4wckLKTWbGGcWc7GDXGSHHmRYWXrANLBLmLYSvMHvz9rBSor2xAPyb8w4z5sM",
  "key6": "zyKooSqCn4FLG3e7dgst2QvzjWpLRsRMYTfu9aVjixR1kaiXruMmfHJZA9Fe1t8vDZWAZ5T9tijCFDQMtFQ7J6T",
  "key7": "h2hfA8Tp9V6DCw5xKKwLxEHS1mtLzUj1RgntLpVCcifXAgLv2zp56DMRUqmYtHasak5XvnnCVKTzeE3mzvpX4Ma",
  "key8": "5g8DgJLqz5p8AfhrAHPpRFqPgNNsnce8NYczDEDaD8cktUsyxscpDTqkdxbC1SMaj8ukEBaLP1VBKk8tVCMrDVmr",
  "key9": "a2hGxDUcQ6ZUgdcwVdYH6RAeJ3FQ2NspeQuyVns14V7YTZfUn3aAmgWf27bCmKBNLhChMc5o1vN1odNF297bzDM",
  "key10": "2Ssta8KqFi1G3d5wYmgpBetnvCk6Mdp99WNdk6BtP23Trhju6YEfzoCt7bfzsXRQuAkBse5ZfUzAqYyuJCFtE3Hd",
  "key11": "3nravopHCwaJTcNaNSKjQoSWUa6nrPetfY5FzKUnSb7iqCEvVgynpbzbfjiRe9r2eVcHeEJjMcnvHWem21VDv4Fw",
  "key12": "gt6AXsv3uLQNYbVKXore2bu1nJPWrnpa1H47HtXStmMrgAon6pazktS3LcmGhcKo2pd5wnA7uNs4gzteV7ok78B",
  "key13": "Le66pzUNzRHL87SHdJDGGNTKpJVTmEULZoJrsZTdtd3GtiASV1BBvW85MKpFfHk8CqA4tN7hWziXa7YG2aFrhGT",
  "key14": "65sTSFnFcYzv7KW573UMSfss4d6777oojHhQjWGDd1UY4z2mRuTKutjnLfscXpUCQGUfNafAZbHYtMtYiZKDuyov",
  "key15": "5Qs6EkPSg3Sm56drgPHbV1WmYfmBrrZhpUiXcRxoapWaLW6x3j2W8fTaGWdQBLrYKoq4J3FoepWupaNAQoW2Ef8N",
  "key16": "3Wt9T7nfHbwgJfvFdXiLMatjWSxo7sgEzp9hftgXmSmjZDrn9RQn42buRuMcnKo2HCf6FHjYYDDsCrkzz6YXSrvz",
  "key17": "2bjsqyqmNC6QSNfnYKB6ZEo9WtNgLD3u6coFamzvqK7tmMJqBhFSsGGT3VVniDbxFrbSUbDHuzvWNu69VtjVV1id",
  "key18": "4QQyYHaARnYyc1zoUM9oKCGFRwXmCRkFtUULLBR1jCLBct7tUJDxCMmLJpJiY2QsnN6exPBUrrr15Y3e6V6MmwTQ",
  "key19": "2ADKDtQ9tbSULXpGNsHGBgzbTcstpcww2bhbRaEE8xCAi8jwkPM2YW2oLMt6CecToTKvBuiRJCxVfnDQk8mJfWQL",
  "key20": "3P76wcwJmu1VorDmkygkVUF4LDRe2JHQZhC1ox8WYy1eU9QvqZHX6Yhba6TAbYfRDNw74YSumE12hudLHiBpYmCB",
  "key21": "4xdcB51zqX1hLjuMSsf294XrZ8TAYgs7k7JwArKrZy3s34RuakFeS1tZwpwkiPMuqcaw8stkLRhwyizP5ZGN4Cmj",
  "key22": "rsdib8SrtfZVeYox3tvcHiWDMrYgJAiFxbbMWDUb21xBELfMJ14wXHtcsECuvNcSBBjUK4o5QjMkB7d1pvYQhmc",
  "key23": "3a8ddxK2ihFTUDiwN2mkD1jtTPF49hEFs4fhjNxCfDndffoRzcaTwTNDg1jefoKCxTXZwakQGkb8mPb9NTMVkWAX",
  "key24": "3LW4RqAEQvKcv5z4avB8XUGcozKY9PCtyQpxU1ZXcFF9dHj3oeuL4pwmZ7Nw9kgmAzeVLZt9MUyipaU6YWtdnMyD",
  "key25": "3QRV85HyXA1vdYNDejphWZPBgH3fxRnF3KeDHvgHJci1uC85m8CchYAZbztgHDmAn5XcqVU988L13eJS2E7QUxfU",
  "key26": "3yWTjoF3HvcjX3o5Df478GTqSfXiEmPUxQJqLUVRVfqczcmUCdqCshej1tWNBHzfh4gnvMTTfhzuHRqTaR2uveF5",
  "key27": "RMdNngN2jVihK6rK1RNyk8Ux9BC2eXdBGzdZRe8myGRpwDcdQfgzV5szgB7tUNvXuMVEp4x7T7frLx9PUXpkKfC",
  "key28": "5HK4ANttYGhe7F412V4yYaYENfGRUvD4gUhKQhZpago4StKxGKaG9brZpbzdoW3rbWomZVYCdTsYQubUvCaXMhqe",
  "key29": "5fWyBLN7fd9EKTH9cYEPYYxJU9uSdATssfn9Tydy5RWhps29xuFvW75LPAk3ZDtxuJF6BhmFSfzQkX8rZQkrwuJK",
  "key30": "37AZtUMALN7mn2zjnVECBwFNyMTTa43csdpxc9fYKbFxspC2tZ6hJxkxvaS4BViQXbG6pK1H9fcPLBiaxb9m9KBX",
  "key31": "3CvkPRgjtvSgTJ3BdNPrX11skt2ia3yyi7BZvTFSfzz96KDndh6vV7ckSHpzuQXznXMiz7gqNejPSeXHJBRgiJc6",
  "key32": "2V2w6WHNyPbSSfTLx67kWauHkUcXDNqk58eboAUsYGyPGBCxxHYg8ejSWWZJS872C7xv9pT6XLv8eccc4XVmqU9r",
  "key33": "22tuKPNkVBB7oSXisQBPgtGkFDEUFw372nfcfPtYNvMJk4dAt4fLVt8DF5pNmYDx46DHx1pvbUkK1ugufGdV8ncg",
  "key34": "A2C2yfCEdgRoB41nE8N7jUWiYBJg6G9xGHqCSY4ump66VrhHED5cyQ9wYvz8B3bruVW9GUY8BAh85MnKHffUthA",
  "key35": "7Z44LZQpsAA6SF48Ej4qUmm4Br8ZZcCRQfJ4yNZdp6FMSVyTgYn1nQugWM2s7Pbo4xnbK7Vh7Va2ZduHK4Tbhrd"
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
