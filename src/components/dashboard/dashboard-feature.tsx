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
    "2SZxf9i8tPAoVKgKfjCR9VHXcmi4sRMfjohp1HXDTuYZEELGNJZBbnPiWBJ4e1HaYd3pBASXWDbZx9yyxbsAW6rd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nU2SSUzfAnsP3GBRNLVVFXtgKmE9aCLF1x2Qo96DPjxbS5xpsVsj798LL8EidywdKYVJuFYaFZgrke9wxUG2UxP",
  "key1": "3Z6oWaZ324T5q6eDVCrCTjYJZmpMtGMANnq7FLoprVH1Wh4AEntUBzvKrTagJTA9LGdVKHXmGmqNVjoG3RDPvmZQ",
  "key2": "2NuJjiZTibLEV4s5sRAopbkV6NByMT8oeQFNJFLTEREEmWCegJfqeXimPQH22x81gt7NCPmCMUPgFCrwXniZZVj3",
  "key3": "5vWY7o7TVRh4FE3UWCb4G6MmHH9iGTEbPCJr28hxt6hZr3ip48a4v1CzaD19qCKemrNWU9MeY4MXZEFFfGiNwTuC",
  "key4": "55p6B6N6RXbNtVGLRv7xsGwBTHovSoQ9uVdwnLpFNXTrowfQQumSMRFDbYf7XbrSgjs4Nw2HxEgiUJ5RfaapgzRo",
  "key5": "xrUSG1BjkEGGr2pxTH6kvvb87bqPW3Jod8pCA73fDz1DDoDTo2ZLMGqJjAnNc6hJTFpPFyAYfB6HTvCiK997DYt",
  "key6": "5Jz4yJUCDavfu6KqofohoRrN7B5MW8D6fuEjQNMBSfR2yr2r432kdUf9XM19UdiZFAAPgPoHykchsQSvkURUfPoq",
  "key7": "XXUFhRVqnZ8onp2WsUvqahaLWKwyuifQZ72oFasHDMHvKBTPFH7iG8Dw3YUajMqi5t6hdRBh4jA2LVYup1zxHTh",
  "key8": "3m6FoZT6Q4zUjfyG6nuWzbgRWFzG5L5sdiTamyDm6vJsi5zbvq5ufft9oDpzeCDmo9xK5gbf1DtuaEY9VSa3gCiK",
  "key9": "2sN5WCJ4RcXeLyAQGqwkRB4kuYEiNhiDK43U6fDG4qnoQvDQmQqXTQq2ednkPjayM9ECELzGvvGotLxQNh2vLM9t",
  "key10": "5HfTfuLtKakZqZnMP61ZSmHdeNuBUBQxKU8RyBBQnLdeJ27Lj6VEAoZTFbNRG6BDVezasS2jXYYoETMj6BAsPDui",
  "key11": "3KNUdqdYAnYkj4N8xLRMk4JAUHWBbtwGsuKQoR1fXyNMTqdYDozHYXUV3ZPWbpnwdzkowngme6ChM3Twfn4SAPjU",
  "key12": "47o9f2xYiM7w4aVvw7NTYJi3pwhWtMWLcmxNoMBrWeXL4qDUb1XRktzByrNzaTZajbtLzZAvH3gKNGesRKjqnk3H",
  "key13": "2d5YM3t3Ukd87tEaQTog3ewoKhTp7CY1Uck1ct142Zgah6j7d1TzkjhrScQtkXRzZV5sd7RHuX2PqbryXbeSBP1r",
  "key14": "23z91Zwy9zFnsrwq9XdqufPWwKwQAxQZxdfdEp1iziAPeMJGiCYxxFtGm5A8Vdc9LZuN5waDwmtsMyZw6BGG4MUu",
  "key15": "59Vdgc762UBsSKiMJCTyFxFrdzN1GmrLhFEZCiaiR4KvZxCqHAxxJmwJt6fJzAutQ7GJ252D7nLEE9HdLHzJ38bb",
  "key16": "GLqXMvTZrGNTiJG1KfyT9HMs2BiWd26WmNYDmqegh1sufuyX2HM2Eu511eAwnBdJGQ4nELSeW6uXR1J2zs8snGu",
  "key17": "5DJSwLJPdJz3Cd6nhYeMsrxbBbqumVXbkvBfNo45fMNhTUNmgsBLKsmUJA4wbevAjY1jEsQUnrWyUJ5vUkNRsXTA",
  "key18": "3gkBcjCDUApp7D33JAotrBWWtyX3pAA57EsEdGg51q5JUvs2eZrh2BJgRjaX1W43vcB1WKwg8Djsehf7W8jPG5pD",
  "key19": "65vgHy5wem4FcF6Kh6eVRmP1xDKYyPeBncQXbHQ7CzykymRkN7rtDnZyfR4GStj5F5qT5NWv1gm7RduJG3W2rBoW",
  "key20": "VVMXV1VjY81fmF3Q4kxz5GYG51PvPuByQ9c9ps4mbfcmnhnkvC9dxKTMU13gcUuvXAeY4tunSrm9ZG4QRZdbWQy",
  "key21": "4KhDQeaoLsEwERKUN1BxEGTioPAx8JivwvqHEuQU7TuvabYwWLJFmtwVEwrGxq2cYwV3LiK84TnGVY8iqizTYx21",
  "key22": "4HnRKRjaqcSYGTzMnz44BRybHakdGC8Lo5dj2ADQeTYaCR2zsyBeBFSHaejiPLXQGdXMcT7tHoqXdoB3cYHVraYC",
  "key23": "4nDVbS3V4EzqAurZjHW2SpFa78XM24QwSX36zQ1QBiypF97AsXQT2GUEKM1aXivhk4WHU6W3KMk964ro1VQS1D2U",
  "key24": "2f28p4zS2mcuGFhxa9F1WXEC338RtVc7jcGFh8ui71nMXqxnY5jhUEUuSRczpLQk5onuLiVqxQ22SPQjKTGizzTB",
  "key25": "ey7h3sWiX87BYKNaNQKeMR2p4wiVK6SpNqXwNuY7qxK7k7VimVuRzTP3CwkTWSXpADm79KnNFbqYNmB57cMjdNn",
  "key26": "vNSLzd93vfLCzVD4kZwPYCDeecQDLZoJqVEST14ruMp7mhFVFzX9jY795vUB4naSYmpFrif7LEJEFgrQHJNq27p",
  "key27": "3zyyv2K87M7f3epA67KdaNMdTzkF4Y669GLkp51sNpGpVDMWGR9bKs8xJYZurjz4VhYVNoVC7XS9nuM4GnfU3eAT",
  "key28": "4LEJgHgKsXM6cHZ7zhgPdeL2ef5PbyzXTVNx3g1NCRhUupPkUMzHPuTLzeUimFzmTbBonGePu7i81cqwrefN3cZH",
  "key29": "38Wb5QQcGxFiAF9KN36SCm3UqcXnhnYruJVVSxgLY88BksBHi283hgvwfUkphrayeAHU7TEqk7tdABWc2xifqEkY",
  "key30": "DmNhL2Xi7u3gjfSyiL2ZKnMkZzjMSB4Q3GXo3SvGAh4o3AKqpQLpxtA434qV6XYhD9sm8QN69gtF9cx6Bu4VrQW",
  "key31": "SGfbMg3StmCCVupXhkRyiCdirfVVegxzLKjtMtu5b2BwYyUCVBVcySXrFCgDji2s2fgXovoQLZFj1aMJz8ZR8jB",
  "key32": "myjJDEwStofv4AnJPjjiLvW8iXQrD8pSX5UqJUWcPFnKLoPTEJtFc1hu36hyEXWZ4RV18cePmhSMPbu2uQjwwqt",
  "key33": "3SVieGqZfV5MVywwnD8t7nMhnxwzZnVKuxgLjaAaaWStmZS9BnztnLePziFfX17M4E5MqymdQRRxR8BjFAzJpn6m",
  "key34": "RwJJYWKZ6Gt2bbTHo334LLB8cnErNVjyCV9Y78feWkhVgAUB54768nRRfdwcJsddc3xpVmqpvCRC72aCwDL7RaB",
  "key35": "9qhPuMJRAtyV7XySDwvxbGRyhuLzjkdsCQG1cdmXeQWuzy2rf3WVtpd1Q41vCpStupxFF4ZC4RbFeRxznfdcfDU",
  "key36": "nPNRCjAAz1RRpCiaCpTV43hVsxpouE4XWKbJPj3SuEiCGAastmbjC5JvXaho2bgFAmM1YFXB2BAAPqVFZHJvuDA",
  "key37": "64jp6ba8Skq3BpWpknTXQbJKA2ktAmA7FDWRVoW3X3ZmEkRd52Lf3CkzAYR33A44mVSAxHdAeZC1gWRSnGG5E6t",
  "key38": "67PPqd9sbwzw3mkFsYW57BuFH6w1BCoroS23d4xQxUkHDT5LTj4kZUwbKUxM2bPZyBM5g5V8e9bvfTMzGDkSWVrZ",
  "key39": "46EybyegympHqrk2AAL4fMgqAojQSQ3GMKCWUFyB4ctVYzwhBVLLcBNfkxrQFrAfPNL45bjReLDvStDe32ecJyTV",
  "key40": "2eutwJC5rMXy8rEE6JR9DAx3kQHEvf2aJzp81FWKe682D2Nvm1LxHhHMdoWPdzbzNbYDfBQ58jDz6dvpDw1M4hVZ",
  "key41": "3pkDxvTpT4swPPLR7eiZZUSxm9JbtHs463SKiK3rqt1PAyrSXYJQGYNtCCGvwbTg1Ama38w6epouPpgh2eZKRXhG",
  "key42": "3op5WbgbaeTXkt7UptPhAm4mcBD48vzMMVzdVxUNZ9LP4FXgXjJYN8qkQ3o5CehobKiBC1KoDSeTGDaTZxDEPDqp",
  "key43": "5ymkxBWXFQF52rDWDPdvtmDuaaZqE2nVFEjiV6x54yWuhnEGgvvQWXNXEureEY5vpMhMevBVTr2m1ELJJnoYxm4L"
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
