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
    "B4f1A9VMRejsDoLp4KtLfs9rP6AFZJquRjpxeoTkfY4MNeA9tjAgcp3uDrsVeUxicgqrca5KQ7JqfJr3S54mKcG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uzkVrrHrs3756yDdcvJ3j6ibq9AeqLYytFPeosyqYNhJ6LGrHioLhqdfSn6cHphuUyP2Tw57aXdxCVMkpHFRKSt",
  "key1": "2dE2QNELLs9BLPbBAnqbdwktAfdCxuKfVMr27ZChXkPMoX93d9856pgTdwT6FWdT3HXvJxQTqwg7J9MgQV8H6j1L",
  "key2": "2m68n39HRtavwScJ64m5JRk5HHeJLwV22dyPZQQdC2sasx8VeE5sbJ8FvDfTRTDWT6HR6v6qQuB1yo63p3yHe9dJ",
  "key3": "35puRjj19SMpVVPrHb4dM7fmKJ4uzEcBxGo71Vi4ZuQ2DM6SVRaeLbPKSDasoH1pNH9FHn3Vg2xT6xoHtKeeV2PN",
  "key4": "2mjjuNBmfS4f7EFSNCTuxUjonJLDDU7U5ij5RuUjySxi3NdWS96uGR4Gx8AMHeGGoiYqeJ6sSC28p4DrqA6ZWsHZ",
  "key5": "4mBJD3tNTiiBr54PQ4Dav3av1tq61JWiiuhCiyMDfhuBjVgGoZaQCceK1qdxC7tXqDZqkihBy2rB4sYBzAaBTyX9",
  "key6": "3DzzeN91gqo1m3YWV1eYvPR8XMsg14zGn2EhXVVwQWBGGHBaWKhyAbAHaGRrQXMGzdfHQHrbDdPZRmvDRKfjme1y",
  "key7": "2z6MJYQoAP9TVApiFrRcqDyDAAgeJSxiyyiB7MyrdSmYBLxRgaUcWWNioSZsxScQzTYPmw1DRreMDTEKubFemXAR",
  "key8": "3cET4MLW4BGjF3UoQkGffuAHHnvVGVuFL2n8fXBANA2AzjhjpQy6pKrUSmgzgffyrMM8VGaaP82bzJ6BP1bDG5pm",
  "key9": "3d8Wde4vgddM1JP1mBDb313qscHYbTFn6hz5Vw93WyHrWqgZyiZTxAV4WawCQmKQh4zR5MAfzq4GGrBV17BHvkkD",
  "key10": "3AhLKeyVd88yYNvTayXHShisdGXZS3BNokm45uD8hvZ8kbkzAGQqveGiFFTHGtUzkxPr4zcigNkNHWQRzfFTz9yk",
  "key11": "hGXgVgW7GNyun1iSBYwyNbwyRHmdTWNGGPH3PNaK1fSupWuF4d8aqGSFgdsFHyptT1tTxb58gX8DHGbLK3iLuZ2",
  "key12": "631Q3JMa62iqXVjR878UNj9u4ZLAN7KV5kBprd1zk7XbXsJScMpfchvTPBNmgU4Gu8a42Uyqepa6DBbnPAyDyikR",
  "key13": "36DRQicQLB8dYXyg8HxJCXqBsQEDZ26fypSs8ZwMjSxNQnEw1e89fBrm37Q4PGxuMFJkDawUgkBrKhtBGjEKteFt",
  "key14": "4jxBkvdCqwTj67vKbo47gAfCtT4nqQgCuhuZwpR1egVwZP12sd9T8WZnk94GVBd9d9nEw6PcUa5hVwV5iWTdELK5",
  "key15": "2aK5pzY9V53vpQ9oXwHQRxVTaVQ9GfDGMQT6d5RWBqhPs775TDorw7EuhzqCsmzG8avYDpSHPiRRCc4VSe7VbL4Z",
  "key16": "gUJ9Zb6UTpcPCndY1hmsu9phPPQ9ZFmjZPuEdawQgZ1bPbgcwFE4KT7yn7aEaTDdJvDKERw1yXc5XbNYwQnNPSN",
  "key17": "47oVXE7XBZjK5TCTgjDRa37J7fbExAkBUxtfkSMyBDCs6QWXroK2ntZXbN2UxRovFKrMwJzcmQLDsET2PBquuTXY",
  "key18": "Hwj3NL1Dju1ZpRUY11qvcBRJi6vGAYzH39pztZRkMJ1qTfMHUD9XBCmi1XHRdK2cEdVL7F9oBMLYcdRqU5nKHyq",
  "key19": "4BFCt2ivaavqXuZ6u9GjNShQ8R3hmdCsX6AvBAyujF7EE7wmAp8RpF4YucsbWYhoepXfgabsaNqBDQdve7iFYdqQ",
  "key20": "CYBgqhAYvneqVanpUxmXm4sHyk53jGHQcnSd6pycnccigyFdQgYEpDdUcLkMZjxZYzWbqRKsSLFyeexJXnJwoZ5",
  "key21": "5kd5zR5TgpY8MNo98igdrQ5eDnsqYNbcdQWBBSpMb9CWP74TAfPPF7QXr3brzKhzsHaNpcEqbTGwv8yc2EcvmTmv",
  "key22": "5yjSsJf2vETUx2j7a4eMUHY4DbW8q62eRjQoJua9NsSqNo9evKNRYXUGEMu3BKoZX3ib9Rhr3iLkfuaw7kQuNQq3",
  "key23": "5Q7wkX53wx2dh4PvEgYPb5k5dgb5u3gqUXRLxZoSWGBgnB7e9PSMGhfDyJNiSTVnvaayni8Z3Qy3wwfAQ9MaJmBx",
  "key24": "5vfEPcSkEhbpECHnTGcP66KyaJgRoLEaFbVz4CBrbq4R4QvGb8DdRW65gjUR8f8vttbe2iT38AKUuaw3pxfBUSH6",
  "key25": "3rL3LQctYmDj3LzuxHyhfvjRMUaE3syqF8eMQjkF4wYsatrv4tfKj17G2stx2CyHKVSFYaRqbNCeNgHLe4WzBPMz",
  "key26": "o2JTwYodpJGCKUpy7iJkrmaERVp4Q4nVf2JBjj6Hu6sMiXX8cefAYucnJL8fxE8bAX2FjLjZnks9J2zHjryZM9q",
  "key27": "5NPNHZbcTgr3UrxSLwZxtiAnHHThfKTz16eNrCJYi9uaZd7p5gkPVQqvVvKygfuC18BniPRBJNm4u8n12mkieiDD"
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
