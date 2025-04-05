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
    "54kfu9m66ELg4t2wXBinhadVjpgGaNJgUkFeyXjjyiBfEBPktE4RmtagAbmA6pRMQDW2JJPXzceBVHU1SFiVjNci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K6FpJiQYnCnA979igyXGf2R3iEe77GwuSuXx9so9RFVXDQPrapCrgZhfGvS4sfi6De4jjcHy3VDoN4CPn5JpF9j",
  "key1": "5pKpoJ8Min1ETy2UWFhL1FiZnMSbj3d9WHkchFQJLk6d5NJ73Ydr2HSLLQAvA6zNJKy2V5nHnT6XPaMKmbhz3m7U",
  "key2": "Hq6zYSV5JxrNQTgzZst68jX4peo1z8M93SK9QiPipMoEhpGirP1ct6ngrkX2awiGr8p1WHRfAcAAeLSFvzdCrxD",
  "key3": "2ArMqbiKDUjCBKPBy4NB5TKZCrfv9Uyw48gcfrRRzHZLTfmpMvwjYKECr6cr2Kdk4EgUGEkrWBKqxcwqry3TAGZf",
  "key4": "2MHgsGNpLDJ7yKVPKhbYEVHMEVHSshzMNgayqFGMk6r5JiwFZjGsybAQtpSMbBW8UDzSorGasRXrdmSHrwrubisn",
  "key5": "gswF7vXhefXn7H6TJ8i2pCyYj51DCcsUwvfMRDRGM5qDZTtfNrNxszWxPELQVE8EL67jsnR5BmvGRcUtKtK2mGp",
  "key6": "2qXgK7YDJ9FYz8AqMpZsyuN8UK8uuvEE7xorJurGqJya7TStUH5k1ucqmMAUYhyLZjpfUYQZqLqRpnDwCe4DDXjQ",
  "key7": "aKVFzJz9RdZKHvY5VGWjiY9QbCQeQDDAMhKvTyfX8xcC28G2LdKGihYPNCwbFRZBPNX1SxoesaGM3uKRXan6KjD",
  "key8": "4RFEgPnVFT1BK9eEz1nXQZ8y1xA5h7GkYeQHU8TAg8UAJ2CZoDciAoopxyVPZ5gVAp3ysDe9UdYqgaZNrNA9KZa7",
  "key9": "jd2bF7t2458Wxptn8osG1dpvY4ybzk2tsfTUDFMCUtN8ZUYqytSckcJYZHkuEgxMT9wD9hPfasd3kmgVazRK4Bd",
  "key10": "2XsyYKn8qoUaKgb1oGKtYjCog5mCLJd2Hx3ARE1hDwgoqHZWtzHCK3gzfgo5PpqyULzjQEqVd9gMfDVFC23E6tkc",
  "key11": "3P4SczYVpG3Ra5hDZuGtyyDPZZZjdq9Ute8q27rWouei8bbyotrB92CrxuGCLE6S3uDHxmR2tacJL9fB3AtKtqdh",
  "key12": "2eVVFnCuX3duiiMPfr5JZKH75xZBmEurTFbqGH3CNMTcGoYKSm2himemjSDQqLMGcC7dYzzGhbQRpCbk2i1aZdmc",
  "key13": "3HFwkweD35XYZ7J8mmF62BGcVivN9yApaCwHwjYQPhnVwQtWx2rgVNSu9Um5PS9Eob8pJgys2ZvedFLMeGCg22Hs",
  "key14": "KsLxqGjL56V1CFLx4oFRLJBc21YrT2DkCTbeUz2R8XdV3vPf3YHzkm8TVhy5SBvdingDwXwWrUhaiYrtzoYF6NZ",
  "key15": "fnRX5gfd46PS8mqiffUJcWFnMPBonnUvo7L1Dcjzw8nM5uCR5jYL5hddvxfft7XggHrWuEuSHazt1cLjZsKyuQ3",
  "key16": "hhiUBZWhWdSU6mz7vv5Zt74H7HJ59vgzRcbA1X7rSoyfie4bFjupMTs7aYEDGAK5Rg9YAP2fNQaR5cqPwdC2GJD",
  "key17": "2av5Q2soTEmBemYcfjTYcHEn36top4x9BKxyYg6R9xZZYBaeRfk9q9Du6NfPo87XPJun7jFgUvZwUxUmf4fQ6DRV",
  "key18": "3rJns62CaRnAn4bDeXcESFZaU3zRXYu1EofrPiPpd2ttSPSjUdjMqqAZDvLkc7qBvdZe6gKLUovVHhqWpogw5oyC",
  "key19": "2j8DMbDhe3dMW2wobBgtz7jyzBs9kLPJqBPwgk35Vw95X14tcC1vjytY9YRJvf8EQCpskuSGGHYuhKMd4y54KUSW",
  "key20": "aGJdKiv3CzNvQyYAd68SiPBPeQysAc6uFMgtoG2kAvPH8CVbHoYzwTvH61o4E7bs6ahRCTsFkvV5BfwaKE1Si2T",
  "key21": "nvmFFDoXRXTMPgwiWrfH67u7yQj9mAxPTX2n9sSGnicigWBsv9M6KzWeB1yWHzxMrDSzdgHCwqwX3gvL8ABucFo",
  "key22": "5kp5YeRG4BnvDinFokDyipvHZZCGdm7RM5Kk8nUxd7B47862sHmEKUKYo6UXL9XQV4YKZ32oFPnM9eGva9C7nRzC",
  "key23": "4auvSfwmmvU9NJ2sXwaGx9yjRQCZrrPrj9s2CJZqUyH8UKZiEuY9o3jvZHFRoNLqrMrCTckUjwRMDfXeD3EoSjuC",
  "key24": "2NhveGSWSw5fNJmMAdDy7M7cFWhFqsAkFXQpnPMUYQj99RcGaaW57Hqcsbfggv3xue7PRNAo1w1Kyz9YtbfohRq4",
  "key25": "3FdUA4WVLRH2MQeXhfgL8DXJ16LkHKQZYQyohVyq1H6yQTfrHN6gzTeLPpLWoZi1H3SufP1Eg35M8fsnFRVszRZX",
  "key26": "61Fkxffv7Rd1gkV4vTYLVtuTwmnYNkh7n1c1n12kPzU1EJrzS3ejZs2cve3CxDFWPakUnikJ2YtrzVm2izWfr8uc",
  "key27": "wtEskFoR8FbfQoDvi1ZVZEzgMQUyPXXCWyDs7adzwnJjG1i6U9wiB88h3UajuUndUbKx5hspizysjXggpgTSz4N",
  "key28": "2W8QKtc9vwKPK2UH2jUQiR1witeAnrMrWQL2StECDPfo87Jo1hHuuYF7S6qApYei738n9WyiffMeyPiuHuPz4Bpo",
  "key29": "eL6qziXZhLssd2fc49Utuh3Edootev49hAmxp7x5ZvAB1A47grB1QFRtnSNs3iMeXUpCb6miZsbnwaPmyTNzniH",
  "key30": "kyBzmNkiE69oJmLjH4Tks4bF8zwyJ83iyzgGeC5otWNUknkWZ2WN9UYFd8f421NUuixCGTYaSMZ6Ckf1gCaLsfa",
  "key31": "49bmp8JnYt4YVnDFZE1XMddFMVxxJxKUSz9DPJofv5p4WqbBtdyiXgtmeaxjLVyzh437eZGqHNyj5KTqmFKosWNk",
  "key32": "xHue3fFkz5CaRxhjLxi6SbrWxqdi8ZDoDXYKUjwF1wNTTqjH9coa8H3viGyY6kYaqZd5wARXKvySyxLfUuECow1",
  "key33": "UwbiC7GYkYwfK2YH7V9kHBhRo88o6Ri8FCmDVkmXAAd31ENyC3QBedH7T7i3yjxw92HkXSaYzhL8T9Xp3sWTvdZ",
  "key34": "5CpW77zK9mbBcwUUt7cq3p3Zm3SsoqE2JW8o5s6qEjvDLMpHGxUmHRKtXKz9b2rA8cUzjAi2yp6FbdNtDcg7LnLk",
  "key35": "4kzPtDGEgCDQmrNLtB9g1cwfXpwBH4xdpZQptoJrBr1Q7ot9SkxcZiuZKxfwx1F2GXakwqxL1H2bQp9J1zfnaWAu",
  "key36": "2sTL8ktU2FcVmmLcxAANK4L8pm6oohHFtQgpqARx15jeyRjDWVVFpkotpwfCUrfHpJ9XZjyQjQohpa2pVD8HGiZ2",
  "key37": "25RjSk1BjdbEUa5o7fcDzbegve5KfALQwzZDTiHmiJEKs3z64yEWvAPKoxuEutLdPwS2d2DAeeb6PHwuYTu5XyF1",
  "key38": "nG9q5xPawNqjL5gRoW31ut38barke5uEuQbCm2jnpSjijvmGTcr5Hb8bqTZWFiLJUfy6rWPdo3amL2vamU4fizy"
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
