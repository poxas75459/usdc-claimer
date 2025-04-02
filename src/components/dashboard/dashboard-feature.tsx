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
    "KsxqQJQvrrvWwfMJdVD7VwZgRXktaU113H4BX7poabjLe2StBtwt7mNwAiohgh3M6FQ3w7dcfBZVVATiTHyeppo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PQU2WqMarrvKYqJXfNMCrAno1ZNoVLRDR1g2wbVARFXs553aw2SFJh29Hs7tLZbHX5ojieht3d8SRZJQ6gDau9R",
  "key1": "26EvqeB1qRbHDiy9wD7hXGDSaXN9Vq1kL99M6gt2QYeuvu7c32kJJRVNwDHKZNT9Hq6sgFx6hP5HShsoRxuswFeS",
  "key2": "eXdsJGb4KJzuMUgMyZzVsYTg6n2XnNxotxu3LDATGqb6hQ1zxKW5LBSRNXYVeesGwGRiVSkY5XbQR8kYedBdxch",
  "key3": "2K2xCu1Yvb3dWN2GfWSzkUVvBTdydpawJcDTZdDdhbKPj9FaBLcAYWH7TJ8SWDPRtYr6eEenLavUm7vCnxZh41C4",
  "key4": "5ZetzFN9WHqoqcucRBSnpWP2jZJmJJeH1GW56anGqw7WKakCXBvHUWJnMFrx64BnhLjhFnFrHZHss8anv6LJ64vi",
  "key5": "UaCNvJeMnnmMpiGCzdP1Rb9i1xEb9RP7xJhgBWqh2qtLKHgzR6E4mPUBtU14xH8wUnewiUtf1NjFaJyqWmH2CG8",
  "key6": "5FT83YdNXdvdrF5TyftW8WwTEAwX5RvzHPHL5fPTr9ugwDa37TEXaCXzagahEZHWMpUP9G1mBcRw3ggdKPZ2Tq5r",
  "key7": "PU97trMg1bU1qYuk5Lh2kDJPJNYFohjTaSnVLFxMFZQsMr7kM416w43sevJ8C8XqJN7TdxsE2LB16Fq9JeYitSK",
  "key8": "3tbBzVoFHErS3pWTtgKkPmQWw6x3RoSZKB5CQ1tdVfYKQWZkDufGHa5ZM6EMMZw21pgTwKwxk8d7kr3raYF1WjyK",
  "key9": "4abzzNqjevCD3zCL5nxfQbeemhbMfEvaVLXorFUkqEkVLakirWzjpmimCUdSvBd1Kv9bKWy7CR6vBfkC6BMtNaUN",
  "key10": "3Przv469uF7WmwuBnnLH5LCFZHMhrYrUDZ1jhYsccJ3v7EfiyQBPSNSESv4RH78RgvGdcb6YrJcpV2rUygc8iR5e",
  "key11": "3cMvNCUiRUS8kntwHagTBHuXX12HYDXAzmcZoCozanxYLe3SynM3UrGR34e5EaLjMA7jouURQCBWWzeFrgKDVntr",
  "key12": "Xm54xW7wdyTVsBEZntHS1TiJSmKLHovmCdAfdcQnzWmWCiY4JuHrPY2TJwmWxrFxZbHVYYvnBb6hGKM2GDJ5Uo5",
  "key13": "5VgGPw9ktyMF3GRYgktGEswUKNRruBpCdyLXUqgUqgLKMzMHuEJ79pqwn5JbRuPS9s3QuDCWy4xfpvcYxyhLvfuN",
  "key14": "2bfbpggq85ruPAbEJesY8h14iZ9aoe5TstSf1uGM98uAk8wgoT6gkZSCAPoreMd8fXnXAnTN9HGT3Des4g5jYSJX",
  "key15": "2nFcvehJTbKtbfJfgymZVvPvmegpLAVc2Y439eVTLP2PgShHeNe835YYr51q57kdTauQB2m75HAwhi9ykL8DmbwS",
  "key16": "2XCRJDNH3qa9tb4m3NrJWSy1CgCGjebWasfon7GSpYoNb3N8rN1jijE68dJkukgmNa8XzcBvRroozKXbKVwzPE3X",
  "key17": "4CsWZoET9CuLkNXv6iiGnAPP62rrmuFxHAPBnQ1Uosx6UXZ6TW2sacPhaoJQjy3VjpDPtsST83V2jm2JiBqJvs37",
  "key18": "5iAf2nq437CZZoCJ8UvojiPfo12RxB3YSeQXNPctAM2KWUnYhWzBJcTzhbp8XL98dJr9UuCokBMrzQbXwWXnLPXP",
  "key19": "3VNjKwTTDQr9ufWibeCBBFPunBQeKfcYVRsdnKmsWcuU3DCetWMpE9VxRioDbuZh8qKV2EVsuXJwNnVMRkDU3LH1",
  "key20": "4pczsrY3FpiJfz5ntLtnetd9vHH2cpJPdqNnJSxXj3yseNGxpGj6RRVeUKjFwaqXtfvYq2esbwRYCDDX2dnV6SDi",
  "key21": "3pF17tk7RgTdKrPoNHk9iupFGVsaj9AfpTd4YZ9i7AMdyZzKLNrJJQBvyD7DK41YjqdQETAgGsA4jEEnpsrtpwaD",
  "key22": "SwD5rX2Gp1tVJnJU8oMGH28BAW3T2YQaNAsvhyo6Rp1e1suJcmM7RN3EFzVcPyutwc1MuzXcsKoTgH8BYE48EmJ",
  "key23": "Z1TqNiFW6cDHpoRT2rygSq5UeSuDcaBMyBTp6HEauq9ygevgzGMr8Vfj4cwCCRn71gGhVFKcJgfBZbh6UBnMPzo",
  "key24": "4NVHbikxpN5HUTDhWVCTMtDXskoj1pL9VdLBf5pD4mLVDF5eYv9qFXDksnYfWcfYB7NxSWRPECyX2rfYUvvJkDqE",
  "key25": "5WxeLSZtZrn4ZEA2kV7KqyQf5dC7kXHPDqTeDLoW1yxcf239ZxbMnBnJUbYpQfUAZQhWoovgVW2RbEKvRzZRCH5A",
  "key26": "YBozKEWkcyh4iZZeeRiZ4uMn7YMYhPvYLBZbB1WoFV65ebp9a3XmnuDmokhY3xkvyuDHHzHMEucwTK2kk4XgMMJ",
  "key27": "uUk8vDj5J4DSSVyZta4m74HA2kHqdaA6xLZWr73cNFNZYRqUz9wuBNgbC8KsrE78JDBD19wC5bAmWHczCaepEaL",
  "key28": "2sHLqMTxqj1CTS6W4yNvbHDyPSmhZE5NihVyd77wE3FJNBjidkpjL546zc3JJRXBidicSe2pxrjPmgXtydw8BcKQ",
  "key29": "5rdefyNQUFTLDCgFWMXZncvyMtJYoeEDCM2sS8szEGDzeZZaEMHFqZEQaE2D2pnjxKsvMsAAi7oi2pG7ipWbC8vy",
  "key30": "pm5LvtPB86WcSNNnKMoEqT5Y8uf1A47ubdoCaPw2NQdM4pwMHYkG8MSfBv78SHu4eWAJjrCQ6r9ytJuNBvYLNRf",
  "key31": "QDWA7Nnc3Zta5RU6uLhb8gQFAAuPAbMpTSsVmZ3zC2Ted43mSwzn1hwTkG1noWdtbUhycRwf6vdpRqVtstbkTbc",
  "key32": "2wdXJFHstV1fHUeUNRvwJC9kC5wMsC38kgRfShXfw2JYGE1CNghN6PtybfQ9CotDarU99kbaKnJbEkEPrNX1J2dQ",
  "key33": "5j3itLtJaS6CKjuKP1KuDqkN6ab3M7LfGMGVu7M8uQ3ciPR4NX161bgcx34HvMeLg4p2bFjgvq8eBzPRUQsryfVc",
  "key34": "5jnJov3WStnBEMY4hEd8L4rAn3XhEssDaVKFYZHnJKz8YUzVHfPSkwdtqjXVMpKUXqKiLpvLXJjqCdZWfmarHyUV",
  "key35": "3ctqrs8rjZmRUseeqfgDmoYdnNR3WXLiyP5h3BsGR7vByQTcPtNDDzRa2gcwfjEKmpa9MCaTuJ3cWw1T3wMBR74f",
  "key36": "2WEzFx9oFK1SfJFE1i9mmApawtrtXCknZWukEgbivBcN6tgiqq1XBQp3dHdCHiJMrvd2TrBApcVq8UwdpEEe4mW6",
  "key37": "LP6WpRxGCdYhVzYyoDMivHVT5LZZDt7P8LEwiEoJjXXFZYRt9mLukNerx4ZgTuZBGqZPahxoz92GYzuP72fCM6Z",
  "key38": "21ES7FUZdEaUZKLKhnAjJwjN5q4fRc14xAznCqu87h2bcYoRbpGAMCApqTqggJ94yg94QxNXbafqVciCfpam22N2",
  "key39": "2WD5gNuv38yoUYyWtYZg6W1eiCmknCqk86hKBNUGG1tjGNtRNvDQZmHqtoySG2Ubx8PnF2Jvypih1VfQWdNW3TTW",
  "key40": "YCG4YyZyYP88zKZENVEtESm9u294QMBuDrWTb5JvfkxeEdkdCW8DpHgNHXnBzoKxhBQMyvm5V9HKeRLHr298Y61",
  "key41": "hijNae6o7YZSy8Z6thHb1XYHKiLLH9qmW118sLQqFrvdu9xsPhaZSY4qQyfM1UQkMAYRTpycu2457Z9cHbj7Wu1",
  "key42": "3eckJEaTXfoBFRVXCNGAdQh6gJC1UMhxdpaynai3h7PpZbrJasAKT1tWf6CaKEDUaynUZwoA1fMzGbCY4Nj8G5HN",
  "key43": "3qPrW4EB3igBLPLMTJPmYV13tEjmCXxGCp2Ci5FFCLUDZivu8qpKb8uMLGQGXgzxLoQFZ8tNiKAsmPtdog4fJbYF",
  "key44": "5eWPZV1YQqsgewjzx5Ke7fg67pwFacoZ8X2rpuXZT9jiGG7qz2tJauZ2hgfeYbPReYZNqrnHEmXYu23Y2kVxXYx9",
  "key45": "5jPnVVyC94XYSoaFMhSMX8huuuksMjkM7e24PEvFXpDpLRCz7y9F6qVNWPoKcWbsSD1EY3wA18E6vMuNSGwk3CMB",
  "key46": "5ki8knWoQ3QGhBHxrk4oZ51yoNPfHSZHpFjnKKaP2xFDMcMTNvoeSaMrfQhjZWknBLtFqyLkD1XiTVQe9S2WUF6V",
  "key47": "5LCWvVdEMrBDqwKWV1tgBCjdu1DrTzeLumqjQgGaXvBA4j2Vsy25zgbVZo5kZaRC8n28jkvFPhpzjXRQKFd7WB9P",
  "key48": "GYBJKX7ApeNagGj4hUN9MjFvUBWjioonZVdzobJCvHUetvNzn8jeauZmutAjMSQxDoXDTx1fnchDKHtTJd7jYSP",
  "key49": "wfSVnWWbmEJY6JoKne14z8N6MDFS4FvWHVvP1e7iCgwGv4zHGwB5exuavPtjkiHWzqX5e331Az3DTTCif22mQV4"
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
