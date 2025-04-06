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
    "5YjVPC4cEgZiJVYGS9M6W7iuBL4eLtv8JB8mBLHX7ugzPGyknGQVnWVBoC88bJugovtbnD3qDUsu3Bb3ScDk86mi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nBqRxmyx2WAq19Ck4uEMUZQ1HvwaP5SWXg5y5JEvRMBipKEcWidMjtngEAaBvqeXx9T5NHtihW95h2oDG5keJ8o",
  "key1": "3ptA3DSTMWQ1GvjGkvcPFd6ZyvmyZR2pTnquz8FyAYt7AP6kqHiDPEY3cprQc8RX7SWL7dcDZ48Ayp9W2bauzCZD",
  "key2": "3DJNPwnLdr6JdeE6gsukaEtniMfPLoY643e18aeSPtwoPCZwvnTqqdDY8aKUmh5jCHFFGZRLbC8sBTvDqYhRBZwQ",
  "key3": "445i8DmzY9AASCxZMo1CkpGyNBma17R9oworU3jbih3y4eweoiHsp9SGBcR24iHPdsqe6JuEDKtqvbUJ4RzKxb6m",
  "key4": "5srmfm6zXrFRztkXRzjxRms7R5JYPfgNaZ8kHeBv7KNoDn7xA4eMP2ojsQPM2SVdm7q8cpWcF6UES6eJDxUfbD2n",
  "key5": "2gTx17covpGc1Tyun6MioKTxESyV4v6Vh1SqAzuocsqPLo7yKYNPd25rbpBjenteeMNHqoxq3F4uWf36HksaAdi3",
  "key6": "9y33i3ZdCv7SpRqyq6pxENaGoF3GWRSDzzABEziVUrWTGMrGzDeB2gRxjgCwPB72admhJvGRWoNfyJSwJvrrg8B",
  "key7": "3td1RQ2D6cGBrudKJVFDdwBF27W91xCnWQGeLxcp4dcd7JG62Jy9aW5hfAyJthifXYLtRjnRNVRAVVcQKMLqBKoi",
  "key8": "3HeUa8BQqHsmy22gCMuJHfAYgsKnLrA12czdv84rHBTku5HLchC3jaRbkxDCk1tCBb5eKB5fSafp1jaELShdVSyS",
  "key9": "57pEzHz4KVTXFQGdbiJfPsv7MuzMNznnVn3j1cXUAEPsLYrod3FbAfFZUja9MdBW87YdDS7bjf9CYG9XtGWyE5xs",
  "key10": "AxxpLMozAGDDHXgNnn7eTuhXUTtmFr3BaKo3C3cQpXr3iVCACs5d4uFzUELuh4jedfNgQjANy1L1dv91Wo5UBm7",
  "key11": "5urkgWU315uKCc2QVMs1jiN4d4wg6XzXzr9hZ26zC3Z6p15PeqMpwPv95Y93myZdudfjUzEoxUXPtS4rSoxM8kdF",
  "key12": "cXKPnCH5D2ssvcfSrTpvcGRr3yqLXEoB5pEsdwNgW6ezRs5XDeNaEZX46otayyKL5P52bQQMujb1XC31cR8e3r4",
  "key13": "3DTaBYXnULkrpBpwfoHQdrsi98riq7tCPWYEK4dmXuFMyePDU7PrRtqEKFezGv38n9U5PXwSRs7d9pBNrr3C31fs",
  "key14": "2TxY3XxtKB52v76WvFSYGfZLRse3K67vtxjH12bUtpSEpiCuRdTFPCq4Qd6un1DjjguxVgumPMBCxFfmeGitWQN7",
  "key15": "3wGfrtXf6EqATQjLtWamEV4JLvW2gnVRQBHhcHKyXNKiQyZsdt64WaqpjDGoLf6d5oPLKoecq76F6uCjNfez9gh8",
  "key16": "25Q4QdEyAHBLM1g44ehXA5emp8YyrN5aJx6jrLh64gEQK4vbvDqprdyog5QfMCNF7DyRA3ihDZRRyW4HqDpApFdP",
  "key17": "28pkkn9bbyDJvzFh9JAkQ2m29oZGJ8p4G7PFxA26T6H13xTsuBiqdDekXLx59v6LHPsBS9rWjA1EcANV3K8JPd6H",
  "key18": "35h2WkNTPg3kVAaH6hPNtWpPMqy65kvCTe29tG5xABpiCAQDmgYCfi1SLdG16wyVHePkCGZqGZTbwDT5tVb6mSmR",
  "key19": "3PGDJyYijCjuKtVLzCtbWCY8FFShjgy1849UGDmpVeEz3kuPMEB4xurPtJqwSaXpGRtZ6w8RuroczC1jKDEQZ1gw",
  "key20": "52t8BJCDwWvvEAYHsPWHUASBaAQvxDiaYCDdozsEBmjLtByYG3wBxdvmjB6Y4mtddS59fr1a63juaA78U3dv5pgV",
  "key21": "365iLsGTFVjjRePQKjBNFx4ZTxL8eJ2KgLk6fTxUsmAAX3i4c7vAC38pU7efzbNCpfqcR52NBEDqbgboikxJD47s",
  "key22": "39vRgci8LrLujZGZEBwhmLih5tGKK9uPvvRuHKcz1nKUxpwaSKir7nLH58sZ4B9tggKSJ4y48nnhs6oHnSgazAKu",
  "key23": "GUNYqahMHKdowzcGVi3syQAEPr2SrvHcHNKPmpND3ruYCjd2gov22FbaXJXNkCqn2zdi7dZUEiNqc1qA6CLQxnS",
  "key24": "x8USLNhPNuFfBkxLcugpN95BLFeZz46GjgCb2xJugRzXsSEQGVoqqAcj5HuGWhF5S8C69yB3anFGD9jstd913uF",
  "key25": "3c8wuLvxfE3DkEnrxg7MXrWCyvANLFsYU9ZVqkXEwRDpAYWZe2NijhKd3onTgPmvYsV7jdyZG4BXWL7vPXQTGdvU",
  "key26": "3bKYjnRCqWr8nWb7UUjyUG5jFjh3kDVzWDYWzibAdY3uHWUgkSwy5WBG5JrrnRsaxeSL17fx6CMvbcQXjeKNsDdM",
  "key27": "2dizGxPsCi6zBTNd8FzrDxmEHFr5Ft3r2Xh7ofX5kxPEo4yz5fuUdLFzhrxwmoUpUAqQLVfrhoQJ247xE9LM7Y9d",
  "key28": "3Y4yZUZQ4zzR3FUSKKZt5mW1w7JMTBcCDRuSp89D8MGTVtRHxSJvf5gswegEWtEcDDj6VDRLXDtb2yYtmWKUhMuk",
  "key29": "K1d2gN4NJMKp3GPzBTuLt2PSBw5cShhfW4dTT5j4PUbTuhiZKYkqs93hTWWb9MNsvH1BcntK9BHWnEjXuDETTWD",
  "key30": "4SgJKV5V56BD6aY1mxPciiyAAW5gtxffjQFodLuVpVN46XoNh979AXNV7KSoKxEmgAyPP2oj1EErTA26vikP8wfF",
  "key31": "4HH9SA5k9ArXK5Hi1qa2h5y8SCJzDKjzZKr3ryrJKPueDBF7uTL5F6WVHthDzH4YnNKL4XS8L4iRcCgbYiSNFBVv",
  "key32": "VFZEZqJZVvyR1NSeMPFK6v9VHvNdFFpHgw9yaoRAYKdVndfYDdSbcMohYYyNve5gZF1VQ1zXKwvmR18kntvaMBm",
  "key33": "4aEBV9yvNCr7qaUF7dob7iRugch4X3BcNNfF3FS151yd9Gz6ytDZeCSa3hgjCBfgUQUgeHchzJk4mE5iFkpsJnEH",
  "key34": "4RpBabk9YtZBzNBRA2XneWoEDbhWkzXDXXKDVhAA4YTt2qfa5WWaHLT1Vj8vLMH5kRi9xVChFgr5493xFdh6u8Gy",
  "key35": "4cUnfuQDRzPPmBhwNB3rTADw51eDvMT5yrF97gyg7wXXpdn6kbf7cqdcTuzXLqwfUDowFibAcLKmcsWsYUZHfnx9",
  "key36": "3cbaoBWeWs8jVAxZMDKNuw5sidmVfJgCwiANwWmL1ZfFUgyoxFeQN95L5vWXVvBrEMxp5SZj9bCmKk7AnNxV2V2j",
  "key37": "5UJW5qiwPK9kNP3Qj25teZefjSU6XYejkZXtBfAgcrychV59pMbTFhLUR53AtwcHFpDm2t8QVsZem9MVL42DnoYq",
  "key38": "5iZrbNFTVfaR5Vn84hbdwrPCoERGzMiwFwUG8RgXeeHRxph3i233gJVRguds6h9r4z5woobCQ6g2fuUyThpGAvFs",
  "key39": "4oK6wfMHcffnZWtMvgyxvZLCzFoULUetzu2MiGPikxWqzQjqQghGwkjYLTTL7yGeLp95jfj4QQE7oV5QF5KHpdyr"
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
