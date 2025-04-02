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
    "51N5QzzKwDZudH3m6BHybU1iuKXvMzkyWo2FMTteNWfjyr3c3jRhxZ1EM7QRxUd8jg727C4R3UTEmR35VFaKpU1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39fcr7TC52r1GW87esZ9cUNgM55zwuKVSvNZcpWYfKrykJifCvsjwF4SuXYD4r7QWYXJfBsaeThM9KAbGoZsbFZj",
  "key1": "2x3dT67h9CDod5Hmv416HFCM97iEP3M4WMP1imepq1drsN3VTTKJ2H7zeGwn2yskwCMUuf4AN4Th3q5eGT2hRagd",
  "key2": "5V7dYG55j3GREnb1NtviDXKo3aVMQvGzK56V3DadoE9UWfBrFmYsAazAtqyVLgAyN44XB5Gc6NSBtaNMJLnJhuae",
  "key3": "3zWtyRqnpnmPFyVxxbYRYQkDYPQE4FbAUehqhjhLENMDWyZwwoE5fVYv29LzoxEAnRNLxxbDcLqXdutrLSiTC4SA",
  "key4": "kRQEnjpFmAquxADNBFDi5G43ANTU5fK1dGDfMJC7JEHJfAtCFktG3Smpcbp9evHacNVZoMtCwxsZsrQrmWdnMvF",
  "key5": "3N2isovBvtHs43Ti3ziWDyBX6frvjkSXuGFFWjVSBJ8oenaNVNN2pQ6GdG4ndAijjMML2XuavzR7XCHCAk6WNqK8",
  "key6": "jDoexdWqDJFs2Djej3xnbaysbVxWnAy5PVW95bwvUgYBLXzGPaovdb6MEnoDtQ1tVNwet95N6AEcwemqz2M1gZx",
  "key7": "4z79ARrYJn9icytJZy39AJnCPQXeyg3A6vq3YsvjmLTWbwShYpRgvQDeCmU5Zmq5hHot5ia4EHDckzXR9E14oLCg",
  "key8": "2u1Sj8CauyCk7FjpWyyCaNyqSCUbRUDd5zWVsznztCicgwpK2YBJq3VeMzEU5D7Nfjm9TJPy2GeF8wSd7n3VoR6S",
  "key9": "5waC5Kxjtnkh9T6TF59qG1kLtLrtoedvq4DL6Us1Fh65AghXwRDkdX3AMhFzcMNe86CFmuApbwYQcBC4ufHD4Yzm",
  "key10": "deDkhM4cQEv8jMbg6f1Jn8qDDYfuon21jUYsuMAiZpiovwHA5oFAcU9xcG1hGfVbZEiA7ZtSUb8tBjUYm3oZBy1",
  "key11": "62bHXoRVPmTqGFwMsVWG4ZpKbm27xLcFFL1cpW1bowoXtP8bfV23TqP9rp5KtRx9WkqLGBATCQPLQMFomzFZ8tsg",
  "key12": "3Ln5Bw1uwoQdC9BCBUVNx1i7kTJDjPWXfoNTm1q9iFL8mGByTaWwUo9vnV4Cov1G6XSttqHN1qXLKohTrZWX55zd",
  "key13": "5yk75YWnTxCZHcUULMyoaxAXoYNm3EqfWZ93y9cAzwPFWx766woZentU2TDPyMwDSxWG55tj4e3ie3V9ayxrivNh",
  "key14": "2d4cZfYM3TpT93xhWi2GGhhvBf9KNB47HWnS8hnVBD6zqgHFVBqk3zeWcQuBncetZwVSZ1PvgTBqVbTguow5n4hr",
  "key15": "u8PcYQpXmkYqfHGds7FAHxL3eFnLeiFeitppzVEf8gF4eHSKt4Zm2jquSBeao9hRETZxCD7KzR9MQ3LFqKx9LVH",
  "key16": "2cJjSSTWU4m1Xi4rV6s7dUbgFTFVuxFkhLhm6UGLFJuYxoyT8Ri9M8tLqJGjrM8hY3gfcfUKc8JdkgiyAnEcEaYs",
  "key17": "5zuhzcNsM8AiFUG5eywkhkEpshxBdV88BQZkhogvFYhHEjViXDzs5A11jY9qkj8SNhwMW7TkguueXWibniS7w51F",
  "key18": "3nkNY5kjXTx4Pe5xGGorn12AK6Vi7qBT48c9hpeB6KcZBMJioyGGAiVZXwiRJHCzBBFMWrv3D1JYBUrLwU52xprR",
  "key19": "4GD6UkrZepD5vWsEic3eMmAUooaLPvkQ6girdytMr7xYc6Mu3p1CRPRtcxYcQD1UTwXGk3z2j5Bsz7frdQpw9Qrc",
  "key20": "3Q6MT5Wc3ywag7rEFtNYgjzacEP4VqvTZdUZgDJvorbhBnVkZYKUL6o2mHP4Vr9rRCnt5uqzf8K5Jtx5EUm3myvV",
  "key21": "4PsVZ285gX58wL2QuvKVGwFrAddmQb6R2tA8iCAiarnjKYUpMFc8k492DkNrM4QLashuFpasg7TiZWWREYJkRgp3",
  "key22": "5hTxpHmC5GQQ47iJJDwcfYgQxdbFTMVFdfxJHtkLuZ1jUqEKdgXzWnpZbU5sosTWrbXQ2w8Ks69aoBvoK29XMeZC",
  "key23": "2qF6FbE1N3GqeX3HDgVMfc1e9fnbq1ufinGswUsHoHhQvUDTCchek3yrseuqB5WqjkR5pGKGh5vYGkPYyHyxLgig",
  "key24": "koZmB58xLAA73xWnFvETYEwwpwUDsGDTf3qQEhnsoPVJ68h3AmFsL4Qboryw9z4FVWLRLonLktrGqWqsqwhXVJ2",
  "key25": "5TvZXieEuvGuYK7LYeMcRKVXTGuQ8kusA6H8rFf8vaDrHqfcZRXJiAggmq1d25Q1Yxmb33R2j7TNYY2EkFCmNoKr",
  "key26": "3vAb6D5Bh5YfFA6CGE9pR9NBGR8fCya6DS4tBzNQ8spsdroYHbQZ9kdytA6vnzAiWqqgfdLNoQenmn1jnktc73PZ",
  "key27": "3s6rxef1y9BTscuRoEbCBz85uuAS7H2hEqwxYVkv3e6sEejCK9Ftxhv5MWFtiJvYACjDw6hUjLz3s5pJgDsyeB3o",
  "key28": "3EYfcgWP3HVhUAtvPMnffVcE1vdVd17KSjE5AbHcxada5V9YjeXwrn6aiqSQNpn3Y48PyAmshht5tP2bHepTETmb",
  "key29": "87syg3LWyXG4GM5G4JRFQGxjuwMvBp8aN2nYJcgM164r1VQ5KVkrDEPZnWb5RChRN9GGWcDs6JCkZUiRyhvrtG6",
  "key30": "3MY4ajA8US1SJpQLnu7EpgSymygngNu22HADpxFSeq3X5jv1DffKVZRDtN3Q7mi3EDxCCT5ReVn4htn8agMbfsXm",
  "key31": "5LgCcSNgnRijoi3cXsYk2CQmYwiK1UpqdK2BT1KAPMftm1SsV9UvHmXjsRbbayTQyPk6tBjJRFxT8m5NivYBxEiP",
  "key32": "G2zvCT8uDp61EkEjraRpXPiH9Mrj3guBMhcRpGCm58UZW3koBmMm35xJS1c1KMjeU5f2cbinJGQwX2zVHGMKjaU",
  "key33": "4oJk5PtutchiPZE7aVnfSgaxGhdeq8oMpw1BDsWDaB3R4zzouUyZUM9CamZBCfTr5ARjuXCHEue4XZJEXeGDJPUk",
  "key34": "42YGgtrvkekzFGVVarA7zapvFjhUbnKCkk7Pz25iXAqWMp9f6mPmtG5bv8NS8vQjWucTrXVDYfwh4uHCLWnhgs5r",
  "key35": "3pKZNuQ3hEkWGNHshJULdMdjLSfhk9W5n2A9PE18759ymc59nW6c8uraBQAssSZzz6zQadqhwHUmFwNasLTsraiu",
  "key36": "2vnVFqCrc9AueiDpj7gZREZJVzXM5y8AJYKELtCqyZQNUrpXcXeUYCuNuDzd4m5t55akMv38pTBpkfTQekWMPdGc",
  "key37": "kHHayGmAyEk6wMEM2NEvpcdCpgY5DC3bR5eYth7yBVwjZXB8R8QKzZXyn6aR8WV3oPqP2EQuvuT1SiEe16Hz6ci",
  "key38": "2xGps9vSytP9wVxTEA3wKCMLyAVJ7yuuprjq6aSU2cwWrZhiQXEEwmhXYDgK7NhDekrMx6Ten5C4vTFs35TetexC",
  "key39": "5XYM8w11QLQLt5JoH9NnALqdLC5yTNuzEdEFGt6NgWqSmbeWNQxE1LqQzxHsW8wTZ1BbJSECfei1sY8r7oD4ruhb",
  "key40": "3LAcpoGhkn2kpMZnBDax2m4Gs2Eyp95Dw9h4orZFkkn25rzMRLQngZMzCZdsrtNfWDHqwAvwWRm2G9APfmyPgPez",
  "key41": "w8QeAoPUFbY7evRA1Rnf5eykUztqX5ZW8mJn2A97vkekTQtktsz83x2ntDPiDqL4UdhoWRGg2Ud3AqBzYGpirQ9",
  "key42": "8R3tLnYihGKZanWAjfybL3C4LSMUicNFXPUUBferijvhoMn9qcsKSyA44xhUiy6eS9jygE9TrBtC6iKbGLyctb5",
  "key43": "2kJLxLGhxrDMSgiWS3deYecEZmfpdyPQ3XoZs9nT6xdn7oMzCrFAJpeR2vbzwBTVT385CdMhAHPzHGm9bo5V5Jnm",
  "key44": "5Mr7Y3kcjdfJtw7YnZXgw2tRgB71Bo7KqcmsmEw95nWstpMGzwLkp84T6nGaVaBYZdBLUhY9PAmE1FnKYSCcqqzz",
  "key45": "cr2cSf8cctrqkh7geSJ8EziHCtZ5N2zmpYruSor4PC1hESSxEH54MxNQ9tDgjDmjVXASjatMv54tU29WWaTCD3w",
  "key46": "2uqid5hD8KMoiidcPGU81UYLz4qurhpAfnF5cHtwp4VWmEHVcNVfiBasYdT8vKphS5zwreCdjS6MNEszC8BqmTqs",
  "key47": "4ZQStJvsRYYixhtSQJwgzCTr1AAEc9XhF39cNDSHCJpGKUan8YtW6w6qcZTtpEVBQqyRPZevwi26ykbaDDigwzCy",
  "key48": "2gp84WZWoAFsSyf5Ha6GzRe9vhVetLaEC4Umcuk81SiXQ3iC1GMsmSAAH73SRxhn8x7e9iWF3emt3zGRUjhModve",
  "key49": "1eSAaT7ksR9agAxiRi6qhZZW2uxb73UazEBLAbBzHKX7mDYX4fcbmHkCTMbDNDcFq8z2URb99kgBfPkqYVHEGez"
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
