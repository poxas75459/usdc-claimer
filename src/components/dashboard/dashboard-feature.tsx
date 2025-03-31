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
    "2YM8GaDJbF6GXxexbp83JSMR5wsNngA5LsqMuaiG2MdxwQrnmts2c9txk4i1mERMPkvqA3DRxevMLQDxsVRMDq4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tD1zSjN5AiVFt29Po1kVJ3dd2uar4GSHkv18T2gujJW1RsXqsifDD1K6W248Em3LRGsbvMkGHqHnqX2H7BJsYX2",
  "key1": "61Qfun62yfuvXR27hCSDCsTRaFmqFA31vDJcQESLEgxjebHGNKMX5eqYzJnHyMH5GJZ75ygcwkyQBWcRZfxrneJo",
  "key2": "8nCGe2GuAqBiHJd8sHamvomFaFhJXuPMLccZAFLUhgLhHqBiYtWx2okVp7hnxa2ffvuYd8QAGsP3PfPCzftekSs",
  "key3": "3EBZAWC7rpUourwf3otsjbBk3Qba615nWatYpZYRdVKrf5QTzpPeWubpeQzT4A5EKKPtEB8tYKNJRhECzx28NaV9",
  "key4": "DGZSDiUnnMAnjQDQWAniDjifCCrRQ3cs4U6d28qwcCfJeHcjqAe91TuXJD5XC8zUWd5h8MstMey6d1PYKBU8xhr",
  "key5": "25D2EXs5bf8pkcKYeFb5UnMQJxw5T3dnnBVXayVvabVefrKkLrwa8T8tvDZbirde3S9u3vvzzvQwNMAi49jjDQP7",
  "key6": "3M1ejeV6id5qz17NUCfbuGUvR2fnDFTYGnyMYWZsaTUCAWyKawREw52ABpcXZmeiff6sSAJyC34d3PyrV9qXdVgn",
  "key7": "31NwJSzrCx1TDeaNPXXfKArUqQnPPF27YuLX3Kk2QEX79GeYoyk4UywJUdorZoePgWkm1jDJGT2KVihKZYqCDbPf",
  "key8": "2Vk9QxBM1yY7SRcPRjRZ2avEyW2SVpU53wp2Hz4eZMweW8UT1W7jYvpwR9vBQ6HoeMxB1WcpugQ9g3MMKt6HyrgZ",
  "key9": "1rpF5xHciquWhvvvxUN6bczSccwKdPbLqstszLkCdZbPKq45UecbAaez1ckGxoZwVydL4jVdLFpfCRxUf31oq63",
  "key10": "3yjA838yiMKqeGGrtfJEwMQGhCjfspmQ9jskYA3FyqpYwmMtBxQTB99QJPD9WEDYiehdQz3p92UWgGoZAcoviGVk",
  "key11": "3y1hZR2oikp9gBsjaVDg3B3nbExPN6FY94KdRSmbTigyE8zjpUd8AnntdXZ2uYQ4i1Kz22QZmjW2wsY7WZ9hVs4E",
  "key12": "2cmvtrqcTu8VVp258k94ea7Kv4NHR3BUcKUw8xy83CKphiWcsZ1nryM1aVaG4TAeg3JRBsD7zH7Z67HmLCXafv6n",
  "key13": "55fcFvR5NgbDFzKb6xBEkCn6PNSpT6fPgXnJ31B8CHXH6ZB2Q71hcR7aYi6rnyzdxoK3aULXgHvuETDTN8eGPjBj",
  "key14": "JUuHfrmfZm1cK1pLkfA2beMPizD5g6TtrHX2oBLBP3b5GHgVCgiWX7EfNdaWm5N3aCCDbbd4hqvE68UVttcSFLx",
  "key15": "2GctTaQo8EuUcB5b9auDAiNtSjX4nEPuMrZt9ef7vqw1hTYysZyT3g2XY4eP3B6eqN6hBWo6fhPtTDNLGmbpEaM",
  "key16": "eLLZAgUkikRpppi2pzRp1J4k5QepmYKMjgQeDcLNAEipkZUC8xQVQDUWPYmAykyrxqNFv2DXordVu7pWQFiHnYe",
  "key17": "56FxJknePdGmuncfoBeN2CnhGDMGLPTJmCkFCLEtBCeCv1aMP8CttkrtSgNxMeFiDu7gCP58rj7L2e17YsHkVk5Q",
  "key18": "3F2aJnD3q6ZpWP1bECg6Pmuj96euxgUdm5WgmD9NsuQQc5r9dYcKEvc4upUyqbfR21DCsmZ7XrHkkexEbtVZP11z",
  "key19": "2xBrrxDdaexkJ73P3NorcSJ9rdt6GVbyFUGuJcTVSdCnM98hHpvknNSYHBJ78BYgoq3QpjaRVV5AE7WGVsbaSBW",
  "key20": "2yeiuZZCoA6W4iV7f9JQAnDkY8CX927fTphqu69XSV8sPnnv5hZRr4wmuB2Sdcr9rEhwrvNwhLERzsFRBcoacsR4",
  "key21": "4FyRqUcJN7VkFDRsbfa39jfGPCNzKLnA7MQLq4o1TabVPe9cDLxghFZS17Vx7F8HVEEZxsgsB4eYNn6PSCpdsND1",
  "key22": "2NrEXxcqQ4jq7EnmKAexYw59u8jQXM1mvhNh2WYgXor85oWseXeh1BKeHVWEgKK4AgLf88PTCV6xRxHspwjSUWyv",
  "key23": "2wELqTxhLnuWFRK4Z36Gy7s2TA8EmXP8qWjE8fLkXzkc2vuVNfCFGULb6qcx9fy3ZAhdrmc6K1peUEHSBi2qXhB",
  "key24": "3VPczKt4uRF9CixctwXsQGqxqc6WnkFspCmh82C2prNyaevgAgtyUA9mVPnWQSdpX6GRGVjNPFECjQvHrgvbqeYe",
  "key25": "2hFkY3ZfWzwbkk7zzZ6SkNSJcCspQJseR7Z1PomuAzWFFkByBgwVNrJi4Hkq5fJv9a5eBLqWktFvAvUWAK8hNVxD",
  "key26": "5kJ4CtCh8MCL2bCUD6h6vTWhGpiu43n3MQuKYghgtn2uzfLfQvQ6boSGd951TQRK5Vt2P47g5aNcibzhoU81SuHt",
  "key27": "5bTFmtA4HMKbsHnhNXDvbGfyVCoU2P9hpTnvuGXLm6PbRWAsGh3temAEUZEeEXV1FT4UDmL35vqboCTtgwxgv4bn",
  "key28": "5HXqHPRAsAGkhLFzTjbCuFkoKT4xhYL5jND5H2M7dc2aRh1sMQoxwV4UhtuwBmBgqzaMjqN1uV3TpASeHPBU2Sbg",
  "key29": "B4heZyurQvW1hKCjvZ53bdvjgbJXpsfDp3CWWe3PETcxTMdfnpt4VDpFejRR4u47YQ826nrYqgbo17UNgvTKgWh",
  "key30": "2fPoVWmgaKa5c4oaZxi8ioujPv3jjMnXqiVh6VVecP1JTVkqPKFgMb2YMtX5BXReZDDkakErvndeC8ZjUo9wKA5e",
  "key31": "4rHheq4cFBwapFY5Cpr1qBRytQkL2ExX4brGvJxyYdfRe8NyNeiVurm9uHgiYbdAfxsSVNeqfmfQSXReyrMYZvta",
  "key32": "26qQSaUU5cgB1wi6DSk1dQcYdHhrdbYMQi3HMuH4vxVZYteuUfnW4ajy3qchNn8ijmewKraDe5t2ESsY4wQ5gvCr",
  "key33": "2L49vHX6No1fEyCCYSQsxuPvXs2vuY3CTt5ebPGxJxwcimsY7VxRgzYinD8LjEEJVvPbEkDpqrz2VcQoh7up4npB",
  "key34": "4LEMka68xwQpTny8insEKxq87eoyiKxxorAZoNbBG861rpnusVztXsbrQATHPSvAcUNnekY1sj57Gt25A1SyUbiw",
  "key35": "5RcdeLhqH2izuu8d55h2hmYzzTCEtopHgPJm869fQXdGBPbyPoQWa9iijmURhdDBmnKjDWs65p8ANvfWWZUdCWcy",
  "key36": "2VCLf1JSzjqRshxfs8R4Vd1zhKysXb5JEo2kPbkv1whoLTjjYpejWEo5BhwNwy9uXJiR7biVVxKhtHyukrEmTKpC",
  "key37": "4NdMjUQuEzY8dT3X52v2BTJ1iQ5Uy2di5pZ1dcChC1Jj1NUFNt7eM45xCRoMThXCHVogVCxEaRDXfhoHA5vBmk4x",
  "key38": "5ySHGHaZXinWyG956ENximbrV3fFZXMCgzw7uumBARukCcTe78EucLyFmTsoXswUWq6bWTfC5GRBkjDxgXXw6w9t"
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
