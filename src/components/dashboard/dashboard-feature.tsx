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
    "5LK9Jt2qKytLXxSZ5TB29Hj4WrCPd6JeQ1DrRBUGVu3triyDBAV4n7YdBU3ULgMiGTHjvo1AKyWz9CUdBCQffAWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "615rBAAY18HzSfwg87fRsgQmsd1tsxnPAe88QNP3CQR1kN6KKaA654HmKS8ZV4jH7hxkSBFAam9iqMj2ofxfrJVN",
  "key1": "5QW9zvWgcJb2sAPUAc8Fj9r9CkZ7o7pZMFSnaZQ3Yqn149RT2a7VhZsyzyq6hcFbiqviNjWi6H56GERsXZZ6UxH3",
  "key2": "5w1hvid6eUHWdDUgNQgQRiZSH4MDFbt6ZrZKk6Xt3Q4nqdDMRsWqK2c9hq5RN1Wf9pwgGN9xfYrCSoqwWhoqJ8V",
  "key3": "3AZ9xaijbNaQ82JBBE4v2if7mp412ffx76zZkoW1NhkwtZKQuUbnJn2MLHRNyvUjDEZxCF4m2isiLh2Ht9yU3DPJ",
  "key4": "2CM9ZanG9gXZ3XF8jgikZQDpiyYcfC8ohyT9qDm7ExHQy2zqt36Z7rsSVwHDiPKkBERDCNX8AD2sWVDZByQYLBcz",
  "key5": "5aULXBHVP7tochuxMCqK2vqMhfkHEtLHKTPEHWc7UefjECV6dQK7zqdHMikM6HRtE34FmWzifVFUoAg19LZgcADg",
  "key6": "rUPcSbaBj7Wni3on7HCLyyMVyGaLyEsa23864jZpCtvguGHSaxyyWqftrhu6mxHax23mYbRuDBiRAjrigNNUwZs",
  "key7": "27BNReAQtZdY2Qq4Ctz7woCt1n5ACa3Cm8hwQuTAdoB5jkQQ1bBdPbcJcfevGEQdZn2E4JLFwaxLQ8p8HyFWUPhb",
  "key8": "23r5g1WWCEfUtCSvMu3d5FdHg3mENNSm2Spfie26xiMKdsxxcmuN2Z7vhiMirvYSFeU644k9ADZSb7XFbeAJvaa4",
  "key9": "32aVes4Xe8Gk13WHS3RXt6mf8R1ihL4NkmgzkXgewGi95mZ7WbemkWNRdNtZ9QJ1xQnRdz7QYaaLFehcsv3bBpZC",
  "key10": "3dmg9kQaR3pizVAxe18cKboKW7nnjsvjp4rZeX2tssASBvmjVeYobJGFzbY3b4LYeB2aryDe67DNUQUNpspjnarZ",
  "key11": "3P3oJvVubeewcugd5P3W4g5berbw5Rub8GpDdQnUApRC1p1chzcB5ECmLth9CmfxxDEpivhAGf2bEufcwE6CURPG",
  "key12": "3NwEQCSF3Gc1nkGxy9vs1Jkt6GoRjuizycikDtP5dnwa8KkJ46Cr4QaBCybV4xftAdPrzcD7UoBYEbwcLSKrZvXC",
  "key13": "1cf6Hb2NKhCAvRAgDzUT3ECMD4bJ645zfssKb4WgmSyjuan9WRGq8Cps8otDsLEd54Fs89NZ3BVWi4KEG6FCCBw",
  "key14": "24nxePwpobSddsnWgx1QJWUcYdWKgYGCSZvuiFP4S2VbLd6H1Mus3uhjcdsAf5GHupdb9Rqu3gSheon76Ur4vURx",
  "key15": "5xU9fPqQg18ZT6rxYV4WpsadLzfAf7aGnVMNNMccduPowEmr12N9cgzbd8xuuNK4zSW2f3dcCoqvnFe5EwHyUfi5",
  "key16": "4iM2tofexqno6SA9VxmBovWMV7uj4eBS6otXwUvSvdYq4nEAbqBgmaHND57GDwYkdjkc3rABoXFSki1dcQcitM4",
  "key17": "5d94P3t9HuU8FQiXABCPjEoPrJbeDdhXA7MtojerqHSskKGHuXQeVN3ktqig2uvAHtH9iJ4hcpE1idWgSzfFRamL",
  "key18": "7ZnLu36wFXoLD7koLHjWk8eA8M1FAQdypnfeR1geKzXgU27g7H4AbGgqrhGwk63hHYVwRJsMVzwxvcCnqLh2Asq",
  "key19": "4Mdw2qYTwDxg8PnkcQ8rWxopdnLCT8Dq3AtpbFarvyrEhoD6pD62Lprmx1vXz8qzeKmd4Ju49jQPmACS3e6eq5jG",
  "key20": "3u5Qqf4CehSDpt9ukRF2vYnZMW7GvUMe2GdmhEkRg1ySaGexYymTKQNzjEjsDyNUmbWMgEt9uZSfWscAjpmphxbq",
  "key21": "3XDML46bam49J8dvzni6vGAMuWKNQjHfzxFz6H2zWv25wETLddADJoMvgf3Xmd1xfpxXwinG26vyr34AFNsfmHcJ",
  "key22": "2uRhZDjTiD1JHz81Bnk56asvZMD6VY5ox9b3BWNM5Fw39HjR59Zmzc9VpFPkCCxh3jgo9GeCpHcmngdrDZXBCoJ1",
  "key23": "2NcEaW6PV8UD9cuNhZzPnU2JTJHbp4sfDDCZ4riR24m2wCB1KV53pyrJq7P5KYZ9T2z3aCcGVSKMphBWv5as5v8L",
  "key24": "dC6CSkzdzgdBacbRFWxmsNvAmL81ou8529nVAv7XkooTQFGrkHrjYUviTEH5WGrcD5w1Gr7CeSxDk8gcnYFGBCm",
  "key25": "tK8fRhVacnqxiRpeYHsqVGWC8iXkbX3sws2HMbxWcLvvfpHM2sYoFikk5TL66BcHNCDt4YgZ2decebs9VAVkNa5",
  "key26": "5DXVWfk9z7YjTrN2WyUpfxB4H8uH2LGccJE8aEYGm8hDZrGm5sJWKF2gonHKSFsSSNGmbkUoSeSC3q8NMisY7Fjn",
  "key27": "4Erb7NF2xsMmqo9crjX44Ms4sHPKcNkSXvyZQ9SGhqg3exZKrQPme8sCbA1KdGR5pszwMUwesw2M1jCom4P6589Y",
  "key28": "2iXxc9r66WtAEEUDD2oinATUBFdk2T9eWbDmuUbCoCeBUD2yxN49Vui2SsWQWeYmjdfYSJJTH1a3fHSUKbTNzBz5",
  "key29": "546wUnkZTvQF8PBPbam2aPTQEv3VXR33b9xyTWjwNFnBytC4zk8ktYuSEvEnmHVkhbgRTaBxLctpXRb8RqtHyTRD",
  "key30": "3z51roXHhmjkbAT3mqA2yeKcBZiki5Lc35Nyf2GRtUDdnY5VXiyFQfbqfZXUQKM3ty5mwDc2qgEDCx7xLgYA18YR",
  "key31": "2Dz5RavxFWC3a5iaXB22KWK86GvS1a2j23GR25R4BgJtGxdts2rLB2Cr8cYWvGah3iWg8RcDDw9Dj9Y6FWg2muS4",
  "key32": "qZg1XCxgntSE4RM1njkCbtg1EboZkx89mV1TJREeBjXucYKpfQ8Q3tNmG1is3g3YBYyyGtngqPtMCdUzquDKfJA",
  "key33": "5pRpL6z8QhrzQmizvPQHNFfca4kAUbyw48yhirxGXVUw3i6A3wUwjV822urteHkY85KFBfCA9xx9A8tVoHkztwLx",
  "key34": "5TJrSdmLpV3GAZp2sdFVSg4znt8Wxu6Ve5SgEejiuzGeMwopYCh2T3ma4ZvFeZjnQdTKD4VedbZVFhULJEBQBxr5",
  "key35": "5j4qBDoESp5FxS65w9TtwojjsHqum7EdtWvoeRyYJu5ixVHvSWYdRGS1kxZj7Ak99x9VbS6bCXL9yuGerBaugd2W",
  "key36": "5Wtx4sddJWkPs7usoUVTdjApun1LwKHNBBgLm4N22yYMBNQCHREZhNY62qAfVpx881vcYzhhDA4khscedyxRqGxJ"
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
