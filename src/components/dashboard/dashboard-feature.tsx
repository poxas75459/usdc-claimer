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
    "zanUxU7rXoMJupTxGV8NhdqFCbAvFZaWm3AnmCUVfrhR717zZAdtdixkrGTCQrHduwEqiX8t6gr9UCXYDGkG7gd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1FTuN9MrEcDNSjyzZQQsmmuQeVAcYstm7Ks9pAQHpm9UxVvdG9XdBHWWDwMJUmpiN9kNrxYBhNUQAr4Kpb2EnZb",
  "key1": "4Zwv8Pgz1qQC81vAgL87PvhHfJwxkQFGPRxB9gG4b5r3KeJhzKLgA5TPTM7gURBVRGg3JbaSmeBXP3xRmLbKZTa6",
  "key2": "4TcXpe4sxrrrXUux3fKdStmSgZ2L1WPZMRzakaRsa8UNWHWWpziKX3a4HmZAfZ4WQ352aP29QkGxfkpPFqhTeViM",
  "key3": "4U5GsVWU45ehDxTQD2SsMazacwhUbc8rBQa1w915D4pRoPqDMjtoyp2n316tKdvsxemp6MedwXN7fZwfwpLirJCi",
  "key4": "2b8bMFRqggD3eLzDGhiNFYpQAYEw9dCpCjCBpafmuCBTia5wThYPmSVoSFM5bRDWasFg3ByW1cSJT19izXWjozkX",
  "key5": "3Sw7CDg7uppUqq1qonJt9zxBy3MTeHGKYDwKiqcFFn6pcTuPKdCQuFXRhrqMZPJ3bHtAAdmu9n9YDNCnvCmQmNX9",
  "key6": "jAnq3QsV488vxzvysgUfpM7ssPfKYpLd1xdHVsTeBTrJjfN9cUyuDPaNNHB4JiXU1N5E6dAueeVFrDikF1j6Ue9",
  "key7": "4hTryhgAUL8Lk69uFA7nUGjNan2QPD5kkyfBRLfbw9kNVXjxCgcUJ4KBAWqY3GPArzXrg74MNAH67agfvVefxotK",
  "key8": "5JbQvZL4vZTX4hwaJx7hVfzvj9dv1N9ocjNDRKMqUU4wFwtaKUwebNFw56xPk57kwhyDK1RokzfDiFCZyEMY4bW7",
  "key9": "2ixEQdfvnXknvCsaMM2GxmyrdyDJBNF66ee29hcQYd8E5jTEm4THnVnvBfbmQGsPAPzpW8wULdtjQeAczPM7e55m",
  "key10": "3kEH6TZX7aGqxAqvrScEaSepCCYmfrFgsereY7Nbm7HQhBhFbYYiAyorJ2apQuAYdoJeyZntr2LFgUhp9UteuUqi",
  "key11": "4Hn1rqNSh2pu7Qu2vtovjQvgv9hjmPp7Soh2LcGRFidJzPzz4scxYh4dP1GSqZ8JCNXc7MHTGhLXXkcnpk57S56T",
  "key12": "3JrFuKVnTdXhS5BK8WtCMJBPJQjCzYc2qzHVM3idLkUBnC6prSurEujEJqFHwwzQpEVEewzsjr7xnUaSSdbXSPGR",
  "key13": "3LGUpX1ZbNDzwQiQvG6n8tWs7qNtX9t98mAYApHKbmHnRqH7hRfZxAH3DJsiTt9MdysUYPQVwmPM1yJuUTcvQRLm",
  "key14": "5fHV2y9TYZWPnPiGPdcpE12DWcffARGgN6D1bFKzhneUDbZuCHiGivcF2QT1wUbtw7oABN9mW97uhPAiyVBv2nHw",
  "key15": "32Z48VBdifk97tsJ9waxShwv8BzYJEhwmQ87mVh9SHtSeCB1nA6PkkocDxbaaXCp65ormajCf5BbsChwJPsZ4sRe",
  "key16": "cbWVwdyby8DnGR5n2cWC7EnUQQNaZwiL1mms9NVXNWHgNgxvwqnFUSZpaqyDUWx2LJ8YMqmeiTD9Mvzo7V7Yrux",
  "key17": "4atVyrcEdbP8pGC9xM6RfhFgWwVgimQv9zSCgiVc91fuFghv7m8zp7uDtXsncvihaDrJedamWsefVKfYwXuMSfHa",
  "key18": "4dZxqpkYhX62oWc1aqH9QnjbjVDDRg9UD66tpHRGNNgPkijekgmEwMWp6cNTj6xUnruxuMVpNu69TzTenDybLUA2",
  "key19": "3DRSB27Xb5fkXDZ4bpXAJA1jfpHhQCvV65USrQeF6c7rxkqLcwqNKUKtT6NSogJDjBAfQLmEQmMPDnBZGDmmvXBr",
  "key20": "1vJ5TA2xHBNMdy9fxrS643Jvccr9PrmgXkYbTwRGUzLu9QmJFdmezMnUiiD3SYqAXWG5RzNTbUQ9uMDT1kFWWZB",
  "key21": "2bVMHc4TCtrLx1mKBprZA82YmQEcQE3u1WEYBZCCXvDTmDvCCZLULTC7xQ9UVMStfuAb4DKL7qaZDTZ9fdfsEj66",
  "key22": "J81qoMHEa3v7SzMdiUppC8Ju1xZtMoatpcLzEBuoVqsMUFCBNdcT3h4nyqBWeDt5EKuc3rdp7fDYPG4dj31xCxF",
  "key23": "4h3chY5aKEy52srYn6KjWi2AXv2jKeuRZeDgELSt9ZvuSpgiZvLuDofN3akGoxXXcp9fgYJWnXbknRWwtDGNjJaK",
  "key24": "2aoyZtx8QNJieNbmkoVdTmxmsZnPgLhzciNgPviD6gHnUdwWgE2eJF8NXm1ivuBK3c5qSd1czscxxMXE8eozVfQj",
  "key25": "JZMN4U9dhFZszkXhpkBStwzmcgf4Urwj88SxfZw3ECA868684gR5UHVcYZkm2uKjTHTpQuLXVzUignJ6ecGUrrf",
  "key26": "yUAB2unm2NQM3wEKm5Ucq4ov4o8ZFCbeoTPzD6fpozEpwvzytksijEd9FvSVRw1r6H5qBgU4HZ1GFndJ5XpLEjV",
  "key27": "5iPQBGU3cTZ6isJ3hr5zHZ95DRYexFdT61x1U4hw2JRwyGoWGiSaKjhLaV83aTKvDh3FfaBwUf5rx2kBimcPQLC7",
  "key28": "oVcJq2JSSBAui3BV1EuDVtLb2pkKqKXyD5dtr1bT2C5AUWAQnB7jB2kPACQDo4TGWMrW5JkEvbonvNtVbRhwH83",
  "key29": "3nBUmyGWo1j7JqNWUSs6ZWyzATUREmqR8XczQy8rmbJcEDyEx47gXrqXKXdijdXhdN1hvax1jRgv245ga6di5FZb",
  "key30": "43BoFSzicwZBg6Uyr3M88vRk3kRuKQ5KZynZp6LaEnsCsNPpvh8ELovTThErvG7BPMmu1ynTFetL1JeNPadJ74WZ",
  "key31": "5ePbMz8TqsXaapnSRZL35Matxf3RnKnBzN8vqzndbcFLYL7jicYoHYKs7ehEz2HUuhDX4QKEJeRXyWNVjAhaxzK9"
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
