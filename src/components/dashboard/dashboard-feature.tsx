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
    "3FSYaoT3Fh9jtpeS1iBdSFpea4Pi8grkxACuMjoLTEfKeKHKGwJ54Hva7e5yoqecdWeRc9KXaLyZYCyCxmg4kxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A56YvMBvR5VA4k4bxi1hgseKKC9ofStSabP5FnsQ1gk4xb83YtwxExqgAmstUTLjBZCQ2FYvb7mUkPFXFrAiScX",
  "key1": "2pbu9eHUnX9J9ny5qvemMyUmrGu6q9kscqeEWBR33gQCvmNSkqyuXAK1Kif8KBZMjPNQqKGaBFG9UmtVyNm68izQ",
  "key2": "tKmSY2FWuCp3EqKfdVjmUJrJoKGDSCqtsgDsrcw8HJe8vUNk2EmBuYZo9GZN19BEg2pEPqqJKyi3scXMhDh1yZY",
  "key3": "26Fcr5cpydYp5JxN8NodxLjRsKkXpmMzHaDu52fmVCPKYU3MEgB6s1wKEY2PECFdXQB5XEiWZZnqTQu3aRc35mFs",
  "key4": "awxKUKt48ZAGLeBGqahwEuCMWfCNReWwSjbjGqh7DiRBHzyvp8W3eK4CAhPT8FHptUyMzo4Gd2Lybfg6FcQckw4",
  "key5": "2AAZtpXWy9Gts9Fp9auxeN9AMtnjfNuqQbn4utbCn3Pcjg5aYBwz2Wi5VDi7PsrVCLbcFXWaikiw19MUNysqF8Tu",
  "key6": "3XdFHaLdmg6Mw5E5r5zxcYamdAELUH6xajot3FXSvWFXdo5jUJ3HrcY2hjCatwiYYNsCnTghmozM3h51jgyAc1gg",
  "key7": "2au9dJv6uY23B5wV2Kn2bDnMhvmTNwQc56a3j2FVagkDY1trv3kuKgLd9kPGp2gMTmwRe59Mw1iMtnkN2qeJpv4i",
  "key8": "4HhwtBZ9jQ9wZPLriTXGeHEExSPSDLm7CdZNEtPpGgk4UFt8dSZ7s5qmGKGx2YYurEzcqUq9gCpqkgHu3vooRAHp",
  "key9": "3QpiVFKR6GftSzVC9wJSmDYcv65X3bjbCrQomsGKWPkKdCAy9bJV7Pi2bz3xSh1cGjZwwh3Bvveapor4SarHVPnr",
  "key10": "6bGMtigZ8XXSQ4wm36chhCjKacswejCqRg6TJFsx4AeoQ1cmLgC7XHhDb79yJqAZv7nkxDdeECtUf49et5Gtvnv",
  "key11": "GWoxaFAQG7wz92YwCy8oyxvZsFX6SjamaG1QJBZ4qwmqsmyorKZmZT45SGDEjJ2CJeJ5kYfR1iABH75NiKqxKTZ",
  "key12": "2nF2R776q5exiGphCVKE5CPEKnsfhm5YRa9jZWrNVSge27n8uDam8gWaCvB725SRksdVWnPRn4rUztzCAVPAbK36",
  "key13": "LhnNM4NTbmesFggTNMUFZLa6z5Nnp7rg9Npz3NZxUvEMpqmNTUJmQve1wzs3scLyZyEfUqPyE93mzjcDg2nfYPd",
  "key14": "2EYYvC4rjVuzaAfgsJw6t1zNRLRKkqk9xBF28Ui3ra2reo1s8R6qiM7prRAEzhSumHxXHU8vt7s2zL6uDVjjU4Vw",
  "key15": "A19QsKPjfDNf9gZD1RTrjMCLsW5P2B9jnuEVPFTJY5rvRzodBfKEKsLwZF6n7Mc5fsAzY6zygJ1fuWF1nEccfqL",
  "key16": "3UdU9fXm9cr5TP8ZoAC5mi9xD9RohCtwuPhgvT7S7MUPam84xNm6sNYMsne9isDYu1AKddjoGifTqqT2nAVde1G2",
  "key17": "23DhoSrdvWuQtsQbNjqqr3yP4yg5EYw4P6xXBW5XybpFTR1m7UXkG2ZC4VbGoiZrkZ3YPR63ABMW3gn74UhjcccA",
  "key18": "2nq6ctXnhAaDX1QWC6AKRowFZXW98dvJ6Ra5Vgh6oCko12Gaji1JFumXiFf1xuj9gJxr9mJmo8mtg9ZpTuBag39U",
  "key19": "2i6SMByt7Qm739waFaUYTKBLeLN2GgcucHBLHpy8BpKeP8kRRgSxQGW8V6GDy8KB8SHYe4sHkCzVPmVpE8ePgh1C",
  "key20": "2s8TCfuHU6X1e31fXZ4CbHYckyCHwR2irt35zamigDEF3HQeiq6Abj565KDadgy5Ef1LFjFC1r9MpNLcY6C4crZU",
  "key21": "2tN3vCqoQ4Gpm1LyWnMEh4LgYydLDTdUC1sXU9zSoWhVMdNDUjZm2hdw3zfuQhbcAUwbbsRd52sWodukX8sKj45u",
  "key22": "3jieMdGS72nxtTE6CsHuJn9UP9XoJrhFkw4xsP7xnMJZpFJYGRdWycuMuAwSRozkNtMvAv6Grb64n978CATMaRhq",
  "key23": "efnvXQ4vgjKWp4teANCKVFxg8zVzJxMf2pDE5Jn9SSyADCsuz3PvSoZeP4wPiM8ro77EpxsUfbxaqvdUnQVPLL6",
  "key24": "5kKYtaSJZmoicyfUe9huFc3sSD6P548eFyMcx4ke7GmYNChHmXPd33RLPcNWHBGijsHHWWHX5fnwnDzgq3m3YeYn",
  "key25": "5TjkuN7FWfvtDNJwief7ZZ47aGnk8bAJHZhsR7VmqahDy794UYWy6ANbdsQfAh6NKuBokvLyTqfi1bv13yA8AUPx",
  "key26": "zmAJHdxJyYgetHmzvXZUUK4QeTfYKVKr8aebZjSUnQmgTgxeCWrBUncuNkkMbH33GaQFiN6aYv9GPH9vX1QyCbW",
  "key27": "4gbdHVRQqYQwXeTKqFPBhu1t2DEhKW4J4XeGfEzS7vmQYfZVJancGVDv6C9bQQPehvqMZpYVvDCufBgWCsc52hTu",
  "key28": "3im6g1Mt5YgcgQNE3zTx1STPSYNeRDb8s3Uci3o2zRH7oHwVA1LtnbHnKnNkbzH6b2jad7R9XEGdn7ByvWRXBBS",
  "key29": "3Z2DdKH3NuDSRCJLQAhWkSfGZhbgvNJbJQdX8yCRnKVLLnHevzpdUjb5NtktVy7rCckivMmVmHfpcJdstcWUgnBh"
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
