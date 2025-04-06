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
    "2reggvnfA8pv5A97CcWFY1dYyHbQ4aQBnJaSzVJshuBK1BiSjff4anAutNrz2Q6ek7DttGkoxQCX8bv7zkbQbbhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cgm1B53Q7f8c2DM8emYVM7unkJz4b1GsLWF5jUjfEKdpBfvx75PuaHnNL7XAEETGdY1ZM7gu8Lz6pi7DdA8UaBa",
  "key1": "5QroHLFEkHZLnRnaj4jttUVUbCg51HqDkMKktZCvNgvh5n3biuvB1JGAfo2CYpegoAxMu9Md2sNcoLrFL2ggE3wj",
  "key2": "zgv5f3TqcK5oTqtzMx4d2eHCZqDAYp4RpLN3vSUExp1xZCK9Z3SkN2uykzvYmcp9s4DQDfv8aoY98PDj9VRUnKW",
  "key3": "4o5gj2EDHe2zpUvzLuBCp2QjxWm67TAHxzCUeLwB8K7fafchVbajMW2cPvb11tcPxLFZg2axMN9VuprPxu9Y2bes",
  "key4": "2pqB4i4roSoUuCBwCm22nHXAB82bttddAiL7Ybns8KJm2vb3EoDHCh8DsxX7PRhu9fbMrNDEj684gCi5BZuon446",
  "key5": "YGedhQ3SvZ6NbKqWyR5Jbethh2ebC4guHF9ZA6A7u6zKtKbZscMoJSJ699PpHoMsMMzPwrVy9kCLjurT211QiqY",
  "key6": "3wYiDeCA2cn6tVGWPHZbXxXcuf4MrTkLCfwxNb2ScvywtzC4W6p9VNyDL6t7fkCgRWAwsCZiia4PYjrT3qP4vB8W",
  "key7": "45zgJEuVsGaszpVUpETGPYRpjeLrJhZYzykeM2U1QrjUZpCLuLiBmJptKBcULxVjHZAtBZqnvDTek27VVGrFe2pq",
  "key8": "5B9QVT7xtXQEZ77Zbd15pCBm7tg5zrVt29M6rSRnRn3m5WboqENQwGiQ7Bwqfn3ddnoqDfN58isoPCH65548y4fc",
  "key9": "39b1ZqxXXbYB81kueEgMkYKTULtticnDY3pA9wENDMzTvfkgggGGBzvH562ZiTc4FxzSUdTP5EDtiY9VbUyJGd4W",
  "key10": "4skFFh59xvi3UVQWY7xbhXjVkBWtLVKo1XooFpU1FnbCztyLYkmwy4Qh9kuMngUrNWvvnBJ3jwa8KiUNAFoSCUnX",
  "key11": "3ZWvax9cNjhaszR2wozZM6D3ahMyVtNuNG9EdfFFbPtQFGaE87Z4caihH9JVQfuhnmoQ4jyc3dPpUxDJPXWxn4XM",
  "key12": "5JrjofBpymuSW1yfQXMKNvbZVQPxE65yDftZruxJbcKeZxmyNf29AVRugS8R9hxicKKzwoXnabCJGtR5iGmHc56H",
  "key13": "gr3eyrU3sdQx1fA4XvWnn4qztiPzapCyjQWxoyktoAyfrPKf3gDMhFU4GMKc6mMsg9kuY8ibDia82hcpA1Reuom",
  "key14": "3v1V48wKXopFsLjYs4nkoScTJvPaZajRbBwC45ZvvB1WH6QgP257d63FrgnAnEEHZ6B3qUj5QxUZugm5AC89GG3g",
  "key15": "4CXJBXqJVfQfxSJGQqyL8qrwG9aiM9wqoFKyF4XJB2yy9BbZ416RexWMR77mtAuTBEbUGLzs18zQmpsLszZ2DAC1",
  "key16": "2whKj3EdeuynT25dFPdueRUP2Kx9EXBkxhpDGYtfr4Nru5KCn6cyyNpeeyDLAMvpwz6z5bPRfDfU3E7JCEihTFjn",
  "key17": "3sL9GCGsV4SrSbfnVFtqCRA8uRnNT4icPikTtZS4zxuKMHwMut2kvH7jQB1vCvMwKb5CtmKRjbhjSYxDmu1BBxK6",
  "key18": "4BDYHBF8vwq3qSxzPfiCGyuzd6B7RupHHd4SYUGbjUBjs6pMgqDkHnBKZYCZj89pRc17UKvesFvyyGkfTBgvps1N",
  "key19": "2zzCLG3242Yfg98DmYvkKEQB5jn8DmEzDeRq3Qzidykh3hsGQ8kTCwE5pbwLdf8iNvkeAMcGFtc8Sai7wRw4aX7F",
  "key20": "2jKRGqgFsPgHS2NZKbbpahpCKjr8F2e1Yarvj3Pa9NcYytCHDakASkajQ4Uvt9N9gsWV1KSiowGjWidhphNvnHMi",
  "key21": "5BWx9jLUthy1utYRLJs5CwcRA2HQRutwR26ViejZEMzLaMHymHnyeTF1UxMbtSBTRfvtN3NSToyQDcV7KyKrCtrH",
  "key22": "5snu4C7SV4DzP9cNdxeqv112zsWS5T76FKS8qYpaZDhY5apmUP3wp3Ti6525S1fLUMU2tkrHG3G5H6gUgZ6D3vDS",
  "key23": "5GxCZbaeAMEWYEY7S7daFnF1TnbS8SXC5M9bwNkZi5xQtSt8Q4458o527E23wTPWt2rgcpW98R9BGVvCpAdDmM6o",
  "key24": "4ffbVFSfjWGJQ9W3BQcCGQA3mhen9gDa4QJ4k8bGhgUJy1gBsPWhE7Kds5RDDQvtjcRVJHwMq2hTPGKQWzcfkTHc",
  "key25": "4vbgDaXVi2BcrjYgyno2W5q9qTVNc1DNE6sxQzdUmvfSETSe9sstJBaGN4LVVM5JGTJvEWJ8pUbEMYYCfNEd9Qpw",
  "key26": "3wjaBur1BSnsQDxjoBAC821if9W47up1eKesh87dHy5RFBLGaeSC9c6LrJyttdrfnu5C2vD2BGUM17BKmFboGcwW",
  "key27": "2Y9tmwrrUaib1k1J31SRgKTJ96a1RhEaNgymYAWDJzL4aDBPFjNgkTQz6vWxHH5wQY8SumiZohX4m5V23mxRfMK4",
  "key28": "grw18hzbcNGrgqiiHgNBePvFezBiZT3ZfBDW9ywYtMBCCJEN8wkbe5wzyydVBn2pnH8yTrKj8XPYSthrTr5goce",
  "key29": "wGaGWtUR5smRCkV835ipBEFUJsJscgKfrfwVQVjvxm7fqzidVjv6gi1wLrwxvtDJiToCd8YYd1WSMGMXFoTSjbc",
  "key30": "25kW6WcG1g1kRS17o1vb5kFGxNjWXL2rpywxb967VsF9Uhw8xgBLbH9zq3TcPhSCDoXGLGQZBuGNAGEWW7XB1uoH",
  "key31": "38JDVhqL1K6sAnEnf6fo8RLcMUKzPX8AXjMnjDR4DSE2ZzBrDuv2jjGBw1GVwdVDGnsf3J3Pqmzi39PshNxj7QEo",
  "key32": "3UkNMa6n11XbCRbZitAkPxKxRNYS2qahe3TmxzAHBPRMtWdTXLgyDBLJgWQ8ZFPeoMWXHNmc8XzHwdQtFG2mL4v4"
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
