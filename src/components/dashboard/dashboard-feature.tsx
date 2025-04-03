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
    "2QjnoDRbqycuVx9C9oDYFahQdCMCg1GnFeLs5DCADWLzmFpN1xSdXgBtcDdhqzte9PyvNb2oAgFBzjwujzRSpmBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CcvDgwutXLcRcxwF6eKweaUviiA5W6CFnmxwEU7xHwpoLCXdTJU3AtkA6jNCB61iePzdvJm51hnThc4ouzJPFY2",
  "key1": "278MCjKUYrLQrBEw36EuutWiMrmuNPe34H9EhU7nnxuXxbuXwVE3MYKkrxmcxHqu6NTBF3MShD8A8vJYeC7ptoJK",
  "key2": "4cSLcN5KvxBWL899vhBznyg26qifhtDHdUM2kF5Ers6UfpKZ9fWZ5uPrinjDpkkGiFKTp6s9TVdDeCiD5NDcuQg1",
  "key3": "3Z327Yv61Bc3xrfChPGtmfrSRPT9aPf1rH4ZH6YmyjJSsZkXBZnujpL6pWZgGxeFjD7Emv8DYDfeLWmz5ZHRV6Ln",
  "key4": "2afipGtqfEGrg9qS62JwnzNj7tbxXLH3o5KtSHdUArv3DZr44Dt2qUUL2wxoKnTBFwzq6F9YFFTavG8HwwtWRFeL",
  "key5": "Hg32JsfR2xpdy6eW3eZdpokPsDak2M6hFJCDqogtyWor77fEErLE27woLGijdYNNDLmw9VUZJP87VLG7N1SjVuD",
  "key6": "KSZnzzwDtWCteqng4bDZhsmNWMmaTLcKtCpGAPepuJ58tp6zDTotQjUytKFKd4GBSRZvgucFpE1dmB9JYRcXojo",
  "key7": "2HL9ciTsezCXJtqkTWTa3daVJHXEbf75swq5xALqA4eoPsETAJqPZyK3WctyxUQypARM41QT2jkkHEZ8dsUem41U",
  "key8": "3Qhw6PojjNH1sTcUXKcaTH9KD94EH328a8bUDxiTUxf5M7VULEvmgUcCD1ps5VkToBcvPa4c6qABKSx5X3vjrNpT",
  "key9": "4xfoFz4PwPtTjfirvS8PA6XnCxRT3QnhX1gu66kMvjWZE8SXtNQ9mNBwHkzf5LzsXwsF19t4R5fnwceS565cgobC",
  "key10": "2PpZiaBB5DELXRAvEmFQKSsPcQBre1D51CKMagugAe3EmvwJmaKdGDr28Sczh8CTDzzgBjhtxnY729zMC8E9U6Mz",
  "key11": "2iFeT9Jxh9iEZZJqrcCcKfK5768o3eTpP31Hdu5qhtnvx1Y8sZUWCgiDq5ZY7C9PACGVqXxUEupUPaW4UG8C4esR",
  "key12": "5btfSHjy66Wia6v2CWYVPm3mKPmYuakDhjECYNEEcQ8HuQNmoyJNrzk1Fnc6UveHd8XoT8xXhSGXQWVM86V1bSyE",
  "key13": "3zv2Si6qN3hdVx8N7CZ7q465Heb11xDTc6cdTGBYdWuN7HzTHCj5AtR6HxSLsfftX4m39kDpqNASBUQNnKDLfycs",
  "key14": "23WPfxhVAUAbT9XxD3TMBgjMst2dT3RDUgBxGy6ZTPfcXtcpX6M8QpNtoP8Sjqqo9Da5s6tB3VASWB9yLES36j3X",
  "key15": "tKTk3kfHXvC9RiAAyFJG4p4QJguhEGd1xyQJFRzQXHJPdBus7g63AkN729CyXMptT6AnoMvKkP15VvVxxsd1Xwo",
  "key16": "5wJLbLTSMaPBZNEGz6hYKbsPEJaWGhVxHtr3kBP3i3TBbemjPydT1mfxGXYMXGH6qB142dbKhfWF6aZtJs8ZGuZ1",
  "key17": "TXjs6RrAwhux5D8YeZmk8xSX3q7TPZQhnma1xVxN2AroHKY1xVZbJfWXU6UL7sQhebQfPB9obHPZfTexJcAJkpU",
  "key18": "5AEArKYR7EJEfhmoSguB4fHJ3RNxvu9UcvSsqUJVxb3W4htjgajrtgayu52pcuC4qcUYR13uJ9ePGHoWSHTLkPb6",
  "key19": "2ZHB4ar22mqzyPMC5rKJE1aagTZSPeyMkTpQvM4hNg2a2iBHpHjrp9cqqnafLSnXd2hcD8eYHJAJNhD6eXhpiPBC",
  "key20": "5FYEPAoVqMEfmWvHMYNzVmqdi5EzZiKWXTzHmjPuivqkA52QUmp9UShVBY5RBFNxAcuD8uQMenKCWrf58xojDP6d",
  "key21": "3vaFvnq1W4kr7fdMvb94uhvAf7t7EhK9uh43KEmDzgSRgCyWPivJACevQx9KP8KH42pUKzwMNqkKSZAgoWX8ng5c",
  "key22": "2u8tSES2k8XqDbUucavKtZaouke4w11qFX6uZAR6yUrsotXAxF4iDre7GRurfNZsU4Rvts5VLRvmeVHv8XEjYVgJ",
  "key23": "2x5Ss6sjui92c6Yjans12efxu4wRHGhJqxv3BCiyAPGiUUUrrjuBT2VM8x5UkLBMTHaNwQyePACe1yWeEyhPmji3",
  "key24": "2CbRetzK4k1oqvaRuuSdHab94kw6tAuQcEiG7qvY376CE4mfZeGajhQ8yz8dYzYaqnJUVsZPd1PTBSHhPYnYzsQk",
  "key25": "4h9zKYBNB4TnjwUVR6Cx2om7cRnF18N11bd7UaQdZmuuooSLsBugVDBx7b8Md7CxCv7eQgZuemAJxVgnp4JxXeZd",
  "key26": "2Y3ogfAiW95TcKVt8SdyBtibVzaps5Gdxiw1gMEqYE1mbC9ou2E5BAMgEXKnp25a3iFkaAYcyPVc3LfAQZUUGPXY",
  "key27": "5BbyX1kSLLsJqz67DMnpDbqA1S7f9WYZEDdRFVbQaX689cR6UChxkdBCRNFxfGYF7FeD75b3mQX1sGpvh5ESUVh9",
  "key28": "64cmb55XhoEYzyzLuijucs1UueZqZRWkw7YFW6wxdaJUhikbGjvitj453mfhuqwLCvvEr8dgiZikqfKu4bAwpwf5",
  "key29": "3NMfXGbo6kvqwqviMFA4bfcduExA7Mw3zPSQo6Uct1ioZKsm6NcB7jyy8c3E2gi8zxet3KsSjY42p525TFF1hkpk",
  "key30": "2SJ2v5XSGysNy9gDeh7CP3FHxoSamJ7eScNqGM68r3v1wtnreGxSbkwEkB8QsrZJpCREbvFwEvB8VxetMBSE2FzS",
  "key31": "2LQs18nk8mKjc4UrskP8WMuC9oYBTL95tgiJRZgFmMvFX7scpfyU14jRhrptwfJb9seJnmGSFFoD7pumcVkSHEFT",
  "key32": "3XXejTR5h7e4Ac2GN2MK5QsbHURCELsZzKm3rZYKxkxohhfEYcWUvwErCAckXAbq3wjqeEfy9gjHq8X8Wk8Jep6L",
  "key33": "5XEMzTa8tmjgaamigrTX7QSEwaTSHinzAhXjLGLHCkADfie8MjqZrFqSfAPyiyWQiW4in5PFfxKewcK986cxkgj3",
  "key34": "3piwh3Ygzc8nggso3TyLEUQ7wUcor2rEg2QFLnUsA82weEzz9U1YWruZhpJLM7ELtgBy7AxB3DwGKBZU3Eq7EJND",
  "key35": "4fonoikqZXgwX4Twew9oTKj6Qqwts7KxYFVEtxFNWHgzjrcZ8mGWmGUKUoHPr4rNpxXQCbeKxPzCbcpZHVqntG9E",
  "key36": "nxAzgAiqgy4LPDbircFC4WCjMokWcT7BkN3CrPrZ3Tavx7NAzLUEomPSnybnC5hkn8Vr42fsqPRRt1XJ1BnhX7x",
  "key37": "5cYjYNEucGgeyRCsSZQGcvcQJdVmowSpQsu2gRY1x2jDpgnQC9cHKSRNdAPrvkqxhebKtgQCtXh7LFGZ8tunpbSB",
  "key38": "3VwGo5dED3frejPxLCy7R4YYPkehKzPsy5ytBWr5e6uurrAsLY3QQAPHesCzscNrej7LYd8yLTz3Uh9wYRSmJXv",
  "key39": "3ZD9k5eAfDbESwyxqNrz6QRKHCQ4fny4s94NjxBMSHd7WvKHTk34seG6YcF2UR3Q1P8wopVuRgfFPSUPQWPbDLKW",
  "key40": "5uqBA3yf95d3gBrqd1WsMMF6kUX7jU4Fvw4D8vAFwa2UApriLcvGxdHqJUjhc4JRRACjBWgkpKo44JTcQHNiMHj1",
  "key41": "2HGdLFjQYHQ87NqgvHnLWCE8XDJN97pXY82mREepEhXsPjArdCmy6pVnUkGrrNaJ2KVN8sRY6AUXZFsmUdVFFBD2",
  "key42": "3CkXKMFVZQKFv7UYe9KpSTfrbzR3YR6ZdcGERoLzBW3viFZmCHYUNTJHkFa1WHvCp93uKUNAQ32js9RMkeBHzVVC",
  "key43": "4yjBohKaUQYyRGd6SPRJQ1gWhcX47TskADEErfVY9chuijLugHuxHRh8kFXdDHW9bZZEjAmRQCj9QnupbLFDvUUT"
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
