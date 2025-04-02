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
    "5KzK4GMPzueJe1p4StFnP3mgAQMF2gjsHAJatczRdaBWhCXGEY76auT5Kec1UbwQa2AScdmoDWtWsdgeo5VHDSEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22cjXjfWQjRZzAQxzPSXuzmrCjaPcNDzdsEKV5krEVemR56AiRrYDTbmgPsiKpqzg3BV1QUJbAwEfuzwWB4GZyaR",
  "key1": "4xib9SWZcF3Rp8PLyW5Z2EGvXc4aCd8RAvKHbpP4suXbBMSDhYgfRCAhXVksp7MEaSkzMwbDupBQQTxrsDmAQsqY",
  "key2": "5G27PBdHZrtHtAj5FM9xR3a84yQwNfvNtUjbSBi6FLqUpnAcSmjuGM9B7LD9dQZ2ga4CrTT3fVZkajctHxWorgP9",
  "key3": "3uzdbgmtF5BPJ7qGixcmEcPff67Gmnh4c6tZY5G7rZS7bdg5rGLb26kTiT5a8J5sTK32JTA25jz3AqWTiZBr3HSK",
  "key4": "2kRkRZZR4Y3C9SGHHAA1WUSyPUZQuop4c8SsSL8Hwjfqx3PM7Zvz2yjSTbqay2oVG94qQkAQKbmy3iHU36nLsmk",
  "key5": "5rvGNMcV2qDrJts3gUBLjNGHQZMHmrpSLsaCr42qrPM4P9hdJX4ZaZdQLcyWWiHmHEWNyNTWDb9uKmpSoVZJF1wo",
  "key6": "2ER4xgfKGMaQi4jpaNuzPRVJ9f27piVMB9yQsJbybrRZoK6ajTerqHpRDGUAT8A3hb1sUvuqwSGPou63JdVByNQd",
  "key7": "5bBBZqH9MRHe7F1XsG7aeUGXJjX7PwmeUZELL1pwkSo2E6QsiRZEK6pwzFRmUfvV5ma6ByqMytG4yRnxpdzAC27N",
  "key8": "JD77dRUNoqnQDje5jS7QcRuiaamhkRokxqqAeGTGaTxupQXtve55irhjcFUGNAEM14foLHFmFGxPYVN3MAJibAX",
  "key9": "4nnKamzBp1bwZ5hRXpC8c7hRWiareJkC3VMFRj4TzdMdXjvm9crfxdqVuQHX16qG4WNK7P3s2sbkp4gZFeuS4dRX",
  "key10": "258q7sJ9p4ngQKcS9o2wDPC5VdL4ofcUuQyidTKWAnSj6JrG1xjFA48sBAmVHfNxwDVutGfxQw9EzbE1visacf7o",
  "key11": "2bW1AAnfcdUTab9S6C1TwLZ3wFkbGNFN6VAKtomw6PAvHpkUwfg3u67i8X4BSEoj3qovnqZwfxbHoCMcUCiumgp4",
  "key12": "617FGTeN5uNnTv2DewxAqeRgao47k1XThFfGCzknnV9hv6TFe8NxwVGhsYfcgRmYwcHVc2CuyC75vYsyMYVJ6TTA",
  "key13": "2j5Y58oNe6MdnePC91qC1aXkEB1tRkSUsJqWkrTg7bADLSnNM2k4Xi5pWbCFfcFnpVQrPUY1nq8VfzaMSRShNBrV",
  "key14": "2rzjhafVTqmu4fYoqU2qcmKwRufxX1xfsvHkY2gky6xDn9qaiMxtLjg2ty3YKiNKceduYx1HYTtjomSka48gHcyG",
  "key15": "3MWsNDbyhA4Bet42JVZUjq5careUUaRd8vtisFsYPJGzASihsvE4mLo9LyJEyRm1BtQYBsGdbru44EXRm1NG3YB9",
  "key16": "4oa9ZSgpjuC3cSFH8MCe8wziTXqjnMAz48S241CwKJnXBGfEiqtWbHzbwSfVb3PgKChpjc3uKGD5GLGVYqWzDF6g",
  "key17": "5txc4rHJY7JD6qZ5UuHjtvGnsAMFtCzFt2QUFSSHKS4gMD1rA5gDtnZCz3qUZVWTyJUoVC2oPzer6f35J6c71D3r",
  "key18": "4qzvyWzQdCBDGxLAGp8rr3n26q4qWE8241jcDZ33oVpbWetqCGrbhqGTovmyQ2CvTmPSMKSmiUgiE38qt4FsxAfj",
  "key19": "3Tkejy9UnChFqtFgSwxKCG19pmJu3VakpV1zZaqQCg8kPeWCJiqSiuvJdaoCbABULgAXrbpxqHXE6Wd2XqJh7Dat",
  "key20": "fzcKDzbdwsaiaQefghZoArhKVDK66Bhr4cVD1XteVNvwneaAvcyfm9rsFJuf5C4q2v2hZ4tWPVhUNTsDXFgd72F",
  "key21": "5t1N19f5S166i3Gnj4e7rSSrMGp41R6FYKDqCpKAMAAuVUZJ4Gny858HDA4wyrmhE7XbKyDWxXHiiUEBNmPPzK6h",
  "key22": "wStMzjx3shuhvcycMLdL4TgrFMgaBtn1LeMK4BkRKUrhp7Nf49AjPHNczKzpe8zpbv6vUjRxeWxUm66i2TpWabA",
  "key23": "4xfTbwWQovCeV4x2a37DhBjk7TP2y4TDXY7UVnJL8hqCNNTz5yUH7hMMAQbxBGqSc6BHoLwQP3uaJ1ir8uVsGHyb",
  "key24": "5JbderZb5skMYfGVkkAt7fp6M2Rx5Atz9JmLWAYVYpEcnSG9RhMhiVVHG3zwtkJ1qsAzZtXTabnwawdmYHaEiHen",
  "key25": "5G5oPe6zFb2KrUG5CmCNVBxrWAurmbJrzVHRBPQAF8JvdYYmgKSVCoafxG3NT918dPHt1tF9W8fVndcj7Kq7UcSz",
  "key26": "6xhYLyaNYUn2b9nJwR11AzwGyBmHuboCzU9fDAQiRWxt3AsPDREyyZ6jMLZ69kjzXoQH9zvrKu1UMB2TBu1jk7a",
  "key27": "4kXcMGWFPKJiK8sFAXUJhY6P9P4EssuEsPNC56zJ99UGVbybgsC1J7MwCTZBHEEn46m86GZ5nUwk5tC3UzxHswxw",
  "key28": "9UA7daB16nj36pzt1wDfJQvMDvrsww5y4TQrd5xF1grY3jDCU7uwv7ZYp7NcYUiTLCRMa1Hv3NHf4CDbHEmh53S",
  "key29": "Qjin9TQuVBFzVizBoRSABxYXBp2gBfpKFAmvugh5aR78emPrPRVWRTvwPerCEWe5jftgYLZJC55TroJmpQaQaPg",
  "key30": "5trHMiXFWRi9tcgZqrC8912z85pdj1AVPJ9qEASfEoiStgUjND2nuymXiVdCNzcodJifLCUw1jqEqRxP3FeEgHUH",
  "key31": "3Psog8J8xPcEWfdxFiJ7kximtLawm2D9EwVE7jeaDyRRTcep1onwdEaQeehyEy3wWK3j4KVAsSfuqLiMBso6LU1n",
  "key32": "4mWsbodDCCumkBxaLCJxNSEm6NP4uF66GGz1sMVdDQGfSmg8W32xmmoS81F8VRvyaQHDgG56rhcdHo4Wzn4eGSeG",
  "key33": "24wHUNM9JKChdz5ij3c8cR8hotxuzxkvZy1wnDXsRETrCrYH37HW32mDS13F6YJJuaJB9t32AsGVBfcAyakkk812",
  "key34": "57HX2zeT63oEbz6oTWuNHs7FbScW1WLiFe5qKJUtn33nDwzjbALCWVUNK3mnsmRAtYNhxgxWJXfbR4qFbb9SB7tT",
  "key35": "5BdmKZFAqx1tLtTfCJ5ioG17pyXdNpu7pMME5Ku5NrYRuv3UMJydhEHygtp3rkFuCs8HFXTjqcMmoCR2Q7wED5yM",
  "key36": "QV1teayvre43Nkmw5kwaYeSNJLCo55Em85AnPnh9G9Bb9cucQTb4GYWY2h7CuTeSabhWYq82ubHRDPHJbJY2ghL",
  "key37": "415dSo9tVnLR3XEHMv1K9ZK5KfCXktRKQYfVmJriZN6wwWDnANMumrPuCh3sEDdXrdm5nhUrRpHWoQ4rcQhzsQzh",
  "key38": "5tXZjvdHA4dVemNass21a8L1PY1ZxYA151Q2zbqAap4b2qQFiTmKxQd3HKPVC7jcwdcNKVExJyxLFDg1pGbMksA2",
  "key39": "5G2cUqd6ArH4Ak8SFLBqvUW21UHeg8fgW3NMMjZtpJ3HFDfCvXz5gvxr4g1sNCE3WHXHHaNWDKm2Lp11KX8P6PY8",
  "key40": "tpRPagVRVm3TTAeGFJrFvVMkmJrf7NPgGAFXYXixs38ajqrsjTCuorASrEWM8ZyiQkW7Pcjz4jKLgUq3GMpMBK2",
  "key41": "2AqSpv6wDdpetuibzCv9buxTuPNPmfXW5WHWuRwdTKyJfChvSSoS7NN7bfUK6qU7ZSrzj2C1gdsXaNLk6tWSPukx",
  "key42": "45HA1q2Twn5E5nrFhe9N3Hx6pczeGTTcMNtjxyoKHrNEyvUWiFcJsJ6KzSwLwc4LqMJaed1PvLXKHQZhsVqU8Ap7",
  "key43": "5NQjPiPDyjDw9ommU8p716sDay1uFjCexH1FEepKMoieBmcQwvxqvWEUhhVSBZhg4xnz96Jn9Vj2bmyuyWsnfxCE",
  "key44": "23F6feKniR45LnwbpZivECnbo51EgaFS2QuWuDqDtdChisLidyJCdNtRJzsBh6FR7Jpwh5spERKZQTYsbbJqQDBm",
  "key45": "3ZQJvjZr1YuoMCuYoEyeszFbccm87ndWM53endRJKPP3nWfauTE69o8B1wLQjA74kknz6KmWxmKPXwLFJzMxHV33",
  "key46": "3CKENgDC9qKCusDWhFvMMqrfjYkU4aPbNM1HjrannhTdTstbYAEM1tc4rGgibzhr4geWRgg9WoWLeXMgmshqKcGc"
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
