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
    "1xC6eTFazkbc3j2YnEwSGd2vwFdnjoUTCU3cnaBRyMi4vbWpTpyfJsAdi2SwY41L1n243U7VzJB1Pv8Q9wqHN7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BUr6VxNhRFPdsWWt5Z7wozpEh9ugJpH4GwrTPWWqaoCurFR1RQya93QVwZGkCJ8SoW3sT9fshQkcMP4k2QC9gnR",
  "key1": "K8vvfiaHPnywqoihJiwqnvG24CkQcrs31fcfzDBkQd7s2jpeVsUnuZezAgmgpbhQ456ynnDiNEU51FXnpe3aubr",
  "key2": "62pG44Yb8N1XTicRXnbQjTJYDyHMY7BrxMJ1pZXCfiNjZ5i4JvkraghH2kCSEsCQtSuRsmJqBvDnTyuDY7e8eMV3",
  "key3": "3wSbFJRyFUamFGjgUcAqjF6mnxc6sq7hY1eRmdrLxmgDd4bjoQubiT7pVxEGxQmRyNyJdSF9N4MsFvhFG7nKfEDJ",
  "key4": "aKm32ThBX9d2pSCUvhh9ZfMuTVDfsBcqYC3cK3HauPxD1DfdSgNXJ91AxptM4eb8mxSKK7pU7hjwWa6pRPfdwRC",
  "key5": "45tvDdcakfYjj8vsnf8j7ZpxdNVEPcqcYzFbLYMoJa7kHoCYRxHjxr5SgvG8e9SypSWTEnSHASfMbsr3KPWZnsA8",
  "key6": "44CGoNSVxJcERCsnW9ePenq4M7zm8MTouvf7KB3Y444Xq9HHYCHctTjLfALNZp8qhg9F3yNTeX7aTc4noSh4QqEw",
  "key7": "ifDd2aMPpVGamQM9ckREY2ex9k7hqkNw4AGFe59GzvQL2WAV6iSSHcWthQ4KzFTDhWZ1U7TVRQyExFFtvWo96ZQ",
  "key8": "3Nvik8ZSLaAZCNop5ESZaE6QWdBAUKx9bCeeDLSLo6K2f5PxMny5hTdB38JDkMnqz2xM9sy1evtgujd3VJ9EHEb7",
  "key9": "2ypR5FzuPsNNQDRcYbqPR3XttuGp3P8iqM6pLpFQfnaKfEg9rMdZm8BphVoEctr31nSCUgk1ikBDPVTufvR7RJrj",
  "key10": "2eATXyWG5beFPMQ4t297Y6WqCP4LW5KJJShEP9WJXwyPAtcDHdX8jGnrUEKgCRdPiKrnVV2BeqZEvCH2K9AQ95GC",
  "key11": "2mze7PCjjwVuyqBKJTDzQU5Sobfm7BdGiFwRfsyMze563XFQkHiMvQm72Qr5yxuM6GsN7iNe1qQ2JH4KLUuxY93Y",
  "key12": "3mBbNCRhi9Kj6UyhaK6vT7ubtm9t4eAbt8JrCvXozkxPpg7tHGW4zL9f3MGzkRbaBnyJZzo9wEh1sTwhMvPHoCKV",
  "key13": "2FMztYRcr3oTZV5jAgwussJTMfLYoNu453FQbHKAADMoVfqmyxnn678cgtf1u8Kb5rs3L4KAk5F465Nj7HWL1bEU",
  "key14": "4KucsYbB4EsksQN5CYtK49yCjk9f8Zt4AuXYZm9Fy9Xxq9ieVE4VPCUTA5M9W3YEGqPtWUGaApX8KLRbYvNX2Wc3",
  "key15": "2ZKqETw8eKjxniUH5EvWNSGapx4UcTaTE7rVg7MTBUnxxh6ZTiFY1Uk3Mvtg16fuGv8LMb82vsLhhdaCdUB5KBC2",
  "key16": "45B6X38JbYGMWPS9sQH1JrBMqPnASRA6rQxfjW4p6NZS41pquuHNt4i3yya8pA1kQPgPywNy3n2BiYg2bgoNKgZz",
  "key17": "4RP6NZtxh1i7eH4n9fEQV13FjKNUq3kQv8EbYYhj1gyRuAEBrRb1tzB9EbWfNEq2EXC9S2Q83SR11v6WDsEyCWZx",
  "key18": "4Er6keETPc8kfgaRb4ihqrvdS2ybzy6JK7sgqjxhancCVbuMgSxp7sLfJR9FhWFBTK9SKsytzekfyMNjFQdxSJvV",
  "key19": "2kZzfU9eACX6iroX858ujH5teLNN69R1rEG6aP5b8xuWFA68wbfDTpmgo9ryXSgP8CxQz6zbjivKM9gi16enN3qo",
  "key20": "has3bzfkfznmd8RBpn1v3nUiMhGXBvoMouDvioiMUbi58Nt5ZDBcc8bveoQXU8CSDGMRz9fRAYwsGDeYct322zZ",
  "key21": "3rcWX4MRZ2QKr1cC7S71pMUht36eMRnp155NChiMHaYvn1r13Mw4y59Pmg1TGTzVesoZgzYWmfpVWPJxWLuxjNpK",
  "key22": "4hSwzhSRmCwPY56n5QL9TfeAbxBC7DBNyBWmpGKxwhpw5dqHkQPtEFQDCPKijp5FcgMkb3KFWcjM49h1MPPMiF5Q",
  "key23": "4Aer26PNsrCR9N3Qj1UBo7D1eRSTUfYq56NovgRMah1NiXua22NGUbcdoPnugmkGsEZ1DwPJetm1dGSeZ5eXeuBk",
  "key24": "5cJzavBP8p8nRGUkCWngse6TRYgtPsurixaxbe81qHd2dpDsophrM397FDff8WzkXtKDfcaHxqFobQwBFqj8ok2T",
  "key25": "47M8wWHJbdSmn7UhdysthQBTaPvdZvsj5EEbrg8Di7LAX9uUguwVfvkwLu1SVoHWbGF6UJsACfAj1Eexp7EpKbpx",
  "key26": "3pQbq5cjmESPbriHBSYkT2MfUxCiKDvFMS66H7sgBix4sUyoMqFLfFmj9x4bQAQkjbfRxJxJ72r44YnJeECdHddZ",
  "key27": "5z9rp7PHm8RCqvKaBoYrzbtKbHdem1Fku52Sb9CdXDsRLSNp992oaF56mVUiqjKLvSUFmRjuJToZNPYv3fiw5eqw",
  "key28": "5LhroQ6nmWu9U6PkxC5RX7Jk5UBTeWEKQBi8NCdwVYFzVUMhNCHZkVUtKGYMtsckNqiQFqkrGaxSTbs9MTur4MXP",
  "key29": "HSYwALgGjpi828EfUo1p567geUi7iyivfpVFVnQdox4pNvgXLJcaGbxbgFQnqD64jjNTtRfnZUnBopJKJRbjXCZ",
  "key30": "4BzmcbeizuazMZ8e9diLtjQRkT4BeHp5K9nNKokoLdsjEZFWqPx3Dc9aWQJ8zu2tdN9D7m4pYCsJ8jgRNRsbR7az",
  "key31": "7FXAaqa7s9vJHThegfuXnNeedeXyDqJHayUwkb5tGC5tvoZER2aco6LTPzaigG5gFJAKTd7JxqFmeLHFDZBt4Pm",
  "key32": "4GMgD6VhssvBp32NjbsWGrdmg9RsXoLSHdEi1dJW4z4W6pMsMY6VN3KavT6xLjtWpT85shFQYMftSrYLo32kskDe"
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
