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
    "4cpeTxn6SprvBCK68M8kuNHBwPWzY6VShkVhRv6dTRtE3q2ZSuWTqRzQpBCFqoBQCmuGCdDprfNz5MXWBFqPAYxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yojQo4vmUrTSASPBTHHdoPY6YdTMQkUtnL9No2KTb827DdjDb5yBqXTZxcAnAH6K4JSMqknRjuDKZkctje8cs8m",
  "key1": "jAnicDFizvMhejh8hCfYD8Wxanf8KFktKEqdvYBe5dt6QJjVdQCD224W69WmbmZKGBqN1Vyt2e6C6pUB2Kk4Atu",
  "key2": "5d3x4opaoFjhNzRCUBwvAio1KGPc56CZhpawKupZ7kAoLVxbjTGyW92AydCWcySXQXijx6Kxm6zpi6TG5RPTmu5o",
  "key3": "2FL5c1C9wzVoxX8DCw8iye1XF51QJz7wTRv3v35HEFpdubVYarVPk2utS7wHHRyST6sKss6dFsWHBfb2grRzH8ub",
  "key4": "3N8WN1tLrw4q2mK8en37KvHSeLkLpi7coz1kACAKzz3B5qL58idb79ySXux3HoCHsmGF6fecij3D2yWytFeUoBT9",
  "key5": "4UkLS8D9JMvY7oMmTeCmtQdonfP7rTXLBQfVEwhRsgMBsfKdp7jKRtTPdSnjAZ7a5FcuzYP7W1BCCuX7X9zkRku9",
  "key6": "2jyCYZwiZjAr5ZnaJCugAfPFW9zoB7rBCYtXn58itGgtzerG9aF9xXWnZFDn5SjSfipoQCwj9Rf8958g7zYfwDPd",
  "key7": "29S9GxTffw6MLDyYaHoQkR7TznKS7NQeTuRj3CUeyRPjuCBBTjWRkmSJm37TPLATb2hyqStTB8wd1tPghQCLzMta",
  "key8": "4Y2e5zmtifQrw7amLiMwSbWNufJgSip82YDutgoG1DCuSw5cdtbzEDV4bvxoGfWdLp9GSiLnXk1gxBj3UE86S9bo",
  "key9": "5kmb2VYhqWFo1A6fviyFMMtegkgKVktJDiYQ8R8ggukmXXEsUmzYHb5PdUUuoZyDBS3Bw1kk88bknQJCahtUvMqj",
  "key10": "2HMgdKw7CL97C3owojv5hjU5uknuGRGsQKCFbdm1mg2pcXSzqYp7XD5tV2LtKqxEeVts7nu3TBfDyFe6HtkEJVAv",
  "key11": "obXibqfrYCv7d3ANvVGxuU4ZdxBSzKeriDt4oaG4rXMuPxuqBYrv2GbecFWu3wbdR7gwdLqaZn4Dmxh4bebrBwu",
  "key12": "7XFAK5z3hokd16vYvAZmU7e4mAb9235ushnSWo5JPLxfn1p91AHHTBXJDrvCsdK5pAMRwmLdEzspCQpBZLoc2rV",
  "key13": "2VboL3FcLgjH68LK6CvkY54MsVpVVMimbuamhpW9ViJS4SQCTK7fZ3j9sCCh8ECkar4jV9BPpnJoG1CmejmGc3si",
  "key14": "3v1ryavgxs2YV47VnSm7WkUsQ3Cidkpv58uAqydhURmyFvwMZE2GSTqc2dpDz9vUR7bh7mbjXs8DrfMxKe2hmxAy",
  "key15": "26J1x9AxiNHPEfyMXAoeAgkBn5Ymkpu4yqyuD7d7pGAhJ46LVvJvCcbK6SeRTrKKa9Z1JvxeQEw9fX7UEDwjMmnr",
  "key16": "3PX93UPZtgTREoZ3voDPHAEkGkAyGTfxnc8yie8gWN1B9wpJkT4a4f6WeA9n1G6CCv5YMLJHr9stnJ3ekkuixWMU",
  "key17": "2bZ2fqDGCWJzncqUNgDuuzKbTswndhHbkReQfTT1cx9pethjTHwwXLXXQZXhBojuBvKgfRoZkhtNQyhD5MDB5cJY",
  "key18": "4SG2aunCd5xfgcZBHSA5UCpa1VELuwQx3pPJPL7yrJWBhZC5HTbNG4EYqTqJgDzaKM3rcunmb8inJiQy6ctf4zG",
  "key19": "5e7WVuxAPE4U7GNKU7HbVrTUSSkagwcRZMY1uZNPejBu95pygrkxg6Jh3NtdXFAVw9wnqrAVKkREwq5U2uS1dR8X",
  "key20": "4JvRLVagkJAaEWWtr35wkUnoRGnzzzuxXV3LPzSUAqaB6UwnbJ7zJDg4VMNVGVA6NLZbSnGu1z9wpULhUA644Vab",
  "key21": "4Hcc1j1stGv6kyggpEHBoom5eNEtETuPFds5vgqZNKzZjcEPGRYTUKqgBon24d89gneSoojgiivY9viBsiGzmyxu",
  "key22": "LcainHimiFa4M8Y6WLykxndR7Kyhmwr85LfVuq8q8yZfGwPpJ1E6d3wUTDdb6eWPJT1Y8TM62vR9k5YghNqk1BU",
  "key23": "28Svmvj2Mge8tAp5wTL1CRKK8cucCLQCPUKzQuW67vLUxT7Y2zc4T4fRMwsrzEx2pk7QAmqmmu9NSKKSm2EG4vAY",
  "key24": "3t4wGtwiYt1x3zsH7rWiXF1etrH61btXWBfc4bZLtbUTMZzsGXa3VhgBy3i9Qq8pcNDCFHA3BupRHzyMW72xFNYo",
  "key25": "3P49EAsmLoZZq9N6nvUdtVdLshzN2vXzx1TQzvGGDLY6qh8U3BCNnoPA7tNi9ywtVh5RvQLbp4Cqou1NoeSV7c6i",
  "key26": "LJeiJS9hWBF6tWnMfZdSDPncbi9LhQ2YU1S2jGw7UGtNgWqPjr4gUH6kKsBVY2WjL2FLebcSQeL8bNET4Phza38",
  "key27": "4saQZGZquzfBDVtwgGEDgPaXsCE4nA3cgMVYD4WabeeJAWryUUQutKcFc7yMgVv96zKGzhFk5oKP5vFJygvUU9Ce",
  "key28": "2dSkXzCxcicCkFDZBCugrVo5UXJ9TkkvKb9gs391yDktqnGcyizmRn3wcuGvQVKVym8NdR26ZRpEE3JBAwNZuZDz",
  "key29": "3KQ88UZEJntivbyq4Hw2XuUiV2knv1oK6cQKw9JkvPKm1iW86boUgSp8QE3SvSSfKkQ9ZovKN1bV2YxLu6a57XCT",
  "key30": "5MJgrdwWoCB31WHinKkn82yFHGiAnpP3Vk9nzbobpukxomxT78AGPctLL1XkQcmwbhRZEac3s5Bvm928txJh7yxN",
  "key31": "5aR8QcTLCFsjDPGQGRvvaCVGJz4A27oZDmJaqAxHg7KygUMPAjJ5M7APixfVaG9JhDETNKAFMWNZYfNoiXMvq7PD",
  "key32": "57m7h5NnsUBr2UCmmeqqMroMBrutVW7gwE6z6ZYfXEZgTLZHNrGJ2RCFSDoeVEPxZTAYED4Lk2p4QzbZzUQCXQ8i",
  "key33": "zXj2ci8FuTNTtrzQKn7iRF41KDvzGQhy9yvEB8BNg3UpQqLka9VXizWesKyP1TkgUoc6rjpBoLmCyMXzdap3577",
  "key34": "2MVsixyacjAdaEkur9SUpkntRXkZRuT783y5ssQkfJQFP9TedafVnWyBx8onN94uknkoPBP9zdhKqJqRd4jFE27J",
  "key35": "3hSUpvv3tkTXvpMZw8bxymWkADMRfXY2sr8nURtz2NX32EGMdULmG1Dg12HZv2BvijQMJdLKUBE2fUBFX8TrRsNA",
  "key36": "4xqhCJUXSrGVTR9WVVZXYvft8PiFAU5ZK7P823gL7R9upZLnsyoMta8HYDrSweQqFvZdcpkidUAy31EL936py9FA",
  "key37": "4eS8qP952zThhfDHVk5TTtSMuYVY85xvF7ECQ7jtkJibhEXemZC3PsnKwTDEodt4i8cfSztrwkBw5x3QEtSdc6Nt",
  "key38": "67jVktbZieFndKp8XvFEXrdnubHoZuJyJUVFkdXb6mgMr9UcHris3UdG3zkJ58F1GZkDVk4U8dtHNEs3vMmWy3Wp"
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
