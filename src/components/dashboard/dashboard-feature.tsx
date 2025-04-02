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
    "3QK2HEB838ehEocZys6GJGvf3dJnKSoW4khS2Jn35RjXHbbuKzDTCLsyXYi7pVooAaN5fr1MsfWDmYTQ4R4TtaYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zf4pXdRVqHX4wBoVU8rPYtsnHhJ1iRKyFvT6WodnB2CkYuYDZSRjpqrtnTe7hNZRKaqA5SG9z1fTSU4kNgY366U",
  "key1": "D3LBZ7tUodY1vaNYRMzEDYHdySYBMLkwRf9bS1Qk9xfMHYqe4fpFUPgrcxGA7vPN7o79ti18J9CeQGtwF4anc8W",
  "key2": "5gmL18yMi1bVTWmWavWq6SCJ2xwYqYJp2pt8WjASQX3swcjG7TqXBK3rdKdqoj8UhyT52Z8su2mxC4f6EDfKEszg",
  "key3": "4LqN6csoofckFDJWwEjsi2kVjeRYuxSHStusoj3YLDbTfpsUSgf91c5JXzk3kuboyn3r4h6Lz2Cu1JNM8v8wyqdR",
  "key4": "5ajMwhMYcxhte5DnP8zYq1fWcGScxUxvpiKLHeBK48xRd9T8XYq3AdRPUdT8AQa4kQBxiaTNR1NVnq1aQ3UxZi9N",
  "key5": "3c41agG2pEb2bwm2AFUHa5wYyrjt72k8ZiWd2aVGX7h9EQRzs9YGpiStXJn1LZGTbuZi41pdG6L7NrzHEQL54R2N",
  "key6": "passo4SXMahEuWAE3nJtGfPEudJ7VistT4kg4Ft1U8qEXnf5jfRvzvp8Q2r1HAj58MFgk4xPegE9TR1Xpj3SoYj",
  "key7": "3R6h58PhN6YPxoeKCeXgzTWHD4GbPVJ9dvnCMfdBtRVGt85HJiF8x2gxioejk5mymBNSvBnvYqT31dvkpc2zbtnp",
  "key8": "3U5dpFy68qH9xxXNDcPANyXPB5pG5tgie6PBccQU8vmQBTv4nVrGWRpJC55ubHFaf5a1b2N1bMYdx7UjccCNaYja",
  "key9": "AsdhT5BFMKeGThYBkvmZ1CZPvGToGSFmWUdwVzVDSmMb6yhmtwGXpsSVuXnd5USZ5T25KsjWA5kwV4a3TTecHPE",
  "key10": "5yYPNYE82J42f3b9WCu1zrcpFMMuwvzP2MBFvHB3oEnrtkwG1iaVeN7iDxU91sxc1A5j4X8K9fH8tAZtw2j9Wp3s",
  "key11": "4bdVjM7YmAuFYa4jzfzcdp2a3TBjYHZ2iLsqMHp6Utpe2CeJDBUBmaWjQ8XnoLWAnZ8R2JgXWmGSDhFw4MzKuiN2",
  "key12": "WJZJxR5gG7SnNc9sMnty1f8v5NaiLqACCnskijkqPRQAnvSi59hRFqvJqk9BusYL3B6SWs8q2RBX3CGa3q5fKXj",
  "key13": "4HPMxpZ1bPL36ePVwiGicdBccRQsQ9vZ7zFeHRzhw9z6ukEicvEbXcDovFjANQrmtEZVmvg8vSoPiAbPiZTi1YjZ",
  "key14": "4YTQhZMamtXXMXTHqfTS4ouBR1AcKBU2Mw6gZiE9aCLqJ5znU2kGAWpj5w4t9ANxKurJmyvqBihacUaPiffwTWYg",
  "key15": "5KwBiwb9ahdhacTdDyyKDLqDm2X6JLfKXNHTi328Z5LiMy2H4RsKhjM3aQzdAuqHBoQaxfAxL8gyLmL6xRs1zou5",
  "key16": "2gmkskoCkxzkTPC9bk6AWgT8uxAjpuapQPfv7Q782umSsuUbYJwPLocM5oGQSaqGsvw912GFZPTzsLC7NV4iidjH",
  "key17": "5cPRkPq78qStJubZaq9yLe969ELVdCmt2LxP6Bya9gQrANb3srzFnhLMeJn8gQCd4MecSJwfPQsq1vqhjA7Go5yi",
  "key18": "U7iuTyDscqUKG8UsVrwg2SU6opMTu2CA1Yitw6qMNVd6m4LnB28QAGHaMdGdaFfQwxVYQT7BT5jYvsrvVKJ89WR",
  "key19": "4tXZt8ofPavJDd8A4WJfdh4JZE2rdsF7UU4vPndQwi6eJFS2mupugF2fskmAcc2i7jpTZzYf5jjHnqXVWFAdgwgX",
  "key20": "5n1WCMExyeye3yVcSuYU1eUvbZqQfjGGBH1ohhbPUPWtd5tuXjx3BkkRHQU56j5y4FtR2froV2NTJgAu7UfLwxKC",
  "key21": "5xk7paYTM5jqfQ9iwDmBoJtnukat3yfj5RunmmUQpwfY1nJLDqrBmj23kcq6mr384r3VvL9xkrU2zDPhM6KB7LJJ",
  "key22": "CYenGdkdYjK3CkKYpBJRQxNMeGECWo8M12bWP8JF5DUBLLfKoa5jTjwypyqwfsTroAtm6RiAvNkizne7wn7ugzR",
  "key23": "FBME4FTi4fb9bKKNADUSCUh7tyUTABDADFT4woeTjvfomqLp647vmwy9s9EUFzqmdei4zkAaznNN4pjsoEth7yo",
  "key24": "4bxbMxMLp9kMkZUdq5Pgm8nL9b1moXEEdandZLgqLgR5wmnQ3uq5fdhJ4Fd4fHoBT5ZAtvy4AszJeULLA9srk62a",
  "key25": "4CvnFpp3Zxy77X57bx1EPrpk2xUmQSQGBsZjULJjfNvD4pLTzfkGAW992WY4gjv5UzHRWJZLMtG5SShYEAG3yd9W",
  "key26": "253ipnS6J13RpSKAxVUDSVvEQwrVSXBkV2zoAZ8WgfeZPfimWrHnraRkgpY88cbQwaHYxYdkbB9UKUS7KsrMZHez",
  "key27": "5GZT7juQmL5UJbxT4WXAKnhHb6yFKyTmzhU493up7setN5MkMyqmT4Ki8mj4Umh9CiniNsMougJomUFU967AyTAZ",
  "key28": "21jKkdz7PQaT5fCFW2abYuPrkdiGEijX1z2PgjNdSmoYsFTERtw6DPdj8bVco7bcpMbfCBvPHYr9PuUHwXW2REeU",
  "key29": "3VwzSAGfxz6AVcyKa6axee5R7hBkXNbP7Z8ytnUJUHmFeej8cVX9Zp4wxKpd1uNeA4ciKFUXnEEn68NnViwtJWGj",
  "key30": "3ChnNeXxxuAM1h3RKp2TFfgHma5YAYrRwbf1DAdZNDChjJR7TuJJZscdXG5VySpaSzQrUqGTX2jxztPCFQ2D3bBw",
  "key31": "2kdqfNkvCr1ZQsVMPNdtNa3Zr9rLPwLpoD1g9Ncmj654BMyKZW6Q42Ezv7jHd6rBkivYhB9hYPYzcCGMS7CsWHaR",
  "key32": "NDGVryaAqjB9MfZWpWPcWdjWkkk3hnYGCLEQAysabgyFZfMZibLSz3JSHWhGEsJC2NNwZN4uqPmH9KApKLyqrnT",
  "key33": "1ipNBjLXRgYATsY59qcTC9g4PiZPDk4oMmXe3f6zVmKeLHAGXXA4FSa6YWpCe4CVBaTtS4YGsjyBkkr2fVNM5pk",
  "key34": "3tvYFcERbJ1FayhT2FJuBShwJXuQtAw93VPhARw4QSpMZC9npb2MVDypfwNzz2PzXgEmD198i4aJjPkqH1CQXA1X",
  "key35": "3LP1dYAA6MmiUZFNZLvt4LzXcASJ2tYkxrxWna8mHNwTh5Cbt1iwVv8Wpp9SisW4uXd3wcgw2aJeQX2wV3FQiSVx",
  "key36": "5pMkpfrAPGgs1ASHwDnabBxLkjA5XwpsmEf7e1faKuUgJPT1ZXswwazwZPKvLQat72bAw6QWRTCSTjbWEqihaqJg",
  "key37": "BLUVJ8FEM3LGLQoHJVaLCgQB7UGiotZvXFSoD7L7nHRBBjEwxXDqENsCXxTQEwzaeLBFdCYcin8DD6KBcZ15rVd",
  "key38": "2HFActtfjt2pDPM8V7san579aZiHhn8LdoNtpM8CY8ppQq1Z1DQB1ubvP6x9z8ciGPYybiK3sa9u9hN1pjAAZLMQ",
  "key39": "4GDfsoYPwH8qmZ1hrGYJspj9vFdE5RJp3cZj18tq9TxhaRSKiCyboAJSSPVSgHFaLg4GrNFDc8HzSHd9ArgFTvAi",
  "key40": "3dmtLNK4xozZMYbwetjHGbTZFGg4hVS9xT4nk8AVi3akhkD557oCoC5HmnGUmGAsEa3QJkPtcug26c8pxiHJfPvm",
  "key41": "3uy7guMzxwP2AuR3qeqFdCEKXy5n5bS198V7tEKtCu1BwyHe6p4vTW4TwoPyH2t6EsNEuSrJ8mPqkdfJwzPAg5hF",
  "key42": "4rcBnovs483LCsEqfrhQQqWzmwzggZ4Td2DeCHeedAqPm3iSLV9xsfSrbp7m7E6SFn2wgSxAFcqAUSHPpVLPNQdS",
  "key43": "56BiRwdMT4KnobNeujjKP65T5nC2sejD3XDvfQ33vAwM9FrBqxofEY7WK1SSr83L7ie38fKUudhAYzqNHmS88xfT",
  "key44": "3CUcyxk1FLAGfQmdW5HjZx5q2p9wReTAWpkZtsRMiTaH1tH3detLPPcLmVSXWm5LxUKAkDkNoG1xaP5EZiECkmLd",
  "key45": "41aiT6M5DPoWCyAATxMWDkoZKjemmNE4iFgUmmN3n5u1kNJ2PDa91PyJHebPDBRQtDPcb4ttM1fiMSQyoRV2iMEc",
  "key46": "inEu523Re39NfCbawK35NiD8oMYvpd3aRypAhJ8gyQRbT1jRJK3p55pss8yMDufVtGVQKYTRAdCyvK79jJb4kTq",
  "key47": "3YxE3FUswAmPzBAeTN5FbHuzWjZgdTXZHaTu9Pv7SkeFgQpZ1oUEuPFq368XM3PXZfzhv6Ei5UQd8z5PbchED3db",
  "key48": "4utSQdqHTXDxYoc4tZgb1cYa3Qa7iaXJnrDNgNmMKR1XmVytofEtStxsAHPeeq4BUXz8y2FU1hge9uLjm83DDzsD",
  "key49": "SUWBbR3EtQCwTmVeSQ6Sz5FwK4Jr42sLxL6NxpDVSWtNrNS7Hi3i5ZmyUTNgLbzwyxas9rx1dU9FZbdMZvLUtse"
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
