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
    "5Nsei732hfX2ZGCrMhHLK6s6KPCPamrR1Wvw9MG7roAe72tyWuGTSjv9ykf8ATrjrCTqb19TvEnV1nG9vgHVwEwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qzzwbDRnFxkGqW3BS3VuhPys2M1HsAPq7m1XEmeSQW8VVj2d8S7F12Qh6jkYRSrmYvefM4SSY3toJFd4TXaQTxi",
  "key1": "YWhRzmKFEvSr1tBXjU4aFUyrCMY9RQkWRxMuUe72ZpiezVUS5sBbgpVCA3pPMUPSAjDGBoeSWna25qf7qdWeinF",
  "key2": "iozotLCbNedF1JhwJVDxXwMcafQiFv3UjAPHerAw1R1rsT5XktkUATJqhSETmUyvgjc2cbREML4VGCzsR5CYv4W",
  "key3": "4UL8ivJ6c3RRPqVp86jUsBAN3AaRBSPxoXPJArPJarPV4VrNuhYoVptCiMihpY5EtiVa7xoY2VMpXn2a6UJ5gCVo",
  "key4": "1L3RQTzWJgyaGfQJ72fxuLsWhf3AarZf7i8snBPaWb3Kkf1JpQdtkofBs9K7ZeiPYjrsdyUpJ67LTyaTpVcoJFW",
  "key5": "3931NR1rMXQpANrV2DE9azhGiDo1ybYCJ8Tfn7iSvghtkyEPJBSzziaeFJ6cJzZwCdQGsLhaeomUvPVyBmsMwtgr",
  "key6": "4GjddWmUTencuSHkkP9ZYHTAawGSNUoqDvL6y9Nbn6n2S4bHEDYcKT8VACpiEv596Fqxmabp1ESKUPazQPwt9dxa",
  "key7": "5Q2NfdMHV9hrcY1XtggG2KV59Fbu1LZBaB6Zic9DqW7RKAVhDHpivCQV4krQapcf8EqEkh7GzofFeY5thD5fyVUu",
  "key8": "5dR9Jn59TWki4WsCctm5E2D2n3uZu26w5PfzWqYCeeEJ7jmKZNbK1u1vyopEuorztcjHpSS7c5pbfFGxXTUifPbQ",
  "key9": "2AxfUVdPHpPhL3SoGXM6VqvagvDqC8pkERbUXCSEKPLesPrGaL83bTdjvDmPFDGBsD6RmujLD33NCNSCx4KUhW3X",
  "key10": "zhNGSqwnPBp49p4ZU33U4ZKenZYsTSh16cfqAzAdhdC5dRaURrwywnBNnnrPk5vCaD6BXoyFhLcWw985HbWSYdg",
  "key11": "3CyY36jkQHd1mdfakMks9pVDoWenV9tYC4Td4LCkdAFfuPSj8xQgVHcJWRmWam5JV1adrPDRT6AafidJBob9tfDZ",
  "key12": "5ZswSqtCbdQwhUzDeSH5RewJLmqMxQ5hDhpFD1rRJYJsSDtdvK6nqivQyYLQk6etmePti4Y2SWQisV2USFdoiH61",
  "key13": "4r4baMCxnJFiqfbwShYGn7rbF1wRFwNKdzbxMxn51HAT2HT4CgwCQ7PZhb16mP94vb8T3zPkB2Yed8ndQ8sWLrWM",
  "key14": "332yRXVSWvc9x8y7wHRzvwPL15TH6v8di9uKKemPWBRbJfhqGQj8Yd5fFqy3JLXQE9b7rRBBvYJAfvB1kEn7Y9Qh",
  "key15": "qZ3ty1P8uFD1bMSvDJs7CKQ2xJsXo8mVkmZWxVtapnNYCitvSF6ByVowWpehTpGp5N1ie6PvMnGeAovaGh6dk7U",
  "key16": "46vGwfDZ14B6XdcywyCWAcGPeZaMfrX2Ti6x8vViWWFbLiTJAyYx7VrgB4a3MNQB3wjyRpPTZ7cdToX5Va7RgKXk",
  "key17": "56vryCp3dLZqG97rRrHoqHHYLuzZgU9P1WDcSj5JFLwbqyhBKWYjYSkRXnSFgjXMesgcWVtxtrVcR8QVMYHR4Mdf",
  "key18": "D35AGYE4FjRqXaC1uiPxo9hvtYnamhsW92EDDSg8hJWBiKocXjqyEu6HcFrMGnszRPEme2qGfreD7G4xE9tnj1R",
  "key19": "5agkBDb8MvYHq4vhJb88TEucZu3dZFYRGqEsKzXFBcgddnEP7izLRGifyzdKd8soyvqYLiQLu72Lre9hjrrHvwui",
  "key20": "2rJNsP5SXf4R8KSw8VpA9WPVpk9gsafnVCLZSumrH9XPy8sywFJNdCdr9xZTcnrD2ibbVbt18QiBDTsYPBZJzdsk",
  "key21": "2fsTkucmY952T97gjRuW4BWDFihHdfBLsNiGxDPPZhxnZawCbcYR86mrEPzDQpyB75745LdxEYmHvrQybnZbUJbv",
  "key22": "5Jyuwbt6d8R1vxoprD2CouQcTCWfF6nyzfYWkfhYBdcifvTAXeT7jkxUSUkHHPW2wvNqee7W2mCjTP4YYwwMu6of",
  "key23": "2MmGsV7vwFjyudAbk7e3BZ3Cb5jZ3uN3X195xAKGQNmxy6i5p4Avka1b6M4QGK7RQP1jRDHEmxHC5EHYBZJdS8cc",
  "key24": "3rzzgDmXSCiZYn549awMfrxQPp9FCibhfdm5375ixaWw3wtTqeN78uEUb9nsdFEPfS2E9Ezaj3ZupX8vG4dkN7c1",
  "key25": "4wTsaoZofjexcR13psLrJ66mH6dsApkTxrm2bRuqrdsGseMVaYcFxPbNMKypU1D94PDn6AKJDWvXDooCgDySvXjS",
  "key26": "2nQmNTczdZqg699jDUdUJVqmS6qsiDVHrcgUTuyLCsUzwWVKYdPW2NXYj8yhHkg1Qjc2Mq4XHZSUxxY6wLyVUCpK"
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
