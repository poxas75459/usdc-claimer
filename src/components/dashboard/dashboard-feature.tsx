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
    "35Szv7oWgg67e99ZNVhGZN6x9hyhx6t7XWJ9jXXuNGaLgX5TwqxScJQgQFh4hJT8NrjnwMitCs3T5L4LZXHNdMJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rfuQgYKbT8poSdx2Vig7ptAjroVEpqsQ3yqsG1F2AmjZMd3YPgxu5ivVr2ymJZZM2sKzTsrc3fooGKWuNgFuknr",
  "key1": "dBQsekNKaqsWXpgjfQi3keatzn64KgAYQ533qpmwa9U5ceHmFkdmZULt3jrdGtG2ZS4cxisPu6wMMUYVJ7W52fr",
  "key2": "2rtqsbNuQYYTzuRAt31rBDP6Wgy2TBPzCAuDeu75B3BeimjqqSPu4cqQwHCdSSnVvNEH5HypftGhHKGT8UdL6FSG",
  "key3": "47mcwJJAYrLyDtpvi96DF6ykMF8f9bsVtiRwexGZCuMMtRYHGQqeSQ8FPhAFdXC9MosaRX3WHKJhZ5Y3aVfF3yUo",
  "key4": "WE1PqNrs6xpgNnbA8TAB1UjHkNqRkoaTV8SX7anLvzbhQD8JMnd4S6XqwXFZwyigc4RaodHXPhYtCqkFrkBB5No",
  "key5": "goK6jTsUZsxr6KvfS77uyS8sCUiVxpwt8HcJQ2aDHEbFYF6cJJacCUTzHj6jcKX1Efo8wrBA83WgwTrJzT9ZCqV",
  "key6": "2UD7zQKebdFt8z442LgQGECmw5HFAsFCsUg7WZJHQ9S7q9cYad8wtAAtdh6Gka3pYM83h2MYzzW6YM9UWezg34GS",
  "key7": "2yAHHWLWPm4AUP7kWqiVhX7n37GN47j8PgSNnmoK7BkjH4bHU8n23xpm2kDJvputBzGswxTpKmtJ3jz4YkJi7fpF",
  "key8": "27gBafWnY41RiqYYRttfpTJKeE1q1B3ies7NoccX4Kad7AuwUngtnpZvQ4dxA4qNhrKj68CPvTfhThRVyKQ64GdJ",
  "key9": "5EUfzEUU1VF9ggZmTqkUYeidG63xmiKFHpxCfxFcwo6Up1DhBaSxDVFwjdzeS39U2WUBrqGNXNJzZivKRSkMLekn",
  "key10": "2987fVckrY4Q8E8VawABufYti5625KSkAMh3trRKhqraB2aiXcq1JzrxcnnrGgFdfk8PiFGJbth6wTAab2PpXq4c",
  "key11": "3dPiKypegXSEG6AADZz5KSAWCxxwvmm8FzxWnPb3t15c4dkpTej6mbQf51jy5AiSNHmiRDGMPJUDgJmRDC5cvztt",
  "key12": "382hekfXnDbGZZ2DoUcxtaYvKRuDE8qTKdg44Y9U5dpJmxdHDGnqRVtkptrcz5yVNBem9XpcgvuFL6JZCoAKfh6j",
  "key13": "GwuiWgxemBRJZGBTkDvMa4kT2ccs3yywD4EtsPPCgKjEU7Zg61JbJWaspRymfxRgoitx3dB7Kexs5C3n4rSmXVi",
  "key14": "2yufAKfUdMBaUcbxDYBGJW6d4hv9mokm8BCMNmUMjMxkvoXFgfUNujRR4VEDzcNeAc9UtEbzgPN7sDLsRSZfbYST",
  "key15": "2KKyydj1mx1J73MipnVG9oaBuNS1LF7bFYn36awgXfcc4i1qi7mPpdjqiqz5Zei74MxGieL69Sj2cTMWgVmKbiPZ",
  "key16": "5CEhhTPLqUG4U2YSWrRXg4NqLPRwsmRfEdN7P1nELPkFtzMtrBDPZTZy6XuaUvsi7Pm6e1W1RVWchVAj4rTEZrc9",
  "key17": "5mT7gjfJqagnJQ1bcwruuKCgEdQfqsUmoKWjcs3ryL1Ax4t8y2pWrbHqDtsHaw7YWF5sTXfbbgNEVbC9B99gikrb",
  "key18": "5dm2DfRo7BFcemvdAbpivZBuroBdhYLtf4nTfW5en1QwPcMNUpbkS6fsm3KGJuDYDsJLHVBh9oyevLqnAbmn9oSU",
  "key19": "2iCZACrMHce5EgzEQHMQGNvZQRjUoWSePJCyrhSHxQuGM6rzsA7BSzBxQ6g6cQkdwqpk3RPFYBzCyKc6fGsWywVc",
  "key20": "3fdqiAD793SDGbVCnBhnyj6abDevQLMhJG6aQJjJjghRDBzV2fvsyCW6Z32JrVR1izZobf6SAi17nLo9TiZPBJC8",
  "key21": "ffEPduGCqWP2994HexDGszBWTkzYpJTQkNMkLP2npQxTbD7JT21bBSbF5vT1aZt5VFoNbhKCztAvkWRMX4jCHCs",
  "key22": "3H1aiivCvt9aF3xGX3FxYp3wLEWKE7AcB8YD3knmbogT5Dn9phtpkNjCHFwYmQDXjq1AHM1AoGroJbNobceJmsSC",
  "key23": "5TugAknaA4XZ3AT59fNRBMNGW4hRio7N5QCysZgjLtE24DgnAnJ3xRm9kSv8n2afsT8pHza4VwKN9T4D24P1Ksa8",
  "key24": "45nzMfZ3Y3hKhXsvYBJxgXu5tYcSoXKviQxrmCfyiTQmPbkYvAgnrudzMUtWLwcEi3vwGDeMzusNy55yVymTyd5p",
  "key25": "3pzEc4F52GQeH2Jb9t2krbDzV69bcHu8ALzLfhhZszRbcdYiS7TUSymqnwjdvZaccuqVxd1Me41XNhJUZG811NSS",
  "key26": "3d1296f5xHXsFB72Hx9gk7XcBpFi8VBY1fP77aSqaZTLjZgZ37C8vSYfyT1ZsPATxkVmbvdt7pxWds1gTuzZJD9",
  "key27": "3cB9YXypB88RJZeNR9rUkd7Jnghh27FpoFJLMiJ5ZYJfEsrd5uuTfRGGzv5k5BPBrsxRHQeyitg3tLB2CGas1oSx",
  "key28": "4KVvWHacMY4aPapGBeQW92SBZrGxeGWcCX3cHfB66asmg249Sm625VpcTN4Am4cD1j8JnLRnKAJYtwS6TaqHKRnM",
  "key29": "Emfi6M3BnaHKfKLsx5wgkpt9HN4hDj67L8BdPQ4mjPcM3fqGh4Lan8QN21ZJF7td776i7LqMo7vQuM1tYGaCe1z",
  "key30": "4jJRgbDAL1JGezX9n5qER9K4h25DiK3RdBAuDy7xn8BjeQ4TYuTUQNZXBq8v6Et22Nutv4ZZgwgNR4TNSfxp5HaX",
  "key31": "45j5Gw3SmVPmhiejSYgcT6Ug3zCj5a1Myf2JPTwY3zJMXFBr57uidBRZQC9hW4NeQiJGC5nzLosheWmwwUA3tqaw",
  "key32": "3GMqvSS3AtLwMCqPKdrU6DPS72xH4yjNLTEov3Eo1Urb2ZdUb9ai7Xcv1VZ55RQLb53zyJmG6DeCrVEwjHAuKgrV",
  "key33": "3NcmBQUpPZULr2cKoVpxLNPiuFyCbVQ4SvMSFUeC8aicMrnwmeMdQxJJ7DsAywJXY7YmbS62GbLMFLXXDcNxgCQs",
  "key34": "3jkafR1dvEYfKvPHJ8W8dSGTia7u5mV1dcoWcNWEo9TBnsBJ2y6DZCtpKKL7fppuiCGjdkE6AyMYznnDejzKkr9j",
  "key35": "5yR4NL9gHYux6u9SfPpg9mLoGW5MmyZQnr1rJcgvnjgFXP7s9KXB5r1ju2FMqWd6EjeRgmayLqTMtWLP2JL4LdFb",
  "key36": "3QDsQM8t3i2ZECfxaaxLgnGtU9HC913DEWReDEbVp9Kg5vviV77pAHH4SqwtiiNjM8qXmNTEeWNPy9tabTt7GmxB",
  "key37": "2gdtFB6ghZ38nRz2GdAGa5r1B8ui5tpZfMfiYXa3pAvmLPT38CXWd3MMnCqXqcWuS76ZH4X2dEXHBTzgD2P2wDAJ",
  "key38": "NR3yEGEBLJYWwhWU9oiGoN4wGfxF3RP8Ggz6CVwAvk8bUhMtkTegmDFM2EmFERVkcrBK7LhZgTD2X8zKZWV1xMx",
  "key39": "2T89uEXCkEzG7q7Mh1uo2XzmY7zpU6UrAm3fLP4DDZyjaK8NfYALqpfenYYLRtmKagEybvdZ4Y46BJqVK2Etci8F",
  "key40": "NJSpMvYd3FVaYCa4XdVfXDuFhVY9ffZBMFZZh6BnAEircURCAMKbfBjKr8FtrFixxD6ndvD4BVPs2EEfqPZUx15"
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
