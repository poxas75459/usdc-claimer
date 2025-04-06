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
    "35P5X4phonJtiT32YytX17diCsRvbieGESjNNduJgJt1qrxdm98Bj2q6sDCCyDvYsd5DNM61YYQRK1vJ1ZiuJsDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pbpRVKCqYPq3nYH6FZfMCZwjWFtbmBUF3oYpBFMnvbDaVXTsMLysfkCHzmyqJ9gNjx3y2hnR2La3PvruFFFmXzc",
  "key1": "34kq6NpzxoeM3RFXUEeyUDFcF1eAdJRipLdaFTGGzLef5hGGSxWtuptiyFEEQrMEmba9rfnqxJuVgJj4LWh4DNp4",
  "key2": "41meE64B1F6r28nnfje6KyQHVTJZq5817DSWHwouJA2fYdvU9TpVt9MLahSaCtozWCVDCKL3uwbARnW8Bv6payHN",
  "key3": "282YqNy1pihbyLgGxE1J3g6RFNP6k6jy6ihAUdXaWxeu4hoH6riybdBr6pE4pUSxwsMZGBx4M5dGe28hoJ9vzCQY",
  "key4": "TooB2dDMgAww2b9xfbi68guoGv2sArryF4fFvRPKCa1Vje5PuE8wc6RYgeUym5k28YXVh1Gd6rH7Ww3ZZPHQVom",
  "key5": "5EnPSnNUemh56CxEXcmrWvYB5Ry4Ar3So9viXJvfcSSCZ6eHNomKyh4yz4y19kMjGhauUazFZGyTS37BMNaH2F6r",
  "key6": "4VgMmKwUrJBGGGg5kjSx6KQpwsNDPsTcKLhH2MzpoXc1TnQ3SfQfBo2cv4Ak4nynw3331mJvv8swo9CryxrE462j",
  "key7": "2gRtouk4QfqsYojPc5ojMPu15VwJM3w2Tbtj4RiZQtPQD2FFW9Fc9UqDogtsFWnjm26sWCTNmTD9yYehBQcLmaJb",
  "key8": "3UgR7y95A6eFyc9SQbG7YrwqStYKxTzhu7KP1N1ZEagZF1iYJXw8ZEs2vpHZXtmjqm758fUoJraA2kNK5dPhmN8x",
  "key9": "2KASzh33ZKtBGU8MtahWjdMCw711sr99Co92fU6L8FFdibkehSFqnfBfWozy16sCWkJnNwo5zvA47zn6y5ssUGR6",
  "key10": "Mx8jnx483NQEHYweQLjTeTA4t3xXRek2nGkG1moHHsibHV43v9hqPdBu6G4zDFfbgHMfLcHy2zjK4sokfzdSeu1",
  "key11": "y89EJdMvKhPV1L1o4tjQfFYCB9WJum8nTS7szokYyUNuKp4DEP61QzvDGe3NcNFzcoRnPqRsRJgd2RyoaAYfZKm",
  "key12": "2tJxyYvGiMFZemmBJUAmQ3uF7J1mth27p2w4jtRhuoV8ndcr9zsJcALb38rgTadPYY8q6mQB8Tv4Ywo6ng96uKLv",
  "key13": "3ZUEw7tXzMb3nu73Q1LxmQQygJMuSYBcCeyRKPpoy6GGjWDZFEYGgLcLbEfy9cewsfyaigx4nVM25ohfchm6dzVv",
  "key14": "5tKYwgvL3TNsPusVhHtnbVcHofFSuMuRaVUG5ZNeys9Fd8RBMQNcLAxYq6khbufyX6SWiGCv7ZUnTujmckSmwTMb",
  "key15": "66M7N6fK8hyTdojY4iQ5W6av2xL4bg7BRHQZ65gRhPW1egP5XbZcJp5jTmZXiUUZ7HNGdYmpsAR1YRh45k3zLbRY",
  "key16": "2xNFAc9xpGvZENfzJFvo3batfFdaeN8JC3vSRWHuaBSLWpsf3WVP5TzYzV2vKoBqJ3t4Mcgkca3RQm4HYUthT5zP",
  "key17": "4N4MziggpayLpDtCNC8aLTjEbyyqsFs9nudS69ruzva6e2h5pSxdeZnC4Bhydcf6joVW64v9jgUeGWuyqQk5tEP4",
  "key18": "5ouMVj9WWB3bPEATSECzpXqHN6Kvrsma1DVhGuiceX1P83tm7NczmJtf2siEkn5riER5dpmGq13Gf7moWvrLfw7j",
  "key19": "66jWQUXKJTop2TAnMLTFva7MURCec52dihGXcn1ZNXce4EEcm1A4uWAjG69K3EWfSSXQHTGnUdJ43ca72WqNg4bo",
  "key20": "25Jdj1GN4Fach9CUx7hep754UV3dzGfkx2G32f72aZ7DnUkEKV8LLQHw3uRYBPo3BZqD3pP8ur2edrbdgXJwGqGw",
  "key21": "BPm2NiGLsHS7PBDt8YYytP2w2PfSAJHfC6YNWBrV5Jd25Z6kbDBycGh5TVjyqrV7LGgf6FseMYHHDey8Tzu2oSh",
  "key22": "5PVD1g1dehdFYshhvV9BNrmWwYzoRD1FCvCEW93yhVHd9L3xSJK1Y1cyeYDWGv5YrBKMQNGidSmxkcUfPm2QVHHN",
  "key23": "3ryvrdFaKivGFA88Eg3zAUnAfMDYtPSVkJHGNsfMYQncGLrjg5MMsrwJWTe5ooznS8SA2Wr4yFSvPbhjkUakLbbS",
  "key24": "2Fj9QM5S2q5yge45oMJtiyg8x63eLxGHBdk5knEhfqmPYsZ8tQAXXdp6FKYtA5jkrwGaFjyFG2XqdCGgGpWsfNrJ",
  "key25": "3wARVyCSR8qtq8D9qx9yup6H19jJuu3MxfcWcVWv8tqNUTgGq2wFC1GGum9z3toyF5MDehBazaoWUcE33spqg9Sf",
  "key26": "3FaVozM8CHRVvcDQboJkuazjZ4n1sgnAtd6gAshbGgsQdWGMJqzJaEtKkfXitAiwHdeXhiWnqSANvBGuYvSvyzhM",
  "key27": "5pQTeMKjXowwDS1scR9qiUKZzs7uFd2PeSwowP8yCXkD7CoFGMMeTtWpmofZifNbdoAwth8pNc9uBdkYss6JAWep",
  "key28": "5Qgnx1ysgLUerX3udoDQ8P9cBumxtqtCa5cfYQqtcofgjZ8TDtXtboQ82vPBQGwQ767JSexrUdCyvjSZcQ5CUmdX",
  "key29": "4s9qyVs7FB6BZ9dfgXX7D98QNrSRubWQhnFekmDbLE7Z5AVKhxZzBCAkyD3tz8GfB2udwdbxFV5ENNcPwLFKaLSR",
  "key30": "2H4fCqT3g4UNhGLqjbFXnMcgiXkiRTq5dmyif447pr6XCq9beiDPz7dX2WHdLCrmbMoMDLzucwy8RC6v1Xdbu9jC",
  "key31": "3GEmwdWyWgUX5H5onGcVFSY72nyXhmJanki16T6NxUH92XLNw1YXoC1q5AD16KRCJxthdGYSkgoR3KPVtVjfWJku",
  "key32": "21SrLRe1JqHqf7zqegkJHVwETFBRt3DX3549VUcKjugvEWhfXaGZRivcXaoth4ji9GXCofTEiLKiEWPsk22Y1Cpv",
  "key33": "2cs8BCyhNwaKb1ZBhiG15xCQvZhWui88MJgGtDQ6YAiVGNHhDtJqht2y64973KFPHRkpYdeveAfWnvmcpvMW7LRb",
  "key34": "2c7ZfdRid27wwmzjNYS1VHFiL3VEdJtgS6EiPcSA9ZXVshY6xtXDJgLaYh1xsQ3xFLMzyS1n9sytbXqYy5GqX8vu",
  "key35": "3N7JMQbcmRh2vNL9PNJhXVbwmHciSnqgYbk7fahJpcUdX5pY4GcJ1SdU4oDM1BNeUSkcDfNGbbkF9wG3iey3NXGr",
  "key36": "64xBHm1jDpCVCER78UqdNjPpmyikUuzVfCJEhrV6kJYGYiqwrYvhggt3AUBDDpQtX5NsRc7SF584E9yjajRKCWMZ",
  "key37": "5RSFw8bJsYEakMUeX8wXVnezZjRqvKZLMQQy9ngK4GtAbU8t4zqAArKqM6DUwQhNYUEtsT5thc3oPYJjdPT8vgpJ",
  "key38": "2R4N2C434NbzsfmDppmuQ3MuSe2XnA7GVw1qnhmNDyZ51bycj9jCHLqiRBReKWAFm2auHLrhpATEAHBRZsuoPsAw",
  "key39": "4fEsgiF2e6hTXTSbm1MqRq2qrX4RFCpfKuQz3LMCsNw4zftXk9gRzqbmfDSDqDmFtBvz2c4NoK35ouJXRQUTekDy",
  "key40": "cPW4dz6BFzh39dS1FqnGhjKYCx4eaWkzBbanj7urdpBPQgJzHrSNrvkcN6K9wX2z7gv6H771K9x6VoNoFnFksgN",
  "key41": "YrBKgNdSuAm3n6fd7PK2RDQLCDMgt2mCoktmtvcW2M7VZLFRHpcGPWoDh7W4BCS5STQNEhoUGNKMYYVCtsdCWCe",
  "key42": "2wAz2LtKRMvYUEEfiEUAeyf1R9zgnc3CVeTihcTF7yKW1VUCpHfhMj176VEtEcyxQRJ1aiWG8m24L8PdA84SX3M2",
  "key43": "XA4B1y7kNofsC8cp6nUngSqzPPS1Dwqw3KYAjwB36mmR32YfEHheW6Nee3tDzbAetW1FJmeBH5Ztfzh6mfTvyh5",
  "key44": "4MWvE9wxTiypoqkoyNjH44kXhvKjdxMnHAksZN3Rkvdv9GZFZyBMRuwsXXNGHh5scDMYWms1xAij1xAJ2PxavzLc",
  "key45": "9oTyCQSGFNZMaLU7crffdMTsG1pNiMuhS6wfhuSYgSrbhdD68CWwqenhmiMBpJecCkm28R4oJ84oN9YAR1pTK4a",
  "key46": "3kfMZsrv3SrsAheCUv5Bt2h8SfpxnSBfjPBZVh1w41tXgnqmRrsQcbbUeLN8PpfxqYo924BbBFUm5E7AoNFztkg1",
  "key47": "5UQyygd2eLKhDeDmKYSRKMzc8ovYskbFBL2D8CpRVhMqoy6J6rcsDiaZPiS3Tjcu2pTfiAWvfyvwDTApZRviEd1Z",
  "key48": "3vigRKgB1AafjVKjwsrtnPewdvYwaygDDXFLWsbPrH4AGdvT8YA3Ks3SqTMWfHnRMLF8fbZANHw3Tf6iizpjtB8J",
  "key49": "3esVfWhH6FTfZAJDdfJcfLiEVAq4tMax54CTvjChUcfezS3Wyb2gx5y7JpwcVFeB8KvZz1BFZmD59jspWLyudhBS"
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
