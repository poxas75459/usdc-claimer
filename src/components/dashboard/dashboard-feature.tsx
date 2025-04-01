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
    "4Ymu31mpEUwi2WsaqokhqyQr2w2jcVLf7Ra9ir2DjLTSSaviU9JGYpGcgMQpLJ4r2okbWZ36CPJAf9AYPy98LrEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tZgwBQavuMigrwPGad5EgemWG6rUcMfUjSt27WBZGHdcEAccQpqkTgmyqqqMifmAbQsPrTRfkmX1Jfd9HTjsfnc",
  "key1": "v1REo9RrnnqNT6AH6ZzvMMmPFXmTw2wRL6cSGJnEjd7Z1gs2cbbVg4VQMAErYiFgtg1fxDFAbtFcUkTNLATajTf",
  "key2": "4EDSYzhRXWZ6PjsCxzkdNSkNbrbDhB8UjndzocSERKwQSxHFepjqaFwFeicdXd7h2JEqEDWvE73ZXCYLqwEDJo6N",
  "key3": "4YzUJ3Tsy2bn9id7eSxcyEb3qwjiwW8ockBcey4zLyQjWLYNDoq1Xo23C519BXNsVqSwXWABZbk7qKNv9jW79s4E",
  "key4": "4B9CsC6783Q6HraejeJGWLo9hsJGy98K8VKG53Q7bbnt4tLBUgqxjvvXYhuLpLfid81H4LVMDSCpEvHSM7eeAx97",
  "key5": "3xwAjU68K6jZngGVGzjxwERNYe2geY6h13ocJbnHkFkft63NSbdJvBUTdPzRVk1iXUiFRq6Lsw4FhbJh9UxQ1vwt",
  "key6": "2qT6m7PsR4KfmUYkDmMScBu92RHTXiiZ1vReRh7mjSvHy4b7TWH1Ht4gpGh6hcAGbMSoo5HJZtZWSmqs2akz3x34",
  "key7": "345x1gELP1KG8Ce6bhjfm4i7jLNkhe9RAnxM7n5MzssTAC4ECdcQQqeq9wLniS9JmEFZpNoPcb5ptaw33TaGLCku",
  "key8": "22bfwXGGPGgYMzrjECbyLJ6t5h65ZPqaxRScPBn2EEXmPErUpVg2meRDYH5HsqbzbM1xMqgsL9BdeXsokxco3ybA",
  "key9": "3nKLjBQLDY9pW7hMWJE1GiAkjPEaeFYGZkjorPneoEdjuAfT6ACb6gpPb1PYutBRyQQ6D5AHXA6ydqHmU51hpqhG",
  "key10": "2eZ4NExb3oKD7v9jmbJ8WCS9HCctkV4SKLGf7R2Qr4E7KDwZ5KnGXzd15u79QsodEsc8zj5nwvqgS4YeJmw8AqZk",
  "key11": "FtnuwmZiDYTeNEy1yWQQYQEVXggm57m4KJX9DmoqkTHiygZG4UMtbScSnF4yaTD9Yj18oSdPNfdGWb4wo8u6t47",
  "key12": "45WdqmfoFXiPYAmMrQpqug2s2vmb2JiPnsqSQVyJ4TfN83JpVQAXAKdTE1KGLU9ie9dRTnf38fn7GdBtvRuRwCNG",
  "key13": "y2jGpbu3Atmr2G3xHp2qmUB7LcuHRznh5vs3n2NhgkCiRdkj1jtXgWNF9ZnJVHonvUed3uNxgwoCY6C78WmhgKj",
  "key14": "4AsAGESX1xFyoFvy82KcArjM8eox8ABKS6Da7KctRr128JuqLs1q6xYnd8bJS1UY6he2cYmt6mfWSC7XdiHtUhD3",
  "key15": "65GG6y3PiLtRUq5LDmX6V3Y6wU15kd2aHynmubZzhtoLLemn72R4Fm1fhtCCRTHSz6RwhJnMXEdzZVpAGmYqbHrX",
  "key16": "w6YNQhaHGzGGjKJLbWskGxTw3uKdxSbDMNbc127iTBeLc7mynHFVxgorrHqzsZc2QcvGMqyZon77m8JFVt73jZN",
  "key17": "5gru737fna4wziFofVc75DL6cBwYHz6TqmirCpEq3jkCiSuvsx4NYPUs1tFxVBfTpMUb44tJRaRHX7XNbWVpQB53",
  "key18": "4H195QhUVNKKLM5osxP7mijZkgeJ6MHJYvDpGik2DxbipCyaGgXmtK8gtHUfjnkiSTFzCnAdXzrcV69ni3MbZ6xG",
  "key19": "piKLpPgFQVCHRRmf18211bd55aZh56ghVTvg1cGedAe5AUTs8S9ZiAkEsyxjpmz3ZuSJhZqaoihDXzbEwS4Tfrz",
  "key20": "5FLgz3dfdmKeeoxaSPtdq4qDD7w5T2ZSs3AoxxvcUS4tW2T94jgvaVqaYSZatTkunNpRukAcGy88CMKqb6e1pdwP",
  "key21": "2Yb14pzam3EzFYvBKNwZuaSaSAokjm1idpFcuxCtdnpkU4aPisD99obZPxpj7wk9yBpH75c9VxsNpC6sTxppP2aU",
  "key22": "4qBp48AkJ48LPquXNVHZNcswYV994iSBKaQBR8fPPhgHe64t9QZKQWP8PZwXkJhh6S1dyYPX9KGMPURPtv21kozp",
  "key23": "5UwzWrvk6ZMezc9UfPxzYjPhReWQCD3NjLgKxfeFp54Q6XbZraUtGtnrSgUAdZCtqMXUXNdFSrKTxC5PtXgxnWJW",
  "key24": "afMdNUSSXn9AP7vgaUgjtFMDEB5Dje8h6Ed7XBPCcuCxWZjeoYJUdH8GT2cpBfoaDViqKwJSyojtyfRiCBShheU",
  "key25": "2cTAQA7fw68evJoKEmb1VEBLiGda9yUZM8RJQjR4zWVTiAgpqY6rm3RzcoDE5gnfWkSVKp6PeoAX7jdcZxSLcPLn",
  "key26": "XGGv8UM1u1qByh2VzjKLvb8TaqKF1fzaUvKY1DFpi6kf6QhQyaMpBwsjfkoQKDtqVCgbgvRhxs1FhS1t6ZX5GEe",
  "key27": "sZa3qaAiNkkcEoASx4UZkKDJiEX62DqhdaHE3FxS3yRsb8CNX2X6LFW45JsCttWWHsieKbZwMnVv9NBzmn7KcFG",
  "key28": "4xouCsBC4AhBMz6LBjGfWyPmmq6uA2XbTCBxSPvBNP8FwoA5ceHBRFYiy4UL2bG2spYWxAgMsD7dXabBJYRpJoYn",
  "key29": "4BpCNcXY3KBQ7AxwMdQTERMd2kbRk9Xrao16iUnqATicQRgTtop8ew52Ek8GQah54RBszKJEmRz2j6n3ZKH5t1tY",
  "key30": "Hjd4euAkomZFDfsaZcKCXxGkiK8SSKhYh7LatAGg1HkmeS5TVQ7RpWHSswLJUUASoKAAt2AyGU6aA7sV6aa3Fhs",
  "key31": "2m87isqb4DzVyqQzja6yAj2bQciXvTFNCHWK6etqLVLL4FCeC5kFF5ixfz6j18DgrWqKx1StFWknFHfX6r9xCimA",
  "key32": "4Y2pVSrw1XGkcoGVTcMJy8hqCztu1WHRKM9sZbAugdPg9uyNKcoLzLaVo3AJdUYxqz17es1XTYgCAmaAzQBVRffq",
  "key33": "3msCENztge1NLS3pqBVUb1j9tANLdMrP8Vrwh8kyy9WReG8NZwj9RCnoRwz49Q6m1HUdZCL38mA33vDNVv1wSzG4",
  "key34": "3TJfJZaDDkaLXLfdKDWqeqqSxWoCmwcBAkz526Z8HNx9UrrDHT5Bbm8vf9NxDRsoWMMLtSA2A16xLJGbSCc4sxZe",
  "key35": "3PCXH4U8YxbvHBdN4rho22RysPx4qyecDTU8i91LK8AWhj7cYtKZdsHHoG9nBgLffaz95QpPMUQd8iAFkAKiSfUX",
  "key36": "4wgTXN6oRZpgg7EiuzC2DisCjex5SKW4hcyAUJNDBHTL8ymk4Ycxo5jWA28wTt9a9c7BKgPbcfg94ZJ5tNuvM6GQ",
  "key37": "5swstHixwqxwZ3DruL57ikCc1h6stz9WBotQkPGURvzgyA6A1MT2rL4ieDeBCKtRZ4ixyK5kmk4DcjpVhF1zhp3v",
  "key38": "5o4986Uv4xhNLVewoL138ByDuHgxZXsbDpaYUa68EpJXnvagtJ5uNXpyQCNSkPXr6GyTjoz4r6b9w35UzgSgGUJj",
  "key39": "4usPcmCAMJQ1a8yUuBJcDCAVEhQMHPj89kDtpJa3XJBtvz444DXWPQyeQT1Afz9vj2TKgindGGesp3FjAnUEB8sX",
  "key40": "48q2hsqd5AqdC3jvX1z6wsfoJ9CrXfYAxNbpqM72m3nrFqsYEhee2iEKfmt3vsDxcHy5DzCY4yGHc5NwrX5TNXPh",
  "key41": "4RiWSPyXqV957rHJ8iMre2VNQU6cX9c9uzELCa5LUZnBEmmJ7AYDPMF2w2VxkTjVGmzrM8i8miXU2XQy92LX2k1W",
  "key42": "UZucXbddY4Ju6kS3DUbJytdHojhio7KR5A9UwX8PABzJgTr6t3zyuTxsuSi4shH5ovK5RxFeSxJjWbg57QwKxmx",
  "key43": "2YxPFQRfvefQksgzBVi1U1awt7saVs8ZZUrmzfxjEQkiWuPH7mNniJfvoHGXZ8jHTMY1tim96XthWk2bbxw97LEu",
  "key44": "5oeq8aex4DvKeN2kKQMVCureF55AM9j6Yy7oKJKbmJVPT97Bc7ZAY1jxmFKi8qY9yMQ1VtADh5FRHz5HmApAkJdF",
  "key45": "dGyZBS3dTZeZu6ibv8ShmYnNtNuiL3v4EE7UUaLbjeUdsu47f54NL742rpYMXWHhSqRWMBcY9UomaJTLjUyee8S",
  "key46": "441pUBMXYfw2VT6kHnzPLeqQxexZbGM9fVvU8fKbKMDfYrkCvmbKaNNLxs2BVDDbCFPHP8xPX9dDvAHpcDLLxr1g",
  "key47": "HX2Agcaifz5eXuZECNXFm7kcevVbUgqV77BS9NJ2F5BQwm8BjeiKdW9jJQR3rbQ6Sc29QJ3gVq5AzLShcwzM4ho",
  "key48": "31MwayK7vgNocgDZ5BneaEY9LAr7b8Fbm7TfshXCq9LgZkt3SeBXAvQbv35HgoJsAtup6LbKu4u5PcQHy6odicQq"
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
