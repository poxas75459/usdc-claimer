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
    "3WjCHxoXhD9D5rngP9FAzc4G8wmYwVavP9owmgWrvbPXVNw8Dqxj1w3zk3jKY7hufbn2RwtYUuADv3sbiwxaFawd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JR2vKbS2yDUunTn9BathzVweVA72WcuUZnmbhKvduyhrMFsRpQvZExrqkrN31myB5vSsBuANY7uJXYUJszDi2Vz",
  "key1": "3j9nbqrzv9XFLcYNyhpjBH9TNBTjAjrgmCE6P7S3QscdVX1kkuoXqh95NGCvsCdesrL9NdAh1eMCW9Nr2F5simsW",
  "key2": "519wRPq8CRgqwfafHnaXpkQ5r2dsrhpw3fF5HuZkuQuykNnz1fm8KB9iCkqEbr662rC8CLnCGjtJ3VB15SpfpENd",
  "key3": "2WXyuADNC7NQQJydYC84cdrBLw5NyGBg9qwdAMdo7NSCpKBrUJZSRrEY1G9nxyGn39utqDzNry2hXBtnaNqn4BRX",
  "key4": "8MbXUbQdjZsUX5GR7nJCqqVUCAKRtBx91puuxfP8njxS859KqaVp1EBySUzpFe9fUrag6qko5emGJWG56q6RdAA",
  "key5": "3fynowg4utUg9HdSKJFM6SMi22hEHPUqrywTgPNa9puuJeNGaVArfaKPkggK2PmB9yss4czMN9fwev8ekWzS9C8x",
  "key6": "4gFXzxYhNhh8GbMkwNaPegCtL7ToZrypz2sj91FBa31P5FLyjYKoHDNaH7dd9PNza8o86qMd4LrcR8Z7KU9U1N8p",
  "key7": "3gf8to6SfGTX6KQdBL7TLdJ1v5Kmebnh2MUPgcmas55uwj4QuccFQqBpAu3dh1tNaNBzLLLqfw1XL5GtB8sxDr6i",
  "key8": "67p9hSejQ1KF87zGTJSXW5aKXCpEELyUFo3yrCR2iqAFAjEPBfMmdzWSZT6rVyym2FxHCagQzzx7QpajMP2BnhCa",
  "key9": "5SLHX7QCFCZUAz2eJsda1Zd5t1KBApMmdaLBx6LsKxDMLbGVcyJDS3W1Pdi8LLNxLxe1xKtMkqe5Wc48hie6usf8",
  "key10": "5qeEuwtj89Fn4zznELnYsbEo4ZvmKW5P2cnq1a5cRUpgaYce7YujUZtjiCPpj1oZSPcjfiJpjzpGzy35BgxpnUtj",
  "key11": "3qPGvKRGYUd4KLPFfFMyeAEmmM9z27YSzwzEb5hnfNvNvFFBXYq45FD6cWCvV9twYdkawY4xVYbWAc8fHqxtJftY",
  "key12": "2wPnemy92yM3eAgB3ZghsTawdqXT1wrNZ4tG2vq1Fnbsgn3Yqf68dWVsy5ncX8XmqPfWzj1eq9iVyiygHMgt57DQ",
  "key13": "2qufqaNYdoNK46yntMji2avy5BmvzbBadPSU82tFcKtpFyPtoNZMeNaBhTUrYmsAXy2tBmga9FqLwsw8zyMQzACE",
  "key14": "5md6bRGDPJkK2vu53AarWjnUiHbAyZbKbB73EmMYp7jsEmTQPqC2KCzPvnXzb2UzTxQvSur8daywssQPUgPQhAbn",
  "key15": "5eArCajmMLprK3tBC5VA3sZ4uHZzirTqDiRqf8brGbcv1fP5SajQ5WfULrcKyo7xcAD6W1Ht4kHFwnRUfuVzckbW",
  "key16": "3v9xbrozXFBWEn6gKEo3yksW4bsfrLzzUV9y7j6YoKn9sTqyg6nsqLVTbmw6N8QQHSedchszAJqxUwoFQnV8vB9e",
  "key17": "3jszfEW7vBS7UiwsKCyG3niSjQ7UteGNbL8KG92Wd9XvmzN5p3jehj3SmcXQwYZzNE2m4TRWCGDnVGRX4BepnKqj",
  "key18": "3jDLmv6zP8N4bkmGjwkfptgzkucJQoWErya3T4VhaMMoj4oMDPQCDqnhuEcrp1YGJbvCzrsyEBvwfaZgmTbr5vnV",
  "key19": "2AjnJ65iA9u74J6NJyUeZAf8d75ujtzBQhTP2ba7N7APBx52hH2aYJhDQsWEWskr4k7JMUnPXGoCUmqasPCHuKXn",
  "key20": "5vBgUB8XnhNMdumahTpRUVWsUKPuY9NHgqDu3PDMPs9hRD3VpFGFVgzk3eFLtm6kEf52eok1qrLmT1oQC6BSHpFH",
  "key21": "4rGcS6PHpw3s9fyP4rJVsQgSJNjhJE44djKDNgu7RuRKKhn1f3Ag35crAVghxBQQ6zWUYfzumo8iYyspZMVu7zfG",
  "key22": "53LJjEBj8bEAghoHshCzr7UHxaAVV5ASxNM9vR6xmJyYHSr9sPtCLWBfRh1YrocxcirUAfY71cQX3pz9GCuUbeWj",
  "key23": "4WgCnprYzEqPRBosJvuqbX9qPm42CWUKodg4TiSMiAQS6xuqjQP7cjHM1hUBn4BYja6vB7mR2LDD7Go5nnjC3nin",
  "key24": "gt6Cx6ecXxp2TtQSJHKWCTDgspFhmnp21gwecjK6agj4KYwznBZfVHojJopddVYGFniUfu2kM2HM4MF6pxENQhZ",
  "key25": "5xhVwzUmUXrf11UDqCUjffD4qEVz8DvXR7EF78Tdjp8rwqR3H3ronYQk71KyTVU8HJS7Nwo1eAnPobiE4oKynrTf",
  "key26": "51UJpJxBzhmMiiQPDcJqW8H6Um6MvLvE26ZSHSuqcuCUhUgTepu4oki6kHorujUPJJPnVaGHKXHyL4crXUnhJe3T",
  "key27": "3vCbnd2Pez4Z7v94c4xT9fVayfhjczBeJcHbJ2MXFfpxSm4Lh7azWompT5jnWPi5VXNSx6GUeRGGy9L13DC2CAhL",
  "key28": "JvYAKvsfvHvq8jZ34tdD6XnhGXCLAGjJoR58nX6MghQR9tWAsCbPDcrLSgsFzPnERcwmnbstLv38GFhgwaKDkG2",
  "key29": "4PHiANQ8tG5yEYEu2j3UGMFGazTzuddA4n4CkTNr6ztQd4SvFN1ALgjA11vDVKFiHnoas6jeVkPvhhx81PZRmiru",
  "key30": "5rTMJUuEzkroFBk3V3p9aH16rNkhcaFmubrX47DiBMYJ597ymM658eB6jdEG7v3xgWgnG92sosw4UfMkF57x6Fwt",
  "key31": "5D3RPboSyTLvSn9LZeUNkjYnTwLUyBrxwiL81RxU5j7rJr6Hu6r5VzEMG1Vb597eb4mhzQFrtTekwKD3a555X97j",
  "key32": "22pamc7xhfbSe2X3FT2uE9QJ11griWnH7wQszYPG9R4ZeTuVRUGktKviwynK92VHDoNTWdYThCfHb1WQ8WjC31tm",
  "key33": "Q7YUQ2ZgSezocuqHvuAWwmyDyZs7rEYktQ18u4Q5615eUxsZgTiVWYeLfPM9pN48QNjkLjHPmPnTcAQwYiuq8y3",
  "key34": "WoSjUs4poBMD43Z7bJuyrKVJ3vYfzkxZETBu2tB7gcPjNKAVQDMRXbRN3CApAGcq92U9LQMcdyn8UXymp1o9L6U",
  "key35": "uWrLjhb7hiGg7FwmcMaDwduhaR55KvrJug2Jdjb62L1xo2KAhQqXGB9G4JW6cFs4NUD9CEuZSBUxN9yqKRkKoCC"
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
