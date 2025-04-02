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
    "2JbJQLgUrc354TcVZzM6sqePdcAoHFHmr5Mg59MeUZzX8kwKAFpXUzqSkMbbMiMgGckd68oyvKBLt12TLfu47pCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VZUdomYxMZNJF7qcBrHVC3mS5FxFi75J2M6bLeLb1UFhFTfhVh2TCBihwCHMQP1d38KHdW2iGoSoGt7MgMyfZ48",
  "key1": "5iBk2AUCtFeb9j1vRR2ub6Q8pDFhRFXU5esDcLea6kBgtA4Fc6vhRG9XZFDPvn2oNnmE27akMZ6q74J3ArxHREUf",
  "key2": "4sEso6XnUEDsCwsy2tw9WYgrw1sg7UWoikPU24EE6P5avE8VvhQmj163xVyt8crg6e2KC5RstEg3qzLnAWgJkPKm",
  "key3": "49wbPCkLNDx7t7JYxd7pszUSrUmjnerZWkZ324FQtDJ9XDQzjjq5ZHKBNxNWyVwvD9GFpQByRxh3Nu8MDPSh7KzX",
  "key4": "RZGAz4txLbr57NJS5KAMbiWa72trizffutrcfVchPCVw1wCmehGX45ijEnc1PusznuhKzgnf9V9bwXzTvnSNFym",
  "key5": "4wNADoaxned4MWmpTr3QJ2Qn7Dr9AXTZTBLjL7HsNWfoGa33rpLLkTh3FD3fzcS4VWm8MZC9s2kqaA8SrKU1hrCq",
  "key6": "3zfTnqNCWP6V5jBMS53MuSfH33gmEzzYkdPeT7VFsQ4qFJvBs7aY47GLet4i19SMTCCVj4tV62xxtFCtRPBRqMp",
  "key7": "48gXkXjAEDkzi3U6FGn2xpmraKyYiFpvBerj22eoD3hx2tLquwzwCgyaWa79eEXC6sqV2cxkETp6JpCEmrfjXqGL",
  "key8": "5tufrh8m4wHLreA25rt9hSdLvmkeoFDiLWizG5QBmpXzNbTCwL377Fk1jirNeXmoXUNZgRbMTkruhKTPfme9AYLo",
  "key9": "4pZdCmRLZTJ6wDhsLux3GUp92wdnsBRF2FMgtjV5MjvbHZhhJdJ7MopXm4KqStqeVaWwbxGNwozFKtrik5ZUnCH5",
  "key10": "2E9vMyL8VwPgoGMTxP29hZLkwz2AGHN24v5Q9jQxgQUmu8WpHezrCc5aTB1YFi6SjKtK2LVTAneML765AjW2wv4P",
  "key11": "5m7RhXX1t5dKrxwwv1oFqBpz26THzD3zinR2erYaC99LErN4f9RDPLc3GuA1NWGtb6axTfsFsR6YQr2HVm18siqV",
  "key12": "34U6xCM1YU8teAKtfiC7F6B5zdrXGhmyzQGA9j3mnDqpZ7oPaLd25m6Qn54vARq5D5jhNh3nVwz4XthCKg9K6yiH",
  "key13": "3X2wrfuZmrhqHmkhYn7CDcpQocg7ECGSnBMCXxU6HCW33kzqij8yZCrcDTUebVHQawE3X6C3nZiQSSGsYMmyamQ6",
  "key14": "4QLVPypU5tdJrEhGDz1UHSKakb2n1tMUzrDUvALUjR8gPTsTkFiqaT1kH8RdK6PrQtGVm2NY6M8QZ5xT8RaQQ5dp",
  "key15": "25mKKMHRoRE1mR8Uft32oRPdk38u9eamLWEyEdWPnvQEvHP51hsCZ2hxsnfMmiKCzsXTSG2pv1MtjYJmun5m1U4L",
  "key16": "2H5quKjLn1PYteGjPbLW9JvJ3SzAsWcr1SNYi73jaN1m35MPSYQzCs1NHacxeMSnp9jbsPhfYW7EdjjL7VzVukeY",
  "key17": "3tSftXi8PKk4xWfcGdhhZQ2tYLAQCu4X5VonUE787hUkEnLUahMbqbQPz6xYTdGGtiWeVrgMTVFVMbQ4qfEgxNWg",
  "key18": "45J8thwQ3T5sqNg4SQJLJiDrtd1H8EfcPG7W1gKFN8KbMqiUY7pN3rZET74EtvsGLvbdCGyGmgZh5Go6jMGSEA9Z",
  "key19": "4hAvM84thsm9LZvYabigcuHyv8nh2PrNsNXsnXSmv1XMnhar9AoV8o84iYYYLm1fUvnwe58kvjuJq8pdMM2daYWr",
  "key20": "2WP6Q8JN3FC8xKbE3trfWG5Wsjj2vmhTdzhFo2p4EHcJRBUug5NV8mm737xyLPC9bFADz9WTcJfzSbLCUgxDKsvY",
  "key21": "mKvwcUHKcPYK8urLPs55boiQQUt59ACpYyS5mEfp5utbxZFeXUtTgvpjSUHQSVGpKK15fdR3YxzPgHLqdkrvCLz",
  "key22": "31JGmQ25omMtqQtmHTigSgPtkmQ8RecnRVzAtgxjTyazdckeJ5ztBSFnuecEAWvjeDYDvPNjve69XgcEfWqu9dLe",
  "key23": "2Rpt8WWsbrV8BVqX63rEgrwMkpSsRVuCAqjoUbCb3AoAHyA3Tnhq5XPcXr4FZQJWLXTr133qL3eaiZUSN5MMGcDe",
  "key24": "25vtHE4LwV34UKtV2TiBekj91UXvUuETFcuqyAAEdskoWWRxDXVvcR6LENN6rmCv93hwUpwyofJyj6zQTB3GpSWs",
  "key25": "PJbaBw9GaihgqomhYJ87t8prndGWHkbF4MZ59ijyTLKARJKdVu2AgmQUFUdFM9fy7ERhBV8PEKMc7F8p5W1FZ4s"
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
