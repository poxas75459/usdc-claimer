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
    "2WKUub1SJPyeTm6fhaa7TCN6s1XkjqjsnSzbsLHgKAgdXTCyE2exq2p5jGN98CsXhheuZhtzbpJxn2VuUJeKWqGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "281weLQ1PJY2PyQsFtdRj9yDYtKh8xrxQ624KeCg6nTVPr9w2BZ2eSJFrJ4Du9q4JQ4Foozc4c1bW7hgxxi6V9sh",
  "key1": "3BB35fsYJEHxiA5AEnPsGCCH1w2xCLyXHEi4BJA9TA6amzxd5BF9Bw5Xc3DjwdugztgfwJBpD8zk4Jvesy7poWc7",
  "key2": "5KrQbVXz5QEe8eY89xBwhNAt7J1L5V8ETv88gbFsAGwRSaweCiPTYPL9Na8qtyAAXDUSzyY4Nqb6JfY69nJZ3d55",
  "key3": "5Vz1VYitJPn3H9dt42kLiGsmwKyHUAw6YA1nJ7pVkPfgxzoG1HPPssrMKunkCxaU7QaFk6mCLVpJPrkLsfGy81Uv",
  "key4": "59XaJ5QnmyAUWT6gGRZNNHmQfxpE316yVCpJmfNb8WzJdN6y5X5m7TVGYE3BBSZuEQAYMFFLEn44bTNgkpkfXQnQ",
  "key5": "2wavr6GsdiVQ9pmWn9vQBs1HCXfbqrkYYCJfbTZnoQPhYZPHHz4K1X2skY3pEFSGW71VoDZtH4rnZyp3pRE4au14",
  "key6": "TUS4D4dqLzNSgzv3kovgeZviBu3Npb9fQ9sC2Jcmry4NUfcdR7y9y3TEEqoY3YLgqj8kDDzqXYdLx2AANeGHuEN",
  "key7": "5xz6HGJkSfGK3UpHGGXoCBRwpMoSa92vF3kNH7zdwymjXzGUsxjwv66m9Qs1ehDKB8fxBmd87njK4QYfzehNJg3M",
  "key8": "5QsKN2GYjGfCGpHfsP66fHUADTpaGTK5ET7CiwiHwJM2HchhTC3dkJWW7TPcf1JgMbAJMrNQfXWwsqk5sTEDV3JH",
  "key9": "4bcXwzcyHkGuEzJy5eKDjvQGrqTyLvY1UKJDB1wWyXanvbUE2wWzcBsefFe8R5rj4JkKXTNaKDtNuF8di9AvkAGB",
  "key10": "2xYLZFAgUQx4k2EPao7SvfrxjxcDusMcRK6ni2U8BkirDRPG6P79WmbzCMmsRNabxProVpbV24nKZhJXaszdw3Em",
  "key11": "5jnPvNNw77UoGkhMf8JHGjZDwdhvu5WVgBBwt9UP3S9aCywowotb2oH8e4ZJzwNk4wfs52E4GEq9mkXLZmnkeYKc",
  "key12": "rcWN8ax9roSt8riMttMxsjpMLyFbc1EhYBk2UFV7HnqFUiGeQu4F1Hm9CNE2WbTYg39tP4ZEv983Np7Uw28bxE2",
  "key13": "3mJGGQCGDsyG62BrQmfBS6t8Mh1cQSCrCTTSMJaMYyREHpoV3aZT4Ph6wPRxqcs9phBHZcJYLaw4yaAceL1bqt4w",
  "key14": "3NC6sxfRzw2mMFxAHQNv37h3kLf3vLhoRGzySqbVTgrG1fGfSCH9SKZrmSGq4aUZPkz6e9yW51dq3HXMEFXmHZsW",
  "key15": "2Q9ikEB6XG2dZ6wov34FUqCzXG2n4nZzpnwXPWiYJWC3PDDpe73o6FnSDh3E4mArqN2ehQYfNJE9Vry7FgsJ4HZt",
  "key16": "466keFg5uTWgzm6ah6QMSmyZoBKmx2oqyK74RgFWXXFe4HEqYKMhZqqgWqr553UmH1uuAgCuk6EjkWzt9p37sXAp",
  "key17": "6415BGezYvSkGfi9Q3rBX38YWtJeE9BgrD2tKar3VgNjbBBnecdn5K2KowXtkM6kyWLc7TFPDfvCfhzW3jc2GGKv",
  "key18": "2sbCJgvEYBR4y68XgbgMqPTxn7oExJW2RSFbjENM9tn431A5gkpLiWnWHFH2jrYumMPnsXLvk41UAhDDtiGJCd4M",
  "key19": "F26zbutUXBjY13zfAtVbtZn6miV4oMHHwfndYFus4CbzLem8EuHEmZQVcr3YutJihibXdJamm691vUyYoDmnpxo",
  "key20": "3d94K8Dxo9DK8rtcqgo64azD23TYrhZoE3ZBfKVhTQpz4WSeyCypFcZsWJrAWY4sYmnNV6wEwX8GL5WReiTXw6PF",
  "key21": "9nhuScTRxqJFLB8nuEqwhkeMJ36JWD13GnYBTmbP4SUVRwnidwQGqFaGK1B9Ss6TDaK7J6XS3QWvSesjphZJpxT",
  "key22": "2eY1ZeaMJKDtM3ePZ1dR9Zb64h2NrRZKMR9QKwEYGjtWAK7A7q1WVaUf6TuG25HFh7Z3grcHdhHA4ABmMuUeJjXo",
  "key23": "CDk9F2U2HkiB6V7SXDyo4RVSvvti5V1gtR8B1Xtrod5AQNf8S8ScFEhAypbJxwNgY56kiSy4F5LoGFGF3SvvH2a",
  "key24": "24sXTbh2oGb7Z2piv99nbAeBEwRiuqpFwERozZS2S3tgk2acwass5wWUihg39B1nMBUhRKz7wgCQdpev3kp96EaN",
  "key25": "5GdFJPiUG7qkZ277xRyjK5a8nK2etpQMeTeEctfxRmmMcM1wnMHYY3ogkw5ex7ij4Exp2fuTWHbwTVhoTDGZVmcM",
  "key26": "65tdpAYYmhBdE1y3ZeJx6KNdXUqv5fB1vQZVfwEqrwTLpnsVF2sZeTs3THFtfV1jMiKHUHRdV4tjF57ZdN1Ee8Ho",
  "key27": "2LuQwBv9XuXLE7kKiZQCKomaSzpDqnX1jvBMqYLsd5a6bKXDwSd8YoFp1DXwB9HCEp7m85rqYvBiSNxXYWYToCeB",
  "key28": "82mDkgdFuf9XeB8c7eKBLZEngHR3dMABxe8dnCxR62qf4TErNxSTcrAVPzWDeEoCj8sSDgxBAyDZL2QMe9ZrY1r",
  "key29": "5xk8bdL8r1zjNEYR2z1jxgDgtwnBcDMswBX1uF2hWRHLpkERwnXGrENokhAkkVwtUeyqF7T8NRT1qgcmsUj8ttk6",
  "key30": "4xuNm1ndpmnVwhkvoD3EgYkNRuNps2iKjGdPZKiFrgbSJ1Ny6rFSDtPinVwvhVeTESvHB25xgjFFjqChQv7Vg2ie",
  "key31": "5goxobfARav81L1waHseh1R2psueVYHgSZCUHzLVsuEBV8NLNHt1rhUBE9HWxj34mriwwH2f33v9UH5h4U9Wiz7r",
  "key32": "3s6ueKa8Zf82nMDFGUJzDFqLVfL7wvX2x4f9ScRwrNTPYn1AuTpn3vYVm57HS2pegB3Kd5ve7FXZEx92xAmKA2tt",
  "key33": "T387Fwjd85KyBjK4dwjwaRfhTtRfx6uRJiMHUakqzDFtFbpe69CdVjFz4b8xGq9LMWgiQAxTrmKogAAmkSAFgSy",
  "key34": "Njyj8fmj5qhYXtRL3C6i6jdv9AruZPgM9zahkJYbu2ZK3DT8suvVUMZ7FVtackpLDzYTtX24c4hTMMPW6En9D4d",
  "key35": "5LzWiNXAQaWUjEw2FGR3KQamXQoDgBq1FgcwoSYq5J64B4Zfha9iP1TX18m4nNUVZCGhZfdBzwcxX8krB6RMkz4P",
  "key36": "26yXxaiEMkWHbupgmSg7pvobozwzUiuQXiwKT4dc2JwjSAp19RprA5aZoPJDCWvLSm5PqfMvazWJfwiVSK3EpByz",
  "key37": "2FizjMFtPpq3KT9JCfae7AH92BUJc1v2Myd3NFrJK3zSS83ipj75WqKXR3t6HnhZVEVSRyqQusoEAEKea1H43UJf",
  "key38": "35wtsdcXbnKof3nYpwpzGTZEAQpLBdk9cXZssTpVypkrFbP2iUxEfFKNxWGqveQQLvtKaYRLKCPnpJMBphd4Zt6",
  "key39": "3aQK6HDAxEwHXAwFhjgsqDdDbWFxJ13k7aVHFxJozbMtAR6K4eJuNQsJuxJFiq4c7cLKLyAeKjCH3KGSx3AgSt8H",
  "key40": "2z65nLj81RS6X7BZaLqgenvseA5yDZamiZDufwhUNxgxoFyu238pqr1RPLEGZp4ZjyF3129humY9BqHHNoENX6Gr",
  "key41": "3SKy7pjL1BZDVAuezD1cw8YPaUTTgsoswkTFctWaEF7m8YjpfGxy1yx7kfaWPxXWVNMnG2o6SoXML1vmgv3Ty58Z",
  "key42": "4Tj6ndLLHgrJictX55YDKs3Fgg4gSnA2XiEPXyQoSCfxfG4hD4QeVEQGqVpiEiBTS6pgMYFXwehnHKh25D84rvd3",
  "key43": "5v5UAbs5CHR53nzxFmkWAhP2NU6TNUG6U27c745Uj9ik1KZ9tLwyVsDN93NbfEeRz1yzidp5ByVDyUF4cn2UsVh5"
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
