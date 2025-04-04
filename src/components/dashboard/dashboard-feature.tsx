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
    "4pwcAgq9fYBXCA61uhYYcoAbVfzEPuEFUuTjEvn2LErHA9vuohCmN2gESRR6YetorWESW7NqwaB2f1PLATHcNJEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w6yhJiSTZkYgoZvBdVCp6bJyZuwz3r2gdddRTkqzvmmjjRRQ6w9nBKeUkStPM26wDAuVDV8bjP3KbUdugzouCse",
  "key1": "4M8JMxHUHa5gVDKuSbZDbD1zoWQHqqUWNP71zdLJHye1bH86HKcdrLzcbVAeA2rYov73YfbahM2aqZKAgV2fBUKL",
  "key2": "5nKxpi1Xio71sonp3yLpArFPQX1Pi3EiWLtxMCZPQhduGBrt2euuZpN3JJj7eTef5Z48NFjXQ5riCCPW6EoiPaoX",
  "key3": "5Vps1obr1TjkrmeTx4PvizB9obwKrcjkBzGsYA1nFo3hCwAVWAQ5XH6Ht7ihDqKsJormkG9rjL4vMyjjuWkookdc",
  "key4": "2R1nh8PT6rh9epHoabmFjo5eseCFUayqndPbCiMcZT9pJhhxje5R5e3sLp6VHYid79UfDazPY7DdFo75bxzU9ssP",
  "key5": "52jrDUaBTD5ADtHw9wR7NvFpJqF4xdPcZKpFawGwF9gQzYnwmwE9E8vyHfUSvw8WtApozofUYJgk6i6AjomwfyUe",
  "key6": "3fQJYYFJnPiuPNu9JeteXe3XxvX4tpGg672LjGq2qpijqJ9WyasApE5tjNFjH3GrjdUnvccFmYWEk27Nws1LevA1",
  "key7": "34JpZKuwg1HS6WwJP2CffijPCeqxsAoeDWS3fTzrg8PNk88KTQ6BJQZrFzXNGkRwZQZb1pend6F4xskchuP4KVBD",
  "key8": "3aTproKxHkoqgvcVAJp7h35fwKdFnEkQZ3VNFtJ3oiwW6qNaKWVSaJvpjURpKBALa9jhZ2AGWiotuQzCWhfE8cmz",
  "key9": "5dCzQQQZ1asJ5WcetvjULWb46EwAjPWb4THeoVAy7sr7teRtTVHeeWtUuMDRQUXY4uZFXqcrQgYTh2WP8szsvnPk",
  "key10": "5QXKnBfwR8MDWoH1mYRJvgnkN31sJKNCumYWJd1xnRSFFAPAK158RAHj6iRdbxCYz2A2XLADgY35rMt8tEU7MEaK",
  "key11": "2RXkfrauAbSUhRfhrLF2pvoTAEK6dEhJMPo4g1sVsvmCPycHwvwz2M3FvFGV2rjpyaFYU98XsGyBDs5XkGyj8tHq",
  "key12": "3YuRZeFS5RonPcPu1jxfKPqgU5kB9bQTbXbxqGVZMzBXXd2c1cvcRD6nx25MTxRq1MgcsqVvPcVJ3XgXgeqbTChg",
  "key13": "25R35rVU7ZqME6XvpywbdkUtTZSYrNq55tG4Mc1ZvPcRpNXj2N51L22NbAtZ2STixD7PRmVeKxjWk4UHanCzs1xr",
  "key14": "1XzN8SyvT1jdtB65mn4ghfyi8zc1DAMx5uH55HzHPniTW75LAyRPzjTEth6DwcxbqG9kBzSPUPp5RyurVkiMcZ3",
  "key15": "a2hwVk6dFmyxYtrvvYs2cPExm1Jj2XUqADAvNtXaU2k9MGdem7QxRogQDDj9ouMin1Tk5BDQZNnHk8aRQK4GgC4",
  "key16": "cyohguWcgMFyB5kGxs2Tj5uoarajuBQf39PnRN2aYqosQFHsfRUAXZwyw5A7HJjbPZLAqhBvp4pdGUuTPhZL3R8",
  "key17": "3NzkXyXAmo3E9a5SkFtU9MuEWozSjBKdhkgQden7nEK7ewHbtgbP8ye2Kjsa3hvmF2Y11tWrSActVKpNSBmg9LAU",
  "key18": "4yfdPU84X6fQCggP8rS7HVPhJE9tnxuSL3pihmp6nRSjov8JC3fR3uDn1qCXRndJerz2evUUNExifpg9WXxbo697",
  "key19": "26Nr2Tr3g1VGLPKEXPsd8pqpx6q1r3QdBLiGRXDC1WsiZKVGUdfqHZw4Q9fAnePpmsXZQRY5AMf2eeNQgRSJAuJR",
  "key20": "5Cf4s3JZRSX6b3xiwTV488Bpk2Qpyf7SYkWhKiyKaK5Ws5TnrrtDCFydLwQfkL5wcTwMZ7Mm49V7cKw1hGtB1ctD",
  "key21": "4rxgknMVnNDWccz8tSoFi7Rrb5p66KtYxML5bEQtpGZmjzMejsmqSs7M1K3Ue5Tukvm9nTScchMZ4VdqAV6JLPHa",
  "key22": "268kTDLamNcdEQajesqqENVd4f2wexrvLRji3GGgeZC2Geu1mdfvBBPyd3thosCwV8aQrW6UPDnCEu6tNs8fbUzv",
  "key23": "22ue57mYEPiw4BscDviv39Jd3n3JRJGvCRY5p67vx5XNcRCg9pfSNXDW5xW2YoAYdvEzTq8q1nojqtDhyViFbJtz",
  "key24": "QEcab9mpq4gf5zMZvxi5Ngz4TDVQsy6vHQ16yK5qaEw2gWmH6A9u2qtCpQpkRhsH8pUQz1aj63dYD59npxX897M",
  "key25": "2VRMbT5Eu2L8x479d9hJxqVJWJ2sBPna5MHiWHMAxHMhifqhBVVTroNqZHDcTRL3piAiFYDn1Dg4vGsqYqD2YgZJ",
  "key26": "sLVt41Q9TJAC4v7UoqjGPrvs6upxyFwWAH4vdi9JRBZhR6WamdQYzngKkXfLzE6WUmWofbZNg3xV5bbqxwF3pjT",
  "key27": "4Numvs788RX6UGBWAHWjQro7kdYbgZTfRxarCVHPrAxJqHCkqvFbSG4mHLDLtqudAYZ6ZeHKissbEzjmN2QiTmgY",
  "key28": "3ue5M33NVafEcGcbLwhCK3Zrx1gLtAiD4oPgTcGCozD6o6ELbKZ1Rzjb5ezv8j1CoWZ6V9JNPEHDNnYn8SfEK86F",
  "key29": "4BZL3HyDpcEfBNxzzW1G5nNTUpsbR9GUicfriXPL5zfFdjjpBbTCFYGe5AUkBiZwmLgJuB95S43wABwZ5hr26MGy",
  "key30": "YBPRBvEt7otgtwmdCkBPkH1spdGLocaML4EFt6ovPwa69zKdZ2EoZzupwAuX6P6ggs8tkLUpAkw6Tg3DjNAUsQY",
  "key31": "5SEs6rxBrDd997a9TuZXVdgVsbFNSFnnQAqp9H3pVb8UiQo646q4tUZnCeQB9LLZiNK7BSLzmSLWgmPQayhj4dZN",
  "key32": "5y4wjbyp7AA4poF8384bBm15S8Ny2tgTPPrJzX2ErPYkXPTRbUpNVRDMaoi84n5Gmnc9myAAQKR2Q8GDmrnEBUX7",
  "key33": "5twNsZFFPZJzoh5cor36GcXwwsf1PK8YYLuXeizoK9mW4BrhUyXwfy1Sdkt52ro8RpZQ7kQXWQzbzmXanRDV4Acx",
  "key34": "yX3H1TN5SYLAhCrnsups7MGhcjGtAKQxHnoEquSxMcw7AGsqqCEmw1RP4Rg2y4AbrAF3aA5q7tekMAho1QaNveT",
  "key35": "2jttiME51sPRxCzn2n4hV1NkVxDLhNvE7LdkCFsNVD1T2mbpY9yQwxWgo3eCRUHBYvRi6xf7auckzDH4xfGF4yME",
  "key36": "Q3XXKsjdZp31NokUmEWmZRT5hPzAtH6HfBpqzcR7oCiu6kfX7ip9qVeVzQKkG8VTxh2GkiHF6e3PLk6gDK228QG",
  "key37": "3fa5s5FZX6PWW6Nq6GAZ2PngoUJuNqee26i2zEn26fkBk7guvYWfc2wUaURE4EyHM5sZC1Tp7dTiZDQeRhydmNQA",
  "key38": "onDqeuC9w8zMNEKkKJ9EAfMtjbEFjj9nt9e6UsrdcseFynB63dyPtmhzXG1PoYbxR9bPKeeBAcN9bhS2uYWauB7",
  "key39": "4dejdZzgfrZC2E48rkNrQdqqRSJKCaNH6jUpio5T9aTSq2Xfo6pPympAbimaWkhxmsih2sqybki3uKDWbcSHn87s",
  "key40": "4jMGntb9gNXAhz8gzg2jRVKYAjGZ6befPQRsH1NkPV67x59YctXVciYBMzZsMaUHLQF4pUNX5eEHdCzRwB77ns2X",
  "key41": "32X2bYPTeFZMsVqgLJWDw1bp6Hyi8jgDavVvsw7hkT7Xw47pmuSgis3rmFSkfeXzCCKD5J7YHrxTVoYJH3BAXGFU",
  "key42": "5sBzaguaNi2vFoK6XxbqFA6Aw1ZLY5BNR6BuF439M75wAFYwbymuSFgHZNZEgq7D2byFFo7Y28n4Y7sHTDyA6ZNP",
  "key43": "5fs4Wrb5tzXEz1Q8UvWHm1eSdGQZv333Byrk9SPrv6JaoCcUpLJkBoCKm9sRxNp6DZ29Y8ous9iEihNaTjCm3mcs",
  "key44": "3tuzV7uFujvPi6TE71CM24pN8TvitaDvJVtbUJNZ9TnUpL7vHbuw7J1nPCyAgzeY2EFMF7c6mRRdYccCUoLSGRi2",
  "key45": "rRfhGFBorfRbe3zAB7inwnib2r3hhAmYGT2nGytuQCtkCAUQbsQXQEfwcyPm1EHaKyxnZBv4FE1Ld259mqA4nF1"
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
