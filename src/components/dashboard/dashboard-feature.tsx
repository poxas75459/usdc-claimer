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
    "5e7ahMevATjYrmRgUJMPGFuzamEsDjURV77jLDh72RMPPCeVw6RawEqeQLxL173q6r2QTpFDMTKhbx7aJE1uGbbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vappxq117PB34XbXyrWXdhgiyTkYRcYt4kWDx3hnHSpWgNquf6Brnfn4hFivkKZEcYNpoqdDuSCezLRkm9xLR3P",
  "key1": "bhyEqmMJ64stv5eMtzCwYEjhgVLRisReCi92oLQCQRycJEzjNHGiyqMWLqBm9Qq6vGTD4ZU5qnvvFru5EGhSErE",
  "key2": "2h64xsjHnve1Fg1rmXqgBCq6msFsXHA8zALyWN6tBfZvwX8XiJPsrq7R1wVUEyCxK6SU2o9jQozc5K9X79KTHqF7",
  "key3": "419kZT9m9iGP7aTJEuvxkCejKcZ5S1ddWYr9M9WWmSkzkDwEu78AySQYVwrRxw1Bm2x5QgDTaBxS6cN3gXQqzFYF",
  "key4": "356EWCZDoS8RrxMYHxNx2s3LYtz11JnsWwcFoQAhr7hJAtbFs4mbtLrpe4NyMyiJe8qwJXHvZFXbQez8g7EuAGX4",
  "key5": "52GbdJWNfiRUEHRZQMpRHW4ow11qKNLf22LZdA19f7fJpjK1TEUWReoCgp23Bc4W87Qx3vSFPaXyQRZxpp41wyEH",
  "key6": "3kHp5K6MUmtpG4RnDaKkcmmgfPduDYWZ1fxBCcJwG2WCKtXYghb13SwVBRC473yvVzpavNApLMXWnMT4Bh4vwajY",
  "key7": "niXgeJmP7S77mLzbxtJ2x9ZFGfyE2gRv2C7EscSpfJWPpiN4BAres9Yo85gmZYL3vjH8kC8cfcc4HsCdMG81RVx",
  "key8": "iX3igVuQvHef5UE91izgQRKttaUCoy8uPaF1X99FGW17u7PonrQXv4BLHsYZgeGu5xLQeWytLeFTrnvWFFHNsan",
  "key9": "35wQm7LYe9A8gCSEa8C4AGkHkynsFPdURDv3Jj1DxDDpyT5aHKrtc9UMACFoBq7PnznDo1RWcWDjyPEWf6T8yNeF",
  "key10": "5bVDPJdXLvFZ7FnyC1w2VWLFUHb2ax5ThnCAiFbXcS5VqX786cR1H7cnEMYBMquSP5HTn6UXxmScQkrJ2fQEGhRA",
  "key11": "3LVCE1WkAK89Jg9qFU4oyxcrk8Ta1A3QMNntDpUDU84JTnRLEbCLqTiaGv9tCoRq2MmyhEFbDPs6TrWmryKsUHMP",
  "key12": "5TeN6DE5RxHzmS8F42qv8eaZDMakMK5cqvBpormbfb1rboGfiTGMUznmQ3vbTbyzJPmtFULWBmprMcNSTjT3J2G1",
  "key13": "3aE7cmg1wDsaTgzzcN6DUKqBnhwAqtLCjeNBtnVZ8V18vavofA9L3F8eqiVuSYHqUBaRfU3oDBJ93XhXKMAPuYBz",
  "key14": "GzmixAX7poKGHy8twUHYrAwdCKoiQ3wudALBcvZThtM2CULV6JtK1U7t3YffBWoxRkyNHRn8KWLwAnwpivwGnQk",
  "key15": "3t64swahGi1LuFNdPm4pfDEYZCWfjGiNq7tdKWtKnbfS3qQ1YYfF5ozvuLKNkwPnUTeT7YF9gJqTypH14yQzosmu",
  "key16": "5yUpVTkp9oLqraAtXa9j2EQoqPNeP8sq4iPHAmsvSemiePhpqBR6BuJ4QjM9dGQzVxotzjMejkY52byF7kytasg",
  "key17": "3SvWbnLfysKhevCB2MwCuHyfaJFjwgLp8KoW1vP1Un2X4oEnEHnULtz5tk42JrNSStzNSu7kUicDQgs7bZeUdNTx",
  "key18": "53XG5FJ3un2Ki9iPZiwAkAtnqhPkXct9eH3upGFq3SEYLgyBB1Uark4Z11Rc8vLPiCF9zAaxU6HfT8n9hNYASMmN",
  "key19": "AxoDUQ8kN4uxwypY3KkBE1Dfn4FdLQrJbgZxtW2JfX539mCBiwHX5upfD7fpNPCMQAfCfbiLHgx7B1SLkKoEA6k",
  "key20": "5sw99BLxge6qZhTkf2iG4uf6H6XVx3fJHX7WTVirqAa98YHQBCT4kfcNcyz9aNNRFLZQFH4djDPq48vtmUuqtbnj",
  "key21": "34v7yCsj2bQsf61GoHEaLiyTXE5TRwRntf9yD1HvVtqkTPg2LiBJuqS8D1p1WRbNjTkF1JZhGSZV2akbYE8ZtNp4",
  "key22": "4SXF4jGFyrfDoTN6ESQwoGhHM4H29q4h7MemNgvvJZNVt7HEmXA2VjvryBKRzVLiHHHb1NevQkLVsWMX4JNPuHRD",
  "key23": "1WdEFHCvVmnQAKHLaNxVUYTfrH72gBRRgyaJP4Sk5KKfQTPEPyxTMS2gXX6qir1K5mTFojxcmMsupzY9LHm8E7G",
  "key24": "33QT3V617Zh1QQsq8k6gx5W1xv48ZXDpHK3eEJkfqosixS9PGyUTXGZPkVF3XXTWQoKvmhF9REaZTR3j4nQYDVGt",
  "key25": "hfEH5YoCLUHHzYBpYEGzZRRQgWUXySj6UAnErbJa5i72voswCUNieoC6DWDgaKVZvhHsN3UEDVpLJEv1aZ3aBMn",
  "key26": "AQxxvuH8LHWw4RJPhFEUMdAJBBa7Gah9eKupNspSYKKiZTp6JPnukGTvuzG3K1qp146gN9p2MALxoMoas5mDQvQ",
  "key27": "5YR82WikxjjWFFxUiph7RX9q8zxk4PdzaFMmjK51vqvo48r5zLJq86yPL681hJVZdg5Xpm7K6bNRdcLPMCi1QTJ3",
  "key28": "5EcoMfmtdnhksUQAih24Lvuu1uPmhof5ooLLwLBnu3zh1kPF5XhLrZXvnWuErUZq24DBBmRq1pfaQnCVszVmPnxs",
  "key29": "5aqyWxHXJ25GcibrJVYW6apZw7FYbD5fyyJ1uLFnV6Qu5Q7sXnVcesdK4gU4dYYNePnWEGKpy4V2pqBDS5HKe3Ns",
  "key30": "snvVB5Q7uJQCL8FMgBQ6Wnm9yzqA3KfSjDxkxTonqqwrNovnQ3J9CMQcAtSxiKzcgsKf4DQk2wzsstPAJEdLw3d",
  "key31": "55DcvPAiFRAWYc4shYHS7owCAffNhrbMXrh17juQeEkaprjH3Mnzn7EgFZEJawQ7f6Eg4NnbnLYdZUst7Gpgo9JN",
  "key32": "21eYL2rAoz3n6vetPquQ5u58UmAhPN7QA86nvbimHYa5m9R1PZZVHWk3TyF7BLDbVrcxCVSr3oD9H6dReRnMGN8n",
  "key33": "nRG9vP8Jd59DBn5Q6VLZamDdNQVtvmE7gJbpeGEyTwK7eTG94nXLkQ49zvKJT6oWePdbS62H1gEExDFyeCGuJgW",
  "key34": "XnkzUXwh3FjcbtzqBt4H8YLVByBwYTXzND5CqXS7Dk6baWv7NKgTVUViJESGmPhZZYHdzpGmz1Rvcth9V65XZ4E",
  "key35": "cXW29FDeviFPMBorGAEpY6SAkj6r56VBL1G9NHc7mMq3o3FoMC4QDs6MW2ZqRm8czQGdzXFmKd1ZnhDm9oyPKDW"
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
