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
    "4kdz2N8fnab7sRvxc3KxCxaLwJUksYJKJwGijyh7C4DiAwnd1DM6LmXndiBhUiwJtgnGkWh2sy5NkKcv64i6YsgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NCCgX9FtCuEaAyJjrrsv3rgRGoqgjRoZmTUtGh6TAJahL48tk4uUqQuiG8qSu9cMyuX62JUG5YK1SW7Njgq2ZQZ",
  "key1": "2EjhxnN8oMh9PvqRnx71zCZNEbKBupEEZ4f71kdHt9CyteAGVLgza5TTZqpZwVxZvKwhz94RUCqGa5NYsW5yXYsZ",
  "key2": "3d58uvbBvnwShJJmStJfMbuskGmh7gApqrpDUhwn642rqBFC96M6EWDxEaZcph5iSrjp3szxeot22yWD9JN6Vo8A",
  "key3": "55gcnbpGksuvS97ciPqStsVHbur4K95QtKd3zJf669WXdaxRFmuahsc32ELfaNTpT6aD2762aqRNFg7Hw5MPn2DN",
  "key4": "4JZQJmMC5pAwaEe1gdYWLLZ4365NfNDFuo3hmX94rgkxy9uwvnXMGFCSZ7o1UtmCPrPmPAxWDUgzdziCZbsKVWn4",
  "key5": "Mr6jiB8hNhwbSZS2oTaFTbHtvqeU8kzAmnFNR4BpjKdnzjQ8CNTh7PCbqSLx88GZGEWs7LavLFipaahgtbkwT5g",
  "key6": "aUJd9kctdQskkvHXm2pfm431itvjT4Ec89LfeCd2DTAoQteRCWZdGNW6U1CuDbMrfGBG8fg5URovMWwV1bvPC5C",
  "key7": "58oRKqZWYW8KkYscpBepZzLuir5ZT5skcNK28hgkmrM7pPCLAdNUB9FwPpRZEMEC8AuruKhvZ24gFdXy6LiA1kcp",
  "key8": "3x9Nw3CwjEoFS6XhNcgs9wvzrjeqPQ4qERqGdffdwHxZtu351U2vtPsLY4gM6KVkhmaxDKa85rUbMAHRP9MjtRWJ",
  "key9": "5kgbPDd7RBJszDoRZdPzM3EL38RE41FktSnJomWvMY8356YanWQPrxMMsE1JuikdzMNXzVapJpzsc2PRuQaHuGQ8",
  "key10": "5kqy6W7N8E73jU2EsedknKHA7s1abQvpmWNg76AcjqvNkNo4KFTBPwAGq9WzYsUow9mDBzbsZobVEJ8wHdZrrWiz",
  "key11": "3srFNpoM1FSs5eyPckiPMAUzu7fb15Aodx9pV39JkhCqSfQExmLLEAJzXRZkGw25bVbnfaFFfKXLT1GHgQSgLtnx",
  "key12": "2CbNb6HFT54L2LeWdo5u5LQ9Ss5iR9iBZTD6eWcEHQreyo2WqqFPAjsc2v4BGztv7ChAyyR6fG4vjDNzMYL3yu9w",
  "key13": "2crxd4DokuHktVuKGZeoi6YwhVYdbHSQXRYfKRMN7fhhFMDJLMyL784yLQ8YkF9n3ETcRtyKNJWdVFskoNPSCGKb",
  "key14": "2hFLiHo7u5r3z44fwA4ZuTmPJRtKqDv9vNnvsVNXPuBWQMpcxWbeihAN8gAfgfqiixvStTqHVHTQpLuWQU5PAsvV",
  "key15": "2miC9fHiCNduny1VhVnoYtx8SRMJd55Vqk4HG6tqTEapwBpQGUTeyQ2xMYprdryzYA8dgMgPG2bs4FDPzY6SDEhL",
  "key16": "4VFYvA6rBkEdaTKeyrMb8h7quoVthSZSEWQfJh283Gwu1MWQfYmcrFNd2h9fnNACvm8PeLH7nZmmx6GuvBdyCwXf",
  "key17": "4Mc3RPaAZA2uSWykPCi5kRXTTXnfnk21T2wfYsuzARRLG5yQG1EDxEHktCi6ZxkNftxkW3pgkaNtnvGYK4XVpYRh",
  "key18": "3skUr5tSF7m6LzDbPEzD9Qv8gGAXqE25eNrSMJRfL2DoXuzyr5UmJ536sfU2N8PnkJuZx5auh91E2uTbwJbWNHQF",
  "key19": "528ZGqquNGvEBtuzE1Lx1NCUdgiYbsceKx6goYaRk5JoggBupGC5R8Hz852dZDv782pwb4XELvZ46A6PoPmzBBDZ",
  "key20": "FgPw9amWfHM1mTPqW5r3CDWQKMFiRiJECMSsQwjkUGKpjrWZnRtbbaro3gZMHexYuwuVGMGW3mPMoZ9SBSJ2Ygx",
  "key21": "4SLy8dG1SXXUt2UquW8JKTVC3EroaupxcDZyrW9VUmMNBPoKbCbH52vLTFK6iFfjcmaPAimVsSnmoZeR5LXitFm8",
  "key22": "3rw11uHH88mSrgEoAiDNAAKM7dkxBhMeeFSYFBzvpypBJk7YUMxdBESuFjjuYTM6vQWcVUHa24HSSQdTLQMK4eN6",
  "key23": "2sVWkvWQy6uUH9rn8jFZNq88WioDK5PYhZtVaJXaiTZXc1xk3cHaQEFKc2x8RTsZxdnMwTiApAf9gMFdc1KWXTGm",
  "key24": "2W8jxZ1czJApBfwPACCCe6XcK6WttHQZRtQGWqY8wSFijSbQSs7x9mLVoyRS5T7KGePpTkHLZmfp9Mh1295Ebiok"
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
