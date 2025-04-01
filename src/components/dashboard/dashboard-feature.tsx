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
    "5XEDgp1UddBdhXjY1LjarEmXsGndXpfFvwwW9KeT23Awwf7crewgV4e4993WGt4C9FfNbga4UhhrDarLYqUsTDae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c4k1Qyn7PTrMR4xuQyQeN64ZyjVmiv1GAzong4gcSBMehzGVdjxv9zfSHTp2kJ4dQdEo6y5DkHyjLjoWTBFjeKP",
  "key1": "SerTB1sLsJUAkTvqxTNSaH2EL2z5wSBNNZbFMCvF97a4xyNtqcKFmvQFMmtbFUaWxCg7Taj62sgLYC8EfvLdAGc",
  "key2": "4LVnczjdiCaxriXBwxBR2x8GxY27cHsvxKKS1vL96LYHc37G7AgDoSnqAmM9SzTYdjt2bznWcnEHtW5aiNWQu3R8",
  "key3": "51bTWH6ZsVufsTYVeDw2zdJAhMEeWZd6wrDuCEUoxpMejK3qGHemy2E6XQVdpMnyzLWNwayhDBxjbTEcgwASYpTh",
  "key4": "5o9Yro2F6ATFsFzgixFFVU1mhNJQWQU1vyxXS6YeadLnF8D2f7x1Mg84ekpB27JdTqq8wWdoDRvmtFC7aUXefnSr",
  "key5": "4uJ8iw3o4eTjYsSCq7emSsz78cuc2RMhodkYUxwzXnH79SMB52nw32LxigUuryfwsvH3AJR3arjjghyzqFVYAEPc",
  "key6": "2wDYjhr33DM8rMdddpLV4si5AYwUe365WvdLJh36R355LU6qHt32RUb7deGmH6E5JAJGKQcxMyeZEUqB7E5gK7zc",
  "key7": "46NvfCTU5hpjSCTrPa8ysCj4gKPsv9snkLCwPF8v36p3eBRK7KxrBiFZqScp9LAGrSsoPdtpxNo8cB8eDWU55KmX",
  "key8": "5qT4QM6XdfmhEevvUymknNPw9yc7Nqg6bajLV5JN9K5o5FVqyP9qLbwS5UamXVZ7rZ4LkWRcNRCJThrMLApQNyh3",
  "key9": "4bmygU6GW1YUfmvm4cjFPJLeaAtgdK1VNXGXUPTmzYoxEhn99oVXyRbidEibCtyZJXFuGA3f4mQ4ATdZh8vD3DuA",
  "key10": "3WAzu4HNsqR4WT3ED1teQcNWvhBnW5u3hMkrLmcp89A59iv2QUUbTdqAduJzuJ6AECeBAwHm4Vpqn1nhsBy1MjKU",
  "key11": "4NFpQhohDBjbvhwG6jDWdGH6zCsouSQGTmut2LfehrcemE5FdpMEpREWFSMFi7hk1NssQYhv3RJyRdsfzWEwT4pN",
  "key12": "3mcz8Ax4Rhigw8ifzZ3woAwtU6na8Drx2DQyMFQxZK5ykDoEDsVGb9REThZHnQMMTTQDCkpfLbYmpRkjujSjRvfm",
  "key13": "4RZgSf13LyTwUs9qisrtSLhNFovJ6iSArqYrGJGBWpU9WnuNWFsAp6MfH6VDjWkdWbu9DUmhJ4PTb5BbBGjJFXNG",
  "key14": "2N4zEJasWCoCBdXd4QG9d2b9gCmXUtVtP9nV2ytjuZSVmpLG42amWhzsxTrrH2BBATGenutWpWgpwJAva32xoBFa",
  "key15": "3SRBAhV1255kN1qNstVcivLv3t6xE5nKCpXVyRhjCkoG9TMx1BR2QnWCaDUCxhACvdoZtU1fFxCsgM4CN2fYHnPS",
  "key16": "ptk5pHgXeb2HE5JmdZbx9U3LYmnM72y7rgwjmS4BcqztPSkdWW8CTXwhTBLYJryx3bx9ozYgaJrrDPXRX9TR1Eh",
  "key17": "2R131zCDokoDcfD6qKF9G3nZJwuqQJTfWoLogZfMjV2yW9BG6hUqjhj8jqmDKBP8fnvh5Sp9LhVvHyWv5TFNKKCk",
  "key18": "2PKSzbHiRps7Ad4CSyJNfBkCHS5no5LhG7HUmH8p9taFjS1UEQ4euJ3gqha5AeRQH5idxMMTiQmXopmSTxvhfEnS",
  "key19": "4DzAv1tycVUc5NLafew7NsMz1WJq2jwqg4rg12q4rzpLSy1W1YQgtRpm7NkRJB6q9kZDasc6dU7gZAnomVpDXBY4",
  "key20": "2ezsUooFevTvNWgSYYxfm34xq2uxHWa4AVNJGsmwjEm4w2MdHSWpG5ccsw4TqR8sNz7rcuMbC1RUfEUzmJuK6Jz8",
  "key21": "bm3fn9edqMsyabZ6gbcbTvA8AZ1PPq6VJm1FZzwqrfwfWYpKeHnvDmVLhx5Rj5J1kSVEar6cmFsohkQM8CoHKTE",
  "key22": "5VRifUdJTtWoSRTHSyDJK24ci6VgEpnDLc8KgojaTwcXRPKuBJuHDXRyT14pxbEuWpfzrQtZaZj7MHCv3kshqxrw",
  "key23": "PL7RJpekD5rCqeRbJxxKWJ72rvsueJsH6RWQecp5jbcueNyb3Kre9txeFh1d2uaq4XVkX4xm7FEUpMTieYH5Nzg",
  "key24": "3kB2Ffffv5QghEHru5GBR6EjVHTDTjckJnCmeTtqh47x9W1c6JyKftjWZvUVnDCQaLXcaRhNjcXoy7Yky7BhK3nU",
  "key25": "ne6DvcZQ2wJ5NQLytzDxjyVBBsEE5TZmXCd71BkgyyTkcwAY8eyF3GZRdEdbR87kt2n9zEHZpWgrmPAeoQwYdYM",
  "key26": "8Q6VvgocbyH15tRKNmui1jaDLw61tBASZrcM3ucG3F5EKGBhzSMHgxWV3zNrbnjgf8dBUmd75x8sfAayAiEGjN7",
  "key27": "NbGukMcAzJjDe7sQbeMoaWqyoyRfwsuX9yxW4dGYGWxjVYivwJVCqRmUvYBUbtvaqHnBfpFVpuJ6pgkvy9YxTnw",
  "key28": "66C7kN1Xy23W3kBGWiqmoSCUVttap7djxeK43qYDRvceRvqyoeE8Eot7UMoRVRW7SMePQ3EpmvA37BXLdA8YMbpb",
  "key29": "49QR589M94xLNN19T3wYBgRBvrB5Nuz5PoxGfXTVo9vRpXSj63Ffgg8GKZyTmmku9nggzQHcs8f2TkysVLv3us3i",
  "key30": "zKQEssA9xwc8XdHKvCrikwYK8V9AA8osxDcZ7E7vXht47bz1SwMKWs8QuGiTKGXHYPBM9LJSe7wk5veFVppVK68",
  "key31": "AHQN8cjG5GUePRPpACSsgnhjpVH7Qfu3DTGdnqeCLqtNSSaepzKNGnwMfPA6RwqHWDWykqR2wbswr4KxszrYayR",
  "key32": "2w7k7cE8kuB4mjU2MiRFMya196peFTNNeMVNbompvpeq7B9hKT8vvf2jv7gh4ZRi482YaG1YxbnMThMSrjBSqyGt",
  "key33": "5zxwbVwME6XKnzn6CsHf5RP68qhVsqJ2CcVaL9gqTD8xi4wU1QPrYyC6nU3nf5xpALEjLGYVQTPe7L24D9wpkcu4",
  "key34": "46KCekrovNFjXy4SwZu3htrrD1q2RxrT7vJGGF57NH8SUiv9csfQyziCPC8hGToMubZQKWxkAFQgfGDX1dTqkvRW",
  "key35": "2yZZf9UKTWcXPtkw3ygGuvdKN63maCoHiB97GSAqwZUzWcu1eytArTVuSeezk3Q7QKjA9jnNwzhHcuKfp1uJKg6V",
  "key36": "f1F5oQmnp9XGrDA15iz1wc9wsQQY9YR1MZhx1EcgUoSSafPpjGxVvkgkPPZrLZvqpheFg75n77zUopiaNVDVLf1",
  "key37": "3b2UdpLFKXut1Rmw16gGLQm2GiFgHFJsspayGXxE1Un8nAyYK6xYsayjvaH9US32qnB2WNWgoPf1mZTgKNpYTNst",
  "key38": "5cvicC1b5nfFgB2i7tu6PK8CpxAcjPWPvumUvdjqjVfaoXbVdGKm5JtiV2DdKSfFPEKQcxFWPMsLqFTRy9rVChmi",
  "key39": "3gvuTTUbniNXu6XXpraxC6UuLtquMcSkHcsHBoP7Vz7sgY5sEkLMKvcSkuuapm11gcC6Asj2yF8PHdJqNxyRQYiG",
  "key40": "3Lfoc5cAL12WZwipe5H27QGknKzhiFqEa1GAeYueCSoBNxWJuGtB9qi7Q9yxLAie8VFTz3T3TPMt3jn14tebg3th",
  "key41": "3hqoyZXKrGZ885ttrJrrU9nU3q3J1MbFP983n2ZCfcj91ceTUPy99ELjVzbGQMGEXK1F8CrMyHoXpmaQw47FHQtV",
  "key42": "4UVa6J57Lw6PqM2e5Rs8tmQ9zkLPTkp9UpCvJ4WkztVXuLVpDxhrVwQZcVHgcjtH7DtxneYmn7eQLZ8Lq4pmBJ8E",
  "key43": "2sh6piQWLxqzvhThz162G6LwVH1uEG3Y62gWMYea9xzJ6UdPdVhAydfjWuuradGFYmuvWRU6wDv8j3fszVen8fu8",
  "key44": "2e1dcJQzyv2BcReJ6fmMTcYCcAtXGP6x9nKCGqAXHcsrK9BauaFygnG7735tmMsBvmjJMLSsXFyMNGPwjifepfm3"
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
