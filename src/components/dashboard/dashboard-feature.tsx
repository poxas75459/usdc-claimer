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
    "2abQRiMUTPbvhTKb5DNosxPBQKn7A2ZUCH6mf74W16jVAcL2ju67eYn4y1wdu2B4fpfsEPgYGRbQbo31Fg2kif4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MfaKof4nAH9Uxc3Jp6LDceA2TLvzGhepWDqtKRisCaaDRRky4B52k54XRwPizTyccqhfu7SsKKzybpnWVmgvWjM",
  "key1": "5V3txts3gHEcMEYnsE1Rh1HMxx5iuKeeKZrGEBDWHh4HTgGSgYR9QtuvXjmfd26rHLrQNf3PXohDmQfnw9cvufG",
  "key2": "5VMWxRnSsnkCuhBJdbEhP8bLjCxNiRgfFYyfdhpWAkUfwBLfdMZsyaTBULY3EheDtyuc8KhSFE8H4hdWMZA8eGm7",
  "key3": "brTiT5LUpBVTRLGKHR23vUG5xHAR4TLiDY6pV6U8PiGtMW7bKZTh7xVEAN86ZWxUHFyg9SY52qtZd1Rjgk8p9t2",
  "key4": "Ai2cL9bGrACPoKSMCwHX9XERkAdqDiCZNoD9KZageKsNhNEDqqisHTrJo61YCu9mErraveKqDxhK1hsEHFv7az1",
  "key5": "4Mv8m14P4fpEuBFxyZLJdqkWhy5qN6NoBi1GsYUHfubgEZJq4y4sQLgMopiWRC6diHSpMNXP68craZSavmVSBhg4",
  "key6": "obRqvnF5RTgrv7s9rczuaMiX398gBdXj5duReAH5LN3RHvU1LMNme5aKRYCHvKrwKkRNwGU82MZBBkG56eXLniT",
  "key7": "5iTuRMxrhWTgTQecLbeXz4rJgVfb98NcJvgWavjtw69qg18F4Y1AYSG6GfLiH1jVLK7vLKfHc9cBm8GGYA8KZDX",
  "key8": "2AkaYTFKRuJsYWBqtphPjYhhDS4GTH8SKx332yB8jPjsFksbmidCizYAP9P1k25mTn9MYyuUzTDz1RmuA52toFw2",
  "key9": "3KkbPx95BiWd1gaApYocNSRadMZajwW4k5DCo1HqfZP9b3aHte8SFkub4uGJSAJCCtoWVKbBB8M89cp43dMhA6Xm",
  "key10": "4Zaxko49XRbeUZZ96BTUV2aLFN8QVfL7nwVJReDoiQLi8kTHmBecrSqJmVvwZRj7ftaVRcVJNXGk4X94QeN21Lcz",
  "key11": "2bgrRqCX3aN5786mYY3NweE6G4bLhZaFQvgnahj5GgkJNv7DrNstmw8qRD4tWjiVuJ38nsNTkCosxDYUd7YiJ4LM",
  "key12": "5tgFvV9GSbvoMDgyZbCASM94XdQrZ4rUD9SbK5tjyTqSsrpkibtACQ4MYTZsUJXmVNCPxAuc21gp1FB5ipwa9HHa",
  "key13": "i226pPL871bucLfxxRUgEkNMW9kyS63hYy42ChMsTUGvFjcHWHWma2oSEgw4aKKnUEJn6aeFtNFqnUHxkLgo3b4",
  "key14": "2z5VNYq7672Bx37KyqUjmzDXzJS6RyAFhxmgrFdrtwXjSQA1rCg2LccdEBVZ2zYPr6KvViXLnMyyRdyYuRhuAuUv",
  "key15": "2oCSEF4iex2ckKtnCi8TNpeCGkxKyq5YqDVZrm335tZhG95AxmYn5HKqvUHrS56a4RZQq8ErKntBzWsjmFPSKuk6",
  "key16": "2fBqnFBbSV6ucH17c1n9rSXNTuRdEnraBHs9L9G3MMWXCt1DH6SaTRDadvouUqWk4kKca3kezyErSZ3Qpx4MDLnF",
  "key17": "2tsNYRwFaVVN16WQdhPDx6ZxNkG2Ngn3JaGiJfst8DvAP44K1B9GcWoyj6TCxVcg7j9ULXSTTqATCuD8QRw7m5Au",
  "key18": "45VKLc8FSXy2UTYmAPYtXbxPkXFmfh8nKUn9vN3Ty5FkRxHUhwmteVRAwfPKmTSRRXibmvmwcjcB7nH5HjQ8mcL1",
  "key19": "Trq1Q9k14nu3zx1KYGUibCeB9xtC5zZqzXX7DYuCCKB1mTCkYDNsGaUPsedBX9tFDcJ7vRgmFbtijKA7R8gFrsy",
  "key20": "72yroyAiyYVW9m85mAxFmwRZaNJiPBvZCJbYuxKbZ7fgqjGqp42QqKeGPv3UdGUhYEdSNdSULkyK3YVni3p9QpP",
  "key21": "2ucqAs9LPnGm9E673Xea3zc8QTLcjnaAvpTF5K61C8DTww8geCmCT9GKnVtMu5AyN6XRDEokkfRK6MKn16trmati",
  "key22": "Nnpm6GcY2FMeXSDmwbvTrAH1W4pmYeB4eeKXdJrNtvZTX3Ta4k6Ls1yoMATo71qXWFD1yndEWFZasnfVBmyFn3j",
  "key23": "5mwPCw1YMrhHWAHccm1Bosec2foSGNfCZSY14niDTY9rgyRRSepsAFM1fmNA395BhvKkR2y1Akr55CSB9vCJXerP",
  "key24": "3yDuNdceEfDMPi14YJgQLn8ruejamZY9Dk7SbDsbU2mLo2Vmy39uYMsCbUJCcH2ut2Fnqdt1GQnN8NSJWYANJd5U",
  "key25": "2AFreHwNcDhcpmRn8mXMuan48GaUc3WHVFwPqV5ffNumh2eeaYjdDiRMmDZqGKCiU98u3UCQcDMS4Pq6gCuksQpq",
  "key26": "Xudy19p8AmhNyvZmFWFnY37fDLhmvayWjsQBVutDGTxV7KKnWKJeeeg6x4pCrhDZyVpHoVHe8LET7Xy6wempE47",
  "key27": "2R2jBrfveS4mjWAwmR9mJuhyNCY96hubyf9UHkN2nwfhEidVmnf2Zn8rpSV83d9sZavisG5yESs3g15NENcdCaQ7",
  "key28": "9ixnCyjNNNAxz2JCvWrBCajLVmWnq1MiN8YoeExoJxfkDezYLJGaugAaj72U791UoUk5GacY3SwvbtikFUiLLTb",
  "key29": "4jaUksjKWyNk6GBuEJEa6VVNBGqoa4UGmJm19A17BmnLUAjsc2hCd1KYg5o3kXNsWd7mFncQDY4cT1Mwkvhbftiw",
  "key30": "2cyJ2rM5eDZkWrhC3zCdfFchNQtrD88TP3ZqeKyeBAAUEaw8ohPYSij2WRR6LPaXwMrkqZW2iQxuQQ4fcugrjnT5",
  "key31": "2VenF9RydaorHWtzCntcfmEHF3Ak5GxNQCutJCkq6YRv1Sek8oxFnYdtwgrEftCSobQ57oXUMNZGG4koEKE2szp7",
  "key32": "5XrVA9x4iwxauet5J5XZW2ZH3yBfM9Pbsqb2q79e6aYVKMtLxkniYqqJydHmnrwiRHUCxwRXLF8pnNyrTUcM1577",
  "key33": "JcFMCH9wj3kft76df9q1vzwX46aKDAijwGTRCqfP4APscfAnuKweQ6e5fPWruyTpZTUJyMKUo6bY4fX5KXdHj4y",
  "key34": "4LJX5kq4j64P1uVaGgxzdpyScG5Wev3mUYpiprcFNMGQdSYXr94J811WvEMPUmbXthGGMR3K5g6gKaW24MvmpxMt",
  "key35": "2jvJf356XQc82akUaVrtHYfyipB1YwhLhWEMJuukNaciPinG5f29Ld1eECnuN9BiGqGVNXxgpRhPVS9UuFXewJSQ",
  "key36": "4cBGTMEKcui5JvFxrr3fq8C19QADEVe7rtKRizhJk3hSCwdwXLLNbhjCqk1yHXSu5JR4ifmpJ3GnuPVxvHPRphHv",
  "key37": "2BVS3MzJAWu6D4AUjgz5bPd8ouJvHdv31Yg1pJrMYuqJqEsiYRYhZZ4z9RCmmobBcPBSk9rna7zJSbQDrQ9VUvPx",
  "key38": "2VoxRVT7Gwo5LRdHAf2F5acoLixxxipPWMqFv53D3qoMjjojiN6Rz8eWZXm4aRvQFt4cCaeQJypogdSGXp31gH23",
  "key39": "583n46KCrnbaGpwzhperLc3ntQAkLqF9nKWZ8sMyjzYtjo9QjtBseUMobjpD9jncgh2mnNgMiRyd4vvvunn9fcZg",
  "key40": "3KBuxxuwkMknrAE2PcckcqgEpeKGdwLVSsHQrUX3NRHybiRxTrV5NXEsyrAh6LBKeBm28uZH84sJ3r8iVkW1g6bd",
  "key41": "4WGoRa3sc1fdqnXbg7fMQBFb1BPdgr37Sc99ZDaQvrAAMsrvbzksNVXjs8juy24Y6tZP2WTWHMEbaVw3FfSbobKb",
  "key42": "3iucwXMReU3FYzxgYskS8LGH5EkvHYwpwfkj22ZVwfr3HAieca1K2BMqNbCwQ5inzPqXvfiwCuz2S79LG1oYiuTk"
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
