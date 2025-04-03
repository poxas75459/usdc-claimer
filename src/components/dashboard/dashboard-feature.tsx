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
    "3Rp3tdg2jbDgWwmmpbhd3pHtcrR8PnyihDznSbs1mE25D6zoAsk8A9EXvAuMvgiehh8EmCw8adZQ2ikQdJQYteFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZNT4jkYuBEZrHabNU3xYwCd4XKWNrjk6uQweWbe4kDWXzCUU1VVst4LiFgC8HAZ3cu3AThfNG3X3xjuc8UNrx2V",
  "key1": "MsrkKZWuiPc9mtuLfH4kkjpUEoVHYVKgZwWKKrLim8baZFkb3xZ1Jza22WYMvkwdKr8Coe85u1bAtW35dvRJvEc",
  "key2": "4NJLhjZeT2tXyfMfhWtdsLpSo3GLmMu9aM3tF7jfZ3zuS3HMjTiN1Zf6wBi6MXwqiRaexNrgjan7Dn3BdZSvLoTT",
  "key3": "54MAfdRVDmizGsCrY13w4ZjPg3Fc1HnqHb1KAZjZtn32ThYi1NwtEoumyMYyE2MpsJTvAvBdKPYZvTCBfTiWLAhh",
  "key4": "iBq8Rj56hTTdwSCfAmSQurD1upcWNfP467q1UBTjefxdosfsnp7AxY2KECfKceJc2muFKiwZJ2jm8iMBSPY1Zuh",
  "key5": "5baEBrycFGewzUsjJWwaVmtzFUDXT4JQfNazJy6WoGA7ycYx3XV2z5uP4iBrQAWGS2kvN4hkf2HCq8vKkAJ9CGau",
  "key6": "27jH9KCt3A27n928mWDAwThiATBQ6fsLqMHzUySEZoRLdRtmN2xLxWrMWgr82L3i3v5BT1FsFMkrp5THUMsUnDsK",
  "key7": "3r5WX5VGsZ2UkuYEH3CcRhrRmiHpKboDrDTvLWbxRjyw9n8ZU6S932be5GLRpd8edVsvkndSJCefsEgU8dxujTqn",
  "key8": "2BMMtVQAJcRtCUALViCG1XQCEcTgGwBbW3HcNL8wVM89MBesWNc6KXpzLUPY18xTde4tBkukdvdH3tpEbPUziFn4",
  "key9": "DZsaLrA1k9hJkcxySvkB99RMsRE9ZzyWW9Pe4YDmfsPVakKVBTh178u26bXFi3r43mBKWoT7yT7jeK6uNzj8MMu",
  "key10": "5xgCr6cixkA3hgjdgXohjMZDwWEpvX8Gxdk7cNFe6EKdLxUqEbYpY3tF6pgpFdodzN2PC3hxSAtiabVDqzzZgHUp",
  "key11": "5BbDgoads4c61wbY5XFoDZ1BeWZiKNgDC7QHqywfpbzn93o4G23tKVKXTutqM7n3gEtYhtV7phxfK8BsmudgT7yH",
  "key12": "5BLmYzFqf6mNk6HkqkVM4SqHL4FHcwMmPcFmoR4LDZnko7y4hm5e6cnsxVkbMG6nsboaAdC5VkVAznGv7PpBnx7s",
  "key13": "41ZT1F9uX1JNWXFPTnnPJBZLC5i39GJYv4hGTBZaXL61bkr43HnLsNAK2To8VkdpLXZ6eCvwaCNzEWJSSwNJZuKL",
  "key14": "5ZqXUrBqQsGPo7yZaeSr1njCW8hqhv3MqxUMw9H7TG4aYkV8afit9DE9UVc5UifiFDzfFnmYtMXPTSdhLSWNNrjV",
  "key15": "5m9RdhR2kfJP5f5D1y9TuTr9AB7tb2eNQznP7j3yMQYzczF1RDWYcFRCT191d7UR8tzTZZTFp24iBsxruB5DpmR4",
  "key16": "59YQQbpNjbnkZbkjKK6bySFpXF9rnAnDLjtMzr1EfCFGFwPvo4ertsHJmePUcMosNJ1xf1ouNf1qzPH48wW5eSxB",
  "key17": "4duuLPHbZZCGA77tkCsTh68DCyWoPds15o8nYUAq3GwCf1MRG77EG2CDucWxm4Kbv9vpuezNWaCfWMqw4sgY5tsR",
  "key18": "FjvtSdg9U4PSj8b3KhwTrN5FUuGR2NgAKo9wEyRC87wumZjugJ1sGuzcNVpYM93g4KEKg2N1iinh3FEhre1Wgad",
  "key19": "3eLpHWLoa7cxUS673T8dAQ4vd6mSduJaWHjBghEcHbisQraNR2megTyAnnQWHja4iMEMJRrepkPqRzXTpz5prxAt",
  "key20": "34Sow1BRKY9jiAwiPMkZVfA2dbztHz5bw5hmE5aoxPbGeu7vb2YuXdwxrSUk9x1Ussb3gHKVs26dcsQxpSpiYHVE",
  "key21": "3EtmtGXdpRefoWNMkP2aGVAoAaTDPEMHSb94pp2LDa6tyvi3mEUz1Fmc51yk18Jj1NFJnVuEcKnJVRJbAofhEUEV",
  "key22": "64vJoDqktSX1WRE8K1x1S6SKng4K5fm8w8R3WbVZFnTxFWMtxnjq1dJSprhKokQxBRmQB5h8LRn1Dgw4wVZRAUZs",
  "key23": "4sDDvygy6vyqNDJ15eGxn1Qd15WhEB97yH5iVneUvTmL2gnYqSAgQH9PYBgYgbuzAxt6bdNyxxVPGkEdpRiXcRYN",
  "key24": "2FgKHKEzc8nqE5UicBqEykF2PxeFasZxRjoqGXJ7FxnduQ6sCWiC5dtibyWTh6YyEVY53uuUb3uu9rGKpPi4bDhu",
  "key25": "5i7u4pX5MgUy57xSKGDCn4XpjW4QkGqQzP7B6nG4iUh3wm5ZsCD4jDafL4ReuS6pSdBpqqCTS5G2pnZADkbWussV",
  "key26": "4dShZXBZ8hfKAP3r73akaGXUzUY6GpW2DGigESodUVN3TVKU1zFEUKcp1xGpBoC2xc77RLF6woavtVVKd55YhYA7",
  "key27": "27PpJmUThwGfm9kZAqRB4qqJyPJiiGTvvFpZpk2GHZx8wZU2pfPnb7XSqc2yUGBDbkVxX7XkFpYsajZfKfAsdCwT",
  "key28": "4eg1UPEQ1hRTHsv1jiPsNvnNG2mcivoWPMFEsRKs5nTJAC1jiEgZZCjUNatXZES1AWmqFKWqRxkLTxcGYf2PkJEV",
  "key29": "2TTSYRZBekE9xBFvuRMfNAu3jQudmoH134Q9gnmDk2Et3jAiruK4tNQGokQXKQj5dXQYQqL1XAJNgQirov9QXebG",
  "key30": "d97TCP2zBAu4ufYmrcKpiyqwEvCW8V2u5Kq5Ccbt2JZvt5uDSoXLFed4vMX3xS9X6GuZrz7FhDVgrtoX1eRLLvS",
  "key31": "YBKWbxoTzboxcCrp3BrRdkLTr2MboFVjPj7nVZMYQQuWNBVN1GNfsif2M2DjWehMu69o3JUWDgqoTyDQZKjfFMm",
  "key32": "4SvwKjZrJAUcJty1U99EPZk3kWKhpua4meVSzxCnYnU8FKUJ9MpiJUsRN2kAogP39oxABoqHPvXa7ZpQMxLbP6XZ",
  "key33": "3DQbKY85d73Tp6bRpxgwB5Cbg1KCq4Cv9ypFpB7ABofRhq6tRZs9H5pEbZ8m1HVusHQK7DcBm3Wq5RGgeT6NzhkT",
  "key34": "wppYg8Yhg2ouBPMiXMULkfzXquHkc3cgddHhW3w7i7jx98JK66FXZTwSWDENJhejgzYkzr9Z4g1xzi4VRay4vu1",
  "key35": "4oo8z2kUCEg3jqt9yZx7HrbXkXsSzJSV2hKYWqmSbojezotHmaHbzFhxGTvH88saDeV3jgSjZ7pSaivpkmKezjPT",
  "key36": "3GzznohyGC69GBfwLkaRRcX3FS1VfJNokuGbjLtX9ZYcsYCzJdcsXstB9zQE3nHY5xeeyLhkYSjtrwStWteXoPm5",
  "key37": "3MNovMJWtCSj6vg2ZWpMMM5FSn4QcMjUWAtp1PNJ2uN2HwegqFSRMj6dP2Rt8VbJbwGJ4aoEiWJMPGfBoggBEqMV",
  "key38": "311Py1c5aKqxtccfUHWDWSrT2ameztCUboNPQXvPXGFHbH7QTduZJKERFSF1Bne9zmRB3yeeAdatujqYR2FVENcu",
  "key39": "2izzhxtx66LFw6ZqdcGDwM4MfKroGAHpswHuX3FUNPbRMrMX6Zji6o6dMPnEJ1MfyyAD4iGcHy129N3uzzaK5TMx",
  "key40": "2W54uttrGe5aiuNySewpYUyhSi7fVNYAWHrca3FTtuS3Y5cA4WSME2GVZeGzthAG9gFhEFPHM5Wr1ioPoxoGmLFQ",
  "key41": "5dmEiyDww1PBPhmATcYBCNbV5osxdGoLSKgXRnb7p2uqaQ5Yg5ogCHehA61N7iDyKUaUGWp6p1zzFCtoeis9Rxie",
  "key42": "miRX7Ds7wLvqWnfKxFJtTZf82VmY6NdKjCzQPnrnVNk6f9dJdogJUfoiFC3o3zzHVaQ51LhmjSrqrdP5ebG4Ln7",
  "key43": "4wrSmdQb7z8dpz58iVCLWowtJnbZME1EZr8HGE4t4aPcRTzfaMN4p4UCVpNt2DaYs6Tgr5LFYbBW1YvYXN7dWzZs",
  "key44": "21JTvoq1G99c7Nu6Uwub9RkLUS8hXUoKhvYra2i9DXMSPEDqsJbEDrxLrW1GaGh1Zgxvr8UbMTjcgrwWGFsAhnAv",
  "key45": "5goVUovALFYXJp2NWxDPdQD5SYJbZvAxeLxsXWJGwN6UDzCmzM89HUbcHWpLkQ94E7RdoHZ2Z4FKeKiucYiVSCKt",
  "key46": "36kpnizCR2XsxBRn7xE5zhhiUMQNUx5Gv4CzqTRaTqbPudwuZpBsKLNtLoLZLrYzgfFmZLkMMbQsuZfyVXPrs9u6"
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
