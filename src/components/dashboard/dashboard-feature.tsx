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
    "2CQQvYrSqLd12wfBnGTLprrsmfogFckXKFRem2EcF1oUu5DinDKvuxBjjpUGmtxC1U1vZrE8PNUb3bgjj7hgr8ft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XDkg1kKLAp2Wjeuq1vwyQhaHMTNuotgbvCAYz8uzeHAEpGzToEcAzssA7UuWoP8efZNqrXsSYd119rrjCWAzzhc",
  "key1": "4jtgB8muNyfo96ZeEJzwSQVFX1M1mm8nwZc4m9MxtrBGBEU2SryEVkLt1j8XXDGxFjjXLheFRK7nRNowSJMwBvb",
  "key2": "t9EHxzuNESjbUMxSns6jZDYbeVhVktuG7yzh2fhr6nMxf8W2PWrskU4UuNfaeTsDNv6coxqQY6HzaDrWPz55BNx",
  "key3": "4gMGYVRAo6Sxa5YLZNjNwNfxVTUie4WeSM16NxGL1CBM8Pcqam9XaGCxHicxF2bYQAEidLNnRTgqz5X9SFw7hGpG",
  "key4": "5P3eEALQfM2dufrz4Uoq5D9YisF3z7JmsL9mRFqn9XPqVJ6VKAMeFmdcmKB4eXDe5NdHcmyDhwm61t4efp3ZxgCU",
  "key5": "43KvugCk8NZBhXNKs91F54r5MPqycLrtZnPnx4JzySRxfaCvS43mzeS5L1hhqgKa87gftSiRCYE4ts5CBppta3bR",
  "key6": "54LMGmdatSdvYqE71ePHDjtdn4pQfJDS3Noo8hy6J4HTf45zTjMkZHt85VYJfcKDRbwRMANizCV2TRWiZiz7hJ22",
  "key7": "4i2AqPfYt4aWjSLodzy4Cd1wpHYsnA5jbBishebfMDgqnr2tQ83BPnsTZ3s5QHU97bw2NwEpNdBNKcVhPfU6gtcx",
  "key8": "4B7wFqqcmUubZLf9xNf12T4SWpCEfg8YeqR4oxY1SdLgrcQRYSs6A5NfrYqQpAmTrefaEd7YepFANpDsagz5frw2",
  "key9": "5xrez5bF94SWNaJ2tTQCaGpJXBKTCQWWkEZfzjUQn6vzom1EHBEmWu9J5f9gnxAF7f6hFnbwa6RrGiMMYSuupYya",
  "key10": "4MK42dchxBh8stmYYUgHqECMMaYSH1AZ4Mr6N33HFo1VUr9DsPAfmtyX1Jx4Up5Z85uMZvpX79Pjn2EYzxExpmFF",
  "key11": "5N5VZNGSMSFSUBYp1eLsW7UYwccdWhqRQQBSxCeCpnccuqDi4Xgp9KmLugV7se8dK75wiKYT4PQhtFPgxGHZvNcP",
  "key12": "2y76LqyVHichZbaUm4CSsuaEfLnKKV1K9k2buzGNFzKuKFqkfAxUmLkAvbmK9JLqMu4q2st9EttGR9Us45QosUtQ",
  "key13": "5Vi8K7iVy6cPuh1sPkB6dgmS5uffoWpNHEr9M9qLngSH6Q2kfHahD6b4xehcefD8cmsWTRVeEzTjWH5h95KtRowv",
  "key14": "4yt1pgC2EDSbCxVcU3yda2CFeUBKDWc7MFdqVW2d6ouEjsSitEqN9Qvrj818Be7U2euoFQF4z2bKC6ASHbRZWXCN",
  "key15": "3fAZa6ZmqfSCDZm7jApGWSCorBatJGH9RuCRs1qcWrZveBFbAu5KgF8HcxuHtzRMtoXmi7k1ziK2FaaoFnFDCjC6",
  "key16": "3aRg7DfcQq7DrreqBELPmmtTF5pdXT7wJA7DQ8hTxG5y59MxhvUFEDxMQriDbwHBbyD1zK8oQGVt3qZ8dajVhJJD",
  "key17": "3yfddve5XfGw7PtfEKyTLUWYLFRN5KM2vTBC8dtSz2Z7vzMWusEiQEGkAeuqtA6ShYMaLcQo99FRprQTiLXpb7rH",
  "key18": "3DaSifxREfe7adFtMNZLbWwGJQothomfQvnFyciqQhe7GuSr9gFiv8Y7XgJAg6AeFaLZNgn1DaehNVPQ5nhZrxGB",
  "key19": "2ekG3W1PeZDYyJQXgxoNaWofgvGkorWqwi2SAQDywKcp9ioouaFaYDPTZGXGBifUG16GddosFzZ2DnxsoCfYsnXQ",
  "key20": "3SmmE56vCdpjQdJq2f23oQVLDyheSZkxzLAw18QZTtEZ2ZaFmqPdRRbdGxkDd6Hk3YXzgcAJQSAH6F3EPpDDMtUD",
  "key21": "fkEykn5mVwWqErJBPNFtcCcHfXNTm756p3bKWz9oH81npcqcT8VEgivMsE4FwyVuzNhZ7YEW51aET6z3axbkoVp",
  "key22": "5okwed3eny8aWyyj3CYQ9YCZQQcT6qBPhj9vQC34av3CD5geMTZdke6hASF7vCYpEAVMnqSd6LvKPQSVPA6DcytH",
  "key23": "3kvyCommRPf1zwGzXnejGiAkhvaVp2A4k4Sf7dtSaVHxeccMvsUEfqMW8pDthiQ3nRxvXza9wACe2v8BfqZUv1Ma",
  "key24": "4kTxAMrPCtoacQnjWHXdZSammQhdTGCVyun3gtYjYhfP6avCYwVfPF5mHNneoYvVqeyad4xfABpeDqFsvhvXQgfz",
  "key25": "4bRdREUfDM4PYa9ELqvCufAHH9pvRB8PvASo8CFEDZ8THPs4VWtuseokQP2R52WqCX4ijbJUs6sAizi1SY7bLop7",
  "key26": "2gHM7JW3cdZk9AQLQndVSg5u7CTBauvS36SJMEW7qfsVKD19W1bBtp2XgiTcmvPEZ7wbVG7kvoDyb37YkPsHKDtp",
  "key27": "2zF2BN4skXRJYHi7Lsy17Gs7cvdvcC3N8aG9inQsfJJ7ZcC1NqE5KoezqjtQLi8FCY7CPhySP8EUTC9LZrw8eH5p",
  "key28": "4bZfhJhu5T8Hh4T35TL98BmLq1fx4rfh9DKpUc58avP98i5J5qGf5vYjpbBLsnMv59F5wxXiX4LJcsWiqa49Mr4H",
  "key29": "4yABtM16yy8hXry4JQCf6eVkcVpWoXuhx1gESDj5zDzdtzxG4QcTX9KNF7R4nX5Ed4vMHyZTkBvBtCrBRr6QT8Jq",
  "key30": "3v5JdQ2wCHVP5cCWuTPVKhq62Pp9czZesYnfBWWayx22zB6ut318HEvbS1xTNksoQsUZehDr2sbxTHVUfvFLFaP",
  "key31": "44By1qNRTA4BaojreP83pD2qB8PiVSwM3UVxJcuc8fpV3MYE4oaDZhAcreqrmrkD32gEiSKjxSP2YqudRnwxKgGL",
  "key32": "2inLwtaqEc77STbqYWbA8KTBvP7VCiRpQx3fmW4ydobh7LE1ghkhvTAMWdhrS7NYk8XaYmLgxUn8dv7j6ujPAUNZ",
  "key33": "3JmnhsE3hCLe8aGbvuCXeZ4mStkzaqriy84Qdxf1U8dJCVrwQ2R1xYbT6YT9taGFmKF5DFZtFT3vdJ1o4qnh12pY",
  "key34": "7oSCZFtEEQjZztvoPiEvHVQPj16Zhjz4a5FBeoog2chrAXAMwyNRjuaKWBu6S7mJoP7fiPn2kn9py55JXfz4GWD",
  "key35": "3ipQjT2EfPTjYRimHdH35ChjWoSQSGFzCSyen1uXaZxp39qZUL7htptai7VtSXxRvQKMuFEaZYXomvxUWt2wd4bH",
  "key36": "51k6vDNQuzoQuV9QzkbJbsmBKeivWvMQMRMMDpxvDYYsucsXcNgomy8HjmGD6rnGZF7cZP8zwnijWtihNV7hb9hT",
  "key37": "KG4y7tjrtJZBMezr8kqXFqci1EfCQxtZEPMWbYwfTVLT3q1UMs4C6PX87xk2s1CsXMH4CDH9oSfTMyP3yoZ3Zm6",
  "key38": "21LwxzGFEZtqh7TyyvhkcHKZ11dxkwYu2jNN6r3uqNcLwTEfpCHxxWjF37QhMt3jhZRVedd2nMpsoxAeGViAzjMm"
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
