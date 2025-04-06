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
    "4uyy96w8KnKQUWwFFNdiAuxoD4LD6sFRUWzhwYVs6BPSyzWSmAYgoXsrTe6xpm7XctQyzgqVJumWeTEsiKDYsz5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GnHJz3iSDrq2Wg6i2zbELgjcZdhwbXWdern1fmKRY2phE7GKJx6MyRtczwdK1dmAaX7brGQyZCucvSKSBTcemcA",
  "key1": "237XATBKkjpzWMFLviN7XqE7R3dcPTjxNoLbpJem45F9kGok8YXzs4ZMzu8pk8x373N22yrEfWaSpQkEuwDZeKwk",
  "key2": "4fivSpwQyzUUzyFmD3sZJ4GcR8xCUSurLugWchaux6ybSqrshg7gpmGQqax1XdemmWdtz2vUf2Z1QSSC7d8KmEUg",
  "key3": "UU6jue7AkbeHNnxFoUumprL8EDSdNtuDbqxEUxvgaycA1P84Eg7uH9caHkrrV5QwjKKiUPmzxfu8YPUo2dn3xLK",
  "key4": "5YaKjjC2kotj7BoUujhWd2pps918G6PgYyL33VNAyebyRQQyT6f45gSYNWVZmBpEyz8XJnUmr69yFMhzzymC3RYa",
  "key5": "2whnAFwTfTcdu26i7pkJPFAxd5k6HuWp2N6WVVq2kM6H9TgaUU5vuQNTQ2kVTRafDcxL2C2jFEV2SLGKwmiDfZJN",
  "key6": "5iQpbNUsfF2Lp1C8Bee79NLETjdC3GGgc23PkNZdc3wzGEGq8KyCnTKAFmY2Zt3jfXz9SVUxwGkd5hCBiYMdkcrS",
  "key7": "WzsjyivPHU3Pk5xdhBC7ikW1H6SgWNhDXpvWZACeQoWHuvfRL7iqdWiZi7zdzw9P7fPLMdG5w18AKM1goTuSEHr",
  "key8": "4P2vRcW5HUy33qyFqjkYsgQ6vcDxyg1XjdVfhTuZi9JB3mvJLv8DXPEsdryByt2wASDNzEfeA9U3n1AzdbfHSP7Z",
  "key9": "3bR35FcfFyYMMxNTFXjLHVkUuAPsQCGkpvcJBAx8wVqE1H17RaqbmugB42WNRNZyBvbuVtE95ix5gAkrvpLvjD2e",
  "key10": "xLRo8U4uquu5YqpYSMMLw9qfrq9utPmwda9TCzt4qjN3VZ8dCsqtm1JW9oPgC51HKZ68aJe6GS93HZk6fNANB1D",
  "key11": "4Add9ufgewcpxEZf4hmRkTd8VcYWFmyAFDwpasNFMVDJQ45y7xS2HxJejcoyiDEyXikrg483tH33xZ3AN9ajApRg",
  "key12": "3bKotTjNPJnbCNFSzUnc77WSzkhzaYgou61uXEYEgEnqEK3iWTfKdbfsVwoPt3H8sz7jUfdME9nES8HvJYoCS6JW",
  "key13": "g7Qb43VtoeK7hqBbZLijRJwgu2GV7ckwbKjKWLKm76XZbwZrGogKK3UySXrkyTyZbByHPhdSFqm22krVRi1hsoi",
  "key14": "3ZHmcuRsuqgHYUaJScN4sRfhSZLQnocCDEW17NZdHdmW6p7tNhjXZ7gQeDy7fuQbYZxZ29zfVU8aS6kEH8WCn46j",
  "key15": "5gpJpbLtJYEfARaSEuCcEsC2eHaxheC8xkzig7AgjavXYFfBqs6ouw9sEoQH3hRs3HoDyVMCJGt9oQ8NFD3gGR59",
  "key16": "5KMF7SLv3StRqhEnxqyy69QRatnXmJuq7af9cCEwxmWGedayFf3FBEa7MmGN1e3LXeJ7mGHSHwEq44oVUK124hnT",
  "key17": "VBnx8BQ111VMRDw1dgt5gRB462qMqi4RQhcXxv8rne7xocnRwTfaXEPio7YKnHAu7CA4rWr2ZgBKgwuaCqLSaH3",
  "key18": "4WRJWs8bC9m339R57XGx1hWKcTFcJwE3QqwfYQkTet6egerAvu7HU9z5Hrp3otXmbqqVLwYQC7JnyCWvTmexzKB",
  "key19": "2yQ4iYmivu5nNvkKSa49haSQn8Yzm8oHaoFhjo5JtH1LucsiwoNjuG6LNHvnR2NKs7wz5bb127n5dZgaxogH1L2k",
  "key20": "2Y4kmWdQ2BqFUnr5A67iyxpWinxrzWEih2giNqBjfUqRdGgE9ua5FteNzVDg3z84bnNwrv1m335xSH7DMy3ozVxU",
  "key21": "2AcFAyvac88cxeVKngUm2xLh7YD7KsoVHxNJCHNiScTAQv3xHoFvF92D5gJ91YaRQYriNNEJD441fcHBt14TSRuT",
  "key22": "4v8Xe9djYDu7uRPbpZwgx94UT32wC5A3wBZdNvyK64BQBhCQxUP9fez94oP7znJheskzgaiNKoJxH1KWCgYe9XFx",
  "key23": "3PZGKpH5cVJQ8mX1ucpok6wbRGKs653AwsubLHswhJSjpgpT3ZirXiyobCqn3zJWnrL4FeTfzQKSEZ3CoRUD66un",
  "key24": "U4AFwiJxsoZj27cf9FKZLeY8xQh3rxM8oKYLGwFUcrbfQzT7NjimWtrjGD33kzttiPGvjJd7rGiCfVhrQa7PtDM",
  "key25": "2YMfKuoRyPSVA3dFWVECAoj9Ua9uSEc6jT1Rg6dBJSdsvy9UfsnenzkWVDqMh38ePbfMcEtBKVFronuJfAV2qucF",
  "key26": "3J1rm66KBToQusc49GaCQjADtopLgkDooDMoAbHM9VurS8DsZZPdMezwcGcdsonKrzUUpJog16FGePfd3yh4KWnA",
  "key27": "4USeGPJFVSTirJrLC2mGCYCVrK9Umxy4YjuCeC63aaawDG6Zb2Qcy12UXSkhJtXXEknKhUQSN9bBtqraejsxun4T",
  "key28": "vJtjgS31bb218CcXC3f4YQJFM7Jd1WExtm7ki5KUUTHKfrmRDHB1NLqLSJmiYDzMpJki9K7EndbzHZRebt2QX3Z",
  "key29": "5fodFET5HGnj3tVdiPFvoLZfqAYKWGRb3rkb8dypVEkVWWQ9pVrUjZP4jsoPFckBAVUKgMGD8qrm6Ypq7SNVba9M",
  "key30": "2Gx41rGZqdR9d7VfYe4cjQvYrrCkRTx1mcpvWieHH52pQaio85BS9QXeUZPcCTwmuieM2Y9RQWUHVVkqdNmSfwDQ",
  "key31": "2StaSeNDszsqbJWfXkRzb6aC4Yjae1tgk3Fv1J6UVPXK7c4AebTVeebXqhbmtrjyVy7u6PUHo5QVaVysgSv1BqHT",
  "key32": "2R5Rp1afZz9svsPCXZCLa7qxkrEU6PEoY3hpwCxgRBHL6nJnXd4kypRSg8wVBUta2neNpPPJgQgGEKbeGdXuhxBm",
  "key33": "K9XttiQoaBFA22yBUimpG6rzmiKMLXpvFnnipvs7HB1CjXDn18HTSNv4AtkVvXUJWLBph9brQksiKWuLCfthfRk",
  "key34": "JPJqq5ecuHjhpC8paDN8KdQyUWZA5oW5FL2YsZeLmb1Y6of4423TFyaSLqR35Eu3HwdywTMMrVBT3ZeivsMgqDv"
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
