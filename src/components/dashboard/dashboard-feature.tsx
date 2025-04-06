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
    "36H1xCiZg9oKaCMEgEG1huVXsgjTuRx9NHSTSkzYU7E6F7LTxALCEXuc33njdXRg8ayUhfh8HB7qCDW83HmTCDHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54LLarXzvPR9id6HsKLjRAtoceiSxkf21WzDhE8TRjK4aeZXrrBhwutjpwQm9tviGP98enHDWHXYGrKcRQFRR9UY",
  "key1": "4epQD2Jce8pqVxXfBr3Fw9GvnFfA2Uc586r5KfGXKUWmGN5X2viQde3ayaYZqPuyxgCWtJZSfi1FgcWB5FiX4ByD",
  "key2": "WaJYDTeBbXjfiGVcDEuudwnABTvK3KTYpGuB9MXJvjCe6Em9E9KbDjZucYFYaC9obMhLJtLV7MfmXgkH6ccPAvS",
  "key3": "3vqiRxWTSbKApFXxqMoMQP6wiWQiz7Pw4tsJrBTpsN4kA6eAjxY4ZRhBbUmsJX35HzmLG4wKtuR5FfQSbUSixHag",
  "key4": "3QTvATVWG9NjAJsuWFHfifTamDcGRkRkpRt8rkacjgeAtYrMDx5rg69GgF4FWRmzCyLA2JhDB9UizjpxYS8LaiNz",
  "key5": "338TnSn6fUexxJqotj43rhSmcmnksKsUvaeqMD5xRVN7hiF6MyQqn16o6t4gKhDFyg5KKgvjBiashuLthf57ngJ5",
  "key6": "5v2GRrsem3dYBS2u4Umb4oSrhoCEGiv4ePLo1erpwbmR2vkdd7nH4jYk71ooNtXNq8Exfoab2RBwzjo575idxE6N",
  "key7": "5QTrUz3JFmRysAEvKsd6p9QLCPo9dny5St1h9ihPgANTBtd22jQ8CyGVzeiZKdWQ3n7HVy3gx4NM4MvDwG6U9fqn",
  "key8": "41Urqh11x5LEKGgvkV6STeoRVLcGAahhaGWiSN5owpUj955xPihkBAvjkti1H6yBN6aJYHFiATjg17fX8MEAo3kE",
  "key9": "28u9dwF1vWSSxMVeNnaGDdNpAdyJ5PAaJTokMyucSL8VDx9vHDjBbV4bTPYcHi41ni7qnHHPm9Rr4Pxg4dywMtFA",
  "key10": "3f1H4w29oDBVFqUEfgNzkgMshWvZTC47FMehpYfKKkfVjLi5jxnz8SHjYWG4FHZnKaQPDTr6aJieBf9rKFGBJriu",
  "key11": "558ihN2Wdf12Twdwwby6fKJPak7DvK9D6MdkxH2hX5HwwgJj4eD6Ev56W7i7dFWNgZso9G1ptAqxgcYcK8Nsmzjo",
  "key12": "4W7pxLUwGDkMrhLHfeqPFmKSsQCrsWySDqXFVn2pBSchVG6Tg9ckgpCKsStoUVjBMJL3TZnU8LGURc5kghHW2JDA",
  "key13": "3Q8GfNFmZyWPRcrCadJmZDQReGj1jm77nrgPhFtduYT2JamNrHfbGs7Q3BQWFVo5hkrXVmzNgLuuBxD3g3Fsud5d",
  "key14": "3jQC9ejjivtdMPYSYE4prRNAt45gEJKy8f9xKwKByUQWUTiByuniFhR6kNYYmML49cHTSCUpcixFqQFL9gQozm86",
  "key15": "3Bevas9JarKxXoNv6RuSX4z3WTwczdnuAD8zGUShmFfHSNCQzc3MFr9j2GVPReBTUHjxUUP7t8torSjvtSnWrAih",
  "key16": "JzGtEVrC9KaEnnuWDs1tWu6TZ8iMVLYpYiUCrkw2NhHzzyPNSLxxYho12PAgpVfV5kNc5kGwc2uLwn62BfKwpXj",
  "key17": "2PnGyNdQGEjHSpfJhAhg6qyP7j1ys6vrv2u8hbmyPgk497uuPQmPRkuVr2CwTXrqL46PiC5fNmpbachwNYJM1CMd",
  "key18": "5gJc4Hig2a86F3yc9nXSCttbLhBZVji1QFTTi36T8zHYL4fyPStvSishXJaGCFhxesGdcDZV9vTiCvomSQhbhLUT",
  "key19": "27bKVnL1QCrNmap559526jRaybTwfY6nJK3QtEBj1WEMyi3ApSmXfJvEQD1GXZfR8HMJZiV3e94ZoLp8BP9qGfYV",
  "key20": "4CH2gwNQWm47HueYgx551dELogVEZ7pgYTqraTNxAJim8eDHZ6W77reAWvR9WoaUZgvihuN8icHgHiHWSnmMXrY5",
  "key21": "5PiNoEr9Fn4J1rPq43bpmGTA2EByEqYgFPSYdoe6dGWqW9sWq4x8oL48js98CJXF1J2yu4BacvDENdB1Y36WwEjM",
  "key22": "HpWzyNBAQEhtLMnj32iMtGidJHBPhgopywXDGfd6sMzYANWxTtBw2YZ7BJzCeVtkbQyKaLvkB1NpJzRVvjCSSsm",
  "key23": "53k2XCNo8pn4v9tSt4wCkdwZRU2VYXB81CeEkbsQWWbMhMETHiot987v1sZKU99NCeWUyAwhUsJu8deqqnxp1nhp",
  "key24": "2fgTT7qwuq9B8KfpPvrrAPfn9ysebdjgkz2RuxEatU5f2hatV3kN8o9DG5ZNrfz8xW8NyPhNsvXDpYn8r3kb1K73",
  "key25": "4G4xB6K9qASz7rMVMi7nmqCHuwusHm7TGoBjWMbkCZDbHbTmCEDthZPMQ3rgrkUHG2dcQhPc6ovg3tgztgGPQqon",
  "key26": "5DVZ6ELzHcyYsWwKEPWj3NBKCSykLsnum43oejfZa5xM6GjASqiDD1uxxweAZ5ZS7WNFvNLX3Xu4ZejC1S4ZPcgg",
  "key27": "MtpaxuWSCjwpgZVUCh7SvsxgTzaKMp96Jx4pHdFLUirRpZpz3wTpXU6NvvoPmxaooG7dTR7LPJJisRtEC2jHL5c",
  "key28": "73mvZ5ZewT9i42P7dm7GuMmBiV5o3YKwFNzR2KGE7RF8HyFwVXksNGeFGHaxZrBGA13D2REbRXLVFCjapqQf5pF",
  "key29": "nFKgVxGX3eFufWRsA37T4tFBycUiJr21AAZqAkJKZXFVpxKyZ9xGDQWqR3MCrMsyaVrB4X1dkUTrSWHrk9r8ua6",
  "key30": "4BXVNaey8En5yygFtwqJf4p9H1uoTMDa6QDvzRMh1TSLPZh5X9Hf3L2UhwKg9p6q5f7TKG3oaaKXf7h3rQzJ2QXy",
  "key31": "MvB7fvb2GEMv3GsWN1PAhRnonUpcnBqN9RNv532MXzUubMUFjv6FbJe6BveudxjEL9VP5bNUo8SCQcVcBuU2jxG",
  "key32": "2ZvinwVYr7BT85STPNxbKTzrwtEzfkNzrF4gjDGJFAUa5v98BgMwFp45fYDaQJ3wRb6xgcGg3o6kNwMFLZh8sdVX",
  "key33": "278S28mvBypZjTHeJ7mUiSD2eNZGWXv2Ln4Nis8dajojmcipMKgx8u5a23TgyzBFywzTkMRpSnSMHUKpC9A8bodc",
  "key34": "3UNcw7CkPpqv5pKEQMp3XJZ1QEyBC34w3vYmrLue9Qypy8Cwi7hJWkrHADQ2XxBK4T9EjwFdFwREEAB9GEVx8wsN",
  "key35": "34jRrexQK6ydzqxfJc1BmGaVSrxdWg4MxyeZpAPb8PfNwENSqkBK6CjrCoJYMc6RUVn1ndB2Ctdbckp75rzsr6PE",
  "key36": "jYz8Se6ooV2bbCkS2VMvuXhcnbguWWLeqA5jB4LZFMmXGZLhJKDptHEPTSUL1DSdwEcL6xom4BjGdy8kr8arXkJ",
  "key37": "2jJ7F4sknY7aNYzVANmCYU5pKpNVCPmXnTj4FMUb7bsdqiVN8KT9gczWNGPm5S7b9Pj2sT4WpdXYdgWj2U9CYNQL",
  "key38": "57647QLU9yvXJWTAA64yesB5A9umX8MsWF6cTx7eqY5qd7YiAv2nddQHjDaaR492Gy6bTfHgQ7qhTunUS3oLnemK",
  "key39": "53j9M7Lt3zLmBmzkBUG6rnf1hEhZiCXDDwWXhRXnhW3FN29DVrJoJc9mATLk9iBbsFiDu9FWM6vp9CHvc43kLTfW",
  "key40": "4APq2pEqYe3GLt1WVd81eDLqnNWhYZLFEZho98kPxDT3evY7EGTy6767z6n9bS5ZEnTShyDCw6oCFwduCs14h6oW",
  "key41": "5qQhAaWrsgUtqeCJWiri2Hu8ZHAzmfHiKMqs8Qwp48RLSw2wNzJEws1j4qGFYhrZGo8iQJvzjZcjhFYMC8KpGsMw",
  "key42": "JMo1wYAT9i2gPQV3NpHL3uygvqyU5oDrMxiLFmHxe2sMbHF8VH7rsP9oCiKqmsrAEFn4NFmoZjTVYizqvzmR6ZA"
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
