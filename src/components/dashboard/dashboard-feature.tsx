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
    "2LNQQjxDTUCQANBtYi53WT2wBaU5QthrjN7wUxmC3xNbTShTWWjWzyze4Aj1ZgK8ZcZqEZUxEaYvoPEkUUhLLxPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j5gtxkqaBv3ZpSBVhVtRDbZ9s1rWLwo2bN5iAoGwWSw8bLhEydYBp634oUyXqfLutepwXTxuBTdM9ur3pAaPc6Y",
  "key1": "FmMGG9PaWdbdSBeGPEZ4fxt9evrUbedyJoFDYq4fgqPfFeZ8pcabfJzA7EZLzYarCnhLCeMJVYHp8VTLxNc1Uir",
  "key2": "ToexZzwGhU84i2sFd26kPXrzdhVNX3qDFFfxXozS8YQQhTjgvLtGwzoBgJh5oUN7SB64Z9TGqaAjc4n4BbVgGQT",
  "key3": "42LjaLBkSShaZgduURwe95DkAGzSCutvrUQneAgm2Qs7tQEzW3GmUwknVbpzhKwSKVXM1EVtB1B2pmgzndYdbzgp",
  "key4": "3PkdLpp9AQRBk4ppwdSRCDgYSnt1sYiLjJrgGi6Dm9wTPWLUjuBPgov3tLhobdipnPtjy7Z6WcKb89roZ4Mxejb7",
  "key5": "2XBzLPeGKMEyhak9tN1cywDYCpQyHKx9TmtV5wD7EVhPHk4QifQG9hFe2WJZpUCyqdgoRAhTrhbcXdGbxFouwVo7",
  "key6": "5uVjDtmkUqcF2p2QyBXsYU6cveQoT2SSeRiEwGv4m5BHqTYs9VaxFm7UTRcrfESGZWkHjiiwFtyXkeGYcGFnDCnw",
  "key7": "3C5VximNexgawnYWaU49VHg3vgZpj2h2KMUVp1VoLKwBQwbMLmkmevoaqahuW86mQbo81obk4aQWQjGH5CwhogvD",
  "key8": "28o3gprYC3skyyDXdv34KEuVqMGpJJKuAJeFwior5GGAYFTTSah7AtrfTUEipw59chbKPYtkFaMRD5LBkHNqaFyN",
  "key9": "2qFNZ224ashL2nKctrrzRD7sWxCcNtwNKZKRCKSEJrcb11X1XyKUHbjJ1mEkAhRtp3vFGj5TkGtEpHnDyDC4GEsL",
  "key10": "5PjyorP9LLLycFUreaXHToqPvMCm584ztD4QnBwLowsRwx6JJ5KrMWiAtwY2imtfhtcnKWtwUcPZrZCtm5VhjEUU",
  "key11": "TNDd54Yfpea99WhwN7mSesQ5gjc4CfRjwYnCvGixD9gsHYtD8UZWz3veQWzhD6ZkMij29REexh5HFHFhs4oNUTD",
  "key12": "2zoedhjcCgyGyGbDsZsos4d7XH3q5QCR83bgzDdVAyMnGA5ub3dmM6JfCZFFbEYR7kJjeorFAhFd98FPtQXdyF7R",
  "key13": "3xThsKiQQpGNpt1n2rRXvjfZYfmHbmveAhBvSAzyz9M93GnrGof38KG1CGNzkscAd7HgbpXUZiusy7YbyxQ7y8Cf",
  "key14": "5UU3p9dnpA4KdLEm227L4Nq7YA1LgxDLreNXS3QEYgimPiWzpUhfDTg9bRorTZowDK3QZPDhTYPLQGRvn1rcUxhV",
  "key15": "5CZJrPnSdgYSHY76UVNLSgqCForVTdaDcHJKCaYs2qri3qLyBWsD2ujq6iyAMmxDpXx3zhwj4jzVeJL9vcDM7uye",
  "key16": "5Bdx6mQv55dYAEd4CZheiBxA3pgvYxvft2tKoF5ZGStfHU6TjWFWVsvS59vwUbC3mCpH4UdVPbkyLTqzxTnD2aQu",
  "key17": "3TzBVWQoeCWwsifCgHT9spJGFncQgAXhRbwibbb5F6SDtwZyXGTNAuhBncj39hKTHxvp5j5UfN2ugiXTGyySjKRp",
  "key18": "42iffnYct68ZwNNDoA5FMVbqrDqUAag5QwU6WrpoBdmxT1u39W6BwtBSaD1ehauXbaUmyPPGnhKNaiFNPc17nYdp",
  "key19": "3kNp2u8ZgQTvVygZaF8ejtjU2jWhnyTPT9pzzMtaTxt1MxQcTSh7Fx6U399mdwnoUVmPAXxEYUZzmVRX8JYBJstZ",
  "key20": "3wcpZnMN6iZqhzZQubdArBBanbsUM9Njdg7GT43UD83YmLKyrhjF87NvYw5MfxUzm5CqehQV9sxnKLhFwPs1SNqk",
  "key21": "4bu2Yi4YvoAzVEqsrm9aWeinMfoNywmHBdbEw8YbBWsXkUtLhFXvLvT46zkitki49Z3gc7T1sgoy4vsumjSMrcR2",
  "key22": "4YZGPFp6FS3zUqVk6KfkpkPocgXgGtZWNRCEyygNNtz2zMnkcAcqEvAVT8D38UUy14bD1iqiMok1mBSiczGQJzXS",
  "key23": "24RxQ2h22KBx6ttnBphahgsj1BaHeuHUG3opWxK43sXhQMCdtQdh6aCWPmxFbSUsG3GAgHQ3iezK15ocv9Xpu6jV",
  "key24": "5fmMp1MXXH3MqJkij6GiX6GC2QQ8bdZeSdTADtjF8yiPJGBZpAs8Wkf17MDBUrrtJKnRNm6wJ4TEbFeDRa8JGR8j",
  "key25": "2RwDZc92Du3UDaTc9SHtgWVDc2DoLe5ZtyabWfSSfFf9NPzejnXr95jdmpTsxoBiVi18yUMdkeyeoR9PZUZNUF47",
  "key26": "4dR8Xtw2SriR4LzURNmnruwK1615Gvdho4ZCmQt9Jvk91Z2y7hGraEbAwyfzcvgzARuJH9gE7CXh42vaVM1DKNw3",
  "key27": "s8UcUyWfwyyQ4pVHKzSC1viYS4xQyt5AHqqNsMi2w7WTayBa2KeLS1kh5hsZp8XiKvStAXgSU6ThFtNiXFFgCWJ"
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
