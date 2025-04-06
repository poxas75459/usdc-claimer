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
    "3RxhLfZ92SnNU5w9xPAWDrJqpSKYAWXiSiLCFrTeEUTLN3nCaRQnLzntSKBjYb6HPUPp2Q6KtPzCpT3Qcx2YLL7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SXRFhsJnwH5i68psmLbWH627myuoaAdJZT9mkoDeaM6DqgGdVDcEmmRtPGsxcpUuqFnEc9mxH7npmCkfCFmZQLV",
  "key1": "2nDjCi3CMSdFZi1YhUBGG3Tj9hiMLdyEXeyEM7VmfWy86dA4h1s8v779EFYtWBZGybUjAqUfGsP4eXPnbcPq8RRa",
  "key2": "4xJCEqBCiXhcg1Wgg1pJGCe2aN3VAqGTWkMWNrPZTk9zby9WTYKMUMo2W3fANucRoWjHCEni6p77RputfiRJi2ws",
  "key3": "3gusptpDw7ausgJ5pQ4JL46mRj1ueANtNBJmxi4faTjm6VuYbShFPiVTUvjm1M85jesLewfqmg82tfaDBnJef26U",
  "key4": "he4YY97oACWzCG9V1UghFmicwMrXpJm8kExCBfWsH5nqJ8FELEbVTp7GUpXjUyUk8xVTis6uVfvuWc5igsuyWMQ",
  "key5": "3fBd8pirvc887HCzGthuwM5XPFr8tU2reHnziSuJpCLexoquppmNV43VQs6AT4QxTTAwK5NTBxzCpP9CE5K6e8z7",
  "key6": "2dvavSecdxF6mf9UoFNuBnEGY5TtR4xHuQYKapPEgRkhXEgciSBZjEZ9PKPzYPqse9dzrCYseLBXFtBEcqQHBfUs",
  "key7": "5AFqHUzSdLK1BK5NZBEvmPGXA1hDwRSZZ1n3fRFY3oXuAxSfKN47Dhxxj4f4ibgRHxZuvo79uZw46rUsww4QQ8tw",
  "key8": "57B49N9eVpLtodRaJnczXoWWxVFinkDo9r4JAzo11crBPrJ91JUs57Q2m2ZPuPQSiUR3nfeAMdwNfRmKtQ5Kzzso",
  "key9": "2NEUM3CNywpasZ6aWnEJtwUX8fzpNq6ds7sqbuAw2rQoivYyAxfksan7EQ6RtPhqti1muL4LBkcJcaLBkXBDMqfh",
  "key10": "2DHyKGgCWTsB5UwosPXUo4My5sX2ZZddoFCUaBSm9YY43BdzG14m6HRJvXu4REoNnrdpYXRdFiCjfgezKpi4isZi",
  "key11": "3xsJKXQ87BFWQzc3eD79TK2D5mC3FQWsonck4frwAaGSaWtjWrWUWReu34fVjqwYxeKgyPrSzCUpws4EjqCPTiLQ",
  "key12": "4dqG1UoGi8kBF33hFeKXCkWRrv7w5pH1gPLgfVARZshx5rrD667pUGuqd5Na9ETScschgvcpygrjv55f6yekRyF8",
  "key13": "45hoMiS9bapLWq1EgAX1w5o4mNQC2EAJJA9wpry48gSMZXtQKGNdeV83d7GtS26cWx8gSY3B1nCSv4hwTv44M2Pt",
  "key14": "6SunyrSZqC1PTDmWkcJqCjFXxcshswh7sfhuceEigU8tECjYUPydNeRfDAkeDhdPSycNhDDL46qXtjX3qfdeJME",
  "key15": "4yk3QPbQHdsU4iPGrvjUDQCgQXPiR9ekmuLUgeL5M1vXfhxjcsDtiQQZeRRGaDpZ4tG4Douw7W6dT3tdQVnnM7CK",
  "key16": "2HxcZ1noDXcrHATdpd8GvKjfjuScDJxyqEkdPaBEVafTyEskby1YUw37dr6AkcuESByCiu4Y8xoNNzoyMbe2vYCu",
  "key17": "28GMRSQpnERjmfuuaYkywtcNK7pNcMJm8rsyetMwwZvFb1xHrQqYKFseEEAgrTBLWN2uNuBrB17aunVWTkUArZYn",
  "key18": "3K8z8hdD1gaPqyUy9xEsoZnKN64KntJBUxpgvcSjLCJFMMpsqjHxcfyQpqUEKo9orNQVTXYkPmemMG4fEv4CK72D",
  "key19": "3oXQCc3TofYiL84ebHBU7s7XP2knn89SwCqrH5LDpMwo2WoqRiocSSyTt6YGeAyo8gZMJHoaR8WpkAChNdckrJLT",
  "key20": "4YiAR3ULN4HPamiYsg2a5v85uGuqn6peVv4QRXbHuroPdXXSTtePvgveHByoRhrCpv81aaf7eMNSLphDWQKHU9c",
  "key21": "2iRAvTewdri8oMyXbXanPpxH3LeGLmcrdXHajL2HVaZCQpDRX2TC9uupFqqP6stEMVg3wiGKwczHWQMWTkE5KpZy",
  "key22": "27PbKMqVaf9fLUXnQ9GDY21gfUnW1e5mhLTyUkPAbMUnjQxmGy55XVENUMEks5gbpAKsAyRccXfFbtsee34L7kuG",
  "key23": "5FMJZX4Cpfkn5ohZYM6Jn4nVYKWf2nQL95tm8ZCTepU9w4J5Y9CjV4Y5s2NYHWmd5ndtjMcg9C8EkjKBRdYd1rst",
  "key24": "54cHEbvHDgSLSbuL5nbex1amm9ApHMeFwWnkpAxLUfVhxxkWYDSyJ7JfUDgJofUa6xigZYBRDuBjv6Up4xz8giB4",
  "key25": "4D4TgGc4oordJ868ousugvVhxEU5pdJE9By1BwoQREQACp3FDPrJBxVxUqQNHm5Em39jZL9JoXwVWGybm7w9ReYd",
  "key26": "4P68CQMCVuZCfCcLKb5jhCNzhVRx1otfR5xYoosso3UY4CAWqZ9bC1Cr9ePPEXJfMV9wiStz6uxX5sUXZdm5kW5Z",
  "key27": "4FNXPjw6iPbqYwMy4b5KSGirFiqfdXABjL7wpscqARFeDut755b4crq8yqRoWwTXGAZkxgSXk7Nv2uTFAUJ3DYA6",
  "key28": "3yNsYYZyJvJVDCVpY4vPXzWabCDyyTnyumun1WKwChTMBPWq4QXLYE885B76hVzpeFjFWt114Y4wutBHoEoN53zx",
  "key29": "4jhdwLumsWvvzBaa28yq1WTNWxU2GCT6b6xmqY6jPpPWWC9wf1t4YNLYreqy55JoLowMUaedER6s2W1wqbU5cM8B",
  "key30": "JtCQJCdV4zMHKzm9HS9bW181nHD92AjLdDBi3aJsxjBDJ9ifHixeUGxWWEHHzXaxZP72KJsA6AHiNU2GoYgiSzu",
  "key31": "293TApLyfbs6cW9JNyd4cPquyQKaWNhKG4QqFXmaWNN4c6imwX9hRnZDaBn52jcr3eiASehcevxDJxF8jZD2x2ua",
  "key32": "3TCxifPXtmpqikWPncNpUMbgMhEUowc7k5aK6opfYBLRqWZdAcYnJKfi1LAC617v1jRZSUyJ1ymp2y9MGAK1j9Lz",
  "key33": "42qMpjwqgJ2zy8CCE5P7gofYfUxetkjWcraNzsSrxNNHtazKzecKkCY5rTTM5mt9JaGQELjM9PTHxWkvsNZjNmpq",
  "key34": "4tXvZ3BxN71hAGRrQhY92EmiF2BH1wmLtTQ6bNiSkYm7UYZ9QTQN1EzrGb2MoiuGcJn5KoL5Vmd86rYERtL5SyKr",
  "key35": "44RJs5YJTPQyJyTMyAkp6eG3haxGCHJxRPSpJMcAuDRG2jyPgpXJv1X8Z4GSdeb8274LwvX2P89nCPMy2FDYfsb3",
  "key36": "3LbX5bLDkMCvAws2bQV2NS7p83uBeTeeuaHJea4s7bj5SZvakmDpeJy8nL2ypoMCVxn1txsFpk7nWnzSTgPftgzU",
  "key37": "61tmGz7khHtvqcvL9nMdYC9BabHAHpitgUuMFwJuSeVHZv7ardjVWwskDX6AkuRhTDZdnnw9sSLAQzc4jrXow7Xs",
  "key38": "yDAvuAaD6NN9h1xW9e57Ew46kNzZ6SNzgF7Yj3exNe2QyrwsZydx1TT8wruKdiLXS7SzcPFa7133VERujw4o6uW",
  "key39": "4yy6MQfeaVaw7UccLg1PFw2Z4mrHve9AkW3iA5ztNJfR3LfPfFaVctHNerZRvhnGsvrRyx7ze2Mm7uTUDwkf2dZp",
  "key40": "EyeybufBpWXQbLDvnmSjpvxLN8ESMKx38GZUj4zGJ3oXMCTjYgPaWMvWvUp4DAfdGxuzJvN6K8inSYTZeP63W7B",
  "key41": "2vx2MRd7mn1cR7umL6n5j7i2AWVPSQb945HDzayMJ4DczSstjTE6UtSUvd1329akb8tLBfJx724STSnKFpVn7CWz",
  "key42": "2WZG7sCm5Fr3EEBCimkYfc68sfMDLHuxKtPnG2rFpPDhsPVW2sKcq6QNsAPm3xsVBSTs6wDKNxM1mc7Tk91aedBT",
  "key43": "5HbVBjegE4RMMh9rqBtgxkiNgxXJWicD1PPpENtKTzS7u5Jnux3KAPMJo8FCXErTw783ocjdiANndAfrEpcZ6bNZ",
  "key44": "3f8G75GzH4sUL8nVYzkGUM399wqp2JSkvQiKhzxN2vjThANXCBhaMVE3EdFTXPDPsPFUSfudK5SFFdU4n7GVYzyb",
  "key45": "2viUqihfpxZz4Cz5F3k8dat1FneTT7VZEKy1uoWuGom711twdo5wpnUo8d7MAcuPSSHtgpc5CZLgbdvSGC3U7dMC",
  "key46": "9ZRYEetPbJkwM9Psq5BRVNRWijXBPjhfzndvUpb2jY2e2SifXQaHnZuuNkmWobWB1AfxpsZ8hHzFDvDkAKCi97E"
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
