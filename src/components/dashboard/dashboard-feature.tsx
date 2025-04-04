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
    "46GFE98cgP7varWYGBvTCWs56PU6uAFmmPjPZHEfEkSxFbC8QscSgUe5pykWWEr8kEk37WeKKpttyZSfKmEhq4cV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HfnHDGTHEWEVzoCyJhgmc8jvPdiLPcRajhNLQDpKSuuN1pTMN1fjQAE3Lx81e9jUEtwWys9iyzpqPbPPJiHduhT",
  "key1": "2D9Ms7VC7skEMtCtvvQumb3cr46TTYGQ8RjToNtntNn96mftKsNgeajQFTyNGgXRPTzYjgasKnj7ny49j3mZP6yT",
  "key2": "2jA6woahoVm5dJxSLKE3pW3s1uk4AmCymdJZkZ2bzELiR4pJy9RoatdYmWraM9srDQUYfwQ93ffmpmCQEnwoXeZw",
  "key3": "4KqhpHSd46ZM948jgpLfEmqZePakhXefxFxypeMLH4HnVtSXptQShF1kqEKQdYq27ZqxssNk7WZzAe7CeFUb28zR",
  "key4": "3Gd2NLNN1x6FEE8o2g1KVv1o2A2dhnMF7F5FujNuPS3Ziai8FEXkkyvCQtwTzH5oEynHR2PUNMUgX7TXT1TxZxNK",
  "key5": "HfRYHtotCvZ8g8TMpP2szzAAgxppXkv2Sok3nhRaUru16MuQ6AfRFMZ8fjMKJT2orBZNYzFC6H5Z4xS6sBZQtYe",
  "key6": "3NddPLBXXsg7nEcHmTzP1ZPTKoXXXnaUDFFLjPgq7jQ2EGeaaeFxoWsUtGTE1FQeX1KukFnediTVyo2rDvPqsL2e",
  "key7": "AJyZajm5xcDVU6jUXZdpB1AZw19psBNSnPLege5a64QddVQuiNYeS24LNj5YLuWhTWnV1FoveSNMefsfWkNhtCz",
  "key8": "462Z47eaza4kQzCgyyZKFCDyr4QK5vEq8F73bxynbNWksk3ivCdEyNdJgEdrqau9BREH5DJV4jtYmvogGsiduTwq",
  "key9": "5rjKwUD2p7YyZUKxpi7ieCeF8BRMLvLm1Gj5WygEDwPSKEPUvKvh87yCQVvkxuxgDUybK3opa3Lp4mWfjJ1CyE84",
  "key10": "36EpSDK8WGHVXwcGcYF3vF6vGvVSpiJ3d8d6La5arZqkT2H9tgVFgLNgVUx7HxMzxZ9Rjy9WgyXYEqnwB7F38uGW",
  "key11": "4ahxGrUdjNgsgW2PK1JQGnphVorQLB4vSA56Chp7WykMvjwryqy1wZVvYfmShoZ19BD3FmHNSbUjrr2hexU2JsVQ",
  "key12": "25MVPssfa9ZgU1HtuJ8HduexUueWCr5aiRt4ccUv7kif26SEobm2g4rzVHohvdZ6kS7psevgw8qCi9w4LCbfcN5r",
  "key13": "2Q3JdJRhjnUDQEzYrDbZW7ZZ9bg96an9wcMdfHi3U7Ng5AVGiaTBsLgLrjuxEv9qQtshFnmLuyRZtJR4ZN747CSa",
  "key14": "gdRUEHuoeWfWuqkkbtrTRmdyyuYzXJPakm5VQxdcbYMst9pizGzFJMPLK42WuAHR4nNZhWegneKEjFar8jvECKe",
  "key15": "4VgTjFfYtNeUvgns9LFCufASrvJHZYNXtSYNZKqSGbFuYZNZQ2f7t22ijuLrUJifBL3tenbRs65cszcnd9FKgkUm",
  "key16": "4Cme8Bpdhx1xxZB7TtMsDRn5bbJ4Rv5BZFSTgVnXVTx44VHpHMhpahLXc7gTM9G1vmuR6y9XLbRxZ1tePY9BziNg",
  "key17": "2RkjRm67YLBxxrSJx11EuBYAwa2KMTBNW5vSTrfEtLm7fRCUzdb9sCGpVm2qe2fkPLkUXbAt4rWHjyk4qZMooAgu",
  "key18": "ZgDLmpPNYcaNDeHNDh2CDxPgNWErhAWyjiL85WViBM4S9UwbhRhy7bad31ZHUa7Sut5jnHpjqaBh7ddCywVCXAX",
  "key19": "3UUaSCKnqbN9pdZ8EUsHVGcNohzYEBKKb45SzoRobqfjcn7NgMtUXK5wBeTHaMnjGmLqGpcjF8HsrZmFV6ydmfAE",
  "key20": "MVETkkXaibYUgesd7M3UjPLFRQcbZzUy8EwZ69xkZfxdqtLPBVLDpRCBkjs3TGvjcLTacSgQTzvi5aUjBSXNhVg",
  "key21": "5kuUYiN8eMgUszJ5nECmVabUNCXaKrZTpvDY7AmJDzVXd9qZCRGZrRno4oKMyRBGzEZmVK4QWAbxhZZgTUnMk43M",
  "key22": "3mSxU6QT5fRz387Hz41EaBd5qYk7D41YS56SNpgGC3uVQTnaCwM7hPtwU5Xbz3GyK7SUzkTD8BtcBUAShXA9vHyD",
  "key23": "4Ctth67KFHWyavvbrbsk92jE4uUPYomPGqXCpHwnwctqTrEkkJXqwNVSiRGC5EhTMb2bpUbAV5FsebjAY1Vtm6A3",
  "key24": "5nFZTTGB1YHowgzdL6kx1DHmkPwcBXf9QvczbYEy28ywpNLcswMf6coqxLr6dkvrAS5Xb8HQsCXemKW9NDxx3xLw",
  "key25": "393S3h63wwm7AC9V4eyf2We4YgDxLH7qTa6XFxsczSZgTxrE3yTtbBTUqSCtsiGBsdf78zCCLyTSYT36VgnZ4roi",
  "key26": "rgxbq7adFtTgXaVL33szHWeK7E6XHruDMsDwQiobP36uAE4eefP8p4XiSE9xS5LAfSArYrZ8Gb6noFmKrEsBRqr",
  "key27": "5UmhuBYt8j253PREwSq4mnUzwgcn8VzprcuqwCw8UA9HtfFDRReHteg75ycqBUcZ86rsiTnv9SRzoucfsE4vGpA5",
  "key28": "3pNqguR3Vxdax4oqfGCidjh1poh8Dt8tDgaTntkQ6DSDQL4eCFL9z3bBUPe6qbDStYMPPr7yGDVQwiNhPrDR8c1N",
  "key29": "RryaFMPWPhbeGbUL7C3DkUf112DqwezrjE8GCrBtx4HCWuje5DWy1ouEWXKsveLKwSP2HdvqHHTW1VDP5WoUsAC",
  "key30": "4zQmrHgNyx4xtfpnUPDiQWpwkZ4ythsnSXp8ztMYaJUVK4HXoBHD9DKASqx5FcDxbzeNEJfiMHw2diFhQsVDouW",
  "key31": "4aSSiUwqrGiMJ9GwpWh7pfAgcezVqdMZFPadTB4wqdvPrLUAiHh92PZiseUYA4mdYAF3bjPPj85y1P7SfwhEXmsL",
  "key32": "XFz1eM8VF84Xrc3hq4UkpeXiitWCQHPqfsH3aMSXSkDP1rKC4qAMpPjBsHz1ZTfe9yFV2Av7HBXo14ZGPznURbp",
  "key33": "47eCHo2joVZXGEpcBGyPFsc9AfJjcao5xp1aBcuSv7ahdd7RRkn96HTJUkLCqvExhdpC3a2WpNUpRtMRZPebfceP",
  "key34": "Lf9UjPLeMWvpPdzABTsVMB8vvy3jPK8RASjJdmxym4kqDjxw6DjHpPv7QWnidoC82J1ixdcs2UPcEJgvx7PGRzn",
  "key35": "9VyqJVKkeZZ8Ci7h9R25LTpepkhM3fdatzKmXqqejyuufguUkEQtky5XqAsMyEySaPVWaNjLjMWfgmHgo9Xfi4D",
  "key36": "9f4bdSk9ffvjFfBoHiUyusb7Yoa7t66u9yaktkkUFBqyCxaLqt3pDCeTygfYbRmVjHvYVPPZdPcZdDZabQcHVqu",
  "key37": "5RD3fsxhAtnXVHvRgrCDYiLjeCJEeZKJM6bSd7LPnHw5hcfyLDVyX2spSkeo6V1qeDKyeDf6cTet1i3sH32bhQzo",
  "key38": "3GSNmw9KRfBkBk76kL5xXagcKwpsueiZ5P8ZbjrMyr7VRZENDwjwyUfma4d3eugGxLUHw3WwFz2zmtgP6HV1poq2",
  "key39": "64546ZE3F3ZhiNfYMuE7Sab6f516jETPiYxv9zjVkweNPVhKGawBv462fBceuhrXQyXAF5eNVrzSvtzDBgv6U8Z5",
  "key40": "2kSY1p7VTwUJTASZ5vBDiC8CxYBBQWcHXyQDCzCa3k6ZH4MmU2BeR8SraeBv5skG2CHmd8jJXgQJShy4bEYzcGL2",
  "key41": "3WxszSPdM6i9HmWMfRLsioQcqEVNFhxfpewEeF8KX2phYrZmCBv98nioaS2Ae43SFDGbPjiGo7EWtb4PT9WBKSfe",
  "key42": "5KSFCMqNQ6YdXGq2oYobNcPxWNjFva82rYfSwLV328rfCVKsUguQKEXTt4HWchxSEnkyXBYx92LMAEJBMGQsKnNg",
  "key43": "22M6EKCoRe2waCmgnqmvoLLFsaXm3APvB3kdFPfLQZwi49UqjfJdDQe6U5zZJjth7NqC8mAckgkbyjyV6LDsv87w",
  "key44": "2N8HoTqQbyseacai533g6z75hc8RSgdP2zDUYwkWcKvSE6LwEVFzNVBhLRv3zWMhSWgSDXWhF39bEKvfv4Ku3FzB",
  "key45": "5iGbgfPd1ixvyD1dReSEMP9gxLbfykNpa2qc9T8JDqoWetiSFSvZNJa37rPspJo71ESTv8qiprYkVsHod9yYants",
  "key46": "31GD2ajujeKpPxYDLuZD78eomGgVLaQuHq2F4Uhn9emRjWGN4qFKwNf3gkafTUJAPob7UPMDyyatLRYwrxEyvTMJ",
  "key47": "5ftsWDNq9ikfitAT9wzVzsDC6HVBMfSwNvFNj2w18JYTh7duiG58fBLhp41KwSAkm5Fi59VeMynuHWGh4ea44Vf6",
  "key48": "2rz1iVDisLCFyAUGv21AxpKKM7E16KJbVrBaPdwc5oLYGokCua8HAPnBcNE9dPeyW9BwvcgBYmDpVhm9yPvYA1eD",
  "key49": "9pdCsKbh7XVgWYEMbkeCJjSS3Mm67RL88cg4Xf8EryGBb9kNqiTgxYxLvX923V5Z5eZbwt2R3aJ7Jzhh8pNH5vr"
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
