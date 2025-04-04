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
    "3XgvZHbhUvmKB98SHmAYjkm3ABYzqzqnhMfJTA2cmqEHCkrzLDmENnWnSPgwJ31RLhSz5vG6ZHDB8RoFcZwvCJ4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tZi1pobqDYffQwsTvbqHxvX25V2x9whNxN56w2eKeWyKsKKydSQ7fm8oAM4nx6LapJesFqQZd8yygsJdTmwNc7",
  "key1": "56KwkWsW3HhLXya6pxKMsvwgHGj3v8Pfkk3Cvaupq6Q9w2mBX7dZ5AHuJzuEFJkxdhNcsYFzb8f4boPfrsmnosu8",
  "key2": "3gdatbR43X7hAKy23UXfH7zQip7RMoWyFNgSfadyDn4TqEfpWhKc6b8nXLRz5H8o2FZNnXhQw742GiqnCqmNeuXc",
  "key3": "5ZrUNEQaT6wZYWyF8cvwBTpryVDPw9WDDBRNfhkDXWs1deAZj4iLNCULv2fEQDwFmRXweWiUkFhn5PkSiCr3V7gn",
  "key4": "2eiUcjiTXJfsBKeKUMwAFfxmCXRUPxNMU3F4LEigdLHPpybGCZ9TC6U5vpWoyLysC7is4w1LZ8d4UaTKi81fw4Nm",
  "key5": "3hhpeDvHEKttANMhxegTML8ikfgKBjTsTBVKRoTxKywuYL4qR5EcjxsqYAmvQdqp4PdpmyzqGNPV98SiK4vRPCJL",
  "key6": "5swHg7HvZ3woU7SZ61euzcW3wHdipBcXNe7zMzMgxo23a5p4GG9PDkAJaRyrhNbW6Mfi8wasJbZKruG72kqSbZtw",
  "key7": "4buwt9S8LzmokuaLSe8Z9yGu7EgQewKtcfcBStUVTCr2ERFcAtjNToq2eXtpqWMar99u2KYjPxDbMkT19Ekq6THo",
  "key8": "4L34S65TWXHcAU1NKStEs7KBwcvu7MfESGwbuuUBwTw7Jawbstkdk1m5Ub56twDJA6gSb6HFwTdW8uPrBoaVoJA1",
  "key9": "2nFeFUQnyqTWYjETXKn5PKA3fZ7M2pzKvkM3D7XXrvzxcyCR6EcKugu6dRBMHqwyjsiEzmthJtQXWvGDbGRTDz6u",
  "key10": "L27zPUfNajUQu5UB5rDSspTvcnPCjLCyoEnAMTD5dxizQEXLcCPzih6VQ4EHTd3NjTcaWAm85pgx76f3MwHsCVA",
  "key11": "36hnqC1hNLcRuCUZGodJa6zvLuNAAzMM1UmEQv2pAXi8P8FKrm79TcTAMxXwQqPKwHrgR7yUeHvmbPVAhB8b3ZU7",
  "key12": "5ec99H82ptTva1rGBqhrvpKZvgQWvttoLgemL3DcMzDQLkQE2hJd2Vhwvymt6Cr24S5GDDT77UsuGbRqMnoeTJNt",
  "key13": "3q9TkQPa8RHAmdXop5ZRpqoPXkiGeLVNkWspZGVJV8BphKnbYfaeEn7shGY1nrfApErkRFX6sYy8UAnPrf3hbp8i",
  "key14": "26J1mLpdGN8ce7V9UBs9CtsjaHc3a7BRBDzZaGtLJPBoc3wRRf1dwGxS3GBDU1qFsedEmqVd842dUoTksuX9Zhqq",
  "key15": "3Ai8fZfQWB7SqMRjdpGCPLZvU4TRn4VFWvuMNihjnt5vEed2Wtws8bbX36AX6C3SwSpSCrrseQVznt91WJrinpFq",
  "key16": "41mfLteiU7Jr6uQaLmj8AuZLnLtLrwHsoeNpSdeevMnPMuAtAc1Hvp65dG8D86GpWPu1X9ipqC9gqLFX3KeajwgP",
  "key17": "2dD2u56Zx1uFPVdy87ysAgLYhR9oMo6A2YCSbdMH6e3pKxU7Ex1gBqoPJoL45r5z9q8HZuow59iE2i9MHKVDVo8E",
  "key18": "2NGV3nkfrJ6eSPv19Cu7s64B6zVQ1JFTjsQtoaTcuPQ3hom6rif5UxNgTBwcAkbw7Xgu2rtRzfjjYRgJwTXby5LA",
  "key19": "3xcCTJNxL9VeM34j2hF9xf1ZE7C7nAMwd32tXorNGhXqpLRLaKyrMw4xShv8JBZ2DqrmMCBS8bYg46dQ4FCoLnmF",
  "key20": "61aVK6gdWWwicqvfkvx7BJBrwZJ4mfU1yVje9a8WN42ijSrwS84VG8KfoCth2a9ycpsFNZPRCLkmgsBvnapjLnbt",
  "key21": "YJ8W1ar56sKmaDqngoPeSnPTU4jvag843mrwdYXRB8PVYGyURAF8aRgpjFodjjEKLnDLgaqmgrB2GUiEsnPy7XU",
  "key22": "2PbZ4Rjz5gR9tNBnT27EbdPNP2jWjGqpuynkjAAU2TF3LaQu9DfSVG2gFVjHBzoNUEMVG6jXvGzCiN1DvhGUpeCK",
  "key23": "5RoaabUYXPQXoBLFdrs92LWrjnvySQGScsTJrVCxhbDVZo7cNK385nexmhCvhSc9LxGUWUdZZLee5Fvv7TqYF3LF",
  "key24": "3WAGj1FfDzaXEdjkpf8fwkqxzatRZQFNhejzVj5UbbdRSmeu3f1hJ9qoz4b18pQQtrqcZ4MCEGDfn9U3wz8PjHKb",
  "key25": "2KijDvaeMFzooXoymfB4a6otHDNueqoYPeB1TEjjNhsP1nb8Q3WgmzFm5WfX3iBTPnpQaxQLGUQdc1zFe2a3QJXH",
  "key26": "2g1PSH9rCeKF2LwVNbdZCGLqximcoNBtAagUsBBLV67Hu4AMuLgFudz76656n1f9QWgRN5sBLhGPDQ7YVQyr3JH",
  "key27": "38xP2mH97ETqqfYRRvgttKttbBuQnpmxZwg1KrAfTbbFDojdSpJv4KvUnNrj2Y96fCdcdr2f82HFaGaG9QYMvNqg",
  "key28": "2mBPQWC7Gasy9zy4cCx1Z2JVoy4PeJ8QM4GLzMTEk2M2aecK13iRa5sZVA3H9jFc9TD2AmEBdFTz6x55XQ9H4Q8A",
  "key29": "3StAAd39KnsVFtiDtYBUurf8WLV3YBLWr8WZpbEVcso53mrY6Wke7J7aFz11FmAC94Vr1367GwT3fyZ5qvyZDjHT",
  "key30": "p6jqRPoaYPs9bpmixaCHcP7tXFscu4B5bA2Cn2gFH1sTa8aQcyaSDq2sgdvfay2VzAKJD1sUy4n1Gb21XJbzAtz",
  "key31": "4iCvpWpUa9LfJL6uz35pzDrqh1k7jtW6djhwLwpvrUnaGMuC5rkmhpqEADypkvjWHeWMzY8E8zobkxbCMEyQy2Wa",
  "key32": "2LkTgQGX1vdeG4Te1nVdy1sSFZQUY9XBtBaTKQ2ow3Kta255GVwYVCJSqT318uxEJsABAYzUmmnYDqRAtgARNPpt",
  "key33": "4PXA2GfTTXEzNoTLfnHKSuMkJsm5xLTnrGteknXxQy8Ux1dZ52uDiDexRPmwwWrqKEU7ViSEfDLup6hpv76WfXUJ",
  "key34": "28BZxe1YHn3D6QLfncHgVwHft2SDDiXmYqognUYqfPwspJoaUKqziydsrJNcPxtrxkovj4QJsF66qg9VpVJHgubm",
  "key35": "2QXWrhV4mqSMeWqJ16dMK8NGiJfqKbQX29pRyt6mTACQz9ykqSMejJyap6KE8qy59kiPHcPtr3X6tJSg8YtsGg2N",
  "key36": "56zpS2ftk7WPH7GZ1byPg7FUB1f9oWMXkfnkhRUDhv63Sh9aTGJeRzg5TorQ8hoMFTdBw7Sr8JcftCHgiF5U45fK",
  "key37": "5qd16opkjJKcJByWYmaRYkvDxDWu6udwMaE3Db5vVkMeVH9qH4aAXNHJbrHn7SaWnssU5CmWapU2Dz5y9t9zfzrz",
  "key38": "66f116L6WPkwwgeYgSDDYfJqqhBfRGGwHDVHbxRrBKftTPXAkTSfuRBpgAnvLWWf7oKn7aQkFS4nTbLrVHGpt1KJ",
  "key39": "4qGZxyt6RpDBcM5Bg2Gv389sVQoyue5r8endrNuQ1K51MiU914tnadNkHvVZZtQXLt8zf2ia8CTvGD151JE7PQrb",
  "key40": "4VZTxskwqhMmRVWJVNwPhoKDTnx1kRotsN2yyqCiRDLduS7h8xFm3EFhy15XiqFKWP7D8776bNdfssBdxSZFhG41",
  "key41": "YCDASMcJvwDH9gHXjaZCfBzNoqhbRpfGAPQBSJMMQb3tSoFuY8LBWBt8LK2GTBX6gQdQQ5ZkiiGyaVdtY97bWoT",
  "key42": "5hrzcrD14fmxwXWJeDRVifni4xL4MD3BcWoEh4i1cUwyfWakHzPaJVJhcE5q3dUB5peacKv4XsD1f9AM35KJL8eD",
  "key43": "4oeRbk5Z5Haar33dYzaeBHqzSm4ZQSeEDtoscPPRWf8q3PCUEfTfL5Zqb22a7cu3qPCV6FGJAHSsepX3D5PwEmBE",
  "key44": "m2X6B2Rs4gV6NHPQ7evSNdhBv68PgK6cpJe849SWoQLQdiRNFBNJFWim5Ugn8KMiUPvWTm4kunMiEqxQLSxup2p",
  "key45": "4oXEQ1tUiJ2ZCfqyTtk9Zk6L8DN69YuT1qFNsMy61MnefDdGKnXpYEaYRjgNio61w7dQJ1uLCDpcay1WhCya2ZZv",
  "key46": "4L8cxdufyvbmWy5RNrgFFxmKtAxLZUBKNb6fKap4eJ2tM2AsRWV4Tz48bhyvEBZEHQsZ3HALqzGx6nyRUhLoiw3n",
  "key47": "4XjAW7UBu5ZDzLcFvyQTjYJURpqWQn4AzRFvkyUgartZTbyAw2qctjxgmPByNUmNuiqRcDAmgqd7oWbK7QMhTw7n"
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
