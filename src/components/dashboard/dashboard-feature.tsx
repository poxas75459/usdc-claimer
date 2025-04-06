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
    "BXFJPYhrEkqkqJ9jkvGYVpJNeK2GqQKwTjLpsEXt1g8DXkDH1NGFcP5CbG7NkuFsGjftzTeDF4DnueHbwkfnTqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S5y6JCvt1kiFNAMVPTqLf4HkEGQhSAZagZDRmPDYxSqDik8xq8SNZQS5gHY3CHqmvw35seK18mva814k5hxAzEJ",
  "key1": "2aM8qHoSDvqiiDVusNKgmT3ZvRAutHXxyMJchMBacVdUemRK7sSYJdFiucKRVNeJsoW2eD9Ag6TE7z1re2MUVm72",
  "key2": "3WidqJ1mwXDgAcE5ao88T9pbTYBe4HC7WxMs1L7YFXQHRs5hDPuZochJE1WbDS6J4ojK7wWv2dJGXkLBvDmfN8sW",
  "key3": "CK2hA1ZH6EPxbeCbto1zwQyuD9hP4ueKCZFnoMuU7ibXPrWeJv3RZ5APetsjHtFrexUB3TgaBbBbAgFV48Q4pPh",
  "key4": "5dCytrrzu2ETMjxMADPZwrVQ162bpS8XVpSpJyYTTCnwmzkoVVhX6m15oPa2RpanouupsYUY9PP7bEKeC2buHJrZ",
  "key5": "5rVfdcf8Ez2FMvuqajbRsrnm3ArEpr456z6vZKhConH5GPoP7MD3JxrScbHLTdBc6oMho7uF9YpPZQTn4xEzdu44",
  "key6": "3iAsdbswvsptXeSM4EaTgjAbtAAjNrxKgnnp7KsNDfCdBz6CyM4LSLnDdBWHuGPhWontmyWgKpXXuAQGsCTnLmJR",
  "key7": "223oHRqtLaks58H4DEJyZGww5TapcHW4ZchLzG1VfM8HjM9upKGyHgDnAD4JiU2oYRJAW1TbGZ9rMmxHGsCtoH6m",
  "key8": "3xQtKdbFEPyk55hfvpzG4xTCz1b3MGStemGe33XU26HuUq8aEjQ5bfyKi1DC1SM2ms8P5iAbnpFbNU8P22VX7dzz",
  "key9": "2MApd9R3a8KGS54TyQRApvkgxkG9qKPxUzNHmiC7TUqh2BYFknbwfp4jPQg6eQNpefgnzYXpaGnSXKobTmhbQdJD",
  "key10": "yW4iTL1KfDUXqKgHX5dhKpizdnwBPnRqW3Gsf3vfrfWKZjraUg9yCTnwWkVtnpJkzoXEAxkVknhbJN3RKiRCzSg",
  "key11": "28RsgYUedsU5XanCR2C4z4AshN5AS2fQa4pag3WqibVWDAN2PjhhVmP4WbVtmBeGXVbe8K2dWTWHUYARLHhPcADA",
  "key12": "5cjX2qEhP1qB1i63qmvf3Aanouo9tgJrxnfCmCa4c1RQr7bF1m2oTT74d2b4JekQ4Pn2cDX1vmXauHAGKRmaMe5V",
  "key13": "5qPjph3E5LFGGvBVdLdKXYw74VpXaPRsYYw5Rk8kHZGLMKBAkJRKkYmJf1PeXnQvMVfFaPor5NPfBjXLYhB1dUPq",
  "key14": "spsotjpfJXLWSm96KQrn7b1AB11a9dkmhwqhefwJczTuCnc9HQMPRCDBNo2xsGxvmCEqTbbscV8hPX5b6mGV59g",
  "key15": "4B3oywUHw8F6r9wbr9CSvXa6Wo7XU2Uu8i8D6aHEWvNVXabLtSXHFRi1LWiKovPK9asUm2DYCeDBybjBqJAkgvmX",
  "key16": "2Gc8EsWnj4zuvMo4nsomMtgzATG3Jr4pkmoyvJHxKLNp2ckvwxDJxUd5N9GaSJPVPvxyH4VgGrrfez5MWu13MQvx",
  "key17": "EqyPrE6jFdWgDfduBSgTo4w3zHEZpvEyYsaCefDE6dtHmgxyP3fdZJM6rEX86Jf2iM6dqYE6v3ihqJ6KBsVePBM",
  "key18": "3dYXqFRwqePFV36QNg9hgwE5AcuwCmYykbLgP4VG5GBzxxWLBbi91V3hQvsPe64erj5j4f7BUJzuKmoaFMVcFEdJ",
  "key19": "4gC1cxTpeQ13md6iRx6JBtqFaAU3S6DfTDyyHwV6w9B2J1FgnAjacapxFkiuB6dVQYNwX3kdwaZRf2H7xfPiPQ18",
  "key20": "j3CZc9rSeCM49zBrJH7NozKuaB6JudUp8CygTXPdmewcnswHNXdiLGFAHMmG4NFLh5vZ1dSNCe3ReQN6kULPNJr",
  "key21": "2KSbbeiTELGhRc2fZudaZSuCWsrRFxbgNwvJyGRvm7TWz9AfBwMDnxnSR4LyuXd8A43iZ3E7PcibFMWwtV8kPVZf",
  "key22": "4j1rdJwLxbA9nfJt1asY5otoEXVmfti91v8gM3Kvvu9RDBnTrLgSsBVNDUxWJq6hD5fHan5hMwkk4po91WL7KEGZ",
  "key23": "3PSu9speLEem5eZhNzyKyqmDjt4tTpjkjcnnH6yx7kvRKw98YCFcogCpHK9jkYSBk8viZkW7a5PzmKuj3tX3MseS",
  "key24": "27Wti3M3WhM9FQij96zu9zZWnwHb4xJ237dfdpX6uUr9hYmgqVZjPN1jGeLp1hmoU8RxNA8JzsunFwN1jwpH31GZ",
  "key25": "4ZVQecDw4P3EUKSKYnig6HPjGrEanvgNRrk3Kkmaw3KusKoByjTy4XQ8hURkzyrWRgR3T24vhic1ZWSqgiNbLWXx",
  "key26": "5NtGP1y7Kgqy1TBz4jm8k3dt5vJmpc3EiPM8tKBouJVX1nRndzKXQWWpYwdtxd1QPxDfjtWARMMVUJX77cfPW7VG",
  "key27": "4obhzZGKpEmcoJ7GHXdw6uQTTfXRmczcznvG1zuRCPCNSNu1u99EzNk4fHjubtBPEUmUNFngjpb7fJ2GzkNBF8PU",
  "key28": "52g7AVPttv8VWo5RpJKUUv6dmhDw4AveNxjLzeSyR1ybk9WQtHvjozRJPFMxkT4LrsAfiZ1U9Z6pv2sBsro6ye6L"
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
