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
    "5sJMoe4Hj3BaFxovo6QPNVwBtmqS8y63tuibjbdVnQCQ148Cn2tSZhjLFHasXHNaJAbY7UTreHHWDapvCKXsz6cp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m5TaLixHknkLRFX67zjgtHbKqFzZ3ynwMoNA9krRBN5JoqCfGyoQdskhQGZRbQNdDM1jvDFvn2koxfKdUQ1bTxb",
  "key1": "3HHg6zXuMasPZCfPSXMUjMbZEyU1rEZ1Qh3XVkGZjLNnC3pVjMPk5Cy8Cw3t1sH5jTzjbTKv3KKoq3JMbPL6rJiN",
  "key2": "3YPX83ABjByq1oFsGeT3fbAm5HeYeqwRDSUs4iXtJGTyYRhwF6V1ybGNqXLzDFhBj4ogzsFsttdVqscQmy6UyFpJ",
  "key3": "5H66pYAgDnTPXteagcvuUEAVaTyoFqdmYBSn4mbwqhKsRxYfjSsuu7zEHnSHcfXwizBToUFjC3RbcNNzULaqcNwc",
  "key4": "4maFwkzHfHW9c3jcek6BvJQSJFyVPUMJ1xzEBiJHgwjtafdvTso11zjhZTXG9QRT4huJTUv2NDuShLjaJpKquL34",
  "key5": "2ZBFi4qkNiV9L9epAp6wMkU8UbHhmH3iuoNHg2V8dYDgTpkf55ZCNVFpu3vtz4X7dYCBMbPxitMdKigof92UASMu",
  "key6": "3VbwW3rPxSNVvZQjB5kigymSF3EoFc95vvLeuP484fbT63rZQ1UtM2JuV8jVc382Kz6ZcFJxAmXj3kPsHTVMYUFY",
  "key7": "2AZbSKoCcA8DgKXosZK1ckebbsCy16XNpZPwxjq4oxMCmsrAeps3sGSHBtUZZgWo67tTnCF46sEn5EL2t9MtFZYR",
  "key8": "66pBhZZtHe8Z1e7DpSxbSHAnP2Dp9xnSM5K2QkJU7tTnu2cLmBNRwvvkzM2ZGS3gtprGYAgEBNxd4rAqjr43k7oc",
  "key9": "3YmuATxRLFLG6nkqcnhgKK2Gdy2KaXGFvK1t1VdQKvg6X4vXKn1tWgFmqdSBFrmA9Vh8xsQTJHiquZ3AtHkJnWcU",
  "key10": "z65bg64KzFPi72iuDpmZwcQavKh21hDTgypbbgRj5PDuJAbDYp9VJCWttjWauHtExjzKv9ekX6fxtp4iBoNPUG1",
  "key11": "3pjEFHBKQbjTGJC7SLnfZhJsPcxKymsz5UZSooRQntyi9fbwsi9ru4QuuikL49SpygczAmeJ37JE17X9YBcSw7tx",
  "key12": "zJEtN4nEhM3ZVUSxAmAbAYP2PwyJjB6josMBf6waFMMqCBbxwW4Cty4HPUJ8SwnQU6gkxoL6isaf1FQdcabf2k2",
  "key13": "49T1Mh3mBC1B21YAsZ3X59V4i3T6TQJGS7k9qkzF5EApAX3YDgZyi4pnEZH7zf74kbz88hRKiYWarjPcdViemSbJ",
  "key14": "5MMVmou36WKMbxGv12VbMH1UrbTD4cp8HQNXEjfCQYwAhyrXdSgnBjP1HkMCfoumqPRrCztp6Y1yaxVZ7mvQtYbz",
  "key15": "547hJ1v4XWX4i98WAMNtNScstDbNexrjMZv5mgPAH8gzAufdwiJ3oD4wSLNkFAoc17KM4qyLgG8CpHJ3zhwNVfjj",
  "key16": "4Xr8vkwVgE7Z4XKBitoiBVWJtKzMdZ9iKkgsxyYoww4vtUHoAw2o9n5UqCHNtbNMyoktrMHWHMNV1Frfi2Qawe5Y",
  "key17": "2Hv81SzhyfxxrsymJMjigbXVyzVVYdmSZPWVmw1UeaxPW3Fndhb1YD4J1aikPRtRcx3XC9L64J1vie6wRKQBg59c",
  "key18": "4pLSt9M5oew9hDQDg3j3kyp4cKgZ8eX4fcMBL6tWYLLJerg2VzVwbnoX9NbbHihod6RSE1A7GE6jtMBhXwjwfxqU",
  "key19": "4VgwY2yuuuFTE8TjU7Cd7YfxnEcapWoHBwfkscrsd37cyzL9HXirP3egjKdTgWNMZmBvPUJv8apzP88845Mh36pw",
  "key20": "5bco4NRe9Dbz58WMoDNYkQsRbX5vssbZazn231ThwhPbz2G5t1eRbqqdjbz9Akx8QbsCiuJkLYjGfm44NfnSESiy",
  "key21": "LxenhJsF8eXYzgfWndzLMHYU49LfgnuMeytdYSWCdZ2dgJmi7ZZSPkQgu2E7JF2TKcKtmjMm4eJPvAjNiy2CFyc",
  "key22": "5TUMv3EnVBCPGTUMMBTHyVg5NEs3VMSgCUxDss8M1yJYEYJ2vHUuJm6Q1dVxaQ89J8TiW734mrKUDaTEjXViQqSu",
  "key23": "5zK3T5FggD3GJQouHs5hpsGTtRmPEm3Kh2JPF33C9GmiP9W6qruD3m3sf7YAuGkARzxJBqthAzBcGDaYSeYHXt2Y",
  "key24": "5iN17Bu9vJZZj4P3kMmtUfcKg7uPcswDVFhnqFUD8DASoNMJpTrXvWCX8FPFtx7AyZBttCnicvnkziBFwnR5a52",
  "key25": "2JCpxKJrywwrgEabusMFBWzB597GNPZ1dWPh449qbbGe7XHrK15W5x7gtR2Z5c2Po2fGLwm8ChnNY7D5W4FY3pW7",
  "key26": "3Sz6dxdiEnWPu8jJQRntE3nSimYytAz7SNiqvFoQosWepN9drkErSBrMoWhpkpKL1nopmiVbUwUF9LbY4ukdfMR4",
  "key27": "3yg1nMtLmykBCKNooqWoZoEVs7M7y67hmXpCzRLNCrxiYGE8orvpTw8D7Pu5AvNRnESRKKTu6gfJGeLfZvxFhM3M",
  "key28": "XEpryZSA6KFBJgUpwxjNPNss1mK3DrCbvaH5b2fF3pmgQZwByXqGecrhQdbJD5msCjzVEXghvUDRWzsT3asRecN",
  "key29": "4g7HeakFYiMkdDfGpWFYL4Z5r8S2sxfZtGXahPeBiAKctravAMavPZr5TGrtkJ79z7YxuLyovFejjPkJEqkcpbUP",
  "key30": "KTkM5XQqZdLZ6UhGJ81oPvr9F71pm4LyFix9KABhV9AwYFL5dNygfZwwS5VKYttBFLxTdV8mvm9zyFhV6JPKGiC",
  "key31": "2Dhe3WCcnBfp4YjFk1jxMkZRqyfyweWwKh9YjTTRcTSAFE7e8UeaCuXZCgWgLT21PTfwMUqCi3zADF4ewVRodErU",
  "key32": "5cZ1n5TNcPTM9zpz72hkryH6eyBYPw49jKnBsjMSzEcpz434H1Zw2GxdNRGUxNuS82HQXFqvb7V68E6QpfDmhjqr",
  "key33": "2MBsQo9G1gffWhfK2eRPR62Tyr6PtQym1zn8HQ6RoaiGNyVQwQXJoBYrAi8chGCSLg2dvphdAubrkBhbefzE7GjC",
  "key34": "4NPjqp9qxPZpoXttDSv9VrVU6ipRjCxqhmKTERTLst85GGTp48sDNwfqWdkWujcvjaHQzXxJuhMx8grm3jdTzGnQ",
  "key35": "HmduDnN8ZhJoP31D8nGj4BHRP1XvDzhkZmYPGteC87AJZHdRF29SR75upTPLPvGzFzoB8uBaMznnWiA2nLDsE1d",
  "key36": "5rqrk7YndMzfwx2LuUBUrSa8CvCBSbc1RwJxRByx7Wr15a4Bm7bEwCWUTnHs1vzLsEF69wDWxMuJ5sYKdsupzVd5",
  "key37": "3wRqqZX3Ybiknu34BGTYSNP6mMTWa1PHFEP8ETwkHMMqEQJvkXbfFt7RxVwiuxvif6yMC8Lo6bdhWpRg1wXR8TP3",
  "key38": "ftZENdXyyYvkQKEidBss8niQK3pndUBw3adnq3BDgusz5uVqMtHsR78bSTJNWzwkx4hWhS12ctiaAQex2Bj3AW4",
  "key39": "2s1SAHydENziGSvUYyWqDUXu3ThzjinrpWZ7p7WL9qSms2NPGn6E6znFvZMznYgqvrUF6cULdPz8oAFvuRjRL7LW",
  "key40": "5qeRMhKaPHDkG24mYcvuzsDvutHZij3hVVif2SKKaGXjjWjVN9Ay8kijz37RNKY75VPneDK2BmP7A1zHKVYGxBXN",
  "key41": "2UdrTCF5B5h3mbKMzFPCV8ndvnZ8FSiJAshd4jU8mgCs41prhttiM1hv9jAW24FWQ5VWW64cB6dgZiAKUbuM9rVP"
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
