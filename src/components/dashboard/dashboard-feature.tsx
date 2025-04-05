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
    "5Wrujdu44nzUfZZRHKTKUAoFxVQZGn2Vy8AWH9J6Kog2oeyKvPqqCq6tf87euTCM5yVppBPd6k6jAz8Ewb3B8gCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43CV9SRwtY3NAdubx8RpvpzxrQsPaLRZpL9KJrS8iyDhqUr37ezVZNeJofYctHp5nuJpPu96vfqcsZzVrbvBBqYF",
  "key1": "fevBp1vK6DUS7aARJREG1B3mAfKgxgMupzpt59Sq5yXVKgYr45aGcdjA7W9CkhBjL94oremMaYR7CaGjQEp2Mxb",
  "key2": "63DqT1AVLxoxx7Y8ffG8mTJt6KsibnH2bqG4i8bCiHG2joCmRMK28YB4TYWvyy7uBLCWStHSAHKidjYsA9TwasVA",
  "key3": "4Qu8QkYhHnCGxbSL96uDkypp3V1AJHJnGM4rrPHBMGWNyQH7esUCZ3w6H5qpxm9HxtvPramLR4yeiBsN8EEbqqSu",
  "key4": "5FmDUdVhtsWjEbKhJH79xwGBL7wsWSCaQ4bMCU55DYmCqLrcrH23339ypLp6VAkNbHJmgk4guqwcxw9sc6Pjy98D",
  "key5": "3yceLnMWNt87ZshmHuYfnudfnuzpY77crfAK3UgBNHxcHZn6baUiBbhB1B4Vr3CmvSL2BUTCPcapXvhmSPQUcEL4",
  "key6": "5MNuhJL1KZJaFwBdBqBvPGaFaf2Q5tj58T9Vr8FKfrhas7RetbyKEehM4eL7gW1zBAqHiXPgUyMnUHDQmnvvxNwH",
  "key7": "3KNShCLW2EHXZmFZHYGJArYN8J47yEYh99QJCpvroE5YBQKFRs8BWF26uT4eHmLBsW4yRvE7tWUGm9YM6K3ewsJE",
  "key8": "nvZfGa2HvG4FRqtidKhvtwhNPumccQo2yr7AmcMwFUypiqBWcyg9HpFFh5vseHSbCP3eNZ69fnMxArmuEF1uaKC",
  "key9": "4bEviUZrhbQx5c2kHgupX5YJ8FN9GCwPkqAKmEcsQHGZpoC5355A17UBDFnJNChi4VbAfz4NVJvqcFrUh6n6fqKr",
  "key10": "3pyY2D1dP27c83v686wCQRHyuN3MFFuFpP8DjHJSrzVzdE6FJheLs4EovD2DKEJek12NCCzhaMofB4DcMrwPdMx6",
  "key11": "52zMCrBH5kocbgHWE4F9WCuMFQobD8uBHG8myxDdLkZfmEVkwkQSZR9fNQ54LHvcgiV27fNjiYy4kgFkyKvfT3Wq",
  "key12": "r9fyQFPKBuZjTtMeVWqmg5zxgFGTfrUzCNrZWZYqHY1k4gS8Y2cNsCgx2GVgcUabBvJDUuBpeSSPgmC3c5gxAXd",
  "key13": "5EUEf94CwcfFq6ek2tkPMHGNsdmhCHTKKfjMXyudmrDqpkQiveVECx1YDtHkfqcNdbxYH1aG5JvmU4uVzg1hyx1a",
  "key14": "2qVLZoQc6FbPXctMhK1HNSGQ2bQPDkih12HAHhkX41322wpuhcbeZfNTHmMkw3GEz8esvgfWSVGdHMcGaumu3JaX",
  "key15": "KenMdLeHkxNNyZaShJ8XZmsMjeMcoZSKynJg1BXEVj5QTxfSUuMHfGfFUTAArJzy21rRiZWncMrxLeC4ZBsFBTv",
  "key16": "3VAXGiQBJzXrBj1vJFn9nnvx9sUhGkNZpeMpStQSEEypabA1kGPi7ULZmFEhBa2SsRQBW76aEduwxeog32DZREwL",
  "key17": "3gxbR6VZUiMYwLwzPLdSbkKQz6zHjqKa2qtdWQ3Cmr43kjqs1ojo3UEbkRdLghYHZ7oaUHpqkq3ozZxfdwM2C77o",
  "key18": "2QZu8TkPat6izmve799p9rUZ6jeDa57wEakrwdvRrocvTAQAUSwpBKqR4URKufmMhF4hyT8Da2ehhnsca8Ph58nm",
  "key19": "5mfjpdRNxoxYMaegv287M48rLW9FLw3NRdsgshUHgRCT91n67QwMMVcEkVwtHR7zxYh3nEQ1HazEHaAYPgWdYhhW",
  "key20": "Ufc8DHZm4M7aHVqpRH4E6NdKWQgX4xQqkV84AE7PyVYFaQWis3htf6CmHbNFjrpKyKS8LzcWgDNxcehHYZHaAz2",
  "key21": "3WAaDp8W7ZbEbxx15hYeY6CL79FXW5afB2MerHmg1wkdQcBURQKZb51vZvRPsQRVtqiZWwanrrNAKzxUqPBU1UHJ",
  "key22": "4rRFRRGyvNMweNYhUqYNdHoZaruLqQ1Aj5g1RRHzTUyRK1fL1pyRrgjqYJaaSFpbAuCpmeDwFBNvku2UXZZLypnN",
  "key23": "bqWYspMwx8yg7ckSvDEhRCDZJEuETPpbZtAa1iwf4sL7sGRReWReFXJxP9haCMa5dNPCU4KKBD8mVW5dkaoApqh",
  "key24": "quZoAacUF3cEduC22svQjHXd3qiBWberduo3RiNQrGcMZMphPtFg288UAhqKNKbRGDxv72bWyXmLjG9vuhBmGiC",
  "key25": "uEo4ijGATkxATrZVUzN7hqHnqpdMU8P1EfronLTxMMgpeDNd2L7FjWFconR97rgGZfqhPfMcirZ3AvRhL6RURsQ",
  "key26": "aRUS8DPQfwpMAbg86v7juKH29cBC71hi7LxmUFN4SDoXjcsapbUPxUHGcKUGrVLaB1dPRTpLkGKFJacn2CDxTXb",
  "key27": "3VgSNzXjxAsZrXt9fnX12vxdDsQG7WoRcjwYM57BsG1JdrBkkV2sRAQvuyHe9kMFxrdVdbE5o1HrnVn55WyGA1tG",
  "key28": "3LB58CbBtS8LXCkz7s3AjdYkn4tMhMnXYkN7VSrbJ9vt8hWqTSYuBLswftCjiT7rZY1gQDxdRJcDoP1Qu2YXwaHV",
  "key29": "2y6dkJCykEKj9q4vehwcfgJoPkyLyN3cgK26jfjnKAB1ShKXHxJwpdu3bqAK9eCjZmAB2SgE9EDmDJ6oXUEX2swQ",
  "key30": "4YsYHfH7kipUZphmAbugosjPuo5nRwKaZQwSXmLL9XL88QuhitUQ33dnMcVYWQ24f9DsjjenpNrorTctx2sNzWTP",
  "key31": "4Tde9djukeMSn6Sn4BaPNV2WF7r93ucX8bjGBHXX2kxGzgodUsLywNHJnQNixWLaoMnX7gAgSSAEy1UNNLuZGqTn",
  "key32": "2KN5S8pHRJnGot2r59WKxkDyAr86CH1v9DHKyfHbNDo8mFbF2hmeFYbjeMySn1FZ4ti8ZJkzJdaKYFPF1ReGrfru",
  "key33": "7AWxGSdaWLKwiHZNT1ERNdWdKAb6EJYwQ9UixdJXvC8hf8YiSQEPkHb1HeENSET1Ls7hNxeFY9LLHPEd3raPUVY",
  "key34": "FDMhxRzn64h9Aj75vgm4BL9fhqRDAN3yRkWk1QwAXofjhzypgGe4QxkTP7YFYHryw1FfeyG2nveXyPv6cWMqfAh",
  "key35": "5r5KLGhgpHDAqkoTUDfaLm64Q55WvCHuRogVwWSYskt7gY28DAwy5YqMq1C9Qpe4Gc1nWLf4dmCaAkgGcMVpvevV",
  "key36": "4B9YMDvF1VQMHXHQnSpEjHG68JnQkD5MTqtTmZsKumB8qyNqQZqPh1exwKhoYCxQm3ByPW4f31k3JpaNVwWic2aS",
  "key37": "5pR3Q81Rg3rhmUfLYEAc9EnJMGos18VUrAAU3Sftg1cDZbMsFjZnxFV4hPCQ42eJWihSe2SgiPVCyC69CZCviq5A",
  "key38": "5ZJVyEK97tFwwrVRVc4SxFNANWqUGZ1YLt5fDXUFHVsFxo9EzMpDPMA3WiJLV61AYHWBU31qXHGiFpTpxBZjrPxJ",
  "key39": "3XT9zmLwpShkSKKTvZEXpxxZpd29DB4SNaxCwp6oYCn5qRPnHJyWP2bav33j3zW7RWRSYaLVMZkDkCbwkMhquWdh",
  "key40": "4PX1sHcfrxTPSJ9VwTv7vhvtWBX62CbDtNwe9Pg8JYA6nmaxNNTZdiJbPVLYmTAEV9u7R4ng1LgA1D9jQKW39YSt",
  "key41": "4cqecNEGbnHMF1PucoAzHxJgnnu4P2M6dVnW93r3AY81wp4zauygULxsuAGLa2oL3Krv2X9WUoVZX54L1DfCVJ9J",
  "key42": "5qvBM1rHYkGQ3vHZNbdMTSnhb6aumcXrP3bFLnAAG2xTN6gvrQLFGqMtcdKWuvwP5GwisAkVNPugvXEYNXs16GTy",
  "key43": "619VnQByPiof8oDWWRFBg8EswEDTKyBsonPsvxejKSihSPivBrrNMJGnM73t571MdrhecMa8ZoWJVSvarqfEQErA",
  "key44": "B8JTpReoMeamP8f3xSyk2T9Srq4bX6CoozmRZbkM7QHkbbJ3aBArkhGW17EwBQa7jt9izktMjTivhn1JPeb2beo",
  "key45": "3JTRpLbKAseeuM38Dqn1LLfTbDuS7RXadcZepfKLg8Pvdhqn9A1cAzhqyZxVRNbcr2WSnNFujLBZrUj54QeGtGxv",
  "key46": "5RhBDbPaTe5eGd3Uos3v9MwKwQYtm1toGMRLRCSkKHDDYurS1MbMBwRPiDmhgGoDhErVR4g31V6vyKqW1g53ahFd"
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
