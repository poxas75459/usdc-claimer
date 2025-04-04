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
    "66rySTR6eBHMZJtPr7undrbjvFDVHAqxAUMLXwvDVJNCSZMjmkAnXk6ma25R9WyJm1eYLzZoMLzeXGuV1dCJHGLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HKGxYi83dgR2N71cWKoZRJWwKnVRJxjFRDhXfZ4EQ3sqrXq5zyduWCFDZm7EQf1ZzDCqVEysKaifJEmjNMWX14f",
  "key1": "3VFAuYkkqtBisjeqGMD6XqvUzLFJuyxtny3bxJLh1xrH4JZ5MVWUV5bJ4oCNbYYNeCmbkVhPzTWdPtGovxXhTBy5",
  "key2": "54PjY7BNjN59UzX3hbNsqymwZPweGRQBUsdgRkHjKLhyVgVotWvCbTf1Nhe5NtwDLwxmXFWxakYwwWDEvXLmeJdM",
  "key3": "P2vpvJqrjs5vGVooWzYYDcS4pdxmvqH5XtpxcC28aspPXGaAYXQRH9fVndGkUEuPckWo6SV4FQoWFKgSeRZtDDi",
  "key4": "3VEVgV2JgEpmP1Qo3Gqhe1Sd8osVQzowAzS8cY119AA6RTkuuZPUFrqKSR8AecCXD3Y6UFMjbdbuLxgF8Wc3rTWa",
  "key5": "2dBpzawaWqg8i169Unck7GC4KrmrEV3dpZgRjUadcqxYwxoHqSnyCQhYJvxf4wDPKVqAtaQHv7UNvzGdK3j8Usf2",
  "key6": "HXeupt9FbvooUYjiq4NGMCm62ik5QrPE3dsyJCPZc5JcWBoqwW3ESXgLz2JBTodY5FJDM5HKGBLBDfA2DutwyeR",
  "key7": "2dk8nzKuZGP9nmi8sqdfPPjca5w6FwG2sLhZ1xedi1cMw2SbfNGZTnVUb3E9ujFRUDivTjDVhuRqsfAjVvkqoXuL",
  "key8": "Cq6p81zvGF38RTQkoABW1c1xmAbvqP2EigLgXkahkY2afCNHuHRA4VzC1XhE2poDxdpWUFmsSnqjigrAn8j5khs",
  "key9": "3zyxuaucNK1e95h8XMvwvbv7nRvyNuNf9Jsksn5AxNzY2GC3q7r8hmPUf7SmpSDN17n3G2Pjn4FLA6Y3vFgjjBcx",
  "key10": "54BqNQ1MS2d9cnVJDiA953pEA63bDXsebUcunK7j7FYDhR8T2hXrBNdMqcU6E7vjjJjMHo6nMmiCeH7ZjdVES5jg",
  "key11": "3YVNjSXB8ZQ4267hAs2kQWax45V6Uj8TxytdHcsk6N7rA3UNRz78gKvvhGJuLjHagtuyufXq8kawnf33Huz3aNTn",
  "key12": "5CACMQv4zTkeKJdH2hPG95oEUh9mF1uyLiSPCbwDk8tVPMSHLbxppYZSpX7bAtp5d6Pkfn2wsRRyy26XvooKUirY",
  "key13": "57ja4h85J7L4N5a2YkmeUhwMtW2SmcgQb2Py9wRF3c7zUg28jyANfrhZVjFXJb8yhXXcbz9KeKahmxPACbfRcbVw",
  "key14": "5Jdp63tKmCvo3fN4aAT6FdJZNvDVZD1jMrFijheMLuKQtQAsYyTJe9xZg2G9QSitnSMPiP7gatL76DTdKm4rgG88",
  "key15": "5JcBm91YdWTVorcoxWgHTe8yxGWZeiY9zNj2qKso83dEcbARyrPUzLmGG2bi45a4hUWMx59E7acEPFuSEYkj1Ssz",
  "key16": "2CddSJkfa7EsvcYwZecLi1gbCZuKQG9QoCbz49HGPTUSrBTYtj7JUmd743Gd3z1EWJuaafERo85PDDFNDoUnj1v2",
  "key17": "2cJ7GbYh78hnasDDjXB9GeMG8oBkcjxwkN5FsTgwJZSwVTN8rbX8FVap6ve7SKPQ1BYQDWzBMY2mV4gaYyRZNr1a",
  "key18": "5nXDsLX1AWFFoVxPcWkg3fQqSkdNtFYvHjGMr326Rs8QEDPB2MrisuigXB6xtijDryxGtuGvMBWL2ZuMMvraEw9x",
  "key19": "3khJwXzELmEk1uuaaje2NbGXv3VZGWHAnXACHVXqVNZPymspgMTRs2XBjy2S1jRqHViHfmhox2jafyzsW7vA5wnE",
  "key20": "fM7GvuC6kxoTeAZHYJ9BCq3JG2d79TzGXvh3A3EZL3Y839sNCHmUeV1b1NwSdva91cqeNKKxsDz1rB63HvDYN9j",
  "key21": "4PxVsbNUWDhzVNZHQ7kejYfA1GkEerf4KTiiHFXfAaBmRvmCdyaiA6NjeDxJr3tGFkkqZbRqBREWSUDDbh1a6EpK",
  "key22": "5U6tCdobm98Bg55XTPsKBAyWxmSty9odjq2SJpsUTyhbbwKZqX6GEabnBVJqhDJkg5Di7XGWovj4Qg87xF2NWGM1",
  "key23": "2TBEU731GQEjT86aW2BgoJDtJeX4YReGddv3D9fKprzHVhxLbKngC7EeTPH7VDUoVSDpSXpVDVvMNevhwGSk81hX",
  "key24": "uGx6t1MHzNacM6gYK8bYT33VcQMkakUZq3sr2ei3AZKMfm2ZM5ecV2upRLXziTJNpLiEA4sJjnJdUjMWjAuH5cS",
  "key25": "3o1k65Zan4YV6qUNuviC917YzBEXX1iUoikJ5DaG2WdMuor7Rbbn3yzfDhYo6pYdRpBnN75CStwn87y5pnes71FP",
  "key26": "4cTgD735DpdtXGqCaHEiL14ZHMJKLGB9SNtiwCnsBmnxYKZnWT6KeZCsYgggHmwV6zUetNd1ozVTrx6DypUkq433",
  "key27": "NNgziCGcSGPTwMEy5BaLiRHZgnPb4EPwA4LvgCpq6aUYkjr3TBe3FaQghj92bBr48jrcrD68jodJjmuNE4EKd8r",
  "key28": "S1YjXUKDwY3WFD9NQjdXnyN5w72pUkg87VD3LUCpCmg86TKcAb3Xz8SFReB97W9SNh2yjrgrS35j3FcXRYztuBy",
  "key29": "5jzeAyUajzenN2QCXNyRNSaF3vBeHsxMpBWQi8LhwNGT6y1QrBTdtyDs9kZxPNFdFySEy5U1kiS3FtRNVPXdupjb",
  "key30": "2EW8nxdbBvmoGwSFhbTQg6DzgRoRruB3GQRxCHxu9mMKLhaNrnHSkuJdgLQNqJK3DbnY31GBfBxfhVCh2VCNmLou",
  "key31": "ykpxssi1UJcj7ePTzaTx9Riu7McQuYFkeQfZVh8Pqb3K6eurGUcwEsmCZeuFoGy7ThauR6aZyeAhvmLDLaUetad",
  "key32": "5tuwpk8ybJyxbAB1VZMcffchP4VcawP6GbUH6ENw7TiU7YnNFLg4hT2nMfZmoFZFebFtPZCKXNQU125zPZjPgrSK",
  "key33": "5MxqoG5YLr2tHY5dxorXhMvsyB79KW9L1JrRTQ4TVCPoGrLQAxtFgZ9MVyTB4cPYkmaHEL5twycPuFkWLrtc5F71",
  "key34": "aSnWGKaSkoEdBadRvpArUbQ3s122B7LG9ChDDX7mQYfxDQX9889rk26gM2Dz3T16xhivjaqBQ4DXWvWp5KudwRV",
  "key35": "8XPpwXoo3uJp2qaXSA4BQCJ2VZSpVmSLziAYEy6aDLMuAQPm3gT83ta4PgrFA9BkuaRnQVZvKuTsCQuTgFxk4wZ",
  "key36": "49HCHBDuD29wPjQFbeW3bFNGtgVyzh2FxTyctSL7ZGyLXfrC2KXCmVexjzssrLjGtk9VZWbQSWZi4zdGvtVSPtEW",
  "key37": "7L3M5PGVobf8vGsmgKuZKiH1QdUNEDFK7nhFmzv7EbSQgSoD5kUbMTiEv5EQGLdYnkQuUEhC1DwSbjVT9R52eGY",
  "key38": "5B4xECasbfkzMtgCHAeKVPMQgpV14e7RMRwZGEgxMTokAbUEpMXQdJB4TArkirYw7n6SLbgChBinaUxYWBcm1Rk8",
  "key39": "4GDfeaWPQES4SrpWHJ9REfFnc8B7sxphdb1K7gtJV6qRhQ2eNrAdDSwRJhhKRnyNPUeabZgjwZ63TDTu1tVhFbkU",
  "key40": "3XabarQWSQ3DFfw8LNox8AdrLzmBXfvb7hV1xKwZkBx1gip9N56S7ed1bgCGabbYpt7HWz26zTQwRPgXyZ4pmJH1",
  "key41": "5sNgX13qKZ5anKYCG3SeG1LwXne7gkkMVmbKTJrncoCk26BGd4Vzqs4db5AY71zXHZGxox5gDA5xRAvtmFL59NXW",
  "key42": "5YNdaLYwX6sd86FoZnwAHfLFcpHm2tQ4hsFjbaJdeeQJYEcGzG8soaCExmusxAHv7tYG77WWk5NwH779gQ6tyaZ",
  "key43": "3wBgHi7qkSSxi5fx7D5pDmJMw6REdfUZUXQ6Ef6MFjY5cmo4AKJ47DtbBToFAxXVTJ2hL4n42CYpqS2GYnzG2SPH",
  "key44": "4E2EHbNk76AGB5TXYTroLVANpjofvdw5Y4Mf28ky6Adhh5Dhzy1yixgFnFjajkjkdQGLbWdJbE2t4ec69FtbX8Xp",
  "key45": "3Sk9rY81CGaDZwoQ5NeqquQQQwNJpw2Z7ixUqbzC5xiivAHVBmapUcTU5JEfGuMo2XkviVPvXT6ZfNSDhb7TfNe8"
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
