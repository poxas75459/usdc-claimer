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
    "qH5Gg6mjC4YMn5HtXY3qPf1MTaSGSWBEgYyPsekrvda23f6r914bzuq1FyKgu94EbRS8eEtbYZkBp26o7b4nZDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GnoBNtH7tkL8MCbWBXPaACbeoRGGKzeFNVicigDMXh4RcMfeSVjLx4j8fKdKRYTwmoz7G9ssP6AiBprBYyjybAT",
  "key1": "LAg1m1jr5Pb1dgdvMg3dDcvQ4ySndrQqgUaH58if3VaYMPSGm6FepGTT6L8aT7mCYzCpkHDE74foSyJnS5qMXWf",
  "key2": "3bRXGCPz8AdSs5ZrtVRkwcCy8AaKctCAcS3cVgPq46r4Rj2ZzCprGFxtJLTab2ggBLMrHACWSJtMy6XtGaVm6hbj",
  "key3": "5QRfKZiGXhDXELbn878cWinq2rU2k3Ca3SFTbUbBqyyYDpSNSY1kSiRA4L9guAph9JWPrqe2nzkKpdXHNXPUetjv",
  "key4": "4dta9wK1wGCBDovqe6G393AMshPFqwD5fkfKLK51TJCRXE41brsJtSW1CxkpdVjVBr3aNa31iEU6v976swb6Zd5B",
  "key5": "3tDaDcx5GzBxnewzLyxwEvoXdS3YaysgWCgTTf97n6m2ybRzy9aX3oCMyrk3fu94mBAwjqEphUceSCAgoSSe3wAp",
  "key6": "3g7GyDfQNH1JSCPNbbcaum9qKD6zQhAbZMXTTA8y1tSBDamgKDqaxcK7iwJu94MqRwtiPVGQXVNxzE3phkJ3r5QV",
  "key7": "UMgPkL3qD6DMLcibHBCsTZj1sPkWdcQYoLK1XGHqVZCAcbC55gQtfU8yt2R35VB5tdYWHT4SeZUxQk29xXvipm8",
  "key8": "3MaLNDxtNNE2Tav59NMZVY58mtpxh27WKRcciz7jbmjUGme9xY9QrJvt6zS1evrxzdWbkY8n3U9xiyAnCc4ua244",
  "key9": "55BrUAKbyML1zJDTzRrss43GpwdVpTSSUkAPEAVhWLbB5DmDVGRuT6cMBfZhin3kS9kDVarHoWviTvtXAx9AwAz5",
  "key10": "2Wgor97aB2psNULRdCQLdGD36NtKkcv8tHcMhxoTfdu1ZfJXMzgr8i6Hb2GupqKLnDXRtcr5bLzgLNZa39z4to2u",
  "key11": "4JyWBxYBEcKRqNndmSak4VuSjVVLCu3QuNSzfbMERcxat7iVJDuSQbkgnNkevLFTpyDym6BkbCqTGCCQJTAx5xWr",
  "key12": "qLh8vobKWGVUJWsbH4AqqWuK9F9SZbZnpEN8742vRK5N5RyL7pzG7iE7R3CvRB3Dgp9rJVZtXbWfQvvrBZ5LfCY",
  "key13": "2xCyM6BHXCYimfckDNvqRz8PLK4MeRtvFN1JBsF1ZBE8CriEk4G6uBEHbCoFThTa2GYkorf8Bbvi7bdpVrGQymJq",
  "key14": "3HFpbm1GuXKSGBrUMX8CzpsjF2bbnLrwDL6wFLVDNwiB3VMAqnv58oyvtpcPSymAPvAy9Lp6iR72mHELkKstVCsJ",
  "key15": "2dmKyyq3nz5F5inQZdU64NHofzLJTHPtKDvXRFfcYfL7ZumdvLyJ1adXsSKK9dM6tytaEhyrSgweXDjP2LtH9txD",
  "key16": "5r3crPK7qKkLEnSiMXKzYhfjRGcgrYFttRzmBem7ExY95rWVFUyLwhAgVcVSuEQbjYzYHhzUeG8ghAEaxGDeE6VD",
  "key17": "2ABu8YFtHUrP6Y9BGo3HEzSoGbjJjXnjWwRXo99pk9y9iyUvdjPvagGjHMgn1HAUT52paprMnnLKiNabMQsBTT7J",
  "key18": "vVQyHdmbkeVdHpKEd5BtVioXrwxC9b51Aq9ftTDGkCdV6RxWyjFUw6bpNxVPuJ9fqhKQkYsaB6g6Ds14utW7GQU",
  "key19": "3FGxCjEwojmxp1FLMC7Dt8Z5DjDQGWcEwyDqYcQwvVQqz4ahXJWPdsKXonUkdZ6NZUm5E6wMcQmD7E1ZaFuiWsuC",
  "key20": "4emcZYkctyY2ioZR35j1Bgxye1rS1CHMXJ9xY4HtY19Zt2NNfKahUAYgWjYHAJK6DQsTewJBkXCSewQhZWrv99qa",
  "key21": "3u8pKqzELQcEgzZCJFJSPBc4Wv6CEzfUMV7jCrDU58RQJjEGnanDbNTxynGnVfBeZkY7m7nxQ5pcDd8rJLuYJcDK",
  "key22": "44jbQGb5UyHMcdXHM2qL2MdJzbKedCmHjKESKCtRN3QziGoWDDyvWhGuhPfcx6ApH1QMsgeJ1ZeMhh8UZDDQyiH8",
  "key23": "f6Z2oYp4HvG6v9eFLAvsGjQDwo8EjKj7NdeJRAe1C3HvyXQWNzJ6EowVVVizRw1JywLM2PVLWpUCEyHBq5KY8tN",
  "key24": "2rQRYnzoPJYcrGdRnWHruy6V2mXNnNShkD6WBquYZfqLGMRDDcKySjNSvbTcsJ8Y3zpAHrYzDnz4d2jg6FAGHj4k",
  "key25": "4H9FcbaxZ4x4Bc2T2PgCzV2ufV6gh6wsy2cnrkGagAMqY9kougZD5yUsR1TavUNyic72BpGgUPp6oPbxqrvfncDE",
  "key26": "26S41LXzYtNuTCE6Qi6ET5cmpG1kour7KYBtxmwJsSrC49gzg2bjgncWjt4GfGuTYZ2Ez4C1ht783igmdcLQMabr",
  "key27": "58TFvZHFxzaboWiK4QemZtXr7uh9D84ZBwNhkEoV5SxAvaGtd7EHmrcyV43fqpknMWD2EMgSdBMvBUdiVncBgvPj",
  "key28": "3Pmmqesi8qoF3ugZBG9grneDeixkTNogJFEU5zkDMsGSysQy68yAAhmWc3uGnxavRVDYCSf77GhrKNY1wduYUvS9",
  "key29": "5rrAyDYGTKzgXMbuWvU62jyxTPMoumxXLnsKNVUvk2UTrHEv2rXjGy3mV5SUku4CVEVxvkvK64p5EETBGLQXC8A",
  "key30": "4vbYxXB11uEDkgs9ceAcyopqoL9cRA5UUqNDthpDcQ3Q3BgkYXwHNpWaXL24M9SabzCzix2AnsQAciUNB3gg5UZM",
  "key31": "2T2WdnQk3ccyZYgRXxSLyBFmkpgDQrZLtwURTyM74fi9EBGmRXLrmbAa3yKfU77GujjaPSrrcHiCyx2VzfFeA7GU",
  "key32": "3J1LWhyTSdxNZ33F6RRwDWSaNcNh9Wh4bzENUQ1VvAgznTWZ4ezSbhN1fdMnkiVVfrcWBKJf2Cgr9BZSm4BAZFsu",
  "key33": "2T7ishFUazkrfm5mXwC5xBGEigN24QNJcSz15kbdpmuQV4RGi3q96x9MfDBsdkDkFYbUbrBqQmXScXnh4EWyBT25",
  "key34": "2jA2qx7DiLyrW5PeVZwydfQ2kVqn6bQ9qbpKv6NPzj9z3YNVTt2k89dWwT5WgxS4ZKdwQCndwrbUgekCtUYF37mT",
  "key35": "r6Zz4pw4fFzg6bZFp6QgbwQzAAuoy3jUdrfg8DmDpRNBQiyAsmsFQ4YFZBGXA2Maroa4CzsthPfzEKrKwUh4W59",
  "key36": "2SHERxF5ZACr5fn3CWhERL9AoWHmXfqowoYFh9VNZBZvNBBUEN7PsNrY1fTcHaigwbEHQERJKu3LZY2KKC95yTze",
  "key37": "NAgYZuhAH2JFuGWrRRnTgZnYuyS2cvoX5MyWh7nRHJXa1JgbyHQYkKBPQAN4T6UuUh1qGtmTCA2yuwuFtKGKHaM"
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
