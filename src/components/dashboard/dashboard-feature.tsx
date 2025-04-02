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
    "2Gr5zF8uERgG2eu9iRGzHmC1jH6fFtGPBhqbVT2pVL64LexFBrpc6XcrAs7nLqvcNwjYRrsZhpn9z9gXWg8ogkB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SfB2YRprdVdeETnv9rVq6hhGMTj3hHyDKHs7s4LnkJSUFuwLUJxzXtQAH5qWFdgH1GHFfn4hh4UUwr5452BTvdT",
  "key1": "kgBda2z5QTem9GumoKB2cH5io8tHhA1qT9XVCy56HgWrpzcnFQ2qQMnQ9rDCuxznQMcMerJJLzVVzqqowwMnYmg",
  "key2": "MGG5BNU92BMTFhNUFA75SEsCahAmRf67MVTXMtyLVCXXUpkXyP2whZGuTmAJqCeHTZob7KpU4H655F9S2yDVu87",
  "key3": "4KQw5DHCUJeb7qUDJ7MatKNX39spmXQHarQZ2MwdjM9y7Tc3sunCCmaiVSCDoLV3pSLdLmKSB32SY6XTfKk8Zdre",
  "key4": "2M6QY1JCsf4PLfK6RvTky9xggQCp4PKHQUP9BppvHAKnotnPY4ynKvrfjeNV4oUZ2aibxtFnNthGZgrurHRtiaBK",
  "key5": "2rTHE9Y632ett2eBy7pTejs3CvLPdzPu65YQXhuJmLdpkLN9zCywqzeBDRoCmVLSWBfyGFi4wjob9RHKtu6QMMnd",
  "key6": "3WxPLCo2X7JxENxNUGpF2suznzfR9fef5PYkSJkzKYzL6txCoLiZ9ubAmuLLn5pcgk4PMKUJfXNu6uedkUwbd4ir",
  "key7": "5GecjV8dXGLNrd5hdWVpmVCQrBXj38ovYpPN8VzfATcWtQZpjHo26iug9RaFvmQBiqCS8wRh6gMVSeJbVmmvYtSB",
  "key8": "5v19VphFePjmJT9NmVfHBRJCLdGVWCHeRxB2YQH4c9PBe9rj3C8qv5tUGqiiWofZtV6PBKXFHaBauTi2pKrfE8r2",
  "key9": "2h4qpCXYVntKMRUdrWn7f6TpR3oYMs8qmN8fZrCfWEsgLxQTLzMmBY1Zv3TDDc7eB9dmchS1Tw23qDRPYTTTXNJp",
  "key10": "3QiGdqfoFeuSBFT1Ab72nAGwGnevhjbydyJJN35bMtNwSqHunRJnRcJ8tNT4x1SpkN8SaQ41zjUiQJz5zkh8dNg7",
  "key11": "3E15JwYGADS6KYFyAGnGZuwv7ZtgKoBaERH5rMYVPARMYNH1jMb1CarjGo8VW5gHxdZ8sgDs1Yw6mQh4HUYrWD5m",
  "key12": "4yFcU7hVrijetwgJYhRQo3XjRQw44LtCEvdC1wkuqiDPkGbN8rwcafrtzYxB5H7vzCMkPcEfz9kqQssnkzs1Frgw",
  "key13": "5EypUWoAczf51Dy7BA9svjJR2CArzE3gySudVXrYQ4TtmRmUsQms9h6KoSNmMAZ727PV1cQtYCVXVEdWU6c4DLo2",
  "key14": "qdZX339tNE7XKkCJvrBivNy5uTZU7thNiGvDBvCoV9keNL4Go23F8hAzK26cr5sK8Ma6u9t9LFG3ana1tKJKrG8",
  "key15": "3cvH1kv7KRQMHSjN7xkuDmKHcpNutKoHDeK1yeU2Sb2xninhg27SjzJS7AcXFH99AUm4y1CFBmZu1qwTXsaFggkd",
  "key16": "YvwKUkfFuKHBiXqxzHFxbtFT97RHMc11JsRnDjm14P7H3FTKQUjfzXC8mpfQFgus5KnfTHAP5FAifN33qPLUarj",
  "key17": "39xqH45rcuHAo88SqQDpaj7bJzz5cN4tASjk2SbsuXhEZFwEyNjtZqYcx1uxwpip5frTDqgN4JFU2Vx8wKVmyDqx",
  "key18": "nECWBNZ3ppaAyp5g7Qqmt2mL3M6XbCH3Ga7CC1iWayQpkFgQwhtgsKnjyQmpsybie4VksVfvUNHPh4pAXeMnHDw",
  "key19": "4RsZWqdZhKe5XuhTVPxxS97czTBQ8rG9aNdQjdA7wpzVgoih6bJhCSjXHfGHnxSF2NgjPXdJXLj4uSnXqzkCXzvJ",
  "key20": "458iMUPeKhhHBCP4avPH1AyNcFRkzUCCwyTpyAPYGmGNH7QcXQ4uv5Gu4En8MLwtT3t5ppfszy9LAd7CBzxQmpvE",
  "key21": "5tLifmVXPw2ckGtUX6EYD3tSmWEMjTmaNbpRtiGKqGGrJf1YkgtdkPKdfbUqynQgXfyC41dXN2MEf3xMY9JEaTPH",
  "key22": "PGNyKVkRQXUmZYg1rGqnvTTZoHHJUb5k6WvjdQ8ok9wfQk18MscpoU8c1T2YeTWV8EbdiNvG9VTKEkgSwtdYKmC",
  "key23": "zb9wr2L7SnpTiz6QP4mDg4aYZiVchMAhwof8gnJSw1VnT9sNki1LyXrMaKzZPjHcBbjdjR4rWiMy3YzVwXhqVAc",
  "key24": "5JFJwWSDUPdktMTVvWYRRSnGMBtqtNESkgkfVHYHxgL6oPX5WUhNYiTKDRiCZZKeZrZ1K5CBNcc2uyX3Zc7rfikT",
  "key25": "2fhRs1BiWdxLA3pD3pwpNBjZjbHhtCDRujhGxj1m9hhewhQ9SzKFCtMywnTyi8MZKHNPpokAZdH24odCDRzFxLpr",
  "key26": "1nv87aw79h3AQTobsnuobezk3eqBW5kGXULp1eJGoH6ZcG5zi6hGLR6TviA2RDGd48gxCMJXtZx38KS3viCmpD8",
  "key27": "3FGUjJDkfbgwKYjV2Z1SFYbw7f3CWqqqkNxVnDSH9wJ5d2GnTAxqAb2mFvQdNeS4dLaMi8U526kQVVxa1UXi5efs",
  "key28": "vYDubLhAj3kXgv3v59xmrHpX9oaV3sJxXEDedAJXPxPDJky3Du1XZ9c24jtccF6znUytjKMMnixXvcBW8YARLmo",
  "key29": "4txe2tNzNtB3BjiYT3f1nRHntit1URLhGje4ttzpAnppDfgsdw8wKCUjGBgpE2dLkcaCm3hCMUQiE91gdMBcZrEt",
  "key30": "5Fsvz5iE7cCmifjWgKPBogkhQgWyURrcejWVV6S2SPYEUpFwTJ4prZrycArtqajJH8J6LvZPAXbi9CRW7CeK2Np9",
  "key31": "39G7aPiyN1VzXn6BNXcE1Gam2w7NDNTiN8ugF4MM8kHP3gAWh8sfiok5tJ1WzSLfJsjgUgWG8qrXAJENhQHfTQ1n",
  "key32": "4LSgSzPCJdtZZ5arH1yA4tshksw4DrjrxLf4HhGt8q9kyHFqnVfRn65xMdY6ssj5Z44y8S9dNhCyrCsTEwtVpUG1",
  "key33": "4QvAarkSoJLJsABDg2tKSqAcLHygK6zVKxx1jjEYyz9XeRMcsWZV8Q4A4rY4XgDHzU5TngX2FVoZsgHPBHxwB7En",
  "key34": "bEiR4Ng8jrppDqzEh5BufjMWEBswHMrhzBbc1Rm7qdk1GiAuN8iiHicbmu5CtWi5K4geJpiQyAE11qoNasp4Hkj",
  "key35": "3D9gJTLeHqX4SfXSyTizmkPMKWutYfW5cG3ksxHhHmXmUQQy9CU1FTc7m7u4VSjyLpuRaeudQdpat5MeTBRx3gFc",
  "key36": "5PZx9RsACjZhcFngxTjEpzRy7A6VeeLcKUg9ix1DbHSCnKruCd9bWcbcg8t669jLHGg8mdNBVjYX7DHGg5LvEzzr",
  "key37": "3vaSvQAxFEZxKRXARKBTCdKPkW7iEqBgoi9hvTKRkPJBd5yLvYyPhZFMRvZnG8NhptPVH1zwbRCEqDt4DUxqnZMf",
  "key38": "45biBK2NnGM321KiGZ7PWT3mJy1EqoFFAcfzdHKSsTM55zuzp2TKF52LGsQhTgioj4jPt52omCSDt8q6UFsS27ZN",
  "key39": "5UTJ9hAMeue8ToxGoYRtpXqVsnWF5uBc3XNVDDJeYUsRJQ1asmh13tebqRNau8Cqfd98VhbW7KjSad2ze2GLT4aT",
  "key40": "4JFhjf7d2jxFUnfmuTXL1K4bpiqdm9SePGjiUG4hf1b9P3oD9NXwoWTjMB5oo526zq252bVQH6rdygLBX2UaJ5Xg",
  "key41": "3eyXeWbGfbRTLJUA3xPR7i9tXCPkqGKFBV4PqSpEa3h17NgnDwZd1LtbyrMdeybvMTz9nnhqhzMN8dvLpD57ifBB",
  "key42": "3GX7F11ReBfyyZ6KXyKc27jehGgnh82EogfT8idh62CwoKJ37DDX9tVQcUbu792mhnLX4G8RSR5mCLUNJXRrDaGV",
  "key43": "ChMk1LchkTkZmjU9PXhTkX5neWS9PUqtv4HMMCv5QRFQxeiYgyu5QYeHxiKXULqmkfbCRK4jSueFGDbCWDgCKJy",
  "key44": "2ZELvRL96DEDiC31VhGVDXLbjrfGmBpGazHRRRMH3WcCz8AzvwTj4NgDezoFzH3L1BT33SZgiHcWL97NAjeNyw13",
  "key45": "4W69rDMZ7EnSzrps2vMgF8MtuVRbfsoC761Bm3iuiuc6QfG2DL2GfdpSYTiMuNQqZ1hZ8uBeARVPHBwnzWbGfkbq",
  "key46": "5McCm6Fqfsn3ZHuYyBnf3YKKERxMYQUBoVQN4c3j2A7ksCeCkyh1Ghv9tQoNbbVDkuJYpYp467xCiEVfSzAGERkC"
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
