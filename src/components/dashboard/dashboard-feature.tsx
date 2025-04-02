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
    "3FsB1cFQ3HcFFJA2DmVCvqyeSp86HpFimHBSzk7gBoNhjVwfc1MULszp1FyA2LDZJvyerKN7ERoa9c5Lat4EYygH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5way2kqtkhy4ZGUJjDstWxyYC1hHXwFVc9PyaeWUhs4ewEVSjYYdX1tnLGTU8CqGLnpBcnQ5EpArLNYdQa3Lh6wh",
  "key1": "3CeoAKuPPPJp8YYaaU8o6VPBHfMrncGhHGx6TosGGUvpjSuANzPQz9JiPaMKpm94G5Fq7TeJYagLp1938RHBxDk5",
  "key2": "4ukh1Qi976jHnR69kc3JyeF7NTTfHXYWqcYnN7nvkcpvPE1et39GPLr5PaA6wpefKeJxzhmVfrTHfqH4dYAqb8Ck",
  "key3": "5nJ2P5LByQ5Xd93fCbvxdhbdtUvGtYY6dGMr9inQLQ5JjGTnYo8b5tgF3R7eCwSUSb7DHUY7n1AcrKjvx85ri9XN",
  "key4": "3UsKRhV5pAPyBH32syBENjaifxf3T8tc7tauCfDCE85XYsMBWgf7piiCQNvcem4FKZbbCdXnNwwpjqE9VHER9yfD",
  "key5": "3xnKQvULM1ppFWdAeYC2FjXpwikEHZkcuue9PyKc8vP3ynJ8oKXyYiwWyB6djBvafWom1uN7s7LHAR8xmRR947BV",
  "key6": "5EEeozCA5RQu2dVvpCwhEB4igQKwrBQzYbCc8ASYT2wXqPpu3tyPAwg1SJFgfX3F1FP8eWFwx1RFs6Gd3XFtvQMg",
  "key7": "dzn9oMtogPDcVUKtbfNbdSymptRd22F7yegaxeiZpikunsdd2JaWzVuqUZrU1x7CnsdHM73aSdCDmKrQ8H6H818",
  "key8": "5DKHXXo1j7bbkDD2TRd6hgx3BJwyS1nteqPDYuYrsEB4RdArUAUpR8uGw9LedoN7hxEreXmemGLGeM9kiNthPuVp",
  "key9": "Bj4BgtnPJzbQ1JqndNm7xRdYpCRHDjB89prKh8HwjDfFbcxZnhxhH74tGrZ4brZzKCXmDTjkqXdCtrbeC18Uvtm",
  "key10": "3wo8uGPiCKRWDSNM2tKh5s9arGo5Y5fdDhUxpsfwAHzJuDqGSPG3KZEMDipjQgXtyt7Gr6z5DA8WfdCBKtH5mXpz",
  "key11": "3ZJYAYnhGAF4aCoT5bRd5uLCrjQcpNt6uWG8Pi6kg3BAmtJzp1Qgum9EUsRLEjFT11L3bUbn8Cd9Mz6qhwHZPoTb",
  "key12": "5QFfGGLDtwEfmEQCGoq69gQuDWw1ANpGF4Qx2CB243cB73wXybeV6ssZV6RRuc6hQmNPQkxe4vAc5BiHWpr6vqXa",
  "key13": "RzRdNVWiDT2WduBE5MSqwSp4M2Ro3Qshrn2HaB9pDHoZZNgYRdAVwQfgHXbJ8huEEAHn4kXGxvLsytaBwnV9d1N",
  "key14": "3HvBNefzqV7Dzhsa5L5DXNCj4BWJH8phBYJpEt6jgjNvf1c6AzbEwvwkwsbZHdoPGkBJrAJe3Y9AANxwap7P7Jov",
  "key15": "23exPtRuKpuX1roTnTQ7JXRj14BBQ6hkNGWyEhFwXs4b5w8X1yR8N3BpzQfCmgGahEKkcPh2S1UBP9Rxb5wMf5YZ",
  "key16": "4SXqHhsTx12iSPBfAq3ZMuDrSvVGqnAi7VLwpdDPhzCFwSntTJbjADkQiwTFu6zQyDmbY1mzNyVLK8Bw8rHrTX8y",
  "key17": "VBGbs1cExWivsypQJFE5uxqLFkE53qz1RAtEbgkA12c54zueptaUVpEmFGGEUzTGDuz1iWPBjB1thmkUBXzgqZa",
  "key18": "2sLt4bui4Sr4FFdwMv4QxGcGoVxcJEhFERnWYxbjyXrkpF5YfBFQLLMbUDzMwZf3vS9yq6wiXLa4fhLAfXsV1Dys",
  "key19": "2VcV9rZHunRWHoJV5wbHjWkwDjvtCd2ZCVuJjw4ezaWyq1wSMqi5vPCTtnyztacDhHVDQdnsFzAeRxoXRF4Z3zHs",
  "key20": "4fFDEMw9iNVDaeFQXTsT5B26JoLtXLrSYsgPRVsPwqJ5ZCTFcRjBkTAuopeMTrgj98i9ozzbYaBJuXL2FtECewfg",
  "key21": "3okBL1L4TSKa6icymnjMqkiVdQ4KB6oNXfGj6zWrRwWDXqYNE4ABnk54yK5u4b2ZFTjEVuASbBTnviUpqGKcwp3a",
  "key22": "67XMCzZbsoaFrWHZ8gSJPsGVYt6bWycWJoQZAXNKu293BndFjFLX1QyfhDcjJEgZF8xcNUkaqFRZtKakxG25KgrT",
  "key23": "3QwT8Lj3F9VJitpFTNsX2GV2FTb4LXRFtbd6jN9HSuLfUakomXLhRJB26VYRgdYTeVVEVzN9zhjs8nUqjcTgiBsY",
  "key24": "36Rb1LFjsczUyL9EEzDr3eHqLjDcDuNdW5KpmpJREyscrnX1BPfcPX6wPe4sYn6AvGc25HA6yhoZmsjRcUoF1627",
  "key25": "WZU9uPLfVnqJtDh55W2Z8E138T7AwN9kzfNW73HdRyR6CerxhQ1nMy2e8j6YrwdbyVJ7P4ZDhcw2CJZY3DVwbjQ",
  "key26": "3xQfTTb4vgww2hmEPhfyBn5rDxk465mvqi64wSU2VjdyXc7FJJrf5Hx831GAcVcYpYPBSTyGNcdRBEq8RhcczW3v",
  "key27": "2ePvzd9ff2M88Y667zb2dajKbBu9ewbDSNhiwx4SSK7oq5Ax6prfjNCPL84DugtAwdjLfdmNPYt2c9CjDVCvJ8s6",
  "key28": "3HBcNcZA3FYEimCYSgNqEeEq5xkwXDFcpiSyviCJQ5Y7uajyzbW8B3sH2D6gCxjWVDFRJh6ygoEk2G2a5j23dSJa",
  "key29": "3zrCar8PsZ6kwkQmtc6hxjrhzQH3FDRkSEVEo3NoTACFuSiShC2p6WkZ5dVeN6SfVTCNXS5Rex1ARucqHPw536jK",
  "key30": "4y8sLhC7p81xmMPK5FFmRcGuAYHZFXJ8NRxxoynft6jjQaA48XinNgCfDWAM2dH78Avz7ESXAXcmwPt3oA5tHfhh",
  "key31": "342giaHWYnq3h67CXwBgwiQKXC5ea1PgBQ8TzBDUYFFxiUVvj1dPCHTokiyyJSZ6ZZYDDg5UByKRSBgDvsF1rTc9",
  "key32": "bsGtQuvSuSYngZdmWCcZLyqnEew5jnui8BFo1ZMRp8U1jcna3oBTws8Dt7ib4CtD8hf9BYmMGc6dnq6owHYLJgf",
  "key33": "2W7cy7TmueSQBbJnki7fGKjd6L9H3LGUDme12aXsmToKNLPpZ2tZ5qFYgzgppCesiFwQQRUqW7X4RBDqeAjVjEd1",
  "key34": "5eZsv2myULYwb1tbU9Azy5VTMrNEakYpZPyczmH7P6h67eva8bwhteZXGVEsK9BfKJPByDYnR1EWStZTLtpTT7ac",
  "key35": "F5tvmjwrrNK31G5qftCtMfjPgkfPU6CbFnhj75uF6VFNgtXeZPsggoGKbNv1KuQ1G3npXDwUkmmDcyCoqDnCN3U",
  "key36": "3dSFYhvsnSRfcBaCapqzivL2UeHoihLkuaUiy1DW1qJCyNW7q283CPr5erRhHDnAb1n81ht37khbdueaWHeYqNrA",
  "key37": "5G4BTY9Lv7c2pPczXpr2YjvQbf2rRoixGt2y8ovpzpgqnVfC8vDjH1dJnANhJzVqxgKaMAgRBvygkQGwTffQYZwp",
  "key38": "TQNBGwrZQJak1eBwoWq7LWk1XzbaL73DxG1VmmzkJLj5W3CdAGiiF67fCgmju3c4DuVNp5TDGKWKZmP7nzNv7Z6",
  "key39": "dSKp9UrtLbTrRYaGJXGwiVvQYCcpJDkghrxG212Hugu8fiBSeMQABYZrLm7cKThN3hhkRUbFQirTsk6wJzTpkrF",
  "key40": "2Pwusz6oKhcFghHEYWNApCsxMf99NQV7VoFzCcJVi747m5arx76tKBfzj6qn7RzvuMNuWRczBTwNvFw4NJWHD6t",
  "key41": "2e1Co7wEGUnM4PG6R2H48oApVcVvCxdyPg6FNaUtXeGwHMwrzPBf4Wufj4MR9iXNyWB5g5xVQw1B2wtexuuuaGsa",
  "key42": "4VPrewdYXL43VAVH26fN8xgi8Rv7A9nqpGSPaAGjjJazGFxpKKS6V6iuqmA1qZtsmPjXWK11TmfzYmKRQkqVb2pd",
  "key43": "5Fu2EXyLK9QQUzf2XqJRDNEGVTYJESyVrShf5HAUvm16ED5AF5Z64MZywsq1eXFBrkTEipUpGEutLgGRY1hNQf7q",
  "key44": "LFS3eZoxRb66eT5oGtkGfE6cCgFjdmBjgV5swJQp4CQdRDFHJC9cQ4uBu24a44kjo96z86PBzhnxERGcUox3WAP",
  "key45": "528cVDT7taHNoqDRAeSgnBSHxb5QQynaXKz2my3jJPfify9oqVJGiTYu92Qpar5KW1cUR5F2MBAYFeBrgyLqhVTw"
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
