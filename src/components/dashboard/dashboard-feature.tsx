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
    "4Dr4UD1QV1KkBLFsqcFiCUwyWMfhYM3uQE1b8s9NuSPqaQKJ9H2jPdyxz3bAxTchoEJFhDUBZdY6xJjnx8ZxLkUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kbue9fZtjbY5pztK9n1WM4LkEfgrzPSzXjwCs9NRvevdQ3ppxHLLUiKAxA2ZG2BsfF2NpoAHaEfNGKX4tyTd6pn",
  "key1": "4r2CDFGce4NY28fyn2aMCBWJ2WtcdnmngL3QuFfdUzMUzbwXr1TiobabH4jvJfC3Xvem574zVmqmgMRXVZaYvjE6",
  "key2": "5LMtZgPJKK8gqk4tM1cjJZafGLkx8xoBowh1BTdaP14M5JJBVBAJcX7AS7Be772ZcgAWX9xC8nQfFf39MYCWcMBk",
  "key3": "4RR6DmFxugG9KBD2N3zrTtmyEY923jd8ytoPcGcQS18S1biPoA3ZccBq1zm4rgjAp8TLHRQChykgnMWnhpjdLHME",
  "key4": "FooqHY3zXfeYuhJcVbbKGf8WX9sNtxYWuFV5UHLrReC2kNrogFUrhoSe6Wem61rnTkmDWgnavXG491KvVHChRrv",
  "key5": "5449Gu4vWdrmeqo5DLsLzaRcCfHgw9fheFsjXttF1nzbDETJ1NKMiCVx9ArEZcf6BBkFGecxZ6x6ZmfrnobMfstZ",
  "key6": "51PHcniwNTVjczoJnFCqWRiJwhCoRPCMws1V4o1ifZEnDZVutQtZNYoSNwQyLGTvFQkxtmNf4e8kVKBtShnyqxGB",
  "key7": "5MBonPeQYmY8kPXSyveBvPu7nqw2cmbJyH85hFS7tS1kPssnfjmXH6cutcWrfA8vDptytr1cM3uwCCDvP4Mb3CGV",
  "key8": "5xHBj5i6v9twAApXaDSuUEN3AqeYZHz75YwqbHWcte55sTme1PgcERsFFHGXBYcXttFZMfAU76Yjrt8ukMCrBSsJ",
  "key9": "2XLKD4LfsRAR4JYhZw8odvWtNg3S3mYd75ivd4BzUFz9T11yj5QTFau31RrmAeqSSb1V2NL5JxQqGbsniJh8q4Nj",
  "key10": "4AuF1g5kbNsdc6X8RnPHUH5y2aiUAMacqpmTquoGgViZ2HtfQ9nV2k9P3e41akc4EwXbPNPa4zkE5aLkGhwS3Sy3",
  "key11": "4jjecHKWKqb7jGpN3SuUDNRHU1o3JZTHcxVMieLQVL4oFaSBgEd1EyGzEFRSojBvBYgTVykFLVVE5VDs2bCR9Y9K",
  "key12": "4fuXbmY5U4Bww1SBqvKtDDKeWYs8VoY8EuenQ3zQF6ugLM1xjQCrLus6L7P16CZf6M9rd3xYM2bxELSpcJYMFUjQ",
  "key13": "XjmQ4WhFFLWRRq5VXvkQc7AX326HbuV1XRC9MxgGFgUuy1wKkXNj79LHWoa6vRjnjhX662w7McBRyhc6aFa41ah",
  "key14": "4TrusbLaR8FsCnarAqoRX8ztVAEZmPbUFbsv1Ex8f6WuUMko4qcugjFVgbchxv44mTxGiHWmN9nmCFJxhurRedXe",
  "key15": "5HqnRogJPiTPWHNEhYRRd9NHmjehH641Pji2xc9tJSCjuCJCdaeodEKKFyDg4oWsw2g81jTZb2VqqLckHTazkD4Z",
  "key16": "3SC9FmNQ9crNHc8Zoe5oSL3qNkormtWAAd3ZqmFVJA5y6Rr5Hg9BNDKzhnvv8SN3SQ7mzSDp9pH53mY1Gk4JzstK",
  "key17": "3jys5f1ojAkz4SpBHtgEzWoGWx1T1NVJGEUnpAwgvhQYwJ2uy1cNA3JgZjkBYB1ThAr145WAG83xpjqB7diK2pGc",
  "key18": "64KWao5zj1q6dmiXXVnK17qkDPMy1G6HjjbqznZRVGdhUcvRVz6FHY5pTn6i5to76SzmeouW9Fxe7T6FRNAMzDnG",
  "key19": "5EmjdeePQ9hbas1xLw6PsQS1M1usuwckGfC2asQNzGDp8wyHCkWiJCCofNRo5MaD3Hic9LaffYBaG7G9Rbz2RMtp",
  "key20": "3GjJVowBo8av9syj7drTt9wFSiCLCcXXRPeYGJS9A6N4x8ojkv2Ntadzh2Ys5foi3K5VExr3vYzTGnLsLbd42yzW",
  "key21": "4Jann3Tj28LiU9ZYBk9FvX8euP6ZNSKZbEAHdwG1pnqEtyZo1mCiE2Ab4bQYSMGgjdfgNsUwpWU1sckyLUPbvBwm",
  "key22": "5nSu3NyBSurjsKcJSZxgBLTVm2hzfjCvpMGw94oDwaQNgb1FQZ2X4DRWCW7JYEUXvPkU9mbumoLntpk1nrEMC9GM",
  "key23": "66ShjccQB2efpRZ3NSiS8Cj2JKv9qnCjK1FgCQQzy1CQkeFmWvEQotQ5cNqZDPzjmBbBPKKGDijSB9YoG3ZKRKAU",
  "key24": "4ZQhumkfR1E86GxqgdBxEWeXWrvC7oD6XNntYfrtZoxKziZ87GiET8ctQwtD9ff2a54oAJ9MHx3VaByEaMw9Ebjr",
  "key25": "4SE2KUEtojmywAvdTmV1LpJCjWrFr4rzgKFgXBEDVggucwCFovnWN3KjuoBCB4ihEp8nzUFC5N2PeMrTfJViTbgs",
  "key26": "59ZuiLY2RNKL1L6xHKk7WrNuSb9A98daVuTJWaF5KM1oUYJ1KjzaMU7CHvfWTRCnW2yWZr2Q4RUkNCYWunTzT7a3",
  "key27": "5tKv1Uk69CviqaNJEaJ4MBbrjMcA5rr4ARRjsWhwLY83jeb3JVCBTqbo7GKkdT5Eyq6cVJ4jLnG4mPyFqazWXSsS",
  "key28": "2sCauZ9qR4E2P5mtr2gaDtfN6BtH6tRpjD6v5oYtGc8LDLcFJvg5btPzyEZywHhzG5eg1Mrmh89tYYpQHVcacbzr",
  "key29": "2QrioVVRZFPUkEZPDLVHbZucUniatgmNQzoG4KGZo2qDCcs8VhnF13HTB52Lakzd9Mk4b1ER2JxpnjCtU689za82",
  "key30": "3j6g4e5nsG9EqCdRLBNM8SCEZ3W3yeBzV7kwwM5p1mwyfXTroQyBXZmSZonyBstVCKQVXTRtUwdVYxBEeJqbPPNK",
  "key31": "3AvcrKXDxvzw86BrpYsKSmMW7ukzWkwHyUWq3p36TX52yNs2YcwKcREaq91Gy3pDnvvjVkQq4ngS66KnUS1QYGR2",
  "key32": "2qMZsgyTpRhZ3aAM151hk1qPucGvt755stcAxfDGAtXM2Qm7hQVHSJ7MLwDvEPGtYWAsPuotEG9z3myxyjNQguBR",
  "key33": "61CkXCwhA3dK39TrR1Vj81ufeEKpGYLKtpn3QjmrpU3gM9pesPM5qWM8f9hwXxyAVwj4kz3D3PMobQ3keCLf3XCP",
  "key34": "45p4gEkCWCVXUf5bDJaNegdZJktdcFkdJjqpDywzHNboyKjb7NiWLjXWc3dSkXJdUkGayhpPK47EpctWeNC2ArVp",
  "key35": "shT9iVx2UZH1AjTr45pX8XMEyknjinkzrpuDeZNAEER8WzJd4P2oLU7hwoks3RRuEjqJou3cqJg6phEsaaBB9TC",
  "key36": "5G7W6EkSQDxF1L5sj5vRwH2n6ACvm1PkJV7XXJT7gUd57F2BY33ostvtVw7Ef2VB41AcXt3oGVVaFPZGBzit1Et8",
  "key37": "5aWn1PCZiqe5e96pZdAvFJrzCwff88J35GukcHNbbjj1yNDswe1PNikbrB9d2EcZJkFjeWvKMd9ZZKTKVjoVhEHD",
  "key38": "3ZZ7Xht9xYpq6fb2JMW49va5ncgubNYLFbKXAsAzauMLmz8yH17UteSxaAw7ZUXDKFjocc2xntnpoTM3sBqmn9nj",
  "key39": "2QcLkA95MoegNSaYekHGdvEibWBF2m8dfidFs2aLYMjTLo8VKaPZpNHgfuru3c1UzCVvNhXpxqkkdL2Vfbbij18w",
  "key40": "3bgWokaRzE6v7uvSzi1KHfYv9LMWvic2YVvweKHqrEHspbhSUax8JHXQs82KR1SSFC5SYZxEcP6FUcSs3kh2V79A"
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
