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
    "45H2e1dSrDqu43sY8Et7epLDgthJpdthfxFSuwaV6jqWB8ZDxDRaCRiMTMJhF2LKh3GCifXxaRRxXp9gAa4tzaqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zN21SQWzzCkRmsGWaN4DSph6dSLtxGYJDcKpW7D6TnLyUrYx6EZYdM8B6MG7fs5LQ133XZSaYdTkpwWo5aX31Ai",
  "key1": "2Y5u5sftcYJKgkPmDikPRqJoce32SdoMF4vpy7dsnRfF5YLh5VrDWcgSULAZESufoUMpeLbwLC4e3rvHqP99c3A2",
  "key2": "2S3KrTG6MgszgknBcWshsDd3tJS1GbePd1gcQCfqXCQPmdSTewWrexW1nJfTYXxhUfmu4V3HawkSEnPfzFp6ha4t",
  "key3": "4wKW43Nx4xYcKQzSnoxe8jxPBEhM3zEWwxx9vjUn8UmfJn5F5iz1uzZnrK9uAyz24919YS3V6t5FKuT9KLsQHHDs",
  "key4": "2Tdr8FaZL277cLmVTmDXHrhaJtNiuvcmzAaYmGUVDv5qyVmu19gVHkr454BHtPcYPGYtkJFuoBj2JP9cfkQ25KEJ",
  "key5": "46u5DgZvBexW9dgEHmB1a5ygH8RJ75HfC1T3XVHfxMPGaip7mnj2njbrwSsc6qgJBkfNPjxHzJXvzSEiPZJC8vH2",
  "key6": "2sPwef3xHycb7oFTtczt4MwjZRUd43vKoyFbjX3F31MJtTXRmejHL8ysbGiqVM1Gv4HWY32LY6PkyGP6H2hWB2Cm",
  "key7": "2zoxJcbj1Q4ENX9cybgiW97f1pYftVpCEqv2CesHtn8E9XS3eZKrWTqQURTDhwYbBV2La1Wg1zr3U9LkrkCbHsu1",
  "key8": "4KXqrjvmQtF5Hz8J7BvdSczHDAaCMvwGveoReJJQn6VHqu4h87oNXm3EDnDyrBxWYSBuQBkBS7WTfKmMcwLf1pCp",
  "key9": "61eUgNGNX3VzPynALrcaU837Eo37cjZVgVszorLf6gEkG4aNUM232CN1J7ccnfK447ugWKGgjMUETVzMgpj5MJfr",
  "key10": "5pHopiV74NVgQqP4Va2AvqKN3KBgw9Jj6huDc54qEh9yYcxKeU5FQh3cbKvTP4RhPzyX7XpNeRU4uUU8G6NSkMHN",
  "key11": "Ci3sVB3u4ptiGFRGMxhTpyJbWR3jfhK7w84VWPPj2o42BdqgPNQxrv3E16LjcdJYLeYUTvECW8D7T9eSptsVAAW",
  "key12": "5NtM4T2wTsdW3ssP5NpDRmm4rRGVm5LC4GxTPWK8aJ9u5AffBpxaj8TRxJVA7McnTbBc7Xj4CESzPsy2cNH1u7rL",
  "key13": "4CbEJSCWMJrXRuogp3PuJo2P3KjcSiqW1TUeWozdPXYf3ePWV2kxfRQcpsmSEr9SrFhHBDfoyTns2HAcsEJxEudT",
  "key14": "5sdfhra1PwUcVZ3jZz8hRQxADkDgYBp6qoZqPRXEFUSay74Ls9rs5CXh5DPi5K6JoQqbGN96u1wDH1vLNZzWVHie",
  "key15": "5M1gYUhpDLeGP7jLJjMoLK7vYCUauSoizYAHtQu9P2Ma4L1kASUuq2kG4jgLG2SuuxB4nteR8BwnPWyAq8kDa82q",
  "key16": "4m1AtoDaPbnEdqgsgfusyL2DUNWm444n5XDVHWh88xQHwzxBziD843XxCZwAzeDXTMJMMUeUhbjNKiD36DmpaxTp",
  "key17": "265kiq9yYzgTLbWS1J8rcvCtiPpXHYfPAcHFofTwaTVKMiganJr33kJoajaPkG6gg8EaiHriLiRakq4PqAGHxLT9",
  "key18": "3w55PPwNWmpbC91B1ZTqodVHzzWSeZAkwvdTs2WH2NoxsqeVKyGAxBtRrm6XwKhouASg5sA7MjFDHTsLNxMdf67K",
  "key19": "krKL9d4bEiuLBmc7a33Rxgzgn48JRcdZmFfQ8Fz8JrFh5XwaCetjPg6ypfsdzttYgTsJ9W8uJtMoMasLfy4oC6d",
  "key20": "5HmNGZUkwpfgc3SwHQGMiqkxzeQ6VSbpFjB1Wz24EMeVXc5pa8dBDGkSfy3uLfc3U15k3Hj1FxggL4Q83kg2kAKE",
  "key21": "2oofKgZHgugvhmrwikSonbgLj7awPjiEJDX41SAz639VmZ1AM1ye13gy4de5tHnD66XLwLDGrJgD4pcsSufvURxp",
  "key22": "79pGNcbSo7FyNQQrXMqE2LkLp8XCySroDAftNz1NG1syiw5jBkATg181uJ4kVLRRv72cNc7JjAqhfBaUm6YcF8b",
  "key23": "hniz8Nq56EFRNFwFnuzmfdg9m1ThQoDCokZXfc3ic9WcreHyw2RXCoxGwSwDdio1Jc6BHsmzSVNeySBw1ub9ww6",
  "key24": "61SpNYiMQFa3cE4xjqQYq4sbZ84ddSmvKBMpVT4ppxCFfqwzKTUqTg5txuby2qqRtk8wtupmht3o3vKMYeoytAXV",
  "key25": "2eHqo1GuiGgzeovVUmoMXiC7z74MDArCVG21SE8QKXr4LziD7vNGnj9Sp1JwwhorAmkUaeLeguz3Z9wmfzkDGMpq",
  "key26": "3zhQH8wvyabEeAc5D7JtUm7pfowRNwzeijc3Fvpws7MbCL2CnMDYRAHt3tusXebKKU2857vwk5ZEY2khYbaZsYo3",
  "key27": "47Y4yoi2yqaCeFwmWbC1iUsPh3LzyyMezd7wJZoAjqV97pELGYpMhUeR4NQ6U66MG6D4XHAknAcfv1V491KiPQpj",
  "key28": "5Pn8JxzfyLZ7Z1yoQE3WwzpoCF28Shwgf88nXVtimUEDicB8b3678oyLqN8p4fTNSGvE4qCs6pFvMd2tCU9VJ6Fe",
  "key29": "7wRihizz196ZxKvphzUZQQwxVsBfanMT13qsoJhoTzptvAKkoz2iVVrRk8grj26t93QPoFoBAfshf31TnoQWowY",
  "key30": "2JeXUK8JpsUM5Jaqy6nCPK5keanCPmSLWBZbjr4pvKdimtoaqk5TMTwmYRcQ616gMB6GJHzKwqiEnouko2RA11F5",
  "key31": "Di7p9zn4mMVRY6YmPUYCadHEy8ryhL5b7zyon7bCHzpCMKWW84LouCNjXLBE8o5T33tdRitua4x3TWZvovBtXgE",
  "key32": "4kamomNL1mXN6iE61XSMEJJroKTuD2FW6aqdR6XptM9NprfMuMmcxAoH2ph41UzCs4THUfuATxAaCtm55Uoz3mvo",
  "key33": "44hNrFbuKJzuLewfekusitaM4msoxVhYkskCxALTqiT8tSiGKhqKNUW8sMN3vBwqhYd9f3hddQUFv2bYoK5dzpn6"
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
