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
    "4dTtPNuyEBeTk69PDVpv7kW95EpRLHPR9f31TQrT2KAv7y3VHxW6Yu3Xn8QLsff1Ghzn3jE1TDuEe7MotZYK29cU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34jYzyrAXDQiqh8VuyWrkj4sWCdPFCamps9j9xDZnRMVrprrtEQAwdikabD7kSs4593LU19PUk4UnKsmsWqU9Gsi",
  "key1": "5hRfQPDGim1tPx1geNq5hVYYkSx6AfLcLcLkomXkz82Zv8nbsnrfEPorgxA78R3th6rFXnvWH9DZTsJPCd1AtZJd",
  "key2": "41aMgGSVnWeHCHNazNMGun3spWLWxwWdkj6N53sAqLEsBQedB9Jp9NxxtpC1bAFrsF79gUkv6oHabD85kx1Lgy1J",
  "key3": "2ZhtupfJEH4KbKrqEDqFt8nBLUYRbdhvPTAurKRDxRmdrZkvjZ5n8nrtz3XFDXA7CtqsYC3NRAHRnncKjcVz6at7",
  "key4": "5psMfs76i6s5BUGEYgawCTkQZfbuUEqWqruBhJUSZs6vk7TyejkPRPaDjnGEWV4ryvvGDT5cxMcXZK7cUAUg1y3f",
  "key5": "4rpD9qc2GGsHxMNG4ycbQtH2f7wF9zQBVU7FvPyG1K5Sn5UUnVX1mU8p1gSajhVRiW7JsbF6ortQ7owsCxBKkCgi",
  "key6": "cYddadsZo4jvjVGeDCYb5MHpQJ5rropn4Sq643cEExnpEkfaHaRvtxpB8BWVgZz7pS8xu74M6HSVDx3gCE1y5iA",
  "key7": "5jWVo16i9UucW87GNWwozaePAoqY4FLkUGxCmrUQfp7VSSQQCXRdJTH85KZFzm27tr1bvZ9yZzTaBCqBhECmt2PB",
  "key8": "4NpbcJZCstTqynK9mkhHR7C9gs7tw3vQkiD8c8J1cgjkiNF7gyTHqrWR5ArVr4YD8XftL4FRv4NAHUuShRCDujjT",
  "key9": "4qZyKg7KBQKUyS89hi7q8Ab9ZCyNEogSdsUHJhQwbpR8dUnU3fmAWT5yBeYQfkoXksJNHa7f7ohe8ci5ujMpiWkR",
  "key10": "4C4odAaGEZwzTj5juUw8mNaSDMUdhRpAJaY6pPxoTFux7mwKP1nne83CyXfvK1nQxZjFqKGDfbPGZvh2Aje9wbvx",
  "key11": "5XgT79mLxzKr7BZ1Ku2TQtY53FVFrhD7znwhGVLFKFawiJWpBNdPAtJtZ4XTtGoi9H7MCmRZ6umTWz7hggnadqjY",
  "key12": "2fzKX5pqrQVEdMtsP7o6kP3wRJyzGmLgRjFfj3CwrmAkDxFChRkQmjQsXyNSDJM4a9myyySEUES9S7MfB3YtQmxc",
  "key13": "2Eu1cjkfhmUk6vLCupk2AA6BrAPro9tdxDfWDJNC2NWQc9WB1E2MT6ofjZdcNv8J5p3k4KuRsBxTWtokFmedy8Xp",
  "key14": "4vuxdFYKtXegQs3zK9Z3CjtEus8NJGSwbYQPNs1BFhBt27noer4CzWUDF8RFTHNCnTZESyqy4tMi4cbuEWcfBFVT",
  "key15": "5cX8tnBUmUwpBPwVXCvbUp63SvP6o1sFEyKXZsdXE9aunEmqEQK9JNySiQqBXhzqvPPZHyHEku3HjuHWg12fNu9L",
  "key16": "eQB9w4PVGpkSonuGgZVZdPFrnfpUxarzDcXUZzhSFbXAW5hqf1nrdANLfBqWYE8ax3Hmu9JvDSw9EBBMayZPGzq",
  "key17": "2QWufCPfW7y1ALTyJzso2AeD5GgXAxDJee3AysrUm4bsTYhsLCZhh445yy6VaHGKvCEpdSbxehpRygVmN1dnNiNC",
  "key18": "4CEHSub7YfDSKPkwSG71XF9iejQyTMgo4ibGB135cjTkKjPmmUMH2ZboSzrnsdDJJxNeRXW7asqxcuagSKJK2RUK",
  "key19": "22CVLktnU47mnWLYfEoTBasZKUQiVEZB2hMVPHSE1waJWLHuCqkygZaentUu4Yb4SC1EtEeyG8re1yzXaozikjzg",
  "key20": "mvetjZ3KbeQKYB86cmgxMxKsTKASBZET3HpKj5GNDGpBJHFJ2e2ugSTVPfMvSvpTUXaSJVoSsasufs11zGZEefJ",
  "key21": "3hPBz252BfnJeNGozqh8WzndeCp1Sv8hHSoXbTZV2G36o1s9Az76XY9gTPywGizVHivNoWgdaTwW3L6Aa6JaCngW",
  "key22": "38ShFiik7TxXsQck6cavXPbBqJ1D6oyNyFYt8rzfRxnoqo7qzjioJtMckdavDPwBrfrfdgCi3aarGc35mJrgStn4",
  "key23": "5YshynhWXRFsLzKikSkqJD7XRVTvzUcUyc4EeNVQf8FpKi4nbRnivEciWJNcfTRactJTaLspawcsHooKx1pfF6W1",
  "key24": "2vUndfNQGEUmS1iUogMVNkq6XgHTPgGVj4ak8CQSiEwLhTagmcLjW1uME9X33pQJ7zA2YscH7eaUPapiiArsHUFh",
  "key25": "pLWYhZBEN6NgVVcuzHf4LaVqE1xYND6BGqabcrABARNBoHBVrFZA3zykQ4rmdTfiALXvyqxtWfstAxnjCy9MAsA",
  "key26": "4y579dMqwhZ7UVAztCVN9gD32qYw2kyHvYMva5XCWphuk8eQre7gFqgwm7ZUCVt7dptdpbhbxcrEnd1tcwT4rjWp",
  "key27": "4wNqGvLFGdPJADJbgyQKdy7eRndbg28o983iJKqgkvNJxRXsZEcs5aLanNqq6NkzjQ8PaFjpaeddcvtX7HNDwTdJ",
  "key28": "2Na2TcfQNu1v2vbvPbpibMuRxYtqmsA8uLqvUV2TJWBgoCg3XYhnZBG5aAW17rdhbVhGNkPyDhoZh3LVFwCV9F5c",
  "key29": "2Km225hpw5QJBDeJSZD8D6FaEkewAztykoEqchmpVPqwbAneAQxtddQWFamuEnSofBtZrW9z9nGNdJGw8uWKbT8x"
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
