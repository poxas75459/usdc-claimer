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
    "2dgbBT4fwyFuvU7wdckuTpFeZu4XTeHRt4vgrDxfwaD7TPkHMa9gL47WrcPHYAjY5F5AoaB2Wu3NFw4aoUmqpLta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gq9YtXXGnztHBqyWngnZK9gE7fYPZrBtqsx746zP29aHacjUgYdSkfeR3LVbMovBQSzcwsNSmr9qo9kogTyusnY",
  "key1": "82p9g1ZBcztC9Wc9HXzci2dAht2nciVXfhvfE85joVC32UwSmghm4145aitawoaVgZxpPsLS3ZeLjBP2UsqziTt",
  "key2": "4pejbxVx7SCrm6DibzxLxie1R8MEnfWExGcaZavxKJGjTEtBkT5r1AN1Lo88Gu6feLJLSjq2rFgKvqqHNPPaVPJA",
  "key3": "fsoYE1QQVNcFGidZJuJ5HufwGcbfgoFnTesHqQf5sUwEjSMRuWTaNYBAcdsVxYZ2UwGstn5mZDidoNeZHn5mcfU",
  "key4": "4ro5YLRdrBgHoLct4VVyu5YsLKLrk7wt5P6dGySk99zsA9A91F9avDvqLZWefFFgA15n6HEMVFGD8CqzinJuRpKE",
  "key5": "AGmb3GaoHRapUKjSF1DunMx4ayRnBv8cyrDiXnzPatJjtmwgKmsuQDfRN1SsG86Z5oPamgCdCYUrW8HbRfjKXKH",
  "key6": "38tL21AjQmjpKobsJu2f9jvCrH76NAc6Pq8JTLkUb5F4ryQAU4cK2gpHJuPXhaaYY2zmjcCi9ZpTr56D8J9YZwMv",
  "key7": "BVY1ByuHsEkig8fJBJB22ksmZS383i8BoHMUsCFXEBz6u41gBrzKx1hpgaRH4kLm6GYfB9SjoUsfsRH3aw3UgNg",
  "key8": "26dTNvpuUTR1ZD2rGDgXFfHxqsDeaNQCxjF82y9bs8Ybtf3SD3hCbVTy7Naan9EBSwNG7gPaYndTX1mjSgThSdhv",
  "key9": "4DiS9JgmanUy3naSVfMuWZQ1798uS98ZYKQvmWRLq9DGVoc1zQhdMXXnmWBfuXrDd9KSEi46zUYZNeir3sM9fHQu",
  "key10": "4LE2CJvuzxTLdyFsgTeEVPDX6YU5iqJVp9UMUSrhbZAcmaYyX15xp9fMbFFRnWPGqDKxWKUNvnd4CnhWwo9SjFY9",
  "key11": "2meNQ3tKZWR7ahidyEPmCjBRNvDndKq5XL9cNsZuJffr7WHTKPRx383uVZ1AuV76PvpvXbgjU3JR2CNFt7TSu81C",
  "key12": "57yH7rUP1eoHXymSF4PuqgkURSMgBdBfcgdhE1ybHFuHPPVEzumzQRG9F14nNiffheaoucdV78inaNh99Vft8aqD",
  "key13": "4UyrGrnW3TnpMuPd975QF6iFc5DGNvkrvo4ekUexkGFHBaJYSkRZ59WrPbu79iRgN4rm9GsrkGQqMuZouJk1b5Hv",
  "key14": "RzhMnEcY5M4zsHTfEhieRz9VhSPTqXmpdbHswYyRAeJhw6knH4x7coe8GdNkVzZVjzf2K7e6uCZTmNgBYePtFg3",
  "key15": "5NuGcj6rUHgca4jYLLqYgYg5gNyYEBp1PJ1v6C1TiDoZ8Rp6VGzDh17ws4A4PY8y2uT2DB2qGVfg7XQ6AjZS2fXk",
  "key16": "47kfBG4oqa5JNTfze2JrnLUXbgQv35Ak5kiYUKFazt2L5FmmTJMzJtKeyQFT8qQv4Z2kqMizZgSUSXrYB7z668tk",
  "key17": "Wq7ohdWyHeTw9Nd1JCkNUn8FmSRUuDxhP83K7X1MsJMd75zDEQwpnLcTdnvXK7iBUvUYXA3kBfxgsd2Ba7QZT31",
  "key18": "2aHCQ1EJpkigoevuu15EXNgX5EH1UAkRXfeh1x1XMipySBKwwra66qx6p6rr6ACT3Z811sek2LC1sya8KyAtpKcT",
  "key19": "3doJYKhH7GKsLSBxLmDJPjXohEQEo4Fss8mrVgR2kjoBeyGUWpRERTSBTv8B9uVQk4LYNRCdtZ3W8emSJQbuq7q2",
  "key20": "VB783uxFggzHAtiwibk2qYwSefuQgqGrJfVteSY9T96ewK5tLpL7Nyp7qfStAKAmmqoU9RZsZxEbbHmvYXUbqC7",
  "key21": "2dNdVUwwHAUy22sr8WRZ16FAB2w4Y56ag3Ryh4G9ScCWS92kcRGKKuBAXvyH16LDiRuEGy6FA4chRGG1TYWKnKUw",
  "key22": "2FBNLydsJPKz5pNTDKsXKPUqfafNdb3o2fHs1z9tM6oPvSe9NPUAbnMyEocs499WhL1CDjfoVePQpQHM6CzRVkCR",
  "key23": "3RxmGG1JSPss5BoTHXV2yYf1pQNvLSEZFJHVoPsz73KVPPgGmJeS62nd7wUDxkQU8Pc5A3SuZUPheCBRKeMCNcxT",
  "key24": "2Aw2m91qG6799fNpgVsVSSzq6VNzxGCESW5mMoriVPFWFGT95c9sFYhygwmsYNUXQ4KTS6RLxzwNCKGzByHrwcnN",
  "key25": "3BxF3ZErYegtPmStwQsEfoZuwGJurHLFqNwkm7s1ScuCuDBuFYvC2kjMwMPojWTt5xmQqcJNYGyoneGSY2tkFDTY",
  "key26": "4sUU78JsjYqvLqG6RkqKqgLDS9bkHW5VsqV2MMcJfMdqbDSRqBSQxTmtEzdjZSaEsKi5PpyZW9bfB56T2CGKM89e",
  "key27": "3dX6vMJyXk2z5ou7Dbm8PYHb3kKN9pZabfDY6h3FoB4QkD6iGfDRHBGfmbp4VLKyeqTLdiHvqQHUe7ciLy72CNX9",
  "key28": "4GTaTzZMbhLp2GjVmvJyTmbyf4pQhM4iEg7ngvoTgmkbiCMkHUzcFgDKn9FYEUU8CGZJTrmALJncRszKMiEajFt5",
  "key29": "2GZ1zV9ZQaQvKvFP7rRKU4rjRMgghMff7BpvErioMi7GVYNBwq7TmD2ZP1tewpHx7ps4D6SX7NnZkBkmMdKq9N9c",
  "key30": "4sz6RcCnbPGqsor1TooiEdLA4PNHVBS9fWcpG4pi79xQxunDSAeuuZHpr1nEhLCrwNTWH7mZnAwy3Y1oa2cyvRhz",
  "key31": "35tzbisUjYNXeiX1x1hMbEMUW6KKCFBoxCL9h9bdwYcagb758AML6NqQxRg7YgxbbKj6gs6TK3e8mP8SHAW2V6Uk",
  "key32": "5FkSWTqxqwN9pn7vJEScaKtiuVx3mFd95a9FDJULe4kcS94eVotruPfHuaXpvSL25NVDKXb7EMFcPTT5yUxMTifS",
  "key33": "2tg9pZ1tMKQEPjA8mdcy5gtmZhCotpxKTTKJqjtgBxyCCGVXrSYPdqrzTSPmjKHbZ7H38AQBSmQ7hLUvpgAeEeWk",
  "key34": "2QhL5DzBF8b5AKZ1JVJkzpJgEWgUCekD7wmRZdhBwFRR1i1AfMn24h3bQjLWcbgNkA57uyq4cvqccju5bUgLBUgb",
  "key35": "pHYfeKRCfizrfTE5bhYA6b1rEqwBjSYSKfgTsyE6HFuD6fpDsK1tUekn3nQiPxmdgosUmiV31upvxVXjiYKdMao"
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
