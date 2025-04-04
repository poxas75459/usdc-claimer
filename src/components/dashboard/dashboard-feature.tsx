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
    "D8Si83nAniG2x3vYKZ19TLLfa37um279djus1cXMV1LFRBVd2DTNerFt74boXiSCiAzafwrL8TPam5GV5iSYGHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dEaddrdjX7TFGgr3xe9HpsRNd6bFEMweMFhmuCZw7TEcmu79SJnXfvnWPrVcjZVb9MWHaE5vHptesReipY13qzX",
  "key1": "5SJEXk8qBXZ3VAkV4n9WqQLpUVU8yYwovXioSQLBy3ZVG3iZvQBmBQ2GqceGfnNcUxiZiYEDMF7LyT7f1Mz4Auym",
  "key2": "2MqezrrmTSxd3FwYb61ucUP3uLwn27xEanz84QDXrGU6yo25dsrD18wkDEpb3DdBMsrLWcamQR2MgaVoimbMghfu",
  "key3": "2ZjY26bsZ5DEUeKcoPG4hwMoXqWdfw9f43RNKmp9ZS36wL8Lv6uzSficqz69Z1Gjq5t1nsLj2a1KYLBFWfobE64j",
  "key4": "63uDYiUq2gT88zdwZAkaDxbXuqdZYcofqquTVH48DejKQyqfQYRFfjzp1BFUVzW99GBqawCUbzHbL7fkMqnMZSQD",
  "key5": "27TVrAzpxNmymFyARe14pK4w8LBYBKejREfQ5x6cHCXEToPKgTDXaft8gagGBzgdASzF3UUCGbQhMvL5rhsf4imk",
  "key6": "3v3Afbp4rhyBqKkYGwVdgFF9bL4gmWegEuMRL1gZ1MyaBw17Kn2MaQjKng8APfdYkJkfLn96zukEJJZx9C7oSp2b",
  "key7": "5i8ZzFhB2X6xADLVNFnyhL6TqkDCpDRu1w8F3PHRW6xhPQrK3t1H9XPX1tbPTYagzFbeENTwiH5MHnd7DzwRSxJ2",
  "key8": "3p4eZdPr9bnPd3RBTEV3okjiPW7yJUMRcaT17BTSWR4fRwF5d3RRuB5iNXN2B6bPQ8Xn69xPrSP1qiAfnjGPBqXQ",
  "key9": "2xgEdNd2E9t3kgq63WPFMVNsWyBX7utwUudE7m5XPAmXEcaJJvJ82apJAZkQ3VmvNLvPN9ifRqaCG9s8Xv7uVpD1",
  "key10": "389Lg88Me3KfgMTxWua4CBtDiXhpzUkRuBd6vQyY2wU4AH5BifoZmxbdSDS4sVTVYQGAsRdkdyXv35hHc6puBcBW",
  "key11": "vqDs42yqX9eVeew3VKgMtTetg5BD5Jw33pFTyRUa8pvxK8of1Ab9jiopQ6FfpCT1ZK9a5CrJeEdSgXCDktfAZfJ",
  "key12": "4hMXj7GdgeSDXQ6zGJsEzckgdAL4TTAfGTFFE8kkMX8DKnQKBUunuL1ML82EZcMVtjwe5shRYtd6TTve1VLR5vY",
  "key13": "2doKa7EFtJvmdwHvAn1naiQ8jmMpQsuL7fxeENHWCHBNkhNAsvDiHect4gbUGJKs77ujsSz4kQmYMhS9tkta44yM",
  "key14": "3t4tcuRvLwoBK4kjJamGcu7VHKvWEQ9sTCpo4V9aqKRpkiL13oinJuTEXPJFFhYb9jnZPYa41vb2FNTPhQjrd8Mj",
  "key15": "5bggGE5dijAYAKiwUYy3t3n6fuPKR9rdFATxadyYCtAgM3V5UtSCwWdWBzUPkZh36wsJWsr5yU7Eu4b2rATMRPPQ",
  "key16": "5GYcnZSx7UFz9tzB7aybqMW7gS8jmsrPuCtBNeePruJomfKRRNJUdjk5ExLp8X3H3bdcZt6JT7TNKoADMh9vEuBy",
  "key17": "2xKmPAS2UatDZDtSS2t1chkRDDR3wTR8M8Hae5yQYBJRrXUZ2byD77ou69qqpmeRaB9zQhzfnDCsnL7vuZ3sR9uR",
  "key18": "4awkqqMFRMLN2m47qvnQuFrnAPcBdTeGmEFZntA3hwsjZmWcFRnDQiUhDgGtTkp3sRBfMQdB4VP7zrhCfCRaeVYX",
  "key19": "5i8mpTDecTtxG1Vdv6qfxmrGur8hJCGQLN9ZDhS4urfBomoidyAhY34YxhbbwecqEaxFcvURrdK7CfQRTXgE123U",
  "key20": "5GEh2PEytfepsgACcMLwufVn6LnAvEKBPWPdkrUS3T2WYf3znU48ywWncXSmhbHusgY7SJ3PCQoz8KqrhVEZHWLe",
  "key21": "468vuhn7Y6t3oWr8vngArVgZDwSD6Vrb8q4kByppNrGrei959By5u8k85fc3imufaouCT2uMQKcZ8BPc1vqohmhm",
  "key22": "2uQ1Ktg87PnwpWF2sqMoraiaNg7uh8unUXs2HJ11wvXqav5GH8fVZWhrf35Mn2zutUHX7tAUGDmyiBweDK71RdTd",
  "key23": "43GQ4n1by6sfaj6NWubzMVPiPJMp9kwy5aacUCcVcWK2ZwMKH7bTn9GgEbmR4BuLLv3DEE43Lsqos3VxxJDXU18Z",
  "key24": "3oHXTZG8CEDBG6GDntnxSNL7FxXeQE4KW6tZRG2Xx3htcJ4Eq4L4hxCbUQcLe34LYY5Gia9kcycV2saKsQxDSa6B",
  "key25": "GqSQnWLRCUSzQstMzVg7SehZm8XngxFN83CqF7BZ8S1aom1vpYQNypMcE2YkkNJX3ctQVCZANvCa739WMX116qV",
  "key26": "2mjnzmMHwnLrjCZCV3oFQLFEB5RtyeB67vwXuiL8P11GQUeDbmTcjr8PBLDoGZMXbDPqhGp7NkLk6nbRc2KY4xkC",
  "key27": "4C9zRTPKARGZFMWQv6iWMCEe2A56wLdg2HEsBA9Q6jfs4iBtcM4ZAFzno6m9tsL27CZVgJiCWnWU2cPZqFprVhCX",
  "key28": "5iHNZomSA4WTW443bYmMZsLGmjHWR1JShy9hgzi1jnmrDwgDN72wAFsSPDDGCKwy9G3t6f5wVM9ide62yVDhFLvS",
  "key29": "5qiDEWHWpREKHnR5kpyukDCWdQbEDstTtyg9B8QSLgaAJyDqTfsjSwobYx7GD3PoLt8CNdzjZxrMkU2qLrgqGttR",
  "key30": "CfAuukcb6UAvtxQ9MRmZgkkwcXHycEGUKuMquz8EFdhm5X3EN6bWqy8rPtEDw3tupBL4S8ZTYKCJC8KwNyd8QfJ",
  "key31": "vXiawgYKFqSsPRkypQWfZaTBjbG3tMFg3wMfs4UR1aNZtdz1zizbiQeJibXKqwWH6vciAgeEzkzWUVHtoocQMaP",
  "key32": "4szqoXVSMGaMBrj4u2oojuAbaQw2roqDTKqYScGpq1wSG6gFw1aehh53yDBVGhPGSzezH3J3hsUtLDJKkd7aW21S",
  "key33": "3aXJTVYJzBwkARbeMZgYEYoaygK4TgvZmBg6qkWPX2YDDnT3zrdhvDeDvrWc6vMMEEyuD1QjmZoncMViDJk6UqRE",
  "key34": "KYVJM5E2XeNzYomqoyqHHap4R6XCxPEU8DNbEE5gHzpPDXoTuTNLQdnjo7erzd8nD4AgjmqgTjEsoSayaW3xLCp",
  "key35": "5mU6njbNtTZvY398sJxNM4oHtWbj6uCPD5MJMoU5EEfnCFqCzc67NtwFbomaDGg95aZMSALtALMdrpHFfQKLymVn",
  "key36": "5XcFcbN8vBM5wjdzpqHfbZXcXLUYkrxMGQY6VzLgHGeQn77WbZkoEvWbc7VUocrx6w24F2XDng1YVYoAdKiP3H6L",
  "key37": "5hgVw5osPGVJA52ugERSXx4jgWxdaZ8KzgkKm3cJbHWrTBTS6syLyRLuWcLMss9QyWzZ5W2qjZ9PMN4RbMET9ALB"
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
