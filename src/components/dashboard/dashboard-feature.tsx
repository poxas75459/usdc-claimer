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
    "5dajjEwW2pJdfrMcPZofFtMYZ6QZsCHTNeB1qWXRSyH3niG7YXDWcFw8Sp9tqpxufdHJHJFhz149EZcxNANFC5cu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jQ9gi4GiEW88ACzEoTFtjwSm3sVEsdbVkgVnJxmNPfAVbVPmWGwLxTPauctR1quajaU2393vgLia7SbZPYUWt8y",
  "key1": "5yy5iSFM9WEa8AVio4nxDD2sUrB5daYhMJ6tqzyzJAiQMqApHqwreq9wGTM3cuTMHsiTHVhae3jgj19JtAe5qCrs",
  "key2": "hebdSkpYvCZLQhySDLob1xmJy75J7zXWtU4EHjqPedSCJkhmJZHsGgcY6ztirinj4qkrd37i5YYTNWWf7EKNVPo",
  "key3": "2deBz6yCKKMFX3EUUk59S4PoaTSzw13uji1QvjHY3bDWHijcG262EgALJectBZQeqpBCTY2wUunetTD5ktFGw8sG",
  "key4": "3TRfJHiRiAznWySFhRPjUgDprww4SAFDEqUEDCirpF9dpypvE88cVVx9UidQt5pg8D5rZv9SiBwrseT2tj6bcX6S",
  "key5": "bmBtNvJFn2iqkXcNWD3spoiQC76ZqdMnMP7PSxAqUPbL4D4auc9WKvE1SfyaLD5TLkh9WHnzqH5dxAmNV6HcRjA",
  "key6": "5NKPQuPs5sGFZ5gCp3tuDaxEX1cwJRHSjU7rh4hFBoeB4wDYgu9oHQEvKyH6WeqE1V9mXkCpkL77K4XaaWGCR3c4",
  "key7": "cu2iK3DFDM9XUYnvdkK72XhWSSW9ygdPHVKQh3L4RfYicT1yUf6nYZJWLqD4Nya8GphgwNvnMPidLKwBhSX9xFF",
  "key8": "2XyoVKBPiUyD7qLVz7emUsmyt1JnBzpEKJwVmZwPgTZzTQWQJv9v9NXxxy1tUz984LSZGinX2VMvBa2eeryrjkLe",
  "key9": "aFq28qFyRZ4GD6wEHKwsF5PsizQLXMrLJp7W64x9B4yec5KYB7NkJq4AhTF1CvE64VzjVFz9ND5hwE2QUnnG5ub",
  "key10": "3By5J7sY85Epft5bsWNRjSTPjP5c96vnFSpiMbrdVAqv6Dw1QEeNYqp3RDjXjRqmQ1WmLXq6zSqiRwnQvMYySL5V",
  "key11": "5cRNkFBgazLsmrj8wDapZs5UFSLYcGgZyZCKHWqSCG2pBYJ9KdBtgaFSpuYzoZ1zQ8NacuotaSQFi9Tat4133N9h",
  "key12": "2JysTq2Au25LuQxcwzzK6W18effpzxkn61wD4VbkDpdsAz4m2m9Mbsft2zo17pFQqT6jUBePi6XXMRcURcRhuznc",
  "key13": "42WSMru9MJgTtUgEarow4HMGDV972sKQggZdRnAVALHgbLJgfa4auGaDELHjJMn8gwwbw4BbJEVEXNBiHJTSQ72X",
  "key14": "4f9wk5P3j6qDCBLwe2bycVymQBSvuVEphP9DBBGTouyjxNeXbgCZ7xifZB1C9yUjzg1RX1tCorpCGytv7ziZmynd",
  "key15": "2WYh5G2D4ektvn4AqTZBzTBhGfKHits73Es7pL8xKx2DHoP8owKEg9oU7PnRoVhuJdawUoTrbUawbXLRnD22rW8H",
  "key16": "2imRx4nnjPn4jaiJtzTCwi3NVoaZQKUhAREqza2RLuWefvZiYwBKG3DsNuM9EvJaz32d8pMg7C4xz9s6aTxTSGKP",
  "key17": "5jxtNRtSzNadcE27BvYcYMFv8tDeUfK8qHWxAj9uza4McgHKT15kw8UnjdzfWvqz8J3CZSnZnGr4VU89FABsywwu",
  "key18": "pPbFDVBWrnX3Q5sVq7hdxdSyirfxX61G3JPWwHLD8UGL338J38zGzMGeL5gQ4wQaVaHMsqW5SumYtTpCrUfnJZq",
  "key19": "SeWNn568xqLtJXfjewHh6xJ62a9hYBoBpTZHJHn1qqQGAcjTCQf6ciNh4jLt8qAsBrhgXiu37QnK6nypnu7ztwe",
  "key20": "faaX4yRUhuQco1i9pe19WwHLXWu5A3c5fFvJqzhAPeUg5Rdf7XumBb3J9RjUADB93akwD4qLDUBcT7whuqPLvUj",
  "key21": "2owaWt7ddS4izCxx5rrP6hV2rQcXEruHwCfDMpC4uyVrPrJSwfH7LYTuu1L1YdiG6SDQUzA5qZFJUDLPrcnumYpf",
  "key22": "4CjPqE9XfjEhdArX514FUYNH4pQSdtAGSec7kZbgsYpMdNWWVxpTxx4vbtqtzgjVTgjGsyv4q88ZAw6Vp7QBcHH6",
  "key23": "4GdGdiYsDCNj3nmGiJbcb19SV432Fxk3HjsGcdznKP4sDEp1jsDKKax5cT4oEMd9UcL6F2WSD46njaqKwXRgxuji",
  "key24": "4hjZRGQ9hfxs1xCNUKRWrtH53fN7VaT65jNHcDxnxHHZo8oAt8ZLtBpqK9BRgEdZztmrkxnuiMY3SXD7kEXizrqi",
  "key25": "2YeCbTVpbATRqTQ4zt55m8upK3nMXbriJd5g9vH6BookT5v6RGT2EfDjugVHfj9iZXnB8UuLcKyTkYKsEmt8Qb4G",
  "key26": "4W8sikeH57JGgqasF17bSeFVpxhW8syffi15zPL4QV5bcG57ecds8xoPxwH15M4cREae2YjekSqFDYyVEFsq6PAv",
  "key27": "3yD6SLiARmTgDmdHaUZaf1LDGqeDuh1BTXXWejPksLWojvHZAdsSdstBNzzn7j8VMMYj6EfdYMM7pb1ZnG8C21gq",
  "key28": "HR2DH3uyPWAhVCquuHns6LHtyqzVU8J1cifwwpipour5xoiivzG3yf8BNQg4ovftXj7NuNpzWSwmJNB44x2iSEq",
  "key29": "YNTD7StGKu7NVKcqXD9NBLUpeo7EPo99cCekM4KQGxfbQVjRaFLpXaNm7jQRfAWi2C25o9UpLzQNmW1Jgb1TNtZ",
  "key30": "661NXyX9hURwV9bDdtPFVeFvx2JfuLse3hTdmzELw3U3rVFiFBURudxtaUNs4UngMo7xzw9bwoYRGJmEtvtQFrSC",
  "key31": "3qU854Knd9vMvtqdojXn6DuGdrpxP36jnRrsoVFq9rBPnyPRzeCR7C4SbXaWUGTRwSoAwJszvsmySunSs8fpcpKB",
  "key32": "4gyuu8XuqkGCHc4gffSQZeTjwUGTvyw4uMout5mMDwYkh2Tu7pUZGL8YigpS956G7Pwgc72cPRvMB8WuGy2orYb6",
  "key33": "rHGsB2xPX9UHay9mpi4q6LZ48SzEa2tj8tTDoZfGt63UWzAw1MW7KTMEWUEtN6wWVeARbyL5CAs51JcL2hma9oF",
  "key34": "2JLmtzBWv2fVF9btp1e33LdmFibTRghRyCv6MTpJD5uikFpuuS389CEgWwRt6HG5cpMQExGGE3PZ6Lc9C2T6bdtd",
  "key35": "4j1SjiT8Aarx7XWx9F9V62ECJ7Hs15oRzzYygJCXeavqF7spUAcHsALJ6QtLX1dfK3eGpjx65GH4qeSKc28X1Ksp",
  "key36": "3tPeezdFKTCRFtct9NZgfesU7y2aqovafMeMELZ8bV96spPGRsY3cSAMGrftwxns6CLzs31CVeReMPCinkJm5N5y",
  "key37": "8FxqQBpFet7F7iMzoHqCu2euvxUQny34pysx3RVZ3YQCiVgnuEHw21ZJsVcqbtfgwDpTgkKbne6VozNMFoTZnAM",
  "key38": "HLubuYnfGQoYs1o3Z7G173EsCZZF3isLR6LnEgJAfknqtN9uuyas1JTkJURgvppc4ypy6zY3PoZDzXshvNK5QUe",
  "key39": "4AgRJxCQ2Z7Due1UrcDpvbs9vUJLvUTz6UeUPMvVqwYvV2Enbuw8yjxQw1jMaBzQiojyHrBVzwhpJV5kYDBTEC7y",
  "key40": "xUgaG1kqKVJLgpWeBoEVC6qf87reoEdtWsThXMitofyQmgMmpG1QWSfmEKmVhCJTbhamc6GAMiBs5oDyXPGFFxe",
  "key41": "41gYQfTLWK81YZP2XyYHTknegM6WCbppPnxVAkUif1o9wLAc4zBPeKHRx24sWZDf6niM6k2u1MvnoepM97jkz2bV",
  "key42": "2ToF47hqqy6M7mmwMQgFmZvQWGPaVGmWCdAzA4D8vWBtdwWab9rcM51pQuFsKvpTYh5zZNZVV1Y3ACUZkxPrxaoD",
  "key43": "22WcTi1twu151KFLzRMsVqat2MGFiT7ywLDoxukkXcJTQdmyvawRxTGURwLTt4AiwJaW4qCW1zj3VGNHYXEusZ5M",
  "key44": "3tmYPcmKtbuoXvkeakLLTUudqzLXmxSLHbqgr6yEe9oMRoX6juHr8ZXEfXaoCdiXzsUDm71SPkRrJbvwac81pUEJ",
  "key45": "5NXvQhEeA1sLLVX6qoDC8FKbDPPkrYqLqQN9jVbN1abQDZyijrggbm6bVs4bDqoo1HMdjHxe5hER2bazTiYLcNgP",
  "key46": "5X54LbXsLre7HSnqyWYPk4TX4GjZzgBk3Cq6UkJrYeNYFSApSfktPvbbAcRt6jLVFUgqowJezEwmkGirLdvRMAj7",
  "key47": "3qSErqfX46A9V8EazoyKvGHtB7EfU1niS8uiWDzcfHpDBRZRnNHdJCD9X4cxqEGGceeFzADBN5442DK8FktdLHqt",
  "key48": "3HfESytjmNB1p6KFDgaZU8R7aexNEXK5kj2AnBgLpoTajXkDLFj3Ez4rHSCVpmwLrvUadWptXyXoHrjUdspvYCU9"
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
