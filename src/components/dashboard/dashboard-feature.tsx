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
    "ebRctPtV7r6xBkY5RomfKtj5NN2HhcUH2u9Piw8KdcWsDkH8ycKr4CZAxqXpArwWbPGJkpgo8orMFALCb7GiKkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oceBwXKrFCpqqR1jsAQNNaPSh2xwQ1F914Zxpe79VyNCJz3Weg3YWxzNjSsSS9QKYrcpRRivLBwA9Bn3LaKyQv4",
  "key1": "3Hxa8AHvpXhyqTmZ3jvHbT7WHqjQUJdjqm2oCrCaVh3c6L78XbdV3VUb25avSGt3n3AmXSzCVHLQvknj6tvkp58w",
  "key2": "3hGeNdFRnzUd1FS73aLDjPrvuLSRfsYh2eGFK5jG5HSNjmVCv3fE8BoUhorYZjbEhxHjxnk7X4HQv9RKKutL849",
  "key3": "3Qm8R561XMZhybBNfq9tPkVqNhxcQDxDCo11iDqMiGkmiVVMrn65Z5YAYLakcyzpdBuSMv7WgJ1TvL8RbJZAa7Vz",
  "key4": "rFf8MQZKfGLrY9jHSCjaZ7yn4tBXkX5KRRNHbEPL8zpjrjCDLUw3PkJPyiopq6M1qUZisnpKr5DGzKF1cGtwHdB",
  "key5": "eqyxKLsBkVf9iZjqjoLEu4CvnP7MET7dK4huf6MKs9buGn2xerKujJnHy4a6RpMLEgeiwmbwbhVVxsxegoi18yZ",
  "key6": "zPQEn9nvY9Jx8Bc7ehDL8X1dDgFHFbqAdW3RgPUX1hapeA2c15ow3urGM5pdfwKyRHEbj8ZukTkivJMRWdh8Gk3",
  "key7": "4BhwryDGikxZstodYSgJiiyXXyb3voUpD5n7ZkpLkJSaJiXtDd7qqFSZKwUkEbdZYK19ya1oq1cVKzpeU4G66BZX",
  "key8": "RkdEYPBWN4X7wT74bsFAVjaYFuPhWrshrtfJjj7299aMu5edTMRv6nLHxXkmJjti2p4LynNBuk3VNsBXvU7buzL",
  "key9": "3cEDKAuyuWMKvLEnrGD1L2UosnyAu7VFTTuL7L3BG8JydmtjJGa11vnXuGHzTP7dhUcHmFaj4G5axjMkDjQyMSBw",
  "key10": "cWQR5prAeoUtXUbw4n6DnotbBRF8EXeAPDe8ZmUifuDu2PiGASmcvDHcLLPz5xi3te6PG3nzwJWy33yosMcGEtw",
  "key11": "4SSUB1EuyC5vAYmkVbx33PubuPkK9pry3gLHbcRNG8oTBY5Momu5BXSjtNTLVQJUugUN6w9FRj12CPaguAzvfrVn",
  "key12": "3h1wMK5kfr4NHmGoripZHWg79im1cGj4GruFpDY27FKENz87V7nhqEXB3vr7YS6Fct4Su77SAg9zmY4ECFMZUKAZ",
  "key13": "3ZcBqCvn95rWaJujBEqAEvoehLQs9Y5xFvoooJkMH2Br172LTPhUgf5yggS5GJ29Ywgjct2fTW2KW6Vi6G5f6r6Z",
  "key14": "nRVwDcpS9XbnwGSkwJULwa9vyrtN3Ukh1XbJRNBb62afZw5XyoULKLZdn4j5dn4vSirHpwHiTcGNqZiJsuVUMyr",
  "key15": "36cP96NAghvDRewXRLTutat7Xq2V5DXZFr2vrXvnYkYk26Szwi8zy6WJuFiLtTZ3KSZd9uUc4asfAxkN5ZHuiBSk",
  "key16": "3F9RX57d8vPLERK14QF8eAUPafCVVk2ToJCtHxzPAJqaFQUvpQWp3VpnfifeXXQdT4CNscQf5YptTntGdwL9aSL3",
  "key17": "5XcPCThP9KnAmgFverA2QVS1BZadMDcU4M9tTBDF8apcdmrUMoe3A7gTT1BipicVA35SEB8Xro5ELNGTXw3CX4RL",
  "key18": "fL2SXQ3eQMeGSy98S1qUbtzPbgL4rJmGS1q3DZPan53vH2MUwNVRgNoym2FVwxyuyQT2BJtXQxNGYaKjdzp8ip5",
  "key19": "3Q21i99N7eW8HfAmSTXGk2Y3pBCjQhosMfEWEqPK7byGyYYGqMZwJ5btZ7NXmGA3QT1nSq2LEE8pEiGLg8xtEK9M",
  "key20": "2YND6skznZYsmxr4RKRc3psntLaWNRPxt9RsjNMQQuZep2QmHyXKguX7ZMJdN6PYXNivymjiWrQr6xro9xEhG9Pg",
  "key21": "4ytwFo7nkfRinqWARb22UcnMENDmgLVuqTFQpjgG1SL8dyA4mSYcBBqmzzMsk7eeX2NU1EaAAW5C9VtXszt9ywPx",
  "key22": "3Q7rxJv1ivRdeUE4XiHWQHYJ3EVscQJamGpGaaRPJZGosZqbckKTj52zBnSkwnPaKQBsDTVsJsuw1EjkJGvGjCsP",
  "key23": "47zzC28KFTp61gZF4Xkebx7Fj2fNpt78yESi1iGiEi9ymtDNGDkB8icwXUWoTr1ouqDB6EfcVuUaWbSMG6JPX3Ms",
  "key24": "5vGoNQDV7eedZMMoBrgoWWGe478ptJCtVkSLRzULtGvVVFvFYMp4RgpGARCKJM2Yc3BjvUYqQmSWdUN32Tzp81i6",
  "key25": "4AuupgEQkvcSJHbthCoK61nVuPfXJnY3HPUj3qvz7C44mnY3RaFv7EDwLMJwdabYRSiH3hzcpmedoMCcv8EtadaX",
  "key26": "4GKGGf68ojsnU5QjighCTbdgmaL7eLYdQj47gyoYeZhyZJ3FnLvA4ikncbNV9WzgYz3RcMY4kFe1VeELEy3MrjqE",
  "key27": "53QyNh98kSCxU39grzPZkTEwCTHqhrJGCwY2AidvPLR4PL7geNVE6xFnzeYuMovtaFLrT5jsSYehfrytWKYxi7rR",
  "key28": "5qHwNWdymq8GsczKV3QbzKNba6EgfTiA6p6WMnj8SosGwyBg5WqF8ag3tJK7qeYcmrvxxpCMa8kNTEcm8wpR3X1h",
  "key29": "4QDkPa1WGKxSpbVStS1TZVcYgaLk6PKXKLNwVBoYAK3eGiEzYF23hn4ggA9nJvLid5ooWG3s8BArqL5X8HWHPRbS",
  "key30": "2QecVnS3yWTTUf7hVuLYsy1PjUCgK4bYdSpaBmZyQsXCZDfbp9Jd6GprAgh4rLiuk243sjDzd4rGWtqGGrSTa5Kk",
  "key31": "56ikVeZMsifm2XmqZKd1TePCHQwBstQrhvrSTUpGzhKX5GBmW7JibGZdJ7wAka2ivSkgXRK2Vu9Dmw7KLPgiFCSD",
  "key32": "5Lfs8aqxbZrurq4cBgZ2KaqgQNqWxEyxfE8ZuxDFHLzk8HtL8w8isGuQm1noB7tYUpoa1zgWrw7LS7TAi8JYKMUm",
  "key33": "5nfue1XJgCNfgiaCHMdLKXAj74o9URmeWfmWoC7JkGw5s1ScCJg4gYsN6K4VuejhNpW7GJ6GrHbQMijCPYgwqYUD",
  "key34": "4fHxt8r6YgVXcwKSkzNaB3j81DDeCiJBDaHzQYeDySFpzhi4VafNDHCNrPW8vssHDpFUed5NqEUBFZtobRrRq33a",
  "key35": "4WGPV1F6Bg3er3fmBc6oKR565g5uMYESEz2kAGyrd5ebme9SX97LR1JjrDA7CG4Rgz7xKeku4de3Kpqs56CjUYR3",
  "key36": "2SZHz1SuBASou1G9TfJPPQpjNxsnNq9VJypK3u3R6bv4VnytbPunZ3spe9fcEraVUXRnhfnRxMXvSyTM2fwp2gKf",
  "key37": "2XCoPdmqgGqpJtN1vot7hMoQszATiGZ7T9bPkTcbJGxjPHtkphBUTDgh6oNmmddZtwAgczCtSk8Dhg6R4EeGBNhY",
  "key38": "5Nx9MqhZTBbjaYZNKu4nBv6RmoNgBXtb15aRWSwyxMAwFwREDdoUnGV8kSUR1bUkDZYGdSVhRdpqdEow4FCxmGPG",
  "key39": "4C5fkXgZuVMGbMmBc7H6DR3uiLcsSrneKbMHFo7DSEXBG9hQHrEMBbeZF8QLYd9CwU8EjdaVYCXPNV6FBJWybdAr",
  "key40": "SF4JSjDfwGNy7icuSXfBArrV3gYCNYe3hR2fyDeW4tewDsxUsgD3iPKNWsRi5vSbCkSxebHU2cVTfRGb1oAHALq",
  "key41": "616noh7FX8rxtDASnLjtWNydcmKAfeD3bnjDtRzbPig8G5bjSL7fUHTTqDbvTLjdXyC4XtAhhLwm3VyupXbNL6i5",
  "key42": "4vMYADXpA9N8dn1GkqLmKvTgv6QecAiaKWZEmRetME56JwFjNHk9N3bqi23vMYCWjdazXna88aDqwqE6TuJbzy4y",
  "key43": "2Ws14VKDCk71ZwHiyjVfpyjeRgUiY4Z3UsRHzZJfa5Y4VvNYM39MxU327DBJD6BU2JVRvJR9BBRHAMQQDtgrtzY1",
  "key44": "5RnJseCXXxqSzpgxTBmqnF7WA1YmzrxxUx28vTi4TXMWXffeq3RBym221FMTPBx5kTE1CqSpGsruvD67t3aiGhfN",
  "key45": "5BGrgdUhqwF5JZEcXud1vsVjPkpXZevj9UJ84AMf3rubzbvNQXM9ihQiErJhgqQC9SF1khY8ApoS1kQUBXSH1Ynq",
  "key46": "3ZYqX8EzGb1Foz9KYrhtRMTUKh33m8QEu2fQCoF35PHx54JfhAgE3ET29898MLykQ6xXWaXZR8pWauU3DhRMF9qX"
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
