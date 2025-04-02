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
    "5D1Pfg3j2CKw5XJWKhkMpMTyG6BP5m1y1frW74phsUbvqhGxi9y8KaedHekuyTovqQ9Z5LRZemVwcttqhsMnsCMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P3X5rySX5WFGpSP2KJ8mw6wgPbNFUWXmBe8gvSNerT5LtmQN8uyk8GugwaRZAVWYxnKkymH6RU4P7YcAQtJuA6m",
  "key1": "33MqDztZ5qaq5g1D1Td6VoFUD7b8ZtU1GyiCTN8MkegK9wAhnLkCvfATDeYfggvfJenrg5ajWBEih11FGo77Wnvr",
  "key2": "5sU1ivoNnR4wg66hxDvZvF5a2MqzSZSDL55N9FY1EkqU6CSQDHesVycMcMB1hMGosYD74vt5vz6ReUbCAa6W2RZi",
  "key3": "4c1RhXwMR3BvsuwYeh6ck1dHqWFBEUFq372tcL2CYjTuevdonD1AY8bMSrrzshAh4FgRhh3choxu41b9dGAPXEmQ",
  "key4": "5p6QSdjRkqvfnVZZv8L5WRgn1tPH9aecmcwcYRCLXKYaAfodE7meEJMAQrdXh461EThxh36Zk8nZ8ceF9VV3a1yu",
  "key5": "5UrNyDyAVQLiAADCLjX2W2D9CnFXY32zLHB8xnafQSnXHzzFvejrMrXyEXucPAEMyRPddp8bXqZ19LQu6eZ4LrSu",
  "key6": "4woNpY3GtKkw9igFbxRYmrDiNmuNTWDAZa9FUeFvU9BeTXTJTJabRDJgyRkBoHvzPvptNSxWbA5Ar1WQmJFsgkej",
  "key7": "5xaK4bV8bGzbJAQuztFYLZoz8Uys78nXfKzdP49typBoj9hZ5Eq9qr1nHMMxkhYMQfoFTDa2nWGn367mZzEnkqd9",
  "key8": "5x79HJYneRvki4hcRe4XvjHpXdemu5dBZ5UdNMP7a12KYZqc54usoVpvyw1q25ZRvW2zYXbDwZ4jrTPCudsgX5Cc",
  "key9": "3J9MZy6tQFLRi6nVUXFb6SfeCVJ7mSf6MTfGHa72bPswSQxRe4BL62YuwZxKUy3g31krKBUuvZ5pHKNVZ18NtXjy",
  "key10": "48dxVC9bQdJX6DnNCoZsVJUzfFNGGrZYTxFGGRo4wPfZ1tpXszJaXg8CqjJpzoELEtwcByrTb3PsvAgXKiuTMf6J",
  "key11": "5LpJbtAxqnVJpeWQwUT4sH6JhMQEvkMgM5i75YxFudJAVsEKinr8wAW24w43kQWAmECJAf41hrAezpeXVAP1KAoN",
  "key12": "Q8ubv7eB1R4Djbg7djEacwjzBNH9kiPzBC1RF2kgJeSAoXEuHyAF3QVsg5eRcvRJeYFwZbcFwazFv3je6Db76gW",
  "key13": "48SH2bh4YAeBpRcbbRmLwvYXgXFXsHfoFik4JojgULx4x4fNN7fyHhgqjvfqZtER3iGrh2n9QFFi6vKknZ2D73QH",
  "key14": "3FYqBKDqTf4RyjzMSdkLNGUcHLsHp3xsjKNJNE2etRn8UcZoSHo5hu7QeUqyCKu7EYpjMWESw1AT9DG8Awwum8Fw",
  "key15": "TY7wJppV8tF7GKXd4pr1HHMu4Pnu3HeGrqmFPsyqwqsGcQb9N7Yy9qZ4qTRPdHVaEz8B8E5o9nneKbzo81P2en5",
  "key16": "Ye7dk7C95zwxcUPgvE31nYRm2MrDD6A9jjJRX2zuYR3wBqsW73QSoPs2iJt4XKpZL6LWKW1u9TPzrQgYuGMi9p8",
  "key17": "5sNVYy63yXAq5B1CCrfgknakAXC3VuFEhDWyeUJWdzWtkA2ZZYRLdnKfY2YJeVeN4tQam16GHiW22xQ7HaVydsEt",
  "key18": "3dQ3dRtkbyAjy2f53XbSih4QagaP5iAaaHzE7LA91dzDqQ6uLRMzXKXJFzT1aUdg4F7cF1EZnmbJPcyzzNfMbB6v",
  "key19": "NGPAPADWmkSeMG5bEVZEfMSDaHjjoycvWgEtmB1dS7RUTbD7xGff4d3yVsW7MyNu6wrrDVPFQUY8ydPyb2JkTqC",
  "key20": "5oYEHDNBF2PKFzKKiRHzcWTyw1eqjeKmK16DMgWjGY6Aigi4AyxZpvnXoxqjaEpYASP425yLZHH4zMXWtdJKthUu",
  "key21": "3PXghdJRznsNRyo3bysyUnmAgvw1t1mPmh5bzQaimu73Ym49XDbCLFFXyfzKp8Esgjt969HSmXJAp4pgnodEWMuk",
  "key22": "yhAkNR8enrfmZTUGfTzHYXKRfFyXqarjbAHqSbCg2bTs1euyw68WtfFXNBru1ejXdATrZS745wEkveWNsHa6NRf",
  "key23": "5UhS2AeYcoY7xQthqKTNRpTuLLt5Kp9SWUCNQ31WnT9DnroPhxMS9t6g7JzjPwNEkDmCfhzt7ri8Qybh49TMR1Fp",
  "key24": "3Z27mTJCD6G1aVDoGzZKDiv2M4P6Gzf5ca5e6GfTuf8zj6d39i9DTnFAFvQ1HSuNXRZnPozv892eiAP5R95jXb6S",
  "key25": "2oNFfM7oq945jnDBx1SdeAhJqoWN2rwS4b4Kq8SDu4zrrreAycVzDdZMAYTZ4zkHMAjXaZEHVNMDR87dcRWDxQVa",
  "key26": "2hrGw8Mo3G5r9ExxkBPVgPKNnc8LHZzw7YtZRhTFqVLUGgwKFkFx2Mhgnwrp1LjQCVpcAz2esMQVGFWFKVyM5bzn",
  "key27": "4o92WJ6DBVTNJGcKXgNeEsRf5eKxd9zbVMw6Yr99QBVDRWZuoYTPmgWFUGX9DYug1sH5bLhmTg8Avz6qmePZuE8",
  "key28": "KPAoarBfnnYabK68KzcdQ9WwrtsgHYhco3DZQEVgF39YDJGPnKGaTY5DV4ahopgJe38A7ngZMsx9PBvtRdTBswr",
  "key29": "2Uh3EcSS3oSPunxQv9suu57LEGtD7NWr3gxrNQCCKJFzGU6cYgtwiViaGMQvGnRwr5RfZyweWc75GQbDntYMVLVF",
  "key30": "51jke3CmfCpMarhfmvxrGJPno2t7VyU77S1QkN8XB7sR2sifjf774SRAFvnvfrqky3kSLFL9JoYQbBdf7N8hDTfq",
  "key31": "4MLiXARyP5Gz6hqbAfTeyPAg1jHUzNrFB7f7LirWKLxhdfUYAm74zGK38Adzs2PLqjj1Khm72GA57Xz3ZkFKhyXe",
  "key32": "2Zcbd11XyRWgBE2WbLskzDXLHC9S1LmogJ9dXBAY3EJWnAkBd3Rqok8uTsm4rgfSwYCLCg7ZSgjE1BJzSWxqpCbh",
  "key33": "q8hK8Ap6NupN1GVqqftxscy2hHoijnBZKVajGpVyBEGszaxuBZo3A21ekzkFdzPq563EC4fS9hNB7kQcnnVcVU9",
  "key34": "363CHehwh8VMSMnFLDaziw5SJE6wdmaUfnrjm3Ynp3JS7VJD1abMeDFw3C6CtoGWkx7BEYDobhk68zNJUPL4gMjG",
  "key35": "3a76xk5AsaD1BrPSzaQSSjoiyH1yu6dJXqzkPGNFDNibqBE8BT1aQGr4zAVAsKJxfSrAvxsK7FcZnYRYWM3tJcWj",
  "key36": "49SySWHHutfDzf1Jedoc74v9QB69y9aAZQx6DvMqpB8TaCFyZNhkFiyjSUs5RDdqdCkcwGg47sWBHSa3gVtKHpAp",
  "key37": "3uezSjEjUv1nXfmE2Xev44iXhdJrUkUWs5yFuRygExGd8dj4PE4KVyucb1pJCBzxYuUxvCweQKrm4kKLkYccxTYK",
  "key38": "319rqYwZBy2zMN3To8SCEhwJeAaHRP1aXziS1DcgeMR7i1GwqEv1KquJjc1Ep8Abg1QnLdausYJqdxUyY1dT7gqh",
  "key39": "5ydfLdZJNEboYgy3bZiNgxxz5aZkMrbhUa84rzaBFNxRmDyBQCnVguv5EnhsBprqeXM7stzUhqNaudQNHKwsBnP3",
  "key40": "2BYigQ4GvusBSrWhPYRaa4NrApMBnMyjerm7pMaCQ41CitdwLFS58ib2q3WHvXfrdZshwuDth5cmQsh5eqTiJJ4L",
  "key41": "2gj4QkermLWsh2Xa1gWYrw48XDpKkWMrE9uowws7fLwmrHb5FpPW4DkBYgee4WsQ4uwzwhdN3Lb2meKauAArZus7",
  "key42": "41YuhJ7bpPHk3kE3czqeyiSQf32xJimcMsf1c7SdB7ziMquAXbgisPm6D9Q8oYFtBpV3sEQ9wXMoQ82HJUbHrjuZ",
  "key43": "2vumsgMh2vzZFRKrrv1rPB3HGZEkgutCQz8URXRMbTccJBqwg3sy7pq8wD2vH6sVVxpAs4SnFXg78E28oM6Xsga3",
  "key44": "4oHgu4rjzL9KWdQsHnXgFwMdJBeFvfMb1Cipgo1GbMjuC1jyH4iJrn7N6v8uEFnrxb2cxVxMGttLs4GX3zjK6pk6",
  "key45": "4zv45S8BSFMjHWPbNBttM7nKWh7xbwzbrJq5ni2qdsTZJ3Z1ysCdXcCrUS6ybXndV2h6TMAQb4Zw42QMAz3wbVZj",
  "key46": "3VALLf7zYGpuJv6rcDaNcg1mXVKP4XY6m6bpjccA93yNuDkSu8hiwgTWiqCQvGTXfBFSKXqPVAqdrUmVLNkrQno1",
  "key47": "4twVW8k6Bk7S6xgeF9g7jnjSh8iBbZKtnCepgRN6caQkUe4saMwYnGquh4KrE1dPvg6EUtwsd9JBXPhqnF3yp8vb",
  "key48": "3azkXe3Ztt17cs6ZSrKbep9E3WKHU9tEbBLMk1gG2TGr8voYWYH6xUrA2jerxRY8CFWibMoJJpsX6BjDz2cDBjXZ"
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
