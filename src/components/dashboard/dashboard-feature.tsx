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
    "4zRQf53Cc1KmbND99W4hc7oq4StaA2wog6k4hJXQKrmnsqwJy1JFqsDRN4kELZReB3MW55jM2FMeHnRXWLuudHX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3487emSMSWc4Wxwau71TkmfCXvvLfB42hX8pgWNrLLRjefETe9MPuqsDEgHeT6FPZKrNgTWr9h78PqvpRnCQguoD",
  "key1": "4bCZydaVXg5FetDhuHLSKcWqdCgo3stond2QV7mPxxMBBWAwk4NB1iPb2CmrhpEGhr7fTozBnuagu9PLF3y8zpJb",
  "key2": "5CqBFRo5SqWSH3r5oxk1HZsgbQGFE3KkWeHDxoSmr3KtT1LWSNPU4BCxyNM5aGgXBKyhdvjFMpPAhQsrfvige5rm",
  "key3": "26JbhDFbGk1BAKBRHGra6NCp2DrjEY4bCg1DESzzF22kZjK44GnGYamiMb7TcQ8p2pVXFMDWYWSSuZ1ZVUkhM9CR",
  "key4": "3Fq4U8VoXB68oEBrQZbEb9MyqnjbLoUjqgePo6LSLMAMFKXGSht3kYrun55yNStJrQrabX3SNDnfLkeUjQwTuRhb",
  "key5": "5opNeKAnnKTSUqm7XzRkMibfdiYpYKHTYUuVYvtp4jUxKbHCbtRwuZtBzTzcvh9urnB3JpuB1Hrv4oB4dZt9uRf4",
  "key6": "jkU8jJy5ArZENVkv2BYN95yd7yXNNr3xwVmT84nYyjpwfE2v2LhAVq1EEWUtZUFXVdQtrqZ37Rp2fMxtYSuKhRG",
  "key7": "52HY68egV4WMVnq2ipoyt3EAwNXjKvocXfVj3cfnx3WjnYDrruPWXZyCxtrvec1p3yv1XyRbCtDEcJMLpT4qekEH",
  "key8": "5sVdsR8EHt8vehg6rw1PgDb3PK5xLqQE5QJsBCZQicyz24D3rTGhkHNUrmPfsjVoHwEyqTXnFardZ3KnVtvQh8Ha",
  "key9": "38w6sdu8rjMt4ZoTjyBTi84d9D7Jg39AkATUUerYv2JVBYzyGPz8XebBeKoEWXP6nj22gjtHpY5dptsJK6ASGS7h",
  "key10": "47yZ94YnDorJYwKQ6SD4HqbteWQQt21amHVcGb9DTGXtjMjwNKLbWXXaofgR2Fth88NBn6NGUbG3BPtx46ZpYf2h",
  "key11": "2nQPR2NMgUyttHWdFaPiBV4CkKPg5CSR7dFf1A3tkuUtCpi4eUjeqYdE64J4Fuin7YGpiMgXZcGQqi2ariecAZs3",
  "key12": "2smdDdU2FZAgXBxwLRn87DvKvsJ3b2uNiZsRg7Xiw4Q1YHxnYE14K76qqJdHNFzcFaMcGgcuJUATnKxV8NwpRh23",
  "key13": "5B8nPQR1L6NHhQHpgMwSGruma95tbDbAuDp4RJNd3KowzkjSaFtUpoUrc9t1NiUBW1WiYj5s5kKojvHmn9rgJuAp",
  "key14": "4ZqebWcq2h37BfGAjDcm947RsEyRLPAQkFkNoTucRtANPF7gEJ316DsRbdP35NJGHCx5haDPeJQEr6G8qwcYNvBH",
  "key15": "rYhbCT1cBWxpKtMUJXsF7b9bTD3F6JeJeddRtriRe2zR1Nh5R15Pgz1XRyJjAbAyeckmCR4KJbioPxc6sVr6b2F",
  "key16": "X2JJTfRj72EUf8Z3jhcmGU1qrwMiVdwy1DnARj4jabup9Me8yGhqE7w74JS4qSahcLU4nkeZam2e8hQn6mqmh8C",
  "key17": "5iJ2fnhChZdxbuXbEE9368JqgQAXX7J8kjKkuBBmdZJRRyAmyg85hhbguujhBVhPdzJHLn3mFiKCEb5y3SNk9Ce5",
  "key18": "2NREFevzrDGDu1XaNMmkNsNY8gy6Wg4MLpLbw3tyWaYNdcZmPszBRqBxmv9tzoXhkv4NXj582GLtZ1D7KQ3XHF3t",
  "key19": "2e2PBd9EF5Vrnm4L7VkwFsP7Gi8Qd3fN7ZNCUX9pTp6omqCfa9A7qFG8J4dtTB88BsiZJnUo9XLo4AdBNYYYT6aA",
  "key20": "4wJc8VSfvLrmxz2zFtpxBU562eYad3Bb31HYxrS7QBBSxHZ56cGrADTW1hfgmZHeaLCHH4xRqDUY9JsFxUERTB1d",
  "key21": "55KYMHroHnH5995bNcJNqRyQRm8C44BenKYNbpg4v4Xsmp1rzw5B3TwvkwHkZaCvqsoSZ28gz3C6vPhn6yJLBPgM",
  "key22": "3jQEPxUboBceFcuFzW1TusFXPV1gZQHp6Cyz71TUrcvAHkVzuNrAmrFwiYjKmqtPSB2RN5UMBoLEPn3o4FNJ7kLw",
  "key23": "3qh3PvLvypQC6uaBwvUP2ZzHuxaXHjLXK2ZQDdh4vfrFJTp7KZy5yB7i8m1S4XDDqRRoaQYw5azTLJzaghsXZVMr",
  "key24": "4AhxGgWpzHSt9BZwKvjCEZKCBUH6RaLB5MLmufth4qAL4HHYdpQPfbiKNZEng1T7TBD4fBrDsgAU7dmkqSTgCkGK",
  "key25": "3XVdGGUvNeZ73cxTwYL5GETTRHLs9AU2ykysbxkS5A8REmiLTHxSff4NAWRWfCAhDUBoFvdF9Ef15AaigGwuiE7a",
  "key26": "4ASr757795JpwshewBi1Vvz3af33Tskwj4YXVd1P6JjeBYgAoxUDHcT4Syn9v875GiMaU5qeiDJsawdqPVAaJzrD",
  "key27": "645cH92gtrNYY3heLEEvGxmKcCTodMEJDtNCMY7Ve2uLjPpVXsWxnddXB949nn6vPk9W9AQ7VdXLJv6iaKbhfTB1",
  "key28": "3GBnmYdCkrmYKw7B8BRN4ZfvSCnqNhRxhusvqU87ySCDxeCge3dY7gJZPAre43T5Vjfmhd86tPez76xNM2MDE1u8",
  "key29": "gxkEGuZVXL6fBjvfA5fno9aaXeMn224skMz62NFfeB3LMNfcki3MiQxx4ojTPHVN3x8GAhApt4rzov18WqK5yUM",
  "key30": "4WBqDgdrkxMGvWu6KKxExuUZuFewJehf41EJf6C6bzAR3vjRjSNTbA5zw7aKbLy7vr8B5Vy2t8RKKGydgiuFnNvz",
  "key31": "4GBh2ajpFEF9yFYRvUS59NafWhGYYuwZfWAUCLPLthA6JT8RfwikbsPzxih5sfT9o7rVRge9JdbMgvQe9EFZUbxC",
  "key32": "ta7Ci1ArP5h7QMGa4v9Yo2yG7LiD7qzEmVSqGAXxx9ez6mf78tfHNpPk6kCEUfAatUXbNnL6upmxLmGn1ivoRmd",
  "key33": "EZJZPVtQG6uMu9q8Aj5RQQA3ZaTKfhnex1JntboC4cZUdosdbxeN4XNjeUuwBjspH29JBij7gmDbbcuwyoFFsMJ",
  "key34": "67dZwQPCfY7Qg1tcDs5oxNxN9uNUZq6YPycdHco2yMtAQT5BYBXxjrpr2wmcRkanFY5rE1NnK8fiHAG8EpLWSDyR",
  "key35": "5WPdfXPRVpdrrZcgNJwQ1Qn6Q9wzyD9njhQpSSf4haTTEXLiRm8jMekmkzDP5ybNMp8nBnCWW8tHSsBHNh8tPNYe",
  "key36": "5Wocf7PrP9txNZAroxU9nME8gFTTpTv78QWfNVgudJrsB8RHj3cUpYXJncPkLZw7JRXQUpeTtw8aaXLm6RBAjLhA",
  "key37": "5Gk6ndLutxK9JcmcxiwB2jdvATYobCj5rktrDxBHCFVkfhjESP8UxaeYaDDEv59prfD8LD34FpSzVtssjXH8bR3h",
  "key38": "3Ubig8XyGwj3CWDVs9NAAcp1NGCSkCcg1JwQ9au4Ect3UbgWfUMVnZ3VmSfopz8pXqFJUAqWgXfSixm8SWeNh21g",
  "key39": "4MMQabxLJ4WVrW4uPZqiNCXVzGCmV4pNjbKPDsyt8MD1RUsCjqVt92ntLDbCjZstZ8Q6K1Uc7TkzSA4XUwHxKPpf",
  "key40": "394j2Whbr2mCU2VtUDTvbkotXXHpntcPSWScwA4DzPaWoHXRwDy1fPCKgR8wiHFdnDPYxJ4UTofzYip9AA113UNm",
  "key41": "5zL8aFKYF7rxc8ni3Xt8gUnBrn31iokexVwTgsDC2xKLX3JvJytkiR8c5GCQpBcfrnsykFJUWAYhKjvDTqTgy7Dq",
  "key42": "44YedyuMp9bW7uWbUzuViHE8BCGy2pB3NWLswRf4q4tMVwaDQkgiq4b3zQf27LV89iA9pbCheBEF3tUiAGCATqSx",
  "key43": "5TKKqT1oPJ1h5vHx2vUoo68JrgJVKPGhq6MyAHgaCzS8XKFQQB8SxE52NBdQyjVJY3uc5k4bWGRirKbKf4QfmgRu"
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
