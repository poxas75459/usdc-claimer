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
    "3FLKpoc1biAjFzXYZoTEDtiRcNVyf6KDLE8WSgVxseam3LG8TV7KBbCfwTovEEyT5GvZqCy2LWYbwCU7E9SjBi8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mEHdusN8qxursY6jLBL7QPxwgiPNmEYN7Q4KAUZ1ENGpA6jN1Fk5SoES5NXtbGe4XckVUemn87v8TeVETdRJVxa",
  "key1": "4XHMCLpXxrExHkDKYQyemW86G2LCYdXbG9uhW2SExQuYRxvHvsAh3xzjYSbLgThu4eciLnfkmrFuSvpCwLEgwUZU",
  "key2": "2nEU5K5yJXxfCf6XS1pa16DMUL6MthFGZJF5kXPhstwCHGvxMeBozGrMgNv6GMSRXkyXsgax7AnE47oaJLWifD8J",
  "key3": "2fPFeuenZVHt6X4PS5pWPrmff66qDCGZUeVkUKckvtTzVKu7eXg5qbwzLUy64SshT5biF8WSkCbK6QS9db32gp1k",
  "key4": "63GUbX5X1B3BtEsKoRAz3sBSUiPEsu5259hyUHpJ7D3K5LrBxt79jGMesupZ79LCgLFzXszmuKXHxUCF6zdbxuA8",
  "key5": "5928YtMR9u2LnW4Bwct5AbfiBsGHmbYuAL4pXLEczfx5zi73Tec1uQxhZMGQ8N3WzfCRYwwkyiPubhqzLqT6maK1",
  "key6": "4raJ2KPgPBPRytJ3zKxHh2hpeEQjBREfS5t9a5dLbRNkooppDMJ7PPcbMuFoxar5zxGKM52PTuahitEpDpX9VS1b",
  "key7": "GiqHPC9Sgrjepu2xEFwNSXco187zSFsDspzZRsCz1hMZVq9pxreK9r3mErToydxNvjTpeyhF6igPvRCHPiqz4Gp",
  "key8": "66Sp9g2nt6negd71rMX3YYd1DoZkXMzTBiWU7Yidga7saLQdGqE5huS7wF2dGaYB8TBZpEV9wNS5dRxrPyR8YFYs",
  "key9": "gzSFrzRXtVAHfcmcsMiF9MhFovRjmyt4ch2EZNwncFvCFxtekcXVob2W5wUasDtAtMPK28nytJBaMTWEGh6a57G",
  "key10": "2iGaYLDwjkrf22xod9M4syntkppQsZXsrPTFUZ1JDkypcyGt6jwP3n2JbSMBGpuqUwpe1WU5tUXchNjtcwm8KBgy",
  "key11": "3kKy3dp2CCSQ6i3UxK9KbfbWxezDpG8HnQL1hsci1XgFSxB12qwE5sjSrm6bWySQeqYdLaQvTUCKG7nddWjyseD",
  "key12": "3bFmhDZgctKW9J3BfhyXdWaRawvWxC64FMLBdzmNDGM5FuUXvkvtDy6RhzUWoWvDjmH6Ch9XfhmAmyT465HnTsJG",
  "key13": "2243RA52fm24Dfrwhq5yEPbEzMRf5D5jkZu6zEqPdBoRLo4SChMhZsuQNuWnzCb84bBQUEvw1GErYepTajXEcLKj",
  "key14": "akEbbLu69LaZuRBxG7iZLPkAKnukjppu45wmbA1Yszqch923ZnNEDHrP9MXAzxFSQAXRXsqchb76V3KhgsavDoE",
  "key15": "3K8FtAsL2oT6XEeaFApV2Fdh8NeGPpwaoND7CvWG9wErzUfLCS6n7Des57gozdGseD3nU4E55TEtyV7A22UzeDhF",
  "key16": "67gD2N5rbcKX4ccsKRr3BFk1rN7tj89rM7cb2FeSGgZsRk19Z4MT8aDSiwaSqCpyxcuYHavgjJyeQpYyu5vj9nrN",
  "key17": "2nEYFLTfsRfEf1t78CULxHofF8RV2MTFJSRFLndFWRBcNGcjfbUMg7bDg7mhXKykA72qcEceF357YhUtM2nGUnuM",
  "key18": "3R9D8sTdMbAgsheY3DXyeYYvxQUr7VYzKeEmzWrp5Jqms318oaLn89NmNHoo7Mpvrx2UicTJqfUCYqhJ8viJeubN",
  "key19": "5N1GKArYqq68c69d8qYm1naroZSySuPEAdUTiZwPexNX1yfkY8UjeHsmCv9MfnYZ5EnxUqzhJgzoURkhioVbbBjX",
  "key20": "D1MWyRcdbsdWXaEHB3puAvkfMJYbpgoT1QzWFkvCFJLTaX7owfiVnz8gF6SCHwadRVekNGDAeo9se94KHhC7h5T",
  "key21": "km5tyeb5mvun3Mj9pnfYogNxKJMLd5AiFxzxs5VHLhGL4XWZMNtrQ2cUW4DPvB1LodzBYk5dxPF4eCAPoBtZZUC",
  "key22": "23QZt5TVEJ3Fkr1EFwprPFp2Vsj9ykZBzpFkuETZDkyVk8TVQcPJwsrCtwV5z9L49xQgpsrYzsHMmdbuyjGdvRVc",
  "key23": "3fjEsdiGQnUfoyBXjbUgnNfQmkDxSHypmKrddtSPURHf8bZeXh74Xq2PvcTRzYLqS2PzUggD9mnjMTfrcFNngpdm",
  "key24": "BNEaHww8u23bDpEZt3hE9DZQLHcNDPfSNPbhtAc9oB2bpyYFfJDVqpnUvnafAkqWByMbcbXnBhRQ7rKkt3Jzsyh",
  "key25": "22tV9vQdT2dKS9diTgXirNQm7WsGMbrnZhFLvrWm8x4HHEeDXDxAU3GkckiigqbfDjPpK7Ppafpr3xjvHs4SyRtj",
  "key26": "55nGi2LxBDcSgcg5DVTSJM1Eex8VvuU2LDpeLYg8ouQJWbCTm3AvkWF1kqGX9Askq3TpMcvCYMkdRVJibpinadfG",
  "key27": "2sE6b2QsubZiKoHKPhK1Wz2QJozTgiZ56yPzHh1irCZbCdus2UcRuRQBgAukZAMJhJ5Mhb6r1NwNK3o4wnakYq8B",
  "key28": "5qXYWhrY92FMKoA9aB5mZAcukWe9YSFnZ4JPNhXtvn4GLZzMSPqTohSjhvsZXDJBYi3NHiaPPfut5oMkTbvtdqQ4",
  "key29": "5iPN3QBjjCHbkee58swTdqgGk9j9XQtNHkf8wHdQMYCEnu9KoQ84WXSx8c2reQPWf9rGJdT9oDiTKkBBvahAercM",
  "key30": "3cBEzNGtaRj9UxXhnv6KpY3WFnjG8pkgSESyCKJwEFaUyDxf4h1y23ZP2tKKcq5FE9bNyzH6kx7siwmtrAFsebez",
  "key31": "2et3m8oUbR2pMnZStwnixY2AegxkEmqKgcgegiR1Q4ExcJXRp1humiBiRCw63Vybqh7KXA8ZZpRxZmAVwDe5sn51",
  "key32": "3EKQsw9hf47iaooCVKvS899i2MoxHoP7trHEimzDZcA5siw8B4arNkZSaTX1YPQuF9SbAHP8sxmt87dSNqTChQVh",
  "key33": "3x6mBsf1m91MFvxN7dbArqa8yAtxmBERbrw8tmxBeMQonjJFPwaxNa9XSq7YZ6NbpMK8QC5yjsJ6omM7TnZBYPTX",
  "key34": "3rN9viDGgBR6bgjJb2ZnTZPLxch53bDYvKgzEWmzcdQHgtHhG9u8k91mTrKo8t6DMMQK2ikFK8kTUbSNPzTawYZP",
  "key35": "4y16ygpLpuya3BecaECTwd68E7UwjagQFXiaChGDtwz978ym6TK2FBtWvidWQmg8ELNaD8NK8YXuHYTs8PvGHfjP",
  "key36": "5FUAkp3e6J7rYjUgRKKozM6Gy25Z4veLZSeZ6KnuErHmd1M2jQiXrmGUVxRgadVyAZSJx9fFJuTm9DCtyL8LfB8V",
  "key37": "2ZWNyjgSH4iw8W1hRoCdUzxxr7J93gebpt7454LicuhhyGFAePgLNch3TQVy3KP6Udavswssgu1QdT99oQJgoWZp",
  "key38": "RHFXnkTbzjS7tPbxiMYcCRdwVcb8x1AXYcGSAGgy24AE5w8AEcWDcDeUQbpDgPU1a8NzKxW5pEgSgqCj7NrARRL",
  "key39": "2iuyQGDYeVGF7qygMrVEM4R9o9nbPzBhwESorDGgJKAjfXoFk8p2hH4sSbK24CQKapCdgsASbpcdSDWEfU4ycYH6"
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
